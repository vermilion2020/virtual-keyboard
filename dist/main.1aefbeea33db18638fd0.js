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

/***/ "../node_modules/css-loader/dist/cjs.js!./style.css":
/*!**********************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./style.css ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  font-family: Arial, Helvetica, sans-serif;\\n}\\n\\n.row {\\n  display: flex;\\n  justify-content: space-between;\\n  gap: 7px;\\n  width: 1200px;\\n}\\n\\n.container {\\n  width: 1200px;\\n  margin: auto;\\n}\\n\\n.info_label {\\n  width: 1200px;\\n  margin: 10px auto 10px;\\n  color: rgb(53, 14, 8);\\n  text-align: center;\\n  font-size: 20px;\\n}\\n\\n.text_container {\\n  width: 1200px;\\n  margin: 20px auto 10px;\\n}\\n\\n.text_container textarea {\\n  height: 200px;\\n  width: 1195px;\\n  background: #FFF;\\n  border-radius: 10px;\\n  color: rgb(53, 14, 8);\\n  border: 2px solid rgb(240, 131, 42);\\n  font-size: 20px;\\n}\\n\\n.key {\\n  text-align: center;\\n  justify-content: center;\\n  font-weight: normal;\\n  padding: 15px;\\n  width: 40px;\\n  color: rgb(53, 14, 8);\\n  background-color: rgb(252, 198, 153);\\n  border: 1px solid rgb(240, 131, 42);\\n  border-radius: 3px;\\n  box-shadow: 3px 3px hsl(0deg, 0%, 84%), 2px 1px hsl(0deg, 0%, 94%), inset 0 0px 5px hsl(0deg, 0%, 95%), inset 0 -1px 5px hsl(0deg, 0%, 95%);\\n  margin-bottom: 5px;\\n}\\n.key sup {\\n  font-weight: 500;\\n  font-size: 12px;\\n  margin-right: 5px;\\n}\\n.key:hover {\\n  border: 1px solid rgb(151, 41, 26);\\n  color: rgb(151, 41, 26);\\n  cursor: pointer;\\n}\\n.key.active {\\n  background-color: rgb(171, 158, 241);\\n  border: 1px solid rgb(53, 14, 8);\\n}\\n.key.caps_active {\\n  background-color: rgb(171, 158, 241);\\n  border: 1px solid rgb(53, 14, 8);\\n}\\n\\n.large_btn {\\n  width: 90px;\\n  background-color: rgb(252, 198, 153);\\n}\\n\\n.medium_btn {\\n  width: 60px;\\n  background-color: rgb(252, 198, 153);\\n}\\n\\n.space_btn {\\n  width: 400px;\\n  background-color: rgb(252, 198, 153);\\n}\\n\\n@keyframes key-down {\\n  0% {\\n    background-color: rgb(252, 198, 153);\\n  }\\n  100% {\\n    background-color: rgb(171, 158, 241);\\n  }\\n}\\n.transition-key-down {\\n  animation-name: key-down;\\n  animation-duration: 0.7s;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./style.css?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./keyboard.js":
/*!*********************!*\
  !*** ./keyboard.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Keyboard)\n/* harmony export */ });\nclass Keyboard {\n  pressedBtns = [];\n\n  capsLockOn = false;\n\n  functionalBtns = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'ControlRight'];\n\n  constructor(buttons, lang) {\n    this.buttons = buttons;\n    this.lang = lang;\n  }\n\n  getLetter(code) {\n    return this.buttons.flat().filter((lt) => lt.code === code)[0];\n  }\n\n  createButton(i, row) {\n    const button = this.buttons[row][i];\n    const buttonDiv = document.createElement('div');\n    buttonDiv.classList.add('key');\n    buttonDiv.setAttribute('data-code', button.code);\n    buttonDiv.setAttribute('data-value', button[this.lang]);\n    buttonDiv.setAttribute('data-row', row);\n    if (button.class) {\n      buttonDiv.classList.add(button.class);\n    }\n    if (button[`${this.lang}_sup`]) {\n      const sup = document.createElement('sup');\n      sup.innerText = button[`${this.lang}_sup`];\n      buttonDiv.appendChild(sup);\n    }\n    const buttonName = button[this.lang].length > 1\n      ? button[this.lang] : button[this.lang].toUpperCase();\n    buttonDiv.append(buttonName);\n    return buttonDiv;\n  }\n\n  createRow(num) {\n    const row = document.createElement('div');\n    row.classList.add('row');\n    const buttonsRow = this.buttons[num];\n    for (let i = 0; i < buttonsRow.length; i += 1) {\n      row.appendChild(this.createButton(i, num));\n    }\n    return row;\n  }\n\n  getNewLetter(code) {\n    const letter = this.getLetter(code);\n    if (this.functionalBtns.includes(code)) {\n      return '';\n    }\n    if ((this.pressedBtns.includes('ShiftRight') || this.pressedBtns.includes('ShiftLeft')) && !this.functionalBtns.includes(code)) {\n      if (letter[`${this.lang}_sup`]) {\n        return letter[`${this.lang}_sup`];\n      }\n      return letter[this.lang].toUpperCase();\n    }\n    if (this.capsLockOn && !this.functionalBtns.includes(code)) {\n      return letter[this.lang].toUpperCase();\n    }\n    return letter[this.lang];\n  }\n\n  createKeyboard(defaultText = '') {\n    const BODY = document.querySelector('body');\n    BODY.innerHTML = '';\n    const LABEL = document.createElement('div');\n    LABEL.classList.add('info_label');\n    LABEL.innerText = this.lang === 'en' ? 'The shortcut for changing language is Shift + Alt' : 'Комбинация для смены раскладки клавиатуры Shift + Alt';\n    const INPUT_CONTAINER = document.createElement('div');\n    INPUT_CONTAINER.classList.add('text_container');\n    const TEXT_INPUT = document.createElement('textarea');\n    TEXT_INPUT.value = defaultText;\n    TEXT_INPUT.focus();\n    INPUT_CONTAINER.appendChild(TEXT_INPUT);\n    const CONTAINER = document.createElement('div');\n    CONTAINER.classList.add('container');\n    CONTAINER.setAttribute('id', 'keyboard_container');\n    for (let i = 0; i < this.buttons.length; i += 1) {\n      CONTAINER.appendChild(this.createRow(i));\n    }\n    BODY.appendChild(LABEL);\n    BODY.appendChild(INPUT_CONTAINER);\n    BODY.appendChild(CONTAINER);\n\n    CONTAINER.addEventListener('click', (event) => {\n      let { target } = event;\n      if (target.tagName === 'SUP' || target.classList[0] === 'key') {\n        if (target.tagName === 'SUP') {\n          target = event.path['1'];\n        }\n\n        if (event.code === 'CapsLock') {\n          this.capsLockOn = !this.capsLockOn;\n        }\n\n        event.target.classList.add('transition-key-down');\n\n        const textarea = document.querySelector('textarea');\n        const letter = this.getLetter(target.dataset.code);\n        let newLetter = '';\n        if (this.capsLockOn && !this.functionalBtns.includes(target.dataset.code)) {\n          newLetter = target.dataset.value.toUpperCase();\n        }\n\n        if ((this.pressedBtns.includes('ShiftLeft') || this.pressedBtns.includes('ShiftRight')) && !this.functionalBtns.includes(target.dataset.code)) {\n          if (letter[`${this.lang}_sup`]) {\n            newLetter = letter[`${this.lang}_sup`];\n          }\n          newLetter = letter[this.lang].toUpperCase();\n        } else if (!this.functionalBtns.includes(target.dataset.code)) {\n          newLetter = letter[this.lang];\n        }\n\n        textarea.value += newLetter;\n        textarea.focus();\n      }\n    });\n\n    CONTAINER.addEventListener('animationend', (event) => {\n      if (event.animationName === 'key-down') {\n        event.target.classList.remove('transition-key-down');\n        if (event.target.dataset.code === 'CapsLock') {\n          if (this.capsLockOn) {\n            event.target.classList.add('caps_active');\n          } else {\n            event.target.classList.remove('caps_active');\n          }\n        } else if (event.target.dataset.code !== 'CapsLock') {\n          if (this.pressedBtns.includes(event.target.dataset.code)) {\n            event.target.classList.add('active');\n          } else {\n            event.target.classList.remove('active');\n          }\n        }\n      }\n    });\n  }\n}\n\n\n//# sourceURL=webpack:///./keyboard.js?");

/***/ }),

/***/ "./keys.js":
/*!*****************!*\
  !*** ./keys.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst BUTTONS = [\n  [{\n    ru: 'ё',\n    en: '`',\n    ru_sup: '',\n    en_sup: '~',\n    code: 'Backquote',\n  },\n  {\n    ru: '1',\n    en: '1',\n    ru_sup: '!',\n    en_sup: '!',\n    code: 'Digit1',\n  },\n  {\n    ru: '2',\n    en: '2',\n    ru_sup: '\"',\n    en_sup: '@',\n    code: 'Digit2',\n  },\n  {\n    ru: '3',\n    en: '3',\n    ru_sup: '№',\n    en_sup: '#',\n    code: 'Digit3',\n  },\n  {\n    ru: '4',\n    en: '4',\n    ru_sup: ';',\n    en_sup: '$',\n    code: 'Digit4',\n  },\n  {\n    ru: '5',\n    en: '5',\n    ru_sup: '%',\n    en_sup: '%',\n    code: 'Digit5',\n  },\n  {\n    ru: '6',\n    en: '6',\n    ru_sup: ':',\n    en_sup: '^',\n    code: 'Digit6',\n  },\n  {\n    ru: '7',\n    en: '7',\n    ru_sup: '?',\n    en_sup: '&',\n    code: 'Digit7',\n  },\n  {\n    ru: '8',\n    en: '8',\n    ru_sup: '*',\n    en_sup: '*',\n    code: 'Digit8',\n  },\n  {\n    ru: '9',\n    en: '9',\n    ru_sup: '(',\n    en_sup: '(',\n    code: 'Digit9',\n  },\n  {\n    ru: '0',\n    en: '0',\n    ru_sup: ')',\n    en_sup: ')',\n    code: 'Digit0',\n  },\n  {\n    ru: '-',\n    en: '-',\n    ru_sup: '_',\n    en_sup: '_',\n    code: 'Minus',\n  },\n  {\n    ru: '=',\n    en: '=',\n    ru_sup: '+',\n    en_sup: '+',\n    code: 'Equal',\n  },\n  {\n    ru: 'Backspace',\n    en: 'Backspace',\n    ru_sup: '',\n    en_sup: '',\n    class: 'large_btn',\n    code: 'Backspace',\n  },\n  ],\n  [\n    {\n      ru: 'Tab',\n      en: 'Tab',\n      class: 'large_btn',\n      code: 'Tab',\n    },\n    {\n      ru: 'й',\n      en: 'q',\n      code: 'KeyQ',\n    },\n    {\n      ru: 'ц',\n      en: 'w',\n      code: 'KeyW',\n    },\n    {\n      ru: 'у',\n      en: 'e',\n      code: 'KeyE',\n    },\n    {\n      ru: 'к',\n      en: 'r',\n      code: 'KeyR',\n    },\n    {\n      ru: 'е',\n      en: 't',\n      code: 'KeyT',\n    },\n    {\n      ru: 'н',\n      en: 'р',\n      code: 'KeyY',\n    },\n    {\n      ru: 'г',\n      en: 'u',\n      code: 'KeyU',\n    },\n    {\n      ru: 'ш',\n      en: 'i',\n      code: 'KeyI',\n    },\n    {\n      ru: 'щ',\n      en: 'o',\n      code: 'KeyO',\n    },\n    {\n      ru: 'з',\n      en: 'p',\n      code: 'KeyP',\n    },\n    {\n      ru: 'х',\n      en: '[',\n      code: 'BracketLeft',\n    },\n    {\n      ru: 'Ъ',\n      en: ']',\n      code: 'BracketRight',\n    },\n    {\n      ru: '\\\\',\n      en: '\\\\',\n      ru_sup: '/',\n      en_sup: '|',\n      code: 'Backslash',\n    },\n    {\n      ru: 'Del',\n      en: 'Del',\n      class: 'large_btn',\n      code: 'Delete',\n    },\n  ],\n  [{\n    ru: 'Caps Lock',\n    en: 'Caps Lock',\n    class: 'large_btn',\n    code: 'CapsLock',\n  },\n  {\n    ru: 'ф',\n    en: 'a',\n    code: 'KeyA',\n  },\n  {\n    ru: 'ы',\n    en: 's',\n    code: 'KeyS',\n  },\n  {\n    ru: 'в',\n    en: 'd',\n    code: 'KeyD',\n  },\n  {\n    ru: 'а',\n    en: 'f',\n    code: 'KeyF',\n  },\n  {\n    ru: 'п',\n    en: 'g',\n    code: 'KeyG',\n  },\n  {\n    ru: 'р',\n    en: 'h',\n    code: 'KeyH',\n  },\n  {\n    ru: 'о',\n    en: 'j',\n    code: 'KeyJ',\n  },\n  {\n    ru: 'л',\n    en: 'k',\n    code: 'KeyK',\n  },\n  {\n    ru: 'д',\n    en: 'l',\n    code: 'KeyL',\n  },\n  {\n    ru: 'ж',\n    en: ';',\n    code: 'Semicolon',\n  },\n  {\n    ru: 'э',\n    en: '\\'',\n    code: 'Quote',\n  },\n  {\n    ru: 'Enter',\n    en: 'Enter',\n    code: 'Enter',\n    class: 'large_btn',\n  },\n  ],\n  [{\n    ru: 'Shift',\n    en: 'Shift',\n    code: 'ShiftLeft',\n    class: 'large_btn',\n  },\n  {\n    ru: '\\\\',\n    en: '\\\\',\n    ru_sup: '/',\n    en_sup: '|',\n    code: 'Backslash',\n  },\n  {\n    ru: 'я',\n    en: 'z',\n    code: 'KeyZ',\n  },\n  {\n    ru: 'ч',\n    en: 'x',\n    code: 'KeyX',\n  },\n  {\n    ru: 'с',\n    en: 'c',\n    code: 'KeyC',\n  },\n  {\n    ru: 'м',\n    en: 'v',\n    code: 'KeyV',\n  },\n  {\n    ru: 'и',\n    en: 'b',\n    code: 'KeyB',\n  },\n  {\n    ru: 'т',\n    en: 'n',\n    code: 'KeyN',\n  },\n  {\n    ru: 'ь',\n    en: 'm',\n    code: 'KeyM',\n  },\n  {\n    ru: 'б',\n    en: ',',\n    ru_sup: '',\n    en_sup: '<',\n    code: 'Comma',\n  },\n  {\n    ru: 'ю',\n    en: '.',\n    ru_sup: '',\n    en_sup: '>',\n    code: 'Period',\n  },\n  {\n    ru: '.',\n    en: '/',\n    ru_sup: ',',\n    en_sup: '?',\n    code: 'Slash',\n  },\n  {\n    ru: '↑',\n    en: '↑',\n    code: 'ArrowUp',\n  },\n  {\n    ru: 'Shift',\n    en: 'Shift',\n    code: 'ShiftRight',\n  },\n  ],\n  [\n    {\n      ru: 'Ctrl',\n      en: 'Ctrl',\n      code: 'ControlLeft',\n      class: 'large_btn',\n    },\n    {\n      ru: 'Win',\n      en: 'Win',\n      class: 'medium_btn',\n      code: 'MetaLeft',\n    },\n    {\n      ru: 'Alt',\n      en: 'Alt',\n      class: 'medium_btn',\n      code: 'AltLeft',\n    },\n    {\n      ru: ' ',\n      en: ' ',\n      class: 'space_btn',\n      code: 'Space',\n    },\n    {\n      ru: 'Alt',\n      en: 'Alt',\n      class: 'medium_btn',\n      code: 'AltRight',\n    },\n    {\n      ru: 'Ctrl',\n      en: 'Ctrl',\n      class: 'medium_btn',\n      code: 'ControlRight',\n    },\n    {\n      ru: '←',\n      en: '←',\n      code: 'ArrowLeft',\n    },\n    {\n      ru: '↓',\n      en: '↓',\n      code: 'ArrowDown',\n    },\n    {\n      ru: '→',\n      en: '→',\n      code: 'ArrowRight',\n    },\n  ],\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BUTTONS);\n\n\n//# sourceURL=webpack:///./keys.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys */ \"./keys.js\");\n/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard */ \"./keyboard.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n\n\n\n\nlet keyboard;\n\nlet lang = 'en';\n\nwindow.addEventListener('load', () => {\n  lang = localStorage.getItem('lang') || 'en';\n  keyboard = new _keyboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_keys__WEBPACK_IMPORTED_MODULE_0__[\"default\"], lang);\n  keyboard.createKeyboard();\n}, true);\n\ndocument.addEventListener('keydown', (event) => {\n  // check that button exist on virtual jeyboard, other buttons are ignored\n  if (keyboard.buttons.flat().filter((lt) => lt.code === event.code).length === 0) {\n    return;\n  }\n  event.preventDefault();\n  const textarea = document.querySelector('textarea');\n  const newLetter = keyboard.getNewLetter(event.code);\n  textarea.value += newLetter;\n  if (!keyboard.pressedBtns.includes(event.code)) {\n    keyboard.pressedBtns.push(event.code);\n    document.querySelector(`[data-code=${event.code}]`).classList.add('transition-key-down');\n  }\n\n  if (event.code === 'CapsLock') {\n    keyboard.capsLockOn = !keyboard.capsLockOn;\n  }\n\n  if (keyboard.pressedBtns.includes('ShiftLeft') && keyboard.pressedBtns.includes('AltLeft')) {\n    keyboard.lang = keyboard.lang === 'en' ? 'ru' : 'en';\n    localStorage.setItem('lang', keyboard.lang);\n    const savedText = document.querySelector('textarea').value;\n    keyboard.createKeyboard(savedText);\n  }\n});\n\ndocument.addEventListener('keyup', (event) => {\n  // check that button exist on virtual jeyboard, other buttons are ignored\n  if (keyboard.buttons.flat().filter((lt) => lt.code === event.code).length === 0) {\n    return;\n  }\n  keyboard.pressedBtns = keyboard.pressedBtns\n    .filter((button) => button !== event.code);\n  document.querySelector(`[data-code=${event.code}]`).classList.remove('active');\n});\n\n\n//# sourceURL=webpack:///./main.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;