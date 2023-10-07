(function () {
  "use strict";
  var m;
  function aa(a) {
    var b = 0;
    return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  }
  var ba =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, b, c) {
          if (a == Array.prototype || a == Object.prototype) return a;
          a[b] = c.value;
          return a;
        };
  function ca(a) {
    a = [
      "object" == typeof globalThis && globalThis,
      a,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global,
    ];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  }
  var da = ca(this);
  function v(a, b) {
    if (b)
      a: {
        var c = da;
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
          ba(c, a, { configurable: !0, writable: !0, value: b });
      }
  }
  v("Symbol", function (a) {
    function b(f) {
      if (this instanceof b) throw new TypeError("Symbol is not a constructor");
      return new c(d + (f || "") + "_" + e++, f);
    }
    function c(f, g) {
      this.g = f;
      ba(this, "description", { configurable: !0, writable: !0, value: g });
    }
    if (a) return a;
    c.prototype.toString = function () {
      return this.g;
    };
    var d = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
      e = 0;
    return b;
  });
  v("Symbol.iterator", function (a) {
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
      var d = da[b[c]];
      "function" === typeof d &&
        "function" != typeof d.prototype[a] &&
        ba(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function () {
            return ea(aa(this));
          },
        });
    }
    return a;
  });
  function ea(a) {
    a = { next: a };
    a[Symbol.iterator] = function () {
      return this;
    };
    return a;
  }
  function fa(a) {
    return (a.raw = a);
  }
  function w(a) {
    var b =
      "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    if (b) return b.call(a);
    if ("number" == typeof a.length) return { next: aa(a) };
    throw Error(String(a) + " is not an iterable or ArrayLike");
  }
  function x(a) {
    if (!(a instanceof Array)) {
      a = w(a);
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      a = c;
    }
    return a;
  }
  function ha(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  var ia =
    "function" == typeof Object.assign
      ? Object.assign
      : function (a, b) {
          for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d) for (var e in d) ha(d, e) && (a[e] = d[e]);
          }
          return a;
        };
  v("Object.assign", function (a) {
    return a || ia;
  });
  var ja =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            function b() {}
            b.prototype = a;
            return new b();
          },
    ka;
  if ("function" == typeof Object.setPrototypeOf) ka = Object.setPrototypeOf;
  else {
    var la;
    a: {
      var ma = { a: !0 },
        na = {};
      try {
        na.__proto__ = ma;
        la = na.a;
        break a;
      } catch (a) {}
      la = !1;
    }
    ka = la
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var oa = ka;
  function y(a, b) {
    a.prototype = ja(b.prototype);
    a.prototype.constructor = a;
    if (oa) oa(a, b);
    else
      for (var c in b)
        if ("prototype" != c)
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d);
          } else a[c] = b[c];
    a.Ma = b.prototype;
  }
  function pa() {
    this.u = !1;
    this.m = null;
    this.l = void 0;
    this.g = 1;
    this.s = this.o = 0;
    this.D = this.i = null;
  }
  function qa(a) {
    if (a.u) throw new TypeError("Generator is already running");
    a.u = !0;
  }
  pa.prototype.C = function (a) {
    this.l = a;
  };
  function ra(a, b) {
    a.i = { Yd: b, se: !0 };
    a.g = a.o || a.s;
  }
  pa.prototype.return = function (a) {
    this.i = { return: a };
    this.g = this.s;
  };
  function z(a, b, c) {
    a.g = c;
    return { value: b };
  }
  pa.prototype.V = function (a) {
    this.g = a;
  };
  function sa(a, b, c) {
    a.o = b;
    void 0 != c && (a.s = c);
  }
  function ta(a) {
    a.o = 0;
    var b = a.i.Yd;
    a.i = null;
    return b;
  }
  function ua(a) {
    var b = a.D.splice(0)[0];
    (b = a.i = a.i || b)
      ? b.se
        ? (a.g = a.o || a.s)
        : void 0 != b.V && a.s < b.V
        ? ((a.g = b.V), (a.i = null))
        : (a.g = a.s)
      : (a.g = 0);
  }
  function wa(a) {
    this.g = new pa();
    this.l = a;
  }
  function xa(a, b) {
    qa(a.g);
    var c = a.g.m;
    if (c)
      return ya(
        a,
        "return" in c
          ? c["return"]
          : function (d) {
              return { value: d, done: !0 };
            },
        b,
        a.g.return
      );
    a.g.return(b);
    return za(a);
  }
  function ya(a, b, c, d) {
    try {
      var e = b.call(a.g.m, c);
      if (!(e instanceof Object))
        throw new TypeError("Iterator result " + e + " is not an object");
      if (!e.done) return (a.g.u = !1), e;
      var f = e.value;
    } catch (g) {
      return (a.g.m = null), ra(a.g, g), za(a);
    }
    a.g.m = null;
    d.call(a.g, f);
    return za(a);
  }
  function za(a) {
    for (; a.g.g; )
      try {
        var b = a.l(a.g);
        if (b) return (a.g.u = !1), { value: b.value, done: !1 };
      } catch (c) {
        (a.g.l = void 0), ra(a.g, c);
      }
    a.g.u = !1;
    if (a.g.i) {
      b = a.g.i;
      a.g.i = null;
      if (b.se) throw b.Yd;
      return { value: b.return, done: !0 };
    }
    return { value: void 0, done: !0 };
  }
  function Aa(a) {
    this.next = function (b) {
      qa(a.g);
      a.g.m ? (b = ya(a, a.g.m.next, b, a.g.C)) : (a.g.C(b), (b = za(a)));
      return b;
    };
    this.throw = function (b) {
      qa(a.g);
      a.g.m ? (b = ya(a, a.g.m["throw"], b, a.g.C)) : (ra(a.g, b), (b = za(a)));
      return b;
    };
    this.return = function (b) {
      return xa(a, b);
    };
    this[Symbol.iterator] = function () {
      return this;
    };
  }
  function Ba(a) {
    function b(d) {
      return a.next(d);
    }
    function c(d) {
      return a.throw(d);
    }
    return new Promise(function (d, e) {
      function f(g) {
        g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e);
      }
      f(a.next());
    });
  }
  function B(a) {
    return Ba(new Aa(new wa(a)));
  }
  function Ca() {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
      b[c - a] = arguments[c];
    return b;
  }
  v("Reflect.setPrototypeOf", function (a) {
    return a
      ? a
      : oa
      ? function (b, c) {
          try {
            return oa(b, c), !0;
          } catch (d) {
            return !1;
          }
        }
      : null;
  });
  v("Promise", function (a) {
    function b(g) {
      this.g = 0;
      this.i = void 0;
      this.l = [];
      this.u = !1;
      var h = this.m();
      try {
        g(h.resolve, h.reject);
      } catch (k) {
        h.reject(k);
      }
    }
    function c() {
      this.g = null;
    }
    function d(g) {
      return g instanceof b
        ? g
        : new b(function (h) {
            h(g);
          });
    }
    if (a) return a;
    c.prototype.l = function (g) {
      if (null == this.g) {
        this.g = [];
        var h = this;
        this.i(function () {
          h.o();
        });
      }
      this.g.push(g);
    };
    var e = da.setTimeout;
    c.prototype.i = function (g) {
      e(g, 0);
    };
    c.prototype.o = function () {
      for (; this.g && this.g.length; ) {
        var g = this.g;
        this.g = [];
        for (var h = 0; h < g.length; ++h) {
          var k = g[h];
          g[h] = null;
          try {
            k();
          } catch (l) {
            this.m(l);
          }
        }
      }
      this.g = null;
    };
    c.prototype.m = function (g) {
      this.i(function () {
        throw g;
      });
    };
    b.prototype.m = function () {
      function g(l) {
        return function (n) {
          k || ((k = !0), l.call(h, n));
        };
      }
      var h = this,
        k = !1;
      return { resolve: g(this.J), reject: g(this.o) };
    };
    b.prototype.J = function (g) {
      if (g === this)
        this.o(new TypeError("A Promise cannot resolve to itself"));
      else if (g instanceof b) this.M(g);
      else {
        a: switch (typeof g) {
          case "object":
            var h = null != g;
            break a;
          case "function":
            h = !0;
            break a;
          default:
            h = !1;
        }
        h ? this.H(g) : this.s(g);
      }
    };
    b.prototype.H = function (g) {
      var h = void 0;
      try {
        h = g.then;
      } catch (k) {
        this.o(k);
        return;
      }
      "function" == typeof h ? this.N(h, g) : this.s(g);
    };
    b.prototype.o = function (g) {
      this.C(2, g);
    };
    b.prototype.s = function (g) {
      this.C(1, g);
    };
    b.prototype.C = function (g, h) {
      if (0 != this.g)
        throw Error(
          "Cannot settle(" +
            g +
            ", " +
            h +
            "): Promise already settled in state" +
            this.g
        );
      this.g = g;
      this.i = h;
      2 === this.g && this.L();
      this.D();
    };
    b.prototype.L = function () {
      var g = this;
      e(function () {
        if (g.G()) {
          var h = da.console;
          "undefined" !== typeof h && h.error(g.i);
        }
      }, 1);
    };
    b.prototype.G = function () {
      if (this.u) return !1;
      var g = da.CustomEvent,
        h = da.Event,
        k = da.dispatchEvent;
      if ("undefined" === typeof k) return !0;
      "function" === typeof g
        ? (g = new g("unhandledrejection", { cancelable: !0 }))
        : "function" === typeof h
        ? (g = new h("unhandledrejection", { cancelable: !0 }))
        : ((g = da.document.createEvent("CustomEvent")),
          g.initCustomEvent("unhandledrejection", !1, !0, g));
      g.promise = this;
      g.reason = this.i;
      return k(g);
    };
    b.prototype.D = function () {
      if (null != this.l) {
        for (var g = 0; g < this.l.length; ++g) f.l(this.l[g]);
        this.l = null;
      }
    };
    var f = new c();
    b.prototype.M = function (g) {
      var h = this.m();
      g.pc(h.resolve, h.reject);
    };
    b.prototype.N = function (g, h) {
      var k = this.m();
      try {
        g.call(h, k.resolve, k.reject);
      } catch (l) {
        k.reject(l);
      }
    };
    b.prototype.then = function (g, h) {
      function k(r, q) {
        return "function" == typeof r
          ? function (u) {
              try {
                l(r(u));
              } catch (t) {
                n(t);
              }
            }
          : q;
      }
      var l,
        n,
        p = new b(function (r, q) {
          l = r;
          n = q;
        });
      this.pc(k(g, l), k(h, n));
      return p;
    };
    b.prototype.catch = function (g) {
      return this.then(void 0, g);
    };
    b.prototype.pc = function (g, h) {
      function k() {
        switch (l.g) {
          case 1:
            g(l.i);
            break;
          case 2:
            h(l.i);
            break;
          default:
            throw Error("Unexpected state: " + l.g);
        }
      }
      var l = this;
      null == this.l ? f.l(k) : this.l.push(k);
      this.u = !0;
    };
    b.resolve = d;
    b.reject = function (g) {
      return new b(function (h, k) {
        k(g);
      });
    };
    b.race = function (g) {
      return new b(function (h, k) {
        for (var l = w(g), n = l.next(); !n.done; n = l.next())
          d(n.value).pc(h, k);
      });
    };
    b.all = function (g) {
      var h = w(g),
        k = h.next();
      return k.done
        ? d([])
        : new b(function (l, n) {
            function p(u) {
              return function (t) {
                r[u] = t;
                q--;
                0 == q && l(r);
              };
            }
            var r = [],
              q = 0;
            do
              r.push(void 0),
                q++,
                d(k.value).pc(p(r.length - 1), n),
                (k = h.next());
            while (!k.done);
          });
    };
    return b;
  });
  v("WeakMap", function (a) {
    function b(k) {
      this.g = (h += Math.random() + 1).toString();
      if (k) {
        k = w(k);
        for (var l; !(l = k.next()).done; ) (l = l.value), this.set(l[0], l[1]);
      }
    }
    function c() {}
    function d(k) {
      var l = typeof k;
      return ("object" === l && null !== k) || "function" === l;
    }
    function e(k) {
      if (!ha(k, g)) {
        var l = new c();
        ba(k, g, { value: l });
      }
    }
    function f(k) {
      var l = Object[k];
      l &&
        (Object[k] = function (n) {
          if (n instanceof c) return n;
          Object.isExtensible(n) && e(n);
          return l(n);
        });
    }
    if (
      (function () {
        if (!a || !Object.seal) return !1;
        try {
          var k = Object.seal({}),
            l = Object.seal({}),
            n = new a([
              [k, 2],
              [l, 3],
            ]);
          if (2 != n.get(k) || 3 != n.get(l)) return !1;
          n.delete(k);
          n.set(l, 4);
          return !n.has(k) && 4 == n.get(l);
        } catch (p) {
          return !1;
        }
      })()
    )
      return a;
    var g = "$jscomp_hidden_" + Math.random();
    f("freeze");
    f("preventExtensions");
    f("seal");
    var h = 0;
    b.prototype.set = function (k, l) {
      if (!d(k)) throw Error("Invalid WeakMap key");
      e(k);
      if (!ha(k, g)) throw Error("WeakMap key fail: " + k);
      k[g][this.g] = l;
      return this;
    };
    b.prototype.get = function (k) {
      return d(k) && ha(k, g) ? k[g][this.g] : void 0;
    };
    b.prototype.has = function (k) {
      return d(k) && ha(k, g) && ha(k[g], this.g);
    };
    b.prototype.delete = function (k) {
      return d(k) && ha(k, g) && ha(k[g], this.g) ? delete k[g][this.g] : !1;
    };
    return b;
  });
  v("Map", function (a) {
    function b() {
      var h = {};
      return (h.previous = h.next = h.head = h);
    }
    function c(h, k) {
      var l = h[1];
      return ea(function () {
        if (l) {
          for (; l.head != h[1]; ) l = l.previous;
          for (; l.next != l.head; )
            return (l = l.next), { done: !1, value: k(l) };
          l = null;
        }
        return { done: !0, value: void 0 };
      });
    }
    function d(h, k) {
      var l = k && typeof k;
      "object" == l || "function" == l
        ? f.has(k)
          ? (l = f.get(k))
          : ((l = "" + ++g), f.set(k, l))
        : (l = "p_" + k);
      var n = h[0][l];
      if (n && ha(h[0], l))
        for (h = 0; h < n.length; h++) {
          var p = n[h];
          if ((k !== k && p.key !== p.key) || k === p.key)
            return { id: l, list: n, index: h, entry: p };
        }
      return { id: l, list: n, index: -1, entry: void 0 };
    }
    function e(h) {
      this[0] = {};
      this[1] = b();
      this.size = 0;
      if (h) {
        h = w(h);
        for (var k; !(k = h.next()).done; ) (k = k.value), this.set(k[0], k[1]);
      }
    }
    if (
      (function () {
        if (
          !a ||
          "function" != typeof a ||
          !a.prototype.entries ||
          "function" != typeof Object.seal
        )
          return !1;
        try {
          var h = Object.seal({ x: 4 }),
            k = new a(w([[h, "s"]]));
          if (
            "s" != k.get(h) ||
            1 != k.size ||
            k.get({ x: 4 }) ||
            k.set({ x: 4 }, "t") != k ||
            2 != k.size
          )
            return !1;
          var l = k.entries(),
            n = l.next();
          if (n.done || n.value[0] != h || "s" != n.value[1]) return !1;
          n = l.next();
          return n.done ||
            4 != n.value[0].x ||
            "t" != n.value[1] ||
            !l.next().done
            ? !1
            : !0;
        } catch (p) {
          return !1;
        }
      })()
    )
      return a;
    var f = new WeakMap();
    e.prototype.set = function (h, k) {
      h = 0 === h ? 0 : h;
      var l = d(this, h);
      l.list || (l.list = this[0][l.id] = []);
      l.entry
        ? (l.entry.value = k)
        : ((l.entry = {
            next: this[1],
            previous: this[1].previous,
            head: this[1],
            key: h,
            value: k,
          }),
          l.list.push(l.entry),
          (this[1].previous.next = l.entry),
          (this[1].previous = l.entry),
          this.size++);
      return this;
    };
    e.prototype.delete = function (h) {
      h = d(this, h);
      return h.entry && h.list
        ? (h.list.splice(h.index, 1),
          h.list.length || delete this[0][h.id],
          (h.entry.previous.next = h.entry.next),
          (h.entry.next.previous = h.entry.previous),
          (h.entry.head = null),
          this.size--,
          !0)
        : !1;
    };
    e.prototype.clear = function () {
      this[0] = {};
      this[1] = this[1].previous = b();
      this.size = 0;
    };
    e.prototype.has = function (h) {
      return !!d(this, h).entry;
    };
    e.prototype.get = function (h) {
      return (h = d(this, h).entry) && h.value;
    };
    e.prototype.entries = function () {
      return c(this, function (h) {
        return [h.key, h.value];
      });
    };
    e.prototype.keys = function () {
      return c(this, function (h) {
        return h.key;
      });
    };
    e.prototype.values = function () {
      return c(this, function (h) {
        return h.value;
      });
    };
    e.prototype.forEach = function (h, k) {
      for (var l = this.entries(), n; !(n = l.next()).done; )
        (n = n.value), h.call(k, n[1], n[0], this);
    };
    e.prototype[Symbol.iterator] = e.prototype.entries;
    var g = 0;
    return e;
  });
  function Da(a, b, c) {
    if (null == a)
      throw new TypeError(
        "The 'this' value for String.prototype." +
          c +
          " must not be null or undefined"
      );
    if (b instanceof RegExp)
      throw new TypeError(
        "First argument to String.prototype." +
          c +
          " must not be a regular expression"
      );
    return a + "";
  }
  v("String.prototype.endsWith", function (a) {
    return a
      ? a
      : function (b, c) {
          var d = Da(this, b, "endsWith");
          b += "";
          void 0 === c && (c = d.length);
          c = Math.max(0, Math.min(c | 0, d.length));
          for (var e = b.length; 0 < e && 0 < c; )
            if (d[--c] != b[--e]) return !1;
          return 0 >= e;
        };
  });
  v("Object.setPrototypeOf", function (a) {
    return a || oa;
  });
  v("Array.prototype.find", function (a) {
    return a
      ? a
      : function (b, c) {
          a: {
            var d = this;
            d instanceof String && (d = String(d));
            for (var e = d.length, f = 0; f < e; f++) {
              var g = d[f];
              if (b.call(c, g, f, d)) {
                b = g;
                break a;
              }
            }
            b = void 0;
          }
          return b;
        };
  });
  v("String.prototype.startsWith", function (a) {
    return a
      ? a
      : function (b, c) {
          var d = Da(this, b, "startsWith");
          b += "";
          var e = d.length,
            f = b.length;
          c = Math.max(0, Math.min(c | 0, d.length));
          for (var g = 0; g < f && c < e; ) if (d[c++] != b[g++]) return !1;
          return g >= f;
        };
  });
  v("Number.isFinite", function (a) {
    return a
      ? a
      : function (b) {
          return "number" !== typeof b
            ? !1
            : !isNaN(b) && Infinity !== b && -Infinity !== b;
        };
  });
  function Ea(a, b) {
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
  v("Array.prototype.keys", function (a) {
    return a
      ? a
      : function () {
          return Ea(this, function (b) {
            return b;
          });
        };
  });
  v("Set", function (a) {
    function b(c) {
      this.g = new Map();
      if (c) {
        c = w(c);
        for (var d; !(d = c.next()).done; ) this.add(d.value);
      }
      this.size = this.g.size;
    }
    if (
      (function () {
        if (
          !a ||
          "function" != typeof a ||
          !a.prototype.entries ||
          "function" != typeof Object.seal
        )
          return !1;
        try {
          var c = Object.seal({ x: 4 }),
            d = new a(w([c]));
          if (
            !d.has(c) ||
            1 != d.size ||
            d.add(c) != d ||
            1 != d.size ||
            d.add({ x: 4 }) != d ||
            2 != d.size
          )
            return !1;
          var e = d.entries(),
            f = e.next();
          if (f.done || f.value[0] != c || f.value[1] != c) return !1;
          f = e.next();
          return f.done ||
            f.value[0] == c ||
            4 != f.value[0].x ||
            f.value[1] != f.value[0]
            ? !1
            : e.next().done;
        } catch (g) {
          return !1;
        }
      })()
    )
      return a;
    b.prototype.add = function (c) {
      c = 0 === c ? 0 : c;
      this.g.set(c, c);
      this.size = this.g.size;
      return this;
    };
    b.prototype.delete = function (c) {
      c = this.g.delete(c);
      this.size = this.g.size;
      return c;
    };
    b.prototype.clear = function () {
      this.g.clear();
      this.size = 0;
    };
    b.prototype.has = function (c) {
      return this.g.has(c);
    };
    b.prototype.entries = function () {
      return this.g.entries();
    };
    b.prototype.values = function () {
      return this.g.values();
    };
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] = b.prototype.values;
    b.prototype.forEach = function (c, d) {
      var e = this;
      this.g.forEach(function (f) {
        return c.call(d, f, f, e);
      });
    };
    return b;
  });
  v("Array.prototype.values", function (a) {
    return a
      ? a
      : function () {
          return Ea(this, function (b, c) {
            return c;
          });
        };
  });
  v("Object.values", function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) ha(b, d) && c.push(b[d]);
          return c;
        };
  });
  v("Object.is", function (a) {
    return a
      ? a
      : function (b, c) {
          return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
        };
  });
  v("Array.prototype.includes", function (a) {
    return a
      ? a
      : function (b, c) {
          var d = this;
          d instanceof String && (d = String(d));
          var e = d.length;
          c = c || 0;
          for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0;
          }
          return !1;
        };
  });
  v("String.prototype.includes", function (a) {
    return a
      ? a
      : function (b, c) {
          return -1 !== Da(this, b, "includes").indexOf(b, c || 0);
        };
  });
  v("Number.MAX_SAFE_INTEGER", function () {
    return 9007199254740991;
  });
  v("Number.isInteger", function (a) {
    return a
      ? a
      : function (b) {
          return Number.isFinite(b) ? b === Math.floor(b) : !1;
        };
  });
  v("Number.isNaN", function (a) {
    return a
      ? a
      : function (b) {
          return "number" === typeof b && isNaN(b);
        };
  });
  v("Array.prototype.entries", function (a) {
    return a
      ? a
      : function () {
          return Ea(this, function (b, c) {
            return [b, c];
          });
        };
  });
  v("Array.from", function (a) {
    return a
      ? a
      : function (b, c, d) {
          c =
            null != c
              ? c
              : function (h) {
                  return h;
                };
          var e = [],
            f =
              "undefined" != typeof Symbol &&
              Symbol.iterator &&
              b[Symbol.iterator];
          if ("function" == typeof f) {
            b = f.call(b);
            for (var g = 0; !(f = b.next()).done; )
              e.push(c.call(d, f.value, g++));
          } else
            for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
          return e;
        };
  });
  v("Object.entries", function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) ha(b, d) && c.push([d, b[d]]);
          return c;
        };
  }); /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var C = this || self;
  function D(a, b) {
    a = a.split(".");
    b = b || C;
    for (var c = 0; c < a.length; c++)
      if (((b = b[a[c]]), null == b)) return null;
    return b;
  }
  function Fa(a) {
    var b = typeof a;
    return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
  }
  function Ga(a) {
    var b = Fa(a);
    return "array" == b || ("object" == b && "number" == typeof a.length);
  }
  function Ha(a) {
    var b = typeof a;
    return ("object" == b && null != a) || "function" == b;
  }
  function Ia(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }
  function Ja(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e);
      };
    }
    return function () {
      return a.apply(b, arguments);
    };
  }
  function E(a, b, c) {
    E =
      Function.prototype.bind &&
      -1 != Function.prototype.bind.toString().indexOf("native code")
        ? Ia
        : Ja;
    return E.apply(null, arguments);
  }
  function Ka(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  }
  function F() {
    return Date.now();
  }
  function G(a, b) {
    a = a.split(".");
    var c = C;
    a[0] in c ||
      "undefined" == typeof c.execScript ||
      c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift()); )
      a.length || void 0 === b
        ? c[d] && c[d] !== Object.prototype[d]
          ? (c = c[d])
          : (c = c[d] = {})
        : (c[d] = b);
  }
  function H(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Ma = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.Wh = function (d, e, f) {
      for (
        var g = Array(arguments.length - 2), h = 2;
        h < arguments.length;
        h++
      )
        g[h - 2] = arguments[h];
      return b.prototype[e].apply(d, g);
    };
  }
  function La(a) {
    return a;
  }
  function Ma(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, Ma);
    else {
      var c = Error().stack;
      c && (this.stack = c);
    }
    a && (this.message = String(a));
    void 0 !== b && (this.cause = b);
  }
  H(Ma, Error);
  Ma.prototype.name = "CustomError";
  function Na(a, b) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++)
      c += a[e] + (e < b.length ? b[e] : "%s");
    Ma.call(this, c + a[d]);
  }
  H(Na, Ma);
  Na.prototype.name = "AssertionError";
  function Oa(a) {
    a = a.url;
    var b = /[?&]dsh=1(&|$)/.test(a);
    this.i = !b && /[?&]ae=1(&|$)/.test(a);
    this.m = !b && /[?&]ae=2(&|$)/.test(a);
    if ((this.g = /[?&]adurl=([^&]*)/.exec(a)) && this.g[1]) {
      try {
        var c = decodeURIComponent(this.g[1]);
      } catch (d) {
        c = null;
      }
      this.l = c;
    }
  }
  function Pa() {
    return null;
  }
  function Qa() {}
  function Ra(a) {
    var b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  }
  var Sa = Array.prototype.indexOf
      ? function (a, b) {
          return Array.prototype.indexOf.call(a, b, void 0);
        }
      : function (a, b) {
          if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length
              ? -1
              : a.indexOf(b, 0);
          for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
          return -1;
        },
    Ta = Array.prototype.forEach
      ? function (a, b, c) {
          Array.prototype.forEach.call(a, b, c);
        }
      : function (a, b, c) {
          for (
            var d = a.length,
              e = "string" === typeof a ? a.split("") : a,
              f = 0;
            f < d;
            f++
          )
            f in e && b.call(c, e[f], f, a);
        },
    Ua = Array.prototype.filter
      ? function (a, b, c) {
          return Array.prototype.filter.call(a, b, c);
        }
      : function (a, b, c) {
          for (
            var d = a.length,
              e = [],
              f = 0,
              g = "string" === typeof a ? a.split("") : a,
              h = 0;
            h < d;
            h++
          )
            if (h in g) {
              var k = g[h];
              b.call(c, k, h, a) && (e[f++] = k);
            }
          return e;
        },
    Xa = Array.prototype.map
      ? function (a, b) {
          return Array.prototype.map.call(a, b, void 0);
        }
      : function (a, b) {
          for (
            var c = a.length,
              d = Array(c),
              e = "string" === typeof a ? a.split("") : a,
              f = 0;
            f < c;
            f++
          )
            f in e && (d[f] = b.call(void 0, e[f], f, a));
          return d;
        };
  function Ya(a, b) {
    b = Sa(a, b);
    var c;
    (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
    return c;
  }
  function Za(a) {
    return Array.prototype.concat.apply([], arguments);
  }
  function $a(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  function ab(a, b) {
    for (var c = 1; c < arguments.length; c++) {
      var d = arguments[c];
      if (Ga(d)) {
        var e = a.length || 0,
          f = d.length || 0;
        a.length = e + f;
        for (var g = 0; g < f; g++) a[e + g] = d[g];
      } else a.push(d);
    }
  }
  function bb(a, b) {
    return Za.apply([], Xa(a, b));
  }
  function cb(a, b) {
    for (var c in a) b.call(void 0, a[c], c, a);
  }
  function db(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = d;
    return b;
  }
  function eb(a) {
    var b = {},
      c;
    for (c in a) b[c] = a[c];
    return b;
  }
  function fb(a) {
    if (!a || "object" !== typeof a) return a;
    if ("function" === typeof a.clone) return a.clone();
    if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
    if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
    if (a instanceof Date) return new Date(a.getTime());
    var b = Array.isArray(a)
        ? []
        : "function" !== typeof ArrayBuffer ||
          "function" !== typeof ArrayBuffer.isView ||
          !ArrayBuffer.isView(a) ||
          a instanceof DataView
        ? {}
        : new a.constructor(a.length),
      c;
    for (c in a) b[c] = fb(a[c]);
    return b;
  }
  var gb =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " "
    );
  function hb(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < gb.length; f++)
        (c = gb[f]),
          Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  function ib(a) {
    var b = arguments.length;
    if (1 == b && Array.isArray(arguments[0]))
      return ib.apply(null, arguments[0]);
    for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
    return c;
  }
  var jb;
  function mb() {
    if (void 0 === jb) {
      var a = null,
        b = C.trustedTypes;
      if (b && b.createPolicy) {
        try {
          a = b.createPolicy("goog#html", {
            createHTML: La,
            createScript: La,
            createScriptURL: La,
          });
        } catch (c) {
          C.console && C.console.error(c.message);
        }
        jb = a;
      } else jb = a;
    }
    return jb;
  }
  function nb(a, b) {
    this.i = (a === ob && b) || "";
    this.m = pb;
  }
  nb.prototype.l = !0;
  nb.prototype.g = function () {
    return this.i;
  };
  function qb(a) {
    return a instanceof nb && a.constructor === nb && a.m === pb
      ? a.i
      : "type_error:Const";
  }
  var pb = {},
    ob = {};
  function rb(a) {
    this.i = a;
  }
  rb.prototype.toString = function () {
    return this.i + "";
  };
  rb.prototype.l = !0;
  rb.prototype.g = function () {
    return this.i.toString();
  };
  function sb(a) {
    if (a instanceof rb && a.constructor === rb) return a.i;
    Fa(a);
    return "type_error:TrustedResourceUrl";
  }
  var tb = {};
  function ub(a) {
    var b = mb();
    a = b ? b.createScriptURL(a) : a;
    return new rb(a, tb);
  }
  var vb = String.prototype.trim
    ? function (a) {
        return a.trim();
      }
    : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
      };
  function wb() {
    return -1 != xb().toLowerCase().indexOf("webkit");
  }
  function yb(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function zb(a) {
    this.i = a;
  }
  zb.prototype.toString = function () {
    return this.i.toString();
  };
  zb.prototype.l = !0;
  zb.prototype.g = function () {
    return this.i.toString();
  };
  function Ab(a) {
    if (a instanceof zb && a.constructor === zb) return a.i;
    Fa(a);
    return "type_error:SafeUrl";
  }
  var Bb = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
    Cb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  function Db(a) {
    a instanceof zb ||
      ((a = "object" == typeof a && a.l ? a.g() : String(a)),
      Cb.test(a)
        ? (a = new zb(a, Eb))
        : ((a = String(a).replace(/(%0A|%0D)/g, "")),
          (a = a.match(Bb) ? new zb(a, Eb) : null)));
    return a || Fb;
  }
  var Eb = {},
    Fb = new zb("about:invalid#zClosurez", Eb);
  var Gb = {};
  function Hb(a) {
    this.i = a;
    this.l = !0;
  }
  Hb.prototype.g = function () {
    return this.i;
  };
  Hb.prototype.toString = function () {
    return this.i.toString();
  };
  var Ib = new Hb("", Gb);
  function Jb(a) {
    if (a instanceof zb)
      return (
        'url("' + Ab(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")'
      );
    if (a instanceof nb) a = qb(a);
    else {
      a = String(a);
      var b = a.replace(Kb, "$1").replace(Kb, "$1").replace(Lb, "url");
      if (Mb.test(b)) {
        if ((b = !Nb.test(a))) {
          for (var c = (b = !0), d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            "'" == e && c ? (b = !b) : '"' == e && b && (c = !c);
          }
          b = b && c && Ob(a);
        }
        a = b ? Pb(a) : "zClosurez";
      } else a = "zClosurez";
    }
    if (/[{;}]/.test(a))
      throw new Na("Value does not allow [{;}], got: %s.", [a]);
    return a;
  }
  function Ob(a) {
    for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
      var e = a.charAt(d);
      if ("]" == e) {
        if (b) return !1;
        b = !0;
      } else if ("[" == e) {
        if (!b) return !1;
        b = !1;
      } else if (!b && !c.test(e)) return !1;
    }
    return b;
  }
  var Mb = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
    Lb = RegExp(
      "\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))",
      "g"
    ),
    Kb = RegExp(
      "\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)",
      "g"
    ),
    Nb = /\/\*/;
  function Pb(a) {
    return a.replace(Lb, function (b, c, d, e) {
      var f = "";
      d = d.replace(/^(['"])(.*)\1$/, function (g, h, k) {
        f = h;
        return k;
      });
      b = Db(d).g();
      return c + f + b + f + e;
    });
  }
  var Qb = {};
  function Rb(a) {
    this.i = a;
    this.l = !0;
  }
  Rb.prototype.toString = function () {
    return this.i.toString();
  };
  function Sb(a) {
    function b(d) {
      Array.isArray(d) ? d.forEach(b) : (c += Tb(d));
    }
    var c = "";
    Array.prototype.forEach.call(arguments, b);
    return new Rb(c, Qb);
  }
  Rb.prototype.g = function () {
    return this.i;
  };
  function Tb(a) {
    if (a instanceof Rb && a.constructor === Rb) return a.i;
    Fa(a);
    return "type_error:SafeStyleSheet";
  }
  var Ub = new Rb("", Qb);
  var Vb,
    Wb = D("CLOSURE_FLAGS"),
    Xb = Wb && Wb[610401301];
  Vb = null != Xb ? Xb : !1;
  function xb() {
    var a = C.navigator;
    return a && (a = a.userAgent) ? a : "";
  }
  var Yb,
    Zb = C.navigator;
  Yb = Zb ? Zb.userAgentData || null : null;
  function $b(a) {
    return Vb
      ? Yb
        ? Yb.brands.some(function (b) {
            return (b = b.brand) && -1 != b.indexOf(a);
          })
        : !1
      : !1;
  }
  function J(a) {
    return -1 != xb().indexOf(a);
  }
  function ac() {
    return Vb ? !!Yb && 0 < Yb.brands.length : !1;
  }
  function bc() {
    return ac() ? !1 : J("Opera");
  }
  function cc() {
    return ac() ? !1 : J("Trident") || J("MSIE");
  }
  function dc() {
    return ac() ? !1 : J("Edge");
  }
  function ec() {
    return ac() ? $b("Microsoft Edge") : J("Edg/");
  }
  function fc() {
    return (
      J("Safari") &&
      !(
        hc() ||
        (ac() ? 0 : J("Coast")) ||
        bc() ||
        dc() ||
        ec() ||
        (ac() ? $b("Opera") : J("OPR")) ||
        J("Firefox") ||
        J("FxiOS") ||
        J("Silk") ||
        J("Android")
      )
    );
  }
  function hc() {
    return ac()
      ? $b("Chromium")
      : ((J("Chrome") || J("CriOS")) && !dc()) || J("Silk");
  }
  function ic(a) {
    var b = {};
    a.forEach(function (c) {
      b[c[0]] = c[1];
    });
    return function (c) {
      return (
        b[
          c.find(function (d) {
            return d in b;
          })
        ] || ""
      );
    };
  }
  function jc() {
    var a = xb();
    if (cc()) {
      var b = /rv: *([\d\.]*)/.exec(a);
      if (b && b[1]) a = b[1];
      else {
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])
          if (((a = /Trident\/(\d.\d)/.exec(a)), "7.0" == c[1]))
            if (a && a[1])
              switch (a[1]) {
                case "4.0":
                  b = "8.0";
                  break;
                case "5.0":
                  b = "9.0";
                  break;
                case "6.0":
                  b = "10.0";
                  break;
                case "7.0":
                  b = "11.0";
              }
            else b = "7.0";
          else b = c[1];
        a = b;
      }
      return a;
    }
    c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
    b = [];
    for (var d; (d = c.exec(a)); ) b.push([d[1], d[2], d[3] || void 0]);
    a = ic(b);
    return bc()
      ? a(["Version", "Opera"])
      : dc()
      ? a(["Edge"])
      : ec()
      ? a(["Edg"])
      : J("Silk")
      ? a(["Silk"])
      : hc()
      ? a(["Chrome", "CriOS", "HeadlessChrome"])
      : ((a = b[2]) && a[1]) || "";
  }
  var kc = {};
  function lc(a) {
    this.i = a;
    this.l = !0;
  }
  lc.prototype.g = function () {
    return this.i.toString();
  };
  lc.prototype.toString = function () {
    return this.i.toString();
  };
  function mc(a) {
    if (a instanceof lc && a.constructor === lc) return a.i;
    Fa(a);
    return "type_error:SafeHtml";
  }
  function nc(a) {
    var b = mb();
    a = b ? b.createHTML(a) : a;
    return new lc(a, kc);
  }
  var oc = new lc((C.trustedTypes && C.trustedTypes.emptyHTML) || "", kc);
  var pc = Ra(function () {
    var a = document.createElement("div"),
      b = document.createElement("div");
    b.appendChild(document.createElement("div"));
    a.appendChild(b);
    b = a.firstChild.firstChild;
    a.innerHTML = mc(oc);
    return !b.parentElement;
  });
  function qc(a, b) {
    if (pc()) for (; a.lastChild; ) a.removeChild(a.lastChild);
    a.innerHTML = mc(b);
  }
  function rc(a) {
    var b = nc(
      qb(
        new nb(
          ob,
          '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16667 14.1667H7.50001V6.66667H9.16667V14.1667ZM12.5 6.66667H10.8333V14.1667H12.5V6.66667ZM15.8333 3.33333V4.16667H15V17.5H5.00001V4.16667H4.16667V3.33333H7.50001V2.5H12.5V3.33333H15.8333ZM14.1667 4.16667H5.83334V16.6667H14.1667V4.16667Z" fill="#030303"/></svg>'
        )
      )
    );
    qc(a, b);
  }
  function sc(a) {
    return decodeURIComponent(a.replace(/\+/g, " "));
  }
  var tc = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
  );
  function uc(a) {
    return a ? decodeURI(a) : a;
  }
  function vc(a) {
    return uc(a.match(tc)[3] || null);
  }
  function wc(a) {
    var b = a.match(tc);
    a = b[5];
    var c = b[6];
    b = b[7];
    var d = "";
    a && (d += a);
    c && (d += "?" + c);
    b && (d += "#" + b);
    return d;
  }
  function xc(a) {
    var b = a.indexOf("#");
    return 0 > b ? a : a.slice(0, b);
  }
  function yc(a, b, c) {
    if (Array.isArray(b))
      for (var d = 0; d < b.length; d++) yc(a, String(b[d]), c);
    else
      null != b &&
        c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))));
  }
  function zc(a) {
    var b = [],
      c;
    for (c in a) yc(c, a[c], b);
    return b.join("&");
  }
  function Ac(a, b) {
    b = zc(b);
    if (b) {
      var c = a.indexOf("#");
      0 > c && (c = a.length);
      var d = a.indexOf("?");
      if (0 > d || d > c) {
        d = c;
        var e = "";
      } else e = a.substring(d + 1, c);
      a = [a.slice(0, d), e, a.slice(c)];
      c = a[1];
      a[1] = b ? (c ? c + "&" + b : b) : c;
      b = a[0] + (a[1] ? "?" + a[1] : "") + a[2];
    } else b = a;
    return b;
  }
  function Bc(a, b, c, d) {
    for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d; ) {
      var f = a.charCodeAt(b - 1);
      if (38 == f || 63 == f)
        if (((f = a.charCodeAt(b + e)), !f || 61 == f || 38 == f || 35 == f))
          return b;
      b += e + 1;
    }
    return -1;
  }
  var Cc = /#|$/,
    Dc = /[?&]($|#)/;
  function Ec() {
    this.zb = this.zb;
    this.G = this.G;
  }
  Ec.prototype.zb = !1;
  Ec.prototype.dispose = function () {
    this.zb || ((this.zb = !0), this.Ia());
  };
  Ec.prototype.Ia = function () {
    if (this.G) for (; this.G.length; ) this.G.shift()();
  };
  function Fc(a, b) {
    this.type = a;
    this.g = this.target = b;
    this.defaultPrevented = this.i = !1;
  }
  Fc.prototype.stopPropagation = function () {
    this.i = !0;
  };
  Fc.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
  };
  function Gc(a, b) {
    a.__closure__error__context__984382 ||
      (a.__closure__error__context__984382 = {});
    a.__closure__error__context__984382.severity = b;
  }
  var Hc = (function () {
    if (!C.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        },
      });
    try {
      var c = function () {};
      C.addEventListener("test", c, b);
      C.removeEventListener("test", c, b);
    } catch (d) {}
    return a;
  })();
  function Ic() {
    return (
      J("Gecko") &&
      !(wb() && !J("Edge")) &&
      !(J("Trident") || J("MSIE")) &&
      !J("Edge")
    );
  }
  function Jc() {
    return Vb && Yb && Yb.platform ? "Android" === Yb.platform : J("Android");
  }
  function Kc() {
    return J("iPhone") && !J("iPod") && !J("iPad");
  }
  function Lc(a) {
    Lc[" "](a);
    return a;
  }
  Lc[" "] = function () {};
  var Mc = bc(),
    Nc = cc(),
    Oc = J("Edge"),
    Pc = Ic(),
    Qc = wb() && !J("Edge"),
    Rc = Jc();
  function Sc() {
    var a = C.document;
    return a ? a.documentMode : void 0;
  }
  var Tc;
  a: {
    var Uc = "",
      Vc = (function () {
        var a = xb();
        if (Pc) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (Oc) return /Edge\/([\d\.]+)/.exec(a);
        if (Nc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Qc) return /WebKit\/(\S+)/.exec(a);
        if (Mc) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    Vc && (Uc = Vc ? Vc[1] : "");
    if (Nc) {
      var Wc = Sc();
      if (null != Wc && Wc > parseFloat(Uc)) {
        Tc = String(Wc);
        break a;
      }
    }
    Tc = Uc;
  }
  var Xc = Tc,
    Zc;
  if (C.document && Nc) {
    var $c = Sc();
    Zc = $c ? $c : parseInt(Xc, 10) || void 0;
  } else Zc = void 0;
  var ad = Zc;
  function bd(a, b) {
    Fc.call(this, a ? a.type : "");
    this.relatedTarget = this.g = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.l = null;
    a && this.init(a, b);
  }
  H(bd, Fc);
  var cd = { 2: "touch", 3: "pen", 4: "mouse" };
  bd.prototype.init = function (a, b) {
    var c = (this.type = a.type),
      d =
        a.changedTouches && a.changedTouches.length
          ? a.changedTouches[0]
          : null;
    this.target = a.target || a.srcElement;
    this.g = b;
    if ((b = a.relatedTarget)) {
      if (Pc) {
        a: {
          try {
            Lc(b.nodeName);
            var e = !0;
            break a;
          } catch (f) {}
          e = !1;
        }
        e || (b = null);
      }
    } else
      "mouseover" == c
        ? (b = a.fromElement)
        : "mouseout" == c && (b = a.toElement);
    this.relatedTarget = b;
    d
      ? ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
        (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
        (this.screenX = d.screenX || 0),
        (this.screenY = d.screenY || 0))
      : ((this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
        (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
        (this.screenX = a.screenX || 0),
        (this.screenY = a.screenY || 0));
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType =
      "string" === typeof a.pointerType
        ? a.pointerType
        : cd[a.pointerType] || "";
    this.state = a.state;
    this.l = a;
    a.defaultPrevented && bd.Ma.preventDefault.call(this);
  };
  bd.prototype.stopPropagation = function () {
    bd.Ma.stopPropagation.call(this);
    this.l.stopPropagation
      ? this.l.stopPropagation()
      : (this.l.cancelBubble = !0);
  };
  bd.prototype.preventDefault = function () {
    bd.Ma.preventDefault.call(this);
    var a = this.l;
    a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
  };
  var dd = "closure_listenable_" + ((1e6 * Math.random()) | 0);
  var ed = 0;
  function fd(a, b, c, d, e) {
    this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.zc = e;
    this.key = ++ed;
    this.ic = this.oc = !1;
  }
  function gd(a) {
    a.ic = !0;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.zc = null;
  }
  function hd(a) {
    this.src = a;
    this.listeners = {};
    this.g = 0;
  }
  hd.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.listeners[f];
    a || ((a = this.listeners[f] = []), this.g++);
    var g = id(a, b, d, e);
    -1 < g
      ? ((b = a[g]), c || (b.oc = !1))
      : ((b = new fd(b, this.src, f, !!d, e)), (b.oc = c), a.push(b));
    return b;
  };
  hd.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.listeners)) return !1;
    var e = this.listeners[a];
    b = id(e, b, c, d);
    return -1 < b
      ? (gd(e[b]),
        Array.prototype.splice.call(e, b, 1),
        0 == e.length && (delete this.listeners[a], this.g--),
        !0)
      : !1;
  };
  function jd(a, b) {
    var c = b.type;
    c in a.listeners &&
      Ya(a.listeners[c], b) &&
      (gd(b), 0 == a.listeners[c].length && (delete a.listeners[c], a.g--));
  }
  function id(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.ic && f.listener == b && f.capture == !!c && f.zc == d) return e;
    }
    return -1;
  }
  var kd = "closure_lm_" + ((1e6 * Math.random()) | 0),
    ld = {},
    md = 0;
  function nd(a, b, c, d, e) {
    if (d && d.once) od(a, b, c, d, e);
    else if (Array.isArray(b))
      for (var f = 0; f < b.length; f++) nd(a, b[f], c, d, e);
    else
      (c = pd(c)),
        a && a[dd]
          ? a.ya(b, c, Ha(d) ? !!d.capture : !!d, e)
          : qd(a, b, c, !1, d, e);
  }
  function qd(a, b, c, d, e, f) {
    if (!b) throw Error("Invalid event type");
    var g = Ha(e) ? !!e.capture : !!e,
      h = rd(a);
    h || (a[kd] = h = new hd(a));
    c = h.add(b, c, d, g, f);
    if (!c.proxy) {
      d = sd();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener)
        Hc || (e = g),
          void 0 === e && (e = !1),
          a.addEventListener(b.toString(), d, e);
      else if (a.attachEvent) a.attachEvent(td(b.toString()), d);
      else if (a.addListener && a.removeListener) a.addListener(d);
      else throw Error("addEventListener and attachEvent are unavailable.");
      md++;
    }
  }
  function sd() {
    function a(c) {
      return b.call(a.src, a.listener, c);
    }
    var b = ud;
    return a;
  }
  function od(a, b, c, d, e) {
    if (Array.isArray(b))
      for (var f = 0; f < b.length; f++) od(a, b[f], c, d, e);
    else
      (c = pd(c)),
        a && a[dd]
          ? a.g.add(String(b), c, !0, Ha(d) ? !!d.capture : !!d, e)
          : qd(a, b, c, !0, d, e);
  }
  function vd(a, b, c, d, e) {
    if (Array.isArray(b))
      for (var f = 0; f < b.length; f++) vd(a, b[f], c, d, e);
    else
      ((d = Ha(d) ? !!d.capture : !!d), (c = pd(c)), a && a[dd])
        ? a.g.remove(String(b), c, d, e)
        : a &&
          (a = rd(a)) &&
          ((b = a.listeners[b.toString()]),
          (a = -1),
          b && (a = id(b, c, d, e)),
          (c = -1 < a ? b[a] : null) && wd(c));
  }
  function wd(a) {
    if ("number" !== typeof a && a && !a.ic) {
      var b = a.src;
      if (b && b[dd]) jd(b.g, a);
      else {
        var c = a.type,
          d = a.proxy;
        b.removeEventListener
          ? b.removeEventListener(c, d, a.capture)
          : b.detachEvent
          ? b.detachEvent(td(c), d)
          : b.addListener && b.removeListener && b.removeListener(d);
        md--;
        (c = rd(b))
          ? (jd(c, a), 0 == c.g && ((c.src = null), (b[kd] = null)))
          : gd(a);
      }
    }
  }
  function td(a) {
    return a in ld ? ld[a] : (ld[a] = "on" + a);
  }
  function ud(a, b) {
    if (a.ic) a = !0;
    else {
      b = new bd(b, this);
      var c = a.listener,
        d = a.zc || a.src;
      a.oc && wd(a);
      a = c.call(d, b);
    }
    return a;
  }
  function rd(a) {
    a = a[kd];
    return a instanceof hd ? a : null;
  }
  var xd = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
  function pd(a) {
    if ("function" === typeof a) return a;
    a[xd] ||
      (a[xd] = function (b) {
        return a.handleEvent(b);
      });
    return a[xd];
  }
  function yd() {
    Ec.call(this);
    this.g = new hd(this);
    this.C = this;
    this.s = null;
  }
  H(yd, Ec);
  yd.prototype[dd] = !0;
  yd.prototype.addEventListener = function (a, b, c, d) {
    nd(this, a, b, c, d);
  };
  yd.prototype.removeEventListener = function (a, b, c, d) {
    vd(this, a, b, c, d);
  };
  function zd(a, b) {
    var c = a.s;
    if (c) {
      var d = [];
      for (var e = 1; c; c = c.s) d.push(c), ++e;
    }
    a = a.C;
    c = b.type || b;
    "string" === typeof b
      ? (b = new Fc(b, a))
      : b instanceof Fc
      ? (b.target = b.target || a)
      : ((e = b), (b = new Fc(c, a)), hb(b, e));
    e = !0;
    if (d)
      for (var f = d.length - 1; !b.i && 0 <= f; f--) {
        var g = (b.g = d[f]);
        e = Ad(g, c, !0, b) && e;
      }
    b.i ||
      ((g = b.g = a),
      (e = Ad(g, c, !0, b) && e),
      b.i || (e = Ad(g, c, !1, b) && e));
    if (d)
      for (f = 0; !b.i && f < d.length; f++)
        (g = b.g = d[f]), (e = Ad(g, c, !1, b) && e);
  }
  yd.prototype.Ia = function () {
    yd.Ma.Ia.call(this);
    if (this.g) {
      var a = this.g,
        b = 0,
        c;
      for (c in a.listeners) {
        for (var d = a.listeners[c], e = 0; e < d.length; e++) ++b, gd(d[e]);
        delete a.listeners[c];
        a.g--;
      }
    }
    this.s = null;
  };
  yd.prototype.ya = function (a, b, c, d) {
    return this.g.add(String(a), b, !1, c, d);
  };
  function Ad(a, b, c, d) {
    b = a.g.listeners[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.ic && g.capture == c) {
        var h = g.listener,
          k = g.zc || g.src;
        g.oc && jd(a.g, g);
        e = !1 !== h.call(k, d) && e;
      }
    }
    return e && !d.defaultPrevented;
  }
  function Bd(a, b) {
    this.i = a;
    this.m = b;
    this.l = 0;
    this.g = null;
  }
  Bd.prototype.get = function () {
    if (0 < this.l) {
      this.l--;
      var a = this.g;
      this.g = a.next;
      a.next = null;
    } else a = this.i();
    return a;
  };
  function Cd(a, b) {
    a.m(b);
    100 > a.l && (a.l++, (b.next = a.g), (a.g = b));
  }
  function Dd(a, b) {
    this.width = a;
    this.height = b;
  }
  m = Dd.prototype;
  m.clone = function () {
    return new Dd(this.width, this.height);
  };
  m.aspectRatio = function () {
    return this.width / this.height;
  };
  m.nd = function () {
    return !(this.width * this.height);
  };
  m.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  m.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  m.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  function Ed(a) {
    var b = document;
    a = String(a);
    "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
    return b.createElement(a);
  }
  function Fd(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null;
  }
  function Gd(a) {
    "function" !== typeof C.setImmediate ||
    (C.Window &&
      C.Window.prototype &&
      !dc() &&
      C.Window.prototype.setImmediate == C.setImmediate)
      ? (Hd || (Hd = Id()), Hd(a))
      : C.setImmediate(a);
  }
  var Hd;
  function Id() {
    var a = C.MessageChannel;
    "undefined" === typeof a &&
      "undefined" !== typeof window &&
      window.postMessage &&
      window.addEventListener &&
      !J("Presto") &&
      (a = function () {
        var e = Ed("IFRAME");
        e.style.display = "none";
        document.documentElement.appendChild(e);
        var f = e.contentWindow;
        e = f.document;
        e.open();
        e.close();
        var g = "callImmediate" + Math.random(),
          h =
            "file:" == f.location.protocol
              ? "*"
              : f.location.protocol + "//" + f.location.host;
        e = E(function (k) {
          if (("*" == h || k.origin == h) && k.data == g)
            this.port1.onmessage();
        }, this);
        f.addEventListener("message", e, !1);
        this.port1 = {};
        this.port2 = {
          postMessage: function () {
            f.postMessage(g, h);
          },
        };
      });
    if ("undefined" !== typeof a && !cc()) {
      var b = new a(),
        c = {},
        d = c;
      b.port1.onmessage = function () {
        if (void 0 !== c.next) {
          c = c.next;
          var e = c.Td;
          c.Td = null;
          e();
        }
      };
      return function (e) {
        d.next = { Td: e };
        d = d.next;
        b.port2.postMessage(0);
      };
    }
    return function (e) {
      C.setTimeout(e, 0);
    };
  }
  function Jd(a) {
    C.setTimeout(function () {
      throw a;
    }, 0);
  }
  function Kd() {
    this.l = this.g = null;
  }
  Kd.prototype.add = function (a, b) {
    var c = Ld.get();
    c.set(a, b);
    this.l ? (this.l.next = c) : (this.g = c);
    this.l = c;
  };
  Kd.prototype.remove = function () {
    var a = null;
    this.g &&
      ((a = this.g),
      (this.g = this.g.next),
      this.g || (this.l = null),
      (a.next = null));
    return a;
  };
  var Ld = new Bd(
    function () {
      return new Md();
    },
    function (a) {
      return a.reset();
    }
  );
  function Md() {
    this.next = this.scope = this.g = null;
  }
  Md.prototype.set = function (a, b) {
    this.g = a;
    this.scope = b;
    this.next = null;
  };
  Md.prototype.reset = function () {
    this.next = this.scope = this.g = null;
  };
  var Nd,
    Od = !1,
    Pd = new Kd();
  function Qd(a, b) {
    Nd || Rd();
    Od || (Nd(), (Od = !0));
    Pd.add(a, b);
  }
  function Rd() {
    if (C.Promise && C.Promise.resolve) {
      var a = C.Promise.resolve(void 0);
      Nd = function () {
        a.then(Sd);
      };
    } else
      Nd = function () {
        Gd(Sd);
      };
  }
  function Sd() {
    for (var a; (a = Pd.remove()); ) {
      try {
        a.g.call(a.scope);
      } catch (b) {
        Jd(b);
      }
      Cd(Ld, a);
    }
    Od = !1;
  }
  function Td(a) {
    this.g = 0;
    this.u = void 0;
    this.m = this.l = this.i = null;
    this.o = this.s = !1;
    if (a != Qa)
      try {
        var b = this;
        a.call(
          void 0,
          function (c) {
            Ud(b, 2, c);
          },
          function (c) {
            Ud(b, 3, c);
          }
        );
      } catch (c) {
        Ud(this, 3, c);
      }
  }
  function Vd() {
    this.next = this.context = this.l = this.i = this.g = null;
    this.m = !1;
  }
  Vd.prototype.reset = function () {
    this.context = this.l = this.i = this.g = null;
    this.m = !1;
  };
  var Wd = new Bd(
    function () {
      return new Vd();
    },
    function (a) {
      a.reset();
    }
  );
  function Xd(a, b, c) {
    var d = Wd.get();
    d.i = a;
    d.l = b;
    d.context = c;
    return d;
  }
  Td.prototype.then = function (a, b, c) {
    return Yd(
      this,
      "function" === typeof a ? a : null,
      "function" === typeof b ? b : null,
      c
    );
  };
  Td.prototype.$goog_Thenable = !0;
  Td.prototype.cancel = function (a) {
    if (0 == this.g) {
      var b = new Zd(a);
      Qd(function () {
        $d(this, b);
      }, this);
    }
  };
  function $d(a, b) {
    if (0 == a.g)
      if (a.i) {
        var c = a.i;
        if (c.l) {
          for (
            var d = 0, e = null, f = null, g = c.l;
            g && (g.m || (d++, g.g == a && (e = g), !(e && 1 < d)));
            g = g.next
          )
            e || (f = g);
          e &&
            (0 == c.g && 1 == d
              ? $d(c, b)
              : (f
                  ? ((d = f),
                    d.next == c.m && (c.m = d),
                    (d.next = d.next.next))
                  : ae(c),
                be(c, e, 3, b)));
        }
        a.i = null;
      } else Ud(a, 3, b);
  }
  function ce(a, b) {
    a.l || (2 != a.g && 3 != a.g) || de(a);
    a.m ? (a.m.next = b) : (a.l = b);
    a.m = b;
  }
  function Yd(a, b, c, d) {
    var e = Xd(null, null, null);
    e.g = new Td(function (f, g) {
      e.i = b
        ? function (h) {
            try {
              var k = b.call(d, h);
              f(k);
            } catch (l) {
              g(l);
            }
          }
        : f;
      e.l = c
        ? function (h) {
            try {
              var k = c.call(d, h);
              void 0 === k && h instanceof Zd ? g(h) : f(k);
            } catch (l) {
              g(l);
            }
          }
        : g;
    });
    e.g.i = a;
    ce(a, e);
    return e.g;
  }
  Td.prototype.D = function (a) {
    this.g = 0;
    Ud(this, 2, a);
  };
  Td.prototype.G = function (a) {
    this.g = 0;
    Ud(this, 3, a);
  };
  function Ud(a, b, c) {
    if (0 == a.g) {
      a === c &&
        ((b = 3), (c = new TypeError("Promise cannot resolve to itself")));
      a.g = 1;
      a: {
        var d = c,
          e = a.D,
          f = a.G;
        if (d instanceof Td) {
          ce(d, Xd(e || Qa, f || null, a));
          var g = !0;
        } else {
          if (d)
            try {
              var h = !!d.$goog_Thenable;
            } catch (l) {
              h = !1;
            }
          else h = !1;
          if (h) d.then(e, f, a), (g = !0);
          else {
            if (Ha(d))
              try {
                var k = d.then;
                if ("function" === typeof k) {
                  ee(d, k, e, f, a);
                  g = !0;
                  break a;
                }
              } catch (l) {
                f.call(a, l);
                g = !0;
                break a;
              }
            g = !1;
          }
        }
      }
      g ||
        ((a.u = c),
        (a.g = b),
        (a.i = null),
        de(a),
        3 != b || c instanceof Zd || fe(a, c));
    }
  }
  function ee(a, b, c, d, e) {
    function f(k) {
      h || ((h = !0), d.call(e, k));
    }
    function g(k) {
      h || ((h = !0), c.call(e, k));
    }
    var h = !1;
    try {
      b.call(a, g, f);
    } catch (k) {
      f(k);
    }
  }
  function de(a) {
    a.s || ((a.s = !0), Qd(a.C, a));
  }
  function ae(a) {
    var b = null;
    a.l && ((b = a.l), (a.l = b.next), (b.next = null));
    a.l || (a.m = null);
    return b;
  }
  Td.prototype.C = function () {
    for (var a; (a = ae(this)); ) be(this, a, this.g, this.u);
    this.s = !1;
  };
  function be(a, b, c, d) {
    if (3 == c && b.l && !b.m) for (; a && a.o; a = a.i) a.o = !1;
    if (b.g) (b.g.i = null), ge(b, c, d);
    else
      try {
        b.m ? b.i.call(b.context) : ge(b, c, d);
      } catch (e) {
        he.call(null, e);
      }
    Cd(Wd, b);
  }
  function ge(a, b, c) {
    2 == b ? a.i.call(a.context, c) : a.l && a.l.call(a.context, c);
  }
  function fe(a, b) {
    a.o = !0;
    Qd(function () {
      a.o && he.call(null, b);
    });
  }
  var he = Jd;
  function Zd(a) {
    Ma.call(this, a);
  }
  H(Zd, Ma);
  Zd.prototype.name = "cancel";
  function ie(a, b) {
    yd.call(this);
    this.i = a || 1;
    this.l = b || C;
    this.m = E(this.lh, this);
    this.o = F();
  }
  H(ie, yd);
  m = ie.prototype;
  m.enabled = !1;
  m.Ua = null;
  m.lh = function () {
    if (this.enabled) {
      var a = F() - this.o;
      0 < a && a < 0.8 * this.i
        ? (this.Ua = this.l.setTimeout(this.m, this.i - a))
        : (this.Ua && (this.l.clearTimeout(this.Ua), (this.Ua = null)),
          zd(this, "tick"),
          this.enabled && (je(this), this.start()));
    }
  };
  m.start = function () {
    this.enabled = !0;
    this.Ua || ((this.Ua = this.l.setTimeout(this.m, this.i)), (this.o = F()));
  };
  function je(a) {
    a.enabled = !1;
    a.Ua && (a.l.clearTimeout(a.Ua), (a.Ua = null));
  }
  m.Ia = function () {
    ie.Ma.Ia.call(this);
    je(this);
    delete this.l;
  };
  var ke = Kc() || J("iPod"),
    le = J("iPad");
  !J("Android") || hc();
  hc();
  var me = fc() && !(Kc() || J("iPad") || J("iPod"));
  var ne = {},
    oe = null;
  function pe(a, b) {
    Ga(a);
    void 0 === b && (b = 0);
    if (!oe) {
      oe = {};
      for (
        var c =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
              ""
            ),
          d = ["+/=", "+/", "-_=", "-_.", "-_"],
          e = 0;
        5 > e;
        e++
      ) {
        var f = c.concat(d[e].split(""));
        ne[e] = f;
        for (var g = 0; g < f.length; g++) {
          var h = f[g];
          void 0 === oe[h] && (oe[h] = g);
        }
      }
    }
    b = ne[b];
    c = Array(Math.floor(a.length / 3));
    d = b[64] || "";
    for (e = f = 0; f < a.length - 2; f += 3) {
      var k = a[f],
        l = a[f + 1];
      h = a[f + 2];
      g = b[k >> 2];
      k = b[((k & 3) << 4) | (l >> 4)];
      l = b[((l & 15) << 2) | (h >> 6)];
      h = b[h & 63];
      c[e++] = "" + g + k + l + h;
    }
    g = 0;
    h = d;
    switch (a.length - f) {
      case 2:
        (g = a[f + 1]), (h = b[(g & 15) << 2] || d);
      case 1:
        (a = a[f]),
          (c[e] = "" + b[a >> 2] + b[((a & 3) << 4) | (g >> 4)] + h + d);
    }
    return c.join("");
  }
  var qe = "undefined" !== typeof Uint8Array,
    re = !Nc && "function" === typeof btoa;
  function se(a) {
    return Array.prototype.slice.call(a);
  }
  var te =
    "function" === typeof Symbol && "symbol" === typeof Symbol()
      ? Symbol()
      : void 0;
  Math.max.apply(
    Math,
    x(
      Object.values({
        Jh: 1,
        Hh: 2,
        Gh: 4,
        Mh: 8,
        Lh: 16,
        Kh: 32,
        Dh: 64,
        Nh: 128,
        Fh: 256,
        Eh: 512,
        Ih: 1024,
      })
    )
  );
  var ue = te
    ? function (a, b) {
        a[te] |= b;
      }
    : function (a, b) {
        void 0 !== a.Ka
          ? (a.Ka |= b)
          : Object.defineProperties(a, {
              Ka: { value: b, configurable: !0, writable: !0, enumerable: !1 },
            });
      };
  function ve(a) {
    var b = we(a);
    1 !== (b & 1) && (Object.isFrozen(a) && (a = se(a)), xe(a, b | 1));
  }
  var ye = te
      ? function (a, b) {
          a[te] &= ~b;
        }
      : function (a, b) {
          void 0 !== a.Ka && (a.Ka &= ~b);
        },
    we = te
      ? function (a) {
          return a[te] | 0;
        }
      : function (a) {
          return a.Ka | 0;
        },
    ze = te
      ? function (a) {
          return a[te];
        }
      : function (a) {
          return a.Ka;
        },
    xe = te
      ? function (a, b) {
          a[te] = b;
        }
      : function (a, b) {
          void 0 !== a.Ka
            ? (a.Ka = b)
            : Object.defineProperties(a, {
                Ka: {
                  value: b,
                  configurable: !0,
                  writable: !0,
                  enumerable: !1,
                },
              });
        };
  function Ae() {
    var a = [];
    ue(a, 1);
    return a;
  }
  function Be(a, b) {
    xe(b, (a | 0) & -255);
  }
  function Ce(a, b) {
    xe(b, (a | 34) & -221);
  }
  function De(a) {
    a = (a >> 11) & 1023;
    return 0 === a ? 536870912 : a;
  }
  var Ee = {};
  function Fe(a) {
    return (
      null !== a &&
      "object" === typeof a &&
      !Array.isArray(a) &&
      a.constructor === Object
    );
  }
  var Ge,
    He,
    Ie = [];
  xe(Ie, 55);
  He = Object.freeze(Ie);
  function Je(a) {
    if (a & 2) throw Error();
  }
  function Ke() {
    var a = Error();
    Gc(a, "incident");
    return a;
  }
  function Le(a) {
    return a.displayName || a.name || "unknown type name";
  }
  var Me = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
  function Ne(a) {
    return (
      ("number" === typeof a && Number.isFinite(a)) ||
      (!!a && "string" === typeof a && isFinite(a))
    );
  }
  function Oe(a) {
    if (null != a && "string" !== typeof a) throw Error();
    return a;
  }
  function Pe(a) {
    return null == a || "string" === typeof a ? a : void 0;
  }
  function Qe(a, b) {
    if (!(a instanceof b))
      throw Error(
        "Expected instanceof " + Le(b) + " but got " + (a && Le(a.constructor))
      );
    return a;
  }
  function Re(a, b, c) {
    var d = !1;
    if (
      null != a &&
      "object" === typeof a &&
      !(d = Array.isArray(a)) &&
      a.td === Ee
    )
      return a;
    if (d) {
      var e = (d = we(a));
      0 === e && (e |= c & 32);
      e |= c & 2;
      e !== d && xe(a, e);
      return new b(a);
    }
  }
  var Se;
  function K(a, b, c) {
    null == a && (a = Se);
    Se = void 0;
    if (null == a) {
      var d = 96;
      c ? ((a = [c]), (d |= 512)) : (a = []);
      b && (d = (d & -2095105) | ((b & 1023) << 11));
    } else {
      if (!Array.isArray(a)) throw Error();
      d = we(a);
      if (d & 64) return a;
      d |= 64;
      if (c && ((d |= 512), c !== a[0])) throw Error();
      a: {
        c = a;
        var e = c.length;
        if (e) {
          var f = e - 1,
            g = c[f];
          if (Fe(g)) {
            d |= 256;
            b = +!!(d & 512) - 1;
            e = f - b;
            1024 <= e && (Te(c, b, g), (e = 1023));
            d = (d & -2095105) | ((e & 1023) << 11);
            break a;
          }
        }
        b &&
          ((g = +!!(d & 512) - 1),
          (b = Math.max(b, e - g)),
          1024 < b && (Te(c, g, {}), (d |= 256), (b = 1023)),
          (d = (d & -2095105) | ((b & 1023) << 11)));
      }
    }
    xe(a, d);
    return a;
  }
  function Te(a, b, c) {
    for (var d = 1023 + b, e = a.length, f = d; f < e; f++) {
      var g = a[f];
      null != g && g !== c && (c[f - b] = g);
    }
    a.length = d + 1;
    a[d] = c;
  }
  function Ue(a, b) {
    return Ve(b);
  }
  function Ve(a) {
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "boolean":
        return a ? 1 : 0;
      case "object":
        if (
          a &&
          !Array.isArray(a) &&
          qe &&
          null != a &&
          a instanceof Uint8Array
        ) {
          if (re) {
            for (var b = "", c = 0, d = a.length - 10240; c < d; )
              b += String.fromCharCode.apply(null, a.subarray(c, (c += 10240)));
            b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
            a = btoa(b);
          } else a = pe(a);
          return a;
        }
    }
    return a;
  }
  function We(a, b, c) {
    a = se(a);
    var d = a.length,
      e = b & 256 ? a[d - 1] : void 0;
    d += e ? -1 : 0;
    for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
    if (e) {
      b = a[b] = {};
      for (var f in e) b[f] = c(e[f]);
    }
    return a;
  }
  function Xe(a, b, c, d, e, f) {
    if (null != a) {
      if (Array.isArray(a))
        a =
          e && 0 == a.length && we(a) & 1
            ? void 0
            : f && we(a) & 2
            ? a
            : Ye(a, b, c, void 0 !== d, e, f);
      else if (Fe(a)) {
        var g = {},
          h;
        for (h in a) g[h] = Xe(a[h], b, c, d, e, f);
        a = g;
      } else a = b(a, d);
      return a;
    }
  }
  function Ye(a, b, c, d, e, f) {
    var g = d || c ? we(a) : 0;
    d = d ? !!(g & 32) : void 0;
    a = se(a);
    for (var h = 0; h < a.length; h++) a[h] = Xe(a[h], b, c, d, e, f);
    c && c(g, a);
    return a;
  }
  function Ze(a) {
    return a.td === Ee ? a.toJSON() : Ve(a);
  }
  function $e(a, b, c) {
    c = void 0 === c ? Ce : c;
    if (null != a) {
      if (qe && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        var d = we(a);
        if (d & 2) return a;
        b && (b = 0 === d || (!!(d & 32) && !(d & 64 || !(d & 16))));
        return b
          ? (xe(a, d | 34), d & 4 && Object.freeze(a), a)
          : Ye(a, $e, d & 4 ? Ce : c, !0, !1, !0);
      }
      a.td === Ee &&
        ((c = a.T), (d = ze(c)), (a = d & 2 ? a : af(a, c, d, !0)));
      return a;
    }
  }
  function af(a, b, c, d) {
    a = a.constructor;
    b = bf(b, c, d);
    we(b);
    Se = b;
    b = new a(b);
    Se = void 0;
    return b;
  }
  function bf(a, b, c) {
    var d = c || b & 2 ? Ce : Be,
      e = !!(b & 32);
    a = We(a, b, function (f) {
      return $e(f, e, d);
    });
    ue(a, 32 | (c ? 2 : 0));
    return a;
  }
  function cf(a, b) {
    a = a.T;
    return df(a, ze(a), b);
  }
  function df(a, b, c, d) {
    if (-1 === c) return null;
    if (c >= De(b)) {
      if (b & 256) return a[a.length - 1][c];
    } else {
      var e = a.length;
      if (d && b & 256 && ((d = a[e - 1][c]), null != d)) return d;
      b = c + (+!!(b & 512) - 1);
      if (b < e) return a[b];
    }
  }
  function ef(a, b, c) {
    var d = a.T,
      e = ze(d);
    Je(e);
    ff(d, e, b, c);
    return a;
  }
  function ff(a, b, c, d, e) {
    Fe(d);
    var f = De(b);
    if (c >= f || e) {
      e = b;
      if (b & 256) f = a[a.length - 1];
      else {
        if (null == d) return;
        f = a[f + (+!!(b & 512) - 1)] = {};
        e |= 256;
      }
      f[c] = d;
      e !== b && xe(a, e);
    } else
      (a[c + (+!!(b & 512) - 1)] = d),
        b & 256 && ((a = a[a.length - 1]), c in a && delete a[c]);
  }
  function gf(a, b, c, d) {
    a = a.T;
    var e = ze(a);
    Je(e);
    (c = hf(a, e, c)) && c !== b && null != d && ff(a, e, c);
    ff(a, e, b, d);
  }
  function jf(a, b, c) {
    a = a.T;
    return hf(a, ze(a), b) === c ? c : -1;
  }
  function hf(a, b, c) {
    for (var d = 0, e = 0; e < c.length; e++) {
      var f = c[e];
      null != df(a, b, f) && (0 !== d && ff(a, b, d), (d = f));
    }
    return d;
  }
  function kf(a, b, c) {
    var d = void 0 === d ? !1 : d;
    var e = a.T;
    var f = ze(e),
      g = df(e, f, c, d);
    b = Re(g, b, f);
    b !== g && null != b && ff(e, f, c, b, d);
    e = b;
    if (null == e) return e;
    a = a.T;
    f = ze(a);
    if (!(f & 2)) {
      g = e;
      b = g.T;
      var h = ze(b);
      g = h & 2 ? af(g, b, h, !1) : g;
      g !== e && ((e = g), ff(a, f, c, e, d));
    }
    return e;
  }
  function lf(a, b, c, d) {
    null != d ? Qe(d, b) : (d = void 0);
    return ef(a, c, d);
  }
  function mf(a, b, c, d) {
    a = a.T;
    var e = ze(a);
    Je(e);
    var f = !!(e & 2);
    var g = e & 2;
    var h = df(a, e, b);
    Array.isArray(h) || (h = He);
    var k = we(h);
    k & 1 || ((k |= 1), xe(h, k));
    g ? k & 2 || ue(h, 34) : k & 32 && !(k & 2) && ye(h, 32);
    g = h;
    if (g !== He && we(g) & 4)
      f
        ? ((f = we(g)), (g = se(g)), xe(g, f), ff(a, e, b, g))
        : ((f = Object.isFrozen(g)),
          (h = we(g)),
          (k = h & -33),
          f || h & 2
            ? ((g = se(g)), xe(g, k & -3), ff(a, e, b, g))
            : h !== k && xe(g, k)),
        (b = g);
    else {
      f = g;
      h = !!(e & 2);
      k = !!(we(f) & 2);
      g = f;
      !h && k && (f = se(f));
      h = k || void 0;
      k = e | (h ? 2 : 0);
      var l = h;
      h = !1;
      for (var n = 0, p = 0; n < f.length; n++) {
        var r = Re(f[n], c, k);
        if (null != r) {
          var q = !!(we(r.T) & 2);
          l = l || q;
          h = h || !q;
          f[p++] = r;
        }
      }
      p < n && (f.length = p);
      k = !l;
      l = !h;
      h = !0;
      h = void 0 === h ? !1 : h;
      n = we(f);
      p = n | 5;
      k = k ? p | 8 : p & -9;
      k = l ? k | 16 : k & -17;
      n != k &&
        (Object.isFrozen(f) && (f = se(f)),
        xe(f, k),
        !h && k & 2 && Object.freeze(f));
      g !== f && ff(a, e, b, f);
      b = f;
    }
    c = null != d ? Qe(d, c) : new c();
    b.push(c);
    we(c.T) & 2 ? ye(b, 8) : ye(b, 16);
  }
  function nf(a, b) {
    var c = void 0 === c ? "" : c;
    a = Pe(cf(a, b));
    return null != a ? a : c;
  }
  function of(a, b) {
    var c = 0;
    c = void 0 === c ? 0 : c;
    a = cf(a, b);
    return null != a ? a : c;
  }
  function pf(a, b) {
    b = jf(a, qf, b);
    return Pe(cf(a, b));
  }
  function rf(a, b, c) {
    if (null != c) {
      if (!Ne(c)) throw ((a = Error()), Gc(a, "warning"), a);
      var d = typeof c;
      ("number" === d ? Number.isFinite(c) : "string" !== d ? 0 : Me.test(c)) ||
        ((d = Ke()), Jd(d));
      "string" === typeof c ? Ne(c) : Ne(c);
    }
    ef(a, b, c);
  }
  function L(a, b, c) {
    return ef(a, b, Oe(c));
  }
  function sf(a, b, c) {
    if (null != c && !Number.isFinite(c)) {
      var d = Ke();
      Jd(d);
    }
    return ef(a, b, c);
  }
  function M(a, b, c) {
    this.T = K(a, b, c);
  }
  M.prototype.toJSON = function () {
    if (Ge) var a = tf(this, this.T, !1);
    else (a = Ye(this.T, Ze, void 0, void 0, !1, !1)), (a = tf(this, a, !0));
    return a;
  };
  M.prototype.clone = function () {
    var a = this.T;
    return af(this, a, ze(a), !1);
  };
  M.prototype.td = Ee;
  M.prototype.toString = function () {
    return tf(this, this.T, !1).toString();
  };
  function tf(a, b, c) {
    var d = a.constructor.rb,
      e = ze(c ? a.T : b),
      f = De(e);
    e = !1;
    if (d) {
      if (!c) {
        b = se(b);
        var g;
        if (b.length && Fe((g = b[b.length - 1])))
          for (e = 0; e < d.length; e++)
            if (d[e] >= f) {
              Object.assign((b[b.length - 1] = {}), g);
              break;
            }
        e = !0;
      }
      g = b;
      c = !c;
      f = ze(a.T);
      a = De(f);
      f = +!!(f & 512) - 1;
      for (var h, k, l = 0; l < d.length; l++)
        if (((k = d[l]), k < a)) {
          k += f;
          var n = g[k];
          null == n ? (g[k] = c ? He : Ae()) : c && n !== He && ve(n);
        } else
          h ||
            ((n = void 0),
            g.length && Fe((n = g[g.length - 1])) ? (h = n) : g.push((h = {}))),
            (n = h[k]),
            null == h[k] ? (h[k] = c ? He : Ae()) : c && n !== He && ve(n);
    }
    d = b.length;
    if (!d) return b;
    var p;
    if (Fe((h = b[d - 1]))) {
      a: {
        var r = h;
        g = {};
        c = !1;
        for (var q in r)
          (a = r[q]),
            Array.isArray(a) && a != a && (c = !0),
            null != a ? (g[q] = a) : (c = !0);
        if (c) {
          for (var u in g) {
            r = g;
            break a;
          }
          r = null;
        }
      }
      r != h && (p = !0);
      d--;
    }
    for (; 0 < d; d--) {
      h = b[d - 1];
      if (null != h) break;
      var t = !0;
    }
    if (!p && !t) return b;
    var A;
    e ? (A = b) : (A = Array.prototype.slice.call(b, 0, d));
    b = A;
    e && (b.length = d);
    r && b.push(r);
    return b;
  }
  var uf = window;
  function vf() {
    return Vb && Yb
      ? Yb.mobile
      : !(Vb && Yb
          ? !Yb.mobile && (J("iPad") || J("Android") || J("Silk"))
          : J("iPad") || (J("Android") && !J("Mobile")) || J("Silk")) &&
          (J("iPod") || J("iPhone") || J("Android") || J("IEMobile"));
  } /*

 SPDX-License-Identifier: Apache-2.0
*/
  var wf = "function" === typeof URL;
  function xf(a) {
    if (!wf) {
      a: {
        var b = document.createElement("a");
        try {
          b.href = a;
        } catch (c) {
          a = void 0;
          break a;
        }
        a = b.protocol;
        a = ":" === a || "" === a ? "https:" : a;
      }
      return a;
    }
    try {
      b = new URL(a);
    } catch (c) {
      return "https:";
    }
    return b.protocol;
  }
  var yf = ["data:", "http:", "https:", "mailto:", "ftp:"];
  function zf(a) {
    a instanceof zb ? (a = Ab(a)) : (a = "javascript:" !== xf(a) ? a : void 0);
    return a;
  }
  function Af(a, b) {
    b = zf(b);
    void 0 !== b && (a.href = b);
  }
  function Bf(a, b) {
    if (1 === a.nodeType) {
      var c = a.tagName;
      if ("SCRIPT" === c || "STYLE" === c) throw Error("");
    }
    a.innerHTML = mc(b);
  }
  function Cf() {
    throw Error("unknown trace type");
  }
  function Df(a, b) {
    a.src = sb(b);
    var c, d;
    (c = (b =
      null ==
      (d = (c = ((a.ownerDocument && a.ownerDocument.defaultView) || window)
        .document).querySelector)
        ? void 0
        : d.call(c, "script[nonce]"))
      ? b.nonce || b.getAttribute("nonce") || ""
      : "") && a.setAttribute("nonce", c);
  }
  function Ef(a) {
    this.zg = a;
  }
  function Ff(a) {
    return new Ef(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var Gf = [
    Ff("data"),
    Ff("http"),
    Ff("https"),
    Ff("mailto"),
    Ff("ftp"),
    new Ef(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  function Hf(a) {
    for (var b = Ca.apply(1, arguments), c = [a[0]], d = 0; d < b.length; d++)
      c.push(String(b[d])), c.push(a[d + 1]);
    return new zb(c.join(""), Eb);
  }
  function If(a) {
    var b = Jf;
    if (b)
      for (var c in b)
        Object.prototype.hasOwnProperty.call(b, c) && a(b[c], c, b);
  }
  function Kf() {
    var a = [];
    If(function (b) {
      a.push(b);
    });
    return a;
  }
  var Jf = {
      sh: "allow-forms",
      th: "allow-modals",
      uh: "allow-orientation-lock",
      vh: "allow-pointer-lock",
      wh: "allow-popups",
      xh: "allow-popups-to-escape-sandbox",
      yh: "allow-presentation",
      zh: "allow-same-origin",
      Ah: "allow-scripts",
      Bh: "allow-top-navigation",
      Ch: "allow-top-navigation-by-user-activation",
    },
    Lf = Ra(function () {
      return Kf();
    });
  function Mf() {
    var a = Nf(),
      b = {};
    Ta(Lf(), function (c) {
      a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0);
    });
    return b;
  }
  function Nf() {
    var a = void 0 === a ? document : a;
    return a.createElement("iframe");
  }
  function Of(a) {
    var b = document.implementation.createHTMLDocument(""),
      c = b.createRange();
    c.selectNode(b.body);
    a = nc(a);
    return c.createContextualFragment(mc(a));
  }
  function Pf(a) {
    a = a.nodeName;
    return "string" === typeof a ? a : "FORM";
  }
  function Qf(a) {
    a = a.nodeType;
    return 1 === a || "number" !== typeof a;
  }
  var Rf =
      "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER".split(
        " "
      ),
    Sf = [
      ["A", new Map([["href", { za: 2 }]])],
      ["AREA", new Map([["href", { za: 2 }]])],
      [
        "LINK",
        new Map([
          [
            "href",
            {
              za: 2,
              conditions: new Map([
                [
                  "rel",
                  new Set(
                    "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(
                      " "
                    )
                  ),
                ],
              ]),
            },
          ],
        ]),
      ],
      ["SOURCE", new Map([["src", { za: 1 }]])],
      ["IMG", new Map([["src", { za: 1 }]])],
      ["VIDEO", new Map([["src", { za: 1 }]])],
      ["AUDIO", new Map([["src", { za: 1 }]])],
    ],
    Tf =
      "title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(
        " "
      ),
    Uf = [
      [
        "dir",
        {
          za: 3,
          conditions: new Map([["dir", new Set(["auto", "ltr", "rtl"])]]),
        },
      ],
      [
        "async",
        { za: 3, conditions: new Map([["async", new Set(["async"])]]) },
      ],
      ["cite", { za: 2 }],
      [
        "loading",
        {
          za: 3,
          conditions: new Map([["loading", new Set(["eager", "lazy"])]]),
        },
      ],
      ["poster", { za: 2 }],
      [
        "target",
        {
          za: 3,
          conditions: new Map([["target", new Set(["_self", "_blank"])]]),
        },
      ],
    ],
    Vf = new (function () {
      var a = new Set(Tf),
        b = new Map(Uf),
        c = new Map(Sf);
      this.l = new Set(Rf);
      this.g = c;
      this.i = a;
      this.m = b;
    })();
  function Wf() {
    this.l = Vf;
    this.g = [];
  }
  function Xf(a) {
    var b = Yf;
    b.g = [];
    a = b.m(a);
    if (0 !== b.g.length) throw Error("");
    return a;
  }
  Wf.prototype.m = function (a) {
    var b = document.createElement("span");
    b.appendChild(Zf(this, a));
    a = new XMLSerializer().serializeToString(b);
    a = a.slice(a.indexOf(">") + 1, a.lastIndexOf("</"));
    return nc(a);
  };
  function Zf(a, b) {
    b = Of(b);
    b = document.createTreeWalker(
      b,
      5,
      function (g) {
        return $f(a, g);
      },
      !1
    );
    for (
      var c = b.nextNode(), d = document.createDocumentFragment(), e = d;
      null !== c;

    ) {
      var f = void 0;
      if (3 === c.nodeType) f = document.createTextNode(c.data);
      else if (Qf(c)) f = ag(a, c);
      else throw Error("");
      e.appendChild(f);
      if ((c = b.firstChild())) e = f;
      else
        for (; !(c = b.nextSibling()) && (c = b.parentNode()); )
          e = e.parentNode;
    }
    return d;
  }
  function ag(a, b) {
    var c = Pf(b),
      d = document.createElement(c);
    b = b.attributes;
    for (var e = w(b), f = e.next(); !f.done; f = e.next()) {
      var g = f.value;
      f = g.name;
      g = g.value;
      var h = a.l;
      var k = h.g.get(c);
      h = (null == k ? 0 : k.has(f))
        ? k.get(f)
        : h.i.has(f)
        ? { za: 1 }
        : (h = h.m.get(f))
        ? h
        : { za: 0 };
      a: {
        if ((k = h.conditions)) {
          k = w(k);
          for (var l = k.next(); !l.done; l = k.next()) {
            var n = w(l.value);
            l = n.next().value;
            n = n.next().value;
            var p = void 0;
            if (
              (l = null == (p = b.getNamedItem(l)) ? void 0 : p.value) &&
              !n.has(l)
            ) {
              k = !1;
              break a;
            }
          }
        }
        k = !0;
      }
      if (k)
        switch (h.za) {
          case 1:
            bg(d, f, g);
            break;
          case 2:
            h = xf(g);
            h =
              void 0 !== h && -1 !== yf.indexOf(h.toLowerCase())
                ? g
                : "about:invalid#zClosurez";
            h !== g && cg(a);
            bg(d, f, h);
            break;
          case 3:
            bg(d, f, g.toLowerCase());
            break;
          case 4:
            bg(d, f, g);
            break;
          case 0:
            cg(a);
        }
      else cg(a);
    }
    return d;
  }
  function $f(a, b) {
    if (3 === b.nodeType) return 1;
    if (!Qf(b)) return 2;
    b = Pf(b);
    if (null === b) return cg(a), 2;
    var c = a.l;
    if ("FORM" !== b && (c.l.has(b) || c.g.has(b))) return 1;
    cg(a);
    return 2;
  }
  function cg(a) {
    0 === a.g.length && a.g.push("");
  }
  function bg(a, b, c) {
    a.setAttribute(b, c);
  }
  var Yf = new Wf();
  function dg(a) {
    var b = Ca.apply(1, arguments);
    if (0 === b.length) return ub(a[0]);
    for (var c = a[0], d = 0; d < b.length; d++)
      c += encodeURIComponent(b[d]) + a[d + 1];
    return ub(c);
  }
  function eg(a, b) {
    var c = sb(a).toString();
    if (/#/.test(c)) throw Error("");
    var d = /\?/.test(c) ? "&" : "?";
    b.forEach(function (e, f) {
      e = e instanceof Array ? e : [e];
      for (var g = 0; g < e.length; g++) {
        var h = e[g];
        null !== h &&
          void 0 !== h &&
          ((c +=
            d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h))),
          (d = "&"));
      }
    });
    return ub(c);
  }
  function fg() {
    var a = document.body || document.documentElement;
    a: {
      var b = 9 == a.nodeType ? a : a.ownerDocument || a.document;
      if (
        b.defaultView &&
        b.defaultView.getComputedStyle &&
        (b = b.defaultView.getComputedStyle(a, null))
      ) {
        b = b.direction || b.getPropertyValue("direction") || "";
        break a;
      }
      b = "";
    }
    return (
      b ||
      (a.currentStyle ? a.currentStyle.direction : null) ||
      (a.style && a.style.direction)
    );
  }
  var gg = new Date().getTime();
  function hg(a) {
    if (!a) return "";
    if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
    a.startsWith("blob:") && (a = a.substring(5));
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3),
      c = b.indexOf("/");
    -1 != c && (b = b.substring(0, c));
    c = a.substring(0, a.indexOf("://"));
    if (!c) throw Error("URI is missing protocol: " + a);
    if (
      "http" !== c &&
      "https" !== c &&
      "chrome-extension" !== c &&
      "moz-extension" !== c &&
      "file" !== c &&
      "android-app" !== c &&
      "chrome-search" !== c &&
      "chrome-untrusted" !== c &&
      "chrome" !== c &&
      "app" !== c &&
      "devtools" !== c
    )
      throw Error("Invalid URI scheme in origin: " + c);
    a = "";
    var d = b.indexOf(":");
    if (-1 != d) {
      var e = b.substring(d + 1);
      b = b.substring(0, d);
      if (("http" === c && "80" !== e) || ("https" === c && "443" !== e))
        a = ":" + e;
    }
    return c + "://" + b + a;
  }
  function ig() {
    function a() {
      e[0] = 1732584193;
      e[1] = 4023233417;
      e[2] = 2562383102;
      e[3] = 271733878;
      e[4] = 3285377520;
      n = l = 0;
    }
    function b(p) {
      for (var r = g, q = 0; 64 > q; q += 4)
        r[q / 4] = (p[q] << 24) | (p[q + 1] << 16) | (p[q + 2] << 8) | p[q + 3];
      for (q = 16; 80 > q; q++)
        (p = r[q - 3] ^ r[q - 8] ^ r[q - 14] ^ r[q - 16]),
          (r[q] = ((p << 1) | (p >>> 31)) & 4294967295);
      p = e[0];
      var u = e[1],
        t = e[2],
        A = e[3],
        I = e[4];
      for (q = 0; 80 > q; q++) {
        if (40 > q)
          if (20 > q) {
            var X = A ^ (u & (t ^ A));
            var U = 1518500249;
          } else (X = u ^ t ^ A), (U = 1859775393);
        else
          60 > q
            ? ((X = (u & t) | (A & (u | t))), (U = 2400959708))
            : ((X = u ^ t ^ A), (U = 3395469782));
        X =
          ((((p << 5) | (p >>> 27)) & 4294967295) + X + I + U + r[q]) &
          4294967295;
        I = A;
        A = t;
        t = ((u << 30) | (u >>> 2)) & 4294967295;
        u = p;
        p = X;
      }
      e[0] = (e[0] + p) & 4294967295;
      e[1] = (e[1] + u) & 4294967295;
      e[2] = (e[2] + t) & 4294967295;
      e[3] = (e[3] + A) & 4294967295;
      e[4] = (e[4] + I) & 4294967295;
    }
    function c(p, r) {
      if ("string" === typeof p) {
        p = unescape(encodeURIComponent(p));
        for (var q = [], u = 0, t = p.length; u < t; ++u)
          q.push(p.charCodeAt(u));
        p = q;
      }
      r || (r = p.length);
      q = 0;
      if (0 == l)
        for (; q + 64 < r; ) b(p.slice(q, q + 64)), (q += 64), (n += 64);
      for (; q < r; )
        if (((f[l++] = p[q++]), n++, 64 == l))
          for (l = 0, b(f); q + 64 < r; )
            b(p.slice(q, q + 64)), (q += 64), (n += 64);
    }
    function d() {
      var p = [],
        r = 8 * n;
      56 > l ? c(h, 56 - l) : c(h, 64 - (l - 56));
      for (var q = 63; 56 <= q; q--) (f[q] = r & 255), (r >>>= 8);
      b(f);
      for (q = r = 0; 5 > q; q++)
        for (var u = 24; 0 <= u; u -= 8) p[r++] = (e[q] >> u) & 255;
      return p;
    }
    for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k) h[k] = 0;
    var l, n;
    a();
    return {
      reset: a,
      update: c,
      digest: d,
      nf: function () {
        for (var p = d(), r = "", q = 0; q < p.length; q++)
          r +=
            "0123456789ABCDEF".charAt(Math.floor(p[q] / 16)) +
            "0123456789ABCDEF".charAt(p[q] % 16);
        return r;
      },
    };
  }
  function jg(a, b, c) {
    var d = String(C.location.href);
    return d && a && b ? [b, kg(hg(d), a, c || null)].join(" ") : null;
  }
  function kg(a, b, c) {
    var d = [],
      e = [];
    if (1 == (Array.isArray(c) ? 2 : 1))
      return (
        (e = [b, a]),
        Ta(d, function (h) {
          e.push(h);
        }),
        lg(e.join(" "))
      );
    var f = [],
      g = [];
    Ta(c, function (h) {
      g.push(h.key);
      f.push(h.value);
    });
    c = Math.floor(new Date().getTime() / 1e3);
    e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
    Ta(d, function (h) {
      e.push(h);
    });
    a = lg(e.join(" "));
    a = [c, a];
    0 == g.length || a.push(g.join(""));
    return a.join("_");
  }
  function lg(a) {
    var b = ig();
    b.update(a);
    return b.nf().toLowerCase();
  }
  var mg = {};
  function ng(a) {
    this.g = a || { cookie: "" };
  }
  m = ng.prototype;
  m.isEnabled = function () {
    if (!C.navigator.cookieEnabled) return !1;
    if (!this.nd()) return !0;
    this.set("TESTCOOKIESENABLED", "1", { rd: 60 });
    if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
    this.remove("TESTCOOKIESENABLED");
    return !0;
  };
  m.set = function (a, b, c) {
    var d = !1;
    if ("object" === typeof c) {
      var e = c.Di;
      d = c.secure || !1;
      var f = c.domain || void 0;
      var g = c.path || void 0;
      var h = c.rd;
    }
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === h && (h = -1);
    c = f ? ";domain=" + f : "";
    g = g ? ";path=" + g : "";
    d = d ? ";secure" : "";
    h =
      0 > h
        ? ""
        : 0 == h
        ? ";expires=" + new Date(1970, 1, 1).toUTCString()
        : ";expires=" + new Date(Date.now() + 1e3 * h).toUTCString();
    this.g.cookie =
      a + "=" + b + c + g + h + d + (null != e ? ";samesite=" + e : "");
  };
  m.get = function (a, b) {
    for (
      var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f;
      e < d.length;
      e++
    ) {
      f = vb(d[e]);
      if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
      if (f == a) return "";
    }
    return b;
  };
  m.remove = function (a, b, c) {
    var d = void 0 !== this.get(a);
    this.set(a, "", { rd: 0, path: b, domain: c });
    return d;
  };
  m.nd = function () {
    return !this.g.cookie;
  };
  m.clear = function () {
    for (
      var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0;
      f < a.length;
      f++
    )
      (e = vb(a[f])),
        (d = e.indexOf("=")),
        -1 == d
          ? (b.push(""), c.push(e))
          : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; 0 <= a; a--) this.remove(b[a]);
  };
  var og = new ng("undefined" == typeof document ? null : document);
  function pg(a) {
    return !!mg.FPA_SAMESITE_PHASE2_MOD || !(void 0 === a || !a);
  }
  function qg(a) {
    a = void 0 === a ? !1 : a;
    var b = C.__SAPISID || C.__APISID || C.__3PSAPISID || C.__OVERRIDE_SID;
    pg(a) && (b = b || C.__1PSAPISID);
    if (b) return !0;
    if ("undefined" !== typeof document) {
      var c = new ng(document);
      b =
        c.get("SAPISID") ||
        c.get("APISID") ||
        c.get("__Secure-3PAPISID") ||
        c.get("SID") ||
        c.get("OSID");
      pg(a) && (b = b || c.get("__Secure-1PAPISID"));
    }
    return !!b;
  }
  function rg(a, b, c, d) {
    (a = C[a]) ||
      "undefined" === typeof document ||
      (a = new ng(document).get(b));
    return a ? jg(a, c, d) : null;
  }
  function sg(a) {
    var b = void 0 === b ? !1 : b;
    var c = hg(String(C.location.href)),
      d = [];
    if (qg(b)) {
      c =
        0 == c.indexOf("https:") ||
        0 == c.indexOf("chrome-extension:") ||
        0 == c.indexOf("moz-extension:");
      var e = c ? C.__SAPISID : C.__APISID;
      e ||
        "undefined" === typeof document ||
        ((e = new ng(document)),
        (e = e.get(c ? "SAPISID" : "APISID") || e.get("__Secure-3PAPISID")));
      (e = e ? jg(e, c ? "SAPISIDHASH" : "APISIDHASH", a) : null) && d.push(e);
      c &&
        pg(b) &&
        ((b = rg("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) &&
          d.push(b),
        (a = rg("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) &&
          d.push(a));
    }
    return 0 == d.length ? null : d.join(" ");
  }
  "undefined" !== typeof TextDecoder && new TextDecoder();
  var tg = "undefined" !== typeof TextEncoder ? new TextEncoder() : null,
    ug = tg
      ? function (a) {
          return tg.encode(a);
        }
      : function (a) {
          for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e
              ? (b[c++] = e)
              : (2048 > e
                  ? (b[c++] = (e >> 6) | 192)
                  : (55296 == (e & 64512) &&
                    d + 1 < a.length &&
                    56320 == (a.charCodeAt(d + 1) & 64512)
                      ? ((e =
                          65536 +
                          ((e & 1023) << 10) +
                          (a.charCodeAt(++d) & 1023)),
                        (b[c++] = (e >> 18) | 240),
                        (b[c++] = ((e >> 12) & 63) | 128))
                      : (b[c++] = (e >> 12) | 224),
                    (b[c++] = ((e >> 6) & 63) | 128)),
                (b[c++] = (e & 63) | 128));
          }
          a = new Uint8Array(b.length);
          for (c = 0; c < a.length; c++) a[c] = b[c];
          return a;
        };
  function vg(a) {
    yd.call(this);
    var b = this;
    this.u = this.i = 0;
    this.La =
      null != a
        ? a
        : {
            Pa: function (e, f) {
              return setTimeout(e, f);
            },
            Ea: function (e) {
              clearTimeout(e);
            },
          };
    var c, d;
    this.l =
      null != (d = null == (c = window.navigator) ? void 0 : c.onLine) ? d : !0;
    this.m = function () {
      return B(function (e) {
        return z(e, wg(b), 0);
      });
    };
    window.addEventListener("offline", this.m);
    window.addEventListener("online", this.m);
    this.u || xg(this);
  }
  y(vg, yd);
  function yg() {
    var a = zg;
    vg.g || (vg.g = new vg(a));
    return vg.g;
  }
  vg.prototype.dispose = function () {
    window.removeEventListener("offline", this.m);
    window.removeEventListener("online", this.m);
    this.La.Ea(this.u);
    delete vg.g;
  };
  vg.prototype.Fa = function () {
    return this.l;
  };
  function xg(a) {
    a.u = a.La.Pa(function () {
      var b;
      return B(function (c) {
        if (1 == c.g)
          return a.l
            ? (null == (b = window.navigator) ? 0 : b.onLine)
              ? c.V(3)
              : z(c, wg(a), 3)
            : z(c, wg(a), 3);
        xg(a);
        c.g = 0;
      });
    }, 3e4);
  }
  function wg(a, b) {
    return a.o
      ? a.o
      : (a.o = new Promise(function (c) {
          var d, e, f, g;
          return B(function (h) {
            switch (h.g) {
              case 1:
                return (
                  (d = window.AbortController
                    ? new window.AbortController()
                    : void 0),
                  (f = null == (e = d) ? void 0 : e.signal),
                  (g = !1),
                  sa(h, 2, 3),
                  d &&
                    (a.i = a.La.Pa(function () {
                      d.abort();
                    }, b || 2e4)),
                  z(h, fetch("/generate_204", { method: "HEAD", signal: f }), 5)
                );
              case 5:
                g = !0;
              case 3:
                h.D = [h.i];
                h.o = 0;
                h.s = 0;
                a.o = void 0;
                a.i && (a.La.Ea(a.i), (a.i = 0));
                g !== a.l &&
                  ((a.l = g),
                  a.l
                    ? zd(a, "networkstatus-online")
                    : zd(a, "networkstatus-offline"));
                c(g);
                ua(h);
                break;
              case 2:
                ta(h), (g = !1), h.V(3);
            }
          });
        }));
  }
  function Ag(a) {
    return "string" == typeof a.className
      ? a.className
      : (a.getAttribute && a.getAttribute("class")) || "";
  }
  function Bg(a, b) {
    "string" == typeof a.className
      ? (a.className = b)
      : a.setAttribute && a.setAttribute("class", b);
  }
  function Cg(a, b) {
    a.classList
      ? (b = a.classList.contains(b))
      : ((a = a.classList ? a.classList : Ag(a).match(/\S+/g) || []),
        (b = 0 <= Sa(a, b)));
    return b;
  }
  function Dg(a, b) {
    if (a.classList) a.classList.add(b);
    else if (!Cg(a, b)) {
      var c = Ag(a);
      Bg(a, c + (0 < c.length ? " " + b : b));
    }
  }
  function Eg(a, b) {
    a.classList
      ? a.classList.remove(b)
      : Cg(a, b) &&
        Bg(
          a,
          Array.prototype.filter
            .call(
              a.classList ? a.classList : Ag(a).match(/\S+/g) || [],
              function (c) {
                return c != b;
              }
            )
            .join(" ")
        );
  }
  function Fg() {}
  Fg.prototype.next = function () {
    return Gg;
  };
  var Gg = { done: !0, value: void 0 };
  function Hg(a) {
    return { value: a, done: !1 };
  }
  Fg.prototype.Oa = function () {
    return this;
  };
  var Ig = {};
  function Jg(a) {
    var b = Ig.hasOwnProperty(a) ? Ig[a] : null;
    if (b) return b;
    65536 < Object.keys(Ig).length && (Ig = {});
    var c = [0, 0, 0, 0],
      d = RegExp("\\\\[0-9A-Fa-f]{1,5}\\s", "g");
    b = Kg(a, RegExp("\\\\[0-9A-Fa-f]{6}\\s?", "g"));
    b = Kg(b, d);
    b = Kg(b, /\\./g);
    b = b.replace(RegExp(":not\\(([^\\)]*)\\)", "g"), "     $1 ");
    b = b.replace(RegExp("{[^]*", "gm"), "");
    b = Lg(b, c, RegExp("(\\[[^\\]]+\\])", "g"), 2);
    b = Lg(b, c, RegExp("(#[^\\#\\s\\+>~\\.\\[:]+)", "g"), 1);
    b = Lg(b, c, RegExp("(\\.[^\\s\\+>~\\.\\[:]+)", "g"), 2);
    b = Lg(
      b,
      c,
      /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,
      3
    );
    b = Lg(b, c, /(:[\w-]+\([^\)]*\))/gi, 2);
    b = Lg(b, c, /(:[^\s\+>~\.\[:]+)/g, 2);
    b = b.replace(/[\*\s\+>~]/g, " ");
    b = b.replace(/[#\.]/g, " ");
    Lg(b, c, /([^\s\+>~\.\[:]+)/g, 3);
    b = c;
    return (Ig[a] = b);
  }
  function Lg(a, b, c, d) {
    return a.replace(c, function (e) {
      b[d] += 1;
      return Array(e.length + 1).join(" ");
    });
  }
  function Kg(a, b) {
    return a.replace(b, function (c) {
      return Array(c.length + 1).join("A");
    });
  }
  var Mg = {
      rgb: !0,
      rgba: !0,
      alpha: !0,
      rect: !0,
      image: !0,
      "linear-gradient": !0,
      "radial-gradient": !0,
      "repeating-linear-gradient": !0,
      "repeating-radial-gradient": !0,
      "cubic-bezier": !0,
      matrix: !0,
      perspective: !0,
      rotate: !0,
      rotate3d: !0,
      rotatex: !0,
      rotatey: !0,
      steps: !0,
      rotatez: !0,
      scale: !0,
      scale3d: !0,
      scalex: !0,
      scaley: !0,
      scalez: !0,
      skew: !0,
      skewx: !0,
      skewy: !0,
      translate: !0,
      translate3d: !0,
      translatex: !0,
      translatey: !0,
      translatez: !0,
    },
    Ng = /[\n\f\r"'()*<>]/g,
    Og = {
      "\n": "%0a",
      "\f": "%0c",
      "\r": "%0d",
      '"': "%22",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "*": "%2a",
      "<": "%3c",
      ">": "%3e",
    };
  function Pg(a) {
    return Og[a];
  }
  function Qg(a, b, c) {
    b = vb(b);
    if ("" == b) return null;
    var d = String(b.slice(0, 4)).toLowerCase();
    if (0 == ("url(" < d ? -1 : "url(" == d ? 0 : 1)) {
      if (
        !b.endsWith(")") ||
        1 < (b ? b.split("(").length - 1 : 0) ||
        1 < (b ? b.split(")").length - 1 : 0) ||
        !c
      )
        a = null;
      else {
        a: for (b = b.substring(4, b.length - 1), d = 0; 2 > d; d++) {
          var e = "\"'".charAt(d);
          if (b.charAt(0) == e && b.charAt(b.length - 1) == e) {
            b = b.substring(1, b.length - 1);
            break a;
          }
        }
        a = c
          ? (a = c(b, a)) && "about:invalid#zClosurez" != Ab(a)
            ? 'url("' + Ab(a).replace(Ng, Pg) + '")'
            : null
          : null;
      }
      return a;
    }
    if (0 < b.indexOf("(")) {
      if (/"|'/.test(b)) return null;
      for (a = /([\-\w]+)\(/g; (c = a.exec(b)); )
        if (!(c[1].toLowerCase() in Mg)) return null;
    }
    return b;
  }
  function Rg(a, b) {
    a = C[a];
    return a && a.prototype
      ? ((b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get) || null
      : null;
  }
  function Sg(a, b) {
    return ((a = C[a]) && a.prototype && a.prototype[b]) || null;
  }
  var Tg = Rg("Element", "attributes") || Rg("Node", "attributes"),
    Ug = Sg("Element", "hasAttribute"),
    Vg = Sg("Element", "getAttribute"),
    Wg = Sg("Element", "setAttribute"),
    Xg = Sg("Element", "removeAttribute");
  Rg("Element", "innerHTML") || Rg("HTMLElement", "innerHTML");
  var Yg = Sg("Element", "getElementsByTagName"),
    Zg = Sg("Element", "matches") || Sg("Element", "msMatchesSelector"),
    $g = Rg("Node", "nodeName"),
    ah = Rg("Node", "nodeType"),
    bh = Rg("Node", "parentNode");
  Rg("Node", "childNodes");
  var ch = Rg("HTMLElement", "style") || Rg("Element", "style"),
    dh = Rg("HTMLStyleElement", "sheet"),
    eh = Sg("CSSStyleDeclaration", "getPropertyValue"),
    fh = Sg("CSSStyleDeclaration", "setProperty"),
    gh = Rg("Element", "namespaceURI") || Rg("Node", "namespaceURI");
  function hh(a, b, c, d) {
    if (a) return a.apply(b);
    a = b[c];
    if (!d(a)) throw Error("Clobbering detected");
    return a;
  }
  function ih(a, b, c, d) {
    if (a) return a.apply(b, d);
    if (Nc && 10 > document.documentMode) {
      if (!b[c].call) throw Error("IE Clobbering detected");
    } else if ("function" != typeof b[c]) throw Error("Clobbering detected");
    return b[c].apply(b, d);
  }
  function jh(a) {
    return hh(Tg, a, "attributes", function (b) {
      return b instanceof NamedNodeMap;
    });
  }
  function kh(a, b, c) {
    try {
      ih(Wg, a, "setAttribute", [b, c]);
    } catch (d) {
      if (-1 == d.message.indexOf("A security problem occurred")) throw d;
    }
  }
  function lh(a) {
    return hh(ch, a, "style", function (b) {
      return b instanceof CSSStyleDeclaration;
    });
  }
  function mh(a) {
    return hh(dh, a, "sheet", function (b) {
      return b instanceof CSSStyleSheet;
    });
  }
  function nh(a) {
    return hh($g, a, "nodeName", function (b) {
      return "string" == typeof b;
    });
  }
  function oh(a) {
    return hh(ah, a, "nodeType", function (b) {
      return "number" == typeof b;
    });
  }
  function ph(a) {
    return hh(bh, a, "parentNode", function (b) {
      return !(
        b &&
        "string" == typeof b.name &&
        b.name &&
        "parentnode" == b.name.toLowerCase()
      );
    });
  }
  function qh(a, b) {
    return (
      ih(eh, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [
        b,
      ]) || ""
    );
  }
  function rh(a, b, c) {
    ih(fh, a, a.setProperty ? "setProperty" : "setAttribute", [b, c]);
  }
  function sh(a) {
    return hh(gh, a, "namespaceURI", function (b) {
      return "string" == typeof b;
    });
  }
  var th =
      Nc && 10 > document.documentMode
        ? null
        : RegExp(
            "\\s*([^\\s'\",]+[^'\",]*(('([^'\\r\\n\\f\\\\]|\\\\[^])*')|(\"([^\"\\r\\n\\f\\\\]|\\\\[^])*\")|[^'\",])*)",
            "g"
          ),
    uh = {
      "-webkit-border-horizontal-spacing": !0,
      "-webkit-border-vertical-spacing": !0,
    };
  function vh(a, b, c) {
    var d = [];
    wh($a(a.cssRules)).forEach(function (e) {
      if (b && !/[a-zA-Z][\w-:\.]*/.test(b))
        throw Error("Invalid container id");
      if (
        !(
          b &&
          Nc &&
          10 == document.documentMode &&
          /\\['"]/.test(e.selectorText)
        )
      ) {
        var f = b
            ? e.selectorText.replace(th, "#" + b + " $1")
            : e.selectorText,
          g = d.push;
        e = xh(e.style, c);
        if (-1 != f.indexOf("<"))
          throw Error("Selector does not allow '<', got: " + f);
        var h = f.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
        if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=\\^$|]+$/.test(h))
          throw Error(
            "Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=\\^$|] and strings, got: " +
              f
          );
        a: {
          for (
            var k = { "(": ")", "[": "]" }, l = [], n = 0;
            n < h.length;
            n++
          ) {
            var p = h[n];
            if (k[p]) l.push(k[p]);
            else {
              b: {
                var r = void 0;
                for (r in k)
                  if (k[r] == p) {
                    r = !0;
                    break b;
                  }
                r = !1;
              }
              if (r && l.pop() != p) {
                h = !1;
                break a;
              }
            }
          }
          h = 0 == l.length;
        }
        if (!h)
          throw Error("() and [] in selector must be balanced, got: " + f);
        if (!(e instanceof Hb)) {
          h = "";
          for (var q in e)
            if (Object.prototype.hasOwnProperty.call(e, q)) {
              if (!/^[-_a-zA-Z0-9]+$/.test(q))
                throw Error("Name allows only [-_a-zA-Z0-9], got: " + q);
              k = e[q];
              null != k &&
                ((k = Array.isArray(k) ? k.map(Jb).join(" ") : Jb(k)),
                (h += q + ":" + k + ";"));
            }
          e = h ? new Hb(h, Gb) : Ib;
        }
        e instanceof Hb && e.constructor === Hb
          ? (q = e.i)
          : (Fa(e), (q = "type_error:SafeStyle"));
        f = f + "{" + q.replace(/</g, "\\3C ") + "}";
        g.call(d, new Rb(f, Qb));
      }
    });
    return Sb(d);
  }
  function wh(a) {
    return a.filter(function (b) {
      return b instanceof CSSStyleRule || b.type == CSSRule.STYLE_RULE;
    });
  }
  function yh(a, b, c) {
    a = zh("<style>" + a + "</style>");
    return null == a || null == a.sheet
      ? Ub
      : vh(a.sheet, void 0 != b ? b : null, c);
  }
  function zh(a) {
    a = nc("<html><head></head><body>" + a + "</body></html>");
    return new DOMParser().parseFromString(mc(a), "text/html").body.children[0];
  }
  function xh(a, b) {
    if (!a) return Ib;
    var c = document.createElement("div").style;
    Ah(a).forEach(function (d) {
      var e =
        Qc && d in uh
          ? d
          : d.replace(
              /^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i,
              ""
            );
      0 != e.lastIndexOf("--", 0) &&
        0 != e.lastIndexOf("var", 0) &&
        ((d = qh(a, d)), (d = Qg(e, d, b)), null != d && rh(c, e, d));
    });
    return new Hb(c.cssText || "", Gb);
  }
  function Bh(a) {
    var b = Array.from(ih(Yg, a, "getElementsByTagName", ["STYLE"])),
      c = bb(b, function (g) {
        return $a(mh(g).cssRules);
      });
    c = wh(c);
    for (var d = [], e = 0; e < c.length; e++) d[e] = { index: e, Cd: c[e] };
    d.sort(function (g, h) {
      var k = Jg(g.Cd.selectorText),
        l = Jg(h.Cd.selectorText);
      a: {
        for (var n = Math.min(k.length, l.length), p = 0; p < n; p++) {
          var r = k[p],
            q = l[p];
          r = r > q ? 1 : r < q ? -1 : 0;
          if (0 != r) {
            l = r;
            break a;
          }
        }
        k = k.length;
        l = l.length;
        l = k > l ? 1 : k < l ? -1 : 0;
      }
      return l || g.index - h.index;
    });
    for (e = 0; e < d.length; e++) c[e] = d[e].Cd;
    c.reverse();
    a = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, null, !1);
    for (var f; (f = a.nextNode()); )
      c.forEach(function (g) {
        ih(Zg, f, f.matches ? "matches" : "msMatchesSelector", [
          g.selectorText,
        ]) &&
          g.style &&
          Ch(f, g.style);
      });
    b.forEach(Fd);
  }
  function Ch(a, b) {
    var c = Ah(a.style);
    Ah(b).forEach(function (d) {
      if (!(0 <= c.indexOf(d))) {
        var e = qh(b, d);
        rh(a.style, d, e);
      }
    });
  }
  function Ah(a) {
    Ga(a) ? (a = $a(a)) : ((a = db(a)), Ya(a, "cssText"));
    return a;
  }
  Ed("DIV");
  var Dh = {
      "* ARIA-CHECKED": !0,
      "* ARIA-COLCOUNT": !0,
      "* ARIA-COLINDEX": !0,
      "* ARIA-CONTROLS": !0,
      "* ARIA-DESCRIBEDBY": !0,
      "* ARIA-DISABLED": !0,
      "* ARIA-EXPANDED": !0,
      "* ARIA-GOOG-EDITABLE": !0,
      "* ARIA-HASPOPUP": !0,
      "* ARIA-HIDDEN": !0,
      "* ARIA-LABEL": !0,
      "* ARIA-LABELLEDBY": !0,
      "* ARIA-MULTILINE": !0,
      "* ARIA-MULTISELECTABLE": !0,
      "* ARIA-ORIENTATION": !0,
      "* ARIA-PLACEHOLDER": !0,
      "* ARIA-READONLY": !0,
      "* ARIA-REQUIRED": !0,
      "* ARIA-ROLEDESCRIPTION": !0,
      "* ARIA-ROWCOUNT": !0,
      "* ARIA-ROWINDEX": !0,
      "* ARIA-SELECTED": !0,
      "* ABBR": !0,
      "* ACCEPT": !0,
      "* ACCESSKEY": !0,
      "* ALIGN": !0,
      "* ALT": !0,
      "* AUTOCOMPLETE": !0,
      "* AXIS": !0,
      "* BGCOLOR": !0,
      "* BORDER": !0,
      "* CELLPADDING": !0,
      "* CELLSPACING": !0,
      "* CHAROFF": !0,
      "* CHAR": !0,
      "* CHECKED": !0,
      "* CLEAR": !0,
      "* COLOR": !0,
      "* COLSPAN": !0,
      "* COLS": !0,
      "* COMPACT": !0,
      "* COORDS": !0,
      "* DATETIME": !0,
      "* DIR": !0,
      "* DISABLED": !0,
      "* ENCTYPE": !0,
      "* FACE": !0,
      "* FRAME": !0,
      "* HEIGHT": !0,
      "* HREFLANG": !0,
      "* HSPACE": !0,
      "* ISMAP": !0,
      "* LABEL": !0,
      "* LANG": !0,
      "* MAX": !0,
      "* MAXLENGTH": !0,
      "* METHOD": !0,
      "* MULTIPLE": !0,
      "* NOHREF": !0,
      "* NOSHADE": !0,
      "* NOWRAP": !0,
      "* OPEN": !0,
      "* READONLY": !0,
      "* REQUIRED": !0,
      "* REL": !0,
      "* REV": !0,
      "* ROLE": !0,
      "* ROWSPAN": !0,
      "* ROWS": !0,
      "* RULES": !0,
      "* SCOPE": !0,
      "* SELECTED": !0,
      "* SHAPE": !0,
      "* SIZE": !0,
      "* SPAN": !0,
      "* START": !0,
      "* SUMMARY": !0,
      "* TABINDEX": !0,
      "* TITLE": !0,
      "* TYPE": !0,
      "* VALIGN": !0,
      "* VALUE": !0,
      "* VSPACE": !0,
      "* WIDTH": !0,
    },
    Eh = {
      "* USEMAP": !0,
      "* ACTION": !0,
      "* CITE": !0,
      "* HREF": !0,
      "* LONGDESC": !0,
      "* SRC": !0,
      "LINK HREF": !0,
      "* FOR": !0,
      "* HEADERS": !0,
      "* NAME": !0,
      "A TARGET": !0,
      "* CLASS": !0,
      "* ID": !0,
      "* STYLE": !0,
    };
  var Fh =
      "undefined" != typeof WeakMap &&
      -1 != WeakMap.toString().indexOf("[native code]"),
    Gh = 0;
  function Hh() {
    this.i = [];
    this.l = [];
    this.g = "data-elementweakmap-index-" + Gh++;
  }
  Hh.prototype.set = function (a, b) {
    if (ih(Ug, a, "hasAttribute", [this.g])) {
      var c = parseInt(ih(Vg, a, "getAttribute", [this.g]) || null, 10);
      this.l[c] = b;
    } else
      (c = this.l.push(b) - 1), kh(a, this.g, c.toString()), this.i.push(a);
    return this;
  };
  Hh.prototype.get = function (a) {
    if (ih(Ug, a, "hasAttribute", [this.g]))
      return (
        (a = parseInt(ih(Vg, a, "getAttribute", [this.g]) || null, 10)),
        this.l[a]
      );
  };
  Hh.prototype.clear = function () {
    this.i.forEach(function (a) {
      ih(Xg, a, "removeAttribute", [this.g]);
    }, this);
    this.i = [];
    this.l = [];
  };
  var Ih = !Nc || 10 <= Number(ad),
    Jh = !Nc || null == document.documentMode;
  function Kh() {}
  var Lh = {
    APPLET: !0,
    AUDIO: !0,
    BASE: !0,
    BGSOUND: !0,
    EMBED: !0,
    FORM: !0,
    IFRAME: !0,
    ISINDEX: !0,
    KEYGEN: !0,
    LAYER: !0,
    LINK: !0,
    META: !0,
    OBJECT: !0,
    SCRIPT: !0,
    SVG: !0,
    STYLE: !0,
    TEMPLATE: !0,
    VIDEO: !0,
  };
  var Mh = {
    A: !0,
    ABBR: !0,
    ACRONYM: !0,
    ADDRESS: !0,
    AREA: !0,
    ARTICLE: !0,
    ASIDE: !0,
    B: !0,
    BDI: !0,
    BDO: !0,
    BIG: !0,
    BLOCKQUOTE: !0,
    BR: !0,
    BUTTON: !0,
    CAPTION: !0,
    CENTER: !0,
    CITE: !0,
    CODE: !0,
    COL: !0,
    COLGROUP: !0,
    DATA: !0,
    DATALIST: !0,
    DD: !0,
    DEL: !0,
    DETAILS: !0,
    DFN: !0,
    DIALOG: !0,
    DIR: !0,
    DIV: !0,
    DL: !0,
    DT: !0,
    EM: !0,
    FIELDSET: !0,
    FIGCAPTION: !0,
    FIGURE: !0,
    FONT: !0,
    FOOTER: !0,
    FORM: !0,
    H1: !0,
    H2: !0,
    H3: !0,
    H4: !0,
    H5: !0,
    H6: !0,
    HEADER: !0,
    HGROUP: !0,
    HR: !0,
    I: !0,
    IMG: !0,
    INPUT: !0,
    INS: !0,
    KBD: !0,
    LABEL: !0,
    LEGEND: !0,
    LI: !0,
    MAIN: !0,
    MAP: !0,
    MARK: !0,
    MENU: !0,
    METER: !0,
    NAV: !0,
    NOSCRIPT: !0,
    OL: !0,
    OPTGROUP: !0,
    OPTION: !0,
    OUTPUT: !0,
    P: !0,
    PRE: !0,
    PROGRESS: !0,
    Q: !0,
    S: !0,
    SAMP: !0,
    SECTION: !0,
    SELECT: !0,
    SMALL: !0,
    SOURCE: !0,
    SPAN: !0,
    STRIKE: !0,
    STRONG: !0,
    STYLE: !0,
    SUB: !0,
    SUMMARY: !0,
    SUP: !0,
    TABLE: !0,
    TBODY: !0,
    TD: !0,
    TEXTAREA: !0,
    TFOOT: !0,
    TH: !0,
    THEAD: !0,
    TIME: !0,
    TR: !0,
    TT: !0,
    U: !0,
    UL: !0,
    VAR: !0,
    WBR: !0,
  };
  var Nh = {
    "ANNOTATION-XML": !0,
    "COLOR-PROFILE": !0,
    "FONT-FACE": !0,
    "FONT-FACE-SRC": !0,
    "FONT-FACE-URI": !0,
    "FONT-FACE-FORMAT": !0,
    "FONT-FACE-NAME": !0,
    "MISSING-GLYPH": !0,
  };
  function Oh(a) {
    a = a || new Ph();
    Qh(a);
    this.g = eb(a.g);
    this.s = eb(a.D);
    this.l = eb(a.G);
    this.D = a.u;
    a.J.forEach(function (b) {
      if (0 != b.lastIndexOf("data-", 0))
        throw new Na('Only "data-" attributes allowed, got: %s.', [b]);
      if (0 == b.lastIndexOf("data-sanitizer-", 0))
        throw new Na('Attributes with "%s" prefix are not allowed, got: %s.', [
          "data-sanitizer-",
          b,
        ]);
      this.g["* " + b.toUpperCase()] = Rh;
    }, this);
    a.H.forEach(function (b) {
      b = b.toUpperCase();
      if (-1 == b.indexOf("-") || Nh[b])
        throw new Na("Only valid custom element tag names allowed, got: %s.", [
          b,
        ]);
      this.l[b] = !0;
    }, this);
    this.C = a.i;
    this.o = a.C;
    this.i = null;
    this.u = a.s;
  }
  H(Oh, Kh);
  function Sh(a) {
    return function (b, c) {
      return (b = a(vb(b), c)) && "about:invalid#zClosurez" != Ab(b)
        ? Ab(b)
        : null;
    };
  }
  function Ph() {
    this.g = {};
    Ta(
      [Dh, Eh],
      function (a) {
        db(a).forEach(function (b) {
          this.g[b] = Rh;
        }, this);
      },
      this
    );
    this.l = {};
    this.J = [];
    this.H = [];
    this.D = eb(Lh);
    this.G = eb(Mh);
    this.u = !1;
    this.N = Db;
    this.M = this.o = this.L = this.i = Pa;
    this.C = null;
    this.m = this.s = !1;
  }
  function Th(a, b) {
    return function (c, d, e, f) {
      c = a(c, d, e, f);
      return null == c ? null : b(c, d, e, f);
    };
  }
  function Uh(a, b, c, d) {
    a[c] && !b[c] && (a[c] = Th(a[c], d));
  }
  function Qh(a) {
    if (a.m)
      throw Error("HtmlSanitizer.Builder.build() can only be used once.");
    Uh(a.g, a.l, "* USEMAP", Vh);
    var b = Sh(a.N);
    ["* ACTION", "* CITE", "* HREF"].forEach(function (d) {
      Uh(this.g, this.l, d, b);
    }, a);
    var c = Sh(a.i);
    ["* LONGDESC", "* SRC", "LINK HREF"].forEach(function (d) {
      Uh(this.g, this.l, d, c);
    }, a);
    ["* FOR", "* HEADERS", "* NAME"].forEach(function (d) {
      Uh(this.g, this.l, d, Ka(Wh, this.L));
    }, a);
    Uh(a.g, a.l, "A TARGET", Ka(Xh, ["_blank", "_self"]));
    Uh(a.g, a.l, "* CLASS", Ka(Yh, a.o));
    Uh(a.g, a.l, "* ID", Ka(Zh, a.o));
    Uh(a.g, a.l, "* STYLE", Ka(a.M, c));
    a.m = !0;
  }
  function $h(a, b) {
    a || (a = "*");
    return (a + " " + b).toUpperCase();
  }
  function Rh(a) {
    return vb(a);
  }
  function Xh(a, b) {
    b = vb(b);
    return 0 <= Sa(a, b.toLowerCase()) ? b : null;
  }
  function Vh(a) {
    return (a = vb(a)) && "#" == a.charAt(0) ? a : null;
  }
  function Wh(a, b, c) {
    return a(vb(b), c);
  }
  function Yh(a, b, c) {
    b = b.split(/(?:\s+)/);
    for (var d = [], e = 0; e < b.length; e++) {
      var f = a(b[e], c);
      f && d.push(f);
    }
    return 0 == d.length ? null : d.join(" ");
  }
  function Zh(a, b, c) {
    return a(vb(b), c);
  }
  Oh.prototype.m = function (a) {
    var b = !("STYLE" in this.s) && "STYLE" in this.l;
    this.i =
      "*" == this.o && b
        ? "sanitizer-" +
          (Math.floor(2147483648 * Math.random()).toString(36) +
            Math.abs(Math.floor(2147483648 * Math.random()) ^ F()).toString(36))
        : this.o;
    if (Ih) {
      b = a;
      if (Ih) {
        a = Ed("SPAN");
        this.i && "*" == this.o && (a.id = this.i);
        this.u && ((b = zh("<div>" + b + "</div>")), Bh(b), (b = b.innerHTML));
        b = nc(b);
        var c = document.createElement("template");
        if (Jh && "content" in c) qc(c, b), (c = c.content);
        else {
          var d = document.implementation.createHTMLDocument("x");
          c = d.body;
          qc(d.body, b);
        }
        b = document.createTreeWalker(
          c,
          NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
          null,
          !1
        );
        for (c = Fh ? new WeakMap() : new Hh(); (d = b.nextNode()); ) {
          c: {
            var e = d;
            switch (oh(e)) {
              case 3:
                e = ai(this, e);
                break c;
              case 1:
                if ("TEMPLATE" == nh(e).toUpperCase()) e = null;
                else {
                  var f = nh(e).toUpperCase();
                  if (f in this.s || "http://www.w3.org/1999/xhtml" != sh(e))
                    var g = null;
                  else
                    this.l[f]
                      ? (g = document.createElement(f))
                      : ((g = Ed("SPAN")),
                        this.D &&
                          kh(
                            g,
                            "data-sanitizer-original-tag",
                            f.toLowerCase()
                          ));
                  if (g) {
                    var h = g,
                      k = jh(e);
                    if (null != k)
                      for (var l = 0; (f = k[l]); l++)
                        if (f.specified) {
                          var n = e;
                          var p = f;
                          var r = p.name;
                          if (0 == r.lastIndexOf("data-sanitizer-", 0))
                            p = null;
                          else {
                            var q = nh(n);
                            p = p.value;
                            var u = {
                                tagName: vb(q).toLowerCase(),
                                attributeName: vb(r).toLowerCase(),
                              },
                              t = { mf: void 0 };
                            "style" == u.attributeName && (t.mf = lh(n));
                            n = $h(q, r);
                            n in this.g
                              ? ((r = this.g[n]), (p = r(p, u, t)))
                              : ((r = $h(null, r)),
                                r in this.g
                                  ? ((r = this.g[r]), (p = r(p, u, t)))
                                  : (p = null));
                          }
                          null !== p && kh(h, f.name, p);
                        }
                    e = g;
                  } else e = null;
                }
                break c;
              default:
                e = null;
            }
          }
          if (e) {
            if ((1 == oh(e) && c.set(d, e), (d = ph(d)), (f = !1), d))
              (g = oh(d)),
                (h = nh(d).toLowerCase()),
                (k = ph(d)),
                11 != g || k
                  ? "body" == h && k && (g = ph(k)) && !ph(g) && (f = !0)
                  : (f = !0),
                (g = null),
                f || !d ? (g = a) : 1 == oh(d) && (g = c.get(d)),
                g.content && (g = g.content),
                g.appendChild(e);
          } else for (e = d; (d = e.firstChild); ) e.removeChild(d);
        }
        c.clear && c.clear();
      } else a = Ed("SPAN");
      0 < jh(a).length && ((b = Ed("SPAN")), b.appendChild(a), (a = b));
      a = new XMLSerializer().serializeToString(a);
      a = a.slice(a.indexOf(">") + 1, a.lastIndexOf("</"));
    } else a = "";
    return nc(a);
  };
  function ai(a, b) {
    var c = b.data;
    (b = ph(b)) &&
      "style" == nh(b).toLowerCase() &&
      !("STYLE" in a.s) &&
      "STYLE" in a.l &&
      (c = Tb(
        yh(
          c,
          a.i,
          E(function (d, e) {
            return this.C(d, { ai: e });
          }, a)
        )
      ));
    return document.createTextNode(c);
  }
  var bi = /^[6-9]$/,
    ci = /<\/?(?:b|em)>/gi;
  function di(a) {
    this.g = a;
  }
  var ei = new di({});
  di.prototype.contains = function (a) {
    return a in this.g;
  };
  function fi(a, b, c, d, e, f) {
    this.C = a instanceof lc ? a : nc(a);
    this.g = b;
    this.u = c;
    this.s = d;
    this.i = e;
    this.m = f || ei;
    this.o = !1;
    switch (this.s) {
      case 0:
      case 32:
      case 38:
      case 400:
      case 407:
      case 35:
      case 33:
      case 41:
      case 34:
      case 44:
      case 45:
      case 40:
      case 46:
      case 56:
      case 30:
      case 94:
      case 92:
      case 93:
      case 411:
      case 410:
      case 71:
        this.o = !0;
    }
  }
  fi.prototype.getHtml = function () {
    return mc(this.C).toString();
  };
  fi.prototype.l = function () {
    return this.u;
  };
  fi.prototype.getType = function () {
    return this.s;
  };
  var gi = /^\s/,
    hi = /\s+/,
    ii = /\s+/g,
    ji = /^\s+|\s+$/g,
    ki = /^\s+$/,
    li = /<[^>]*>/g,
    mi = /&nbsp;/g,
    ni = /&#x3000;/g,
    oi = [
      /&/g,
      /&amp;/g,
      /</g,
      /&lt;/g,
      />/g,
      /&gt;/g,
      /"/g,
      /&quot;/g,
      /'/g,
      /&#39;/g,
      /{/g,
      /&#123;/g,
    ],
    pi = document.getElementsByTagName("head")[0],
    qi = 0,
    ri = 1;
  function si(a) {
    var b = {};
    if (a) for (var c = 0; c < a.length; ++c) b[a[c]] = !0;
    return b;
  }
  function ti(a, b) {
    function c() {
      return b;
    }
    void 0 === b && (b = a);
    return {
      cc: c,
      he: function () {
        return a;
      },
      Jf: c,
      li: function () {
        return a < b;
      },
      equals: function (d) {
        return d && a == d.he() && b == d.Jf();
      },
    };
  }
  function ui(a, b, c, d) {
    if (null == b || "" === b) {
      if (!d) return;
      b = "";
    }
    c.push(a + "=" + encodeURIComponent(String(b)));
  }
  function vi(a, b) {
    var c = [],
      d;
    for (d in a) ui(d, a[d], c, b);
    return c.join("&");
  }
  function wi(a) {
    var b = {},
      c = Math.max(a.indexOf("?"), a.indexOf("#"));
    a = a.substr(c + 1);
    if (0 <= c && a) {
      c = a.split("&");
      a = 0;
      for (var d; a < c.length; ++a)
        if ((d = c[a])) (d = d.split("=")), (b[d[0]] = d[1] || "");
    }
    return b;
  }
  function xi(a) {
    return !!a && !ki.test(a);
  }
  function yi(a) {
    for (var b = oi.length, c = 0; c < b; c += 2)
      a = a.replace(oi[c], oi[c + 1].source);
    return a;
  }
  function zi(a) {
    for (var b = oi.length, c = 0; c < b; c += 2)
      a = a.replace(oi[c + 1], oi[c].source);
    a = a.replace(mi, " ");
    return a.replace(ni, "\u3000");
  }
  function Ai(a, b) {
    return a && (-1 < a.indexOf(" ") || hi.test(a))
      ? ((a = a.replace(ii, " ")), a.replace(b ? ji : gi, ""))
      : a;
  }
  function Bi(a, b, c) {
    c && ((a = a.toLowerCase()), (b = b.toLowerCase()));
    return b.length <= a.length && a.substring(0, b.length) == b;
  }
  function Ci() {}
  function Di(a) {
    var b = Ei;
    if (b.indexOf) return b.indexOf(a);
    for (var c = 0, d = b.length; c < d; ++c) if (b[c] === a) return c;
    return -1;
  }
  function Fi() {
    return 0;
  }
  function Gi(a) {
    var b = {},
      c;
    for (c in a) b[c] = a[c];
    return b;
  }
  function Hi(a, b) {
    a += "";
    b.length &&
      ((a += "i" + b.join("i")), (a += "k" + (-1 != Sa(b, 173) ? 14 : 1)));
    return a;
  }
  function Ii(a, b, c) {
    this.g = a;
    this.M = b;
    this.G = c || "";
    this.u = (qi++).toString(36);
    this.D = this.g.toLowerCase();
    this.l = Ai(this.D);
    this.H = {};
    this.C = {};
    this.o = this.L = this.m = !1;
    this.J = 1;
  }
  Ii.prototype.getId = function () {
    return this.u;
  };
  function Ji(a) {
    a = parseInt(a.u, 36);
    return isNaN(a) ? -1 : a;
  }
  function Ki(a, b, c, d) {
    a.m || ((a.H[b] = c), d && (a.C[b] = c));
  }
  function Li(a, b, c, d, e, f) {
    this.l = a;
    this.g = b;
    this.i = c;
    this.o = d;
    this.m = e;
    this.u = f;
    this.s = !0;
    this.g
      ? this.g.length && 33 == this.g[0].getType() && (this.m = this.s = !1)
      : (this.g = []);
    this.i || (this.i = ei);
  }
  Li.prototype.getType = function () {
    return this.s;
  };
  function Mi() {}
  Mi.prototype.Md = function () {};
  Mi.prototype.redirect = function () {};
  Mi.prototype.Ld = function () {
    return "";
  };
  Mi.prototype.we = function () {};
  function Ni() {
    this.l = {};
    this.g = {};
  }
  Ni.prototype.set = function (a, b) {
    this.l[a] = b;
  };
  Ni.prototype.has = function (a) {
    return !!this.l[a];
  };
  function Oi(a, b, c) {
    b in a.g || (a.g[b] = []);
    a.g[b].push(c);
  }
  function Pi(a, b, c, d, e, f) {
    this.s = a;
    this.C = b;
    this.D = c;
    this.o = d;
    this.i = e;
    this.config_ = f;
    this.u = {};
    this.m = {};
    this.g = [];
    this.l = !1;
    a = this.C;
    d = a.l;
    for (var g in d) if (((b = g), (c = d[b]))) (this.u[b] = c), this.g.push(c);
    a = a.g;
    for (g in a) {
      b = g;
      d = c = a[b];
      e = this.m[b] || [];
      for (f = 0; f < d.length; ++f) if ((c = d[f])) e.push(c), this.g.push(c);
      this.m[b] = e;
    }
    this.g.sort(Qi);
    for (g = 0; (a = this.g[g++]); ) a.Aa(this.D, this.o);
    this.s.we(this.o);
    this.o.gf();
    for (g = 0; (a = this.g[g++]); ) a.W(this);
    for (g = 0; (a = this.g[g++]); ) a.ma(this.config_);
    for (g = 0; (a = this.g[g++]); ) a.wb(this.config_);
    for (g = 0; (a = this.g[g++]); ) a.X(this.config_);
    this.l = !0;
  }
  function Ri(a) {
    if (a.l) {
      for (var b = 0, c; (c = a.g[b++]); ) c.Na();
      a.l = !1;
    }
  }
  Pi.prototype.isActive = function () {
    return this.l;
  };
  Pi.prototype.get = function (a) {
    return this.u[a];
  };
  function Si(a, b) {
    return a.m[b] || [];
  }
  function Qi(a, b) {
    a = Di(a.getType());
    b = Di(b.getType());
    return 0 > a ? 1 : 0 > b ? -1 : a - b;
  }
  var Ei = [
    127, 551, 149, 134, 494, 123, 121, 126, 553, 118, 115, 128, 160, 173, 119,
    116, 152, 153, 129, 120, 374, 124, 158, 155, 131, 130, 147, 570, 141, 143,
    138, 144, 139, 140, 135, 136,
  ];
  function N(a) {
    this.l = a;
  }
  m = N.prototype;
  m.Aa = function () {};
  m.W = function () {};
  m.ma = function () {};
  m.wb = function () {};
  m.X = function () {};
  m.getType = function () {
    return this.l;
  };
  m.Na = function () {};
  function Ti() {}
  Ti.prototype.g = null;
  Ti.prototype.getOptions = function () {
    var a;
    (a = this.g) ||
      ((a = {}), Ui(this) && ((a[0] = !0), (a[1] = !0)), (a = this.g = a));
    return a;
  };
  var Vi;
  function Wi() {}
  H(Wi, Ti);
  function Xi() {
    var a = Ui(Vi);
    return a ? new ActiveXObject(a) : new XMLHttpRequest();
  }
  function Ui(a) {
    if (
      !a.l &&
      "undefined" == typeof XMLHttpRequest &&
      "undefined" != typeof ActiveXObject
    ) {
      for (
        var b = [
            "MSXML2.XMLHTTP.6.0",
            "MSXML2.XMLHTTP.3.0",
            "MSXML2.XMLHTTP",
            "Microsoft.XMLHTTP",
          ],
          c = 0;
        c < b.length;
        c++
      ) {
        var d = b[c];
        try {
          return new ActiveXObject(d), (a.l = d);
        } catch (e) {}
      }
      throw Error(
        "Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"
      );
    }
    return a.l;
  }
  Vi = new Wi();
  function Yi() {
    this.l = 149;
    this.g = {};
    this.i = 0;
  }
  y(Yi, N);
  m = Yi.prototype;
  m.W = function (a) {
    this.C = a.get(127);
  };
  m.X = function (a) {
    if (a.connectionType == this.Ab()) {
      this.config_ = a;
      var b = this.C.i,
        c = "https:" == document.location.protocol;
      this.s = b.protocol || "http" + (c ? "s" : "") + "://";
      this.o = b.host || "clients1." + a.sc;
      this.u = b.Lc;
      this.m = b.Re;
    }
  };
  m.Na = function () {
    Zi(this);
    this.i = 0;
  };
  m.Oe = function (a, b, c) {
    $i(this, a.getId(), a.g, b, c);
    return !0;
  };
  m.Ab = function () {
    return 1;
  };
  m.ed = function () {
    return this.i;
  };
  m.Zc = function (a) {
    var b = this.g[a];
    b && (aj(b), delete this.g[a]);
  };
  function $i(a, b, c, d, e) {
    a.config_.Xd || Zi(a);
    var f = Xi();
    f &&
      ((c =
        a.s +
        a.o +
        a.u +
        "?" +
        (a.m ? a.m + "&" : "") +
        (d ? d + "&" : "") +
        "q=" +
        encodeURIComponent(c) +
        "&xhr=t&xssi=t"),
      f.open("GET", c, !0),
      (f.withCredentials = !0),
      a.config_.visitorData &&
        f.setRequestHeader("X-Goog-Visitor-Id", a.config_.visitorData),
      (f.onreadystatechange = function () {
        if (4 == f.readyState) {
          switch (f.status) {
            case 403:
              a.i = 1e3;
              break;
            case 302:
            case 500:
            case 502:
            case 503:
              ++a.i;
              break;
            case 200:
              var g = f.responseText;
              0 == g.lastIndexOf(")]}'\n", 0) && (g = g.substring(5));
              e(JSON.parse(g));
            default:
              a.i = 0;
          }
          a.Zc(b);
        }
      }),
      (a.g[b] = f),
      f.send(null));
  }
  function Zi(a) {
    for (var b in a.g) aj(a.g[b]);
    a.g = {};
  }
  function aj(a) {
    a.onreadystatechange = Ci;
    var b = a.readyState;
    0 != b && 4 != b && a.abort();
  }
  var bj;
  function cj() {
    this.l = 153;
  }
  y(cj, N);
  cj.prototype.getMessage = function (a, b, c) {
    b.length &&
      c.push({
        getType: function () {
          return 507;
        },
        position: 2,
      });
  };
  function dj(a) {
    this.o = a;
  }
  dj.prototype.getType = function () {
    return this.o;
  };
  dj.prototype.s = function () {
    return !0;
  };
  function ej(a) {
    this.l = 152;
    this.G = a;
  }
  H(ej, N);
  ej.prototype.Lb = Ci;
  var fj = cc(),
    gj;
  if ((gj = fj)) {
    for (
      var hj = jc(),
        ij = 0,
        jj = vb(String(hj)).split("."),
        kj = vb("10").split("."),
        lj = Math.max(jj.length, kj.length),
        mj = 0;
      0 == ij && mj < lj;
      mj++
    ) {
      var nj = jj[mj] || "",
        oj = kj[mj] || "";
      do {
        var pj = /(\d*)(\D*)(.*)/.exec(nj) || ["", "", "", ""],
          qj = /(\d*)(\D*)(.*)/.exec(oj) || ["", "", "", ""];
        if (0 == pj[0].length && 0 == qj[0].length) break;
        ij =
          yb(
            0 == pj[1].length ? 0 : parseInt(pj[1], 10),
            0 == qj[1].length ? 0 : parseInt(qj[1], 10)
          ) ||
          yb(0 == pj[2].length, 0 == qj[2].length) ||
          yb(pj[2], qj[2]);
        nj = pj[3];
        oj = qj[3];
      } while (0 == ij);
    }
    gj = 0 <= ij;
  }
  var rj = gj,
    sj = Ic();
  sj && jc();
  var tj = bc(),
    uj = wb() && !J("Edge");
  fc();
  var vj = hc(),
    wj = vf() && fc(),
    xj = Jc(),
    yj = Vb && Yb && Yb.platform ? "macOS" === Yb.platform : J("Macintosh"),
    zj = vf();
  var Aj;
  ib(
    "A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(
      " "
    )
  );
  function Bj(a, b) {
    b ? a.setAttribute("role", b) : a.removeAttribute("role");
  }
  function Cj(a, b, c) {
    Array.isArray(c) && (c = c.join(" "));
    var d = "aria-" + b;
    "" === c || void 0 == c
      ? (Aj ||
          ((c = {}),
          (Aj =
            ((c.atomic = !1),
            (c.autocomplete = "none"),
            (c.dropeffect = "none"),
            (c.haspopup = !1),
            (c.live = "off"),
            (c.multiline = !1),
            (c.multiselectable = !1),
            (c.orientation = "vertical"),
            (c.readonly = !1),
            (c.relevant = "additions text"),
            (c.required = !1),
            (c.sort = "none"),
            (c.busy = !1),
            (c.disabled = !1),
            (c.hidden = !1),
            (c.invalid = "false"),
            c))),
        (c = Aj),
        b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d))
      : a.setAttribute(d, c);
  }
  function Dj(a) {
    var b = a.getAttribute("aria-activedescendant");
    return (9 == a.nodeType ? a : a.ownerDocument || a.document).getElementById(
      null == b || void 0 == b ? "" : String(b)
    );
  }
  function Ej(a, b) {
    var c = "";
    b && (c = b.id);
    Cj(a, "activedescendant", c);
  }
  function Fj(a) {
    a = Gj(a);
    return nc(a);
  }
  function Hj(a) {
    a = Gj(a);
    return ub(a);
  }
  function Gj(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  var Ij = void 0 != document.documentElement.style.opacity,
    Jj = { rtl: "right", ltr: "left" };
  function Kj(a, b) {
    try {
      if (a.setSelectionRange) a.setSelectionRange(b, b);
      else if (a.createTextRange) {
        var c = a.createTextRange();
        c.collapse(!0);
        c.moveStart("character", b);
        c.select();
      }
    } catch (d) {}
  }
  function Lj(a) {
    for (var b = 0, c = 0; a; ) {
      b += a.offsetTop;
      c += a.offsetLeft;
      try {
        a = a.offsetParent;
      } catch (d) {
        a = null;
      }
    }
    return { Qc: b, eb: c };
  }
  function Mj(a) {
    try {
      return Nj(a).activeElement == a;
    } catch (b) {}
    return !1;
  }
  function O(a, b) {
    a = document.createElement(a);
    b && (a.className = b);
    return a;
  }
  function P(a) {
    return O("div", a);
  }
  function Oj(a, b) {
    a.innerHTML != b && Bf(a, Fj(b));
  }
  function Pj(a, b) {
    a.dir != b && ((a.dir = b), (a.style.textAlign = Jj[b]));
  }
  function Qj(a) {
    a && (a.preventDefault && a.preventDefault(), (a.returnValue = !1));
    return !1;
  }
  function Rj(a) {
    if ((a = a || window.event))
      a.stopPropagation && a.stopPropagation(),
        (a.cancelBubble = a.cancel = !0);
    return Qj(a);
  }
  function Sj(a) {
    var b = O("a");
    Af(b, "#ifl");
    b.className = "sbsb_i sbqs_b";
    a.appendChild(b);
    return b;
  }
  function Tj(a) {
    var b = a || window;
    a = b.document;
    var c = b.innerWidth;
    b = b.innerHeight;
    if (!c) {
      var d = a.documentElement;
      d && ((c = d.clientWidth), (b = d.clientHeight));
      c || ((c = a.body.clientWidth), (b = a.body.clientHeight));
    }
    return { Ye: c, me: b };
  }
  function Nj(a) {
    return a ? a.ownerDocument || a.document : window.document;
  }
  function Uj(a) {
    return a ? ((a = Nj(a)), a.defaultView || a.parentWindow) : window;
  }
  function Vj() {
    return Ij ? "opacity" : "filter";
  }
  function Wj(a) {
    return Ij ? a + "" : "alpha(opacity=" + Math.floor(100 * a) + ")";
  }
  function Xj() {
    this.o = 507;
    Yj(this);
  }
  y(Xj, dj);
  Xj.prototype.g = function () {
    return this.i;
  };
  function Zj(a, b, c, d) {
    Yj(a, c, d);
    a = a.l;
    c = new Ph();
    b = new Oh(c).m(b);
    Bf(a, b);
  }
  function Yj(a, b, c) {
    a.i = P("sbfl_a");
    a.l = P("sbfl_b");
    a.l.onclick = function () {
      c && c.openReportForm && c.openReportForm(b);
    };
    a.i.appendChild(a.l);
  }
  var ak = [30, 35, 33, 41],
    bk = [39, 10, 21];
  function ck(a, b) {
    ej.call(this, 507);
    this.m = a;
    this.g = b;
  }
  y(ck, ej);
  ck.prototype.W = function (a) {
    this.i = a.get(128);
  };
  ck.prototype.Aa = function (a, b) {
    b.addRule(
      ".sbfl_a",
      "font-size:12px;font-style:italic;color:#777;margin:-5px -18px -5px 0"
    );
    b.addRule(".sbsb_c[dir=ltr] .sbfl_a", "text-align:right");
    b.addRule(".sbsb_c[dir=rtl] .sbfl_a", "text-align:left");
    b.addRule(".sbfl_a:hover", "color:#333;cursor:pointer");
    b.addRule(".sbfl_b", "background:rgba(255,255,255,.9)");
  };
  ck.prototype.Ub = function () {
    return new Xj();
  };
  function dk(a) {
    return a.map(function (b) {
      return { label: b.g };
    });
  }
  ck.prototype.Mb = function (a, b) {
    a = Ua(
      this.i.m,
      function (c) {
        a: if (0 <= ak.indexOf(c.getType())) c = !1;
        else {
          c = c.i || [];
          for (var d = w(bk), e = d.next(); !e.done; e = d.next())
            if (0 <= c.indexOf(e.value)) {
              c = !1;
              break a;
            }
          c = !0;
        }
        return c;
      },
      this
    );
    0 < a.length
      ? (Zj(b, this.m, dk(a), this.g), (b.g().style.display = ""))
      : (b.g().style.display = "none");
  };
  var ek = fa(["#ps"]);
  function fk(a, b, c, d, e, f, g) {
    this.o = 35;
    this.da = b;
    this.ca = c;
    this.J = d;
    this.G = e;
    this.M = f;
    this.ea = g;
    this.D = !0;
    this.C = !1;
    this.l = P("sbpqs_d");
    this.u = P();
    this.N = O("span", "sbpqs_a");
    this.M &&
      ((this.m = O("a")),
      Af(this.m, Hf(ek)),
      (this.m.className = "sbsb_i"),
      (this.L = P("fr sbpqs_b")),
      this.u.appendChild(this.L),
      this.L.appendChild(this.m),
      (this.i = P("sbpqs_c")),
      Bf(this.i, Xf(this.ea)),
      Bj(this.i, "alert"));
    this.u.appendChild(this.N);
    this.l.appendChild(this.u);
    this.i && this.l.appendChild(this.i);
  }
  y(fk, dj);
  fk.prototype.g = function () {
    return this.l;
  };
  fk.prototype.s = function () {
    return this.D;
  };
  function gk(a, b, c, d, e) {
    a.C = !1;
    a.D = !0;
    a.ia = c;
    a.H = d;
    a.u.style.display = "";
    Bf(a.N, Xf(b));
    a.M &&
      ((a.i.style.display = "none"),
      rc(a.m),
      (a.m.onclick = function (f) {
        hk(a, f);
      }),
      (a.m.title = e));
  }
  function hk(a, b) {
    a.C = !0;
    ik(a.da, a.ia, function () {
      a.C &&
        (jk(a.ca),
        (a.l.onmouseover = a.l.onmouseout = a.l.onclick = null),
        (a.u.style.display = "none"),
        (a.i.style.display = ""),
        a.G.i == a.H && kk(a.J),
        a.G.g == a.H && (lk(a.G), mk(a.J)),
        (a.D = !1));
    });
    Rj(b);
  }
  function nk() {
    ej.call(this, 35);
  }
  y(nk, ej);
  m = nk.prototype;
  m.Aa = function (a, b) {
    b.addRule(".sbpqs_a", "color:#52188c");
    b.addRule(".sbdd_a[dir=ltr] .sbpqs_a", "padding-right:8px");
    b.addRule(".sbdd_a[dir=rtl] .sbpqs_a", "padding-left:8px");
    b.addRule(".sbpqs_c", "color:#666;line-height:22px");
  };
  m.W = function (a) {
    this.g = a.get(123);
    this.i = a.get(118);
    this.m = a.get(189);
    this.u = a.get(127);
    this.D = a.get(128);
  };
  m.ma = function (a) {
    this.X(a);
  };
  m.X = function (a) {
    this.C = a.Fd;
    this.s = a.zd;
    this.o = a.yd;
  };
  m.Ub = function () {
    return new fk(this.u, this.m, this.g, this.i, this.D, this.C, this.o);
  };
  m.Mb = function (a, b) {
    gk(b, a.getHtml(), a.g, a.l(), this.s);
  };
  m.Lb = function (a, b, c) {
    ok(c, b.g, 1);
  };
  function pk(a, b, c, d, e, f, g, h) {
    this.o = 35;
    this.da = b;
    this.ca = c;
    this.J = d;
    this.G = e;
    this.M = g;
    this.ea = h;
    this.D = !0;
    this.C = !1;
    this.l = P("sbpqs_d");
    this.m = P();
    this.N = O("span", "sbpqs_a");
    this.M &&
      ((this.u = O("a")),
      Af(this.u, "#ps"),
      (this.u.className = "sbsb_i"),
      (this.L = P("fr sbpqs_b")),
      this.m.appendChild(this.L),
      this.L.appendChild(this.u),
      (this.i = P("sbpqs_c")),
      Bf(this.i, Xf(this.ea)),
      Bj(this.i, "alert"));
    this.m.appendChild(this.N);
    this.l.appendChild(this.m);
    this.i && this.l.appendChild(this.i);
  }
  y(pk, dj);
  pk.prototype.g = function () {
    return this.l;
  };
  pk.prototype.s = function () {
    return this.D;
  };
  pk.prototype.ka = function (a) {
    this.C = !0;
    ik(this.da, this.ia, E(this.va, this));
    return Rj(a);
  };
  pk.prototype.va = function () {
    this.C &&
      (jk(this.ca),
      (this.l.onmouseover = this.l.onmouseout = this.l.onclick = null),
      (this.m.style.display = "none"),
      (this.i.style.display = ""),
      this.G.i == this.H && kk(this.J),
      this.G.g == this.H && (lk(this.G), mk(this.J)),
      (this.D = !1));
  };
  function qk() {
    ej.call(this, 35);
  }
  y(qk, ej);
  m = qk.prototype;
  m.Aa = function (a, b) {
    b.addRule(".sbpqs_a", "color:#52188c");
    b.addRule(".sbdd_a[dir=ltr] .sbpqs_a", "padding-right:8px");
    b.addRule(".sbdd_a[dir=rtl] .sbpqs_a", "padding-left:8px");
    b.addRule(".sbdd_a[dir=ltr] .sbpqs_b", "padding-right:3px");
    b.addRule(".sbdd_a[dir=rtl] .sbpqs_b", "padding-left:3px");
    b.addRule(".sbpqs_c", "color:#666;line-height:22px");
  };
  m.W = function (a) {
    this.g = a.get(123);
    this.i = a.get(118);
    this.m = a.get(189);
    this.u = a.get(127);
    this.D = a.get(128);
  };
  m.ma = function (a) {
    this.X(a);
  };
  m.X = function (a) {
    this.C = a.Fd;
    this.s = a.zd;
    this.o = a.yd;
  };
  m.Ub = function (a) {
    return new pk(this.u, this.m, this.g, this.i, this.D, a, this.C, this.o);
  };
  m.Mb = function (a, b) {
    var c = a.getHtml(),
      d = a.g;
    a = a.l();
    var e = this.s;
    b.C = !1;
    b.D = !0;
    b.ia = d;
    b.H = a;
    b.m.style.display = "";
    Bf(b.N, Xf(c));
    b.M &&
      ((b.i.style.display = "none"),
      Bf(b.u, Xf(e)),
      (b.u.onclick = E(b.ka, b)));
  };
  m.Lb = function (a, b, c) {
    ok(c, b.g, 1);
  };
  function rk() {
    this.l = 134;
    this.i = {};
  }
  y(rk, N);
  m = rk.prototype;
  m.W = function (a) {
    this.m = a.i.getId();
  };
  m.ma = function () {
    "google" in window || (window.google = {});
    "sbox" in window.google || (window.google.sbox = {});
    window.google.sbox["d" + this.m] = E(this.df, this);
  };
  m.X = function (a) {
    this.C = Hj("//" + (a.Ad || "clients1." + a.sc) + "/complete/deleteitems");
    this.s = a.Jd;
    this.o = a.authuser;
    this.u = a.clientName;
  };
  m.Na = function () {
    sk(this);
  };
  function sk(a) {
    a.g && (tk.removeChild(a.g), (a.g = null));
  }
  m.df = function (a) {
    sk(this);
    a = a[0];
    var b = this.i[a];
    b && (delete this.i[a], b());
  };
  var tk = pi;
  function uk() {
    this.l = 189;
  }
  y(uk, N);
  uk.prototype.W = function (a) {
    this.g = a.get(134);
    this.i = a.get(123);
    this.s = a.get(118);
    this.C = a.get(553);
  };
  uk.prototype.ma = function (a) {
    this.o = a.Df;
  };
  uk.prototype.X = function (a) {
    this.m = a.Jd;
    this.u = !(!this.g || !this.m);
    this.o &&
      ((a = this.s.g ? 3e3 : 0),
      window.setTimeout(E(this.D, this), a),
      (this.o = !1));
  };
  function ik(a, b, c) {
    a = a.g;
    a.i[b] = c;
    c = new Map();
    "1" === wi(window.location.search).ssl_dbg && c.set("ssl_dbg", "1");
    c.set("delq", b);
    c.set("client", a.u);
    c.set("callback", "google.sbox.d" + a.m);
    b = a.C;
    c.set("tok", a.s);
    a.o && c.set("authuser", a.o);
    a.g = O("script");
    b = eg(b, c);
    Df(a.g, b);
    tk.appendChild(a.g);
  }
  uk.prototype.D = function () {
    var a = vk(this.C, "", void 0, void 0, !0);
    wk(this.i, a);
    xk(this.i);
  };
  function yk() {
    this.l = 156;
  }
  y(yk, N);
  yk.prototype.W = function (a) {
    this.m = a.get(189);
  };
  yk.prototype.i = function (a) {
    var b = this.m,
      c = {};
    b.u && (c.tok = b.m);
    "1" === wi(window.location.search).ssl_dbg && (c.ssl_dbg = "1");
    for (var d in c) Ki(a, d, c[d]);
    return 1;
  };
  yk.prototype.g = function () {
    return 12;
  };
  function zk(a) {
    this.l = 156;
    this.o = a;
    this.m = null;
  }
  H(zk, N);
  zk.prototype.i = function (a) {
    var b = 1,
      c = a.G;
    a = xi(a.g);
    var d = "focus" == c || "input" == c;
    c =
      this.o.SEARCHBOX_INPUT_AUTOFOCUS &&
      "mousedown" == c &&
      this.m &&
      !this.m.isVisible();
    a || (!d && !c) || (b = 2);
    return b;
  };
  zk.prototype.g = function () {
    return 2;
  };
  zk.prototype.W = function (a) {
    this.m = a.get(128);
  };
  function Ak() {
    this.l = 157;
  }
  y(Ak, N);
  function Bk() {
    this.l = 156;
  }
  y(Bk, N);
  Bk.prototype.i = function (a) {
    var b = wi(sc(window.location.href));
    b.v && Ki(a, "video_id", b.v, !0);
    return 1;
  };
  Bk.prototype.g = function () {
    return 24;
  };
  function Ck(a, b, c) {
    this.l = 598;
    this.L = b;
    this.C = c;
    this.s = "";
    this.i = a;
    this.u = !1;
  }
  y(Ck, N);
  Ck.prototype.W = function (a) {
    this.H = a.get(553);
    this.g = a.get(128);
    this.G = a.get(118);
    this.D = a.get(150);
  };
  Ck.prototype.ma = function (a) {
    this.m = a.xd;
    this.J = a.zf;
  };
  function Dk(a, b) {
    a.s = b;
    a.H.Ed(a.s);
  }
  function Ek(a) {
    if (!a.L || a.g.isVisible()) return !1;
    var b = a.G.g;
    if (!b || 0 == b.length) return !1;
    if (b != a.m)
      return "always" == a.C && a.g && a.g.m && 0 < a.g.m.length && Fk(a.g), !1;
    if (a.i && a.i.getRefinementsTuple) {
      var c = a.i.getRefinementsTuple();
      if (c) {
        var d = c[0];
        "ClearBySearchbox" == d
          ? (a.o = [])
          : "FromSearchResponse" == d && a.u && ((a.o = c[1]), (a.u = !1));
      }
    }
    if (!a.o || 0 >= a.o.length)
      return a.g && a.g.m && 0 < a.g.m.length
        ? (Fk(a.g), !1)
        : "always" == a.C || "fallback" == a.C;
    c = [];
    for (var e = (d = 0); e < a.o.length && !(c.length >= a.J); ++e) {
      var f = a.o[e];
      f &&
        0 < f.length &&
        c.push(new fi(a.D.bold(b, f), f, d++, 0, [71], null));
    }
    0 < c.length && Gk(a.g, c, !1);
    return !1;
  }
  function Hk() {
    this.l = 156;
  }
  y(Hk, N);
  Hk.prototype.W = function (a) {
    this.m = a.get(598);
  };
  Hk.prototype.i = function (a) {
    var b = this.m,
      c;
    a: {
      if (b.i && b.i.getPreviousQuery && (c = b.i.getPreviousQuery())) break a;
      c = null;
    }
    var d;
    d = (d = wi(sc(window.location.href)))
      ? (d = d.search_query || d.q) && d == b.m
      : !1;
    c && c != b.m
      ? ((b.u = !0), (b.m = c), Dk(b, c))
      : d || "" == b.s
      ? d && "" == b.s && Dk(b, b.m)
      : Dk(b, "");
    return ("mousedown" != a.G && "focus" != a.G) || !Ek(this.m) ? 1 : 2;
  };
  Hk.prototype.g = function () {
    return 46;
  };
  function Ik() {
    this.l = 149;
    this.i = pi;
    this.g = {};
  }
  y(Ik, N);
  m = Ik.prototype;
  m.W = function (a) {
    this.G = a.get(127);
    this.u = a.i.getId();
  };
  m.ma = function () {
    "google" in window || (window.google = {});
    "sbox" in window.google || (window.google.sbox = {});
  };
  m.X = function (a) {
    this.config_ = a;
    a.connectionType == this.Ab() &&
      ((a = this.G.i),
      (this.s = a.protocol),
      (this.o = a.host),
      (this.D = a.Lc),
      (this.C = a.Re),
      (this.H = "https:" == document.location.protocol),
      Jk(this, E(this.ef, this)),
      (new Image().src = this.s + this.o + "/generate_204"));
  };
  m.Na = function () {
    Jk(this, null);
    Kk(this);
  };
  m.Oe = function (a, b, c, d) {
    c = a.getId();
    var e = a.g;
    this.config_.Xd || Kk(this);
    b =
      this.s +
      this.o +
      this.D +
      "?" +
      (this.C ? this.C + "&" : "") +
      (b ? b + "&" : "");
    a = [];
    ui("q", e, a, !0);
    this.config_.Xe || ui("callback", "google.sbox.p" + this.u, a);
    if (this.H) {
      e = "";
      for (var f = 4 + Math.floor(32 * Math.random()), g, h = 0; h < f; ++h)
        (g =
          0.3 > Math.random()
            ? 48 + Math.floor(10 * Math.random())
            : (0.5 < Math.random() ? 65 : 97) + Math.floor(26 * Math.random())),
          (e += String.fromCharCode(g));
      ui("gs_gbg", e, a);
    }
    e = O("script");
    this.config_.Ag && e.setAttribute("nonce", this.config_.Ag);
    Df(e, Hj(b + a.join("&")));
    e.charset = "utf-8";
    this.g[c] = e;
    this.m = d;
    this.i.appendChild(e);
    return !0;
  };
  m.Ab = function () {
    return 0;
  };
  m.ed = function () {
    return 0;
  };
  m.Zc = function (a) {
    var b = this.g[a];
    b && (this.i.removeChild(b), delete this.g[a]);
  };
  function Kk(a) {
    for (var b in a.g) a.i.removeChild(a.g[b]);
    a.g = {};
    a.m = null;
  }
  m.ef = function (a) {
    this.m && this.m(a);
  };
  function Jk(a, b) {
    b || (b = Ci);
    var c = window.google;
    a.config_.Xe ? (c.ac.h = b) : (c.sbox["p" + a.u] = b);
  }
  function Lk() {
    this.l = 115;
    this.o = {};
  }
  y(Lk, N);
  m = Lk.prototype;
  m.W = function (a) {
    this.m = a.get(116);
    if ((a = Si(a, 154))) for (var b, c = 0; (b = a[c++]); ) this.o[Mk] = b;
  };
  m.X = function () {
    this.g = !1;
  };
  m.Na = function () {
    Nk(this);
  };
  m.isVisible = function () {
    return this.g;
  };
  m.getHeight = function () {
    return this.g ? this.m.getHeight() : 0;
  };
  function Nk(a) {
    if (a.g) {
      var b = a.m;
      b.D = 0;
      Ok(b.o.m, !1);
      Pk(b.N, !1);
      Pk(b.i, !1);
      Qk(b, b.ca);
      Rk(b.H, 9);
      a.g = !1;
    }
  }
  var Sk = { ne: "left", wg: !0, yb: null, marginWidth: 0 };
  function Tk() {
    this.l = 118;
  }
  y(Tk, N);
  m = Tk.prototype;
  m.W = function (a) {
    this.m = a.get(119);
    this.C = a.get(130);
    this.da = a.get(145);
    this.s = a.get(117);
    this.L = a.get(123);
    this.D = a.get(374);
    this.H = a.get(121);
    this.ea = a.get(553);
    this.i = a.get(128);
    this.M = a.get(139);
    this.ia = a.get(173);
    this.ka = Si(a, 160);
  };
  m.ma = function (a) {
    this.config_ = a;
    this.g = this.o = this.m.g.value || "";
  };
  m.X = function (a) {
    this.config_ = a;
    this.G = this.N = !1;
    Uk(this);
  };
  function Vk(a) {
    var b = {};
    Rk(a.s, 11, b);
    !b.cancel &&
      a.config_.hg &&
      Gd(function () {
        var c = a.i;
        xk(c.G);
        Wk(c);
      });
  }
  function Xk(a, b) {
    if (
      0 == a.config_.Pc ||
      2 == a.config_.Pc ||
      (3 == a.config_.Pc && !a.o && !b)
    )
      return !1;
    a: {
      if (
        Yk(a.i) &&
        (null != a.i.i
          ? (b = Zk(a.i))
          : ((b = a.i), (b = Yk(b) ? b.m[0] : null)),
        b.o)
      )
        break a;
      b = null;
    }
    var c;
    if ((c = b)) {
      if ((c = b = b.g))
        (c = a.o),
          (c = !(c || b ? c && b && c.toLowerCase() == b.toLowerCase() : 1));
      c
        ? ((a.o = a.g),
          Bi(b, a.g, !0) && (b = a.g + b.substr(a.g.length)),
          $k(a, b, ti(b.length), "", !0),
          al(a, b, !0),
          (c = !0))
        : (c = !1);
    }
    return c ? (a.D.add(8), !0) : !1;
  }
  function $k(a, b, c, d, e) {
    a.config_.rf && !a.i.isVisible() && "mousedown" == d && bl(a.i, c, d);
    var f = !1,
      g = !1;
    if (b != a.g || "onremovechip" == d)
      Bi(d, "key") ? a.D.add(1) : "paste" == d && a.D.add(2),
        (f = !0),
        cl(a, b),
        Rk(a.s, 1, { lc: d, yb: a.u }),
        (g = F()),
        a.J || (a.J = g),
        (a.ca = g),
        xi(b) && (e = !0),
        (g = !0);
    b = vk(a.ea, b, c, d);
    switch (b.J) {
      case 3:
        b.o = !0;
      case 2:
        e = !0;
        break;
      case 4:
        e = !1;
    }
    e
      ? (f &&
          ((f = a.i),
          f.s &&
            !f.C &&
            (f.C = window.setTimeout(E(f.clear, f), f.config_.ig))),
        a.N && Ki(b, "gs_is", 1),
        wk(a.L, b))
      : g && (a.i.clear(), xk(a.L));
    Rk(a.s, 2, { lc: d });
  }
  function mk(a) {
    a = a.m;
    if (!a.u)
      try {
        a.g.focus(), (a.u = !0), dl(a);
      } catch (b) {}
  }
  function el(a, b) {
    cl(a, b);
    fl(a.m);
    Rk(a.s, 4, { yb: a.u, input: b });
  }
  function kk(a) {
    a.g != a.o && cl(a, a.o);
    Rk(a.s, 5, { input: a.o, hh: a.i.m, yb: a.u });
    fl(a.m);
  }
  m.getHeight = function () {
    return this.m.getHeight();
  };
  function gl(a) {
    if (a.ia) {
      if (a.config_.hd) return !0;
      for (var b = 0, c; (c = a.ka[b++]); ) if (c.isEnabled()) return !0;
    }
    return !1;
  }
  m.clear = function () {
    this.g &&
      (cl(this, ""),
      this.m.clear(),
      Rk(this.s, 1),
      Rk(this.s, 16),
      this.i.clear());
  };
  function hl(a, b) {
    var c = a.m.s.cc();
    a.u == b
      ? Yk(a.i) &&
        c == a.g.length &&
        (null != a.i.i
          ? a.config_.xc && !a.config_.Wa && ok(a.H, Zk(a.i).g, 6)
          : a.config_.ue && Xk(a, !0))
      : a.C && 0 == c && a.C.g();
  }
  function il(a) {
    var b = a.m.s.cc();
    return a.config_.Wa && Yk(a.i) && null != a.i.i && b === a.g.length;
  }
  function al(a, b, c) {
    a.g = b || "";
    Uk(a);
    fl(a.m);
    c || Rk(a.s, 4, { yb: a.u, input: a.g });
  }
  function Uk(a) {
    var b = jl(a.da, a.g);
    if (b != a.u) {
      var c = a.m;
      c.o && (c.o.dir = b);
      c.g.dir = b;
      c.D && (c.D.dir = b);
      if (c.Nb) {
        c = c.g;
        var d = 0,
          e = c.style;
        "INPUT" != c.nodeName && (d += 1);
        e.left = e.right = "";
        e["rtl" == b ? "right" : "left"] = d + "px";
      }
      a.u = b;
    }
  }
  function cl(a, b) {
    a.g = a.o = b || "";
    Uk(a);
  }
  function kl() {
    this.l = 128;
  }
  y(kl, N);
  m = kl.prototype;
  m.W = function (a) {
    this.o = a.get(129);
    this.N = a.get(145);
    this.L = a.get(115);
    this.G = a.get(123);
    this.u = a.get(118);
    this.ia = a.get(147);
    this.ca = Si(a, 153);
    this.ea = a.get(553);
    this.J = a.get(184);
    this.ka = a.get(157);
  };
  m.ma = function () {
    this.ca.sort(Fi);
  };
  m.X = function (a) {
    this.config_ = a;
    this.i = this.g = null;
    this.s = this.H = !1;
    this.da = !0;
    this.D = "";
    this.M = 0;
  };
  m.Na = function () {
    this.C && (window.clearTimeout(this.C), (this.C = null));
    this.m = null;
    Wk(this);
  };
  function Gk(a, b, c) {
    var d = a.J && a.J.i(b);
    a.clear();
    a.m = b;
    var e = Yk(a) ? b[0].g : a.u.o;
    a: {
      var f = e;
      if (a.N.g) {
        for (var g = !1, h = !1, k = 0, l; k < f.length; ++k)
          if (
            ((l = f.charAt(k)),
            !ll.test(l) && (ml.test(l) ? (h = !0) : (g = !0), h && g))
          ) {
            f = !0;
            break a;
          }
        f = !1;
      } else f = !0;
    }
    f && (e = a.u.o);
    a.D = jl(a.N, e);
    if (a.config_.Pg && Yk(a) && c && !zj) {
      a.H = !0;
      c = a.o;
      if (c.o) {
        c.H = a.D;
        nl(c);
        e = !1;
        for (f = 0; (g = b[f++]); ) ol(c, g) && (e = !0);
        c = e;
      } else c = !1;
      e = b[0].m.g.a || "";
      e = zi(e);
      b = a.ia;
      f = 0;
      e &&
        (b.g || pl(b),
        ql(b),
        e in b.m
          ? (f = b.m[e])
          : (Oj(b.g, yi(e)), (b.m[e] = f = b.g.offsetWidth), Oj(b.g, "")));
      a.M = f;
    } else {
      a.H = !1;
      b = a.o;
      if (a.H || (!a.config_.dh && !Yk(a))) c = [];
      else {
        c = [];
        e = [];
        for (f = 0; (g = a.ca[f++]) && !g.getMessage(a.u.o, a.m, e); );
        (f = e ? e.length : 0) && (f -= rl(e, c, 0));
        for (g = 0; g < a.m.length; ++g) c.push(a.m[g]);
        f && (f -= rl(e, c, 1));
        a.config_.eg && c.push(1);
        f && (f -= rl(e, c, 2));
        f && rl(e, c, 3);
        a.config_.ke && c.push(2);
        a.ka && 1 < c.length && 5 == c[0].getType() && c.splice(1, 0, 3);
      }
      if (b.o) {
        b.H = a.D;
        nl(b);
        e = !1;
        for (f = 0; (g = c[f++]); )
          if (1 == g)
            (g = b),
              g.D
                ? (g.D.style.display = "")
                : ((h = O("li")),
                  (k = h.style),
                  (k.position = "relative"),
                  (k.textAlign = "center"),
                  (k.whiteSpace = "nowrap"),
                  (h.dir = g.J),
                  (g.i = P()),
                  (g.i.className = "sbsb_g"),
                  g.config_.ke && (g.i.style.paddingBottom = "1px"),
                  sl(g, g.config_.Zg, g.i, 13),
                  g.config_.dg
                    ? sl(g, g.config_.ae, g.i, 8)
                    : g.config_.fg && sl(g, g.config_.ah, g.i, 14),
                  h.appendChild(g.i),
                  (h.onmousedown = E(g.wd, g)),
                  (h.className = g.config_.Oc),
                  (g.D = h)),
              g.g.appendChild(g.D);
          else if (2 == g)
            if (((g = b), g.C)) g.C.style.display = "";
            else {
              h = P("sbsb_j " + g.config_.Oc);
              k = O("a");
              k.id = "sbsb_f";
              Af(
                k,
                "http://www.google.com/support/websearch/bin/answer.py?hl=" +
                  g.config_.md +
                  "&answer=106230"
              );
              var n = g.config_.Bg;
              l = { Qg: !0 };
              l = void 0 === l ? {} : l;
              n instanceof lc
                ? (l = n)
                : ((n = String(n)
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&apos;")),
                  l.zi && (n = n.replace(/(^|[\r\n\t ]) /g, "$1&#160;")),
                  l.Qg && (n = n.replace(/(\r\n|\n|\r)/g, "<br>")),
                  l.Ai &&
                    (n = n.replace(
                      /(\t+)/g,
                      '<span style="white-space:pre">$1</span>'
                    )),
                  (l = nc(n)));
              Bf(k, l);
              h.appendChild(k);
              h.onmousedown = E(g.wd, g);
              g.C = h;
              g.o.appendChild(g.C);
            }
          else
            3 == g
              ? ((g = b),
                (h = g.ia.pop()),
                h ||
                  ((h = O("li")),
                  Cj(h, "hidden", !0),
                  (h.l = !0),
                  (k = O("div", "sbsb_e")),
                  h.appendChild(k)),
                g.g.appendChild(h))
              : ol(b, g) && (e = !0);
        c = e;
      } else c = !1;
      a.M = 0;
    }
    d && ((a.i = a.J.l()), tl(a, a.J.g()));
    c ? Fk(a) : a.clear();
  }
  function tl(a, b) {
    if (a.g != b) {
      var c = a.g;
      a.g = b;
      ul(a, c);
    }
  }
  m.Me = function () {
    if (Yk(this))
      if (this.s) {
        var a = this.g;
        this.g == this.m.length - 1
          ? (this.i = this.g = null)
          : null == this.g
          ? (this.g = 0)
          : ++this.g;
        this.i = this.g;
        vl(this, a, E(this.Me, this));
      } else Fk(this);
  };
  m.Ne = function () {
    if (Yk(this))
      if (this.s) {
        var a = this.g;
        this.m && 0 != this.g
          ? null == this.g
            ? (this.g = this.m.length - 1)
            : --this.g
          : (this.i = this.g = null);
        this.i = this.g;
        vl(this, a, E(this.Ne, this));
      } else Fk(this);
  };
  m.isVisible = function () {
    return this.s;
  };
  m.isEnabled = function () {
    return this.da;
  };
  function Zk(a) {
    return null != a.i ? a.m[a.i] : null;
  }
  function Yk(a) {
    return !(!a.m || !a.m.length);
  }
  function Fk(a) {
    if (!a.s) {
      a: {
        var b = a.L,
          c = Mk;
        if (c in b.o) {
          if (b.i) {
            if (c == Mk) break a;
            Nk(b);
            b.i.i.s = !1;
          }
          b.i = b.o[c];
          c = b.m;
          b = b.i;
          b != c.u &&
            ((c.u = b),
            (b = b.g.o),
            c.L ? b != c.L && c.s.replaceChild(b, c.L) : c.s.appendChild(b),
            (c.L = b));
        }
      }
      c = a.L;
      if (!c.g) {
        b = c.m;
        var d = Gi(Sk);
        if (c.i) {
          var e = c.i.i;
          d.yb = e.D;
          d.marginWidth = e.M;
          var f = e.config_.ih;
          f || (f = "rtl" == e.D ? "right" : "left");
          d.ne = f;
        }
        Qk(b, d.yb || b.ca);
        e = d.marginWidth;
        b.da != e &&
          ((f = b.J.style),
          e ? ((f.width = e + "px"), (f.height = "1px")) : (f.height = ""),
          (b.da = e));
        b.ka = d.wg;
        b.ia = d.ne;
        Ok(b.o.m, !0);
        Pk(b.N, !0);
        Pk(b.i, !0);
        Rk(b.H, 14);
        b.Od();
        c.g = !0;
      }
      a.s = !0;
    }
  }
  function Wk(a) {
    a.s &&
      (a.C && (window.clearTimeout(a.C), (a.C = null)), Nk(a.L), (a.s = !1));
  }
  m.clear = function () {
    Wk(this);
    this.m = null;
    this.H = !1;
    null != this.g && wl(this.o, this.g);
    this.i = this.g = null;
    this.o.clear();
  };
  function lk(a) {
    null != a.g && wl(a.o, a.g);
    a.i = a.g = null;
  }
  function bl(a, b, c) {
    if (Yk(a)) Fk(a);
    else {
      var d = a.u.o;
      d && ((b = vk(a.ea, d, b || a.u.m.s, c)), wk(a.G, b));
    }
  }
  function rl(a, b, c) {
    for (var d = 0, e = 0, f; e < a.length; ++e)
      (f = a[e]) &&
        f.position == c &&
        (3 == c ? f.sa && f.sa(b) && ++d : (b.push(f), ++d));
    return d;
  }
  function vl(a, b, c) {
    var d;
    (d = null == a.g) || (d = (d = a.o.m[a.g]) ? d.s() : !1);
    d
      ? (ul(a, b),
        (b = a.o),
        (c = a.g),
        (c = void 0 === c ? null : c),
        null === c
          ? b.u.removeAttribute("aria-activedescendant")
          : (c = b.m[c]) &&
            c.s() &&
            ((c = c.g()),
            b.config_.Wa && (c = c.querySelector('[role="gridcell"]')),
            c && Ej(b.u, c)),
        null == a.g ? kk(a.u) : ((b = a.m[a.g]), b.getType(), al(a.u, b.g)))
      : (wl(a.o, b), c());
  }
  function ul(a, b) {
    null != b && wl(a.o, b);
    null != a.g &&
      ((b = a.o), (a = b.m[a.g]) && a.s() && Dg(a.g().parentNode, b.da));
  }
  var Mk = ri++;
  function xl() {
    this.l = 154;
  }
  y(xl, N);
  xl.prototype.W = function (a) {
    this.i = a.get(128);
    this.g = a.get(129);
  };
  function yl() {
    this.l = 145;
    this.g = ml.test("x");
  }
  y(yl, N);
  yl.prototype.Aa = function (a) {
    this.i = a.yc();
  };
  function jl(a, b) {
    var c = a.i;
    a.g && (ml.test(b) ? (c = "ltr") : ll.test(b) || (c = "rtl"));
    return c;
  }
  var ll = RegExp(
      "^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"
    ),
    ml = RegExp(
      "^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])"
    );
  function zl() {
    this.l = 117;
    this.i = [];
    this.g = { cf: 1 };
  }
  y(zl, N);
  function Al(a, b, c, d, e, f) {
    var g = Bl(a, b);
    g || ((g = {}), a.i.push({ element: b, Zf: g }));
    var h = g[c];
    h ||
      ((h = g[c] = []),
      (a = Cl(a, c, b.cf ? window : Uj(b), h)),
      "string" !== typeof c
        ? (b[c] = a)
        : b.addEventListener
        ? b.addEventListener(c, a, !1)
        : (b["on" + c] = a));
    h.push({ vg: !!f, qd: !1, priority: e || 0, process: d });
    h.sort(Dl);
    d.yf = c;
  }
  function El(a, b, c) {
    if ((a = Bl(a, b)))
      if ((a = a[c.yf]))
        for (var d = 0; (b = a[d++]); )
          if (b.process == c) {
            b.qd = !0;
            break;
          }
  }
  function Rk(a, b, c) {
    c = c || {};
    (a = a.g[b]) && a(c, c.lc);
  }
  zl.prototype.ya = function (a, b, c) {
    a.addEventListener
      ? a.addEventListener(b, c, !1)
      : a.attachEvent("on" + b, c);
  };
  function Cl(a, b, c, d) {
    return E(function (e, f) {
      if (d.length) {
        if (!e) {
          e = {};
          var g = c.event;
          g && (g.keyCode && (e.keyCode = g.keyCode), (e.ug = !0));
        }
        e.lc = f || b;
        f = e;
        for (var h, k, l = 0; (g = d[l++]); )
          g.qd ? (k = !0) : h || (g.vg ? Fl(g, f) : (h = g.process(f)));
        if (k) for (k = 0; (h = d[k]); ) h.qd ? d.splice(k, 1) : ++k;
        if (e.Cc)
          return (
            delete e.Cc, e.ug && (e = c.event || e), Rj(e), (e.returnValue = !1)
          );
      }
    }, a);
  }
  function Bl(a, b) {
    for (var c, d = 0; d < a.i.length; ++d)
      if (((c = a.i[d]), c.element == b)) return c.Zf;
    return null;
  }
  function Fl(a, b) {
    Gd(function () {
      a.process(b);
    });
  }
  function Dl(a, b) {
    return b.priority - a.priority;
  }
  function Gl() {
    this.l = 494;
    this.g = {};
    this.o = this.u = 0;
    this.i = -1;
    this.m = 0;
    this.s = {};
  }
  y(Gl, N);
  Gl.prototype.X = function () {
    this.reset();
  };
  Gl.prototype.reset = function () {
    this.g = {};
    this.o = this.u = 0;
    this.i = -1;
    this.m = 0;
    this.s = {};
  };
  function Hl() {
    this.l = 374;
  }
  y(Hl, N);
  Hl.prototype.X = function () {
    this.reset();
  };
  Hl.prototype.add = function (a) {
    this.g || (this.g = {});
    this.g[a] = !0;
  };
  Hl.prototype.reset = function () {
    this.g = {};
  };
  function Il() {
    this.l = 120;
    this.G = -1;
  }
  y(Il, N);
  Il.prototype.W = function (a) {
    this.J = a.get(191);
    this.g = a.get(123);
    this.m = a.get(118);
    this.C = a.get(374);
    this.i = a.get(494);
    this.D = a.get(126);
    this.o = a.get(128);
    this.H = Si(a, 311);
  };
  Il.prototype.ma = function (a) {
    this.u = a.Dg;
  };
  Il.prototype.X = function (a) {
    this.config_ = a;
    this.reset();
  };
  function Jl(a, b) {
    var c = a.m.o;
    var d = [];
    d[27] = 64;
    d[0] = Kl(a.config_.clientName);
    d[28] = Kl(a.config_.requestIdentifier);
    d[1] = void 0 == b ? "" : b + "";
    b = a.C;
    var e = [];
    for (f in b.g) e.push(parseInt(f, 10));
    d[26] = e.join("j");
    var f = "";
    null != a.o.i
      ? (f = a.o.i + "")
      : ((b = a.D.i), (10 <= b.s || 3 <= b.u.ed()) && (f = "o"));
    d[2] = f;
    f = "";
    if ((b = a.o.m)) {
      for (var g = (e = 0), h; (h = b[g++]); ) {
        h = Hi(h.getType(), h.i || []);
        if (h != k) {
          1 < e && (f += "l" + e);
          f += (k ? "j" : "") + h;
          e = 0;
          var k = h;
        }
        ++e;
      }
      1 < e && (f += "l" + e);
    }
    d[3] = f;
    k = "";
    f = a.o.m;
    b = a.i.s;
    if (f)
      for (e = 0; (g = f[e++]); ) {
        var l = Hi(g.getType(), g.i || []);
        l in b && delete b[l];
      }
    if (b) for (l in b) k += (k ? "j" : "") + l;
    d[35] = k;
    l = a.i.i;
    d[33] = -1 < l ? String(l) : "";
    d[4] = Math.max(a.m.J - a.s, 0);
    d[5] = Math.max(a.m.ca - a.s, 0);
    d[6] = a.G;
    d[7] = F() - a.s;
    d[18] = Math.max(a.m.va - a.s, 0);
    d[8] = a.g.Ob;
    k = a.g;
    k = (l = k.i) ? k.g.m : 0;
    d[25] = l
      ? "1" + (a.config_.uf ? "a" : "") + (a.config_.Vd ? "c" : "")
      : "";
    d[10] = k;
    l = a.g;
    d[11] = l.i ? l.g.o : 0;
    d[12] = a.g.va;
    f = a.g;
    l = f.ia;
    k = f.ea;
    f = f.ka;
    d[9] = l;
    d[22] = k;
    d[17] = f;
    d[13] = a.g.Nb;
    d[14] = a.g.J;
    d[15] = a.g.M;
    l = a.g;
    k = [];
    for (b = e = 0; b <= Ll; ++b)
      (f = l.L[b]),
        0 == f
          ? e++
          : ((e = 1 == e ? "0j" : 1 < e ? b + "-" : ""),
            k.push(e + f),
            (e = 0));
    d[16] = k.join("j");
    d[36] = a.g.N;
    l = 0;
    for (var n in a.i.g) l++;
    d[30] = l;
    d[31] = a.i.u;
    d[32] = a.i.o;
    d[19] = Kl(a.config_.Hd);
    n = a.i;
    k = a.D.g;
    l = !1;
    k && (l = k.i.g.e || "");
    k = 0;
    l ? ((k |= 1), 1 < n.m && (k |= 2)) : 0 < n.m && (k |= 2);
    n = k;
    d[20] = 0 == n ? "" : n + "";
    for (n = 0; (l = a.H[n++]); )
      (k = l.l()), Ml[k] && (d[k] = void 0 == d[k] ? Kl(l.Ra()) : "");
    d = d.join(".").replace(Nl, "");
    if (a.J && a.u) {
      n = c + d;
      b: {
        l = a.u;
        k = [];
        if (l)
          for (e = b = f = 0; e < l.length; ++e) {
            g = l.charCodeAt(e);
            if (32 > g || 127 < g || !Ol[g - 32]) {
              l = [];
              break b;
            }
            f <<= 6;
            f |= Ol[g - 32] - 1;
            b += 6;
            8 <= b && (k.push((f >> (b - 8)) & 255), (b -= 8));
          }
        l = k;
      }
      f = l;
      l = {};
      l.oa = Array(4);
      l.buffer = Array(4);
      l.rh = Array(4);
      l.padding = Array(64);
      l.padding[0] = 128;
      for (k = 1; 64 > k; ++k) l.padding[k] = 0;
      Pl(l);
      k = Array(64);
      64 < f.length && (Pl(l), Ql(l, f), (f = Rl(l)));
      for (b = 0; b < f.length; ++b) k[b] = f[b] ^ 92;
      for (b = f.length; 64 > b; ++b) k[b] = 92;
      Pl(l);
      for (b = 0; 64 > b; ++b) l.buffer[b] = k[b] ^ 106;
      Sl(l, l.buffer);
      l.total = 64;
      Ql(l, Tl(n));
      n = Rl(l);
      Pl(l);
      Sl(l, k);
      l.total = 64;
      Ql(l, n);
      n = Rl(l);
      n = n.slice(0, 8);
      "string" === typeof n && (n = Tl(n));
      l = "";
      if (n) {
        k = n.length;
        for (e = b = f = 0; k--; )
          for (b <<= 8, b |= n[e++], f += 8; 6 <= f; )
            (l +=
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
                (b >> (f - 6)) & 63
              )),
              (f -= 6);
        f &&
          (l +=
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
              ((b << 8) >> (f + 8 - 6)) & 63
            ));
      }
      n = l;
    } else n = "";
    c = { oq: c, gs_l: d + "." + n };
    a.config_.xg && (c.q = a.m.g);
    return c;
  }
  Il.prototype.reset = function () {
    this.s = F();
    ++this.G;
    var a = this.m;
    a.J = 0;
    a.ca = 0;
    a.va = 0;
    this.C.reset();
    a = this.g;
    if (a.i) {
      var b = a.g;
      b.m = 0;
      b.o = 0;
    }
    a.Ob = 0;
    a.s = 0;
    a.va = 0;
    a.ia = 0;
    a.ea = 0;
    a.ka = 0;
    a.Nb = 0;
    a.J = 0;
    a.M = 0;
    a.N = 0;
    a.L = [];
    for (b = 0; b <= Ll; ++b) a.L[b] = 0;
    for (a = 0; (b = this.H[a++]); ) b.reset();
    this.i.reset();
  };
  function Kl(a) {
    return a ? a.replace(Ul, "-") : "";
  }
  var Nl = /\.+$/,
    Ul = /\./g,
    Ml = si([23]);
  function Vl() {
    this.l = 121;
  }
  y(Vl, N);
  Vl.prototype.Aa = function (a) {
    this.m = a.ee();
  };
  Vl.prototype.W = function (a) {
    this.g = a.get(347);
    this.s = a.get(130);
    this.H = a.get(117);
    this.C = a.get(123);
    this.o = a.get(118);
    this.J = a.get(120);
    this.L = a.get(128);
    this.D = a.get(139);
    this.u = a.s;
    this.G = Si(a, 294);
  };
  Vl.prototype.X = function (a) {
    this.config_ = a;
  };
  function ok(a, b, c) {
    if (a.G) {
      for (var d = !1, e = 0, f; (f = a.G[e++]); ) 2 == f.g(b, c) && (d = !0);
      if (d) return;
    }
    if (xi(b) || a.config_.ub || (a.s && a.s.ub())) {
      if (bi.test(c)) {
        if (a.m && !a.i) {
          d = a.m;
          b: {
            if ((e = d.getElementsByTagName("input")))
              for (var g = 0; (f = e[g++]); )
                if ("btnI" == f.name && "submit" != f.type.toLowerCase()) {
                  e = f;
                  break b;
                }
            e = null;
          }
          e
            ? (d = null)
            : ((e = O("input")),
              (e.type = "hidden"),
              (e.name = "btnI"),
              (e.value = "1"),
              d.appendChild(e),
              (d = e));
          a.i = d;
        }
      } else a.i && (a.m.removeChild(a.i), (a.i = null));
      a.g && a.config_.bd && Wl(a.g, c);
      a.u.Md(c);
      Xl(a);
      Rk(a.H, 12, { query: b });
    }
  }
  Vl.prototype.redirect = function (a) {
    this.g && this.config_.bd && Wl(this.g);
    this.u.redirect(a);
    Xl(this);
  };
  function Xl(a) {
    xk(a.C);
    a.C.o = null;
    a.J.reset();
    a.L.clear();
    if (a.o.o != a.o.g) {
      var b = a.o;
      b.o = b.g;
    }
    a.D && a.D.clear();
  }
  function Yl() {
    this.l = 553;
  }
  y(Yl, N);
  Yl.prototype.W = function (a) {
    this.g = Si(a, 156);
    a.get(126);
  };
  Yl.prototype.ma = function () {
    this.g.sort(Zl);
  };
  Yl.prototype.X = function (a) {
    this.config_ = a;
    this.i = a.xd;
  };
  Yl.prototype.Ed = function (a) {
    this.i = a;
  };
  function vk(a, b, c, d, e) {
    b = new Ii(b, c || ti(b.length), d || "");
    c = 1;
    if (a.g) {
      d = 0;
      for (var f; (f = a.g[d++]); ) (f = f.i(b)), f > c && (c = f);
    }
    b.J = c;
    null != a.config_.Xc && Ki(b, "ds", a.config_.Xc, !0);
    null != a.config_.Pe && Ki(b, "swl", a.config_.Pe, !0);
    Ki(b, "pq", a.i, !0);
    e && !b.m && (b.L = !0);
    b.m ||
      ((b.s = F()),
      "cp" in b.C || ((a = b.M.cc()), Ki(b, "cp", a, !0)),
      Ki(b, "gs_id", b.u),
      (b.i = vi(b.C) + ":" + b.D),
      (b.m = !0));
    return b;
  }
  function Zl(a, b) {
    return a.g() - b.g();
  }
  function $l() {
    this.l = 123;
    this.C = !1;
    this.H = -1;
  }
  y($l, N);
  m = $l.prototype;
  m.W = function (a) {
    this.g = a.get(133);
    this.ca = a.get(130);
    this.Uc = a.get(118);
    this.Wc = a.get(120);
    this.da = a.get(494);
    this.Of = a.get(124);
    this.Pb = a.get(125);
    this.Tb = a.get(230);
    this.ad = a.get(127);
  };
  m.X = function (a) {
    this.u = this.ad.g;
    this.config_ = a;
    this.C = !0;
    this.m = {};
    this.G = 0;
    this.Cf = a.Ef;
    this.Hf = a.lg;
    this.jb = -1;
    this.i = this.config_.enableCaching && !!this.g;
  };
  m.Na = function () {
    this.C = !1;
    am(this);
    this.m = this.o = null;
    xk(this);
  };
  function wk(a, b) {
    if (!(!a.C || a.Hf || (a.ca && a.ca.l()))) {
      var c = !0,
        d = Ji(b);
      d > a.H && (a.H = d);
      ++a.Ob;
      a.da.g[b.getId()] = !0;
      xi(a.Uc.g) || xi(b.g) || ((d = a.da), (d.i = Math.max(d.i, 0)));
      d = F();
      for (var e in a.m) 2500 < d - a.m[e].s && bm(a, e);
      a.i &&
        (e = a.g.get(b)) &&
        ((c = a.Cf || b.L) && a.config_.mg && (b.o = !0),
        a.Pb.process(e),
        e.o && ++a.va,
        (a.o = null));
      c && ((a.o = b), a.D || a.De());
    }
  }
  function xk(a) {
    a.jb = a.H;
  }
  function jk(a) {
    if (a.i) {
      a = a.g;
      for (var b in a.i)
        for (var c = a.i[b].g, d, e = 0; (d = c[e++]); )
          if (35 == d.getType()) {
            delete a.i[b];
            break;
          }
      for (b = 0; b < a.g.length; ++b) a.g[b].reset();
    }
  }
  function cm(a, b) {
    return E(function (c) {
      this.Nd(c, b);
    }, a);
  }
  m.De = function () {
    am(this);
    if (!(2 < this.u.ed())) {
      var a = this.o;
      this.o = null;
      if (a) {
        var b = [],
          c = a.H;
        if (c) for (var d in c) ui(d, c[d], b);
        b = this.u.Oe(a, b.join("&"), cm(this, a), E(this.Nd, this));
        a.o || (++this.ia, b ? ((this.m[a.getId()] = a), ++this.s) : ++this.ea);
        a = 100;
        b = (this.s - 2) / 2;
        for (c = 1; c++ <= b; ) a *= 2;
        a < this.G && (a = this.G);
        this.D = window.setTimeout(E(this.De, this), a);
      }
    }
  };
  function am(a) {
    null != a.D && (window.clearTimeout(a.D), (a.D = null));
  }
  function bm(a, b) {
    a.u.Zc(b);
    delete a.m[b];
    a.s && --a.s;
  }
  m.Nd = function (a, b) {
    if (this.C) {
      if (!b && ((b = this.m[(a[2] || {}).j]), !b)) return;
      if (!b.o) {
        var c = this.Of;
        var d = b,
          e = a[0],
          f = a[1],
          g = {};
        if ((a = a[2]))
          for (var h in a) {
            var k = a[h];
            h in c.g && (k = c.g[h].parse(k));
            g[h] = k;
          }
        h = k = a = !1;
        for (var l, n = 0; (l = f[n++]); )
          if ((33 == (l[1] || 0) ? (k = !0) : (a = !0), k && a)) {
            h = !0;
            break;
          }
        a = 0;
        k = [];
        for (n = 0; (l = f[n++]); ) {
          var p = l[1] || 0;
          if (!h || 33 != p) {
            var r = l[0];
            c.m && (r = c.i.bold(e.toLowerCase(), zi(r).replace(li, "")));
            var q = k,
              u = q.push,
              t = zi(r).replace(li, ""),
              A = a++,
              I = l[3];
            u.call(q, new fi(r, t, A, p, l[2] || [], I ? new di(I) : ei));
          }
        }
        c = new Li(d, k, new di(g), !1, !0, !1);
        this.Tb && (c = this.Tb.m(c));
        if (this.i)
          for (
            d = this.g,
              e = c,
              ((e.g && e.g[0]) || "" != e.l.g) && e && e.m && (d.i[e.l.i] = e),
              f = 0;
            f < d.g.length;
            ++f
          )
            d.g[f].update(e);
        Ji(b) <= this.jb
          ? !b || b.g || c.o || (this.N = F() - b.s)
          : (++this.ka,
            this.Pb.process(c) || ++this.Nb,
            (this.G = c.i.g.d || 0),
            b &&
              (bm(this, b.getId()),
              (d = b.s),
              (d = F() - d),
              b.g
                ? ((this.M += d),
                  (this.J = Math.max(d, this.J)),
                  ++this.L[d > dm ? Ll : em[Math.floor(d / 100)]])
                : (this.N = d)));
        c && (b = c.i.g.q || "") && (this.Wc.u = b);
      }
    }
  };
  var em = [0, 1, 2, 3, 4, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8],
    Ll = em[em.length - 1] + 1,
    dm = 100 * em.length - 1;
  function fm() {
    this.l = 124;
    this.g = {};
  }
  y(fm, N);
  fm.prototype.W = function (a) {
    this.i = a.get(150);
    if ((a = Si(a, 158))) for (var b, c = 0; (b = a[c++]); ) this.g[b.ii()] = b;
  };
  fm.prototype.X = function (a) {
    this.m = a.gd;
  };
  function gm() {
    this.l = 125;
  }
  y(gm, N);
  gm.prototype.W = function (a) {
    this.o = a.get(117);
    this.u = a.get(118);
    this.s = a.get(494);
    this.g = Si(a, 122);
    this.i = a.get(126);
    this.m = a.get(128);
    this.g.sort(hm);
  };
  gm.prototype.process = function (a) {
    var b = a,
      c = this.u.g.toLowerCase(),
      d = this.i.g;
    c = Ai(c);
    var e = b.l;
    b = e ? e.l : Ai(b.l.g.toLowerCase());
    var f = (d = d ? d.l : null) ? d.l : "";
    e =
      1 ==
      (0 == c.indexOf(b)
        ? 0 == c.indexOf(f)
          ? d && d.getId() == e.getId()
            ? 0
            : b.length >= f.length
            ? 1
            : -1
          : 1
        : -1);
    c = -1 != e;
    if (e) {
      if (this.g) for (e = 0; (b = this.g[e++]); ) a = b.l(a);
      d = this.i.g = a;
      a = d.l.g;
      e = d.g;
      this.m.isEnabled() && ((b = 0 == d.getType()), Gk(this.m, e, b));
      b = this.s;
      var g = d.l;
      f = g.getId();
      if (f in b.g) {
        var h = d.g.length;
        0 < h &&
          (xi(g.g) || (b.i = h), (g = g.s), (g = F() - g), (b.o += g), ++b.u);
        d.i.g.e && ++b.m;
        delete b.g[f];
      }
      d = d.g;
      for (g = 0; (f = d[g++]); )
        (h = f.getType()), (b.s[Hi(h, f.i || [])] = !0);
      Rk(this.o, 3, { input: a, hh: e });
    }
    return c;
  };
  function hm(a, b) {
    return a.g() - b.g();
  }
  function im() {
    this.l = 126;
  }
  y(im, N);
  im.prototype.W = function (a) {
    this.i = a.get(123);
  };
  im.prototype.X = function () {
    this.g = null;
  };
  var jm = ["expflags", "plugin"];
  function km() {
    this.l = 127;
    this.m = {};
  }
  y(km, N);
  km.prototype.W = function (a) {
    a = Si(a, 149);
    for (var b, c = 0; (b = a[c++]); ) this.m[b.Ab()] = b;
  };
  km.prototype.X = function (a) {
    var b = "https:" == document.location.protocol,
      c = [];
    ui("client", a.clientName, c);
    ui("hl", a.md, c);
    ui("gl", a.Te, c);
    ui("sugexp", a.Hd, c);
    ui("gs_rn", 64, c);
    ui("gs_ri", a.requestIdentifier, c);
    var d = wi(a.url || C.location.href);
    jm.filter(function (e) {
      return d.hasOwnProperty(e);
    }).forEach(function (e) {
      return c.push(e + "=" + d[e]);
    });
    a.authuser && ui("authuser", a.authuser, c);
    this.i = {
      protocol: "http" + (b ? "s" : "") + "://",
      host: a.Ad || "clients1." + a.sc,
      Lc: a.Lc || "/complete/search",
      Re: c.length ? c.join("&") : "",
    };
    (this.g && this.g.Ab() == a.connectionType) ||
      (this.g = this.m[a.connectionType]);
  };
  function lm() {
    this.l = 191;
  }
  y(lm, N);
  function Tl(a) {
    for (var b = [], c = 0, d = 0; d < a.length; ++d) {
      var e = a.charCodeAt(d);
      128 > e
        ? (b[c++] = e)
        : (2048 > e
            ? (b[c++] = (e >> 6) | 192)
            : ((b[c++] = (e >> 12) | 224), (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  }
  function Pl(a) {
    a.oa[0] = 1732584193;
    a.oa[1] = 4023233417;
    a.oa[2] = 2562383102;
    a.oa[3] = 271733878;
    a.mc = a.total = 0;
  }
  function Sl(a, b) {
    for (var c = a.rh, d = 0; 64 > d; d += 4)
      c[d / 4] = b[d] | (b[d + 1] << 8) | (b[d + 2] << 16) | (b[d + 3] << 24);
    var e = a.oa[0];
    b = a.oa[1];
    d = a.oa[2];
    for (var f = a.oa[3], g, h, k, l = 0; 64 > l; ++l)
      16 > l
        ? ((g = f ^ (b & (d ^ f))), (h = l))
        : 32 > l
        ? ((g = d ^ (f & (b ^ d))), (h = (5 * l + 1) & 15))
        : 48 > l
        ? ((g = b ^ d ^ f), (h = (3 * l + 5) & 15))
        : ((g = d ^ (b | ~f)), (h = (7 * l) & 15)),
        (k = f),
        (f = d),
        (d = b),
        (e = (e + g + mm[l] + c[h]) & 4294967295),
        (g = nm[l]),
        (b = (b + (((e << g) | (e >>> (32 - g))) & 4294967295)) & 4294967295),
        (e = k);
    a.oa[0] = (a.oa[0] + e) & 4294967295;
    a.oa[1] = (a.oa[1] + b) & 4294967295;
    a.oa[2] = (a.oa[2] + d) & 4294967295;
    a.oa[3] = (a.oa[3] + f) & 4294967295;
  }
  function Ql(a, b, c) {
    c || (c = b.length);
    a.total += c;
    for (var d = 0; d < c; ++d)
      (a.buffer[a.mc++] = b[d]), 64 == a.mc && (Sl(a, a.buffer), (a.mc = 0));
  }
  function Rl(a) {
    var b = Array(16),
      c = 8 * a.total,
      d = a.mc;
    Ql(a, a.padding, 56 > d ? 56 - d : 64 - (d - 56));
    for (var e = 56; 64 > e; ++e) (a.buffer[e] = c & 255), (c >>>= 8);
    Sl(a, a.buffer);
    for (e = d = 0; 4 > e; ++e)
      for (c = 0; 32 > c; c += 8) b[d++] = (a.oa[e] >> c) & 255;
    return b;
  }
  var Ol = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 53, 54, 55, 56, 57, 58,
      59, 60, 61, 62, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
      12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 0, 0, 0, 0,
      64, 0, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
      44, 45, 46, 47, 48, 49, 50, 51, 52, 0, 0, 0, 0, 0,
    ],
    nm = [
      7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20,
      5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4,
      11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6,
      10, 15, 21,
    ],
    mm = [
      3614090360, 3905402710, 606105819, 3250441966, 4118548399, 1200080426,
      2821735955, 4249261313, 1770035416, 2336552879, 4294925233, 2304563134,
      1804603682, 4254626195, 2792965006, 1236535329, 4129170786, 3225465664,
      643717713, 3921069994, 3593408605, 38016083, 3634488961, 3889429448,
      568446438, 3275163606, 4107603335, 1163531501, 2850285829, 4243563512,
      1735328473, 2368359562, 4294588738, 2272392833, 1839030562, 4259657740,
      2763975236, 1272893353, 4139469664, 3200236656, 681279174, 3936430074,
      3572445317, 76029189, 3654602809, 3873151461, 530742520, 3299628645,
      4096336452, 1126891415, 2878612391, 4237533241, 1700485571, 2399980690,
      4293915773, 2240044497, 1873313359, 4264355552, 2734768916, 1309151649,
      4149444226, 3174756917, 718787259, 3951481745,
    ];
  function om() {
    this.l = 150;
  }
  H(om, N);
  om.prototype.bold = function (a, b) {
    b = yi(b.replace(ci, ""));
    a = yi(Ai(a, !0));
    if (Bi(b, a)) return a + "<b>" + b.substr(a.length) + "</b>";
    for (
      var c = "", d = [], e = b.length - 1, f = 0, g = -1, h;
      (h = b.charAt(f));
      ++f
    )
      " " == h || "\t" == h
        ? c.length && (d.push({ t: c, jc: g, e: f + 1 }), (c = ""), (g = -1))
        : ((c += h),
          -1 == g ? (g = f) : f == e && d.push({ t: c, jc: g, e: f + 1 }));
    a = a.split(/\s+/);
    f = {};
    for (c = 0; (e = a[c++]); ) f[e] = 1;
    g = -1;
    a = [];
    h = d.length - 1;
    for (c = 0; (e = d[c]); ++c)
      f[e.t]
        ? ((e = -1 == g),
          c == h ? a.push({ jc: e ? c : g, e: c }) : e && (g = c))
        : -1 < g && (a.push({ jc: g, e: c - 1 }), (g = -1));
    if (!a.length) return "<b>" + b + "</b>";
    c = "";
    for (f = e = 0; (g = a[f]); ++f)
      (h = d[g.jc].jc) && (c += "<b>" + b.substring(e, h - 1) + "</b> "),
        (e = d[g.e].e),
        (c += b.substring(h, e));
    e < b.length && (c += "<b>" + b.substring(e) + "</b> ");
    return c;
  };
  function pm() {
    this.l = 146;
  }
  H(pm, N);
  function qm(a) {
    JSON.parse('"\\u30' + a.split(",").join("\\u30") + '"');
  }
  qm(
    "02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C"
  );
  qm("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC");
  qm("D1,D4,D7,DA,DD");
  qm(
    "F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC"
  );
  qm("D1__,D4__,D7__,DA__,DD");
  qm("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB");
  qm("CF,D2,D5,D8,DB");
  function rm() {
    this.l = 116;
    this.ka = !0;
    this.isDarkTheme = !!document.body.dataset.dt;
  }
  y(rm, N);
  m = rm.prototype;
  m.Aa = function (a, b) {
    var c = this.isDarkTheme ? "#202124" : "#fff",
      d = this.isDarkTheme ? "#3c4043" : "#ccc",
      e = this.isDarkTheme ? "#5f6368" : "#d9d9d9";
    this.ca = a.yc();
    b.addRule(".sbdd_a", (zj ? "margin-top:-1px;" : "") + "z-index:989");
    b.addRule(".sbdd_a[dir=ltr] .fl, .sbdd_a[dir=rtl] .fr", "float:left");
    b.addRule(".sbdd_a[dir=ltr] .fr, .sbdd_a[dir=rtl] .fl", "float:right");
    zj
      ? b.addRule(
          ".sbdd_b",
          "background:" +
            c +
            ";border:1px solid " +
            (d + ";border-top-color:") +
            (e + ";") +
            b.prefix("border-radius:0 0 3px 3px;") +
            "cursor:default"
        )
      : b.addRule(
          ".sbdd_b",
          "background:" +
            c +
            ";border:1px solid " +
            (d + ";border-top-color:") +
            (e + ";") +
            b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);") +
            "cursor:default"
        );
    b.addRule(
      ".sbdd_c",
      "border:0;display:block;position:absolute;top:0;z-index:988"
    );
  };
  m.W = function (a) {
    this.M = a.get(130);
    a.get(115);
    this.o = a.get(118);
    this.H = a.get(117);
    this.ea = a.i.getId();
  };
  m.ma = function (a) {
    this.config_ = a;
  };
  m.wb = function (a) {
    this.g = P();
    this.g.className = "gstl_" + this.ea + " sbdd_a";
    Pk(this.g, !1);
    this.N = this.g;
    this.J = P("fl");
    this.g.appendChild(this.J);
    this.C = P();
    this.g.appendChild(this.C);
    this.s = P("sbdd_b");
    this.C.appendChild(this.s);
    this.va = P();
    this.C.appendChild(this.va);
    this.config_.je &&
      ((this.i = O("iframe", "gstl_" + this.ea + " sbdd_c")),
      Pk(this.i, !1),
      (this.config_.Qa || document.body).appendChild(this.i));
    if ((this.m = this.config_.sf))
      "number" === typeof this.m &&
        ((this.m += this.config_.vc[2]), (this.m -= sm(this))),
        tm(this, this.g, this.m);
    um(this);
    (a.Qa || document.body).appendChild(this.g);
    a = this.H;
    var b = E(this.Od, this);
    Al(a, a.g, 8, b);
  };
  m.X = function (a) {
    this.config_ = a;
    this.g.style.position = a.Yb;
  };
  m.getHeight = function () {
    this.D || (this.D = this.s ? Math.max(this.s.offsetHeight, 0) : 0);
    return this.D;
  };
  m.Od = function () {
    this.D = 0;
    um(this);
    if (this.i) {
      var a = this.config_.Qd[0],
        b = this.i.style;
      "relative" != this.config_.Yb &&
        ((b.top = this.g.style.top),
        (b.left = this.g.offsetLeft + this.J.offsetWidth + "px"));
      a = this.getHeight() + a;
      this.i.style.height = Math.max(a, 0) + "px";
      tm(this, this.i, this.s.offsetWidth);
    }
    this.u && nl(this.u.g);
  };
  function um(a) {
    var b, c;
    if ((c = a.u)) (c = a.u.g), (c = c.config_.cg || c.J == c.H ? c.jb : null);
    var d = (b = c) ? b.offsetWidth : vm(a.o.m);
    var e = a.m;
    c = sm(a);
    e
      ? "string" === typeof e && (e = null)
      : a.da || !a.ka
      ? (a.C.style.display = "inline-block")
      : ((a.C.style.display = ""),
        (e = d + a.config_.vc[2] - c),
        tm(a, a.g, e));
    if ("relative" != a.config_.Yb) {
      var f = ("rtl" == fg()) != ("rtl" == a.G),
        g = a.config_.Qa;
      var h = { eb: 0, Qc: 0 };
      if (f || !g || g == document.body || a.config_.ce)
        (h = Lj(a.o.m.H)), b && (h.eb = Lj(b).eb);
      b = h;
      h = e;
      e = a.config_.vc;
      g = e[1];
      e = e[0];
      e = b.Qc + a.o.getHeight() + e;
      if ("right" == a.ia) {
        h = ("rtl" == fg()) != ("rtl" == a.G);
        var k = a.config_.Qa;
        g = -g;
        if (h || !k || k == document.body)
          g +=
            (Uj(a.g) || window).document.documentElement.clientWidth - d - b.eb;
        d = g;
        h = e;
        b = void 0;
      } else
        (b = b.eb + g),
          "center" == a.ia && h && (b += (d - h) / 2),
          (h = e),
          (d = void 0);
      e = { eb: 0, Qc: 0 };
      "absolute" == a.config_.Yb &&
        a.config_.Qa &&
        a.config_.Qa != document.body &&
        (f || a.config_.ce) &&
        (e = Lj(a.config_.Qa));
      g = a.g.style;
      g.top = h - e.Qc + "px";
      g.left = g.right = "";
      void 0 != b
        ? (g.left = b + c - e.eb + "px")
        : ((b = 0),
          a.config_.Qa &&
            f &&
            (b = document.body.clientWidth - (e.eb + a.config_.Qa.offsetWidth)),
          (g.right = d + c - b + "px"));
    }
  }
  function tm(a, b, c) {
    "number" === typeof c
      ? 0 < c &&
        (a.config_.qh
          ? (b.style.width = c + "px")
          : (b.style.minWidth = c + "px"))
      : (b.style.width = c);
  }
  function Pk(a, b) {
    a && (a.style.display = b ? "" : "none");
  }
  function Qk(a, b) {
    if (a.G != b) {
      a.G = b;
      var c = a.config_.Qa;
      c &&
        c != document.body &&
        (c.style.textAlign = "rtl" == b ? "right" : "left");
      Pj(a.g, b);
    }
  }
  function sm(a) {
    return a.M && a.M.i() && ((a = a.o.m.D.offsetWidth), "number" === typeof a)
      ? a
      : 0;
  }
  function wm() {
    this.l = 119;
    this.ca = !1;
    this.s = ti(0);
    this.ia = -1;
    this.ka = !1;
    this.isDarkTheme = !!document.body.dataset.dt;
  }
  y(wm, N);
  m = wm.prototype;
  m.Aa = function (a, b) {
    var c = this.isDarkTheme ? "#202124" : "#fff";
    this.G = a;
    this.g = a.fd();
    Bj(this.g, "combobox");
    Cj(this.g, "haspopup", !1);
    Cj(this.g, "autocomplete", "list");
    this.Uc = a.yc();
    a.Tc() ||
      (b.addRule(
        ".sbib_a",
        "background:" + c + ";" + b.prefix("box-sizing:border-box;")
      ),
      (a = (yj && uj) || fj ? 6 : 5),
      b.addRule(
        ".sbib_b",
        b.prefix("box-sizing:border-box;") +
          "height:100%;overflow:hidden;padding:" +
          a +
          "px 9px 0"
      ),
      b.addRule(".sbib_c[dir=ltr]", "float:right"),
      b.addRule(".sbib_c[dir=rtl]", "float:left"),
      b.addRule(
        ".sbib_d",
        b.prefix("box-sizing:border-box;") +
          "height:100%;unicode-bidi:embed;white-space:nowrap"
      ),
      b.addRule(".sbib_d[dir=ltr]", "float:left"),
      b.addRule(".sbib_d[dir=rtl]", "float:right"),
      rj && b.addRule(".sbib_a input::-ms-clear", "display: none"),
      b.addRule(".sbib_a,.sbib_c", "vertical-align:top"));
  };
  m.W = function (a) {
    this.i = a.get(118);
    this.m = a.get(117);
    this.da = a.get(128);
    this.L = a.get(173);
    this.Nb = !!a.get(136);
    this.Wc = a.i.getId();
  };
  m.ma = function (a) {
    this.config_ = a;
    this.M = a.dc;
    this.N = a.tg;
    this.ad = a.Wd;
    this.u = Mj(this.g);
    this.Sc();
    var b = this;
    fj &&
      Al(
        this.m,
        this.g,
        "beforedeactivate",
        function (c) {
          b.ka && ((b.ka = !1), (c.Cc = !0));
        },
        10
      );
    a = (Kc() || J("iPad") || J("iPod")) && vj;
    sj && xm(this);
    (wj || a) && ym(this);
    this.H = this.g;
  };
  m.wb = function (a) {
    var b = !!a.xf[130];
    if (this.Nb || gl(this.i) || b || a.Ff)
      (this.C = this.G.get("gs_id"))
        ? (b && (this.D = this.G.get("sb_chc")),
          (this.o = this.G.get("sb_ifc")))
        : ((this.C = P("gstl_" + this.Wc + " sbib_a")),
          (a = this.C.style),
          this.N && (a.width = this.N + "px"),
          this.M && (a.height = this.M + "px"),
          (a = this.g.style),
          (a.border = "none"),
          (a.padding = tj || fj ? "0 1px" : "0"),
          (a.margin = "0"),
          (a.height = "auto"),
          (a.width = "100%"),
          (this.g.className = this.config_.ld),
          b &&
            ((this.D = P("sbib_d")),
            (this.D.id = this.G.getId("sb_chc")),
            this.C.appendChild(this.D)),
          gl(this.i) &&
            this.L &&
            ((this.L.g.className += " sbib_c"),
            (b = this.L),
            (a = this.Uc),
            b.s != a && (b.g.dir = b.s = a),
            this.C.appendChild(this.L.g)),
          (this.o = P("sbib_b")),
          (this.o.id = this.G.getId("sb_ifc")),
          this.C.appendChild(this.o),
          zm(this, this.C, this.o)),
        this.config_.Dd &&
          this.g &&
          this.o &&
          (this.g.removeAttribute("role"),
          Bj(this.o, "combobox"),
          this.g.removeAttribute("aria-haspopup"),
          Cj(this.o, "haspopup", !0)),
        this.config_.Wa &&
          this.g &&
          ((b = this.G.getId("sbsg")),
          Cj(this.g, "controls", b),
          this.config_.Dd && this.o
            ? (Cj(this.o, "haspopup", "grid"), Cj(this.o, "owns", b))
            : Cj(this.g, "haspopup", "grid")),
        this.config_.eh || this.config_.pf || Am(this, this.C),
        (this.H = this.C);
    this.ad &&
      ((b = E(this.Be, this)),
      Al(this.m, this.g, "blur", b, 10),
      (b = E(this.Je, this)),
      Al(this.m, this.g, "focus", b, 10),
      (this.Tb = !0));
    b = this.m;
    a = E(this.Yf, this);
    Al(b, b.g, 8, a);
    Bm(this);
  };
  m.X = function (a) {
    this.config_ = a;
    this.g.setAttribute("autocomplete", "off");
    this.g.setAttribute("spellcheck", !1);
    this.g.style.outline = a.xe ? "" : "none";
    this.Ob = this.g.value;
    this.Tb && this.Je();
    Cm(this);
  };
  m.Na = function () {
    this.Tb && this.Be();
    Dm(this);
  };
  function zm(a, b, c) {
    Dm(a);
    c || (c = b);
    a.g.parentNode.replaceChild(b, a.g);
    c.appendChild(a.g);
    a.u &&
      a.config_.Sg &&
      (fj || sj
        ? Gd(function () {
            a.g.focus();
            Kj(a.g, a.s.cc());
          })
        : a.g.focus());
    Cm(a);
  }
  m.getHeight = function () {
    var a = this.H ? this.H.offsetHeight : 0;
    this.M > a && (a = this.M);
    return a;
  };
  function vm(a) {
    return a.N ? a.N : a.H ? a.H.offsetWidth : 0;
  }
  m.select = function () {
    this.g.select();
    this.Sc();
  };
  function fl(a) {
    xj && (a.g.value = "");
    a.g.value = a.i.g;
    xj && (a.g.value = a.g.value);
    dl(a);
  }
  function Em(a) {
    a.u && (a.g.blur(), (a.u = !1));
  }
  m.clear = function () {
    this.g.value = "";
  };
  function dl(a) {
    if (a.u) {
      var b = a.g.value.length;
      a.s = ti(b);
      Kj(a.g, b);
    }
  }
  function Am(a, b) {
    Al(a.m, b, "mouseup", function () {
      a.g.focus();
    });
  }
  function Bm(a) {
    function b(e) {
      Al(a.m, a.g, e, E(a.He, a), 10, c);
    }
    Al(a.m, a.g, "keydown", E(a.Wf, a));
    (tj || a.config_.kf) && Al(a.m, a.g, "keypress", E(a.Xf, a));
    Al(a.m, a.g, "select", E(a.Sc, a), 10);
    var c = !1;
    b("mousedown");
    b("keyup");
    b("keypress");
    c = !0;
    b("mouseup");
    b("keydown");
    b("focus");
    b("blur");
    b("cut");
    b("paste");
    b("input");
    var d = E(a.Tf, a);
    Al(a.m, a.g, "compositionstart", d);
    Al(a.m, a.g, "compositionend", d);
  }
  m.Tf = function (a) {
    a = a.type;
    "compositionstart" == a
      ? ((a = this.i), 1 != a.G && (a.G = !0))
      : "compositionend" == a && ((a = this.i), 0 != a.G && (a.G = !1));
  };
  m.Wf = function (a) {
    var b = a.keyCode;
    this.ia = b;
    var c = (uj || sj) && (38 == b || 40 == b) && Yk(this.da),
      d = 13 == b,
      e = 27 == b;
    this.ea = !1;
    9 != b || a.shiftKey || (this.ea = Xk(this.i));
    if (d) {
      (b = Zk(this.da)) && b.getType();
      var f = this;
      Gd(function () {
        var g = f.da,
          h = a.shiftKey ? 4 : 3;
        null != g.i && Zk(g).getType();
        g = g.u;
        ok(g.H, g.g, h);
      });
    }
    if (c || d || e || this.ea) a.Cc = !0;
  };
  m.Xf = function (a) {
    var b = a.keyCode,
      c = 9 == b && this.ea;
    if (13 == b || 27 == b || c) a.Cc = !0;
  };
  m.He = function (a) {
    if (!this.Pb) {
      var b = a.lc;
      if (
        !(b.indexOf("key") || a.ctrlKey || a.altKey || a.shiftKey || a.metaKey)
      )
        a: if (((a = a.keyCode), "keypress" != b)) {
          var c = 38 == a || 40 == a;
          if ("keydown" == b) {
            var d = this.i;
            var e = 229 == a;
            (d.N = e) && d.D.add(4);
            if (c) break a;
          } else if (((d = a != this.ia), (this.ia = -1), !c || d)) break a;
          switch (a) {
            case 27:
              a = this.i;
              a.config_.Yg
                ? ok(a.H, a.g, 5)
                : (a.i.isVisible() ? ((c = a.i), xk(c.G), Wk(c)) : Em(a.m),
                  kk(a));
              break;
            case 37:
              a = this.i;
              hl(a, "rtl");
              if (
                il(a) &&
                ((c = a.i),
                null !== c.i &&
                  ((a = c.o), (c = Fm(a, c.i)) && !(1 >= c.length)))
              )
                for (d = Dj(a.u), e = 1; e < c.length; e++)
                  c[e].id === d.id && Ej(a.u, c[e - 1]);
              break;
            case 39:
              a = this.i;
              hl(a, "ltr");
              if (
                il(a) &&
                ((c = a.i), null !== c.i && ((a = c.o), (c = Fm(a, c.i))))
              )
                for (d = Dj(a.u), e = 0; e < c.length - 1; e++)
                  c[e].id === d.id && Ej(a.u, c[e + 1]);
              break;
            case 38:
              this.i.i.Ne();
              break;
            case 40:
              a = this.i;
              c = this.s;
              Yk(a.i) ? a.i.Me() : bl(a.i, c);
              break;
            case 46:
              a = this.i;
              a.g &&
                this.s.he() == a.g.length &&
                (a.M && a.M.clear(), a.config_.Xg && ok(a.H, a.g, 2));
              break;
            case 8:
              (a = this.i), a.C && 0 == this.s.cc() && a.C.g();
          }
        }
      this.Sc();
      $k(this.i, this.g.value, this.s, b);
    }
  };
  m.Sf = function () {
    this.u = !0;
    Rk(this.i.s, 10);
  };
  m.Qf = function () {
    this.u = !1;
    Vk(this.i);
  };
  function Cm(a) {
    a.ca ||
      ((a.ca = !0),
      (a.jb = E(a.Sf, a)),
      Al(a.m, a.g, "focus", a.jb, 99),
      (a.va = E(a.Qf, a)),
      Al(a.m, a.g, "blur", a.va, 99));
  }
  function Dm(a) {
    a.ca && ((a.ca = !1), El(a.m, a.g, a.jb), El(a.m, a.g, a.va));
  }
  m.Je = function () {
    this.J ||
      ((this.J = new ie(this.config_.Og || 50)),
      this.J.ya("tick", this.Ng, void 0, this),
      this.J.start());
  };
  m.Be = function () {
    this.J && (je(this.J), (this.J = null));
  };
  m.Ng = function () {
    this.He({ lc: "polling" });
  };
  m.Yf = function () {
    if (sj) {
      var a = this.g,
        b = document.createEvent("KeyboardEvent");
      b.initKeyEvent &&
        (b.initKeyEvent("keypress", !0, !0, null, !1, !1, !0, !1, 27, 0),
        a.dispatchEvent(b));
    }
  };
  m.Sc = function () {
    if (this.u) {
      a: {
        var a = this.g;
        try {
          if ("selectionStart" in a) {
            var b = a.selectionStart;
            var c = a.selectionEnd;
          } else {
            var d = a.createTextRange(),
              e = Nj(a).selection.createRange();
            d.inRange(e) &&
              (d.setEndPoint("EndToStart", e),
              (b = d.text.length),
              d.setEndPoint("EndToEnd", e),
              (c = d.text.length));
          }
          if (void 0 !== b) {
            var f = ti(b, c);
            break a;
          }
        } catch (g) {}
        f = null;
      }
      f && (this.s = f);
    }
  };
  function xm(a) {
    var b;
    a.m.ya(window, "pagehide", function () {
      a.Pb = !0;
      b = a.g.value;
    });
    a.m.ya(window, "pageshow", function (c) {
      a.Pb = !1;
      (c.persisted || void 0 !== b) && el(a.i, b);
    });
  }
  function ym(a) {
    a.m.ya(window, "pageshow", function (b) {
      b.persisted && a.Ob && el(a.i, a.Ob);
    });
  }
  function Ok(a, b) {
    a.config_.Dd && a.o ? Cj(a.o, "expanded", b) : Cj(a.g, "haspopup", b);
    b || a.g.removeAttribute("aria-activedescendant");
  }
  function Gm() {
    this.l = 129;
    this.M = {};
    this.ca = [];
    this.ea = [];
    this.ia = [];
    this.m = [];
    this.ka = 0;
    this.isDarkTheme = !!document.body.dataset.dt;
  }
  y(Gm, N);
  m = Gm.prototype;
  m.Aa = function (a, b) {
    var c = this.isDarkTheme ? "#202124" : "#fff";
    this.N = a;
    this.u = a.fd();
    this.J = a.yc();
    zj || b.addRule(".sbsb_a", "background:" + c);
    b.addRule(".sbsb_b", "list-style-type:none;margin:0;padding:0");
    zj ||
      b.addRule(".sbsb_c", "line-height:22px;overflow:hidden;padding:0 10px");
    b.addRule(".sbsb_d", "background:#eee");
    b.addRule(".sbsb_e", "height:1px;background-color:#e5e5e5");
    b.addRule("#sbsb_f", "font-size:11px;color:#36c;text-decoration:none");
    b.addRule(
      "#sbsb_f:hover",
      "font-size:11px;color:#36c;text-decoration:underline"
    );
    b.addRule(
      ".sbsb_g",
      "text-align:center;padding:8px 0 7px;position:relative"
    );
    b.addRule(
      ".sbsb_h",
      "font-size:15px;height:28px;margin:0.2em" +
        (uj ? ";-webkit-appearance:button" : "")
    );
    b.addRule(
      ".sbsb_i",
      "font-size:13px;color:#36c;text-decoration:none;line-height:100%"
    );
    b.addRule(".sbsb_i:hover", "text-decoration:underline");
    b.addRule(".sbsb_j", "padding-top:1px 0 2px 0;font-size:11px");
    b.addRule(".sbdd_a[dir=ltr] .sbsb_j", "padding-right:4px;text-align:right");
    b.addRule(".sbdd_a[dir=rtl] .sbsb_j", "padding-left:4px;text-align:left");
    zj &&
      (b.addRule(".sbsb_c[dir=ltr] .sbsb_k", "padding:10px 3px 11px 8px"),
      b.addRule(".sbsb_c[dir=rtl] .sbsb_k", "padding:10px 8px 11px 3px"));
  };
  m.W = function (a) {
    this.G = a.get(128);
    this.s = a.get(118);
    this.L = a.get(121);
    a = Si(a, 152);
    var b = {};
    if (a) for (var c, d = 0; (c = a[d++]); ) b[c.G] = c;
    this.va = b;
  };
  m.ma = function (a) {
    this.config_ = a;
  };
  m.wb = function (a) {
    this.o = P();
    a.Wa
      ? ((this.g = P("sbsb_b")),
        Bj(this.g, "grid"),
        (this.g.id = this.N.getId("sbsg")))
      : ((this.g = O("ul", "sbsb_b")), Bj(this.g, "listbox"));
    this.o.appendChild(this.g);
  };
  m.X = function (a) {
    this.config_ = a;
    var b = a.Ge;
    b && (this.jb = this.N.de(b));
    this.o.className = a.jh || "sbsb_a";
    this.da = a.gh || "sbsb_d";
  };
  function Fm(a, b) {
    if (a.config_.Wa && (a = a.m[b]))
      return a.g().parentNode.querySelectorAll("[role=gridcell]");
  }
  function wl(a, b) {
    (b = a.m[b]) && Eg(b.g().parentNode, a.da);
  }
  m.clear = function () {
    for (var a, b, c; (c = this.ca.pop()); )
      (a = c.getType()),
        (b = this.M[a]) || (b = this.M[a] = []),
        b.push(c),
        (a = c.g()),
        a.parentNode.removeChild(a);
    for (; (a = this.g.firstChild); )
      (a = this.g.removeChild(a)),
        a.l ? this.ia.push(a) : a != this.D && a != this.C && this.ea.push(a);
    this.D && (this.D.style.display = "none");
    this.C && (this.C.style.display = "none");
    this.m = [];
  };
  function ol(a, b) {
    var c = b.getType(),
      d = a.va[c];
    if (!d) return !1;
    (c = (c = a.M[c]) && c.pop()) || (c = Hm(a, d));
    d.Mb(b, c);
    a.ca.push(c);
    var e = c.g();
    if (a.config_.Wa)
      for (
        var f = e.querySelectorAll('[role="gridcell"]'), g = 0;
        g < f.length;
        g++
      )
        f[g].id = e.id + ("x" + g);
    f = Im(a);
    f.appendChild(e);
    if (void 0 !== b.l) {
      a.m.push(c);
      g = a.H;
      var h = b.l();
      a.config_.jg &&
        ((e.onmouseover = function () {
          tl(a.G, h);
        }),
        (e.onmouseout = function () {
          lk(a.G);
        }));
      var k = c.g();
      k.onclick = function (l) {
        Em(a.s.m);
        b.o && al(a.s, b.g);
        lk(a.G);
        var n = a.G;
        n.i = n.g = h;
        l = l || Uj(k).event;
        d.Lb(l, b, a.L);
      };
    } else g = a.J;
    Pj(f, g);
    return !0;
  }
  function Hm(a, b) {
    b = b.Ub(a.L);
    var c = b.g();
    Dg(c, "sbse");
    c.id = "sbse" + a.ka;
    (c = b.g()) && !a.config_.Wa && Bj(c, "option");
    a.ka++;
    return b;
  }
  function sl(a, b, c, d) {
    var e = O("input");
    e.type = "button";
    e.value = zi(b);
    e.onclick = function () {
      ok(a.L, a.s.g, d);
    };
    if (a.config_.bg) {
      b = "lsb";
      var f = O("span");
      var g = O("span");
      f.className = "ds";
      g.className = "lsbb";
      f.appendChild(g);
      g.appendChild(e);
    } else (b = "sbsb_h"), (f = e);
    e.className = b;
    c.appendChild(f);
  }
  function Im(a) {
    var b = a.ea.pop();
    if (b) return a.g.appendChild(b), b;
    a.config_.Wa
      ? ((b = P()), Bj(b, "row"))
      : ((b = O("li")), Bj(b, "presentation"));
    b.className = "sbsb_c " + a.config_.Oc;
    b.onmousedown = E(a.wd, a);
    a.g.appendChild(b);
    return b;
  }
  m.wd = function (a) {
    a = a || Uj(this.o).event;
    a.stopPropagation
      ? (a.stopPropagation(),
        window.Polymer && window.Polymer.Element && a.preventDefault())
      : fj && !tj && (this.s.m.ka = !0);
    return !1;
  };
  function nl(a) {
    if (a.i) {
      var b = 0,
        c = a.s.m.D;
      c && (b = c.offsetWidth);
      b = vm(a.s.m) - b - 3;
      0 < b && (a.i.style.width = b + "px");
    }
  }
  function Jm() {
    this.l = 147;
  }
  H(Jm, N);
  Jm.prototype.Aa = function (a) {
    this.u = a.ee() || document.body;
  };
  Jm.prototype.ma = function (a) {
    this.config_ = a;
  };
  Jm.prototype.getHeight = function () {
    this.g || pl(this);
    ql(this);
    this.i || (Oj(this.g, "|"), (this.i = this.g.offsetHeight));
    return this.i;
  };
  function pl(a) {
    var b = P(a.config_.ld),
      c = b.style;
    c.background = "transparent";
    c.color = "#000";
    c.padding = 0;
    c.position = "absolute";
    c.whiteSpace = "pre";
    a.g = b;
    a.g.style.visibility = "hidden";
    a.u.appendChild(a.g);
  }
  function ql(a) {
    var b = F();
    if (!a.o || a.o + 3e3 < b) {
      a.o = b;
      b = a.g;
      var c = Uj(b);
      b = (b = c.getComputedStyle ? c.getComputedStyle(b, "") : b.currentStyle)
        ? b.fontSize
        : null;
      (a.s && b == a.s) || ((a.m = {}), (a.i = null), (a.s = b));
    }
  }
  function Km() {
    Ni.call(this);
    this.set(191, new lm());
    this.set(150, new om());
    this.set(146, new pm());
    this.set(147, new Jm());
    Oi(this, 149, new Ik());
    this.set(145, new yl());
    this.set(117, new zl());
    this.set(494, new Gl());
    this.set(374, new Hl());
    this.set(120, new Il());
    this.set(121, new Vl());
    this.set(553, new Yl());
    this.set(124, new fm());
    this.set(125, new gm());
    this.set(123, new $l());
    this.set(126, new im());
    this.set(127, new km());
    this.set(115, new Lk());
    this.set(118, new Tk());
    this.set(128, new kl());
    Oi(this, 154, new xl());
    this.set(116, new rm());
    this.set(119, new wm());
    this.set(129, new Gm());
  }
  y(Km, Ni);
  function Lm() {
    this.l = 347;
    this.i = [];
    this.m = 0;
  }
  y(Lm, N);
  Lm.prototype.W = function (a) {
    this.o = a.get(120);
  };
  Lm.prototype.X = function (a) {
    this.s = "//" + (a.Cg || "www." + a.sc) + "/gen_204?";
    this.g = a.fh || {};
  };
  function Wl(a, b) {
    b = Jl(a.o, b);
    for (var c in a.g) c in b || (b[c] = a.g[c]);
    c = vi(b, !0);
    Mm(a, a.s + c);
  }
  function Mm(a, b) {
    var c = new Image(),
      d = a.m,
      e = a.i;
    c.onerror =
      c.onload =
      c.onabort =
        function () {
          try {
            delete e[d];
          } catch (f) {}
        };
    a.i[a.m++] = c;
    c.src = b;
  }
  function Nm() {
    this.l = 151;
    this.g = !0;
    this.i = {};
  }
  y(Nm, N);
  m = Nm.prototype;
  m.W = function (a) {
    this.m = a.get(150);
  };
  m.ma = function () {
    this.s = si([0]);
  };
  m.X = function (a) {
    this.o = a.gd;
    this.g = a.Vd;
  };
  m.Na = function () {
    this.g = !1;
  };
  m.update = function (a) {
    if (this.g) {
      var b = a.g;
      if (b.length) {
        var c = a.l.l;
        a: {
          var d = Number.MAX_VALUE;
          for (var e, f = 0; (e = b[f++]); ) {
            if (!this.s[e.getType()]) {
              d = -1;
              break a;
            }
            e = e.g;
            d = Math.min(e.length, d);
          }
        }
        if (-1 != d) {
          var g = b[0].g;
          if (Bi(g, c, !0))
            for (f = c.length + 1; f <= d; ) {
              c = null;
              for (e = 0; (g = b[e++]); ) {
                g = g.g;
                if (f > g.length) return;
                g = g.substr(0, f);
                if (!c) c = g;
                else if (c != g) return;
              }
              this.i[c] = a;
              ++f;
            }
        }
      }
    }
  };
  m.get = function (a) {
    if (this.g) {
      var b = this.i[a.l];
      if (b) {
        for (
          var c = a.D,
            d = a.l,
            e = b.i,
            f = this.o || !e.g.k,
            g = [],
            h,
            k,
            l = b.g,
            n,
            p = 0;
          (n = l[p++]);

        )
          (k = n.g),
            (h = f ? this.m.bold(c, k) : yi(k)),
            g.push(new fi(h, k, n.l(), n.getType(), n.i || [], n.m));
        delete this.i[d];
        return new Li(a, g, e, !0, b.m, !1);
      }
    }
    return null;
  };
  m.reset = function () {
    this.i = {};
  };
  function Om() {
    this.l = 133;
    this.i = {};
    this.g = [];
    this.o = this.m = 0;
  }
  y(Om, N);
  Om.prototype.W = function (a) {
    this.g = Si(a, 151);
    this.g.sort(Pm);
  };
  Om.prototype.X = function () {
    this.o = this.m = 0;
  };
  Om.prototype.get = function (a) {
    var b = this.i[a.i];
    if (b) ++this.m;
    else if (this.g)
      for (var c = 0; c < this.g.length; ++c)
        if ((b = this.g[c].get(a))) {
          b && b.m && (this.i[b.l.i] = b);
          ++this.o;
          break;
        }
    return b ? new Li(a, b.g, b.i, b.o, b.m, b.u) : null;
  };
  Om.prototype.has = function (a) {
    return !!this.i[a.i];
  };
  function Pm() {
    return 0;
  }
  function Qm(a) {
    this.l = a;
    this.g = new RegExp("(?:^|\\s+)" + a + "(?:$|\\s+)");
  }
  function Rm(a, b) {
    b && !a.g.test(b.className) && (b.className += " " + a.l);
  }
  function Sm(a, b) {
    b && (b.className = b.className.replace(a.g, " "));
  }
  function Tm() {
    this.l = 570;
    this.m = !1;
  }
  H(Tm, N);
  m = Tm.prototype;
  m.Aa = function (a) {
    this.u = a;
  };
  m.W = function (a) {
    this.s = a.get(117);
    this.C = a.get(118);
  };
  m.ma = function (a) {
    var b = a.Zb;
    if ((this.g = b ? this.u.de(b) : null)) {
      b = this.s;
      var c = E(this.Rf, this);
      Al(b, b.g, 10, c);
      b = this.s;
      c = E(this.Pf, this);
      Al(b, b.g, 11, c);
      Al(this.s, this.g, "mouseover", E(this.Vf, this));
      Al(this.s, this.g, "mouseout", E(this.Uf, this));
      a.dd && (this.o = new Qm(a.dd));
      a.cd && (this.i = new Qm(a.cd));
    }
  };
  m.X = function () {
    this.m = !0;
    this.g && this.C.m.u && this.i && Rm(this.i, this.g);
  };
  m.Na = function () {
    this.m = !1;
    this.g && (this.o && Sm(this.o, this.g), this.i && Sm(this.i, this.g));
  };
  m.Vf = function () {
    this.m && this.o && Rm(this.o, this.g);
  };
  m.Uf = function () {
    this.m && this.o && Sm(this.o, this.g);
  };
  m.Rf = function () {
    this.m && this.i && Rm(this.i, this.g);
  };
  m.Pf = function () {
    this.m && this.i && Sm(this.i, this.g);
  };
  var Um = fa(["//www.google.com/textinputassistant/", "/", "_tia.js"]);
  function Vm() {
    this.l = 160;
  }
  H(Vm, N);
  m = Vm.prototype;
  m.Aa = function (a, b) {
    this.o = a;
    a.Tc() ||
      (b.addRule(
        ".gsok_a",
        "background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;display:inline-block;height:11px;line-height:0;width:19px"
      ),
      b.addRule(".gsok_a img", "border:none;visibility:hidden"));
  };
  m.W = function (a) {
    this.u = a.get(374);
    this.C = a.get(128);
  };
  m.ma = function (a) {
    this.s = !!a.Ac;
    this.D = a.ze;
    this.H = a.Gc;
    this.m = a.Lg;
    this.J = a.Kg;
  };
  m.wb = function () {
    (this.i = this.o.get("gs_ok"))
      ? (this.g = this.i.firstChild)
      : ((this.g = O("img")),
        (this.g.src = this.D + "/tia.png"),
        (this.i = O("span", "gsok_a gsst_e")),
        (this.i.id = this.o.getId("gs_ok")),
        this.i.appendChild(this.g));
    this.g.ds = E(this.qf, this);
    this.g.setAttribute("tia_field_name", this.o.fd().name);
    this.g.setAttribute("tia_disable_swap", !0);
  };
  m.X = function (a) {
    a.hd && (this.s = !!a.Ac);
    this.g.setAttribute("tia_property", a.Ae);
  };
  m.isEnabled = function () {
    return this.s;
  };
  m.ge = function () {
    return { tooltip: this.J };
  };
  m.Pd = function (a) {
    if (!this.G) {
      a = Ed("SCRIPT");
      var b = dg(Um, this.m, this.H);
      Df(a, b);
      document.body.appendChild(a);
      this.G = !0;
      this.u.add(3);
    } else if (this.g.onclick) this.g.onclick(a);
    return !1;
  };
  m.qf = function () {
    var a = this.C;
    xk(a.G);
    Wk(a);
  };
  var Wm = ri++;
  var Xm = fa(["#"]);
  function Ym() {
    this.l = 173;
    this.m = {};
  }
  y(Ym, N);
  m = Ym.prototype;
  m.Aa = function (a, b) {
    this.o = a;
    a.Tc() ||
      (b.addRule(".gsst_a", "display:inline-block"),
      b.addRule(".gsst_a", "cursor:pointer;padding:0 4px"),
      b.addRule(".gsst_a:hover", "text-decoration:none!important"),
      b.addRule(
        ".gsst_b",
        "font-size:16px;padding:0 2px;position:relative;" +
          b.prefix("user-select:none;") +
          "white-space:nowrap"
      ),
      b.addRule(
        ".gsst_e",
        "vertical-align:middle;" + (Vj() + ":" + Wj(0.6) + ";")
      ),
      b.addRule(
        ".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e",
        Vj() + ":" + Wj(0.8) + ";"
      ),
      b.addRule(".gsst_a:active .gsst_e", Vj() + ":" + Wj(1) + ";"));
  };
  m.W = function (a) {
    this.u = a.get(118);
    this.i = Si(a, 160);
  };
  m.ma = function (a) {
    this.C = a.hd;
    this.i.sort(Zm);
  };
  m.wb = function (a) {
    this.g = this.o.get("gs_st");
    if (!this.g) {
      this.g = P("gsst_b");
      this.g.id = this.o.getId("gs_st");
      if ((a = a.dc)) this.g.style.lineHeight = a + "px";
      $m(this);
    }
    an(this);
  };
  m.X = function () {
    if (this.C)
      for (var a = 0, b; (b = this.i[a++]); ) {
        var c = !!this.m[Wm];
        if (b.isEnabled() != c) {
          for (; this.g.hasChildNodes(); ) this.g.removeChild(this.g.lastChild);
          $m(this);
          an(this);
          break;
        }
      }
  };
  function Zm() {
    return 0;
  }
  function $m(a) {
    for (var b, c = 0, d; (d = a.i[c++]); )
      if (d.isEnabled()) {
        b = !0;
        var e = O("a", "gsst_a");
        bn(a, e, d);
        e.appendChild(d.i);
        a.g.appendChild(e);
      }
    a.g.style.display = b ? "" : "none";
  }
  function an(a) {
    a.m = {};
    for (var b = 0, c; (c = a.i[b++]); )
      if (c.isEnabled()) {
        var d = Wm,
          e = c.i.parentNode;
        e.onclick = E(c.Pd, c);
        a.m[d] = e;
        c.ge &&
          ((c = c.ge()),
          c.oi && (d = a.m[d]) && d.style && (d.style.visibility = "hidden"),
          (d = c.tooltip)) &&
          (e.title = d);
      }
  }
  function bn(a, b, c) {
    Af(b, Hf(Xm));
    b.addEventListener("click", function () {
      return !1;
    });
    tj && (b.tabIndex = 0);
    b.onkeydown = function (d) {
      d = d || window.event;
      var e = d.keyCode;
      if (13 == e || 32 == e) c.Pd(d), mk(a.u), Rj(d);
    };
  }
  ri++;
  function cn() {
    this.o = 33;
    this.l = P();
    this.l.className = "gspr_a";
  }
  H(cn, dj);
  cn.prototype.g = function () {
    return this.l;
  };
  function dn() {
    ej.call(this, 33);
  }
  y(dn, ej);
  dn.prototype.Aa = function (a, b) {
    b.addRule(".gspr_a", "padding-right:1px");
  };
  dn.prototype.Ub = function () {
    return new cn();
  };
  dn.prototype.Mb = function (a, b) {
    Bf(b.l, Xf(a.m.g.b || ""));
  };
  dn.prototype.Lb = function (a, b, c) {
    ok(c, b.g, 1);
  };
  function en(a, b) {
    this.o = 0;
    this.u = a;
    this.G = b;
    this.m = P();
    this.l = P("sbqs_a");
    this.m.appendChild(this.l);
    this.D = P("sbqs_c");
    this.m.appendChild(this.D);
  }
  y(en, dj);
  en.prototype.g = function () {
    return this.m;
  };
  function fn(a, b, c, d) {
    Bf(a.D, Fj(b));
    a.C = c;
    d &&
      !a.i &&
      ((a.i = Sj(a.l)),
      (a.i.onclick = E(function (e) {
        Em(this.u.m);
        al(this.u, this.C);
        ok(this.G, this.C, 9);
        return Rj(e);
      }, a)));
    d
      ? (Bf(a.i, Fj(d + " &raquo;")),
        (a.l.style.display = ""),
        Cj(a.l, "hidden", !0))
      : a.i && (a.l.style.display = "none");
  }
  function gn() {
    ej.call(this, 0);
  }
  H(gn, ej);
  m = gn.prototype;
  m.Aa = function (a, b) {
    b.addRule(".sbsb_c[dir=ltr] .sbqs_a", "float:right");
    b.addRule(".sbsb_c[dir=rtl] .sbqs_a", "float:left");
    b.addRule(".sbqs_b", "visibility:hidden");
    b.addRule(".sbsb_d .sbqs_b", "visibility:visible");
    b.addRule(".sbsb_c[dir=ltr] .sbqs_b", "padding-left:5px;");
    b.addRule(".sbsb_c[dir=rtl] .sbqs_b", "padding-right:5px;");
    b.addRule(".sbqs_c", "word-wrap:break-word");
  };
  m.W = function (a) {
    this.g = a.get(118);
  };
  m.X = function (a) {
    this.i = a.Zd ? a.ae : "";
  };
  m.Ub = function (a) {
    return new en(this.g, a);
  };
  m.Mb = function (a, b) {
    fn(b, a.getHtml(), a.g, this.i);
  };
  m.Lb = function (a, b, c) {
    ok(c, b.g, 1);
  };
  function hn(a) {
    Km.call(this);
    Oi(this, 149, new Yi());
    this.set(347, new Lm());
    this.set(133, new Om());
    Oi(this, 151, new Nm());
    this.set(570, new Tm());
    this.set(134, new rk());
    this.set(189, new uk());
    Oi(this, 156, new yk());
    a.ENABLE_DELETE_ICON ? Oi(this, 152, new nk()) : Oi(this, 152, new qk());
    Oi(this, 152, new dn());
    Oi(this, 152, new gn());
    this.set(173, new Ym());
    Oi(this, 160, new Vm());
    this.set(157, new Ak());
    Oi(this, 156, new Bk());
    "zero-prefix" == a.SEARCHBOX_BEHAVIOR_EXPERIMENT &&
      Oi(this, 156, new zk(a));
    var b = a.SBOX_STRINGS || {};
    a.SEARCHBOX_REPORTING &&
      a.SEARCHBOX_COMPONENT &&
      b.SBOX_REPORT_SUGGESTIONS &&
      (Oi(this, 153, new cj()),
      Oi(this, 152, new ck(b.SBOX_REPORT_SUGGESTIONS, a.SEARCHBOX_COMPONENT)));
    a.SEARCHBOX_COMPONENT &&
      (this.set(
        598,
        new Ck(
          a.SEARCHBOX_COMPONENT,
          a.SEARCHBOX_ENABLE_REFINEMENT_SUGGEST,
          a.SEARCHBOX_ZERO_TYPING_SUGGEST_USE_REGULAR_SUGGEST
        )
      ),
      Oi(this, 156, new Hk()));
  }
  y(hn, Km);
  function jn() {
    return {
      If: function () {
        return {
          clientName: "hp",
          requestIdentifier: "hp",
          sc: "google.com",
          Te: "",
          md: "en",
          Xc: "",
          xd: "",
          videoId: "",
          Jd: "",
          authuser: 0,
          Dg: "",
          Ni: "",
          Pe: null,
          Hd: "",
          Xd: !1,
          Ad: "",
          Lc: "",
          connectionType: 0,
          transport: null,
          Xe: !1,
          Ci: !1,
          lg: !1,
          enableCaching: !0,
          zf: 10,
          hi: 10,
          uf: !0,
          Vd: !0,
          ci: !1,
          Ef: !1,
          xg: !1,
          yg: !1,
          ti: !1,
          hg: !0,
          rf: !1,
          ig: 500,
          hd: !1,
          ag: !0,
          mi: !0,
          Gi: !1,
          Ac: !1,
          Gc: "",
          ze: "//www.google.com/textinputassistant",
          Ae: "",
          Lg: 7,
          ji: !1,
          ki: !1,
          eg: !1,
          dg: !0,
          fg: !1,
          ke: !1,
          Wa: !1,
          Yg: !1,
          Xg: !1,
          Pc: 1,
          ue: !0,
          xc: !1,
          Zd: !1,
          Wd: !1,
          Og: 10,
          gd: !1,
          Sg: !0,
          Qa: document.body,
          gg: !0,
          Ue: null,
          xf: {},
          gi: {},
          Bi: 0,
          Ff: !1,
          mg: !0,
          ub: !1,
          Df: !1,
          dh: !1,
          Ii: null,
          vf: !1,
          Cg: null,
          fh: null,
          bd: !1,
          jg: !0,
          Dd: !1,
          kf: !1,
          Ki: 1,
          xe: !1,
          Zg: "Search",
          ae: "I'm  Feeling Lucky",
          ah: "",
          Bg: "Learn more",
          zd: "Remove",
          yd: "This search was removed from your Web History",
          ni: "",
          bi: "Did you mean:",
          Kg: "",
          Ei: "",
          Qi: "Search by voice",
          Pi: 'Listening for "Ok Google"',
          Oi: 'Say "Ok Google"',
          Zh: "Clear Search",
          dc: 0,
          tg: 0,
          ld: "",
          Oc: "",
          si: !1,
          Yb: "absolute",
          bg: !1,
          je: !1,
          Ge: null,
          cg: !0,
          vc: [0, 0, 0],
          sf: null,
          ih: null,
          Qd: [0],
          Fd: !0,
          We: "",
          jh: "",
          gh: "",
          Zb: null,
          dd: "",
          cd: "",
          Yh: 1,
          qh: !1,
          ce: !1,
          vi: 0,
          eh: !1,
          pf: !1,
          di: !1,
          Pg: !0,
        };
      },
    };
  }
  function kn(a, b, c, d, e) {
    var f = sj ? "-moz-" : fj ? "-ms-" : tj ? "-o-" : uj ? "-webkit-" : "",
      g = ".gstl_" + d,
      h = new RegExp("(\\.(" + e.join("|") + ")\\b)"),
      k = [];
    return {
      addRule: function (l, n) {
        if (b) {
          if (c) {
            l = l.split(",");
            for (var p = [], r = 0, q; (q = l[r++]); )
              (q = h.test(q) ? q.replace(h, g + "$1") : g + " " + q), p.push(q);
            l = p.join(",");
          }
          k.push(l, "{", n, "}");
        }
      },
      gf: function () {
        if (b && k.length) {
          b = !1;
          var l = O("style");
          l.setAttribute("type", "text/css");
          (a || pi).appendChild(l);
          var n = k.join("");
          k = null;
          l.styleSheet
            ? (l.styleSheet.cssText = n)
            : l.appendChild(document.createTextNode(n));
        }
      },
      prefix: function (l, n) {
        var p = l + (n || "");
        f && (p += n ? l + f + n : f + l);
        return p;
      },
    };
  }
  function ln(a, b, c, d) {
    this.i = a;
    this.L = b;
    this.H = c;
    this.J = d;
    this.l = -1;
    this.G = !1;
  }
  m = ln.prototype;
  m.install = function (a) {
    if (!this.G) {
      a = mn(a);
      0 > this.l && (this.l = nn(a));
      var b = Nj(this.i),
        c = on(this),
        d = !!b.getElementById("gs_id" + this.l),
        e = this,
        f = ["gssb_c", "gssb_k", "sbdd_a", "sbdd_c", "sbib_a"];
      a.We && f.push(a.We);
      f = kn(a.Ue, a.gg, a.vf, this.l, f);
      this.C = a.ub;
      this.g = new Pi(
        this.H,
        this.J,
        {
          Tc: function () {
            return d;
          },
          get: function (g) {
            return b.getElementById(g + e.l);
          },
          de: function (g) {
            return b.getElementById(g);
          },
          ee: function () {
            return e.L;
          },
          yc: function () {
            return c;
          },
          getId: function (g) {
            return g + e.l;
          },
          fd: function () {
            return e.i;
          },
        },
        f,
        this,
        a
      );
      this.g.get(347);
      this.u = this.g.get(130);
      this.g.get(115);
      this.m = this.g.get(117);
      this.g.get(123);
      this.g.get(135);
      this.M = this.g.get(118);
      this.ea = this.g.get(119);
      this.N = this.g.get(374);
      this.o = this.g.get(120);
      this.g.get(189);
      this.ca = this.g.get(553);
      this.g.get(419);
      this.g.get(126);
      this.g.get(128);
      this.g.get(139);
      this.da = this.g.get(121);
      a = Uj(this.i);
      this.s = Tj(a);
      this.D = E(this.Ug, this);
      this.m.ya(a, "resize", this.D);
      this.G = !0;
    }
  };
  m.isActive = function () {
    return !!this.g && this.g.isActive();
  };
  function pn(a, b) {
    function c(d) {
      ok(a.da, a.M.g, 12);
      return Qj(d);
    }
    a.m.ya(b, "keyup", function (d) {
      (13 != d.keyCode && 32 != d.keyCode) || c(d);
    });
    a.m.ya(b, "click", c);
  }
  m.getId = function () {
    return this.l;
  };
  m.ub = function () {
    return this.C || (!!this.u && this.u.ub());
  };
  m.Ed = function (a) {
    this.ca.Ed(a);
  };
  function nn(a) {
    a = Uj(a.Ue || pi);
    void 0 == a.nextSearchboxId && (a.nextSearchboxId = 50);
    return a.nextSearchboxId++;
  }
  function on(a) {
    if (a.i)
      for (a = a.i; (a = a.parentNode); ) {
        var b = a.dir;
        if (b) return b;
      }
    return "ltr";
  }
  function mn(a) {
    a = Gi(a);
    var b = a.Gc;
    b ? (a.Gc = b.toLowerCase()) : (a.Ac = !1);
    a.xc && !a.Zd && (a.xc = !1);
    vj || (a.yg = !1);
    return a;
  }
  m.Ug = function () {
    var a = Tj(Uj(this.i));
    if (a.Ye != this.s.Ye || a.me != this.s.me) (this.s = a), Rk(this.m, 8);
  };
  function qn() {
    this.D = "sbhcn";
    this.C = "sbfcn";
    this.G = "gsfi";
    this.i = "gsfs";
    this.u = function () {
      return !0;
    };
    G("ytvoicesearchloggingparams", E(this.Kf, this));
  }
  y(qn, Mi);
  m = qn.prototype;
  m.Kf = function () {
    this.g.N.add(6);
    return Jl(this.g.o, 15);
  };
  m.Md = function (a) {
    Em(this.g.ea);
    this.u(Jl(this.g.o, a)) && this.l.submit();
  };
  m.redirect = function (a) {
    this.L(this.Ld(a));
  };
  m.Ld = function (a) {
    var b = 0 <= a.indexOf("?") ? "&" : "?",
      c;
    (c = Jl(this.g.o)) || (c = Jl(this.g.o));
    c = vi(c);
    return a + b + c;
  };
  m.we = function (a) {
    if (this.o || this.m) {
      if (22 < this.s) {
        var b = (this.s - 22) / 2;
        a.addRule(".sbsb_c", "padding:" + b + "px 24px " + b + "px 10px");
      } else a.addRule(".sbsb_c", "padding:4px 24px 4px 10px");
      this.M
        ? a.addRule(".sbsb_a", "padding: 16px 0 0")
        : a.addRule(".sbsb_a", "padding: 16px 0");
      a.addRule(".sbdd_b", "border-top: 0");
      a.addRule(".sbib_a", "background:transparent");
      a.addRule(".sbib_b", "padding: 0");
    }
    b =
      'background: no-repeat url("data:image/svg+xml;base64, ' +
      window.btoa(
        '<svg fill="#030303" xmlns="http://www.w3.org/2000/svg"><path d="M12.475 14.1253L8.3333 11.5587V5.83366H9.99997V10.6337L13.3583 12.7087L12.475 14.1253ZM18.3333 10.0003C18.3333 14.592 14.5916 18.3337 9.99997 18.3337C5.4083 18.3337 1.66663 14.592 1.66663 10.0003H2.49997C2.49997 14.1337 5.86663 17.5003 9.99997 17.5003C14.1333 17.5003 17.5 14.1337 17.5 10.0003C17.5 5.86699 14.1333 2.50033 9.99997 2.50033C7.34163 2.50033 4.9333 3.86699 3.56663 6.15033C3.47497 6.30033 3.3833 6.45866 3.3083 6.61699C3.29997 6.63366 3.29163 6.65033 3.2833 6.66699H6.66663V7.50033H1.6333V2.50033H2.46663V6.45033C2.49997 6.37533 2.52497 6.30866 2.5583 6.24199C2.64997 6.05866 2.74997 5.89199 2.84997 5.71699C4.34997 3.21699 7.09163 1.66699 9.99997 1.66699C14.5916 1.66699 18.3333 5.40866 18.3333 10.0003Z"/></svg>'
      ) +
      '");';
    a.addRule(
      ".sbpqs_a",
      "display: flex; align-items:center; white-space: pre;"
    );
    a.addRule(".sbpqs_a:before", b);
    b =
      'background: no-repeat url("data:image/svg+xml;base64,' +
      window.btoa(
        '<svg fill="#030303" xmlns="http://www.w3.org/2000/svg"><path d="M17.3917 16.8083L12.7333 12.15C13.625 11.125 14.1667 9.79167 14.1667 8.33333C14.1667 5.10833 11.5583 2.5 8.33333 2.5C5.10833 2.5 2.5 5.10833 2.5 8.33333C2.5 11.5583 5.10833 14.1667 8.33333 14.1667C9.79167 14.1667 11.125 13.625 12.15 12.7417L16.8083 17.4L17.3917 16.8083ZM8.33333 13.3333C5.575 13.3333 3.33333 11.0917 3.33333 8.33333C3.33333 5.575 5.575 3.33333 8.33333 3.33333C11.0917 3.33333 13.3333 5.575 13.3333 8.33333C13.3333 11.0917 11.0917 13.3333 8.33333 13.3333Z"/></svg>'
      ) +
      '");';
    a.addRule(
      ".sbqs_c",
      "display: flex; align-items:center; white-space: pre;"
    );
    a.addRule(".sbqs_c:before", b);
    b =
      'background: no-repeat url("data:image/svg+xml;base64, ' +
      window.btoa(
        '<svg fill="#f1f1f1" xmlns="http://www.w3.org/2000/svg"><path d="M12.475 14.1253L8.3333 11.5587V5.83366H9.99997V10.6337L13.3583 12.7087L12.475 14.1253ZM18.3333 10.0003C18.3333 14.592 14.5916 18.3337 9.99997 18.3337C5.4083 18.3337 1.66663 14.592 1.66663 10.0003H2.49997C2.49997 14.1337 5.86663 17.5003 9.99997 17.5003C14.1333 17.5003 17.5 14.1337 17.5 10.0003C17.5 5.86699 14.1333 2.50033 9.99997 2.50033C7.34163 2.50033 4.9333 3.86699 3.56663 6.15033C3.47497 6.30033 3.3833 6.45866 3.3083 6.61699C3.29997 6.63366 3.29163 6.65033 3.2833 6.66699H6.66663V7.50033H1.6333V2.50033H2.46663V6.45033C2.49997 6.37533 2.52497 6.30866 2.5583 6.24199C2.64997 6.05866 2.74997 5.89199 2.84997 5.71699C4.34997 3.21699 7.09163 1.66699 9.99997 1.66699C14.5916 1.66699 18.3333 5.40866 18.3333 10.0003Z"/></svg>'
      ) +
      '");';
    a.addRule("html[dark] .sbpqs_a:before", b);
    b =
      'background: no-repeat url("data:image/svg+xml;base64, ' +
      window.btoa(
        '<svg fill="#f1f1f1" xmlns="http://www.w3.org/2000/svg"><path d="M17.3917 16.8083L12.7333 12.15C13.625 11.125 14.1667 9.79167 14.1667 8.33333C14.1667 5.10833 11.5583 2.5 8.33333 2.5C5.10833 2.5 2.5 5.10833 2.5 8.33333C2.5 11.5583 5.10833 14.1667 8.33333 14.1667C9.79167 14.1667 11.125 13.625 12.15 12.7417L16.8083 17.4L17.3917 16.8083ZM8.33333 13.3333C5.575 13.3333 3.33333 11.0917 3.33333 8.33333C3.33333 5.575 5.575 3.33333 8.33333 3.33333C11.0917 3.33333 13.3333 5.575 13.3333 8.33333C13.3333 11.0917 11.0917 13.3333 8.33333 13.3333Z"/></svg>'
      ) +
      '");';
    a.addRule("html[dark] .sbqs_c:before", b);
    a.addRule(".sbpqs_a:before", 'height: 20px; width: 20px; content: " ";');
    a.addRule(".sbqs_c:before", 'height: 20px; width: 20px; content: " ";');
    a.addRule(
      ".sbpqs_c",
      "display: flex; align-items:center; margin-left: 34px;"
    );
    a.addRule(".sbsb_c[dir=rtl] .sbpqs_c", "margin-right: 34px;");
    a.addRule(".sbsb_c", "line-height: 32px;");
    a.addRule(".sbpqs_c", "line-height: 32px;");
    a.addRule(".sbsb_a", "padding: 16px 0 8px");
    a.addRule(".sbfl_a", "margin:-5px -18px -9px 0");
    a.addRule("." + this.i, "font-size:1.6rem;color:#222");
    a.addRule(".sbdd_c", "z-index:2010");
    a.addRule(".sbdd_a", "z-index:2021");
    a.addRule(".sbib_a", "background:transparent; width: 100%; flex: 1;");
    a.addRule("ytd-masthead[dark] .gsst_e", "filter: invert(100%)");
    a.addRule(".sbpqs_a", "color: #030303");
    a.addRule(".sbqs_c b", "font-weight:500");
    a.addRule(".sbpqs_a b", "font-weight: 500");
    a.addRule("html[dark] .sbqs_c b", "font-weight: 600");
    a.addRule("html[dark] .sbpqs_a b", "font-weight: 600");
    a.addRule(".sbsb_c[dir=ltr]", "padding: 0px 24px 0px 16px;");
    a.addRule(".sbsb_c[dir=rtl]", "padding: 0px 16px 0px 24px;");
    a.addRule(".sbdd_b", "border-radius: 12px;");
    a.addRule(".sbsb_a", "border-radius: 12px;");
    a.addRule(".sbsb_c[dir=ltr] .sbpqs_a:before", "margin-right: 14px;");
    a.addRule(".sbsb_c[dir=ltr] .sbqs_c:before", "margin-right: 14px;");
    a.addRule(".sbsb_c[dir=rtl] .sbpqs_a:before", "margin-left: 14px;");
    a.addRule(".sbsb_c[dir=rtl] .sbqs_c:before", "margin-left: 14px;");
    a.addRule(".sbfl_a", "margin:-5px -10px -9px 0");
    this.J &&
      (a.addRule(".sbsb_c", "padding:0px 12px 0px 16px"),
      a.addRule(
        ".sbpqs_b",
        "display: flex; align-items: center; height: 32px;"
      ));
    this.H &&
      (a.addRule(".sbpqs_b", "display: none"),
      a.addRule(
        ".sbsb_d .sbpqs_b",
        "display: flex; align-items: center; height: 32px;"
      ));
    a.addRule(
      "html[dark] .sbsb_a",
      "background: var(--yt-spec-raised-background);"
    );
    a.addRule(
      "html[dark] .sbdd_b",
      "border: none; background: none; box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);"
    );
    a.addRule("html[dark] .sbsb_i", "color: var(--yt-spec-call-to-action)");
    a.addRule(
      "html[dark] .sbsb_d",
      "background: var(--yt-spec-additive-background);"
    );
    a.addRule(
      ".sbfl_b",
      "background: none; color: var(--yt-spec-text-secondary);"
    );
    a.addRule(
      "html[dark] .sbfl_a:hover",
      "color: var(--yt-spec-text-primary);"
    );
    a.addRule("html[dark] .sbpqs_a", "color: var(--yt-spec-text-primary);");
    a.addRule("html[dark] .sbqs_c", "color: var(--yt-spec-text-primary);");
    a.addRule("html[dark] .sbse", "color: var(--yt-spec-text-primary);");
  };
  m.install = function (a, b, c, d, e, f, g) {
    this.l = a;
    this.L = f;
    g && (this.u = g);
    f = jn().If();
    f.clientName = "youtube";
    f.requestIdentifier = "youtube";
    f.Xc = "yt";
    f.md = d.REQUEST_LANGUAGE;
    f.Te = d.REQUEST_DOMAIN;
    f.ag = !1;
    f.Pc = 0;
    f.ue = !1;
    f.xc = !1;
    f.xe = !1;
    f.gd = !0;
    f.ld = this.G;
    f.Oc = this.i;
    f.dd = this.D;
    f.cd = this.C;
    f.ri = !0;
    f.Ac = d.HAS_ON_SCREEN_KEYBOARD;
    f.Gc = d.REQUEST_LANGUAGE;
    f.ze = "//www.gstatic.com/inputtools/images";
    f.Ae = "youtube";
    f.bd = !0;
    f.Yb = "fixed";
    this.o = d.IS_POLYMER;
    this.m = d.IS_FUSION;
    this.M = d.SEARCHBOX_REPORTING;
    this.s = d.SEARCHBOX_TAP_TARGET_EXPERIMENT;
    this.J = d.ENABLE_DELETE_ICON;
    this.H = d.ENABLE_DELETE_ICON_HOVER;
    f.Ad = "suggestqueries-clients6.youtube.com";
    d.PQ && (f.xd = d.PQ);
    f.Jd = d.PSUGGEST_TOKEN;
    f.authuser = d.SESSION_INDEX;
    f.yd = e.SUGGESTION_DISMISSED_LABEL;
    f.zd = e.SUGGESTION_DISMISS_LABEL;
    f.Fd = !d.HIDE_REMOVE_LINK;
    f.Ji = si([0, 33, 35]);
    this.o
      ? ((f.Zb = "search-container"), (f.dc = 24))
      : this.m
      ? ((f.Zb = "masthead-search"), (f.dc = 24))
      : ((f.Zb = "masthead-search-terms"), (f.dc = 30));
    bc() || (f.je = !0);
    f.Ge = f.Zb;
    e = this.l.offsetHeight;
    f.vc = [e + (56 - e) / 2 - 40 + 4, 0, 0];
    e = [0];
    cc() && "8.0" == jc() && (e[0] = -1);
    f.Qd = e;
    (e = d.REQUEST_LANGUAGE)
      ? ((e = e.toLowerCase()),
        (e = "zh-tw" == e || "zh-cn" == e || "ja" == e || "ko" == e))
      : (e = !1);
    e && (f.Wd = !0);
    if ((e = d.SUGG_EXP_ID)) f.Hd = e;
    d.SEND_VISITOR_DATA && (f.connectionType = 1);
    d.SEND_VISITOR_DATA &&
      "VISITOR_DATA" in d &&
      (f.visitorData = d.VISITOR_DATA);
    if (this.g) {
      a = this.g;
      b = f;
      c = Uj(a.i);
      d = a.D;
      c.removeEventListener
        ? c.removeEventListener("resize", d, !1)
        : c.detachEvent("onresize", d);
      Ri(a.g);
      b = mn(b);
      a.C = b.ub;
      a = a.g;
      Ri(a);
      for (c = 0; (d = a.g[c++]); ) d.X(b);
      a.l = !0;
    } else
      (d = new hn(d)),
        (this.g = new ln(b, a, this, d)),
        this.g.install(f),
        c && (pn(this.g, c), (c.onclick = null));
  };
  function rn() {
    this.data = [];
    this.g = -1;
  }
  rn.prototype.set = function (a, b) {
    b = void 0 === b ? !0 : b;
    0 <= a &&
      52 > a &&
      Number.isInteger(a) &&
      this.data[a] !== b &&
      ((this.data[a] = b), (this.g = -1));
  };
  rn.prototype.get = function (a) {
    return !!this.data[a];
  };
  function sn(a) {
    -1 === a.g &&
      (a.g = a.data.reduce(function (b, c, d) {
        return b + (c ? Math.pow(2, d) : 0);
      }, 0));
    return a.g;
  }
  function tn(a, b) {
    this.g = a[C.Symbol.iterator]();
    this.l = b;
  }
  tn.prototype[Symbol.iterator] = function () {
    return this;
  };
  tn.prototype.next = function () {
    var a = this.g.next();
    return {
      value: a.done ? void 0 : this.l.call(void 0, a.value),
      done: a.done,
    };
  };
  function un(a, b) {
    return new tn(a, b);
  }
  function vn() {
    this.blockSize = -1;
  }
  function wn() {
    this.blockSize = -1;
    this.blockSize = 64;
    this.g = [];
    this.o = [];
    this.s = [];
    this.i = [];
    this.i[0] = 128;
    for (var a = 1; a < this.blockSize; ++a) this.i[a] = 0;
    this.m = this.l = 0;
    this.reset();
  }
  H(wn, vn);
  wn.prototype.reset = function () {
    this.g[0] = 1732584193;
    this.g[1] = 4023233417;
    this.g[2] = 2562383102;
    this.g[3] = 271733878;
    this.g[4] = 3285377520;
    this.m = this.l = 0;
  };
  function xn(a, b, c) {
    c || (c = 0);
    var d = a.s;
    if ("string" === typeof b)
      for (var e = 0; 16 > e; e++)
        (d[e] =
          (b.charCodeAt(c) << 24) |
          (b.charCodeAt(c + 1) << 16) |
          (b.charCodeAt(c + 2) << 8) |
          b.charCodeAt(c + 3)),
          (c += 4);
    else
      for (e = 0; 16 > e; e++)
        (d[e] = (b[c] << 24) | (b[c + 1] << 16) | (b[c + 2] << 8) | b[c + 3]),
          (c += 4);
    for (e = 16; 80 > e; e++) {
      var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
      d[e] = ((f << 1) | (f >>> 31)) & 4294967295;
    }
    b = a.g[0];
    c = a.g[1];
    var g = a.g[2],
      h = a.g[3],
      k = a.g[4];
    for (e = 0; 80 > e; e++) {
      if (40 > e)
        if (20 > e) {
          f = h ^ (c & (g ^ h));
          var l = 1518500249;
        } else (f = c ^ g ^ h), (l = 1859775393);
      else
        60 > e
          ? ((f = (c & g) | (h & (c | g))), (l = 2400959708))
          : ((f = c ^ g ^ h), (l = 3395469782));
      f = (((b << 5) | (b >>> 27)) + f + k + l + d[e]) & 4294967295;
      k = h;
      h = g;
      g = ((c << 30) | (c >>> 2)) & 4294967295;
      c = b;
      b = f;
    }
    a.g[0] = (a.g[0] + b) & 4294967295;
    a.g[1] = (a.g[1] + c) & 4294967295;
    a.g[2] = (a.g[2] + g) & 4294967295;
    a.g[3] = (a.g[3] + h) & 4294967295;
    a.g[4] = (a.g[4] + k) & 4294967295;
  }
  wn.prototype.update = function (a, b) {
    if (null != a) {
      void 0 === b && (b = a.length);
      for (var c = b - this.blockSize, d = 0, e = this.o, f = this.l; d < b; ) {
        if (0 == f) for (; d <= c; ) xn(this, a, d), (d += this.blockSize);
        if ("string" === typeof a)
          for (; d < b; ) {
            if (((e[f] = a.charCodeAt(d)), ++f, ++d, f == this.blockSize)) {
              xn(this, e);
              f = 0;
              break;
            }
          }
        else
          for (; d < b; )
            if (((e[f] = a[d]), ++f, ++d, f == this.blockSize)) {
              xn(this, e);
              f = 0;
              break;
            }
      }
      this.l = f;
      this.m += b;
    }
  };
  wn.prototype.digest = function () {
    var a = [],
      b = 8 * this.m;
    56 > this.l
      ? this.update(this.i, 56 - this.l)
      : this.update(this.i, this.blockSize - (this.l - 56));
    for (var c = this.blockSize - 1; 56 <= c; c--)
      (this.o[c] = b & 255), (b /= 256);
    xn(this, this.o);
    for (c = b = 0; 5 > c; c++)
      for (var d = 24; 0 <= d; d -= 8) (a[b] = (this.g[c] >> d) & 255), ++b;
    return a;
  };
  function yn(a) {
    if (a instanceof zn || a instanceof An || a instanceof Bn) return a;
    if ("function" == typeof a.next)
      return new zn(function () {
        return a;
      });
    if ("function" == typeof a[Symbol.iterator])
      return new zn(function () {
        return a[Symbol.iterator]();
      });
    if ("function" == typeof a.Oa)
      return new zn(function () {
        return a.Oa();
      });
    throw Error("Not an iterator or iterable.");
  }
  function zn(a) {
    this.l = a;
  }
  zn.prototype.Oa = function () {
    return new An(this.l());
  };
  zn.prototype[Symbol.iterator] = function () {
    return new Bn(this.l());
  };
  zn.prototype.g = function () {
    return new Bn(this.l());
  };
  function An(a) {
    this.l = a;
  }
  y(An, Fg);
  An.prototype.next = function () {
    return this.l.next();
  };
  An.prototype[Symbol.iterator] = function () {
    return new Bn(this.l);
  };
  An.prototype.g = function () {
    return new Bn(this.l);
  };
  function Bn(a) {
    zn.call(this, function () {
      return a;
    });
    this.i = a;
  }
  y(Bn, zn);
  Bn.prototype.next = function () {
    return this.i.next();
  };
  function Cn(a, b) {
    this.l = {};
    this.g = [];
    this.m = this.size = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error("Uneven number of arguments");
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
    } else if (a)
      if (a instanceof Cn)
        for (c = Dn(a), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
      else for (d in a) this.set(d, a[d]);
  }
  function Dn(a) {
    En(a);
    return a.g.concat();
  }
  m = Cn.prototype;
  m.has = function (a) {
    return Fn(this.l, a);
  };
  m.equals = function (a, b) {
    if (this === a) return !0;
    if (this.size != a.size) return !1;
    b = b || Gn;
    En(this);
    for (var c, d = 0; (c = this.g[d]); d++)
      if (!b(this.get(c), a.get(c))) return !1;
    return !0;
  };
  function Gn(a, b) {
    return a === b;
  }
  m.nd = function () {
    return 0 == this.size;
  };
  m.clear = function () {
    this.l = {};
    this.m = this.size = this.g.length = 0;
  };
  m.remove = function (a) {
    return this.delete(a);
  };
  m.delete = function (a) {
    return Fn(this.l, a)
      ? (delete this.l[a],
        --this.size,
        this.m++,
        this.g.length > 2 * this.size && En(this),
        !0)
      : !1;
  };
  function En(a) {
    if (a.size != a.g.length) {
      for (var b = 0, c = 0; b < a.g.length; ) {
        var d = a.g[b];
        Fn(a.l, d) && (a.g[c++] = d);
        b++;
      }
      a.g.length = c;
    }
    if (a.size != a.g.length) {
      var e = {};
      for (c = b = 0; b < a.g.length; )
        (d = a.g[b]), Fn(e, d) || ((a.g[c++] = d), (e[d] = 1)), b++;
      a.g.length = c;
    }
  }
  m.get = function (a, b) {
    return Fn(this.l, a) ? this.l[a] : b;
  };
  m.set = function (a, b) {
    Fn(this.l, a) || ((this.size += 1), this.g.push(a), this.m++);
    this.l[a] = b;
  };
  m.forEach = function (a, b) {
    for (var c = Dn(this), d = 0; d < c.length; d++) {
      var e = c[d],
        f = this.get(e);
      a.call(b, f, e, this);
    }
  };
  m.clone = function () {
    return new Cn(this);
  };
  m.keys = function () {
    return yn(this.Oa(!0)).g();
  };
  m.values = function () {
    return yn(this.Oa(!1)).g();
  };
  m.entries = function () {
    var a = this;
    return un(this.keys(), function (b) {
      return [b, a.get(b)];
    });
  };
  m.Oa = function (a) {
    En(this);
    var b = 0,
      c = this.m,
      d = this,
      e = new Fg();
    e.next = function () {
      if (c != d.m)
        throw Error("The map has changed since the iterator was created");
      if (b >= d.g.length) return Gg;
      var f = d.g[b++];
      return Hg(a ? f : d.l[f]);
    };
    return e;
  };
  function Fn(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  function Hn(a, b, c) {
    a.push(encodeURIComponent(b) + "=" + encodeURIComponent(c));
  }
  function In(a) {
    var b = a.type;
    if ("string" === typeof b)
      switch (b.toLowerCase()) {
        case "checkbox":
        case "radio":
          return a.checked ? a.value : null;
        case "select-one":
          return (b = a.selectedIndex), 0 <= b ? a.options[b].value : null;
        case "select-multiple":
          b = [];
          for (var c, d = 0; (c = a.options[d]); d++)
            c.selected && b.push(c.value);
          return b.length ? b : null;
      }
    return null != a.value ? a.value : null;
  }
  function Jn(a) {
    var b = [];
    Kn(new Ln(), a, b);
    return b.join("");
  }
  function Ln() {}
  function Kn(a, b, c) {
    if (null == b) c.push("null");
    else {
      if ("object" == typeof b) {
        if (Array.isArray(b)) {
          var d = b;
          b = d.length;
          c.push("[");
          for (var e = "", f = 0; f < b; f++)
            c.push(e), Kn(a, d[f], c), (e = ",");
          c.push("]");
          return;
        }
        if (b instanceof String || b instanceof Number || b instanceof Boolean)
          b = b.valueOf();
        else {
          c.push("{");
          e = "";
          for (d in b)
            Object.prototype.hasOwnProperty.call(b, d) &&
              ((f = b[d]),
              "function" != typeof f &&
                (c.push(e), Mn(d, c), c.push(":"), Kn(a, f, c), (e = ",")));
          c.push("}");
          return;
        }
      }
      switch (typeof b) {
        case "string":
          Mn(b, c);
          break;
        case "number":
          c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
          break;
        case "boolean":
          c.push(String(b));
          break;
        case "function":
          c.push("null");
          break;
        default:
          throw Error("Unknown type: " + typeof b);
      }
    }
  }
  var Nn = {
      '"': '\\"',
      "\\": "\\\\",
      "/": "\\/",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\v": "\\u000b",
    },
    On = /\uffff/.test("\uffff")
      ? /[\\"\x00-\x1f\x7f-\uffff]/g
      : /[\\"\x00-\x1f\x7f-\xff]/g;
  function Mn(a, b) {
    b.push(
      '"',
      a.replace(On, function (c) {
        var d = Nn[c];
        d ||
          ((d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).slice(1)),
          (Nn[c] = d));
        return d;
      }),
      '"'
    );
  }
  function Pn() {
    var a = this;
    this.promise = new Promise(function (b, c) {
      a.resolve = b;
      a.reject = c;
    });
  }
  function Q(a) {
    Ec.call(this);
    this.o = 1;
    this.i = [];
    this.m = 0;
    this.g = [];
    this.l = {};
    this.s = !!a;
  }
  H(Q, Ec);
  m = Q.prototype;
  m.subscribe = function (a, b, c) {
    var d = this.l[a];
    d || (d = this.l[a] = []);
    var e = this.o;
    this.g[e] = a;
    this.g[e + 1] = b;
    this.g[e + 2] = c;
    this.o = e + 3;
    d.push(e);
    return e;
  };
  m.Rc = function (a) {
    var b = this.g[a];
    if (b) {
      var c = this.l[b];
      0 != this.m
        ? (this.i.push(a), (this.g[a + 1] = function () {}))
        : (c && Ya(c, a),
          delete this.g[a],
          delete this.g[a + 1],
          delete this.g[a + 2]);
    }
    return !!b;
  };
  m.Ee = function (a, b) {
    var c = this.l[a];
    if (c) {
      for (
        var d = Array(arguments.length - 1), e = 1, f = arguments.length;
        e < f;
        e++
      )
        d[e - 1] = arguments[e];
      if (this.s)
        for (e = 0; e < c.length; e++) {
          var g = c[e];
          Qn(this.g[g + 1], this.g[g + 2], d);
        }
      else {
        this.m++;
        try {
          for (e = 0, f = c.length; e < f && !this.zb; e++)
            (g = c[e]), this.g[g + 1].apply(this.g[g + 2], d);
        } finally {
          if ((this.m--, 0 < this.i.length && 0 == this.m))
            for (; (c = this.i.pop()); ) this.Rc(c);
        }
      }
      return 0 != e;
    }
    return !1;
  };
  function Qn(a, b, c) {
    Qd(function () {
      a.apply(b, c);
    });
  }
  m.clear = function (a) {
    if (a) {
      var b = this.l[a];
      b && (b.forEach(this.Rc, this), delete this.l[a]);
    } else (this.g.length = 0), (this.l = {});
  };
  m.Ia = function () {
    Q.Ma.Ia.call(this);
    this.clear();
    this.i.length = 0;
  };
  function Rn(a) {
    this.g = a;
  }
  Rn.prototype.set = function (a, b) {
    void 0 === b ? this.g.remove(a) : this.g.set(a, Jn(b));
  };
  Rn.prototype.get = function (a) {
    try {
      var b = this.g.get(a);
    } catch (c) {
      return;
    }
    if (null !== b)
      try {
        return JSON.parse(b);
      } catch (c) {
        throw "Storage: Invalid value was encountered";
      }
  };
  Rn.prototype.remove = function (a) {
    this.g.remove(a);
  };
  function Sn(a) {
    this.g = a;
  }
  H(Sn, Rn);
  function Tn(a) {
    this.data = a;
  }
  function Un(a) {
    return void 0 === a || a instanceof Tn ? a : new Tn(a);
  }
  Sn.prototype.set = function (a, b) {
    Sn.Ma.set.call(this, a, Un(b));
  };
  Sn.prototype.l = function (a) {
    a = Sn.Ma.get.call(this, a);
    if (void 0 === a || a instanceof Object) return a;
    throw "Storage: Invalid value was encountered";
  };
  Sn.prototype.get = function (a) {
    if ((a = this.l(a))) {
      if (((a = a.data), void 0 === a))
        throw "Storage: Invalid value was encountered";
    } else a = void 0;
    return a;
  };
  function Vn(a) {
    this.g = a;
  }
  H(Vn, Sn);
  Vn.prototype.set = function (a, b, c) {
    if ((b = Un(b))) {
      if (c) {
        if (c < F()) {
          Vn.prototype.remove.call(this, a);
          return;
        }
        b.expiration = c;
      }
      b.creation = F();
    }
    Vn.Ma.set.call(this, a, b);
  };
  Vn.prototype.l = function (a) {
    var b = Vn.Ma.l.call(this, a);
    if (b) {
      var c = b.creation,
        d = b.expiration;
      if ((d && d < F()) || (c && c > F())) Vn.prototype.remove.call(this, a);
      else return b;
    }
  };
  function Wn() {}
  function Xn() {}
  H(Xn, Wn);
  Xn.prototype[Symbol.iterator] = function () {
    return yn(this.Oa(!0)).g();
  };
  Xn.prototype.clear = function () {
    var a = Array.from(this);
    a = w(a);
    for (var b = a.next(); !b.done; b = a.next()) this.remove(b.value);
  };
  function Yn(a) {
    this.g = a;
  }
  H(Yn, Xn);
  m = Yn.prototype;
  m.set = function (a, b) {
    try {
      this.g.setItem(a, b);
    } catch (c) {
      if (0 == this.g.length) throw "Storage mechanism: Storage disabled";
      throw "Storage mechanism: Quota exceeded";
    }
  };
  m.get = function (a) {
    a = this.g.getItem(a);
    if ("string" !== typeof a && null !== a)
      throw "Storage mechanism: Invalid value was encountered";
    return a;
  };
  m.remove = function (a) {
    this.g.removeItem(a);
  };
  m.Oa = function (a) {
    var b = 0,
      c = this.g,
      d = new Fg();
    d.next = function () {
      if (b >= c.length) return Gg;
      var e = c.key(b++);
      if (a) return Hg(e);
      e = c.getItem(e);
      if ("string" !== typeof e)
        throw "Storage mechanism: Invalid value was encountered";
      return Hg(e);
    };
    return d;
  };
  m.clear = function () {
    this.g.clear();
  };
  m.key = function (a) {
    return this.g.key(a);
  };
  function Zn() {
    var a = null;
    try {
      a = window.localStorage || null;
    } catch (b) {}
    this.g = a;
  }
  H(Zn, Yn);
  function $n(a, b) {
    this.l = a;
    this.g = null;
    if (Nc && !(9 <= Number(ad))) {
      ao || (ao = new Cn());
      this.g = ao.get(a);
      this.g ||
        (b
          ? (this.g = document.getElementById(b))
          : ((this.g = document.createElement("userdata")),
            this.g.addBehavior("#default#userData"),
            document.body.appendChild(this.g)),
        ao.set(a, this.g));
      try {
        this.g.load(this.l);
      } catch (c) {
        this.g = null;
      }
    }
  }
  H($n, Xn);
  var bo = {
      ".": ".2E",
      "!": ".21",
      "~": ".7E",
      "*": ".2A",
      "'": ".27",
      "(": ".28",
      ")": ".29",
      "%": ".",
    },
    ao = null;
  function co(a) {
    return (
      "_" +
      encodeURIComponent(a).replace(/[.!~*'()%]/g, function (b) {
        return bo[b];
      })
    );
  }
  m = $n.prototype;
  m.set = function (a, b) {
    this.g.setAttribute(co(a), b);
    eo(this);
  };
  m.get = function (a) {
    a = this.g.getAttribute(co(a));
    if ("string" !== typeof a && null !== a)
      throw "Storage mechanism: Invalid value was encountered";
    return a;
  };
  m.remove = function (a) {
    this.g.removeAttribute(co(a));
    eo(this);
  };
  m.Oa = function (a) {
    var b = 0,
      c = this.g.XMLDocument.documentElement.attributes,
      d = new Fg();
    d.next = function () {
      if (b >= c.length) return Gg;
      var e = c[b++];
      if (a)
        return Hg(decodeURIComponent(e.nodeName.replace(/\./g, "%")).slice(1));
      e = e.nodeValue;
      if ("string" !== typeof e)
        throw "Storage mechanism: Invalid value was encountered";
      return Hg(e);
    };
    return d;
  };
  m.clear = function () {
    for (
      var a = this.g.XMLDocument.documentElement, b = a.attributes.length;
      0 < b;
      b--
    )
      a.removeAttribute(a.attributes[b - 1].nodeName);
    eo(this);
  };
  function eo(a) {
    try {
      a.g.save(a.l);
    } catch (b) {
      throw "Storage mechanism: Quota exceeded";
    }
  }
  function fo(a, b) {
    this.l = a;
    this.g = b + "::";
  }
  H(fo, Xn);
  fo.prototype.set = function (a, b) {
    this.l.set(this.g + a, b);
  };
  fo.prototype.get = function (a) {
    return this.l.get(this.g + a);
  };
  fo.prototype.remove = function (a) {
    this.l.remove(this.g + a);
  };
  fo.prototype.Oa = function (a) {
    var b = this.l[Symbol.iterator](),
      c = this,
      d = new Fg();
    d.next = function () {
      var e = b.next();
      if (e.done) return e;
      for (e = e.value; e.slice(0, c.g.length) != c.g; ) {
        e = b.next();
        if (e.done) return e;
        e = e.value;
      }
      return Hg(a ? e.slice(c.g.length) : c.l.get(e));
    };
    return d;
  }; /*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
  var R = {},
    go =
      "undefined" !== typeof Uint8Array &&
      "undefined" !== typeof Uint16Array &&
      "undefined" !== typeof Int32Array;
  R.assign = function (a) {
    for (var b = Array.prototype.slice.call(arguments, 1); b.length; ) {
      var c = b.shift();
      if (c) {
        if ("object" !== typeof c)
          throw new TypeError(c + "must be non-object");
        for (var d in c)
          Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
      }
    }
    return a;
  };
  R.Gd = function (a, b) {
    if (a.length === b) return a;
    if (a.subarray) return a.subarray(0, b);
    a.length = b;
    return a;
  };
  var ho = {
      vb: function (a, b, c, d, e) {
        if (b.subarray && a.subarray) a.set(b.subarray(c, c + d), e);
        else for (var f = 0; f < d; f++) a[e + f] = b[c + f];
      },
      be: function (a) {
        var b, c;
        var d = (c = 0);
        for (b = a.length; d < b; d++) c += a[d].length;
        var e = new Uint8Array(c);
        d = c = 0;
        for (b = a.length; d < b; d++) {
          var f = a[d];
          e.set(f, c);
          c += f.length;
        }
        return e;
      },
    },
    io = {
      vb: function (a, b, c, d, e) {
        for (var f = 0; f < d; f++) a[e + f] = b[c + f];
      },
      be: function (a) {
        return [].concat.apply([], a);
      },
    };
  R.bh = function () {
    go
      ? ((R.tb = Uint8Array),
        (R.Ta = Uint16Array),
        (R.bf = Int32Array),
        R.assign(R, ho))
      : ((R.tb = Array), (R.Ta = Array), (R.bf = Array), R.assign(R, io));
  };
  R.bh();
  var jo = !0;
  try {
    new Uint8Array(1);
  } catch (a) {
    jo = !1;
  }
  function ko(a) {
    var b,
      c,
      d = a.length,
      e = 0;
    for (b = 0; b < d; b++) {
      var f = a.charCodeAt(b);
      if (55296 === (f & 64512) && b + 1 < d) {
        var g = a.charCodeAt(b + 1);
        56320 === (g & 64512) &&
          ((f = 65536 + ((f - 55296) << 10) + (g - 56320)), b++);
      }
      e += 128 > f ? 1 : 2048 > f ? 2 : 65536 > f ? 3 : 4;
    }
    var h = new R.tb(e);
    for (b = c = 0; c < e; b++)
      (f = a.charCodeAt(b)),
        55296 === (f & 64512) &&
          b + 1 < d &&
          ((g = a.charCodeAt(b + 1)),
          56320 === (g & 64512) &&
            ((f = 65536 + ((f - 55296) << 10) + (g - 56320)), b++)),
        128 > f
          ? (h[c++] = f)
          : (2048 > f
              ? (h[c++] = 192 | (f >>> 6))
              : (65536 > f
                  ? (h[c++] = 224 | (f >>> 12))
                  : ((h[c++] = 240 | (f >>> 18)),
                    (h[c++] = 128 | ((f >>> 12) & 63))),
                (h[c++] = 128 | ((f >>> 6) & 63))),
            (h[c++] = 128 | (f & 63)));
    return h;
  }
  var lo = {};
  lo = function (a, b, c, d) {
    var e = (a & 65535) | 0;
    a = ((a >>> 16) & 65535) | 0;
    for (var f; 0 !== c; ) {
      f = 2e3 < c ? 2e3 : c;
      c -= f;
      do (e = (e + b[d++]) | 0), (a = (a + e) | 0);
      while (--f);
      e %= 65521;
      a %= 65521;
    }
    return e | (a << 16) | 0;
  };
  for (var mo = {}, no, oo = [], po = 0; 256 > po; po++) {
    no = po;
    for (var qo = 0; 8 > qo; qo++)
      no = no & 1 ? 3988292384 ^ (no >>> 1) : no >>> 1;
    oo[po] = no;
  }
  mo = function (a, b, c, d) {
    c = d + c;
    for (a ^= -1; d < c; d++) a = (a >>> 8) ^ oo[(a ^ b[d]) & 255];
    return a ^ -1;
  };
  var ro = {};
  ro = {
    2: "need dictionary",
    1: "stream end",
    0: "",
    "-1": "file error",
    "-2": "stream error",
    "-3": "data error",
    "-4": "insufficient memory",
    "-5": "buffer error",
    "-6": "incompatible version",
  };
  function so(a) {
    for (var b = a.length; 0 <= --b; ) a[b] = 0;
  }
  var to = [
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
      5, 5, 5, 0,
    ],
    uo = [
      0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
      11, 11, 12, 12, 13, 13,
    ],
    vo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
    wo = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
    xo = Array(576);
  so(xo);
  var yo = Array(60);
  so(yo);
  var zo = Array(512);
  so(zo);
  var Ao = Array(256);
  so(Ao);
  var Bo = Array(29);
  so(Bo);
  var Co = Array(30);
  so(Co);
  function Do(a, b, c, d, e) {
    this.Se = a;
    this.Bf = b;
    this.Af = c;
    this.tf = d;
    this.Hg = e;
    this.le = a && a.length;
  }
  var Eo, Fo, Go;
  function Ho(a, b) {
    this.Ud = a;
    this.Hb = 0;
    this.fb = b;
  }
  function Io(a, b) {
    a.ha[a.pending++] = b & 255;
    a.ha[a.pending++] = (b >>> 8) & 255;
  }
  function Jo(a, b, c) {
    a.na > 16 - c
      ? ((a.xa |= (b << a.na) & 65535),
        Io(a, a.xa),
        (a.xa = b >> (16 - a.na)),
        (a.na += c - 16))
      : ((a.xa |= (b << a.na) & 65535), (a.na += c));
  }
  function Ko(a, b, c) {
    Jo(a, c[2 * b], c[2 * b + 1]);
  }
  function Lo(a, b) {
    var c = 0;
    do (c |= a & 1), (a >>>= 1), (c <<= 1);
    while (0 < --b);
    return c >>> 1;
  }
  function Mo(a, b, c) {
    var d = Array(16),
      e = 0,
      f;
    for (f = 1; 15 >= f; f++) d[f] = e = (e + c[f - 1]) << 1;
    for (c = 0; c <= b; c++)
      (e = a[2 * c + 1]), 0 !== e && (a[2 * c] = Lo(d[e]++, e));
  }
  function No(a) {
    var b;
    for (b = 0; 286 > b; b++) a.Ba[2 * b] = 0;
    for (b = 0; 30 > b; b++) a.lb[2 * b] = 0;
    for (b = 0; 19 > b; b++) a.qa[2 * b] = 0;
    a.Ba[512] = 1;
    a.ab = a.Kb = 0;
    a.Ga = a.matches = 0;
  }
  function Oo(a) {
    8 < a.na ? Io(a, a.xa) : 0 < a.na && (a.ha[a.pending++] = a.xa);
    a.xa = 0;
    a.na = 0;
  }
  function Po(a, b, c) {
    Oo(a);
    Io(a, c);
    Io(a, ~c);
    R.vb(a.ha, a.window, b, c, a.pending);
    a.pending += c;
  }
  function Qo(a, b, c, d) {
    var e = 2 * b,
      f = 2 * c;
    return a[e] < a[f] || (a[e] === a[f] && d[b] <= d[c]);
  }
  function Ro(a, b, c) {
    for (var d = a.ja[c], e = c << 1; e <= a.Za; ) {
      e < a.Za && Qo(b, a.ja[e + 1], a.ja[e], a.depth) && e++;
      if (Qo(b, d, a.ja[e], a.depth)) break;
      a.ja[c] = a.ja[e];
      c = e;
      e <<= 1;
    }
    a.ja[c] = d;
  }
  function So(a, b, c) {
    var d = 0;
    if (0 !== a.Ga) {
      do {
        var e = (a.ha[a.Vb + 2 * d] << 8) | a.ha[a.Vb + 2 * d + 1];
        var f = a.ha[a.pd + d];
        d++;
        if (0 === e) Ko(a, f, b);
        else {
          var g = Ao[f];
          Ko(a, g + 256 + 1, b);
          var h = to[g];
          0 !== h && ((f -= Bo[g]), Jo(a, f, h));
          e--;
          g = 256 > e ? zo[e] : zo[256 + (e >>> 7)];
          Ko(a, g, c);
          h = uo[g];
          0 !== h && ((e -= Co[g]), Jo(a, e, h));
        }
      } while (d < a.Ga);
    }
    Ko(a, 256, b);
  }
  function To(a, b) {
    var c = b.Ud,
      d = b.fb.Se,
      e = b.fb.le,
      f = b.fb.tf,
      g,
      h = -1;
    a.Za = 0;
    a.Cb = 573;
    for (g = 0; g < f; g++)
      0 !== c[2 * g]
        ? ((a.ja[++a.Za] = h = g), (a.depth[g] = 0))
        : (c[2 * g + 1] = 0);
    for (; 2 > a.Za; ) {
      var k = (a.ja[++a.Za] = 2 > h ? ++h : 0);
      c[2 * k] = 1;
      a.depth[k] = 0;
      a.ab--;
      e && (a.Kb -= d[2 * k + 1]);
    }
    b.Hb = h;
    for (g = a.Za >> 1; 1 <= g; g--) Ro(a, c, g);
    k = f;
    do
      (g = a.ja[1]),
        (a.ja[1] = a.ja[a.Za--]),
        Ro(a, c, 1),
        (d = a.ja[1]),
        (a.ja[--a.Cb] = g),
        (a.ja[--a.Cb] = d),
        (c[2 * k] = c[2 * g] + c[2 * d]),
        (a.depth[k] = (a.depth[g] >= a.depth[d] ? a.depth[g] : a.depth[d]) + 1),
        (c[2 * g + 1] = c[2 * d + 1] = k),
        (a.ja[1] = k++),
        Ro(a, c, 1);
    while (2 <= a.Za);
    a.ja[--a.Cb] = a.ja[1];
    g = b.Ud;
    k = b.Hb;
    d = b.fb.Se;
    e = b.fb.le;
    f = b.fb.Bf;
    var l = b.fb.Af,
      n = b.fb.Hg,
      p,
      r = 0;
    for (p = 0; 15 >= p; p++) a.Va[p] = 0;
    g[2 * a.ja[a.Cb] + 1] = 0;
    for (b = a.Cb + 1; 573 > b; b++) {
      var q = a.ja[b];
      p = g[2 * g[2 * q + 1] + 1] + 1;
      p > n && ((p = n), r++);
      g[2 * q + 1] = p;
      if (!(q > k)) {
        a.Va[p]++;
        var u = 0;
        q >= l && (u = f[q - l]);
        var t = g[2 * q];
        a.ab += t * (p + u);
        e && (a.Kb += t * (d[2 * q + 1] + u));
      }
    }
    if (0 !== r) {
      do {
        for (p = n - 1; 0 === a.Va[p]; ) p--;
        a.Va[p]--;
        a.Va[p + 1] += 2;
        a.Va[n]--;
        r -= 2;
      } while (0 < r);
      for (p = n; 0 !== p; p--)
        for (q = a.Va[p]; 0 !== q; )
          (d = a.ja[--b]),
            d > k ||
              (g[2 * d + 1] !== p &&
                ((a.ab += (p - g[2 * d + 1]) * g[2 * d]), (g[2 * d + 1] = p)),
              q--);
    }
    Mo(c, h, a.Va);
  }
  function Uo(a, b, c) {
    var d,
      e = -1,
      f = b[1],
      g = 0,
      h = 7,
      k = 4;
    0 === f && ((h = 138), (k = 3));
    b[2 * (c + 1) + 1] = 65535;
    for (d = 0; d <= c; d++) {
      var l = f;
      f = b[2 * (d + 1) + 1];
      (++g < h && l === f) ||
        (g < k
          ? (a.qa[2 * l] += g)
          : 0 !== l
          ? (l !== e && a.qa[2 * l]++, a.qa[32]++)
          : 10 >= g
          ? a.qa[34]++
          : a.qa[36]++,
        (g = 0),
        (e = l),
        0 === f
          ? ((h = 138), (k = 3))
          : l === f
          ? ((h = 6), (k = 3))
          : ((h = 7), (k = 4)));
    }
  }
  function Vo(a, b, c) {
    var d,
      e = -1,
      f = b[1],
      g = 0,
      h = 7,
      k = 4;
    0 === f && ((h = 138), (k = 3));
    for (d = 0; d <= c; d++) {
      var l = f;
      f = b[2 * (d + 1) + 1];
      if (!(++g < h && l === f)) {
        if (g < k) {
          do Ko(a, l, a.qa);
          while (0 !== --g);
        } else
          0 !== l
            ? (l !== e && (Ko(a, l, a.qa), g--),
              Ko(a, 16, a.qa),
              Jo(a, g - 3, 2))
            : 10 >= g
            ? (Ko(a, 17, a.qa), Jo(a, g - 3, 3))
            : (Ko(a, 18, a.qa), Jo(a, g - 11, 7));
        g = 0;
        e = l;
        0 === f
          ? ((h = 138), (k = 3))
          : l === f
          ? ((h = 6), (k = 3))
          : ((h = 7), (k = 4));
      }
    }
  }
  function Wo(a) {
    var b = 4093624447,
      c;
    for (c = 0; 31 >= c; c++, b >>>= 1)
      if (b & 1 && 0 !== a.Ba[2 * c]) return 0;
    if (0 !== a.Ba[18] || 0 !== a.Ba[20] || 0 !== a.Ba[26]) return 1;
    for (c = 32; 256 > c; c++) if (0 !== a.Ba[2 * c]) return 1;
    return 0;
  }
  var Xo = !1;
  function Yo(a, b, c) {
    a.ha[a.Vb + 2 * a.Ga] = (b >>> 8) & 255;
    a.ha[a.Vb + 2 * a.Ga + 1] = b & 255;
    a.ha[a.pd + a.Ga] = c & 255;
    a.Ga++;
    0 === b
      ? a.Ba[2 * c]++
      : (a.matches++,
        b--,
        a.Ba[2 * (Ao[c] + 256 + 1)]++,
        a.lb[2 * (256 > b ? zo[b] : zo[256 + (b >>> 7)])]++);
    return a.Ga === a.ec - 1;
  }
  function Zo(a, b) {
    a.msg = ro[b];
    return b;
  }
  function $o(a) {
    for (var b = a.length; 0 <= --b; ) a[b] = 0;
  }
  function ap(a) {
    var b = a.state,
      c = b.pending;
    c > a.aa && (c = a.aa);
    0 !== c &&
      (R.vb(a.output, b.ha, b.hc, c, a.Ib),
      (a.Ib += c),
      (b.hc += c),
      (a.Id += c),
      (a.aa -= c),
      (b.pending -= c),
      0 === b.pending && (b.hc = 0));
  }
  function bp(a, b) {
    var c = 0 <= a.Ca ? a.Ca : -1,
      d = a.F - a.Ca,
      e = 0;
    if (0 < a.level) {
      2 === a.Y.Yc && (a.Y.Yc = Wo(a));
      To(a, a.Dc);
      To(a, a.uc);
      Uo(a, a.Ba, a.Dc.Hb);
      Uo(a, a.lb, a.uc.Hb);
      To(a, a.Rd);
      for (e = 18; 3 <= e && 0 === a.qa[2 * wo[e] + 1]; e--);
      a.ab += 3 * (e + 1) + 14;
      var f = (a.ab + 3 + 7) >>> 3;
      var g = (a.Kb + 3 + 7) >>> 3;
      g <= f && (f = g);
    } else f = g = d + 5;
    if (d + 4 <= f && -1 !== c) Jo(a, b ? 1 : 0, 3), Po(a, c, d);
    else if (4 === a.strategy || g === f)
      Jo(a, 2 + (b ? 1 : 0), 3), So(a, xo, yo);
    else {
      Jo(a, 4 + (b ? 1 : 0), 3);
      c = a.Dc.Hb + 1;
      d = a.uc.Hb + 1;
      e += 1;
      Jo(a, c - 257, 5);
      Jo(a, d - 1, 5);
      Jo(a, e - 4, 4);
      for (f = 0; f < e; f++) Jo(a, a.qa[2 * wo[f] + 1], 3);
      Vo(a, a.Ba, c - 1);
      Vo(a, a.lb, d - 1);
      So(a, a.Ba, a.lb);
    }
    No(a);
    b && Oo(a);
    a.Ca = a.F;
    ap(a.Y);
  }
  function S(a, b) {
    a.ha[a.pending++] = b;
  }
  function cp(a, b) {
    a.ha[a.pending++] = (b >>> 8) & 255;
    a.ha[a.pending++] = b & 255;
  }
  function dp(a, b) {
    var c = a.te,
      d = a.F,
      e = a.Da,
      f = a.ye,
      g = a.F > a.ta - 262 ? a.F - (a.ta - 262) : 0,
      h = a.window,
      k = a.hb,
      l = a.Sa,
      n = a.F + 258,
      p = h[d + e - 1],
      r = h[d + e];
    a.Da >= a.ie && (c >>= 2);
    f > a.K && (f = a.K);
    do {
      var q = b;
      if (
        h[q + e] === r &&
        h[q + e - 1] === p &&
        h[q] === h[d] &&
        h[++q] === h[d + 1]
      ) {
        d += 2;
        for (
          q++;
          h[++d] === h[++q] &&
          h[++d] === h[++q] &&
          h[++d] === h[++q] &&
          h[++d] === h[++q] &&
          h[++d] === h[++q] &&
          h[++d] === h[++q] &&
          h[++d] === h[++q] &&
          h[++d] === h[++q] &&
          d < n;

        );
        q = 258 - (n - d);
        d = n - 258;
        if (q > e) {
          a.Gb = b;
          e = q;
          if (q >= f) break;
          p = h[d + e - 1];
          r = h[d + e];
        }
      }
    } while ((b = l[b & k]) > g && 0 !== --c);
    return e <= a.K ? e : a.K;
  }
  function ep(a) {
    var b = a.ta,
      c;
    do {
      var d = a.Ze - a.K - a.F;
      if (a.F >= b + (b - 262)) {
        R.vb(a.window, a.window, b, b, 0);
        a.Gb -= b;
        a.F -= b;
        a.Ca -= b;
        var e = (c = a.Bc);
        do {
          var f = a.head[--e];
          a.head[e] = f >= b ? f - b : 0;
        } while (--c);
        e = c = b;
        do (f = a.Sa[--e]), (a.Sa[e] = f >= b ? f - b : 0);
        while (--c);
        d += b;
      }
      if (0 === a.Y.wa) break;
      e = a.Y;
      c = a.window;
      f = a.F + a.K;
      var g = e.wa;
      g > d && (g = d);
      0 === g
        ? (c = 0)
        : ((e.wa -= g),
          R.vb(c, e.input, e.qb, g, f),
          1 === e.state.wrap
            ? (e.R = lo(e.R, c, g, f))
            : 2 === e.state.wrap && (e.R = mo(e.R, c, g, f)),
          (e.qb += g),
          (e.sb += g),
          (c = g));
      a.K += c;
      if (3 <= a.K + a.sa)
        for (
          d = a.F - a.sa,
            a.Z = a.window[d],
            a.Z = ((a.Z << a.Ya) ^ a.window[d + 1]) & a.Xa;
          a.sa &&
          !((a.Z = ((a.Z << a.Ya) ^ a.window[d + 3 - 1]) & a.Xa),
          (a.Sa[d & a.hb] = a.head[a.Z]),
          (a.head[a.Z] = d),
          d++,
          a.sa--,
          3 > a.K + a.sa);

        );
    } while (262 > a.K && 0 !== a.Y.wa);
  }
  function fp(a, b) {
    for (var c; ; ) {
      if (262 > a.K) {
        ep(a);
        if (262 > a.K && 0 === b) return 1;
        if (0 === a.K) break;
      }
      c = 0;
      3 <= a.K &&
        ((a.Z = ((a.Z << a.Ya) ^ a.window[a.F + 3 - 1]) & a.Xa),
        (c = a.Sa[a.F & a.hb] = a.head[a.Z]),
        (a.head[a.Z] = a.F));
      0 !== c && a.F - c <= a.ta - 262 && (a.ba = dp(a, c));
      if (3 <= a.ba)
        if (
          ((c = Yo(a, a.F - a.Gb, a.ba - 3)),
          (a.K -= a.ba),
          a.ba <= a.sd && 3 <= a.K)
        ) {
          a.ba--;
          do
            a.F++,
              (a.Z = ((a.Z << a.Ya) ^ a.window[a.F + 3 - 1]) & a.Xa),
              (a.Sa[a.F & a.hb] = a.head[a.Z]),
              (a.head[a.Z] = a.F);
          while (0 !== --a.ba);
          a.F++;
        } else
          (a.F += a.ba),
            (a.ba = 0),
            (a.Z = a.window[a.F]),
            (a.Z = ((a.Z << a.Ya) ^ a.window[a.F + 1]) & a.Xa);
      else (c = Yo(a, 0, a.window[a.F])), a.K--, a.F++;
      if (c && (bp(a, !1), 0 === a.Y.aa)) return 1;
    }
    a.sa = 2 > a.F ? a.F : 2;
    return 4 === b
      ? (bp(a, !0), 0 === a.Y.aa ? 3 : 4)
      : a.Ga && (bp(a, !1), 0 === a.Y.aa)
      ? 1
      : 2;
  }
  function gp(a, b) {
    for (var c, d; ; ) {
      if (262 > a.K) {
        ep(a);
        if (262 > a.K && 0 === b) return 1;
        if (0 === a.K) break;
      }
      c = 0;
      3 <= a.K &&
        ((a.Z = ((a.Z << a.Ya) ^ a.window[a.F + 3 - 1]) & a.Xa),
        (c = a.Sa[a.F & a.hb] = a.head[a.Z]),
        (a.head[a.Z] = a.F));
      a.Da = a.ba;
      a.Ce = a.Gb;
      a.ba = 2;
      0 !== c &&
        a.Da < a.sd &&
        a.F - c <= a.ta - 262 &&
        ((a.ba = dp(a, c)),
        5 >= a.ba &&
          (1 === a.strategy || (3 === a.ba && 4096 < a.F - a.Gb)) &&
          (a.ba = 2));
      if (3 <= a.Da && a.ba <= a.Da) {
        d = a.F + a.K - 3;
        c = Yo(a, a.F - 1 - a.Ce, a.Da - 3);
        a.K -= a.Da - 1;
        a.Da -= 2;
        do
          ++a.F <= d &&
            ((a.Z = ((a.Z << a.Ya) ^ a.window[a.F + 3 - 1]) & a.Xa),
            (a.Sa[a.F & a.hb] = a.head[a.Z]),
            (a.head[a.Z] = a.F));
        while (0 !== --a.Da);
        a.ob = 0;
        a.ba = 2;
        a.F++;
        if (c && (bp(a, !1), 0 === a.Y.aa)) return 1;
      } else if (a.ob) {
        if (
          ((c = Yo(a, 0, a.window[a.F - 1])) && bp(a, !1),
          a.F++,
          a.K--,
          0 === a.Y.aa)
        )
          return 1;
      } else (a.ob = 1), a.F++, a.K--;
    }
    a.ob && (Yo(a, 0, a.window[a.F - 1]), (a.ob = 0));
    a.sa = 2 > a.F ? a.F : 2;
    return 4 === b
      ? (bp(a, !0), 0 === a.Y.aa ? 3 : 4)
      : a.Ga && (bp(a, !1), 0 === a.Y.aa)
      ? 1
      : 2;
  }
  function hp(a, b) {
    for (var c, d, e, f = a.window; ; ) {
      if (258 >= a.K) {
        ep(a);
        if (258 >= a.K && 0 === b) return 1;
        if (0 === a.K) break;
      }
      a.ba = 0;
      if (
        3 <= a.K &&
        0 < a.F &&
        ((d = a.F - 1),
        (c = f[d]),
        c === f[++d] && c === f[++d] && c === f[++d])
      ) {
        for (
          e = a.F + 258;
          c === f[++d] &&
          c === f[++d] &&
          c === f[++d] &&
          c === f[++d] &&
          c === f[++d] &&
          c === f[++d] &&
          c === f[++d] &&
          c === f[++d] &&
          d < e;

        );
        a.ba = 258 - (e - d);
        a.ba > a.K && (a.ba = a.K);
      }
      3 <= a.ba
        ? ((c = Yo(a, 1, a.ba - 3)), (a.K -= a.ba), (a.F += a.ba), (a.ba = 0))
        : ((c = Yo(a, 0, a.window[a.F])), a.K--, a.F++);
      if (c && (bp(a, !1), 0 === a.Y.aa)) return 1;
    }
    a.sa = 0;
    return 4 === b
      ? (bp(a, !0), 0 === a.Y.aa ? 3 : 4)
      : a.Ga && (bp(a, !1), 0 === a.Y.aa)
      ? 1
      : 2;
  }
  function ip(a, b) {
    for (var c; ; ) {
      if (0 === a.K && (ep(a), 0 === a.K)) {
        if (0 === b) return 1;
        break;
      }
      a.ba = 0;
      c = Yo(a, 0, a.window[a.F]);
      a.K--;
      a.F++;
      if (c && (bp(a, !1), 0 === a.Y.aa)) return 1;
    }
    a.sa = 0;
    return 4 === b
      ? (bp(a, !0), 0 === a.Y.aa ? 3 : 4)
      : a.Ga && (bp(a, !1), 0 === a.Y.aa)
      ? 1
      : 2;
  }
  function jp(a, b, c, d, e) {
    this.Mf = a;
    this.Gg = b;
    this.Jg = c;
    this.Fg = d;
    this.Gf = e;
  }
  var kp;
  kp = [
    new jp(0, 0, 0, 0, function (a, b) {
      var c = 65535;
      for (c > a.Ha - 5 && (c = a.Ha - 5); ; ) {
        if (1 >= a.K) {
          ep(a);
          if (0 === a.K && 0 === b) return 1;
          if (0 === a.K) break;
        }
        a.F += a.K;
        a.K = 0;
        var d = a.Ca + c;
        if (0 === a.F || a.F >= d)
          if (((a.K = a.F - d), (a.F = d), bp(a, !1), 0 === a.Y.aa)) return 1;
        if (a.F - a.Ca >= a.ta - 262 && (bp(a, !1), 0 === a.Y.aa)) return 1;
      }
      a.sa = 0;
      if (4 === b) return bp(a, !0), 0 === a.Y.aa ? 3 : 4;
      a.F > a.Ca && bp(a, !1);
      return 1;
    }),
    new jp(4, 4, 8, 4, fp),
    new jp(4, 5, 16, 8, fp),
    new jp(4, 6, 32, 32, fp),
    new jp(4, 4, 16, 16, gp),
    new jp(8, 16, 32, 32, gp),
    new jp(8, 16, 128, 128, gp),
    new jp(8, 32, 128, 256, gp),
    new jp(32, 128, 258, 1024, gp),
    new jp(32, 258, 258, 4096, gp),
  ];
  function lp() {
    this.Y = null;
    this.status = 0;
    this.ha = null;
    this.wrap = this.pending = this.hc = this.Ha = 0;
    this.O = null;
    this.Ja = 0;
    this.method = 8;
    this.Eb = -1;
    this.hb = this.Kd = this.ta = 0;
    this.window = null;
    this.Ze = 0;
    this.head = this.Sa = null;
    this.ye =
      this.ie =
      this.strategy =
      this.level =
      this.sd =
      this.te =
      this.Da =
      this.K =
      this.Gb =
      this.F =
      this.ob =
      this.Ce =
      this.ba =
      this.Ca =
      this.Ya =
      this.Xa =
      this.jd =
      this.Bc =
      this.Z =
        0;
    this.Ba = new R.Ta(1146);
    this.lb = new R.Ta(122);
    this.qa = new R.Ta(78);
    $o(this.Ba);
    $o(this.lb);
    $o(this.qa);
    this.Rd = this.uc = this.Dc = null;
    this.Va = new R.Ta(16);
    this.ja = new R.Ta(573);
    $o(this.ja);
    this.Cb = this.Za = 0;
    this.depth = new R.Ta(573);
    $o(this.depth);
    this.na =
      this.xa =
      this.sa =
      this.matches =
      this.Kb =
      this.ab =
      this.Vb =
      this.Ga =
      this.ec =
      this.pd =
        0;
  }
  function mp(a, b) {
    if (!a || !a.state || 5 < b || 0 > b) return a ? Zo(a, -2) : -2;
    var c = a.state;
    if (!a.output || (!a.input && 0 !== a.wa) || (666 === c.status && 4 !== b))
      return Zo(a, 0 === a.aa ? -5 : -2);
    c.Y = a;
    var d = c.Eb;
    c.Eb = b;
    if (42 === c.status)
      if (2 === c.wrap)
        (a.R = 0),
          S(c, 31),
          S(c, 139),
          S(c, 8),
          c.O
            ? (S(
                c,
                (c.O.text ? 1 : 0) +
                  (c.O.cb ? 2 : 0) +
                  (c.O.bb ? 4 : 0) +
                  (c.O.name ? 8 : 0) +
                  (c.O.comment ? 16 : 0)
              ),
              S(c, c.O.time & 255),
              S(c, (c.O.time >> 8) & 255),
              S(c, (c.O.time >> 16) & 255),
              S(c, (c.O.time >> 24) & 255),
              S(c, 9 === c.level ? 2 : 2 <= c.strategy || 2 > c.level ? 4 : 0),
              S(c, c.O.xi & 255),
              c.O.bb &&
                c.O.bb.length &&
                (S(c, c.O.bb.length & 255), S(c, (c.O.bb.length >> 8) & 255)),
              c.O.cb && (a.R = mo(a.R, c.ha, c.pending, 0)),
              (c.Ja = 0),
              (c.status = 69))
            : (S(c, 0),
              S(c, 0),
              S(c, 0),
              S(c, 0),
              S(c, 0),
              S(c, 9 === c.level ? 2 : 2 <= c.strategy || 2 > c.level ? 4 : 0),
              S(c, 3),
              (c.status = 113));
      else {
        var e = (8 + ((c.Kd - 8) << 4)) << 8;
        e |=
          (2 <= c.strategy || 2 > c.level
            ? 0
            : 6 > c.level
            ? 1
            : 6 === c.level
            ? 2
            : 3) << 6;
        0 !== c.F && (e |= 32);
        c.status = 113;
        cp(c, e + (31 - (e % 31)));
        0 !== c.F && (cp(c, a.R >>> 16), cp(c, a.R & 65535));
        a.R = 1;
      }
    if (69 === c.status)
      if (c.O.bb) {
        for (
          e = c.pending;
          c.Ja < (c.O.bb.length & 65535) &&
          (c.pending !== c.Ha ||
            (c.O.cb && c.pending > e && (a.R = mo(a.R, c.ha, c.pending - e, e)),
            ap(a),
            (e = c.pending),
            c.pending !== c.Ha));

        )
          S(c, c.O.bb[c.Ja] & 255), c.Ja++;
        c.O.cb && c.pending > e && (a.R = mo(a.R, c.ha, c.pending - e, e));
        c.Ja === c.O.bb.length && ((c.Ja = 0), (c.status = 73));
      } else c.status = 73;
    if (73 === c.status)
      if (c.O.name) {
        e = c.pending;
        do {
          if (
            c.pending === c.Ha &&
            (c.O.cb && c.pending > e && (a.R = mo(a.R, c.ha, c.pending - e, e)),
            ap(a),
            (e = c.pending),
            c.pending === c.Ha)
          ) {
            var f = 1;
            break;
          }
          f = c.Ja < c.O.name.length ? c.O.name.charCodeAt(c.Ja++) & 255 : 0;
          S(c, f);
        } while (0 !== f);
        c.O.cb && c.pending > e && (a.R = mo(a.R, c.ha, c.pending - e, e));
        0 === f && ((c.Ja = 0), (c.status = 91));
      } else c.status = 91;
    if (91 === c.status)
      if (c.O.comment) {
        e = c.pending;
        do {
          if (
            c.pending === c.Ha &&
            (c.O.cb && c.pending > e && (a.R = mo(a.R, c.ha, c.pending - e, e)),
            ap(a),
            (e = c.pending),
            c.pending === c.Ha)
          ) {
            f = 1;
            break;
          }
          f =
            c.Ja < c.O.comment.length
              ? c.O.comment.charCodeAt(c.Ja++) & 255
              : 0;
          S(c, f);
        } while (0 !== f);
        c.O.cb && c.pending > e && (a.R = mo(a.R, c.ha, c.pending - e, e));
        0 === f && (c.status = 103);
      } else c.status = 103;
    103 === c.status &&
      (c.O.cb
        ? (c.pending + 2 > c.Ha && ap(a),
          c.pending + 2 <= c.Ha &&
            (S(c, a.R & 255),
            S(c, (a.R >> 8) & 255),
            (a.R = 0),
            (c.status = 113)))
        : (c.status = 113));
    if (0 !== c.pending) {
      if ((ap(a), 0 === a.aa)) return (c.Eb = -1), 0;
    } else if (
      0 === a.wa &&
      (b << 1) - (4 < b ? 9 : 0) <= (d << 1) - (4 < d ? 9 : 0) &&
      4 !== b
    )
      return Zo(a, -5);
    if (666 === c.status && 0 !== a.wa) return Zo(a, -5);
    if (0 !== a.wa || 0 !== c.K || (0 !== b && 666 !== c.status)) {
      d =
        2 === c.strategy
          ? ip(c, b)
          : 3 === c.strategy
          ? hp(c, b)
          : kp[c.level].Gf(c, b);
      if (3 === d || 4 === d) c.status = 666;
      if (1 === d || 3 === d) return 0 === a.aa && (c.Eb = -1), 0;
      if (
        2 === d &&
        (1 === b
          ? (Jo(c, 2, 3),
            Ko(c, 256, xo),
            16 === c.na
              ? (Io(c, c.xa), (c.xa = 0), (c.na = 0))
              : 8 <= c.na &&
                ((c.ha[c.pending++] = c.xa & 255), (c.xa >>= 8), (c.na -= 8)))
          : 5 !== b &&
            (Jo(c, 0, 3),
            Po(c, 0, 0),
            3 === b &&
              ($o(c.head), 0 === c.K && ((c.F = 0), (c.Ca = 0), (c.sa = 0)))),
        ap(a),
        0 === a.aa)
      )
        return (c.Eb = -1), 0;
    }
    if (4 !== b) return 0;
    if (0 >= c.wrap) return 1;
    2 === c.wrap
      ? (S(c, a.R & 255),
        S(c, (a.R >> 8) & 255),
        S(c, (a.R >> 16) & 255),
        S(c, (a.R >> 24) & 255),
        S(c, a.sb & 255),
        S(c, (a.sb >> 8) & 255),
        S(c, (a.sb >> 16) & 255),
        S(c, (a.sb >> 24) & 255))
      : (cp(c, a.R >>> 16), cp(c, a.R & 65535));
    ap(a);
    0 < c.wrap && (c.wrap = -c.wrap);
    return 0 !== c.pending ? 0 : 1;
  }
  var np = {};
  np = function () {
    this.input = null;
    this.sb = this.wa = this.qb = 0;
    this.output = null;
    this.Id = this.aa = this.Ib = 0;
    this.msg = "";
    this.state = null;
    this.Yc = 2;
    this.R = 0;
  };
  var op = Object.prototype.toString;
  function pp(a) {
    if (!(this instanceof pp)) return new pp(a);
    a = this.options = R.assign(
      {
        level: -1,
        method: 8,
        chunkSize: 16384,
        ib: 15,
        Ig: 8,
        strategy: 0,
        gb: "",
      },
      a || {}
    );
    a.raw && 0 < a.ib
      ? (a.ib = -a.ib)
      : a.Nf && 0 < a.ib && 16 > a.ib && (a.ib += 16);
    this.err = 0;
    this.msg = "";
    this.ended = !1;
    this.chunks = [];
    this.Y = new np();
    this.Y.aa = 0;
    var b = this.Y;
    var c = a.level,
      d = a.method,
      e = a.ib,
      f = a.Ig,
      g = a.strategy;
    if (b) {
      var h = 1;
      -1 === c && (c = 6);
      0 > e ? ((h = 0), (e = -e)) : 15 < e && ((h = 2), (e -= 16));
      if (
        1 > f ||
        9 < f ||
        8 !== d ||
        8 > e ||
        15 < e ||
        0 > c ||
        9 < c ||
        0 > g ||
        4 < g
      )
        b = Zo(b, -2);
      else {
        8 === e && (e = 9);
        var k = new lp();
        b.state = k;
        k.Y = b;
        k.wrap = h;
        k.O = null;
        k.Kd = e;
        k.ta = 1 << k.Kd;
        k.hb = k.ta - 1;
        k.jd = f + 7;
        k.Bc = 1 << k.jd;
        k.Xa = k.Bc - 1;
        k.Ya = ~~((k.jd + 3 - 1) / 3);
        k.window = new R.tb(2 * k.ta);
        k.head = new R.Ta(k.Bc);
        k.Sa = new R.Ta(k.ta);
        k.ec = 1 << (f + 6);
        k.Ha = 4 * k.ec;
        k.ha = new R.tb(k.Ha);
        k.Vb = 1 * k.ec;
        k.pd = 3 * k.ec;
        k.level = c;
        k.strategy = g;
        k.method = d;
        if (b && b.state) {
          b.sb = b.Id = 0;
          b.Yc = 2;
          c = b.state;
          c.pending = 0;
          c.hc = 0;
          0 > c.wrap && (c.wrap = -c.wrap);
          c.status = c.wrap ? 42 : 113;
          b.R = 2 === c.wrap ? 0 : 1;
          c.Eb = 0;
          if (!Xo) {
            d = Array(16);
            for (f = g = 0; 28 > f; f++)
              for (Bo[f] = g, e = 0; e < 1 << to[f]; e++) Ao[g++] = f;
            Ao[g - 1] = f;
            for (f = g = 0; 16 > f; f++)
              for (Co[f] = g, e = 0; e < 1 << uo[f]; e++) zo[g++] = f;
            for (g >>= 7; 30 > f; f++)
              for (Co[f] = g << 7, e = 0; e < 1 << (uo[f] - 7); e++)
                zo[256 + g++] = f;
            for (e = 0; 15 >= e; e++) d[e] = 0;
            for (e = 0; 143 >= e; ) (xo[2 * e + 1] = 8), e++, d[8]++;
            for (; 255 >= e; ) (xo[2 * e + 1] = 9), e++, d[9]++;
            for (; 279 >= e; ) (xo[2 * e + 1] = 7), e++, d[7]++;
            for (; 287 >= e; ) (xo[2 * e + 1] = 8), e++, d[8]++;
            Mo(xo, 287, d);
            for (e = 0; 30 > e; e++)
              (yo[2 * e + 1] = 5), (yo[2 * e] = Lo(e, 5));
            Eo = new Do(xo, to, 257, 286, 15);
            Fo = new Do(yo, uo, 0, 30, 15);
            Go = new Do([], vo, 0, 19, 7);
            Xo = !0;
          }
          c.Dc = new Ho(c.Ba, Eo);
          c.uc = new Ho(c.lb, Fo);
          c.Rd = new Ho(c.qa, Go);
          c.xa = 0;
          c.na = 0;
          No(c);
          c = 0;
        } else c = Zo(b, -2);
        0 === c &&
          ((b = b.state),
          (b.Ze = 2 * b.ta),
          $o(b.head),
          (b.sd = kp[b.level].Gg),
          (b.ie = kp[b.level].Mf),
          (b.ye = kp[b.level].Jg),
          (b.te = kp[b.level].Fg),
          (b.F = 0),
          (b.Ca = 0),
          (b.K = 0),
          (b.sa = 0),
          (b.ba = b.Da = 2),
          (b.ob = 0),
          (b.Z = 0));
        b = c;
      }
    } else b = -2;
    if (0 !== b) throw Error(ro[b]);
    a.header &&
      (b = this.Y) &&
      b.state &&
      2 === b.state.wrap &&
      (b.state.O = a.header);
    if (a.Wb) {
      var l;
      "string" === typeof a.Wb
        ? (l = ko(a.Wb))
        : "[object ArrayBuffer]" === op.call(a.Wb)
        ? (l = new Uint8Array(a.Wb))
        : (l = a.Wb);
      a = this.Y;
      f = l;
      g = f.length;
      if (a && a.state)
        if (
          ((l = a.state),
          (b = l.wrap),
          2 === b || (1 === b && 42 !== l.status) || l.K)
        )
          b = -2;
        else {
          1 === b && (a.R = lo(a.R, f, g, 0));
          l.wrap = 0;
          g >= l.ta &&
            (0 === b && ($o(l.head), (l.F = 0), (l.Ca = 0), (l.sa = 0)),
            (c = new R.tb(l.ta)),
            R.vb(c, f, g - l.ta, l.ta, 0),
            (f = c),
            (g = l.ta));
          c = a.wa;
          d = a.qb;
          e = a.input;
          a.wa = g;
          a.qb = 0;
          a.input = f;
          for (ep(l); 3 <= l.K; ) {
            f = l.F;
            g = l.K - 2;
            do
              (l.Z = ((l.Z << l.Ya) ^ l.window[f + 3 - 1]) & l.Xa),
                (l.Sa[f & l.hb] = l.head[l.Z]),
                (l.head[l.Z] = f),
                f++;
            while (--g);
            l.F = f;
            l.K = 2;
            ep(l);
          }
          l.F += l.K;
          l.Ca = l.F;
          l.sa = l.K;
          l.K = 0;
          l.ba = l.Da = 2;
          l.ob = 0;
          a.qb = d;
          a.input = e;
          a.wa = c;
          l.wrap = b;
          b = 0;
        }
      else b = -2;
      if (0 !== b) throw Error(ro[b]);
      this.Th = !0;
    }
  }
  pp.prototype.push = function (a, b) {
    var c = this.Y,
      d = this.options.chunkSize;
    if (this.ended) return !1;
    var e = b === ~~b ? b : !0 === b ? 4 : 0;
    "string" === typeof a
      ? (c.input = ko(a))
      : "[object ArrayBuffer]" === op.call(a)
      ? (c.input = new Uint8Array(a))
      : (c.input = a);
    c.qb = 0;
    c.wa = c.input.length;
    do {
      0 === c.aa && ((c.output = new R.tb(d)), (c.Ib = 0), (c.aa = d));
      a = mp(c, e);
      if (1 !== a && 0 !== a) return qp(this, a), (this.ended = !0), !1;
      if (0 === c.aa || (0 === c.wa && (4 === e || 2 === e)))
        if ("string" === this.options.gb) {
          var f = R.Gd(c.output, c.Ib);
          b = f;
          f = f.length;
          if (65537 > f && ((b.subarray && jo) || !b.subarray))
            b = String.fromCharCode.apply(null, R.Gd(b, f));
          else {
            for (var g = "", h = 0; h < f; h++) g += String.fromCharCode(b[h]);
            b = g;
          }
          this.chunks.push(b);
        } else (b = R.Gd(c.output, c.Ib)), this.chunks.push(b);
    } while ((0 < c.wa || 0 === c.aa) && 1 !== a);
    if (4 === e)
      return (
        (c = this.Y) && c.state
          ? ((d = c.state.status),
            42 !== d &&
            69 !== d &&
            73 !== d &&
            91 !== d &&
            103 !== d &&
            113 !== d &&
            666 !== d
              ? (a = Zo(c, -2))
              : ((c.state = null), (a = 113 === d ? Zo(c, -3) : 0)))
          : (a = -2),
        qp(this, a),
        (this.ended = !0),
        0 === a
      );
    2 === e && (qp(this, 0), (c.aa = 0));
    return !0;
  };
  function qp(a, b) {
    0 === b &&
      (a.result =
        "string" === a.options.gb ? a.chunks.join("") : R.be(a.chunks));
    a.chunks = [];
    a.err = b;
    a.msg = a.Y.msg;
  }
  function rp(a) {
    this.name = a;
  }
  var sp = new rp("rawColdConfigGroup");
  var tp = new rp("rawHotConfigGroup");
  function up(a) {
    this.T = K(a);
  }
  y(up, M);
  up.prototype.g = function (a) {
    L(this, 5, a);
  };
  function vp(a) {
    this.T = K(a);
  }
  y(vp, M);
  function wp(a) {
    this.T = K(a);
  }
  y(wp, M);
  wp.rb = [2];
  function xp(a) {
    this.T = K(a);
  }
  y(xp, M);
  xp.prototype.Ab = function () {
    return of(this, 61);
  };
  xp.prototype.getPlayerType = function () {
    return of(this, 36);
  };
  xp.prototype.setHomeGroupInfo = function (a) {
    return lf(this, wp, 81, a);
  };
  xp.rb = [9, 66, 32, 86, 100, 101];
  function yp(a) {
    this.T = K(a);
  }
  y(yp, M);
  yp.prototype.getKey = function () {
    return nf(this, 1);
  };
  yp.prototype.Ra = function () {
    return nf(this, jf(this, zp, 2));
  };
  var zp = [2, 3, 4, 5, 6];
  function Ap(a) {
    this.T = K(a);
  }
  y(Ap, M);
  Ap.rb = [15, 26, 28];
  function Bp(a) {
    this.T = K(a);
  }
  y(Bp, M);
  Bp.rb = [5];
  function Cp(a) {
    this.T = K(a);
  }
  y(Cp, M);
  function Dp(a) {
    this.T = K(a);
  }
  y(Dp, M);
  Dp.prototype.setSafetyMode = function (a) {
    return sf(this, 5, a);
  };
  Dp.rb = [12];
  function Ep(a) {
    this.T = K(a);
  }
  y(Ep, M);
  Ep.rb = [12];
  var Fp = {
    Sh: "WEB_DISPLAY_MODE_UNKNOWN",
    Oh: "WEB_DISPLAY_MODE_BROWSER",
    Qh: "WEB_DISPLAY_MODE_MINIMAL_UI",
    Rh: "WEB_DISPLAY_MODE_STANDALONE",
    Ph: "WEB_DISPLAY_MODE_FULLSCREEN",
  };
  function Gp(a) {
    this.T = K(a);
  }
  y(Gp, M);
  function Hp(a) {
    this.T = K(a);
  }
  y(Hp, M);
  Hp.prototype.l = function () {
    var a = void 0 === a ? 0 : a;
    var b = cf(this, 2);
    null != b &&
      (Ne(b) ? ("number" === typeof b ? Ne(b) : Ne(b)) : (b = void 0));
    return null != b ? b : a;
  };
  function Ip(a) {
    this.T = K(a);
  }
  y(Ip, M);
  function Jp(a) {
    this.T = K(a, 487);
  }
  y(Jp, M);
  var Kp = [
    2, 3, 5, 6, 7, 11, 13, 20, 21, 22, 23, 24, 28, 32, 37, 45, 59, 72, 73, 74,
    76, 78, 79, 80, 85, 91, 97, 100, 102, 105, 111, 117, 119, 126, 127, 136,
    146, 148, 151, 156, 157, 158, 159, 163, 164, 168, 176, 177, 178, 179, 184,
    188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203,
    204, 205, 206, 208, 209, 215, 219, 222, 225, 226, 227, 229, 232, 233, 234,
    240, 241, 244, 247, 248, 249, 251, 254, 255, 256, 257, 258, 259, 260, 261,
    266, 270, 272, 278, 288, 291, 293, 300, 304, 308, 309, 310, 311, 313, 314,
    319, 320, 321, 323, 324, 327, 328, 330, 331, 332, 334, 337, 338, 340, 344,
    348, 350, 351, 352, 353, 354, 355, 356, 357, 358, 361, 363, 364, 368, 369,
    370, 373, 374, 375, 378, 380, 381, 383, 388, 389, 399, 402, 403, 410, 411,
    412, 413, 414, 415, 416, 417, 418, 423, 424, 425, 426, 427, 429, 430, 431,
    439, 441, 444, 448, 458, 469, 471, 473, 474, 480, 481, 482, 484, 485, 486,
  ];
  function Lp(a) {
    this.T = K(a);
  }
  y(Lp, M);
  function Mp(a) {
    this.T = K(a);
  }
  y(Mp, M);
  Mp.prototype.getPlaylistId = function () {
    return pf(this, 2);
  };
  var qf = [1, 2];
  function Np(a) {
    this.T = K(a);
  }
  y(Np, M);
  Np.rb = [3];
  var Op = C.window,
    Pp,
    Qp,
    Rp =
      (null == Op ? void 0 : null == (Pp = Op.yt) ? void 0 : Pp.config_) ||
      (null == Op ? void 0 : null == (Qp = Op.ytcfg) ? void 0 : Qp.data_) ||
      {};
  G("yt.config_", Rp);
  function Sp() {
    var a = arguments;
    1 < a.length
      ? (Rp[a[0]] = a[1])
      : 1 === a.length && Object.assign(Rp, a[0]);
  }
  function T(a, b) {
    return a in Rp ? Rp[a] : b;
  }
  var Tp = {};
  function Up() {
    return (
      Tp.clicktracking ||
      (Tp.clicktracking = "clicktracking".replace(
        /\-([a-z])/g,
        function (a, b) {
          return b.toUpperCase();
        }
      ))
    );
  }
  function Vp(a, b, c, d) {
    og.set("" + a, b, {
      rd: c,
      path: "/",
      domain: void 0 === d ? "youtube.com" : d,
      secure: !1,
    });
  }
  var Wp = [];
  function Xp(a) {
    Wp.forEach(function (b) {
      return b(a);
    });
  }
  function Yp(a) {
    return a && window.yterr
      ? function () {
          try {
            return a.apply(this, arguments);
          } catch (b) {
            Zp(b);
          }
        }
      : a;
  }
  function Zp(a) {
    var b = D("yt.logging.errors.log");
    b
      ? b(a, "ERROR", void 0, void 0, void 0, void 0, void 0)
      : ((b = T("ERRORS", [])),
        b.push([a, "ERROR", void 0, void 0, void 0, void 0, void 0]),
        Sp("ERRORS", b));
    Xp(a);
  }
  function $p(a, b, c, d, e) {
    var f = D("yt.logging.errors.log");
    f
      ? f(a, "WARNING", b, c, d, void 0, e)
      : ((f = T("ERRORS", [])),
        f.push([a, "WARNING", b, c, d, void 0, e]),
        Sp("ERRORS", f));
  }
  var aq = /^[\w.]*$/,
    bq = { q: !0, search_query: !0 };
  function cq(a, b) {
    b = a.split(b);
    for (var c = {}, d = 0, e = b.length; d < e; d++) {
      var f = b[d].split("=");
      if ((1 == f.length && f[0]) || 2 == f.length)
        try {
          var g = dq(f[0] || ""),
            h = dq(f[1] || "");
          g in c
            ? Array.isArray(c[g])
              ? ab(c[g], h)
              : (c[g] = [c[g], h])
            : (c[g] = h);
        } catch (p) {
          var k = p,
            l = f[0],
            n = String(cq);
          k.args = [
            {
              key: l,
              value: f[1],
              query: a,
              method: eq == n ? "unchanged" : n,
            },
          ];
          bq.hasOwnProperty(l) || $p(k);
        }
    }
    return c;
  }
  var eq = String(cq);
  function fq(a) {
    var b = [];
    cb(a, function (c, d) {
      var e = encodeURIComponent(String(d)),
        f;
      Array.isArray(c) ? (f = c) : (f = [c]);
      Ta(f, function (g) {
        "" == g ? b.push(e) : b.push(e + "=" + encodeURIComponent(String(g)));
      });
    });
    return b.join("&");
  }
  function gq(a) {
    "?" == a.charAt(0) && (a = a.substr(1));
    return cq(a, "&");
  }
  function hq(a, b, c) {
    var d = a.split("#", 2);
    a = d[0];
    d = 1 < d.length ? "#" + d[1] : "";
    var e = a.split("?", 2);
    a = e[0];
    e = gq(e[1] || "");
    for (var f in b) (!c && null !== e && f in e) || (e[f] = b[f]);
    return Ac(a, e) + d;
  }
  function iq(a) {
    if (!b) var b = window.location.href;
    var c = a.match(tc)[1] || null,
      d = vc(a);
    c && d
      ? ((a = a.match(tc)),
        (b = b.match(tc)),
        (a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]))
      : (a = d
          ? vc(b) == d &&
            (Number(b.match(tc)[4] || null) || null) ==
              (Number(a.match(tc)[4] || null) || null)
          : !0);
    return a;
  }
  function dq(a) {
    return a && a.match(aq) ? a : sc(a);
  }
  function V(a) {
    a = T("EXPERIMENT_FLAGS", {})[a];
    return "string" === typeof a && "false" === a ? !1 : !!a;
  }
  function jq(a, b) {
    a = T("EXPERIMENT_FLAGS", {})[a];
    return void 0 === a && void 0 !== b ? b : Number(a || 0);
  }
  function kq() {
    for (
      var a = [],
        b = T("EXPERIMENTS_FORCED_FLAGS", {}),
        c = w(Object.keys(b)),
        d = c.next();
      !d.done;
      d = c.next()
    )
      (d = d.value), a.push({ key: d, value: String(b[d]) });
    c = T("EXPERIMENT_FLAGS", {});
    var e = w(Object.keys(c));
    for (d = e.next(); !d.done; d = e.next())
      (d = d.value),
        d.startsWith("force_") &&
          void 0 === b[d] &&
          a.push({ key: d, value: String(c[d]) });
    return a;
  }
  var lq = ke || le;
  function mq(a) {
    var b = xb();
    return b ? 0 <= b.toLowerCase().indexOf(a) : !1;
  }
  var nq = Date.now().toString();
  function oq(a) {
    var b = pq;
    a = void 0 === a ? D("yt.ads.biscotti.lastId_") || "" : a;
    var c = Object,
      d = c.assign,
      e = {};
    e.dt = gg;
    e.flash = "0";
    a: {
      try {
        var f = b.g.top.location.href;
      } catch (kb) {
        f = 2;
        break a;
      }
      f = f ? (f === b.l.location.href ? 0 : 1) : 2;
    }
    e = ((e.frm = f), e);
    try {
      e.u_tz = -new Date().getTimezoneOffset();
      var g = void 0 === g ? uf : g;
      try {
        var h = g.history.length;
      } catch (kb) {
        h = 0;
      }
      e.u_his = h;
      var k;
      e.u_h = null == (k = uf.screen) ? void 0 : k.height;
      var l;
      e.u_w = null == (l = uf.screen) ? void 0 : l.width;
      var n;
      e.u_ah = null == (n = uf.screen) ? void 0 : n.availHeight;
      var p;
      e.u_aw = null == (p = uf.screen) ? void 0 : p.availWidth;
      var r;
      e.u_cd = null == (r = uf.screen) ? void 0 : r.colorDepth;
    } catch (kb) {}
    h = b.g;
    try {
      var q = h.screenX;
      var u = h.screenY;
    } catch (kb) {}
    try {
      var t = h.outerWidth;
      var A = h.outerHeight;
    } catch (kb) {}
    try {
      var I = h.innerWidth;
      var X = h.innerHeight;
    } catch (kb) {}
    try {
      var U = h.screenLeft;
      var va = h.screenTop;
    } catch (kb) {}
    try {
      (I = h.innerWidth), (X = h.innerHeight);
    } catch (kb) {}
    try {
      var gc = h.screen.availWidth;
      var cv = h.screen.availTop;
    } catch (kb) {}
    q = [U, va, q, u, gc, cv, t, A, I, X];
    u = b.g.top;
    try {
      var Yc = (u || window).document,
        lb = "CSS1Compat" == Yc.compatMode ? Yc.documentElement : Yc.body;
      var Va = new Dd(lb.clientWidth, lb.clientHeight).round();
    } catch (kb) {
      Va = new Dd(-12245933, -12245933);
    }
    Yc = Va;
    Va = {};
    var Wa = void 0 === Wa ? C : Wa;
    lb = new rn();
    "SVGElement" in Wa && "createElementNS" in Wa.document && lb.set(0);
    u = Mf();
    u["allow-top-navigation-by-user-activation"] && lb.set(1);
    u["allow-popups-to-escape-sandbox"] && lb.set(2);
    Wa.crypto && Wa.crypto.subtle && lb.set(3);
    "TextDecoder" in Wa && "TextEncoder" in Wa && lb.set(4);
    Wa = sn(lb);
    Va.bc = Wa;
    Va.bih = Yc.height;
    Va.biw = Yc.width;
    Va.brdim = q.join();
    b = b.l;
    b =
      ((Va.vis = b.prerendering
        ? 3
        : { visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
            b.visibilityState ||
              b.webkitVisibilityState ||
              b.mozVisibilityState ||
              ""
          ] || 0),
      (Va.wgl = !!uf.WebGLRenderingContext),
      Va);
    c = d.call(c, e, b);
    c.ca_type = "image";
    a && (c.bid = a);
    return c;
  }
  var pq = new (function () {
    var a = window.document;
    this.g = window;
    this.l = a;
  })();
  G("yt.ads_.signals_.getAdSignalsString", function (a) {
    return fq(oq(a));
  });
  F();
  var qq =
    "XMLHttpRequest" in C
      ? function () {
          return new XMLHttpRequest();
        }
      : null;
  function rq() {
    if (!qq) return null;
    var a = qq();
    return "open" in a ? a : null;
  }
  function sq(a, b) {
    "function" === typeof a && (a = Yp(a));
    return window.setTimeout(a, b);
  }
  var tq =
    "client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(
      " "
    );
  x(tq);
  var uq = {
      Authorization: "AUTHORIZATION",
      "X-Goog-EOM-Visitor-Id": "EOM_VISITOR_DATA",
      "X-Goog-Visitor-Id": "SANDBOXED_VISITOR_ID",
      "X-Youtube-Domain-Admin-State": "DOMAIN_ADMIN_STATE",
      "X-Youtube-Chrome-Connected": "CHROME_CONNECTED_HEADER",
      "X-YouTube-Client-Name": "INNERTUBE_CONTEXT_CLIENT_NAME",
      "X-YouTube-Client-Version": "INNERTUBE_CONTEXT_CLIENT_VERSION",
      "X-YouTube-Delegation-Context":
        "INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",
      "X-YouTube-Device": "DEVICE",
      "X-Youtube-Identity-Token": "ID_TOKEN",
      "X-YouTube-Page-CL": "PAGE_CL",
      "X-YouTube-Page-Label": "PAGE_BUILD_LABEL",
      "X-YouTube-Variants-Checksum": "VARIANTS_CHECKSUM",
      "X-Goog-AuthUser": "SESSION_INDEX",
      "X-Goog-PageId": "DELEGATED_SESSION_ID",
    },
    vq =
      "app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address"
        .split(" ")
        .concat(x(tq)),
    wq = !1;
  function xq(a, b) {
    b = void 0 === b ? {} : b;
    var c = iq(a),
      d = V("web_ajax_ignore_global_headers_if_set"),
      e;
    for (e in uq) {
      var f = T(uq[e]),
        g = "X-Goog-AuthUser" === e || "X-Goog-PageId" === e;
      "X-Goog-Visitor-Id" !== e || f || (f = T("VISITOR_DATA"));
      !f ||
        (!c && vc(a)) ||
        (d && void 0 !== b[e]) ||
        ("TVHTML5_UNPLUGGED" === T("INNERTUBE_CLIENT_NAME") && g) ||
        (b[e] = f);
    }
    c &&
      T("SESSION_INDEX") &&
      "TVHTML5_UNPLUGGED" !== T("INNERTUBE_CLIENT_NAME") &&
      (b["X-Yt-Auth-Test"] = "test");
    c && T("WEBVIEW_EOM", !1) && (b["X-Yt-Webview-Eom"] = "1");
    "X-Goog-EOM-Visitor-Id" in b &&
      "X-Goog-Visitor-Id" in b &&
      delete b["X-Goog-Visitor-Id"];
    if (c || !vc(a))
      b["X-YouTube-Utc-Offset"] = String(-new Date().getTimezoneOffset());
    if (c || !vc(a)) {
      try {
        var h = new Intl.DateTimeFormat().resolvedOptions().timeZone;
      } catch (k) {}
      h && (b["X-YouTube-Time-Zone"] = h);
    }
    document.location.hostname.endsWith("youtubeeducation.com") ||
      (!c && vc(a)) ||
      (b["X-YouTube-Ad-Signals"] = fq(oq()));
    return b;
  }
  function yq(a) {
    var b = window.location.search,
      c = vc(a);
    V("debug_handle_relative_url_for_query_forward_killswitch") ||
      (!c && iq(a) && (c = document.location.hostname));
    var d = uc(a.match(tc)[5] || null);
    d =
      (c =
        c &&
        (c.endsWith("youtube.com") || c.endsWith("youtube-nocookie.com"))) &&
      d &&
      d.startsWith("/api/");
    if (!c || d) return a;
    var e = gq(b),
      f = {};
    Ta(vq, function (g) {
      e[g] && (f[g] = e[g]);
    });
    return hq(a, f || {}, !1);
  }
  function zq(a, b) {
    var c = b.format || "JSON";
    a = Aq(a, b);
    var d = Bq(a, b),
      e = !1,
      f = Cq(
        a,
        function (k) {
          if (!e) {
            e = !0;
            h && window.clearTimeout(h);
            a: switch (k && "status" in k ? k.status : -1) {
              case 200:
              case 201:
              case 202:
              case 203:
              case 204:
              case 205:
              case 206:
              case 304:
                var l = !0;
                break a;
              default:
                l = !1;
            }
            var n = null,
              p = 400 <= k.status && 500 > k.status,
              r = 500 <= k.status && 600 > k.status;
            if (l || p || r) n = Dq(a, c, k, b.convertToSafeHtml);
            if (l)
              a: if (k && 204 == k.status) l = !0;
              else {
                switch (c) {
                  case "XML":
                    l = 0 == parseInt(n && n.return_code, 10);
                    break a;
                  case "RAW":
                    l = !0;
                    break a;
                }
                l = !!n;
              }
            n = n || {};
            p = b.context || C;
            l
              ? b.onSuccess && b.onSuccess.call(p, k, n)
              : b.onError && b.onError.call(p, k, n);
            b.onFinish && b.onFinish.call(p, k, n);
          }
        },
        b.method,
        d,
        b.headers,
        b.responseType,
        b.withCredentials
      );
    d = b.timeout || 0;
    if (b.onTimeout && 0 < d) {
      var g = b.onTimeout;
      var h = sq(function () {
        e ||
          ((e = !0),
          f.abort(),
          window.clearTimeout(h),
          g.call(b.context || C, f));
      }, d);
    }
    return f;
  }
  function Aq(a, b) {
    b.includeDomain &&
      (a =
        document.location.protocol +
        "//" +
        document.location.hostname +
        (document.location.port ? ":" + document.location.port : "") +
        a);
    var c = T("XSRF_FIELD_NAME");
    if ((b = b.urlParams)) b[c] && delete b[c], (a = hq(a, b || {}, !0));
    return a;
  }
  function Bq(a, b) {
    var c = T("XSRF_FIELD_NAME"),
      d = T("XSRF_TOKEN"),
      e = b.postBody || "",
      f = b.postParams,
      g = T("XSRF_FIELD_NAME"),
      h;
    b.headers && (h = b.headers["Content-Type"]);
    b.excludeXsrf ||
      (vc(a) && !b.withCredentials && vc(a) != document.location.hostname) ||
      "POST" != b.method ||
      (h && "application/x-www-form-urlencoded" != h) ||
      (b.postParams && b.postParams[g]) ||
      (f || (f = {}), (f[c] = d));
    ((V("ajax_parse_query_data_only_when_filled") &&
      f &&
      0 < Object.keys(f).length) ||
      f) &&
      "string" === typeof e &&
      ((e = gq(e)),
      hb(e, f),
      (e =
        b.postBodyFormat && "JSON" == b.postBodyFormat
          ? JSON.stringify(e)
          : zc(e)));
    if (!(a = e) && (a = f)) {
      a: {
        for (var k in f) {
          f = !1;
          break a;
        }
        f = !0;
      }
      a = !f;
    }
    !wq &&
      a &&
      "POST" != b.method &&
      ((wq = !0), Zp(Error("AJAX request with postData should use POST")));
    return e;
  }
  function Dq(a, b, c, d) {
    var e = null;
    switch (b) {
      case "JSON":
        try {
          var f = c.responseText;
        } catch (g) {
          throw (
            ((d = Error("Error reading responseText")),
            (d.params = a),
            $p(d),
            g)
          );
        }
        a = c.getResponseHeader("Content-Type") || "";
        f &&
          0 <= a.indexOf("json") &&
          (")]}'\n" === f.substring(0, 5) && (f = f.substring(5)),
          (e = JSON.parse(f)));
        break;
      case "XML":
        if ((a = (a = c.responseXML) ? Eq(a) : null))
          (e = {}),
            Ta(a.getElementsByTagName("*"), function (g) {
              e[g.tagName] = Fq(g);
            });
    }
    d && Gq(e);
    return e;
  }
  function Gq(a) {
    if (Ha(a))
      for (var b in a) {
        var c;
        (c = "html_content" == b) ||
          ((c = b.length - 5), (c = 0 <= c && b.indexOf("_html", c) == c));
        if (c) {
          c = b;
          var d = nc(a[b]);
          a[c] = d;
        } else Gq(a[b]);
      }
  }
  function Eq(a) {
    return a
      ? (a = ("responseXML" in a ? a.responseXML : a).getElementsByTagName(
          "root"
        )) && 0 < a.length
        ? a[0]
        : null
      : null;
  }
  function Fq(a) {
    var b = "";
    Ta(a.childNodes, function (c) {
      b += c.nodeValue;
    });
    return b;
  }
  function Hq(a, b) {
    b.method = "POST";
    b.postParams || (b.postParams = {});
    return zq(a, b);
  }
  function Cq(a, b, c, d, e, f, g, h) {
    function k() {
      4 == (l && "readyState" in l ? l.readyState : 0) && b && Yp(b)(l);
    }
    c = void 0 === c ? "GET" : c;
    d = void 0 === d ? "" : d;
    h = void 0 === h ? !1 : h;
    var l = rq();
    if (!l) return null;
    "onloadend" in l
      ? l.addEventListener("loadend", k, !1)
      : (l.onreadystatechange = k);
    V("debug_forward_web_query_parameters") && (a = yq(a));
    l.open(c, a, !0);
    f && (l.responseType = f);
    g && (l.withCredentials = !0);
    c = "POST" == c && (void 0 === window.FormData || !(d instanceof FormData));
    if ((e = xq(a, e)))
      for (var n in e)
        l.setRequestHeader(n, e[n]),
          "content-type" == n.toLowerCase() && (c = !1);
    c &&
      l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    h &&
      "setAttributionReporting" in XMLHttpRequest.prototype &&
      l.setAttributionReporting({
        eventSourceEligible: !0,
        triggerEligible: !1,
      });
    l.send(d);
    return l;
  }
  function Iq() {}
  function Jq() {
    if (!C.matchMedia) return "WEB_DISPLAY_MODE_UNKNOWN";
    try {
      return C.matchMedia("(display-mode: standalone)").matches
        ? "WEB_DISPLAY_MODE_STANDALONE"
        : C.matchMedia("(display-mode: minimal-ui)").matches
        ? "WEB_DISPLAY_MODE_MINIMAL_UI"
        : C.matchMedia("(display-mode: fullscreen)").matches
        ? "WEB_DISPLAY_MODE_FULLSCREEN"
        : C.matchMedia("(display-mode: browser)").matches
        ? "WEB_DISPLAY_MODE_BROWSER"
        : "WEB_DISPLAY_MODE_UNKNOWN";
    } catch (a) {
      return "WEB_DISPLAY_MODE_UNKNOWN";
    }
  }
  function Kq(a) {
    switch (a) {
      case "DESKTOP":
        return 1;
      case "UNKNOWN_PLATFORM":
        return 0;
      case "TV":
        return 2;
      case "GAME_CONSOLE":
        return 3;
      case "MOBILE":
        return 4;
      case "TABLET":
        return 5;
    }
  }
  G("ytglobal.prefsUserPrefsPrefs_", D("ytglobal.prefsUserPrefsPrefs_") || {});
  var Lq = {
      bluetooth: "CONN_DISCO",
      cellular: "CONN_CELLULAR_UNKNOWN",
      ethernet: "CONN_WIFI",
      none: "CONN_NONE",
      wifi: "CONN_WIFI",
      wimax: "CONN_CELLULAR_4G",
      other: "CONN_UNKNOWN",
      unknown: "CONN_UNKNOWN",
      "slow-2g": "CONN_CELLULAR_2G",
      "2g": "CONN_CELLULAR_2G",
      "3g": "CONN_CELLULAR_3G",
      "4g": "CONN_CELLULAR_4G",
    },
    Mq = {
      CONN_DEFAULT: 0,
      CONN_UNKNOWN: 1,
      CONN_NONE: 2,
      CONN_WIFI: 3,
      CONN_CELLULAR_2G: 4,
      CONN_CELLULAR_3G: 5,
      CONN_CELLULAR_4G: 6,
      CONN_CELLULAR_UNKNOWN: 7,
      CONN_DISCO: 8,
      CONN_CELLULAR_5G: 9,
      CONN_WIFI_METERED: 10,
      CONN_CELLULAR_5G_SA: 11,
      CONN_CELLULAR_5G_NSA: 12,
      CONN_WIRED: 30,
      CONN_INVALID: 31,
    },
    Nq = {
      EFFECTIVE_CONNECTION_TYPE_UNKNOWN: 0,
      EFFECTIVE_CONNECTION_TYPE_OFFLINE: 1,
      EFFECTIVE_CONNECTION_TYPE_SLOW_2G: 2,
      EFFECTIVE_CONNECTION_TYPE_2G: 3,
      EFFECTIVE_CONNECTION_TYPE_3G: 4,
      EFFECTIVE_CONNECTION_TYPE_4G: 5,
    },
    Oq = {
      "slow-2g": "EFFECTIVE_CONNECTION_TYPE_SLOW_2G",
      "2g": "EFFECTIVE_CONNECTION_TYPE_2G",
      "3g": "EFFECTIVE_CONNECTION_TYPE_3G",
      "4g": "EFFECTIVE_CONNECTION_TYPE_4G",
    };
  function Pq() {
    var a = C.navigator;
    return a ? a.connection : void 0;
  }
  function Qq(a) {
    var b = Ca.apply(1, arguments);
    var c = Error.call(this, a);
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.args = [].concat(x(b));
  }
  y(Qq, Error);
  function Rq() {
    try {
      return Sq(), !0;
    } catch (a) {
      return !1;
    }
  }
  function Sq() {
    if (void 0 !== T("DATASYNC_ID")) return T("DATASYNC_ID");
    throw new Qq("Datasync ID not set", "unknown");
  }
  function Tq() {}
  function Uq(a, b) {
    return zg.kb(a, 0, b);
  }
  Tq.prototype.Pa = function (a, b) {
    return this.kb(a, 1, b);
  };
  Tq.prototype.Qb = function (a) {
    var b = D("yt.scheduler.instance.addImmediateJob");
    b ? b(a) : a();
  };
  var Vq = jq("web_emulated_idle_callback_delay", 300),
    Wq = 1e3 / 60 - 3,
    Xq = [8, 5, 4, 3, 2, 1, 0];
  function Yq(a) {
    a = void 0 === a ? {} : a;
    Ec.call(this);
    this.l = [];
    this.i = {};
    this.L = this.g = 0;
    this.J = this.o = !1;
    this.C = [];
    this.D = this.M = !1;
    for (var b = w(Xq), c = b.next(); !c.done; c = b.next())
      this.l[c.value] = [];
    this.m = 0;
    this.va = a.timeout || 1;
    this.u = Wq;
    this.s = 0;
    this.N = this.Mg.bind(this);
    this.ka = this.mh.bind(this);
    this.da = this.ff.bind(this);
    this.ea = this.kg.bind(this);
    this.ia = this.Rg.bind(this);
    this.ca =
      !!window.requestIdleCallback &&
      !!window.cancelIdleCallback &&
      !V("disable_scheduler_requestIdleCallback");
    (this.H = !1 !== a.useRaf && !!window.requestAnimationFrame) &&
      document.addEventListener("visibilitychange", this.N);
  }
  y(Yq, Ec);
  m = Yq.prototype;
  m.Qb = function (a) {
    var b = F();
    Zq(a);
    a = F() - b;
    this.o || (this.u -= a);
  };
  m.kb = function (a, b, c) {
    ++this.L;
    if (10 === b) return this.Qb(a), this.L;
    var d = this.L;
    this.i[d] = a;
    this.o && !c
      ? this.C.push({ id: d, priority: b })
      : (this.l[b].push(d),
        this.J ||
          this.o ||
          (0 !== this.g && $q(this) !== this.s && ar(this), this.start()));
    return d;
  };
  m.Ea = function (a) {
    delete this.i[a];
  };
  function br(a) {
    a.C.length = 0;
    for (var b = 5; 0 <= b; b--) a.l[b].length = 0;
    a.l[8].length = 0;
    a.i = {};
    ar(a);
  }
  function $q(a) {
    if (a.l[8].length) {
      if (a.D) return 4;
      if (!document.hidden && a.H) return 3;
    }
    for (var b = 5; b >= a.m; b--)
      if (0 < a.l[b].length)
        return 0 < b ? (!document.hidden && a.H ? 3 : 2) : 1;
    return 0;
  }
  function cr(a) {
    var b = D("yt.logging.errors.log");
    b && b(a);
  }
  function Zq(a) {
    try {
      a();
    } catch (b) {
      cr(b);
    }
  }
  function dr(a) {
    for (var b = w(Xq), c = b.next(); !c.done; c = b.next())
      if (a.l[c.value].length) return !0;
    return !1;
  }
  m.kg = function (a) {
    var b = void 0;
    a && (b = a.timeRemaining());
    this.M = !0;
    er(this, b);
    this.M = !1;
  };
  m.mh = function () {
    er(this);
  };
  m.ff = function () {
    fr(this);
  };
  m.Rg = function (a) {
    this.D = !0;
    var b = $q(this);
    4 === b && b !== this.s && (ar(this), this.start());
    er(this, void 0, a);
    this.D = !1;
  };
  m.Mg = function () {
    document.hidden || fr(this);
    this.g && (ar(this), this.start());
  };
  function fr(a) {
    ar(a);
    a.o = !0;
    for (var b = F(), c = a.l[8]; c.length; ) {
      var d = c.shift(),
        e = a.i[d];
      delete a.i[d];
      e && Zq(e);
    }
    gr(a);
    a.o = !1;
    dr(a) && a.start();
    b = F() - b;
    a.u -= b;
  }
  function gr(a) {
    for (var b = 0, c = a.C.length; b < c; b++) {
      var d = a.C[b];
      a.l[d.priority].push(d.id);
    }
    a.C.length = 0;
  }
  function er(a, b, c) {
    (a.D && 4 === a.s && a.g) || ar(a);
    a.o = !0;
    b = F() + (b || a.u);
    for (var d = a.l[5]; d.length; ) {
      var e = d.shift(),
        f = a.i[e];
      delete a.i[e];
      if (f)
        try {
          f(c);
        } catch (l) {
          cr(l);
        }
    }
    for (d = a.l[4]; d.length; )
      (c = d.shift()), (e = a.i[c]), delete a.i[c], e && Zq(e);
    d = a.M ? 0 : 1;
    d = a.m > d ? a.m : d;
    if (!(F() >= b)) {
      do {
        a: {
          c = a;
          e = d;
          for (f = 3; f >= e; f--)
            for (var g = c.l[f]; g.length; ) {
              var h = g.shift(),
                k = c.i[h];
              delete c.i[h];
              if (k) {
                c = k;
                break a;
              }
            }
          c = null;
        }
        c && Zq(c);
      } while (c && F() < b);
    }
    a.o = !1;
    gr(a);
    a.u = Wq;
    dr(a) && a.start();
  }
  m.start = function () {
    this.J = !1;
    if (0 === this.g)
      switch (((this.s = $q(this)), this.s)) {
        case 1:
          var a = this.ea;
          this.g = this.ca
            ? window.requestIdleCallback(a, { timeout: 3e3 })
            : window.setTimeout(a, Vq);
          break;
        case 2:
          this.g = window.setTimeout(this.ka, this.va);
          break;
        case 3:
          this.g = window.requestAnimationFrame(this.ia);
          break;
        case 4:
          this.g = window.setTimeout(this.da, 0);
      }
  };
  function ar(a) {
    if (a.g) {
      switch (a.s) {
        case 1:
          var b = a.g;
          a.ca ? window.cancelIdleCallback(b) : window.clearTimeout(b);
          break;
        case 2:
        case 4:
          window.clearTimeout(a.g);
          break;
        case 3:
          window.cancelAnimationFrame(a.g);
      }
      a.g = 0;
    }
  }
  m.Ia = function () {
    br(this);
    ar(this);
    this.H && document.removeEventListener("visibilitychange", this.N);
    Ec.prototype.Ia.call(this);
  };
  var hr = D("yt.scheduler.instance.timerIdMap_") || {},
    ir = jq("kevlar_tuner_scheduler_soft_state_timer_ms", 800),
    jr = 0,
    kr = 0;
  function lr() {
    var a = D("ytglobal.schedulerInstanceInstance_");
    if (!a || a.zb)
      (a = new Yq(T("scheduler") || {})),
        G("ytglobal.schedulerInstanceInstance_", a);
    return a;
  }
  function mr() {
    nr();
    var a = D("ytglobal.schedulerInstanceInstance_");
    a &&
      (a && "function" == typeof a.dispose && a.dispose(),
      G("ytglobal.schedulerInstanceInstance_", null));
  }
  function nr() {
    br(lr());
    for (var a in hr) hr.hasOwnProperty(a) && delete hr[Number(a)];
  }
  function or(a, b, c) {
    if (!c) return (c = void 0 === c), -lr().kb(a, b, c);
    var d = window.setTimeout(function () {
      var e = lr().kb(a, b);
      hr[d] = e;
    }, c);
    return d;
  }
  function pr(a) {
    lr().Qb(a);
  }
  function qr(a) {
    var b = lr();
    if (0 > a) b.Ea(-a);
    else {
      var c = hr[a];
      c ? (b.Ea(c), delete hr[a]) : window.clearTimeout(a);
    }
  }
  function rr() {
    sr();
  }
  function sr() {
    window.clearTimeout(jr);
    lr().start();
  }
  function tr() {
    var a = lr();
    ar(a);
    a.J = !0;
    window.clearTimeout(jr);
    jr = window.setTimeout(rr, ir);
  }
  function ur() {
    window.clearTimeout(kr);
    kr = window.setTimeout(function () {
      vr(0);
    }, ir);
  }
  function vr(a) {
    ur();
    var b = lr();
    b.m = a;
    b.start();
  }
  function wr(a) {
    ur();
    var b = lr();
    b.m > a && ((b.m = a), b.start());
  }
  function xr() {
    window.clearTimeout(kr);
    var a = lr();
    a.m = 0;
    a.start();
  }
  function yr() {
    Tq.apply(this, arguments);
  }
  y(yr, Tq);
  function zr() {
    yr.g || (yr.g = new yr());
    return yr.g;
  }
  yr.prototype.kb = function (a, b, c) {
    void 0 !== c && Number.isNaN(Number(c)) && (c = void 0);
    var d = D("yt.scheduler.instance.addJob");
    return d ? d(a, b, c) : void 0 === c ? (a(), NaN) : sq(a, c || 0);
  };
  yr.prototype.Ea = function (a) {
    if (void 0 === a || !Number.isNaN(Number(a))) {
      var b = D("yt.scheduler.instance.cancelJob");
      b ? b(a) : window.clearTimeout(a);
    }
  };
  yr.prototype.start = function () {
    var a = D("yt.scheduler.instance.start");
    a && a();
  };
  var zg = zr();
  V("web_scheduler_auto_init") &&
    !D("yt.scheduler.initialized") &&
    (G("yt.scheduler.instance.dispose", mr),
    G("yt.scheduler.instance.addJob", or),
    G("yt.scheduler.instance.addImmediateJob", pr),
    G("yt.scheduler.instance.cancelJob", qr),
    G("yt.scheduler.instance.cancelAllJobs", nr),
    G("yt.scheduler.instance.start", sr),
    G("yt.scheduler.instance.pause", tr),
    G("yt.scheduler.instance.setPriorityThreshold", vr),
    G("yt.scheduler.instance.enablePriorityThreshold", wr),
    G("yt.scheduler.instance.clearPriorityThreshold", xr),
    G("yt.scheduler.initialized", !0));
  function Ar(a) {
    var b = new Zn();
    if (b.g)
      try {
        b.g.setItem("__sak", "1");
        b.g.removeItem("__sak");
        var c = !0;
      } catch (d) {
        c = !1;
      }
    else c = !1;
    (b = c ? (a ? new fo(b, a) : b) : null) ||
      ((a = new $n(a || "UserDataSharedStore")), (b = a.g ? a : null));
    this.g = (a = b) ? new Vn(a) : null;
    this.l = document.domain || window.location.hostname;
  }
  Ar.prototype.set = function (a, b, c, d) {
    c = c || 31104e3;
    this.remove(a);
    if (this.g)
      try {
        this.g.set(a, b, Date.now() + 1e3 * c);
        return;
      } catch (f) {}
    var e = "";
    if (d)
      try {
        e = escape(Jn(b));
      } catch (f) {
        return;
      }
    else e = escape(b);
    Vp(a, e, c, this.l);
  };
  Ar.prototype.get = function (a, b) {
    var c = void 0,
      d = !this.g;
    if (!d)
      try {
        c = this.g.get(a);
      } catch (e) {
        d = !0;
      }
    if (d && (c = og.get("" + a, void 0)) && ((c = unescape(c)), b))
      try {
        c = JSON.parse(c);
      } catch (e) {
        this.remove(a), (c = void 0);
      }
    return c;
  };
  Ar.prototype.remove = function (a) {
    this.g && this.g.remove(a);
    var b = this.l;
    og.remove("" + a, "/", void 0 === b ? "youtube.com" : b);
  };
  var Br = (function () {
    var a;
    return function () {
      a || (a = new Ar("ytidb"));
      return a;
    };
  })();
  function Cr() {
    var a;
    return null == (a = Br()) ? void 0 : a.get("LAST_RESULT_ENTRY_KEY", !0);
  }
  var Dr = [],
    Er = !1;
  function Fr(a) {
    Er ||
      (Dr.push({ type: "ERROR", payload: a }), 10 < Dr.length && Dr.shift());
  }
  function Gr(a, b) {
    Er ||
      (Dr.push({ type: "EVENT", eventType: a, payload: b }),
      10 < Dr.length && Dr.shift());
  }
  function Hr(a) {
    if (0 <= a.indexOf(":")) throw Error("Database name cannot contain ':'");
  }
  function Ir(a) {
    return a.substr(0, a.indexOf(":")) || a;
  }
  var Jr = {},
    Kr =
      ((Jr.AUTH_INVALID = "No user identifier specified."),
      (Jr.EXPLICIT_ABORT = "Transaction was explicitly aborted."),
      (Jr.IDB_NOT_SUPPORTED = "IndexedDB is not supported."),
      (Jr.MISSING_INDEX = "Index not created."),
      (Jr.MISSING_OBJECT_STORES = "Object stores not created."),
      (Jr.DB_DELETED_BY_MISSING_OBJECT_STORES =
        "Database is deleted because expected object stores were not created."),
      (Jr.DB_REOPENED_BY_MISSING_OBJECT_STORES =
        "Database is reopened because expected object stores were not created."),
      (Jr.UNKNOWN_ABORT = "Transaction was aborted for unknown reasons."),
      (Jr.QUOTA_EXCEEDED =
        "The current transaction exceeded its quota limitations."),
      (Jr.QUOTA_MAYBE_EXCEEDED =
        "The current transaction may have failed because of exceeding quota limitations."),
      (Jr.EXECUTE_TRANSACTION_ON_CLOSED_DB =
        "Can't start a transaction on a closed database"),
      (Jr.INCOMPATIBLE_DB_VERSION =
        "The binary is incompatible with the database version"),
      Jr),
    Lr = {},
    Mr =
      ((Lr.AUTH_INVALID = "ERROR"),
      (Lr.EXECUTE_TRANSACTION_ON_CLOSED_DB = "WARNING"),
      (Lr.EXPLICIT_ABORT = "IGNORED"),
      (Lr.IDB_NOT_SUPPORTED = "ERROR"),
      (Lr.MISSING_INDEX = "WARNING"),
      (Lr.MISSING_OBJECT_STORES = "ERROR"),
      (Lr.DB_DELETED_BY_MISSING_OBJECT_STORES = "WARNING"),
      (Lr.DB_REOPENED_BY_MISSING_OBJECT_STORES = "WARNING"),
      (Lr.QUOTA_EXCEEDED = "WARNING"),
      (Lr.QUOTA_MAYBE_EXCEEDED = "WARNING"),
      (Lr.UNKNOWN_ABORT = "WARNING"),
      (Lr.INCOMPATIBLE_DB_VERSION = "WARNING"),
      Lr),
    Nr = {},
    Or =
      ((Nr.AUTH_INVALID = !1),
      (Nr.EXECUTE_TRANSACTION_ON_CLOSED_DB = !1),
      (Nr.EXPLICIT_ABORT = !1),
      (Nr.IDB_NOT_SUPPORTED = !1),
      (Nr.MISSING_INDEX = !1),
      (Nr.MISSING_OBJECT_STORES = !1),
      (Nr.DB_DELETED_BY_MISSING_OBJECT_STORES = !1),
      (Nr.DB_REOPENED_BY_MISSING_OBJECT_STORES = !1),
      (Nr.QUOTA_EXCEEDED = !1),
      (Nr.QUOTA_MAYBE_EXCEEDED = !0),
      (Nr.UNKNOWN_ABORT = !0),
      (Nr.INCOMPATIBLE_DB_VERSION = !1),
      Nr);
  function W(a, b, c, d, e) {
    b = void 0 === b ? {} : b;
    c = void 0 === c ? Kr[a] : c;
    d = void 0 === d ? Mr[a] : d;
    e = void 0 === e ? Or[a] : e;
    Qq.call(
      this,
      c,
      Object.assign(
        {},
        {
          name: "YtIdbKnownError",
          isSw: void 0 === self.document,
          isIframe: self !== self.top,
          type: a,
        },
        b
      )
    );
    this.type = a;
    this.message = c;
    this.level = d;
    this.g = e;
    Object.setPrototypeOf(this, W.prototype);
  }
  y(W, Qq);
  function Pr(a, b) {
    W.call(
      this,
      "MISSING_OBJECT_STORES",
      { expectedObjectStores: b, foundObjectStores: a },
      Kr.MISSING_OBJECT_STORES
    );
    Object.setPrototypeOf(this, Pr.prototype);
  }
  y(Pr, W);
  function Qr(a, b) {
    var c = Error.call(this);
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.index = a;
    this.objectStore = b;
    Object.setPrototypeOf(this, Qr.prototype);
  }
  y(Qr, Error);
  var Rr = [
    "The database connection is closing",
    "Can't start a transaction on a closed database",
    "A mutation operation was attempted on a database that did not allow mutations",
  ];
  function Sr(a, b, c, d) {
    b = Ir(b);
    var e = a instanceof Error ? a : Error("Unexpected error: " + a);
    if (e instanceof W) return e;
    a = { objectStoreNames: c, dbName: b, dbVersion: d };
    if ("QuotaExceededError" === e.name) return new W("QUOTA_EXCEEDED", a);
    if (me && "UnknownError" === e.name)
      return new W("QUOTA_MAYBE_EXCEEDED", a);
    if (e instanceof Qr)
      return new W(
        "MISSING_INDEX",
        Object.assign({}, a, { objectStore: e.objectStore, index: e.index })
      );
    if (
      "InvalidStateError" === e.name &&
      Rr.some(function (f) {
        return e.message.includes(f);
      })
    )
      return new W("EXECUTE_TRANSACTION_ON_CLOSED_DB", a);
    if ("AbortError" === e.name) return new W("UNKNOWN_ABORT", a, e.message);
    e.args = [Object.assign({}, a, { name: "IdbError", wi: e.name })];
    e.level = "WARNING";
    return e;
  }
  function Tr(a, b, c) {
    var d = Cr();
    return new W("IDB_NOT_SUPPORTED", {
      context: {
        caller: a,
        publicName: b,
        version: c,
        hasSucceededOnce: null == d ? void 0 : d.hasSucceededOnce,
      },
    });
  }
  function Ur(a) {
    if (!a) throw Error();
    throw a;
  }
  function Vr(a) {
    return a;
  }
  function Wr(a) {
    this.g = a;
  }
  function Xr(a) {
    function b(e) {
      if ("PENDING" === d.state.status) {
        d.state = { status: "REJECTED", reason: e };
        e = w(d.l);
        for (var f = e.next(); !f.done; f = e.next()) (f = f.value), f();
      }
    }
    function c(e) {
      if ("PENDING" === d.state.status) {
        d.state = { status: "FULFILLED", value: e };
        e = w(d.g);
        for (var f = e.next(); !f.done; f = e.next()) (f = f.value), f();
      }
    }
    var d = this;
    this.state = { status: "PENDING" };
    this.g = [];
    this.l = [];
    a = a.g;
    try {
      a(c, b);
    } catch (e) {
      b(e);
    }
  }
  Xr.all = function (a) {
    return new Xr(
      new Wr(function (b, c) {
        var d = [],
          e = a.length;
        0 === e && b(d);
        for (var f = { Db: 0 }; f.Db < a.length; f = { Db: f.Db }, ++f.Db)
          Yr(
            Xr.resolve(a[f.Db]).then(
              (function (g) {
                return function (h) {
                  d[g.Db] = h;
                  e--;
                  0 === e && b(d);
                };
              })(f)
            ),
            function (g) {
              c(g);
            }
          );
      })
    );
  };
  Xr.resolve = function (a) {
    return new Xr(
      new Wr(function (b, c) {
        a instanceof Xr ? a.then(b, c) : b(a);
      })
    );
  };
  Xr.reject = function (a) {
    return new Xr(
      new Wr(function (b, c) {
        c(a);
      })
    );
  };
  Xr.prototype.then = function (a, b) {
    var c = this,
      d = null != a ? a : Vr,
      e = null != b ? b : Ur;
    return new Xr(
      new Wr(function (f, g) {
        "PENDING" === c.state.status
          ? (c.g.push(function () {
              Zr(c, c, d, f, g);
            }),
            c.l.push(function () {
              $r(c, c, e, f, g);
            }))
          : "FULFILLED" === c.state.status
          ? Zr(c, c, d, f, g)
          : "REJECTED" === c.state.status && $r(c, c, e, f, g);
      })
    );
  };
  function Yr(a, b) {
    a.then(void 0, b);
  }
  function Zr(a, b, c, d, e) {
    try {
      if ("FULFILLED" !== a.state.status)
        throw Error("calling handleResolve before the promise is fulfilled.");
      var f = c(a.state.value);
      f instanceof Xr ? as(a, b, f, d, e) : d(f);
    } catch (g) {
      e(g);
    }
  }
  function $r(a, b, c, d, e) {
    try {
      if ("REJECTED" !== a.state.status)
        throw Error("calling handleReject before the promise is rejected.");
      var f = c(a.state.reason);
      f instanceof Xr ? as(a, b, f, d, e) : d(f);
    } catch (g) {
      e(g);
    }
  }
  function as(a, b, c, d, e) {
    b === c
      ? e(new TypeError("Circular promise chain detected."))
      : c.then(
          function (f) {
            f instanceof Xr ? as(a, b, f, d, e) : d(f);
          },
          function (f) {
            e(f);
          }
        );
  }
  function bs(a, b, c) {
    function d() {
      c(a.error);
      f();
    }
    function e() {
      b(a.result);
      f();
    }
    function f() {
      try {
        a.removeEventListener("success", e), a.removeEventListener("error", d);
      } catch (g) {}
    }
    a.addEventListener("success", e);
    a.addEventListener("error", d);
  }
  function cs(a) {
    return new Promise(function (b, c) {
      bs(a, b, c);
    });
  }
  function ds(a) {
    return new Xr(
      new Wr(function (b, c) {
        bs(a, b, c);
      })
    );
  }
  function es(a, b) {
    return new Xr(
      new Wr(function (c, d) {
        function e() {
          var f = a ? b(a) : null;
          f
            ? f.then(function (g) {
                a = g;
                e();
              }, d)
            : c();
        }
        e();
      })
    );
  }
  var fs = window,
    Y =
      fs.ytcsi && fs.ytcsi.now
        ? fs.ytcsi.now
        : fs.performance &&
          fs.performance.timing &&
          fs.performance.now &&
          fs.performance.timing.navigationStart
        ? function () {
            return fs.performance.timing.navigationStart + fs.performance.now();
          }
        : function () {
            return new Date().getTime();
          };
  function gs(a, b) {
    this.g = a;
    this.options = b;
    this.transactionCount = 0;
    this.i = Math.round(Y());
    this.l = !1;
  }
  m = gs.prototype;
  m.add = function (a, b, c) {
    return hs(this, [a], { mode: "readwrite", ra: !0 }, function (d) {
      return d.objectStore(a).add(b, c);
    });
  };
  m.clear = function (a) {
    return hs(this, [a], { mode: "readwrite", ra: !0 }, function (b) {
      return b.objectStore(a).clear();
    });
  };
  m.close = function () {
    this.g.close();
    var a;
    (null == (a = this.options) ? 0 : a.closed) && this.options.closed();
  };
  m.count = function (a, b) {
    return hs(this, [a], { mode: "readonly", ra: !0 }, function (c) {
      return c.objectStore(a).count(b);
    });
  };
  function is(a, b, c) {
    a = a.g.createObjectStore(b, c);
    return new js(a);
  }
  m.delete = function (a, b) {
    return hs(this, [a], { mode: "readwrite", ra: !0 }, function (c) {
      return c.objectStore(a).delete(b);
    });
  };
  m.get = function (a, b) {
    return hs(this, [a], { mode: "readonly", ra: !0 }, function (c) {
      return c.objectStore(a).get(b);
    });
  };
  function ks(a, b, c) {
    return hs(a, [b], { mode: "readwrite", ra: !0 }, function (d) {
      d = d.objectStore(b);
      return ds(d.g.put(c, void 0));
    });
  }
  m.objectStoreNames = function () {
    return Array.from(this.g.objectStoreNames);
  };
  function hs(a, b, c, d) {
    var e, f, g, h, k, l, n, p, r, q, u, t;
    return B(function (A) {
      switch (A.g) {
        case 1:
          var I = {
            mode: "readonly",
            ra: !1,
            tag: "IDB_TRANSACTION_TAG_UNKNOWN",
          };
          "string" === typeof c ? (I.mode = c) : Object.assign(I, c);
          e = I;
          a.transactionCount++;
          f = e.ra ? 3 : 1;
          g = 0;
        case 2:
          if (h) {
            A.V(4);
            break;
          }
          g++;
          k = Math.round(Y());
          sa(A, 5);
          l = a.g.transaction(b, e.mode);
          I = new ls(l);
          I = ms(I, d);
          return z(A, I, 7);
        case 7:
          return (
            (n = A.l),
            (p = Math.round(Y())),
            ns(a, k, p, g, void 0, b.join(), e),
            A.return(n)
          );
        case 5:
          r = ta(A);
          q = Math.round(Y());
          u = Sr(r, a.g.name, b.join(), a.g.version);
          if ((t = u instanceof W && !u.g) || g >= f)
            ns(a, k, q, g, u, b.join(), e), (h = u);
          A.V(2);
          break;
        case 4:
          return A.return(Promise.reject(h));
      }
    });
  }
  function ns(a, b, c, d, e, f, g) {
    b = c - b;
    e
      ? (e instanceof W &&
          ("QUOTA_EXCEEDED" === e.type || "QUOTA_MAYBE_EXCEEDED" === e.type) &&
          Gr("QUOTA_EXCEEDED", {
            dbName: Ir(a.g.name),
            objectStoreNames: f,
            transactionCount: a.transactionCount,
            transactionMode: g.mode,
          }),
        e instanceof W &&
          "UNKNOWN_ABORT" === e.type &&
          ((c -= a.i),
          0 > c && c >= Math.pow(2, 31) && (c = 0),
          Gr("TRANSACTION_UNEXPECTEDLY_ABORTED", {
            objectStoreNames: f,
            transactionDuration: b,
            transactionCount: a.transactionCount,
            dbDuration: c,
          }),
          (a.l = !0)),
        os(a, !1, d, f, b, g.tag),
        Fr(e))
      : os(a, !0, d, f, b, g.tag);
  }
  function os(a, b, c, d, e, f) {
    Gr("TRANSACTION_ENDED", {
      objectStoreNames: d,
      connectionHasUnknownAbortedTransaction: a.l,
      duration: e,
      isSuccessful: b,
      tryCount: c,
      tag: void 0 === f ? "IDB_TRANSACTION_TAG_UNKNOWN" : f,
    });
  }
  m.getName = function () {
    return this.g.name;
  };
  function js(a) {
    this.g = a;
  }
  m = js.prototype;
  m.add = function (a, b) {
    return ds(this.g.add(a, b));
  };
  m.autoIncrement = function () {
    return this.g.autoIncrement;
  };
  m.clear = function () {
    return ds(this.g.clear()).then(function () {});
  };
  function ps(a, b, c) {
    a.g.createIndex(b, c, { unique: !1 });
  }
  m.count = function (a) {
    return ds(this.g.count(a));
  };
  function qs(a, b) {
    return rs(a, { query: b }, function (c) {
      return c.delete().then(function () {
        return c.continue();
      });
    }).then(function () {});
  }
  m.delete = function (a) {
    return a instanceof IDBKeyRange ? qs(this, a) : ds(this.g.delete(a));
  };
  m.get = function (a) {
    return ds(this.g.get(a));
  };
  m.index = function (a) {
    try {
      return new ss(this.g.index(a));
    } catch (b) {
      if (b instanceof Error && "NotFoundError" === b.name)
        throw new Qr(a, this.g.name);
      throw b;
    }
  };
  m.getName = function () {
    return this.g.name;
  };
  m.keyPath = function () {
    return this.g.keyPath;
  };
  function rs(a, b, c) {
    a = a.g.openCursor(b.query, b.direction);
    return ts(a).then(function (d) {
      return es(d, c);
    });
  }
  function ls(a) {
    var b = this;
    this.g = a;
    this.i = new Map();
    this.l = !1;
    this.done = new Promise(function (c, d) {
      b.g.addEventListener("complete", function () {
        c();
      });
      b.g.addEventListener("error", function (e) {
        e.currentTarget === e.target && d(b.g.error);
      });
      b.g.addEventListener("abort", function () {
        var e = b.g.error;
        if (e) d(e);
        else if (!b.l) {
          e = W;
          for (var f = b.g.objectStoreNames, g = [], h = 0; h < f.length; h++) {
            var k = f.item(h);
            if (null === k)
              throw Error("Invariant: item in DOMStringList is null");
            g.push(k);
          }
          e = new e("UNKNOWN_ABORT", {
            objectStoreNames: g.join(),
            dbName: b.g.db.name,
            mode: b.g.mode,
          });
          d(e);
        }
      });
    });
  }
  function ms(a, b) {
    var c = new Promise(function (d, e) {
      try {
        Yr(
          b(a).then(function (f) {
            d(f);
          }),
          e
        );
      } catch (f) {
        e(f), a.abort();
      }
    });
    return Promise.all([c, a.done]).then(function (d) {
      return w(d).next().value;
    });
  }
  ls.prototype.abort = function () {
    this.g.abort();
    this.l = !0;
    throw new W("EXPLICIT_ABORT");
  };
  ls.prototype.objectStore = function (a) {
    a = this.g.objectStore(a);
    var b = this.i.get(a);
    b || ((b = new js(a)), this.i.set(a, b));
    return b;
  };
  function ss(a) {
    this.g = a;
  }
  m = ss.prototype;
  m.count = function (a) {
    return ds(this.g.count(a));
  };
  m.delete = function (a) {
    return us(this, { query: a }, function (b) {
      return b.delete().then(function () {
        return b.continue();
      });
    });
  };
  m.get = function (a) {
    return ds(this.g.get(a));
  };
  m.getKey = function (a) {
    return ds(this.g.getKey(a));
  };
  m.keyPath = function () {
    return this.g.keyPath;
  };
  m.unique = function () {
    return this.g.unique;
  };
  function us(a, b, c) {
    a = a.g.openCursor(
      void 0 === b.query ? null : b.query,
      void 0 === b.direction ? "next" : b.direction
    );
    return ts(a).then(function (d) {
      return es(d, c);
    });
  }
  function vs(a, b) {
    this.request = a;
    this.cursor = b;
  }
  function ts(a) {
    return ds(a).then(function (b) {
      return b ? new vs(a, b) : null;
    });
  }
  m = vs.prototype;
  m.advance = function (a) {
    this.cursor.advance(a);
    return ts(this.request);
  };
  m.continue = function (a) {
    this.cursor.continue(a);
    return ts(this.request);
  };
  m.delete = function () {
    return ds(this.cursor.delete()).then(function () {});
  };
  m.getKey = function () {
    return this.cursor.key;
  };
  m.Ra = function () {
    return this.cursor.value;
  };
  m.update = function (a) {
    return ds(this.cursor.update(a));
  };
  function ws(a, b, c) {
    return new Promise(function (d, e) {
      function f() {
        r || (r = new gs(g.result, { closed: p }));
        return r;
      }
      var g = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
      var h = c.hf,
        k = c.jf,
        l = c.kh,
        n = c.upgrade,
        p = c.closed,
        r;
      g.addEventListener("upgradeneeded", function (q) {
        try {
          if (null === q.newVersion)
            throw Error(
              "Invariant: newVersion on IDbVersionChangeEvent is null"
            );
          if (null === g.transaction)
            throw Error("Invariant: transaction on IDbOpenDbRequest is null");
          q.dataLoss &&
            "none" !== q.dataLoss &&
            Gr("IDB_DATA_CORRUPTED", {
              reason: q.dataLossMessage || "unknown reason",
              dbName: Ir(a),
            });
          var u = f(),
            t = new ls(g.transaction);
          n &&
            n(
              u,
              function (A) {
                return q.oldVersion < A && q.newVersion >= A;
              },
              t
            );
          t.done.catch(function (A) {
            e(A);
          });
        } catch (A) {
          e(A);
        }
      });
      g.addEventListener("success", function () {
        var q = g.result;
        k &&
          q.addEventListener("versionchange", function () {
            k(f());
          });
        q.addEventListener("close", function () {
          Gr("IDB_UNEXPECTEDLY_CLOSED", {
            dbName: Ir(a),
            dbVersion: q.version,
          });
          l && l();
        });
        d(f());
      });
      g.addEventListener("error", function () {
        e(g.error);
      });
      h &&
        g.addEventListener("blocked", function () {
          h();
        });
    });
  }
  function xs(a, b, c) {
    c = void 0 === c ? {} : c;
    return ws(a, b, c);
  }
  function ys(a, b) {
    b = void 0 === b ? {} : b;
    var c, d, e, f;
    return B(function (g) {
      if (1 == g.g)
        return (
          sa(g, 2),
          (c = self.indexedDB.deleteDatabase(a)),
          (d = b),
          (e = d.hf) &&
            c.addEventListener("blocked", function () {
              e();
            }),
          z(g, cs(c), 4)
        );
      if (2 != g.g) (g.g = 0), (g.o = 0);
      else throw ((f = ta(g)), Sr(f, a, "", -1));
    });
  }
  function zs(a, b) {
    this.name = a;
    this.options = b;
    this.i = !0;
    this.o = this.m = 0;
  }
  zs.prototype.l = function (a, b, c) {
    c = void 0 === c ? {} : c;
    return xs(a, b, c);
  };
  zs.prototype.delete = function (a) {
    a = void 0 === a ? {} : a;
    return ys(this.name, a);
  };
  function As(a, b) {
    return new W("INCOMPATIBLE_DB_VERSION", {
      dbName: a.name,
      oldVersion: a.options.version,
      newVersion: b,
    });
  }
  function Bs(a, b) {
    if (!b) throw Tr("openWithToken", Ir(a.name));
    return Cs(a);
  }
  function Cs(a) {
    function b() {
      var f, g, h, k, l, n, p, r, q, u;
      return B(function (t) {
        switch (t.g) {
          case 1:
            return (
              (g = null != (f = Error().stack) ? f : ""),
              sa(t, 2),
              z(t, a.l(a.name, a.options.version, d), 4)
            );
          case 4:
            h = t.l;
            for (
              var A = a.options, I = [], X = w(Object.keys(A.Jb)), U = X.next();
              !U.done;
              U = X.next()
            ) {
              U = U.value;
              var va = A.Jb[U],
                gc = void 0 === va.Tg ? Number.MAX_VALUE : va.Tg;
              !(h.g.version >= va.Rb) ||
                h.g.version >= gc ||
                h.g.objectStoreNames.contains(U) ||
                I.push(U);
            }
            k = I;
            if (0 === k.length) {
              t.V(5);
              break;
            }
            l = Object.keys(a.options.Jb);
            n = h.objectStoreNames();
            if (a.o < jq("ytidb_reopen_db_retries", 0))
              return (
                a.o++,
                h.close(),
                Fr(
                  new W("DB_REOPENED_BY_MISSING_OBJECT_STORES", {
                    dbName: a.name,
                    expectedObjectStores: l,
                    foundObjectStores: n,
                  })
                ),
                t.return(b())
              );
            if (!(a.m < jq("ytidb_remake_db_retries", 1))) {
              t.V(6);
              break;
            }
            a.m++;
            return z(t, a.delete(), 7);
          case 7:
            return (
              Fr(
                new W("DB_DELETED_BY_MISSING_OBJECT_STORES", {
                  dbName: a.name,
                  expectedObjectStores: l,
                  foundObjectStores: n,
                })
              ),
              t.return(b())
            );
          case 6:
            throw new Pr(n, l);
          case 5:
            return t.return(h);
          case 2:
            p = ta(t);
            if (
              p instanceof DOMException
                ? "VersionError" !== p.name
                : "DOMError" in self && p instanceof DOMError
                ? "VersionError" !== p.name
                : !(p instanceof Object && "message" in p) ||
                  "An attempt was made to open a database using a lower version than the existing version." !==
                    p.message
            ) {
              t.V(8);
              break;
            }
            return z(
              t,
              a.l(a.name, void 0, Object.assign({}, d, { upgrade: void 0 })),
              9
            );
          case 9:
            r = t.l;
            q = r.g.version;
            if (void 0 !== a.options.version && q > a.options.version + 1)
              throw (r.close(), (a.i = !1), As(a, q));
            return t.return(r);
          case 8:
            throw (
              (c(),
              p instanceof Error &&
                !V("ytidb_async_stack_killswitch") &&
                (p.stack = p.stack + "\n" + g.substring(g.indexOf("\n") + 1)),
              Sr(p, a.name, "", null != (u = a.options.version) ? u : -1))
            );
        }
      });
    }
    function c() {
      a.g === e && (a.g = void 0);
    }
    if (!a.i) throw As(a);
    if (a.g) return a.g;
    var d = {
      jf: function (f) {
        f.close();
      },
      closed: c,
      kh: c,
      upgrade: a.options.upgrade,
    };
    var e = b();
    a.g = e;
    return a.g;
  }
  var Ds = new zs("YtIdbMeta", {
    Jb: { databases: { Rb: 1 } },
    upgrade: function (a, b) {
      b(1) && is(a, "databases", { keyPath: "actualName" });
    },
  });
  function Es(a, b) {
    var c;
    return B(function (d) {
      if (1 == d.g) return z(d, Bs(Ds, b), 2);
      c = d.l;
      return d.return(
        hs(c, ["databases"], { ra: !0, mode: "readwrite" }, function (e) {
          var f = e.objectStore("databases");
          return f.get(a.actualName).then(function (g) {
            if (
              g
                ? a.actualName !== g.actualName ||
                  a.publicName !== g.publicName ||
                  a.userIdentifier !== g.userIdentifier
                : 1
            )
              return ds(f.g.put(a, void 0)).then(function () {});
          });
        })
      );
    });
  }
  function Fs(a, b) {
    var c;
    return B(function (d) {
      if (1 == d.g) return a ? z(d, Bs(Ds, b), 2) : d.return();
      c = d.l;
      return d.return(c.delete("databases", a));
    });
  }
  function Gs(a, b) {
    var c, d;
    return B(function (e) {
      return 1 == e.g
        ? ((c = []), z(e, Bs(Ds, b), 2))
        : 3 != e.g
        ? ((d = e.l),
          z(
            e,
            hs(d, ["databases"], { ra: !0, mode: "readonly" }, function (f) {
              c.length = 0;
              return rs(f.objectStore("databases"), {}, function (g) {
                a(g.Ra()) && c.push(g.Ra());
                return g.continue();
              });
            }),
            3
          ))
        : e.return(c);
    });
  }
  function Hs(a) {
    return Gs(function (b) {
      return "LogsDatabaseV2" === b.publicName && void 0 !== b.userIdentifier;
    }, a);
  }
  var Is,
    Js = new (function () {})(new (function () {})());
  function Ks() {
    var a, b, c, d;
    return B(function (e) {
      switch (e.g) {
        case 1:
          a = Cr();
          if (null == (b = a) ? 0 : b.hasSucceededOnce) return e.return(!0);
          var f;
          if ((f = lq))
            (f = /WebKit\/([0-9]+)/.exec(xb())),
              (f = !!(f && 600 <= parseInt(f[1], 10)));
          f &&
            ((f = /WebKit\/([0-9]+)/.exec(xb())),
            (f = !(f && 602 <= parseInt(f[1], 10))));
          if (f || Oc) return e.return(!1);
          try {
            if (
              ((c = self),
              !(c.indexedDB && c.IDBIndex && c.IDBKeyRange && c.IDBObjectStore))
            )
              return e.return(!1);
          } catch (g) {
            return e.return(!1);
          }
          if (
            !(
              "IDBTransaction" in self &&
              "objectStoreNames" in IDBTransaction.prototype
            )
          )
            return e.return(!1);
          sa(e, 2);
          d = {
            actualName: "yt-idb-test-do-not-use",
            publicName: "yt-idb-test-do-not-use",
            userIdentifier: void 0,
          };
          return z(e, Es(d, Js), 4);
        case 4:
          return z(e, Fs("yt-idb-test-do-not-use", Js), 5);
        case 5:
          return e.return(!0);
        case 2:
          return ta(e), e.return(!1);
      }
    });
  }
  function Ls() {
    if (void 0 !== Is) return Is;
    Er = !0;
    return (Is = Ks().then(function (a) {
      Er = !1;
      var b;
      if (null != (b = Br()) && b.g) {
        var c;
        b = {
          hasSucceededOnce:
            (null == (c = Cr()) ? void 0 : c.hasSucceededOnce) || a,
        };
        var d;
        null == (d = Br()) || d.set("LAST_RESULT_ENTRY_KEY", b, 2592e3, !0);
      }
      return a;
    }));
  }
  function Ms() {
    return D("ytglobal.idbToken_") || void 0;
  }
  function Ns() {
    var a = Ms();
    return a
      ? Promise.resolve(a)
      : Ls().then(function (b) {
          (b = b ? Js : void 0) && G("ytglobal.idbToken_", b);
          return b;
        });
  }
  new Pn();
  function Os(a) {
    if (!Rq()) throw ((a = new W("AUTH_INVALID", { dbName: a })), Fr(a), a);
    var b = Sq();
    return { actualName: a + ":" + b, publicName: a, userIdentifier: b };
  }
  function Ps(a, b, c, d) {
    var e, f, g, h, k, l;
    return B(function (n) {
      switch (n.g) {
        case 1:
          return (f = null != (e = Error().stack) ? e : ""), z(n, Ns(), 2);
        case 2:
          g = n.l;
          if (!g)
            throw (
              ((h = Tr("openDbImpl", a, b)),
              V("ytidb_async_stack_killswitch") ||
                (h.stack = h.stack + "\n" + f.substring(f.indexOf("\n") + 1)),
              Fr(h),
              h)
            );
          Hr(a);
          k = c
            ? { actualName: a, publicName: a, userIdentifier: void 0 }
            : Os(a);
          sa(n, 3);
          return z(n, Es(k, g), 5);
        case 5:
          return z(n, xs(k.actualName, b, d), 6);
        case 6:
          return n.return(n.l);
        case 3:
          return (l = ta(n)), sa(n, 7), z(n, Fs(k.actualName, g), 9);
        case 9:
          n.g = 8;
          n.o = 0;
          break;
        case 7:
          ta(n);
        case 8:
          throw l;
      }
    });
  }
  function Qs(a, b, c) {
    c = void 0 === c ? {} : c;
    return Ps(a, b, !1, c);
  }
  function Rs(a, b, c) {
    c = void 0 === c ? {} : c;
    return Ps(a, b, !0, c);
  }
  function Ss(a, b) {
    b = void 0 === b ? {} : b;
    var c, d;
    return B(function (e) {
      if (1 == e.g) return z(e, Ns(), 2);
      if (3 != e.g) {
        c = e.l;
        if (!c) return e.return();
        Hr(a);
        d = Os(a);
        return z(e, ys(d.actualName, b), 3);
      }
      return z(e, Fs(d.actualName, c), 0);
    });
  }
  function Ts(a, b, c) {
    a = a.map(function (d) {
      return B(function (e) {
        return 1 == e.g
          ? z(e, ys(d.actualName, b), 2)
          : z(e, Fs(d.actualName, c), 0);
      });
    });
    return Promise.all(a).then(function () {});
  }
  function Us() {
    var a = void 0 === a ? {} : a;
    var b, c;
    return B(function (d) {
      if (1 == d.g) return z(d, Ns(), 2);
      if (3 != d.g) {
        b = d.l;
        if (!b) return d.return();
        Hr("LogsDatabaseV2");
        return z(d, Hs(b), 3);
      }
      c = d.l;
      return z(d, Ts(c, a, b), 0);
    });
  }
  function Vs(a, b) {
    b = void 0 === b ? {} : b;
    var c;
    return B(function (d) {
      if (1 == d.g) return z(d, Ns(), 2);
      if (3 != d.g) {
        c = d.l;
        if (!c) return d.return();
        Hr(a);
        return z(d, ys(a, b), 3);
      }
      return z(d, Fs(a, c), 0);
    });
  }
  function Ws(a, b) {
    zs.call(this, a, b);
    this.options = b;
    Hr(a);
  }
  y(Ws, zs);
  function Xs(a, b) {
    var c;
    return function () {
      c || (c = new Ws(a, b));
      return c;
    };
  }
  Ws.prototype.l = function (a, b, c) {
    c = void 0 === c ? {} : c;
    return (this.options.Nc ? Rs : Qs)(a, b, Object.assign({}, c));
  };
  Ws.prototype.delete = function (a) {
    a = void 0 === a ? {} : a;
    return (this.options.Nc ? Vs : Ss)(this.name, a);
  };
  function Ys(a, b) {
    return Xs(a, b);
  }
  var Zs = {},
    $s = Ys("ytGcfConfig", {
      Jb:
        ((Zs.coldConfigStore = { Rb: 1 }), (Zs.hotConfigStore = { Rb: 1 }), Zs),
      Nc: !1,
      upgrade: function (a, b) {
        b(1) &&
          (ps(
            is(a, "hotConfigStore", { keyPath: "key", autoIncrement: !0 }),
            "hotTimestampIndex",
            "timestamp"
          ),
          ps(
            is(a, "coldConfigStore", { keyPath: "key", autoIncrement: !0 }),
            "coldTimestampIndex",
            "timestamp"
          ));
      },
      version: 1,
    });
  function at(a) {
    return Bs($s(), a);
  }
  function bt(a, b, c) {
    var d, e, f;
    return B(function (g) {
      switch (g.g) {
        case 1:
          return (
            (d = { config: a, hashData: b, timestamp: Y() }), z(g, at(c), 2)
          );
        case 2:
          return (e = g.l), z(g, e.clear("hotConfigStore"), 3);
        case 3:
          return z(g, ks(e, "hotConfigStore", d), 4);
        case 4:
          return (f = g.l), g.return(f);
      }
    });
  }
  function ct(a, b, c, d) {
    var e, f, g;
    return B(function (h) {
      switch (h.g) {
        case 1:
          return (
            (e = { config: a, hashData: b, configData: c, timestamp: Y() }),
            z(h, at(d), 2)
          );
        case 2:
          return (f = h.l), z(h, f.clear("coldConfigStore"), 3);
        case 3:
          return z(h, ks(f, "coldConfigStore", e), 4);
        case 4:
          return (g = h.l), h.return(g);
      }
    });
  }
  function dt(a) {
    var b, c;
    return B(function (d) {
      return 1 == d.g
        ? z(d, at(a), 2)
        : 3 != d.g
        ? ((b = d.l),
          (c = void 0),
          z(
            d,
            hs(
              b,
              ["coldConfigStore"],
              { mode: "readwrite", ra: !0 },
              function (e) {
                return us(
                  e.objectStore("coldConfigStore").index("coldTimestampIndex"),
                  { direction: "prev" },
                  function (f) {
                    c = f.Ra();
                  }
                );
              }
            ),
            3
          ))
        : d.return(c);
    });
  }
  function et(a) {
    var b, c;
    return B(function (d) {
      return 1 == d.g
        ? z(d, at(a), 2)
        : 3 != d.g
        ? ((b = d.l),
          (c = void 0),
          z(
            d,
            hs(
              b,
              ["hotConfigStore"],
              { mode: "readwrite", ra: !0 },
              function (e) {
                return us(
                  e.objectStore("hotConfigStore").index("hotTimestampIndex"),
                  { direction: "prev" },
                  function (f) {
                    c = f.Ra();
                  }
                );
              }
            ),
            3
          ))
        : d.return(c);
    });
  }
  function ft() {
    Ec.call(this);
    this.l = [];
    this.g = [];
    var a = D("yt.gcf.config.hotUpdateCallbacks");
    a
      ? ((this.l = [].concat(x(a))), (this.g = a))
      : ((this.g = []), G("yt.gcf.config.hotUpdateCallbacks", this.g));
  }
  y(ft, Ec);
  ft.prototype.Ia = function () {
    for (var a = w(this.l), b = a.next(); !b.done; b = a.next()) {
      var c = this.g;
      b = c.indexOf(b.value);
      0 <= b && c.splice(b, 1);
    }
    this.l.length = 0;
    Ec.prototype.Ia.call(this);
  };
  function gt() {
    this.l = 0;
    this.i = new ft();
  }
  function ht(a, b, c) {
    var d, e, f;
    return B(function (g) {
      switch (g.g) {
        case 1:
          if (!V("start_client_gcf")) {
            g.V(0);
            break;
          }
          c && ((a.m = c), G("yt.gcf.config.hotConfigGroup", a.m || null));
          a.g(b);
          d = Ms();
          if (!d) {
            g.V(3);
            break;
          }
          if (c) {
            g.V(4);
            break;
          }
          return z(g, et(d), 5);
        case 5:
          (e = g.l), (c = null == (f = e) ? void 0 : f.config);
        case 4:
          return z(g, bt(c, b, d), 3);
        case 3:
          if (c)
            for (var h = c, k = w(a.i.g), l = k.next(); !l.done; l = k.next())
              (l = l.value), l(h);
          g.g = 0;
      }
    });
  }
  function jt(a, b, c) {
    var d, e, f, g;
    return B(function (h) {
      if (1 == h.g) {
        if (!V("start_client_gcf")) return h.V(0);
        a.coldHashData = b;
        G("yt.gcf.config.coldHashData", a.coldHashData || null);
        return (d = Ms()) ? (c ? h.V(4) : z(h, dt(d), 5)) : h.V(0);
      }
      4 != h.g && ((e = h.l), (c = null == (f = e) ? void 0 : f.config));
      if (!c) return h.V(0);
      g = c.configData;
      return z(h, ct(c, b, g, d), 0);
    });
  }
  gt.prototype.g = function (a) {
    this.hotHashData = a;
    G("yt.gcf.config.hotHashData", this.hotHashData || null);
  };
  function kt() {
    return "INNERTUBE_API_KEY" in Rp && "INNERTUBE_API_VERSION" in Rp;
  }
  function lt() {
    return {
      ng: T("INNERTUBE_API_KEY"),
      og: T("INNERTUBE_API_VERSION"),
      kd: T("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
      oe: T("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
      pg: T("INNERTUBE_CONTEXT_CLIENT_NAME", 1),
      pe: T("INNERTUBE_CONTEXT_CLIENT_VERSION"),
      re: T("INNERTUBE_CONTEXT_HL"),
      qe: T("INNERTUBE_CONTEXT_GL"),
      qg: T("INNERTUBE_HOST_OVERRIDE") || "",
      sg: !!T("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
      rg: !!T("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
      appInstallData: T("SERIALIZED_CLIENT_CONFIG_DATA"),
    };
  }
  function mt(a) {
    var b = {
      client: {
        hl: a.re,
        gl: a.qe,
        clientName: a.oe,
        clientVersion: a.pe,
        configInfo: a.kd,
      },
    };
    navigator.userAgent && (b.client.userAgent = String(navigator.userAgent));
    var c = C.devicePixelRatio;
    c && 1 != c && (b.client.screenDensityFloat = String(c));
    c = T("EXPERIMENTS_TOKEN", "");
    "" !== c && (b.client.experimentsToken = c);
    c = kq();
    0 < c.length && (b.request = { internalExperimentFlags: c });
    nt(a, void 0, b);
    ot(void 0, b);
    pt(void 0, b);
    qt(a, void 0, b);
    rt(void 0, b);
    V("start_client_gcf") && st(void 0, b);
    T("DELEGATED_SESSION_ID") &&
      !V("pageid_as_header_web") &&
      (b.user = { onBehalfOfUser: T("DELEGATED_SESSION_ID") });
    !V("fill_delegate_context_in_gel_killswitch") &&
      (a = T("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) &&
      (b.user = Object.assign({}, b.user, { serializedDelegationContext: a }));
    a = Object;
    c = a.assign;
    for (
      var d = b.client,
        e = {},
        f = w(Object.entries(gq(T("DEVICE", "")))),
        g = f.next();
      !g.done;
      g = f.next()
    ) {
      var h = w(g.value);
      g = h.next().value;
      h = h.next().value;
      "cbrand" === g
        ? (e.deviceMake = h)
        : "cmodel" === g
        ? (e.deviceModel = h)
        : "cbr" === g
        ? (e.browserName = h)
        : "cbrver" === g
        ? (e.browserVersion = h)
        : "cos" === g
        ? (e.osName = h)
        : "cosver" === g
        ? (e.osVersion = h)
        : "cplatform" === g && (e.platform = h);
    }
    b.client = c.call(a, d, e);
    return b;
  }
  function nt(a, b, c) {
    a = a.oe;
    if ("WEB" === a || "MWEB" === a || 1 === a || 2 === a)
      if (b) {
        c = kf(b, vp, 96) || new vp();
        var d = Jq();
        d = Object.keys(Fp).indexOf(d);
        d = -1 === d ? null : d;
        null !== d && sf(c, 3, d);
        lf(b, vp, 96, c);
      } else
        c &&
          ((c.client.mainAppWebInfo =
            null != (d = c.client.mainAppWebInfo) ? d : {}),
          (c.client.mainAppWebInfo.webDisplayMode = Jq()));
  }
  function ot(a, b) {
    var c = D("yt.embedded_player.embed_url");
    c &&
      (a
        ? ((b = kf(a, Bp, 7) || new Bp()), L(b, 4, c), lf(a, Bp, 7, b))
        : b && (b.thirdParty = { embedUrl: c }));
  }
  function pt(a, b) {
    var c;
    if (
      V("web_log_memory_total_kbytes") &&
      (null == (c = C.navigator) ? 0 : c.deviceMemory)
    ) {
      var d;
      c = null == (d = C.navigator) ? void 0 : d.deviceMemory;
      a ? rf(a, 95, 1e6 * c) : b && (b.client.memoryTotalKbytes = "" + 1e6 * c);
    }
  }
  function qt(a, b, c) {
    if (a.appInstallData)
      if (b) {
        var d;
        c = null != (d = kf(b, up, 62)) ? d : new up();
        L(c, 6, a.appInstallData);
        lf(b, up, 62, c);
      } else
        c &&
          ((c.client.configInfo = c.client.configInfo || {}),
          (c.client.configInfo.appInstallData = a.appInstallData));
  }
  function rt(a, b) {
    a: {
      var c = Pq();
      if (c) {
        var d = Lq[c.type || "unknown"] || "CONN_UNKNOWN";
        c = Lq[c.effectiveType || "unknown"] || "CONN_UNKNOWN";
        "CONN_CELLULAR_UNKNOWN" === d && "CONN_UNKNOWN" !== c && (d = c);
        if ("CONN_UNKNOWN" !== d) break a;
        if ("CONN_UNKNOWN" !== c) {
          d = c;
          break a;
        }
      }
      d = void 0;
    }
    d && (a ? sf(a, 61, Mq[d]) : b && (b.client.connectionType = d));
    V("web_log_effective_connection_type") &&
      ((d = Pq()),
      (d =
        null != d && d.effectiveType
          ? Oq.hasOwnProperty(d.effectiveType)
            ? Oq[d.effectiveType]
            : "EFFECTIVE_CONNECTION_TYPE_UNKNOWN"
          : void 0),
      d &&
        (a ? sf(a, 94, Nq[d]) : b && (b.client.effectiveConnectionType = d)));
  }
  function tt(a, b, c) {
    c = void 0 === c ? {} : c;
    var d = {};
    T("EOM_VISITOR_DATA")
      ? (d = { "X-Goog-EOM-Visitor-Id": T("EOM_VISITOR_DATA") })
      : (d = { "X-Goog-Visitor-Id": c.visitorData || T("VISITOR_DATA", "") });
    if (b && b.includes("www.youtube-nocookie.com")) return d;
    b = c.Vh || T("AUTHORIZATION");
    if (!b)
      if (a) b = "Bearer " + D("gapi.auth.getToken")().Uh;
      else {
        Iq.g || (Iq.g = new Iq());
        a = {};
        if ((c = sg([])))
          (a.Authorization = c),
            (c = void 0),
            void 0 === c &&
              ((c = Number(T("SESSION_INDEX", 0))), (c = isNaN(c) ? 0 : c)),
            V("voice_search_auth_header_removal") ||
              (a["X-Goog-AuthUser"] = c.toString()),
            "INNERTUBE_HOST_OVERRIDE" in Rp ||
              (a["X-Origin"] = window.location.origin),
            "DELEGATED_SESSION_ID" in Rp &&
              (a["X-Goog-PageId"] = T("DELEGATED_SESSION_ID"));
        V("pageid_as_header_web") || delete a["X-Goog-PageId"];
        d = Object.assign({}, d, a);
      }
    b && (d.Authorization = b);
    return d;
  }
  function st(a, b) {
    if (!gt.g) {
      var c = new gt();
      gt.g = c;
    }
    c = gt.g;
    var d = Y() - c.l;
    if (0 !== c.l && d < jq("send_config_hash_timer")) c = void 0;
    else {
      d = D("yt.gcf.config.coldConfigData");
      var e = D("yt.gcf.config.hotHashData"),
        f = D("yt.gcf.config.coldHashData");
      d && e && f && (c.l = Y());
      c = { coldConfigData: d, hotHashData: e, coldHashData: f };
    }
    if ((e = c))
      if (
        ((c = e.coldConfigData),
        (d = e.coldHashData),
        (e = e.hotHashData),
        c && d && e)
      )
        if (a) {
          var g;
          b = null != (g = kf(a, up, 62)) ? g : new up();
          L(b, 1, c);
          L(b, 3, d);
          b.g(e);
          lf(a, up, 62, b);
        } else
          b &&
            ((b.client.configInfo = b.client.configInfo || {}),
            (b.client.configInfo.coldConfigData = c),
            (b.client.configInfo.coldHashData = d),
            (b.client.configInfo.hotHashData = e));
  }
  var ut = D("ytPubsub2Pubsub2Instance") || new Q();
  Q.prototype.subscribe = Q.prototype.subscribe;
  Q.prototype.unsubscribeByKey = Q.prototype.Rc;
  Q.prototype.publish = Q.prototype.Ee;
  Q.prototype.clear = Q.prototype.clear;
  G("ytPubsub2Pubsub2Instance", ut);
  G(
    "ytPubsub2Pubsub2SubscribedKeys",
    D("ytPubsub2Pubsub2SubscribedKeys") || {}
  );
  G("ytPubsub2Pubsub2TopicToKeys", D("ytPubsub2Pubsub2TopicToKeys") || {});
  G("ytPubsub2Pubsub2IsAsync", D("ytPubsub2Pubsub2IsAsync") || {});
  G("ytPubsub2Pubsub2SkipSubKey", null);
  function vt(a, b, c) {
    c = void 0 === c ? { sampleRate: 0.1 } : c;
    Math.random() < Math.min(0.02, c.sampleRate / 100) &&
      ((a = { Mi: a, Li: b }),
      (b = D("ytPubsub2Pubsub2Instance")) &&
        b.publish.call(
          b,
          "meta_logging_csi_event".toString(),
          "meta_logging_csi_event",
          a
        ));
  }
  var wt = void 0,
    xt = void 0;
  function zt() {
    if (!xt) {
      var a = T("WORKER_SERIALIZATION_URL");
      xt = a
        ? (a = a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)
          ? ub(a)
          : null
        : null;
    }
    return xt || void 0;
  }
  function At() {
    var a = zt();
    wt || void 0 === a || (wt = new Worker(sb(a), void 0));
    return wt;
  }
  var Bt = jq("max_body_size_to_compress", 5e5),
    Ct = jq("min_body_size_to_compress", 500),
    Dt = !0,
    Et = 0,
    Ft = 0,
    Gt = jq("compression_performance_threshold_lr", 250),
    Ht = jq("slow_compressions_before_abandon_count", 4),
    It = !1,
    Jt = new Map(),
    Kt = 1;
  function Lt() {
    if ("function" === typeof Worker && zt()) {
      var a = function (c) {
          c = c.data;
          if ("gzippedGelBatch" === c.op) {
            var d = Jt.get(c.key);
            d &&
              (Mt(c.gzippedBatch, d.latencyPayload, d.url, d.options, d.sendFn),
              Jt.delete(c.key));
          }
        },
        b = At();
      b &&
        (b.addEventListener("message", a),
        (b.onerror = function () {
          Jt.clear();
        }),
        (It = !0));
    }
  }
  function Nt(a, b, c, d, e) {
    e = void 0 === e ? !1 : e;
    var f = { startTime: Y(), ticks: {}, infos: {} };
    if (Dt)
      try {
        try {
          var g = new Blob(b.split("")).size;
        } catch (p) {
          $p(p), (g = null);
        }
        if (null != g && (g > Bt || g < Ct)) d(a, c);
        else {
          if (V("gzip_gel_with_worker")) {
            It || Lt();
            var h = At();
            if (h && !e) {
              Jt.set(Kt, { latencyPayload: f, url: a, options: c, sendFn: d });
              h.postMessage({
                op: "gelBatchToGzip",
                serializedBatch: b,
                key: Kt,
              });
              Kt++;
              return;
            }
          }
          var k = ug(b);
          var l = l || {};
          l.Nf = !0;
          var n = new pp(l);
          n.push(k, !0);
          if (n.err) throw n.msg || ro[n.err];
          Mt(n.result, f, a, c, d);
        }
      } catch (p) {
        $p(p), d(a, c);
      }
    else d(a, c);
  }
  function Mt(a, b, c, d, e) {
    var f = Y();
    b.ticks.gelc = f;
    Ft++;
    V("disable_compression_due_to_performance_degredation") &&
      f - b.startTime >= Gt &&
      (Et++,
      V("abandon_compression_after_N_slow_zips")
        ? Ft === jq("compression_disable_point") && Et > Ht && (Dt = !1)
        : (Dt = !1));
    V("gel_compression_csi_killswitch") ||
      (!V("log_gel_compression_latency") &&
        !V("log_gel_compression_latency_lr")) ||
      vt("gel_compression", b, { sampleRate: 0.1 });
    d.headers || (d.headers = {});
    d.headers["Content-Encoding"] = "gzip";
    d.postBody = a;
    d.postParams = void 0;
    e(c, d);
  }
  function Ot(a) {
    a = Object.assign({}, a);
    delete a.Authorization;
    var b = sg();
    if (b) {
      var c = new wn();
      c.update(T("INNERTUBE_API_KEY"));
      c.update(b);
      a.hash = pe(c.digest(), 3);
    }
    return a;
  }
  var Pt;
  function Qt() {
    Pt || (Pt = new Ar("yt.innertube"));
    return Pt;
  }
  function Rt(a, b, c, d) {
    if (d) return null;
    d = Qt().get("nextId", !0) || 1;
    var e = Qt().get("requests", !0) || {};
    e[d] = {
      method: a,
      request: b,
      authState: Ot(c),
      requestTime: Math.round(Y()),
    };
    Qt().set("nextId", d + 1, 86400, !0);
    Qt().set("requests", e, 86400, !0);
    return d;
  }
  function St(a) {
    var b = Qt().get("requests", !0) || {};
    delete b[a];
    Qt().set("requests", b, 86400, !0);
  }
  function Tt(a) {
    var b = Qt().get("requests", !0);
    if (b) {
      for (var c in b) {
        var d = b[c];
        if (!(6e4 > Math.round(Y()) - d.requestTime)) {
          var e = d.authState;
          var f = Ot(tt(!1));
          a: {
            var g = void 0,
              h = void 0;
            for (h in e)
              if (!(h in f) || e[h] !== f[h]) {
                e = !1;
                break a;
              }
            for (g in f)
              if (!(g in e)) {
                e = !1;
                break a;
              }
            e = !0;
          }
          e &&
            ((e = d.request),
            "requestTimeMs" in e && (e.requestTimeMs = Math.round(Y())),
            Ut(a, d.method, e, {}));
          delete b[c];
        }
      }
      Qt().set("requests", b, 86400, !0);
    }
  }
  function Vt(a) {
    this.nc = this.g = !1;
    this.potentialEsfErrorCounter = this.l = 0;
    this.handleError = function () {};
    this.Bb = function () {};
    this.now = Date.now;
    this.Xb = !1;
    var b;
    this.Ve = null != (b = a.Ve) ? b : 100;
    var c;
    this.Le = null != (c = a.Le) ? c : 1;
    var d;
    this.Ie = null != (d = a.Ie) ? d : 2592e6;
    var e;
    this.Fe = null != (e = a.Fe) ? e : 12e4;
    var f;
    this.Ke = null != (f = a.Ke) ? f : 5e3;
    var g;
    this.fa = null != (g = a.fa) ? g : void 0;
    this.wc = !!a.wc;
    var h;
    this.qc = null != (h = a.qc) ? h : 0.1;
    var k;
    this.Ic = null != (k = a.Ic) ? k : 10;
    a.handleError && (this.handleError = a.handleError);
    a.Bb && (this.Bb = a.Bb);
    a.Xb && (this.Xb = a.Xb);
    a.nc && (this.nc = a.nc);
    this.ga = a.ga;
    this.La = a.La;
    this.la = a.la;
    this.pa = a.pa;
    this.sendFn = a.sendFn;
    this.vd = a.vd;
    this.ud = a.ud;
    Wt(this) && (!this.ga || this.ga("networkless_logging")) && Xt(this);
  }
  function Xt(a) {
    Wt(a) &&
      !a.Xb &&
      ((a.g = !0),
      a.wc && Math.random() <= a.qc && a.la.lf(a.fa),
      Yt(a),
      a.pa.Fa() && a.kc(),
      a.pa.ya(a.vd, a.kc.bind(a)),
      a.pa.ya(a.ud, a.Sd.bind(a)));
  }
  m = Vt.prototype;
  m.writeThenSend = function (a, b) {
    var c = this;
    b = void 0 === b ? {} : b;
    if (Wt(this) && this.g) {
      var d = {
        url: a,
        options: b,
        timestamp: this.now(),
        status: "NEW",
        sendCount: 0,
      };
      this.la
        .set(d, this.fa)
        .then(function (e) {
          d.id = e;
          c.pa.Fa() && Zt(c, d);
        })
        .catch(function (e) {
          Zt(c, d);
          $t(c, e);
        });
    } else this.sendFn(a, b);
  };
  m.sendThenWrite = function (a, b, c) {
    var d = this;
    b = void 0 === b ? {} : b;
    if (Wt(this) && this.g) {
      var e = {
        url: a,
        options: b,
        timestamp: this.now(),
        status: "NEW",
        sendCount: 0,
      };
      this.ga && this.ga("nwl_skip_retry") && (e.skipRetry = c);
      if (
        this.pa.Fa() ||
        (this.ga && this.ga("nwl_aggressive_send_then_write") && !e.skipRetry)
      ) {
        if (!e.skipRetry) {
          var f = b.onError ? b.onError : function () {};
          b.onError = function (g, h) {
            return B(function (k) {
              if (1 == k.g)
                return z(
                  k,
                  d.la.set(e, d.fa).catch(function (l) {
                    $t(d, l);
                  }),
                  2
                );
              f(g, h);
              k.g = 0;
            });
          };
        }
        this.sendFn(a, b, e.skipRetry);
      } else
        this.la.set(e, this.fa).catch(function (g) {
          d.sendFn(a, b, e.skipRetry);
          $t(d, g);
        });
    } else this.sendFn(a, b, this.ga && this.ga("nwl_skip_retry") && c);
  };
  m.sendAndWrite = function (a, b) {
    var c = this;
    b = void 0 === b ? {} : b;
    if (Wt(this) && this.g) {
      var d = {
          url: a,
          options: b,
          timestamp: this.now(),
          status: "NEW",
          sendCount: 0,
        },
        e = !1,
        f = b.onSuccess ? b.onSuccess : function () {};
      d.options.onSuccess = function (g, h) {
        void 0 !== d.id ? c.la.xb(d.id, c.fa) : (e = !0);
        c.pa.pb && c.ga && c.ga("vss_network_hint") && c.pa.pb(!0);
        f(g, h);
      };
      this.sendFn(d.url, d.options);
      this.la
        .set(d, this.fa)
        .then(function (g) {
          d.id = g;
          e && c.la.xb(d.id, c.fa);
        })
        .catch(function (g) {
          $t(c, g);
        });
    } else this.sendFn(a, b);
  };
  m.kc = function () {
    var a = this;
    if (!Wt(this)) throw Error("IndexedDB is not supported: throttleSend");
    this.l ||
      (this.l = this.La.Pa(function () {
        var b;
        return B(function (c) {
          if (1 == c.g) return z(c, a.la.fe("NEW", a.fa), 2);
          if (3 != c.g)
            return (b = c.l), b ? z(c, Zt(a, b), 3) : (a.Sd(), c.return());
          a.l && ((a.l = 0), a.kc());
          c.g = 0;
        });
      }, this.Ve));
  };
  m.Sd = function () {
    this.La.Ea(this.l);
    this.l = 0;
  };
  function Zt(a, b) {
    var c;
    return B(function (d) {
      switch (d.g) {
        case 1:
          if (!Wt(a)) throw Error("IndexedDB is not supported: immediateSend");
          if (void 0 === b.id) {
            d.V(2);
            break;
          }
          return z(d, a.la.Eg(b.id, a.fa), 3);
        case 3:
          (c = d.l) ||
            a.Bb(Error("The request cannot be found in the database."));
        case 2:
          if (au(a, b, a.Ie)) {
            d.V(4);
            break;
          }
          a.Bb(
            Error("Networkless Logging: Stored logs request expired age limit")
          );
          if (void 0 === b.id) {
            d.V(5);
            break;
          }
          return z(d, a.la.xb(b.id, a.fa), 5);
        case 5:
          return d.return();
        case 4:
          b.skipRetry || (b = bu(a, b));
          if (!b) {
            d.V(0);
            break;
          }
          if (!b.skipRetry || void 0 === b.id) {
            d.V(8);
            break;
          }
          return z(d, a.la.xb(b.id, a.fa), 8);
        case 8:
          a.sendFn(b.url, b.options, !!b.skipRetry), (d.g = 0);
      }
    });
  }
  function bu(a, b) {
    if (!Wt(a))
      throw Error("IndexedDB is not supported: updateRequestHandlers");
    var c = b.options.onError ? b.options.onError : function () {};
    b.options.onError = function (e, f) {
      var g, h, k, l;
      return B(function (n) {
        switch (n.g) {
          case 1:
            g = cu(f);
            (h = du(f)) &&
              a.ga &&
              a.ga("web_enable_error_204") &&
              a.handleError(
                Error("Request failed due to compression"),
                b.url,
                f
              );
            if (
              !(
                (a.ga && a.ga("nwl_consider_error_code") && g) ||
                (a.ga &&
                  !a.ga("nwl_consider_error_code") &&
                  a.potentialEsfErrorCounter <= a.Ic)
              )
            ) {
              n.V(2);
              break;
            }
            if (!a.pa.Mc) {
              n.V(3);
              break;
            }
            return z(n, a.pa.Mc(), 3);
          case 3:
            if (a.pa.Fa()) {
              n.V(2);
              break;
            }
            c(e, f);
            if (
              !a.ga ||
              !a.ga("nwl_consider_error_code") ||
              void 0 === (null == (k = b) ? void 0 : k.id)
            ) {
              n.V(6);
              break;
            }
            return z(n, a.la.Bd(b.id, a.fa, !1), 6);
          case 6:
            return n.return();
          case 2:
            if (
              a.ga &&
              a.ga("nwl_consider_error_code") &&
              !g &&
              a.potentialEsfErrorCounter > a.Ic
            )
              return n.return();
            a.potentialEsfErrorCounter++;
            if (void 0 === (null == (l = b) ? void 0 : l.id)) {
              n.V(8);
              break;
            }
            return b.sendCount < a.Le
              ? z(n, a.la.Bd(b.id, a.fa, !0, h ? !1 : void 0), 12)
              : z(n, a.la.xb(b.id, a.fa), 8);
          case 12:
            a.La.Pa(function () {
              a.pa.Fa() && a.kc();
            }, a.Ke);
          case 8:
            c(e, f), (n.g = 0);
        }
      });
    };
    var d = b.options.onSuccess ? b.options.onSuccess : function () {};
    b.options.onSuccess = function (e, f) {
      var g;
      return B(function (h) {
        if (1 == h.g)
          return void 0 === (null == (g = b) ? void 0 : g.id)
            ? h.V(2)
            : z(h, a.la.xb(b.id, a.fa), 2);
        a.pa.pb && a.ga && a.ga("vss_network_hint") && a.pa.pb(!0);
        d(e, f);
        h.g = 0;
      });
    };
    return b;
  }
  function au(a, b, c) {
    b = b.timestamp;
    return a.now() - b >= c ? !1 : !0;
  }
  function Yt(a) {
    if (!Wt(a)) throw Error("IndexedDB is not supported: retryQueuedRequests");
    a.la.fe("QUEUED", a.fa).then(function (b) {
      b && !au(a, b, a.Fe)
        ? a.La.Pa(function () {
            return B(function (c) {
              if (1 == c.g)
                return void 0 === b.id ? c.V(2) : z(c, a.la.Bd(b.id, a.fa), 2);
              Yt(a);
              c.g = 0;
            });
          })
        : a.pa.Fa() && a.kc();
    });
  }
  function $t(a, b) {
    a.af && !a.pa.Fa() ? a.af(b) : a.handleError(b);
  }
  function Wt(a) {
    return !!a.fa || a.nc;
  }
  function cu(a) {
    var b;
    return (a = null == a ? void 0 : null == (b = a.error) ? void 0 : b.code) &&
      400 <= a &&
      599 >= a
      ? !1
      : !0;
  }
  function du(a) {
    var b;
    a = null == a ? void 0 : null == (b = a.error) ? void 0 : b.code;
    return !(400 !== a && 415 !== a);
  }
  var eu;
  function fu() {
    if (eu) return eu();
    var a = {};
    eu = Ys("LogsDatabaseV2", {
      Jb: ((a.LogsRequestsStore = { Rb: 2 }), a),
      Nc: !1,
      upgrade: function (b, c, d) {
        c(2) &&
          is(b, "LogsRequestsStore", { keyPath: "id", autoIncrement: !0 });
        c(3);
        c(5) &&
          ((d = d.objectStore("LogsRequestsStore")),
          d.g.indexNames.contains("newRequest") &&
            d.g.deleteIndex("newRequest"),
          ps(d, "newRequestV2", ["status", "interface", "timestamp"]));
        c(7) &&
          b.g.objectStoreNames.contains("sapisid") &&
          b.g.deleteObjectStore("sapisid");
        c(9) &&
          b.g.objectStoreNames.contains("SWHealthLog") &&
          b.g.deleteObjectStore("SWHealthLog");
      },
      version: 9,
    });
    return eu();
  }
  function gu(a) {
    return Bs(fu(), a);
  }
  function hu(a, b) {
    var c, d, e, f;
    return B(function (g) {
      if (1 == g.g)
        return (
          (c = {
            startTime: Y(),
            infos: { transactionType: "YT_IDB_TRANSACTION_TYPE_WRITE" },
            ticks: {},
          }),
          z(g, gu(b), 2)
        );
      if (3 != g.g)
        return (
          (d = g.l),
          (e = Object.assign({}, a, {
            options: JSON.parse(JSON.stringify(a.options)),
            interface: T("INNERTUBE_CONTEXT_CLIENT_NAME", 0),
          })),
          z(g, ks(d, "LogsRequestsStore", e), 3)
        );
      f = g.l;
      c.ticks.tc = Y();
      iu(c);
      return g.return(f);
    });
  }
  function ju(a, b) {
    var c, d, e, f, g, h, k;
    return B(function (l) {
      if (1 == l.g)
        return (
          (c = {
            startTime: Y(),
            infos: { transactionType: "YT_IDB_TRANSACTION_TYPE_READ" },
            ticks: {},
          }),
          z(l, gu(b), 2)
        );
      if (3 != l.g)
        return (
          (d = l.l),
          (e = T("INNERTUBE_CONTEXT_CLIENT_NAME", 0)),
          (f = [a, e, 0]),
          (g = [a, e, Y()]),
          (h = IDBKeyRange.bound(f, g)),
          (k = void 0),
          z(
            l,
            hs(
              d,
              ["LogsRequestsStore"],
              { mode: "readwrite", ra: !0 },
              function (n) {
                return us(
                  n.objectStore("LogsRequestsStore").index("newRequestV2"),
                  { query: h, direction: "prev" },
                  function (p) {
                    p.Ra() &&
                      ((k = p.Ra()),
                      "NEW" === a && ((k.status = "QUEUED"), p.update(k)));
                  }
                );
              }
            ),
            3
          )
        );
      c.ticks.tc = Y();
      iu(c);
      return l.return(k);
    });
  }
  function ku(a, b) {
    var c;
    return B(function (d) {
      if (1 == d.g) return z(d, gu(b), 2);
      c = d.l;
      return d.return(
        hs(
          c,
          ["LogsRequestsStore"],
          { mode: "readwrite", ra: !0 },
          function (e) {
            var f = e.objectStore("LogsRequestsStore");
            return f.get(a).then(function (g) {
              if (g)
                return (
                  (g.status = "QUEUED"),
                  ds(f.g.put(g, void 0)).then(function () {
                    return g;
                  })
                );
            });
          }
        )
      );
    });
  }
  function lu(a, b, c, d) {
    c = void 0 === c ? !0 : c;
    var e;
    return B(function (f) {
      if (1 == f.g) return z(f, gu(b), 2);
      e = f.l;
      return f.return(
        hs(
          e,
          ["LogsRequestsStore"],
          { mode: "readwrite", ra: !0 },
          function (g) {
            var h = g.objectStore("LogsRequestsStore");
            return h.get(a).then(function (k) {
              return k
                ? ((k.status = "NEW"),
                  c && (k.sendCount += 1),
                  void 0 !== d && (k.options.compress = d),
                  ds(h.g.put(k, void 0)).then(function () {
                    return k;
                  }))
                : Xr.resolve(void 0);
            });
          }
        )
      );
    });
  }
  function mu(a, b) {
    var c;
    return B(function (d) {
      if (1 == d.g) return z(d, gu(b), 2);
      c = d.l;
      return d.return(c.delete("LogsRequestsStore", a));
    });
  }
  function nu(a) {
    var b, c;
    return B(function (d) {
      if (1 == d.g) return z(d, gu(a), 2);
      b = d.l;
      c = Y() - 2592e6;
      return z(
        d,
        hs(
          b,
          ["LogsRequestsStore"],
          { mode: "readwrite", ra: !0 },
          function (e) {
            return rs(e.objectStore("LogsRequestsStore"), {}, function (f) {
              if (f.Ra().timestamp <= c)
                return f.delete().then(function () {
                  return f.continue();
                });
            });
          }
        ),
        0
      );
    });
  }
  function ou() {
    B(function (a) {
      return z(a, Us(), 0);
    });
  }
  function iu(a) {
    V("nwl_csi_killswitch") ||
      vt("networkless_performance", a, { sampleRate: 1 });
  }
  var pu = {
    accountStateChangeSignedIn: 23,
    accountStateChangeSignedOut: 24,
    delayedEventMetricCaptured: 11,
    latencyActionBaselined: 6,
    latencyActionInfo: 7,
    latencyActionTicked: 5,
    offlineTransferStatusChanged: 2,
    offlineImageDownload: 335,
    playbackStartStateChanged: 9,
    systemHealthCaptured: 3,
    mangoOnboardingCompleted: 10,
    mangoPushNotificationReceived: 230,
    mangoUnforkDbMigrationError: 121,
    mangoUnforkDbMigrationSummary: 122,
    mangoUnforkDbMigrationPreunforkDbVersionNumber: 133,
    mangoUnforkDbMigrationPhoneMetadata: 134,
    mangoUnforkDbMigrationPhoneStorage: 135,
    mangoUnforkDbMigrationStep: 142,
    mangoAsyncApiMigrationEvent: 223,
    mangoDownloadVideoResult: 224,
    mangoHomepageVideoCount: 279,
    mangoHomeV3State: 295,
    mangoImageClientCacheHitEvent: 273,
    sdCardStatusChanged: 98,
    framesDropped: 12,
    thumbnailHovered: 13,
    deviceRetentionInfoCaptured: 14,
    thumbnailLoaded: 15,
    backToAppEvent: 318,
    streamingStatsCaptured: 17,
    offlineVideoShared: 19,
    appCrashed: 20,
    youThere: 21,
    offlineStateSnapshot: 22,
    mdxSessionStarted: 25,
    mdxSessionConnected: 26,
    mdxSessionDisconnected: 27,
    bedrockResourceConsumptionSnapshot: 28,
    nextGenWatchWatchSwiped: 29,
    kidsAccountsSnapshot: 30,
    zeroStepChannelCreated: 31,
    tvhtml5SearchCompleted: 32,
    offlineSharePairing: 34,
    offlineShareUnlock: 35,
    mdxRouteDistributionSnapshot: 36,
    bedrockRepetitiveActionTimed: 37,
    unpluggedDegradationInfo: 229,
    uploadMp4HeaderMoved: 38,
    uploadVideoTranscoded: 39,
    uploadProcessorStarted: 46,
    uploadProcessorEnded: 47,
    uploadProcessorReady: 94,
    uploadProcessorRequirementPending: 95,
    uploadProcessorInterrupted: 96,
    uploadFrontendEvent: 241,
    assetPackDownloadStarted: 41,
    assetPackDownloaded: 42,
    assetPackApplied: 43,
    assetPackDeleted: 44,
    appInstallAttributionEvent: 459,
    playbackSessionStopped: 45,
    adBlockerMessagingShown: 48,
    distributionChannelCaptured: 49,
    dataPlanCpidRequested: 51,
    detailedNetworkTypeCaptured: 52,
    sendStateUpdated: 53,
    receiveStateUpdated: 54,
    sendDebugStateUpdated: 55,
    receiveDebugStateUpdated: 56,
    kidsErrored: 57,
    mdxMsnSessionStatsFinished: 58,
    appSettingsCaptured: 59,
    mdxWebSocketServerHttpError: 60,
    mdxWebSocketServer: 61,
    startupCrashesDetected: 62,
    coldStartInfo: 435,
    offlinePlaybackStarted: 63,
    liveChatMessageSent: 225,
    liveChatUserPresent: 434,
    liveChatBeingModerated: 457,
    liveCreationCameraUpdated: 64,
    liveCreationEncodingCaptured: 65,
    liveCreationError: 66,
    liveCreationHealthUpdated: 67,
    liveCreationVideoEffectsCaptured: 68,
    liveCreationStageOccured: 75,
    liveCreationBroadcastScheduled: 123,
    liveCreationArchiveReplacement: 149,
    liveCreationCostreamingConnection: 421,
    liveCreationStreamWebrtcStats: 288,
    mdxSessionRecoveryStarted: 69,
    mdxSessionRecoveryCompleted: 70,
    mdxSessionRecoveryStopped: 71,
    visualElementShown: 72,
    visualElementHidden: 73,
    visualElementGestured: 78,
    visualElementStateChanged: 208,
    screenCreated: 156,
    playbackAssociated: 202,
    visualElementAttached: 215,
    playbackContextEvent: 214,
    cloudCastingPlaybackStarted: 74,
    webPlayerApiCalled: 76,
    tvhtml5AccountDialogOpened: 79,
    foregroundHeartbeat: 80,
    foregroundHeartbeatScreenAssociated: 111,
    kidsOfflineSnapshot: 81,
    mdxEncryptionSessionStatsFinished: 82,
    playerRequestCompleted: 83,
    liteSchedulerStatistics: 84,
    mdxSignIn: 85,
    spacecastMetadataLookupRequested: 86,
    spacecastBatchLookupRequested: 87,
    spacecastSummaryRequested: 88,
    spacecastPlayback: 89,
    spacecastDiscovery: 90,
    tvhtml5LaunchUrlComponentChanged: 91,
    mdxBackgroundPlaybackRequestCompleted: 92,
    mdxBrokenAdditionalDataDeviceDetected: 93,
    tvhtml5LocalStorage: 97,
    tvhtml5DeviceStorageStatus: 147,
    autoCaptionsAvailable: 99,
    playbackScrubbingEvent: 339,
    flexyState: 100,
    interfaceOrientationCaptured: 101,
    mainAppBrowseFragmentCache: 102,
    offlineCacheVerificationFailure: 103,
    offlinePlaybackExceptionDigest: 217,
    vrCopresenceStats: 104,
    vrCopresenceSyncStats: 130,
    vrCopresenceCommsStats: 137,
    vrCopresencePartyStats: 153,
    vrCopresenceEmojiStats: 213,
    vrCopresenceEvent: 141,
    vrCopresenceFlowTransitEvent: 160,
    vrPlaybackEvent: 345,
    kidsAgeGateTracking: 105,
    offlineDelayAllowedTracking: 106,
    mainAppAutoOfflineState: 107,
    videoAsThumbnailDownload: 108,
    videoAsThumbnailPlayback: 109,
    liteShowMore: 110,
    renderingError: 118,
    kidsProfilePinGateTracking: 119,
    abrTrajectory: 124,
    scrollEvent: 125,
    streamzIncremented: 126,
    kidsProfileSwitcherTracking: 127,
    kidsProfileCreationTracking: 129,
    buyFlowStarted: 136,
    mbsConnectionInitiated: 138,
    mbsPlaybackInitiated: 139,
    mbsLoadChildren: 140,
    liteProfileFetcher: 144,
    mdxRemoteTransaction: 146,
    reelPlaybackError: 148,
    reachabilityDetectionEvent: 150,
    mobilePlaybackEvent: 151,
    courtsidePlayerStateChanged: 152,
    musicPersistentCacheChecked: 154,
    musicPersistentCacheCleared: 155,
    playbackInterrupted: 157,
    playbackInterruptionResolved: 158,
    fixFopFlow: 159,
    anrDetection: 161,
    backstagePostCreationFlowEnded: 162,
    clientError: 163,
    gamingAccountLinkStatusChanged: 164,
    liteHousewarming: 165,
    buyFlowEvent: 167,
    kidsParentalGateTracking: 168,
    kidsSignedOutSettingsStatus: 437,
    kidsSignedOutPauseHistoryFixStatus: 438,
    tvhtml5WatchdogViolation: 444,
    ypcUpgradeFlow: 169,
    yongleStudy: 170,
    ypcUpdateFlowStarted: 171,
    ypcUpdateFlowCancelled: 172,
    ypcUpdateFlowSucceeded: 173,
    ypcUpdateFlowFailed: 174,
    liteGrowthkitPromo: 175,
    paymentFlowStarted: 341,
    transactionFlowShowPaymentDialog: 405,
    transactionFlowStarted: 176,
    transactionFlowSecondaryDeviceStarted: 222,
    transactionFlowSecondaryDeviceSignedOutStarted: 383,
    transactionFlowCancelled: 177,
    transactionFlowPaymentCallBackReceived: 387,
    transactionFlowPaymentSubmitted: 460,
    transactionFlowPaymentSucceeded: 329,
    transactionFlowSucceeded: 178,
    transactionFlowFailed: 179,
    transactionFlowPlayBillingConnectionStartEvent: 428,
    transactionFlowSecondaryDeviceSuccess: 458,
    transactionFlowErrorEvent: 411,
    liteVideoQualityChanged: 180,
    watchBreakEnablementSettingEvent: 181,
    watchBreakFrequencySettingEvent: 182,
    videoEffectsCameraPerformanceMetrics: 183,
    adNotify: 184,
    startupTelemetry: 185,
    playbackOfflineFallbackUsed: 186,
    outOfMemory: 187,
    ypcPauseFlowStarted: 188,
    ypcPauseFlowCancelled: 189,
    ypcPauseFlowSucceeded: 190,
    ypcPauseFlowFailed: 191,
    uploadFileSelected: 192,
    ypcResumeFlowStarted: 193,
    ypcResumeFlowCancelled: 194,
    ypcResumeFlowSucceeded: 195,
    ypcResumeFlowFailed: 196,
    adsClientStateChange: 197,
    ypcCancelFlowStarted: 198,
    ypcCancelFlowCancelled: 199,
    ypcCancelFlowSucceeded: 200,
    ypcCancelFlowFailed: 201,
    ypcCancelFlowGoToPaymentProcessor: 402,
    ypcDeactivateFlowStarted: 320,
    ypcRedeemFlowStarted: 203,
    ypcRedeemFlowCancelled: 204,
    ypcRedeemFlowSucceeded: 205,
    ypcRedeemFlowFailed: 206,
    ypcFamilyCreateFlowStarted: 258,
    ypcFamilyCreateFlowCancelled: 259,
    ypcFamilyCreateFlowSucceeded: 260,
    ypcFamilyCreateFlowFailed: 261,
    ypcFamilyManageFlowStarted: 262,
    ypcFamilyManageFlowCancelled: 263,
    ypcFamilyManageFlowSucceeded: 264,
    ypcFamilyManageFlowFailed: 265,
    restoreContextEvent: 207,
    embedsAdEvent: 327,
    autoplayTriggered: 209,
    clientDataErrorEvent: 210,
    experimentalVssValidation: 211,
    tvhtml5TriggeredEvent: 212,
    tvhtml5FrameworksFieldTrialResult: 216,
    tvhtml5FrameworksFieldTrialStart: 220,
    musicOfflinePreferences: 218,
    watchTimeSegment: 219,
    appWidthLayoutError: 221,
    accountRegistryChange: 226,
    userMentionAutoCompleteBoxEvent: 227,
    downloadRecommendationEnablementSettingEvent: 228,
    musicPlaybackContentModeChangeEvent: 231,
    offlineDbOpenCompleted: 232,
    kidsFlowEvent: 233,
    kidsFlowCorpusSelectedEvent: 234,
    videoEffectsEvent: 235,
    unpluggedOpsEogAnalyticsEvent: 236,
    playbackAudioRouteEvent: 237,
    interactionLoggingDebugModeError: 238,
    offlineYtbRefreshed: 239,
    kidsFlowError: 240,
    musicAutoplayOnLaunchAttempted: 242,
    deviceContextActivityEvent: 243,
    deviceContextEvent: 244,
    templateResolutionException: 245,
    musicSideloadedPlaylistServiceCalled: 246,
    embedsStorageAccessNotChecked: 247,
    embedsHasStorageAccessResult: 248,
    embedsItpPlayedOnReload: 249,
    embedsRequestStorageAccessResult: 250,
    embedsShouldRequestStorageAccessResult: 251,
    embedsRequestStorageAccessState: 256,
    embedsRequestStorageAccessFailedState: 257,
    embedsItpWatchLaterResult: 266,
    searchSuggestDecodingPayloadFailure: 252,
    siriShortcutActivated: 253,
    tvhtml5KeyboardPerformance: 254,
    latencyActionSpan: 255,
    elementsLog: 267,
    ytbFileOpened: 268,
    tfliteModelError: 269,
    apiTest: 270,
    yongleUsbSetup: 271,
    touStrikeInterstitialEvent: 272,
    liteStreamToSave: 274,
    appBundleClientEvent: 275,
    ytbFileCreationFailed: 276,
    adNotifyFailure: 278,
    ytbTransferFailed: 280,
    blockingRequestFailed: 281,
    liteAccountSelector: 282,
    liteAccountUiCallbacks: 283,
    dummyPayload: 284,
    browseResponseValidationEvent: 285,
    entitiesError: 286,
    musicIosBackgroundFetch: 287,
    mdxNotificationEvent: 289,
    layersValidationError: 290,
    musicPwaInstalled: 291,
    liteAccountCleanup: 292,
    html5PlayerHealthEvent: 293,
    watchRestoreAttempt: 294,
    liteAccountSignIn: 296,
    notaireEvent: 298,
    kidsVoiceSearchEvent: 299,
    adNotifyFilled: 300,
    delayedEventDropped: 301,
    analyticsSearchEvent: 302,
    systemDarkThemeOptOutEvent: 303,
    flowEvent: 304,
    networkConnectivityBaselineEvent: 305,
    ytbFileImported: 306,
    downloadStreamUrlExpired: 307,
    directSignInEvent: 308,
    lyricImpressionEvent: 309,
    accessibilityStateEvent: 310,
    tokenRefreshEvent: 311,
    genericAttestationExecution: 312,
    tvhtml5VideoSeek: 313,
    unpluggedAutoPause: 314,
    scrubbingEvent: 315,
    bedtimeReminderEvent: 317,
    tvhtml5UnexpectedRestart: 319,
    tvhtml5StabilityTraceEvent: 478,
    tvhtml5OperationHealth: 467,
    tvhtml5WatchKeyEvent: 321,
    voiceLanguageChanged: 322,
    tvhtml5LiveChatStatus: 323,
    parentToolsCorpusSelectedEvent: 324,
    offerAdsEnrollmentInitiated: 325,
    networkQualityIntervalEvent: 326,
    deviceStartupMetrics: 328,
    heartbeatActionPlayerTransitioned: 330,
    tvhtml5Lifecycle: 331,
    heartbeatActionPlayerHalted: 332,
    adaptiveInlineMutedSettingEvent: 333,
    mainAppLibraryLoadingState: 334,
    thirdPartyLogMonitoringEvent: 336,
    appShellAssetLoadReport: 337,
    tvhtml5AndroidAttestation: 338,
    tvhtml5StartupSoundEvent: 340,
    iosBackgroundRefreshTask: 342,
    iosBackgroundProcessingTask: 343,
    sliEventBatch: 344,
    postImpressionEvent: 346,
    musicSideloadedPlaylistExport: 347,
    idbUnexpectedlyClosed: 348,
    voiceSearchEvent: 349,
    mdxSessionCastEvent: 350,
    idbQuotaExceeded: 351,
    idbTransactionEnded: 352,
    idbTransactionAborted: 353,
    tvhtml5KeyboardLogging: 354,
    idbIsSupportedCompleted: 355,
    creatorStudioMobileEvent: 356,
    idbDataCorrupted: 357,
    parentToolsAppChosenEvent: 358,
    webViewBottomSheetResized: 359,
    activeStateControllerScrollPerformanceSummary: 360,
    navigatorValidation: 361,
    mdxSessionHeartbeat: 362,
    clientHintsPolyfillDiagnostics: 363,
    clientHintsPolyfillEvent: 364,
    proofOfOriginTokenError: 365,
    kidsAddedAccountSummary: 366,
    musicWearableDevice: 367,
    ypcRefundFlowEvent: 368,
    tvhtml5PlaybackMeasurementEvent: 369,
    tvhtml5WatermarkMeasurementEvent: 370,
    clientExpGcfPropagationEvent: 371,
    mainAppReferrerIntent: 372,
    leaderLockEnded: 373,
    leaderLockAcquired: 374,
    googleHatsEvent: 375,
    persistentLensLaunchEvent: 376,
    parentToolsChildWelcomeChosenEvent: 378,
    browseThumbnailPreloadEvent: 379,
    finalPayload: 380,
    mdxDialAdditionalDataUpdateEvent: 381,
    webOrchestrationTaskLifecycleRecord: 382,
    startupSignalEvent: 384,
    accountError: 385,
    gmsDeviceCheckEvent: 386,
    accountSelectorEvent: 388,
    accountUiCallbacks: 389,
    mdxDialAdditionalDataProbeEvent: 390,
    downloadsSearchIcingApiStats: 391,
    downloadsSearchIndexUpdatedEvent: 397,
    downloadsSearchIndexSnapshot: 398,
    dataPushClientEvent: 392,
    kidsCategorySelectedEvent: 393,
    mdxDeviceManagementSnapshotEvent: 394,
    prefetchRequested: 395,
    prefetchableCommandExecuted: 396,
    gelDebuggingEvent: 399,
    webLinkTtsPlayEnd: 400,
    clipViewInvalid: 401,
    persistentStorageStateChecked: 403,
    cacheWipeoutEvent: 404,
    playerEvent: 410,
    sfvEffectPipelineStartedEvent: 412,
    sfvEffectPipelinePausedEvent: 429,
    sfvEffectPipelineEndedEvent: 413,
    sfvEffectChosenEvent: 414,
    sfvEffectLoadedEvent: 415,
    sfvEffectUserInteractionEvent: 465,
    sfvEffectFirstFrameProcessedLatencyEvent: 416,
    sfvEffectAggregatedFramesProcessedLatencyEvent: 417,
    sfvEffectAggregatedFramesDroppedEvent: 418,
    sfvEffectPipelineErrorEvent: 430,
    sfvEffectGraphFrozenEvent: 419,
    sfvEffectGlThreadBlockedEvent: 420,
    mdeVideoChangedEvent: 442,
    mdePlayerPerformanceMetrics: 472,
    genericClientExperimentEvent: 423,
    homePreloadTaskScheduled: 424,
    homePreloadTaskExecuted: 425,
    homePreloadCacheHit: 426,
    polymerPropertyChangedInObserver: 427,
    applicationStarted: 431,
    networkCronetRttBatch: 432,
    networkCronetRttSummary: 433,
    repeatChapterLoopEvent: 436,
    seekCancellationEvent: 462,
    lockModeTimeoutEvent: 483,
    offlineTransferStarted: 4,
    musicOfflineMixtapePreferencesChanged: 16,
    mangoDailyNewVideosNotificationAttempt: 40,
    mangoDailyNewVideosNotificationError: 77,
    dtwsPlaybackStarted: 112,
    dtwsTileFetchStarted: 113,
    dtwsTileFetchCompleted: 114,
    dtwsTileFetchStatusChanged: 145,
    dtwsKeyframeDecoderBufferSent: 115,
    dtwsTileUnderflowedOnNonkeyframe: 116,
    dtwsBackfillFetchStatusChanged: 143,
    dtwsBackfillUnderflowed: 117,
    dtwsAdaptiveLevelChanged: 128,
    blockingVisitorIdTimeout: 277,
    liteSocial: 18,
    mobileJsInvocation: 297,
    biscottiBasedDetection: 439,
    coWatchStateChange: 440,
    embedsVideoDataDidChange: 441,
    shortsFirst: 443,
    cruiseControlEvent: 445,
    qoeClientLoggingContext: 446,
    atvRecommendationJobExecuted: 447,
    tvhtml5UserFeedback: 448,
    producerProjectCreated: 449,
    producerProjectOpened: 450,
    producerProjectDeleted: 451,
    producerProjectElementAdded: 453,
    producerProjectElementRemoved: 454,
    tvhtml5ShowClockEvent: 455,
    deviceCapabilityCheckMetrics: 456,
    youtubeClearcutEvent: 461,
    offlineBrowseFallbackEvent: 463,
    getCtvTokenEvent: 464,
    startupDroppedFramesSummary: 466,
    screenshotEvent: 468,
    miniAppPlayEvent: 469,
    elementsDebugCounters: 470,
    fontLoadEvent: 471,
    webKillswitchReceived: 473,
    webKillswitchExecuted: 474,
    cameraOpenEvent: 475,
    manualSmoothnessMeasurement: 476,
    tvhtml5AppQualityEvent: 477,
    polymerPropertyAccessEvent: 479,
    miniAppSdkUsage: 480,
    cobaltTelemetryEvent: 481,
    crossDevicePlayback: 482,
    channelCreatedWithObakeImage: 484,
    channelEditedWithObakeImage: 485,
    offlineDeleteEvent: 486,
  };
  var qu = {},
    ru = Ys("ServiceWorkerLogsDatabase", {
      Jb: ((qu.SWHealthLog = { Rb: 1 }), qu),
      Nc: !0,
      upgrade: function (a, b) {
        b(1) &&
          ps(
            is(a, "SWHealthLog", { keyPath: "id", autoIncrement: !0 }),
            "swHealthNewRequest",
            ["interface", "timestamp"]
          );
      },
      version: 1,
    });
  function su(a) {
    return Bs(ru(), a);
  }
  function tu(a) {
    var b, c;
    B(function (d) {
      if (1 == d.g) return z(d, su(a), 2);
      b = d.l;
      c = Y() - 2592e6;
      return z(
        d,
        hs(b, ["SWHealthLog"], { mode: "readwrite", ra: !0 }, function (e) {
          return rs(e.objectStore("SWHealthLog"), {}, function (f) {
            if (f.Ra().timestamp <= c)
              return f.delete().then(function () {
                return f.continue();
              });
          });
        }),
        0
      );
    });
  }
  function uu(a) {
    var b;
    return B(function (c) {
      if (1 == c.g) return z(c, su(a), 2);
      b = c.l;
      return z(c, b.clear("SWHealthLog"), 0);
    });
  }
  var vu = {},
    wu = 0;
  function xu(a) {
    var b = new Image(),
      c = "" + wu++;
    vu[c] = b;
    b.onload = b.onerror = function () {
      delete vu[c];
    };
    b.src = a;
  }
  function yu() {
    this.g = new Map();
    this.l = !1;
  }
  function zu() {
    if (!yu.g) {
      var a = D("yt.networkRequestMonitor.instance") || new yu();
      G("yt.networkRequestMonitor.instance", a);
      yu.g = a;
    }
    return yu.g;
  }
  yu.prototype.requestComplete = function (a, b) {
    b && (this.l = !0);
    a = this.removeParams(a);
    this.g.get(a) || this.g.set(a, b);
  };
  yu.prototype.isEndpointCFR = function (a) {
    a = this.removeParams(a);
    return (a = this.g.get(a)) ? !1 : !1 === a && this.l ? !0 : null;
  };
  yu.prototype.removeParams = function (a) {
    return a.split("?")[0];
  };
  yu.prototype.removeParams = yu.prototype.removeParams;
  yu.prototype.isEndpointCFR = yu.prototype.isEndpointCFR;
  yu.prototype.requestComplete = yu.prototype.requestComplete;
  yu.getInstance = zu;
  var Au;
  function Bu() {
    Au || (Au = new Ar("yt.offline"));
    return Au;
  }
  function Cu(a) {
    if (V("offline_error_handling")) {
      var b = Bu().get("errors", !0) || {};
      b[a.message] = { name: a.name, stack: a.stack };
      a.level && (b[a.message].level = a.level);
      Bu().set("errors", b, 2592e3, !0);
    }
  }
  function Z() {
    yd.call(this);
    var a = this;
    this.i = !1;
    this.l = yg();
    this.l.ya("networkstatus-online", function () {
      if (a.i && V("offline_error_handling")) {
        var b = Bu().get("errors", !0);
        if (b) {
          for (var c in b)
            if (b[c]) {
              var d = new Qq(c, "sent via offline_errors");
              d.name = b[c].name;
              d.stack = b[c].stack;
              d.level = b[c].level;
              Zp(d);
            }
          Bu().set("errors", {}, 2592e3, !0);
        }
      }
    });
  }
  y(Z, yd);
  function Du() {
    if (!Z.g) {
      var a = D("yt.networkStatusManager.instance") || new Z();
      G("yt.networkStatusManager.instance", a);
      Z.g = a;
    }
    return Z.g;
  }
  m = Z.prototype;
  m.Fa = function () {
    return this.l.Fa();
  };
  m.pb = function (a) {
    this.l.l = a;
  };
  m.Lf = function () {
    var a = window.navigator.onLine;
    return void 0 === a ? !0 : a;
  };
  m.wf = function () {
    this.i = !0;
  };
  m.ya = function (a, b) {
    return this.l.ya(a, b);
  };
  m.Mc = function (a) {
    a = wg(this.l, a);
    a.then(function (b) {
      V("use_cfr_monitor") && zu().requestComplete("generate_204", b);
    });
    return a;
  };
  Z.prototype.sendNetworkCheckRequest = Z.prototype.Mc;
  Z.prototype.listen = Z.prototype.ya;
  Z.prototype.enableErrorFlushing = Z.prototype.wf;
  Z.prototype.getWindowStatus = Z.prototype.Lf;
  Z.prototype.networkStatusHint = Z.prototype.pb;
  Z.prototype.isNetworkAvailable = Z.prototype.Fa;
  Z.getInstance = Du;
  function Eu(a) {
    a = void 0 === a ? {} : a;
    yd.call(this);
    var b = this;
    this.l = this.o = 0;
    this.i = Du();
    var c = D("yt.networkStatusManager.instance.listen").bind(this.i);
    c &&
      (a.Kc
        ? ((this.Kc = a.Kc),
          c("networkstatus-online", function () {
            Fu(b, "publicytnetworkstatus-online");
          }),
          c("networkstatus-offline", function () {
            Fu(b, "publicytnetworkstatus-offline");
          }))
        : (c("networkstatus-online", function () {
            zd(b, "publicytnetworkstatus-online");
          }),
          c("networkstatus-offline", function () {
            zd(b, "publicytnetworkstatus-offline");
          })));
  }
  y(Eu, yd);
  Eu.prototype.Fa = function () {
    var a = D("yt.networkStatusManager.instance.isNetworkAvailable");
    return a ? a.bind(this.i)() : !0;
  };
  Eu.prototype.pb = function (a) {
    var b = D("yt.networkStatusManager.instance.networkStatusHint").bind(
      this.i
    );
    b && b(a);
  };
  Eu.prototype.Mc = function (a) {
    var b = this,
      c;
    return B(function (d) {
      c = D("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(
        b.i
      );
      return V("skip_network_check_if_cfr") &&
        zu().isEndpointCFR("generate_204")
        ? d.return(
            new Promise(function (e) {
              var f;
              b.pb((null == (f = window.navigator) ? void 0 : f.onLine) || !0);
              e(b.Fa());
            })
          )
        : c
        ? d.return(c(a))
        : d.return(!0);
    });
  };
  function Fu(a, b) {
    a.Kc
      ? a.l
        ? (zg.Ea(a.o),
          (a.o = zg.Pa(function () {
            a.m !== b && (zd(a, b), (a.m = b), (a.l = Y()));
          }, a.Kc - (Y() - a.l))))
        : (zd(a, b), (a.m = b), (a.l = Y()))
      : zd(a, b);
  }
  var Gu;
  function Hu() {
    var a = Vt.call;
    Gu || (Gu = new Eu({ ui: !0, fi: !0 }));
    a.call(Vt, this, {
      la: { lf: nu, xb: mu, fe: ju, Eg: ku, Bd: lu, set: hu },
      pa: Gu,
      handleError: function (b, c, d) {
        var e,
          f = null == d ? void 0 : null == (e = d.error) ? void 0 : e.code;
        if (400 === f || 415 === f) {
          var g;
          $p(
            new Qq(
              b.message,
              c,
              null == d ? void 0 : null == (g = d.error) ? void 0 : g.code
            ),
            void 0,
            void 0,
            void 0,
            !0
          );
        } else Zp(b);
      },
      Bb: $p,
      sendFn: Iu,
      now: Y,
      af: Cu,
      La: zr(),
      vd: "publicytnetworkstatus-online",
      ud: "publicytnetworkstatus-offline",
      wc: !0,
      qc: 0.1,
      Ic: jq("potential_esf_error_limit", 10),
      ga: V,
      Xb: !(
        Rq() && "www.youtube-nocookie.com" !== vc(document.location.toString())
      ),
    });
    this.i = new Pn();
    V("networkless_immediately_drop_all_requests") && ou();
    Vs("LogsDatabaseV2");
  }
  y(Hu, Vt);
  function Ju() {
    var a = D("yt.networklessRequestController.instance");
    a ||
      ((a = new Hu()),
      G("yt.networklessRequestController.instance", a),
      V("networkless_logging") &&
        Ns().then(function (b) {
          a.fa = b;
          Xt(a);
          a.i.resolve();
          a.wc && Math.random() <= a.qc && a.fa && tu(a.fa);
          V("networkless_immediately_drop_sw_health_store") && Ku(a);
        }));
    return a;
  }
  Hu.prototype.writeThenSend = function (a, b) {
    b || (b = {});
    Rq() || (this.g = !1);
    Vt.prototype.writeThenSend.call(this, a, b);
  };
  Hu.prototype.sendThenWrite = function (a, b, c) {
    b || (b = {});
    Rq() || (this.g = !1);
    Vt.prototype.sendThenWrite.call(this, a, b, c);
  };
  Hu.prototype.sendAndWrite = function (a, b) {
    b || (b = {});
    Rq() || (this.g = !1);
    Vt.prototype.sendAndWrite.call(this, a, b);
  };
  Hu.prototype.awaitInitialization = function () {
    return this.i.promise;
  };
  function Ku(a) {
    var b;
    B(function (c) {
      if (!a.fa) throw ((b = Tr("clearSWHealthLogsDb")), b);
      return c.return(
        uu(a.fa).catch(function (d) {
          a.handleError(d);
        })
      );
    });
  }
  function Iu(a, b, c) {
    b = V("web_fp_via_jspb") ? Object.assign({}, b) : b;
    V("use_cfr_monitor") && Lu(a, b);
    if (V("use_request_time_ms_header"))
      b.headers &&
        (b.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round(Y())));
    else {
      var d;
      if (null == (d = b.postParams) ? 0 : d.requestTimeMs)
        b.postParams.requestTimeMs = Math.round(Y());
    }
    if (c && 0 === Object.keys(b).length) {
      var e = void 0 === e ? "" : e;
      var f = void 0 === f ? !1 : f;
      var g = void 0 === g ? !1 : g;
      if (a)
        if (e) Cq(a, void 0, "POST", e);
        else if (T("USE_NET_AJAX_FOR_PING_TRANSPORT", !1))
          Cq(a, void 0, "GET", "", void 0, void 0, f, g);
        else {
          b: {
            try {
              var h = new Oa({ url: a });
              if ((h.i && h.l) || h.m) {
                var k = uc(a.match(tc)[5] || null),
                  l;
                if (!(l = !k || !k.endsWith("/aclk"))) {
                  var n = a.search(Cc),
                    p = Bc(a, 0, "ri", n);
                  if (0 > p) var r = null;
                  else {
                    var q = a.indexOf("&", p);
                    if (0 > q || q > n) q = n;
                    r = sc(a.slice(p + 3, -1 !== q ? q : 0));
                  }
                  l = "1" !== r;
                }
                var u = !l;
                break b;
              }
            } catch (A) {}
            u = !1;
          }
          if (u) {
            b: {
              try {
                if (
                  window.navigator &&
                  window.navigator.sendBeacon &&
                  window.navigator.sendBeacon(a, "")
                ) {
                  var t = !0;
                  break b;
                }
              } catch (A) {}
              t = !1;
            }
            c = t ? !0 : !1;
          } else c = !1;
          c || xu(a);
        }
    } else
      b.compress
        ? b.postBody
          ? ("string" !== typeof b.postBody &&
              (b.postBody = JSON.stringify(b.postBody)),
            Nt(a, b.postBody, b, zq))
          : Nt(a, JSON.stringify(b.postParams), b, Hq)
        : zq(a, b);
  }
  function Lu(a, b) {
    var c = b.onError ? b.onError : function () {};
    b.onError = function (e, f) {
      zu().requestComplete(a, !1);
      c(e, f);
    };
    var d = b.onSuccess ? b.onSuccess : function () {};
    b.onSuccess = function (e, f) {
      zu().requestComplete(a, !0);
      d(e, f);
    };
  }
  var Mu = C.ytNetworklessLoggingInitializationOptions || {
    isNwlInitialized: !1,
  };
  G("ytNetworklessLoggingInitializationOptions", Mu);
  function Nu(a) {
    var b = this;
    this.config_ = null;
    a ? (this.config_ = a) : kt() && (this.config_ = lt());
    Uq(function () {
      Tt(b);
    }, 5e3);
  }
  Nu.prototype.isReady = function () {
    !this.config_ && kt() && (this.config_ = lt());
    return !!this.config_;
  };
  function Ut(a, b, c, d) {
    function e(u) {
      u = void 0 === u ? !1 : u;
      var t;
      if (
        d.retry &&
        "www.youtube-nocookie.com" != h &&
        (u ||
          V("skip_ls_gel_retry") ||
          "application/json" !== g.headers["Content-Type"] ||
          (t = Rt(b, c, l, k)),
        t)
      ) {
        var A = g.onSuccess,
          I = g.onFetchSuccess;
        g.onSuccess = function (va, gc) {
          St(t);
          A(va, gc);
        };
        c.onFetchSuccess = function (va, gc) {
          St(t);
          I(va, gc);
        };
      }
      try {
        if (u && d.retry && !d.networklessOptions.bypassNetworkless)
          (g.method = "POST"),
            d.networklessOptions.writeThenSend
              ? Ju().writeThenSend(q, g)
              : Ju().sendAndWrite(q, g);
        else if (d.compress) {
          var X = !d.networklessOptions.writeThenSend;
          if (g.postBody) {
            var U = g.postBody;
            "string" !== typeof U && (U = JSON.stringify(g.postBody));
            Nt(q, U, g, zq, X);
          } else Nt(q, JSON.stringify(g.postParams), g, Hq, X);
        } else V("web_all_payloads_via_jspb") ? zq(q, g) : Hq(q, g);
      } catch (va) {
        if ("InvalidAccessError" == va.name)
          t && (St(t), (t = 0)),
            $p(Error("An extension is blocking network request."));
        else throw va;
      }
      t &&
        Uq(function () {
          Tt(a);
        }, 5e3);
    }
    !T("VISITOR_DATA") &&
      "visitor_id" !== b &&
      0.01 > Math.random() &&
      $p(
        new Qq("Missing VISITOR_DATA when sending innertube request.", b, c, d)
      );
    if (!a.isReady()) {
      var f = new Qq("innertube xhrclient not ready", b, c, d);
      Zp(f);
      throw f;
    }
    var g = {
      headers: d.headers || {},
      method: "POST",
      postParams: c,
      postBody: d.postBody,
      postBodyFormat: d.postBodyFormat || "JSON",
      onTimeout: function () {
        d.onTimeout();
      },
      onFetchTimeout: d.onTimeout,
      onSuccess: function (u, t) {
        if (d.onSuccess) d.onSuccess(t);
      },
      onFetchSuccess: function (u) {
        if (d.onSuccess) d.onSuccess(u);
      },
      onError: function (u, t) {
        if (d.onError) d.onError(t);
      },
      onFetchError: function (u) {
        if (d.onError) d.onError(u);
      },
      timeout: d.timeout,
      withCredentials: !0,
      compress: d.compress,
    };
    g.headers["Content-Type"] ||
      (g.headers["Content-Type"] = "application/json");
    var h = "";
    (f = a.config_.qg) && (h = f);
    var k = a.config_.sg || !1,
      l = tt(k, h, d);
    Object.assign(g.headers, l);
    (f = g.headers.Authorization) &&
      !h &&
      k &&
      (g.headers["x-origin"] = window.location.origin);
    var n = "/youtubei/" + a.config_.og + "/" + b,
      p = { alt: "json" },
      r = a.config_.rg && f;
    r = r && f.startsWith("Bearer");
    r || (p.key = a.config_.ng);
    var q = hq("" + h + n, p || {}, !0);
    D("ytNetworklessLoggingInitializationOptions") && Mu.isNwlInitialized
      ? Ls().then(function (u) {
          e(u);
        })
      : e(!1);
  }
  var Ou = 0;
  G(
    "ytDomDomGetNextId",
    D("ytDomDomGetNextId") ||
      function () {
        return ++Ou;
      }
  );
  G("ytEventsEventsListeners", C.ytEventsEventsListeners || {});
  G("ytEventsEventsCounter", C.ytEventsEventsCounter || { count: 0 });
  function Pu() {
    var a = D("_lact", window);
    return null == a ? -1 : Math.max(Date.now() - a, 0);
  }
  var Qu = C.ytPubsubPubsubInstance || new Q(),
    Ru = C.ytPubsubPubsubSubscribedKeys || {},
    Su = C.ytPubsubPubsubTopicToKeys || {},
    Tu = C.ytPubsubPubsubIsSynchronous || {};
  Q.prototype.subscribe = Q.prototype.subscribe;
  Q.prototype.unsubscribeByKey = Q.prototype.Rc;
  Q.prototype.publish = Q.prototype.Ee;
  Q.prototype.clear = Q.prototype.clear;
  G("ytPubsubPubsubInstance", Qu);
  G("ytPubsubPubsubTopicToKeys", Su);
  G("ytPubsubPubsubIsSynchronous", Tu);
  G("ytPubsubPubsubSubscribedKeys", Ru);
  var Uu = Symbol("injectionDeps");
  function Vu() {
    this.key = gt;
  }
  function Wu() {
    this.l = new Map();
    this.g = new Map();
  }
  Wu.prototype.resolve = function (a) {
    return a instanceof Vu ? Xu(this, a.key, [], !0) : Xu(this, a, []);
  };
  function Xu(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    if (-1 < c.indexOf(b)) throw Error("Deps cycle for: " + b);
    if (a.g.has(b)) return a.g.get(b);
    if (!a.l.has(b)) {
      if (d) return;
      throw Error("No provider for: " + b);
    }
    d = a.l.get(b);
    c.push(b);
    if (void 0 !== d.ph) var e = d.ph;
    else if (d.oh)
      (e = d[Uu] ? Yu(a, d[Uu], c) : []), (e = d.oh.apply(d, x(e)));
    else if (d.nh) {
      e = d.nh;
      var f = e[Uu] ? Yu(a, e[Uu], c) : [];
      e = new (Function.prototype.bind.apply(e, [null].concat(x(f))))();
    } else throw Error("Could not resolve providers for: " + b);
    c.pop();
    d.Hi || a.g.set(b, e);
    return e;
  }
  function Yu(a, b, c) {
    return b
      ? b.map(function (d) {
          return d instanceof Vu ? Xu(a, d.key, c, !0) : Xu(a, d, c);
        })
      : [];
  }
  var Zu;
  function $u() {
    Zu || (Zu = new Wu());
    return Zu;
  }
  var av = window;
  function bv() {
    var a, b;
    return "h5vcc" in av &&
      (null == (a = av.h5vcc.traceEvent) ? 0 : a.traceBegin) &&
      (null == (b = av.h5vcc.traceEvent) ? 0 : b.traceEnd)
      ? 1
      : "performance" in av && av.performance.mark && av.performance.measure
      ? 2
      : 0;
  }
  function dv(a) {
    switch (bv()) {
      case 1:
        av.h5vcc.traceEvent.traceBegin("YTLR", a);
        break;
      case 2:
        av.performance.mark(a + "-start");
        break;
      case 0:
        break;
      default:
        Cf();
    }
  }
  function ev(a) {
    switch (bv()) {
      case 1:
        av.h5vcc.traceEvent.traceEnd("YTLR", a);
        break;
      case 2:
        var b = a + "-start",
          c = a + "-end";
        av.performance.mark(c);
        av.performance.measure(a, b, c);
        break;
      case 0:
        break;
      default:
        Cf();
    }
  }
  var fv = V("web_enable_lifecycle_monitoring") && 0 !== bv(),
    gv = V("web_enable_lifecycle_monitoring");
  function hv(a) {
    var b = this;
    var c = void 0 === c ? 0 : c;
    var d = void 0 === d ? zr() : d;
    this.m = c;
    this.l = d;
    this.i = new Pn();
    this.g = a;
    for (
      a = { mb: 0 };
      a.mb < this.g.length;
      a = { fc: a.fc, mb: a.mb }, a.mb++
    )
      (a.fc = this.g[a.mb]),
        (c = (function (e) {
          return function () {
            e.fc.od();
            b.g[e.mb].Jc = !0;
            b.g.every(function (f) {
              return !0 === f.Jc;
            }) && b.i.resolve();
          };
        })(a)),
        (d = this.l.kb(c, iv(this, a.fc))),
        (this.g[a.mb] = Object.assign({}, a.fc, { od: c, jobId: d }));
  }
  function jv(a) {
    var b = Array.from(a.g.keys()).sort(function (d, e) {
      return iv(a, a.g[e]) - iv(a, a.g[d]);
    });
    b = w(b);
    for (var c = b.next(); !c.done; c = b.next())
      (c = a.g[c.value]),
        void 0 === c.jobId || c.Jc || (a.l.Ea(c.jobId), a.l.kb(c.od, 10));
  }
  hv.prototype.cancel = function () {
    for (var a = w(this.g), b = a.next(); !b.done; b = a.next())
      (b = b.value),
        void 0 === b.jobId || b.Jc || this.l.Ea(b.jobId),
        (b.Jc = !0);
    this.i.resolve();
  };
  function iv(a, b) {
    var c;
    return null != (c = b.priority) ? c : a.m;
  }
  function kv(a) {
    this.state = a;
    this.g = [];
    this.o = void 0;
    this.s = {};
    fv && dv(this.state);
  }
  m = kv.prototype;
  m.install = function (a) {
    this.g.push(a);
    return this;
  };
  m.uninstall = function () {
    var a = this;
    Ca.apply(0, arguments).forEach(function (b) {
      b = a.g.indexOf(b);
      -1 < b && a.g.splice(b, 1);
    });
  };
  function lv(a) {
    fv && ev(a.state);
    var b = a.transitions.find(function (d) {
      return Array.isArray(d.from)
        ? d.from.find(function (e) {
            return e === a.state && "none" === d.gb;
          })
        : d.from === a.state && "none" === d.gb;
    });
    if (b) {
      a.i && (jv(a.i), (a.i = void 0));
      gv &&
        console.groupCollapsed &&
        console.groupEnd &&
        (console.groupCollapsed(
          "[" + a.constructor.name + "] '" + a.state + "' to 'none'"
        ),
        console.log("with message: ", void 0),
        console.groupEnd());
      a.state = "none";
      fv && dv(a.state);
      b = b.action.bind(a);
      var c = a.g
        .filter(function (d) {
          return d.none;
        })
        .map(function (d) {
          return d.none;
        });
      b(mv(a, c), void 0);
    } else throw Error("no transition specified from " + a.state + " to none");
  }
  function mv(a, b) {
    var c = b.filter(function (e) {
        return 10 === nv(a, e);
      }),
      d = b.filter(function (e) {
        return 10 !== nv(a, e);
      });
    return a.s.Fi
      ? function () {
          var e = Ca.apply(0, arguments);
          return B(function (f) {
            if (1 == f.g) return z(f, a.Vg.apply(a, [c].concat(x(e))), 2);
            a.Qe.apply(a, [d].concat(x(e)));
            f.g = 0;
          });
        }
      : function () {
          var e = Ca.apply(0, arguments);
          a.Wg.apply(a, [c].concat(x(e)));
          a.Qe.apply(a, [d].concat(x(e)));
        };
  }
  m.Wg = function (a) {
    for (
      var b = Ca.apply(1, arguments), c = zr(), d = w(a), e = d.next(), f = {};
      !e.done;
      f = { Fb: f.Fb }, e = d.next()
    )
      (f.Fb = e.value),
        c.Qb(
          (function (g) {
            return function () {
              ov(g.Fb.name);
              g.Fb.Vc.apply(g.Fb, x(b));
              pv(g.Fb.name);
            };
          })(f)
        );
  };
  m.Vg = function (a) {
    var b = Ca.apply(1, arguments),
      c,
      d,
      e,
      f,
      g;
    return B(function (h) {
      1 == h.g && ((c = zr()), (d = w(a)), (e = d.next()), (f = {}));
      if (3 != h.g) {
        if (e.done) return h.V(0);
        f.nb = e.value;
        f.Sb = void 0;
        g = (function (k) {
          return function () {
            ov(k.nb.name);
            var l = k.nb.Vc.apply(k.nb, x(b));
            "function" === typeof (null == l ? void 0 : l.then)
              ? (k.Sb = l.then(function () {
                  pv(k.nb.name);
                }))
              : pv(k.nb.name);
          };
        })(f);
        c.Qb(g);
        return f.Sb ? z(h, f.Sb, 3) : h.V(3);
      }
      f = { nb: f.nb, Sb: f.Sb };
      e = d.next();
      return h.V(2);
    });
  };
  m.Qe = function (a) {
    var b = Ca.apply(1, arguments),
      c = this,
      d = a.map(function (e) {
        return {
          od: function () {
            ov(e.name);
            e.Vc.apply(e, x(b));
            pv(e.name);
          },
          priority: nv(c, e),
        };
      });
    d.length && (this.i = new hv(d));
  };
  function nv(a, b) {
    var c, d;
    return null != (d = null != (c = a.o) ? c : b.priority) ? d : 0;
  }
  function ov(a) {
    fv && a && dv(a);
  }
  function pv(a) {
    fv && a && ev(a);
  }
  da.Object.defineProperties(kv.prototype, {
    m: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.state;
      },
    },
  });
  function qv(a) {
    kv.call(this, void 0 === a ? "none" : a);
    this.l = null;
    this.o = 10;
    this.transitions = [
      { from: "none", gb: "application_navigating", action: this.u },
      { from: "application_navigating", gb: "none", action: this.C },
      {
        from: "application_navigating",
        gb: "application_navigating",
        action: function () {},
      },
      { from: "none", gb: "none", action: function () {} },
    ];
  }
  var rv;
  y(qv, kv);
  qv.prototype.u = function (a, b) {
    var c = this;
    this.l = Uq(function () {
      "application_navigating" === c.m && lv(c);
    }, 5e3);
    a(null == b ? void 0 : b.event);
  };
  qv.prototype.C = function (a, b) {
    this.l && (zg.Ea(this.l), (this.l = null));
    a(null == b ? void 0 : b.event);
  };
  function sv() {
    rv || (rv = new qv());
    return rv;
  }
  function tv() {
    this.store = {};
    this.g = {};
  }
  tv.prototype.storePayload = function (a, b) {
    a = uv(a);
    this.store[a]
      ? this.store[a].push(b)
      : ((this.g = {}), (this.store[a] = [b]));
    return a;
  };
  tv.prototype.smartExtractMatchingEntries = function (a) {
    if (!a.keys.length) return [];
    for (
      var b = vv(this, a.keys.splice(0, 1)[0]), c = [], d = 0;
      d < b.length;
      d++
    )
      this.store[b[d]] &&
        a.sizeLimit &&
        (this.store[b[d]].length <= a.sizeLimit
          ? (c.push.apply(c, x(this.store[b[d]])), delete this.store[b[d]])
          : c.push.apply(c, x(this.store[b[d]].splice(0, a.sizeLimit))));
    (null == a ? 0 : a.sizeLimit) &&
      c.length < (null == a ? void 0 : a.sizeLimit) &&
      ((a.sizeLimit -= c.length),
      c.push.apply(c, x(this.smartExtractMatchingEntries(a))));
    return c;
  };
  tv.prototype.extractMatchingEntries = function (a) {
    a = vv(this, a);
    for (var b = [], c = 0; c < a.length; c++)
      this.store[a[c]] &&
        (b.push.apply(b, x(this.store[a[c]])), delete this.store[a[c]]);
    return b;
  };
  tv.prototype.getSequenceCount = function (a) {
    a = vv(this, a);
    for (var b = 0, c = 0; c < a.length; c++) {
      var d = void 0;
      b += (null == (d = this.store[a[c]]) ? void 0 : d.length) || 0;
    }
    return b;
  };
  function vv(a, b) {
    var c = uv(b);
    if (a.g[c]) return a.g[c];
    var d = Object.keys(a.store) || [];
    if (1 >= d.length && uv(b) === d[0]) return d;
    for (var e = [], f = 0; f < d.length; f++) {
      var g = d[f].split("/");
      if (wv(b.auth, g[0])) {
        var h = b.isJspb;
        wv(void 0 === h ? "undefined" : h ? "true" : "false", g[1]) &&
          wv(b.cttAuthInfo, g[2]) &&
          ((h = b.tier),
          (h = void 0 === h ? "undefined" : JSON.stringify(h)),
          wv(h, g[3]) && e.push(d[f]));
      }
    }
    return (a.g[c] = e);
  }
  function wv(a, b) {
    return void 0 === a || "undefined" === a ? !0 : a === b;
  }
  tv.prototype.getSequenceCount = tv.prototype.getSequenceCount;
  tv.prototype.extractMatchingEntries = tv.prototype.extractMatchingEntries;
  tv.prototype.smartExtractMatchingEntries =
    tv.prototype.smartExtractMatchingEntries;
  tv.prototype.storePayload = tv.prototype.storePayload;
  function uv(a) {
    return [
      void 0 === a.auth ? "undefined" : a.auth,
      void 0 === a.isJspb ? "undefined" : a.isJspb,
      void 0 === a.cttAuthInfo ? "undefined" : a.cttAuthInfo,
      void 0 === a.tier ? "undefined" : a.tier,
    ].join("/");
  }
  var xv = jq("initial_gel_batch_timeout", 2e3),
    yv = jq("gel_queue_timeout_max_ms", 6e4),
    zv = Math.pow(2, 16) - 1,
    Av = jq("gel_min_batch_size", 5),
    Bv = void 0;
  function Cv() {
    this.m = this.g = this.l = 0;
    this.i = !1;
  }
  var Dv = new Cv(),
    Ev = new Cv(),
    Fv = new Cv(),
    Gv = new Cv(),
    Hv,
    Iv = !0,
    Jv = 1,
    Kv = new Map(),
    Lv = C.ytLoggingTransportTokensToCttTargetIds_ || {};
  G("ytLoggingTransportTokensToCttTargetIds_", Lv);
  var Mv = C.ytLoggingTransportTokensToJspbCttTargetIds_ || {};
  G("ytLoggingTransportTokensToJspbCttTargetIds_", Mv);
  var Nv = {};
  function Ov() {
    var a = D("yt.logging.ims");
    a || ((a = new tv()), G("yt.logging.ims", a));
    return a;
  }
  function Pv(a, b) {
    if ("log_event" === a.endpoint) {
      Qv(a);
      var c = Rv(a),
        d = Sv(a.payload) || "",
        e = Tv(d),
        f = 200;
      if (e) {
        if (!1 === e.enabled && !V("web_payload_policy_disabled_killswitch"))
          return;
        f = Uv(e.tier);
        if (400 === f) {
          Vv(a, b);
          return;
        }
      }
      Nv[c] = !0;
      e = { cttAuthInfo: c, isJspb: !1, tier: f };
      Ov().storePayload(e, a.payload);
      Wv(b, c, !1, e, Xv(d));
    }
  }
  function Yv(a, b, c) {
    if ("log_event" === b.endpoint) {
      Qv(void 0, b);
      var d = Rv(b, !0),
        e = Tv(a),
        f = 200;
      if (e) {
        if (!1 === e.enabled && !V("web_payload_policy_disabled_killswitch"))
          return;
        f = Uv(e.tier);
        if (400 === f) {
          Zv(a, b, c);
          return;
        }
      }
      Nv[d] = !0;
      e = { cttAuthInfo: d, isJspb: !0, tier: f };
      Ov().storePayload(e, b.payload.toJSON());
      Wv(c, d, !0, e, Xv(a));
    }
  }
  function Wv(a, b, c, d, e) {
    function f() {
      $v(V("flush_only_full_queue") ? b : void 0, c, d.tier);
    }
    c = void 0 === c ? !1 : c;
    e = void 0 === e ? !1 : e;
    a && (Bv = new a());
    a =
      jq("tvhtml5_logging_max_batch_ads_fork") ||
      jq("web_logging_max_batch") ||
      100;
    var g = Y(),
      h = aw(c, d.tier),
      k = h.m;
    e && (h.i = !0);
    e = 0;
    d && (e = Ov().getSequenceCount(d));
    1e3 <= e
      ? f()
      : e >= a
      ? Hv ||
        (Hv = bw(function () {
          f();
          Hv = void 0;
        }, 0))
      : 10 <= g - k && (cw(c, d.tier), (h.m = g));
  }
  function Vv(a, b) {
    if ("log_event" === a.endpoint) {
      Qv(a);
      var c = Rv(a),
        d = new Map();
      d.set(c, [a.payload]);
      var e = Sv(a.payload) || "";
      b && (Bv = new b());
      return new Td(function (f, g) {
        Bv && Bv.isReady()
          ? dw(d, Bv, f, g, { bypassNetworkless: !0 }, !0, Xv(e))
          : f();
      });
    }
  }
  function Zv(a, b, c) {
    if ("log_event" === b.endpoint) {
      Qv(void 0, b);
      var d = Rv(b, !0),
        e = new Map();
      e.set(d, [b.payload.toJSON()]);
      c && (Bv = new c());
      return new Td(function (f) {
        Bv && Bv.isReady()
          ? ew(e, Bv, f, { bypassNetworkless: !0 }, !0, Xv(a))
          : f();
      });
    }
  }
  function Rv(a, b) {
    var c = "";
    if (a.dangerousLogToVisitorSession) c = "visitorOnlyApprovedKey";
    else if (a.cttAuthInfo) {
      if (void 0 === b ? 0 : b) {
        b = a.cttAuthInfo.token;
        c = a.cttAuthInfo;
        var d = new Mp();
        c.videoId
          ? gf(d, 1, qf, Oe(c.videoId))
          : c.playlistId && gf(d, 2, qf, Oe(c.playlistId));
        Mv[b] = d;
      } else
        (b = a.cttAuthInfo),
          (c = {}),
          b.videoId
            ? (c.videoId = b.videoId)
            : b.playlistId && (c.playlistId = b.playlistId),
          (Lv[a.cttAuthInfo.token] = c);
      c = a.cttAuthInfo.token;
    }
    return c;
  }
  function $v(a, b, c) {
    var d = { writeThenSend: !0 };
    d = void 0 === d ? {} : d;
    b = void 0 === b ? !1 : b;
    new Td(function (e, f) {
      var g = aw(b, c),
        h = g.i;
      g.i = !1;
      fw(g.l);
      fw(g.g);
      g.g = 0;
      Bv && Bv.isReady()
        ? void 0 === c && V("enable_web_tiered_gel")
          ? gw(e, f, d, a, b, 300, h)
          : gw(e, f, d, a, b, c, h)
        : (cw(b, c), e());
    });
  }
  function gw(a, b, c, d, e, f, g) {
    var h = Bv;
    c = void 0 === c ? {} : c;
    e = void 0 === e ? !1 : e;
    f = void 0 === f ? 200 : f;
    g = void 0 === g ? !1 : g;
    var k = new Map(),
      l = new Map(),
      n = { isJspb: e, cttAuthInfo: d, tier: f },
      p = { isJspb: e, cttAuthInfo: d };
    if (void 0 !== d)
      e
        ? ((b = V("enable_web_tiered_gel")
            ? Ov().smartExtractMatchingEntries({ keys: [n, p], sizeLimit: 1e3 })
            : Ov().extractMatchingEntries(p)),
          k.set(d, b),
          ew(k, h, a, c, !1, g))
        : ((k = V("enable_web_tiered_gel")
            ? Ov().smartExtractMatchingEntries({ keys: [n, p], sizeLimit: 1e3 })
            : Ov().extractMatchingEntries(p)),
          l.set(d, k),
          dw(l, h, a, b, c, !1, g));
    else if (e) {
      b = w(Object.keys(Nv));
      for (d = b.next(); !d.done; d = b.next())
        (l = d.value),
          (f = V("enable_web_tiered_gel")
            ? Ov().smartExtractMatchingEntries({ keys: [n, p], sizeLimit: 1e3 })
            : Ov().extractMatchingEntries({ isJspb: !0, cttAuthInfo: l })),
          0 < f.length && k.set(l, f),
          ((V("web_fp_via_jspb_and_json") && c.writeThenSend) ||
            !V("web_fp_via_jspb_and_json")) &&
            delete Nv[l];
      ew(k, h, a, c, !1, g);
    } else {
      k = w(Object.keys(Nv));
      for (d = k.next(); !d.done; d = k.next())
        (n = d.value),
          (p = V("enable_web_tiered_gel")
            ? Ov().smartExtractMatchingEntries({
                keys: [
                  { isJspb: !1, cttAuthInfo: n, tier: f },
                  { isJspb: !1, cttAuthInfo: n },
                ],
                sizeLimit: 1e3,
              })
            : Ov().extractMatchingEntries({ isJspb: !1, cttAuthInfo: n })),
          0 < p.length && l.set(n, p),
          ((V("web_fp_via_jspb_and_json") && c.writeThenSend) ||
            !V("web_fp_via_jspb_and_json")) &&
            delete Nv[n];
      dw(l, h, a, b, c, !1, g);
    }
  }
  function cw(a, b) {
    function c() {
      $v(void 0, a, b);
    }
    a = void 0 === a ? !1 : a;
    b = void 0 === b ? 200 : b;
    var d = aw(a, b),
      e = d === Gv || d === Fv ? 5e3 : yv;
    V("web_gel_timeout_cap") &&
      !d.g &&
      ((e = bw(function () {
        c();
      }, e)),
      (d.g = e));
    fw(d.l);
    e = T("LOGGING_BATCH_TIMEOUT", jq("web_gel_debounce_ms", 1e4));
    V("shorten_initial_gel_batch_timeout") && Iv && (e = xv);
    e = bw(function () {
      0 < jq("gel_min_batch_size")
        ? Ov().getSequenceCount({ cttAuthInfo: void 0, isJspb: a, tier: b }) >=
            Av && c()
        : c();
    }, e);
    d.l = e;
  }
  function dw(a, b, c, d, e, f, g) {
    e = void 0 === e ? {} : e;
    var h = Math.round(Y()),
      k = a.size,
      l = hw(g);
    a = w(a);
    var n = a.next();
    for (
      g = {};
      !n.done;
      g = {
        Ec: g.Ec,
        batchRequest: g.batchRequest,
        dangerousLogToVisitorSession: g.dangerousLogToVisitorSession,
        Hc: g.Hc,
        Fc: g.Fc,
      },
        n = a.next()
    ) {
      var p = w(n.value);
      n = p.next().value;
      p = p.next().value;
      g.batchRequest = fb({ context: mt(b.config_ || lt()) });
      if (!Ga(p) && !V("throw_err_when_logevent_malformed_killswitch")) {
        d();
        break;
      }
      g.batchRequest.events = p;
      (p = Lv[n]) && iw(g.batchRequest, n, p);
      delete Lv[n];
      g.dangerousLogToVisitorSession = "visitorOnlyApprovedKey" === n;
      jw(g.batchRequest, h, g.dangerousLogToVisitorSession);
      kw(e);
      g.Hc = function (r) {
        V("start_client_gcf") &&
          zg.Pa(function () {
            return B(function (q) {
              return z(q, lw(r), 0);
            });
          });
        k--;
        k || c();
      };
      g.Ec = 0;
      g.Fc = (function (r) {
        return function () {
          r.Ec++;
          if (e.bypassNetworkless && 1 === r.Ec)
            try {
              Ut(
                b,
                l,
                r.batchRequest,
                mw(
                  { writeThenSend: !0 },
                  r.dangerousLogToVisitorSession,
                  r.Hc,
                  r.Fc,
                  f
                )
              ),
                (Iv = !1);
            } catch (q) {
              Zp(q), d();
            }
          k--;
          k || c();
        };
      })(g);
      try {
        Ut(
          b,
          l,
          g.batchRequest,
          mw(e, g.dangerousLogToVisitorSession, g.Hc, g.Fc, f)
        ),
          (Iv = !1);
      } catch (r) {
        Zp(r), d();
      }
    }
  }
  function ew(a, b, c, d, e, f) {
    d = void 0 === d ? {} : d;
    var g = Math.round(Y()),
      h = { value: a.size },
      k = new Map([].concat(x(a)));
    k = w(k);
    for (var l = k.next(); !l.done; l = k.next()) {
      var n = w(l.value).next().value,
        p = a.get(n);
      l = new Np();
      var r = b.config_ || lt(),
        q = new Ep(),
        u = new xp();
      L(u, 1, r.re);
      L(u, 2, r.qe);
      sf(u, 16, r.pg);
      L(u, 17, r.pe);
      if (r.kd) {
        var t = r.kd,
          A = new up();
        t.coldConfigData && L(A, 1, t.coldConfigData);
        t.appInstallData && L(A, 6, t.appInstallData);
        t.coldHashData && L(A, 3, t.coldHashData);
        t.hotHashData && A.g(t.hotHashData);
        lf(u, up, 62, A);
      }
      if ((t = C.devicePixelRatio) && 1 != t) {
        if (null != t && "number" !== typeof t)
          throw Error(
            "Value of float/double field must be a number, found " +
              typeof t +
              ": " +
              t
          );
        ef(u, 65, t);
      }
      t = T("EXPERIMENTS_TOKEN", "");
      "" !== t && L(u, 54, t);
      t = kq();
      if (0 < t.length) {
        A = new Ap();
        for (var I = 0; I < t.length; I++) {
          var X = new yp();
          L(X, 1, t[I].key);
          gf(X, 2, zp, Oe(t[I].value));
          mf(A, 15, yp, X);
        }
        lf(q, Ap, 5, A);
      }
      nt(r, u);
      ot(q);
      pt(u);
      qt(r, u);
      rt(u);
      V("start_client_gcf") && st(u);
      T("DELEGATED_SESSION_ID") &&
        !V("pageid_as_header_web") &&
        ((r = new Dp()), L(r, 3, T("DELEGATED_SESSION_ID")));
      !V("fill_delegate_context_in_gel_killswitch") &&
        (r = T("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) &&
        ((t = kf(q, Dp, 3) || new Dp()), (r = L(t, 18, r)), lf(q, Dp, 3, r));
      r = u;
      t = w(Object.entries(gq(T("DEVICE", ""))));
      for (A = t.next(); !A.done; A = t.next())
        (I = w(A.value)),
          (A = I.next().value),
          (I = I.next().value),
          "cbrand" === A
            ? L(r, 12, I)
            : "cmodel" === A
            ? L(r, 13, I)
            : "cbr" === A
            ? L(r, 87, I)
            : "cbrver" === A
            ? L(r, 88, I)
            : "cos" === A
            ? L(r, 18, I)
            : "cosver" === A
            ? L(r, 19, I)
            : "cplatform" === A && sf(r, 42, Kq(I));
      lf(q, xp, 1, u);
      lf(l, Ep, 1, q);
      if ((u = Mv[n]))
        a: {
          if (pf(u, 1)) q = 1;
          else if (u.getPlaylistId()) q = 2;
          else break a;
          lf(l, Mp, 4, u);
          u = kf(l, Ep, 1) || new Ep();
          r = kf(u, Dp, 3) || new Dp();
          t = new Cp();
          L(t, 2, n);
          sf(t, 1, q);
          mf(r, 12, Cp, t);
          lf(u, Dp, 3, r);
        }
      delete Mv[n];
      n = "visitorOnlyApprovedKey" === n;
      nw() || rf(l, 2, g);
      !n &&
        (q = T("EVENT_ID")) &&
        ((u = ow()), (r = new Lp()), L(r, 1, q), rf(r, 2, u), lf(l, Lp, 5, r));
      kw(d);
      if (V("jspb_serialize_with_worker") && (q = At()) && d.writeThenSend) {
        Kv.set(Jv, {
          client: b,
          resolve: c,
          networklessOptions: d,
          isIsolated: e,
          useVSSEndpoint: f,
          dangerousLogToVisitorSession: n,
          requestsOutstanding: h,
        });
        q.postMessage({
          op: "gelBatchToSerialize",
          batchRequest: l.toJSON(),
          clientEvents: p,
          key: Jv,
        });
        Jv++;
        break;
      }
      if (p) {
        q = [];
        for (u = 0; u < p.length; u++)
          try {
            q.push(new Jp(p[u]));
          } catch (va) {
            Zp(new Qq("Transport failed to deserialize " + String(p[u])));
          }
        p = q;
      } else p = [];
      p = w(p);
      for (q = p.next(); !q.done; q = p.next()) mf(l, 3, Jp, q.value);
      p = { startTime: Y(), ticks: {}, infos: {} };
      a: {
        Ge = !0;
        try {
          var U = JSON.stringify(l.toJSON(), Ue);
          break a;
        } finally {
          Ge = !1;
        }
        U = void 0;
      }
      p.ticks.geljspc = Y();
      V("log_jspb_serialize_latency") &&
        vt("gel_jspb_serialize", p, { sampleRate: 0.1 });
      pw(U, b, c, d, e, f, n, h);
    }
  }
  function pw(a, b, c, d, e, f, g, h) {
    d = void 0 === d ? {} : d;
    h = void 0 === h ? { value: 0 } : h;
    f = hw(f);
    d = mw(
      d,
      g,
      function (k) {
        V("start_client_gcf") &&
          zg.Pa(function () {
            return B(function (l) {
              return z(l, lw(k), 0);
            });
          });
        h.value--;
        h.value || c();
      },
      function () {
        h.value--;
        h.value || c();
      },
      e
    );
    d.headers["Content-Type"] = "application/json+protobuf";
    d.postBodyFormat = "JSPB";
    d.postBody = a;
    Ut(b, f, "", d);
    Iv = !1;
  }
  function kw(a) {
    V("always_send_and_write") && (a.writeThenSend = !1);
  }
  function mw(a, b, c, d, e) {
    a = {
      retry: !0,
      onSuccess: c,
      onError: d,
      networklessOptions: a,
      dangerousLogToVisitorSession: b,
      Xh: !!e,
      headers: {},
      postBodyFormat: "",
      postBody: "",
      compress: V("compress_gel") || V("compress_gel_lr"),
    };
    nw() &&
      (a.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round(Y())));
    return a;
  }
  function jw(a, b, c) {
    nw() || (a.requestTimeMs = String(b));
    V("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
    !c &&
      (b = T("EVENT_ID")) &&
      ((c = ow()),
      (a.serializedClientEventId = {
        serializedEventId: b,
        clientCounter: String(c),
      }));
  }
  function ow() {
    var a = T("BATCH_CLIENT_COUNTER") || 0;
    a || (a = Math.floor((Math.random() * zv) / 2));
    a++;
    a > zv && (a = 1);
    Sp("BATCH_CLIENT_COUNTER", a);
    return a;
  }
  function iw(a, b, c) {
    if (c.videoId) var d = "VIDEO";
    else if (c.playlistId) d = "PLAYLIST";
    else return;
    a.credentialTransferTokenTargetId = c;
    a.context = a.context || {};
    a.context.user = a.context.user || {};
    a.context.user.credentialTransferTokens = [{ token: b, scope: d }];
  }
  function Qv(a, b) {
    if (D("yt.logging.transport.enableScrapingForTest")) {
      var c = D("yt.logging.transport.scrapedPayloadsForTesting"),
        d = D("yt.logging.transport.payloadToScrape");
      b &&
        (b = D(
          "yt.logging.transport.getScrapedPayloadFromClientEventsFunction"
        ).bind(b.payload)()) &&
        c.push(b);
      if (d && 1 <= d.length)
        for (b = 0; b < d.length; b++)
          if (a && a.payload[d[b]]) {
            var e = void 0;
            c.push((null == (e = a) ? void 0 : e.payload)[d[b]]);
          }
      G("yt.logging.transport.scrapedPayloadsForTesting", c);
    }
  }
  function nw() {
    return (
      V("use_request_time_ms_header") || V("lr_use_request_time_ms_header")
    );
  }
  function bw(a, b) {
    return V("transport_use_scheduler")
      ? V("logging_avoid_blocking_during_navigation") ||
        V("lr_logging_avoid_blocking_during_navigation")
        ? Uq(function () {
            if ("none" === sv().m) a();
            else {
              var c = {};
              sv().install(((c.none = { Vc: a }), c));
            }
          }, b)
        : Uq(a, b)
      : sq(a, b);
  }
  function fw(a) {
    V("transport_use_scheduler") ? zg.Ea(a) : window.clearTimeout(a);
  }
  function lw(a) {
    var b, c, d, e, f, g, h, k, l, n;
    return B(function (p) {
      if (1 == p.g) {
        d =
          null == (b = a)
            ? void 0
            : null == (c = b.responseContext)
            ? void 0
            : c.globalConfigGroup;
        var r = d ? d[tp.name] : void 0;
        e = r;
        g = null == (f = d) ? void 0 : f.hotHashData;
        r = d ? d[sp.name] : void 0;
        h = r;
        l = null == (k = d) ? void 0 : k.coldHashData;
        return (n = $u().resolve(new Vu()))
          ? g
            ? e
              ? z(p, ht(n, g, e), 2)
              : z(p, ht(n, g), 2)
            : p.V(2)
          : p.return();
      }
      return l ? (h ? z(p, jt(n, l, h), 0) : z(p, jt(n, l), 0)) : p.V(0);
    });
  }
  function aw(a, b) {
    b = void 0 === b ? 200 : b;
    return a ? (300 === b ? Gv : Ev) : 300 === b ? Fv : Dv;
  }
  function Tv(a) {
    if (V("enable_web_tiered_gel")) {
      a = pu[a || ""];
      var b, c;
      if (null == $u().resolve(new Vu())) var d = void 0;
      else {
        var e = null != (d = D("yt.gcf.config.hotConfigGroup")) ? d : null;
        d =
          null == e
            ? void 0
            : null == (b = e.loggingHotConfig)
            ? void 0
            : null == (c = b.eventLoggingConfig)
            ? void 0
            : c.payloadPolicies;
      }
      if ((b = d))
        for (c = 0; c < b.length; c++)
          if (b[c].payloadNumber === a) return b[c];
    }
  }
  function Sv(a) {
    a = Object.keys(a);
    a = w(a);
    for (var b = a.next(); !b.done; b = a.next())
      if (((b = b.value), pu[b])) return b;
  }
  function Uv(a) {
    switch (a) {
      case "DELAYED_EVENT_TIER_UNSPECIFIED":
        return 0;
      case "DELAYED_EVENT_TIER_DEFAULT":
        return 100;
      case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":
        return 200;
      case "DELAYED_EVENT_TIER_FAST":
        return 300;
      case "DELAYED_EVENT_TIER_IMMEDIATE":
        return 400;
      default:
        return 200;
    }
  }
  function Xv(a) {
    return "gelDebuggingEvent" === a;
  }
  function hw(a) {
    return (void 0 === a ? 0 : a) && V("vss_through_gel_video_stats")
      ? "video_stats"
      : "log_event";
  }
  var qw = C.ytLoggingGelSequenceIdObj_ || {};
  G("ytLoggingGelSequenceIdObj_", qw);
  function rw(a) {
    qw[a] = a in qw ? qw[a] + 1 : 0;
    return qw[a];
  }
  var sw = [];
  var tw = C.ytLoggingGelSequenceIdObj_ || {};
  G("ytLoggingGelSequenceIdObj_", tw);
  var uw = C.ytLoggingDocDocumentNonce_;
  if (!uw) {
    var vw;
    a: {
      if (window.crypto && window.crypto.getRandomValues)
        try {
          var ww = Array(16),
            xw = new Uint8Array(16);
          window.crypto.getRandomValues(xw);
          for (var yw = 0; yw < ww.length; yw++) ww[yw] = xw[yw];
          vw = ww;
          break a;
        } catch (a) {}
      for (var zw = Array(16), Aw = 0; 16 > Aw; Aw++) {
        for (var Bw = Date.now(), Cw = 0; Cw < Bw % 23; Cw++)
          zw[Aw] = Math.random();
        zw[Aw] = Math.floor(256 * Math.random());
      }
      if (nq)
        for (var Dw = 1, Ew = 0; Ew < nq.length; Ew++)
          (zw[Dw % 16] =
            zw[Dw % 16] ^ (zw[(Dw - 1) % 16] / 4) ^ nq.charCodeAt(Ew)),
            Dw++;
      vw = zw;
    }
    for (var Fw = vw, Gw = [], Hw = 0; Hw < Fw.length; Hw++)
      Gw.push(
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
          Fw[Hw] & 63
        )
      );
    uw = Gw.join("");
    G("ytLoggingDocDocumentNonce_", uw);
  }
  var Iw = uw;
  function Jw(a) {
    return T("client-screen-nonce-store", {})[void 0 === a ? 0 : a];
  }
  function Kw(a, b) {
    b = void 0 === b ? 0 : b;
    var c = T("client-screen-nonce-store");
    c || ((c = {}), Sp("client-screen-nonce-store", c));
    c[b] = a;
  }
  function Lw(a) {
    a = void 0 === a ? 0 : a;
    return 0 === a ? "ROOT_VE_TYPE" : "ROOT_VE_TYPE." + a;
  }
  G("yt_logging_screen.getRootVeType", function (a) {
    return T(Lw(void 0 === a ? 0 : a));
  });
  function Mw() {
    var a = T("csn-to-ctt-auth-info");
    a || ((a = {}), Sp("csn-to-ctt-auth-info", a));
    return a;
  }
  function Nw(a) {
    a = Jw(void 0 === a ? 0 : a);
    if (!a && !T("USE_CSN_FALLBACK", !0)) return null;
    a || (a = "UNDEFINED_CSN");
    return a ? a : null;
  }
  G("yt_logging_screen.getCurrentCsn", Nw);
  function Ow(a, b, c) {
    var d = Mw();
    (c = Nw(c)) && delete d[c];
    b && (d[a] = b);
  }
  G("yt_logging_screen.getCttAuthInfo", function (a) {
    return Mw()[a];
  });
  G("yt_logging_screen.setCurrentScreen", function (a, b, c, d) {
    c = void 0 === c ? 0 : c;
    if (a !== Jw(c) || b !== T(Lw(c)))
      if (
        (Ow(a, d, c),
        Kw(a, c),
        Sp(Lw(c), b),
        (b = function () {
          setTimeout(function () {
            if (a)
              if (V("web_time_via_jspb")) {
                var e = new Gp();
                L(e, 1, Iw);
                L(e, 2, a);
                var f = V("jspb_sparse_encoded_pivot")
                  ? new Jp([{}])
                  : new Jp();
                null != e ? Qe(e, Gp) : (e = void 0);
                gf(f, 111, Kp, e);
                var g = void 0;
                g = void 0 === g ? {} : g;
                e = !1;
                T("ytLoggingEventsDefaultDisabled", !1) && (e = !0);
                e = e ? null : Nu;
                g = void 0 === g ? {} : g;
                var h = Math.round(g.timestamp || Y());
                rf(f, 1, h < Number.MAX_SAFE_INTEGER ? h : 0);
                h = new Ip();
                if (g.lact) rf(h, 1, isFinite(g.lact) ? g.lact : -1);
                else if (g.timestamp) rf(h, 1, -1);
                else {
                  var k = Pu();
                  rf(h, 1, isFinite(k) ? k : -1);
                }
                if (g.sequenceGroup && !V("web_gel_sequence_info_killswitch")) {
                  k = g.sequenceGroup;
                  var l = rw(k),
                    n = new Hp();
                  rf(n, 2, l);
                  L(n, 1, k);
                  lf(h, Hp, 3, n);
                  g.endOfSequence && delete tw[g.sequenceGroup];
                }
                lf(f, Ip, 33, h);
                (g.sendIsolatedPayload ? Zv : Yv)(
                  "foregroundHeartbeatScreenAssociated",
                  {
                    endpoint: "log_event",
                    payload: f,
                    cttAuthInfo: g.cttAuthInfo,
                    dangerousLogToVisitorSession:
                      g.dangerousLogToVisitorSession,
                  },
                  e
                );
              } else
                (h = { clientDocumentNonce: Iw, clientScreenNonce: a }),
                  (e = void 0 === e ? {} : e),
                  (f = Nu),
                  T("ytLoggingEventsDefaultDisabled", !1) &&
                    Nu === Nu &&
                    (f = null),
                  V("web_all_payloads_via_jspb")
                    ? (e.timestamp || ((e.lact = Pu()), (e.timestamp = Y())),
                      sw.push({
                        yi: "foregroundHeartbeatScreenAssociated",
                        payload: h,
                        options: e,
                      }))
                    : ((e = void 0 === e ? {} : e),
                      (g = {}),
                      (k = Math.round(e.timestamp || Y())),
                      (g.eventTimeMs = k < Number.MAX_SAFE_INTEGER ? k : 0),
                      (g.foregroundHeartbeatScreenAssociated = h),
                      (h = Pu()),
                      (g.context = {
                        lastActivityMs: String(
                          e.timestamp || !isFinite(h) ? -1 : h
                        ),
                      }),
                      e.sequenceGroup &&
                        !V("web_gel_sequence_info_killswitch") &&
                        ((h = g.context),
                        (k = e.sequenceGroup),
                        (k = { index: rw(k), groupKey: k }),
                        (h.sequence = k),
                        e.endOfSequence && delete qw[e.sequenceGroup]),
                      (e.sendIsolatedPayload ? Vv : Pv)(
                        {
                          endpoint: "log_event",
                          payload: g,
                          cttAuthInfo: e.cttAuthInfo,
                          dangerousLogToVisitorSession:
                            e.dangerousLogToVisitorSession,
                        },
                        f
                      ));
          }, 0);
        }),
        "requestAnimationFrame" in window)
      )
        try {
          window.requestAnimationFrame(b);
        } catch (e) {
          b();
        }
      else b();
  });
  var Pw =
    "absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(
      " "
    );
  function Qw(a, b) {
    var c = void 0 === c ? !0 : c;
    var d = T("VALID_SESSION_TEMPDATA_DOMAINS", []),
      e = vc(window.location.href);
    e && d.push(e);
    e = vc(a);
    if (0 <= Sa(d, e) || (!e && 0 == a.lastIndexOf("/", 0)))
      if (((d = document.createElement("a")), Af(d, a), (a = d.href)))
        if (((a = wc(a)), (a = xc(a))))
          if (
            (c &&
              !b.csn &&
              (b.itct || b.ved) &&
              (b = Object.assign({ csn: Nw() }, b)),
            f)
          ) {
            var f = parseInt(f, 10);
            isFinite(f) && 0 < f && Rw(a, b, f);
          } else Rw(a, b);
  }
  function Rw(a, b, c) {
    a = Sw(a);
    b = b ? zc(b) : "";
    c = c || 5;
    (qg() ||
      ((ke || le) &&
        mq("applewebkit") &&
        !mq("version") &&
        (!mq("safari") || mq("gsa/"))) ||
      (Rc && mq("version/")) ||
      !T("EOM_VISITOR_DATA")) &&
      Vp(a, b, c);
  }
  function Sw(a) {
    var b = a;
    a = w(Pw);
    for (var c = a.next(); !c.done; c = a.next()) {
      for (
        var d = c.value, e = b.search(Cc), f = 0, g = [];
        0 <= (c = Bc(b, f, d, e));

      )
        g.push(b.substring(f, c)),
          (f = Math.min(b.indexOf("&", c) + 1 || e, e));
      g.push(b.slice(f));
      b = g.join("").replace(Dc, "$1");
    }
    for (c = a = 0; c < b.length; ++c) a = (31 * a + b.charCodeAt(c)) >>> 0;
    return "ST-" + a.toString(36);
  }
  new Q();
  function Tw() {
    var a = !1;
    try {
      a = !!window.sessionStorage.getItem("session_logininfo");
    } catch (b) {
      a = !0;
    }
    return (
      V("copy_login_info_to_st_cookie") &&
      ("WEB" === T("INNERTUBE_CLIENT_NAME") ||
        "WEB_CREATOR" === T("INNERTUBE_CLIENT_NAME")) &&
      a
    );
  }
  function Uw(a, b, c, d, e) {
    if (a && e) {
      var f = T("SBOX_SETTINGS"),
        g = T("SBOX_LABELS");
      f &&
        g &&
        (a = D("searchbox.yt.install")(a, b, c, f, g, Vw, d)) &&
        e(a, 100);
    }
  }
  function Ww(a, b) {
    var c = T("EVENT_ID");
    c &&
      ((b.ei = c),
      (c = (c = document.getElementById("masthead-search"))
        ? c.dataset
          ? c.dataset[Up()]
          : c.getAttribute("data-clicktracking")
        : null),
      (b.ved = c || ""),
      Qw(a, b));
  }
  function Vw(a, b) {
    Ww(a, b ? { feature: b } : {});
    b = D("yt.window.navigate");
    try {
      b(a);
    } catch (h) {
      var c = void 0 === c ? {} : c;
      var d = void 0 === d ? "" : d;
      var e = void 0 === e ? window : e;
      a = Ac(a, c);
      if (T("LOGGED_IN", !0) && Tw()) {
        c = T("VALID_SESSION_TEMPDATA_DOMAINS", []);
        (b = vc(window.location.href)) && c.push(b);
        b = vc(a);
        0 <= Sa(c, b) || (!b && 0 == a.lastIndexOf("/", 0))
          ? ((c = wc(a)),
            (c = xc(c))
              ? ((c = Sw(c)),
                (c = (c = og.get("" + c, void 0) || null) ? gq(c) : {}))
              : (c = null))
          : (c = null);
        null == c && (c = {});
        b = c;
        var f = void 0;
        Tw()
          ? (f || (f = T("LOGIN_INFO")),
            f ? ((b.session_logininfo = f), (b = !0)) : (b = !1))
          : (b = !1);
        b && Qw(a, c);
      }
      d = a + d;
      var g = void 0 === g ? Gf : g;
      a: {
        g = void 0 === g ? Gf : g;
        for (a = 0; a < g.length; ++a)
          if (((c = g[a]), c instanceof Ef && c.zg(d))) {
            g = new zb(d, Eb);
            break a;
          }
        g = void 0;
      }
      e = e.location;
      g = zf(g || Fb);
      void 0 !== g && (e.href = g);
    }
  }
  function Xw(a) {
    for (
      var b = document.getElementById("masthead-search"),
        c = [],
        d = b.elements,
        e,
        f = 0;
      (e = d.item(f));
      f++
    )
      if (e.form == b && !e.disabled && "FIELDSET" != e.tagName) {
        var g = e.name;
        switch (e.type.toLowerCase()) {
          case "file":
          case "submit":
          case "reset":
          case "button":
            break;
          case "select-multiple":
            e = In(e);
            if (null != e) for (var h, k = 0; (h = e[k]); k++) Hn(c, g, h);
            break;
          default:
            (h = In(e)), null != h && Hn(c, g, h);
        }
      }
    d = b.getElementsByTagName("INPUT");
    for (f = 0; (e = d[f]); f++)
      e.form == b &&
        "image" == e.type.toLowerCase() &&
        ((g = e.name),
        Hn(c, g, e.value),
        Hn(c, g + ".x", "0"),
        Hn(c, g + ".y", "0"));
    c = c.join("&").replace(/%20/g, "+");
    b = b.action + "?" + c;
    Ww(b, a);
    a = !!T("SPF_SEARCH_BOX");
    if (!D("ytspf.enabled") || !a) return !0;
    a = D("yt.window.navigate");
    try {
      a(b);
    } catch (l) {
      return !0;
    }
    return !1;
  }
  G("searchbox.yt.install", function (a, b, c, d, e, f, g) {
    bj || (bj = new qn());
    bj.install(a, b, c, d, e, f, g);
  });
  G("yt.www.masthead.searchbox.init", function () {
    var a = document.getElementById("masthead-search"),
      b = a.search_query,
      c = document.getElementById("search-btn");
    Uw(a, b, c, Xw, window.setTimeout);
  });
  G("yt.www.masthead.searchbox.initPolymer", function (a, b, c, d) {
    Uw(a, b, c, d, zg.Pa);
  });
}.call(this));
