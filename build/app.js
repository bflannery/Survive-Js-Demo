webpackJsonp([1],{

/***/ 16:
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_font_awesome_css_font_awesome_css__ = __webpack_require__(/*! font-awesome/css/font-awesome.css */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_font_awesome_css_font_awesome_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_font_awesome_css_font_awesome_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_purecss__ = __webpack_require__(/*! purecss */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_purecss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_purecss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_css__ = __webpack_require__(/*! ./main.css */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__main_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component__ = __webpack_require__(/*! ./component */ 6);






document.body.appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__component__["a" /* default */])());

/***/ }),

/***/ 6:
/* exports provided: default */
/* exports used: default */
/*!**************************!*\
  !*** ./app/component.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// export default (text = 'Hello world') => {
//   const element = document.createElement('div');
//
//   element.className = 'fa fa-hand-spock-o fa-1g';
//   element.innerHTML = text;
//   element.onclick = () => {
//     import('./lazy').then((lazy) => {
//       element.textContent = lazy.default;
//     }).catch((err) => {
//       console.error(err);
//     });
//   };
//
//   return element;
// };


/* harmony default export */ __webpack_exports__["a"] = function () {
  var element = document.createElement('div');
  element.className = 'pure-button';
  element.innerHTML = 'Hello world';
  element.onclick = function () {
    __webpack_require__.e/* require.ensure */(0).then((function (require) {
      element.textContent = __webpack_require__(/*! ./lazy */ 17).default;
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  };
  return element;
};

/***/ }),

/***/ 7:
/* unknown exports provided */
/*!*********************************************!*\
  !*** ./~/font-awesome/css/font-awesome.css ***!
  \*********************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 8:
/* unknown exports provided */
/*!**********************!*\
  !*** ./app/main.css ***!
  \**********************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 9:
/* unknown exports provided */
/*!**************************************!*\
  !*** ./~/purecss/build/pure-min.css ***!
  \**************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[16]);
//# sourceMappingURL=app.js.map