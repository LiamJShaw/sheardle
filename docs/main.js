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
/* harmony export */   "disableSubmitButton": () => (/* binding */ disableSubmitButton),
/* harmony export */   "enableSubmitButton": () => (/* binding */ enableSubmitButton)
/* harmony export */ });
function addGuessToBoard(guess, turn) {
    const guessContainer = document.querySelector('.guess-container');
    const guessDiv = guessContainer.children[turn - 1];
    
    // Create the red 'x' icon
    const redXIcon = document.createElement('span');
    redXIcon.textContent = 'x';
    redXIcon.classList.add('red-x-icon');
    
    // Add the red 'x' icon to the guess div
    guessDiv.appendChild(redXIcon);

    // Add the track info text to the guess div
    const guessText = document.createElement('p');
    guessText.textContent = guess;
    guessDiv.appendChild(guessText);
  }
  
  function addSkippedTurnToBoard(turn) {
    const guessContainer = document.querySelector('.guess-container');
    const guessDiv = guessContainer.children[turn - 1]; // turn - 1 because array index starts from 0
    
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
    searchBox.textContent = '';
  }


// Submit button

function enableSubmitButton() {
    const submitButton = document.querySelector('.submit');
    submitButton.removeAttribute("disabled");
  }
  
  function disableSubmitButton() {
    const submitButton = document.querySelector('.submit');
    submitButton.setAttribute("disabled", "");
  }  

// Search results
const resultsContainer = document.getElementById('results-container');
document.addEventListener('click', (event) => {
  // Check if the click target is outside of the .results-container
  if (!event.target.closest('#results-container')) {
    resultsContainer.style.display = 'none';
  }
});


/***/ }),

/***/ "./src/sheardle.js":
/*!*************************!*\
  !*** ./src/sheardle.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNewGameTrack": () => (/* binding */ getNewGameTrack),
/* harmony export */   "newGame": () => (/* binding */ newGame)
/* harmony export */ });
/* harmony import */ var _spotify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spotify */ "./src/spotify.js");


function newGame(track) {

}

function getNewGameTrack() {
    return (0,_spotify__WEBPACK_IMPORTED_MODULE_0__.searchTrack)("enter shikari - kiss for the whole world");
}

/***/ }),

/***/ "./src/spotify.js":
/*!************************!*\
  !*** ./src/spotify.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
/* harmony import */ var _spotify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spotify */ "./src/spotify.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ "./src/UI.js");
/* harmony import */ var _sheardle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sheardle */ "./src/sheardle.js");








const playButton = document.querySelector(".play-button");
const skipButton = document.querySelector(".skip");
const seekBarBackground = document.querySelector(".seek-bar-background");
const progressBar = document.querySelector(".seek-bar-progress");
const elapsedTime = document.querySelector(".elapsed-time");


// Get track for game. Move to Sheardle.JS

const gameTrack = (0,_sheardle__WEBPACK_IMPORTED_MODULE_3__.getNewGameTrack)();
let audio;

gameTrack.then(response => {
    const previewURL = response[0].preview_url;

    audio = new Audio(previewURL);

    audio.addEventListener("timeupdate", () => {
        const playDuration = allowedDurations[currentTurn - 1];
        const progressPercentage = (audio.currentTime / playDuration) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    
        const minutes = Math.floor(audio.currentTime / 60);
        const seconds = Math.floor(audio.currentTime % 60).toString().padStart(2, "0");
        elapsedTime.textContent = `${minutes}:${seconds}`;
    });

});



const allowedDurations = [1, 2, 4, 7, 11, 16];

let currentTurn = 1;
let endTime; // endTime variable outside the event listener for skipping while playing
let timeoutID; // Declare timeoutID variable to store the setTimeout identifier

let selectedTrack;

function updateSeekBarBackground(turn) {
    const playDuration = allowedDurations[turn - 1];
    const percentage = (playDuration / 16) * 100;
    seekBarBackground.style.width = `${percentage}%`;
}

function updateProgressBar() {
    const progressPercentage = ((audio.currentTime / 16) * 100 + 1);
    progressBar.style.width = `${progressPercentage}%`;

    if (!audio.paused) {
        requestAnimationFrame(updateProgressBar);
    }
}

playButton.addEventListener("click", () => {
    if (audio.paused) {
        const playDuration = allowedDurations[currentTurn - 1];
        endTime = Math.min(audio.duration, playDuration);

        audio.currentTime = 0;
        audio.play();
        playButton.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';

        requestAnimationFrame(updateProgressBar);

        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            audio.pause();
            playButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
        }, endTime * 1000);
    } else {
        audio.pause();
        playButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    }
});



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

const markersContainer = document.querySelector(".seek-bar-markers");
allowedDurations.forEach(duration => {
    const marker = createMarker(duration + 0.1);
    markersContainer.appendChild(marker);
});

// Initialize the seek bar background for the first turn
updateSeekBarBackground(currentTurn);
updateSkipButtonText();


// Search sengs
async function searchSpotify(query) {

    console.log("Spotify search: ", query);
    return;

    // You need to bring the Spotify code into this proj from OTD next

    const accessToken = 'YOUR_SPOTIFY_ACCESS_TOKEN';
    const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=5`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });
  
    const data = await response.json();
    const searchResults = document.querySelector('.search-results');
    searchResults.innerHTML = '';
  
    data.tracks.items.forEach((item) => {
      const resultItem = document.createElement('div');
      resultItem.classList.add('result-item');
      resultItem.textContent = `${item.name} - ${item.artists[0].name}`;
      resultItem.addEventListener('click', () => {
        // Handle the result selection here.
        console.log('Selected:', item);
      });
  
      searchResults.appendChild(resultItem);
    });
  }

function debounce(func, wait, immediate) {

    let timeout;

    return function() {
        const context = this, args = arguments;

        const later = function() {
            timeout = null;

            if (!immediate) {
                func.apply(context, args);
            }

        };
        
        const callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if (callNow) {
            func.apply(context, args);
        }
    };
}

const searchInput = document.querySelector('.spotify-search');

// No debounce needed for disabling the button
searchInput.addEventListener('input', () => {
    (0,_UI__WEBPACK_IMPORTED_MODULE_2__.disableSubmitButton)();
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
              const selectedTrackId = event.target.getAttribute('data-track-id');
              console.log('Selected track ID:', selectedTrackId);
  
              // Update the search input with the selected result and hide the results container
              searchInput.value = event.target.textContent;
              resultsContainer.style.display = 'none';
              (0,_UI__WEBPACK_IMPORTED_MODULE_2__.enableSubmitButton)();
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
  

// Submit button

const submitButton = document.querySelector('.submit');

submitButton.addEventListener('click', () => {

    selectedTrack = searchInput.value;

    (0,_UI__WEBPACK_IMPORTED_MODULE_2__.addGuessToBoard)(selectedTrack, currentTurn);
    currentTurn++;

});

// Skip button

skipButton.addEventListener("click", () => {
    if (currentTurn < allowedDurations.length) {
        (0,_UI__WEBPACK_IMPORTED_MODULE_2__.addSkippedTurnToBoard)(currentTurn);
        currentTurn++;
    }

    if (!audio.paused) {
        const playDuration = allowedDurations[currentTurn - 1];
        endTime = Math.min(audio.duration, playDuration);
        const remainingTime = (endTime - audio.currentTime) * 1000;

        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            audio.pause();
            playButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
        }, remainingTime);
    }

    updateSeekBarBackground(currentTurn);
    updateSkipButtonText();
});

// Function to update the skip button text
function updateSkipButtonText() {
    if (currentTurn < allowedDurations.length) {
        const skipSeconds = allowedDurations[currentTurn] - allowedDurations[currentTurn - 1];
        skipButton.textContent = `SKIP (+${skipSeconds}s)`;
    } else {
        skipButton.textContent = "SKIP";
    }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSSxvREFBZTtBQUNuQjs7QUFFQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQSxRQUFRLDBEQUFxQjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFlBQVk7QUFDdkQsTUFBTTtBQUNOO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vc3JjL1VJLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vc3JjL3NoZWFyZGxlLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vc3JjL3Nwb3RpZnkuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9zcmMvc3BvdGlmeVRva2VuTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaGVhcmRsZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zaGVhcmRsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zaGVhcmRsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NoZWFyZGxlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDkwJTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXG4gICAgb3ZlcmZsb3c6IG5vbmU7XFxuICB9XFxuICBcXG4gIC50aXRsZSB7XFxuICAgIC8qIGZvbnQtc2l6ZTogMzJweDsgKi9cXG4gIH1cXG4gIFxcbiAgLmluZm8sXFxuICAuaG93LXRvLXBsYXkge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIFxcbiAgLnBsYXktY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgXFxuICB9XFxuICBcXG4gIC5zZWVrLWJhci1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICB9XFxuICBcXG4gIC5zZWVrLWJhciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmZmZmY7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uc2Vlay1iYXItYmFja2dyb3VuZCB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcXG59XFxuXFxuLnNlZWstYmFyLW1hcmtlcnMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5zZWVrLWJhci1wcm9ncmVzcyB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFEQjk1NDtcXG59XFxuXFxuXFxuICAucHJvZ3Jlc3Mge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxREI5NTQ7XFxuICAgIHdpZHRoOiAwO1xcbn1cXG5cXG4gIFxcbiAgLnNlY3Rpb24ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODsgLyogTGlnaHRlciBncmF5IGJhY2tncm91bmQgY29sb3IgKi9cXG4gIH1cXG4gIFxcbiAgLnBsYXktYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBBZGQgcG9zaXRpb24gcmVsYXRpdmUgKi9cXG4gIH1cXG5cXG4gIC5wbGF5LWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDA7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDsgLyogQWRqdXN0IHRoZSBpY29uIHNpemUgaWYgbmVjZXNzYXJ5ICovXFxuICB9XFxuICBcXG4gIC5lbGFwc2VkLXRpbWUsXFxuICAudG90YWwtdGltZSB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAvKiBLZWVwIHBvc2l0aW9uIGFic29sdXRlICovXFxuICB9XFxuICBcXG4gIC5lbGFwc2VkLXRpbWUge1xcbiAgICBsZWZ0OiAwOyAvKiBLZWVwIGxlZnQgcG9zaXRpb25pbmcgKi9cXG4gIH1cXG4gIFxcbiAgLnRvdGFsLXRpbWUge1xcbiAgICByaWdodDogMDsgLyogS2VlcCByaWdodCBwb3NpdGlvbmluZyAqL1xcbiAgfVxcbiAgXFxuICAuc2VhcmNoLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlOyAvKiBDaGFuZ2UgdG8gMTAwJSAqL1xcbiAgICBkaXNwbGF5OiBmbGV4OyAvKiBBZGQgZGlzcGxheSBmbGV4ICovXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBBZGQganVzdGlmeS1jb250ZW50IGNlbnRlciAqL1xcbiAgfVxcbiAgXFxuICAuc3BvdGlmeS1zZWFyY2gge1xcbiAgICB3aWR0aDogOTAlOyAvKiBDaGFuZ2UgdG8gOTAlICovXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgfVxcbiAgXFxuICAuYnV0dG9ucy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gIH1cXG4gIFxcbiAgXFxuICAuc3VibWl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFEQjk1NDtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gIH1cXG5cXG4gIC5za2lwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICB9XFxuXFxuICAuc2tpcCxcXG4gIC5zdWJtaXQge1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcXG4gIH1cXG4gIFxcbiAgYnV0dG9uW2Rpc2FibGVkXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIH1cXG4gIFxcblxcbi8qIFNvbmcgU2VhcmNoICovXFxuXFxuLnNlYXJjaC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIEFkZCBwb3NpdGlvbiByZWxhdGl2ZSAqL1xcbiAgICB3aWR0aDogMTAwJTsgLyogTWF0Y2ggdGhlIHdpZHRoIG9mIHRoZSBzZWFyY2ggaW5wdXQgKi9cXG59XFxuXFxuLnJlc3VsdHMtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAyYjtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgLyogbGVmdDogMDsgKi9cXG4gICAgdG9wOiBjYWxjKDEwMCUgKyA1cHgpO1xcbiAgfVxcbiAgXFxuICBcXG4gIC5yZXN1bHQtaXRlbSB7XFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmZmZmOyAvKiBXaGl0ZSB0ZXh0IGNvbG9yICovXFxuICB9XFxuICBcXG4gIC5yZXN1bHQtaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7IC8qIExpZ2h0ZXIgZ3JheSBiYWNrZ3JvdW5kIGNvbG9yIGZvciBob3ZlciAqL1xcbiAgfVxcbiAgXFxuXFxuICAvKiBHdWVzcyBjb250YWluZXIgKi9cXG5cXG4gIC8qIC5ndWVzcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgfVxcbiAgXFxuICAuZ3Vlc3Mge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmNjI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG4gIC5yZWQteC1pY29uIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgfVxcbiAgICovXFxuXFxuICAgLyogR3Vlc3MgY29udGFpbmVyICovXFxuXFxuLyogLmd1ZXNzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICB9XFxuICAgKi9cXG4gIC5ndWVzcyB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjYyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7IC8qIEFkZCB0aGlzIGxpbmUgZm9yIGhvcml6b250YWwgYWxpZ25tZW50ICovXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIEFkZCB0aGlzIGxpbmUgZm9yIHZlcnRpY2FsIGFsaWdubWVudCAqL1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDsgLyogQWRkIHRoaXMgbGluZSB0byBzZXQgZm9udCBzaXplICovXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7IC8qIEFkZCB0aGlzIGxpbmUgdG8gc2V0IGZvbnQgd2VpZ2h0ICovXFxuICAgIGNvbG9yOiAjZmZmZmZmYWE7IC8qIEFkZCB0aGlzIGxpbmUgdG8gc2V0IGZvbnQgY29sb3IgKi9cXG4gIH1cXG4gIFxcbiAgLnJlZC14LWljb24ge1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNzUpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICB9XFxuICBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtBQUMzQjs7QUFFQTtJ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O0lBUUk7RUFDRjtJQUNFLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhLEVBQUUsMkNBQTJDO0lBQzFELG1CQUFtQixFQUFFLHlDQUF5QztJQUM5RCxrQkFBa0I7SUFDbEIsZUFBZSxFQUFFLG1DQUFtQztJQUNwRCxnQkFBZ0IsRUFBRSxxQ0FBcUM7SUFDdkQsZ0JBQWdCLEVBQUUsb0NBQW9DO0VBQ3hEOztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDkwJTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXG4gICAgb3ZlcmZsb3c6IG5vbmU7XFxuICB9XFxuICBcXG4gIC50aXRsZSB7XFxuICAgIC8qIGZvbnQtc2l6ZTogMzJweDsgKi9cXG4gIH1cXG4gIFxcbiAgLmluZm8sXFxuICAuaG93LXRvLXBsYXkge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIFxcbiAgLnBsYXktY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgXFxuICB9XFxuICBcXG4gIC5zZWVrLWJhci1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICB9XFxuICBcXG4gIC5zZWVrLWJhciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmZmZmY7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uc2Vlay1iYXItYmFja2dyb3VuZCB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcXG59XFxuXFxuLnNlZWstYmFyLW1hcmtlcnMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5zZWVrLWJhci1wcm9ncmVzcyB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFEQjk1NDtcXG59XFxuXFxuXFxuICAucHJvZ3Jlc3Mge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxREI5NTQ7XFxuICAgIHdpZHRoOiAwO1xcbn1cXG5cXG4gIFxcbiAgLnNlY3Rpb24ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODsgLyogTGlnaHRlciBncmF5IGJhY2tncm91bmQgY29sb3IgKi9cXG4gIH1cXG4gIFxcbiAgLnBsYXktYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBBZGQgcG9zaXRpb24gcmVsYXRpdmUgKi9cXG4gIH1cXG5cXG4gIC5wbGF5LWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDA7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDsgLyogQWRqdXN0IHRoZSBpY29uIHNpemUgaWYgbmVjZXNzYXJ5ICovXFxuICB9XFxuICBcXG4gIC5lbGFwc2VkLXRpbWUsXFxuICAudG90YWwtdGltZSB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAvKiBLZWVwIHBvc2l0aW9uIGFic29sdXRlICovXFxuICB9XFxuICBcXG4gIC5lbGFwc2VkLXRpbWUge1xcbiAgICBsZWZ0OiAwOyAvKiBLZWVwIGxlZnQgcG9zaXRpb25pbmcgKi9cXG4gIH1cXG4gIFxcbiAgLnRvdGFsLXRpbWUge1xcbiAgICByaWdodDogMDsgLyogS2VlcCByaWdodCBwb3NpdGlvbmluZyAqL1xcbiAgfVxcbiAgXFxuICAuc2VhcmNoLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlOyAvKiBDaGFuZ2UgdG8gMTAwJSAqL1xcbiAgICBkaXNwbGF5OiBmbGV4OyAvKiBBZGQgZGlzcGxheSBmbGV4ICovXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBBZGQganVzdGlmeS1jb250ZW50IGNlbnRlciAqL1xcbiAgfVxcbiAgXFxuICAuc3BvdGlmeS1zZWFyY2gge1xcbiAgICB3aWR0aDogOTAlOyAvKiBDaGFuZ2UgdG8gOTAlICovXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgfVxcbiAgXFxuICAuYnV0dG9ucy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gIH1cXG4gIFxcbiAgXFxuICAuc3VibWl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFEQjk1NDtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gIH1cXG5cXG4gIC5za2lwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICB9XFxuXFxuICAuc2tpcCxcXG4gIC5zdWJtaXQge1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcXG4gIH1cXG4gIFxcbiAgYnV0dG9uW2Rpc2FibGVkXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIH1cXG4gIFxcblxcbi8qIFNvbmcgU2VhcmNoICovXFxuXFxuLnNlYXJjaC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIEFkZCBwb3NpdGlvbiByZWxhdGl2ZSAqL1xcbiAgICB3aWR0aDogMTAwJTsgLyogTWF0Y2ggdGhlIHdpZHRoIG9mIHRoZSBzZWFyY2ggaW5wdXQgKi9cXG59XFxuXFxuLnJlc3VsdHMtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAyYjtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgLyogbGVmdDogMDsgKi9cXG4gICAgdG9wOiBjYWxjKDEwMCUgKyA1cHgpO1xcbiAgfVxcbiAgXFxuICBcXG4gIC5yZXN1bHQtaXRlbSB7XFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmZmZmOyAvKiBXaGl0ZSB0ZXh0IGNvbG9yICovXFxuICB9XFxuICBcXG4gIC5yZXN1bHQtaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7IC8qIExpZ2h0ZXIgZ3JheSBiYWNrZ3JvdW5kIGNvbG9yIGZvciBob3ZlciAqL1xcbiAgfVxcbiAgXFxuXFxuICAvKiBHdWVzcyBjb250YWluZXIgKi9cXG5cXG4gIC8qIC5ndWVzcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgfVxcbiAgXFxuICAuZ3Vlc3Mge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmNjI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG4gIC5yZWQteC1pY29uIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgfVxcbiAgICovXFxuXFxuICAgLyogR3Vlc3MgY29udGFpbmVyICovXFxuXFxuLyogLmd1ZXNzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICB9XFxuICAgKi9cXG4gIC5ndWVzcyB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjYyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7IC8qIEFkZCB0aGlzIGxpbmUgZm9yIGhvcml6b250YWwgYWxpZ25tZW50ICovXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIEFkZCB0aGlzIGxpbmUgZm9yIHZlcnRpY2FsIGFsaWdubWVudCAqL1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDsgLyogQWRkIHRoaXMgbGluZSB0byBzZXQgZm9udCBzaXplICovXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7IC8qIEFkZCB0aGlzIGxpbmUgdG8gc2V0IGZvbnQgd2VpZ2h0ICovXFxuICAgIGNvbG9yOiAjZmZmZmZmYWE7IC8qIEFkZCB0aGlzIGxpbmUgdG8gc2V0IGZvbnQgY29sb3IgKi9cXG4gIH1cXG4gIFxcbiAgLnJlZC14LWljb24ge1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNzUpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICB9XFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZnVuY3Rpb24gYWRkR3Vlc3NUb0JvYXJkKGd1ZXNzLCB0dXJuKSB7XG4gICAgY29uc3QgZ3Vlc3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3Vlc3MtY29udGFpbmVyJyk7XG4gICAgY29uc3QgZ3Vlc3NEaXYgPSBndWVzc0NvbnRhaW5lci5jaGlsZHJlblt0dXJuIC0gMV07XG4gICAgXG4gICAgLy8gQ3JlYXRlIHRoZSByZWQgJ3gnIGljb25cbiAgICBjb25zdCByZWRYSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICByZWRYSWNvbi50ZXh0Q29udGVudCA9ICd4JztcbiAgICByZWRYSWNvbi5jbGFzc0xpc3QuYWRkKCdyZWQteC1pY29uJyk7XG4gICAgXG4gICAgLy8gQWRkIHRoZSByZWQgJ3gnIGljb24gdG8gdGhlIGd1ZXNzIGRpdlxuICAgIGd1ZXNzRGl2LmFwcGVuZENoaWxkKHJlZFhJY29uKTtcblxuICAgIC8vIEFkZCB0aGUgdHJhY2sgaW5mbyB0ZXh0IHRvIHRoZSBndWVzcyBkaXZcbiAgICBjb25zdCBndWVzc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZ3Vlc3NUZXh0LnRleHRDb250ZW50ID0gZ3Vlc3M7XG4gICAgZ3Vlc3NEaXYuYXBwZW5kQ2hpbGQoZ3Vlc3NUZXh0KTtcbiAgfVxuICBcbiAgZXhwb3J0IGZ1bmN0aW9uIGFkZFNraXBwZWRUdXJuVG9Cb2FyZCh0dXJuKSB7XG4gICAgY29uc3QgZ3Vlc3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3Vlc3MtY29udGFpbmVyJyk7XG4gICAgY29uc3QgZ3Vlc3NEaXYgPSBndWVzc0NvbnRhaW5lci5jaGlsZHJlblt0dXJuIC0gMV07IC8vIHR1cm4gLSAxIGJlY2F1c2UgYXJyYXkgaW5kZXggc3RhcnRzIGZyb20gMFxuICAgIFxuICAgIC8vIENyZWF0ZSB0aGUgcmVkICd4JyBpY29uXG4gICAgY29uc3QgcmVkWEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcmVkWEljb24udGV4dENvbnRlbnQgPSAneCc7XG4gICAgcmVkWEljb24uY2xhc3NMaXN0LmFkZCgncmVkLXgtaWNvbicpO1xuICBcbiAgICAvLyBBZGQgdGhlIHJlZCAneCcgaWNvbiB0byB0aGUgZ3Vlc3MgZGl2XG4gICAgZ3Vlc3NEaXYuYXBwZW5kQ2hpbGQocmVkWEljb24pO1xuICBcbiAgICAvLyBBZGQgdGhlIFwiU2tpcHBlZCB0dXJuXCIgdGV4dCB0byB0aGUgZ3Vlc3MgZGl2XG4gICAgY29uc3Qgc2tpcHBlZFR1cm5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNraXBwZWRUdXJuVGV4dC50ZXh0Q29udGVudCA9IFwiU2tpcHBlZFwiO1xuICAgIGd1ZXNzRGl2LmFwcGVuZENoaWxkKHNraXBwZWRUdXJuVGV4dCk7XG4gIH1cbiAgXG4gIGV4cG9ydCBmdW5jdGlvbiBjbGVhclNlYXJjaEJveCgpIHtcbiAgICBjb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BvdGlmeS1zZWFyY2gnKTtcbiAgICBzZWFyY2hCb3gudGV4dENvbnRlbnQgPSAnJztcbiAgfVxuXG5cbi8vIFN1Ym1pdCBidXR0b25cblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZVN1Ym1pdEJ1dHRvbigpIHtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0Jyk7XG4gICAgc3VibWl0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICB9XG4gIFxuICBleHBvcnQgZnVuY3Rpb24gZGlzYWJsZVN1Ym1pdEJ1dHRvbigpIHtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0Jyk7XG4gICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICB9ICBcblxuLy8gU2VhcmNoIHJlc3VsdHNcbmNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cy1jb250YWluZXInKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIC8vIENoZWNrIGlmIHRoZSBjbGljayB0YXJnZXQgaXMgb3V0c2lkZSBvZiB0aGUgLnJlc3VsdHMtY29udGFpbmVyXG4gIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJyNyZXN1bHRzLWNvbnRhaW5lcicpKSB7XG4gICAgcmVzdWx0c0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG59KTtcbiIsImltcG9ydCB7IHNlYXJjaFRyYWNrIH0gZnJvbSBcIi4vc3BvdGlmeVwiXG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdHYW1lKHRyYWNrKSB7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5ld0dhbWVUcmFjaygpIHtcbiAgICByZXR1cm4gc2VhcmNoVHJhY2soXCJlbnRlciBzaGlrYXJpIC0ga2lzcyBmb3IgdGhlIHdob2xlIHdvcmxkXCIpO1xufSIsImltcG9ydCBTcG90aWZ5VG9rZW5NYW5hZ2VyIGZyb20gJy4vc3BvdGlmeVRva2VuTWFuYWdlci5qcyc7XG5cbmNvbnN0IGNsaWVudElkID0gXCI3NGFjOTQ5Y2E1ODc0MDI0ODRkY2VmMTQwOGI0ZDdmM1wiO1xuY29uc3QgY2xpZW50U2VjcmV0ID0gXCIzMTNhMmMxNWZjODQ0Y2E1YmMyMjc1NTU3Mjg3NGVlN1wiO1xuXG4vLyBjb25zdCBjbGllbnRJZCA9IHByb2Nlc3MuZW52LlNQT1RJRllfQ0xJRU5UX0lEO1xuLy8gY29uc3QgY2xpZW50U2VjcmV0ID0gcHJvY2Vzcy5lbnYuU1BPVElGWV9DTElFTlRfU0VDUkVUO1xuXG5jb25zdCB0b2tlbk1hbmFnZXIgPSBuZXcgU3BvdGlmeVRva2VuTWFuYWdlcihjbGllbnRJZCwgY2xpZW50U2VjcmV0KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaFRyYWNrKHNlYXJjaFRlcm0sIG1hcmtldCA9ICdHQicpIHtcblxuICAgIGNvbnNvbGUubG9nKFwiU3RhcnRpbmcgU3BvdGlmeSBzZWFyY2guLi5cIik7XG5cbiAgICAvLyBTZWFyY2ggZm9yIHRyYWNrIGZpcnN0LiBJZiBubyByZXN1bHRzLCBzZWFyY2ggYXJ0aXN0PyBCb3RoIGFueXdheT9cblxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gYXdhaXQgdG9rZW5NYW5hZ2VyLmdldEFjY2Vzc1Rva2VuKCk7XG5cbiAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcbiAgICB9O1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gc2VhcmNoKHNlYXJjaFRlcm0pIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgICAgICBxOiBzZWFyY2hUZXJtLFxuICAgICAgICAgICAgdHlwZTogJ3RyYWNrJyxcbiAgICAgICAgICAgIGxpbWl0OiAxMCxcbiAgICAgICAgICAgIG1hcmtldFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9zZWFyY2g/JHtwYXJhbXN9YCwge1xuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS50cmFja3MuaXRlbXMpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEudHJhY2tzLml0ZW1zO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiBhd2FpdCBzZWFyY2goc2VhcmNoVGVybSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BvdGlmeVRva2VuTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY2xpZW50SWQsIGNsaWVudFNlY3JldCkge1xuICAgICAgdGhpcy5jbGllbnRJZCA9IGNsaWVudElkO1xuICAgICAgdGhpcy5jbGllbnRTZWNyZXQgPSBjbGllbnRTZWNyZXQ7XG4gICAgICB0aGlzLmFjY2Vzc1Rva2VuID0gbnVsbDtcbiAgICAgIHRoaXMuZXhwaXJhdGlvblRpbWUgPSBudWxsO1xuICAgIH1cbiAgXG4gICAgYXN5bmMgcmVxdWVzdEFjY2Vzc1Rva2VuKGNsaWVudElkLCBjbGllbnRTZWNyZXQpIHtcbiAgICAgIGNvbnN0IHRva2VuRW5kcG9pbnQgPSBcImh0dHBzOi8vYWNjb3VudHMuc3BvdGlmeS5jb20vYXBpL3Rva2VuXCI7XG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IGJvZHkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgICAgZ3JhbnRfdHlwZTogXCJjbGllbnRfY3JlZGVudGlhbHNcIixcbiAgICAgICAgY2xpZW50X2lkOiBjbGllbnRJZCxcbiAgICAgICAgY2xpZW50X3NlY3JldDogY2xpZW50U2VjcmV0LFxuICAgICAgfSk7XG4gIFxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0b2tlbkVuZHBvaW50LCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgIGJvZHk6IGJvZHksXG4gICAgICB9KTtcbiAgXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGRhdGEuYWNjZXNzX3Rva2VuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIG9idGFpbiBhY2Nlc3MgdG9rZW5cIik7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBhc3luYyBnZXRBY2Nlc3NUb2tlbigpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICBpZiAoIXRoaXMuYWNjZXNzVG9rZW4gfHwgY3VycmVudFRpbWUgPj0gdGhpcy5leHBpcmF0aW9uVGltZSkge1xuICAgICAgICB0aGlzLmFjY2Vzc1Rva2VuID0gYXdhaXQgdGhpcy5yZXF1ZXN0QWNjZXNzVG9rZW4odGhpcy5jbGllbnRJZCwgdGhpcy5jbGllbnRTZWNyZXQpO1xuICAgICAgICBjb25zdCBleHBpcmVzSW5NaWxsaXNlY29uZHMgPSAzNjAwICogMTAwMDsgLy8gMSBob3VyIGluIG1pbGxpc2Vjb25kc1xuICAgICAgICB0aGlzLmV4cGlyYXRpb25UaW1lID0gY3VycmVudFRpbWUgKyBleHBpcmVzSW5NaWxsaXNlY29uZHM7XG4gICAgICB9XG4gIFxuICAgICAgcmV0dXJuIHRoaXMuYWNjZXNzVG9rZW47XG4gICAgfVxuICB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZXMuY3NzJ1xuXG5pbXBvcnQgeyBzZWFyY2hUcmFjayB9IGZyb20gJy4vc3BvdGlmeSc7XG5cbmltcG9ydCB7IFxuICAgICAgICBhZGRTa2lwcGVkVHVyblRvQm9hcmQsIFxuICAgICAgICBhZGRHdWVzc1RvQm9hcmQsXG4gICAgICAgIGVuYWJsZVN1Ym1pdEJ1dHRvbixcbiAgICAgICAgZGlzYWJsZVN1Ym1pdEJ1dHRvbiBcbiAgICB9IGZyb20gJy4vVUknO1xuXG5pbXBvcnQgeyBcbiAgICAgICAgZ2V0TmV3R2FtZVRyYWNrLFxuICAgICAgICBuZXdHYW1lXG4gICAgfSBmcm9tICcuL3NoZWFyZGxlJztcblxuY29uc3QgcGxheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheS1idXR0b25cIik7XG5jb25zdCBza2lwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5za2lwXCIpO1xuY29uc3Qgc2Vla0JhckJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlZWstYmFyLWJhY2tncm91bmRcIik7XG5jb25zdCBwcm9ncmVzc0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2Vlay1iYXItcHJvZ3Jlc3NcIik7XG5jb25zdCBlbGFwc2VkVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxhcHNlZC10aW1lXCIpO1xuXG5cbi8vIEdldCB0cmFjayBmb3IgZ2FtZS4gTW92ZSB0byBTaGVhcmRsZS5KU1xuXG5jb25zdCBnYW1lVHJhY2sgPSBnZXROZXdHYW1lVHJhY2soKTtcbmxldCBhdWRpbztcblxuZ2FtZVRyYWNrLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgIGNvbnN0IHByZXZpZXdVUkwgPSByZXNwb25zZVswXS5wcmV2aWV3X3VybDtcblxuICAgIGF1ZGlvID0gbmV3IEF1ZGlvKHByZXZpZXdVUkwpO1xuXG4gICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcihcInRpbWV1cGRhdGVcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBwbGF5RHVyYXRpb24gPSBhbGxvd2VkRHVyYXRpb25zW2N1cnJlbnRUdXJuIC0gMV07XG4gICAgICAgIGNvbnN0IHByb2dyZXNzUGVyY2VudGFnZSA9IChhdWRpby5jdXJyZW50VGltZSAvIHBsYXlEdXJhdGlvbikgKiAxMDA7XG4gICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gYCR7cHJvZ3Jlc3NQZXJjZW50YWdlfSVgO1xuICAgIFxuICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihhdWRpby5jdXJyZW50VGltZSAvIDYwKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoYXVkaW8uY3VycmVudFRpbWUgJSA2MCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgICAgIGVsYXBzZWRUaW1lLnRleHRDb250ZW50ID0gYCR7bWludXRlc306JHtzZWNvbmRzfWA7XG4gICAgfSk7XG5cbn0pO1xuXG5cblxuY29uc3QgYWxsb3dlZER1cmF0aW9ucyA9IFsxLCAyLCA0LCA3LCAxMSwgMTZdO1xuXG5sZXQgY3VycmVudFR1cm4gPSAxO1xubGV0IGVuZFRpbWU7IC8vIGVuZFRpbWUgdmFyaWFibGUgb3V0c2lkZSB0aGUgZXZlbnQgbGlzdGVuZXIgZm9yIHNraXBwaW5nIHdoaWxlIHBsYXlpbmdcbmxldCB0aW1lb3V0SUQ7IC8vIERlY2xhcmUgdGltZW91dElEIHZhcmlhYmxlIHRvIHN0b3JlIHRoZSBzZXRUaW1lb3V0IGlkZW50aWZpZXJcblxubGV0IHNlbGVjdGVkVHJhY2s7XG5cbmZ1bmN0aW9uIHVwZGF0ZVNlZWtCYXJCYWNrZ3JvdW5kKHR1cm4pIHtcbiAgICBjb25zdCBwbGF5RHVyYXRpb24gPSBhbGxvd2VkRHVyYXRpb25zW3R1cm4gLSAxXTtcbiAgICBjb25zdCBwZXJjZW50YWdlID0gKHBsYXlEdXJhdGlvbiAvIDE2KSAqIDEwMDtcbiAgICBzZWVrQmFyQmFja2dyb3VuZC5zdHlsZS53aWR0aCA9IGAke3BlcmNlbnRhZ2V9JWA7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2dyZXNzQmFyKCkge1xuICAgIGNvbnN0IHByb2dyZXNzUGVyY2VudGFnZSA9ICgoYXVkaW8uY3VycmVudFRpbWUgLyAxNikgKiAxMDAgKyAxKTtcbiAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IGAke3Byb2dyZXNzUGVyY2VudGFnZX0lYDtcblxuICAgIGlmICghYXVkaW8ucGF1c2VkKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVQcm9ncmVzc0Jhcik7XG4gICAgfVxufVxuXG5wbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKGF1ZGlvLnBhdXNlZCkge1xuICAgICAgICBjb25zdCBwbGF5RHVyYXRpb24gPSBhbGxvd2VkRHVyYXRpb25zW2N1cnJlbnRUdXJuIC0gMV07XG4gICAgICAgIGVuZFRpbWUgPSBNYXRoLm1pbihhdWRpby5kdXJhdGlvbiwgcGxheUR1cmF0aW9uKTtcblxuICAgICAgICBhdWRpby5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIGF1ZGlvLnBsYXkoKTtcbiAgICAgICAgcGxheUJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYSBmYS1wYXVzZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVQcm9ncmVzc0Jhcik7XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJRCk7XG4gICAgICAgIHRpbWVvdXRJRCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYXVkaW8ucGF1c2UoKTtcbiAgICAgICAgICAgIHBsYXlCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEgZmEtcGxheVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nO1xuICAgICAgICB9LCBlbmRUaW1lICogMTAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYXVkaW8ucGF1c2UoKTtcbiAgICAgICAgcGxheUJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYSBmYS1wbGF5XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPic7XG4gICAgfVxufSk7XG5cblxuXG5mdW5jdGlvbiBjcmVhdGVNYXJrZXIoZHVyYXRpb24pIHtcbiAgICBjb25zdCBtYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSAoZHVyYXRpb24gLyAxNikgKiAxMDA7XG5cbiAgICBtYXJrZXIuc3R5bGUud2lkdGggPSBcIjFweFwiO1xuICAgIG1hcmtlci5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgICBtYXJrZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgbWFya2VyLnN0eWxlLmxlZnQgPSBgJHtwZXJjZW50YWdlfSVgO1xuICAgIG1hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZmZmZcIjtcblxuICAgIHJldHVybiBtYXJrZXI7XG59XG5cbmNvbnN0IG1hcmtlcnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlZWstYmFyLW1hcmtlcnNcIik7XG5hbGxvd2VkRHVyYXRpb25zLmZvckVhY2goZHVyYXRpb24gPT4ge1xuICAgIGNvbnN0IG1hcmtlciA9IGNyZWF0ZU1hcmtlcihkdXJhdGlvbiArIDAuMSk7XG4gICAgbWFya2Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtYXJrZXIpO1xufSk7XG5cbi8vIEluaXRpYWxpemUgdGhlIHNlZWsgYmFyIGJhY2tncm91bmQgZm9yIHRoZSBmaXJzdCB0dXJuXG51cGRhdGVTZWVrQmFyQmFja2dyb3VuZChjdXJyZW50VHVybik7XG51cGRhdGVTa2lwQnV0dG9uVGV4dCgpO1xuXG5cbi8vIFNlYXJjaCBzZW5nc1xuYXN5bmMgZnVuY3Rpb24gc2VhcmNoU3BvdGlmeShxdWVyeSkge1xuXG4gICAgY29uc29sZS5sb2coXCJTcG90aWZ5IHNlYXJjaDogXCIsIHF1ZXJ5KTtcbiAgICByZXR1cm47XG5cbiAgICAvLyBZb3UgbmVlZCB0byBicmluZyB0aGUgU3BvdGlmeSBjb2RlIGludG8gdGhpcyBwcm9qIGZyb20gT1REIG5leHRcblxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gJ1lPVVJfU1BPVElGWV9BQ0NFU1NfVE9LRU4nO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL3NlYXJjaD9xPSR7cXVlcnl9JnR5cGU9dHJhY2smbGltaXQ9NWAsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIFxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3Qgc2VhcmNoUmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtcmVzdWx0cycpO1xuICAgIHNlYXJjaFJlc3VsdHMuaW5uZXJIVE1MID0gJyc7XG4gIFxuICAgIGRhdGEudHJhY2tzLml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHJlc3VsdEl0ZW0uY2xhc3NMaXN0LmFkZCgncmVzdWx0LWl0ZW0nKTtcbiAgICAgIHJlc3VsdEl0ZW0udGV4dENvbnRlbnQgPSBgJHtpdGVtLm5hbWV9IC0gJHtpdGVtLmFydGlzdHNbMF0ubmFtZX1gO1xuICAgICAgcmVzdWx0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gSGFuZGxlIHRoZSByZXN1bHQgc2VsZWN0aW9uIGhlcmUuXG4gICAgICAgIGNvbnNvbGUubG9nKCdTZWxlY3RlZDonLCBpdGVtKTtcbiAgICAgIH0pO1xuICBcbiAgICAgIHNlYXJjaFJlc3VsdHMuYXBwZW5kQ2hpbGQocmVzdWx0SXRlbSk7XG4gICAgfSk7XG4gIH1cblxuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG5cbiAgICBsZXQgdGltZW91dDtcblxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAgICAgY29uc3QgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcblxuICAgICAgICBpZiAoY2FsbE5vdykge1xuICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwb3RpZnktc2VhcmNoJyk7XG5cbi8vIE5vIGRlYm91bmNlIG5lZWRlZCBmb3IgZGlzYWJsaW5nIHRoZSBidXR0b25cbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIGRpc2FibGVTdWJtaXRCdXR0b24oKTtcbn0pXG5cbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZGVib3VuY2UoKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgcXVlcnkgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzLWNvbnRhaW5lcicpO1xuICAgIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgcmVzdWx0c0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBcbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIHNlYXJjaFRyYWNrKHF1ZXJ5KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goKHRyYWNrLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcmVzdWx0SXRlbS5jbGFzc0xpc3QuYWRkKCdyZXN1bHQtaXRlbScpO1xuICAgICAgICAgICAgcmVzdWx0SXRlbS50ZXh0Q29udGVudCA9IGAke3RyYWNrLmFydGlzdHNbMF0ubmFtZX0gLSAke3RyYWNrLm5hbWV9YDtcbiAgICAgICAgICAgIHJlc3VsdEl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLXRyYWNrLWlkJywgdHJhY2suaWQpO1xuICBcbiAgICAgICAgICAgIHJlc3VsdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRUcmFja0lkID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10cmFjay1pZCcpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VsZWN0ZWQgdHJhY2sgSUQ6Jywgc2VsZWN0ZWRUcmFja0lkKTtcbiAgXG4gICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgc2VhcmNoIGlucHV0IHdpdGggdGhlIHNlbGVjdGVkIHJlc3VsdCBhbmQgaGlkZSB0aGUgcmVzdWx0cyBjb250YWluZXJcbiAgICAgICAgICAgICAgc2VhcmNoSW5wdXQudmFsdWUgPSBldmVudC50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgIHJlc3VsdHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgZW5hYmxlU3VibWl0QnV0dG9uKCk7XG4gICAgICAgICAgICB9KTtcbiAgXG4gICAgICAgICAgICByZXN1bHRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3VsdEl0ZW0pO1xuICAgICAgICAgIH0pO1xuICBcbiAgICAgICAgICByZXN1bHRzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIDUwMCkpO1xuICBcblxuLy8gU3VibWl0IGJ1dHRvblxuXG5jb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0Jyk7XG5cbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgIHNlbGVjdGVkVHJhY2sgPSBzZWFyY2hJbnB1dC52YWx1ZTtcblxuICAgIGFkZEd1ZXNzVG9Cb2FyZChzZWxlY3RlZFRyYWNrLCBjdXJyZW50VHVybik7XG4gICAgY3VycmVudFR1cm4rKztcblxufSk7XG5cbi8vIFNraXAgYnV0dG9uXG5cbnNraXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoY3VycmVudFR1cm4gPCBhbGxvd2VkRHVyYXRpb25zLmxlbmd0aCkge1xuICAgICAgICBhZGRTa2lwcGVkVHVyblRvQm9hcmQoY3VycmVudFR1cm4pO1xuICAgICAgICBjdXJyZW50VHVybisrO1xuICAgIH1cblxuICAgIGlmICghYXVkaW8ucGF1c2VkKSB7XG4gICAgICAgIGNvbnN0IHBsYXlEdXJhdGlvbiA9IGFsbG93ZWREdXJhdGlvbnNbY3VycmVudFR1cm4gLSAxXTtcbiAgICAgICAgZW5kVGltZSA9IE1hdGgubWluKGF1ZGlvLmR1cmF0aW9uLCBwbGF5RHVyYXRpb24pO1xuICAgICAgICBjb25zdCByZW1haW5pbmdUaW1lID0gKGVuZFRpbWUgLSBhdWRpby5jdXJyZW50VGltZSkgKiAxMDAwO1xuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SUQpO1xuICAgICAgICB0aW1lb3V0SUQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGF1ZGlvLnBhdXNlKCk7XG4gICAgICAgICAgICBwbGF5QnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhIGZhLXBsYXlcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+JztcbiAgICAgICAgfSwgcmVtYWluaW5nVGltZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlU2Vla0JhckJhY2tncm91bmQoY3VycmVudFR1cm4pO1xuICAgIHVwZGF0ZVNraXBCdXR0b25UZXh0KCk7XG59KTtcblxuLy8gRnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBza2lwIGJ1dHRvbiB0ZXh0XG5mdW5jdGlvbiB1cGRhdGVTa2lwQnV0dG9uVGV4dCgpIHtcbiAgICBpZiAoY3VycmVudFR1cm4gPCBhbGxvd2VkRHVyYXRpb25zLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBza2lwU2Vjb25kcyA9IGFsbG93ZWREdXJhdGlvbnNbY3VycmVudFR1cm5dIC0gYWxsb3dlZER1cmF0aW9uc1tjdXJyZW50VHVybiAtIDFdO1xuICAgICAgICBza2lwQnV0dG9uLnRleHRDb250ZW50ID0gYFNLSVAgKCske3NraXBTZWNvbmRzfXMpYDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBza2lwQnV0dG9uLnRleHRDb250ZW50ID0gXCJTS0lQXCI7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==