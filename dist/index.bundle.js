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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Poppins:wght@400;700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* GOOGLE ICONS */\\r\\n\\r\\n.material-symbols-outlined {\\r\\n  font-variation-settings: 'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 48;\\r\\n}\\r\\n\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n*:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: #f6f6f6;\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  width: 700px;\\r\\n  min-width: 290px;\\r\\n  margin: 30px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  background-color: #fff;\\r\\n  box-shadow: 1px 2px 10px 1px #5d5b5b;\\r\\n}\\r\\n\\r\\nli {\\r\\n  border-bottom: 1px solid lightgray;\\r\\n}\\r\\n\\r\\n/* LIST HEADER */\\r\\n\\r\\n.list-header {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 5px;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 15px;\\r\\n  font-size: 20px;\\r\\n  border-bottom: 2px solid lightgray;\\r\\n}\\r\\n\\r\\n#addToDoForm {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 15px;\\r\\n}\\r\\n\\r\\n#toDoInput {\\r\\n  width: 90%;\\r\\n  font-size: 18px;\\r\\n  font-weight: 500;\\r\\n  border: none;\\r\\n  color: #a8a8a8;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.toDoEditInput {\\r\\n  width: 590px;\\r\\n  font-size: 18px;\\r\\n  font-weight: 500;\\r\\n  border: none;\\r\\n  background-color: transparent;\\r\\n}\\r\\n\\r\\n/* LIST BODY */\\r\\n\\r\\n.toDoList {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.list-item {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 14px;\\r\\n}\\r\\n\\r\\n.list-item:hover {\\r\\n  background-color: rgba(247, 247, 118, 0.837);\\r\\n}\\r\\n\\r\\n.status-title {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: flex-start;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.status {\\r\\n  height: 20px;\\r\\n  width: 20px;\\r\\n  cursor: pointer;\\r\\n  border: 2px solid lightgrey;\\r\\n}\\r\\n\\r\\n.completed {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  font-size: 18px;\\r\\n  word-wrap: break-word;\\r\\n}\\r\\n\\r\\n.actions {\\r\\n  display: flex;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.verticalDots {\\r\\n  color: lightgrey;\\r\\n  cursor: all-scroll;\\r\\n}\\r\\n\\r\\n.icon {\\r\\n  color: lightgrey;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.remove {\\r\\n  font-size: 30px;\\r\\n  color: rgb(6, 6, 6);\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n/* CLEAR BUTTON */\\r\\n.button-section {\\r\\n  text-align: center;\\r\\n  padding: 25px;\\r\\n  background-color: #f6f6f6;\\r\\n}\\r\\n\\r\\n.button-section a {\\r\\n  color: #7b7b7b;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.button-section a:hover {\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/css/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/css/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _modules_status_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/status.js */ \"./src/modules/status.js\");\n/* harmony import */ var _modules_todo_funtionalities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/todo-funtionalities.js */ \"./src/modules/todo-funtionalities.js\");\n\n\n\n\n(0,_modules_todo_funtionalities_js__WEBPACK_IMPORTED_MODULE_2__.displayTodos)();\n\nconst addIcon = document.querySelector('#addIcon');\naddIcon.addEventListener('click', _modules_todo_funtionalities_js__WEBPACK_IMPORTED_MODULE_2__.addTodo);\n\nconst form = document.querySelector('#addToDoForm');\nform.addEventListener('submit', (event) => {\n  event.preventDefault();\n  (0,_modules_todo_funtionalities_js__WEBPACK_IMPORTED_MODULE_2__.addTodo)();\n});\n\nconst toDoList = document.querySelector('.toDoList');\n// ONCLIK\ntoDoList.addEventListener('click', (event) => {\n  const { target } = event;\n  // DELETE TODO\n  if (target.classList.contains('remove')) {\n    // Click from delete button\n    let parent = target.parentElement.parentElement.parentElement;\n    if (target.classList.contains('remove')) {\n      parent = target.parentElement.parentElement;\n    }\n    const todoId = parent.id;\n    (0,_modules_todo_funtionalities_js__WEBPACK_IMPORTED_MODULE_2__.deleteTodo)(todoId);\n  }\n\n  // COMPLETE TODO\n  if (target.type === 'checkbox' && target.classList.contains('status')) {\n    const todoId = target.dataset.id;\n    // Get the input description\n    const inputText = target.nextElementSibling;\n    // Get the valu of checkd\n    const isCheck = target.checked;\n    if (isCheck) {\n      // Set it read only\n      inputText.setAttribute('readonly', true);\n      // Set the text decoration line through\n      inputText.classList.add('completed');\n    } else {\n      // Set it read only\n      inputText.setAttribute('readonly', false);\n      // Remove text decoration line through\n      inputText.classList.remove('completed');\n    }\n    (0,_modules_status_js__WEBPACK_IMPORTED_MODULE_1__.completeTodo)(todoId);\n    (0,_modules_todo_funtionalities_js__WEBPACK_IMPORTED_MODULE_2__.displayTodos)();\n  }\n});\n\n// ONFOCUSLOST\ntoDoList.addEventListener('focusout', (event) => {\n  const { target } = event;\n  if (target.type === 'text' && !target.classList.contains('completed')) {\n    const { id } = target.dataset;\n    (0,_modules_todo_funtionalities_js__WEBPACK_IMPORTED_MODULE_2__.editTodo)(id, target.value);\n  }\n});\n\n// CLEAR ALL COMPLETED TODO\nconst clearCompleteTodo = document.querySelector('#clearCompleteTodo');\nclearCompleteTodo.addEventListener('click', () => {\n  (0,_modules_status_js__WEBPACK_IMPORTED_MODULE_1__.clearAllcompleteTodo)();\n  (0,_modules_todo_funtionalities_js__WEBPACK_IMPORTED_MODULE_2__.displayTodos)();\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/status.js":
/*!*******************************!*\
  !*** ./src/modules/status.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearAllcompleteTodo\": () => (/* binding */ clearAllcompleteTodo),\n/* harmony export */   \"completeTodo\": () => (/* binding */ completeTodo)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\n\n\nconst completeTodo = (todoId) => {\n  todoId = +todoId;\n  // Get todos from Local Storage\n  let toDoListsArray = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDataFromLocalStorage();\n  toDoListsArray = toDoListsArray.map((todo) => {\n    if (todoId === todo.index) {\n      return { ...todo, completed: !todo.completed };\n    }\n    return todo;\n  });\n  // Save the changes in local Storage\n  _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveToLocalStorage(toDoListsArray);\n};\n\nconst clearAllcompleteTodo = () => {\n  // Get todos from Local Storage\n  let toDoListsArray = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDataFromLocalStorage();\n  toDoListsArray = toDoListsArray.filter((todo) => todo.completed === false);\n  // Reindexing\n  const arrLength = toDoListsArray.length;\n  for (let i = 0; i < arrLength; i += 1) {\n    toDoListsArray[i].index = i + 1;\n  }\n  // Save the changes in local Storage\n  _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveToLocalStorage(toDoListsArray);\n};\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/status.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\nclass Storage {\n  // Local Storage\n  static saveToLocalStorage(data) {\n    localStorage.setItem('MY-TODOS', JSON.stringify(data));\n  }\n\n  static getDataFromLocalStorage() {\n    try {\n      const data = JSON.parse(localStorage.getItem('MY-TODOS'));\n      return data || []; // If there is no data return an empty array\n    } catch (error) {\n      return [];\n    }\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/todo-funtionalities.js":
/*!********************************************!*\
  !*** ./src/modules/todo-funtionalities.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodo\": () => (/* binding */ addTodo),\n/* harmony export */   \"deleteTodo\": () => (/* binding */ deleteTodo),\n/* harmony export */   \"displayTodos\": () => (/* binding */ displayTodos),\n/* harmony export */   \"editTodo\": () => (/* binding */ editTodo)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/modules/todo.js\");\n\n\n\nconst toDoList = document.querySelector('.toDoList');\n\n// My To Do list\nlet toDoListsArray = [];\n\nconst displayTodos = () => {\n  // Get the todos from local storage\n  toDoListsArray = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDataFromLocalStorage();\n  // Sort the table of todos\n  const sortedTodoLists = toDoListsArray.sort((a, b) => a.index - b.index);\n  let myToDos = '';\n\n  sortedTodoLists.forEach((todo) => {\n    const checked = todo.completed ? 'checked' : '';\n    const complete = todo.completed ? ' completed' : '';\n    myToDos += `\n    <li class=\"list-item\" id=\"${todo.index}\">\n          <article class=\"status-title\">\n            <input data-id=\"${todo.index}\" class=\"status\" type=\"checkbox\" ${checked} title=\"check!\">\n            <input data-id=\"${todo.index}\" type=\"text\" class=\"toDoEditInput ${complete}\" value=\"${todo.description}\" title=\"Click on '${todo.description}' to EDIT it.\">\n          </article>\n          <article class=\"actions\">\n          <span class=\"material-symbols-outlined remove\">delete</span>\n          <span class=\"material-symbols-outlined verticalDots\">more_vert</span>\n          </article>\n          \n          \n        </li>`;\n  });\n  toDoList.innerHTML = myToDos;\n};\n\nconst addTodo = () => {\n  const toDoInput = document.querySelector('#toDoInput');\n  const todoDescription = toDoInput.value;\n\n  if (todoDescription.trim().length !== 0) {\n    const todoId = toDoListsArray.length + 1;\n    const todoObj = new _todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](todoDescription, todoId);\n    toDoListsArray.push(todoObj);\n    // Save to local storage\n    _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveToLocalStorage(toDoListsArray);\n    toDoInput.value = '';\n    displayTodos();\n  }\n};\n\nconst deleteTodo = (todoId) => {\n  todoId = +todoId;\n  toDoListsArray = toDoListsArray.filter((book) => todoId !== book.index);\n  // Reindexing\n  const arrLength = toDoListsArray.length;\n  for (let i = 0; i < arrLength; i += 1) {\n    toDoListsArray[i].index = i + 1;\n  }\n  // Save to local storage\n  _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveToLocalStorage(toDoListsArray);\n  displayTodos();\n};\n\nconst editTodo = (todoId, newVal) => {\n  todoId = +todoId;\n  toDoListsArray = toDoListsArray.map((todo) => {\n    if (todoId === todo.index) {\n      return { ...todo, description: newVal };\n    }\n    return todo;\n  });\n  // Save to local storage\n  _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveToLocalStorage(toDoListsArray);\n  displayTodos();\n};\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/todo-funtionalities.js?");

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n  constructor(description, index) {\n    this.description = description;\n    this.completed = false;\n    this.index = index;\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/todo.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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