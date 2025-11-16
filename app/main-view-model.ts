import { Observable as ObservableBase } from '@nativescript/core/data/observable';
import { Frame } from '@nativescript/core/ui/frame';
import * as appSettings from '@nativescript/core/application-settings';
import { android as androidApp } from '@nativescript/core/application';
import { Screen } from '@nativescript/core/platform';
import { Page } from '@nativescript/core/ui/page';
import { StackLayout } from '@nativescript/core/ui/layouts/stack-layout';
import { Label } from '@nativescript/core/ui/label';

declare const android: any;

export class MainViewModel extends ObservableBase {
    private updateInterval: any;
    private shiftInterval: any;
    private currentShift = { x: 0, y: 0 };
    private screenWidth: number;
    private screenHeight: number;
    private containerWidth: number = 0;
    private containerHeight: number = 0;
    private maxLabelWidth: number = 0;
    private maxLabelHeight: number = 0;
    private page: Page;
    
    constructor() {
        super();
        
        // Initialize default values
        this.set('weekday', '');
        this.set('date', '');
        this.set('time', '');
        this.set('textShiftX', 0);
        this.set('textShiftY', 0);
        
        // Get screen dimensions
        this.screenWidth = Screen.mainScreen.widthPixels;
        this.screenHeight = Screen.mainScreen.heightPixels;
        
        // Load font settings first
        this.updateFontSettings();
        
        // Initial update
        this.updateDateTime();
        
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
                
                // Calculate maximum label dimensions to prevent cropping
                this.calculateMaxLabelDimensions();
                
                console.log('Container size updated:', {
                    width: this.containerWidth,
                    height: this.containerHeight,
                    maxLabelWidth: this.maxLabelWidth,
                    maxLabelHeight: this.maxLabelHeight
                });
                // Restart text shifting with new bounds
                this.setupTextShifting();
            });
        }
        
        // Initial calculation will be triggered by layoutChanged event
        // No need for setTimeout as layoutChanged handles initial layout
    }
    
    private calculateMaxLabelDimensions() {
        if (!this.page) {
            // Fallback: estimate based on font size
            const fontSize = this.get('fontSize') || 120;
            this.maxLabelWidth = fontSize * 8;
            this.maxLabelHeight = fontSize * 4;
            return;
        }
        
        // Try to get labels by ID
        const weekdayLabel = this.page.getViewById('weekdayLabel') as Label;
        const dateLabel = this.page.getViewById('dateLabel') as Label;
        const timeLabel = this.page.getViewById('timeLabel') as Label;
        
        let maxWidth = 0;
        let maxHeight = 0;
        let foundAnyLabel = false;
        
        [weekdayLabel, dateLabel, timeLabel].forEach(label => {
            if (label) {
                foundAnyLabel = true;
                try {
                    const size = label.getActualSize();
                    if (size && size.width > 0 && size.height > 0) {
                        maxWidth = Math.max(maxWidth, size.width);
                        maxHeight += size.height; // Sum heights for vertical layout
                    }
                } catch (e) {
                    console.log('Could not get label size:', e);
                }
            }
        });
        
        // If we couldn't get actual sizes, estimate based on font size
        if (!foundAnyLabel || maxWidth === 0 || maxHeight === 0) {
            const fontSize = this.get('fontSize') || 120;
            // Rough estimate: assume text is about 8-10 characters wide per font size unit
            // Weekday is 1.2x font size, date and time are 1x font size
            // Estimate width based on longest text (weekday names can be long)
            maxWidth = fontSize * 1.2 * 12; // Approximate width for longest weekday name
            // Height is sum of all three labels with some spacing
            maxHeight = (fontSize * 1.2) + fontSize + fontSize + (fontSize * 0.5); // Labels + spacing
        }
        
        this.maxLabelWidth = maxWidth;
        this.maxLabelHeight = maxHeight;
        
        console.log('Calculated label dimensions:', {
            maxWidth: this.maxLabelWidth,
            maxHeight: this.maxLabelHeight,
            fontSize: this.get('fontSize')
        });
    }
    
    updateDateTime() {
        const date = new Date();
        const weekdays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        
        const weekday = weekdays[date.getDay()];
        const month = months[date.getMonth()];
        const day = date.getDate();
        
        // Format time with leading zeros (without seconds)
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        
        this.set('weekday', weekday);
        this.set('date', `${day} de ${month}`);
        this.set('time', `${hours}:${minutes}`);
        
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
        const fontSizes = [100, 110, 120, 125, 130];
        const fontStyles = ['sans-serif', 'serif', 'monospace'];
        
        const sizeIndex = appSettings.getNumber('fontSize', 0); // Revert default back to 0
        const styleIndex = appSettings.getNumber('fontStyle', 0); // Revert default back to 0
        
        // Ensure we have valid indices
        const safeSizeIndex = Math.min(Math.max(0, sizeIndex), fontSizes.length - 1);
        const safeStyleIndex = Math.min(Math.max(0, styleIndex), fontStyles.length - 1);
        
        const newFontSize = fontSizes[safeSizeIndex];
        const newFontFamily = fontStyles[safeStyleIndex];
        
        // Force update the font size and family
        this.notifyPropertyChange('fontSize', newFontSize);
        this.notifyPropertyChange('fontFamily', newFontFamily);
        
        // Also set them normally to ensure they're updated
        this.set('fontSize', newFontSize);
        this.set('fontFamily', newFontFamily);
        
        // Recalculate label dimensions when font size changes
        setTimeout(() => {
            this.calculateMaxLabelDimensions();
            // Restart text shifting if enabled with new bounds
            if (this.shiftInterval) {
                clearInterval(this.shiftInterval);
                this.setupTextShifting();
            }
        }, 100);
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
            let amountX = appSettings.getNumber('shiftAmountX', 10);
            let amountY = appSettings.getNumber('shiftAmountY', 5);
            
            // Calculate safe shift bounds to prevent text from being cropped
            const safeBounds = this.calculateSafeShiftBounds(amountX, amountY);
            amountX = safeBounds.maxX;
            amountY = safeBounds.maxY;
            
            console.log('Setting up text shifting:', { 
                frequency, 
                requestedX: appSettings.getNumber('shiftAmountX', 10),
                requestedY: appSettings.getNumber('shiftAmountY', 5),
                safeAmountX: amountX,
                safeAmountY: amountY,
                containerWidth: this.containerWidth,
                containerHeight: this.containerHeight,
                maxLabelWidth: this.maxLabelWidth,
                maxLabelHeight: this.maxLabelHeight
            });
            
            // Clear any existing interval
            if (this.shiftInterval) {
                clearInterval(this.shiftInterval);
            }
            
            // Set up new interval
            this.shiftInterval = setInterval(() => {
                // Calculate random position within the safe shift bounds
                const x = (Math.random() - 0.5) * amountX;
                const y = (Math.random() - 0.5) * amountY;
                
                console.log('Shifting text:', { 
                    x, 
                    y,
                    safeAmountX: amountX,
                    safeAmountY: amountY
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
    
    private calculateSafeShiftBounds(requestedX: number, requestedY: number): { maxX: number, maxY: number } {
        // If container dimensions aren't available yet, use screen dimensions as fallback
        const containerW = this.containerWidth > 0 ? this.containerWidth : this.screenWidth;
        const containerH = this.containerHeight > 0 ? this.containerHeight : this.screenHeight;
        
        // If label dimensions aren't available, estimate based on font size
        // Use consistent estimation logic with calculateMaxLabelDimensions
        const fontSize = this.get('fontSize') || 120;
        const labelW = this.maxLabelWidth > 0 ? this.maxLabelWidth : (fontSize * 1.2 * 12);
        const labelH = this.maxLabelHeight > 0 ? this.maxLabelHeight : ((fontSize * 1.2) + fontSize + fontSize + (fontSize * 0.5));
        
        // Calculate available space from center to edge
        // Labels are centered, so available space is (container - label) / 2
        // Add padding of 10% to ensure text doesn't get too close to edges
        const paddingX = containerW * 0.1;
        const paddingY = containerH * 0.1;
        
        // Maximum shift in one direction (since we shift by ±amount/2)
        const maxShiftX = (containerW - labelW) / 2 - paddingX;
        const maxShiftY = (containerH - labelH) / 2 - paddingY;
        
        // The maximum safe shift range is 2x the max shift in one direction
        // (because the shift formula uses (Math.random() - 0.5) * amount, giving ±amount/2)
        const maxSafeX = Math.max(0, maxShiftX * 2);
        const maxSafeY = Math.max(0, maxShiftY * 2);
        
        // Clamp the requested shift amounts to safe bounds
        const safeX = Math.min(requestedX, maxSafeX);
        const safeY = Math.min(requestedY, maxSafeY);
        
        console.log('Safe shift bounds calculation:', {
            containerSize: { width: containerW, height: containerH },
            labelSize: { width: labelW, height: labelH },
            padding: { x: paddingX, y: paddingY },
            maxShiftOneDirection: { x: maxShiftX, y: maxShiftY },
            maxSafeRange: { x: maxSafeX, y: maxSafeY },
            requested: { x: requestedX, y: requestedY },
            finalSafe: { x: safeX, y: safeY }
        });
        
        return { maxX: safeX, maxY: safeY };
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