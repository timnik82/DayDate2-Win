import { Observable as ObservableBase } from '@nativescript/core/data/observable';
import { Frame } from '@nativescript/core/ui/frame';
import * as appSettings from '@nativescript/core/application-settings';
import { android as androidApp } from '@nativescript/core/application';
import { Screen } from '@nativescript/core/platform';
import { Page } from '@nativescript/core/ui/page';
import { StackLayout } from '@nativescript/core/ui/layouts/stack-layout';

declare const android: any;

export class MainViewModel extends ObservableBase {
    private updateInterval: any;
    private shiftInterval: any;
    private currentShift = { x: 0, y: 0 };
    private screenWidth: number;
    private screenHeight: number;
    private containerWidth: number = 0;
    private containerHeight: number = 0;
    private page: Page;
    
    constructor() {
        super();
        
        // Initialize default values
        this.set('weekday', '');
        this.set('fullDate', '');
        this.set('fontSize', 80);
        this.set('fontFamily', 'sans-serif');
        this.set('textShiftX', 0);
        this.set('textShiftY', 0);
        
        // Get screen dimensions
        this.screenWidth = Screen.mainScreen.widthPixels;
        this.screenHeight = Screen.mainScreen.heightPixels;
        
        // Initial update
        this.updateDateTime();
        this.updateFontSettings();
        
        // Set up periodic updates
        this.updateInterval = setInterval(() => this.updateDateTime(), 1000);
        
        // Apply settings
        this.applySettings();
    }
    
    public initializeContainer(page: Page) {
        this.page = page;
        const container = page.getViewById('textContainer') as StackLayout;
        
        if (container) {
            container.on('layoutChanged', () => {
                this.containerWidth = container.getActualSize().width;
                this.containerHeight = container.getActualSize().height;
                console.log('Container size updated:', {
                    width: this.containerWidth,
                    height: this.containerHeight
                });
                // Restart text shifting with new bounds
                this.setupTextShifting();
            });
        }
        
        // Start text shifting if enabled
        this.setupTextShifting();
    }
    
    updateDateTime() {
        const date = new Date();
        const weekdays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        
        const weekday = weekdays[date.getDay()];
        const month = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
        
        this.set('weekday', weekday);
        this.set('fullDate', `${day} de ${month} de ${year}`);
        
        // Check if it's night time (between sunset and sunrise)
        // Simple approximation: Night is between 18:00 (6 PM) and 6:00 (6 AM)
        const hour = date.getHours();
        const isNightTime = hour >= 18 || hour < 6;
        
        if (appSettings.getBoolean('autoNightMode', false) && isNightTime) {
            this.set('textColor', '#808080'); // Dimmed text for night mode
        } else {
            this.set('textColor', '#FFFFFF'); // Normal white text
        }
    }
    
    public updateFontSettings() {
        const fontSizes = [80, 120];
        const fontStyles = ['sans-serif', 'serif', 'monospace'];
        
        const sizeIndex = appSettings.getNumber('fontSize', 0); // Default to first index (80px)
        const styleIndex = appSettings.getNumber('fontStyle', 0);
        
        console.log('Updating font settings - initial:', {
            sizeIndex,
            fontSizes,
            currentFontSize: this.get('fontSize')
        });
        
        // Ensure we have valid indices
        const safeSizeIndex = Math.min(Math.max(0, sizeIndex), fontSizes.length - 1);
        const safeStyleIndex = Math.min(Math.max(0, styleIndex), fontStyles.length - 1);
        
        const newFontSize = fontSizes[safeSizeIndex];
        const newFontFamily = fontStyles[safeStyleIndex];
        
        console.log('Updating font settings - final:', { 
            sizeIndex, 
            safeSizeIndex, 
            newFontSize,
            fontSizes,
            selectedSize: fontSizes[safeSizeIndex],
            currentFontSize: this.get('fontSize')
        });
        
        // Update the font size and family
        this.set('fontSize', newFontSize);
        this.set('fontFamily', newFontFamily);
        
        // Restart text shifting if enabled
        if (this.shiftInterval) {
            clearInterval(this.shiftInterval);
            this.setupTextShifting();
        }
    }
    
    openSettings() {
        Frame.topmost().navigate({
            moduleName: 'settings-page',
            animated: true
        });
    }
    
    private applySettings() {
        if (androidApp) {
            const activity = androidApp.startActivity || androidApp.foregroundActivity;
            if (activity) {
                const window = activity.getWindow();
                
                // Always keep screen on
                window.addFlags(android.view.WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
                
                // Hide action bar
                const actionBar = activity.getActionBar();
                if (actionBar) {
                    actionBar.hide();
                }
                
                // Set fullscreen flags
                window.addFlags(android.view.WindowManager.LayoutParams.FLAG_FULLSCREEN);
                window.addFlags(android.view.WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS);
                
                // Hide system UI
                const View = android.view.View;
                const flags = View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                    | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                    | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                    | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                    | View.SYSTEM_UI_FLAG_FULLSCREEN
                    | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY;
                
                window.getDecorView().setSystemUiVisibility(flags);
                
                // Set black background
                window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
            }
        }
        
        // Update font settings
        this.updateFontSettings();
    }
    
    private setupTextShifting() {
        if (appSettings.getBoolean('textShifting', true)) {
            const frequency = appSettings.getNumber('shiftFrequency', 60) * 1000; // Convert to milliseconds
            const amountX = appSettings.getNumber('shiftAmountX', 10);
            const amountY = appSettings.getNumber('shiftAmountY', 5);
            
            console.log('Setting up text shifting:', { 
                frequency, 
                amountX, 
                amountY
            });
            
            // Clear any existing interval
            if (this.shiftInterval) {
                clearInterval(this.shiftInterval);
            }
            
            // Set up new interval
            this.shiftInterval = setInterval(() => {
                // Calculate random position within the allowed shift amounts
                const x = (Math.random() - 0.5) * amountX;
                const y = (Math.random() - 0.5) * amountY;
                
                console.log('Shifting text:', { 
                    x, 
                    y,
                    amountX,
                    amountY
                });
                
                // Apply the shift values
                this.set('textShiftX', x);
                this.set('textShiftY', y);
                
                // Log the actual values being applied
                console.log('Applied shift values:', {
                    textShiftX: this.get('textShiftX'),
                    textShiftY: this.get('textShiftY')
                });
            }, frequency);
        } else {
            // Reset shift values when shifting is disabled
            this.set('textShiftX', 0);
            this.set('textShiftY', 0);
        }
    }
    
    dispose() {
        if (this.updateInterval) {
            clearInterval(this.updateInterval);
        }
        if (this.shiftInterval) {
            clearInterval(this.shiftInterval);
        }
    }
}