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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<Frame defaultPage=\"main-page\" actionBarHidden=\"true\">\n</Frame>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);
if(true) {
	module.hot.accept()
	// module.hot.dispose(() => {})
}

/***/ }),

/***/ "./app/app.css":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* CSS2JSON */

const ___CSS2JSON_LOADER_EXPORT___ = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":["*","::before","::after"],"declarations":[{"type":"declaration","property":"--tw-border-spacing-x","value":"0"},{"type":"declaration","property":"--tw-border-spacing-y","value":"0"},{"type":"declaration","property":"--tw-translate-x","value":"0"},{"type":"declaration","property":"--tw-translate-y","value":"0"},{"type":"declaration","property":"--tw-rotate","value":"0"},{"type":"declaration","property":"--tw-skew-x","value":"0"},{"type":"declaration","property":"--tw-skew-y","value":"0"},{"type":"declaration","property":"--tw-scale-x","value":"1"},{"type":"declaration","property":"--tw-scale-y","value":"1"},{"type":"declaration","property":"--tw-pan-x","value":""},{"type":"declaration","property":"--tw-pan-y","value":""},{"type":"declaration","property":"--tw-pinch-zoom","value":""},{"type":"declaration","property":"--tw-scroll-snap-strictness","value":"proximity"},{"type":"declaration","property":"--tw-gradient-from-position","value":""},{"type":"declaration","property":"--tw-gradient-via-position","value":""},{"type":"declaration","property":"--tw-gradient-to-position","value":""},{"type":"declaration","property":"--tw-blur","value":""},{"type":"declaration","property":"--tw-brightness","value":""},{"type":"declaration","property":"--tw-contrast","value":""},{"type":"declaration","property":"--tw-grayscale","value":""},{"type":"declaration","property":"--tw-hue-rotate","value":""},{"type":"declaration","property":"--tw-invert","value":""},{"type":"declaration","property":"--tw-saturate","value":""},{"type":"declaration","property":"--tw-sepia","value":""},{"type":"declaration","property":"--tw-drop-shadow","value":""},{"type":"declaration","property":"--tw-backdrop-blur","value":""},{"type":"declaration","property":"--tw-backdrop-brightness","value":""},{"type":"declaration","property":"--tw-backdrop-contrast","value":""},{"type":"declaration","property":"--tw-backdrop-grayscale","value":""},{"type":"declaration","property":"--tw-backdrop-hue-rotate","value":""},{"type":"declaration","property":"--tw-backdrop-invert","value":""},{"type":"declaration","property":"--tw-backdrop-opacity","value":""},{"type":"declaration","property":"--tw-backdrop-saturate","value":""},{"type":"declaration","property":"--tw-backdrop-sepia","value":""},{"type":"declaration","property":"--tw-contain-size","value":""},{"type":"declaration","property":"--tw-contain-layout","value":""},{"type":"declaration","property":"--tw-contain-paint","value":""},{"type":"declaration","property":"--tw-contain-style","value":""}]},{"type":"rule","selectors":["::backdrop"],"declarations":[{"type":"declaration","property":"--tw-border-spacing-x","value":"0"},{"type":"declaration","property":"--tw-border-spacing-y","value":"0"},{"type":"declaration","property":"--tw-translate-x","value":"0"},{"type":"declaration","property":"--tw-translate-y","value":"0"},{"type":"declaration","property":"--tw-rotate","value":"0"},{"type":"declaration","property":"--tw-skew-x","value":"0"},{"type":"declaration","property":"--tw-skew-y","value":"0"},{"type":"declaration","property":"--tw-scale-x","value":"1"},{"type":"declaration","property":"--tw-scale-y","value":"1"},{"type":"declaration","property":"--tw-pan-x","value":""},{"type":"declaration","property":"--tw-pan-y","value":""},{"type":"declaration","property":"--tw-pinch-zoom","value":""},{"type":"declaration","property":"--tw-scroll-snap-strictness","value":"proximity"},{"type":"declaration","property":"--tw-gradient-from-position","value":""},{"type":"declaration","property":"--tw-gradient-via-position","value":""},{"type":"declaration","property":"--tw-gradient-to-position","value":""},{"type":"declaration","property":"--tw-blur","value":""},{"type":"declaration","property":"--tw-brightness","value":""},{"type":"declaration","property":"--tw-contrast","value":""},{"type":"declaration","property":"--tw-grayscale","value":""},{"type":"declaration","property":"--tw-hue-rotate","value":""},{"type":"declaration","property":"--tw-invert","value":""},{"type":"declaration","property":"--tw-saturate","value":""},{"type":"declaration","property":"--tw-sepia","value":""},{"type":"declaration","property":"--tw-drop-shadow","value":""},{"type":"declaration","property":"--tw-backdrop-blur","value":""},{"type":"declaration","property":"--tw-backdrop-brightness","value":""},{"type":"declaration","property":"--tw-backdrop-contrast","value":""},{"type":"declaration","property":"--tw-backdrop-grayscale","value":""},{"type":"declaration","property":"--tw-backdrop-hue-rotate","value":""},{"type":"declaration","property":"--tw-backdrop-invert","value":""},{"type":"declaration","property":"--tw-backdrop-opacity","value":""},{"type":"declaration","property":"--tw-backdrop-saturate","value":""},{"type":"declaration","property":"--tw-backdrop-sepia","value":""},{"type":"declaration","property":"--tw-contain-size","value":""},{"type":"declaration","property":"--tw-contain-layout","value":""},{"type":"declaration","property":"--tw-contain-paint","value":""},{"type":"declaration","property":"--tw-contain-style","value":""}]},{"type":"rule","selectors":[".container"],"declarations":[{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".m-1"],"declarations":[{"type":"declaration","property":"margin","value":"4"}]},{"type":"rule","selectors":[".mb-2"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"8"}]},{"type":"rule","selectors":[".mb-4"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"16"}]},{"type":"rule","selectors":[".mt-4"],"declarations":[{"type":"declaration","property":"margin-top","value":"16"}]},{"type":"rule","selectors":[".bg-black"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(0 0 0 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-white"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(255 255 255 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".p-2"],"declarations":[{"type":"declaration","property":"padding","value":"8"}]},{"type":"rule","selectors":[".p-3"],"declarations":[{"type":"declaration","property":"padding","value":"12"}]},{"type":"rule","selectors":[".p-4"],"declarations":[{"type":"declaration","property":"padding","value":"16"}]},{"type":"rule","selectors":[".text-center"],"declarations":[{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":[".text-xl"],"declarations":[{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"line-height","value":"28"}]},{"type":"rule","selectors":[".text-black"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(0 0 0 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-white"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(255 255 255 / var(--tw-text-opacity, 1))"}]},{"type":"comment","comment":" General styles "},{"type":"rule","selectors":[".bg-black"],"declarations":[{"type":"declaration","property":"background-color","value":"black"}]},{"type":"rule","selectors":["TimePicker"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#333333"},{"type":"declaration","property":"padding","value":"12"},{"type":"declaration","property":"font-size","value":"18"}]},{"type":"rule","selectors":["TimePicker[platform=android]"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#333333"}]}],"parsingErrors":[]}}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS2JSON_LOADER_EXPORT___);
const { addTaggedAdditionalCSS } = __webpack_require__("./node_modules/@nativescript/core/ui/styling/style-scope.js");
addTaggedAdditionalCSS(___CSS2JSON_LOADER_EXPORT___, "C:\\Users\\timni\\Cursor Projects\\DayDate 2\\app\\app.css")
if(true) {
	module.hot.accept()
	module.hot.dispose(() => {
		const { removeTaggedAdditionalCSS } = __webpack_require__("./node_modules/@nativescript/core/ui/styling/style-scope.js");
		removeTaggedAdditionalCSS("C:\\Users\\timni\\Cursor Projects\\DayDate 2\\app\\app.css")
	})
}

/***/ }),

/***/ "./app/app.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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


if (true) {
    let hash = __webpack_require__.h();
    let hmrBootEmittedSymbol = Symbol.for('HMRBootEmitted');
    let originalLiveSyncSymbol = Symbol.for('OriginalLiveSync');
    let hmrRuntimeLastLiveSyncSymbol = Symbol.for('HMRRuntimeLastLiveSync');
    const logVerbose = (title, ...info) => {
        if (false) {}
    };
    const setStatus = (hash, status, message, ...info) => {
        // format is important - CLI expects this exact format
        console.log(`[HMR][${hash}] ${status} | ${message}`);
        if (info === null || info === void 0 ? void 0 : info.length) {
            logVerbose('Additional Info', info);
        }
        // return true if operation was successful
        return status === 'success';
    };
    const applyOptions = {
        ignoreUnaccepted: false,
        ignoreDeclined: false,
        ignoreErrored: false,
        onDeclined(info) {
            setStatus(hash, 'failure', 'A module has been declined.', info);
        },
        onUnaccepted(info) {
            setStatus(hash, 'failure', 'A module has not been accepted.', info);
        },
        onAccepted(info) {
            // console.log('accepted', info)
            logVerbose('Module Accepted', info);
        },
        onDisposed(info) {
            // console.log('disposed', info)
            logVerbose('Module Disposed', info);
        },
        onErrored(info) {
            setStatus(hash, 'failure', 'A module has errored.', info);
        },
    };
    // Important: Keep as function and not fat arrow; at the moment hermes does not support them
    const checkAndApply = async function () {
        hash = __webpack_require__.h();
        const modules = await module.hot.check().catch((error) => {
            return setStatus(hash, 'failure', 'Failed to check.', error.message || error.stack);
        });
        if (!modules) {
            logVerbose('No modules to apply.');
            return false;
        }
        const appliedModules = await module.hot
            .apply(applyOptions)
            .catch((error) => {
            return setStatus(hash, 'failure', 'Failed to apply.', error.message || error.stack);
        });
        if (!appliedModules) {
            logVerbose('No modules applied.');
            return false;
        }
        return setStatus(hash, 'success', 'Successfully applied update.');
    };
    const requireExists = (path) => {
        try {
            global['require'](path);
            return true;
        }
        catch (err) {
            return false;
        }
    };
    const hasUpdate = () => {
        return [
            `~/bundle.${__webpack_require__.h()}.hot-update.json`,
            `~/runtime.${__webpack_require__.h()}.hot-update.json`,
        ].some((path) => requireExists(path));
    };
    if (global.__onLiveSync !== global[hmrRuntimeLastLiveSyncSymbol]) {
        // we store the original liveSync here in case this code runs again
        // which happens when you module.hot.accept() the main file
        global[originalLiveSyncSymbol] = global.__onLiveSync;
    }
    global[hmrRuntimeLastLiveSyncSymbol] = async function () {
        logVerbose('LiveSync');
        if (!hasUpdate()) {
            return false;
        }
        if (!(await checkAndApply())) {
            return false;
        }
        await global[originalLiveSyncSymbol]();
    };
    global.__onLiveSync = global[hmrRuntimeLastLiveSyncSymbol];
    if (!global[hmrBootEmittedSymbol]) {
        global[hmrBootEmittedSymbol] = true;
        setStatus(hash, 'boot', 'HMR Enabled - waiting for changes...');
    }
}


/***/ }),

/***/ "./app/main-page.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navigatingFrom: () => (/* binding */ navigatingFrom),
/* harmony export */   navigatingTo: () => (/* binding */ navigatingTo)
/* harmony export */ });
/* harmony import */ var _main_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/main-view-model.ts");

let viewModel;
function navigatingTo(args) {
    const page = args.object;
    if (!viewModel) {
        console.log('Creating new MainViewModel.');
        viewModel = new _main_view_model__WEBPACK_IMPORTED_MODULE_0__.MainViewModel();
    }
    else {
        // If viewModel already exists, ensure settings are refreshed
        console.log('Reusing existing MainViewModel. Refreshing settings.');
        viewModel.updateDateTime(); // Keep date/time fresh
        viewModel.updateFontSettings(); // Refresh font settings
    }
    page.bindingContext = viewModel;
    viewModel.initializeContainer(page); // Re-initialize container specific things if needed
    // Add swipe gesture (ensure listener is not duplicated)
    page.off('swipe'); // Remove previous listener
    page.on('swipe', (args) => {
        if (args.direction === 1 || args.direction === 2) { // 1 = right, 2 = left
            viewModel.openSettings();
        }
    });
}
function navigatingFrom() {
    // Optional: Consider if dispose is needed here or handled elsewhere
    // if (viewModel) {
    //     viewModel.dispose();
    // }
}
/* // Remove the onNavigatedTo handler
export function onNavigatedTo(args: EventData) {
    console.log('Returned to main page (onNavigatedTo event).');
    if (viewModel) {
        console.log('ViewModel exists, calling updateFontSettings.');
        // Update settings when returning from settings page
        viewModel.updateDateTime();
        viewModel.updateFontSettings();
    } else {
        console.log('ViewModel does not exist on return.');
    }
}
*/ 

/* NATIVESCRIPT-HOT-LOADER */
if( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./main-page.ts")) {
	module.hot.accept()
}

/***/ }),

/***/ "./app/main-page.xml":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"navigatingTo\" navigatingFrom=\"navigatingFrom\" class=\"bg-black\" actionBarHidden=\"true\">\n    <GridLayout rows=\"*\" columns=\"*\" class=\"bg-black\">\n        <StackLayout id=\"textContainer\" row=\"0\" verticalAlignment=\"center\" horizontalAlignment=\"center\" width=\"100%\" height=\"100%\" class=\"bg-black\">\n            <Label text=\"{{ weekday }}\" \n                   class=\"text-center\" \n                   fontSize=\"{{ fontSize * 1.2 }}\"\n                   fontFamily=\"{{ fontFamily }}\"\n                   color=\"{{ textColor }}\"\n                   fontWeight=\"900\"\n                   textWrap=\"true\"\n                   translateX=\"{{ textShiftX }}\"\n                   translateY=\"{{ textShiftY }}\"/>\n            <Label text=\"{{ date }}\" \n                   class=\"text-center\" \n                   fontSize=\"{{ fontSize }}\"\n                   fontFamily=\"{{ fontFamily }}\"\n                   color=\"{{ textColor }}\"\n                   fontWeight=\"900\"\n                   textWrap=\"true\"\n                   translateX=\"{{ textShiftX }}\"\n                   translateY=\"{{ textShiftY }}\"/>\n            <Label text=\"{{ time }}\" \n                   class=\"text-center\" \n                   fontSize=\"{{ fontSize }}\"\n                   fontFamily=\"{{ fontFamily }}\"\n                   color=\"{{ textColor }}\"\n                   fontWeight=\"400\"\n                   textWrap=\"true\"\n                   translateX=\"{{ textShiftX }}\"\n                   translateY=\"{{ textShiftY }}\"/>\n        </StackLayout>\n    </GridLayout>\n</Page>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);
if(true) {
	module.hot.accept()
	// module.hot.dispose(() => {})
}

/***/ }),

/***/ "./app/main-view-model.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
        this.set('textShiftX', 0);
        this.set('textShiftY', 0);
        // Get screen dimensions
        this.screenWidth = _nativescript_core_platform__WEBPACK_IMPORTED_MODULE_1__.Screen.mainScreen.widthPixels;
        this.screenHeight = _nativescript_core_platform__WEBPACK_IMPORTED_MODULE_1__.Screen.mainScreen.heightPixels;
        // Load font settings first
        this.updateFontSettings();
        // Initial update
        this.updateDateTime();
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
        const fontSizes = [100, 110, 120, 125, 130];
        const fontStyles = ['sans-serif', 'serif', 'monospace'];
        const sizeIndex = _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_2__.getNumber('fontSize', 0); // Revert default back to 0
        const styleIndex = _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_2__.getNumber('fontStyle', 0); // Revert default back to 0
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

/* NATIVESCRIPT-HOT-LOADER */
if( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./main-view-model.ts")) {
	module.hot.accept()
}

/***/ }),

/***/ "./app/settings-page.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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

/* NATIVESCRIPT-HOT-LOADER */
if( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./settings-page.ts")) {
	module.hot.accept()
}

/***/ }),

/***/ "./app/settings-page.xml":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"onNavigatingTo\" class=\"bg-black\" actionBarHidden=\"true\">\n    <ScrollView orientation=\"horizontal\">\n        <StackLayout orientation=\"horizontal\" class=\"p-4\" width=\"auto\">\n            <!-- Font Settings Panel -->\n            <StackLayout class=\"m-1 p-4\" width=\"300\">\n                <Label text=\"Font Settings\" class=\"text-white text-xl mb-4\"/>\n                \n                <Label text=\"Font Size\" class=\"text-white mb-2\"/>\n                <ListPicker items=\"{{ fontSizes }}\" \n                           selectedIndex=\"{{ selectedFontSizeIndex }}\" \n                           class=\"mb-4 text-white text-center p-2\"\n                           height=\"120\"\n                           color=\"white\"\n                           backgroundColor=\"black\"/>\n                \n                <Label text=\"Font Style\" class=\"text-white mb-2\"/>\n                <ListPicker items=\"{{ fontStyles }}\" \n                           selectedIndex=\"{{ selectedFontStyleIndex }}\" \n                           class=\"mb-4 text-white text-center p-2\"\n                           height=\"120\"\n                           color=\"white\"\n                           backgroundColor=\"black\"/>\n            </StackLayout>\n\n            <!-- Text Position Settings Panel -->\n            <StackLayout class=\"m-1 p-4\" width=\"300\">\n                <Label text=\"Text Position\" class=\"text-white text-xl mb-4\"/>\n                \n                <Label text=\"Shift Interval\" class=\"text-white mb-2\"/>\n                <ListPicker items=\"{{ shiftIntervals }}\" \n                           selectedIndex=\"{{ selectedShiftIntervalIndex }}\" \n                           class=\"mb-4 text-white text-center p-2\"\n                           height=\"120\"\n                           color=\"white\"\n                           backgroundColor=\"black\"/>\n                \n                <Label text=\"Horizontal Shift (pixels)\" class=\"text-white mb-2\"/>\n                <TextField text=\"{{ shiftAmountX }}\" \n                          keyboardType=\"number\"\n                          hint=\"Enter value (1-100)\"\n                          returnKeyType=\"done\"\n                          class=\"mb-4 text-white text-center p-2\"\n                          returnPress=\"{{ saveSettings }}\"/>\n                \n                <Label text=\"Vertical Shift (pixels)\" class=\"text-white mb-2\"/>\n                <TextField text=\"{{ shiftAmountY }}\" \n                          keyboardType=\"number\"\n                          hint=\"Enter value (1-100)\"\n                          returnKeyType=\"done\"\n                          class=\"mb-4 text-white text-center p-2\"\n                          returnPress=\"{{ saveSettings }}\"/>\n            </StackLayout>\n\n            <!-- Display Settings Panel -->\n            <StackLayout class=\"m-1 p-4\" width=\"300\">\n                <Label text=\"Display Settings\" class=\"text-white text-xl mb-4\"/>\n                \n                <Label text=\"Night Mode (Sunset to Dawn)\" class=\"text-white mb-2\"/>\n                <Switch checked=\"{{ autoNightMode }}\" class=\"mb-4\"/>\n                \n                <!-- Save Button -->\n                <Button text=\"Save Settings\" \n                       tap=\"{{ saveSettings }}\" \n                       class=\"bg-white text-black mt-4 p-3\"/>\n            </StackLayout>\n        </StackLayout>\n    </ScrollView>\n</Page>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);
if(true) {
	module.hot.accept()
	// module.hot.dispose(() => {})
}

/***/ }),

/***/ "./app/settings-view-model.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
        this._fontSizes = [100, 110, 120, 125, 130];
        this._fontSizesText = ['100px', '110px', '120px', '125px', '130px'];
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
        // Save font settings
        const fontSizeIndex = this.get('selectedFontSizeIndex');
        const safeFontSizeIndex = Math.min(Math.max(0, fontSizeIndex), this._fontSizes.length - 1);
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
        // Navigate back to main page
        _nativescript_core_ui_frame__WEBPACK_IMPORTED_MODULE_2__.Frame.topmost().goBack();
    }
}

/* NATIVESCRIPT-HOT-LOADER */
if( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./settings-view-model.ts")) {
	module.hot.accept()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUM3Riw4RUFBcUIsQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUV6RCw2QkFBNkI7UUFDN0IsOERBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM3QixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUMxR0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXRlZGF5LWFwcC8uL2FwcC8gc3luYyBcXC4oeG1sJTdDanMlN0MoIiwid2VicGFjazovL2RhdGVkYXktYXBwLy4vYXBwL2FwcC1yb290LnhtbCIsIndlYnBhY2s6Ly9kYXRlZGF5LWFwcC8uL2FwcC9hcHAuY3NzIiwid2VicGFjazovL2RhdGVkYXktYXBwLy4vYXBwL2FwcC50cyIsIndlYnBhY2s6Ly9kYXRlZGF5LWFwcC8uL2FwcC9tYWluLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vZGF0ZWRheS1hcHAvLi9hcHAvbWFpbi1wYWdlLnhtbCIsIndlYnBhY2s6Ly9kYXRlZGF5LWFwcC8uL2FwcC9tYWluLXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vZGF0ZWRheS1hcHAvLi9hcHAvc2V0dGluZ3MtcGFnZS50cyIsIndlYnBhY2s6Ly9kYXRlZGF5LWFwcC8uL2FwcC9zZXR0aW5ncy1wYWdlLnhtbCIsIndlYnBhY2s6Ly9kYXRlZGF5LWFwcC8uL2FwcC9zZXR0aW5ncy12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL2RhdGVkYXktYXBwL2V4dGVybmFsIGNvbW1vbmpzIFwifi9wYWNrYWdlLmpzb25cIiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLXJvb3QueG1sXCI6IFwiLi9hcHAvYXBwLXJvb3QueG1sXCIsXG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAvYXBwLmNzc1wiLFxuXHRcIi4vYXBwLnRzXCI6IFwiLi9hcHAvYXBwLnRzXCIsXG5cdFwiLi9tYWluLXBhZ2UudHNcIjogXCIuL2FwcC9tYWluLXBhZ2UudHNcIixcblx0XCIuL21haW4tcGFnZS54bWxcIjogXCIuL2FwcC9tYWluLXBhZ2UueG1sXCIsXG5cdFwiLi9tYWluLXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC9tYWluLXZpZXctbW9kZWwudHNcIixcblx0XCIuL3NldHRpbmdzLXBhZ2UudHNcIjogXCIuL2FwcC9zZXR0aW5ncy1wYWdlLnRzXCIsXG5cdFwiLi9zZXR0aW5ncy1wYWdlLnhtbFwiOiBcIi4vYXBwL3NldHRpbmdzLXBhZ2UueG1sXCIsXG5cdFwiLi9zZXR0aW5ncy12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvc2V0dGluZ3Mtdmlldy1tb2RlbC50c1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2FwcCBzeW5jIHJlY3Vyc2l2ZSBcXFxcLih4bWwlN0NqcyU3Qyg/PCUyMVxcXFwuZFxcXFwuKXRzJTdDcz9jc3MpJFwiOyIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPEZyYW1lIGRlZmF1bHRQYWdlPVxcXCJtYWluLXBhZ2VcXFwiIGFjdGlvbkJhckhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxuPC9GcmFtZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KClcblx0Ly8gbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHt9KVxufSIsIi8qIENTUzJKU09OICovXG5cbmNvbnN0IF9fX0NTUzJKU09OX0xPQURFUl9FWFBPUlRfX18gPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiKlwiLFwiOjpiZWZvcmVcIixcIjo6YWZ0ZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJvcmRlci1zcGFjaW5nLXhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ib3JkZXItc3BhY2luZy15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdHJhbnNsYXRlLXhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10cmFuc2xhdGUteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXJvdGF0ZVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNrZXcteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNrZXcteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjYWxlLXhcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zY2FsZS15XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGFuLXhcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBhbi15XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1waW5jaC16b29tXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzXCIsXCJ2YWx1ZVwiOlwicHJveGltaXR5XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ibHVyXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1icmlnaHRuZXNzXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250cmFzdFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JheXNjYWxlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1odWUtcm90YXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1pbnZlcnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNhdHVyYXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zZXBpYVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZHJvcC1zaGFkb3dcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWJsdXJcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWJyaWdodG5lc3NcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWNvbnRyYXN0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1ncmF5c2NhbGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWludmVydFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atb3BhY2l0eVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atc2F0dXJhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLXNlcGlhXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLXNpemVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tbGF5b3V0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLXBhaW50XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLXN0eWxlXCIsXCJ2YWx1ZVwiOlwiXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiOjpiYWNrZHJvcFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYm9yZGVyLXNwYWNpbmcteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJvcmRlci1zcGFjaW5nLXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10cmFuc2xhdGUteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRyYW5zbGF0ZS15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcm90YXRlXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2tldy14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2tldy15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2NhbGUteFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjYWxlLXlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1wYW4teFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGFuLXlcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBpbmNoLXpvb21cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3NcIixcInZhbHVlXCI6XCJwcm94aW1pdHlcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJsdXJcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJyaWdodG5lc3NcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRyYXN0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmF5c2NhbGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWh1ZS1yb3RhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWludmVydFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2F0dXJhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNlcGlhXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1kcm9wLXNoYWRvd1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtYmx1clwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzc1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtY29udHJhc3RcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWdyYXlzY2FsZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtaW52ZXJ0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1zYXR1cmF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atc2VwaWFcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tc2l6ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1sYXlvdXRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tcGFpbnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tc3R5bGVcIixcInZhbHVlXCI6XCJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuY29udGFpbmVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIxMDAlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tMVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubWItMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm1iLTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubXQtNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1ibGFja1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmctb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDAgMCAwIC8gdmFyKC0tdHctYmctb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnLXdoaXRlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy1iZy1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC0zXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjEyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LWNlbnRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC14bFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibGluZS1oZWlnaHRcIixcInZhbHVlXCI6XCIyOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LWJsYWNrXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10ZXh0LW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMCAwIDAgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LXdoaXRlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10ZXh0LW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBHZW5lcmFsIHN0eWxlcyBcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnLWJsYWNrXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcImJsYWNrXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiVGltZVBpY2tlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMzMzMzM1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIxMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiVGltZVBpY2tlcltwbGF0Zm9ybT1hbmRyb2lkXVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMzMzMzM1wifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19XG5leHBvcnQgZGVmYXVsdCBfX19DU1MySlNPTl9MT0FERVJfRVhQT1JUX19fXG5jb25zdCB7IGFkZFRhZ2dlZEFkZGl0aW9uYWxDU1MgfSA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcbmFkZFRhZ2dlZEFkZGl0aW9uYWxDU1MoX19fQ1NTMkpTT05fTE9BREVSX0VYUE9SVF9fXywgXCJDOlxcXFxVc2Vyc1xcXFx0aW1uaVxcXFxDdXJzb3IgUHJvamVjdHNcXFxcRGF5RGF0ZSAyXFxcXGFwcFxcXFxhcHAuY3NzXCIpXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KClcblx0bW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcblx0XHRjb25zdCB7IHJlbW92ZVRhZ2dlZEFkZGl0aW9uYWxDU1MgfSA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblx0XHRyZW1vdmVUYWdnZWRBZGRpdGlvbmFsQ1NTKFwiQzpcXFxcVXNlcnNcXFxcdGltbmlcXFxcQ3Vyc29yIFByb2plY3RzXFxcXERheURhdGUgMlxcXFxhcHBcXFxcYXBwLmNzc1wiKVxuXHR9KVxufSIsImltcG9ydCAqIGFzIEFwcGxpY2F0aW9uIGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS9hcHBsaWNhdGlvbic7XG5cbmRlY2xhcmUgY29uc3QgYW5kcm9pZDogYW55O1xuXG5BcHBsaWNhdGlvbi5ydW4oeyBtb2R1bGVOYW1lOiAnYXBwLXJvb3QnIH0pO1xuXG4vLyBTZXR1cCBBbmRyb2lkLXNwZWNpZmljIFVJIGFmdGVyIHRoZSBhcHAgaXMgbGF1bmNoZWRcbmlmIChBcHBsaWNhdGlvbi5hbmRyb2lkKSB7XG4gICAgQXBwbGljYXRpb24uYW5kcm9pZC5vbignYWN0aXZpdHlDcmVhdGVkJywgKGFyZ3M6IGFueSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWN0aXZpdHkgPSBhcmdzLmFjdGl2aXR5O1xuICAgICAgICAgICAgY29uc3Qgd2luZG93ID0gYWN0aXZpdHkuZ2V0V2luZG93KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEJhc2ljIGZsYWdzIHRoYXQgd29yayBvbiBvbGRlciBBbmRyb2lkIHZlcnNpb25zXG4gICAgICAgICAgICBjb25zdCBWaWV3ID0gYW5kcm9pZC52aWV3LlZpZXc7XG4gICAgICAgICAgICBsZXQgZmxhZ3MgPSBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9TVEFCTEVcbiAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0hJREVfTkFWSUdBVElPTlxuICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfRlVMTFNDUkVFTlxuICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19ISURFX05BVklHQVRJT05cbiAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfRlVMTFNDUkVFTjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gT25seSBhZGQgSU1NRVJTSVZFX1NUSUNLWSBpZiBhdmFpbGFibGUgKEFuZHJvaWQgNC40KylcbiAgICAgICAgICAgIGlmIChhbmRyb2lkLm9zLkJ1aWxkLlZFUlNJT04uU0RLX0lOVCA+PSBhbmRyb2lkLm9zLkJ1aWxkLlZFUlNJT05fQ09ERVMuS0lUS0FUKSB7XG4gICAgICAgICAgICAgICAgZmxhZ3MgfD0gVmlldy5TWVNURU1fVUlfRkxBR19JTU1FUlNJVkVfU1RJQ0tZO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB3aW5kb3cuZ2V0RGVjb3JWaWV3KCkuc2V0U3lzdGVtVWlWaXNpYmlsaXR5KGZsYWdzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gU2V0IHdpbmRvdyBmbGFnc1xuICAgICAgICAgICAgY29uc3QgV2luZG93TWFuYWdlciA9IGFuZHJvaWQudmlldy5XaW5kb3dNYW5hZ2VyO1xuICAgICAgICAgICAgd2luZG93LmFkZEZsYWdzKFdpbmRvd01hbmFnZXIuTGF5b3V0UGFyYW1zLkZMQUdfRlVMTFNDUkVFTik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEFkZCBhIGxpc3RlbmVyIHRvIG1haW50YWluIGZ1bGxzY3JlZW4gd2hlbiBzeXN0ZW0gVUkgdmlzaWJpbGl0eSBjaGFuZ2VzXG4gICAgICAgICAgICBpZiAoYW5kcm9pZC5vcy5CdWlsZC5WRVJTSU9OLlNES19JTlQgPj0gYW5kcm9pZC5vcy5CdWlsZC5WRVJTSU9OX0NPREVTLktJVEtBVCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5nZXREZWNvclZpZXcoKS5zZXRPblN5c3RlbVVpVmlzaWJpbGl0eUNoYW5nZUxpc3RlbmVyKG5ldyBhbmRyb2lkLnZpZXcuVmlldy5PblN5c3RlbVVpVmlzaWJpbGl0eUNoYW5nZUxpc3RlbmVyKHtcbiAgICAgICAgICAgICAgICAgICAgb25TeXN0ZW1VaVZpc2liaWxpdHlDaGFuZ2U6IGZ1bmN0aW9uKHZpc2liaWxpdHk6IG51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmdldERlY29yVmlldygpLnNldFN5c3RlbVVpVmlzaWJpbGl0eShmbGFncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBhY3Rpdml0eUNyZWF0ZWQ6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgQXBwbGljYXRpb24uYW5kcm9pZC5vbignYWN0aXZpdHlSZXN1bWVkJywgKGFyZ3M6IGFueSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWN0aXZpdHkgPSBhcmdzLmFjdGl2aXR5O1xuICAgICAgICAgICAgY29uc3Qgd2luZG93ID0gYWN0aXZpdHkuZ2V0V2luZG93KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IFZpZXcgPSBhbmRyb2lkLnZpZXcuVmlldztcbiAgICAgICAgICAgIGxldCBmbGFncyA9IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX1NUQUJMRVxuICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfSElERV9OQVZJR0FUSU9OXG4gICAgICAgICAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9GVUxMU0NSRUVOXG4gICAgICAgICAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0hJREVfTkFWSUdBVElPTlxuICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19GVUxMU0NSRUVOO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGFuZHJvaWQub3MuQnVpbGQuVkVSU0lPTi5TREtfSU5UID49IGFuZHJvaWQub3MuQnVpbGQuVkVSU0lPTl9DT0RFUy5LSVRLQVQpIHtcbiAgICAgICAgICAgICAgICBmbGFncyB8PSBWaWV3LlNZU1RFTV9VSV9GTEFHX0lNTUVSU0lWRV9TVElDS1k7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdpbmRvdy5nZXREZWNvclZpZXcoKS5zZXRTeXN0ZW1VaVZpc2liaWxpdHkoZmxhZ3MpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gYWN0aXZpdHlSZXN1bWVkOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSIsImltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS9kYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS91aS9wYWdlJztcbmltcG9ydCB7IEZyYW1lIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2ZyYW1lJztcbmltcG9ydCB7IE1haW5WaWV3TW9kZWwgfSBmcm9tICcuL21haW4tdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBTd2lwZUdlc3R1cmVFdmVudERhdGEgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvdWkvZ2VzdHVyZXMnO1xuXG5sZXQgdmlld01vZGVsOiBNYWluVmlld01vZGVsO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBcbiAgICBpZiAoIXZpZXdNb2RlbCkge1xuICAgICAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgbmV3IE1haW5WaWV3TW9kZWwuJyk7XG4gICAgICAgIHZpZXdNb2RlbCA9IG5ldyBNYWluVmlld01vZGVsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgdmlld01vZGVsIGFscmVhZHkgZXhpc3RzLCBlbnN1cmUgc2V0dGluZ3MgYXJlIHJlZnJlc2hlZFxuICAgICAgICBjb25zb2xlLmxvZygnUmV1c2luZyBleGlzdGluZyBNYWluVmlld01vZGVsLiBSZWZyZXNoaW5nIHNldHRpbmdzLicpO1xuICAgICAgICB2aWV3TW9kZWwudXBkYXRlRGF0ZVRpbWUoKTsgLy8gS2VlcCBkYXRlL3RpbWUgZnJlc2hcbiAgICAgICAgdmlld01vZGVsLnVwZGF0ZUZvbnRTZXR0aW5ncygpOyAvLyBSZWZyZXNoIGZvbnQgc2V0dGluZ3NcbiAgICB9XG4gICAgXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZpZXdNb2RlbDtcbiAgICB2aWV3TW9kZWwuaW5pdGlhbGl6ZUNvbnRhaW5lcihwYWdlKTsgLy8gUmUtaW5pdGlhbGl6ZSBjb250YWluZXIgc3BlY2lmaWMgdGhpbmdzIGlmIG5lZWRlZFxuXG4gICAgLy8gQWRkIHN3aXBlIGdlc3R1cmUgKGVuc3VyZSBsaXN0ZW5lciBpcyBub3QgZHVwbGljYXRlZClcbiAgICBwYWdlLm9mZignc3dpcGUnKTsgLy8gUmVtb3ZlIHByZXZpb3VzIGxpc3RlbmVyXG4gICAgcGFnZS5vbignc3dpcGUnLCAoYXJnczogU3dpcGVHZXN0dXJlRXZlbnREYXRhKSA9PiB7XG4gICAgICAgIGlmIChhcmdzLmRpcmVjdGlvbiA9PT0gMSB8fCBhcmdzLmRpcmVjdGlvbiA9PT0gMikgeyAvLyAxID0gcmlnaHQsIDIgPSBsZWZ0XG4gICAgICAgICAgICB2aWV3TW9kZWwub3BlblNldHRpbmdzKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdGcm9tKCkge1xuICAgIC8vIE9wdGlvbmFsOiBDb25zaWRlciBpZiBkaXNwb3NlIGlzIG5lZWRlZCBoZXJlIG9yIGhhbmRsZWQgZWxzZXdoZXJlXG4gICAgLy8gaWYgKHZpZXdNb2RlbCkge1xuICAgIC8vICAgICB2aWV3TW9kZWwuZGlzcG9zZSgpO1xuICAgIC8vIH1cbn1cblxuLyogLy8gUmVtb3ZlIHRoZSBvbk5hdmlnYXRlZFRvIGhhbmRsZXJcbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRlZFRvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGNvbnNvbGUubG9nKCdSZXR1cm5lZCB0byBtYWluIHBhZ2UgKG9uTmF2aWdhdGVkVG8gZXZlbnQpLicpO1xuICAgIGlmICh2aWV3TW9kZWwpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1ZpZXdNb2RlbCBleGlzdHMsIGNhbGxpbmcgdXBkYXRlRm9udFNldHRpbmdzLicpO1xuICAgICAgICAvLyBVcGRhdGUgc2V0dGluZ3Mgd2hlbiByZXR1cm5pbmcgZnJvbSBzZXR0aW5ncyBwYWdlXG4gICAgICAgIHZpZXdNb2RlbC51cGRhdGVEYXRlVGltZSgpO1xuICAgICAgICB2aWV3TW9kZWwudXBkYXRlRm9udFNldHRpbmdzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1ZpZXdNb2RlbCBkb2VzIG5vdCBleGlzdCBvbiByZXR1cm4uJyk7XG4gICAgfVxufVxuKi8iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRpbmdUbz1cXFwibmF2aWdhdGluZ1RvXFxcIiBuYXZpZ2F0aW5nRnJvbT1cXFwibmF2aWdhdGluZ0Zyb21cXFwiIGNsYXNzPVxcXCJiZy1ibGFja1xcXCIgYWN0aW9uQmFySGlkZGVuPVxcXCJ0cnVlXFxcIj5cXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKlxcXCIgY29sdW1ucz1cXFwiKlxcXCIgY2xhc3M9XFxcImJnLWJsYWNrXFxcIj5cXG4gICAgICAgIDxTdGFja0xheW91dCBpZD1cXFwidGV4dENvbnRhaW5lclxcXCIgcm93PVxcXCIwXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHdpZHRoPVxcXCIxMDAlXFxcIiBoZWlnaHQ9XFxcIjEwMCVcXFwiIGNsYXNzPVxcXCJiZy1ibGFja1xcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHdlZWtkYXkgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIFxcbiAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cXFwie3sgZm9udFNpemUgKiAxLjIgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9XFxcInt7IGZvbnRGYW1pbHkgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJ7eyB0ZXh0Q29sb3IgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XFxcIjkwMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg9XFxcInt7IHRleHRTaGlmdFggfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk9XFxcInt7IHRleHRTaGlmdFkgfX1cXFwiLz5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgZGF0ZSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCIgXFxuICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVxcXCJ7eyBmb250U2l6ZSB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgZm9udEZhbWlseT1cXFwie3sgZm9udEZhbWlseSB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgY29sb3I9XFxcInt7IHRleHRDb2xvciB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cXFwiOTAwXFxcIlxcbiAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWD1cXFwie3sgdGV4dFNoaWZ0WCB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWT1cXFwie3sgdGV4dFNoaWZ0WSB9fVxcXCIvPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyB0aW1lIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgZm9udFNpemU9XFxcInt7IGZvbnRTaXplIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5PVxcXCJ7eyBmb250RmFtaWx5IH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwie3sgdGV4dENvbG9yIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVxcXCI0MDBcXFwiXFxuICAgICAgICAgICAgICAgICAgIHRleHRXcmFwPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVYPVxcXCJ7eyB0ZXh0U2hpZnRYIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZPVxcXCJ7eyB0ZXh0U2hpZnRZIH19XFxcIi8+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoKVxuXHQvLyBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge30pXG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSBhcyBPYnNlcnZhYmxlQmFzZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS9kYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgRnJhbWUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvdWkvZnJhbWUnO1xuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlL2FwcGxpY2F0aW9uLXNldHRpbmdzJztcbmltcG9ydCB7IGFuZHJvaWQgYXMgYW5kcm9pZEFwcCB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS9hcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBTY3JlZW4gfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvcGxhdGZvcm0nO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS91aS9wYWdlJztcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvc3RhY2stbGF5b3V0JztcblxuZGVjbGFyZSBjb25zdCBhbmRyb2lkOiBhbnk7XG5cbmV4cG9ydCBjbGFzcyBNYWluVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZUJhc2Uge1xuICAgIHByaXZhdGUgdXBkYXRlSW50ZXJ2YWw6IGFueTtcbiAgICBwcml2YXRlIHNoaWZ0SW50ZXJ2YWw6IGFueTtcbiAgICBwcml2YXRlIGN1cnJlbnRTaGlmdCA9IHsgeDogMCwgeTogMCB9O1xuICAgIHByaXZhdGUgc2NyZWVuV2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIHNjcmVlbkhlaWdodDogbnVtYmVyO1xuICAgIHByaXZhdGUgY29udGFpbmVyV2lkdGg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjb250YWluZXJIZWlnaHQ6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBkZWZhdWx0IHZhbHVlc1xuICAgICAgICB0aGlzLnNldCgnd2Vla2RheScsICcnKTtcbiAgICAgICAgdGhpcy5zZXQoJ2RhdGUnLCAnJyk7XG4gICAgICAgIHRoaXMuc2V0KCd0aW1lJywgJycpO1xuICAgICAgICB0aGlzLnNldCgndGV4dFNoaWZ0WCcsIDApO1xuICAgICAgICB0aGlzLnNldCgndGV4dFNoaWZ0WScsIDApO1xuICAgICAgICBcbiAgICAgICAgLy8gR2V0IHNjcmVlbiBkaW1lbnNpb25zXG4gICAgICAgIHRoaXMuc2NyZWVuV2lkdGggPSBTY3JlZW4ubWFpblNjcmVlbi53aWR0aFBpeGVscztcbiAgICAgICAgdGhpcy5zY3JlZW5IZWlnaHQgPSBTY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRQaXhlbHM7XG4gICAgICAgIFxuICAgICAgICAvLyBMb2FkIGZvbnQgc2V0dGluZ3MgZmlyc3RcbiAgICAgICAgdGhpcy51cGRhdGVGb250U2V0dGluZ3MoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEluaXRpYWwgdXBkYXRlXG4gICAgICAgIHRoaXMudXBkYXRlRGF0ZVRpbWUoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFNldCB1cCBwZXJpb2RpYyB1cGRhdGVzXG4gICAgICAgIHRoaXMudXBkYXRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnVwZGF0ZURhdGVUaW1lKCksIDEwMDApO1xuICAgICAgICBcbiAgICAgICAgLy8gQXBwbHkgc2V0dGluZ3NcbiAgICAgICAgdGhpcy5hcHBseVNldHRpbmdzKCk7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBpbml0aWFsaXplQ29udGFpbmVyKHBhZ2U6IFBhZ2UpIHtcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gcGFnZS5nZXRWaWV3QnlJZCgndGV4dENvbnRhaW5lcicpIGFzIFN0YWNrTGF5b3V0O1xuICAgICAgICBcbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgY29udGFpbmVyLm9uKCdsYXlvdXRDaGFuZ2VkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyV2lkdGggPSBjb250YWluZXIuZ2V0QWN0dWFsU2l6ZSgpLndpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVySGVpZ2h0ID0gY29udGFpbmVyLmdldEFjdHVhbFNpemUoKS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbnRhaW5lciBzaXplIHVwZGF0ZWQ6Jywge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5jb250YWluZXJXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmNvbnRhaW5lckhlaWdodFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIFJlc3RhcnQgdGV4dCBzaGlmdGluZyB3aXRoIG5ldyBib3VuZHNcbiAgICAgICAgICAgICAgICB0aGlzLnNldHVwVGV4dFNoaWZ0aW5nKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gU3RhcnQgdGV4dCBzaGlmdGluZyBpZiBlbmFibGVkXG4gICAgICAgIHRoaXMuc2V0dXBUZXh0U2hpZnRpbmcoKTtcbiAgICB9XG4gICAgXG4gICAgdXBkYXRlRGF0ZVRpbWUoKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCB3ZWVrZGF5cyA9IFsnRG9taW5nbycsICdTZWd1bmRhLWZlaXJhJywgJ1RlcsOnYS1mZWlyYScsICdRdWFydGEtZmVpcmEnLCAnUXVpbnRhLWZlaXJhJywgJ1NleHRhLWZlaXJhJywgJ1PDoWJhZG8nXTtcbiAgICAgICAgY29uc3QgbW9udGhzID0gWydKYW5laXJvJywgJ0ZldmVyZWlybycsICdNYXLDp28nLCAnQWJyaWwnLCAnTWFpbycsICdKdW5obycsICdKdWxobycsICdBZ29zdG8nLCAnU2V0ZW1icm8nLCAnT3V0dWJybycsICdOb3ZlbWJybycsICdEZXplbWJybyddO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgd2Vla2RheSA9IHdlZWtkYXlzW2RhdGUuZ2V0RGF5KCldO1xuICAgICAgICBjb25zdCBtb250aCA9IG1vbnRoc1tkYXRlLmdldE1vbnRoKCldO1xuICAgICAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEZvcm1hdCB0aW1lIHdpdGggbGVhZGluZyB6ZXJvcyAod2l0aG91dCBzZWNvbmRzKVxuICAgICAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNldCgnd2Vla2RheScsIHdlZWtkYXkpO1xuICAgICAgICB0aGlzLnNldCgnZGF0ZScsIGAke2RheX0gZGUgJHttb250aH1gKTtcbiAgICAgICAgdGhpcy5zZXQoJ3RpbWUnLCBgJHtob3Vyc306JHttaW51dGVzfWApO1xuICAgICAgICBcbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBuaWdodCB0aW1lIChiZXR3ZWVuIHN1bnNldCBhbmQgc3VucmlzZSlcbiAgICAgICAgLy8gU2ltcGxlIGFwcHJveGltYXRpb246IE5pZ2h0IGlzIGJldHdlZW4gMTg6MDAgKDYgUE0pIGFuZCA2OjAwICg2IEFNKVxuICAgICAgICBjb25zdCBob3VyID0gZGF0ZS5nZXRIb3VycygpO1xuICAgICAgICBjb25zdCBpc05pZ2h0VGltZSA9IGhvdXIgPj0gMTggfHwgaG91ciA8IDY7XG4gICAgICAgIFxuICAgICAgICBpZiAoYXBwU2V0dGluZ3MuZ2V0Qm9vbGVhbignYXV0b05pZ2h0TW9kZScsIGZhbHNlKSAmJiBpc05pZ2h0VGltZSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ3RleHRDb2xvcicsICcjODA4MDgwJyk7IC8vIERpbW1lZCB0ZXh0IGZvciBuaWdodCBtb2RlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldCgndGV4dENvbG9yJywgJyNGRkZGRkYnKTsgLy8gTm9ybWFsIHdoaXRlIHRleHRcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgdXBkYXRlRm9udFNldHRpbmdzKCkge1xuICAgICAgICBjb25zdCBmb250U2l6ZXMgPSBbMTAwLCAxMTAsIDEyMCwgMTI1LCAxMzBdO1xuICAgICAgICBjb25zdCBmb250U3R5bGVzID0gWydzYW5zLXNlcmlmJywgJ3NlcmlmJywgJ21vbm9zcGFjZSddO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgc2l6ZUluZGV4ID0gYXBwU2V0dGluZ3MuZ2V0TnVtYmVyKCdmb250U2l6ZScsIDApOyAvLyBSZXZlcnQgZGVmYXVsdCBiYWNrIHRvIDBcbiAgICAgICAgY29uc3Qgc3R5bGVJbmRleCA9IGFwcFNldHRpbmdzLmdldE51bWJlcignZm9udFN0eWxlJywgMCk7IC8vIFJldmVydCBkZWZhdWx0IGJhY2sgdG8gMFxuICAgICAgICBcbiAgICAgICAgLy8gRW5zdXJlIHdlIGhhdmUgdmFsaWQgaW5kaWNlc1xuICAgICAgICBjb25zdCBzYWZlU2l6ZUluZGV4ID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgc2l6ZUluZGV4KSwgZm9udFNpemVzLmxlbmd0aCAtIDEpO1xuICAgICAgICBjb25zdCBzYWZlU3R5bGVJbmRleCA9IE1hdGgubWluKE1hdGgubWF4KDAsIHN0eWxlSW5kZXgpLCBmb250U3R5bGVzLmxlbmd0aCAtIDEpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbmV3Rm9udFNpemUgPSBmb250U2l6ZXNbc2FmZVNpemVJbmRleF07XG4gICAgICAgIGNvbnN0IG5ld0ZvbnRGYW1pbHkgPSBmb250U3R5bGVzW3NhZmVTdHlsZUluZGV4XTtcbiAgICAgICAgXG4gICAgICAgIC8vIEZvcmNlIHVwZGF0ZSB0aGUgZm9udCBzaXplIGFuZCBmYW1pbHlcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnZm9udFNpemUnLCBuZXdGb250U2l6ZSk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2ZvbnRGYW1pbHknLCBuZXdGb250RmFtaWx5KTtcbiAgICAgICAgXG4gICAgICAgIC8vIEFsc28gc2V0IHRoZW0gbm9ybWFsbHkgdG8gZW5zdXJlIHRoZXkncmUgdXBkYXRlZFxuICAgICAgICB0aGlzLnNldCgnZm9udFNpemUnLCBuZXdGb250U2l6ZSk7XG4gICAgICAgIHRoaXMuc2V0KCdmb250RmFtaWx5JywgbmV3Rm9udEZhbWlseSk7XG4gICAgICAgIFxuICAgICAgICAvLyBSZXN0YXJ0IHRleHQgc2hpZnRpbmcgaWYgZW5hYmxlZFxuICAgICAgICBpZiAodGhpcy5zaGlmdEludGVydmFsKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuc2hpZnRJbnRlcnZhbCk7XG4gICAgICAgICAgICB0aGlzLnNldHVwVGV4dFNoaWZ0aW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgb3BlblNldHRpbmdzKCkge1xuICAgICAgICBGcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3NldHRpbmdzLXBhZ2UnLFxuICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgYXBwbHlTZXR0aW5ncygpIHtcbiAgICAgICAgaWYgKGFuZHJvaWRBcHApIHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2aXR5ID0gYW5kcm9pZEFwcC5zdGFydEFjdGl2aXR5IHx8IGFuZHJvaWRBcHAuZm9yZWdyb3VuZEFjdGl2aXR5O1xuICAgICAgICAgICAgaWYgKGFjdGl2aXR5KSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2luZG93ID0gYWN0aXZpdHkuZ2V0V2luZG93KCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gQWx3YXlzIGtlZXAgc2NyZWVuIG9uXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEZsYWdzKGFuZHJvaWQudmlldy5XaW5kb3dNYW5hZ2VyLkxheW91dFBhcmFtcy5GTEFHX0tFRVBfU0NSRUVOX09OKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBIaWRlIGFjdGlvbiBiYXJcbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb25CYXIgPSBhY3Rpdml0eS5nZXRBY3Rpb25CYXIoKTtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uQmFyKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbkJhci5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIFNldCBmdWxsc2NyZWVuIGZsYWdzXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEZsYWdzKGFuZHJvaWQudmlldy5XaW5kb3dNYW5hZ2VyLkxheW91dFBhcmFtcy5GTEFHX0ZVTExTQ1JFRU4pO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRGbGFncyhhbmRyb2lkLnZpZXcuV2luZG93TWFuYWdlci5MYXlvdXRQYXJhbXMuRkxBR19MQVlPVVRfTk9fTElNSVRTKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBIaWRlIHN5c3RlbSBVSVxuICAgICAgICAgICAgICAgIGNvbnN0IFZpZXcgPSBhbmRyb2lkLnZpZXcuVmlldztcbiAgICAgICAgICAgICAgICBjb25zdCBmbGFncyA9IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX1NUQUJMRVxuICAgICAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0hJREVfTkFWSUdBVElPTlxuICAgICAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0ZVTExTQ1JFRU5cbiAgICAgICAgICAgICAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0hJREVfTkFWSUdBVElPTlxuICAgICAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfRlVMTFNDUkVFTlxuICAgICAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfSU1NRVJTSVZFX1NUSUNLWTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB3aW5kb3cuZ2V0RGVjb3JWaWV3KCkuc2V0U3lzdGVtVWlWaXNpYmlsaXR5KGZsYWdzKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBTZXQgYmxhY2sgYmFja2dyb3VuZFxuICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRCYWNrZ3JvdW5kRHJhd2FibGUobmV3IGFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuQ29sb3JEcmF3YWJsZShhbmRyb2lkLmdyYXBoaWNzLkNvbG9yLkJMQUNLKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFVwZGF0ZSBmb250IHNldHRpbmdzXG4gICAgICAgIHRoaXMudXBkYXRlRm9udFNldHRpbmdzKCk7XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgc2V0dXBUZXh0U2hpZnRpbmcoKSB7XG4gICAgICAgIGlmIChhcHBTZXR0aW5ncy5nZXRCb29sZWFuKCd0ZXh0U2hpZnRpbmcnLCB0cnVlKSkge1xuICAgICAgICAgICAgY29uc3QgZnJlcXVlbmN5ID0gYXBwU2V0dGluZ3MuZ2V0TnVtYmVyKCdzaGlmdEZyZXF1ZW5jeScsIDYwKSAqIDEwMDA7IC8vIENvbnZlcnQgdG8gbWlsbGlzZWNvbmRzXG4gICAgICAgICAgICBjb25zdCBhbW91bnRYID0gYXBwU2V0dGluZ3MuZ2V0TnVtYmVyKCdzaGlmdEFtb3VudFgnLCAxMCk7XG4gICAgICAgICAgICBjb25zdCBhbW91bnRZID0gYXBwU2V0dGluZ3MuZ2V0TnVtYmVyKCdzaGlmdEFtb3VudFknLCA1KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NldHRpbmcgdXAgdGV4dCBzaGlmdGluZzonLCB7IFxuICAgICAgICAgICAgICAgIGZyZXF1ZW5jeSwgXG4gICAgICAgICAgICAgICAgYW1vdW50WCwgXG4gICAgICAgICAgICAgICAgYW1vdW50WVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENsZWFyIGFueSBleGlzdGluZyBpbnRlcnZhbFxuICAgICAgICAgICAgaWYgKHRoaXMuc2hpZnRJbnRlcnZhbCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zaGlmdEludGVydmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gU2V0IHVwIG5ldyBpbnRlcnZhbFxuICAgICAgICAgICAgdGhpcy5zaGlmdEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSByYW5kb20gcG9zaXRpb24gd2l0aGluIHRoZSBhbGxvd2VkIHNoaWZ0IGFtb3VudHNcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogYW1vdW50WDtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogYW1vdW50WTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2hpZnRpbmcgdGV4dDonLCB7IFxuICAgICAgICAgICAgICAgICAgICB4LCBcbiAgICAgICAgICAgICAgICAgICAgeSxcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50WCxcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50WVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIEFwcGx5IHRoZSBzaGlmdCB2YWx1ZXNcbiAgICAgICAgICAgICAgICB0aGlzLnNldCgndGV4dFNoaWZ0WCcsIHgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KCd0ZXh0U2hpZnRZJywgeSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gTG9nIHRoZSBhY3R1YWwgdmFsdWVzIGJlaW5nIGFwcGxpZWRcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXBwbGllZCBzaGlmdCB2YWx1ZXM6Jywge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0U2hpZnRYOiB0aGlzLmdldCgndGV4dFNoaWZ0WCcpLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0U2hpZnRZOiB0aGlzLmdldCgndGV4dFNoaWZ0WScpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBmcmVxdWVuY3kpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gUmVzZXQgc2hpZnQgdmFsdWVzIHdoZW4gc2hpZnRpbmcgaXMgZGlzYWJsZWRcbiAgICAgICAgICAgIHRoaXMuc2V0KCd0ZXh0U2hpZnRYJywgMCk7XG4gICAgICAgICAgICB0aGlzLnNldCgndGV4dFNoaWZ0WScsIDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnVwZGF0ZUludGVydmFsKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudXBkYXRlSW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNoaWZ0SW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zaGlmdEludGVydmFsKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3BhZ2UnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS91aS9wYWdlJztcbmltcG9ydCB7IFNldHRpbmdzVmlld01vZGVsIH0gZnJvbSAnLi9zZXR0aW5ncy12aWV3LW1vZGVsJztcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBTZXR0aW5nc1ZpZXdNb2RlbCgpO1xufSIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCIgY2xhc3M9XFxcImJnLWJsYWNrXFxcIiBhY3Rpb25CYXJIaWRkZW49XFxcInRydWVcXFwiPlxcbiAgICA8U2Nyb2xsVmlldyBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIGNsYXNzPVxcXCJwLTRcXFwiIHdpZHRoPVxcXCJhdXRvXFxcIj5cXG4gICAgICAgICAgICA8IS0tIEZvbnQgU2V0dGluZ3MgUGFuZWwgLS0+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJtLTEgcC00XFxcIiB3aWR0aD1cXFwiMzAwXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkZvbnQgU2V0dGluZ3NcXFwiIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIHRleHQteGwgbWItNFxcXCIvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkZvbnQgU2l6ZVxcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgbWItMlxcXCIvPlxcbiAgICAgICAgICAgICAgICA8TGlzdFBpY2tlciBpdGVtcz1cXFwie3sgZm9udFNpemVzIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4PVxcXCJ7eyBzZWxlY3RlZEZvbnRTaXplSW5kZXggfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJtYi00IHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgcC0yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cXFwiMTIwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJ3aGl0ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XFxcImJsYWNrXFxcIi8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRm9udCBTdHlsZVxcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgbWItMlxcXCIvPlxcbiAgICAgICAgICAgICAgICA8TGlzdFBpY2tlciBpdGVtcz1cXFwie3sgZm9udFN0eWxlcyB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleD1cXFwie3sgc2VsZWN0ZWRGb250U3R5bGVJbmRleCB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcIm1iLTQgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBwLTJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVxcXCIxMjBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcIndoaXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cXFwiYmxhY2tcXFwiLz5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgIDwhLS0gVGV4dCBQb3NpdGlvbiBTZXR0aW5ncyBQYW5lbCAtLT5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIm0tMSBwLTRcXFwiIHdpZHRoPVxcXCIzMDBcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiVGV4dCBQb3NpdGlvblxcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC14bCBtYi00XFxcIi8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiU2hpZnQgSW50ZXJ2YWxcXFwiIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIG1iLTJcXFwiLz5cXG4gICAgICAgICAgICAgICAgPExpc3RQaWNrZXIgaXRlbXM9XFxcInt7IHNoaWZ0SW50ZXJ2YWxzIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4PVxcXCJ7eyBzZWxlY3RlZFNoaWZ0SW50ZXJ2YWxJbmRleCB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcIm1iLTQgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBwLTJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVxcXCIxMjBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcIndoaXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cXFwiYmxhY2tcXFwiLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJIb3Jpem9udGFsIFNoaWZ0IChwaXhlbHMpXFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSBtYi0yXFxcIi8+XFxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgdGV4dD1cXFwie3sgc2hpZnRBbW91bnRYIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cXFwibnVtYmVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cXFwiRW50ZXIgdmFsdWUgKDEtMTAwKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU9XFxcImRvbmVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibWItNCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIHAtMlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblByZXNzPVxcXCJ7eyBzYXZlU2V0dGluZ3MgfX1cXFwiLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJWZXJ0aWNhbCBTaGlmdCAocGl4ZWxzKVxcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgbWItMlxcXCIvPlxcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHRleHQ9XFxcInt7IHNoaWZ0QW1vdW50WSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU9XFxcIm51bWJlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XFxcIkVudGVyIHZhbHVlICgxLTEwMClcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlPVxcXCJkb25lXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcIm1iLTQgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBwLTJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5QcmVzcz1cXFwie3sgc2F2ZVNldHRpbmdzIH19XFxcIi8+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgICA8IS0tIERpc3BsYXkgU2V0dGluZ3MgUGFuZWwgLS0+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJtLTEgcC00XFxcIiB3aWR0aD1cXFwiMzAwXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkRpc3BsYXkgU2V0dGluZ3NcXFwiIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIHRleHQteGwgbWItNFxcXCIvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIk5pZ2h0IE1vZGUgKFN1bnNldCB0byBEYXduKVxcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgbWItMlxcXCIvPlxcbiAgICAgICAgICAgICAgICA8U3dpdGNoIGNoZWNrZWQ9XFxcInt7IGF1dG9OaWdodE1vZGUgfX1cXFwiIGNsYXNzPVxcXCJtYi00XFxcIi8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8IS0tIFNhdmUgQnV0dG9uIC0tPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIlNhdmUgU2V0dGluZ3NcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgdGFwPVxcXCJ7eyBzYXZlU2V0dGluZ3MgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJnLXdoaXRlIHRleHQtYmxhY2sgbXQtNCBwLTNcXFwiLz5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KClcblx0Ly8gbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHt9KVxufSIsImltcG9ydCB7IE9ic2VydmFibGUgYXMgT2JzZXJ2YWJsZUJhc2UgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IEZyYW1lIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2ZyYW1lJztcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS9hcHBsaWNhdGlvbi1zZXR0aW5ncyc7XG5cbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1ZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGVCYXNlIHtcbiAgICBwcml2YXRlIF9mb250U2l6ZXMgPSBbMTAwLCAxMTAsIDEyMCwgMTI1LCAxMzBdO1xuICAgIHByaXZhdGUgX2ZvbnRTaXplc1RleHQgPSBbJzEwMHB4JywgJzExMHB4JywgJzEyMHB4JywgJzEyNXB4JywgJzEzMHB4J107XG4gICAgcHJpdmF0ZSBfZm9udFN0eWxlcyA9IFsnc2Fucy1zZXJpZicsICdzZXJpZicsICdtb25vc3BhY2UnXTtcbiAgICBwcml2YXRlIF9zaGlmdEludGVydmFscyA9IFsnMyBzZWd1bmRvcycsICcxIG1pbnV0bycsICc1IG1pbnV0b3MnLCAnMTAgbWludXRvcyddO1xuICAgIHByaXZhdGUgX3NoaWZ0SW50ZXJ2YWxWYWx1ZXMgPSBbMywgNjAsIDMwMCwgNjAwXTsgLy8gVmFsdWVzIGluIHNlY29uZHNcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFNldCBvYnNlcnZhYmxlIHByb3BlcnRpZXNcbiAgICAgICAgdGhpcy5zZXQoJ2ZvbnRTaXplcycsIHRoaXMuX2ZvbnRTaXplc1RleHQpO1xuICAgICAgICB0aGlzLnNldCgnZm9udFN0eWxlcycsIHRoaXMuX2ZvbnRTdHlsZXMpO1xuICAgICAgICB0aGlzLnNldCgnc2hpZnRJbnRlcnZhbHMnLCB0aGlzLl9zaGlmdEludGVydmFscyk7XG4gICAgICAgIFxuICAgICAgICAvLyBMb2FkIHNhdmVkIHNldHRpbmdzXG4gICAgICAgIHRoaXMubG9hZFNldHRpbmdzKCk7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBsb2FkU2V0dGluZ3MoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2FkaW5nIHNldHRpbmdzLi4uJyk7XG4gICAgICAgIFxuICAgICAgICAvLyBMb2FkIGZvbnQgc2V0dGluZ3NcbiAgICAgICAgY29uc3Qgc2F2ZWRGb250U2l6ZSA9IGFwcFNldHRpbmdzLmdldE51bWJlcignZm9udFNpemUnLCAwKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0xvYWRpbmcgZm9udCBzaXplOicsIHtcbiAgICAgICAgICAgIHNhdmVkSW5kZXg6IHNhdmVkRm9udFNpemUsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5fZm9udFNpemVzW3NhdmVkRm9udFNpemVdLFxuICAgICAgICAgICAgdGV4dDogdGhpcy5fZm9udFNpemVzVGV4dFtzYXZlZEZvbnRTaXplXVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIEVuc3VyZSB3ZSBoYXZlIHZhbGlkIGluZGljZXNcbiAgICAgICAgY29uc3Qgc2FmZUZvbnRTaXplSW5kZXggPSBNYXRoLm1pbihNYXRoLm1heCgwLCBzYXZlZEZvbnRTaXplKSwgdGhpcy5fZm9udFNpemVzLmxlbmd0aCAtIDEpO1xuICAgICAgICB0aGlzLnNldCgnc2VsZWN0ZWRGb250U2l6ZUluZGV4Jywgc2FmZUZvbnRTaXplSW5kZXgpO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgc2F2ZWRGb250U3R5bGUgPSBhcHBTZXR0aW5ncy5nZXROdW1iZXIoJ2ZvbnRTdHlsZScsIDApO1xuICAgICAgICBjb25zdCBzYWZlRm9udFN0eWxlSW5kZXggPSBNYXRoLm1pbihNYXRoLm1heCgwLCBzYXZlZEZvbnRTdHlsZSksIHRoaXMuX2ZvbnRTdHlsZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgIHRoaXMuc2V0KCdzZWxlY3RlZEZvbnRTdHlsZUluZGV4Jywgc2FmZUZvbnRTdHlsZUluZGV4KTtcbiAgICAgICAgXG4gICAgICAgIC8vIExvYWQgbmlnaHQgbW9kZSBzZXR0aW5nXG4gICAgICAgIHRoaXMuc2V0KCdhdXRvTmlnaHRNb2RlJywgYXBwU2V0dGluZ3MuZ2V0Qm9vbGVhbignYXV0b05pZ2h0TW9kZScsIGZhbHNlKSk7XG4gICAgICAgIFxuICAgICAgICAvLyBMb2FkIHRleHQgc2hpZnRpbmcgc2V0dGluZ3NcbiAgICAgICAgdGhpcy5zZXQoJ3RleHRTaGlmdGluZycsIGFwcFNldHRpbmdzLmdldEJvb2xlYW4oJ3RleHRTaGlmdGluZycsIHRydWUpKTtcbiAgICAgICAgdGhpcy5zZXQoJ3NlbGVjdGVkU2hpZnRJbnRlcnZhbEluZGV4JywgYXBwU2V0dGluZ3MuZ2V0TnVtYmVyKCdzaGlmdEludGVydmFsSW5kZXgnLCAxKSk7XG4gICAgICAgIHRoaXMuc2V0KCdzaGlmdEFtb3VudFgnLCBhcHBTZXR0aW5ncy5nZXROdW1iZXIoJ3NoaWZ0QW1vdW50WCcsIDEwKSk7XG4gICAgICAgIHRoaXMuc2V0KCdzaGlmdEFtb3VudFknLCBhcHBTZXR0aW5ncy5nZXROdW1iZXIoJ3NoaWZ0QW1vdW50WScsIDUpKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdTZXR0aW5ncyBsb2FkZWQ6Jywge1xuICAgICAgICAgICAgZm9udFNpemU6IHtcbiAgICAgICAgICAgICAgICBpbmRleDogc2FmZUZvbnRTaXplSW5kZXgsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuX2ZvbnRTaXplc1tzYWZlRm9udFNpemVJbmRleF0sXG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5fZm9udFNpemVzVGV4dFtzYWZlRm9udFNpemVJbmRleF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb250U3R5bGU6IHtcbiAgICAgICAgICAgICAgICBpbmRleDogc2FmZUZvbnRTdHlsZUluZGV4LFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLl9mb250U3R5bGVzW3NhZmVGb250U3R5bGVJbmRleF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdXRvTmlnaHRNb2RlOiB0aGlzLmdldCgnYXV0b05pZ2h0TW9kZScpLFxuICAgICAgICAgICAgdGV4dFNoaWZ0aW5nOiB0aGlzLmdldCgndGV4dFNoaWZ0aW5nJyksXG4gICAgICAgICAgICBzaGlmdEludGVydmFsOiB7XG4gICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuZ2V0KCdzZWxlY3RlZFNoaWZ0SW50ZXJ2YWxJbmRleCcpLFxuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuX3NoaWZ0SW50ZXJ2YWxzW3RoaXMuZ2V0KCdzZWxlY3RlZFNoaWZ0SW50ZXJ2YWxJbmRleCcpXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNoaWZ0QW1vdW50WDogdGhpcy5nZXQoJ3NoaWZ0QW1vdW50WCcpLFxuICAgICAgICAgICAgc2hpZnRBbW91bnRZOiB0aGlzLmdldCgnc2hpZnRBbW91bnRZJylcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNhdmVTZXR0aW5ncygpIHtcbiAgICAgICAgLy8gU2F2ZSBmb250IHNldHRpbmdzXG4gICAgICAgIGNvbnN0IGZvbnRTaXplSW5kZXggPSB0aGlzLmdldCgnc2VsZWN0ZWRGb250U2l6ZUluZGV4Jyk7XG4gICAgICAgIGNvbnN0IHNhZmVGb250U2l6ZUluZGV4ID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgZm9udFNpemVJbmRleCksIHRoaXMuX2ZvbnRTaXplcy5sZW5ndGggLSAxKTtcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0TnVtYmVyKCdmb250U2l6ZScsIHNhZmVGb250U2l6ZUluZGV4KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZvbnRTdHlsZUluZGV4ID0gdGhpcy5nZXQoJ3NlbGVjdGVkRm9udFN0eWxlSW5kZXgnKTtcbiAgICAgICAgY29uc3Qgc2FmZUZvbnRTdHlsZUluZGV4ID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgZm9udFN0eWxlSW5kZXgpLCB0aGlzLl9mb250U3R5bGVzLmxlbmd0aCAtIDEpO1xuICAgICAgICBhcHBTZXR0aW5ncy5zZXROdW1iZXIoJ2ZvbnRTdHlsZScsIHNhZmVGb250U3R5bGVJbmRleCk7XG4gICAgICAgIFxuICAgICAgICAvLyBTYXZlIG5pZ2h0IG1vZGUgc2V0dGluZ1xuICAgICAgICBjb25zdCBhdXRvTmlnaHRNb2RlID0gdGhpcy5nZXQoJ2F1dG9OaWdodE1vZGUnKTtcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0Qm9vbGVhbignYXV0b05pZ2h0TW9kZScsIGF1dG9OaWdodE1vZGUpO1xuICAgICAgICBcbiAgICAgICAgLy8gU2F2ZSB0ZXh0IHNoaWZ0aW5nIHNldHRpbmdzXG4gICAgICAgIGNvbnN0IHRleHRTaGlmdGluZyA9IHRoaXMuZ2V0KCd0ZXh0U2hpZnRpbmcnKTtcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0Qm9vbGVhbigndGV4dFNoaWZ0aW5nJywgdGV4dFNoaWZ0aW5nKTtcblxuICAgICAgICBjb25zdCBpbnRlcnZhbEluZGV4ID0gdGhpcy5nZXQoJ3NlbGVjdGVkU2hpZnRJbnRlcnZhbEluZGV4Jyk7XG4gICAgICAgIGNvbnN0IHNhZmVJbnRlcnZhbEluZGV4ID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgaW50ZXJ2YWxJbmRleCksIHRoaXMuX3NoaWZ0SW50ZXJ2YWxWYWx1ZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgIGFwcFNldHRpbmdzLnNldE51bWJlcignc2hpZnRJbnRlcnZhbEluZGV4Jywgc2FmZUludGVydmFsSW5kZXgpO1xuICAgICAgICBhcHBTZXR0aW5ncy5zZXROdW1iZXIoJ3NoaWZ0RnJlcXVlbmN5JywgdGhpcy5fc2hpZnRJbnRlcnZhbFZhbHVlc1tzYWZlSW50ZXJ2YWxJbmRleF0pO1xuXG4gICAgICAgIGNvbnN0IHNoaWZ0QW1vdW50WCA9IHBhcnNlSW50KHRoaXMuZ2V0KCdzaGlmdEFtb3VudFgnKSwgMTApO1xuICAgICAgICBjb25zdCB2YWxpZFNoaWZ0QW1vdW50WCA9IGlzTmFOKHNoaWZ0QW1vdW50WCkgPyAxMCA6IE1hdGgubWF4KDEsIE1hdGgubWluKDEwMCwgc2hpZnRBbW91bnRYKSk7XG4gICAgICAgIGFwcFNldHRpbmdzLnNldE51bWJlcignc2hpZnRBbW91bnRYJywgdmFsaWRTaGlmdEFtb3VudFgpO1xuXG4gICAgICAgIGNvbnN0IHNoaWZ0QW1vdW50WSA9IHBhcnNlSW50KHRoaXMuZ2V0KCdzaGlmdEFtb3VudFknKSwgMTApO1xuICAgICAgICBjb25zdCB2YWxpZFNoaWZ0QW1vdW50WSA9IGlzTmFOKHNoaWZ0QW1vdW50WSkgPyA1IDogTWF0aC5tYXgoMSwgTWF0aC5taW4oMTAwLCBzaGlmdEFtb3VudFkpKTtcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0TnVtYmVyKCdzaGlmdEFtb3VudFknLCB2YWxpZFNoaWZ0QW1vdW50WSk7XG5cbiAgICAgICAgLy8gTmF2aWdhdGUgYmFjayB0byBtYWluIHBhZ2VcbiAgICAgICAgRnJhbWUudG9wbW9zdCgpLmdvQmFjaygpO1xuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ+L3BhY2thZ2UuanNvblwiKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=