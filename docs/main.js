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
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  height: 90%;\n}\n\nbody {\n  background-color: #121212;\n  color: #ffffff;\n  margin: 0;\n  font-family: sans-serif;\n  padding-top: 60px;\n  max-width: 100vw;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  height: 50px;\n  padding: 0 15px;\n  border-bottom: 1px solid #ffffff;\n  background-color: #121212;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    min-height: 100%;\n    justify-content: space-between;\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 10px;\n    overflow: none;\n}\n\n.title {\n}\n\n.info,\n.how-to-play {\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.play-container {\n  margin-bottom: 20px;\n}\n\n.seek-bar-container {\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 100vw;\n}\n\n.seek-bar {\n  width: 100%;\n  height: 10px;\n  position: relative;\n  border-top: 1px solid #ffffff;\n  border-bottom: 1px solid #ffffff;\n  background-color: transparent;\n  margin: 0;\n}\n\n.seek-bar-background {\n  width: 0;\n  height: 100%;\n  position: absolute;\n  background-color: #282828;\n}\n\n.seek-bar-markers {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.seek-bar-progress {\n  width: 0;\n  height: 100%;\n  position: absolute;\n  background-color: #1DB954;\n}\n\n.progress {\n  height: 100%;\n  background-color: #1DB954;\n  width: 0;\n}\n\n.section {\n  height: 100%;\n  position: absolute;\n  background-color: #282828;\n}\n\n.play-button-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 10px 0;\n  position: relative;\n}\n\n.play-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  background-color: #00000000;\n  border: 2px solid white;\n  color: #ffffff;\n  border-radius: 50%;\n  cursor: pointer;\n  outline: none;\n  font-size: 20px;\n}\n\n.elapsed-time,\n.total-time {\n  font-size: 14px;\n  position: absolute;\n}\n\n.elapsed-time {\n  left: 0;\n}\n\n.total-time {\n  right: 0;\n}\n\n.search-container {\n  margin-bottom: 20px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.spotify-search {\n  width: 90%;\n  padding: 10px;\n  background-color: #333;\n  border: solid 1px black;\n  color: #ffffff;\n  border-radius: 5px;\n  outline: none;\n}\n\n.buttons-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n}\n\n.submit {\n  background-color: #1DB954;\n  color: #000000;\n  border: none;\n}\n\n.skip {\n  background-color: #00000000;\n  color: #ffffff;\n  border: 1px solid white;\n}\n\n.skip,\n.submit {\n  padding: 10px 20px;\n  border-radius: 20px;\n  cursor: pointer;\n  outline: none;\n  letter-spacing: 0.1em;\n  line-height: 1rem;\n}\n\nbutton[disabled] {\n  background-color: gray;\n  color: white;\n  cursor: not-allowed;\n}\n\n.search-container {\n  position: relative;\n  width: 100%;\n}\n\n.results-container {\n  position: absolute;\n  background-color: #333;\n  color: #ffffff;\n  width: 95%;\n  max-height: 200px;\n  overflow-y: auto;\n  border: 1px solid #0000002b;\n  display: none;\n  top: calc(100% + 5px);\n}\n\n.result-item {\n  padding: 8px 12px;\n  cursor: pointer;\n  color: #ffffff;\n}\n\n.result-item:hover {\n  background-color: #282828;\n}\n\n.guess {\n  height: 40px;\n  border: 1px solid #ffffff62;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center; \n  padding-left: 10px;\n  font-size: 16px; \n  font-weight: 300; \n  color: #ffffffaa; \n}\n\n.guess-text {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex-grow: 1;\n}\n\n.red-x-icon {\n  color: rgba(255, 0, 0, 0.75);\n  font-weight: bold;\n  margin-right: 5px;\n  padding-right: 12px;\n}\n\n.green-check-icon {\n  color: green;\n  font-weight: bold;\n  margin-right: 5px;\n  padding-right: 8px; \n} \n\n\n/* Results screen */\n\n.modal {\n  display: none;  /* Hidden by default */\n  position: fixed;  /* Stay in place */\n  z-index: 1;  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;  /* Full width */\n  height: 100%;  /* Full height */\n  overflow: auto;  /* Enable scroll if needed */\n  background-color: rgb(0,0,0);  /* Fallback color */\n  background-color: rgba(0,0,0,0.4);  /* Black with opacity */\n}\n\n.modal-content {\n  background-color: #121212;\n  margin: 15% auto;  /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;  /* Could be more or less, depending on screen size */\n  color: #ffffff;\n  text-align: center;\n}\n\n.album-art {\n  width: 200px;\n  height: 200px;\n}\n\n.song-title, .song-artist, .song-album {\n  font-size: 1.2em;\n}\n\n.share-results-btn, .play-again-btn {\n  margin-top: 20px;\n  padding: 10px 20px;\n  border-radius: 20px;\n  cursor: pointer;\n  outline: none;\n  letter-spacing: 0.1em;\n  line-height: 1rem;\n  font-size: 1em;\n}\n\n.share-results-btn {\n  background-color: #1DB954;\n  color: #000000;\n  border: none;\n}\n\n.play-again-btn {\n  background-color: #00000000;\n  color: #ffffff;\n  border: 1px solid white;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":["html,\nbody {\n  height: 90%;\n}\n\nbody {\n  background-color: #121212;\n  color: #ffffff;\n  margin: 0;\n  font-family: sans-serif;\n  padding-top: 60px;\n  max-width: 100vw;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  height: 50px;\n  padding: 0 15px;\n  border-bottom: 1px solid #ffffff;\n  background-color: #121212;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    min-height: 100%;\n    justify-content: space-between;\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 10px;\n    overflow: none;\n}\n\n.title {\n}\n\n.info,\n.how-to-play {\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.play-container {\n  margin-bottom: 20px;\n}\n\n.seek-bar-container {\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 100vw;\n}\n\n.seek-bar {\n  width: 100%;\n  height: 10px;\n  position: relative;\n  border-top: 1px solid #ffffff;\n  border-bottom: 1px solid #ffffff;\n  background-color: transparent;\n  margin: 0;\n}\n\n.seek-bar-background {\n  width: 0;\n  height: 100%;\n  position: absolute;\n  background-color: #282828;\n}\n\n.seek-bar-markers {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.seek-bar-progress {\n  width: 0;\n  height: 100%;\n  position: absolute;\n  background-color: #1DB954;\n}\n\n.progress {\n  height: 100%;\n  background-color: #1DB954;\n  width: 0;\n}\n\n.section {\n  height: 100%;\n  position: absolute;\n  background-color: #282828;\n}\n\n.play-button-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 10px 0;\n  position: relative;\n}\n\n.play-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  background-color: #00000000;\n  border: 2px solid white;\n  color: #ffffff;\n  border-radius: 50%;\n  cursor: pointer;\n  outline: none;\n  font-size: 20px;\n}\n\n.elapsed-time,\n.total-time {\n  font-size: 14px;\n  position: absolute;\n}\n\n.elapsed-time {\n  left: 0;\n}\n\n.total-time {\n  right: 0;\n}\n\n.search-container {\n  margin-bottom: 20px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.spotify-search {\n  width: 90%;\n  padding: 10px;\n  background-color: #333;\n  border: solid 1px black;\n  color: #ffffff;\n  border-radius: 5px;\n  outline: none;\n}\n\n.buttons-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n}\n\n.submit {\n  background-color: #1DB954;\n  color: #000000;\n  border: none;\n}\n\n.skip {\n  background-color: #00000000;\n  color: #ffffff;\n  border: 1px solid white;\n}\n\n.skip,\n.submit {\n  padding: 10px 20px;\n  border-radius: 20px;\n  cursor: pointer;\n  outline: none;\n  letter-spacing: 0.1em;\n  line-height: 1rem;\n}\n\nbutton[disabled] {\n  background-color: gray;\n  color: white;\n  cursor: not-allowed;\n}\n\n.search-container {\n  position: relative;\n  width: 100%;\n}\n\n.results-container {\n  position: absolute;\n  background-color: #333;\n  color: #ffffff;\n  width: 95%;\n  max-height: 200px;\n  overflow-y: auto;\n  border: 1px solid #0000002b;\n  display: none;\n  top: calc(100% + 5px);\n}\n\n.result-item {\n  padding: 8px 12px;\n  cursor: pointer;\n  color: #ffffff;\n}\n\n.result-item:hover {\n  background-color: #282828;\n}\n\n.guess {\n  height: 40px;\n  border: 1px solid #ffffff62;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center; \n  padding-left: 10px;\n  font-size: 16px; \n  font-weight: 300; \n  color: #ffffffaa; \n}\n\n.guess-text {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex-grow: 1;\n}\n\n.red-x-icon {\n  color: rgba(255, 0, 0, 0.75);\n  font-weight: bold;\n  margin-right: 5px;\n  padding-right: 12px;\n}\n\n.green-check-icon {\n  color: green;\n  font-weight: bold;\n  margin-right: 5px;\n  padding-right: 8px; \n} \n\n\n/* Results screen */\n\n.modal {\n  display: none;  /* Hidden by default */\n  position: fixed;  /* Stay in place */\n  z-index: 1;  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;  /* Full width */\n  height: 100%;  /* Full height */\n  overflow: auto;  /* Enable scroll if needed */\n  background-color: rgb(0,0,0);  /* Fallback color */\n  background-color: rgba(0,0,0,0.4);  /* Black with opacity */\n}\n\n.modal-content {\n  background-color: #121212;\n  margin: 15% auto;  /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;  /* Could be more or less, depending on screen size */\n  color: #ffffff;\n  text-align: center;\n}\n\n.album-art {\n  width: 200px;\n  height: 200px;\n}\n\n.song-title, .song-artist, .song-album {\n  font-size: 1.2em;\n}\n\n.share-results-btn, .play-again-btn {\n  margin-top: 20px;\n  padding: 10px 20px;\n  border-radius: 20px;\n  cursor: pointer;\n  outline: none;\n  letter-spacing: 0.1em;\n  line-height: 1rem;\n  font-size: 1em;\n}\n\n.share-results-btn {\n  background-color: #1DB954;\n  color: #000000;\n  border: none;\n}\n\n.play-again-btn {\n  background-color: #00000000;\n  color: #ffffff;\n  border: 1px solid white;\n}\n"],"sourceRoot":""}]);
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

// Submit button
const submitButton = document.querySelector('.submit');

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
        } else {
          addIncorrectGuessToBoard(searchInputValue, currentTurnAtTimeOfSubmit);
        }

      })
    } else {
      addCorrectGuessToBoard(searchInputValue, currentTurnAtTimeOfSubmit);
    }

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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixnQ0FBZ0MsbUJBQW1CLDRCQUE0QixHQUFHLFNBQVMseUZBQXlGLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxNQUFNLE1BQU0sVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEs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QTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCOztBQUVrRTtBQUMvQzs7QUFFRjs7QUFFN0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7OztBQUdBLHVEQUFZOztBQUVaO0FBQ0EsMkNBQU07QUFDTixrREFBYSxDQUFDLHVEQUFnQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vc3JjL1VJLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vc3JjL2F1ZGlvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9zcmMvc2hlYXJkbGUuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9zcmMvc3BvdGlmeS5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL3NyYy9zcG90aWZ5VG9rZW5NYW5hZ2VyLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vc3JjL3RyYWNrU2VsZWN0aW9uLmpzIiwid2VicGFjazovL3NoZWFyZGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NoZWFyZGxlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NoZWFyZGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zaGVhcmRsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NoZWFyZGxlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3NoZWFyZGxlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogOTAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZy10b3A6IDYwcHg7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xcbiAgICBvdmVyZmxvdzogbm9uZTtcXG59XFxuXFxuLnRpdGxlIHtcXG59XFxuXFxuLmluZm8sXFxuLmhvdy10by1wbGF5IHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBsYXktY29udGFpbmVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5zZWVrLWJhci1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4uc2Vlay1iYXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZmZmZjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5zZWVrLWJhci1iYWNrZ3JvdW5kIHtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcXG59XFxuXFxuLnNlZWstYmFyLW1hcmtlcnMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5zZWVrLWJhci1wcm9ncmVzcyB7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxREI5NTQ7XFxufVxcblxcbi5wcm9ncmVzcyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURCOTU0O1xcbiAgd2lkdGg6IDA7XFxufVxcblxcbi5zZWN0aW9uIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XFxufVxcblxcbi5wbGF5LWJ1dHRvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucGxheS1idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5lbGFwc2VkLXRpbWUsXFxuLnRvdGFsLXRpbWUge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZWxhcHNlZC10aW1lIHtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi50b3RhbC10aW1lIHtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zcG90aWZ5LXNlYXJjaCB7XFxuICB3aWR0aDogOTAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmJ1dHRvbnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG4uc3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxREI5NTQ7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnNraXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnNraXAsXFxuLnN1Ym1pdCB7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbn1cXG5cXG5idXR0b25bZGlzYWJsZWRdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnJlc3VsdHMtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHdpZHRoOiA5NSU7XFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMmI7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdG9wOiBjYWxjKDEwMCUgKyA1cHgpO1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0ge1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLnJlc3VsdC1pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XFxufVxcblxcbi5ndWVzcyB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmNjI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4OyBcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7IFxcbiAgY29sb3I6ICNmZmZmZmZhYTsgXFxufVxcblxcbi5ndWVzcy10ZXh0IHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5yZWQteC1pY29uIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC43NSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMTJweDtcXG59XFxuXFxuLmdyZWVuLWNoZWNrLWljb24ge1xcbiAgY29sb3I6IGdyZWVuO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDhweDsgXFxufSBcXG5cXG5cXG4vKiBSZXN1bHRzIHNjcmVlbiAqL1xcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lOyAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDsgIC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gIHotaW5kZXg6IDE7ICAvKiBTaXQgb24gdG9wICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7ICAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7ICAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87ICAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgIC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7ICAvKiBCbGFjayB3aXRoIG9wYWNpdHkgKi9cXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG4gIG1hcmdpbjogMTUlIGF1dG87ICAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICB3aWR0aDogODAlOyAgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYWxidW0tYXJ0IHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxufVxcblxcbi5zb25nLXRpdGxlLCAuc29uZy1hcnRpc3QsIC5zb25nLWFsYnVtIHtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcbi5zaGFyZS1yZXN1bHRzLWJ0biwgLnBsYXktYWdhaW4tYnRuIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi5zaGFyZS1yZXN1bHRzLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURCOTU0O1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wbGF5LWFnYWluLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDA7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0FBQ0E7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFD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QUMvQixjQUFjLEdBQUcsNEJBQTRCO0VBQzdDLDRCQUE0QixHQUFHLG1CQUFtQjtFQUNsRCxpQ0FBaUMsR0FBRyx1QkFBdUI7QUFDN0Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCLEdBQUcsa0NBQWtDO0VBQ3JELGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVSxHQUFHLG9EQUFvRDtFQUNqRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiA5MCU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nLXRvcDogNjBweDtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxufVxcblxcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxuICAgIG92ZXJmbG93OiBub25lO1xcbn1cXG5cXG4udGl0bGUge1xcbn1cXG5cXG4uaW5mbyxcXG4uaG93LXRvLXBsYXkge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGxheS1jb250YWluZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnNlZWstYmFyLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5zZWVrLWJhciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmZmZmO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnNlZWstYmFyLWJhY2tncm91bmQge1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xcbn1cXG5cXG4uc2Vlay1iYXItbWFya2VycyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnNlZWstYmFyLXByb2dyZXNzIHtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFEQjk1NDtcXG59XFxuXFxuLnByb2dyZXNzIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxREI5NTQ7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuLnNlY3Rpb24ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcXG59XFxuXFxuLnBsYXktYnV0dG9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wbGF5LWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDA7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmVsYXBzZWQtdGltZSxcXG4udG90YWwtdGltZSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5lbGFwc2VkLXRpbWUge1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLnRvdGFsLXRpbWUge1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNwb3RpZnktc2VhcmNoIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYnV0dG9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxufVxcblxcbi5zdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFEQjk1NDtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uc2tpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDA7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uc2tpcCxcXG4uc3VibWl0IHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxufVxcblxcbmJ1dHRvbltkaXNhYmxlZF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucmVzdWx0cy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgd2lkdGg6IDk1JTtcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAyYjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB0b3A6IGNhbGMoMTAwJSArIDVweCk7XFxufVxcblxcbi5yZXN1bHQtaXRlbSB7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcXG59XFxuXFxuLmd1ZXNzIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY2MjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBmb250LXNpemU6IDE2cHg7IFxcbiAgZm9udC13ZWlnaHQ6IDMwMDsgXFxuICBjb2xvcjogI2ZmZmZmZmFhOyBcXG59XFxuXFxuLmd1ZXNzLXRleHQge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLnJlZC14LWljb24ge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjc1KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xcbn1cXG5cXG4uZ3JlZW4tY2hlY2staWNvbiB7XFxuICBjb2xvcjogZ3JlZW47XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogOHB4OyBcXG59IFxcblxcblxcbi8qIFJlc3VsdHMgc2NyZWVuICovXFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7ICAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgcG9zaXRpb246IGZpeGVkOyAgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgIC8qIFNpdCBvbiB0b3AgKi9cXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTsgIC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwJTsgIC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogYXV0bzsgIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgIC8qIEJsYWNrIHdpdGggb3BhY2l0eSAqL1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbiAgbWFyZ2luOiAxNSUgYXV0bzsgIC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIHdpZHRoOiA4MCU7ICAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hbGJ1bS1hcnQge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuLnNvbmctdGl0bGUsIC5zb25nLWFydGlzdCwgLnNvbmctYWxidW0ge1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG59XFxuXFxuLnNoYXJlLXJlc3VsdHMtYnRuLCAucGxheS1hZ2Fpbi1idG4ge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuLnNoYXJlLXJlc3VsdHMtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxREI5NTQ7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnBsYXktYWdhaW4tYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwMDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGlzQXVkaW9QYXVzZWQsIHBsYXlBdWRpbywgcGF1c2VBdWRpbywgZ2V0QXVkaW9DdXJyZW50VGltZSB9IGZyb20gJy4vYXVkaW9NYW5hZ2VyJztcbmltcG9ydCB7IGFsbG93ZWREdXJhdGlvbnMsIGdldEN1cnJlbnRUdXJuLCBnZXRDdXJyZW50VHJhY2tJRCwgY2hlY2tHdWVzcywgc2F2ZU5ld0d1ZXNzVG9HYW1lU3RhdGUsIGFkZFNraXBwZWRUdXJuVG9HYW1lU3RhdGUsIGNoZWNrRm9yU3BvdGlmeUR1cGVzIH0gZnJvbSAnLi9zaGVhcmRsZSc7XG5pbXBvcnQgeyBzZWFyY2hUcmFjayB9IGZyb20gJy4vc3BvdGlmeSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0VUkoKSB7XG4gIHVwZGF0ZVNlZWtCYXJCYWNrZ3JvdW5kKGdldEN1cnJlbnRUdXJuKCkpO1xufVxuXG4vLyBHdWVzcyBib2FyZFxuY29uc3QgZ3Vlc3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3Vlc3MtY29udGFpbmVyJyk7XG5cbmZ1bmN0aW9uIGFkZEluY29ycmVjdEd1ZXNzVG9Cb2FyZChndWVzcywgdHVybikge1xuXG4gIGNvbnNvbGUubG9nKFwiQ3VycmVudCB0dXJuIGFjY29yZGluZyB0byBVSTpcIiwgdHVybik7XG5cbiAgICBjb25zdCBndWVzc0RpdiA9IGd1ZXNzQ29udGFpbmVyLmNoaWxkcmVuW3R1cm4gLSAxXTtcblxuICAgIC8vIENyZWF0ZSB0aGUgcmVkICd4JyBpY29uXG4gICAgY29uc3QgcmVkWEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcmVkWEljb24udGV4dENvbnRlbnQgPSAneCc7XG4gICAgcmVkWEljb24uY2xhc3NMaXN0LmFkZCgncmVkLXgtaWNvbicpO1xuICAgIGd1ZXNzRGl2LmFwcGVuZENoaWxkKHJlZFhJY29uKTtcbiAgXG4gICAgLy8gQWRkIHRoZSB0cmFjayBpbmZvIHRleHQgdG8gdGhlIGd1ZXNzIGRpdlxuICAgIGNvbnN0IGd1ZXNzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBndWVzc1RleHQudGV4dENvbnRlbnQgPSBndWVzcztcbiAgICBndWVzc1RleHQuY2xhc3NMaXN0LmFkZCgnZ3Vlc3MtdGV4dCcpO1xuICAgIGd1ZXNzRGl2LmFwcGVuZENoaWxkKGd1ZXNzVGV4dCk7XG59XG5cbmZ1bmN0aW9uIGFkZENvcnJlY3RHdWVzc1RvQm9hcmQoZ3Vlc3MsIHR1cm4pIHtcblxuICBjb25zb2xlLmxvZyhcIkN1cnJlbnQgdHVybiBhY2NvcmRpbmcgdG8gVUk6XCIsIHR1cm4pO1xuXG5cbiAgICBjb25zdCBndWVzc0RpdiA9IGd1ZXNzQ29udGFpbmVyLmNoaWxkcmVuW3R1cm4gLSAxXTtcblxuICAgIC8vIENyZWF0ZSB0aGUgZ3JlZW4gY2hlY2ttYXJrIGljb25cbiAgICBjb25zdCBncmVlbkNoZWNrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBncmVlbkNoZWNrSWNvbi50ZXh0Q29udGVudCA9ICfinJMnO1xuICAgIGdyZWVuQ2hlY2tJY29uLmNsYXNzTGlzdC5hZGQoJ2dyZWVuLWNoZWNrLWljb24nKTtcbiAgICBndWVzc0Rpdi5hcHBlbmRDaGlsZChncmVlbkNoZWNrSWNvbik7XG4gIFxuICAgIC8vIEFkZCB0aGUgdHJhY2sgaW5mbyB0ZXh0IHRvIHRoZSBndWVzcyBkaXZcbiAgICBjb25zdCBndWVzc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZ3Vlc3NUZXh0LnRleHRDb250ZW50ID0gZ3Vlc3M7XG4gICAgZ3Vlc3NUZXh0LmNsYXNzTGlzdC5hZGQoJ2d1ZXNzLXRleHQnKTtcbiAgICBndWVzc0Rpdi5hcHBlbmRDaGlsZChndWVzc1RleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkU2tpcHBlZFR1cm5Ub0JvYXJkKHR1cm4pIHtcbiAgY29uc3QgZ3Vlc3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3Vlc3MtY29udGFpbmVyJyk7XG4gIGNvbnN0IGd1ZXNzRGl2ID0gZ3Vlc3NDb250YWluZXIuY2hpbGRyZW5bdHVybiAtIDFdO1xuICBcbiAgLy8gQ3JlYXRlIHRoZSByZWQgJ3gnIGljb25cbiAgY29uc3QgcmVkWEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHJlZFhJY29uLnRleHRDb250ZW50ID0gJ3gnO1xuICByZWRYSWNvbi5jbGFzc0xpc3QuYWRkKCdyZWQteC1pY29uJyk7XG5cbiAgLy8gQWRkIHRoZSByZWQgJ3gnIGljb24gdG8gdGhlIGd1ZXNzIGRpdlxuICBndWVzc0Rpdi5hcHBlbmRDaGlsZChyZWRYSWNvbik7XG5cbiAgLy8gQWRkIHRoZSBcIlNraXBwZWQgdHVyblwiIHRleHQgdG8gdGhlIGd1ZXNzIGRpdlxuICBjb25zdCBza2lwcGVkVHVyblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHNraXBwZWRUdXJuVGV4dC50ZXh0Q29udGVudCA9IFwiU2tpcHBlZFwiO1xuICBndWVzc0Rpdi5hcHBlbmRDaGlsZChza2lwcGVkVHVyblRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJTZWFyY2hCb3goKSB7XG4gIGNvbnN0IHNlYXJjaEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcG90aWZ5LXNlYXJjaCcpO1xuICBzZWFyY2hCb3gudmFsdWUgPSAnJztcbn1cblxuXG4vLyBQbGF5L1BhdXNlIGJ1dHRvblxuY29uc3QgcGxheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheS1idXR0b25cIik7XG5wbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQbGF5QnV0dG9uQ2xpY2spO1xuXG5mdW5jdGlvbiBoYW5kbGVQbGF5QnV0dG9uQ2xpY2soKSB7XG4gICAgaWYgKGlzQXVkaW9QYXVzZWQoKSkge1xuICAgICAgICBwbGF5QXVkaW8oKTtcbiAgICAgICAgcGxheUJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYSBmYS1wYXVzZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhdXNlQXVkaW8oKTtcbiAgICAgICAgcGxheUJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYSBmYS1wbGF5XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPic7XG4gICAgfVxufVxuXG5cbi8vIFNraXAgYnV0dG9uXG5jb25zdCBza2lwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5za2lwXCIpO1xuc2tpcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlU2tpcEJ1dHRvbkNsaWNrKTtcblxuZnVuY3Rpb24gaGFuZGxlU2tpcEJ1dHRvbkNsaWNrKCkge1xuXG4gICAgaWYgKGdldEN1cnJlbnRUdXJuKCkgPCBhbGxvd2VkRHVyYXRpb25zLmxlbmd0aCkge1xuICAgICAgICBhZGRTa2lwcGVkVHVyblRvQm9hcmQoZ2V0Q3VycmVudFR1cm4oKSk7XG4gICAgICAgIGFkZFNraXBwZWRUdXJuVG9HYW1lU3RhdGUoKTtcbiAgICAgIH1cblxuICAgIHVwZGF0ZVNlZWtCYXJCYWNrZ3JvdW5kKGdldEN1cnJlbnRUdXJuKCkpO1xuICAgIHVwZGF0ZVNraXBCdXR0b25UZXh0KCk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVBsYXlCdXR0b25JY29uVG9QbGF5KCkge1xuICBwbGF5QnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhIGZhLXBsYXlcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+Jztcbn1cblxuZnVuY3Rpb24gdXBkYXRlU2tpcEJ1dHRvblRleHQoKSB7XG4gICAgaWYgKGdldEN1cnJlbnRUdXJuKCkgPCBhbGxvd2VkRHVyYXRpb25zLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBza2lwU2Vjb25kcyA9IGFsbG93ZWREdXJhdGlvbnNbZ2V0Q3VycmVudFR1cm4oKV0gLSBhbGxvd2VkRHVyYXRpb25zW2dldEN1cnJlbnRUdXJuKCkgLSAxXTtcbiAgICAgICAgc2tpcEJ1dHRvbi50ZXh0Q29udGVudCA9IGBTS0lQICgrJHtza2lwU2Vjb25kc31zKWA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2tpcEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU0tJUFwiO1xuICAgIH1cbn1cblxuLy8gU3VibWl0IGJ1dHRvblxuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpO1xuXG5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cblxuICAgIGNvbnN0IGdhbWVUcmFja0lEID0gZ2V0Q3VycmVudFRyYWNrSUQoKTtcbiAgICBjb25zdCBndWVzc0lzQ29ycmVjdCA9IGNoZWNrR3Vlc3Moc2VsZWN0ZWRUcmFja0lELCBnYW1lVHJhY2tJRCk7XG4gICAgY29uc3Qgc2VhcmNoSW5wdXRWYWx1ZSA9IHNlYXJjaElucHV0LnZhbHVlO1xuICAgIGNvbnN0IGN1cnJlbnRUdXJuQXRUaW1lT2ZTdWJtaXQgPSBnZXRDdXJyZW50VHVybigpO1xuXG4gICAgY29uc29sZS5sb2coXCJHdWVzcyBpczpcIiwgZ3Vlc3NJc0NvcnJlY3QpO1xuICAgIFxuXG4gICAgaWYgKCFndWVzc0lzQ29ycmVjdCkge1xuICAgICAgY29uc29sZS5sb2coXCJDaGVja2luZyBmb3IgU3BvdGlmeSBkdXBsaWNhdGVzLi4uXCIpO1xuICAgICAgY2hlY2tGb3JTcG90aWZ5RHVwZXMoc2VhcmNoSW5wdXQudmFsdWUpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkluY2x1ZGVkIGluIGR1cGVzOlwiLCByZXNwb25zZSk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coc2VhcmNoSW5wdXRWYWx1ZSk7XG4gICAgICAgICAgYWRkQ29ycmVjdEd1ZXNzVG9Cb2FyZChzZWFyY2hJbnB1dFZhbHVlLCBjdXJyZW50VHVybkF0VGltZU9mU3VibWl0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGRJbmNvcnJlY3RHdWVzc1RvQm9hcmQoc2VhcmNoSW5wdXRWYWx1ZSwgY3VycmVudFR1cm5BdFRpbWVPZlN1Ym1pdCk7XG4gICAgICAgIH1cblxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQ29ycmVjdEd1ZXNzVG9Cb2FyZChzZWFyY2hJbnB1dFZhbHVlLCBjdXJyZW50VHVybkF0VGltZU9mU3VibWl0KTtcbiAgICB9XG5cbiAgICBzYXZlTmV3R3Vlc3NUb0dhbWVTdGF0ZShzZWFyY2hJbnB1dFZhbHVlKTtcbiAgICBcbiAgICBkaXNhYmxlU3VibWl0QnV0dG9uKCk7XG4gICAgY2xlYXJTZWFyY2hCb3goKTtcbiAgfSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVTdWJtaXRCdXR0b24oKSB7XG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKTtcbiAgc3VibWl0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzYWJsZVN1Ym1pdEJ1dHRvbigpIHtcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpO1xuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG59XG5cblxuLy8gUHJvZ3Jlc3MgYmFyXG5jb25zdCBwcm9ncmVzc0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2Vlay1iYXItcHJvZ3Jlc3NcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQcm9ncmVzc0JhcigpIHtcbiAgY29uc3QgcHJvZ3Jlc3NQZXJjZW50YWdlID0gKChnZXRBdWRpb0N1cnJlbnRUaW1lKCkgLyAxNikgKiAxMDAgKyAxKTtcbiAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSBgJHtwcm9ncmVzc1BlcmNlbnRhZ2V9JWA7XG5cbiAgaWYgKCFpc0F1ZGlvUGF1c2VkKCkpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVQcm9ncmVzc0Jhcik7XG4gIH0gZWxzZSB7XG4gICAgY2hhbmdlUGxheUJ1dHRvbkljb25Ub1BsYXkoKTsgXG4gIH1cbn1cblxuY29uc3Qgc2Vla0JhckJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlZWstYmFyLWJhY2tncm91bmRcIik7XG5cbmZ1bmN0aW9uIHVwZGF0ZVNlZWtCYXJCYWNrZ3JvdW5kKHR1cm4pIHtcbiAgICBjb25zdCBwbGF5RHVyYXRpb24gPSBhbGxvd2VkRHVyYXRpb25zW3R1cm4gLSAxXTtcbiAgICBjb25zdCBwZXJjZW50YWdlID0gKHBsYXlEdXJhdGlvbiAvIDE2KSAqIDEwMDtcbiAgICBzZWVrQmFyQmFja2dyb3VuZC5zdHlsZS53aWR0aCA9IGAke3BlcmNlbnRhZ2V9JWA7XG59XG5cblxuLy8gQWxsb3dlZCBsZW5ndGggdG8gcGxheSBtYXJrZXJzXG5mdW5jdGlvbiBjcmVhdGVNYXJrZXIoZHVyYXRpb24pIHtcbiAgICBjb25zdCBtYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSAoZHVyYXRpb24gLyAxNikgKiAxMDA7XG5cbiAgICBtYXJrZXIuc3R5bGUud2lkdGggPSBcIjFweFwiO1xuICAgIG1hcmtlci5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgICBtYXJrZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgbWFya2VyLnN0eWxlLmxlZnQgPSBgJHtwZXJjZW50YWdlfSVgO1xuICAgIG1hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZmZmZcIjtcblxuICAgIHJldHVybiBtYXJrZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNYXJrZXJzKGFsbG93ZWREdXJhdGlvbnMpIHtcbiAgICBjb25zdCBtYXJrZXJzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWVrLWJhci1tYXJrZXJzXCIpO1xuICAgIGFsbG93ZWREdXJhdGlvbnMuZm9yRWFjaChkdXJhdGlvbiA9PiB7XG4gICAgICAgIGNvbnN0IG1hcmtlciA9IGNyZWF0ZU1hcmtlcihkdXJhdGlvbiArIDAuMSk7XG4gICAgICAgIG1hcmtlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQobWFya2VyKTtcbiAgICB9KTtcbn1cblxuLy8gU2VhcmNoIGJhclxuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BvdGlmeS1zZWFyY2gnKTtcbmxldCBzZWxlY3RlZFRyYWNrSUQ7XG5cbi8vIERlYm91bmNlIGZ1bmN0aW9uIHRvIHN0b3AgdGhlIGF1dG8tc2VhcmNoIGZpcmluZyB0b28gb2Z0ZW5cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICAgIGxldCB0aW1lb3V0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgY29uc3QgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuXG4gICAgICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH07XG59XG5cbi8vIE5vIGRlYm91bmNlIG5lZWRlZCBmb3IgZGlzYWJsaW5nIHRoZSBidXR0b25cbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIGRpc2FibGVTdWJtaXRCdXR0b24oKTtcbn0pXG5cbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZGVib3VuY2UoKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgcXVlcnkgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzLWNvbnRhaW5lcicpO1xuICAgIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgcmVzdWx0c0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBcbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIHNlYXJjaFRyYWNrKHF1ZXJ5KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goKHRyYWNrLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcmVzdWx0SXRlbS5jbGFzc0xpc3QuYWRkKCdyZXN1bHQtaXRlbScpO1xuICAgICAgICAgICAgcmVzdWx0SXRlbS50ZXh0Q29udGVudCA9IGAke3RyYWNrLmFydGlzdHNbMF0ubmFtZX0gLSAke3RyYWNrLm5hbWV9YDtcbiAgICAgICAgICAgIHJlc3VsdEl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLXRyYWNrLWlkJywgdHJhY2suaWQpO1xuICBcbiAgICAgICAgICAgIHJlc3VsdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgc2VsZWN0ZWRUcmFja0lEID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10cmFjay1pZCcpOztcbiAgXG4gICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgc2VhcmNoIGlucHV0IHdpdGggdGhlIHNlbGVjdGVkIHJlc3VsdCBhbmQgaGlkZSB0aGUgcmVzdWx0cyBjb250YWluZXJcbiAgICAgICAgICAgICAgc2VhcmNoSW5wdXQudmFsdWUgPSBldmVudC50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgIHJlc3VsdHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgZW5hYmxlU3VibWl0QnV0dG9uKCk7XG4gICAgICAgICAgICB9KTtcbiAgXG4gICAgICAgICAgICByZXN1bHRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3VsdEl0ZW0pO1xuICAgICAgICAgIH0pO1xuICBcbiAgICAgICAgICByZXN1bHRzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIDUwMCkpO1xuXG4vLyBTZWFyY2ggcmVzdWx0c1xuY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzLWNvbnRhaW5lcicpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgLy8gQ2hlY2sgaWYgdGhlIGNsaWNrIHRhcmdldCBpcyBvdXRzaWRlIG9mIHRoZSAucmVzdWx0cy1jb250YWluZXJcbiAgaWYgKCFldmVudC50YXJnZXQuY2xvc2VzdCgnI3Jlc3VsdHMtY29udGFpbmVyJykpIHtcbiAgICByZXN1bHRzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn0pOyIsIi8vIEltcG9ydCBnYW1lIHN0YXRlIG1hbmlwdWxhdGlvbiBmdW5jdGlvbnNcbmltcG9ydCB7IGdldEN1cnJlbnRUdXJuLCBhbGxvd2VkRHVyYXRpb25zIH0gZnJvbSAnLi9zaGVhcmRsZS5qcyc7XG5pbXBvcnQgeyBnZXRUcmFja0J5SUQgfSBmcm9tICcuL3Nwb3RpZnkuanMnO1xuXG4vLyBUaGlzIHNob3VsZCBiZSBhIGNhbGxiYWNrLCB0byBhdm9pZCBjby1kZXBlbmRlbmN5P1xuaW1wb3J0IHsgdXBkYXRlUHJvZ3Jlc3NCYXIgfSBmcm9tICcuL1VJLmpzJztcblxuLy8gUmVxdWlyZWQgaGVyZSBzbyB0aGF0IHRoZSB1c2VyIGNhbiBwYXVzZSBhbmQgcmVzdW1lXG5sZXQgYXVkaW87XG5sZXQgZW5kVGltZTtcbmxldCB0aW1lb3V0SUQ7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRHYW1lVHJhY2tBdWRpbyh0cmFja0lEKSB7XG4gICAgY29uc3QgdHJhY2sgPSBhd2FpdCBnZXRUcmFja0J5SUQodHJhY2tJRCk7XG5cbiAgICByZXR1cm4gbmV3IEF1ZGlvKHRyYWNrLnByZXZpZXdfdXJsKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0QXVkaW8odHJhY2tJRCkge1xuICAgIGF1ZGlvID0gYXdhaXQgZ2V0R2FtZVRyYWNrQXVkaW8odHJhY2tJRCk7XG4gICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcihcInRpbWV1cGRhdGVcIiwgdXBkYXRlUHJvZ3Jlc3NCYXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxheUF1ZGlvKCkge1xuXG4gICAgY29uc3QgcGxheUR1cmF0aW9uID0gYWxsb3dlZER1cmF0aW9uc1tnZXRDdXJyZW50VHVybigpLTFdO1xuICAgIGVuZFRpbWUgPSBwbGF5RHVyYXRpb247XG5cbiAgICBhdWRpby5jdXJyZW50VGltZSA9IDA7XG4gICAgYXVkaW8ucGxheSgpO1xuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJRCk7XG4gICAgdGltZW91dElEID0gc2V0VGltZW91dChwYXVzZUF1ZGlvLCBlbmRUaW1lICogMTAwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXVzZUF1ZGlvKCkge1xuICAgIGF1ZGlvLnBhdXNlKCk7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJRCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0F1ZGlvUGF1c2VkKCkge1xuICAgIHJldHVybiBhdWRpby5wYXVzZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdWRpb0N1cnJlbnRUaW1lKCkge1xuICAgIHJldHVybiBhdWRpby5jdXJyZW50VGltZTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gc2F2ZUdhbWVTdGF0ZShndWVzc2VzKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dhbWVTdGF0ZScsIEpTT04uc3RyaW5naWZ5KGd1ZXNzZXMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRHYW1lU3RhdGUoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdGF0ZScpKTtcbn0iLCJpbXBvcnQgeyBnZXRUb2RheXNUcmFja0lEIH0gZnJvbSBcIi4vdHJhY2tTZWxlY3Rpb25cIjtcbmltcG9ydCB7IHNhdmVHYW1lU3RhdGUgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7IGluaXRBdWRpbyB9IGZyb20gXCIuL2F1ZGlvTWFuYWdlclwiO1xuaW1wb3J0IHsgZ2V0QWxsVHJhY2tJRHNCeVNlYXJjaFF1ZXJ5IH0gZnJvbSBcIi4vc3BvdGlmeVwiO1xuXG5leHBvcnQgY29uc3QgYWxsb3dlZER1cmF0aW9ucyA9IFsxLCAyLCA0LCA3LCAxMSwgMTZdO1xuXG5sZXQgZ2FtZVN0YXRlID0ge1xuICBjdXJyZW50VHVybjogMSxcbiAgZ3Vlc3NlczogW10sXG4gIHRyYWNrSUQ6IG51bGxcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50VHVybiA9ICgpID0+IGdhbWVTdGF0ZS5jdXJyZW50VHVybjtcbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50VHJhY2tJRCA9ICgpID0+IGdhbWVTdGF0ZS50cmFja0lEO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBOZXdHYW1lKCkge1xuXG4gIC8vIEN1cmVudGx5IGp1c3QgcHVsbHMgdGhlIGZpcnN0IG9uZS4gRXZlbnR1YWxseSBpdCB3aWxsIGNhbGMgaXQgb24gZGF0ZS5cbiAgY29uc3QgdG9kYXlzVHJhY2tJRCA9IGdldFRvZGF5c1RyYWNrSUQoKTtcblxuICBnYW1lU3RhdGUuY3VycmVudFR1cm4gPSAxO1xuICBnYW1lU3RhdGUuZ3Vlc3NlcyA9IFtdO1xuICBnYW1lU3RhdGUudHJhY2tJRCA9IHRvZGF5c1RyYWNrSUQ7XG5cbiAgaW5pdEF1ZGlvKHRvZGF5c1RyYWNrSUQpO1xuXG4gIGNvbnNvbGUubG9nKFwiTmV3IGdhbWUgc3RhdGVcIiwgZ2FtZVN0YXRlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGltcG9ydEdhbWVTdGF0ZShnYW1lU3RhdGUpIHtcbiAgY29uc29sZS5sb2coZ2FtZVN0YXRlKTtcblxuICAvLyBUaGlzIHdpbGwgYmUgcmVxdWlyZWQgaGVyZSBvbmNlIHRoaXMgZnVuY3Rpb24gaXMgd3JpdHRlblxuICAvLyBpbml0QXVkaW8oZ2FtZVN0YXRlLnRyYWNrSUQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tHdWVzcyhndWVzc2VkVHJhY2tJRCwgZ2FtZVRyYWNrSUQpIHtcbiAgLy8gY29uc29sZS5sb2coXCJHdWVzczpcIiwgZ3Vlc3NlZFRyYWNrSUQpO1xuICAvLyBjb25zb2xlLmxvZyhcIkdhbWUgdHJhY2s6XCIsIGdhbWVUcmFja0lEKTtcblxuICByZXR1cm4gZ3Vlc3NlZFRyYWNrSUQgPT09IGdhbWVUcmFja0lEO1xuXG4gIC8vIGlmIGZhbHNlLCBydW4gdGhlIGR1cGVzIGNoZWNrXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0ZvclNwb3RpZnlEdXBlcyhzZWFyY2hRdWVyeSkge1xuICAgIC8vIElmIGZhbHNlLCBjaGVjayB0aGUgdXNlcidzIGd1ZXNzIGFnYWluc3Qgd2hhdCBzaG91bGQgaG9wZWZ1bGx5IGJlIFNwb3RpZnkncyBkdXBlc1xuICAgIGNvbnN0IGZldGNoZWRJRHMgPSBhd2FpdCBnZXRBbGxUcmFja0lEc0J5U2VhcmNoUXVlcnkoc2VhcmNoUXVlcnkpO1xuXG4gICAgLy8gSWYgZ3Vlc3NlZFRyYWNrSUQgaXMgaW4gdGhlIGFycmF5IHJldHVybmVkLCByZXR1cm4gdHJ1ZVxuICAgIHJldHVybiBmZXRjaGVkSURzLmluY2x1ZGVzKGdldEN1cnJlbnRUcmFja0lEKCkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZU5ld0d1ZXNzVG9HYW1lU3RhdGUoZ3Vlc3MpIHtcblxuICBnYW1lU3RhdGUuZ3Vlc3Nlcy5wdXNoKGd1ZXNzKTtcbiAgaW5jcmVtZW50Q3VycmVudFR1cm5JbkdhbWVTdGF0ZSgpO1xuXG4gIGF3YWl0IHNhdmVHYW1lU3RhdGUoZ2FtZVN0YXRlKTtcblxuICBjb25zb2xlLmxvZyhcIkdhbWUgc3RhdGUgYWZ0ZXIgc2F2ZTpcIiwgZ2FtZVN0YXRlKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkU2tpcHBlZFR1cm5Ub0dhbWVTdGF0ZSgpIHtcbiAgLy8gU2F2ZSBhIG51bGwgZ3Vlc3MgdG8gcmVwcmVzZW50IGEgc2tpcHBlZCB0dXJuXG4gIGdhbWVTdGF0ZS5ndWVzc2VzLnB1c2gobnVsbCk7XG5cbiAgaW5jcmVtZW50Q3VycmVudFR1cm5JbkdhbWVTdGF0ZSgpO1xufVxuXG5mdW5jdGlvbiBpbmNyZW1lbnRDdXJyZW50VHVybkluR2FtZVN0YXRlKCkge1xuICBnYW1lU3RhdGUuY3VycmVudFR1cm4rKztcbiAgc2F2ZUdhbWVTdGF0ZShnYW1lU3RhdGUpO1xufVxuXG5cblxuXG5cbiIsImltcG9ydCBTcG90aWZ5VG9rZW5NYW5hZ2VyIGZyb20gJy4vc3BvdGlmeVRva2VuTWFuYWdlci5qcyc7XG5cbmNvbnN0IGNsaWVudElkID0gXCI3NGFjOTQ5Y2E1ODc0MDI0ODRkY2VmMTQwOGI0ZDdmM1wiO1xuY29uc3QgY2xpZW50U2VjcmV0ID0gXCIzMTNhMmMxNWZjODQ0Y2E1YmMyMjc1NTU3Mjg3NGVlN1wiO1xuXG4vLyBjb25zdCBjbGllbnRJZCA9IHByb2Nlc3MuZW52LlNQT1RJRllfQ0xJRU5UX0lEO1xuLy8gY29uc3QgY2xpZW50U2VjcmV0ID0gcHJvY2Vzcy5lbnYuU1BPVElGWV9DTElFTlRfU0VDUkVUO1xuXG5jb25zdCB0b2tlbk1hbmFnZXIgPSBuZXcgU3BvdGlmeVRva2VuTWFuYWdlcihjbGllbnRJZCwgY2xpZW50U2VjcmV0KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaFRyYWNrKHNlYXJjaFRlcm0sIG1hcmtldCA9ICdHQicpIHtcblxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gYXdhaXQgdG9rZW5NYW5hZ2VyLmdldEFjY2Vzc1Rva2VuKCk7XG5cbiAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcbiAgICB9O1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gc2VhcmNoKHNlYXJjaFRlcm0pIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgICAgICBxOiBzZWFyY2hUZXJtLFxuICAgICAgICAgICAgdHlwZTogJ3RyYWNrJyxcbiAgICAgICAgICAgIGxpbWl0OiAxMCxcbiAgICAgICAgICAgIG1hcmtldFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9zZWFyY2g/JHtwYXJhbXN9YCwge1xuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEudHJhY2tzLml0ZW1zO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiBhd2FpdCBzZWFyY2goc2VhcmNoVGVybSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUcmFja0J5SUQodHJhY2tJRCwgbWFya2V0ID0gJ0dCJykge1xuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gYXdhaXQgdG9rZW5NYW5hZ2VyLmdldEFjY2Vzc1Rva2VuKCk7XG4gIFxuICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcbiAgICB9O1xuICBcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS90cmFja3MvJHt0cmFja0lEfT9tYXJrZXQ9JHttYXJrZXR9YCwge1xuICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICB9KTtcbiAgXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH1cbiAgXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFRyYWNrSURzQnlTZWFyY2hRdWVyeShzZWFyY2hRdWVyeSkge1xuICBjb25zdCBzZWFyY2hSZXN1bHRzID0gYXdhaXQgc2VhcmNoVHJhY2soc2VhcmNoUXVlcnkpO1xuICBjb25zdCB0cmFja0lEcyA9IHNlYXJjaFJlc3VsdHMubWFwKHRyYWNrID0+IHRyYWNrLmlkKTtcblxuICByZXR1cm4gdHJhY2tJRHM7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTcG90aWZ5VG9rZW5NYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihjbGllbnRJZCwgY2xpZW50U2VjcmV0KSB7XG4gICAgICB0aGlzLmNsaWVudElkID0gY2xpZW50SWQ7XG4gICAgICB0aGlzLmNsaWVudFNlY3JldCA9IGNsaWVudFNlY3JldDtcbiAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBudWxsO1xuICAgICAgdGhpcy5leHBpcmF0aW9uVGltZSA9IG51bGw7XG4gICAgfVxuICBcbiAgICBhc3luYyByZXF1ZXN0QWNjZXNzVG9rZW4oY2xpZW50SWQsIGNsaWVudFNlY3JldCkge1xuICAgICAgY29uc3QgdG9rZW5FbmRwb2ludCA9IFwiaHR0cHM6Ly9hY2NvdW50cy5zcG90aWZ5LmNvbS9hcGkvdG9rZW5cIjtcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICB9O1xuICAgICAgY29uc3QgYm9keSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICBncmFudF90eXBlOiBcImNsaWVudF9jcmVkZW50aWFsc1wiLFxuICAgICAgICBjbGllbnRfaWQ6IGNsaWVudElkLFxuICAgICAgICBjbGllbnRfc2VjcmV0OiBjbGllbnRTZWNyZXQsXG4gICAgICB9KTtcbiAgXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRva2VuRW5kcG9pbnQsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgYm9keTogYm9keSxcbiAgICAgIH0pO1xuICBcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YS5hY2Nlc3NfdG9rZW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gb2J0YWluIGFjY2VzcyB0b2tlblwiKTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGFzeW5jIGdldEFjY2Vzc1Rva2VuKCkge1xuICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIGlmICghdGhpcy5hY2Nlc3NUb2tlbiB8fCBjdXJyZW50VGltZSA+PSB0aGlzLmV4cGlyYXRpb25UaW1lKSB7XG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBhd2FpdCB0aGlzLnJlcXVlc3RBY2Nlc3NUb2tlbih0aGlzLmNsaWVudElkLCB0aGlzLmNsaWVudFNlY3JldCk7XG4gICAgICAgIGNvbnN0IGV4cGlyZXNJbk1pbGxpc2Vjb25kcyA9IDM2MDAgKiAxMDAwOyAvLyAxIGhvdXIgaW4gbWlsbGlzZWNvbmRzXG4gICAgICAgIHRoaXMuZXhwaXJhdGlvblRpbWUgPSBjdXJyZW50VGltZSArIGV4cGlyZXNJbk1pbGxpc2Vjb25kcztcbiAgICAgIH1cbiAgXG4gICAgICByZXR1cm4gdGhpcy5hY2Nlc3NUb2tlbjtcbiAgICB9XG4gIH0iLCJjb25zdCB0cmFja1NlbGVjdGlvbiA9IFsnN0oxdXh3bnhmUUx1NEFQaWNFNVJuaicsXG4nMmRsRWRERW11UXNyY1hhQUwzWm56aScsXG4nNjJMSkZhWWloc2RWcnJrZ1VPSkMwNScsXG4nMEhFbW5BVVQ4UEh6bklBQW1WWHFGSicsXG4nN0Z3QnRjZWNtbHBjMXNMeVNQWGVHRScsXG4nMTB6bHdSN2t2VmJEOU9Ca2VaV3IzTCcsXG4nMldmYU9pTWtDdnk3RjVmY3Ayelo4TCcsXG4nNzdOTlpRU3F6TE5xaDJBOUpoTFJrZycsXG4nMDdqNVJMSkh3c200Y1ViM0dHb1czdycsXG4nMjJzTHVKWWN2Wk9Tb0xMUllldjFzNScsXG4nM0JvdmR6ZmFYNGpiNUtGUXdvUGZBdycsXG4nMzR4NmhFSmdHQU9Rdm1sTXFsNUlnZScsXG4nM0NTcHprb0wxWGdEQloxcTlhRENVVicsXG4nMjhvOG0xbzlSR3R5U2JtUUp0QXZ5bScsXG4nMUtzSThORWVBbmE4Wklkb2pJM0ZpVCcsXG4nMm9sVm0xbEhpY3B2ZU1BbzRBVURSQicsXG4nMzlsU2VxbnlqWkplalJ1YVJFZnlMTCcsXG4nNVBKQnJ3S0g3U2RCeUd0RENCR0p3YicsXG4nNDRoT0dnMXVGZzFYSlpHWllOd1ltTScsXG4nNGFLSXM1dDlUcVA1OWJ0bENHUHJndycsXG4nMEE0UFp1ZXBUY0lRVnZBNW03UjBNMScsXG4nN2c3dHliOHpNOVVlS3Nkdm9zVzlXMycsXG4nNG85S2o3b25rbHQ2eGJZbDNqVkFycCcsXG4nMGJCVlJzQmJnbnpXOHdtZGxEN0FwcScsXG4nNWUxZW5UME5QWFBaa1I4RjNSNThiWScsXG4nNUlrZGg5MURkRXE0NGNmcElLUnNMdycsXG4nMlgyNDJEOFZoVGlrV1VUMWkxbllKQycsXG4nMlRBZkdpck5KZTBxVU9lUm1Xc1N5aycsXG4nM212S3ZpZXJGQVZHQ2RnZHg0RU40UScsXG4nNkhaNjdWSW14cXI4YU1CRUVoYmx6ZicsXG4nNmdsc01XSU1JeFE0QmVkekxxR1ZpNCcsXG4nM0xJNE1taWJUa1hINWNHcENHWmd5dycsXG4nNm5UaUloTG1RM0ZXaHZyR2FmdzJ6aicsXG4nM2Q5RENocmRjNkJPZUZzYnJaM0lzMCcsXG4nNE9lQlpsRWFMV3lKV2FZbDRVdmhUOScsXG4nNVRHWW80TXJOS3FJdkpxZ3gxMzRweScsXG4nNDNlQmdZUlRtdTVCSm5DSkRCVTVIYicsXG4nNkk0c25MclZPckpzTGRkNDNpc2MyNycsXG4nNHN6MU5nMkNnaWRmcXFpeTBwTkw2UicsXG4nNTRYNzhkaVNMb1VESTNqb0MyYmpNeicsXG4nMFFlSTc5c3AxdlM4TDNKZ3BFTzdtRCddO1xuXG4vLyAvLyBJbiB0aGlzIGZ1bmN0aW9uLCBJJ20gZ29pbmcgdG8gc2V0IHVwIGEgXCJzdGFydCBkYXRlXCIgZm9yIHRoZSBhcHAuXG4vLyAvLyBJJ2xsIGJhc2Ugd2hpY2ggdHJhY2sgaXMgdGhlIHRyYWNrIG9mIHRoZSBkYXkgZnJvbSB0aGUgZGlzdGFuY2UgaW4gdGltZSBmcm9tIHRoaXMgZGF0ZVxuXG5cbmZ1bmN0aW9uIGdldEN1cnJlbnREYXkoc3RhcnREYXRlKSB7XG4gICAgLy8gR2V0IHRoZSBjdXJyZW50IGRhdGUgaW4gbG9jYWwgdGltZVxuICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIFxuICAgIC8vIFNldCBib3RoIGRhdGVzIHRvIG1pZG5pZ2h0IChzdGFydCBvZiB0aGUgZGF5KSBpbiBsb2NhbCB0aW1lXG4gICAgc3RhcnREYXRlID0gbmV3IERhdGUobmV3IERhdGUoc3RhcnREYXRlKS5zZXRIb3VycygwLDAsMCwwKSk7XG4gICAgY3VycmVudERhdGUgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZS5zZXRIb3VycygwLDAsMCwwKSk7XG4gIFxuICAgIC8vIENvbnZlcnQgYm90aCBkYXRlcyB0byBtaWxsaXNlY29uZHNcbiAgICBsZXQgc3RhcnREYXRlVGltZSA9IHN0YXJ0RGF0ZS5nZXRUaW1lKCk7XG4gICAgbGV0IGN1cnJlbnREYXRlVGltZSA9IGN1cnJlbnREYXRlLmdldFRpbWUoKTtcbiAgXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBkaWZmZXJlbmNlIGluIG1pbGxpc2Vjb25kc1xuICAgIGxldCBkaWZmZXJlbmNlSW5UaW1lID0gY3VycmVudERhdGVUaW1lIC0gc3RhcnREYXRlVGltZTtcbiAgXG4gICAgLy8gQ29udmVydCB0aGUgZGlmZmVyZW5jZSBpbiBtaWxsaXNlY29uZHMgdG8gZGF5c1xuICAgIGxldCBkaWZmZXJlbmNlSW5EYXlzID0gTWF0aC5mbG9vcihkaWZmZXJlbmNlSW5UaW1lIC8gKDEwMDAgKiAzNjAwICogMjQpKTtcbiAgXG4gICAgcmV0dXJuIGRpZmZlcmVuY2VJbkRheXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2RheXNUcmFja0lEKHN0YXJ0RGF0ZSkge1xuXG4gICAgLy8gRm9yIG5vdywgd2UganVzdCBnZXQgdHJhY2sgMFxuICAgIHJldHVybiB0cmFja1NlbGVjdGlvblswXTtcblxuICAgIHJldHVybiB0cmFja1NlbGVjdGlvbltnZXRDdXJyZW50RGF5KHN0YXJ0RGF0ZSldO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGVzLmNzcydcblxuaW1wb3J0IHsgc2V0dXBOZXdHYW1lLCBpbXBvcnRHYW1lU3RhdGUsIGdldEN1cnJlbnRUcmFjaywgYWxsb3dlZER1cmF0aW9ucyB9IGZyb20gJy4vc2hlYXJkbGUnO1xuaW1wb3J0IHsgbG9hZEdhbWVTdGF0ZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcblxuaW1wb3J0IHsgY3JlYXRlTWFya2VycywgaW5pdFVJIH0gZnJvbSAnLi9VSSc7XG5cbi8vIGNvbnN0IGdhbWVMb2FkZWQgPSBsb2FkR2FtZVN0YXRlKCk7XG5cbi8vIGlmIChnYW1lTG9hZGVkKSB7XG4vLyAgICAgY29uc29sZS5sb2coXCJHYW1lIHN1Y2Nlc3NmdWxseSBsb2FkZWRcIik7XG5cbi8vICAgICAvLyBpbXBvcnRHYW1lU3RhdGUoZ2FtZUxvYWRlZCk7XG5cbi8vICAgICAvLyBMb2FkaW5nIG5ldyBnYW1lIGFueXdheSBhcyBJIGNhbid0IGJlIGJvdGhlcmVkIHRvIGRlbGV0ZSBsb2NhbFN0b3JhZ2UgZXZlcnkgdGltZVxuLy8gICAgIHNldHVwTmV3R2FtZSgpO1xuXG4vLyB9IGVsc2Uge1xuLy8gICAgIGNvbnNvbGUubG9nKFwiU3RhcnRpbmcgbmV3IGdhbWVcIik7XG4vLyAgICAgc2V0dXBOZXdHYW1lKCk7XG4vLyB9XG5cblxuc2V0dXBOZXdHYW1lKCk7XG5cbi8vIFRoZXNlIHByb2JhYmx5IHNob3VsZG4ndCBiZSBuZWVkZWQ/XG5pbml0VUkoKTtcbmNyZWF0ZU1hcmtlcnMoYWxsb3dlZER1cmF0aW9ucyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9