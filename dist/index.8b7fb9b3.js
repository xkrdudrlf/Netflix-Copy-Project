// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cSv3F":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "21352e468b7fb9b3";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"3auaO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _app = require("./components/App");
var _appDefault = parcelHelpers.interopDefault(_app);
new _appDefault.default({
    parentElement: document.querySelector(".app")
});

},{"./components/App":"5LdSq","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5LdSq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _component = require("./Component/Component");
var _componentDefault = parcelHelpers.interopDefault(_component);
var _footer = require("./Footer/Footer");
var _footerDefault = parcelHelpers.interopDefault(_footer);
var _main = require("./Main/Main");
var _mainDefault = parcelHelpers.interopDefault(_main);
var _navbar = require("./Navbar/Navbar");
var _navbarDefault = parcelHelpers.interopDefault(_navbar);
class App extends _componentDefault.default {
    constructor(componentInfo){
        super(componentInfo);
        this.$currElement = this.$parentElement;
        this.render();
        this.addHandlerRoute();
    }
    render() {
        this.$currElement.innerHTML = "";
        if (window.location.pathname === "/") window.location.replace("/Home");
        const activeTab = decodeURI(location.pathname.split("/")[1]);
        new _navbarDefault.default({
            parentElement: this.$currElement,
            state: {
                activeTab
            }
        });
        new _mainDefault.default({
            parentElement: this.$currElement,
            state: {
                activeTab,
                content: activeTab === "tv" || activeTab === "movie" ? "details" : "lolomo"
            }
        });
        new _footerDefault.default({
            parentElement: this.$currElement
        });
    }
    addHandlerRoute() {
        [
            "urlchange",
            "popstate"
        ].forEach((event)=>{
            window.addEventListener(event, (e)=>{
                this.render();
            });
        });
    }
}
exports.default = App;

},{"./Component/Component":"gzPoJ","./Main/Main":"8qBKu","./Navbar/Navbar":"h3817","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./Footer/Footer":"6r1GA"}],"gzPoJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Component {
    $parentElement;
    $currElement;
    $state;
    constructor({ parentElement , state ={
    }  }){
        this.$parentElement = parentElement;
        this.$state = state;
    }
}
exports.default = Component;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"8qBKu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _component = require("../Component/Component");
var _componentDefault = parcelHelpers.interopDefault(_component);
var _lolomo = require("../Lolomo/Lolomo");
var _lolomoDefault = parcelHelpers.interopDefault(_lolomo);
var _details = require("../Details/Details");
var _detailsDefault = parcelHelpers.interopDefault(_details);
class Main extends _componentDefault.default {
    constructor(componentInfo){
        super(componentInfo);
        this.$currElement = document.createElement("main");
        this.$currElement.className = "main";
        this.render();
        this.addHandlerRenderDetails();
    }
    render(update = false) {
        this.$currElement.innerHTML = "";
        if (this.$state.content === "details") new _detailsDefault.default({
            parentElement: this.$currElement
        });
        else new _lolomoDefault.default({
            parentElement: this.$currElement,
            state: this.$state
        });
        if (!update) this.$parentElement.appendChild(this.$currElement);
    }
    addHandlerRenderDetails() {
        [
            "urlchange",
            "popstate"
        ].forEach((event)=>{
            this.$currElement.addEventListener(event, async (e)=>{
                this.$state.content = "details";
                this.render(true);
            });
        });
    }
}
exports.default = Main;

},{"../Component/Component":"gzPoJ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","../Lolomo/Lolomo":"1TdpI","../Details/Details":"kaH4g"}],"1TdpI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _component = require("../Component/Component");
var _componentDefault = parcelHelpers.interopDefault(_component);
var _lolomoRow = require("./LolomoRow");
var _lolomoRowDefault = parcelHelpers.interopDefault(_lolomoRow);
class Lolomo extends _componentDefault.default {
    constructor(componentInfo){
        super(componentInfo);
        this.$currElement = document.createElement("div");
        this.$currElement.className = "lolomo";
        this.render();
    }
    render() {
        this.$currElement.innerHTML = "";
        const [categories, genre] = this.getCategoriesAndGenre();
        categories.forEach((category)=>{
            new _lolomoRowDefault.default({
                parentElement: this.$currElement,
                state: {
                    genre,
                    category
                }
            });
        });
        this.$parentElement.appendChild(this.$currElement);
    }
    getCategoriesAndGenre() {
        let categories, genre;
        switch(this.$state.activeTab){
            case "Home":
                categories = [
                    "trend",
                    "popular",
                    "top_rated"
                ];
                genre = "all";
                break;
            case "TV Shows":
                categories = [
                    "trend",
                    "popular",
                    "top_rated"
                ];
                genre = "tv";
                break;
            case "Movies":
                categories = [
                    "trend",
                    "popular",
                    "top_rated",
                    "upcoming"
                ];
                genre = "movie";
                break;
            case "New & Popular":
                categories = [
                    "trend",
                    "popular",
                    "now_playing",
                    "upcoming"
                ];
                genre = "all";
                break;
            case "My List":
                break;
        }
        return [
            categories,
            genre
        ];
    }
}
exports.default = Lolomo;

},{"../Component/Component":"gzPoJ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./LolomoRow":"3yHpL"}],"3yHpL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../../utils");
var _carousel = require("../Carousel/Carousel");
var _carouselDefault = parcelHelpers.interopDefault(_carousel);
var _component = require("../Component/Component");
var _componentDefault = parcelHelpers.interopDefault(_component);
var _lolomoRowCarousel = require("./LolomoRowCarousel");
var _lolomoRowCarouselDefault = parcelHelpers.interopDefault(_lolomoRowCarousel);
var _lolomoRowHeader = require("./LolomoRowHeader");
var _lolomoRowHeaderDefault = parcelHelpers.interopDefault(_lolomoRowHeader);
class LolomoRow extends _componentDefault.default {
    $category;
    constructor(componentInfo){
        super(componentInfo);
        this.$currElement = document.createElement("section");
        this.$currElement.className = "lolomo__row";
        this.render();
    }
    render() {
        this.$currElement.innerHTML = "";
        new _lolomoRowHeaderDefault.default({
            parentElement: this.$currElement,
            state: {
                ...this.$state
            }
        });
        new _lolomoRowCarouselDefault.default({
            parentElement: this.$currElement,
            state: {
                ...this.$state
            }
        });
        this.$parentElement.appendChild(this.$currElement);
    }
}
exports.default = LolomoRow;

},{"../Component/Component":"gzPoJ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","../../utils":"fIYUT","../Carousel/Carousel":"goTYN","./LolomoRowCarousel":"29JFq","./LolomoRowHeader":"6wc11"}],"fIYUT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pushState", ()=>pushState
);
parcelHelpers.export(exports, "emitEvent", ()=>emitEvent
);
parcelHelpers.export(exports, "request", ()=>request
);
parcelHelpers.export(exports, "capitalizeFirstCharacter", ()=>capitalizeFirstCharacter
);
var _config = require("./config");
const pushState = (state, title, url, target, bubbles = true)=>{
    history.pushState(state, title, url);
    emitEvent("urlchange", target, bubbles);
};
const emitEvent = (eventName, target, bubbles)=>{
    const event = new Event(eventName, {
        bubbles
    });
    target.dispatchEvent(event);
};
const request = async (url, options = {
})=>{
    try {
        const fullURL = `${_config.THE_MOVIE_DB_URL}${url}?api_key=${_config.THE_MOVIE_DB_API_KEY}&language=en-US&page=1#`;
        const response = await fetch(fullURL, options);
        if (!response.ok) throw new Error(`ERROR ${response.status}: API Request failed`);
        const json = await response.json();
        return json;
    } catch (e) {
        console.log(e.message);
    }
};
const capitalizeFirstCharacter = (str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
};

},{"./config":"6V52N","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6V52N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "THE_MOVIE_DB_URL", ()=>THE_MOVIE_DB_URL
);
parcelHelpers.export(exports, "THE_MOVIE_DB_API_KEY", ()=>THE_MOVIE_DB_API_KEY
);
parcelHelpers.export(exports, "THE_MOVIE_DB_IMAGE_URL", ()=>THE_MOVIE_DB_IMAGE_URL
);
parcelHelpers.export(exports, "SLIDE_WIDTH_WITH_MARGIN", ()=>SLIDE_WIDTH_WITH_MARGIN
);
parcelHelpers.export(exports, "GENRE_HASHTABLE", ()=>GENRE_HASHTABLE
);
const THE_MOVIE_DB_URL = "https://api.themoviedb.org/3";
const THE_MOVIE_DB_API_KEY = "de088b40ef657d3aadc907af18e76ae1";
const THE_MOVIE_DB_IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const SLIDE_WIDTH_WITH_MARGIN = 230;
const GENRE_HASHTABLE = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    10759: "Action & Adventure",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    10762: "Kids",
    10763: "News",
    10764: "Reality",
    10765: "Sci-Fi & Fantasy",
    10766: "Soap",
    10767: "Talk",
    10768: "War & Politics",
    37: "Western"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"goTYN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _config = require("../../config");
var _utils = require("../../utils");
var _component = require("../Component/Component");
var _componentDefault = parcelHelpers.interopDefault(_component);
var _carouselButton = require("./CarouselButton");
var _carouselButtonDefault = parcelHelpers.interopDefault(_carouselButton);
var _carouselSlide = require("./CarouselSlide");
var _carouselSlideDefault = parcelHelpers.interopDefault(_carouselSlide);
var _carouselTrack = require("./CarouselTrack");
var _carouselTrackDefault = parcelHelpers.interopDefault(_carouselTrack);
class Carousel extends _componentDefault.default {
    constructor(componentInfo){
        super(componentInfo);
        this.$currElement = document.createElement("div");
        this.$currElement.className = `${this.$state.className}`;
        this.render();
        this.addHandlerCarouselButtonClick();
        this.addHandlerCarouselSlideHover();
        this.addHandlerCarouselSlideClick();
    }
    render() {
        this.$currElement.innerHTML = "";
        new _carouselButtonDefault.default({
            parentElement: this.$currElement,
            state: {
                direction: "left"
            }
        });
        new _carouselButtonDefault.default({
            parentElement: this.$currElement,
            state: {
                direction: "right"
            }
        });
        new _carouselTrackDefault.default({
            parentElement: this.$currElement,
            state: {
                slidesData: this.$state.slidesData
            }
        });
        this.$parentElement.appendChild(this.$currElement);
    }
    addHandlerCarouselButtonClick() {
        this.$currElement.addEventListener("click", (e)=>{
            const carouselBtn = e.target.closest(".carousel__button");
            if (!carouselBtn) return;
            if (carouselBtn.classList.contains("carousel__button--left")) this.moveSlides("left");
            else this.moveSlides("right");
        });
    }
    addHandlerCarouselSlideHover() {
        this.$currElement.addEventListener("mouseover", (e)=>{
            const currSlide = e.target.closest(".carousel__slide");
            if (!currSlide) return;
            const slideModal = currSlide.querySelector(".carousel__slide__modal");
            slideModal.style.visibility = "visible";
            slideModal.style.opacity = 1;
            slideModal.style.top = "-50px";
        });
        this.$currElement.addEventListener("mouseout", (e)=>{
            const currSlide = e.target.closest(".carousel__slide");
            if (!currSlide) return;
            const slideModal = currSlide.querySelector(".carousel__slide__modal");
            slideModal.style.visibility = "hidden";
            slideModal.style.opacity = 0;
            slideModal.style.top = "0";
        });
    }
    addHandlerCarouselSlideClick() {
        this.$currElement.addEventListener("click", async (e)=>{
            const currSlide = e.target.closest(".carousel__slide");
            if (!currSlide) return;
            // Change URL
            const nextURL = `/${currSlide.dataset.genre}/${currSlide.dataset.id}`;
            const nextTitle = `${_utils.capitalizeFirstCharacter(currSlide.dataset.genre)} details - Netflix`;
            const nextState = {
                additionalInformation: "Updated the URL with JS"
            };
            const target = document.querySelector(".main");
            _utils.pushState(nextState, nextTitle, nextURL, target, false);
            // Turn off the active status of current ActiveTab
            _utils.emitEvent("turnoffActiveTab", document.querySelector(".navbar"), false);
        });
    }
    moveSlides(direction) {
        const slides = this.$currElement.querySelectorAll(".carousel__slide");
        const carouselWidth = this.$currElement.getBoundingClientRect().width;
        let moveWidth = _config.SLIDE_WIDTH_WITH_MARGIN * Math.floor(carouselWidth / _config.SLIDE_WIDTH_WITH_MARGIN);
        if (direction === "left") moveWidth *= -1;
        // Return immediately upon reaching the far-left or far-right
        if (direction === "left" && slides[slides.length - 1].getBoundingClientRect().right < this.$currElement.getBoundingClientRect().right) return;
        if (direction === "right" && slides[0].style.left.split("px")[0] == 0) return;
        // Move slides according to the given direction
        slides.forEach((slide)=>{
            const currWidth = slide.style.left.split("px")[0];
            slide.style.left = `${Number(currWidth) + Number(moveWidth)}px`;
        });
    }
}
exports.default = Carousel;

},{"../Component/Component":"gzPoJ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","../../config":"6V52N","./CarouselSlide":"kQ1A0","../../utils":"fIYUT","./CarouselButton":"6rQgR","./CarouselTrack":"4nuMK"}],"kQ1A0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _component = require("../Component/Component");
var _componentDefault = parcelHelpers.interopDefault(_component);
var _carouselSlideModal = require("./CarouselSlideModal");
var _carouselSlideModalDefault = parcelHelpers.interopDefault(_carouselSlideModal);
var _config = require("../../config");
class CarouselSlide extends _componentDefault.default {
    constructor(componentInfo){
        super(componentInfo);
        this.$currElement = document.createElement("li");
        this.$currElement.className = "carousel__slide";
        this.$currElement.setAttribute("data-id", this.$state.data.id);
        this.$currElement.setAttribute("data-genre", this.$state.data.genre);
        this.render();
    }
    render() {
        this.$currElement.innerHTML = "";
        new _carouselSlideModalDefault.default({
            parentElement: this.$currElement,
            state: this.$state
        });
        this.renderSlideImage();
        this.$parentElement.appendChild(this.$currElement);
    }
    renderSlideImage() {
        const slideImageMarkup = `
      <img
        class="carousel__image"
        src="${_config.THE_MOVIE_DB_IMAGE_URL}/${this.$state.data.slideImage}"
        alt="poster-img"
      />
    `;
        this.$currElement.insertAdjacentHTML("beforeend", slideImageMarkup);
    }
}
exports.default = CarouselSlide;

},{"../Component/Component":"gzPoJ","./CarouselSlideModal":"bJst9","../../config":"6V52N","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bJst9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _config = require("../../config");
var _component = require("../Component/Component");
var _componentDefault = parcelHelpers.interopDefault(_component);
class CarouselSlideModal extends _componentDefault.default {
    constructor(componenetInfo){
        super(componenetInfo);
        this.$currElement = document.createElement("div");
        this.$currElement.className = "carousel__slide__modal";
        this.render();
    }
    render() {
        this.$currElement.innerHTML = "";
        this.renderSlideModalImage();
        this.renderSlideModalBody();
        this.$parentElement.appendChild(this.$currElement);
    }
    renderSlideModalImage() {
        const modalImageMarkup = `
      <div class="carousel__slide__modal__image-container">
        <img
          class="carousel__slide__modal__image"
          src="${_config.THE_MOVIE_DB_IMAGE_URL}/${this.$state.data.slideImage}"
          alt="poster-img"
        />
      </div>
    `;
        this.$currElement.insertAdjacentHTML("beforeend", modalImageMarkup);
    }
    renderSlideModalBody() {
        const modalBodyMarkup = `
      <div class="carousel__slide__modal__body">
        ${this.$state.data.slideModalContentHTML}
      </div>
    `;
        this.$currElement.insertAdjacentHTML("beforeend", modalBodyMarkup);
    }
}
exports.default = CarouselSlideModal;

},{"../Component/Component":"gzPoJ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","../../config":"6V52N"}],"6rQgR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _component = require("../Component/Component");
var _componentDefault = parcelHelpers.interopDefault(_component);
class CarouselButton extends _componentDefault.default {
    constructor(componentInfo){
        super(componentInfo);
        this.$currElement = document.createElement("button");
        this.$currElement.className = `carousel__button carousel__button--${this.$state.direction}`;
        this.render();
    }
    render() {
        this.$currElement.innerHTML = "";
        const arrowIcon = document.createElement("i");
        arrowIcon.className = `fas fa-chevron-${this.$state.direction}`;
        this.$currElement.appendChild(arrowIcon);
        this.$parentElement.appendChild(this.$currElement);
    }
}
exports.default = CarouselButton;

},{"../Component/Component":"gzPoJ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4nuMK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _component = require("../Component/Component");
var _componentDefault = parcelHelpers.interopDefault(_component);
var _carouselSlide = require("./CarouselSlide");
var _carouselSlideDefault = parcelHelpers.interopDefault(_carouselSlide);
class CarouselTrack extends _componentDefault.default {
    constructor(componentInfo){
        super(componentInfo);
        this.$currElement = document.createElement("ul");
        this.$currElement.className = "carousel__track";
        this.render();
    }
    render() {
        this.$currElement.innerHTML = "";
        this.$state.slidesData.forEach((data)=>{
            new _carouselSlideDefault.default({
                parentElement: this.$currElement,
                state: {
                    data
                }
            });
        });
        this.$parentElement.appendChild(this.$currElement);
    }
}
exports.default = CarouselTrack;

},{"../Component/Component":"gzPoJ","./CarouselSlide":"kQ1A0","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"29JFq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../../utils");
var _config = require("../../config");
var _carousel = require("../Carousel/Carousel");
var _carouselDefault = parcelHelpers.interopDefault(_carousel);
var _component = require("../Component/Component");
var _componentDefault = parcelHelpers.interopDefault(_component);
class LolomoRowCarousel extends _componentDefault.default {
    constructor(componentInfo){
        super(componentInfo);
        this.render();
    }
    async render() {
        await this.prepareDataState();
        new _carouselDefault.default({
            parentElement: this.$parentElement,
            state: {
                className: "lolomo__row__carousel",
                slidesData: this.$state.slidesData
            }
        });
    }
    async prepareDataState() {
        this.$state.slidesData = [];
        const data = await this.fetchData();
        data.results.forEach((result)=>{
            if (result.backdrop_path) {
                const slideData = {
                    id: result.id,
                    genre: result.original_title ? "movie" : "tv",
                    slideImage: result.backdrop_path,
                    slideModalContentHTML: `
            <div class="title">
              ${result.original_title ?? result.original_name}  
            </div>
            <div class="rating">${result.adult ? "Adult" : "All"}</div>
            <ul class="genre-list">
              ${result.genre_ids.slice(0, 3).map((genreId)=>{
                        return `
                    <li class="genre">
                      ${_config.GENRE_HASHTABLE[genreId]}
                    </li>
                  `;
                    }).join("")}
            </ul>
          `
                };
                this.$state.slidesData.push(slideData);
            }
        });
    }
    async fetchData() {
        let data = {
        };
        let requestURL = "";
        try {
            switch(this.$state.category){
                case "trend":
                    requestURL = `/trending/${this.$state.genre}/day`;
                    data = await _utils.request(requestURL);
                    break;
                case "popular":
                case "top_rated":
                    if (this.$state.genre === "all") {
                        let movieData = await _utils.request(`/movie/${this.$state.category}`);
                        let tvData = await _utils.request(`/tv/${this.$state.category}`);
                        movieData = movieData.results;
                        tvData = tvData.results;
                        data.results = [];
                        for(let i = 0; i < 10; ++i)data.results.push(movieData[i], tvData[i]);
                        break;
                    }
                    requestURL = `/${this.$state.genre}/${this.$state.category}`;
                    data = await _utils.request(requestURL);
                    break;
                case "upcoming":
                case "now_playing":
                    requestURL = `/movie/${this.$state.category}`;
                    data = await _utils.request(requestURL);
                    break;
            }
            return data;
        } catch (e) {
            console.log(e.message);
            console.log(`Failed to retrieve data from "${requestURL}"`);
        }
    }
}
exports.default = LolomoRowCarousel;

},{"../Carousel/Carousel":"goTYN","../Component/Component":"gzPoJ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","../../utils":"fIYUT","../../config":"6V52N"}],"6wc11":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../../utils");
var _component = require("../Component/Component");
var _componentDefault = parcelHelpers.interopDefault(_component);
class LolomoRowHeader extends _componentDefault.default {
    constructor(componentInfo){
        super(componentInfo);
        this.$currElement = document.createElement("div");
        this.$currElement.className = "lolomo__row__header";
        this.render();
    }
    render() {
        this.$currElement.innerHTML = "";
        this.$currElement.textContent = _utils.capitalizeFirstCharacter(this.$state.category).replace(/_/g, " ");
        this.$parentElement.appendChild(this.$currElement);
    }
}
exports.default = LolomoRowHeader;

},{"../Component/Component":"gzPoJ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","../../utils":"fIYUT"}],"kaH4g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../../utils");
var _config = require("../../config");
var _card = require("../Card/Card");
var _cardDefault = parcelHelpers.interopDefault(_card);
var _component = require("../Component/Component");
var _componentDefault = parcelHelpers.interopDefault(_component);
class Details extends _componentDefault.default {
    constructor(componentInfo){
        super(componentInfo);
        this.render();
    }
    async render() {
        this.$state.className = "details";
        await this.prepareDataState();
        new _cardDefault.default({
            parentElement: this.$parentElement,
            state: this.$state
        });
    }
    async prepareDataState() {
        const data = await this.fetchData();
        if (!data) return;
        this.$state.image = `${_config.THE_MOVIE_DB_IMAGE_URL}/${data.poster_path}`;
        if (this.$state.genre === "movie") {
            this.$state.header = data.original_title;
            this.setMovieSubHeaders(data);
        }
        if (this.$state.genre === "tv") {
            this.$state.header = data.original_name;
            this.setTVSubHeaders(data);
        }
        this.$state.body = data.overview;
    }
    addSubHeader(title, content) {
        if (!this.$state.subHeaders) this.$state.subHeaders = [];
        this.$state.subHeaders.push({
            title,
            content
        });
    }
    async fetchData() {
        const [, genre, contentId] = location.pathname.split("/");
        this.$state.genre = genre;
        try {
            const data = await _utils.request(`/${genre}/${contentId}`);
            return data;
        } catch (e) {
            console.log(e.message);
            console.log(`Failed to fetch from "/${genre}/${contentId}"`);
        }
    }
    setTVSubHeaders(data) {
        this.addSubHeader("Seasons/Episodes", `${data.number_of_seasons} season(s) (${data.number_of_episodes} episode(s))`);
        this.addSubHeader("Languages", `${data.spoken_languages.map((lang)=>{
            return lang.english_name;
        }).join(", ")}`);
        this.addSubHeader("Production Countries", `${data.production_countries.map((country)=>{
            return country.name;
        }).join(", ")}`);
        this.addSubHeader("First aired", `${data.first_air_date}`);
        this.addSubHeader("Last aired", `${data.last_air_date}`);
        this.addSubHeader("Vote", `${data.vote_average} (out of ${data.vote_count} votes)`);
        this.addSubHeader("Genres", `${data.genres.map((genre)=>{
            return genre.name;
        }).join(", ")}`);
    }
    setMovieSubHeaders(data1) {
        this.addSubHeader("Duration", `${data1.runtime / 60 > 0 ? `${Math.floor(data1.runtime / 60)}hr ${data1.runtime % 60}mins` : `${data1.runtime % 60}mins`}`);
        this.addSubHeader("Languages", `${data1.spoken_languages.map((lang)=>{
            return lang.english_name;
        }).join(", ")}`);
        this.addSubHeader("Production Countries", `${data1.production_countries.map((country)=>{
            return country.name;
        }).join(", ")}`);
        this.addSubHeader("Release Date", `${data1.release_date}`);
        this.addSubHeader("Vote", `${data1.vote_average} (out of ${data1.vote_count} votes)`);
        this.addSubHeader("Genres", `${data1.genres.map((genre)=>{
            return genre.name;
        }).join(", ")}`);
    }
}
exports.default = Details;

},{"../Card/Card":"jpApr","../Component/Component":"gzPoJ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","../../utils":"fIYUT","../../config":"6V52N"}],"jpApr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _component = require("../Component/Component");
var _componentDefault = parcelHelpers.interopDefault(_component);
class Card extends _componentDefault.default {
    constructor(componentInfo){
        super(componentInfo);
        this.$currElement = document.createElement("div");
        this.$currElement.className = `card ${this.$state.className}`;
        this.render();
    }
    render() {
        this.$currElement.innerHTML = "";
        this.renderImageSection();
        this.renderContentSection();
        this.$parentElement.appendChild(this.$currElement);
    }
    renderImageSection() {
        const markup = `
      <section class="card__image-container">
        <img class="card__image" src="${this.$state.image}" alt="card-image" />
      </section>
    `;
        this.$currElement.insertAdjacentHTML("beforeend", markup);
    }
    renderContentSection() {
        const markup = `
      <section class="card__content">
        <header class="card__content__header">
          ${this.$state.header}
        </header>
        ${this.$state.subHeaders.map((subHeader)=>{
            return `
            <div class="card__content__sub-header">
              <p class="header">${subHeader.title}: </p>
              <p class="content">${subHeader.content}</p>
            </div>
          `;
        }).join(" ")}
        <div class="card__content__body">
          ${this.$state.body}
        </div>
      </section>
    `;
        this.$currElement.insertAdjacentHTML("beforeend", markup);
    }
}
exports.default = Card;

},{"../Component/Component":"gzPoJ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"h3817":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../../utils");
var _component = require("../Component/Component");
var _componentDefault = parcelHelpers.interopDefault(_component);
var _navbarLogo = require("./NavbarLogo");
var _navbarLogoDefault = parcelHelpers.interopDefault(_navbarLogo);
var _navbarNavigation = require("./NavbarNavigation");
var _navbarNavigationDefault = parcelHelpers.interopDefault(_navbarNavigation);
class Navbar extends _componentDefault.default {
    constructor(componentInfo){
        super(componentInfo);
        this.$currElement = document.createElement("nav");
        this.$currElement.className = "navbar";
        this.render();
        this.addHandlerNavbarTabClick();
        this.addHandlerTurnoffActiveTab();
    }
    render() {
        this.$currElement.innerHTML = "";
        new _navbarLogoDefault.default({
            parentElement: this.$currElement
        });
        new _navbarNavigationDefault.default({
            parentElement: this.$currElement
        });
        this.$parentElement.appendChild(this.$currElement);
        this.toggleNavbarTabActive();
    }
    addHandlerTurnoffActiveTab() {
        this.$currElement.addEventListener("turnoffActiveTab", (e)=>{
            this.toggleNavbarTabActive();
            this.setState({
                activeTab: undefined
            });
        });
    }
    setState(newState) {
        this.$state = newState;
    }
    toggleNavbarTabActive() {
        const navbarTabs = this.$currElement.querySelectorAll(".navbar__tab");
        navbarTabs.forEach((navbarTab)=>{
            if (navbarTab.textContent === this.$state.activeTab) navbarTab.classList.toggle("active");
        });
    }
    addHandlerNavbarTabClick() {
        this.$currElement.addEventListener("click", (e)=>{
            let target = e.target;
            if (target.classList.contains("navbar__logo")) target = this.$currElement.querySelector(".navbar__tab");
            if (!target.classList.contains("navbar__tab")) return;
            if (this.$state.activeTab === target) return;
            this.toggleNavbarTabActive();
            const nextURL = `/${target.textContent}`;
            const nextTitle = `${target.textContent} - Netflix`;
            const nextState = {
                additionalInformation: "Updated the URL with JS"
            };
            _utils.pushState(nextState, nextTitle, nextURL, target);
        });
    }
}
exports.default = Navbar;

},{"../../utils":"fIYUT","../Component/Component":"gzPoJ","./NavbarLogo":"jVqpA","./NavbarNavigation":"4aPtd","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jVqpA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _component = require("../Component/Component");
var _componentDefault = parcelHelpers.interopDefault(_component);
class NavbarLogo extends _componentDefault.default {
    constructor(componentInfo){
        super(componentInfo);
        this.$currElement = document.createElement("div");
        this.$currElement.className = "navbar__logo";
        this.render();
    }
    render() {
        this.$parentElement.appendChild(this.$currElement);
    }
}
exports.default = NavbarLogo;

},{"../Component/Component":"gzPoJ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4aPtd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _component = require("../Component/Component");
var _componentDefault = parcelHelpers.interopDefault(_component);
var _navbarNavigationPrimary = require("./NavbarNavigationPrimary");
var _navbarNavigationPrimaryDefault = parcelHelpers.interopDefault(_navbarNavigationPrimary);
var _navbarNavigationSecondary = require("./NavbarNavigationSecondary");
var _navbarNavigationSecondaryDefault = parcelHelpers.interopDefault(_navbarNavigationSecondary);
class NavbarNavigation extends _componentDefault.default {
    constructor(componentInfo){
        super(componentInfo);
        this.$currElement = document.createElement("div");
        this.$currElement.className = "navbar__navigation";
        this.render();
    }
    render() {
        this.$currElement.innerHTML = "";
        new _navbarNavigationPrimaryDefault.default({
            parentElement: this.$currElement
        });
        new _navbarNavigationSecondaryDefault.default({
            parentElement: this.$currElement
        });
        this.$parentElement.appendChild(this.$currElement);
    }
}
exports.default = NavbarNavigation;

},{"../Component/Component":"gzPoJ","./NavbarNavigationPrimary":"7QZ8X","./NavbarNavigationSecondary":"3CNLk","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7QZ8X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _component = require("../Component/Component");
var _componentDefault = parcelHelpers.interopDefault(_component);
class NavbarPrimary extends _componentDefault.default {
    constructor(componentInfo){
        super(componentInfo);
        this.$currElement = document.createElement("ul");
        this.$currElement.className = "navbar__navigation__primary";
        this.render();
    }
    render() {
        this.$currElement.innerHTML = "";
        const navbarTabs = this.createNavbarTabs();
        navbarTabs.forEach((tab)=>{
            this.$currElement.appendChild(tab);
        });
        this.$parentElement.appendChild(this.$currElement);
    }
    createNavbarTabs() {
        const tabNames = [
            "Home",
            "TV Shows",
            "Movies",
            "New & Popular",
            "My List"
        ];
        return tabNames.map((name)=>this.createNavbarTab(name)
        );
    }
    createNavbarTab(tabName) {
        const navbarTab = document.createElement("li");
        navbarTab.className = "navbar__tab";
        navbarTab.textContent = tabName;
        return navbarTab;
    }
}
exports.default = NavbarPrimary;

},{"../Component/Component":"gzPoJ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3CNLk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _component = require("../Component/Component");
var _componentDefault = parcelHelpers.interopDefault(_component);
class NavbarSecondary extends _componentDefault.default {
    constructor(componentInfo){
        super(componentInfo);
        this.$currElement = document.createElement("div");
        this.$currElement.className = "navbar__navigation__secondary";
        this.render();
    }
    render() {
        this.$currElement.innerHTML = "";
        const navbarElements = this.createNavbarElements();
        navbarElements.forEach((el)=>this.$currElement.appendChild(el)
        );
        this.$parentElement.appendChild(this.$currElement);
    }
    createNavbarElements() {
        const navbarElements = [];
        const search = document.createElement("i");
        search.className = "navbar__element fas fa-search";
        navbarElements.push(search);
        const kids = document.createElement("li");
        kids.className = "navbar__element show-kids";
        kids.textContent = "Kids";
        navbarElements.push(kids);
        const notification = document.createElement("i");
        notification.className = "navbar__element fas fa-bell";
        navbarElements.push(notification);
        const user = document.createElement("i");
        user.className = "navbar__element fas fa-user";
        navbarElements.push(user);
        return navbarElements;
    }
}
exports.default = NavbarSecondary;

},{"../Component/Component":"gzPoJ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6r1GA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _component = require("../Component/Component");
var _componentDefault = parcelHelpers.interopDefault(_component);
var _attributionLogoJpg = require("../../../img/attributionLogo.jpg");
var _attributionLogoJpgDefault = parcelHelpers.interopDefault(_attributionLogoJpg);
class Footer extends _componentDefault.default {
    constructor(componentInfo){
        super(componentInfo);
        this.$currElement = document.createElement("footer");
        this.$currElement.className = "footer";
        this.render();
    }
    render() {
        this.$currElement.innerHTML = "";
        this.renderStaticContent();
        this.$parentElement.appendChild(this.$currElement);
    }
    renderStaticContent() {
        const contentMarkup = `
      <div class="attribution-container">
        <p>
          Data from 
          <img
              class="attribution-logo"
              src="${_attributionLogoJpgDefault.default}"
              alt=""
          />
        </p>
      </div>
      <p>© 2022 Younggil Tak</p>
    `;
        this.$currElement.insertAdjacentHTML("beforeend", contentMarkup);
    }
}
exports.default = Footer;

},{"../Component/Component":"gzPoJ","../../../img/attributionLogo.jpg":"dq1NS","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dq1NS":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "attributionLogo.4742489c.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"chiK4":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}]},["cSv3F","3auaO"], "3auaO", "parcelRequire945c")

//# sourceMappingURL=index.8b7fb9b3.js.map
