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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction about(container) {\n    const about = document.createElement('div');\n    const aboutTitle = document.createElement('div');\n    const aboutContainer = document.createElement('div');\n    const aboutDescription = document.createElement('div');\n    const aboutStaff = document.createElement('div');\n\n    about.id = 'about';\n    aboutTitle.id = 'aboutTitle';\n    aboutContainer.id = 'aboutContainer';\n    aboutDescription.id = 'aboutDescription';\n    aboutStaff.id = 'aboutStaff';\n\n    container.append(about);\n    about.append(aboutTitle);\n    about.append(aboutContainer);\n    aboutContainer.append(aboutDescription);\n    aboutContainer.append(aboutStaff);\n    \n    aboutTitle.textContent = 'ABOUT'\n    aboutDescription.textContent = 'A waffle is a dish made from leavened batter or dough that is cooked between two plates that are patterned to give a characteristic size, shape, and surface impression. There are many variations based on the type of waffle iron and recipe used. Waffles are eaten throughout the world, particularly in Belgium, which has over a dozen regional varieties. Waffles may be made fresh or simply heated after having been commercially cooked and frozen.';\n    aboutStaff.innerHTML = '<b>Robert Smith</b>  Chef Founder\\r\\n';\n    aboutStaff.innerHTML += '<b>Simon Gallup</b>  General Manager\\r\\n';\n    aboutStaff.innerHTML += '<b>Roger O\\'Donnel</b>  Second Chef\\r\\n';\n    aboutStaff.innerHTML += '<b>Perry Bamonte</b>  Dough Chef\\r\\n';\n    aboutStaff.innerHTML += '<b>Reeves Gabrels</b>  Topings Manager\\r\\n';\n    \n\n    return about;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n//# sourceURL=webpack://project-restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction header(container) {\n    const header = document.createElement('div');\n    const links = document.createElement('div');\n    const signin = document.createElement('div');\n    const home = document.createElement('div');\n    const menu = document.createElement('div');\n    const about = document.createElement('div');\n    const reviews = document.createElement('div');\n\n    header.id = 'header';\n    links.id = 'links'; \n    signin.id = 'signin';\n    home.className = 'links';\n    menu.className = 'links';\n    about.className = 'links';\n    reviews.className = 'links';\n\n    container.append(header);\n    header.append(links);\n    header.append(signin);\n    links.append(home);\n    links.append(menu);\n    links.append(about);\n    links.append(reviews);\n\n    signin.textContent = 'SIGN IN';\n    home.textContent = 'Home';\n    menu.textContent = 'Menu';\n    about.textContent = 'About';\n    reviews.textContent = 'Reviews';\n\n    return header;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://project-restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_fonts_waffles_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images&fonts/waffles.jpg */ \"./src/images&fonts/waffles.jpg\");\n\n\nfunction home(container) {\n    const home = document.createElement('div');\n    const div2 = document.createElement('div');\n    const title =  document.createElement('div');\n    const ordernow = document.createElement('button');\n\n    const waffles = new Image();\n    waffles.src = _images_fonts_waffles_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    waffles.id = 'wafflesImg';\n    div2.id = 'div2'\n    title.id = 'title';\n    ordernow.id = 'ordernow'\n\n    container.append(home);\n    home.append(waffles);\n    home.append(div2);\n    div2.append(title);\n    div2.append(ordernow);\n\n    title.textContent = 'Let there be brunch.';\n    ordernow.textContent = 'ORDER NOW';\n\n    return home;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://project-restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n\n\nconst container = document.querySelector('#container');\n(0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(container);\n(0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(container);\n(0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(container)\n;(0,_about__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(container)\n\n\n\n//reviews\n//order\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_fonts_waffle_menu_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images&fonts/waffle-menu.png */ \"./src/images&fonts/waffle-menu.png\");\n\n\nfunction menu(container) {\n    const menu = document.createElement('div');\n    const menuTitle = document.createElement('div');\n    const menuContents = document.createElement('div');\n    menu.id = 'menu';\n    menuTitle.id = 'menuTitle';\n    menuContents.id = 'menuContents';\n    container.append(menu);\n    menu.append(menuTitle);\n    menu.append(menuContents);\n    menuTitle.textContent = 'MENU';\n\n    const menuContent = [];\n    const menuImage = [];\n    const waffleTitle = [];\n    const waffleDescription = [];\n    const waffleOrder = [];\n    for (let i = 0; i < 4; i++) {\n        menuContent[i] = document.createElement('div');\n        menuContent[i].className = 'menuContent';\n        menuContents.append(menuContent[i]);\n\n        menuImage[i] = new Image();\n        menuImage[i].className = 'menuImage';\n        menuImage[i].src = _images_fonts_waffle_menu_png__WEBPACK_IMPORTED_MODULE_0__;\n        menuContent[i].append(menuImage[i]);\n        \n        waffleTitle[i] = document.createElement('div');\n        waffleTitle[i].className = 'waffleTitle';\n        waffleTitle[i].textContent = 'WAFFLE ' + (i+1);\n        menuContent[i].append(waffleTitle[i]);\n\n        waffleDescription[i] = document.createElement('div');\n        waffleDescription[i].className = 'waffleDescription';\n        waffleDescription[i].textContent = 'a leavened batter or dough cooked between two hot plates of a waffle iron, patterned to give a characteristic size, shape, and grid-like surface impression'\n        menuContent[i].append(waffleDescription[i]);\n\n        waffleOrder[i] = document.createElement('button');\n        waffleOrder[i].className = 'waffleOrder';\n        waffleOrder[i].textContent = 'Order now';\n        menuContent[i].append(waffleOrder[i]);\n    }\n\n    return menu;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://project-restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/images&fonts/waffle-menu.png":
/*!******************************************!*\
  !*** ./src/images&fonts/waffle-menu.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6a9397cdb2f026ebe9f2.png\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/images&fonts/waffle-menu.png?");

/***/ }),

/***/ "./src/images&fonts/waffles.jpg":
/*!**************************************!*\
  !*** ./src/images&fonts/waffles.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d093005bb7576317962f.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/images&fonts/waffles.jpg?");

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