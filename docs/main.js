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
        startProgressBar(duration);
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
        updateSeekBarBackground((0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)());
        updateSkipButtonText();

      } else {

        // End game
        (0,_spotify__WEBPACK_IMPORTED_MODULE_2__.getTrackByID)((0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTrackID)()).then(response => {
          (0,_resultsScreen__WEBPACK_IMPORTED_MODULE_3__.gameEnd)(response);
        });

      }
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

// Submit button
const submitButton = document.querySelector('.submit');
const resultScreen = document.querySelector('.modal');

submitButton.addEventListener('click', () => {

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

    updateSeekBarBackground((0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7O1VDekVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0Qjs7QUFFa0U7QUFDL0M7O0FBRUY7O0FBRUg7QUFDMUM7QUFDeUM7O0FBRXpDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7QUFHQSx1REFBWTs7QUFFWjtBQUNBLDJDQUFNO0FBQ04sa0RBQWEsQ0FBQyx1REFBZ0I7O0FBRTlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGVhcmRsZS8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIiwid2VicGFjazovL3NoZWFyZGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9zcmMvYXVkaW9NYW5hZ2VyLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vc3JjL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL3NyYy9yZXN1bHRzU2NyZWVuLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vc3JjL3NoZWFyZGxlLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vc3JjL3Nwb3RpZnkuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9zcmMvc3BvdGlmeVRva2VuTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL3NyYy90cmFja1NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaGVhcmRsZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zaGVhcmRsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zaGVhcmRsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NoZWFyZGxlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDkwJTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXG4gICAgb3ZlcmZsb3c6IG5vbmU7XFxufVxcblxcbi50aXRsZSB7XFxufVxcblxcbi5pbmZvLFxcbi5ob3ctdG8tcGxheSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wbGF5LWNvbnRhaW5lciB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uc2Vlay1iYXItY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLnNlZWstYmFyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmZmZmY7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uc2Vlay1iYXItYmFja2dyb3VuZCB7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XFxufVxcblxcbi5zZWVrLWJhci1tYXJrZXJzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uc2Vlay1iYXItcHJvZ3Jlc3Mge1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURCOTU0O1xcbn1cXG5cXG4ucHJvZ3Jlc3Mge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFEQjk1NDtcXG4gIHdpZHRoOiAwO1xcbn1cXG5cXG4uc2VjdGlvbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xcbn1cXG5cXG4ucGxheS1idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnBsYXktYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwMDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uZWxhcHNlZC10aW1lLFxcbi50b3RhbC10aW1lIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmVsYXBzZWQtdGltZSB7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4udG90YWwtdGltZSB7XFxuICByaWdodDogMDtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc3BvdGlmeS1zZWFyY2gge1xcbiAgd2lkdGg6IDkwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5idXR0b25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuLnN1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURCOTU0O1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5za2lwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwMDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5za2lwLFxcbi5zdWJtaXQge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG59XFxuXFxuYnV0dG9uW2Rpc2FibGVkXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5yZXN1bHRzLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICB3aWR0aDogOTUlO1xcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDJiO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHRvcDogY2FsYygxMDAlICsgNXB4KTtcXG59XFxuXFxuLnJlc3VsdC1pdGVtIHtcXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5yZXN1bHQtaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xcbn1cXG5cXG4uZ3Vlc3Mge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjYyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyBcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDsgXFxuICBmb250LXdlaWdodDogMzAwOyBcXG4gIGNvbG9yOiAjZmZmZmZmYWE7IFxcbn1cXG5cXG4uZ3Vlc3MtdGV4dCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4ucmVkLXgtaWNvbiB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNzUpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XFxufVxcblxcbi5ncmVlbi1jaGVjay1pY29uIHtcXG4gIGNvbG9yOiBncmVlbjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7IFxcbn0gXFxuXFxuXFxuLyogUmVzdWx0cyBzY3JlZW4gKi9cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hbGJ1bS1hcnQge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcXG59XFxuXFxuLnNvbmctdGl0bGUge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4uc29uZy1hcnRpc3Qge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGNvbG9yOiAjODg4O1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbn1cXG5cXG4uc2hhcmUtcmVzdWx0cy1idG4ge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFEQjk1NDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxufVxcblxcbi5zaGFyZS1yZXN1bHRzLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ4YjNiO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0FBQ0E7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULDJCQUEyQjtFQUMzQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFFBQVE7RUFDUixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOzs7QUFHQSxtQkFBbUI7O0FBRW5CO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixVQUFVO0VBQ1YsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogOTAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZy10b3A6IDYwcHg7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xcbiAgICBvdmVyZmxvdzogbm9uZTtcXG59XFxuXFxuLnRpdGxlIHtcXG59XFxuXFxuLmluZm8sXFxuLmhvdy10by1wbGF5IHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBsYXktY29udGFpbmVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5zZWVrLWJhci1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4uc2Vlay1iYXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZmZmZjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5zZWVrLWJhci1iYWNrZ3JvdW5kIHtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcXG59XFxuXFxuLnNlZWstYmFyLW1hcmtlcnMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5zZWVrLWJhci1wcm9ncmVzcyB7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxREI5NTQ7XFxufVxcblxcbi5wcm9ncmVzcyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURCOTU0O1xcbiAgd2lkdGg6IDA7XFxufVxcblxcbi5zZWN0aW9uIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XFxufVxcblxcbi5wbGF5LWJ1dHRvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucGxheS1idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5lbGFwc2VkLXRpbWUsXFxuLnRvdGFsLXRpbWUge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZWxhcHNlZC10aW1lIHtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi50b3RhbC10aW1lIHtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zcG90aWZ5LXNlYXJjaCB7XFxuICB3aWR0aDogOTAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmJ1dHRvbnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG4uc3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxREI5NTQ7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnNraXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnNraXAsXFxuLnN1Ym1pdCB7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbn1cXG5cXG5idXR0b25bZGlzYWJsZWRdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnJlc3VsdHMtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHdpZHRoOiA5NSU7XFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMmI7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdG9wOiBjYWxjKDEwMCUgKyA1cHgpO1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0ge1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLnJlc3VsdC1pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XFxufVxcblxcbi5ndWVzcyB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmNjI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4OyBcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7IFxcbiAgY29sb3I6ICNmZmZmZmZhYTsgXFxufVxcblxcbi5ndWVzcy10ZXh0IHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5yZWQteC1pY29uIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC43NSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMTJweDtcXG59XFxuXFxuLmdyZWVuLWNoZWNrLWljb24ge1xcbiAgY29sb3I6IGdyZWVuO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDhweDsgXFxufSBcXG5cXG5cXG4vKiBSZXN1bHRzIHNjcmVlbiAqL1xcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFsYnVtLWFydCB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbn1cXG5cXG4uc29uZy10aXRsZSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNGRkZGRkY7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbi5zb25nLWFydGlzdCB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgY29sb3I6ICM4ODg7XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxufVxcblxcbi5zaGFyZS1yZXN1bHRzLWJ0biB7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgY29sb3I6ICNGRkZGRkY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURCOTU0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG59XFxuXFxuLnNoYXJlLXJlc3VsdHMtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDhiM2I7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGlzQXVkaW9QYXVzZWQsIHBsYXlBdWRpbywgcGF1c2VBdWRpbywgZ2V0QXVkaW9DdXJyZW50VGltZSB9IGZyb20gJy4vYXVkaW9NYW5hZ2VyJztcbmltcG9ydCB7IGFsbG93ZWREdXJhdGlvbnMsIGdldEN1cnJlbnRUdXJuLCBnZXRDdXJyZW50VHJhY2tJRCwgY2hlY2tHdWVzcywgc2F2ZU5ld0d1ZXNzVG9HYW1lU3RhdGUsIGFkZFNraXBwZWRUdXJuVG9HYW1lU3RhdGUsIGNoZWNrRm9yU3BvdGlmeUR1cGVzIH0gZnJvbSAnLi9zaGVhcmRsZSc7XG5pbXBvcnQgeyBzZWFyY2hUcmFjaywgZ2V0VHJhY2tCeUlEIH0gZnJvbSAnLi9zcG90aWZ5JztcbmltcG9ydCB7IGdhbWVFbmQgfSBmcm9tICcuL3Jlc3VsdHNTY3JlZW4nO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFVJKCkge1xuICB1cGRhdGVTZWVrQmFyQmFja2dyb3VuZChnZXRDdXJyZW50VHVybigpKTtcbn1cblxuLy8gR3Vlc3MgYm9hcmRcbmNvbnN0IGd1ZXNzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmd1ZXNzLWNvbnRhaW5lcicpO1xuXG5mdW5jdGlvbiBhZGRJbmNvcnJlY3RHdWVzc1RvQm9hcmQoZ3Vlc3MsIHR1cm4pIHtcblxuICBjb25zb2xlLmxvZyhcIkN1cnJlbnQgdHVybiBhY2NvcmRpbmcgdG8gVUk6XCIsIHR1cm4pO1xuXG4gICAgY29uc3QgZ3Vlc3NEaXYgPSBndWVzc0NvbnRhaW5lci5jaGlsZHJlblt0dXJuIC0gMV07XG5cbiAgICAvLyBDcmVhdGUgdGhlIHJlZCAneCcgaWNvblxuICAgIGNvbnN0IHJlZFhJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHJlZFhJY29uLnRleHRDb250ZW50ID0gJ3gnO1xuICAgIHJlZFhJY29uLmNsYXNzTGlzdC5hZGQoJ3JlZC14LWljb24nKTtcbiAgICBndWVzc0Rpdi5hcHBlbmRDaGlsZChyZWRYSWNvbik7XG4gIFxuICAgIC8vIEFkZCB0aGUgdHJhY2sgaW5mbyB0ZXh0IHRvIHRoZSBndWVzcyBkaXZcbiAgICBjb25zdCBndWVzc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZ3Vlc3NUZXh0LnRleHRDb250ZW50ID0gZ3Vlc3M7XG4gICAgZ3Vlc3NUZXh0LmNsYXNzTGlzdC5hZGQoJ2d1ZXNzLXRleHQnKTtcbiAgICBndWVzc0Rpdi5hcHBlbmRDaGlsZChndWVzc1RleHQpO1xufVxuXG5mdW5jdGlvbiBhZGRDb3JyZWN0R3Vlc3NUb0JvYXJkKGd1ZXNzLCB0dXJuKSB7XG5cbiAgY29uc29sZS5sb2coXCJDdXJyZW50IHR1cm4gYWNjb3JkaW5nIHRvIFVJOlwiLCB0dXJuKTtcblxuXG4gICAgY29uc3QgZ3Vlc3NEaXYgPSBndWVzc0NvbnRhaW5lci5jaGlsZHJlblt0dXJuIC0gMV07XG5cbiAgICAvLyBDcmVhdGUgdGhlIGdyZWVuIGNoZWNrbWFyayBpY29uXG4gICAgY29uc3QgZ3JlZW5DaGVja0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZ3JlZW5DaGVja0ljb24udGV4dENvbnRlbnQgPSAn4pyTJztcbiAgICBncmVlbkNoZWNrSWNvbi5jbGFzc0xpc3QuYWRkKCdncmVlbi1jaGVjay1pY29uJyk7XG4gICAgZ3Vlc3NEaXYuYXBwZW5kQ2hpbGQoZ3JlZW5DaGVja0ljb24pO1xuICBcbiAgICAvLyBBZGQgdGhlIHRyYWNrIGluZm8gdGV4dCB0byB0aGUgZ3Vlc3MgZGl2XG4gICAgY29uc3QgZ3Vlc3NUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGd1ZXNzVGV4dC50ZXh0Q29udGVudCA9IGd1ZXNzO1xuICAgIGd1ZXNzVGV4dC5jbGFzc0xpc3QuYWRkKCdndWVzcy10ZXh0Jyk7XG4gICAgZ3Vlc3NEaXYuYXBwZW5kQ2hpbGQoZ3Vlc3NUZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFNraXBwZWRUdXJuVG9Cb2FyZCh0dXJuKSB7XG4gIGNvbnN0IGd1ZXNzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmd1ZXNzLWNvbnRhaW5lcicpO1xuICBjb25zdCBndWVzc0RpdiA9IGd1ZXNzQ29udGFpbmVyLmNoaWxkcmVuW3R1cm4gLSAxXTtcbiAgXG4gIC8vIENyZWF0ZSB0aGUgcmVkICd4JyBpY29uXG4gIGNvbnN0IHJlZFhJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICByZWRYSWNvbi50ZXh0Q29udGVudCA9ICd4JztcbiAgcmVkWEljb24uY2xhc3NMaXN0LmFkZCgncmVkLXgtaWNvbicpO1xuXG4gIC8vIEFkZCB0aGUgcmVkICd4JyBpY29uIHRvIHRoZSBndWVzcyBkaXZcbiAgZ3Vlc3NEaXYuYXBwZW5kQ2hpbGQocmVkWEljb24pO1xuXG4gIC8vIEFkZCB0aGUgXCJTa2lwcGVkIHR1cm5cIiB0ZXh0IHRvIHRoZSBndWVzcyBkaXZcbiAgY29uc3Qgc2tpcHBlZFR1cm5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBza2lwcGVkVHVyblRleHQudGV4dENvbnRlbnQgPSBcIlNraXBwZWRcIjtcbiAgZ3Vlc3NEaXYuYXBwZW5kQ2hpbGQoc2tpcHBlZFR1cm5UZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyU2VhcmNoQm94KCkge1xuICBjb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BvdGlmeS1zZWFyY2gnKTtcbiAgc2VhcmNoQm94LnZhbHVlID0gJyc7XG59XG5cblxuLy8gUGxheS9QYXVzZSBidXR0b25cbmNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXktYnV0dG9uXCIpO1xucGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUGxheUJ1dHRvbkNsaWNrKTtcblxuZnVuY3Rpb24gaGFuZGxlUGxheUJ1dHRvbkNsaWNrKCkge1xuICAgIGlmIChpc0F1ZGlvUGF1c2VkKCkpIHtcbiAgICAgICAgcGxheUF1ZGlvKCk7XG4gICAgICAgIHN0YXJ0UHJvZ3Jlc3NCYXIoZHVyYXRpb24pO1xuICAgICAgICBwbGF5QnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhIGZhLXBhdXNlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPic7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGF1c2VBdWRpbygpO1xuICAgICAgICBwbGF5QnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhIGZhLXBsYXlcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+JztcbiAgICB9XG59XG5cblxuLy8gU2tpcCBidXR0b25cbmNvbnN0IHNraXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNraXBcIik7XG5za2lwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVTa2lwQnV0dG9uQ2xpY2spO1xuXG5mdW5jdGlvbiBoYW5kbGVTa2lwQnV0dG9uQ2xpY2soKSB7XG5cbiAgICBpZiAoZ2V0Q3VycmVudFR1cm4oKSA8IGFsbG93ZWREdXJhdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIGFkZFNraXBwZWRUdXJuVG9Cb2FyZChnZXRDdXJyZW50VHVybigpKTtcbiAgICAgICAgYWRkU2tpcHBlZFR1cm5Ub0dhbWVTdGF0ZSgpO1xuICAgICAgICB1cGRhdGVTZWVrQmFyQmFja2dyb3VuZChnZXRDdXJyZW50VHVybigpKTtcbiAgICAgICAgdXBkYXRlU2tpcEJ1dHRvblRleHQoKTtcblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICAvLyBFbmQgZ2FtZVxuICAgICAgICBnZXRUcmFja0J5SUQoZ2V0Q3VycmVudFRyYWNrSUQoKSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgZ2FtZUVuZChyZXNwb25zZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVBsYXlCdXR0b25JY29uVG9QbGF5KCkge1xuICBwbGF5QnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhIGZhLXBsYXlcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+Jztcbn1cblxuZnVuY3Rpb24gdXBkYXRlU2tpcEJ1dHRvblRleHQoKSB7XG4gICAgaWYgKGdldEN1cnJlbnRUdXJuKCkgPCBhbGxvd2VkRHVyYXRpb25zLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBza2lwU2Vjb25kcyA9IGFsbG93ZWREdXJhdGlvbnNbZ2V0Q3VycmVudFR1cm4oKV0gLSBhbGxvd2VkRHVyYXRpb25zW2dldEN1cnJlbnRUdXJuKCkgLSAxXTtcbiAgICAgICAgc2tpcEJ1dHRvbi50ZXh0Q29udGVudCA9IGBTS0lQICgrJHtza2lwU2Vjb25kc31zKWA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2tpcEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU0tJUFwiO1xuICAgIH1cbn1cblxuLy8gU3VibWl0IGJ1dHRvblxuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpO1xuY29uc3QgcmVzdWx0U2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5cbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgIGNvbnN0IGdhbWVUcmFja0lEID0gZ2V0Q3VycmVudFRyYWNrSUQoKTtcbiAgICBjb25zdCBndWVzc0lzQ29ycmVjdCA9IGNoZWNrR3Vlc3Moc2VsZWN0ZWRUcmFja0lELCBnYW1lVHJhY2tJRCk7XG4gICAgY29uc3Qgc2VhcmNoSW5wdXRWYWx1ZSA9IHNlYXJjaElucHV0LnZhbHVlO1xuICAgIGNvbnN0IGN1cnJlbnRUdXJuQXRUaW1lT2ZTdWJtaXQgPSBnZXRDdXJyZW50VHVybigpO1xuXG4gICAgY29uc29sZS5sb2coXCJHdWVzcyBpczpcIiwgZ3Vlc3NJc0NvcnJlY3QpO1xuXG4gICAgaWYgKCFndWVzc0lzQ29ycmVjdCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNoZWNraW5nIGZvciBTcG90aWZ5IGR1cGxpY2F0ZXMuLi5cIik7XG4gICAgICAgIGNoZWNrRm9yU3BvdGlmeUR1cGVzKHNlYXJjaElucHV0LnZhbHVlKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW5jbHVkZWQgaW4gZHVwZXM6XCIsIHJlc3BvbnNlKTtcblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VhcmNoSW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgYWRkQ29ycmVjdEd1ZXNzVG9Cb2FyZChzZWFyY2hJbnB1dFZhbHVlLCBjdXJyZW50VHVybkF0VGltZU9mU3VibWl0KTtcblxuICAgICAgICAgICAgICAgIGdldFRyYWNrQnlJRChnZXRDdXJyZW50VHJhY2tJRCgpKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgIGdhbWVFbmQocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGRJbmNvcnJlY3RHdWVzc1RvQm9hcmQoc2VhcmNoSW5wdXRWYWx1ZSwgY3VycmVudFR1cm5BdFRpbWVPZlN1Ym1pdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENoZWNrIHRvdGFsIGd1ZXNzZXMgYWZ0ZXIgZWFjaCBpbmNvcnJlY3QgZ3Vlc3NcbiAgICAgICAgICAgIGlmIChnZXRDdXJyZW50VHVybigpID49IGFsbG93ZWREdXJhdGlvbnMpIHtcbiAgICAgICAgICAgICAgZ2V0VHJhY2tCeUlEKGdldEN1cnJlbnRUcmFja0lEKCkpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGdhbWVFbmQocmVzcG9uc2UpO1xuICAgICAgICAgICAgICB9KTsgICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWRkQ29ycmVjdEd1ZXNzVG9Cb2FyZChzZWFyY2hJbnB1dFZhbHVlLCBjdXJyZW50VHVybkF0VGltZU9mU3VibWl0KTtcbiAgICAgICAgZ2V0VHJhY2tCeUlEKGdldEN1cnJlbnRUcmFja0lEKCkpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGdhbWVFbmQocmVzcG9uc2UpO1xuICAgICAgICB9KTsgICAgICB9XG5cbiAgICBzYXZlTmV3R3Vlc3NUb0dhbWVTdGF0ZShzZWFyY2hJbnB1dFZhbHVlKTtcblxuICAgIGRpc2FibGVTdWJtaXRCdXR0b24oKTtcbiAgICBjbGVhclNlYXJjaEJveCgpO1xuXG4gICAgdXBkYXRlU2Vla0JhckJhY2tncm91bmQoZ2V0Q3VycmVudFR1cm4oKSk7XG59KTtcblxuXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlU3VibWl0QnV0dG9uKCkge1xuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0Jyk7XG4gIHN1Ym1pdEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVTdWJtaXRCdXR0b24oKSB7XG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKTtcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xufVxuXG5cbi8vIFByb2dyZXNzIGJhclxuY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlZWstYmFyLXByb2dyZXNzXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUHJvZ3Jlc3NCYXIoKSB7XG4gIGNvbnN0IHByb2dyZXNzUGVyY2VudGFnZSA9ICgoZ2V0QXVkaW9DdXJyZW50VGltZSgpIC8gMTYpICogMTAwICsgMSk7XG4gIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gYCR7cHJvZ3Jlc3NQZXJjZW50YWdlfSVgO1xuXG4gIGlmICghaXNBdWRpb1BhdXNlZCgpKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlUHJvZ3Jlc3NCYXIpO1xuICB9IGVsc2Uge1xuICAgIGNoYW5nZVBsYXlCdXR0b25JY29uVG9QbGF5KCk7IFxuICB9XG59XG5cbmNvbnN0IHNlZWtCYXJCYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWVrLWJhci1iYWNrZ3JvdW5kXCIpO1xuXG5mdW5jdGlvbiB1cGRhdGVTZWVrQmFyQmFja2dyb3VuZCh0dXJuKSB7XG4gICAgY29uc3QgcGxheUR1cmF0aW9uID0gYWxsb3dlZER1cmF0aW9uc1t0dXJuIC0gMV07XG4gICAgY29uc3QgcGVyY2VudGFnZSA9IChwbGF5RHVyYXRpb24gLyAxNikgKiAxMDA7XG4gICAgc2Vla0JhckJhY2tncm91bmQuc3R5bGUud2lkdGggPSBgJHtwZXJjZW50YWdlfSVgO1xufVxuXG5cbi8vIEFsbG93ZWQgbGVuZ3RoIHRvIHBsYXkgbWFya2Vyc1xuZnVuY3Rpb24gY3JlYXRlTWFya2VyKGR1cmF0aW9uKSB7XG4gICAgY29uc3QgbWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwZXJjZW50YWdlID0gKGR1cmF0aW9uIC8gMTYpICogMTAwO1xuXG4gICAgbWFya2VyLnN0eWxlLndpZHRoID0gXCIxcHhcIjtcbiAgICBtYXJrZXIuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG4gICAgbWFya2VyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIG1hcmtlci5zdHlsZS5sZWZ0ID0gYCR7cGVyY2VudGFnZX0lYDtcbiAgICBtYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZmZmZmXCI7XG5cbiAgICByZXR1cm4gbWFya2VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWFya2VycyhhbGxvd2VkRHVyYXRpb25zKSB7XG4gICAgY29uc3QgbWFya2Vyc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2Vlay1iYXItbWFya2Vyc1wiKTtcbiAgICBhbGxvd2VkRHVyYXRpb25zLmZvckVhY2goZHVyYXRpb24gPT4ge1xuICAgICAgICBjb25zdCBtYXJrZXIgPSBjcmVhdGVNYXJrZXIoZHVyYXRpb24gKyAwLjEpO1xuICAgICAgICBtYXJrZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1hcmtlcik7XG4gICAgfSk7XG59XG5cbi8vIFNlYXJjaCBiYXJcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwb3RpZnktc2VhcmNoJyk7XG5sZXQgc2VsZWN0ZWRUcmFja0lEO1xuXG4vLyBEZWJvdW5jZSBmdW5jdGlvbiB0byBzdG9wIHRoZSBhdXRvLXNlYXJjaCBmaXJpbmcgdG9vIG9mdGVuXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgICBsZXQgdGltZW91dDtcblxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIGNvbnN0IGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcblxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcblxuICAgICAgICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9O1xufVxuXG4vLyBObyBkZWJvdW5jZSBuZWVkZWQgZm9yIGRpc2FibGluZyB0aGUgYnV0dG9uXG5zZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBkaXNhYmxlU3VibWl0QnV0dG9uKCk7XG59KVxuXG5zZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGRlYm91bmNlKChldmVudCkgPT4ge1xuICAgIGNvbnN0IHF1ZXJ5ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cy1jb250YWluZXInKTtcbiAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIHJlc3VsdHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgXG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICBzZWFyY2hUcmFjayhxdWVyeSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKCh0cmFjaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJlc3VsdEl0ZW0uY2xhc3NMaXN0LmFkZCgncmVzdWx0LWl0ZW0nKTtcbiAgICAgICAgICAgIHJlc3VsdEl0ZW0udGV4dENvbnRlbnQgPSBgJHt0cmFjay5hcnRpc3RzWzBdLm5hbWV9IC0gJHt0cmFjay5uYW1lfWA7XG4gICAgICAgICAgICByZXN1bHRJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFjay1pZCcsIHRyYWNrLmlkKTtcbiAgXG4gICAgICAgICAgICByZXN1bHRJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIHNlbGVjdGVkVHJhY2tJRCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhY2staWQnKTs7XG4gIFxuICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHNlYXJjaCBpbnB1dCB3aXRoIHRoZSBzZWxlY3RlZCByZXN1bHQgYW5kIGhpZGUgdGhlIHJlc3VsdHMgY29udGFpbmVyXG4gICAgICAgICAgICAgIHNlYXJjaElucHV0LnZhbHVlID0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICAgICAgICByZXN1bHRzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgIGVuYWJsZVN1Ym1pdEJ1dHRvbigpO1xuICAgICAgICAgICAgfSk7XG4gIFxuICAgICAgICAgICAgcmVzdWx0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN1bHRJdGVtKTtcbiAgICAgICAgICB9KTtcbiAgXG4gICAgICAgICAgcmVzdWx0c0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCA1MDApKTtcblxuLy8gU2VhcmNoIHJlc3VsdHNcbmNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cy1jb250YWluZXInKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIC8vIENoZWNrIGlmIHRoZSBjbGljayB0YXJnZXQgaXMgb3V0c2lkZSBvZiB0aGUgLnJlc3VsdHMtY29udGFpbmVyXG4gIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJyNyZXN1bHRzLWNvbnRhaW5lcicpKSB7XG4gICAgcmVzdWx0c0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG59KTsiLCIvLyBJbXBvcnQgZ2FtZSBzdGF0ZSBtYW5pcHVsYXRpb24gZnVuY3Rpb25zXG5pbXBvcnQgeyBnZXRDdXJyZW50VHVybiwgYWxsb3dlZER1cmF0aW9ucyB9IGZyb20gJy4vc2hlYXJkbGUuanMnO1xuaW1wb3J0IHsgZ2V0VHJhY2tCeUlEIH0gZnJvbSAnLi9zcG90aWZ5LmpzJztcblxuLy8gVGhpcyBzaG91bGQgYmUgYSBjYWxsYmFjaywgdG8gYXZvaWQgY28tZGVwZW5kZW5jeT9cbmltcG9ydCB7IHVwZGF0ZVByb2dyZXNzQmFyIH0gZnJvbSAnLi9VSS5qcyc7XG5cbi8vIFJlcXVpcmVkIGhlcmUgc28gdGhhdCB0aGUgdXNlciBjYW4gcGF1c2UgYW5kIHJlc3VtZVxubGV0IGF1ZGlvO1xubGV0IGVuZFRpbWU7XG5sZXQgdGltZW91dElEO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R2FtZVRyYWNrQXVkaW8odHJhY2tJRCkge1xuICAgIGNvbnN0IHRyYWNrID0gYXdhaXQgZ2V0VHJhY2tCeUlEKHRyYWNrSUQpO1xuXG4gICAgcmV0dXJuIG5ldyBBdWRpbyh0cmFjay5wcmV2aWV3X3VybCk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdEF1ZGlvKHRyYWNrSUQpIHtcbiAgICBhdWRpbyA9IGF3YWl0IGdldEdhbWVUcmFja0F1ZGlvKHRyYWNrSUQpO1xuICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aW1ldXBkYXRlXCIsIHVwZGF0ZVByb2dyZXNzQmFyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYXlBdWRpbygpIHtcblxuICAgIGNvbnN0IHBsYXlEdXJhdGlvbiA9IGFsbG93ZWREdXJhdGlvbnNbZ2V0Q3VycmVudFR1cm4oKS0xXTtcbiAgICBlbmRUaW1lID0gcGxheUR1cmF0aW9uO1xuXG4gICAgYXVkaW8uY3VycmVudFRpbWUgPSAwO1xuICAgIGF1ZGlvLnBsYXkoKTtcblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SUQpO1xuICAgIHRpbWVvdXRJRCA9IHNldFRpbWVvdXQocGF1c2VBdWRpbywgZW5kVGltZSAqIDEwMDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF1c2VBdWRpbygpIHtcbiAgICBhdWRpby5wYXVzZSgpO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SUQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBdWRpb1BhdXNlZCgpIHtcbiAgICByZXR1cm4gYXVkaW8ucGF1c2VkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXVkaW9DdXJyZW50VGltZSgpIHtcbiAgICByZXR1cm4gYXVkaW8uY3VycmVudFRpbWU7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHNhdmVHYW1lU3RhdGUoZ3Vlc3Nlcykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lU3RhdGUnLCBKU09OLnN0cmluZ2lmeShndWVzc2VzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkR2FtZVN0YXRlKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdGUnKSk7XG59IiwiY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdHNNb2RhbFwiKTtcblxuLy8gVGhlIGJlbG93IHNob3VsZCBhbHNvIHRha2UgaW4gdGhlIGdhbWVTdGF0ZT9cbi8vIFRoZSBpZGVhIGJlaW5nLCB3ZSBuZWVkIHRvIHNob3cgaWYgdGhlIHVzZXIgd2FzIGNvcnJlY3Qgb3Igbm90XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1lRW5kKHRyYWNrSW5mbykge1xuXG4gICAgXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgIC8vIFNldCB0aGUgc29uZydzIGRldGFpbHNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvbmctdGl0bGVcIikudGV4dENvbnRlbnQgPSB0cmFja0luZm8ubmFtZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvbmctYXJ0aXN0XCIpLnRleHRDb250ZW50ID0gdHJhY2tJbmZvLmFydGlzdHNbMF0ubmFtZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsYnVtLWFydFwiKS5zcmMgPSB0cmFja0luZm8uYWxidW0uaW1hZ2VzWzBdLnVybDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvbmctcHJldmlld1wiKS5zcmMgPSB0cmFja0luZm8ucHJldmlld191cmw7XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hhcmUtcmVzdWx0cy1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhcIlNoYXJlIFJlc3VsdHMgQnV0dG9uIENsaWNrZWRcIik7XG59KTtcblxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGdldFRvZGF5c1RyYWNrSUQgfSBmcm9tIFwiLi90cmFja1NlbGVjdGlvblwiO1xuaW1wb3J0IHsgc2F2ZUdhbWVTdGF0ZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHsgaW5pdEF1ZGlvIH0gZnJvbSBcIi4vYXVkaW9NYW5hZ2VyXCI7XG5pbXBvcnQgeyBnZXRBbGxUcmFja0lEc0J5U2VhcmNoUXVlcnkgfSBmcm9tIFwiLi9zcG90aWZ5XCI7XG5cbmV4cG9ydCBjb25zdCBhbGxvd2VkRHVyYXRpb25zID0gWzEsIDIsIDQsIDcsIDExLCAxNl07XG5cbmxldCBnYW1lU3RhdGUgPSB7XG4gIGN1cnJlbnRUdXJuOiAxLFxuICBndWVzc2VzOiBbXSxcbiAgdHJhY2tJRDogbnVsbFxufTtcblxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRUdXJuID0gKCkgPT4gZ2FtZVN0YXRlLmN1cnJlbnRUdXJuO1xuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRUcmFja0lEID0gKCkgPT4gZ2FtZVN0YXRlLnRyYWNrSUQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cE5ld0dhbWUoKSB7XG5cbiAgLy8gQ3VyZW50bHkganVzdCBwdWxscyB0aGUgZmlyc3Qgb25lLiBFdmVudHVhbGx5IGl0IHdpbGwgY2FsYyBpdCBvbiBkYXRlLlxuICBjb25zdCB0b2RheXNUcmFja0lEID0gZ2V0VG9kYXlzVHJhY2tJRCgpO1xuXG4gIGdhbWVTdGF0ZS5jdXJyZW50VHVybiA9IDE7XG4gIGdhbWVTdGF0ZS5ndWVzc2VzID0gW107XG4gIGdhbWVTdGF0ZS50cmFja0lEID0gdG9kYXlzVHJhY2tJRDtcblxuICBpbml0QXVkaW8odG9kYXlzVHJhY2tJRCk7XG5cbiAgY29uc29sZS5sb2coXCJOZXcgZ2FtZSBzdGF0ZVwiLCBnYW1lU3RhdGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW1wb3J0R2FtZVN0YXRlKGdhbWVTdGF0ZSkge1xuICBjb25zb2xlLmxvZyhnYW1lU3RhdGUpO1xuXG4gIC8vIFRoaXMgd2lsbCBiZSByZXF1aXJlZCBoZXJlIG9uY2UgdGhpcyBmdW5jdGlvbiBpcyB3cml0dGVuXG4gIC8vIGluaXRBdWRpbyhnYW1lU3RhdGUudHJhY2tJRCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0d1ZXNzKGd1ZXNzZWRUcmFja0lELCBnYW1lVHJhY2tJRCkge1xuICAvLyBjb25zb2xlLmxvZyhcIkd1ZXNzOlwiLCBndWVzc2VkVHJhY2tJRCk7XG4gIC8vIGNvbnNvbGUubG9nKFwiR2FtZSB0cmFjazpcIiwgZ2FtZVRyYWNrSUQpO1xuXG4gIHJldHVybiBndWVzc2VkVHJhY2tJRCA9PT0gZ2FtZVRyYWNrSUQ7XG5cbiAgLy8gaWYgZmFsc2UsIHJ1biB0aGUgZHVwZXMgY2hlY2tcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrRm9yU3BvdGlmeUR1cGVzKHNlYXJjaFF1ZXJ5KSB7XG4gICAgLy8gSWYgZmFsc2UsIGNoZWNrIHRoZSB1c2VyJ3MgZ3Vlc3MgYWdhaW5zdCB3aGF0IHNob3VsZCBob3BlZnVsbHkgYmUgU3BvdGlmeSdzIGR1cGVzXG4gICAgY29uc3QgZmV0Y2hlZElEcyA9IGF3YWl0IGdldEFsbFRyYWNrSURzQnlTZWFyY2hRdWVyeShzZWFyY2hRdWVyeSk7XG5cbiAgICAvLyBJZiBndWVzc2VkVHJhY2tJRCBpcyBpbiB0aGUgYXJyYXkgcmV0dXJuZWQsIHJldHVybiB0cnVlXG4gICAgcmV0dXJuIGZldGNoZWRJRHMuaW5jbHVkZXMoZ2V0Q3VycmVudFRyYWNrSUQoKSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlTmV3R3Vlc3NUb0dhbWVTdGF0ZShndWVzcykge1xuXG4gIGdhbWVTdGF0ZS5ndWVzc2VzLnB1c2goZ3Vlc3MpO1xuICBpbmNyZW1lbnRDdXJyZW50VHVybkluR2FtZVN0YXRlKCk7XG5cbiAgYXdhaXQgc2F2ZUdhbWVTdGF0ZShnYW1lU3RhdGUpO1xuXG4gIGNvbnNvbGUubG9nKFwiR2FtZSBzdGF0ZSBhZnRlciBzYXZlOlwiLCBnYW1lU3RhdGUpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTa2lwcGVkVHVyblRvR2FtZVN0YXRlKCkge1xuICAvLyBTYXZlIGEgbnVsbCBndWVzcyB0byByZXByZXNlbnQgYSBza2lwcGVkIHR1cm5cbiAgZ2FtZVN0YXRlLmd1ZXNzZXMucHVzaChudWxsKTtcblxuICBpbmNyZW1lbnRDdXJyZW50VHVybkluR2FtZVN0YXRlKCk7XG59XG5cbmZ1bmN0aW9uIGluY3JlbWVudEN1cnJlbnRUdXJuSW5HYW1lU3RhdGUoKSB7XG4gIGdhbWVTdGF0ZS5jdXJyZW50VHVybisrO1xuICBzYXZlR2FtZVN0YXRlKGdhbWVTdGF0ZSk7XG59XG5cblxuXG5cblxuIiwiaW1wb3J0IFNwb3RpZnlUb2tlbk1hbmFnZXIgZnJvbSAnLi9zcG90aWZ5VG9rZW5NYW5hZ2VyLmpzJztcblxuY29uc3QgY2xpZW50SWQgPSBcIjc0YWM5NDljYTU4NzQwMjQ4NGRjZWYxNDA4YjRkN2YzXCI7XG5jb25zdCBjbGllbnRTZWNyZXQgPSBcIjMxM2EyYzE1ZmM4NDRjYTViYzIyNzU1NTcyODc0ZWU3XCI7XG5cbi8vIGNvbnN0IGNsaWVudElkID0gcHJvY2Vzcy5lbnYuU1BPVElGWV9DTElFTlRfSUQ7XG4vLyBjb25zdCBjbGllbnRTZWNyZXQgPSBwcm9jZXNzLmVudi5TUE9USUZZX0NMSUVOVF9TRUNSRVQ7XG5cbmNvbnN0IHRva2VuTWFuYWdlciA9IG5ldyBTcG90aWZ5VG9rZW5NYW5hZ2VyKGNsaWVudElkLCBjbGllbnRTZWNyZXQpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoVHJhY2soc2VhcmNoVGVybSwgbWFya2V0ID0gJ0dCJykge1xuXG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBhd2FpdCB0b2tlbk1hbmFnZXIuZ2V0QWNjZXNzVG9rZW4oKTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxuICAgIH07XG5cbiAgICBhc3luYyBmdW5jdGlvbiBzZWFyY2goc2VhcmNoVGVybSkge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgICAgICAgIHE6IHNlYXJjaFRlcm0sXG4gICAgICAgICAgICB0eXBlOiAndHJhY2snLFxuICAgICAgICAgICAgbGltaXQ6IDEwLFxuICAgICAgICAgICAgbWFya2V0XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL3NlYXJjaD8ke3BhcmFtc31gLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICByZXR1cm4gZGF0YS50cmFja3MuaXRlbXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGF3YWl0IHNlYXJjaChzZWFyY2hUZXJtKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRyYWNrQnlJRCh0cmFja0lELCBtYXJrZXQgPSAnR0InKSB7XG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBhd2FpdCB0b2tlbk1hbmFnZXIuZ2V0QWNjZXNzVG9rZW4oKTtcbiAgXG4gICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxuICAgIH07XG4gIFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL3RyYWNrcy8ke3RyYWNrSUR9P21hcmtldD0ke21hcmtldH1gLCB7XG4gICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgIH0pO1xuICBcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfVxuICBcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsVHJhY2tJRHNCeVNlYXJjaFF1ZXJ5KHNlYXJjaFF1ZXJ5KSB7XG4gIGNvbnN0IHNlYXJjaFJlc3VsdHMgPSBhd2FpdCBzZWFyY2hUcmFjayhzZWFyY2hRdWVyeSk7XG4gIGNvbnN0IHRyYWNrSURzID0gc2VhcmNoUmVzdWx0cy5tYXAodHJhY2sgPT4gdHJhY2suaWQpO1xuXG4gIHJldHVybiB0cmFja0lEcztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwb3RpZnlUb2tlbk1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNsaWVudElkLCBjbGllbnRTZWNyZXQpIHtcbiAgICAgIHRoaXMuY2xpZW50SWQgPSBjbGllbnRJZDtcbiAgICAgIHRoaXMuY2xpZW50U2VjcmV0ID0gY2xpZW50U2VjcmV0O1xuICAgICAgdGhpcy5hY2Nlc3NUb2tlbiA9IG51bGw7XG4gICAgICB0aGlzLmV4cGlyYXRpb25UaW1lID0gbnVsbDtcbiAgICB9XG4gIFxuICAgIGFzeW5jIHJlcXVlc3RBY2Nlc3NUb2tlbihjbGllbnRJZCwgY2xpZW50U2VjcmV0KSB7XG4gICAgICBjb25zdCB0b2tlbkVuZHBvaW50ID0gXCJodHRwczovL2FjY291bnRzLnNwb3RpZnkuY29tL2FwaS90b2tlblwiO1xuICAgICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICAgIH07XG4gICAgICBjb25zdCBib2R5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgIGdyYW50X3R5cGU6IFwiY2xpZW50X2NyZWRlbnRpYWxzXCIsXG4gICAgICAgIGNsaWVudF9pZDogY2xpZW50SWQsXG4gICAgICAgIGNsaWVudF9zZWNyZXQ6IGNsaWVudFNlY3JldCxcbiAgICAgIH0pO1xuICBcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godG9rZW5FbmRwb2ludCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICBib2R5OiBib2R5LFxuICAgICAgfSk7XG4gIFxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhLmFjY2Vzc190b2tlbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBvYnRhaW4gYWNjZXNzIHRva2VuXCIpO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgYXN5bmMgZ2V0QWNjZXNzVG9rZW4oKSB7XG4gICAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgaWYgKCF0aGlzLmFjY2Vzc1Rva2VuIHx8IGN1cnJlbnRUaW1lID49IHRoaXMuZXhwaXJhdGlvblRpbWUpIHtcbiAgICAgICAgdGhpcy5hY2Nlc3NUb2tlbiA9IGF3YWl0IHRoaXMucmVxdWVzdEFjY2Vzc1Rva2VuKHRoaXMuY2xpZW50SWQsIHRoaXMuY2xpZW50U2VjcmV0KTtcbiAgICAgICAgY29uc3QgZXhwaXJlc0luTWlsbGlzZWNvbmRzID0gMzYwMCAqIDEwMDA7IC8vIDEgaG91ciBpbiBtaWxsaXNlY29uZHNcbiAgICAgICAgdGhpcy5leHBpcmF0aW9uVGltZSA9IGN1cnJlbnRUaW1lICsgZXhwaXJlc0luTWlsbGlzZWNvbmRzO1xuICAgICAgfVxuICBcbiAgICAgIHJldHVybiB0aGlzLmFjY2Vzc1Rva2VuO1xuICAgIH1cbiAgfSIsImNvbnN0IHRyYWNrU2VsZWN0aW9uID0gWyc3SjF1eHdueGZRTHU0QVBpY0U1Um5qJyxcbicyZGxFZERFbXVRc3JjWGFBTDNabnppJyxcbic2MkxKRmFZaWhzZFZycmtnVU9KQzA1JyxcbicwSEVtbkFVVDhQSHpuSUFBbVZYcUZKJyxcbic3RndCdGNlY21scGMxc0x5U1BYZUdFJyxcbicxMHpsd1I3a3ZWYkQ5T0JrZVpXcjNMJyxcbicyV2ZhT2lNa0N2eTdGNWZjcDJ6WjhMJyxcbic3N05OWlFTcXpMTnFoMkE5SmhMUmtnJyxcbicwN2o1UkxKSHdzbTRjVWIzR0dvVzN3JyxcbicyMnNMdUpZY3ZaT1NvTExSWWV2MXM1JyxcbiczQm92ZHpmYVg0amI1S0ZRd29QZkF3JyxcbiczNHg2aEVKZ0dBT1F2bWxNcWw1SWdlJyxcbiczQ1NwemtvTDFYZ0RCWjFxOWFEQ1VWJyxcbicyOG84bTFvOVJHdHlTYm1RSnRBdnltJyxcbicxS3NJOE5FZUFuYThaSWRvakkzRmlUJyxcbicyb2xWbTFsSGljcHZlTUFvNEFVRFJCJyxcbiczOWxTZXFueWpaSmVqUnVhUkVmeUxMJyxcbic1UEpCcndLSDdTZEJ5R3REQ0JHSndiJyxcbic0NGhPR2cxdUZnMVhKWkdaWU53WW1NJyxcbic0YUtJczV0OVRxUDU5YnRsQ0dQcmd3JyxcbicwQTRQWnVlcFRjSVFWdkE1bTdSME0xJyxcbic3Zzd0eWI4ek05VWVLc2R2b3NXOVczJyxcbic0bzlLajdvbmtsdDZ4YllsM2pWQXJwJyxcbicwYkJWUnNCYmduelc4d21kbEQ3QXBxJyxcbic1ZTFlblQwTlBYUFprUjhGM1I1OGJZJyxcbic1SWtkaDkxRGRFcTQ0Y2ZwSUtSc0x3JyxcbicyWDI0MkQ4VmhUaWtXVVQxaTFuWUpDJyxcbicyVEFmR2lyTkplMHFVT2VSbVdzU3lrJyxcbiczbXZLdmllckZBVkdDZGdkeDRFTjRRJyxcbic2SFo2N1ZJbXhxcjhhTUJFRWhibHpmJyxcbic2Z2xzTVdJTUl4UTRCZWR6THFHVmk0JyxcbiczTEk0TW1pYlRrWEg1Y0dwQ0daZ3l3Jyxcbic2blRpSWhMbVEzRldodnJHYWZ3MnpqJyxcbiczZDlEQ2hyZGM2Qk9lRnNiclozSXMwJyxcbic0T2VCWmxFYUxXeUpXYVlsNFV2aFQ5Jyxcbic1VEdZbzRNck5LcUl2SnFneDEzNHB5Jyxcbic0M2VCZ1lSVG11NUJKbkNKREJVNUhiJyxcbic2STRzbkxyVk9ySnNMZGQ0M2lzYzI3Jyxcbic0c3oxTmcyQ2dpZGZxcWl5MHBOTDZSJyxcbic1NFg3OGRpU0xvVURJM2pvQzJiak16JyxcbicwUWVJNzlzcDF2UzhMM0pncEVPN21EJ107XG5cbi8vIC8vIEluIHRoaXMgZnVuY3Rpb24sIEknbSBnb2luZyB0byBzZXQgdXAgYSBcInN0YXJ0IGRhdGVcIiBmb3IgdGhlIGFwcC5cbi8vIC8vIEknbGwgYmFzZSB3aGljaCB0cmFjayBpcyB0aGUgdHJhY2sgb2YgdGhlIGRheSBmcm9tIHRoZSBkaXN0YW5jZSBpbiB0aW1lIGZyb20gdGhpcyBkYXRlXG5cblxuZnVuY3Rpb24gZ2V0Q3VycmVudERheShzdGFydERhdGUpIHtcbiAgICAvLyBHZXQgdGhlIGN1cnJlbnQgZGF0ZSBpbiBsb2NhbCB0aW1lXG4gICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgXG4gICAgLy8gU2V0IGJvdGggZGF0ZXMgdG8gbWlkbmlnaHQgKHN0YXJ0IG9mIHRoZSBkYXkpIGluIGxvY2FsIHRpbWVcbiAgICBzdGFydERhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZShzdGFydERhdGUpLnNldEhvdXJzKDAsMCwwLDApKTtcbiAgICBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnREYXRlLnNldEhvdXJzKDAsMCwwLDApKTtcbiAgXG4gICAgLy8gQ29udmVydCBib3RoIGRhdGVzIHRvIG1pbGxpc2Vjb25kc1xuICAgIGxldCBzdGFydERhdGVUaW1lID0gc3RhcnREYXRlLmdldFRpbWUoKTtcbiAgICBsZXQgY3VycmVudERhdGVUaW1lID0gY3VycmVudERhdGUuZ2V0VGltZSgpO1xuICBcbiAgICAvLyBDYWxjdWxhdGUgdGhlIGRpZmZlcmVuY2UgaW4gbWlsbGlzZWNvbmRzXG4gICAgbGV0IGRpZmZlcmVuY2VJblRpbWUgPSBjdXJyZW50RGF0ZVRpbWUgLSBzdGFydERhdGVUaW1lO1xuICBcbiAgICAvLyBDb252ZXJ0IHRoZSBkaWZmZXJlbmNlIGluIG1pbGxpc2Vjb25kcyB0byBkYXlzXG4gICAgbGV0IGRpZmZlcmVuY2VJbkRheXMgPSBNYXRoLmZsb29yKGRpZmZlcmVuY2VJblRpbWUgLyAoMTAwMCAqIDM2MDAgKiAyNCkpO1xuICBcbiAgICByZXR1cm4gZGlmZmVyZW5jZUluRGF5cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvZGF5c1RyYWNrSUQoc3RhcnREYXRlKSB7XG5cbiAgICAvLyBGb3Igbm93LCB3ZSBqdXN0IGdldCB0cmFjayAwXG4gICAgcmV0dXJuIHRyYWNrU2VsZWN0aW9uWzBdO1xuXG4gICAgcmV0dXJuIHRyYWNrU2VsZWN0aW9uW2dldEN1cnJlbnREYXkoc3RhcnREYXRlKV07XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZXMuY3NzJ1xuXG5pbXBvcnQgeyBzZXR1cE5ld0dhbWUsIGltcG9ydEdhbWVTdGF0ZSwgZ2V0Q3VycmVudFRyYWNrLCBhbGxvd2VkRHVyYXRpb25zIH0gZnJvbSAnLi9zaGVhcmRsZSc7XG5pbXBvcnQgeyBsb2FkR2FtZVN0YXRlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuXG5pbXBvcnQgeyBjcmVhdGVNYXJrZXJzLCBpbml0VUkgfSBmcm9tICcuL1VJJztcblxuaW1wb3J0IHsgZ2FtZUVuZCB9IGZyb20gJy4vcmVzdWx0c1NjcmVlbic7XG4vLyBraWxsIHRoZSBiZWxvdyBhZnRlciB0ZXN0aW5nXG5pbXBvcnQgeyBnZXRUcmFja0J5SUQgfSBmcm9tICcuL3Nwb3RpZnknO1xuXG4vLyBjb25zdCBnYW1lTG9hZGVkID0gbG9hZEdhbWVTdGF0ZSgpO1xuXG4vLyBpZiAoZ2FtZUxvYWRlZCkge1xuLy8gICAgIGNvbnNvbGUubG9nKFwiR2FtZSBzdWNjZXNzZnVsbHkgbG9hZGVkXCIpO1xuXG4vLyAgICAgLy8gaW1wb3J0R2FtZVN0YXRlKGdhbWVMb2FkZWQpO1xuXG4vLyAgICAgLy8gTG9hZGluZyBuZXcgZ2FtZSBhbnl3YXkgYXMgSSBjYW4ndCBiZSBib3RoZXJlZCB0byBkZWxldGUgbG9jYWxTdG9yYWdlIGV2ZXJ5IHRpbWVcbi8vICAgICBzZXR1cE5ld0dhbWUoKTtcblxuLy8gfSBlbHNlIHtcbi8vICAgICBjb25zb2xlLmxvZyhcIlN0YXJ0aW5nIG5ldyBnYW1lXCIpO1xuLy8gICAgIHNldHVwTmV3R2FtZSgpO1xuLy8gfVxuXG5cbnNldHVwTmV3R2FtZSgpO1xuXG4vLyBUaGVzZSBwcm9iYWJseSBzaG91bGRuJ3QgYmUgbmVlZGVkP1xuaW5pdFVJKCk7XG5jcmVhdGVNYXJrZXJzKGFsbG93ZWREdXJhdGlvbnMpO1xuXG4vLyAvLyBUZXN0IHJlc3VsdHMgc2NyZWVuXG4vLyBjb25zdCB0ZXN0VHJhY2sgPSBnZXRUcmFja0J5SUQoXCI3SjF1eHdueGZRTHU0QVBpY0U1Um5qXCIpO1xuXG4vLyB0ZXN0VHJhY2sudGhlbihyZXNwb25zZSA9PiB7XG4vLyAgICAgZ2FtZUVuZChyZXNwb25zZSk7XG4vLyB9KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9