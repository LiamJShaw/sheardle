/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  height: 90%;\n}\n\nbody {\n  background-color: #121212;\n  color: #ffffff;\n  margin: 0;\n  font-family: sans-serif;\n  padding-top: 60px;\n  max-width: 100vw;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  height: 50px;\n  padding: 0 15px;\n  border-bottom: 1px solid #ffffff;\n  background-color: #121212;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    min-height: 100%;\n    justify-content: space-between;\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 10px;\n    overflow: none;\n}\n\n.title {\n}\n\n.info,\n.how-to-play {\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.play-container {\n  margin-bottom: 20px;\n}\n\n.seek-bar-container {\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 100vw;\n}\n\n.seek-bar {\n  width: 100%;\n  height: 10px;\n  position: relative;\n  border-top: 1px solid #ffffff;\n  border-bottom: 1px solid #ffffff;\n  background-color: transparent;\n  margin: 0;\n}\n\n.seek-bar-background {\n  width: 0;\n  height: 100%;\n  position: absolute;\n  background-color: #282828;\n}\n\n.seek-bar-markers {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.seek-bar-progress {\n  width: 0;\n  height: 100%;\n  position: absolute;\n  background-color: #1DB954;\n}\n\n.progress {\n  height: 100%;\n  background-color: #1DB954;\n  width: 0;\n}\n\n.section {\n  height: 100%;\n  position: absolute;\n  background-color: #282828;\n}\n\n.play-button-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 10px 0;\n  position: relative;\n}\n\n.play-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  background-color: #00000000;\n  border: 2px solid white;\n  color: #ffffff;\n  border-radius: 50%;\n  cursor: pointer;\n  outline: none;\n  font-size: 20px;\n}\n\n.elapsed-time,\n.total-time {\n  font-size: 14px;\n  position: absolute;\n}\n\n.elapsed-time {\n  left: 0;\n}\n\n.total-time {\n  right: 0;\n}\n\n.search-container {\n  margin-bottom: 20px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.spotify-search {\n  width: 90%;\n  padding: 10px;\n  background-color: #333;\n  border: solid 1px black;\n  color: #ffffff;\n  border-radius: 5px;\n  outline: none;\n}\n\n.buttons-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n}\n\n.submit {\n  background-color: #1DB954;\n  color: #000000;\n  border: none;\n}\n\n.skip {\n  background-color: #00000000;\n  color: #ffffff;\n  border: 1px solid white;\n}\n\n.skip,\n.submit {\n  padding: 10px 20px;\n  border-radius: 20px;\n  cursor: pointer;\n  outline: none;\n  letter-spacing: 0.1em;\n  line-height: 1rem;\n}\n\nbutton[disabled] {\n  background-color: gray;\n  color: white;\n  cursor: not-allowed;\n}\n\n.search-container {\n  position: relative;\n  width: 100%;\n}\n\n.results-container {\n  position: absolute;\n  background-color: #333;\n  color: #ffffff;\n  width: 95%;\n  max-height: 200px;\n  overflow-y: auto;\n  border: 1px solid #0000002b;\n  display: none;\n  top: calc(100% + 5px);\n}\n\n.result-item {\n  padding: 8px 12px;\n  cursor: pointer;\n  color: #ffffff;\n}\n\n.result-item:hover {\n  background-color: #282828;\n}\n\n.guess {\n  height: 40px;\n  border: 1px solid #ffffff62;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center; \n  padding-left: 10px;\n  font-size: 16px; \n  font-weight: 300; \n  color: #ffffffaa; \n}\n\n.guess-text {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex-grow: 1;\n}\n\n.red-x-icon {\n  color: rgba(255, 0, 0, 0.75);\n  font-weight: bold;\n  margin-right: 5px;\n  padding-right: 12px;\n}\n\n.green-check-icon {\n  color: green;\n  font-weight: bold;\n  margin-right: 5px;\n  padding-right: 8px; \n} \n\n\n/* Results screen */\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: #121212;\n}\n\n.modal-content {\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2em;\n  text-align: center;\n}\n\n.album-art {\n  width: 300px;\n  height: 300px;\n  object-fit: cover;\n  border-radius: 10px;\n  margin-bottom: 2em;\n}\n\n.song-title {\n  font-size: 2em;\n  font-weight: bold;\n  color: #FFFFFF;\n  margin-bottom: 1em;\n}\n\n.song-artist {\n  font-size: 1.5em;\n  color: #888;\n  margin-bottom: 2em;\n}\n\n.share-results-btn {\n  padding: 10px 20px;\n  font-size: 1.2em;\n  color: #FFFFFF;\n  background-color: #1DB954;\n  border: none;\n  border-radius: 50px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.share-results-btn:hover {\n  background-color: #148b3b;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":["html,\nbody {\n  height: 90%;\n}\n\nbody {\n  background-color: #121212;\n  color: #ffffff;\n  margin: 0;\n  font-family: sans-serif;\n  padding-top: 60px;\n  max-width: 100vw;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  height: 50px;\n  padding: 0 15px;\n  border-bottom: 1px solid #ffffff;\n  background-color: #121212;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    min-height: 100%;\n    justify-content: space-between;\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 10px;\n    overflow: none;\n}\n\n.title {\n}\n\n.info,\n.how-to-play {\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.play-container {\n  margin-bottom: 20px;\n}\n\n.seek-bar-container {\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 100vw;\n}\n\n.seek-bar {\n  width: 100%;\n  height: 10px;\n  position: relative;\n  border-top: 1px solid #ffffff;\n  border-bottom: 1px solid #ffffff;\n  background-color: transparent;\n  margin: 0;\n}\n\n.seek-bar-background {\n  width: 0;\n  height: 100%;\n  position: absolute;\n  background-color: #282828;\n}\n\n.seek-bar-markers {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.seek-bar-progress {\n  width: 0;\n  height: 100%;\n  position: absolute;\n  background-color: #1DB954;\n}\n\n.progress {\n  height: 100%;\n  background-color: #1DB954;\n  width: 0;\n}\n\n.section {\n  height: 100%;\n  position: absolute;\n  background-color: #282828;\n}\n\n.play-button-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 10px 0;\n  position: relative;\n}\n\n.play-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  background-color: #00000000;\n  border: 2px solid white;\n  color: #ffffff;\n  border-radius: 50%;\n  cursor: pointer;\n  outline: none;\n  font-size: 20px;\n}\n\n.elapsed-time,\n.total-time {\n  font-size: 14px;\n  position: absolute;\n}\n\n.elapsed-time {\n  left: 0;\n}\n\n.total-time {\n  right: 0;\n}\n\n.search-container {\n  margin-bottom: 20px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.spotify-search {\n  width: 90%;\n  padding: 10px;\n  background-color: #333;\n  border: solid 1px black;\n  color: #ffffff;\n  border-radius: 5px;\n  outline: none;\n}\n\n.buttons-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n}\n\n.submit {\n  background-color: #1DB954;\n  color: #000000;\n  border: none;\n}\n\n.skip {\n  background-color: #00000000;\n  color: #ffffff;\n  border: 1px solid white;\n}\n\n.skip,\n.submit {\n  padding: 10px 20px;\n  border-radius: 20px;\n  cursor: pointer;\n  outline: none;\n  letter-spacing: 0.1em;\n  line-height: 1rem;\n}\n\nbutton[disabled] {\n  background-color: gray;\n  color: white;\n  cursor: not-allowed;\n}\n\n.search-container {\n  position: relative;\n  width: 100%;\n}\n\n.results-container {\n  position: absolute;\n  background-color: #333;\n  color: #ffffff;\n  width: 95%;\n  max-height: 200px;\n  overflow-y: auto;\n  border: 1px solid #0000002b;\n  display: none;\n  top: calc(100% + 5px);\n}\n\n.result-item {\n  padding: 8px 12px;\n  cursor: pointer;\n  color: #ffffff;\n}\n\n.result-item:hover {\n  background-color: #282828;\n}\n\n.guess {\n  height: 40px;\n  border: 1px solid #ffffff62;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center; \n  padding-left: 10px;\n  font-size: 16px; \n  font-weight: 300; \n  color: #ffffffaa; \n}\n\n.guess-text {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex-grow: 1;\n}\n\n.red-x-icon {\n  color: rgba(255, 0, 0, 0.75);\n  font-weight: bold;\n  margin-right: 5px;\n  padding-right: 12px;\n}\n\n.green-check-icon {\n  color: green;\n  font-weight: bold;\n  margin-right: 5px;\n  padding-right: 8px; \n} \n\n\n/* Results screen */\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: #121212;\n}\n\n.modal-content {\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2em;\n  text-align: center;\n}\n\n.album-art {\n  width: 300px;\n  height: 300px;\n  object-fit: cover;\n  border-radius: 10px;\n  margin-bottom: 2em;\n}\n\n.song-title {\n  font-size: 2em;\n  font-weight: bold;\n  color: #FFFFFF;\n  margin-bottom: 1em;\n}\n\n.song-artist {\n  font-size: 1.5em;\n  color: #888;\n  margin-bottom: 2em;\n}\n\n.share-results-btn {\n  padding: 10px 20px;\n  font-size: 1.2em;\n  color: #FFFFFF;\n  background-color: #1DB954;\n  border: none;\n  border-radius: 50px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.share-results-btn:hover {\n  background-color: #148b3b;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addSkippedTurnToBoard": () => (/* binding */ addSkippedTurnToBoard),
/* harmony export */   "clearSearchBox": () => (/* binding */ clearSearchBox),
/* harmony export */   "createMarkers": () => (/* binding */ createMarkers),
/* harmony export */   "disableSubmitButton": () => (/* binding */ disableSubmitButton),
/* harmony export */   "enableSubmitButton": () => (/* binding */ enableSubmitButton),
/* harmony export */   "initUI": () => (/* binding */ initUI),
/* harmony export */   "updateProgressBar": () => (/* binding */ updateProgressBar)
/* harmony export */ });
/* harmony import */ var _audioManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audioManager */ "./src/audioManager.js");
/* harmony import */ var _sheardle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sheardle */ "./src/sheardle.js");
/* harmony import */ var _spotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spotify */ "./src/spotify.js");
/* harmony import */ var _resultsScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resultsScreen */ "./src/resultsScreen.js");





function initUI() {
  updateSeekBarBackground((0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)());
}

// Guess board
const guessContainer = document.querySelector('.guess-container');

function addIncorrectGuessToBoard(guess, turn) {

  console.log("Current turn according to UI:", turn);

    const guessDiv = guessContainer.children[turn - 1];

    // Create the red 'x' icon
    const redXIcon = document.createElement('span');
    redXIcon.textContent = 'x';
    redXIcon.classList.add('red-x-icon');
    guessDiv.appendChild(redXIcon);
  
    // Add the track info text to the guess div
    const guessText = document.createElement('p');
    guessText.textContent = guess;
    guessText.classList.add('guess-text');
    guessDiv.appendChild(guessText);
}

function addCorrectGuessToBoard(guess, turn) {

  console.log("Current turn according to UI:", turn);


    const guessDiv = guessContainer.children[turn - 1];

    // Create the green checkmark icon
    const greenCheckIcon = document.createElement('span');
    greenCheckIcon.textContent = '✓';
    greenCheckIcon.classList.add('green-check-icon');
    guessDiv.appendChild(greenCheckIcon);
  
    // Add the track info text to the guess div
    const guessText = document.createElement('p');
    guessText.textContent = guess;
    guessText.classList.add('guess-text');
    guessDiv.appendChild(guessText);
}

function addSkippedTurnToBoard(turn) {
  const guessContainer = document.querySelector('.guess-container');
  const guessDiv = guessContainer.children[turn - 1];
  
  // Create the red 'x' icon
  const redXIcon = document.createElement('span');
  redXIcon.textContent = 'x';
  redXIcon.classList.add('red-x-icon');

  // Add the red 'x' icon to the guess div
  guessDiv.appendChild(redXIcon);

  // Add the "Skipped turn" text to the guess div
  const skippedTurnText = document.createElement('p');
  skippedTurnText.textContent = "Skipped";
  guessDiv.appendChild(skippedTurnText);
}

function clearSearchBox() {
  const searchBox = document.querySelector('.spotify-search');
  searchBox.value = '';
}


// Play/Pause button
const playButton = document.querySelector(".play-button");
playButton.addEventListener("click", handlePlayButtonClick);

function handlePlayButtonClick() {
    if ((0,_audioManager__WEBPACK_IMPORTED_MODULE_0__.isAudioPaused)()) {
        (0,_audioManager__WEBPACK_IMPORTED_MODULE_0__.playAudio)();
        playButton.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
    } else {
        (0,_audioManager__WEBPACK_IMPORTED_MODULE_0__.pauseAudio)();
        playButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    }
}


// Skip button
const skipButton = document.querySelector(".skip");
skipButton.addEventListener("click", handleSkipButtonClick);

function handleSkipButtonClick() {

    if ((0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)() < _sheardle__WEBPACK_IMPORTED_MODULE_1__.allowedDurations.length) {
        addSkippedTurnToBoard((0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)());
        (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.addSkippedTurnToGameState)();
      }

    updateSeekBarBackground((0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)());
    updateSkipButtonText();
}

function changePlayButtonIconToPlay() {
  playButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}

function updateSkipButtonText() {
    if ((0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)() < _sheardle__WEBPACK_IMPORTED_MODULE_1__.allowedDurations.length) {
        const skipSeconds = _sheardle__WEBPACK_IMPORTED_MODULE_1__.allowedDurations[(0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)()] - _sheardle__WEBPACK_IMPORTED_MODULE_1__.allowedDurations[(0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)() - 1];
        skipButton.textContent = `SKIP (+${skipSeconds}s)`;
    } else {
        skipButton.textContent = "SKIP";
    }
}

// // Submit button
// const submitButton = document.querySelector('.submit');

// submitButton.addEventListener('click', () => {

//     const gameTrackID = getCurrentTrackID();
//     const guessIsCorrect = checkGuess(selectedTrackID, gameTrackID);
//     const searchInputValue = searchInput.value;
//     const currentTurnAtTimeOfSubmit = getCurrentTurn();

//     console.log("Guess is:", guessIsCorrect);

//     if (!guessIsCorrect) {
//       console.log("Checking for Spotify duplicates...");
//       checkForSpotifyDupes(searchInput.value).then(response => {
//         console.log("Included in dupes:", response);

//         if (response) {
//           console.log(searchInputValue);
//           addCorrectGuessToBoard(searchInputValue, currentTurnAtTimeOfSubmit);
//         } else {
//           addIncorrectGuessToBoard(searchInputValue, currentTurnAtTimeOfSubmit);
//         }

//       })
//     } else {
//       addCorrectGuessToBoard(searchInputValue, currentTurnAtTimeOfSubmit);
//     }

//     saveNewGuessToGameState(searchInputValue);
    
//     disableSubmitButton();
//     clearSearchBox();
//   });

// GPT Submit button:
const submitButton = document.querySelector('.submit');
const resultScreen = document.querySelector('.modal'); // Select the results screen


submitButton.addEventListener('click', () => {


  console.log("current track ID:", (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTrackID)());

    const gameTrackID = (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTrackID)();
    const guessIsCorrect = (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.checkGuess)(selectedTrackID, gameTrackID);
    const searchInputValue = searchInput.value;
    const currentTurnAtTimeOfSubmit = (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)();

    console.log("Guess is:", guessIsCorrect);

    if (!guessIsCorrect) {
        console.log("Checking for Spotify duplicates...");
        (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.checkForSpotifyDupes)(searchInput.value).then(response => {
            console.log("Included in dupes:", response);

            if (response) {
                console.log(searchInputValue);
                addCorrectGuessToBoard(searchInputValue, currentTurnAtTimeOfSubmit);

                (0,_spotify__WEBPACK_IMPORTED_MODULE_2__.getTrackByID)((0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTrackID)()).then(response => {
                  (0,_resultsScreen__WEBPACK_IMPORTED_MODULE_3__.gameEnd)(response);
                });
                
            } else {
                addIncorrectGuessToBoard(searchInputValue, currentTurnAtTimeOfSubmit);
            }

            // Check total guesses after each incorrect guess
            if ((0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)() >= _sheardle__WEBPACK_IMPORTED_MODULE_1__.allowedDurations) {
              (0,_spotify__WEBPACK_IMPORTED_MODULE_2__.getTrackByID)((0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTrackID)()).then(response => {
                (0,_resultsScreen__WEBPACK_IMPORTED_MODULE_3__.gameEnd)(response);
              });            }

        });
    } else {
        addCorrectGuessToBoard(searchInputValue, currentTurnAtTimeOfSubmit);
        (0,_spotify__WEBPACK_IMPORTED_MODULE_2__.getTrackByID)((0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTrackID)()).then(response => {
          (0,_resultsScreen__WEBPACK_IMPORTED_MODULE_3__.gameEnd)(response);
        });      }

    (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.saveNewGuessToGameState)(searchInputValue);

    disableSubmitButton();
    clearSearchBox();
});


function enableSubmitButton() {
  const submitButton = document.querySelector('.submit');
  submitButton.removeAttribute("disabled");
}

function disableSubmitButton() {
  const submitButton = document.querySelector('.submit');
  submitButton.setAttribute("disabled", "");
}


// Progress bar
const progressBar = document.querySelector(".seek-bar-progress");

function updateProgressBar() {
  const progressPercentage = (((0,_audioManager__WEBPACK_IMPORTED_MODULE_0__.getAudioCurrentTime)() / 16) * 100 + 1);
  progressBar.style.width = `${progressPercentage}%`;

  if (!(0,_audioManager__WEBPACK_IMPORTED_MODULE_0__.isAudioPaused)()) {
      requestAnimationFrame(updateProgressBar);
  } else {
    changePlayButtonIconToPlay(); 
  }
}

const seekBarBackground = document.querySelector(".seek-bar-background");

function updateSeekBarBackground(turn) {
    const playDuration = _sheardle__WEBPACK_IMPORTED_MODULE_1__.allowedDurations[turn - 1];
    const percentage = (playDuration / 16) * 100;
    seekBarBackground.style.width = `${percentage}%`;
}


// Allowed length to play markers
function createMarker(duration) {
    const marker = document.createElement("div");
    const percentage = (duration / 16) * 100;

    marker.style.width = "1px";
    marker.style.height = "100%";
    marker.style.position = "absolute";
    marker.style.left = `${percentage}%`;
    marker.style.backgroundColor = "#ffffff";

    return marker;
}

function createMarkers(allowedDurations) {
    const markersContainer = document.querySelector(".seek-bar-markers");
    allowedDurations.forEach(duration => {
        const marker = createMarker(duration + 0.1);
        markersContainer.appendChild(marker);
    });
}

// Search bar
const searchInput = document.querySelector('.spotify-search');
let selectedTrackID;

// Debounce function to stop the auto-search firing too often
function debounce(func, wait, immediate) {
    let timeout;

    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        
        const callNow = immediate && !timeout;

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
}

// No debounce needed for disabling the button
searchInput.addEventListener('input', () => {
    disableSubmitButton();
})

searchInput.addEventListener('input', debounce((event) => {
    const query = event.target.value;
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';
    resultsContainer.style.display = 'none';
  
    if (query) {
      (0,_spotify__WEBPACK_IMPORTED_MODULE_2__.searchTrack)(query)
      .then(response => {
        if (response.length > 0) {
          response.forEach((track, index) => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.textContent = `${track.artists[0].name} - ${track.name}`;
            resultItem.setAttribute('data-track-id', track.id);
  
            resultItem.addEventListener('click', (event) => {
              selectedTrackID = event.target.getAttribute('data-track-id');;
  
              // Update the search input with the selected result and hide the results container
              searchInput.value = event.target.textContent;
              resultsContainer.style.display = 'none';
              enableSubmitButton();
            });
  
            resultsContainer.appendChild(resultItem);
          });
  
          resultsContainer.style.display = 'block';
        }
      })
      .catch(error => {
        console.error(error);
      });
    }
  }, 500));

// Search results
const resultsContainer = document.getElementById('results-container');
document.addEventListener('click', (event) => {
  // Check if the click target is outside of the .results-container
  if (!event.target.closest('#results-container')) {
    resultsContainer.style.display = 'none';
  }
});

/***/ }),

/***/ "./src/audioManager.js":
/*!*****************************!*\
  !*** ./src/audioManager.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAudioCurrentTime": () => (/* binding */ getAudioCurrentTime),
/* harmony export */   "getGameTrackAudio": () => (/* binding */ getGameTrackAudio),
/* harmony export */   "initAudio": () => (/* binding */ initAudio),
/* harmony export */   "isAudioPaused": () => (/* binding */ isAudioPaused),
/* harmony export */   "pauseAudio": () => (/* binding */ pauseAudio),
/* harmony export */   "playAudio": () => (/* binding */ playAudio)
/* harmony export */ });
/* harmony import */ var _sheardle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sheardle.js */ "./src/sheardle.js");
/* harmony import */ var _spotify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spotify.js */ "./src/spotify.js");
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI.js */ "./src/UI.js");
// Import game state manipulation functions



// This should be a callback, to avoid co-dependency?


// Required here so that the user can pause and resume
let audio;
let endTime;
let timeoutID;

async function getGameTrackAudio(trackID) {
    const track = await (0,_spotify_js__WEBPACK_IMPORTED_MODULE_1__.getTrackByID)(trackID);

    return new Audio(track.preview_url);
};

async function initAudio(trackID) {
    audio = await getGameTrackAudio(trackID);
    audio.addEventListener("timeupdate", _UI_js__WEBPACK_IMPORTED_MODULE_2__.updateProgressBar);
}

function playAudio() {

    const playDuration = _sheardle_js__WEBPACK_IMPORTED_MODULE_0__.allowedDurations[(0,_sheardle_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentTurn)()-1];
    endTime = playDuration;

    audio.currentTime = 0;
    audio.play();

    clearTimeout(timeoutID);
    timeoutID = setTimeout(pauseAudio, endTime * 1000);
}

function pauseAudio() {
    audio.pause();
    clearTimeout(timeoutID);
}

function isAudioPaused() {
    return audio.paused;
}

function getAudioCurrentTime() {
    return audio.currentTime;
}

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadGameState": () => (/* binding */ loadGameState),
/* harmony export */   "saveGameState": () => (/* binding */ saveGameState)
/* harmony export */ });
function saveGameState(guesses) {
    localStorage.setItem('gameState', JSON.stringify(guesses));
}

function loadGameState() {
    return JSON.parse(localStorage.getItem('gameState'));
}

/***/ }),

/***/ "./src/resultsScreen.js":
/*!******************************!*\
  !*** ./src/resultsScreen.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameEnd": () => (/* binding */ gameEnd)
/* harmony export */ });
const modal = document.getElementById("resultsModal");

// The below should also take in the gameState?
// The idea being, we need to show if the user was correct or not

function gameEnd(trackInfo) {

    console.log(trackInfo);

    modal.style.display = "block";

    // Set the song's details
    document.querySelector(".song-title").textContent = trackInfo.name;
    document.querySelector(".song-artist").textContent = trackInfo.artists[0].name;
    document.querySelector(".album-art").src = trackInfo.album.images[0].url;
    document.querySelector(".song-preview").src = trackInfo.preview_url;
}

document.querySelector(".share-results-btn").addEventListener('click', function() {
    console.log("Share Results Button Clicked");
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


/***/ }),

/***/ "./src/sheardle.js":
/*!*************************!*\
  !*** ./src/sheardle.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addSkippedTurnToGameState": () => (/* binding */ addSkippedTurnToGameState),
/* harmony export */   "allowedDurations": () => (/* binding */ allowedDurations),
/* harmony export */   "checkForSpotifyDupes": () => (/* binding */ checkForSpotifyDupes),
/* harmony export */   "checkGuess": () => (/* binding */ checkGuess),
/* harmony export */   "getCurrentTrackID": () => (/* binding */ getCurrentTrackID),
/* harmony export */   "getCurrentTurn": () => (/* binding */ getCurrentTurn),
/* harmony export */   "importGameState": () => (/* binding */ importGameState),
/* harmony export */   "saveNewGuessToGameState": () => (/* binding */ saveNewGuessToGameState),
/* harmony export */   "setupNewGame": () => (/* binding */ setupNewGame)
/* harmony export */ });
/* harmony import */ var _trackSelection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trackSelection */ "./src/trackSelection.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _audioManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audioManager */ "./src/audioManager.js");
/* harmony import */ var _spotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spotify */ "./src/spotify.js");





const allowedDurations = [1, 2, 4, 7, 11, 16];

let gameState = {
  currentTurn: 1,
  guesses: [],
  trackID: null
};

const getCurrentTurn = () => gameState.currentTurn;
const getCurrentTrackID = () => gameState.trackID;

function setupNewGame() {

  // Curently just pulls the first one. Eventually it will calc it on date.
  const todaysTrackID = (0,_trackSelection__WEBPACK_IMPORTED_MODULE_0__.getTodaysTrackID)();

  gameState.currentTurn = 1;
  gameState.guesses = [];
  gameState.trackID = todaysTrackID;

  (0,_audioManager__WEBPACK_IMPORTED_MODULE_2__.initAudio)(todaysTrackID);

  console.log("New game state", gameState);
}

function importGameState(gameState) {
  console.log(gameState);

  // This will be required here once this function is written
  // initAudio(gameState.trackID);
}

function checkGuess(guessedTrackID, gameTrackID) {
  // console.log("Guess:", guessedTrackID);
  // console.log("Game track:", gameTrackID);

  return guessedTrackID === gameTrackID;

  // if false, run the dupes check
}

async function checkForSpotifyDupes(searchQuery) {
    // If false, check the user's guess against what should hopefully be Spotify's dupes
    const fetchedIDs = await (0,_spotify__WEBPACK_IMPORTED_MODULE_3__.getAllTrackIDsBySearchQuery)(searchQuery);

    // If guessedTrackID is in the array returned, return true
    return fetchedIDs.includes(getCurrentTrackID());
}

async function saveNewGuessToGameState(guess) {

  gameState.guesses.push(guess);
  incrementCurrentTurnInGameState();

  await (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveGameState)(gameState);

  console.log("Game state after save:", gameState);
}


function addSkippedTurnToGameState() {
  // Save a null guess to represent a skipped turn
  gameState.guesses.push(null);

  incrementCurrentTurnInGameState();
}

function incrementCurrentTurnInGameState() {
  gameState.currentTurn++;
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveGameState)(gameState);
}







/***/ }),

/***/ "./src/spotify.js":
/*!************************!*\
  !*** ./src/spotify.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllTrackIDsBySearchQuery": () => (/* binding */ getAllTrackIDsBySearchQuery),
/* harmony export */   "getTrackByID": () => (/* binding */ getTrackByID),
/* harmony export */   "searchTrack": () => (/* binding */ searchTrack)
/* harmony export */ });
/* harmony import */ var _spotifyTokenManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spotifyTokenManager.js */ "./src/spotifyTokenManager.js");


const clientId = "74ac949ca587402484dcef1408b4d7f3";
const clientSecret = "313a2c15fc844ca5bc22755572874ee7";

// const clientId = process.env.SPOTIFY_CLIENT_ID;
// const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

const tokenManager = new _spotifyTokenManager_js__WEBPACK_IMPORTED_MODULE_0__["default"](clientId, clientSecret);

async function searchTrack(searchTerm, market = 'GB') {

    const accessToken = await tokenManager.getAccessToken();

    const headers = {
        Authorization: `Bearer ${accessToken}`,
    };

    async function search(searchTerm) {
        const params = new URLSearchParams({
            q: searchTerm,
            type: 'track',
            limit: 10,
            market
        });

        const response = await fetch(`https://api.spotify.com/v1/search?${params}`, {
            headers: headers,
        });

        if (response.status === 200) {
            const data = await response.json();
            return data.tracks.items;
        }

        return [];
    }

    return await search(searchTerm);
}

async function getTrackByID(trackID, market = 'GB') {
    const accessToken = await tokenManager.getAccessToken();
  
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
  
    const response = await fetch(`https://api.spotify.com/v1/tracks/${trackID}?market=${market}`, {
      headers: headers,
    });
  
    if (response.status === 200) {
      return await response.json();
    }
  
    return null;
  }

async function getAllTrackIDsBySearchQuery(searchQuery) {
  const searchResults = await searchTrack(searchQuery);
  const trackIDs = searchResults.map(track => track.id);

  return trackIDs;
}


/***/ }),

/***/ "./src/spotifyTokenManager.js":
/*!************************************!*\
  !*** ./src/spotifyTokenManager.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SpotifyTokenManager)
/* harmony export */ });
class SpotifyTokenManager {
    constructor(clientId, clientSecret) {
      this.clientId = clientId;
      this.clientSecret = clientSecret;
      this.accessToken = null;
      this.expirationTime = null;
    }
  
    async requestAccessToken(clientId, clientSecret) {
      const tokenEndpoint = "https://accounts.spotify.com/api/token";
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };
      const body = new URLSearchParams({
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
      });
  
      const response = await fetch(tokenEndpoint, {
        method: "POST",
        headers: headers,
        body: body,
      });
  
      if (response.status === 200) {
        const data = await response.json();
        return data.access_token;
      } else {
        throw new Error("Failed to obtain access token");
      }
    }
  
    async getAccessToken() {
      const currentTime = new Date().getTime();
      if (!this.accessToken || currentTime >= this.expirationTime) {
        this.accessToken = await this.requestAccessToken(this.clientId, this.clientSecret);
        const expiresInMilliseconds = 3600 * 1000; // 1 hour in milliseconds
        this.expirationTime = currentTime + expiresInMilliseconds;
      }
  
      return this.accessToken;
    }
  }

/***/ }),

/***/ "./src/trackSelection.js":
/*!*******************************!*\
  !*** ./src/trackSelection.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTodaysTrackID": () => (/* binding */ getTodaysTrackID)
/* harmony export */ });
const trackSelection = ['7J1uxwnxfQLu4APicE5Rnj',
'2dlEdDEmuQsrcXaAL3Znzi',
'62LJFaYihsdVrrkgUOJC05',
'0HEmnAUT8PHznIAAmVXqFJ',
'7FwBtcecmlpc1sLySPXeGE',
'10zlwR7kvVbD9OBkeZWr3L',
'2WfaOiMkCvy7F5fcp2zZ8L',
'77NNZQSqzLNqh2A9JhLRkg',
'07j5RLJHwsm4cUb3GGoW3w',
'22sLuJYcvZOSoLLRYev1s5',
'3BovdzfaX4jb5KFQwoPfAw',
'34x6hEJgGAOQvmlMql5Ige',
'3CSpzkoL1XgDBZ1q9aDCUV',
'28o8m1o9RGtySbmQJtAvym',
'1KsI8NEeAna8ZIdojI3FiT',
'2olVm1lHicpveMAo4AUDRB',
'39lSeqnyjZJejRuaREfyLL',
'5PJBrwKH7SdByGtDCBGJwb',
'44hOGg1uFg1XJZGZYNwYmM',
'4aKIs5t9TqP59btlCGPrgw',
'0A4PZuepTcIQVvA5m7R0M1',
'7g7tyb8zM9UeKsdvosW9W3',
'4o9Kj7onklt6xbYl3jVArp',
'0bBVRsBbgnzW8wmdlD7Apq',
'5e1enT0NPXPZkR8F3R58bY',
'5Ikdh91DdEq44cfpIKRsLw',
'2X242D8VhTikWUT1i1nYJC',
'2TAfGirNJe0qUOeRmWsSyk',
'3mvKvierFAVGCdgdx4EN4Q',
'6HZ67VImxqr8aMBEEhblzf',
'6glsMWIMIxQ4BedzLqGVi4',
'3LI4MmibTkXH5cGpCGZgyw',
'6nTiIhLmQ3FWhvrGafw2zj',
'3d9DChrdc6BOeFsbrZ3Is0',
'4OeBZlEaLWyJWaYl4UvhT9',
'5TGYo4MrNKqIvJqgx134py',
'43eBgYRTmu5BJnCJDBU5Hb',
'6I4snLrVOrJsLdd43isc27',
'4sz1Ng2Cgidfqqiy0pNL6R',
'54X78diSLoUDI3joC2bjMz',
'0QeI79sp1vS8L3JgpEO7mD'];

// // In this function, I'm going to set up a "start date" for the app.
// // I'll base which track is the track of the day from the distance in time from this date


function getCurrentDay(startDate) {
    // Get the current date in local time
    let currentDate = new Date();
  
    // Set both dates to midnight (start of the day) in local time
    startDate = new Date(new Date(startDate).setHours(0,0,0,0));
    currentDate = new Date(currentDate.setHours(0,0,0,0));
  
    // Convert both dates to milliseconds
    let startDateTime = startDate.getTime();
    let currentDateTime = currentDate.getTime();
  
    // Calculate the difference in milliseconds
    let differenceInTime = currentDateTime - startDateTime;
  
    // Convert the difference in milliseconds to days
    let differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
  
    return differenceInDays;
}

function getTodaysTrackID(startDate) {

    // For now, we just get track 0
    return trackSelection[0];

    return trackSelection[getCurrentDay(startDate)];
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _sheardle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sheardle */ "./src/sheardle.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI */ "./src/UI.js");
/* harmony import */ var _resultsScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resultsScreen */ "./src/resultsScreen.js");
/* harmony import */ var _spotify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spotify */ "./src/spotify.js");








// kill the below after testing


// const gameLoaded = loadGameState();

// if (gameLoaded) {
//     console.log("Game successfully loaded");

//     // importGameState(gameLoaded);

//     // Loading new game anyway as I can't be bothered to delete localStorage every time
//     setupNewGame();

// } else {
//     console.log("Starting new game");
//     setupNewGame();
// }


(0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.setupNewGame)();

// These probably shouldn't be needed?
(0,_UI__WEBPACK_IMPORTED_MODULE_3__.initUI)();
(0,_UI__WEBPACK_IMPORTED_MODULE_3__.createMarkers)(_sheardle__WEBPACK_IMPORTED_MODULE_1__.allowedDurations);

// // Test results screen
// const testTrack = getTrackByID("7J1uxwnxfQLu4APicE5Rnj");

// testTrack.then(response => {
//     gameEnd(response);
// })

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vc3JjL1VJLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vc3JjL2F1ZGlvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9zcmMvcmVzdWx0c1NjcmVlbi5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL3NyYy9zaGVhcmRsZS5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL3NyYy9zcG90aWZ5LmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vc3JjL3Nwb3RpZnlUb2tlbk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9zcmMvdHJhY2tTZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NoZWFyZGxlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaGVhcmRsZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiA5MCU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nLXRvcDogNjBweDtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxufVxcblxcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxuICAgIG92ZXJmbG93OiBub25lO1xcbn1cXG5cXG4udGl0bGUge1xcbn1cXG5cXG4uaW5mbyxcXG4uaG93LXRvLXBsYXkge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGxheS1jb250YWluZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnNlZWstYmFyLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5zZWVrLWJhciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmZmZmO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnNlZWstYmFyLWJhY2tncm91bmQge1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xcbn1cXG5cXG4uc2Vlay1iYXItbWFya2VycyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnNlZWstYmFyLXByb2dyZXNzIHtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFEQjk1NDtcXG59XFxuXFxuLnByb2dyZXNzIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxREI5NTQ7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuLnNlY3Rpb24ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcXG59XFxuXFxuLnBsYXktYnV0dG9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wbGF5LWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDA7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmVsYXBzZWQtdGltZSxcXG4udG90YWwtdGltZSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5lbGFwc2VkLXRpbWUge1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLnRvdGFsLXRpbWUge1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNwb3RpZnktc2VhcmNoIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYnV0dG9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxufVxcblxcbi5zdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFEQjk1NDtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uc2tpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDA7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uc2tpcCxcXG4uc3VibWl0IHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxufVxcblxcbmJ1dHRvbltkaXNhYmxlZF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucmVzdWx0cy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgd2lkdGg6IDk1JTtcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAyYjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB0b3A6IGNhbGMoMTAwJSArIDVweCk7XFxufVxcblxcbi5yZXN1bHQtaXRlbSB7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcXG59XFxuXFxuLmd1ZXNzIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY2MjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBmb250LXNpemU6IDE2cHg7IFxcbiAgZm9udC13ZWlnaHQ6IDMwMDsgXFxuICBjb2xvcjogI2ZmZmZmZmFhOyBcXG59XFxuXFxuLmd1ZXNzLXRleHQge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLnJlZC14LWljb24ge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjc1KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xcbn1cXG5cXG4uZ3JlZW4tY2hlY2staWNvbiB7XFxuICBjb2xvcjogZ3JlZW47XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogOHB4OyBcXG59IFxcblxcblxcbi8qIFJlc3VsdHMgc2NyZWVuICovXFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYWxidW0tYXJ0IHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxufVxcblxcbi5zb25nLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuLnNvbmctYXJ0aXN0IHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBjb2xvcjogIzg4ODtcXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcXG59XFxuXFxuLnNoYXJlLXJlc3VsdHMtYnRuIHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBjb2xvcjogI0ZGRkZGRjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxREI5NTQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbn1cXG5cXG4uc2hhcmUtcmVzdWx0cy1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0OGIzYjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazov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OltcImh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDkwJTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXG4gICAgb3ZlcmZsb3c6IG5vbmU7XFxufVxcblxcbi50aXRsZSB7XFxufVxcblxcbi5pbmZvLFxcbi5ob3ctdG8tcGxheSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wbGF5LWNvbnRhaW5lciB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uc2Vlay1iYXItY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLnNlZWstYmFyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmZmZmY7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uc2Vlay1iYXItYmFja2dyb3VuZCB7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XFxufVxcblxcbi5zZWVrLWJhci1tYXJrZXJzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uc2Vlay1iYXItcHJvZ3Jlc3Mge1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURCOTU0O1xcbn1cXG5cXG4ucHJvZ3Jlc3Mge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFEQjk1NDtcXG4gIHdpZHRoOiAwO1xcbn1cXG5cXG4uc2VjdGlvbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xcbn1cXG5cXG4ucGxheS1idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnBsYXktYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwMDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uZWxhcHNlZC10aW1lLFxcbi50b3RhbC10aW1lIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmVsYXBzZWQtdGltZSB7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4udG90YWwtdGltZSB7XFxuICByaWdodDogMDtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc3BvdGlmeS1zZWFyY2gge1xcbiAgd2lkdGg6IDkwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5idXR0b25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuLnN1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURCOTU0O1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5za2lwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwMDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5za2lwLFxcbi5zdWJtaXQge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG59XFxuXFxuYnV0dG9uW2Rpc2FibGVkXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5yZXN1bHRzLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICB3aWR0aDogOTUlO1xcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDJiO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHRvcDogY2FsYygxMDAlICsgNXB4KTtcXG59XFxuXFxuLnJlc3VsdC1pdGVtIHtcXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5yZXN1bHQtaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xcbn1cXG5cXG4uZ3Vlc3Mge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjYyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyBcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDsgXFxuICBmb250LXdlaWdodDogMzAwOyBcXG4gIGNvbG9yOiAjZmZmZmZmYWE7IFxcbn1cXG5cXG4uZ3Vlc3MtdGV4dCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4ucmVkLXgtaWNvbiB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNzUpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XFxufVxcblxcbi5ncmVlbi1jaGVjay1pY29uIHtcXG4gIGNvbG9yOiBncmVlbjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7IFxcbn0gXFxuXFxuXFxuLyogUmVzdWx0cyBzY3JlZW4gKi9cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hbGJ1bS1hcnQge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcXG59XFxuXFxuLnNvbmctdGl0bGUge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4uc29uZy1hcnRpc3Qge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGNvbG9yOiAjODg4O1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbn1cXG5cXG4uc2hhcmUtcmVzdWx0cy1idG4ge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFEQjk1NDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxufVxcblxcbi5zaGFyZS1yZXN1bHRzLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ4YjNiO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBpc0F1ZGlvUGF1c2VkLCBwbGF5QXVkaW8sIHBhdXNlQXVkaW8sIGdldEF1ZGlvQ3VycmVudFRpbWUgfSBmcm9tICcuL2F1ZGlvTWFuYWdlcic7XG5pbXBvcnQgeyBhbGxvd2VkRHVyYXRpb25zLCBnZXRDdXJyZW50VHVybiwgZ2V0Q3VycmVudFRyYWNrSUQsIGNoZWNrR3Vlc3MsIHNhdmVOZXdHdWVzc1RvR2FtZVN0YXRlLCBhZGRTa2lwcGVkVHVyblRvR2FtZVN0YXRlLCBjaGVja0ZvclNwb3RpZnlEdXBlcyB9IGZyb20gJy4vc2hlYXJkbGUnO1xuaW1wb3J0IHsgc2VhcmNoVHJhY2ssIGdldFRyYWNrQnlJRCB9IGZyb20gJy4vc3BvdGlmeSc7XG5pbXBvcnQgeyBnYW1lRW5kIH0gZnJvbSAnLi9yZXN1bHRzU2NyZWVuJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRVSSgpIHtcbiAgdXBkYXRlU2Vla0JhckJhY2tncm91bmQoZ2V0Q3VycmVudFR1cm4oKSk7XG59XG5cbi8vIEd1ZXNzIGJvYXJkXG5jb25zdCBndWVzc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWVzcy1jb250YWluZXInKTtcblxuZnVuY3Rpb24gYWRkSW5jb3JyZWN0R3Vlc3NUb0JvYXJkKGd1ZXNzLCB0dXJuKSB7XG5cbiAgY29uc29sZS5sb2coXCJDdXJyZW50IHR1cm4gYWNjb3JkaW5nIHRvIFVJOlwiLCB0dXJuKTtcblxuICAgIGNvbnN0IGd1ZXNzRGl2ID0gZ3Vlc3NDb250YWluZXIuY2hpbGRyZW5bdHVybiAtIDFdO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSByZWQgJ3gnIGljb25cbiAgICBjb25zdCByZWRYSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICByZWRYSWNvbi50ZXh0Q29udGVudCA9ICd4JztcbiAgICByZWRYSWNvbi5jbGFzc0xpc3QuYWRkKCdyZWQteC1pY29uJyk7XG4gICAgZ3Vlc3NEaXYuYXBwZW5kQ2hpbGQocmVkWEljb24pO1xuICBcbiAgICAvLyBBZGQgdGhlIHRyYWNrIGluZm8gdGV4dCB0byB0aGUgZ3Vlc3MgZGl2XG4gICAgY29uc3QgZ3Vlc3NUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGd1ZXNzVGV4dC50ZXh0Q29udGVudCA9IGd1ZXNzO1xuICAgIGd1ZXNzVGV4dC5jbGFzc0xpc3QuYWRkKCdndWVzcy10ZXh0Jyk7XG4gICAgZ3Vlc3NEaXYuYXBwZW5kQ2hpbGQoZ3Vlc3NUZXh0KTtcbn1cblxuZnVuY3Rpb24gYWRkQ29ycmVjdEd1ZXNzVG9Cb2FyZChndWVzcywgdHVybikge1xuXG4gIGNvbnNvbGUubG9nKFwiQ3VycmVudCB0dXJuIGFjY29yZGluZyB0byBVSTpcIiwgdHVybik7XG5cblxuICAgIGNvbnN0IGd1ZXNzRGl2ID0gZ3Vlc3NDb250YWluZXIuY2hpbGRyZW5bdHVybiAtIDFdO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBncmVlbiBjaGVja21hcmsgaWNvblxuICAgIGNvbnN0IGdyZWVuQ2hlY2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGdyZWVuQ2hlY2tJY29uLnRleHRDb250ZW50ID0gJ+Kckyc7XG4gICAgZ3JlZW5DaGVja0ljb24uY2xhc3NMaXN0LmFkZCgnZ3JlZW4tY2hlY2staWNvbicpO1xuICAgIGd1ZXNzRGl2LmFwcGVuZENoaWxkKGdyZWVuQ2hlY2tJY29uKTtcbiAgXG4gICAgLy8gQWRkIHRoZSB0cmFjayBpbmZvIHRleHQgdG8gdGhlIGd1ZXNzIGRpdlxuICAgIGNvbnN0IGd1ZXNzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBndWVzc1RleHQudGV4dENvbnRlbnQgPSBndWVzcztcbiAgICBndWVzc1RleHQuY2xhc3NMaXN0LmFkZCgnZ3Vlc3MtdGV4dCcpO1xuICAgIGd1ZXNzRGl2LmFwcGVuZENoaWxkKGd1ZXNzVGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTa2lwcGVkVHVyblRvQm9hcmQodHVybikge1xuICBjb25zdCBndWVzc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWVzcy1jb250YWluZXInKTtcbiAgY29uc3QgZ3Vlc3NEaXYgPSBndWVzc0NvbnRhaW5lci5jaGlsZHJlblt0dXJuIC0gMV07XG4gIFxuICAvLyBDcmVhdGUgdGhlIHJlZCAneCcgaWNvblxuICBjb25zdCByZWRYSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgcmVkWEljb24udGV4dENvbnRlbnQgPSAneCc7XG4gIHJlZFhJY29uLmNsYXNzTGlzdC5hZGQoJ3JlZC14LWljb24nKTtcblxuICAvLyBBZGQgdGhlIHJlZCAneCcgaWNvbiB0byB0aGUgZ3Vlc3MgZGl2XG4gIGd1ZXNzRGl2LmFwcGVuZENoaWxkKHJlZFhJY29uKTtcblxuICAvLyBBZGQgdGhlIFwiU2tpcHBlZCB0dXJuXCIgdGV4dCB0byB0aGUgZ3Vlc3MgZGl2XG4gIGNvbnN0IHNraXBwZWRUdXJuVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgc2tpcHBlZFR1cm5UZXh0LnRleHRDb250ZW50ID0gXCJTa2lwcGVkXCI7XG4gIGd1ZXNzRGl2LmFwcGVuZENoaWxkKHNraXBwZWRUdXJuVGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclNlYXJjaEJveCgpIHtcbiAgY29uc3Qgc2VhcmNoQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwb3RpZnktc2VhcmNoJyk7XG4gIHNlYXJjaEJveC52YWx1ZSA9ICcnO1xufVxuXG5cbi8vIFBsYXkvUGF1c2UgYnV0dG9uXG5jb25zdCBwbGF5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5LWJ1dHRvblwiKTtcbnBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVBsYXlCdXR0b25DbGljayk7XG5cbmZ1bmN0aW9uIGhhbmRsZVBsYXlCdXR0b25DbGljaygpIHtcbiAgICBpZiAoaXNBdWRpb1BhdXNlZCgpKSB7XG4gICAgICAgIHBsYXlBdWRpbygpO1xuICAgICAgICBwbGF5QnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhIGZhLXBhdXNlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPic7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGF1c2VBdWRpbygpO1xuICAgICAgICBwbGF5QnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhIGZhLXBsYXlcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+JztcbiAgICB9XG59XG5cblxuLy8gU2tpcCBidXR0b25cbmNvbnN0IHNraXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNraXBcIik7XG5za2lwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVTa2lwQnV0dG9uQ2xpY2spO1xuXG5mdW5jdGlvbiBoYW5kbGVTa2lwQnV0dG9uQ2xpY2soKSB7XG5cbiAgICBpZiAoZ2V0Q3VycmVudFR1cm4oKSA8IGFsbG93ZWREdXJhdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIGFkZFNraXBwZWRUdXJuVG9Cb2FyZChnZXRDdXJyZW50VHVybigpKTtcbiAgICAgICAgYWRkU2tpcHBlZFR1cm5Ub0dhbWVTdGF0ZSgpO1xuICAgICAgfVxuXG4gICAgdXBkYXRlU2Vla0JhckJhY2tncm91bmQoZ2V0Q3VycmVudFR1cm4oKSk7XG4gICAgdXBkYXRlU2tpcEJ1dHRvblRleHQoKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlUGxheUJ1dHRvbkljb25Ub1BsYXkoKSB7XG4gIHBsYXlCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEgZmEtcGxheVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTa2lwQnV0dG9uVGV4dCgpIHtcbiAgICBpZiAoZ2V0Q3VycmVudFR1cm4oKSA8IGFsbG93ZWREdXJhdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHNraXBTZWNvbmRzID0gYWxsb3dlZER1cmF0aW9uc1tnZXRDdXJyZW50VHVybigpXSAtIGFsbG93ZWREdXJhdGlvbnNbZ2V0Q3VycmVudFR1cm4oKSAtIDFdO1xuICAgICAgICBza2lwQnV0dG9uLnRleHRDb250ZW50ID0gYFNLSVAgKCske3NraXBTZWNvbmRzfXMpYDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBza2lwQnV0dG9uLnRleHRDb250ZW50ID0gXCJTS0lQXCI7XG4gICAgfVxufVxuXG4vLyAvLyBTdWJtaXQgYnV0dG9uXG4vLyBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0Jyk7XG5cbi8vIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuLy8gICAgIGNvbnN0IGdhbWVUcmFja0lEID0gZ2V0Q3VycmVudFRyYWNrSUQoKTtcbi8vICAgICBjb25zdCBndWVzc0lzQ29ycmVjdCA9IGNoZWNrR3Vlc3Moc2VsZWN0ZWRUcmFja0lELCBnYW1lVHJhY2tJRCk7XG4vLyAgICAgY29uc3Qgc2VhcmNoSW5wdXRWYWx1ZSA9IHNlYXJjaElucHV0LnZhbHVlO1xuLy8gICAgIGNvbnN0IGN1cnJlbnRUdXJuQXRUaW1lT2ZTdWJtaXQgPSBnZXRDdXJyZW50VHVybigpO1xuXG4vLyAgICAgY29uc29sZS5sb2coXCJHdWVzcyBpczpcIiwgZ3Vlc3NJc0NvcnJlY3QpO1xuXG4vLyAgICAgaWYgKCFndWVzc0lzQ29ycmVjdCkge1xuLy8gICAgICAgY29uc29sZS5sb2coXCJDaGVja2luZyBmb3IgU3BvdGlmeSBkdXBsaWNhdGVzLi4uXCIpO1xuLy8gICAgICAgY2hlY2tGb3JTcG90aWZ5RHVwZXMoc2VhcmNoSW5wdXQudmFsdWUpLnRoZW4ocmVzcG9uc2UgPT4ge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhcIkluY2x1ZGVkIGluIGR1cGVzOlwiLCByZXNwb25zZSk7XG5cbi8vICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4vLyAgICAgICAgICAgY29uc29sZS5sb2coc2VhcmNoSW5wdXRWYWx1ZSk7XG4vLyAgICAgICAgICAgYWRkQ29ycmVjdEd1ZXNzVG9Cb2FyZChzZWFyY2hJbnB1dFZhbHVlLCBjdXJyZW50VHVybkF0VGltZU9mU3VibWl0KTtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICBhZGRJbmNvcnJlY3RHdWVzc1RvQm9hcmQoc2VhcmNoSW5wdXRWYWx1ZSwgY3VycmVudFR1cm5BdFRpbWVPZlN1Ym1pdCk7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgfSlcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgYWRkQ29ycmVjdEd1ZXNzVG9Cb2FyZChzZWFyY2hJbnB1dFZhbHVlLCBjdXJyZW50VHVybkF0VGltZU9mU3VibWl0KTtcbi8vICAgICB9XG5cbi8vICAgICBzYXZlTmV3R3Vlc3NUb0dhbWVTdGF0ZShzZWFyY2hJbnB1dFZhbHVlKTtcbiAgICBcbi8vICAgICBkaXNhYmxlU3VibWl0QnV0dG9uKCk7XG4vLyAgICAgY2xlYXJTZWFyY2hCb3goKTtcbi8vICAgfSk7XG5cbi8vIEdQVCBTdWJtaXQgYnV0dG9uOlxuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpO1xuY29uc3QgcmVzdWx0U2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7IC8vIFNlbGVjdCB0aGUgcmVzdWx0cyBzY3JlZW5cblxuXG5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cblxuICBjb25zb2xlLmxvZyhcImN1cnJlbnQgdHJhY2sgSUQ6XCIsIGdldEN1cnJlbnRUcmFja0lEKCkpO1xuXG4gICAgY29uc3QgZ2FtZVRyYWNrSUQgPSBnZXRDdXJyZW50VHJhY2tJRCgpO1xuICAgIGNvbnN0IGd1ZXNzSXNDb3JyZWN0ID0gY2hlY2tHdWVzcyhzZWxlY3RlZFRyYWNrSUQsIGdhbWVUcmFja0lEKTtcbiAgICBjb25zdCBzZWFyY2hJbnB1dFZhbHVlID0gc2VhcmNoSW5wdXQudmFsdWU7XG4gICAgY29uc3QgY3VycmVudFR1cm5BdFRpbWVPZlN1Ym1pdCA9IGdldEN1cnJlbnRUdXJuKCk7XG5cbiAgICBjb25zb2xlLmxvZyhcIkd1ZXNzIGlzOlwiLCBndWVzc0lzQ29ycmVjdCk7XG5cbiAgICBpZiAoIWd1ZXNzSXNDb3JyZWN0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2hlY2tpbmcgZm9yIFNwb3RpZnkgZHVwbGljYXRlcy4uLlwiKTtcbiAgICAgICAgY2hlY2tGb3JTcG90aWZ5RHVwZXMoc2VhcmNoSW5wdXQudmFsdWUpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbmNsdWRlZCBpbiBkdXBlczpcIiwgcmVzcG9uc2UpO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWFyY2hJbnB1dFZhbHVlKTtcbiAgICAgICAgICAgICAgICBhZGRDb3JyZWN0R3Vlc3NUb0JvYXJkKHNlYXJjaElucHV0VmFsdWUsIGN1cnJlbnRUdXJuQXRUaW1lT2ZTdWJtaXQpO1xuXG4gICAgICAgICAgICAgICAgZ2V0VHJhY2tCeUlEKGdldEN1cnJlbnRUcmFja0lEKCkpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgZ2FtZUVuZChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZEluY29ycmVjdEd1ZXNzVG9Cb2FyZChzZWFyY2hJbnB1dFZhbHVlLCBjdXJyZW50VHVybkF0VGltZU9mU3VibWl0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2hlY2sgdG90YWwgZ3Vlc3NlcyBhZnRlciBlYWNoIGluY29ycmVjdCBndWVzc1xuICAgICAgICAgICAgaWYgKGdldEN1cnJlbnRUdXJuKCkgPj0gYWxsb3dlZER1cmF0aW9ucykge1xuICAgICAgICAgICAgICBnZXRUcmFja0J5SUQoZ2V0Q3VycmVudFRyYWNrSUQoKSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgZ2FtZUVuZChyZXNwb25zZSk7XG4gICAgICAgICAgICAgIH0pOyAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhZGRDb3JyZWN0R3Vlc3NUb0JvYXJkKHNlYXJjaElucHV0VmFsdWUsIGN1cnJlbnRUdXJuQXRUaW1lT2ZTdWJtaXQpO1xuICAgICAgICBnZXRUcmFja0J5SUQoZ2V0Q3VycmVudFRyYWNrSUQoKSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgZ2FtZUVuZChyZXNwb25zZSk7XG4gICAgICAgIH0pOyAgICAgIH1cblxuICAgIHNhdmVOZXdHdWVzc1RvR2FtZVN0YXRlKHNlYXJjaElucHV0VmFsdWUpO1xuXG4gICAgZGlzYWJsZVN1Ym1pdEJ1dHRvbigpO1xuICAgIGNsZWFyU2VhcmNoQm94KCk7XG59KTtcblxuXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlU3VibWl0QnV0dG9uKCkge1xuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0Jyk7XG4gIHN1Ym1pdEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVTdWJtaXRCdXR0b24oKSB7XG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKTtcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xufVxuXG5cbi8vIFByb2dyZXNzIGJhclxuY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlZWstYmFyLXByb2dyZXNzXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUHJvZ3Jlc3NCYXIoKSB7XG4gIGNvbnN0IHByb2dyZXNzUGVyY2VudGFnZSA9ICgoZ2V0QXVkaW9DdXJyZW50VGltZSgpIC8gMTYpICogMTAwICsgMSk7XG4gIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gYCR7cHJvZ3Jlc3NQZXJjZW50YWdlfSVgO1xuXG4gIGlmICghaXNBdWRpb1BhdXNlZCgpKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlUHJvZ3Jlc3NCYXIpO1xuICB9IGVsc2Uge1xuICAgIGNoYW5nZVBsYXlCdXR0b25JY29uVG9QbGF5KCk7IFxuICB9XG59XG5cbmNvbnN0IHNlZWtCYXJCYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWVrLWJhci1iYWNrZ3JvdW5kXCIpO1xuXG5mdW5jdGlvbiB1cGRhdGVTZWVrQmFyQmFja2dyb3VuZCh0dXJuKSB7XG4gICAgY29uc3QgcGxheUR1cmF0aW9uID0gYWxsb3dlZER1cmF0aW9uc1t0dXJuIC0gMV07XG4gICAgY29uc3QgcGVyY2VudGFnZSA9IChwbGF5RHVyYXRpb24gLyAxNikgKiAxMDA7XG4gICAgc2Vla0JhckJhY2tncm91bmQuc3R5bGUud2lkdGggPSBgJHtwZXJjZW50YWdlfSVgO1xufVxuXG5cbi8vIEFsbG93ZWQgbGVuZ3RoIHRvIHBsYXkgbWFya2Vyc1xuZnVuY3Rpb24gY3JlYXRlTWFya2VyKGR1cmF0aW9uKSB7XG4gICAgY29uc3QgbWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwZXJjZW50YWdlID0gKGR1cmF0aW9uIC8gMTYpICogMTAwO1xuXG4gICAgbWFya2VyLnN0eWxlLndpZHRoID0gXCIxcHhcIjtcbiAgICBtYXJrZXIuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG4gICAgbWFya2VyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIG1hcmtlci5zdHlsZS5sZWZ0ID0gYCR7cGVyY2VudGFnZX0lYDtcbiAgICBtYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZmZmZmXCI7XG5cbiAgICByZXR1cm4gbWFya2VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWFya2VycyhhbGxvd2VkRHVyYXRpb25zKSB7XG4gICAgY29uc3QgbWFya2Vyc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2Vlay1iYXItbWFya2Vyc1wiKTtcbiAgICBhbGxvd2VkRHVyYXRpb25zLmZvckVhY2goZHVyYXRpb24gPT4ge1xuICAgICAgICBjb25zdCBtYXJrZXIgPSBjcmVhdGVNYXJrZXIoZHVyYXRpb24gKyAwLjEpO1xuICAgICAgICBtYXJrZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1hcmtlcik7XG4gICAgfSk7XG59XG5cbi8vIFNlYXJjaCBiYXJcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwb3RpZnktc2VhcmNoJyk7XG5sZXQgc2VsZWN0ZWRUcmFja0lEO1xuXG4vLyBEZWJvdW5jZSBmdW5jdGlvbiB0byBzdG9wIHRoZSBhdXRvLXNlYXJjaCBmaXJpbmcgdG9vIG9mdGVuXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgICBsZXQgdGltZW91dDtcblxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIGNvbnN0IGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcblxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcblxuICAgICAgICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9O1xufVxuXG4vLyBObyBkZWJvdW5jZSBuZWVkZWQgZm9yIGRpc2FibGluZyB0aGUgYnV0dG9uXG5zZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBkaXNhYmxlU3VibWl0QnV0dG9uKCk7XG59KVxuXG5zZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGRlYm91bmNlKChldmVudCkgPT4ge1xuICAgIGNvbnN0IHF1ZXJ5ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cy1jb250YWluZXInKTtcbiAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIHJlc3VsdHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgXG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICBzZWFyY2hUcmFjayhxdWVyeSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKCh0cmFjaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJlc3VsdEl0ZW0uY2xhc3NMaXN0LmFkZCgncmVzdWx0LWl0ZW0nKTtcbiAgICAgICAgICAgIHJlc3VsdEl0ZW0udGV4dENvbnRlbnQgPSBgJHt0cmFjay5hcnRpc3RzWzBdLm5hbWV9IC0gJHt0cmFjay5uYW1lfWA7XG4gICAgICAgICAgICByZXN1bHRJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFjay1pZCcsIHRyYWNrLmlkKTtcbiAgXG4gICAgICAgICAgICByZXN1bHRJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIHNlbGVjdGVkVHJhY2tJRCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhY2staWQnKTs7XG4gIFxuICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHNlYXJjaCBpbnB1dCB3aXRoIHRoZSBzZWxlY3RlZCByZXN1bHQgYW5kIGhpZGUgdGhlIHJlc3VsdHMgY29udGFpbmVyXG4gICAgICAgICAgICAgIHNlYXJjaElucHV0LnZhbHVlID0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICAgICAgICByZXN1bHRzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgIGVuYWJsZVN1Ym1pdEJ1dHRvbigpO1xuICAgICAgICAgICAgfSk7XG4gIFxuICAgICAgICAgICAgcmVzdWx0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN1bHRJdGVtKTtcbiAgICAgICAgICB9KTtcbiAgXG4gICAgICAgICAgcmVzdWx0c0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCA1MDApKTtcblxuLy8gU2VhcmNoIHJlc3VsdHNcbmNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cy1jb250YWluZXInKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIC8vIENoZWNrIGlmIHRoZSBjbGljayB0YXJnZXQgaXMgb3V0c2lkZSBvZiB0aGUgLnJlc3VsdHMtY29udGFpbmVyXG4gIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJyNyZXN1bHRzLWNvbnRhaW5lcicpKSB7XG4gICAgcmVzdWx0c0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG59KTsiLCIvLyBJbXBvcnQgZ2FtZSBzdGF0ZSBtYW5pcHVsYXRpb24gZnVuY3Rpb25zXG5pbXBvcnQgeyBnZXRDdXJyZW50VHVybiwgYWxsb3dlZER1cmF0aW9ucyB9IGZyb20gJy4vc2hlYXJkbGUuanMnO1xuaW1wb3J0IHsgZ2V0VHJhY2tCeUlEIH0gZnJvbSAnLi9zcG90aWZ5LmpzJztcblxuLy8gVGhpcyBzaG91bGQgYmUgYSBjYWxsYmFjaywgdG8gYXZvaWQgY28tZGVwZW5kZW5jeT9cbmltcG9ydCB7IHVwZGF0ZVByb2dyZXNzQmFyIH0gZnJvbSAnLi9VSS5qcyc7XG5cbi8vIFJlcXVpcmVkIGhlcmUgc28gdGhhdCB0aGUgdXNlciBjYW4gcGF1c2UgYW5kIHJlc3VtZVxubGV0IGF1ZGlvO1xubGV0IGVuZFRpbWU7XG5sZXQgdGltZW91dElEO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R2FtZVRyYWNrQXVkaW8odHJhY2tJRCkge1xuICAgIGNvbnN0IHRyYWNrID0gYXdhaXQgZ2V0VHJhY2tCeUlEKHRyYWNrSUQpO1xuXG4gICAgcmV0dXJuIG5ldyBBdWRpbyh0cmFjay5wcmV2aWV3X3VybCk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdEF1ZGlvKHRyYWNrSUQpIHtcbiAgICBhdWRpbyA9IGF3YWl0IGdldEdhbWVUcmFja0F1ZGlvKHRyYWNrSUQpO1xuICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aW1ldXBkYXRlXCIsIHVwZGF0ZVByb2dyZXNzQmFyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYXlBdWRpbygpIHtcblxuICAgIGNvbnN0IHBsYXlEdXJhdGlvbiA9IGFsbG93ZWREdXJhdGlvbnNbZ2V0Q3VycmVudFR1cm4oKS0xXTtcbiAgICBlbmRUaW1lID0gcGxheUR1cmF0aW9uO1xuXG4gICAgYXVkaW8uY3VycmVudFRpbWUgPSAwO1xuICAgIGF1ZGlvLnBsYXkoKTtcblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SUQpO1xuICAgIHRpbWVvdXRJRCA9IHNldFRpbWVvdXQocGF1c2VBdWRpbywgZW5kVGltZSAqIDEwMDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF1c2VBdWRpbygpIHtcbiAgICBhdWRpby5wYXVzZSgpO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SUQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBdWRpb1BhdXNlZCgpIHtcbiAgICByZXR1cm4gYXVkaW8ucGF1c2VkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXVkaW9DdXJyZW50VGltZSgpIHtcbiAgICByZXR1cm4gYXVkaW8uY3VycmVudFRpbWU7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHNhdmVHYW1lU3RhdGUoZ3Vlc3Nlcykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lU3RhdGUnLCBKU09OLnN0cmluZ2lmeShndWVzc2VzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkR2FtZVN0YXRlKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdGUnKSk7XG59IiwiY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdHNNb2RhbFwiKTtcblxuLy8gVGhlIGJlbG93IHNob3VsZCBhbHNvIHRha2UgaW4gdGhlIGdhbWVTdGF0ZT9cbi8vIFRoZSBpZGVhIGJlaW5nLCB3ZSBuZWVkIHRvIHNob3cgaWYgdGhlIHVzZXIgd2FzIGNvcnJlY3Qgb3Igbm90XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1lRW5kKHRyYWNrSW5mbykge1xuXG4gICAgY29uc29sZS5sb2codHJhY2tJbmZvKTtcblxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICAvLyBTZXQgdGhlIHNvbmcncyBkZXRhaWxzXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb25nLXRpdGxlXCIpLnRleHRDb250ZW50ID0gdHJhY2tJbmZvLm5hbWU7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb25nLWFydGlzdFwiKS50ZXh0Q29udGVudCA9IHRyYWNrSW5mby5hcnRpc3RzWzBdLm5hbWU7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGJ1bS1hcnRcIikuc3JjID0gdHJhY2tJbmZvLmFsYnVtLmltYWdlc1swXS51cmw7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb25nLXByZXZpZXdcIikuc3JjID0gdHJhY2tJbmZvLnByZXZpZXdfdXJsO1xufVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoYXJlLXJlc3VsdHMtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coXCJTaGFyZSBSZXN1bHRzIEJ1dHRvbiBDbGlja2VkXCIpO1xufSk7XG5cbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBnZXRUb2RheXNUcmFja0lEIH0gZnJvbSBcIi4vdHJhY2tTZWxlY3Rpb25cIjtcbmltcG9ydCB7IHNhdmVHYW1lU3RhdGUgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7IGluaXRBdWRpbyB9IGZyb20gXCIuL2F1ZGlvTWFuYWdlclwiO1xuaW1wb3J0IHsgZ2V0QWxsVHJhY2tJRHNCeVNlYXJjaFF1ZXJ5IH0gZnJvbSBcIi4vc3BvdGlmeVwiO1xuXG5leHBvcnQgY29uc3QgYWxsb3dlZER1cmF0aW9ucyA9IFsxLCAyLCA0LCA3LCAxMSwgMTZdO1xuXG5sZXQgZ2FtZVN0YXRlID0ge1xuICBjdXJyZW50VHVybjogMSxcbiAgZ3Vlc3NlczogW10sXG4gIHRyYWNrSUQ6IG51bGxcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50VHVybiA9ICgpID0+IGdhbWVTdGF0ZS5jdXJyZW50VHVybjtcbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50VHJhY2tJRCA9ICgpID0+IGdhbWVTdGF0ZS50cmFja0lEO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBOZXdHYW1lKCkge1xuXG4gIC8vIEN1cmVudGx5IGp1c3QgcHVsbHMgdGhlIGZpcnN0IG9uZS4gRXZlbnR1YWxseSBpdCB3aWxsIGNhbGMgaXQgb24gZGF0ZS5cbiAgY29uc3QgdG9kYXlzVHJhY2tJRCA9IGdldFRvZGF5c1RyYWNrSUQoKTtcblxuICBnYW1lU3RhdGUuY3VycmVudFR1cm4gPSAxO1xuICBnYW1lU3RhdGUuZ3Vlc3NlcyA9IFtdO1xuICBnYW1lU3RhdGUudHJhY2tJRCA9IHRvZGF5c1RyYWNrSUQ7XG5cbiAgaW5pdEF1ZGlvKHRvZGF5c1RyYWNrSUQpO1xuXG4gIGNvbnNvbGUubG9nKFwiTmV3IGdhbWUgc3RhdGVcIiwgZ2FtZVN0YXRlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGltcG9ydEdhbWVTdGF0ZShnYW1lU3RhdGUpIHtcbiAgY29uc29sZS5sb2coZ2FtZVN0YXRlKTtcblxuICAvLyBUaGlzIHdpbGwgYmUgcmVxdWlyZWQgaGVyZSBvbmNlIHRoaXMgZnVuY3Rpb24gaXMgd3JpdHRlblxuICAvLyBpbml0QXVkaW8oZ2FtZVN0YXRlLnRyYWNrSUQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tHdWVzcyhndWVzc2VkVHJhY2tJRCwgZ2FtZVRyYWNrSUQpIHtcbiAgLy8gY29uc29sZS5sb2coXCJHdWVzczpcIiwgZ3Vlc3NlZFRyYWNrSUQpO1xuICAvLyBjb25zb2xlLmxvZyhcIkdhbWUgdHJhY2s6XCIsIGdhbWVUcmFja0lEKTtcblxuICByZXR1cm4gZ3Vlc3NlZFRyYWNrSUQgPT09IGdhbWVUcmFja0lEO1xuXG4gIC8vIGlmIGZhbHNlLCBydW4gdGhlIGR1cGVzIGNoZWNrXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0ZvclNwb3RpZnlEdXBlcyhzZWFyY2hRdWVyeSkge1xuICAgIC8vIElmIGZhbHNlLCBjaGVjayB0aGUgdXNlcidzIGd1ZXNzIGFnYWluc3Qgd2hhdCBzaG91bGQgaG9wZWZ1bGx5IGJlIFNwb3RpZnkncyBkdXBlc1xuICAgIGNvbnN0IGZldGNoZWRJRHMgPSBhd2FpdCBnZXRBbGxUcmFja0lEc0J5U2VhcmNoUXVlcnkoc2VhcmNoUXVlcnkpO1xuXG4gICAgLy8gSWYgZ3Vlc3NlZFRyYWNrSUQgaXMgaW4gdGhlIGFycmF5IHJldHVybmVkLCByZXR1cm4gdHJ1ZVxuICAgIHJldHVybiBmZXRjaGVkSURzLmluY2x1ZGVzKGdldEN1cnJlbnRUcmFja0lEKCkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZU5ld0d1ZXNzVG9HYW1lU3RhdGUoZ3Vlc3MpIHtcblxuICBnYW1lU3RhdGUuZ3Vlc3Nlcy5wdXNoKGd1ZXNzKTtcbiAgaW5jcmVtZW50Q3VycmVudFR1cm5JbkdhbWVTdGF0ZSgpO1xuXG4gIGF3YWl0IHNhdmVHYW1lU3RhdGUoZ2FtZVN0YXRlKTtcblxuICBjb25zb2xlLmxvZyhcIkdhbWUgc3RhdGUgYWZ0ZXIgc2F2ZTpcIiwgZ2FtZVN0YXRlKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkU2tpcHBlZFR1cm5Ub0dhbWVTdGF0ZSgpIHtcbiAgLy8gU2F2ZSBhIG51bGwgZ3Vlc3MgdG8gcmVwcmVzZW50IGEgc2tpcHBlZCB0dXJuXG4gIGdhbWVTdGF0ZS5ndWVzc2VzLnB1c2gobnVsbCk7XG5cbiAgaW5jcmVtZW50Q3VycmVudFR1cm5JbkdhbWVTdGF0ZSgpO1xufVxuXG5mdW5jdGlvbiBpbmNyZW1lbnRDdXJyZW50VHVybkluR2FtZVN0YXRlKCkge1xuICBnYW1lU3RhdGUuY3VycmVudFR1cm4rKztcbiAgc2F2ZUdhbWVTdGF0ZShnYW1lU3RhdGUpO1xufVxuXG5cblxuXG5cbiIsImltcG9ydCBTcG90aWZ5VG9rZW5NYW5hZ2VyIGZyb20gJy4vc3BvdGlmeVRva2VuTWFuYWdlci5qcyc7XG5cbmNvbnN0IGNsaWVudElkID0gXCI3NGFjOTQ5Y2E1ODc0MDI0ODRkY2VmMTQwOGI0ZDdmM1wiO1xuY29uc3QgY2xpZW50U2VjcmV0ID0gXCIzMTNhMmMxNWZjODQ0Y2E1YmMyMjc1NTU3Mjg3NGVlN1wiO1xuXG4vLyBjb25zdCBjbGllbnRJZCA9IHByb2Nlc3MuZW52LlNQT1RJRllfQ0xJRU5UX0lEO1xuLy8gY29uc3QgY2xpZW50U2VjcmV0ID0gcHJvY2Vzcy5lbnYuU1BPVElGWV9DTElFTlRfU0VDUkVUO1xuXG5jb25zdCB0b2tlbk1hbmFnZXIgPSBuZXcgU3BvdGlmeVRva2VuTWFuYWdlcihjbGllbnRJZCwgY2xpZW50U2VjcmV0KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaFRyYWNrKHNlYXJjaFRlcm0sIG1hcmtldCA9ICdHQicpIHtcblxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gYXdhaXQgdG9rZW5NYW5hZ2VyLmdldEFjY2Vzc1Rva2VuKCk7XG5cbiAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcbiAgICB9O1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gc2VhcmNoKHNlYXJjaFRlcm0pIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgICAgICBxOiBzZWFyY2hUZXJtLFxuICAgICAgICAgICAgdHlwZTogJ3RyYWNrJyxcbiAgICAgICAgICAgIGxpbWl0OiAxMCxcbiAgICAgICAgICAgIG1hcmtldFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9zZWFyY2g/JHtwYXJhbXN9YCwge1xuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEudHJhY2tzLml0ZW1zO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiBhd2FpdCBzZWFyY2goc2VhcmNoVGVybSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUcmFja0J5SUQodHJhY2tJRCwgbWFya2V0ID0gJ0dCJykge1xuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gYXdhaXQgdG9rZW5NYW5hZ2VyLmdldEFjY2Vzc1Rva2VuKCk7XG4gIFxuICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcbiAgICB9O1xuICBcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS90cmFja3MvJHt0cmFja0lEfT9tYXJrZXQ9JHttYXJrZXR9YCwge1xuICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICB9KTtcbiAgXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH1cbiAgXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFRyYWNrSURzQnlTZWFyY2hRdWVyeShzZWFyY2hRdWVyeSkge1xuICBjb25zdCBzZWFyY2hSZXN1bHRzID0gYXdhaXQgc2VhcmNoVHJhY2soc2VhcmNoUXVlcnkpO1xuICBjb25zdCB0cmFja0lEcyA9IHNlYXJjaFJlc3VsdHMubWFwKHRyYWNrID0+IHRyYWNrLmlkKTtcblxuICByZXR1cm4gdHJhY2tJRHM7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTcG90aWZ5VG9rZW5NYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihjbGllbnRJZCwgY2xpZW50U2VjcmV0KSB7XG4gICAgICB0aGlzLmNsaWVudElkID0gY2xpZW50SWQ7XG4gICAgICB0aGlzLmNsaWVudFNlY3JldCA9IGNsaWVudFNlY3JldDtcbiAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBudWxsO1xuICAgICAgdGhpcy5leHBpcmF0aW9uVGltZSA9IG51bGw7XG4gICAgfVxuICBcbiAgICBhc3luYyByZXF1ZXN0QWNjZXNzVG9rZW4oY2xpZW50SWQsIGNsaWVudFNlY3JldCkge1xuICAgICAgY29uc3QgdG9rZW5FbmRwb2ludCA9IFwiaHR0cHM6Ly9hY2NvdW50cy5zcG90aWZ5LmNvbS9hcGkvdG9rZW5cIjtcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICB9O1xuICAgICAgY29uc3QgYm9keSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICBncmFudF90eXBlOiBcImNsaWVudF9jcmVkZW50aWFsc1wiLFxuICAgICAgICBjbGllbnRfaWQ6IGNsaWVudElkLFxuICAgICAgICBjbGllbnRfc2VjcmV0OiBjbGllbnRTZWNyZXQsXG4gICAgICB9KTtcbiAgXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRva2VuRW5kcG9pbnQsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgYm9keTogYm9keSxcbiAgICAgIH0pO1xuICBcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YS5hY2Nlc3NfdG9rZW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gb2J0YWluIGFjY2VzcyB0b2tlblwiKTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGFzeW5jIGdldEFjY2Vzc1Rva2VuKCkge1xuICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIGlmICghdGhpcy5hY2Nlc3NUb2tlbiB8fCBjdXJyZW50VGltZSA+PSB0aGlzLmV4cGlyYXRpb25UaW1lKSB7XG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBhd2FpdCB0aGlzLnJlcXVlc3RBY2Nlc3NUb2tlbih0aGlzLmNsaWVudElkLCB0aGlzLmNsaWVudFNlY3JldCk7XG4gICAgICAgIGNvbnN0IGV4cGlyZXNJbk1pbGxpc2Vjb25kcyA9IDM2MDAgKiAxMDAwOyAvLyAxIGhvdXIgaW4gbWlsbGlzZWNvbmRzXG4gICAgICAgIHRoaXMuZXhwaXJhdGlvblRpbWUgPSBjdXJyZW50VGltZSArIGV4cGlyZXNJbk1pbGxpc2Vjb25kcztcbiAgICAgIH1cbiAgXG4gICAgICByZXR1cm4gdGhpcy5hY2Nlc3NUb2tlbjtcbiAgICB9XG4gIH0iLCJjb25zdCB0cmFja1NlbGVjdGlvbiA9IFsnN0oxdXh3bnhmUUx1NEFQaWNFNVJuaicsXG4nMmRsRWRERW11UXNyY1hhQUwzWm56aScsXG4nNjJMSkZhWWloc2RWcnJrZ1VPSkMwNScsXG4nMEhFbW5BVVQ4UEh6bklBQW1WWHFGSicsXG4nN0Z3QnRjZWNtbHBjMXNMeVNQWGVHRScsXG4nMTB6bHdSN2t2VmJEOU9Ca2VaV3IzTCcsXG4nMldmYU9pTWtDdnk3RjVmY3Ayelo4TCcsXG4nNzdOTlpRU3F6TE5xaDJBOUpoTFJrZycsXG4nMDdqNVJMSkh3c200Y1ViM0dHb1czdycsXG4nMjJzTHVKWWN2Wk9Tb0xMUllldjFzNScsXG4nM0JvdmR6ZmFYNGpiNUtGUXdvUGZBdycsXG4nMzR4NmhFSmdHQU9Rdm1sTXFsNUlnZScsXG4nM0NTcHprb0wxWGdEQloxcTlhRENVVicsXG4nMjhvOG0xbzlSR3R5U2JtUUp0QXZ5bScsXG4nMUtzSThORWVBbmE4Wklkb2pJM0ZpVCcsXG4nMm9sVm0xbEhpY3B2ZU1BbzRBVURSQicsXG4nMzlsU2VxbnlqWkplalJ1YVJFZnlMTCcsXG4nNVBKQnJ3S0g3U2RCeUd0RENCR0p3YicsXG4nNDRoT0dnMXVGZzFYSlpHWllOd1ltTScsXG4nNGFLSXM1dDlUcVA1OWJ0bENHUHJndycsXG4nMEE0UFp1ZXBUY0lRVnZBNW03UjBNMScsXG4nN2c3dHliOHpNOVVlS3Nkdm9zVzlXMycsXG4nNG85S2o3b25rbHQ2eGJZbDNqVkFycCcsXG4nMGJCVlJzQmJnbnpXOHdtZGxEN0FwcScsXG4nNWUxZW5UME5QWFBaa1I4RjNSNThiWScsXG4nNUlrZGg5MURkRXE0NGNmcElLUnNMdycsXG4nMlgyNDJEOFZoVGlrV1VUMWkxbllKQycsXG4nMlRBZkdpck5KZTBxVU9lUm1Xc1N5aycsXG4nM212S3ZpZXJGQVZHQ2RnZHg0RU40UScsXG4nNkhaNjdWSW14cXI4YU1CRUVoYmx6ZicsXG4nNmdsc01XSU1JeFE0QmVkekxxR1ZpNCcsXG4nM0xJNE1taWJUa1hINWNHcENHWmd5dycsXG4nNm5UaUloTG1RM0ZXaHZyR2FmdzJ6aicsXG4nM2Q5RENocmRjNkJPZUZzYnJaM0lzMCcsXG4nNE9lQlpsRWFMV3lKV2FZbDRVdmhUOScsXG4nNVRHWW80TXJOS3FJdkpxZ3gxMzRweScsXG4nNDNlQmdZUlRtdTVCSm5DSkRCVTVIYicsXG4nNkk0c25MclZPckpzTGRkNDNpc2MyNycsXG4nNHN6MU5nMkNnaWRmcXFpeTBwTkw2UicsXG4nNTRYNzhkaVNMb1VESTNqb0MyYmpNeicsXG4nMFFlSTc5c3AxdlM4TDNKZ3BFTzdtRCddO1xuXG4vLyAvLyBJbiB0aGlzIGZ1bmN0aW9uLCBJJ20gZ29pbmcgdG8gc2V0IHVwIGEgXCJzdGFydCBkYXRlXCIgZm9yIHRoZSBhcHAuXG4vLyAvLyBJJ2xsIGJhc2Ugd2hpY2ggdHJhY2sgaXMgdGhlIHRyYWNrIG9mIHRoZSBkYXkgZnJvbSB0aGUgZGlzdGFuY2UgaW4gdGltZSBmcm9tIHRoaXMgZGF0ZVxuXG5cbmZ1bmN0aW9uIGdldEN1cnJlbnREYXkoc3RhcnREYXRlKSB7XG4gICAgLy8gR2V0IHRoZSBjdXJyZW50IGRhdGUgaW4gbG9jYWwgdGltZVxuICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIFxuICAgIC8vIFNldCBib3RoIGRhdGVzIHRvIG1pZG5pZ2h0IChzdGFydCBvZiB0aGUgZGF5KSBpbiBsb2NhbCB0aW1lXG4gICAgc3RhcnREYXRlID0gbmV3IERhdGUobmV3IERhdGUoc3RhcnREYXRlKS5zZXRIb3VycygwLDAsMCwwKSk7XG4gICAgY3VycmVudERhdGUgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZS5zZXRIb3VycygwLDAsMCwwKSk7XG4gIFxuICAgIC8vIENvbnZlcnQgYm90aCBkYXRlcyB0byBtaWxsaXNlY29uZHNcbiAgICBsZXQgc3RhcnREYXRlVGltZSA9IHN0YXJ0RGF0ZS5nZXRUaW1lKCk7XG4gICAgbGV0IGN1cnJlbnREYXRlVGltZSA9IGN1cnJlbnREYXRlLmdldFRpbWUoKTtcbiAgXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBkaWZmZXJlbmNlIGluIG1pbGxpc2Vjb25kc1xuICAgIGxldCBkaWZmZXJlbmNlSW5UaW1lID0gY3VycmVudERhdGVUaW1lIC0gc3RhcnREYXRlVGltZTtcbiAgXG4gICAgLy8gQ29udmVydCB0aGUgZGlmZmVyZW5jZSBpbiBtaWxsaXNlY29uZHMgdG8gZGF5c1xuICAgIGxldCBkaWZmZXJlbmNlSW5EYXlzID0gTWF0aC5mbG9vcihkaWZmZXJlbmNlSW5UaW1lIC8gKDEwMDAgKiAzNjAwICogMjQpKTtcbiAgXG4gICAgcmV0dXJuIGRpZmZlcmVuY2VJbkRheXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2RheXNUcmFja0lEKHN0YXJ0RGF0ZSkge1xuXG4gICAgLy8gRm9yIG5vdywgd2UganVzdCBnZXQgdHJhY2sgMFxuICAgIHJldHVybiB0cmFja1NlbGVjdGlvblswXTtcblxuICAgIHJldHVybiB0cmFja1NlbGVjdGlvbltnZXRDdXJyZW50RGF5KHN0YXJ0RGF0ZSldO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGVzLmNzcydcblxuaW1wb3J0IHsgc2V0dXBOZXdHYW1lLCBpbXBvcnRHYW1lU3RhdGUsIGdldEN1cnJlbnRUcmFjaywgYWxsb3dlZER1cmF0aW9ucyB9IGZyb20gJy4vc2hlYXJkbGUnO1xuaW1wb3J0IHsgbG9hZEdhbWVTdGF0ZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcblxuaW1wb3J0IHsgY3JlYXRlTWFya2VycywgaW5pdFVJIH0gZnJvbSAnLi9VSSc7XG5cbmltcG9ydCB7IGdhbWVFbmQgfSBmcm9tICcuL3Jlc3VsdHNTY3JlZW4nO1xuLy8ga2lsbCB0aGUgYmVsb3cgYWZ0ZXIgdGVzdGluZ1xuaW1wb3J0IHsgZ2V0VHJhY2tCeUlEIH0gZnJvbSAnLi9zcG90aWZ5JztcblxuLy8gY29uc3QgZ2FtZUxvYWRlZCA9IGxvYWRHYW1lU3RhdGUoKTtcblxuLy8gaWYgKGdhbWVMb2FkZWQpIHtcbi8vICAgICBjb25zb2xlLmxvZyhcIkdhbWUgc3VjY2Vzc2Z1bGx5IGxvYWRlZFwiKTtcblxuLy8gICAgIC8vIGltcG9ydEdhbWVTdGF0ZShnYW1lTG9hZGVkKTtcblxuLy8gICAgIC8vIExvYWRpbmcgbmV3IGdhbWUgYW55d2F5IGFzIEkgY2FuJ3QgYmUgYm90aGVyZWQgdG8gZGVsZXRlIGxvY2FsU3RvcmFnZSBldmVyeSB0aW1lXG4vLyAgICAgc2V0dXBOZXdHYW1lKCk7XG5cbi8vIH0gZWxzZSB7XG4vLyAgICAgY29uc29sZS5sb2coXCJTdGFydGluZyBuZXcgZ2FtZVwiKTtcbi8vICAgICBzZXR1cE5ld0dhbWUoKTtcbi8vIH1cblxuXG5zZXR1cE5ld0dhbWUoKTtcblxuLy8gVGhlc2UgcHJvYmFibHkgc2hvdWxkbid0IGJlIG5lZWRlZD9cbmluaXRVSSgpO1xuY3JlYXRlTWFya2VycyhhbGxvd2VkRHVyYXRpb25zKTtcblxuLy8gLy8gVGVzdCByZXN1bHRzIHNjcmVlblxuLy8gY29uc3QgdGVzdFRyYWNrID0gZ2V0VHJhY2tCeUlEKFwiN0oxdXh3bnhmUUx1NEFQaWNFNVJualwiKTtcblxuLy8gdGVzdFRyYWNrLnRoZW4ocmVzcG9uc2UgPT4ge1xuLy8gICAgIGdhbWVFbmQocmVzcG9uc2UpO1xuLy8gfSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==