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
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  height: 90%;\n}\n\nbody {\n  background-color: #121212;\n  color: #ffffff;\n  margin: 0;\n  font-family: sans-serif;\n  padding-top: 60px;\n  max-width: 100vw;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  height: 50px;\n  padding: 0 15px;\n  border-bottom: 1px solid #ffffff;\n  background-color: #121212;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    min-height: 100%;\n    justify-content: space-between;\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 10px;\n    overflow: none;\n  }\n  \n  .title {\n    /* font-size: 32px; */\n  }\n  \n  .info,\n  .how-to-play {\n    font-size: 24px;\n    cursor: pointer;\n  }\n  \n  .play-container {\n    margin-bottom: 20px;\n    \n  }\n  \n  .seek-bar-container {\n    position: relative;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 100vw;\n  }\n  \n  .seek-bar {\n    width: 100%;\n    height: 10px;\n    position: relative;\n    border-top: 1px solid #ffffff;\n    border-bottom: 1px solid #ffffff;\n    background-color: transparent;\n    margin: 0;\n}\n\n.seek-bar-background {\n    width: 0;\n    height: 100%;\n    position: absolute;\n    background-color: #282828;\n}\n\n.seek-bar-markers {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n}\n\n.seek-bar-progress {\n    width: 0;\n    height: 100%;\n    position: absolute;\n    background-color: #1DB954;\n}\n\n\n  .progress {\n    height: 100%;\n    background-color: #1DB954;\n    width: 0;\n}\n\n  \n  .section {\n    height: 100%;\n    position: absolute;\n    background-color: #282828; /* Lighter gray background color */\n  }\n  \n  .play-button-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 10px 0;\n    position: relative; /* Add position relative */\n  }\n\n  .play-button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 50px;\n    height: 50px;\n    background-color: #00000000;\n    border: 2px solid white;\n    color: #ffffff;\n    border-radius: 50%;\n    cursor: pointer;\n    outline: none;\n    font-size: 20px; /* Adjust the icon size if necessary */\n  }\n  \n  .elapsed-time,\n  .total-time {\n    font-size: 14px;\n    position: absolute; /* Keep position absolute */\n  }\n  \n  .elapsed-time {\n    left: 0; /* Keep left positioning */\n  }\n  \n  .total-time {\n    right: 0; /* Keep right positioning */\n  }\n  \n  .search-container {\n    margin-bottom: 20px;\n    width: 100%; /* Change to 100% */\n    display: flex; /* Add display flex */\n    justify-content: center; /* Add justify-content center */\n  }\n  \n  .spotify-search {\n    width: 90%; /* Change to 90% */\n    padding: 10px;\n    background-color: #333;\n    border: solid 1px black;\n    color: #ffffff;\n    border-radius: 5px;\n    outline: none;\n  }\n  \n  .buttons-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 20px;\n  }\n  \n  \n  .submit {\n    background-color: #1DB954;\n    color: #000000;\n    border: none;\n  }\n\n  .skip {\n    background-color: #00000000;\n    color: #ffffff;\n    border: 1px solid white;\n  }\n\n  .skip,\n  .submit {\n    padding: 10px 20px;\n    border-radius: 20px;\n    cursor: pointer;\n    outline: none;\n    letter-spacing: 0.1em;\n    line-height: 1rem;\n  }\n  \n  button[disabled] {\n    background-color: gray;\n    color: white;\n    cursor: not-allowed;\n  }\n  \n\n/* Song Search */\n\n.search-container {\n    position: relative; /* Add position relative */\n    width: 100%; /* Match the width of the search input */\n}\n\n.results-container {\n    position: absolute;\n    background-color: #333;\n    color: #ffffff;\n    width: 95%;\n    max-height: 200px;\n    overflow-y: auto;\n    border: 1px solid #0000002b;\n    display: none;\n    /* left: 0; */\n    top: calc(100% + 5px);\n  }\n  \n  \n  .result-item {\n    padding: 8px 12px;\n    cursor: pointer;\n    color: #ffffff; /* White text color */\n  }\n  \n  .result-item:hover {\n    background-color: #282828; /* Lighter gray background color for hover */\n  }\n  \n\n  /* Guess container */\n\n  /* .guess-container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    align-items: flex-start;\n    margin-bottom: 20px;\n    margin-top: 20px;\n  }\n  \n  .guess {\n    width: 100%;\n    height: 40px;\n    border: 1px solid #ffffff62;\n    border-radius: 5px;\n    margin-bottom: 10px;\n  }\n  .red-x-icon {\n    color: red;\n    font-weight: bold;\n    margin-right: 5px;\n  }\n   */\n\n   /* Guess container */\n\n/* .guess-container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    align-items: flex-start;\n    margin-bottom: 20px;\n    margin-top: 20px;\n  }\n   */\n  .guess {\n    height: 40px;\n    border: 1px solid #ffffff62;\n    border-radius: 5px;\n    margin-bottom: 10px;\n    display: flex; /* Add this line for horizontal alignment */\n    align-items: center; /* Add this line for vertical alignment */\n    padding-left: 10px;\n    font-size: 16px; /* Add this line to set font size */\n    font-weight: 300; /* Add this line to set font weight */\n    color: #ffffffaa; /* Add this line to set font color */\n  }\n  \n  .red-x-icon {\n    color: rgba(255, 0, 0, 0.75);\n    font-weight: bold;\n    margin-right: 5px;\n    padding-right: 10px;\n  }\n  ", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":["html,\nbody {\n  height: 90%;\n}\n\nbody {\n  background-color: #121212;\n  color: #ffffff;\n  margin: 0;\n  font-family: sans-serif;\n  padding-top: 60px;\n  max-width: 100vw;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  height: 50px;\n  padding: 0 15px;\n  border-bottom: 1px solid #ffffff;\n  background-color: #121212;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    min-height: 100%;\n    justify-content: space-between;\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 10px;\n    overflow: none;\n  }\n  \n  .title {\n    /* font-size: 32px; */\n  }\n  \n  .info,\n  .how-to-play {\n    font-size: 24px;\n    cursor: pointer;\n  }\n  \n  .play-container {\n    margin-bottom: 20px;\n    \n  }\n  \n  .seek-bar-container {\n    position: relative;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 100vw;\n  }\n  \n  .seek-bar {\n    width: 100%;\n    height: 10px;\n    position: relative;\n    border-top: 1px solid #ffffff;\n    border-bottom: 1px solid #ffffff;\n    background-color: transparent;\n    margin: 0;\n}\n\n.seek-bar-background {\n    width: 0;\n    height: 100%;\n    position: absolute;\n    background-color: #282828;\n}\n\n.seek-bar-markers {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n}\n\n.seek-bar-progress {\n    width: 0;\n    height: 100%;\n    position: absolute;\n    background-color: #1DB954;\n}\n\n\n  .progress {\n    height: 100%;\n    background-color: #1DB954;\n    width: 0;\n}\n\n  \n  .section {\n    height: 100%;\n    position: absolute;\n    background-color: #282828; /* Lighter gray background color */\n  }\n  \n  .play-button-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 10px 0;\n    position: relative; /* Add position relative */\n  }\n\n  .play-button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 50px;\n    height: 50px;\n    background-color: #00000000;\n    border: 2px solid white;\n    color: #ffffff;\n    border-radius: 50%;\n    cursor: pointer;\n    outline: none;\n    font-size: 20px; /* Adjust the icon size if necessary */\n  }\n  \n  .elapsed-time,\n  .total-time {\n    font-size: 14px;\n    position: absolute; /* Keep position absolute */\n  }\n  \n  .elapsed-time {\n    left: 0; /* Keep left positioning */\n  }\n  \n  .total-time {\n    right: 0; /* Keep right positioning */\n  }\n  \n  .search-container {\n    margin-bottom: 20px;\n    width: 100%; /* Change to 100% */\n    display: flex; /* Add display flex */\n    justify-content: center; /* Add justify-content center */\n  }\n  \n  .spotify-search {\n    width: 90%; /* Change to 90% */\n    padding: 10px;\n    background-color: #333;\n    border: solid 1px black;\n    color: #ffffff;\n    border-radius: 5px;\n    outline: none;\n  }\n  \n  .buttons-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 20px;\n  }\n  \n  \n  .submit {\n    background-color: #1DB954;\n    color: #000000;\n    border: none;\n  }\n\n  .skip {\n    background-color: #00000000;\n    color: #ffffff;\n    border: 1px solid white;\n  }\n\n  .skip,\n  .submit {\n    padding: 10px 20px;\n    border-radius: 20px;\n    cursor: pointer;\n    outline: none;\n    letter-spacing: 0.1em;\n    line-height: 1rem;\n  }\n  \n  button[disabled] {\n    background-color: gray;\n    color: white;\n    cursor: not-allowed;\n  }\n  \n\n/* Song Search */\n\n.search-container {\n    position: relative; /* Add position relative */\n    width: 100%; /* Match the width of the search input */\n}\n\n.results-container {\n    position: absolute;\n    background-color: #333;\n    color: #ffffff;\n    width: 95%;\n    max-height: 200px;\n    overflow-y: auto;\n    border: 1px solid #0000002b;\n    display: none;\n    /* left: 0; */\n    top: calc(100% + 5px);\n  }\n  \n  \n  .result-item {\n    padding: 8px 12px;\n    cursor: pointer;\n    color: #ffffff; /* White text color */\n  }\n  \n  .result-item:hover {\n    background-color: #282828; /* Lighter gray background color for hover */\n  }\n  \n\n  /* Guess container */\n\n  /* .guess-container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    align-items: flex-start;\n    margin-bottom: 20px;\n    margin-top: 20px;\n  }\n  \n  .guess {\n    width: 100%;\n    height: 40px;\n    border: 1px solid #ffffff62;\n    border-radius: 5px;\n    margin-bottom: 10px;\n  }\n  .red-x-icon {\n    color: red;\n    font-weight: bold;\n    margin-right: 5px;\n  }\n   */\n\n   /* Guess container */\n\n/* .guess-container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    align-items: flex-start;\n    margin-bottom: 20px;\n    margin-top: 20px;\n  }\n   */\n  .guess {\n    height: 40px;\n    border: 1px solid #ffffff62;\n    border-radius: 5px;\n    margin-bottom: 10px;\n    display: flex; /* Add this line for horizontal alignment */\n    align-items: center; /* Add this line for vertical alignment */\n    padding-left: 10px;\n    font-size: 16px; /* Add this line to set font size */\n    font-weight: 300; /* Add this line to set font weight */\n    color: #ffffffaa; /* Add this line to set font color */\n  }\n  \n  .red-x-icon {\n    color: rgba(255, 0, 0, 0.75);\n    font-weight: bold;\n    margin-right: 5px;\n    padding-right: 10px;\n  }\n  "],"sourceRoot":""}]);
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
/* harmony export */   "addGuessToBoard": () => (/* binding */ addGuessToBoard),
/* harmony export */   "addSkippedTurnToBoard": () => (/* binding */ addSkippedTurnToBoard),
/* harmony export */   "clearSearchBox": () => (/* binding */ clearSearchBox),
/* harmony export */   "createMarkers": () => (/* binding */ createMarkers),
/* harmony export */   "disableSubmitButton": () => (/* binding */ disableSubmitButton),
/* harmony export */   "enableSubmitButton": () => (/* binding */ enableSubmitButton),
/* harmony export */   "initUI": () => (/* binding */ initUI),
/* harmony export */   "updateProgressBar": () => (/* binding */ updateProgressBar)
/* harmony export */ });
/* harmony import */ var _audioManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audioManager */ "./src/audioManager.js");
/* harmony import */ var _spotify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spotify */ "./src/spotify.js");
/* harmony import */ var _sheardle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sheardle */ "./src/sheardle.js");




function initUI() {
  updateSeekBarBackground((0,_sheardle__WEBPACK_IMPORTED_MODULE_2__.getCurrentTurn)());
}

// Guess board
function addGuessToBoard(guess, turn) {
  const guessContainer = document.querySelector('.guess-container');
  const guessDiv = guessContainer.children[turn - 1];
  
  // Create the red 'x' icon
  const redXIcon = document.createElement('span');
  redXIcon.textContent = 'x';
  redXIcon.classList.add('red-x-icon');
  guessDiv.appendChild(redXIcon);

  // Add the track info text to the guess div
  const guessText = document.createElement('p');
  guessText.textContent = guess;
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

// function handleSkipButtonClick() {
//     if (getCurrentTurn() < allowedDurations.length) {
//         addSkippedTurnToBoard(getCurrentTurn());
//         skipTurn();
//       }

//     updateSeekBarBackground(getCurrentTurn());
//     updateSkipButtonText();
// }

function handleSkipButtonClick() {


  if ((0,_sheardle__WEBPACK_IMPORTED_MODULE_2__.getCurrentTurn)() < _sheardle__WEBPACK_IMPORTED_MODULE_2__.allowedDurations.length) {
      addSkippedTurnToBoard((0,_sheardle__WEBPACK_IMPORTED_MODULE_2__.getCurrentTurn)());
      (0,_sheardle__WEBPACK_IMPORTED_MODULE_2__.addSkippedTurnToGameState)();
  }

  // If the audio is playing, adjust the timeout
  if (!(0,_audioManager__WEBPACK_IMPORTED_MODULE_0__.isAudioPaused)()) {
      (0,_audioManager__WEBPACK_IMPORTED_MODULE_0__.adjustAudioTimeout)();
  }

  updateSeekBarBackground((0,_sheardle__WEBPACK_IMPORTED_MODULE_2__.getCurrentTurn)());
  updateSkipButtonText();

}

function changePlayButtonIconToPlay() {
  playButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}

function updateSkipButtonText() {
    if ((0,_sheardle__WEBPACK_IMPORTED_MODULE_2__.getCurrentTurn)() < _sheardle__WEBPACK_IMPORTED_MODULE_2__.allowedDurations.length) {
        const skipSeconds = _sheardle__WEBPACK_IMPORTED_MODULE_2__.allowedDurations[(0,_sheardle__WEBPACK_IMPORTED_MODULE_2__.getCurrentTurn)()] - _sheardle__WEBPACK_IMPORTED_MODULE_2__.allowedDurations[(0,_sheardle__WEBPACK_IMPORTED_MODULE_2__.getCurrentTurn)() - 1];
        skipButton.textContent = `SKIP (+${skipSeconds}s)`;
    } else {
        skipButton.textContent = "SKIP";
    }
}

// Submit button
const submitButton = document.querySelector('.submit');

submitButton.addEventListener('click', () => {


    const gameTrackID = (0,_sheardle__WEBPACK_IMPORTED_MODULE_2__.getCurrentTrackID)();
    const guess = (0,_sheardle__WEBPACK_IMPORTED_MODULE_2__.checkGuess)(selectedTrackID, gameTrackID);

    console.log("Guess is ", guess);

    addGuessToBoard(searchInput.value, (0,_sheardle__WEBPACK_IMPORTED_MODULE_2__.getCurrentTurn)());

    (0,_sheardle__WEBPACK_IMPORTED_MODULE_2__.saveNewGuess)(searchInput.value);
    
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
  const progressPercentage = ((getAudioCurrentTime() / 16) * 100 + 1);
  progressBar.style.width = `${progressPercentage}%`;

  if (!(0,_audioManager__WEBPACK_IMPORTED_MODULE_0__.isAudioPaused)()) {
      requestAnimationFrame(updateProgressBar);
  } else {
    changePlayButtonIconToPlay(); 
  }
}

const seekBarBackground = document.querySelector(".seek-bar-background");

function updateSeekBarBackground(turn) {
    const playDuration = _sheardle__WEBPACK_IMPORTED_MODULE_2__.allowedDurations[turn - 1];
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
      (0,_spotify__WEBPACK_IMPORTED_MODULE_1__.searchTrack)(query)
      .then(response => {
        if (response.length > 0) {
          response.forEach((track, index) => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.textContent = `${track.artists[0].name} - ${track.name}`;
            resultItem.setAttribute('data-track-id', track.id);
  
            resultItem.addEventListener('click', (event) => {
              selectedTrackID = event.target.getAttribute('data-track-id');;
              console.log('Selected track ID:', event.target.getAttribute('data-track-id'));
  
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
/* harmony export */   "adjustAudioTimeout": () => (/* binding */ adjustAudioTimeout),
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

  // Allow user to skip mid-turn and have the audio keep playing
function adjustAudioTimeout() {
    const playDuration = _sheardle_js__WEBPACK_IMPORTED_MODULE_0__.allowedDurations[(0,_sheardle_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentTurn)()-1];
    endTime = Math.min(audio.duration, audio.currentTime + playDuration);
    console.log("New end time", endTime);

    clearTimeout(timeoutID);
    timeoutID = setTimeout(pauseAudio, (endTime - audio.currentTime) * 1000);
}


function playAudio() {
    console.log("playAudio called");

    const playDuration = _sheardle_js__WEBPACK_IMPORTED_MODULE_0__.allowedDurations[(0,_sheardle_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentTurn)()-1];
    endTime = Math.min(audio.duration, playDuration);
    console.log("End time", endTime);

    audio.currentTime = 0;
    audio.play();

    clearTimeout(timeoutID);
    timeoutID = setTimeout(pauseAudio, endTime * 1000);
}

function pauseAudio() {
    audio.pause();
    // clearTimeout(timeoutID);
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
/* harmony export */   "checkGuess": () => (/* binding */ checkGuess),
/* harmony export */   "getCurrentTrackID": () => (/* binding */ getCurrentTrackID),
/* harmony export */   "getCurrentTurn": () => (/* binding */ getCurrentTurn),
/* harmony export */   "importGameState": () => (/* binding */ importGameState),
/* harmony export */   "incrementCurrentTurnInGameState": () => (/* binding */ incrementCurrentTurnInGameState),
/* harmony export */   "saveNewGuess": () => (/* binding */ saveNewGuess),
/* harmony export */   "setupNewGame": () => (/* binding */ setupNewGame)
/* harmony export */ });
/* harmony import */ var _trackSelection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trackSelection */ "./src/trackSelection.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _audioManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audioManager */ "./src/audioManager.js");




const allowedDurations = [1, 2, 4, 7, 11, 16];

let gameState = {
  currentTurn: 1,
  guesses: [],
  trackID: null,
};

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
  console.log("Guess:", guessedTrackID);
  console.log("Game track:", gameTrackID);

  return guessedTrackID === gameTrackID;
}

async function saveNewGuess(guess) {
  console.log("New game state before latest guess", gameState);

  gameState.guesses.push(guess);
  moveToNextTurn();

  await (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveGameState)(gameState); // Await the saveGameState function

  console.log("New game state after latest guess", gameState);
}


function addSkippedTurnToGameState() {
  // Save a null guess to represent a skipped turn
  gameState.guesses.push(null);

  incrementCurrentTurnInGameState();
}

function incrementCurrentTurnInGameState() {

  // TODO: If final turn, move to game results screen

  gameState.currentTurn++;
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveGameState)(gameState);
}

const getCurrentTurn = () => gameState.currentTurn;
const getCurrentTrackID = () => gameState.trackID;






/***/ }),

/***/ "./src/spotify.js":
/*!************************!*\
  !*** ./src/spotify.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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

    console.log("Starting Spotify search...");

    // Search for track first. If no results, search artist? Both anyway?

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
            console.log(data.tracks.items);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VDekVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7O0FBRWtFO0FBQy9DOztBQUVGOztBQUU3Qzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7O0FBR0EsdURBQVk7O0FBRVo7QUFDQSwyQ0FBTTtBQUNOLGtEQUFhLENBQUMsdURBQWdCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGVhcmRsZS8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIiwid2VicGFjazovL3NoZWFyZGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9zcmMvYXVkaW9NYW5hZ2VyLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vc3JjL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL3NyYy9zaGVhcmRsZS5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL3NyYy9zcG90aWZ5LmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vc3JjL3Nwb3RpZnlUb2tlbk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9zcmMvdHJhY2tTZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NoZWFyZGxlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaGVhcmRsZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiA5MCU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nLXRvcDogNjBweDtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxufVxcblxcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxuICAgIG92ZXJmbG93OiBub25lO1xcbiAgfVxcbiAgXFxuICAudGl0bGUge1xcbiAgICAvKiBmb250LXNpemU6IDMycHg7ICovXFxuICB9XFxuICBcXG4gIC5pbmZvLFxcbiAgLmhvdy10by1wbGF5IHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICBcXG4gIC5wbGF5LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIFxcbiAgfVxcbiAgXFxuICAuc2Vlay1iYXItY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgfVxcbiAgXFxuICAuc2Vlay1iYXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmZmZmO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnNlZWstYmFyLWJhY2tncm91bmQge1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XFxufVxcblxcbi5zZWVrLWJhci1tYXJrZXJzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uc2Vlay1iYXItcHJvZ3Jlc3Mge1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxREI5NTQ7XFxufVxcblxcblxcbiAgLnByb2dyZXNzIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURCOTU0O1xcbiAgICB3aWR0aDogMDtcXG59XFxuXFxuICBcXG4gIC5zZWN0aW9uIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7IC8qIExpZ2h0ZXIgZ3JheSBiYWNrZ3JvdW5kIGNvbG9yICovXFxuICB9XFxuICBcXG4gIC5wbGF5LWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogQWRkIHBvc2l0aW9uIHJlbGF0aXZlICovXFxuICB9XFxuXFxuICAucGxheS1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmb250LXNpemU6IDIwcHg7IC8qIEFkanVzdCB0aGUgaWNvbiBzaXplIGlmIG5lY2Vzc2FyeSAqL1xcbiAgfVxcbiAgXFxuICAuZWxhcHNlZC10aW1lLFxcbiAgLnRvdGFsLXRpbWUge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogS2VlcCBwb3NpdGlvbiBhYnNvbHV0ZSAqL1xcbiAgfVxcbiAgXFxuICAuZWxhcHNlZC10aW1lIHtcXG4gICAgbGVmdDogMDsgLyogS2VlcCBsZWZ0IHBvc2l0aW9uaW5nICovXFxuICB9XFxuICBcXG4gIC50b3RhbC10aW1lIHtcXG4gICAgcmlnaHQ6IDA7IC8qIEtlZXAgcmlnaHQgcG9zaXRpb25pbmcgKi9cXG4gIH1cXG4gIFxcbiAgLnNlYXJjaC1jb250YWluZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTsgLyogQ2hhbmdlIHRvIDEwMCUgKi9cXG4gICAgZGlzcGxheTogZmxleDsgLyogQWRkIGRpc3BsYXkgZmxleCAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQWRkIGp1c3RpZnktY29udGVudCBjZW50ZXIgKi9cXG4gIH1cXG4gIFxcbiAgLnNwb3RpZnktc2VhcmNoIHtcXG4gICAgd2lkdGg6IDkwJTsgLyogQ2hhbmdlIHRvIDkwJSAqL1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLmJ1dHRvbnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICB9XFxuICBcXG4gIFxcbiAgLnN1Ym1pdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxREI5NTQ7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICB9XFxuXFxuICAuc2tpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwMDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgfVxcblxcbiAgLnNraXAsXFxuICAuc3VibWl0IHtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XFxuICB9XFxuICBcXG4gIGJ1dHRvbltkaXNhYmxlZF0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICB9XFxuICBcXG5cXG4vKiBTb25nIFNlYXJjaCAqL1xcblxcbi5zZWFyY2gtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBBZGQgcG9zaXRpb24gcmVsYXRpdmUgKi9cXG4gICAgd2lkdGg6IDEwMCU7IC8qIE1hdGNoIHRoZSB3aWR0aCBvZiB0aGUgc2VhcmNoIGlucHV0ICovXFxufVxcblxcbi5yZXN1bHRzLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMmI7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIC8qIGxlZnQ6IDA7ICovXFxuICAgIHRvcDogY2FsYygxMDAlICsgNXB4KTtcXG4gIH1cXG4gIFxcbiAgXFxuICAucmVzdWx0LWl0ZW0ge1xcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogI2ZmZmZmZjsgLyogV2hpdGUgdGV4dCBjb2xvciAqL1xcbiAgfVxcbiAgXFxuICAucmVzdWx0LWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4OyAvKiBMaWdodGVyIGdyYXkgYmFja2dyb3VuZCBjb2xvciBmb3IgaG92ZXIgKi9cXG4gIH1cXG4gIFxcblxcbiAgLyogR3Vlc3MgY29udGFpbmVyICovXFxuXFxuICAvKiAuZ3Vlc3MtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gIH1cXG4gIFxcbiAgLmd1ZXNzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjYyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB9XFxuICAucmVkLXgtaWNvbiB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIH1cXG4gICAqL1xcblxcbiAgIC8qIEd1ZXNzIGNvbnRhaW5lciAqL1xcblxcbi8qIC5ndWVzcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgfVxcbiAgICovXFxuICAuZ3Vlc3Mge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY2MjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4OyAvKiBBZGQgdGhpcyBsaW5lIGZvciBob3Jpem9udGFsIGFsaWdubWVudCAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBBZGQgdGhpcyBsaW5lIGZvciB2ZXJ0aWNhbCBhbGlnbm1lbnQgKi9cXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7IC8qIEFkZCB0aGlzIGxpbmUgdG8gc2V0IGZvbnQgc2l6ZSAqL1xcbiAgICBmb250LXdlaWdodDogMzAwOyAvKiBBZGQgdGhpcyBsaW5lIHRvIHNldCBmb250IHdlaWdodCAqL1xcbiAgICBjb2xvcjogI2ZmZmZmZmFhOyAvKiBBZGQgdGhpcyBsaW5lIHRvIHNldCBmb250IGNvbG9yICovXFxuICB9XFxuICBcXG4gIC5yZWQteC1pY29uIHtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjc1KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgfVxcbiAgXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsU0FBUztFQUNULHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdDQUFnQztFQUNoQyx5QkFBeUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTs7SUFFRSxlQUFlO0lBQ2YsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLG1CQUFtQjs7RUFFckI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULDJCQUEyQjtJQUMzQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFFBQVE7SUFDUixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7O0VBR0U7SUFDRSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFFBQVE7QUFDWjs7O0VBR0U7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QixFQUFFLGtDQUFrQztFQUMvRDs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxrQkFBa0IsRUFBRSwwQkFBMEI7RUFDaEQ7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGVBQWUsRUFBRSxzQ0FBc0M7RUFDekQ7O0VBRUE7O0lBRUUsZUFBZTtJQUNmLGtCQUFrQixFQUFFLDJCQUEyQjtFQUNqRDs7RUFFQTtJQUNFLE9BQU8sRUFBRSwwQkFBMEI7RUFDckM7O0VBRUE7SUFDRSxRQUFRLEVBQUUsMkJBQTJCO0VBQ3ZDOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVcsRUFBRSxtQkFBbUI7SUFDaEMsYUFBYSxFQUFFLHFCQUFxQjtJQUNwQyx1QkFBdUIsRUFBRSwrQkFBK0I7RUFDMUQ7O0VBRUE7SUFDRSxVQUFVLEVBQUUsa0JBQWtCO0lBQzlCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQjs7O0VBR0E7SUFDRSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLFlBQVk7RUFDZDs7RUFFQTtJQUNFLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2QsdUJBQXVCO0VBQ3pCOztFQUVBOztJQUVFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7OztBQUdGLGdCQUFnQjs7QUFFaEI7SUFDSSxrQkFBa0IsRUFBRSwwQkFBMEI7SUFDOUMsV0FBVyxFQUFFLHdDQUF3QztBQUN6RDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHFCQUFxQjtFQUN2Qjs7O0VBR0E7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGNBQWMsRUFBRSxxQkFBcUI7RUFDdkM7O0VBRUE7SUFDRSx5QkFBeUIsRUFBRSw0Q0FBNEM7RUFDekU7OztFQUdBLG9CQUFvQjs7RUFFcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXFCRTs7R0FFRCxvQkFBb0I7O0FBRXZCOzs7Ozs7OztJQVFJO0VBQ0Y7SUFDRSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYSxFQUFFLDJDQUEyQztJQUMxRCxtQkFBbUIsRUFBRSx5Q0FBeUM7SUFDOUQsa0JBQWtCO0lBQ2xCLGVBQWUsRUFBRSxtQ0FBbUM7SUFDcEQsZ0JBQWdCLEVBQUUscUNBQXFDO0lBQ3ZELGdCQUFnQixFQUFFLG9DQUFvQztFQUN4RDs7RUFFQTtJQUNFLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiA5MCU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nLXRvcDogNjBweDtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxufVxcblxcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxuICAgIG92ZXJmbG93OiBub25lO1xcbiAgfVxcbiAgXFxuICAudGl0bGUge1xcbiAgICAvKiBmb250LXNpemU6IDMycHg7ICovXFxuICB9XFxuICBcXG4gIC5pbmZvLFxcbiAgLmhvdy10by1wbGF5IHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICBcXG4gIC5wbGF5LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIFxcbiAgfVxcbiAgXFxuICAuc2Vlay1iYXItY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgfVxcbiAgXFxuICAuc2Vlay1iYXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmZmZmO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnNlZWstYmFyLWJhY2tncm91bmQge1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XFxufVxcblxcbi5zZWVrLWJhci1tYXJrZXJzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uc2Vlay1iYXItcHJvZ3Jlc3Mge1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxREI5NTQ7XFxufVxcblxcblxcbiAgLnByb2dyZXNzIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURCOTU0O1xcbiAgICB3aWR0aDogMDtcXG59XFxuXFxuICBcXG4gIC5zZWN0aW9uIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7IC8qIExpZ2h0ZXIgZ3JheSBiYWNrZ3JvdW5kIGNvbG9yICovXFxuICB9XFxuICBcXG4gIC5wbGF5LWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogQWRkIHBvc2l0aW9uIHJlbGF0aXZlICovXFxuICB9XFxuXFxuICAucGxheS1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmb250LXNpemU6IDIwcHg7IC8qIEFkanVzdCB0aGUgaWNvbiBzaXplIGlmIG5lY2Vzc2FyeSAqL1xcbiAgfVxcbiAgXFxuICAuZWxhcHNlZC10aW1lLFxcbiAgLnRvdGFsLXRpbWUge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogS2VlcCBwb3NpdGlvbiBhYnNvbHV0ZSAqL1xcbiAgfVxcbiAgXFxuICAuZWxhcHNlZC10aW1lIHtcXG4gICAgbGVmdDogMDsgLyogS2VlcCBsZWZ0IHBvc2l0aW9uaW5nICovXFxuICB9XFxuICBcXG4gIC50b3RhbC10aW1lIHtcXG4gICAgcmlnaHQ6IDA7IC8qIEtlZXAgcmlnaHQgcG9zaXRpb25pbmcgKi9cXG4gIH1cXG4gIFxcbiAgLnNlYXJjaC1jb250YWluZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTsgLyogQ2hhbmdlIHRvIDEwMCUgKi9cXG4gICAgZGlzcGxheTogZmxleDsgLyogQWRkIGRpc3BsYXkgZmxleCAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQWRkIGp1c3RpZnktY29udGVudCBjZW50ZXIgKi9cXG4gIH1cXG4gIFxcbiAgLnNwb3RpZnktc2VhcmNoIHtcXG4gICAgd2lkdGg6IDkwJTsgLyogQ2hhbmdlIHRvIDkwJSAqL1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLmJ1dHRvbnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICB9XFxuICBcXG4gIFxcbiAgLnN1Ym1pdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxREI5NTQ7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICB9XFxuXFxuICAuc2tpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwMDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgfVxcblxcbiAgLnNraXAsXFxuICAuc3VibWl0IHtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XFxuICB9XFxuICBcXG4gIGJ1dHRvbltkaXNhYmxlZF0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICB9XFxuICBcXG5cXG4vKiBTb25nIFNlYXJjaCAqL1xcblxcbi5zZWFyY2gtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBBZGQgcG9zaXRpb24gcmVsYXRpdmUgKi9cXG4gICAgd2lkdGg6IDEwMCU7IC8qIE1hdGNoIHRoZSB3aWR0aCBvZiB0aGUgc2VhcmNoIGlucHV0ICovXFxufVxcblxcbi5yZXN1bHRzLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMmI7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIC8qIGxlZnQ6IDA7ICovXFxuICAgIHRvcDogY2FsYygxMDAlICsgNXB4KTtcXG4gIH1cXG4gIFxcbiAgXFxuICAucmVzdWx0LWl0ZW0ge1xcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogI2ZmZmZmZjsgLyogV2hpdGUgdGV4dCBjb2xvciAqL1xcbiAgfVxcbiAgXFxuICAucmVzdWx0LWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4OyAvKiBMaWdodGVyIGdyYXkgYmFja2dyb3VuZCBjb2xvciBmb3IgaG92ZXIgKi9cXG4gIH1cXG4gIFxcblxcbiAgLyogR3Vlc3MgY29udGFpbmVyICovXFxuXFxuICAvKiAuZ3Vlc3MtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gIH1cXG4gIFxcbiAgLmd1ZXNzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjYyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB9XFxuICAucmVkLXgtaWNvbiB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIH1cXG4gICAqL1xcblxcbiAgIC8qIEd1ZXNzIGNvbnRhaW5lciAqL1xcblxcbi8qIC5ndWVzcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgfVxcbiAgICovXFxuICAuZ3Vlc3Mge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY2MjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4OyAvKiBBZGQgdGhpcyBsaW5lIGZvciBob3Jpem9udGFsIGFsaWdubWVudCAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBBZGQgdGhpcyBsaW5lIGZvciB2ZXJ0aWNhbCBhbGlnbm1lbnQgKi9cXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7IC8qIEFkZCB0aGlzIGxpbmUgdG8gc2V0IGZvbnQgc2l6ZSAqL1xcbiAgICBmb250LXdlaWdodDogMzAwOyAvKiBBZGQgdGhpcyBsaW5lIHRvIHNldCBmb250IHdlaWdodCAqL1xcbiAgICBjb2xvcjogI2ZmZmZmZmFhOyAvKiBBZGQgdGhpcyBsaW5lIHRvIHNldCBmb250IGNvbG9yICovXFxuICB9XFxuICBcXG4gIC5yZWQteC1pY29uIHtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjc1KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgfVxcbiAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgaXNBdWRpb1BhdXNlZCwgcGxheUF1ZGlvLCBwYXVzZUF1ZGlvLCBhZGp1c3RBdWRpb1RpbWVvdXQgfSBmcm9tICcuL2F1ZGlvTWFuYWdlcic7XG5pbXBvcnQgeyBzZWFyY2hUcmFjayB9IGZyb20gJy4vc3BvdGlmeSc7XG5pbXBvcnQgeyBcbiAgYWxsb3dlZER1cmF0aW9ucywgXG4gIGdldEN1cnJlbnRUdXJuLCAgXG4gIGdldEN1cnJlbnRUcmFja0lELCBcbiAgY2hlY2tHdWVzcywgXG4gIHNhdmVOZXdHdWVzcywgXG4gIGFkZFNraXBwZWRUdXJuVG9HYW1lU3RhdGUgXG59IGZyb20gJy4vc2hlYXJkbGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFVJKCkge1xuICB1cGRhdGVTZWVrQmFyQmFja2dyb3VuZChnZXRDdXJyZW50VHVybigpKTtcbn1cblxuLy8gR3Vlc3MgYm9hcmRcbmV4cG9ydCBmdW5jdGlvbiBhZGRHdWVzc1RvQm9hcmQoZ3Vlc3MsIHR1cm4pIHtcbiAgY29uc3QgZ3Vlc3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3Vlc3MtY29udGFpbmVyJyk7XG4gIGNvbnN0IGd1ZXNzRGl2ID0gZ3Vlc3NDb250YWluZXIuY2hpbGRyZW5bdHVybiAtIDFdO1xuICBcbiAgLy8gQ3JlYXRlIHRoZSByZWQgJ3gnIGljb25cbiAgY29uc3QgcmVkWEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHJlZFhJY29uLnRleHRDb250ZW50ID0gJ3gnO1xuICByZWRYSWNvbi5jbGFzc0xpc3QuYWRkKCdyZWQteC1pY29uJyk7XG4gIGd1ZXNzRGl2LmFwcGVuZENoaWxkKHJlZFhJY29uKTtcblxuICAvLyBBZGQgdGhlIHRyYWNrIGluZm8gdGV4dCB0byB0aGUgZ3Vlc3MgZGl2XG4gIGNvbnN0IGd1ZXNzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZ3Vlc3NUZXh0LnRleHRDb250ZW50ID0gZ3Vlc3M7XG4gIGd1ZXNzRGl2LmFwcGVuZENoaWxkKGd1ZXNzVGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTa2lwcGVkVHVyblRvQm9hcmQodHVybikge1xuICBjb25zdCBndWVzc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWVzcy1jb250YWluZXInKTtcbiAgY29uc3QgZ3Vlc3NEaXYgPSBndWVzc0NvbnRhaW5lci5jaGlsZHJlblt0dXJuIC0gMV07XG4gIFxuICAvLyBDcmVhdGUgdGhlIHJlZCAneCcgaWNvblxuICBjb25zdCByZWRYSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgcmVkWEljb24udGV4dENvbnRlbnQgPSAneCc7XG4gIHJlZFhJY29uLmNsYXNzTGlzdC5hZGQoJ3JlZC14LWljb24nKTtcblxuICAvLyBBZGQgdGhlIHJlZCAneCcgaWNvbiB0byB0aGUgZ3Vlc3MgZGl2XG4gIGd1ZXNzRGl2LmFwcGVuZENoaWxkKHJlZFhJY29uKTtcblxuICAvLyBBZGQgdGhlIFwiU2tpcHBlZCB0dXJuXCIgdGV4dCB0byB0aGUgZ3Vlc3MgZGl2XG4gIGNvbnN0IHNraXBwZWRUdXJuVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgc2tpcHBlZFR1cm5UZXh0LnRleHRDb250ZW50ID0gXCJTa2lwcGVkXCI7XG4gIGd1ZXNzRGl2LmFwcGVuZENoaWxkKHNraXBwZWRUdXJuVGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclNlYXJjaEJveCgpIHtcbiAgY29uc3Qgc2VhcmNoQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwb3RpZnktc2VhcmNoJyk7XG4gIHNlYXJjaEJveC52YWx1ZSA9ICcnO1xufVxuXG4vLyBQbGF5L1BhdXNlIGJ1dHRvblxuY29uc3QgcGxheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheS1idXR0b25cIik7XG5wbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQbGF5QnV0dG9uQ2xpY2spO1xuXG5mdW5jdGlvbiBoYW5kbGVQbGF5QnV0dG9uQ2xpY2soKSB7XG4gICAgaWYgKGlzQXVkaW9QYXVzZWQoKSkge1xuICAgICAgICBwbGF5QXVkaW8oKTtcbiAgICAgICAgcGxheUJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYSBmYS1wYXVzZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhdXNlQXVkaW8oKTtcbiAgICAgICAgcGxheUJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYSBmYS1wbGF5XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPic7XG4gICAgfVxufVxuXG5cbi8vIFNraXAgYnV0dG9uXG5jb25zdCBza2lwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5za2lwXCIpO1xuc2tpcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlU2tpcEJ1dHRvbkNsaWNrKTtcblxuLy8gZnVuY3Rpb24gaGFuZGxlU2tpcEJ1dHRvbkNsaWNrKCkge1xuLy8gICAgIGlmIChnZXRDdXJyZW50VHVybigpIDwgYWxsb3dlZER1cmF0aW9ucy5sZW5ndGgpIHtcbi8vICAgICAgICAgYWRkU2tpcHBlZFR1cm5Ub0JvYXJkKGdldEN1cnJlbnRUdXJuKCkpO1xuLy8gICAgICAgICBza2lwVHVybigpO1xuLy8gICAgICAgfVxuXG4vLyAgICAgdXBkYXRlU2Vla0JhckJhY2tncm91bmQoZ2V0Q3VycmVudFR1cm4oKSk7XG4vLyAgICAgdXBkYXRlU2tpcEJ1dHRvblRleHQoKTtcbi8vIH1cblxuZnVuY3Rpb24gaGFuZGxlU2tpcEJ1dHRvbkNsaWNrKCkge1xuXG5cbiAgaWYgKGdldEN1cnJlbnRUdXJuKCkgPCBhbGxvd2VkRHVyYXRpb25zLmxlbmd0aCkge1xuICAgICAgYWRkU2tpcHBlZFR1cm5Ub0JvYXJkKGdldEN1cnJlbnRUdXJuKCkpO1xuICAgICAgYWRkU2tpcHBlZFR1cm5Ub0dhbWVTdGF0ZSgpO1xuICB9XG5cbiAgLy8gSWYgdGhlIGF1ZGlvIGlzIHBsYXlpbmcsIGFkanVzdCB0aGUgdGltZW91dFxuICBpZiAoIWlzQXVkaW9QYXVzZWQoKSkge1xuICAgICAgYWRqdXN0QXVkaW9UaW1lb3V0KCk7XG4gIH1cblxuICB1cGRhdGVTZWVrQmFyQmFja2dyb3VuZChnZXRDdXJyZW50VHVybigpKTtcbiAgdXBkYXRlU2tpcEJ1dHRvblRleHQoKTtcblxufVxuXG5mdW5jdGlvbiBjaGFuZ2VQbGF5QnV0dG9uSWNvblRvUGxheSgpIHtcbiAgcGxheUJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYSBmYS1wbGF5XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPic7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVNraXBCdXR0b25UZXh0KCkge1xuICAgIGlmIChnZXRDdXJyZW50VHVybigpIDwgYWxsb3dlZER1cmF0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3Qgc2tpcFNlY29uZHMgPSBhbGxvd2VkRHVyYXRpb25zW2dldEN1cnJlbnRUdXJuKCldIC0gYWxsb3dlZER1cmF0aW9uc1tnZXRDdXJyZW50VHVybigpIC0gMV07XG4gICAgICAgIHNraXBCdXR0b24udGV4dENvbnRlbnQgPSBgU0tJUCAoKyR7c2tpcFNlY29uZHN9cylgO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNraXBCdXR0b24udGV4dENvbnRlbnQgPSBcIlNLSVBcIjtcbiAgICB9XG59XG5cbi8vIFN1Ym1pdCBidXR0b25cbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKTtcblxuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG5cbiAgICBjb25zdCBnYW1lVHJhY2tJRCA9IGdldEN1cnJlbnRUcmFja0lEKCk7XG4gICAgY29uc3QgZ3Vlc3MgPSBjaGVja0d1ZXNzKHNlbGVjdGVkVHJhY2tJRCwgZ2FtZVRyYWNrSUQpO1xuXG4gICAgY29uc29sZS5sb2coXCJHdWVzcyBpcyBcIiwgZ3Vlc3MpO1xuXG4gICAgYWRkR3Vlc3NUb0JvYXJkKHNlYXJjaElucHV0LnZhbHVlLCBnZXRDdXJyZW50VHVybigpKTtcblxuICAgIHNhdmVOZXdHdWVzcyhzZWFyY2hJbnB1dC52YWx1ZSk7XG4gICAgXG4gICAgZGlzYWJsZVN1Ym1pdEJ1dHRvbigpO1xuICAgIGNsZWFyU2VhcmNoQm94KCk7XG4gIH0pO1xuXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlU3VibWl0QnV0dG9uKCkge1xuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0Jyk7XG4gIHN1Ym1pdEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVTdWJtaXRCdXR0b24oKSB7XG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKTtcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xufVxuXG5cbi8vIFByb2dyZXNzIGJhclxuY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlZWstYmFyLXByb2dyZXNzXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUHJvZ3Jlc3NCYXIoKSB7XG4gIGNvbnN0IHByb2dyZXNzUGVyY2VudGFnZSA9ICgoZ2V0QXVkaW9DdXJyZW50VGltZSgpIC8gMTYpICogMTAwICsgMSk7XG4gIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gYCR7cHJvZ3Jlc3NQZXJjZW50YWdlfSVgO1xuXG4gIGlmICghaXNBdWRpb1BhdXNlZCgpKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlUHJvZ3Jlc3NCYXIpO1xuICB9IGVsc2Uge1xuICAgIGNoYW5nZVBsYXlCdXR0b25JY29uVG9QbGF5KCk7IFxuICB9XG59XG5cbmNvbnN0IHNlZWtCYXJCYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWVrLWJhci1iYWNrZ3JvdW5kXCIpO1xuXG5mdW5jdGlvbiB1cGRhdGVTZWVrQmFyQmFja2dyb3VuZCh0dXJuKSB7XG4gICAgY29uc3QgcGxheUR1cmF0aW9uID0gYWxsb3dlZER1cmF0aW9uc1t0dXJuIC0gMV07XG4gICAgY29uc3QgcGVyY2VudGFnZSA9IChwbGF5RHVyYXRpb24gLyAxNikgKiAxMDA7XG4gICAgc2Vla0JhckJhY2tncm91bmQuc3R5bGUud2lkdGggPSBgJHtwZXJjZW50YWdlfSVgO1xufVxuXG5cbi8vIEFsbG93ZWQgbGVuZ3RoIHRvIHBsYXkgbWFya2Vyc1xuZnVuY3Rpb24gY3JlYXRlTWFya2VyKGR1cmF0aW9uKSB7XG4gICAgY29uc3QgbWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwZXJjZW50YWdlID0gKGR1cmF0aW9uIC8gMTYpICogMTAwO1xuXG4gICAgbWFya2VyLnN0eWxlLndpZHRoID0gXCIxcHhcIjtcbiAgICBtYXJrZXIuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG4gICAgbWFya2VyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIG1hcmtlci5zdHlsZS5sZWZ0ID0gYCR7cGVyY2VudGFnZX0lYDtcbiAgICBtYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZmZmZmXCI7XG5cbiAgICByZXR1cm4gbWFya2VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWFya2VycyhhbGxvd2VkRHVyYXRpb25zKSB7XG4gICAgY29uc3QgbWFya2Vyc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2Vlay1iYXItbWFya2Vyc1wiKTtcbiAgICBhbGxvd2VkRHVyYXRpb25zLmZvckVhY2goZHVyYXRpb24gPT4ge1xuICAgICAgICBjb25zdCBtYXJrZXIgPSBjcmVhdGVNYXJrZXIoZHVyYXRpb24gKyAwLjEpO1xuICAgICAgICBtYXJrZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1hcmtlcik7XG4gICAgfSk7XG59XG5cbi8vIFNlYXJjaCBiYXJcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwb3RpZnktc2VhcmNoJyk7XG5sZXQgc2VsZWN0ZWRUcmFja0lEO1xuXG4vLyBEZWJvdW5jZSBmdW5jdGlvbiB0byBzdG9wIHRoZSBhdXRvLXNlYXJjaCBmaXJpbmcgdG9vIG9mdGVuXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgICBsZXQgdGltZW91dDtcblxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIGNvbnN0IGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcblxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcblxuICAgICAgICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9O1xufVxuXG4vLyBObyBkZWJvdW5jZSBuZWVkZWQgZm9yIGRpc2FibGluZyB0aGUgYnV0dG9uXG5zZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBkaXNhYmxlU3VibWl0QnV0dG9uKCk7XG59KVxuXG5zZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGRlYm91bmNlKChldmVudCkgPT4ge1xuICAgIGNvbnN0IHF1ZXJ5ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cy1jb250YWluZXInKTtcbiAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIHJlc3VsdHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgXG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICBzZWFyY2hUcmFjayhxdWVyeSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKCh0cmFjaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJlc3VsdEl0ZW0uY2xhc3NMaXN0LmFkZCgncmVzdWx0LWl0ZW0nKTtcbiAgICAgICAgICAgIHJlc3VsdEl0ZW0udGV4dENvbnRlbnQgPSBgJHt0cmFjay5hcnRpc3RzWzBdLm5hbWV9IC0gJHt0cmFjay5uYW1lfWA7XG4gICAgICAgICAgICByZXN1bHRJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFjay1pZCcsIHRyYWNrLmlkKTtcbiAgXG4gICAgICAgICAgICByZXN1bHRJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIHNlbGVjdGVkVHJhY2tJRCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhY2staWQnKTs7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWxlY3RlZCB0cmFjayBJRDonLCBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRyYWNrLWlkJykpO1xuICBcbiAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBzZWFyY2ggaW5wdXQgd2l0aCB0aGUgc2VsZWN0ZWQgcmVzdWx0IGFuZCBoaWRlIHRoZSByZXN1bHRzIGNvbnRhaW5lclxuICAgICAgICAgICAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgcmVzdWx0c0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICBlbmFibGVTdWJtaXRCdXR0b24oKTtcbiAgICAgICAgICAgIH0pO1xuICBcbiAgICAgICAgICAgIHJlc3VsdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocmVzdWx0SXRlbSk7XG4gICAgICAgICAgfSk7XG4gIFxuICAgICAgICAgIHJlc3VsdHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgNTAwKSk7XG5cbi8vIFNlYXJjaCByZXN1bHRzXG5jb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHMtY29udGFpbmVyJyk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAvLyBDaGVjayBpZiB0aGUgY2xpY2sgdGFyZ2V0IGlzIG91dHNpZGUgb2YgdGhlIC5yZXN1bHRzLWNvbnRhaW5lclxuICBpZiAoIWV2ZW50LnRhcmdldC5jbG9zZXN0KCcjcmVzdWx0cy1jb250YWluZXInKSkge1xuICAgIHJlc3VsdHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufSk7IiwiLy8gSW1wb3J0IGdhbWUgc3RhdGUgbWFuaXB1bGF0aW9uIGZ1bmN0aW9uc1xuaW1wb3J0IHsgZ2V0Q3VycmVudFR1cm4sIGFsbG93ZWREdXJhdGlvbnMgfSBmcm9tICcuL3NoZWFyZGxlLmpzJztcbmltcG9ydCB7IGdldFRyYWNrQnlJRCB9IGZyb20gJy4vc3BvdGlmeS5qcyc7XG5cbi8vIFRoaXMgc2hvdWxkIGJlIGEgY2FsbGJhY2ssIHRvIGF2b2lkIGNvLWRlcGVuZGVuY3k/XG5pbXBvcnQgeyB1cGRhdGVQcm9ncmVzc0JhciB9IGZyb20gJy4vVUkuanMnO1xuXG4vLyBSZXF1aXJlZCBoZXJlIHNvIHRoYXQgdGhlIHVzZXIgY2FuIHBhdXNlIGFuZCByZXN1bWVcbmxldCBhdWRpbztcbmxldCBlbmRUaW1lO1xubGV0IHRpbWVvdXRJRDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdhbWVUcmFja0F1ZGlvKHRyYWNrSUQpIHtcbiAgICBjb25zdCB0cmFjayA9IGF3YWl0IGdldFRyYWNrQnlJRCh0cmFja0lEKTtcblxuICAgIHJldHVybiBuZXcgQXVkaW8odHJhY2sucHJldmlld191cmwpO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRBdWRpbyh0cmFja0lEKSB7XG4gICAgYXVkaW8gPSBhd2FpdCBnZXRHYW1lVHJhY2tBdWRpbyh0cmFja0lEKTtcbiAgICBhdWRpby5hZGRFdmVudExpc3RlbmVyKFwidGltZXVwZGF0ZVwiLCB1cGRhdGVQcm9ncmVzc0Jhcik7XG59XG5cbiAgLy8gQWxsb3cgdXNlciB0byBza2lwIG1pZC10dXJuIGFuZCBoYXZlIHRoZSBhdWRpbyBrZWVwIHBsYXlpbmdcbmV4cG9ydCBmdW5jdGlvbiBhZGp1c3RBdWRpb1RpbWVvdXQoKSB7XG4gICAgY29uc3QgcGxheUR1cmF0aW9uID0gYWxsb3dlZER1cmF0aW9uc1tnZXRDdXJyZW50VHVybigpLTFdO1xuICAgIGVuZFRpbWUgPSBNYXRoLm1pbihhdWRpby5kdXJhdGlvbiwgYXVkaW8uY3VycmVudFRpbWUgKyBwbGF5RHVyYXRpb24pO1xuICAgIGNvbnNvbGUubG9nKFwiTmV3IGVuZCB0aW1lXCIsIGVuZFRpbWUpO1xuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJRCk7XG4gICAgdGltZW91dElEID0gc2V0VGltZW91dChwYXVzZUF1ZGlvLCAoZW5kVGltZSAtIGF1ZGlvLmN1cnJlbnRUaW1lKSAqIDEwMDApO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBwbGF5QXVkaW8oKSB7XG4gICAgY29uc29sZS5sb2coXCJwbGF5QXVkaW8gY2FsbGVkXCIpO1xuXG4gICAgY29uc3QgcGxheUR1cmF0aW9uID0gYWxsb3dlZER1cmF0aW9uc1tnZXRDdXJyZW50VHVybigpLTFdO1xuICAgIGVuZFRpbWUgPSBNYXRoLm1pbihhdWRpby5kdXJhdGlvbiwgcGxheUR1cmF0aW9uKTtcbiAgICBjb25zb2xlLmxvZyhcIkVuZCB0aW1lXCIsIGVuZFRpbWUpO1xuXG4gICAgYXVkaW8uY3VycmVudFRpbWUgPSAwO1xuICAgIGF1ZGlvLnBsYXkoKTtcblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SUQpO1xuICAgIHRpbWVvdXRJRCA9IHNldFRpbWVvdXQocGF1c2VBdWRpbywgZW5kVGltZSAqIDEwMDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF1c2VBdWRpbygpIHtcbiAgICBhdWRpby5wYXVzZSgpO1xuICAgIC8vIGNsZWFyVGltZW91dCh0aW1lb3V0SUQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBdWRpb1BhdXNlZCgpIHtcbiAgICByZXR1cm4gYXVkaW8ucGF1c2VkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXVkaW9DdXJyZW50VGltZSgpIHtcbiAgICByZXR1cm4gYXVkaW8uY3VycmVudFRpbWU7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHNhdmVHYW1lU3RhdGUoZ3Vlc3Nlcykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lU3RhdGUnLCBKU09OLnN0cmluZ2lmeShndWVzc2VzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkR2FtZVN0YXRlKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdGUnKSk7XG59IiwiaW1wb3J0IHsgZ2V0VG9kYXlzVHJhY2tJRCB9IGZyb20gXCIuL3RyYWNrU2VsZWN0aW9uXCI7XG5pbXBvcnQgeyBzYXZlR2FtZVN0YXRlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyBpbml0QXVkaW8gfSBmcm9tIFwiLi9hdWRpb01hbmFnZXJcIjtcblxuZXhwb3J0IGNvbnN0IGFsbG93ZWREdXJhdGlvbnMgPSBbMSwgMiwgNCwgNywgMTEsIDE2XTtcblxubGV0IGdhbWVTdGF0ZSA9IHtcbiAgY3VycmVudFR1cm46IDEsXG4gIGd1ZXNzZXM6IFtdLFxuICB0cmFja0lEOiBudWxsLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwTmV3R2FtZSgpIHtcblxuICAvLyBDdXJlbnRseSBqdXN0IHB1bGxzIHRoZSBmaXJzdCBvbmUuIEV2ZW50dWFsbHkgaXQgd2lsbCBjYWxjIGl0IG9uIGRhdGUuXG4gIGNvbnN0IHRvZGF5c1RyYWNrSUQgPSBnZXRUb2RheXNUcmFja0lEKCk7XG5cbiAgZ2FtZVN0YXRlLmN1cnJlbnRUdXJuID0gMTtcbiAgZ2FtZVN0YXRlLmd1ZXNzZXMgPSBbXTtcbiAgZ2FtZVN0YXRlLnRyYWNrSUQgPSB0b2RheXNUcmFja0lEO1xuXG4gIGluaXRBdWRpbyh0b2RheXNUcmFja0lEKTtcblxuICBjb25zb2xlLmxvZyhcIk5ldyBnYW1lIHN0YXRlXCIsIGdhbWVTdGF0ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbXBvcnRHYW1lU3RhdGUoZ2FtZVN0YXRlKSB7XG4gIGNvbnNvbGUubG9nKGdhbWVTdGF0ZSk7XG5cbiAgLy8gVGhpcyB3aWxsIGJlIHJlcXVpcmVkIGhlcmUgb25jZSB0aGlzIGZ1bmN0aW9uIGlzIHdyaXR0ZW5cbiAgLy8gaW5pdEF1ZGlvKGdhbWVTdGF0ZS50cmFja0lEKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrR3Vlc3MoZ3Vlc3NlZFRyYWNrSUQsIGdhbWVUcmFja0lEKSB7XG4gIGNvbnNvbGUubG9nKFwiR3Vlc3M6XCIsIGd1ZXNzZWRUcmFja0lEKTtcbiAgY29uc29sZS5sb2coXCJHYW1lIHRyYWNrOlwiLCBnYW1lVHJhY2tJRCk7XG5cbiAgcmV0dXJuIGd1ZXNzZWRUcmFja0lEID09PSBnYW1lVHJhY2tJRDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVOZXdHdWVzcyhndWVzcykge1xuICBjb25zb2xlLmxvZyhcIk5ldyBnYW1lIHN0YXRlIGJlZm9yZSBsYXRlc3QgZ3Vlc3NcIiwgZ2FtZVN0YXRlKTtcblxuICBnYW1lU3RhdGUuZ3Vlc3Nlcy5wdXNoKGd1ZXNzKTtcbiAgbW92ZVRvTmV4dFR1cm4oKTtcblxuICBhd2FpdCBzYXZlR2FtZVN0YXRlKGdhbWVTdGF0ZSk7IC8vIEF3YWl0IHRoZSBzYXZlR2FtZVN0YXRlIGZ1bmN0aW9uXG5cbiAgY29uc29sZS5sb2coXCJOZXcgZ2FtZSBzdGF0ZSBhZnRlciBsYXRlc3QgZ3Vlc3NcIiwgZ2FtZVN0YXRlKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkU2tpcHBlZFR1cm5Ub0dhbWVTdGF0ZSgpIHtcbiAgLy8gU2F2ZSBhIG51bGwgZ3Vlc3MgdG8gcmVwcmVzZW50IGEgc2tpcHBlZCB0dXJuXG4gIGdhbWVTdGF0ZS5ndWVzc2VzLnB1c2gobnVsbCk7XG5cbiAgaW5jcmVtZW50Q3VycmVudFR1cm5JbkdhbWVTdGF0ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5jcmVtZW50Q3VycmVudFR1cm5JbkdhbWVTdGF0ZSgpIHtcblxuICAvLyBUT0RPOiBJZiBmaW5hbCB0dXJuLCBtb3ZlIHRvIGdhbWUgcmVzdWx0cyBzY3JlZW5cblxuICBnYW1lU3RhdGUuY3VycmVudFR1cm4rKztcbiAgc2F2ZUdhbWVTdGF0ZShnYW1lU3RhdGUpO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudFR1cm4gPSAoKSA9PiBnYW1lU3RhdGUuY3VycmVudFR1cm47XG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudFRyYWNrSUQgPSAoKSA9PiBnYW1lU3RhdGUudHJhY2tJRDtcblxuXG5cblxuIiwiaW1wb3J0IFNwb3RpZnlUb2tlbk1hbmFnZXIgZnJvbSAnLi9zcG90aWZ5VG9rZW5NYW5hZ2VyLmpzJztcblxuY29uc3QgY2xpZW50SWQgPSBcIjc0YWM5NDljYTU4NzQwMjQ4NGRjZWYxNDA4YjRkN2YzXCI7XG5jb25zdCBjbGllbnRTZWNyZXQgPSBcIjMxM2EyYzE1ZmM4NDRjYTViYzIyNzU1NTcyODc0ZWU3XCI7XG5cbi8vIGNvbnN0IGNsaWVudElkID0gcHJvY2Vzcy5lbnYuU1BPVElGWV9DTElFTlRfSUQ7XG4vLyBjb25zdCBjbGllbnRTZWNyZXQgPSBwcm9jZXNzLmVudi5TUE9USUZZX0NMSUVOVF9TRUNSRVQ7XG5cbmNvbnN0IHRva2VuTWFuYWdlciA9IG5ldyBTcG90aWZ5VG9rZW5NYW5hZ2VyKGNsaWVudElkLCBjbGllbnRTZWNyZXQpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoVHJhY2soc2VhcmNoVGVybSwgbWFya2V0ID0gJ0dCJykge1xuXG4gICAgY29uc29sZS5sb2coXCJTdGFydGluZyBTcG90aWZ5IHNlYXJjaC4uLlwiKTtcblxuICAgIC8vIFNlYXJjaCBmb3IgdHJhY2sgZmlyc3QuIElmIG5vIHJlc3VsdHMsIHNlYXJjaCBhcnRpc3Q/IEJvdGggYW55d2F5P1xuXG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBhd2FpdCB0b2tlbk1hbmFnZXIuZ2V0QWNjZXNzVG9rZW4oKTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxuICAgIH07XG5cbiAgICBhc3luYyBmdW5jdGlvbiBzZWFyY2goc2VhcmNoVGVybSkge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgICAgICAgIHE6IHNlYXJjaFRlcm0sXG4gICAgICAgICAgICB0eXBlOiAndHJhY2snLFxuICAgICAgICAgICAgbGltaXQ6IDEwLFxuICAgICAgICAgICAgbWFya2V0XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL3NlYXJjaD8ke3BhcmFtc31gLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLnRyYWNrcy5pdGVtcyk7XG4gICAgICAgICAgICByZXR1cm4gZGF0YS50cmFja3MuaXRlbXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGF3YWl0IHNlYXJjaChzZWFyY2hUZXJtKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRyYWNrQnlJRCh0cmFja0lELCBtYXJrZXQgPSAnR0InKSB7XG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBhd2FpdCB0b2tlbk1hbmFnZXIuZ2V0QWNjZXNzVG9rZW4oKTtcbiAgXG4gICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxuICAgIH07XG4gIFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL3RyYWNrcy8ke3RyYWNrSUR9P21hcmtldD0ke21hcmtldH1gLCB7XG4gICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgIH0pO1xuICBcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfVxuICBcbiAgICByZXR1cm4gbnVsbDtcbiAgfSAgIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BvdGlmeVRva2VuTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY2xpZW50SWQsIGNsaWVudFNlY3JldCkge1xuICAgICAgdGhpcy5jbGllbnRJZCA9IGNsaWVudElkO1xuICAgICAgdGhpcy5jbGllbnRTZWNyZXQgPSBjbGllbnRTZWNyZXQ7XG4gICAgICB0aGlzLmFjY2Vzc1Rva2VuID0gbnVsbDtcbiAgICAgIHRoaXMuZXhwaXJhdGlvblRpbWUgPSBudWxsO1xuICAgIH1cbiAgXG4gICAgYXN5bmMgcmVxdWVzdEFjY2Vzc1Rva2VuKGNsaWVudElkLCBjbGllbnRTZWNyZXQpIHtcbiAgICAgIGNvbnN0IHRva2VuRW5kcG9pbnQgPSBcImh0dHBzOi8vYWNjb3VudHMuc3BvdGlmeS5jb20vYXBpL3Rva2VuXCI7XG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IGJvZHkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgICAgZ3JhbnRfdHlwZTogXCJjbGllbnRfY3JlZGVudGlhbHNcIixcbiAgICAgICAgY2xpZW50X2lkOiBjbGllbnRJZCxcbiAgICAgICAgY2xpZW50X3NlY3JldDogY2xpZW50U2VjcmV0LFxuICAgICAgfSk7XG4gIFxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0b2tlbkVuZHBvaW50LCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgIGJvZHk6IGJvZHksXG4gICAgICB9KTtcbiAgXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGRhdGEuYWNjZXNzX3Rva2VuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIG9idGFpbiBhY2Nlc3MgdG9rZW5cIik7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBhc3luYyBnZXRBY2Nlc3NUb2tlbigpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICBpZiAoIXRoaXMuYWNjZXNzVG9rZW4gfHwgY3VycmVudFRpbWUgPj0gdGhpcy5leHBpcmF0aW9uVGltZSkge1xuICAgICAgICB0aGlzLmFjY2Vzc1Rva2VuID0gYXdhaXQgdGhpcy5yZXF1ZXN0QWNjZXNzVG9rZW4odGhpcy5jbGllbnRJZCwgdGhpcy5jbGllbnRTZWNyZXQpO1xuICAgICAgICBjb25zdCBleHBpcmVzSW5NaWxsaXNlY29uZHMgPSAzNjAwICogMTAwMDsgLy8gMSBob3VyIGluIG1pbGxpc2Vjb25kc1xuICAgICAgICB0aGlzLmV4cGlyYXRpb25UaW1lID0gY3VycmVudFRpbWUgKyBleHBpcmVzSW5NaWxsaXNlY29uZHM7XG4gICAgICB9XG4gIFxuICAgICAgcmV0dXJuIHRoaXMuYWNjZXNzVG9rZW47XG4gICAgfVxuICB9IiwiY29uc3QgdHJhY2tTZWxlY3Rpb24gPSBbJzdKMXV4d254ZlFMdTRBUGljRTVSbmonLFxuJzJkbEVkREVtdVFzcmNYYUFMM1puemknLFxuJzYyTEpGYVlpaHNkVnJya2dVT0pDMDUnLFxuJzBIRW1uQVVUOFBIem5JQUFtVlhxRkonLFxuJzdGd0J0Y2VjbWxwYzFzTHlTUFhlR0UnLFxuJzEwemx3UjdrdlZiRDlPQmtlWldyM0wnLFxuJzJXZmFPaU1rQ3Z5N0Y1ZmNwMnpaOEwnLFxuJzc3Tk5aUVNxekxOcWgyQTlKaExSa2cnLFxuJzA3ajVSTEpId3NtNGNVYjNHR29XM3cnLFxuJzIyc0x1SlljdlpPU29MTFJZZXYxczUnLFxuJzNCb3ZkemZhWDRqYjVLRlF3b1BmQXcnLFxuJzM0eDZoRUpnR0FPUXZtbE1xbDVJZ2UnLFxuJzNDU3B6a29MMVhnREJaMXE5YURDVVYnLFxuJzI4bzhtMW85Ukd0eVNibVFKdEF2eW0nLFxuJzFLc0k4TkVlQW5hOFpJZG9qSTNGaVQnLFxuJzJvbFZtMWxIaWNwdmVNQW80QVVEUkInLFxuJzM5bFNlcW55alpKZWpSdWFSRWZ5TEwnLFxuJzVQSkJyd0tIN1NkQnlHdERDQkdKd2InLFxuJzQ0aE9HZzF1RmcxWEpaR1pZTndZbU0nLFxuJzRhS0lzNXQ5VHFQNTlidGxDR1ByZ3cnLFxuJzBBNFBadWVwVGNJUVZ2QTVtN1IwTTEnLFxuJzdnN3R5Yjh6TTlVZUtzZHZvc1c5VzMnLFxuJzRvOUtqN29ua2x0NnhiWWwzalZBcnAnLFxuJzBiQlZSc0JiZ256Vzh3bWRsRDdBcHEnLFxuJzVlMWVuVDBOUFhQWmtSOEYzUjU4YlknLFxuJzVJa2RoOTFEZEVxNDRjZnBJS1JzTHcnLFxuJzJYMjQyRDhWaFRpa1dVVDFpMW5ZSkMnLFxuJzJUQWZHaXJOSmUwcVVPZVJtV3NTeWsnLFxuJzNtdkt2aWVyRkFWR0NkZ2R4NEVONFEnLFxuJzZIWjY3VklteHFyOGFNQkVFaGJsemYnLFxuJzZnbHNNV0lNSXhRNEJlZHpMcUdWaTQnLFxuJzNMSTRNbWliVGtYSDVjR3BDR1pneXcnLFxuJzZuVGlJaExtUTNGV2h2ckdhZncyemonLFxuJzNkOURDaHJkYzZCT2VGc2JyWjNJczAnLFxuJzRPZUJabEVhTFd5SldhWWw0VXZoVDknLFxuJzVUR1lvNE1yTktxSXZKcWd4MTM0cHknLFxuJzQzZUJnWVJUbXU1QkpuQ0pEQlU1SGInLFxuJzZJNHNuTHJWT3JKc0xkZDQzaXNjMjcnLFxuJzRzejFOZzJDZ2lkZnFxaXkwcE5MNlInLFxuJzU0WDc4ZGlTTG9VREkzam9DMmJqTXonLFxuJzBRZUk3OXNwMXZTOEwzSmdwRU83bUQnXTtcblxuLy8gLy8gSW4gdGhpcyBmdW5jdGlvbiwgSSdtIGdvaW5nIHRvIHNldCB1cCBhIFwic3RhcnQgZGF0ZVwiIGZvciB0aGUgYXBwLlxuLy8gLy8gSSdsbCBiYXNlIHdoaWNoIHRyYWNrIGlzIHRoZSB0cmFjayBvZiB0aGUgZGF5IGZyb20gdGhlIGRpc3RhbmNlIGluIHRpbWUgZnJvbSB0aGlzIGRhdGVcblxuXG5mdW5jdGlvbiBnZXRDdXJyZW50RGF5KHN0YXJ0RGF0ZSkge1xuICAgIC8vIEdldCB0aGUgY3VycmVudCBkYXRlIGluIGxvY2FsIHRpbWVcbiAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICBcbiAgICAvLyBTZXQgYm90aCBkYXRlcyB0byBtaWRuaWdodCAoc3RhcnQgb2YgdGhlIGRheSkgaW4gbG9jYWwgdGltZVxuICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKG5ldyBEYXRlKHN0YXJ0RGF0ZSkuc2V0SG91cnMoMCwwLDAsMCkpO1xuICAgIGN1cnJlbnREYXRlID0gbmV3IERhdGUoY3VycmVudERhdGUuc2V0SG91cnMoMCwwLDAsMCkpO1xuICBcbiAgICAvLyBDb252ZXJ0IGJvdGggZGF0ZXMgdG8gbWlsbGlzZWNvbmRzXG4gICAgbGV0IHN0YXJ0RGF0ZVRpbWUgPSBzdGFydERhdGUuZ2V0VGltZSgpO1xuICAgIGxldCBjdXJyZW50RGF0ZVRpbWUgPSBjdXJyZW50RGF0ZS5nZXRUaW1lKCk7XG4gIFxuICAgIC8vIENhbGN1bGF0ZSB0aGUgZGlmZmVyZW5jZSBpbiBtaWxsaXNlY29uZHNcbiAgICBsZXQgZGlmZmVyZW5jZUluVGltZSA9IGN1cnJlbnREYXRlVGltZSAtIHN0YXJ0RGF0ZVRpbWU7XG4gIFxuICAgIC8vIENvbnZlcnQgdGhlIGRpZmZlcmVuY2UgaW4gbWlsbGlzZWNvbmRzIHRvIGRheXNcbiAgICBsZXQgZGlmZmVyZW5jZUluRGF5cyA9IE1hdGguZmxvb3IoZGlmZmVyZW5jZUluVGltZSAvICgxMDAwICogMzYwMCAqIDI0KSk7XG4gIFxuICAgIHJldHVybiBkaWZmZXJlbmNlSW5EYXlzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9kYXlzVHJhY2tJRChzdGFydERhdGUpIHtcblxuICAgIC8vIEZvciBub3csIHdlIGp1c3QgZ2V0IHRyYWNrIDBcbiAgICByZXR1cm4gdHJhY2tTZWxlY3Rpb25bMF07XG5cbiAgICByZXR1cm4gdHJhY2tTZWxlY3Rpb25bZ2V0Q3VycmVudERheShzdGFydERhdGUpXTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlcy5jc3MnXG5cbmltcG9ydCB7IHNldHVwTmV3R2FtZSwgaW1wb3J0R2FtZVN0YXRlLCBnZXRDdXJyZW50VHJhY2ssIGFsbG93ZWREdXJhdGlvbnMgfSBmcm9tICcuL3NoZWFyZGxlJztcbmltcG9ydCB7IGxvYWRHYW1lU3RhdGUgfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XG5cbmltcG9ydCB7IGNyZWF0ZU1hcmtlcnMsIGluaXRVSSB9IGZyb20gJy4vVUknO1xuXG4vLyBjb25zdCBnYW1lTG9hZGVkID0gbG9hZEdhbWVTdGF0ZSgpO1xuXG4vLyBpZiAoZ2FtZUxvYWRlZCkge1xuLy8gICAgIGNvbnNvbGUubG9nKFwiR2FtZSBzdWNjZXNzZnVsbHkgbG9hZGVkXCIpO1xuXG4vLyAgICAgLy8gaW1wb3J0R2FtZVN0YXRlKGdhbWVMb2FkZWQpO1xuXG4vLyAgICAgLy8gTG9hZGluZyBuZXcgZ2FtZSBhbnl3YXkgYXMgSSBjYW4ndCBiZSBib3RoZXJlZCB0byBkZWxldGUgbG9jYWxTdG9yYWdlIGV2ZXJ5IHRpbWVcbi8vICAgICBzZXR1cE5ld0dhbWUoKTtcblxuLy8gfSBlbHNlIHtcbi8vICAgICBjb25zb2xlLmxvZyhcIlN0YXJ0aW5nIG5ldyBnYW1lXCIpO1xuLy8gICAgIHNldHVwTmV3R2FtZSgpO1xuLy8gfVxuXG5cbnNldHVwTmV3R2FtZSgpO1xuXG4vLyBUaGVzZSBwcm9iYWJseSBzaG91bGRuJ3QgYmUgbmVlZGVkP1xuaW5pdFVJKCk7XG5jcmVhdGVNYXJrZXJzKGFsbG93ZWREdXJhdGlvbnMpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==