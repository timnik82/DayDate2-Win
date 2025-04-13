(() => {
var exports = {};
exports.id = "bundle";
exports.ids = ["bundle"];
exports.modules = {

/***/ "./app sync recursive \\.(xml%7Cjs%7C(?<%21\\.d\\.)ts%7Cs?css)$":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./app-root.xml": "./app/app-root.xml",
	"./app.css": "./app/app.css",
	"./app.ts": "./app/app.ts",
	"./main-page.ts": "./app/main-page.ts",
	"./main-page.xml": "./app/main-page.xml",
	"./main-view-model.ts": "./app/main-view-model.ts",
	"./settings-page.ts": "./app/settings-page.ts",
	"./settings-page.xml": "./app/settings-page.xml",
	"./settings-view-model.ts": "./app/settings-view-model.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app sync recursive \\.(xml%7Cjs%7C(?<%21\\.d\\.)ts%7Cs?css)$";

/***/ }),

/***/ "./app/app-root.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<Frame defaultPage=\"main-page\" actionBarHidden=\"true\">\n</Frame>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);


/***/ }),

/***/ "./app/app.css":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* CSS2JSON */

const ___CSS2JSON_LOADER_EXPORT___ = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":["*","::before","::after"],"declarations":[{"type":"declaration","property":"--tw-border-spacing-x","value":"0"},{"type":"declaration","property":"--tw-border-spacing-y","value":"0"},{"type":"declaration","property":"--tw-translate-x","value":"0"},{"type":"declaration","property":"--tw-translate-y","value":"0"},{"type":"declaration","property":"--tw-rotate","value":"0"},{"type":"declaration","property":"--tw-skew-x","value":"0"},{"type":"declaration","property":"--tw-skew-y","value":"0"},{"type":"declaration","property":"--tw-scale-x","value":"1"},{"type":"declaration","property":"--tw-scale-y","value":"1"},{"type":"declaration","property":"--tw-pan-x","value":""},{"type":"declaration","property":"--tw-pan-y","value":""},{"type":"declaration","property":"--tw-pinch-zoom","value":""},{"type":"declaration","property":"--tw-scroll-snap-strictness","value":"proximity"},{"type":"declaration","property":"--tw-gradient-from-position","value":""},{"type":"declaration","property":"--tw-gradient-via-position","value":""},{"type":"declaration","property":"--tw-gradient-to-position","value":""},{"type":"declaration","property":"--tw-blur","value":""},{"type":"declaration","property":"--tw-brightness","value":""},{"type":"declaration","property":"--tw-contrast","value":""},{"type":"declaration","property":"--tw-grayscale","value":""},{"type":"declaration","property":"--tw-hue-rotate","value":""},{"type":"declaration","property":"--tw-invert","value":""},{"type":"declaration","property":"--tw-saturate","value":""},{"type":"declaration","property":"--tw-sepia","value":""},{"type":"declaration","property":"--tw-drop-shadow","value":""},{"type":"declaration","property":"--tw-backdrop-blur","value":""},{"type":"declaration","property":"--tw-backdrop-brightness","value":""},{"type":"declaration","property":"--tw-backdrop-contrast","value":""},{"type":"declaration","property":"--tw-backdrop-grayscale","value":""},{"type":"declaration","property":"--tw-backdrop-hue-rotate","value":""},{"type":"declaration","property":"--tw-backdrop-invert","value":""},{"type":"declaration","property":"--tw-backdrop-opacity","value":""},{"type":"declaration","property":"--tw-backdrop-saturate","value":""},{"type":"declaration","property":"--tw-backdrop-sepia","value":""},{"type":"declaration","property":"--tw-contain-size","value":""},{"type":"declaration","property":"--tw-contain-layout","value":""},{"type":"declaration","property":"--tw-contain-paint","value":""},{"type":"declaration","property":"--tw-contain-style","value":""}]},{"type":"rule","selectors":["::backdrop"],"declarations":[{"type":"declaration","property":"--tw-border-spacing-x","value":"0"},{"type":"declaration","property":"--tw-border-spacing-y","value":"0"},{"type":"declaration","property":"--tw-translate-x","value":"0"},{"type":"declaration","property":"--tw-translate-y","value":"0"},{"type":"declaration","property":"--tw-rotate","value":"0"},{"type":"declaration","property":"--tw-skew-x","value":"0"},{"type":"declaration","property":"--tw-skew-y","value":"0"},{"type":"declaration","property":"--tw-scale-x","value":"1"},{"type":"declaration","property":"--tw-scale-y","value":"1"},{"type":"declaration","property":"--tw-pan-x","value":""},{"type":"declaration","property":"--tw-pan-y","value":""},{"type":"declaration","property":"--tw-pinch-zoom","value":""},{"type":"declaration","property":"--tw-scroll-snap-strictness","value":"proximity"},{"type":"declaration","property":"--tw-gradient-from-position","value":""},{"type":"declaration","property":"--tw-gradient-via-position","value":""},{"type":"declaration","property":"--tw-gradient-to-position","value":""},{"type":"declaration","property":"--tw-blur","value":""},{"type":"declaration","property":"--tw-brightness","value":""},{"type":"declaration","property":"--tw-contrast","value":""},{"type":"declaration","property":"--tw-grayscale","value":""},{"type":"declaration","property":"--tw-hue-rotate","value":""},{"type":"declaration","property":"--tw-invert","value":""},{"type":"declaration","property":"--tw-saturate","value":""},{"type":"declaration","property":"--tw-sepia","value":""},{"type":"declaration","property":"--tw-drop-shadow","value":""},{"type":"declaration","property":"--tw-backdrop-blur","value":""},{"type":"declaration","property":"--tw-backdrop-brightness","value":""},{"type":"declaration","property":"--tw-backdrop-contrast","value":""},{"type":"declaration","property":"--tw-backdrop-grayscale","value":""},{"type":"declaration","property":"--tw-backdrop-hue-rotate","value":""},{"type":"declaration","property":"--tw-backdrop-invert","value":""},{"type":"declaration","property":"--tw-backdrop-opacity","value":""},{"type":"declaration","property":"--tw-backdrop-saturate","value":""},{"type":"declaration","property":"--tw-backdrop-sepia","value":""},{"type":"declaration","property":"--tw-contain-size","value":""},{"type":"declaration","property":"--tw-contain-layout","value":""},{"type":"declaration","property":"--tw-contain-paint","value":""},{"type":"declaration","property":"--tw-contain-style","value":""}]},{"type":"rule","selectors":[".container"],"declarations":[{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".m-4"],"declarations":[{"type":"declaration","property":"margin","value":"16"}]},{"type":"rule","selectors":[".mb-2"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"8"}]},{"type":"rule","selectors":[".mb-4"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"16"}]},{"type":"rule","selectors":[".mt-4"],"declarations":[{"type":"declaration","property":"margin-top","value":"16"}]},{"type":"rule","selectors":[".bg-black"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(0 0 0 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-white"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(255 255 255 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".p-2"],"declarations":[{"type":"declaration","property":"padding","value":"8"}]},{"type":"rule","selectors":[".p-3"],"declarations":[{"type":"declaration","property":"padding","value":"12"}]},{"type":"rule","selectors":[".p-4"],"declarations":[{"type":"declaration","property":"padding","value":"16"}]},{"type":"rule","selectors":[".text-center"],"declarations":[{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":[".text-xl"],"declarations":[{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"line-height","value":"28"}]},{"type":"rule","selectors":[".text-black"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(0 0 0 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-white"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(255 255 255 / var(--tw-text-opacity, 1))"}]},{"type":"comment","comment":" General styles "},{"type":"rule","selectors":[".bg-black"],"declarations":[{"type":"declaration","property":"background-color","value":"black"}]},{"type":"rule","selectors":["TimePicker"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#333333"},{"type":"declaration","property":"padding","value":"12"},{"type":"declaration","property":"font-size","value":"18"}]},{"type":"rule","selectors":["TimePicker[platform=android]"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#333333"}]}],"parsingErrors":[]}}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS2JSON_LOADER_EXPORT___);
const { addTaggedAdditionalCSS } = __webpack_require__("./node_modules/@nativescript/core/ui/styling/style-scope.js");
addTaggedAdditionalCSS(___CSS2JSON_LOADER_EXPORT___, "C:\\Users\\timni\\Cursor Projects\\DayDate 2\\app\\app.css")


/***/ }),

/***/ "./app/app.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/app.css");
/* harmony import */ var _nativescript_core_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@nativescript/core/application/application-shims.js");
// Added by app-css-loader


_nativescript_core_application__WEBPACK_IMPORTED_MODULE_1__.run({ moduleName: 'app-root' });
// Setup Android-specific UI after the app is launched
if (_nativescript_core_application__WEBPACK_IMPORTED_MODULE_1__.android) {
    _nativescript_core_application__WEBPACK_IMPORTED_MODULE_1__.android.on('activityCreated', (args) => {
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
                    onSystemUiVisibilityChange: function (visibility) {
                        window.getDecorView().setSystemUiVisibility(flags);
                    }
                }));
            }
        }
        catch (error) {
            console.error('Error in activityCreated:', error);
        }
    });
    _nativescript_core_application__WEBPACK_IMPORTED_MODULE_1__.android.on('activityResumed', (args) => {
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
        }
        catch (error) {
            console.error('Error in activityResumed:', error);
        }
    });
}


/***/ }),

/***/ "./app/main-page.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navigatingFrom: () => (/* binding */ navigatingFrom),
/* harmony export */   navigatingTo: () => (/* binding */ navigatingTo),
/* harmony export */   onNavigatedTo: () => (/* binding */ onNavigatedTo)
/* harmony export */ });
/* harmony import */ var _main_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/main-view-model.ts");

let viewModel;
function navigatingTo(args) {
    const page = args.object;
    if (!viewModel) {
        viewModel = new _main_view_model__WEBPACK_IMPORTED_MODULE_0__.MainViewModel();
    }
    page.bindingContext = viewModel;
    viewModel.initializeContainer(page);
    // Add swipe gesture
    page.on('swipe', (args) => {
        if (args.direction === 1 || args.direction === 2) { // 1 = right, 2 = left
            viewModel.openSettings();
        }
    });
}
function navigatingFrom() {
    if (viewModel) {
        viewModel.dispose();
    }
}
function onNavigatedTo(args) {
    if (viewModel) {
        // Update settings when returning from settings page
        viewModel.updateDateTime();
        viewModel.updateFontSettings();
    }
}


/***/ }),

/***/ "./app/main-page.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"navigatingTo\" navigatingFrom=\"navigatingFrom\" class=\"bg-black\" actionBarHidden=\"true\">\n    <GridLayout rows=\"*\" columns=\"*\" class=\"bg-black\">\n        <StackLayout id=\"textContainer\" row=\"0\" verticalAlignment=\"center\" horizontalAlignment=\"center\" width=\"100%\" height=\"100%\" class=\"bg-black\">\n            <Label text=\"{{ weekday }}\" \n                   class=\"text-center\" \n                   fontSize=\"{{ fontSize * 1.2 }}\"\n                   fontFamily=\"{{ fontFamily }}\"\n                   color=\"{{ textColor }}\"\n                   fontWeight=\"900\"\n                   textWrap=\"true\"\n                   translateX=\"{{ textShiftX }}\"\n                   translateY=\"{{ textShiftY }}\"/>\n            <Label text=\"{{ date }}\" \n                   class=\"text-center\" \n                   fontSize=\"{{ fontSize }}\"\n                   fontFamily=\"{{ fontFamily }}\"\n                   color=\"{{ textColor }}\"\n                   fontWeight=\"900\"\n                   textWrap=\"true\"\n                   translateX=\"{{ textShiftX }}\"\n                   translateY=\"{{ textShiftY }}\"/>\n            <Label text=\"{{ time }}\" \n                   class=\"text-center\" \n                   fontSize=\"{{ fontSize * 0.8 }}\"\n                   fontFamily=\"{{ fontFamily }}\"\n                   color=\"{{ textColor }}\"\n                   fontWeight=\"900\"\n                   textWrap=\"true\"\n                   translateX=\"{{ textShiftX }}\"\n                   translateY=\"{{ textShiftY }}\"/>\n        </StackLayout>\n    </GridLayout>\n</Page>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);


/***/ }),

/***/ "./app/main-view-model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainViewModel: () => (/* binding */ MainViewModel)
/* harmony export */ });
/* harmony import */ var _nativescript_core_data_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/data/observable/index.js");
/* harmony import */ var _nativescript_core_ui_frame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@nativescript/core/ui/frame/index.android.js");
/* harmony import */ var _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/core/application-settings/index.android.js");
/* harmony import */ var _nativescript_core_application__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@nativescript/core/application/application-shims.js");
/* harmony import */ var _nativescript_core_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@nativescript/core/platform/screen/index.android.js");





class MainViewModel extends _nativescript_core_data_observable__WEBPACK_IMPORTED_MODULE_0__.Observable {
    constructor() {
        super();
        this.currentShift = { x: 0, y: 0 };
        this.containerWidth = 0;
        this.containerHeight = 0;
        // Initialize default values
        this.set('weekday', '');
        this.set('date', '');
        this.set('time', '');
        this.set('fontSize', 80);
        this.set('fontFamily', 'sans-serif');
        this.set('textShiftX', 0);
        this.set('textShiftY', 0);
        // Get screen dimensions
        this.screenWidth = _nativescript_core_platform__WEBPACK_IMPORTED_MODULE_1__.Screen.mainScreen.widthPixels;
        this.screenHeight = _nativescript_core_platform__WEBPACK_IMPORTED_MODULE_1__.Screen.mainScreen.heightPixels;
        // Initial update
        this.updateDateTime();
        this.updateFontSettings();
        // Set up periodic updates
        this.updateInterval = setInterval(() => this.updateDateTime(), 1000);
        // Apply settings
        this.applySettings();
    }
    initializeContainer(page) {
        this.page = page;
        const container = page.getViewById('textContainer');
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
        if (_nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_2__.getBoolean('autoNightMode', false) && isNightTime) {
            this.set('textColor', '#808080'); // Dimmed text for night mode
        }
        else {
            this.set('textColor', '#FFFFFF'); // Normal white text
        }
    }
    updateFontSettings() {
        const fontSizes = [80, 120];
        const fontStyles = ['sans-serif', 'serif', 'monospace'];
        const sizeIndex = _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_2__.getNumber('fontSize', 0); // Default to first index (80px)
        const styleIndex = _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_2__.getNumber('fontStyle', 0);
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
        _nativescript_core_ui_frame__WEBPACK_IMPORTED_MODULE_3__.Frame.topmost().navigate({
            moduleName: 'settings-page',
            animated: true
        });
    }
    applySettings() {
        if (_nativescript_core_application__WEBPACK_IMPORTED_MODULE_4__.android) {
            const activity = _nativescript_core_application__WEBPACK_IMPORTED_MODULE_4__.android.startActivity || _nativescript_core_application__WEBPACK_IMPORTED_MODULE_4__.android.foregroundActivity;
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
    setupTextShifting() {
        if (_nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_2__.getBoolean('textShifting', true)) {
            const frequency = _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_2__.getNumber('shiftFrequency', 60) * 1000; // Convert to milliseconds
            const amountX = _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_2__.getNumber('shiftAmountX', 10);
            const amountY = _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_2__.getNumber('shiftAmountY', 5);
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
        }
        else {
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


/***/ }),

/***/ "./app/settings-page.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onNavigatingTo: () => (/* binding */ onNavigatingTo)
/* harmony export */ });
/* harmony import */ var _settings_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/settings-view-model.ts");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new _settings_view_model__WEBPACK_IMPORTED_MODULE_0__.SettingsViewModel();
}


/***/ }),

/***/ "./app/settings-page.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"onNavigatingTo\" class=\"bg-black\" actionBarHidden=\"true\">\n    <ScrollView orientation=\"horizontal\">\n        <StackLayout orientation=\"horizontal\" class=\"p-4\" width=\"auto\">\n            <!-- Font Settings Panel -->\n            <StackLayout class=\"m-4 p-4\" width=\"300\">\n                <Label text=\"Font Settings\" class=\"text-white text-xl mb-4\"/>\n                \n                <Label text=\"Font Size\" class=\"text-white mb-2\"/>\n                <ListPicker items=\"{{ fontSizes }}\" \n                           selectedIndex=\"{{ selectedFontSizeIndex }}\" \n                           class=\"mb-4 text-white text-center p-2\"\n                           height=\"120\"\n                           color=\"white\"\n                           backgroundColor=\"black\"/>\n                \n                <Label text=\"Font Style\" class=\"text-white mb-2\"/>\n                <ListPicker items=\"{{ fontStyles }}\" \n                           selectedIndex=\"{{ selectedFontStyleIndex }}\" \n                           class=\"mb-4 text-white text-center p-2\"\n                           height=\"120\"\n                           color=\"white\"\n                           backgroundColor=\"black\"/>\n            </StackLayout>\n\n            <!-- Text Position Settings Panel -->\n            <StackLayout class=\"m-4 p-4\" width=\"300\">\n                <Label text=\"Text Position\" class=\"text-white text-xl mb-4\"/>\n                \n                <Label text=\"Shift Interval\" class=\"text-white mb-2\"/>\n                <ListPicker items=\"{{ shiftIntervals }}\" \n                           selectedIndex=\"{{ selectedShiftIntervalIndex }}\" \n                           class=\"mb-4 text-white text-center p-2\"\n                           height=\"120\"\n                           color=\"white\"\n                           backgroundColor=\"black\"/>\n                \n                <Label text=\"Horizontal Shift (pixels)\" class=\"text-white mb-2\"/>\n                <TextField text=\"{{ shiftAmountX }}\" \n                          keyboardType=\"number\"\n                          hint=\"Enter value (1-100)\"\n                          returnKeyType=\"done\"\n                          class=\"mb-4 text-white text-center p-2\"/>\n                \n                <Label text=\"Vertical Shift (pixels)\" class=\"text-white mb-2\"/>\n                <TextField text=\"{{ shiftAmountY }}\" \n                          keyboardType=\"number\"\n                          hint=\"Enter value (1-100)\"\n                          returnKeyType=\"done\"\n                          class=\"mb-4 text-white text-center p-2\"/>\n            </StackLayout>\n\n            <!-- Display Settings Panel -->\n            <StackLayout class=\"m-4 p-4\" width=\"300\">\n                <Label text=\"Display Settings\" class=\"text-white text-xl mb-4\"/>\n                \n                <Label text=\"Night Mode (Sunset to Dawn)\" class=\"text-white mb-2\"/>\n                <Switch checked=\"{{ autoNightMode }}\" class=\"mb-4\"/>\n                \n                <!-- Save Button -->\n                <Button text=\"Save Settings\" \n                       tap=\"{{ saveSettings }}\" \n                       class=\"bg-white text-black mt-4 p-3\"/>\n            </StackLayout>\n        </StackLayout>\n    </ScrollView>\n</Page>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);


/***/ }),

/***/ "./app/settings-view-model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsViewModel: () => (/* binding */ SettingsViewModel)
/* harmony export */ });
/* harmony import */ var _nativescript_core_data_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/data/observable/index.js");
/* harmony import */ var _nativescript_core_ui_frame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/core/ui/frame/index.android.js");
/* harmony import */ var _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@nativescript/core/application-settings/index.android.js");



class SettingsViewModel extends _nativescript_core_data_observable__WEBPACK_IMPORTED_MODULE_0__.Observable {
    constructor() {
        super();
        this._fontSizes = [80, 120];
        this._fontSizesText = ['80px', '120px'];
        this._fontStyles = ['sans-serif', 'serif', 'monospace'];
        this._shiftIntervals = ['3 segundos', '1 minuto', '5 minutos', '10 minutos'];
        this._shiftIntervalValues = [3, 60, 300, 600]; // Values in seconds
        // Set observable properties
        this.set('fontSizes', this._fontSizesText);
        this.set('fontStyles', this._fontStyles);
        this.set('shiftIntervals', this._shiftIntervals);
        // Load saved settings
        this.loadSettings();
    }
    loadSettings() {
        console.log('Loading settings...');
        // Load font settings
        const savedFontSize = _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.getNumber('fontSize', 0);
        console.log('Loading font size:', {
            savedIndex: savedFontSize,
            value: this._fontSizes[savedFontSize],
            text: this._fontSizesText[savedFontSize]
        });
        // Ensure we have valid indices
        const safeFontSizeIndex = Math.min(Math.max(0, savedFontSize), this._fontSizes.length - 1);
        this.set('selectedFontSizeIndex', safeFontSizeIndex);
        const savedFontStyle = _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.getNumber('fontStyle', 0);
        const safeFontStyleIndex = Math.min(Math.max(0, savedFontStyle), this._fontStyles.length - 1);
        this.set('selectedFontStyleIndex', safeFontStyleIndex);
        // Load night mode setting
        this.set('autoNightMode', _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.getBoolean('autoNightMode', false));
        // Load text shifting settings
        this.set('textShifting', _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.getBoolean('textShifting', true));
        this.set('selectedShiftIntervalIndex', _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.getNumber('shiftIntervalIndex', 1));
        this.set('shiftAmountX', _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.getNumber('shiftAmountX', 10));
        this.set('shiftAmountY', _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.getNumber('shiftAmountY', 5));
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
    saveSettings() {
        console.log('Saving settings...');
        // Save font settings
        const fontSizeIndex = this.get('selectedFontSizeIndex');
        const safeFontSizeIndex = Math.min(Math.max(0, fontSizeIndex), this._fontSizes.length - 1);
        console.log('Saving font size:', {
            requestedIndex: fontSizeIndex,
            safeIndex: safeFontSizeIndex,
            value: this._fontSizes[safeFontSizeIndex],
            text: this._fontSizesText[safeFontSizeIndex]
        });
        _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.setNumber('fontSize', safeFontSizeIndex);
        const fontStyleIndex = this.get('selectedFontStyleIndex');
        const safeFontStyleIndex = Math.min(Math.max(0, fontStyleIndex), this._fontStyles.length - 1);
        _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.setNumber('fontStyle', safeFontStyleIndex);
        // Save night mode setting
        const autoNightMode = this.get('autoNightMode');
        _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.setBoolean('autoNightMode', autoNightMode);
        // Save text shifting settings
        const textShifting = this.get('textShifting');
        _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.setBoolean('textShifting', textShifting);
        const intervalIndex = this.get('selectedShiftIntervalIndex');
        const safeIntervalIndex = Math.min(Math.max(0, intervalIndex), this._shiftIntervalValues.length - 1);
        _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.setNumber('shiftIntervalIndex', safeIntervalIndex);
        _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.setNumber('shiftFrequency', this._shiftIntervalValues[safeIntervalIndex]);
        const shiftAmountX = parseInt(this.get('shiftAmountX'), 10);
        const validShiftAmountX = isNaN(shiftAmountX) ? 10 : Math.max(1, Math.min(100, shiftAmountX));
        _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.setNumber('shiftAmountX', validShiftAmountX);
        const shiftAmountY = parseInt(this.get('shiftAmountY'), 10);
        const validShiftAmountY = isNaN(shiftAmountY) ? 5 : Math.max(1, Math.min(100, shiftAmountY));
        _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.setNumber('shiftAmountY', validShiftAmountY);
        console.log('Settings saved:', {
            fontSize: {
                index: safeFontSizeIndex,
                value: this._fontSizes[safeFontSizeIndex],
                text: this._fontSizesText[safeFontSizeIndex]
            },
            fontStyle: {
                index: safeFontStyleIndex,
                value: this._fontStyles[safeFontStyleIndex]
            },
            autoNightMode,
            textShifting,
            shiftInterval: {
                index: safeIntervalIndex,
                value: this._shiftIntervalValues[safeIntervalIndex],
                text: this._shiftIntervals[safeIntervalIndex]
            },
            shiftAmountX: {
                input: this.get('shiftAmountX'),
                final: validShiftAmountX
            },
            shiftAmountY: {
                input: this.get('shiftAmountY'),
                final: validShiftAmountY
            }
        });
        // Navigate back to main page
        _nativescript_core_ui_frame__WEBPACK_IMPORTED_MODULE_2__.Frame.topmost().goBack();
    }
}


/***/ }),

/***/ "~/package.json":
/***/ ((module) => {

"use strict";
module.exports = require("~/package.json");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor"], () => (__webpack_exec__("./node_modules/@nativescript/core/globals/index.js"), __webpack_exec__("./node_modules/@nativescript/webpack/dist/stubs/virtual-entry-typescript.js"), __webpack_exec__("./node_modules/@nativescript/core/bundle-entry-points.js"), __webpack_exec__("./app/app.ts"), __webpack_exec__("./node_modules/@nativescript/core/ui/frame/index.android.js"), __webpack_exec__("./node_modules/@nativescript/core/ui/frame/activity.android.js")));
var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFFekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRTtZQUMzQixRQUFRLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLGlCQUFpQjtnQkFDeEIsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUM7Z0JBQ3pDLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDO2FBQy9DO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLEtBQUssRUFBRSxrQkFBa0I7Z0JBQ3pCLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDO2FBQzlDO1lBQ0QsYUFBYTtZQUNiLFlBQVk7WUFDWixhQUFhLEVBQUU7Z0JBQ1gsS0FBSyxFQUFFLGlCQUFpQjtnQkFDeEIsS0FBSyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDbkQsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUM7YUFDaEQ7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO2dCQUMvQixLQUFLLEVBQUUsaUJBQWlCO2FBQzNCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztnQkFDL0IsS0FBSyxFQUFFLGlCQUFpQjthQUMzQjtTQUNKLENBQUMsQ0FBQztRQUVILDZCQUE2QjtRQUM3Qiw4REFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzdCLENBQUM7Q0FDSjs7Ozs7Ozs7O0FDL0lEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGF0ZWRheS1hcHAvLi9hcHAvIHN5bmMgXFwuKHhtbCU3Q2pzJTdDKCIsIndlYnBhY2s6Ly9kYXRlZGF5LWFwcC8uL2FwcC9hcHAtcm9vdC54bWwiLCJ3ZWJwYWNrOi8vZGF0ZWRheS1hcHAvLi9hcHAvYXBwLmNzcyIsIndlYnBhY2s6Ly9kYXRlZGF5LWFwcC8uL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vZGF0ZWRheS1hcHAvLi9hcHAvbWFpbi1wYWdlLnRzIiwid2VicGFjazovL2RhdGVkYXktYXBwLy4vYXBwL21haW4tcGFnZS54bWwiLCJ3ZWJwYWNrOi8vZGF0ZWRheS1hcHAvLi9hcHAvbWFpbi12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL2RhdGVkYXktYXBwLy4vYXBwL3NldHRpbmdzLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vZGF0ZWRheS1hcHAvLi9hcHAvc2V0dGluZ3MtcGFnZS54bWwiLCJ3ZWJwYWNrOi8vZGF0ZWRheS1hcHAvLi9hcHAvc2V0dGluZ3Mtdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly9kYXRlZGF5LWFwcC9leHRlcm5hbCBjb21tb25qcyBcIn4vcGFja2FnZS5qc29uXCIiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2FwcC1yb290LnhtbFwiOiBcIi4vYXBwL2FwcC1yb290LnhtbFwiLFxuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwL2FwcC5jc3NcIixcblx0XCIuL2FwcC50c1wiOiBcIi4vYXBwL2FwcC50c1wiLFxuXHRcIi4vbWFpbi1wYWdlLnRzXCI6IFwiLi9hcHAvbWFpbi1wYWdlLnRzXCIsXG5cdFwiLi9tYWluLXBhZ2UueG1sXCI6IFwiLi9hcHAvbWFpbi1wYWdlLnhtbFwiLFxuXHRcIi4vbWFpbi12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvbWFpbi12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi9zZXR0aW5ncy1wYWdlLnRzXCI6IFwiLi9hcHAvc2V0dGluZ3MtcGFnZS50c1wiLFxuXHRcIi4vc2V0dGluZ3MtcGFnZS54bWxcIjogXCIuL2FwcC9zZXR0aW5ncy1wYWdlLnhtbFwiLFxuXHRcIi4vc2V0dGluZ3Mtdmlldy1tb2RlbC50c1wiOiBcIi4vYXBwL3NldHRpbmdzLXZpZXctbW9kZWwudHNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hcHAgc3luYyByZWN1cnNpdmUgXFxcXC4oeG1sJTdDanMlN0MoPzwlMjFcXFxcLmRcXFxcLil0cyU3Q3M/Y3NzKSRcIjsiLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjxGcmFtZSBkZWZhdWx0UGFnZT1cXFwibWFpbi1wYWdlXFxcIiBhY3Rpb25CYXJIaWRkZW49XFxcInRydWVcXFwiPlxcbjwvRnJhbWU+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiLyogQ1NTMkpTT04gKi9cblxuY29uc3QgX19fQ1NTMkpTT05fTE9BREVSX0VYUE9SVF9fXyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIqXCIsXCI6OmJlZm9yZVwiLFwiOjphZnRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYm9yZGVyLXNwYWNpbmcteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJvcmRlci1zcGFjaW5nLXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10cmFuc2xhdGUteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRyYW5zbGF0ZS15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcm90YXRlXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2tldy14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2tldy15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2NhbGUteFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjYWxlLXlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1wYW4teFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGFuLXlcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBpbmNoLXpvb21cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3NcIixcInZhbHVlXCI6XCJwcm94aW1pdHlcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJsdXJcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJyaWdodG5lc3NcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRyYXN0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmF5c2NhbGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWh1ZS1yb3RhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWludmVydFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2F0dXJhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNlcGlhXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1kcm9wLXNoYWRvd1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtYmx1clwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzc1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtY29udHJhc3RcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWdyYXlzY2FsZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtaW52ZXJ0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1zYXR1cmF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atc2VwaWFcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tc2l6ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1sYXlvdXRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tcGFpbnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tc3R5bGVcIixcInZhbHVlXCI6XCJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCI6OmJhY2tkcm9wXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ib3JkZXItc3BhY2luZy14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYm9yZGVyLXNwYWNpbmcteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRyYW5zbGF0ZS14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdHJhbnNsYXRlLXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1yb3RhdGVcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1za2V3LXhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1za2V3LXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zY2FsZS14XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2NhbGUteVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBhbi14XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1wYW4teVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGluY2gtem9vbVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzc1wiLFwidmFsdWVcIjpcInByb3hpbWl0eVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtdmlhLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmFkaWVudC10by1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmx1clwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYnJpZ2h0bmVzc1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udHJhc3RcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYXlzY2FsZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctaHVlLXJvdGF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctaW52ZXJ0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zYXR1cmF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2VwaWFcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWRyb3Atc2hhZG93XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1ibHVyXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1jb250cmFzdFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtZ3JheXNjYWxlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1odWUtcm90YXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1pbnZlcnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLW9wYWNpdHlcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLXNhdHVyYXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1zZXBpYVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1zaXplXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLWxheW91dFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1wYWludFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1zdHlsZVwiLFwidmFsdWVcIjpcIlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jb250YWluZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjEwMCVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS00XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubWItMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm1iLTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubXQtNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1ibGFja1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmctb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDAgMCAwIC8gdmFyKC0tdHctYmctb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnLXdoaXRlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy1iZy1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC0zXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjEyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LWNlbnRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC14bFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibGluZS1oZWlnaHRcIixcInZhbHVlXCI6XCIyOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LWJsYWNrXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10ZXh0LW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMCAwIDAgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LXdoaXRlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10ZXh0LW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBHZW5lcmFsIHN0eWxlcyBcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnLWJsYWNrXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcImJsYWNrXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiVGltZVBpY2tlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMzMzMzM1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIxMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiVGltZVBpY2tlcltwbGF0Zm9ybT1hbmRyb2lkXVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMzMzMzM1wifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19XG5leHBvcnQgZGVmYXVsdCBfX19DU1MySlNPTl9MT0FERVJfRVhQT1JUX19fXG5jb25zdCB7IGFkZFRhZ2dlZEFkZGl0aW9uYWxDU1MgfSA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcbmFkZFRhZ2dlZEFkZGl0aW9uYWxDU1MoX19fQ1NTMkpTT05fTE9BREVSX0VYUE9SVF9fXywgXCJDOlxcXFxVc2Vyc1xcXFx0aW1uaVxcXFxDdXJzb3IgUHJvamVjdHNcXFxcRGF5RGF0ZSAyXFxcXGFwcFxcXFxhcHAuY3NzXCIpXG4iLCJpbXBvcnQgKiBhcyBBcHBsaWNhdGlvbiBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvYXBwbGljYXRpb24nO1xuXG5kZWNsYXJlIGNvbnN0IGFuZHJvaWQ6IGFueTtcblxuQXBwbGljYXRpb24ucnVuKHsgbW9kdWxlTmFtZTogJ2FwcC1yb290JyB9KTtcblxuLy8gU2V0dXAgQW5kcm9pZC1zcGVjaWZpYyBVSSBhZnRlciB0aGUgYXBwIGlzIGxhdW5jaGVkXG5pZiAoQXBwbGljYXRpb24uYW5kcm9pZCkge1xuICAgIEFwcGxpY2F0aW9uLmFuZHJvaWQub24oJ2FjdGl2aXR5Q3JlYXRlZCcsIChhcmdzOiBhbnkpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2aXR5ID0gYXJncy5hY3Rpdml0eTtcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvdyA9IGFjdGl2aXR5LmdldFdpbmRvdygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBCYXNpYyBmbGFncyB0aGF0IHdvcmsgb24gb2xkZXIgQW5kcm9pZCB2ZXJzaW9uc1xuICAgICAgICAgICAgY29uc3QgVmlldyA9IGFuZHJvaWQudmlldy5WaWV3O1xuICAgICAgICAgICAgbGV0IGZsYWdzID0gVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfU1RBQkxFXG4gICAgICAgICAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9ISURFX05BVklHQVRJT05cbiAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0ZVTExTQ1JFRU5cbiAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfSElERV9OQVZJR0FUSU9OXG4gICAgICAgICAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0ZVTExTQ1JFRU47XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIE9ubHkgYWRkIElNTUVSU0lWRV9TVElDS1kgaWYgYXZhaWxhYmxlIChBbmRyb2lkIDQuNCspXG4gICAgICAgICAgICBpZiAoYW5kcm9pZC5vcy5CdWlsZC5WRVJTSU9OLlNES19JTlQgPj0gYW5kcm9pZC5vcy5CdWlsZC5WRVJTSU9OX0NPREVTLktJVEtBVCkge1xuICAgICAgICAgICAgICAgIGZsYWdzIHw9IFZpZXcuU1lTVEVNX1VJX0ZMQUdfSU1NRVJTSVZFX1NUSUNLWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2luZG93LmdldERlY29yVmlldygpLnNldFN5c3RlbVVpVmlzaWJpbGl0eShmbGFncyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFNldCB3aW5kb3cgZmxhZ3NcbiAgICAgICAgICAgIGNvbnN0IFdpbmRvd01hbmFnZXIgPSBhbmRyb2lkLnZpZXcuV2luZG93TWFuYWdlcjtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRGbGFncyhXaW5kb3dNYW5hZ2VyLkxheW91dFBhcmFtcy5GTEFHX0ZVTExTQ1JFRU4pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBBZGQgYSBsaXN0ZW5lciB0byBtYWludGFpbiBmdWxsc2NyZWVuIHdoZW4gc3lzdGVtIFVJIHZpc2liaWxpdHkgY2hhbmdlc1xuICAgICAgICAgICAgaWYgKGFuZHJvaWQub3MuQnVpbGQuVkVSU0lPTi5TREtfSU5UID49IGFuZHJvaWQub3MuQnVpbGQuVkVSU0lPTl9DT0RFUy5LSVRLQVQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuZ2V0RGVjb3JWaWV3KCkuc2V0T25TeXN0ZW1VaVZpc2liaWxpdHlDaGFuZ2VMaXN0ZW5lcihuZXcgYW5kcm9pZC52aWV3LlZpZXcuT25TeXN0ZW1VaVZpc2liaWxpdHlDaGFuZ2VMaXN0ZW5lcih7XG4gICAgICAgICAgICAgICAgICAgIG9uU3lzdGVtVWlWaXNpYmlsaXR5Q2hhbmdlOiBmdW5jdGlvbih2aXNpYmlsaXR5OiBudW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5nZXREZWNvclZpZXcoKS5zZXRTeXN0ZW1VaVZpc2liaWxpdHkoZmxhZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gYWN0aXZpdHlDcmVhdGVkOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIEFwcGxpY2F0aW9uLmFuZHJvaWQub24oJ2FjdGl2aXR5UmVzdW1lZCcsIChhcmdzOiBhbnkpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2aXR5ID0gYXJncy5hY3Rpdml0eTtcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvdyA9IGFjdGl2aXR5LmdldFdpbmRvdygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBWaWV3ID0gYW5kcm9pZC52aWV3LlZpZXc7XG4gICAgICAgICAgICBsZXQgZmxhZ3MgPSBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9TVEFCTEVcbiAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0hJREVfTkFWSUdBVElPTlxuICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfRlVMTFNDUkVFTlxuICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19ISURFX05BVklHQVRJT05cbiAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfRlVMTFNDUkVFTjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChhbmRyb2lkLm9zLkJ1aWxkLlZFUlNJT04uU0RLX0lOVCA+PSBhbmRyb2lkLm9zLkJ1aWxkLlZFUlNJT05fQ09ERVMuS0lUS0FUKSB7XG4gICAgICAgICAgICAgICAgZmxhZ3MgfD0gVmlldy5TWVNURU1fVUlfRkxBR19JTU1FUlNJVkVfU1RJQ0tZO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB3aW5kb3cuZ2V0RGVjb3JWaWV3KCkuc2V0U3lzdGVtVWlWaXNpYmlsaXR5KGZsYWdzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGFjdGl2aXR5UmVzdW1lZDonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9KTtcbn0iLCJpbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcGFnZSc7XG5pbXBvcnQgeyBGcmFtZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS91aS9mcmFtZSc7XG5pbXBvcnQgeyBNYWluVmlld01vZGVsIH0gZnJvbSAnLi9tYWluLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgU3dpcGVHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2dlc3R1cmVzJztcblxubGV0IHZpZXdNb2RlbDogTWFpblZpZXdNb2RlbDtcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgXG4gICAgaWYgKCF2aWV3TW9kZWwpIHtcbiAgICAgICAgdmlld01vZGVsID0gbmV3IE1haW5WaWV3TW9kZWwoKTtcbiAgICB9XG4gICAgXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZpZXdNb2RlbDtcbiAgICB2aWV3TW9kZWwuaW5pdGlhbGl6ZUNvbnRhaW5lcihwYWdlKTtcblxuICAgIC8vIEFkZCBzd2lwZSBnZXN0dXJlXG4gICAgcGFnZS5vbignc3dpcGUnLCAoYXJnczogU3dpcGVHZXN0dXJlRXZlbnREYXRhKSA9PiB7XG4gICAgICAgIGlmIChhcmdzLmRpcmVjdGlvbiA9PT0gMSB8fCBhcmdzLmRpcmVjdGlvbiA9PT0gMikgeyAvLyAxID0gcmlnaHQsIDIgPSBsZWZ0XG4gICAgICAgICAgICB2aWV3TW9kZWwub3BlblNldHRpbmdzKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdGcm9tKCkge1xuICAgIGlmICh2aWV3TW9kZWwpIHtcbiAgICAgICAgdmlld01vZGVsLmRpc3Bvc2UoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRlZFRvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGlmICh2aWV3TW9kZWwpIHtcbiAgICAgICAgLy8gVXBkYXRlIHNldHRpbmdzIHdoZW4gcmV0dXJuaW5nIGZyb20gc2V0dGluZ3MgcGFnZVxuICAgICAgICB2aWV3TW9kZWwudXBkYXRlRGF0ZVRpbWUoKTtcbiAgICAgICAgdmlld01vZGVsLnVwZGF0ZUZvbnRTZXR0aW5ncygpO1xuICAgIH1cbn0iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRpbmdUbz1cXFwibmF2aWdhdGluZ1RvXFxcIiBuYXZpZ2F0aW5nRnJvbT1cXFwibmF2aWdhdGluZ0Zyb21cXFwiIGNsYXNzPVxcXCJiZy1ibGFja1xcXCIgYWN0aW9uQmFySGlkZGVuPVxcXCJ0cnVlXFxcIj5cXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKlxcXCIgY29sdW1ucz1cXFwiKlxcXCIgY2xhc3M9XFxcImJnLWJsYWNrXFxcIj5cXG4gICAgICAgIDxTdGFja0xheW91dCBpZD1cXFwidGV4dENvbnRhaW5lclxcXCIgcm93PVxcXCIwXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHdpZHRoPVxcXCIxMDAlXFxcIiBoZWlnaHQ9XFxcIjEwMCVcXFwiIGNsYXNzPVxcXCJiZy1ibGFja1xcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHdlZWtkYXkgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIFxcbiAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cXFwie3sgZm9udFNpemUgKiAxLjIgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9XFxcInt7IGZvbnRGYW1pbHkgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJ7eyB0ZXh0Q29sb3IgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XFxcIjkwMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg9XFxcInt7IHRleHRTaGlmdFggfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk9XFxcInt7IHRleHRTaGlmdFkgfX1cXFwiLz5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgZGF0ZSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCIgXFxuICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVxcXCJ7eyBmb250U2l6ZSB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgZm9udEZhbWlseT1cXFwie3sgZm9udEZhbWlseSB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgY29sb3I9XFxcInt7IHRleHRDb2xvciB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cXFwiOTAwXFxcIlxcbiAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWD1cXFwie3sgdGV4dFNoaWZ0WCB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWT1cXFwie3sgdGV4dFNoaWZ0WSB9fVxcXCIvPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyB0aW1lIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgZm9udFNpemU9XFxcInt7IGZvbnRTaXplICogMC44IH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5PVxcXCJ7eyBmb250RmFtaWx5IH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwie3sgdGV4dENvbG9yIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVxcXCI5MDBcXFwiXFxuICAgICAgICAgICAgICAgICAgIHRleHRXcmFwPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVYPVxcXCJ7eyB0ZXh0U2hpZnRYIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZPVxcXCJ7eyB0ZXh0U2hpZnRZIH19XFxcIi8+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsImltcG9ydCB7IE9ic2VydmFibGUgYXMgT2JzZXJ2YWJsZUJhc2UgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IEZyYW1lIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2ZyYW1lJztcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS9hcHBsaWNhdGlvbi1zZXR0aW5ncyc7XG5pbXBvcnQgeyBhbmRyb2lkIGFzIGFuZHJvaWRBcHAgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlL3BsYXRmb3JtJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcGFnZSc7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XG5cbmRlY2xhcmUgY29uc3QgYW5kcm9pZDogYW55O1xuXG5leHBvcnQgY2xhc3MgTWFpblZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGVCYXNlIHtcbiAgICBwcml2YXRlIHVwZGF0ZUludGVydmFsOiBhbnk7XG4gICAgcHJpdmF0ZSBzaGlmdEludGVydmFsOiBhbnk7XG4gICAgcHJpdmF0ZSBjdXJyZW50U2hpZnQgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICBwcml2YXRlIHNjcmVlbldpZHRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBzY3JlZW5IZWlnaHQ6IG51bWJlcjtcbiAgICBwcml2YXRlIGNvbnRhaW5lcldpZHRoOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY29udGFpbmVySGVpZ2h0OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcGFnZTogUGFnZTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEluaXRpYWxpemUgZGVmYXVsdCB2YWx1ZXNcbiAgICAgICAgdGhpcy5zZXQoJ3dlZWtkYXknLCAnJyk7XG4gICAgICAgIHRoaXMuc2V0KCdkYXRlJywgJycpO1xuICAgICAgICB0aGlzLnNldCgndGltZScsICcnKTtcbiAgICAgICAgdGhpcy5zZXQoJ2ZvbnRTaXplJywgODApO1xuICAgICAgICB0aGlzLnNldCgnZm9udEZhbWlseScsICdzYW5zLXNlcmlmJyk7XG4gICAgICAgIHRoaXMuc2V0KCd0ZXh0U2hpZnRYJywgMCk7XG4gICAgICAgIHRoaXMuc2V0KCd0ZXh0U2hpZnRZJywgMCk7XG4gICAgICAgIFxuICAgICAgICAvLyBHZXQgc2NyZWVuIGRpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5zY3JlZW5XaWR0aCA9IFNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzO1xuICAgICAgICB0aGlzLnNjcmVlbkhlaWdodCA9IFNjcmVlbi5tYWluU2NyZWVuLmhlaWdodFBpeGVscztcbiAgICAgICAgXG4gICAgICAgIC8vIEluaXRpYWwgdXBkYXRlXG4gICAgICAgIHRoaXMudXBkYXRlRGF0ZVRpbWUoKTtcbiAgICAgICAgdGhpcy51cGRhdGVGb250U2V0dGluZ3MoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFNldCB1cCBwZXJpb2RpYyB1cGRhdGVzXG4gICAgICAgIHRoaXMudXBkYXRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnVwZGF0ZURhdGVUaW1lKCksIDEwMDApO1xuICAgICAgICBcbiAgICAgICAgLy8gQXBwbHkgc2V0dGluZ3NcbiAgICAgICAgdGhpcy5hcHBseVNldHRpbmdzKCk7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBpbml0aWFsaXplQ29udGFpbmVyKHBhZ2U6IFBhZ2UpIHtcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gcGFnZS5nZXRWaWV3QnlJZCgndGV4dENvbnRhaW5lcicpIGFzIFN0YWNrTGF5b3V0O1xuICAgICAgICBcbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgY29udGFpbmVyLm9uKCdsYXlvdXRDaGFuZ2VkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyV2lkdGggPSBjb250YWluZXIuZ2V0QWN0dWFsU2l6ZSgpLndpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVySGVpZ2h0ID0gY29udGFpbmVyLmdldEFjdHVhbFNpemUoKS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbnRhaW5lciBzaXplIHVwZGF0ZWQ6Jywge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5jb250YWluZXJXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmNvbnRhaW5lckhlaWdodFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIFJlc3RhcnQgdGV4dCBzaGlmdGluZyB3aXRoIG5ldyBib3VuZHNcbiAgICAgICAgICAgICAgICB0aGlzLnNldHVwVGV4dFNoaWZ0aW5nKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gU3RhcnQgdGV4dCBzaGlmdGluZyBpZiBlbmFibGVkXG4gICAgICAgIHRoaXMuc2V0dXBUZXh0U2hpZnRpbmcoKTtcbiAgICB9XG4gICAgXG4gICAgdXBkYXRlRGF0ZVRpbWUoKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCB3ZWVrZGF5cyA9IFsnRG9taW5nbycsICdTZWd1bmRhLWZlaXJhJywgJ1RlcsOnYS1mZWlyYScsICdRdWFydGEtZmVpcmEnLCAnUXVpbnRhLWZlaXJhJywgJ1NleHRhLWZlaXJhJywgJ1PDoWJhZG8nXTtcbiAgICAgICAgY29uc3QgbW9udGhzID0gWydKYW5laXJvJywgJ0ZldmVyZWlybycsICdNYXLDp28nLCAnQWJyaWwnLCAnTWFpbycsICdKdW5obycsICdKdWxobycsICdBZ29zdG8nLCAnU2V0ZW1icm8nLCAnT3V0dWJybycsICdOb3ZlbWJybycsICdEZXplbWJybyddO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgd2Vla2RheSA9IHdlZWtkYXlzW2RhdGUuZ2V0RGF5KCldO1xuICAgICAgICBjb25zdCBtb250aCA9IG1vbnRoc1tkYXRlLmdldE1vbnRoKCldO1xuICAgICAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEZvcm1hdCB0aW1lIHdpdGggbGVhZGluZyB6ZXJvcyAod2l0aG91dCBzZWNvbmRzKVxuICAgICAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNldCgnd2Vla2RheScsIHdlZWtkYXkpO1xuICAgICAgICB0aGlzLnNldCgnZGF0ZScsIGAke2RheX0gZGUgJHttb250aH1gKTtcbiAgICAgICAgdGhpcy5zZXQoJ3RpbWUnLCBgJHtob3Vyc306JHttaW51dGVzfWApO1xuICAgICAgICBcbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBuaWdodCB0aW1lIChiZXR3ZWVuIHN1bnNldCBhbmQgc3VucmlzZSlcbiAgICAgICAgLy8gU2ltcGxlIGFwcHJveGltYXRpb246IE5pZ2h0IGlzIGJldHdlZW4gMTg6MDAgKDYgUE0pIGFuZCA2OjAwICg2IEFNKVxuICAgICAgICBjb25zdCBob3VyID0gZGF0ZS5nZXRIb3VycygpO1xuICAgICAgICBjb25zdCBpc05pZ2h0VGltZSA9IGhvdXIgPj0gMTggfHwgaG91ciA8IDY7XG4gICAgICAgIFxuICAgICAgICBpZiAoYXBwU2V0dGluZ3MuZ2V0Qm9vbGVhbignYXV0b05pZ2h0TW9kZScsIGZhbHNlKSAmJiBpc05pZ2h0VGltZSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ3RleHRDb2xvcicsICcjODA4MDgwJyk7IC8vIERpbW1lZCB0ZXh0IGZvciBuaWdodCBtb2RlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldCgndGV4dENvbG9yJywgJyNGRkZGRkYnKTsgLy8gTm9ybWFsIHdoaXRlIHRleHRcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgdXBkYXRlRm9udFNldHRpbmdzKCkge1xuICAgICAgICBjb25zdCBmb250U2l6ZXMgPSBbODAsIDEyMF07XG4gICAgICAgIGNvbnN0IGZvbnRTdHlsZXMgPSBbJ3NhbnMtc2VyaWYnLCAnc2VyaWYnLCAnbW9ub3NwYWNlJ107XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzaXplSW5kZXggPSBhcHBTZXR0aW5ncy5nZXROdW1iZXIoJ2ZvbnRTaXplJywgMCk7IC8vIERlZmF1bHQgdG8gZmlyc3QgaW5kZXggKDgwcHgpXG4gICAgICAgIGNvbnN0IHN0eWxlSW5kZXggPSBhcHBTZXR0aW5ncy5nZXROdW1iZXIoJ2ZvbnRTdHlsZScsIDApO1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ1VwZGF0aW5nIGZvbnQgc2V0dGluZ3MgLSBpbml0aWFsOicsIHtcbiAgICAgICAgICAgIHNpemVJbmRleCxcbiAgICAgICAgICAgIGZvbnRTaXplcyxcbiAgICAgICAgICAgIGN1cnJlbnRGb250U2l6ZTogdGhpcy5nZXQoJ2ZvbnRTaXplJylcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyBFbnN1cmUgd2UgaGF2ZSB2YWxpZCBpbmRpY2VzXG4gICAgICAgIGNvbnN0IHNhZmVTaXplSW5kZXggPSBNYXRoLm1pbihNYXRoLm1heCgwLCBzaXplSW5kZXgpLCBmb250U2l6ZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgIGNvbnN0IHNhZmVTdHlsZUluZGV4ID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgc3R5bGVJbmRleCksIGZvbnRTdHlsZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBuZXdGb250U2l6ZSA9IGZvbnRTaXplc1tzYWZlU2l6ZUluZGV4XTtcbiAgICAgICAgY29uc3QgbmV3Rm9udEZhbWlseSA9IGZvbnRTdHlsZXNbc2FmZVN0eWxlSW5kZXhdO1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ1VwZGF0aW5nIGZvbnQgc2V0dGluZ3MgLSBmaW5hbDonLCB7IFxuICAgICAgICAgICAgc2l6ZUluZGV4LCBcbiAgICAgICAgICAgIHNhZmVTaXplSW5kZXgsIFxuICAgICAgICAgICAgbmV3Rm9udFNpemUsXG4gICAgICAgICAgICBmb250U2l6ZXMsXG4gICAgICAgICAgICBzZWxlY3RlZFNpemU6IGZvbnRTaXplc1tzYWZlU2l6ZUluZGV4XSxcbiAgICAgICAgICAgIGN1cnJlbnRGb250U2l6ZTogdGhpcy5nZXQoJ2ZvbnRTaXplJylcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyBVcGRhdGUgdGhlIGZvbnQgc2l6ZSBhbmQgZmFtaWx5XG4gICAgICAgIHRoaXMuc2V0KCdmb250U2l6ZScsIG5ld0ZvbnRTaXplKTtcbiAgICAgICAgdGhpcy5zZXQoJ2ZvbnRGYW1pbHknLCBuZXdGb250RmFtaWx5KTtcbiAgICAgICAgXG4gICAgICAgIC8vIFJlc3RhcnQgdGV4dCBzaGlmdGluZyBpZiBlbmFibGVkXG4gICAgICAgIGlmICh0aGlzLnNoaWZ0SW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zaGlmdEludGVydmFsKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dXBUZXh0U2hpZnRpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBvcGVuU2V0dGluZ3MoKSB7XG4gICAgICAgIEZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICBtb2R1bGVOYW1lOiAnc2V0dGluZ3MtcGFnZScsXG4gICAgICAgICAgICBhbmltYXRlZDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBhcHBseVNldHRpbmdzKCkge1xuICAgICAgICBpZiAoYW5kcm9pZEFwcCkge1xuICAgICAgICAgICAgY29uc3QgYWN0aXZpdHkgPSBhbmRyb2lkQXBwLnN0YXJ0QWN0aXZpdHkgfHwgYW5kcm9pZEFwcC5mb3JlZ3JvdW5kQWN0aXZpdHk7XG4gICAgICAgICAgICBpZiAoYWN0aXZpdHkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3aW5kb3cgPSBhY3Rpdml0eS5nZXRXaW5kb3coKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBBbHdheXMga2VlcCBzY3JlZW4gb25cbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRmxhZ3MoYW5kcm9pZC52aWV3LldpbmRvd01hbmFnZXIuTGF5b3V0UGFyYW1zLkZMQUdfS0VFUF9TQ1JFRU5fT04pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIEhpZGUgYWN0aW9uIGJhclxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbkJhciA9IGFjdGl2aXR5LmdldEFjdGlvbkJhcigpO1xuICAgICAgICAgICAgICAgIGlmIChhY3Rpb25CYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uQmFyLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gU2V0IGZ1bGxzY3JlZW4gZmxhZ3NcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRmxhZ3MoYW5kcm9pZC52aWV3LldpbmRvd01hbmFnZXIuTGF5b3V0UGFyYW1zLkZMQUdfRlVMTFNDUkVFTik7XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEZsYWdzKGFuZHJvaWQudmlldy5XaW5kb3dNYW5hZ2VyLkxheW91dFBhcmFtcy5GTEFHX0xBWU9VVF9OT19MSU1JVFMpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIEhpZGUgc3lzdGVtIFVJXG4gICAgICAgICAgICAgICAgY29uc3QgVmlldyA9IGFuZHJvaWQudmlldy5WaWV3O1xuICAgICAgICAgICAgICAgIGNvbnN0IGZsYWdzID0gVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfU1RBQkxFXG4gICAgICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfSElERV9OQVZJR0FUSU9OXG4gICAgICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfRlVMTFNDUkVFTlxuICAgICAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfSElERV9OQVZJR0FUSU9OXG4gICAgICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19GVUxMU0NSRUVOXG4gICAgICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19JTU1FUlNJVkVfU1RJQ0tZO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHdpbmRvdy5nZXREZWNvclZpZXcoKS5zZXRTeXN0ZW1VaVZpc2liaWxpdHkoZmxhZ3MpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIFNldCBibGFjayBiYWNrZ3JvdW5kXG4gICAgICAgICAgICAgICAgd2luZG93LnNldEJhY2tncm91bmREcmF3YWJsZShuZXcgYW5kcm9pZC5ncmFwaGljcy5kcmF3YWJsZS5Db2xvckRyYXdhYmxlKGFuZHJvaWQuZ3JhcGhpY3MuQ29sb3IuQkxBQ0spKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gVXBkYXRlIGZvbnQgc2V0dGluZ3NcbiAgICAgICAgdGhpcy51cGRhdGVGb250U2V0dGluZ3MoKTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBzZXR1cFRleHRTaGlmdGluZygpIHtcbiAgICAgICAgaWYgKGFwcFNldHRpbmdzLmdldEJvb2xlYW4oJ3RleHRTaGlmdGluZycsIHRydWUpKSB7XG4gICAgICAgICAgICBjb25zdCBmcmVxdWVuY3kgPSBhcHBTZXR0aW5ncy5nZXROdW1iZXIoJ3NoaWZ0RnJlcXVlbmN5JywgNjApICogMTAwMDsgLy8gQ29udmVydCB0byBtaWxsaXNlY29uZHNcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudFggPSBhcHBTZXR0aW5ncy5nZXROdW1iZXIoJ3NoaWZ0QW1vdW50WCcsIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudFkgPSBhcHBTZXR0aW5ncy5nZXROdW1iZXIoJ3NoaWZ0QW1vdW50WScsIDUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2V0dGluZyB1cCB0ZXh0IHNoaWZ0aW5nOicsIHsgXG4gICAgICAgICAgICAgICAgZnJlcXVlbmN5LCBcbiAgICAgICAgICAgICAgICBhbW91bnRYLCBcbiAgICAgICAgICAgICAgICBhbW91bnRZXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQ2xlYXIgYW55IGV4aXN0aW5nIGludGVydmFsXG4gICAgICAgICAgICBpZiAodGhpcy5zaGlmdEludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnNoaWZ0SW50ZXJ2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBTZXQgdXAgbmV3IGludGVydmFsXG4gICAgICAgICAgICB0aGlzLnNoaWZ0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHJhbmRvbSBwb3NpdGlvbiB3aXRoaW4gdGhlIGFsbG93ZWQgc2hpZnQgYW1vdW50c1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBhbW91bnRYO1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBhbW91bnRZO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTaGlmdGluZyB0ZXh0OicsIHsgXG4gICAgICAgICAgICAgICAgICAgIHgsIFxuICAgICAgICAgICAgICAgICAgICB5LFxuICAgICAgICAgICAgICAgICAgICBhbW91bnRYLFxuICAgICAgICAgICAgICAgICAgICBhbW91bnRZXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gQXBwbHkgdGhlIHNoaWZ0IHZhbHVlc1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KCd0ZXh0U2hpZnRYJywgeCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoJ3RleHRTaGlmdFknLCB5KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBMb2cgdGhlIGFjdHVhbCB2YWx1ZXMgYmVpbmcgYXBwbGllZFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBcHBsaWVkIHNoaWZ0IHZhbHVlczonLCB7XG4gICAgICAgICAgICAgICAgICAgIHRleHRTaGlmdFg6IHRoaXMuZ2V0KCd0ZXh0U2hpZnRYJyksXG4gICAgICAgICAgICAgICAgICAgIHRleHRTaGlmdFk6IHRoaXMuZ2V0KCd0ZXh0U2hpZnRZJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIGZyZXF1ZW5jeSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSZXNldCBzaGlmdCB2YWx1ZXMgd2hlbiBzaGlmdGluZyBpcyBkaXNhYmxlZFxuICAgICAgICAgICAgdGhpcy5zZXQoJ3RleHRTaGlmdFgnLCAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0KCd0ZXh0U2hpZnRZJywgMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudXBkYXRlSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy51cGRhdGVJbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2hpZnRJbnRlcnZhbCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnNoaWZ0SW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IE5hdmlnYXRlZERhdGEgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcGFnZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3BhZ2UnO1xuaW1wb3J0IHsgU2V0dGluZ3NWaWV3TW9kZWwgfSBmcm9tICcuL3NldHRpbmdzLXZpZXctbW9kZWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IFNldHRpbmdzVmlld01vZGVsKCk7XG59IiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8UGFnZSB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0aW5nVG89XFxcIm9uTmF2aWdhdGluZ1RvXFxcIiBjbGFzcz1cXFwiYmctYmxhY2tcXFwiIGFjdGlvbkJhckhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxuICAgIDxTY3JvbGxWaWV3IG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXG4gICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgY2xhc3M9XFxcInAtNFxcXCIgd2lkdGg9XFxcImF1dG9cXFwiPlxcbiAgICAgICAgICAgIDwhLS0gRm9udCBTZXR0aW5ncyBQYW5lbCAtLT5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIm0tNCBwLTRcXFwiIHdpZHRoPVxcXCIzMDBcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRm9udCBTZXR0aW5nc1xcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC14bCBtYi00XFxcIi8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRm9udCBTaXplXFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSBtYi0yXFxcIi8+XFxuICAgICAgICAgICAgICAgIDxMaXN0UGlja2VyIGl0ZW1zPVxcXCJ7eyBmb250U2l6ZXMgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg9XFxcInt7IHNlbGVjdGVkRm9udFNpemVJbmRleCB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcIm1iLTQgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBwLTJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVxcXCIxMjBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcIndoaXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cXFwiYmxhY2tcXFwiLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJGb250IFN0eWxlXFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSBtYi0yXFxcIi8+XFxuICAgICAgICAgICAgICAgIDxMaXN0UGlja2VyIGl0ZW1zPVxcXCJ7eyBmb250U3R5bGVzIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4PVxcXCJ7eyBzZWxlY3RlZEZvbnRTdHlsZUluZGV4IH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibWItNCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIHAtMlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XFxcIjEyMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwid2hpdGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVxcXCJibGFja1xcXCIvPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgPCEtLSBUZXh0IFBvc2l0aW9uIFNldHRpbmdzIFBhbmVsIC0tPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwibS00IHAtNFxcXCIgd2lkdGg9XFxcIjMwMFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJUZXh0IFBvc2l0aW9uXFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSB0ZXh0LXhsIG1iLTRcXFwiLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJTaGlmdCBJbnRlcnZhbFxcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgbWItMlxcXCIvPlxcbiAgICAgICAgICAgICAgICA8TGlzdFBpY2tlciBpdGVtcz1cXFwie3sgc2hpZnRJbnRlcnZhbHMgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg9XFxcInt7IHNlbGVjdGVkU2hpZnRJbnRlcnZhbEluZGV4IH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibWItNCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIHAtMlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XFxcIjEyMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwid2hpdGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVxcXCJibGFja1xcXCIvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkhvcml6b250YWwgU2hpZnQgKHBpeGVscylcXFwiIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIG1iLTJcXFwiLz5cXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCB0ZXh0PVxcXCJ7eyBzaGlmdEFtb3VudFggfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVxcXCJFbnRlciB2YWx1ZSAoMS0xMDApXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cXFwiZG9uZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJtYi00IHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgcC0yXFxcIi8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiVmVydGljYWwgU2hpZnQgKHBpeGVscylcXFwiIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIG1iLTJcXFwiLz5cXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCB0ZXh0PVxcXCJ7eyBzaGlmdEFtb3VudFkgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVxcXCJFbnRlciB2YWx1ZSAoMS0xMDApXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cXFwiZG9uZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJtYi00IHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgcC0yXFxcIi8+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgICA8IS0tIERpc3BsYXkgU2V0dGluZ3MgUGFuZWwgLS0+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJtLTQgcC00XFxcIiB3aWR0aD1cXFwiMzAwXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkRpc3BsYXkgU2V0dGluZ3NcXFwiIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIHRleHQteGwgbWItNFxcXCIvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIk5pZ2h0IE1vZGUgKFN1bnNldCB0byBEYXduKVxcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgbWItMlxcXCIvPlxcbiAgICAgICAgICAgICAgICA8U3dpdGNoIGNoZWNrZWQ9XFxcInt7IGF1dG9OaWdodE1vZGUgfX1cXFwiIGNsYXNzPVxcXCJtYi00XFxcIi8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8IS0tIFNhdmUgQnV0dG9uIC0tPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIlNhdmUgU2V0dGluZ3NcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgdGFwPVxcXCJ7eyBzYXZlU2V0dGluZ3MgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJnLXdoaXRlIHRleHQtYmxhY2sgbXQtNCBwLTNcXFwiLz5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIGFzIE9ic2VydmFibGVCYXNlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlL2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBGcmFtZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS91aS9mcmFtZSc7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvYXBwbGljYXRpb24tc2V0dGluZ3MnO1xuXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlQmFzZSB7XG4gICAgcHJpdmF0ZSBfZm9udFNpemVzID0gWzgwLCAxMjBdO1xuICAgIHByaXZhdGUgX2ZvbnRTaXplc1RleHQgPSBbJzgwcHgnLCAnMTIwcHgnXTtcbiAgICBwcml2YXRlIF9mb250U3R5bGVzID0gWydzYW5zLXNlcmlmJywgJ3NlcmlmJywgJ21vbm9zcGFjZSddO1xuICAgIHByaXZhdGUgX3NoaWZ0SW50ZXJ2YWxzID0gWyczIHNlZ3VuZG9zJywgJzEgbWludXRvJywgJzUgbWludXRvcycsICcxMCBtaW51dG9zJ107XG4gICAgcHJpdmF0ZSBfc2hpZnRJbnRlcnZhbFZhbHVlcyA9IFszLCA2MCwgMzAwLCA2MDBdOyAvLyBWYWx1ZXMgaW4gc2Vjb25kc1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBcbiAgICAgICAgLy8gU2V0IG9ic2VydmFibGUgcHJvcGVydGllc1xuICAgICAgICB0aGlzLnNldCgnZm9udFNpemVzJywgdGhpcy5fZm9udFNpemVzVGV4dCk7XG4gICAgICAgIHRoaXMuc2V0KCdmb250U3R5bGVzJywgdGhpcy5fZm9udFN0eWxlcyk7XG4gICAgICAgIHRoaXMuc2V0KCdzaGlmdEludGVydmFscycsIHRoaXMuX3NoaWZ0SW50ZXJ2YWxzKTtcbiAgICAgICAgXG4gICAgICAgIC8vIExvYWQgc2F2ZWQgc2V0dGluZ3NcbiAgICAgICAgdGhpcy5sb2FkU2V0dGluZ3MoKTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGxvYWRTZXR0aW5ncygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0xvYWRpbmcgc2V0dGluZ3MuLi4nKTtcbiAgICAgICAgXG4gICAgICAgIC8vIExvYWQgZm9udCBzZXR0aW5nc1xuICAgICAgICBjb25zdCBzYXZlZEZvbnRTaXplID0gYXBwU2V0dGluZ3MuZ2V0TnVtYmVyKCdmb250U2l6ZScsIDApO1xuICAgICAgICBjb25zb2xlLmxvZygnTG9hZGluZyBmb250IHNpemU6Jywge1xuICAgICAgICAgICAgc2F2ZWRJbmRleDogc2F2ZWRGb250U2l6ZSxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLl9mb250U2l6ZXNbc2F2ZWRGb250U2l6ZV0sXG4gICAgICAgICAgICB0ZXh0OiB0aGlzLl9mb250U2l6ZXNUZXh0W3NhdmVkRm9udFNpemVdXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gRW5zdXJlIHdlIGhhdmUgdmFsaWQgaW5kaWNlc1xuICAgICAgICBjb25zdCBzYWZlRm9udFNpemVJbmRleCA9IE1hdGgubWluKE1hdGgubWF4KDAsIHNhdmVkRm9udFNpemUpLCB0aGlzLl9mb250U2l6ZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgIHRoaXMuc2V0KCdzZWxlY3RlZEZvbnRTaXplSW5kZXgnLCBzYWZlRm9udFNpemVJbmRleCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzYXZlZEZvbnRTdHlsZSA9IGFwcFNldHRpbmdzLmdldE51bWJlcignZm9udFN0eWxlJywgMCk7XG4gICAgICAgIGNvbnN0IHNhZmVGb250U3R5bGVJbmRleCA9IE1hdGgubWluKE1hdGgubWF4KDAsIHNhdmVkRm9udFN0eWxlKSwgdGhpcy5fZm9udFN0eWxlcy5sZW5ndGggLSAxKTtcbiAgICAgICAgdGhpcy5zZXQoJ3NlbGVjdGVkRm9udFN0eWxlSW5kZXgnLCBzYWZlRm9udFN0eWxlSW5kZXgpO1xuICAgICAgICBcbiAgICAgICAgLy8gTG9hZCBuaWdodCBtb2RlIHNldHRpbmdcbiAgICAgICAgdGhpcy5zZXQoJ2F1dG9OaWdodE1vZGUnLCBhcHBTZXR0aW5ncy5nZXRCb29sZWFuKCdhdXRvTmlnaHRNb2RlJywgZmFsc2UpKTtcbiAgICAgICAgXG4gICAgICAgIC8vIExvYWQgdGV4dCBzaGlmdGluZyBzZXR0aW5nc1xuICAgICAgICB0aGlzLnNldCgndGV4dFNoaWZ0aW5nJywgYXBwU2V0dGluZ3MuZ2V0Qm9vbGVhbigndGV4dFNoaWZ0aW5nJywgdHJ1ZSkpO1xuICAgICAgICB0aGlzLnNldCgnc2VsZWN0ZWRTaGlmdEludGVydmFsSW5kZXgnLCBhcHBTZXR0aW5ncy5nZXROdW1iZXIoJ3NoaWZ0SW50ZXJ2YWxJbmRleCcsIDEpKTtcbiAgICAgICAgdGhpcy5zZXQoJ3NoaWZ0QW1vdW50WCcsIGFwcFNldHRpbmdzLmdldE51bWJlcignc2hpZnRBbW91bnRYJywgMTApKTtcbiAgICAgICAgdGhpcy5zZXQoJ3NoaWZ0QW1vdW50WScsIGFwcFNldHRpbmdzLmdldE51bWJlcignc2hpZnRBbW91bnRZJywgNSkpO1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ1NldHRpbmdzIGxvYWRlZDonLCB7XG4gICAgICAgICAgICBmb250U2l6ZToge1xuICAgICAgICAgICAgICAgIGluZGV4OiBzYWZlRm9udFNpemVJbmRleCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5fZm9udFNpemVzW3NhZmVGb250U2l6ZUluZGV4XSxcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLl9mb250U2l6ZXNUZXh0W3NhZmVGb250U2l6ZUluZGV4XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvbnRTdHlsZToge1xuICAgICAgICAgICAgICAgIGluZGV4OiBzYWZlRm9udFN0eWxlSW5kZXgsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuX2ZvbnRTdHlsZXNbc2FmZUZvbnRTdHlsZUluZGV4XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF1dG9OaWdodE1vZGU6IHRoaXMuZ2V0KCdhdXRvTmlnaHRNb2RlJyksXG4gICAgICAgICAgICB0ZXh0U2hpZnRpbmc6IHRoaXMuZ2V0KCd0ZXh0U2hpZnRpbmcnKSxcbiAgICAgICAgICAgIHNoaWZ0SW50ZXJ2YWw6IHtcbiAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5nZXQoJ3NlbGVjdGVkU2hpZnRJbnRlcnZhbEluZGV4JyksXG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5fc2hpZnRJbnRlcnZhbHNbdGhpcy5nZXQoJ3NlbGVjdGVkU2hpZnRJbnRlcnZhbEluZGV4JyldXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hpZnRBbW91bnRYOiB0aGlzLmdldCgnc2hpZnRBbW91bnRYJyksXG4gICAgICAgICAgICBzaGlmdEFtb3VudFk6IHRoaXMuZ2V0KCdzaGlmdEFtb3VudFknKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2F2ZVNldHRpbmdzKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnU2F2aW5nIHNldHRpbmdzLi4uJyk7XG4gICAgICAgIFxuICAgICAgICAvLyBTYXZlIGZvbnQgc2V0dGluZ3NcbiAgICAgICAgY29uc3QgZm9udFNpemVJbmRleCA9IHRoaXMuZ2V0KCdzZWxlY3RlZEZvbnRTaXplSW5kZXgnKTtcbiAgICAgICAgY29uc3Qgc2FmZUZvbnRTaXplSW5kZXggPSBNYXRoLm1pbihNYXRoLm1heCgwLCBmb250U2l6ZUluZGV4KSwgdGhpcy5fZm9udFNpemVzLmxlbmd0aCAtIDEpO1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ1NhdmluZyBmb250IHNpemU6Jywge1xuICAgICAgICAgICAgcmVxdWVzdGVkSW5kZXg6IGZvbnRTaXplSW5kZXgsXG4gICAgICAgICAgICBzYWZlSW5kZXg6IHNhZmVGb250U2l6ZUluZGV4LFxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuX2ZvbnRTaXplc1tzYWZlRm9udFNpemVJbmRleF0sXG4gICAgICAgICAgICB0ZXh0OiB0aGlzLl9mb250U2l6ZXNUZXh0W3NhZmVGb250U2l6ZUluZGV4XVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGFwcFNldHRpbmdzLnNldE51bWJlcignZm9udFNpemUnLCBzYWZlRm9udFNpemVJbmRleCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBmb250U3R5bGVJbmRleCA9IHRoaXMuZ2V0KCdzZWxlY3RlZEZvbnRTdHlsZUluZGV4Jyk7XG4gICAgICAgIGNvbnN0IHNhZmVGb250U3R5bGVJbmRleCA9IE1hdGgubWluKE1hdGgubWF4KDAsIGZvbnRTdHlsZUluZGV4KSwgdGhpcy5fZm9udFN0eWxlcy5sZW5ndGggLSAxKTtcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0TnVtYmVyKCdmb250U3R5bGUnLCBzYWZlRm9udFN0eWxlSW5kZXgpO1xuICAgICAgICBcbiAgICAgICAgLy8gU2F2ZSBuaWdodCBtb2RlIHNldHRpbmdcbiAgICAgICAgY29uc3QgYXV0b05pZ2h0TW9kZSA9IHRoaXMuZ2V0KCdhdXRvTmlnaHRNb2RlJyk7XG4gICAgICAgIGFwcFNldHRpbmdzLnNldEJvb2xlYW4oJ2F1dG9OaWdodE1vZGUnLCBhdXRvTmlnaHRNb2RlKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFNhdmUgdGV4dCBzaGlmdGluZyBzZXR0aW5nc1xuICAgICAgICBjb25zdCB0ZXh0U2hpZnRpbmcgPSB0aGlzLmdldCgndGV4dFNoaWZ0aW5nJyk7XG4gICAgICAgIGFwcFNldHRpbmdzLnNldEJvb2xlYW4oJ3RleHRTaGlmdGluZycsIHRleHRTaGlmdGluZyk7XG5cbiAgICAgICAgY29uc3QgaW50ZXJ2YWxJbmRleCA9IHRoaXMuZ2V0KCdzZWxlY3RlZFNoaWZ0SW50ZXJ2YWxJbmRleCcpO1xuICAgICAgICBjb25zdCBzYWZlSW50ZXJ2YWxJbmRleCA9IE1hdGgubWluKE1hdGgubWF4KDAsIGludGVydmFsSW5kZXgpLCB0aGlzLl9zaGlmdEludGVydmFsVmFsdWVzLmxlbmd0aCAtIDEpO1xuICAgICAgICBhcHBTZXR0aW5ncy5zZXROdW1iZXIoJ3NoaWZ0SW50ZXJ2YWxJbmRleCcsIHNhZmVJbnRlcnZhbEluZGV4KTtcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0TnVtYmVyKCdzaGlmdEZyZXF1ZW5jeScsIHRoaXMuX3NoaWZ0SW50ZXJ2YWxWYWx1ZXNbc2FmZUludGVydmFsSW5kZXhdKTtcblxuICAgICAgICBjb25zdCBzaGlmdEFtb3VudFggPSBwYXJzZUludCh0aGlzLmdldCgnc2hpZnRBbW91bnRYJyksIDEwKTtcbiAgICAgICAgY29uc3QgdmFsaWRTaGlmdEFtb3VudFggPSBpc05hTihzaGlmdEFtb3VudFgpID8gMTAgOiBNYXRoLm1heCgxLCBNYXRoLm1pbigxMDAsIHNoaWZ0QW1vdW50WCkpO1xuICAgICAgICBhcHBTZXR0aW5ncy5zZXROdW1iZXIoJ3NoaWZ0QW1vdW50WCcsIHZhbGlkU2hpZnRBbW91bnRYKTtcblxuICAgICAgICBjb25zdCBzaGlmdEFtb3VudFkgPSBwYXJzZUludCh0aGlzLmdldCgnc2hpZnRBbW91bnRZJyksIDEwKTtcbiAgICAgICAgY29uc3QgdmFsaWRTaGlmdEFtb3VudFkgPSBpc05hTihzaGlmdEFtb3VudFkpID8gNSA6IE1hdGgubWF4KDEsIE1hdGgubWluKDEwMCwgc2hpZnRBbW91bnRZKSk7XG4gICAgICAgIGFwcFNldHRpbmdzLnNldE51bWJlcignc2hpZnRBbW91bnRZJywgdmFsaWRTaGlmdEFtb3VudFkpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdTZXR0aW5ncyBzYXZlZDonLCB7XG4gICAgICAgICAgICBmb250U2l6ZToge1xuICAgICAgICAgICAgICAgIGluZGV4OiBzYWZlRm9udFNpemVJbmRleCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5fZm9udFNpemVzW3NhZmVGb250U2l6ZUluZGV4XSxcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLl9mb250U2l6ZXNUZXh0W3NhZmVGb250U2l6ZUluZGV4XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvbnRTdHlsZToge1xuICAgICAgICAgICAgICAgIGluZGV4OiBzYWZlRm9udFN0eWxlSW5kZXgsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuX2ZvbnRTdHlsZXNbc2FmZUZvbnRTdHlsZUluZGV4XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF1dG9OaWdodE1vZGUsXG4gICAgICAgICAgICB0ZXh0U2hpZnRpbmcsXG4gICAgICAgICAgICBzaGlmdEludGVydmFsOiB7XG4gICAgICAgICAgICAgICAgaW5kZXg6IHNhZmVJbnRlcnZhbEluZGV4LFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLl9zaGlmdEludGVydmFsVmFsdWVzW3NhZmVJbnRlcnZhbEluZGV4XSxcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLl9zaGlmdEludGVydmFsc1tzYWZlSW50ZXJ2YWxJbmRleF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaGlmdEFtb3VudFg6IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogdGhpcy5nZXQoJ3NoaWZ0QW1vdW50WCcpLFxuICAgICAgICAgICAgICAgIGZpbmFsOiB2YWxpZFNoaWZ0QW1vdW50WFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNoaWZ0QW1vdW50WToge1xuICAgICAgICAgICAgICAgIGlucHV0OiB0aGlzLmdldCgnc2hpZnRBbW91bnRZJyksXG4gICAgICAgICAgICAgICAgZmluYWw6IHZhbGlkU2hpZnRBbW91bnRZXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE5hdmlnYXRlIGJhY2sgdG8gbWFpbiBwYWdlXG4gICAgICAgIEZyYW1lLnRvcG1vc3QoKS5nb0JhY2soKTtcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwifi9wYWNrYWdlLmpzb25cIik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9