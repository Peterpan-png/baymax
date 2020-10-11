// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n#baymax * {\n    box-sizing: border-box;\n    border: 0;\n    padding: 0;\n}\n*::before,\n*::after\n{\n    box-sizing:border-box\n}\n\n#baymax {\n    cursor: pointer;\n}\n#baymax * {\n    box-sizing: border-box;\n    border: 0;\n    padding: 0;\n}\n*::before,\n*::after\n{\n    box-sizing:border-box\n}\n\n#baymax {\n    cursor: pointer;\n}\n\nbody {\n    background-color: #C03335;\n    min-width: 100vh;\n}\n\n.head {\n    position: absolute;\n    left: 50%;\n    top: 20px;\n    background-color: white;\n    border-radius: 50%;\n    width: 90px;\n    height: 60px;\n    margin-left: -45px;\n    box-shadow: 0 -15px 30px rgba(23, 34, 45, 0.2) inset, 0 5px 15px rgba(23, 34, 45, 0.2);\n    z-index: 10;\n}\n\n.eye {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    margin: -5px 0 0 -5px;\n    height: 8px;\n    width: 8px;\n    border-radius: 50%;\n    background-color: #202B36;\n    animation: blink 6s ease-in-out infinite;\n}\n\n.left.eye {\n    margin-left: -20px;\n}\n\n.right.eye {\n    margin-left: 15px;\n}\n\n.head::before {\n    content: \"\";\n    width: 34px;\n    height: 1px;\n    background-color: #91969C;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin: -2px 0 0 -17px;\n}\n\n@keyframes blink {\n    0% {\n        -moz-transform: scale(1, 1);\n        -ms-transform: scale(1, 1);\n        -webkit-transform: scale(1, 1);\n        transform: scale(1, 1);\n    }\n    49% {\n        -moz-transform: scale(1, 1);\n        -ms-transform: scale(1, 1);\n        -webkit-transform: scale(1, 1);\n        transform: scale(1, 1);\n    }\n    50% {\n        -moz-transform: scale(1, 0.1);\n        -ms-transform: scale(1, 0.1);\n        -webkit-transform: scale(1, 0.1);\n        transform: scale(1, 0.1);\n    }\n    51% {\n        -moz-transform: scale(1, 1);\n        -ms-transform: scale(1, 1);\n        -webkit-transform: scale(1, 1);\n        transform: scale(1, 1);\n    }\n    60% {\n        -moz-transform: scale(1, 1);\n        -ms-transform: scale(1, 1);\n        -webkit-transform: scale(1, 1);\n        transform: scale(1, 1);\n    }\n    61% {\n        -moz-transform: scale(1, 0.1);\n        -ms-transform: scale(1, 0.1);\n        -webkit-transform: scale(1, 0.1);\n        transform: scale(1, 0.1);\n    }\n    62% {\n        -moz-transform: scale(1, 1);\n        -ms-transform: scale(1, 1);\n        -webkit-transform: scale(1, 1);\n        transform: scale(1, 1);\n    }\n    100% {\n        -moz-transform: scale(1, 1);\n        -ms-transform: scale(1, 1);\n        -webkit-transform: scale(1, 1);\n        transform: scale(1, 1);\n    }\n}\n\n.chest {\n    position: absolute;\n    left: 50%;\n    top: 50px;\n    margin-left: -95px;\n    width: 190px;\n    height: 260px;\n    background-color: white;\n    border-radius: 50%;\n    z-index: 2;\n}\n\n.chest-i {\n    position: absolute;\n    left: 60%;\n    top: 15%;\n    display: block;\n    width: 21px;\n    height: 21px;\n    border-radius: 50%;\n    background-color: white;\n    box-shadow: 0 -5px 8px rgba(23, 34, 45, 0.15) inset, 2px 3px 2px rgba(23, 34, 45, 0.05);\n    z-index: 2;\n}\n\n.belly {\n    position: absolute;\n    left: 50%;\n    top: 60px;\n    width: 240px;\n    height: 310px;\n    margin-left: -120px;\n    border-radius: 50%;\n    overflow: hidden;\n    background-color: white;\n    box-shadow: 0 -25px 40px rgba(23, 34, 45, 0.15) inset, 0 5px 15px rgba(23, 34, 45, 0.25);\n    z-index: 1;\n}\n\n.arm::before {\n    position: absolute;\n    content: \"\";\n    left: 50%;\n    top: 70px;\n    margin-left: -45px;\n    width: 90px;\n    height: 200px;\n    border-radius: 50%;\n    background-color: white;\n}\n\n.left.arm::before {\n    transform: translateX(-80px) rotate(30deg);\n}\n\n.right.arm::before {\n    transform: translateX(80px) rotate(-30deg);\n}\n\n.arm::after {\n    content: \"\";\n    position: absolute;\n    left: 50%;\n    width: 80px;\n    height: 150px;\n    top: 176px;\n    margin-left: -40px;\n    border-radius: 50%;\n    background-color: white;\n    box-shadow: 4px -10px 10px rgba(23, 34, 45, 0.2) inset;\n}\n\n.right.arm::after {\n    transform: rotate(-5deg) translateX(110px);\n}\n\n.left.arm::after {\n    transform: rotate(5deg) translateX(-110px);\n}\n\n.left.leg,\n.right.leg {\n    position: absolute;\n    left: 50%;\n    top: 259px;\n    width: 50px;\n    height: 160px;\n    background-color: white;\n    box-shadow: -7px -6px 7px rgba(23, 34, 45, 0.1) inset;\n}\n\n.left.leg {\n    border-radius: 0 0 15px 15px;\n    transform: translateX(-50px);\n}\n\n.right.leg {\n    transform: translateX(0px);\n    border-radius: 0 0 15px 15px;\n}";
var _default = string;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("js");
demo.innerText = _css.default.substr(0, n);
demo2.innerHTML = _css.default.substr(0, n);
var n = 0;
var time = 100;

var run = function run() {
  n += 1;

  if (n > _css.default.length) {
    window.clearInterval(id);
    return;
  }

  demo.innerText = _css.default.substr(0, n);
  demo2.innerHTML = _css.default.substr(0, n);
  console.log(n + ':' + _css.default.substr(0, n));
  demo.scrollTop = demo.scrollHeight;
};

var play = function play() {
  return setInterval(run, time);
};

var pause = function pause() {
  window.clearInterval(id);
};

var id = play();

var slow = function slow() {
  pause();
  time = 300;
  id = play();
};

var normal = function normal() {
  pause();
  time = 100;
  id = play();
};

var fast = function fast() {
  pause();
  time = 0;
  id = play();
};

btnPause.onclick = function () {
  pause();
};

btnPlay.onclick = function () {
  id = play();
};

btnSlow.onclick = slow;
btnNormal.onclick = normal;
btnFast.onclick = fast;
},{"./css.js":"css.js"}],"C:/Users/PN/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "9924" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/PN/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map