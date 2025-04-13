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

const ___CSS2JSON_LOADER_EXPORT___ = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":["*","::before","::after"],"declarations":[{"type":"declaration","property":"--tw-border-spacing-x","value":"0"},{"type":"declaration","property":"--tw-border-spacing-y","value":"0"},{"type":"declaration","property":"--tw-translate-x","value":"0"},{"type":"declaration","property":"--tw-translate-y","value":"0"},{"type":"declaration","property":"--tw-rotate","value":"0"},{"type":"declaration","property":"--tw-skew-x","value":"0"},{"type":"declaration","property":"--tw-skew-y","value":"0"},{"type":"declaration","property":"--tw-scale-x","value":"1"},{"type":"declaration","property":"--tw-scale-y","value":"1"},{"type":"declaration","property":"--tw-pan-x","value":""},{"type":"declaration","property":"--tw-pan-y","value":""},{"type":"declaration","property":"--tw-pinch-zoom","value":""},{"type":"declaration","property":"--tw-scroll-snap-strictness","value":"proximity"},{"type":"declaration","property":"--tw-gradient-from-position","value":""},{"type":"declaration","property":"--tw-gradient-via-position","value":""},{"type":"declaration","property":"--tw-gradient-to-position","value":""},{"type":"declaration","property":"--tw-blur","value":""},{"type":"declaration","property":"--tw-brightness","value":""},{"type":"declaration","property":"--tw-contrast","value":""},{"type":"declaration","property":"--tw-grayscale","value":""},{"type":"declaration","property":"--tw-hue-rotate","value":""},{"type":"declaration","property":"--tw-invert","value":""},{"type":"declaration","property":"--tw-saturate","value":""},{"type":"declaration","property":"--tw-sepia","value":""},{"type":"declaration","property":"--tw-drop-shadow","value":""},{"type":"declaration","property":"--tw-backdrop-blur","value":""},{"type":"declaration","property":"--tw-backdrop-brightness","value":""},{"type":"declaration","property":"--tw-backdrop-contrast","value":""},{"type":"declaration","property":"--tw-backdrop-grayscale","value":""},{"type":"declaration","property":"--tw-backdrop-hue-rotate","value":""},{"type":"declaration","property":"--tw-backdrop-invert","value":""},{"type":"declaration","property":"--tw-backdrop-opacity","value":""},{"type":"declaration","property":"--tw-backdrop-saturate","value":""},{"type":"declaration","property":"--tw-backdrop-sepia","value":""},{"type":"declaration","property":"--tw-contain-size","value":""},{"type":"declaration","property":"--tw-contain-layout","value":""},{"type":"declaration","property":"--tw-contain-paint","value":""},{"type":"declaration","property":"--tw-contain-style","value":""}]},{"type":"rule","selectors":["::backdrop"],"declarations":[{"type":"declaration","property":"--tw-border-spacing-x","value":"0"},{"type":"declaration","property":"--tw-border-spacing-y","value":"0"},{"type":"declaration","property":"--tw-translate-x","value":"0"},{"type":"declaration","property":"--tw-translate-y","value":"0"},{"type":"declaration","property":"--tw-rotate","value":"0"},{"type":"declaration","property":"--tw-skew-x","value":"0"},{"type":"declaration","property":"--tw-skew-y","value":"0"},{"type":"declaration","property":"--tw-scale-x","value":"1"},{"type":"declaration","property":"--tw-scale-y","value":"1"},{"type":"declaration","property":"--tw-pan-x","value":""},{"type":"declaration","property":"--tw-pan-y","value":""},{"type":"declaration","property":"--tw-pinch-zoom","value":""},{"type":"declaration","property":"--tw-scroll-snap-strictness","value":"proximity"},{"type":"declaration","property":"--tw-gradient-from-position","value":""},{"type":"declaration","property":"--tw-gradient-via-position","value":""},{"type":"declaration","property":"--tw-gradient-to-position","value":""},{"type":"declaration","property":"--tw-blur","value":""},{"type":"declaration","property":"--tw-brightness","value":""},{"type":"declaration","property":"--tw-contrast","value":""},{"type":"declaration","property":"--tw-grayscale","value":""},{"type":"declaration","property":"--tw-hue-rotate","value":""},{"type":"declaration","property":"--tw-invert","value":""},{"type":"declaration","property":"--tw-saturate","value":""},{"type":"declaration","property":"--tw-sepia","value":""},{"type":"declaration","property":"--tw-drop-shadow","value":""},{"type":"declaration","property":"--tw-backdrop-blur","value":""},{"type":"declaration","property":"--tw-backdrop-brightness","value":""},{"type":"declaration","property":"--tw-backdrop-contrast","value":""},{"type":"declaration","property":"--tw-backdrop-grayscale","value":""},{"type":"declaration","property":"--tw-backdrop-hue-rotate","value":""},{"type":"declaration","property":"--tw-backdrop-invert","value":""},{"type":"declaration","property":"--tw-backdrop-opacity","value":""},{"type":"declaration","property":"--tw-backdrop-saturate","value":""},{"type":"declaration","property":"--tw-backdrop-sepia","value":""},{"type":"declaration","property":"--tw-contain-size","value":""},{"type":"declaration","property":"--tw-contain-layout","value":""},{"type":"declaration","property":"--tw-contain-paint","value":""},{"type":"declaration","property":"--tw-contain-style","value":""}]},{"type":"rule","selectors":[".container"],"declarations":[{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".m-4"],"declarations":[{"type":"declaration","property":"margin","value":"16"}]},{"type":"rule","selectors":[".mb-2"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"8"}]},{"type":"rule","selectors":[".mb-4"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"16"}]},{"type":"rule","selectors":[".mt-4"],"declarations":[{"type":"declaration","property":"margin-top","value":"16"}]},{"type":"rule","selectors":[".bg-black"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(0 0 0 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-white"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(255 255 255 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".p-2"],"declarations":[{"type":"declaration","property":"padding","value":"8"}]},{"type":"rule","selectors":[".p-3"],"declarations":[{"type":"declaration","property":"padding","value":"12"}]},{"type":"rule","selectors":[".p-4"],"declarations":[{"type":"declaration","property":"padding","value":"16"}]},{"type":"rule","selectors":[".text-center"],"declarations":[{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":[".text-xl"],"declarations":[{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"line-height","value":"28"}]},{"type":"rule","selectors":[".text-black"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(0 0 0 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-white"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(255 255 255 / var(--tw-text-opacity, 1))"}]},{"type":"comment","comment":" General styles "},{"type":"rule","selectors":[".bg-black"],"declarations":[{"type":"declaration","property":"background-color","value":"black"}]},{"type":"rule","selectors":["TimePicker"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#333333"},{"type":"declaration","property":"padding","value":"12"},{"type":"declaration","property":"font-size","value":"18"}]},{"type":"rule","selectors":["TimePicker[platform=android]"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#333333"}]}],"parsingErrors":[]}}
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
        const fontSizes = [100, 110, 120, 130];
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"onNavigatingTo\" class=\"bg-black\" actionBarHidden=\"true\">\n    <ScrollView orientation=\"horizontal\">\n        <StackLayout orientation=\"horizontal\" class=\"p-4\" width=\"auto\">\n            <!-- Font Settings Panel -->\n            <StackLayout class=\"m-4 p-4\" width=\"300\">\n                <Label text=\"Font Settings\" class=\"text-white text-xl mb-4\"/>\n                \n                <Label text=\"Font Size\" class=\"text-white mb-2\"/>\n                <ListPicker items=\"{{ fontSizes }}\" \n                           selectedIndex=\"{{ selectedFontSizeIndex }}\" \n                           class=\"mb-4 text-white text-center p-2\"\n                           height=\"120\"\n                           color=\"white\"\n                           backgroundColor=\"black\"/>\n                \n                <Label text=\"Font Style\" class=\"text-white mb-2\"/>\n                <ListPicker items=\"{{ fontStyles }}\" \n                           selectedIndex=\"{{ selectedFontStyleIndex }}\" \n                           class=\"mb-4 text-white text-center p-2\"\n                           height=\"120\"\n                           color=\"white\"\n                           backgroundColor=\"black\"/>\n            </StackLayout>\n\n            <!-- Text Position Settings Panel -->\n            <StackLayout class=\"m-4 p-4\" width=\"300\">\n                <Label text=\"Text Position\" class=\"text-white text-xl mb-4\"/>\n                \n                <Label text=\"Shift Interval\" class=\"text-white mb-2\"/>\n                <ListPicker items=\"{{ shiftIntervals }}\" \n                           selectedIndex=\"{{ selectedShiftIntervalIndex }}\" \n                           class=\"mb-4 text-white text-center p-2\"\n                           height=\"120\"\n                           color=\"white\"\n                           backgroundColor=\"black\"/>\n                \n                <Label text=\"Horizontal Shift (pixels)\" class=\"text-white mb-2\"/>\n                <TextField text=\"{{ shiftAmountX }}\" \n                          keyboardType=\"number\"\n                          hint=\"Enter value (1-100)\"\n                          returnKeyType=\"done\"\n                          class=\"mb-4 text-white text-center p-2\"\n                          returnPress=\"{{ saveSettings }}\"/>\n                \n                <Label text=\"Vertical Shift (pixels)\" class=\"text-white mb-2\"/>\n                <TextField text=\"{{ shiftAmountY }}\" \n                          keyboardType=\"number\"\n                          hint=\"Enter value (1-100)\"\n                          returnKeyType=\"done\"\n                          class=\"mb-4 text-white text-center p-2\"\n                          returnPress=\"{{ saveSettings }}\"/>\n            </StackLayout>\n\n            <!-- Display Settings Panel -->\n            <StackLayout class=\"m-4 p-4\" width=\"300\">\n                <Label text=\"Display Settings\" class=\"text-white text-xl mb-4\"/>\n                \n                <Label text=\"Night Mode (Sunset to Dawn)\" class=\"text-white mb-2\"/>\n                <Switch checked=\"{{ autoNightMode }}\" class=\"mb-4\"/>\n                \n                <!-- Save Button -->\n                <Button text=\"Save Settings\" \n                       tap=\"{{ saveSettings }}\" \n                       class=\"bg-white text-black mt-4 p-3\"/>\n            </StackLayout>\n        </StackLayout>\n    </ScrollView>\n</Page>"
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
        this._fontSizes = [100, 110, 120, 130];
        this._fontSizesText = ['100px', '110px', '120px', '130px'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0EsaUVBQWUsaUNBQWlDO0FBQ2hELEdBQUcsSUFBVTtBQUNiLENBQUMsaUJBQWlCO0FBQ2xCLCtCQUErQjtBQUMvQjs7Ozs7Ozs7Ozs7O0FDUEE7O0FBRUEsc0NBQXNDLGtDQUFrQyxVQUFVLHNFQUFzRSxvRUFBb0UsRUFBRSxvRUFBb0UsRUFBRSwrREFBK0QsRUFBRSwrREFBK0QsRUFBRSwwREFBMEQsRUFBRSwwREFBMEQsRUFBRSwwREFBMEQsRUFBRSwyREFBMkQsRUFBRSwyREFBMkQsRUFBRSx3REFBd0QsRUFBRSx3REFBd0QsRUFBRSw2REFBNkQsRUFBRSxrRkFBa0YsRUFBRSx5RUFBeUUsRUFBRSx3RUFBd0UsRUFBRSx1RUFBdUUsRUFBRSx1REFBdUQsRUFBRSw2REFBNkQsRUFBRSwyREFBMkQsRUFBRSw0REFBNEQsRUFBRSw2REFBNkQsRUFBRSx5REFBeUQsRUFBRSwyREFBMkQsRUFBRSx3REFBd0QsRUFBRSw4REFBOEQsRUFBRSxnRUFBZ0UsRUFBRSxzRUFBc0UsRUFBRSxvRUFBb0UsRUFBRSxxRUFBcUUsRUFBRSxzRUFBc0UsRUFBRSxrRUFBa0UsRUFBRSxtRUFBbUUsRUFBRSxvRUFBb0UsRUFBRSxpRUFBaUUsRUFBRSwrREFBK0QsRUFBRSxpRUFBaUUsRUFBRSxnRUFBZ0UsRUFBRSxnRUFBZ0UsRUFBRSxFQUFFLDBEQUEwRCxvRUFBb0UsRUFBRSxvRUFBb0UsRUFBRSwrREFBK0QsRUFBRSwrREFBK0QsRUFBRSwwREFBMEQsRUFBRSwwREFBMEQsRUFBRSwwREFBMEQsRUFBRSwyREFBMkQsRUFBRSwyREFBMkQsRUFBRSx3REFBd0QsRUFBRSx3REFBd0QsRUFBRSw2REFBNkQsRUFBRSxrRkFBa0YsRUFBRSx5RUFBeUUsRUFBRSx3RUFBd0UsRUFBRSx1RUFBdUUsRUFBRSx1REFBdUQsRUFBRSw2REFBNkQsRUFBRSwyREFBMkQsRUFBRSw0REFBNEQsRUFBRSw2REFBNkQsRUFBRSx5REFBeUQsRUFBRSwyREFBMkQsRUFBRSx3REFBd0QsRUFBRSw4REFBOEQsRUFBRSxnRUFBZ0UsRUFBRSxzRUFBc0UsRUFBRSxvRUFBb0UsRUFBRSxxRUFBcUUsRUFBRSxzRUFBc0UsRUFBRSxrRUFBa0UsRUFBRSxtRUFBbUUsRUFBRSxvRUFBb0UsRUFBRSxpRUFBaUUsRUFBRSwrREFBK0QsRUFBRSxpRUFBaUUsRUFBRSxnRUFBZ0UsRUFBRSxnRUFBZ0UsRUFBRSxFQUFFLDBEQUEwRCx1REFBdUQsRUFBRSxFQUFFLG9EQUFvRCxzREFBc0QsRUFBRSxFQUFFLHFEQUFxRCw0REFBNEQsRUFBRSxFQUFFLHFEQUFxRCw2REFBNkQsRUFBRSxFQUFFLHFEQUFxRCwwREFBMEQsRUFBRSxFQUFFLHlEQUF5RCw4REFBOEQsRUFBRSxrR0FBa0csRUFBRSxFQUFFLHlEQUF5RCw4REFBOEQsRUFBRSx3R0FBd0csRUFBRSxFQUFFLG9EQUFvRCxzREFBc0QsRUFBRSxFQUFFLG9EQUFvRCx1REFBdUQsRUFBRSxFQUFFLG9EQUFvRCx1REFBdUQsRUFBRSxFQUFFLDREQUE0RCw4REFBOEQsRUFBRSxFQUFFLHdEQUF3RCx5REFBeUQsRUFBRSwyREFBMkQsRUFBRSxFQUFFLDJEQUEyRCxnRUFBZ0UsRUFBRSx5RkFBeUYsRUFBRSxFQUFFLDJEQUEyRCxnRUFBZ0UsRUFBRSwrRkFBK0YsRUFBRSxFQUFFLDhDQUE4QyxFQUFFLHlEQUF5RCxtRUFBbUUsRUFBRSxFQUFFLDBEQUEwRCx3REFBd0QsRUFBRSxxRUFBcUUsRUFBRSx1REFBdUQsRUFBRSx5REFBeUQsRUFBRSxFQUFFLDRFQUE0RSx3REFBd0QsRUFBRSxxRUFBcUUsRUFBRTtBQUMzelAsaUVBQWUsNEJBQTRCO0FBQzNDLFFBQVEseUJBQXlCLEVBQUUsbUJBQU8sQ0FBQyw2REFBMkM7QUFDdEY7QUFDQSxHQUFHLElBQVU7QUFDYixDQUFDLGlCQUFpQjtBQUNsQixDQUFDLFVBQVU7QUFDWCxVQUFVLDRCQUE0QixFQUFFLG1CQUFPLENBQUMsNkRBQTJDO0FBQzNGO0FBQ0EsRUFBRTtBQUNGOzs7Ozs7Ozs7OztBQ1pBLE9BQU8sS0FBSyxXQUFXO0FBSUw7QUFFb0M7QUFDdEQsK0RBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN0QixXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQVMsRUFBRTt1RUFDN0M7dUVBQ0ssR0FBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0I7WUFFQTtZQUNBLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQy9CLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyw0QkFBNEI7a0JBQ3ZDLElBQUksQ0FBQztrQkFDTCxJQUFJLENBQUMsZ0NBQWdDO2tCQUNyQyxJQUFJLENBQUMsOEJBQThCO2tCQUNuQyxJQUFJLENBQUMseUJBQXlCLENBQUM7WUFFckM7WUFDQSxJQUFJLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPO2dCQUNoQyxLQUFLLElBQUksSUFBSSxDQUFDLCtCQUErQixDQUFDO1lBQ2xELENBQUM7WUFFRCxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDO1lBRWxEO1lBQ0EsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDakQsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUVoQjtZQUNBLElBQUksT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnQkFDckQsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLHFDQUFxQyxDQUFDLElBQUk7b0JBQzVELDBCQUEwQixFQUFFLFVBQVMsVUFBa0I7d0JBQ25ELE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdkQsQ0FBQztpQkFDSixDQUFDLENBQUMsQ0FBQztZQUNSLENBQUM7UUFDTCxDQUFDO1FBQUM7O1FBRUYsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUg7O3VFQUVjLEdBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9CO1lBRUEsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDL0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO2tCQUNYLElBQUksQ0FBQztrQkFDTCxJQUFJLENBQUMsZ0NBQWdDO2tCQUNyQyxJQUFJLENBQUMsOEJBQThCO2tCQUNuQyxJQUFJLENBQUMseUJBQXlCLENBQUM7WUFFckMsSUFBSSxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJO2dCQUNwQyxLQUFLLElBQUksSUFBSSxDQUFDO1lBQ2xCLENBQUM7WUFFRCxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDO1FBQ3RELENBQUM7UUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDOztRQUVqQixDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RpRDtBQUdsRCxJQUFJLFNBQXdCLENBQUM7QUFFdEIsU0FBUyxZQUFZLENBQUMsSUFBZTtJQUN4QyxNQUFNLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRS9CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUMzQyxTQUFTLEdBQUcsSUFBSSwyREFBYSxFQUFFLENBQUM7SUFDcEMsQ0FBQztTQUFNLENBQUM7UUFDSiw2REFBNkQ7UUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO1FBQ3BFLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLHVCQUF1QjtRQUNuRCxTQUFTLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLHdCQUF3QjtJQUM1RCxDQUFDO0lBRUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7SUFDaEMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsb0RBQW9EO0lBRXpGLHdEQUF3RDtJQUN4RCxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsMkJBQTJCO0lBQzlDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBMkIsRUFBRSxFQUFFO1FBQzdDLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLHNCQUFzQjtZQUN0RSxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0IsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVNLFNBQVMsY0FBYztJQUMxQixvRUFBb0U7SUFDcEUsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixJQUFJO0FBQ1IsQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7RUFZRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRGO0FBQ0EsZ2RBQWdkLFVBQVUsaUZBQWlGLGlCQUFpQix1Q0FBdUMsYUFBYSxrQ0FBa0MsWUFBWSxvSEFBb0gsYUFBYSx1Q0FBdUMsYUFBYSxtQ0FBbUMsT0FBTyxpRkFBaUYsV0FBVyx1Q0FBdUMsYUFBYSxrQ0FBa0MsWUFBWSxvSEFBb0gsYUFBYSx1Q0FBdUMsYUFBYSxtQ0FBbUMsT0FBTyxpRkFBaUYsV0FBVyx1Q0FBdUMsYUFBYSxrQ0FBa0MsWUFBWSxvSEFBb0gsYUFBYSx1Q0FBdUMsYUFBYTtBQUM3b0QsaUVBQWUsaUNBQWlDO0FBQ2hELEdBQUcsSUFBVTtBQUNiLENBQUMsaUJBQWlCO0FBQ2xCLCtCQUErQjtBQUMvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQa0Y7QUFDOUI7QUFDbUI7QUFDQTtBQUNsQjtBQU05QyxNQUFNLGFBQWMsU0FBUSwwRUFBYztJQVU3QztRQUNJLEtBQUssRUFBRSxDQUFDO1FBUkosaUJBQVksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBRzlCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLG9CQUFlLEdBQVcsQ0FBQyxDQUFDO1FBTWhDLDRCQUE0QjtRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUxQix3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRywrREFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRywrREFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFFbkQsMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRTFCLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdEIsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVyRSxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxtQkFBbUIsQ0FBQyxJQUFVO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFnQixDQUFDO1FBRW5FLElBQUksU0FBUyxFQUFFLENBQUM7WUFDWixTQUFTLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssQ0FBQztnQkFDdEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDO2dCQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFO29CQUNuQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWM7b0JBQzFCLE1BQU0sRUFBRSxJQUFJLENBQUMsZUFBZTtpQkFDL0IsQ0FBQyxDQUFDO2dCQUNILHdDQUF3QztnQkFDeEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxjQUFjO1FBQ1YsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN4QixNQUFNLFFBQVEsR0FBRyxDQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3RILE1BQU0sTUFBTSxHQUFHLENBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUU3SSxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDeEMsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUUzQixtREFBbUQ7UUFDbkQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLE9BQU8sS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssSUFBSSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBRXhDLHdEQUF3RDtRQUN4RCxzRUFBc0U7UUFDdEUsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdCLE1BQU0sV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztRQUUzQyxJQUFJLCtFQUFzQixDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQztZQUNoRSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLDZCQUE2QjtRQUNuRSxDQUFDO2FBQU0sQ0FBQztZQUNKLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CO1FBQzFELENBQUM7SUFDTCxDQUFDO0lBRU0sa0JBQWtCO1FBQ3JCLE1BQU0sU0FBUyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdkMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRXhELE1BQU0sU0FBUyxHQUFHLDhFQUFxQixDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLDJCQUEyQjtRQUNuRixNQUFNLFVBQVUsR0FBRyw4RUFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQywyQkFBMkI7UUFFckYsK0JBQStCO1FBQy9CLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEVBQUUsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3RSxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFaEYsTUFBTSxXQUFXLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzdDLE1BQU0sYUFBYSxHQUFHLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVqRCx3Q0FBd0M7UUFDeEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRXZELG1EQUFtRDtRQUNuRCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQztRQUV0QyxtQ0FBbUM7UUFDbkMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM3QixDQUFDO0lBQ0wsQ0FBQztJQUVELFlBQVk7UUFDUiw4REFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNyQixVQUFVLEVBQUUsZUFBZTtZQUMzQixRQUFRLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sYUFBYTtRQUNqQixJQUFJLG1FQUFVLEVBQUUsQ0FBQztZQUNiLE1BQU0sUUFBUSxHQUFHLG1FQUFVLENBQUMsYUFBYSxJQUFJLG1FQUFVLENBQUMsa0JBQWtCLENBQUM7WUFDM0UsSUFBSSxRQUFRLEVBQUUsQ0FBQztnQkFDWCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBRXBDLHdCQUF3QjtnQkFDeEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFFN0Usa0JBQWtCO2dCQUNsQixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQzFDLElBQUksU0FBUyxFQUFFLENBQUM7b0JBQ1osU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNyQixDQUFDO2dCQUVELHVCQUF1QjtnQkFDdkIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ3pFLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBRS9FLGlCQUFpQjtnQkFDakIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQy9CLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyw0QkFBNEI7c0JBQ3pDLElBQUksQ0FBQyxxQ0FBcUM7c0JBQzFDLElBQUksQ0FBQyxnQ0FBZ0M7c0JBQ3JDLElBQUksQ0FBQyw4QkFBOEI7c0JBQ25DLElBQUksQ0FBQyx5QkFBeUI7c0JBQzlCLElBQUksQ0FBQywrQkFBK0IsQ0FBQztnQkFFM0MsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUVuRCx1QkFBdUI7Z0JBQ3ZCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzVHLENBQUM7UUFDTCxDQUFDO1FBRUQsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTyxpQkFBaUI7UUFDckIsSUFBSSwrRUFBc0IsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUMvQyxNQUFNLFNBQVMsR0FBRyw4RUFBcUIsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQywwQkFBMEI7WUFDaEcsTUFBTSxPQUFPLEdBQUcsOEVBQXFCLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzFELE1BQU0sT0FBTyxHQUFHLDhFQUFxQixDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUV6RCxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFO2dCQUNyQyxTQUFTO2dCQUNULE9BQU87Z0JBQ1AsT0FBTzthQUNWLENBQUMsQ0FBQztZQUVILDhCQUE4QjtZQUM5QixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDckIsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN0QyxDQUFDO1lBRUQsc0JBQXNCO1lBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtnQkFDbEMsNkRBQTZEO2dCQUM3RCxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUM7Z0JBQzFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQztnQkFFMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDMUIsQ0FBQztvQkFDRCxDQUFDO29CQUNELE9BQU87b0JBQ1AsT0FBTztpQkFDVixDQUFDLENBQUM7Z0JBRUgseUJBQXlCO2dCQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBRTFCLHNDQUFzQztnQkFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRTtvQkFDakMsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDO29CQUNsQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7aUJBQ3JDLENBQUMsQ0FBQztZQUNQLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNsQixDQUFDO2FBQU0sQ0FBQztZQUNKLCtDQUErQztZQUMvQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5QixDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU87UUFDSCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN0QixhQUFhLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7SUFDTCxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pPeUQ7QUFFbkQsU0FBUyxjQUFjLENBQUMsSUFBbUI7SUFDOUMsTUFBTSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksbUVBQWlCLEVBQUUsQ0FBQztBQUNsRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNORDtBQUNBLHFtQkFBcW1CLFlBQVksbURBQW1ELHdCQUF3QiwyVkFBMlYsYUFBYSxtREFBbUQseUJBQXlCLDhqQkFBOGpCLGlCQUFpQixtREFBbUQsNkJBQTZCLHdXQUF3VyxlQUFlLGtSQUFrUixlQUFlLGtKQUFrSixlQUFlLGtSQUFrUixlQUFlLGtYQUFrWCxnQkFBZ0IsOEpBQThKLGVBQWU7QUFDeDVHLGlFQUFlLGlDQUFpQztBQUNoRCxHQUFHLElBQVU7QUFDYixDQUFDLGlCQUFpQjtBQUNsQiwrQkFBK0I7QUFDL0I7Ozs7Ozs7Ozs7Ozs7OztBQ1BrRjtBQUM5QjtBQUNtQjtBQUVoRSxNQUFNLGlCQUFrQixTQUFRLDBFQUFjO0lBT2pEO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFQSixlQUFVLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNsQyxtQkFBYyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEQsZ0JBQVcsR0FBRyxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDbkQsb0JBQWUsR0FBRyxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3hFLHlCQUFvQixHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7UUFLbEUsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFakQsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU0sWUFBWTtRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUVuQyxxQkFBcUI7UUFDckIsTUFBTSxhQUFhLEdBQUcsOEVBQXFCLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUU7WUFDOUIsVUFBVSxFQUFFLGFBQWE7WUFDekIsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1lBQ3JDLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQztTQUMzQyxDQUFDLENBQUM7UUFFSCwrQkFBK0I7UUFDL0IsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUVyRCxNQUFNLGNBQWMsR0FBRyw4RUFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0QsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUV2RCwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsK0VBQXNCLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFMUUsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLCtFQUFzQixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsOEVBQXFCLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RixJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSw4RUFBcUIsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSw4RUFBcUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVuRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFO1lBQzVCLFFBQVEsRUFBRTtnQkFDTixLQUFLLEVBQUUsaUJBQWlCO2dCQUN4QixLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDekMsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUM7YUFDL0M7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFLGtCQUFrQjtnQkFDekIsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUM7YUFDOUM7WUFDRCxhQUFhLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUM7WUFDeEMsWUFBWSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO1lBQ3RDLGFBQWEsRUFBRTtnQkFDWCxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQztnQkFDN0MsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO2FBQ3JFO1lBQ0QsWUFBWSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO1lBQ3RDLFlBQVksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztTQUN6QyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sWUFBWTtRQUNmLHFCQUFxQjtRQUNyQixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDeEQsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzNGLDhFQUFxQixDQUFDLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBRXJELE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUMxRCxNQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUYsOEVBQXFCLENBQUMsV0FBVyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFdkQsMEJBQTBCO1FBQzFCLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDaEQsK0VBQXNCLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRXZELDhCQUE4QjtRQUM5QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzlDLCtFQUFzQixDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUVyRCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDN0QsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckcsOEVBQXFCLENBQUMsb0JBQW9CLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUMvRCw4RUFBcUIsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBRXRGLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVELE1BQU0saUJBQWlCLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDOUYsOEVBQXFCLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFFekQsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUQsTUFBTSxpQkFBaUIsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUM3Riw4RUFBcUIsQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUV6RCw2QkFBNkI7UUFDN0IsOERBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM3QixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUMxR0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXRlZGF5LWFwcC8uL2FwcC8gc3luYyBcXC4oeG1sJTdDanMlN0MoIiwid2VicGFjazovL2RhdGVkYXktYXBwLy4vYXBwL2FwcC1yb290LnhtbCIsIndlYnBhY2s6Ly9kYXRlZGF5LWFwcC8uL2FwcC9hcHAuY3NzIiwid2VicGFjazovL2RhdGVkYXktYXBwLy4vYXBwL2FwcC50cyIsIndlYnBhY2s6Ly9kYXRlZGF5LWFwcC8uL2FwcC9tYWluLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vZGF0ZWRheS1hcHAvLi9hcHAvbWFpbi1wYWdlLnhtbCIsIndlYnBhY2s6Ly9kYXRlZGF5LWFwcC8uL2FwcC9tYWluLXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vZGF0ZWRheS1hcHAvLi9hcHAvc2V0dGluZ3MtcGFnZS50cyIsIndlYnBhY2s6Ly9kYXRlZGF5LWFwcC8uL2FwcC9zZXR0aW5ncy1wYWdlLnhtbCIsIndlYnBhY2s6Ly9kYXRlZGF5LWFwcC8uL2FwcC9zZXR0aW5ncy12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL2RhdGVkYXktYXBwL2V4dGVybmFsIGNvbW1vbmpzIFwifi9wYWNrYWdlLmpzb25cIiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLXJvb3QueG1sXCI6IFwiLi9hcHAvYXBwLXJvb3QueG1sXCIsXG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAvYXBwLmNzc1wiLFxuXHRcIi4vYXBwLnRzXCI6IFwiLi9hcHAvYXBwLnRzXCIsXG5cdFwiLi9tYWluLXBhZ2UudHNcIjogXCIuL2FwcC9tYWluLXBhZ2UudHNcIixcblx0XCIuL21haW4tcGFnZS54bWxcIjogXCIuL2FwcC9tYWluLXBhZ2UueG1sXCIsXG5cdFwiLi9tYWluLXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC9tYWluLXZpZXctbW9kZWwudHNcIixcblx0XCIuL3NldHRpbmdzLXBhZ2UudHNcIjogXCIuL2FwcC9zZXR0aW5ncy1wYWdlLnRzXCIsXG5cdFwiLi9zZXR0aW5ncy1wYWdlLnhtbFwiOiBcIi4vYXBwL3NldHRpbmdzLXBhZ2UueG1sXCIsXG5cdFwiLi9zZXR0aW5ncy12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvc2V0dGluZ3Mtdmlldy1tb2RlbC50c1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2FwcCBzeW5jIHJlY3Vyc2l2ZSBcXFxcLih4bWwlN0NqcyU3Qyg/PCUyMVxcXFwuZFxcXFwuKXRzJTdDcz9jc3MpJFwiOyIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPEZyYW1lIGRlZmF1bHRQYWdlPVxcXCJtYWluLXBhZ2VcXFwiIGFjdGlvbkJhckhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxuPC9GcmFtZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KClcblx0Ly8gbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHt9KVxufSIsIi8qIENTUzJKU09OICovXG5cbmNvbnN0IF9fX0NTUzJKU09OX0xPQURFUl9FWFBPUlRfX18gPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiKlwiLFwiOjpiZWZvcmVcIixcIjo6YWZ0ZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJvcmRlci1zcGFjaW5nLXhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ib3JkZXItc3BhY2luZy15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdHJhbnNsYXRlLXhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10cmFuc2xhdGUteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXJvdGF0ZVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNrZXcteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNrZXcteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjYWxlLXhcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zY2FsZS15XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGFuLXhcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBhbi15XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1waW5jaC16b29tXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzXCIsXCJ2YWx1ZVwiOlwicHJveGltaXR5XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ibHVyXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1icmlnaHRuZXNzXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250cmFzdFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JheXNjYWxlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1odWUtcm90YXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1pbnZlcnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNhdHVyYXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zZXBpYVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZHJvcC1zaGFkb3dcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWJsdXJcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWJyaWdodG5lc3NcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWNvbnRyYXN0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1ncmF5c2NhbGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWludmVydFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atb3BhY2l0eVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atc2F0dXJhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLXNlcGlhXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLXNpemVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tbGF5b3V0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLXBhaW50XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLXN0eWxlXCIsXCJ2YWx1ZVwiOlwiXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiOjpiYWNrZHJvcFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYm9yZGVyLXNwYWNpbmcteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJvcmRlci1zcGFjaW5nLXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10cmFuc2xhdGUteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRyYW5zbGF0ZS15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcm90YXRlXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2tldy14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2tldy15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2NhbGUteFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjYWxlLXlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1wYW4teFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGFuLXlcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBpbmNoLXpvb21cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3NcIixcInZhbHVlXCI6XCJwcm94aW1pdHlcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJsdXJcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJyaWdodG5lc3NcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRyYXN0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmF5c2NhbGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWh1ZS1yb3RhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWludmVydFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2F0dXJhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNlcGlhXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1kcm9wLXNoYWRvd1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtYmx1clwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzc1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtY29udHJhc3RcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWdyYXlzY2FsZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtaW52ZXJ0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1zYXR1cmF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atc2VwaWFcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tc2l6ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1sYXlvdXRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tcGFpbnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tc3R5bGVcIixcInZhbHVlXCI6XCJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuY29udGFpbmVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIxMDAlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm1iLTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tYi00XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm10LTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYmctYmxhY2tcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJnLW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYigwIDAgMCAvIHZhcigtLXR3LWJnLW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy13aGl0ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmctb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDI1NSAyNTUgMjU1IC8gdmFyKC0tdHctYmctb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtM1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIxMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1jZW50ZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQteGxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImxpbmUtaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1ibGFja1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdGV4dC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDAgMCAwIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC13aGl0ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdGV4dC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDI1NSAyNTUgMjU1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgR2VuZXJhbCBzdHlsZXMgXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1ibGFja1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJibGFja1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlRpbWVQaWNrZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzMzMzMzNcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMTJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlRpbWVQaWNrZXJbcGxhdGZvcm09YW5kcm9pZF1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzMzMzMzNcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fVxuZXhwb3J0IGRlZmF1bHQgX19fQ1NTMkpTT05fTE9BREVSX0VYUE9SVF9fX1xuY29uc3QgeyBhZGRUYWdnZWRBZGRpdGlvbmFsQ1NTIH0gPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5hZGRUYWdnZWRBZGRpdGlvbmFsQ1NTKF9fX0NTUzJKU09OX0xPQURFUl9FWFBPUlRfX18sIFwiQzpcXFxcVXNlcnNcXFxcdGltbmlcXFxcQ3Vyc29yIFByb2plY3RzXFxcXERheURhdGUgMlxcXFxhcHBcXFxcYXBwLmNzc1wiKVxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdCgpXG5cdG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG5cdFx0Y29uc3QgeyByZW1vdmVUYWdnZWRBZGRpdGlvbmFsQ1NTIH0gPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cdFx0cmVtb3ZlVGFnZ2VkQWRkaXRpb25hbENTUyhcIkM6XFxcXFVzZXJzXFxcXHRpbW5pXFxcXEN1cnNvciBQcm9qZWN0c1xcXFxEYXlEYXRlIDJcXFxcYXBwXFxcXGFwcC5jc3NcIilcblx0fSlcbn0iLCJpbXBvcnQgKiBhcyBBcHBsaWNhdGlvbiBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvYXBwbGljYXRpb24nO1xuXG5kZWNsYXJlIGNvbnN0IGFuZHJvaWQ6IGFueTtcblxuQXBwbGljYXRpb24ucnVuKHsgbW9kdWxlTmFtZTogJ2FwcC1yb290JyB9KTtcblxuLy8gU2V0dXAgQW5kcm9pZC1zcGVjaWZpYyBVSSBhZnRlciB0aGUgYXBwIGlzIGxhdW5jaGVkXG5pZiAoQXBwbGljYXRpb24uYW5kcm9pZCkge1xuICAgIEFwcGxpY2F0aW9uLmFuZHJvaWQub24oJ2FjdGl2aXR5Q3JlYXRlZCcsIChhcmdzOiBhbnkpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2aXR5ID0gYXJncy5hY3Rpdml0eTtcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvdyA9IGFjdGl2aXR5LmdldFdpbmRvdygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBCYXNpYyBmbGFncyB0aGF0IHdvcmsgb24gb2xkZXIgQW5kcm9pZCB2ZXJzaW9uc1xuICAgICAgICAgICAgY29uc3QgVmlldyA9IGFuZHJvaWQudmlldy5WaWV3O1xuICAgICAgICAgICAgbGV0IGZsYWdzID0gVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfU1RBQkxFXG4gICAgICAgICAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9ISURFX05BVklHQVRJT05cbiAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0ZVTExTQ1JFRU5cbiAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfSElERV9OQVZJR0FUSU9OXG4gICAgICAgICAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0ZVTExTQ1JFRU47XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIE9ubHkgYWRkIElNTUVSU0lWRV9TVElDS1kgaWYgYXZhaWxhYmxlIChBbmRyb2lkIDQuNCspXG4gICAgICAgICAgICBpZiAoYW5kcm9pZC5vcy5CdWlsZC5WRVJTSU9OLlNES19JTlQgPj0gYW5kcm9pZC5vcy5CdWlsZC5WRVJTSU9OX0NPREVTLktJVEtBVCkge1xuICAgICAgICAgICAgICAgIGZsYWdzIHw9IFZpZXcuU1lTVEVNX1VJX0ZMQUdfSU1NRVJTSVZFX1NUSUNLWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2luZG93LmdldERlY29yVmlldygpLnNldFN5c3RlbVVpVmlzaWJpbGl0eShmbGFncyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFNldCB3aW5kb3cgZmxhZ3NcbiAgICAgICAgICAgIGNvbnN0IFdpbmRvd01hbmFnZXIgPSBhbmRyb2lkLnZpZXcuV2luZG93TWFuYWdlcjtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRGbGFncyhXaW5kb3dNYW5hZ2VyLkxheW91dFBhcmFtcy5GTEFHX0ZVTExTQ1JFRU4pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBBZGQgYSBsaXN0ZW5lciB0byBtYWludGFpbiBmdWxsc2NyZWVuIHdoZW4gc3lzdGVtIFVJIHZpc2liaWxpdHkgY2hhbmdlc1xuICAgICAgICAgICAgaWYgKGFuZHJvaWQub3MuQnVpbGQuVkVSU0lPTi5TREtfSU5UID49IGFuZHJvaWQub3MuQnVpbGQuVkVSU0lPTl9DT0RFUy5LSVRLQVQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuZ2V0RGVjb3JWaWV3KCkuc2V0T25TeXN0ZW1VaVZpc2liaWxpdHlDaGFuZ2VMaXN0ZW5lcihuZXcgYW5kcm9pZC52aWV3LlZpZXcuT25TeXN0ZW1VaVZpc2liaWxpdHlDaGFuZ2VMaXN0ZW5lcih7XG4gICAgICAgICAgICAgICAgICAgIG9uU3lzdGVtVWlWaXNpYmlsaXR5Q2hhbmdlOiBmdW5jdGlvbih2aXNpYmlsaXR5OiBudW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5nZXREZWNvclZpZXcoKS5zZXRTeXN0ZW1VaVZpc2liaWxpdHkoZmxhZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gYWN0aXZpdHlDcmVhdGVkOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIEFwcGxpY2F0aW9uLmFuZHJvaWQub24oJ2FjdGl2aXR5UmVzdW1lZCcsIChhcmdzOiBhbnkpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2aXR5ID0gYXJncy5hY3Rpdml0eTtcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvdyA9IGFjdGl2aXR5LmdldFdpbmRvdygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBWaWV3ID0gYW5kcm9pZC52aWV3LlZpZXc7XG4gICAgICAgICAgICBsZXQgZmxhZ3MgPSBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9TVEFCTEVcbiAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0hJREVfTkFWSUdBVElPTlxuICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfRlVMTFNDUkVFTlxuICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19ISURFX05BVklHQVRJT05cbiAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfRlVMTFNDUkVFTjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChhbmRyb2lkLm9zLkJ1aWxkLlZFUlNJT04uU0RLX0lOVCA+PSBhbmRyb2lkLm9zLkJ1aWxkLlZFUlNJT05fQ09ERVMuS0lUS0FUKSB7XG4gICAgICAgICAgICAgICAgZmxhZ3MgfD0gVmlldy5TWVNURU1fVUlfRkxBR19JTU1FUlNJVkVfU1RJQ0tZO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB3aW5kb3cuZ2V0RGVjb3JWaWV3KCkuc2V0U3lzdGVtVWlWaXNpYmlsaXR5KGZsYWdzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGFjdGl2aXR5UmVzdW1lZDonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9KTtcbn0iLCJpbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcGFnZSc7XG5pbXBvcnQgeyBGcmFtZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS91aS9mcmFtZSc7XG5pbXBvcnQgeyBNYWluVmlld01vZGVsIH0gZnJvbSAnLi9tYWluLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgU3dpcGVHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2dlc3R1cmVzJztcblxubGV0IHZpZXdNb2RlbDogTWFpblZpZXdNb2RlbDtcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgXG4gICAgaWYgKCF2aWV3TW9kZWwpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIG5ldyBNYWluVmlld01vZGVsLicpO1xuICAgICAgICB2aWV3TW9kZWwgPSBuZXcgTWFpblZpZXdNb2RlbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHZpZXdNb2RlbCBhbHJlYWR5IGV4aXN0cywgZW5zdXJlIHNldHRpbmdzIGFyZSByZWZyZXNoZWRcbiAgICAgICAgY29uc29sZS5sb2coJ1JldXNpbmcgZXhpc3RpbmcgTWFpblZpZXdNb2RlbC4gUmVmcmVzaGluZyBzZXR0aW5ncy4nKTtcbiAgICAgICAgdmlld01vZGVsLnVwZGF0ZURhdGVUaW1lKCk7IC8vIEtlZXAgZGF0ZS90aW1lIGZyZXNoXG4gICAgICAgIHZpZXdNb2RlbC51cGRhdGVGb250U2V0dGluZ3MoKTsgLy8gUmVmcmVzaCBmb250IHNldHRpbmdzXG4gICAgfVxuICAgIFxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2aWV3TW9kZWw7XG4gICAgdmlld01vZGVsLmluaXRpYWxpemVDb250YWluZXIocGFnZSk7IC8vIFJlLWluaXRpYWxpemUgY29udGFpbmVyIHNwZWNpZmljIHRoaW5ncyBpZiBuZWVkZWRcblxuICAgIC8vIEFkZCBzd2lwZSBnZXN0dXJlIChlbnN1cmUgbGlzdGVuZXIgaXMgbm90IGR1cGxpY2F0ZWQpXG4gICAgcGFnZS5vZmYoJ3N3aXBlJyk7IC8vIFJlbW92ZSBwcmV2aW91cyBsaXN0ZW5lclxuICAgIHBhZ2Uub24oJ3N3aXBlJywgKGFyZ3M6IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSkgPT4ge1xuICAgICAgICBpZiAoYXJncy5kaXJlY3Rpb24gPT09IDEgfHwgYXJncy5kaXJlY3Rpb24gPT09IDIpIHsgLy8gMSA9IHJpZ2h0LCAyID0gbGVmdFxuICAgICAgICAgICAgdmlld01vZGVsLm9wZW5TZXR0aW5ncygpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nRnJvbSgpIHtcbiAgICAvLyBPcHRpb25hbDogQ29uc2lkZXIgaWYgZGlzcG9zZSBpcyBuZWVkZWQgaGVyZSBvciBoYW5kbGVkIGVsc2V3aGVyZVxuICAgIC8vIGlmICh2aWV3TW9kZWwpIHtcbiAgICAvLyAgICAgdmlld01vZGVsLmRpc3Bvc2UoKTtcbiAgICAvLyB9XG59XG5cbi8qIC8vIFJlbW92ZSB0aGUgb25OYXZpZ2F0ZWRUbyBoYW5kbGVyXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0ZWRUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBjb25zb2xlLmxvZygnUmV0dXJuZWQgdG8gbWFpbiBwYWdlIChvbk5hdmlnYXRlZFRvIGV2ZW50KS4nKTtcbiAgICBpZiAodmlld01vZGVsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdWaWV3TW9kZWwgZXhpc3RzLCBjYWxsaW5nIHVwZGF0ZUZvbnRTZXR0aW5ncy4nKTtcbiAgICAgICAgLy8gVXBkYXRlIHNldHRpbmdzIHdoZW4gcmV0dXJuaW5nIGZyb20gc2V0dGluZ3MgcGFnZVxuICAgICAgICB2aWV3TW9kZWwudXBkYXRlRGF0ZVRpbWUoKTtcbiAgICAgICAgdmlld01vZGVsLnVwZGF0ZUZvbnRTZXR0aW5ncygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdWaWV3TW9kZWwgZG9lcyBub3QgZXhpc3Qgb24gcmV0dXJuLicpO1xuICAgIH1cbn1cbiovIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8UGFnZSB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0aW5nVG89XFxcIm5hdmlnYXRpbmdUb1xcXCIgbmF2aWdhdGluZ0Zyb209XFxcIm5hdmlnYXRpbmdGcm9tXFxcIiBjbGFzcz1cXFwiYmctYmxhY2tcXFwiIGFjdGlvbkJhckhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxuICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIipcXFwiIGNvbHVtbnM9XFxcIipcXFwiIGNsYXNzPVxcXCJiZy1ibGFja1xcXCI+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgaWQ9XFxcInRleHRDb250YWluZXJcXFwiIHJvdz1cXFwiMFxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiB3aWR0aD1cXFwiMTAwJVxcXCIgaGVpZ2h0PVxcXCIxMDAlXFxcIiBjbGFzcz1cXFwiYmctYmxhY2tcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyB3ZWVrZGF5IH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgZm9udFNpemU9XFxcInt7IGZvbnRTaXplICogMS4yIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5PVxcXCJ7eyBmb250RmFtaWx5IH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwie3sgdGV4dENvbG9yIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVxcXCI5MDBcXFwiXFxuICAgICAgICAgICAgICAgICAgIHRleHRXcmFwPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVYPVxcXCJ7eyB0ZXh0U2hpZnRYIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZPVxcXCJ7eyB0ZXh0U2hpZnRZIH19XFxcIi8+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGRhdGUgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIFxcbiAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cXFwie3sgZm9udFNpemUgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9XFxcInt7IGZvbnRGYW1pbHkgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJ7eyB0ZXh0Q29sb3IgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XFxcIjkwMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg9XFxcInt7IHRleHRTaGlmdFggfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk9XFxcInt7IHRleHRTaGlmdFkgfX1cXFwiLz5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgdGltZSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCIgXFxuICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVxcXCJ7eyBmb250U2l6ZSB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgZm9udEZhbWlseT1cXFwie3sgZm9udEZhbWlseSB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgY29sb3I9XFxcInt7IHRleHRDb2xvciB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cXFwiNDAwXFxcIlxcbiAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWD1cXFwie3sgdGV4dFNoaWZ0WCB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWT1cXFwie3sgdGV4dFNoaWZ0WSB9fVxcXCIvPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KClcblx0Ly8gbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHt9KVxufSIsImltcG9ydCB7IE9ic2VydmFibGUgYXMgT2JzZXJ2YWJsZUJhc2UgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IEZyYW1lIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2ZyYW1lJztcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS9hcHBsaWNhdGlvbi1zZXR0aW5ncyc7XG5pbXBvcnQgeyBhbmRyb2lkIGFzIGFuZHJvaWRBcHAgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlL3BsYXRmb3JtJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcGFnZSc7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XG5cbmRlY2xhcmUgY29uc3QgYW5kcm9pZDogYW55O1xuXG5leHBvcnQgY2xhc3MgTWFpblZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGVCYXNlIHtcbiAgICBwcml2YXRlIHVwZGF0ZUludGVydmFsOiBhbnk7XG4gICAgcHJpdmF0ZSBzaGlmdEludGVydmFsOiBhbnk7XG4gICAgcHJpdmF0ZSBjdXJyZW50U2hpZnQgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICBwcml2YXRlIHNjcmVlbldpZHRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBzY3JlZW5IZWlnaHQ6IG51bWJlcjtcbiAgICBwcml2YXRlIGNvbnRhaW5lcldpZHRoOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY29udGFpbmVySGVpZ2h0OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcGFnZTogUGFnZTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEluaXRpYWxpemUgZGVmYXVsdCB2YWx1ZXNcbiAgICAgICAgdGhpcy5zZXQoJ3dlZWtkYXknLCAnJyk7XG4gICAgICAgIHRoaXMuc2V0KCdkYXRlJywgJycpO1xuICAgICAgICB0aGlzLnNldCgndGltZScsICcnKTtcbiAgICAgICAgdGhpcy5zZXQoJ3RleHRTaGlmdFgnLCAwKTtcbiAgICAgICAgdGhpcy5zZXQoJ3RleHRTaGlmdFknLCAwKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEdldCBzY3JlZW4gZGltZW5zaW9uc1xuICAgICAgICB0aGlzLnNjcmVlbldpZHRoID0gU2NyZWVuLm1haW5TY3JlZW4ud2lkdGhQaXhlbHM7XG4gICAgICAgIHRoaXMuc2NyZWVuSGVpZ2h0ID0gU2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0UGl4ZWxzO1xuICAgICAgICBcbiAgICAgICAgLy8gTG9hZCBmb250IHNldHRpbmdzIGZpcnN0XG4gICAgICAgIHRoaXMudXBkYXRlRm9udFNldHRpbmdzKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBJbml0aWFsIHVwZGF0ZVxuICAgICAgICB0aGlzLnVwZGF0ZURhdGVUaW1lKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBTZXQgdXAgcGVyaW9kaWMgdXBkYXRlc1xuICAgICAgICB0aGlzLnVwZGF0ZUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy51cGRhdGVEYXRlVGltZSgpLCAxMDAwKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEFwcGx5IHNldHRpbmdzXG4gICAgICAgIHRoaXMuYXBwbHlTZXR0aW5ncygpO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZUNvbnRhaW5lcihwYWdlOiBQYWdlKSB7XG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ3RleHRDb250YWluZXInKSBhcyBTdGFja0xheW91dDtcbiAgICAgICAgXG4gICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5vbignbGF5b3V0Q2hhbmdlZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lcldpZHRoID0gY29udGFpbmVyLmdldEFjdHVhbFNpemUoKS53aWR0aDtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lckhlaWdodCA9IGNvbnRhaW5lci5nZXRBY3R1YWxTaXplKCkuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb250YWluZXIgc2l6ZSB1cGRhdGVkOicsIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuY29udGFpbmVyV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5jb250YWluZXJIZWlnaHRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBSZXN0YXJ0IHRleHQgc2hpZnRpbmcgd2l0aCBuZXcgYm91bmRzXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR1cFRleHRTaGlmdGluZygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFN0YXJ0IHRleHQgc2hpZnRpbmcgaWYgZW5hYmxlZFxuICAgICAgICB0aGlzLnNldHVwVGV4dFNoaWZ0aW5nKCk7XG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZURhdGVUaW1lKCkge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3Qgd2Vla2RheXMgPSBbJ0RvbWluZ28nLCAnU2VndW5kYS1mZWlyYScsICdUZXLDp2EtZmVpcmEnLCAnUXVhcnRhLWZlaXJhJywgJ1F1aW50YS1mZWlyYScsICdTZXh0YS1mZWlyYScsICdTw6FiYWRvJ107XG4gICAgICAgIGNvbnN0IG1vbnRocyA9IFsnSmFuZWlybycsICdGZXZlcmVpcm8nLCAnTWFyw6dvJywgJ0FicmlsJywgJ01haW8nLCAnSnVuaG8nLCAnSnVsaG8nLCAnQWdvc3RvJywgJ1NldGVtYnJvJywgJ091dHVicm8nLCAnTm92ZW1icm8nLCAnRGV6ZW1icm8nXTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHdlZWtkYXkgPSB3ZWVrZGF5c1tkYXRlLmdldERheSgpXTtcbiAgICAgICAgY29uc3QgbW9udGggPSBtb250aHNbZGF0ZS5nZXRNb250aCgpXTtcbiAgICAgICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBGb3JtYXQgdGltZSB3aXRoIGxlYWRpbmcgemVyb3MgKHdpdGhvdXQgc2Vjb25kcylcbiAgICAgICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZXQoJ3dlZWtkYXknLCB3ZWVrZGF5KTtcbiAgICAgICAgdGhpcy5zZXQoJ2RhdGUnLCBgJHtkYXl9IGRlICR7bW9udGh9YCk7XG4gICAgICAgIHRoaXMuc2V0KCd0aW1lJywgYCR7aG91cnN9OiR7bWludXRlc31gKTtcbiAgICAgICAgXG4gICAgICAgIC8vIENoZWNrIGlmIGl0J3MgbmlnaHQgdGltZSAoYmV0d2VlbiBzdW5zZXQgYW5kIHN1bnJpc2UpXG4gICAgICAgIC8vIFNpbXBsZSBhcHByb3hpbWF0aW9uOiBOaWdodCBpcyBiZXR3ZWVuIDE4OjAwICg2IFBNKSBhbmQgNjowMCAoNiBBTSlcbiAgICAgICAgY29uc3QgaG91ciA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICAgICAgY29uc3QgaXNOaWdodFRpbWUgPSBob3VyID49IDE4IHx8IGhvdXIgPCA2O1xuICAgICAgICBcbiAgICAgICAgaWYgKGFwcFNldHRpbmdzLmdldEJvb2xlYW4oJ2F1dG9OaWdodE1vZGUnLCBmYWxzZSkgJiYgaXNOaWdodFRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KCd0ZXh0Q29sb3InLCAnIzgwODA4MCcpOyAvLyBEaW1tZWQgdGV4dCBmb3IgbmlnaHQgbW9kZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ3RleHRDb2xvcicsICcjRkZGRkZGJyk7IC8vIE5vcm1hbCB3aGl0ZSB0ZXh0XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHVibGljIHVwZGF0ZUZvbnRTZXR0aW5ncygpIHtcbiAgICAgICAgY29uc3QgZm9udFNpemVzID0gWzEwMCwgMTEwLCAxMjAsIDEzMF07XG4gICAgICAgIGNvbnN0IGZvbnRTdHlsZXMgPSBbJ3NhbnMtc2VyaWYnLCAnc2VyaWYnLCAnbW9ub3NwYWNlJ107XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzaXplSW5kZXggPSBhcHBTZXR0aW5ncy5nZXROdW1iZXIoJ2ZvbnRTaXplJywgMCk7IC8vIFJldmVydCBkZWZhdWx0IGJhY2sgdG8gMFxuICAgICAgICBjb25zdCBzdHlsZUluZGV4ID0gYXBwU2V0dGluZ3MuZ2V0TnVtYmVyKCdmb250U3R5bGUnLCAwKTsgLy8gUmV2ZXJ0IGRlZmF1bHQgYmFjayB0byAwXG4gICAgICAgIFxuICAgICAgICAvLyBFbnN1cmUgd2UgaGF2ZSB2YWxpZCBpbmRpY2VzXG4gICAgICAgIGNvbnN0IHNhZmVTaXplSW5kZXggPSBNYXRoLm1pbihNYXRoLm1heCgwLCBzaXplSW5kZXgpLCBmb250U2l6ZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgIGNvbnN0IHNhZmVTdHlsZUluZGV4ID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgc3R5bGVJbmRleCksIGZvbnRTdHlsZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBuZXdGb250U2l6ZSA9IGZvbnRTaXplc1tzYWZlU2l6ZUluZGV4XTtcbiAgICAgICAgY29uc3QgbmV3Rm9udEZhbWlseSA9IGZvbnRTdHlsZXNbc2FmZVN0eWxlSW5kZXhdO1xuICAgICAgICBcbiAgICAgICAgLy8gRm9yY2UgdXBkYXRlIHRoZSBmb250IHNpemUgYW5kIGZhbWlseVxuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdmb250U2l6ZScsIG5ld0ZvbnRTaXplKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnZm9udEZhbWlseScsIG5ld0ZvbnRGYW1pbHkpO1xuICAgICAgICBcbiAgICAgICAgLy8gQWxzbyBzZXQgdGhlbSBub3JtYWxseSB0byBlbnN1cmUgdGhleSdyZSB1cGRhdGVkXG4gICAgICAgIHRoaXMuc2V0KCdmb250U2l6ZScsIG5ld0ZvbnRTaXplKTtcbiAgICAgICAgdGhpcy5zZXQoJ2ZvbnRGYW1pbHknLCBuZXdGb250RmFtaWx5KTtcbiAgICAgICAgXG4gICAgICAgIC8vIFJlc3RhcnQgdGV4dCBzaGlmdGluZyBpZiBlbmFibGVkXG4gICAgICAgIGlmICh0aGlzLnNoaWZ0SW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zaGlmdEludGVydmFsKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dXBUZXh0U2hpZnRpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBvcGVuU2V0dGluZ3MoKSB7XG4gICAgICAgIEZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICBtb2R1bGVOYW1lOiAnc2V0dGluZ3MtcGFnZScsXG4gICAgICAgICAgICBhbmltYXRlZDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBhcHBseVNldHRpbmdzKCkge1xuICAgICAgICBpZiAoYW5kcm9pZEFwcCkge1xuICAgICAgICAgICAgY29uc3QgYWN0aXZpdHkgPSBhbmRyb2lkQXBwLnN0YXJ0QWN0aXZpdHkgfHwgYW5kcm9pZEFwcC5mb3JlZ3JvdW5kQWN0aXZpdHk7XG4gICAgICAgICAgICBpZiAoYWN0aXZpdHkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3aW5kb3cgPSBhY3Rpdml0eS5nZXRXaW5kb3coKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBBbHdheXMga2VlcCBzY3JlZW4gb25cbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRmxhZ3MoYW5kcm9pZC52aWV3LldpbmRvd01hbmFnZXIuTGF5b3V0UGFyYW1zLkZMQUdfS0VFUF9TQ1JFRU5fT04pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIEhpZGUgYWN0aW9uIGJhclxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbkJhciA9IGFjdGl2aXR5LmdldEFjdGlvbkJhcigpO1xuICAgICAgICAgICAgICAgIGlmIChhY3Rpb25CYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uQmFyLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gU2V0IGZ1bGxzY3JlZW4gZmxhZ3NcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRmxhZ3MoYW5kcm9pZC52aWV3LldpbmRvd01hbmFnZXIuTGF5b3V0UGFyYW1zLkZMQUdfRlVMTFNDUkVFTik7XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEZsYWdzKGFuZHJvaWQudmlldy5XaW5kb3dNYW5hZ2VyLkxheW91dFBhcmFtcy5GTEFHX0xBWU9VVF9OT19MSU1JVFMpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIEhpZGUgc3lzdGVtIFVJXG4gICAgICAgICAgICAgICAgY29uc3QgVmlldyA9IGFuZHJvaWQudmlldy5WaWV3O1xuICAgICAgICAgICAgICAgIGNvbnN0IGZsYWdzID0gVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfU1RBQkxFXG4gICAgICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfSElERV9OQVZJR0FUSU9OXG4gICAgICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfRlVMTFNDUkVFTlxuICAgICAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfSElERV9OQVZJR0FUSU9OXG4gICAgICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19GVUxMU0NSRUVOXG4gICAgICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19JTU1FUlNJVkVfU1RJQ0tZO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHdpbmRvdy5nZXREZWNvclZpZXcoKS5zZXRTeXN0ZW1VaVZpc2liaWxpdHkoZmxhZ3MpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIFNldCBibGFjayBiYWNrZ3JvdW5kXG4gICAgICAgICAgICAgICAgd2luZG93LnNldEJhY2tncm91bmREcmF3YWJsZShuZXcgYW5kcm9pZC5ncmFwaGljcy5kcmF3YWJsZS5Db2xvckRyYXdhYmxlKGFuZHJvaWQuZ3JhcGhpY3MuQ29sb3IuQkxBQ0spKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gVXBkYXRlIGZvbnQgc2V0dGluZ3NcbiAgICAgICAgdGhpcy51cGRhdGVGb250U2V0dGluZ3MoKTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBzZXR1cFRleHRTaGlmdGluZygpIHtcbiAgICAgICAgaWYgKGFwcFNldHRpbmdzLmdldEJvb2xlYW4oJ3RleHRTaGlmdGluZycsIHRydWUpKSB7XG4gICAgICAgICAgICBjb25zdCBmcmVxdWVuY3kgPSBhcHBTZXR0aW5ncy5nZXROdW1iZXIoJ3NoaWZ0RnJlcXVlbmN5JywgNjApICogMTAwMDsgLy8gQ29udmVydCB0byBtaWxsaXNlY29uZHNcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudFggPSBhcHBTZXR0aW5ncy5nZXROdW1iZXIoJ3NoaWZ0QW1vdW50WCcsIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudFkgPSBhcHBTZXR0aW5ncy5nZXROdW1iZXIoJ3NoaWZ0QW1vdW50WScsIDUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2V0dGluZyB1cCB0ZXh0IHNoaWZ0aW5nOicsIHsgXG4gICAgICAgICAgICAgICAgZnJlcXVlbmN5LCBcbiAgICAgICAgICAgICAgICBhbW91bnRYLCBcbiAgICAgICAgICAgICAgICBhbW91bnRZXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQ2xlYXIgYW55IGV4aXN0aW5nIGludGVydmFsXG4gICAgICAgICAgICBpZiAodGhpcy5zaGlmdEludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnNoaWZ0SW50ZXJ2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBTZXQgdXAgbmV3IGludGVydmFsXG4gICAgICAgICAgICB0aGlzLnNoaWZ0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHJhbmRvbSBwb3NpdGlvbiB3aXRoaW4gdGhlIGFsbG93ZWQgc2hpZnQgYW1vdW50c1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBhbW91bnRYO1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBhbW91bnRZO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTaGlmdGluZyB0ZXh0OicsIHsgXG4gICAgICAgICAgICAgICAgICAgIHgsIFxuICAgICAgICAgICAgICAgICAgICB5LFxuICAgICAgICAgICAgICAgICAgICBhbW91bnRYLFxuICAgICAgICAgICAgICAgICAgICBhbW91bnRZXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gQXBwbHkgdGhlIHNoaWZ0IHZhbHVlc1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KCd0ZXh0U2hpZnRYJywgeCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoJ3RleHRTaGlmdFknLCB5KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBMb2cgdGhlIGFjdHVhbCB2YWx1ZXMgYmVpbmcgYXBwbGllZFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBcHBsaWVkIHNoaWZ0IHZhbHVlczonLCB7XG4gICAgICAgICAgICAgICAgICAgIHRleHRTaGlmdFg6IHRoaXMuZ2V0KCd0ZXh0U2hpZnRYJyksXG4gICAgICAgICAgICAgICAgICAgIHRleHRTaGlmdFk6IHRoaXMuZ2V0KCd0ZXh0U2hpZnRZJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIGZyZXF1ZW5jeSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSZXNldCBzaGlmdCB2YWx1ZXMgd2hlbiBzaGlmdGluZyBpcyBkaXNhYmxlZFxuICAgICAgICAgICAgdGhpcy5zZXQoJ3RleHRTaGlmdFgnLCAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0KCd0ZXh0U2hpZnRZJywgMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudXBkYXRlSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy51cGRhdGVJbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2hpZnRJbnRlcnZhbCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnNoaWZ0SW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IE5hdmlnYXRlZERhdGEgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcGFnZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3BhZ2UnO1xuaW1wb3J0IHsgU2V0dGluZ3NWaWV3TW9kZWwgfSBmcm9tICcuL3NldHRpbmdzLXZpZXctbW9kZWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IFNldHRpbmdzVmlld01vZGVsKCk7XG59IiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8UGFnZSB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0aW5nVG89XFxcIm9uTmF2aWdhdGluZ1RvXFxcIiBjbGFzcz1cXFwiYmctYmxhY2tcXFwiIGFjdGlvbkJhckhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxuICAgIDxTY3JvbGxWaWV3IG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXG4gICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgY2xhc3M9XFxcInAtNFxcXCIgd2lkdGg9XFxcImF1dG9cXFwiPlxcbiAgICAgICAgICAgIDwhLS0gRm9udCBTZXR0aW5ncyBQYW5lbCAtLT5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIm0tNCBwLTRcXFwiIHdpZHRoPVxcXCIzMDBcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRm9udCBTZXR0aW5nc1xcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC14bCBtYi00XFxcIi8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRm9udCBTaXplXFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSBtYi0yXFxcIi8+XFxuICAgICAgICAgICAgICAgIDxMaXN0UGlja2VyIGl0ZW1zPVxcXCJ7eyBmb250U2l6ZXMgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg9XFxcInt7IHNlbGVjdGVkRm9udFNpemVJbmRleCB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcIm1iLTQgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBwLTJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVxcXCIxMjBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcIndoaXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cXFwiYmxhY2tcXFwiLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJGb250IFN0eWxlXFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSBtYi0yXFxcIi8+XFxuICAgICAgICAgICAgICAgIDxMaXN0UGlja2VyIGl0ZW1zPVxcXCJ7eyBmb250U3R5bGVzIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4PVxcXCJ7eyBzZWxlY3RlZEZvbnRTdHlsZUluZGV4IH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibWItNCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIHAtMlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XFxcIjEyMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwid2hpdGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVxcXCJibGFja1xcXCIvPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgPCEtLSBUZXh0IFBvc2l0aW9uIFNldHRpbmdzIFBhbmVsIC0tPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwibS00IHAtNFxcXCIgd2lkdGg9XFxcIjMwMFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJUZXh0IFBvc2l0aW9uXFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSB0ZXh0LXhsIG1iLTRcXFwiLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJTaGlmdCBJbnRlcnZhbFxcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgbWItMlxcXCIvPlxcbiAgICAgICAgICAgICAgICA8TGlzdFBpY2tlciBpdGVtcz1cXFwie3sgc2hpZnRJbnRlcnZhbHMgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg9XFxcInt7IHNlbGVjdGVkU2hpZnRJbnRlcnZhbEluZGV4IH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibWItNCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIHAtMlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XFxcIjEyMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwid2hpdGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVxcXCJibGFja1xcXCIvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkhvcml6b250YWwgU2hpZnQgKHBpeGVscylcXFwiIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIG1iLTJcXFwiLz5cXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCB0ZXh0PVxcXCJ7eyBzaGlmdEFtb3VudFggfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVxcXCJFbnRlciB2YWx1ZSAoMS0xMDApXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cXFwiZG9uZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJtYi00IHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgcC0yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuUHJlc3M9XFxcInt7IHNhdmVTZXR0aW5ncyB9fVxcXCIvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlZlcnRpY2FsIFNoaWZ0IChwaXhlbHMpXFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSBtYi0yXFxcIi8+XFxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgdGV4dD1cXFwie3sgc2hpZnRBbW91bnRZIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cXFwibnVtYmVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cXFwiRW50ZXIgdmFsdWUgKDEtMTAwKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU9XFxcImRvbmVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibWItNCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIHAtMlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblByZXNzPVxcXCJ7eyBzYXZlU2V0dGluZ3MgfX1cXFwiLz5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgIDwhLS0gRGlzcGxheSBTZXR0aW5ncyBQYW5lbCAtLT5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIm0tNCBwLTRcXFwiIHdpZHRoPVxcXCIzMDBcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRGlzcGxheSBTZXR0aW5nc1xcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC14bCBtYi00XFxcIi8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTmlnaHQgTW9kZSAoU3Vuc2V0IHRvIERhd24pXFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSBtYi0yXFxcIi8+XFxuICAgICAgICAgICAgICAgIDxTd2l0Y2ggY2hlY2tlZD1cXFwie3sgYXV0b05pZ2h0TW9kZSB9fVxcXCIgY2xhc3M9XFxcIm1iLTRcXFwiLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDwhLS0gU2F2ZSBCdXR0b24gLS0+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiU2F2ZSBTZXR0aW5nc1xcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICB0YXA9XFxcInt7IHNhdmVTZXR0aW5ncyB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYmctd2hpdGUgdGV4dC1ibGFjayBtdC00IHAtM1xcXCIvPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L1Njcm9sbFZpZXc+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoKVxuXHQvLyBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge30pXG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSBhcyBPYnNlcnZhYmxlQmFzZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS9kYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgRnJhbWUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvdWkvZnJhbWUnO1xuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlL2FwcGxpY2F0aW9uLXNldHRpbmdzJztcblxuZXhwb3J0IGNsYXNzIFNldHRpbmdzVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZUJhc2Uge1xuICAgIHByaXZhdGUgX2ZvbnRTaXplcyA9IFsxMDAsIDExMCwgMTIwLCAxMzBdO1xuICAgIHByaXZhdGUgX2ZvbnRTaXplc1RleHQgPSBbJzEwMHB4JywgJzExMHB4JywgJzEyMHB4JywgJzEzMHB4J107XG4gICAgcHJpdmF0ZSBfZm9udFN0eWxlcyA9IFsnc2Fucy1zZXJpZicsICdzZXJpZicsICdtb25vc3BhY2UnXTtcbiAgICBwcml2YXRlIF9zaGlmdEludGVydmFscyA9IFsnMyBzZWd1bmRvcycsICcxIG1pbnV0bycsICc1IG1pbnV0b3MnLCAnMTAgbWludXRvcyddO1xuICAgIHByaXZhdGUgX3NoaWZ0SW50ZXJ2YWxWYWx1ZXMgPSBbMywgNjAsIDMwMCwgNjAwXTsgLy8gVmFsdWVzIGluIHNlY29uZHNcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFNldCBvYnNlcnZhYmxlIHByb3BlcnRpZXNcbiAgICAgICAgdGhpcy5zZXQoJ2ZvbnRTaXplcycsIHRoaXMuX2ZvbnRTaXplc1RleHQpO1xuICAgICAgICB0aGlzLnNldCgnZm9udFN0eWxlcycsIHRoaXMuX2ZvbnRTdHlsZXMpO1xuICAgICAgICB0aGlzLnNldCgnc2hpZnRJbnRlcnZhbHMnLCB0aGlzLl9zaGlmdEludGVydmFscyk7XG4gICAgICAgIFxuICAgICAgICAvLyBMb2FkIHNhdmVkIHNldHRpbmdzXG4gICAgICAgIHRoaXMubG9hZFNldHRpbmdzKCk7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBsb2FkU2V0dGluZ3MoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2FkaW5nIHNldHRpbmdzLi4uJyk7XG4gICAgICAgIFxuICAgICAgICAvLyBMb2FkIGZvbnQgc2V0dGluZ3NcbiAgICAgICAgY29uc3Qgc2F2ZWRGb250U2l6ZSA9IGFwcFNldHRpbmdzLmdldE51bWJlcignZm9udFNpemUnLCAwKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0xvYWRpbmcgZm9udCBzaXplOicsIHtcbiAgICAgICAgICAgIHNhdmVkSW5kZXg6IHNhdmVkRm9udFNpemUsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5fZm9udFNpemVzW3NhdmVkRm9udFNpemVdLFxuICAgICAgICAgICAgdGV4dDogdGhpcy5fZm9udFNpemVzVGV4dFtzYXZlZEZvbnRTaXplXVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIEVuc3VyZSB3ZSBoYXZlIHZhbGlkIGluZGljZXNcbiAgICAgICAgY29uc3Qgc2FmZUZvbnRTaXplSW5kZXggPSBNYXRoLm1pbihNYXRoLm1heCgwLCBzYXZlZEZvbnRTaXplKSwgdGhpcy5fZm9udFNpemVzLmxlbmd0aCAtIDEpO1xuICAgICAgICB0aGlzLnNldCgnc2VsZWN0ZWRGb250U2l6ZUluZGV4Jywgc2FmZUZvbnRTaXplSW5kZXgpO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgc2F2ZWRGb250U3R5bGUgPSBhcHBTZXR0aW5ncy5nZXROdW1iZXIoJ2ZvbnRTdHlsZScsIDApO1xuICAgICAgICBjb25zdCBzYWZlRm9udFN0eWxlSW5kZXggPSBNYXRoLm1pbihNYXRoLm1heCgwLCBzYXZlZEZvbnRTdHlsZSksIHRoaXMuX2ZvbnRTdHlsZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgIHRoaXMuc2V0KCdzZWxlY3RlZEZvbnRTdHlsZUluZGV4Jywgc2FmZUZvbnRTdHlsZUluZGV4KTtcbiAgICAgICAgXG4gICAgICAgIC8vIExvYWQgbmlnaHQgbW9kZSBzZXR0aW5nXG4gICAgICAgIHRoaXMuc2V0KCdhdXRvTmlnaHRNb2RlJywgYXBwU2V0dGluZ3MuZ2V0Qm9vbGVhbignYXV0b05pZ2h0TW9kZScsIGZhbHNlKSk7XG4gICAgICAgIFxuICAgICAgICAvLyBMb2FkIHRleHQgc2hpZnRpbmcgc2V0dGluZ3NcbiAgICAgICAgdGhpcy5zZXQoJ3RleHRTaGlmdGluZycsIGFwcFNldHRpbmdzLmdldEJvb2xlYW4oJ3RleHRTaGlmdGluZycsIHRydWUpKTtcbiAgICAgICAgdGhpcy5zZXQoJ3NlbGVjdGVkU2hpZnRJbnRlcnZhbEluZGV4JywgYXBwU2V0dGluZ3MuZ2V0TnVtYmVyKCdzaGlmdEludGVydmFsSW5kZXgnLCAxKSk7XG4gICAgICAgIHRoaXMuc2V0KCdzaGlmdEFtb3VudFgnLCBhcHBTZXR0aW5ncy5nZXROdW1iZXIoJ3NoaWZ0QW1vdW50WCcsIDEwKSk7XG4gICAgICAgIHRoaXMuc2V0KCdzaGlmdEFtb3VudFknLCBhcHBTZXR0aW5ncy5nZXROdW1iZXIoJ3NoaWZ0QW1vdW50WScsIDUpKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdTZXR0aW5ncyBsb2FkZWQ6Jywge1xuICAgICAgICAgICAgZm9udFNpemU6IHtcbiAgICAgICAgICAgICAgICBpbmRleDogc2FmZUZvbnRTaXplSW5kZXgsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuX2ZvbnRTaXplc1tzYWZlRm9udFNpemVJbmRleF0sXG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5fZm9udFNpemVzVGV4dFtzYWZlRm9udFNpemVJbmRleF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb250U3R5bGU6IHtcbiAgICAgICAgICAgICAgICBpbmRleDogc2FmZUZvbnRTdHlsZUluZGV4LFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLl9mb250U3R5bGVzW3NhZmVGb250U3R5bGVJbmRleF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdXRvTmlnaHRNb2RlOiB0aGlzLmdldCgnYXV0b05pZ2h0TW9kZScpLFxuICAgICAgICAgICAgdGV4dFNoaWZ0aW5nOiB0aGlzLmdldCgndGV4dFNoaWZ0aW5nJyksXG4gICAgICAgICAgICBzaGlmdEludGVydmFsOiB7XG4gICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuZ2V0KCdzZWxlY3RlZFNoaWZ0SW50ZXJ2YWxJbmRleCcpLFxuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuX3NoaWZ0SW50ZXJ2YWxzW3RoaXMuZ2V0KCdzZWxlY3RlZFNoaWZ0SW50ZXJ2YWxJbmRleCcpXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNoaWZ0QW1vdW50WDogdGhpcy5nZXQoJ3NoaWZ0QW1vdW50WCcpLFxuICAgICAgICAgICAgc2hpZnRBbW91bnRZOiB0aGlzLmdldCgnc2hpZnRBbW91bnRZJylcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNhdmVTZXR0aW5ncygpIHtcbiAgICAgICAgLy8gU2F2ZSBmb250IHNldHRpbmdzXG4gICAgICAgIGNvbnN0IGZvbnRTaXplSW5kZXggPSB0aGlzLmdldCgnc2VsZWN0ZWRGb250U2l6ZUluZGV4Jyk7XG4gICAgICAgIGNvbnN0IHNhZmVGb250U2l6ZUluZGV4ID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgZm9udFNpemVJbmRleCksIHRoaXMuX2ZvbnRTaXplcy5sZW5ndGggLSAxKTtcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0TnVtYmVyKCdmb250U2l6ZScsIHNhZmVGb250U2l6ZUluZGV4KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZvbnRTdHlsZUluZGV4ID0gdGhpcy5nZXQoJ3NlbGVjdGVkRm9udFN0eWxlSW5kZXgnKTtcbiAgICAgICAgY29uc3Qgc2FmZUZvbnRTdHlsZUluZGV4ID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgZm9udFN0eWxlSW5kZXgpLCB0aGlzLl9mb250U3R5bGVzLmxlbmd0aCAtIDEpO1xuICAgICAgICBhcHBTZXR0aW5ncy5zZXROdW1iZXIoJ2ZvbnRTdHlsZScsIHNhZmVGb250U3R5bGVJbmRleCk7XG4gICAgICAgIFxuICAgICAgICAvLyBTYXZlIG5pZ2h0IG1vZGUgc2V0dGluZ1xuICAgICAgICBjb25zdCBhdXRvTmlnaHRNb2RlID0gdGhpcy5nZXQoJ2F1dG9OaWdodE1vZGUnKTtcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0Qm9vbGVhbignYXV0b05pZ2h0TW9kZScsIGF1dG9OaWdodE1vZGUpO1xuICAgICAgICBcbiAgICAgICAgLy8gU2F2ZSB0ZXh0IHNoaWZ0aW5nIHNldHRpbmdzXG4gICAgICAgIGNvbnN0IHRleHRTaGlmdGluZyA9IHRoaXMuZ2V0KCd0ZXh0U2hpZnRpbmcnKTtcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0Qm9vbGVhbigndGV4dFNoaWZ0aW5nJywgdGV4dFNoaWZ0aW5nKTtcblxuICAgICAgICBjb25zdCBpbnRlcnZhbEluZGV4ID0gdGhpcy5nZXQoJ3NlbGVjdGVkU2hpZnRJbnRlcnZhbEluZGV4Jyk7XG4gICAgICAgIGNvbnN0IHNhZmVJbnRlcnZhbEluZGV4ID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgaW50ZXJ2YWxJbmRleCksIHRoaXMuX3NoaWZ0SW50ZXJ2YWxWYWx1ZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgIGFwcFNldHRpbmdzLnNldE51bWJlcignc2hpZnRJbnRlcnZhbEluZGV4Jywgc2FmZUludGVydmFsSW5kZXgpO1xuICAgICAgICBhcHBTZXR0aW5ncy5zZXROdW1iZXIoJ3NoaWZ0RnJlcXVlbmN5JywgdGhpcy5fc2hpZnRJbnRlcnZhbFZhbHVlc1tzYWZlSW50ZXJ2YWxJbmRleF0pO1xuXG4gICAgICAgIGNvbnN0IHNoaWZ0QW1vdW50WCA9IHBhcnNlSW50KHRoaXMuZ2V0KCdzaGlmdEFtb3VudFgnKSwgMTApO1xuICAgICAgICBjb25zdCB2YWxpZFNoaWZ0QW1vdW50WCA9IGlzTmFOKHNoaWZ0QW1vdW50WCkgPyAxMCA6IE1hdGgubWF4KDEsIE1hdGgubWluKDEwMCwgc2hpZnRBbW91bnRYKSk7XG4gICAgICAgIGFwcFNldHRpbmdzLnNldE51bWJlcignc2hpZnRBbW91bnRYJywgdmFsaWRTaGlmdEFtb3VudFgpO1xuXG4gICAgICAgIGNvbnN0IHNoaWZ0QW1vdW50WSA9IHBhcnNlSW50KHRoaXMuZ2V0KCdzaGlmdEFtb3VudFknKSwgMTApO1xuICAgICAgICBjb25zdCB2YWxpZFNoaWZ0QW1vdW50WSA9IGlzTmFOKHNoaWZ0QW1vdW50WSkgPyA1IDogTWF0aC5tYXgoMSwgTWF0aC5taW4oMTAwLCBzaGlmdEFtb3VudFkpKTtcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0TnVtYmVyKCdzaGlmdEFtb3VudFknLCB2YWxpZFNoaWZ0QW1vdW50WSk7XG5cbiAgICAgICAgLy8gTmF2aWdhdGUgYmFjayB0byBtYWluIHBhZ2VcbiAgICAgICAgRnJhbWUudG9wbW9zdCgpLmdvQmFjaygpO1xuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ+L3BhY2thZ2UuanNvblwiKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=