// Type definitions for Auto.js internal module threads
//
// Project: https://github.com/SuperMonster003/Auto.js-TypeScript-Declarations
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.3.5
//
// Last modified: Oct 21, 2021

/// <reference path="../auto.js.d.ts" />

/**
 * @Source %autojs%/assets/modules/__threads__.js
 */

declare namespace Internal {
    class Threads extends com.stardust.autojs.runtime.api.Threads {
        /**
         * @Overrides for JSDoc or more specific types
         */

        /**
         * @example
         * let thread = threads.start(function () {
         *     while (Date.now() < Infinity) {
         *         log(Math.random().toFixed(2));
         *     }
         * });
         * thread.join(50);
         * thread.interrupt();
         * @example Source code summary (zh-CN: 源代码摘要)
         * private final HashSet<Thread> mThreads = new HashSet<>();
         * private final Thread mMainThread;
         * private int mSpawnCount = 0;
         * private boolean mExit = false;
         * private ScriptRuntime mRuntime;
         * public TimerThread start(Runnable runnable) {
         *     TimerThread thread = createThread(runnable);
         *     synchronized (mThreads) {
         *         if (mExit) {
         *             throw new IllegalStateException('script exiting');
         *         }
         *         mThreads.add(thread);
         *         thread.setName(mMainThread.getName() + " (Spawn-" + mSpawnCount + ")");
         *         mSpawnCount++;
         *         thread.start();
         *     }
         *     return thread;
         * }
         * -- @NonNull
         * private TimerThread createThread(Runnable runnable) {
         *     return new TimerThread(mRuntime, mRuntime.timers.getMaxCallbackUptimeMillisForAllThreads(),
         *             runnable
         *     ) {
         *         -- @Override
         *         protected void onExit() {
         *             synchronized (mThreads) {
         *                 mThreads.remove(Thread.currentThread());
         *             }
         *             super.onExit();
         *         }
         *     };
         * }
         * @see com.stardust.autojs.core.looper.TimerThread
         * @see com.stardust.autojs.runtime.ScriptRuntime
         * @see java.util.HashSet
         */
        start(runnable: java.lang.Runnable | Func): com.stardust.autojs.core.looper.TimerThread;

        /**
         * @example
         * let i = 0;
         * let thd_lock = threads.lock();
         * threads.start(function () {
         *     while (i < 100) {
         *         thd_lock.lock();
         *         log("subt: " + ++i);
         *         thd_lock.unlock();
         *     }
         * }).waitFor();
         * while (i < 100) {
         *     thd_lock.lock();
         *     log("main: " + ++i);
         *     thd_lock.unlock();
         * }
         * @example
         * const nums = [];
         * const numsLock = threads.lock();
         * let thd_1 = threads.start(function () {
         *     numsLock.lock();
         *     nums.push(123);
         *     log("线程: %s, 数组: %s", threads.currentThread(), nums);
         *     numsLock.unlock();
         * });
         * let thd_2 = threads.start(function () {
         *     numsLock.lock();
         *     nums.push(456);
         *     log("线程: %s, 数组: %s", threads.currentThread(), nums);
         *     numsLock.unlock();
         * });
         * thd_1.join();
         * thd_2.join();
         * numsLock.lock();
         * nums.pop();
         * log("线程: %s, 数组: %s", threads.currentThread(), nums);
         * numsLock.unlock();
         * @example
         * let lock = threads.lock();
         * let complete = lock.newCondition();
         * let sum = 0;
         * threads.start(function () {
         *     for (let i = 1; i <= 6e6; i++) {
         *         sum += i;
         *     }
         *     lock.lock();
         *     complete.signal();
         *     lock.unlock();
         * });
         * lock.lock();
         * toastLog("calculating...");
         * complete.await();
         * lock.unlock();
         * log("sum: " + sum);
         * toastLog("OK");
         * @example Source code summary (zh-CN: 源代码摘要)
         * public Lock lock() {
         *     return new ReentrantLock();
         * }
         * @see java.util.concurrent.locks.Lock
         * @see java.util.concurrent.locks.ReentrantLock
         */
        lock(): java.util.concurrent.locks.Lock;

        /**
         * @example
         * let i = threads.atomic();
         * threads.start(function () {
         *     while (i.get() < 100) {
         *         log("subt: " + i.incrementAndGet());
         *     }
         * }).waitFor();
         * while (i.get() < 100) {
         *     log("main: " + i.incrementAndGet());
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * public AtomicLong atomic(long value) {
         *     return new AtomicLong(value);
         * }
         * public AtomicLong atomic() {
         *     return new AtomicLong();
         * }
         * @see java.util.concurrent.atomic.AtomicLong
         */
        atomic(value?: number): java.util.concurrent.atomic.AtomicLong;

        /**
         * @example
         * let sum = threads.disposable();
         * threads.start(function () {
         *     let s = 0;
         *     for (let i = 1; i <= 6e6; i++) {
         *         s += i;
         *     }
         *     sum.setAndNotify(s);
         * });
         * toastLog("calculating...");
         * log("sum: " + sum.blockedGet());
         * toastLog("OK");
         * @example Source code summary (zh-CN: 源代码摘要)
         * public VolatileDispose disposable() {
         *     return new VolatileDispose();
         * }
         * @see com.stardust.concurrent.VolatileDispose
         */
        disposable(): com.stardust.concurrent.VolatileDispose<any>;

        /**
         * @example
         * let sum = events.emitter(threads.currentThread()).on('result', function (s) {
         *     log("sum: " + s);
         *     log("thread: " + threads.currentThread());
         *     toast('ok');
         * });
         * threads.start(function () {
         *     toastLog('calculating...');
         *     let s = 0;
         *     for (let i = 1; i <= 6e6; i++) {
         *         s += i;
         *     }
         *     sum.emit('result', s);
         * });
         * @example Source code summary (zh-CN: 源代码摘要)
         * private final Thread mMainThread;
         * private MainThreadProxy mMainThreadProxy;
         * public Object currentThread() {
         *     Thread thread = Thread.currentThread();
         *     if (thread == mMainThread)
         *         return mMainThreadProxy;
         *     return thread;
         * }
         * @see com.stardust.autojs.core.looper.MainThreadProxy
         */
        currentThread(): any;
    }
}

declare interface Promise {
    /**
     * @example Source code summary (zh-CN: 源代码摘要)
     * global.Promise.prototype.wait = function () {
     *     let disposable = threads.disposable();
     *     this.then(result => {
     *         disposable.setAndNotify({result: result});
     *     }).catch(error => {
     *         disposable.setAndNotify({error: error});
     *     });
     *     let r = disposable.blockedGet();
     *     if (r.error) {
     *         throw r.error;
     *     }
     *     return r.result;
     * };
     */
    wait(): any;
}

/**
 * @example
 * let sum = 1;
 * let add = (x, y) => sum += x + y;
 * let syncAdd = sync(add);
 * toastLog("sum: " + syncAdd(2, 3));
 * @example
 * let i = 0;
 * let incrementAndGet = sync(() => ++i);
 * threads.start(function () {
 *     while (i < 100) {
 *         log("sub : " + incrementAndGet());
 *     }
 * }).waitFor();
 * while (i < 100) {
 *     log("main: " + incrementAndGet());
 * }
 * @example Source code summary (zh-CN: 源代码摘要)
 * scope.sync = function (func, lock) {
 *     lock = lock || null;
 *     return new org.mozilla.javascript.Synchronizer(func, lock);
 * };
 * @see org.mozilla.javascript.Synchronizer
 */
declare function sync<T extends org.mozilla.javascript.Scriptable, U = (Func)>(func: T | U, lock?: any): org.mozilla.javascript.Synchronizer | T | U;