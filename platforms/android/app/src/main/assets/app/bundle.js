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

const ___CSS2JSON_LOADER_EXPORT___ = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":["*","::before","::after"],"declarations":[{"type":"declaration","property":"--tw-border-spacing-x","value":"0"},{"type":"declaration","property":"--tw-border-spacing-y","value":"0"},{"type":"declaration","property":"--tw-translate-x","value":"0"},{"type":"declaration","property":"--tw-translate-y","value":"0"},{"type":"declaration","property":"--tw-rotate","value":"0"},{"type":"declaration","property":"--tw-skew-x","value":"0"},{"type":"declaration","property":"--tw-skew-y","value":"0"},{"type":"declaration","property":"--tw-scale-x","value":"1"},{"type":"declaration","property":"--tw-scale-y","value":"1"},{"type":"declaration","property":"--tw-pan-x","value":""},{"type":"declaration","property":"--tw-pan-y","value":""},{"type":"declaration","property":"--tw-pinch-zoom","value":""},{"type":"declaration","property":"--tw-scroll-snap-strictness","value":"proximity"},{"type":"declaration","property":"--tw-gradient-from-position","value":""},{"type":"declaration","property":"--tw-gradient-via-position","value":""},{"type":"declaration","property":"--tw-gradient-to-position","value":""},{"type":"declaration","property":"--tw-blur","value":""},{"type":"declaration","property":"--tw-brightness","value":""},{"type":"declaration","property":"--tw-contrast","value":""},{"type":"declaration","property":"--tw-grayscale","value":""},{"type":"declaration","property":"--tw-hue-rotate","value":""},{"type":"declaration","property":"--tw-invert","value":""},{"type":"declaration","property":"--tw-saturate","value":""},{"type":"declaration","property":"--tw-sepia","value":""},{"type":"declaration","property":"--tw-drop-shadow","value":""},{"type":"declaration","property":"--tw-backdrop-blur","value":""},{"type":"declaration","property":"--tw-backdrop-brightness","value":""},{"type":"declaration","property":"--tw-backdrop-contrast","value":""},{"type":"declaration","property":"--tw-backdrop-grayscale","value":""},{"type":"declaration","property":"--tw-backdrop-hue-rotate","value":""},{"type":"declaration","property":"--tw-backdrop-invert","value":""},{"type":"declaration","property":"--tw-backdrop-opacity","value":""},{"type":"declaration","property":"--tw-backdrop-saturate","value":""},{"type":"declaration","property":"--tw-backdrop-sepia","value":""},{"type":"declaration","property":"--tw-contain-size","value":""},{"type":"declaration","property":"--tw-contain-layout","value":""},{"type":"declaration","property":"--tw-contain-paint","value":""},{"type":"declaration","property":"--tw-contain-style","value":""}]},{"type":"rule","selectors":["::backdrop"],"declarations":[{"type":"declaration","property":"--tw-border-spacing-x","value":"0"},{"type":"declaration","property":"--tw-border-spacing-y","value":"0"},{"type":"declaration","property":"--tw-translate-x","value":"0"},{"type":"declaration","property":"--tw-translate-y","value":"0"},{"type":"declaration","property":"--tw-rotate","value":"0"},{"type":"declaration","property":"--tw-skew-x","value":"0"},{"type":"declaration","property":"--tw-skew-y","value":"0"},{"type":"declaration","property":"--tw-scale-x","value":"1"},{"type":"declaration","property":"--tw-scale-y","value":"1"},{"type":"declaration","property":"--tw-pan-x","value":""},{"type":"declaration","property":"--tw-pan-y","value":""},{"type":"declaration","property":"--tw-pinch-zoom","value":""},{"type":"declaration","property":"--tw-scroll-snap-strictness","value":"proximity"},{"type":"declaration","property":"--tw-gradient-from-position","value":""},{"type":"declaration","property":"--tw-gradient-via-position","value":""},{"type":"declaration","property":"--tw-gradient-to-position","value":""},{"type":"declaration","property":"--tw-blur","value":""},{"type":"declaration","property":"--tw-brightness","value":""},{"type":"declaration","property":"--tw-contrast","value":""},{"type":"declaration","property":"--tw-grayscale","value":""},{"type":"declaration","property":"--tw-hue-rotate","value":""},{"type":"declaration","property":"--tw-invert","value":""},{"type":"declaration","property":"--tw-saturate","value":""},{"type":"declaration","property":"--tw-sepia","value":""},{"type":"declaration","property":"--tw-drop-shadow","value":""},{"type":"declaration","property":"--tw-backdrop-blur","value":""},{"type":"declaration","property":"--tw-backdrop-brightness","value":""},{"type":"declaration","property":"--tw-backdrop-contrast","value":""},{"type":"declaration","property":"--tw-backdrop-grayscale","value":""},{"type":"declaration","property":"--tw-backdrop-hue-rotate","value":""},{"type":"declaration","property":"--tw-backdrop-invert","value":""},{"type":"declaration","property":"--tw-backdrop-opacity","value":""},{"type":"declaration","property":"--tw-backdrop-saturate","value":""},{"type":"declaration","property":"--tw-backdrop-sepia","value":""},{"type":"declaration","property":"--tw-contain-size","value":""},{"type":"declaration","property":"--tw-contain-layout","value":""},{"type":"declaration","property":"--tw-contain-paint","value":""},{"type":"declaration","property":"--tw-contain-style","value":""}]},{"type":"rule","selectors":[".container"],"declarations":[{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".mb-2"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"8"}]},{"type":"rule","selectors":[".mb-4"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"16"}]},{"type":"rule","selectors":[".mt-4"],"declarations":[{"type":"declaration","property":"margin-top","value":"16"}]},{"type":"rule","selectors":[".bg-black"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(0 0 0 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-white"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(255 255 255 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".p-2"],"declarations":[{"type":"declaration","property":"padding","value":"8"}]},{"type":"rule","selectors":[".p-3"],"declarations":[{"type":"declaration","property":"padding","value":"12"}]},{"type":"rule","selectors":[".p-4"],"declarations":[{"type":"declaration","property":"padding","value":"16"}]},{"type":"rule","selectors":[".text-center"],"declarations":[{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":[".text-2xl"],"declarations":[{"type":"declaration","property":"font-size","value":"24"},{"type":"declaration","property":"line-height","value":"32"}]},{"type":"rule","selectors":[".text-black"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(0 0 0 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-white"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(255 255 255 / var(--tw-text-opacity, 1))"}]},{"type":"comment","comment":" General styles "},{"type":"rule","selectors":[".bg-black"],"declarations":[{"type":"declaration","property":"background-color","value":"black"}]},{"type":"rule","selectors":["TimePicker"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#333333"},{"type":"declaration","property":"padding","value":"12"},{"type":"declaration","property":"font-size","value":"18"}]},{"type":"rule","selectors":["TimePicker[platform=android]"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"background-color","value":"#333333"}]}],"parsingErrors":[]}}
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"navigatingTo\" navigatingFrom=\"navigatingFrom\" class=\"bg-black\" actionBarHidden=\"true\">\n    <GridLayout rows=\"*\" columns=\"*\" class=\"bg-black\">\n        <StackLayout id=\"textContainer\" row=\"0\" verticalAlignment=\"center\" horizontalAlignment=\"center\" width=\"100%\" height=\"100%\" class=\"bg-black\">\n            <Label text=\"{{ weekday }}\" \n                   class=\"text-center\" \n                   fontSize=\"{{ fontSize * 1.2 }}\"\n                   fontFamily=\"{{ fontFamily }}\"\n                   color=\"{{ textColor }}\"\n                   fontWeight=\"bold\"\n                   textWrap=\"true\"\n                   translateX=\"{{ textShiftX }}\"\n                   translateY=\"{{ textShiftY }}\"/>\n            <Label text=\"{{ fullDate }}\" \n                   class=\"text-center\" \n                   fontSize=\"{{ fontSize }}\"\n                   fontFamily=\"{{ fontFamily }}\"\n                   color=\"{{ textColor }}\"\n                   fontWeight=\"bold\"\n                   textWrap=\"true\"\n                   translateX=\"{{ textShiftX }}\"\n                   translateY=\"{{ textShiftY }}\"/>\n        </StackLayout>\n    </GridLayout>\n</Page>"
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
        this.set('fullDate', '');
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
                const textWidth = fontSize * 12; // Increased width multiplier for longer text
                const textHeight = fontSize * 2.4; // Account for both labels (weekday and date)
                // Calculate maximum allowed shift to keep text within container bounds
                const maxShiftX = Math.min(amountX, (this.containerWidth - textWidth) / 2);
                const maxShiftY = Math.min(amountY, (this.containerHeight - textHeight) / 2);
                // Generate random angle between 0 and 2π (full circle)
                const angle = Math.random() * 2 * Math.PI;
                // Calculate random distance from 0 to max shift for that direction
                const distance = Math.random();
                // Calculate x and y components based on angle and distance
                const x = Math.cos(angle) * distance * maxShiftX;
                const y = Math.sin(angle) * distance * maxShiftY;
                console.log('Shifting text:', {
                    x,
                    y,
                    angle: (angle * 180 / Math.PI).toFixed(2) + '°',
                    distance,
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"onNavigatingTo\" class=\"bg-black\" actionBarHidden=\"true\">\n    <ScrollView>\n        <StackLayout class=\"p-4\">\n            <Label text=\"Settings\" class=\"text-white text-2xl mb-4\"/>\n            \n            <!-- Font Size -->\n            <Label text=\"Font Size\" class=\"text-white mb-2\"/>\n            <ListPicker items=\"{{ fontSizes }}\" \n                       selectedIndex=\"{{ selectedFontSizeIndex }}\" \n                       class=\"mb-4 text-white text-center p-2\"\n                       height=\"120\"\n                       color=\"white\"\n                       backgroundColor=\"black\"/>\n            \n            <!-- Font Style -->\n            <Label text=\"Font Style\" class=\"text-white mb-2\"/>\n            <ListPicker items=\"{{ fontStyles }}\" \n                       selectedIndex=\"{{ selectedFontStyleIndex }}\" \n                       class=\"mb-4 text-white text-center p-2\"\n                       height=\"120\"\n                       color=\"white\"\n                       backgroundColor=\"black\"/>\n            \n            <!-- Night Mode -->\n            <Label text=\"Night Mode (Sunset to Dawn)\" class=\"text-white mb-2\"/>\n            <Switch checked=\"{{ autoNightMode }}\" class=\"mb-4\"/>\n            \n            <!-- Text Position Shifting -->\n            <Label text=\"Shift Interval\" class=\"text-white mb-2\"/>\n            <ListPicker items=\"{{ shiftIntervals }}\" \n                       selectedIndex=\"{{ selectedShiftIntervalIndex }}\" \n                       class=\"mb-4 text-white text-center p-2\"\n                       height=\"120\"\n                       color=\"white\"\n                       backgroundColor=\"black\"/>\n            \n            <Label text=\"Horizontal Shift (pixels)\" class=\"text-white mb-2\"/>\n            <TextField text=\"{{ shiftAmountX }}\" \n                      keyboardType=\"number\"\n                      hint=\"Enter value (1-100)\"\n                      returnKeyType=\"done\"\n                      class=\"mb-4 text-white text-center p-2\"/>\n            \n            <Label text=\"Vertical Shift (pixels)\" class=\"text-white mb-2\"/>\n            <TextField text=\"{{ shiftAmountY }}\" \n                      keyboardType=\"number\"\n                      hint=\"Enter value (1-100)\"\n                      returnKeyType=\"done\"\n                      class=\"mb-4 text-white text-center p-2\"/>\n            \n            <!-- Save Button -->\n            <Button text=\"Save Settings\" \n                   tap=\"{{ saveSettings }}\" \n                   class=\"bg-white text-black mt-4 p-3\"/>\n        </StackLayout>\n    </ScrollView>\n</Page>"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eEIsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUM7Z0JBQ3pDLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDO2FBQy9DO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLEtBQUssRUFBRSxrQkFBa0I7Z0JBQ3pCLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDO2FBQzlDO1lBQ0QsYUFBYTtZQUNiLFlBQVk7WUFDWixhQUFhLEVBQUU7Z0JBQ1gsS0FBSyxFQUFFLGlCQUFpQjtnQkFDeEIsS0FBSyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDbkQsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUM7YUFDaEQ7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO2dCQUMvQixLQUFLLEVBQUUsaUJBQWlCO2FBQzNCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztnQkFDL0IsS0FBSyxFQUFFLGlCQUFpQjthQUMzQjtTQUNKLENBQUMsQ0FBQztRQUVILDZCQUE2QjtRQUM3Qiw4REFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzdCLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQy9JRCIsInNvdXJjZXMiOlsid2VicGFjazovL2RhdGVkYXktYXBwLy4vYXBwLyBzeW5jIFxcLih4bWwlN0NqcyU3QygiLCJ3ZWJwYWNrOi8vZGF0ZWRheS1hcHAvLi9hcHAvYXBwLXJvb3QueG1sIiwid2VicGFjazovL2RhdGVkYXktYXBwLy4vYXBwL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vZGF0ZWRheS1hcHAvLi9hcHAvYXBwLnRzIiwid2VicGFjazovL2RhdGVkYXktYXBwLy4vYXBwL21haW4tcGFnZS50cyIsIndlYnBhY2s6Ly9kYXRlZGF5LWFwcC8uL2FwcC9tYWluLXBhZ2UueG1sIiwid2VicGFjazovL2RhdGVkYXktYXBwLy4vYXBwL21haW4tdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly9kYXRlZGF5LWFwcC8uL2FwcC9zZXR0aW5ncy1wYWdlLnRzIiwid2VicGFjazovL2RhdGVkYXktYXBwLy4vYXBwL3NldHRpbmdzLXBhZ2UueG1sIiwid2VicGFjazovL2RhdGVkYXktYXBwLy4vYXBwL3NldHRpbmdzLXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vZGF0ZWRheS1hcHAvZXh0ZXJuYWwgY29tbW9uanMgXCJ+L3BhY2thZ2UuanNvblwiIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hcHAtcm9vdC54bWxcIjogXCIuL2FwcC9hcHAtcm9vdC54bWxcIixcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC9hcHAuY3NzXCIsXG5cdFwiLi9hcHAudHNcIjogXCIuL2FwcC9hcHAudHNcIixcblx0XCIuL21haW4tcGFnZS50c1wiOiBcIi4vYXBwL21haW4tcGFnZS50c1wiLFxuXHRcIi4vbWFpbi1wYWdlLnhtbFwiOiBcIi4vYXBwL21haW4tcGFnZS54bWxcIixcblx0XCIuL21haW4tdmlldy1tb2RlbC50c1wiOiBcIi4vYXBwL21haW4tdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vc2V0dGluZ3MtcGFnZS50c1wiOiBcIi4vYXBwL3NldHRpbmdzLXBhZ2UudHNcIixcblx0XCIuL3NldHRpbmdzLXBhZ2UueG1sXCI6IFwiLi9hcHAvc2V0dGluZ3MtcGFnZS54bWxcIixcblx0XCIuL3NldHRpbmdzLXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC9zZXR0aW5ncy12aWV3LW1vZGVsLnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXBwIHN5bmMgcmVjdXJzaXZlIFxcXFwuKHhtbCU3Q2pzJTdDKD88JTIxXFxcXC5kXFxcXC4pdHMlN0NzP2NzcykkXCI7IiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8RnJhbWUgZGVmYXVsdFBhZ2U9XFxcIm1haW4tcGFnZVxcXCIgYWN0aW9uQmFySGlkZGVuPVxcXCJ0cnVlXFxcIj5cXG48L0ZyYW1lPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoKVxuXHQvLyBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge30pXG59IiwiLyogQ1NTMkpTT04gKi9cblxuY29uc3QgX19fQ1NTMkpTT05fTE9BREVSX0VYUE9SVF9fXyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIqXCIsXCI6OmJlZm9yZVwiLFwiOjphZnRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYm9yZGVyLXNwYWNpbmcteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJvcmRlci1zcGFjaW5nLXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10cmFuc2xhdGUteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRyYW5zbGF0ZS15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcm90YXRlXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2tldy14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2tldy15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2NhbGUteFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjYWxlLXlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1wYW4teFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGFuLXlcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBpbmNoLXpvb21cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3NcIixcInZhbHVlXCI6XCJwcm94aW1pdHlcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJsdXJcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJyaWdodG5lc3NcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRyYXN0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmF5c2NhbGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWh1ZS1yb3RhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWludmVydFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2F0dXJhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNlcGlhXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1kcm9wLXNoYWRvd1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtYmx1clwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzc1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtY29udHJhc3RcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWdyYXlzY2FsZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtaW52ZXJ0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1zYXR1cmF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atc2VwaWFcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tc2l6ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1sYXlvdXRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tcGFpbnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tc3R5bGVcIixcInZhbHVlXCI6XCJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCI6OmJhY2tkcm9wXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ib3JkZXItc3BhY2luZy14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYm9yZGVyLXNwYWNpbmcteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRyYW5zbGF0ZS14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdHJhbnNsYXRlLXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1yb3RhdGVcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1za2V3LXhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1za2V3LXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zY2FsZS14XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2NhbGUteVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBhbi14XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1wYW4teVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGluY2gtem9vbVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzc1wiLFwidmFsdWVcIjpcInByb3hpbWl0eVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtdmlhLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmFkaWVudC10by1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmx1clwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYnJpZ2h0bmVzc1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udHJhc3RcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYXlzY2FsZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctaHVlLXJvdGF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctaW52ZXJ0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zYXR1cmF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2VwaWFcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWRyb3Atc2hhZG93XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1ibHVyXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1jb250cmFzdFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtZ3JheXNjYWxlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1odWUtcm90YXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1pbnZlcnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLW9wYWNpdHlcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLXNhdHVyYXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1zZXBpYVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1zaXplXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLWxheW91dFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1wYWludFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1zdHlsZVwiLFwidmFsdWVcIjpcIlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jb250YWluZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjEwMCVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubWItMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm1iLTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubXQtNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1ibGFja1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmctb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDAgMCAwIC8gdmFyKC0tdHctYmctb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnLXdoaXRlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy1iZy1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC0zXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjEyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LWNlbnRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC0yeGxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImxpbmUtaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMzJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1ibGFja1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdGV4dC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDAgMCAwIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC13aGl0ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdGV4dC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDI1NSAyNTUgMjU1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgR2VuZXJhbCBzdHlsZXMgXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1ibGFja1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJibGFja1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlRpbWVQaWNrZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzMzMzMzNcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMTJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlRpbWVQaWNrZXJbcGxhdGZvcm09YW5kcm9pZF1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMzMzMzMzNcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fVxuZXhwb3J0IGRlZmF1bHQgX19fQ1NTMkpTT05fTE9BREVSX0VYUE9SVF9fX1xuY29uc3QgeyBhZGRUYWdnZWRBZGRpdGlvbmFsQ1NTIH0gPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5hZGRUYWdnZWRBZGRpdGlvbmFsQ1NTKF9fX0NTUzJKU09OX0xPQURFUl9FWFBPUlRfX18sIFwiQzpcXFxcVXNlcnNcXFxcdGltbmlcXFxcQ3Vyc29yIFByb2plY3RzXFxcXERheURhdGUgMlxcXFxhcHBcXFxcYXBwLmNzc1wiKVxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdCgpXG5cdG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG5cdFx0Y29uc3QgeyByZW1vdmVUYWdnZWRBZGRpdGlvbmFsQ1NTIH0gPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cdFx0cmVtb3ZlVGFnZ2VkQWRkaXRpb25hbENTUyhcIkM6XFxcXFVzZXJzXFxcXHRpbW5pXFxcXEN1cnNvciBQcm9qZWN0c1xcXFxEYXlEYXRlIDJcXFxcYXBwXFxcXGFwcC5jc3NcIilcblx0fSlcbn0iLCJpbXBvcnQgKiBhcyBBcHBsaWNhdGlvbiBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvYXBwbGljYXRpb24nO1xuXG5kZWNsYXJlIGNvbnN0IGFuZHJvaWQ6IGFueTtcblxuQXBwbGljYXRpb24ucnVuKHsgbW9kdWxlTmFtZTogJ2FwcC1yb290JyB9KTtcblxuLy8gU2V0dXAgQW5kcm9pZC1zcGVjaWZpYyBVSSBhZnRlciB0aGUgYXBwIGlzIGxhdW5jaGVkXG5pZiAoQXBwbGljYXRpb24uYW5kcm9pZCkge1xuICAgIEFwcGxpY2F0aW9uLmFuZHJvaWQub24oJ2FjdGl2aXR5Q3JlYXRlZCcsIChhcmdzOiBhbnkpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2aXR5ID0gYXJncy5hY3Rpdml0eTtcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvdyA9IGFjdGl2aXR5LmdldFdpbmRvdygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBCYXNpYyBmbGFncyB0aGF0IHdvcmsgb24gb2xkZXIgQW5kcm9pZCB2ZXJzaW9uc1xuICAgICAgICAgICAgY29uc3QgVmlldyA9IGFuZHJvaWQudmlldy5WaWV3O1xuICAgICAgICAgICAgbGV0IGZsYWdzID0gVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfU1RBQkxFXG4gICAgICAgICAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9ISURFX05BVklHQVRJT05cbiAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0ZVTExTQ1JFRU5cbiAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfSElERV9OQVZJR0FUSU9OXG4gICAgICAgICAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0ZVTExTQ1JFRU47XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIE9ubHkgYWRkIElNTUVSU0lWRV9TVElDS1kgaWYgYXZhaWxhYmxlIChBbmRyb2lkIDQuNCspXG4gICAgICAgICAgICBpZiAoYW5kcm9pZC5vcy5CdWlsZC5WRVJTSU9OLlNES19JTlQgPj0gYW5kcm9pZC5vcy5CdWlsZC5WRVJTSU9OX0NPREVTLktJVEtBVCkge1xuICAgICAgICAgICAgICAgIGZsYWdzIHw9IFZpZXcuU1lTVEVNX1VJX0ZMQUdfSU1NRVJTSVZFX1NUSUNLWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2luZG93LmdldERlY29yVmlldygpLnNldFN5c3RlbVVpVmlzaWJpbGl0eShmbGFncyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFNldCB3aW5kb3cgZmxhZ3NcbiAgICAgICAgICAgIGNvbnN0IFdpbmRvd01hbmFnZXIgPSBhbmRyb2lkLnZpZXcuV2luZG93TWFuYWdlcjtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRGbGFncyhXaW5kb3dNYW5hZ2VyLkxheW91dFBhcmFtcy5GTEFHX0ZVTExTQ1JFRU4pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBBZGQgYSBsaXN0ZW5lciB0byBtYWludGFpbiBmdWxsc2NyZWVuIHdoZW4gc3lzdGVtIFVJIHZpc2liaWxpdHkgY2hhbmdlc1xuICAgICAgICAgICAgaWYgKGFuZHJvaWQub3MuQnVpbGQuVkVSU0lPTi5TREtfSU5UID49IGFuZHJvaWQub3MuQnVpbGQuVkVSU0lPTl9DT0RFUy5LSVRLQVQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuZ2V0RGVjb3JWaWV3KCkuc2V0T25TeXN0ZW1VaVZpc2liaWxpdHlDaGFuZ2VMaXN0ZW5lcihuZXcgYW5kcm9pZC52aWV3LlZpZXcuT25TeXN0ZW1VaVZpc2liaWxpdHlDaGFuZ2VMaXN0ZW5lcih7XG4gICAgICAgICAgICAgICAgICAgIG9uU3lzdGVtVWlWaXNpYmlsaXR5Q2hhbmdlOiBmdW5jdGlvbih2aXNpYmlsaXR5OiBudW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5nZXREZWNvclZpZXcoKS5zZXRTeXN0ZW1VaVZpc2liaWxpdHkoZmxhZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gYWN0aXZpdHlDcmVhdGVkOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIEFwcGxpY2F0aW9uLmFuZHJvaWQub24oJ2FjdGl2aXR5UmVzdW1lZCcsIChhcmdzOiBhbnkpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2aXR5ID0gYXJncy5hY3Rpdml0eTtcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvdyA9IGFjdGl2aXR5LmdldFdpbmRvdygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBWaWV3ID0gYW5kcm9pZC52aWV3LlZpZXc7XG4gICAgICAgICAgICBsZXQgZmxhZ3MgPSBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9TVEFCTEVcbiAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0hJREVfTkFWSUdBVElPTlxuICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfRlVMTFNDUkVFTlxuICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19ISURFX05BVklHQVRJT05cbiAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfRlVMTFNDUkVFTjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChhbmRyb2lkLm9zLkJ1aWxkLlZFUlNJT04uU0RLX0lOVCA+PSBhbmRyb2lkLm9zLkJ1aWxkLlZFUlNJT05fQ09ERVMuS0lUS0FUKSB7XG4gICAgICAgICAgICAgICAgZmxhZ3MgfD0gVmlldy5TWVNURU1fVUlfRkxBR19JTU1FUlNJVkVfU1RJQ0tZO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB3aW5kb3cuZ2V0RGVjb3JWaWV3KCkuc2V0U3lzdGVtVWlWaXNpYmlsaXR5KGZsYWdzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGFjdGl2aXR5UmVzdW1lZDonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9KTtcbn0iLCJpbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcGFnZSc7XG5pbXBvcnQgeyBGcmFtZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS91aS9mcmFtZSc7XG5pbXBvcnQgeyBNYWluVmlld01vZGVsIH0gZnJvbSAnLi9tYWluLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgU3dpcGVHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2dlc3R1cmVzJztcblxubGV0IHZpZXdNb2RlbDogTWFpblZpZXdNb2RlbDtcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgXG4gICAgaWYgKCF2aWV3TW9kZWwpIHtcbiAgICAgICAgdmlld01vZGVsID0gbmV3IE1haW5WaWV3TW9kZWwoKTtcbiAgICB9XG4gICAgXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZpZXdNb2RlbDtcbiAgICB2aWV3TW9kZWwuaW5pdGlhbGl6ZUNvbnRhaW5lcihwYWdlKTtcblxuICAgIC8vIEFkZCBzd2lwZSBnZXN0dXJlXG4gICAgcGFnZS5vbignc3dpcGUnLCAoYXJnczogU3dpcGVHZXN0dXJlRXZlbnREYXRhKSA9PiB7XG4gICAgICAgIGlmIChhcmdzLmRpcmVjdGlvbiA9PT0gMSB8fCBhcmdzLmRpcmVjdGlvbiA9PT0gMikgeyAvLyAxID0gcmlnaHQsIDIgPSBsZWZ0XG4gICAgICAgICAgICB2aWV3TW9kZWwub3BlblNldHRpbmdzKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdGcm9tKCkge1xuICAgIGlmICh2aWV3TW9kZWwpIHtcbiAgICAgICAgdmlld01vZGVsLmRpc3Bvc2UoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRlZFRvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGlmICh2aWV3TW9kZWwpIHtcbiAgICAgICAgLy8gVXBkYXRlIHNldHRpbmdzIHdoZW4gcmV0dXJuaW5nIGZyb20gc2V0dGluZ3MgcGFnZVxuICAgICAgICB2aWV3TW9kZWwudXBkYXRlRGF0ZVRpbWUoKTtcbiAgICAgICAgdmlld01vZGVsLnVwZGF0ZUZvbnRTZXR0aW5ncygpO1xuICAgIH1cbn0iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRpbmdUbz1cXFwibmF2aWdhdGluZ1RvXFxcIiBuYXZpZ2F0aW5nRnJvbT1cXFwibmF2aWdhdGluZ0Zyb21cXFwiIGNsYXNzPVxcXCJiZy1ibGFja1xcXCIgYWN0aW9uQmFySGlkZGVuPVxcXCJ0cnVlXFxcIj5cXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKlxcXCIgY29sdW1ucz1cXFwiKlxcXCIgY2xhc3M9XFxcImJnLWJsYWNrXFxcIj5cXG4gICAgICAgIDxTdGFja0xheW91dCBpZD1cXFwidGV4dENvbnRhaW5lclxcXCIgcm93PVxcXCIwXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHdpZHRoPVxcXCIxMDAlXFxcIiBoZWlnaHQ9XFxcIjEwMCVcXFwiIGNsYXNzPVxcXCJiZy1ibGFja1xcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHdlZWtkYXkgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIFxcbiAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cXFwie3sgZm9udFNpemUgKiAxLjIgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9XFxcInt7IGZvbnRGYW1pbHkgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJ7eyB0ZXh0Q29sb3IgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XFxcImJvbGRcXFwiXFxuICAgICAgICAgICAgICAgICAgIHRleHRXcmFwPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVYPVxcXCJ7eyB0ZXh0U2hpZnRYIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZPVxcXCJ7eyB0ZXh0U2hpZnRZIH19XFxcIi8+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGZ1bGxEYXRlIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgZm9udFNpemU9XFxcInt7IGZvbnRTaXplIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5PVxcXCJ7eyBmb250RmFtaWx5IH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwie3sgdGV4dENvbG9yIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVxcXCJib2xkXFxcIlxcbiAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWD1cXFwie3sgdGV4dFNoaWZ0WCB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWT1cXFwie3sgdGV4dFNoaWZ0WSB9fVxcXCIvPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KClcblx0Ly8gbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHt9KVxufSIsImltcG9ydCB7IE9ic2VydmFibGUgYXMgT2JzZXJ2YWJsZUJhc2UgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IEZyYW1lIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2ZyYW1lJztcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS9hcHBsaWNhdGlvbi1zZXR0aW5ncyc7XG5pbXBvcnQgeyBhbmRyb2lkIGFzIGFuZHJvaWRBcHAgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlL3BsYXRmb3JtJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcGFnZSc7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XG5cbmRlY2xhcmUgY29uc3QgYW5kcm9pZDogYW55O1xuXG5leHBvcnQgY2xhc3MgTWFpblZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGVCYXNlIHtcbiAgICBwcml2YXRlIHVwZGF0ZUludGVydmFsOiBhbnk7XG4gICAgcHJpdmF0ZSBzaGlmdEludGVydmFsOiBhbnk7XG4gICAgcHJpdmF0ZSBjdXJyZW50U2hpZnQgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICBwcml2YXRlIHNjcmVlbldpZHRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBzY3JlZW5IZWlnaHQ6IG51bWJlcjtcbiAgICBwcml2YXRlIGNvbnRhaW5lcldpZHRoOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY29udGFpbmVySGVpZ2h0OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcGFnZTogUGFnZTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEluaXRpYWxpemUgZGVmYXVsdCB2YWx1ZXNcbiAgICAgICAgdGhpcy5zZXQoJ3dlZWtkYXknLCAnJyk7XG4gICAgICAgIHRoaXMuc2V0KCdmdWxsRGF0ZScsICcnKTtcbiAgICAgICAgdGhpcy5zZXQoJ2ZvbnRTaXplJywgODApO1xuICAgICAgICB0aGlzLnNldCgnZm9udEZhbWlseScsICdzYW5zLXNlcmlmJyk7XG4gICAgICAgIHRoaXMuc2V0KCd0ZXh0U2hpZnRYJywgMCk7XG4gICAgICAgIHRoaXMuc2V0KCd0ZXh0U2hpZnRZJywgMCk7XG4gICAgICAgIFxuICAgICAgICAvLyBHZXQgc2NyZWVuIGRpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5zY3JlZW5XaWR0aCA9IFNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzO1xuICAgICAgICB0aGlzLnNjcmVlbkhlaWdodCA9IFNjcmVlbi5tYWluU2NyZWVuLmhlaWdodFBpeGVscztcbiAgICAgICAgXG4gICAgICAgIC8vIEluaXRpYWwgdXBkYXRlXG4gICAgICAgIHRoaXMudXBkYXRlRGF0ZVRpbWUoKTtcbiAgICAgICAgdGhpcy51cGRhdGVGb250U2V0dGluZ3MoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFNldCB1cCBwZXJpb2RpYyB1cGRhdGVzXG4gICAgICAgIHRoaXMudXBkYXRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnVwZGF0ZURhdGVUaW1lKCksIDEwMDApO1xuICAgICAgICBcbiAgICAgICAgLy8gQXBwbHkgc2V0dGluZ3NcbiAgICAgICAgdGhpcy5hcHBseVNldHRpbmdzKCk7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBpbml0aWFsaXplQ29udGFpbmVyKHBhZ2U6IFBhZ2UpIHtcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gcGFnZS5nZXRWaWV3QnlJZCgndGV4dENvbnRhaW5lcicpIGFzIFN0YWNrTGF5b3V0O1xuICAgICAgICBcbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgY29udGFpbmVyLm9uKCdsYXlvdXRDaGFuZ2VkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyV2lkdGggPSBjb250YWluZXIuZ2V0QWN0dWFsU2l6ZSgpLndpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVySGVpZ2h0ID0gY29udGFpbmVyLmdldEFjdHVhbFNpemUoKS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbnRhaW5lciBzaXplIHVwZGF0ZWQ6Jywge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5jb250YWluZXJXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmNvbnRhaW5lckhlaWdodFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIFJlc3RhcnQgdGV4dCBzaGlmdGluZyB3aXRoIG5ldyBib3VuZHNcbiAgICAgICAgICAgICAgICB0aGlzLnNldHVwVGV4dFNoaWZ0aW5nKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gU3RhcnQgdGV4dCBzaGlmdGluZyBpZiBlbmFibGVkXG4gICAgICAgIHRoaXMuc2V0dXBUZXh0U2hpZnRpbmcoKTtcbiAgICB9XG4gICAgXG4gICAgdXBkYXRlRGF0ZVRpbWUoKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCB3ZWVrZGF5cyA9IFsnRG9taW5nbycsICdTZWd1bmRhLWZlaXJhJywgJ1RlcsOnYS1mZWlyYScsICdRdWFydGEtZmVpcmEnLCAnUXVpbnRhLWZlaXJhJywgJ1NleHRhLWZlaXJhJywgJ1PDoWJhZG8nXTtcbiAgICAgICAgY29uc3QgbW9udGhzID0gWydKYW5laXJvJywgJ0ZldmVyZWlybycsICdNYXLDp28nLCAnQWJyaWwnLCAnTWFpbycsICdKdW5obycsICdKdWxobycsICdBZ29zdG8nLCAnU2V0ZW1icm8nLCAnT3V0dWJybycsICdOb3ZlbWJybycsICdEZXplbWJybyddO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgd2Vla2RheSA9IHdlZWtkYXlzW2RhdGUuZ2V0RGF5KCldO1xuICAgICAgICBjb25zdCBtb250aCA9IG1vbnRoc1tkYXRlLmdldE1vbnRoKCldO1xuICAgICAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2V0KCd3ZWVrZGF5Jywgd2Vla2RheSk7XG4gICAgICAgIHRoaXMuc2V0KCdmdWxsRGF0ZScsIGAke2RheX0gZGUgJHttb250aH0gZGUgJHt5ZWFyfWApO1xuICAgICAgICBcbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBuaWdodCB0aW1lIChiZXR3ZWVuIHN1bnNldCBhbmQgc3VucmlzZSlcbiAgICAgICAgLy8gU2ltcGxlIGFwcHJveGltYXRpb246IE5pZ2h0IGlzIGJldHdlZW4gMTg6MDAgKDYgUE0pIGFuZCA2OjAwICg2IEFNKVxuICAgICAgICBjb25zdCBob3VyID0gZGF0ZS5nZXRIb3VycygpO1xuICAgICAgICBjb25zdCBpc05pZ2h0VGltZSA9IGhvdXIgPj0gMTggfHwgaG91ciA8IDY7XG4gICAgICAgIFxuICAgICAgICBpZiAoYXBwU2V0dGluZ3MuZ2V0Qm9vbGVhbignYXV0b05pZ2h0TW9kZScsIGZhbHNlKSAmJiBpc05pZ2h0VGltZSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ3RleHRDb2xvcicsICcjODA4MDgwJyk7IC8vIERpbW1lZCB0ZXh0IGZvciBuaWdodCBtb2RlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldCgndGV4dENvbG9yJywgJyNGRkZGRkYnKTsgLy8gTm9ybWFsIHdoaXRlIHRleHRcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgdXBkYXRlRm9udFNldHRpbmdzKCkge1xuICAgICAgICBjb25zdCBmb250U2l6ZXMgPSBbODAsIDEyMF07XG4gICAgICAgIGNvbnN0IGZvbnRTdHlsZXMgPSBbJ3NhbnMtc2VyaWYnLCAnc2VyaWYnLCAnbW9ub3NwYWNlJ107XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzaXplSW5kZXggPSBhcHBTZXR0aW5ncy5nZXROdW1iZXIoJ2ZvbnRTaXplJywgMCk7IC8vIERlZmF1bHQgdG8gZmlyc3QgaW5kZXggKDgwcHgpXG4gICAgICAgIGNvbnN0IHN0eWxlSW5kZXggPSBhcHBTZXR0aW5ncy5nZXROdW1iZXIoJ2ZvbnRTdHlsZScsIDApO1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ1VwZGF0aW5nIGZvbnQgc2V0dGluZ3MgLSBpbml0aWFsOicsIHtcbiAgICAgICAgICAgIHNpemVJbmRleCxcbiAgICAgICAgICAgIGZvbnRTaXplcyxcbiAgICAgICAgICAgIGN1cnJlbnRGb250U2l6ZTogdGhpcy5nZXQoJ2ZvbnRTaXplJylcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyBFbnN1cmUgd2UgaGF2ZSB2YWxpZCBpbmRpY2VzXG4gICAgICAgIGNvbnN0IHNhZmVTaXplSW5kZXggPSBNYXRoLm1pbihNYXRoLm1heCgwLCBzaXplSW5kZXgpLCBmb250U2l6ZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgIGNvbnN0IHNhZmVTdHlsZUluZGV4ID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgc3R5bGVJbmRleCksIGZvbnRTdHlsZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBuZXdGb250U2l6ZSA9IGZvbnRTaXplc1tzYWZlU2l6ZUluZGV4XTtcbiAgICAgICAgY29uc3QgbmV3Rm9udEZhbWlseSA9IGZvbnRTdHlsZXNbc2FmZVN0eWxlSW5kZXhdO1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ1VwZGF0aW5nIGZvbnQgc2V0dGluZ3MgLSBmaW5hbDonLCB7IFxuICAgICAgICAgICAgc2l6ZUluZGV4LCBcbiAgICAgICAgICAgIHNhZmVTaXplSW5kZXgsIFxuICAgICAgICAgICAgbmV3Rm9udFNpemUsXG4gICAgICAgICAgICBmb250U2l6ZXMsXG4gICAgICAgICAgICBzZWxlY3RlZFNpemU6IGZvbnRTaXplc1tzYWZlU2l6ZUluZGV4XSxcbiAgICAgICAgICAgIGN1cnJlbnRGb250U2l6ZTogdGhpcy5nZXQoJ2ZvbnRTaXplJylcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyBVcGRhdGUgdGhlIGZvbnQgc2l6ZSBhbmQgZmFtaWx5XG4gICAgICAgIHRoaXMuc2V0KCdmb250U2l6ZScsIG5ld0ZvbnRTaXplKTtcbiAgICAgICAgdGhpcy5zZXQoJ2ZvbnRGYW1pbHknLCBuZXdGb250RmFtaWx5KTtcbiAgICAgICAgXG4gICAgICAgIC8vIFJlc3RhcnQgdGV4dCBzaGlmdGluZyBpZiBlbmFibGVkXG4gICAgICAgIGlmICh0aGlzLnNoaWZ0SW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zaGlmdEludGVydmFsKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dXBUZXh0U2hpZnRpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBvcGVuU2V0dGluZ3MoKSB7XG4gICAgICAgIEZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICBtb2R1bGVOYW1lOiAnc2V0dGluZ3MtcGFnZScsXG4gICAgICAgICAgICBhbmltYXRlZDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBhcHBseVNldHRpbmdzKCkge1xuICAgICAgICBpZiAoYW5kcm9pZEFwcCkge1xuICAgICAgICAgICAgY29uc3QgYWN0aXZpdHkgPSBhbmRyb2lkQXBwLnN0YXJ0QWN0aXZpdHkgfHwgYW5kcm9pZEFwcC5mb3JlZ3JvdW5kQWN0aXZpdHk7XG4gICAgICAgICAgICBpZiAoYWN0aXZpdHkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3aW5kb3cgPSBhY3Rpdml0eS5nZXRXaW5kb3coKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBBbHdheXMga2VlcCBzY3JlZW4gb25cbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRmxhZ3MoYW5kcm9pZC52aWV3LldpbmRvd01hbmFnZXIuTGF5b3V0UGFyYW1zLkZMQUdfS0VFUF9TQ1JFRU5fT04pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIEhpZGUgYWN0aW9uIGJhclxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbkJhciA9IGFjdGl2aXR5LmdldEFjdGlvbkJhcigpO1xuICAgICAgICAgICAgICAgIGlmIChhY3Rpb25CYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uQmFyLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gU2V0IGZ1bGxzY3JlZW4gZmxhZ3NcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRmxhZ3MoYW5kcm9pZC52aWV3LldpbmRvd01hbmFnZXIuTGF5b3V0UGFyYW1zLkZMQUdfRlVMTFNDUkVFTik7XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEZsYWdzKGFuZHJvaWQudmlldy5XaW5kb3dNYW5hZ2VyLkxheW91dFBhcmFtcy5GTEFHX0xBWU9VVF9OT19MSU1JVFMpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIEhpZGUgc3lzdGVtIFVJXG4gICAgICAgICAgICAgICAgY29uc3QgVmlldyA9IGFuZHJvaWQudmlldy5WaWV3O1xuICAgICAgICAgICAgICAgIGNvbnN0IGZsYWdzID0gVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfU1RBQkxFXG4gICAgICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfSElERV9OQVZJR0FUSU9OXG4gICAgICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfRlVMTFNDUkVFTlxuICAgICAgICAgICAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfSElERV9OQVZJR0FUSU9OXG4gICAgICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19GVUxMU0NSRUVOXG4gICAgICAgICAgICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19JTU1FUlNJVkVfU1RJQ0tZO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHdpbmRvdy5nZXREZWNvclZpZXcoKS5zZXRTeXN0ZW1VaVZpc2liaWxpdHkoZmxhZ3MpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIFNldCBibGFjayBiYWNrZ3JvdW5kXG4gICAgICAgICAgICAgICAgd2luZG93LnNldEJhY2tncm91bmREcmF3YWJsZShuZXcgYW5kcm9pZC5ncmFwaGljcy5kcmF3YWJsZS5Db2xvckRyYXdhYmxlKGFuZHJvaWQuZ3JhcGhpY3MuQ29sb3IuQkxBQ0spKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gVXBkYXRlIGZvbnQgc2V0dGluZ3NcbiAgICAgICAgdGhpcy51cGRhdGVGb250U2V0dGluZ3MoKTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBzZXR1cFRleHRTaGlmdGluZygpIHtcbiAgICAgICAgaWYgKGFwcFNldHRpbmdzLmdldEJvb2xlYW4oJ3RleHRTaGlmdGluZycsIHRydWUpKSB7XG4gICAgICAgICAgICBjb25zdCBmcmVxdWVuY3kgPSBhcHBTZXR0aW5ncy5nZXROdW1iZXIoJ3NoaWZ0RnJlcXVlbmN5JywgNjApICogMTAwMDsgLy8gQ29udmVydCB0byBtaWxsaXNlY29uZHNcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudFggPSBhcHBTZXR0aW5ncy5nZXROdW1iZXIoJ3NoaWZ0QW1vdW50WCcsIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudFkgPSBhcHBTZXR0aW5ncy5nZXROdW1iZXIoJ3NoaWZ0QW1vdW50WScsIDUpO1xuICAgICAgICAgICAgY29uc3QgZm9udFNpemUgPSB0aGlzLmdldCgnZm9udFNpemUnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NldHRpbmcgdXAgdGV4dCBzaGlmdGluZzonLCB7IFxuICAgICAgICAgICAgICAgIGZyZXF1ZW5jeSwgXG4gICAgICAgICAgICAgICAgYW1vdW50WCwgXG4gICAgICAgICAgICAgICAgYW1vdW50WSwgXG4gICAgICAgICAgICAgICAgZm9udFNpemUsXG4gICAgICAgICAgICAgICAgY29udGFpbmVyV2lkdGg6IHRoaXMuY29udGFpbmVyV2lkdGgsXG4gICAgICAgICAgICAgICAgY29udGFpbmVySGVpZ2h0OiB0aGlzLmNvbnRhaW5lckhlaWdodFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENsZWFyIGFueSBleGlzdGluZyBpbnRlcnZhbFxuICAgICAgICAgICAgaWYgKHRoaXMuc2hpZnRJbnRlcnZhbCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zaGlmdEludGVydmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gU2V0IHVwIG5ldyBpbnRlcnZhbFxuICAgICAgICAgICAgdGhpcy5zaGlmdEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIE9ubHkgcHJvY2VlZCBpZiB3ZSBoYXZlIHZhbGlkIGNvbnRhaW5lciBkaW1lbnNpb25zXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyV2lkdGggPD0gMCB8fCB0aGlzLmNvbnRhaW5lckhlaWdodCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb250YWluZXIgZGltZW5zaW9ucyBub3QgeWV0IGF2YWlsYWJsZScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHNhZmUgYm91bmRhcmllcyBiYXNlZCBvbiBmb250IHNpemUgYW5kIGNvbnRhaW5lciBkaW1lbnNpb25zXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dFdpZHRoID0gZm9udFNpemUgKiAxMjsgLy8gSW5jcmVhc2VkIHdpZHRoIG11bHRpcGxpZXIgZm9yIGxvbmdlciB0ZXh0XG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dEhlaWdodCA9IGZvbnRTaXplICogMi40OyAvLyBBY2NvdW50IGZvciBib3RoIGxhYmVscyAod2Vla2RheSBhbmQgZGF0ZSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgbWF4aW11bSBhbGxvd2VkIHNoaWZ0IHRvIGtlZXAgdGV4dCB3aXRoaW4gY29udGFpbmVyIGJvdW5kc1xuICAgICAgICAgICAgICAgIGNvbnN0IG1heFNoaWZ0WCA9IE1hdGgubWluKGFtb3VudFgsICh0aGlzLmNvbnRhaW5lcldpZHRoIC0gdGV4dFdpZHRoKSAvIDIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1heFNoaWZ0WSA9IE1hdGgubWluKGFtb3VudFksICh0aGlzLmNvbnRhaW5lckhlaWdodCAtIHRleHRIZWlnaHQpIC8gMik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gR2VuZXJhdGUgcmFuZG9tIGFuZ2xlIGJldHdlZW4gMCBhbmQgMs+AIChmdWxsIGNpcmNsZSlcbiAgICAgICAgICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAyICogTWF0aC5QSTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgcmFuZG9tIGRpc3RhbmNlIGZyb20gMCB0byBtYXggc2hpZnQgZm9yIHRoYXQgZGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB4IGFuZCB5IGNvbXBvbmVudHMgYmFzZWQgb24gYW5nbGUgYW5kIGRpc3RhbmNlXG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IE1hdGguY29zKGFuZ2xlKSAqIGRpc3RhbmNlICogbWF4U2hpZnRYO1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLnNpbihhbmdsZSkgKiBkaXN0YW5jZSAqIG1heFNoaWZ0WTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2hpZnRpbmcgdGV4dDonLCB7IFxuICAgICAgICAgICAgICAgICAgICB4LCBcbiAgICAgICAgICAgICAgICAgICAgeSxcbiAgICAgICAgICAgICAgICAgICAgYW5nbGU6IChhbmdsZSAqIDE4MCAvIE1hdGguUEkpLnRvRml4ZWQoMikgKyAnwrAnLFxuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSxcbiAgICAgICAgICAgICAgICAgICAgbWF4U2hpZnRYLFxuICAgICAgICAgICAgICAgICAgICBtYXhTaGlmdFksXG4gICAgICAgICAgICAgICAgICAgIHRleHRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgdGV4dEhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyV2lkdGg6IHRoaXMuY29udGFpbmVyV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckhlaWdodDogdGhpcy5jb250YWluZXJIZWlnaHRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnNldCgndGV4dFNoaWZ0WCcsIHgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KCd0ZXh0U2hpZnRZJywgeSk7XG4gICAgICAgICAgICB9LCBmcmVxdWVuY3kpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ3RleHRTaGlmdFgnLCAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0KCd0ZXh0U2hpZnRZJywgMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudXBkYXRlSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy51cGRhdGVJbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2hpZnRJbnRlcnZhbCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnNoaWZ0SW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IE5hdmlnYXRlZERhdGEgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcGFnZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3BhZ2UnO1xuaW1wb3J0IHsgU2V0dGluZ3NWaWV3TW9kZWwgfSBmcm9tICcuL3NldHRpbmdzLXZpZXctbW9kZWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IFNldHRpbmdzVmlld01vZGVsKCk7XG59IiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8UGFnZSB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0aW5nVG89XFxcIm9uTmF2aWdhdGluZ1RvXFxcIiBjbGFzcz1cXFwiYmctYmxhY2tcXFwiIGFjdGlvbkJhckhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxuICAgIDxTY3JvbGxWaWV3PlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTRcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJTZXR0aW5nc1xcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC0yeGwgbWItNFxcXCIvPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDwhLS0gRm9udCBTaXplIC0tPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJGb250IFNpemVcXFwiIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIG1iLTJcXFwiLz5cXG4gICAgICAgICAgICA8TGlzdFBpY2tlciBpdGVtcz1cXFwie3sgZm9udFNpemVzIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg9XFxcInt7IHNlbGVjdGVkRm9udFNpemVJbmRleCB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibWItNCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIHAtMlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cXFwiMTIwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcIndoaXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVxcXCJibGFja1xcXCIvPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDwhLS0gRm9udCBTdHlsZSAtLT5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRm9udCBTdHlsZVxcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgbWItMlxcXCIvPlxcbiAgICAgICAgICAgIDxMaXN0UGlja2VyIGl0ZW1zPVxcXCJ7eyBmb250U3R5bGVzIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg9XFxcInt7IHNlbGVjdGVkRm9udFN0eWxlSW5kZXggfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcIm1iLTQgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBwLTJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XFxcIjEyMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJ3aGl0ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cXFwiYmxhY2tcXFwiLz5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8IS0tIE5pZ2h0IE1vZGUgLS0+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIk5pZ2h0IE1vZGUgKFN1bnNldCB0byBEYXduKVxcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgbWItMlxcXCIvPlxcbiAgICAgICAgICAgIDxTd2l0Y2ggY2hlY2tlZD1cXFwie3sgYXV0b05pZ2h0TW9kZSB9fVxcXCIgY2xhc3M9XFxcIm1iLTRcXFwiLz5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8IS0tIFRleHQgUG9zaXRpb24gU2hpZnRpbmcgLS0+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlNoaWZ0IEludGVydmFsXFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSBtYi0yXFxcIi8+XFxuICAgICAgICAgICAgPExpc3RQaWNrZXIgaXRlbXM9XFxcInt7IHNoaWZ0SW50ZXJ2YWxzIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg9XFxcInt7IHNlbGVjdGVkU2hpZnRJbnRlcnZhbEluZGV4IH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJtYi00IHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgcC0yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVxcXCIxMjBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwid2hpdGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XFxcImJsYWNrXFxcIi8+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkhvcml6b250YWwgU2hpZnQgKHBpeGVscylcXFwiIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIG1iLTJcXFwiLz5cXG4gICAgICAgICAgICA8VGV4dEZpZWxkIHRleHQ9XFxcInt7IHNoaWZ0QW1vdW50WCB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cXFwibnVtYmVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICBoaW50PVxcXCJFbnRlciB2YWx1ZSAoMS0xMDApXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlPVxcXCJkb25lXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibWItNCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIHAtMlxcXCIvPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJWZXJ0aWNhbCBTaGlmdCAocGl4ZWxzKVxcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgbWItMlxcXCIvPlxcbiAgICAgICAgICAgIDxUZXh0RmllbGQgdGV4dD1cXFwie3sgc2hpZnRBbW91bnRZIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XFxcIkVudGVyIHZhbHVlICgxLTEwMClcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU9XFxcImRvbmVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJtYi00IHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgcC0yXFxcIi8+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPCEtLSBTYXZlIEJ1dHRvbiAtLT5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIlNhdmUgU2V0dGluZ3NcXFwiIFxcbiAgICAgICAgICAgICAgICAgICB0YXA9XFxcInt7IHNhdmVTZXR0aW5ncyB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy13aGl0ZSB0ZXh0LWJsYWNrIG10LTQgcC0zXFxcIi8+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L1Njcm9sbFZpZXc+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoKVxuXHQvLyBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge30pXG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSBhcyBPYnNlcnZhYmxlQmFzZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS9kYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgRnJhbWUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvdWkvZnJhbWUnO1xuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlL2FwcGxpY2F0aW9uLXNldHRpbmdzJztcblxuZXhwb3J0IGNsYXNzIFNldHRpbmdzVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZUJhc2Uge1xuICAgIHByaXZhdGUgX2ZvbnRTaXplcyA9IFs4MCwgMTIwXTtcbiAgICBwcml2YXRlIF9mb250U2l6ZXNUZXh0ID0gWyc4MHB4JywgJzEyMHB4J107XG4gICAgcHJpdmF0ZSBfZm9udFN0eWxlcyA9IFsnc2Fucy1zZXJpZicsICdzZXJpZicsICdtb25vc3BhY2UnXTtcbiAgICBwcml2YXRlIF9zaGlmdEludGVydmFscyA9IFsnMyBzZWd1bmRvcycsICcxIG1pbnV0bycsICc1IG1pbnV0b3MnLCAnMTAgbWludXRvcyddO1xuICAgIHByaXZhdGUgX3NoaWZ0SW50ZXJ2YWxWYWx1ZXMgPSBbMywgNjAsIDMwMCwgNjAwXTsgLy8gVmFsdWVzIGluIHNlY29uZHNcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFNldCBvYnNlcnZhYmxlIHByb3BlcnRpZXNcbiAgICAgICAgdGhpcy5zZXQoJ2ZvbnRTaXplcycsIHRoaXMuX2ZvbnRTaXplc1RleHQpO1xuICAgICAgICB0aGlzLnNldCgnZm9udFN0eWxlcycsIHRoaXMuX2ZvbnRTdHlsZXMpO1xuICAgICAgICB0aGlzLnNldCgnc2hpZnRJbnRlcnZhbHMnLCB0aGlzLl9zaGlmdEludGVydmFscyk7XG4gICAgICAgIFxuICAgICAgICAvLyBMb2FkIHNhdmVkIHNldHRpbmdzXG4gICAgICAgIHRoaXMubG9hZFNldHRpbmdzKCk7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBsb2FkU2V0dGluZ3MoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2FkaW5nIHNldHRpbmdzLi4uJyk7XG4gICAgICAgIFxuICAgICAgICAvLyBMb2FkIGZvbnQgc2V0dGluZ3NcbiAgICAgICAgY29uc3Qgc2F2ZWRGb250U2l6ZSA9IGFwcFNldHRpbmdzLmdldE51bWJlcignZm9udFNpemUnLCAwKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0xvYWRpbmcgZm9udCBzaXplOicsIHtcbiAgICAgICAgICAgIHNhdmVkSW5kZXg6IHNhdmVkRm9udFNpemUsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5fZm9udFNpemVzW3NhdmVkRm9udFNpemVdLFxuICAgICAgICAgICAgdGV4dDogdGhpcy5fZm9udFNpemVzVGV4dFtzYXZlZEZvbnRTaXplXVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIEVuc3VyZSB3ZSBoYXZlIHZhbGlkIGluZGljZXNcbiAgICAgICAgY29uc3Qgc2FmZUZvbnRTaXplSW5kZXggPSBNYXRoLm1pbihNYXRoLm1heCgwLCBzYXZlZEZvbnRTaXplKSwgdGhpcy5fZm9udFNpemVzLmxlbmd0aCAtIDEpO1xuICAgICAgICB0aGlzLnNldCgnc2VsZWN0ZWRGb250U2l6ZUluZGV4Jywgc2FmZUZvbnRTaXplSW5kZXgpO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgc2F2ZWRGb250U3R5bGUgPSBhcHBTZXR0aW5ncy5nZXROdW1iZXIoJ2ZvbnRTdHlsZScsIDApO1xuICAgICAgICBjb25zdCBzYWZlRm9udFN0eWxlSW5kZXggPSBNYXRoLm1pbihNYXRoLm1heCgwLCBzYXZlZEZvbnRTdHlsZSksIHRoaXMuX2ZvbnRTdHlsZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgIHRoaXMuc2V0KCdzZWxlY3RlZEZvbnRTdHlsZUluZGV4Jywgc2FmZUZvbnRTdHlsZUluZGV4KTtcbiAgICAgICAgXG4gICAgICAgIC8vIExvYWQgbmlnaHQgbW9kZSBzZXR0aW5nXG4gICAgICAgIHRoaXMuc2V0KCdhdXRvTmlnaHRNb2RlJywgYXBwU2V0dGluZ3MuZ2V0Qm9vbGVhbignYXV0b05pZ2h0TW9kZScsIGZhbHNlKSk7XG4gICAgICAgIFxuICAgICAgICAvLyBMb2FkIHRleHQgc2hpZnRpbmcgc2V0dGluZ3NcbiAgICAgICAgdGhpcy5zZXQoJ3RleHRTaGlmdGluZycsIGFwcFNldHRpbmdzLmdldEJvb2xlYW4oJ3RleHRTaGlmdGluZycsIHRydWUpKTtcbiAgICAgICAgdGhpcy5zZXQoJ3NlbGVjdGVkU2hpZnRJbnRlcnZhbEluZGV4JywgYXBwU2V0dGluZ3MuZ2V0TnVtYmVyKCdzaGlmdEludGVydmFsSW5kZXgnLCAxKSk7XG4gICAgICAgIHRoaXMuc2V0KCdzaGlmdEFtb3VudFgnLCBhcHBTZXR0aW5ncy5nZXROdW1iZXIoJ3NoaWZ0QW1vdW50WCcsIDEwKSk7XG4gICAgICAgIHRoaXMuc2V0KCdzaGlmdEFtb3VudFknLCBhcHBTZXR0aW5ncy5nZXROdW1iZXIoJ3NoaWZ0QW1vdW50WScsIDUpKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdTZXR0aW5ncyBsb2FkZWQ6Jywge1xuICAgICAgICAgICAgZm9udFNpemU6IHtcbiAgICAgICAgICAgICAgICBpbmRleDogc2FmZUZvbnRTaXplSW5kZXgsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuX2ZvbnRTaXplc1tzYWZlRm9udFNpemVJbmRleF0sXG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5fZm9udFNpemVzVGV4dFtzYWZlRm9udFNpemVJbmRleF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb250U3R5bGU6IHtcbiAgICAgICAgICAgICAgICBpbmRleDogc2FmZUZvbnRTdHlsZUluZGV4LFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLl9mb250U3R5bGVzW3NhZmVGb250U3R5bGVJbmRleF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdXRvTmlnaHRNb2RlOiB0aGlzLmdldCgnYXV0b05pZ2h0TW9kZScpLFxuICAgICAgICAgICAgdGV4dFNoaWZ0aW5nOiB0aGlzLmdldCgndGV4dFNoaWZ0aW5nJyksXG4gICAgICAgICAgICBzaGlmdEludGVydmFsOiB7XG4gICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuZ2V0KCdzZWxlY3RlZFNoaWZ0SW50ZXJ2YWxJbmRleCcpLFxuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuX3NoaWZ0SW50ZXJ2YWxzW3RoaXMuZ2V0KCdzZWxlY3RlZFNoaWZ0SW50ZXJ2YWxJbmRleCcpXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNoaWZ0QW1vdW50WDogdGhpcy5nZXQoJ3NoaWZ0QW1vdW50WCcpLFxuICAgICAgICAgICAgc2hpZnRBbW91bnRZOiB0aGlzLmdldCgnc2hpZnRBbW91bnRZJylcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNhdmVTZXR0aW5ncygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1NhdmluZyBzZXR0aW5ncy4uLicpO1xuICAgICAgICBcbiAgICAgICAgLy8gU2F2ZSBmb250IHNldHRpbmdzXG4gICAgICAgIGNvbnN0IGZvbnRTaXplSW5kZXggPSB0aGlzLmdldCgnc2VsZWN0ZWRGb250U2l6ZUluZGV4Jyk7XG4gICAgICAgIGNvbnN0IHNhZmVGb250U2l6ZUluZGV4ID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgZm9udFNpemVJbmRleCksIHRoaXMuX2ZvbnRTaXplcy5sZW5ndGggLSAxKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdTYXZpbmcgZm9udCBzaXplOicsIHtcbiAgICAgICAgICAgIHJlcXVlc3RlZEluZGV4OiBmb250U2l6ZUluZGV4LFxuICAgICAgICAgICAgc2FmZUluZGV4OiBzYWZlRm9udFNpemVJbmRleCxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLl9mb250U2l6ZXNbc2FmZUZvbnRTaXplSW5kZXhdLFxuICAgICAgICAgICAgdGV4dDogdGhpcy5fZm9udFNpemVzVGV4dFtzYWZlRm9udFNpemVJbmRleF1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBhcHBTZXR0aW5ncy5zZXROdW1iZXIoJ2ZvbnRTaXplJywgc2FmZUZvbnRTaXplSW5kZXgpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZm9udFN0eWxlSW5kZXggPSB0aGlzLmdldCgnc2VsZWN0ZWRGb250U3R5bGVJbmRleCcpO1xuICAgICAgICBjb25zdCBzYWZlRm9udFN0eWxlSW5kZXggPSBNYXRoLm1pbihNYXRoLm1heCgwLCBmb250U3R5bGVJbmRleCksIHRoaXMuX2ZvbnRTdHlsZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgIGFwcFNldHRpbmdzLnNldE51bWJlcignZm9udFN0eWxlJywgc2FmZUZvbnRTdHlsZUluZGV4KTtcbiAgICAgICAgXG4gICAgICAgIC8vIFNhdmUgbmlnaHQgbW9kZSBzZXR0aW5nXG4gICAgICAgIGNvbnN0IGF1dG9OaWdodE1vZGUgPSB0aGlzLmdldCgnYXV0b05pZ2h0TW9kZScpO1xuICAgICAgICBhcHBTZXR0aW5ncy5zZXRCb29sZWFuKCdhdXRvTmlnaHRNb2RlJywgYXV0b05pZ2h0TW9kZSk7XG4gICAgICAgIFxuICAgICAgICAvLyBTYXZlIHRleHQgc2hpZnRpbmcgc2V0dGluZ3NcbiAgICAgICAgY29uc3QgdGV4dFNoaWZ0aW5nID0gdGhpcy5nZXQoJ3RleHRTaGlmdGluZycpO1xuICAgICAgICBhcHBTZXR0aW5ncy5zZXRCb29sZWFuKCd0ZXh0U2hpZnRpbmcnLCB0ZXh0U2hpZnRpbmcpO1xuXG4gICAgICAgIGNvbnN0IGludGVydmFsSW5kZXggPSB0aGlzLmdldCgnc2VsZWN0ZWRTaGlmdEludGVydmFsSW5kZXgnKTtcbiAgICAgICAgY29uc3Qgc2FmZUludGVydmFsSW5kZXggPSBNYXRoLm1pbihNYXRoLm1heCgwLCBpbnRlcnZhbEluZGV4KSwgdGhpcy5fc2hpZnRJbnRlcnZhbFZhbHVlcy5sZW5ndGggLSAxKTtcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0TnVtYmVyKCdzaGlmdEludGVydmFsSW5kZXgnLCBzYWZlSW50ZXJ2YWxJbmRleCk7XG4gICAgICAgIGFwcFNldHRpbmdzLnNldE51bWJlcignc2hpZnRGcmVxdWVuY3knLCB0aGlzLl9zaGlmdEludGVydmFsVmFsdWVzW3NhZmVJbnRlcnZhbEluZGV4XSk7XG5cbiAgICAgICAgY29uc3Qgc2hpZnRBbW91bnRYID0gcGFyc2VJbnQodGhpcy5nZXQoJ3NoaWZ0QW1vdW50WCcpLCAxMCk7XG4gICAgICAgIGNvbnN0IHZhbGlkU2hpZnRBbW91bnRYID0gaXNOYU4oc2hpZnRBbW91bnRYKSA/IDEwIDogTWF0aC5tYXgoMSwgTWF0aC5taW4oMTAwLCBzaGlmdEFtb3VudFgpKTtcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0TnVtYmVyKCdzaGlmdEFtb3VudFgnLCB2YWxpZFNoaWZ0QW1vdW50WCk7XG5cbiAgICAgICAgY29uc3Qgc2hpZnRBbW91bnRZID0gcGFyc2VJbnQodGhpcy5nZXQoJ3NoaWZ0QW1vdW50WScpLCAxMCk7XG4gICAgICAgIGNvbnN0IHZhbGlkU2hpZnRBbW91bnRZID0gaXNOYU4oc2hpZnRBbW91bnRZKSA/IDUgOiBNYXRoLm1heCgxLCBNYXRoLm1pbigxMDAsIHNoaWZ0QW1vdW50WSkpO1xuICAgICAgICBhcHBTZXR0aW5ncy5zZXROdW1iZXIoJ3NoaWZ0QW1vdW50WScsIHZhbGlkU2hpZnRBbW91bnRZKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnU2V0dGluZ3Mgc2F2ZWQ6Jywge1xuICAgICAgICAgICAgZm9udFNpemU6IHtcbiAgICAgICAgICAgICAgICBpbmRleDogc2FmZUZvbnRTaXplSW5kZXgsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuX2ZvbnRTaXplc1tzYWZlRm9udFNpemVJbmRleF0sXG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5fZm9udFNpemVzVGV4dFtzYWZlRm9udFNpemVJbmRleF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb250U3R5bGU6IHtcbiAgICAgICAgICAgICAgICBpbmRleDogc2FmZUZvbnRTdHlsZUluZGV4LFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLl9mb250U3R5bGVzW3NhZmVGb250U3R5bGVJbmRleF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdXRvTmlnaHRNb2RlLFxuICAgICAgICAgICAgdGV4dFNoaWZ0aW5nLFxuICAgICAgICAgICAgc2hpZnRJbnRlcnZhbDoge1xuICAgICAgICAgICAgICAgIGluZGV4OiBzYWZlSW50ZXJ2YWxJbmRleCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5fc2hpZnRJbnRlcnZhbFZhbHVlc1tzYWZlSW50ZXJ2YWxJbmRleF0sXG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5fc2hpZnRJbnRlcnZhbHNbc2FmZUludGVydmFsSW5kZXhdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hpZnRBbW91bnRYOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IHRoaXMuZ2V0KCdzaGlmdEFtb3VudFgnKSxcbiAgICAgICAgICAgICAgICBmaW5hbDogdmFsaWRTaGlmdEFtb3VudFhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaGlmdEFtb3VudFk6IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogdGhpcy5nZXQoJ3NoaWZ0QW1vdW50WScpLFxuICAgICAgICAgICAgICAgIGZpbmFsOiB2YWxpZFNoaWZ0QW1vdW50WVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBOYXZpZ2F0ZSBiYWNrIHRvIG1haW4gcGFnZVxuICAgICAgICBGcmFtZS50b3Btb3N0KCkuZ29CYWNrKCk7XG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIn4vcGFja2FnZS5qc29uXCIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==