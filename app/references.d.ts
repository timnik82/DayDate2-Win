/// <reference path="./node_modules/@nativescript/types/index.d.ts" />

declare module '@nativescript/core/application' {
    export const android: {
        startActivity: any;
        foregroundActivity: any;
        view: {
            View: any;
            WindowManager: {
                LayoutParams: {
                    FLAG_FULLSCREEN: number;
                    FLAG_LAYOUT_IN_SCREEN: number;
                    FLAG_LAYOUT_NO_LIMITS: number;
                    FLAG_KEEP_SCREEN_ON: number;
                };
            };
            OnSystemUiVisibilityChangeListener: any;
        };
        on(eventName: string, callback: (args: any) => void): void;
    };
    
    export const run: (params: { moduleName: string }) => void;
}

declare module '@nativescript/core' {
    export namespace android {
        export namespace app {
            export interface Activity {
                getWindow(): any;
            }
        }
    }
} 