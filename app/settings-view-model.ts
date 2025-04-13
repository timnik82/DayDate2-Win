import { Observable as ObservableBase } from '@nativescript/core/data/observable';
import { Frame } from '@nativescript/core/ui/frame';
import * as appSettings from '@nativescript/core/application-settings';

export class SettingsViewModel extends ObservableBase {
    private _fontSizes = [100, 110, 120, 130];
    private _fontSizesText = ['100px', '110px', '120px', '130px'];
    private _fontStyles = ['sans-serif', 'serif', 'monospace'];
    private _shiftIntervals = ['3 segundos', '1 minuto', '5 minutos', '10 minutos'];
    private _shiftIntervalValues = [3, 60, 300, 600]; // Values in seconds
    
    constructor() {
        super();
        
        // Set observable properties
        this.set('fontSizes', this._fontSizesText);
        this.set('fontStyles', this._fontStyles);
        this.set('shiftIntervals', this._shiftIntervals);
        
        // Load saved settings
        this.loadSettings();
    }
    
    public loadSettings() {
        console.log('Loading settings...');
        
        // Load font settings
        const savedFontSize = appSettings.getNumber('fontSize', 0);
        console.log('Loading font size:', {
            savedIndex: savedFontSize,
            value: this._fontSizes[savedFontSize],
            text: this._fontSizesText[savedFontSize]
        });
        
        // Ensure we have valid indices
        const safeFontSizeIndex = Math.min(Math.max(0, savedFontSize), this._fontSizes.length - 1);
        this.set('selectedFontSizeIndex', safeFontSizeIndex);
        
        const savedFontStyle = appSettings.getNumber('fontStyle', 0);
        const safeFontStyleIndex = Math.min(Math.max(0, savedFontStyle), this._fontStyles.length - 1);
        this.set('selectedFontStyleIndex', safeFontStyleIndex);
        
        // Load night mode setting
        this.set('autoNightMode', appSettings.getBoolean('autoNightMode', false));
        
        // Load text shifting settings
        this.set('textShifting', appSettings.getBoolean('textShifting', true));
        this.set('selectedShiftIntervalIndex', appSettings.getNumber('shiftIntervalIndex', 1));
        this.set('shiftAmountX', appSettings.getNumber('shiftAmountX', 10));
        this.set('shiftAmountY', appSettings.getNumber('shiftAmountY', 5));
        
        console.log('Settings loaded:', {
            fontSize: {
                index: safeFontSizeIndex,
                value: this._fontSizes[safeFontSizeIndex],
                text: this._fontSizesText[safeFontSizeIndex]
            },
            fontStyle: {
                index: safeFontStyleIndex,
                value: this._fontStyles[safeFontStyleIndex]
            },
            autoNightMode: this.get('autoNightMode'),
            textShifting: this.get('textShifting'),
            shiftInterval: {
                index: this.get('selectedShiftIntervalIndex'),
                text: this._shiftIntervals[this.get('selectedShiftIntervalIndex')]
            },
            shiftAmountX: this.get('shiftAmountX'),
            shiftAmountY: this.get('shiftAmountY')
        });
    }

    public saveSettings() {
        // Save font settings
        const fontSizeIndex = this.get('selectedFontSizeIndex');
        const safeFontSizeIndex = Math.min(Math.max(0, fontSizeIndex), this._fontSizes.length - 1);
        appSettings.setNumber('fontSize', safeFontSizeIndex);
        
        const fontStyleIndex = this.get('selectedFontStyleIndex');
        const safeFontStyleIndex = Math.min(Math.max(0, fontStyleIndex), this._fontStyles.length - 1);
        appSettings.setNumber('fontStyle', safeFontStyleIndex);
        
        // Save night mode setting
        const autoNightMode = this.get('autoNightMode');
        appSettings.setBoolean('autoNightMode', autoNightMode);
        
        // Save text shifting settings
        const textShifting = this.get('textShifting');
        appSettings.setBoolean('textShifting', textShifting);

        const intervalIndex = this.get('selectedShiftIntervalIndex');
        const safeIntervalIndex = Math.min(Math.max(0, intervalIndex), this._shiftIntervalValues.length - 1);
        appSettings.setNumber('shiftIntervalIndex', safeIntervalIndex);
        appSettings.setNumber('shiftFrequency', this._shiftIntervalValues[safeIntervalIndex]);

        const shiftAmountX = parseInt(this.get('shiftAmountX'), 10);
        const validShiftAmountX = isNaN(shiftAmountX) ? 10 : Math.max(1, Math.min(100, shiftAmountX));
        appSettings.setNumber('shiftAmountX', validShiftAmountX);

        const shiftAmountY = parseInt(this.get('shiftAmountY'), 10);
        const validShiftAmountY = isNaN(shiftAmountY) ? 5 : Math.max(1, Math.min(100, shiftAmountY));
        appSettings.setNumber('shiftAmountY', validShiftAmountY);

        // Navigate back to main page
        Frame.topmost().goBack();
    }
}