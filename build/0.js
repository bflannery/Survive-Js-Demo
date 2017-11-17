/*! a5f89c8 */
webpackJsonp([0],{

/***/ 17:
/* exports provided: default */
/* all exports used */
/*!*********************!*\
  !*** ./app/lazy.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lazy_css__ = __webpack_require__(/*! ./lazy.css */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lazy_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lazy_css__);


/* harmony default export */ __webpack_exports__["default"] = 'Hello from lazy';

/***/ }),

/***/ 20:
/* unknown exports provided */
/* all exports used */
/*!*************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader/lib?{"plugins":[null]}!./~/postcss-loader/lib?{"plugins":[null]}!./app/lazy.css ***!
  \*************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../~/css-loader/lib/css-base.js */ 18)(undefined);
// imports


// module
exports.push([module.i, "body {\n    color: blue;\n}\n", ""]);

// exports


/***/ }),

/***/ 21:
/* unknown exports provided */
/*!**********************!*\
  !*** ./app/lazy.css ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../~/css-loader!../~/postcss-loader/lib??ref--4-3!../~/postcss-loader/lib??ref--1!./lazy.css */ 20);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../~/style-loader/lib/addStyles.js */ 19)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-3!../node_modules/postcss-loader/lib/index.js??ref--1!./lazy.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-3!../node_modules/postcss-loader/lib/index.js??ref--1!./lazy.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=0.js.map