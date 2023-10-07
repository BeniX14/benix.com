(function () {
  function aa(a) {
    var b = 0;
    return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  }
  var l =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, b, c) {
          if (a == Array.prototype || a == Object.prototype) return a;
          a[b] = c.value;
          return a;
        };
  function ba(a) {
    a = [
      "object" == typeof globalThis && globalThis,
      a,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof n && n,
    ];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  }
  var p = ba(this);
  function r(a, b) {
    if (b)
      a: {
        var c = p;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d];
          if (!(e in c)) break a;
          c = c[e];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d &&
          null != b &&
          l(c, a, { configurable: !0, writable: !0, value: b });
      }
  }
  r("Symbol", function (a) {
    function b(f) {
      if (this instanceof b) throw new TypeError("Symbol is not a constructor");
      return new c(d + (f || "") + "_" + e++, f);
    }
    function c(f, h) {
      this.g = f;
      l(this, "description", { configurable: !0, writable: !0, value: h });
    }
    if (a) return a;
    c.prototype.toString = function () {
      return this.g;
    };
    var d = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
      e = 0;
    return b;
  });
  r("Symbol.iterator", function (a) {
    if (a) return a;
    a = Symbol("Symbol.iterator");
    for (
      var b =
          "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
            " "
          ),
        c = 0;
      c < b.length;
      c++
    ) {
      var d = p[b[c]];
      "function" === typeof d &&
        "function" != typeof d.prototype[a] &&
        l(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function () {
            return ca(aa(this));
          },
        });
    }
    return a;
  });
  function ca(a) {
    a = { next: a };
    a[Symbol.iterator] = function () {
      return this;
    };
    return a;
  }
  function u(a, b) {
    a instanceof String && (a += "");
    var c = 0,
      d = !1,
      e = {
        next: function () {
          if (!d && c < a.length) {
            var f = c++;
            return { value: b(f, a[f]), done: !1 };
          }
          d = !0;
          return { done: !0, value: void 0 };
        },
      };
    e[Symbol.iterator] = function () {
      return e;
    };
    return e;
  }
  r("Array.prototype.entries", function (a) {
    return a
      ? a
      : function () {
          return u(this, function (b, c) {
            return [b, c];
          });
        };
  });
  r("Array.prototype.keys", function (a) {
    return a
      ? a
      : function () {
          return u(this, function (b) {
            return b;
          });
        };
  }); /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var v = this || self;
  function w(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.J = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.I = function (d, e, f) {
      for (
        var h = Array(arguments.length - 2), k = 2;
        k < arguments.length;
        k++
      )
        h[k - 2] = arguments[k];
      return b.prototype[e].apply(d, h);
    };
  }
  function x(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, x);
    else {
      var c = Error().stack;
      c && (this.stack = c);
    }
    a && (this.message = String(a));
    void 0 !== b && (this.cause = b);
  }
  w(x, Error);
  x.prototype.name = "CustomError";
  function y(a, b) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++)
      c += a[e] + (e < b.length ? b[e] : "%s");
    x.call(this, c + a[d]);
  }
  w(y, x);
  y.prototype.name = "AssertionError";
  function da(a, b) {
    throw new y(
      "Failure" + (a ? ": " + a : ""),
      Array.prototype.slice.call(arguments, 1)
    );
  }
  function z(a) {
    if (A !== A) throw Error("SafeUrl is not meant to be built directly");
    this.g = a;
  }
  z.prototype.toString = function () {
    return this.g.toString();
  };
  var A = {};
  new z("about:invalid#zClosurez");
  new z("about:blank");
  var B = {};
  function C() {
    if (B !== B) throw Error("SafeStyle is not meant to be built directly");
  }
  C.prototype.toString = function () {
    return "".toString();
  };
  new C();
  var ea = {};
  function fa() {
    if (ea !== ea)
      throw Error("SafeStyleSheet is not meant to be built directly");
  }
  fa.prototype.toString = function () {
    return "".toString();
  };
  new fa();
  var ha = {};
  function ia() {
    var a = (v.trustedTypes && v.trustedTypes.emptyHTML) || "";
    if (ha !== ha) throw Error("SafeHtml is not meant to be built directly");
    this.g = a;
  }
  ia.prototype.toString = function () {
    return this.g.toString();
  };
  new ia();
  function D(a, b) {
    this.name = a;
    this.value = b;
  }
  D.prototype.toString = function () {
    return this.name;
  };
  var ja = new D("OFF", Infinity),
    ka = new D("WARNING", 900),
    la = new D("CONFIG", 700);
  function ma() {}
  var na;
  function oa() {}
  function pa(a, b) {
    this.g = null;
    this.F = [];
    this.i = (void 0 === b ? null : b) || null;
    this.D = [];
    this.G = {
      g: function () {
        return a;
      },
    };
  }
  function qa(a) {
    if (a.g) return a.g;
    if (a.i) return qa(a.i);
    da("Root logger has no level set.");
    return ja;
  }
  function ra(a) {
    for (var b = new oa(); a; )
      a.F.forEach(function (c) {
        c(b);
      }),
        (a = a.i);
  }
  function sa() {
    this.entries = {};
    var a = new pa("");
    a.g = la;
    this.entries[""] = a;
  }
  var E;
  function G(a, b) {
    var c = a.entries[b];
    if (c) return c;
    c = G(a, b.slice(0, Math.max(b.lastIndexOf("."), 0)));
    var d = new pa(b, c);
    a.entries[b] = d;
    c.D.push(d);
    return d;
  }
  function H() {
    E || (E = new sa());
    return E;
  } /*

 SPDX-License-Identifier: Apache-2.0
*/
  var ta = [];
  function ua(a) {
    var b;
    if ((b = G(H(), "safevalues").G)) {
      a = "A URL with content '" + a + "' was sanitized away.";
      var c;
      if ((c = b))
        if ((c = b && ka)) {
          c = ka.value;
          var d = b ? qa(G(H(), b.g())) : ja;
          c = c >= d.value;
        }
      c &&
        ((b = G(H(), b.g())),
        "function" === typeof a && a(),
        na || (na = new ma()),
        ra(b));
    }
  }
  -1 === ta.indexOf(ua) && ta.push(ua);
  function I(a, b, c) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function () {
      var e = d.slice();
      e.push.apply(e, arguments);
      return a.apply(b, e);
    };
  }
  function va(a, b) {
    if (a) {
      var c = Array.prototype.slice.call(arguments, 1);
      try {
        return a.apply(null, c);
      } catch (d) {
        return d;
      }
    }
  }
  var J =
    window.performance && window.performance.timing && window.performance.now
      ? function () {
          return (
            window.performance.timing.navigationStart + window.performance.now()
          );
        }
      : function () {
          return new Date().getTime();
        };
  function K(a, b) {
    if (a.forEach) a.forEach(b, void 0);
    else
      for (var c = 0, d = a.length; c < d; c++)
        c in a && b.call(void 0, a[c], c, a);
  }
  function wa(a, b) {
    if (a.some) return a.some(b, void 0);
    for (var c = 0, d = a.length; c < d; c++)
      if (c in a && b.call(void 0, a[c], c, a)) return !0;
    return !1;
  }
  function L(a) {
    return "[object Array]" == Object.prototype.toString.call(a) ? a : [a];
  }
  function M(a, b) {
    return (N[a] = b);
  }
  var N = window._spf_state || {};
  window._spf_state = N;
  var O = {};
  "config" in N || M("config", O);
  O = N.config;
  function xa(a) {
    var b = P();
    a in b && delete b[a];
  }
  function ya() {
    var a = P();
    for (b in a) za(a[b]) || delete a[b];
    a = P();
    var b = parseInt(O["cache-max"], 10);
    b = isNaN(b) ? Infinity : b;
    b = Object.keys(a).length - b;
    if (!(0 >= b))
      for (var c = 0; c < b; c++) {
        var d = Infinity,
          e;
        for (e in a)
          if (a[e].count < d) {
            var f = e;
            d = a[e].count;
          }
        delete a[f];
      }
  }
  function za(a) {
    if (!(a && "data" in a)) return !1;
    var b = a.life;
    b = isNaN(b) ? Infinity : b;
    a = a.time;
    return J() - a < b;
  }
  function Aa(a) {
    var b = parseInt(N["cache-counter"], 10) || 0;
    b++;
    M("cache-counter", b);
    a.count = b;
  }
  function P() {
    return "cache-storage" in N ? N["cache-storage"] : M("cache-storage", {});
  }
  function Q(a, b) {
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) == c;
  }
  var R = String.prototype.trim
    ? function (a) {
        return a.trim();
      }
    : function (a) {
        return a.replace(/^\s+|\s+$/g, "");
      };
  function S(a, b) {
    a = a.split(b);
    var c = 1 == a.length;
    return [a[0], c ? "" : b, c ? "" : a.slice(1).join(b)];
  }
  function Ba(a) {
    a.data &&
      "[object String]" == Object.prototype.toString.call(a.data) &&
      0 == a.data.lastIndexOf("spf:", 0) &&
      Ca(a.data.substring(4));
  }
  function Ca(a) {
    var b = T[a];
    b && (delete T[a], b());
  }
  function Da(a) {
    window.addEventListener
      ? window.addEventListener("message", a, !1)
      : window.attachEvent && window.attachEvent("onmessage", a);
  }
  function Ea(a) {
    window.removeEventListener
      ? window.removeEventListener("message", a, !1)
      : window.detachEvent && window.detachEvent("onmessage", a);
  }
  var Fa = (function () {
      function a() {
        b = !1;
      }
      if (!window.postMessage) return !1;
      var b = !0;
      Da(a);
      window.postMessage("", "*");
      Ea(a);
      return b;
    })(),
    T = {};
  "async-defers" in N || M("async-defers", T);
  T = N["async-defers"];
  Fa &&
    ("async-listener" in N && Ea(N["async-listener"]),
    Da(Ba),
    M("async-listener", Ba));
  var Ga = {};
  "ps-s" in N || M("ps-s", Ga);
  Ga = N["ps-s"];
  function U(a) {
    var b = document.createElement("a");
    b.href = a;
    b.href = b.href;
    a = {
      href: b.href,
      protocol: b.protocol,
      host: b.host,
      hostname: b.hostname,
      port: b.port,
      pathname: b.pathname,
      search: b.search,
      hash: b.hash,
      username: b.username,
      password: b.password,
    };
    a.origin = a.protocol + "//" + a.host;
    (a.pathname && "/" == a.pathname[0]) || (a.pathname = "/" + a.pathname);
    return a;
  }
  function Ha(a) {
    a = U(a);
    return S(a.href, "#")[0];
  } /*

 SPF
 (c) 2012-2017 Google Inc.
 https://ajax.googleapis.com/ajax/libs/spf/2.4.0/LICENSE
*/
  var Ia = {},
    Ja = {},
    Ka = {};
  "rsrc-s" in N || M("rsrc-s", Ia);
  Ia = N["rsrc-s"];
  "rsrc-n" in N || M("rsrc-n", Ja);
  Ja = N["rsrc-n"];
  "rsrc-u" in N || M("rsrc-u", Ka);
  Ka = N["rsrc-u"];
  var La = {};
  "js-d" in N || M("js-d", La);
  La = N["js-d"];
  var Ma = {};
  "js-u" in N || M("js-u", Ma);
  Ma = N["js-u"];
  function Na(a, b, c) {
    if (b) {
      b = [];
      var d = 0;
      c && (a += "\r\n");
      var e = a.indexOf("[\r\n", d);
      for (-1 < e && (d = e + 3); -1 < (e = a.indexOf(",\r\n", d)); ) {
        var f = R(a.substring(d, e));
        d = e + 3;
        f && b.push(JSON.parse(f));
      }
      e = a.indexOf("]\r\n", d);
      -1 < e &&
        ((f = R(a.substring(d, e))), (d = e + 3), f && b.push(JSON.parse(f)));
      f = "";
      a.length > d &&
        ((f = a.substring(d)),
        c && Q(f, "\r\n") && (f = f.substring(0, f.length - 2)));
      b = V(b);
      return { o: b, h: f };
    }
    a = JSON.parse(a);
    b = V(L(a));
    return { o: b, h: "" };
  }
  function V(a) {
    var b = L(a);
    K(b, function (c) {
      if (c) {
        c.head && (c.head = W(c.head));
        if (c.body) for (var d in c.body) c.body[d] = W(c.body[d]);
        c.foot && (c.foot = W(c.foot));
      }
    });
    return a;
  }
  function W(a) {
    var b = new Oa();
    if (!a) return b;
    if ("[object String]" != Object.prototype.toString.call(a))
      return (
        a.scripts &&
          K(a.scripts, function (c) {
            b.scripts.push({
              url: c.url || "",
              text: c.text || "",
              name: c.name || "",
              async: c.async || !1,
            });
          }),
        a.styles &&
          K(a.styles, function (c) {
            b.styles.push({
              url: c.url || "",
              text: c.text || "",
              name: c.name || "",
            });
          }),
        a.links &&
          K(a.links, function (c) {
            "spf-preconnect" == c.rel &&
              b.links.push({ url: c.url || "", rel: c.rel || "" });
          }),
        (b.html = a.html || ""),
        b
      );
    a = a.replace(Pa, function (c, d, e, f) {
      if ("script" == d) {
        d = (d = e.match(X)) ? d[1] : "";
        var h = e.match(Qa);
        h = h ? h[1] : "";
        var k = Ra.test(e);
        e = Sa.exec(e);
        return (e =
          !e ||
          -1 != e[1].indexOf("/javascript") ||
          -1 != e[1].indexOf("/x-javascript") ||
          -1 != e[1].indexOf("/ecmascript"))
          ? (b.scripts.push({ url: h, text: f, name: d, async: k }), "")
          : c;
      }
      return "style" == d &&
        ((d = (d = e.match(X)) ? d[1] : ""),
        (e = Sa.exec(e)),
        (e = !e || -1 != e[1].indexOf("text/css")))
        ? (b.styles.push({ url: "", text: f, name: d }), "")
        : c;
    });
    a = a.replace(Ta, function (c, d) {
      var e = d.match(Ua);
      e = e ? e[1] : "";
      return "stylesheet" == e
        ? ((e = (e = d.match(X)) ? e[1] : ""),
          (d = (d = d.match(Va)) ? d[1] : ""),
          b.styles.push({ url: d, text: "", name: e }),
          "")
        : "spf-preconnect" == e
        ? ((d = (d = d.match(Va)) ? d[1] : ""),
          b.links.push({ url: d, rel: e }),
          "")
        : c;
    });
    b.html = a;
    return b;
  }
  function Oa() {
    this.html = "";
    this.scripts = [];
    this.styles = [];
    this.links = [];
  }
  (function () {
    var a = document.createElement("div");
    return "transition" in a.style
      ? !0
      : wa(["webkit", "Moz", "Ms", "O", "Khtml"], function (b) {
          return b + "Transition" in a.style;
        });
  })();
  var Ta = /\x3clink([\s\S]*?)\x3e/gi,
    Pa = /\x3c(script|style)([\s\S]*?)\x3e([\s\S]*?)\x3c\/\1\x3e/gi,
    Ra = /(?:\s|^)async(?:\s|=|$)/i,
    Va = /(?:\s|^)href\s*=\s*["']?([^\s"']+)/i,
    X = /(?:\s|^)name\s*=\s*["']?([^\s"']+)/i,
    Ua = /(?:\s|^)rel\s*=\s*["']?([^\s"']+)/i,
    Qa = /(?:\s|^)src\s*=\s*["']?([^\s"']+)/i,
    Sa = /(?:\s|^)type\s*=\s*["']([^"']+)["']/i;
  function Wa(a, b, c, d) {
    var e = d || {},
      f = !1,
      h = 0,
      k,
      g = new XMLHttpRequest();
    g.open(a, b, !0);
    g.timing = {};
    var m = g.abort;
    g.abort = function () {
      clearTimeout(k);
      g.onreadystatechange = null;
      m.call(g);
    };
    g.onreadystatechange = function () {
      var q = g.timing;
      if (2 == g.readyState) {
        q.responseStart = q.responseStart || J();
        if ("json" == g.responseType) f = !1;
        else if (
          O["assume-all-json-requests-chunked"] ||
          -1 <
            (g.getResponseHeader("Transfer-Encoding") || "")
              .toLowerCase()
              .indexOf("chunked")
        )
          f = !0;
        else {
          q = g.getResponseHeader("X-Firefox-Spdy");
          var F = window.chrome && chrome.loadTimes && chrome.loadTimes();
          F = F && F.wasFetchedViaSpdy;
          f = !(!q && !F);
        }
        e.u && e.u(g);
      } else
        3 == g.readyState
          ? f &&
            e.m &&
            ((q = g.responseText.substring(h)),
            (h = g.responseText.length),
            e.m(g, q))
          : 4 == g.readyState &&
            ((q.responseEnd = q.responseEnd || J()),
            window.performance &&
              window.performance.getEntriesByName &&
              (g.resourceTiming = window.performance.getEntriesByName(b).pop()),
            f &&
              e.m &&
              g.responseText.length > h &&
              ((q = g.responseText.substring(h)),
              (h = g.responseText.length),
              e.m(g, q)),
            clearTimeout(k),
            e.s && e.s(g));
    };
    "responseType" in g &&
      "json" == e.responseType &&
      (g.responseType = "json");
    e.withCredentials && (g.withCredentials = e.withCredentials);
    d = "FormData" in window && c instanceof FormData;
    a = "POST" == a && !d;
    if (e.headers)
      for (var t in e.headers)
        g.setRequestHeader(t, e.headers[t]),
          "content-type" == t.toLowerCase() && (a = !1);
    a &&
      g.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    0 < e.C &&
      (k = setTimeout(function () {
        g.abort();
        e.A && e.A(g);
      }, e.C));
    g.timing.fetchStart = J();
    g.send(c);
    return g;
  }
  function Xa(a, b, c, d, e) {
    var f = !1;
    c.responseStart = c.responseEnd = J();
    b.type &&
      0 == b.type.lastIndexOf("navigate", 0) &&
      ((c.navigationStart = c.startTime),
      O["cache-unified"] || (xa(d), (f = !0)));
    b.l &&
      "multipart" == e.type &&
      K(e.parts, function (h) {
        h.timing || (h.timing = {});
        h.timing.spfCached = !!c.spfCached;
        h.timing.spfPrefetched = !!c.spfPrefetched;
        b.l(a, h);
      });
    Ya(a, b, c, e, f);
  }
  function Za(a, b, c) {
    a = c.getResponseHeader("X-SPF-Response-Type") || "";
    b.i = -1 != a.toLowerCase().indexOf("multipart");
  }
  function $a(a, b, c, d, e, f, h) {
    if (d.i) {
      f = d.h + f;
      try {
        var k = Na(f, !0, h);
      } catch (g) {
        e.abort();
        b.j && b.j(a, g, e);
        return;
      }
      b.l &&
        K(k.o, function (g) {
          g.timing || (g.timing = {});
          g.timing.spfCached = !!c.spfCached;
          g.timing.spfPrefetched = !!c.spfPrefetched;
          b.l(a, g);
        });
      d.g = d.g.concat(k.o);
      d.h = k.h;
    }
  }
  function ab(a, b, c, d, e) {
    if (e.timing) for (var f in e.timing) c[f] = e.timing[f];
    if (e.resourceTiming)
      if ("load" == b.type)
        for (var h in e.resourceTiming) c[h] = e.resourceTiming[h];
      else if (
        window.performance &&
        window.performance.timing &&
        ((f = window.performance.timing.navigationStart),
        f + e.resourceTiming.startTime >= c.startTime)
      )
        for (var k in e.resourceTiming)
          (h = e.resourceTiming[k]),
            void 0 !== h &&
              (Q(k, "Start") || Q(k, "End") || "startTime" == k) &&
              (c[k] = f + Math.round(h));
    "load" != b.type && (c.navigationStart = c.startTime);
    d.g.length && ((d.h = R(d.h)), d.h && $a(a, b, c, d, e, "", !0));
    if ("json" == e.responseType) {
      if (!e.response) {
        b.j && b.j(a, Error("JSON response parsing failed"), e);
        return;
      }
      var g = V(L(e.response));
    } else
      try {
        g = Na(e.responseText).o;
      } catch (t) {
        b.j && b.j(a, t, e);
        return;
      }
    if (b.l && 1 < g.length)
      for (d = d.g.length; d < g.length; d++)
        (e = g[d]),
          e.timing || (e.timing = {}),
          (e.timing.spfCached = !!c.spfCached),
          (e.timing.spfPrefetched = !!c.spfPrefetched),
          b.l(a, e);
    if (1 < g.length) {
      var m;
      K(g, function (t) {
        t.cacheType && (m = t.cacheType);
      });
      g = { parts: g, type: "multipart" };
      m && (g.cacheType = m);
    } else g = 1 == g.length ? g[0] : {};
    Ya(a, b, c, g, !0);
  }
  function Ya(a, b, c, d, e) {
    if (
      e &&
      "POST" != b.method &&
      (e = bb(a, b.current, d.cacheType, b.type, !0))
    ) {
      d.cacheKey = e;
      var f = { response: d, type: b.type || "" },
        h = parseInt(O["cache-lifetime"], 10),
        k = parseInt(O["cache-max"], 10);
      0 >= h ||
        0 >= k ||
        ((k = P()),
        (f = { data: f, life: h, time: J(), count: 0 }),
        Aa(f),
        (k[e] = f),
        setTimeout(ya, 1e3));
    }
    d.timing = c;
    b.v && b.v(a, d);
  }
  function bb(a, b, c, d, e) {
    a = Ha(a);
    var f;
    O["cache-unified"]
      ? (f = a)
      : "navigate-back" == d || "navigate-forward" == d
      ? (f = "history " + a)
      : "navigate" == d
      ? (f = (e ? "history " : "prefetch ") + a)
      : "prefetch" == d && (f = e ? "prefetch " + a : "");
    b && "url" == c
      ? (f += " previous " + b)
      : b && "path" == c && (f += " previous " + U(b).pathname);
    return f || "";
  }
  function cb(a, b) {
    var c = [];
    b &&
      (c.push(a + " previous " + b), c.push(a + " previous " + U(b).pathname));
    c.push(a);
    var d = null;
    wa(c, function (e) {
      a: {
        var f = P();
        if (e in f) {
          f = f[e];
          if (za(f)) {
            Aa(f);
            f = f.data;
            break a;
          }
          xa(e);
        }
        f = void 0;
      }
      f && (d = { key: e, response: f.response, type: f.type });
      return !!f;
    });
    return d;
  }
  function db() {
    this.i = !1;
    this.h = "";
    this.g = [];
  }
  function Y(a, b) {
    if (a) {
      var c = Array.prototype.slice.call(arguments);
      c[0] = a;
      c = va.apply(null, c);
    }
    return !1 !== c;
  }
  function eb(a, b, c, d) {
    Y((a || {}).onError, { url: b, err: c, xhr: d });
  }
  function fb(a, b, c) {
    Y((a || {}).onPartProcess, { url: b, part: c }) &&
      Y((a || {}).onPartDone, { url: b, part: c });
  }
  function gb(a, b, c) {
    var d;
    (d = "multipart" == c.type) ||
      (d = Y((a || {}).onProcess, { url: b, response: c }));
    d && Y((a || {}).onDone, { url: b, response: c });
  }
  var hb = {
      request: function (a, b) {
        b = b || {};
        b = {
          method: b.method,
          headers: b.experimental_headers,
          l: I(fb, null, b),
          j: I(eb, null, b),
          v: I(gb, null, b),
          H: b.postData,
          type: "",
          current: window.location.href,
          B: window.location.href,
        };
        b.method = ((b.method || "GET") + "").toUpperCase();
        b.type = b.type || "request";
        var c = a,
          d = O["url-identifier"] || "";
        if (d) {
          d = d.replace("__type__", b.type || "");
          var e = S(c, "#"),
            f = S(e[0], "?");
          c = f[0];
          var h = f[1];
          f = f[2];
          var k = e[1];
          e = e[2];
          if (0 == d.lastIndexOf("?", 0))
            h && (d = d.replace("?", "&")), (f += d);
          else {
            if (0 == d.lastIndexOf(".", 0))
              if (Q(c, "/")) d = "index" + d;
              else {
                var g = c.lastIndexOf(".");
                -1 < g && (c = c.substring(0, g));
              }
            else
              Q(c, "/") && 0 == d.lastIndexOf("/", 0) && (d = d.substring(1));
            c += d;
          }
          c = c + h + f + k + e;
        }
        d = Ha(c);
        c = {};
        c.spfUrl = d;
        c.startTime = J();
        c.fetchStart = c.startTime;
        h = bb(a, b.current, null, b.type, !1);
        h = cb(h, b.current);
        c.spfPrefetched = !!h && "prefetch" == h.type;
        c.spfCached = !!h;
        if (h) {
          a = I(Xa, null, a, b, c, h.key, h.response);
          b = window._spf_state = window._spf_state || {};
          var m = parseInt(b.uid, 10) || 0;
          m++;
          b = b.uid = m;
          T[b] = a;
          Fa
            ? window.postMessage("spf:" + b, "*")
            : window.setTimeout(I(Ca, null, b), 0);
          a = null;
        } else {
          h = {};
          if ((f = O["request-headers"]))
            for (m in f) (k = f[m]), (h[m] = null == k ? "" : String(k));
          if (b.headers)
            for (m in b.headers)
              (k = b.headers[m]), (h[m] = null == k ? "" : String(k));
          null != b.B && (h["X-SPF-Referer"] = b.B);
          null != b.current && (h["X-SPF-Previous"] = b.current);
          if ((m = O["advanced-header-identifier"]))
            (h["X-SPF-Request"] = m.replace("__type__", b.type)),
              (h.Accept = "application/json");
          m = new db();
          f = I(ab, null, a, b, c, m);
          a = {
            headers: h,
            C: O["request-timeout"],
            u: I(Za, null, a, m),
            m: I($a, null, a, b, c, m),
            s: f,
            A: f,
          };
          b.withCredentials && (a.withCredentials = b.withCredentials);
          O["advanced-response-type-json"] && (a.responseType = "json");
          a =
            "POST" == b.method ? Wa("POST", d, b.H, a) : Wa("GET", d, null, a);
        }
        return a;
      },
    },
    n = this;
  n.spf = n.spf || {};
  var ib = n.spf,
    Z;
  for (Z in hb) ib[Z] = hb[Z];
}.call(this));
