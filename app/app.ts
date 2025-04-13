import * as Application from '@nativescript/core/application';

declare const android: any;

Application.run({ moduleName: 'app-root' });

// Setup Android-specific UI after the app is launched
if (Application.android) {
    Application.android.on('activityCreated', (args: any) => {
        try {
            const activity = args.activity;
            const window = activity.getWindow();
            
            // Basic flags that work on older Android versions
            const View = android.view.View;
            let flags = View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_FULLSCREEN;
            
            // Only add IMMERSIVE_STICKY if available (Android 4.4+)
            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.KITKAT) {
                flags |= View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY;
            }
            
            window.getDecorView().setSystemUiVisibility(flags);
            
            // Set window flags
            const WindowManager = android.view.WindowManager;
            window.addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);
            
            // Add a listener to maintain fullscreen when system UI visibility changes
            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.KITKAT) {
                window.getDecorView().setOnSystemUiVisibilityChangeListener(new android.view.View.OnSystemUiVisibilityChangeListener({
                    onSystemUiVisibilityChange: function(visibility: number) {
                        window.getDecorView().setSystemUiVisibility(flags);
                    }
                }));
            }
        } catch (error) {
            console.error('Error in activityCreated:', error);
        }
    });
    
    Application.android.on('activityResumed', (args: any) => {
        try {
            const activity = args.activity;
            const window = activity.getWindow();
            
            const View = android.view.View;
            let flags = View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_FULLSCREEN;
                
            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.KITKAT) {
                flags |= View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY;
            }
            
            window.getDecorView().setSystemUiVisibility(flags);
        } catch (error) {
            console.error('Error in activityResumed:', error);
        }
    });
}