/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/clipboard/dist/clipboard.js":
/*!**************************************************!*\
  !*** ./node_modules/clipboard/dist/clipboard.js ***!
  \**************************************************/
/***/ (function(module) {

/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 686:
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_623__) {

"use strict";

// EXPORTS
__nested_webpack_require_623__.d(__nested_webpack_exports__, {
  "default": function() { return /* binding */ clipboard; }
});

// EXTERNAL MODULE: ./node_modules/tiny-emitter/index.js
var tiny_emitter = __nested_webpack_require_623__(279);
var tiny_emitter_default = /*#__PURE__*/__nested_webpack_require_623__.n(tiny_emitter);
// EXTERNAL MODULE: ./node_modules/good-listener/src/listen.js
var listen = __nested_webpack_require_623__(370);
var listen_default = /*#__PURE__*/__nested_webpack_require_623__.n(listen);
// EXTERNAL MODULE: ./node_modules/select/src/select.js
var src_select = __nested_webpack_require_623__(817);
var select_default = /*#__PURE__*/__nested_webpack_require_623__.n(src_select);
;// CONCATENATED MODULE: ./src/common/command.js
/**
 * Executes a given operation type.
 * @param {String} type
 * @return {Boolean}
 */
function command(type) {
  try {
    return document.execCommand(type);
  } catch (err) {
    return false;
  }
}
;// CONCATENATED MODULE: ./src/actions/cut.js


/**
 * Cut action wrapper.
 * @param {String|HTMLElement} target
 * @return {String}
 */

var ClipboardActionCut = function ClipboardActionCut(target) {
  var selectedText = select_default()(target);
  command('cut');
  return selectedText;
};

/* harmony default export */ var actions_cut = (ClipboardActionCut);
;// CONCATENATED MODULE: ./src/common/create-fake-element.js
/**
 * Creates a fake textarea element with a value.
 * @param {String} value
 * @return {HTMLElement}
 */
function createFakeElement(value) {
  var isRTL = document.documentElement.getAttribute('dir') === 'rtl';
  var fakeElement = document.createElement('textarea'); // Prevent zooming on iOS

  fakeElement.style.fontSize = '12pt'; // Reset box model

  fakeElement.style.border = '0';
  fakeElement.style.padding = '0';
  fakeElement.style.margin = '0'; // Move element out of screen horizontally

  fakeElement.style.position = 'absolute';
  fakeElement.style[isRTL ? 'right' : 'left'] = '-9999px'; // Move element to the same position vertically

  var yPosition = window.pageYOffset || document.documentElement.scrollTop;
  fakeElement.style.top = "".concat(yPosition, "px");
  fakeElement.setAttribute('readonly', '');
  fakeElement.value = value;
  return fakeElement;
}
;// CONCATENATED MODULE: ./src/actions/copy.js



/**
 * Create fake copy action wrapper using a fake element.
 * @param {String} target
 * @param {Object} options
 * @return {String}
 */

var fakeCopyAction = function fakeCopyAction(value, options) {
  var fakeElement = createFakeElement(value);
  options.container.appendChild(fakeElement);
  var selectedText = select_default()(fakeElement);
  command('copy');
  fakeElement.remove();
  return selectedText;
};
/**
 * Copy action wrapper.
 * @param {String|HTMLElement} target
 * @param {Object} options
 * @return {String}
 */


var ClipboardActionCopy = function ClipboardActionCopy(target) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    container: document.body
  };
  var selectedText = '';

  if (typeof target === 'string') {
    selectedText = fakeCopyAction(target, options);
  } else if (target instanceof HTMLInputElement && !['text', 'search', 'url', 'tel', 'password'].includes(target === null || target === void 0 ? void 0 : target.type)) {
    // If input type doesn't support `setSelectionRange`. Simulate it. https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
    selectedText = fakeCopyAction(target.value, options);
  } else {
    selectedText = select_default()(target);
    command('copy');
  }

  return selectedText;
};

/* harmony default export */ var actions_copy = (ClipboardActionCopy);
;// CONCATENATED MODULE: ./src/actions/default.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



/**
 * Inner function which performs selection from either `text` or `target`
 * properties and then executes copy or cut operations.
 * @param {Object} options
 */

var ClipboardActionDefault = function ClipboardActionDefault() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // Defines base properties passed from constructor.
  var _options$action = options.action,
      action = _options$action === void 0 ? 'copy' : _options$action,
      container = options.container,
      target = options.target,
      text = options.text; // Sets the `action` to be performed which can be either 'copy' or 'cut'.

  if (action !== 'copy' && action !== 'cut') {
    throw new Error('Invalid "action" value, use either "copy" or "cut"');
  } // Sets the `target` property using an element that will be have its content copied.


  if (target !== undefined) {
    if (target && _typeof(target) === 'object' && target.nodeType === 1) {
      if (action === 'copy' && target.hasAttribute('disabled')) {
        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
      }

      if (action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
      }
    } else {
      throw new Error('Invalid "target" value, use a valid Element');
    }
  } // Define selection strategy based on `text` property.


  if (text) {
    return actions_copy(text, {
      container: container
    });
  } // Defines which selection strategy based on `target` property.


  if (target) {
    return action === 'cut' ? actions_cut(target) : actions_copy(target, {
      container: container
    });
  }
};

/* harmony default export */ var actions_default = (ClipboardActionDefault);
;// CONCATENATED MODULE: ./src/clipboard.js
function clipboard_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { clipboard_typeof = function _typeof(obj) { return typeof obj; }; } else { clipboard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return clipboard_typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */

function getAttributeValue(suffix, element) {
  var attribute = "data-clipboard-".concat(suffix);

  if (!element.hasAttribute(attribute)) {
    return;
  }

  return element.getAttribute(attribute);
}
/**
 * Base class which takes one or more elements, adds event listeners to them,
 * and instantiates a new `ClipboardAction` on each click.
 */


var Clipboard = /*#__PURE__*/function (_Emitter) {
  _inherits(Clipboard, _Emitter);

  var _super = _createSuper(Clipboard);

  /**
   * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
   * @param {Object} options
   */
  function Clipboard(trigger, options) {
    var _this;

    _classCallCheck(this, Clipboard);

    _this = _super.call(this);

    _this.resolveOptions(options);

    _this.listenClick(trigger);

    return _this;
  }
  /**
   * Defines if attributes would be resolved using internal setter functions
   * or custom functions that were passed in the constructor.
   * @param {Object} options
   */


  _createClass(Clipboard, [{
    key: "resolveOptions",
    value: function resolveOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
      this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
      this.text = typeof options.text === 'function' ? options.text : this.defaultText;
      this.container = clipboard_typeof(options.container) === 'object' ? options.container : document.body;
    }
    /**
     * Adds a click event listener to the passed trigger.
     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
     */

  }, {
    key: "listenClick",
    value: function listenClick(trigger) {
      var _this2 = this;

      this.listener = listen_default()(trigger, 'click', function (e) {
        return _this2.onClick(e);
      });
    }
    /**
     * Defines a new `ClipboardAction` on each click event.
     * @param {Event} e
     */

  }, {
    key: "onClick",
    value: function onClick(e) {
      var trigger = e.delegateTarget || e.currentTarget;
      var action = this.action(trigger) || 'copy';
      var text = actions_default({
        action: action,
        container: this.container,
        target: this.target(trigger),
        text: this.text(trigger)
      }); // Fires an event based on the copy operation result.

      this.emit(text ? 'success' : 'error', {
        action: action,
        text: text,
        trigger: trigger,
        clearSelection: function clearSelection() {
          if (trigger) {
            trigger.focus();
          }

          window.getSelection().removeAllRanges();
        }
      });
    }
    /**
     * Default `action` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultAction",
    value: function defaultAction(trigger) {
      return getAttributeValue('action', trigger);
    }
    /**
     * Default `target` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultTarget",
    value: function defaultTarget(trigger) {
      var selector = getAttributeValue('target', trigger);

      if (selector) {
        return document.querySelector(selector);
      }
    }
    /**
     * Allow fire programmatically a copy action
     * @param {String|HTMLElement} target
     * @param {Object} options
     * @returns Text copied.
     */

  }, {
    key: "defaultText",

    /**
     * Default `text` lookup function.
     * @param {Element} trigger
     */
    value: function defaultText(trigger) {
      return getAttributeValue('text', trigger);
    }
    /**
     * Destroy lifecycle.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.listener.destroy();
    }
  }], [{
    key: "copy",
    value: function copy(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        container: document.body
      };
      return actions_copy(target, options);
    }
    /**
     * Allow fire programmatically a cut action
     * @param {String|HTMLElement} target
     * @returns Text cutted.
     */

  }, {
    key: "cut",
    value: function cut(target) {
      return actions_cut(target);
    }
    /**
     * Returns the support of the given action, or all actions if no action is
     * given.
     * @param {String} [action]
     */

  }, {
    key: "isSupported",
    value: function isSupported() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];
      var actions = typeof action === 'string' ? [action] : action;
      var support = !!document.queryCommandSupported;
      actions.forEach(function (action) {
        support = support && !!document.queryCommandSupported(action);
      });
      return support;
    }
  }]);

  return Clipboard;
}((tiny_emitter_default()));

/* harmony default export */ var clipboard = (Clipboard);

/***/ }),

/***/ 828:
/***/ (function(module) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),

/***/ 438:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_15749__) {

var closest = __nested_webpack_require_15749__(828);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),

/***/ 879:
/***/ (function(__unused_webpack_module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),

/***/ 370:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_19113__) {

var is = __nested_webpack_require_19113__(879);
var delegate = __nested_webpack_require_19113__(438);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),

/***/ 817:
/***/ (function(module) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),

/***/ 279:
/***/ (function(module) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;
module.exports.TinyEmitter = E;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_24495__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_24495__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nested_webpack_require_24495__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__nested_webpack_require_24495__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_24495__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_24495__.o(definition, key) && !__nested_webpack_require_24495__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__nested_webpack_require_24495__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_24495__(686);
/******/ })()
.default;
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  height: 90%;\n}\n\nbody {\n  background-color: #121212;\n  color: #ffffff;\n  margin: 0;\n  font-family: sans-serif;\n  padding-top: 60px;\n  max-width: 100vw;\n  height: 100vh;\n  overflow: auto;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  height: 50px;\n  padding: 0 15px;\n  border-bottom: 1px solid #ffffff;\n  background-color: #121212;\n}\n\n.left {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  flex: 1; \n}\n\n.right {\n  display: flex;\n  align-items: center;\n  flex: 1; \n}\n\n.title {\n  flex: 2; \n  text-align: center; \n}\n\n.how-to-play {\n  margin-left: auto;\n}\n\n\n.container {\n    display: flex;\n    flex-direction: column;\n    min-height: 75%;\n    justify-content: space-between;\n    max-width: 800px;\n    margin: 1rem auto;\n    padding: 20px 10px;\n    overflow: none;\n}\n\n.previous,\n.create,\n.how-to-play {\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.play-container {\n  margin-bottom: 20px;\n}\n\n.seek-bar-container {\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 100vw;\n}\n\n.seek-bar {\n  width: 100%;\n  height: 10px;\n  position: relative;\n  border-top: 1px solid #ffffff;\n  border-bottom: 1px solid #ffffff;\n  background-color: transparent;\n  margin: 0;\n}\n\n.seek-bar-background {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-color: #282828;\n  transform: scaleX(0);\n  transform-origin: left;\n}\n\n.seek-bar-markers {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.seek-bar-progress {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-color: #1DB954;\n  transform: scaleX(0);\n  transform-origin: left;\n}\n\n.progress {\n  height: 100%;\n  background-color: #1DB954;\n  width: 0;\n}\n\n.section {\n  height: 100%;\n  position: absolute;\n  background-color: #282828;\n}\n\n.play-button-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 10px 0;\n  position: relative;\n}\n\n.play-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  background-color: #00000000;\n  border: 2px solid white;\n  color: #ffffff;\n  border-radius: 50%;\n  cursor: pointer;\n  outline: none;\n  font-size: 20px;\n}\n\n.elapsed-time,\n.total-time {\n  font-size: 14px;\n  position: absolute;\n}\n\n.elapsed-time {\n  left: 0;\n}\n\n.total-time {\n  right: 0;\n}\n\n.search-container {\n  margin-bottom: 20px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.spotify-search {\n  width: 90%;\n  padding: 10px;\n  background-color: #333;\n  border: solid 1px black;\n  color: #ffffff;\n  border-radius: 5px;\n  outline: none;\n}\n\n.buttons-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n}\n\n.submit {\n  background-color: #1DB954;\n  color: #000000;\n  border: none;\n}\n\n.skip {\n  background-color: #00000000;\n  color: #ffffff;\n  border: 1px solid white;\n}\n\n.skip,\n.submit {\n  padding: 10px 20px;\n  border-radius: 20px;\n  cursor: pointer;\n  outline: none;\n  letter-spacing: 0.1em;\n  line-height: 1rem;\n}\n\nbutton[disabled] {\n  background-color: gray;\n  color: white;\n  cursor: not-allowed;\n}\n\n.search-container {\n  position: relative;\n  width: 100%;\n}\n\n.results-container {\n  position: absolute;\n  background-color: #333;\n  color: #ffffff;\n  width: 95%;\n  max-height: 200px;\n  overflow-y: auto;\n  border: 1px solid #0000002b;\n  display: none;\n  top: calc(100% + 5px);\n}\n\n.result-item {\n  padding: 8px 12px;\n  cursor: pointer;\n  color: #ffffff;\n}\n\n.result-item:hover {\n  background-color: #282828;\n}\n\n.guess {\n  height: 40px;\n  border: 1px solid #ffffff62;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center; \n  padding-left: 10px;\n  font-size: 16px; \n  font-weight: 300; \n  color: #ffffffaa; \n}\n\n.guess-text {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex-grow: 1;\n}\n\n.red-x-icon {\n  color: rgba(255, 0, 0, 0.75);\n  font-weight: bold;\n  margin-right: 5px;\n  padding-right: 12px;\n}\n\n.yellow-x-icon {\n  color: rgba(255, 215, 0, 0.75);\n  font-weight: bold;\n  margin-right: 5px;\n  padding-right: 12px;\n}\n\n.green-check-icon {\n  color: green;\n  font-weight: bold;\n  margin-right: 5px;\n  padding-right: 8px; \n} \n\n\n/* Results screen */\n\n#resultsModal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 51px;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: #121212;\n}\n\n#resultsModalcontent {\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2em;\n  text-align: center;\n}\n\n.album-art {\n  width: 250px;\n  height: 250px;\n  object-fit: cover;\n  border-radius: 10px;\n  margin-bottom: 0.5rem;\n}\n\n.song-title {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #FFFFFF;\n}\n\n.song-artist {\n  color: #888;\n  margin-bottom: 2rem;\n}\n\n.share-results-btn {\n  padding: 10px 20px;\n  font-size: 1.2em;\n  color: #FFFFFF;\n  background-color: #1DB954;\n  border: none;\n  border-radius: 50px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.share-results-btn:hover {\n  background-color: #148b3b;\n}\n\n.results-guesses {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n\n.results-guess {\n  width: 50px;\n  height: 10px;\n  margin: 2px;\n}\n\n.results-guess.grey { background-color: #888; }\n.results-guess.yellow { background-color: #FFD700; }\n.results-guess.red { background-color: #FF0000; }\n.results-guess.green { background-color: #008000; }\n\n\n/* Countdown timer */\n.next-sheardle {\n  font-family: 'Roboto', sans-serif;\n  text-align: center;\n  margin: 2rem 0;\n}\n\n.next-sheardle p {\n  margin: 0;\n  padding: 0;\n}\n\n.next-sheardle p:first-child {\n  color: #888888;\n  font-size: 16px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n.next-sheardle .countdown {\n  color: #bbbbbb;\n  font-size: 32px;\n  font-weight: bold;\n  margin-top: 0.5rem;\n}\n\n/* How to play modal */\n.icon {\n  color: #7c7c7c;\n  margin-right: 10px;\n  font-size: 20px;\n}\n\n.flex-row {\n  display: flex;\n  align-items: center; \n  margin-bottom: 20px;\n}\n\n#howToPlayModal {\n  position: fixed;\n  z-index: 1;\n  padding-top: 17.5%;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0,0,0);\n  background-color: rgba(0,0,0,0.7); /* Making the background darker */\n}\n\n#howToPlayContent {\n  background-color: #1a1a1a;\n  margin: auto;\n  padding: 20px;\n  border: 1px solid #8888887a;\n  width: 80%;\n  max-width: 500px;\n  position: relative;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n\n  font-weight: 525;\n\n}\n\n.close {\n  color: #aaa;\n  font-size: 28px;\n  font-weight: bold;\n  position: absolute;\n  right: 10px;\n  top: 0;\n}\n\n\n#howToPlayContent h1 {\n  text-align: center; \n  font-size: 24px;\n  padding-bottom: 20px;\n}\n\n#howToPlayContent p {\n  margin-bottom: 10px; \n}\n\n#howToPlayContent i {\n  margin-right: 1rem;\n}\n\n#howToPlayContent #playFirstTurn {\n  background-color: #1DB954;\n  color: #ffffff;\n  border: none;\n  padding: 10px 30px; \n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  font-weight: 700;\n  margin: 4px 2px;\n  transition-duration: 0.4s;\n  cursor: pointer;\n  border-radius: 25px; /* Adding border radius to create a pill shape */\n}\n\n#howToPlayContent #playFirstTurn:hover {\n  background-color: #888;\n  color: white;\n}\n\n/* Create Sheardle */\n#createSheardleModal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0,0,0,0.4);\n}\n\n#createSheardleContent {\n  background-color: #121212;\n  color: #ffffff;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n  font-family: sans-serif;\n}\n\n.close {\n  color: #aaaaaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: #ffffff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n#searchContainer {\n  margin-bottom: 20px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n#searchInput {\n  width: 90%;\n  padding: 10px;\n  background-color: #333;\n  border: solid 1px black;\n  color: #ffffff;\n  border-radius: 5px;\n  outline: none;\n}\n\n#resultsContainer {\n  background-color: #333;\n  color: #ffffff;\n  width: 90%;\n  max-height: 200px;\n  overflow-y: auto;\n  border: 1px solid #0000002b;\n  display: none;\n}\n\n.resultItem {\n  padding: 10px;\n  cursor: pointer;\n}\n\n.resultItem:hover {\n  background-color: #282828;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;;EAEE,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,SAAS;EACT,uBAAuB;EACvB,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,gCAAgC;EAChC,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,OAAO;AACT;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,OAAO;AACT;;AAEA;EACE,OAAO;EACP,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,8BAA8B;IAC9B,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,cAAc;AAClB;;AAEA;;;EAGE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,2BAA2B;EAC3B,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,6BAA6B;EAC7B,gCAAgC;EAChC,6BAA6B;EAC7B,SAAS;AACX;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,oBAAoB;EACpB,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,oBAAoB;EACpB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,2BAA2B;EAC3B,uBAAuB;EACvB,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,eAAe;AACjB;;AAEA;;EAEE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,cAAc;EACd,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,YAAY;AACd;;AAEA;EACE,2BAA2B;EAC3B,cAAc;EACd,uBAAuB;AACzB;;AAEA;;EAEE,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,aAAa;EACb,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,cAAc;EACd,UAAU;EACV,iBAAiB;EACjB,gBAAgB;EAChB,2BAA2B;EAC3B,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,2BAA2B;EAC3B,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,4BAA4B;EAC5B,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,8BAA8B;EAC9B,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;AACpB;;;AAGA,mBAAmB;;AAEnB;EACE,aAAa;EACb,eAAe;EACf,UAAU;EACV,OAAO;EACP,SAAS;EACT,WAAW;EACX,YAAY;EACZ,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,2BAA2B;EAC3B,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;EACd,yBAAyB;EACzB,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,WAAW;AACb;;AAEA,sBAAsB,sBAAsB,EAAE;AAC9C,wBAAwB,yBAAyB,EAAE;AACnD,qBAAqB,yBAAyB,EAAE;AAChD,uBAAuB,yBAAyB,EAAE;;;AAGlD,oBAAoB;AACpB;EACE,iCAAiC;EACjC,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,eAAe;EACf,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA,sBAAsB;AACtB;EACE,cAAc;EACd,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,UAAU;EACV,kBAAkB;EAClB,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,cAAc;EACd,4BAA4B;EAC5B,iCAAiC,EAAE,iCAAiC;AACtE;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,2BAA2B;EAC3B,UAAU;EACV,gBAAgB;EAChB,kBAAkB;;EAElB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;;EAEtB,gBAAgB;;AAElB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;EACX,MAAM;AACR;;;AAGA;EACE,kBAAkB;EAClB,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;EACrB,qBAAqB;EACrB,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,yBAAyB;EACzB,eAAe;EACf,mBAAmB,EAAE,gDAAgD;AACvE;;AAEA;EACE,sBAAsB;EACtB,YAAY;AACd;;AAEA,oBAAoB;AACpB;EACE,aAAa;EACb,eAAe;EACf,UAAU;EACV,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,cAAc;EACd,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;;EAEE,cAAc;EACd,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,cAAc;EACd,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,cAAc;EACd,UAAU;EACV,iBAAiB;EACjB,gBAAgB;EAChB,2BAA2B;EAC3B,aAAa;AACf;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":["html,\nbody {\n  height: 90%;\n}\n\nbody {\n  background-color: #121212;\n  color: #ffffff;\n  margin: 0;\n  font-family: sans-serif;\n  padding-top: 60px;\n  max-width: 100vw;\n  height: 100vh;\n  overflow: auto;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  height: 50px;\n  padding: 0 15px;\n  border-bottom: 1px solid #ffffff;\n  background-color: #121212;\n}\n\n.left {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  flex: 1; \n}\n\n.right {\n  display: flex;\n  align-items: center;\n  flex: 1; \n}\n\n.title {\n  flex: 2; \n  text-align: center; \n}\n\n.how-to-play {\n  margin-left: auto;\n}\n\n\n.container {\n    display: flex;\n    flex-direction: column;\n    min-height: 75%;\n    justify-content: space-between;\n    max-width: 800px;\n    margin: 1rem auto;\n    padding: 20px 10px;\n    overflow: none;\n}\n\n.previous,\n.create,\n.how-to-play {\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.play-container {\n  margin-bottom: 20px;\n}\n\n.seek-bar-container {\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 100vw;\n}\n\n.seek-bar {\n  width: 100%;\n  height: 10px;\n  position: relative;\n  border-top: 1px solid #ffffff;\n  border-bottom: 1px solid #ffffff;\n  background-color: transparent;\n  margin: 0;\n}\n\n.seek-bar-background {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-color: #282828;\n  transform: scaleX(0);\n  transform-origin: left;\n}\n\n.seek-bar-markers {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.seek-bar-progress {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-color: #1DB954;\n  transform: scaleX(0);\n  transform-origin: left;\n}\n\n.progress {\n  height: 100%;\n  background-color: #1DB954;\n  width: 0;\n}\n\n.section {\n  height: 100%;\n  position: absolute;\n  background-color: #282828;\n}\n\n.play-button-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 10px 0;\n  position: relative;\n}\n\n.play-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  background-color: #00000000;\n  border: 2px solid white;\n  color: #ffffff;\n  border-radius: 50%;\n  cursor: pointer;\n  outline: none;\n  font-size: 20px;\n}\n\n.elapsed-time,\n.total-time {\n  font-size: 14px;\n  position: absolute;\n}\n\n.elapsed-time {\n  left: 0;\n}\n\n.total-time {\n  right: 0;\n}\n\n.search-container {\n  margin-bottom: 20px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.spotify-search {\n  width: 90%;\n  padding: 10px;\n  background-color: #333;\n  border: solid 1px black;\n  color: #ffffff;\n  border-radius: 5px;\n  outline: none;\n}\n\n.buttons-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n}\n\n.submit {\n  background-color: #1DB954;\n  color: #000000;\n  border: none;\n}\n\n.skip {\n  background-color: #00000000;\n  color: #ffffff;\n  border: 1px solid white;\n}\n\n.skip,\n.submit {\n  padding: 10px 20px;\n  border-radius: 20px;\n  cursor: pointer;\n  outline: none;\n  letter-spacing: 0.1em;\n  line-height: 1rem;\n}\n\nbutton[disabled] {\n  background-color: gray;\n  color: white;\n  cursor: not-allowed;\n}\n\n.search-container {\n  position: relative;\n  width: 100%;\n}\n\n.results-container {\n  position: absolute;\n  background-color: #333;\n  color: #ffffff;\n  width: 95%;\n  max-height: 200px;\n  overflow-y: auto;\n  border: 1px solid #0000002b;\n  display: none;\n  top: calc(100% + 5px);\n}\n\n.result-item {\n  padding: 8px 12px;\n  cursor: pointer;\n  color: #ffffff;\n}\n\n.result-item:hover {\n  background-color: #282828;\n}\n\n.guess {\n  height: 40px;\n  border: 1px solid #ffffff62;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center; \n  padding-left: 10px;\n  font-size: 16px; \n  font-weight: 300; \n  color: #ffffffaa; \n}\n\n.guess-text {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex-grow: 1;\n}\n\n.red-x-icon {\n  color: rgba(255, 0, 0, 0.75);\n  font-weight: bold;\n  margin-right: 5px;\n  padding-right: 12px;\n}\n\n.yellow-x-icon {\n  color: rgba(255, 215, 0, 0.75);\n  font-weight: bold;\n  margin-right: 5px;\n  padding-right: 12px;\n}\n\n.green-check-icon {\n  color: green;\n  font-weight: bold;\n  margin-right: 5px;\n  padding-right: 8px; \n} \n\n\n/* Results screen */\n\n#resultsModal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 51px;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: #121212;\n}\n\n#resultsModalcontent {\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2em;\n  text-align: center;\n}\n\n.album-art {\n  width: 250px;\n  height: 250px;\n  object-fit: cover;\n  border-radius: 10px;\n  margin-bottom: 0.5rem;\n}\n\n.song-title {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #FFFFFF;\n}\n\n.song-artist {\n  color: #888;\n  margin-bottom: 2rem;\n}\n\n.share-results-btn {\n  padding: 10px 20px;\n  font-size: 1.2em;\n  color: #FFFFFF;\n  background-color: #1DB954;\n  border: none;\n  border-radius: 50px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.share-results-btn:hover {\n  background-color: #148b3b;\n}\n\n.results-guesses {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n\n.results-guess {\n  width: 50px;\n  height: 10px;\n  margin: 2px;\n}\n\n.results-guess.grey { background-color: #888; }\n.results-guess.yellow { background-color: #FFD700; }\n.results-guess.red { background-color: #FF0000; }\n.results-guess.green { background-color: #008000; }\n\n\n/* Countdown timer */\n.next-sheardle {\n  font-family: 'Roboto', sans-serif;\n  text-align: center;\n  margin: 2rem 0;\n}\n\n.next-sheardle p {\n  margin: 0;\n  padding: 0;\n}\n\n.next-sheardle p:first-child {\n  color: #888888;\n  font-size: 16px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n.next-sheardle .countdown {\n  color: #bbbbbb;\n  font-size: 32px;\n  font-weight: bold;\n  margin-top: 0.5rem;\n}\n\n/* How to play modal */\n.icon {\n  color: #7c7c7c;\n  margin-right: 10px;\n  font-size: 20px;\n}\n\n.flex-row {\n  display: flex;\n  align-items: center; \n  margin-bottom: 20px;\n}\n\n#howToPlayModal {\n  position: fixed;\n  z-index: 1;\n  padding-top: 17.5%;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0,0,0);\n  background-color: rgba(0,0,0,0.7); /* Making the background darker */\n}\n\n#howToPlayContent {\n  background-color: #1a1a1a;\n  margin: auto;\n  padding: 20px;\n  border: 1px solid #8888887a;\n  width: 80%;\n  max-width: 500px;\n  position: relative;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n\n  font-weight: 525;\n\n}\n\n.close {\n  color: #aaa;\n  font-size: 28px;\n  font-weight: bold;\n  position: absolute;\n  right: 10px;\n  top: 0;\n}\n\n\n#howToPlayContent h1 {\n  text-align: center; \n  font-size: 24px;\n  padding-bottom: 20px;\n}\n\n#howToPlayContent p {\n  margin-bottom: 10px; \n}\n\n#howToPlayContent i {\n  margin-right: 1rem;\n}\n\n#howToPlayContent #playFirstTurn {\n  background-color: #1DB954;\n  color: #ffffff;\n  border: none;\n  padding: 10px 30px; \n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  font-weight: 700;\n  margin: 4px 2px;\n  transition-duration: 0.4s;\n  cursor: pointer;\n  border-radius: 25px; /* Adding border radius to create a pill shape */\n}\n\n#howToPlayContent #playFirstTurn:hover {\n  background-color: #888;\n  color: white;\n}\n\n/* Create Sheardle */\n#createSheardleModal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0,0,0,0.4);\n}\n\n#createSheardleContent {\n  background-color: #121212;\n  color: #ffffff;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n  font-family: sans-serif;\n}\n\n.close {\n  color: #aaaaaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: #ffffff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n#searchContainer {\n  margin-bottom: 20px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n#searchInput {\n  width: 90%;\n  padding: 10px;\n  background-color: #333;\n  border: solid 1px black;\n  color: #ffffff;\n  border-radius: 5px;\n  outline: none;\n}\n\n#resultsContainer {\n  background-color: #333;\n  color: #ffffff;\n  width: 90%;\n  max-height: 200px;\n  overflow-y: auto;\n  border: 1px solid #0000002b;\n  display: none;\n}\n\n.resultItem {\n  padding: 10px;\n  cursor: pointer;\n}\n\n.resultItem:hover {\n  background-color: #282828;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";
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

      // End game
      (0,_spotify__WEBPACK_IMPORTED_MODULE_2__.getTrackByID)((0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTrackID)()).then(response => {
        (0,_resultsScreen__WEBPACK_IMPORTED_MODULE_3__.gameEnd)(response);
      });

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
    
    updateSeekBarBackground((0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)());

    (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.addSkippedTurnToGameState)();

    updateSkipButtonText();

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

  if ((0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)() > 0 && (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)() < _sheardle__WEBPACK_IMPORTED_MODULE_1__.allowedDurations.length) {
    const skipSeconds = _sheardle__WEBPACK_IMPORTED_MODULE_1__.allowedDurations[(0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)()] - _sheardle__WEBPACK_IMPORTED_MODULE_1__.allowedDurations[(0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)() - 1];
    skipButton.textContent = `SKIP (+${skipSeconds}s)`;
  } else if ((0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)() === 0) {
    const skipSeconds = _sheardle__WEBPACK_IMPORTED_MODULE_1__.allowedDurations[(0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)()];
    skipButton.textContent = `SKIP (+${skipSeconds}s)`;
  } else {
    skipButton.textContent = "SKIP";
  }
}
// Keepsies



// keepsies

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
  } else if (await (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.checkArtist)(selectedTrackID)) {

    let dupesCheck = await (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.checkForSpotifyDupes)(searchInputValue)

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
  } else {
    // Completely incorrect
    addIncorrectGuessToBoard(searchInputValue, (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)());
    (0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.saveNewGuessToGameState)(searchInputValue, "incorrect");
  }
  
  updateSkipButtonText();
  
  // Check total guesses after each incorrect guess
  if ((0,_sheardle__WEBPACK_IMPORTED_MODULE_1__.getCurrentTurn)() > _sheardle__WEBPACK_IMPORTED_MODULE_1__.allowedDurations.length) {
  
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

"use strict";
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
    audio.addEventListener("timeupdate", updateElapsedTime);
}

function updateElapsedTime() {
    // get the current time in seconds
    let currentTime = Math.floor(audio.currentTime);
    
    // convert it to minutes:seconds format
    let minutes = Math.floor(currentTime / 60);
    let seconds = currentTime % 60;

    // pad seconds with leading zero if less than 10
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // get the elapsed-time element and update its text content
    let elapsedTimeElement = document.querySelector(".elapsed-time");
    elapsedTimeElement.textContent = `${minutes}:${seconds}`;
}


function playAudio() {

    const playDuration = _sheardle_js__WEBPACK_IMPORTED_MODULE_0__.allowedDurations[(0,_sheardle_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentTurn)() - 1];
    endTime = playDuration;

    audio.currentTime = 0;

    if ((0,_sheardle_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentTurn)() < 7) {
        audio.play();
    }
    

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

/***/ "./src/createSheardle.js":
/*!*******************************!*\
  !*** ./src/createSheardle.js ***!
  \*******************************/
/***/ (() => {

// const createButton = document.querySelector('.create');

// createButton.addEventListener('click', () => {
//     createButton.style.display = "show";
// });

// // Get the new modal
// var createModal = document.getElementById('createSheardleModal');

// // Get the button that opens the new modal
// var createBtn = document.getElementsByClassName('create')[0];

// // Get the <span> element that closes the new modal
// var createSpan = document.getElementById('closeCreateSheardle');

// // When the user clicks the button, open the modal 
// createBtn.onclick = function() {
//   createModal.style.display = "block";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == createModal) {
//     createModal.style.di
//     lay = "none";
//   }
// }

/***/ }),

/***/ "./src/howToPlay.js":
/*!**************************!*\
  !*** ./src/howToPlay.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _audioManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audioManager */ "./src/audioManager.js");
 

var modal = document.getElementById('howToPlayModal');
var closeBtn = document.getElementById('closeHowToPlay');
var playBtn = document.getElementById('playFirstTurn');

var howToPlayButton = document.querySelector('.how-to-play');

howToPlayButton.onclick = function() {
  modal.style.display = 'block';
}

closeBtn.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

playBtn.onclick = function() {
  modal.style.display = 'none';
  (0,_audioManager__WEBPACK_IMPORTED_MODULE_0__.playAudio)();
}


/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsReturningPlayer": () => (/* binding */ IsReturningPlayer),
/* harmony export */   "loadGameState": () => (/* binding */ loadGameState),
/* harmony export */   "saveGameState": () => (/* binding */ saveGameState),
/* harmony export */   "setPlayedBefore": () => (/* binding */ setPlayedBefore)
/* harmony export */ });
function saveGameState(guesses) {

    //  Store as trackID for stats?
    // console.log(guesses.trackID);

    localStorage.setItem('gameState', JSON.stringify(guesses));
}

function loadGameState() {
    return JSON.parse(localStorage.getItem('gameState'));
}

function setPlayedBefore() {
    localStorage.setItem('playedBefore', JSON.stringify(true));
}

function IsReturningPlayer() {
    return JSON.parse(localStorage.getItem('playedBefore'));
}

/***/ }),

/***/ "./src/resultsScreen.js":
/*!******************************!*\
  !*** ./src/resultsScreen.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameEnd": () => (/* binding */ gameEnd)
/* harmony export */ });
/* harmony import */ var _sheardle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sheardle */ "./src/sheardle.js");



const modal = document.getElementById("resultsModal");

// Getting the difference in seconds to the next day
function getTimeToNextDay() {
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    const diffInMilliSeconds = tomorrow - now;
    return diffInMilliSeconds / 1000;
}

// Countdown timer
function startTimer(duration, display) {
    let timer = duration, hours, minutes, seconds;
    
    function updateTimer() {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }

    // Run the function immediately to set the time without delay
    updateTimer();
    
    // Then have it run every second
    setInterval(updateTimer, 1000);
}

function gameEnd(trackInfo) {

    let countdownElement = document.querySelector(".countdown");
    let timeToNextDay = getTimeToNextDay();
    startTimer(timeToNextDay, countdownElement);

    modal.style.display = "block";

    // Set the song's details
    document.querySelector(".song-title").textContent = trackInfo.name;
    document.querySelector(".song-artist").textContent = trackInfo.artists[0].name;
    document.querySelector(".album-art").src = trackInfo.album.images[0].url;
    document.querySelector(".song-preview").src = trackInfo.preview_url;

    // Get user results
    let userResults = (0,_sheardle__WEBPACK_IMPORTED_MODULE_0__.getGuesses)();

    console.log("User results", userResults);

    for (let i = 0; i < 6; i++) {
        if (userResults[i] === null | !userResults[i]) {
          let guessElement = document.getElementById(`guess${i+1}`);
          guessElement.classList.add('grey');
        } else {
          let guessElement = document.getElementById(`guess${i+1}`);
          switch(userResults[i].status) {
            case "correct":
              guessElement.classList.add('green');
              break;
            case "semicorrect":
              guessElement.classList.add('yellow');
              break;
            case "incorrect":
              guessElement.classList.add('red');
              break;
            default:
              guessElement.classList.add('grey');
          }
        }
      }

    console.log((0,_sheardle__WEBPACK_IMPORTED_MODULE_0__.shareResult)());
}

/***/ }),

/***/ "./src/sheardle.js":
/*!*************************!*\
  !*** ./src/sheardle.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addSkippedTurnToGameState": () => (/* binding */ addSkippedTurnToGameState),
/* harmony export */   "allowedDurations": () => (/* binding */ allowedDurations),
/* harmony export */   "checkArtist": () => (/* binding */ checkArtist),
/* harmony export */   "checkForSpotifyDupes": () => (/* binding */ checkForSpotifyDupes),
/* harmony export */   "checkGuess": () => (/* binding */ checkGuess),
/* harmony export */   "getCurrentTrackID": () => (/* binding */ getCurrentTrackID),
/* harmony export */   "getCurrentTurn": () => (/* binding */ getCurrentTurn),
/* harmony export */   "getGuesses": () => (/* binding */ getGuesses),
/* harmony export */   "importGameState": () => (/* binding */ importGameState),
/* harmony export */   "saveNewGuessToGameState": () => (/* binding */ saveNewGuessToGameState),
/* harmony export */   "setupNewGame": () => (/* binding */ setupNewGame),
/* harmony export */   "shareResult": () => (/* binding */ shareResult)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _audioManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audioManager */ "./src/audioManager.js");
/* harmony import */ var _spotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spotify */ "./src/spotify.js");
/* harmony import */ var _trackSelection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trackSelection */ "./src/trackSelection.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_4__);








// Initialise clipboard
new (clipboard__WEBPACK_IMPORTED_MODULE_4___default())('.share-results-btn', {
  text: function() {
      return shareResult();
  }
});

const allowedDurations = [1, 2, 4, 7, 11, 16];

let gameState = {
  guesses: [],
  trackID: null,
  won: false
};

const getCurrentTurn = () => gameState.guesses.length + 1;
const getCurrentTrackID = () => gameState.trackID;
const getGuesses = () => gameState.guesses;

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

  (0,_audioManager__WEBPACK_IMPORTED_MODULE_1__.initAudio)(loadedGameState.trackID);
}

function checkGuess(guessedTrackID, gameTrackID) {
  return guessedTrackID === gameTrackID;
}

async function checkForSpotifyDupes(searchQuery) {
    // If false, check the user's guess against what should hopefully be Spotify's dupes
    const fetchedIDs = await (0,_spotify__WEBPACK_IMPORTED_MODULE_2__.getAllTrackIDsBySearchQuery)(searchQuery);

    console.log("Current track ID:", getCurrentTrackID());
    console.log("Dupe track IDs:", fetchedIDs);

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

  // Fill with skips if the length is less than 6
  while (gameState.guesses.length < 6) {
    gameState.guesses.push(null)
  }

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
  shareString += "\n";
  shareString += '🔊 ';
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCurrentDay": () => (/* binding */ getCurrentDay),
/* harmony export */   "getTodaysTrackID": () => (/* binding */ getTodaysTrackID)
/* harmony export */ });
const START_DATE = new Date('2023-05-23');

const trackSelection = [
'7FwBtcecmlpc1sLySPXeGE',
'2WfaOiMkCvy7F5fcp2zZ8L',
'07j5RLJHwsm4cUb3GGoW3w',
'22sLuJYcvZOSoLLRYev1s5',
'3BovdzfaX4jb5KFQwoPfAw',
'7J1uxwnxfQLu4APicE5Rnj',
'2dlEdDEmuQsrcXaAL3Znzi',
'62LJFaYihsdVrrkgUOJC05',
'0HEmnAUT8PHznIAAmVXqFJ',
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
'0QeI79sp1vS8L3JgpEO7mD',
'77NNZQSqzLNqh2A9JhLRkg'];

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _sheardle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sheardle */ "./src/sheardle.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI */ "./src/UI.js");
/* harmony import */ var _trackSelection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trackSelection */ "./src/trackSelection.js");
/* harmony import */ var _howToPlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./howToPlay */ "./src/howToPlay.js");
/* harmony import */ var _createSheardle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createSheardle */ "./src/createSheardle.js");
/* harmony import */ var _createSheardle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_createSheardle__WEBPACK_IMPORTED_MODULE_6__);












console.log("Current day is", (0,_trackSelection__WEBPACK_IMPORTED_MODULE_4__.getCurrentDay)(), "day(s) past the start date");

const gameLoaded = (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.loadGameState)();

if (gameLoaded) {

    (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.setPlayedBefore)();

    const todaysTrackID = (0,_trackSelection__WEBPACK_IMPORTED_MODULE_4__.getTodaysTrackID)();

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

// Show the How To Play screen if the user is playing the first time
const returningPlayer = (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.IsReturningPlayer)();

console.log("Returning play0r?:", returningPlayer);

if (returningPlayer) {
    const howToPlayModal = document.getElementById('howToPlayModal');
    howToPlayModal.style.display = 'none';
} else {
    // Set the flag so that it doesn't show next time
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.setPlayedBefore)();
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxP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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOzs7Ozs7VUN2RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCOztBQUUrQjtBQUN3Qjs7QUFFckQ7O0FBRXFDOztBQUU5QztBQUNLOztBQUUxQiw4QkFBOEIsOERBQWE7O0FBRTNDLG1CQUFtQiw0REFBYTs7QUFFaEM7O0FBRUEsSUFBSSw4REFBZTs7QUFFbkIsMEJBQTBCLGlFQUFnQjs7QUFFMUM7QUFDQTtBQUNBLFFBQVEsdURBQVk7QUFDcEIsUUFBUSwyQ0FBTTtBQUNkLE1BQU07QUFDTjtBQUNBLFFBQVEsMERBQWU7QUFDdkIsUUFBUSwyQ0FBTTtBQUNkO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsSUFBSSx1REFBWTtBQUNoQixJQUFJLDJDQUFNO0FBQ1Y7O0FBRUE7QUFDQSx3QkFBd0IsZ0VBQWlCOztBQUV6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxJQUFJLDhEQUFlO0FBQ25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9ub2RlX21vZHVsZXMvY2xpcGJvYXJkL2Rpc3QvY2xpcGJvYXJkLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3NoZWFyZGxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL3NyYy9hdWRpb01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9zcmMvY3JlYXRlU2hlYXJkbGUuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9zcmMvaG93VG9QbGF5LmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vc3JjL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL3NyYy9yZXN1bHRzU2NyZWVuLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vc3JjL3NoZWFyZGxlLmpzIiwid2VicGFjazovL3NoZWFyZGxlLy4vc3JjL3Nwb3RpZnkuanMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvLi9zcmMvc3BvdGlmeVRva2VuTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL3NyYy90cmFja1NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9zaGVhcmRsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaGVhcmRsZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zaGVhcmRsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2hlYXJkbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zaGVhcmRsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NoZWFyZGxlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9zaGVhcmRsZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGNsaXBib2FyZC5qcyB2Mi4wLjExXG4gKiBodHRwczovL2NsaXBib2FyZGpzLmNvbS9cbiAqXG4gKiBMaWNlbnNlZCBNSVQgwqkgWmVubyBSb2NoYVxuICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJDbGlwYm9hcmRKU1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJDbGlwYm9hcmRKU1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbigpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZXNfXyA9ICh7XG5cbi8qKiovIDY4Njpcbi8qKiovIChmdW5jdGlvbihfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLy8gRVhQT1JUU1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIHtcbiAgXCJkZWZhdWx0XCI6IGZ1bmN0aW9uKCkgeyByZXR1cm4gLyogYmluZGluZyAqLyBjbGlwYm9hcmQ7IH1cbn0pO1xuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL3RpbnktZW1pdHRlci9pbmRleC5qc1xudmFyIHRpbnlfZW1pdHRlciA9IF9fd2VicGFja19yZXF1aXJlX18oMjc5KTtcbnZhciB0aW55X2VtaXR0ZXJfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4odGlueV9lbWl0dGVyKTtcbi8vIEVYVEVSTkFMIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvZ29vZC1saXN0ZW5lci9zcmMvbGlzdGVuLmpzXG52YXIgbGlzdGVuID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNzApO1xudmFyIGxpc3Rlbl9kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihsaXN0ZW4pO1xuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9zZWxlY3Qvc3JjL3NlbGVjdC5qc1xudmFyIHNyY19zZWxlY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgxNyk7XG52YXIgc2VsZWN0X2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKHNyY19zZWxlY3QpO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvbW1vbi9jb21tYW5kLmpzXG4vKipcbiAqIEV4ZWN1dGVzIGEgZ2l2ZW4gb3BlcmF0aW9uIHR5cGUuXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gY29tbWFuZCh0eXBlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmV4ZWNDb21tYW5kKHR5cGUpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9hY3Rpb25zL2N1dC5qc1xuXG5cbi8qKlxuICogQ3V0IGFjdGlvbiB3cmFwcGVyLlxuICogQHBhcmFtIHtTdHJpbmd8SFRNTEVsZW1lbnR9IHRhcmdldFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbnZhciBDbGlwYm9hcmRBY3Rpb25DdXQgPSBmdW5jdGlvbiBDbGlwYm9hcmRBY3Rpb25DdXQodGFyZ2V0KSB7XG4gIHZhciBzZWxlY3RlZFRleHQgPSBzZWxlY3RfZGVmYXVsdCgpKHRhcmdldCk7XG4gIGNvbW1hbmQoJ2N1dCcpO1xuICByZXR1cm4gc2VsZWN0ZWRUZXh0O1xufTtcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgYWN0aW9uc19jdXQgPSAoQ2xpcGJvYXJkQWN0aW9uQ3V0KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb21tb24vY3JlYXRlLWZha2UtZWxlbWVudC5qc1xuLyoqXG4gKiBDcmVhdGVzIGEgZmFrZSB0ZXh0YXJlYSBlbGVtZW50IHdpdGggYSB2YWx1ZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUZha2VFbGVtZW50KHZhbHVlKSB7XG4gIHZhciBpc1JUTCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RpcicpID09PSAncnRsJztcbiAgdmFyIGZha2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTsgLy8gUHJldmVudCB6b29taW5nIG9uIGlPU1xuXG4gIGZha2VFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gJzEycHQnOyAvLyBSZXNldCBib3ggbW9kZWxcblxuICBmYWtlRWxlbWVudC5zdHlsZS5ib3JkZXIgPSAnMCc7XG4gIGZha2VFbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAnMCc7XG4gIGZha2VFbGVtZW50LnN0eWxlLm1hcmdpbiA9ICcwJzsgLy8gTW92ZSBlbGVtZW50IG91dCBvZiBzY3JlZW4gaG9yaXpvbnRhbGx5XG5cbiAgZmFrZUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICBmYWtlRWxlbWVudC5zdHlsZVtpc1JUTCA/ICdyaWdodCcgOiAnbGVmdCddID0gJy05OTk5cHgnOyAvLyBNb3ZlIGVsZW1lbnQgdG8gdGhlIHNhbWUgcG9zaXRpb24gdmVydGljYWxseVxuXG4gIHZhciB5UG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgZmFrZUVsZW1lbnQuc3R5bGUudG9wID0gXCJcIi5jb25jYXQoeVBvc2l0aW9uLCBcInB4XCIpO1xuICBmYWtlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJycpO1xuICBmYWtlRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICByZXR1cm4gZmFrZUVsZW1lbnQ7XG59XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvYWN0aW9ucy9jb3B5LmpzXG5cblxuXG4vKipcbiAqIENyZWF0ZSBmYWtlIGNvcHkgYWN0aW9uIHdyYXBwZXIgdXNpbmcgYSBmYWtlIGVsZW1lbnQuXG4gKiBAcGFyYW0ge1N0cmluZ30gdGFyZ2V0XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbnZhciBmYWtlQ29weUFjdGlvbiA9IGZ1bmN0aW9uIGZha2VDb3B5QWN0aW9uKHZhbHVlLCBvcHRpb25zKSB7XG4gIHZhciBmYWtlRWxlbWVudCA9IGNyZWF0ZUZha2VFbGVtZW50KHZhbHVlKTtcbiAgb3B0aW9ucy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZmFrZUVsZW1lbnQpO1xuICB2YXIgc2VsZWN0ZWRUZXh0ID0gc2VsZWN0X2RlZmF1bHQoKShmYWtlRWxlbWVudCk7XG4gIGNvbW1hbmQoJ2NvcHknKTtcbiAgZmFrZUVsZW1lbnQucmVtb3ZlKCk7XG4gIHJldHVybiBzZWxlY3RlZFRleHQ7XG59O1xuLyoqXG4gKiBDb3B5IGFjdGlvbiB3cmFwcGVyLlxuICogQHBhcmFtIHtTdHJpbmd8SFRNTEVsZW1lbnR9IHRhcmdldFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5cbnZhciBDbGlwYm9hcmRBY3Rpb25Db3B5ID0gZnVuY3Rpb24gQ2xpcGJvYXJkQWN0aW9uQ29weSh0YXJnZXQpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHtcbiAgICBjb250YWluZXI6IGRvY3VtZW50LmJvZHlcbiAgfTtcbiAgdmFyIHNlbGVjdGVkVGV4dCA9ICcnO1xuXG4gIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJykge1xuICAgIHNlbGVjdGVkVGV4dCA9IGZha2VDb3B5QWN0aW9uKHRhcmdldCwgb3B0aW9ucyk7XG4gIH0gZWxzZSBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJiAhWyd0ZXh0JywgJ3NlYXJjaCcsICd1cmwnLCAndGVsJywgJ3Bhc3N3b3JkJ10uaW5jbHVkZXModGFyZ2V0ID09PSBudWxsIHx8IHRhcmdldCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFyZ2V0LnR5cGUpKSB7XG4gICAgLy8gSWYgaW5wdXQgdHlwZSBkb2Vzbid0IHN1cHBvcnQgYHNldFNlbGVjdGlvblJhbmdlYC4gU2ltdWxhdGUgaXQuIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MSW5wdXRFbGVtZW50L3NldFNlbGVjdGlvblJhbmdlXG4gICAgc2VsZWN0ZWRUZXh0ID0gZmFrZUNvcHlBY3Rpb24odGFyZ2V0LnZhbHVlLCBvcHRpb25zKTtcbiAgfSBlbHNlIHtcbiAgICBzZWxlY3RlZFRleHQgPSBzZWxlY3RfZGVmYXVsdCgpKHRhcmdldCk7XG4gICAgY29tbWFuZCgnY29weScpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGVjdGVkVGV4dDtcbn07XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGFjdGlvbnNfY29weSA9IChDbGlwYm9hcmRBY3Rpb25Db3B5KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9hY3Rpb25zL2RlZmF1bHQuanNcbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuXG5cbi8qKlxuICogSW5uZXIgZnVuY3Rpb24gd2hpY2ggcGVyZm9ybXMgc2VsZWN0aW9uIGZyb20gZWl0aGVyIGB0ZXh0YCBvciBgdGFyZ2V0YFxuICogcHJvcGVydGllcyBhbmQgdGhlbiBleGVjdXRlcyBjb3B5IG9yIGN1dCBvcGVyYXRpb25zLlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG52YXIgQ2xpcGJvYXJkQWN0aW9uRGVmYXVsdCA9IGZ1bmN0aW9uIENsaXBib2FyZEFjdGlvbkRlZmF1bHQoKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgLy8gRGVmaW5lcyBiYXNlIHByb3BlcnRpZXMgcGFzc2VkIGZyb20gY29uc3RydWN0b3IuXG4gIHZhciBfb3B0aW9ucyRhY3Rpb24gPSBvcHRpb25zLmFjdGlvbixcbiAgICAgIGFjdGlvbiA9IF9vcHRpb25zJGFjdGlvbiA9PT0gdm9pZCAwID8gJ2NvcHknIDogX29wdGlvbnMkYWN0aW9uLFxuICAgICAgY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXIsXG4gICAgICB0YXJnZXQgPSBvcHRpb25zLnRhcmdldCxcbiAgICAgIHRleHQgPSBvcHRpb25zLnRleHQ7IC8vIFNldHMgdGhlIGBhY3Rpb25gIHRvIGJlIHBlcmZvcm1lZCB3aGljaCBjYW4gYmUgZWl0aGVyICdjb3B5JyBvciAnY3V0Jy5cblxuICBpZiAoYWN0aW9uICE9PSAnY29weScgJiYgYWN0aW9uICE9PSAnY3V0Jykge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcImFjdGlvblwiIHZhbHVlLCB1c2UgZWl0aGVyIFwiY29weVwiIG9yIFwiY3V0XCInKTtcbiAgfSAvLyBTZXRzIHRoZSBgdGFyZ2V0YCBwcm9wZXJ0eSB1c2luZyBhbiBlbGVtZW50IHRoYXQgd2lsbCBiZSBoYXZlIGl0cyBjb250ZW50IGNvcGllZC5cblxuXG4gIGlmICh0YXJnZXQgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmICh0YXJnZXQgJiYgX3R5cGVvZih0YXJnZXQpID09PSAnb2JqZWN0JyAmJiB0YXJnZXQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGlmIChhY3Rpb24gPT09ICdjb3B5JyAmJiB0YXJnZXQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcInRhcmdldFwiIGF0dHJpYnV0ZS4gUGxlYXNlIHVzZSBcInJlYWRvbmx5XCIgaW5zdGVhZCBvZiBcImRpc2FibGVkXCIgYXR0cmlidXRlJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3Rpb24gPT09ICdjdXQnICYmICh0YXJnZXQuaGFzQXR0cmlidXRlKCdyZWFkb25seScpIHx8IHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcInRhcmdldFwiIGF0dHJpYnV0ZS4gWW91IGNhblxcJ3QgY3V0IHRleHQgZnJvbSBlbGVtZW50cyB3aXRoIFwicmVhZG9ubHlcIiBvciBcImRpc2FibGVkXCIgYXR0cmlidXRlcycpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXCJ0YXJnZXRcIiB2YWx1ZSwgdXNlIGEgdmFsaWQgRWxlbWVudCcpO1xuICAgIH1cbiAgfSAvLyBEZWZpbmUgc2VsZWN0aW9uIHN0cmF0ZWd5IGJhc2VkIG9uIGB0ZXh0YCBwcm9wZXJ0eS5cblxuXG4gIGlmICh0ZXh0KSB7XG4gICAgcmV0dXJuIGFjdGlvbnNfY29weSh0ZXh0LCB7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lclxuICAgIH0pO1xuICB9IC8vIERlZmluZXMgd2hpY2ggc2VsZWN0aW9uIHN0cmF0ZWd5IGJhc2VkIG9uIGB0YXJnZXRgIHByb3BlcnR5LlxuXG5cbiAgaWYgKHRhcmdldCkge1xuICAgIHJldHVybiBhY3Rpb24gPT09ICdjdXQnID8gYWN0aW9uc19jdXQodGFyZ2V0KSA6IGFjdGlvbnNfY29weSh0YXJnZXQsIHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyXG4gICAgfSk7XG4gIH1cbn07XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGFjdGlvbnNfZGVmYXVsdCA9IChDbGlwYm9hcmRBY3Rpb25EZWZhdWx0KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jbGlwYm9hcmQuanNcbmZ1bmN0aW9uIGNsaXBib2FyZF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IGNsaXBib2FyZF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgY2xpcGJvYXJkX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBjbGlwYm9hcmRfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChjbGlwYm9hcmRfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuXG5cblxuXG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIHJldHJpZXZlIGF0dHJpYnV0ZSB2YWx1ZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdWZmaXhcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZVZhbHVlKHN1ZmZpeCwgZWxlbWVudCkge1xuICB2YXIgYXR0cmlidXRlID0gXCJkYXRhLWNsaXBib2FyZC1cIi5jb25jYXQoc3VmZml4KTtcblxuICBpZiAoIWVsZW1lbnQuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyB3aGljaCB0YWtlcyBvbmUgb3IgbW9yZSBlbGVtZW50cywgYWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlbSxcbiAqIGFuZCBpbnN0YW50aWF0ZXMgYSBuZXcgYENsaXBib2FyZEFjdGlvbmAgb24gZWFjaCBjbGljay5cbiAqL1xuXG5cbnZhciBDbGlwYm9hcmQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9FbWl0dGVyKSB7XG4gIF9pbmhlcml0cyhDbGlwYm9hcmQsIF9FbWl0dGVyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKENsaXBib2FyZCk7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3RyaW5nfEhUTUxFbGVtZW50fEhUTUxDb2xsZWN0aW9ufE5vZGVMaXN0fSB0cmlnZ2VyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqL1xuICBmdW5jdGlvbiBDbGlwYm9hcmQodHJpZ2dlciwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDbGlwYm9hcmQpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcblxuICAgIF90aGlzLnJlc29sdmVPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgX3RoaXMubGlzdGVuQ2xpY2sodHJpZ2dlcik7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqXG4gICAqIERlZmluZXMgaWYgYXR0cmlidXRlcyB3b3VsZCBiZSByZXNvbHZlZCB1c2luZyBpbnRlcm5hbCBzZXR0ZXIgZnVuY3Rpb25zXG4gICAqIG9yIGN1c3RvbSBmdW5jdGlvbnMgdGhhdCB3ZXJlIHBhc3NlZCBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKENsaXBib2FyZCwgW3tcbiAgICBrZXk6IFwicmVzb2x2ZU9wdGlvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzb2x2ZU9wdGlvbnMoKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgICB0aGlzLmFjdGlvbiA9IHR5cGVvZiBvcHRpb25zLmFjdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMuYWN0aW9uIDogdGhpcy5kZWZhdWx0QWN0aW9uO1xuICAgICAgdGhpcy50YXJnZXQgPSB0eXBlb2Ygb3B0aW9ucy50YXJnZXQgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLnRhcmdldCA6IHRoaXMuZGVmYXVsdFRhcmdldDtcbiAgICAgIHRoaXMudGV4dCA9IHR5cGVvZiBvcHRpb25zLnRleHQgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLnRleHQgOiB0aGlzLmRlZmF1bHRUZXh0O1xuICAgICAgdGhpcy5jb250YWluZXIgPSBjbGlwYm9hcmRfdHlwZW9mKG9wdGlvbnMuY29udGFpbmVyKSA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmNvbnRhaW5lciA6IGRvY3VtZW50LmJvZHk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBjbGljayBldmVudCBsaXN0ZW5lciB0byB0aGUgcGFzc2VkIHRyaWdnZXIuXG4gICAgICogQHBhcmFtIHtTdHJpbmd8SFRNTEVsZW1lbnR8SFRNTENvbGxlY3Rpb258Tm9kZUxpc3R9IHRyaWdnZXJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxpc3RlbkNsaWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbkNsaWNrKHRyaWdnZXIpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLmxpc3RlbmVyID0gbGlzdGVuX2RlZmF1bHQoKSh0cmlnZ2VyLCAnY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLm9uQ2xpY2soZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBhIG5ldyBgQ2xpcGJvYXJkQWN0aW9uYCBvbiBlYWNoIGNsaWNrIGV2ZW50LlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9uQ2xpY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICB2YXIgdHJpZ2dlciA9IGUuZGVsZWdhdGVUYXJnZXQgfHwgZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgdmFyIGFjdGlvbiA9IHRoaXMuYWN0aW9uKHRyaWdnZXIpIHx8ICdjb3B5JztcbiAgICAgIHZhciB0ZXh0ID0gYWN0aW9uc19kZWZhdWx0KHtcbiAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgIGNvbnRhaW5lcjogdGhpcy5jb250YWluZXIsXG4gICAgICAgIHRhcmdldDogdGhpcy50YXJnZXQodHJpZ2dlciksXG4gICAgICAgIHRleHQ6IHRoaXMudGV4dCh0cmlnZ2VyKVxuICAgICAgfSk7IC8vIEZpcmVzIGFuIGV2ZW50IGJhc2VkIG9uIHRoZSBjb3B5IG9wZXJhdGlvbiByZXN1bHQuXG5cbiAgICAgIHRoaXMuZW1pdCh0ZXh0ID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJywge1xuICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgdGV4dDogdGV4dCxcbiAgICAgICAgdHJpZ2dlcjogdHJpZ2dlcixcbiAgICAgICAgY2xlYXJTZWxlY3Rpb246IGZ1bmN0aW9uIGNsZWFyU2VsZWN0aW9uKCkge1xuICAgICAgICAgIGlmICh0cmlnZ2VyKSB7XG4gICAgICAgICAgICB0cmlnZ2VyLmZvY3VzKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVmYXVsdCBgYWN0aW9uYCBsb29rdXAgZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0cmlnZ2VyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkZWZhdWx0QWN0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlZmF1bHRBY3Rpb24odHJpZ2dlcikge1xuICAgICAgcmV0dXJuIGdldEF0dHJpYnV0ZVZhbHVlKCdhY3Rpb24nLCB0cmlnZ2VyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVmYXVsdCBgdGFyZ2V0YCBsb29rdXAgZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0cmlnZ2VyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkZWZhdWx0VGFyZ2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlZmF1bHRUYXJnZXQodHJpZ2dlcikge1xuICAgICAgdmFyIHNlbGVjdG9yID0gZ2V0QXR0cmlidXRlVmFsdWUoJ3RhcmdldCcsIHRyaWdnZXIpO1xuXG4gICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbGxvdyBmaXJlIHByb2dyYW1tYXRpY2FsbHkgYSBjb3B5IGFjdGlvblxuICAgICAqIEBwYXJhbSB7U3RyaW5nfEhUTUxFbGVtZW50fSB0YXJnZXRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEByZXR1cm5zIFRleHQgY29waWVkLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGVmYXVsdFRleHRcIixcblxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgYHRleHRgIGxvb2t1cCBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRyaWdnZXJcbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVmYXVsdFRleHQodHJpZ2dlcikge1xuICAgICAgcmV0dXJuIGdldEF0dHJpYnV0ZVZhbHVlKCd0ZXh0JywgdHJpZ2dlcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlc3Ryb3kgbGlmZWN5Y2xlLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGVzdHJveVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgdGhpcy5saXN0ZW5lci5kZXN0cm95KCk7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiY29weVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb3B5KHRhcmdldCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHtcbiAgICAgICAgY29udGFpbmVyOiBkb2N1bWVudC5ib2R5XG4gICAgICB9O1xuICAgICAgcmV0dXJuIGFjdGlvbnNfY29weSh0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbGxvdyBmaXJlIHByb2dyYW1tYXRpY2FsbHkgYSBjdXQgYWN0aW9uXG4gICAgICogQHBhcmFtIHtTdHJpbmd8SFRNTEVsZW1lbnR9IHRhcmdldFxuICAgICAqIEByZXR1cm5zIFRleHQgY3V0dGVkLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY3V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGN1dCh0YXJnZXQpIHtcbiAgICAgIHJldHVybiBhY3Rpb25zX2N1dCh0YXJnZXQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzdXBwb3J0IG9mIHRoZSBnaXZlbiBhY3Rpb24sIG9yIGFsbCBhY3Rpb25zIGlmIG5vIGFjdGlvbiBpc1xuICAgICAqIGdpdmVuLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbYWN0aW9uXVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNTdXBwb3J0ZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNTdXBwb3J0ZWQoKSB7XG4gICAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbJ2NvcHknLCAnY3V0J107XG4gICAgICB2YXIgYWN0aW9ucyA9IHR5cGVvZiBhY3Rpb24gPT09ICdzdHJpbmcnID8gW2FjdGlvbl0gOiBhY3Rpb247XG4gICAgICB2YXIgc3VwcG9ydCA9ICEhZG9jdW1lbnQucXVlcnlDb21tYW5kU3VwcG9ydGVkO1xuICAgICAgYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgc3VwcG9ydCA9IHN1cHBvcnQgJiYgISFkb2N1bWVudC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQoYWN0aW9uKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHN1cHBvcnQ7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENsaXBib2FyZDtcbn0oKHRpbnlfZW1pdHRlcl9kZWZhdWx0KCkpKTtcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgY2xpcGJvYXJkID0gKENsaXBib2FyZCk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyA4Mjg6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlKSB7XG5cbnZhciBET0NVTUVOVF9OT0RFX1RZUEUgPSA5O1xuXG4vKipcbiAqIEEgcG9seWZpbGwgZm9yIEVsZW1lbnQubWF0Y2hlcygpXG4gKi9cbmlmICh0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcbiAgICB2YXIgcHJvdG8gPSBFbGVtZW50LnByb3RvdHlwZTtcblxuICAgIHByb3RvLm1hdGNoZXMgPSBwcm90by5tYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm9NYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xufVxuXG4vKipcbiAqIEZpbmRzIHRoZSBjbG9zZXN0IHBhcmVudCB0aGF0IG1hdGNoZXMgYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNsb3Nlc3QgKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgd2hpbGUgKGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlVHlwZSAhPT0gRE9DVU1FTlRfTk9ERV9UWVBFKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5tYXRjaGVzID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgICBlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvc2VzdDtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gNDM4OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX191bnVzZWRfd2VicGFja19leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBjbG9zZXN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4MjgpO1xuXG4vKipcbiAqIERlbGVnYXRlcyBldmVudCB0byBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ2FwdHVyZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBfZGVsZWdhdGUoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKSB7XG4gICAgdmFyIGxpc3RlbmVyRm4gPSBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyRm4sIHVzZUNhcHR1cmUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXJGbiwgdXNlQ2FwdHVyZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogRGVsZWdhdGVzIGV2ZW50IHRvIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fFN0cmluZ3xBcnJheX0gW2VsZW1lbnRzXVxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ2FwdHVyZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBkZWxlZ2F0ZShlbGVtZW50cywgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKSB7XG4gICAgLy8gSGFuZGxlIHRoZSByZWd1bGFyIEVsZW1lbnQgdXNhZ2VcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRzLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBFbGVtZW50LWxlc3MgdXNhZ2UsIGl0IGRlZmF1bHRzIHRvIGdsb2JhbCBkZWxlZ2F0aW9uXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIFVzZSBgZG9jdW1lbnRgIGFzIHRoZSBmaXJzdCBwYXJhbWV0ZXIsIHRoZW4gYXBwbHkgYXJndW1lbnRzXG4gICAgICAgIC8vIFRoaXMgaXMgYSBzaG9ydCB3YXkgdG8gLnVuc2hpZnQgYGFyZ3VtZW50c2Agd2l0aG91dCBydW5uaW5nIGludG8gZGVvcHRpbWl6YXRpb25zXG4gICAgICAgIHJldHVybiBfZGVsZWdhdGUuYmluZChudWxsLCBkb2N1bWVudCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgU2VsZWN0b3ItYmFzZWQgdXNhZ2VcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRzID09PSAnc3RyaW5nJykge1xuICAgICAgICBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudHMpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBBcnJheS1saWtlIGJhc2VkIHVzYWdlXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChlbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZShlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIEZpbmRzIGNsb3Nlc3QgbWF0Y2ggYW5kIGludm9rZXMgY2FsbGJhY2suXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGxpc3RlbmVyKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUuZGVsZWdhdGVUYXJnZXQgPSBjbG9zZXN0KGUudGFyZ2V0LCBzZWxlY3Rvcik7XG5cbiAgICAgICAgaWYgKGUuZGVsZWdhdGVUYXJnZXQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoZWxlbWVudCwgZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVsZWdhdGU7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIDg3OTpcbi8qKiovIChmdW5jdGlvbihfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgZXhwb3J0cykge1xuXG4vKipcbiAqIENoZWNrIGlmIGFyZ3VtZW50IGlzIGEgSFRNTCBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5ub2RlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICAgICAmJiB2YWx1ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50XG4gICAgICAgICYmIHZhbHVlLm5vZGVUeXBlID09PSAxO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhcmd1bWVudCBpcyBhIGxpc3Qgb2YgSFRNTCBlbGVtZW50cy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMubm9kZUxpc3QgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcblxuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICYmICh0eXBlID09PSAnW29iamVjdCBOb2RlTGlzdF0nIHx8IHR5cGUgPT09ICdbb2JqZWN0IEhUTUxDb2xsZWN0aW9uXScpXG4gICAgICAgICYmICgnbGVuZ3RoJyBpbiB2YWx1ZSlcbiAgICAgICAgJiYgKHZhbHVlLmxlbmd0aCA9PT0gMCB8fCBleHBvcnRzLm5vZGUodmFsdWVbMF0pKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYXJndW1lbnQgaXMgYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5leHBvcnRzLnN0cmluZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgICAgICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBTdHJpbmc7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGFyZ3VtZW50IGlzIGEgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5leHBvcnRzLmZuID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG5cbiAgICByZXR1cm4gdHlwZSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIDM3MDpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fdW51c2VkX3dlYnBhY2tfZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgaXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDg3OSk7XG52YXIgZGVsZWdhdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQzOCk7XG5cbi8qKlxuICogVmFsaWRhdGVzIGFsbCBwYXJhbXMgYW5kIGNhbGxzIHRoZSByaWdodFxuICogbGlzdGVuZXIgZnVuY3Rpb24gYmFzZWQgb24gaXRzIHRhcmdldCB0eXBlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfEhUTUxFbGVtZW50fEhUTUxDb2xsZWN0aW9ufE5vZGVMaXN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBsaXN0ZW4odGFyZ2V0LCB0eXBlLCBjYWxsYmFjaykge1xuICAgIGlmICghdGFyZ2V0ICYmICF0eXBlICYmICFjYWxsYmFjaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnRzJyk7XG4gICAgfVxuXG4gICAgaWYgKCFpcy5zdHJpbmcodHlwZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignU2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYSBTdHJpbmcnKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzLmZuKGNhbGxiYWNrKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGlyZCBhcmd1bWVudCBtdXN0IGJlIGEgRnVuY3Rpb24nKTtcbiAgICB9XG5cbiAgICBpZiAoaXMubm9kZSh0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ob2RlKHRhcmdldCwgdHlwZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBlbHNlIGlmIChpcy5ub2RlTGlzdCh0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ob2RlTGlzdCh0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXMuc3RyaW5nKHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblNlbGVjdG9yKHRhcmdldCwgdHlwZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIFN0cmluZywgSFRNTEVsZW1lbnQsIEhUTUxDb2xsZWN0aW9uLCBvciBOb2RlTGlzdCcpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBBZGRzIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGEgSFRNTCBlbGVtZW50XG4gKiBhbmQgcmV0dXJucyBhIHJlbW92ZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuTm9kZShub2RlLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGEgbGlzdCBvZiBIVE1MIGVsZW1lbnRzXG4gKiBhbmQgcmV0dXJucyBhIHJlbW92ZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge05vZGVMaXN0fEhUTUxDb2xsZWN0aW9ufSBub2RlTGlzdFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGxpc3Rlbk5vZGVMaXN0KG5vZGVMaXN0LCB0eXBlLCBjYWxsYmFjaykge1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobm9kZUxpc3QsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChub2RlTGlzdCwgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYSBzZWxlY3RvclxuICogYW5kIHJldHVybnMgYSByZW1vdmUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuU2VsZWN0b3Ioc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGRlbGVnYXRlKGRvY3VtZW50LmJvZHksIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdGVuO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyA4MTc6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlKSB7XG5cbmZ1bmN0aW9uIHNlbGVjdChlbGVtZW50KSB7XG4gICAgdmFyIHNlbGVjdGVkVGV4dDtcblxuICAgIGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSAnU0VMRUNUJykge1xuICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG5cbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gZWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0lOUFVUJyB8fCBlbGVtZW50Lm5vZGVOYW1lID09PSAnVEVYVEFSRUEnKSB7XG4gICAgICAgIHZhciBpc1JlYWRPbmx5ID0gZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XG5cbiAgICAgICAgaWYgKCFpc1JlYWRPbmx5KSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50LnNlbGVjdCgpO1xuICAgICAgICBlbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKDAsIGVsZW1lbnQudmFsdWUubGVuZ3RoKTtcblxuICAgICAgICBpZiAoIWlzUmVhZE9ubHkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyZWFkb25seScpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gZWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJykpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG5cbiAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKGVsZW1lbnQpO1xuICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG5cbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gc2VsZWN0aW9uLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdGVkVGV4dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZWxlY3Q7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIDI3OTpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUpIHtcblxuZnVuY3Rpb24gRSAoKSB7XG4gIC8vIEtlZXAgdGhpcyBlbXB0eSBzbyBpdCdzIGVhc2llciB0byBpbmhlcml0IGZyb21cbiAgLy8gKHZpYSBodHRwczovL2dpdGh1Yi5jb20vbGlwc21hY2sgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2lzc3Vlcy8zKVxufVxuXG5FLnByb3RvdHlwZSA9IHtcbiAgb246IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIGUgPSB0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KTtcblxuICAgIChlW25hbWVdIHx8IChlW25hbWVdID0gW10pKS5wdXNoKHtcbiAgICAgIGZuOiBjYWxsYmFjayxcbiAgICAgIGN0eDogY3R4XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvbmNlOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGN0eCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBmdW5jdGlvbiBsaXN0ZW5lciAoKSB7XG4gICAgICBzZWxmLm9mZihuYW1lLCBsaXN0ZW5lcik7XG4gICAgICBjYWxsYmFjay5hcHBseShjdHgsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIGxpc3RlbmVyLl8gPSBjYWxsYmFja1xuICAgIHJldHVybiB0aGlzLm9uKG5hbWUsIGxpc3RlbmVyLCBjdHgpO1xuICB9LFxuXG4gIGVtaXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGRhdGEgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgdmFyIGV2dEFyciA9ICgodGhpcy5lIHx8ICh0aGlzLmUgPSB7fSkpW25hbWVdIHx8IFtdKS5zbGljZSgpO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuID0gZXZ0QXJyLmxlbmd0aDtcblxuICAgIGZvciAoaTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBldnRBcnJbaV0uZm4uYXBwbHkoZXZ0QXJyW2ldLmN0eCwgZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgb2ZmOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgZSA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuICAgIHZhciBldnRzID0gZVtuYW1lXTtcbiAgICB2YXIgbGl2ZUV2ZW50cyA9IFtdO1xuXG4gICAgaWYgKGV2dHMgJiYgY2FsbGJhY2spIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBldnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChldnRzW2ldLmZuICE9PSBjYWxsYmFjayAmJiBldnRzW2ldLmZuLl8gIT09IGNhbGxiYWNrKVxuICAgICAgICAgIGxpdmVFdmVudHMucHVzaChldnRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgZXZlbnQgZnJvbSBxdWV1ZSB0byBwcmV2ZW50IG1lbW9yeSBsZWFrXG4gICAgLy8gU3VnZ2VzdGVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9sYXpkXG4gICAgLy8gUmVmOiBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2NvbW1pdC9jNmViZmFhOWJjOTczYjMzZDExMGE4NGEzMDc3NDJiN2NmOTRjOTUzI2NvbW1pdGNvbW1lbnQtNTAyNDkxMFxuXG4gICAgKGxpdmVFdmVudHMubGVuZ3RoKVxuICAgICAgPyBlW25hbWVdID0gbGl2ZUV2ZW50c1xuICAgICAgOiBkZWxldGUgZVtuYW1lXTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEU7XG5tb2R1bGUuZXhwb3J0cy5UaW55RW1pdHRlciA9IEU7XG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gXHR9KTtcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCAqL1xuLyoqKioqKi8gXHQhZnVuY3Rpb24oKSB7XG4vKioqKioqLyBcdFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0fSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzICovXG4vKioqKioqLyBcdCFmdW5jdGlvbigpIHtcbi8qKioqKiovIFx0XHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuLyoqKioqKi8gXHRcdFx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuLyoqKioqKi8gXHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0fSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCAqL1xuLyoqKioqKi8gXHQhZnVuY3Rpb24oKSB7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfVxuLyoqKioqKi8gXHR9KCk7XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8qKioqKiovIFx0Ly8gc3RhcnR1cFxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oNjg2KTtcbi8qKioqKiovIH0pKClcbi5kZWZhdWx0O1xufSk7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiA5MCU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nLXRvcDogNjBweDtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxufVxcblxcbi5sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbiAgZmxleDogMTsgXFxufVxcblxcbi5yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXg6IDE7IFxcbn1cXG5cXG4udGl0bGUge1xcbiAgZmxleDogMjsgXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxcbn1cXG5cXG4uaG93LXRvLXBsYXkge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiA3NSU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXG4gICAgb3ZlcmZsb3c6IG5vbmU7XFxufVxcblxcbi5wcmV2aW91cyxcXG4uY3JlYXRlLFxcbi5ob3ctdG8tcGxheSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wbGF5LWNvbnRhaW5lciB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uc2Vlay1iYXItY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLnNlZWstYmFyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmZmZmY7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uc2Vlay1iYXItYmFja2dyb3VuZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxufVxcblxcbi5zZWVrLWJhci1tYXJrZXJzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uc2Vlay1iYXItcHJvZ3Jlc3Mge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURCOTU0O1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcbn1cXG5cXG4ucHJvZ3Jlc3Mge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFEQjk1NDtcXG4gIHdpZHRoOiAwO1xcbn1cXG5cXG4uc2VjdGlvbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xcbn1cXG5cXG4ucGxheS1idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnBsYXktYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwMDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uZWxhcHNlZC10aW1lLFxcbi50b3RhbC10aW1lIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmVsYXBzZWQtdGltZSB7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4udG90YWwtdGltZSB7XFxuICByaWdodDogMDtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc3BvdGlmeS1zZWFyY2gge1xcbiAgd2lkdGg6IDkwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5idXR0b25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuLnN1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURCOTU0O1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5za2lwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwMDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5za2lwLFxcbi5zdWJtaXQge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG59XFxuXFxuYnV0dG9uW2Rpc2FibGVkXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5yZXN1bHRzLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICB3aWR0aDogOTUlO1xcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDJiO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHRvcDogY2FsYygxMDAlICsgNXB4KTtcXG59XFxuXFxuLnJlc3VsdC1pdGVtIHtcXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5yZXN1bHQtaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xcbn1cXG5cXG4uZ3Vlc3Mge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjYyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyBcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDsgXFxuICBmb250LXdlaWdodDogMzAwOyBcXG4gIGNvbG9yOiAjZmZmZmZmYWE7IFxcbn1cXG5cXG4uZ3Vlc3MtdGV4dCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4ucmVkLXgtaWNvbiB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNzUpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XFxufVxcblxcbi55ZWxsb3cteC1pY29uIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjE1LCAwLCAwLjc1KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xcbn1cXG5cXG4uZ3JlZW4tY2hlY2staWNvbiB7XFxuICBjb2xvcjogZ3JlZW47XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogOHB4OyBcXG59IFxcblxcblxcbi8qIFJlc3VsdHMgc2NyZWVuICovXFxuXFxuI3Jlc3VsdHNNb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDUxcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG59XFxuXFxuI3Jlc3VsdHNNb2RhbGNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFsYnVtLWFydCB7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uc29uZy10aXRsZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNGRkZGRkY7XFxufVxcblxcbi5zb25nLWFydGlzdCB7XFxuICBjb2xvcjogIzg4ODtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5zaGFyZS1yZXN1bHRzLWJ0biB7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgY29sb3I6ICNGRkZGRkY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURCOTU0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG59XFxuXFxuLnNoYXJlLXJlc3VsdHMtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDhiM2I7XFxufVxcblxcbi5yZXN1bHRzLWd1ZXNzZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4ucmVzdWx0cy1ndWVzcyB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIG1hcmdpbjogMnB4O1xcbn1cXG5cXG4ucmVzdWx0cy1ndWVzcy5ncmV5IHsgYmFja2dyb3VuZC1jb2xvcjogIzg4ODsgfVxcbi5yZXN1bHRzLWd1ZXNzLnllbGxvdyB7IGJhY2tncm91bmQtY29sb3I6ICNGRkQ3MDA7IH1cXG4ucmVzdWx0cy1ndWVzcy5yZWQgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwOyB9XFxuLnJlc3VsdHMtZ3Vlc3MuZ3JlZW4geyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MDAwOyB9XFxuXFxuXFxuLyogQ291bnRkb3duIHRpbWVyICovXFxuLm5leHQtc2hlYXJkbGUge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAycmVtIDA7XFxufVxcblxcbi5uZXh0LXNoZWFyZGxlIHAge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLm5leHQtc2hlYXJkbGUgcDpmaXJzdC1jaGlsZCB7XFxuICBjb2xvcjogIzg4ODg4ODtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG5cXG4ubmV4dC1zaGVhcmRsZSAuY291bnRkb3duIHtcXG4gIGNvbG9yOiAjYmJiYmJiO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblxcbi8qIEhvdyB0byBwbGF5IG1vZGFsICovXFxuLmljb24ge1xcbiAgY29sb3I6ICM3YzdjN2M7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5mbGV4LXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4jaG93VG9QbGF5TW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIHBhZGRpbmctdG9wOiAxNy41JTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTsgLyogTWFraW5nIHRoZSBiYWNrZ3JvdW5kIGRhcmtlciAqL1xcbn1cXG5cXG4jaG93VG9QbGF5Q29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg4ODg3YTtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICBmb250LXdlaWdodDogNTI1O1xcblxcbn1cXG5cXG4uY2xvc2Uge1xcbiAgY29sb3I6ICNhYWE7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgdG9wOiAwO1xcbn1cXG5cXG5cXG4jaG93VG9QbGF5Q29udGVudCBoMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbiNob3dUb1BsYXlDb250ZW50IHAge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgXFxufVxcblxcbiNob3dUb1BsYXlDb250ZW50IGkge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4jaG93VG9QbGF5Q29udGVudCAjcGxheUZpcnN0VHVybiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURCOTU0O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4IDMwcHg7IFxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbjogNHB4IDJweDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4OyAvKiBBZGRpbmcgYm9yZGVyIHJhZGl1cyB0byBjcmVhdGUgYSBwaWxsIHNoYXBlICovXFxufVxcblxcbiNob3dUb1BsYXlDb250ZW50ICNwbGF5Rmlyc3RUdXJuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIENyZWF0ZSBTaGVhcmRsZSAqL1xcbiNjcmVhdGVTaGVhcmRsZU1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XFxufVxcblxcbiNjcmVhdGVTaGVhcmRsZUNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgbWFyZ2luOiAxNSUgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgY29sb3I6ICNhYWFhYWE7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3NlYXJjaENvbnRhaW5lciB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNzZWFyY2hJbnB1dCB7XFxuICB3aWR0aDogOTAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI3Jlc3VsdHNDb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAyYjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5yZXN1bHRJdGVtIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZXN1bHRJdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixPQUFPO0FBQ1Q7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QkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsbUJBQW1CLEVBQUUsZ0RBQWdEO0FBQ3ZFOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFVBQVU7RUFDVixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiA5MCU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nLXRvcDogNjBweDtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxufVxcblxcbi5sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbiAgZmxleDogMTsgXFxufVxcblxcbi5yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXg6IDE7IFxcbn1cXG5cXG4udGl0bGUge1xcbiAgZmxleDogMjsgXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxcbn1cXG5cXG4uaG93LXRvLXBsYXkge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiA3NSU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXG4gICAgb3ZlcmZsb3c6IG5vbmU7XFxufVxcblxcbi5wcmV2aW91cyxcXG4uY3JlYXRlLFxcbi5ob3ctdG8tcGxheSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wbGF5LWNvbnRhaW5lciB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uc2Vlay1iYXItY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLnNlZWstYmFyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmZmZmY7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uc2Vlay1iYXItYmFja2dyb3VuZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxufVxcblxcbi5zZWVrLWJhci1tYXJrZXJzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uc2Vlay1iYXItcHJvZ3Jlc3Mge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURCOTU0O1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcbn1cXG5cXG4ucHJvZ3Jlc3Mge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFEQjk1NDtcXG4gIHdpZHRoOiAwO1xcbn1cXG5cXG4uc2VjdGlvbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xcbn1cXG5cXG4ucGxheS1idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnBsYXktYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwMDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uZWxhcHNlZC10aW1lLFxcbi50b3RhbC10aW1lIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmVsYXBzZWQtdGltZSB7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4udG90YWwtdGltZSB7XFxuICByaWdodDogMDtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc3BvdGlmeS1zZWFyY2gge1xcbiAgd2lkdGg6IDkwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5idXR0b25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuLnN1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURCOTU0O1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5za2lwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwMDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5za2lwLFxcbi5zdWJtaXQge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG59XFxuXFxuYnV0dG9uW2Rpc2FibGVkXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5yZXN1bHRzLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICB3aWR0aDogOTUlO1xcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDJiO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHRvcDogY2FsYygxMDAlICsgNXB4KTtcXG59XFxuXFxuLnJlc3VsdC1pdGVtIHtcXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5yZXN1bHQtaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xcbn1cXG5cXG4uZ3Vlc3Mge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjYyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyBcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDsgXFxuICBmb250LXdlaWdodDogMzAwOyBcXG4gIGNvbG9yOiAjZmZmZmZmYWE7IFxcbn1cXG5cXG4uZ3Vlc3MtdGV4dCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4ucmVkLXgtaWNvbiB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNzUpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XFxufVxcblxcbi55ZWxsb3cteC1pY29uIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjE1LCAwLCAwLjc1KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xcbn1cXG5cXG4uZ3JlZW4tY2hlY2staWNvbiB7XFxuICBjb2xvcjogZ3JlZW47XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogOHB4OyBcXG59IFxcblxcblxcbi8qIFJlc3VsdHMgc2NyZWVuICovXFxuXFxuI3Jlc3VsdHNNb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDUxcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG59XFxuXFxuI3Jlc3VsdHNNb2RhbGNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFsYnVtLWFydCB7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uc29uZy10aXRsZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNGRkZGRkY7XFxufVxcblxcbi5zb25nLWFydGlzdCB7XFxuICBjb2xvcjogIzg4ODtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5zaGFyZS1yZXN1bHRzLWJ0biB7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgY29sb3I6ICNGRkZGRkY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURCOTU0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG59XFxuXFxuLnNoYXJlLXJlc3VsdHMtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDhiM2I7XFxufVxcblxcbi5yZXN1bHRzLWd1ZXNzZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4ucmVzdWx0cy1ndWVzcyB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIG1hcmdpbjogMnB4O1xcbn1cXG5cXG4ucmVzdWx0cy1ndWVzcy5ncmV5IHsgYmFja2dyb3VuZC1jb2xvcjogIzg4ODsgfVxcbi5yZXN1bHRzLWd1ZXNzLnllbGxvdyB7IGJhY2tncm91bmQtY29sb3I6ICNGRkQ3MDA7IH1cXG4ucmVzdWx0cy1ndWVzcy5yZWQgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwOyB9XFxuLnJlc3VsdHMtZ3Vlc3MuZ3JlZW4geyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MDAwOyB9XFxuXFxuXFxuLyogQ291bnRkb3duIHRpbWVyICovXFxuLm5leHQtc2hlYXJkbGUge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAycmVtIDA7XFxufVxcblxcbi5uZXh0LXNoZWFyZGxlIHAge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLm5leHQtc2hlYXJkbGUgcDpmaXJzdC1jaGlsZCB7XFxuICBjb2xvcjogIzg4ODg4ODtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG5cXG4ubmV4dC1zaGVhcmRsZSAuY291bnRkb3duIHtcXG4gIGNvbG9yOiAjYmJiYmJiO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblxcbi8qIEhvdyB0byBwbGF5IG1vZGFsICovXFxuLmljb24ge1xcbiAgY29sb3I6ICM3YzdjN2M7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5mbGV4LXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4jaG93VG9QbGF5TW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIHBhZGRpbmctdG9wOiAxNy41JTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTsgLyogTWFraW5nIHRoZSBiYWNrZ3JvdW5kIGRhcmtlciAqL1xcbn1cXG5cXG4jaG93VG9QbGF5Q29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg4ODg3YTtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICBmb250LXdlaWdodDogNTI1O1xcblxcbn1cXG5cXG4uY2xvc2Uge1xcbiAgY29sb3I6ICNhYWE7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgdG9wOiAwO1xcbn1cXG5cXG5cXG4jaG93VG9QbGF5Q29udGVudCBoMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbiNob3dUb1BsYXlDb250ZW50IHAge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgXFxufVxcblxcbiNob3dUb1BsYXlDb250ZW50IGkge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4jaG93VG9QbGF5Q29udGVudCAjcGxheUZpcnN0VHVybiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURCOTU0O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4IDMwcHg7IFxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbjogNHB4IDJweDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4OyAvKiBBZGRpbmcgYm9yZGVyIHJhZGl1cyB0byBjcmVhdGUgYSBwaWxsIHNoYXBlICovXFxufVxcblxcbiNob3dUb1BsYXlDb250ZW50ICNwbGF5Rmlyc3RUdXJuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIENyZWF0ZSBTaGVhcmRsZSAqL1xcbiNjcmVhdGVTaGVhcmRsZU1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XFxufVxcblxcbiNjcmVhdGVTaGVhcmRsZUNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgbWFyZ2luOiAxNSUgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgY29sb3I6ICNhYWFhYWE7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3NlYXJjaENvbnRhaW5lciB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNzZWFyY2hJbnB1dCB7XFxuICB3aWR0aDogOTAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI3Jlc3VsdHNDb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAyYjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5yZXN1bHRJdGVtIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZXN1bHRJdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGlzQXVkaW9QYXVzZWQsIHBsYXlBdWRpbywgcGF1c2VBdWRpbywgZ2V0QXVkaW9DdXJyZW50VGltZSB9IGZyb20gJy4vYXVkaW9NYW5hZ2VyJztcbmltcG9ydCB7IGFsbG93ZWREdXJhdGlvbnMsIGdldEN1cnJlbnRUdXJuLCBnZXRDdXJyZW50VHJhY2tJRCwgY2hlY2tHdWVzcywgc2F2ZU5ld0d1ZXNzVG9HYW1lU3RhdGUsIGFkZFNraXBwZWRUdXJuVG9HYW1lU3RhdGUsIGNoZWNrRm9yU3BvdGlmeUR1cGVzLCBjaGVja0FydGlzdCB9IGZyb20gJy4vc2hlYXJkbGUnO1xuaW1wb3J0IHsgc2VhcmNoVHJhY2ssIGdldFRyYWNrQnlJRCB9IGZyb20gJy4vc3BvdGlmeSc7XG5pbXBvcnQgeyBnYW1lRW5kLCBpbml0aWFsaXNlVGltZXIgfSBmcm9tICcuL3Jlc3VsdHNTY3JlZW4nO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFVJKGdhbWVTdGF0ZSA9IG51bGwpIHtcblxuICAvLyBFdmVyeSBvdGhlciB0aW1lIEkgdXNlIHRoaXMsIGl0J3MgYmVmb3JlIEkgdXBkYXRlIHRoZSBnYW1lU3RhdGUsIHNvIHRoaXMgbmVlZHMgdG8gYmUgLTFcbiAgdXBkYXRlU2Vla0JhckJhY2tncm91bmQoZ2V0Q3VycmVudFR1cm4oKS0xKTtcblxuICBjcmVhdGVNYXJrZXJzKGFsbG93ZWREdXJhdGlvbnMpO1xuXG4gIGlmIChnYW1lU3RhdGUpIHtcbiAgICBpbXBvcnRMb2FkZWRHYW1lKGdhbWVTdGF0ZSk7XG4gIH1cblxuICB1cGRhdGVTa2lwQnV0dG9uVGV4dCgpO1xuXG59XG5cbmZ1bmN0aW9uIGltcG9ydExvYWRlZEdhbWUoZ2FtZURhdGEpIHtcblxuICAvLyBJZiBjb21wbGV0ZWRcbiAgaWYgKGdhbWVEYXRhLmd1ZXNzZXMubGVuZ3RoID49IDYpIHtcbiAgICBcbiAgICAvLyBFbmQgZ2FtZVxuICAgIGdldFRyYWNrQnlJRChnZXRDdXJyZW50VHJhY2tJRCgpKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGdhbWVFbmQocmVzcG9uc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgbGV0IGN1cnJlbnRUdXJuO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZURhdGEuZ3Vlc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgIFxuICAgIGN1cnJlbnRUdXJuID0gaSArIDE7XG4gICAgY29uc3QgZ3Vlc3NEYXRhID0gZ2FtZURhdGEuZ3Vlc3Nlc1tpXTtcblxuXG4gICAgLy8gQ2hlY2sgdGhlIHN0YXRlIG9mIGVhY2ggZ3Vlc3MgYW5kIHVwZGF0ZSB0aGUgVUkgYWNjb3JkaW5nbHlcbiAgICBpZiAoZ3Vlc3NEYXRhID09PSBudWxsKSB7XG4gICAgICBhZGRTa2lwcGVkVHVyblRvQm9hcmQoY3VycmVudFR1cm4pO1xuICAgIH0gZWxzZSBpZiAoZ3Vlc3NEYXRhLnN0YXR1cyA9PT0gXCJjb3JyZWN0XCIpIHtcbiAgICAgIGFkZENvcnJlY3RHdWVzc1RvQm9hcmQoZ3Vlc3NEYXRhLmd1ZXNzLCBjdXJyZW50VHVybik7XG5cbiAgICAgIC8vIEVuZCBnYW1lXG4gICAgICBnZXRUcmFja0J5SUQoZ2V0Q3VycmVudFRyYWNrSUQoKSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGdhbWVFbmQocmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICB9IGVsc2UgaWYgKGd1ZXNzRGF0YS5zdGF0dXMgPT09IFwic2VtaWNvcnJlY3RcIikge1xuICAgICAgYWRkU2VtaWNvcnJlY3RHdWVzc1RvQm9hcmQoZ3Vlc3NEYXRhLmd1ZXNzLCBjdXJyZW50VHVybik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZEluY29ycmVjdEd1ZXNzVG9Cb2FyZChndWVzc0RhdGEuZ3Vlc3MsIGN1cnJlbnRUdXJuKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gR3Vlc3MgYm9hcmRcbmNvbnN0IGd1ZXNzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmd1ZXNzLWNvbnRhaW5lcicpO1xuXG5mdW5jdGlvbiBhZGRTZW1pY29ycmVjdEd1ZXNzVG9Cb2FyZChndWVzcywgdHVybikge1xuXG4gIHR1cm4gPSB0dXJuIC0gMTsgLy8gQWNjb3VudCBmb3IgemVyby1pbmRleGluZyBvZiBkaXZcblxuICBjb25zdCBndWVzc0RpdiA9IGd1ZXNzQ29udGFpbmVyLmNoaWxkcmVuW3R1cm5dO1xuXG4gIC8vIENyZWF0ZSB0aGUgcmVkICd4JyBpY29uXG4gIGNvbnN0IHllbGxvd1hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB5ZWxsb3dYSWNvbi50ZXh0Q29udGVudCA9ICd4JztcbiAgeWVsbG93WEljb24uY2xhc3NMaXN0LmFkZCgneWVsbG93LXgtaWNvbicpO1xuICBndWVzc0Rpdi5hcHBlbmRDaGlsZCh5ZWxsb3dYSWNvbik7XG5cbiAgLy8gQWRkIHRoZSB0cmFjayBpbmZvIHRleHQgdG8gdGhlIGd1ZXNzIGRpdlxuICBjb25zdCBndWVzc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGd1ZXNzVGV4dC50ZXh0Q29udGVudCA9IGd1ZXNzO1xuICBndWVzc1RleHQuY2xhc3NMaXN0LmFkZCgnZ3Vlc3MtdGV4dCcpO1xuICBndWVzc0Rpdi5hcHBlbmRDaGlsZChndWVzc1RleHQpO1xufVxuXG5mdW5jdGlvbiBhZGRJbmNvcnJlY3RHdWVzc1RvQm9hcmQoZ3Vlc3MsIHR1cm4pIHtcblxuICB0dXJuID0gdHVybiAtIDE7IC8vIEFjY291bnQgZm9yIHplcm8taW5kZXhpbmcgb2YgZGl2XG5cbiAgY29uc3QgZ3Vlc3NEaXYgPSBndWVzc0NvbnRhaW5lci5jaGlsZHJlblt0dXJuXTtcblxuICAvLyBDcmVhdGUgdGhlIHJlZCAneCcgaWNvblxuICBjb25zdCByZWRYSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgcmVkWEljb24udGV4dENvbnRlbnQgPSAneCc7XG4gIHJlZFhJY29uLmNsYXNzTGlzdC5hZGQoJ3JlZC14LWljb24nKTtcbiAgZ3Vlc3NEaXYuYXBwZW5kQ2hpbGQocmVkWEljb24pO1xuXG4gIC8vIEFkZCB0aGUgdHJhY2sgaW5mbyB0ZXh0IHRvIHRoZSBndWVzcyBkaXZcbiAgY29uc3QgZ3Vlc3NUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBndWVzc1RleHQudGV4dENvbnRlbnQgPSBndWVzcztcbiAgZ3Vlc3NUZXh0LmNsYXNzTGlzdC5hZGQoJ2d1ZXNzLXRleHQnKTtcbiAgZ3Vlc3NEaXYuYXBwZW5kQ2hpbGQoZ3Vlc3NUZXh0KTtcbn1cblxuZnVuY3Rpb24gYWRkQ29ycmVjdEd1ZXNzVG9Cb2FyZChndWVzcywgdHVybikge1xuXG4gIHR1cm4gPSB0dXJuIC0gMTsgLy8gQWNjb3VudCBmb3IgemVyby1pbmRleGluZyBvZiBkaXZcblxuICBjb25zdCBndWVzc0RpdiA9IGd1ZXNzQ29udGFpbmVyLmNoaWxkcmVuW3R1cm5dO1xuXG4gIC8vIENyZWF0ZSB0aGUgZ3JlZW4gY2hlY2ttYXJrIGljb25cbiAgY29uc3QgZ3JlZW5DaGVja0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGdyZWVuQ2hlY2tJY29uLnRleHRDb250ZW50ID0gJ+Kckyc7XG4gIGdyZWVuQ2hlY2tJY29uLmNsYXNzTGlzdC5hZGQoJ2dyZWVuLWNoZWNrLWljb24nKTtcbiAgZ3Vlc3NEaXYuYXBwZW5kQ2hpbGQoZ3JlZW5DaGVja0ljb24pO1xuXG4gIC8vIEFkZCB0aGUgdHJhY2sgaW5mbyB0ZXh0IHRvIHRoZSBndWVzcyBkaXZcbiAgY29uc3QgZ3Vlc3NUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBndWVzc1RleHQudGV4dENvbnRlbnQgPSBndWVzcztcbiAgZ3Vlc3NUZXh0LmNsYXNzTGlzdC5hZGQoJ2d1ZXNzLXRleHQnKTtcbiAgZ3Vlc3NEaXYuYXBwZW5kQ2hpbGQoZ3Vlc3NUZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFNraXBwZWRUdXJuVG9Cb2FyZCh0dXJuKSB7XG5cbiAgdHVybiA9IHR1cm4gLSAxOyAvLyBBY2NvdW50IGZvciB6ZXJvLWluZGV4aW5nIG9mIGRpdlxuXG4gIGNvbnN0IGd1ZXNzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmd1ZXNzLWNvbnRhaW5lcicpO1xuICBjb25zdCBndWVzc0RpdiA9IGd1ZXNzQ29udGFpbmVyLmNoaWxkcmVuW3R1cm5dO1xuICBcbiAgLy8gQ3JlYXRlIHRoZSByZWQgJ3gnIGljb25cbiAgY29uc3QgcmVkWEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHJlZFhJY29uLnRleHRDb250ZW50ID0gJ3gnO1xuICByZWRYSWNvbi5jbGFzc0xpc3QuYWRkKCdyZWQteC1pY29uJyk7XG5cbiAgLy8gQWRkIHRoZSByZWQgJ3gnIGljb24gdG8gdGhlIGd1ZXNzIGRpdlxuICBndWVzc0Rpdi5hcHBlbmRDaGlsZChyZWRYSWNvbik7XG5cbiAgLy8gQWRkIHRoZSBcIlNraXBwZWQgdHVyblwiIHRleHQgdG8gdGhlIGd1ZXNzIGRpdlxuICBjb25zdCBza2lwcGVkVHVyblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHNraXBwZWRUdXJuVGV4dC50ZXh0Q29udGVudCA9IFwiU2tpcHBlZFwiO1xuICBndWVzc0Rpdi5hcHBlbmRDaGlsZChza2lwcGVkVHVyblRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJTZWFyY2hCb3goKSB7XG4gIGNvbnN0IHNlYXJjaEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcG90aWZ5LXNlYXJjaCcpO1xuICBzZWFyY2hCb3gudmFsdWUgPSAnJztcbn1cblxuXG4vLyBQbGF5L1BhdXNlIGJ1dHRvblxuY29uc3QgcGxheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheS1idXR0b25cIik7XG5wbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQbGF5QnV0dG9uQ2xpY2spO1xuXG5mdW5jdGlvbiBoYW5kbGVQbGF5QnV0dG9uQ2xpY2soKSB7XG5cbiAgICBpZiAoaXNBdWRpb1BhdXNlZCgpKSB7XG4gICAgICAgIHBsYXlBdWRpbygpO1xuICAgICAgICBwbGF5QnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhIGZhLXBhdXNlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPic7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGF1c2VBdWRpbygpO1xuICAgICAgICBwbGF5QnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhIGZhLXBsYXlcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+JztcbiAgICB9XG59XG5cblxuLy8gU2tpcCBidXR0b25cbmNvbnN0IHNraXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNraXBcIik7XG5za2lwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVTa2lwQnV0dG9uQ2xpY2spO1xuXG5mdW5jdGlvbiBoYW5kbGVTa2lwQnV0dG9uQ2xpY2soKSB7XG5cbiAgaWYgKGdldEN1cnJlbnRUdXJuKCkgPCBhbGxvd2VkRHVyYXRpb25zLmxlbmd0aCkge1xuICAgIFxuICAgIGFkZFNraXBwZWRUdXJuVG9Cb2FyZChnZXRDdXJyZW50VHVybigpKTtcbiAgICBcbiAgICB1cGRhdGVTZWVrQmFyQmFja2dyb3VuZChnZXRDdXJyZW50VHVybigpKTtcblxuICAgIGFkZFNraXBwZWRUdXJuVG9HYW1lU3RhdGUoKTtcblxuICAgIHVwZGF0ZVNraXBCdXR0b25UZXh0KCk7XG5cbiAgfSBlbHNlIHtcblxuICAgIGFkZFNraXBwZWRUdXJuVG9HYW1lU3RhdGUoKTtcblxuICAgIC8vIEVuZCBnYW1lXG4gICAgZ2V0VHJhY2tCeUlEKGdldEN1cnJlbnRUcmFja0lEKCkpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgZ2FtZUVuZChyZXNwb25zZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlUGxheUJ1dHRvbkljb25Ub1BsYXkoKSB7XG4gIHBsYXlCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEgZmEtcGxheVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTa2lwQnV0dG9uVGV4dCgpIHtcblxuICBpZiAoZ2V0Q3VycmVudFR1cm4oKSA+IDAgJiYgZ2V0Q3VycmVudFR1cm4oKSA8IGFsbG93ZWREdXJhdGlvbnMubGVuZ3RoKSB7XG4gICAgY29uc3Qgc2tpcFNlY29uZHMgPSBhbGxvd2VkRHVyYXRpb25zW2dldEN1cnJlbnRUdXJuKCldIC0gYWxsb3dlZER1cmF0aW9uc1tnZXRDdXJyZW50VHVybigpIC0gMV07XG4gICAgc2tpcEJ1dHRvbi50ZXh0Q29udGVudCA9IGBTS0lQICgrJHtza2lwU2Vjb25kc31zKWA7XG4gIH0gZWxzZSBpZiAoZ2V0Q3VycmVudFR1cm4oKSA9PT0gMCkge1xuICAgIGNvbnN0IHNraXBTZWNvbmRzID0gYWxsb3dlZER1cmF0aW9uc1tnZXRDdXJyZW50VHVybigpXTtcbiAgICBza2lwQnV0dG9uLnRleHRDb250ZW50ID0gYFNLSVAgKCske3NraXBTZWNvbmRzfXMpYDtcbiAgfSBlbHNlIHtcbiAgICBza2lwQnV0dG9uLnRleHRDb250ZW50ID0gXCJTS0lQXCI7XG4gIH1cbn1cbi8vIEtlZXBzaWVzXG5cblxuXG4vLyBrZWVwc2llc1xuXG4vLyBTdWJtaXQgYnV0dG9uXG5jb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0Jyk7XG5cbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVN1Ym1pdCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcbiAgXG4gIGNvbnN0IGdhbWVUcmFja0lEID0gZ2V0Q3VycmVudFRyYWNrSUQoKTtcbiAgY29uc3QgZ3Vlc3NJc0NvcnJlY3QgPSBjaGVja0d1ZXNzKHNlbGVjdGVkVHJhY2tJRCwgZ2FtZVRyYWNrSUQpO1xuICBjb25zdCBzZWFyY2hJbnB1dFZhbHVlID0gc2VhcmNoSW5wdXQudmFsdWU7XG5cbiAgZGlzYWJsZVN1Ym1pdEJ1dHRvbigpO1xuICBjbGVhclNlYXJjaEJveCgpO1xuXG4gIC8vIFVwZGF0ZSBwcm9ncmVzcyBiYXIgYmVmb3JlIGFkZGluZyBndWVzcyBhbmQgc2F2aW5nIGdhbWUgc3RhdGVcbiAgdXBkYXRlU2Vla0JhckJhY2tncm91bmQoZ2V0Q3VycmVudFR1cm4oKSk7XG5cbiAgLy8gQ2hlY2sgaWYgZ3Vlc3MgaXMgY29ycmVjdCBmaXJzdFxuICBpZiAoZ3Vlc3NJc0NvcnJlY3QpIHtcbiAgICBhZGRDb3JyZWN0R3Vlc3NUb0JvYXJkKHNlYXJjaElucHV0VmFsdWUsIGdldEN1cnJlbnRUdXJuKCkpO1xuXG4gICAgc2F2ZU5ld0d1ZXNzVG9HYW1lU3RhdGUoc2VhcmNoSW5wdXRWYWx1ZSwgXCJjb3JyZWN0XCIpO1xuICAgIFxuICAgIGdldFRyYWNrQnlJRChnZXRDdXJyZW50VHJhY2tJRCgpKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGdhbWVFbmQocmVzcG9uc2UpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGF3YWl0IGNoZWNrQXJ0aXN0KHNlbGVjdGVkVHJhY2tJRCkpIHtcblxuICAgIGxldCBkdXBlc0NoZWNrID0gYXdhaXQgY2hlY2tGb3JTcG90aWZ5RHVwZXMoc2VhcmNoSW5wdXRWYWx1ZSlcblxuICAgIC8vIENvcnJlY3QgYW5zd2VyIGZvdW5kIGluIGR1cGVzXG4gICAgaWYgKGR1cGVzQ2hlY2spIHtcbiAgICAgIGFkZENvcnJlY3RHdWVzc1RvQm9hcmQoc2VhcmNoSW5wdXRWYWx1ZSwgZ2V0Q3VycmVudFR1cm4oKSk7XG5cbiAgICAgIHNhdmVOZXdHdWVzc1RvR2FtZVN0YXRlKHNlYXJjaElucHV0VmFsdWUsIFwiY29ycmVjdFwiKTtcblxuICAgICAgZ2V0VHJhY2tCeUlEKGdldEN1cnJlbnRUcmFja0lEKCkpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBnYW1lRW5kKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQXJ0aXN0IGZvdW5kLCBidXQgbm8gZHVwZXMgb2YgdHJhY2tcbiAgICBhZGRTZW1pY29ycmVjdEd1ZXNzVG9Cb2FyZChzZWFyY2hJbnB1dFZhbHVlLCBnZXRDdXJyZW50VHVybigpKTtcbiAgICBzYXZlTmV3R3Vlc3NUb0dhbWVTdGF0ZShzZWFyY2hJbnB1dFZhbHVlLCBcInNlbWljb3JyZWN0XCIpOyAgICBcbiAgfSBlbHNlIHtcbiAgICAvLyBDb21wbGV0ZWx5IGluY29ycmVjdFxuICAgIGFkZEluY29ycmVjdEd1ZXNzVG9Cb2FyZChzZWFyY2hJbnB1dFZhbHVlLCBnZXRDdXJyZW50VHVybigpKTtcbiAgICBzYXZlTmV3R3Vlc3NUb0dhbWVTdGF0ZShzZWFyY2hJbnB1dFZhbHVlLCBcImluY29ycmVjdFwiKTtcbiAgfVxuICBcbiAgdXBkYXRlU2tpcEJ1dHRvblRleHQoKTtcbiAgXG4gIC8vIENoZWNrIHRvdGFsIGd1ZXNzZXMgYWZ0ZXIgZWFjaCBpbmNvcnJlY3QgZ3Vlc3NcbiAgaWYgKGdldEN1cnJlbnRUdXJuKCkgPiBhbGxvd2VkRHVyYXRpb25zLmxlbmd0aCkge1xuICBcbiAgICBnZXRUcmFja0J5SUQoZ2V0Q3VycmVudFRyYWNrSUQoKSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBnYW1lRW5kKHJlc3BvbnNlKTtcbiAgXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZVN1Ym1pdEJ1dHRvbigpIHtcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpO1xuICBzdWJtaXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlU3VibWl0QnV0dG9uKCkge1xuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0Jyk7XG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbn1cblxuXG4vLyBQcm9ncmVzcyBiYXJcbmNvbnN0IHByb2dyZXNzQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWVrLWJhci1wcm9ncmVzc1wiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2dyZXNzQmFyKCkge1xuICBjb25zdCBwcm9ncmVzc1BlcmNlbnRhZ2UgPSBnZXRBdWRpb0N1cnJlbnRUaW1lKCkgLyAxNjtcbiAgY29uc3Qgb2Zmc2V0ID0gMC4wMDU7XG4gIHByb2dyZXNzQmFyLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZVgoJHtwcm9ncmVzc1BlcmNlbnRhZ2UgKyBvZmZzZXR9KWA7XG5cbiAgaWYgKCFpc0F1ZGlvUGF1c2VkKCkpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlUHJvZ3Jlc3NCYXIpO1xuICB9IGVsc2Uge1xuICAgIGNoYW5nZVBsYXlCdXR0b25JY29uVG9QbGF5KCk7IFxuICB9XG59XG5cblxuY29uc3Qgc2Vla0JhckJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlZWstYmFyLWJhY2tncm91bmRcIik7XG5cbmZ1bmN0aW9uIHVwZGF0ZVNlZWtCYXJCYWNrZ3JvdW5kKHR1cm4pIHtcbiAgY29uc3QgcGxheUR1cmF0aW9uID0gYWxsb3dlZER1cmF0aW9uc1t0dXJuXTtcbiAgY29uc3QgcGVyY2VudGFnZSA9IHBsYXlEdXJhdGlvbiAvIDE2O1xuICBzZWVrQmFyQmFja2dyb3VuZC5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGVYKCR7cGVyY2VudGFnZX0pYDtcbn1cblxuLy8gQWxsb3dlZCBsZW5ndGggdG8gcGxheSBtYXJrZXJzXG5mdW5jdGlvbiBjcmVhdGVNYXJrZXIoZHVyYXRpb24pIHtcbiAgY29uc3QgbWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcGVyY2VudGFnZSA9IE1hdGgubWluKChkdXJhdGlvbiAvIDE2KSAqIDEwMCwgMTAwKTsgLy8gbGltaXQgdG8gbWF4aW11bSBvZiAxMDBcblxuICBtYXJrZXIuc3R5bGUud2lkdGggPSBcIjFweFwiO1xuICBtYXJrZXIuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG4gIG1hcmtlci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgbWFya2VyLnN0eWxlLmxlZnQgPSBgJHtwZXJjZW50YWdlfSVgO1xuICBtYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZmZmZmXCI7XG5cbiAgcmV0dXJuIG1hcmtlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1hcmtlcnMoYWxsb3dlZER1cmF0aW9ucykge1xuICBjb25zdCBtYXJrZXJzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWVrLWJhci1tYXJrZXJzXCIpO1xuICBhbGxvd2VkRHVyYXRpb25zLmZvckVhY2goZHVyYXRpb24gPT4ge1xuICAgICAgY29uc3QgbWFya2VyID0gY3JlYXRlTWFya2VyKGR1cmF0aW9uKTtcbiAgICAgIG1hcmtlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQobWFya2VyKTtcbiAgfSk7XG59XG5cbi8vIFNlYXJjaCBiYXJcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwb3RpZnktc2VhcmNoJyk7XG5sZXQgc2VsZWN0ZWRUcmFja0lEO1xuXG4vLyBEZWJvdW5jZSBmdW5jdGlvbiB0byBzdG9wIHRoZSBhdXRvLXNlYXJjaCBmaXJpbmcgdG9vIG9mdGVuXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgICBsZXQgdGltZW91dDtcblxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIGNvbnN0IGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcblxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcblxuICAgICAgICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9O1xufVxuXG4vLyBObyBkZWJvdW5jZSBuZWVkZWQgZm9yIGRpc2FibGluZyB0aGUgYnV0dG9uXG5zZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBkaXNhYmxlU3VibWl0QnV0dG9uKCk7XG59KVxuXG5zZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGRlYm91bmNlKChldmVudCkgPT4ge1xuICAgIGNvbnN0IHF1ZXJ5ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cy1jb250YWluZXInKTtcbiAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIHJlc3VsdHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgXG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICBzZWFyY2hUcmFjayhxdWVyeSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKCh0cmFjaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJlc3VsdEl0ZW0uY2xhc3NMaXN0LmFkZCgncmVzdWx0LWl0ZW0nKTtcbiAgICAgICAgICAgIHJlc3VsdEl0ZW0udGV4dENvbnRlbnQgPSBgJHt0cmFjay5hcnRpc3RzWzBdLm5hbWV9IC0gJHt0cmFjay5uYW1lfWA7XG4gICAgICAgICAgICByZXN1bHRJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFjay1pZCcsIHRyYWNrLmlkKTtcbiAgXG4gICAgICAgICAgICByZXN1bHRJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIHNlbGVjdGVkVHJhY2tJRCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhY2staWQnKTs7XG4gIFxuICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHNlYXJjaCBpbnB1dCB3aXRoIHRoZSBzZWxlY3RlZCByZXN1bHQgYW5kIGhpZGUgdGhlIHJlc3VsdHMgY29udGFpbmVyXG4gICAgICAgICAgICAgIHNlYXJjaElucHV0LnZhbHVlID0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICAgICAgICByZXN1bHRzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgIGVuYWJsZVN1Ym1pdEJ1dHRvbigpO1xuICAgICAgICAgICAgfSk7XG4gIFxuICAgICAgICAgICAgcmVzdWx0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN1bHRJdGVtKTtcbiAgICAgICAgICB9KTtcbiAgXG4gICAgICAgICAgcmVzdWx0c0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCA1MDApKTtcblxuLy8gU2VhcmNoIHJlc3VsdHNcbmNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cy1jb250YWluZXInKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIC8vIENoZWNrIGlmIHRoZSBjbGljayB0YXJnZXQgaXMgb3V0c2lkZSBvZiB0aGUgLnJlc3VsdHMtY29udGFpbmVyXG4gIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJyNyZXN1bHRzLWNvbnRhaW5lcicpKSB7XG4gICAgcmVzdWx0c0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG59KTsiLCIvLyBJbXBvcnQgZ2FtZSBzdGF0ZSBtYW5pcHVsYXRpb24gZnVuY3Rpb25zXG5pbXBvcnQgeyBnZXRDdXJyZW50VHVybiwgYWxsb3dlZER1cmF0aW9ucyB9IGZyb20gJy4vc2hlYXJkbGUuanMnO1xuaW1wb3J0IHsgZ2V0VHJhY2tCeUlEIH0gZnJvbSAnLi9zcG90aWZ5LmpzJztcblxuLy8gVGhpcyBzaG91bGQgYmUgYSBjYWxsYmFjaywgdG8gYXZvaWQgY28tZGVwZW5kZW5jeT9cbmltcG9ydCB7IHVwZGF0ZVByb2dyZXNzQmFyIH0gZnJvbSAnLi9VSS5qcyc7XG5cbi8vIFJlcXVpcmVkIGhlcmUgc28gdGhhdCB0aGUgdXNlciBjYW4gcGF1c2UgYW5kIHJlc3VtZVxubGV0IGF1ZGlvO1xubGV0IGVuZFRpbWU7XG5sZXQgdGltZW91dElEO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R2FtZVRyYWNrQXVkaW8odHJhY2tJRCkge1xuXG4gICAgY29uc29sZS5sb2coXCJUcmFjayBJRDpcIiwgdHJhY2tJRCk7XG5cbiAgICBjb25zdCB0cmFjayA9IGF3YWl0IGdldFRyYWNrQnlJRCh0cmFja0lEKTtcblxuICAgIHJldHVybiBuZXcgQXVkaW8odHJhY2sucHJldmlld191cmwpO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRBdWRpbyh0cmFja0lEKSB7XG4gICAgYXVkaW8gPSBhd2FpdCBnZXRHYW1lVHJhY2tBdWRpbyh0cmFja0lEKTtcbiAgICBhdWRpby5hZGRFdmVudExpc3RlbmVyKFwidGltZXVwZGF0ZVwiLCB1cGRhdGVQcm9ncmVzc0Jhcik7XG4gICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcihcInRpbWV1cGRhdGVcIiwgdXBkYXRlRWxhcHNlZFRpbWUpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVFbGFwc2VkVGltZSgpIHtcbiAgICAvLyBnZXQgdGhlIGN1cnJlbnQgdGltZSBpbiBzZWNvbmRzXG4gICAgbGV0IGN1cnJlbnRUaW1lID0gTWF0aC5mbG9vcihhdWRpby5jdXJyZW50VGltZSk7XG4gICAgXG4gICAgLy8gY29udmVydCBpdCB0byBtaW51dGVzOnNlY29uZHMgZm9ybWF0XG4gICAgbGV0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKGN1cnJlbnRUaW1lIC8gNjApO1xuICAgIGxldCBzZWNvbmRzID0gY3VycmVudFRpbWUgJSA2MDtcblxuICAgIC8vIHBhZCBzZWNvbmRzIHdpdGggbGVhZGluZyB6ZXJvIGlmIGxlc3MgdGhhbiAxMFxuICAgIGlmIChzZWNvbmRzIDwgMTApIHtcbiAgICAgICAgc2Vjb25kcyA9IFwiMFwiICsgc2Vjb25kcztcbiAgICB9XG5cbiAgICAvLyBnZXQgdGhlIGVsYXBzZWQtdGltZSBlbGVtZW50IGFuZCB1cGRhdGUgaXRzIHRleHQgY29udGVudFxuICAgIGxldCBlbGFwc2VkVGltZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsYXBzZWQtdGltZVwiKTtcbiAgICBlbGFwc2VkVGltZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHttaW51dGVzfToke3NlY29uZHN9YDtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcGxheUF1ZGlvKCkge1xuXG4gICAgY29uc3QgcGxheUR1cmF0aW9uID0gYWxsb3dlZER1cmF0aW9uc1tnZXRDdXJyZW50VHVybigpIC0gMV07XG4gICAgZW5kVGltZSA9IHBsYXlEdXJhdGlvbjtcblxuICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcblxuICAgIGlmIChnZXRDdXJyZW50VHVybigpIDwgNykge1xuICAgICAgICBhdWRpby5wbGF5KCk7XG4gICAgfVxuICAgIFxuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJRCk7XG4gICAgdGltZW91dElEID0gc2V0VGltZW91dChwYXVzZUF1ZGlvLCBlbmRUaW1lICogMTAwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXVzZUF1ZGlvKCkge1xuICAgIGF1ZGlvLnBhdXNlKCk7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJRCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0F1ZGlvUGF1c2VkKCkge1xuICAgIHJldHVybiBhdWRpby5wYXVzZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdWRpb0N1cnJlbnRUaW1lKCkge1xuICAgIHJldHVybiBhdWRpby5jdXJyZW50VGltZTtcbn0iLCIvLyBjb25zdCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlJyk7XG5cbi8vIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICBjcmVhdGVCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwic2hvd1wiO1xuLy8gfSk7XG5cbi8vIC8vIEdldCB0aGUgbmV3IG1vZGFsXG4vLyB2YXIgY3JlYXRlTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlU2hlYXJkbGVNb2RhbCcpO1xuXG4vLyAvLyBHZXQgdGhlIGJ1dHRvbiB0aGF0IG9wZW5zIHRoZSBuZXcgbW9kYWxcbi8vIHZhciBjcmVhdGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjcmVhdGUnKVswXTtcblxuLy8gLy8gR2V0IHRoZSA8c3Bhbj4gZWxlbWVudCB0aGF0IGNsb3NlcyB0aGUgbmV3IG1vZGFsXG4vLyB2YXIgY3JlYXRlU3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZUNyZWF0ZVNoZWFyZGxlJyk7XG5cbi8vIC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIHRoZSBidXR0b24sIG9wZW4gdGhlIG1vZGFsIFxuLy8gY3JlYXRlQnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbi8vICAgY3JlYXRlTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbi8vIH1cblxuLy8gLy8gV2hlbiB0aGUgdXNlciBjbGlja3MgYW55d2hlcmUgb3V0c2lkZSBvZiB0aGUgbW9kYWwsIGNsb3NlIGl0XG4vLyB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4vLyAgIGlmIChldmVudC50YXJnZXQgPT0gY3JlYXRlTW9kYWwpIHtcbi8vICAgICBjcmVhdGVNb2RhbC5zdHlsZS5kaVxuLy8gICAgIGxheSA9IFwibm9uZVwiO1xuLy8gICB9XG4vLyB9IiwiaW1wb3J0IHsgcGxheUF1ZGlvIH0gZnJvbSBcIi4vYXVkaW9NYW5hZ2VyXCI7IFxuXG52YXIgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG93VG9QbGF5TW9kYWwnKTtcbnZhciBjbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZUhvd1RvUGxheScpO1xudmFyIHBsYXlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheUZpcnN0VHVybicpO1xuXG52YXIgaG93VG9QbGF5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdy10by1wbGF5Jyk7XG5cbmhvd1RvUGxheUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5jbG9zZUJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn1cblxucGxheUJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHBsYXlBdWRpbygpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNhdmVHYW1lU3RhdGUoZ3Vlc3Nlcykge1xuXG4gICAgLy8gIFN0b3JlIGFzIHRyYWNrSUQgZm9yIHN0YXRzP1xuICAgIC8vIGNvbnNvbGUubG9nKGd1ZXNzZXMudHJhY2tJRCk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZVN0YXRlJywgSlNPTi5zdHJpbmdpZnkoZ3Vlc3NlcykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEdhbWVTdGF0ZSgpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRlJykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UGxheWVkQmVmb3JlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZWRCZWZvcmUnLCBKU09OLnN0cmluZ2lmeSh0cnVlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJc1JldHVybmluZ1BsYXllcigpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGxheWVkQmVmb3JlJykpO1xufSIsImltcG9ydCB7IHNoYXJlUmVzdWx0IH0gZnJvbSBcIi4vc2hlYXJkbGVcIjtcbmltcG9ydCB7IGdldEd1ZXNzZXMgfSBmcm9tIFwiLi9zaGVhcmRsZVwiO1xuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0c01vZGFsXCIpO1xuXG4vLyBHZXR0aW5nIHRoZSBkaWZmZXJlbmNlIGluIHNlY29uZHMgdG8gdGhlIG5leHQgZGF5XG5mdW5jdGlvbiBnZXRUaW1lVG9OZXh0RGF5KCkge1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCksIG5vdy5nZXREYXRlKCkrMSk7XG4gICAgY29uc3QgZGlmZkluTWlsbGlTZWNvbmRzID0gdG9tb3Jyb3cgLSBub3c7XG4gICAgcmV0dXJuIGRpZmZJbk1pbGxpU2Vjb25kcyAvIDEwMDA7XG59XG5cbi8vIENvdW50ZG93biB0aW1lclxuZnVuY3Rpb24gc3RhcnRUaW1lcihkdXJhdGlvbiwgZGlzcGxheSkge1xuICAgIGxldCB0aW1lciA9IGR1cmF0aW9uLCBob3VycywgbWludXRlcywgc2Vjb25kcztcbiAgICBcbiAgICBmdW5jdGlvbiB1cGRhdGVUaW1lcigpIHtcbiAgICAgICAgaG91cnMgPSBwYXJzZUludCh0aW1lciAvIDM2MDAsIDEwKTtcbiAgICAgICAgbWludXRlcyA9IHBhcnNlSW50KCh0aW1lciAlIDM2MDApIC8gNjAsIDEwKTtcbiAgICAgICAgc2Vjb25kcyA9IHBhcnNlSW50KHRpbWVyICUgNjAsIDEwKTtcblxuICAgICAgICBob3VycyA9IGhvdXJzIDwgMTAgPyBcIjBcIiArIGhvdXJzIDogaG91cnM7XG4gICAgICAgIG1pbnV0ZXMgPSBtaW51dGVzIDwgMTAgPyBcIjBcIiArIG1pbnV0ZXMgOiBtaW51dGVzO1xuICAgICAgICBzZWNvbmRzID0gc2Vjb25kcyA8IDEwID8gXCIwXCIgKyBzZWNvbmRzIDogc2Vjb25kcztcblxuICAgICAgICBkaXNwbGF5LnRleHRDb250ZW50ID0gaG91cnMgKyBcIjpcIiArIG1pbnV0ZXMgKyBcIjpcIiArIHNlY29uZHM7XG5cbiAgICAgICAgaWYgKC0tdGltZXIgPCAwKSB7XG4gICAgICAgICAgICB0aW1lciA9IGR1cmF0aW9uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUnVuIHRoZSBmdW5jdGlvbiBpbW1lZGlhdGVseSB0byBzZXQgdGhlIHRpbWUgd2l0aG91dCBkZWxheVxuICAgIHVwZGF0ZVRpbWVyKCk7XG4gICAgXG4gICAgLy8gVGhlbiBoYXZlIGl0IHJ1biBldmVyeSBzZWNvbmRcbiAgICBzZXRJbnRlcnZhbCh1cGRhdGVUaW1lciwgMTAwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1lRW5kKHRyYWNrSW5mbykge1xuXG4gICAgbGV0IGNvdW50ZG93bkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdW50ZG93blwiKTtcbiAgICBsZXQgdGltZVRvTmV4dERheSA9IGdldFRpbWVUb05leHREYXkoKTtcbiAgICBzdGFydFRpbWVyKHRpbWVUb05leHREYXksIGNvdW50ZG93bkVsZW1lbnQpO1xuXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgIC8vIFNldCB0aGUgc29uZydzIGRldGFpbHNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvbmctdGl0bGVcIikudGV4dENvbnRlbnQgPSB0cmFja0luZm8ubmFtZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvbmctYXJ0aXN0XCIpLnRleHRDb250ZW50ID0gdHJhY2tJbmZvLmFydGlzdHNbMF0ubmFtZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsYnVtLWFydFwiKS5zcmMgPSB0cmFja0luZm8uYWxidW0uaW1hZ2VzWzBdLnVybDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvbmctcHJldmlld1wiKS5zcmMgPSB0cmFja0luZm8ucHJldmlld191cmw7XG5cbiAgICAvLyBHZXQgdXNlciByZXN1bHRzXG4gICAgbGV0IHVzZXJSZXN1bHRzID0gZ2V0R3Vlc3NlcygpO1xuXG4gICAgY29uc29sZS5sb2coXCJVc2VyIHJlc3VsdHNcIiwgdXNlclJlc3VsdHMpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgaWYgKHVzZXJSZXN1bHRzW2ldID09PSBudWxsIHwgIXVzZXJSZXN1bHRzW2ldKSB7XG4gICAgICAgICAgbGV0IGd1ZXNzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBndWVzcyR7aSsxfWApO1xuICAgICAgICAgIGd1ZXNzRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdncmV5Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGd1ZXNzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBndWVzcyR7aSsxfWApO1xuICAgICAgICAgIHN3aXRjaCh1c2VyUmVzdWx0c1tpXS5zdGF0dXMpIHtcbiAgICAgICAgICAgIGNhc2UgXCJjb3JyZWN0XCI6XG4gICAgICAgICAgICAgIGd1ZXNzRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdncmVlbicpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzZW1pY29ycmVjdFwiOlxuICAgICAgICAgICAgICBndWVzc0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgneWVsbG93Jyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImluY29ycmVjdFwiOlxuICAgICAgICAgICAgICBndWVzc0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgncmVkJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgZ3Vlc3NFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dyZXknKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIGNvbnNvbGUubG9nKHNoYXJlUmVzdWx0KCkpO1xufSIsIlxuaW1wb3J0IHsgc2F2ZUdhbWVTdGF0ZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHsgaW5pdEF1ZGlvIH0gZnJvbSBcIi4vYXVkaW9NYW5hZ2VyXCI7XG5pbXBvcnQgeyBnZXRBbGxUcmFja0lEc0J5U2VhcmNoUXVlcnksIGdldFRyYWNrQnlJRCB9IGZyb20gXCIuL3Nwb3RpZnlcIjtcbmltcG9ydCB7IGdldFRvZGF5c1RyYWNrSUQsIGdldEN1cnJlbnREYXkgfSBmcm9tICcuL3RyYWNrU2VsZWN0aW9uJztcblxuaW1wb3J0IENsaXBib2FyZEpTIGZyb20gJ2NsaXBib2FyZCc7XG5cbi8vIEluaXRpYWxpc2UgY2xpcGJvYXJkXG5uZXcgQ2xpcGJvYXJkSlMoJy5zaGFyZS1yZXN1bHRzLWJ0bicsIHtcbiAgdGV4dDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc2hhcmVSZXN1bHQoKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBhbGxvd2VkRHVyYXRpb25zID0gWzEsIDIsIDQsIDcsIDExLCAxNl07XG5cbmxldCBnYW1lU3RhdGUgPSB7XG4gIGd1ZXNzZXM6IFtdLFxuICB0cmFja0lEOiBudWxsLFxuICB3b246IGZhbHNlXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudFR1cm4gPSAoKSA9PiBnYW1lU3RhdGUuZ3Vlc3Nlcy5sZW5ndGggKyAxO1xuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRUcmFja0lEID0gKCkgPT4gZ2FtZVN0YXRlLnRyYWNrSUQ7XG5leHBvcnQgY29uc3QgZ2V0R3Vlc3NlcyA9ICgpID0+IGdhbWVTdGF0ZS5ndWVzc2VzO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBOZXdHYW1lKCkge1xuXG4gIGNvbnN0IHRvZGF5c1RyYWNrSUQgPSBnZXRUb2RheXNUcmFja0lEKCk7XG5cbiAgZ2FtZVN0YXRlLmd1ZXNzZXMgPSBbXTtcbiAgZ2FtZVN0YXRlLnRyYWNrSUQgPSB0b2RheXNUcmFja0lEO1xuICBnYW1lU3RhdGUud29uID0gZmFsc2U7XG5cbiAgaW5pdEF1ZGlvKHRvZGF5c1RyYWNrSUQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW1wb3J0R2FtZVN0YXRlKGxvYWRlZEdhbWVTdGF0ZSkge1xuICBjb25zb2xlLmxvZyhcIkdhbWUgc3RhdGUgbG9hZGVkOlwiLCBsb2FkZWRHYW1lU3RhdGUpO1xuICBnYW1lU3RhdGUgPSBsb2FkZWRHYW1lU3RhdGU7XG5cbiAgaW5pdEF1ZGlvKGxvYWRlZEdhbWVTdGF0ZS50cmFja0lEKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrR3Vlc3MoZ3Vlc3NlZFRyYWNrSUQsIGdhbWVUcmFja0lEKSB7XG4gIHJldHVybiBndWVzc2VkVHJhY2tJRCA9PT0gZ2FtZVRyYWNrSUQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0ZvclNwb3RpZnlEdXBlcyhzZWFyY2hRdWVyeSkge1xuICAgIC8vIElmIGZhbHNlLCBjaGVjayB0aGUgdXNlcidzIGd1ZXNzIGFnYWluc3Qgd2hhdCBzaG91bGQgaG9wZWZ1bGx5IGJlIFNwb3RpZnkncyBkdXBlc1xuICAgIGNvbnN0IGZldGNoZWRJRHMgPSBhd2FpdCBnZXRBbGxUcmFja0lEc0J5U2VhcmNoUXVlcnkoc2VhcmNoUXVlcnkpO1xuXG4gICAgY29uc29sZS5sb2coXCJDdXJyZW50IHRyYWNrIElEOlwiLCBnZXRDdXJyZW50VHJhY2tJRCgpKTtcbiAgICBjb25zb2xlLmxvZyhcIkR1cGUgdHJhY2sgSURzOlwiLCBmZXRjaGVkSURzKTtcblxuICAgIC8vIElmIGd1ZXNzZWRUcmFja0lEIGlzIGluIHRoZSBhcnJheSByZXR1cm5lZCwgcmV0dXJuIHRydWVcbiAgICByZXR1cm4gZmV0Y2hlZElEcy5pbmNsdWRlcyhnZXRDdXJyZW50VHJhY2tJRCgpKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQXJ0aXN0KHRyYWNrSUQpIHtcbiAgbGV0IGd1ZXNzZWRUcmFjayA9IGF3YWl0IGdldFRyYWNrQnlJRCh0cmFja0lEKTtcbiAgbGV0IGdhbWVUcmFjayA9IGF3YWl0IGdldFRyYWNrQnlJRChnZXRUb2RheXNUcmFja0lEKCkpO1xuXG4gIGxldCBndWVzc2VkQXJ0aXN0cyA9IGd1ZXNzZWRUcmFjay5hcnRpc3RzLm1hcChhcnRpc3QgPT4gYXJ0aXN0Lm5hbWUpO1xuICBsZXQgZ2FtZUFydGlzdHMgPSBnYW1lVHJhY2suYXJ0aXN0cy5tYXAoYXJ0aXN0ID0+IGFydGlzdC5uYW1lKTtcblxuICAvLyBDaGVjayBpZiBhbnkgYXJ0aXN0IGluIGd1ZXNzZWRUcmFjayBleGlzdHMgaW4gZ2FtZVRyYWNrXG4gIHJldHVybiBndWVzc2VkQXJ0aXN0cy5zb21lKGFydGlzdCA9PiBnYW1lQXJ0aXN0cy5pbmNsdWRlcyhhcnRpc3QpKTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZU5ld0d1ZXNzVG9HYW1lU3RhdGUoZ3Vlc3MsIHN0YXR1cykge1xuXG4gIGdhbWVTdGF0ZS5ndWVzc2VzLnB1c2goe2d1ZXNzLCBzdGF0dXN9KTtcblxuICAvLyBTYXZlIHRvIGxvY2FsIHN0b3JhZ2VcbiAgc2F2ZUdhbWVTdGF0ZShnYW1lU3RhdGUpO1xuXG4gIGNvbnNvbGUubG9nKFwiR2FtZSBzdGF0ZSBhZnRlciBzYXZlOlwiLCBnYW1lU3RhdGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkU2tpcHBlZFR1cm5Ub0dhbWVTdGF0ZSgpIHtcbiAgLy8gU2F2ZSBhIG51bGwgZ3Vlc3MgdG8gcmVwcmVzZW50IGEgc2tpcHBlZCB0dXJuXG4gIGdhbWVTdGF0ZS5ndWVzc2VzLnB1c2gobnVsbCk7XG5cbiAgLy8gU2F2ZSB0byBsb2NhbCBzdG9yYWdlXG4gIHNhdmVHYW1lU3RhdGUoZ2FtZVN0YXRlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoYXJlUmVzdWx0KCkge1xuXG4gIC8vIEZpbGwgd2l0aCBza2lwcyBpZiB0aGUgbGVuZ3RoIGlzIGxlc3MgdGhhbiA2XG4gIHdoaWxlIChnYW1lU3RhdGUuZ3Vlc3Nlcy5sZW5ndGggPCA2KSB7XG4gICAgZ2FtZVN0YXRlLmd1ZXNzZXMucHVzaChudWxsKVxuICB9XG5cbiAgbGV0IGdhbWVHdWVzc2VzRXhwb3J0ID0gXCJcIjtcblxuICBnYW1lU3RhdGUuZ3Vlc3Nlcy5mb3JFYWNoKGd1ZXNzID0+IHtcbiAgICAgIGlmKGd1ZXNzID09PSBudWxsKSB7XG4gICAgICAgICAgZ2FtZUd1ZXNzZXNFeHBvcnQgKz0gXCLirJsgXCI7IC8vIGdyZXkgY2lyY2xlIGZvciBza2lwcGVkIGd1ZXNzXG4gICAgICAgIH0gZWxzZSBpZihndWVzcy5zdGF0dXMgPT09IFwiY29ycmVjdFwiKSB7XG4gICAgICAgICAgZ2FtZUd1ZXNzZXNFeHBvcnQgKz0gXCLwn5+pIFwiOyAvLyBncmVlbiBzcXVhcmUgZm9yIGNvcnJlY3QgZ3Vlc3NcbiAgICAgICAgfSBlbHNlIGlmKGd1ZXNzLnN0YXR1cyA9PT0gXCJzZW1pY29ycmVjdFwiKSB7XG4gICAgICAgICAgZ2FtZUd1ZXNzZXNFeHBvcnQgKz0gXCLwn5+oIFwiOyAvLyB5ZWxsb3cgc3F1YXJlIGZvciBjb3JyZWN0IGd1ZXNzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdhbWVHdWVzc2VzRXhwb3J0ICs9IFwi8J+fpSBcIjsgLy8gcmVkIHNxdWFyZSBmb3Igd3JvbmcgZ3Vlc3NcbiAgICAgIH1cbiAgfSlcblxuICAvLyBDYWxjdWxhdGUgdGhlIG51bWJlciBvZiBkYXlzIHBhc3NlZCBzaW5jZSB0aGUgc3RhcnQgZGF0ZVxuICBsZXQgZGF5c1Bhc3NlZCA9IGdldEN1cnJlbnREYXkoKTtcblxuICAvLyBDb21wb3NlIHNoYXJlIHN0cmluZ1xuICBsZXQgc2hhcmVTdHJpbmcgPSBcIlNoZWFyZGxlIFwiXG4gIHNoYXJlU3RyaW5nICs9ICcjJ1xuICBzaGFyZVN0cmluZyArPSBkYXlzUGFzc2VkIFxuICBzaGFyZVN0cmluZyArPSBcIlxcblwiO1xuICBzaGFyZVN0cmluZyArPSAn8J+UiiAnO1xuICBzaGFyZVN0cmluZyArPSBnYW1lR3Vlc3Nlc0V4cG9ydDtcbiAgc2hhcmVTdHJpbmcgKz0gXCJcXG5cXG5cIlxuICBzaGFyZVN0cmluZyArPSB3aW5kb3cubG9jYXRpb24gXG5cbiAgcmV0dXJuIHNoYXJlU3RyaW5nO1xufVxuIiwiaW1wb3J0IFNwb3RpZnlUb2tlbk1hbmFnZXIgZnJvbSAnLi9zcG90aWZ5VG9rZW5NYW5hZ2VyLmpzJztcblxuY29uc3QgY2xpZW50SWQgPSBcIjc0YWM5NDljYTU4NzQwMjQ4NGRjZWYxNDA4YjRkN2YzXCI7XG5jb25zdCBjbGllbnRTZWNyZXQgPSBcIjMxM2EyYzE1ZmM4NDRjYTViYzIyNzU1NTcyODc0ZWU3XCI7XG5cbi8vIGNvbnN0IGNsaWVudElkID0gcHJvY2Vzcy5lbnYuU1BPVElGWV9DTElFTlRfSUQ7XG4vLyBjb25zdCBjbGllbnRTZWNyZXQgPSBwcm9jZXNzLmVudi5TUE9USUZZX0NMSUVOVF9TRUNSRVQ7XG5cbmNvbnN0IHRva2VuTWFuYWdlciA9IG5ldyBTcG90aWZ5VG9rZW5NYW5hZ2VyKGNsaWVudElkLCBjbGllbnRTZWNyZXQpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoVHJhY2soc2VhcmNoVGVybSwgbWFya2V0ID0gJ0dCJykge1xuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gYXdhaXQgdG9rZW5NYW5hZ2VyLmdldEFjY2Vzc1Rva2VuKCk7XG5cbiAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcbiAgICB9O1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gc2VhcmNoKHNlYXJjaFRlcm0pIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgICAgICBxOiBzZWFyY2hUZXJtLFxuICAgICAgICAgICAgdHlwZTogJ3RyYWNrJyxcbiAgICAgICAgICAgIGxpbWl0OiAxMCxcbiAgICAgICAgICAgIG1hcmtldFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9zZWFyY2g/JHtwYXJhbXN9YCwge1xuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEudHJhY2tzLml0ZW1zO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiBhd2FpdCBzZWFyY2goc2VhcmNoVGVybSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUcmFja0J5SUQodHJhY2tJRCwgbWFya2V0ID0gJ0dCJykge1xuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gYXdhaXQgdG9rZW5NYW5hZ2VyLmdldEFjY2Vzc1Rva2VuKCk7XG4gIFxuICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcbiAgICB9O1xuICBcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS90cmFja3MvJHt0cmFja0lEfT9tYXJrZXQ9JHttYXJrZXR9YCwge1xuICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICB9KTtcbiAgXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH1cbiAgXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFRyYWNrSURzQnlTZWFyY2hRdWVyeShzZWFyY2hRdWVyeSkge1xuICBjb25zdCBzZWFyY2hSZXN1bHRzID0gYXdhaXQgc2VhcmNoVHJhY2soc2VhcmNoUXVlcnkpO1xuICBjb25zdCB0cmFja0lEcyA9IHNlYXJjaFJlc3VsdHMubWFwKHRyYWNrID0+IHRyYWNrLmlkKTtcblxuICByZXR1cm4gdHJhY2tJRHM7XG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwb3RpZnlUb2tlbk1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNsaWVudElkLCBjbGllbnRTZWNyZXQpIHtcbiAgICAgIHRoaXMuY2xpZW50SWQgPSBjbGllbnRJZDtcbiAgICAgIHRoaXMuY2xpZW50U2VjcmV0ID0gY2xpZW50U2VjcmV0O1xuICAgICAgdGhpcy5hY2Nlc3NUb2tlbiA9IG51bGw7XG4gICAgICB0aGlzLmV4cGlyYXRpb25UaW1lID0gbnVsbDtcbiAgICB9XG4gIFxuICAgIGFzeW5jIHJlcXVlc3RBY2Nlc3NUb2tlbihjbGllbnRJZCwgY2xpZW50U2VjcmV0KSB7XG4gICAgICBjb25zdCB0b2tlbkVuZHBvaW50ID0gXCJodHRwczovL2FjY291bnRzLnNwb3RpZnkuY29tL2FwaS90b2tlblwiO1xuICAgICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICAgIH07XG4gICAgICBjb25zdCBib2R5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgIGdyYW50X3R5cGU6IFwiY2xpZW50X2NyZWRlbnRpYWxzXCIsXG4gICAgICAgIGNsaWVudF9pZDogY2xpZW50SWQsXG4gICAgICAgIGNsaWVudF9zZWNyZXQ6IGNsaWVudFNlY3JldCxcbiAgICAgIH0pO1xuICBcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godG9rZW5FbmRwb2ludCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICBib2R5OiBib2R5LFxuICAgICAgfSk7XG4gIFxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhLmFjY2Vzc190b2tlbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBvYnRhaW4gYWNjZXNzIHRva2VuXCIpO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgYXN5bmMgZ2V0QWNjZXNzVG9rZW4oKSB7XG4gICAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgaWYgKCF0aGlzLmFjY2Vzc1Rva2VuIHx8IGN1cnJlbnRUaW1lID49IHRoaXMuZXhwaXJhdGlvblRpbWUpIHtcbiAgICAgICAgdGhpcy5hY2Nlc3NUb2tlbiA9IGF3YWl0IHRoaXMucmVxdWVzdEFjY2Vzc1Rva2VuKHRoaXMuY2xpZW50SWQsIHRoaXMuY2xpZW50U2VjcmV0KTtcbiAgICAgICAgY29uc3QgZXhwaXJlc0luTWlsbGlzZWNvbmRzID0gMzYwMCAqIDEwMDA7IC8vIDEgaG91ciBpbiBtaWxsaXNlY29uZHNcbiAgICAgICAgdGhpcy5leHBpcmF0aW9uVGltZSA9IGN1cnJlbnRUaW1lICsgZXhwaXJlc0luTWlsbGlzZWNvbmRzO1xuICAgICAgfVxuICBcbiAgICAgIHJldHVybiB0aGlzLmFjY2Vzc1Rva2VuO1xuICAgIH1cbiAgfSIsImNvbnN0IFNUQVJUX0RBVEUgPSBuZXcgRGF0ZSgnMjAyMy0wNS0yMycpO1xuXG5jb25zdCB0cmFja1NlbGVjdGlvbiA9IFtcbic3RndCdGNlY21scGMxc0x5U1BYZUdFJyxcbicyV2ZhT2lNa0N2eTdGNWZjcDJ6WjhMJyxcbicwN2o1UkxKSHdzbTRjVWIzR0dvVzN3JyxcbicyMnNMdUpZY3ZaT1NvTExSWWV2MXM1JyxcbiczQm92ZHpmYVg0amI1S0ZRd29QZkF3Jyxcbic3SjF1eHdueGZRTHU0QVBpY0U1Um5qJyxcbicyZGxFZERFbXVRc3JjWGFBTDNabnppJyxcbic2MkxKRmFZaWhzZFZycmtnVU9KQzA1JyxcbicwSEVtbkFVVDhQSHpuSUFBbVZYcUZKJyxcbiczNHg2aEVKZ0dBT1F2bWxNcWw1SWdlJyxcbiczQ1NwemtvTDFYZ0RCWjFxOWFEQ1VWJyxcbicyOG84bTFvOVJHdHlTYm1RSnRBdnltJyxcbicxS3NJOE5FZUFuYThaSWRvakkzRmlUJyxcbicyb2xWbTFsSGljcHZlTUFvNEFVRFJCJyxcbiczOWxTZXFueWpaSmVqUnVhUkVmeUxMJyxcbic1UEpCcndLSDdTZEJ5R3REQ0JHSndiJyxcbic0NGhPR2cxdUZnMVhKWkdaWU53WW1NJyxcbic0YUtJczV0OVRxUDU5YnRsQ0dQcmd3JyxcbicwQTRQWnVlcFRjSVFWdkE1bTdSME0xJyxcbic3Zzd0eWI4ek05VWVLc2R2b3NXOVczJyxcbic0bzlLajdvbmtsdDZ4YllsM2pWQXJwJyxcbicwYkJWUnNCYmduelc4d21kbEQ3QXBxJyxcbic1ZTFlblQwTlBYUFprUjhGM1I1OGJZJyxcbic1SWtkaDkxRGRFcTQ0Y2ZwSUtSc0x3JyxcbicyWDI0MkQ4VmhUaWtXVVQxaTFuWUpDJyxcbicyVEFmR2lyTkplMHFVT2VSbVdzU3lrJyxcbiczbXZLdmllckZBVkdDZGdkeDRFTjRRJyxcbic2SFo2N1ZJbXhxcjhhTUJFRWhibHpmJyxcbic2Z2xzTVdJTUl4UTRCZWR6THFHVmk0JyxcbiczTEk0TW1pYlRrWEg1Y0dwQ0daZ3l3Jyxcbic2blRpSWhMbVEzRldodnJHYWZ3MnpqJyxcbiczZDlEQ2hyZGM2Qk9lRnNiclozSXMwJyxcbic0T2VCWmxFYUxXeUpXYVlsNFV2aFQ5Jyxcbic1VEdZbzRNck5LcUl2SnFneDEzNHB5Jyxcbic0M2VCZ1lSVG11NUJKbkNKREJVNUhiJyxcbic2STRzbkxyVk9ySnNMZGQ0M2lzYzI3Jyxcbic0c3oxTmcyQ2dpZGZxcWl5MHBOTDZSJyxcbic1NFg3OGRpU0xvVURJM2pvQzJiak16JyxcbicwUWVJNzlzcDF2UzhMM0pncEVPN21EJyxcbic3N05OWlFTcXpMTnFoMkE5SmhMUmtnJ107XG5cbi8vIC8vIEluIHRoaXMgZnVuY3Rpb24sIEknbSBnb2luZyB0byBzZXQgdXAgYSBcInN0YXJ0IGRhdGVcIiBmb3IgdGhlIGFwcC5cbi8vIC8vIEknbGwgYmFzZSB3aGljaCB0cmFjayBpcyB0aGUgdHJhY2sgb2YgdGhlIGRheSBmcm9tIHRoZSBkaXN0YW5jZSBpbiB0aW1lIGZyb20gdGhpcyBkYXRlXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnREYXkoKSB7XG4gICAgLy8gR2V0IHRoZSBjdXJyZW50IGRhdGUgaW4gbG9jYWwgdGltZVxuICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgXG4gICAgLy8gU2V0IGJvdGggZGF0ZXMgdG8gbWlkbmlnaHQgKHN0YXJ0IG9mIHRoZSBkYXkpIGluIGxvY2FsIHRpbWVcbiAgICBsZXQgc3RhcnREYXRlID0gbmV3IERhdGUobmV3IERhdGUoU1RBUlRfREFURSkuc2V0SG91cnMoMCwwLDAsMCkpO1xuICAgIGN1cnJlbnREYXRlID0gbmV3IERhdGUoY3VycmVudERhdGUuc2V0SG91cnMoMCwwLDAsMCkpO1xuICBcbiAgICAvLyBDb252ZXJ0IGJvdGggZGF0ZXMgdG8gbWlsbGlzZWNvbmRzXG4gICAgbGV0IHN0YXJ0RGF0ZVRpbWUgPSBzdGFydERhdGUuZ2V0VGltZSgpO1xuICAgIGxldCBjdXJyZW50RGF0ZVRpbWUgPSBjdXJyZW50RGF0ZS5nZXRUaW1lKCk7XG4gIFxuICAgIC8vIENhbGN1bGF0ZSB0aGUgZGlmZmVyZW5jZSBpbiBtaWxsaXNlY29uZHNcbiAgICBsZXQgZGlmZmVyZW5jZUluVGltZSA9IGN1cnJlbnREYXRlVGltZSAtIHN0YXJ0RGF0ZVRpbWU7XG4gIFxuICAgIC8vIENvbnZlcnQgdGhlIGRpZmZlcmVuY2UgaW4gbWlsbGlzZWNvbmRzIHRvIGRheXNcbiAgICBsZXQgZGlmZmVyZW5jZUluRGF5cyA9IE1hdGguZmxvb3IoZGlmZmVyZW5jZUluVGltZSAvICgxMDAwICogMzYwMCAqIDI0KSk7XG4gIFxuICAgIHJldHVybiBkaWZmZXJlbmNlSW5EYXlzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9kYXlzVHJhY2tJRCgpIHtcbiAgICByZXR1cm4gdHJhY2tTZWxlY3Rpb25bZ2V0Q3VycmVudERheSgpXTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlcy5jc3MnXG5cbmltcG9ydCB7IHNldHVwTmV3R2FtZSwgaW1wb3J0R2FtZVN0YXRlIH0gZnJvbSAnLi9zaGVhcmRsZSc7XG5pbXBvcnQgeyBsb2FkR2FtZVN0YXRlLCBJc1JldHVybmluZ1BsYXllciwgc2V0UGxheWVkQmVmb3JlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuXG5pbXBvcnQgeyBpbml0VUkgfSBmcm9tICcuL1VJJztcblxuaW1wb3J0IHsgZ2V0Q3VycmVudERheSwgZ2V0VG9kYXlzVHJhY2tJRCB9IGZyb20gJy4vdHJhY2tTZWxlY3Rpb24nO1xuXG5pbXBvcnQgJy4vaG93VG9QbGF5JztcbmltcG9ydCAnLi9jcmVhdGVTaGVhcmRsZSc7XG5cbmNvbnNvbGUubG9nKFwiQ3VycmVudCBkYXkgaXNcIiwgZ2V0Q3VycmVudERheSgpLCBcImRheShzKSBwYXN0IHRoZSBzdGFydCBkYXRlXCIpO1xuXG5jb25zdCBnYW1lTG9hZGVkID0gbG9hZEdhbWVTdGF0ZSgpO1xuXG5pZiAoZ2FtZUxvYWRlZCkge1xuXG4gICAgc2V0UGxheWVkQmVmb3JlKCk7XG5cbiAgICBjb25zdCB0b2RheXNUcmFja0lEID0gZ2V0VG9kYXlzVHJhY2tJRCgpO1xuXG4gICAgaWYgKGdhbWVMb2FkZWQudHJhY2tJRCAhPT0gdG9kYXlzVHJhY2tJRCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlN0YXJ0aW5nIG5ldyBnYW1lIGR1ZSB0byBkYXkgY2hhbmdlXCIpO1xuICAgICAgICBzZXR1cE5ld0dhbWUoKTtcbiAgICAgICAgaW5pdFVJKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJHYW1lIHN1Y2Nlc3NmdWxseSBsb2FkZWRcIik7XG4gICAgICAgIGltcG9ydEdhbWVTdGF0ZShnYW1lTG9hZGVkKTtcbiAgICAgICAgaW5pdFVJKGdhbWVMb2FkZWQpO1xuICAgIH1cbn0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJTdGFydGluZyBuZXcgZ2FtZVwiKTtcbiAgICBzZXR1cE5ld0dhbWUoKTtcbiAgICBpbml0VUkoKTtcbn1cblxuLy8gU2hvdyB0aGUgSG93IFRvIFBsYXkgc2NyZWVuIGlmIHRoZSB1c2VyIGlzIHBsYXlpbmcgdGhlIGZpcnN0IHRpbWVcbmNvbnN0IHJldHVybmluZ1BsYXllciA9IElzUmV0dXJuaW5nUGxheWVyKCk7XG5cbmNvbnNvbGUubG9nKFwiUmV0dXJuaW5nIHBsYXkwcj86XCIsIHJldHVybmluZ1BsYXllcik7XG5cbmlmIChyZXR1cm5pbmdQbGF5ZXIpIHtcbiAgICBjb25zdCBob3dUb1BsYXlNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3dUb1BsYXlNb2RhbCcpO1xuICAgIGhvd1RvUGxheU1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59IGVsc2Uge1xuICAgIC8vIFNldCB0aGUgZmxhZyBzbyB0aGF0IGl0IGRvZXNuJ3Qgc2hvdyBuZXh0IHRpbWVcbiAgICBzZXRQbGF5ZWRCZWZvcmUoKTtcbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9