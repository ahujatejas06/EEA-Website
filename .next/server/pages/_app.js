/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config/config.json */ \"./config/config.json\");\n/* harmony import */ var _config_theme_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/theme.json */ \"./config/theme.json\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-gtm-module */ \"react-gtm-module\");\n/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styles_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles/style.scss */ \"./styles/style.scss\");\n/* harmony import */ var styles_style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styles_style_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst App = ({ Component , pageProps  })=>{\n    // default theme setup\n    // import google font css\n    const pf = _config_theme_json__WEBPACK_IMPORTED_MODULE_2__.fonts.font_family.primary;\n    const sf = _config_theme_json__WEBPACK_IMPORTED_MODULE_2__.fonts.font_family.secondary;\n    const [fontcss, setFontcss] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        fetch(`https://fonts.googleapis.com/css2?family=${pf}${sf ? \"&family=\" + sf : \"\"}&display=swap`).then((res)=>res.text().then((css)=>setFontcss(css)));\n    }, [\n        pf,\n        sf\n    ]);\n    // google tag manager (gtm)\n    const tagManagerArgs = {\n        gtmId: _config_config_json__WEBPACK_IMPORTED_MODULE_1__.params.tag_manager_id\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setTimeout(()=>{\n             false && 0;\n        }, 5000);\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossOrigin: \"true\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rishipoonia/Downloads/UTH/EEA-Website/pages/_app.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n                        dangerouslySetInnerHTML: {\n                            __html: `${fontcss}`\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/rishipoonia/Downloads/UTH/EEA-Website/pages/_app.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1, maximum-scale=5\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rishipoonia/Downloads/UTH/EEA-Website/pages/_app.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rishipoonia/Downloads/UTH/EEA-Website/pages/_app.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/rishipoonia/Downloads/UTH/EEA-Website/pages/_app.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF5QztBQUNGO0FBQ1Y7QUFDZTtBQUNGO0FBQ2Y7QUFFM0IsTUFBTU0sTUFBTSxDQUFDLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEdBQUs7SUFDeEMsc0JBQXNCO0lBRXRCLHlCQUF5QjtJQUN6QixNQUFNQyxLQUFLUix5RUFBK0I7SUFDMUMsTUFBTVksS0FBS1osMkVBQWlDO0lBQzVDLE1BQU0sQ0FBQ2MsU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUE7SUFDdENELGdEQUFTQSxDQUFDLElBQU07UUFDZGMsTUFDRSxDQUFDLHlDQUF5QyxFQUFFUixHQUFHLEVBQzdDSSxLQUFLLGFBQWFBLEtBQUssRUFBRSxDQUMxQixhQUFhLENBQUMsRUFDZkssSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksR0FBR0YsSUFBSSxDQUFDLENBQUNHLE1BQVFMLFdBQVdLO0lBQ3RELEdBQUc7UUFBQ1o7UUFBSUk7S0FBRztJQUVYLDJCQUEyQjtJQUMzQixNQUFNUyxpQkFBaUI7UUFDckJDLE9BQU92QixzRUFBNEI7SUFDckM7SUFDQUcsZ0RBQVNBLENBQUMsSUFBTTtRQUNkdUIsV0FBVyxJQUFNO1lBQ2ZDLE1BQzhCLElBQzVCdEIsQ0FBcUNpQjtRQUN6QyxHQUFHO0lBQ0gsdURBQXVEO0lBQ3pELEdBQUcsRUFBRTtJQUVMLHFCQUNFOzswQkFDRSw4REFBQ3BCLGtEQUFJQTs7a0NBRUgsOERBQUM2Qjt3QkFDQ0MsS0FBSTt3QkFDSkMsTUFBSzt3QkFDTEMsYUFBWTs7Ozs7O2tDQUVkLDhEQUFDQzt3QkFDQ0MseUJBQXlCOzRCQUN2QkMsUUFBUSxDQUFDLEVBQUV0QixRQUFRLENBQUM7d0JBQ3RCOzs7Ozs7a0NBR0YsOERBQUN1Qjt3QkFDQ0MsTUFBSzt3QkFDTEMsU0FBUTs7Ozs7Ozs7Ozs7OzBCQUdaLDhEQUFDakM7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ3NwcmluZy1saWdodC1uZXh0anMvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tIFwiQGNvbmZpZy9jb25maWcuanNvblwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCJAY29uZmlnL3RoZW1lLmpzb25cIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUYWdNYW5hZ2VyIGZyb20gXCJyZWFjdC1ndG0tbW9kdWxlXCI7XG5pbXBvcnQgXCJzdHlsZXMvc3R5bGUuc2Nzc1wiO1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIC8vIGRlZmF1bHQgdGhlbWUgc2V0dXBcblxuICAvLyBpbXBvcnQgZ29vZ2xlIGZvbnQgY3NzXG4gIGNvbnN0IHBmID0gdGhlbWUuZm9udHMuZm9udF9mYW1pbHkucHJpbWFyeTtcbiAgY29uc3Qgc2YgPSB0aGVtZS5mb250cy5mb250X2ZhbWlseS5zZWNvbmRhcnk7XG4gIGNvbnN0IFtmb250Y3NzLCBzZXRGb250Y3NzXSA9IHVzZVN0YXRlKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT0ke3BmfSR7XG4gICAgICAgIHNmID8gXCImZmFtaWx5PVwiICsgc2YgOiBcIlwiXG4gICAgICB9JmRpc3BsYXk9c3dhcGBcbiAgICApLnRoZW4oKHJlcykgPT4gcmVzLnRleHQoKS50aGVuKChjc3MpID0+IHNldEZvbnRjc3MoY3NzKSkpO1xuICB9LCBbcGYsIHNmXSk7XG5cbiAgLy8gZ29vZ2xlIHRhZyBtYW5hZ2VyIChndG0pXG4gIGNvbnN0IHRhZ01hbmFnZXJBcmdzID0ge1xuICAgIGd0bUlkOiBjb25maWcucGFyYW1zLnRhZ19tYW5hZ2VyX2lkLFxuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgIGNvbmZpZy5wYXJhbXMudGFnX21hbmFnZXJfaWQgJiZcbiAgICAgICAgVGFnTWFuYWdlci5pbml0aWFsaXplKHRhZ01hbmFnZXJBcmdzKTtcbiAgICB9LCA1MDAwKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgey8qIGdvb2dsZSBmb250IGNzcyAqL31cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJwcmVjb25uZWN0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJ0cnVlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHN0eWxlXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgIF9faHRtbDogYCR7Zm9udGNzc31gLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIHsvKiByZXNwb25zaXZlIG1ldGEgKi99XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIG1heGltdW0tc2NhbGU9NVwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiY29uZmlnIiwidGhlbWUiLCJIZWFkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUYWdNYW5hZ2VyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicGYiLCJmb250cyIsImZvbnRfZmFtaWx5IiwicHJpbWFyeSIsInNmIiwic2Vjb25kYXJ5IiwiZm9udGNzcyIsInNldEZvbnRjc3MiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJ0ZXh0IiwiY3NzIiwidGFnTWFuYWdlckFyZ3MiLCJndG1JZCIsInBhcmFtcyIsInRhZ19tYW5hZ2VyX2lkIiwic2V0VGltZW91dCIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImluaXRpYWxpemUiLCJsaW5rIiwicmVsIiwiaHJlZiIsImNyb3NzT3JpZ2luIiwic3R5bGUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIm1ldGEiLCJuYW1lIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-gtm-module":
/*!***********************************!*\
  !*** external "react-gtm-module" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-gtm-module");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./config/config.json":
/*!****************************!*\
  !*** ./config/config.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"site":{"title":"Electrical Engineers\' Association | EEA","base_url":"/","favicon":"/images/favicon.png","logo":"/images/logo.png","logo_width":"200","logo_height":"48","logo_text":"EEA"},"settings":{"pagination":4,"summary_length":200,"events_folder":"/events","content_folder":"/content","content_pagination":5},"nav_button":{"enable":true,"label":"Get Started","link":"/contact"},"params":{"contact_form_action":"","tag_manager_id":"","copyright":"Designed and Developed By The EEA Team"},"metadata":{"meta_author":"Electrical Engineering Association","meta_image":"","meta_description":"EEA Website"}}');

/***/ }),

/***/ "./config/theme.json":
/*!***************************!*\
  !*** ./config/theme.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"colors":{"default":{"theme_color":{"primary":"#0aa8a7","body":"#fff","border":"#e9e9e9","theme_light":"#edf6f5"},"text_color":{"default":"#777","dark":"#222"}}},"fonts":{"font_family":{"primary":"Lato:wght@300;400;700","primary_type":"sans-serif"},"font_size":{"base":"16","scale":"1.250"}}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();