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

const ___CSS2JSON_LOADER_EXPORT___ = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":["*","::before","::after"],"declarations":[{"type":"declaration","property":"--tw-border-spacing-x","value":"0"},{"type":"declaration","property":"--tw-border-spacing-y","value":"0"},{"type":"declaration","property":"--tw-translate-x","value":"0"},{"type":"declaration","property":"--tw-translate-y","value":"0"},{"type":"declaration","property":"--tw-rotate","value":"0"},{"type":"declaration","property":"--tw-skew-x","value":"0"},{"type":"declaration","property":"--tw-skew-y","value":"0"},{"type":"declaration","property":"--tw-scale-x","value":"1"},{"type":"declaration","property":"--tw-scale-y","value":"1"},{"type":"declaration","property":"--tw-pan-x","value":""},{"type":"declaration","property":"--tw-pan-y","value":""},{"type":"declaration","property":"--tw-pinch-zoom","value":""},{"type":"declaration","property":"--tw-scroll-snap-strictness","value":"proximity"},{"type":"declaration","property":"--tw-gradient-from-position","value":""},{"type":"declaration","property":"--tw-gradient-via-position","value":""},{"type":"declaration","property":"--tw-gradient-to-position","value":""},{"type":"declaration","property":"--tw-blur","value":""},{"type":"declaration","property":"--tw-brightness","value":""},{"type":"declaration","property":"--tw-contrast","value":""},{"type":"declaration","property":"--tw-grayscale","value":""},{"type":"declaration","property":"--tw-hue-rotate","value":""},{"type":"declaration","property":"--tw-invert","value":""},{"type":"declaration","property":"--tw-saturate","value":""},{"type":"declaration","property":"--tw-sepia","value":""},{"type":"declaration","property":"--tw-drop-shadow","value":""},{"type":"declaration","property":"--tw-backdrop-blur","value":""},{"type":"declaration","property":"--tw-backdrop-brightness","value":""},{"type":"declaration","property":"--tw-backdrop-contrast","value":""},{"type":"declaration","property":"--tw-backdrop-grayscale","value":""},{"type":"declaration","property":"--tw-backdrop-hue-rotate","value":""},{"type":"declaration","property":"--tw-backdrop-invert","value":""},{"type":"declaration","property":"--tw-backdrop-opacity","value":""},{"type":"declaration","property":"--tw-backdrop-saturate","value":""},{"type":"declaration","property":"--tw-backdrop-sepia","value":""},{"type":"declaration","property":"--tw-contain-size","value":""},{"type":"declaration","property":"--tw-contain-layout","value":""},{"type":"declaration","property":"--tw-contain-paint","value":""},{"type":"declaration","property":"--tw-contain-style","value":""}]},{"type":"rule","selectors":["::backdrop"],"declarations":[{"type":"declaration","property":"--tw-border-spacing-x","value":"0"},{"type":"declaration","property":"--tw-border-spacing-y","value":"0"},{"type":"declaration","property":"--tw-translate-x","value":"0"},{"type":"declaration","property":"--tw-translate-y","value":"0"},{"type":"declaration","property":"--tw-rotate","value":"0"},{"type":"declaration","property":"--tw-skew-x","value":"0"},{"type":"declaration","property":"--tw-skew-y","value":"0"},{"type":"declaration","property":"--tw-scale-x","value":"1"},{"type":"declaration","property":"--tw-scale-y","value":"1"},{"type":"declaration","property":"--tw-pan-x","value":""},{"type":"declaration","property":"--tw-pan-y","value":""},{"type":"declaration","property":"--tw-pinch-zoom","value":""},{"type":"declaration","property":"--tw-scroll-snap-strictness","value":"proximity"},{"type":"declaration","property":"--tw-gradient-from-position","value":""},{"type":"declaration","property":"--tw-gradient-via-position","value":""},{"type":"declaration","property":"--tw-gradient-to-position","value":""},{"type":"declaration","property":"--tw-blur","value":""},{"type":"declaration","property":"--tw-brightness","value":""},{"type":"declaration","property":"--tw-contrast","value":""},{"type":"declaration","property":"--tw-grayscale","value":""},{"type":"declaration","property":"--tw-hue-rotate","value":""},{"type":"declaration","property":"--tw-invert","value":""},{"type":"declaration","property":"--tw-saturate","value":""},{"type":"declaration","property":"--tw-sepia","value":""},{"type":"declaration","property":"--tw-drop-shadow","value":""},{"type":"declaration","property":"--tw-backdrop-blur","value":""},{"type":"declaration","property":"--tw-backdrop-brightness","value":""},{"type":"declaration","property":"--tw-backdrop-contrast","value":""},{"type":"declaration","property":"--tw-backdrop-grayscale","value":""},{"type":"declaration","property":"--tw-backdrop-hue-rotate","value":""},{"type":"declaration","property":"--tw-backdrop-invert","value":""},{"type":"declaration","property":"--tw-backdrop-opacity","value":""},{"type":"declaration","property":"--tw-backdrop-saturate","value":""},{"type":"declaration","property":"--tw-backdrop-sepia","value":""},{"type":"declaration","property":"--tw-contain-size","value":""},{"type":"declaration","property":"--tw-contain-layout","value":""},{"type":"declaration","property":"--tw-contain-paint","value":""},{"type":"declaration","property":"--tw-contain-style","value":""}]},{"type":"rule","selectors":[".container"],"declarations":[{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".mb-2"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"8"}]},{"type":"rule","selectors":[".mb-4"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"16"}]},{"type":"rule","selectors":[".mt-4"],"declarations":[{"type":"declaration","property":"margin-top","value":"16"}]},{"type":"rule","selectors":[".bg-black"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(0 0 0 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-white"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(255 255 255 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".p-2"],"declarations":[{"type":"declaration","property":"padding","value":"8"}]},{"type":"rule","selectors":[".p-4"],"declarations":[{"type":"declaration","property":"padding","value":"16"}]},{"type":"rule","selectors":[".text-center"],"declarations":[{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":[".text-2xl"],"declarations":[{"type":"declaration","property":"font-size","value":"24"},{"type":"declaration","property":"line-height","value":"32"}]},{"type":"rule","selectors":[".text-black"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(0 0 0 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-white"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(255 255 255 / var(--tw-text-opacity, 1))"}]},{"type":"comment","comment":" General styles "},{"type":"rule","selectors":[".bg-black"],"declarations":[{"type":"declaration","property":"background-color","value":"black"}]},{"type":"rule","selectors":["TimePicker"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#333333"},{"type":"declaration","property":"padding","value":"12"},{"type":"declaration","property":"font-size","value":"18"}]},{"type":"rule","selectors":["TimePicker[platform=android]"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#333333"}]}],"parsingErrors":[]}}
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"navigatingTo\" navigatingFrom=\"navigatingFrom\" class=\"bg-black\" actionBarHidden=\"true\">\n    <GridLayout rows=\"*\" columns=\"*\" class=\"bg-black\">\n        <StackLayout id=\"textContainer\" row=\"0\" verticalAlignment=\"center\" horizontalAlignment=\"center\" width=\"100%\" height=\"100%\" class=\"bg-black\">\n            <Label text=\"{{ weekday }}\" \n                   class=\"text-center\" \n                   fontSize=\"{{ fontSize * 1.2 }}\"\n                   fontFamily=\"{{ fontFamily }}\"\n                   color=\"{{ textColor }}\"\n                   fontWeight=\"bold\"\n                   textWrap=\"true\"\n                   translateX=\"{{ textShiftX }}\"\n                   translateY=\"{{ textShiftY }}\"/>\n            <Label text=\"{{ fullDate }}\" \n                   class=\"text-center\" \n                   fontSize=\"{{ fontSize }}\"\n                   fontFamily=\"{{ fontFamily }}\"\n                   color=\"{{ textColor }}\"\n                   fontWeight=\"bold\"\n                   textWrap=\"true\"\n                   translateX=\"{{ textShiftX }}\"\n                   translateY=\"{{ textShiftY }}\"/>\n        </StackLayout>\n    </GridLayout>\n</Page>"
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
        this.set('fullDate', '');
        this.set('fontSize', 48);
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
        const year = date.getFullYear();
        this.set('weekday', weekday);
        this.set('fullDate', `${day} de ${month} de ${year}`);
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
        const fontSizes = [48, 64, 80, 96];
        const fontStyles = ['sans-serif', 'serif', 'monospace'];
        const sizeIndex = _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_2__.getNumber('fontSize', 1);
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
            const fontSize = this.get('fontSize');
            console.log('Setting up text shifting:', {
                frequency,
                amountX,
                amountY,
                fontSize,
                containerWidth: this.containerWidth,
                containerHeight: this.containerHeight
            });
            // Clear any existing interval
            if (this.shiftInterval) {
                clearInterval(this.shiftInterval);
            }
            // Set up new interval
            this.shiftInterval = setInterval(() => {
                // Only proceed if we have valid container dimensions
                if (this.containerWidth <= 0 || this.containerHeight <= 0) {
                    console.log('Container dimensions not yet available');
                    return;
                }
                // Calculate safe boundaries based on font size and container dimensions
                const textWidth = fontSize * 8; // Approximate width based on font size
                const textHeight = fontSize * 2.4; // Account for both labels (weekday and date)
                // Calculate maximum allowed shift to keep text within container bounds
                const maxShiftX = Math.min(amountX, (this.containerWidth - textWidth) / 2);
                const maxShiftY = Math.min(amountY, (this.containerHeight - textHeight) / 2);
                // Generate random shift within safe bounds
                const x = Math.random() * maxShiftX * 2 - maxShiftX;
                const y = Math.random() * maxShiftY * 2 - maxShiftY;
                console.log('Shifting text:', {
                    x,
                    y,
                    maxShiftX,
                    maxShiftY,
                    textWidth,
                    textHeight,
                    containerWidth: this.containerWidth,
                    containerHeight: this.containerHeight
                });
                this.set('textShiftX', x);
                this.set('textShiftY', y);
            }, frequency);
        }
        else {
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"onNavigatingTo\" class=\"bg-black\" actionBarHidden=\"true\">\n    <ScrollView>\n        <StackLayout class=\"p-4\">\n            <Label text=\"Settings\" class=\"text-white text-2xl mb-4\"/>\n            \n            <!-- Font Size -->\n            <Label text=\"Font Size\" class=\"text-white mb-2\"/>\n            <ListPicker items=\"{{ fontSizes }}\" \n                       selectedIndex=\"{{ selectedFontSizeIndex }}\" \n                       class=\"mb-4 text-white text-center\"\n                       height=\"120\"/>\n            \n            <!-- Font Style -->\n            <Label text=\"Font Style\" class=\"text-white mb-2\"/>\n            <ListPicker items=\"{{ fontStyles }}\" \n                       selectedIndex=\"{{ selectedFontStyleIndex }}\" \n                       class=\"mb-4 text-white text-center\"\n                       height=\"120\"/>\n            \n            <!-- Night Mode -->\n            <Label text=\"Night Mode (Sunset to Dawn)\" class=\"text-white mb-2\"/>\n            <Switch checked=\"{{ autoNightMode }}\" class=\"mb-4\"/>\n            \n            <!-- Text Position Shifting -->\n            <Label text=\"Shift Interval\" class=\"text-white mb-2\"/>\n            <ListPicker items=\"{{ shiftIntervals }}\" \n                       selectedIndex=\"{{ selectedShiftIntervalIndex }}\" \n                       class=\"mb-4 text-white text-center\"\n                       height=\"120\"/>\n            \n            <Label text=\"Horizontal Shift (pixels)\" class=\"text-white mb-2\"/>\n            <TextField text=\"{{ shiftAmountX }}\" \n                      keyboardType=\"number\"\n                      hint=\"Enter value (1-100)\"\n                      returnKeyType=\"done\"\n                      class=\"mb-4 text-white text-center p-2\"/>\n            \n            <Label text=\"Vertical Shift (pixels)\" class=\"text-white mb-2\"/>\n            <TextField text=\"{{ shiftAmountY }}\" \n                      keyboardType=\"number\"\n                      hint=\"Enter value (1-100)\"\n                      returnKeyType=\"done\"\n                      class=\"mb-4 text-white text-center p-2\"/>\n            \n            <!-- Save Button -->\n            <Button text=\"Save Settings\" tap=\"{{ saveSettings }}\" class=\"bg-white text-black mt-4\"/>\n        </StackLayout>\n    </ScrollView>\n</Page>"
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
        this._fontSizes = [48, 64, 80, 96];
        this._fontSizesText = ['48px', '64px', '80px', '96px'];
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
        const savedFontSize = _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.getNumber('fontSize', 1);
        console.log('Loading font size:', {
            savedIndex: savedFontSize,
            value: this._fontSizes[savedFontSize]
        });
        // Set the selected index for font size
        this.set('selectedFontSizeIndex', savedFontSize);
        const savedFontStyle = _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.getNumber('fontStyle', 0);
        this.set('selectedFontStyleIndex', savedFontStyle);
        // Load night mode setting
        this.set('autoNightMode', _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.getBoolean('autoNightMode', false));
        // Load text shifting settings
        this.set('textShifting', _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.getBoolean('textShifting', true));
        this.set('selectedShiftIntervalIndex', _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.getNumber('shiftIntervalIndex', 1));
        this.set('shiftAmountX', _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.getNumber('shiftAmountX', 10));
        this.set('shiftAmountY', _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.getNumber('shiftAmountY', 5));
        console.log('Settings loaded:', {
            fontSize: {
                index: savedFontSize,
                value: this._fontSizes[savedFontSize],
                text: this._fontSizesText[savedFontSize]
            },
            fontStyle: {
                index: savedFontStyle,
                value: this._fontStyles[savedFontStyle]
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
        console.log('Saving font size:', {
            index: fontSizeIndex,
            value: this._fontSizes[fontSizeIndex],
            text: this._fontSizesText[fontSizeIndex]
        });
        _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.setNumber('fontSize', fontSizeIndex);
        const fontStyleIndex = this.get('selectedFontStyleIndex');
        _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.setNumber('fontStyle', fontStyleIndex);
        // Save night mode setting
        const autoNightMode = this.get('autoNightMode');
        _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.setBoolean('autoNightMode', autoNightMode);
        // Save text shifting settings
        const textShifting = this.get('textShifting');
        _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.setBoolean('textShifting', textShifting);
        const intervalIndex = this.get('selectedShiftIntervalIndex');
        _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.setNumber('shiftIntervalIndex', intervalIndex);
        _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.setNumber('shiftFrequency', this._shiftIntervalValues[intervalIndex]);
        const shiftAmountX = parseInt(this.get('shiftAmountX'), 10);
        const validShiftAmountX = isNaN(shiftAmountX) ? 10 : Math.max(1, Math.min(100, shiftAmountX));
        _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.setNumber('shiftAmountX', validShiftAmountX);
        const shiftAmountY = parseInt(this.get('shiftAmountY'), 10);
        const validShiftAmountY = isNaN(shiftAmountY) ? 5 : Math.max(1, Math.min(100, shiftAmountY));
        _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_1__.setNumber('shiftAmountY', validShiftAmountY);
        console.log('Settings saved:', {
            fontSize: {
                index: fontSizeIndex,
                value: this._fontSizes[fontSizeIndex],
                text: this._fontSizesText[fontSizeIndex]
            },
            fontStyle: {
                index: fontStyleIndex,
                value: this._fontStyles[fontStyleIndex]
            },
            autoNightMode,
            textShifting,
            shiftInterval: {
                index: intervalIndex,
                value: this._shiftIntervalValues[intervalIndex],
                text: this._shiftIntervals[intervalIndex]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO2dCQUMvQixLQUFLLEVBQUUsaUJBQWlCO2FBQzNCO1NBQ0osQ0FBQyxDQUFDO1FBRUgsNkJBQTZCO1FBQzdCLDhEQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDN0IsQ0FBQztDQUNKOzs7Ozs7Ozs7QUN2SUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXRlZGF5LWFwcC8uL2FwcC8gc3luYyBcXC4oeG1sJTdDanMlN0MoIiwid2VicGFjazovL2RhdGVkYXktYXBwLy4vYXBwL2FwcC1yb290LnhtbCIsIndlYnBhY2s6Ly9kYXRlZGF5LWFwcC8uL2FwcC9hcHAuY3NzIiwid2VicGFjazovL2RhdGVkYXktYXBwLy4vYXBwL2FwcC50cyIsIndlYnBhY2s6Ly9kYXRlZGF5LWFwcC8uL2FwcC9tYWluLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vZGF0ZWRheS1hcHAvLi9hcHAvbWFpbi1wYWdlLnhtbCIsIndlYnBhY2s6Ly9kYXRlZGF5LWFwcC8uL2FwcC9tYWluLXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vZGF0ZWRheS1hcHAvLi9hcHAvc2V0dGluZ3MtcGFnZS50cyIsIndlYnBhY2s6Ly9kYXRlZGF5LWFwcC8uL2FwcC9zZXR0aW5ncy1wYWdlLnhtbCIsIndlYnBhY2s6Ly9kYXRlZGF5LWFwcC8uL2FwcC9zZXR0aW5ncy12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL2RhdGVkYXktYXBwL2V4dGVybmFsIGNvbW1vbmpzIFwifi9wYWNrYWdlLmpzb25cIiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLXJvb3QueG1sXCI6IFwiLi9hcHAvYXBwLXJvb3QueG1sXCIsXG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAvYXBwLmNzc1wiLFxuXHRcIi4vYXBwLnRzXCI6IFwiLi9hcHAvYXBwLnRzXCIsXG5cdFwiLi9tYWluLXBhZ2UudHNcIjogXCIuL2FwcC9tYWluLXBhZ2UudHNcIixcblx0XCIuL21haW4tcGFnZS54bWxcIjogXCIuL2FwcC9tYWluLXBhZ2UueG1sXCIsXG5cdFwiLi9tYWluLXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC9tYWluLXZpZXctbW9kZWwudHNcIixcblx0XCIuL3NldHRpbmdzLXBhZ2UudHNcIjogXCIuL2FwcC9zZXR0aW5ncy1wYWdlLnRzXCIsXG5cdFwiLi9zZXR0aW5ncy1wYWdlLnhtbFwiOiBcIi4vYXBwL3NldHRpbmdzLXBhZ2UueG1sXCIsXG5cdFwiLi9zZXR0aW5ncy12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvc2V0dGluZ3Mtdmlldy1tb2RlbC50c1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2FwcCBzeW5jIHJlY3Vyc2l2ZSBcXFxcLih4bWwlN0NqcyU3Qyg/PCUyMVxcXFwuZFxcXFwuKXRzJTdDcz9jc3MpJFwiOyIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPEZyYW1lIGRlZmF1bHRQYWdlPVxcXCJtYWluLXBhZ2VcXFwiIGFjdGlvbkJhckhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxuPC9GcmFtZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCIvKiBDU1MySlNPTiAqL1xuXG5jb25zdCBfX19DU1MySlNPTl9MT0FERVJfRVhQT1JUX19fID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIipcIixcIjo6YmVmb3JlXCIsXCI6OmFmdGVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ib3JkZXItc3BhY2luZy14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYm9yZGVyLXNwYWNpbmcteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRyYW5zbGF0ZS14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdHJhbnNsYXRlLXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1yb3RhdGVcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1za2V3LXhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1za2V3LXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zY2FsZS14XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2NhbGUteVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBhbi14XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1wYW4teVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGluY2gtem9vbVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzc1wiLFwidmFsdWVcIjpcInByb3hpbWl0eVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtdmlhLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmFkaWVudC10by1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmx1clwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYnJpZ2h0bmVzc1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udHJhc3RcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYXlzY2FsZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctaHVlLXJvdGF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctaW52ZXJ0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zYXR1cmF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2VwaWFcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWRyb3Atc2hhZG93XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1ibHVyXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1jb250cmFzdFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtZ3JheXNjYWxlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1odWUtcm90YXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1pbnZlcnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLW9wYWNpdHlcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLXNhdHVyYXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1zZXBpYVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1zaXplXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLWxheW91dFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1wYWludFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1zdHlsZVwiLFwidmFsdWVcIjpcIlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIjo6YmFja2Ryb3BcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJvcmRlci1zcGFjaW5nLXhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ib3JkZXItc3BhY2luZy15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdHJhbnNsYXRlLXhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10cmFuc2xhdGUteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXJvdGF0ZVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNrZXcteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNrZXcteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjYWxlLXhcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zY2FsZS15XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGFuLXhcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBhbi15XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1waW5jaC16b29tXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzXCIsXCJ2YWx1ZVwiOlwicHJveGltaXR5XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ibHVyXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1icmlnaHRuZXNzXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250cmFzdFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JheXNjYWxlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1odWUtcm90YXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1pbnZlcnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNhdHVyYXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zZXBpYVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZHJvcC1zaGFkb3dcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWJsdXJcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWJyaWdodG5lc3NcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWNvbnRyYXN0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1ncmF5c2NhbGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWludmVydFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atb3BhY2l0eVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atc2F0dXJhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLXNlcGlhXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLXNpemVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tbGF5b3V0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLXBhaW50XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLXN0eWxlXCIsXCJ2YWx1ZVwiOlwiXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmNvbnRhaW5lclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiMTAwJVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tYi0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubWItNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tdC00XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnLWJsYWNrXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMCAwIDAgLyB2YXIoLS10dy1iZy1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYmctd2hpdGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJnLW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYigyNTUgMjU1IDI1NSAvIHZhcigtLXR3LWJnLW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1jZW50ZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtMnhsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJsaW5lLWhlaWdodFwiLFwidmFsdWVcIjpcIjMyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtYmxhY2tcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRleHQtb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInJnYigwIDAgMCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtd2hpdGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRleHQtb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInJnYigyNTUgMjU1IDI1NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiIEdlbmVyYWwgc3R5bGVzIFwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYmctYmxhY2tcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiYmxhY2tcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJUaW1lUGlja2VyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMzMzMzMzXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjEyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMThcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJUaW1lUGlja2VyW3BsYXRmb3JtPWFuZHJvaWRdXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMzMzMzMzXCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX1cbmV4cG9ydCBkZWZhdWx0IF9fX0NTUzJKU09OX0xPQURFUl9FWFBPUlRfX19cbmNvbnN0IHsgYWRkVGFnZ2VkQWRkaXRpb25hbENTUyB9ID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuYWRkVGFnZ2VkQWRkaXRpb25hbENTUyhfX19DU1MySlNPTl9MT0FERVJfRVhQT1JUX19fLCBcIkM6XFxcXFVzZXJzXFxcXHRpbW5pXFxcXEN1cnNvciBQcm9qZWN0c1xcXFxEYXlEYXRlIDJcXFxcYXBwXFxcXGFwcC5jc3NcIilcbiIsImltcG9ydCAqIGFzIEFwcGxpY2F0aW9uIGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS9hcHBsaWNhdGlvbic7XG5cbmRlY2xhcmUgY29uc3QgYW5kcm9pZDogYW55O1xuXG5BcHBsaWNhdGlvbi5ydW4oeyBtb2R1bGVOYW1lOiAnYXBwLXJvb3QnIH0pO1xuXG4vLyBTZXR1cCBBbmRyb2lkLXNwZWNpZmljIFVJIGFmdGVyIHRoZSBhcHAgaXMgbGF1bmNoZWRcbmlmIChBcHBsaWNhdGlvbi5hbmRyb2lkKSB7XG4gICAgQXBwbGljYXRpb24uYW5kcm9pZC5vbignYWN0aXZpdHlDcmVhdGVkJywgKGFyZ3M6IGFueSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWN0aXZpdHkgPSBhcmdzLmFjdGl2aXR5O1xuICAgICAgICAgICAgY29uc3Qgd2luZG93ID0gYWN0aXZpdHkuZ2V0V2luZG93KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEJhc2ljIGZsYWdzIHRoYXQgd29yayBvbiBvbGRlciBBbmRyb2lkIHZlcnNpb25zXG4gICAgICAgICAgICBjb25zdCBWaWV3ID0gYW5kcm9pZC52aWV3LlZpZXc7XG4gICAgICAgICAgICBsZXQgZmxhZ3MgPSBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9TVEFCTEVcbiAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0hJREVfTkFWSUdBVElPTlxuICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfRlVMTFNDUkVFTlxuICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19ISURFX05BVklHQVRJT05cbiAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfRlVMTFNDUkVFTjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gT25seSBhZGQgSU1NRVJTSVZFX1NUSUNLWSBpZiBhdmFpbGFibGUgKEFuZHJvaWQgNC40KylcbiAgICAgICAgICAgIGlmIChhbmRyb2lkLm9zLkJ1aWxkLlZFUlNJT04uU0RLX0lOVCA+PSBhbmRyb2lkLm9zLkJ1aWxkLlZFUlNJT05fQ09ERVMuS0lUS0FUKSB7XG4gICAgICAgICAgICAgICAgZmxhZ3MgfD0gVmlldy5TWVNURU1fVUlfRkxBR19JTU1FUlNJVkVfU1RJQ0tZO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB3aW5kb3cuZ2V0RGVjb3JWaWV3KCkuc2V0U3lzdGVtVWlWaXNpYmlsaXR5KGZsYWdzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gU2V0IHdpbmRvdyBmbGFnc1xuICAgICAgICAgICAgY29uc3QgV2luZG93TWFuYWdlciA9IGFuZHJvaWQudmlldy5XaW5kb3dNYW5hZ2VyO1xuICAgICAgICAgICAgd2luZG93LmFkZEZsYWdzKFdpbmRvd01hbmFnZXIuTGF5b3V0UGFyYW1zLkZMQUdfRlVMTFNDUkVFTik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEFkZCBhIGxpc3RlbmVyIHRvIG1haW50YWluIGZ1bGxzY3JlZW4gd2hlbiBzeXN0ZW0gVUkgdmlzaWJpbGl0eSBjaGFuZ2VzXG4gICAgICAgICAgICBpZiAoYW5kcm9pZC5vcy5CdWlsZC5WRVJTSU9OLlNES19JTlQgPj0gYW5kcm9pZC5vcy5CdWlsZC5WRVJTSU9OX0NPREVTLktJVEtBVCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5nZXREZWNvclZpZXcoKS5zZXRPblN5c3RlbVVpVmlzaWJpbGl0eUNoYW5nZUxpc3RlbmVyKG5ldyBhbmRyb2lkLnZpZXcuVmlldy5PblN5c3RlbVVpVmlzaWJpbGl0eUNoYW5nZUxpc3RlbmVyKHtcbiAgICAgICAgICAgICAgICAgICAgb25TeXN0ZW1VaVZpc2liaWxpdHlDaGFuZ2U6IGZ1bmN0aW9uKHZpc2liaWxpdHk6IG51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmdldERlY29yVmlldygpLnNldFN5c3RlbVVpVmlzaWJpbGl0eShmbGFncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBhY3Rpdml0eUNyZWF0ZWQ6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgQXBwbGljYXRpb24uYW5kcm9pZC5vbignYWN0aXZpdHlSZXN1bWVkJywgKGFyZ3M6IGFueSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWN0aXZpdHkgPSBhcmdzLmFjdGl2aXR5O1xuICAgICAgICAgICAgY29uc3Qgd2luZG93ID0gYWN0aXZpdHkuZ2V0V2luZG93KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IFZpZXcgPSBhbmRyb2lkLnZpZXcuVmlldztcbiAgICAgICAgICAgIGxldCBmbGFncyA9IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX1NUQUJMRVxuICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfSElERV9OQVZJR0FUSU9OXG4gICAgICAgICAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9GVUxMU0NSRUVOXG4gICAgICAgICAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0hJREVfTkFWSUdBVElPTlxuICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19GVUxMU0NSRUVOO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGFuZHJvaWQub3MuQnVpbGQuVkVSU0lPTi5TREtfSU5UID49IGFuZHJvaWQub3MuQnVpbGQuVkVSU0lPTl9DT0RFUy5LSVRLQVQpIHtcbiAgICAgICAgICAgICAgICBmbGFncyB8PSBWaWV3LlNZU1RFTV9VSV9GTEFHX0lNTUVSU0lWRV9TVElDS1k7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdpbmRvdy5nZXREZWNvclZpZXcoKS5zZXRTeXN0ZW1VaVZpc2liaWxpdHkoZmxhZ3MpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gYWN0aXZpdHlSZXN1bWVkOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSIsImltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS9kYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS91aS9wYWdlJztcbmltcG9ydCB7IEZyYW1lIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2ZyYW1lJztcbmltcG9ydCB7IE1haW5WaWV3TW9kZWwgfSBmcm9tICcuL21haW4tdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBTd2lwZUdlc3R1cmVFdmVudERhdGEgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvdWkvZ2VzdHVyZXMnO1xuXG5sZXQgdmlld01vZGVsOiBNYWluVmlld01vZGVsO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBcbiAgICBpZiAoIXZpZXdNb2RlbCkge1xuICAgICAgICB2aWV3TW9kZWwgPSBuZXcgTWFpblZpZXdNb2RlbCgpO1xuICAgIH1cbiAgICBcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdmlld01vZGVsO1xuICAgIHZpZXdNb2RlbC5pbml0aWFsaXplQ29udGFpbmVyKHBhZ2UpO1xuXG4gICAgLy8gQWRkIHN3aXBlIGdlc3R1cmVcbiAgICBwYWdlLm9uKCdzd2lwZScsIChhcmdzOiBTd2lwZUdlc3R1cmVFdmVudERhdGEpID0+IHtcbiAgICAgICAgaWYgKGFyZ3MuZGlyZWN0aW9uID09PSAxIHx8IGFyZ3MuZGlyZWN0aW9uID09PSAyKSB7IC8vIDEgPSByaWdodCwgMiA9IGxlZnRcbiAgICAgICAgICAgIHZpZXdNb2RlbC5vcGVuU2V0dGluZ3MoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ0Zyb20oKSB7XG4gICAgaWYgKHZpZXdNb2RlbCkge1xuICAgICAgICB2aWV3TW9kZWwuZGlzcG9zZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGVkVG8oYXJnczogRXZlbnREYXRhKSB7XG4gICAgaWYgKHZpZXdNb2RlbCkge1xuICAgICAgICAvLyBVcGRhdGUgc2V0dGluZ3Mgd2hlbiByZXR1cm5pbmcgZnJvbSBzZXR0aW5ncyBwYWdlXG4gICAgICAgIHZpZXdNb2RlbC51cGRhdGVEYXRlVGltZSgpO1xuICAgICAgICB2aWV3TW9kZWwudXBkYXRlRm9udFNldHRpbmdzKCk7XG4gICAgfVxufSIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJuYXZpZ2F0aW5nVG9cXFwiIG5hdmlnYXRpbmdGcm9tPVxcXCJuYXZpZ2F0aW5nRnJvbVxcXCIgY2xhc3M9XFxcImJnLWJsYWNrXFxcIiBhY3Rpb25CYXJIaWRkZW49XFxcInRydWVcXFwiPlxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCIqXFxcIiBjb2x1bW5zPVxcXCIqXFxcIiBjbGFzcz1cXFwiYmctYmxhY2tcXFwiPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGlkPVxcXCJ0ZXh0Q29udGFpbmVyXFxcIiByb3c9XFxcIjBcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgd2lkdGg9XFxcIjEwMCVcXFwiIGhlaWdodD1cXFwiMTAwJVxcXCIgY2xhc3M9XFxcImJnLWJsYWNrXFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgd2Vla2RheSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCIgXFxuICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVxcXCJ7eyBmb250U2l6ZSAqIDEuMiB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgZm9udEZhbWlseT1cXFwie3sgZm9udEZhbWlseSB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgY29sb3I9XFxcInt7IHRleHRDb2xvciB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cXFwiYm9sZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg9XFxcInt7IHRleHRTaGlmdFggfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk9XFxcInt7IHRleHRTaGlmdFkgfX1cXFwiLz5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgZnVsbERhdGUgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIFxcbiAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cXFwie3sgZm9udFNpemUgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9XFxcInt7IGZvbnRGYW1pbHkgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJ7eyB0ZXh0Q29sb3IgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XFxcImJvbGRcXFwiXFxuICAgICAgICAgICAgICAgICAgIHRleHRXcmFwPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVYPVxcXCJ7eyB0ZXh0U2hpZnRYIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZPVxcXCJ7eyB0ZXh0U2hpZnRZIH19XFxcIi8+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsImltcG9ydCB7IE9ic2VydmFibGUgYXMgT2JzZXJ2YWJsZUJhc2UgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IEZyYW1lIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2ZyYW1lJztcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS9hcHBsaWNhdGlvbi1zZXR0aW5ncyc7XG5pbXBvcnQgeyBhbmRyb2lkIGFzIGFuZHJvaWRBcHAgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlL3BsYXRmb3JtJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcGFnZSc7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XG5cbmRlY2xhcmUgY29uc3QgYW5kcm9pZDogYW55O1xuXG5leHBvcnQgY2xhc3MgTWFpblZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGVCYXNlIHtcbiAgICBwcml2YXRlIHVwZGF0ZUludGVydmFsOiBhbnk7XG4gICAgcHJpdmF0ZSBzaGlmdEludGVydmFsOiBhbnk7XG4gICAgcHJpdmF0ZSBjdXJyZW50U2hpZnQgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICBwcml2YXRlIHNjcmVlbldpZHRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBzY3JlZW5IZWlnaHQ6IG51bWJlcjtcbiAgICBwcml2YXRlIGNvbnRhaW5lcldpZHRoOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY29udGFpbmVySGVpZ2h0OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcGFnZTogUGFnZTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEluaXRpYWxpemUgZGVmYXVsdCB2YWx1ZXNcbiAgICAgICAgdGhpcy5zZXQoJ3dlZWtkYXknLCAnJyk7XG4gICAgICAgIHRoaXMuc2V0KCdmdWxsRGF0ZScsICcnKTtcbiAgICAgICAgdGhpcy5zZXQoJ2ZvbnRTaXplJywgNDgpO1xuICAgICAgICB0aGlzLnNldCgnZm9udEZhbWlseScsICdzYW5zLXNlcmlmJyk7XG4gICAgICAgIHRoaXMuc2V0KCd0ZXh0U2hpZnRYJywgMCk7XG4gICAgICAgIHRoaXMuc2V0KCd0ZXh0U2hpZnRZJywgMCk7XG4gICAgICAgIFxuICAgICAgICAvLyBHZXQgc2NyZWVuIGRpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5zY3JlZW5XaWR0aCA9IFNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzO1xuICAgICAgICB0aGlzLnNjcmVlbkhlaWdodCA9IFNjcmVlbi5tYWluU2NyZWVuLmhlaWdodFBpeGVscztcbiAgICAgICAgXG4gICAgICAgIC8vIEluaXRpYWwgdXBkYXRlXG4gICAgICAgIHRoaXMudXBkYXRlRGF0ZVRpbWUoKTtcbiAgICAgICAgdGhpcy51cGRhdGVGb250U2V0dGluZ3MoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFNldCB1cCBwZXJpb2RpYyB1cGRhdGVzXG4gICAgICAgIHRoaXMudXBkYXRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnVwZGF0ZURhdGVUaW1lKCksIDEwMDApO1xuICAgICAgICBcbiAgICAgICAgLy8gQXBwbHkgc2V0dGluZ3NcbiAgICAgICAgdGhpcy5hcHBseVNldHRpbmdzKCk7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBpbml0aWFsaXplQ29udGFpbmVyKHBhZ2U6IFBhZ2UpIHtcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gcGFnZS5nZXRWaWV3QnlJZCgndGV4dENvbnRhaW5lcicpIGFzIFN0YWNrTGF5b3V0O1xuICAgICAgICBcbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgY29udGFpbmVyLm9uKCdsYXlvdXRDaGFuZ2VkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyV2lkdGggPSBjb250YWluZXIuZ2V0QWN0dWFsU2l6ZSgpLndpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVySGVpZ2h0ID0gY29udGFpbmVyLmdldEFjdHVhbFNpemUoKS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbnRhaW5lciBzaXplIHVwZGF0ZWQ6Jywge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5jb250YWluZXJXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmNvbnRhaW5lckhlaWdodFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIFJlc3RhcnQgdGV4dCBzaGlmdGluZyB3aXRoIG5ldyBib3VuZHNcbiAgICAgICAgICAgICAgICB0aGlzLnNldHVwVGV4dFNoaWZ0aW5nKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gU3RhcnQgdGV4dCBzaGlmdGluZyBpZiBlbmFibGVkXG4gICAgICAgIHRoaXMuc2V0dXBUZXh0U2hpZnRpbmcoKTtcbiAgICB9XG4gICAgXG4gICAgdXBkYXRlRGF0ZVRpbWUoKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCB3ZWVrZGF5cyA9IFsnRG9taW5nbycsICdTZWd1bmRhLWZlaXJhJywgJ1RlcsOnYS1mZWlyYScsICdRdWFydGEtZmVpcmEnLCAnUXVpbnRhLWZlaXJhJywgJ1NleHRhLWZlaXJhJywgJ1PDoWJhZG8nXTtcbiAgICAgICAgY29uc3QgbW9udGhzID0gWydKYW5laXJvJywgJ0ZldmVyZWlybycsICdNYXLDp28nLCAnQWJyaWwnLCAnTWFpbycsICdKdW5obycsICdKdWxobycsICdBZ29zdG8nLCAnU2V0ZW1icm8nLCAnT3V0dWJybycsICdOb3ZlbWJybycsICdEZXplbWJybyddO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgd2Vla2RheSA9IHdlZWtkYXlzW2RhdGUuZ2V0RGF5KCldO1xuICAgICAgICBjb25zdCBtb250aCA9IG1vbnRoc1tkYXRlLmdldE1vbnRoKCldO1xuICAgICAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2V0KCd3ZWVrZGF5Jywgd2Vla2RheSk7XG4gICAgICAgIHRoaXMuc2V0KCdmdWxsRGF0ZScsIGAke2RheX0gZGUgJHttb250aH0gZGUgJHt5ZWFyfWApO1xuICAgICAgICBcbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBuaWdodCB0aW1lIChiZXR3ZWVuIHN1bnNldCBhbmQgc3VucmlzZSlcbiAgICAgICAgLy8gU2ltcGxlIGFwcHJveGltYXRpb246IE5pZ2h0IGlzIGJldHdlZW4gMTg6MDAgKDYgUE0pIGFuZCA2OjAwICg2IEFNKVxuICAgICAgICBjb25zdCBob3VyID0gZGF0ZS5nZXRIb3VycygpO1xuICAgICAgICBjb25zdCBpc05pZ2h0VGltZSA9IGhvdXIgPj0gMTggfHwgaG91ciA8IDY7XG4gICAgICAgIFxuICAgICAgICBpZiAoYXBwU2V0dGluZ3MuZ2V0Qm9vbGVhbignYXV0b05pZ2h0TW9kZScsIGZhbHNlKSAmJiBpc05pZ2h0VGltZSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ3RleHRDb2xvcicsICcjODA4MDgwJyk7IC8vIERpbW1lZCB0ZXh0IGZvciBuaWdodCBtb2RlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldCgndGV4dENvbG9yJywgJyNGRkZGRkYnKTsgLy8gTm9ybWFsIHdoaXRlIHRleHRcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgdXBkYXRlRm9udFNldHRpbmdzKCkge1xuICAgICAgICBjb25zdCBmb250U2l6ZXMgPSBbNDgsIDY0LCA4MCwgOTZdO1xuICAgICAgICBjb25zdCBmb250U3R5bGVzID0gWydzYW5zLXNlcmlmJywgJ3NlcmlmJywgJ21vbm9zcGFjZSddO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgc2l6ZUluZGV4ID0gYXBwU2V0dGluZ3MuZ2V0TnVtYmVyKCdmb250U2l6ZScsIDEpO1xuICAgICAgICBjb25zdCBzdHlsZUluZGV4ID0gYXBwU2V0dGluZ3MuZ2V0TnVtYmVyKCdmb250U3R5bGUnLCAwKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdVcGRhdGluZyBmb250IHNldHRpbmdzIC0gaW5pdGlhbDonLCB7XG4gICAgICAgICAgICBzaXplSW5kZXgsXG4gICAgICAgICAgICBmb250U2l6ZXMsXG4gICAgICAgICAgICBjdXJyZW50Rm9udFNpemU6IHRoaXMuZ2V0KCdmb250U2l6ZScpXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gRW5zdXJlIHdlIGhhdmUgdmFsaWQgaW5kaWNlc1xuICAgICAgICBjb25zdCBzYWZlU2l6ZUluZGV4ID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgc2l6ZUluZGV4KSwgZm9udFNpemVzLmxlbmd0aCAtIDEpO1xuICAgICAgICBjb25zdCBzYWZlU3R5bGVJbmRleCA9IE1hdGgubWluKE1hdGgubWF4KDAsIHN0eWxlSW5kZXgpLCBmb250U3R5bGVzLmxlbmd0aCAtIDEpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbmV3Rm9udFNpemUgPSBmb250U2l6ZXNbc2FmZVNpemVJbmRleF07XG4gICAgICAgIGNvbnN0IG5ld0ZvbnRGYW1pbHkgPSBmb250U3R5bGVzW3NhZmVTdHlsZUluZGV4XTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdVcGRhdGluZyBmb250IHNldHRpbmdzIC0gZmluYWw6JywgeyBcbiAgICAgICAgICAgIHNpemVJbmRleCwgXG4gICAgICAgICAgICBzYWZlU2l6ZUluZGV4LCBcbiAgICAgICAgICAgIG5ld0ZvbnRTaXplLFxuICAgICAgICAgICAgZm9udFNpemVzLFxuICAgICAgICAgICAgc2VsZWN0ZWRTaXplOiBmb250U2l6ZXNbc2FmZVNpemVJbmRleF0sXG4gICAgICAgICAgICBjdXJyZW50Rm9udFNpemU6IHRoaXMuZ2V0KCdmb250U2l6ZScpXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBmb250IHNpemUgYW5kIGZhbWlseVxuICAgICAgICB0aGlzLnNldCgnZm9udFNpemUnLCBuZXdGb250U2l6ZSk7XG4gICAgICAgIHRoaXMuc2V0KCdmb250RmFtaWx5JywgbmV3Rm9udEZhbWlseSk7XG4gICAgICAgIFxuICAgICAgICAvLyBSZXN0YXJ0IHRleHQgc2hpZnRpbmcgaWYgZW5hYmxlZFxuICAgICAgICBpZiAodGhpcy5zaGlmdEludGVydmFsKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuc2hpZnRJbnRlcnZhbCk7XG4gICAgICAgICAgICB0aGlzLnNldHVwVGV4dFNoaWZ0aW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgb3BlblNldHRpbmdzKCkge1xuICAgICAgICBGcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3NldHRpbmdzLXBhZ2UnLFxuICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgYXBwbHlTZXR0aW5ncygpIHtcbiAgICAgICAgaWYgKGFuZHJvaWRBcHApIHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2aXR5ID0gYW5kcm9pZEFwcC5zdGFydEFjdGl2aXR5IHx8IGFuZHJvaWRBcHAuZm9yZWdyb3VuZEFjdGl2aXR5O1xuICAgICAgICAgICAgaWYgKGFjdGl2aXR5KSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2luZG93ID0gYWN0aXZpdHkuZ2V0V2luZG93KCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gQWx3YXlzIGtlZXAgc2NyZWVuIG9uXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEZsYWdzKGFuZHJvaWQudmlldy5XaW5kb3dNYW5hZ2VyLkxheW91dFBhcmFtcy5GTEFHX0tFRVBfU0NSRUVOX09OKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBIaWRlIGFjdGlvbiBiYXJcbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb25CYXIgPSBhY3Rpdml0eS5nZXRBY3Rpb25CYXIoKTtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uQmFyKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbkJhci5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIFNldCBmdWxsc2NyZWVuIGZsYWdzXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEZsYWdzKGFuZHJvaWQudmlldy5XaW5kb3dNYW5hZ2VyLkxheW91dFBhcmFtcy5GTEFHX0ZVTExTQ1JFRU4pO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRGbGFncyhhbmRyb2lkLnZpZXcuV2luZG93TWFuYWdlci5MYXlvdXRQYXJhbXMuRkxBR19MQVlPVVRfTk9fTElNSVRTKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBIaWRlIHN5c3RlbSBVSVxuICAgICAgICAgICAgICAgIGNvbnN0IFZpZXcgPSBhbmRyb2lkLnZpZXcuVmlldztcbiAgICAgICAgICAgICAgICBjb25zdCBmbGFncyA9IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX1NUQUJMRVxuICAgICAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0hJREVfTkFWSUdBVElPTlxuICAgICAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0ZVTExTQ1JFRU5cbiAgICAgICAgICAgICAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0hJREVfTkFWSUdBVElPTlxuICAgICAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfRlVMTFNDUkVFTlxuICAgICAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfSU1NRVJTSVZFX1NUSUNLWTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB3aW5kb3cuZ2V0RGVjb3JWaWV3KCkuc2V0U3lzdGVtVWlWaXNpYmlsaXR5KGZsYWdzKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBTZXQgYmxhY2sgYmFja2dyb3VuZFxuICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRCYWNrZ3JvdW5kRHJhd2FibGUobmV3IGFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuQ29sb3JEcmF3YWJsZShhbmRyb2lkLmdyYXBoaWNzLkNvbG9yLkJMQUNLKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFVwZGF0ZSBmb250IHNldHRpbmdzXG4gICAgICAgIHRoaXMudXBkYXRlRm9udFNldHRpbmdzKCk7XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgc2V0dXBUZXh0U2hpZnRpbmcoKSB7XG4gICAgICAgIGlmIChhcHBTZXR0aW5ncy5nZXRCb29sZWFuKCd0ZXh0U2hpZnRpbmcnLCB0cnVlKSkge1xuICAgICAgICAgICAgY29uc3QgZnJlcXVlbmN5ID0gYXBwU2V0dGluZ3MuZ2V0TnVtYmVyKCdzaGlmdEZyZXF1ZW5jeScsIDYwKSAqIDEwMDA7IC8vIENvbnZlcnQgdG8gbWlsbGlzZWNvbmRzXG4gICAgICAgICAgICBjb25zdCBhbW91bnRYID0gYXBwU2V0dGluZ3MuZ2V0TnVtYmVyKCdzaGlmdEFtb3VudFgnLCAxMCk7XG4gICAgICAgICAgICBjb25zdCBhbW91bnRZID0gYXBwU2V0dGluZ3MuZ2V0TnVtYmVyKCdzaGlmdEFtb3VudFknLCA1KTtcbiAgICAgICAgICAgIGNvbnN0IGZvbnRTaXplID0gdGhpcy5nZXQoJ2ZvbnRTaXplJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXR0aW5nIHVwIHRleHQgc2hpZnRpbmc6JywgeyBcbiAgICAgICAgICAgICAgICBmcmVxdWVuY3ksIFxuICAgICAgICAgICAgICAgIGFtb3VudFgsIFxuICAgICAgICAgICAgICAgIGFtb3VudFksIFxuICAgICAgICAgICAgICAgIGZvbnRTaXplLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcldpZHRoOiB0aGlzLmNvbnRhaW5lcldpZHRoLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lckhlaWdodDogdGhpcy5jb250YWluZXJIZWlnaHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBDbGVhciBhbnkgZXhpc3RpbmcgaW50ZXJ2YWxcbiAgICAgICAgICAgIGlmICh0aGlzLnNoaWZ0SW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuc2hpZnRJbnRlcnZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFNldCB1cCBuZXcgaW50ZXJ2YWxcbiAgICAgICAgICAgIHRoaXMuc2hpZnRJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBPbmx5IHByb2NlZWQgaWYgd2UgaGF2ZSB2YWxpZCBjb250YWluZXIgZGltZW5zaW9uc1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbnRhaW5lcldpZHRoIDw9IDAgfHwgdGhpcy5jb250YWluZXJIZWlnaHQgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29udGFpbmVyIGRpbWVuc2lvbnMgbm90IHlldCBhdmFpbGFibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBzYWZlIGJvdW5kYXJpZXMgYmFzZWQgb24gZm9udCBzaXplIGFuZCBjb250YWluZXIgZGltZW5zaW9uc1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHRXaWR0aCA9IGZvbnRTaXplICogODsgLy8gQXBwcm94aW1hdGUgd2lkdGggYmFzZWQgb24gZm9udCBzaXplXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dEhlaWdodCA9IGZvbnRTaXplICogMi40OyAvLyBBY2NvdW50IGZvciBib3RoIGxhYmVscyAod2Vla2RheSBhbmQgZGF0ZSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgbWF4aW11bSBhbGxvd2VkIHNoaWZ0IHRvIGtlZXAgdGV4dCB3aXRoaW4gY29udGFpbmVyIGJvdW5kc1xuICAgICAgICAgICAgICAgIGNvbnN0IG1heFNoaWZ0WCA9IE1hdGgubWluKGFtb3VudFgsICh0aGlzLmNvbnRhaW5lcldpZHRoIC0gdGV4dFdpZHRoKSAvIDIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1heFNoaWZ0WSA9IE1hdGgubWluKGFtb3VudFksICh0aGlzLmNvbnRhaW5lckhlaWdodCAtIHRleHRIZWlnaHQpIC8gMik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gR2VuZXJhdGUgcmFuZG9tIHNoaWZ0IHdpdGhpbiBzYWZlIGJvdW5kc1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLnJhbmRvbSgpICogbWF4U2hpZnRYICogMiAtIG1heFNoaWZ0WDtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5yYW5kb20oKSAqIG1heFNoaWZ0WSAqIDIgLSBtYXhTaGlmdFk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NoaWZ0aW5nIHRleHQ6JywgeyBcbiAgICAgICAgICAgICAgICAgICAgeCwgXG4gICAgICAgICAgICAgICAgICAgIHksXG4gICAgICAgICAgICAgICAgICAgIG1heFNoaWZ0WCxcbiAgICAgICAgICAgICAgICAgICAgbWF4U2hpZnRZLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHRleHRIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcldpZHRoOiB0aGlzLmNvbnRhaW5lcldpZHRoLFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJIZWlnaHQ6IHRoaXMuY29udGFpbmVySGVpZ2h0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoJ3RleHRTaGlmdFgnLCB4KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCgndGV4dFNoaWZ0WScsIHkpO1xuICAgICAgICAgICAgfSwgZnJlcXVlbmN5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KCd0ZXh0U2hpZnRYJywgMCk7XG4gICAgICAgICAgICB0aGlzLnNldCgndGV4dFNoaWZ0WScsIDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnVwZGF0ZUludGVydmFsKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudXBkYXRlSW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNoaWZ0SW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zaGlmdEludGVydmFsKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3BhZ2UnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS91aS9wYWdlJztcbmltcG9ydCB7IFNldHRpbmdzVmlld01vZGVsIH0gZnJvbSAnLi9zZXR0aW5ncy12aWV3LW1vZGVsJztcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBTZXR0aW5nc1ZpZXdNb2RlbCgpO1xufSIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCIgY2xhc3M9XFxcImJnLWJsYWNrXFxcIiBhY3Rpb25CYXJIaWRkZW49XFxcInRydWVcXFwiPlxcbiAgICA8U2Nyb2xsVmlldz5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC00XFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiU2V0dGluZ3NcXFwiIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIHRleHQtMnhsIG1iLTRcXFwiLz5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8IS0tIEZvbnQgU2l6ZSAtLT5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRm9udCBTaXplXFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSBtYi0yXFxcIi8+XFxuICAgICAgICAgICAgPExpc3RQaWNrZXIgaXRlbXM9XFxcInt7IGZvbnRTaXplcyB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4PVxcXCJ7eyBzZWxlY3RlZEZvbnRTaXplSW5kZXggfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcIm1iLTQgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cXFwiMTIwXFxcIi8+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPCEtLSBGb250IFN0eWxlIC0tPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJGb250IFN0eWxlXFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSBtYi0yXFxcIi8+XFxuICAgICAgICAgICAgPExpc3RQaWNrZXIgaXRlbXM9XFxcInt7IGZvbnRTdHlsZXMgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleD1cXFwie3sgc2VsZWN0ZWRGb250U3R5bGVJbmRleCB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibWItNCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVxcXCIxMjBcXFwiLz5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8IS0tIE5pZ2h0IE1vZGUgLS0+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIk5pZ2h0IE1vZGUgKFN1bnNldCB0byBEYXduKVxcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgbWItMlxcXCIvPlxcbiAgICAgICAgICAgIDxTd2l0Y2ggY2hlY2tlZD1cXFwie3sgYXV0b05pZ2h0TW9kZSB9fVxcXCIgY2xhc3M9XFxcIm1iLTRcXFwiLz5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8IS0tIFRleHQgUG9zaXRpb24gU2hpZnRpbmcgLS0+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlNoaWZ0IEludGVydmFsXFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSBtYi0yXFxcIi8+XFxuICAgICAgICAgICAgPExpc3RQaWNrZXIgaXRlbXM9XFxcInt7IHNoaWZ0SW50ZXJ2YWxzIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg9XFxcInt7IHNlbGVjdGVkU2hpZnRJbnRlcnZhbEluZGV4IH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJtYi00IHRleHQtd2hpdGUgdGV4dC1jZW50ZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XFxcIjEyMFxcXCIvPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJIb3Jpem9udGFsIFNoaWZ0IChwaXhlbHMpXFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSBtYi0yXFxcIi8+XFxuICAgICAgICAgICAgPFRleHRGaWVsZCB0ZXh0PVxcXCJ7eyBzaGlmdEFtb3VudFggfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU9XFxcIm51bWJlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgaGludD1cXFwiRW50ZXIgdmFsdWUgKDEtMTAwKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cXFwiZG9uZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcIm1iLTQgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBwLTJcXFwiLz5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiVmVydGljYWwgU2hpZnQgKHBpeGVscylcXFwiIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIG1iLTJcXFwiLz5cXG4gICAgICAgICAgICA8VGV4dEZpZWxkIHRleHQ9XFxcInt7IHNoaWZ0QW1vdW50WSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cXFwibnVtYmVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICBoaW50PVxcXCJFbnRlciB2YWx1ZSAoMS0xMDApXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlPVxcXCJkb25lXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibWItNCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIHAtMlxcXCIvPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDwhLS0gU2F2ZSBCdXR0b24gLS0+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJTYXZlIFNldHRpbmdzXFxcIiB0YXA9XFxcInt7IHNhdmVTZXR0aW5ncyB9fVxcXCIgY2xhc3M9XFxcImJnLXdoaXRlIHRleHQtYmxhY2sgbXQtNFxcXCIvPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIGFzIE9ic2VydmFibGVCYXNlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlL2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBGcmFtZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS91aS9mcmFtZSc7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvYXBwbGljYXRpb24tc2V0dGluZ3MnO1xuXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlQmFzZSB7XG4gICAgcHJpdmF0ZSBfZm9udFNpemVzID0gWzQ4LCA2NCwgODAsIDk2XTtcbiAgICBwcml2YXRlIF9mb250U2l6ZXNUZXh0ID0gWyc0OHB4JywgJzY0cHgnLCAnODBweCcsICc5NnB4J107XG4gICAgcHJpdmF0ZSBfZm9udFN0eWxlcyA9IFsnc2Fucy1zZXJpZicsICdzZXJpZicsICdtb25vc3BhY2UnXTtcbiAgICBwcml2YXRlIF9zaGlmdEludGVydmFscyA9IFsnMyBzZWd1bmRvcycsICcxIG1pbnV0bycsICc1IG1pbnV0b3MnLCAnMTAgbWludXRvcyddO1xuICAgIHByaXZhdGUgX3NoaWZ0SW50ZXJ2YWxWYWx1ZXMgPSBbMywgNjAsIDMwMCwgNjAwXTsgLy8gVmFsdWVzIGluIHNlY29uZHNcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFNldCBvYnNlcnZhYmxlIHByb3BlcnRpZXNcbiAgICAgICAgdGhpcy5zZXQoJ2ZvbnRTaXplcycsIHRoaXMuX2ZvbnRTaXplc1RleHQpO1xuICAgICAgICB0aGlzLnNldCgnZm9udFN0eWxlcycsIHRoaXMuX2ZvbnRTdHlsZXMpO1xuICAgICAgICB0aGlzLnNldCgnc2hpZnRJbnRlcnZhbHMnLCB0aGlzLl9zaGlmdEludGVydmFscyk7XG4gICAgICAgIFxuICAgICAgICAvLyBMb2FkIHNhdmVkIHNldHRpbmdzXG4gICAgICAgIHRoaXMubG9hZFNldHRpbmdzKCk7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBsb2FkU2V0dGluZ3MoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2FkaW5nIHNldHRpbmdzLi4uJyk7XG4gICAgICAgIFxuICAgICAgICAvLyBMb2FkIGZvbnQgc2V0dGluZ3NcbiAgICAgICAgY29uc3Qgc2F2ZWRGb250U2l6ZSA9IGFwcFNldHRpbmdzLmdldE51bWJlcignZm9udFNpemUnLCAxKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0xvYWRpbmcgZm9udCBzaXplOicsIHtcbiAgICAgICAgICAgIHNhdmVkSW5kZXg6IHNhdmVkRm9udFNpemUsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5fZm9udFNpemVzW3NhdmVkRm9udFNpemVdXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gU2V0IHRoZSBzZWxlY3RlZCBpbmRleCBmb3IgZm9udCBzaXplXG4gICAgICAgIHRoaXMuc2V0KCdzZWxlY3RlZEZvbnRTaXplSW5kZXgnLCBzYXZlZEZvbnRTaXplKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNhdmVkRm9udFN0eWxlID0gYXBwU2V0dGluZ3MuZ2V0TnVtYmVyKCdmb250U3R5bGUnLCAwKTtcbiAgICAgICAgdGhpcy5zZXQoJ3NlbGVjdGVkRm9udFN0eWxlSW5kZXgnLCBzYXZlZEZvbnRTdHlsZSk7XG4gICAgICAgIFxuICAgICAgICAvLyBMb2FkIG5pZ2h0IG1vZGUgc2V0dGluZ1xuICAgICAgICB0aGlzLnNldCgnYXV0b05pZ2h0TW9kZScsIGFwcFNldHRpbmdzLmdldEJvb2xlYW4oJ2F1dG9OaWdodE1vZGUnLCBmYWxzZSkpO1xuICAgICAgICBcbiAgICAgICAgLy8gTG9hZCB0ZXh0IHNoaWZ0aW5nIHNldHRpbmdzXG4gICAgICAgIHRoaXMuc2V0KCd0ZXh0U2hpZnRpbmcnLCBhcHBTZXR0aW5ncy5nZXRCb29sZWFuKCd0ZXh0U2hpZnRpbmcnLCB0cnVlKSk7XG4gICAgICAgIHRoaXMuc2V0KCdzZWxlY3RlZFNoaWZ0SW50ZXJ2YWxJbmRleCcsIGFwcFNldHRpbmdzLmdldE51bWJlcignc2hpZnRJbnRlcnZhbEluZGV4JywgMSkpO1xuICAgICAgICB0aGlzLnNldCgnc2hpZnRBbW91bnRYJywgYXBwU2V0dGluZ3MuZ2V0TnVtYmVyKCdzaGlmdEFtb3VudFgnLCAxMCkpO1xuICAgICAgICB0aGlzLnNldCgnc2hpZnRBbW91bnRZJywgYXBwU2V0dGluZ3MuZ2V0TnVtYmVyKCdzaGlmdEFtb3VudFknLCA1KSk7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZygnU2V0dGluZ3MgbG9hZGVkOicsIHtcbiAgICAgICAgICAgIGZvbnRTaXplOiB7XG4gICAgICAgICAgICAgICAgaW5kZXg6IHNhdmVkRm9udFNpemUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuX2ZvbnRTaXplc1tzYXZlZEZvbnRTaXplXSxcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLl9mb250U2l6ZXNUZXh0W3NhdmVkRm9udFNpemVdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9udFN0eWxlOiB7XG4gICAgICAgICAgICAgICAgaW5kZXg6IHNhdmVkRm9udFN0eWxlLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLl9mb250U3R5bGVzW3NhdmVkRm9udFN0eWxlXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF1dG9OaWdodE1vZGU6IHRoaXMuZ2V0KCdhdXRvTmlnaHRNb2RlJyksXG4gICAgICAgICAgICB0ZXh0U2hpZnRpbmc6IHRoaXMuZ2V0KCd0ZXh0U2hpZnRpbmcnKSxcbiAgICAgICAgICAgIHNoaWZ0SW50ZXJ2YWw6IHtcbiAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5nZXQoJ3NlbGVjdGVkU2hpZnRJbnRlcnZhbEluZGV4JyksXG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5fc2hpZnRJbnRlcnZhbHNbdGhpcy5nZXQoJ3NlbGVjdGVkU2hpZnRJbnRlcnZhbEluZGV4JyldXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hpZnRBbW91bnRYOiB0aGlzLmdldCgnc2hpZnRBbW91bnRYJyksXG4gICAgICAgICAgICBzaGlmdEFtb3VudFk6IHRoaXMuZ2V0KCdzaGlmdEFtb3VudFknKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2F2ZVNldHRpbmdzKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnU2F2aW5nIHNldHRpbmdzLi4uJyk7XG4gICAgICAgIFxuICAgICAgICAvLyBTYXZlIGZvbnQgc2V0dGluZ3NcbiAgICAgICAgY29uc3QgZm9udFNpemVJbmRleCA9IHRoaXMuZ2V0KCdzZWxlY3RlZEZvbnRTaXplSW5kZXgnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1NhdmluZyBmb250IHNpemU6Jywge1xuICAgICAgICAgICAgaW5kZXg6IGZvbnRTaXplSW5kZXgsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5fZm9udFNpemVzW2ZvbnRTaXplSW5kZXhdLFxuICAgICAgICAgICAgdGV4dDogdGhpcy5fZm9udFNpemVzVGV4dFtmb250U2l6ZUluZGV4XVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGFwcFNldHRpbmdzLnNldE51bWJlcignZm9udFNpemUnLCBmb250U2l6ZUluZGV4KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZvbnRTdHlsZUluZGV4ID0gdGhpcy5nZXQoJ3NlbGVjdGVkRm9udFN0eWxlSW5kZXgnKTtcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0TnVtYmVyKCdmb250U3R5bGUnLCBmb250U3R5bGVJbmRleCk7XG4gICAgICAgIFxuICAgICAgICAvLyBTYXZlIG5pZ2h0IG1vZGUgc2V0dGluZ1xuICAgICAgICBjb25zdCBhdXRvTmlnaHRNb2RlID0gdGhpcy5nZXQoJ2F1dG9OaWdodE1vZGUnKTtcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0Qm9vbGVhbignYXV0b05pZ2h0TW9kZScsIGF1dG9OaWdodE1vZGUpO1xuICAgICAgICBcbiAgICAgICAgLy8gU2F2ZSB0ZXh0IHNoaWZ0aW5nIHNldHRpbmdzXG4gICAgICAgIGNvbnN0IHRleHRTaGlmdGluZyA9IHRoaXMuZ2V0KCd0ZXh0U2hpZnRpbmcnKTtcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0Qm9vbGVhbigndGV4dFNoaWZ0aW5nJywgdGV4dFNoaWZ0aW5nKTtcblxuICAgICAgICBjb25zdCBpbnRlcnZhbEluZGV4ID0gdGhpcy5nZXQoJ3NlbGVjdGVkU2hpZnRJbnRlcnZhbEluZGV4Jyk7XG4gICAgICAgIGFwcFNldHRpbmdzLnNldE51bWJlcignc2hpZnRJbnRlcnZhbEluZGV4JywgaW50ZXJ2YWxJbmRleCk7XG4gICAgICAgIGFwcFNldHRpbmdzLnNldE51bWJlcignc2hpZnRGcmVxdWVuY3knLCB0aGlzLl9zaGlmdEludGVydmFsVmFsdWVzW2ludGVydmFsSW5kZXhdKTtcblxuICAgICAgICBjb25zdCBzaGlmdEFtb3VudFggPSBwYXJzZUludCh0aGlzLmdldCgnc2hpZnRBbW91bnRYJyksIDEwKTtcbiAgICAgICAgY29uc3QgdmFsaWRTaGlmdEFtb3VudFggPSBpc05hTihzaGlmdEFtb3VudFgpID8gMTAgOiBNYXRoLm1heCgxLCBNYXRoLm1pbigxMDAsIHNoaWZ0QW1vdW50WCkpO1xuICAgICAgICBhcHBTZXR0aW5ncy5zZXROdW1iZXIoJ3NoaWZ0QW1vdW50WCcsIHZhbGlkU2hpZnRBbW91bnRYKTtcblxuICAgICAgICBjb25zdCBzaGlmdEFtb3VudFkgPSBwYXJzZUludCh0aGlzLmdldCgnc2hpZnRBbW91bnRZJyksIDEwKTtcbiAgICAgICAgY29uc3QgdmFsaWRTaGlmdEFtb3VudFkgPSBpc05hTihzaGlmdEFtb3VudFkpID8gNSA6IE1hdGgubWF4KDEsIE1hdGgubWluKDEwMCwgc2hpZnRBbW91bnRZKSk7XG4gICAgICAgIGFwcFNldHRpbmdzLnNldE51bWJlcignc2hpZnRBbW91bnRZJywgdmFsaWRTaGlmdEFtb3VudFkpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdTZXR0aW5ncyBzYXZlZDonLCB7XG4gICAgICAgICAgICBmb250U2l6ZToge1xuICAgICAgICAgICAgICAgIGluZGV4OiBmb250U2l6ZUluZGV4LFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLl9mb250U2l6ZXNbZm9udFNpemVJbmRleF0sXG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5fZm9udFNpemVzVGV4dFtmb250U2l6ZUluZGV4XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvbnRTdHlsZToge1xuICAgICAgICAgICAgICAgIGluZGV4OiBmb250U3R5bGVJbmRleCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5fZm9udFN0eWxlc1tmb250U3R5bGVJbmRleF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdXRvTmlnaHRNb2RlLFxuICAgICAgICAgICAgdGV4dFNoaWZ0aW5nLFxuICAgICAgICAgICAgc2hpZnRJbnRlcnZhbDoge1xuICAgICAgICAgICAgICAgIGluZGV4OiBpbnRlcnZhbEluZGV4LFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLl9zaGlmdEludGVydmFsVmFsdWVzW2ludGVydmFsSW5kZXhdLFxuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuX3NoaWZ0SW50ZXJ2YWxzW2ludGVydmFsSW5kZXhdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hpZnRBbW91bnRYOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IHRoaXMuZ2V0KCdzaGlmdEFtb3VudFgnKSxcbiAgICAgICAgICAgICAgICBmaW5hbDogdmFsaWRTaGlmdEFtb3VudFhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaGlmdEFtb3VudFk6IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogdGhpcy5nZXQoJ3NoaWZ0QW1vdW50WScpLFxuICAgICAgICAgICAgICAgIGZpbmFsOiB2YWxpZFNoaWZ0QW1vdW50WVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBOYXZpZ2F0ZSBiYWNrIHRvIG1haW4gcGFnZVxuICAgICAgICBGcmFtZS50b3Btb3N0KCkuZ29CYWNrKCk7XG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIn4vcGFja2FnZS5qc29uXCIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==