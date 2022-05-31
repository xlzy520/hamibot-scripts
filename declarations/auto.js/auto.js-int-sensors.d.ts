// Type definitions for Auto.js internal module sensors
//
// Project: https://github.com/SuperMonster003/Auto.js-TypeScript-Declarations
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.3.5
//
// Last modified: Oct 21, 2021

/// <reference path="../auto.js.d.ts" />

/**
 * @Source %autojs%/assets/modules/__sensors__.js
 */

declare namespace Internal {
    class Sensors extends com.stardust.autojs.runtime.api.Sensors {
        /**
         * @Overrides for JSDoc or more specific types
         */

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * sensors.ignoresUnsupportedSensor = true;
         * sensors.on("unsupported_sensor", function (sensorName) {
         *     toastLog("unsupported sensor: " + sensorName);
         * });
         * log(sensors.register("test") !== null);
         */
        ignoresUnsupportedSensor: boolean;

        register(sensorName: 'light', delay?: number): Sensors.Light;

        register(sensorName: 'accelerometer', delay?: number): Sensors.Accelerometer;

        register(sensorName: 'ambient_temperature', delay?: number): Sensors.AmbientTemperature;

        register(sensorName: 'gravity', delay?: number): Sensors.Gravity;

        register(sensorName: 'gyroscope', delay?: number): Sensors.Gyroscope;

        register(sensorName: 'linear_acceleration', delay?: number): Sensors.LinearAcceleration;

        register(sensorName: 'magnetic_field', delay?: number): Sensors.MagneticField;

        register(sensorName: 'orientation', delay?: number): Sensors.Orientation;

        register(sensorName: 'pressure', delay?: number): Sensors.Pressure;

        register(sensorName: 'proximity', delay?: number): Sensors.Proximity;

        register(sensorName: 'relative_humidity', delay?: number): Sensors.RelativeHumidity;
    }
}

declare namespace Sensors {
    type Event = android.hardware.SensorEvent;
    type EventEmitter = com.stardust.autojs.runtime.api.Sensors.SensorEventEmitter;

    interface Light {
        on(eventName: 'change', listener: (event: Event, light: number) => void): EventEmitter;

        once(eventName: 'change', listener: (event: Event, light: number) => void): EventEmitter;
    }

    interface Accelerometer {
        on(eventName: 'change', listener: (event: Event, ax: number, ay: number, az: number) => void): EventEmitter;

        once(eventName: 'change', listener: (event: Event, ax: number, ay: number, az: number) => void): EventEmitter;
    }

    interface Orientation {
        on(eventName: 'change', listener: (event: Event, azimuth: number, pitch: number, roll: number) => void): EventEmitter;

        once(eventName: 'change', listener: (event: Event, azimuth: number, pitch: number, roll: number) => void): EventEmitter;
    }

    interface Gyroscope {
        on(eventName: 'change', listener: (event: Event, wx: number, wy: number, wz: number) => void): EventEmitter;

        once(eventName: 'change', listener: (event: Event, azimuth: number, pitch: number, roll: number) => void): EventEmitter;
    }

    interface MagneticField {
        on(eventName: 'change', listener: (event: Event, bx: number, by: number, bz: number) => void): EventEmitter;

        once(eventName: 'change', listener: (event: Event, azimuth: number, pitch: number, roll: number) => void): EventEmitter;
    }

    interface Gravity {
        on(eventName: 'change', listener: (event: Event, gx: number, gy: number, gz: number) => void): EventEmitter;

        once(eventName: 'change', listener: (event: Event, azimuth: number, pitch: number, roll: number) => void): EventEmitter;
    }

    interface LinearAcceleration {
        on(eventName: 'change', listener: (event: Event, ax: number, ay: number, az: number) => void): EventEmitter;

        once(eventName: 'change', listener: (event: Event, azimuth: number, pitch: number, roll: number) => void): EventEmitter;
    }

    interface AmbientTemperature {
        on(eventName: 'change', listener: (event: Event, t: number) => void): EventEmitter;

        once(eventName: 'change', listener: (event: Event, azimuth: number, pitch: number, roll: number) => void): EventEmitter;
    }

    interface Pressure {
        on(eventName: 'change', listener: (event: Event, p: number) => void): EventEmitter;

        once(eventName: 'change', listener: (event: Event, azimuth: number, pitch: number, roll: number) => void): EventEmitter;
    }

    interface Proximity {
        on(eventName: 'change', listener: (event: Event, distance: number) => void): EventEmitter;

        once(eventName: 'change', listener: (event: Event, azimuth: number, pitch: number, roll: number) => void): EventEmitter;
    }

    interface RelativeHumidity {
        on(eventName: 'change', listener: (event: Event, rh: number) => void): EventEmitter;

        once(eventName: 'change', listener: (event: Event, azimuth: number, pitch: number, roll: number) => void): EventEmitter;
    }
}