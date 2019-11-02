(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "1d1B":
/*!**********************************!*\
  !*** ./src/main/config/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "JbmT");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


var _default = {
  MAIN: _main__WEBPACK_IMPORTED_MODULE_0__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/retina/Projects/Side/base-frontend/src/main/config/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "5ZpN":
/*!***************************!*\
  !*** ./src/main/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var raf_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raf/polyfill */ "DpIS");
/* harmony import */ var raf_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(raf_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-polyfill */ "201c");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "/MKj");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "eO8H");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~store/configureStore */ "nJYq");
/* harmony import */ var _helpers_registerServiceWorker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~helpers/registerServiceWorker */ "L9JD");
/* harmony import */ var _scss_global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scss/global */ "lU+q");
/* harmony import */ var _scss_global__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scss_global__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_App__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app/App */ "iN1+");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../package.json */ "kiQV");
var _package_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "kiQV", 1);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};












console.log("%c".concat(_package_json__WEBPACK_IMPORTED_MODULE_10__.author.name, " version: ").concat(_package_json__WEBPACK_IMPORTED_MODULE_10__.version), 'background-color: #343E48; color: #90BC47; padding: 5px 10px');
var store = Object(_store_configureStore__WEBPACK_IMPORTED_MODULE_6__["default"])();

var renderApp = function renderApp() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    store: store
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_app_App__WEBPACK_IMPORTED_MODULE_9__["default"], null)));
};

react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render(renderApp(), document.getElementById('app'));
/* Add a service worker for Progressive Web App purposes */

Object(_helpers_registerServiceWorker__WEBPACK_IMPORTED_MODULE_7__["default"])();
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(store, "store", "/Users/retina/Projects/Side/base-frontend/src/main/index.js");
  reactHotLoader.register(renderApp, "renderApp", "/Users/retina/Projects/Side/base-frontend/src/main/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "7Ezn":
/*!*************************************************!*\
  !*** ./src/main/lib/components/AjaxLoading.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loaders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loaders */ "Pndf");
/* harmony import */ var react_loaders__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loaders__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_block_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-block-ui */ "ZDeB");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "/MKj");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var defaultProps = {
  ajaxLoading: true
};

var AjaxLoading = function AjaxLoading(_ref) {
  var ajaxLoading = _ref.ajaxLoading;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_block_ui__WEBPACK_IMPORTED_MODULE_2__["default"], {
    tag: "main",
    blocking: ajaxLoading,
    loader: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loaders__WEBPACK_IMPORTED_MODULE_1___default.a, {
      active: true,
      type: "ball-beat",
      color: "#90BC47"
    })
  });
};

AjaxLoading.defaultProps = defaultProps;

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    ajaxLoading: state.ajaxLoading
  };
};

var mapDispatchToProps = function mapDispatchToProps() {
  return {};
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(AjaxLoading);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(defaultProps, "defaultProps", "/Users/retina/Projects/Side/base-frontend/src/main/lib/components/AjaxLoading.jsx");
  reactHotLoader.register(AjaxLoading, "AjaxLoading", "/Users/retina/Projects/Side/base-frontend/src/main/lib/components/AjaxLoading.jsx");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/Users/retina/Projects/Side/base-frontend/src/main/lib/components/AjaxLoading.jsx");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/Users/retina/Projects/Side/base-frontend/src/main/lib/components/AjaxLoading.jsx");
  reactHotLoader.register(_default, "default", "/Users/retina/Projects/Side/base-frontend/src/main/lib/components/AjaxLoading.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "FCSx":
/*!***********************************!*\
  !*** ./src/main/config/routes.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var _default = {
  home: {
    name: 'home',
    uri: '/'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/retina/Projects/Side/base-frontend/src/main/config/routes.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "JbmT":
/*!*********************************!*\
  !*** ./src/main/config/main.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "WXY3");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


var _default = {
  APP: _app__WEBPACK_IMPORTED_MODULE_0__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/retina/Projects/Side/base-frontend/src/main/config/main.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "L9JD":
/*!*******************************************************!*\
  !*** ./src/main/lib/helpers/registerServiceWorker.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/* [::1] is the IPv6 localhost address. 127.0.0.1/8 is considered localhost for IPv4. */
var isLocalhost = Boolean(window.location.hostname === 'localhost' || window.location.hostname === '[::1]' || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
/* eslint-disable no-console */

function registerValidSW(swUrl) {
  navigator.serviceWorker.register(swUrl).then(function (response) {
    var registration = response;

    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            /**
             * At this point, the old content will have been purged and
             * the fresh content will have been added to the cache.
             * It's the perfect time to display a "New content is
             * available; please refresh." message in your web app.
             */
          } else {
              /**
               * At this point, everything has been precached.
               * It's the perfect time to display a "Content is cached for offline use." message.
               */
            }
        }
      };
    };
  })["catch"](function (error) {
    return console.error('Error during service worker registration: ', error);
  });
}

function checkValidServiceWorker(swUrl) {
  /* Check if the service worker can be found. If it can't, reload the page. */
  fetch(swUrl).then(function (response) {
    /* Ensure service worker exists, and that we really are getting a JS file. */
    if (response.status === 404 || response.headers.get('content-type').indexOf('javascript') === -1) {
      /* No service worker found. Probably a different app. Reload the page. */
      navigator.serviceWorker.ready.then(function (registration) {
        return registration.unregister().then(function () {
          return window.location.reload();
        });
      });
    } else {
      /* Service worker found. Proceed as normal. */
      registerValidSW(swUrl);
    }
  })["catch"](function (error) {
    return console.error('No internet connection found. Scheduler is running in offline mode. ', error);
  });
}

var unregister = function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      return registration.unregister();
    });
  }
};

var register = function register() {
  if (false) {} else {
    console.warn('Cannot register service workers in development mode.');
  }
};

var _default = register;
/* harmony default export */ __webpack_exports__["default"] = (_default);
/* eslint-enable no-console */

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(isLocalhost, "isLocalhost", "/Users/retina/Projects/Side/base-frontend/src/main/lib/helpers/registerServiceWorker.js");
  reactHotLoader.register(registerValidSW, "registerValidSW", "/Users/retina/Projects/Side/base-frontend/src/main/lib/helpers/registerServiceWorker.js");
  reactHotLoader.register(checkValidServiceWorker, "checkValidServiceWorker", "/Users/retina/Projects/Side/base-frontend/src/main/lib/helpers/registerServiceWorker.js");
  reactHotLoader.register(unregister, "unregister", "/Users/retina/Projects/Side/base-frontend/src/main/lib/helpers/registerServiceWorker.js");
  reactHotLoader.register(register, "register", "/Users/retina/Projects/Side/base-frontend/src/main/lib/helpers/registerServiceWorker.js");
  reactHotLoader.register(_default, "default", "/Users/retina/Projects/Side/base-frontend/src/main/lib/helpers/registerServiceWorker.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "LoCn":
/*!***********************************!*\
  !*** ./src/main/app/Home/Home.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "home");
};

var _default = Home;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Home, "Home", "/Users/retina/Projects/Side/base-frontend/src/main/app/Home/Home.js");
  reactHotLoader.register(_default, "default", "/Users/retina/Projects/Side/base-frontend/src/main/app/Home/Home.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "WXY3":
/*!********************************!*\
  !*** ./src/main/config/app.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ "FCSx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


var _default = {
  ROUTES: _routes__WEBPACK_IMPORTED_MODULE_0__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/retina/Projects/Side/base-frontend/src/main/config/app.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "au9W":
/*!***************************************************!*\
  !*** ./src/main/lib/components/ErrorBoundary.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


var defaultProps = {
  children: null
};

var ErrorBoundary =
/*#__PURE__*/
function (_Component) {
  _inherits(ErrorBoundary, _Component);

  function ErrorBoundary(props) {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ErrorBoundary).call(this, props));

    _this.getInitialState = function () {
      return {
        error: null,
        errorInfo: null
      };
    };

    _this.componentDidCatch = function (error, errorInfo) {
      return _this.setState({
        error: error,
        errorInfo: errorInfo
      });
    };

    _this.render = function () {
      if (_this.state.errorInfo) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "error");
      }
      /* No issues so just render the children */


      return _this.props.children;
    };

    _this.state = _this.getInitialState();
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ErrorBoundary.defaultProps = defaultProps;
var _default = ErrorBoundary;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(defaultProps, "defaultProps", "/Users/retina/Projects/Side/base-frontend/src/main/lib/components/ErrorBoundary.jsx");
  reactHotLoader.register(ErrorBoundary, "ErrorBoundary", "/Users/retina/Projects/Side/base-frontend/src/main/lib/components/ErrorBoundary.jsx");
  reactHotLoader.register(_default, "default", "/Users/retina/Projects/Side/base-frontend/src/main/lib/components/ErrorBoundary.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "iN1+":
/*!*****************************!*\
  !*** ./src/main/app/App.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "eO8H");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "838P");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~config */ "1d1B");
/* harmony import */ var _components_AjaxLoading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~components/AjaxLoading */ "7Ezn");
/* harmony import */ var _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~components/ErrorBoundary */ "au9W");
/* harmony import */ var _Home_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Home/Home */ "LoCn");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};








var ROUTES = _config__WEBPACK_IMPORTED_MODULE_3__["default"].MAIN.APP.ROUTES;

var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    context: "router"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: ROUTES.home.url,
    component: _Home_Home__WEBPACK_IMPORTED_MODULE_6__["default"]
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AjaxLoading__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_2__["ToastContainer"], {
    className: "p-0",
    draggable: false,
    newestOnTop: true,
    transition: react_toastify__WEBPACK_IMPORTED_MODULE_2__["Slide"],
    hideProgressBar: true
  }));
};

var _default = App;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ROUTES, "ROUTES", "/Users/retina/Projects/Side/base-frontend/src/main/app/App.js");
  reactHotLoader.register(App, "App", "/Users/retina/Projects/Side/base-frontend/src/main/app/App.js");
  reactHotLoader.register(_default, "default", "/Users/retina/Projects/Side/base-frontend/src/main/app/App.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "jkkE":
/*!**********************************************!*\
  !*** ./src/main/redux/store/initialState.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var _default = {
  route: window.location.pathname
};
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/retina/Projects/Side/base-frontend/src/main/redux/store/initialState.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "kiQV":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, scripts, _moduleAliases, repository, keywords, author, license, devDependencies, dependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"base-frontend-minhluc\",\"version\":\"1.0.0\",\"description\":\"react client for nasa image demo project\",\"main\":\"dist/index.js\",\"scripts\":{\"preinstall\":\"command -v link-module-alias && link-module-alias clean || true\",\"postinstall\":\"link-module-alias\",\"build\":\"webpack --colors=true --progress=true --cache=false --display-error-details=true --mode=development\",\"dev\":\"webpack-dev-server --watch --open --hot=true --colors=true --progress=true --display-error-details=true --mode=development\",\"test\":\"jest\",\"deploy\":\"firebase deploy\",\"storybook\":\"start-storybook -p 6006\",\"build-storybook\":\"build-storybook\"},\"_moduleAliases\":{\"~root\":\".\",\"~components\":\"src/main/lib/components\",\"~config\":\"src/main/config\",\"~store\":\"src/main/redux/store\",\"~helpers\":\"src/main/lib/helpers\"},\"repository\":{\"type\":\"git\",\"url\":\"https://git.nfq.asia/FE.LucVanMinh/base-frontend.git\"},\"keywords\":[\"react\",\"pwa\",\"nasa\",\"images\",\"jest\",\"demo\",\"redux\"],\"author\":\"minhlucvan\",\"license\":\"ISC\",\"devDependencies\":{\"@babel/preset-flow\":\"^7.0.0\",\"@babel/preset-stage-2\":\"^7.0.0\",\"@storybook/addon-actions\":\"^5.2.5\",\"@storybook/addon-links\":\"^5.2.5\",\"@storybook/addons\":\"^5.2.5\",\"@storybook/react\":\"^5.2.5\",\"autoprefixer\":\"^9.7.0\",\"babel-core\":\"^6.26.3\",\"babel-engine-plugin\":\"^0.3.0\",\"babel-eslint\":\"^10.0.3\",\"babel-jest\":\"^24.9.0\",\"babel-loader\":\"^8.0.6\",\"babel-minify-webpack-plugin\":\"^0.3.1\",\"babel-plugin-transform-class-properties\":\"^6.24.1\",\"babel-preset-airbnb\":\"^4.1.0\",\"babel-preset-react\":\"^6.24.1\",\"babel-preset-stage-2\":\"^6.24.1\",\"clean-webpack-plugin\":\"^3.0.0\",\"copy-webpack-plugin\":\"^5.0.4\",\"css-hot-loader\":\"^1.4.4\",\"css-loader\":\"^3.2.0\",\"eslint\":\"^6.6.0\",\"eslint-config-airbnb\":\"^18.0.1\",\"eslint-loader\":\"^3.0.2\",\"eslint-plugin-import\":\"^2.18.2\",\"eslint-plugin-jsx-a11y\":\"^6.2.3\",\"eslint-plugin-react\":\"^7.16.0\",\"eslint-plugin-react-hooks\":\"^2.2.0\",\"exports-loader\":\"^0.7.0\",\"file-loader\":\"^4.2.0\",\"html-loader\":\"^0.5.5\",\"html-webpack-plugin\":\"^3.2.0\",\"imports-loader\":\"^0.8.0\",\"jest\":\"^24.9.0\",\"jest-cli\":\"^24.9.0\",\"jest-dom\":\"^4.0.0\",\"link-module-alias\":\"^1.2.0\",\"mini-css-extract-plugin\":\"^0.8.0\",\"node-sass\":\"^4.13.0\",\"optimize-css-assets-webpack-plugin\":\"^5.0.3\",\"postcss-loader\":\"^3.0.0\",\"precss\":\"^4.0.0\",\"react-test-renderer\":\"^16.11.0\",\"react-testing-library\":\"^8.0.1\",\"redux-mock-store\":\"^1.5.3\",\"sass-loader\":\"^8.0.0\",\"style-loader\":\"^1.0.0\",\"uglifyjs-webpack-plugin\":\"^2.2.0\",\"url-loader\":\"^2.2.0\",\"webpack\":\"^4.41.2\",\"webpack-bundle-analyzer\":\"^3.6.0\",\"webpack-cli\":\"^3.3.9\",\"webpack-dev-server\":\"^3.9.0\"},\"dependencies\":{\"axios\":\"^0.19.0\",\"babel-polyfill\":\"^6.26.0\",\"classlist-polyfill\":\"^1.2.0\",\"core-js\":\"^2.6.9\",\"critical\":\"^1.3.4\",\"element-closest\":\"^2.0.2\",\"enzyme\":\"^3.9.0\",\"enzyme-adapter-react-16\":\"^1.9.1\",\"font-awesome\":\"^4.7.0\",\"font-awesome-filetypes\":\"^1.2.0\",\"immutability-helper\":\"^3.0.0\",\"loaders.css\":\"^0.1.2\",\"lodash\":\"^4.17.14\",\"raf\":\"^3.4.1\",\"react\":\"^16.8.2\",\"react-addons-shallow-compare\":\"^15.6.2\",\"react-block-ui\":\"^1.1.3\",\"react-color\":\"^2.17.0\",\"react-confirm\":\"^0.1.18\",\"react-country-region-selector\":\"^1.4.3\",\"react-device-detect\":\"^1.6.2\",\"react-dom\":\"^16.8.2\",\"react-hot-loader\":\"^4.6.5\",\"react-image\":\"^1.5.1\",\"react-loaders\":\"^3.0.1\",\"react-redux\":\"^5.1.1\",\"react-router-dom\":\"^4.3.1\",\"react-sortablejs\":\"^1.5.1\",\"react-swipeable-views\":\"^0.13.1\",\"react-toastify\":\"^4.5.2\",\"redux\":\"^3.7.2\",\"redux-logger\":\"^3.0.6\",\"redux-thunk\":\"^2.3.0\"}}");

/***/ }),

/***/ "lU+q":
/*!***********************************!*\
  !*** ./src/main/scss/global.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "nJYq":
/*!************************************************!*\
  !*** ./src/main/redux/store/configureStore.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-thunk */ "sINF");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "fvjX");
/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initialState */ "jkkE");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


/* import { logger } from 'redux-logger'; */



var middlewares = [];
var reducers = [];
var combinedStates = Object.assign(_initialState__WEBPACK_IMPORTED_MODULE_2__["default"]);
middlewares.push(redux_thunk__WEBPACK_IMPORTED_MODULE_0__["default"]);
/*
if (process.env.NODE_ENV === 'development') {
	middlewares.push(reduxLogger);
}
*/

/* eslint-disable no-underscore-dangle */

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_1__["compose"];
/* eslint-enable no-underscore-dangle */

var configureStore = function configureStore() {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducers, combinedStates, composeEnhancers(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"].apply(void 0, middlewares)));
};

var _default = configureStore;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(middlewares, "middlewares", "/Users/retina/Projects/Side/base-frontend/src/main/redux/store/configureStore.js");
  reactHotLoader.register(reducers, "reducers", "/Users/retina/Projects/Side/base-frontend/src/main/redux/store/configureStore.js");
  reactHotLoader.register(combinedStates, "combinedStates", "/Users/retina/Projects/Side/base-frontend/src/main/redux/store/configureStore.js");
  reactHotLoader.register(composeEnhancers, "composeEnhancers", "/Users/retina/Projects/Side/base-frontend/src/main/redux/store/configureStore.js");
  reactHotLoader.register(configureStore, "configureStore", "/Users/retina/Projects/Side/base-frontend/src/main/redux/store/configureStore.js");
  reactHotLoader.register(_default, "default", "/Users/retina/Projects/Side/base-frontend/src/main/redux/store/configureStore.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ })

},[["5ZpN","runtime","vendors"]]]);
//# sourceMappingURL=main.bundle.js.map