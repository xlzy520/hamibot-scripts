// Type definitions for Auto.js internal module automator
//
// Project: https://github.com/SuperMonster003/Auto.js-TypeScript-Declarations
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.3.5
//
// Last modified: Oct 21, 2021

/// <reference path="../auto.js.d.ts" />

/**
 * @Source %autojs%/assets/modules/__automator__.js
 */

declare namespace Internal {
    interface Automator {
        /**
         * @example
         * automator.click(360, 540);
         * @example Source code summary (zh-CN: 源代码摘要)
         * return runtime.automator.click(x, y);
         */
        click(x: number, y: number): boolean;

        /**
         * @param text
         * @param [index=0]
         * @example
         * // all "OK" clickable widgets will be clicked
         * automator.click("OK");
         * @example
         * // only the first "OK" clickable widget be clicked
         * automator.click("OK", 0);
         * @example Source code summary (zh-CN: 源代码摘要)
         * return runtime.automator.click(runtime.automator.text(...args));
         */
        click(text: string, index?: number): boolean;

        /**
         * @example
         * automator.click(0, 0, 300, 500);
         * @example Source code summary (zh-CN: 源代码摘要)
         * return runtime.automator.click(runtime.automator.bounds(...args));
         */
        click(left: number, top: number, right: number, bottom: number): boolean;

        /**
         * @example
         * automator.longClick(360, 540);
         * @example Source code summary (zh-CN: 源代码摘要)
         * return runtime.automator.longClick(x, y);
         */
        longClick(x: number, y: number): boolean;

        /**
         * @param text
         * @param [index=0]
         * @example
         * // all "OK" long clickable widgets will be long clicked
         * automator.longClick("OK");
         * @example
         * // only the first "OK" long clickable widget be long clicked
         * automator.longClick("OK", 0);
         * @example Source code summary (zh-CN: 源代码摘要)
         * return runtime.automator.longClick(runtime.automator.text(...args));
         */
        longClick(text: string, index?: number): boolean;

        /**
         * @example
         * automator.longClick(0, 0, 300, 500);
         * @example Source code summary (zh-CN: 源代码摘要)
         * return runtime.automator.longClick(runtime.automator.bounds(...args));
         */
        longClick(left: number, top: number, right: number, bottom: number): boolean;

        /**
         * @example
         * for (let i = 0; i < 100; i++) {
         *     press(500, 1000, 1);
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.automator.press.bind(runtime.automator);
         */
        press(x: number, y: number, delay: number): boolean;

        /**
         * @example
         * automator.gesture(1000, [0, 0], [500, 500], [500, 1000]);
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.automator.gesture.bind(runtime.automator, 0);
         */
        gesture(duration: number, ...points: [X, Y][]): boolean;

        /**
         * @example
         * automator.gestureAsync(1000, [0, 0], [500, 500], [500, 1000]);
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.automator.gestureAsync.bind(runtime.automator, 0);
         */
        gestureAsync(duration: number, ...points: [X, Y][]): void;

        /**
         * @example
         * automator.swipe(540, 600, 540, 200, 500);
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.automator.swipe.bind(runtime.automator);
         * @example Source code summary (zh-CN: 源代码摘要)
         * gesture(0, delay, intArrayOf(x1, y1), intArrayOf(x2, y2));
         */
        swipe(x1: number, y1: number, x2: number, y2: number, delay: number): boolean;

        /**
         * @example
         * automator.gestures(
         *     [0, 500, [800, 300], [500, 1000]],
         *     [0, 500, [300, 1500], [500, 1000]]
         * );
         * @example Source code summary (zh-CN: 源代码摘要)
         * return runtime.automator.gestures(toStrokes(arguments));
         *
         * function toStrokes(args) {
         *     let screenMetrics = runtime.getScreenMetrics();
         *     let len = args.length;
         *     let strokes = java.lang.reflect.Array.newInstance(android.accessibilityservice.GestureDescription.StrokeDescription, len);
         *     for (let i = 0; i < len; i++) {
         *         let gesture = args[i];
         *         let pointsIndex = 1;
         *         let start, delay;
         *         if (typeof (gesture[1]) == 'number') {
         *             start = gesture[0];
         *             delay = gesture[1];
         *             pointsIndex = 2;
         *         } else {
         *             start = 0;
         *             delay = gesture[0];
         *         }
         *         let gestureLen = gesture.length;
         *         let path = new android.graphics.Path();
         *         path.moveTo(screenMetrics.scaleX(gesture[pointsIndex][0]), screenMetrics.scaleY(gesture[pointsIndex][1]));
         *         for (let j = pointsIndex + 1; j < gestureLen; j++) {
         *             path.lineTo(screenMetrics.scaleX(gesture[j][0]), screenMetrics.scaleY(gesture[j][1]));
         *         }
         *         strokes[i] = new android.accessibilityservice.GestureDescription.StrokeDescription(path, start, delay);
         *     }
         *     return strokes;
         * }
         */
        gestures(...groups: (number | number[])[]): boolean;

        /**
         * @example
         * automator.gesturesAsync(
         *     [0, 500, [800, 300], [500, 1000]],
         *     [0, 500, [300, 1500], [500, 1000]]
         * );
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.automator.gesturesAsync(toStrokes(arguments));
         *
         * function toStrokes(args) {
         *     let screenMetrics = runtime.getScreenMetrics();
         *     let len = args.length;
         *     let strokes = java.lang.reflect.Array.newInstance(android.accessibilityservice.GestureDescription.StrokeDescription, len);
         *     for (let i = 0; i < len; i++) {
         *         let gesture = args[i];
         *         let pointsIndex = 1;
         *         let start, delay;
         *         if (typeof (gesture[1]) == 'number') {
         *             start = gesture[0];
         *             delay = gesture[1];
         *             pointsIndex = 2;
         *         } else {
         *             start = 0;
         *             delay = gesture[0];
         *         }
         *         let gestureLen = gesture.length;
         *         let path = new android.graphics.Path();
         *         path.moveTo(screenMetrics.scaleX(gesture[pointsIndex][0]), screenMetrics.scaleY(gesture[pointsIndex][1]));
         *         for (let j = pointsIndex + 1; j < gestureLen; j++) {
         *             path.lineTo(screenMetrics.scaleX(gesture[j][0]), screenMetrics.scaleY(gesture[j][1]));
         *         }
         *         strokes[i] = new android.accessibilityservice.GestureDescription.StrokeDescription(path, start, delay);
         *     }
         *     return strokes;
         * }
         */
        gesturesAsync(...groups: (number | number[])[]): void;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.automator.scrollMaxForward();
         */
        scrollDown(): boolean;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.automator.scrollForward(index);
         */
        scrollDown(index: number): boolean;

        /**
         * @param text
         * @param [index=0]
         * @example Source code summary (zh-CN: 源代码摘要)
         * return runtime.automator.scrollForward(runtime.automator.text(...args));
         */
        scrollDown(text: string, index?: number): boolean;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * return runtime.automator.scrollDown(runtime.automator.bounds(...args));
         */
        scrollDown(left: number, top: number, right: number, bottom: number): boolean;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.automator.scrollMaxBackward();
         */
        scrollUp(): boolean;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.automator.scrollBackward(index);
         */
        scrollUp(index: number): boolean;

        /**
         * @param text
         * @param [index=0]
         * @example Source code summary (zh-CN: 源代码摘要)
         * return runtime.automator.scrollBackward(runtime.automator.text(...args));
         */
        scrollUp(text: string, index?: number): boolean;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * return runtime.automator.scrollUp(runtime.automator.bounds(...args));
         */
        scrollUp(left: number, top: number, right: number, bottom: number): boolean;

        /**
         * replace old text with new one
         * @example
         * automator.setText("test");
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.automator.setText(runtime.automator.editable(-1), text);
         */
        setText(text: string);

        /**
         * replace old text with new one
         * @example
         * automator.setText(2, "test");
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.automator.setText(runtime.automator.editable(index), text);
         */
        setText(index: number, text: string);

        /**
         * append text to old text
         * @example
         * automator.input("test");
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.automator.appendText(runtime.automator.editable(-1), text);
         */
        input(text: string);

        /**
         * append text to old text
         * @example
         * automator.input(2, "test");
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.automator.appendText(runtime.automator.editable(index), text);
         */
        input(index: number, text: string);
    }

    interface Auto {
        /**
         * Set accessibility (aka a11y) service mode and make sure it's enabled.
         * An exception will be thrown and a11y configuration page will be prompted without the service running normally.
         * zh-CN: 设置无障碍模式并确保无障碍服务启动; 如果无障碍服务未启用, 则抛出异常并跳转到无障碍服务启用界面
         * @param [mode="normal"]
         * @example
         * // normal mode (default)
         * // zh-CN: 正常模式 (默认)
         * auto();
         * auto("normal"); // same as above
         *
         * // fast mode
         * // inspect screen layout at a faster speed in this mode
         * // zh-CN: 快速模式
         * // 该模式下会启用控件缓存, 从而选择器获取屏幕控件更快
         * // 对于需要快速的控件操作的脚本可以使用该模式, 一般脚本则没有必要使用该函数
         * auto("fast");
         *
         * // the additional
         * // auto.waitFor() and auto.setMode() are recommended,
         * // as auto() may interrupt the current script
         * // zh-CN: 附加说明
         * // 建议使用 auto.waitFor() 和 auto.setMode() 代替该方法
         * // 若无障碍服务未启动, 使用 auto() 后脚本会立即停止运行
         * // 而 auto.waitFor() 在无障碍服务启动后使脚本继续运行
         * @example Source code summary (zh-CN: 源代码摘要)
         * if (mode) {
         *    global.auto.setMode(mode);
         * }
         * runtime.accessibilityBridge.ensureServiceEnabled();
         * @see auto.waitFor
         * @see com.stardust.autojs.core.accessibility.AccessibilityBridge.ensureServiceEnabled
         */
        (mode?: Automator.Mode): void;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * return runtime.accessibilityBridge.getService();
         * @see com.stardust.autojs.core.accessibility.AccessibilityBridge.getService
         */
        service: com.stardust.autojs.core.accessibility.AccessibilityService;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * let service = auto.service;
         * return service === null ? [] : util.java.toJsArray(service.getWindows(), true);
         * @see auto.service
         * @see android.accessibilityservice.AccessibilityService.getWindows
         */
        windows: java.util.List<android.view.accessibility.AccessibilityWindowInfo>;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * let root = runtime.accessibilityBridge.getRootInCurrentWindow(); // may be null
         * return root && com.stardust.automator.UiObject.Companion.createRoot(root);
         * @see com.stardust.automator.UiObject.Companion.createRoot
         */
        root: UiObject$;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * let root = runtime.accessibilityBridge.getRootInActiveWindow();
         * return root && com.stardust.automator.UiObject.Companion.createRoot(root);
         * @see com.stardust.automator.UiObject.Companion.createRoot
         */
        rootInActiveWindow: UiObject$;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * return util.java.toJsArray(runtime.accessibilityBridge.windowRoots(), false)
         *     .map(root => com.stardust.automator.UiObject.Companion.createRoot(root));
         * @see com.stardust.autojs.core.accessibility.AccessibilityBridge.windowRoots
         * @see com.stardust.automator.UiObject.Companion.createRoot
         */
        windowRoots: UiObject$[];

        /**
         * @example
         * auto.waitFor();
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.accessibilityBridge.waitForServiceEnabled();
         * @see com.stardust.autojs.core.accessibility.AccessibilityBridge.waitForServiceEnabled
         */
        waitFor(): void;

        /**
         * @example
         * auto.setMode("normal");
         * @example
         * auto.setMode("fast");
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.accessibilityBridge.setMode({"normal": 0, "fast": 1}[modeStr]);
         * @see com.stardust.autojs.core.accessibility.AccessibilityBridge.setMode
         */
        setMode(modeStr: Automator.Mode): void;

        /**
         * @example
         * auto.setFlags("useUsageStats");
         * @example
         * auto.setFlags(["useShell", "useUsageStats", "findOnUiThread"]);
         * @example Source code summary (zh-CN: 源代码摘要)
         * const flagsMap = {"findOnUiThread": 1, "useUsageStats": 2, "useShell": 4};
         * let flagsStrings = Array.isArray(flags)) ? flags : [flags];
         * let flagsInt = 0;
         * flagStrings.forEach(str => flagsInt |= flagsMap[str]);
         * runtime.accessibilityBridge.setFlags(flagsInt);
         * @see com.stardust.autojs.core.accessibility.AccessibilityBridge.setFlags
         */
        setFlags(flags: Automator.Flags | Automator.Flags[]): void;

        /**
         * @example
         * auto.setWindowFilter(function (window) {
         *     return window.title === "QQ";
         * });
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.accessibilityBridge.setWindowFilter(
         *     new com.stardust.autojs.core.accessibility.AccessibilityBridge.WindowFilter(filter)
         * );
         * @see com.stardust.autojs.core.accessibility.AccessibilityBridge.WindowFilter
         * @see android.view.accessibility.AccessibilityWindowInfo
         */
        setWindowFilter(filter: (info: android.view.accessibility.AccessibilityWindowInfo) => boolean): void;
    }
}

declare namespace Automator {
    type Flags = 'findOnUiThread' | 'useUsageStats' | 'useShell';
    type Mode = 'normal' | 'fast';
    type UiObject = UiObject$;
}

/**
 * @see com.stardust.autojs.core.accessibility.SimpleActionAutomator.back
 */
declare function back(): boolean;

/**
 * @see com.stardust.autojs.core.accessibility.SimpleActionAutomator.home
 */
declare function home(): boolean;

/**
 * @see com.stardust.autojs.core.accessibility.SimpleActionAutomator.powerDialog
 */
declare function powerDialog(): boolean;

/**
 * @see com.stardust.autojs.core.accessibility.SimpleActionAutomator.notifications
 */
declare function notifications(): boolean;

/**
 * @see com.stardust.autojs.core.accessibility.SimpleActionAutomator.quickSettings
 */
declare function quickSettings(): boolean;

/**
 * @see com.stardust.autojs.core.accessibility.SimpleActionAutomator.recents
 */
declare function recents(): boolean;

/**
 * @see com.stardust.autojs.core.accessibility.SimpleActionAutomator.splitScreen
 */
declare function splitScreen(): boolean;

/**
 * @see automator.click
 */
declare function click(x: number, y: number): boolean;
/**
 * @param text
 * @param [index=0]
 * @see automator.click
 */
declare function click(text: string, index?: number): boolean;
/**
 * @see automator.click
 */
declare function click(left: number, top: number, right: number, bottom: number): boolean;

/**
 * @see automator.longClick
 */
declare function longClick(x: number, y: number): boolean;
/**
 * @param text
 * @param [index=0]
 * @see automator.longClick
 */
declare function longClick(text: string, index?: number): boolean;
/**
 * @see automator.longClick
 */
declare function longClick(left: number, top: number, right: number, bottom: number): boolean;

/**
 * @see automator.press
 */
declare function press(x: number, y: number, delay: number): boolean;

/**
 * @see automator.gesture
 */
declare function gesture(duration: number, ...points: [X, Y][]): boolean;

/**
 * @see automator.gestureAsync
 */
declare function gestureAsync(duration: number, ...points: [X, Y][]): void;

/**
 * @see automator.swipe
 */
declare function swipe(x1: number, y1: number, x2: number, y2: number, delay: number): boolean;

/**
 * @see automator.gestures
 */
declare function gestures(...groups: (number | number[])[]): boolean;

/**
 * @see automator.gesturesAsync
 */
declare function gesturesAsync(...groups: (number | number[])[]): void;

/**
 * @see automator.scrollDown
 */
declare function scrollDown(index?: number): boolean;
/**
 * @param text
 * @param [index=0]
 * @see automator.scrollDown
 */
declare function scrollDown(text: string, index?: number): boolean;
/**
 * @see automator.scrollDown
 */
declare function scrollDown(left: number, top: number, right: number, bottom: number): boolean;

/**
 * @see automator.scrollUp
 */
declare function scrollUp(index?: number): boolean;
/**
 * @param text
 * @param [index=0]
 * @see automator.scrollUp
 */
declare function scrollUp(text: string, index?: number): boolean;
/**
 * @see automator.scrollUp
 */
declare function scrollUp(left: number, top: number, right: number, bottom: number): boolean;

/**
 * @see automator.setText
 */
declare function setText(text: string);
/**
 * @see automator.setText
 */
declare function setText(index: number, text: string);

/**
 * @see automator.input
 */
declare function input(text: string);
/**
 * @see automator.input
 */
declare function input(index: number, text: string);

declare type UiObject$ = com.stardust.automator.UiObject;