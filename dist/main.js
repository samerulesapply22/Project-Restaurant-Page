/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _startpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startpage */ \"./src/startpage.js\");\n\n\nconst container = document.querySelector('#container');\n(0,_startpage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(container);\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/startpage.js":
/*!**************************!*\
  !*** ./src/startpage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_fonts_disintergation_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images&fonts/disintergation.jpeg */ \"./src/images&fonts/disintergation.jpeg\");\n/* harmony import */ var _images_fonts_the_head_on_the_door_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images&fonts/the head on the door.jpeg */ \"./src/images&fonts/the head on the door.jpeg\");\n\n\n\nfunction startPage(container) {\n\n    const container1 = document.createElement('div');\n    const div1 = document.createElement('div');\n    const title = document.createElement('div');\n    const imageholder1 = document.createElement('div');\n    const imageholder2 = document.createElement('div');\n\n    const disintergation = new Image();\n    disintergation.src = _images_fonts_disintergation_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n    const headonthedoor = new Image();\n    headonthedoor.src = _images_fonts_the_head_on_the_door_jpeg__WEBPACK_IMPORTED_MODULE_1__;\n    \n    container.append(container1);\n    container1.append(div1);\n    div1.append(title);\n    div1.append (imageholder1);\n    container1.append(imageholder2);\n    imageholder1.append(headonthedoor);\n    imageholder2.append(disintergation);\n\n    container1.id = 'container1';\n    div1.id = 'div1'\n    title.id = 'title';\n    imageholder1.id =  'imageholder1';\n    imageholder2.id = 'imageholder2';\n\n    title.textContent = 'THE CURE';\n    return container1;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startPage);\n\n//# sourceURL=webpack://project-restaurant-page/./src/startpage.js?");

/***/ }),

/***/ "./src/images&fonts/disintergation.jpeg":
/*!**********************************************!*\
  !*** ./src/images&fonts/disintergation.jpeg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"53e3ef1fef8306f44db1.jpeg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/images&fonts/disintergation.jpeg?");

/***/ }),

/***/ "./src/images&fonts/the head on the door.jpeg":
/*!****************************************************!*\
  !*** ./src/images&fonts/the head on the door.jpeg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4b7de8b5978c0cd403b6.jpeg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/images&fonts/the_head_on_the_door.jpeg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;