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
})({"d3-mind-map.6cdf4783.js":[function(require,module,exports) {
var define;
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

parcelRequire = function (e, r, t, n) {
  var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }

    return r[t].exports;

    function p(e) {
      return f(p.resolve(e));
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };

  for (var c = 0; c < t.length; c++) {
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  }

  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }

  if (parcelRequire = f, i) throw i;
  return f;
}({
  "hADF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.dependencies = exports.devDependencies = exports.scripts = exports.files = exports.repository = exports.module = exports.jsdelivr = exports.unpkg = exports.main = exports.author = exports.license = exports.homepage = exports.keywords = exports.description = exports.version = exports.name = void 0;
    var e = "d3";
    exports.name = e;
    var s = "5.14.2";
    exports.version = s;
    var t = "Data-Driven Documents";
    exports.description = t;
    var d = ["dom", "visualization", "svg", "animation", "canvas"];
    exports.keywords = d;
    var r = "https://d3js.org";
    exports.homepage = r;
    var o = "BSD-3-Clause";
    exports.license = o;
    var i = {
      name: "Mike Bostock",
      url: "https://bost.ocks.org/mike"
    };
    exports.author = i;
    var p = "dist/d3.node.js";
    exports.main = p;
    var a = "dist/d3.min.js";
    exports.unpkg = a;
    var n = "dist/d3.min.js";
    exports.jsdelivr = n;
    var m = "index.js";
    exports.module = m;
    var c = {
      type: "git",
      url: "https://github.com/d3/d3.git"
    };
    exports.repository = c;
    var l = ["dist/**/*.js", "index.js"];
    exports.files = l;
    var v = {
      pretest: "rimraf dist && mkdir dist && json2module package.json > dist/package.js && rollup -c",
      test: "tape 'test/**/*-test.js'",
      prepublishOnly: "yarn test",
      postpublish: 'git push && git push --tags && cd ../d3.github.com && git pull && cp ../d3/dist/d3.js d3.v5.js && cp ../d3/dist/d3.min.js d3.v5.min.js && git add d3.v5.js d3.v5.min.js && git commit -m "d3 ${npm_package_version}" && git push && cd - && cd ../d3-bower && git pull && cp ../d3/LICENSE ../d3/README.md ../d3/dist/d3.js ../d3/dist/d3.min.js . && git add -- LICENSE README.md d3.js d3.min.js && git commit -m "${npm_package_version}" && git tag -am "${npm_package_version}" v${npm_package_version} && git push && git push --tags && cd - && zip -j dist/d3.zip -- LICENSE README.md API.md CHANGES.md dist/d3.js dist/d3.min.js'
    };
    exports.scripts = v;
    var g = {
      json2module: "0.0",
      rimraf: "2",
      rollup: "1",
      "rollup-plugin-ascii": "0.0",
      "rollup-plugin-node-resolve": "3",
      "rollup-plugin-terser": "5",
      tape: "4"
    };
    exports.devDependencies = g;
    var u = {
      "d3-array": "1",
      "d3-axis": "1",
      "d3-brush": "1",
      "d3-chord": "1",
      "d3-collection": "1",
      "d3-color": "1",
      "d3-contour": "1",
      "d3-dispatch": "1",
      "d3-drag": "1",
      "d3-dsv": "1",
      "d3-ease": "1",
      "d3-fetch": "1",
      "d3-force": "1",
      "d3-format": "1",
      "d3-geo": "1",
      "d3-hierarchy": "1",
      "d3-interpolate": "1",
      "d3-path": "1",
      "d3-polygon": "1",
      "d3-quadtree": "1",
      "d3-random": "1",
      "d3-scale": "2",
      "d3-scale-chromatic": "1",
      "d3-selection": "1",
      "d3-shape": "1",
      "d3-time": "1",
      "d3-time-format": "2",
      "d3-timer": "1",
      "d3-transition": "1",
      "d3-voronoi": "1",
      "d3-zoom": "1"
    };
    exports.dependencies = u;
  }, {}],
  "A6FA": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "raOJ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = n(require("./ascending"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(e) {
      return 1 === e.length && (e = r(e)), {
        left: function left(n, t, r, u) {
          for (null == r && (r = 0), null == u && (u = n.length); r < u;) {
            var l = r + u >>> 1;
            e(n[l], t) < 0 ? r = l + 1 : u = l;
          }

          return r;
        },
        right: function right(n, t, r, u) {
          for (null == r && (r = 0), null == u && (u = n.length); r < u;) {
            var l = r + u >>> 1;
            e(n[l], t) > 0 ? u = l : r = l + 1;
          }

          return r;
        }
      };
    }

    function r(n) {
      return function (t, r) {
        return (0, e.default)(n(t), r);
      };
    }
  }, {
    "./ascending": "A6FA"
  }],
  "VXHZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.bisectLeft = exports.bisectRight = void 0;
    var e = r(require("./ascending")),
        t = r(require("./bisector"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var s = (0, t.default)(e.default),
        i = s.right;
    exports.bisectRight = i;
    var o = s.left;
    exports.bisectLeft = o;
    var u = i;
    exports.default = u;
  }, {
    "./ascending": "A6FA",
    "./bisector": "raOJ"
  }],
  "aKlf": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      null == t && (t = r);

      for (var n = 0, u = e.length - 1, o = e[0], l = new Array(u < 0 ? 0 : u); n < u;) {
        l[n] = t(o, o = e[++n]);
      }

      return l;
    }

    function r(e, r) {
      return [e, r];
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e, exports.pair = r;
  }, {}],
  "JGhM": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./pairs");

    function r(r, t, n) {
      var u,
          a,
          l,
          o,
          i = r.length,
          s = t.length,
          f = new Array(i * s);

      for (null == n && (n = e.pair), u = l = 0; u < i; ++u) {
        for (o = r[u], a = 0; a < s; ++a, ++l) {
          f[l] = n(o, t[a]);
        }
      }

      return f;
    }
  }, {
    "./pairs": "aKlf"
  }],
  "wjXp": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "fzXe": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return null === e ? NaN : +e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "IBjk": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./number"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r, t) {
      var u,
          f,
          l = r.length,
          n = 0,
          a = -1,
          i = 0,
          o = 0;
      if (null == t) for (; ++a < l;) {
        isNaN(u = (0, e.default)(r[a])) || (o += (f = u - i) * (u - (i += f / ++n)));
      } else for (; ++a < l;) {
        isNaN(u = (0, e.default)(t(r[a], a, r))) || (o += (f = u - i) * (u - (i += f / ++n)));
      }
      if (n > 1) return o / (n - 1);
    }
  }, {
    "./number": "fzXe"
  }],
  "JPBu": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./variance"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r, t) {
      var u = (0, e.default)(r, t);
      return u ? Math.sqrt(u) : u;
    }
  }, {
    "./variance": "IBjk"
  }],
  "tlMU": [function (require, module, exports) {
    "use strict";

    function e(e, l) {
      var r,
          u,
          f,
          n = e.length,
          t = -1;

      if (null == l) {
        for (; ++t < n;) {
          if (null != (r = e[t]) && r >= r) for (u = f = r; ++t < n;) {
            null != (r = e[t]) && (u > r && (u = r), f < r && (f = r));
          }
        }
      } else for (; ++t < n;) {
        if (null != (r = l(e[t], t, e)) && r >= r) for (u = f = r; ++t < n;) {
          null != (r = l(e[t], t, e)) && (u > r && (u = r), f < r && (f = r));
        }
      }

      return [u, f];
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "OA0j": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.map = exports.slice = void 0;
    var e = Array.prototype,
        r = e.slice;
    exports.slice = r;
    var p = e.map;
    exports.map = p;
  }, {}],
  "OY6d": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return function () {
        return e;
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "nPOL": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "M46h": [function (require, module, exports) {
    "use strict";

    function e(e, t, r) {
      e = +e, t = +t, r = (n = arguments.length) < 2 ? (t = e, e = 0, 1) : n < 3 ? 1 : +r;

      for (var a = -1, n = 0 | Math.max(0, Math.ceil((t - e) / r)), o = new Array(n); ++a < n;) {
        o[a] = e + a * r;
      }

      return o;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "nJNY": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e, exports.tickIncrement = o, exports.tickStep = M;
    var t = Math.sqrt(50),
        r = Math.sqrt(10),
        a = Math.sqrt(2);

    function e(t, r, a) {
      var e,
          M,
          h,
          i,
          n = -1;
      if (a = +a, (t = +t) === (r = +r) && a > 0) return [t];
      if ((e = r < t) && (M = t, t = r, r = M), 0 === (i = o(t, r, a)) || !isFinite(i)) return [];
      if (i > 0) for (t = Math.ceil(t / i), r = Math.floor(r / i), h = new Array(M = Math.ceil(r - t + 1)); ++n < M;) {
        h[n] = (t + n) * i;
      } else for (t = Math.floor(t * i), r = Math.ceil(r * i), h = new Array(M = Math.ceil(t - r + 1)); ++n < M;) {
        h[n] = (t - n) / i;
      }
      return e && h.reverse(), h;
    }

    function o(e, o, M) {
      var h = (o - e) / Math.max(0, M),
          i = Math.floor(Math.log(h) / Math.LN10),
          n = h / Math.pow(10, i);
      return i >= 0 ? (n >= t ? 10 : n >= r ? 5 : n >= a ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (n >= t ? 10 : n >= r ? 5 : n >= a ? 2 : 1);
    }

    function M(e, o, M) {
      var h = Math.abs(o - e) / Math.max(0, M),
          i = Math.pow(10, Math.floor(Math.log(h) / Math.LN10)),
          n = h / i;
      return n >= t ? i *= 10 : n >= r ? i *= 5 : n >= a && (i *= 2), o < e ? -i : i;
    }
  }, {}],
  "PgUT": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return Math.ceil(Math.log(e.length) / Math.LN2) + 1;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "eRk3": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var e = require("./array"),
        r = o(require("./bisect")),
        t = o(require("./constant")),
        u = o(require("./extent")),
        n = o(require("./identity")),
        a = o(require("./range")),
        f = require("./ticks"),
        i = o(require("./threshold/sturges"));

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function l() {
      var o = n.default,
          l = u.default,
          s = i.default;

      function c(e) {
        var t,
            u,
            n = e.length,
            i = new Array(n);

        for (t = 0; t < n; ++t) {
          i[t] = o(e[t], t, e);
        }

        var c = l(i),
            d = c[0],
            h = c[1],
            y = s(i, d, h);
        Array.isArray(y) || (y = (0, f.tickStep)(d, h, y), y = (0, a.default)(Math.ceil(d / y) * y, h, y));

        for (var p = y.length; y[0] <= d;) {
          y.shift(), --p;
        }

        for (; y[p - 1] > h;) {
          y.pop(), --p;
        }

        var q,
            v = new Array(p + 1);

        for (t = 0; t <= p; ++t) {
          (q = v[t] = []).x0 = t > 0 ? y[t - 1] : d, q.x1 = t < p ? y[t] : h;
        }

        for (t = 0; t < n; ++t) {
          d <= (u = i[t]) && u <= h && v[(0, r.default)(y, u, 0, p)].push(e[t]);
        }

        return v;
      }

      return c.value = function (e) {
        return arguments.length ? (o = "function" == typeof e ? e : (0, t.default)(e), c) : o;
      }, c.domain = function (e) {
        return arguments.length ? (l = "function" == typeof e ? e : (0, t.default)([e[0], e[1]]), c) : l;
      }, c.thresholds = function (r) {
        return arguments.length ? (s = "function" == typeof r ? r : Array.isArray(r) ? (0, t.default)(e.slice.call(r)) : (0, t.default)(r), c) : s;
      }, c;
    }
  }, {
    "./array": "OA0j",
    "./bisect": "VXHZ",
    "./constant": "OY6d",
    "./extent": "tlMU",
    "./identity": "nPOL",
    "./range": "M46h",
    "./ticks": "nJNY",
    "./threshold/sturges": "PgUT"
  }],
  "qoxw": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./number"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r, t, u) {
      if (null == u && (u = e.default), n = r.length) {
        if ((t = +t) <= 0 || n < 2) return +u(r[0], 0, r);
        if (t >= 1) return +u(r[n - 1], n - 1, r);
        var n,
            f = (n - 1) * t,
            l = Math.floor(f),
            o = +u(r[l], l, r);
        return o + (+u(r[l + 1], l + 1, r) - o) * (f - l);
      }
    }
  }, {
    "./number": "fzXe"
  }],
  "a8Ry": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var e = require("../array"),
        r = a(require("../ascending")),
        t = a(require("../number")),
        u = a(require("../quantile"));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function l(a, l, n) {
      return a = e.map.call(a, t.default).sort(r.default), Math.ceil((n - l) / (2 * ((0, u.default)(a, .75) - (0, u.default)(a, .25)) * Math.pow(a.length, -1 / 3)));
    }
  }, {
    "../array": "OA0j",
    "../ascending": "A6FA",
    "../number": "fzXe",
    "../quantile": "qoxw"
  }],
  "VlA4": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("../deviation"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(t, r, u) {
      return Math.ceil((u - r) / (3.5 * (0, e.default)(t) * Math.pow(t.length, -1 / 3)));
    }
  }, {
    "../deviation": "JPBu"
  }],
  "Raoi": [function (require, module, exports) {
    "use strict";

    function e(e, l) {
      var r,
          u,
          f = e.length,
          n = -1;

      if (null == l) {
        for (; ++n < f;) {
          if (null != (r = e[n]) && r >= r) for (u = r; ++n < f;) {
            null != (r = e[n]) && r > u && (u = r);
          }
        }
      } else for (; ++n < f;) {
        if (null != (r = l(e[n], n, e)) && r >= r) for (u = r; ++n < f;) {
          null != (r = l(e[n], n, e)) && r > u && (u = r);
        }
      }

      return u;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "hoEE": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./number"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r, t) {
      var u,
          f = r.length,
          l = f,
          n = -1,
          a = 0;
      if (null == t) for (; ++n < f;) {
        isNaN(u = (0, e.default)(r[n])) ? --l : a += u;
      } else for (; ++n < f;) {
        isNaN(u = (0, e.default)(t(r[n], n, r))) ? --l : a += u;
      }
      if (l) return a / l;
    }
  }, {
    "./number": "fzXe"
  }],
  "FMd1": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;
    var e = t(require("./ascending")),
        u = t(require("./number")),
        r = t(require("./quantile"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function l(t, l) {
      var a,
          n = t.length,
          s = -1,
          f = [];
      if (null == l) for (; ++s < n;) {
        isNaN(a = (0, u.default)(t[s])) || f.push(a);
      } else for (; ++s < n;) {
        isNaN(a = (0, u.default)(l(t[s], s, t))) || f.push(a);
      }
      return (0, r.default)(f.sort(e.default), .5);
    }
  }, {
    "./ascending": "A6FA",
    "./number": "fzXe",
    "./quantile": "qoxw"
  }],
  "SAjT": [function (require, module, exports) {
    "use strict";

    function e(e) {
      for (var r, t, n, o = e.length, f = -1, l = 0; ++f < o;) {
        l += e[f].length;
      }

      for (t = new Array(l); --o >= 0;) {
        for (r = (n = e[o]).length; --r >= 0;) {
          t[--l] = n[r];
        }
      }

      return t;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "WLfU": [function (require, module, exports) {
    "use strict";

    function e(e, l) {
      var r,
          u,
          f = e.length,
          n = -1;

      if (null == l) {
        for (; ++n < f;) {
          if (null != (r = e[n]) && r >= r) for (u = r; ++n < f;) {
            null != (r = e[n]) && u > r && (u = r);
          }
        }
      } else for (; ++n < f;) {
        if (null != (r = l(e[n], n, e)) && r >= r) for (u = r; ++n < f;) {
          null != (r = l(e[n], n, e)) && u > r && (u = r);
        }
      }

      return u;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "V5Z5": [function (require, module, exports) {
    "use strict";

    function e(e, r) {
      for (var t = r.length, n = new Array(t); t--;) {
        n[t] = e[r[t]];
      }

      return n;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "c8hi": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./ascending"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r, t) {
      if (u = r.length) {
        var u,
            n,
            l = 0,
            o = 0,
            d = r[o];

        for (null == t && (t = e.default); ++l < u;) {
          (t(n = r[l], d) < 0 || 0 !== t(d, d)) && (d = n, o = l);
        }

        return 0 === t(d, d) ? o : void 0;
      }
    }
  }, {
    "./ascending": "A6FA"
  }],
  "Z0Nc": [function (require, module, exports) {
    "use strict";

    function e(e, t, r) {
      for (var l, n, u = (null == r ? e.length : r) - (t = null == t ? 0 : +t); u;) {
        n = Math.random() * u-- | 0, l = e[u + t], e[u + t] = e[n + t], e[n + t] = l;
      }

      return e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "O7Vy": [function (require, module, exports) {
    "use strict";

    function e(e, r) {
      var t,
          l = e.length,
          o = -1,
          u = 0;
      if (null == r) for (; ++o < l;) {
        (t = +e[o]) && (u += t);
      } else for (; ++o < l;) {
        (t = +r(e[o], o, e)) && (u += t);
      }
      return u;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "pk0a": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./min"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r) {
      if (!(o = r.length)) return [];

      for (var t = -1, u = (0, e.default)(r, n), f = new Array(u); ++t < u;) {
        for (var o, a = -1, i = f[t] = new Array(o); ++a < o;) {
          i[a] = r[a][t];
        }
      }

      return f;
    }

    function n(e) {
      return e.length;
    }
  }, {
    "./min": "WLfU"
  }],
  "oAxq": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("./transpose"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r() {
      return (0, e.default)(arguments);
    }
  }, {
    "./transpose": "pk0a"
  }],
  "cBuZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "bisect", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "bisectRight", {
      enumerable: !0,
      get: function get() {
        return e.bisectRight;
      }
    }), Object.defineProperty(exports, "bisectLeft", {
      enumerable: !0,
      get: function get() {
        return e.bisectLeft;
      }
    }), Object.defineProperty(exports, "ascending", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "bisector", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "cross", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "descending", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "deviation", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), Object.defineProperty(exports, "extent", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "histogram", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "thresholdFreedmanDiaconis", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(exports, "thresholdScott", {
      enumerable: !0,
      get: function get() {
        return a.default;
      }
    }), Object.defineProperty(exports, "thresholdSturges", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(exports, "max", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    }), Object.defineProperty(exports, "mean", {
      enumerable: !0,
      get: function get() {
        return d.default;
      }
    }), Object.defineProperty(exports, "median", {
      enumerable: !0,
      get: function get() {
        return l.default;
      }
    }), Object.defineProperty(exports, "merge", {
      enumerable: !0,
      get: function get() {
        return b.default;
      }
    }), Object.defineProperty(exports, "min", {
      enumerable: !0,
      get: function get() {
        return m.default;
      }
    }), Object.defineProperty(exports, "pairs", {
      enumerable: !0,
      get: function get() {
        return g.default;
      }
    }), Object.defineProperty(exports, "permute", {
      enumerable: !0,
      get: function get() {
        return y.default;
      }
    }), Object.defineProperty(exports, "quantile", {
      enumerable: !0,
      get: function get() {
        return O.default;
      }
    }), Object.defineProperty(exports, "range", {
      enumerable: !0,
      get: function get() {
        return j.default;
      }
    }), Object.defineProperty(exports, "scan", {
      enumerable: !0,
      get: function get() {
        return P.default;
      }
    }), Object.defineProperty(exports, "shuffle", {
      enumerable: !0,
      get: function get() {
        return x.default;
      }
    }), Object.defineProperty(exports, "sum", {
      enumerable: !0,
      get: function get() {
        return q.default;
      }
    }), Object.defineProperty(exports, "ticks", {
      enumerable: !0,
      get: function get() {
        return h.default;
      }
    }), Object.defineProperty(exports, "tickIncrement", {
      enumerable: !0,
      get: function get() {
        return h.tickIncrement;
      }
    }), Object.defineProperty(exports, "tickStep", {
      enumerable: !0,
      get: function get() {
        return h.tickStep;
      }
    }), Object.defineProperty(exports, "transpose", {
      enumerable: !0,
      get: function get() {
        return v.default;
      }
    }), Object.defineProperty(exports, "variance", {
      enumerable: !0,
      get: function get() {
        return k.default;
      }
    }), Object.defineProperty(exports, "zip", {
      enumerable: !0,
      get: function get() {
        return _.default;
      }
    });

    var e = D(require("./bisect")),
        r = M(require("./ascending")),
        t = M(require("./bisector")),
        n = M(require("./cross")),
        u = M(require("./descending")),
        i = M(require("./deviation")),
        o = M(require("./extent")),
        f = M(require("./histogram")),
        c = M(require("./threshold/freedmanDiaconis")),
        a = M(require("./threshold/scott")),
        p = M(require("./threshold/sturges")),
        s = M(require("./max")),
        d = M(require("./mean")),
        l = M(require("./median")),
        b = M(require("./merge")),
        m = M(require("./min")),
        g = M(require("./pairs")),
        y = M(require("./permute")),
        O = M(require("./quantile")),
        j = M(require("./range")),
        P = M(require("./scan")),
        x = M(require("./shuffle")),
        q = M(require("./sum")),
        h = D(require("./ticks")),
        v = M(require("./transpose")),
        k = M(require("./variance")),
        _ = M(require("./zip"));

    function M(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function w() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return w = function w() {
        return e;
      }, e;
    }

    function D(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var r = w();
      if (r && r.has(e)) return r.get(e);
      var t = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var u in e) {
        if (Object.prototype.hasOwnProperty.call(e, u)) {
          var i = n ? Object.getOwnPropertyDescriptor(e, u) : null;
          i && (i.get || i.set) ? Object.defineProperty(t, u, i) : t[u] = e[u];
        }
      }

      return t.default = e, r && r.set(e, t), t;
    }
  }, {
    "./bisect": "VXHZ",
    "./ascending": "A6FA",
    "./bisector": "raOJ",
    "./cross": "JGhM",
    "./descending": "wjXp",
    "./deviation": "JPBu",
    "./extent": "tlMU",
    "./histogram": "eRk3",
    "./threshold/freedmanDiaconis": "a8Ry",
    "./threshold/scott": "VlA4",
    "./threshold/sturges": "PgUT",
    "./max": "Raoi",
    "./mean": "hoEE",
    "./median": "FMd1",
    "./merge": "SAjT",
    "./min": "WLfU",
    "./pairs": "aKlf",
    "./permute": "V5Z5",
    "./quantile": "qoxw",
    "./range": "M46h",
    "./scan": "c8hi",
    "./shuffle": "Z0Nc",
    "./sum": "O7Vy",
    "./ticks": "nJNY",
    "./transpose": "pk0a",
    "./variance": "IBjk",
    "./zip": "oAxq"
  }],
  "rv5q": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.slice = void 0;
    var e = Array.prototype.slice;
    exports.slice = e;
  }, {}],
  "Qz6O": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.axisTop = p, exports.axisRight = h, exports.axisBottom = x, exports.axisLeft = g;

    var t = require("./array"),
        n = r(require("./identity"));

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var e = 1,
        i = 2,
        a = 3,
        u = 4,
        o = 1e-6;

    function l(t) {
      return "translate(" + (t + .5) + ",0)";
    }

    function c(t) {
      return "translate(0," + (t + .5) + ")";
    }

    function s(t) {
      return function (n) {
        return +t(n);
      };
    }

    function f(t) {
      var n = Math.max(0, t.bandwidth() - 1) / 2;
      return t.round() && (n = Math.round(n)), function (r) {
        return +t(r) + n;
      };
    }

    function d() {
      return !this.__axis;
    }

    function m(r, m) {
      var p = [],
          h = null,
          x = null,
          g = 6,
          k = 6,
          y = 3,
          _ = r === e || r === u ? -1 : 1,
          M = r === u || r === i ? "x" : "y",
          v = r === e || r === a ? l : c;

      function F(t) {
        var l = null == h ? m.ticks ? m.ticks.apply(m, p) : m.domain() : h,
            c = null == x ? m.tickFormat ? m.tickFormat.apply(m, p) : n.default : x,
            F = Math.max(g, 0) + y,
            V = m.range(),
            b = +V[0] + .5,
            z = +V[V.length - 1] + .5,
            A = (m.bandwidth ? f : s)(m.copy()),
            H = t.selection ? t.selection() : t,
            C = H.selectAll(".domain").data([null]),
            S = H.selectAll(".tick").data(l, m).order(),
            q = S.exit(),
            w = S.enter().append("g").attr("class", "tick"),
            O = S.select("line"),
            P = S.select("text");
        C = C.merge(C.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), S = S.merge(w), O = O.merge(w.append("line").attr("stroke", "currentColor").attr(M + "2", _ * g)), P = P.merge(w.append("text").attr("fill", "currentColor").attr(M, _ * F).attr("dy", r === e ? "0em" : r === a ? "0.71em" : "0.32em")), t !== H && (C = C.transition(t), S = S.transition(t), O = O.transition(t), P = P.transition(t), q = q.transition(t).attr("opacity", o).attr("transform", function (t) {
          return isFinite(t = A(t)) ? v(t) : this.getAttribute("transform");
        }), w.attr("opacity", o).attr("transform", function (t) {
          var n = this.parentNode.__axis;
          return v(n && isFinite(n = n(t)) ? n : A(t));
        })), q.remove(), C.attr("d", r === u || r == i ? k ? "M" + _ * k + "," + b + "H0.5V" + z + "H" + _ * k : "M0.5," + b + "V" + z : k ? "M" + b + "," + _ * k + "V0.5H" + z + "V" + _ * k : "M" + b + ",0.5H" + z), S.attr("opacity", 1).attr("transform", function (t) {
          return v(A(t));
        }), O.attr(M + "2", _ * g), P.attr(M, _ * F).text(c), H.filter(d).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", r === i ? "start" : r === u ? "end" : "middle"), H.each(function () {
          this.__axis = A;
        });
      }

      return F.scale = function (t) {
        return arguments.length ? (m = t, F) : m;
      }, F.ticks = function () {
        return p = t.slice.call(arguments), F;
      }, F.tickArguments = function (n) {
        return arguments.length ? (p = null == n ? [] : t.slice.call(n), F) : p.slice();
      }, F.tickValues = function (n) {
        return arguments.length ? (h = null == n ? null : t.slice.call(n), F) : h && h.slice();
      }, F.tickFormat = function (t) {
        return arguments.length ? (x = t, F) : x;
      }, F.tickSize = function (t) {
        return arguments.length ? (g = k = +t, F) : g;
      }, F.tickSizeInner = function (t) {
        return arguments.length ? (g = +t, F) : g;
      }, F.tickSizeOuter = function (t) {
        return arguments.length ? (k = +t, F) : k;
      }, F.tickPadding = function (t) {
        return arguments.length ? (y = +t, F) : y;
      }, F;
    }

    function p(t) {
      return m(e, t);
    }

    function h(t) {
      return m(i, t);
    }

    function x(t) {
      return m(a, t);
    }

    function g(t) {
      return m(u, t);
    }
  }, {
    "./array": "rv5q",
    "./identity": "nPOL"
  }],
  "y9Kr": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "axisTop", {
      enumerable: !0,
      get: function get() {
        return e.axisTop;
      }
    }), Object.defineProperty(exports, "axisRight", {
      enumerable: !0,
      get: function get() {
        return e.axisRight;
      }
    }), Object.defineProperty(exports, "axisBottom", {
      enumerable: !0,
      get: function get() {
        return e.axisBottom;
      }
    }), Object.defineProperty(exports, "axisLeft", {
      enumerable: !0,
      get: function get() {
        return e.axisLeft;
      }
    });

    var e = require("./axis");
  }, {
    "./axis": "Qz6O"
  }],
  "CLHd": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var n = {
      value: function value() {}
    };

    function r() {
      for (var n, r = 0, t = arguments.length, o = {}; r < t; ++r) {
        if (!(n = arguments[r] + "") || n in o || /[\s.]/.test(n)) throw new Error("illegal type: " + n);
        o[n] = [];
      }

      return new e(o);
    }

    function e(n) {
      this._ = n;
    }

    function t(n, r) {
      return n.trim().split(/^|\s+/).map(function (n) {
        var e = "",
            t = n.indexOf(".");
        if (t >= 0 && (e = n.slice(t + 1), n = n.slice(0, t)), n && !r.hasOwnProperty(n)) throw new Error("unknown type: " + n);
        return {
          type: n,
          name: e
        };
      });
    }

    function o(n, r) {
      for (var e, t = 0, o = n.length; t < o; ++t) {
        if ((e = n[t]).name === r) return e.value;
      }
    }

    function i(r, e, t) {
      for (var o = 0, i = r.length; o < i; ++o) {
        if (r[o].name === e) {
          r[o] = n, r = r.slice(0, o).concat(r.slice(o + 1));
          break;
        }
      }

      return null != t && r.push({
        name: e,
        value: t
      }), r;
    }

    e.prototype = r.prototype = {
      constructor: e,
      on: function on(n, r) {
        var e,
            l = this._,
            a = t(n + "", l),
            f = -1,
            u = a.length;

        if (!(arguments.length < 2)) {
          if (null != r && "function" != typeof r) throw new Error("invalid callback: " + r);

          for (; ++f < u;) {
            if (e = (n = a[f]).type) l[e] = i(l[e], n.name, r);else if (null == r) for (e in l) {
              l[e] = i(l[e], n.name, null);
            }
          }

          return this;
        }

        for (; ++f < u;) {
          if ((e = (n = a[f]).type) && (e = o(l[e], n.name))) return e;
        }
      },
      copy: function copy() {
        var n = {},
            r = this._;

        for (var t in r) {
          n[t] = r[t].slice();
        }

        return new e(n);
      },
      call: function call(n, r) {
        if ((e = arguments.length - 2) > 0) for (var e, t, o = new Array(e), i = 0; i < e; ++i) {
          o[i] = arguments[i + 2];
        }
        if (!this._.hasOwnProperty(n)) throw new Error("unknown type: " + n);

        for (i = 0, e = (t = this._[n]).length; i < e; ++i) {
          t[i].value.apply(r, o);
        }
      },
      apply: function apply(n, r, e) {
        if (!this._.hasOwnProperty(n)) throw new Error("unknown type: " + n);

        for (var t = this._[n], o = 0, i = t.length; o < i; ++o) {
          t[o].value.apply(r, e);
        }
      }
    };
    var l = r;
    exports.default = l;
  }, {}],
  "UUCs": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "dispatch", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    });
    var e = t(require("./dispatch.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./dispatch.js": "CLHd"
  }],
  "UzOB": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.xhtml = void 0;
    var t = "http://www.w3.org/1999/xhtml";
    exports.xhtml = t;
    var w = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: t,
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/"
    };
    exports.default = w;
  }, {}],
  "OLJ5": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./namespaces"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r) {
      var t = r += "",
          s = t.indexOf(":");
      return s >= 0 && "xmlns" !== (t = r.slice(0, s)) && (r = r.slice(s + 1)), e.default.hasOwnProperty(t) ? {
        space: e.default[t],
        local: r
      } : r;
    }
  }, {
    "./namespaces": "UzOB"
  }],
  "EIjt": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = a;

    var e = n(require("./namespace")),
        t = require("./namespaces");

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(e) {
      return function () {
        var n = this.ownerDocument,
            r = this.namespaceURI;
        return r === t.xhtml && n.documentElement.namespaceURI === t.xhtml ? n.createElement(e) : n.createElementNS(r, e);
      };
    }

    function u(e) {
      return function () {
        return this.ownerDocument.createElementNS(e.space, e.local);
      };
    }

    function a(t) {
      var n = (0, e.default)(t);
      return (n.local ? u : r)(n);
    }
  }, {
    "./namespace": "OLJ5",
    "./namespaces": "UzOB"
  }],
  "xs2I": [function (require, module, exports) {
    "use strict";

    function e() {}

    function t(t) {
      return null == t ? e : function () {
        return this.querySelector(t);
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "LRy5": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = _;

    var e = require("./index"),
        t = r(require("../selector"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function _(r) {
      "function" != typeof r && (r = (0, t.default)(r));

      for (var _ = this._groups, a = _.length, n = new Array(a), u = 0; u < a; ++u) {
        for (var o, i, l = _[u], d = l.length, s = n[u] = new Array(d), f = 0; f < d; ++f) {
          (o = l[f]) && (i = r.call(o, o.__data__, f, l)) && ("__data__" in o && (i.__data__ = o.__data__), s[f] = i);
        }
      }

      return new e.Selection(n, this._parents);
    }
  }, {
    "./index": "jpDG",
    "../selector": "xs2I"
  }],
  "mHY5": [function (require, module, exports) {
    "use strict";

    function e() {
      return [];
    }

    function t(t) {
      return null == t ? e : function () {
        return this.querySelectorAll(t);
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "ijGs": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;

    var e = require("./index"),
        t = r(require("../selectorAll"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(r) {
      "function" != typeof r && (r = (0, t.default)(r));

      for (var u = this._groups, l = u.length, n = [], o = [], s = 0; s < l; ++s) {
        for (var a, f = u[s], i = f.length, _ = 0; _ < i; ++_) {
          (a = f[_]) && (n.push(r.call(a, a.__data__, _, f)), o.push(a));
        }
      }

      return new e.Selection(n, o);
    }
  }, {
    "./index": "jpDG",
    "../selectorAll": "mHY5"
  }],
  "PkZe": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return function () {
        return this.matches(e);
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "hrVj": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n;

    var e = require("./index"),
        r = t(require("../matcher"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n(t) {
      "function" != typeof t && (t = (0, r.default)(t));

      for (var n = this._groups, u = n.length, a = new Array(u), o = 0; o < u; ++o) {
        for (var i, l = n[o], s = l.length, f = a[o] = [], _ = 0; _ < s; ++_) {
          (i = l[_]) && t.call(i, i.__data__, _, l) && f.push(i);
        }
      }

      return new e.Selection(a, this._parents);
    }
  }, {
    "./index": "jpDG",
    "../matcher": "PkZe"
  }],
  "NmjR": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return new Array(e.length);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "wXei": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n, exports.EnterNode = o;

    var e = r(require("./sparse")),
        t = require("./index");

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n() {
      return new t.Selection(this._enter || this._groups.map(e.default), this._parents);
    }

    function o(e, t) {
      this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
    }

    o.prototype = {
      constructor: o,
      appendChild: function appendChild(e) {
        return this._parent.insertBefore(e, this._next);
      },
      insertBefore: function insertBefore(e, t) {
        return this._parent.insertBefore(e, t);
      },
      querySelector: function querySelector(e) {
        return this._parent.querySelector(e);
      },
      querySelectorAll: function querySelectorAll(e) {
        return this._parent.querySelectorAll(e);
      }
    };
  }, {
    "./sparse": "NmjR",
    "./index": "jpDG"
  }],
  "QmPF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var e = require("./index"),
        r = require("./enter"),
        n = t(require("../constant"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var a = "$";

    function o(e, n, t, a, o, _) {
      for (var l, i = 0, u = n.length, f = _.length; i < f; ++i) {
        (l = n[i]) ? (l.__data__ = _[i], a[i] = l) : t[i] = new r.EnterNode(e, _[i]);
      }

      for (; i < u; ++i) {
        (l = n[i]) && (o[i] = l);
      }
    }

    function _(e, n, t, o, _, l, i) {
      var u,
          f,
          c,
          s = {},
          d = n.length,
          h = l.length,
          w = new Array(d);

      for (u = 0; u < d; ++u) {
        (f = n[u]) && (w[u] = c = a + i.call(f, f.__data__, u, n), c in s ? _[u] = f : s[c] = f);
      }

      for (u = 0; u < h; ++u) {
        (f = s[c = a + i.call(e, l[u], u, l)]) ? (o[u] = f, f.__data__ = l[u], s[c] = null) : t[u] = new r.EnterNode(e, l[u]);
      }

      for (u = 0; u < d; ++u) {
        (f = n[u]) && s[w[u]] === f && (_[u] = f);
      }
    }

    function l(r, t) {
      if (!r) return v = new Array(this.size()), d = -1, this.each(function (e) {
        v[++d] = e;
      }), v;
      var a = t ? _ : o,
          l = this._parents,
          i = this._groups;
      "function" != typeof r && (r = (0, n.default)(r));

      for (var u = i.length, f = new Array(u), c = new Array(u), s = new Array(u), d = 0; d < u; ++d) {
        var h = l[d],
            w = i[d],
            y = w.length,
            v = r.call(h, h && h.__data__, d, l),
            g = v.length,
            A = c[d] = new Array(g),
            p = f[d] = new Array(g);
        a(h, w, A, p, s[d] = new Array(y), v, t);

        for (var x, q, E = 0, M = 0; E < g; ++E) {
          if (x = A[E]) {
            for (E >= M && (M = E + 1); !(q = p[M]) && ++M < g;) {
              ;
            }

            x._next = q || null;
          }
        }
      }

      return (f = new e.Selection(f, l))._enter = c, f._exit = s, f;
    }
  }, {
    "./index": "jpDG",
    "./enter": "wXei",
    "../constant": "OY6d"
  }],
  "tchs": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;

    var e = r(require("./sparse")),
        t = require("./index");

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u() {
      return new t.Selection(this._exit || this._groups.map(e.default), this._parents);
    }
  }, {
    "./sparse": "NmjR",
    "./index": "jpDG"
  }],
  "oO6z": [function (require, module, exports) {
    "use strict";

    function e(e, t, r) {
      var n = this.enter(),
          o = this,
          u = this.exit();
      return n = "function" == typeof e ? e(n) : n.append(e + ""), null != t && (o = t(o)), null == r ? u.remove() : r(u), n && o ? n.merge(o).order() : o;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "i5nV": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./index");

    function r(r) {
      for (var t = this._groups, n = r._groups, o = t.length, s = n.length, a = Math.min(o, s), i = new Array(o), u = 0; u < a; ++u) {
        for (var l, f = t[u], h = n[u], p = f.length, g = i[u] = new Array(p), _ = 0; _ < p; ++_) {
          (l = f[_] || h[_]) && (g[_] = l);
        }
      }

      for (; u < o; ++u) {
        i[u] = t[u];
      }

      return new e.Selection(i, this._parents);
    }
  }, {
    "./index": "jpDG"
  }],
  "RepQ": [function (require, module, exports) {
    "use strict";

    function e() {
      for (var e = this._groups, t = -1, r = e.length; ++t < r;) {
        for (var o, n = e[t], s = n.length - 1, i = n[s]; --s >= 0;) {
          (o = n[s]) && (i && 4 ^ o.compareDocumentPosition(i) && i.parentNode.insertBefore(o, i), i = o);
        }
      }

      return this;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "D8yW": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;

    var r = require("./index");

    function e(e) {
      function n(r, t) {
        return r && t ? e(r.__data__, t.__data__) : !r - !t;
      }

      e || (e = t);

      for (var a = this._groups, o = a.length, u = new Array(o), _ = 0; _ < o; ++_) {
        for (var i, s = a[_], d = s.length, f = u[_] = new Array(d), c = 0; c < d; ++c) {
          (i = s[c]) && (f[c] = i);
        }

        f.sort(n);
      }

      return new r.Selection(u, this._parents).order();
    }

    function t(r, e) {
      return r < e ? -1 : r > e ? 1 : r >= e ? 0 : NaN;
    }
  }, {
    "./index": "jpDG"
  }],
  "pbQ4": [function (require, module, exports) {
    "use strict";

    function e() {
      var e = arguments[0];
      return arguments[0] = this, e.apply(null, arguments), this;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "kO0T": [function (require, module, exports) {
    "use strict";

    function e() {
      var e = new Array(this.size()),
          t = -1;
      return this.each(function () {
        e[++t] = this;
      }), e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "xFUP": [function (require, module, exports) {
    "use strict";

    function e() {
      for (var e = this._groups, r = 0, t = e.length; r < t; ++r) {
        for (var u = e[r], n = 0, o = u.length; n < o; ++n) {
          var l = u[n];
          if (l) return l;
        }
      }

      return null;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "w9fp": [function (require, module, exports) {
    "use strict";

    function e() {
      var e = 0;
      return this.each(function () {
        ++e;
      }), e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "UFOA": [function (require, module, exports) {
    "use strict";

    function e() {
      return !this.node();
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "q4XW": [function (require, module, exports) {
    "use strict";

    function e(e) {
      for (var t = this._groups, r = 0, o = t.length; r < o; ++r) {
        for (var s, a = t[r], l = 0, u = a.length; l < u; ++l) {
          (s = a[l]) && e.call(s, s.__data__, l, a);
        }
      }

      return this;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "Tdf9": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;
    var t = e(require("../namespace"));

    function e(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function n(t) {
      return function () {
        this.removeAttribute(t);
      };
    }

    function u(t) {
      return function () {
        this.removeAttributeNS(t.space, t.local);
      };
    }

    function r(t, e) {
      return function () {
        this.setAttribute(t, e);
      };
    }

    function i(t, e) {
      return function () {
        this.setAttributeNS(t.space, t.local, e);
      };
    }

    function o(t, e) {
      return function () {
        var n = e.apply(this, arguments);
        null == n ? this.removeAttribute(t) : this.setAttribute(t, n);
      };
    }

    function c(t, e) {
      return function () {
        var n = e.apply(this, arguments);
        null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
      };
    }

    function l(e, l) {
      var a = (0, t.default)(e);

      if (arguments.length < 2) {
        var s = this.node();
        return a.local ? s.getAttributeNS(a.space, a.local) : s.getAttribute(a);
      }

      return this.each((null == l ? a.local ? u : n : "function" == typeof l ? a.local ? c : o : a.local ? i : r)(a, l));
    }
  }, {
    "../namespace": "OLJ5"
  }],
  "D1dR": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "VXjm": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o, exports.styleValue = l;
    var e = t(require("../window"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(e) {
      return function () {
        this.style.removeProperty(e);
      };
    }

    function n(e, t, r) {
      return function () {
        this.style.setProperty(e, t, r);
      };
    }

    function u(e, t, r) {
      return function () {
        var n = t.apply(this, arguments);
        null == n ? this.style.removeProperty(e) : this.style.setProperty(e, n, r);
      };
    }

    function o(e, t, o) {
      return arguments.length > 1 ? this.each((null == t ? r : "function" == typeof t ? u : n)(e, t, null == o ? "" : o)) : l(this.node(), e);
    }

    function l(t, r) {
      return t.style.getPropertyValue(r) || (0, e.default)(t).getComputedStyle(t, null).getPropertyValue(r);
    }
  }, {
    "../window": "D1dR"
  }],
  "QOWh": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return function () {
        delete this[t];
      };
    }

    function e(t, e) {
      return function () {
        this[t] = e;
      };
    }

    function n(t, e) {
      return function () {
        var n = e.apply(this, arguments);
        null == n ? delete this[t] : this[t] = n;
      };
    }

    function u(u, i) {
      return arguments.length > 1 ? this.each((null == i ? t : "function" == typeof i ? n : e)(u, i)) : this.node()[u];
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;
  }, {}],
  "rtNW": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return t.trim().split(/^|\s+/);
    }

    function n(t) {
      return t.classList || new e(t);
    }

    function e(n) {
      this._node = n, this._names = t(n.getAttribute("class") || "");
    }

    function i(t, e) {
      for (var i = n(t), s = -1, r = e.length; ++s < r;) {
        i.add(e[s]);
      }
    }

    function s(t, e) {
      for (var i = n(t), s = -1, r = e.length; ++s < r;) {
        i.remove(e[s]);
      }
    }

    function r(t) {
      return function () {
        i(this, t);
      };
    }

    function o(t) {
      return function () {
        s(this, t);
      };
    }

    function u(t, n) {
      return function () {
        (n.apply(this, arguments) ? i : s)(this, t);
      };
    }

    function f(e, i) {
      var s = t(e + "");

      if (arguments.length < 2) {
        for (var f = n(this.node()), c = -1, a = s.length; ++c < a;) {
          if (!f.contains(s[c])) return !1;
        }

        return !0;
      }

      return this.each(("function" == typeof i ? u : i ? r : o)(s, i));
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = f, e.prototype = {
      add: function add(t) {
        this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
      },
      remove: function remove(t) {
        var n = this._names.indexOf(t);

        n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
      },
      contains: function contains(t) {
        return this._names.indexOf(t) >= 0;
      }
    };
  }, {}],
  "hAJ3": [function (require, module, exports) {
    "use strict";

    function t() {
      this.textContent = "";
    }

    function n(t) {
      return function () {
        this.textContent = t;
      };
    }

    function e(t) {
      return function () {
        var n = t.apply(this, arguments);
        this.textContent = null == n ? "" : n;
      };
    }

    function o(o) {
      return arguments.length ? this.each(null == o ? t : ("function" == typeof o ? e : n)(o)) : this.node().textContent;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o;
  }, {}],
  "FiSM": [function (require, module, exports) {
    "use strict";

    function n() {
      this.innerHTML = "";
    }

    function t(n) {
      return function () {
        this.innerHTML = n;
      };
    }

    function e(n) {
      return function () {
        var t = n.apply(this, arguments);
        this.innerHTML = null == t ? "" : t;
      };
    }

    function i(i) {
      return arguments.length ? this.each(null == i ? n : ("function" == typeof i ? e : t)(i)) : this.node().innerHTML;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i;
  }, {}],
  "gvi7": [function (require, module, exports) {
    "use strict";

    function e() {
      this.nextSibling && this.parentNode.appendChild(this);
    }

    function t() {
      return this.each(e);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "gv51": [function (require, module, exports) {
    "use strict";

    function e() {
      this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }

    function t() {
      return this.each(e);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "efv1": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("../creator"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(t) {
      var r = "function" == typeof t ? t : (0, e.default)(t);
      return this.select(function () {
        return this.appendChild(r.apply(this, arguments));
      });
    }
  }, {
    "../creator": "EIjt"
  }],
  "ILQF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n;
    var e = r(require("../creator")),
        t = r(require("../selector"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u() {
      return null;
    }

    function n(r, n) {
      var l = "function" == typeof r ? r : (0, e.default)(r),
          o = null == n ? u : "function" == typeof n ? n : (0, t.default)(n);
      return this.select(function () {
        return this.insertBefore(l.apply(this, arguments), o.apply(this, arguments) || null);
      });
    }
  }, {
    "../creator": "EIjt",
    "../selector": "xs2I"
  }],
  "quBB": [function (require, module, exports) {
    "use strict";

    function e() {
      var e = this.parentNode;
      e && e.removeChild(this);
    }

    function t() {
      return this.each(e);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "UpcG": [function (require, module, exports) {
    "use strict";

    function e() {
      var e = this.cloneNode(!1),
          t = this.parentNode;
      return t ? t.insertBefore(e, this.nextSibling) : e;
    }

    function t() {
      var e = this.cloneNode(!0),
          t = this.parentNode;
      return t ? t.insertBefore(e, this.nextSibling) : e;
    }

    function n(n) {
      return this.select(n ? t : e);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n;
  }, {}],
  "fuQ8": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return arguments.length ? this.property("__data__", e) : this.node().__data__;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "j4rF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = a, exports.customEvent = p, exports.event = void 0;
    var e = {},
        t = null;

    if (exports.event = t, "undefined" != typeof document) {
      var n = document.documentElement;
      "onmouseenter" in n || (e = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
      });
    }

    function r(e, t, n) {
      return e = i(e, t, n), function (t) {
        var n = t.relatedTarget;
        n && (n === this || 8 & n.compareDocumentPosition(this)) || e.call(this, t);
      };
    }

    function i(e, n, r) {
      return function (i) {
        var o = t;
        exports.event = t = i;

        try {
          e.call(this, this.__data__, n, r);
        } finally {
          exports.event = t = o;
        }
      };
    }

    function o(e) {
      return e.trim().split(/^|\s+/).map(function (e) {
        var t = "",
            n = e.indexOf(".");
        return n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), {
          type: e,
          name: t
        };
      });
    }

    function s(e) {
      return function () {
        var t = this.__on;

        if (t) {
          for (var n, r = 0, i = -1, o = t.length; r < o; ++r) {
            n = t[r], e.type && n.type !== e.type || n.name !== e.name ? t[++i] = n : this.removeEventListener(n.type, n.listener, n.capture);
          }

          ++i ? t.length = i : delete this.__on;
        }
      };
    }

    function u(t, n, o) {
      var s = e.hasOwnProperty(t.type) ? r : i;
      return function (e, r, i) {
        var u,
            a = this.__on,
            p = s(n, r, i);
        if (a) for (var l = 0, v = a.length; l < v; ++l) {
          if ((u = a[l]).type === t.type && u.name === t.name) return this.removeEventListener(u.type, u.listener, u.capture), this.addEventListener(u.type, u.listener = p, u.capture = o), void (u.value = n);
        }
        this.addEventListener(t.type, p, o), u = {
          type: t.type,
          name: t.name,
          value: n,
          listener: p,
          capture: o
        }, a ? a.push(u) : this.__on = [u];
      };
    }

    function a(e, t, n) {
      var r,
          i,
          a = o(e + ""),
          p = a.length;

      if (!(arguments.length < 2)) {
        for (l = t ? u : s, null == n && (n = !1), r = 0; r < p; ++r) {
          this.each(l(a[r], t, n));
        }

        return this;
      }

      var l = this.node().__on;

      if (l) for (var v, f = 0, c = l.length; f < c; ++f) {
        for (r = 0, v = l[f]; r < p; ++r) {
          if ((i = a[r]).type === v.type && i.name === v.name) return v.value;
        }
      }
    }

    function p(e, n, r, i) {
      var o = t;
      e.sourceEvent = t, exports.event = t = e;

      try {
        return n.apply(r, i);
      } finally {
        exports.event = t = o;
      }
    }
  }, {}],
  "enVu": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var t = e(require("../window"));

    function e(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function n(e, n, u) {
      var i = (0, t.default)(e),
          r = i.CustomEvent;
      "function" == typeof r ? r = new r(n, u) : (r = i.document.createEvent("Event"), u ? (r.initEvent(n, u.bubbles, u.cancelable), r.detail = u.detail) : r.initEvent(n, !1, !1)), e.dispatchEvent(r);
    }

    function u(t, e) {
      return function () {
        return n(this, t, e);
      };
    }

    function i(t, e) {
      return function () {
        return n(this, t, e.apply(this, arguments));
      };
    }

    function r(t, e) {
      return this.each(("function" == typeof e ? i : u)(t, e));
    }
  }, {
    "../window": "D1dR"
  }],
  "jpDG": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.Selection = B, exports.default = exports.root = void 0;

    var e = S(require("./select")),
        r = S(require("./selectAll")),
        t = S(require("./filter")),
        u = S(require("./data")),
        l = S(require("./enter")),
        a = S(require("./exit")),
        d = S(require("./join")),
        i = S(require("./merge")),
        o = S(require("./order")),
        f = S(require("./sort")),
        s = S(require("./call")),
        n = S(require("./nodes")),
        q = S(require("./node")),
        p = S(require("./size")),
        c = S(require("./empty")),
        m = S(require("./each")),
        x = S(require("./attr")),
        y = S(require("./style")),
        h = S(require("./property")),
        v = S(require("./classed")),
        _ = S(require("./text")),
        g = S(require("./html")),
        j = S(require("./raise")),
        w = S(require("./lower")),
        z = S(require("./append")),
        A = S(require("./insert")),
        M = S(require("./remove")),
        b = S(require("./clone")),
        E = S(require("./datum")),
        O = S(require("./on")),
        P = S(require("./dispatch"));

    function S(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var k = [null];

    function B(e, r) {
      this._groups = e, this._parents = r;
    }

    function C() {
      return new B([[document.documentElement]], k);
    }

    exports.root = k, B.prototype = C.prototype = {
      constructor: B,
      select: e.default,
      selectAll: r.default,
      filter: t.default,
      data: u.default,
      enter: l.default,
      exit: a.default,
      join: d.default,
      merge: i.default,
      order: o.default,
      sort: f.default,
      call: s.default,
      nodes: n.default,
      node: q.default,
      size: p.default,
      empty: c.default,
      each: m.default,
      attr: x.default,
      style: y.default,
      property: h.default,
      classed: v.default,
      text: _.default,
      html: g.default,
      raise: j.default,
      lower: w.default,
      append: z.default,
      insert: A.default,
      remove: M.default,
      clone: b.default,
      datum: E.default,
      on: O.default,
      dispatch: P.default
    };
    var D = C;
    exports.default = D;
  }, {
    "./select": "LRy5",
    "./selectAll": "ijGs",
    "./filter": "hrVj",
    "./data": "QmPF",
    "./enter": "wXei",
    "./exit": "tchs",
    "./join": "oO6z",
    "./merge": "i5nV",
    "./order": "RepQ",
    "./sort": "D8yW",
    "./call": "pbQ4",
    "./nodes": "kO0T",
    "./node": "xFUP",
    "./size": "w9fp",
    "./empty": "UFOA",
    "./each": "q4XW",
    "./attr": "Tdf9",
    "./style": "VXjm",
    "./property": "QOWh",
    "./classed": "rtNW",
    "./text": "hAJ3",
    "./html": "FiSM",
    "./raise": "gvi7",
    "./lower": "gv51",
    "./append": "efv1",
    "./insert": "ILQF",
    "./remove": "quBB",
    "./clone": "UpcG",
    "./datum": "fuQ8",
    "./on": "j4rF",
    "./dispatch": "enVu"
  }],
  "iTOx": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = require("./selection/index");

    function t(t) {
      return "string" == typeof t ? new e.Selection([[document.querySelector(t)]], [document.documentElement]) : new e.Selection([[t]], e.root);
    }
  }, {
    "./selection/index": "jpDG"
  }],
  "tmZM": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;
    var e = r(require("./creator")),
        t = r(require("./select"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(r) {
      return (0, t.default)((0, e.default)(r).call(document.documentElement));
    }
  }, {
    "./creator": "EIjt",
    "./select": "iTOx"
  }],
  "JuPP": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
    var t = 0;

    function e() {
      return new r();
    }

    function r() {
      this._ = "@" + (++t).toString(36);
    }

    r.prototype = e.prototype = {
      constructor: r,
      get: function get(t) {
        for (var e = this._; !(e in t);) {
          if (!(t = t.parentNode)) return;
        }

        return t[e];
      },
      set: function set(t, e) {
        return t[this._] = e;
      },
      remove: function remove(t) {
        return this._ in t && delete t[this._];
      },
      toString: function toString() {
        return this._;
      }
    };
  }, {}],
  "mu9P": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./selection/on");

    function r() {
      for (var r, t = e.event; r = t.sourceEvent;) {
        t = r;
      }

      return t;
    }
  }, {
    "./selection/on": "j4rF"
  }],
  "ZIl1": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      var n = e.ownerSVGElement || e;

      if (n.createSVGPoint) {
        var r = n.createSVGPoint();
        return r.x = t.clientX, r.y = t.clientY, [(r = r.matrixTransform(e.getScreenCTM().inverse())).x, r.y];
      }

      var i = e.getBoundingClientRect();
      return [t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop];
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "lbxf": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./sourceEvent")),
        u = r(require("./point"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r) {
      var t = (0, e.default)();
      return t.changedTouches && (t = t.changedTouches[0]), (0, u.default)(r, t);
    }
  }, {
    "./sourceEvent": "mu9P",
    "./point": "ZIl1"
  }],
  "toE0": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = require("./selection/index");

    function t(t) {
      return "string" == typeof t ? new e.Selection([document.querySelectorAll(t)], [document.documentElement]) : new e.Selection([null == t ? [] : t], e.root);
    }
  }, {
    "./selection/index": "jpDG"
  }],
  "Mh7G": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;
    var e = t(require("./sourceEvent")),
        r = t(require("./point"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(t, u, n) {
      arguments.length < 3 && (n = u, u = (0, e.default)().changedTouches);

      for (var i, l = 0, o = u ? u.length : 0; l < o; ++l) {
        if ((i = u[l]).identifier === n) return (0, r.default)(t, i);
      }

      return null;
    }
  }, {
    "./sourceEvent": "mu9P",
    "./point": "ZIl1"
  }],
  "RG1U": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;
    var e = t(require("./sourceEvent")),
        r = t(require("./point"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(t, u) {
      null == u && (u = (0, e.default)().touches);

      for (var n = 0, o = u ? u.length : 0, l = new Array(o); n < o; ++n) {
        l[n] = (0, r.default)(t, u[n]);
      }

      return l;
    }
  }, {
    "./sourceEvent": "mu9P",
    "./point": "ZIl1"
  }],
  "lm1C": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "create", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "creator", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "local", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "matcher", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "mouse", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "namespace", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "namespaces", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(exports, "clientPoint", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), Object.defineProperty(exports, "select", {
      enumerable: !0,
      get: function get() {
        return l.default;
      }
    }), Object.defineProperty(exports, "selectAll", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "selection", {
      enumerable: !0,
      get: function get() {
        return a.default;
      }
    }), Object.defineProperty(exports, "selector", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    }), Object.defineProperty(exports, "selectorAll", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(exports, "style", {
      enumerable: !0,
      get: function get() {
        return d.styleValue;
      }
    }), Object.defineProperty(exports, "touch", {
      enumerable: !0,
      get: function get() {
        return b.default;
      }
    }), Object.defineProperty(exports, "touches", {
      enumerable: !0,
      get: function get() {
        return m.default;
      }
    }), Object.defineProperty(exports, "window", {
      enumerable: !0,
      get: function get() {
        return y.default;
      }
    }), Object.defineProperty(exports, "event", {
      enumerable: !0,
      get: function get() {
        return x.event;
      }
    }), Object.defineProperty(exports, "customEvent", {
      enumerable: !0,
      get: function get() {
        return x.customEvent;
      }
    });

    var e = P(require("./create")),
        t = P(require("./creator")),
        r = P(require("./local")),
        n = P(require("./matcher")),
        u = P(require("./mouse")),
        o = P(require("./namespace")),
        c = P(require("./namespaces")),
        i = P(require("./point")),
        l = P(require("./select")),
        f = P(require("./selectAll")),
        a = P(require("./selection/index")),
        s = P(require("./selector")),
        p = P(require("./selectorAll")),
        d = require("./selection/style"),
        b = P(require("./touch")),
        m = P(require("./touches")),
        y = P(require("./window")),
        x = require("./selection/on");

    function P(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./create": "tmZM",
    "./creator": "EIjt",
    "./local": "JuPP",
    "./matcher": "PkZe",
    "./mouse": "lbxf",
    "./namespace": "OLJ5",
    "./namespaces": "UzOB",
    "./point": "ZIl1",
    "./select": "iTOx",
    "./selectAll": "toE0",
    "./selection/index": "jpDG",
    "./selector": "xs2I",
    "./selectorAll": "mHY5",
    "./selection/style": "VXjm",
    "./touch": "Mh7G",
    "./touches": "RG1U",
    "./window": "D1dR",
    "./selection/on": "j4rF"
  }],
  "DCEg": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.nopropagation = t, exports.default = o;

    var e = require("d3-selection");

    function t() {
      e.event.stopImmediatePropagation();
    }

    function o() {
      e.event.preventDefault(), e.event.stopImmediatePropagation();
    }
  }, {
    "d3-selection": "lm1C"
  }],
  "rD9l": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l, exports.yesdrag = r;

    var e = require("d3-selection"),
        t = n(require("./noevent.js"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function l(n) {
      var l = n.document.documentElement,
          r = (0, e.select)(n).on("dragstart.drag", t.default, !0);
      "onselectstart" in l ? r.on("selectstart.drag", t.default, !0) : (l.__noselect = l.style.MozUserSelect, l.style.MozUserSelect = "none");
    }

    function r(n, l) {
      var r = n.document.documentElement,
          o = (0, e.select)(n).on("dragstart.drag", null);
      l && (o.on("click.drag", t.default, !0), setTimeout(function () {
        o.on("click.drag", null);
      }, 0)), "onselectstart" in r ? o.on("selectstart.drag", null) : (r.style.MozUserSelect = r.__noselect, delete r.__noselect);
    }
  }, {
    "d3-selection": "lm1C",
    "./noevent.js": "DCEg"
  }],
  "IkUE": [function (require, module, exports) {
    "use strict";

    function t(t, i, s, e, h, r, o, n, p, u) {
      this.target = t, this.type = i, this.subject = s, this.identifier = e, this.active = h, this.x = r, this.y = o, this.dx = n, this.dy = p, this._ = u;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t, t.prototype.on = function () {
      var t = this._.on.apply(this._, arguments);

      return t === this._ ? this : t;
    };
  }, {}],
  "fG09": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = p;

    var e = require("d3-dispatch"),
        t = require("d3-selection"),
        n = c(require("./nodrag.js")),
        r = c(require("./noevent.js")),
        o = i(require("./constant.js")),
        u = i(require("./event.js"));

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function a() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return a = function a() {
        return e;
      }, e;
    }

    function c(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var t = a();
      if (t && t.has(e)) return t.get(e);
      var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var o in e) {
        if (Object.prototype.hasOwnProperty.call(e, o)) {
          var u = r ? Object.getOwnPropertyDescriptor(e, o) : null;
          u && (u.get || u.set) ? Object.defineProperty(n, o, u) : n[o] = e[o];
        }
      }

      return n.default = e, t && t.set(e, n), n;
    }

    function f() {
      return !t.event.ctrlKey && !t.event.button;
    }

    function l() {
      return this.parentNode;
    }

    function s(e) {
      return null == e ? {
        x: t.event.x,
        y: t.event.y
      } : e;
    }

    function d() {
      return navigator.maxTouchPoints || "ontouchstart" in this;
    }

    function p() {
      var i,
          a,
          c,
          p,
          v = f,
          h = l,
          g = s,
          y = d,
          m = {},
          b = (0, e.dispatch)("start", "drag", "end"),
          j = 0,
          w = 0;

      function O(e) {
        e.on("mousedown.drag", q).filter(y).on("touchstart.drag", M).on("touchmove.drag", T).on("touchend.drag touchcancel.drag", _).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
      }

      function q() {
        if (!p && v.apply(this, arguments)) {
          var e = k("mouse", h.apply(this, arguments), t.mouse, this, arguments);
          e && ((0, t.select)(t.event.view).on("mousemove.drag", P, !0).on("mouseup.drag", x, !0), (0, n.default)(t.event.view), (0, r.nopropagation)(), c = !1, i = t.event.clientX, a = t.event.clientY, e("start"));
        }
      }

      function P() {
        if ((0, r.default)(), !c) {
          var e = t.event.clientX - i,
              n = t.event.clientY - a;
          c = e * e + n * n > w;
        }

        m.mouse("drag");
      }

      function x() {
        (0, t.select)(t.event.view).on("mousemove.drag mouseup.drag", null), (0, n.yesdrag)(t.event.view, c), (0, r.default)(), m.mouse("end");
      }

      function M() {
        if (v.apply(this, arguments)) {
          var e,
              n,
              o = t.event.changedTouches,
              u = h.apply(this, arguments),
              i = o.length;

          for (e = 0; e < i; ++e) {
            (n = k(o[e].identifier, u, t.touch, this, arguments)) && ((0, r.nopropagation)(), n("start"));
          }
        }
      }

      function T() {
        var e,
            n,
            o = t.event.changedTouches,
            u = o.length;

        for (e = 0; e < u; ++e) {
          (n = m[o[e].identifier]) && ((0, r.default)(), n("drag"));
        }
      }

      function _() {
        var e,
            n,
            o = t.event.changedTouches,
            u = o.length;

        for (p && clearTimeout(p), p = setTimeout(function () {
          p = null;
        }, 500), e = 0; e < u; ++e) {
          (n = m[o[e].identifier]) && ((0, r.nopropagation)(), n("end"));
        }
      }

      function k(e, n, r, o, i) {
        var a,
            c,
            f,
            l = r(n, e),
            s = b.copy();
        if ((0, t.customEvent)(new u.default(O, "beforestart", a, e, j, l[0], l[1], 0, 0, s), function () {
          return null != (t.event.subject = a = g.apply(o, i)) && (c = a.x - l[0] || 0, f = a.y - l[1] || 0, !0);
        })) return function d(p) {
          var v,
              h = l;

          switch (p) {
            case "start":
              m[e] = d, v = j++;
              break;

            case "end":
              delete m[e], --j;

            case "drag":
              l = r(n, e), v = j;
          }

          (0, t.customEvent)(new u.default(O, p, a, e, v, l[0] + c, l[1] + f, l[0] - h[0], l[1] - h[1], s), s.apply, s, [p, o, i]);
        };
      }

      return O.filter = function (e) {
        return arguments.length ? (v = "function" == typeof e ? e : (0, o.default)(!!e), O) : v;
      }, O.container = function (e) {
        return arguments.length ? (h = "function" == typeof e ? e : (0, o.default)(e), O) : h;
      }, O.subject = function (e) {
        return arguments.length ? (g = "function" == typeof e ? e : (0, o.default)(e), O) : g;
      }, O.touchable = function (e) {
        return arguments.length ? (y = "function" == typeof e ? e : (0, o.default)(!!e), O) : y;
      }, O.on = function () {
        var e = b.on.apply(b, arguments);
        return e === b ? O : e;
      }, O.clickDistance = function (e) {
        return arguments.length ? (w = (e = +e) * e, O) : Math.sqrt(w);
      }, O;
    }
  }, {
    "d3-dispatch": "UUCs",
    "d3-selection": "lm1C",
    "./nodrag.js": "rD9l",
    "./noevent.js": "DCEg",
    "./constant.js": "OY6d",
    "./event.js": "IkUE"
  }],
  "LrBi": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "drag", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "dragDisable", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "dragEnable", {
      enumerable: !0,
      get: function get() {
        return r.yesdrag;
      }
    });
    var e = u(require("./drag.js")),
        r = n(require("./nodrag.js"));

    function t() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return t = function t() {
        return e;
      }, e;
    }

    function n(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var r = t();
      if (r && r.has(e)) return r.get(e);
      var n = {},
          u = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var o in e) {
        if (Object.prototype.hasOwnProperty.call(e, o)) {
          var a = u ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o];
        }
      }

      return n.default = e, r && r.set(e, n), n;
    }

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./drag.js": "fG09",
    "./nodrag.js": "rD9l"
  }],
  "CSb3": [function (require, module, exports) {
    "use strict";

    function t(t, e, r) {
      t.prototype = e.prototype = r, r.constructor = t;
    }

    function e(t, e) {
      var r = Object.create(t.prototype);

      for (var o in e) {
        r[o] = e[o];
      }

      return r;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t, exports.extend = e;
  }, {}],
  "UAf0": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.Color = n, exports.default = k, exports.rgbConvert = M, exports.rgb = N, exports.Rgb = O, exports.hslConvert = P, exports.hsl = $, exports.brighter = exports.darker = void 0;
    var e = r(require("./define.js"));

    function t() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return t = function t() {
        return e;
      }, e;
    }

    function r(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var r = t();
      if (r && r.has(e)) return r.get(e);
      var n = {},
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var a in e) {
        if (Object.prototype.hasOwnProperty.call(e, a)) {
          var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
          o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a];
        }
      }

      return n.default = e, r && r.set(e, n), n;
    }

    function n() {}

    var i = .7;
    exports.darker = i;
    var a = 1 / i;
    exports.brighter = a;
    var o = "\\s*([+-]?\\d+)\\s*",
        s = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        l = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        h = /^#([0-9a-f]{3,8})$/,
        u = new RegExp("^rgb\\(" + [o, o, o] + "\\)$"),
        g = new RegExp("^rgb\\(" + [l, l, l] + "\\)$"),
        c = new RegExp("^rgba\\(" + [o, o, o, s] + "\\)$"),
        d = new RegExp("^rgba\\(" + [l, l, l, s] + "\\)$"),
        p = new RegExp("^hsl\\(" + [s, l, l] + "\\)$"),
        f = new RegExp("^hsla\\(" + [s, l, l, s] + "\\)$"),
        b = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074
    };

    function y() {
      return this.rgb().formatHex();
    }

    function m() {
      return P(this).formatHsl();
    }

    function w() {
      return this.rgb().formatRgb();
    }

    function k(e) {
      var t, r;
      return e = (e + "").trim().toLowerCase(), (t = h.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), 6 === r ? x(t) : 3 === r ? new O(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | 240 & t, (15 & t) << 4 | 15 & t, 1) : 8 === r ? new O(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (255 & t) / 255) : 4 === r ? new O(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | 240 & t, ((15 & t) << 4 | 15 & t) / 255) : null) : (t = u.exec(e)) ? new O(t[1], t[2], t[3], 1) : (t = g.exec(e)) ? new O(255 * t[1] / 100, 255 * t[2] / 100, 255 * t[3] / 100, 1) : (t = c.exec(e)) ? v(t[1], t[2], t[3], t[4]) : (t = d.exec(e)) ? v(255 * t[1] / 100, 255 * t[2] / 100, 255 * t[3] / 100, t[4]) : (t = p.exec(e)) ? E(t[1], t[2] / 100, t[3] / 100, 1) : (t = f.exec(e)) ? E(t[1], t[2] / 100, t[3] / 100, t[4]) : b.hasOwnProperty(e) ? x(b[e]) : "transparent" === e ? new O(NaN, NaN, NaN, 0) : null;
    }

    function x(e) {
      return new O(e >> 16 & 255, e >> 8 & 255, 255 & e, 1);
    }

    function v(e, t, r, n) {
      return n <= 0 && (e = t = r = NaN), new O(e, t, r, n);
    }

    function M(e) {
      return e instanceof n || (e = k(e)), e ? new O((e = e.rgb()).r, e.g, e.b, e.opacity) : new O();
    }

    function N(e, t, r, n) {
      return 1 === arguments.length ? M(e) : new O(e, t, r, null == n ? 1 : n);
    }

    function O(e, t, r, n) {
      this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
    }

    function j() {
      return "#" + R(this.r) + R(this.g) + R(this.b);
    }

    function q() {
      var e = this.opacity;
      return (1 === (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === e ? ")" : ", " + e + ")");
    }

    function R(e) {
      return ((e = Math.max(0, Math.min(255, Math.round(e) || 0))) < 16 ? "0" : "") + e.toString(16);
    }

    function E(e, t, r, n) {
      return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new H(e, t, r, n);
    }

    function P(e) {
      if (e instanceof H) return new H(e.h, e.s, e.l, e.opacity);
      if (e instanceof n || (e = k(e)), !e) return new H();
      if (e instanceof H) return e;
      var t = (e = e.rgb()).r / 255,
          r = e.g / 255,
          i = e.b / 255,
          a = Math.min(t, r, i),
          o = Math.max(t, r, i),
          s = NaN,
          l = o - a,
          h = (o + a) / 2;
      return l ? (s = t === o ? (r - i) / l + 6 * (r < i) : r === o ? (i - t) / l + 2 : (t - r) / l + 4, l /= h < .5 ? o + a : 2 - o - a, s *= 60) : l = h > 0 && h < 1 ? 0 : s, new H(s, l, h, e.opacity);
    }

    function $(e, t, r, n) {
      return 1 === arguments.length ? P(e) : new H(e, t, r, null == n ? 1 : n);
    }

    function H(e, t, r, n) {
      this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
    }

    function C(e, t, r) {
      return 255 * (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t);
    }

    (0, e.default)(n, k, {
      copy: function copy(e) {
        return Object.assign(new this.constructor(), this, e);
      },
      displayable: function displayable() {
        return this.rgb().displayable();
      },
      hex: y,
      formatHex: y,
      formatHsl: m,
      formatRgb: w,
      toString: w
    }), (0, e.default)(O, N, (0, e.extend)(n, {
      brighter: function brighter(e) {
        return e = null == e ? a : Math.pow(a, e), new O(this.r * e, this.g * e, this.b * e, this.opacity);
      },
      darker: function darker(e) {
        return e = null == e ? i : Math.pow(i, e), new O(this.r * e, this.g * e, this.b * e, this.opacity);
      },
      rgb: function rgb() {
        return this;
      },
      displayable: function displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
      },
      hex: j,
      formatHex: j,
      formatRgb: q,
      toString: q
    })), (0, e.default)(H, $, (0, e.extend)(n, {
      brighter: function brighter(e) {
        return e = null == e ? a : Math.pow(a, e), new H(this.h, this.s, this.l * e, this.opacity);
      },
      darker: function darker(e) {
        return e = null == e ? i : Math.pow(i, e), new H(this.h, this.s, this.l * e, this.opacity);
      },
      rgb: function rgb() {
        var e = this.h % 360 + 360 * (this.h < 0),
            t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
            r = this.l,
            n = r + (r < .5 ? r : 1 - r) * t,
            i = 2 * r - n;
        return new O(C(e >= 240 ? e - 240 : e + 120, i, n), C(e, i, n), C(e < 120 ? e + 240 : e - 120, i, n), this.opacity);
      },
      displayable: function displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
      },
      formatHsl: function formatHsl() {
        var e = this.opacity;
        return (1 === (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === e ? ")" : ", " + e + ")");
      }
    }));
  }, {
    "./define.js": "CSb3"
  }],
  "ykIB": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.rad2deg = exports.deg2rad = void 0;
    var e = Math.PI / 180;
    exports.deg2rad = e;
    var r = 180 / Math.PI;
    exports.rad2deg = r;
  }, {}],
  "n21X": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.gray = b, exports.default = y, exports.Lab = w, exports.lch = N, exports.hcl = x, exports.Hcl = O;

    var t = i(require("./define.js")),
        n = require("./color.js"),
        e = require("./math.js");

    function r() {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap();
      return r = function r() {
        return t;
      }, t;
    }

    function i(t) {
      if (t && t.__esModule) return t;
      if (null === t || "object" != _typeof(t) && "function" != typeof t) return {
        default: t
      };
      var n = r();
      if (n && n.has(t)) return n.get(t);
      var e = {},
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var o in t) {
        if (Object.prototype.hasOwnProperty.call(t, o)) {
          var u = i ? Object.getOwnPropertyDescriptor(t, o) : null;
          u && (u.get || u.set) ? Object.defineProperty(e, o, u) : e[o] = t[o];
        }
      }

      return e.default = t, n && n.set(t, e), e;
    }

    var o = 18,
        u = .96422,
        a = 1,
        c = .82521,
        s = 4 / 29,
        l = 6 / 29,
        h = 3 * l * l,
        f = l * l * l;

    function p(t) {
      if (t instanceof w) return new w(t.l, t.a, t.b, t.opacity);
      if (t instanceof O) return P(t);
      t instanceof n.Rgb || (t = (0, n.rgbConvert)(t));
      var e,
          r,
          i = M(t.r),
          o = M(t.g),
          s = M(t.b),
          l = d((.2225045 * i + .7168786 * o + .0606169 * s) / a);
      return i === o && o === s ? e = r = l : (e = d((.4360747 * i + .3850649 * o + .1430804 * s) / u), r = d((.0139322 * i + .0971045 * o + .7141733 * s) / c)), new w(116 * l - 16, 500 * (e - l), 200 * (l - r), t.opacity);
    }

    function b(t, n) {
      return new w(t, 0, 0, null == n ? 1 : n);
    }

    function y(t, n, e, r) {
      return 1 === arguments.length ? p(t) : new w(t, n, e, null == r ? 1 : r);
    }

    function w(t, n, e, r) {
      this.l = +t, this.a = +n, this.b = +e, this.opacity = +r;
    }

    function d(t) {
      return t > f ? Math.pow(t, 1 / 3) : t / h + s;
    }

    function g(t) {
      return t > l ? t * t * t : h * (t - s);
    }

    function v(t) {
      return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
    }

    function M(t) {
      return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
    }

    function j(t) {
      if (t instanceof O) return new O(t.h, t.c, t.l, t.opacity);
      if (t instanceof w || (t = p(t)), 0 === t.a && 0 === t.b) return new O(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
      var n = Math.atan2(t.b, t.a) * e.rad2deg;
      return new O(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
    }

    function N(t, n, e, r) {
      return 1 === arguments.length ? j(t) : new O(e, n, t, null == r ? 1 : r);
    }

    function x(t, n, e, r) {
      return 1 === arguments.length ? j(t) : new O(t, n, e, null == r ? 1 : r);
    }

    function O(t, n, e, r) {
      this.h = +t, this.c = +n, this.l = +e, this.opacity = +r;
    }

    function P(t) {
      if (isNaN(t.h)) return new w(t.l, 0, 0, t.opacity);
      var n = t.h * e.deg2rad;
      return new w(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
    }

    (0, t.default)(w, y, (0, t.extend)(n.Color, {
      brighter: function brighter(t) {
        return new w(this.l + o * (null == t ? 1 : t), this.a, this.b, this.opacity);
      },
      darker: function darker(t) {
        return new w(this.l - o * (null == t ? 1 : t), this.a, this.b, this.opacity);
      },
      rgb: function rgb() {
        var t = (this.l + 16) / 116,
            e = isNaN(this.a) ? t : t + this.a / 500,
            r = isNaN(this.b) ? t : t - this.b / 200;
        return e = u * g(e), t = a * g(t), r = c * g(r), new n.Rgb(v(3.1338561 * e - 1.6168667 * t - .4906146 * r), v(-.9787684 * e + 1.9161415 * t + .033454 * r), v(.0719453 * e - .2289914 * t + 1.4052427 * r), this.opacity);
      }
    })), (0, t.default)(O, x, (0, t.extend)(n.Color, {
      brighter: function brighter(t) {
        return new O(this.h, this.c, this.l + o * (null == t ? 1 : t), this.opacity);
      },
      darker: function darker(t) {
        return new O(this.h, this.c, this.l - o * (null == t ? 1 : t), this.opacity);
      },
      rgb: function rgb() {
        return P(this).rgb();
      }
    }));
  }, {
    "./define.js": "CSb3",
    "./color.js": "UAf0",
    "./math.js": "ykIB"
  }],
  "aDX2": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = d, exports.Cubehelix = b;

    var t = i(require("./define.js")),
        e = require("./color.js"),
        r = require("./math.js");

    function n() {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap();
      return n = function n() {
        return t;
      }, t;
    }

    function i(t) {
      if (t && t.__esModule) return t;
      if (null === t || "object" != _typeof(t) && "function" != typeof t) return {
        default: t
      };
      var e = n();
      if (e && e.has(t)) return e.get(t);
      var r = {},
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var o in t) {
        if (Object.prototype.hasOwnProperty.call(t, o)) {
          var s = i ? Object.getOwnPropertyDescriptor(t, o) : null;
          s && (s.get || s.set) ? Object.defineProperty(r, o, s) : r[o] = t[o];
        }
      }

      return r.default = t, e && e.set(t, r), r;
    }

    var o = -.14861,
        s = 1.78277,
        a = -.29227,
        u = -.90649,
        h = 1.97294,
        c = h * u,
        f = h * s,
        l = s * a - u * o;

    function p(t) {
      if (t instanceof b) return new b(t.h, t.s, t.l, t.opacity);
      t instanceof e.Rgb || (t = (0, e.rgbConvert)(t));
      var n = t.r / 255,
          i = t.g / 255,
          o = t.b / 255,
          s = (l * o + c * n - f * i) / (l + c - f),
          p = o - s,
          d = (h * (i - s) - a * p) / u,
          y = Math.sqrt(d * d + p * p) / (h * s * (1 - s)),
          g = y ? Math.atan2(d, p) * r.rad2deg - 120 : NaN;
      return new b(g < 0 ? g + 360 : g, y, s, t.opacity);
    }

    function d(t, e, r, n) {
      return 1 === arguments.length ? p(t) : new b(t, e, r, null == n ? 1 : n);
    }

    function b(t, e, r, n) {
      this.h = +t, this.s = +e, this.l = +r, this.opacity = +n;
    }

    (0, t.default)(b, d, (0, t.extend)(e.Color, {
      brighter: function brighter(t) {
        return t = null == t ? e.brighter : Math.pow(e.brighter, t), new b(this.h, this.s, this.l * t, this.opacity);
      },
      darker: function darker(t) {
        return t = null == t ? e.darker : Math.pow(e.darker, t), new b(this.h, this.s, this.l * t, this.opacity);
      },
      rgb: function rgb() {
        var t = isNaN(this.h) ? 0 : (this.h + 120) * r.deg2rad,
            n = +this.l,
            i = isNaN(this.s) ? 0 : this.s * n * (1 - n),
            c = Math.cos(t),
            f = Math.sin(t);
        return new e.Rgb(255 * (n + i * (o * c + s * f)), 255 * (n + i * (a * c + u * f)), 255 * (n + i * (h * c)), this.opacity);
      }
    }));
  }, {
    "./define.js": "CSb3",
    "./color.js": "UAf0",
    "./math.js": "ykIB"
  }],
  "TJ2K": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "color", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "rgb", {
      enumerable: !0,
      get: function get() {
        return e.rgb;
      }
    }), Object.defineProperty(exports, "hsl", {
      enumerable: !0,
      get: function get() {
        return e.hsl;
      }
    }), Object.defineProperty(exports, "lab", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "hcl", {
      enumerable: !0,
      get: function get() {
        return r.hcl;
      }
    }), Object.defineProperty(exports, "lch", {
      enumerable: !0,
      get: function get() {
        return r.lch;
      }
    }), Object.defineProperty(exports, "gray", {
      enumerable: !0,
      get: function get() {
        return r.gray;
      }
    }), Object.defineProperty(exports, "cubehelix", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    });
    var e = o(require("./color.js")),
        r = o(require("./lab.js")),
        t = n(require("./cubehelix.js"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return u = function u() {
        return e;
      }, e;
    }

    function o(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var r = u();
      if (r && r.has(e)) return r.get(e);
      var t = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var o in e) {
        if (Object.prototype.hasOwnProperty.call(e, o)) {
          var c = n ? Object.getOwnPropertyDescriptor(e, o) : null;
          c && (c.get || c.set) ? Object.defineProperty(t, o, c) : t[o] = e[o];
        }
      }

      return t.default = e, r && r.set(e, t), t;
    }
  }, {
    "./color.js": "UAf0",
    "./lab.js": "n21X",
    "./cubehelix.js": "aDX2"
  }],
  "mIuw": [function (require, module, exports) {
    "use strict";

    function e(e, r, t, n, o) {
      var u = e * e,
          s = u * e;
      return ((1 - 3 * e + 3 * u - s) * r + (4 - 6 * u + 3 * s) * t + (1 + 3 * e + 3 * u - 3 * s) * n + s * o) / 6;
    }

    function r(r) {
      var t = r.length - 1;
      return function (n) {
        var o = n <= 0 ? n = 0 : n >= 1 ? (n = 1, t - 1) : Math.floor(n * t),
            u = r[o],
            s = r[o + 1],
            a = o > 0 ? r[o - 1] : 2 * u - s,
            f = o < t - 1 ? r[o + 2] : 2 * s - u;
        return e((n - o / t) * t, a, u, s, f);
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.basis = e, exports.default = r;
  }, {}],
  "t9MF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./basis.js");

    function r(r) {
      var t = r.length;
      return function (s) {
        var u = Math.floor(((s %= 1) < 0 ? ++s : s) * t),
            a = r[(u + t - 1) % t],
            n = r[u % t],
            o = r[(u + 1) % t],
            i = r[(u + 2) % t];
        return (0, e.basis)((s - u / t) * t, a, n, o, i);
      };
    }
  }, {
    "./basis.js": "mIuw"
  }],
  "OW9X": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.hue = u, exports.gamma = o, exports.default = a;
    var t = e(require("./constant.js"));

    function e(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function n(t, e) {
      return function (n) {
        return t + n * e;
      };
    }

    function r(t, e, n) {
      return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function (r) {
        return Math.pow(t + r * e, n);
      };
    }

    function u(e, r) {
      var u = r - e;
      return u ? n(e, u > 180 || u < -180 ? u - 360 * Math.round(u / 360) : u) : (0, t.default)(isNaN(e) ? r : e);
    }

    function o(e) {
      return 1 == (e = +e) ? a : function (n, u) {
        return u - n ? r(n, u, e) : (0, t.default)(isNaN(n) ? u : n);
      };
    }

    function a(e, r) {
      var u = r - e;
      return u ? n(e, u) : (0, t.default)(isNaN(e) ? r : e);
    }
  }, {
    "./constant.js": "OY6d"
  }],
  "hw5o": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.rgbBasisClosed = exports.rgbBasis = exports.default = void 0;

    var r = require("d3-color"),
        e = a(require("./basis.js")),
        t = a(require("./basisClosed.js")),
        n = u(require("./color.js"));

    function o() {
      if ("function" != typeof WeakMap) return null;
      var r = new WeakMap();
      return o = function o() {
        return r;
      }, r;
    }

    function u(r) {
      if (r && r.__esModule) return r;
      if (null === r || "object" != _typeof(r) && "function" != typeof r) return {
        default: r
      };
      var e = o();
      if (e && e.has(r)) return e.get(r);
      var t = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var u in r) {
        if (Object.prototype.hasOwnProperty.call(r, u)) {
          var a = n ? Object.getOwnPropertyDescriptor(r, u) : null;
          a && (a.get || a.set) ? Object.defineProperty(t, u, a) : t[u] = r[u];
        }
      }

      return t.default = r, e && e.set(r, t), t;
    }

    function a(r) {
      return r && r.__esModule ? r : {
        default: r
      };
    }

    var i = function e(t) {
      var o = (0, n.gamma)(t);

      function u(e, t) {
        var u = o((e = (0, r.rgb)(e)).r, (t = (0, r.rgb)(t)).r),
            a = o(e.g, t.g),
            i = o(e.b, t.b),
            s = (0, n.default)(e.opacity, t.opacity);
        return function (r) {
          return e.r = u(r), e.g = a(r), e.b = i(r), e.opacity = s(r), e + "";
        };
      }

      return u.gamma = e, u;
    }(1);

    function s(e) {
      return function (t) {
        var n,
            o,
            u = t.length,
            a = new Array(u),
            i = new Array(u),
            s = new Array(u);

        for (n = 0; n < u; ++n) {
          o = (0, r.rgb)(t[n]), a[n] = o.r || 0, i[n] = o.g || 0, s[n] = o.b || 0;
        }

        return a = e(a), i = e(i), s = e(s), o.opacity = 1, function (r) {
          return o.r = a(r), o.g = i(r), o.b = s(r), o + "";
        };
      };
    }

    exports.default = i;
    var f = s(e.default);
    exports.rgbBasis = f;
    var c = s(t.default);
    exports.rgbBasisClosed = c;
  }, {
    "d3-color": "TJ2K",
    "./basis.js": "mIuw",
    "./basisClosed.js": "t9MF",
    "./color.js": "OW9X"
  }],
  "fCry": [function (require, module, exports) {
    "use strict";

    function e(e, r) {
      r || (r = []);
      var t,
          n = e ? Math.min(r.length, e.length) : 0,
          i = r.slice();
      return function (u) {
        for (t = 0; t < n; ++t) {
          i[t] = e[t] * (1 - u) + r[t] * u;
        }

        return i;
      };
    }

    function r(e) {
      return ArrayBuffer.isView(e) && !(e instanceof DataView);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e, exports.isNumberArray = r;
  }, {}],
  "j6Kl": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o, exports.genericArray = f;
    var e = u(require("./value.js")),
        r = n(require("./numberArray.js"));

    function t() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return t = function t() {
        return e;
      }, e;
    }

    function n(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var r = t();
      if (r && r.has(e)) return r.get(e);
      var n = {},
          u = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var o in e) {
        if (Object.prototype.hasOwnProperty.call(e, o)) {
          var f = u ? Object.getOwnPropertyDescriptor(e, o) : null;
          f && (f.get || f.set) ? Object.defineProperty(n, o, f) : n[o] = e[o];
        }
      }

      return n.default = e, r && r.set(e, n), n;
    }

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function o(e, t) {
      return ((0, r.isNumberArray)(t) ? r.default : f)(e, t);
    }

    function f(r, t) {
      var n,
          u = t ? t.length : 0,
          o = r ? Math.min(u, r.length) : 0,
          f = new Array(o),
          a = new Array(u);

      for (n = 0; n < o; ++n) {
        f[n] = (0, e.default)(r[n], t[n]);
      }

      for (; n < u; ++n) {
        a[n] = t[n];
      }

      return function (e) {
        for (n = 0; n < o; ++n) {
          a[n] = f[n](e);
        }

        return a;
      };
    }
  }, {
    "./value.js": "ONGM",
    "./numberArray.js": "fCry"
  }],
  "npIv": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      var r = new Date();
      return e = +e, t = +t, function (n) {
        return r.setTime(e * (1 - n) + t * n), r;
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "eUtU": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      return e = +e, t = +t, function (r) {
        return e * (1 - r) + t * r;
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "Ci2u": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("./value.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(t, r) {
      var u,
          n = {},
          o = {};

      for (u in null !== t && "object" == _typeof(t) || (t = {}), null !== r && "object" == _typeof(r) || (r = {}), r) {
        u in t ? n[u] = (0, e.default)(t[u], r[u]) : o[u] = r[u];
      }

      return function (e) {
        for (u in n) {
          o[u] = n[u](e);
        }

        return o;
      };
    }
  }, {
    "./value.js": "ONGM"
  }],
  "WNxQ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;
    var e = n(require("./number.js"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        t = new RegExp(r.source, "g");

    function u(e) {
      return function () {
        return e;
      };
    }

    function i(e) {
      return function (n) {
        return e(n) + "";
      };
    }

    function l(n, l) {
      var o,
          c,
          d,
          s = r.lastIndex = t.lastIndex = 0,
          f = -1,
          x = [],
          a = [];

      for (n += "", l += ""; (o = r.exec(n)) && (c = t.exec(l));) {
        (d = c.index) > s && (d = l.slice(s, d), x[f] ? x[f] += d : x[++f] = d), (o = o[0]) === (c = c[0]) ? x[f] ? x[f] += c : x[++f] = c : (x[++f] = null, a.push({
          i: f,
          x: (0, e.default)(o, c)
        })), s = t.lastIndex;
      }

      return s < l.length && (d = l.slice(s), x[f] ? x[f] += d : x[++f] = d), x.length < 2 ? a[0] ? i(a[0].x) : u(l) : (l = a.length, function (e) {
        for (var n, r = 0; r < l; ++r) {
          x[(n = a[r]).i] = n.x(e);
        }

        return x.join("");
      });
    }
  }, {
    "./number.js": "eUtU"
  }],
  "ONGM": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = d;

    var e = require("d3-color"),
        r = c(require("./rgb.js")),
        t = require("./array.js"),
        u = c(require("./date.js")),
        n = c(require("./number.js")),
        o = c(require("./object.js")),
        a = c(require("./string.js")),
        f = c(require("./constant.js")),
        i = s(require("./numberArray.js"));

    function l() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return l = function l() {
        return e;
      }, e;
    }

    function s(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var r = l();
      if (r && r.has(e)) return r.get(e);
      var t = {},
          u = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var n in e) {
        if (Object.prototype.hasOwnProperty.call(e, n)) {
          var o = u ? Object.getOwnPropertyDescriptor(e, n) : null;
          o && (o.get || o.set) ? Object.defineProperty(t, n, o) : t[n] = e[n];
        }
      }

      return t.default = e, r && r.set(e, t), t;
    }

    function c(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function d(l, s) {
      var c,
          d = _typeof(s);

      return null == s || "boolean" === d ? (0, f.default)(s) : ("number" === d ? n.default : "string" === d ? (c = (0, e.color)(s)) ? (s = c, r.default) : a.default : s instanceof e.color ? r.default : s instanceof Date ? u.default : (0, i.isNumberArray)(s) ? i.default : Array.isArray(s) ? t.genericArray : "function" != typeof s.valueOf && "function" != typeof s.toString || isNaN(s) ? o.default : n.default)(l, s);
    }
  }, {
    "d3-color": "TJ2K",
    "./rgb.js": "hw5o",
    "./array.js": "j6Kl",
    "./date.js": "npIv",
    "./number.js": "eUtU",
    "./object.js": "Ci2u",
    "./string.js": "WNxQ",
    "./constant.js": "OY6d",
    "./numberArray.js": "fCry"
  }],
  "iFPW": [function (require, module, exports) {
    "use strict";

    function t(t) {
      var e = t.length;
      return function (r) {
        return t[Math.max(0, Math.min(e - 1, Math.floor(r * e)))];
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "lYdl": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./color.js");

    function r(r, t) {
      var o = (0, e.hue)(+r, +t);
      return function (e) {
        var r = o(e);
        return r - 360 * Math.floor(r / 360);
      };
    }
  }, {
    "./color.js": "OW9X"
  }],
  "Ehv8": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      return e = +e, t = +t, function (r) {
        return Math.round(e * (1 - r) + t * r);
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "sFbg": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = a, exports.identity = void 0;
    var t = 180 / Math.PI,
        e = {
      translateX: 0,
      translateY: 0,
      rotate: 0,
      skewX: 0,
      scaleX: 1,
      scaleY: 1
    };

    function a(e, a, r, s, n, l) {
      var o, i, c;
      return (o = Math.sqrt(e * e + a * a)) && (e /= o, a /= o), (c = e * r + a * s) && (r -= e * c, s -= a * c), (i = Math.sqrt(r * r + s * s)) && (r /= i, s /= i, c /= i), e * s < a * r && (e = -e, a = -a, c = -c, o = -o), {
        translateX: n,
        translateY: l,
        rotate: Math.atan2(a, e) * t,
        skewX: Math.atan(c) * t,
        scaleX: o,
        scaleY: i
      };
    }

    exports.identity = e;
  }, {}],
  "igaz": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.parseCss = i, exports.parseSvg = l;
    var e,
        t,
        r,
        n,
        o = a(require("./decompose.js"));

    function u() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return u = function u() {
        return e;
      }, e;
    }

    function a(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var t = u();
      if (t && t.has(e)) return t.get(e);
      var r = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var o in e) {
        if (Object.prototype.hasOwnProperty.call(e, o)) {
          var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o];
        }
      }

      return r.default = e, t && t.set(e, r), r;
    }

    function i(n) {
      return "none" === n ? o.identity : (e || (e = document.createElement("DIV"), t = document.documentElement, r = document.defaultView), e.style.transform = n, n = r.getComputedStyle(t.appendChild(e), null).getPropertyValue("transform"), t.removeChild(e), n = n.slice(7, -1).split(","), (0, o.default)(+n[0], +n[1], +n[2], +n[3], +n[4], +n[5]));
    }

    function l(e) {
      return null == e ? o.identity : (n || (n = document.createElementNS("http://www.w3.org/2000/svg", "g")), n.setAttribute("transform", e), (e = n.transform.baseVal.consolidate()) ? (e = e.matrix, (0, o.default)(e.a, e.b, e.c, e.d, e.e, e.f)) : o.identity);
    }
  }, {
    "./decompose.js": "sFbg"
  }],
  "tUKx": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.interpolateTransformSvg = exports.interpolateTransformCss = void 0;

    var e = r(require("../number.js")),
        t = require("./parse.js");

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function s(t, r, s, n) {
      function a(e) {
        return e.length ? e.pop() + " " : "";
      }

      return function (u, l) {
        var o = [],
            p = [];
        return u = t(u), l = t(l), function (t, n, a, u, l, o) {
          if (t !== a || n !== u) {
            var p = l.push("translate(", null, r, null, s);
            o.push({
              i: p - 4,
              x: (0, e.default)(t, a)
            }, {
              i: p - 2,
              x: (0, e.default)(n, u)
            });
          } else (a || u) && l.push("translate(" + a + r + u + s);
        }(u.translateX, u.translateY, l.translateX, l.translateY, o, p), function (t, r, s, u) {
          t !== r ? (t - r > 180 ? r += 360 : r - t > 180 && (t += 360), u.push({
            i: s.push(a(s) + "rotate(", null, n) - 2,
            x: (0, e.default)(t, r)
          })) : r && s.push(a(s) + "rotate(" + r + n);
        }(u.rotate, l.rotate, o, p), function (t, r, s, u) {
          t !== r ? u.push({
            i: s.push(a(s) + "skewX(", null, n) - 2,
            x: (0, e.default)(t, r)
          }) : r && s.push(a(s) + "skewX(" + r + n);
        }(u.skewX, l.skewX, o, p), function (t, r, s, n, u, l) {
          if (t !== s || r !== n) {
            var o = u.push(a(u) + "scale(", null, ",", null, ")");
            l.push({
              i: o - 4,
              x: (0, e.default)(t, s)
            }, {
              i: o - 2,
              x: (0, e.default)(r, n)
            });
          } else 1 === s && 1 === n || u.push(a(u) + "scale(" + s + "," + n + ")");
        }(u.scaleX, u.scaleY, l.scaleX, l.scaleY, o, p), u = l = null, function (e) {
          for (var t, r = -1, s = p.length; ++r < s;) {
            o[(t = p[r]).i] = t.x(e);
          }

          return o.join("");
        };
      };
    }

    var n = s(t.parseCss, "px, ", "px)", "deg)");
    exports.interpolateTransformCss = n;
    var a = s(t.parseSvg, ", ", ")", ")");
    exports.interpolateTransformSvg = a;
  }, {
    "../number.js": "eUtU",
    "./parse.js": "igaz"
  }],
  "MbcF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = M;
    var t = Math.SQRT2,
        e = 2,
        r = 4,
        n = 1e-12;

    function a(t) {
      return ((t = Math.exp(t)) + 1 / t) / 2;
    }

    function u(t) {
      return ((t = Math.exp(t)) - 1 / t) / 2;
    }

    function o(t) {
      return ((t = Math.exp(2 * t)) - 1) / (t + 1);
    }

    function M(M, h) {
      var i,
          f,
          s = M[0],
          c = M[1],
          l = M[2],
          p = h[0],
          x = h[1],
          v = h[2],
          d = p - s,
          g = x - c,
          q = d * d + g * g;
      if (q < n) f = Math.log(v / l) / t, i = function i(e) {
        return [s + e * d, c + e * g, l * Math.exp(t * e * f)];
      };else {
        var _ = Math.sqrt(q),
            b = (v * v - l * l + r * q) / (2 * l * e * _),
            j = (v * v - l * l - r * q) / (2 * v * e * _),
            y = Math.log(Math.sqrt(b * b + 1) - b),
            O = Math.log(Math.sqrt(j * j + 1) - j);

        f = (O - y) / t, i = function i(r) {
          var n = r * f,
              M = a(y),
              h = l / (e * _) * (M * o(t * n + y) - u(y));
          return [s + h * d, c + h * g, l * M / a(t * n + y)];
        };
      }
      return i.duration = 1e3 * f, i;
    }
  }, {}],
  "BrWg": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.hslLong = exports.default = void 0;

    var e = require("d3-color"),
        t = o(require("./color.js"));

    function r() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return r = function r() {
        return e;
      }, e;
    }

    function o(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var t = r();
      if (t && t.has(e)) return t.get(e);
      var o = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var u in e) {
        if (Object.prototype.hasOwnProperty.call(e, u)) {
          var a = n ? Object.getOwnPropertyDescriptor(e, u) : null;
          a && (a.get || a.set) ? Object.defineProperty(o, u, a) : o[u] = e[u];
        }
      }

      return o.default = e, t && t.set(e, o), o;
    }

    function n(r) {
      return function (o, n) {
        var u = r((o = (0, e.hsl)(o)).h, (n = (0, e.hsl)(n)).h),
            a = (0, t.default)(o.s, n.s),
            f = (0, t.default)(o.l, n.l),
            l = (0, t.default)(o.opacity, n.opacity);
        return function (e) {
          return o.h = u(e), o.s = a(e), o.l = f(e), o.opacity = l(e), o + "";
        };
      };
    }

    var u = n(t.hue);
    exports.default = u;
    var a = n(t.default);
    exports.hslLong = a;
  }, {
    "d3-color": "TJ2K",
    "./color.js": "OW9X"
  }],
  "HCNS": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;

    var e = require("d3-color"),
        t = r(require("./color.js"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(r, u) {
      var a = (0, t.default)((r = (0, e.lab)(r)).l, (u = (0, e.lab)(u)).l),
          l = (0, t.default)(r.a, u.a),
          o = (0, t.default)(r.b, u.b),
          c = (0, t.default)(r.opacity, u.opacity);
      return function (e) {
        return r.l = a(e), r.a = l(e), r.b = o(e), r.opacity = c(e), r + "";
      };
    }
  }, {
    "d3-color": "TJ2K",
    "./color.js": "OW9X"
  }],
  "VIlX": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.hclLong = exports.default = void 0;

    var e = require("d3-color"),
        t = o(require("./color.js"));

    function r() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return r = function r() {
        return e;
      }, e;
    }

    function o(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var t = r();
      if (t && t.has(e)) return t.get(e);
      var o = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var u in e) {
        if (Object.prototype.hasOwnProperty.call(e, u)) {
          var c = n ? Object.getOwnPropertyDescriptor(e, u) : null;
          c && (c.get || c.set) ? Object.defineProperty(o, u, c) : o[u] = e[u];
        }
      }

      return o.default = e, t && t.set(e, o), o;
    }

    function n(r) {
      return function (o, n) {
        var u = r((o = (0, e.hcl)(o)).h, (n = (0, e.hcl)(n)).h),
            c = (0, t.default)(o.c, n.c),
            a = (0, t.default)(o.l, n.l),
            f = (0, t.default)(o.opacity, n.opacity);
        return function (e) {
          return o.h = u(e), o.c = c(e), o.l = a(e), o.opacity = f(e), o + "";
        };
      };
    }

    var u = n(t.hue);
    exports.default = u;
    var c = n(t.default);
    exports.hclLong = c;
  }, {
    "d3-color": "TJ2K",
    "./color.js": "OW9X"
  }],
  "NOHm": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.cubehelixLong = exports.default = void 0;

    var e = require("d3-color"),
        t = n(require("./color.js"));

    function r() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return r = function r() {
        return e;
      }, e;
    }

    function n(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var t = r();
      if (t && t.has(e)) return t.get(e);
      var n = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var u in e) {
        if (Object.prototype.hasOwnProperty.call(e, u)) {
          var a = o ? Object.getOwnPropertyDescriptor(e, u) : null;
          a && (a.get || a.set) ? Object.defineProperty(n, u, a) : n[u] = e[u];
        }
      }

      return n.default = e, t && t.set(e, n), n;
    }

    function o(r) {
      return function n(o) {
        function u(n, u) {
          var a = r((n = (0, e.cubehelix)(n)).h, (u = (0, e.cubehelix)(u)).h),
              i = (0, t.default)(n.s, u.s),
              c = (0, t.default)(n.l, u.l),
              f = (0, t.default)(n.opacity, u.opacity);
          return function (e) {
            return n.h = a(e), n.s = i(e), n.l = c(Math.pow(e, o)), n.opacity = f(e), n + "";
          };
        }

        return o = +o, u.gamma = n, u;
      }(1);
    }

    var u = o(t.hue);
    exports.default = u;
    var a = o(t.default);
    exports.cubehelixLong = a;
  }, {
    "d3-color": "TJ2K",
    "./color.js": "OW9X"
  }],
  "nlPb": [function (require, module, exports) {
    "use strict";

    function e(e, r) {
      for (var t = 0, n = r.length - 1, a = r[0], o = new Array(n < 0 ? 0 : n); t < n;) {
        o[t] = e(a, a = r[++t]);
      }

      return function (e) {
        var r = Math.max(0, Math.min(n - 1, Math.floor(e *= n)));
        return o[r](e - r);
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "g3ua": [function (require, module, exports) {
    "use strict";

    function e(e, r) {
      for (var t = new Array(r), o = 0; o < r; ++o) {
        t[o] = e(o / (r - 1));
      }

      return t;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "mkGF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "interpolate", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "interpolateArray", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "interpolateBasis", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "interpolateBasisClosed", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "interpolateDate", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "interpolateDiscrete", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "interpolateHue", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), Object.defineProperty(exports, "interpolateNumber", {
      enumerable: !0,
      get: function get() {
        return a.default;
      }
    }), Object.defineProperty(exports, "interpolateNumberArray", {
      enumerable: !0,
      get: function get() {
        return l.default;
      }
    }), Object.defineProperty(exports, "interpolateObject", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "interpolateRound", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(exports, "interpolateString", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    }), Object.defineProperty(exports, "interpolateTransformCss", {
      enumerable: !0,
      get: function get() {
        return c.interpolateTransformCss;
      }
    }), Object.defineProperty(exports, "interpolateTransformSvg", {
      enumerable: !0,
      get: function get() {
        return c.interpolateTransformSvg;
      }
    }), Object.defineProperty(exports, "interpolateZoom", {
      enumerable: !0,
      get: function get() {
        return b.default;
      }
    }), Object.defineProperty(exports, "interpolateRgb", {
      enumerable: !0,
      get: function get() {
        return d.default;
      }
    }), Object.defineProperty(exports, "interpolateRgbBasis", {
      enumerable: !0,
      get: function get() {
        return d.rgbBasis;
      }
    }), Object.defineProperty(exports, "interpolateRgbBasisClosed", {
      enumerable: !0,
      get: function get() {
        return d.rgbBasisClosed;
      }
    }), Object.defineProperty(exports, "interpolateHsl", {
      enumerable: !0,
      get: function get() {
        return j.default;
      }
    }), Object.defineProperty(exports, "interpolateHslLong", {
      enumerable: !0,
      get: function get() {
        return j.hslLong;
      }
    }), Object.defineProperty(exports, "interpolateLab", {
      enumerable: !0,
      get: function get() {
        return g.default;
      }
    }), Object.defineProperty(exports, "interpolateHcl", {
      enumerable: !0,
      get: function get() {
        return y.default;
      }
    }), Object.defineProperty(exports, "interpolateHclLong", {
      enumerable: !0,
      get: function get() {
        return y.hclLong;
      }
    }), Object.defineProperty(exports, "interpolateCubehelix", {
      enumerable: !0,
      get: function get() {
        return m.default;
      }
    }), Object.defineProperty(exports, "interpolateCubehelixLong", {
      enumerable: !0,
      get: function get() {
        return m.cubehelixLong;
      }
    }), Object.defineProperty(exports, "piecewise", {
      enumerable: !0,
      get: function get() {
        return O.default;
      }
    }), Object.defineProperty(exports, "quantize", {
      enumerable: !0,
      get: function get() {
        return x.default;
      }
    });

    var e = h(require("./value.js")),
        r = h(require("./array.js")),
        t = h(require("./basis.js")),
        n = h(require("./basisClosed.js")),
        u = h(require("./date.js")),
        o = h(require("./discrete.js")),
        i = h(require("./hue.js")),
        a = h(require("./number.js")),
        l = h(require("./numberArray.js")),
        f = h(require("./object.js")),
        p = h(require("./round.js")),
        s = h(require("./string.js")),
        c = require("./transform/index.js"),
        b = h(require("./zoom.js")),
        d = q(require("./rgb.js")),
        j = q(require("./hsl.js")),
        g = h(require("./lab.js")),
        y = q(require("./hcl.js")),
        m = q(require("./cubehelix.js")),
        O = h(require("./piecewise.js")),
        x = h(require("./quantize.js"));

    function P() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return P = function P() {
        return e;
      }, e;
    }

    function q(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var r = P();
      if (r && r.has(e)) return r.get(e);
      var t = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var u in e) {
        if (Object.prototype.hasOwnProperty.call(e, u)) {
          var o = n ? Object.getOwnPropertyDescriptor(e, u) : null;
          o && (o.get || o.set) ? Object.defineProperty(t, u, o) : t[u] = e[u];
        }
      }

      return t.default = e, r && r.set(e, t), t;
    }

    function h(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./value.js": "ONGM",
    "./array.js": "j6Kl",
    "./basis.js": "mIuw",
    "./basisClosed.js": "t9MF",
    "./date.js": "npIv",
    "./discrete.js": "iFPW",
    "./hue.js": "lYdl",
    "./number.js": "eUtU",
    "./numberArray.js": "fCry",
    "./object.js": "Ci2u",
    "./round.js": "Ehv8",
    "./string.js": "WNxQ",
    "./transform/index.js": "tUKx",
    "./zoom.js": "MbcF",
    "./rgb.js": "hw5o",
    "./hsl.js": "BrWg",
    "./lab.js": "HCNS",
    "./hcl.js": "VIlX",
    "./cubehelix.js": "NOHm",
    "./piecewise.js": "nlPb",
    "./quantize.js": "g3ua"
  }],
  "v2Ya": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.now = f, exports.Timer = m, exports.timer = p, exports.timerFlush = w;
    var t,
        n,
        e = 0,
        o = 0,
        i = 0,
        r = 1e3,
        l = 0,
        c = 0,
        s = 0,
        u = "object" == (typeof performance === "undefined" ? "undefined" : _typeof(performance)) && performance.now ? performance : Date,
        a = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
      setTimeout(t, 17);
    };

    function f() {
      return c || (a(_), c = u.now() + s);
    }

    function _() {
      c = 0;
    }

    function m() {
      this._call = this._time = this._next = null;
    }

    function p(t, n, e) {
      var o = new m();
      return o.restart(t, n, e), o;
    }

    function w() {
      f(), ++e;

      for (var n, o = t; o;) {
        (n = c - o._time) >= 0 && o._call.call(null, n), o = o._next;
      }

      --e;
    }

    function h() {
      c = (l = u.now()) + s, e = o = 0;

      try {
        w();
      } finally {
        e = 0, y(), c = 0;
      }
    }

    function x() {
      var t = u.now(),
          n = t - l;
      n > r && (s -= n, l = t);
    }

    function y() {
      for (var e, o, i = t, r = 1 / 0; i;) {
        i._call ? (r > i._time && (r = i._time), e = i, i = i._next) : (o = i._next, i._next = null, i = e ? e._next = o : t = o);
      }

      n = e, v(r);
    }

    function v(t) {
      e || (o && (o = clearTimeout(o)), t - c > 24 ? (t < 1 / 0 && (o = setTimeout(h, t - u.now() - s)), i && (i = clearInterval(i))) : (i || (l = u.now(), i = setInterval(x, r)), e = 1, a(h)));
    }

    m.prototype = p.prototype = {
      constructor: m,
      restart: function restart(e, o, i) {
        if ("function" != typeof e) throw new TypeError("callback is not a function");
        i = (null == i ? f() : +i) + (null == o ? 0 : +o), this._next || n === this || (n ? n._next = this : t = this, n = this), this._call = e, this._time = i, v();
      },
      stop: function stop() {
        this._call && (this._call = null, this._time = 1 / 0, v());
      }
    };
  }, {}],
  "iEU7": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./timer.js");

    function r(r, t, u) {
      var n = new e.Timer();
      return t = null == t ? 0 : +t, n.restart(function (e) {
        n.stop(), r(e + t);
      }, t, u), n;
    }
  }, {
    "./timer.js": "v2Ya"
  }],
  "B8zX": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./timer.js");

    function r(r, t, n) {
      var u = new e.Timer(),
          s = t;
      return null == t ? (u.restart(r, t, n), u) : (t = +t, n = null == n ? (0, e.now)() : +n, u.restart(function e(a) {
        a += s, u.restart(e, s += t, n), r(a);
      }, t, n), u);
    }
  }, {
    "./timer.js": "v2Ya"
  }],
  "CBES": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "now", {
      enumerable: !0,
      get: function get() {
        return e.now;
      }
    }), Object.defineProperty(exports, "timer", {
      enumerable: !0,
      get: function get() {
        return e.timer;
      }
    }), Object.defineProperty(exports, "timerFlush", {
      enumerable: !0,
      get: function get() {
        return e.timerFlush;
      }
    }), Object.defineProperty(exports, "timeout", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "interval", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    });

    var e = require("./timer.js"),
        t = n(require("./timeout.js")),
        r = n(require("./interval.js"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./timer.js": "v2Ya",
    "./timeout.js": "iEU7",
    "./interval.js": "B8zX"
  }],
  "GDzO": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = p, exports.init = _, exports.set = c, exports.get = f, exports.ENDED = exports.ENDING = exports.RUNNING = exports.STARTED = exports.STARTING = exports.SCHEDULED = exports.CREATED = void 0;

    var t = require("d3-dispatch"),
        e = require("d3-timer"),
        r = (0, t.dispatch)("start", "end", "cancel", "interrupt"),
        a = [],
        n = 0;

    exports.CREATED = n;
    var o = 1;
    exports.SCHEDULED = o;
    var i = 2;
    exports.STARTING = i;
    var s = 3;
    exports.STARTED = s;
    var l = 4;
    exports.RUNNING = l;
    var u = 5;
    exports.ENDING = u;
    var d = 6;

    function p(t, e, o, i, s, l) {
      var u = t.__transition;

      if (u) {
        if (o in u) return;
      } else t.__transition = {};

      x(t, o, {
        name: e,
        index: i,
        group: s,
        on: r,
        tween: a,
        time: l.time,
        delay: l.delay,
        duration: l.duration,
        ease: l.ease,
        timer: null,
        state: n
      });
    }

    function _(t, e) {
      var r = f(t, e);
      if (r.state > n) throw new Error("too late; already scheduled");
      return r;
    }

    function c(t, e) {
      var r = f(t, e);
      if (r.state > s) throw new Error("too late; already running");
      return r;
    }

    function f(t, e) {
      var r = t.__transition;
      if (!r || !(r = r[e])) throw new Error("transition not found");
      return r;
    }

    function x(t, r, a) {
      var n,
          p = t.__transition;

      function _(u) {
        var x, m, E, v;
        if (a.state !== o) return f();

        for (x in p) {
          if ((v = p[x]).name === a.name) {
            if (v.state === s) return (0, e.timeout)(_);
            v.state === l ? (v.state = d, v.timer.stop(), v.on.call("interrupt", t, t.__data__, v.index, v.group), delete p[x]) : +x < r && (v.state = d, v.timer.stop(), v.on.call("cancel", t, t.__data__, v.index, v.group), delete p[x]);
          }
        }

        if ((0, e.timeout)(function () {
          a.state === s && (a.state = l, a.timer.restart(c, a.delay, a.time), c(u));
        }), a.state = i, a.on.call("start", t, t.__data__, a.index, a.group), a.state === i) {
          for (a.state = s, n = new Array(E = a.tween.length), x = 0, m = -1; x < E; ++x) {
            (v = a.tween[x].value.call(t, t.__data__, a.index, a.group)) && (n[++m] = v);
          }

          n.length = m + 1;
        }
      }

      function c(e) {
        for (var r = e < a.duration ? a.ease.call(null, e / a.duration) : (a.timer.restart(f), a.state = u, 1), o = -1, i = n.length; ++o < i;) {
          n[o].call(t, r);
        }

        a.state === u && (a.on.call("end", t, t.__data__, a.index, a.group), f());
      }

      function f() {
        for (var e in a.state = d, a.timer.stop(), delete p[r], p) {
          return;
        }

        delete t.__transition;
      }

      p[r] = a, a.timer = (0, e.timer)(function (t) {
        a.state = o, a.timer.restart(_, a.delay, a.time), a.delay <= t && _(t - a.delay);
      }, 0, a.time);
    }

    exports.ENDED = d;
  }, {
    "d3-dispatch": "UUCs",
    "d3-timer": "CBES"
  }],
  "xAnP": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = require("./transition/schedule.js");

    function t(t, n) {
      var r,
          a,
          i,
          s = t.__transition,
          l = !0;

      if (s) {
        for (i in n = null == n ? null : n + "", s) {
          (r = s[i]).name === n ? (a = r.state > e.STARTING && r.state < e.ENDING, r.state = e.ENDED, r.timer.stop(), r.on.call(a ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete s[i]) : l = !1;
        }

        l && delete t.__transition;
      }
    }
  }, {
    "./transition/schedule.js": "GDzO"
  }],
  "JwzZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("../interrupt.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(t) {
      return this.each(function () {
        (0, e.default)(this, t);
      });
    }
  }, {
    "../interrupt.js": "xAnP"
  }],
  "CgJV": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r, exports.tweenValue = i;

    var e = require("./schedule.js");

    function t(t, n) {
      var r, i;
      return function () {
        var u = (0, e.set)(this, t),
            a = u.tween;
        if (a !== r) for (var f = 0, l = (i = r = a).length; f < l; ++f) {
          if (i[f].name === n) {
            (i = i.slice()).splice(f, 1);
            break;
          }
        }
        u.tween = i;
      };
    }

    function n(t, n, r) {
      var i, u;
      if ("function" != typeof r) throw new Error();
      return function () {
        var a = (0, e.set)(this, t),
            f = a.tween;

        if (f !== i) {
          u = (i = f).slice();

          for (var l = {
            name: n,
            value: r
          }, s = 0, o = u.length; s < o; ++s) {
            if (u[s].name === n) {
              u[s] = l;
              break;
            }
          }

          s === o && u.push(l);
        }

        a.tween = u;
      };
    }

    function r(r, i) {
      var u = this._id;

      if (r += "", arguments.length < 2) {
        for (var a, f = (0, e.get)(this.node(), u).tween, l = 0, s = f.length; l < s; ++l) {
          if ((a = f[l]).name === r) return a.value;
        }

        return null;
      }

      return this.each((null == i ? t : n)(u, r, i));
    }

    function i(t, n, r) {
      var i = t._id;
      return t.each(function () {
        var t = (0, e.set)(this, i);
        (t.value || (t.value = {}))[n] = r.apply(this, arguments);
      }), function (t) {
        return (0, e.get)(t, i).value[n];
      };
    }
  }, {
    "./schedule.js": "GDzO"
  }],
  "KSuB": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = require("d3-color"),
        r = require("d3-interpolate");

    function t(t, o) {
      var n;
      return ("number" == typeof o ? r.interpolateNumber : o instanceof e.color ? r.interpolateRgb : (n = (0, e.color)(o)) ? (o = n, r.interpolateRgb) : r.interpolateString)(t, o);
    }
  }, {
    "d3-color": "TJ2K",
    "d3-interpolate": "mkGF"
  }],
  "e4SM": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = f;

    var t = require("d3-interpolate"),
        e = require("d3-selection"),
        r = require("./tween.js"),
        n = u(require("./interpolate.js"));

    function u(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function i(t) {
      return function () {
        this.removeAttribute(t);
      };
    }

    function l(t) {
      return function () {
        this.removeAttributeNS(t.space, t.local);
      };
    }

    function o(t, e, r) {
      var n,
          u,
          i = r + "";
      return function () {
        var l = this.getAttribute(t);
        return l === i ? null : l === n ? u : u = e(n = l, r);
      };
    }

    function a(t, e, r) {
      var n,
          u,
          i = r + "";
      return function () {
        var l = this.getAttributeNS(t.space, t.local);
        return l === i ? null : l === n ? u : u = e(n = l, r);
      };
    }

    function c(t, e, r) {
      var n, u, i;
      return function () {
        var l,
            o,
            a = r(this);
        if (null != a) return (l = this.getAttribute(t)) === (o = a + "") ? null : l === n && o === u ? i : (u = o, i = e(n = l, a));
        this.removeAttribute(t);
      };
    }

    function s(t, e, r) {
      var n, u, i;
      return function () {
        var l,
            o,
            a = r(this);
        if (null != a) return (l = this.getAttributeNS(t.space, t.local)) === (o = a + "") ? null : l === n && o === u ? i : (u = o, i = e(n = l, a));
        this.removeAttributeNS(t.space, t.local);
      };
    }

    function f(u, f) {
      var v = (0, e.namespace)(u),
          h = "transform" === v ? t.interpolateTransformSvg : n.default;
      return this.attrTween(u, "function" == typeof f ? (v.local ? s : c)(v, h, (0, r.tweenValue)(this, "attr." + u, f)) : null == f ? (v.local ? l : i)(v) : (v.local ? a : o)(v, h, f));
    }
  }, {
    "d3-interpolate": "mkGF",
    "d3-selection": "lm1C",
    "./tween.js": "CgJV",
    "./interpolate.js": "KSuB"
  }],
  "L4WC": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i;

    var t = require("d3-selection");

    function e(t, e) {
      return function (n) {
        this.setAttribute(t, e.call(this, n));
      };
    }

    function n(t, e) {
      return function (n) {
        this.setAttributeNS(t.space, t.local, e.call(this, n));
      };
    }

    function r(t, e) {
      var r, u;

      function i() {
        var i = e.apply(this, arguments);
        return i !== u && (r = (u = i) && n(t, i)), r;
      }

      return i._value = e, i;
    }

    function u(t, n) {
      var r, u;

      function i() {
        var i = n.apply(this, arguments);
        return i !== u && (r = (u = i) && e(t, i)), r;
      }

      return i._value = n, i;
    }

    function i(e, n) {
      var i = "attr." + e;
      if (arguments.length < 2) return (i = this.tween(i)) && i._value;
      if (null == n) return this.tween(i, null);
      if ("function" != typeof n) throw new Error();
      var a = (0, t.namespace)(e);
      return this.tween(i, (a.local ? r : u)(a, n));
    }
  }, {
    "d3-selection": "lm1C"
  }],
  "K26P": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n;

    var t = require("./schedule.js");

    function e(e, i) {
      return function () {
        (0, t.init)(this, e).delay = +i.apply(this, arguments);
      };
    }

    function i(e, i) {
      return i = +i, function () {
        (0, t.init)(this, e).delay = i;
      };
    }

    function n(n) {
      var r = this._id;
      return arguments.length ? this.each(("function" == typeof n ? e : i)(r, n)) : (0, t.get)(this.node(), r).delay;
    }
  }, {
    "./schedule.js": "GDzO"
  }],
  "ZZtL": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i;

    var t = require("./schedule.js");

    function e(e, n) {
      return function () {
        (0, t.set)(this, e).duration = +n.apply(this, arguments);
      };
    }

    function n(e, n) {
      return n = +n, function () {
        (0, t.set)(this, e).duration = n;
      };
    }

    function i(i) {
      var r = this._id;
      return arguments.length ? this.each(("function" == typeof i ? e : n)(r, i)) : (0, t.get)(this.node(), r).duration;
    }
  }, {
    "./schedule.js": "GDzO"
  }],
  "pgS5": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./schedule.js");

    function t(t, r) {
      if ("function" != typeof r) throw new Error();
      return function () {
        (0, e.set)(this, t).ease = r;
      };
    }

    function r(r) {
      var n = this._id;
      return arguments.length ? this.each(t(n, r)) : (0, e.get)(this.node(), n).ease;
    }
  }, {
    "./schedule.js": "GDzO"
  }],
  "QDlU": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = require("d3-selection"),
        r = require("./index.js");

    function t(t) {
      "function" != typeof t && (t = (0, e.matcher)(t));

      for (var n = this._groups, i = n.length, s = new Array(i), a = 0; a < i; ++a) {
        for (var o, u = n[a], _ = u.length, h = s[a] = [], l = 0; l < _; ++l) {
          (o = u[l]) && t.call(o, o.__data__, l, u) && h.push(o);
        }
      }

      return new r.Transition(s, this._parents, this._name, this._id);
    }
  }, {
    "d3-selection": "lm1C",
    "./index.js": "J3C7"
  }],
  "Z2Q2": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;

    var r = require("./index.js");

    function e(e) {
      if (e._id !== this._id) throw new Error();

      for (var t = this._groups, i = e._groups, n = t.length, s = i.length, o = Math.min(n, s), a = new Array(n), h = 0; h < o; ++h) {
        for (var u, _ = t[h], d = i[h], f = _.length, l = a[h] = new Array(f), p = 0; p < f; ++p) {
          (u = _[p] || d[p]) && (l[p] = u);
        }
      }

      for (; h < n; ++h) {
        a[h] = t[h];
      }

      return new r.Transition(a, this._parents, this._name, this._id);
    }
  }, {
    "./index.js": "J3C7"
  }],
  "VZes": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./schedule.js");

    function t(e) {
      return (e + "").trim().split(/^|\s+/).every(function (e) {
        var t = e.indexOf(".");
        return t >= 0 && (e = e.slice(0, t)), !e || "start" === e;
      });
    }

    function n(n, r, i) {
      var o,
          s,
          u = t(r) ? e.init : e.set;
      return function () {
        var e = u(this, n),
            t = e.on;
        t !== o && (s = (o = t).copy()).on(r, i), e.on = s;
      };
    }

    function r(t, r) {
      var i = this._id;
      return arguments.length < 2 ? (0, e.get)(this.node(), i).on.on(t) : this.each(n(i, t, r));
    }
  }, {
    "./schedule.js": "GDzO"
  }],
  "FS2t": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return function () {
        var t = this.parentNode;

        for (var r in this.__transition) {
          if (+r !== e) return;
        }

        t && t.removeChild(this);
      };
    }

    function t() {
      return this.on("end.remove", e(this._id));
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "Xvwr": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o;

    var e = require("d3-selection"),
        t = require("./index.js"),
        r = a(require("./schedule.js"));

    function n() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return n = function n() {
        return e;
      }, e;
    }

    function a(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var t = n();
      if (t && t.has(e)) return t.get(e);
      var r = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var o in e) {
        if (Object.prototype.hasOwnProperty.call(e, o)) {
          var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
          i && (i.get || i.set) ? Object.defineProperty(r, o, i) : r[o] = e[o];
        }
      }

      return r.default = e, t && t.set(e, r), r;
    }

    function o(n) {
      var a = this._name,
          o = this._id;
      "function" != typeof n && (n = (0, e.selector)(n));

      for (var i = this._groups, u = i.length, f = new Array(u), s = 0; s < u; ++s) {
        for (var _, c, l = i[s], p = l.length, d = f[s] = new Array(p), y = 0; y < p; ++y) {
          (_ = l[y]) && (c = n.call(_, _.__data__, y, l)) && ("__data__" in _ && (c.__data__ = _.__data__), d[y] = c, (0, r.default)(d[y], a, o, y, d, (0, r.get)(_, o)));
        }
      }

      return new t.Transition(f, this._parents, a, o);
    }
  }, {
    "d3-selection": "lm1C",
    "./index.js": "J3C7",
    "./schedule.js": "GDzO"
  }],
  "DOdJ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;

    var e = require("d3-selection"),
        t = require("./index.js"),
        r = o(require("./schedule.js"));

    function n() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return n = function n() {
        return e;
      }, e;
    }

    function o(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var t = n();
      if (t && t.has(e)) return t.get(e);
      var r = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var u in e) {
        if (Object.prototype.hasOwnProperty.call(e, u)) {
          var i = o ? Object.getOwnPropertyDescriptor(e, u) : null;
          i && (i.get || i.set) ? Object.defineProperty(r, u, i) : r[u] = e[u];
        }
      }

      return r.default = e, t && t.set(e, r), r;
    }

    function u(n) {
      var o = this._name,
          u = this._id;
      "function" != typeof n && (n = (0, e.selectorAll)(n));

      for (var i = this._groups, f = i.length, a = [], l = [], s = 0; s < f; ++s) {
        for (var c, p = i[s], d = p.length, h = 0; h < d; ++h) {
          if (c = p[h]) {
            for (var v, y = n.call(c, c.__data__, h, p), _ = (0, r.get)(c, u), g = 0, j = y.length; g < j; ++g) {
              (v = y[g]) && (0, r.default)(v, o, u, g, y, _);
            }

            a.push(y), l.push(c);
          }
        }
      }

      return new t.Transition(a, l, o, u);
    }
  }, {
    "d3-selection": "lm1C",
    "./index.js": "J3C7",
    "./schedule.js": "GDzO"
  }],
  "bQR7": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("d3-selection"),
        t = e.selection.prototype.constructor;

    function r() {
      return new t(this._groups, this._parents);
    }
  }, {
    "d3-selection": "lm1C"
  }],
  "gXfd": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = f;

    var e = require("d3-interpolate"),
        t = require("d3-selection"),
        n = require("./schedule.js"),
        r = require("./tween.js"),
        s = u(require("./interpolate.js"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function l(e, n) {
      var r, s, u;
      return function () {
        var l = (0, t.style)(this, e),
            i = (this.style.removeProperty(e), (0, t.style)(this, e));
        return l === i ? null : l === r && i === s ? u : u = n(r = l, s = i);
      };
    }

    function i(e) {
      return function () {
        this.style.removeProperty(e);
      };
    }

    function o(e, n, r) {
      var s,
          u,
          l = r + "";
      return function () {
        var i = (0, t.style)(this, e);
        return i === l ? null : i === s ? u : u = n(s = i, r);
      };
    }

    function a(e, n, r) {
      var s, u, l;
      return function () {
        var i = (0, t.style)(this, e),
            o = r(this),
            a = o + "";
        return null == o && (this.style.removeProperty(e), a = o = (0, t.style)(this, e)), i === a ? null : i === s && a === u ? l : (u = a, l = n(s = i, o));
      };
    }

    function y(e, t) {
      var r,
          s,
          u,
          l,
          o = "style." + t,
          a = "end." + o;
      return function () {
        var y = (0, n.set)(this, e),
            f = y.on,
            c = null == y.value[o] ? l || (l = i(t)) : void 0;
        f === r && u === c || (s = (r = f).copy()).on(a, u = c), y.on = s;
      };
    }

    function f(t, n, u) {
      var f = "transform" == (t += "") ? e.interpolateTransformCss : s.default;
      return null == n ? this.styleTween(t, l(t, f)).on("end.style." + t, i(t)) : "function" == typeof n ? this.styleTween(t, a(t, f, (0, r.tweenValue)(this, "style." + t, n))).each(y(this._id, t)) : this.styleTween(t, o(t, f, n), u).on("end.style." + t, null);
    }
  }, {
    "d3-interpolate": "mkGF",
    "d3-selection": "lm1C",
    "./schedule.js": "GDzO",
    "./tween.js": "CgJV",
    "./interpolate.js": "KSuB"
  }],
  "SCZW": [function (require, module, exports) {
    "use strict";

    function t(t, e, n) {
      return function (r) {
        this.style.setProperty(t, e.call(this, r), n);
      };
    }

    function e(e, n, r) {
      var u, i;

      function l() {
        var l = n.apply(this, arguments);
        return l !== i && (u = (i = l) && t(e, l, r)), u;
      }

      return l._value = n, l;
    }

    function n(t, n, r) {
      var u = "style." + (t += "");
      if (arguments.length < 2) return (u = this.tween(u)) && u._value;
      if (null == n) return this.tween(u, null);
      if ("function" != typeof n) throw new Error();
      return this.tween(u, e(t, n, null == r ? "" : r));
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n;
  }, {}],
  "HTlb": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;

    var t = require("./tween.js");

    function e(t) {
      return function () {
        this.textContent = t;
      };
    }

    function n(t) {
      return function () {
        var e = t(this);
        this.textContent = null == e ? "" : e;
      };
    }

    function u(u) {
      return this.tween("text", "function" == typeof u ? n((0, t.tweenValue)(this, "text", u)) : e(null == u ? "" : u + ""));
    }
  }, {
    "./tween.js": "CgJV"
  }],
  "Tl5t": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return function (e) {
        this.textContent = t.call(this, e);
      };
    }

    function e(e) {
      var n, r;

      function u() {
        var u = e.apply(this, arguments);
        return u !== r && (n = (r = u) && t(u)), n;
      }

      return u._value = e, u;
    }

    function n(t) {
      var n = "text";
      if (arguments.length < 1) return (n = this.tween(n)) && n._value;
      if (null == t) return this.tween(n, null);
      if ("function" != typeof t) throw new Error();
      return this.tween(n, e(t));
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n;
  }, {}],
  "rWxz": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i;

    var e = require("./index.js"),
        t = n(require("./schedule.js"));

    function r() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return r = function r() {
        return e;
      }, e;
    }

    function n(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var t = r();
      if (t && t.has(e)) return t.get(e);
      var n = {},
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var o in e) {
        if (Object.prototype.hasOwnProperty.call(e, o)) {
          var u = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          u && (u.get || u.set) ? Object.defineProperty(n, o, u) : n[o] = e[o];
        }
      }

      return n.default = e, t && t.set(e, n), n;
    }

    function i() {
      for (var r = this._name, n = this._id, i = (0, e.newId)(), o = this._groups, u = o.length, a = 0; a < u; ++a) {
        for (var f, s = o[a], l = s.length, p = 0; p < l; ++p) {
          if (f = s[p]) {
            var c = (0, t.get)(f, n);
            (0, t.default)(f, r, i, p, s, {
              time: c.time + c.delay + c.duration,
              delay: 0,
              duration: c.duration,
              ease: c.ease
            });
          }
        }
      }

      return new e.Transition(o, this._parents, r, i);
    }
  }, {
    "./index.js": "J3C7",
    "./schedule.js": "GDzO"
  }],
  "gOto": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = require("./schedule.js");

    function t() {
      var t,
          u,
          n = this,
          r = n._id,
          s = n.size();
      return new Promise(function (i, o) {
        var c = {
          value: o
        },
            a = {
          value: function value() {
            0 == --s && i();
          }
        };
        n.each(function () {
          var n = (0, e.set)(this, r),
              s = n.on;
          s !== t && ((u = (t = s).copy())._.cancel.push(c), u._.interrupt.push(c), u._.end.push(a)), n.on = u;
        });
      });
    }
  }, {
    "./schedule.js": "GDzO"
  }],
  "J3C7": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.Transition = h, exports.default = v, exports.newId = g;

    var e = require("d3-selection"),
        t = m(require("./attr.js")),
        r = m(require("./attrTween.js")),
        s = m(require("./delay.js")),
        u = m(require("./duration.js")),
        i = m(require("./ease.js")),
        l = m(require("./filter.js")),
        n = m(require("./merge.js")),
        a = m(require("./on.js")),
        o = m(require("./remove.js")),
        d = m(require("./select.js")),
        f = m(require("./selectAll.js")),
        c = m(require("./selection.js")),
        j = m(require("./style.js")),
        q = m(require("./styleTween.js")),
        p = m(require("./text.js")),
        y = m(require("./textTween.js")),
        w = m(require("./transition.js")),
        x = m(require("./tween.js")),
        _ = m(require("./end.js"));

    function m(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var T = 0;

    function h(e, t, r, s) {
      this._groups = e, this._parents = t, this._name = r, this._id = s;
    }

    function v(t) {
      return (0, e.selection)().transition(t);
    }

    function g() {
      return ++T;
    }

    var z = e.selection.prototype;
    h.prototype = v.prototype = {
      constructor: h,
      select: d.default,
      selectAll: f.default,
      filter: l.default,
      merge: n.default,
      selection: c.default,
      transition: w.default,
      call: z.call,
      nodes: z.nodes,
      node: z.node,
      size: z.size,
      empty: z.empty,
      each: z.each,
      on: a.default,
      attr: t.default,
      attrTween: r.default,
      style: j.default,
      styleTween: q.default,
      text: p.default,
      textTween: y.default,
      remove: o.default,
      tween: x.default,
      delay: s.default,
      duration: u.default,
      ease: i.default,
      end: _.default
    };
  }, {
    "d3-selection": "lm1C",
    "./attr.js": "e4SM",
    "./attrTween.js": "L4WC",
    "./delay.js": "K26P",
    "./duration.js": "ZZtL",
    "./ease.js": "pgS5",
    "./filter.js": "QDlU",
    "./merge.js": "Z2Q2",
    "./on.js": "VZes",
    "./remove.js": "FS2t",
    "./select.js": "Xvwr",
    "./selectAll.js": "DOdJ",
    "./selection.js": "bQR7",
    "./style.js": "gXfd",
    "./styleTween.js": "SCZW",
    "./text.js": "HTlb",
    "./textTween.js": "Tl5t",
    "./transition.js": "rWxz",
    "./tween.js": "CgJV",
    "./end.js": "gOto"
  }],
  "fXiu": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return +e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.linear = e;
  }, {}],
  "GaS5": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return t * t;
    }

    function e(t) {
      return t * (2 - t);
    }

    function u(t) {
      return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.quadIn = t, exports.quadOut = e, exports.quadInOut = u;
  }, {}],
  "PA7e": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return t * t * t;
    }

    function e(t) {
      return --t * t * t + 1;
    }

    function u(t) {
      return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.cubicIn = t, exports.cubicOut = e, exports.cubicInOut = u;
  }, {}],
  "ECJi": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.polyInOut = exports.polyOut = exports.polyIn = void 0;

    var t = 3,
        n = function t(n) {
      function o(t) {
        return Math.pow(t, n);
      }

      return n = +n, o.exponent = t, o;
    }(t);

    exports.polyIn = n;

    var o = function t(n) {
      function o(t) {
        return 1 - Math.pow(1 - t, n);
      }

      return n = +n, o.exponent = t, o;
    }(t);

    exports.polyOut = o;

    var e = function t(n) {
      function o(t) {
        return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2;
      }

      return n = +n, o.exponent = t, o;
    }(t);

    exports.polyInOut = e;
  }, {}],
  "sZZb": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.sinIn = e, exports.sinOut = r, exports.sinInOut = s;
    var t = Math.PI,
        n = t / 2;

    function e(t) {
      return 1 - Math.cos(t * n);
    }

    function r(t) {
      return Math.sin(t * n);
    }

    function s(n) {
      return (1 - Math.cos(t * n)) / 2;
    }
  }, {}],
  "rYq8": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return Math.pow(2, 10 * t - 10);
    }

    function e(t) {
      return 1 - Math.pow(2, -10 * t);
    }

    function o(t) {
      return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.expIn = t, exports.expOut = e, exports.expInOut = o;
  }, {}],
  "hED8": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return 1 - Math.sqrt(1 - t * t);
    }

    function r(t) {
      return Math.sqrt(1 - --t * t);
    }

    function e(t) {
      return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.circleIn = t, exports.circleOut = r, exports.circleInOut = e;
  }, {}],
  "MKsh": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.bounceIn = b, exports.bounceOut = f, exports.bounceInOut = x;
    var e = 4 / 11,
        t = 6 / 11,
        n = 8 / 11,
        r = .75,
        u = 9 / 11,
        o = 10 / 11,
        c = .9375,
        s = 21 / 22,
        i = 63 / 64,
        p = 1 / e / e;

    function b(e) {
      return 1 - f(1 - e);
    }

    function f(b) {
      return (b = +b) < e ? p * b * b : b < n ? p * (b -= t) * b + r : b < o ? p * (b -= u) * b + c : p * (b -= s) * b + i;
    }

    function x(e) {
      return ((e *= 2) <= 1 ? 1 - f(1 - e) : f(e - 1) + 1) / 2;
    }
  }, {}],
  "fCsL": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.backInOut = exports.backOut = exports.backIn = void 0;

    var t = 1.70158,
        r = function t(r) {
      function o(t) {
        return t * t * ((r + 1) * t - r);
      }

      return r = +r, o.overshoot = t, o;
    }(t);

    exports.backIn = r;

    var o = function t(r) {
      function o(t) {
        return --t * t * ((r + 1) * t + r) + 1;
      }

      return r = +r, o.overshoot = t, o;
    }(t);

    exports.backOut = o;

    var e = function t(r) {
      function o(t) {
        return ((t *= 2) < 1 ? t * t * ((r + 1) * t - r) : (t -= 2) * t * ((r + 1) * t + r) + 2) / 2;
      }

      return r = +r, o.overshoot = t, o;
    }(t);

    exports.backInOut = e;
  }, {}],
  "xolo": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.elasticInOut = exports.elasticOut = exports.elasticIn = void 0;

    var t = 2 * Math.PI,
        n = 1,
        r = .3,
        e = function n(r, e) {
      var a = Math.asin(1 / (r = Math.max(1, r))) * (e /= t);

      function i(t) {
        return r * Math.pow(2, 10 * --t) * Math.sin((a - t) / e);
      }

      return i.amplitude = function (r) {
        return n(r, e * t);
      }, i.period = function (t) {
        return n(r, t);
      }, i;
    }(n, r);

    exports.elasticIn = e;

    var a = function n(r, e) {
      var a = Math.asin(1 / (r = Math.max(1, r))) * (e /= t);

      function i(t) {
        return 1 - r * Math.pow(2, -10 * (t = +t)) * Math.sin((t + a) / e);
      }

      return i.amplitude = function (r) {
        return n(r, e * t);
      }, i.period = function (t) {
        return n(r, t);
      }, i;
    }(n, r);

    exports.elasticOut = a;

    var i = function n(r, e) {
      var a = Math.asin(1 / (r = Math.max(1, r))) * (e /= t);

      function i(t) {
        return ((t = 2 * t - 1) < 0 ? r * Math.pow(2, 10 * t) * Math.sin((a - t) / e) : 2 - r * Math.pow(2, -10 * t) * Math.sin((a + t) / e)) / 2;
      }

      return i.amplitude = function (r) {
        return n(r, e * t);
      }, i.period = function (t) {
        return n(r, t);
      }, i;
    }(n, r);

    exports.elasticInOut = i;
  }, {}],
  "CFyW": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "easeLinear", {
      enumerable: !0,
      get: function get() {
        return e.linear;
      }
    }), Object.defineProperty(exports, "easeQuad", {
      enumerable: !0,
      get: function get() {
        return t.quadInOut;
      }
    }), Object.defineProperty(exports, "easeQuadIn", {
      enumerable: !0,
      get: function get() {
        return t.quadIn;
      }
    }), Object.defineProperty(exports, "easeQuadOut", {
      enumerable: !0,
      get: function get() {
        return t.quadOut;
      }
    }), Object.defineProperty(exports, "easeQuadInOut", {
      enumerable: !0,
      get: function get() {
        return t.quadInOut;
      }
    }), Object.defineProperty(exports, "easeCubic", {
      enumerable: !0,
      get: function get() {
        return r.cubicInOut;
      }
    }), Object.defineProperty(exports, "easeCubicIn", {
      enumerable: !0,
      get: function get() {
        return r.cubicIn;
      }
    }), Object.defineProperty(exports, "easeCubicOut", {
      enumerable: !0,
      get: function get() {
        return r.cubicOut;
      }
    }), Object.defineProperty(exports, "easeCubicInOut", {
      enumerable: !0,
      get: function get() {
        return r.cubicInOut;
      }
    }), Object.defineProperty(exports, "easePoly", {
      enumerable: !0,
      get: function get() {
        return n.polyInOut;
      }
    }), Object.defineProperty(exports, "easePolyIn", {
      enumerable: !0,
      get: function get() {
        return n.polyIn;
      }
    }), Object.defineProperty(exports, "easePolyOut", {
      enumerable: !0,
      get: function get() {
        return n.polyOut;
      }
    }), Object.defineProperty(exports, "easePolyInOut", {
      enumerable: !0,
      get: function get() {
        return n.polyInOut;
      }
    }), Object.defineProperty(exports, "easeSin", {
      enumerable: !0,
      get: function get() {
        return u.sinInOut;
      }
    }), Object.defineProperty(exports, "easeSinIn", {
      enumerable: !0,
      get: function get() {
        return u.sinIn;
      }
    }), Object.defineProperty(exports, "easeSinOut", {
      enumerable: !0,
      get: function get() {
        return u.sinOut;
      }
    }), Object.defineProperty(exports, "easeSinInOut", {
      enumerable: !0,
      get: function get() {
        return u.sinInOut;
      }
    }), Object.defineProperty(exports, "easeExp", {
      enumerable: !0,
      get: function get() {
        return o.expInOut;
      }
    }), Object.defineProperty(exports, "easeExpIn", {
      enumerable: !0,
      get: function get() {
        return o.expIn;
      }
    }), Object.defineProperty(exports, "easeExpOut", {
      enumerable: !0,
      get: function get() {
        return o.expOut;
      }
    }), Object.defineProperty(exports, "easeExpInOut", {
      enumerable: !0,
      get: function get() {
        return o.expInOut;
      }
    }), Object.defineProperty(exports, "easeCircle", {
      enumerable: !0,
      get: function get() {
        return c.circleInOut;
      }
    }), Object.defineProperty(exports, "easeCircleIn", {
      enumerable: !0,
      get: function get() {
        return c.circleIn;
      }
    }), Object.defineProperty(exports, "easeCircleOut", {
      enumerable: !0,
      get: function get() {
        return c.circleOut;
      }
    }), Object.defineProperty(exports, "easeCircleInOut", {
      enumerable: !0,
      get: function get() {
        return c.circleInOut;
      }
    }), Object.defineProperty(exports, "easeBounce", {
      enumerable: !0,
      get: function get() {
        return i.bounceOut;
      }
    }), Object.defineProperty(exports, "easeBounceIn", {
      enumerable: !0,
      get: function get() {
        return i.bounceIn;
      }
    }), Object.defineProperty(exports, "easeBounceOut", {
      enumerable: !0,
      get: function get() {
        return i.bounceOut;
      }
    }), Object.defineProperty(exports, "easeBounceInOut", {
      enumerable: !0,
      get: function get() {
        return i.bounceInOut;
      }
    }), Object.defineProperty(exports, "easeBack", {
      enumerable: !0,
      get: function get() {
        return a.backInOut;
      }
    }), Object.defineProperty(exports, "easeBackIn", {
      enumerable: !0,
      get: function get() {
        return a.backIn;
      }
    }), Object.defineProperty(exports, "easeBackOut", {
      enumerable: !0,
      get: function get() {
        return a.backOut;
      }
    }), Object.defineProperty(exports, "easeBackInOut", {
      enumerable: !0,
      get: function get() {
        return a.backInOut;
      }
    }), Object.defineProperty(exports, "easeElastic", {
      enumerable: !0,
      get: function get() {
        return s.elasticOut;
      }
    }), Object.defineProperty(exports, "easeElasticIn", {
      enumerable: !0,
      get: function get() {
        return s.elasticIn;
      }
    }), Object.defineProperty(exports, "easeElasticOut", {
      enumerable: !0,
      get: function get() {
        return s.elasticOut;
      }
    }), Object.defineProperty(exports, "easeElasticInOut", {
      enumerable: !0,
      get: function get() {
        return s.elasticInOut;
      }
    });

    var e = require("./linear.js"),
        t = require("./quad.js"),
        r = require("./cubic.js"),
        n = require("./poly.js"),
        u = require("./sin.js"),
        o = require("./exp.js"),
        c = require("./circle.js"),
        i = require("./bounce.js"),
        a = require("./back.js"),
        s = require("./elastic.js");
  }, {
    "./linear.js": "fXiu",
    "./quad.js": "GaS5",
    "./cubic.js": "PA7e",
    "./poly.js": "ECJi",
    "./sin.js": "sZZb",
    "./exp.js": "rYq8",
    "./circle.js": "hED8",
    "./bounce.js": "MKsh",
    "./back.js": "fCsL",
    "./elastic.js": "xolo"
  }],
  "CNir": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o;

    var e = require("../transition/index.js"),
        r = i(require("../transition/schedule.js")),
        n = require("d3-ease"),
        t = require("d3-timer");

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = {
      time: null,
      delay: 0,
      duration: 250,
      ease: n.easeCubicInOut
    };

    function a(e, r) {
      for (var n; !(n = e.__transition) || !(n = n[r]);) {
        if (!(e = e.parentNode)) return u.time = (0, t.now)(), u;
      }

      return n;
    }

    function o(n) {
      var i, o;
      n instanceof e.Transition ? (i = n._id, n = n._name) : (i = (0, e.newId)(), (o = u).time = (0, t.now)(), n = null == n ? null : n + "");

      for (var s = this._groups, l = s.length, d = 0; d < l; ++d) {
        for (var f, _ = s[d], c = _.length, v = 0; v < c; ++v) {
          (f = _[v]) && (0, r.default)(f, n, i, v, _, o || a(f, i));
        }
      }

      return new e.Transition(s, this._parents, n, i);
    }
  }, {
    "../transition/index.js": "J3C7",
    "../transition/schedule.js": "GDzO",
    "d3-ease": "CFyW",
    "d3-timer": "CBES"
  }],
  "uhVG": [function (require, module, exports) {
    "use strict";

    var e = require("d3-selection"),
        t = i(require("./interrupt.js")),
        r = i(require("./transition.js"));

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    e.selection.prototype.interrupt = t.default, e.selection.prototype.transition = r.default;
  }, {
    "d3-selection": "lm1C",
    "./interrupt.js": "JwzZ",
    "./transition.js": "CNir"
  }],
  "zz7H": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = require("./transition/index.js"),
        n = require("./transition/schedule.js"),
        r = [null];

    function t(t, i) {
      var u,
          s,
          l = t.__transition;
      if (l) for (s in i = null == i ? null : i + "", l) {
        if ((u = l[s]).state > n.SCHEDULED && u.name === i) return new e.Transition([[t]], r, i, +s);
      }
      return null;
    }
  }, {
    "./transition/index.js": "J3C7",
    "./transition/schedule.js": "GDzO"
  }],
  "Fcbi": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "transition", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "active", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "interrupt", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), require("./selection/index.js");
    var e = n(require("./transition/index.js")),
        t = n(require("./active.js")),
        r = n(require("./interrupt.js"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./selection/index.js": "uhVG",
    "./transition/index.js": "J3C7",
    "./active.js": "zz7H",
    "./interrupt.js": "xAnP"
  }],
  "iX60": [function (require, module, exports) {
    "use strict";

    function e(e, t, s) {
      this.target = e, this.type = t, this.selection = s;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "HwJw": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.brushSelection = E, exports.brushX = T, exports.brushY = V, exports.default = D;

    var t = require("d3-dispatch"),
        e = require("d3-drag"),
        n = require("d3-interpolate"),
        r = require("d3-selection"),
        s = require("d3-transition"),
        u = c(require("./constant.js")),
        i = c(require("./event.js")),
        a = l(require("./noevent.js"));

    function o() {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap();
      return o = function o() {
        return t;
      }, t;
    }

    function l(t) {
      if (t && t.__esModule) return t;
      if (null === t || "object" != _typeof(t) && "function" != typeof t) return {
        default: t
      };
      var e = o();
      if (e && e.has(t)) return e.get(t);
      var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var s in t) {
        if (Object.prototype.hasOwnProperty.call(t, s)) {
          var u = r ? Object.getOwnPropertyDescriptor(t, s) : null;
          u && (u.get || u.set) ? Object.defineProperty(n, s, u) : n[s] = t[s];
        }
      }

      return n.default = t, e && e.set(t, n), n;
    }

    function c(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var h = {
      name: "drag"
    },
        f = {
      name: "space"
    },
        p = {
      name: "handle"
    },
        d = {
      name: "center"
    };

    function v(t) {
      return [+t[0], +t[1]];
    }

    function y(t) {
      return [v(t[0]), v(t[1])];
    }

    function b(t) {
      return function (e) {
        return (0, r.touch)(e, r.event.touches, t);
      };
    }

    var m = {
      name: "x",
      handles: ["w", "e"].map(z),
      input: function input(t, e) {
        return null == t ? null : [[+t[0], e[0][1]], [+t[1], e[1][1]]];
      },
      output: function output(t) {
        return t && [t[0][0], t[1][0]];
      }
    },
        w = {
      name: "y",
      handles: ["n", "s"].map(z),
      input: function input(t, e) {
        return null == t ? null : [[e[0][0], +t[0]], [e[1][0], +t[1]]];
      },
      output: function output(t) {
        return t && [t[0][1], t[1][1]];
      }
    },
        g = {
      name: "xy",
      handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(z),
      input: function input(t) {
        return null == t ? null : y(t);
      },
      output: function output(t) {
        return t;
      }
    },
        x = {
      overlay: "crosshair",
      selection: "move",
      n: "ns-resize",
      e: "ew-resize",
      s: "ns-resize",
      w: "ew-resize",
      nw: "nwse-resize",
      ne: "nesw-resize",
      se: "nwse-resize",
      sw: "nesw-resize"
    },
        M = {
      e: "w",
      w: "e",
      nw: "ne",
      ne: "nw",
      se: "sw",
      sw: "se"
    },
        _ = {
      n: "s",
      s: "n",
      nw: "sw",
      ne: "se",
      se: "ne",
      sw: "nw"
    },
        k = {
      overlay: 1,
      selection: 1,
      n: null,
      e: 1,
      s: null,
      w: -1,
      nw: -1,
      ne: 1,
      se: 1,
      sw: -1
    },
        j = {
      overlay: 1,
      selection: 1,
      n: -1,
      e: null,
      s: 1,
      w: null,
      nw: -1,
      ne: -1,
      se: 1,
      sw: 1
    };

    function z(t) {
      return {
        type: t
      };
    }

    function O() {
      return !r.event.ctrlKey && !r.event.button;
    }

    function q() {
      var t = this.ownerSVGElement || this;
      return t.hasAttribute("viewBox") ? [[(t = t.viewBox.baseVal).x, t.y], [t.x + t.width, t.y + t.height]] : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]];
    }

    function A() {
      return navigator.maxTouchPoints || "ontouchstart" in this;
    }

    function P(t) {
      for (; !t.__brush;) {
        if (!(t = t.parentNode)) return;
      }

      return t.__brush;
    }

    function K(t) {
      return t[0][0] === t[1][0] || t[0][1] === t[1][1];
    }

    function E(t) {
      var e = t.__brush;
      return e ? e.dim.output(e.selection) : null;
    }

    function T() {
      return S(m);
    }

    function V() {
      return S(w);
    }

    function D() {
      return S(g);
    }

    function S(o) {
      var l,
          c = q,
          v = O,
          g = A,
          E = !0,
          T = (0, t.dispatch)("start", "brush", "end"),
          V = 6;

      function D(t) {
        var e = t.property("__brush", X).selectAll(".overlay").data([z("overlay")]);
        e.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", x.overlay).merge(e).each(function () {
          var t = P(this).extent;
          (0, r.select)(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1]);
        }), t.selectAll(".selection").data([z("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", x.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
        var n = t.selectAll(".handle").data(o.handles, function (t) {
          return t.type;
        });
        n.exit().remove(), n.enter().append("rect").attr("class", function (t) {
          return "handle handle--" + t.type;
        }).attr("cursor", function (t) {
          return x[t.type];
        }), t.each(S).attr("fill", "none").attr("pointer-events", "all").on("mousedown.brush", W).filter(g).on("touchstart.brush", W).on("touchmove.brush", G).on("touchend.brush touchcancel.brush", N).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
      }

      function S() {
        var t = (0, r.select)(this),
            e = P(this).selection;
        e ? (t.selectAll(".selection").style("display", null).attr("x", e[0][0]).attr("y", e[0][1]).attr("width", e[1][0] - e[0][0]).attr("height", e[1][1] - e[0][1]), t.selectAll(".handle").style("display", null).attr("x", function (t) {
          return "e" === t.type[t.type.length - 1] ? e[1][0] - V / 2 : e[0][0] - V / 2;
        }).attr("y", function (t) {
          return "s" === t.type[0] ? e[1][1] - V / 2 : e[0][1] - V / 2;
        }).attr("width", function (t) {
          return "n" === t.type || "s" === t.type ? e[1][0] - e[0][0] + V : V;
        }).attr("height", function (t) {
          return "e" === t.type || "w" === t.type ? e[1][1] - e[0][1] + V : V;
        })) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
      }

      function B(t, e, n) {
        return !n && t.__brush.emitter || new C(t, e);
      }

      function C(t, e) {
        this.that = t, this.args = e, this.state = t.__brush, this.active = 0;
      }

      function W() {
        if ((!l || r.event.touches) && v.apply(this, arguments)) {
          var t,
              n,
              u,
              i,
              c,
              y,
              g,
              z,
              O,
              q,
              A,
              T = this,
              V = r.event.target.__data__.type,
              D = "selection" === (E && r.event.metaKey ? V = "overlay" : V) ? h : E && r.event.altKey ? d : p,
              C = o === w ? null : k[V],
              W = o === m ? null : j[V],
              G = P(T),
              N = G.extent,
              X = G.selection,
              Y = N[0][0],
              F = N[0][1],
              H = N[1][0],
              I = N[1][1],
              J = 0,
              L = 0,
              Q = C && W && E && r.event.shiftKey,
              R = r.event.touches ? b(r.event.changedTouches[0].identifier) : r.mouse,
              U = R(T),
              Z = U,
              $ = B(T, arguments, !0).beforestart();
          "overlay" === V ? (X && (O = !0), G.selection = X = [[t = o === w ? Y : U[0], u = o === m ? F : U[1]], [c = o === w ? H : t, g = o === m ? I : u]]) : (t = X[0][0], u = X[0][1], c = X[1][0], g = X[1][1]), n = t, i = u, y = c, z = g;
          var tt = (0, r.select)(T).attr("pointer-events", "none"),
              et = tt.selectAll(".overlay").attr("cursor", x[V]);
          if (r.event.touches) $.moved = rt, $.ended = ut;else {
            var nt = (0, r.select)(r.event.view).on("mousemove.brush", rt, !0).on("mouseup.brush", ut, !0);
            E && nt.on("keydown.brush", function () {
              switch (r.event.keyCode) {
                case 16:
                  Q = C && W;
                  break;

                case 18:
                  D === p && (C && (c = y - J * C, t = n + J * C), W && (g = z - L * W, u = i + L * W), D = d, st());
                  break;

                case 32:
                  D !== p && D !== d || (C < 0 ? c = y - J : C > 0 && (t = n - J), W < 0 ? g = z - L : W > 0 && (u = i - L), D = f, et.attr("cursor", x.selection), st());
                  break;

                default:
                  return;
              }

              (0, a.default)();
            }, !0).on("keyup.brush", function () {
              switch (r.event.keyCode) {
                case 16:
                  Q && (q = A = Q = !1, st());
                  break;

                case 18:
                  D === d && (C < 0 ? c = y : C > 0 && (t = n), W < 0 ? g = z : W > 0 && (u = i), D = p, st());
                  break;

                case 32:
                  D === f && (r.event.altKey ? (C && (c = y - J * C, t = n + J * C), W && (g = z - L * W, u = i + L * W), D = d) : (C < 0 ? c = y : C > 0 && (t = n), W < 0 ? g = z : W > 0 && (u = i), D = p), et.attr("cursor", x[V]), st());
                  break;

                default:
                  return;
              }

              (0, a.default)();
            }, !0), (0, e.dragDisable)(r.event.view);
          }
          (0, a.nopropagation)(), (0, s.interrupt)(T), S.call(T), $.start();
        }

        function rt() {
          var t = R(T);
          !Q || q || A || (Math.abs(t[0] - Z[0]) > Math.abs(t[1] - Z[1]) ? A = !0 : q = !0), Z = t, O = !0, (0, a.default)(), st();
        }

        function st() {
          var e;

          switch (J = Z[0] - U[0], L = Z[1] - U[1], D) {
            case f:
            case h:
              C && (J = Math.max(Y - t, Math.min(H - c, J)), n = t + J, y = c + J), W && (L = Math.max(F - u, Math.min(I - g, L)), i = u + L, z = g + L);
              break;

            case p:
              C < 0 ? (J = Math.max(Y - t, Math.min(H - t, J)), n = t + J, y = c) : C > 0 && (J = Math.max(Y - c, Math.min(H - c, J)), n = t, y = c + J), W < 0 ? (L = Math.max(F - u, Math.min(I - u, L)), i = u + L, z = g) : W > 0 && (L = Math.max(F - g, Math.min(I - g, L)), i = u, z = g + L);
              break;

            case d:
              C && (n = Math.max(Y, Math.min(H, t - J * C)), y = Math.max(Y, Math.min(H, c + J * C))), W && (i = Math.max(F, Math.min(I, u - L * W)), z = Math.max(F, Math.min(I, g + L * W)));
          }

          y < n && (C *= -1, e = t, t = c, c = e, e = n, n = y, y = e, V in M && et.attr("cursor", x[V = M[V]])), z < i && (W *= -1, e = u, u = g, g = e, e = i, i = z, z = e, V in _ && et.attr("cursor", x[V = _[V]])), G.selection && (X = G.selection), q && (n = X[0][0], y = X[1][0]), A && (i = X[0][1], z = X[1][1]), X[0][0] === n && X[0][1] === i && X[1][0] === y && X[1][1] === z || (G.selection = [[n, i], [y, z]], S.call(T), $.brush());
        }

        function ut() {
          if ((0, a.nopropagation)(), r.event.touches) {
            if (r.event.touches.length) return;
            l && clearTimeout(l), l = setTimeout(function () {
              l = null;
            }, 500);
          } else (0, e.dragEnable)(r.event.view, O), nt.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);

          tt.attr("pointer-events", "all"), et.attr("cursor", x.overlay), G.selection && (X = G.selection), K(X) && (G.selection = null, S.call(T)), $.end();
        }
      }

      function G() {
        B(this, arguments).moved();
      }

      function N() {
        B(this, arguments).ended();
      }

      function X() {
        var t = this.__brush || {
          selection: null
        };
        return t.extent = y(c.apply(this, arguments)), t.dim = o, t;
      }

      return D.move = function (t, e) {
        t.selection ? t.on("start.brush", function () {
          B(this, arguments).beforestart().start();
        }).on("interrupt.brush end.brush", function () {
          B(this, arguments).end();
        }).tween("brush", function () {
          var t = this,
              r = t.__brush,
              s = B(t, arguments),
              u = r.selection,
              i = o.input("function" == typeof e ? e.apply(this, arguments) : e, r.extent),
              a = (0, n.interpolate)(u, i);

          function l(e) {
            r.selection = 1 === e && null === i ? null : a(e), S.call(t), s.brush();
          }

          return null !== u && null !== i ? l : l(1);
        }) : t.each(function () {
          var t = arguments,
              n = this.__brush,
              r = o.input("function" == typeof e ? e.apply(this, t) : e, n.extent),
              u = B(this, t).beforestart();
          (0, s.interrupt)(this), n.selection = null === r ? null : r, S.call(this), u.start().brush().end();
        });
      }, D.clear = function (t) {
        D.move(t, null);
      }, C.prototype = {
        beforestart: function beforestart() {
          return 1 == ++this.active && (this.state.emitter = this, this.starting = !0), this;
        },
        start: function start() {
          return this.starting ? (this.starting = !1, this.emit("start")) : this.emit("brush"), this;
        },
        brush: function brush() {
          return this.emit("brush"), this;
        },
        end: function end() {
          return 0 == --this.active && (delete this.state.emitter, this.emit("end")), this;
        },
        emit: function emit(t) {
          (0, r.customEvent)(new i.default(D, t, o.output(this.state.selection)), T.apply, T, [t, this.that, this.args]);
        }
      }, D.extent = function (t) {
        return arguments.length ? (c = "function" == typeof t ? t : (0, u.default)(y(t)), D) : c;
      }, D.filter = function (t) {
        return arguments.length ? (v = "function" == typeof t ? t : (0, u.default)(!!t), D) : v;
      }, D.touchable = function (t) {
        return arguments.length ? (g = "function" == typeof t ? t : (0, u.default)(!!t), D) : g;
      }, D.handleSize = function (t) {
        return arguments.length ? (V = +t, D) : V;
      }, D.keyModifiers = function (t) {
        return arguments.length ? (E = !!t, D) : E;
      }, D.on = function () {
        var t = T.on.apply(T, arguments);
        return t === T ? D : t;
      }, D;
    }
  }, {
    "d3-dispatch": "UUCs",
    "d3-drag": "LrBi",
    "d3-interpolate": "mkGF",
    "d3-selection": "lm1C",
    "d3-transition": "Fcbi",
    "./constant.js": "OY6d",
    "./event.js": "iX60",
    "./noevent.js": "DCEg"
  }],
  "TNt0": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "brush", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "brushX", {
      enumerable: !0,
      get: function get() {
        return e.brushX;
      }
    }), Object.defineProperty(exports, "brushY", {
      enumerable: !0,
      get: function get() {
        return e.brushY;
      }
    }), Object.defineProperty(exports, "brushSelection", {
      enumerable: !0,
      get: function get() {
        return e.brushSelection;
      }
    });
    var e = t(require("./brush.js"));

    function r() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return r = function r() {
        return e;
      }, e;
    }

    function t(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var t = r();
      if (t && t.has(e)) return t.get(e);
      var n = {},
          u = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var o in e) {
        if (Object.prototype.hasOwnProperty.call(e, o)) {
          var f = u ? Object.getOwnPropertyDescriptor(e, o) : null;
          f && (f.get || f.set) ? Object.defineProperty(n, o, f) : n[o] = e[o];
        }
      }

      return n.default = e, t && t.set(e, n), n;
    }
  }, {
    "./brush.js": "HwJw"
  }],
  "zRdk": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.max = exports.tau = exports.halfPi = exports.pi = exports.sin = exports.cos = void 0;
    var t = Math.cos;
    exports.cos = t;
    var r = Math.sin;
    exports.sin = r;
    var s = Math.PI;
    exports.pi = s;
    var e = s / 2;
    exports.halfPi = e;
    var o = 2 * s;
    exports.tau = o;
    var a = Math.max;
    exports.max = a;
  }, {}],
  "YLYV": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;

    var r = require("d3-array"),
        e = require("./math");

    function n(r) {
      return function (e, n) {
        return r(e.source.value + e.target.value, n.source.value + n.target.value);
      };
    }

    function u() {
      var u = 0,
          t = null,
          a = null,
          o = null;

      function l(n) {
        var l,
            s,
            f,
            c,
            g,
            i,
            v = n.length,
            d = [],
            h = (0, r.range)(v),
            p = [],
            x = [],
            A = x.groups = new Array(v),
            y = new Array(v * v);

        for (l = 0, g = -1; ++g < v;) {
          for (s = 0, i = -1; ++i < v;) {
            s += n[g][i];
          }

          d.push(s), p.push((0, r.range)(v)), l += s;
        }

        for (t && h.sort(function (r, e) {
          return t(d[r], d[e]);
        }), a && p.forEach(function (r, e) {
          r.sort(function (r, u) {
            return a(n[e][r], n[e][u]);
          });
        }), c = (l = (0, e.max)(0, e.tau - u * v) / l) ? u : e.tau / v, s = 0, g = -1; ++g < v;) {
          for (f = s, i = -1; ++i < v;) {
            var _ = h[g],
                b = p[_][i],
                m = n[_][b],
                q = s,
                w = s += m * l;
            y[b * v + _] = {
              index: _,
              subindex: b,
              startAngle: q,
              endAngle: w,
              value: m
            };
          }

          A[_] = {
            index: _,
            startAngle: f,
            endAngle: s,
            value: d[_]
          }, s += c;
        }

        for (g = -1; ++g < v;) {
          for (i = g - 1; ++i < v;) {
            var j = y[i * v + g],
                C = y[g * v + i];
            (j.value || C.value) && x.push(j.value < C.value ? {
              source: C,
              target: j
            } : {
              source: j,
              target: C
            });
          }
        }

        return o ? x.sort(o) : x;
      }

      return l.padAngle = function (r) {
        return arguments.length ? (u = (0, e.max)(0, r), l) : u;
      }, l.sortGroups = function (r) {
        return arguments.length ? (t = r, l) : t;
      }, l.sortSubgroups = function (r) {
        return arguments.length ? (a = r, l) : a;
      }, l.sortChords = function (r) {
        return arguments.length ? (null == r ? o = null : (o = n(r))._ = r, l) : o && o._;
      }, l;
    }
  }, {
    "d3-array": "cBuZ",
    "./math": "zRdk"
  }],
  "E5FC": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var t = Math.PI,
        i = 2 * t,
        s = 1e-6,
        h = i - s;

    function _() {
      this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
    }

    function n() {
      return new _();
    }

    _.prototype = n.prototype = {
      constructor: _,
      moveTo: function moveTo(t, i) {
        this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +i);
      },
      closePath: function closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
      },
      lineTo: function lineTo(t, i) {
        this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +i);
      },
      quadraticCurveTo: function quadraticCurveTo(t, i, s, h) {
        this._ += "Q" + +t + "," + +i + "," + (this._x1 = +s) + "," + (this._y1 = +h);
      },
      bezierCurveTo: function bezierCurveTo(t, i, s, h, _, n) {
        this._ += "C" + +t + "," + +i + "," + +s + "," + +h + "," + (this._x1 = +_) + "," + (this._y1 = +n);
      },
      arcTo: function arcTo(i, h, _, n, e) {
        i = +i, h = +h, _ = +_, n = +n, e = +e;
        var r = this._x1,
            o = this._y1,
            a = _ - i,
            u = n - h,
            x = r - i,
            c = o - h,
            y = x * x + c * c;
        if (e < 0) throw new Error("negative radius: " + e);
        if (null === this._x1) this._ += "M" + (this._x1 = i) + "," + (this._y1 = h);else if (y > s) {
          if (Math.abs(c * a - u * x) > s && e) {
            var f = _ - r,
                M = n - o,
                l = a * a + u * u,
                v = f * f + M * M,
                d = Math.sqrt(l),
                p = Math.sqrt(y),
                b = e * Math.tan((t - Math.acos((l + y - v) / (2 * d * p))) / 2),
                w = b / p,
                T = b / d;
            Math.abs(w - 1) > s && (this._ += "L" + (i + w * x) + "," + (h + w * c)), this._ += "A" + e + "," + e + ",0,0," + +(c * f > x * M) + "," + (this._x1 = i + T * a) + "," + (this._y1 = h + T * u);
          } else this._ += "L" + (this._x1 = i) + "," + (this._y1 = h);
        } else ;
      },
      arc: function arc(_, n, e, r, o, a) {
        _ = +_, n = +n, a = !!a;
        var u = (e = +e) * Math.cos(r),
            x = e * Math.sin(r),
            c = _ + u,
            y = n + x,
            f = 1 ^ a,
            M = a ? r - o : o - r;
        if (e < 0) throw new Error("negative radius: " + e);
        null === this._x1 ? this._ += "M" + c + "," + y : (Math.abs(this._x1 - c) > s || Math.abs(this._y1 - y) > s) && (this._ += "L" + c + "," + y), e && (M < 0 && (M = M % i + i), M > h ? this._ += "A" + e + "," + e + ",0,1," + f + "," + (_ - u) + "," + (n - x) + "A" + e + "," + e + ",0,1," + f + "," + (this._x1 = c) + "," + (this._y1 = y) : M > s && (this._ += "A" + e + "," + e + ",0," + +(M >= t) + "," + f + "," + (this._x1 = _ + e * Math.cos(o)) + "," + (this._y1 = n + e * Math.sin(o))));
      },
      rect: function rect(t, i, s, h) {
        this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +i) + "h" + +s + "v" + +h + "h" + -s + "Z";
      },
      toString: function toString() {
        return this._;
      }
    };
    var e = n;
    exports.default = e;
  }, {}],
  "dz42": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "path", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    });
    var e = t(require("./path.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./path.js": "E5FC"
  }],
  "ootM": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = f;

    var t = require("./array"),
        n = u(require("./constant")),
        e = require("./math"),
        r = require("d3-path");

    function u(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function l(t) {
      return t.source;
    }

    function i(t) {
      return t.target;
    }

    function a(t) {
      return t.radius;
    }

    function o(t) {
      return t.startAngle;
    }

    function c(t) {
      return t.endAngle;
    }

    function f() {
      var u = l,
          f = i,
          s = a,
          p = o,
          h = c,
          d = null;

      function y() {
        var n,
            l = t.slice.call(arguments),
            i = u.apply(this, l),
            a = f.apply(this, l),
            o = +s.apply(this, (l[0] = i, l)),
            c = p.apply(this, l) - e.halfPi,
            y = h.apply(this, l) - e.halfPi,
            g = o * (0, e.cos)(c),
            v = o * (0, e.sin)(c),
            q = +s.apply(this, (l[0] = a, l)),
            P = p.apply(this, l) - e.halfPi,
            A = h.apply(this, l) - e.halfPi;
        if (d || (d = n = (0, r.path)()), d.moveTo(g, v), d.arc(0, 0, o, c, y), c === P && y === A || (d.quadraticCurveTo(0, 0, q * (0, e.cos)(P), q * (0, e.sin)(P)), d.arc(0, 0, q, P, A)), d.quadraticCurveTo(0, 0, g, v), d.closePath(), n) return d = null, n + "" || null;
      }

      return y.radius = function (t) {
        return arguments.length ? (s = "function" == typeof t ? t : (0, n.default)(+t), y) : s;
      }, y.startAngle = function (t) {
        return arguments.length ? (p = "function" == typeof t ? t : (0, n.default)(+t), y) : p;
      }, y.endAngle = function (t) {
        return arguments.length ? (h = "function" == typeof t ? t : (0, n.default)(+t), y) : h;
      }, y.source = function (t) {
        return arguments.length ? (u = t, y) : u;
      }, y.target = function (t) {
        return arguments.length ? (f = t, y) : f;
      }, y.context = function (t) {
        return arguments.length ? (d = null == t ? null : t, y) : d;
      }, y;
    }
  }, {
    "./array": "rv5q",
    "./constant": "OY6d",
    "./math": "zRdk",
    "d3-path": "dz42"
  }],
  "cf1F": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "chord", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "ribbon", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    });
    var e = t(require("./chord")),
        r = t(require("./ribbon"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./chord": "YLYV",
    "./ribbon": "ootM"
  }],
  "wDCQ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.prefix = void 0;
    var t = "$";

    function r() {}

    function e(t, e) {
      var i = new r();
      if (t instanceof r) t.each(function (t, r) {
        i.set(r, t);
      });else if (Array.isArray(t)) {
        var n,
            s = -1,
            o = t.length;
        if (null == e) for (; ++s < o;) {
          i.set(s, t[s]);
        } else for (; ++s < o;) {
          i.set(e(n = t[s], s, t), n);
        }
      } else if (t) for (var u in t) {
        i.set(u, t[u]);
      }
      return i;
    }

    exports.prefix = t, r.prototype = e.prototype = {
      constructor: r,
      has: function has(r) {
        return t + r in this;
      },
      get: function get(r) {
        return this[t + r];
      },
      set: function set(r, e) {
        return this[t + r] = e, this;
      },
      remove: function remove(r) {
        var e = t + r;
        return e in this && delete this[e];
      },
      clear: function clear() {
        for (var r in this) {
          r[0] === t && delete this[r];
        }
      },
      keys: function keys() {
        var r = [];

        for (var e in this) {
          e[0] === t && r.push(e.slice(1));
        }

        return r;
      },
      values: function values() {
        var r = [];

        for (var e in this) {
          e[0] === t && r.push(this[e]);
        }

        return r;
      },
      entries: function entries() {
        var r = [];

        for (var e in this) {
          e[0] === t && r.push({
            key: e.slice(1),
            value: this[e]
          });
        }

        return r;
      },
      size: function size() {
        var r = 0;

        for (var e in this) {
          e[0] === t && ++r;
        }

        return r;
      },
      empty: function empty() {
        for (var r in this) {
          if (r[0] === t) return !1;
        }

        return !0;
      },
      each: function each(r) {
        for (var e in this) {
          e[0] === t && r(this[e], e.slice(1), this);
        }
      }
    };
    var i = e;
    exports.default = i;
  }, {}],
  "TaNJ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
    var n = t(require("./map"));

    function t(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    function e() {
      var t,
          e,
          i,
          l = [],
          c = [];

      function s(u, r, o, f) {
        if (r >= l.length) return null != t && u.sort(t), null != e ? e(u) : u;

        for (var i, c, a, h = -1, p = u.length, d = l[r++], g = (0, n.default)(), v = o(); ++h < p;) {
          (a = g.get(i = d(c = u[h]) + "")) ? a.push(c) : g.set(i, [c]);
        }

        return g.each(function (n, t) {
          f(v, t, s(n, r, o, f));
        }), v;
      }

      return i = {
        object: function object(n) {
          return s(n, 0, u, r);
        },
        map: function map(n) {
          return s(n, 0, o, f);
        },
        entries: function entries(n) {
          return function n(t, u) {
            if (++u > l.length) return t;
            var r,
                o = c[u - 1];
            return null != e && u >= l.length ? r = t.entries() : (r = [], t.each(function (t, e) {
              r.push({
                key: e,
                values: n(t, u)
              });
            })), null != o ? r.sort(function (n, t) {
              return o(n.key, t.key);
            }) : r;
          }(s(n, 0, o, f), 0);
        },
        key: function key(n) {
          return l.push(n), i;
        },
        sortKeys: function sortKeys(n) {
          return c[l.length - 1] = n, i;
        },
        sortValues: function sortValues(n) {
          return t = n, i;
        },
        rollup: function rollup(n) {
          return e = n, i;
        }
      };
    }

    function u() {
      return {};
    }

    function r(n, t, e) {
      n[t] = e;
    }

    function o() {
      return (0, n.default)();
    }

    function f(n, t, e) {
      n.set(t, e);
    }
  }, {
    "./map": "wDCQ"
  }],
  "fgw3": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = r(require("./map"));

    function t() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return t = function t() {
        return e;
      }, e;
    }

    function r(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var r = t();
      if (r && r.has(e)) return r.get(e);
      var n = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var a in e) {
        if (Object.prototype.hasOwnProperty.call(e, a)) {
          var u = o ? Object.getOwnPropertyDescriptor(e, a) : null;
          u && (u.get || u.set) ? Object.defineProperty(n, a, u) : n[a] = e[a];
        }
      }

      return n.default = e, r && r.set(e, n), n;
    }

    function n() {}

    var o = e.default.prototype;

    function a(e, t) {
      var r = new n();
      if (e instanceof n) e.each(function (e) {
        r.add(e);
      });else if (e) {
        var o = -1,
            a = e.length;
        if (null == t) for (; ++o < a;) {
          r.add(e[o]);
        } else for (; ++o < a;) {
          r.add(t(e[o], o, e));
        }
      }
      return r;
    }

    n.prototype = a.prototype = {
      constructor: n,
      has: o.has,
      add: function add(t) {
        return t += "", this[e.prefix + t] = t, this;
      },
      remove: o.remove,
      clear: o.clear,
      values: o.keys,
      size: o.size,
      empty: o.empty,
      each: o.each
    };
    var u = a;
    exports.default = u;
  }, {
    "./map": "wDCQ"
  }],
  "STSP": [function (require, module, exports) {
    "use strict";

    function e(e) {
      var r = [];

      for (var t in e) {
        r.push(t);
      }

      return r;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "wANB": [function (require, module, exports) {
    "use strict";

    function e(e) {
      var r = [];

      for (var t in e) {
        r.push(e[t]);
      }

      return r;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "u9ZW": [function (require, module, exports) {
    "use strict";

    function e(e) {
      var r = [];

      for (var t in e) {
        r.push({
          key: t,
          value: e[t]
        });
      }

      return r;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "qqV1": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "nest", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "set", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "map", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "keys", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "values", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "entries", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    });
    var e = o(require("./nest")),
        r = o(require("./set")),
        t = o(require("./map")),
        u = o(require("./keys")),
        n = o(require("./values")),
        i = o(require("./entries"));

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./nest": "TaNJ",
    "./set": "fgw3",
    "./map": "wDCQ",
    "./keys": "STSP",
    "./values": "wANB",
    "./entries": "u9ZW"
  }],
  "IBma": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.slice = void 0;
    var e = Array.prototype,
        r = e.slice;
    exports.slice = r;
  }, {}],
  "ldhC": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      return e - t;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "hcnZ": [function (require, module, exports) {
    "use strict";

    function e(e) {
      for (var t = 0, r = e.length, o = e[r - 1][1] * e[0][0] - e[r - 1][0] * e[0][1]; ++t < r;) {
        o += e[t - 1][1] * e[t][0] - e[t - 1][0] * e[t][1];
      }

      return o;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "GiY2": [function (require, module, exports) {
    "use strict";

    function r(r, e) {
      for (var n, u = -1, f = e.length; ++u < f;) {
        if (n = t(r, e[u])) return n;
      }

      return 0;
    }

    function t(r, t) {
      for (var n = t[0], u = t[1], f = -1, o = 0, i = r.length, c = i - 1; o < i; c = o++) {
        var a = r[o],
            l = a[0],
            s = a[1],
            v = r[c],
            d = v[0],
            p = v[1];
        if (e(a, v, t)) return 0;
        s > u != p > u && n < (d - l) * (u - s) / (p - s) + l && (f = -f);
      }

      return f;
    }

    function e(r, t, e) {
      var f;
      return n(r, t, e) && u(r[f = +(r[0] === t[0])], e[f], t[f]);
    }

    function n(r, t, e) {
      return (t[0] - r[0]) * (e[1] - r[1]) == (e[0] - r[0]) * (t[1] - r[1]);
    }

    function u(r, t, e) {
      return r <= t && t <= e || e <= t && t <= r;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
  }, {}],
  "BhKh": [function (require, module, exports) {
    "use strict";

    function e() {}

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "oKpg": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = c;

    var r = require("d3-array"),
        e = require("./array"),
        t = u(require("./ascending")),
        n = u(require("./area")),
        a = u(require("./constant")),
        o = u(require("./contains")),
        i = u(require("./noop"));

    function u(r) {
      return r && r.__esModule ? r : {
        default: r
      };
    }

    var f = [[], [[[1, 1.5], [.5, 1]]], [[[1.5, 1], [1, 1.5]]], [[[1.5, 1], [.5, 1]]], [[[1, .5], [1.5, 1]]], [[[1, 1.5], [.5, 1]], [[1, .5], [1.5, 1]]], [[[1, .5], [1, 1.5]]], [[[1, .5], [.5, 1]]], [[[.5, 1], [1, .5]]], [[[1, 1.5], [1, .5]]], [[[.5, 1], [1, .5]], [[1.5, 1], [1, 1.5]]], [[[1.5, 1], [1, .5]]], [[[.5, 1], [1.5, 1]]], [[[1, 1.5], [1.5, 1]]], [[[.5, 1], [1, 1.5]]], []];

    function c() {
      var u = 1,
          c = 1,
          s = r.thresholdSturges,
          l = v;

      function d(e) {
        var n = s(e);
        if (Array.isArray(n)) n = n.slice().sort(t.default);else {
          var a = (0, r.extent)(e),
              o = a[0],
              i = a[1];
          n = (0, r.tickStep)(o, i, n), n = (0, r.range)(Math.floor(o / n) * n, Math.floor(i / n) * n, n);
        }
        return n.map(function (r) {
          return h(e, r);
        });
      }

      function h(r, e) {
        var t = [],
            a = [];
        return function (r, e, t) {
          var n,
              a,
              o,
              i,
              s,
              l,
              d = new Array(),
              h = new Array();
          n = a = -1, i = r[0] >= e, f[i << 1].forEach(v);

          for (; ++n < u - 1;) {
            o = i, i = r[n + 1] >= e, f[o | i << 1].forEach(v);
          }

          f[i << 0].forEach(v);

          for (; ++a < c - 1;) {
            for (n = -1, i = r[a * u + u] >= e, s = r[a * u] >= e, f[i << 1 | s << 2].forEach(v); ++n < u - 1;) {
              o = i, i = r[a * u + u + n + 1] >= e, l = s, s = r[a * u + n + 1] >= e, f[o | i << 1 | s << 2 | l << 3].forEach(v);
            }

            f[i | s << 3].forEach(v);
          }

          n = -1, s = r[a * u] >= e, f[s << 2].forEach(v);

          for (; ++n < u - 1;) {
            l = s, s = r[a * u + n + 1] >= e, f[s << 2 | l << 3].forEach(v);
          }

          function v(r) {
            var e,
                o,
                i = [r[0][0] + n, r[0][1] + a],
                u = [r[1][0] + n, r[1][1] + a],
                f = g(i),
                c = g(u);
            (e = h[f]) ? (o = d[c]) ? (delete h[e.end], delete d[o.start], e === o ? (e.ring.push(u), t(e.ring)) : d[e.start] = h[o.end] = {
              start: e.start,
              end: o.end,
              ring: e.ring.concat(o.ring)
            }) : (delete h[e.end], e.ring.push(u), h[e.end = c] = e) : (e = d[c]) ? (o = h[f]) ? (delete d[e.start], delete h[o.end], e === o ? (e.ring.push(u), t(e.ring)) : d[o.start] = h[e.end] = {
              start: o.start,
              end: e.end,
              ring: o.ring.concat(e.ring)
            }) : (delete d[e.start], e.ring.unshift(i), d[e.start = f] = e) : d[f] = h[c] = {
              start: f,
              end: c,
              ring: [i, u]
            };
          }

          f[s << 3].forEach(v);
        }(r, e, function (o) {
          l(o, r, e), (0, n.default)(o) > 0 ? t.push([o]) : a.push(o);
        }), a.forEach(function (r) {
          for (var e, n = 0, a = t.length; n < a; ++n) {
            if (-1 !== (0, o.default)((e = t[n])[0], r)) return void e.push(r);
          }
        }), {
          type: "MultiPolygon",
          value: e,
          coordinates: t
        };
      }

      function g(r) {
        return 2 * r[0] + r[1] * (u + 1) * 4;
      }

      function v(r, e, t) {
        r.forEach(function (r) {
          var n,
              a = r[0],
              o = r[1],
              i = 0 | a,
              f = 0 | o,
              s = e[f * u + i];
          a > 0 && a < u && i === a && (n = e[f * u + i - 1], r[0] = a + (t - n) / (s - n) - .5), o > 0 && o < c && f === o && (n = e[(f - 1) * u + i], r[1] = o + (t - n) / (s - n) - .5);
        });
      }

      return d.contour = h, d.size = function (r) {
        if (!arguments.length) return [u, c];
        var e = Math.ceil(r[0]),
            t = Math.ceil(r[1]);
        if (!(e > 0 && t > 0)) throw new Error("invalid size");
        return u = e, c = t, d;
      }, d.thresholds = function (r) {
        return arguments.length ? (s = "function" == typeof r ? r : Array.isArray(r) ? (0, a.default)(e.slice.call(r)) : (0, a.default)(r), d) : s;
      }, d.smooth = function (r) {
        return arguments.length ? (l = r ? v : i.default, d) : l === v;
      }, d;
    }
  }, {
    "d3-array": "cBuZ",
    "./array": "IBma",
    "./ascending": "ldhC",
    "./area": "hcnZ",
    "./constant": "OY6d",
    "./contains": "GiY2",
    "./noop": "BhKh"
  }],
  "yZ0K": [function (require, module, exports) {
    "use strict";

    function t(t, a, r) {
      for (var e = t.width, o = t.height, d = 1 + (r << 1), i = 0; i < o; ++i) {
        for (var h = 0, f = 0; h < e + r; ++h) {
          h < e && (f += t.data[h + i * e]), h >= r && (h >= d && (f -= t.data[h - d + i * e]), a.data[h - r + i * e] = f / Math.min(h + 1, e - 1 + d - h, d));
        }
      }
    }

    function a(t, a, r) {
      for (var e = t.width, o = t.height, d = 1 + (r << 1), i = 0; i < e; ++i) {
        for (var h = 0, f = 0; h < o + r; ++h) {
          h < o && (f += t.data[i + h * e]), h >= r && (h >= d && (f -= t.data[i + (h - d) * e]), a.data[i + (h - r) * e] = f / Math.min(h + 1, o - 1 + d - h, d));
        }
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.blurX = t, exports.blurY = a;
  }, {}],
  "VOWF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = f;

    var t = require("d3-array"),
        r = require("./array"),
        e = require("./blur"),
        n = a(require("./constant")),
        i = a(require("./contours"));

    function a(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function h(t) {
      return t[0];
    }

    function u(t) {
      return t[1];
    }

    function o() {
      return 1;
    }

    function f() {
      var a = h,
          f = u,
          d = o,
          l = 960,
          c = 500,
          w = 20,
          s = 2,
          g = 3 * w,
          y = l + 2 * g >> s,
          M = c + 2 * g >> s,
          p = (0, n.default)(20);

      function v(r) {
        var n = new Float32Array(y * M),
            h = new Float32Array(y * M);
        r.forEach(function (t, r, e) {
          var i = +a(t, r, e) + g >> s,
              h = +f(t, r, e) + g >> s,
              u = +d(t, r, e);
          i >= 0 && i < y && h >= 0 && h < M && (n[i + h * y] += u);
        }), (0, e.blurX)({
          width: y,
          height: M,
          data: n
        }, {
          width: y,
          height: M,
          data: h
        }, w >> s), (0, e.blurY)({
          width: y,
          height: M,
          data: h
        }, {
          width: y,
          height: M,
          data: n
        }, w >> s), (0, e.blurX)({
          width: y,
          height: M,
          data: n
        }, {
          width: y,
          height: M,
          data: h
        }, w >> s), (0, e.blurY)({
          width: y,
          height: M,
          data: h
        }, {
          width: y,
          height: M,
          data: n
        }, w >> s), (0, e.blurX)({
          width: y,
          height: M,
          data: n
        }, {
          width: y,
          height: M,
          data: h
        }, w >> s), (0, e.blurY)({
          width: y,
          height: M,
          data: h
        }, {
          width: y,
          height: M,
          data: n
        }, w >> s);
        var u = p(n);

        if (!Array.isArray(u)) {
          var o = (0, t.max)(n);
          u = (0, t.tickStep)(0, o, u), (u = (0, t.range)(0, Math.floor(o / u) * u, u)).shift();
        }

        return (0, i.default)().thresholds(u).size([y, M])(n).map(b);
      }

      function b(t) {
        return t.value *= Math.pow(2, -2 * s), t.coordinates.forEach(q), t;
      }

      function q(t) {
        t.forEach(E);
      }

      function E(t) {
        t.forEach(A);
      }

      function A(t) {
        t[0] = t[0] * Math.pow(2, s) - g, t[1] = t[1] * Math.pow(2, s) - g;
      }

      function z() {
        return y = l + 2 * (g = 3 * w) >> s, M = c + 2 * g >> s, v;
      }

      return v.x = function (t) {
        return arguments.length ? (a = "function" == typeof t ? t : (0, n.default)(+t), v) : a;
      }, v.y = function (t) {
        return arguments.length ? (f = "function" == typeof t ? t : (0, n.default)(+t), v) : f;
      }, v.weight = function (t) {
        return arguments.length ? (d = "function" == typeof t ? t : (0, n.default)(+t), v) : d;
      }, v.size = function (t) {
        if (!arguments.length) return [l, c];
        var r = Math.ceil(t[0]),
            e = Math.ceil(t[1]);
        if (!(r >= 0 || r >= 0)) throw new Error("invalid size");
        return l = r, c = e, z();
      }, v.cellSize = function (t) {
        if (!arguments.length) return 1 << s;
        if (!((t = +t) >= 1)) throw new Error("invalid cell size");
        return s = Math.floor(Math.log(t) / Math.LN2), z();
      }, v.thresholds = function (t) {
        return arguments.length ? (p = "function" == typeof t ? t : Array.isArray(t) ? (0, n.default)(r.slice.call(t)) : (0, n.default)(t), v) : p;
      }, v.bandwidth = function (t) {
        if (!arguments.length) return Math.sqrt(w * (w + 1));
        if (!((t = +t) >= 0)) throw new Error("invalid bandwidth");
        return w = Math.round((Math.sqrt(4 * t * t + 1) - 1) / 2), z();
      }, v;
    }
  }, {
    "d3-array": "cBuZ",
    "./array": "IBma",
    "./blur": "yZ0K",
    "./constant": "OY6d",
    "./contours": "oKpg"
  }],
  "cfrl": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "contours", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "contourDensity", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    });
    var e = r(require("./contours")),
        t = r(require("./density"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./contours": "oKpg",
    "./density": "VOWF"
  }],
  "SCWu": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = s;
    var n = {},
        r = {},
        t = 34,
        e = 10,
        o = 13;

    function u(n) {
      return new Function("d", "return {" + n.map(function (n, r) {
        return JSON.stringify(n) + ": d[" + r + '] || ""';
      }).join(",") + "}");
    }

    function i(n, r) {
      var t = u(n);
      return function (e, o) {
        return r(t(e), o, n);
      };
    }

    function a(n) {
      var r = Object.create(null),
          t = [];
      return n.forEach(function (n) {
        for (var e in n) {
          e in r || t.push(r[e] = e);
        }
      }), t;
    }

    function c(n, r) {
      var t = n + "",
          e = t.length;
      return e < r ? new Array(r - e + 1).join(0) + t : t;
    }

    function f(n) {
      return n < 0 ? "-" + c(-n, 6) : n > 9999 ? "+" + c(n, 6) : c(n, 4);
    }

    function l(n) {
      var r = n.getUTCHours(),
          t = n.getUTCMinutes(),
          e = n.getUTCSeconds(),
          o = n.getUTCMilliseconds();
      return isNaN(n) ? "Invalid Date" : f(n.getUTCFullYear(), 4) + "-" + c(n.getUTCMonth() + 1, 2) + "-" + c(n.getUTCDate(), 2) + (o ? "T" + c(r, 2) + ":" + c(t, 2) + ":" + c(e, 2) + "." + c(o, 3) + "Z" : e ? "T" + c(r, 2) + ":" + c(t, 2) + ":" + c(e, 2) + "Z" : t || r ? "T" + c(r, 2) + ":" + c(t, 2) + "Z" : "");
    }

    function s(c) {
      var f = new RegExp('["' + c + "\n\r]"),
          s = c.charCodeAt(0);

      function d(u, i) {
        var a,
            c = [],
            f = u.length,
            l = 0,
            d = 0,
            h = f <= 0,
            p = !1;

        function C() {
          if (h) return r;
          if (p) return p = !1, n;
          var i,
              a,
              c = l;

          if (u.charCodeAt(c) === t) {
            for (; l++ < f && u.charCodeAt(l) !== t || u.charCodeAt(++l) === t;) {
              ;
            }

            return (i = l) >= f ? h = !0 : (a = u.charCodeAt(l++)) === e ? p = !0 : a === o && (p = !0, u.charCodeAt(l) === e && ++l), u.slice(c + 1, i - 1).replace(/""/g, '"');
          }

          for (; l < f;) {
            if ((a = u.charCodeAt(i = l++)) === e) p = !0;else if (a === o) p = !0, u.charCodeAt(l) === e && ++l;else if (a !== s) continue;
            return u.slice(c, i);
          }

          return h = !0, u.slice(c, f);
        }

        for (u.charCodeAt(f - 1) === e && --f, u.charCodeAt(f - 1) === o && --f; (a = C()) !== r;) {
          for (var g = []; a !== n && a !== r;) {
            g.push(a), a = C();
          }

          i && null == (g = i(g, d++)) || c.push(g);
        }

        return c;
      }

      function h(n, r) {
        return n.map(function (n) {
          return r.map(function (r) {
            return C(n[r]);
          }).join(c);
        });
      }

      function p(n) {
        return n.map(C).join(c);
      }

      function C(n) {
        return null == n ? "" : n instanceof Date ? l(n) : f.test(n += "") ? '"' + n.replace(/"/g, '""') + '"' : n;
      }

      return {
        parse: function parse(n, r) {
          var t,
              e,
              o = d(n, function (n, o) {
            if (t) return t(n, o - 1);
            e = n, t = r ? i(n, r) : u(n);
          });
          return o.columns = e || [], o;
        },
        parseRows: d,
        format: function format(n, r) {
          return null == r && (r = a(n)), [r.map(C).join(c)].concat(h(n, r)).join("\n");
        },
        formatBody: function formatBody(n, r) {
          return null == r && (r = a(n)), h(n, r).join("\n");
        },
        formatRows: function formatRows(n) {
          return n.map(p).join("\n");
        },
        formatRow: p,
        formatValue: C
      };
    }
  }, {}],
  "mU2J": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.csvFormatValue = exports.csvFormatRow = exports.csvFormatRows = exports.csvFormatBody = exports.csvFormat = exports.csvParseRows = exports.csvParse = void 0;
    var r = o(require("./dsv.js"));

    function o(r) {
      return r && r.__esModule ? r : {
        default: r
      };
    }

    var s = (0, r.default)(","),
        e = s.parse;
    exports.csvParse = e;
    var t = s.parseRows;
    exports.csvParseRows = t;
    var a = s.format;
    exports.csvFormat = a;
    var v = s.formatBody;
    exports.csvFormatBody = v;
    var p = s.formatRows;
    exports.csvFormatRows = p;
    var c = s.formatRow;
    exports.csvFormatRow = c;
    var m = s.formatValue;
    exports.csvFormatValue = m;
  }, {
    "./dsv.js": "SCWu"
  }],
  "zpVZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.tsvFormatValue = exports.tsvFormatRow = exports.tsvFormatRows = exports.tsvFormatBody = exports.tsvFormat = exports.tsvParseRows = exports.tsvParse = void 0;
    var t = r(require("./dsv.js"));

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var o = (0, t.default)("\t"),
        s = o.parse;
    exports.tsvParse = s;
    var e = o.parseRows;
    exports.tsvParseRows = e;
    var a = o.format;
    exports.tsvFormat = a;
    var v = o.formatBody;
    exports.tsvFormatBody = v;
    var p = o.formatRows;
    exports.tsvFormatRows = p;
    var m = o.formatRow;
    exports.tsvFormatRow = m;
    var x = o.formatValue;
    exports.tsvFormatValue = x;
  }, {
    "./dsv.js": "SCWu"
  }],
  "bjLa": [function (require, module, exports) {
    "use strict";

    function e(e) {
      for (var r in e) {
        var a,
            s,
            d = e[r].trim();
        if (d) {
          if ("true" === d) d = !0;else if ("false" === d) d = !1;else if ("NaN" === d) d = NaN;else if (isNaN(a = +d)) {
            if (!(s = d.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/))) continue;
            t && s[4] && !s[7] && (d = d.replace(/-/g, "/").replace(/T/, " ")), d = new Date(d);
          } else d = a;
        } else d = null;
        e[r] = d;
      }

      return e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
    var t = new Date("2019-01-01T00:00").getHours() || new Date("2019-07-01T00:00").getHours();
  }, {}],
  "mQVF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "dsvFormat", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "csvParse", {
      enumerable: !0,
      get: function get() {
        return t.csvParse;
      }
    }), Object.defineProperty(exports, "csvParseRows", {
      enumerable: !0,
      get: function get() {
        return t.csvParseRows;
      }
    }), Object.defineProperty(exports, "csvFormat", {
      enumerable: !0,
      get: function get() {
        return t.csvFormat;
      }
    }), Object.defineProperty(exports, "csvFormatBody", {
      enumerable: !0,
      get: function get() {
        return t.csvFormatBody;
      }
    }), Object.defineProperty(exports, "csvFormatRows", {
      enumerable: !0,
      get: function get() {
        return t.csvFormatRows;
      }
    }), Object.defineProperty(exports, "csvFormatRow", {
      enumerable: !0,
      get: function get() {
        return t.csvFormatRow;
      }
    }), Object.defineProperty(exports, "csvFormatValue", {
      enumerable: !0,
      get: function get() {
        return t.csvFormatValue;
      }
    }), Object.defineProperty(exports, "tsvParse", {
      enumerable: !0,
      get: function get() {
        return r.tsvParse;
      }
    }), Object.defineProperty(exports, "tsvParseRows", {
      enumerable: !0,
      get: function get() {
        return r.tsvParseRows;
      }
    }), Object.defineProperty(exports, "tsvFormat", {
      enumerable: !0,
      get: function get() {
        return r.tsvFormat;
      }
    }), Object.defineProperty(exports, "tsvFormatBody", {
      enumerable: !0,
      get: function get() {
        return r.tsvFormatBody;
      }
    }), Object.defineProperty(exports, "tsvFormatRows", {
      enumerable: !0,
      get: function get() {
        return r.tsvFormatRows;
      }
    }), Object.defineProperty(exports, "tsvFormatRow", {
      enumerable: !0,
      get: function get() {
        return r.tsvFormatRow;
      }
    }), Object.defineProperty(exports, "tsvFormatValue", {
      enumerable: !0,
      get: function get() {
        return r.tsvFormatValue;
      }
    }), Object.defineProperty(exports, "autoType", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    });

    var e = n(require("./dsv.js")),
        t = require("./csv.js"),
        r = require("./tsv.js"),
        o = n(require("./autoType.js"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./dsv.js": "SCWu",
    "./csv.js": "mU2J",
    "./tsv.js": "zpVZ",
    "./autoType.js": "bjLa"
  }],
  "NEvU": [function (require, module, exports) {
    "use strict";

    function t(t) {
      if (!t.ok) throw new Error(t.status + " " + t.statusText);
      return t.blob();
    }

    function e(e, r) {
      return fetch(e, r).then(t);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "W4GS": [function (require, module, exports) {
    "use strict";

    function t(t) {
      if (!t.ok) throw new Error(t.status + " " + t.statusText);
      return t.arrayBuffer();
    }

    function e(e, r) {
      return fetch(e, r).then(t);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "QFek": [function (require, module, exports) {
    "use strict";

    function t(t) {
      if (!t.ok) throw new Error(t.status + " " + t.statusText);
      return t.text();
    }

    function e(e, r) {
      return fetch(e, r).then(t);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "fvyQ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u, exports.tsv = exports.csv = void 0;

    var e = require("d3-dsv"),
        t = r(require("./text"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n(e) {
      return function (r, n, u) {
        return 2 === arguments.length && "function" == typeof n && (u = n, n = void 0), (0, t.default)(r, n).then(function (t) {
          return e(t, u);
        });
      };
    }

    function u(r, n, u, o) {
      3 === arguments.length && "function" == typeof u && (o = u, u = void 0);
      var s = (0, e.dsvFormat)(r);
      return (0, t.default)(n, u).then(function (e) {
        return s.parse(e, o);
      });
    }

    var o = n(e.csvParse);
    exports.csv = o;
    var s = n(e.tsvParse);
    exports.tsv = s;
  }, {
    "d3-dsv": "mQVF",
    "./text": "QFek"
  }],
  "oqjg": [function (require, module, exports) {
    "use strict";

    function e(e, r) {
      return new Promise(function (n, o) {
        var t = new Image();

        for (var u in r) {
          t[u] = r[u];
        }

        t.onerror = o, t.onload = function () {
          n(t);
        }, t.src = e;
      });
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "LvcW": [function (require, module, exports) {
    "use strict";

    function t(t) {
      if (!t.ok) throw new Error(t.status + " " + t.statusText);
      return t.json();
    }

    function e(e, r) {
      return fetch(e, r).then(t);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "FRc5": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.svg = exports.html = exports.default = void 0;
    var e = t(require("./text"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(t) {
      return function (r, n) {
        return (0, e.default)(r, n).then(function (e) {
          return new DOMParser().parseFromString(e, t);
        });
      };
    }

    var n = r("application/xml");
    exports.default = n;
    var o = r("text/html");
    exports.html = o;
    var u = r("image/svg+xml");
    exports.svg = u;
  }, {
    "./text": "QFek"
  }],
  "hNko": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "blob", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "buffer", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "dsv", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "csv", {
      enumerable: !0,
      get: function get() {
        return r.csv;
      }
    }), Object.defineProperty(exports, "tsv", {
      enumerable: !0,
      get: function get() {
        return r.tsv;
      }
    }), Object.defineProperty(exports, "image", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "json", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "text", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "xml", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "html", {
      enumerable: !0,
      get: function get() {
        return f.html;
      }
    }), Object.defineProperty(exports, "svg", {
      enumerable: !0,
      get: function get() {
        return f.svg;
      }
    });
    var e = l(require("./blob")),
        t = l(require("./buffer")),
        r = c(require("./dsv")),
        n = l(require("./image")),
        u = l(require("./json")),
        o = l(require("./text")),
        f = c(require("./xml"));

    function i() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return i = function i() {
        return e;
      }, e;
    }

    function c(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var t = i();
      if (t && t.has(e)) return t.get(e);
      var r = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var u in e) {
        if (Object.prototype.hasOwnProperty.call(e, u)) {
          var o = n ? Object.getOwnPropertyDescriptor(e, u) : null;
          o && (o.get || o.set) ? Object.defineProperty(r, u, o) : r[u] = e[u];
        }
      }

      return r.default = e, t && t.set(e, r), r;
    }

    function l(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./blob": "NEvU",
    "./buffer": "W4GS",
    "./dsv": "fvyQ",
    "./image": "oqjg",
    "./json": "LvcW",
    "./text": "QFek",
    "./xml": "FRc5"
  }],
  "yF4t": [function (require, module, exports) {
    "use strict";

    function n(n, t) {
      var e;

      function r() {
        var r,
            u,
            i = e.length,
            l = 0,
            o = 0;

        for (r = 0; r < i; ++r) {
          l += (u = e[r]).x, o += u.y;
        }

        for (l = l / i - n, o = o / i - t, r = 0; r < i; ++r) {
          (u = e[r]).x -= l, u.y -= o;
        }
      }

      return null == n && (n = 0), null == t && (t = 0), r.initialize = function (n) {
        e = n;
      }, r.x = function (t) {
        return arguments.length ? (n = +t, r) : n;
      }, r.y = function (n) {
        return arguments.length ? (t = +n, r) : t;
      }, r;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n;
  }, {}],
  "jmDl": [function (require, module, exports) {
    "use strict";

    function e() {
      return 1e-6 * (Math.random() - .5);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "c4hk": [function (require, module, exports) {
    "use strict";

    function r(r) {
      var l = +this._x.call(null, r),
          e = +this._y.call(null, r);
      return t(this.cover(l, e), l, e, r);
    }

    function t(r, t, l, e) {
      if (isNaN(t) || isNaN(l)) return r;

      var n,
          a,
          i,
          o,
          u,
          s,
          _,
          c,
          f,
          h = r._root,
          y = {
        data: e
      },
          d = r._x0,
          x = r._y0,
          N = r._x1,
          v = r._y1;

      if (!h) return r._root = y, r;

      for (; h.length;) {
        if ((s = t >= (a = (d + N) / 2)) ? d = a : N = a, (_ = l >= (i = (x + v) / 2)) ? x = i : v = i, n = h, !(h = h[c = _ << 1 | s])) return n[c] = y, r;
      }

      if (o = +r._x.call(null, h.data), u = +r._y.call(null, h.data), t === o && l === u) return y.next = h, n ? n[c] = y : r._root = y, r;

      do {
        n = n ? n[c] = new Array(4) : r._root = new Array(4), (s = t >= (a = (d + N) / 2)) ? d = a : N = a, (_ = l >= (i = (x + v) / 2)) ? x = i : v = i;
      } while ((c = _ << 1 | s) == (f = (u >= i) << 1 | o >= a));

      return n[f] = h, n[c] = y, r;
    }

    function l(r) {
      var l,
          e,
          n,
          a,
          i = r.length,
          o = new Array(i),
          u = new Array(i),
          s = 1 / 0,
          _ = 1 / 0,
          c = -1 / 0,
          f = -1 / 0;

      for (e = 0; e < i; ++e) {
        isNaN(n = +this._x.call(null, l = r[e])) || isNaN(a = +this._y.call(null, l)) || (o[e] = n, u[e] = a, n < s && (s = n), n > c && (c = n), a < _ && (_ = a), a > f && (f = a));
      }

      if (s > c || _ > f) return this;

      for (this.cover(s, _).cover(c, f), e = 0; e < i; ++e) {
        t(this, o[e], u[e], r[e]);
      }

      return this;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r, exports.addAll = l;
  }, {}],
  "DeJI": [function (require, module, exports) {
    "use strict";

    function t(t, s) {
      if (isNaN(t = +t) || isNaN(s = +s)) return this;
      var e = this._x0,
          i = this._y0,
          r = this._x1,
          h = this._y1;
      if (isNaN(e)) r = (e = Math.floor(t)) + 1, h = (i = Math.floor(s)) + 1;else {
        for (var o, a, _ = r - e, c = this._root; e > t || t >= r || i > s || s >= h;) {
          switch (a = (s < i) << 1 | t < e, (o = new Array(4))[a] = c, c = o, _ *= 2, a) {
            case 0:
              r = e + _, h = i + _;
              break;

            case 1:
              e = r - _, h = i + _;
              break;

            case 2:
              r = e + _, i = h - _;
              break;

            case 3:
              e = r - _, i = h - _;
          }
        }

        this._root && this._root.length && (this._root = c);
      }
      return this._x0 = e, this._y0 = i, this._x1 = r, this._y1 = h, this;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "HTBh": [function (require, module, exports) {
    "use strict";

    function e() {
      var e = [];
      return this.visit(function (t) {
        if (!t.length) do {
          e.push(t.data);
        } while (t = t.next);
      }), e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "JRL4": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "BPLw": [function (require, module, exports) {
    "use strict";

    function t(t, e, s, i, o) {
      this.node = t, this.x0 = e, this.y0 = s, this.x1 = i, this.y1 = o;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "t1gW": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;
    var e = t(require("./quad.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function l(t, l, a) {
      var u,
          n,
          r,
          s,
          d,
          h,
          i,
          f = this._x0,
          o = this._y0,
          _ = this._x1,
          p = this._y1,
          x = [],
          c = this._root;

      for (c && x.push(new e.default(c, f, o, _, p)), null == a ? a = 1 / 0 : (f = t - a, o = l - a, _ = t + a, p = l + a, a *= a); h = x.pop();) {
        if (!(!(c = h.node) || (n = h.x0) > _ || (r = h.y0) > p || (s = h.x1) < f || (d = h.y1) < o)) if (c.length) {
          var v = (n + s) / 2,
              y = (r + d) / 2;
          x.push(new e.default(c[3], v, y, s, d), new e.default(c[2], n, y, v, d), new e.default(c[1], v, r, s, y), new e.default(c[0], n, r, v, y)), (i = (l >= y) << 1 | t >= v) && (h = x[x.length - 1], x[x.length - 1] = x[x.length - 1 - i], x[x.length - 1 - i] = h);
        } else {
          var g = t - +this._x.call(null, c.data),
              w = l - +this._y.call(null, c.data),
              q = g * g + w * w;

          if (q < a) {
            var M = Math.sqrt(a = q);
            f = t - M, o = l - M, _ = t + M, p = l + M, u = c.data;
          }
        }
      }

      return u;
    }
  }, {
    "./quad.js": "BPLw"
  }],
  "wnjT": [function (require, module, exports) {
    "use strict";

    function t(t) {
      if (isNaN(h = +this._x.call(null, t)) || isNaN(n = +this._y.call(null, t))) return this;
      var e,
          i,
          r,
          s,
          h,
          n,
          l,
          o,
          u,
          f,
          a,
          x,
          _ = this._root,
          d = this._x0,
          c = this._y0,
          v = this._x1,
          g = this._y1;
      if (!_) return this;
      if (_.length) for (;;) {
        if ((u = h >= (l = (d + v) / 2)) ? d = l : v = l, (f = n >= (o = (c + g) / 2)) ? c = o : g = o, e = _, !(_ = _[a = f << 1 | u])) return this;
        if (!_.length) break;
        (e[a + 1 & 3] || e[a + 2 & 3] || e[a + 3 & 3]) && (i = e, x = a);
      }

      for (; _.data !== t;) {
        if (r = _, !(_ = _.next)) return this;
      }

      return (s = _.next) && delete _.next, r ? (s ? r.next = s : delete r.next, this) : e ? (s ? e[a] = s : delete e[a], (_ = e[0] || e[1] || e[2] || e[3]) && _ === (e[3] || e[2] || e[1] || e[0]) && !_.length && (i ? i[x] = _ : this._root = _), this) : (this._root = s, this);
    }

    function e(t) {
      for (var e = 0, i = t.length; e < i; ++e) {
        this.remove(t[e]);
      }

      return this;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t, exports.removeAll = e;
  }, {}],
  "aU2q": [function (require, module, exports) {
    "use strict";

    function e() {
      return this._root;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "PC8q": [function (require, module, exports) {
    "use strict";

    function e() {
      var e = 0;
      return this.visit(function (t) {
        if (!t.length) do {
          ++e;
        } while (t = t.next);
      }), e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "MOvE": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;
    var e = t(require("./quad.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(t) {
      var u,
          s,
          r,
          n,
          a,
          d,
          f = [],
          h = this._root;

      for (h && f.push(new e.default(h, this._x0, this._y0, this._x1, this._y1)); u = f.pop();) {
        if (!t(h = u.node, r = u.x0, n = u.y0, a = u.x1, d = u.y1) && h.length) {
          var i = (r + a) / 2,
              o = (n + d) / 2;
          (s = h[3]) && f.push(new e.default(s, i, o, a, d)), (s = h[2]) && f.push(new e.default(s, r, o, i, d)), (s = h[1]) && f.push(new e.default(s, i, n, a, o)), (s = h[0]) && f.push(new e.default(s, r, n, i, o));
        }
      }

      return this;
    }
  }, {
    "./quad.js": "BPLw"
  }],
  "EdvS": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;
    var e = t(require("./quad.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(t) {
      var u,
          s = [],
          r = [];

      for (this._root && s.push(new e.default(this._root, this._x0, this._y0, this._x1, this._y1)); u = s.pop();) {
        var o = u.node;

        if (o.length) {
          var n,
              h = u.x0,
              a = u.y0,
              d = u.x1,
              f = u.y1,
              i = (h + d) / 2,
              p = (a + f) / 2;
          (n = o[0]) && s.push(new e.default(n, h, a, i, p)), (n = o[1]) && s.push(new e.default(n, i, a, d, p)), (n = o[2]) && s.push(new e.default(n, h, p, i, f)), (n = o[3]) && s.push(new e.default(n, i, p, d, f));
        }

        r.push(u);
      }

      for (; u = r.pop();) {
        t(u.node, u.x0, u.y0, u.x1, u.y1);
      }

      return this;
    }
  }, {
    "./quad.js": "BPLw"
  }],
  "yqgF": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return t[0];
    }

    function e(t) {
      return arguments.length ? (this._x = t, this) : this._x;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.defaultX = t, exports.default = e;
  }, {}],
  "FeNP": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return t[1];
    }

    function e(t) {
      return arguments.length ? (this._y = t, this) : this._y;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.defaultY = t, exports.default = e;
  }, {}],
  "HCic": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = y;
    var e = v(require("./add.js")),
        t = c(require("./cover.js")),
        r = c(require("./data.js")),
        u = c(require("./extent.js")),
        a = c(require("./find.js")),
        i = v(require("./remove.js")),
        o = c(require("./root.js")),
        n = c(require("./size.js")),
        f = c(require("./visit.js")),
        s = c(require("./visitAfter.js")),
        l = v(require("./x.js")),
        d = v(require("./y.js"));

    function c(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function p() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return p = function p() {
        return e;
      }, e;
    }

    function v(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var t = p();
      if (t && t.has(e)) return t.get(e);
      var r = {},
          u = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var a in e) {
        if (Object.prototype.hasOwnProperty.call(e, a)) {
          var i = u ? Object.getOwnPropertyDescriptor(e, a) : null;
          i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a];
        }
      }

      return r.default = e, t && t.set(e, r), r;
    }

    function y(e, t, r) {
      var u = new _(null == t ? l.defaultX : t, null == r ? d.defaultY : r, NaN, NaN, NaN, NaN);
      return null == e ? u : u.addAll(e);
    }

    function _(e, t, r, u, a, i) {
      this._x = e, this._y = t, this._x0 = r, this._y0 = u, this._x1 = a, this._y1 = i, this._root = void 0;
    }

    function h(e) {
      for (var t = {
        data: e.data
      }, r = t; e = e.next;) {
        r = r.next = {
          data: e.data
        };
      }

      return t;
    }

    var j = y.prototype = _.prototype;
    j.copy = function () {
      var e,
          t,
          r = new _(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
          u = this._root;
      if (!u) return r;
      if (!u.length) return r._root = h(u), r;

      for (e = [{
        source: u,
        target: r._root = new Array(4)
      }]; u = e.pop();) {
        for (var a = 0; a < 4; ++a) {
          (t = u.source[a]) && (t.length ? e.push({
            source: t,
            target: u.target[a] = new Array(4)
          }) : u.target[a] = h(t));
        }
      }

      return r;
    }, j.add = e.default, j.addAll = e.addAll, j.cover = t.default, j.data = r.default, j.extent = u.default, j.find = a.default, j.remove = i.default, j.removeAll = i.removeAll, j.root = o.default, j.size = n.default, j.visit = f.default, j.visitAfter = s.default, j.x = l.default, j.y = d.default;
  }, {
    "./add.js": "c4hk",
    "./cover.js": "DeJI",
    "./data.js": "HTBh",
    "./extent.js": "JRL4",
    "./find.js": "t1gW",
    "./remove.js": "wnjT",
    "./root.js": "aU2q",
    "./size.js": "PC8q",
    "./visit.js": "MOvE",
    "./visitAfter.js": "EdvS",
    "./x.js": "yqgF",
    "./y.js": "FeNP"
  }],
  "oxc3": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "quadtree", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    });
    var e = r(require("./quadtree.js"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./quadtree.js": "HCic"
  }],
  "ZCSV": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = f;

    var t = n(require("./constant")),
        r = n(require("./jiggle")),
        e = require("d3-quadtree");

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function i(t) {
      return t.x + t.vx;
    }

    function u(t) {
      return t.y + t.vy;
    }

    function f(n) {
      var f,
          a,
          o = 1,
          d = 1;

      function v() {
        for (var t, n, v, c, x, s, y, g = f.length, h = 0; h < d; ++h) {
          for (n = (0, e.quadtree)(f, i, u).visitAfter(l), t = 0; t < g; ++t) {
            v = f[t], s = a[v.index], y = s * s, c = v.x + v.vx, x = v.y + v.vy, n.visit(q);
          }
        }

        function q(t, e, n, i, u) {
          var f = t.data,
              a = t.r,
              d = s + a;
          if (!f) return e > c + d || i < c - d || n > x + d || u < x - d;

          if (f.index > v.index) {
            var l = c - f.x - f.vx,
                g = x - f.y - f.vy,
                h = l * l + g * g;
            h < d * d && (0 === l && (h += (l = (0, r.default)()) * l), 0 === g && (h += (g = (0, r.default)()) * g), h = (d - (h = Math.sqrt(h))) / h * o, v.vx += (l *= h) * (d = (a *= a) / (y + a)), v.vy += (g *= h) * d, f.vx -= l * (d = 1 - d), f.vy -= g * d);
          }
        }
      }

      function l(t) {
        if (t.data) return t.r = a[t.data.index];

        for (var r = t.r = 0; r < 4; ++r) {
          t[r] && t[r].r > t.r && (t.r = t[r].r);
        }
      }

      function c() {
        if (f) {
          var t,
              r,
              e = f.length;

          for (a = new Array(e), t = 0; t < e; ++t) {
            r = f[t], a[r.index] = +n(r, t, f);
          }
        }
      }

      return "function" != typeof n && (n = (0, t.default)(null == n ? 1 : +n)), v.initialize = function (t) {
        f = t, c();
      }, v.iterations = function (t) {
        return arguments.length ? (d = +t, v) : d;
      }, v.strength = function (t) {
        return arguments.length ? (o = +t, v) : o;
      }, v.radius = function (r) {
        return arguments.length ? (n = "function" == typeof r ? r : (0, t.default)(+r), c(), v) : n;
      }, v;
    }
  }, {
    "./constant": "OY6d",
    "./jiggle": "jmDl",
    "d3-quadtree": "oxc3"
  }],
  "M788": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o;

    var e = r(require("./constant")),
        t = r(require("./jiggle")),
        n = require("d3-collection");

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function i(e) {
      return e.index;
    }

    function u(e, t) {
      var n = e.get(t);
      if (!n) throw new Error("missing: " + t);
      return n;
    }

    function o(r) {
      var o,
          f,
          a,
          c,
          l,
          d = i,
          g = function g(e) {
        return 1 / Math.min(c[e.source.index], c[e.target.index]);
      },
          s = (0, e.default)(30),
          x = 1;

      function v(e) {
        for (var n = 0, i = r.length; n < x; ++n) {
          for (var u, a, c, d, g, s, v, y = 0; y < i; ++y) {
            a = (u = r[y]).source, d = (c = u.target).x + c.vx - a.x - a.vx || (0, t.default)(), g = c.y + c.vy - a.y - a.vy || (0, t.default)(), d *= s = ((s = Math.sqrt(d * d + g * g)) - f[y]) / s * e * o[y], g *= s, c.vx -= d * (v = l[y]), c.vy -= g * v, a.vx += d * (v = 1 - v), a.vy += g * v;
          }
        }
      }

      function y() {
        if (a) {
          var e,
              t,
              i = a.length,
              g = r.length,
              s = (0, n.map)(a, d);

          for (e = 0, c = new Array(i); e < g; ++e) {
            (t = r[e]).index = e, "object" != _typeof(t.source) && (t.source = u(s, t.source)), "object" != _typeof(t.target) && (t.target = u(s, t.target)), c[t.source.index] = (c[t.source.index] || 0) + 1, c[t.target.index] = (c[t.target.index] || 0) + 1;
          }

          for (e = 0, l = new Array(g); e < g; ++e) {
            t = r[e], l[e] = c[t.source.index] / (c[t.source.index] + c[t.target.index]);
          }

          o = new Array(g), h(), f = new Array(g), p();
        }
      }

      function h() {
        if (a) for (var e = 0, t = r.length; e < t; ++e) {
          o[e] = +g(r[e], e, r);
        }
      }

      function p() {
        if (a) for (var e = 0, t = r.length; e < t; ++e) {
          f[e] = +s(r[e], e, r);
        }
      }

      return null == r && (r = []), v.initialize = function (e) {
        a = e, y();
      }, v.links = function (e) {
        return arguments.length ? (r = e, y(), v) : r;
      }, v.id = function (e) {
        return arguments.length ? (d = e, v) : d;
      }, v.iterations = function (e) {
        return arguments.length ? (x = +e, v) : x;
      }, v.strength = function (t) {
        return arguments.length ? (g = "function" == typeof t ? t : (0, e.default)(+t), h(), v) : g;
      }, v.distance = function (t) {
        return arguments.length ? (s = "function" == typeof t ? t : (0, e.default)(+t), p(), v) : s;
      }, v;
    }
  }, {
    "./constant": "OY6d",
    "./jiggle": "jmDl",
    "d3-collection": "qqV1"
  }],
  "lwF8": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.x = r, exports.y = i, exports.default = a;

    var n = require("d3-dispatch"),
        t = require("d3-collection"),
        e = require("d3-timer");

    function r(n) {
      return n.x;
    }

    function i(n) {
      return n.y;
    }

    var u = 10,
        o = Math.PI * (3 - Math.sqrt(5));

    function a(r) {
      var i,
          a = 1,
          l = .001,
          c = 1 - Math.pow(l, 1 / 300),
          f = 0,
          h = .6,
          s = (0, t.map)(),
          x = (0, e.timer)(y),
          v = (0, n.dispatch)("tick", "end");

      function y() {
        p(), v.call("tick", i), a < l && (x.stop(), v.call("end", i));
      }

      function p(n) {
        var t,
            e,
            u = r.length;
        void 0 === n && (n = 1);

        for (var o = 0; o < n; ++o) {
          for (a += (f - a) * c, s.each(function (n) {
            n(a);
          }), t = 0; t < u; ++t) {
            null == (e = r[t]).fx ? e.x += e.vx *= h : (e.x = e.fx, e.vx = 0), null == e.fy ? e.y += e.vy *= h : (e.y = e.fy, e.vy = 0);
          }
        }

        return i;
      }

      function d() {
        for (var n, t = 0, e = r.length; t < e; ++t) {
          if ((n = r[t]).index = t, null != n.fx && (n.x = n.fx), null != n.fy && (n.y = n.fy), isNaN(n.x) || isNaN(n.y)) {
            var i = u * Math.sqrt(t),
                a = t * o;
            n.x = i * Math.cos(a), n.y = i * Math.sin(a);
          }

          (isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0);
        }
      }

      function g(n) {
        return n.initialize && n.initialize(r), n;
      }

      return null == r && (r = []), d(), i = {
        tick: p,
        restart: function restart() {
          return x.restart(y), i;
        },
        stop: function stop() {
          return x.stop(), i;
        },
        nodes: function nodes(n) {
          return arguments.length ? (r = n, d(), s.each(g), i) : r;
        },
        alpha: function alpha(n) {
          return arguments.length ? (a = +n, i) : a;
        },
        alphaMin: function alphaMin(n) {
          return arguments.length ? (l = +n, i) : l;
        },
        alphaDecay: function alphaDecay(n) {
          return arguments.length ? (c = +n, i) : +c;
        },
        alphaTarget: function alphaTarget(n) {
          return arguments.length ? (f = +n, i) : f;
        },
        velocityDecay: function velocityDecay(n) {
          return arguments.length ? (h = 1 - n, i) : 1 - h;
        },
        force: function force(n, t) {
          return arguments.length > 1 ? (null == t ? s.remove(n) : s.set(n, g(t)), i) : s.get(n);
        },
        find: function find(n, t, e) {
          var i,
              u,
              o,
              a,
              l,
              c = 0,
              f = r.length;

          for (null == e ? e = 1 / 0 : e *= e, c = 0; c < f; ++c) {
            (o = (i = n - (a = r[c]).x) * i + (u = t - a.y) * u) < e && (l = a, e = o);
          }

          return l;
        },
        on: function on(n, t) {
          return arguments.length > 1 ? (v.on(n, t), i) : v.on(n);
        }
      };
    }
  }, {
    "d3-dispatch": "UUCs",
    "d3-collection": "qqV1",
    "d3-timer": "CBES"
  }],
  "cead": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;

    var t = r(require("./constant")),
        e = r(require("./jiggle")),
        n = require("d3-quadtree"),
        a = require("./simulation");

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function u() {
      var r,
          u,
          i,
          f,
          l = (0, t.default)(-30),
          d = 1,
          o = 1 / 0,
          s = .81;

      function v(t) {
        var e,
            f = r.length,
            l = (0, n.quadtree)(r, a.x, a.y).visitAfter(x);

        for (i = t, e = 0; e < f; ++e) {
          u = r[e], l.visit(c);
        }
      }

      function h() {
        if (r) {
          var t,
              e,
              n = r.length;

          for (f = new Array(n), t = 0; t < n; ++t) {
            e = r[t], f[e.index] = +l(e, t, r);
          }
        }
      }

      function x(t) {
        var e,
            n,
            a,
            r,
            u,
            i = 0,
            l = 0;

        if (t.length) {
          for (a = r = u = 0; u < 4; ++u) {
            (e = t[u]) && (n = Math.abs(e.value)) && (i += e.value, l += n, a += n * e.x, r += n * e.y);
          }

          t.x = a / l, t.y = r / l;
        } else {
          (e = t).x = e.data.x, e.y = e.data.y;

          do {
            i += f[e.data.index];
          } while (e = e.next);
        }

        t.value = i;
      }

      function c(t, n, a, r) {
        if (!t.value) return !0;
        var l = t.x - u.x,
            v = t.y - u.y,
            h = r - n,
            x = l * l + v * v;
        if (h * h / s < x) return x < o && (0 === l && (x += (l = (0, e.default)()) * l), 0 === v && (x += (v = (0, e.default)()) * v), x < d && (x = Math.sqrt(d * x)), u.vx += l * t.value * i / x, u.vy += v * t.value * i / x), !0;

        if (!(t.length || x >= o)) {
          (t.data !== u || t.next) && (0 === l && (x += (l = (0, e.default)()) * l), 0 === v && (x += (v = (0, e.default)()) * v), x < d && (x = Math.sqrt(d * x)));

          do {
            t.data !== u && (h = f[t.data.index] * i / x, u.vx += l * h, u.vy += v * h);
          } while (t = t.next);
        }
      }

      return v.initialize = function (t) {
        r = t, h();
      }, v.strength = function (e) {
        return arguments.length ? (l = "function" == typeof e ? e : (0, t.default)(+e), h(), v) : l;
      }, v.distanceMin = function (t) {
        return arguments.length ? (d = t * t, v) : Math.sqrt(d);
      }, v.distanceMax = function (t) {
        return arguments.length ? (o = t * t, v) : Math.sqrt(o);
      }, v.theta = function (t) {
        return arguments.length ? (s = t * t, v) : Math.sqrt(s);
      }, v;
    }
  }, {
    "./constant": "OY6d",
    "./jiggle": "jmDl",
    "d3-quadtree": "oxc3",
    "./simulation": "lwF8"
  }],
  "qX1S": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
    var t = n(require("./constant"));

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function e(n, e, r) {
      var u,
          f,
          o,
          i = (0, t.default)(.1);

      function l(t) {
        for (var n = 0, i = u.length; n < i; ++n) {
          var l = u[n],
              a = l.x - e || 1e-6,
              c = l.y - r || 1e-6,
              s = Math.sqrt(a * a + c * c),
              d = (o[n] - s) * f[n] * t / s;
          l.vx += a * d, l.vy += c * d;
        }
      }

      function a() {
        if (u) {
          var t,
              e = u.length;

          for (f = new Array(e), o = new Array(e), t = 0; t < e; ++t) {
            o[t] = +n(u[t], t, u), f[t] = isNaN(o[t]) ? 0 : +i(u[t], t, u);
          }
        }
      }

      return "function" != typeof n && (n = (0, t.default)(+n)), null == e && (e = 0), null == r && (r = 0), l.initialize = function (t) {
        u = t, a();
      }, l.strength = function (n) {
        return arguments.length ? (i = "function" == typeof n ? n : (0, t.default)(+n), a(), l) : i;
      }, l.radius = function (e) {
        return arguments.length ? (n = "function" == typeof e ? e : (0, t.default)(+e), a(), l) : n;
      }, l.x = function (t) {
        return arguments.length ? (e = +t, l) : e;
      }, l.y = function (t) {
        return arguments.length ? (r = +t, l) : r;
      }, l;
    }
  }, {
    "./constant": "OY6d"
  }],
  "AO2h": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
    var t = n(require("./constant"));

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function e(n) {
      var e,
          r,
          u,
          f = (0, t.default)(.1);

      function o(t) {
        for (var n, f = 0, o = e.length; f < o; ++f) {
          (n = e[f]).vx += (u[f] - n.x) * r[f] * t;
        }
      }

      function i() {
        if (e) {
          var t,
              o = e.length;

          for (r = new Array(o), u = new Array(o), t = 0; t < o; ++t) {
            r[t] = isNaN(u[t] = +n(e[t], t, e)) ? 0 : +f(e[t], t, e);
          }
        }
      }

      return "function" != typeof n && (n = (0, t.default)(null == n ? 0 : +n)), o.initialize = function (t) {
        e = t, i();
      }, o.strength = function (n) {
        return arguments.length ? (f = "function" == typeof n ? n : (0, t.default)(+n), i(), o) : f;
      }, o.x = function (e) {
        return arguments.length ? (n = "function" == typeof e ? e : (0, t.default)(+e), i(), o) : n;
      }, o;
    }
  }, {
    "./constant": "OY6d"
  }],
  "SUZ3": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
    var t = n(require("./constant"));

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function e(n) {
      var e,
          r,
          u,
          f = (0, t.default)(.1);

      function o(t) {
        for (var n, f = 0, o = e.length; f < o; ++f) {
          (n = e[f]).vy += (u[f] - n.y) * r[f] * t;
        }
      }

      function i() {
        if (e) {
          var t,
              o = e.length;

          for (r = new Array(o), u = new Array(o), t = 0; t < o; ++t) {
            r[t] = isNaN(u[t] = +n(e[t], t, e)) ? 0 : +f(e[t], t, e);
          }
        }
      }

      return "function" != typeof n && (n = (0, t.default)(null == n ? 0 : +n)), o.initialize = function (t) {
        e = t, i();
      }, o.strength = function (n) {
        return arguments.length ? (f = "function" == typeof n ? n : (0, t.default)(+n), i(), o) : f;
      }, o.y = function (e) {
        return arguments.length ? (n = "function" == typeof e ? e : (0, t.default)(+e), i(), o) : n;
      }, o;
    }
  }, {
    "./constant": "OY6d"
  }],
  "YpA1": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "forceCenter", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "forceCollide", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "forceLink", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "forceManyBody", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "forceRadial", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "forceSimulation", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "forceX", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), Object.defineProperty(exports, "forceY", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    });
    var e = c(require("./center")),
        r = c(require("./collide")),
        t = c(require("./link")),
        n = c(require("./manyBody")),
        u = c(require("./radial")),
        o = c(require("./simulation")),
        i = c(require("./x")),
        f = c(require("./y"));

    function c(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./center": "yF4t",
    "./collide": "ZCSV",
    "./link": "M788",
    "./manyBody": "cead",
    "./radial": "qX1S",
    "./simulation": "lwF8",
    "./x": "AO2h",
    "./y": "SUZ3"
  }],
  "cJhM": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
      var n,
          l = e.slice(0, n);
      return [l.length > 1 ? l[0] + l.slice(2) : l, +e.slice(n + 1)];
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "m3FQ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("./formatDecimal.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(t) {
      return (t = (0, e.default)(Math.abs(t))) ? t[1] : NaN;
    }
  }, {
    "./formatDecimal.js": "cJhM"
  }],
  "e1cc": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      return function (r, n) {
        for (var u = r.length, s = [], o = 0, i = e[0], a = 0; u > 0 && i > 0 && (a + i + 1 > n && (i = Math.max(1, n - a)), s.push(r.substring(u -= i, u + i)), !((a += i + 1) > n));) {
          i = e[o = (o + 1) % e.length];
        }

        return s.reverse().join(t);
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "Wswx": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return function (t) {
        return t.replace(/[0-9]/g, function (t) {
          return e[+t];
        });
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "gePe": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t, exports.FormatSpecifier = o;
    var i = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function t(t) {
      if (!(s = i.exec(t))) throw new Error("invalid format: " + t);
      var s;
      return new o({
        fill: s[1],
        align: s[2],
        sign: s[3],
        symbol: s[4],
        zero: s[5],
        width: s[6],
        comma: s[7],
        precision: s[8] && s[8].slice(1),
        trim: s[9],
        type: s[10]
      });
    }

    function o(i) {
      this.fill = void 0 === i.fill ? " " : i.fill + "", this.align = void 0 === i.align ? ">" : i.align + "", this.sign = void 0 === i.sign ? "-" : i.sign + "", this.symbol = void 0 === i.symbol ? "" : i.symbol + "", this.zero = !!i.zero, this.width = void 0 === i.width ? void 0 : +i.width, this.comma = !!i.comma, this.precision = void 0 === i.precision ? void 0 : +i.precision, this.trim = !!i.trim, this.type = void 0 === i.type ? "" : i.type + "";
    }

    t.prototype = o.prototype, o.prototype.toString = function () {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type;
    };
  }, {}],
  "dWsa": [function (require, module, exports) {
    "use strict";

    function e(e) {
      e: for (var r, t = e.length, s = 1, a = -1; s < t; ++s) {
        switch (e[s]) {
          case ".":
            a = r = s;
            break;

          case "0":
            0 === a && (a = s), r = s;
            break;

          default:
            if (a > 0) {
              if (!+e[s]) break e;
              a = 0;
            }

        }
      }

      return a > 0 ? e.slice(0, a) + e.slice(r + 1) : e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "KTGF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n, exports.prefixExponent = void 0;
    var e,
        r = t(require("./formatDecimal.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n(t, n) {
      var o = (0, r.default)(t, n);
      if (!o) return t + "";
      var a = o[0],
          i = o[1],
          u = i - (exports.prefixExponent = e = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
          f = a.length;
      return u === f ? a : u > f ? a + new Array(u - f + 1).join("0") : u > 0 ? a.slice(0, u) + "." + a.slice(u) : "0." + new Array(1 - u).join("0") + (0, r.default)(t, Math.max(0, n + u - 1))[0];
    }

    exports.prefixExponent = e;
  }, {
    "./formatDecimal.js": "cJhM"
  }],
  "e8gU": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./formatDecimal.js"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r, t) {
      var n = (0, e.default)(r, t);
      if (!n) return r + "";
      var u = n[0],
          a = n[1];
      return a < 0 ? "0." + new Array(-a).join("0") + u : u.length > a + 1 ? u.slice(0, a + 1) + "." + u.slice(a + 1) : u + new Array(a - u.length + 2).join("0");
    }
  }, {
    "./formatDecimal.js": "cJhM"
  }],
  "uFUO": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var t = n(require("./formatPrefixAuto.js")),
        r = n(require("./formatRounded.js"));

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var e = {
      "%": function _(t, r) {
        return (100 * t).toFixed(r);
      },
      b: function b(t) {
        return Math.round(t).toString(2);
      },
      c: function c(t) {
        return t + "";
      },
      d: function d(t) {
        return Math.round(t).toString(10);
      },
      e: function e(t, r) {
        return t.toExponential(r);
      },
      f: function f(t, r) {
        return t.toFixed(r);
      },
      g: function g(t, r) {
        return t.toPrecision(r);
      },
      o: function o(t) {
        return Math.round(t).toString(8);
      },
      p: function p(t, n) {
        return (0, r.default)(100 * t, n);
      },
      r: r.default,
      s: t.default,
      X: function X(t) {
        return Math.round(t).toString(16).toUpperCase();
      },
      x: function x(t) {
        return Math.round(t).toString(16);
      }
    };
    exports.default = e;
  }, {
    "./formatPrefixAuto.js": "KTGF",
    "./formatRounded.js": "e8gU"
  }],
  "QWQX": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = c;

    var e = s(require("./exponent.js")),
        r = s(require("./formatGroup.js")),
        t = s(require("./formatNumerals.js")),
        a = s(require("./formatSpecifier.js")),
        i = s(require("./formatTrim.js")),
        n = s(require("./formatTypes.js")),
        o = require("./formatPrefixAuto.js"),
        u = s(require("./identity.js"));

    function s(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var l = Array.prototype.map,
        f = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function c(s) {
      var c = void 0 === s.grouping || void 0 === s.thousands ? u.default : (0, r.default)(l.call(s.grouping, Number), s.thousands + ""),
          d = void 0 === s.currency ? "" : s.currency[0] + "",
          m = void 0 === s.currency ? "" : s.currency[1] + "",
          p = void 0 === s.decimal ? "." : s.decimal + "",
          h = void 0 === s.numerals ? u.default : (0, t.default)(l.call(s.numerals, String)),
          v = void 0 === s.percent ? "%" : s.percent + "",
          g = void 0 === s.minus ? "-" : s.minus + "",
          y = void 0 === s.nan ? "NaN" : s.nan + "";

      function M(e) {
        var r = (e = (0, a.default)(e)).fill,
            t = e.align,
            u = e.sign,
            s = e.symbol,
            l = e.zero,
            M = e.width,
            x = e.comma,
            j = e.precision,
            b = e.trim,
            q = e.type;
        "n" === q ? (x = !0, q = "g") : n.default[q] || (void 0 === j && (j = 12), b = !0, q = "g"), (l || "0" === r && "=" === t) && (l = !0, r = "0", t = "=");
        var N = "$" === s ? d : "#" === s && /[boxX]/.test(q) ? "0" + q.toLowerCase() : "",
            k = "$" === s ? m : /[%p]/.test(q) ? v : "",
            w = n.default[q],
            A = /[defgprs%]/.test(q);

        function P(e) {
          var a,
              n,
              s,
              d = N,
              m = k;
          if ("c" === q) m = w(e) + m, e = "";else {
            var v = (e = +e) < 0;
            if (e = isNaN(e) ? y : w(Math.abs(e), j), b && (e = (0, i.default)(e)), v && 0 == +e && (v = !1), d = (v ? "(" === u ? u : g : "-" === u || "(" === u ? "" : u) + d, m = ("s" === q ? f[8 + o.prefixExponent / 3] : "") + m + (v && "(" === u ? ")" : ""), A) for (a = -1, n = e.length; ++a < n;) {
              if (48 > (s = e.charCodeAt(a)) || s > 57) {
                m = (46 === s ? p + e.slice(a + 1) : e.slice(a)) + m, e = e.slice(0, a);
                break;
              }
            }
          }
          x && !l && (e = c(e, 1 / 0));

          var P = d.length + e.length + m.length,
              _ = P < M ? new Array(M - P + 1).join(r) : "";

          switch (x && l && (e = c(_ + e, _.length ? M - m.length : 1 / 0), _ = ""), t) {
            case "<":
              e = d + e + m + _;
              break;

            case "=":
              e = d + _ + e + m;
              break;

            case "^":
              e = _.slice(0, P = _.length >> 1) + d + e + m + _.slice(P);
              break;

            default:
              e = _ + d + e + m;
          }

          return h(e);
        }

        return j = void 0 === j ? 6 : /[gprs]/.test(q) ? Math.max(1, Math.min(21, j)) : Math.max(0, Math.min(20, j)), P.toString = function () {
          return e + "";
        }, P;
      }

      return {
        format: M,
        formatPrefix: function formatPrefix(r, t) {
          var i = M(((r = (0, a.default)(r)).type = "f", r)),
              n = 3 * Math.max(-8, Math.min(8, Math.floor((0, e.default)(t) / 3))),
              o = Math.pow(10, -n),
              u = f[8 + n / 3];
          return function (e) {
            return i(o * e) + u;
          };
        }
      };
    }
  }, {
    "./exponent.js": "m3FQ",
    "./formatGroup.js": "e1cc",
    "./formatNumerals.js": "Wswx",
    "./formatSpecifier.js": "gePe",
    "./formatTrim.js": "dWsa",
    "./formatTypes.js": "uFUO",
    "./formatPrefixAuto.js": "KTGF",
    "./identity.js": "nPOL"
  }],
  "yM0X": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = a, exports.formatPrefix = exports.format = void 0;
    var r,
        e,
        t,
        o = f(require("./locale.js"));

    function f(r) {
      return r && r.__esModule ? r : {
        default: r
      };
    }

    function a(f) {
      return r = (0, o.default)(f), exports.format = e = r.format, exports.formatPrefix = t = r.formatPrefix, r;
    }

    exports.format = e, exports.formatPrefix = t, a({
      decimal: ".",
      thousands: ",",
      grouping: [3],
      currency: ["$", ""],
      minus: "-"
    });
  }, {
    "./locale.js": "QWQX"
  }],
  "QL8u": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("./exponent.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(t) {
      return Math.max(0, -(0, e.default)(Math.abs(t)));
    }
  }, {
    "./exponent.js": "m3FQ"
  }],
  "DzQJ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = a;
    var e = t(require("./exponent.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function a(t, a) {
      return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor((0, e.default)(a) / 3))) - (0, e.default)(Math.abs(t)));
    }
  }, {
    "./exponent.js": "m3FQ"
  }],
  "afbh": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;
    var e = t(require("./exponent.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(t, u) {
      return t = Math.abs(t), u = Math.abs(u) - t, Math.max(0, (0, e.default)(u) - (0, e.default)(t)) + 1;
    }
  }, {
    "./exponent.js": "m3FQ"
  }],
  "gWev": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "formatDefaultLocale", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "format", {
      enumerable: !0,
      get: function get() {
        return e.format;
      }
    }), Object.defineProperty(exports, "formatPrefix", {
      enumerable: !0,
      get: function get() {
        return e.formatPrefix;
      }
    }), Object.defineProperty(exports, "formatLocale", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "formatSpecifier", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "FormatSpecifier", {
      enumerable: !0,
      get: function get() {
        return t.FormatSpecifier;
      }
    }), Object.defineProperty(exports, "precisionFixed", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "precisionPrefix", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "precisionRound", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    });
    var e = c(require("./defaultLocale.js")),
        r = u(require("./locale.js")),
        t = c(require("./formatSpecifier.js")),
        n = u(require("./precisionFixed.js")),
        o = u(require("./precisionPrefix.js")),
        i = u(require("./precisionRound.js"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function f() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return f = function f() {
        return e;
      }, e;
    }

    function c(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var r = f();
      if (r && r.has(e)) return r.get(e);
      var t = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var o in e) {
        if (Object.prototype.hasOwnProperty.call(e, o)) {
          var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
          i && (i.get || i.set) ? Object.defineProperty(t, o, i) : t[o] = e[o];
        }
      }

      return t.default = e, r && r.set(e, t), t;
    }
  }, {
    "./defaultLocale.js": "yM0X",
    "./locale.js": "QWQX",
    "./formatSpecifier.js": "gePe",
    "./precisionFixed.js": "QL8u",
    "./precisionPrefix.js": "DzQJ",
    "./precisionRound.js": "afbh"
  }],
  "GlqK": [function (require, module, exports) {
    "use strict";

    function t() {
      return new s();
    }

    function s() {
      this.reset();
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t, s.prototype = {
      constructor: s,
      reset: function reset() {
        this.s = this.t = 0;
      },
      add: function add(t) {
        i(e, t, this.t), i(this, e.s, this.s), this.s ? this.t += e.t : this.s = e.t;
      },
      valueOf: function valueOf() {
        return this.s;
      }
    };
    var e = new s();

    function i(t, s, e) {
      var i = t.s = s + e,
          n = i - s,
          r = i - n;
      t.t = s - r + (e - n);
    }
  }, {}],
  "sEgP": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.acos = b, exports.asin = w, exports.haversin = _, exports.tan = exports.sqrt = exports.sign = exports.sin = exports.pow = exports.log = exports.floor = exports.exp = exports.ceil = exports.cos = exports.atan2 = exports.atan = exports.abs = exports.radians = exports.degrees = exports.tau = exports.quarterPi = exports.halfPi = exports.pi = exports.epsilon2 = exports.epsilon = void 0;
    var r = 1e-6;
    exports.epsilon = r;
    var t = 1e-12;
    exports.epsilon2 = t;
    var e = Math.PI;
    exports.pi = e;
    var s = e / 2;
    exports.halfPi = s;
    var o = e / 4;
    exports.quarterPi = o;
    var a = 2 * e;
    exports.tau = a;
    var p = 180 / e;
    exports.degrees = p;
    var x = e / 180;
    exports.radians = x;
    var n = Math.abs;
    exports.abs = n;
    var i = Math.atan;
    exports.atan = i;
    var v = Math.atan2;
    exports.atan2 = v;
    var h = Math.cos;
    exports.cos = h;
    var l = Math.ceil;
    exports.ceil = l;
    var M = Math.exp;
    exports.exp = M;
    var u = Math.floor;
    exports.floor = u;
    var c = Math.log;
    exports.log = c;
    var f = Math.pow;
    exports.pow = f;
    var g = Math.sin;
    exports.sin = g;

    var d = Math.sign || function (r) {
      return r > 0 ? 1 : r < 0 ? -1 : 0;
    };

    exports.sign = d;
    var P = Math.sqrt;
    exports.sqrt = P;
    var q = Math.tan;

    function b(r) {
      return r > 1 ? 0 : r < -1 ? e : Math.acos(r);
    }

    function w(r) {
      return r > 1 ? s : r < -1 ? -s : Math.asin(r);
    }

    function _(r) {
      return (r = g(r / 2)) * r;
    }

    exports.tan = q;
  }, {}],
  "XBFK": [function (require, module, exports) {
    "use strict";

    function n(n, t) {
      n && o.hasOwnProperty(n.type) && o[n.type](n, t);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i;
    var t = {
      Feature: function Feature(t, o) {
        n(t.geometry, o);
      },
      FeatureCollection: function FeatureCollection(t, o) {
        for (var e = t.features, r = -1, i = e.length; ++r < i;) {
          n(e[r].geometry, o);
        }
      }
    },
        o = {
      Sphere: function Sphere(n, t) {
        t.sphere();
      },
      Point: function Point(n, t) {
        n = n.coordinates, t.point(n[0], n[1], n[2]);
      },
      MultiPoint: function MultiPoint(n, t) {
        for (var o = n.coordinates, e = -1, r = o.length; ++e < r;) {
          n = o[e], t.point(n[0], n[1], n[2]);
        }
      },
      LineString: function LineString(n, t) {
        e(n.coordinates, t, 0);
      },
      MultiLineString: function MultiLineString(n, t) {
        for (var o = n.coordinates, r = -1, i = o.length; ++r < i;) {
          e(o[r], t, 0);
        }
      },
      Polygon: function Polygon(n, t) {
        r(n.coordinates, t);
      },
      MultiPolygon: function MultiPolygon(n, t) {
        for (var o = n.coordinates, e = -1, i = o.length; ++e < i;) {
          r(o[e], t);
        }
      },
      GeometryCollection: function GeometryCollection(t, o) {
        for (var e = t.geometries, r = -1, i = e.length; ++r < i;) {
          n(e[r], o);
        }
      }
    };

    function e(n, t, o) {
      var e,
          r = -1,
          i = n.length - o;

      for (t.lineStart(); ++r < i;) {
        e = n[r], t.point(e[0], e[1], e[2]);
      }

      t.lineEnd();
    }

    function r(n, t) {
      var o = -1,
          r = n.length;

      for (t.polygonStart(); ++o < r;) {
        e(n[o], t, 1);
      }

      t.polygonEnd();
    }

    function i(o, e) {
      o && t.hasOwnProperty(o.type) ? t[o.type](o, e) : n(o, e);
    }
  }, {}],
  "dpXv": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = q, exports.areaStream = exports.areaRingSum = void 0;

    var e = n(require("./adder.js")),
        t = require("./math.js"),
        a = n(require("./noop.js")),
        r = n(require("./stream.js"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var i = (0, e.default)();
    exports.areaRingSum = i;
    var u,
        o,
        s,
        d,
        l,
        f = (0, e.default)(),
        p = {
      point: a.default,
      lineStart: a.default,
      lineEnd: a.default,
      polygonStart: function polygonStart() {
        i.reset(), p.lineStart = c, p.lineEnd = S;
      },
      polygonEnd: function polygonEnd() {
        var e = +i;
        f.add(e < 0 ? t.tau + e : e), this.lineStart = this.lineEnd = this.point = a.default;
      },
      sphere: function sphere() {
        f.add(t.tau);
      }
    };

    function c() {
      p.point = v;
    }

    function S() {
      m(u, o);
    }

    function v(e, a) {
      p.point = m, u = e, o = a, e *= t.radians, a *= t.radians, s = e, d = (0, t.cos)(a = a / 2 + t.quarterPi), l = (0, t.sin)(a);
    }

    function m(e, a) {
      e *= t.radians, a = (a *= t.radians) / 2 + t.quarterPi;
      var r = e - s,
          n = r >= 0 ? 1 : -1,
          u = n * r,
          o = (0, t.cos)(a),
          f = (0, t.sin)(a),
          p = l * f,
          c = d * o + p * (0, t.cos)(u),
          S = p * n * (0, t.sin)(u);
      i.add((0, t.atan2)(S, c)), s = e, d = o, l = f;
    }

    function q(e) {
      return f.reset(), (0, r.default)(e, p), 2 * f;
    }

    exports.areaStream = p;
  }, {
    "./adder.js": "GlqK",
    "./math.js": "sEgP",
    "./noop.js": "BhKh",
    "./stream.js": "XBFK"
  }],
  "rFMq": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.spherical = e, exports.cartesian = t, exports.cartesianDot = n, exports.cartesianCross = s, exports.cartesianAddInPlace = a, exports.cartesianScale = o, exports.cartesianNormalizeInPlace = c;

    var r = require("./math.js");

    function e(e) {
      return [(0, r.atan2)(e[1], e[0]), (0, r.asin)(e[2])];
    }

    function t(e) {
      var t = e[0],
          n = e[1],
          s = (0, r.cos)(n);
      return [s * (0, r.cos)(t), s * (0, r.sin)(t), (0, r.sin)(n)];
    }

    function n(r, e) {
      return r[0] * e[0] + r[1] * e[1] + r[2] * e[2];
    }

    function s(r, e) {
      return [r[1] * e[2] - r[2] * e[1], r[2] * e[0] - r[0] * e[2], r[0] * e[1] - r[1] * e[0]];
    }

    function a(r, e) {
      r[0] += e[0], r[1] += e[1], r[2] += e[2];
    }

    function o(r, e) {
      return [r[0] * e, r[1] * e, r[2] * e];
    }

    function c(e) {
      var t = (0, r.sqrt)(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
      e[0] /= t, e[1] /= t, e[2] /= t;
    }
  }, {
    "./math.js": "sEgP"
  }],
  "wXR4": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = M;

    var e = i(require("./adder.js")),
        n = require("./area.js"),
        r = require("./cartesian.js"),
        a = require("./math.js"),
        t = i(require("./stream.js"));

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var o,
        s,
        u,
        l,
        f,
        c,
        d,
        p,
        S,
        g,
        m = (0, e.default)(),
        N = {
      point: h,
      lineStart: j,
      lineEnd: E,
      polygonStart: function polygonStart() {
        N.point = q, N.lineStart = y, N.lineEnd = b, m.reset(), n.areaStream.polygonStart();
      },
      polygonEnd: function polygonEnd() {
        n.areaStream.polygonEnd(), N.point = h, N.lineStart = j, N.lineEnd = E, n.areaRingSum < 0 ? (o = -(u = 180), s = -(l = 90)) : m > a.epsilon ? l = 90 : m < -a.epsilon && (s = -90), g[0] = o, g[1] = u;
      },
      sphere: function sphere() {
        o = -(u = 180), s = -(l = 90);
      }
    };

    function h(e, n) {
      S.push(g = [o = e, u = e]), n < s && (s = n), n > l && (l = n);
    }

    function v(e, n) {
      var t = (0, r.cartesian)([e * a.radians, n * a.radians]);

      if (p) {
        var i = (0, r.cartesianCross)(p, t),
            c = [i[1], -i[0], 0],
            d = (0, r.cartesianCross)(c, i);
        (0, r.cartesianNormalizeInPlace)(d), d = (0, r.spherical)(d);
        var m,
            N = e - f,
            h = N > 0 ? 1 : -1,
            v = d[0] * a.degrees * h,
            j = (0, a.abs)(N) > 180;
        j ^ (h * f < v && v < h * e) ? (m = d[1] * a.degrees) > l && (l = m) : j ^ (h * f < (v = (v + 360) % 360 - 180) && v < h * e) ? (m = -d[1] * a.degrees) < s && (s = m) : (n < s && (s = n), n > l && (l = n)), j ? e < f ? _(o, e) > _(o, u) && (u = e) : _(e, u) > _(o, u) && (o = e) : u >= o ? (e < o && (o = e), e > u && (u = e)) : e > f ? _(o, e) > _(o, u) && (u = e) : _(e, u) > _(o, u) && (o = e);
      } else S.push(g = [o = e, u = e]);

      n < s && (s = n), n > l && (l = n), p = t, f = e;
    }

    function j() {
      N.point = v;
    }

    function E() {
      g[0] = o, g[1] = u, N.point = h, p = null;
    }

    function q(e, r) {
      if (p) {
        var t = e - f;
        m.add((0, a.abs)(t) > 180 ? t + (t > 0 ? 360 : -360) : t);
      } else c = e, d = r;

      n.areaStream.point(e, r), v(e, r);
    }

    function y() {
      n.areaStream.lineStart();
    }

    function b() {
      q(c, d), n.areaStream.lineEnd(), (0, a.abs)(m) > a.epsilon && (o = -(u = 180)), g[0] = o, g[1] = u, p = null;
    }

    function _(e, n) {
      return (n -= e) < 0 ? n + 360 : n;
    }

    function x(e, n) {
      return e[0] - n[0];
    }

    function C(e, n) {
      return e[0] <= e[1] ? e[0] <= n && n <= e[1] : n < e[0] || e[1] < n;
    }

    function M(e) {
      var n, r, a, i, f, c, d;

      if (l = u = -(o = s = 1 / 0), S = [], (0, t.default)(e, N), r = S.length) {
        for (S.sort(x), n = 1, f = [a = S[0]]; n < r; ++n) {
          C(a, (i = S[n])[0]) || C(a, i[1]) ? (_(a[0], i[1]) > _(a[0], a[1]) && (a[1] = i[1]), _(i[0], a[1]) > _(a[0], a[1]) && (a[0] = i[0])) : f.push(a = i);
        }

        for (c = -1 / 0, n = 0, a = f[r = f.length - 1]; n <= r; a = i, ++n) {
          i = f[n], (d = _(a[1], i[0])) > c && (c = d, o = i[0], u = a[1]);
        }
      }

      return S = g = null, o === 1 / 0 || s === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[o, s], [u, l]];
    }
  }, {
    "./adder.js": "GlqK",
    "./area.js": "dpXv",
    "./cartesian.js": "rFMq",
    "./math.js": "sEgP",
    "./stream.js": "XBFK"
  }],
  "pQGp": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = w;

    var n,
        i,
        s,
        t,
        a,
        o,
        r,
        e,
        u,
        c,
        d,
        f,
        l,
        p,
        v,
        q,
        g = require("./math.js"),
        j = N(require("./noop.js")),
        E = N(require("./stream.js"));

    function N(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    var S = {
      sphere: j.default,
      point: _,
      lineStart: h,
      lineEnd: M,
      polygonStart: function polygonStart() {
        S.lineStart = b, S.lineEnd = O;
      },
      polygonEnd: function polygonEnd() {
        S.lineStart = h, S.lineEnd = M;
      }
    };

    function _(n, i) {
      n *= g.radians, i *= g.radians;
      var s = (0, g.cos)(i);
      y(s * (0, g.cos)(n), s * (0, g.sin)(n), (0, g.sin)(i));
    }

    function y(i, o, r) {
      s += (i - s) / ++n, t += (o - t) / n, a += (r - a) / n;
    }

    function h() {
      S.point = m;
    }

    function m(n, i) {
      n *= g.radians, i *= g.radians;
      var s = (0, g.cos)(i);
      p = s * (0, g.cos)(n), v = s * (0, g.sin)(n), q = (0, g.sin)(i), S.point = x, y(p, v, q);
    }

    function x(n, s) {
      n *= g.radians, s *= g.radians;
      var t = (0, g.cos)(s),
          a = t * (0, g.cos)(n),
          u = t * (0, g.sin)(n),
          c = (0, g.sin)(s),
          d = (0, g.atan2)((0, g.sqrt)((d = v * c - q * u) * d + (d = q * a - p * c) * d + (d = p * u - v * a) * d), p * a + v * u + q * c);
      i += d, o += d * (p + (p = a)), r += d * (v + (v = u)), e += d * (q + (q = c)), y(p, v, q);
    }

    function M() {
      S.point = _;
    }

    function b() {
      S.point = P;
    }

    function O() {
      k(f, l), S.point = _;
    }

    function P(n, i) {
      f = n, l = i, n *= g.radians, i *= g.radians, S.point = k;
      var s = (0, g.cos)(i);
      p = s * (0, g.cos)(n), v = s * (0, g.sin)(n), q = (0, g.sin)(i), y(p, v, q);
    }

    function k(n, s) {
      n *= g.radians, s *= g.radians;

      var t = (0, g.cos)(s),
          a = t * (0, g.cos)(n),
          f = t * (0, g.sin)(n),
          l = (0, g.sin)(s),
          j = v * l - q * f,
          E = q * a - p * l,
          N = p * f - v * a,
          S = (0, g.sqrt)(j * j + E * E + N * N),
          _ = (0, g.asin)(S),
          h = S && -_ / S;

      u += h * j, c += h * E, d += h * N, i += _, o += _ * (p + (p = a)), r += _ * (v + (v = f)), e += _ * (q + (q = l)), y(p, v, q);
    }

    function w(f) {
      n = i = s = t = a = o = r = e = u = c = d = 0, (0, E.default)(f, S);
      var l = u,
          p = c,
          v = d,
          q = l * l + p * p + v * v;
      return q < g.epsilon2 && (l = o, p = r, v = e, i < g.epsilon && (l = s, p = t, v = a), (q = l * l + p * p + v * v) < g.epsilon2) ? [NaN, NaN] : [(0, g.atan2)(p, l) * g.degrees, (0, g.asin)(v / (0, g.sqrt)(q)) * g.degrees];
    }
  }, {
    "./math.js": "sEgP",
    "./noop.js": "BhKh",
    "./stream.js": "XBFK"
  }],
  "hCea": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      function r(r, n) {
        return r = e(r, n), t(r[0], r[1]);
      }

      return e.invert && t.invert && (r.invert = function (r, n) {
        return (r = t.invert(r, n)) && e.invert(r[0], r[1]);
      }), r;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "KwdP": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.rotateRadians = a, exports.default = o;

    var n = e(require("./compose.js")),
        r = require("./math.js");

    function e(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    function t(n, e) {
      return [(0, r.abs)(n) > r.pi ? n + Math.round(-n / r.tau) * r.tau : n, e];
    }

    function a(e, a, i) {
      return (e %= r.tau) ? a || i ? (0, n.default)(u(e), s(a, i)) : u(e) : a || i ? s(a, i) : t;
    }

    function i(n) {
      return function (e, t) {
        return [(e += n) > r.pi ? e - r.tau : e < -r.pi ? e + r.tau : e, t];
      };
    }

    function u(n) {
      var r = i(n);
      return r.invert = i(-n), r;
    }

    function s(n, e) {
      var t = (0, r.cos)(n),
          a = (0, r.sin)(n),
          i = (0, r.cos)(e),
          u = (0, r.sin)(e);

      function s(n, e) {
        var s = (0, r.cos)(e),
            o = (0, r.cos)(n) * s,
            c = (0, r.sin)(n) * s,
            d = (0, r.sin)(e),
            f = d * t + o * a;
        return [(0, r.atan2)(c * i - f * u, o * t - d * a), (0, r.asin)(f * i + c * u)];
      }

      return s.invert = function (n, e) {
        var s = (0, r.cos)(e),
            o = (0, r.cos)(n) * s,
            c = (0, r.sin)(n) * s,
            d = (0, r.sin)(e),
            f = d * i - c * u;
        return [(0, r.atan2)(c * i + d * u, o * t + f * a), (0, r.asin)(f * t - o * a)];
      }, s;
    }

    function o(n) {
      function e(e) {
        return (e = n(e[0] * r.radians, e[1] * r.radians))[0] *= r.degrees, e[1] *= r.degrees, e;
      }

      return n = a(n[0] * r.radians, n[1] * r.radians, n.length > 2 ? n[2] * r.radians : 0), e.invert = function (e) {
        return (e = n.invert(e[0] * r.radians, e[1] * r.radians))[0] *= r.degrees, e[1] *= r.degrees, e;
      }, e;
    }

    t.invert = t;
  }, {
    "./compose.js": "hCea",
    "./math.js": "sEgP"
  }],
  "dbGM": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.circleStream = i, exports.default = o;

    var e = require("./cartesian.js"),
        t = a(require("./constant.js")),
        n = require("./math.js"),
        r = require("./rotation.js");

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function i(t, r, a, i, o, s) {
      if (a) {
        var c = (0, n.cos)(r),
            l = (0, n.sin)(r),
            f = i * a;
        null == o ? (o = r + i * n.tau, s = r - f / 2) : (o = u(c, o), s = u(c, s), (i > 0 ? o < s : o > s) && (o += i * n.tau));

        for (var d, p = o; i > 0 ? p > s : p < s; p -= f) {
          d = (0, e.spherical)([c, -l * (0, n.cos)(p), -l * (0, n.sin)(p)]), t.point(d[0], d[1]);
        }
      }
    }

    function u(t, r) {
      (r = (0, e.cartesian)(r))[0] -= t, (0, e.cartesianNormalizeInPlace)(r);
      var a = (0, n.acos)(-r[1]);
      return ((-r[2] < 0 ? -a : a) + n.tau - n.epsilon) % n.tau;
    }

    function o() {
      var e,
          a,
          u = (0, t.default)([0, 0]),
          o = (0, t.default)(90),
          s = (0, t.default)(6),
          c = {
        point: function point(t, r) {
          e.push(t = a(t, r)), t[0] *= n.degrees, t[1] *= n.degrees;
        }
      };

      function l() {
        var t = u.apply(this, arguments),
            l = o.apply(this, arguments) * n.radians,
            f = s.apply(this, arguments) * n.radians;
        return e = [], a = (0, r.rotateRadians)(-t[0] * n.radians, -t[1] * n.radians, 0).invert, i(c, l, f, 1), t = {
          type: "Polygon",
          coordinates: [e]
        }, e = a = null, t;
      }

      return l.center = function (e) {
        return arguments.length ? (u = "function" == typeof e ? e : (0, t.default)([+e[0], +e[1]]), l) : u;
      }, l.radius = function (e) {
        return arguments.length ? (o = "function" == typeof e ? e : (0, t.default)(+e), l) : o;
      }, l.precision = function (e) {
        return arguments.length ? (s = "function" == typeof e ? e : (0, t.default)(+e), l) : s;
      }, l;
    }
  }, {
    "./cartesian.js": "rFMq",
    "./constant.js": "OY6d",
    "./math.js": "sEgP",
    "./rotation.js": "KwdP"
  }],
  "VrlK": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = n(require("../noop.js"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t() {
      var n,
          t = [];
      return {
        point: function point(e, t) {
          n.push([e, t]);
        },
        lineStart: function lineStart() {
          t.push(n = []);
        },
        lineEnd: e.default,
        rejoin: function rejoin() {
          t.length > 1 && t.push(t.pop().concat(t.shift()));
        },
        result: function result() {
          var e = t;
          return t = [], n = null, e;
        }
      };
    }
  }, {
    "../noop.js": "BhKh"
  }],
  "j4Ms": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./math.js");

    function r(r, s) {
      return (0, e.abs)(r[0] - s[0]) < e.epsilon && (0, e.abs)(r[1] - s[1]) < e.epsilon;
    }
  }, {
    "./math.js": "sEgP"
  }],
  "nqrN": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i;
    var e = n(require("../pointEqual.js"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(e, n, t, i) {
      this.x = e, this.z = n, this.o = t, this.e = i, this.v = !1, this.n = this.p = null;
    }

    function i(n, i, o, r, f) {
      var u,
          s,
          h = [],
          p = [];

      if (n.forEach(function (n) {
        if (!((i = n.length - 1) <= 0)) {
          var i,
              l,
              o = n[0],
              r = n[i];

          if ((0, e.default)(o, r)) {
            for (f.lineStart(), u = 0; u < i; ++u) {
              f.point((o = n[u])[0], o[1]);
            }

            f.lineEnd();
          } else h.push(l = new t(o, n, null, !0)), p.push(l.o = new t(o, null, l, !1)), h.push(l = new t(r, n, null, !1)), p.push(l.o = new t(r, null, l, !0));
        }
      }), h.length) {
        for (p.sort(i), l(h), l(p), u = 0, s = p.length; u < s; ++u) {
          p[u].e = o = !o;
        }

        for (var a, v, d = h[0];;) {
          for (var c = d, x = !0; c.v;) {
            if ((c = c.n) === d) return;
          }

          a = c.z, f.lineStart();

          do {
            if (c.v = c.o.v = !0, c.e) {
              if (x) for (u = 0, s = a.length; u < s; ++u) {
                f.point((v = a[u])[0], v[1]);
              } else r(c.x, c.n.x, 1, f);
              c = c.n;
            } else {
              if (x) for (a = c.p.z, u = a.length - 1; u >= 0; --u) {
                f.point((v = a[u])[0], v[1]);
              } else r(c.x, c.p.x, -1, f);
              c = c.p;
            }

            a = (c = c.o).z, x = !x;
          } while (!c.v);

          f.lineEnd();
        }
      }
    }

    function l(e) {
      if (n = e.length) {
        for (var n, t, i = 0, l = e[0]; ++i < n;) {
          l.n = t = e[i], t.p = l, l = t;
        }

        l.n = t = e[0], t.p = l;
      }
    }
  }, {
    "../pointEqual.js": "j4Ms"
  }],
  "Cmis": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = i(require("./adder.js")),
        a = require("./cartesian.js"),
        r = require("./math.js");

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var s = (0, e.default)();

    function n(e) {
      return (0, r.abs)(e[0]) <= r.pi ? e[0] : (0, r.sign)(e[0]) * (((0, r.abs)(e[0]) + r.pi) % r.tau - r.pi);
    }

    function t(e, i) {
      var t = n(i),
          o = i[1],
          u = (0, r.sin)(o),
          l = [(0, r.sin)(t), -(0, r.cos)(t), 0],
          c = 0,
          f = 0;
      s.reset(), 1 === u ? o = r.halfPi + r.epsilon : -1 === u && (o = -r.halfPi - r.epsilon);

      for (var p = 0, d = e.length; p < d; ++p) {
        if (P = (v = e[p]).length) for (var v, P, h = v[P - 1], q = n(h), j = h[1] / 2 + r.quarterPi, _ = (0, r.sin)(j), b = (0, r.cos)(j), g = 0; g < P; ++g, q = x, _ = C, b = I, h = m) {
          var m = v[g],
              x = n(m),
              z = m[1] / 2 + r.quarterPi,
              C = (0, r.sin)(z),
              I = (0, r.cos)(z),
              M = x - q,
              N = M >= 0 ? 1 : -1,
              y = N * M,
              O = y > r.pi,
              k = _ * C;

          if (s.add((0, r.atan2)(k * N * (0, r.sin)(y), b * I + k * (0, r.cos)(y))), c += O ? M + N * r.tau : M, O ^ q >= t ^ x >= t) {
            var w = (0, a.cartesianCross)((0, a.cartesian)(h), (0, a.cartesian)(m));
            (0, a.cartesianNormalizeInPlace)(w);
            var A = (0, a.cartesianCross)(l, w);
            (0, a.cartesianNormalizeInPlace)(A);
            var B = (O ^ M >= 0 ? -1 : 1) * (0, r.asin)(A[2]);
            (o > B || o === B && (w[0] || w[1])) && (f += O ^ M >= 0 ? 1 : -1);
          }
        }
      }

      return (c < -r.epsilon || c < r.epsilon && s < -r.epsilon) ^ 1 & f;
    }
  }, {
    "./adder.js": "GlqK",
    "./cartesian.js": "rFMq",
    "./math.js": "sEgP"
  }],
  "bbiM": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var n = o(require("./buffer.js")),
        t = o(require("./rejoin.js")),
        e = require("../math.js"),
        i = o(require("../polygonContains.js")),
        l = require("d3-array");

    function o(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    function r(e, o, r, f) {
      return function (p) {
        var s,
            c,
            d,
            h = o(p),
            g = (0, n.default)(),
            S = o(g),
            y = !1,
            E = {
          point: j,
          lineStart: v,
          lineEnd: P,
          polygonStart: function polygonStart() {
            E.point = x, E.lineStart = _, E.lineEnd = b, c = [], s = [];
          },
          polygonEnd: function polygonEnd() {
            E.point = j, E.lineStart = v, E.lineEnd = P, c = (0, l.merge)(c);
            var n = (0, i.default)(s, f);
            c.length ? (y || (p.polygonStart(), y = !0), (0, t.default)(c, a, n, r, p)) : n && (y || (p.polygonStart(), y = !0), p.lineStart(), r(null, null, 1, p), p.lineEnd()), y && (p.polygonEnd(), y = !1), c = s = null;
          },
          sphere: function sphere() {
            p.polygonStart(), p.lineStart(), r(null, null, 1, p), p.lineEnd(), p.polygonEnd();
          }
        };

        function j(n, t) {
          e(n, t) && p.point(n, t);
        }

        function q(n, t) {
          h.point(n, t);
        }

        function v() {
          E.point = q, h.lineStart();
        }

        function P() {
          E.point = j, h.lineEnd();
        }

        function x(n, t) {
          d.push([n, t]), S.point(n, t);
        }

        function _() {
          S.lineStart(), d = [];
        }

        function b() {
          x(d[0][0], d[0][1]), S.lineEnd();
          var n,
              t,
              e,
              i,
              l = S.clean(),
              o = g.result(),
              r = o.length;
          if (d.pop(), s.push(d), d = null, r) if (1 & l) {
            if ((t = (e = o[0]).length - 1) > 0) {
              for (y || (p.polygonStart(), y = !0), p.lineStart(), n = 0; n < t; ++n) {
                p.point((i = e[n])[0], i[1]);
              }

              p.lineEnd();
            }
          } else r > 1 && 2 & l && o.push(o.pop().concat(o.shift())), c.push(o.filter(u));
        }

        return E;
      };
    }

    function u(n) {
      return n.length > 1;
    }

    function a(n, t) {
      return ((n = n.x)[0] < 0 ? n[1] - e.halfPi - e.epsilon : e.halfPi - n[1]) - ((t = t.x)[0] < 0 ? t[1] - e.halfPi - e.epsilon : e.halfPi - t[1]);
    }
  }, {
    "./buffer.js": "VrlK",
    "./rejoin.js": "nqrN",
    "../math.js": "sEgP",
    "../polygonContains.js": "Cmis",
    "d3-array": "cBuZ"
  }],
  "CWnN": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var i = t(require("./index.js")),
        n = require("../math.js");

    function t(i) {
      return i && i.__esModule ? i : {
        default: i
      };
    }

    var e = (0, i.default)(function () {
      return !0;
    }, o, a, [-n.pi, -n.halfPi]);

    function o(i) {
      var t,
          e = NaN,
          o = NaN,
          a = NaN;
      return {
        lineStart: function lineStart() {
          i.lineStart(), t = 1;
        },
        point: function point(l, r) {
          var s = l > 0 ? n.pi : -n.pi,
              u = (0, n.abs)(l - e);
          (0, n.abs)(u - n.pi) < n.epsilon ? (i.point(e, o = (o + r) / 2 > 0 ? n.halfPi : -n.halfPi), i.point(a, o), i.lineEnd(), i.lineStart(), i.point(s, o), i.point(l, o), t = 0) : a !== s && u >= n.pi && ((0, n.abs)(e - a) < n.epsilon && (e -= a * n.epsilon), (0, n.abs)(l - s) < n.epsilon && (l -= s * n.epsilon), o = p(e, o, l, r), i.point(a, o), i.lineEnd(), i.lineStart(), i.point(s, o), t = 0), i.point(e = l, o = r), a = s;
        },
        lineEnd: function lineEnd() {
          i.lineEnd(), e = o = NaN;
        },
        clean: function clean() {
          return 2 - t;
        }
      };
    }

    function p(i, t, e, o) {
      var p,
          a,
          l = (0, n.sin)(i - e);
      return (0, n.abs)(l) > n.epsilon ? (0, n.atan)(((0, n.sin)(t) * (a = (0, n.cos)(o)) * (0, n.sin)(e) - (0, n.sin)(o) * (p = (0, n.cos)(t)) * (0, n.sin)(i)) / (p * a * l)) : (t + o) / 2;
    }

    function a(i, t, e, o) {
      var p;
      if (null == i) p = e * n.halfPi, o.point(-n.pi, p), o.point(0, p), o.point(n.pi, p), o.point(n.pi, 0), o.point(n.pi, -p), o.point(0, -p), o.point(-n.pi, -p), o.point(-n.pi, 0), o.point(-n.pi, p);else if ((0, n.abs)(i[0] - t[0]) > n.epsilon) {
        var a = i[0] < t[0] ? n.pi : -n.pi;
        p = e * a / 2, o.point(-a, p), o.point(0, p), o.point(a, p);
      } else o.point(t[0], t[1]);
    }

    exports.default = e;
  }, {
    "./index.js": "bbiM",
    "../math.js": "sEgP"
  }],
  "uulM": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = s;

    var e = require("../cartesian.js"),
        n = require("../circle.js"),
        i = require("../math.js"),
        r = t(require("../pointEqual.js")),
        a = t(require("./index.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function s(t) {
      var s = (0, i.cos)(t),
          c = 6 * i.radians,
          l = s > 0,
          o = (0, i.abs)(s) > i.epsilon;

      function u(e, n) {
        return (0, i.cos)(e) * (0, i.cos)(n) > s;
      }

      function p(n, r, a) {
        var t = (0, e.cartesian)(n),
            c = (0, e.cartesian)(r),
            l = [1, 0, 0],
            o = (0, e.cartesianCross)(t, c),
            u = (0, e.cartesianDot)(o, o),
            p = o[0],
            f = u - p * p;
        if (!f) return !a && n;
        var d = s * u / f,
            v = -s * p / f,
            S = (0, e.cartesianCross)(l, o),
            q = (0, e.cartesianScale)(l, d),
            j = (0, e.cartesianScale)(o, v);
        (0, e.cartesianAddInPlace)(q, j);
        var E = S,
            b = (0, e.cartesianDot)(q, E),
            D = (0, e.cartesianDot)(E, E),
            P = b * b - D * ((0, e.cartesianDot)(q, q) - 1);

        if (!(P < 0)) {
          var _ = (0, i.sqrt)(P),
              h = (0, e.cartesianScale)(E, (-b - _) / D);

          if ((0, e.cartesianAddInPlace)(h, q), h = (0, e.spherical)(h), !a) return h;
          var x,
              A = n[0],
              I = r[0],
              m = n[1],
              C = r[1];
          I < A && (x = A, A = I, I = x);
          var M = I - A,
              y = (0, i.abs)(M - i.pi) < i.epsilon;

          if (!y && C < m && (x = m, m = C, C = x), y || M < i.epsilon ? y ? m + C > 0 ^ h[1] < ((0, i.abs)(h[0] - A) < i.epsilon ? m : C) : m <= h[1] && h[1] <= C : M > i.pi ^ (A <= h[0] && h[0] <= I)) {
            var O = (0, e.cartesianScale)(E, (-b + _) / D);
            return (0, e.cartesianAddInPlace)(O, q), [h, (0, e.spherical)(O)];
          }
        }
      }

      function f(e, n) {
        var r = l ? t : i.pi - t,
            a = 0;
        return e < -r ? a |= 1 : e > r && (a |= 2), n < -r ? a |= 4 : n > r && (a |= 8), a;
      }

      return (0, a.default)(u, function (e) {
        var n, a, t, s, c;
        return {
          lineStart: function lineStart() {
            s = t = !1, c = 1;
          },
          point: function point(d, v) {
            var S,
                q = [d, v],
                j = u(d, v),
                E = l ? j ? 0 : f(d, v) : j ? f(d + (d < 0 ? i.pi : -i.pi), v) : 0;
            if (!n && (s = t = j) && e.lineStart(), j !== t && (!(S = p(n, q)) || (0, r.default)(n, S) || (0, r.default)(q, S)) && (q[0] += i.epsilon, q[1] += i.epsilon, j = u(q[0], q[1])), j !== t) c = 0, j ? (e.lineStart(), S = p(q, n), e.point(S[0], S[1])) : (S = p(n, q), e.point(S[0], S[1]), e.lineEnd()), n = S;else if (o && n && l ^ j) {
              var b;
              E & a || !(b = p(q, n, !0)) || (c = 0, l ? (e.lineStart(), e.point(b[0][0], b[0][1]), e.point(b[1][0], b[1][1]), e.lineEnd()) : (e.point(b[1][0], b[1][1]), e.lineEnd(), e.lineStart(), e.point(b[0][0], b[0][1])));
            }
            !j || n && (0, r.default)(n, q) || e.point(q[0], q[1]), n = q, t = j, a = E;
          },
          lineEnd: function lineEnd() {
            t && e.lineEnd(), n = null;
          },
          clean: function clean() {
            return c | (s && t) << 1;
          }
        };
      }, function (e, i, r, a) {
        (0, n.circleStream)(a, t, c, r, e, i);
      }, l ? [0, -t] : [-i.pi, t - i.pi]);
    }
  }, {
    "../cartesian.js": "rFMq",
    "../circle.js": "dbGM",
    "../math.js": "sEgP",
    "../pointEqual.js": "j4Ms",
    "./index.js": "bbiM"
  }],
  "RhqQ": [function (require, module, exports) {
    "use strict";

    function e(e, r, f, i, t, u) {
      var n,
          s = e[0],
          l = e[1],
          o = 0,
          a = 1,
          c = r[0] - s,
          d = r[1] - l;

      if (n = f - s, c || !(n > 0)) {
        if (n /= c, c < 0) {
          if (n < o) return;
          n < a && (a = n);
        } else if (c > 0) {
          if (n > a) return;
          n > o && (o = n);
        }

        if (n = t - s, c || !(n < 0)) {
          if (n /= c, c < 0) {
            if (n > a) return;
            n > o && (o = n);
          } else if (c > 0) {
            if (n < o) return;
            n < a && (a = n);
          }

          if (n = i - l, d || !(n > 0)) {
            if (n /= d, d < 0) {
              if (n < o) return;
              n < a && (a = n);
            } else if (d > 0) {
              if (n > a) return;
              n > o && (o = n);
            }

            if (n = u - l, d || !(n < 0)) {
              if (n /= d, d < 0) {
                if (n > a) return;
                n > o && (o = n);
              } else if (d > 0) {
                if (n < o) return;
                n < a && (a = n);
              }

              return o > 0 && (e[0] = s + o * c, e[1] = l + o * d), a < 1 && (r[0] = s + a * c, r[1] = l + a * d), !0;
            }
          }
        }
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "E6SH": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var n = require("../math.js"),
        t = o(require("./buffer.js")),
        e = o(require("./line.js")),
        r = o(require("./rejoin.js")),
        i = require("d3-array");

    function o(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    var u = 1e9,
        a = -u;

    function l(o, l, f, p) {
      function s(n, t) {
        return o <= n && n <= f && l <= t && t <= p;
      }

      function c(n, t, e, r) {
        var i = 0,
            u = 0;
        if (null == n || (i = d(n, e)) !== (u = d(t, e)) || v(n, t) < 0 ^ e > 0) do {
          r.point(0 === i || 3 === i ? o : f, i > 1 ? p : l);
        } while ((i = (i + e + 4) % 4) !== u);else r.point(t[0], t[1]);
      }

      function d(t, e) {
        return (0, n.abs)(t[0] - o) < n.epsilon ? e > 0 ? 0 : 3 : (0, n.abs)(t[0] - f) < n.epsilon ? e > 0 ? 2 : 1 : (0, n.abs)(t[1] - l) < n.epsilon ? e > 0 ? 1 : 0 : e > 0 ? 3 : 2;
      }

      function h(n, t) {
        return v(n.x, t.x);
      }

      function v(n, t) {
        var e = d(n, 1),
            r = d(t, 1);
        return e !== r ? e - r : 0 === e ? t[1] - n[1] : 1 === e ? n[0] - t[0] : 2 === e ? n[1] - t[1] : t[0] - n[0];
      }

      return function (n) {
        var d,
            v,
            m,
            M,
            g,
            x,
            j,
            S,
            y,
            E,
            b,
            q = n,
            _ = (0, t.default)(),
            N = {
          point: w,
          lineStart: function lineStart() {
            N.point = O, v && v.push(m = []);
            E = !0, y = !1, j = S = NaN;
          },
          lineEnd: function lineEnd() {
            d && (O(M, g), x && y && _.rejoin(), d.push(_.result()));
            N.point = w, y && q.lineEnd();
          },
          polygonStart: function polygonStart() {
            q = _, d = [], v = [], b = !0;
          },
          polygonEnd: function polygonEnd() {
            var t = function () {
              for (var n = 0, t = 0, e = v.length; t < e; ++t) {
                for (var r, i, u = v[t], a = 1, l = u.length, f = u[0], s = f[0], c = f[1]; a < l; ++a) {
                  r = s, i = c, f = u[a], s = f[0], c = f[1], i <= p ? c > p && (s - r) * (p - i) > (c - i) * (o - r) && ++n : c <= p && (s - r) * (p - i) < (c - i) * (o - r) && --n;
                }
              }

              return n;
            }(),
                e = b && t,
                u = (d = (0, i.merge)(d)).length;

            (e || u) && (n.polygonStart(), e && (n.lineStart(), c(null, null, 1, n), n.lineEnd()), u && (0, r.default)(d, h, t, c, n), n.polygonEnd());
            q = n, d = v = m = null;
          }
        };

        function w(n, t) {
          s(n, t) && q.point(n, t);
        }

        function O(n, t) {
          var r = s(n, t);
          if (v && m.push([n, t]), E) M = n, g = t, x = r, E = !1, r && (q.lineStart(), q.point(n, t));else if (r && y) q.point(n, t);else {
            var i = [j = Math.max(a, Math.min(u, j)), S = Math.max(a, Math.min(u, S))],
                c = [n = Math.max(a, Math.min(u, n)), t = Math.max(a, Math.min(u, t))];
            (0, e.default)(i, c, o, l, f, p) ? (y || (q.lineStart(), q.point(i[0], i[1])), q.point(c[0], c[1]), r || q.lineEnd(), b = !1) : r && (q.lineStart(), q.point(n, t), b = !1);
          }
          j = n, S = t, y = r;
        }

        return N;
      };
    }
  }, {
    "../math.js": "sEgP",
    "./buffer.js": "VrlK",
    "./line.js": "RhqQ",
    "./rejoin.js": "nqrN",
    "d3-array": "cBuZ"
  }],
  "Pttt": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("./rectangle.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r() {
      var t,
          r,
          n,
          u = 0,
          l = 0,
          o = 960,
          a = 500;
      return n = {
        stream: function stream(n) {
          return t && r === n ? t : t = (0, e.default)(u, l, o, a)(r = n);
        },
        extent: function extent(e) {
          return arguments.length ? (u = +e[0][0], l = +e[0][1], o = +e[1][0], a = +e[1][1], t = r = null, n) : [[u, l], [o, a]];
        }
      };
    }
  }, {
    "./rectangle.js": "E6SH"
  }],
  "rgN9": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = j;

    var e = r(require("./adder.js")),
        n = require("./math.js"),
        t = r(require("./noop.js")),
        a = r(require("./stream.js"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var i,
        u,
        d,
        s = (0, e.default)(),
        o = {
      sphere: t.default,
      point: t.default,
      lineStart: l,
      lineEnd: t.default,
      polygonStart: t.default,
      polygonEnd: t.default
    };

    function l() {
      o.point = c, o.lineEnd = f;
    }

    function f() {
      o.point = o.lineEnd = t.default;
    }

    function c(e, t) {
      e *= n.radians, t *= n.radians, i = e, u = (0, n.sin)(t), d = (0, n.cos)(t), o.point = p;
    }

    function p(e, t) {
      e *= n.radians, t *= n.radians;
      var a = (0, n.sin)(t),
          r = (0, n.cos)(t),
          o = (0, n.abs)(e - i),
          l = (0, n.cos)(o),
          f = r * (0, n.sin)(o),
          c = d * a - u * r * l,
          p = u * a + d * r * l;
      s.add((0, n.atan2)((0, n.sqrt)(f * f + c * c), p)), i = e, u = a, d = r;
    }

    function j(e) {
      return s.reset(), (0, a.default)(e, o), +s;
    }
  }, {
    "./adder.js": "GlqK",
    "./math.js": "sEgP",
    "./noop.js": "BhKh",
    "./stream.js": "XBFK"
  }],
  "IoFW": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n;
    var e = t(require("./length.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = [null, null],
        u = {
      type: "LineString",
      coordinates: r
    };

    function n(t, n) {
      return r[0] = t, r[1] = n, (0, e.default)(u);
    }
  }, {
    "./length.js": "rgN9"
  }],
  "bl00": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = d;

    var r = e(require("./polygonContains.js")),
        n = e(require("./distance.js")),
        t = require("./math.js");

    function e(r) {
      return r && r.__esModule ? r : {
        default: r
      };
    }

    var o = {
      Feature: function Feature(r, n) {
        return i(r.geometry, n);
      },
      FeatureCollection: function FeatureCollection(r, n) {
        for (var t = r.features, e = -1, o = t.length; ++e < o;) {
          if (i(t[e].geometry, n)) return !0;
        }

        return !1;
      }
    },
        u = {
      Sphere: function Sphere() {
        return !0;
      },
      Point: function Point(r, n) {
        return f(r.coordinates, n);
      },
      MultiPoint: function MultiPoint(r, n) {
        for (var t = r.coordinates, e = -1, o = t.length; ++e < o;) {
          if (f(t[e], n)) return !0;
        }

        return !1;
      },
      LineString: function LineString(r, n) {
        return a(r.coordinates, n);
      },
      MultiLineString: function MultiLineString(r, n) {
        for (var t = r.coordinates, e = -1, o = t.length; ++e < o;) {
          if (a(t[e], n)) return !0;
        }

        return !1;
      },
      Polygon: function Polygon(r, n) {
        return c(r.coordinates, n);
      },
      MultiPolygon: function MultiPolygon(r, n) {
        for (var t = r.coordinates, e = -1, o = t.length; ++e < o;) {
          if (c(t[e], n)) return !0;
        }

        return !1;
      },
      GeometryCollection: function GeometryCollection(r, n) {
        for (var t = r.geometries, e = -1, o = t.length; ++e < o;) {
          if (i(t[e], n)) return !0;
        }

        return !1;
      }
    };

    function i(r, n) {
      return !(!r || !u.hasOwnProperty(r.type)) && u[r.type](r, n);
    }

    function f(r, t) {
      return 0 === (0, n.default)(r, t);
    }

    function a(r, e) {
      for (var o, u, i, f = 0, a = r.length; f < a; f++) {
        if (0 === (u = (0, n.default)(r[f], e))) return !0;
        if (f > 0 && (i = (0, n.default)(r[f], r[f - 1])) > 0 && o <= i && u <= i && (o + u - i) * (1 - Math.pow((o - u) / i, 2)) < t.epsilon2 * i) return !0;
        o = u;
      }

      return !1;
    }

    function c(n, t) {
      return !!(0, r.default)(n.map(l), s(t));
    }

    function l(r) {
      return (r = r.map(s)).pop(), r;
    }

    function s(r) {
      return [r[0] * t.radians, r[1] * t.radians];
    }

    function d(r, n) {
      return (r && o.hasOwnProperty(r.type) ? o[r.type] : i)(r, n);
    }
  }, {
    "./polygonContains.js": "Cmis",
    "./distance.js": "IoFW",
    "./math.js": "sEgP"
  }],
  "fWgv": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i, exports.graticule10 = o;

    var n = require("d3-array"),
        e = require("./math.js");

    function t(t, r, i) {
      var o = (0, n.range)(t, r - e.epsilon, i).concat(r);
      return function (n) {
        return o.map(function (e) {
          return [n, e];
        });
      };
    }

    function r(t, r, i) {
      var o = (0, n.range)(t, r - e.epsilon, i).concat(r);
      return function (n) {
        return o.map(function (e) {
          return [e, n];
        });
      };
    }

    function i() {
      var i,
          o,
          u,
          c,
          a,
          s,
          l,
          p,
          f,
          g,
          M,
          x,
          h = 10,
          m = h,
          d = 90,
          j = 360,
          v = 2.5;

      function y() {
        return {
          type: "MultiLineString",
          coordinates: b()
        };
      }

      function b() {
        return (0, n.range)((0, e.ceil)(c / d) * d, u, d).map(M).concat((0, n.range)((0, e.ceil)(p / j) * j, l, j).map(x)).concat((0, n.range)((0, e.ceil)(o / h) * h, i, h).filter(function (n) {
          return (0, e.abs)(n % d) > e.epsilon;
        }).map(f)).concat((0, n.range)((0, e.ceil)(s / m) * m, a, m).filter(function (n) {
          return (0, e.abs)(n % j) > e.epsilon;
        }).map(g));
      }

      return y.lines = function () {
        return b().map(function (n) {
          return {
            type: "LineString",
            coordinates: n
          };
        });
      }, y.outline = function () {
        return {
          type: "Polygon",
          coordinates: [M(c).concat(x(l).slice(1), M(u).reverse().slice(1), x(p).reverse().slice(1))]
        };
      }, y.extent = function (n) {
        return arguments.length ? y.extentMajor(n).extentMinor(n) : y.extentMinor();
      }, y.extentMajor = function (n) {
        return arguments.length ? (c = +n[0][0], u = +n[1][0], p = +n[0][1], l = +n[1][1], c > u && (n = c, c = u, u = n), p > l && (n = p, p = l, l = n), y.precision(v)) : [[c, p], [u, l]];
      }, y.extentMinor = function (n) {
        return arguments.length ? (o = +n[0][0], i = +n[1][0], s = +n[0][1], a = +n[1][1], o > i && (n = o, o = i, i = n), s > a && (n = s, s = a, a = n), y.precision(v)) : [[o, s], [i, a]];
      }, y.step = function (n) {
        return arguments.length ? y.stepMajor(n).stepMinor(n) : y.stepMinor();
      }, y.stepMajor = function (n) {
        return arguments.length ? (d = +n[0], j = +n[1], y) : [d, j];
      }, y.stepMinor = function (n) {
        return arguments.length ? (h = +n[0], m = +n[1], y) : [h, m];
      }, y.precision = function (n) {
        return arguments.length ? (v = +n, f = t(s, a, 90), g = r(o, i, v), M = t(p, l, 90), x = r(c, u, v), y) : v;
      }, y.extentMajor([[-180, -90 + e.epsilon], [180, 90 - e.epsilon]]).extentMinor([[-180, -80 - e.epsilon], [180, 80 + e.epsilon]]);
    }

    function o() {
      return i()();
    }
  }, {
    "d3-array": "cBuZ",
    "./math.js": "sEgP"
  }],
  "PyvU": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = s;

    var e = require("./math.js");

    function s(s, r) {
      var n = s[0] * e.radians,
          a = s[1] * e.radians,
          i = r[0] * e.radians,
          t = r[1] * e.radians,
          d = (0, e.cos)(a),
          o = (0, e.sin)(a),
          u = (0, e.cos)(t),
          c = (0, e.sin)(t),
          v = d * (0, e.cos)(n),
          f = d * (0, e.sin)(n),
          g = u * (0, e.cos)(i),
          h = u * (0, e.sin)(i),
          l = 2 * (0, e.asin)((0, e.sqrt)((0, e.haversin)(t - a) + d * u * (0, e.haversin)(i - n))),
          p = (0, e.sin)(l),
          q = l ? function (s) {
        var r = (0, e.sin)(s *= l) / p,
            n = (0, e.sin)(l - s) / p,
            a = n * v + r * g,
            i = n * f + r * h,
            t = n * o + r * c;
        return [(0, e.atan2)(i, a) * e.degrees, (0, e.atan2)(t, (0, e.sqrt)(a * a + i * i)) * e.degrees];
      } : function () {
        return [n * e.degrees, a * e.degrees];
      };
      return q.distance = l, q;
    }
  }, {
    "./math.js": "sEgP"
  }],
  "tBtz": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = r(require("../adder.js")),
        t = require("../math.js"),
        n = r(require("../noop.js"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u,
        o,
        i,
        a,
        d = (0, e.default)(),
        l = (0, e.default)(),
        f = {
      point: n.default,
      lineStart: n.default,
      lineEnd: n.default,
      polygonStart: function polygonStart() {
        f.lineStart = s, f.lineEnd = v;
      },
      polygonEnd: function polygonEnd() {
        f.lineStart = f.lineEnd = f.point = n.default, d.add((0, t.abs)(l)), l.reset();
      },
      result: function result() {
        var e = d / 2;
        return d.reset(), e;
      }
    };

    function s() {
      f.point = p;
    }

    function p(e, t) {
      f.point = c, u = i = e, o = a = t;
    }

    function c(e, t) {
      l.add(a * e - i * t), i = e, a = t;
    }

    function v() {
      c(u, o);
    }

    var j = f;
    exports.default = j;
  }, {
    "../adder.js": "GlqK",
    "../math.js": "sEgP",
    "../noop.js": "BhKh"
  }],
  "Mzp9": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = t(require("../noop.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = 1 / 0,
        u = r,
        n = -r,
        o = n,
        l = {
      point: a,
      lineStart: e.default,
      lineEnd: e.default,
      polygonStart: e.default,
      polygonEnd: e.default,
      result: function result() {
        var e = [[r, u], [n, o]];
        return n = o = -(u = r = 1 / 0), e;
      }
    };

    function a(e, t) {
      e < r && (r = e), e > n && (n = e), t < u && (u = t), t > o && (o = t);
    }

    var d = l;
    exports.default = d;
  }, {
    "../noop.js": "BhKh"
  }],
  "HLbf": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var n,
        t,
        i,
        o,
        e = require("../math.js"),
        r = 0,
        u = 0,
        a = 0,
        f = 0,
        c = 0,
        l = 0,
        p = 0,
        s = 0,
        d = 0,
        v = {
      point: E,
      lineStart: N,
      lineEnd: x,
      polygonStart: function polygonStart() {
        v.lineStart = y, v.lineEnd = g;
      },
      polygonEnd: function polygonEnd() {
        v.point = E, v.lineStart = N, v.lineEnd = x;
      },
      result: function result() {
        var n = d ? [p / d, s / d] : l ? [f / l, c / l] : a ? [r / a, u / a] : [NaN, NaN];
        return r = u = a = f = c = l = p = s = d = 0, n;
      }
    };

    function E(n, t) {
      r += n, u += t, ++a;
    }

    function N() {
      v.point = S;
    }

    function S(n, t) {
      v.point = q, E(i = n, o = t);
    }

    function q(n, t) {
      var r = n - i,
          u = t - o,
          a = (0, e.sqrt)(r * r + u * u);
      f += a * (i + n) / 2, c += a * (o + t) / 2, l += a, E(i = n, o = t);
    }

    function x() {
      v.point = E;
    }

    function y() {
      v.point = j;
    }

    function g() {
      _(n, t);
    }

    function j(e, r) {
      v.point = _, E(n = i = e, t = o = r);
    }

    function _(n, t) {
      var r = n - i,
          u = t - o,
          a = (0, e.sqrt)(r * r + u * u);
      f += a * (i + n) / 2, c += a * (o + t) / 2, l += a, p += (a = o * n - i * t) * (i + n), s += a * (o + t), d += 3 * a, E(i = n, o = t);
    }

    var b = v;
    exports.default = b;
  }, {
    "../math.js": "sEgP"
  }],
  "ndK6": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n;

    var t = require("../math.js"),
        i = e(require("../noop.js"));

    function e(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function n(t) {
      this._context = t;
    }

    n.prototype = {
      _radius: 4.5,
      pointRadius: function pointRadius(t) {
        return this._radius = t, this;
      },
      polygonStart: function polygonStart() {
        this._line = 0;
      },
      polygonEnd: function polygonEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._point = 0;
      },
      lineEnd: function lineEnd() {
        0 === this._line && this._context.closePath(), this._point = NaN;
      },
      point: function point(i, e) {
        switch (this._point) {
          case 0:
            this._context.moveTo(i, e), this._point = 1;
            break;

          case 1:
            this._context.lineTo(i, e);

            break;

          default:
            this._context.moveTo(i + this._radius, e), this._context.arc(i, e, this._radius, 0, t.tau);
        }
      },
      result: i.default
    };
  }, {
    "../math.js": "sEgP",
    "../noop.js": "BhKh"
  }],
  "CqmG": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var t = r(require("../adder.js")),
        e = require("../math.js"),
        n = r(require("../noop.js"));

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var o,
        u,
        i,
        a,
        d,
        l = (0, t.default)(),
        f = {
      point: n.default,
      lineStart: function lineStart() {
        f.point = s;
      },
      lineEnd: function lineEnd() {
        o && p(u, i), f.point = n.default;
      },
      polygonStart: function polygonStart() {
        o = !0;
      },
      polygonEnd: function polygonEnd() {
        o = null;
      },
      result: function result() {
        var t = +l;
        return l.reset(), t;
      }
    };

    function s(t, e) {
      f.point = p, u = a = t, i = d = e;
    }

    function p(t, n) {
      a -= t, d -= n, l.add((0, e.sqrt)(a * a + d * d)), a = t, d = n;
    }

    var c = f;
    exports.default = c;
  }, {
    "../adder.js": "GlqK",
    "../math.js": "sEgP",
    "../noop.js": "BhKh"
  }],
  "mB17": [function (require, module, exports) {
    "use strict";

    function t() {
      this._string = [];
    }

    function i(t) {
      return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z";
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t, t.prototype = {
      _radius: 4.5,
      _circle: i(4.5),
      pointRadius: function pointRadius(t) {
        return (t = +t) !== this._radius && (this._radius = t, this._circle = null), this;
      },
      polygonStart: function polygonStart() {
        this._line = 0;
      },
      polygonEnd: function polygonEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._point = 0;
      },
      lineEnd: function lineEnd() {
        0 === this._line && this._string.push("Z"), this._point = NaN;
      },
      point: function point(t, n) {
        switch (this._point) {
          case 0:
            this._string.push("M", t, ",", n), this._point = 1;
            break;

          case 1:
            this._string.push("L", t, ",", n);

            break;

          default:
            null == this._circle && (this._circle = i(this._radius)), this._string.push("M", t, ",", n, this._circle);
        }
      },
      result: function result() {
        if (this._string.length) {
          var t = this._string.join("");

          return this._string = [], t;
        }

        return null;
      }
    };
  }, {}],
  "A7VF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = a;
    var e = f(require("../identity.js")),
        t = f(require("../stream.js")),
        u = f(require("./area.js")),
        n = f(require("./bounds.js")),
        r = f(require("./centroid.js")),
        i = f(require("./context.js")),
        l = f(require("./measure.js")),
        o = f(require("./string.js"));

    function f(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function a(f, a) {
      var s,
          d,
          c = 4.5;

      function p(e) {
        return e && ("function" == typeof c && d.pointRadius(+c.apply(this, arguments)), (0, t.default)(e, s(d))), d.result();
      }

      return p.area = function (e) {
        return (0, t.default)(e, s(u.default)), u.default.result();
      }, p.measure = function (e) {
        return (0, t.default)(e, s(l.default)), l.default.result();
      }, p.bounds = function (e) {
        return (0, t.default)(e, s(n.default)), n.default.result();
      }, p.centroid = function (e) {
        return (0, t.default)(e, s(r.default)), r.default.result();
      }, p.projection = function (t) {
        return arguments.length ? (s = null == t ? (f = null, e.default) : (f = t).stream, p) : f;
      }, p.context = function (e) {
        return arguments.length ? (d = null == e ? (a = null, new o.default()) : new i.default(a = e), "function" != typeof c && d.pointRadius(c), p) : a;
      }, p.pointRadius = function (e) {
        return arguments.length ? (c = "function" == typeof e ? e : (d.pointRadius(+e), +e), p) : c;
      }, p.projection(f).context(a);
    }
  }, {
    "../identity.js": "nPOL",
    "../stream.js": "XBFK",
    "./area.js": "tBtz",
    "./bounds.js": "Mzp9",
    "./centroid.js": "HLbf",
    "./context.js": "ndK6",
    "./measure.js": "CqmG",
    "./string.js": "mB17"
  }],
  "ubFV": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return {
        stream: n(t)
      };
    }

    function n(t) {
      return function (n) {
        var e = new r();

        for (var o in t) {
          e[o] = t[o];
        }

        return e.stream = n, e;
      };
    }

    function r() {}

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t, exports.transformer = n, r.prototype = {
      constructor: r,
      point: function point(t, n) {
        this.stream.point(t, n);
      },
      sphere: function sphere() {
        this.stream.sphere();
      },
      lineStart: function lineStart() {
        this.stream.lineStart();
      },
      lineEnd: function lineEnd() {
        this.stream.lineEnd();
      },
      polygonStart: function polygonStart() {
        this.stream.polygonStart();
      },
      polygonEnd: function polygonEnd() {
        this.stream.polygonEnd();
      }
    };
  }, {}],
  "Ty3O": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.fitExtent = u, exports.fitSize = a, exports.fitWidth = l, exports.fitHeight = i;
    var t = n(require("../stream.js")),
        e = n(require("../path/bounds.js"));

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function r(n, r, u) {
      var a = n.clipExtent && n.clipExtent();
      return n.scale(150).translate([0, 0]), null != a && n.clipExtent(null), (0, t.default)(u, n.stream(e.default)), r(e.default.result()), null != a && n.clipExtent(a), n;
    }

    function u(t, e, n) {
      return r(t, function (n) {
        var r = e[1][0] - e[0][0],
            u = e[1][1] - e[0][1],
            a = Math.min(r / (n[1][0] - n[0][0]), u / (n[1][1] - n[0][1])),
            l = +e[0][0] + (r - a * (n[1][0] + n[0][0])) / 2,
            i = +e[0][1] + (u - a * (n[1][1] + n[0][1])) / 2;
        t.scale(150 * a).translate([l, i]);
      }, n);
    }

    function a(t, e, n) {
      return u(t, [[0, 0], e], n);
    }

    function l(t, e, n) {
      return r(t, function (n) {
        var r = +e,
            u = r / (n[1][0] - n[0][0]),
            a = (r - u * (n[1][0] + n[0][0])) / 2,
            l = -u * n[0][1];
        t.scale(150 * u).translate([a, l]);
      }, n);
    }

    function i(t, e, n) {
      return r(t, function (n) {
        var r = +e,
            u = r / (n[1][1] - n[0][1]),
            a = -u * n[0][0],
            l = (r - u * (n[1][1] + n[0][1])) / 2;
        t.scale(150 * u).translate([a, l]);
      }, n);
    }
  }, {
    "../stream.js": "XBFK",
    "../path/bounds.js": "Mzp9"
  }],
  "vIaz": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;

    var n = require("../cartesian.js"),
        t = require("../math.js"),
        i = require("../transform.js"),
        o = 16,
        r = (0, t.cos)(30 * t.radians);

    function e(n, t) {
      return +t ? u(n, t) : a(n);
    }

    function a(n) {
      return (0, i.transformer)({
        point: function point(t, i) {
          t = n(t, i), this.stream.point(t[0], t[1]);
        }
      });
    }

    function u(i, e) {
      function a(n, o, u, s, c, f, p, l, d, v, E, S, b, y) {
        var g = p - n,
            j = l - o,
            m = g * g + j * j;

        if (m > 4 * e && b--) {
          var q = s + v,
              h = c + E,
              x = f + S,
              N = (0, t.sqrt)(q * q + h * h + x * x),
              _ = (0, t.asin)(x /= N),
              M = (0, t.abs)((0, t.abs)(x) - 1) < t.epsilon || (0, t.abs)(u - d) < t.epsilon ? (u + d) / 2 : (0, t.atan2)(h, q),
              O = i(M, _),
              P = O[0],
              k = O[1],
              w = P - n,
              z = k - o,
              A = j * w - g * z;

          (A * A / m > e || (0, t.abs)((g * w + j * z) / m - .5) > .3 || s * v + c * E + f * S < r) && (a(n, o, u, s, c, f, P, k, M, q /= N, h /= N, x, b, y), y.point(P, k), a(P, k, M, q, h, x, p, l, d, v, E, S, b, y));
        }
      }

      return function (t) {
        var r,
            e,
            u,
            s,
            c,
            f,
            p,
            l,
            d,
            v,
            E,
            S,
            b = {
          point: y,
          lineStart: g,
          lineEnd: m,
          polygonStart: function polygonStart() {
            t.polygonStart(), b.lineStart = q;
          },
          polygonEnd: function polygonEnd() {
            t.polygonEnd(), b.lineStart = g;
          }
        };

        function y(n, o) {
          n = i(n, o), t.point(n[0], n[1]);
        }

        function g() {
          l = NaN, b.point = j, t.lineStart();
        }

        function j(r, e) {
          var u = (0, n.cartesian)([r, e]),
              s = i(r, e);
          a(l, d, p, v, E, S, l = s[0], d = s[1], p = r, v = u[0], E = u[1], S = u[2], o, t), t.point(l, d);
        }

        function m() {
          b.point = y, t.lineEnd();
        }

        function q() {
          g(), b.point = h, b.lineEnd = x;
        }

        function h(n, t) {
          j(r = n, t), e = l, u = d, s = v, c = E, f = S, b.point = j;
        }

        function x() {
          a(l, d, p, v, E, S, e, u, r, s, c, f, o, t), b.lineEnd = m, m();
        }

        return b;
      };
    }
  }, {
    "../cartesian.js": "rFMq",
    "../math.js": "sEgP",
    "../transform.js": "ubFV"
  }],
  "t1yD": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = h, exports.projectionMutator = v;

    var n = s(require("../clip/antimeridian.js")),
        e = s(require("../clip/circle.js")),
        t = s(require("../clip/rectangle.js")),
        r = s(require("../compose.js")),
        i = s(require("../identity.js")),
        u = require("../math.js"),
        a = require("../rotation.js"),
        l = require("../transform.js"),
        o = require("./fit.js"),
        f = s(require("./resample.js"));

    function s(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    var c = (0, l.transformer)({
      point: function point(n, e) {
        this.stream.point(n * u.radians, e * u.radians);
      }
    });

    function d(n) {
      return (0, l.transformer)({
        point: function point(e, t) {
          var r = n(e, t);
          return this.stream.point(r[0], r[1]);
        }
      });
    }

    function g(n, e, t) {
      function r(r, i) {
        return [e + n * r, t - n * i];
      }

      return r.invert = function (r, i) {
        return [(r - e) / n, (t - i) / n];
      }, r;
    }

    function p(n, e, t, r) {
      var i = (0, u.cos)(r),
          a = (0, u.sin)(r),
          l = i * n,
          o = a * n,
          f = i / n,
          s = a / n,
          c = (a * t - i * e) / n,
          d = (a * e + i * t) / n;

      function g(n, r) {
        return [l * n - o * r + e, t - o * n - l * r];
      }

      return g.invert = function (n, e) {
        return [f * n - s * e + c, d - s * n - f * e];
      }, g;
    }

    function h(n) {
      return v(function () {
        return n;
      })();
    }

    function v(l) {
      var s,
          h,
          v,
          j,
          q,
          m,
          x,
          y,
          _,
          E,
          M = 150,
          z = 480,
          H = 250,
          S = 0,
          W = 0,
          b = 0,
          A = 0,
          O = 0,
          P = 0,
          R = null,
          k = n.default,
          w = null,
          B = i.default,
          C = .5;

      function D(n) {
        return y(n[0] * u.radians, n[1] * u.radians);
      }

      function F(n) {
        return (n = y.invert(n[0], n[1])) && [n[0] * u.degrees, n[1] * u.degrees];
      }

      function G() {
        var n = p(M, 0, 0, P).apply(null, s(S, W)),
            e = (P ? p : g)(M, z - n[0], H - n[1], P);
        return h = (0, a.rotateRadians)(b, A, O), x = (0, r.default)(s, e), y = (0, r.default)(h, x), m = (0, f.default)(x, C), I();
      }

      function I() {
        return _ = E = null, D;
      }

      return D.stream = function (n) {
        return _ && E === n ? _ : _ = c(d(h)(k(m(B(E = n)))));
      }, D.preclip = function (n) {
        return arguments.length ? (k = n, R = void 0, I()) : k;
      }, D.postclip = function (n) {
        return arguments.length ? (B = n, w = v = j = q = null, I()) : B;
      }, D.clipAngle = function (t) {
        return arguments.length ? (k = +t ? (0, e.default)(R = t * u.radians) : (R = null, n.default), I()) : R * u.degrees;
      }, D.clipExtent = function (n) {
        return arguments.length ? (B = null == n ? (w = v = j = q = null, i.default) : (0, t.default)(w = +n[0][0], v = +n[0][1], j = +n[1][0], q = +n[1][1]), I()) : null == w ? null : [[w, v], [j, q]];
      }, D.scale = function (n) {
        return arguments.length ? (M = +n, G()) : M;
      }, D.translate = function (n) {
        return arguments.length ? (z = +n[0], H = +n[1], G()) : [z, H];
      }, D.center = function (n) {
        return arguments.length ? (S = n[0] % 360 * u.radians, W = n[1] % 360 * u.radians, G()) : [S * u.degrees, W * u.degrees];
      }, D.rotate = function (n) {
        return arguments.length ? (b = n[0] % 360 * u.radians, A = n[1] % 360 * u.radians, O = n.length > 2 ? n[2] % 360 * u.radians : 0, G()) : [b * u.degrees, A * u.degrees, O * u.degrees];
      }, D.angle = function (n) {
        return arguments.length ? (P = n % 360 * u.radians, G()) : P * u.degrees;
      }, D.precision = function (n) {
        return arguments.length ? (m = (0, f.default)(x, C = n * n), I()) : (0, u.sqrt)(C);
      }, D.fitExtent = function (n, e) {
        return (0, o.fitExtent)(D, n, e);
      }, D.fitSize = function (n, e) {
        return (0, o.fitSize)(D, n, e);
      }, D.fitWidth = function (n, e) {
        return (0, o.fitWidth)(D, n, e);
      }, D.fitHeight = function (n, e) {
        return (0, o.fitHeight)(D, n, e);
      }, function () {
        return s = l.apply(this, arguments), D.invert = s.invert && F, G();
      };
    }
  }, {
    "../clip/antimeridian.js": "CWnN",
    "../clip/circle.js": "uulM",
    "../clip/rectangle.js": "E6SH",
    "../compose.js": "hCea",
    "../identity.js": "nPOL",
    "../math.js": "sEgP",
    "../rotation.js": "KwdP",
    "../transform.js": "ubFV",
    "./fit.js": "Ty3O",
    "./resample.js": "vIaz"
  }],
  "FzMl": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.conicProjection = t;

    var e = require("../math.js"),
        r = require("./index.js");

    function t(t) {
      var n = 0,
          i = e.pi / 3,
          o = (0, r.projectionMutator)(t),
          s = o(n, i);
      return s.parallels = function (r) {
        return arguments.length ? o(n = r[0] * e.radians, i = r[1] * e.radians) : [n * e.degrees, i * e.degrees];
      }, s;
    }
  }, {
    "../math.js": "sEgP",
    "./index.js": "t1yD"
  }],
  "xg50": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.cylindricalEqualAreaRaw = e;

    var r = require("../math.js");

    function e(e) {
      var n = (0, r.cos)(e);

      function t(e, t) {
        return [e * n, (0, r.sin)(t) / n];
      }

      return t.invert = function (e, t) {
        return [e / n, (0, r.asin)(t * n)];
      }, t;
    }
  }, {
    "../math.js": "sEgP"
  }],
  "uvEu": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.conicEqualAreaRaw = i, exports.default = a;

    var r = require("../math.js"),
        e = require("./conic.js"),
        n = require("./cylindricalEqualArea.js");

    function i(e, i) {
      var a = (0, r.sin)(e),
          t = (a + (0, r.sin)(i)) / 2;
      if ((0, r.abs)(t) < r.epsilon) return (0, n.cylindricalEqualAreaRaw)(e);
      var s = 1 + a * (2 * t - a),
          c = (0, r.sqrt)(s) / t;

      function u(e, n) {
        var i = (0, r.sqrt)(s - 2 * t * (0, r.sin)(n)) / t;
        return [i * (0, r.sin)(e *= t), c - i * (0, r.cos)(e)];
      }

      return u.invert = function (e, n) {
        var i = c - n;
        return [(0, r.atan2)(e, (0, r.abs)(i)) / t * (0, r.sign)(i), (0, r.asin)((s - (e * e + i * i) * t * t) / (2 * t))];
      }, u;
    }

    function a() {
      return (0, e.conicProjection)(i).scale(155.424).center([0, 33.6442]);
    }
  }, {
    "../math.js": "sEgP",
    "./conic.js": "FzMl",
    "./cylindricalEqualArea.js": "xg50"
  }],
  "HUYT": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("./conicEqualArea.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r() {
      return (0, e.default)().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7]);
    }
  }, {
    "./conicEqualArea.js": "uvEu"
  }],
  "WyCU": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o;

    var t = require("../math.js"),
        n = i(require("./albers.js")),
        e = i(require("./conicEqualArea.js")),
        r = require("./fit.js");

    function i(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function a(t) {
      var n = t.length;
      return {
        point: function point(e, r) {
          for (var i = -1; ++i < n;) {
            t[i].point(e, r);
          }
        },
        sphere: function sphere() {
          for (var e = -1; ++e < n;) {
            t[e].sphere();
          }
        },
        lineStart: function lineStart() {
          for (var e = -1; ++e < n;) {
            t[e].lineStart();
          }
        },
        lineEnd: function lineEnd() {
          for (var e = -1; ++e < n;) {
            t[e].lineEnd();
          }
        },
        polygonStart: function polygonStart() {
          for (var e = -1; ++e < n;) {
            t[e].polygonStart();
          }
        },
        polygonEnd: function polygonEnd() {
          for (var e = -1; ++e < n;) {
            t[e].polygonEnd();
          }
        }
      };
    }

    function o() {
      var i,
          o,
          l,
          u,
          s,
          c,
          f = (0, n.default)(),
          p = (0, e.default)().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
          v = (0, e.default)().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
          d = {
        point: function point(t, n) {
          c = [t, n];
        }
      };

      function h(t) {
        var n = t[0],
            e = t[1];
        return c = null, l.point(n, e), c || (u.point(n, e), c) || (s.point(n, e), c);
      }

      function g() {
        return i = o = null, h;
      }

      return h.invert = function (t) {
        var n = f.scale(),
            e = f.translate(),
            r = (t[0] - e[0]) / n,
            i = (t[1] - e[1]) / n;
        return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? p : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? v : f).invert(t);
      }, h.stream = function (t) {
        return i && o === t ? i : i = a([f.stream(o = t), p.stream(t), v.stream(t)]);
      }, h.precision = function (t) {
        return arguments.length ? (f.precision(t), p.precision(t), v.precision(t), g()) : f.precision();
      }, h.scale = function (t) {
        return arguments.length ? (f.scale(t), p.scale(.35 * t), v.scale(t), h.translate(f.translate())) : f.scale();
      }, h.translate = function (n) {
        if (!arguments.length) return f.translate();
        var e = f.scale(),
            r = +n[0],
            i = +n[1];
        return l = f.translate(n).clipExtent([[r - .455 * e, i - .238 * e], [r + .455 * e, i + .238 * e]]).stream(d), u = p.translate([r - .307 * e, i + .201 * e]).clipExtent([[r - .425 * e + t.epsilon, i + .12 * e + t.epsilon], [r - .214 * e - t.epsilon, i + .234 * e - t.epsilon]]).stream(d), s = v.translate([r - .205 * e, i + .212 * e]).clipExtent([[r - .214 * e + t.epsilon, i + .166 * e + t.epsilon], [r - .115 * e - t.epsilon, i + .234 * e - t.epsilon]]).stream(d), g();
      }, h.fitExtent = function (t, n) {
        return (0, r.fitExtent)(h, t, n);
      }, h.fitSize = function (t, n) {
        return (0, r.fitSize)(h, t, n);
      }, h.fitWidth = function (t, n) {
        return (0, r.fitWidth)(h, t, n);
      }, h.fitHeight = function (t, n) {
        return (0, r.fitHeight)(h, t, n);
      }, h.scale(1070);
    }
  }, {
    "../math.js": "sEgP",
    "./albers.js": "HUYT",
    "./conicEqualArea.js": "uvEu",
    "./fit.js": "Ty3O"
  }],
  "FJmT": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.azimuthalRaw = t, exports.azimuthalInvert = n;

    var r = require("../math.js");

    function t(t) {
      return function (n, e) {
        var s = (0, r.cos)(n),
            u = (0, r.cos)(e),
            a = t(s * u);
        return [a * u * (0, r.sin)(n), a * (0, r.sin)(e)];
      };
    }

    function n(t) {
      return function (n, e) {
        var s = (0, r.sqrt)(n * n + e * e),
            u = t(s),
            a = (0, r.sin)(u),
            i = (0, r.cos)(u);
        return [(0, r.atan2)(n * a, s * i), (0, r.asin)(s && e * a / s)];
      };
    }
  }, {
    "../math.js": "sEgP"
  }],
  "c9jZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i, exports.azimuthalEqualAreaRaw = void 0;

    var e = require("../math.js"),
        r = require("./azimuthal.js"),
        t = a(require("./index.js"));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = (0, r.azimuthalRaw)(function (r) {
      return (0, e.sqrt)(2 / (1 + r));
    });

    function i() {
      return (0, t.default)(u).scale(124.75).clipAngle(179.999);
    }

    exports.azimuthalEqualAreaRaw = u, u.invert = (0, r.azimuthalInvert)(function (r) {
      return 2 * (0, e.asin)(r / 2);
    });
  }, {
    "../math.js": "sEgP",
    "./azimuthal.js": "FJmT",
    "./index.js": "t1yD"
  }],
  "DPfU": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i, exports.azimuthalEquidistantRaw = void 0;

    var e = require("../math.js"),
        t = require("./azimuthal.js"),
        r = u(require("./index.js"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var a = (0, t.azimuthalRaw)(function (t) {
      return (t = (0, e.acos)(t)) && t / (0, e.sin)(t);
    });

    function i() {
      return (0, r.default)(a).scale(79.4188).clipAngle(179.999);
    }

    exports.azimuthalEquidistantRaw = a, a.invert = (0, t.azimuthalInvert)(function (e) {
      return e;
    });
  }, {
    "../math.js": "sEgP",
    "./azimuthal.js": "FJmT",
    "./index.js": "t1yD"
  }],
  "Yvwi": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.mercatorRaw = u, exports.default = a, exports.mercatorProjection = l;

    var t = require("../math.js"),
        e = r(require("../rotation.js")),
        n = r(require("./index.js"));

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function u(e, n) {
      return [e, (0, t.log)((0, t.tan)((t.halfPi + n) / 2))];
    }

    function a() {
      return l(u).scale(961 / t.tau);
    }

    function l(r) {
      var a,
          l,
          i,
          o = (0, n.default)(r),
          c = o.center,
          f = o.scale,
          s = o.translate,
          h = o.clipExtent,
          x = null;

      function p() {
        var n = t.pi * f(),
            c = o((0, e.default)(o.rotate()).invert([0, 0]));
        return h(null == x ? [[c[0] - n, c[1] - n], [c[0] + n, c[1] + n]] : r === u ? [[Math.max(c[0] - n, x), a], [Math.min(c[0] + n, l), i]] : [[x, Math.max(c[1] - n, a)], [l, Math.min(c[1] + n, i)]]);
      }

      return o.scale = function (t) {
        return arguments.length ? (f(t), p()) : f();
      }, o.translate = function (t) {
        return arguments.length ? (s(t), p()) : s();
      }, o.center = function (t) {
        return arguments.length ? (c(t), p()) : c();
      }, o.clipExtent = function (t) {
        return arguments.length ? (null == t ? x = a = l = i = null : (x = +t[0][0], a = +t[0][1], l = +t[1][0], i = +t[1][1]), p()) : null == x ? null : [[x, a], [l, i]];
      }, p();
    }

    u.invert = function (e, n) {
      return [e, 2 * (0, t.atan)((0, t.exp)(n)) - t.halfPi];
    };
  }, {
    "../math.js": "sEgP",
    "../rotation.js": "KwdP",
    "./index.js": "t1yD"
  }],
  "QZHg": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.conicConformalRaw = i, exports.default = t;

    var r = require("../math.js"),
        e = require("./conic.js"),
        n = require("./mercator.js");

    function o(e) {
      return (0, r.tan)((r.halfPi + e) / 2);
    }

    function i(e, i) {
      var t = (0, r.cos)(e),
          a = e === i ? (0, r.sin)(e) : (0, r.log)(t / (0, r.cos)(i)) / (0, r.log)(o(i) / o(e)),
          s = t * (0, r.pow)(o(e), a) / a;
      if (!a) return n.mercatorRaw;

      function c(e, n) {
        s > 0 ? n < -r.halfPi + r.epsilon && (n = -r.halfPi + r.epsilon) : n > r.halfPi - r.epsilon && (n = r.halfPi - r.epsilon);
        var i = s / (0, r.pow)(o(n), a);
        return [i * (0, r.sin)(a * e), s - i * (0, r.cos)(a * e)];
      }

      return c.invert = function (e, n) {
        var o = s - n,
            i = (0, r.sign)(a) * (0, r.sqrt)(e * e + o * o);
        return [(0, r.atan2)(e, (0, r.abs)(o)) / a * (0, r.sign)(o), 2 * (0, r.atan)((0, r.pow)(s / i, 1 / a)) - r.halfPi];
      }, c;
    }

    function t() {
      return (0, e.conicProjection)(i).scale(109.5).parallels([30, 30]);
    }
  }, {
    "../math.js": "sEgP",
    "./conic.js": "FzMl",
    "./mercator.js": "Yvwi"
  }],
  "xN4O": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.equirectangularRaw = t, exports.default = u;
    var e = r(require("./index.js"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(e, r) {
      return [e, r];
    }

    function u() {
      return (0, e.default)(t).scale(152.63);
    }

    t.invert = t;
  }, {
    "./index.js": "t1yD"
  }],
  "wKng": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.conicEquidistantRaw = t, exports.default = i;

    var r = require("../math.js"),
        e = require("./conic.js"),
        n = require("./equirectangular.js");

    function t(e, t) {
      var i = (0, r.cos)(e),
          s = e === t ? (0, r.sin)(e) : (i - (0, r.cos)(t)) / (t - e),
          u = i / s + e;
      if ((0, r.abs)(s) < r.epsilon) return n.equirectangularRaw;

      function c(e, n) {
        var t = u - n,
            i = s * e;
        return [t * (0, r.sin)(i), u - t * (0, r.cos)(i)];
      }

      return c.invert = function (e, n) {
        var t = u - n;
        return [(0, r.atan2)(e, (0, r.abs)(t)) / s * (0, r.sign)(t), u - (0, r.sign)(s) * (0, r.sqrt)(e * e + t * t)];
      }, c;
    }

    function i() {
      return (0, e.conicProjection)(t).scale(131.154).center([0, 13.9389]);
    }
  }, {
    "../math.js": "sEgP",
    "./conic.js": "FzMl",
    "./equirectangular.js": "xN4O"
  }],
  "svXP": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.equalEarthRaw = c, exports.default = f;

    var e = t(require("./index.js")),
        r = require("../math.js");

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var n = 1.340264,
        s = -.081106,
        u = 893e-6,
        a = .003796,
        i = (0, r.sqrt)(3) / 2,
        o = 12;

    function c(e, t) {
      var o = (0, r.asin)(i * (0, r.sin)(t)),
          c = o * o,
          f = c * c * c;
      return [e * (0, r.cos)(o) / (i * (n + 3 * s * c + f * (7 * u + 9 * a * c))), o * (n + s * c + f * (u + a * c))];
    }

    function f() {
      return (0, e.default)(c).scale(177.158);
    }

    c.invert = function (e, t) {
      for (var c, f = t, l = f * f, d = l * l * l, v = 0; v < o && (d = (l = (f -= c = (f * (n + s * l + d * (u + a * l)) - t) / (n + 3 * s * l + d * (7 * u + 9 * a * l))) * f) * l * l, !((0, r.abs)(c) < r.epsilon2)); ++v) {
        ;
      }

      return [i * e * (n + 3 * s * l + d * (7 * u + 9 * a * l)) / (0, r.cos)(f), (0, r.asin)((0, r.sin)(f) / i)];
    };
  }, {
    "./index.js": "t1yD",
    "../math.js": "sEgP"
  }],
  "bmsS": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.gnomonicRaw = u, exports.default = i;

    var e = require("../math.js"),
        r = require("./azimuthal.js"),
        t = n(require("./index.js"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(r, t) {
      var n = (0, e.cos)(t),
          u = (0, e.cos)(r) * n;
      return [n * (0, e.sin)(r) / u, (0, e.sin)(t) / u];
    }

    function i() {
      return (0, t.default)(u).scale(144.049).clipAngle(60);
    }

    u.invert = (0, r.azimuthalInvert)(e.atan);
  }, {
    "../math.js": "sEgP",
    "./azimuthal.js": "FJmT",
    "./index.js": "t1yD"
  }],
  "LapZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var t = u(require("../clip/rectangle.js")),
        n = u(require("../identity.js")),
        e = require("../transform.js"),
        r = require("./fit.js");

    function u(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function i(t, r, u, i) {
      return 1 === t && 1 === r && 0 === u && 0 === i ? n.default : (0, e.transformer)({
        point: function point(n, e) {
          this.stream.point(n * t + u, e * r + i);
        }
      });
    }

    function l() {
      var e,
          u,
          l,
          f,
          o,
          c,
          a = 1,
          s = 0,
          d = 0,
          h = 1,
          g = 1,
          p = n.default,
          j = null,
          x = n.default;

      function m() {
        return f = o = null, c;
      }

      return c = {
        stream: function stream(t) {
          return f && o === t ? f : f = p(x(o = t));
        },
        postclip: function postclip(t) {
          return arguments.length ? (x = t, j = e = u = l = null, m()) : x;
        },
        clipExtent: function clipExtent(r) {
          return arguments.length ? (x = null == r ? (j = e = u = l = null, n.default) : (0, t.default)(j = +r[0][0], e = +r[0][1], u = +r[1][0], l = +r[1][1]), m()) : null == j ? null : [[j, e], [u, l]];
        },
        scale: function scale(t) {
          return arguments.length ? (p = i((a = +t) * h, a * g, s, d), m()) : a;
        },
        translate: function translate(t) {
          return arguments.length ? (p = i(a * h, a * g, s = +t[0], d = +t[1]), m()) : [s, d];
        },
        reflectX: function reflectX(t) {
          return arguments.length ? (p = i(a * (h = t ? -1 : 1), a * g, s, d), m()) : h < 0;
        },
        reflectY: function reflectY(t) {
          return arguments.length ? (p = i(a * h, a * (g = t ? -1 : 1), s, d), m()) : g < 0;
        },
        fitExtent: function fitExtent(t, n) {
          return (0, r.fitExtent)(c, t, n);
        },
        fitSize: function fitSize(t, n) {
          return (0, r.fitSize)(c, t, n);
        },
        fitWidth: function fitWidth(t, n) {
          return (0, r.fitWidth)(c, t, n);
        },
        fitHeight: function fitHeight(t, n) {
          return (0, r.fitHeight)(c, t, n);
        }
      };
    }
  }, {
    "../clip/rectangle.js": "E6SH",
    "../identity.js": "nPOL",
    "../transform.js": "ubFV",
    "./fit.js": "Ty3O"
  }],
  "yWpl": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.naturalEarth1Raw = u, exports.default = n;

    var e = t(require("./index.js")),
        r = require("../math.js");

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(e, r) {
      var t = r * r,
          u = t * t;
      return [e * (.8707 - .131979 * t + u * (u * (.003971 * t - .001529 * u) - .013791)), r * (1.007226 + t * (.015085 + u * (.028874 * t - .044475 - .005916 * u)))];
    }

    function n() {
      return (0, e.default)(u).scale(175.295);
    }

    u.invert = function (e, t) {
      var u,
          n = t,
          a = 25;

      do {
        var i = n * n,
            o = i * i;
        n -= u = (n * (1.007226 + i * (.015085 + o * (.028874 * i - .044475 - .005916 * o))) - t) / (1.007226 + i * (.045255 + o * (.259866 * i - .311325 - .005916 * 11 * o)));
      } while ((0, r.abs)(u) > r.epsilon && --a > 0);

      return [e / (.8707 + (i = n * n) * (i * (i * i * i * (.003971 - .001529 * i) - .013791) - .131979)), n];
    };
  }, {
    "./index.js": "t1yD",
    "../math.js": "sEgP"
  }],
  "H7pW": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.orthographicRaw = n, exports.default = u;

    var e = require("../math.js"),
        r = require("./azimuthal.js"),
        t = i(require("./index.js"));

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n(r, t) {
      return [(0, e.cos)(t) * (0, e.sin)(r), (0, e.sin)(t)];
    }

    function u() {
      return (0, t.default)(n).scale(249.5).clipAngle(90 + e.epsilon);
    }

    n.invert = (0, r.azimuthalInvert)(e.asin);
  }, {
    "../math.js": "sEgP",
    "./azimuthal.js": "FJmT",
    "./index.js": "t1yD"
  }],
  "bNxf": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.stereographicRaw = u, exports.default = i;

    var e = require("../math.js"),
        r = require("./azimuthal.js"),
        t = n(require("./index.js"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(r, t) {
      var n = (0, e.cos)(t),
          u = 1 + (0, e.cos)(r) * n;
      return [n * (0, e.sin)(r) / u, (0, e.sin)(t) / u];
    }

    function i() {
      return (0, t.default)(u).scale(250).clipAngle(142);
    }

    u.invert = (0, r.azimuthalInvert)(function (r) {
      return 2 * (0, e.atan)(r);
    });
  }, {
    "../math.js": "sEgP",
    "./azimuthal.js": "FJmT",
    "./index.js": "t1yD"
  }],
  "BGbj": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.transverseMercatorRaw = t, exports.default = n;

    var e = require("../math.js"),
        r = require("./mercator.js");

    function t(r, t) {
      return [(0, e.log)((0, e.tan)((e.halfPi + t) / 2)), -r];
    }

    function n() {
      var e = (0, r.mercatorProjection)(t),
          n = e.center,
          a = e.rotate;
      return e.center = function (e) {
        return arguments.length ? n([-e[1], e[0]]) : [(e = n())[1], -e[0]];
      }, e.rotate = function (e) {
        return arguments.length ? a([e[0], e[1], e.length > 2 ? e[2] + 90 : 90]) : [(e = a())[0], e[1], e[2] - 90];
      }, a([0, 0, 90]).scale(159.155);
    }

    t.invert = function (r, t) {
      return [-t, 2 * (0, e.atan)((0, e.exp)(r)) - e.halfPi];
    };
  }, {
    "../math.js": "sEgP",
    "./mercator.js": "Yvwi"
  }],
  "LMxt": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "geoArea", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "geoBounds", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "geoCentroid", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "geoCircle", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "geoClipAntimeridian", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "geoClipCircle", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "geoClipExtent", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), Object.defineProperty(exports, "geoClipRectangle", {
      enumerable: !0,
      get: function get() {
        return a.default;
      }
    }), Object.defineProperty(exports, "geoContains", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(exports, "geoDistance", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "geoGraticule", {
      enumerable: !0,
      get: function get() {
        return l.default;
      }
    }), Object.defineProperty(exports, "geoGraticule10", {
      enumerable: !0,
      get: function get() {
        return l.graticule10;
      }
    }), Object.defineProperty(exports, "geoInterpolate", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(exports, "geoLength", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    }), Object.defineProperty(exports, "geoPath", {
      enumerable: !0,
      get: function get() {
        return g.default;
      }
    }), Object.defineProperty(exports, "geoAlbers", {
      enumerable: !0,
      get: function get() {
        return d.default;
      }
    }), Object.defineProperty(exports, "geoAlbersUsa", {
      enumerable: !0,
      get: function get() {
        return b.default;
      }
    }), Object.defineProperty(exports, "geoAzimuthalEqualArea", {
      enumerable: !0,
      get: function get() {
        return j.default;
      }
    }), Object.defineProperty(exports, "geoAzimuthalEqualAreaRaw", {
      enumerable: !0,
      get: function get() {
        return j.azimuthalEqualAreaRaw;
      }
    }), Object.defineProperty(exports, "geoAzimuthalEquidistant", {
      enumerable: !0,
      get: function get() {
        return m.default;
      }
    }), Object.defineProperty(exports, "geoAzimuthalEquidistantRaw", {
      enumerable: !0,
      get: function get() {
        return m.azimuthalEquidistantRaw;
      }
    }), Object.defineProperty(exports, "geoConicConformal", {
      enumerable: !0,
      get: function get() {
        return y.default;
      }
    }), Object.defineProperty(exports, "geoConicConformalRaw", {
      enumerable: !0,
      get: function get() {
        return y.conicConformalRaw;
      }
    }), Object.defineProperty(exports, "geoConicEqualArea", {
      enumerable: !0,
      get: function get() {
        return O.default;
      }
    }), Object.defineProperty(exports, "geoConicEqualAreaRaw", {
      enumerable: !0,
      get: function get() {
        return O.conicEqualAreaRaw;
      }
    }), Object.defineProperty(exports, "geoConicEquidistant", {
      enumerable: !0,
      get: function get() {
        return q.default;
      }
    }), Object.defineProperty(exports, "geoConicEquidistantRaw", {
      enumerable: !0,
      get: function get() {
        return q.conicEquidistantRaw;
      }
    }), Object.defineProperty(exports, "geoEqualEarth", {
      enumerable: !0,
      get: function get() {
        return P.default;
      }
    }), Object.defineProperty(exports, "geoEqualEarthRaw", {
      enumerable: !0,
      get: function get() {
        return P.equalEarthRaw;
      }
    }), Object.defineProperty(exports, "geoEquirectangular", {
      enumerable: !0,
      get: function get() {
        return x.default;
      }
    }), Object.defineProperty(exports, "geoEquirectangularRaw", {
      enumerable: !0,
      get: function get() {
        return x.equirectangularRaw;
      }
    }), Object.defineProperty(exports, "geoGnomonic", {
      enumerable: !0,
      get: function get() {
        return h.default;
      }
    }), Object.defineProperty(exports, "geoGnomonicRaw", {
      enumerable: !0,
      get: function get() {
        return h.gnomonicRaw;
      }
    }), Object.defineProperty(exports, "geoIdentity", {
      enumerable: !0,
      get: function get() {
        return w.default;
      }
    }), Object.defineProperty(exports, "geoProjection", {
      enumerable: !0,
      get: function get() {
        return E.default;
      }
    }), Object.defineProperty(exports, "geoProjectionMutator", {
      enumerable: !0,
      get: function get() {
        return E.projectionMutator;
      }
    }), Object.defineProperty(exports, "geoMercator", {
      enumerable: !0,
      get: function get() {
        return R.default;
      }
    }), Object.defineProperty(exports, "geoMercatorRaw", {
      enumerable: !0,
      get: function get() {
        return R.mercatorRaw;
      }
    }), Object.defineProperty(exports, "geoNaturalEarth1", {
      enumerable: !0,
      get: function get() {
        return C.default;
      }
    }), Object.defineProperty(exports, "geoNaturalEarth1Raw", {
      enumerable: !0,
      get: function get() {
        return C.naturalEarth1Raw;
      }
    }), Object.defineProperty(exports, "geoOrthographic", {
      enumerable: !0,
      get: function get() {
        return A.default;
      }
    }), Object.defineProperty(exports, "geoOrthographicRaw", {
      enumerable: !0,
      get: function get() {
        return A.orthographicRaw;
      }
    }), Object.defineProperty(exports, "geoStereographic", {
      enumerable: !0,
      get: function get() {
        return M.default;
      }
    }), Object.defineProperty(exports, "geoStereographicRaw", {
      enumerable: !0,
      get: function get() {
        return M.stereographicRaw;
      }
    }), Object.defineProperty(exports, "geoTransverseMercator", {
      enumerable: !0,
      get: function get() {
        return v.default;
      }
    }), Object.defineProperty(exports, "geoTransverseMercatorRaw", {
      enumerable: !0,
      get: function get() {
        return v.transverseMercatorRaw;
      }
    }), Object.defineProperty(exports, "geoRotation", {
      enumerable: !0,
      get: function get() {
        return z.default;
      }
    }), Object.defineProperty(exports, "geoStream", {
      enumerable: !0,
      get: function get() {
        return _.default;
      }
    }), Object.defineProperty(exports, "geoTransform", {
      enumerable: !0,
      get: function get() {
        return G.default;
      }
    });

    var e = T(require("./area.js")),
        r = T(require("./bounds.js")),
        t = T(require("./centroid.js")),
        n = T(require("./circle.js")),
        o = T(require("./clip/antimeridian.js")),
        u = T(require("./clip/circle.js")),
        i = T(require("./clip/extent.js")),
        a = T(require("./clip/rectangle.js")),
        c = T(require("./contains.js")),
        f = T(require("./distance.js")),
        l = S(require("./graticule.js")),
        p = T(require("./interpolate.js")),
        s = T(require("./length.js")),
        g = T(require("./path/index.js")),
        d = T(require("./projection/albers.js")),
        b = T(require("./projection/albersUsa.js")),
        j = S(require("./projection/azimuthalEqualArea.js")),
        m = S(require("./projection/azimuthalEquidistant.js")),
        y = S(require("./projection/conicConformal.js")),
        O = S(require("./projection/conicEqualArea.js")),
        q = S(require("./projection/conicEquidistant.js")),
        P = S(require("./projection/equalEarth.js")),
        x = S(require("./projection/equirectangular.js")),
        h = S(require("./projection/gnomonic.js")),
        w = T(require("./projection/identity.js")),
        E = S(require("./projection/index.js")),
        R = S(require("./projection/mercator.js")),
        C = S(require("./projection/naturalEarth1.js")),
        A = S(require("./projection/orthographic.js")),
        M = S(require("./projection/stereographic.js")),
        v = S(require("./projection/transverseMercator.js")),
        z = T(require("./rotation.js")),
        _ = T(require("./stream.js")),
        G = T(require("./transform.js"));

    function D() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return D = function D() {
        return e;
      }, e;
    }

    function S(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var r = D();
      if (r && r.has(e)) return r.get(e);
      var t = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var o in e) {
        if (Object.prototype.hasOwnProperty.call(e, o)) {
          var u = n ? Object.getOwnPropertyDescriptor(e, o) : null;
          u && (u.get || u.set) ? Object.defineProperty(t, o, u) : t[o] = e[o];
        }
      }

      return t.default = e, r && r.set(e, t), t;
    }

    function T(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./area.js": "dpXv",
    "./bounds.js": "wXR4",
    "./centroid.js": "pQGp",
    "./circle.js": "dbGM",
    "./clip/antimeridian.js": "CWnN",
    "./clip/circle.js": "uulM",
    "./clip/extent.js": "Pttt",
    "./clip/rectangle.js": "E6SH",
    "./contains.js": "bl00",
    "./distance.js": "IoFW",
    "./graticule.js": "fWgv",
    "./interpolate.js": "PyvU",
    "./length.js": "rgN9",
    "./path/index.js": "A7VF",
    "./projection/albers.js": "HUYT",
    "./projection/albersUsa.js": "WyCU",
    "./projection/azimuthalEqualArea.js": "c9jZ",
    "./projection/azimuthalEquidistant.js": "DPfU",
    "./projection/conicConformal.js": "QZHg",
    "./projection/conicEqualArea.js": "uvEu",
    "./projection/conicEquidistant.js": "wKng",
    "./projection/equalEarth.js": "svXP",
    "./projection/equirectangular.js": "xN4O",
    "./projection/gnomonic.js": "bmsS",
    "./projection/identity.js": "LapZ",
    "./projection/index.js": "t1yD",
    "./projection/mercator.js": "Yvwi",
    "./projection/naturalEarth1.js": "yWpl",
    "./projection/orthographic.js": "H7pW",
    "./projection/stereographic.js": "bNxf",
    "./projection/transverseMercator.js": "BGbj",
    "./rotation.js": "KwdP",
    "./stream.js": "XBFK",
    "./transform.js": "ubFV"
  }],
  "brcY": [function (require, module, exports) {
    "use strict";

    function n(n, r) {
      return n.parent === r.parent ? 1 : 2;
    }

    function r(n) {
      return n.reduce(e, 0) / n.length;
    }

    function e(n, r) {
      return n + r.x;
    }

    function t(n) {
      return 1 + n.reduce(u, 0);
    }

    function u(n, r) {
      return Math.max(n, r.y);
    }

    function c(n) {
      for (var r; r = n.children;) {
        n = r[0];
      }

      return n;
    }

    function i(n) {
      for (var r; r = n.children;) {
        n = r[r.length - 1];
      }

      return n;
    }

    function o() {
      var e = n,
          u = 1,
          o = 1,
          f = !1;

      function a(n) {
        var a,
            l = 0;
        n.eachAfter(function (n) {
          var u = n.children;
          u ? (n.x = r(u), n.y = t(u)) : (n.x = a ? l += e(n, a) : 0, n.y = 0, a = n);
        });
        var x = c(n),
            h = i(n),
            y = x.x - e(x, h) / 2,
            d = h.x + e(h, x) / 2;
        return n.eachAfter(f ? function (r) {
          r.x = (r.x - n.x) * u, r.y = (n.y - r.y) * o;
        } : function (r) {
          r.x = (r.x - y) / (d - y) * u, r.y = (1 - (n.y ? r.y / n.y : 1)) * o;
        });
      }

      return a.separation = function (n) {
        return arguments.length ? (e = n, a) : e;
      }, a.size = function (n) {
        return arguments.length ? (f = !1, u = +n[0], o = +n[1], a) : f ? null : [u, o];
      }, a.nodeSize = function (n) {
        return arguments.length ? (f = !0, u = +n[0], o = +n[1], a) : f ? [u, o] : null;
      }, a;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o;
  }, {}],
  "jJjM": [function (require, module, exports) {
    "use strict";

    function e(e) {
      var t = 0,
          r = e.children,
          u = r && r.length;
      if (u) for (; --u >= 0;) {
        t += r[u].value;
      } else t = 1;
      e.value = t;
    }

    function t() {
      return this.eachAfter(e);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "YN75": [function (require, module, exports) {
    "use strict";

    function e(e) {
      var r,
          t,
          o,
          s,
          i = this,
          h = [i];

      do {
        for (r = h.reverse(), h = []; i = r.pop();) {
          if (e(i), t = i.children) for (o = 0, s = t.length; o < s; ++o) {
            h.push(t[o]);
          }
        }
      } while (h.length);

      return this;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "b04E": [function (require, module, exports) {
    "use strict";

    function e(e) {
      for (var t, r, o = this, s = [o]; o = s.pop();) {
        if (e(o), t = o.children) for (r = t.length - 1; r >= 0; --r) {
          s.push(t[r]);
        }
      }

      return this;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "oHKJ": [function (require, module, exports) {
    "use strict";

    function e(e) {
      for (var r, t, o, p = this, s = [p], u = []; p = s.pop();) {
        if (u.push(p), r = p.children) for (t = 0, o = r.length; t < o; ++t) {
          s.push(r[t]);
        }
      }

      for (; p = u.pop();) {
        e(p);
      }

      return this;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "Btd4": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return this.eachAfter(function (t) {
        for (var r = +e(t.data) || 0, u = t.children, a = u && u.length; --a >= 0;) {
          r += u[a].value;
        }

        t.value = r;
      });
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "q7tv": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return this.eachBefore(function (t) {
        t.children && t.children.sort(e);
      });
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "x0YQ": [function (require, module, exports) {
    "use strict";

    function r(r) {
      for (var t = this, o = e(t, r), p = [t]; t !== o;) {
        t = t.parent, p.push(t);
      }

      for (var n = p.length; r !== o;) {
        p.splice(n, 0, r), r = r.parent;
      }

      return p;
    }

    function e(r, e) {
      if (r === e) return r;
      var t = r.ancestors(),
          o = e.ancestors(),
          p = null;

      for (r = t.pop(), e = o.pop(); r === e;) {
        p = r, r = t.pop(), e = o.pop();
      }

      return p;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
  }, {}],
  "fOge": [function (require, module, exports) {
    "use strict";

    function e() {
      for (var e = this, t = [e]; e = e.parent;) {
        t.push(e);
      }

      return t;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "chHE": [function (require, module, exports) {
    "use strict";

    function e() {
      var e = [];
      return this.each(function (t) {
        e.push(t);
      }), e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "ResT": [function (require, module, exports) {
    "use strict";

    function e() {
      var e = [];
      return this.eachBefore(function (t) {
        t.children || e.push(t);
      }), e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "gBUX": [function (require, module, exports) {
    "use strict";

    function e() {
      var e = this,
          t = [];
      return e.each(function (r) {
        r !== e && t.push({
          source: r.parent,
          target: r
        });
      }), t;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "LCo2": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = c, exports.computeHeight = q, exports.Node = v;
    var e = h(require("./count.js")),
        t = h(require("./each.js")),
        r = h(require("./eachBefore.js")),
        a = h(require("./eachAfter.js")),
        u = h(require("./sum.js")),
        n = h(require("./sort.js")),
        s = h(require("./path.js")),
        o = h(require("./ancestors.js")),
        i = h(require("./descendants.js")),
        d = h(require("./leaves.js")),
        l = h(require("./links.js"));

    function h(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function c(e, t) {
      var r,
          a,
          u,
          n,
          s,
          o = new v(e),
          i = +e.value && (o.value = e.value),
          d = [o];

      for (null == t && (t = p); r = d.pop();) {
        if (i && (r.value = +r.data.value), (u = t(r.data)) && (s = u.length)) for (r.children = new Array(s), n = s - 1; n >= 0; --n) {
          d.push(a = r.children[n] = new v(u[n])), a.parent = r, a.depth = r.depth + 1;
        }
      }

      return o.eachBefore(q);
    }

    function f() {
      return c(this).eachBefore(j);
    }

    function p(e) {
      return e.children;
    }

    function j(e) {
      e.data = e.data.data;
    }

    function q(e) {
      var t = 0;

      do {
        e.height = t;
      } while ((e = e.parent) && e.height < ++t);
    }

    function v(e) {
      this.data = e, this.depth = this.height = 0, this.parent = null;
    }

    v.prototype = c.prototype = {
      constructor: v,
      count: e.default,
      each: t.default,
      eachAfter: a.default,
      eachBefore: r.default,
      sum: u.default,
      sort: n.default,
      path: s.default,
      ancestors: o.default,
      descendants: i.default,
      leaves: d.default,
      links: l.default,
      copy: f
    };
  }, {
    "./count.js": "jJjM",
    "./each.js": "YN75",
    "./eachBefore.js": "b04E",
    "./eachAfter.js": "oHKJ",
    "./sum.js": "Btd4",
    "./sort.js": "q7tv",
    "./path.js": "x0YQ",
    "./ancestors.js": "fOge",
    "./descendants.js": "chHE",
    "./leaves.js": "ResT",
    "./links.js": "gBUX"
  }],
  "Wl9w": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.shuffle = r, exports.slice = void 0;
    var e = Array.prototype.slice;

    function r(e) {
      for (var r, t, o = e.length; o;) {
        t = Math.random() * o-- | 0, r = e[o], e[o] = e[t], e[t] = r;
      }

      return e;
    }

    exports.slice = e;
  }, {}],
  "ZzhU": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var r = require("../array.js");

    function t(t) {
      for (var n, f, a = 0, i = (t = (0, r.shuffle)(r.slice.call(t))).length, c = []; a < i;) {
        n = t[a], f && u(f, n) ? ++a : (f = o(c = e(c, n)), a = 0);
      }

      return f;
    }

    function e(r, t) {
      var e, u;
      if (f(t, r)) return [t];

      for (e = 0; e < r.length; ++e) {
        if (n(t, r[e]) && f(i(r[e], t), r)) return [r[e], t];
      }

      for (e = 0; e < r.length - 1; ++e) {
        for (u = e + 1; u < r.length; ++u) {
          if (n(i(r[e], r[u]), t) && n(i(r[e], t), r[u]) && n(i(r[u], t), r[e]) && f(c(r[e], r[u], t), r)) return [r[e], r[u], t];
        }
      }

      throw new Error();
    }

    function n(r, t) {
      var e = r.r - t.r,
          n = t.x - r.x,
          u = t.y - r.y;
      return e < 0 || e * e < n * n + u * u;
    }

    function u(r, t) {
      var e = r.r - t.r + 1e-6,
          n = t.x - r.x,
          u = t.y - r.y;
      return e > 0 && e * e > n * n + u * u;
    }

    function f(r, t) {
      for (var e = 0; e < t.length; ++e) {
        if (!u(r, t[e])) return !1;
      }

      return !0;
    }

    function o(r) {
      switch (r.length) {
        case 1:
          return a(r[0]);

        case 2:
          return i(r[0], r[1]);

        case 3:
          return c(r[0], r[1], r[2]);
      }
    }

    function a(r) {
      return {
        x: r.x,
        y: r.y,
        r: r.r
      };
    }

    function i(r, t) {
      var e = r.x,
          n = r.y,
          u = r.r,
          f = t.x,
          o = t.y,
          a = t.r,
          i = f - e,
          c = o - n,
          x = a - u,
          y = Math.sqrt(i * i + c * c);
      return {
        x: (e + f + i / y * x) / 2,
        y: (n + o + c / y * x) / 2,
        r: (y + u + a) / 2
      };
    }

    function c(r, t, e) {
      var n = r.x,
          u = r.y,
          f = r.r,
          o = t.x,
          a = t.y,
          i = t.r,
          c = e.x,
          x = e.y,
          y = e.r,
          s = n - o,
          l = n - c,
          h = u - a,
          v = u - x,
          g = i - f,
          d = y - f,
          p = n * n + u * u - f * f,
          q = p - o * o - a * a + i * i,
          w = p - c * c - x * x + y * y,
          M = l * h - s * v,
          j = (h * w - v * q) / (2 * M) - n,
          _ = (v * g - h * d) / M,
          b = (l * q - s * w) / (2 * M) - u,
          E = (s * d - l * g) / M,
          O = _ * _ + E * E - 1,
          P = 2 * (f + j * _ + b * E),
          k = j * j + b * b - f * f,
          m = -(O ? (P + Math.sqrt(P * P - 4 * O * k)) / (2 * O) : k / P);

      return {
        x: n + j + _ * m,
        y: u + b + E * m,
        r: m
      };
    }
  }, {
    "../array.js": "Wl9w"
  }],
  "efS5": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.packEnclose = i, exports.default = o;
    var r = e(require("./enclose.js"));

    function e(r) {
      return r && r.__esModule ? r : {
        default: r
      };
    }

    function t(r, e, t) {
      var n,
          u,
          x,
          i,
          o = r.x - e.x,
          s = r.y - e.y,
          f = o * o + s * s;
      f ? (u = e.r + t.r, u *= u, i = r.r + t.r, u > (i *= i) ? (n = (f + i - u) / (2 * f), x = Math.sqrt(Math.max(0, i / f - n * n)), t.x = r.x - n * o - x * s, t.y = r.y - n * s + x * o) : (n = (f + u - i) / (2 * f), x = Math.sqrt(Math.max(0, u / f - n * n)), t.x = e.x + n * o - x * s, t.y = e.y + n * s + x * o)) : (t.x = e.x + t.r, t.y = e.y);
    }

    function n(r, e) {
      var t = r.r + e.r - 1e-6,
          n = e.x - r.x,
          u = e.y - r.y;
      return t > 0 && t * t > n * n + u * u;
    }

    function u(r) {
      var e = r._,
          t = r.next._,
          n = e.r + t.r,
          u = (e.x * t.r + t.x * e.r) / n,
          x = (e.y * t.r + t.y * e.r) / n;
      return u * u + x * x;
    }

    function x(r) {
      this._ = r, this.next = null, this.previous = null;
    }

    function i(e) {
      if (!(f = e.length)) return 0;

      var i, o, s, f, _, y, a, p, v, l, c;

      if ((i = e[0]).x = 0, i.y = 0, !(f > 1)) return i.r;
      if (o = e[1], i.x = -o.r, o.x = i.r, o.y = 0, !(f > 2)) return i.r + o.r;
      t(o, i, s = e[2]), i = new x(i), o = new x(o), s = new x(s), i.next = s.previous = o, o.next = i.previous = s, s.next = o.previous = i;

      r: for (a = 3; a < f; ++a) {
        t(i._, o._, s = e[a]), s = new x(s), p = o.next, v = i.previous, l = o._.r, c = i._.r;

        do {
          if (l <= c) {
            if (n(p._, s._)) {
              o = p, i.next = o, o.previous = i, --a;
              continue r;
            }

            l += p._.r, p = p.next;
          } else {
            if (n(v._, s._)) {
              (i = v).next = o, o.previous = i, --a;
              continue r;
            }

            c += v._.r, v = v.previous;
          }
        } while (p !== v.next);

        for (s.previous = i, s.next = o, i.next = o.previous = o = s, _ = u(i); (s = s.next) !== o;) {
          (y = u(s)) < _ && (i = s, _ = y);
        }

        o = i.next;
      }

      for (i = [o._], s = o; (s = s.next) !== o;) {
        i.push(s._);
      }

      for (s = (0, r.default)(i), a = 0; a < f; ++a) {
        (i = e[a]).x -= s.x, i.y -= s.y;
      }

      return s.r;
    }

    function o(r) {
      return i(r), r;
    }
  }, {
    "./enclose.js": "ZzhU"
  }],
  "OleL": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return null == e ? null : r(e);
    }

    function r(e) {
      if ("function" != typeof e) throw new Error();
      return e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.optional = e, exports.required = r;
  }, {}],
  "kYMf": [function (require, module, exports) {
    "use strict";

    function e() {
      return 0;
    }

    function t(e) {
      return function () {
        return e;
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.constantZero = e, exports.default = t;
  }, {}],
  "aVuj": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = f;

    var e = require("./siblings.js"),
        r = require("../accessors.js"),
        t = o(require("../constant.js"));

    function n() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return n = function n() {
        return e;
      }, e;
    }

    function o(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var r = n();
      if (r && r.has(e)) return r.get(e);
      var t = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var u in e) {
        if (Object.prototype.hasOwnProperty.call(e, u)) {
          var f = o ? Object.getOwnPropertyDescriptor(e, u) : null;
          f && (f.get || f.set) ? Object.defineProperty(t, u, f) : t[u] = e[u];
        }
      }

      return t.default = e, r && r.set(e, t), t;
    }

    function u(e) {
      return Math.sqrt(e.value);
    }

    function f() {
      var e = null,
          n = 1,
          o = 1,
          f = t.constantZero;

      function l(r) {
        return r.x = n / 2, r.y = o / 2, e ? r.eachBefore(i(e)).eachAfter(c(f, .5)).eachBefore(a(1)) : r.eachBefore(i(u)).eachAfter(c(t.constantZero, 1)).eachAfter(c(f, r.r / Math.min(n, o))).eachBefore(a(Math.min(n, o) / (2 * r.r))), r;
      }

      return l.radius = function (t) {
        return arguments.length ? (e = (0, r.optional)(t), l) : e;
      }, l.size = function (e) {
        return arguments.length ? (n = +e[0], o = +e[1], l) : [n, o];
      }, l.padding = function (e) {
        return arguments.length ? (f = "function" == typeof e ? e : (0, t.default)(+e), l) : f;
      }, l;
    }

    function i(e) {
      return function (r) {
        r.children || (r.r = Math.max(0, +e(r) || 0));
      };
    }

    function c(r, t) {
      return function (n) {
        if (o = n.children) {
          var o,
              u,
              f,
              i = o.length,
              c = r(n) * t || 0;
          if (c) for (u = 0; u < i; ++u) {
            o[u].r += c;
          }
          if (f = (0, e.packEnclose)(o), c) for (u = 0; u < i; ++u) {
            o[u].r -= c;
          }
          n.r = f + c;
        }
      };
    }

    function a(e) {
      return function (r) {
        var t = r.parent;
        r.r *= e, t && (r.x = t.x + e * r.x, r.y = t.y + e * r.y);
      };
    }
  }, {
    "./siblings.js": "efS5",
    "../accessors.js": "OleL",
    "../constant.js": "kYMf"
  }],
  "PETl": [function (require, module, exports) {
    "use strict";

    function t(t) {
      t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "L3aV": [function (require, module, exports) {
    "use strict";

    function e(e, t, l, r, u) {
      for (var a, o = e.children, n = -1, s = o.length, v = e.value && (r - t) / e.value; ++n < s;) {
        (a = o[n]).y0 = l, a.y1 = u, a.x0 = t, a.x1 = t += a.value * v;
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "hWBO": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n;
    var e = t(require("./treemap/round.js")),
        r = t(require("./treemap/dice.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n() {
      var t = 1,
          n = 1,
          u = 0,
          i = !1;

      function o(o) {
        var d = o.height + 1;
        return o.x0 = o.y0 = u, o.x1 = t, o.y1 = n / d, o.eachBefore(function (e, t) {
          return function (n) {
            n.children && (0, r.default)(n, n.x0, e * (n.depth + 1) / t, n.x1, e * (n.depth + 2) / t);
            var i = n.x0,
                o = n.y0,
                d = n.x1 - u,
                f = n.y1 - u;
            d < i && (i = d = (i + d) / 2), f < o && (o = f = (o + f) / 2), n.x0 = i, n.y0 = o, n.x1 = d, n.y1 = f;
          };
        }(n, d)), i && o.eachBefore(e.default), o;
      }

      return o.round = function (e) {
        return arguments.length ? (i = !!e, o) : i;
      }, o.size = function (e) {
        return arguments.length ? (t = +e[0], n = +e[1], o) : [t, n];
      }, o.padding = function (e) {
        return arguments.length ? (u = +e, o) : u;
      }, o;
    }
  }, {
    "./treemap/round.js": "PETl",
    "./treemap/dice.js": "L3aV"
  }],
  "bJDQ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = c;

    var r = require("./accessors.js"),
        e = require("./hierarchy/index.js"),
        n = "$",
        t = {
      depth: -1
    },
        o = {};

    function i(r) {
      return r.id;
    }

    function u(r) {
      return r.parentId;
    }

    function c() {
      var c = i,
          h = u;

      function f(r) {
        var i,
            u,
            f,
            l,
            d,
            a,
            s,
            p = r.length,
            w = new Array(p),
            g = {};

        for (u = 0; u < p; ++u) {
          i = r[u], d = w[u] = new e.Node(i), null != (a = c(i, u, r)) && (a += "") && (g[s = n + (d.id = a)] = s in g ? o : d);
        }

        for (u = 0; u < p; ++u) {
          if (d = w[u], null != (a = h(r[u], u, r)) && (a += "")) {
            if (!(l = g[n + a])) throw new Error("missing: " + a);
            if (l === o) throw new Error("ambiguous: " + a);
            l.children ? l.children.push(d) : l.children = [d], d.parent = l;
          } else {
            if (f) throw new Error("multiple roots");
            f = d;
          }
        }

        if (!f) throw new Error("no root");
        if (f.parent = t, f.eachBefore(function (r) {
          r.depth = r.parent.depth + 1, --p;
        }).eachBefore(e.computeHeight), f.parent = null, p > 0) throw new Error("cycle");
        return f;
      }

      return f.id = function (e) {
        return arguments.length ? (c = (0, r.required)(e), f) : c;
      }, f.parentId = function (e) {
        return arguments.length ? (h = (0, r.required)(e), f) : h;
      }, f;
    }
  }, {
    "./accessors.js": "OleL",
    "./hierarchy/index.js": "LCo2"
  }],
  "nrLh": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var n = require("./hierarchy/index.js");

    function e(n, e) {
      return n.parent === e.parent ? 1 : 2;
    }

    function t(n) {
      var e = n.children;
      return e ? e[0] : n.t;
    }

    function r(n) {
      var e = n.children;
      return e ? e[e.length - 1] : n.t;
    }

    function i(n, e, t) {
      var r = t / (e.i - n.i);
      e.c -= r, e.s += t, n.c += r, e.z += t, e.m += t;
    }

    function u(n) {
      for (var e, t = 0, r = 0, i = n.children, u = i.length; --u >= 0;) {
        (e = i[u]).z += t, e.m += t, t += e.s + (r += e.c);
      }
    }

    function c(n, e, t) {
      return n.a.parent === e.parent ? n.a : t;
    }

    function a(n, e) {
      this._ = n, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = e;
    }

    function h(n) {
      for (var e, t, r, i, u, c = new a(n, 0), h = [c]; e = h.pop();) {
        if (r = e._.children) for (e.children = new Array(u = r.length), i = u - 1; i >= 0; --i) {
          h.push(t = e.children[i] = new a(r[i], i)), t.parent = e;
        }
      }

      return (c.parent = new a(null, 0)).children = [c], c;
    }

    function l() {
      var n = e,
          a = 1,
          l = 1,
          o = null;

      function f(e) {
        var t = h(e);
        if (t.eachAfter(p), t.parent.m = -t.z, t.eachBefore(s), o) e.eachBefore(d);else {
          var r = e,
              i = e,
              u = e;
          e.eachBefore(function (n) {
            n.x < r.x && (r = n), n.x > i.x && (i = n), n.depth > u.depth && (u = n);
          });
          var c = r === i ? 1 : n(r, i) / 2,
              f = c - r.x,
              m = a / (i.x + c + f),
              z = l / (u.depth || 1);
          e.eachBefore(function (n) {
            n.x = (n.x + f) * m, n.y = n.depth * z;
          });
        }
        return e;
      }

      function p(e) {
        var a = e.children,
            h = e.parent.children,
            l = e.i ? h[e.i - 1] : null;

        if (a) {
          u(e);
          var o = (a[0].z + a[a.length - 1].z) / 2;
          l ? (e.z = l.z + n(e._, l._), e.m = e.z - o) : e.z = o;
        } else l && (e.z = l.z + n(e._, l._));

        e.parent.A = function (e, u, a) {
          if (u) {
            for (var h, l = e, o = e, f = u, p = l.parent.children[0], s = l.m, d = o.m, m = f.m, z = p.m; f = r(f), l = t(l), f && l;) {
              p = t(p), (o = r(o)).a = e, (h = f.z + m - l.z - s + n(f._, l._)) > 0 && (i(c(f, e, a), e, h), s += h, d += h), m += f.m, s += l.m, z += p.m, d += o.m;
            }

            f && !r(o) && (o.t = f, o.m += m - d), l && !t(p) && (p.t = l, p.m += s - z, a = e);
          }

          return a;
        }(e, l, e.parent.A || h[0]);
      }

      function s(n) {
        n._.x = n.z + n.parent.m, n.m += n.parent.m;
      }

      function d(n) {
        n.x *= a, n.y = n.depth * l;
      }

      return f.separation = function (e) {
        return arguments.length ? (n = e, f) : n;
      }, f.size = function (n) {
        return arguments.length ? (o = !1, a = +n[0], l = +n[1], f) : o ? null : [a, l];
      }, f.nodeSize = function (n) {
        return arguments.length ? (o = !0, a = +n[0], l = +n[1], f) : o ? [a, l] : null;
      }, f;
    }

    a.prototype = Object.create(n.Node.prototype);
  }, {
    "./hierarchy/index.js": "LCo2"
  }],
  "RVbL": [function (require, module, exports) {
    "use strict";

    function e(e, t, l, r, u) {
      for (var a, o = e.children, n = -1, s = o.length, v = e.value && (u - l) / e.value; ++n < s;) {
        (a = o[n]).x0 = t, a.x1 = r, a.y0 = l, a.y1 = l += a.value * v;
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "jyLZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.squarifyRatio = a, exports.default = exports.phi = void 0;
    var e = t(require("./dice.js")),
        r = t(require("./slice.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = (1 + Math.sqrt(5)) / 2;

    function a(t, u, a, i, o, l) {
      for (var n, s, d, f, c, h, p, v, x, M, q, _ = [], j = u.children, m = 0, b = 0, y = j.length, g = u.value; m < y;) {
        d = o - a, f = l - i;

        do {
          c = j[b++].value;
        } while (!c && b < y);

        for (h = p = c, q = c * c * (M = Math.max(f / d, d / f) / (g * t)), x = Math.max(p / q, q / h); b < y; ++b) {
          if (c += s = j[b].value, s < h && (h = s), s > p && (p = s), q = c * c * M, (v = Math.max(p / q, q / h)) > x) {
            c -= s;
            break;
          }

          x = v;
        }

        _.push(n = {
          value: c,
          dice: d < f,
          children: j.slice(m, b)
        }), n.dice ? (0, e.default)(n, a, i, o, g ? i += f * c / g : l) : (0, r.default)(n, a, i, g ? a += d * c / g : o, l), g -= c, m = b;
      }

      return _;
    }

    exports.phi = u;

    var i = function e(r) {
      function t(e, t, u, i, o) {
        a(r, e, t, u, i, o);
      }

      return t.ratio = function (r) {
        return e((r = +r) > 1 ? r : 1);
      }, t;
    }(u);

    exports.default = i;
  }, {
    "./dice.js": "L3aV",
    "./slice.js": "RVbL"
  }],
  "cC5L": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = f;

    var n = i(require("./round.js")),
        t = i(require("./squarify.js")),
        e = require("../accessors.js"),
        r = o(require("../constant.js"));

    function u() {
      if ("function" != typeof WeakMap) return null;
      var n = new WeakMap();
      return u = function u() {
        return n;
      }, n;
    }

    function o(n) {
      if (n && n.__esModule) return n;
      if (null === n || "object" != _typeof(n) && "function" != typeof n) return {
        default: n
      };
      var t = u();
      if (t && t.has(n)) return t.get(n);
      var e = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var o in n) {
        if (Object.prototype.hasOwnProperty.call(n, o)) {
          var i = r ? Object.getOwnPropertyDescriptor(n, o) : null;
          i && (i.get || i.set) ? Object.defineProperty(e, o, i) : e[o] = n[o];
        }
      }

      return e.default = n, t && t.set(n, e), e;
    }

    function i(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    function f() {
      var u = t.default,
          o = !1,
          i = 1,
          f = 1,
          d = [0],
          a = r.constantZero,
          c = r.constantZero,
          p = r.constantZero,
          l = r.constantZero,
          g = r.constantZero;

      function s(t) {
        return t.x0 = t.y0 = 0, t.x1 = i, t.y1 = f, t.eachBefore(y), d = [0], o && t.eachBefore(n.default), t;
      }

      function y(n) {
        var t = d[n.depth],
            e = n.x0 + t,
            r = n.y0 + t,
            o = n.x1 - t,
            i = n.y1 - t;
        o < e && (e = o = (e + o) / 2), i < r && (r = i = (r + i) / 2), n.x0 = e, n.y0 = r, n.x1 = o, n.y1 = i, n.children && (t = d[n.depth + 1] = a(n) / 2, e += g(n) - t, r += c(n) - t, (o -= p(n) - t) < e && (e = o = (e + o) / 2), (i -= l(n) - t) < r && (r = i = (r + i) / 2), u(n, e, r, o, i));
      }

      return s.round = function (n) {
        return arguments.length ? (o = !!n, s) : o;
      }, s.size = function (n) {
        return arguments.length ? (i = +n[0], f = +n[1], s) : [i, f];
      }, s.tile = function (n) {
        return arguments.length ? (u = (0, e.required)(n), s) : u;
      }, s.padding = function (n) {
        return arguments.length ? s.paddingInner(n).paddingOuter(n) : s.paddingInner();
      }, s.paddingInner = function (n) {
        return arguments.length ? (a = "function" == typeof n ? n : (0, r.default)(+n), s) : a;
      }, s.paddingOuter = function (n) {
        return arguments.length ? s.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n) : s.paddingTop();
      }, s.paddingTop = function (n) {
        return arguments.length ? (c = "function" == typeof n ? n : (0, r.default)(+n), s) : c;
      }, s.paddingRight = function (n) {
        return arguments.length ? (p = "function" == typeof n ? n : (0, r.default)(+n), s) : p;
      }, s.paddingBottom = function (n) {
        return arguments.length ? (l = "function" == typeof n ? n : (0, r.default)(+n), s) : l;
      }, s.paddingLeft = function (n) {
        return arguments.length ? (g = "function" == typeof n ? n : (0, r.default)(+n), s) : g;
      }, s;
    }
  }, {
    "./round.js": "PETl",
    "./squarify.js": "jyLZ",
    "../accessors.js": "OleL",
    "../constant.js": "kYMf"
  }],
  "cDuG": [function (require, module, exports) {
    "use strict";

    function e(e, r, a, t, v) {
      var n,
          o,
          u = e.children,
          f = u.length,
          i = new Array(f + 1);

      for (i[0] = o = n = 0; n < f; ++n) {
        i[n + 1] = o += u[n].value;
      }

      !function e(r, a, t, v, n, o, f) {
        if (r >= a - 1) {
          var l = u[r];
          return l.x0 = v, l.y0 = n, l.x1 = o, void (l.y1 = f);
        }

        var s = i[r],
            c = t / 2 + s,
            d = r + 1,
            x = a - 1;

        for (; d < x;) {
          var y = d + x >>> 1;
          i[y] < c ? d = y + 1 : x = y;
        }

        c - i[d - 1] < i[d] - c && r + 1 < d && --d;
        var p = i[d] - s,
            h = t - p;

        if (o - v > f - n) {
          var _ = (v * h + o * p) / t;

          e(r, d, p, v, n, _, f), e(d, a, h, _, n, o, f);
        } else {
          var b = (n * h + f * p) / t;
          e(r, d, p, v, n, o, b), e(d, a, h, v, b, o, f);
        }
      }(0, f, e.value, r, a, t, v);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "dACy": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = u(require("./dice.js")),
        t = u(require("./slice.js"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(u, r, d, s, i) {
      (1 & u.depth ? t.default : e.default)(u, r, d, s, i);
    }
  }, {
    "./dice.js": "L3aV",
    "./slice.js": "RVbL"
  }],
  "GrWc": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = t(require("./dice.js")),
        r = t(require("./slice.js")),
        u = require("./squarify.js");

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var a = function t(a) {
      function i(t, i, l, f, o) {
        if ((s = t._squarify) && s.ratio === a) for (var s, n, d, v, c, q = -1, _ = s.length, p = t.value; ++q < _;) {
          for (d = (n = s[q]).children, v = n.value = 0, c = d.length; v < c; ++v) {
            n.value += d[v].value;
          }

          n.dice ? (0, e.default)(n, i, l, f, l += (o - l) * n.value / p) : (0, r.default)(n, i, l, i += (f - i) * n.value / p, o), p -= n.value;
        } else t._squarify = s = (0, u.squarifyRatio)(a, t, i, l, f, o), s.ratio = a;
      }

      return i.ratio = function (e) {
        return t((e = +e) > 1 ? e : 1);
      }, i;
    }(u.phi);

    exports.default = a;
  }, {
    "./dice.js": "L3aV",
    "./slice.js": "RVbL",
    "./squarify.js": "jyLZ"
  }],
  "wNQE": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "cluster", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "hierarchy", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "pack", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "packSiblings", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "packEnclose", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "partition", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), Object.defineProperty(exports, "stratify", {
      enumerable: !0,
      get: function get() {
        return a.default;
      }
    }), Object.defineProperty(exports, "tree", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "treemap", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "treemapBinary", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(exports, "treemapDice", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(exports, "treemapSlice", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    }), Object.defineProperty(exports, "treemapSliceDice", {
      enumerable: !0,
      get: function get() {
        return l.default;
      }
    }), Object.defineProperty(exports, "treemapSquarify", {
      enumerable: !0,
      get: function get() {
        return d.default;
      }
    }), Object.defineProperty(exports, "treemapResquarify", {
      enumerable: !0,
      get: function get() {
        return b.default;
      }
    });
    var e = j(require("./cluster.js")),
        r = j(require("./hierarchy/index.js")),
        t = j(require("./pack/index.js")),
        n = j(require("./pack/siblings.js")),
        u = j(require("./pack/enclose.js")),
        i = j(require("./partition.js")),
        a = j(require("./stratify.js")),
        f = j(require("./tree.js")),
        o = j(require("./treemap/index.js")),
        p = j(require("./treemap/binary.js")),
        c = j(require("./treemap/dice.js")),
        s = j(require("./treemap/slice.js")),
        l = j(require("./treemap/sliceDice.js")),
        d = j(require("./treemap/squarify.js")),
        b = j(require("./treemap/resquarify.js"));

    function j(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./cluster.js": "brcY",
    "./hierarchy/index.js": "LCo2",
    "./pack/index.js": "aVuj",
    "./pack/siblings.js": "efS5",
    "./pack/enclose.js": "ZzhU",
    "./partition.js": "hWBO",
    "./stratify.js": "bJDQ",
    "./tree.js": "nrLh",
    "./treemap/index.js": "cC5L",
    "./treemap/binary.js": "cDuG",
    "./treemap/dice.js": "L3aV",
    "./treemap/slice.js": "RVbL",
    "./treemap/sliceDice.js": "dACy",
    "./treemap/squarify.js": "jyLZ",
    "./treemap/resquarify.js": "GrWc"
  }],
  "xGSp": [function (require, module, exports) {
    "use strict";

    function e(e) {
      for (var t, r = -1, o = e.length, u = e[o - 1], n = 0; ++r < o;) {
        t = u, u = e[r], n += t[1] * u[0] - t[0] * u[1];
      }

      return n / 2;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "ySB4": [function (require, module, exports) {
    "use strict";

    function e(e) {
      for (var t, r, o = -1, u = e.length, n = 0, s = 0, f = e[u - 1], l = 0; ++o < u;) {
        t = f, f = e[o], l += r = t[0] * f[1] - f[0] * t[1], n += (t[0] + f[0]) * r, s += (t[1] + f[1]) * r;
      }

      return [n / (l *= 3), s / l];
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "Q4Lv": [function (require, module, exports) {
    "use strict";

    function e(e, t, r) {
      return (t[0] - e[0]) * (r[1] - e[1]) - (t[1] - e[1]) * (r[0] - e[0]);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "tgjV": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;
    var r = e(require("./cross.js"));

    function e(r) {
      return r && r.__esModule ? r : {
        default: r
      };
    }

    function t(r, e) {
      return r[0] - e[0] || r[1] - e[1];
    }

    function n(e) {
      for (var t = e.length, n = [0, 1], u = 2, o = 2; o < t; ++o) {
        for (; u > 1 && (0, r.default)(e[n[u - 2]], e[n[u - 1]], e[o]) <= 0;) {
          --u;
        }

        n[u++] = o;
      }

      return n.slice(0, u);
    }

    function u(r) {
      if ((u = r.length) < 3) return null;
      var e,
          u,
          o = new Array(u),
          f = new Array(u);

      for (e = 0; e < u; ++e) {
        o[e] = [+r[e][0], +r[e][1], e];
      }

      for (o.sort(t), e = 0; e < u; ++e) {
        f[e] = [o[e][0], -o[e][1]];
      }

      var l = n(o),
          s = n(f),
          a = s[0] === l[0],
          i = s[s.length - 1] === l[l.length - 1],
          c = [];

      for (e = l.length - 1; e >= 0; --e) {
        c.push(r[o[l[e]][2]]);
      }

      for (e = +a; e < s.length - i; ++e) {
        c.push(r[o[s[e]][2]]);
      }

      return c;
    }
  }, {
    "./cross.js": "Q4Lv"
  }],
  "pcph": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      for (var r, o, u = e.length, n = e[u - 1], s = t[0], f = t[1], l = n[0], a = n[1], c = !1, d = 0; d < u; ++d) {
        r = (n = e[d])[0], (o = n[1]) > f != a > f && s < (l - r) * (f - o) / (a - o) + r && (c = !c), l = r, a = o;
      }

      return c;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "naEA": [function (require, module, exports) {
    "use strict";

    function e(e) {
      for (var t, r, o = -1, s = e.length, u = e[s - 1], n = u[0], a = u[1], f = 0; ++o < s;) {
        t = n, r = a, t -= n = (u = e[o])[0], r -= a = u[1], f += Math.sqrt(t * t + r * r);
      }

      return f;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "QnuL": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "polygonArea", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "polygonCentroid", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "polygonHull", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "polygonContains", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "polygonLength", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    });
    var e = u(require("./area.js")),
        r = u(require("./centroid.js")),
        t = u(require("./hull.js")),
        n = u(require("./contains.js")),
        o = u(require("./length.js"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./area.js": "xGSp",
    "./centroid.js": "ySB4",
    "./hull.js": "tgjV",
    "./contains.js": "pcph",
    "./length.js": "naEA"
  }],
  "uDia": [function (require, module, exports) {
    "use strict";

    function e() {
      return Math.random();
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "hmOZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = u(require("./defaultSource"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var t = function e(u) {
      function t(e, t) {
        return e = null == e ? 0 : +e, t = null == t ? 1 : +t, 1 === arguments.length ? (t = e, e = 0) : t -= e, function () {
          return u() * t + e;
        };
      }

      return t.source = e, t;
    }(e.default);

    exports.default = t;
  }, {
    "./defaultSource": "uDia"
  }],
  "pjsZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = u(require("./defaultSource"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = function e(u) {
      function r(e, r) {
        var t, l;
        return e = null == e ? 0 : +e, r = null == r ? 1 : +r, function () {
          var n;
          if (null != t) n = t, t = null;else do {
            t = 2 * u() - 1, n = 2 * u() - 1, l = t * t + n * n;
          } while (!l || l > 1);
          return e + r * n * Math.sqrt(-2 * Math.log(l) / l);
        };
      }

      return r.source = e, r;
    }(e.default);

    exports.default = r;
  }, {
    "./defaultSource": "uDia"
  }],
  "lZpB": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = t(require("./defaultSource")),
        r = t(require("./normal"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = function e(t) {
      function u() {
        var e = r.default.source(t).apply(this, arguments);
        return function () {
          return Math.exp(e());
        };
      }

      return u.source = e, u;
    }(e.default);

    exports.default = u;
  }, {
    "./defaultSource": "uDia",
    "./normal": "pjsZ"
  }],
  "DMHS": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = r(require("./defaultSource"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var t = function e(r) {
      function t(e) {
        return function () {
          for (var t = 0, u = 0; u < e; ++u) {
            t += r();
          }

          return t;
        };
      }

      return t.source = e, t;
    }(e.default);

    exports.default = t;
  }, {
    "./defaultSource": "uDia"
  }],
  "gL6I": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = u(require("./defaultSource")),
        r = u(require("./irwinHall"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var t = function e(u) {
      function t(e) {
        var t = r.default.source(u)(e);
        return function () {
          return t() / e;
        };
      }

      return t.source = e, t;
    }(e.default);

    exports.default = t;
  }, {
    "./defaultSource": "uDia",
    "./irwinHall": "DMHS"
  }],
  "gEmS": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = t(require("./defaultSource"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = function e(t) {
      function r(e) {
        return function () {
          return -Math.log(1 - t()) / e;
        };
      }

      return r.source = e, r;
    }(e.default);

    exports.default = r;
  }, {
    "./defaultSource": "uDia"
  }],
  "WQ4D": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "randomUniform", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "randomNormal", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "randomLogNormal", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "randomBates", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "randomIrwinHall", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "randomExponential", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    });
    var e = a(require("./uniform")),
        r = a(require("./normal")),
        t = a(require("./logNormal")),
        n = a(require("./bates")),
        o = a(require("./irwinHall")),
        u = a(require("./exponential"));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./uniform": "hmOZ",
    "./normal": "pjsZ",
    "./logNormal": "lZpB",
    "./bates": "gL6I",
    "./irwinHall": "DMHS",
    "./exponential": "gEmS"
  }],
  "aZlr": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      switch (arguments.length) {
        case 0:
          break;

        case 1:
          this.range(e);
          break;

        default:
          this.range(t).domain(e);
      }

      return this;
    }

    function t(e, t) {
      switch (arguments.length) {
        case 0:
          break;

        case 1:
          this.interpolator(e);
          break;

        default:
          this.interpolator(t).domain(e);
      }

      return this;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.initRange = e, exports.initInterpolator = t;
  }, {}],
  "lLkj": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.slice = exports.map = void 0;
    var e = Array.prototype,
        r = e.map;
    exports.map = r;
    var p = e.slice;
    exports.slice = p;
  }, {}],
  "ELIM": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i, exports.implicit = void 0;

    var e = require("d3-collection"),
        n = require("./array"),
        r = require("./init"),
        t = {
      name: "implicit"
    };

    function i() {
      var u = (0, e.map)(),
          o = [],
          l = [],
          c = t;

      function a(e) {
        var n = e + "",
            r = u.get(n);

        if (!r) {
          if (c !== t) return c;
          u.set(n, r = o.push(e));
        }

        return l[(r - 1) % l.length];
      }

      return a.domain = function (n) {
        if (!arguments.length) return o.slice();
        o = [], u = (0, e.map)();

        for (var r, t, i = -1, l = n.length; ++i < l;) {
          u.has(t = (r = n[i]) + "") || u.set(t, o.push(r));
        }

        return a;
      }, a.range = function (e) {
        return arguments.length ? (l = n.slice.call(e), a) : l.slice();
      }, a.unknown = function (e) {
        return arguments.length ? (c = e, a) : c;
      }, a.copy = function () {
        return i(o, l).unknown(c);
      }, r.initRange.apply(a, arguments), a;
    }

    exports.implicit = t;
  }, {
    "d3-collection": "qqV1",
    "./array": "lLkj",
    "./init": "aZlr"
  }],
  "rJZF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u, exports.point = a;

    var n = require("d3-array"),
        e = require("./init"),
        r = t(require("./ordinal"));

    function t(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    function u() {
      var t,
          i,
          a = (0, r.default)().unknown(void 0),
          d = a.domain,
          o = a.range,
          l = [0, 1],
          g = !1,
          c = 0,
          p = 0,
          f = .5;

      function h() {
        var e = d().length,
            r = l[1] < l[0],
            u = l[r - 0],
            a = l[1 - r];
        t = (a - u) / Math.max(1, e - c + 2 * p), g && (t = Math.floor(t)), u += (a - u - t * (e - c)) * f, i = t * (1 - c), g && (u = Math.round(u), i = Math.round(i));
        var h = (0, n.range)(e).map(function (n) {
          return u + t * n;
        });
        return o(r ? h.reverse() : h);
      }

      return delete a.unknown, a.domain = function (n) {
        return arguments.length ? (d(n), h()) : d();
      }, a.range = function (n) {
        return arguments.length ? (l = [+n[0], +n[1]], h()) : l.slice();
      }, a.rangeRound = function (n) {
        return l = [+n[0], +n[1]], g = !0, h();
      }, a.bandwidth = function () {
        return i;
      }, a.step = function () {
        return t;
      }, a.round = function (n) {
        return arguments.length ? (g = !!n, h()) : g;
      }, a.padding = function (n) {
        return arguments.length ? (c = Math.min(1, p = +n), h()) : c;
      }, a.paddingInner = function (n) {
        return arguments.length ? (c = Math.min(1, n), h()) : c;
      }, a.paddingOuter = function (n) {
        return arguments.length ? (p = +n, h()) : p;
      }, a.align = function (n) {
        return arguments.length ? (f = Math.max(0, Math.min(1, n)), h()) : f;
      }, a.copy = function () {
        return u(d(), l).round(g).paddingInner(c).paddingOuter(p).align(f);
      }, e.initRange.apply(h(), arguments);
    }

    function i(n) {
      var e = n.copy;
      return n.padding = n.paddingOuter, delete n.paddingInner, delete n.paddingOuter, n.copy = function () {
        return i(e());
      }, n;
    }

    function a() {
      return i(u.apply(null, arguments).paddingInner(1));
    }
  }, {
    "d3-array": "cBuZ",
    "./init": "aZlr",
    "./ordinal": "ELIM"
  }],
  "zRWI": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return +e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "ZpMB": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.identity = o, exports.copy = p, exports.transformer = m, exports.default = d;

    var n = require("d3-array"),
        r = require("d3-interpolate"),
        e = require("./array"),
        t = i(require("./constant")),
        u = i(require("./number"));

    function i(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    var a = [0, 1];

    function o(n) {
      return n;
    }

    function l(n, r) {
      return (r -= n = +n) ? function (e) {
        return (e - n) / r;
      } : (0, t.default)(isNaN(r) ? NaN : .5);
    }

    function c(n) {
      var r,
          e = n[0],
          t = n[n.length - 1];
      return e > t && (r = e, e = t, t = r), function (n) {
        return Math.max(e, Math.min(t, n));
      };
    }

    function f(n, r, e) {
      var t = n[0],
          u = n[1],
          i = r[0],
          a = r[1];
      return u < t ? (t = l(u, t), i = e(a, i)) : (t = l(t, u), i = e(i, a)), function (n) {
        return i(t(n));
      };
    }

    function s(r, e, t) {
      var u = Math.min(r.length, e.length) - 1,
          i = new Array(u),
          a = new Array(u),
          o = -1;

      for (r[u] < r[0] && (r = r.slice().reverse(), e = e.slice().reverse()); ++o < u;) {
        i[o] = l(r[o], r[o + 1]), a[o] = t(e[o], e[o + 1]);
      }

      return function (e) {
        var t = (0, n.bisect)(r, e, 1, u) - 1;
        return a[t](i[t](e));
      };
    }

    function p(n, r) {
      return r.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown());
    }

    function m() {
      var n,
          t,
          i,
          l,
          p,
          m,
          d = a,
          g = a,
          h = r.interpolate,
          v = o;

      function y() {
        return l = Math.min(d.length, g.length) > 2 ? s : f, p = m = null, N;
      }

      function N(r) {
        return isNaN(r = +r) ? i : (p || (p = l(d.map(n), g, h)))(n(v(r)));
      }

      return N.invert = function (e) {
        return v(t((m || (m = l(g, d.map(n), r.interpolateNumber)))(e)));
      }, N.domain = function (n) {
        return arguments.length ? (d = e.map.call(n, u.default), v === o || (v = c(d)), y()) : d.slice();
      }, N.range = function (n) {
        return arguments.length ? (g = e.slice.call(n), y()) : g.slice();
      }, N.rangeRound = function (n) {
        return g = e.slice.call(n), h = r.interpolateRound, y();
      }, N.clamp = function (n) {
        return arguments.length ? (v = n ? c(d) : o, N) : v !== o;
      }, N.interpolate = function (n) {
        return arguments.length ? (h = n, y()) : h;
      }, N.unknown = function (n) {
        return arguments.length ? (i = n, N) : i;
      }, function (r, e) {
        return n = r, t = e, y();
      };
    }

    function d(n, r) {
      return m()(n, r);
    }
  }, {
    "d3-array": "cBuZ",
    "d3-interpolate": "mkGF",
    "./array": "lLkj",
    "./constant": "OY6d",
    "./number": "zRWI"
  }],
  "m0SA": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = a;

    var e = require("d3-array"),
        r = require("d3-format");

    function a(a, i, s, t) {
      var c,
          n = (0, e.tickStep)(a, i, s);

      switch ((t = (0, r.formatSpecifier)(null == t ? ",f" : t)).type) {
        case "s":
          var o = Math.max(Math.abs(a), Math.abs(i));
          return null != t.precision || isNaN(c = (0, r.precisionPrefix)(n, o)) || (t.precision = c), (0, r.formatPrefix)(t, o);

        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != t.precision || isNaN(c = (0, r.precisionRound)(n, Math.max(Math.abs(a), Math.abs(i)))) || (t.precision = c - ("e" === t.type));
          break;

        case "f":
        case "%":
          null != t.precision || isNaN(c = (0, r.precisionFixed)(n)) || (t.precision = c - 2 * ("%" === t.type));
      }

      return (0, r.format)(t);
    }
  }, {
    "d3-array": "cBuZ",
    "d3-format": "gWev"
  }],
  "VMtl": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.linearish = a, exports.default = c;

    var t = require("d3-array"),
        e = o(require("./continuous")),
        r = require("./init"),
        n = i(require("./tickFormat"));

    function i(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function u() {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap();
      return u = function u() {
        return t;
      }, t;
    }

    function o(t) {
      if (t && t.__esModule) return t;
      if (null === t || "object" != _typeof(t) && "function" != typeof t) return {
        default: t
      };
      var e = u();
      if (e && e.has(t)) return e.get(t);
      var r = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var i in t) {
        if (Object.prototype.hasOwnProperty.call(t, i)) {
          var o = n ? Object.getOwnPropertyDescriptor(t, i) : null;
          o && (o.get || o.set) ? Object.defineProperty(r, i, o) : r[i] = t[i];
        }
      }

      return r.default = t, e && e.set(t, r), r;
    }

    function a(e) {
      var r = e.domain;
      return e.ticks = function (e) {
        var n = r();
        return (0, t.ticks)(n[0], n[n.length - 1], null == e ? 10 : e);
      }, e.tickFormat = function (t, e) {
        var i = r();
        return (0, n.default)(i[0], i[i.length - 1], null == t ? 10 : t, e);
      }, e.nice = function (n) {
        null == n && (n = 10);
        var i,
            u = r(),
            o = 0,
            a = u.length - 1,
            c = u[o],
            l = u[a];
        return l < c && (i = c, c = l, l = i, i = o, o = a, a = i), (i = (0, t.tickIncrement)(c, l, n)) > 0 ? (c = Math.floor(c / i) * i, l = Math.ceil(l / i) * i, i = (0, t.tickIncrement)(c, l, n)) : i < 0 && (c = Math.ceil(c * i) / i, l = Math.floor(l * i) / i, i = (0, t.tickIncrement)(c, l, n)), i > 0 ? (u[o] = Math.floor(c / i) * i, u[a] = Math.ceil(l / i) * i, r(u)) : i < 0 && (u[o] = Math.ceil(c * i) / i, u[a] = Math.floor(l * i) / i, r(u)), e;
      }, e;
    }

    function c() {
      var t = (0, e.default)(e.identity, e.identity);
      return t.copy = function () {
        return (0, e.copy)(t, c());
      }, r.initRange.apply(t, arguments), a(t);
    }
  }, {
    "d3-array": "cBuZ",
    "./continuous": "ZpMB",
    "./init": "aZlr",
    "./tickFormat": "m0SA"
  }],
  "eP89": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;

    var e = require("./array"),
        n = require("./linear"),
        r = t(require("./number"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(t) {
      var a;

      function i(e) {
        return isNaN(e = +e) ? a : e;
      }

      return i.invert = i, i.domain = i.range = function (n) {
        return arguments.length ? (t = e.map.call(n, r.default), i) : t.slice();
      }, i.unknown = function (e) {
        return arguments.length ? (a = e, i) : a;
      }, i.copy = function () {
        return u(t).unknown(a);
      }, t = arguments.length ? e.map.call(t, r.default) : [0, 1], (0, n.linearish)(i);
    }
  }, {
    "./array": "lLkj",
    "./linear": "VMtl",
    "./number": "zRWI"
  }],
  "gRJQ": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      var r,
          l = 0,
          o = (e = e.slice()).length - 1,
          s = e[l],
          u = e[o];
      return u < s && (r = l, l = o, o = r, r = s, s = u, u = r), e[l] = t.floor(s), e[o] = t.ceil(u), e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "X3YW": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.loggish = p, exports.default = d;

    var n = require("d3-array"),
        t = require("d3-format"),
        r = o(require("./nice")),
        e = require("./continuous"),
        u = require("./init");

    function o(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    function i(n) {
      return Math.log(n);
    }

    function a(n) {
      return Math.exp(n);
    }

    function f(n) {
      return -Math.log(-n);
    }

    function c(n) {
      return -Math.exp(-n);
    }

    function l(n) {
      return isFinite(n) ? +("1e" + n) : n < 0 ? 0 : n;
    }

    function h(n) {
      return 10 === n ? l : n === Math.E ? Math.exp : function (t) {
        return Math.pow(n, t);
      };
    }

    function s(n) {
      return n === Math.E ? Math.log : 10 === n && Math.log10 || 2 === n && Math.log2 || (n = Math.log(n), function (t) {
        return Math.log(t) / n;
      });
    }

    function M(n) {
      return function (t) {
        return -n(-t);
      };
    }

    function p(e) {
      var u,
          o,
          l = e(i, a),
          p = l.domain,
          d = 10;

      function g() {
        return u = s(d), o = h(d), p()[0] < 0 ? (u = M(u), o = M(o), e(f, c)) : e(i, a), l;
      }

      return l.base = function (n) {
        return arguments.length ? (d = +n, g()) : d;
      }, l.domain = function (n) {
        return arguments.length ? (p(n), g()) : p();
      }, l.ticks = function (t) {
        var r,
            e = p(),
            i = e[0],
            a = e[e.length - 1];
        (r = a < i) && (h = i, i = a, a = h);
        var f,
            c,
            l,
            h = u(i),
            s = u(a),
            M = null == t ? 10 : +t,
            g = [];

        if (!(d % 1) && s - h < M) {
          if (h = Math.round(h) - 1, s = Math.round(s) + 1, i > 0) {
            for (; h < s; ++h) {
              for (c = 1, f = o(h); c < d; ++c) {
                if (!((l = f * c) < i)) {
                  if (l > a) break;
                  g.push(l);
                }
              }
            }
          } else for (; h < s; ++h) {
            for (c = d - 1, f = o(h); c >= 1; --c) {
              if (!((l = f * c) < i)) {
                if (l > a) break;
                g.push(l);
              }
            }
          }
        } else g = (0, n.ticks)(h, s, Math.min(s - h, M)).map(o);

        return r ? g.reverse() : g;
      }, l.tickFormat = function (n, r) {
        if (null == r && (r = 10 === d ? ".0e" : ","), "function" != typeof r && (r = (0, t.format)(r)), n === 1 / 0) return r;
        null == n && (n = 10);
        var e = Math.max(1, d * n / l.ticks().length);
        return function (n) {
          var t = n / o(Math.round(u(n)));
          return t * d < d - .5 && (t *= d), t <= e ? r(n) : "";
        };
      }, l.nice = function () {
        return p((0, r.default)(p(), {
          floor: function floor(n) {
            return o(Math.floor(u(n)));
          },
          ceil: function ceil(n) {
            return o(Math.ceil(u(n)));
          }
        }));
      }, l;
    }

    function d() {
      var n = p((0, e.transformer)()).domain([1, 10]);
      return n.copy = function () {
        return (0, e.copy)(n, d()).base(n.base());
      }, u.initRange.apply(n, arguments), n;
    }
  }, {
    "d3-array": "cBuZ",
    "d3-format": "gWev",
    "./nice": "gRJQ",
    "./continuous": "ZpMB",
    "./init": "aZlr"
  }],
  "Prec": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.symlogish = i, exports.default = o;

    var n = require("./linear"),
        t = require("./continuous"),
        r = require("./init");

    function e(n) {
      return function (t) {
        return Math.sign(t) * Math.log1p(Math.abs(t / n));
      };
    }

    function u(n) {
      return function (t) {
        return Math.sign(t) * Math.expm1(Math.abs(t)) * n;
      };
    }

    function i(t) {
      var r = 1,
          i = t(e(r), u(r));
      return i.constant = function (n) {
        return arguments.length ? t(e(r = +n), u(r)) : r;
      }, (0, n.linearish)(i);
    }

    function o() {
      var n = i((0, t.transformer)());
      return n.copy = function () {
        return (0, t.copy)(n, o()).constant(n.constant());
      }, r.initRange.apply(n, arguments);
    }
  }, {
    "./linear": "VMtl",
    "./continuous": "ZpMB",
    "./init": "aZlr"
  }],
  "ysea": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.powish = o, exports.default = p, exports.sqrt = a;

    var t = require("./linear"),
        n = require("./continuous"),
        e = require("./init");

    function r(t) {
      return function (n) {
        return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
      };
    }

    function i(t) {
      return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
    }

    function u(t) {
      return t < 0 ? -t * t : t * t;
    }

    function o(e) {
      var o = e(n.identity, n.identity),
          p = 1;
      return o.exponent = function (t) {
        return arguments.length ? 1 === (p = +t) ? e(n.identity, n.identity) : .5 === p ? e(i, u) : e(r(p), r(1 / p)) : p;
      }, (0, t.linearish)(o);
    }

    function p() {
      var t = o((0, n.transformer)());
      return t.copy = function () {
        return (0, n.copy)(t, p()).exponent(t.exponent());
      }, e.initRange.apply(t, arguments), t;
    }

    function a() {
      return p.apply(null, arguments).exponent(.5);
    }
  }, {
    "./linear": "VMtl",
    "./continuous": "ZpMB",
    "./init": "aZlr"
  }],
  "fsZk": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var n = require("d3-array"),
        e = require("./array"),
        r = require("./init");

    function t() {
      var i,
          u = [],
          a = [],
          l = [];

      function o() {
        var e = 0,
            r = Math.max(1, a.length);

        for (l = new Array(r - 1); ++e < r;) {
          l[e - 1] = (0, n.quantile)(u, e / r);
        }

        return c;
      }

      function c(e) {
        return isNaN(e = +e) ? i : a[(0, n.bisect)(l, e)];
      }

      return c.invertExtent = function (n) {
        var e = a.indexOf(n);
        return e < 0 ? [NaN, NaN] : [e > 0 ? l[e - 1] : u[0], e < l.length ? l[e] : u[u.length - 1]];
      }, c.domain = function (e) {
        if (!arguments.length) return u.slice();
        u = [];

        for (var r, t = 0, i = e.length; t < i; ++t) {
          null == (r = e[t]) || isNaN(r = +r) || u.push(r);
        }

        return u.sort(n.ascending), o();
      }, c.range = function (n) {
        return arguments.length ? (a = e.slice.call(n), o()) : a.slice();
      }, c.unknown = function (n) {
        return arguments.length ? (i = n, c) : i;
      }, c.quantiles = function () {
        return l.slice();
      }, c.copy = function () {
        return t().domain(u).range(a).unknown(i);
      }, r.initRange.apply(c, arguments);
    }
  }, {
    "d3-array": "cBuZ",
    "./array": "lLkj",
    "./init": "aZlr"
  }],
  "Z2cL": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i;

    var n = require("d3-array"),
        r = require("./array"),
        e = require("./linear"),
        t = require("./init");

    function i() {
      var u,
          a = 0,
          o = 1,
          c = 1,
          l = [.5],
          f = [0, 1];

      function s(r) {
        return r <= r ? f[(0, n.bisect)(l, r, 0, c)] : u;
      }

      function d() {
        var n = -1;

        for (l = new Array(c); ++n < c;) {
          l[n] = ((n + 1) * o - (n - c) * a) / (c + 1);
        }

        return s;
      }

      return s.domain = function (n) {
        return arguments.length ? (a = +n[0], o = +n[1], d()) : [a, o];
      }, s.range = function (n) {
        return arguments.length ? (c = (f = r.slice.call(n)).length - 1, d()) : f.slice();
      }, s.invertExtent = function (n) {
        var r = f.indexOf(n);
        return r < 0 ? [NaN, NaN] : r < 1 ? [a, l[0]] : r >= c ? [l[c - 1], o] : [l[r - 1], l[r]];
      }, s.unknown = function (n) {
        return arguments.length ? (u = n, s) : s;
      }, s.thresholds = function () {
        return l.slice();
      }, s.copy = function () {
        return i().domain([a, o]).range(f).unknown(u);
      }, t.initRange.apply((0, e.linearish)(s), arguments);
    }
  }, {
    "d3-array": "cBuZ",
    "./array": "lLkj",
    "./linear": "VMtl",
    "./init": "aZlr"
  }],
  "odYE": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var n = require("d3-array"),
        e = require("./array"),
        t = require("./init");

    function r() {
      var i,
          u = [.5],
          a = [0, 1],
          l = 1;

      function c(e) {
        return e <= e ? a[(0, n.bisect)(u, e, 0, l)] : i;
      }

      return c.domain = function (n) {
        return arguments.length ? (u = e.slice.call(n), l = Math.min(u.length, a.length - 1), c) : u.slice();
      }, c.range = function (n) {
        return arguments.length ? (a = e.slice.call(n), l = Math.min(u.length, a.length - 1), c) : a.slice();
      }, c.invertExtent = function (n) {
        var e = a.indexOf(n);
        return [u[e - 1], u[e]];
      }, c.unknown = function (n) {
        return arguments.length ? (i = n, c) : i;
      }, c.copy = function () {
        return r().domain(u).range(a).unknown(i);
      }, t.initRange.apply(c, arguments);
    }
  }, {
    "d3-array": "cBuZ",
    "./array": "lLkj",
    "./init": "aZlr"
  }],
  "gsab": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = new Date(),
        n = new Date();

    function t(r, o, u, f) {
      function i(e) {
        return r(e = 0 === arguments.length ? new Date() : new Date(+e)), e;
      }

      return i.floor = function (e) {
        return r(e = new Date(+e)), e;
      }, i.ceil = function (e) {
        return r(e = new Date(e - 1)), o(e, 1), r(e), e;
      }, i.round = function (e) {
        var n = i(e),
            t = i.ceil(e);
        return e - n < t - e ? n : t;
      }, i.offset = function (e, n) {
        return o(e = new Date(+e), null == n ? 1 : Math.floor(n)), e;
      }, i.range = function (e, n, t) {
        var u,
            f = [];
        if (e = i.ceil(e), t = null == t ? 1 : Math.floor(t), !(e < n && t > 0)) return f;

        do {
          f.push(u = new Date(+e)), o(e, t), r(e);
        } while (u < e && e < n);

        return f;
      }, i.filter = function (e) {
        return t(function (n) {
          if (n >= n) for (; r(n), !e(n);) {
            n.setTime(n - 1);
          }
        }, function (n, t) {
          if (n >= n) if (t < 0) for (; ++t <= 0;) {
            for (; o(n, -1), !e(n);) {
              ;
            }
          } else for (; --t >= 0;) {
            for (; o(n, 1), !e(n);) {
              ;
            }
          }
        });
      }, u && (i.count = function (t, o) {
        return e.setTime(+t), n.setTime(+o), r(e), r(n), Math.floor(u(e, n));
      }, i.every = function (e) {
        return e = Math.floor(e), isFinite(e) && e > 0 ? e > 1 ? i.filter(f ? function (n) {
          return f(n) % e == 0;
        } : function (n) {
          return i.count(0, n) % e == 0;
        }) : i : null;
      }), i;
    }
  }, {}],
  "r4Yr": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.milliseconds = exports.default = void 0;
    var e = t(require("./interval.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var n = (0, e.default)(function () {}, function (e, t) {
      e.setTime(+e + t);
    }, function (e, t) {
      return t - e;
    });

    n.every = function (t) {
      return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? (0, e.default)(function (e) {
        e.setTime(Math.floor(e / t) * t);
      }, function (e, n) {
        e.setTime(+e + n * t);
      }, function (e, n) {
        return (n - e) / t;
      }) : n : null;
    };

    var r = n;
    exports.default = r;
    var i = n.range;
    exports.milliseconds = i;
  }, {
    "./interval.js": "gsab"
  }],
  "EMiL": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.durationWeek = exports.durationDay = exports.durationHour = exports.durationMinute = exports.durationSecond = void 0;
    var e = 1e3;
    exports.durationSecond = e;
    var r = 6e4;
    exports.durationMinute = r;
    var o = 36e5;
    exports.durationHour = o;
    var t = 864e5;
    exports.durationDay = t;
    var a = 6048e5;
    exports.durationWeek = a;
  }, {}],
  "K4G6": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.seconds = exports.default = void 0;

    var e = r(require("./interval.js")),
        t = require("./duration.js");

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var n = (0, e.default)(function (e) {
      e.setTime(e - e.getMilliseconds());
    }, function (e, r) {
      e.setTime(+e + r * t.durationSecond);
    }, function (e, r) {
      return (r - e) / t.durationSecond;
    }, function (e) {
      return e.getUTCSeconds();
    }),
        o = n;
    exports.default = o;
    var u = n.range;
    exports.seconds = u;
  }, {
    "./interval.js": "gsab",
    "./duration.js": "EMiL"
  }],
  "sObl": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.minutes = exports.default = void 0;

    var e = n(require("./interval.js")),
        t = require("./duration.js");

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = (0, e.default)(function (e) {
      e.setTime(e - e.getMilliseconds() - e.getSeconds() * t.durationSecond);
    }, function (e, n) {
      e.setTime(+e + n * t.durationMinute);
    }, function (e, n) {
      return (n - e) / t.durationMinute;
    }, function (e) {
      return e.getMinutes();
    }),
        u = r;
    exports.default = u;
    var i = r.range;
    exports.minutes = i;
  }, {
    "./interval.js": "gsab",
    "./duration.js": "EMiL"
  }],
  "wPv4": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.hours = exports.default = void 0;

    var e = r(require("./interval.js")),
        t = require("./duration.js");

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = (0, e.default)(function (e) {
      e.setTime(e - e.getMilliseconds() - e.getSeconds() * t.durationSecond - e.getMinutes() * t.durationMinute);
    }, function (e, r) {
      e.setTime(+e + r * t.durationHour);
    }, function (e, r) {
      return (r - e) / t.durationHour;
    }, function (e) {
      return e.getHours();
    }),
        o = u;
    exports.default = o;
    var n = u.range;
    exports.hours = n;
  }, {
    "./interval.js": "gsab",
    "./duration.js": "EMiL"
  }],
  "bZMy": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.days = exports.default = void 0;

    var e = r(require("./interval.js")),
        t = require("./duration.js");

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = (0, e.default)(function (e) {
      e.setHours(0, 0, 0, 0);
    }, function (e, t) {
      e.setDate(e.getDate() + t);
    }, function (e, r) {
      return (r - e - (r.getTimezoneOffset() - e.getTimezoneOffset()) * t.durationMinute) / t.durationDay;
    }, function (e) {
      return e.getDate() - 1;
    }),
        n = u;
    exports.default = n;
    var o = u.range;
    exports.days = o;
  }, {
    "./interval.js": "gsab",
    "./duration.js": "EMiL"
  }],
  "SUbU": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.saturdays = exports.fridays = exports.thursdays = exports.wednesdays = exports.tuesdays = exports.mondays = exports.sundays = exports.saturday = exports.friday = exports.thursday = exports.wednesday = exports.tuesday = exports.monday = exports.sunday = void 0;

    var e = s(require("./interval.js")),
        r = require("./duration.js");

    function s(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(s) {
      return (0, e.default)(function (e) {
        e.setDate(e.getDate() - (e.getDay() + 7 - s) % 7), e.setHours(0, 0, 0, 0);
      }, function (e, r) {
        e.setDate(e.getDate() + 7 * r);
      }, function (e, s) {
        return (s - e - (s.getTimezoneOffset() - e.getTimezoneOffset()) * r.durationMinute) / r.durationWeek;
      });
    }

    var a = t(0);
    exports.sunday = a;
    var o = t(1);
    exports.monday = o;
    var d = t(2);
    exports.tuesday = d;
    var n = t(3);
    exports.wednesday = n;
    var u = t(4);
    exports.thursday = u;
    var p = t(5);
    exports.friday = p;
    var y = t(6);
    exports.saturday = y;
    var x = a.range;
    exports.sundays = x;
    var i = o.range;
    exports.mondays = i;
    var v = d.range;
    exports.tuesdays = v;
    var f = n.range;
    exports.wednesdays = f;
    var g = u.range;
    exports.thursdays = g;
    var c = p.range;
    exports.fridays = c;
    var l = y.range;
    exports.saturdays = l;
  }, {
    "./interval.js": "gsab",
    "./duration.js": "EMiL"
  }],
  "XpbA": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.months = exports.default = void 0;
    var t = e(require("./interval.js"));

    function e(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var r = (0, t.default)(function (t) {
      t.setDate(1), t.setHours(0, 0, 0, 0);
    }, function (t, e) {
      t.setMonth(t.getMonth() + e);
    }, function (t, e) {
      return e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear());
    }, function (t) {
      return t.getMonth();
    }),
        n = r;
    exports.default = n;
    var o = r.range;
    exports.months = o;
  }, {
    "./interval.js": "gsab"
  }],
  "djmh": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.years = exports.default = void 0;
    var e = t(require("./interval.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = (0, e.default)(function (e) {
      e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
    }, function (e, t) {
      e.setFullYear(e.getFullYear() + t);
    }, function (e, t) {
      return t.getFullYear() - e.getFullYear();
    }, function (e) {
      return e.getFullYear();
    });

    r.every = function (t) {
      return isFinite(t = Math.floor(t)) && t > 0 ? (0, e.default)(function (e) {
        e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
      }, function (e, r) {
        e.setFullYear(e.getFullYear() + r * t);
      }) : null;
    };

    var u = r;
    exports.default = u;
    var l = r.range;
    exports.years = l;
  }, {
    "./interval.js": "gsab"
  }],
  "c3Ah": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.utcMinutes = exports.default = void 0;

    var e = u(require("./interval.js")),
        t = require("./duration.js");

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = (0, e.default)(function (e) {
      e.setUTCSeconds(0, 0);
    }, function (e, u) {
      e.setTime(+e + u * t.durationMinute);
    }, function (e, u) {
      return (u - e) / t.durationMinute;
    }, function (e) {
      return e.getUTCMinutes();
    }),
        n = r;
    exports.default = n;
    var i = r.range;
    exports.utcMinutes = i;
  }, {
    "./interval.js": "gsab",
    "./duration.js": "EMiL"
  }],
  "sGav": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.utcHours = exports.default = void 0;

    var e = t(require("./interval.js")),
        r = require("./duration.js");

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = (0, e.default)(function (e) {
      e.setUTCMinutes(0, 0, 0);
    }, function (e, t) {
      e.setTime(+e + t * r.durationHour);
    }, function (e, t) {
      return (t - e) / r.durationHour;
    }, function (e) {
      return e.getUTCHours();
    }),
        o = u;
    exports.default = o;
    var n = u.range;
    exports.utcHours = n;
  }, {
    "./interval.js": "gsab",
    "./duration.js": "EMiL"
  }],
  "ns65": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.utcDays = exports.default = void 0;

    var e = r(require("./interval.js")),
        t = require("./duration.js");

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = (0, e.default)(function (e) {
      e.setUTCHours(0, 0, 0, 0);
    }, function (e, t) {
      e.setUTCDate(e.getUTCDate() + t);
    }, function (e, r) {
      return (r - e) / t.durationDay;
    }, function (e) {
      return e.getUTCDate() - 1;
    }),
        a = u;
    exports.default = a;
    var n = u.range;
    exports.utcDays = n;
  }, {
    "./interval.js": "gsab",
    "./duration.js": "EMiL"
  }],
  "HsON": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.utcSaturdays = exports.utcFridays = exports.utcThursdays = exports.utcWednesdays = exports.utcTuesdays = exports.utcMondays = exports.utcSundays = exports.utcSaturday = exports.utcFriday = exports.utcThursday = exports.utcWednesday = exports.utcTuesday = exports.utcMonday = exports.utcSunday = void 0;

    var t = r(require("./interval.js")),
        e = require("./duration.js");

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function a(r) {
      return (0, t.default)(function (t) {
        t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - r) % 7), t.setUTCHours(0, 0, 0, 0);
      }, function (t, e) {
        t.setUTCDate(t.getUTCDate() + 7 * e);
      }, function (t, r) {
        return (r - t) / e.durationWeek;
      });
    }

    var s = a(0);
    exports.utcSunday = s;
    var u = a(1);
    exports.utcMonday = u;
    var o = a(2);
    exports.utcTuesday = o;
    var d = a(3);
    exports.utcWednesday = d;
    var n = a(4);
    exports.utcThursday = n;
    var c = a(5);
    exports.utcFriday = c;
    var p = a(6);
    exports.utcSaturday = p;
    var y = s.range;
    exports.utcSundays = y;
    var x = u.range;
    exports.utcMondays = x;
    var v = o.range;
    exports.utcTuesdays = v;
    var i = d.range;
    exports.utcWednesdays = i;
    var T = n.range;
    exports.utcThursdays = T;
    var g = c.range;
    exports.utcFridays = g;
    var f = p.range;
    exports.utcSaturdays = f;
  }, {
    "./interval.js": "gsab",
    "./duration.js": "EMiL"
  }],
  "KWFc": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.utcMonths = exports.default = void 0;
    var t = e(require("./interval.js"));

    function e(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var r = (0, t.default)(function (t) {
      t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
    }, function (t, e) {
      t.setUTCMonth(t.getUTCMonth() + e);
    }, function (t, e) {
      return e.getUTCMonth() - t.getUTCMonth() + 12 * (e.getUTCFullYear() - t.getUTCFullYear());
    }, function (t) {
      return t.getUTCMonth();
    }),
        n = r;
    exports.default = n;
    var o = r.range;
    exports.utcMonths = o;
  }, {
    "./interval.js": "gsab"
  }],
  "LM11": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.utcYears = exports.default = void 0;
    var e = t(require("./interval.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = (0, e.default)(function (e) {
      e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
    }, function (e, t) {
      e.setUTCFullYear(e.getUTCFullYear() + t);
    }, function (e, t) {
      return t.getUTCFullYear() - e.getUTCFullYear();
    }, function (e) {
      return e.getUTCFullYear();
    });

    r.every = function (t) {
      return isFinite(t = Math.floor(t)) && t > 0 ? (0, e.default)(function (e) {
        e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
      }, function (e, r) {
        e.setUTCFullYear(e.getUTCFullYear() + r * t);
      }) : null;
    };

    var u = r;
    exports.default = u;
    var l = r.range;
    exports.utcYears = l;
  }, {
    "./interval.js": "gsab"
  }],
  "F00f": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "timeInterval", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "timeMillisecond", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "timeMilliseconds", {
      enumerable: !0,
      get: function get() {
        return t.milliseconds;
      }
    }), Object.defineProperty(exports, "utcMillisecond", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "utcMilliseconds", {
      enumerable: !0,
      get: function get() {
        return t.milliseconds;
      }
    }), Object.defineProperty(exports, "timeSecond", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "timeSeconds", {
      enumerable: !0,
      get: function get() {
        return r.seconds;
      }
    }), Object.defineProperty(exports, "utcSecond", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "utcSeconds", {
      enumerable: !0,
      get: function get() {
        return r.seconds;
      }
    }), Object.defineProperty(exports, "timeMinute", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "timeMinutes", {
      enumerable: !0,
      get: function get() {
        return n.minutes;
      }
    }), Object.defineProperty(exports, "timeHour", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "timeHours", {
      enumerable: !0,
      get: function get() {
        return u.hours;
      }
    }), Object.defineProperty(exports, "timeDay", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "timeDays", {
      enumerable: !0,
      get: function get() {
        return o.days;
      }
    }), Object.defineProperty(exports, "timeWeek", {
      enumerable: !0,
      get: function get() {
        return i.sunday;
      }
    }), Object.defineProperty(exports, "timeWeeks", {
      enumerable: !0,
      get: function get() {
        return i.sundays;
      }
    }), Object.defineProperty(exports, "timeSunday", {
      enumerable: !0,
      get: function get() {
        return i.sunday;
      }
    }), Object.defineProperty(exports, "timeSundays", {
      enumerable: !0,
      get: function get() {
        return i.sundays;
      }
    }), Object.defineProperty(exports, "timeMonday", {
      enumerable: !0,
      get: function get() {
        return i.monday;
      }
    }), Object.defineProperty(exports, "timeMondays", {
      enumerable: !0,
      get: function get() {
        return i.mondays;
      }
    }), Object.defineProperty(exports, "timeTuesday", {
      enumerable: !0,
      get: function get() {
        return i.tuesday;
      }
    }), Object.defineProperty(exports, "timeTuesdays", {
      enumerable: !0,
      get: function get() {
        return i.tuesdays;
      }
    }), Object.defineProperty(exports, "timeWednesday", {
      enumerable: !0,
      get: function get() {
        return i.wednesday;
      }
    }), Object.defineProperty(exports, "timeWednesdays", {
      enumerable: !0,
      get: function get() {
        return i.wednesdays;
      }
    }), Object.defineProperty(exports, "timeThursday", {
      enumerable: !0,
      get: function get() {
        return i.thursday;
      }
    }), Object.defineProperty(exports, "timeThursdays", {
      enumerable: !0,
      get: function get() {
        return i.thursdays;
      }
    }), Object.defineProperty(exports, "timeFriday", {
      enumerable: !0,
      get: function get() {
        return i.friday;
      }
    }), Object.defineProperty(exports, "timeFridays", {
      enumerable: !0,
      get: function get() {
        return i.fridays;
      }
    }), Object.defineProperty(exports, "timeSaturday", {
      enumerable: !0,
      get: function get() {
        return i.saturday;
      }
    }), Object.defineProperty(exports, "timeSaturdays", {
      enumerable: !0,
      get: function get() {
        return i.saturdays;
      }
    }), Object.defineProperty(exports, "timeMonth", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(exports, "timeMonths", {
      enumerable: !0,
      get: function get() {
        return c.months;
      }
    }), Object.defineProperty(exports, "timeYear", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    }), Object.defineProperty(exports, "timeYears", {
      enumerable: !0,
      get: function get() {
        return s.years;
      }
    }), Object.defineProperty(exports, "utcMinute", {
      enumerable: !0,
      get: function get() {
        return a.default;
      }
    }), Object.defineProperty(exports, "utcMinutes", {
      enumerable: !0,
      get: function get() {
        return a.utcMinutes;
      }
    }), Object.defineProperty(exports, "utcHour", {
      enumerable: !0,
      get: function get() {
        return d.default;
      }
    }), Object.defineProperty(exports, "utcHours", {
      enumerable: !0,
      get: function get() {
        return d.utcHours;
      }
    }), Object.defineProperty(exports, "utcDay", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "utcDays", {
      enumerable: !0,
      get: function get() {
        return f.utcDays;
      }
    }), Object.defineProperty(exports, "utcWeek", {
      enumerable: !0,
      get: function get() {
        return y.utcSunday;
      }
    }), Object.defineProperty(exports, "utcWeeks", {
      enumerable: !0,
      get: function get() {
        return y.utcSundays;
      }
    }), Object.defineProperty(exports, "utcSunday", {
      enumerable: !0,
      get: function get() {
        return y.utcSunday;
      }
    }), Object.defineProperty(exports, "utcSundays", {
      enumerable: !0,
      get: function get() {
        return y.utcSundays;
      }
    }), Object.defineProperty(exports, "utcMonday", {
      enumerable: !0,
      get: function get() {
        return y.utcMonday;
      }
    }), Object.defineProperty(exports, "utcMondays", {
      enumerable: !0,
      get: function get() {
        return y.utcMondays;
      }
    }), Object.defineProperty(exports, "utcTuesday", {
      enumerable: !0,
      get: function get() {
        return y.utcTuesday;
      }
    }), Object.defineProperty(exports, "utcTuesdays", {
      enumerable: !0,
      get: function get() {
        return y.utcTuesdays;
      }
    }), Object.defineProperty(exports, "utcWednesday", {
      enumerable: !0,
      get: function get() {
        return y.utcWednesday;
      }
    }), Object.defineProperty(exports, "utcWednesdays", {
      enumerable: !0,
      get: function get() {
        return y.utcWednesdays;
      }
    }), Object.defineProperty(exports, "utcThursday", {
      enumerable: !0,
      get: function get() {
        return y.utcThursday;
      }
    }), Object.defineProperty(exports, "utcThursdays", {
      enumerable: !0,
      get: function get() {
        return y.utcThursdays;
      }
    }), Object.defineProperty(exports, "utcFriday", {
      enumerable: !0,
      get: function get() {
        return y.utcFriday;
      }
    }), Object.defineProperty(exports, "utcFridays", {
      enumerable: !0,
      get: function get() {
        return y.utcFridays;
      }
    }), Object.defineProperty(exports, "utcSaturday", {
      enumerable: !0,
      get: function get() {
        return y.utcSaturday;
      }
    }), Object.defineProperty(exports, "utcSaturdays", {
      enumerable: !0,
      get: function get() {
        return y.utcSaturdays;
      }
    }), Object.defineProperty(exports, "utcMonth", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(exports, "utcMonths", {
      enumerable: !0,
      get: function get() {
        return p.utcMonths;
      }
    }), Object.defineProperty(exports, "utcYear", {
      enumerable: !0,
      get: function get() {
        return b.default;
      }
    }), Object.defineProperty(exports, "utcYears", {
      enumerable: !0,
      get: function get() {
        return b.utcYears;
      }
    });

    var e = j(require("./interval.js")),
        t = m(require("./millisecond.js")),
        r = m(require("./second.js")),
        n = m(require("./minute.js")),
        u = m(require("./hour.js")),
        o = m(require("./day.js")),
        i = require("./week.js"),
        c = m(require("./month.js")),
        s = m(require("./year.js")),
        a = m(require("./utcMinute.js")),
        d = m(require("./utcHour.js")),
        f = m(require("./utcDay.js")),
        y = require("./utcWeek.js"),
        p = m(require("./utcMonth.js")),
        b = m(require("./utcYear.js"));

    function l() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return l = function l() {
        return e;
      }, e;
    }

    function m(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var t = l();
      if (t && t.has(e)) return t.get(e);
      var r = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var u in e) {
        if (Object.prototype.hasOwnProperty.call(e, u)) {
          var o = n ? Object.getOwnPropertyDescriptor(e, u) : null;
          o && (o.get || o.set) ? Object.defineProperty(r, u, o) : r[u] = e[u];
        }
      }

      return r.default = e, t && t.set(e, r), r;
    }

    function j(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./interval.js": "gsab",
    "./millisecond.js": "r4Yr",
    "./second.js": "K4G6",
    "./minute.js": "sObl",
    "./hour.js": "wPv4",
    "./day.js": "bZMy",
    "./week.js": "SUbU",
    "./month.js": "XpbA",
    "./year.js": "djmh",
    "./utcMinute.js": "c3Ah",
    "./utcHour.js": "sGav",
    "./utcDay.js": "ns65",
    "./utcWeek.js": "HsON",
    "./utcMonth.js": "KWFc",
    "./utcYear.js": "LM11"
  }],
  "rf9h": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;

    var n = require("d3-time");

    function t(n) {
      if (0 <= n.y && n.y < 100) {
        var t = new Date(-1, n.m, n.d, n.H, n.M, n.S, n.L);
        return t.setFullYear(n.y), t;
      }

      return new Date(n.y, n.m, n.d, n.H, n.M, n.S, n.L);
    }

    function e(n) {
      if (0 <= n.y && n.y < 100) {
        var t = new Date(Date.UTC(-1, n.m, n.d, n.H, n.M, n.S, n.L));
        return t.setUTCFullYear(n.y), t;
      }

      return new Date(Date.UTC(n.y, n.m, n.d, n.H, n.M, n.S, n.L));
    }

    function r(n, t, e) {
      return {
        y: n,
        m: t,
        d: e,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      };
    }

    function u(u) {
      var i = u.dateTime,
          o = u.date,
          a = u.time,
          f = u.periods,
          l = u.days,
          mn = u.shortDays,
          Cn = u.months,
          Dn = u.shortMonths,
          Tn = g(f),
          Mn = s(f),
          xn = g(l),
          Un = s(l),
          wn = g(mn),
          Yn = s(mn),
          Hn = g(Cn),
          Ln = s(Cn),
          pn = g(Dn),
          Sn = s(Dn),
          Zn = {
        a: function a(n) {
          return mn[n.getDay()];
        },
        A: function A(n) {
          return l[n.getDay()];
        },
        b: function b(n) {
          return Dn[n.getMonth()];
        },
        B: function B(n) {
          return Cn[n.getMonth()];
        },
        c: null,
        d: V,
        e: V,
        f: X,
        H: W,
        I: j,
        j: q,
        L: Q,
        m: b,
        M: B,
        p: function p(n) {
          return f[+(n.getHours() >= 12)];
        },
        q: function q(n) {
          return 1 + ~~(n.getMonth() / 3);
        },
        Q: dn,
        s: vn,
        S: I,
        u: _,
        U: O,
        V: P,
        w: $,
        W: z,
        x: null,
        X: null,
        y: E,
        Y: R,
        Z: k,
        "%": yn
      },
          An = {
        a: function a(n) {
          return mn[n.getUTCDay()];
        },
        A: function A(n) {
          return l[n.getUTCDay()];
        },
        b: function b(n) {
          return Dn[n.getUTCMonth()];
        },
        B: function B(n) {
          return Cn[n.getUTCMonth()];
        },
        c: null,
        d: G,
        e: G,
        f: tn,
        H: J,
        I: K,
        j: N,
        L: nn,
        m: en,
        M: rn,
        p: function p(n) {
          return f[+(n.getUTCHours() >= 12)];
        },
        q: function q(n) {
          return 1 + ~~(n.getUTCMonth() / 3);
        },
        Q: dn,
        s: vn,
        S: un,
        u: cn,
        U: on,
        V: an,
        w: fn,
        W: ln,
        x: null,
        X: null,
        y: gn,
        Y: sn,
        Z: hn,
        "%": yn
      },
          Fn = {
        a: function a(n, t, e) {
          var r = wn.exec(t.slice(e));
          return r ? (n.w = Yn[r[0].toLowerCase()], e + r[0].length) : -1;
        },
        A: function A(n, t, e) {
          var r = xn.exec(t.slice(e));
          return r ? (n.w = Un[r[0].toLowerCase()], e + r[0].length) : -1;
        },
        b: function b(n, t, e) {
          var r = pn.exec(t.slice(e));
          return r ? (n.m = Sn[r[0].toLowerCase()], e + r[0].length) : -1;
        },
        B: function B(n, t, e) {
          var r = Hn.exec(t.slice(e));
          return r ? (n.m = Ln[r[0].toLowerCase()], e + r[0].length) : -1;
        },
        c: function c(n, t, e) {
          return jn(n, i, t, e);
        },
        d: U,
        e: U,
        f: S,
        H: Y,
        I: Y,
        j: w,
        L: p,
        m: x,
        M: H,
        p: function p(n, t, e) {
          var r = Tn.exec(t.slice(e));
          return r ? (n.p = Mn[r[0].toLowerCase()], e + r[0].length) : -1;
        },
        q: M,
        Q: A,
        s: F,
        S: L,
        u: y,
        U: d,
        V: v,
        w: h,
        W: m,
        x: function x(n, t, e) {
          return jn(n, o, t, e);
        },
        X: function X(n, t, e) {
          return jn(n, a, t, e);
        },
        y: D,
        Y: C,
        Z: T,
        "%": Z
      };

      function Vn(n, t) {
        return function (e) {
          var r,
              u,
              i,
              o = [],
              a = -1,
              f = 0,
              l = n.length;

          for (e instanceof Date || (e = new Date(+e)); ++a < l;) {
            37 === n.charCodeAt(a) && (o.push(n.slice(f, a)), null != (u = c[r = n.charAt(++a)]) ? r = n.charAt(++a) : u = "e" === r ? " " : "0", (i = t[r]) && (r = i(e, u)), o.push(r), f = a + 1);
          }

          return o.push(n.slice(f, a)), o.join("");
        };
      }

      function Wn(u, c) {
        return function (i) {
          var o,
              a,
              f = r(1900, void 0, 1);
          if (jn(f, u, i += "", 0) != i.length) return null;
          if ("Q" in f) return new Date(f.Q);
          if ("s" in f) return new Date(1e3 * f.s + ("L" in f ? f.L : 0));

          if (!c || "Z" in f || (f.Z = 0), "p" in f && (f.H = f.H % 12 + 12 * f.p), void 0 === f.m && (f.m = "q" in f ? f.q : 0), "V" in f) {
            if (f.V < 1 || f.V > 53) return null;
            "w" in f || (f.w = 1), "Z" in f ? (a = (o = e(r(f.y, 0, 1))).getUTCDay(), o = a > 4 || 0 === a ? n.utcMonday.ceil(o) : (0, n.utcMonday)(o), o = n.utcDay.offset(o, 7 * (f.V - 1)), f.y = o.getUTCFullYear(), f.m = o.getUTCMonth(), f.d = o.getUTCDate() + (f.w + 6) % 7) : (a = (o = t(r(f.y, 0, 1))).getDay(), o = a > 4 || 0 === a ? n.timeMonday.ceil(o) : (0, n.timeMonday)(o), o = n.timeDay.offset(o, 7 * (f.V - 1)), f.y = o.getFullYear(), f.m = o.getMonth(), f.d = o.getDate() + (f.w + 6) % 7);
          } else ("W" in f || "U" in f) && ("w" in f || (f.w = "u" in f ? f.u % 7 : "W" in f ? 1 : 0), a = "Z" in f ? e(r(f.y, 0, 1)).getUTCDay() : t(r(f.y, 0, 1)).getDay(), f.m = 0, f.d = "W" in f ? (f.w + 6) % 7 + 7 * f.W - (a + 5) % 7 : f.w + 7 * f.U - (a + 6) % 7);

          return "Z" in f ? (f.H += f.Z / 100 | 0, f.M += f.Z % 100, e(f)) : t(f);
        };
      }

      function jn(n, t, e, r) {
        for (var u, i, o = 0, a = t.length, f = e.length; o < a;) {
          if (r >= f) return -1;

          if (37 === (u = t.charCodeAt(o++))) {
            if (u = t.charAt(o++), !(i = Fn[u in c ? t.charAt(o++) : u]) || (r = i(n, e, r)) < 0) return -1;
          } else if (u != e.charCodeAt(r++)) return -1;
        }

        return r;
      }

      return Zn.x = Vn(o, Zn), Zn.X = Vn(a, Zn), Zn.c = Vn(i, Zn), An.x = Vn(o, An), An.X = Vn(a, An), An.c = Vn(i, An), {
        format: function format(n) {
          var t = Vn(n += "", Zn);
          return t.toString = function () {
            return n;
          }, t;
        },
        parse: function parse(n) {
          var t = Wn(n += "", !1);
          return t.toString = function () {
            return n;
          }, t;
        },
        utcFormat: function utcFormat(n) {
          var t = Vn(n += "", An);
          return t.toString = function () {
            return n;
          }, t;
        },
        utcParse: function utcParse(n) {
          var t = Wn(n += "", !0);
          return t.toString = function () {
            return n;
          }, t;
        }
      };
    }

    var c = {
      "-": "",
      _: " ",
      0: "0"
    },
        i = /^\s*\d+/,
        o = /^%/,
        a = /[\\^$*+?|[\]().{}]/g;

    function f(n, t, e) {
      var r = n < 0 ? "-" : "",
          u = (r ? -n : n) + "",
          c = u.length;
      return r + (c < e ? new Array(e - c + 1).join(t) + u : u);
    }

    function l(n) {
      return n.replace(a, "\\$&");
    }

    function g(n) {
      return new RegExp("^(?:" + n.map(l).join("|") + ")", "i");
    }

    function s(n) {
      for (var t = {}, e = -1, r = n.length; ++e < r;) {
        t[n[e].toLowerCase()] = e;
      }

      return t;
    }

    function h(n, t, e) {
      var r = i.exec(t.slice(e, e + 1));
      return r ? (n.w = +r[0], e + r[0].length) : -1;
    }

    function y(n, t, e) {
      var r = i.exec(t.slice(e, e + 1));
      return r ? (n.u = +r[0], e + r[0].length) : -1;
    }

    function d(n, t, e) {
      var r = i.exec(t.slice(e, e + 2));
      return r ? (n.U = +r[0], e + r[0].length) : -1;
    }

    function v(n, t, e) {
      var r = i.exec(t.slice(e, e + 2));
      return r ? (n.V = +r[0], e + r[0].length) : -1;
    }

    function m(n, t, e) {
      var r = i.exec(t.slice(e, e + 2));
      return r ? (n.W = +r[0], e + r[0].length) : -1;
    }

    function C(n, t, e) {
      var r = i.exec(t.slice(e, e + 4));
      return r ? (n.y = +r[0], e + r[0].length) : -1;
    }

    function D(n, t, e) {
      var r = i.exec(t.slice(e, e + 2));
      return r ? (n.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1;
    }

    function T(n, t, e) {
      var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(e, e + 6));
      return r ? (n.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1;
    }

    function M(n, t, e) {
      var r = i.exec(t.slice(e, e + 1));
      return r ? (n.q = 3 * r[0] - 3, e + r[0].length) : -1;
    }

    function x(n, t, e) {
      var r = i.exec(t.slice(e, e + 2));
      return r ? (n.m = r[0] - 1, e + r[0].length) : -1;
    }

    function U(n, t, e) {
      var r = i.exec(t.slice(e, e + 2));
      return r ? (n.d = +r[0], e + r[0].length) : -1;
    }

    function w(n, t, e) {
      var r = i.exec(t.slice(e, e + 3));
      return r ? (n.m = 0, n.d = +r[0], e + r[0].length) : -1;
    }

    function Y(n, t, e) {
      var r = i.exec(t.slice(e, e + 2));
      return r ? (n.H = +r[0], e + r[0].length) : -1;
    }

    function H(n, t, e) {
      var r = i.exec(t.slice(e, e + 2));
      return r ? (n.M = +r[0], e + r[0].length) : -1;
    }

    function L(n, t, e) {
      var r = i.exec(t.slice(e, e + 2));
      return r ? (n.S = +r[0], e + r[0].length) : -1;
    }

    function p(n, t, e) {
      var r = i.exec(t.slice(e, e + 3));
      return r ? (n.L = +r[0], e + r[0].length) : -1;
    }

    function S(n, t, e) {
      var r = i.exec(t.slice(e, e + 6));
      return r ? (n.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1;
    }

    function Z(n, t, e) {
      var r = o.exec(t.slice(e, e + 1));
      return r ? e + r[0].length : -1;
    }

    function A(n, t, e) {
      var r = i.exec(t.slice(e));
      return r ? (n.Q = +r[0], e + r[0].length) : -1;
    }

    function F(n, t, e) {
      var r = i.exec(t.slice(e));
      return r ? (n.s = +r[0], e + r[0].length) : -1;
    }

    function V(n, t) {
      return f(n.getDate(), t, 2);
    }

    function W(n, t) {
      return f(n.getHours(), t, 2);
    }

    function j(n, t) {
      return f(n.getHours() % 12 || 12, t, 2);
    }

    function q(t, e) {
      return f(1 + n.timeDay.count((0, n.timeYear)(t), t), e, 3);
    }

    function Q(n, t) {
      return f(n.getMilliseconds(), t, 3);
    }

    function X(n, t) {
      return Q(n, t) + "000";
    }

    function b(n, t) {
      return f(n.getMonth() + 1, t, 2);
    }

    function B(n, t) {
      return f(n.getMinutes(), t, 2);
    }

    function I(n, t) {
      return f(n.getSeconds(), t, 2);
    }

    function _(n) {
      var t = n.getDay();
      return 0 === t ? 7 : t;
    }

    function O(t, e) {
      return f(n.timeSunday.count((0, n.timeYear)(t) - 1, t), e, 2);
    }

    function P(t, e) {
      var r = t.getDay();
      return t = r >= 4 || 0 === r ? (0, n.timeThursday)(t) : n.timeThursday.ceil(t), f(n.timeThursday.count((0, n.timeYear)(t), t) + (4 === (0, n.timeYear)(t).getDay()), e, 2);
    }

    function $(n) {
      return n.getDay();
    }

    function z(t, e) {
      return f(n.timeMonday.count((0, n.timeYear)(t) - 1, t), e, 2);
    }

    function E(n, t) {
      return f(n.getFullYear() % 100, t, 2);
    }

    function R(n, t) {
      return f(n.getFullYear() % 1e4, t, 4);
    }

    function k(n) {
      var t = n.getTimezoneOffset();
      return (t > 0 ? "-" : (t *= -1, "+")) + f(t / 60 | 0, "0", 2) + f(t % 60, "0", 2);
    }

    function G(n, t) {
      return f(n.getUTCDate(), t, 2);
    }

    function J(n, t) {
      return f(n.getUTCHours(), t, 2);
    }

    function K(n, t) {
      return f(n.getUTCHours() % 12 || 12, t, 2);
    }

    function N(t, e) {
      return f(1 + n.utcDay.count((0, n.utcYear)(t), t), e, 3);
    }

    function nn(n, t) {
      return f(n.getUTCMilliseconds(), t, 3);
    }

    function tn(n, t) {
      return nn(n, t) + "000";
    }

    function en(n, t) {
      return f(n.getUTCMonth() + 1, t, 2);
    }

    function rn(n, t) {
      return f(n.getUTCMinutes(), t, 2);
    }

    function un(n, t) {
      return f(n.getUTCSeconds(), t, 2);
    }

    function cn(n) {
      var t = n.getUTCDay();
      return 0 === t ? 7 : t;
    }

    function on(t, e) {
      return f(n.utcSunday.count((0, n.utcYear)(t) - 1, t), e, 2);
    }

    function an(t, e) {
      var r = t.getUTCDay();
      return t = r >= 4 || 0 === r ? (0, n.utcThursday)(t) : n.utcThursday.ceil(t), f(n.utcThursday.count((0, n.utcYear)(t), t) + (4 === (0, n.utcYear)(t).getUTCDay()), e, 2);
    }

    function fn(n) {
      return n.getUTCDay();
    }

    function ln(t, e) {
      return f(n.utcMonday.count((0, n.utcYear)(t) - 1, t), e, 2);
    }

    function gn(n, t) {
      return f(n.getUTCFullYear() % 100, t, 2);
    }

    function sn(n, t) {
      return f(n.getUTCFullYear() % 1e4, t, 4);
    }

    function hn() {
      return "+0000";
    }

    function yn() {
      return "%";
    }

    function dn(n) {
      return +n;
    }

    function vn(n) {
      return Math.floor(+n / 1e3);
    }
  }, {
    "d3-time": "F00f"
  }],
  "LmVV": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = p, exports.utcParse = exports.utcFormat = exports.timeParse = exports.timeFormat = void 0;
    var e,
        t,
        r,
        a,
        o,
        s = u(require("./locale.js"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function p(u) {
      return e = (0, s.default)(u), exports.timeFormat = t = e.format, exports.timeParse = r = e.parse, exports.utcFormat = a = e.utcFormat, exports.utcParse = o = e.utcParse, e;
    }

    exports.timeFormat = t, exports.timeParse = r, exports.utcFormat = a, exports.utcParse = o, p({
      dateTime: "%x, %X",
      date: "%-m/%-d/%Y",
      time: "%-I:%M:%S %p",
      periods: ["AM", "PM"],
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
  }, {
    "./locale.js": "rf9h"
  }],
  "UFnF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.isoSpecifier = void 0;

    var e = require("./defaultLocale.js"),
        t = "%Y-%m-%dT%H:%M:%S.%LZ";

    function r(e) {
      return e.toISOString();
    }

    exports.isoSpecifier = t;
    var o = Date.prototype.toISOString ? r : (0, e.utcFormat)(t),
        i = o;
    exports.default = i;
  }, {
    "./defaultLocale.js": "LmVV"
  }],
  "hAdq": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("./isoFormat.js"),
        r = require("./defaultLocale.js");

    function t(e) {
      var r = new Date(e);
      return isNaN(r) ? null : r;
    }

    var a = +new Date("2000-01-01T00:00:00.000Z") ? t : (0, r.utcParse)(e.isoSpecifier),
        s = a;
    exports.default = s;
  }, {
    "./isoFormat.js": "UFnF",
    "./defaultLocale.js": "LmVV"
  }],
  "zs1a": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "timeFormatDefaultLocale", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "timeFormat", {
      enumerable: !0,
      get: function get() {
        return e.timeFormat;
      }
    }), Object.defineProperty(exports, "timeParse", {
      enumerable: !0,
      get: function get() {
        return e.timeParse;
      }
    }), Object.defineProperty(exports, "utcFormat", {
      enumerable: !0,
      get: function get() {
        return e.utcFormat;
      }
    }), Object.defineProperty(exports, "utcParse", {
      enumerable: !0,
      get: function get() {
        return e.utcParse;
      }
    }), Object.defineProperty(exports, "timeFormatLocale", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "isoFormat", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "isoParse", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    });
    var e = a(require("./defaultLocale.js")),
        t = o(require("./locale.js")),
        r = o(require("./isoFormat.js")),
        n = o(require("./isoParse.js"));

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return u = function u() {
        return e;
      }, e;
    }

    function a(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var t = u();
      if (t && t.has(e)) return t.get(e);
      var r = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var o in e) {
        if (Object.prototype.hasOwnProperty.call(e, o)) {
          var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o];
        }
      }

      return r.default = e, t && t.set(e, r), r;
    }
  }, {
    "./defaultLocale.js": "LmVV",
    "./locale.js": "rf9h",
    "./isoFormat.js": "UFnF",
    "./isoParse.js": "hAdq"
  }],
  "QHrh": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.calendar = M, exports.default = h;

    var e = require("d3-array"),
        t = require("d3-time"),
        r = require("d3-time-format"),
        n = require("./array"),
        i = f(require("./continuous")),
        u = require("./init"),
        a = o(require("./nice"));

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function c() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return c = function c() {
        return e;
      }, e;
    }

    function f(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var t = c();
      if (t && t.has(e)) return t.get(e);
      var r = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var i in e) {
        if (Object.prototype.hasOwnProperty.call(e, i)) {
          var u = n ? Object.getOwnPropertyDescriptor(e, i) : null;
          u && (u.get || u.set) ? Object.defineProperty(r, i, u) : r[i] = e[i];
        }
      }

      return r.default = e, t && t.set(e, r), r;
    }

    var l = 1e3,
        p = 60 * l,
        d = 60 * p,
        m = 24 * d,
        s = 7 * m,
        y = 30 * m,
        v = 365 * m;

    function b(e) {
      return new Date(e);
    }

    function g(e) {
      return e instanceof Date ? +e : +new Date(+e);
    }

    function M(t, r, u, o, c, f, h, w, D) {
      var O = (0, i.default)(i.identity, i.identity),
          j = O.invert,
          k = O.domain,
          q = D(".%L"),
          P = D(":%S"),
          _ = D("%I:%M"),
          x = D("%I %p"),
          S = D("%a %d"),
          W = D("%b %d"),
          F = D("%B"),
          I = D("%Y"),
          Y = [[h, 1, l], [h, 5, 5 * l], [h, 15, 15 * l], [h, 30, 30 * l], [f, 1, p], [f, 5, 5 * p], [f, 15, 15 * p], [f, 30, 30 * p], [c, 1, d], [c, 3, 3 * d], [c, 6, 6 * d], [c, 12, 12 * d], [o, 1, m], [o, 2, 2 * m], [u, 1, s], [r, 1, y], [r, 3, 3 * y], [t, 1, v]];

      function B(e) {
        return (h(e) < e ? q : f(e) < e ? P : c(e) < e ? _ : o(e) < e ? x : r(e) < e ? u(e) < e ? S : W : t(e) < e ? F : I)(e);
      }

      function H(r, n, i, u) {
        if (null == r && (r = 10), "number" == typeof r) {
          var a = Math.abs(i - n) / r,
              o = (0, e.bisector)(function (e) {
            return e[2];
          }).right(Y, a);
          o === Y.length ? (u = (0, e.tickStep)(n / v, i / v, r), r = t) : o ? (u = (o = Y[a / Y[o - 1][2] < Y[o][2] / a ? o - 1 : o])[1], r = o[0]) : (u = Math.max((0, e.tickStep)(n, i, r), 1), r = w);
        }

        return null == u ? r : r.every(u);
      }

      return O.invert = function (e) {
        return new Date(j(e));
      }, O.domain = function (e) {
        return arguments.length ? k(n.map.call(e, g)) : k().map(b);
      }, O.ticks = function (e, t) {
        var r,
            n = k(),
            i = n[0],
            u = n[n.length - 1],
            a = u < i;
        return a && (r = i, i = u, u = r), r = (r = H(e, i, u, t)) ? r.range(i, u + 1) : [], a ? r.reverse() : r;
      }, O.tickFormat = function (e, t) {
        return null == t ? B : D(t);
      }, O.nice = function (e, t) {
        var r = k();
        return (e = H(e, r[0], r[r.length - 1], t)) ? k((0, a.default)(r, e)) : O;
      }, O.copy = function () {
        return (0, i.copy)(O, M(t, r, u, o, c, f, h, w, D));
      }, O;
    }

    function h() {
      return u.initRange.apply(M(t.timeYear, t.timeMonth, t.timeWeek, t.timeDay, t.timeHour, t.timeMinute, t.timeSecond, t.timeMillisecond, r.timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
    }
  }, {
    "d3-array": "cBuZ",
    "d3-time": "F00f",
    "d3-time-format": "zs1a",
    "./array": "lLkj",
    "./continuous": "ZpMB",
    "./init": "aZlr",
    "./nice": "gRJQ"
  }],
  "D6Mr": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i;

    var e = require("./time"),
        t = require("d3-time-format"),
        r = require("d3-time"),
        u = require("./init");

    function i() {
      return u.initRange.apply((0, e.calendar)(r.utcYear, r.utcMonth, r.utcWeek, r.utcDay, r.utcHour, r.utcMinute, r.utcSecond, r.utcMillisecond, t.utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
    }
  }, {
    "./time": "QHrh",
    "d3-time-format": "zs1a",
    "d3-time": "F00f",
    "./init": "aZlr"
  }],
  "O1DZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.copy = a, exports.default = p, exports.sequentialLog = l, exports.sequentialSymlog = c, exports.sequentialPow = s, exports.sequentialSqrt = f;

    var n = require("./continuous"),
        t = require("./init"),
        r = require("./linear"),
        e = require("./log"),
        o = require("./symlog"),
        i = require("./pow");

    function u() {
      var t,
          r,
          e,
          o,
          i,
          u = 0,
          a = 1,
          p = n.identity,
          l = !1;

      function c(n) {
        return isNaN(n = +n) ? i : p(0 === e ? .5 : (n = (o(n) - t) * e, l ? Math.max(0, Math.min(1, n)) : n));
      }

      return c.domain = function (n) {
        return arguments.length ? (t = o(u = +n[0]), r = o(a = +n[1]), e = t === r ? 0 : 1 / (r - t), c) : [u, a];
      }, c.clamp = function (n) {
        return arguments.length ? (l = !!n, c) : l;
      }, c.interpolator = function (n) {
        return arguments.length ? (p = n, c) : p;
      }, c.unknown = function (n) {
        return arguments.length ? (i = n, c) : i;
      }, function (n) {
        return o = n, t = n(u), r = n(a), e = t === r ? 0 : 1 / (r - t), c;
      };
    }

    function a(n, t) {
      return t.domain(n.domain()).interpolator(n.interpolator()).clamp(n.clamp()).unknown(n.unknown());
    }

    function p() {
      var e = (0, r.linearish)(u()(n.identity));
      return e.copy = function () {
        return a(e, p());
      }, t.initInterpolator.apply(e, arguments);
    }

    function l() {
      var n = (0, e.loggish)(u()).domain([1, 10]);
      return n.copy = function () {
        return a(n, l()).base(n.base());
      }, t.initInterpolator.apply(n, arguments);
    }

    function c() {
      var n = (0, o.symlogish)(u());
      return n.copy = function () {
        return a(n, c()).constant(n.constant());
      }, t.initInterpolator.apply(n, arguments);
    }

    function s() {
      var n = (0, i.powish)(u());
      return n.copy = function () {
        return a(n, s()).exponent(n.exponent());
      }, t.initInterpolator.apply(n, arguments);
    }

    function f() {
      return s.apply(null, arguments).exponent(.5);
    }
  }, {
    "./continuous": "ZpMB",
    "./init": "aZlr",
    "./linear": "VMtl",
    "./log": "X3YW",
    "./symlog": "Prec",
    "./pow": "ysea"
  }],
  "Y40z": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var r = require("d3-array"),
        e = require("./continuous"),
        n = require("./init");

    function t() {
      var i = [],
          u = e.identity;

      function o(e) {
        if (!isNaN(e = +e)) return u(((0, r.bisect)(i, e) - 1) / (i.length - 1));
      }

      return o.domain = function (e) {
        if (!arguments.length) return i.slice();
        i = [];

        for (var n, t = 0, u = e.length; t < u; ++t) {
          null == (n = e[t]) || isNaN(n = +n) || i.push(n);
        }

        return i.sort(r.ascending), o;
      }, o.interpolator = function (r) {
        return arguments.length ? (u = r, o) : u;
      }, o.copy = function () {
        return t(u).domain(i);
      }, n.initInterpolator.apply(o, arguments);
    }
  }, {
    "d3-array": "cBuZ",
    "./continuous": "ZpMB",
    "./init": "aZlr"
  }],
  "shE4": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = a, exports.divergingLog = c, exports.divergingSymlog = l, exports.divergingPow = s, exports.divergingSqrt = g;

    var n = require("./continuous"),
        r = require("./init"),
        t = require("./linear"),
        e = require("./log"),
        o = require("./sequential"),
        i = require("./symlog"),
        u = require("./pow");

    function p() {
      var r,
          t,
          e,
          o,
          i,
          u,
          p,
          a = 0,
          c = .5,
          l = 1,
          s = n.identity,
          g = !1;

      function y(n) {
        return isNaN(n = +n) ? p : (n = .5 + ((n = +u(n)) - t) * (n < t ? o : i), s(g ? Math.max(0, Math.min(1, n)) : n));
      }

      return y.domain = function (n) {
        return arguments.length ? (r = u(a = +n[0]), t = u(c = +n[1]), e = u(l = +n[2]), o = r === t ? 0 : .5 / (t - r), i = t === e ? 0 : .5 / (e - t), y) : [a, c, l];
      }, y.clamp = function (n) {
        return arguments.length ? (g = !!n, y) : g;
      }, y.interpolator = function (n) {
        return arguments.length ? (s = n, y) : s;
      }, y.unknown = function (n) {
        return arguments.length ? (p = n, y) : p;
      }, function (n) {
        return u = n, r = n(a), t = n(c), e = n(l), o = r === t ? 0 : .5 / (t - r), i = t === e ? 0 : .5 / (e - t), y;
      };
    }

    function a() {
      var e = (0, t.linearish)(p()(n.identity));
      return e.copy = function () {
        return (0, o.copy)(e, a());
      }, r.initInterpolator.apply(e, arguments);
    }

    function c() {
      var n = (0, e.loggish)(p()).domain([.1, 1, 10]);
      return n.copy = function () {
        return (0, o.copy)(n, c()).base(n.base());
      }, r.initInterpolator.apply(n, arguments);
    }

    function l() {
      var n = (0, i.symlogish)(p());
      return n.copy = function () {
        return (0, o.copy)(n, l()).constant(n.constant());
      }, r.initInterpolator.apply(n, arguments);
    }

    function s() {
      var n = (0, u.powish)(p());
      return n.copy = function () {
        return (0, o.copy)(n, s()).exponent(n.exponent());
      }, r.initInterpolator.apply(n, arguments);
    }

    function g() {
      return s.apply(null, arguments).exponent(.5);
    }
  }, {
    "./continuous": "ZpMB",
    "./init": "aZlr",
    "./linear": "VMtl",
    "./log": "X3YW",
    "./sequential": "O1DZ",
    "./symlog": "Prec",
    "./pow": "ysea"
  }],
  "ztAj": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "scaleBand", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "scalePoint", {
      enumerable: !0,
      get: function get() {
        return e.point;
      }
    }), Object.defineProperty(exports, "scaleIdentity", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "scaleLinear", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "scaleLog", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "scaleSymlog", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "scaleOrdinal", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), Object.defineProperty(exports, "scaleImplicit", {
      enumerable: !0,
      get: function get() {
        return i.implicit;
      }
    }), Object.defineProperty(exports, "scalePow", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "scaleSqrt", {
      enumerable: !0,
      get: function get() {
        return o.sqrt;
      }
    }), Object.defineProperty(exports, "scaleQuantile", {
      enumerable: !0,
      get: function get() {
        return l.default;
      }
    }), Object.defineProperty(exports, "scaleQuantize", {
      enumerable: !0,
      get: function get() {
        return a.default;
      }
    }), Object.defineProperty(exports, "scaleThreshold", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(exports, "scaleTime", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "scaleUtc", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    }), Object.defineProperty(exports, "scaleSequential", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(exports, "scaleSequentialLog", {
      enumerable: !0,
      get: function get() {
        return p.sequentialLog;
      }
    }), Object.defineProperty(exports, "scaleSequentialPow", {
      enumerable: !0,
      get: function get() {
        return p.sequentialPow;
      }
    }), Object.defineProperty(exports, "scaleSequentialSqrt", {
      enumerable: !0,
      get: function get() {
        return p.sequentialSqrt;
      }
    }), Object.defineProperty(exports, "scaleSequentialSymlog", {
      enumerable: !0,
      get: function get() {
        return p.sequentialSymlog;
      }
    }), Object.defineProperty(exports, "scaleSequentialQuantile", {
      enumerable: !0,
      get: function get() {
        return d.default;
      }
    }), Object.defineProperty(exports, "scaleDiverging", {
      enumerable: !0,
      get: function get() {
        return g.default;
      }
    }), Object.defineProperty(exports, "scaleDivergingLog", {
      enumerable: !0,
      get: function get() {
        return g.divergingLog;
      }
    }), Object.defineProperty(exports, "scaleDivergingPow", {
      enumerable: !0,
      get: function get() {
        return g.divergingPow;
      }
    }), Object.defineProperty(exports, "scaleDivergingSqrt", {
      enumerable: !0,
      get: function get() {
        return g.divergingSqrt;
      }
    }), Object.defineProperty(exports, "scaleDivergingSymlog", {
      enumerable: !0,
      get: function get() {
        return g.divergingSymlog;
      }
    }), Object.defineProperty(exports, "tickFormat", {
      enumerable: !0,
      get: function get() {
        return b.default;
      }
    });
    var e = P(require("./band")),
        t = y(require("./identity")),
        r = y(require("./linear")),
        n = y(require("./log")),
        u = y(require("./symlog")),
        i = P(require("./ordinal")),
        o = P(require("./pow")),
        l = y(require("./quantile")),
        a = y(require("./quantize")),
        c = y(require("./threshold")),
        f = y(require("./time")),
        s = y(require("./utcTime")),
        p = P(require("./sequential")),
        d = y(require("./sequentialQuantile")),
        g = P(require("./diverging")),
        b = y(require("./tickFormat"));

    function y(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function m() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return m = function m() {
        return e;
      }, e;
    }

    function P(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var t = m();
      if (t && t.has(e)) return t.get(e);
      var r = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var u in e) {
        if (Object.prototype.hasOwnProperty.call(e, u)) {
          var i = n ? Object.getOwnPropertyDescriptor(e, u) : null;
          i && (i.get || i.set) ? Object.defineProperty(r, u, i) : r[u] = e[u];
        }
      }

      return r.default = e, t && t.set(e, r), r;
    }
  }, {
    "./band": "rJZF",
    "./identity": "eP89",
    "./linear": "VMtl",
    "./log": "X3YW",
    "./symlog": "Prec",
    "./ordinal": "ELIM",
    "./pow": "ysea",
    "./quantile": "fsZk",
    "./quantize": "Z2cL",
    "./threshold": "odYE",
    "./time": "QHrh",
    "./utcTime": "D6Mr",
    "./sequential": "O1DZ",
    "./sequentialQuantile": "Y40z",
    "./diverging": "shE4",
    "./tickFormat": "m0SA"
  }],
  "e9Ar": [function (require, module, exports) {
    "use strict";

    function e(e) {
      for (var r = e.length / 6 | 0, t = new Array(r), n = 0; n < r;) {
        t[n] = "#" + e.slice(6 * n, 6 * ++n);
      }

      return t;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "PcKk": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = f(require("../colors.js"));

    function f(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = (0, e.default)("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
    exports.default = r;
  }, {
    "../colors.js": "e9Ar"
  }],
  "TXTC": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = f(require("../colors.js"));

    function f(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = (0, e.default)("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");
    exports.default = r;
  }, {
    "../colors.js": "e9Ar"
  }],
  "MCH8": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = r(require("../colors.js"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var t = (0, e.default)("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");
    exports.default = t;
  }, {
    "../colors.js": "e9Ar"
  }],
  "bH6q": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = f(require("../colors.js"));

    function f(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var a = (0, e.default)("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");
    exports.default = a;
  }, {
    "../colors.js": "e9Ar"
  }],
  "GbCC": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = f(require("../colors.js"));

    function f(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var d = (0, e.default)("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");
    exports.default = d;
  }, {
    "../colors.js": "e9Ar"
  }],
  "SQbk": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = c(require("../colors.js"));

    function c(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var f = (0, e.default)("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");
    exports.default = f;
  }, {
    "../colors.js": "e9Ar"
  }],
  "J0nH": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = f(require("../colors.js"));

    function f(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = (0, e.default)("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");
    exports.default = r;
  }, {
    "../colors.js": "e9Ar"
  }],
  "rdh9": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = r(require("../colors.js"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var t = (0, e.default)("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");
    exports.default = t;
  }, {
    "../colors.js": "e9Ar"
  }],
  "o5xs": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = d(require("../colors.js"));

    function d(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var f = (0, e.default)("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");
    exports.default = f;
  }, {
    "../colors.js": "e9Ar"
  }],
  "n6R9": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = a(require("../colors.js"));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = (0, e.default)("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
    exports.default = r;
  }, {
    "../colors.js": "e9Ar"
  }],
  "tFWC": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = require("d3-interpolate");

    function t(t) {
      return (0, e.interpolateRgbBasis)(t[t.length - 1]);
    }
  }, {
    "d3-interpolate": "mkGF"
  }],
  "kmpN": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var e = f(require("../colors.js")),
        c = f(require("../ramp.js"));

    function f(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var a = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(e.default);
    exports.scheme = a;
    var d = (0, c.default)(a);
    exports.default = d;
  }, {
    "../colors.js": "e9Ar",
    "../ramp.js": "tFWC"
  }],
  "Hn8a": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var a = f(require("../colors.js")),
        e = f(require("../ramp.js"));

    function f(a) {
      return a && a.__esModule ? a : {
        default: a
      };
    }

    var d = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(a.default);
    exports.scheme = d;
    var b = (0, e.default)(d);
    exports.default = b;
  }, {
    "../colors.js": "e9Ar",
    "../ramp.js": "tFWC"
  }],
  "cCiT": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var e = f(require("../colors.js")),
        d = f(require("../ramp.js"));

    function f(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var a = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(e.default);
    exports.scheme = a;
    var b = (0, d.default)(a);
    exports.default = b;
  }, {
    "../colors.js": "e9Ar",
    "../ramp.js": "tFWC"
  }],
  "k6z3": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var e = f(require("../colors.js")),
        b = f(require("../ramp.js"));

    function f(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var d = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(e.default);
    exports.scheme = d;
    var a = (0, b.default)(d);
    exports.default = a;
  }, {
    "../colors.js": "e9Ar",
    "../ramp.js": "tFWC"
  }],
  "sNFa": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var f = d(require("../colors.js")),
        e = d(require("../ramp.js"));

    function d(f) {
      return f && f.__esModule ? f : {
        default: f
      };
    }

    var c = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(f.default);
    exports.scheme = c;
    var a = (0, e.default)(c);
    exports.default = a;
  }, {
    "../colors.js": "e9Ar",
    "../ramp.js": "tFWC"
  }],
  "mrMT": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var f = a(require("../colors.js")),
        e = a(require("../ramp.js"));

    function a(f) {
      return f && f.__esModule ? f : {
        default: f
      };
    }

    var d = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(f.default);
    exports.scheme = d;
    var b = (0, e.default)(d);
    exports.default = b;
  }, {
    "../colors.js": "e9Ar",
    "../ramp.js": "tFWC"
  }],
  "uyGf": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var f = d(require("../colors.js")),
        e = d(require("../ramp.js"));

    function d(f) {
      return f && f.__esModule ? f : {
        default: f
      };
    }

    var a = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(f.default);
    exports.scheme = a;
    var b = (0, e.default)(a);
    exports.default = b;
  }, {
    "../colors.js": "e9Ar",
    "../ramp.js": "tFWC"
  }],
  "Dt8k": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var f = d(require("../colors.js")),
        e = d(require("../ramp.js"));

    function d(f) {
      return f && f.__esModule ? f : {
        default: f
      };
    }

    var a = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(f.default);
    exports.scheme = a;
    var b = (0, e.default)(a);
    exports.default = b;
  }, {
    "../colors.js": "e9Ar",
    "../ramp.js": "tFWC"
  }],
  "eSjI": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var f = d(require("../colors.js")),
        e = d(require("../ramp.js"));

    function d(f) {
      return f && f.__esModule ? f : {
        default: f
      };
    }

    var a = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(f.default);
    exports.scheme = a;
    var b = (0, e.default)(a);
    exports.default = b;
  }, {
    "../colors.js": "e9Ar",
    "../ramp.js": "tFWC"
  }],
  "L6xI": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var e = f(require("../colors.js")),
        c = f(require("../ramp.js"));

    function f(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var a = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(e.default);
    exports.scheme = a;
    var d = (0, c.default)(a);
    exports.default = d;
  }, {
    "../colors.js": "e9Ar",
    "../ramp.js": "tFWC"
  }],
  "JRrn": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var e = d(require("../colors.js")),
        c = d(require("../ramp.js"));

    function d(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var f = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(e.default);
    exports.scheme = f;
    var b = (0, c.default)(f);
    exports.default = b;
  }, {
    "../colors.js": "e9Ar",
    "../ramp.js": "tFWC"
  }],
  "j1fD": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var c = b(require("../colors.js")),
        e = b(require("../ramp.js"));

    function b(c) {
      return c && c.__esModule ? c : {
        default: c
      };
    }

    var a = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(c.default);
    exports.scheme = a;
    var d = (0, e.default)(a);
    exports.default = d;
  }, {
    "../colors.js": "e9Ar",
    "../ramp.js": "tFWC"
  }],
  "nTZ4": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var e = d(require("../colors.js")),
        f = d(require("../ramp.js"));

    function d(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var c = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(e.default);
    exports.scheme = c;
    var r = (0, f.default)(c);
    exports.default = r;
  }, {
    "../colors.js": "e9Ar",
    "../ramp.js": "tFWC"
  }],
  "B5MD": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var e = d(require("../colors.js")),
        f = d(require("../ramp.js"));

    function d(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var a = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(e.default);
    exports.scheme = a;
    var c = (0, f.default)(a);
    exports.default = c;
  }, {
    "../colors.js": "e9Ar",
    "../ramp.js": "tFWC"
  }],
  "NAcy": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var e = f(require("../colors.js")),
        d = f(require("../ramp.js"));

    function f(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var a = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(e.default);
    exports.scheme = a;
    var b = (0, d.default)(a);
    exports.default = b;
  }, {
    "../colors.js": "e9Ar",
    "../ramp.js": "tFWC"
  }],
  "DZXx": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var e = f(require("../colors.js")),
        d = f(require("../ramp.js"));

    function f(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var c = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(e.default);
    exports.scheme = c;
    var r = (0, d.default)(c);
    exports.default = r;
  }, {
    "../colors.js": "e9Ar",
    "../ramp.js": "tFWC"
  }],
  "aTUg": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var e = a(require("../colors.js")),
        f = a(require("../ramp.js"));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var d = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(e.default);
    exports.scheme = d;
    var c = (0, f.default)(d);
    exports.default = c;
  }, {
    "../colors.js": "e9Ar",
    "../ramp.js": "tFWC"
  }],
  "et2z": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var f = e(require("../colors.js")),
        c = e(require("../ramp.js"));

    function e(f) {
      return f && f.__esModule ? f : {
        default: f
      };
    }

    var b = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(f.default);
    exports.scheme = b;
    var d = (0, c.default)(b);
    exports.default = d;
  }, {
    "../colors.js": "e9Ar",
    "../ramp.js": "tFWC"
  }],
  "lF8J": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var f = d(require("../colors.js")),
        e = d(require("../ramp.js"));

    function d(f) {
      return f && f.__esModule ? f : {
        default: f
      };
    }

    var a = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(f.default);
    exports.scheme = a;
    var c = (0, e.default)(a);
    exports.default = c;
  }, {
    "../colors.js": "e9Ar",
    "../ramp.js": "tFWC"
  }],
  "aI9y": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var f = c(require("../colors.js")),
        e = c(require("../ramp.js"));

    function c(f) {
      return f && f.__esModule ? f : {
        default: f
      };
    }

    var r = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(f.default);
    exports.scheme = r;
    var d = (0, e.default)(r);
    exports.default = d;
  }, {
    "../colors.js": "e9Ar",
    "../ramp.js": "tFWC"
  }],
  "JWLI": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var f = c(require("../colors.js")),
        e = c(require("../ramp.js"));

    function c(f) {
      return f && f.__esModule ? f : {
        default: f
      };
    }

    var d = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(f.default);
    exports.scheme = d;
    var a = (0, e.default)(d);
    exports.default = a;
  }, {
    "../colors.js": "e9Ar",
    "../ramp.js": "tFWC"
  }],
  "b4OA": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var e = d(require("../colors.js")),
        f = d(require("../ramp.js"));

    function d(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var b = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(e.default);
    exports.scheme = b;
    var a = (0, f.default)(b);
    exports.default = a;
  }, {
    "../colors.js": "e9Ar",
    "../ramp.js": "tFWC"
  }],
  "NKRR": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var e = c(require("../colors.js")),
        a = c(require("../ramp.js"));

    function c(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var d = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(e.default);
    exports.scheme = d;
    var r = (0, a.default)(d);
    exports.default = r;
  }, {
    "../colors.js": "e9Ar",
    "../ramp.js": "tFWC"
  }],
  "jAVD": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var f = e(require("../colors.js")),
        d = e(require("../ramp.js"));

    function e(f) {
      return f && f.__esModule ? f : {
        default: f
      };
    }

    var r = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(f.default);
    exports.scheme = r;
    var c = (0, d.default)(r);
    exports.default = c;
  }, {
    "../colors.js": "e9Ar",
    "../ramp.js": "tFWC"
  }],
  "Emw5": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var e = d(require("../colors.js")),
        a = d(require("../ramp.js"));

    function d(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var f = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(e.default);
    exports.scheme = f;
    var c = (0, a.default)(f);
    exports.default = c;
  }, {
    "../colors.js": "e9Ar",
    "../ramp.js": "tFWC"
  }],
  "wB2L": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var e = a(require("../colors.js")),
        f = a(require("../ramp.js"));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var d = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(e.default);
    exports.scheme = d;
    var c = (0, f.default)(d);
    exports.default = c;
  }, {
    "../colors.js": "e9Ar",
    "../ramp.js": "tFWC"
  }],
  "wV9s": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var e = f(require("../colors.js")),
        d = f(require("../ramp.js"));

    function f(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var a = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(e.default);
    exports.scheme = a;
    var r = (0, d.default)(a);
    exports.default = r;
  }, {
    "../colors.js": "e9Ar",
    "../ramp.js": "tFWC"
  }],
  "w3gC": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return t = Math.max(0, Math.min(1, t)), "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t * (35.34 - t * (2381.73 - t * (6402.7 - t * (7024.72 - 2710.57 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t * (170.73 + t * (52.82 - t * (131.46 - t * (176.58 - 67.37 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t * (442.36 - t * (2482.43 - t * (6167.24 - t * (6614.94 - 2475.67 * t))))))) + ")";
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "Spoc": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("d3-color"),
        r = require("d3-interpolate"),
        t = (0, r.interpolateCubehelixLong)((0, e.cubehelix)(300, .5, 0), (0, e.cubehelix)(-240, .5, 1));

    exports.default = t;
  }, {
    "d3-color": "TJ2K",
    "d3-interpolate": "mkGF"
  }],
  "pM5F": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i, exports.cool = exports.warm = void 0;

    var e = require("d3-color"),
        r = require("d3-interpolate"),
        o = (0, r.interpolateCubehelixLong)((0, e.cubehelix)(-100, .75, .35), (0, e.cubehelix)(80, 1.5, .8));

    exports.warm = o;
    var t = (0, r.interpolateCubehelixLong)((0, e.cubehelix)(260, .75, .35), (0, e.cubehelix)(80, 1.5, .8));
    exports.cool = t;
    var l = (0, e.cubehelix)();

    function i(e) {
      (e < 0 || e > 1) && (e -= Math.floor(e));
      var r = Math.abs(e - .5);
      return l.h = 360 * e - 100, l.s = 1.5 - 1.5 * r, l.l = .8 - .9 * r, l + "";
    }
  }, {
    "d3-color": "TJ2K",
    "d3-interpolate": "mkGF"
  }],
  "dT4l": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = s;

    var t = require("d3-color"),
        e = (0, t.rgb)(),
        r = Math.PI / 3,
        a = 2 * Math.PI / 3;

    function s(t) {
      var s;
      return t = (.5 - t) * Math.PI, e.r = 255 * (s = Math.sin(t)) * s, e.g = 255 * (s = Math.sin(t + r)) * s, e.b = 255 * (s = Math.sin(t + a)) * s, e + "";
    }
  }, {
    "d3-color": "TJ2K"
  }],
  "Wgpo": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return t = Math.max(0, Math.min(1, t)), "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t * (1172.33 - t * (10793.56 - t * (33300.12 - t * (38394.49 - 14825.05 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t * (557.33 + t * (1225.33 - t * (3574.96 - t * (1073.77 + 707.56 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t * (3211.1 - t * (15327.97 - t * (27814 - t * (22569.18 - 6838.66 * t))))))) + ")";
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "kmxq": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.plasma = exports.inferno = exports.magma = exports.default = void 0;
    var f = e(require("../colors.js"));

    function e(f) {
      return f && f.__esModule ? f : {
        default: f
      };
    }

    function a(f) {
      var e = f.length;
      return function (a) {
        return f[Math.max(0, Math.min(e - 1, Math.floor(a * e)))];
      };
    }

    var d = a((0, f.default)("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
    exports.default = d;
    var c = a((0, f.default)("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
    exports.magma = c;
    var b = a((0, f.default)("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
    exports.inferno = b;
    var r = a((0, f.default)("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
    exports.plasma = r;
  }, {
    "../colors.js": "e9Ar"
  }],
  "zd6o": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "schemeCategory10", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "schemeAccent", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "schemeDark2", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "schemePaired", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "schemePastel1", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "schemePastel2", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), Object.defineProperty(exports, "schemeSet1", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "schemeSet2", {
      enumerable: !0,
      get: function get() {
        return l.default;
      }
    }), Object.defineProperty(exports, "schemeSet3", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(exports, "schemeTableau10", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    }), Object.defineProperty(exports, "interpolateBrBG", {
      enumerable: !0,
      get: function get() {
        return a.default;
      }
    }), Object.defineProperty(exports, "schemeBrBG", {
      enumerable: !0,
      get: function get() {
        return a.scheme;
      }
    }), Object.defineProperty(exports, "interpolatePRGn", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "schemePRGn", {
      enumerable: !0,
      get: function get() {
        return f.scheme;
      }
    }), Object.defineProperty(exports, "interpolatePiYG", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(exports, "schemePiYG", {
      enumerable: !0,
      get: function get() {
        return p.scheme;
      }
    }), Object.defineProperty(exports, "interpolatePuOr", {
      enumerable: !0,
      get: function get() {
        return d.default;
      }
    }), Object.defineProperty(exports, "schemePuOr", {
      enumerable: !0,
      get: function get() {
        return d.scheme;
      }
    }), Object.defineProperty(exports, "interpolateRdBu", {
      enumerable: !0,
      get: function get() {
        return b.default;
      }
    }), Object.defineProperty(exports, "schemeRdBu", {
      enumerable: !0,
      get: function get() {
        return b.scheme;
      }
    }), Object.defineProperty(exports, "interpolateRdGy", {
      enumerable: !0,
      get: function get() {
        return m.default;
      }
    }), Object.defineProperty(exports, "schemeRdGy", {
      enumerable: !0,
      get: function get() {
        return m.scheme;
      }
    }), Object.defineProperty(exports, "interpolateRdYlBu", {
      enumerable: !0,
      get: function get() {
        return j.default;
      }
    }), Object.defineProperty(exports, "schemeRdYlBu", {
      enumerable: !0,
      get: function get() {
        return j.scheme;
      }
    }), Object.defineProperty(exports, "interpolateRdYlGn", {
      enumerable: !0,
      get: function get() {
        return g.default;
      }
    }), Object.defineProperty(exports, "schemeRdYlGn", {
      enumerable: !0,
      get: function get() {
        return g.scheme;
      }
    }), Object.defineProperty(exports, "interpolateSpectral", {
      enumerable: !0,
      get: function get() {
        return P.default;
      }
    }), Object.defineProperty(exports, "schemeSpectral", {
      enumerable: !0,
      get: function get() {
        return P.scheme;
      }
    }), Object.defineProperty(exports, "interpolateBuGn", {
      enumerable: !0,
      get: function get() {
        return O.default;
      }
    }), Object.defineProperty(exports, "schemeBuGn", {
      enumerable: !0,
      get: function get() {
        return O.scheme;
      }
    }), Object.defineProperty(exports, "interpolateBuPu", {
      enumerable: !0,
      get: function get() {
        return y.default;
      }
    }), Object.defineProperty(exports, "schemeBuPu", {
      enumerable: !0,
      get: function get() {
        return y.scheme;
      }
    }), Object.defineProperty(exports, "interpolateGnBu", {
      enumerable: !0,
      get: function get() {
        return x.default;
      }
    }), Object.defineProperty(exports, "schemeGnBu", {
      enumerable: !0,
      get: function get() {
        return x.scheme;
      }
    }), Object.defineProperty(exports, "interpolateOrRd", {
      enumerable: !0,
      get: function get() {
        return h.default;
      }
    }), Object.defineProperty(exports, "schemeOrRd", {
      enumerable: !0,
      get: function get() {
        return h.scheme;
      }
    }), Object.defineProperty(exports, "interpolatePuBuGn", {
      enumerable: !0,
      get: function get() {
        return q.default;
      }
    }), Object.defineProperty(exports, "schemePuBuGn", {
      enumerable: !0,
      get: function get() {
        return q.scheme;
      }
    }), Object.defineProperty(exports, "interpolatePuBu", {
      enumerable: !0,
      get: function get() {
        return B.default;
      }
    }), Object.defineProperty(exports, "schemePuBu", {
      enumerable: !0,
      get: function get() {
        return B.scheme;
      }
    }), Object.defineProperty(exports, "interpolatePuRd", {
      enumerable: !0,
      get: function get() {
        return G.default;
      }
    }), Object.defineProperty(exports, "schemePuRd", {
      enumerable: !0,
      get: function get() {
        return G.scheme;
      }
    }), Object.defineProperty(exports, "interpolateRdPu", {
      enumerable: !0,
      get: function get() {
        return R.default;
      }
    }), Object.defineProperty(exports, "schemeRdPu", {
      enumerable: !0,
      get: function get() {
        return R.scheme;
      }
    }), Object.defineProperty(exports, "interpolateYlGnBu", {
      enumerable: !0,
      get: function get() {
        return Y.default;
      }
    }), Object.defineProperty(exports, "schemeYlGnBu", {
      enumerable: !0,
      get: function get() {
        return Y.scheme;
      }
    }), Object.defineProperty(exports, "interpolateYlGn", {
      enumerable: !0,
      get: function get() {
        return v.default;
      }
    }), Object.defineProperty(exports, "schemeYlGn", {
      enumerable: !0,
      get: function get() {
        return v.scheme;
      }
    }), Object.defineProperty(exports, "interpolateYlOrBr", {
      enumerable: !0,
      get: function get() {
        return S.default;
      }
    }), Object.defineProperty(exports, "schemeYlOrBr", {
      enumerable: !0,
      get: function get() {
        return S.scheme;
      }
    }), Object.defineProperty(exports, "interpolateYlOrRd", {
      enumerable: !0,
      get: function get() {
        return w.default;
      }
    }), Object.defineProperty(exports, "schemeYlOrRd", {
      enumerable: !0,
      get: function get() {
        return w.scheme;
      }
    }), Object.defineProperty(exports, "interpolateBlues", {
      enumerable: !0,
      get: function get() {
        return M.default;
      }
    }), Object.defineProperty(exports, "schemeBlues", {
      enumerable: !0,
      get: function get() {
        return M.scheme;
      }
    }), Object.defineProperty(exports, "interpolateGreens", {
      enumerable: !0,
      get: function get() {
        return _.default;
      }
    }), Object.defineProperty(exports, "schemeGreens", {
      enumerable: !0,
      get: function get() {
        return _.scheme;
      }
    }), Object.defineProperty(exports, "interpolateGreys", {
      enumerable: !0,
      get: function get() {
        return D.default;
      }
    }), Object.defineProperty(exports, "schemeGreys", {
      enumerable: !0,
      get: function get() {
        return D.scheme;
      }
    }), Object.defineProperty(exports, "interpolatePurples", {
      enumerable: !0,
      get: function get() {
        return k.default;
      }
    }), Object.defineProperty(exports, "schemePurples", {
      enumerable: !0,
      get: function get() {
        return k.scheme;
      }
    }), Object.defineProperty(exports, "interpolateReds", {
      enumerable: !0,
      get: function get() {
        return C.default;
      }
    }), Object.defineProperty(exports, "schemeReds", {
      enumerable: !0,
      get: function get() {
        return C.scheme;
      }
    }), Object.defineProperty(exports, "interpolateOranges", {
      enumerable: !0,
      get: function get() {
        return T.default;
      }
    }), Object.defineProperty(exports, "schemeOranges", {
      enumerable: !0,
      get: function get() {
        return T.scheme;
      }
    }), Object.defineProperty(exports, "interpolateCividis", {
      enumerable: !0,
      get: function get() {
        return W.default;
      }
    }), Object.defineProperty(exports, "interpolateCubehelixDefault", {
      enumerable: !0,
      get: function get() {
        return A.default;
      }
    }), Object.defineProperty(exports, "interpolateRainbow", {
      enumerable: !0,
      get: function get() {
        return I.default;
      }
    }), Object.defineProperty(exports, "interpolateWarm", {
      enumerable: !0,
      get: function get() {
        return I.warm;
      }
    }), Object.defineProperty(exports, "interpolateCool", {
      enumerable: !0,
      get: function get() {
        return I.cool;
      }
    }), Object.defineProperty(exports, "interpolateSinebow", {
      enumerable: !0,
      get: function get() {
        return V.default;
      }
    }), Object.defineProperty(exports, "interpolateTurbo", {
      enumerable: !0,
      get: function get() {
        return z.default;
      }
    }), Object.defineProperty(exports, "interpolateViridis", {
      enumerable: !0,
      get: function get() {
        return E.default;
      }
    }), Object.defineProperty(exports, "interpolateMagma", {
      enumerable: !0,
      get: function get() {
        return E.magma;
      }
    }), Object.defineProperty(exports, "interpolateInferno", {
      enumerable: !0,
      get: function get() {
        return E.inferno;
      }
    }), Object.defineProperty(exports, "interpolatePlasma", {
      enumerable: !0,
      get: function get() {
        return E.plasma;
      }
    });

    var e = J(require("./categorical/category10.js")),
        t = J(require("./categorical/Accent.js")),
        r = J(require("./categorical/Dark2.js")),
        n = J(require("./categorical/Paired.js")),
        u = J(require("./categorical/Pastel1.js")),
        i = J(require("./categorical/Pastel2.js")),
        o = J(require("./categorical/Set1.js")),
        l = J(require("./categorical/Set2.js")),
        c = J(require("./categorical/Set3.js")),
        s = J(require("./categorical/Tableau10.js")),
        a = H(require("./diverging/BrBG.js")),
        f = H(require("./diverging/PRGn.js")),
        p = H(require("./diverging/PiYG.js")),
        d = H(require("./diverging/PuOr.js")),
        b = H(require("./diverging/RdBu.js")),
        m = H(require("./diverging/RdGy.js")),
        j = H(require("./diverging/RdYlBu.js")),
        g = H(require("./diverging/RdYlGn.js")),
        P = H(require("./diverging/Spectral.js")),
        O = H(require("./sequential-multi/BuGn.js")),
        y = H(require("./sequential-multi/BuPu.js")),
        x = H(require("./sequential-multi/GnBu.js")),
        h = H(require("./sequential-multi/OrRd.js")),
        q = H(require("./sequential-multi/PuBuGn.js")),
        B = H(require("./sequential-multi/PuBu.js")),
        G = H(require("./sequential-multi/PuRd.js")),
        R = H(require("./sequential-multi/RdPu.js")),
        Y = H(require("./sequential-multi/YlGnBu.js")),
        v = H(require("./sequential-multi/YlGn.js")),
        S = H(require("./sequential-multi/YlOrBr.js")),
        w = H(require("./sequential-multi/YlOrRd.js")),
        M = H(require("./sequential-single/Blues.js")),
        _ = H(require("./sequential-single/Greens.js")),
        D = H(require("./sequential-single/Greys.js")),
        k = H(require("./sequential-single/Purples.js")),
        C = H(require("./sequential-single/Reds.js")),
        T = H(require("./sequential-single/Oranges.js")),
        W = J(require("./sequential-multi/cividis.js")),
        A = J(require("./sequential-multi/cubehelix.js")),
        I = H(require("./sequential-multi/rainbow.js")),
        V = J(require("./sequential-multi/sinebow.js")),
        z = J(require("./sequential-multi/turbo.js")),
        E = H(require("./sequential-multi/viridis.js"));

    function F() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return F = function F() {
        return e;
      }, e;
    }

    function H(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var t = F();
      if (t && t.has(e)) return t.get(e);
      var r = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var u in e) {
        if (Object.prototype.hasOwnProperty.call(e, u)) {
          var i = n ? Object.getOwnPropertyDescriptor(e, u) : null;
          i && (i.get || i.set) ? Object.defineProperty(r, u, i) : r[u] = e[u];
        }
      }

      return r.default = e, t && t.set(e, r), r;
    }

    function J(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./categorical/category10.js": "PcKk",
    "./categorical/Accent.js": "TXTC",
    "./categorical/Dark2.js": "MCH8",
    "./categorical/Paired.js": "bH6q",
    "./categorical/Pastel1.js": "GbCC",
    "./categorical/Pastel2.js": "SQbk",
    "./categorical/Set1.js": "J0nH",
    "./categorical/Set2.js": "rdh9",
    "./categorical/Set3.js": "o5xs",
    "./categorical/Tableau10.js": "n6R9",
    "./diverging/BrBG.js": "kmpN",
    "./diverging/PRGn.js": "Hn8a",
    "./diverging/PiYG.js": "cCiT",
    "./diverging/PuOr.js": "k6z3",
    "./diverging/RdBu.js": "sNFa",
    "./diverging/RdGy.js": "mrMT",
    "./diverging/RdYlBu.js": "uyGf",
    "./diverging/RdYlGn.js": "Dt8k",
    "./diverging/Spectral.js": "eSjI",
    "./sequential-multi/BuGn.js": "L6xI",
    "./sequential-multi/BuPu.js": "JRrn",
    "./sequential-multi/GnBu.js": "j1fD",
    "./sequential-multi/OrRd.js": "nTZ4",
    "./sequential-multi/PuBuGn.js": "B5MD",
    "./sequential-multi/PuBu.js": "NAcy",
    "./sequential-multi/PuRd.js": "DZXx",
    "./sequential-multi/RdPu.js": "aTUg",
    "./sequential-multi/YlGnBu.js": "et2z",
    "./sequential-multi/YlGn.js": "lF8J",
    "./sequential-multi/YlOrBr.js": "aI9y",
    "./sequential-multi/YlOrRd.js": "JWLI",
    "./sequential-single/Blues.js": "b4OA",
    "./sequential-single/Greens.js": "NKRR",
    "./sequential-single/Greys.js": "jAVD",
    "./sequential-single/Purples.js": "Emw5",
    "./sequential-single/Reds.js": "wB2L",
    "./sequential-single/Oranges.js": "wV9s",
    "./sequential-multi/cividis.js": "w3gC",
    "./sequential-multi/cubehelix.js": "Spoc",
    "./sequential-multi/rainbow.js": "pM5F",
    "./sequential-multi/sinebow.js": "dT4l",
    "./sequential-multi/turbo.js": "Wgpo",
    "./sequential-multi/viridis.js": "kmxq"
  }],
  "R8vA": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.acos = h, exports.asin = M, exports.tau = exports.halfPi = exports.pi = exports.epsilon = exports.sqrt = exports.sin = exports.min = exports.max = exports.cos = exports.atan2 = exports.abs = void 0;
    var t = Math.abs;
    exports.abs = t;
    var r = Math.atan2;
    exports.atan2 = r;
    var s = Math.cos;
    exports.cos = s;
    var a = Math.max;
    exports.max = a;
    var e = Math.min;
    exports.min = e;
    var o = Math.sin;
    exports.sin = o;
    var p = Math.sqrt;
    exports.sqrt = p;
    var x = 1e-12;
    exports.epsilon = x;
    var n = Math.PI;
    exports.pi = n;
    var i = n / 2;
    exports.halfPi = i;
    var v = 2 * n;

    function h(t) {
      return t > 1 ? 0 : t < -1 ? n : Math.acos(t);
    }

    function M(t) {
      return t >= 1 ? i : t <= -1 ? -i : Math.asin(t);
    }

    exports.tau = v;
  }, {}],
  "TV07": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = f;

    var n = require("d3-path"),
        t = a(require("./constant.js")),
        e = require("./math.js");

    function a(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    function i(n) {
      return n.innerRadius;
    }

    function r(n) {
      return n.outerRadius;
    }

    function o(n) {
      return n.startAngle;
    }

    function c(n) {
      return n.endAngle;
    }

    function u(n) {
      return n && n.padAngle;
    }

    function l(n, t, a, i, r, o, c, u) {
      var l = a - n,
          s = i - t,
          f = c - r,
          p = u - o,
          y = p * l - f * s;
      if (!(y * y < e.epsilon)) return [n + (y = (f * (t - o) - p * (n - r)) / y) * l, t + y * s];
    }

    function s(n, t, a, i, r, o, c) {
      var u = n - a,
          l = t - i,
          s = (c ? o : -o) / (0, e.sqrt)(u * u + l * l),
          f = s * l,
          p = -s * u,
          y = n + f,
          x = t + p,
          d = a + f,
          h = i + p,
          v = (y + d) / 2,
          g = (x + h) / 2,
          m = d - y,
          q = h - x,
          T = m * m + q * q,
          A = r - o,
          R = y * h - d * x,
          P = (q < 0 ? -1 : 1) * (0, e.sqrt)((0, e.max)(0, A * A * T - R * R)),
          _ = (R * q - m * P) / T,
          b = (-R * m - q * P) / T,
          j = (R * q + m * P) / T,
          M = (-R * m + q * P) / T,
          O = _ - v,
          k = b - g,
          w = j - v,
          z = M - g;

      return O * O + k * k > w * w + z * z && (_ = j, b = M), {
        cx: _,
        cy: b,
        x01: -f,
        y01: -p,
        x11: _ * (r / A - 1),
        y11: b * (r / A - 1)
      };
    }

    function f() {
      var a = i,
          f = r,
          p = (0, t.default)(0),
          y = null,
          x = o,
          d = c,
          h = u,
          v = null;

      function g() {
        var t,
            i,
            r = +a.apply(this, arguments),
            o = +f.apply(this, arguments),
            c = x.apply(this, arguments) - e.halfPi,
            u = d.apply(this, arguments) - e.halfPi,
            g = (0, e.abs)(u - c),
            m = u > c;
        if (v || (v = t = (0, n.path)()), o < r && (i = o, o = r, r = i), o > e.epsilon) {
          if (g > e.tau - e.epsilon) v.moveTo(o * (0, e.cos)(c), o * (0, e.sin)(c)), v.arc(0, 0, o, c, u, !m), r > e.epsilon && (v.moveTo(r * (0, e.cos)(u), r * (0, e.sin)(u)), v.arc(0, 0, r, u, c, m));else {
            var q,
                T,
                A = c,
                R = u,
                P = c,
                _ = u,
                b = g,
                j = g,
                M = h.apply(this, arguments) / 2,
                O = M > e.epsilon && (y ? +y.apply(this, arguments) : (0, e.sqrt)(r * r + o * o)),
                k = (0, e.min)((0, e.abs)(o - r) / 2, +p.apply(this, arguments)),
                w = k,
                z = k;

            if (O > e.epsilon) {
              var B = (0, e.asin)(O / r * (0, e.sin)(M)),
                  C = (0, e.asin)(O / o * (0, e.sin)(M));
              (b -= 2 * B) > e.epsilon ? (P += B *= m ? 1 : -1, _ -= B) : (b = 0, P = _ = (c + u) / 2), (j -= 2 * C) > e.epsilon ? (A += C *= m ? 1 : -1, R -= C) : (j = 0, A = R = (c + u) / 2);
            }

            var D = o * (0, e.cos)(A),
                E = o * (0, e.sin)(A),
                F = r * (0, e.cos)(_),
                G = r * (0, e.sin)(_);

            if (k > e.epsilon) {
              var H,
                  I = o * (0, e.cos)(R),
                  J = o * (0, e.sin)(R),
                  K = r * (0, e.cos)(P),
                  L = r * (0, e.sin)(P);

              if (g < e.pi && (H = l(D, E, K, L, I, J, F, G))) {
                var N = D - H[0],
                    Q = E - H[1],
                    S = I - H[0],
                    U = J - H[1],
                    V = 1 / (0, e.sin)((0, e.acos)((N * S + Q * U) / ((0, e.sqrt)(N * N + Q * Q) * (0, e.sqrt)(S * S + U * U))) / 2),
                    W = (0, e.sqrt)(H[0] * H[0] + H[1] * H[1]);
                w = (0, e.min)(k, (r - W) / (V - 1)), z = (0, e.min)(k, (o - W) / (V + 1));
              }
            }

            j > e.epsilon ? z > e.epsilon ? (q = s(K, L, D, E, o, z, m), T = s(I, J, F, G, o, z, m), v.moveTo(q.cx + q.x01, q.cy + q.y01), z < k ? v.arc(q.cx, q.cy, z, (0, e.atan2)(q.y01, q.x01), (0, e.atan2)(T.y01, T.x01), !m) : (v.arc(q.cx, q.cy, z, (0, e.atan2)(q.y01, q.x01), (0, e.atan2)(q.y11, q.x11), !m), v.arc(0, 0, o, (0, e.atan2)(q.cy + q.y11, q.cx + q.x11), (0, e.atan2)(T.cy + T.y11, T.cx + T.x11), !m), v.arc(T.cx, T.cy, z, (0, e.atan2)(T.y11, T.x11), (0, e.atan2)(T.y01, T.x01), !m))) : (v.moveTo(D, E), v.arc(0, 0, o, A, R, !m)) : v.moveTo(D, E), r > e.epsilon && b > e.epsilon ? w > e.epsilon ? (q = s(F, G, I, J, r, -w, m), T = s(D, E, K, L, r, -w, m), v.lineTo(q.cx + q.x01, q.cy + q.y01), w < k ? v.arc(q.cx, q.cy, w, (0, e.atan2)(q.y01, q.x01), (0, e.atan2)(T.y01, T.x01), !m) : (v.arc(q.cx, q.cy, w, (0, e.atan2)(q.y01, q.x01), (0, e.atan2)(q.y11, q.x11), !m), v.arc(0, 0, r, (0, e.atan2)(q.cy + q.y11, q.cx + q.x11), (0, e.atan2)(T.cy + T.y11, T.cx + T.x11), m), v.arc(T.cx, T.cy, w, (0, e.atan2)(T.y11, T.x11), (0, e.atan2)(T.y01, T.x01), !m))) : v.arc(0, 0, r, _, P, m) : v.lineTo(F, G);
          }
        } else v.moveTo(0, 0);
        if (v.closePath(), t) return v = null, t + "" || null;
      }

      return g.centroid = function () {
        var n = (+a.apply(this, arguments) + +f.apply(this, arguments)) / 2,
            t = (+x.apply(this, arguments) + +d.apply(this, arguments)) / 2 - e.pi / 2;
        return [(0, e.cos)(t) * n, (0, e.sin)(t) * n];
      }, g.innerRadius = function (n) {
        return arguments.length ? (a = "function" == typeof n ? n : (0, t.default)(+n), g) : a;
      }, g.outerRadius = function (n) {
        return arguments.length ? (f = "function" == typeof n ? n : (0, t.default)(+n), g) : f;
      }, g.cornerRadius = function (n) {
        return arguments.length ? (p = "function" == typeof n ? n : (0, t.default)(+n), g) : p;
      }, g.padRadius = function (n) {
        return arguments.length ? (y = null == n ? null : "function" == typeof n ? n : (0, t.default)(+n), g) : y;
      }, g.startAngle = function (n) {
        return arguments.length ? (x = "function" == typeof n ? n : (0, t.default)(+n), g) : x;
      }, g.endAngle = function (n) {
        return arguments.length ? (d = "function" == typeof n ? n : (0, t.default)(+n), g) : d;
      }, g.padAngle = function (n) {
        return arguments.length ? (h = "function" == typeof n ? n : (0, t.default)(+n), g) : h;
      }, g.context = function (n) {
        return arguments.length ? (v = null == n ? null : n, g) : v;
      }, g;
    }
  }, {
    "d3-path": "dz42",
    "./constant.js": "OY6d",
    "./math.js": "R8vA"
  }],
  "VCF9": [function (require, module, exports) {
    "use strict";

    function t(t) {
      this._context = t;
    }

    function i(i) {
      return new t(i);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i, t.prototype = {
      areaStart: function areaStart() {
        this._line = 0;
      },
      areaEnd: function areaEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._point = 0;
      },
      lineEnd: function lineEnd() {
        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      },
      point: function point(t, i) {
        switch (t = +t, i = +i, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t, i) : this._context.moveTo(t, i);
            break;

          case 1:
            this._point = 2;

          default:
            this._context.lineTo(t, i);

        }
      }
    };
  }, {}],
  "aLIe": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return e[0];
    }

    function t(e) {
      return e[1];
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.x = e, exports.y = t;
  }, {}],
  "UmeQ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var n = require("d3-path"),
        e = r(require("./constant.js")),
        t = r(require("./curve/linear.js")),
        u = require("./point.js");

    function r(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    function l() {
      var r = u.x,
          l = u.y,
          f = (0, e.default)(!0),
          i = null,
          o = t.default,
          c = null;

      function a(e) {
        var t,
            u,
            a,
            d = e.length,
            p = !1;

        for (null == i && (c = o(a = (0, n.path)())), t = 0; t <= d; ++t) {
          !(t < d && f(u = e[t], t, e)) === p && ((p = !p) ? c.lineStart() : c.lineEnd()), p && c.point(+r(u, t, e), +l(u, t, e));
        }

        if (a) return c = null, a + "" || null;
      }

      return a.x = function (n) {
        return arguments.length ? (r = "function" == typeof n ? n : (0, e.default)(+n), a) : r;
      }, a.y = function (n) {
        return arguments.length ? (l = "function" == typeof n ? n : (0, e.default)(+n), a) : l;
      }, a.defined = function (n) {
        return arguments.length ? (f = "function" == typeof n ? n : (0, e.default)(!!n), a) : f;
      }, a.curve = function (n) {
        return arguments.length ? (o = n, null != i && (c = o(i)), a) : o;
      }, a.context = function (n) {
        return arguments.length ? (null == n ? i = c = null : c = o(i = n), a) : i;
      }, a;
    }
  }, {
    "d3-path": "dz42",
    "./constant.js": "OY6d",
    "./curve/linear.js": "VCF9",
    "./point.js": "aLIe"
  }],
  "UWil": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = f;

    var n = require("d3-path"),
        e = r(require("./constant.js")),
        t = r(require("./curve/linear.js")),
        u = r(require("./line.js")),
        l = require("./point.js");

    function r(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    function f() {
      var r = l.x,
          f = null,
          i = (0, e.default)(0),
          o = l.y,
          c = (0, e.default)(!0),
          a = null,
          d = t.default,
          y = null;

      function p(e) {
        var t,
            u,
            l,
            p,
            h,
            s = e.length,
            x = !1,
            g = new Array(s),
            v = new Array(s);

        for (null == a && (y = d(h = (0, n.path)())), t = 0; t <= s; ++t) {
          if (!(t < s && c(p = e[t], t, e)) === x) if (x = !x) u = t, y.areaStart(), y.lineStart();else {
            for (y.lineEnd(), y.lineStart(), l = t - 1; l >= u; --l) {
              y.point(g[l], v[l]);
            }

            y.lineEnd(), y.areaEnd();
          }
          x && (g[t] = +r(p, t, e), v[t] = +i(p, t, e), y.point(f ? +f(p, t, e) : g[t], o ? +o(p, t, e) : v[t]));
        }

        if (h) return y = null, h + "" || null;
      }

      function h() {
        return (0, u.default)().defined(c).curve(d).context(a);
      }

      return p.x = function (n) {
        return arguments.length ? (r = "function" == typeof n ? n : (0, e.default)(+n), f = null, p) : r;
      }, p.x0 = function (n) {
        return arguments.length ? (r = "function" == typeof n ? n : (0, e.default)(+n), p) : r;
      }, p.x1 = function (n) {
        return arguments.length ? (f = null == n ? null : "function" == typeof n ? n : (0, e.default)(+n), p) : f;
      }, p.y = function (n) {
        return arguments.length ? (i = "function" == typeof n ? n : (0, e.default)(+n), o = null, p) : i;
      }, p.y0 = function (n) {
        return arguments.length ? (i = "function" == typeof n ? n : (0, e.default)(+n), p) : i;
      }, p.y1 = function (n) {
        return arguments.length ? (o = null == n ? null : "function" == typeof n ? n : (0, e.default)(+n), p) : o;
      }, p.lineX0 = p.lineY0 = function () {
        return h().x(r).y(i);
      }, p.lineY1 = function () {
        return h().x(r).y(o);
      }, p.lineX1 = function () {
        return h().x(f).y(i);
      }, p.defined = function (n) {
        return arguments.length ? (c = "function" == typeof n ? n : (0, e.default)(!!n), p) : c;
      }, p.curve = function (n) {
        return arguments.length ? (d = n, null != a && (y = d(a)), p) : d;
      }, p.context = function (n) {
        return arguments.length ? (null == n ? a = y = null : y = d(a = n), p) : a;
      }, p;
    }
  }, {
    "d3-path": "dz42",
    "./constant.js": "OY6d",
    "./curve/linear.js": "VCF9",
    "./line.js": "UmeQ",
    "./point.js": "aLIe"
  }],
  "OJYo": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var t = r(require("./constant.js")),
        n = r(require("./descending.js")),
        e = r(require("./identity.js")),
        u = require("./math.js");

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function l() {
      var r = e.default,
          l = n.default,
          a = null,
          f = (0, t.default)(0),
          o = (0, t.default)(u.tau),
          i = (0, t.default)(0);

      function d(t) {
        var n,
            e,
            d,
            s,
            c,
            h = t.length,
            p = 0,
            g = new Array(h),
            y = new Array(h),
            A = +f.apply(this, arguments),
            v = Math.min(u.tau, Math.max(-u.tau, o.apply(this, arguments) - A)),
            M = Math.min(Math.abs(v) / h, i.apply(this, arguments)),
            j = M * (v < 0 ? -1 : 1);

        for (n = 0; n < h; ++n) {
          (c = y[g[n] = n] = +r(t[n], n, t)) > 0 && (p += c);
        }

        for (null != l ? g.sort(function (t, n) {
          return l(y[t], y[n]);
        }) : null != a && g.sort(function (n, e) {
          return a(t[n], t[e]);
        }), n = 0, d = p ? (v - h * j) / p : 0; n < h; ++n, A = s) {
          e = g[n], s = A + ((c = y[e]) > 0 ? c * d : 0) + j, y[e] = {
            data: t[e],
            index: n,
            value: c,
            startAngle: A,
            endAngle: s,
            padAngle: M
          };
        }

        return y;
      }

      return d.value = function (n) {
        return arguments.length ? (r = "function" == typeof n ? n : (0, t.default)(+n), d) : r;
      }, d.sortValues = function (t) {
        return arguments.length ? (l = t, a = null, d) : l;
      }, d.sort = function (t) {
        return arguments.length ? (a = t, l = null, d) : a;
      }, d.startAngle = function (n) {
        return arguments.length ? (f = "function" == typeof n ? n : (0, t.default)(+n), d) : f;
      }, d.endAngle = function (n) {
        return arguments.length ? (o = "function" == typeof n ? n : (0, t.default)(+n), d) : o;
      }, d.padAngle = function (n) {
        return arguments.length ? (i = "function" == typeof n ? n : (0, t.default)(+n), d) : i;
      }, d;
    }
  }, {
    "./constant.js": "OY6d",
    "./descending.js": "wjXp",
    "./identity.js": "nPOL",
    "./math.js": "R8vA"
  }],
  "m9TD": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i, exports.curveRadialLinear = void 0;
    var e = t(require("./linear.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = i(e.default);

    function n(e) {
      this._curve = e;
    }

    function i(e) {
      function t(t) {
        return new n(e(t));
      }

      return t._curve = e, t;
    }

    exports.curveRadialLinear = r, n.prototype = {
      areaStart: function areaStart() {
        this._curve.areaStart();
      },
      areaEnd: function areaEnd() {
        this._curve.areaEnd();
      },
      lineStart: function lineStart() {
        this._curve.lineStart();
      },
      lineEnd: function lineEnd() {
        this._curve.lineEnd();
      },
      point: function point(e, t) {
        this._curve.point(t * Math.sin(e), t * -Math.cos(e));
      }
    };
  }, {
    "./linear.js": "VCF9"
  }],
  "p8dR": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.lineRadial = a, exports.default = i;
    var e = u(require("./curve/radial.js")),
        r = t(require("./line.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return n = function n() {
        return e;
      }, e;
    }

    function u(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var r = n();
      if (r && r.has(e)) return r.get(e);
      var t = {},
          u = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var a in e) {
        if (Object.prototype.hasOwnProperty.call(e, a)) {
          var i = u ? Object.getOwnPropertyDescriptor(e, a) : null;
          i && (i.get || i.set) ? Object.defineProperty(t, a, i) : t[a] = e[a];
        }
      }

      return t.default = e, r && r.set(e, t), t;
    }

    function a(r) {
      var t = r.curve;
      return r.angle = r.x, delete r.x, r.radius = r.y, delete r.y, r.curve = function (r) {
        return arguments.length ? t((0, e.default)(r)) : t()._curve;
      }, r;
    }

    function i() {
      return a((0, r.default)().curve(e.curveRadialLinear));
    }
  }, {
    "./curve/radial.js": "m9TD",
    "./line.js": "UmeQ"
  }],
  "HIqu": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;

    var e = l(require("./curve/radial.js")),
        n = r(require("./area.js")),
        t = require("./lineRadial.js");

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function i() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return i = function i() {
        return e;
      }, e;
    }

    function l(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var n = i();
      if (n && n.has(e)) return n.get(e);
      var t = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var l in e) {
        if (Object.prototype.hasOwnProperty.call(e, l)) {
          var u = r ? Object.getOwnPropertyDescriptor(e, l) : null;
          u && (u.get || u.set) ? Object.defineProperty(t, l, u) : t[l] = e[l];
        }
      }

      return t.default = e, n && n.set(e, t), t;
    }

    function u() {
      var r = (0, n.default)().curve(e.curveRadialLinear),
          i = r.curve,
          l = r.lineX0,
          u = r.lineX1,
          a = r.lineY0,
          d = r.lineY1;
      return r.angle = r.x, delete r.x, r.startAngle = r.x0, delete r.x0, r.endAngle = r.x1, delete r.x1, r.radius = r.y, delete r.y, r.innerRadius = r.y0, delete r.y0, r.outerRadius = r.y1, delete r.y1, r.lineStartAngle = function () {
        return (0, t.lineRadial)(l());
      }, delete r.lineX0, r.lineEndAngle = function () {
        return (0, t.lineRadial)(u());
      }, delete r.lineX1, r.lineInnerRadius = function () {
        return (0, t.lineRadial)(a());
      }, delete r.lineY0, r.lineOuterRadius = function () {
        return (0, t.lineRadial)(d());
      }, delete r.lineY1, r.curve = function (n) {
        return arguments.length ? i((0, e.default)(n)) : i()._curve;
      }, r;
    }
  }, {
    "./curve/radial.js": "m9TD",
    "./area.js": "UWil",
    "./lineRadial.js": "p8dR"
  }],
  "wQOf": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      return [(t = +t) * Math.cos(e -= Math.PI / 2), t * Math.sin(e)];
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "CMsX": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.linkHorizontal = s, exports.linkVertical = d, exports.linkRadial = y;

    var e = require("d3-path"),
        t = require("../array.js"),
        n = i(require("../constant.js")),
        r = require("../point.js"),
        u = i(require("../pointRadial.js"));

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function l(e) {
      return e.source;
    }

    function o(e) {
      return e.target;
    }

    function a(u) {
      var i = l,
          a = o,
          f = r.x,
          c = r.y,
          p = null;

      function s() {
        var n,
            r = t.slice.call(arguments),
            l = i.apply(this, r),
            o = a.apply(this, r);
        if (p || (p = n = (0, e.path)()), u(p, +f.apply(this, (r[0] = l, r)), +c.apply(this, r), +f.apply(this, (r[0] = o, r)), +c.apply(this, r)), n) return p = null, n + "" || null;
      }

      return s.source = function (e) {
        return arguments.length ? (i = e, s) : i;
      }, s.target = function (e) {
        return arguments.length ? (a = e, s) : a;
      }, s.x = function (e) {
        return arguments.length ? (f = "function" == typeof e ? e : (0, n.default)(+e), s) : f;
      }, s.y = function (e) {
        return arguments.length ? (c = "function" == typeof e ? e : (0, n.default)(+e), s) : c;
      }, s.context = function (e) {
        return arguments.length ? (p = null == e ? null : e, s) : p;
      }, s;
    }

    function f(e, t, n, r, u) {
      e.moveTo(t, n), e.bezierCurveTo(t = (t + r) / 2, n, t, u, r, u);
    }

    function c(e, t, n, r, u) {
      e.moveTo(t, n), e.bezierCurveTo(t, n = (n + u) / 2, r, n, r, u);
    }

    function p(e, t, n, r, i) {
      var l = (0, u.default)(t, n),
          o = (0, u.default)(t, n = (n + i) / 2),
          a = (0, u.default)(r, n),
          f = (0, u.default)(r, i);
      e.moveTo(l[0], l[1]), e.bezierCurveTo(o[0], o[1], a[0], a[1], f[0], f[1]);
    }

    function s() {
      return a(f);
    }

    function d() {
      return a(c);
    }

    function y() {
      var e = a(p);
      return e.angle = e.x, delete e.x, e.radius = e.y, delete e.y, e;
    }
  }, {
    "d3-path": "dz42",
    "../array.js": "rv5q",
    "../constant.js": "OY6d",
    "../point.js": "aLIe",
    "../pointRadial.js": "wQOf"
  }],
  "NEs3": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("../math.js"),
        t = {
      draw: function draw(t, r) {
        var a = Math.sqrt(r / e.pi);
        t.moveTo(a, 0), t.arc(0, 0, a, 0, e.tau);
      }
    };

    exports.default = t;
  }, {
    "../math.js": "R8vA"
  }],
  "ODxl": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = {
      draw: function draw(e, o) {
        var l = Math.sqrt(o / 5) / 2;
        e.moveTo(-3 * l, -l), e.lineTo(-l, -l), e.lineTo(-l, -3 * l), e.lineTo(l, -3 * l), e.lineTo(l, -l), e.lineTo(3 * l, -l), e.lineTo(3 * l, l), e.lineTo(l, l), e.lineTo(l, 3 * l), e.lineTo(-l, 3 * l), e.lineTo(-l, l), e.lineTo(-3 * l, l), e.closePath();
      }
    };
    exports.default = e;
  }, {}],
  "nSnU": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = Math.sqrt(1 / 3),
        t = 2 * e,
        o = {
      draw: function draw(o, r) {
        var a = Math.sqrt(r / t),
            s = a * e;
        o.moveTo(0, -a), o.lineTo(s, 0), o.lineTo(0, a), o.lineTo(-s, 0), o.closePath();
      }
    };
    exports.default = o;
  }, {}],
  "SkCp": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var t = require("../math.js"),
        a = .8908130915292852,
        e = Math.sin(t.pi / 10) / Math.sin(7 * t.pi / 10),
        o = Math.sin(t.tau / 10) * e,
        r = -Math.cos(t.tau / 10) * e,
        s = {
      draw: function draw(e, s) {
        var i = Math.sqrt(s * a),
            n = o * i,
            u = r * i;
        e.moveTo(0, -i), e.lineTo(n, u);

        for (var h = 1; h < 5; ++h) {
          var l = t.tau * h / 5,
              M = Math.cos(l),
              v = Math.sin(l);
          e.lineTo(v * i, -M * i), e.lineTo(M * n - v * u, v * n + M * u);
        }

        e.closePath();
      }
    };

    exports.default = s;
  }, {
    "../math.js": "R8vA"
  }],
  "lQ43": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = {
      draw: function draw(e, t) {
        var r = Math.sqrt(t),
            a = -r / 2;
        e.rect(a, a, r, r);
      }
    };
    exports.default = e;
  }, {}],
  "Z5SN": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = Math.sqrt(3),
        t = {
      draw: function draw(t, o) {
        var r = -Math.sqrt(o / (3 * e));
        t.moveTo(0, 2 * r), t.lineTo(-e * r, -r), t.lineTo(e * r, -r), t.closePath();
      }
    };
    exports.default = t;
  }, {}],
  "JWBh": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = -.5,
        o = Math.sqrt(3) / 2,
        t = 1 / Math.sqrt(12),
        l = 3 * (t / 2 + 1),
        i = {
      draw: function draw(i, r) {
        var n = Math.sqrt(r / l),
            a = n / 2,
            s = n * t,
            T = a,
            d = n * t + n,
            u = -T,
            v = d;
        i.moveTo(a, s), i.lineTo(T, d), i.lineTo(u, v), i.lineTo(e * a - o * s, o * a + e * s), i.lineTo(e * T - o * d, o * T + e * d), i.lineTo(e * u - o * v, o * u + e * v), i.lineTo(e * a + o * s, e * s - o * a), i.lineTo(e * T + o * d, e * d - o * T), i.lineTo(e * u + o * v, e * v - o * u), i.closePath();
      }
    };
    exports.default = i;
  }, {}],
  "XBPQ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = d, exports.symbols = void 0;

    var e = require("d3-path"),
        t = i(require("./symbol/circle.js")),
        r = i(require("./symbol/cross.js")),
        u = i(require("./symbol/diamond.js")),
        l = i(require("./symbol/star.js")),
        n = i(require("./symbol/square.js")),
        s = i(require("./symbol/triangle.js")),
        o = i(require("./symbol/wye.js")),
        a = i(require("./constant.js"));

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var f = [t.default, r.default, u.default, n.default, l.default, s.default, o.default];

    function d() {
      var r = (0, a.default)(t.default),
          u = (0, a.default)(64),
          l = null;

      function n() {
        var t;
        if (l || (l = t = (0, e.path)()), r.apply(this, arguments).draw(l, +u.apply(this, arguments)), t) return l = null, t + "" || null;
      }

      return n.type = function (e) {
        return arguments.length ? (r = "function" == typeof e ? e : (0, a.default)(e), n) : r;
      }, n.size = function (e) {
        return arguments.length ? (u = "function" == typeof e ? e : (0, a.default)(+e), n) : u;
      }, n.context = function (e) {
        return arguments.length ? (l = null == e ? null : e, n) : l;
      }, n;
    }

    exports.symbols = f;
  }, {
    "d3-path": "dz42",
    "./symbol/circle.js": "NEs3",
    "./symbol/cross.js": "ODxl",
    "./symbol/diamond.js": "nSnU",
    "./symbol/star.js": "SkCp",
    "./symbol/square.js": "lQ43",
    "./symbol/triangle.js": "Z5SN",
    "./symbol/wye.js": "JWBh",
    "./constant.js": "OY6d"
  }],
  "XakR": [function (require, module, exports) {
    "use strict";

    function t(t, i, s) {
      t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + i) / 6, (t._y0 + 4 * t._y1 + s) / 6);
    }

    function i(t) {
      this._context = t;
    }

    function s(t) {
      return new i(t);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.point = t, exports.Basis = i, exports.default = s, i.prototype = {
      areaStart: function areaStart() {
        this._line = 0;
      },
      areaEnd: function areaEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
      },
      lineEnd: function lineEnd() {
        switch (this._point) {
          case 3:
            t(this, this._x1, this._y1);

          case 2:
            this._context.lineTo(this._x1, this._y1);

        }

        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      },
      point: function point(i, s) {
        switch (i = +i, s = +s, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(i, s) : this._context.moveTo(i, s);
            break;

          case 1:
            this._point = 2;
            break;

          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);

          default:
            t(this, i, s);
        }

        this._x0 = this._x1, this._x1 = i, this._y0 = this._y1, this._y1 = s;
      }
    };
  }, {}],
  "WkDE": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = _;

    var t = s(require("../noop.js")),
        i = require("./basis.js");

    function s(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function h(t) {
      this._context = t;
    }

    function _(t) {
      return new h(t);
    }

    h.prototype = {
      areaStart: t.default,
      areaEnd: t.default,
      lineStart: function lineStart() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
      },
      lineEnd: function lineEnd() {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x2, this._y2), this._context.closePath();
            break;

          case 2:
            this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
            break;

          case 3:
            this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        }
      },
      point: function point(t, s) {
        switch (t = +t, s = +s, this._point) {
          case 0:
            this._point = 1, this._x2 = t, this._y2 = s;
            break;

          case 1:
            this._point = 2, this._x3 = t, this._y3 = s;
            break;

          case 2:
            this._point = 3, this._x4 = t, this._y4 = s, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + s) / 6);
            break;

          default:
            (0, i.point)(this, t, s);
        }

        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = s;
      }
    };
  }, {
    "../noop.js": "BhKh",
    "./basis.js": "XakR"
  }],
  "Ggyx": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = s;

    var t = require("./basis.js");

    function i(t) {
      this._context = t;
    }

    function s(t) {
      return new i(t);
    }

    i.prototype = {
      areaStart: function areaStart() {
        this._line = 0;
      },
      areaEnd: function areaEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
      },
      lineEnd: function lineEnd() {
        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      },
      point: function point(i, s) {
        switch (i = +i, s = +s, this._point) {
          case 0:
            this._point = 1;
            break;

          case 1:
            this._point = 2;
            break;

          case 2:
            this._point = 3;
            var e = (this._x0 + 4 * this._x1 + i) / 6,
                n = (this._y0 + 4 * this._y1 + s) / 6;
            this._line ? this._context.lineTo(e, n) : this._context.moveTo(e, n);
            break;

          case 3:
            this._point = 4;

          default:
            (0, t.point)(this, i, s);
        }

        this._x0 = this._x1, this._x1 = i, this._y0 = this._y1, this._y1 = s;
      }
    };
  }, {
    "./basis.js": "XakR"
  }],
  "eh91": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var t = require("./basis.js");

    function i(i, s) {
      this._basis = new t.Basis(i), this._beta = s;
    }

    i.prototype = {
      lineStart: function lineStart() {
        this._x = [], this._y = [], this._basis.lineStart();
      },
      lineEnd: function lineEnd() {
        var t = this._x,
            i = this._y,
            s = t.length - 1;
        if (s > 0) for (var e, n = t[0], a = i[0], r = t[s] - n, h = i[s] - a, u = -1; ++u <= s;) {
          e = u / s, this._basis.point(this._beta * t[u] + (1 - this._beta) * (n + e * r), this._beta * i[u] + (1 - this._beta) * (a + e * h));
        }
        this._x = this._y = null, this._basis.lineEnd();
      },
      point: function point(t, i) {
        this._x.push(+t), this._y.push(+i);
      }
    };

    var s = function s(e) {
      function n(s) {
        return 1 === e ? new t.Basis(s) : new i(s, e);
      }

      return n.beta = function (t) {
        return s(+t);
      }, n;
    }(.85);

    exports.default = s;
  }, {
    "./basis.js": "XakR"
  }],
  "fNTp": [function (require, module, exports) {
    "use strict";

    function t(t, i, s) {
      t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - i), t._y2 + t._k * (t._y1 - s), t._x2, t._y2);
    }

    function i(t, i) {
      this._context = t, this._k = (1 - i) / 6;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.point = t, exports.Cardinal = i, exports.default = void 0, i.prototype = {
      areaStart: function areaStart() {
        this._line = 0;
      },
      areaEnd: function areaEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
      },
      lineEnd: function lineEnd() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);

            break;

          case 3:
            t(this, this._x1, this._y1);
        }

        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      },
      point: function point(i, s) {
        switch (i = +i, s = +s, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(i, s) : this._context.moveTo(i, s);
            break;

          case 1:
            this._point = 2, this._x1 = i, this._y1 = s;
            break;

          case 2:
            this._point = 3;

          default:
            t(this, i, s);
        }

        this._x0 = this._x1, this._x1 = this._x2, this._x2 = i, this._y0 = this._y1, this._y1 = this._y2, this._y2 = s;
      }
    };

    var s = function t(s) {
      function _(t) {
        return new i(t, s);
      }

      return _.tension = function (i) {
        return t(+i);
      }, _;
    }(0);

    exports.default = s;
  }, {}],
  "euEz": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.CardinalClosed = h, exports.default = void 0;

    var t = s(require("../noop.js")),
        i = require("./cardinal.js");

    function s(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function h(t, i) {
      this._context = t, this._k = (1 - i) / 6;
    }

    h.prototype = {
      areaStart: t.default,
      areaEnd: t.default,
      lineStart: function lineStart() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
      },
      lineEnd: function lineEnd() {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;

          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;

          case 3:
            this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        }
      },
      point: function point(t, s) {
        switch (t = +t, s = +s, this._point) {
          case 0:
            this._point = 1, this._x3 = t, this._y3 = s;
            break;

          case 1:
            this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = s);
            break;

          case 2:
            this._point = 3, this._x5 = t, this._y5 = s;
            break;

          default:
            (0, i.point)(this, t, s);
        }

        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = s;
      }
    };

    var e = function t(i) {
      function s(t) {
        return new h(t, i);
      }

      return s.tension = function (i) {
        return t(+i);
      }, s;
    }(0);

    exports.default = e;
  }, {
    "../noop.js": "BhKh",
    "./cardinal.js": "fNTp"
  }],
  "it46": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.CardinalOpen = i, exports.default = void 0;

    var t = require("./cardinal.js");

    function i(t, i) {
      this._context = t, this._k = (1 - i) / 6;
    }

    i.prototype = {
      areaStart: function areaStart() {
        this._line = 0;
      },
      areaEnd: function areaEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
      },
      lineEnd: function lineEnd() {
        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      },
      point: function point(i, s) {
        switch (i = +i, s = +s, this._point) {
          case 0:
            this._point = 1;
            break;

          case 1:
            this._point = 2;
            break;

          case 2:
            this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
            break;

          case 3:
            this._point = 4;

          default:
            (0, t.point)(this, i, s);
        }

        this._x0 = this._x1, this._x1 = this._x2, this._x2 = i, this._y0 = this._y1, this._y1 = this._y2, this._y2 = s;
      }
    };

    var s = function t(s) {
      function n(t) {
        return new i(t, s);
      }

      return n.tension = function (i) {
        return t(+i);
      }, n;
    }(0);

    exports.default = s;
  }, {
    "./cardinal.js": "fNTp"
  }],
  "oWDJ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.point = i, exports.default = void 0;

    var _ = require("../math.js"),
        t = require("./cardinal.js");

    function i(t, i, s) {
      var a = t._x1,
          h = t._y1,
          l = t._x2,
          n = t._y2;

      if (t._l01_a > _.epsilon) {
        var e = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
            o = 3 * t._l01_a * (t._l01_a + t._l12_a);
        a = (a * e - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / o, h = (h * e - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / o;
      }

      if (t._l23_a > _.epsilon) {
        var r = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
            c = 3 * t._l23_a * (t._l23_a + t._l12_a);
        l = (l * r + t._x1 * t._l23_2a - i * t._l12_2a) / c, n = (n * r + t._y1 * t._l23_2a - s * t._l12_2a) / c;
      }

      t._context.bezierCurveTo(a, h, l, n, t._x2, t._y2);
    }

    function s(_, t) {
      this._context = _, this._alpha = t;
    }

    s.prototype = {
      areaStart: function areaStart() {
        this._line = 0;
      },
      areaEnd: function areaEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
      },
      lineEnd: function lineEnd() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);

            break;

          case 3:
            this.point(this._x2, this._y2);
        }

        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      },
      point: function point(_, t) {
        if (_ = +_, t = +t, this._point) {
          var s = this._x2 - _,
              a = this._y2 - t;
          this._l23_a = Math.sqrt(this._l23_2a = Math.pow(s * s + a * a, this._alpha));
        }

        switch (this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(_, t) : this._context.moveTo(_, t);
            break;

          case 1:
            this._point = 2;
            break;

          case 2:
            this._point = 3;

          default:
            i(this, _, t);
        }

        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = _, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
      }
    };

    var a = function _(i) {
      function a(_) {
        return i ? new s(_, i) : new t.Cardinal(_, 0);
      }

      return a.alpha = function (t) {
        return _(+t);
      }, a;
    }(.5);

    exports.default = a;
  }, {
    "../math.js": "R8vA",
    "./cardinal.js": "fNTp"
  }],
  "CsSZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var t = require("./cardinalClosed.js"),
        i = _(require("../noop.js")),
        s = require("./catmullRom.js");

    function _(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function h(t, i) {
      this._context = t, this._alpha = i;
    }

    h.prototype = {
      areaStart: i.default,
      areaEnd: i.default,
      lineStart: function lineStart() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
      },
      lineEnd: function lineEnd() {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;

          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;

          case 3:
            this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        }
      },
      point: function point(t, i) {
        if (t = +t, i = +i, this._point) {
          var _ = this._x2 - t,
              h = this._y2 - i;

          this._l23_a = Math.sqrt(this._l23_2a = Math.pow(_ * _ + h * h, this._alpha));
        }

        switch (this._point) {
          case 0:
            this._point = 1, this._x3 = t, this._y3 = i;
            break;

          case 1:
            this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = i);
            break;

          case 2:
            this._point = 3, this._x5 = t, this._y5 = i;
            break;

          default:
            (0, s.point)(this, t, i);
        }

        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = i;
      }
    };

    var e = function i(s) {
      function _(i) {
        return s ? new h(i, s) : new t.CardinalClosed(i, 0);
      }

      return _.alpha = function (t) {
        return i(+t);
      }, _;
    }(.5);

    exports.default = e;
  }, {
    "./cardinalClosed.js": "euEz",
    "../noop.js": "BhKh",
    "./catmullRom.js": "oWDJ"
  }],
  "Vf6b": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var t = require("./cardinalOpen.js"),
        i = require("./catmullRom.js");

    function _(t, i) {
      this._context = t, this._alpha = i;
    }

    _.prototype = {
      areaStart: function areaStart() {
        this._line = 0;
      },
      areaEnd: function areaEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
      },
      lineEnd: function lineEnd() {
        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      },
      point: function point(t, _) {
        if (t = +t, _ = +_, this._point) {
          var s = this._x2 - t,
              h = this._y2 - _;
          this._l23_a = Math.sqrt(this._l23_2a = Math.pow(s * s + h * h, this._alpha));
        }

        switch (this._point) {
          case 0:
            this._point = 1;
            break;

          case 1:
            this._point = 2;
            break;

          case 2:
            this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
            break;

          case 3:
            this._point = 4;

          default:
            (0, i.point)(this, t, _);
        }

        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = _;
      }
    };

    var s = function i(s) {
      function h(i) {
        return s ? new _(i, s) : new t.CardinalOpen(i, 0);
      }

      return h.alpha = function (t) {
        return i(+t);
      }, h;
    }(.5);

    exports.default = s;
  }, {
    "./cardinalOpen.js": "it46",
    "./catmullRom.js": "oWDJ"
  }],
  "QDqS": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o;
    var t = e(require("../noop.js"));

    function e(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function n(t) {
      this._context = t;
    }

    function o(t) {
      return new n(t);
    }

    n.prototype = {
      areaStart: t.default,
      areaEnd: t.default,
      lineStart: function lineStart() {
        this._point = 0;
      },
      lineEnd: function lineEnd() {
        this._point && this._context.closePath();
      },
      point: function point(t, e) {
        t = +t, e = +e, this._point ? this._context.lineTo(t, e) : (this._point = 1, this._context.moveTo(t, e));
      }
    };
  }, {
    "../noop.js": "BhKh"
  }],
  "Vaer": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return t < 0 ? -1 : 1;
    }

    function i(i, n, e) {
      var o = i._x1 - i._x0,
          s = n - i._x1,
          h = (i._y1 - i._y0) / (o || s < 0 && -0),
          _ = (e - i._y1) / (s || o < 0 && -0),
          c = (h * s + _ * o) / (o + s);

      return (t(h) + t(_)) * Math.min(Math.abs(h), Math.abs(_), .5 * Math.abs(c)) || 0;
    }

    function n(t, i) {
      var n = t._x1 - t._x0;
      return n ? (3 * (t._y1 - t._y0) / n - i) / 2 : i;
    }

    function e(t, i, n) {
      var e = t._x0,
          o = t._y0,
          s = t._x1,
          h = t._y1,
          _ = (s - e) / 3;

      t._context.bezierCurveTo(e + _, o + _ * i, s - _, h - _ * n, s, h);
    }

    function o(t) {
      this._context = t;
    }

    function s(t) {
      this._context = new h(t);
    }

    function h(t) {
      this._context = t;
    }

    function _(t) {
      return new o(t);
    }

    function c(t) {
      return new s(t);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.monotoneX = _, exports.monotoneY = c, o.prototype = {
      areaStart: function areaStart() {
        this._line = 0;
      },
      areaEnd: function areaEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
      },
      lineEnd: function lineEnd() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x1, this._y1);

            break;

          case 3:
            e(this, this._t0, n(this, this._t0));
        }

        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      },
      point: function point(t, o) {
        var s = NaN;

        if (o = +o, (t = +t) !== this._x1 || o !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(t, o) : this._context.moveTo(t, o);
              break;

            case 1:
              this._point = 2;
              break;

            case 2:
              this._point = 3, e(this, n(this, s = i(this, t, o)), s);
              break;

            default:
              e(this, this._t0, s = i(this, t, o));
          }

          this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = o, this._t0 = s;
        }
      }
    }, (s.prototype = Object.create(o.prototype)).point = function (t, i) {
      o.prototype.point.call(this, i, t);
    }, h.prototype = {
      moveTo: function moveTo(t, i) {
        this._context.moveTo(i, t);
      },
      closePath: function closePath() {
        this._context.closePath();
      },
      lineTo: function lineTo(t, i) {
        this._context.lineTo(i, t);
      },
      bezierCurveTo: function bezierCurveTo(t, i, n, e, o, s) {
        this._context.bezierCurveTo(i, t, e, n, s, o);
      }
    };
  }, {}],
  "T3BW": [function (require, module, exports) {
    "use strict";

    function t(t) {
      this._context = t;
    }

    function e(t) {
      var e,
          i,
          n = t.length - 1,
          o = new Array(n),
          r = new Array(n),
          s = new Array(n);

      for (o[0] = 0, r[0] = 2, s[0] = t[0] + 2 * t[1], e = 1; e < n - 1; ++e) {
        o[e] = 1, r[e] = 4, s[e] = 4 * t[e] + 2 * t[e + 1];
      }

      for (o[n - 1] = 2, r[n - 1] = 7, s[n - 1] = 8 * t[n - 1] + t[n], e = 1; e < n; ++e) {
        i = o[e] / r[e - 1], r[e] -= i, s[e] -= i * s[e - 1];
      }

      for (o[n - 1] = s[n - 1] / r[n - 1], e = n - 2; e >= 0; --e) {
        o[e] = (s[e] - o[e + 1]) / r[e];
      }

      for (r[n - 1] = (t[n] + o[n - 1]) / 2, e = 0; e < n - 1; ++e) {
        r[e] = 2 * t[e + 1] - o[e + 1];
      }

      return [o, r];
    }

    function i(e) {
      return new t(e);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i, t.prototype = {
      areaStart: function areaStart() {
        this._line = 0;
      },
      areaEnd: function areaEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._x = [], this._y = [];
      },
      lineEnd: function lineEnd() {
        var t = this._x,
            i = this._y,
            n = t.length;
        if (n) if (this._line ? this._context.lineTo(t[0], i[0]) : this._context.moveTo(t[0], i[0]), 2 === n) this._context.lineTo(t[1], i[1]);else for (var o = e(t), r = e(i), s = 0, h = 1; h < n; ++s, ++h) {
          this._context.bezierCurveTo(o[0][s], r[0][s], o[1][s], r[1][s], t[h], i[h]);
        }
        (this._line || 0 !== this._line && 1 === n) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
      },
      point: function point(t, e) {
        this._x.push(+t), this._y.push(+e);
      }
    };
  }, {}],
  "UYn4": [function (require, module, exports) {
    "use strict";

    function t(t, i) {
      this._context = t, this._t = i;
    }

    function i(i) {
      return new t(i, .5);
    }

    function e(i) {
      return new t(i, 0);
    }

    function n(i) {
      return new t(i, 1);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i, exports.stepBefore = e, exports.stepAfter = n, t.prototype = {
      areaStart: function areaStart() {
        this._line = 0;
      },
      areaEnd: function areaEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._x = this._y = NaN, this._point = 0;
      },
      lineEnd: function lineEnd() {
        0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
      },
      point: function point(t, i) {
        switch (t = +t, i = +i, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t, i) : this._context.moveTo(t, i);
            break;

          case 1:
            this._point = 2;

          default:
            if (this._t <= 0) this._context.lineTo(this._x, i), this._context.lineTo(t, i);else {
              var e = this._x * (1 - this._t) + t * this._t;
              this._context.lineTo(e, this._y), this._context.lineTo(e, i);
            }
        }

        this._x = t, this._y = i;
      }
    };
  }, {}],
  "x5Mk": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      if ((f = e.length) > 1) for (var r, o, f, s = 1, i = e[t[0]], l = i.length; s < f; ++s) {
        for (o = i, i = e[t[s]], r = 0; r < l; ++r) {
          i[r][1] += i[r][0] = isNaN(o[r][1]) ? o[r][0] : o[r][1];
        }
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "IgCe": [function (require, module, exports) {
    "use strict";

    function e(e) {
      for (var r = e.length, t = new Array(r); --r >= 0;) {
        t[r] = r;
      }

      return t;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "S7q8": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var e = require("./array.js"),
        t = u(require("./constant.js")),
        n = u(require("./offset/none.js")),
        r = u(require("./order/none.js"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function f(e, t) {
      return e[t];
    }

    function l() {
      var u = (0, t.default)([]),
          l = r.default,
          o = n.default,
          a = f;

      function i(e) {
        var t,
            n,
            r = u.apply(this, arguments),
            f = e.length,
            i = r.length,
            c = new Array(i);

        for (t = 0; t < i; ++t) {
          for (var d, s = r[t], y = c[t] = new Array(f), p = 0; p < f; ++p) {
            y[p] = d = [0, +a(e[p], s, p, e)], d.data = e[p];
          }

          y.key = s;
        }

        for (t = 0, n = l(c); t < i; ++t) {
          c[n[t]].index = t;
        }

        return o(c, n), c;
      }

      return i.keys = function (n) {
        return arguments.length ? (u = "function" == typeof n ? n : (0, t.default)(e.slice.call(n)), i) : u;
      }, i.value = function (e) {
        return arguments.length ? (a = "function" == typeof e ? e : (0, t.default)(+e), i) : a;
      }, i.order = function (n) {
        return arguments.length ? (l = null == n ? r.default : "function" == typeof n ? n : (0, t.default)(e.slice.call(n)), i) : l;
      }, i.offset = function (e) {
        return arguments.length ? (o = null == e ? n.default : e, i) : o;
      }, i;
    }
  }, {
    "./array.js": "rv5q",
    "./constant.js": "OY6d",
    "./offset/none.js": "x5Mk",
    "./order/none.js": "IgCe"
  }],
  "jY6Y": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./none.js"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r, t) {
      if ((o = r.length) > 0) {
        for (var f, o, u, n = 0, l = r[0].length; n < l; ++n) {
          for (u = f = 0; f < o; ++f) {
            u += r[f][n][1] || 0;
          }

          if (u) for (f = 0; f < o; ++f) {
            r[f][n][1] /= u;
          }
        }

        (0, e.default)(r, t);
      }
    }
  }, {
    "./none.js": "x5Mk"
  }],
  "P6QD": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      if ((s = e.length) > 0) for (var r, o, f, l, n, s, u = 0, i = e[t[0]].length; u < i; ++u) {
        for (l = n = 0, r = 0; r < s; ++r) {
          (f = (o = e[t[r]][u])[1] - o[0]) > 0 ? (o[0] = l, o[1] = l += f) : f < 0 ? (o[1] = n, o[0] = n += f) : (o[0] = 0, o[1] = f);
        }
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "sf4d": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./none.js"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r, t) {
      if ((u = r.length) > 0) {
        for (var u, n = 0, o = r[t[0]], f = o.length; n < f; ++n) {
          for (var l = 0, a = 0; l < u; ++l) {
            a += r[l][n][1] || 0;
          }

          o[n][1] += o[n][0] = -a / 2;
        }

        (0, e.default)(r, t);
      }
    }
  }, {
    "./none.js": "x5Mk"
  }],
  "EH71": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./none.js"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r, t) {
      if ((f = r.length) > 0 && (u = (o = r[t[0]]).length) > 0) {
        for (var o, u, f, n = 0, a = 1; a < u; ++a) {
          for (var l = 0, s = 0, d = 0; l < f; ++l) {
            for (var i = r[t[l]], v = i[a][1] || 0, c = (v - (i[a - 1][1] || 0)) / 2, _ = 0; _ < l; ++_) {
              var p = r[t[_]];
              c += (p[a][1] || 0) - (p[a - 1][1] || 0);
            }

            s += v, d += c * v;
          }

          o[a - 1][1] += o[a - 1][0] = n, s && (n -= d / s);
        }

        o[a - 1][1] += o[a - 1][0] = n, (0, e.default)(r, t);
      }
    }
  }, {
    "./none.js": "x5Mk"
  }],
  "zyBr": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./none.js"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r) {
      var t = r.map(n);
      return (0, e.default)(r).sort(function (e, r) {
        return t[e] - t[r];
      });
    }

    function n(e) {
      for (var r, t = -1, n = 0, u = e.length, o = -1 / 0; ++t < u;) {
        (r = +e[t][1]) > o && (o = r, n = t);
      }

      return n;
    }
  }, {
    "./none.js": "IgCe"
  }],
  "koeA": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t, exports.sum = u;
    var e = r(require("./none.js"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r) {
      var t = r.map(u);
      return (0, e.default)(r).sort(function (e, r) {
        return t[e] - t[r];
      });
    }

    function u(e) {
      for (var r, t = 0, u = -1, n = e.length; ++u < n;) {
        (r = +e[u][1]) && (t += r);
      }

      return t;
    }
  }, {
    "./none.js": "IgCe"
  }],
  "i2th": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./ascending.js"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r) {
      return (0, e.default)(r).reverse();
    }
  }, {
    "./ascending.js": "koeA"
  }],
  "msEL": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = u(require("./appearance.js")),
        r = require("./ascending.js");

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(u) {
      var t,
          s,
          a = u.length,
          n = u.map(r.sum),
          o = (0, e.default)(u),
          c = 0,
          p = 0,
          d = [],
          f = [];

      for (t = 0; t < a; ++t) {
        s = o[t], c < p ? (c += n[s], d.push(s)) : (p += n[s], f.push(s));
      }

      return f.reverse().concat(d);
    }
  }, {
    "./appearance.js": "zyBr",
    "./ascending.js": "koeA"
  }],
  "w5Iz": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./none.js"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r) {
      return (0, e.default)(r).reverse();
    }
  }, {
    "./none.js": "IgCe"
  }],
  "pWU4": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "arc", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "area", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "line", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "pie", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "areaRadial", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "radialArea", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "lineRadial", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "radialLine", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "pointRadial", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), Object.defineProperty(exports, "linkHorizontal", {
      enumerable: !0,
      get: function get() {
        return a.linkHorizontal;
      }
    }), Object.defineProperty(exports, "linkVertical", {
      enumerable: !0,
      get: function get() {
        return a.linkVertical;
      }
    }), Object.defineProperty(exports, "linkRadial", {
      enumerable: !0,
      get: function get() {
        return a.linkRadial;
      }
    }), Object.defineProperty(exports, "symbol", {
      enumerable: !0,
      get: function get() {
        return l.default;
      }
    }), Object.defineProperty(exports, "symbols", {
      enumerable: !0,
      get: function get() {
        return l.symbols;
      }
    }), Object.defineProperty(exports, "symbolCircle", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "symbolCross", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    }), Object.defineProperty(exports, "symbolDiamond", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(exports, "symbolSquare", {
      enumerable: !0,
      get: function get() {
        return d.default;
      }
    }), Object.defineProperty(exports, "symbolStar", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(exports, "symbolTriangle", {
      enumerable: !0,
      get: function get() {
        return b.default;
      }
    }), Object.defineProperty(exports, "symbolWye", {
      enumerable: !0,
      get: function get() {
        return j.default;
      }
    }), Object.defineProperty(exports, "curveBasisClosed", {
      enumerable: !0,
      get: function get() {
        return m.default;
      }
    }), Object.defineProperty(exports, "curveBasisOpen", {
      enumerable: !0,
      get: function get() {
        return y.default;
      }
    }), Object.defineProperty(exports, "curveBasis", {
      enumerable: !0,
      get: function get() {
        return O.default;
      }
    }), Object.defineProperty(exports, "curveBundle", {
      enumerable: !0,
      get: function get() {
        return g.default;
      }
    }), Object.defineProperty(exports, "curveCardinalClosed", {
      enumerable: !0,
      get: function get() {
        return P.default;
      }
    }), Object.defineProperty(exports, "curveCardinalOpen", {
      enumerable: !0,
      get: function get() {
        return x.default;
      }
    }), Object.defineProperty(exports, "curveCardinal", {
      enumerable: !0,
      get: function get() {
        return q.default;
      }
    }), Object.defineProperty(exports, "curveCatmullRomClosed", {
      enumerable: !0,
      get: function get() {
        return v.default;
      }
    }), Object.defineProperty(exports, "curveCatmullRomOpen", {
      enumerable: !0,
      get: function get() {
        return k.default;
      }
    }), Object.defineProperty(exports, "curveCatmullRom", {
      enumerable: !0,
      get: function get() {
        return C.default;
      }
    }), Object.defineProperty(exports, "curveLinearClosed", {
      enumerable: !0,
      get: function get() {
        return R.default;
      }
    }), Object.defineProperty(exports, "curveLinear", {
      enumerable: !0,
      get: function get() {
        return M.default;
      }
    }), Object.defineProperty(exports, "curveMonotoneX", {
      enumerable: !0,
      get: function get() {
        return w.monotoneX;
      }
    }), Object.defineProperty(exports, "curveMonotoneY", {
      enumerable: !0,
      get: function get() {
        return w.monotoneY;
      }
    }), Object.defineProperty(exports, "curveNatural", {
      enumerable: !0,
      get: function get() {
        return B.default;
      }
    }), Object.defineProperty(exports, "curveStep", {
      enumerable: !0,
      get: function get() {
        return S.default;
      }
    }), Object.defineProperty(exports, "curveStepAfter", {
      enumerable: !0,
      get: function get() {
        return S.stepAfter;
      }
    }), Object.defineProperty(exports, "curveStepBefore", {
      enumerable: !0,
      get: function get() {
        return S.stepBefore;
      }
    }), Object.defineProperty(exports, "stack", {
      enumerable: !0,
      get: function get() {
        return _.default;
      }
    }), Object.defineProperty(exports, "stackOffsetExpand", {
      enumerable: !0,
      get: function get() {
        return A.default;
      }
    }), Object.defineProperty(exports, "stackOffsetDiverging", {
      enumerable: !0,
      get: function get() {
        return D.default;
      }
    }), Object.defineProperty(exports, "stackOffsetNone", {
      enumerable: !0,
      get: function get() {
        return h.default;
      }
    }), Object.defineProperty(exports, "stackOffsetSilhouette", {
      enumerable: !0,
      get: function get() {
        return W.default;
      }
    }), Object.defineProperty(exports, "stackOffsetWiggle", {
      enumerable: !0,
      get: function get() {
        return L.default;
      }
    }), Object.defineProperty(exports, "stackOrderAppearance", {
      enumerable: !0,
      get: function get() {
        return N.default;
      }
    }), Object.defineProperty(exports, "stackOrderAscending", {
      enumerable: !0,
      get: function get() {
        return z.default;
      }
    }), Object.defineProperty(exports, "stackOrderDescending", {
      enumerable: !0,
      get: function get() {
        return H.default;
      }
    }), Object.defineProperty(exports, "stackOrderInsideOut", {
      enumerable: !0,
      get: function get() {
        return V.default;
      }
    }), Object.defineProperty(exports, "stackOrderNone", {
      enumerable: !0,
      get: function get() {
        return X.default;
      }
    }), Object.defineProperty(exports, "stackOrderReverse", {
      enumerable: !0,
      get: function get() {
        return Y.default;
      }
    });

    var e = T(require("./arc.js")),
        r = T(require("./area.js")),
        t = T(require("./line.js")),
        n = T(require("./pie.js")),
        u = T(require("./areaRadial.js")),
        o = T(require("./lineRadial.js")),
        i = T(require("./pointRadial.js")),
        a = require("./link/index.js"),
        l = I(require("./symbol.js")),
        f = T(require("./symbol/circle.js")),
        s = T(require("./symbol/cross.js")),
        c = T(require("./symbol/diamond.js")),
        d = T(require("./symbol/square.js")),
        p = T(require("./symbol/star.js")),
        b = T(require("./symbol/triangle.js")),
        j = T(require("./symbol/wye.js")),
        m = T(require("./curve/basisClosed.js")),
        y = T(require("./curve/basisOpen.js")),
        O = T(require("./curve/basis.js")),
        g = T(require("./curve/bundle.js")),
        P = T(require("./curve/cardinalClosed.js")),
        x = T(require("./curve/cardinalOpen.js")),
        q = T(require("./curve/cardinal.js")),
        v = T(require("./curve/catmullRomClosed.js")),
        k = T(require("./curve/catmullRomOpen.js")),
        C = T(require("./curve/catmullRom.js")),
        R = T(require("./curve/linearClosed.js")),
        M = T(require("./curve/linear.js")),
        w = require("./curve/monotone.js"),
        B = T(require("./curve/natural.js")),
        S = I(require("./curve/step.js")),
        _ = T(require("./stack.js")),
        A = T(require("./offset/expand.js")),
        D = T(require("./offset/diverging.js")),
        h = T(require("./offset/none.js")),
        W = T(require("./offset/silhouette.js")),
        L = T(require("./offset/wiggle.js")),
        N = T(require("./order/appearance.js")),
        z = T(require("./order/ascending.js")),
        H = T(require("./order/descending.js")),
        V = T(require("./order/insideOut.js")),
        X = T(require("./order/none.js")),
        Y = T(require("./order/reverse.js"));

    function E() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return E = function E() {
        return e;
      }, e;
    }

    function I(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var r = E();
      if (r && r.has(e)) return r.get(e);
      var t = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var u in e) {
        if (Object.prototype.hasOwnProperty.call(e, u)) {
          var o = n ? Object.getOwnPropertyDescriptor(e, u) : null;
          o && (o.get || o.set) ? Object.defineProperty(t, u, o) : t[u] = e[u];
        }
      }

      return t.default = e, r && r.set(e, t), t;
    }

    function T(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./arc.js": "TV07",
    "./area.js": "UWil",
    "./line.js": "UmeQ",
    "./pie.js": "OJYo",
    "./areaRadial.js": "HIqu",
    "./lineRadial.js": "p8dR",
    "./pointRadial.js": "wQOf",
    "./link/index.js": "CMsX",
    "./symbol.js": "XBPQ",
    "./symbol/circle.js": "NEs3",
    "./symbol/cross.js": "ODxl",
    "./symbol/diamond.js": "nSnU",
    "./symbol/square.js": "lQ43",
    "./symbol/star.js": "SkCp",
    "./symbol/triangle.js": "Z5SN",
    "./symbol/wye.js": "JWBh",
    "./curve/basisClosed.js": "WkDE",
    "./curve/basisOpen.js": "Ggyx",
    "./curve/basis.js": "XakR",
    "./curve/bundle.js": "eh91",
    "./curve/cardinalClosed.js": "euEz",
    "./curve/cardinalOpen.js": "it46",
    "./curve/cardinal.js": "fNTp",
    "./curve/catmullRomClosed.js": "CsSZ",
    "./curve/catmullRomOpen.js": "Vf6b",
    "./curve/catmullRom.js": "oWDJ",
    "./curve/linearClosed.js": "QDqS",
    "./curve/linear.js": "VCF9",
    "./curve/monotone.js": "Vaer",
    "./curve/natural.js": "T3BW",
    "./curve/step.js": "UYn4",
    "./stack.js": "S7q8",
    "./offset/expand.js": "jY6Y",
    "./offset/diverging.js": "P6QD",
    "./offset/none.js": "x5Mk",
    "./offset/silhouette.js": "sf4d",
    "./offset/wiggle.js": "EH71",
    "./order/appearance.js": "zyBr",
    "./order/ascending.js": "koeA",
    "./order/descending.js": "i2th",
    "./order/insideOut.js": "msEL",
    "./order/none.js": "IgCe",
    "./order/reverse.js": "w5Iz"
  }],
  "cyhV": [function (require, module, exports) {
    "use strict";

    function C() {
      this._ = null;
    }

    function t(C) {
      C.U = C.C = C.L = C.R = C.P = C.N = null;
    }

    function i(C, t) {
      var i = t,
          L = t.R,
          e = i.U;
      e ? e.L === i ? e.L = L : e.R = L : C._ = L, L.U = e, i.U = L, i.R = L.L, i.R && (i.R.U = i), L.L = i;
    }

    function L(C, t) {
      var i = t,
          L = t.L,
          e = i.U;
      e ? e.L === i ? e.L = L : e.R = L : C._ = L, L.U = e, i.U = L, i.L = L.R, i.L && (i.L.U = i), L.R = i;
    }

    function e(C) {
      for (; C.L;) {
        C = C.L;
      }

      return C;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.RedBlackNode = t, exports.default = void 0, C.prototype = {
      constructor: C,
      insert: function insert(C, t) {
        var s, R, n;

        if (C) {
          if (t.P = C, t.N = C.N, C.N && (C.N.P = t), C.N = t, C.R) {
            for (C = C.R; C.L;) {
              C = C.L;
            }

            C.L = t;
          } else C.R = t;

          s = C;
        } else this._ ? (C = e(this._), t.P = null, t.N = C, C.P = C.L = t, s = C) : (t.P = t.N = null, this._ = t, s = null);

        for (t.L = t.R = null, t.U = s, t.C = !0, C = t; s && s.C;) {
          s === (R = s.U).L ? (n = R.R) && n.C ? (s.C = n.C = !1, R.C = !0, C = R) : (C === s.R && (i(this, s), s = (C = s).U), s.C = !1, R.C = !0, L(this, R)) : (n = R.L) && n.C ? (s.C = n.C = !1, R.C = !0, C = R) : (C === s.L && (L(this, s), s = (C = s).U), s.C = !1, R.C = !0, i(this, R)), s = C.U;
        }

        this._.C = !1;
      },
      remove: function remove(C) {
        C.N && (C.N.P = C.P), C.P && (C.P.N = C.N), C.N = C.P = null;
        var t,
            s,
            R,
            n = C.U,
            r = C.L,
            l = C.R;
        if (s = r ? l ? e(l) : r : l, n ? n.L === C ? n.L = s : n.R = s : this._ = s, r && l ? (R = s.C, s.C = C.C, s.L = r, r.U = s, s !== l ? (n = s.U, s.U = C.U, C = s.R, n.L = C, s.R = l, l.U = s) : (s.U = n, n = s, C = s.R)) : (R = C.C, C = s), C && (C.U = n), !R) if (C && C.C) C.C = !1;else {
          do {
            if (C === this._) break;

            if (C === n.L) {
              if ((t = n.R).C && (t.C = !1, n.C = !0, i(this, n), t = n.R), t.L && t.L.C || t.R && t.R.C) {
                t.R && t.R.C || (t.L.C = !1, t.C = !0, L(this, t), t = n.R), t.C = n.C, n.C = t.R.C = !1, i(this, n), C = this._;
                break;
              }
            } else if ((t = n.L).C && (t.C = !1, n.C = !0, L(this, n), t = n.L), t.L && t.L.C || t.R && t.R.C) {
              t.L && t.L.C || (t.R.C = !1, t.C = !0, i(this, t), t = n.L), t.C = n.C, n.C = t.L.C = !1, L(this, n), C = this._;
              break;
            }

            t.C = !0, C = n, n = n.U;
          } while (!C.C);

          C && (C.C = !1);
        }
      }
    };
    var s = C;
    exports.default = s;
  }, {}],
  "Tkpe": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.createEdge = r, exports.createBorderEdge = i, exports.setEdgeEnd = f, exports.clipEdges = s;

    var e = require("./Diagram");

    function r(r, i, t, n) {
      var s = [null, null],
          l = e.edges.push(s) - 1;
      return s.left = r, s.right = i, t && f(s, r, i, t), n && f(s, i, r, n), e.cells[r.index].halfedges.push(l), e.cells[i.index].halfedges.push(l), s;
    }

    function i(e, r, i) {
      var f = [r, i];
      return f.left = e, f;
    }

    function f(e, r, i, f) {
      e[0] || e[1] ? e.left === i ? e[1] = f : e[0] = f : (e[0] = f, e.left = r, e.right = i);
    }

    function t(e, r, i, f, t) {
      var n,
          s = e[0],
          l = e[1],
          u = s[0],
          a = s[1],
          d = 0,
          o = 1,
          g = l[0] - u,
          c = l[1] - a;

      if (n = r - u, g || !(n > 0)) {
        if (n /= g, g < 0) {
          if (n < d) return;
          n < o && (o = n);
        } else if (g > 0) {
          if (n > o) return;
          n > d && (d = n);
        }

        if (n = f - u, g || !(n < 0)) {
          if (n /= g, g < 0) {
            if (n > o) return;
            n > d && (d = n);
          } else if (g > 0) {
            if (n < d) return;
            n < o && (o = n);
          }

          if (n = i - a, c || !(n > 0)) {
            if (n /= c, c < 0) {
              if (n < d) return;
              n < o && (o = n);
            } else if (c > 0) {
              if (n > o) return;
              n > d && (d = n);
            }

            if (n = t - a, c || !(n < 0)) {
              if (n /= c, c < 0) {
                if (n > o) return;
                n > d && (d = n);
              } else if (c > 0) {
                if (n < d) return;
                n < o && (o = n);
              }

              return !(d > 0 || o < 1) || (d > 0 && (e[0] = [u + d * g, a + d * c]), o < 1 && (e[1] = [u + o * g, a + o * c]), !0);
            }
          }
        }
      }
    }

    function n(e, r, i, f, t) {
      var n = e[1];
      if (n) return !0;
      var s,
          l,
          u = e[0],
          a = e.left,
          d = e.right,
          o = a[0],
          g = a[1],
          c = d[0],
          p = d[1],
          h = (o + c) / 2,
          v = (g + p) / 2;

      if (p === g) {
        if (h < r || h >= f) return;

        if (o > c) {
          if (u) {
            if (u[1] >= t) return;
          } else u = [h, i];

          n = [h, t];
        } else {
          if (u) {
            if (u[1] < i) return;
          } else u = [h, t];

          n = [h, i];
        }
      } else if (l = v - (s = (o - c) / (p - g)) * h, s < -1 || s > 1) {
        if (o > c) {
          if (u) {
            if (u[1] >= t) return;
          } else u = [(i - l) / s, i];

          n = [(t - l) / s, t];
        } else {
          if (u) {
            if (u[1] < i) return;
          } else u = [(t - l) / s, t];

          n = [(i - l) / s, i];
        }
      } else if (g < p) {
        if (u) {
          if (u[0] >= f) return;
        } else u = [r, s * r + l];

        n = [f, s * f + l];
      } else {
        if (u) {
          if (u[0] < r) return;
        } else u = [f, s * f + l];

        n = [r, s * r + l];
      }

      return e[0] = u, e[1] = n, !0;
    }

    function s(r, i, f, s) {
      for (var l, u = e.edges.length; u--;) {
        n(l = e.edges[u], r, i, f, s) && t(l, r, i, f, s) && (Math.abs(l[0][0] - l[1][0]) > e.epsilon || Math.abs(l[0][1] - l[1][1]) > e.epsilon) || delete e.edges[u];
      }
    }
  }, {
    "./Diagram": "Jn8D"
  }],
  "zWBx": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.createCell = l, exports.cellHalfedgeStart = t, exports.cellHalfedgeEnd = a, exports.sortCellHalfedges = n, exports.clipCells = o;

    var e = require("./Edge"),
        s = require("./Diagram");

    function l(e) {
      return s.cells[e.index] = {
        site: e,
        halfedges: []
      };
    }

    function r(e, s) {
      var l = e.site,
          r = s.left,
          t = s.right;
      return l === t && (t = r, r = l), t ? Math.atan2(t[1] - r[1], t[0] - r[0]) : (l === r ? (r = s[1], t = s[0]) : (r = s[0], t = s[1]), Math.atan2(r[0] - t[0], t[1] - r[1]));
    }

    function t(e, s) {
      return s[+(s.left !== e.site)];
    }

    function a(e, s) {
      return s[+(s.left === e.site)];
    }

    function n() {
      for (var e, l, t, a, n = 0, o = s.cells.length; n < o; ++n) {
        if ((e = s.cells[n]) && (a = (l = e.halfedges).length)) {
          var i = new Array(a),
              d = new Array(a);

          for (t = 0; t < a; ++t) {
            i[t] = t, d[t] = r(e, s.edges[l[t]]);
          }

          for (i.sort(function (e, s) {
            return d[s] - d[e];
          }), t = 0; t < a; ++t) {
            d[t] = l[i[t]];
          }

          for (t = 0; t < a; ++t) {
            l[t] = d[t];
          }
        }
      }
    }

    function o(l, r, n, o) {
      var i,
          d,
          f,
          g,
          h,
          p,
          c,
          u,
          M,
          b,
          v,
          x,
          E = s.cells.length,
          B = !0;

      for (i = 0; i < E; ++i) {
        if (d = s.cells[i]) {
          for (f = d.site, g = (h = d.halfedges).length; g--;) {
            s.edges[h[g]] || h.splice(g, 1);
          }

          for (g = 0, p = h.length; g < p;) {
            v = (b = a(d, s.edges[h[g]]))[0], x = b[1], u = (c = t(d, s.edges[h[++g % p]]))[0], M = c[1], (Math.abs(v - u) > s.epsilon || Math.abs(x - M) > s.epsilon) && (h.splice(g, 0, s.edges.push((0, e.createBorderEdge)(f, b, Math.abs(v - l) < s.epsilon && o - x > s.epsilon ? [l, Math.abs(u - l) < s.epsilon ? M : o] : Math.abs(x - o) < s.epsilon && n - v > s.epsilon ? [Math.abs(M - o) < s.epsilon ? u : n, o] : Math.abs(v - n) < s.epsilon && x - r > s.epsilon ? [n, Math.abs(u - n) < s.epsilon ? M : r] : Math.abs(x - r) < s.epsilon && v - l > s.epsilon ? [Math.abs(M - r) < s.epsilon ? u : l, r] : null)) - 1), ++p);
          }

          p && (B = !1);
        }
      }

      if (B) {
        var y,
            C,
            H,
            q = 1 / 0;

        for (i = 0, B = null; i < E; ++i) {
          (d = s.cells[i]) && (H = (y = (f = d.site)[0] - l) * y + (C = f[1] - r) * C) < q && (q = H, B = d);
        }

        if (B) {
          var w = [l, r],
              A = [l, o],
              _ = [n, o],
              j = [n, r];
          B.halfedges.push(s.edges.push((0, e.createBorderEdge)(f = B.site, w, A)) - 1, s.edges.push((0, e.createBorderEdge)(f, A, _)) - 1, s.edges.push((0, e.createBorderEdge)(f, _, j)) - 1, s.edges.push((0, e.createBorderEdge)(f, j, w)) - 1);
        }
      }

      for (i = 0; i < E; ++i) {
        (d = s.cells[i]) && (d.halfedges.length || delete s.cells[i]);
      }
    }
  }, {
    "./Edge": "Tkpe",
    "./Diagram": "Jn8D"
  }],
  "HznJ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.attachCircle = c, exports.detachCircle = l, exports.firstCircle = void 0;

    var e,
        r = require("./RedBlackTree"),
        i = require("./Diagram"),
        t = [];

    function s() {
      (0, r.RedBlackNode)(this), this.x = this.y = this.arc = this.site = this.cy = null;
    }

    function c(r) {
      var c = r.P,
          l = r.N;

      if (c && l) {
        var a = c.site,
            o = r.site,
            f = l.site;

        if (a !== f) {
          var n = o[0],
              p = o[1],
              u = a[0] - n,
              x = a[1] - p,
              h = f[0] - n,
              v = f[1] - p,
              d = 2 * (u * v - x * h);

          if (!(d >= -i.epsilon2)) {
            var y = u * u + x * x,
                C = h * h + v * v,
                k = (v * y - x * C) / d,
                R = (u * C - h * y) / d,
                N = t.pop() || new s();
            N.arc = r, N.site = o, N.x = k + n, N.y = (N.cy = R + p) + Math.sqrt(k * k + R * R), r.circle = N;

            for (var P = null, b = i.circles._; b;) {
              if (N.y < b.y || N.y === b.y && N.x <= b.x) {
                if (!b.L) {
                  P = b.P;
                  break;
                }

                b = b.L;
              } else {
                if (!b.R) {
                  P = b;
                  break;
                }

                b = b.R;
              }
            }

            i.circles.insert(P, N), P || (exports.firstCircle = e = N);
          }
        }
      }
    }

    function l(s) {
      var c = s.circle;
      c && (c.P || (exports.firstCircle = e = c.N), i.circles.remove(c), t.push(c), (0, r.RedBlackNode)(c), s.circle = null);
    }

    exports.firstCircle = e;
  }, {
    "./RedBlackTree": "cyhV",
    "./Diagram": "Jn8D"
  }],
  "vrdo": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.removeBeach = d, exports.addBeach = h;

    var e = require("./RedBlackTree"),
        r = require("./Cell"),
        i = require("./Circle"),
        t = require("./Edge"),
        c = require("./Diagram"),
        a = [];

    function s() {
      (0, e.RedBlackNode)(this), this.edge = this.site = this.circle = null;
    }

    function l(e) {
      var r = a.pop() || new s();
      return r.site = e, r;
    }

    function n(r) {
      (0, i.detachCircle)(r), c.beaches.remove(r), a.push(r), (0, e.RedBlackNode)(r);
    }

    function d(e) {
      var r = e.circle,
          a = r.x,
          s = r.cy,
          l = [a, s],
          d = e.P,
          h = e.N,
          u = [e];
      n(e);

      for (var o = d; o.circle && Math.abs(a - o.circle.x) < c.epsilon && Math.abs(s - o.circle.cy) < c.epsilon;) {
        d = o.P, u.unshift(o), n(o), o = d;
      }

      u.unshift(o), (0, i.detachCircle)(o);

      for (var f = h; f.circle && Math.abs(a - f.circle.x) < c.epsilon && Math.abs(s - f.circle.cy) < c.epsilon;) {
        h = f.N, u.push(f), n(f), f = h;
      }

      u.push(f), (0, i.detachCircle)(f);
      var g,
          v = u.length;

      for (g = 1; g < v; ++g) {
        f = u[g], o = u[g - 1], (0, t.setEdgeEnd)(f.edge, o.site, f.site, l);
      }

      o = u[0], (f = u[v - 1]).edge = (0, t.createEdge)(o.site, f.site, null, l), (0, i.attachCircle)(o), (0, i.attachCircle)(f);
    }

    function h(e) {
      for (var a, s, n, d, h = e[0], f = e[1], g = c.beaches._; g;) {
        if ((n = u(g, f) - h) > c.epsilon) g = g.L;else {
          if (!((d = h - o(g, f)) > c.epsilon)) {
            n > -c.epsilon ? (a = g.P, s = g) : d > -c.epsilon ? (a = g, s = g.N) : a = s = g;
            break;
          }

          if (!g.R) {
            a = g;
            break;
          }

          g = g.R;
        }
      }

      (0, r.createCell)(e);
      var v = l(e);

      if (c.beaches.insert(a, v), a || s) {
        if (a === s) return (0, i.detachCircle)(a), s = l(a.site), c.beaches.insert(v, s), v.edge = s.edge = (0, t.createEdge)(a.site, v.site), (0, i.attachCircle)(a), void (0, i.attachCircle)(s);

        if (s) {
          (0, i.detachCircle)(a), (0, i.detachCircle)(s);
          var p = a.site,
              C = p[0],
              b = p[1],
              E = e[0] - C,
              q = e[1] - b,
              x = s.site,
              M = x[0] - C,
              N = x[1] - b,
              k = 2 * (E * N - q * M),
              B = E * E + q * q,
              P = M * M + N * N,
              R = [(N * B - q * P) / k + C, (E * P - M * B) / k + b];
          (0, t.setEdgeEnd)(s.edge, p, x, R), v.edge = (0, t.createEdge)(p, e, null, R), s.edge = (0, t.createEdge)(e, x, null, R), (0, i.attachCircle)(a), (0, i.attachCircle)(s);
        } else v.edge = (0, t.createEdge)(a.site, v.site);
      }
    }

    function u(e, r) {
      var i = e.site,
          t = i[0],
          c = i[1],
          a = c - r;
      if (!a) return t;
      var s = e.P;
      if (!s) return -1 / 0;
      var l = (i = s.site)[0],
          n = i[1],
          d = n - r;
      if (!d) return l;
      var h = l - t,
          u = 1 / a - 1 / d,
          o = h / d;
      return u ? (-o + Math.sqrt(o * o - 2 * u * (h * h / (-2 * d) - n + d / 2 + c - a / 2))) / u + t : (t + l) / 2;
    }

    function o(e, r) {
      var i = e.N;
      if (i) return u(i, r);
      var t = e.site;
      return t[1] === r ? t[0] : 1 / 0;
    }
  }, {
    "./RedBlackTree": "cyhV",
    "./Cell": "zWBx",
    "./Circle": "HznJ",
    "./Edge": "Tkpe",
    "./Diagram": "Jn8D"
  }],
  "Jn8D": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = h, exports.edges = exports.circles = exports.cells = exports.beaches = exports.epsilon2 = exports.epsilon = void 0;

    var e = require("./Beach"),
        r = require("./Cell"),
        t = require("./Circle"),
        s = require("./Edge"),
        l = i(require("./RedBlackTree"));

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var n = 1e-6;
    exports.epsilon = n;
    var o,
        a,
        c,
        u,
        f = 1e-12;

    function d(e, r, t) {
      return (e[0] - t[0]) * (r[1] - e[1]) - (e[0] - r[0]) * (t[1] - e[1]);
    }

    function p(e, r) {
      return r[1] - e[1] || r[0] - e[0];
    }

    function h(i, n) {
      var f,
          d,
          h,
          g = i.sort(p).pop();

      for (exports.edges = u = [], exports.cells = a = new Array(i.length), exports.beaches = o = new l.default(), exports.circles = c = new l.default();;) {
        if (h = t.firstCircle, g && (!h || g[1] < h.y || g[1] === h.y && g[0] < h.x)) g[0] === f && g[1] === d || ((0, e.addBeach)(g), f = g[0], d = g[1]), g = i.pop();else {
          if (!h) break;
          (0, e.removeBeach)(h.arc);
        }
      }

      if ((0, r.sortCellHalfedges)(), n) {
        var x = +n[0][0],
            v = +n[0][1],
            b = +n[1][0],
            y = +n[1][1];
        (0, s.clipEdges)(x, v, b, y), (0, r.clipCells)(x, v, b, y);
      }

      this.edges = u, this.cells = a, exports.beaches = o = exports.circles = c = exports.edges = u = exports.cells = a = null;
    }

    exports.epsilon2 = f, exports.beaches = o, exports.cells = a, exports.circles = c, exports.edges = u, h.prototype = {
      constructor: h,
      polygons: function polygons() {
        var e = this.edges;
        return this.cells.map(function (t) {
          var s = t.halfedges.map(function (s) {
            return (0, r.cellHalfedgeStart)(t, e[s]);
          });
          return s.data = t.site.data, s;
        });
      },
      triangles: function triangles() {
        var e = [],
            r = this.edges;
        return this.cells.forEach(function (t, s) {
          if (i = (l = t.halfedges).length) for (var l, i, n, o = t.site, a = -1, c = r[l[i - 1]], u = c.left === o ? c.right : c.left; ++a < i;) {
            n = u, u = (c = r[l[a]]).left === o ? c.right : c.left, n && u && s < n.index && s < u.index && d(o, n, u) < 0 && e.push([o.data, n.data, u.data]);
          }
        }), e;
      },
      links: function links() {
        return this.edges.filter(function (e) {
          return e.right;
        }).map(function (e) {
          return {
            source: e.left.data,
            target: e.right.data
          };
        });
      },
      find: function find(e, r, t) {
        for (var s, l, i = this, n = i._found || 0, o = i.cells.length; !(l = i.cells[n]);) {
          if (++n >= o) return null;
        }

        var a = e - l.site[0],
            c = r - l.site[1],
            u = a * a + c * c;

        do {
          l = i.cells[s = n], n = null, l.halfedges.forEach(function (t) {
            var s = i.edges[t],
                o = s.left;

            if (o !== l.site && o || (o = s.right)) {
              var a = e - o[0],
                  c = r - o[1],
                  f = a * a + c * c;
              f < u && (u = f, n = o.index);
            }
          });
        } while (null !== n);

        return i._found = s, null == t || u <= t * t ? l.site : null;
      }
    };
  }, {
    "./Beach": "vrdo",
    "./Cell": "zWBx",
    "./Circle": "HznJ",
    "./Edge": "Tkpe",
    "./RedBlackTree": "cyhV"
  }],
  "rzeD": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i;

    var e = o(require("./constant")),
        n = require("./point"),
        t = u(require("./Diagram"));

    function r() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return r = function r() {
        return e;
      }, e;
    }

    function u(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var n = r();
      if (n && n.has(e)) return n.get(e);
      var t = {},
          u = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var o in e) {
        if (Object.prototype.hasOwnProperty.call(e, o)) {
          var i = u ? Object.getOwnPropertyDescriptor(e, o) : null;
          i && (i.get || i.set) ? Object.defineProperty(t, o, i) : t[o] = e[o];
        }
      }

      return t.default = e, n && n.set(e, t), t;
    }

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function i() {
      var r = n.x,
          u = n.y,
          o = null;

      function i(e) {
        return new t.default(e.map(function (n, o) {
          var i = [Math.round(r(n, o, e) / t.epsilon) * t.epsilon, Math.round(u(n, o, e) / t.epsilon) * t.epsilon];
          return i.index = o, i.data = n, i;
        }), o);
      }

      return i.polygons = function (e) {
        return i(e).polygons();
      }, i.links = function (e) {
        return i(e).links();
      }, i.triangles = function (e) {
        return i(e).triangles();
      }, i.x = function (n) {
        return arguments.length ? (r = "function" == typeof n ? n : (0, e.default)(+n), i) : r;
      }, i.y = function (n) {
        return arguments.length ? (u = "function" == typeof n ? n : (0, e.default)(+n), i) : u;
      }, i.extent = function (e) {
        return arguments.length ? (o = null == e ? null : [[+e[0][0], +e[0][1]], [+e[1][0], +e[1][1]]], i) : o && [[o[0][0], o[0][1]], [o[1][0], o[1][1]]];
      }, i.size = function (e) {
        return arguments.length ? (o = null == e ? null : [[0, 0], [+e[0], +e[1]]], i) : o && [o[1][0] - o[0][0], o[1][1] - o[0][1]];
      }, i;
    }
  }, {
    "./constant": "OY6d",
    "./point": "aLIe",
    "./Diagram": "Jn8D"
  }],
  "AKDj": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "voronoi", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    });
    var e = r(require("./voronoi"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./voronoi": "rzeD"
  }],
  "pmu8": [function (require, module, exports) {
    "use strict";

    function t(t, e, s) {
      this.target = t, this.type = e, this.transform = s;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "RGu5": [function (require, module, exports) {
    "use strict";

    function t(t, i, n) {
      this.k = t, this.x = i, this.y = n;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.Transform = t, exports.default = n, exports.identity = void 0, t.prototype = {
      constructor: t,
      scale: function scale(i) {
        return 1 === i ? this : new t(this.k * i, this.x, this.y);
      },
      translate: function translate(i, n) {
        return 0 === i & 0 === n ? this : new t(this.k, this.x + this.k * i, this.y + this.k * n);
      },
      apply: function apply(t) {
        return [t[0] * this.k + this.x, t[1] * this.k + this.y];
      },
      applyX: function applyX(t) {
        return t * this.k + this.x;
      },
      applyY: function applyY(t) {
        return t * this.k + this.y;
      },
      invert: function invert(t) {
        return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
      },
      invertX: function invertX(t) {
        return (t - this.x) / this.k;
      },
      invertY: function invertY(t) {
        return (t - this.y) / this.k;
      },
      rescaleX: function rescaleX(t) {
        return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
      },
      rescaleY: function rescaleY(t) {
        return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
      },
      toString: function toString() {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
      }
    };
    var i = new t(1, 0, 0);

    function n(t) {
      for (; !t.__zoom;) {
        if (!(t = t.parentNode)) return i;
      }

      return t.__zoom;
    }

    exports.identity = i, n.prototype = t.prototype;
  }, {}],
  "T0tZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = _;

    var t = require("d3-dispatch"),
        e = require("d3-drag"),
        n = require("d3-interpolate"),
        o = require("d3-selection"),
        i = require("d3-transition"),
        u = l(require("./constant.js")),
        r = l(require("./event.js")),
        s = require("./transform.js"),
        a = c(require("./noevent.js"));

    function h() {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap();
      return h = function h() {
        return t;
      }, t;
    }

    function c(t) {
      if (t && t.__esModule) return t;
      if (null === t || "object" != _typeof(t) && "function" != typeof t) return {
        default: t
      };
      var e = h();
      if (e && e.has(t)) return e.get(t);
      var n = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var i in t) {
        if (Object.prototype.hasOwnProperty.call(t, i)) {
          var u = o ? Object.getOwnPropertyDescriptor(t, i) : null;
          u && (u.get || u.set) ? Object.defineProperty(n, i, u) : n[i] = t[i];
        }
      }

      return n.default = t, e && e.set(t, n), n;
    }

    function l(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function f() {
      return !o.event.ctrlKey && !o.event.button;
    }

    function p() {
      var t = this;
      return t instanceof SVGElement ? (t = t.ownerSVGElement || t).hasAttribute("viewBox") ? [[(t = t.viewBox.baseVal).x, t.y], [t.x + t.width, t.y + t.height]] : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]] : [[0, 0], [t.clientWidth, t.clientHeight]];
    }

    function m() {
      return this.__zoom || s.identity;
    }

    function v() {
      return -o.event.deltaY * (1 === o.event.deltaMode ? .05 : o.event.deltaMode ? 1 : .002);
    }

    function d() {
      return navigator.maxTouchPoints || "ontouchstart" in this;
    }

    function y(t, e, n) {
      var o = t.invertX(e[0][0]) - n[0][0],
          i = t.invertX(e[1][0]) - n[1][0],
          u = t.invertY(e[0][1]) - n[0][1],
          r = t.invertY(e[1][1]) - n[1][1];
      return t.translate(i > o ? (o + i) / 2 : Math.min(0, o) || Math.max(0, i), r > u ? (u + r) / 2 : Math.min(0, u) || Math.max(0, r));
    }

    function _() {
      var h,
          c,
          l = f,
          _ = p,
          z = y,
          g = v,
          w = d,
          x = [0, 1 / 0],
          b = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]],
          M = 250,
          k = n.interpolateZoom,
          T = (0, t.dispatch)("start", "zoom", "end"),
          j = 500,
          q = 150,
          O = 0;

      function P(t) {
        t.property("__zoom", m).on("wheel.zoom", W).on("mousedown.zoom", G).on("dblclick.zoom", K).filter(w).on("touchstart.zoom", S).on("touchmove.zoom", A).on("touchend.zoom touchcancel.zoom", H).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
      }

      function E(t, e) {
        return (e = Math.max(x[0], Math.min(x[1], e))) === t.k ? t : new s.Transform(e, t.x, t.y);
      }

      function D(t, e, n) {
        var o = e[0] - n[0] * t.k,
            i = e[1] - n[1] * t.k;
        return o === t.x && i === t.y ? t : new s.Transform(t.k, o, i);
      }

      function V(t) {
        return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2];
      }

      function Y(t, e, n) {
        t.on("start.zoom", function () {
          B(this, arguments).start();
        }).on("interrupt.zoom end.zoom", function () {
          B(this, arguments).end();
        }).tween("zoom", function () {
          var t = arguments,
              o = B(this, t),
              i = _.apply(this, t),
              u = null == n ? V(i) : "function" == typeof n ? n.apply(this, t) : n,
              r = Math.max(i[1][0] - i[0][0], i[1][1] - i[0][1]),
              a = this.__zoom,
              h = "function" == typeof e ? e.apply(this, t) : e,
              c = k(a.invert(u).concat(r / a.k), h.invert(u).concat(r / h.k));

          return function (t) {
            if (1 === t) t = h;else {
              var e = c(t),
                  n = r / e[2];
              t = new s.Transform(n, u[0] - e[0] * n, u[1] - e[1] * n);
            }
            o.zoom(null, t);
          };
        });
      }

      function B(t, e, n) {
        return !n && t.__zooming || new X(t, e);
      }

      function X(t, e) {
        this.that = t, this.args = e, this.active = 0, this.extent = _.apply(t, e), this.taps = 0;
      }

      function W() {
        if (l.apply(this, arguments)) {
          var t = B(this, arguments),
              e = this.__zoom,
              n = Math.max(x[0], Math.min(x[1], e.k * Math.pow(2, g.apply(this, arguments)))),
              u = (0, o.mouse)(this);
          if (t.wheel) t.mouse[0][0] === u[0] && t.mouse[0][1] === u[1] || (t.mouse[1] = e.invert(t.mouse[0] = u)), clearTimeout(t.wheel);else {
            if (e.k === n) return;
            t.mouse = [u, e.invert(u)], (0, i.interrupt)(this), t.start();
          }
          (0, a.default)(), t.wheel = setTimeout(function () {
            t.wheel = null, t.end();
          }, q), t.zoom("mouse", z(D(E(e, n), t.mouse[0], t.mouse[1]), t.extent, b));
        }
      }

      function G() {
        if (!c && l.apply(this, arguments)) {
          var t = B(this, arguments, !0),
              n = (0, o.select)(o.event.view).on("mousemove.zoom", function () {
            if ((0, a.default)(), !t.moved) {
              var e = o.event.clientX - r,
                  n = o.event.clientY - s;
              t.moved = e * e + n * n > O;
            }

            t.zoom("mouse", z(D(t.that.__zoom, t.mouse[0] = (0, o.mouse)(t.that), t.mouse[1]), t.extent, b));
          }, !0).on("mouseup.zoom", function () {
            n.on("mousemove.zoom mouseup.zoom", null), (0, e.dragEnable)(o.event.view, t.moved), (0, a.default)(), t.end();
          }, !0),
              u = (0, o.mouse)(this),
              r = o.event.clientX,
              s = o.event.clientY;
          (0, e.dragDisable)(o.event.view), (0, a.nopropagation)(), t.mouse = [u, this.__zoom.invert(u)], (0, i.interrupt)(this), t.start();
        }
      }

      function K() {
        if (l.apply(this, arguments)) {
          var t = this.__zoom,
              e = (0, o.mouse)(this),
              n = t.invert(e),
              i = t.k * (o.event.shiftKey ? .5 : 2),
              u = z(D(E(t, i), e, n), _.apply(this, arguments), b);
          (0, a.default)(), M > 0 ? (0, o.select)(this).transition().duration(M).call(Y, u, e) : (0, o.select)(this).call(P.transform, u);
        }
      }

      function S() {
        if (l.apply(this, arguments)) {
          var t,
              e,
              n,
              u,
              r = o.event.touches,
              s = r.length,
              c = B(this, arguments, o.event.changedTouches.length === s);

          for ((0, a.nopropagation)(), e = 0; e < s; ++e) {
            n = r[e], u = [u = (0, o.touch)(this, r, n.identifier), this.__zoom.invert(u), n.identifier], c.touch0 ? c.touch1 || c.touch0[2] === u[2] || (c.touch1 = u, c.taps = 0) : (c.touch0 = u, t = !0, c.taps = 1 + !!h);
          }

          h && (h = clearTimeout(h)), t && (c.taps < 2 && (h = setTimeout(function () {
            h = null;
          }, j)), (0, i.interrupt)(this), c.start());
        }
      }

      function A() {
        if (this.__zooming) {
          var t,
              e,
              n,
              i,
              u = B(this, arguments),
              r = o.event.changedTouches,
              s = r.length;

          for ((0, a.default)(), h && (h = clearTimeout(h)), u.taps = 0, t = 0; t < s; ++t) {
            e = r[t], n = (0, o.touch)(this, r, e.identifier), u.touch0 && u.touch0[2] === e.identifier ? u.touch0[0] = n : u.touch1 && u.touch1[2] === e.identifier && (u.touch1[0] = n);
          }

          if (e = u.that.__zoom, u.touch1) {
            var c = u.touch0[0],
                l = u.touch0[1],
                f = u.touch1[0],
                p = u.touch1[1],
                m = (m = f[0] - c[0]) * m + (m = f[1] - c[1]) * m,
                v = (v = p[0] - l[0]) * v + (v = p[1] - l[1]) * v;
            e = E(e, Math.sqrt(m / v)), n = [(c[0] + f[0]) / 2, (c[1] + f[1]) / 2], i = [(l[0] + p[0]) / 2, (l[1] + p[1]) / 2];
          } else {
            if (!u.touch0) return;
            n = u.touch0[0], i = u.touch0[1];
          }

          u.zoom("touch", z(D(e, n, i), u.extent, b));
        }
      }

      function H() {
        if (this.__zooming) {
          var t,
              e,
              n = B(this, arguments),
              i = o.event.changedTouches,
              u = i.length;

          for ((0, a.nopropagation)(), c && clearTimeout(c), c = setTimeout(function () {
            c = null;
          }, j), t = 0; t < u; ++t) {
            e = i[t], n.touch0 && n.touch0[2] === e.identifier ? delete n.touch0 : n.touch1 && n.touch1[2] === e.identifier && delete n.touch1;
          }

          if (n.touch1 && !n.touch0 && (n.touch0 = n.touch1, delete n.touch1), n.touch0) n.touch0[1] = this.__zoom.invert(n.touch0[0]);else if (n.end(), 2 === n.taps) {
            var r = (0, o.select)(this).on("dblclick.zoom");
            r && r.apply(this, arguments);
          }
        }
      }

      return P.transform = function (t, e, n) {
        var o = t.selection ? t.selection() : t;
        o.property("__zoom", m), t !== o ? Y(t, e, n) : o.interrupt().each(function () {
          B(this, arguments).start().zoom(null, "function" == typeof e ? e.apply(this, arguments) : e).end();
        });
      }, P.scaleBy = function (t, e, n) {
        P.scaleTo(t, function () {
          return this.__zoom.k * ("function" == typeof e ? e.apply(this, arguments) : e);
        }, n);
      }, P.scaleTo = function (t, e, n) {
        P.transform(t, function () {
          var t = _.apply(this, arguments),
              o = this.__zoom,
              i = null == n ? V(t) : "function" == typeof n ? n.apply(this, arguments) : n,
              u = o.invert(i),
              r = "function" == typeof e ? e.apply(this, arguments) : e;

          return z(D(E(o, r), i, u), t, b);
        }, n);
      }, P.translateBy = function (t, e, n) {
        P.transform(t, function () {
          return z(this.__zoom.translate("function" == typeof e ? e.apply(this, arguments) : e, "function" == typeof n ? n.apply(this, arguments) : n), _.apply(this, arguments), b);
        });
      }, P.translateTo = function (t, e, n, o) {
        P.transform(t, function () {
          var t = _.apply(this, arguments),
              i = this.__zoom,
              u = null == o ? V(t) : "function" == typeof o ? o.apply(this, arguments) : o;

          return z(s.identity.translate(u[0], u[1]).scale(i.k).translate("function" == typeof e ? -e.apply(this, arguments) : -e, "function" == typeof n ? -n.apply(this, arguments) : -n), t, b);
        }, o);
      }, X.prototype = {
        start: function start() {
          return 1 == ++this.active && (this.that.__zooming = this, this.emit("start")), this;
        },
        zoom: function zoom(t, e) {
          return this.mouse && "mouse" !== t && (this.mouse[1] = e.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = e.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = e.invert(this.touch1[0])), this.that.__zoom = e, this.emit("zoom"), this;
        },
        end: function end() {
          return 0 == --this.active && (delete this.that.__zooming, this.emit("end")), this;
        },
        emit: function emit(t) {
          (0, o.customEvent)(new r.default(P, t, this.that.__zoom), T.apply, T, [t, this.that, this.args]);
        }
      }, P.wheelDelta = function (t) {
        return arguments.length ? (g = "function" == typeof t ? t : (0, u.default)(+t), P) : g;
      }, P.filter = function (t) {
        return arguments.length ? (l = "function" == typeof t ? t : (0, u.default)(!!t), P) : l;
      }, P.touchable = function (t) {
        return arguments.length ? (w = "function" == typeof t ? t : (0, u.default)(!!t), P) : w;
      }, P.extent = function (t) {
        return arguments.length ? (_ = "function" == typeof t ? t : (0, u.default)([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]), P) : _;
      }, P.scaleExtent = function (t) {
        return arguments.length ? (x[0] = +t[0], x[1] = +t[1], P) : [x[0], x[1]];
      }, P.translateExtent = function (t) {
        return arguments.length ? (b[0][0] = +t[0][0], b[1][0] = +t[1][0], b[0][1] = +t[0][1], b[1][1] = +t[1][1], P) : [[b[0][0], b[0][1]], [b[1][0], b[1][1]]];
      }, P.constrain = function (t) {
        return arguments.length ? (z = t, P) : z;
      }, P.duration = function (t) {
        return arguments.length ? (M = +t, P) : M;
      }, P.interpolate = function (t) {
        return arguments.length ? (k = t, P) : k;
      }, P.on = function () {
        var t = T.on.apply(T, arguments);
        return t === T ? P : t;
      }, P.clickDistance = function (t) {
        return arguments.length ? (O = (t = +t) * t, P) : Math.sqrt(O);
      }, P;
    }
  }, {
    "d3-dispatch": "UUCs",
    "d3-drag": "LrBi",
    "d3-interpolate": "mkGF",
    "d3-selection": "lm1C",
    "d3-transition": "Fcbi",
    "./constant.js": "OY6d",
    "./event.js": "pmu8",
    "./transform.js": "RGu5",
    "./noevent.js": "DCEg"
  }],
  "uzwd": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "zoom", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "zoomTransform", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "zoomIdentity", {
      enumerable: !0,
      get: function get() {
        return t.identity;
      }
    });
    var e = o(require("./zoom.js")),
        t = n(require("./transform.js"));

    function r() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return r = function r() {
        return e;
      }, e;
    }

    function n(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var t = r();
      if (t && t.has(e)) return t.get(e);
      var n = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var u in e) {
        if (Object.prototype.hasOwnProperty.call(e, u)) {
          var f = o ? Object.getOwnPropertyDescriptor(e, u) : null;
          f && (f.get || f.set) ? Object.defineProperty(n, u, f) : n[u] = e[u];
        }
      }

      return n.default = e, t && t.set(e, n), n;
    }

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./zoom.js": "T0tZ",
    "./transform.js": "RGu5"
  }],
  "BG5c": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var e = {
      version: !0
    };
    Object.defineProperty(exports, "version", {
      enumerable: !0,
      get: function get() {
        return r.version;
      }
    });

    var r = require("./dist/package.js"),
        t = require("d3-array");

    Object.keys(t).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return t[r];
        }
      }));
    });

    var o = require("d3-axis");

    Object.keys(o).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return o[r];
        }
      }));
    });

    var n = require("d3-brush");

    Object.keys(n).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return n[r];
        }
      }));
    });

    var c = require("d3-chord");

    Object.keys(c).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return c[r];
        }
      }));
    });

    var u = require("d3-collection");

    Object.keys(u).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return u[r];
        }
      }));
    });

    var a = require("d3-color");

    Object.keys(a).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return a[r];
        }
      }));
    });

    var l = require("d3-contour");

    Object.keys(l).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return l[r];
        }
      }));
    });

    var p = require("d3-dispatch");

    Object.keys(p).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return p[r];
        }
      }));
    });

    var f = require("d3-drag");

    Object.keys(f).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return f[r];
        }
      }));
    });

    var i = require("d3-dsv");

    Object.keys(i).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return i[r];
        }
      }));
    });

    var s = require("d3-ease");

    Object.keys(s).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return s[r];
        }
      }));
    });

    var d = require("d3-fetch");

    Object.keys(d).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return d[r];
        }
      }));
    });

    var y = require("d3-force");

    Object.keys(y).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return y[r];
        }
      }));
    });

    var b = require("d3-format");

    Object.keys(b).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return b[r];
        }
      }));
    });

    var O = require("d3-geo");

    Object.keys(O).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return O[r];
        }
      }));
    });

    var j = require("d3-hierarchy");

    Object.keys(j).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return j[r];
        }
      }));
    });

    var h = require("d3-interpolate");

    Object.keys(h).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return h[r];
        }
      }));
    });

    var P = require("d3-path");

    Object.keys(P).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return P[r];
        }
      }));
    });

    var _ = require("d3-polygon");

    Object.keys(_).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return _[r];
        }
      }));
    });

    var m = require("d3-quadtree");

    Object.keys(m).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return m[r];
        }
      }));
    });

    var v = require("d3-random");

    Object.keys(v).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return v[r];
        }
      }));
    });

    var g = require("d3-scale");

    Object.keys(g).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return g[r];
        }
      }));
    });

    var x = require("d3-scale-chromatic");

    Object.keys(x).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return x[r];
        }
      }));
    });

    var q = require("d3-selection");

    Object.keys(q).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return q[r];
        }
      }));
    });

    var k = require("d3-shape");

    Object.keys(k).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return k[r];
        }
      }));
    });

    var M = require("d3-time");

    Object.keys(M).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return M[r];
        }
      }));
    });

    var w = require("d3-time-format");

    Object.keys(w).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return w[r];
        }
      }));
    });

    var E = require("d3-timer");

    Object.keys(E).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return E[r];
        }
      }));
    });

    var z = require("d3-transition");

    Object.keys(z).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return z[r];
        }
      }));
    });

    var A = require("d3-voronoi");

    Object.keys(A).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return A[r];
        }
      }));
    });

    var B = require("d3-zoom");

    Object.keys(B).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return B[r];
        }
      }));
    });
  }, {
    "./dist/package.js": "hADF",
    "d3-array": "cBuZ",
    "d3-axis": "y9Kr",
    "d3-brush": "TNt0",
    "d3-chord": "cf1F",
    "d3-collection": "qqV1",
    "d3-color": "TJ2K",
    "d3-contour": "cfrl",
    "d3-dispatch": "UUCs",
    "d3-drag": "LrBi",
    "d3-dsv": "mQVF",
    "d3-ease": "CFyW",
    "d3-fetch": "hNko",
    "d3-force": "YpA1",
    "d3-format": "gWev",
    "d3-geo": "LMxt",
    "d3-hierarchy": "wNQE",
    "d3-interpolate": "mkGF",
    "d3-path": "dz42",
    "d3-polygon": "QnuL",
    "d3-quadtree": "oxc3",
    "d3-random": "WQ4D",
    "d3-scale": "ztAj",
    "d3-scale-chromatic": "zd6o",
    "d3-selection": "lm1C",
    "d3-shape": "pWU4",
    "d3-time": "F00f",
    "d3-time-format": "zs1a",
    "d3-timer": "CBES",
    "d3-transition": "Fcbi",
    "d3-voronoi": "AKDj",
    "d3-zoom": "uzwd"
  }],
  "gB0L": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    });

    var t = require("d3"),
        e = function e(t, _e, n) {
      return t.append("g").selectAll(n).data(_e).enter().append(n);
    };

    exports.d3Connections = function (t, n) {
      return e(t, n, "path").attr("class", "mindmap-connection");
    }, exports.d3Nodes = function (t, e) {
      return {
        nodes: t.append("g").selectAll("foreignObject").data(e).enter().append("foreignObject").attr("class", "mindmap-node").attr("width", function (t) {
          return t.width + 4;
        }).attr("height", function (t) {
          return t.height;
        }).html(function (t) {
          return t.html;
        })
      };
    }, exports.onTick = function (t, e) {
      t.attr("d", function (t) {
        return ["M", t.source.x, ",", t.source.y, " ", "C", (t.source.x + t.target.x) / 2, ",", t.source.y, " ", (t.source.x + t.target.x) / 2, ",", t.target.y, " ", t.target.x, ",", t.target.y].join("");
      }), e.attr("x", function (t) {
        return t.x - t.width / 2;
      }).attr("y", function (t) {
        return t.y - t.height / 2;
      });
    }, exports.d3Drag = function (e, n, r) {
      return t.drag().on("start", function (n) {
        t.event.active || e.alphaTarget(.2).restart(), n.fx = n.x, n.fy = n.y;
      }).on("drag", function (e) {
        e.fx = t.event.x, e.fy = t.event.y;
      }).on("end", function () {
        t.event.active || e.alphaTarget(0);
      });
    }, exports.d3PanZoom = function (e) {
      return t.zoom().scaleExtent([.3, 5]).on("zoom", function () {
        return e.selectAll("svg > g").attr("transform", t.event.transform);
      });
    }, exports.d3NodeClick = function (e, n) {
      switch (t.event.stopPropagation(), t.event.target.className) {
        case "fas fa-plus-circle":
          return "add";

        case "fas fa-pencil-alt":
          return "edit";

        case "fas fa-trash-alt":
          return "remove";

        case "node-text":
          return "click";
      }
    };
  }, {
    "d3": "BG5c"
  }],
  "ogM3": [function (require, module, exports) {
    var e = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);

    if (e) {
      var o = new Uint8Array(16);

      module.exports = function () {
        return e(o), o;
      };
    } else {
      var r = new Array(16);

      module.exports = function () {
        for (var e, o = 0; o < 16; o++) {
          0 == (3 & o) && (e = 4294967296 * Math.random()), r[o] = e >>> ((3 & o) << 3) & 255;
        }

        return r;
      };
    }
  }, {}],
  "O4sp": [function (require, module, exports) {
    for (var r = [], o = 0; o < 256; ++o) {
      r[o] = (o + 256).toString(16).substr(1);
    }

    function t(o, t) {
      var n = t || 0,
          u = r;
      return [u[o[n++]], u[o[n++]], u[o[n++]], u[o[n++]], "-", u[o[n++]], u[o[n++]], "-", u[o[n++]], u[o[n++]], "-", u[o[n++]], u[o[n++]], "-", u[o[n++]], u[o[n++]], u[o[n++]], u[o[n++]], u[o[n++]], u[o[n++]]].join("");
    }

    module.exports = t;
  }, {}],
  "acME": [function (require, module, exports) {
    var e,
        r,
        o = require("./lib/rng"),
        s = require("./lib/bytesToUuid"),
        i = 0,
        n = 0;

    function c(c, l, u) {
      var v = l && u || 0,
          a = l || [],
          d = (c = c || {}).node || e,
          t = void 0 !== c.clockseq ? c.clockseq : r;

      if (null == d || null == t) {
        var m = o();
        null == d && (d = e = [1 | m[0], m[1], m[2], m[3], m[4], m[5]]), null == t && (t = r = 16383 & (m[6] << 8 | m[7]));
      }

      var q = void 0 !== c.msecs ? c.msecs : new Date().getTime(),
          f = void 0 !== c.nsecs ? c.nsecs : n + 1,
          b = q - i + (f - n) / 1e4;
      if (b < 0 && void 0 === c.clockseq && (t = t + 1 & 16383), (b < 0 || q > i) && void 0 === c.nsecs && (f = 0), f >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      i = q, n = f, r = t;
      var k = (1e4 * (268435455 & (q += 122192928e5)) + f) % 4294967296;
      a[v++] = k >>> 24 & 255, a[v++] = k >>> 16 & 255, a[v++] = k >>> 8 & 255, a[v++] = 255 & k;
      var w = q / 4294967296 * 1e4 & 268435455;
      a[v++] = w >>> 8 & 255, a[v++] = 255 & w, a[v++] = w >>> 24 & 15 | 16, a[v++] = w >>> 16 & 255, a[v++] = t >>> 8 | 128, a[v++] = 255 & t;

      for (var g = 0; g < 6; ++g) {
        a[v + g] = d[g];
      }

      return l || s(a);
    }

    module.exports = c;
  }, {
    "./lib/rng": "ogM3",
    "./lib/bytesToUuid": "O4sp"
  }],
  "UOdq": [function (require, module, exports) {
    var r = require("./lib/rng"),
        n = require("./lib/bytesToUuid");

    function e(e, i, u) {
      var a = i && u || 0;
      "string" == typeof e && (i = "binary" === e ? new Array(16) : null, e = null);
      var l = (e = e || {}).random || (e.rng || r)();
      if (l[6] = 15 & l[6] | 64, l[8] = 63 & l[8] | 128, i) for (var o = 0; o < 16; ++o) {
        i[a + o] = l[o];
      }
      return i || n(l);
    }

    module.exports = e;
  }, {
    "./lib/rng": "ogM3",
    "./lib/bytesToUuid": "O4sp"
  }],
  "gV9a": [function (require, module, exports) {
    var e = require("./v1"),
        r = require("./v4"),
        v = r;

    v.v1 = e, v.v4 = r, module.exports = v;
  }, {
    "./v1": "acME",
    "./v4": "UOdq"
  }],
  "MA9F": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.getDimensions = function (t, e, n) {
      var a = document.createElement("span"),
          i = {};
      return a.style.display = "inline-block", a.style.visibility = "hidden", a.className = n, a.innerHTML = t, Object.keys(e).forEach(function (t) {
        a.style[t] = e[t];
      }), document.body.append(a), i.width = a.offsetWidth, i.height = a.offsetHeight, i;
    }, exports.getViewBox = function (t) {
      var e = [],
          n = [];
      if (t.forEach(function (t) {
        var a = t.x || t.fx,
            i = t.y || t.fy;
        a && e.push(a), i && n.push(i);
      }), 0 === e.length || 0 === n.length) return "0 0 0 0";
      var a = [Math.min.apply(Math, e) - 150, Math.min.apply(Math, n) - 150],
          i = [Math.max.apply(Math, e) - a[0] + 150, Math.max.apply(Math, n) - a[1] + 150];
      return a.join(" ") + " " + i.join(" ");
    };
  }, {}],
  "sgLf": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = function (i) {
      return '\n  <div class="node-body">\n    <div class="options">\n      <div class="option add-item"><i class="fas fa-plus-circle"></i></div>\n      <div class="option edit-item"><i class="fas fa-pencil-alt"></i></div>\n      <div class="option remove-item"><i class="fas fa-trash-alt"></i></div>\n    </div>\n    <a id="node-' + i.id + '" class="node-text">' + (i.text || "") + "</a>\n  </div>";
    };
  }, {}],
  "Gszt": [function (require, module, exports) {
    "use strict";

    var e = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: !0
    });

    var t = require("d3"),
        i = require("./utils/d3"),
        o = e(require("uuid")),
        n = require("./utils/dimensions"),
        r = e(require("./nodeTemplates/nodeToHTML")),
        d = function () {
      function e(e, t) {
        this.nodes = [], this.connections = [], this.editable = !0, this.simulation = null, this.svg = {}, this.addOption = null, this.removeOption = null, this.editOption = null, this.nodes = t.nodes, this.connections = t.connections, this.svg = e;
      }

      return e.prototype.prepareNodes = function () {
        this.nodes.forEach(function (e) {
          return function (e) {
            e.uid = o.default(), e.html = r.default(e);
            var t = n.getDimensions(e.html, {}, "mindmap-node");
            e.width = t.width, e.height = t.height;
          }(e);
        });
      }, e.prototype.prepareEditor = function (e, t, o) {
        var n = this;
        o.attr("class", "mindmap-node mindmap-node--editable").attr("id", function (e) {
          return e.uid;
        }).on("dbclick", function (e) {
          e.fx = null, e.fy = null;
        }), o.call(i.d3Drag(this.simulation, e, o)), o.on("click", function (e, t) {
          n.nodeClickEvent(i.d3NodeClick(e, t), e);
        });

        for (var r = 0; r < 100; r += 1) {
          this.simulation.tick();
        }

        setTimeout(function () {
          n.simulation.alphaTarget(.5).on("tick", function () {
            return i.onTick(t, o);
          });
        }, 200);
      }, e.prototype.renderMap = function () {
        this.simulation = t.forceSimulation().force("link", t.forceLink().id(function (e) {
          return e.id;
        })).force("charge", t.forceManyBody()).force("collide", t.forceCollide().radius(200));
        var e = t.select(this.svg);
        e.selectAll("*").remove(), e.append("g").attr("id", "mindmap-subnodes"), this.prepareNodes();
        var o = i.d3Connections(e, this.connections),
            r = i.d3Nodes(e, this.nodes).nodes;
        r.append("title").text(function (e) {
          return e.uid;
        }), this.simulation.nodes(this.nodes).force("link").links(this.connections), this.editable && this.prepareEditor(e, o, r);

        for (var d = 0; d < 100; d += 1) {
          this.simulation.tick();
        }

        i.onTick(o, r), e.attr("viewBox", n.getViewBox(r.data())).call(i.d3PanZoom(e)).on("dbClick.zoom", null);
      }, e.prototype.nodeClickEvent = function (e, t) {
        switch (e) {
          case "add":
            this.addNewNode(t);
            break;

          case "edit":
            this.editNode(t);
            break;

          case "remove":
            this.removeNode(t);
            break;

          case "click":
            this.clickNode(t);
        }
      }, e.prototype.clickNode = function (e) {
        alert("node clicked ;) ==> " + e.text);
      }, e.prototype.addNewNode = function (e) {
        var t = o.default();
        this.nodes.push({
          id: t,
          text: "new-node",
          fx: e.fx,
          fy: e.fy + 200
        }), this.connections.push({
          source: e.id,
          target: t
        }), this.renderMap();
      }, e.prototype.removeNode = function (e) {
        alert("node remove clicked ;) ==> " + e.text);
      }, e.prototype.editNode = function (e) {
        var t = prompt("node text", e.text);
        null != t && (e.text = t, this.renderMap());
      }, e;
    }();

    exports.MindMap = d;
  }, {
    "d3": "BG5c",
    "./utils/d3": "gB0L",
    "uuid": "gV9a",
    "./utils/dimensions": "MA9F",
    "./nodeTemplates/nodeToHTML": "sgLf"
  }],
  "pmax": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = {
      nodes: [{
        id: "ab60a5d0-611e-49aa-9278-5b9b1a862cdd",
        text: "mind-map root-node (mouse-over each node for more options)",
        fx: -13.916222252976013,
        fy: -659.1641376795345
      }, {
        id: "df788f47-b1d8-41a7-b529-6c24899f4c9f",
        text: "health",
        fx: 154.3247731601375,
        fy: -429.73700786748157
      }, {
        id: "9066b5e5-5021-4e65-bb8e-9a1ff702956c",
        text: "eat helathy food",
        fx: 455.7839253819375,
        fy: -183.5539283546699
      }, {
        id: "4b6bd0db-f2e9-4ab8-a966-aed4413d3da1",
        text: "Physical Fitness",
        fx: -98.5231997717085,
        fy: -60.07462866512333
      }, {
        id: "9b53fa57-dbcd-4ac3-bca5-637ee9eae957",
        text: "How to burn Calory?"
      }, {
        id: "16bb6b97-ab93-4536-ad68-50b95c7d4661",
        text: "work-life balance"
      }, {
        id: "e5ab6e94-42e6-498c-b8c0-da34b4cc690b",
        text: "Calory burning food"
      }],
      connections: [{
        source: "ab60a5d0-611e-49aa-9278-5b9b1a862cdd",
        target: "4b6bd0db-f2e9-4ab8-a966-aed4413d3da1"
      }, {
        source: "df788f47-b1d8-41a7-b529-6c24899f4c9f",
        target: "ab60a5d0-611e-49aa-9278-5b9b1a862cdd"
      }, {
        source: "4b6bd0db-f2e9-4ab8-a966-aed4413d3da1",
        target: "16bb6b97-ab93-4536-ad68-50b95c7d4661"
      }, {
        source: "4b6bd0db-f2e9-4ab8-a966-aed4413d3da1",
        target: "9b53fa57-dbcd-4ac3-bca5-637ee9eae957"
      }, {
        source: "9b53fa57-dbcd-4ac3-bca5-637ee9eae957",
        target: "e5ab6e94-42e6-498c-b8c0-da34b4cc690b"
      }, {
        source: "9066b5e5-5021-4e65-bb8e-9a1ff702956c",
        target: "df788f47-b1d8-41a7-b529-6c24899f4c9f"
      }]
    };
  }, {}],
  "QCba": [function (require, module, exports) {
    "use strict";

    var e = this && this.__assign || function () {
      return (e = Object.assign || function (e) {
        for (var t, r = 1, a = arguments.length; r < a; r++) {
          for (var n in t = arguments[r]) {
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }
        }

        return e;
      }).apply(this, arguments);
    },
        t = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: !0
    });

    var r = require("./mindmap"),
        a = t(require("./data/mapdata"));

    function n() {
      var t = e({}, a.default),
          n = document.getElementById("map");
      new r.MindMap(n, t).renderMap();
    }

    n();
  }, {
    "./mindmap": "Gszt",
    "./data/mapdata": "pmax"
  }]
}, {}, ["QCba"], null);
},{}]