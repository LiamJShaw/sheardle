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
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  height: 90%;\n}\n\nbody {\n  background-color: #121212;\n  color: #ffffff;\n  margin: 0;\n  font-family: sans-serif;\n  padding-top: 60px;\n  max-width: 100vw;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  height: 50px;\n  padding: 0 15px;\n  border-bottom: 1px solid #ffffff;\n  background-color: #121212;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    min-height: 100%;\n    justify-content: space-between;\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 10px;\n    overflow: none;\n  }\n  \n  .title {\n    /* font-size: 32px; */\n  }\n  \n  .info,\n  .how-to-play {\n    font-size: 24px;\n    cursor: pointer;\n  }\n  \n  .guess-container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    align-items: flex-start;\n    margin-bottom: 20px;\n    margin-top: 20px;\n  }\n  \n  .guess {\n    width: 100%;\n    height: 40px;\n    border: 1px solid #ffffff62;\n    border-radius: 5px;\n    margin-bottom: 10px;\n  }\n  \n  .play-container {\n    margin-bottom: 20px;\n    \n  }\n  \n  .seek-bar-container {\n    position: relative;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 100vw;\n  }\n  \n  .seek-bar {\n    width: 100%;\n    height: 10px;\n    position: relative;\n    border-top: 1px solid #ffffff;\n    border-bottom: 1px solid #ffffff;\n    background-color: transparent;\n    margin: 0;\n}\n\n.seek-bar-background {\n    width: 0;\n    height: 100%;\n    position: absolute;\n    background-color: #282828;\n}\n\n.seek-bar-markers {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n}\n\n.seek-bar-progress {\n    width: 0;\n    height: 100%;\n    position: absolute;\n    background-color: #1DB954;\n}\n\n\n  .progress {\n    height: 100%;\n    background-color: #1DB954;\n    width: 0;\n}\n\n  \n  .section {\n    height: 100%;\n    position: absolute;\n    background-color: #282828; /* Lighter gray background color */\n  }\n  \n  .play-button-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 10px 0;\n    position: relative; /* Add position relative */\n  }\n\n  .play-button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 50px;\n    height: 50px;\n    background-color: #00000000;\n    border: 2px solid white;\n    color: #ffffff;\n    border-radius: 50%;\n    cursor: pointer;\n    outline: none;\n    font-size: 20px; /* Adjust the icon size if necessary */\n  }\n  \n  .elapsed-time,\n  .total-time {\n    font-size: 14px;\n    position: absolute; /* Keep position absolute */\n  }\n  \n  .elapsed-time {\n    left: 0; /* Keep left positioning */\n  }\n  \n  .total-time {\n    right: 0; /* Keep right positioning */\n  }\n  \n  .search-container {\n    margin-bottom: 20px;\n    width: 100%; /* Change to 100% */\n    display: flex; /* Add display flex */\n    justify-content: center; /* Add justify-content center */\n  }\n  \n  .spotify-search {\n    width: 90%; /* Change to 90% */\n    padding: 10px;\n    background-color: #333;\n    border: solid 1px black;\n    color: #ffffff;\n    border-radius: 5px;\n    outline: none;\n  }\n  \n  .buttons-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 20px;\n  }\n  \n  \n  .submit {\n    background-color: #1DB954;\n    color: #000000;\n    border: none;\n  }\n\n  .skip {\n    background-color: #00000000;\n    color: #ffffff;\n    border: 1px solid white;\n  }\n\n  .skip,\n  .submit {\n    padding: 10px 20px;\n    border-radius: 20px;\n    cursor: pointer;\n    outline: none;\n    letter-spacing: 0.1em;\n    line-height: 1rem;\n  }\n  \n  button[disabled] {\n    background-color: gray;\n    color: white;\n    cursor: not-allowed;\n  }\n  \n\n/* Song Search */\n\n.search-container {\n    position: relative; /* Add position relative */\n    width: 100%; /* Match the width of the search input */\n}\n\n.results-container {\n    position: absolute;\n    background-color: #333;\n    color: #ffffff;\n    width: 95%;\n    max-height: 200px;\n    overflow-y: auto;\n    border: 1px solid #0000002b;\n    display: none;\n    /* left: 0; */\n    top: calc(100% + 5px);\n  }\n  \n  \n  .result-item {\n    padding: 8px 12px;\n    cursor: pointer;\n    color: #ffffff; /* White text color */\n  }\n  \n  .result-item:hover {\n    background-color: #282828; /* Lighter gray background color for hover */\n  }\n  ", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":["html,\nbody {\n  height: 90%;\n}\n\nbody {\n  background-color: #121212;\n  color: #ffffff;\n  margin: 0;\n  font-family: sans-serif;\n  padding-top: 60px;\n  max-width: 100vw;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  height: 50px;\n  padding: 0 15px;\n  border-bottom: 1px solid #ffffff;\n  background-color: #121212;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    min-height: 100%;\n    justify-content: space-between;\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 10px;\n    overflow: none;\n  }\n  \n  .title {\n    /* font-size: 32px; */\n  }\n  \n  .info,\n  .how-to-play {\n    font-size: 24px;\n    cursor: pointer;\n  }\n  \n  .guess-container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    align-items: flex-start;\n    margin-bottom: 20px;\n    margin-top: 20px;\n  }\n  \n  .guess {\n    width: 100%;\n    height: 40px;\n    border: 1px solid #ffffff62;\n    border-radius: 5px;\n    margin-bottom: 10px;\n  }\n  \n  .play-container {\n    margin-bottom: 20px;\n    \n  }\n  \n  .seek-bar-container {\n    position: relative;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 100vw;\n  }\n  \n  .seek-bar {\n    width: 100%;\n    height: 10px;\n    position: relative;\n    border-top: 1px solid #ffffff;\n    border-bottom: 1px solid #ffffff;\n    background-color: transparent;\n    margin: 0;\n}\n\n.seek-bar-background {\n    width: 0;\n    height: 100%;\n    position: absolute;\n    background-color: #282828;\n}\n\n.seek-bar-markers {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n}\n\n.seek-bar-progress {\n    width: 0;\n    height: 100%;\n    position: absolute;\n    background-color: #1DB954;\n}\n\n\n  .progress {\n    height: 100%;\n    background-color: #1DB954;\n    width: 0;\n}\n\n  \n  .section {\n    height: 100%;\n    position: absolute;\n    background-color: #282828; /* Lighter gray background color */\n  }\n  \n  .play-button-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 10px 0;\n    position: relative; /* Add position relative */\n  }\n\n  .play-button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 50px;\n    height: 50px;\n    background-color: #00000000;\n    border: 2px solid white;\n    color: #ffffff;\n    border-radius: 50%;\n    cursor: pointer;\n    outline: none;\n    font-size: 20px; /* Adjust the icon size if necessary */\n  }\n  \n  .elapsed-time,\n  .total-time {\n    font-size: 14px;\n    position: absolute; /* Keep position absolute */\n  }\n  \n  .elapsed-time {\n    left: 0; /* Keep left positioning */\n  }\n  \n  .total-time {\n    right: 0; /* Keep right positioning */\n  }\n  \n  .search-container {\n    margin-bottom: 20px;\n    width: 100%; /* Change to 100% */\n    display: flex; /* Add display flex */\n    justify-content: center; /* Add justify-content center */\n  }\n  \n  .spotify-search {\n    width: 90%; /* Change to 90% */\n    padding: 10px;\n    background-color: #333;\n    border: solid 1px black;\n    color: #ffffff;\n    border-radius: 5px;\n    outline: none;\n  }\n  \n  .buttons-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 20px;\n  }\n  \n  \n  .submit {\n    background-color: #1DB954;\n    color: #000000;\n    border: none;\n  }\n\n  .skip {\n    background-color: #00000000;\n    color: #ffffff;\n    border: 1px solid white;\n  }\n\n  .skip,\n  .submit {\n    padding: 10px 20px;\n    border-radius: 20px;\n    cursor: pointer;\n    outline: none;\n    letter-spacing: 0.1em;\n    line-height: 1rem;\n  }\n  \n  button[disabled] {\n    background-color: gray;\n    color: white;\n    cursor: not-allowed;\n  }\n  \n\n/* Song Search */\n\n.search-container {\n    position: relative; /* Add position relative */\n    width: 100%; /* Match the width of the search input */\n}\n\n.results-container {\n    position: absolute;\n    background-color: #333;\n    color: #ffffff;\n    width: 95%;\n    max-height: 200px;\n    overflow-y: auto;\n    border: 1px solid #0000002b;\n    display: none;\n    /* left: 0; */\n    top: calc(100% + 5px);\n  }\n  \n  \n  .result-item {\n    padding: 8px 12px;\n    cursor: pointer;\n    color: #ffffff; /* White text color */\n  }\n  \n  .result-item:hover {\n    background-color: #282828; /* Lighter gray background color for hover */\n  }\n  "],"sourceRoot":""}]);
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

        console.log(response);

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




const playButton = document.querySelector(".play-button");
const skipButton = document.querySelector(".skip");
const seekBarBackground = document.querySelector(".seek-bar-background");
const progressBar = document.querySelector(".seek-bar-progress");
const elapsedTime = document.querySelector(".elapsed-time");

const audio = new Audio("https://p.scdn.co/mp3-preview/328e1de49e17b4e1ace2e8f6cdd10b0776a16bc7?cid=74ac949ca587402484dcef1408b4d7f3");

audio.addEventListener("timeupdate", () => {
    const playDuration = allowedDurations[currentTurn - 1];
    const progressPercentage = (audio.currentTime / playDuration) * 100;
    progressBar.style.width = `${progressPercentage}%`;

    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60).toString().padStart(2, "0");
    elapsedTime.textContent = `${minutes}:${seconds}`;
});

let currentTurn = 1;
const allowedDurations = [1, 2, 4, 7, 11, 16];
let endTime; // Declare endTime variable outside the event listener
let timeoutID; // Declare timeoutID variable to store the setTimeout identifier

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

        clearTimeout(timeoutID); // Clear any existing timeout
        timeoutID = setTimeout(() => {
            audio.pause();
            playButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
        }, endTime * 1000);
    } else {
        audio.pause();
        playButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    }
});

// Update skipButton click event handler
skipButton.addEventListener("click", () => {
    if (currentTurn < allowedDurations.length) {
        currentTurn++;
    }

    // Update endTime and the timeout
    if (!audio.paused) {
        const playDuration = allowedDurations[currentTurn - 1];
        endTime = Math.min(audio.duration, playDuration);
        const remainingTime = (endTime - audio.currentTime) * 1000;

        clearTimeout(timeoutID); // Clear the existing timeout
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
  
              // Store the selected track ID somewhere
              // document.getElementById('hidden-input-field').value = selectedTrackId;
  
              // Update the search input with the selected result and hide the results container
              searchInput.value = event.target.textContent;
              resultsContainer.style.display = 'none';
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
  }, 750));
  
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNILEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGVhcmRsZS8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIiwid2VicGFjazovL3NoZWFyZGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9zcmMvc3BvdGlmeS5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL3NyYy9zcG90aWZ5VG9rZW5NYW5hZ2VyLmpzIiwid2VicGFjazovL3NoZWFyZGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NoZWFyZGxlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NoZWFyZGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zaGVhcmRsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NoZWFyZGxlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3NoZWFyZGxlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogOTAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZy10b3A6IDYwcHg7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xcbiAgICBvdmVyZmxvdzogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLnRpdGxlIHtcXG4gICAgLyogZm9udC1zaXplOiAzMnB4OyAqL1xcbiAgfVxcbiAgXFxuICAuaW5mbyxcXG4gIC5ob3ctdG8tcGxheSB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgXFxuICAuZ3Vlc3MtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gIH1cXG4gIFxcbiAgLmd1ZXNzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjYyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB9XFxuICBcXG4gIC5wbGF5LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIFxcbiAgfVxcbiAgXFxuICAuc2Vlay1iYXItY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgfVxcbiAgXFxuICAuc2Vlay1iYXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmZmZmO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnNlZWstYmFyLWJhY2tncm91bmQge1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XFxufVxcblxcbi5zZWVrLWJhci1tYXJrZXJzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uc2Vlay1iYXItcHJvZ3Jlc3Mge1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxREI5NTQ7XFxufVxcblxcblxcbiAgLnByb2dyZXNzIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURCOTU0O1xcbiAgICB3aWR0aDogMDtcXG59XFxuXFxuICBcXG4gIC5zZWN0aW9uIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7IC8qIExpZ2h0ZXIgZ3JheSBiYWNrZ3JvdW5kIGNvbG9yICovXFxuICB9XFxuICBcXG4gIC5wbGF5LWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogQWRkIHBvc2l0aW9uIHJlbGF0aXZlICovXFxuICB9XFxuXFxuICAucGxheS1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmb250LXNpemU6IDIwcHg7IC8qIEFkanVzdCB0aGUgaWNvbiBzaXplIGlmIG5lY2Vzc2FyeSAqL1xcbiAgfVxcbiAgXFxuICAuZWxhcHNlZC10aW1lLFxcbiAgLnRvdGFsLXRpbWUge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogS2VlcCBwb3NpdGlvbiBhYnNvbHV0ZSAqL1xcbiAgfVxcbiAgXFxuICAuZWxhcHNlZC10aW1lIHtcXG4gICAgbGVmdDogMDsgLyogS2VlcCBsZWZ0IHBvc2l0aW9uaW5nICovXFxuICB9XFxuICBcXG4gIC50b3RhbC10aW1lIHtcXG4gICAgcmlnaHQ6IDA7IC8qIEtlZXAgcmlnaHQgcG9zaXRpb25pbmcgKi9cXG4gIH1cXG4gIFxcbiAgLnNlYXJjaC1jb250YWluZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTsgLyogQ2hhbmdlIHRvIDEwMCUgKi9cXG4gICAgZGlzcGxheTogZmxleDsgLyogQWRkIGRpc3BsYXkgZmxleCAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQWRkIGp1c3RpZnktY29udGVudCBjZW50ZXIgKi9cXG4gIH1cXG4gIFxcbiAgLnNwb3RpZnktc2VhcmNoIHtcXG4gICAgd2lkdGg6IDkwJTsgLyogQ2hhbmdlIHRvIDkwJSAqL1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLmJ1dHRvbnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICB9XFxuICBcXG4gIFxcbiAgLnN1Ym1pdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxREI5NTQ7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICB9XFxuXFxuICAuc2tpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwMDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgfVxcblxcbiAgLnNraXAsXFxuICAuc3VibWl0IHtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XFxuICB9XFxuICBcXG4gIGJ1dHRvbltkaXNhYmxlZF0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICB9XFxuICBcXG5cXG4vKiBTb25nIFNlYXJjaCAqL1xcblxcbi5zZWFyY2gtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBBZGQgcG9zaXRpb24gcmVsYXRpdmUgKi9cXG4gICAgd2lkdGg6IDEwMCU7IC8qIE1hdGNoIHRoZSB3aWR0aCBvZiB0aGUgc2VhcmNoIGlucHV0ICovXFxufVxcblxcbi5yZXN1bHRzLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMmI7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIC8qIGxlZnQ6IDA7ICovXFxuICAgIHRvcDogY2FsYygxMDAlICsgNXB4KTtcXG4gIH1cXG4gIFxcbiAgXFxuICAucmVzdWx0LWl0ZW0ge1xcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogI2ZmZmZmZjsgLyogV2hpdGUgdGV4dCBjb2xvciAqL1xcbiAgfVxcbiAgXFxuICAucmVzdWx0LWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4OyAvKiBMaWdodGVyIGdyYXkgYmFja2dyb3VuZCBjb2xvciBmb3IgaG92ZXIgKi9cXG4gIH1cXG4gIFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMseUJBQXlCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7O0lBRUUsZUFBZTtJQUNmLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7O0VBRXJCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IsU0FBUztBQUNiOztBQUVBO0lBQ0ksUUFBUTtJQUNSLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7OztFQUdFO0lBQ0UsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixRQUFRO0FBQ1o7OztFQUdFO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUIsRUFBRSxrQ0FBa0M7RUFDL0Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsa0JBQWtCLEVBQUUsMEJBQTBCO0VBQ2hEOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixlQUFlLEVBQUUsc0NBQXNDO0VBQ3pEOztFQUVBOztJQUVFLGVBQWU7SUFDZixrQkFBa0IsRUFBRSwyQkFBMkI7RUFDakQ7O0VBRUE7SUFDRSxPQUFPLEVBQUUsMEJBQTBCO0VBQ3JDOztFQUVBO0lBQ0UsUUFBUSxFQUFFLDJCQUEyQjtFQUN2Qzs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixXQUFXLEVBQUUsbUJBQW1CO0lBQ2hDLGFBQWEsRUFBRSxxQkFBcUI7SUFDcEMsdUJBQXVCLEVBQUUsK0JBQStCO0VBQzFEOztFQUVBO0lBQ0UsVUFBVSxFQUFFLGtCQUFrQjtJQUM5QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7OztFQUdBO0lBQ0UseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLHVCQUF1QjtFQUN6Qjs7RUFFQTs7SUFFRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCOzs7QUFHRixnQkFBZ0I7O0FBRWhCO0lBQ0ksa0JBQWtCLEVBQUUsMEJBQTBCO0lBQzlDLFdBQVcsRUFBRSx3Q0FBd0M7QUFDekQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLGFBQWE7SUFDYixxQkFBcUI7RUFDdkI7OztFQUdBO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixjQUFjLEVBQUUscUJBQXFCO0VBQ3ZDOztFQUVBO0lBQ0UseUJBQXlCLEVBQUUsNENBQTRDO0VBQ3pFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDkwJTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXG4gICAgb3ZlcmZsb3c6IG5vbmU7XFxuICB9XFxuICBcXG4gIC50aXRsZSB7XFxuICAgIC8qIGZvbnQtc2l6ZTogMzJweDsgKi9cXG4gIH1cXG4gIFxcbiAgLmluZm8sXFxuICAuaG93LXRvLXBsYXkge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIFxcbiAgLmd1ZXNzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICB9XFxuICBcXG4gIC5ndWVzcyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY2MjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcbiAgXFxuICAucGxheS1jb250YWluZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBcXG4gIH1cXG4gIFxcbiAgLnNlZWstYmFyLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gIH1cXG4gIFxcbiAgLnNlZWstYmFyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZmZmZjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5zZWVrLWJhci1iYWNrZ3JvdW5kIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xcbn1cXG5cXG4uc2Vlay1iYXItbWFya2VycyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnNlZWstYmFyLXByb2dyZXNzIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURCOTU0O1xcbn1cXG5cXG5cXG4gIC5wcm9ncmVzcyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFEQjk1NDtcXG4gICAgd2lkdGg6IDA7XFxufVxcblxcbiAgXFxuICAuc2VjdGlvbiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4OyAvKiBMaWdodGVyIGdyYXkgYmFja2dyb3VuZCBjb2xvciAqL1xcbiAgfVxcbiAgXFxuICAucGxheS1idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIEFkZCBwb3NpdGlvbiByZWxhdGl2ZSAqL1xcbiAgfVxcblxcbiAgLnBsYXktYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwMDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAyMHB4OyAvKiBBZGp1c3QgdGhlIGljb24gc2l6ZSBpZiBuZWNlc3NhcnkgKi9cXG4gIH1cXG4gIFxcbiAgLmVsYXBzZWQtdGltZSxcXG4gIC50b3RhbC10aW1lIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIEtlZXAgcG9zaXRpb24gYWJzb2x1dGUgKi9cXG4gIH1cXG4gIFxcbiAgLmVsYXBzZWQtdGltZSB7XFxuICAgIGxlZnQ6IDA7IC8qIEtlZXAgbGVmdCBwb3NpdGlvbmluZyAqL1xcbiAgfVxcbiAgXFxuICAudG90YWwtdGltZSB7XFxuICAgIHJpZ2h0OiAwOyAvKiBLZWVwIHJpZ2h0IHBvc2l0aW9uaW5nICovXFxuICB9XFxuICBcXG4gIC5zZWFyY2gtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIENoYW5nZSB0byAxMDAlICovXFxuICAgIGRpc3BsYXk6IGZsZXg7IC8qIEFkZCBkaXNwbGF5IGZsZXggKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIEFkZCBqdXN0aWZ5LWNvbnRlbnQgY2VudGVyICovXFxuICB9XFxuICBcXG4gIC5zcG90aWZ5LXNlYXJjaCB7XFxuICAgIHdpZHRoOiA5MCU7IC8qIENoYW5nZSB0byA5MCUgKi9cXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICB9XFxuICBcXG4gIC5idXR0b25zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgfVxcbiAgXFxuICBcXG4gIC5zdWJtaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURCOTU0O1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgfVxcblxcbiAgLnNraXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDA7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIH1cXG5cXG4gIC5za2lwLFxcbiAgLnN1Ym1pdCB7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgfVxcbiAgXFxuICBidXR0b25bZGlzYWJsZWRdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgfVxcbiAgXFxuXFxuLyogU29uZyBTZWFyY2ggKi9cXG5cXG4uc2VhcmNoLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogQWRkIHBvc2l0aW9uIHJlbGF0aXZlICovXFxuICAgIHdpZHRoOiAxMDAlOyAvKiBNYXRjaCB0aGUgd2lkdGggb2YgdGhlIHNlYXJjaCBpbnB1dCAqL1xcbn1cXG5cXG4ucmVzdWx0cy1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDJiO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICAvKiBsZWZ0OiAwOyAqL1xcbiAgICB0b3A6IGNhbGMoMTAwJSArIDVweCk7XFxuICB9XFxuICBcXG4gIFxcbiAgLnJlc3VsdC1pdGVtIHtcXG4gICAgcGFkZGluZzogOHB4IDEycHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICNmZmZmZmY7IC8qIFdoaXRlIHRleHQgY29sb3IgKi9cXG4gIH1cXG4gIFxcbiAgLnJlc3VsdC1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODsgLyogTGlnaHRlciBncmF5IGJhY2tncm91bmQgY29sb3IgZm9yIGhvdmVyICovXFxuICB9XFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgU3BvdGlmeVRva2VuTWFuYWdlciBmcm9tICcuL3Nwb3RpZnlUb2tlbk1hbmFnZXIuanMnO1xuXG5jb25zdCBjbGllbnRJZCA9IFwiNzRhYzk0OWNhNTg3NDAyNDg0ZGNlZjE0MDhiNGQ3ZjNcIjtcbmNvbnN0IGNsaWVudFNlY3JldCA9IFwiMzEzYTJjMTVmYzg0NGNhNWJjMjI3NTU1NzI4NzRlZTdcIjtcblxuLy8gY29uc3QgY2xpZW50SWQgPSBwcm9jZXNzLmVudi5TUE9USUZZX0NMSUVOVF9JRDtcbi8vIGNvbnN0IGNsaWVudFNlY3JldCA9IHByb2Nlc3MuZW52LlNQT1RJRllfQ0xJRU5UX1NFQ1JFVDtcblxuY29uc3QgdG9rZW5NYW5hZ2VyID0gbmV3IFNwb3RpZnlUb2tlbk1hbmFnZXIoY2xpZW50SWQsIGNsaWVudFNlY3JldCk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2hUcmFjayhzZWFyY2hUZXJtLCBtYXJrZXQgPSAnR0InKSB7XG5cbiAgICBjb25zb2xlLmxvZyhcIlN0YXJ0aW5nIFNwb3RpZnkgc2VhcmNoLi4uXCIpO1xuXG4gICAgLy8gU2VhcmNoIGZvciB0cmFjayBmaXJzdC4gSWYgbm8gcmVzdWx0cywgc2VhcmNoIGFydGlzdD8gQm90aCBhbnl3YXk/XG5cbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGF3YWl0IHRva2VuTWFuYWdlci5nZXRBY2Nlc3NUb2tlbigpO1xuXG4gICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXG4gICAgfTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIHNlYXJjaChzZWFyY2hUZXJtKSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICAgICAgcTogc2VhcmNoVGVybSxcbiAgICAgICAgICAgIHR5cGU6ICd0cmFjaycsXG4gICAgICAgICAgICBsaW1pdDogMTAsXG4gICAgICAgICAgICBtYXJrZXRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvc2VhcmNoPyR7cGFyYW1zfWAsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEudHJhY2tzLml0ZW1zKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLnRyYWNrcy5pdGVtcztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblxuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGF3YWl0IHNlYXJjaChzZWFyY2hUZXJtKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTcG90aWZ5VG9rZW5NYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihjbGllbnRJZCwgY2xpZW50U2VjcmV0KSB7XG4gICAgICB0aGlzLmNsaWVudElkID0gY2xpZW50SWQ7XG4gICAgICB0aGlzLmNsaWVudFNlY3JldCA9IGNsaWVudFNlY3JldDtcbiAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBudWxsO1xuICAgICAgdGhpcy5leHBpcmF0aW9uVGltZSA9IG51bGw7XG4gICAgfVxuICBcbiAgICBhc3luYyByZXF1ZXN0QWNjZXNzVG9rZW4oY2xpZW50SWQsIGNsaWVudFNlY3JldCkge1xuICAgICAgY29uc3QgdG9rZW5FbmRwb2ludCA9IFwiaHR0cHM6Ly9hY2NvdW50cy5zcG90aWZ5LmNvbS9hcGkvdG9rZW5cIjtcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICB9O1xuICAgICAgY29uc3QgYm9keSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICBncmFudF90eXBlOiBcImNsaWVudF9jcmVkZW50aWFsc1wiLFxuICAgICAgICBjbGllbnRfaWQ6IGNsaWVudElkLFxuICAgICAgICBjbGllbnRfc2VjcmV0OiBjbGllbnRTZWNyZXQsXG4gICAgICB9KTtcbiAgXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRva2VuRW5kcG9pbnQsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgYm9keTogYm9keSxcbiAgICAgIH0pO1xuICBcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YS5hY2Nlc3NfdG9rZW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gb2J0YWluIGFjY2VzcyB0b2tlblwiKTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGFzeW5jIGdldEFjY2Vzc1Rva2VuKCkge1xuICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIGlmICghdGhpcy5hY2Nlc3NUb2tlbiB8fCBjdXJyZW50VGltZSA+PSB0aGlzLmV4cGlyYXRpb25UaW1lKSB7XG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBhd2FpdCB0aGlzLnJlcXVlc3RBY2Nlc3NUb2tlbih0aGlzLmNsaWVudElkLCB0aGlzLmNsaWVudFNlY3JldCk7XG4gICAgICAgIGNvbnN0IGV4cGlyZXNJbk1pbGxpc2Vjb25kcyA9IDM2MDAgKiAxMDAwOyAvLyAxIGhvdXIgaW4gbWlsbGlzZWNvbmRzXG4gICAgICAgIHRoaXMuZXhwaXJhdGlvblRpbWUgPSBjdXJyZW50VGltZSArIGV4cGlyZXNJbk1pbGxpc2Vjb25kcztcbiAgICAgIH1cbiAgXG4gICAgICByZXR1cm4gdGhpcy5hY2Nlc3NUb2tlbjtcbiAgICB9XG4gIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlcy5jc3MnXG5cbmltcG9ydCB7IHNlYXJjaFRyYWNrIH0gZnJvbSAnLi9zcG90aWZ5JztcblxuY29uc3QgcGxheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheS1idXR0b25cIik7XG5jb25zdCBza2lwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5za2lwXCIpO1xuY29uc3Qgc2Vla0JhckJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlZWstYmFyLWJhY2tncm91bmRcIik7XG5jb25zdCBwcm9ncmVzc0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2Vlay1iYXItcHJvZ3Jlc3NcIik7XG5jb25zdCBlbGFwc2VkVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxhcHNlZC10aW1lXCIpO1xuXG5jb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhcImh0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3LzMyOGUxZGU0OWUxN2I0ZTFhY2UyZThmNmNkZDEwYjA3NzZhMTZiYzc/Y2lkPTc0YWM5NDljYTU4NzQwMjQ4NGRjZWYxNDA4YjRkN2YzXCIpO1xuXG5hdWRpby5hZGRFdmVudExpc3RlbmVyKFwidGltZXVwZGF0ZVwiLCAoKSA9PiB7XG4gICAgY29uc3QgcGxheUR1cmF0aW9uID0gYWxsb3dlZER1cmF0aW9uc1tjdXJyZW50VHVybiAtIDFdO1xuICAgIGNvbnN0IHByb2dyZXNzUGVyY2VudGFnZSA9IChhdWRpby5jdXJyZW50VGltZSAvIHBsYXlEdXJhdGlvbikgKiAxMDA7XG4gICAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSBgJHtwcm9ncmVzc1BlcmNlbnRhZ2V9JWA7XG5cbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihhdWRpby5jdXJyZW50VGltZSAvIDYwKTtcbiAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcihhdWRpby5jdXJyZW50VGltZSAlIDYwKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICBlbGFwc2VkVGltZS50ZXh0Q29udGVudCA9IGAke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xufSk7XG5cbmxldCBjdXJyZW50VHVybiA9IDE7XG5jb25zdCBhbGxvd2VkRHVyYXRpb25zID0gWzEsIDIsIDQsIDcsIDExLCAxNl07XG5sZXQgZW5kVGltZTsgLy8gRGVjbGFyZSBlbmRUaW1lIHZhcmlhYmxlIG91dHNpZGUgdGhlIGV2ZW50IGxpc3RlbmVyXG5sZXQgdGltZW91dElEOyAvLyBEZWNsYXJlIHRpbWVvdXRJRCB2YXJpYWJsZSB0byBzdG9yZSB0aGUgc2V0VGltZW91dCBpZGVudGlmaWVyXG5cbmZ1bmN0aW9uIHVwZGF0ZVNlZWtCYXJCYWNrZ3JvdW5kKHR1cm4pIHtcbiAgICBjb25zdCBwbGF5RHVyYXRpb24gPSBhbGxvd2VkRHVyYXRpb25zW3R1cm4gLSAxXTtcbiAgICBjb25zdCBwZXJjZW50YWdlID0gKHBsYXlEdXJhdGlvbiAvIDE2KSAqIDEwMDtcbiAgICBzZWVrQmFyQmFja2dyb3VuZC5zdHlsZS53aWR0aCA9IGAke3BlcmNlbnRhZ2V9JWA7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2dyZXNzQmFyKCkge1xuICAgIGNvbnN0IHByb2dyZXNzUGVyY2VudGFnZSA9ICgoYXVkaW8uY3VycmVudFRpbWUgLyAxNikgKiAxMDAgKyAxKTtcbiAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IGAke3Byb2dyZXNzUGVyY2VudGFnZX0lYDtcblxuICAgIGlmICghYXVkaW8ucGF1c2VkKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVQcm9ncmVzc0Jhcik7XG4gICAgfVxufVxuXG5wbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKGF1ZGlvLnBhdXNlZCkge1xuICAgICAgICBjb25zdCBwbGF5RHVyYXRpb24gPSBhbGxvd2VkRHVyYXRpb25zW2N1cnJlbnRUdXJuIC0gMV07XG4gICAgICAgIGVuZFRpbWUgPSBNYXRoLm1pbihhdWRpby5kdXJhdGlvbiwgcGxheUR1cmF0aW9uKTtcblxuICAgICAgICBhdWRpby5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIGF1ZGlvLnBsYXkoKTtcbiAgICAgICAgcGxheUJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYSBmYS1wYXVzZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVQcm9ncmVzc0Jhcik7XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJRCk7IC8vIENsZWFyIGFueSBleGlzdGluZyB0aW1lb3V0XG4gICAgICAgIHRpbWVvdXRJRCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYXVkaW8ucGF1c2UoKTtcbiAgICAgICAgICAgIHBsYXlCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEgZmEtcGxheVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nO1xuICAgICAgICB9LCBlbmRUaW1lICogMTAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYXVkaW8ucGF1c2UoKTtcbiAgICAgICAgcGxheUJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYSBmYS1wbGF5XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPic7XG4gICAgfVxufSk7XG5cbi8vIFVwZGF0ZSBza2lwQnV0dG9uIGNsaWNrIGV2ZW50IGhhbmRsZXJcbnNraXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoY3VycmVudFR1cm4gPCBhbGxvd2VkRHVyYXRpb25zLmxlbmd0aCkge1xuICAgICAgICBjdXJyZW50VHVybisrO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBlbmRUaW1lIGFuZCB0aGUgdGltZW91dFxuICAgIGlmICghYXVkaW8ucGF1c2VkKSB7XG4gICAgICAgIGNvbnN0IHBsYXlEdXJhdGlvbiA9IGFsbG93ZWREdXJhdGlvbnNbY3VycmVudFR1cm4gLSAxXTtcbiAgICAgICAgZW5kVGltZSA9IE1hdGgubWluKGF1ZGlvLmR1cmF0aW9uLCBwbGF5RHVyYXRpb24pO1xuICAgICAgICBjb25zdCByZW1haW5pbmdUaW1lID0gKGVuZFRpbWUgLSBhdWRpby5jdXJyZW50VGltZSkgKiAxMDAwO1xuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SUQpOyAvLyBDbGVhciB0aGUgZXhpc3RpbmcgdGltZW91dFxuICAgICAgICB0aW1lb3V0SUQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGF1ZGlvLnBhdXNlKCk7XG4gICAgICAgICAgICBwbGF5QnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhIGZhLXBsYXlcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+JztcbiAgICAgICAgfSwgcmVtYWluaW5nVGltZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlU2Vla0JhckJhY2tncm91bmQoY3VycmVudFR1cm4pO1xuICAgIHVwZGF0ZVNraXBCdXR0b25UZXh0KCk7XG59KTtcblxuLy8gRnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBza2lwIGJ1dHRvbiB0ZXh0XG5mdW5jdGlvbiB1cGRhdGVTa2lwQnV0dG9uVGV4dCgpIHtcbiAgICBpZiAoY3VycmVudFR1cm4gPCBhbGxvd2VkRHVyYXRpb25zLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBza2lwU2Vjb25kcyA9IGFsbG93ZWREdXJhdGlvbnNbY3VycmVudFR1cm5dIC0gYWxsb3dlZER1cmF0aW9uc1tjdXJyZW50VHVybiAtIDFdO1xuICAgICAgICBza2lwQnV0dG9uLnRleHRDb250ZW50ID0gYFNLSVAgKCske3NraXBTZWNvbmRzfXMpYDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBza2lwQnV0dG9uLnRleHRDb250ZW50ID0gXCJTS0lQXCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVNYXJrZXIoZHVyYXRpb24pIHtcbiAgICBjb25zdCBtYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSAoZHVyYXRpb24gLyAxNikgKiAxMDA7XG5cbiAgICBtYXJrZXIuc3R5bGUud2lkdGggPSBcIjFweFwiO1xuICAgIG1hcmtlci5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgICBtYXJrZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgbWFya2VyLnN0eWxlLmxlZnQgPSBgJHtwZXJjZW50YWdlfSVgO1xuICAgIG1hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZmZmZcIjtcblxuICAgIHJldHVybiBtYXJrZXI7XG59XG5cbmNvbnN0IG1hcmtlcnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlZWstYmFyLW1hcmtlcnNcIik7XG5hbGxvd2VkRHVyYXRpb25zLmZvckVhY2goZHVyYXRpb24gPT4ge1xuICAgIGNvbnN0IG1hcmtlciA9IGNyZWF0ZU1hcmtlcihkdXJhdGlvbiArIDAuMSk7XG4gICAgbWFya2Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtYXJrZXIpO1xufSk7XG5cbi8vIEluaXRpYWxpemUgdGhlIHNlZWsgYmFyIGJhY2tncm91bmQgZm9yIHRoZSBmaXJzdCB0dXJuXG51cGRhdGVTZWVrQmFyQmFja2dyb3VuZChjdXJyZW50VHVybik7XG51cGRhdGVTa2lwQnV0dG9uVGV4dCgpO1xuXG5cbi8vIFNlYXJjaCBzZW5nc1xuYXN5bmMgZnVuY3Rpb24gc2VhcmNoU3BvdGlmeShxdWVyeSkge1xuXG4gICAgY29uc29sZS5sb2coXCJTcG90aWZ5IHNlYXJjaDogXCIsIHF1ZXJ5KTtcbiAgICByZXR1cm47XG5cbiAgICAvLyBZb3UgbmVlZCB0byBicmluZyB0aGUgU3BvdGlmeSBjb2RlIGludG8gdGhpcyBwcm9qIGZyb20gT1REIG5leHRcblxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gJ1lPVVJfU1BPVElGWV9BQ0NFU1NfVE9LRU4nO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL3NlYXJjaD9xPSR7cXVlcnl9JnR5cGU9dHJhY2smbGltaXQ9NWAsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIFxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3Qgc2VhcmNoUmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtcmVzdWx0cycpO1xuICAgIHNlYXJjaFJlc3VsdHMuaW5uZXJIVE1MID0gJyc7XG4gIFxuICAgIGRhdGEudHJhY2tzLml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHJlc3VsdEl0ZW0uY2xhc3NMaXN0LmFkZCgncmVzdWx0LWl0ZW0nKTtcbiAgICAgIHJlc3VsdEl0ZW0udGV4dENvbnRlbnQgPSBgJHtpdGVtLm5hbWV9IC0gJHtpdGVtLmFydGlzdHNbMF0ubmFtZX1gO1xuICAgICAgcmVzdWx0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gSGFuZGxlIHRoZSByZXN1bHQgc2VsZWN0aW9uIGhlcmUuXG4gICAgICAgIGNvbnNvbGUubG9nKCdTZWxlY3RlZDonLCBpdGVtKTtcbiAgICAgIH0pO1xuICBcbiAgICAgIHNlYXJjaFJlc3VsdHMuYXBwZW5kQ2hpbGQocmVzdWx0SXRlbSk7XG4gICAgfSk7XG4gIH1cblxuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG5cbiAgICBsZXQgdGltZW91dDtcblxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAgICAgY29uc3QgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcblxuICAgICAgICBpZiAoY2FsbE5vdykge1xuICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwb3RpZnktc2VhcmNoJyk7XG5cbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZGVib3VuY2UoKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgcXVlcnkgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzLWNvbnRhaW5lcicpO1xuICAgIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgcmVzdWx0c0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBcbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIHNlYXJjaFRyYWNrKHF1ZXJ5KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goKHRyYWNrLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcmVzdWx0SXRlbS5jbGFzc0xpc3QuYWRkKCdyZXN1bHQtaXRlbScpO1xuICAgICAgICAgICAgcmVzdWx0SXRlbS50ZXh0Q29udGVudCA9IGAke3RyYWNrLmFydGlzdHNbMF0ubmFtZX0gLSAke3RyYWNrLm5hbWV9YDtcbiAgICAgICAgICAgIHJlc3VsdEl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLXRyYWNrLWlkJywgdHJhY2suaWQpO1xuICBcbiAgICAgICAgICAgIHJlc3VsdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRUcmFja0lkID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10cmFjay1pZCcpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VsZWN0ZWQgdHJhY2sgSUQ6Jywgc2VsZWN0ZWRUcmFja0lkKTtcbiAgXG4gICAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBzZWxlY3RlZCB0cmFjayBJRCBzb21ld2hlcmVcbiAgICAgICAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGRlbi1pbnB1dC1maWVsZCcpLnZhbHVlID0gc2VsZWN0ZWRUcmFja0lkO1xuICBcbiAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBzZWFyY2ggaW5wdXQgd2l0aCB0aGUgc2VsZWN0ZWQgcmVzdWx0IGFuZCBoaWRlIHRoZSByZXN1bHRzIGNvbnRhaW5lclxuICAgICAgICAgICAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgcmVzdWx0c0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfSk7XG4gIFxuICAgICAgICAgICAgcmVzdWx0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN1bHRJdGVtKTtcbiAgICAgICAgICB9KTtcbiAgXG4gICAgICAgICAgcmVzdWx0c0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCA3NTApKTtcbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9