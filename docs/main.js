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
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  height: 90%;\n}\n\nbody {\n  background-color: #121212;\n  color: #ffffff;\n  margin: 0;\n  font-family: sans-serif;\n  padding-top: 60px;\n  max-width: 100vw;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  height: 50px;\n  padding: 0 15px;\n  border-bottom: 1px solid #ffffff;\n  background-color: #121212;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    min-height: 100%;\n    justify-content: space-between;\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 10px;\n    overflow: none;\n}\n\n.info,\n.how-to-play {\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.play-container {\n  margin-bottom: 20px;\n}\n\n.seek-bar-container {\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 100vw;\n}\n\n.seek-bar {\n  width: 100%;\n  height: 10px;\n  position: relative;\n  border-top: 1px solid #ffffff;\n  border-bottom: 1px solid #ffffff;\n  background-color: transparent;\n  margin: 0;\n}\n\n.seek-bar-background {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-color: #282828;\n  transform: scaleX(0);\n  transform-origin: left;\n}\n\n.seek-bar-markers {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.seek-bar-progress {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-color: #1DB954;\n  transform: scaleX(0);\n  transform-origin: left;\n}\n\n.progress {\n  height: 100%;\n  background-color: #1DB954;\n  width: 0;\n}\n\n.section {\n  height: 100%;\n  position: absolute;\n  background-color: #282828;\n}\n\n.play-button-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 10px 0;\n  position: relative;\n}\n\n.play-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  background-color: #00000000;\n  border: 2px solid white;\n  color: #ffffff;\n  border-radius: 50%;\n  cursor: pointer;\n  outline: none;\n  font-size: 20px;\n}\n\n.elapsed-time,\n.total-time {\n  font-size: 14px;\n  position: absolute;\n}\n\n.elapsed-time {\n  left: 0;\n}\n\n.total-time {\n  right: 0;\n}\n\n.search-container {\n  margin-bottom: 20px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.spotify-search {\n  width: 90%;\n  padding: 10px;\n  background-color: #333;\n  border: solid 1px black;\n  color: #ffffff;\n  border-radius: 5px;\n  outline: none;\n}\n\n.buttons-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n}\n\n.submit {\n  background-color: #1DB954;\n  color: #000000;\n  border: none;\n}\n\n.skip {\n  background-color: #00000000;\n  color: #ffffff;\n  border: 1px solid white;\n}\n\n.skip,\n.submit {\n  padding: 10px 20px;\n  border-radius: 20px;\n  cursor: pointer;\n  outline: none;\n  letter-spacing: 0.1em;\n  line-height: 1rem;\n}\n\nbutton[disabled] {\n  background-color: gray;\n  color: white;\n  cursor: not-allowed;\n}\n\n.search-container {\n  position: relative;\n  width: 100%;\n}\n\n.results-container {\n  position: absolute;\n  background-color: #333;\n  color: #ffffff;\n  width: 95%;\n  max-height: 200px;\n  overflow-y: auto;\n  border: 1px solid #0000002b;\n  display: none;\n  top: calc(100% + 5px);\n}\n\n.result-item {\n  padding: 8px 12px;\n  cursor: pointer;\n  color: #ffffff;\n}\n\n.result-item:hover {\n  background-color: #282828;\n}\n\n.guess {\n  height: 40px;\n  border: 1px solid #ffffff62;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center; \n  padding-left: 10px;\n  font-size: 16px; \n  font-weight: 300; \n  color: #ffffffaa; \n}\n\n.guess-text {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex-grow: 1;\n}\n\n.red-x-icon {\n  color: rgba(255, 0, 0, 0.75);\n  font-weight: bold;\n  margin-right: 5px;\n  padding-right: 12px;\n}\n\n.yellow-x-icon {\n  color: rgba(255, 215, 0, 0.75);\n  font-weight: bold;\n  margin-right: 5px;\n  padding-right: 12px;\n}\n\n.green-check-icon {\n  color: green;\n  font-weight: bold;\n  margin-right: 5px;\n  padding-right: 8px; \n} \n\n\n/* Results screen */\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: #121212;\n}\n\n.modal-content {\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2em;\n  text-align: center;\n}\n\n.album-art {\n  width: 300px;\n  height: 300px;\n  object-fit: cover;\n  border-radius: 10px;\n  margin-bottom: 2em;\n}\n\n.song-title {\n  font-size: 2em;\n  font-weight: bold;\n  color: #FFFFFF;\n  margin-bottom: 1em;\n}\n\n.song-artist {\n  font-size: 1.5em;\n  color: #888;\n  margin-bottom: 2em;\n}\n\n.share-results-btn {\n  padding: 10px 20px;\n  font-size: 1.2em;\n  color: #FFFFFF;\n  background-color: #1DB954;\n  border: none;\n  border-radius: 50px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.share-results-btn:hover {\n  background-color: #148b3b;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":["html,\nbody {\n  height: 90%;\n}\n\nbody {\n  background-color: #121212;\n  color: #ffffff;\n  margin: 0;\n  font-family: sans-serif;\n  padding-top: 60px;\n  max-width: 100vw;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  height: 50px;\n  padding: 0 15px;\n  border-bottom: 1px solid #ffffff;\n  background-color: #121212;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    min-height: 100%;\n    justify-content: space-between;\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 10px;\n    overflow: none;\n}\n\n.info,\n.how-to-play {\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.play-container {\n  margin-bottom: 20px;\n}\n\n.seek-bar-container {\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 100vw;\n}\n\n.seek-bar {\n  width: 100%;\n  height: 10px;\n  position: relative;\n  border-top: 1px solid #ffffff;\n  border-bottom: 1px solid #ffffff;\n  background-color: transparent;\n  margin: 0;\n}\n\n.seek-bar-background {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-color: #282828;\n  transform: scaleX(0);\n  transform-origin: left;\n}\n\n.seek-bar-markers {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.seek-bar-progress {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-color: #1DB954;\n  transform: scaleX(0);\n  transform-origin: left;\n}\n\n.progress {\n  height: 100%;\n  background-color: #1DB954;\n  width: 0;\n}\n\n.section {\n  height: 100%;\n  position: absolute;\n  background-color: #282828;\n}\n\n.play-button-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 10px 0;\n  position: relative;\n}\n\n.play-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  background-color: #00000000;\n  border: 2px solid white;\n  color: #ffffff;\n  border-radius: 50%;\n  cursor: pointer;\n  outline: none;\n  font-size: 20px;\n}\n\n.elapsed-time,\n.total-time {\n  font-size: 14px;\n  position: absolute;\n}\n\n.elapsed-time {\n  left: 0;\n}\n\n.total-time {\n  right: 0;\n}\n\n.search-container {\n  margin-bottom: 20px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.spotify-search {\n  width: 90%;\n  padding: 10px;\n  background-color: #333;\n  border: solid 1px black;\n  color: #ffffff;\n  border-radius: 5px;\n  outline: none;\n}\n\n.buttons-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n}\n\n.submit {\n  background-color: #1DB954;\n  color: #000000;\n  border: none;\n}\n\n.skip {\n  background-color: #00000000;\n  color: #ffffff;\n  border: 1px solid white;\n}\n\n.skip,\n.submit {\n  padding: 10px 20px;\n  border-radius: 20px;\n  cursor: pointer;\n  outline: none;\n  letter-spacing: 0.1em;\n  line-height: 1rem;\n}\n\nbutton[disabled] {\n  background-color: gray;\n  color: white;\n  cursor: not-allowed;\n}\n\n.search-container {\n  position: relative;\n  width: 100%;\n}\n\n.results-container {\n  position: absolute;\n  background-color: #333;\n  color: #ffffff;\n  width: 95%;\n  max-height: 200px;\n  overflow-y: auto;\n  border: 1px solid #0000002b;\n  display: none;\n  top: calc(100% + 5px);\n}\n\n.result-item {\n  padding: 8px 12px;\n  cursor: pointer;\n  color: #ffffff;\n}\n\n.result-item:hover {\n  background-color: #282828;\n}\n\n.guess {\n  height: 40px;\n  border: 1px solid #ffffff62;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center; \n  padding-left: 10px;\n  font-size: 16px; \n  font-weight: 300; \n  color: #ffffffaa; \n}\n\n.guess-text {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex-grow: 1;\n}\n\n.red-x-icon {\n  color: rgba(255, 0, 0, 0.75);\n  font-weight: bold;\n  margin-right: 5px;\n  padding-right: 12px;\n}\n\n.yellow-x-icon {\n  color: rgba(255, 215, 0, 0.75);\n  font-weight: bold;\n  margin-right: 5px;\n  padding-right: 12px;\n}\n\n.green-check-icon {\n  color: green;\n  font-weight: bold;\n  margin-right: 5px;\n  padding-right: 8px; \n} \n\n\n/* Results screen */\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: #121212;\n}\n\n.modal-content {\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2em;\n  text-align: center;\n}\n\n.album-art {\n  width: 300px;\n  height: 300px;\n  object-fit: cover;\n  border-radius: 10px;\n  margin-bottom: 2em;\n}\n\n.song-title {\n  font-size: 2em;\n  font-weight: bold;\n  color: #FFFFFF;\n  margin-bottom: 1em;\n}\n\n.song-artist {\n  font-size: 1.5em;\n  color: #888;\n  margin-bottom: 2em;\n}\n\n.share-results-btn {\n  padding: 10px 20px;\n  font-size: 1.2em;\n  color: #FFFFFF;\n  background-color: #1DB954;\n  border: none;\n  border-radius: 50px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.share-results-btn:hover {\n  background-color: #148b3b;\n}\n"],"sourceRoot":""}]);
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





function initUI(gameState = null) {

  // Every other time I use this, it's before I update the gameState, so this needs to be -1
  updateSeekBarBackground((0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)()-1);

  createMarkers(_sheardle__WEBPACK_IMPORTED_MODULE_1__.allowedDurations);

  if (gameState) {
    importLoadedGame(gameState);
  }

  updateSkipButtonText();

}

function importLoadedGame(gameData) {

  // If completed
  if (gameData.guesses.length >= 6) {
    
    // End game
    (0,_spotify__WEBPACK_IMPORTED_MODULE_2__.getTrackByID)((0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTrackID)()).then(response => {
      (0,_resultsScreen__WEBPACK_IMPORTED_MODULE_3__.gameEnd)(response);
    });
  }

  let currentTurn;

  for (let i = 0; i < gameData.guesses.length; i++) {
    
    currentTurn = i + 1;
    const guessData = gameData.guesses[i];

    // Check the state of each guess and update the UI accordingly
    if (guessData === null) {
      addSkippedTurnToBoard(currentTurn);
    } else if (guessData.status === "correct") {
      addCorrectGuessToBoard(guessData.guess, currentTurn);
    } else if (guessData.status === "semicorrect") {
      addSemicorrectGuessToBoard(guessData.guess, currentTurn);
    } else {
      addIncorrectGuessToBoard(guessData.guess, currentTurn);
    }
  }
}

// Guess board
const guessContainer = document.querySelector('.guess-container');

function addSemicorrectGuessToBoard(guess, turn) {

  turn = turn - 1; // Account for zero-indexing of div

  const guessDiv = guessContainer.children[turn];

  // Create the red 'x' icon
  const yellowXIcon = document.createElement('span');
  yellowXIcon.textContent = 'x';
  yellowXIcon.classList.add('yellow-x-icon');
  guessDiv.appendChild(yellowXIcon);

  // Add the track info text to the guess div
  const guessText = document.createElement('p');
  guessText.textContent = guess;
  guessText.classList.add('guess-text');
  guessDiv.appendChild(guessText);
}

function addIncorrectGuessToBoard(guess, turn) {

  turn = turn - 1; // Account for zero-indexing of div

  const guessDiv = guessContainer.children[turn];

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

  turn = turn - 1; // Account for zero-indexing of div

  const guessDiv = guessContainer.children[turn];

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

  turn = turn - 1; // Account for zero-indexing of div

  const guessContainer = document.querySelector('.guess-container');
  const guessDiv = guessContainer.children[turn];
  
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
    
    updateSkipButtonText();
    updateSeekBarBackground((0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)());

    (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.addSkippedTurnToGameState)();

  } else {

    (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.addSkippedTurnToGameState)();

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

  if ((0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)() >= 1 && (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)() < _sheardle__WEBPACK_IMPORTED_MODULE_1__.allowedDurations.length) {
    const skipSeconds = _sheardle__WEBPACK_IMPORTED_MODULE_1__.allowedDurations[(0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)()] - _sheardle__WEBPACK_IMPORTED_MODULE_1__.allowedDurations[(0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)() - 1];
    skipButton.textContent = `SKIP (+${skipSeconds}s)`;
  } else if ((0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)() === 0) {
    const skipSeconds = _sheardle__WEBPACK_IMPORTED_MODULE_1__.allowedDurations[(0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)()];
    skipButton.textContent = `SKIP (+${skipSeconds}s)`;
  } else {
    skipButton.textContent = "SKIP";
  }
}


// Submit button
const submitButton = document.querySelector('.submit');

submitButton.addEventListener('click', handleSubmit);

async function handleSubmit() {
  
  const gameTrackID = (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTrackID)();
  const guessIsCorrect = (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.checkGuess)(selectedTrackID, gameTrackID);
  const searchInputValue = searchInput.value;

  disableSubmitButton();
  clearSearchBox();

  // Update progress bar before adding guess and saving game state
  updateSeekBarBackground((0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)());

  // Check if guess is correct first
  if (guessIsCorrect) {
    addCorrectGuessToBoard(searchInputValue, (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)());

    (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.saveNewGuessToGameState)(searchInputValue, "correct");
    
    (0,_spotify__WEBPACK_IMPORTED_MODULE_2__.getTrackByID)((0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTrackID)()).then(response => {
      (0,_resultsScreen__WEBPACK_IMPORTED_MODULE_3__.gameEnd)(response);
    });
    
    return;
  }

  // Check if artist is correct
  let artistCheck = await (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.checkArtist)(selectedTrackID);

  console.log("Artist check is", artistCheck);

  // Correct artist submitted
  if (artistCheck) {
    let dupesCheck = await (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.checkForSpotifyDupes)(searchInputValue)

    console.log("Dupes check is", dupesCheck);

    // Correct answer found in dupes
    if (dupesCheck) {
      addCorrectGuessToBoard(searchInputValue, (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)());

      (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.saveNewGuessToGameState)(searchInputValue, "correct");

      (0,_spotify__WEBPACK_IMPORTED_MODULE_2__.getTrackByID)((0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTrackID)()).then(response => {
        (0,_resultsScreen__WEBPACK_IMPORTED_MODULE_3__.gameEnd)(response);
      });

      return;
    }

    // Artist found, but no dupes of track
    addSemicorrectGuessToBoard(searchInputValue, (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)());
    (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.saveNewGuessToGameState)(searchInputValue, "semicorrect");
    return;
  }

  // Completely incorrect
  addIncorrectGuessToBoard(searchInputValue, (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)());
  (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.saveNewGuessToGameState)(searchInputValue, "incorrect");

  // Check total guesses after each incorrect guess
  if ((0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)() >= _sheardle__WEBPACK_IMPORTED_MODULE_1__.allowedDurations) {

    (0,_spotify__WEBPACK_IMPORTED_MODULE_2__.getTrackByID)((0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTrackID)()).then(response => {
      (0,_resultsScreen__WEBPACK_IMPORTED_MODULE_3__.gameEnd)(response);

    });
  }
}

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
  const progressPercentage = (0,_audioManager__WEBPACK_IMPORTED_MODULE_0__.getAudioCurrentTime)() / 16;
  const offset = 0.005;
  progressBar.style.transform = `scaleX(${progressPercentage + offset})`;

  if (!(0,_audioManager__WEBPACK_IMPORTED_MODULE_0__.isAudioPaused)()) {
    requestAnimationFrame(updateProgressBar);
  } else {
    changePlayButtonIconToPlay(); 
  }
}


const seekBarBackground = document.querySelector(".seek-bar-background");

function updateSeekBarBackground(turn) {
  const playDuration = _sheardle__WEBPACK_IMPORTED_MODULE_1__.allowedDurations[turn];
  const percentage = playDuration / 16;
  seekBarBackground.style.transform = `scaleX(${percentage})`;
}

// Allowed length to play markers
function createMarker(duration) {
  const marker = document.createElement("div");
  const percentage = Math.min((duration / 16) * 100, 100); // limit to maximum of 100

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
      const marker = createMarker(duration);
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

    console.log("Track ID:", trackID);

    const track = await (0,_spotify_js__WEBPACK_IMPORTED_MODULE_1__.getTrackByID)(trackID);

    return new Audio(track.preview_url);
};

async function initAudio(trackID) {
    audio = await getGameTrackAudio(trackID);
    audio.addEventListener("timeupdate", _UI_js__WEBPACK_IMPORTED_MODULE_2__.updateProgressBar);
}

function playAudio() {

    const playDuration = _sheardle_js__WEBPACK_IMPORTED_MODULE_0__.allowedDurations[(0,_sheardle_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentTurn)() - 1];
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
/* harmony import */ var _sheardle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sheardle */ "./src/sheardle.js");


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

    console.log((0,_sheardle__WEBPACK_IMPORTED_MODULE_0__.shareResult)());
}



document.querySelector(".share-results-btn").addEventListener('click', function() {
    console.log("Copied results to clipboard", '\n\n', (0,_sheardle__WEBPACK_IMPORTED_MODULE_0__.shareResult)());

    // Copy to clipboard
    navigator.clipboard.writeText((0,_sheardle__WEBPACK_IMPORTED_MODULE_0__.shareResult)());
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
/* harmony export */   "checkArtist": () => (/* binding */ checkArtist),
/* harmony export */   "checkForSpotifyDupes": () => (/* binding */ checkForSpotifyDupes),
/* harmony export */   "checkGuess": () => (/* binding */ checkGuess),
/* harmony export */   "getCurrentTrackID": () => (/* binding */ getCurrentTrackID),
/* harmony export */   "getCurrentTurn": () => (/* binding */ getCurrentTurn),
/* harmony export */   "importGameState": () => (/* binding */ importGameState),
/* harmony export */   "saveNewGuessToGameState": () => (/* binding */ saveNewGuessToGameState),
/* harmony export */   "setupNewGame": () => (/* binding */ setupNewGame),
/* harmony export */   "shareResult": () => (/* binding */ shareResult)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _audioManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audioManager */ "./src/audioManager.js");
/* harmony import */ var _spotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spotify */ "./src/spotify.js");
/* harmony import */ var _trackSelection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trackSelection */ "./src/trackSelection.js");






const allowedDurations = [1, 2, 4, 7, 11, 16];

let gameState = {
  guesses: [],
  trackID: null,
  won: false
};

const getCurrentTurn = () => gameState.guesses.length + 1;
const getCurrentTrackID = () => gameState.trackID;

function setupNewGame() {

  const todaysTrackID = (0,_trackSelection__WEBPACK_IMPORTED_MODULE_3__.getTodaysTrackID)();

  gameState.guesses = [];
  gameState.trackID = todaysTrackID;
  gameState.won = false;

  (0,_audioManager__WEBPACK_IMPORTED_MODULE_1__.initAudio)(todaysTrackID);
}

function importGameState(loadedGameState) {
  console.log("Game state loaded:", loadedGameState);
  gameState = loadedGameState;

  // console.log("Current turn:", gameState.guesses.length + 1);
  // console.log("Current guesses:", gameState.guesses);

  (0,_audioManager__WEBPACK_IMPORTED_MODULE_1__.initAudio)(loadedGameState.trackID);
}



function checkGuess(guessedTrackID, gameTrackID) {
  // console.log("Guess:", guessedTrackID);
  // console.log("Game track:", gameTrackID);

  return guessedTrackID === gameTrackID;
}

async function checkForSpotifyDupes(searchQuery) {
    // If false, check the user's guess against what should hopefully be Spotify's dupes
    const fetchedIDs = await (0,_spotify__WEBPACK_IMPORTED_MODULE_2__.getAllTrackIDsBySearchQuery)(searchQuery);

    // If guessedTrackID is in the array returned, return true
    return fetchedIDs.includes(getCurrentTrackID());
}

async function checkArtist(trackID) {
  let guessedTrack = await (0,_spotify__WEBPACK_IMPORTED_MODULE_2__.getTrackByID)(trackID);
  let gameTrack = await (0,_spotify__WEBPACK_IMPORTED_MODULE_2__.getTrackByID)((0,_trackSelection__WEBPACK_IMPORTED_MODULE_3__.getTodaysTrackID)());

  let guessedArtists = guessedTrack.artists.map(artist => artist.name);
  let gameArtists = gameTrack.artists.map(artist => artist.name);

  // Check if any artist in guessedTrack exists in gameTrack
  return guessedArtists.some(artist => gameArtists.includes(artist));
}


async function saveNewGuessToGameState(guess, status) {

  gameState.guesses.push({guess, status});

  // Save to local storage
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveGameState)(gameState);

  console.log("Game state after save:", gameState);
}

function addSkippedTurnToGameState() {
  // Save a null guess to represent a skipped turn
  gameState.guesses.push(null);

  // Save to local storage
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveGameState)(gameState);
}

function shareResult() {

  let gameGuessesExport = "";

  gameState.guesses.forEach(guess => {
      if(guess === null) {
          gameGuessesExport += "⬛ "; // grey circle for skipped guess
        } else if(guess.status === "correct") {
          gameGuessesExport += "🟩 "; // green square for correct guess
        } else if(guess.status === "semicorrect") {
          gameGuessesExport += "🟨 "; // yellow square for correct guess
      } else {
          gameGuessesExport += "🟥 "; // red square for wrong guess
      }
  })

  // Calculate the number of days passed since the start date
  let daysPassed = (0,_trackSelection__WEBPACK_IMPORTED_MODULE_3__.getCurrentDay)();

  // Compose share string
  let shareString = "Sheardle "
  shareString += '#'
  shareString += daysPassed 
  shareString += ' | '
  shareString += "5/6"
  shareString += "\n";
  shareString += gameGuessesExport;
  shareString += "\n\n"
  shareString += window.location 

  return shareString;
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
/* harmony export */   "getCurrentDay": () => (/* binding */ getCurrentDay),
/* harmony export */   "getTodaysTrackID": () => (/* binding */ getTodaysTrackID)
/* harmony export */ });
const START_DATE = new Date('2023-05-22');

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


function getCurrentDay() {
    // Get the current date in local time
    let currentDate = new Date();
    
    // Set both dates to midnight (start of the day) in local time
    let startDate = new Date(new Date(START_DATE).setHours(0,0,0,0));
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

function getTodaysTrackID() {
    return trackSelection[getCurrentDay()];
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
/* harmony import */ var _trackSelection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trackSelection */ "./src/trackSelection.js");







 // Autoload win screen on completed day



console.log("Current day is", (0,_trackSelection__WEBPACK_IMPORTED_MODULE_5__.getCurrentDay)(), "day(s) past the start date");

const gameLoaded = (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.loadGameState)();

if (gameLoaded) {

    const todaysTrackID = (0,_trackSelection__WEBPACK_IMPORTED_MODULE_5__.getTodaysTrackID)();

    if (gameLoaded.trackID !== todaysTrackID) {
        console.log("Starting new game due to day change");
        (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.setupNewGame)();
        (0,_UI__WEBPACK_IMPORTED_MODULE_3__.initUI)();
    } else {
        console.log("Game successfully loaded");
        (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.importGameState)(gameLoaded);
        (0,_UI__WEBPACK_IMPORTED_MODULE_3__.initUI)(gameLoaded);
    }
} else {
    console.log("Starting new game");
    (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.setupNewGame)();
    (0,_UI__WEBPACK_IMPORTED_MODULE_3__.initUI)();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBYTs7QUFFaEM7O0FBRUEsMEJBQTBCLGlFQUFnQjs7QUFFMUM7QUFDQTtBQUNBLFFBQVEsdURBQVk7QUFDcEIsUUFBUSwyQ0FBTTtBQUNkLE1BQU07QUFDTjtBQUNBLFFBQVEsMERBQWU7QUFDdkIsUUFBUSwyQ0FBTTtBQUNkO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsSUFBSSx1REFBWTtBQUNoQixJQUFJLDJDQUFNO0FBQ1YsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NoZWFyZGxlLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3NoZWFyZGxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL3NyYy9hdWRpb01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vc3JjL3Jlc3VsdHNTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9zcmMvc2hlYXJkbGUuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9zcmMvc3BvdGlmeS5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL3NyYy9zcG90aWZ5VG9rZW5NYW5hZ2VyLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vc3JjL3RyYWNrU2VsZWN0aW9uLmpzIiwid2VicGFjazovL3NoZWFyZGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NoZWFyZGxlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NoZWFyZGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zaGVhcmRsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NoZWFyZGxlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3NoZWFyZGxlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogOTAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZy10b3A6IDYwcHg7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xcbiAgICBvdmVyZmxvdzogbm9uZTtcXG59XFxuXFxuLmluZm8sXFxuLmhvdy10by1wbGF5IHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBsYXktY29udGFpbmVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5zZWVrLWJhci1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4uc2Vlay1iYXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZmZmZjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5zZWVrLWJhci1iYWNrZ3JvdW5kIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXG59XFxuXFxuLnNlZWstYmFyLW1hcmtlcnMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5zZWVrLWJhci1wcm9ncmVzcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxREI5NTQ7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxufVxcblxcbi5wcm9ncmVzcyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURCOTU0O1xcbiAgd2lkdGg6IDA7XFxufVxcblxcbi5zZWN0aW9uIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XFxufVxcblxcbi5wbGF5LWJ1dHRvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucGxheS1idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5lbGFwc2VkLXRpbWUsXFxuLnRvdGFsLXRpbWUge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZWxhcHNlZC10aW1lIHtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi50b3RhbC10aW1lIHtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zcG90aWZ5LXNlYXJjaCB7XFxuICB3aWR0aDogOTAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmJ1dHRvbnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG4uc3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxREI5NTQ7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnNraXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnNraXAsXFxuLnN1Ym1pdCB7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbn1cXG5cXG5idXR0b25bZGlzYWJsZWRdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnJlc3VsdHMtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHdpZHRoOiA5NSU7XFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMmI7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdG9wOiBjYWxjKDEwMCUgKyA1cHgpO1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0ge1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLnJlc3VsdC1pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XFxufVxcblxcbi5ndWVzcyB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmNjI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4OyBcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7IFxcbiAgY29sb3I6ICNmZmZmZmZhYTsgXFxufVxcblxcbi5ndWVzcy10ZXh0IHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5yZWQteC1pY29uIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC43NSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMTJweDtcXG59XFxuXFxuLnllbGxvdy14LWljb24ge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyMTUsIDAsIDAuNzUpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XFxufVxcblxcbi5ncmVlbi1jaGVjay1pY29uIHtcXG4gIGNvbG9yOiBncmVlbjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7IFxcbn0gXFxuXFxuXFxuLyogUmVzdWx0cyBzY3JlZW4gKi9cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hbGJ1bS1hcnQge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcXG59XFxuXFxuLnNvbmctdGl0bGUge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4uc29uZy1hcnRpc3Qge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGNvbG9yOiAjODg4O1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbn1cXG5cXG4uc2hhcmUtcmVzdWx0cy1idG4ge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFEQjk1NDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxufVxcblxcbi5zaGFyZS1yZXN1bHRzLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ4YjNiO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBOztFQUVFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztB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LG1CQUFtQjs7QUFFbkI7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFVBQVU7RUFDVixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiA5MCU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nLXRvcDogNjBweDtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxufVxcblxcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxuICAgIG92ZXJmbG93OiBub25lO1xcbn1cXG5cXG4uaW5mbyxcXG4uaG93LXRvLXBsYXkge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGxheS1jb250YWluZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnNlZWstYmFyLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5zZWVrLWJhciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmZmZmO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnNlZWstYmFyLWJhY2tncm91bmQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcbn1cXG5cXG4uc2Vlay1iYXItbWFya2VycyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnNlZWstYmFyLXByb2dyZXNzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFEQjk1NDtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXG59XFxuXFxuLnByb2dyZXNzIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxREI5NTQ7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuLnNlY3Rpb24ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcXG59XFxuXFxuLnBsYXktYnV0dG9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wbGF5LWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDA7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmVsYXBzZWQtdGltZSxcXG4udG90YWwtdGltZSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5lbGFwc2VkLXRpbWUge1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLnRvdGFsLXRpbWUge1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNwb3RpZnktc2VhcmNoIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYnV0dG9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxufVxcblxcbi5zdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFEQjk1NDtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uc2tpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDA7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uc2tpcCxcXG4uc3VibWl0IHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxufVxcblxcbmJ1dHRvbltkaXNhYmxlZF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucmVzdWx0cy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgd2lkdGg6IDk1JTtcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAyYjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB0b3A6IGNhbGMoMTAwJSArIDVweCk7XFxufVxcblxcbi5yZXN1bHQtaXRlbSB7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcXG59XFxuXFxuLmd1ZXNzIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY2MjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBmb250LXNpemU6IDE2cHg7IFxcbiAgZm9udC13ZWlnaHQ6IDMwMDsgXFxuICBjb2xvcjogI2ZmZmZmZmFhOyBcXG59XFxuXFxuLmd1ZXNzLXRleHQge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLnJlZC14LWljb24ge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjc1KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xcbn1cXG5cXG4ueWVsbG93LXgtaWNvbiB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDIxNSwgMCwgMC43NSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMTJweDtcXG59XFxuXFxuLmdyZWVuLWNoZWNrLWljb24ge1xcbiAgY29sb3I6IGdyZWVuO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDhweDsgXFxufSBcXG5cXG5cXG4vKiBSZXN1bHRzIHNjcmVlbiAqL1xcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFsYnVtLWFydCB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbn1cXG5cXG4uc29uZy10aXRsZSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNGRkZGRkY7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbi5zb25nLWFydGlzdCB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgY29sb3I6ICM4ODg7XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxufVxcblxcbi5zaGFyZS1yZXN1bHRzLWJ0biB7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgY29sb3I6ICNGRkZGRkY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURCOTU0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG59XFxuXFxuLnNoYXJlLXJlc3VsdHMtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDhiM2I7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGlzQXVkaW9QYXVzZWQsIHBsYXlBdWRpbywgcGF1c2VBdWRpbywgZ2V0QXVkaW9DdXJyZW50VGltZSB9IGZyb20gJy4vYXVkaW9NYW5hZ2VyJztcbmltcG9ydCB7IGFsbG93ZWREdXJhdGlvbnMsIGdldEN1cnJlbnRUdXJuLCBnZXRDdXJyZW50VHJhY2tJRCwgY2hlY2tHdWVzcywgc2F2ZU5ld0d1ZXNzVG9HYW1lU3RhdGUsIGFkZFNraXBwZWRUdXJuVG9HYW1lU3RhdGUsIGNoZWNrRm9yU3BvdGlmeUR1cGVzLCBjaGVja0FydGlzdCB9IGZyb20gJy4vc2hlYXJkbGUnO1xuaW1wb3J0IHsgc2VhcmNoVHJhY2ssIGdldFRyYWNrQnlJRCB9IGZyb20gJy4vc3BvdGlmeSc7XG5pbXBvcnQgeyBnYW1lRW5kIH0gZnJvbSAnLi9yZXN1bHRzU2NyZWVuJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRVSShnYW1lU3RhdGUgPSBudWxsKSB7XG5cbiAgLy8gRXZlcnkgb3RoZXIgdGltZSBJIHVzZSB0aGlzLCBpdCdzIGJlZm9yZSBJIHVwZGF0ZSB0aGUgZ2FtZVN0YXRlLCBzbyB0aGlzIG5lZWRzIHRvIGJlIC0xXG4gIHVwZGF0ZVNlZWtCYXJCYWNrZ3JvdW5kKGdldEN1cnJlbnRUdXJuKCktMSk7XG5cbiAgY3JlYXRlTWFya2VycyhhbGxvd2VkRHVyYXRpb25zKTtcblxuICBpZiAoZ2FtZVN0YXRlKSB7XG4gICAgaW1wb3J0TG9hZGVkR2FtZShnYW1lU3RhdGUpO1xuICB9XG5cbiAgdXBkYXRlU2tpcEJ1dHRvblRleHQoKTtcblxufVxuXG5mdW5jdGlvbiBpbXBvcnRMb2FkZWRHYW1lKGdhbWVEYXRhKSB7XG5cbiAgLy8gSWYgY29tcGxldGVkXG4gIGlmIChnYW1lRGF0YS5ndWVzc2VzLmxlbmd0aCA+PSA2KSB7XG4gICAgXG4gICAgLy8gRW5kIGdhbWVcbiAgICBnZXRUcmFja0J5SUQoZ2V0Q3VycmVudFRyYWNrSUQoKSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBnYW1lRW5kKHJlc3BvbnNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxldCBjdXJyZW50VHVybjtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVEYXRhLmd1ZXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICBcbiAgICBjdXJyZW50VHVybiA9IGkgKyAxO1xuICAgIGNvbnN0IGd1ZXNzRGF0YSA9IGdhbWVEYXRhLmd1ZXNzZXNbaV07XG5cbiAgICAvLyBDaGVjayB0aGUgc3RhdGUgb2YgZWFjaCBndWVzcyBhbmQgdXBkYXRlIHRoZSBVSSBhY2NvcmRpbmdseVxuICAgIGlmIChndWVzc0RhdGEgPT09IG51bGwpIHtcbiAgICAgIGFkZFNraXBwZWRUdXJuVG9Cb2FyZChjdXJyZW50VHVybik7XG4gICAgfSBlbHNlIGlmIChndWVzc0RhdGEuc3RhdHVzID09PSBcImNvcnJlY3RcIikge1xuICAgICAgYWRkQ29ycmVjdEd1ZXNzVG9Cb2FyZChndWVzc0RhdGEuZ3Vlc3MsIGN1cnJlbnRUdXJuKTtcbiAgICB9IGVsc2UgaWYgKGd1ZXNzRGF0YS5zdGF0dXMgPT09IFwic2VtaWNvcnJlY3RcIikge1xuICAgICAgYWRkU2VtaWNvcnJlY3RHdWVzc1RvQm9hcmQoZ3Vlc3NEYXRhLmd1ZXNzLCBjdXJyZW50VHVybik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZEluY29ycmVjdEd1ZXNzVG9Cb2FyZChndWVzc0RhdGEuZ3Vlc3MsIGN1cnJlbnRUdXJuKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gR3Vlc3MgYm9hcmRcbmNvbnN0IGd1ZXNzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmd1ZXNzLWNvbnRhaW5lcicpO1xuXG5mdW5jdGlvbiBhZGRTZW1pY29ycmVjdEd1ZXNzVG9Cb2FyZChndWVzcywgdHVybikge1xuXG4gIHR1cm4gPSB0dXJuIC0gMTsgLy8gQWNjb3VudCBmb3IgemVyby1pbmRleGluZyBvZiBkaXZcblxuICBjb25zdCBndWVzc0RpdiA9IGd1ZXNzQ29udGFpbmVyLmNoaWxkcmVuW3R1cm5dO1xuXG4gIC8vIENyZWF0ZSB0aGUgcmVkICd4JyBpY29uXG4gIGNvbnN0IHllbGxvd1hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB5ZWxsb3dYSWNvbi50ZXh0Q29udGVudCA9ICd4JztcbiAgeWVsbG93WEljb24uY2xhc3NMaXN0LmFkZCgneWVsbG93LXgtaWNvbicpO1xuICBndWVzc0Rpdi5hcHBlbmRDaGlsZCh5ZWxsb3dYSWNvbik7XG5cbiAgLy8gQWRkIHRoZSB0cmFjayBpbmZvIHRleHQgdG8gdGhlIGd1ZXNzIGRpdlxuICBjb25zdCBndWVzc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGd1ZXNzVGV4dC50ZXh0Q29udGVudCA9IGd1ZXNzO1xuICBndWVzc1RleHQuY2xhc3NMaXN0LmFkZCgnZ3Vlc3MtdGV4dCcpO1xuICBndWVzc0Rpdi5hcHBlbmRDaGlsZChndWVzc1RleHQpO1xufVxuXG5mdW5jdGlvbiBhZGRJbmNvcnJlY3RHdWVzc1RvQm9hcmQoZ3Vlc3MsIHR1cm4pIHtcblxuICB0dXJuID0gdHVybiAtIDE7IC8vIEFjY291bnQgZm9yIHplcm8taW5kZXhpbmcgb2YgZGl2XG5cbiAgY29uc3QgZ3Vlc3NEaXYgPSBndWVzc0NvbnRhaW5lci5jaGlsZHJlblt0dXJuXTtcblxuICAvLyBDcmVhdGUgdGhlIHJlZCAneCcgaWNvblxuICBjb25zdCByZWRYSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgcmVkWEljb24udGV4dENvbnRlbnQgPSAneCc7XG4gIHJlZFhJY29uLmNsYXNzTGlzdC5hZGQoJ3JlZC14LWljb24nKTtcbiAgZ3Vlc3NEaXYuYXBwZW5kQ2hpbGQocmVkWEljb24pO1xuXG4gIC8vIEFkZCB0aGUgdHJhY2sgaW5mbyB0ZXh0IHRvIHRoZSBndWVzcyBkaXZcbiAgY29uc3QgZ3Vlc3NUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBndWVzc1RleHQudGV4dENvbnRlbnQgPSBndWVzcztcbiAgZ3Vlc3NUZXh0LmNsYXNzTGlzdC5hZGQoJ2d1ZXNzLXRleHQnKTtcbiAgZ3Vlc3NEaXYuYXBwZW5kQ2hpbGQoZ3Vlc3NUZXh0KTtcbn1cblxuZnVuY3Rpb24gYWRkQ29ycmVjdEd1ZXNzVG9Cb2FyZChndWVzcywgdHVybikge1xuXG4gIHR1cm4gPSB0dXJuIC0gMTsgLy8gQWNjb3VudCBmb3IgemVyby1pbmRleGluZyBvZiBkaXZcblxuICBjb25zdCBndWVzc0RpdiA9IGd1ZXNzQ29udGFpbmVyLmNoaWxkcmVuW3R1cm5dO1xuXG4gIC8vIENyZWF0ZSB0aGUgZ3JlZW4gY2hlY2ttYXJrIGljb25cbiAgY29uc3QgZ3JlZW5DaGVja0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGdyZWVuQ2hlY2tJY29uLnRleHRDb250ZW50ID0gJ+Kckyc7XG4gIGdyZWVuQ2hlY2tJY29uLmNsYXNzTGlzdC5hZGQoJ2dyZWVuLWNoZWNrLWljb24nKTtcbiAgZ3Vlc3NEaXYuYXBwZW5kQ2hpbGQoZ3JlZW5DaGVja0ljb24pO1xuXG4gIC8vIEFkZCB0aGUgdHJhY2sgaW5mbyB0ZXh0IHRvIHRoZSBndWVzcyBkaXZcbiAgY29uc3QgZ3Vlc3NUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBndWVzc1RleHQudGV4dENvbnRlbnQgPSBndWVzcztcbiAgZ3Vlc3NUZXh0LmNsYXNzTGlzdC5hZGQoJ2d1ZXNzLXRleHQnKTtcbiAgZ3Vlc3NEaXYuYXBwZW5kQ2hpbGQoZ3Vlc3NUZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFNraXBwZWRUdXJuVG9Cb2FyZCh0dXJuKSB7XG5cbiAgdHVybiA9IHR1cm4gLSAxOyAvLyBBY2NvdW50IGZvciB6ZXJvLWluZGV4aW5nIG9mIGRpdlxuXG4gIGNvbnN0IGd1ZXNzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmd1ZXNzLWNvbnRhaW5lcicpO1xuICBjb25zdCBndWVzc0RpdiA9IGd1ZXNzQ29udGFpbmVyLmNoaWxkcmVuW3R1cm5dO1xuICBcbiAgLy8gQ3JlYXRlIHRoZSByZWQgJ3gnIGljb25cbiAgY29uc3QgcmVkWEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHJlZFhJY29uLnRleHRDb250ZW50ID0gJ3gnO1xuICByZWRYSWNvbi5jbGFzc0xpc3QuYWRkKCdyZWQteC1pY29uJyk7XG5cbiAgLy8gQWRkIHRoZSByZWQgJ3gnIGljb24gdG8gdGhlIGd1ZXNzIGRpdlxuICBndWVzc0Rpdi5hcHBlbmRDaGlsZChyZWRYSWNvbik7XG5cbiAgLy8gQWRkIHRoZSBcIlNraXBwZWQgdHVyblwiIHRleHQgdG8gdGhlIGd1ZXNzIGRpdlxuICBjb25zdCBza2lwcGVkVHVyblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHNraXBwZWRUdXJuVGV4dC50ZXh0Q29udGVudCA9IFwiU2tpcHBlZFwiO1xuICBndWVzc0Rpdi5hcHBlbmRDaGlsZChza2lwcGVkVHVyblRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJTZWFyY2hCb3goKSB7XG4gIGNvbnN0IHNlYXJjaEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcG90aWZ5LXNlYXJjaCcpO1xuICBzZWFyY2hCb3gudmFsdWUgPSAnJztcbn1cblxuXG4vLyBQbGF5L1BhdXNlIGJ1dHRvblxuY29uc3QgcGxheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheS1idXR0b25cIik7XG5wbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQbGF5QnV0dG9uQ2xpY2spO1xuXG5mdW5jdGlvbiBoYW5kbGVQbGF5QnV0dG9uQ2xpY2soKSB7XG5cbiAgICBpZiAoaXNBdWRpb1BhdXNlZCgpKSB7XG4gICAgICAgIHBsYXlBdWRpbygpO1xuICAgICAgICBwbGF5QnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhIGZhLXBhdXNlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPic7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGF1c2VBdWRpbygpO1xuICAgICAgICBwbGF5QnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhIGZhLXBsYXlcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+JztcbiAgICB9XG59XG5cblxuLy8gU2tpcCBidXR0b25cbmNvbnN0IHNraXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNraXBcIik7XG5za2lwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVTa2lwQnV0dG9uQ2xpY2spO1xuXG5mdW5jdGlvbiBoYW5kbGVTa2lwQnV0dG9uQ2xpY2soKSB7XG5cbiAgaWYgKGdldEN1cnJlbnRUdXJuKCkgPCBhbGxvd2VkRHVyYXRpb25zLmxlbmd0aCkge1xuICAgIFxuICAgIGFkZFNraXBwZWRUdXJuVG9Cb2FyZChnZXRDdXJyZW50VHVybigpKTtcbiAgICBcbiAgICB1cGRhdGVTa2lwQnV0dG9uVGV4dCgpO1xuICAgIHVwZGF0ZVNlZWtCYXJCYWNrZ3JvdW5kKGdldEN1cnJlbnRUdXJuKCkpO1xuXG4gICAgYWRkU2tpcHBlZFR1cm5Ub0dhbWVTdGF0ZSgpO1xuXG4gIH0gZWxzZSB7XG5cbiAgICBhZGRTa2lwcGVkVHVyblRvR2FtZVN0YXRlKCk7XG5cbiAgICAvLyBFbmQgZ2FtZVxuICAgIGdldFRyYWNrQnlJRChnZXRDdXJyZW50VHJhY2tJRCgpKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGdhbWVFbmQocmVzcG9uc2UpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVBsYXlCdXR0b25JY29uVG9QbGF5KCkge1xuICBwbGF5QnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhIGZhLXBsYXlcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+Jztcbn1cblxuZnVuY3Rpb24gdXBkYXRlU2tpcEJ1dHRvblRleHQoKSB7XG5cbiAgaWYgKGdldEN1cnJlbnRUdXJuKCkgPj0gMSAmJiBnZXRDdXJyZW50VHVybigpIDwgYWxsb3dlZER1cmF0aW9ucy5sZW5ndGgpIHtcbiAgICBjb25zdCBza2lwU2Vjb25kcyA9IGFsbG93ZWREdXJhdGlvbnNbZ2V0Q3VycmVudFR1cm4oKV0gLSBhbGxvd2VkRHVyYXRpb25zW2dldEN1cnJlbnRUdXJuKCkgLSAxXTtcbiAgICBza2lwQnV0dG9uLnRleHRDb250ZW50ID0gYFNLSVAgKCske3NraXBTZWNvbmRzfXMpYDtcbiAgfSBlbHNlIGlmIChnZXRDdXJyZW50VHVybigpID09PSAwKSB7XG4gICAgY29uc3Qgc2tpcFNlY29uZHMgPSBhbGxvd2VkRHVyYXRpb25zW2dldEN1cnJlbnRUdXJuKCldO1xuICAgIHNraXBCdXR0b24udGV4dENvbnRlbnQgPSBgU0tJUCAoKyR7c2tpcFNlY29uZHN9cylgO1xuICB9IGVsc2Uge1xuICAgIHNraXBCdXR0b24udGV4dENvbnRlbnQgPSBcIlNLSVBcIjtcbiAgfVxufVxuXG5cbi8vIFN1Ym1pdCBidXR0b25cbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKTtcblxuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlU3VibWl0KTtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xuICBcbiAgY29uc3QgZ2FtZVRyYWNrSUQgPSBnZXRDdXJyZW50VHJhY2tJRCgpO1xuICBjb25zdCBndWVzc0lzQ29ycmVjdCA9IGNoZWNrR3Vlc3Moc2VsZWN0ZWRUcmFja0lELCBnYW1lVHJhY2tJRCk7XG4gIGNvbnN0IHNlYXJjaElucHV0VmFsdWUgPSBzZWFyY2hJbnB1dC52YWx1ZTtcblxuICBkaXNhYmxlU3VibWl0QnV0dG9uKCk7XG4gIGNsZWFyU2VhcmNoQm94KCk7XG5cbiAgLy8gVXBkYXRlIHByb2dyZXNzIGJhciBiZWZvcmUgYWRkaW5nIGd1ZXNzIGFuZCBzYXZpbmcgZ2FtZSBzdGF0ZVxuICB1cGRhdGVTZWVrQmFyQmFja2dyb3VuZChnZXRDdXJyZW50VHVybigpKTtcblxuICAvLyBDaGVjayBpZiBndWVzcyBpcyBjb3JyZWN0IGZpcnN0XG4gIGlmIChndWVzc0lzQ29ycmVjdCkge1xuICAgIGFkZENvcnJlY3RHdWVzc1RvQm9hcmQoc2VhcmNoSW5wdXRWYWx1ZSwgZ2V0Q3VycmVudFR1cm4oKSk7XG5cbiAgICBzYXZlTmV3R3Vlc3NUb0dhbWVTdGF0ZShzZWFyY2hJbnB1dFZhbHVlLCBcImNvcnJlY3RcIik7XG4gICAgXG4gICAgZ2V0VHJhY2tCeUlEKGdldEN1cnJlbnRUcmFja0lEKCkpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgZ2FtZUVuZChyZXNwb25zZSk7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgYXJ0aXN0IGlzIGNvcnJlY3RcbiAgbGV0IGFydGlzdENoZWNrID0gYXdhaXQgY2hlY2tBcnRpc3Qoc2VsZWN0ZWRUcmFja0lEKTtcblxuICBjb25zb2xlLmxvZyhcIkFydGlzdCBjaGVjayBpc1wiLCBhcnRpc3RDaGVjayk7XG5cbiAgLy8gQ29ycmVjdCBhcnRpc3Qgc3VibWl0dGVkXG4gIGlmIChhcnRpc3RDaGVjaykge1xuICAgIGxldCBkdXBlc0NoZWNrID0gYXdhaXQgY2hlY2tGb3JTcG90aWZ5RHVwZXMoc2VhcmNoSW5wdXRWYWx1ZSlcblxuICAgIGNvbnNvbGUubG9nKFwiRHVwZXMgY2hlY2sgaXNcIiwgZHVwZXNDaGVjayk7XG5cbiAgICAvLyBDb3JyZWN0IGFuc3dlciBmb3VuZCBpbiBkdXBlc1xuICAgIGlmIChkdXBlc0NoZWNrKSB7XG4gICAgICBhZGRDb3JyZWN0R3Vlc3NUb0JvYXJkKHNlYXJjaElucHV0VmFsdWUsIGdldEN1cnJlbnRUdXJuKCkpO1xuXG4gICAgICBzYXZlTmV3R3Vlc3NUb0dhbWVTdGF0ZShzZWFyY2hJbnB1dFZhbHVlLCBcImNvcnJlY3RcIik7XG5cbiAgICAgIGdldFRyYWNrQnlJRChnZXRDdXJyZW50VHJhY2tJRCgpKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgZ2FtZUVuZChyZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEFydGlzdCBmb3VuZCwgYnV0IG5vIGR1cGVzIG9mIHRyYWNrXG4gICAgYWRkU2VtaWNvcnJlY3RHdWVzc1RvQm9hcmQoc2VhcmNoSW5wdXRWYWx1ZSwgZ2V0Q3VycmVudFR1cm4oKSk7XG4gICAgc2F2ZU5ld0d1ZXNzVG9HYW1lU3RhdGUoc2VhcmNoSW5wdXRWYWx1ZSwgXCJzZW1pY29ycmVjdFwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBDb21wbGV0ZWx5IGluY29ycmVjdFxuICBhZGRJbmNvcnJlY3RHdWVzc1RvQm9hcmQoc2VhcmNoSW5wdXRWYWx1ZSwgZ2V0Q3VycmVudFR1cm4oKSk7XG4gIHNhdmVOZXdHdWVzc1RvR2FtZVN0YXRlKHNlYXJjaElucHV0VmFsdWUsIFwiaW5jb3JyZWN0XCIpO1xuXG4gIC8vIENoZWNrIHRvdGFsIGd1ZXNzZXMgYWZ0ZXIgZWFjaCBpbmNvcnJlY3QgZ3Vlc3NcbiAgaWYgKGdldEN1cnJlbnRUdXJuKCkgPj0gYWxsb3dlZER1cmF0aW9ucykge1xuXG4gICAgZ2V0VHJhY2tCeUlEKGdldEN1cnJlbnRUcmFja0lEKCkpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgZ2FtZUVuZChyZXNwb25zZSk7XG5cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlU3VibWl0QnV0dG9uKCkge1xuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0Jyk7XG4gIHN1Ym1pdEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVTdWJtaXRCdXR0b24oKSB7XG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKTtcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xufVxuXG5cbi8vIFByb2dyZXNzIGJhclxuY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlZWstYmFyLXByb2dyZXNzXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUHJvZ3Jlc3NCYXIoKSB7XG4gIGNvbnN0IHByb2dyZXNzUGVyY2VudGFnZSA9IGdldEF1ZGlvQ3VycmVudFRpbWUoKSAvIDE2O1xuICBjb25zdCBvZmZzZXQgPSAwLjAwNTtcbiAgcHJvZ3Jlc3NCYXIuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlWCgke3Byb2dyZXNzUGVyY2VudGFnZSArIG9mZnNldH0pYDtcblxuICBpZiAoIWlzQXVkaW9QYXVzZWQoKSkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVQcm9ncmVzc0Jhcik7XG4gIH0gZWxzZSB7XG4gICAgY2hhbmdlUGxheUJ1dHRvbkljb25Ub1BsYXkoKTsgXG4gIH1cbn1cblxuXG5jb25zdCBzZWVrQmFyQmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2Vlay1iYXItYmFja2dyb3VuZFwiKTtcblxuZnVuY3Rpb24gdXBkYXRlU2Vla0JhckJhY2tncm91bmQodHVybikge1xuICBjb25zdCBwbGF5RHVyYXRpb24gPSBhbGxvd2VkRHVyYXRpb25zW3R1cm5dO1xuICBjb25zdCBwZXJjZW50YWdlID0gcGxheUR1cmF0aW9uIC8gMTY7XG4gIHNlZWtCYXJCYWNrZ3JvdW5kLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZVgoJHtwZXJjZW50YWdlfSlgO1xufVxuXG4vLyBBbGxvd2VkIGxlbmd0aCB0byBwbGF5IG1hcmtlcnNcbmZ1bmN0aW9uIGNyZWF0ZU1hcmtlcihkdXJhdGlvbikge1xuICBjb25zdCBtYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwZXJjZW50YWdlID0gTWF0aC5taW4oKGR1cmF0aW9uIC8gMTYpICogMTAwLCAxMDApOyAvLyBsaW1pdCB0byBtYXhpbXVtIG9mIDEwMFxuXG4gIG1hcmtlci5zdHlsZS53aWR0aCA9IFwiMXB4XCI7XG4gIG1hcmtlci5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgbWFya2VyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICBtYXJrZXIuc3R5bGUubGVmdCA9IGAke3BlcmNlbnRhZ2V9JWA7XG4gIG1hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZmZmZcIjtcblxuICByZXR1cm4gbWFya2VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWFya2VycyhhbGxvd2VkRHVyYXRpb25zKSB7XG4gIGNvbnN0IG1hcmtlcnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlZWstYmFyLW1hcmtlcnNcIik7XG4gIGFsbG93ZWREdXJhdGlvbnMuZm9yRWFjaChkdXJhdGlvbiA9PiB7XG4gICAgICBjb25zdCBtYXJrZXIgPSBjcmVhdGVNYXJrZXIoZHVyYXRpb24pO1xuICAgICAgbWFya2Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtYXJrZXIpO1xuICB9KTtcbn1cblxuLy8gU2VhcmNoIGJhclxuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BvdGlmeS1zZWFyY2gnKTtcbmxldCBzZWxlY3RlZFRyYWNrSUQ7XG5cbi8vIERlYm91bmNlIGZ1bmN0aW9uIHRvIHN0b3AgdGhlIGF1dG8tc2VhcmNoIGZpcmluZyB0b28gb2Z0ZW5cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICAgIGxldCB0aW1lb3V0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgY29uc3QgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuXG4gICAgICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH07XG59XG5cbi8vIE5vIGRlYm91bmNlIG5lZWRlZCBmb3IgZGlzYWJsaW5nIHRoZSBidXR0b25cbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIGRpc2FibGVTdWJtaXRCdXR0b24oKTtcbn0pXG5cbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZGVib3VuY2UoKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgcXVlcnkgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzLWNvbnRhaW5lcicpO1xuICAgIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgcmVzdWx0c0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBcbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIHNlYXJjaFRyYWNrKHF1ZXJ5KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goKHRyYWNrLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcmVzdWx0SXRlbS5jbGFzc0xpc3QuYWRkKCdyZXN1bHQtaXRlbScpO1xuICAgICAgICAgICAgcmVzdWx0SXRlbS50ZXh0Q29udGVudCA9IGAke3RyYWNrLmFydGlzdHNbMF0ubmFtZX0gLSAke3RyYWNrLm5hbWV9YDtcbiAgICAgICAgICAgIHJlc3VsdEl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLXRyYWNrLWlkJywgdHJhY2suaWQpO1xuICBcbiAgICAgICAgICAgIHJlc3VsdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgc2VsZWN0ZWRUcmFja0lEID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10cmFjay1pZCcpOztcbiAgXG4gICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgc2VhcmNoIGlucHV0IHdpdGggdGhlIHNlbGVjdGVkIHJlc3VsdCBhbmQgaGlkZSB0aGUgcmVzdWx0cyBjb250YWluZXJcbiAgICAgICAgICAgICAgc2VhcmNoSW5wdXQudmFsdWUgPSBldmVudC50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgIHJlc3VsdHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgZW5hYmxlU3VibWl0QnV0dG9uKCk7XG4gICAgICAgICAgICB9KTtcbiAgXG4gICAgICAgICAgICByZXN1bHRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3VsdEl0ZW0pO1xuICAgICAgICAgIH0pO1xuICBcbiAgICAgICAgICByZXN1bHRzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIDUwMCkpO1xuXG4vLyBTZWFyY2ggcmVzdWx0c1xuY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzLWNvbnRhaW5lcicpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgLy8gQ2hlY2sgaWYgdGhlIGNsaWNrIHRhcmdldCBpcyBvdXRzaWRlIG9mIHRoZSAucmVzdWx0cy1jb250YWluZXJcbiAgaWYgKCFldmVudC50YXJnZXQuY2xvc2VzdCgnI3Jlc3VsdHMtY29udGFpbmVyJykpIHtcbiAgICByZXN1bHRzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn0pOyIsIi8vIEltcG9ydCBnYW1lIHN0YXRlIG1hbmlwdWxhdGlvbiBmdW5jdGlvbnNcbmltcG9ydCB7IGdldEN1cnJlbnRUdXJuLCBhbGxvd2VkRHVyYXRpb25zIH0gZnJvbSAnLi9zaGVhcmRsZS5qcyc7XG5pbXBvcnQgeyBnZXRUcmFja0J5SUQgfSBmcm9tICcuL3Nwb3RpZnkuanMnO1xuXG4vLyBUaGlzIHNob3VsZCBiZSBhIGNhbGxiYWNrLCB0byBhdm9pZCBjby1kZXBlbmRlbmN5P1xuaW1wb3J0IHsgdXBkYXRlUHJvZ3Jlc3NCYXIgfSBmcm9tICcuL1VJLmpzJztcblxuLy8gUmVxdWlyZWQgaGVyZSBzbyB0aGF0IHRoZSB1c2VyIGNhbiBwYXVzZSBhbmQgcmVzdW1lXG5sZXQgYXVkaW87XG5sZXQgZW5kVGltZTtcbmxldCB0aW1lb3V0SUQ7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRHYW1lVHJhY2tBdWRpbyh0cmFja0lEKSB7XG5cbiAgICBjb25zb2xlLmxvZyhcIlRyYWNrIElEOlwiLCB0cmFja0lEKTtcblxuICAgIGNvbnN0IHRyYWNrID0gYXdhaXQgZ2V0VHJhY2tCeUlEKHRyYWNrSUQpO1xuXG4gICAgcmV0dXJuIG5ldyBBdWRpbyh0cmFjay5wcmV2aWV3X3VybCk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdEF1ZGlvKHRyYWNrSUQpIHtcbiAgICBhdWRpbyA9IGF3YWl0IGdldEdhbWVUcmFja0F1ZGlvKHRyYWNrSUQpO1xuICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aW1ldXBkYXRlXCIsIHVwZGF0ZVByb2dyZXNzQmFyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYXlBdWRpbygpIHtcblxuICAgIGNvbnN0IHBsYXlEdXJhdGlvbiA9IGFsbG93ZWREdXJhdGlvbnNbZ2V0Q3VycmVudFR1cm4oKSAtIDFdO1xuICAgIGVuZFRpbWUgPSBwbGF5RHVyYXRpb247XG5cbiAgICBhdWRpby5jdXJyZW50VGltZSA9IDA7XG4gICAgYXVkaW8ucGxheSgpO1xuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJRCk7XG4gICAgdGltZW91dElEID0gc2V0VGltZW91dChwYXVzZUF1ZGlvLCBlbmRUaW1lICogMTAwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXVzZUF1ZGlvKCkge1xuICAgIGF1ZGlvLnBhdXNlKCk7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJRCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0F1ZGlvUGF1c2VkKCkge1xuICAgIHJldHVybiBhdWRpby5wYXVzZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdWRpb0N1cnJlbnRUaW1lKCkge1xuICAgIHJldHVybiBhdWRpby5jdXJyZW50VGltZTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gc2F2ZUdhbWVTdGF0ZShndWVzc2VzKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dhbWVTdGF0ZScsIEpTT04uc3RyaW5naWZ5KGd1ZXNzZXMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRHYW1lU3RhdGUoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdGF0ZScpKTtcbn0iLCJpbXBvcnQgeyBzaGFyZVJlc3VsdCB9IGZyb20gXCIuL3NoZWFyZGxlXCI7XG5cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRzTW9kYWxcIik7XG5cbi8vIFRoZSBiZWxvdyBzaG91bGQgYWxzbyB0YWtlIGluIHRoZSBnYW1lU3RhdGU/XG4vLyBUaGUgaWRlYSBiZWluZywgd2UgbmVlZCB0byBzaG93IGlmIHRoZSB1c2VyIHdhcyBjb3JyZWN0IG9yIG5vdFxuXG5leHBvcnQgZnVuY3Rpb24gZ2FtZUVuZCh0cmFja0luZm8pIHtcblxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICAvLyBTZXQgdGhlIHNvbmcncyBkZXRhaWxzXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb25nLXRpdGxlXCIpLnRleHRDb250ZW50ID0gdHJhY2tJbmZvLm5hbWU7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb25nLWFydGlzdFwiKS50ZXh0Q29udGVudCA9IHRyYWNrSW5mby5hcnRpc3RzWzBdLm5hbWU7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGJ1bS1hcnRcIikuc3JjID0gdHJhY2tJbmZvLmFsYnVtLmltYWdlc1swXS51cmw7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb25nLXByZXZpZXdcIikuc3JjID0gdHJhY2tJbmZvLnByZXZpZXdfdXJsO1xuXG4gICAgY29uc29sZS5sb2coc2hhcmVSZXN1bHQoKSk7XG59XG5cblxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoYXJlLXJlc3VsdHMtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coXCJDb3BpZWQgcmVzdWx0cyB0byBjbGlwYm9hcmRcIiwgJ1xcblxcbicsIHNoYXJlUmVzdWx0KCkpO1xuXG4gICAgLy8gQ29weSB0byBjbGlwYm9hcmRcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChzaGFyZVJlc3VsdCgpKTtcbn0pO1xuXG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufSIsIlxuaW1wb3J0IHsgc2F2ZUdhbWVTdGF0ZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHsgaW5pdEF1ZGlvIH0gZnJvbSBcIi4vYXVkaW9NYW5hZ2VyXCI7XG5pbXBvcnQgeyBnZXRBbGxUcmFja0lEc0J5U2VhcmNoUXVlcnksIGdldFRyYWNrQnlJRCB9IGZyb20gXCIuL3Nwb3RpZnlcIjtcbmltcG9ydCB7IGdldFRvZGF5c1RyYWNrSUQsIGdldEN1cnJlbnREYXkgfSBmcm9tICcuL3RyYWNrU2VsZWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGFsbG93ZWREdXJhdGlvbnMgPSBbMSwgMiwgNCwgNywgMTEsIDE2XTtcblxubGV0IGdhbWVTdGF0ZSA9IHtcbiAgZ3Vlc3NlczogW10sXG4gIHRyYWNrSUQ6IG51bGwsXG4gIHdvbjogZmFsc2Vcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50VHVybiA9ICgpID0+IGdhbWVTdGF0ZS5ndWVzc2VzLmxlbmd0aCArIDE7XG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudFRyYWNrSUQgPSAoKSA9PiBnYW1lU3RhdGUudHJhY2tJRDtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwTmV3R2FtZSgpIHtcblxuICBjb25zdCB0b2RheXNUcmFja0lEID0gZ2V0VG9kYXlzVHJhY2tJRCgpO1xuXG4gIGdhbWVTdGF0ZS5ndWVzc2VzID0gW107XG4gIGdhbWVTdGF0ZS50cmFja0lEID0gdG9kYXlzVHJhY2tJRDtcbiAgZ2FtZVN0YXRlLndvbiA9IGZhbHNlO1xuXG4gIGluaXRBdWRpbyh0b2RheXNUcmFja0lEKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGltcG9ydEdhbWVTdGF0ZShsb2FkZWRHYW1lU3RhdGUpIHtcbiAgY29uc29sZS5sb2coXCJHYW1lIHN0YXRlIGxvYWRlZDpcIiwgbG9hZGVkR2FtZVN0YXRlKTtcbiAgZ2FtZVN0YXRlID0gbG9hZGVkR2FtZVN0YXRlO1xuXG4gIC8vIGNvbnNvbGUubG9nKFwiQ3VycmVudCB0dXJuOlwiLCBnYW1lU3RhdGUuZ3Vlc3Nlcy5sZW5ndGggKyAxKTtcbiAgLy8gY29uc29sZS5sb2coXCJDdXJyZW50IGd1ZXNzZXM6XCIsIGdhbWVTdGF0ZS5ndWVzc2VzKTtcblxuICBpbml0QXVkaW8obG9hZGVkR2FtZVN0YXRlLnRyYWNrSUQpO1xufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrR3Vlc3MoZ3Vlc3NlZFRyYWNrSUQsIGdhbWVUcmFja0lEKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwiR3Vlc3M6XCIsIGd1ZXNzZWRUcmFja0lEKTtcbiAgLy8gY29uc29sZS5sb2coXCJHYW1lIHRyYWNrOlwiLCBnYW1lVHJhY2tJRCk7XG5cbiAgcmV0dXJuIGd1ZXNzZWRUcmFja0lEID09PSBnYW1lVHJhY2tJRDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrRm9yU3BvdGlmeUR1cGVzKHNlYXJjaFF1ZXJ5KSB7XG4gICAgLy8gSWYgZmFsc2UsIGNoZWNrIHRoZSB1c2VyJ3MgZ3Vlc3MgYWdhaW5zdCB3aGF0IHNob3VsZCBob3BlZnVsbHkgYmUgU3BvdGlmeSdzIGR1cGVzXG4gICAgY29uc3QgZmV0Y2hlZElEcyA9IGF3YWl0IGdldEFsbFRyYWNrSURzQnlTZWFyY2hRdWVyeShzZWFyY2hRdWVyeSk7XG5cbiAgICAvLyBJZiBndWVzc2VkVHJhY2tJRCBpcyBpbiB0aGUgYXJyYXkgcmV0dXJuZWQsIHJldHVybiB0cnVlXG4gICAgcmV0dXJuIGZldGNoZWRJRHMuaW5jbHVkZXMoZ2V0Q3VycmVudFRyYWNrSUQoKSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0FydGlzdCh0cmFja0lEKSB7XG4gIGxldCBndWVzc2VkVHJhY2sgPSBhd2FpdCBnZXRUcmFja0J5SUQodHJhY2tJRCk7XG4gIGxldCBnYW1lVHJhY2sgPSBhd2FpdCBnZXRUcmFja0J5SUQoZ2V0VG9kYXlzVHJhY2tJRCgpKTtcblxuICBsZXQgZ3Vlc3NlZEFydGlzdHMgPSBndWVzc2VkVHJhY2suYXJ0aXN0cy5tYXAoYXJ0aXN0ID0+IGFydGlzdC5uYW1lKTtcbiAgbGV0IGdhbWVBcnRpc3RzID0gZ2FtZVRyYWNrLmFydGlzdHMubWFwKGFydGlzdCA9PiBhcnRpc3QubmFtZSk7XG5cbiAgLy8gQ2hlY2sgaWYgYW55IGFydGlzdCBpbiBndWVzc2VkVHJhY2sgZXhpc3RzIGluIGdhbWVUcmFja1xuICByZXR1cm4gZ3Vlc3NlZEFydGlzdHMuc29tZShhcnRpc3QgPT4gZ2FtZUFydGlzdHMuaW5jbHVkZXMoYXJ0aXN0KSk7XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVOZXdHdWVzc1RvR2FtZVN0YXRlKGd1ZXNzLCBzdGF0dXMpIHtcblxuICBnYW1lU3RhdGUuZ3Vlc3Nlcy5wdXNoKHtndWVzcywgc3RhdHVzfSk7XG5cbiAgLy8gU2F2ZSB0byBsb2NhbCBzdG9yYWdlXG4gIHNhdmVHYW1lU3RhdGUoZ2FtZVN0YXRlKTtcblxuICBjb25zb2xlLmxvZyhcIkdhbWUgc3RhdGUgYWZ0ZXIgc2F2ZTpcIiwgZ2FtZVN0YXRlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFNraXBwZWRUdXJuVG9HYW1lU3RhdGUoKSB7XG4gIC8vIFNhdmUgYSBudWxsIGd1ZXNzIHRvIHJlcHJlc2VudCBhIHNraXBwZWQgdHVyblxuICBnYW1lU3RhdGUuZ3Vlc3Nlcy5wdXNoKG51bGwpO1xuXG4gIC8vIFNhdmUgdG8gbG9jYWwgc3RvcmFnZVxuICBzYXZlR2FtZVN0YXRlKGdhbWVTdGF0ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGFyZVJlc3VsdCgpIHtcblxuICBsZXQgZ2FtZUd1ZXNzZXNFeHBvcnQgPSBcIlwiO1xuXG4gIGdhbWVTdGF0ZS5ndWVzc2VzLmZvckVhY2goZ3Vlc3MgPT4ge1xuICAgICAgaWYoZ3Vlc3MgPT09IG51bGwpIHtcbiAgICAgICAgICBnYW1lR3Vlc3Nlc0V4cG9ydCArPSBcIuKsmyBcIjsgLy8gZ3JleSBjaXJjbGUgZm9yIHNraXBwZWQgZ3Vlc3NcbiAgICAgICAgfSBlbHNlIGlmKGd1ZXNzLnN0YXR1cyA9PT0gXCJjb3JyZWN0XCIpIHtcbiAgICAgICAgICBnYW1lR3Vlc3Nlc0V4cG9ydCArPSBcIvCfn6kgXCI7IC8vIGdyZWVuIHNxdWFyZSBmb3IgY29ycmVjdCBndWVzc1xuICAgICAgICB9IGVsc2UgaWYoZ3Vlc3Muc3RhdHVzID09PSBcInNlbWljb3JyZWN0XCIpIHtcbiAgICAgICAgICBnYW1lR3Vlc3Nlc0V4cG9ydCArPSBcIvCfn6ggXCI7IC8vIHllbGxvdyBzcXVhcmUgZm9yIGNvcnJlY3QgZ3Vlc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2FtZUd1ZXNzZXNFeHBvcnQgKz0gXCLwn5+lIFwiOyAvLyByZWQgc3F1YXJlIGZvciB3cm9uZyBndWVzc1xuICAgICAgfVxuICB9KVxuXG4gIC8vIENhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIGRheXMgcGFzc2VkIHNpbmNlIHRoZSBzdGFydCBkYXRlXG4gIGxldCBkYXlzUGFzc2VkID0gZ2V0Q3VycmVudERheSgpO1xuXG4gIC8vIENvbXBvc2Ugc2hhcmUgc3RyaW5nXG4gIGxldCBzaGFyZVN0cmluZyA9IFwiU2hlYXJkbGUgXCJcbiAgc2hhcmVTdHJpbmcgKz0gJyMnXG4gIHNoYXJlU3RyaW5nICs9IGRheXNQYXNzZWQgXG4gIHNoYXJlU3RyaW5nICs9ICcgfCAnXG4gIHNoYXJlU3RyaW5nICs9IFwiNS82XCJcbiAgc2hhcmVTdHJpbmcgKz0gXCJcXG5cIjtcbiAgc2hhcmVTdHJpbmcgKz0gZ2FtZUd1ZXNzZXNFeHBvcnQ7XG4gIHNoYXJlU3RyaW5nICs9IFwiXFxuXFxuXCJcbiAgc2hhcmVTdHJpbmcgKz0gd2luZG93LmxvY2F0aW9uIFxuXG4gIHJldHVybiBzaGFyZVN0cmluZztcbn0iLCJpbXBvcnQgU3BvdGlmeVRva2VuTWFuYWdlciBmcm9tICcuL3Nwb3RpZnlUb2tlbk1hbmFnZXIuanMnO1xuXG5jb25zdCBjbGllbnRJZCA9IFwiNzRhYzk0OWNhNTg3NDAyNDg0ZGNlZjE0MDhiNGQ3ZjNcIjtcbmNvbnN0IGNsaWVudFNlY3JldCA9IFwiMzEzYTJjMTVmYzg0NGNhNWJjMjI3NTU1NzI4NzRlZTdcIjtcblxuLy8gY29uc3QgY2xpZW50SWQgPSBwcm9jZXNzLmVudi5TUE9USUZZX0NMSUVOVF9JRDtcbi8vIGNvbnN0IGNsaWVudFNlY3JldCA9IHByb2Nlc3MuZW52LlNQT1RJRllfQ0xJRU5UX1NFQ1JFVDtcblxuY29uc3QgdG9rZW5NYW5hZ2VyID0gbmV3IFNwb3RpZnlUb2tlbk1hbmFnZXIoY2xpZW50SWQsIGNsaWVudFNlY3JldCk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2hUcmFjayhzZWFyY2hUZXJtLCBtYXJrZXQgPSAnR0InKSB7XG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBhd2FpdCB0b2tlbk1hbmFnZXIuZ2V0QWNjZXNzVG9rZW4oKTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxuICAgIH07XG5cbiAgICBhc3luYyBmdW5jdGlvbiBzZWFyY2goc2VhcmNoVGVybSkge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgICAgICAgIHE6IHNlYXJjaFRlcm0sXG4gICAgICAgICAgICB0eXBlOiAndHJhY2snLFxuICAgICAgICAgICAgbGltaXQ6IDEwLFxuICAgICAgICAgICAgbWFya2V0XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL3NlYXJjaD8ke3BhcmFtc31gLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICByZXR1cm4gZGF0YS50cmFja3MuaXRlbXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGF3YWl0IHNlYXJjaChzZWFyY2hUZXJtKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRyYWNrQnlJRCh0cmFja0lELCBtYXJrZXQgPSAnR0InKSB7XG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBhd2FpdCB0b2tlbk1hbmFnZXIuZ2V0QWNjZXNzVG9rZW4oKTtcbiAgXG4gICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxuICAgIH07XG4gIFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL3RyYWNrcy8ke3RyYWNrSUR9P21hcmtldD0ke21hcmtldH1gLCB7XG4gICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgIH0pO1xuICBcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfVxuICBcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsVHJhY2tJRHNCeVNlYXJjaFF1ZXJ5KHNlYXJjaFF1ZXJ5KSB7XG4gIGNvbnN0IHNlYXJjaFJlc3VsdHMgPSBhd2FpdCBzZWFyY2hUcmFjayhzZWFyY2hRdWVyeSk7XG4gIGNvbnN0IHRyYWNrSURzID0gc2VhcmNoUmVzdWx0cy5tYXAodHJhY2sgPT4gdHJhY2suaWQpO1xuXG4gIHJldHVybiB0cmFja0lEcztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwb3RpZnlUb2tlbk1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNsaWVudElkLCBjbGllbnRTZWNyZXQpIHtcbiAgICAgIHRoaXMuY2xpZW50SWQgPSBjbGllbnRJZDtcbiAgICAgIHRoaXMuY2xpZW50U2VjcmV0ID0gY2xpZW50U2VjcmV0O1xuICAgICAgdGhpcy5hY2Nlc3NUb2tlbiA9IG51bGw7XG4gICAgICB0aGlzLmV4cGlyYXRpb25UaW1lID0gbnVsbDtcbiAgICB9XG4gIFxuICAgIGFzeW5jIHJlcXVlc3RBY2Nlc3NUb2tlbihjbGllbnRJZCwgY2xpZW50U2VjcmV0KSB7XG4gICAgICBjb25zdCB0b2tlbkVuZHBvaW50ID0gXCJodHRwczovL2FjY291bnRzLnNwb3RpZnkuY29tL2FwaS90b2tlblwiO1xuICAgICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICAgIH07XG4gICAgICBjb25zdCBib2R5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgIGdyYW50X3R5cGU6IFwiY2xpZW50X2NyZWRlbnRpYWxzXCIsXG4gICAgICAgIGNsaWVudF9pZDogY2xpZW50SWQsXG4gICAgICAgIGNsaWVudF9zZWNyZXQ6IGNsaWVudFNlY3JldCxcbiAgICAgIH0pO1xuICBcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godG9rZW5FbmRwb2ludCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICBib2R5OiBib2R5LFxuICAgICAgfSk7XG4gIFxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhLmFjY2Vzc190b2tlbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBvYnRhaW4gYWNjZXNzIHRva2VuXCIpO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgYXN5bmMgZ2V0QWNjZXNzVG9rZW4oKSB7XG4gICAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgaWYgKCF0aGlzLmFjY2Vzc1Rva2VuIHx8IGN1cnJlbnRUaW1lID49IHRoaXMuZXhwaXJhdGlvblRpbWUpIHtcbiAgICAgICAgdGhpcy5hY2Nlc3NUb2tlbiA9IGF3YWl0IHRoaXMucmVxdWVzdEFjY2Vzc1Rva2VuKHRoaXMuY2xpZW50SWQsIHRoaXMuY2xpZW50U2VjcmV0KTtcbiAgICAgICAgY29uc3QgZXhwaXJlc0luTWlsbGlzZWNvbmRzID0gMzYwMCAqIDEwMDA7IC8vIDEgaG91ciBpbiBtaWxsaXNlY29uZHNcbiAgICAgICAgdGhpcy5leHBpcmF0aW9uVGltZSA9IGN1cnJlbnRUaW1lICsgZXhwaXJlc0luTWlsbGlzZWNvbmRzO1xuICAgICAgfVxuICBcbiAgICAgIHJldHVybiB0aGlzLmFjY2Vzc1Rva2VuO1xuICAgIH1cbiAgfSIsImNvbnN0IFNUQVJUX0RBVEUgPSBuZXcgRGF0ZSgnMjAyMy0wNS0yMicpO1xuXG5jb25zdCB0cmFja1NlbGVjdGlvbiA9IFsnN0oxdXh3bnhmUUx1NEFQaWNFNVJuaicsXG4nMmRsRWRERW11UXNyY1hhQUwzWm56aScsXG4nNjJMSkZhWWloc2RWcnJrZ1VPSkMwNScsXG4nMEhFbW5BVVQ4UEh6bklBQW1WWHFGSicsXG4nN0Z3QnRjZWNtbHBjMXNMeVNQWGVHRScsXG4nMTB6bHdSN2t2VmJEOU9Ca2VaV3IzTCcsXG4nMldmYU9pTWtDdnk3RjVmY3Ayelo4TCcsXG4nNzdOTlpRU3F6TE5xaDJBOUpoTFJrZycsXG4nMDdqNVJMSkh3c200Y1ViM0dHb1czdycsXG4nMjJzTHVKWWN2Wk9Tb0xMUllldjFzNScsXG4nM0JvdmR6ZmFYNGpiNUtGUXdvUGZBdycsXG4nMzR4NmhFSmdHQU9Rdm1sTXFsNUlnZScsXG4nM0NTcHprb0wxWGdEQloxcTlhRENVVicsXG4nMjhvOG0xbzlSR3R5U2JtUUp0QXZ5bScsXG4nMUtzSThORWVBbmE4Wklkb2pJM0ZpVCcsXG4nMm9sVm0xbEhpY3B2ZU1BbzRBVURSQicsXG4nMzlsU2VxbnlqWkplalJ1YVJFZnlMTCcsXG4nNVBKQnJ3S0g3U2RCeUd0RENCR0p3YicsXG4nNDRoT0dnMXVGZzFYSlpHWllOd1ltTScsXG4nNGFLSXM1dDlUcVA1OWJ0bENHUHJndycsXG4nMEE0UFp1ZXBUY0lRVnZBNW03UjBNMScsXG4nN2c3dHliOHpNOVVlS3Nkdm9zVzlXMycsXG4nNG85S2o3b25rbHQ2eGJZbDNqVkFycCcsXG4nMGJCVlJzQmJnbnpXOHdtZGxEN0FwcScsXG4nNWUxZW5UME5QWFBaa1I4RjNSNThiWScsXG4nNUlrZGg5MURkRXE0NGNmcElLUnNMdycsXG4nMlgyNDJEOFZoVGlrV1VUMWkxbllKQycsXG4nMlRBZkdpck5KZTBxVU9lUm1Xc1N5aycsXG4nM212S3ZpZXJGQVZHQ2RnZHg0RU40UScsXG4nNkhaNjdWSW14cXI4YU1CRUVoYmx6ZicsXG4nNmdsc01XSU1JeFE0QmVkekxxR1ZpNCcsXG4nM0xJNE1taWJUa1hINWNHcENHWmd5dycsXG4nNm5UaUloTG1RM0ZXaHZyR2FmdzJ6aicsXG4nM2Q5RENocmRjNkJPZUZzYnJaM0lzMCcsXG4nNE9lQlpsRWFMV3lKV2FZbDRVdmhUOScsXG4nNVRHWW80TXJOS3FJdkpxZ3gxMzRweScsXG4nNDNlQmdZUlRtdTVCSm5DSkRCVTVIYicsXG4nNkk0c25MclZPckpzTGRkNDNpc2MyNycsXG4nNHN6MU5nMkNnaWRmcXFpeTBwTkw2UicsXG4nNTRYNzhkaVNMb1VESTNqb0MyYmpNeicsXG4nMFFlSTc5c3AxdlM4TDNKZ3BFTzdtRCddO1xuXG4vLyAvLyBJbiB0aGlzIGZ1bmN0aW9uLCBJJ20gZ29pbmcgdG8gc2V0IHVwIGEgXCJzdGFydCBkYXRlXCIgZm9yIHRoZSBhcHAuXG4vLyAvLyBJJ2xsIGJhc2Ugd2hpY2ggdHJhY2sgaXMgdGhlIHRyYWNrIG9mIHRoZSBkYXkgZnJvbSB0aGUgZGlzdGFuY2UgaW4gdGltZSBmcm9tIHRoaXMgZGF0ZVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50RGF5KCkge1xuICAgIC8vIEdldCB0aGUgY3VycmVudCBkYXRlIGluIGxvY2FsIHRpbWVcbiAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIFxuICAgIC8vIFNldCBib3RoIGRhdGVzIHRvIG1pZG5pZ2h0IChzdGFydCBvZiB0aGUgZGF5KSBpbiBsb2NhbCB0aW1lXG4gICAgbGV0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKG5ldyBEYXRlKFNUQVJUX0RBVEUpLnNldEhvdXJzKDAsMCwwLDApKTtcbiAgICBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnREYXRlLnNldEhvdXJzKDAsMCwwLDApKTtcbiAgXG4gICAgLy8gQ29udmVydCBib3RoIGRhdGVzIHRvIG1pbGxpc2Vjb25kc1xuICAgIGxldCBzdGFydERhdGVUaW1lID0gc3RhcnREYXRlLmdldFRpbWUoKTtcbiAgICBsZXQgY3VycmVudERhdGVUaW1lID0gY3VycmVudERhdGUuZ2V0VGltZSgpO1xuICBcbiAgICAvLyBDYWxjdWxhdGUgdGhlIGRpZmZlcmVuY2UgaW4gbWlsbGlzZWNvbmRzXG4gICAgbGV0IGRpZmZlcmVuY2VJblRpbWUgPSBjdXJyZW50RGF0ZVRpbWUgLSBzdGFydERhdGVUaW1lO1xuICBcbiAgICAvLyBDb252ZXJ0IHRoZSBkaWZmZXJlbmNlIGluIG1pbGxpc2Vjb25kcyB0byBkYXlzXG4gICAgbGV0IGRpZmZlcmVuY2VJbkRheXMgPSBNYXRoLmZsb29yKGRpZmZlcmVuY2VJblRpbWUgLyAoMTAwMCAqIDM2MDAgKiAyNCkpO1xuICBcbiAgICByZXR1cm4gZGlmZmVyZW5jZUluRGF5cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvZGF5c1RyYWNrSUQoKSB7XG4gICAgcmV0dXJuIHRyYWNrU2VsZWN0aW9uW2dldEN1cnJlbnREYXkoKV07XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZXMuY3NzJ1xuXG5pbXBvcnQgeyBzZXR1cE5ld0dhbWUsIGltcG9ydEdhbWVTdGF0ZSwgZ2V0Q3VycmVudFRyYWNrLCBhbGxvd2VkRHVyYXRpb25zIH0gZnJvbSAnLi9zaGVhcmRsZSc7XG5pbXBvcnQgeyBsb2FkR2FtZVN0YXRlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuXG5pbXBvcnQgeyBpbml0VUkgfSBmcm9tICcuL1VJJztcblxuaW1wb3J0IHsgZ2FtZUVuZCB9IGZyb20gJy4vcmVzdWx0c1NjcmVlbic7IC8vIEF1dG9sb2FkIHdpbiBzY3JlZW4gb24gY29tcGxldGVkIGRheVxuXG5pbXBvcnQgeyBnZXRDdXJyZW50RGF5LCBnZXRUb2RheXNUcmFja0lEIH0gZnJvbSAnLi90cmFja1NlbGVjdGlvbic7XG5cbmNvbnNvbGUubG9nKFwiQ3VycmVudCBkYXkgaXNcIiwgZ2V0Q3VycmVudERheSgpLCBcImRheShzKSBwYXN0IHRoZSBzdGFydCBkYXRlXCIpO1xuXG5jb25zdCBnYW1lTG9hZGVkID0gbG9hZEdhbWVTdGF0ZSgpO1xuXG5pZiAoZ2FtZUxvYWRlZCkge1xuXG4gICAgY29uc3QgdG9kYXlzVHJhY2tJRCA9IGdldFRvZGF5c1RyYWNrSUQoKTtcblxuICAgIGlmIChnYW1lTG9hZGVkLnRyYWNrSUQgIT09IHRvZGF5c1RyYWNrSUQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTdGFydGluZyBuZXcgZ2FtZSBkdWUgdG8gZGF5IGNoYW5nZVwiKTtcbiAgICAgICAgc2V0dXBOZXdHYW1lKCk7XG4gICAgICAgIGluaXRVSSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2FtZSBzdWNjZXNzZnVsbHkgbG9hZGVkXCIpO1xuICAgICAgICBpbXBvcnRHYW1lU3RhdGUoZ2FtZUxvYWRlZCk7XG4gICAgICAgIGluaXRVSShnYW1lTG9hZGVkKTtcbiAgICB9XG59IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKFwiU3RhcnRpbmcgbmV3IGdhbWVcIik7XG4gICAgc2V0dXBOZXdHYW1lKCk7XG4gICAgaW5pdFVJKCk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9