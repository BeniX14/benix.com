(function (g) {
  var window = this;
  ("use strict");
  var a8 = function (a) {
      g.mo(
        a,
        "zx",
        Math.floor(2147483648 * Math.random()).toString(36) +
          Math.abs(Math.floor(2147483648 * Math.random()) ^ g.eb()).toString(36)
      );
      return a;
    },
    b8 = function (a, b, c) {
      Array.isArray(c) || (c = [String(c)]);
      g.wga(a.B, b, c);
    },
    Cvb = function (a) {
      if (a instanceof g.us) return a;
      if ("function" == typeof a.Dk) return a.Dk(!1);
      if (g.Wa(a)) {
        var b = 0,
          c = new g.us();
        c.next = function () {
          for (;;) {
            if (b >= a.length) return g.F2;
            if (b in a) return g.vs(a[b++]);
            b++;
          }
        };
        return c;
      }
      throw Error("Not implemented");
    },
    Dvb = function (a, b, c) {
      if (g.Wa(a)) g.Yb(a, b, c);
      else
        for (a = Cvb(a); ; ) {
          var d = a.next();
          if (d.done) break;
          b.call(c, d.value, void 0, a);
        }
    },
    Evb = function (a, b) {
      var c = [];
      Dvb(
        b,
        function (d) {
          try {
            var e = g.Ru.prototype.B.call(this, d, !0);
          } catch (f) {
            if ("Storage: Invalid value was encountered" == f) return;
            throw f;
          }
          void 0 === e ? c.push(d) : g.kla(e) && c.push(d);
        },
        a
      );
      return c;
    },
    Fvb = function (a, b) {
      Evb(a, b).forEach(function (c) {
        g.Ru.prototype.remove.call(this, c);
      }, a);
    },
    Gvb = function (a) {
      if (a.qa) {
        if (a.qa.locationOverrideToken)
          return { locationOverrideToken: a.qa.locationOverrideToken };
        if (null != a.qa.latitudeE7 && null != a.qa.longitudeE7)
          return { latitudeE7: a.qa.latitudeE7, longitudeE7: a.qa.longitudeE7 };
      }
      return null;
    },
    Hvb = function (a, b) {
      g.Db(a, b) || a.push(b);
    },
    Ivb = function (a) {
      var b = 0,
        c;
      for (c in a) b++;
      return b;
    },
    Jvb = function (a, b) {
      return g.gd(a, b);
    },
    Kvb = function (a) {
      try {
        return g.Qa.JSON.parse(a);
      } catch (b) {}
      a = String(a);
      if (
        /^\s*$/.test(a)
          ? 0
          : /^[\],:{}\s\u2028\u2029]*$/.test(
              a
                .replace(/\\["\\\/bfnrtu]/g, "@")
                .replace(
                  /(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,
                  "]"
                )
                .replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")
            )
      )
        try {
          return eval("(" + a + ")");
        } catch (b) {}
      throw Error("Invalid JSON string: " + a);
    },
    c8 = function (a) {
      if (g.Qa.JSON)
        try {
          return g.Qa.JSON.parse(a);
        } catch (b) {}
      return Kvb(a);
    },
    Lvb = function (a, b, c, d) {
      var e = new g.eo(null);
      a && g.fo(e, a);
      b && g.go(e, b);
      c && g.ho(e, c);
      d && (e.C = d);
      return e;
    },
    Mvb = function () {
      this.j = d8();
      this.j.Xl("/client_streamz/youtube/living_room/mdx/channel/opened", {
        Zf: 3,
        Yf: "channel_type",
      });
    },
    Nvb = function (a, b) {
      a.j.Km("/client_streamz/youtube/living_room/mdx/channel/opened", b);
    },
    Ovb = function () {
      this.j = d8();
      this.j.Xl("/client_streamz/youtube/living_room/mdx/channel/closed", {
        Zf: 3,
        Yf: "channel_type",
      });
    },
    Pvb = function (a, b) {
      a.j.Km("/client_streamz/youtube/living_room/mdx/channel/closed", b);
    },
    Qvb = function () {
      this.j = d8();
      this.j.Xl(
        "/client_streamz/youtube/living_room/mdx/channel/message_received",
        { Zf: 3, Yf: "channel_type" }
      );
    },
    Rvb = function (a, b) {
      a.j.Km(
        "/client_streamz/youtube/living_room/mdx/channel/message_received",
        b
      );
    },
    Svb = function () {
      this.j = d8();
      this.j.Xl("/client_streamz/youtube/living_room/mdx/channel/error", {
        Zf: 3,
        Yf: "channel_type",
      });
    },
    Tvb = function (a, b) {
      a.j.Km("/client_streamz/youtube/living_room/mdx/channel/error", b);
    },
    Uvb = function () {
      this.j = d8();
      this.j.Xl(
        "/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps"
      );
    },
    Vvb = function () {
      this.j = d8();
      this.j.Xl(
        "/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps"
      );
    },
    e8 = function (a) {
      this.name = this.id = "";
      this.clientName = "UNKNOWN_INTERFACE";
      this.app = "";
      this.type = "REMOTE_CONTROL";
      this.obfuscatedGaiaId = this.avatar = this.username = "";
      this.capabilities = new Set();
      this.compatibleSenderThemes = new Set();
      this.experiments = new Set();
      this.theme = "u";
      new g.xu();
      this.model = this.brand = "";
      this.year = 0;
      this.chipset = this.osVersion = this.os = "";
      this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
      a &&
        ((this.id = a.id || a.name),
        (this.name = a.name),
        (this.clientName = a.clientName
          ? a.clientName.toUpperCase()
          : "UNKNOWN_INTERFACE"),
        (this.app = a.app),
        (this.type = a.type || "REMOTE_CONTROL"),
        (this.username = a.user || ""),
        (this.avatar = a.userAvatarUri || ""),
        (this.obfuscatedGaiaId = a.obfuscatedGaiaId || ""),
        (this.theme = a.theme || "u"),
        Wvb(this, a.capabilities || ""),
        Xvb(this, a.compatibleSenderThemes || ""),
        Yvb(this, a.experiments || ""),
        (this.brand = a.brand || ""),
        (this.model = a.model || ""),
        (this.year = a.year || 0),
        (this.os = a.os || ""),
        (this.osVersion = a.osVersion || ""),
        (this.chipset = a.chipset || ""),
        (this.mdxDialServerType =
          a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN"),
        (a = a.deviceInfo)) &&
        ((a = JSON.parse(a)),
        (this.brand = a.brand || ""),
        (this.model = a.model || ""),
        (this.year = a.year || 0),
        (this.os = a.os || ""),
        (this.osVersion = a.osVersion || ""),
        (this.chipset = a.chipset || ""),
        (this.clientName = a.clientName
          ? a.clientName.toUpperCase()
          : "UNKNOWN_INTERFACE"),
        (this.mdxDialServerType =
          a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN"));
    },
    Wvb = function (a, b) {
      a.capabilities.clear();
      g.zs(b.split(","), g.db(Jvb, Zvb)).forEach(function (c) {
        a.capabilities.add(c);
      });
    },
    Xvb = function (a, b) {
      a.compatibleSenderThemes.clear();
      g.zs(b.split(","), g.db(Jvb, $vb)).forEach(function (c) {
        a.compatibleSenderThemes.add(c);
      });
    },
    Yvb = function (a, b) {
      a.experiments.clear();
      b.split(",").forEach(function (c) {
        a.experiments.add(c);
      });
    },
    f8 = function (a) {
      a = a || {};
      this.name = a.name || "";
      this.id = a.id || a.screenId || "";
      this.token = a.token || a.loungeToken || "";
      this.uuid = a.uuid || a.dialId || "";
      this.idType = a.screenIdType || "normal";
    },
    g8 = function (a, b) {
      return !!b && (a.id == b || a.uuid == b);
    },
    awb = function (a) {
      return {
        name: a.name,
        screenId: a.id,
        loungeToken: a.token,
        dialId: a.uuid,
        screenIdType: a.idType,
      };
    },
    bwb = function (a) {
      return new f8(a);
    },
    cwb = function (a) {
      return Array.isArray(a) ? g.dq(a, bwb) : [];
    },
    h8 = function (a) {
      return a
        ? '{name:"' +
            a.name +
            '",id:' +
            a.id.substr(0, 6) +
            "..,token:" +
            ((a.token ? ".." + a.token.slice(-6) : "-") +
              ",uuid:" +
              (a.uuid ? ".." + a.uuid.slice(-6) : "-") +
              ",idType:" +
              a.idType +
              "}")
        : "null";
    },
    dwb = function (a) {
      return Array.isArray(a) ? "[" + g.dq(a, h8).join(",") + "]" : "null";
    },
    ewb = function () {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (a) {
          var b = (16 * Math.random()) | 0;
          return ("x" == a ? b : (b & 3) | 8).toString(16);
        }
      );
    },
    fwb = function (a) {
      return g.dq(a, function (b) {
        return { key: b.id, name: b.name };
      });
    },
    gwb = function (a, b) {
      return g.Bb(a, function (c) {
        return c || b ? (!c != !b ? !1 : c.id == b.id) : !0;
      });
    },
    i8 = function (a, b) {
      return g.Bb(a, function (c) {
        return g8(c, b);
      });
    },
    hwb = function () {
      var a = (0, g.eD)();
      a && Fvb(a, a.j.Dk(!0));
    },
    j8 = function () {
      var a = g.gD("yt-remote-connected-devices") || [];
      g.Ub(a);
      return a;
    },
    iwb = function (a) {
      if (0 == a.length) return [];
      var b = a[0].indexOf("#"),
        c = -1 == b ? a[0] : a[0].substring(0, b);
      return g.dq(a, function (d, e) {
        return 0 == e ? d : d.substring(c.length);
      });
    },
    jwb = function (a) {
      g.fD("yt-remote-connected-devices", a, 86400);
    },
    k8 = function () {
      if (kwb) return kwb;
      var a = g.gD("yt-remote-device-id");
      a || ((a = ewb()), g.fD("yt-remote-device-id", a, 31536e3));
      for (var b = j8(), c = 1, d = a; g.Db(b, d); ) c++, (d = a + "#" + c);
      return (kwb = d);
    },
    lwb = function () {
      var a = j8(),
        b = k8();
      g.iD() && g.Xb(a, b);
      a = iwb(a);
      if (0 == a.length)
        try {
          g.Fna("remote_sid");
        } catch (c) {}
      else
        try {
          g.xC("remote_sid", a.join(","), -1);
        } catch (c) {}
    },
    mwb = function () {
      return g.gD("yt-remote-session-browser-channel");
    },
    nwb = function () {
      return g.gD("yt-remote-local-screens") || [];
    },
    owb = function () {
      g.fD("yt-remote-lounge-token-expiration", !0, 86400);
    },
    pwb = function (a) {
      5 < a.length && (a = a.slice(a.length - 5));
      var b = g.dq(nwb(), function (d) {
          return d.loungeToken;
        }),
        c = g.dq(a, function (d) {
          return d.loungeToken;
        });
      g.eq(c, function (d) {
        return !g.Db(b, d);
      }) && owb();
      g.fD("yt-remote-local-screens", a, 31536e3);
    },
    l8 = function (a) {
      a ||
        (g.hD("yt-remote-session-screen-id"),
        g.hD("yt-remote-session-video-id"));
      lwb();
      a = j8();
      g.Fb(a, k8());
      jwb(a);
    },
    qwb = function () {
      if (!m8) {
        var a = g.$u();
        a && (m8 = new g.Ou(a));
      }
    },
    rwb = function () {
      qwb();
      return m8 ? !!m8.get("yt-remote-use-staging-server") : !1;
    },
    n8 = function (a, b) {
      g.TE[a] = !0;
      var c = g.RE();
      c && c.publish.apply(c, arguments);
      g.TE[a] = !1;
    },
    swb = function () {},
    d8 = function () {
      if (!o8) {
        o8 = new g.ng(new swb());
        var a = g.TB("client_streamz_web_flush_count", -1);
        -1 !== a && (o8.D = a);
      }
      return o8;
    },
    twb = function () {
      var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
      return a ? parseInt(a[1], 10) : 0;
    },
    uwb = function (a) {
      return (
        !!document.currentScript &&
        (-1 != document.currentScript.src.indexOf("?" + a) ||
          -1 != document.currentScript.src.indexOf("&" + a))
      );
    },
    vwb = function () {
      return "function" == typeof window.__onGCastApiAvailable
        ? window.__onGCastApiAvailable
        : null;
    },
    p8 = function (a) {
      a.length
        ? wwb(a.shift(), function () {
            p8(a);
          })
        : xwb();
    },
    ywb = function (a) {
      return "chrome-extension://" + a + "/cast_sender.js";
    },
    wwb = function (a, b, c) {
      var d = document.createElement("script");
      d.onerror = b;
      c && (d.onload = c);
      g.Fn(d, g.Nv(a));
      (document.head || document.documentElement).appendChild(d);
    },
    zwb = function () {
      var a = twb(),
        b = [];
      if (1 < a) {
        var c = a - 1;
        b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
        b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js");
      }
      return b;
    },
    xwb = function () {
      var a = vwb();
      a && a(!1, "No cast extension found");
    },
    Bwb = function () {
      if (Awb) {
        var a = 2,
          b = vwb(),
          c = function () {
            a--;
            0 == a && b && b(!0);
          };
        window.__onGCastApiAvailable = c;
        wwb(
          "//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",
          xwb,
          c
        );
      }
    },
    Cwb = function () {
      Bwb();
      var a = zwb();
      a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      p8(a);
    },
    Ewb = function () {
      Bwb();
      var a = zwb();
      a.push.apply(a, g.pa(Dwb.map(ywb)));
      a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      p8(a);
    },
    q8 = function (a, b, c) {
      g.J.call(this);
      this.K = null != c ? (0, g.cb)(a, c) : a;
      this.Ui = b;
      this.G = (0, g.cb)(this.q1, this);
      this.j = !1;
      this.B = 0;
      this.C = this.qd = null;
      this.D = [];
    },
    r8 = function (a, b, c) {
      g.J.call(this);
      this.D = null != c ? a.bind(c) : a;
      this.Ui = b;
      this.C = null;
      this.j = !1;
      this.B = 0;
      this.qd = null;
    },
    Fwb = function (a) {
      a.qd = g.lg(function () {
        a.qd = null;
        a.j && !a.B && ((a.j = !1), Fwb(a));
      }, a.Ui);
      var b = a.C;
      a.C = null;
      a.D.apply(null, b);
    },
    s8 = function () {},
    Gwb = function () {
      g.xb.call(this, "p");
    },
    Hwb = function () {
      g.xb.call(this, "o");
    },
    Jwb = function () {
      return (Iwb = Iwb || new g.Gd());
    },
    Kwb = function (a) {
      g.xb.call(this, "serverreachability", a);
    },
    t8 = function (a) {
      var b = Jwb();
      b.dispatchEvent(new Kwb(b, a));
    },
    Lwb = function (a) {
      g.xb.call(this, "statevent", a);
    },
    u8 = function (a) {
      var b = Jwb();
      b.dispatchEvent(new Lwb(b, a));
    },
    Mwb = function (a, b, c, d) {
      g.xb.call(this, "timingevent", a);
      this.size = b;
      this.VA = d;
    },
    v8 = function (a, b) {
      if ("function" !== typeof a)
        throw Error("Fn must not be null and must be a function");
      return g.Qa.setTimeout(function () {
        a();
      }, b);
    },
    Nwb = function () {},
    w8 = function (a, b, c, d) {
      this.G = a;
      this.D = b;
      this.Zc = c;
      this.yc = d || 1;
      this.kb = new g.ro(this);
      this.Ab = 45e3;
      a = g.yS ? 125 : void 0;
      this.rb = new g.kg(a);
      this.Pa = null;
      this.C = !1;
      this.ma = this.fb = this.S = this.Va = this.Ca = this.Qb = this.ea = null;
      this.va = [];
      this.j = null;
      this.qa = 0;
      this.K = this.Ia = null;
      this.Kb = -1;
      this.Na = !1;
      this.xb = 0;
      this.eb = null;
      this.pc = this.Xa = this.jc = this.Fa = !1;
      this.B = new Owb();
    },
    Owb = function () {
      this.C = null;
      this.j = "";
      this.B = !1;
    },
    Qwb = function (a, b, c) {
      a.Va = 1;
      a.S = a8(b.clone());
      a.ma = c;
      a.Fa = !0;
      Pwb(a, null);
    },
    Pwb = function (a, b) {
      a.Ca = Date.now();
      x8(a);
      a.fb = a.S.clone();
      b8(a.fb, "t", a.yc);
      a.qa = 0;
      var c = a.G.Va;
      a.B = new Owb();
      a.j = Rwb(a.G, c ? b : null, !a.ma);
      0 < a.xb && (a.eb = new r8((0, g.cb)(a.AS, a, a.j), a.xb));
      a.kb.Ua(a.j, "readystatechange", a.v1);
      b = a.Pa ? g.pd(a.Pa) : {};
      a.ma
        ? (a.Ia || (a.Ia = "POST"),
          (b["Content-Type"] = "application/x-www-form-urlencoded"),
          a.j.send(a.fb, a.Ia, a.ma, b))
        : ((a.Ia = "GET"), a.j.send(a.fb, a.Ia, null, b));
      t8(1);
    },
    Swb = function (a) {
      return a.j ? "GET" == a.Ia && 2 != a.Va && a.G.Gf : !1;
    },
    Wwb = function (a, b, c) {
      for (var d = !0, e; !a.Na && a.qa < c.length; )
        if (((e = Twb(a, c)), e == y8)) {
          4 == b && ((a.K = 4), u8(14), (d = !1));
          break;
        } else if (e == Uwb) {
          a.K = 4;
          u8(15);
          d = !1;
          break;
        } else Vwb(a, e);
      Swb(a) && e != y8 && e != Uwb && ((a.B.j = ""), (a.qa = 0));
      4 != b || 0 != c.length || a.B.B || ((a.K = 1), u8(16), (d = !1));
      a.C = a.C && d;
      d ? 0 < c.length && !a.pc && ((a.pc = !0), a.G.wP(a)) : (z8(a), A8(a));
    },
    Twb = function (a, b) {
      var c = a.qa,
        d = b.indexOf("\n", c);
      if (-1 == d) return y8;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return Uwb;
      d += 1;
      if (d + c > b.length) return y8;
      b = b.slice(d, d + c);
      a.qa = d + c;
      return b;
    },
    x8 = function (a) {
      a.Qb = Date.now() + a.Ab;
      Xwb(a, a.Ab);
    },
    Xwb = function (a, b) {
      if (null != a.ea) throw Error("WatchDog timer not null");
      a.ea = v8((0, g.cb)(a.s1, a), b);
    },
    B8 = function (a) {
      a.ea && (g.Qa.clearTimeout(a.ea), (a.ea = null));
    },
    A8 = function (a) {
      a.G.jh() || a.Na || Ywb(a.G, a);
    },
    z8 = function (a) {
      B8(a);
      g.sb(a.eb);
      a.eb = null;
      a.rb.stop();
      a.kb.Nf();
      if (a.j) {
        var b = a.j;
        a.j = null;
        b.abort();
        b.dispose();
      }
    },
    Vwb = function (a, b) {
      try {
        var c = a.G;
        if (0 != c.Jh && (c.j == a || Zwb(c.B, a)))
          if (!a.Xa && Zwb(c.B, a) && 3 == c.Jh) {
            try {
              var d = c.Hf.j.parse(b);
            } catch (x) {
              d = null;
            }
            if (Array.isArray(d) && 3 == d.length) {
              var e = d;
              if (0 == e[0])
                a: {
                  if (!c.ma) {
                    if (c.j)
                      if (c.j.Ca + 3e3 < a.Ca) C8(c), D8(c);
                      else break a;
                    $wb(c);
                    u8(18);
                  }
                }
              else
                (c.Nd = e[1]),
                  0 < c.Nd - c.eb &&
                    37500 > e[2] &&
                    c.Xa &&
                    0 == c.va &&
                    !c.qa &&
                    (c.qa = v8((0, g.cb)(c.w1, c), 6e3));
              if (1 >= axb(c.B) && c.rd) {
                try {
                  c.rd();
                } catch (x) {}
                c.rd = void 0;
              }
            } else E8(c, 11);
          } else if (((a.Xa || c.j == a) && C8(c), !g.dc(b)))
            for (e = c.Hf.j.parse(b), b = 0; b < e.length; b++) {
              var f = e[b];
              c.eb = f[0];
              f = f[1];
              if (2 == c.Jh)
                if ("c" == f[0]) {
                  c.D = f[1];
                  c.pc = f[2];
                  var h = f[3];
                  null != h && (c.BS = h);
                  var l = f[5];
                  null != l &&
                    "number" === typeof l &&
                    0 < l &&
                    (c.kb = 1.5 * l);
                  d = c;
                  var m = a.MN();
                  if (m) {
                    var n = g.Jm(m, "X-Client-Wire-Protocol");
                    if (n) {
                      var p = d.B;
                      !p.j &&
                        (g.gc(n, "spdy") || g.gc(n, "quic") || g.gc(n, "h2")) &&
                        ((p.D = p.G),
                        (p.j = new Set()),
                        p.B && (bxb(p, p.B), (p.B = null)));
                    }
                    if (d.Fa) {
                      var q = g.Jm(m, "X-HTTP-Session-Id");
                      q && ((d.Le = q), g.mo(d.Pa, d.Fa, q));
                    }
                  }
                  c.Jh = 3;
                  c.G && c.G.HS();
                  c.Vc && (c.Wd = Date.now() - a.Ca);
                  d = c;
                  var r = a;
                  d.Ld = cxb(d, d.Va ? d.pc : null, d.yc);
                  if (r.Xa) {
                    dxb(d.B, r);
                    var t = r,
                      v = d.kb;
                    v && t.setTimeout(v);
                    t.ea && (B8(t), x8(t));
                    d.j = r;
                  } else exb(d);
                  0 < c.C.length && F8(c);
                } else ("stop" != f[0] && "close" != f[0]) || E8(c, 7);
              else
                3 == c.Jh &&
                  ("stop" == f[0] || "close" == f[0]
                    ? "stop" == f[0]
                      ? E8(c, 7)
                      : c.disconnect()
                    : "noop" != f[0] && c.G && c.G.GS(f),
                  (c.va = 0));
            }
        t8(4);
      } catch (x) {}
    },
    fxb = function (a, b) {
      this.j = a;
      this.map = b;
      this.context = null;
    },
    gxb = function (a) {
      this.G = a || 10;
      g.Qa.PerformanceNavigationTiming
        ? ((a = g.Qa.performance.getEntriesByType("navigation")),
          (a =
            0 < a.length &&
            ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)))
        : (a = !!(
            g.Qa.chrome &&
            g.Qa.chrome.loadTimes &&
            g.Qa.chrome.loadTimes() &&
            g.Qa.chrome.loadTimes().wasFetchedViaSpdy
          ));
      this.D = a ? this.G : 1;
      this.j = null;
      1 < this.D && (this.j = new Set());
      this.B = null;
      this.C = [];
    },
    hxb = function (a) {
      return a.B ? !0 : a.j ? a.j.size >= a.D : !1;
    },
    axb = function (a) {
      return a.B ? 1 : a.j ? a.j.size : 0;
    },
    Zwb = function (a, b) {
      return a.B ? a.B == b : a.j ? a.j.has(b) : !1;
    },
    bxb = function (a, b) {
      a.j ? a.j.add(b) : (a.B = b);
    },
    dxb = function (a, b) {
      a.B && a.B == b ? (a.B = null) : a.j && a.j.has(b) && a.j.delete(b);
    },
    ixb = function (a) {
      if (null != a.B) return a.C.concat(a.B.va);
      if (null != a.j && 0 !== a.j.size) {
        var b = a.C;
        a = g.u(a.j.values());
        for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.va);
        return b;
      }
      return g.Ib(a.C);
    },
    jxb = function (a, b) {
      var c = new Nwb();
      if (g.Qa.Image) {
        var d = new Image();
        d.onload = g.db(G8, c, d, "TestLoadImage: loaded", !0, b);
        d.onerror = g.db(G8, c, d, "TestLoadImage: error", !1, b);
        d.onabort = g.db(G8, c, d, "TestLoadImage: abort", !1, b);
        d.ontimeout = g.db(G8, c, d, "TestLoadImage: timeout", !1, b);
        g.Qa.setTimeout(function () {
          if (d.ontimeout) d.ontimeout();
        }, 1e4);
        d.src = a;
      } else b(!1);
    },
    G8 = function (a, b, c, d, e) {
      try {
        (b.onload = null),
          (b.onerror = null),
          (b.onabort = null),
          (b.ontimeout = null),
          e(d);
      } catch (f) {}
    },
    kxb = function () {
      this.j = new s8();
    },
    lxb = function (a, b, c) {
      var d = c || "";
      try {
        g.co(a, function (e, f) {
          var h = e;
          g.Xa(e) && (h = g.ym(e));
          b.push(d + f + "=" + encodeURIComponent(h));
        });
      } catch (e) {
        throw (b.push(d + "type=" + encodeURIComponent("_badmap")), e);
      }
    },
    H8 = function (a, b, c) {
      return c && c.i6 ? c.i6[a] || b : b;
    },
    mxb = function (a) {
      this.C = [];
      this.pc =
        this.Ld =
        this.Pa =
        this.yc =
        this.j =
        this.Le =
        this.Fa =
        this.Na =
        this.S =
        this.Qb =
        this.ea =
          null;
      this.Uf = this.fb = 0;
      this.Sf = H8("failFast", !1, a);
      this.Xa = this.qa = this.ma = this.K = this.G = null;
      this.Zc = !0;
      this.Nd = this.eb = -1;
      this.jc = this.va = this.Ca = 0;
      this.Rf = H8("baseRetryDelayMs", 5e3, a);
      this.fg = H8("retryDelaySeedMs", 1e4, a);
      this.Tf = H8("forwardChannelMaxRetries", 2, a);
      this.Md = H8("forwardChannelRequestTimeoutMs", 2e4, a);
      this.Ke = (a && a.lhb) || void 0;
      this.Gf = (a && a.ihb) || !1;
      this.kb = void 0;
      this.Va = (a && a.naa) || !1;
      this.D = "";
      this.B = new gxb(a && a.Deb);
      this.Hf = new kxb();
      this.Ab = (a && a.Seb) || !1;
      this.xb = (a && a.Ieb) || !1;
      this.Ab && this.xb && (this.xb = !1);
      this.gg = (a && a.xeb) || !1;
      a && a.Ueb && (this.Zc = !1);
      this.Vc = (!this.Ab && this.Zc && a && a.Geb) || !1;
      this.ud = void 0;
      a && a.BX && 0 < a.BX && (this.ud = a.BX);
      this.rd = void 0;
      this.Wd = 0;
      this.rb = !1;
      this.Kb = this.Ia = null;
    },
    D8 = function (a) {
      a.j && (nxb(a), a.j.cancel(), (a.j = null));
    },
    oxb = function (a) {
      D8(a);
      a.ma && (g.Qa.clearTimeout(a.ma), (a.ma = null));
      C8(a);
      a.B.cancel();
      a.K && ("number" === typeof a.K && g.Qa.clearTimeout(a.K), (a.K = null));
    },
    F8 = function (a) {
      hxb(a.B) || a.K || ((a.K = !0), g.Wf(a.DS, a), (a.Ca = 0));
    },
    qxb = function (a, b) {
      if (axb(a.B) >= a.B.D - (a.K ? 1 : 0)) return !1;
      if (a.K) return (a.C = b.va.concat(a.C)), !0;
      if (1 == a.Jh || 2 == a.Jh || a.Ca >= (a.Sf ? 0 : a.Tf)) return !1;
      a.K = v8((0, g.cb)(a.DS, a, b), pxb(a, a.Ca));
      a.Ca++;
      return !0;
    },
    sxb = function (a, b) {
      var c;
      b ? (c = b.Zc) : (c = a.fb++);
      var d = a.Pa.clone();
      g.mo(d, "SID", a.D);
      g.mo(d, "RID", c);
      g.mo(d, "AID", a.eb);
      I8(a, d);
      a.S && a.ea && g.qo(d, a.S, a.ea);
      c = new w8(a, a.D, c, a.Ca + 1);
      null === a.S && (c.Pa = a.ea);
      b && (a.C = b.va.concat(a.C));
      b = rxb(a, c, 1e3);
      c.setTimeout(
        Math.round(0.5 * a.Md) + Math.round(0.5 * a.Md * Math.random())
      );
      bxb(a.B, c);
      Qwb(c, d, b);
    },
    I8 = function (a, b) {
      a.Na &&
        g.Tc(a.Na, function (c, d) {
          g.mo(b, d, c);
        });
      a.G &&
        g.co({}, function (c, d) {
          g.mo(b, d, c);
        });
    },
    rxb = function (a, b, c) {
      c = Math.min(a.C.length, c);
      var d = a.G ? (0, g.cb)(a.G.z1, a.G, a) : null;
      a: for (var e = a.C, f = -1; ; ) {
        var h = ["count=" + c];
        -1 == f
          ? 0 < c
            ? ((f = e[0].j), h.push("ofs=" + f))
            : (f = 0)
          : h.push("ofs=" + f);
        for (var l = !0, m = 0; m < c; m++) {
          var n = e[m].j,
            p = e[m].map;
          n -= f;
          if (0 > n) (f = Math.max(0, e[m].j - 100)), (l = !1);
          else
            try {
              lxb(p, h, "req" + n + "_");
            } catch (q) {
              d && d(p);
            }
        }
        if (l) {
          d = h.join("&");
          break a;
        }
      }
      a = a.C.splice(0, c);
      b.va = a;
      return d;
    },
    exb = function (a) {
      a.j || a.ma || ((a.jc = 1), g.Wf(a.CS, a), (a.va = 0));
    },
    $wb = function (a) {
      if (a.j || a.ma || 3 <= a.va) return !1;
      a.jc++;
      a.ma = v8((0, g.cb)(a.CS, a), pxb(a, a.va));
      a.va++;
      return !0;
    },
    nxb = function (a) {
      null != a.Ia && (g.Qa.clearTimeout(a.Ia), (a.Ia = null));
    },
    txb = function (a) {
      a.j = new w8(a, a.D, "rpc", a.jc);
      null === a.S && (a.j.Pa = a.ea);
      a.j.xb = 0;
      var b = a.Ld.clone();
      g.mo(b, "RID", "rpc");
      g.mo(b, "SID", a.D);
      g.mo(b, "AID", a.eb);
      g.mo(b, "CI", a.Xa ? "0" : "1");
      !a.Xa && a.ud && g.mo(b, "TO", a.ud);
      g.mo(b, "TYPE", "xmlhttp");
      I8(a, b);
      a.S && a.ea && g.qo(b, a.S, a.ea);
      a.kb && a.j.setTimeout(a.kb);
      var c = a.j;
      a = a.pc;
      c.Va = 1;
      c.S = a8(b.clone());
      c.ma = null;
      c.Fa = !0;
      Pwb(c, a);
    },
    C8 = function (a) {
      null != a.qa && (g.Qa.clearTimeout(a.qa), (a.qa = null));
    },
    Ywb = function (a, b) {
      var c = null;
      if (a.j == b) {
        C8(a);
        nxb(a);
        a.j = null;
        var d = 2;
      } else if (Zwb(a.B, b)) (c = b.va), dxb(a.B, b), (d = 1);
      else return;
      if (0 != a.Jh)
        if (b.C)
          if (1 == d) {
            c = b.ma ? b.ma.length : 0;
            b = Date.now() - b.Ca;
            var e = a.Ca;
            d = Jwb();
            d.dispatchEvent(new Mwb(d, c, b, e));
            F8(a);
          } else exb(a);
        else {
          var f = b.Kb;
          e = b.getLastError();
          if (
            3 == e ||
            (0 == e && 0 < f) ||
            !((1 == d && qxb(a, b)) || (2 == d && $wb(a)))
          )
            switch (
              (c && 0 < c.length && ((b = a.B), (b.C = b.C.concat(c))), e)
            ) {
              case 1:
                E8(a, 5);
                break;
              case 4:
                E8(a, 10);
                break;
              case 3:
                E8(a, 6);
                break;
              default:
                E8(a, 2);
            }
        }
    },
    pxb = function (a, b) {
      var c = a.Rf + Math.floor(Math.random() * a.fg);
      a.isActive() || (c *= 2);
      return c * b;
    },
    E8 = function (a, b) {
      if (2 == b) {
        var c = null;
        a.G && (c = null);
        var d = (0, g.cb)(a.taa, a);
        c ||
          ((c = new g.eo("//www.google.com/images/cleardot.gif")),
          (g.Qa.location && "http" == g.Qa.location.protocol) ||
            g.fo(c, "https"),
          a8(c));
        jxb(c.toString(), d);
      } else u8(2);
      a.Jh = 0;
      a.G && a.G.FS(b);
      uxb(a);
      oxb(a);
    },
    uxb = function (a) {
      a.Jh = 0;
      a.Kb = [];
      if (a.G) {
        var b = ixb(a.B);
        if (0 != b.length || 0 != a.C.length)
          g.Kb(a.Kb, b),
            g.Kb(a.Kb, a.C),
            (a.B.C.length = 0),
            g.Ib(a.C),
            (a.C.length = 0);
        a.G.ES();
      }
    },
    vxb = function (a) {
      if (0 == a.Jh) return a.Kb;
      var b = [];
      g.Kb(b, ixb(a.B));
      g.Kb(b, a.C);
      return b;
    },
    cxb = function (a, b, c) {
      var d = g.no(c);
      "" != d.j
        ? (b && g.go(d, b + "." + d.j), g.ho(d, d.D))
        : ((d = g.Qa.location),
          (d = Lvb(
            d.protocol,
            b ? b + "." + d.hostname : d.hostname,
            +d.port,
            c
          )));
      b = a.Fa;
      c = a.Le;
      b && c && g.mo(d, b, c);
      g.mo(d, "VER", a.BS);
      I8(a, d);
      return d;
    },
    Rwb = function (a, b, c) {
      if (b && !a.Va)
        throw Error("Can't create secondary domain capable XhrIo object.");
      b = c && a.Gf && !a.Ke ? new g.Cm(new g.Zn({ YZ: !0 })) : new g.Cm(a.Ke);
      b.K = a.Va;
      return b;
    },
    wxb = function () {},
    xxb = function () {
      if (g.cf && !g.Nc(10))
        throw Error("Environmental error: no available transport.");
    },
    K8 = function (a, b) {
      g.Gd.call(this);
      this.j = new mxb(b);
      this.G = a;
      this.B = (b && b.T6) || null;
      a = (b && b.S6) || null;
      b &&
        b.Ceb &&
        (a
          ? (a["X-Client-Protocol"] = "webchannel")
          : (a = { "X-Client-Protocol": "webchannel" }));
      this.j.ea = a;
      a = (b && b.Ofb) || null;
      b &&
        b.IX &&
        (a
          ? (a["X-WebChannel-Content-Type"] = b.IX)
          : (a = { "X-WebChannel-Content-Type": b.IX }));
      b &&
        b.dV &&
        (a
          ? (a["X-WebChannel-Client-Profile"] = b.dV)
          : (a = { "X-WebChannel-Client-Profile": b.dV }));
      this.j.Qb = a;
      (a = b && b.Nfb) && !g.dc(a) && (this.j.S = a);
      this.K = (b && b.naa) || !1;
      this.D = (b && b.Igb) || !1;
      (b = b && b.d6) &&
        !g.dc(b) &&
        ((this.j.Fa = b), g.fd(this.B, b) && g.jd(this.B, b));
      this.C = new J8(this);
    },
    yxb = function (a) {
      Gwb.call(this);
      a.__headers__ &&
        ((this.headers = a.__headers__),
        (this.statusCode = a.__status__),
        delete a.__headers__,
        delete a.__status__);
      var b = a.__sm__;
      b
        ? (this.data = (this.j = g.Yc(b)) ? g.nd(b, this.j) : b)
        : (this.data = a);
    },
    zxb = function (a) {
      Hwb.call(this);
      this.status = 1;
      this.errorCode = a;
    },
    J8 = function (a) {
      this.j = a;
    },
    Axb = function (a, b) {
      this.B = a;
      this.j = b;
    },
    Bxb = function (a) {
      return vxb(a.j).map(function (b) {
        b = b.map;
        "__data__" in b && ((b = b.__data__), (b = a.B.D ? Kvb(b) : b));
        return b;
      });
    },
    L8 = function (a, b) {
      if ("function" !== typeof a)
        throw Error("Fn must not be null and must be a function");
      return g.Qa.setTimeout(function () {
        a();
      }, b);
    },
    N8 = function (a) {
      M8.dispatchEvent(new Cxb(M8, a));
    },
    Cxb = function (a) {
      g.xb.call(this, "statevent", a);
    },
    O8 = function (a, b, c, d) {
      this.j = a;
      this.D = b;
      this.S = c;
      this.K = d || 1;
      this.B = 45e3;
      this.C = new g.ro(this);
      this.G = new g.kg();
      this.G.setInterval(250);
    },
    Exb = function (a, b, c) {
      a.Ix = 1;
      a.Wr = a8(b.clone());
      a.Hu = c;
      a.Fa = !0;
      Dxb(a, null);
    },
    Fxb = function (a, b, c, d, e) {
      a.Ix = 1;
      a.Wr = a8(b.clone());
      a.Hu = null;
      a.Fa = c;
      e && (a.CZ = !1);
      Dxb(a, d);
    },
    Dxb = function (a, b) {
      a.Hx = Date.now();
      P8(a);
      a.Yr = a.Wr.clone();
      b8(a.Yr, "t", a.K);
      a.cG = 0;
      a.ej = a.j.aL(a.j.PB() ? b : null);
      0 < a.YK && (a.aG = new r8((0, g.cb)(a.IS, a, a.ej), a.YK));
      a.C.Ua(a.ej, "readystatechange", a.B1);
      b = a.Gu ? g.pd(a.Gu) : {};
      a.Hu
        ? ((a.bG = "POST"),
          (b["Content-Type"] = "application/x-www-form-urlencoded"),
          a.ej.send(a.Yr, a.bG, a.Hu, b))
        : ((a.bG = "GET"),
          a.CZ && !g.Pc && (b.Connection = "close"),
          a.ej.send(a.Yr, a.bG, null, b));
      a.j.Nn(1);
    },
    Ixb = function (a, b) {
      var c = a.cG,
        d = b.indexOf("\n", c);
      if (-1 == d) return Gxb;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return Hxb;
      d += 1;
      if (d + c > b.length) return Gxb;
      b = b.slice(d, d + c);
      a.cG = d + c;
      return b;
    },
    Kxb = function (a, b) {
      a.Hx = Date.now();
      P8(a);
      var c = b ? window.location.hostname : "";
      a.Yr = a.Wr.clone();
      g.mo(a.Yr, "DOMAIN", c);
      g.mo(a.Yr, "t", a.K);
      try {
        a.jo = new ActiveXObject("htmlfile");
      } catch (m) {
        Q8(a);
        a.Xr = 7;
        N8(22);
        R8(a);
        return;
      }
      var d = "<html><body>";
      if (b) {
        var e = "";
        for (b = 0; b < c.length; b++) {
          var f = c.charAt(b);
          if ("<" == f) f = e + "\\x3c";
          else if (">" == f) f = e + "\\x3e";
          else {
            if (f in S8) f = S8[f];
            else if (f in Jxb) f = S8[f] = Jxb[f];
            else {
              var h = f.charCodeAt(0);
              if (31 < h && 127 > h) var l = f;
              else {
                if (256 > h) {
                  if (((l = "\\x"), 16 > h || 256 < h)) l += "0";
                } else (l = "\\u"), 4096 > h && (l += "0");
                l += h.toString(16).toUpperCase();
              }
              f = S8[f] = l;
            }
            f = e + f;
          }
          e = f;
        }
        d += '<script>document.domain="' + e + '"\x3c/script>';
      }
      d += "</body></html>";
      g.Sd("b/12014412");
      c = g.je(d);
      a.jo.open();
      a.jo.write(g.ie(c));
      a.jo.close();
      a.jo.parentWindow.m = (0, g.cb)(a.H9, a);
      a.jo.parentWindow.d = (0, g.cb)(a.HY, a, !0);
      a.jo.parentWindow.rpcClose = (0, g.cb)(a.HY, a, !1);
      c = a.jo.createElement("DIV");
      a.jo.parentWindow.document.body.appendChild(c);
      d = g.$d(a.Yr.toString()) || g.ge;
      d = g.ye(g.Yd(d));
      g.Sd("b/12014412");
      d = g.je('<iframe src="' + d + '"></iframe>');
      g.Rba(c, d);
      a.j.Nn(1);
    },
    P8 = function (a) {
      a.ZK = Date.now() + a.B;
      Lxb(a, a.B);
    },
    Lxb = function (a, b) {
      if (null != a.Jx) throw Error("WatchDog timer not null");
      a.Jx = L8((0, g.cb)(a.A1, a), b);
    },
    Mxb = function (a) {
      a.Jx && (g.Qa.clearTimeout(a.Jx), (a.Jx = null));
    },
    R8 = function (a) {
      a.j.jh() || a.Fu || a.j.dG(a);
    },
    Q8 = function (a) {
      Mxb(a);
      g.sb(a.aG);
      a.aG = null;
      a.G.stop();
      a.C.Nf();
      if (a.ej) {
        var b = a.ej;
        a.ej = null;
        b.abort();
        b.dispose();
      }
      a.jo && (a.jo = null);
    },
    Nxb = function (a, b) {
      try {
        a.j.JS(a, b), a.j.Nn(4);
      } catch (c) {}
    },
    Pxb = function (a, b, c, d, e) {
      if (0 == d) c(!1);
      else {
        var f = e || 0;
        d--;
        Oxb(a, b, function (h) {
          h
            ? c(!0)
            : g.Qa.setTimeout(function () {
                Pxb(a, b, c, d, f);
              }, f);
        });
      }
    },
    Oxb = function (a, b, c) {
      var d = new Image();
      d.onload = function () {
        try {
          T8(d), c(!0);
        } catch (e) {}
      };
      d.onerror = function () {
        try {
          T8(d), c(!1);
        } catch (e) {}
      };
      d.onabort = function () {
        try {
          T8(d), c(!1);
        } catch (e) {}
      };
      d.ontimeout = function () {
        try {
          T8(d), c(!1);
        } catch (e) {}
      };
      g.Qa.setTimeout(function () {
        if (d.ontimeout) d.ontimeout();
      }, b);
      d.src = a;
    },
    T8 = function (a) {
      a.onload = null;
      a.onerror = null;
      a.onabort = null;
      a.ontimeout = null;
    },
    Qxb = function (a) {
      this.j = a;
      this.B = new s8();
    },
    Rxb = function (a) {
      var b = U8(a.j, a.uC, "/mail/images/cleardot.gif");
      a8(b);
      Pxb(b.toString(), 5e3, (0, g.cb)(a.Y3, a), 3, 2e3);
      a.Nn(1);
    },
    Sxb = function (a) {
      var b = a.j.K;
      if (null != b)
        N8(5), b ? (N8(11), V8(a.j, a, !1)) : (N8(12), V8(a.j, a, !0));
      else if (
        ((a.Kj = new O8(a)),
        (a.Kj.Gu = a.bL),
        (b = a.j),
        (b = U8(b, b.PB() ? a.OB : null, a.cL)),
        N8(5),
        !g.cf || g.Nc(10))
      )
        b8(b, "TYPE", "xmlhttp"), Fxb(a.Kj, b, !1, a.OB, !1);
      else {
        b8(b, "TYPE", "html");
        var c = a.Kj;
        a = !!a.OB;
        c.Ix = 3;
        c.Wr = a8(b.clone());
        Kxb(c, a);
      }
    },
    Txb = function (a, b, c) {
      this.j = 1;
      this.B = [];
      this.C = [];
      this.G = new s8();
      this.ea = a || null;
      this.K = null != b ? b : null;
      this.ma = c || !1;
    },
    Uxb = function (a, b) {
      this.j = a;
      this.map = b;
      this.context = null;
    },
    Vxb = function (a, b, c, d) {
      g.xb.call(this, "timingevent", a);
      this.size = b;
      this.VA = d;
    },
    Wxb = function (a) {
      g.xb.call(this, "serverreachability", a);
    },
    Yxb = function (a) {
      a.C1(1, 0);
      a.eG = U8(a, null, a.dL);
      Xxb(a);
    },
    Zxb = function (a) {
      a.Hs && (a.Hs.abort(), (a.Hs = null));
      a.Ug && (a.Ug.cancel(), (a.Ug = null));
      a.hq && (g.Qa.clearTimeout(a.hq), (a.hq = null));
      W8(a);
      a.Tj && (a.Tj.cancel(), (a.Tj = null));
      a.Zr && (g.Qa.clearTimeout(a.Zr), (a.Zr = null));
    },
    $xb = function (a, b) {
      if (0 == a.j)
        throw Error("Invalid operation: sending map when state is closed");
      a.B.push(new Uxb(a.D1++, b));
      (2 != a.j && 3 != a.j) || Xxb(a);
    },
    ayb = function (a) {
      var b = 0;
      a.Ug && b++;
      a.Tj && b++;
      return b;
    },
    Xxb = function (a) {
      a.Tj || a.Zr || ((a.Zr = L8((0, g.cb)(a.NS, a), 0)), (a.Lx = 0));
    },
    dyb = function (a, b) {
      if (1 == a.j) {
        if (!b) {
          a.RB = Math.floor(1e5 * Math.random());
          b = a.RB++;
          var c = new O8(a, "", b);
          c.Gu = a.Bo;
          var d = byb(a),
            e = a.eG.clone();
          g.mo(e, "RID", b);
          g.mo(e, "CVER", "1");
          X8(a, e);
          Exb(c, e, d);
          a.Tj = c;
          a.j = 2;
        }
      } else 3 == a.j && (b ? cyb(a, b) : 0 == a.B.length || a.Tj || cyb(a));
    },
    cyb = function (a, b) {
      if (b)
        if (6 < a.Iu) {
          a.B = a.C.concat(a.B);
          a.C.length = 0;
          var c = a.RB - 1;
          b = byb(a);
        } else (c = b.S), (b = b.Hu);
      else (c = a.RB++), (b = byb(a));
      var d = a.eG.clone();
      g.mo(d, "SID", a.D);
      g.mo(d, "RID", c);
      g.mo(d, "AID", a.Mx);
      X8(a, d);
      c = new O8(a, a.D, c, a.Lx + 1);
      c.Gu = a.Bo;
      c.setTimeout(1e4 + Math.round(1e4 * Math.random()));
      a.Tj = c;
      Exb(c, d, b);
    },
    X8 = function (a, b) {
      a.Mi &&
        (a = a.Mi.RS()) &&
        g.Tc(a, function (c, d) {
          g.mo(b, d, c);
        });
    },
    byb = function (a) {
      var b = Math.min(a.B.length, 1e3),
        c = ["count=" + b];
      if (6 < a.Iu && 0 < b) {
        var d = a.B[0].j;
        c.push("ofs=" + d);
      } else d = 0;
      for (var e = {}, f = 0; f < b; e = { Zz: e.Zz }, f++) {
        e.Zz = a.B[f].j;
        var h = a.B[f].map;
        e.Zz = 6 >= a.Iu ? f : e.Zz - d;
        try {
          g.Tc(
            h,
            (function (l) {
              return function (m, n) {
                c.push("req" + l.Zz + "_" + n + "=" + encodeURIComponent(m));
              };
            })(e)
          );
        } catch (l) {
          c.push("req" + e.Zz + "_type=" + encodeURIComponent("_badmap"));
        }
      }
      a.C = a.C.concat(a.B.splice(0, b));
      return c.join("&");
    },
    eyb = function (a) {
      a.Ug ||
        a.hq ||
        ((a.S = 1), (a.hq = L8((0, g.cb)(a.MS, a), 0)), (a.Kx = 0));
    },
    gyb = function (a) {
      if (a.Ug || a.hq || 3 <= a.Kx) return !1;
      a.S++;
      a.hq = L8((0, g.cb)(a.MS, a), fyb(a, a.Kx));
      a.Kx++;
      return !0;
    },
    V8 = function (a, b, c) {
      a.BK = null == a.K ? c : !a.K;
      a.Co = b.gq;
      a.ma || Yxb(a);
    },
    W8 = function (a) {
      null != a.Ju && (g.Qa.clearTimeout(a.Ju), (a.Ju = null));
    },
    fyb = function (a, b) {
      var c = 5e3 + Math.floor(1e4 * Math.random());
      a.isActive() || (c *= 2);
      return c * b;
    },
    Y8 = function (a, b) {
      if (2 == b || 9 == b) {
        var c = null;
        a.Mi && (c = null);
        var d = (0, g.cb)(a.saa, a);
        c || ((c = new g.eo("//www.google.com/images/cleardot.gif")), a8(c));
        Oxb(c.toString(), 1e4, d);
      } else N8(2);
      hyb(a, b);
    },
    hyb = function (a, b) {
      a.j = 0;
      a.Mi && a.Mi.OS(b);
      iyb(a);
      Zxb(a);
    },
    iyb = function (a) {
      a.j = 0;
      a.Co = -1;
      if (a.Mi)
        if (0 == a.C.length && 0 == a.B.length) a.Mi.eL();
        else {
          var b = g.Ib(a.C),
            c = g.Ib(a.B);
          a.C.length = 0;
          a.B.length = 0;
          a.Mi.eL(b, c);
        }
    },
    U8 = function (a, b, c) {
      var d = g.no(c);
      if ("" != d.j) b && g.go(d, b + "." + d.j), g.ho(d, d.D);
      else {
        var e = window.location;
        d = Lvb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
      }
      a.QB &&
        g.Tc(a.QB, function (f, h) {
          g.mo(d, h, f);
        });
      g.mo(d, "VER", a.Iu);
      X8(a, d);
      return d;
    },
    jyb = function () {},
    kyb = function () {
      this.j = [];
      this.B = [];
    },
    lyb = function (a) {
      g.xb.call(this, "channelMessage");
      this.message = a;
    },
    myb = function (a) {
      g.xb.call(this, "channelError");
      this.error = a;
    },
    nyb = function (a, b) {
      this.action = a;
      this.params = b || {};
    },
    Z8 = function (a, b) {
      g.J.call(this);
      this.j = new g.fu(this.z9, 0, this);
      g.L(this, this.j);
      this.Ui = 5e3;
      this.B = 0;
      if ("function" === typeof a) b && (a = (0, g.cb)(a, b));
      else if (a && "function" === typeof a.handleEvent)
        a = (0, g.cb)(a.handleEvent, a);
      else throw Error("Invalid listener argument");
      this.C = a;
    },
    oyb = function (a, b, c, d, e) {
      c = void 0 === c ? !1 : c;
      d =
        void 0 === d
          ? function () {
              return "";
            }
          : d;
      e = void 0 === e ? !1 : e;
      this.Ca = a;
      this.S = b;
      this.C = new g.Nu();
      this.B = new Z8(this.K$, this);
      this.j = null;
      this.qa = !1;
      this.K = null;
      this.ea = "";
      this.ma = this.G = 0;
      this.D = [];
      this.Va = c;
      this.va = d;
      this.Xa = e;
      this.Pa = new Mvb();
      this.Ia = new Ovb();
      this.Na = new Qvb();
      this.Fa = new Svb();
      this.eb = new Uvb();
      this.fb = new Vvb();
    },
    pyb = function (a) {
      if (a.j) {
        var b = a.va(),
          c = a.j.Bo || {};
        b
          ? (c["x-youtube-lounge-xsrf-token"] = b)
          : delete c["x-youtube-lounge-xsrf-token"];
        a.j.Bo = c;
      }
    },
    $8 = function (a) {
      this.scheme = "https";
      this.port = this.domain = "";
      this.j = "/api/lounge";
      this.B = !0;
      a = a || document.location.href;
      var b = Number(g.zl(4, a)) || "";
      b && (this.port = ":" + b);
      this.domain = g.Al(a) || "";
      a = g.nc();
      0 <= a.search("MSIE") &&
        ((a = a.match(/MSIE ([\d.]+)/)[1]),
        0 > g.lc(a, "10.0") && (this.B = !1));
    },
    a9 = function (a, b) {
      var c = a.j;
      a.B && (c = a.scheme + "://" + a.domain + a.port + a.j);
      return g.Gl(c + b, {});
    },
    qyb = function (a, b, c, d, e) {
      a = {
        format: "JSON",
        method: "POST",
        context: a,
        timeout: 5e3,
        withCredentials: !1,
        onSuccess: g.db(a.D, d, !0),
        onError: g.db(a.C, e),
        onTimeout: g.db(a.G, e),
      };
      c &&
        ((a.postParams = c),
        (a.headers = { "Content-Type": "application/x-www-form-urlencoded" }));
      return g.oC(b, a);
    },
    ryb = function (a, b) {
      g.Gd.call(this);
      var c = this;
      this.Hd = a();
      this.Hd.subscribe("handlerOpened", this.H1, this);
      this.Hd.subscribe("handlerClosed", this.F1, this);
      this.Hd.subscribe("handlerError", function (d, e) {
        c.onError(e);
      });
      this.Hd.subscribe("handlerMessage", this.G1, this);
      this.j = b;
    },
    syb = function (a, b, c) {
      var d = this;
      c =
        void 0 === c
          ? function () {
              return "";
            }
          : c;
      var e = void 0 === e ? new xxb() : e;
      var f = void 0 === f ? new g.Nu() : f;
      this.pathPrefix = a;
      this.j = b;
      this.Ca = c;
      this.G = f;
      this.ma = null;
      this.ea = this.S = 0;
      this.channel = null;
      this.K = 0;
      this.C = new Z8(function () {
        d.C.isActive();
        var h;
        0 === (null == (h = d.channel) ? void 0 : axb(new Axb(h, h.j).j.B)) &&
          d.connect(d.ma, d.S);
      });
      this.D = {};
      this.B = {};
      this.qa = !1;
      this.logger = null;
      this.va = [];
      this.Og = void 0;
      this.Pa = new Mvb();
      this.Ia = new Ovb();
      this.Na = new Qvb();
      this.Fa = new Svb();
    },
    tyb = function (a) {
      g.xd(a.channel, "m", function () {
        a.K = 3;
        a.C.reset();
        a.ma = null;
        a.S = 0;
        for (var b = g.u(a.va), c = b.next(); !c.done; c = b.next())
          (c = c.value), a.channel && a.channel.send(c);
        a.va = [];
        a.ra("webChannelOpened");
        Nvb(a.Pa, "WEB_CHANNEL");
      });
      g.xd(a.channel, "n", function () {
        a.K = 0;
        a.C.isActive() || a.ra("webChannelClosed");
        var b,
          c = null == (b = a.channel) ? void 0 : Bxb(new Axb(b, b.j));
        c && (a.va = [].concat(g.pa(c)));
        Pvb(a.Ia, "WEB_CHANNEL");
      });
      g.xd(a.channel, "p", function (b) {
        var c = b.data;
        "gracefulReconnect" === c[0]
          ? (a.C.start(), a.channel && a.channel.close())
          : a.ra("webChannelMessage", new nyb(c[0], c[1]));
        a.Og = b.statusCode;
        Rvb(a.Na, "WEB_CHANNEL");
      });
      g.xd(a.channel, "o", function () {
        401 === a.Og || a.C.start();
        a.ra("webChannelError");
        Tvb(a.Fa, "WEB_CHANNEL");
      });
    },
    uyb = function (a) {
      var b = a.Ca();
      b
        ? (a.D["x-youtube-lounge-xsrf-token"] = b)
        : delete a.D["x-youtube-lounge-xsrf-token"];
    },
    vyb = function (a) {
      g.Gd.call(this);
      this.j = a();
      this.j.subscribe("webChannelOpened", this.K1, this);
      this.j.subscribe("webChannelClosed", this.I1, this);
      this.j.subscribe("webChannelError", this.onError, this);
      this.j.subscribe("webChannelMessage", this.J1, this);
    },
    wyb = function (a, b, c, d, e) {
      function f() {
        return new oyb(a9(a, "/bc"), b, !1, c, d);
      }
      c =
        void 0 === c
          ? function () {
              return "";
            }
          : c;
      return g.SB("enable_mdx_web_channel_desktop")
        ? new vyb(function () {
            return new syb(a9(a, "/wc"), b, c);
          })
        : new ryb(f, e);
    },
    Ayb = function () {
      var a = xyb;
      yyb();
      b9.push(a);
      zyb();
    },
    c9 = function (a, b) {
      yyb();
      var c = Byb(a, String(b));
      0 == b9.length
        ? Cyb(c)
        : (zyb(),
          g.Yb(b9, function (d) {
            d(c);
          }));
    },
    d9 = function (a) {
      c9("CP", a);
    },
    yyb = function () {
      b9 ||
        ((b9 = g.Ta("yt.mdx.remote.debug.handlers_") || []),
        g.Sa("yt.mdx.remote.debug.handlers_", b9));
    },
    Cyb = function (a) {
      var b = (e9 + 1) % 50;
      e9 = b;
      f9[b] = a;
      g9 || (g9 = 49 == b);
    },
    zyb = function () {
      var a = b9;
      if (f9[0]) {
        var b = g9 ? e9 : -1;
        do {
          b = (b + 1) % 50;
          var c = f9[b];
          g.Yb(a, function (d) {
            d(c);
          });
        } while (b != e9);
        f9 = Array(50);
        e9 = -1;
        g9 = !1;
      }
    },
    Byb = function (a, b) {
      var c = (Date.now() - Dyb) / 1e3;
      c.toFixed && (c = c.toFixed(3));
      var d = [];
      d.push("[", c + "s", "] ");
      d.push("[", "yt.mdx.remote", "] ");
      d.push(a + ": " + b, "\n");
      return d.join("");
    },
    h9 = function (a) {
      g.nG.call(this);
      this.K = a;
      this.screens = [];
    },
    Eyb = function (a, b) {
      var c = a.get(b.uuid) || a.get(b.id);
      if (c)
        return (
          (a = c.name),
          (c.id = b.id || c.id),
          (c.name = b.name),
          (c.token = b.token),
          (c.uuid = b.uuid || c.uuid),
          c.name != a
        );
      a.screens.push(b);
      return !0;
    },
    Fyb = function (a, b) {
      var c = a.screens.length != b.length;
      a.screens = g.zs(a.screens, function (f) {
        return !!gwb(b, f);
      });
      for (var d = 0, e = b.length; d < e; d++) c = Eyb(a, b[d]) || c;
      return c;
    },
    Gyb = function (a, b) {
      var c = a.screens.length;
      a.screens = g.zs(a.screens, function (d) {
        return !(d || b ? (!d != !b ? 0 : d.id == b.id) : 1);
      });
      return a.screens.length < c;
    },
    Hyb = function (a, b, c, d, e) {
      g.nG.call(this);
      this.C = a;
      this.S = b;
      this.D = c;
      this.K = d;
      this.G = e;
      this.B = 0;
      this.j = null;
      this.qd = NaN;
    },
    j9 = function (a) {
      h9.call(this, "LocalScreenService");
      this.B = a;
      this.j = NaN;
      i9(this);
      this.info("Initializing with " + dwb(this.screens));
    },
    Iyb = function (a) {
      if (a.screens.length) {
        var b = g.dq(a.screens, function (d) {
            return d.id;
          }),
          c = a9(a.B, "/pairing/get_lounge_token_batch");
        qyb(
          a.B,
          c,
          { screen_ids: b.join(",") },
          (0, g.cb)(a.B5, a),
          (0, g.cb)(a.A5, a)
        );
      }
    },
    i9 = function (a) {
      if (g.SB("deprecate_pair_servlet_enabled")) return Fyb(a, []);
      var b = cwb(nwb());
      b = g.zs(b, function (c) {
        return !c.uuid;
      });
      return Fyb(a, b);
    },
    k9 = function (a, b) {
      pwb(g.dq(a.screens, awb));
      b && owb();
    },
    Kyb = function (a, b) {
      g.nG.call(this);
      this.K = b;
      b = (b = g.gD("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
      for (var c = {}, d = this.K(), e = d.length, f = 0; f < e; ++f) {
        var h = d[f].id;
        c[h] = g.Db(b, h);
      }
      this.j = c;
      this.G = a;
      this.C = this.D = NaN;
      this.B = null;
      Jyb("Initialized with " + g.ym(this.j));
    },
    Lyb = function (a, b, c) {
      var d = a9(a.G, "/pairing/get_screen_availability");
      qyb(
        a.G,
        d,
        { lounge_token: b.token },
        (0, g.cb)(function (e) {
          e = e.screens || [];
          for (var f = e.length, h = 0; h < f; ++h)
            if (e[h].loungeToken == b.token) {
              c("online" == e[h].status);
              return;
            }
          c(!1);
        }, a),
        (0, g.cb)(function () {
          c(!1);
        }, a)
      );
    },
    Nyb = function (a, b) {
      a: if (Ivb(b) != Ivb(a.j)) var c = !1;
      else {
        c = g.ed(b);
        for (var d = c.length, e = 0; e < d; ++e)
          if (!a.j[c[e]]) {
            c = !1;
            break a;
          }
        c = !0;
      }
      c ||
        (Jyb("Updated online screens: " + g.ym(a.j)),
        (a.j = b),
        a.ra("screenChange"));
      Myb(a);
    },
    l9 = function (a) {
      isNaN(a.C) || g.lC(a.C);
      a.C = g.jC((0, g.cb)(a.KQ, a), 0 < a.D && a.D < g.eb() ? 2e4 : 1e4);
    },
    Jyb = function (a) {
      c9("OnlineScreenService", a);
    },
    Oyb = function (a) {
      var b = {};
      g.Yb(a.K(), function (c) {
        c.token
          ? (b[c.token] = c.id)
          : this.eg("Requesting availability of screen w/o lounge token.");
      });
      return b;
    },
    Myb = function (a) {
      a = g.ed(
        g.Uc(a.j, function (b) {
          return b;
        })
      );
      g.Ub(a);
      a.length
        ? g.fD("yt-remote-online-screen-ids", a.join(","), 60)
        : g.hD("yt-remote-online-screen-ids");
    },
    m9 = function (a, b) {
      b = void 0 === b ? !1 : b;
      h9.call(this, "ScreenService");
      this.D = a;
      this.S = b;
      this.j = this.B = null;
      this.C = [];
      this.G = {};
      Pyb(this);
    },
    Ryb = function (a, b, c, d, e, f) {
      a.info("getAutomaticScreenByIds " + c + " / " + b);
      c || (c = a.G[b]);
      var h = a.Pk(),
        l = c ? i8(h, c) : null;
      (c && (a.S || l)) || (l = i8(h, b));
      if (l) {
        l.uuid = b;
        var m = n9(a, l);
        Lyb(a.j, m, function (n) {
          e(n ? m : null);
        });
      } else
        c
          ? Qyb(
              a,
              c,
              (0, g.cb)(function (n) {
                var p = n9(
                  this,
                  new f8({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || "",
                  })
                );
                Lyb(this.j, p, function (q) {
                  e(q ? p : null);
                });
              }, a),
              f
            )
          : e(null);
    },
    Syb = function (a, b) {
      for (var c = a.screens.length, d = 0; d < c; ++d)
        if (a.screens[d].name == b) return a.screens[d];
      return null;
    },
    Tyb = function (a, b, c) {
      Lyb(a.j, b, c);
    },
    Qyb = function (a, b, c, d) {
      a.info("requestLoungeToken_ for " + b);
      var e = {
        postParams: { screen_ids: b },
        method: "POST",
        context: a,
        onSuccess: function (f, h) {
          f = (h && h.screens) || [];
          f[0] && f[0].screenId == b
            ? c(f[0].loungeToken)
            : d(Error("Missing lounge token in token response"));
        },
        onError: function () {
          d(Error("Request screen lounge token failed"));
        },
      };
      g.oC(a9(a.D, "/pairing/get_lounge_token_batch"), e);
    },
    Uyb = function (a) {
      a.screens = a.B.Pk();
      var b = a.G,
        c = {},
        d;
      for (d in b) c[b[d]] = d;
      b = a.screens.length;
      for (d = 0; d < b; ++d) {
        var e = a.screens[d];
        e.uuid = c[e.id] || "";
      }
      a.info("Updated manual screens: " + dwb(a.screens));
    },
    Pyb = function (a) {
      Vyb(a);
      a.B = new j9(a.D);
      a.B.subscribe("screenChange", (0, g.cb)(a.L5, a));
      Uyb(a);
      a.S || (a.C = cwb(g.gD("yt-remote-automatic-screen-cache") || []));
      Vyb(a);
      a.info("Initializing automatic screens: " + dwb(a.C));
      a.j = new Kyb(a.D, (0, g.cb)(a.Pk, a, !0));
      a.j.subscribe(
        "screenChange",
        (0, g.cb)(function () {
          this.ra("onlineScreenChange");
        }, a)
      );
    },
    n9 = function (a, b) {
      var c = a.get(b.id);
      c
        ? ((c.uuid = b.uuid), (b = c))
        : ((c = i8(a.C, b.uuid))
            ? ((c.id = b.id), (c.token = b.token), (b = c))
            : a.C.push(b),
          a.S || Wyb(a));
      Vyb(a);
      a.G[b.uuid] = b.id;
      g.fD("yt-remote-device-id-map", a.G, 31536e3);
      return b;
    },
    Wyb = function (a) {
      a = g.zs(a.C, function (b) {
        return "shortLived" != b.idType;
      });
      g.fD("yt-remote-automatic-screen-cache", g.dq(a, awb));
    },
    Vyb = function (a) {
      a.G = g.gD("yt-remote-device-id-map") || {};
    },
    o9 = function (a, b, c) {
      g.nG.call(this);
      this.Fa = c;
      this.D = a;
      this.B = b;
      this.j = null;
    },
    p9 = function (a, b) {
      a.j = b;
      a.ra("sessionScreen", a.j);
    },
    Xyb = function (a, b) {
      a.j && ((a.j.token = b), n9(a.D, a.j));
      a.ra("sessionScreen", a.j);
    },
    q9 = function (a, b) {
      c9(a.Fa, b);
    },
    r9 = function (a, b, c) {
      o9.call(this, a, b, "CastSession");
      var d = this;
      this.config_ = c;
      this.C = null;
      this.va = (0, g.cb)(this.P1, this);
      this.Ia = (0, g.cb)(this.P9, this);
      this.qa = g.jC(function () {
        Yyb(d, null);
      }, 12e4);
      this.S = this.G = this.K = this.ma = 0;
      this.Ca = !1;
      this.ea = "unknown";
    },
    $yb = function (a, b) {
      g.lC(a.S);
      a.S = 0;
      0 == b
        ? Zyb(a)
        : (a.S = g.jC(function () {
            Zyb(a);
          }, b));
    },
    Zyb = function (a) {
      azb(a, "getLoungeToken");
      g.lC(a.G);
      a.G = g.jC(function () {
        bzb(a, null);
      }, 3e4);
    },
    azb = function (a, b) {
      a.info("sendYoutubeMessage_: " + b + " " + g.ym());
      var c = {};
      c.type = b;
      a.C
        ? a.C.sendMessage(
            "urn:x-cast:com.google.youtube.mdx",
            c,
            function () {},
            (0, g.cb)(function () {
              q9(this, "Failed to send message: " + b + ".");
            }, a)
          )
        : q9(a, "Sending yt message without session: " + g.ym(c));
    },
    czb = function (a, b) {
      b
        ? (a.info("onConnectedScreenId_: Received screenId: " + b),
          (a.j && a.j.id == b) ||
            a.gW(
              b,
              function (c) {
                p9(a, c);
              },
              function () {
                return a.Aj();
              },
              5
            ))
        : a.Aj(Error("Waiting for session status timed out."));
    },
    ezb = function (a, b, c) {
      a.info(
        "onConnectedScreenData_: Received screenData: " + JSON.stringify(b)
      );
      var d = new f8(b);
      dzb(
        a,
        d,
        function (e) {
          e
            ? ((a.Ca = !0), n9(a.D, d), p9(a, d), (a.ea = "unknown"), $yb(a, c))
            : (g.VB(
                Error(
                  "CastSession, RemoteScreen from screenData: " +
                    JSON.stringify(b) +
                    " is not online."
                )
              ),
              a.Aj());
        },
        5
      );
    },
    Yyb = function (a, b) {
      g.lC(a.qa);
      a.qa = 0;
      b
        ? a.config_.enableCastLoungeToken && b.loungeToken
          ? b.deviceId
            ? (a.j && a.j.uuid == b.deviceId) ||
              (b.loungeTokenRefreshIntervalMs
                ? ezb(
                    a,
                    {
                      name: a.B.friendlyName,
                      screenId: b.screenId,
                      loungeToken: b.loungeToken,
                      dialId: b.deviceId,
                      screenIdType: "shortLived",
                    },
                    b.loungeTokenRefreshIntervalMs
                  )
                : (g.VB(
                    Error(
                      "No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " +
                        JSON.stringify(b) +
                        "."
                    )
                  ),
                  czb(a, b.screenId)))
            : (g.VB(
                Error(
                  "No device id presents in mdxSessionStatusData: " +
                    JSON.stringify(b) +
                    "."
                )
              ),
              czb(a, b.screenId))
          : czb(a, b.screenId)
        : a.Aj(Error("Waiting for session status timed out."));
    },
    bzb = function (a, b) {
      g.lC(a.G);
      a.G = 0;
      var c = null;
      if (b)
        if (b.loungeToken) {
          var d;
          (null == (d = a.j) ? void 0 : d.token) == b.loungeToken &&
            (c = "staleLoungeToken");
        } else c = "missingLoungeToken";
      else c = "noLoungeTokenResponse";
      c
        ? (a.info(
            "Did not receive a new lounge token in onLoungeToken_ with data: " +
              (JSON.stringify(b) + ", error: " + c)
          ),
          (a.ea = c),
          $yb(a, 3e4))
        : (Xyb(a, b.loungeToken),
          (a.Ca = !1),
          (a.ea = "unknown"),
          $yb(a, b.loungeTokenRefreshIntervalMs));
    },
    dzb = function (a, b, c, d) {
      g.lC(a.K);
      a.K = 0;
      Tyb(a.D, b, function (e) {
        e || 0 > d
          ? c(e)
          : (a.K = g.jC(function () {
              dzb(a, b, c, d - 1);
            }, 300));
      });
    },
    fzb = function (a) {
      g.lC(a.ma);
      a.ma = 0;
      g.lC(a.K);
      a.K = 0;
      g.lC(a.qa);
      a.qa = 0;
      g.lC(a.G);
      a.G = 0;
      g.lC(a.S);
      a.S = 0;
    },
    s9 = function (a, b, c, d) {
      o9.call(this, a, b, "DialSession");
      this.config_ = d;
      this.C = this.ma = null;
      this.Ia = "";
      this.Va = c;
      this.Pa = null;
      this.qa = function () {};
      this.ea = NaN;
      this.Na = (0, g.cb)(this.Q1, this);
      this.G = function () {};
      this.S = this.K = 0;
      this.va = !1;
      this.Ca = "unknown";
    },
    t9 = function (a) {
      var b;
      return !!(
        a.config_.enableDialLoungeToken &&
        (null == (b = a.C) ? 0 : b.getDialAppInfo)
      );
    },
    gzb = function (a) {
      a.G = a.D.US(
        a.Ia,
        a.B.label,
        a.B.friendlyName,
        t9(a),
        function (b, c) {
          a.G = function () {};
          a.va = !0;
          p9(a, b);
          "shortLived" == b.idType && 0 < c && u9(a, c);
        },
        function (b) {
          a.G = function () {};
          a.Aj(b);
        }
      );
    },
    hzb = function (a) {
      var b = {};
      b.pairingCode = a.Ia;
      b.theme = a.Va;
      rwb() && (b.env_useStageMdx = 1);
      return g.Fl(b);
    },
    izb = function (a) {
      return new Promise(function (b) {
        a.Ia = ewb();
        if (a.Pa) {
          var c = new chrome.cast.DialLaunchResponse(!0, hzb(a));
          b(c);
          gzb(a);
        } else
          (a.qa = function () {
            g.lC(a.ea);
            a.qa = function () {};
            a.ea = NaN;
            var d = new chrome.cast.DialLaunchResponse(!0, hzb(a));
            b(d);
            gzb(a);
          }),
            (a.ea = g.jC(function () {
              a.qa();
            }, 100));
      });
    },
    kzb = function (a, b, c) {
      a.info(
        "initOnConnectedScreenDataPromise_: Received screenData: " +
          JSON.stringify(b)
      );
      var d = new f8(b);
      return new Promise(function (e) {
        jzb(
          a,
          d,
          function (f) {
            f
              ? ((a.va = !0), n9(a.D, d), p9(a, d), u9(a, c))
              : g.VB(
                  Error(
                    "DialSession, RemoteScreen from screenData: " +
                      JSON.stringify(b) +
                      " is not online."
                  )
                );
            e(f);
          },
          5
        );
      }).then(function (e) {
        return e ? new chrome.cast.DialLaunchResponse(!1) : izb(a);
      });
    },
    lzb = function (a, b) {
      var c = a.ma.receiver.label,
        d = a.B.friendlyName;
      return new Promise(function (e) {
        Ryb(
          a.D,
          c,
          b,
          d,
          function (f) {
            f && f.token && p9(a, f);
            e(f);
          },
          function (f) {
            q9(a, "Failed to get DIAL screen: " + f);
            e(null);
          }
        );
      }).then(function (e) {
        return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : izb(a);
      });
    },
    jzb = function (a, b, c, d) {
      g.lC(a.K);
      a.K = 0;
      Tyb(a.D, b, function (e) {
        e || 0 > d
          ? c(e)
          : (a.K = g.jC(function () {
              jzb(a, b, c, d - 1);
            }, 300));
      });
    },
    u9 = function (a, b) {
      a.info("getDialAppInfoWithTimeout_ " + b);
      t9(a) &&
        (g.lC(a.S),
        (a.S = 0),
        0 == b
          ? mzb(a)
          : (a.S = g.jC(function () {
              mzb(a);
            }, b)));
    },
    mzb = function (a) {
      t9(a) &&
        a.C.getDialAppInfo(
          function (b) {
            a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
            b = b.extraData || {};
            var c = null;
            if (b.loungeToken) {
              var d;
              (null == (d = a.j) ? void 0 : d.token) == b.loungeToken &&
                (c = "staleLoungeToken");
            } else c = "missingLoungeToken";
            c
              ? ((a.Ca = c), u9(a, 3e4))
              : ((a.va = !1),
                (a.Ca = "unknown"),
                Xyb(a, b.loungeToken),
                u9(a, b.loungeTokenRefreshIntervalMs));
          },
          function (b) {
            a.info("getDialAppInfo error: " + b);
            a.Ca = "noLoungeTokenResponse";
            u9(a, 3e4);
          }
        );
    },
    nzb = function (a) {
      g.lC(a.K);
      a.K = 0;
      g.lC(a.S);
      a.S = 0;
      a.G();
      a.G = function () {};
      g.lC(a.ea);
    },
    v9 = function (a, b) {
      o9.call(this, a, b, "ManualSession");
      this.C = g.jC((0, g.cb)(this.Sz, this, null), 150);
    },
    w9 = function (a, b) {
      g.nG.call(this);
      this.config_ = b;
      this.B = a;
      this.ma = b.appId || "233637DE";
      this.D = b.theme || "cl";
      this.ea = b.disableCastApi || !1;
      this.K = b.forceMirroring || !1;
      this.j = null;
      this.S = !1;
      this.C = [];
      this.G = (0, g.cb)(this.K8, this);
    },
    ozb = function (a, b) {
      return b
        ? g.Bb(
            a.C,
            function (c) {
              return g8(b, c.label);
            },
            a
          )
        : null;
    },
    x9 = function (a) {
      c9("Controller", a);
    },
    xyb = function (a) {
      window.chrome &&
        chrome.cast &&
        chrome.cast.logMessage &&
        chrome.cast.logMessage(a);
    },
    y9 = function (a) {
      return a.S || !!a.C.length || !!a.j;
    },
    z9 = function (a, b, c) {
      b != a.j &&
        (g.sb(a.j),
        (a.j = b)
          ? (c
              ? a.ra("yt-remote-cast2-receiver-resumed", b.B)
              : a.ra("yt-remote-cast2-receiver-selected", b.B),
            b.subscribe("sessionScreen", (0, g.cb)(a.FY, a, b)),
            b.subscribe("sessionFailed", function () {
              return pzb(a, b);
            }),
            b.j
              ? a.ra("yt-remote-cast2-session-change", b.j)
              : c && a.j.Sz(null))
          : a.ra("yt-remote-cast2-session-change", null));
    },
    pzb = function (a, b) {
      a.j == b && a.ra("yt-remote-cast2-session-failed");
    },
    qzb = function (a) {
      var b = a.B.SS(),
        c = a.j && a.j.B;
      a = g.dq(
        b,
        function (d) {
          c && g8(d, c.label) && (c = null);
          var e = d.uuid ? d.uuid : d.id,
            f = ozb(this, d);
          f
            ? ((f.label = e), (f.friendlyName = d.name))
            : ((f = new chrome.cast.Receiver(e, d.name)),
              (f.receiverType = chrome.cast.ReceiverType.CUSTOM));
          return f;
        },
        a
      );
      c &&
        (c.receiverType != chrome.cast.ReceiverType.CUSTOM &&
          ((c = new chrome.cast.Receiver(c.label, c.friendlyName)),
          (c.receiverType = chrome.cast.ReceiverType.CUSTOM)),
        a.push(c));
      return a;
    },
    xzb = function (a, b, c, d) {
      d.disableCastApi
        ? A9("Cannot initialize because disabled by Mdx config.")
        : rzb()
        ? szb(b, d) &&
          (tzb(!0),
          window.chrome && chrome.cast && chrome.cast.isAvailable
            ? uzb(a, c)
            : ((window.__onGCastApiAvailable = function (e, f) {
                e
                  ? uzb(a, c)
                  : (B9("Failed to load cast API: " + f),
                    vzb(!1),
                    tzb(!1),
                    g.hD("yt-remote-cast-available"),
                    g.hD("yt-remote-cast-receiver"),
                    wzb(),
                    c(!1));
              }),
              d.loadCastApiSetupScript
                ? g.Dra(
                    "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"
                  )
                : 0 <= window.navigator.userAgent.indexOf("Android") &&
                  0 <= window.navigator.userAgent.indexOf("Chrome/") &&
                  window.navigator.presentation
                ? 60 <= twb() && Cwb()
                : !window.chrome ||
                  !window.navigator.presentation ||
                  0 <= window.navigator.userAgent.indexOf("Edge")
                ? xwb()
                : 89 <= twb()
                ? Ewb()
                : (Bwb(), p8(Dwb.map(ywb)))))
        : A9("Cannot initialize because not running Chrome");
    },
    wzb = function () {
      A9("dispose");
      var a = C9();
      a && a.dispose();
      g.Sa("yt.mdx.remote.cloudview.instance_", null);
      yzb(!1);
      g.WE(zzb);
      zzb.length = 0;
    },
    D9 = function () {
      return !!g.gD("yt-remote-cast-installed");
    },
    Azb = function () {
      var a = g.gD("yt-remote-cast-receiver");
      return a ? a.friendlyName : null;
    },
    Bzb = function () {
      A9("clearCurrentReceiver");
      g.hD("yt-remote-cast-receiver");
    },
    Czb = function () {
      return D9()
        ? C9()
          ? C9().getCastSession()
          : (B9("getCastSelector: Cast is not initialized."), null)
        : (B9("getCastSelector: Cast API is not installed!"), null);
    },
    Dzb = function () {
      D9()
        ? C9()
          ? E9()
            ? (A9("Requesting cast selector."), C9().requestSession())
            : (A9("Wait for cast API to be ready to request the session."),
              zzb.push(g.VE("yt-remote-cast2-api-ready", Dzb)))
          : B9("requestCastSelector: Cast is not initialized.")
        : B9("requestCastSelector: Cast API is not installed!");
    },
    F9 = function (a, b) {
      E9()
        ? C9().setConnectedScreenStatus(a, b)
        : B9("setConnectedScreenStatus called before ready.");
    },
    rzb = function () {
      var a = 0 <= g.nc().search(/ (CrMo|Chrome|CriOS)\//);
      return g.uL || a;
    },
    Ezb = function (a, b) {
      C9().init(a, b);
    },
    szb = function (a, b) {
      var c = !1;
      C9() ||
        ((a = new w9(a, b)),
        a.subscribe("yt-remote-cast2-availability-change", function (d) {
          g.fD("yt-remote-cast-available", d);
          n8("yt-remote-cast2-availability-change", d);
        }),
        a.subscribe("yt-remote-cast2-receiver-selected", function (d) {
          A9("onReceiverSelected: " + d.friendlyName);
          g.fD("yt-remote-cast-receiver", d);
          n8("yt-remote-cast2-receiver-selected", d);
        }),
        a.subscribe("yt-remote-cast2-receiver-resumed", function (d) {
          A9("onReceiverResumed: " + d.friendlyName);
          g.fD("yt-remote-cast-receiver", d);
          n8("yt-remote-cast2-receiver-resumed", d);
        }),
        a.subscribe("yt-remote-cast2-session-change", function (d) {
          A9("onSessionChange: " + h8(d));
          d || g.hD("yt-remote-cast-receiver");
          n8("yt-remote-cast2-session-change", d);
        }),
        g.Sa("yt.mdx.remote.cloudview.instance_", a),
        (c = !0));
      A9("cloudview.createSingleton_: " + c);
      return c;
    },
    C9 = function () {
      return g.Ta("yt.mdx.remote.cloudview.instance_");
    },
    uzb = function (a, b) {
      vzb(!0);
      tzb(!1);
      Ezb(a, function (c) {
        c
          ? (yzb(!0), g.XE("yt-remote-cast2-api-ready"))
          : (B9("Failed to initialize cast API."),
            vzb(!1),
            g.hD("yt-remote-cast-available"),
            g.hD("yt-remote-cast-receiver"),
            wzb());
        b(c);
      });
    },
    A9 = function (a) {
      c9("cloudview", a);
    },
    B9 = function (a) {
      c9("cloudview", a);
    },
    vzb = function (a) {
      A9("setCastInstalled_ " + a);
      g.fD("yt-remote-cast-installed", a);
    },
    E9 = function () {
      return !!g.Ta("yt.mdx.remote.cloudview.apiReady_");
    },
    yzb = function (a) {
      A9("setApiReady_ " + a);
      g.Sa("yt.mdx.remote.cloudview.apiReady_", a);
    },
    tzb = function (a) {
      g.Sa("yt.mdx.remote.cloudview.initializing_", a);
    },
    G9 = function (a) {
      this.index = -1;
      this.videoId = this.listId = "";
      this.volume = this.playerState = -1;
      this.muted = !1;
      this.audioTrackId = null;
      this.K = this.S = 0;
      this.trackData = null;
      this.Uk = this.qp = !1;
      this.ma = this.G = this.j = this.D = 0;
      this.C = NaN;
      this.B = !1;
      this.reset(a);
    },
    Fzb = function (a) {
      a.audioTrackId = null;
      a.trackData = null;
      a.playerState = -1;
      a.qp = !1;
      a.Uk = !1;
      a.S = 0;
      a.K = g.eb();
      a.D = 0;
      a.j = 0;
      a.G = 0;
      a.ma = 0;
      a.C = NaN;
      a.B = !1;
    },
    H9 = function (a) {
      return a.isPlaying() ? (g.eb() - a.K) / 1e3 : 0;
    },
    I9 = function (a, b) {
      a.S = b;
      a.K = g.eb();
    },
    J9 = function (a) {
      switch (a.playerState) {
        case 1:
        case 1081:
          return (g.eb() - a.K) / 1e3 + a.S;
        case -1e3:
          return 0;
      }
      return a.S;
    },
    K9 = function (a, b, c) {
      var d = a.videoId;
      a.videoId = b;
      a.index = c;
      b != d && Fzb(a);
    },
    Gzb = function (a) {
      var b = {};
      b.index = a.index;
      b.listId = a.listId;
      b.videoId = a.videoId;
      b.playerState = a.playerState;
      b.volume = a.volume;
      b.muted = a.muted;
      b.audioTrackId = a.audioTrackId;
      b.trackData = g.qd(a.trackData);
      b.hasPrevious = a.qp;
      b.hasNext = a.Uk;
      b.playerTime = a.S;
      b.playerTimeAt = a.K;
      b.seekableStart = a.D;
      b.seekableEnd = a.j;
      b.duration = a.G;
      b.loadedTime = a.ma;
      b.liveIngestionTime = a.C;
      return b;
    },
    M9 = function (a, b) {
      g.nG.call(this);
      this.C = 0;
      this.D = a;
      this.K = [];
      this.G = new kyb();
      this.B = this.j = null;
      this.ea = (0, g.cb)(this.A7, this);
      this.S = (0, g.cb)(this.qE, this);
      this.ma = (0, g.cb)(this.z7, this);
      this.qa = (0, g.cb)(this.D7, this);
      var c = 0;
      a
        ? ((c = a.getProxyState()),
          3 != c && (a.subscribe("proxyStateChange", this.dR, this), Hzb(this)))
        : (c = 3);
      0 != c &&
        (b
          ? this.dR(c)
          : g.jC(
              (0, g.cb)(function () {
                this.dR(c);
              }, this),
              0
            ));
      (a = Czb()) && L9(this, a);
      this.subscribe("yt-remote-cast2-session-change", this.qa);
    },
    N9 = function (a) {
      return new G9(a.D.getPlayerContextData());
    },
    Hzb = function (a) {
      g.Yb(
        "nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(
          " "
        ),
        function (b) {
          this.K.push(this.D.subscribe(b, g.db(this.I8, b), this));
        },
        a
      );
    },
    Izb = function (a) {
      g.Yb(
        a.K,
        function (b) {
          this.D.unsubscribeByKey(b);
        },
        a
      );
      a.K.length = 0;
    },
    O9 = function (a) {
      return 1 == a.getState();
    },
    P9 = function (a, b) {
      var c = a.G;
      50 > c.j.length + c.B.length && a.G.B.push(b);
    },
    Jzb = function (a, b, c) {
      var d = N9(a);
      I9(d, c);
      -1e3 != d.playerState && (d.playerState = b);
      Q9(a, d);
    },
    R9 = function (a, b, c) {
      a.D.sendMessage(b, c);
    },
    Q9 = function (a, b) {
      Izb(a);
      a.D.setPlayerContextData(Gzb(b));
      Hzb(a);
    },
    L9 = function (a, b) {
      a.B &&
        (a.B.removeUpdateListener(a.ea),
        a.B.removeMediaListener(a.S),
        a.qE(null));
      a.B = b;
      a.B &&
        (d9("Setting cast session: " + a.B.sessionId),
        a.B.addUpdateListener(a.ea),
        a.B.addMediaListener(a.S),
        a.B.media.length && a.qE(a.B.media[0]));
    },
    Kzb = function (a) {
      var b = a.j.media,
        c = a.j.customData;
      if (b && c) {
        var d = N9(a);
        b.contentId != d.videoId &&
          d9("Cast changing video to: " + b.contentId);
        d.videoId = b.contentId;
        d.playerState = c.playerState;
        I9(d, a.j.getEstimatedTime());
        Q9(a, d);
      } else d9("No cast media video. Ignoring state update.");
    },
    S9 = function (a, b, c) {
      return (0, g.cb)(function (d) {
        this.eg(
          "Failed to " + b + " with cast v2 channel. Error code: " + d.code
        );
        d.code != chrome.cast.ErrorCode.TIMEOUT &&
          (this.eg("Retrying " + b + " using MDx browser channel."),
          R9(this, b, c));
      }, a);
    },
    V9 = function (a, b, c, d) {
      d = void 0 === d ? !1 : d;
      g.nG.call(this);
      var e = this;
      this.K = NaN;
      this.Ia = !1;
      this.ea = this.ma = this.va = this.Ca = NaN;
      this.qa = [];
      this.G = this.S = this.D = this.j = this.B = null;
      this.Pa = a;
      this.Na = d;
      this.qa.push(
        g.XC(window, "beforeunload", function () {
          e.Zy(2);
        })
      );
      this.C = [];
      this.j = new G9();
      this.Va = b.id;
      this.Fa = b.idType;
      this.B = wyb(this.Pa, c, this.YS, "shortLived" == this.Fa, this.Va);
      this.B.Ua("channelOpened", function () {
        Lzb(e);
      });
      this.B.Ua("channelClosed", function () {
        T9("Channel closed");
        isNaN(e.K) ? l8(!0) : l8();
        e.dispose();
      });
      this.B.Ua("channelError", function (f) {
        l8();
        isNaN(e.nD())
          ? (1 == f &&
              "shortLived" == e.Fa &&
              e.ra("browserChannelAuthError", f),
            T9("Channel error: " + f + " without reconnection"),
            e.dispose())
          : ((e.Ia = !0),
            T9(
              "Channel error: " + f + " with reconnection in " + e.nD() + " ms"
            ),
            U9(e, 2));
      });
      this.B.Ua("channelMessage", function (f) {
        Mzb(e, f);
      });
      this.B.Fr(b.token);
      this.subscribe("remoteQueueChange", function () {
        var f = e.j.videoId;
        g.iD() && g.fD("yt-remote-session-video-id", f);
      });
    },
    Nzb = function (a) {
      return g.Bb(a.C, function (b) {
        return "LOUNGE_SCREEN" == b.type;
      });
    },
    T9 = function (a) {
      c9("conn", a);
    },
    U9 = function (a, b) {
      a.ra("proxyStateChange", b);
    },
    Ozb = function (a) {
      a.K = g.jC(function () {
        T9("Connecting timeout");
        a.Zy(1);
      }, 2e4);
    },
    Pzb = function (a) {
      g.lC(a.K);
      a.K = NaN;
    },
    Qzb = function (a) {
      g.lC(a.Ca);
      a.Ca = NaN;
    },
    Szb = function (a) {
      Rzb(a);
      a.va = g.jC(function () {
        W9(a, "getNowPlaying");
      }, 2e4);
    },
    Rzb = function (a) {
      g.lC(a.va);
      a.va = NaN;
    },
    Lzb = function (a) {
      T9("Channel opened");
      a.Ia &&
        ((a.Ia = !1),
        Qzb(a),
        (a.Ca = g.jC(function () {
          T9("Timing out waiting for a screen.");
          a.Zy(1);
        }, 15e3)));
    },
    Uzb = function (a, b) {
      var c = null;
      if (b) {
        var d = Nzb(a);
        d &&
          (c = {
            clientName: d.clientName,
            deviceMake: d.brand,
            deviceModel: d.model,
            osVersion: d.osVersion,
          });
      }
      g.Sa("yt.mdx.remote.remoteClient_", c);
      b && (Pzb(a), Qzb(a));
      c = a.B.Hz() && isNaN(a.K);
      b == c
        ? b && (U9(a, 1), W9(a, "getSubtitlesTrack"))
        : b
        ? (a.bW() && a.j.reset(), U9(a, 1), W9(a, "getNowPlaying"), Tzb(a))
        : a.Zy(1);
    },
    Vzb = function (a, b) {
      var c = b.params.videoId;
      delete b.params.videoId;
      c == a.j.videoId &&
        (g.id(b.params) ? (a.j.trackData = null) : (a.j.trackData = b.params),
        a.ra("remotePlayerChange"));
    },
    Wzb = function (a, b, c) {
      var d = b.params.videoId || b.params.video_id,
        e = parseInt(b.params.currentIndex, 10);
      a.j.listId = b.params.listId || a.j.listId;
      K9(a.j, d, e);
      a.ra("remoteQueueChange", c);
    },
    Yzb = function (a, b) {
      b.params = b.params || {};
      Wzb(a, b, "NOW_PLAYING_MAY_CHANGE");
      Xzb(a, b);
      a.ra("autoplayDismissed");
    },
    Xzb = function (a, b) {
      var c = parseInt(b.params.currentTime || b.params.current_time, 10);
      I9(a.j, isNaN(c) ? 0 : c);
      c = parseInt(b.params.state, 10);
      c = isNaN(c) ? -1 : c;
      -1 == c && -1e3 == a.j.playerState && (c = -1e3);
      a.j.playerState = c;
      c = Number(b.params.loadedTime);
      a.j.ma = isNaN(c) ? 0 : c;
      a.j.vl(Number(b.params.duration));
      c = a.j;
      var d = Number(b.params.liveIngestionTime);
      c.C = d;
      c.B = isNaN(d) ? !1 : !0;
      c = a.j;
      d = Number(b.params.seekableStartTime);
      b = Number(b.params.seekableEndTime);
      c.D = isNaN(d) ? 0 : d;
      c.j = isNaN(b) ? 0 : b;
      1 == a.j.playerState ? Szb(a) : Rzb(a);
      a.ra("remotePlayerChange");
    },
    Zzb = function (a, b) {
      if (-1e3 != a.j.playerState) {
        var c = 1085;
        switch (parseInt(b.params.adState, 10)) {
          case 1:
            c = 1081;
            break;
          case 2:
            c = 1084;
            break;
          case 0:
            c = 1083;
        }
        a.j.playerState = c;
        b = parseInt(b.params.currentTime, 10);
        I9(a.j, isNaN(b) ? 0 : b);
        a.ra("remotePlayerChange");
      }
    },
    $zb = function (a, b) {
      var c = "true" == b.params.muted;
      a.j.volume = parseInt(b.params.volume, 10);
      a.j.muted = c;
      a.ra("remotePlayerChange");
    },
    aAb = function (a, b) {
      a.S = b.params.videoId;
      a.ra("nowAutoplaying", parseInt(b.params.timeout, 10));
    },
    bAb = function (a, b) {
      a.S = b.params.videoId || null;
      a.ra("autoplayUpNext", a.S);
    },
    cAb = function (a, b) {
      a.G = b.params.autoplayMode;
      a.ra("autoplayModeChange", a.G);
      "DISABLED" == a.G && a.ra("autoplayDismissed");
    },
    dAb = function (a, b) {
      var c = "true" == b.params.hasNext;
      a.j.qp = "true" == b.params.hasPrevious;
      a.j.Uk = c;
      a.ra("previousNextChange");
    },
    Mzb = function (a, b) {
      b = b.message;
      b.params
        ? T9("Received: action=" + b.action + ", params=" + g.ym(b.params))
        : T9("Received: action=" + b.action + " {}");
      switch (b.action) {
        case "loungeStatus":
          b = c8(b.params.devices);
          a.C = g.dq(b, function (d) {
            return new e8(d);
          });
          b = !!g.Bb(a.C, function (d) {
            return "LOUNGE_SCREEN" == d.type;
          });
          Uzb(a, b);
          b = a.dX("mlm");
          a.ra("multiStateLoopEnabled", b);
          break;
        case "loungeScreenDisconnected":
          g.Gb(a.C, function (d) {
            return "LOUNGE_SCREEN" == d.type;
          });
          Uzb(a, !1);
          break;
        case "remoteConnected":
          var c = new e8(c8(b.params.device));
          g.Bb(a.C, function (d) {
            return d.equals(c);
          }) || Hvb(a.C, c);
          break;
        case "remoteDisconnected":
          c = new e8(c8(b.params.device));
          g.Gb(a.C, function (d) {
            return d.equals(c);
          });
          break;
        case "gracefulDisconnect":
          break;
        case "playlistModified":
          Wzb(a, b, "QUEUE_MODIFIED");
          break;
        case "nowPlaying":
          Yzb(a, b);
          break;
        case "onStateChange":
          Xzb(a, b);
          break;
        case "onAdStateChange":
          Zzb(a, b);
          break;
        case "onVolumeChanged":
          $zb(a, b);
          break;
        case "onSubtitlesTrackChanged":
          Vzb(a, b);
          break;
        case "nowAutoplaying":
          aAb(a, b);
          break;
        case "autoplayDismissed":
          a.ra("autoplayDismissed");
          break;
        case "autoplayUpNext":
          bAb(a, b);
          break;
        case "onAutoplayModeChanged":
          cAb(a, b);
          break;
        case "onHasPreviousNextChanged":
          dAb(a, b);
          break;
        case "requestAssistedSignIn":
          a.ra("assistedSignInRequested", b.params.authCode);
          break;
        case "onLoopModeChanged":
          a.ra("loopModeChange", b.params.loopMode);
          break;
        default:
          T9("Unrecognized action: " + b.action);
      }
    },
    Tzb = function (a) {
      g.lC(a.ea);
      a.ea = g.jC(function () {
        a.Zy(1);
      }, 864e5);
    },
    W9 = function (a, b, c) {
      c
        ? T9("Sending: action=" + b + ", params=" + g.ym(c))
        : T9("Sending: action=" + b);
      a.B.sendMessage(b, c);
    },
    eAb = function (a) {
      h9.call(this, "ScreenServiceProxy");
      this.ih = a;
      this.j = [];
      this.j.push(this.ih.$_s("screenChange", (0, g.cb)(this.U1, this)));
      this.j.push(this.ih.$_s("onlineScreenChange", (0, g.cb)(this.q8, this)));
    },
    jAb = function (a, b) {
      qwb();
      if (!m8 || !m8.get("yt-remote-disable-remote-module-for-dev")) {
        b = g.QB("MDX_CONFIG") || b;
        hwb();
        lwb();
        X9 ||
          ((X9 = new $8(b ? b.loungeApiHost : void 0)),
          rwb() && (X9.j = "/api/loungedev"));
        Y9 ||
          ((Y9 = g.Ta("yt.mdx.remote.deferredProxies_") || []),
          g.Sa("yt.mdx.remote.deferredProxies_", Y9));
        fAb();
        var c = Z9();
        if (!c) {
          var d = new m9(X9, b ? b.disableAutomaticScreenCache || !1 : !1);
          g.Sa("yt.mdx.remote.screenService_", d);
          c = Z9();
          var e = {};
          b &&
            (e = {
              appId: b.appId,
              disableDial: b.disableDial,
              theme: b.theme,
              loadCastApiSetupScript: b.loadCastApiSetupScript,
              disableCastApi: b.disableCastApi,
              enableDialLoungeToken: b.enableDialLoungeToken,
              enableCastLoungeToken: b.enableCastLoungeToken,
              forceMirroring: b.forceMirroring,
            });
          g.Sa(
            "yt.mdx.remote.enableConnectWithInitialState_",
            b ? b.enableConnectWithInitialState || !1 : !1
          );
          xzb(
            a,
            d,
            function (f) {
              f
                ? $9() && F9($9(), "YouTube TV")
                : d.subscribe("onlineScreenChange", function () {
                    n8("yt-remote-receiver-availability-change");
                  });
            },
            e
          );
        }
        b &&
          !g.Ta("yt.mdx.remote.initialized_") &&
          (g.Sa("yt.mdx.remote.initialized_", !0),
          a$("Initializing: " + g.ym(b)),
          b$.push(
            g.VE("yt-remote-cast2-api-ready", function () {
              n8("yt-remote-api-ready");
            })
          ),
          b$.push(
            g.VE("yt-remote-cast2-availability-change", function () {
              n8("yt-remote-receiver-availability-change");
            })
          ),
          b$.push(
            g.VE("yt-remote-cast2-receiver-selected", function () {
              c$(null);
              n8("yt-remote-auto-connect", "cast-selector-receiver");
            })
          ),
          b$.push(
            g.VE("yt-remote-cast2-receiver-resumed", function () {
              n8("yt-remote-receiver-resumed", "cast-selector-receiver");
            })
          ),
          b$.push(g.VE("yt-remote-cast2-session-change", gAb)),
          b$.push(
            g.VE("yt-remote-connection-change", function (f) {
              f ? F9($9(), "YouTube TV") : d$() || (F9(null, null), Bzb());
            })
          ),
          b$.push(
            g.VE("yt-remote-cast2-session-failed", function () {
              n8("yt-remote-connection-failed");
            })
          ),
          (a = hAb()),
          b.isAuto && (a.id += "#dial"),
          (e = b.capabilities || []),
          g.SB("desktop_enable_autoplay") && e.push("atp"),
          0 < e.length && (a.capabilities = e),
          (a.name = b.device),
          (a.app = b.app),
          (b = b.theme) && (a.theme = b),
          a$(" -- with channel params: " + g.ym(a)),
          a
            ? (g.fD("yt-remote-session-app", a.app),
              g.fD("yt-remote-session-name", a.name))
            : (g.hD("yt-remote-session-app"), g.hD("yt-remote-session-name")),
          g.Sa("yt.mdx.remote.channelParams_", a),
          c.start(),
          $9() || iAb());
      }
    },
    kAb = function () {
      var a = Z9().ih.$_gos();
      var b = e$();
      b && f$() && (gwb(a, b) || a.push(b));
      return fwb(a);
    },
    mAb = function () {
      var a = lAb();
      !a &&
        D9() &&
        Azb() &&
        (a = { key: "cast-selector-receiver", name: Azb() });
      return a;
    },
    lAb = function () {
      var a = kAb(),
        b = e$();
      b || (b = d$());
      return g.Bb(a, function (c) {
        return b && g8(b, c.key) ? !0 : !1;
      });
    },
    e$ = function () {
      var a = $9();
      if (!a) return null;
      var b = Z9().Pk();
      return i8(b, a);
    },
    gAb = function (a) {
      a$("remote.onCastSessionChange_: " + h8(a));
      if (a) {
        var b = e$();
        if (b && b.id == a.id) {
          if (
            (F9(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token))
          )
            g$ && (g$.token = a), (b = f$()) && b.Fr(a);
        } else b && h$(), i$(a, 1);
      } else f$() && h$();
    },
    h$ = function () {
      E9() ? C9().stopSession() : B9("stopSession called before API ready.");
      var a = f$();
      a && (a.disconnect(1), nAb(null));
    },
    oAb = function () {
      var a = f$();
      return !!a && 3 != a.getProxyState();
    },
    a$ = function (a) {
      c9("remote", a);
    },
    Z9 = function () {
      if (!pAb) {
        var a = g.Ta("yt.mdx.remote.screenService_");
        pAb = a ? new eAb(a) : null;
      }
      return pAb;
    },
    $9 = function () {
      return g.Ta("yt.mdx.remote.currentScreenId_");
    },
    qAb = function (a) {
      g.Sa("yt.mdx.remote.currentScreenId_", a);
    },
    rAb = function () {
      return g.Ta("yt.mdx.remote.connectData_");
    },
    c$ = function (a) {
      g.Sa("yt.mdx.remote.connectData_", a);
    },
    f$ = function () {
      return g.Ta("yt.mdx.remote.connection_");
    },
    nAb = function (a) {
      var b = f$();
      c$(null);
      a || qAb("");
      g.Sa("yt.mdx.remote.connection_", a);
      Y9 &&
        (g.Yb(Y9, function (c) {
          c(a);
        }),
        (Y9.length = 0));
      b && !a
        ? n8("yt-remote-connection-change", !1)
        : !b && a && n8("yt-remote-connection-change", !0);
    },
    d$ = function () {
      var a = g.iD();
      if (!a) return null;
      var b = Z9();
      if (!b) return null;
      b = b.Pk();
      return i8(b, a);
    },
    i$ = function (a, b) {
      $9();
      e$() && e$();
      if (j$) g$ = a;
      else {
        qAb(a.id);
        var c = g.Ta("yt.mdx.remote.enableConnectWithInitialState_") || !1;
        a = new V9(X9, a, hAb(), c);
        a.connect(b, rAb());
        a.subscribe("beforeDisconnect", function (d) {
          n8("yt-remote-before-disconnect", d);
        });
        a.subscribe("beforeDispose", function () {
          f$() && (f$(), nAb(null));
        });
        a.subscribe("browserChannelAuthError", function () {
          var d = e$();
          d &&
            "shortLived" == d.idType &&
            (E9()
              ? C9().handleBrowserChannelAuthError()
              : B9("refreshLoungeToken called before API ready."));
        });
        nAb(a);
      }
    },
    iAb = function () {
      var a = d$();
      a
        ? (a$("Resume connection to: " + h8(a)), i$(a, 0))
        : (l8(),
          Bzb(),
          a$("Skipping connecting because no session screen found."));
    },
    fAb = function () {
      var a = hAb();
      if (g.id(a)) {
        a = k8();
        var b = g.gD("yt-remote-session-name") || "",
          c = g.gD("yt-remote-session-app") || "";
        a = { device: "REMOTE_CONTROL", id: a, name: b, app: c, mdxVersion: 3 };
        a.authuser = String(g.QB("SESSION_INDEX", "0"));
        (b = g.QB("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
        g.Sa("yt.mdx.remote.channelParams_", a);
      }
    },
    hAb = function () {
      return g.Ta("yt.mdx.remote.channelParams_") || {};
    },
    uAb = function (a, b, c) {
      g.J.call(this);
      var d = this;
      this.module = a;
      this.J = b;
      this.Jc = c;
      this.events = new g.aL(this);
      this.ea = this.events.V(this.J, "onVolumeChange", function (e) {
        sAb(d, e);
      });
      this.D = !1;
      this.G = new g.SL(64);
      this.j = new g.fu(this.UZ, 500, this);
      this.B = new g.fu(this.VZ, 1e3, this);
      this.S = new q8(this.Naa, 0, this);
      this.C = {};
      this.ma = new g.fu(this.J_, 1e3, this);
      this.K = new r8(this.seekTo, 1e3, this);
      g.L(this, this.events);
      this.events.V(b, "onCaptionsTrackListChanged", this.b8);
      this.events.V(b, "captionschanged", this.x7);
      this.events.V(b, "captionssettingschanged", this.e_);
      this.events.V(b, "videoplayerreset", this.pJ);
      this.events.V(b, "mdxautoplaycancel", function () {
        d.Jc.rV();
      });
      b.N("enable_mdx_video_play_directly") &&
        this.events.V(b, "videodatachange", function () {
          tAb(d.module) || k$(d) || l$(d, 0);
        });
      a = this.Jc;
      a.isDisposed();
      a.subscribe("proxyStateChange", this.CY, this);
      a.subscribe("remotePlayerChange", this.wE, this);
      a.subscribe("remoteQueueChange", this.pJ, this);
      a.subscribe("previousNextChange", this.zY, this);
      a.subscribe("nowAutoplaying", this.uY, this);
      a.subscribe("autoplayDismissed", this.aY, this);
      g.L(this, this.j);
      g.L(this, this.B);
      g.L(this, this.S);
      g.L(this, this.ma);
      g.L(this, this.K);
      this.e_();
      this.pJ();
      this.wE();
    },
    sAb = function (a, b) {
      if (k$(a)) {
        a.Jc.unsubscribe("remotePlayerChange", a.wE, a);
        var c = Math.round(b.volume);
        b = !!b.muted;
        var d = N9(a.Jc);
        if (c !== d.volume || b !== d.muted) a.Jc.setVolume(c, b), a.ma.start();
        a.Jc.subscribe("remotePlayerChange", a.wE, a);
      }
    },
    vAb = function (a) {
      a.Kc(0);
      a.j.stop();
      a.Bc(new g.SL(64));
    },
    wAb = function (a, b) {
      if (k$(a) && !a.D) {
        var c = null;
        b && ((c = { style: a.J.getSubtitlesUserSettings() }), g.rd(c, b));
        a.Jc.XS(a.J.getVideoData(1).videoId, c);
        a.C = N9(a.Jc).trackData;
      }
    },
    l$ = function (a, b) {
      var c = a.J.getPlaylist();
      if (null == c ? 0 : c.listId) {
        var d = c.index;
        var e = c.listId.toString();
      }
      c = a.J.getVideoData(1);
      a.Jc.playVideo(c.videoId, b, d, e, c.playerParams, c.Ca, Gvb(c));
      a.Bc(new g.SL(1));
    },
    xAb = function (a, b) {
      if (b) {
        var c = a.J.getOption("captions", "tracklist", { RW: 1 });
        c && c.length
          ? (a.J.setOption("captions", "track", b), (a.D = !1))
          : (a.J.loadModule("captions"), (a.D = !0));
      } else a.J.setOption("captions", "track", {});
    },
    k$ = function (a) {
      return N9(a.Jc).videoId === a.J.getVideoData(1).videoId;
    },
    m$ = function () {
      g.T.call(this, {
        I: "div",
        T: "ytp-mdx-popup-dialog",
        Y: { role: "dialog" },
        X: [
          {
            I: "div",
            T: "ytp-mdx-popup-dialog-inner-content",
            X: [
              { I: "div", T: "ytp-mdx-popup-title", Aa: "Kijelentkezt\u00e9l" },
              {
                I: "div",
                T: "ytp-mdx-popup-description",
                Aa: "Az \u00e1ltalad megn\u00e9zett vide\u00f3k szerepelhetnek a TV-s megtekint\u00e9si el\u0151zm\u00e9nyeidben, \u00e9s befoly\u00e1solhatj\u00e1k a TV-s aj\u00e1nl\u00e1sokat. Ennek elker\u00fcl\u00e9se \u00e9rdek\u00e9ben vond vissza, \u00e9s jelentkezz be sz\u00e1m\u00edt\u00f3g\u00e9pen.",
              },
              {
                I: "div",
                T: "ytp-mdx-privacy-popup-buttons",
                X: [
                  {
                    I: "button",
                    Oa: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                    Aa: "M\u00e9gse",
                  },
                  {
                    I: "button",
                    Oa: ["ytp-button", "ytp-mdx-privacy-popup-confirm"],
                    Aa: "Meger\u0151s\u00edt\u00e9s",
                  },
                ],
              },
            ],
          },
        ],
      });
      this.j = new g.XG(this, 250);
      this.cancelButton = this.Ha("ytp-mdx-privacy-popup-cancel");
      this.confirmButton = this.Ha("ytp-mdx-privacy-popup-confirm");
      g.L(this, this.j);
      this.V(this.cancelButton, "click", this.B);
      this.V(this.confirmButton, "click", this.C);
    },
    n$ = function (a) {
      g.T.call(this, {
        I: "div",
        T: "ytp-remote",
        X: [
          {
            I: "div",
            T: "ytp-remote-display-status",
            X: [
              { I: "div", T: "ytp-remote-display-status-icon", X: [g.Bua()] },
              {
                I: "div",
                T: "ytp-remote-display-status-text",
                Aa: "{{statustext}}",
              },
            ],
          },
        ],
      });
      this.api = a;
      this.j = new g.XG(this, 250);
      g.L(this, this.j);
      this.V(a, "presentingplayerstatechange", this.onStateChange);
      this.Ic(a.Vb());
    },
    o$ = function (a, b) {
      g.GX.call(this, "Lej\u00e1tsz\u00e1s itt:", 1, a, b);
      this.J = a;
      this.Wt = {};
      this.V(a, "onMdxReceiversChange", this.D);
      this.V(a, "presentingplayerstatechange", this.D);
      this.D();
    },
    yAb = function (a) {
      g.zV.call(this, a);
      this.Ep = { key: ewb(), name: "Ezen a sz\u00e1m\u00edt\u00f3g\u00e9pen" };
      this.Wl = null;
      this.subscriptions = [];
      this.jQ = this.Jc = null;
      this.Wt = [this.Ep];
      this.Js = this.Ep;
      this.kf = new g.SL(64);
      this.mX = 0;
      this.Th = -1;
      this.QE = !1;
      this.OE = this.KA = null;
      if (!g.kS(this.player.W()) && !g.sH(this.player.W())) {
        a = this.player;
        var b = g.eU(a);
        b && (b = b.un()) && ((b = new o$(a, b)), g.L(this, b));
        b = new n$(a);
        g.L(this, b);
        g.sU(a, b.element, 4);
        this.KA = new m$();
        g.L(this, this.KA);
        g.sU(a, this.KA.element, 4);
        this.QE = !!d$();
      }
    },
    p$ = function (a) {
      a.OE &&
        (a.player.removeEventListener("presentingplayerstatechange", a.OE),
        (a.OE = null));
    },
    zAb = function (a, b, c) {
      a.kf = c;
      a.player.ra("presentingplayerstatechange", new g.bH(c, b));
    },
    q$ = function (a, b) {
      if (b.key !== a.Js.key)
        if (b.key === a.Ep.key) h$();
        else if (
          (tAb(a) && AAb(a),
          (a.Js = b),
          !a.player
            .W()
            .N("disable_mdx_connection_in_mdx_module_for_music_web") ||
            !g.sH(a.player.W()))
        ) {
          var c = a.player.getPlaylistId();
          var d = a.player.getVideoData(1);
          var e = d.videoId;
          if (
            (!c && !e) ||
            ((2 === a.player.getAppState() || 1 === a.player.getAppState()) &&
              a.player
                .W()
                .N("should_clear_video_data_on_player_cued_unstarted"))
          )
            d = null;
          else {
            var f = a.player.getPlaylist();
            if (f) {
              var h = [];
              for (var l = 0; l < f.length; l++) h[l] = g.wV(f, l).videoId;
            } else h = [e];
            f = a.player.getCurrentTime(1);
            a = {
              videoIds: h,
              listId: c,
              videoId: e,
              playerParams: d.playerParams,
              clickTrackingParams: d.Ca,
              index: Math.max(a.player.getPlaylistIndex(), 0),
              currentTime: 0 === f ? void 0 : f,
            };
            (d = Gvb(d)) && (a.locationInfo = d);
            d = a;
          }
          a$("Connecting to: " + g.ym(b));
          "cast-selector-receiver" == b.key
            ? (c$(d || null),
              (b = d || null),
              E9()
                ? C9().setLaunchParams(b)
                : B9("setLaunchParams called before ready."))
            : !d && oAb() && $9() == b.key
            ? n8("yt-remote-connection-change", !0)
            : (h$(),
              c$(d || null),
              (d = Z9().Pk()),
              (b = i8(d, b.key)) && i$(b, 1));
        }
    },
    tAb = function (a) {
      var b = a.player.W();
      return !b.N("mdx_enable_privacy_disclosure_ui") ||
        a.isLoggedIn() ||
        a.QE ||
        !a.KA
        ? !1
        : g.vS(b) || g.xS(b);
    },
    AAb = function (a) {
      a.player.Vb().isPlaying()
        ? a.player.pauseVideo()
        : ((a.OE = function (b) {
            !a.QE && g.eH(b, 8) && (a.player.pauseVideo(), p$(a));
          }),
          a.player.addEventListener("presentingplayerstatechange", a.OE));
      a.KA && a.KA.zd();
      f$() || (j$ = !0);
    };
  g.Ax.prototype.Vs = g.ba(0, function () {
    return g.Ij(this, 6);
  });
  var Jxb = {
      "\x00": "\\0",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\v": "\\x0B",
      '"': '\\"',
      "\\": "\\\\",
      "<": "\\u003C",
    },
    S8 = { "'": "\\'" },
    Zvb = {
      Ola: "atp",
      Q_a: "ska",
      VXa: "que",
      PPa: "mus",
      P_a: "sus",
      xBa: "dsp",
      bZa: "seq",
      sOa: "mic",
      Dsa: "dpa",
      Yma: "cds",
      GPa: "mlm",
      rsa: "dsdtr",
      pQa: "ntb",
      Uab: "vsp",
      tta: "scn",
      jYa: "rpe",
      nsa: "dcn",
      qsa: "dcp",
    },
    $vb = {
      x3: "u",
      CLASSIC: "cl",
      b3: "k",
      K0: "i",
      v0: "cr",
      l3: "m",
      H0: "g",
      eU: "up",
    };
  e8.prototype.equals = function (a) {
    return a ? this.id == a.id : !1;
  };
  var m8,
    kwb = "";
  swb.prototype.flush = function (a, b) {
    a = void 0 === a ? [] : a;
    b = void 0 === b ? !1 : b;
    if (g.SB("enable_client_streamz_web")) {
      a = g.u(a);
      for (var c = a.next(); !c.done; c = a.next())
        (c = g.Jea(c.value)),
          (c = { serializedIncrementBatch: g.qg(c.j()) }),
          g.zD("streamzIncremented", c, { sendIsolatedPayload: b });
    }
  };
  var o8,
    Awb = uwb("loadCastFramework") || uwb("loadCastApplicationFramework"),
    Dwb = [
      "pkedcjkdefgpdelpbcmbmeomcjbeemfm",
      "enhhojjnijigcajfphajepfemndkmdlo",
    ];
  g.gb(q8, g.J);
  g.k = q8.prototype;
  g.k.o1 = function (a) {
    this.D = arguments;
    this.j = !1;
    this.qd ? (this.C = g.eb() + this.Ui) : (this.qd = g.lg(this.G, this.Ui));
  };
  g.k.stop = function () {
    this.qd && (g.Qa.clearTimeout(this.qd), (this.qd = null));
    this.C = null;
    this.j = !1;
    this.D = [];
  };
  g.k.pause = function () {
    ++this.B;
  };
  g.k.resume = function () {
    this.B &&
      (--this.B,
      !this.B && this.j && ((this.j = !1), this.K.apply(null, this.D)));
  };
  g.k.Ba = function () {
    this.stop();
    q8.Qf.Ba.call(this);
  };
  g.k.q1 = function () {
    this.qd && (g.Qa.clearTimeout(this.qd), (this.qd = null));
    this.C
      ? ((this.qd = g.lg(this.G, this.C - g.eb())), (this.C = null))
      : this.B
      ? (this.j = !0)
      : ((this.j = !1), this.K.apply(null, this.D));
  };
  g.w(r8, g.J);
  g.k = r8.prototype;
  g.k.XK = function (a) {
    this.C = arguments;
    this.qd || this.B ? (this.j = !0) : Fwb(this);
  };
  g.k.stop = function () {
    this.qd &&
      (g.Qa.clearTimeout(this.qd),
      (this.qd = null),
      (this.j = !1),
      (this.C = null));
  };
  g.k.pause = function () {
    this.B++;
  };
  g.k.resume = function () {
    this.B--;
    this.B || !this.j || this.qd || ((this.j = !1), Fwb(this));
  };
  g.k.Ba = function () {
    g.J.prototype.Ba.call(this);
    this.stop();
  };
  s8.prototype.stringify = function (a) {
    return g.Qa.JSON.stringify(a, void 0);
  };
  s8.prototype.parse = function (a) {
    return g.Qa.JSON.parse(a, void 0);
  };
  g.gb(Gwb, g.xb);
  g.gb(Hwb, g.xb);
  var Iwb = null;
  g.gb(Kwb, g.xb);
  g.gb(Lwb, g.xb);
  g.gb(Mwb, g.xb);
  Nwb.prototype.info = function () {};
  Nwb.prototype.warning = function () {};
  var Uwb = {},
    y8 = {};
  g.k = w8.prototype;
  g.k.setTimeout = function (a) {
    this.Ab = a;
  };
  g.k.v1 = function (a) {
    a = a.target;
    var b = this.eb;
    b && 3 == g.Fm(a) ? b.XK() : this.AS(a);
  };
  g.k.AS = function (a) {
    try {
      if (a == this.j)
        a: {
          var b = g.Fm(this.j),
            c = this.j.B,
            d = this.j.getStatus();
          if (
            !(3 > b) &&
            (3 != b ||
              g.yS ||
              (this.j && (this.B.B || g.Hm(this.j) || g.Im(this.j))))
          ) {
            this.Na || 4 != b || 7 == c || (8 == c || 0 >= d ? t8(3) : t8(2));
            B8(this);
            var e = this.j.getStatus();
            this.Kb = e;
            b: if (Swb(this)) {
              var f = g.Im(this.j);
              a = "";
              var h = f.length,
                l = 4 == g.Fm(this.j);
              if (!this.B.C) {
                if ("undefined" === typeof TextDecoder) {
                  z8(this);
                  A8(this);
                  var m = "";
                  break b;
                }
                this.B.C = new g.Qa.TextDecoder();
              }
              for (c = 0; c < h; c++)
                (this.B.B = !0),
                  (a += this.B.C.decode(f[c], { stream: l && c == h - 1 }));
              f.splice(0, h);
              this.B.j += a;
              this.qa = 0;
              m = this.B.j;
            } else m = g.Hm(this.j);
            if ((this.C = 200 == e)) {
              if (this.jc && !this.Xa) {
                b: {
                  if (this.j) {
                    var n = g.Jm(this.j, "X-HTTP-Initial-Response");
                    if (n && !g.dc(n)) {
                      var p = n;
                      break b;
                    }
                  }
                  p = null;
                }
                if ((e = p)) (this.Xa = !0), Vwb(this, e);
                else {
                  this.C = !1;
                  this.K = 3;
                  u8(12);
                  z8(this);
                  A8(this);
                  break a;
                }
              }
              this.Fa
                ? (Wwb(this, b, m),
                  g.yS &&
                    this.C &&
                    3 == b &&
                    (this.kb.Ua(this.rb, "tick", this.t1), this.rb.start()))
                : Vwb(this, m);
              4 == b && z8(this);
              this.C &&
                !this.Na &&
                (4 == b ? Ywb(this.G, this) : ((this.C = !1), x8(this)));
            } else
              g.zfa(this.j),
                400 == e && 0 < m.indexOf("Unknown SID")
                  ? ((this.K = 3), u8(12))
                  : ((this.K = 0), u8(13)),
                z8(this),
                A8(this);
          }
        }
    } catch (q) {
    } finally {
    }
  };
  g.k.t1 = function () {
    if (this.j) {
      var a = g.Fm(this.j),
        b = g.Hm(this.j);
      this.qa < b.length &&
        (B8(this), Wwb(this, a, b), this.C && 4 != a && x8(this));
    }
  };
  g.k.cancel = function () {
    this.Na = !0;
    z8(this);
  };
  g.k.s1 = function () {
    this.ea = null;
    var a = Date.now();
    0 <= a - this.Qb
      ? (2 != this.Va && (t8(3), u8(17)), z8(this), (this.K = 2), A8(this))
      : Xwb(this, this.Qb - a);
  };
  g.k.getLastError = function () {
    return this.K;
  };
  g.k.MN = function () {
    return this.j;
  };
  gxb.prototype.cancel = function () {
    this.C = ixb(this);
    if (this.B) this.B.cancel(), (this.B = null);
    else if (this.j && 0 !== this.j.size) {
      for (var a = g.u(this.j.values()), b = a.next(); !b.done; b = a.next())
        b.value.cancel();
      this.j.clear();
    }
  };
  g.k = mxb.prototype;
  g.k.BS = 8;
  g.k.Jh = 1;
  g.k.connect = function (a, b, c, d) {
    u8(0);
    this.yc = a;
    this.Na = b || {};
    c && void 0 !== d && ((this.Na.OSID = c), (this.Na.OAID = d));
    this.Xa = this.Zc;
    this.Pa = cxb(this, null, this.yc);
    F8(this);
  };
  g.k.disconnect = function () {
    oxb(this);
    if (3 == this.Jh) {
      var a = this.fb++,
        b = this.Pa.clone();
      g.mo(b, "SID", this.D);
      g.mo(b, "RID", a);
      g.mo(b, "TYPE", "terminate");
      I8(this, b);
      a = new w8(this, this.D, a);
      a.Va = 2;
      a.S = a8(b.clone());
      b = !1;
      if (g.Qa.navigator && g.Qa.navigator.sendBeacon)
        try {
          b = g.Qa.navigator.sendBeacon(a.S.toString(), "");
        } catch (c) {}
      !b && g.Qa.Image && ((new Image().src = a.S), (b = !0));
      b || ((a.j = Rwb(a.G, null)), a.j.send(a.S));
      a.Ca = Date.now();
      x8(a);
    }
    uxb(this);
  };
  g.k.jh = function () {
    return 0 == this.Jh;
  };
  g.k.getState = function () {
    return this.Jh;
  };
  g.k.DS = function (a) {
    if (this.K)
      if (((this.K = null), 1 == this.Jh)) {
        if (!a) {
          this.fb = Math.floor(1e5 * Math.random());
          a = this.fb++;
          var b = new w8(this, "", a),
            c = this.ea;
          this.Qb && (c ? ((c = g.pd(c)), g.rd(c, this.Qb)) : (c = this.Qb));
          null !== this.S || this.xb || ((b.Pa = c), (c = null));
          var d;
          if (this.Ab)
            a: {
              for (var e = (d = 0); e < this.C.length; e++) {
                b: {
                  var f = this.C[e];
                  if (
                    "__data__" in f.map &&
                    ((f = f.map.__data__), "string" === typeof f)
                  ) {
                    f = f.length;
                    break b;
                  }
                  f = void 0;
                }
                if (void 0 === f) break;
                d += f;
                if (4096 < d) {
                  d = e;
                  break a;
                }
                if (4096 === d || e === this.C.length - 1) {
                  d = e + 1;
                  break a;
                }
              }
              d = 1e3;
            }
          else d = 1e3;
          d = rxb(this, b, d);
          e = this.Pa.clone();
          g.mo(e, "RID", a);
          g.mo(e, "CVER", 22);
          this.Fa && g.mo(e, "X-HTTP-Session-Id", this.Fa);
          I8(this, e);
          c &&
            (this.xb
              ? (d = "headers=" + g.we(g.xga(c)) + "&" + d)
              : this.S && g.qo(e, this.S, c));
          bxb(this.B, b);
          this.gg && g.mo(e, "TYPE", "init");
          this.Ab
            ? (g.mo(e, "$req", d),
              g.mo(e, "SID", "null"),
              (b.jc = !0),
              Qwb(b, e, null))
            : Qwb(b, e, d);
          this.Jh = 2;
        }
      } else
        3 == this.Jh &&
          (a ? sxb(this, a) : 0 == this.C.length || hxb(this.B) || sxb(this));
  };
  g.k.CS = function () {
    this.ma = null;
    txb(this);
    if (this.Vc && !(this.rb || null == this.j || 0 >= this.Wd)) {
      var a = 2 * this.Wd;
      this.Ia = v8((0, g.cb)(this.w7, this), a);
    }
  };
  g.k.w7 = function () {
    this.Ia &&
      ((this.Ia = null),
      (this.Xa = !1),
      (this.rb = !0),
      u8(10),
      D8(this),
      txb(this));
  };
  g.k.wP = function (a) {
    this.j == a && this.Vc && !this.rb && (nxb(this), (this.rb = !0), u8(11));
  };
  g.k.w1 = function () {
    null != this.qa && ((this.qa = null), D8(this), $wb(this), u8(19));
  };
  g.k.taa = function (a) {
    a ? u8(2) : u8(1);
  };
  g.k.isActive = function () {
    return !!this.G && this.G.isActive(this);
  };
  g.k = wxb.prototype;
  g.k.HS = function () {};
  g.k.GS = function () {};
  g.k.FS = function () {};
  g.k.ES = function () {};
  g.k.isActive = function () {
    return !0;
  };
  g.k.z1 = function () {};
  g.gb(K8, g.Gd);
  K8.prototype.open = function () {
    this.j.G = this.C;
    this.K && (this.j.Va = !0);
    this.j.connect(this.G, this.B || void 0);
  };
  K8.prototype.close = function () {
    this.j.disconnect();
  };
  K8.prototype.send = function (a) {
    var b = this.j;
    if ("string" === typeof a) {
      var c = {};
      c.__data__ = a;
      a = c;
    } else this.D && ((c = {}), (c.__data__ = g.ym(a)), (a = c));
    b.C.push(new fxb(b.Uf++, a));
    3 == b.Jh && F8(b);
  };
  K8.prototype.Ba = function () {
    this.j.G = null;
    delete this.C;
    this.j.disconnect();
    delete this.j;
    K8.Qf.Ba.call(this);
  };
  g.gb(yxb, Gwb);
  g.gb(zxb, Hwb);
  g.gb(J8, wxb);
  J8.prototype.HS = function () {
    this.j.dispatchEvent("m");
  };
  J8.prototype.GS = function (a) {
    this.j.dispatchEvent(new yxb(a));
  };
  J8.prototype.FS = function (a) {
    this.j.dispatchEvent(new zxb(a));
  };
  J8.prototype.ES = function () {
    this.j.dispatchEvent("n");
  };
  var M8 = new g.Gd();
  g.w(Cxb, g.xb);
  g.k = O8.prototype;
  g.k.Gu = null;
  g.k.fq = !1;
  g.k.Jx = null;
  g.k.ZK = null;
  g.k.Hx = null;
  g.k.Ix = null;
  g.k.Wr = null;
  g.k.Yr = null;
  g.k.Hu = null;
  g.k.ej = null;
  g.k.cG = 0;
  g.k.jo = null;
  g.k.bG = null;
  g.k.Xr = null;
  g.k.NB = -1;
  g.k.CZ = !0;
  g.k.Fu = !1;
  g.k.YK = 0;
  g.k.aG = null;
  var Hxb = {},
    Gxb = {};
  g.k = O8.prototype;
  g.k.setTimeout = function (a) {
    this.B = a;
  };
  g.k.B1 = function (a) {
    a = a.target;
    var b = this.aG;
    b && 3 == g.Fm(a) ? b.XK() : this.IS(a);
  };
  g.k.IS = function (a) {
    try {
      if (a == this.ej)
        a: {
          var b = g.Fm(this.ej),
            c = this.ej.B,
            d = this.ej.getStatus();
          if ((g.cf && !g.Nc(10)) || (g.Pc && !g.Mc("420+"))) {
            if (4 > b) break a;
          } else if (3 > b || (3 == b && !g.Hm(this.ej))) break a;
          this.Fu ||
            4 != b ||
            7 == c ||
            (8 == c || 0 >= d ? this.j.Nn(3) : this.j.Nn(2));
          Mxb(this);
          var e = this.ej.getStatus();
          this.NB = e;
          var f = g.Hm(this.ej);
          if ((this.fq = 200 == e)) {
            4 == b && Q8(this);
            if (this.Fa) {
              for (a = !0; !this.Fu && this.cG < f.length; ) {
                var h = Ixb(this, f);
                if (h == Gxb) {
                  4 == b && ((this.Xr = 4), N8(15), (a = !1));
                  break;
                } else if (h == Hxb) {
                  this.Xr = 4;
                  N8(16);
                  a = !1;
                  break;
                } else Nxb(this, h);
              }
              4 == b && 0 == f.length && ((this.Xr = 1), N8(17), (a = !1));
              this.fq = this.fq && a;
              a || (Q8(this), R8(this));
            } else Nxb(this, f);
            this.fq &&
              !this.Fu &&
              (4 == b ? this.j.dG(this) : ((this.fq = !1), P8(this)));
          } else
            400 == e && 0 < f.indexOf("Unknown SID")
              ? ((this.Xr = 3), N8(13))
              : ((this.Xr = 0), N8(14)),
              Q8(this),
              R8(this);
        }
    } catch (l) {
    } finally {
    }
  };
  g.k.H9 = function (a) {
    L8((0, g.cb)(this.G9, this, a), 0);
  };
  g.k.G9 = function (a) {
    this.Fu || (Mxb(this), Nxb(this, a), P8(this));
  };
  g.k.HY = function (a) {
    L8((0, g.cb)(this.F9, this, a), 0);
  };
  g.k.F9 = function (a) {
    this.Fu || (Q8(this), (this.fq = a), this.j.dG(this), this.j.Nn(4));
  };
  g.k.cancel = function () {
    this.Fu = !0;
    Q8(this);
  };
  g.k.A1 = function () {
    this.Jx = null;
    var a = Date.now();
    0 <= a - this.ZK
      ? (2 != this.Ix && this.j.Nn(3),
        Q8(this),
        (this.Xr = 2),
        N8(18),
        R8(this))
      : Lxb(this, this.ZK - a);
  };
  g.k.getLastError = function () {
    return this.Xr;
  };
  g.k = Qxb.prototype;
  g.k.bL = null;
  g.k.Kj = null;
  g.k.MJ = !1;
  g.k.WZ = null;
  g.k.pH = null;
  g.k.IO = null;
  g.k.cL = null;
  g.k.Rl = null;
  g.k.gq = -1;
  g.k.OB = null;
  g.k.uC = null;
  g.k.connect = function (a) {
    this.cL = a;
    a = U8(this.j, null, this.cL);
    N8(3);
    this.WZ = Date.now();
    var b = this.j.ea;
    null != b
      ? ((this.OB = b[0]),
        (this.uC = b[1])
          ? ((this.Rl = 1), Rxb(this))
          : ((this.Rl = 2), Sxb(this)))
      : (b8(a, "MODE", "init"),
        (this.Kj = new O8(this)),
        (this.Kj.Gu = this.bL),
        Fxb(this.Kj, a, !1, null, !0),
        (this.Rl = 0));
  };
  g.k.Y3 = function (a) {
    if (a) (this.Rl = 2), Sxb(this);
    else {
      N8(4);
      var b = this.j;
      b.Co = b.Hs.gq;
      Y8(b, 9);
    }
    a && this.Nn(2);
  };
  g.k.aL = function (a) {
    return this.j.aL(a);
  };
  g.k.abort = function () {
    this.Kj && (this.Kj.cancel(), (this.Kj = null));
    this.gq = -1;
  };
  g.k.jh = function () {
    return !1;
  };
  g.k.JS = function (a, b) {
    this.gq = a.NB;
    if (0 == this.Rl)
      if (b) {
        try {
          var c = this.B.parse(b);
        } catch (d) {
          a = this.j;
          a.Co = this.gq;
          Y8(a, 2);
          return;
        }
        this.OB = c[0];
        this.uC = c[1];
      } else (a = this.j), (a.Co = this.gq), Y8(a, 2);
    else if (2 == this.Rl)
      if (this.MJ) N8(7), (this.IO = Date.now());
      else if ("11111" == b) {
        if (
          (N8(6),
          (this.MJ = !0),
          (this.pH = Date.now()),
          (a = this.pH - this.WZ),
          !g.cf || g.Nc(10) || 500 > a)
        )
          (this.gq = 200), this.Kj.cancel(), N8(12), V8(this.j, this, !0);
      } else N8(8), (this.pH = this.IO = Date.now()), (this.MJ = !1);
  };
  g.k.dG = function () {
    this.gq = this.Kj.NB;
    if (this.Kj.fq)
      0 == this.Rl
        ? this.uC
          ? ((this.Rl = 1), Rxb(this))
          : ((this.Rl = 2), Sxb(this))
        : 2 == this.Rl &&
          ((!g.cf || g.Nc(10) ? !this.MJ : 200 > this.IO - this.pH)
            ? (N8(11), V8(this.j, this, !1))
            : (N8(12), V8(this.j, this, !0)));
    else {
      0 == this.Rl ? N8(9) : 2 == this.Rl && N8(10);
      var a = this.j;
      this.Kj.getLastError();
      a.Co = this.gq;
      Y8(a, 2);
    }
  };
  g.k.PB = function () {
    return this.j.PB();
  };
  g.k.isActive = function () {
    return this.j.isActive();
  };
  g.k.Nn = function (a) {
    this.j.Nn(a);
  };
  g.k = Txb.prototype;
  g.k.Bo = null;
  g.k.QB = null;
  g.k.Tj = null;
  g.k.Ug = null;
  g.k.dL = null;
  g.k.eG = null;
  g.k.KS = null;
  g.k.fG = null;
  g.k.RB = 0;
  g.k.D1 = 0;
  g.k.Mi = null;
  g.k.Zr = null;
  g.k.hq = null;
  g.k.Ju = null;
  g.k.Hs = null;
  g.k.BK = null;
  g.k.Mx = -1;
  g.k.LS = -1;
  g.k.Co = -1;
  g.k.Lx = 0;
  g.k.Kx = 0;
  g.k.Iu = 8;
  g.gb(Vxb, g.xb);
  g.gb(Wxb, g.xb);
  g.k = Txb.prototype;
  g.k.connect = function (a, b, c, d, e) {
    N8(0);
    this.dL = b;
    this.QB = c || {};
    d && void 0 !== e && ((this.QB.OSID = d), (this.QB.OAID = e));
    this.ma ? (L8((0, g.cb)(this.eV, this, a), 100), Yxb(this)) : this.eV(a);
  };
  g.k.disconnect = function () {
    Zxb(this);
    if (3 == this.j) {
      var a = this.RB++,
        b = this.eG.clone();
      g.mo(b, "SID", this.D);
      g.mo(b, "RID", a);
      g.mo(b, "TYPE", "terminate");
      X8(this, b);
      a = new O8(this, this.D, a);
      a.Ix = 2;
      a.Wr = a8(b.clone());
      new Image().src = a.Wr.toString();
      a.Hx = Date.now();
      P8(a);
    }
    iyb(this);
  };
  g.k.eV = function (a) {
    this.Hs = new Qxb(this);
    this.Hs.bL = this.Bo;
    this.Hs.B = this.G;
    this.Hs.connect(a);
  };
  g.k.jh = function () {
    return 0 == this.j;
  };
  g.k.getState = function () {
    return this.j;
  };
  g.k.NS = function (a) {
    this.Zr = null;
    dyb(this, a);
  };
  g.k.MS = function () {
    this.hq = null;
    this.Ug = new O8(this, this.D, "rpc", this.S);
    this.Ug.Gu = this.Bo;
    this.Ug.YK = 0;
    var a = this.KS.clone();
    g.mo(a, "RID", "rpc");
    g.mo(a, "SID", this.D);
    g.mo(a, "CI", this.BK ? "0" : "1");
    g.mo(a, "AID", this.Mx);
    X8(this, a);
    if (!g.cf || g.Nc(10))
      g.mo(a, "TYPE", "xmlhttp"), Fxb(this.Ug, a, !0, this.fG, !1);
    else {
      g.mo(a, "TYPE", "html");
      var b = this.Ug,
        c = !!this.fG;
      b.Ix = 3;
      b.Wr = a8(a.clone());
      Kxb(b, c);
    }
  };
  g.k.JS = function (a, b) {
    if (0 != this.j && (this.Ug == a || this.Tj == a))
      if (((this.Co = a.NB), this.Tj == a && 3 == this.j))
        if (7 < this.Iu) {
          try {
            var c = this.G.parse(b);
          } catch (d) {
            c = null;
          }
          if (Array.isArray(c) && 3 == c.length)
            if (((a = c), 0 == a[0]))
              a: {
                if (!this.hq) {
                  if (this.Ug)
                    if (this.Ug.Hx + 3e3 < this.Tj.Hx)
                      W8(this), this.Ug.cancel(), (this.Ug = null);
                    else break a;
                  gyb(this);
                  N8(19);
                }
              }
            else
              (this.LS = a[1]),
                0 < this.LS - this.Mx &&
                  37500 > a[2] &&
                  this.BK &&
                  0 == this.Kx &&
                  !this.Ju &&
                  (this.Ju = L8((0, g.cb)(this.E1, this), 6e3));
          else Y8(this, 11);
        } else null != b && Y8(this, 11);
      else if ((this.Ug == a && W8(this), !g.dc(b)))
        for (a = this.G.parse(b), b = 0; b < a.length; b++)
          (c = a[b]),
            (this.Mx = c[0]),
            (c = c[1]),
            2 == this.j
              ? "c" == c[0]
                ? ((this.D = c[1]),
                  (this.fG = c[2]),
                  (c = c[3]),
                  null != c ? (this.Iu = c) : (this.Iu = 6),
                  (this.j = 3),
                  this.Mi && this.Mi.QS(),
                  (this.KS = U8(this, this.PB() ? this.fG : null, this.dL)),
                  eyb(this))
                : "stop" == c[0] && Y8(this, 7)
              : 3 == this.j &&
                ("stop" == c[0]
                  ? Y8(this, 7)
                  : "noop" != c[0] && this.Mi && this.Mi.PS(c),
                (this.Kx = 0));
  };
  g.k.E1 = function () {
    null != this.Ju &&
      ((this.Ju = null), this.Ug.cancel(), (this.Ug = null), gyb(this), N8(20));
  };
  g.k.dG = function (a) {
    if (this.Ug == a) {
      W8(this);
      this.Ug = null;
      var b = 2;
    } else if (this.Tj == a) (this.Tj = null), (b = 1);
    else return;
    this.Co = a.NB;
    if (0 != this.j)
      if (a.fq)
        if (1 == b) {
          b = Date.now() - a.Hx;
          var c = M8;
          c.dispatchEvent(new Vxb(c, a.Hu ? a.Hu.length : 0, b, this.Lx));
          Xxb(this);
          this.C.length = 0;
        } else eyb(this);
      else {
        c = a.getLastError();
        var d;
        if (!(d = 3 == c || 7 == c || (0 == c && 0 < this.Co))) {
          if ((d = 1 == b))
            this.Tj || this.Zr || 1 == this.j || 2 <= this.Lx
              ? (d = !1)
              : ((this.Zr = L8(
                  (0, g.cb)(this.NS, this, a),
                  fyb(this, this.Lx)
                )),
                this.Lx++,
                (d = !0));
          d = !(d || (2 == b && gyb(this)));
        }
        if (d)
          switch (c) {
            case 1:
              Y8(this, 5);
              break;
            case 4:
              Y8(this, 10);
              break;
            case 3:
              Y8(this, 6);
              break;
            case 7:
              Y8(this, 12);
              break;
            default:
              Y8(this, 2);
          }
      }
  };
  g.k.C1 = function (a) {
    if (!g.Db(arguments, this.j))
      throw Error("Unexpected channel state: " + this.j);
  };
  g.k.saa = function (a) {
    a ? N8(2) : (N8(1), hyb(this, 8));
  };
  g.k.aL = function (a) {
    if (a) throw Error("Can't create secondary domain capable XhrIo object.");
    a = new g.Cm();
    a.K = !1;
    return a;
  };
  g.k.isActive = function () {
    return !!this.Mi && this.Mi.isActive(this);
  };
  g.k.Nn = function (a) {
    var b = M8;
    b.dispatchEvent(new Wxb(b, a));
  };
  g.k.PB = function () {
    return !(!g.cf || g.Nc(10));
  };
  g.k = jyb.prototype;
  g.k.QS = function () {};
  g.k.PS = function () {};
  g.k.OS = function () {};
  g.k.eL = function () {};
  g.k.RS = function () {
    return {};
  };
  g.k.isActive = function () {
    return !0;
  };
  g.k = kyb.prototype;
  g.k.isEmpty = function () {
    return 0 === this.j.length && 0 === this.B.length;
  };
  g.k.clear = function () {
    this.j = [];
    this.B = [];
  };
  g.k.contains = function (a) {
    return g.Db(this.j, a) || g.Db(this.B, a);
  };
  g.k.remove = function (a) {
    var b = this.j;
    var c = (0, g.Qcb)(b, a);
    0 <= c ? (g.Eb(b, c), (b = !0)) : (b = !1);
    return b || g.Fb(this.B, a);
  };
  g.k.mm = function () {
    for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]);
    var c = this.B.length;
    for (b = 0; b < c; ++b) a.push(this.B[b]);
    return a;
  };
  g.w(lyb, g.xb);
  g.w(myb, g.xb);
  g.gb(Z8, g.J);
  g.k = Z8.prototype;
  g.k.z9 = function () {
    this.Ui = Math.min(3e5, 2 * this.Ui);
    this.C();
    this.B && this.start();
  };
  g.k.start = function () {
    var a = this.Ui + 15e3 * Math.random();
    g.gu(this.j, a);
    this.B = Date.now() + a;
  };
  g.k.stop = function () {
    this.j.stop();
    this.B = 0;
  };
  g.k.isActive = function () {
    return this.j.isActive();
  };
  g.k.reset = function () {
    this.j.stop();
    this.Ui = 5e3;
  };
  g.gb(oyb, jyb);
  g.k = oyb.prototype;
  g.k.subscribe = function (a, b, c) {
    return this.C.subscribe(a, b, c);
  };
  g.k.unsubscribe = function (a, b, c) {
    return this.C.unsubscribe(a, b, c);
  };
  g.k.Yh = function (a) {
    return this.C.Yh(a);
  };
  g.k.ra = function (a, b) {
    return this.C.ra.apply(this.C, arguments);
  };
  g.k.dispose = function () {
    this.qa ||
      ((this.qa = !0),
      g.sb(this.C),
      this.disconnect(),
      g.sb(this.B),
      (this.B = null),
      (this.va = function () {
        return "";
      }));
  };
  g.k.isDisposed = function () {
    return this.qa;
  };
  g.k.connect = function (a, b, c) {
    if (!this.j || 2 != this.j.getState()) {
      this.ea = "";
      this.B.stop();
      this.K = a || null;
      this.G = b || 0;
      a = this.Ca + "/test";
      b = this.Ca + "/bind";
      var d = new Txb(
          c ? c.firstTestResults : null,
          c ? c.secondTestResults : null,
          this.Va
        ),
        e = this.j;
      e && (e.Mi = null);
      d.Mi = this;
      this.j = d;
      pyb(this);
      if (this.j) {
        d = g.QB("ID_TOKEN");
        var f = this.j.Bo || {};
        d
          ? (f["x-youtube-identity-token"] = d)
          : delete f["x-youtube-identity-token"];
        this.j.Bo = f;
      }
      e
        ? ((3 != e.getState() && 0 == ayb(e)) || e.getState(),
          this.j.connect(a, b, this.S, e.D, e.Mx))
        : c
        ? this.j.connect(a, b, this.S, c.sessionId, c.arrayId)
        : this.j.connect(a, b, this.S);
    }
  };
  g.k.disconnect = function (a) {
    this.ma = a || 0;
    this.B.stop();
    pyb(this);
    this.j && (3 == this.j.getState() && dyb(this.j), this.j.disconnect());
    this.ma = 0;
  };
  g.k.sendMessage = function (a, b) {
    a = { _sc: a };
    b && g.rd(a, b);
    this.B.isActive() || 2 == (this.j ? this.j.getState() : 0)
      ? this.D.push(a)
      : this.Hz() && (pyb(this), $xb(this.j, a));
  };
  g.k.QS = function () {
    this.B.reset();
    this.K = null;
    this.G = 0;
    if (this.D.length) {
      var a = this.D;
      this.D = [];
      for (var b = 0, c = a.length; b < c; ++b) $xb(this.j, a[b]);
    }
    this.ra("handlerOpened");
    Nvb(this.Pa, "BROWSER_CHANNEL");
  };
  g.k.OS = function (a) {
    var b = 2 == a && 401 == this.j.Co;
    4 == a || b || this.B.start();
    this.ra("handlerError", a, b);
    Tvb(this.Fa, "BROWSER_CHANNEL");
  };
  g.k.eL = function (a, b) {
    if (!this.B.isActive()) this.ra("handlerClosed");
    else if (b)
      for (var c = 0, d = b.length; c < d; ++c) {
        var e = b[c].map;
        e && this.D.push(e);
      }
    Pvb(this.Ia, "BROWSER_CHANNEL");
    a &&
      this.eb.j.fL(
        "/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",
        a.length
      );
    b &&
      this.fb.j.fL(
        "/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",
        b.length
      );
  };
  g.k.RS = function () {
    var a = { v: 2 };
    this.ea && (a.gsessionid = this.ea);
    0 != this.G && (a.ui = "" + this.G);
    0 != this.ma && (a.ui = "" + this.ma);
    this.K && g.rd(a, this.K);
    return a;
  };
  g.k.PS = function (a) {
    "S" == a[0]
      ? (this.ea = a[1])
      : "gracefulReconnect" == a[0]
      ? (this.B.start(), this.j.disconnect())
      : this.ra("handlerMessage", new nyb(a[0], a[1]));
    Rvb(this.Na, "BROWSER_CHANNEL");
  };
  g.k.Hz = function () {
    return !!this.j && 3 == this.j.getState();
  };
  g.k.Fr = function (a) {
    (this.S.loungeIdToken = a) || this.B.stop();
    if (this.Xa && this.j) {
      var b = this.j.Bo || {};
      a
        ? (b["X-YouTube-LoungeId-Token"] = a)
        : delete b["X-YouTube-LoungeId-Token"];
      this.j.Bo = b;
    }
  };
  g.k.Vs = function () {
    return this.S.id;
  };
  g.k.jt = function () {
    return this.B.isActive() ? this.B.B - Date.now() : NaN;
  };
  g.k.Lw = function () {
    var a = this.B;
    g.hu(a.j);
    a.start();
  };
  g.k.K$ = function () {
    this.B.isActive();
    0 == ayb(this.j) && this.connect(this.K, this.G);
  };
  $8.prototype.D = function (a, b, c, d) {
    b ? a(d) : a({ text: c.responseText });
  };
  $8.prototype.C = function (a, b) {
    a(Error("Request error: " + b.status));
  };
  $8.prototype.G = function (a) {
    a(Error("request timed out"));
  };
  g.w(ryb, g.Gd);
  g.k = ryb.prototype;
  g.k.connect = function (a, b, c) {
    this.Hd.connect(a, b, c);
  };
  g.k.disconnect = function (a) {
    this.Hd.disconnect(a);
  };
  g.k.Lw = function () {
    this.Hd.Lw();
  };
  g.k.Vs = function () {
    return this.Hd.Vs();
  };
  g.k.jt = function () {
    return this.Hd.jt();
  };
  g.k.Hz = function () {
    return this.Hd.Hz();
  };
  g.k.H1 = function () {
    this.dispatchEvent("channelOpened");
    var a = this.Hd,
      b = this.j;
    g.fD("yt-remote-session-browser-channel", {
      firstTestResults: [""],
      secondTestResults: !a.j.BK,
      sessionId: a.j.D,
      arrayId: a.j.Mx,
    });
    g.fD("yt-remote-session-screen-id", b);
    a = j8();
    b = k8();
    g.Db(a, b) || a.push(b);
    jwb(a);
    lwb();
  };
  g.k.F1 = function () {
    this.dispatchEvent("channelClosed");
  };
  g.k.G1 = function (a) {
    this.dispatchEvent(new lyb(a));
  };
  g.k.onError = function (a) {
    this.dispatchEvent(new myb(a ? 1 : 0));
  };
  g.k.sendMessage = function (a, b) {
    this.Hd.sendMessage(a, b);
  };
  g.k.Fr = function (a) {
    this.Hd.Fr(a);
  };
  g.k.dispose = function () {
    this.Hd.dispose();
  };
  g.k = syb.prototype;
  g.k.connect = function (a, b) {
    a = void 0 === a ? {} : a;
    b = void 0 === b ? 0 : b;
    2 !== this.K &&
      (this.C.stop(),
      (this.ma = a),
      (this.S = b),
      uyb(this),
      (a = g.QB("ID_TOKEN"))
        ? (this.D["x-youtube-identity-token"] = a)
        : delete this.D["x-youtube-identity-token"],
      this.j &&
        ((this.B.device = this.j.device),
        (this.B.name = this.j.name),
        (this.B.app = this.j.app),
        (this.B.id = this.j.id),
        this.j.O6 && (this.B.mdxVersion = "" + this.j.O6),
        this.j.theme && (this.B.theme = this.j.theme),
        this.j.capabilities && (this.B.capabilities = this.j.capabilities),
        this.j.q4 && (this.B.cst = this.j.q4),
        this.j.authuser && (this.B.authuser = this.j.authuser),
        this.j.pageId && (this.B.pageId = this.j.pageId)),
      0 !== this.S ? (this.B.ui = "" + this.S) : delete this.B.ui,
      Object.assign(this.B, this.ma),
      (this.channel = new K8(this.pathPrefix, {
        d6: "gsessionid",
        S6: this.D,
        T6: this.B,
      })),
      this.channel.open(),
      (this.K = 2),
      tyb(this));
  };
  g.k.disconnect = function (a) {
    this.ea = void 0 === a ? 0 : a;
    this.C.stop();
    uyb(this);
    this.channel &&
      (0 !== this.ea ? (this.B.ui = "" + this.ea) : delete this.B.ui,
      this.channel.close());
    this.ea = 0;
  };
  g.k.jt = function () {
    return this.C.isActive() ? this.C.B - Date.now() : NaN;
  };
  g.k.Lw = function () {
    var a = this.C;
    g.hu(a.j);
    a.start();
  };
  g.k.sendMessage = function (a, b) {
    this.channel &&
      (uyb(this), (a = Object.assign({}, { _sc: a }, b)), this.channel.send(a));
  };
  g.k.Fr = function (a) {
    a || this.C.stop();
    a
      ? (this.D["X-YouTube-LoungeId-Token"] = a)
      : delete this.D["X-YouTube-LoungeId-Token"];
  };
  g.k.Vs = function () {
    return this.j ? this.j.id : "";
  };
  g.k.ra = function (a) {
    return this.G.ra.apply(this.G, [a].concat(g.pa(g.Ja.apply(1, arguments))));
  };
  g.k.subscribe = function (a, b, c) {
    return this.G.subscribe(a, b, c);
  };
  g.k.unsubscribe = function (a, b, c) {
    return this.G.unsubscribe(a, b, c);
  };
  g.k.Yh = function (a) {
    return this.G.Yh(a);
  };
  g.k.dispose = function () {
    this.qa ||
      ((this.qa = !0),
      g.sb(this.G),
      this.disconnect(),
      g.sb(this.C),
      (this.Ca = function () {
        return "";
      }));
  };
  g.k.isDisposed = function () {
    return this.qa;
  };
  g.w(vyb, g.Gd);
  g.k = vyb.prototype;
  g.k.connect = function (a, b) {
    this.j.connect(a, b);
  };
  g.k.disconnect = function (a) {
    this.j.disconnect(a);
  };
  g.k.Lw = function () {
    this.j.Lw();
  };
  g.k.Vs = function () {
    return this.j.Vs();
  };
  g.k.jt = function () {
    return this.j.jt();
  };
  g.k.Hz = function () {
    return 3 === this.j.K;
  };
  g.k.K1 = function () {
    this.dispatchEvent("channelOpened");
  };
  g.k.I1 = function () {
    this.dispatchEvent("channelClosed");
  };
  g.k.J1 = function (a) {
    this.dispatchEvent(new lyb(a));
  };
  g.k.onError = function () {
    this.dispatchEvent(new myb(401 === this.j.Og ? 1 : 0));
  };
  g.k.sendMessage = function (a, b) {
    this.j.sendMessage(a, b);
  };
  g.k.Fr = function (a) {
    this.j.Fr(a);
  };
  g.k.dispose = function () {
    this.j.dispose();
  };
  var Dyb = Date.now(),
    b9 = null,
    f9 = Array(50),
    e9 = -1,
    g9 = !1;
  g.gb(h9, g.nG);
  h9.prototype.Pk = function () {
    return this.screens;
  };
  h9.prototype.contains = function (a) {
    return !!gwb(this.screens, a);
  };
  h9.prototype.get = function (a) {
    return a ? i8(this.screens, a) : null;
  };
  h9.prototype.info = function (a) {
    c9(this.K, a);
  };
  g.w(Hyb, g.nG);
  g.k = Hyb.prototype;
  g.k.start = function () {
    !this.j && isNaN(this.qd) && this.YY();
  };
  g.k.stop = function () {
    this.j && (this.j.abort(), (this.j = null));
    isNaN(this.qd) || (g.lC(this.qd), (this.qd = NaN));
  };
  g.k.Ba = function () {
    this.stop();
    g.nG.prototype.Ba.call(this);
  };
  g.k.YY = function () {
    this.qd = NaN;
    this.j = g.oC(a9(this.C, "/pairing/get_screen"), {
      method: "POST",
      postParams: { pairing_code: this.S },
      timeout: 5e3,
      onSuccess: (0, g.cb)(this.M1, this),
      onError: (0, g.cb)(this.L1, this),
      onTimeout: (0, g.cb)(this.N1, this),
    });
  };
  g.k.M1 = function (a, b) {
    this.j = null;
    a = b.screen || {};
    a.dialId = this.D;
    a.name = this.K;
    b = -1;
    this.G &&
      a.shortLivedLoungeToken &&
      a.shortLivedLoungeToken.value &&
      a.shortLivedLoungeToken.refreshIntervalMs &&
      ((a.screenIdType = "shortLived"),
      (a.loungeToken = a.shortLivedLoungeToken.value),
      (b = a.shortLivedLoungeToken.refreshIntervalMs));
    this.ra("pairingComplete", new f8(a), b);
  };
  g.k.L1 = function (a) {
    this.j = null;
    a.status && 404 == a.status
      ? this.B >= BAb.length
        ? this.ra("pairingFailed", Error("DIAL polling timed out"))
        : ((a = BAb[this.B]),
          (this.qd = g.jC((0, g.cb)(this.YY, this), a)),
          this.B++)
      : this.ra("pairingFailed", Error("Server error " + a.status));
  };
  g.k.N1 = function () {
    this.j = null;
    this.ra("pairingFailed", Error("Server not responding"));
  };
  var BAb = [2e3, 2e3, 1e3, 1e3, 1e3, 2e3, 2e3, 5e3, 5e3, 1e4];
  g.gb(j9, h9);
  g.k = j9.prototype;
  g.k.start = function () {
    i9(this) && this.ra("screenChange");
    !g.gD("yt-remote-lounge-token-expiration") && Iyb(this);
    g.lC(this.j);
    this.j = g.jC((0, g.cb)(this.start, this), 1e4);
  };
  g.k.add = function (a, b) {
    i9(this);
    Eyb(this, a);
    k9(this, !1);
    this.ra("screenChange");
    b(a);
    a.token || Iyb(this);
  };
  g.k.remove = function (a, b) {
    var c = i9(this);
    Gyb(this, a) && (k9(this, !1), (c = !0));
    b(a);
    c && this.ra("screenChange");
  };
  g.k.AK = function (a, b, c, d) {
    var e = i9(this),
      f = this.get(a.id);
    f
      ? (f.name != b && ((f.name = b), k9(this, !1), (e = !0)), c(a))
      : d(Error("no such local screen."));
    e && this.ra("screenChange");
  };
  g.k.Ba = function () {
    g.lC(this.j);
    j9.Qf.Ba.call(this);
  };
  g.k.B5 = function (a) {
    i9(this);
    var b = this.screens.length;
    a = (a && a.screens) || [];
    for (var c = 0, d = a.length; c < d; ++c) {
      var e = a[c],
        f = this.get(e.screenId);
      f && ((f.token = e.loungeToken), --b);
    }
    k9(this, !b);
    b && c9(this.K, "Missed " + b + " lounge tokens.");
  };
  g.k.A5 = function (a) {
    c9(this.K, "Requesting lounge tokens failed: " + a);
  };
  g.w(Kyb, g.nG);
  g.k = Kyb.prototype;
  g.k.start = function () {
    var a = parseInt(g.gD("yt-remote-fast-check-period") || "0", 10);
    (this.D = g.eb() - 144e5 < a ? 0 : a)
      ? l9(this)
      : ((this.D = g.eb() + 3e5),
        g.fD("yt-remote-fast-check-period", this.D),
        this.KQ());
  };
  g.k.isEmpty = function () {
    return g.id(this.j);
  };
  g.k.update = function () {
    Jyb("Updating availability on schedule.");
    var a = this.K(),
      b = g.Uc(
        this.j,
        function (c, d) {
          return c && !!i8(a, d);
        },
        this
      );
    Nyb(this, b);
  };
  g.k.Ba = function () {
    g.lC(this.C);
    this.C = NaN;
    this.B && (this.B.abort(), (this.B = null));
    g.nG.prototype.Ba.call(this);
  };
  g.k.KQ = function () {
    g.lC(this.C);
    this.C = NaN;
    this.B && this.B.abort();
    var a = Oyb(this);
    if (Ivb(a)) {
      var b = a9(this.G, "/pairing/get_screen_availability");
      this.B = qyb(
        this.G,
        b,
        { lounge_token: g.ed(a).join(",") },
        (0, g.cb)(this.f9, this, a),
        (0, g.cb)(this.e9, this)
      );
    } else Nyb(this, {}), l9(this);
  };
  g.k.f9 = function (a, b) {
    this.B = null;
    var c = g.ed(Oyb(this));
    if (g.Wb(c, g.ed(a))) {
      b = b.screens || [];
      c = {};
      for (var d = b.length, e = 0; e < d; ++e)
        c[a[b[e].loungeToken]] = "online" == b[e].status;
      Nyb(this, c);
      l9(this);
    } else this.eg("Changing Screen set during request."), this.KQ();
  };
  g.k.e9 = function (a) {
    this.eg("Screen availability failed: " + a);
    this.B = null;
    l9(this);
  };
  g.k.eg = function (a) {
    c9("OnlineScreenService", a);
  };
  g.gb(m9, h9);
  g.k = m9.prototype;
  g.k.start = function () {
    this.B.start();
    this.j.start();
    this.screens.length &&
      (this.ra("screenChange"),
      this.j.isEmpty() || this.ra("onlineScreenChange"));
  };
  g.k.add = function (a, b, c) {
    this.B.add(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.B.remove(a, b, c);
    this.j.update();
  };
  g.k.AK = function (a, b, c, d) {
    this.B.contains(a)
      ? this.B.AK(a, b, c, d)
      : ((a = "Updating name of unknown screen: " + a.name),
        c9(this.K, a),
        d(Error(a)));
  };
  g.k.Pk = function (a) {
    return a
      ? this.screens
      : g.Hb(
          this.screens,
          g.zs(
            this.C,
            function (b) {
              return !this.contains(b);
            },
            this
          )
        );
  };
  g.k.SS = function () {
    return g.zs(
      this.Pk(!0),
      function (a) {
        return !!this.j.j[a.id];
      },
      this
    );
  };
  g.k.US = function (a, b, c, d, e, f) {
    var h = this;
    this.info("getDialScreenByPairingCode " + a + " / " + b);
    var l = new Hyb(this.D, a, b, c, d);
    l.subscribe("pairingComplete", function (m, n) {
      g.sb(l);
      e(n9(h, m), n);
    });
    l.subscribe("pairingFailed", function (m) {
      g.sb(l);
      f(m);
    });
    l.start();
    return (0, g.cb)(l.stop, l);
  };
  g.k.O1 = function (a, b, c, d) {
    g.oC(a9(this.D, "/pairing/get_screen"), {
      method: "POST",
      postParams: { pairing_code: a },
      timeout: 5e3,
      onSuccess: (0, g.cb)(function (e, f) {
        e = new f8(f.screen || {});
        if (!e.name || Syb(this, e.name)) {
          a: {
            f = e.name;
            for (var h = 2, l = b(f, h); Syb(this, l); ) {
              h++;
              if (20 < h) break a;
              l = b(f, h);
            }
            f = l;
          }
          e.name = f;
        }
        c(n9(this, e));
      }, this),
      onError: (0, g.cb)(function (e) {
        d(Error("pairing request failed: " + e.status));
      }, this),
      onTimeout: (0, g.cb)(function () {
        d(Error("pairing request timed out."));
      }, this),
    });
  };
  g.k.Ba = function () {
    g.sb(this.B);
    g.sb(this.j);
    m9.Qf.Ba.call(this);
  };
  g.k.L5 = function () {
    Uyb(this);
    this.ra("screenChange");
    this.j.update();
  };
  m9.prototype.dispose = m9.prototype.dispose;
  g.gb(o9, g.nG);
  g.k = o9.prototype;
  g.k.Aj = function (a) {
    this.isDisposed() ||
      (a && (q9(this, "" + a), this.ra("sessionFailed")),
      (this.j = null),
      this.ra("sessionScreen", null));
  };
  g.k.info = function (a) {
    c9(this.Fa, a);
  };
  g.k.VS = function () {
    return null;
  };
  g.k.aR = function (a) {
    var b = this.B;
    a
      ? ((b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, [])),
        (b.displayStatus.showStop = !0))
      : (b.displayStatus = null);
    chrome.cast.setReceiverDisplayStatus(
      b,
      (0, g.cb)(function () {
        this.info("Updated receiver status for " + b.friendlyName + ": " + a);
      }, this),
      (0, g.cb)(function () {
        q9(this, "Failed to update receiver status for: " + b.friendlyName);
      }, this)
    );
  };
  g.k.Ba = function () {
    this.aR("");
    o9.Qf.Ba.call(this);
  };
  g.w(r9, o9);
  g.k = r9.prototype;
  g.k.ZQ = function (a) {
    if (this.C) {
      if (this.C == a) return;
      q9(this, "Overriding cast session with new session object");
      fzb(this);
      this.Ca = !1;
      this.ea = "unknown";
      this.C.removeUpdateListener(this.va);
      this.C.removeMessageListener(
        "urn:x-cast:com.google.youtube.mdx",
        this.Ia
      );
    }
    this.C = a;
    this.C.addUpdateListener(this.va);
    this.C.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ia);
    azb(this, "getMdxSessionStatus");
  };
  g.k.Sz = function (a) {
    this.info("launchWithParams no-op for Cast: " + g.ym(a));
  };
  g.k.stop = function () {
    this.C
      ? this.C.stop(
          (0, g.cb)(function () {
            this.Aj();
          }, this),
          (0, g.cb)(function () {
            this.Aj(Error("Failed to stop receiver app."));
          }, this)
        )
      : this.Aj(Error("Stopping cast device without session."));
  };
  g.k.aR = function () {};
  g.k.Ba = function () {
    this.info("disposeInternal");
    fzb(this);
    this.C &&
      (this.C.removeUpdateListener(this.va),
      this.C.removeMessageListener(
        "urn:x-cast:com.google.youtube.mdx",
        this.Ia
      ));
    this.C = null;
    o9.prototype.Ba.call(this);
  };
  g.k.P9 = function (a, b) {
    if (!this.isDisposed())
      if (b)
        if (((b = c8(b)), g.Xa(b)))
          switch (
            ((a = "" + b.type),
            (b = b.data || {}),
            this.info("onYoutubeMessage_: " + a + " " + g.ym(b)),
            a)
          ) {
            case "mdxSessionStatus":
              Yyb(this, b);
              break;
            case "loungeToken":
              bzb(this, b);
              break;
            default:
              q9(this, "Unknown youtube message: " + a);
          }
        else q9(this, "Unable to parse message.");
      else q9(this, "No data in message.");
  };
  g.k.gW = function (a, b, c, d) {
    g.lC(this.ma);
    this.ma = 0;
    Ryb(
      this.D,
      this.B.label,
      a,
      this.B.friendlyName,
      (0, g.cb)(function (e) {
        e
          ? b(e)
          : 0 <= d
          ? (q9(
              this,
              "Screen " + a + " appears to be offline. " + d + " retries left."
            ),
            (this.ma = g.jC((0, g.cb)(this.gW, this, a, b, c, d - 1), 300)))
          : c(Error("Unable to fetch screen."));
      }, this),
      c
    );
  };
  g.k.VS = function () {
    return this.C;
  };
  g.k.P1 = function (a) {
    this.isDisposed() || a || (q9(this, "Cast session died."), this.Aj());
  };
  g.w(s9, o9);
  g.k = s9.prototype;
  g.k.ZQ = function (a) {
    this.C = a;
    this.C.addUpdateListener(this.Na);
  };
  g.k.Sz = function (a) {
    this.Pa = a;
    this.qa();
  };
  g.k.stop = function () {
    nzb(this);
    this.C
      ? this.C.stop(
          (0, g.cb)(this.Aj, this, null),
          (0, g.cb)(this.Aj, this, "Failed to stop DIAL device.")
        )
      : this.Aj();
  };
  g.k.Ba = function () {
    nzb(this);
    this.C && this.C.removeUpdateListener(this.Na);
    this.C = null;
    o9.prototype.Ba.call(this);
  };
  g.k.Q1 = function (a) {
    this.isDisposed() ||
      a ||
      (q9(this, "DIAL session died."),
      this.G(),
      (this.G = function () {}),
      this.Aj());
  };
  g.w(v9, o9);
  v9.prototype.stop = function () {
    this.Aj();
  };
  v9.prototype.ZQ = function () {};
  v9.prototype.Sz = function () {
    g.lC(this.C);
    this.C = NaN;
    var a = i8(this.D.Pk(), this.B.label);
    a ? p9(this, a) : this.Aj(Error("No such screen"));
  };
  v9.prototype.Ba = function () {
    g.lC(this.C);
    this.C = NaN;
    o9.prototype.Ba.call(this);
  };
  g.w(w9, g.nG);
  g.k = w9.prototype;
  g.k.init = function (a, b) {
    chrome.cast.timeout.requestSession = 3e4;
    var c = new chrome.cast.SessionRequest(this.ma, [
      chrome.cast.Capability.AUDIO_OUT,
    ]);
    this.ea || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
    var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
    a =
      a || this.K
        ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB
        : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
    var e = (0, g.cb)(this.N8, this);
    c = new chrome.cast.ApiConfig(c, (0, g.cb)(this.DY, this), e, d, a);
    c.customDialLaunchCallback = (0, g.cb)(this.K7, this);
    chrome.cast.initialize(
      c,
      (0, g.cb)(function () {
        this.isDisposed() ||
          (chrome.cast.addReceiverActionListener(this.G),
          Ayb(),
          this.B.subscribe("onlineScreenChange", (0, g.cb)(this.WS, this)),
          (this.C = qzb(this)),
          chrome.cast.setCustomReceivers(
            this.C,
            function () {},
            (0, g.cb)(function (f) {
              this.eg("Failed to set initial custom receivers: " + g.ym(f));
            }, this)
          ),
          this.ra("yt-remote-cast2-availability-change", y9(this)),
          b(!0));
      }, this),
      (0, g.cb)(function (f) {
        this.eg("Failed to initialize API: " + g.ym(f));
        b(!1);
      }, this)
    );
  };
  g.k.P$ = function (a, b) {
    x9("Setting connected screen ID: " + a + " -> " + b);
    if (this.j) {
      var c = this.j.j;
      if (!a || (c && c.id != a))
        x9("Unsetting old screen status: " + this.j.B.friendlyName),
          z9(this, null);
    }
    if (a && b) {
      if (!this.j) {
        c = i8(this.B.Pk(), a);
        if (!c) {
          x9("setConnectedScreenStatus: Unknown screen.");
          return;
        }
        if ("shortLived" == c.idType) {
          x9(
            "setConnectedScreenStatus: Screen with id type to be short lived."
          );
          return;
        }
        a = ozb(this, c);
        a ||
          (x9("setConnectedScreenStatus: Connected receiver not custom..."),
          (a = new chrome.cast.Receiver(c.uuid ? c.uuid : c.id, c.name)),
          (a.receiverType = chrome.cast.ReceiverType.CUSTOM),
          this.C.push(a),
          chrome.cast.setCustomReceivers(
            this.C,
            function () {},
            (0, g.cb)(function (d) {
              this.eg("Failed to set initial custom receivers: " + g.ym(d));
            }, this)
          ));
        x9("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
        z9(this, new v9(this.B, a), !0);
      }
      this.j.aR(b);
    } else x9("setConnectedScreenStatus: no screen.");
  };
  g.k.S$ = function (a) {
    this.isDisposed()
      ? this.eg("Setting connection data on disposed cast v2")
      : this.j
      ? this.j.Sz(a)
      : this.eg("Setting connection data without a session");
  };
  g.k.S1 = function () {
    this.isDisposed()
      ? this.eg("Stopping session on disposed cast v2")
      : this.j
      ? (this.j.stop(), z9(this, null))
      : x9("Stopping non-existing session");
  };
  g.k.requestSession = function () {
    chrome.cast.requestSession(
      (0, g.cb)(this.DY, this),
      (0, g.cb)(this.i9, this)
    );
  };
  g.k.Ba = function () {
    this.B.unsubscribe("onlineScreenChange", (0, g.cb)(this.WS, this));
    window.chrome &&
      chrome.cast &&
      chrome.cast.removeReceiverActionListener(this.G);
    var a = xyb,
      b = g.Ta("yt.mdx.remote.debug.handlers_");
    g.Fb(b || [], a);
    g.sb(this.j);
    g.nG.prototype.Ba.call(this);
  };
  g.k.eg = function (a) {
    c9("Controller", a);
  };
  g.k.FY = function (a, b) {
    this.j == a &&
      (b || z9(this, null), this.ra("yt-remote-cast2-session-change", b));
  };
  g.k.K8 = function (a, b) {
    if (!this.isDisposed())
      if (a)
        switch (
          ((a.friendlyName = chrome.cast.unescape(a.friendlyName)),
          x9(
            "onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b
          ),
          b)
        ) {
          case chrome.cast.ReceiverAction.CAST:
            if (this.j)
              if (this.j.B.label != a.label)
                x9(
                  "onReceiverAction_: Stopping active receiver: " +
                    this.j.B.friendlyName
                ),
                  this.j.stop();
              else {
                x9("onReceiverAction_: Casting to active receiver.");
                this.j.j && this.ra("yt-remote-cast2-session-change", this.j.j);
                break;
              }
            switch (a.receiverType) {
              case chrome.cast.ReceiverType.CUSTOM:
                z9(this, new v9(this.B, a));
                break;
              case chrome.cast.ReceiverType.DIAL:
                z9(this, new s9(this.B, a, this.D, this.config_));
                break;
              case chrome.cast.ReceiverType.CAST:
                z9(this, new r9(this.B, a, this.config_));
                break;
              default:
                this.eg("Unknown receiver type: " + a.receiverType);
            }
            break;
          case chrome.cast.ReceiverAction.STOP:
            this.j && this.j.B.label == a.label
              ? this.j.stop()
              : this.eg("Stopping receiver w/o session: " + a.friendlyName);
        }
      else this.eg("onReceiverAction_ called without receiver.");
  };
  g.k.K7 = function (a) {
    if (this.isDisposed()) return Promise.reject(Error("disposed"));
    var b = a.receiver;
    b.receiverType != chrome.cast.ReceiverType.DIAL &&
      (this.eg("Not DIAL receiver: " + b.friendlyName),
      (b.receiverType = chrome.cast.ReceiverType.DIAL));
    var c = this.j ? this.j.B : null;
    if (!c || c.label != b.label)
      return (
        this.eg(
          "Receiving DIAL launch request for non-clicked DIAL receiver: " +
            b.friendlyName
        ),
        Promise.reject(Error("illegal DIAL launch"))
      );
    if (
      c &&
      c.label == b.label &&
      c.receiverType != chrome.cast.ReceiverType.DIAL
    ) {
      if (this.j.j)
        return (
          x9("Reselecting dial screen."),
          this.ra("yt-remote-cast2-session-change", this.j.j),
          Promise.resolve(new chrome.cast.DialLaunchResponse(!1))
        );
      this.eg(
        'Changing CAST intent from "' +
          c.receiverType +
          '" to "dial" for ' +
          b.friendlyName
      );
      z9(this, new s9(this.B, b, this.D, this.config_));
    }
    b = this.j;
    b.ma = a;
    b.ma.appState == chrome.cast.DialAppState.RUNNING
      ? ((a = b.ma.extraData || {}),
        (c = a.screenId || null),
        t9(b) && a.loungeToken
          ? a.loungeTokenRefreshIntervalMs
            ? (a = kzb(
                b,
                {
                  name: b.B.friendlyName,
                  screenId: a.screenId,
                  loungeToken: a.loungeToken,
                  dialId: b.ma.receiver.label,
                  screenIdType: "shortLived",
                },
                a.loungeTokenRefreshIntervalMs
              ))
            : (g.VB(
                Error(
                  "No loungeTokenRefreshIntervalMs presents in additionalData: " +
                    JSON.stringify(a) +
                    "."
                )
              ),
              (a = lzb(b, c)))
          : (a = lzb(b, c)))
      : (a = izb(b));
    return a;
  };
  g.k.DY = function (a) {
    var b = this;
    if (!this.isDisposed() && !this.K) {
      x9("New cast session ID: " + a.sessionId);
      var c = a.receiver;
      if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
        if (!this.j)
          if (c.receiverType == chrome.cast.ReceiverType.CAST)
            x9("Got resumed cast session before resumed mdx connection."),
              (c.friendlyName = chrome.cast.unescape(c.friendlyName)),
              z9(this, new r9(this.B, c, this.config_), !0);
          else {
            this.eg(
              "Got non-cast session without previous mdx receiver event, or mdx resume."
            );
            return;
          }
        var d = this.j.B,
          e = i8(this.B.Pk(), d.label);
        e &&
          g8(e, c.label) &&
          d.receiverType != chrome.cast.ReceiverType.CAST &&
          c.receiverType == chrome.cast.ReceiverType.CAST &&
          (x9(
            "onSessionEstablished_: manual to cast session change " +
              c.friendlyName
          ),
          g.sb(this.j),
          (this.j = new r9(this.B, c, this.config_)),
          this.j.subscribe("sessionScreen", (0, g.cb)(this.FY, this, this.j)),
          this.j.subscribe("sessionFailed", function () {
            return pzb(b, b.j);
          }),
          this.j.Sz(null));
        this.j.ZQ(a);
      }
    }
  };
  g.k.R1 = function () {
    return this.j ? this.j.VS() : null;
  };
  g.k.i9 = function (a) {
    this.isDisposed() ||
      (this.eg("Failed to estabilish a session: " + g.ym(a)),
      a.code != chrome.cast.ErrorCode.CANCEL && z9(this, null),
      this.ra("yt-remote-cast2-session-failed"));
  };
  g.k.N8 = function (a) {
    x9("Receiver availability updated: " + a);
    if (!this.isDisposed()) {
      var b = y9(this);
      this.S = a == chrome.cast.ReceiverAvailability.AVAILABLE;
      y9(this) != b && this.ra("yt-remote-cast2-availability-change", y9(this));
    }
  };
  g.k.WS = function () {
    this.isDisposed() ||
      ((this.C = qzb(this)),
      x9("Updating custom receivers: " + g.ym(this.C)),
      chrome.cast.setCustomReceivers(
        this.C,
        function () {},
        (0, g.cb)(function () {
          this.eg("Failed to set custom receivers.");
        }, this)
      ),
      this.ra("yt-remote-cast2-availability-change", y9(this)));
  };
  w9.prototype.setLaunchParams = w9.prototype.S$;
  w9.prototype.setConnectedScreenStatus = w9.prototype.P$;
  w9.prototype.stopSession = w9.prototype.S1;
  w9.prototype.getCastSession = w9.prototype.R1;
  w9.prototype.requestSession = w9.prototype.requestSession;
  w9.prototype.init = w9.prototype.init;
  w9.prototype.dispose = w9.prototype.dispose;
  var zzb = [];
  g.k = G9.prototype;
  g.k.reset = function (a) {
    this.listId = "";
    this.index = -1;
    this.videoId = "";
    Fzb(this);
    this.volume = -1;
    this.muted = !1;
    a &&
      ((this.index = a.index),
      (this.listId = a.listId),
      (this.videoId = a.videoId),
      (this.playerState = a.playerState),
      (this.volume = a.volume),
      (this.muted = a.muted),
      (this.audioTrackId = a.audioTrackId),
      (this.trackData = a.trackData),
      (this.qp = a.hasPrevious),
      (this.Uk = a.hasNext),
      (this.S = a.playerTime),
      (this.K = a.playerTimeAt),
      (this.D = a.seekableStart),
      (this.j = a.seekableEnd),
      (this.G = a.duration),
      (this.ma = a.loadedTime),
      (this.C = a.liveIngestionTime),
      (this.B = !isNaN(this.C)));
  };
  g.k.isPlaying = function () {
    return 1 == this.playerState;
  };
  g.k.vl = function (a) {
    this.G = isNaN(a) ? 0 : a;
  };
  g.k.getDuration = function () {
    return this.B ? this.G + H9(this) : this.G;
  };
  g.k.clone = function () {
    return new G9(Gzb(this));
  };
  g.w(M9, g.nG);
  g.k = M9.prototype;
  g.k.getState = function () {
    return this.C;
  };
  g.k.jt = function () {
    return this.D.getReconnectTimeout();
  };
  g.k.Lw = function () {
    this.D.reconnect();
  };
  g.k.play = function () {
    O9(this)
      ? (this.j ? this.j.play(null, g.Ld, S9(this, "play")) : R9(this, "play"),
        Jzb(this, 1, J9(N9(this))),
        this.ra("remotePlayerChange"))
      : P9(this, this.play);
  };
  g.k.pause = function () {
    O9(this)
      ? (this.j
          ? this.j.pause(null, g.Ld, S9(this, "pause"))
          : R9(this, "pause"),
        Jzb(this, 2, J9(N9(this))),
        this.ra("remotePlayerChange"))
      : P9(this, this.pause);
  };
  g.k.seekTo = function (a) {
    if (O9(this)) {
      if (this.j) {
        var b = N9(this),
          c = new chrome.cast.media.SeekRequest();
        c.currentTime = a;
        b.isPlaying() || 3 == b.playerState
          ? (c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START)
          : (c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE);
        this.j.seek(c, g.Ld, S9(this, "seekTo", { newTime: a }));
      } else R9(this, "seekTo", { newTime: a });
      Jzb(this, 3, a);
      this.ra("remotePlayerChange");
    } else P9(this, g.db(this.seekTo, a));
  };
  g.k.stop = function () {
    if (O9(this)) {
      this.j
        ? this.j.stop(null, g.Ld, S9(this, "stopVideo"))
        : R9(this, "stopVideo");
      var a = N9(this);
      a.index = -1;
      a.videoId = "";
      Fzb(a);
      Q9(this, a);
      this.ra("remotePlayerChange");
    } else P9(this, this.stop);
  };
  g.k.setVolume = function (a, b) {
    if (O9(this)) {
      var c = N9(this);
      if (this.B) {
        if (c.volume != a) {
          var d = Math.round(a) / 100;
          this.B.setReceiverVolumeLevel(
            d,
            (0, g.cb)(function () {
              d9("set receiver volume: " + d);
            }, this),
            (0, g.cb)(function () {
              this.eg("failed to set receiver volume.");
            }, this)
          );
        }
        c.muted != b &&
          this.B.setReceiverMuted(
            b,
            (0, g.cb)(function () {
              d9("set receiver muted: " + b);
            }, this),
            (0, g.cb)(function () {
              this.eg("failed to set receiver muted.");
            }, this)
          );
      } else {
        var e = { volume: a, muted: b };
        -1 != c.volume && (e.delta = a - c.volume);
        R9(this, "setVolume", e);
      }
      c.muted = b;
      c.volume = a;
      Q9(this, c);
    } else P9(this, g.db(this.setVolume, a, b));
  };
  g.k.XS = function (a, b) {
    if (O9(this)) {
      var c = N9(this);
      a = { videoId: a };
      b &&
        ((c.trackData = {
          trackName: b.name,
          languageCode: b.languageCode,
          sourceLanguageCode: b.translationLanguage
            ? b.translationLanguage.languageCode
            : "",
          languageName: b.languageName,
          kind: b.kind,
        }),
        (a.style = g.ym(b.style)),
        g.rd(a, c.trackData));
      R9(this, "setSubtitlesTrack", a);
      Q9(this, c);
    } else P9(this, g.db(this.XS, a, b));
  };
  g.k.setAudioTrack = function (a, b) {
    O9(this)
      ? ((b = b.getLanguageInfo().getId()),
        R9(this, "setAudioTrack", { videoId: a, audioTrackId: b }),
        (a = N9(this)),
        (a.audioTrackId = b),
        Q9(this, a))
      : P9(this, g.db(this.setAudioTrack, a, b));
  };
  g.k.playVideo = function (a, b, c, d, e, f, h) {
    d = void 0 === d ? null : d;
    e = void 0 === e ? null : e;
    f = void 0 === f ? null : f;
    h = void 0 === h ? null : h;
    var l = N9(this),
      m = { videoId: a };
    void 0 !== c && (m.currentIndex = c);
    K9(l, a, c || 0);
    void 0 !== b && (I9(l, b), (m.currentTime = b));
    d && (m.listId = d);
    e && (m.playerParams = e);
    f && (m.clickTrackingParams = f);
    h && (m.locationInfo = g.ym(h));
    R9(this, "setPlaylist", m);
    d || Q9(this, l);
  };
  g.k.FJ = function (a, b) {
    if (O9(this)) {
      if (a && b) {
        var c = N9(this);
        K9(c, a, b);
        Q9(this, c);
      }
      R9(this, "previous");
    } else P9(this, g.db(this.FJ, a, b));
  };
  g.k.nextVideo = function (a, b) {
    if (O9(this)) {
      if (a && b) {
        var c = N9(this);
        K9(c, a, b);
        Q9(this, c);
      }
      R9(this, "next");
    } else P9(this, g.db(this.nextVideo, a, b));
  };
  g.k.KG = function () {
    if (O9(this)) {
      R9(this, "clearPlaylist");
      var a = N9(this);
      a.reset();
      Q9(this, a);
      this.ra("remotePlayerChange");
    } else P9(this, this.KG);
  };
  g.k.rV = function () {
    O9(this) ? R9(this, "dismissAutoplay") : P9(this, this.rV);
  };
  g.k.dispose = function () {
    if (3 != this.C) {
      var a = this.C;
      this.C = 3;
      this.ra("proxyStateChange", a, this.C);
    }
    g.nG.prototype.dispose.call(this);
  };
  g.k.Ba = function () {
    Izb(this);
    this.D = null;
    this.G.clear();
    L9(this, null);
    g.nG.prototype.Ba.call(this);
  };
  g.k.dR = function (a) {
    if ((a != this.C || 2 == a) && 3 != this.C && 0 != a) {
      var b = this.C;
      this.C = a;
      this.ra("proxyStateChange", b, a);
      if (1 == a)
        for (; !this.G.isEmpty(); )
          (b = a = this.G),
            0 === b.j.length && ((b.j = b.B), b.j.reverse(), (b.B = [])),
            a.j.pop().apply(this);
      else 3 == a && this.dispose();
    }
  };
  g.k.I8 = function (a, b) {
    this.ra(a, b);
  };
  g.k.A7 = function (a) {
    if (!a) this.qE(null), L9(this, null);
    else if (this.B.receiver.volume) {
      a = this.B.receiver.volume;
      var b = N9(this),
        c = Math.round(100 * a.level || 0);
      if (b.volume != c || b.muted != a.muted)
        d9("Cast volume update: " + a.level + (a.muted ? " muted" : "")),
          (b.volume = c),
          (b.muted = !!a.muted),
          Q9(this, b);
    }
  };
  g.k.qE = function (a) {
    d9("Cast media: " + !!a);
    this.j && this.j.removeUpdateListener(this.ma);
    if ((this.j = a))
      this.j.addUpdateListener(this.ma),
        Kzb(this),
        this.ra("remotePlayerChange");
  };
  g.k.z7 = function (a) {
    a ? (Kzb(this), this.ra("remotePlayerChange")) : this.qE(null);
  };
  g.k.BR = function () {
    R9(this, "sendDebugCommand", { debugCommand: "stats4nerds " });
  };
  g.k.D7 = function () {
    var a = Czb();
    a && L9(this, a);
  };
  g.k.eg = function (a) {
    c9("CP", a);
  };
  g.w(V9, g.nG);
  g.k = V9.prototype;
  g.k.connect = function (a, b) {
    if (b) {
      var c = b.listId,
        d = b.videoId,
        e = b.videoIds,
        f = b.playerParams,
        h = b.clickTrackingParams,
        l = b.index,
        m = { videoId: d },
        n = b.currentTime,
        p = b.locationInfo;
      b = b.loopMode;
      void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
      f && (m.playerParams = f);
      p && (m.locationInfo = p);
      h && (m.clickTrackingParams = h);
      c && (m.listId = c);
      e && 0 < e.length && (m.videoIds = e.join(","));
      void 0 !== l && (m.currentIndex = l);
      this.Na && (m.loopMode = b || "LOOP_MODE_OFF");
      c && (this.j.listId = c);
      this.j.videoId = d;
      this.j.index = l || 0;
      this.j.state = 3;
      I9(this.j, n);
      this.G = "UNSUPPORTED";
      c = this.Na ? "setInitialState" : "setPlaylist";
      T9("Connecting with " + c + " and params: " + g.ym(m));
      this.B.connect({ method: c, params: g.ym(m) }, a, mwb());
    } else T9("Connecting without params"), this.B.connect({}, a, mwb());
    Ozb(this);
  };
  g.k.Fr = function (a) {
    this.B.Fr(a);
  };
  g.k.dispose = function () {
    this.isDisposed() ||
      (g.Sa("yt.mdx.remote.remoteClient_", null),
      this.ra("beforeDispose"),
      U9(this, 3));
    g.nG.prototype.dispose.call(this);
  };
  g.k.Ba = function () {
    Pzb(this);
    Rzb(this);
    Qzb(this);
    g.lC(this.ma);
    this.ma = NaN;
    g.lC(this.ea);
    this.ea = NaN;
    this.D = null;
    g.YC(this.qa);
    this.qa.length = 0;
    this.B.dispose();
    g.nG.prototype.Ba.call(this);
    this.G = this.S = this.C = this.j = this.B = null;
  };
  g.k.dX = function (a) {
    if (!this.C || 0 === this.C.length) return !1;
    for (var b = g.u(this.C), c = b.next(); !c.done; c = b.next())
      if (!c.value.capabilities.has(a)) return !1;
    return !0;
  };
  g.k.p5 = function () {
    var a = 3;
    this.isDisposed() ||
      ((a = 0),
      isNaN(this.nD()) ? this.B.Hz() && isNaN(this.K) && (a = 1) : (a = 2));
    return a;
  };
  g.k.Zy = function (a) {
    T9("Disconnecting with " + a);
    g.Sa("yt.mdx.remote.remoteClient_", null);
    Pzb(this);
    this.ra("beforeDisconnect", a);
    1 == a && l8();
    this.B.disconnect(a);
    this.dispose();
  };
  g.k.n5 = function () {
    var a = this.j;
    this.D && ((a = this.j.clone()), K9(a, this.D, a.index));
    return Gzb(a);
  };
  g.k.T$ = function (a) {
    var b = this,
      c = new G9(a);
    c.videoId &&
      c.videoId != this.j.videoId &&
      ((this.D = c.videoId),
      g.lC(this.ma),
      (this.ma = g.jC(function () {
        if (b.D) {
          var e = b.D;
          b.D = null;
          b.j.videoId != e && W9(b, "getNowPlaying");
        }
      }, 5e3)));
    var d = [];
    (this.j.listId == c.listId &&
      this.j.videoId == c.videoId &&
      this.j.index == c.index) ||
      d.push("remoteQueueChange");
    (this.j.playerState == c.playerState &&
      this.j.volume == c.volume &&
      this.j.muted == c.muted &&
      J9(this.j) == J9(c) &&
      g.ym(this.j.trackData) == g.ym(c.trackData)) ||
      d.push("remotePlayerChange");
    this.j.reset(a);
    g.Yb(
      d,
      function (e) {
        this.ra(e);
      },
      this
    );
  };
  g.k.bW = function () {
    var a = this.B.Vs(),
      b = g.Bb(this.C, function (c) {
        return "REMOTE_CONTROL" == c.type && c.id != a;
      });
    return b ? b.id : "";
  };
  g.k.nD = function () {
    return this.B.jt();
  };
  g.k.e5 = function () {
    return this.G || "UNSUPPORTED";
  };
  g.k.f5 = function () {
    return this.S || "";
  };
  g.k.T1 = function () {
    !isNaN(this.nD()) && this.B.Lw();
  };
  g.k.O$ = function (a, b) {
    W9(this, a, b);
    Tzb(this);
  };
  g.k.YS = function () {
    var a = g.yC("SID", "") || "",
      b = g.yC("SAPISID", "") || "",
      c = g.yC("__Secure-3PAPISID", "") || "";
    if (!a && !b && !c) return "";
    a = g.qg(g.pg(a), 2);
    b = g.qg(g.pg(b), 2);
    c = g.qg(g.pg(c), 2);
    return g.qg(g.pg(a + "," + b + "," + c), 2);
  };
  V9.prototype.subscribe = V9.prototype.subscribe;
  V9.prototype.unsubscribeByKey = V9.prototype.Yh;
  V9.prototype.getProxyState = V9.prototype.p5;
  V9.prototype.disconnect = V9.prototype.Zy;
  V9.prototype.getPlayerContextData = V9.prototype.n5;
  V9.prototype.setPlayerContextData = V9.prototype.T$;
  V9.prototype.getOtherConnectedRemoteId = V9.prototype.bW;
  V9.prototype.getReconnectTimeout = V9.prototype.nD;
  V9.prototype.getAutoplayMode = V9.prototype.e5;
  V9.prototype.getAutoplayVideoId = V9.prototype.f5;
  V9.prototype.reconnect = V9.prototype.T1;
  V9.prototype.sendMessage = V9.prototype.O$;
  V9.prototype.getXsrfToken = V9.prototype.YS;
  V9.prototype.isCapabilitySupportedOnConnectedDevices = V9.prototype.dX;
  g.w(eAb, h9);
  g.k = eAb.prototype;
  g.k.Pk = function (a) {
    return this.ih.$_gs(a);
  };
  g.k.contains = function (a) {
    return !!this.ih.$_c(a);
  };
  g.k.get = function (a) {
    return this.ih.$_g(a);
  };
  g.k.start = function () {
    this.ih.$_st();
  };
  g.k.add = function (a, b, c) {
    this.ih.$_a(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.ih.$_r(a, b, c);
  };
  g.k.AK = function (a, b, c, d) {
    this.ih.$_un(a, b, c, d);
  };
  g.k.Ba = function () {
    for (var a = 0, b = this.j.length; a < b; ++a) this.ih.$_ubk(this.j[a]);
    this.j.length = 0;
    this.ih = null;
    h9.prototype.Ba.call(this);
  };
  g.k.U1 = function () {
    this.ra("screenChange");
  };
  g.k.q8 = function () {
    this.ra("onlineScreenChange");
  };
  m9.prototype.$_st = m9.prototype.start;
  m9.prototype.$_gspc = m9.prototype.O1;
  m9.prototype.$_gsppc = m9.prototype.US;
  m9.prototype.$_c = m9.prototype.contains;
  m9.prototype.$_g = m9.prototype.get;
  m9.prototype.$_a = m9.prototype.add;
  m9.prototype.$_un = m9.prototype.AK;
  m9.prototype.$_r = m9.prototype.remove;
  m9.prototype.$_gs = m9.prototype.Pk;
  m9.prototype.$_gos = m9.prototype.SS;
  m9.prototype.$_s = m9.prototype.subscribe;
  m9.prototype.$_ubk = m9.prototype.Yh;
  var g$ = null,
    j$ = !1,
    X9 = null,
    Y9 = null,
    pAb = null,
    b$ = [];
  g.w(uAb, g.J);
  g.k = uAb.prototype;
  g.k.Ba = function () {
    g.J.prototype.Ba.call(this);
    this.j.stop();
    this.B.stop();
    this.S.stop();
    var a = this.Jc;
    a.unsubscribe("proxyStateChange", this.CY, this);
    a.unsubscribe("remotePlayerChange", this.wE, this);
    a.unsubscribe("remoteQueueChange", this.pJ, this);
    a.unsubscribe("previousNextChange", this.zY, this);
    a.unsubscribe("nowAutoplaying", this.uY, this);
    a.unsubscribe("autoplayDismissed", this.aY, this);
    this.Jc = this.module = null;
  };
  g.k.Tk = function (a) {
    var b = g.Ja.apply(1, arguments);
    if (2 != this.Jc.C)
      if (k$(this)) {
        if (1081 != N9(this.Jc).playerState || "control_seek" !== a)
          switch (a) {
            case "control_toggle_play_pause":
              N9(this.Jc).isPlaying() ? this.Jc.pause() : this.Jc.play();
              break;
            case "control_play":
              this.Jc.play();
              break;
            case "control_pause":
              this.Jc.pause();
              break;
            case "control_seek":
              this.K.XK(b[0], b[1]);
              break;
            case "control_subtitles_set_track":
              wAb(this, b[0]);
              break;
            case "control_set_audio_track":
              this.setAudioTrack(b[0]);
          }
      } else
        switch (a) {
          case "control_toggle_play_pause":
          case "control_play":
          case "control_pause":
            b = this.J.getCurrentTime();
            l$(this, 0 === b ? void 0 : b);
            break;
          case "control_seek":
            l$(this, b[0]);
            break;
          case "control_subtitles_set_track":
            wAb(this, b[0]);
            break;
          case "control_set_audio_track":
            this.setAudioTrack(b[0]);
        }
  };
  g.k.x7 = function (a) {
    this.S.o1(a);
  };
  g.k.Naa = function (a) {
    this.Tk("control_subtitles_set_track", g.id(a) ? null : a);
  };
  g.k.e_ = function () {
    var a = this.J.getOption("captions", "track");
    g.id(a) || wAb(this, a);
  };
  g.k.Kc = function (a) {
    this.module.Kc(a, this.J.getVideoData().lengthSeconds);
  };
  g.k.b8 = function () {
    g.id(this.C) || xAb(this, this.C);
    this.D = !1;
  };
  g.k.CY = function (a, b) {
    this.B.stop();
    2 === b && this.VZ();
  };
  g.k.wE = function () {
    if (k$(this)) {
      this.j.stop();
      var a = N9(this.Jc);
      switch (a.playerState) {
        case 1080:
        case 1081:
        case 1084:
        case 1085:
          this.module.Th = 1;
          break;
        case 1082:
        case 1083:
          this.module.Th = 0;
          break;
        default:
          this.module.Th = -1;
      }
      switch (a.playerState) {
        case 1081:
        case 1:
          this.Bc(new g.SL(8));
          this.UZ();
          break;
        case 1085:
        case 3:
          this.Bc(new g.SL(9));
          break;
        case 1083:
        case 0:
          this.Bc(new g.SL(2));
          this.K.stop();
          this.Kc(this.J.getVideoData().lengthSeconds);
          break;
        case 1084:
          this.Bc(new g.SL(4));
          break;
        case 2:
          this.Bc(new g.SL(4));
          this.Kc(J9(a));
          break;
        case -1:
          this.Bc(new g.SL(64));
          break;
        case -1e3:
          this.Bc(
            new g.SL(128, {
              errorCode: "mdx.remoteerror",
              errorMessage:
                "Ezt a vide\u00f3t nem lehet t\u00e1volr\u00f3l lej\u00e1tszani.",
              lH: 2,
            })
          );
      }
      a = N9(this.Jc).trackData;
      var b = this.C;
      (a || b
        ? a &&
          b &&
          a.trackName == b.trackName &&
          a.languageCode == b.languageCode &&
          a.languageName == b.languageName &&
          a.kind == b.kind
        : 1) || ((this.C = a), xAb(this, a));
      a = N9(this.Jc);
      -1 === a.volume ||
        (Math.round(this.J.getVolume()) === a.volume &&
          this.J.isMuted() === a.muted) ||
        this.ma.isActive() ||
        this.J_();
    } else vAb(this);
  };
  g.k.zY = function () {
    this.J.ra("mdxpreviousnextchange");
  };
  g.k.pJ = function () {
    k$(this) || vAb(this);
  };
  g.k.uY = function (a) {
    isNaN(a) || this.J.ra("mdxnowautoplaying", a);
  };
  g.k.aY = function () {
    this.J.ra("mdxautoplaycanceled");
  };
  g.k.setAudioTrack = function (a) {
    k$(this) && this.Jc.setAudioTrack(this.J.getVideoData(1).videoId, a);
  };
  g.k.seekTo = function (a, b) {
    -1 === N9(this.Jc).playerState ? l$(this, a) : b && this.Jc.seekTo(a);
  };
  g.k.J_ = function () {
    var a = this;
    if (k$(this)) {
      var b = N9(this.Jc);
      this.events.Rc(this.ea);
      b.muted ? this.J.mute() : this.J.unMute();
      this.J.setVolume(b.volume);
      this.ea = this.events.V(this.J, "onVolumeChange", function (c) {
        sAb(a, c);
      });
    }
  };
  g.k.UZ = function () {
    this.j.stop();
    if (!this.Jc.isDisposed()) {
      var a = N9(this.Jc);
      a.isPlaying() && this.Bc(new g.SL(8));
      this.Kc(J9(a));
      this.j.start();
    }
  };
  g.k.VZ = function () {
    this.B.stop();
    this.j.stop();
    var a = this.Jc.jt();
    2 == this.Jc.C && !isNaN(a) && this.B.start();
  };
  g.k.Bc = function (a) {
    this.B.stop();
    var b = this.G;
    if (!g.wBa(b, a)) {
      var c = g.cH(a, 2);
      c !== g.cH(this.G, 2) && this.J.eB(c);
      this.G = a;
      zAb(this.module, b, a);
    }
  };
  g.w(m$, g.T);
  m$.prototype.zd = function () {
    this.j.show();
  };
  m$.prototype.Rb = function () {
    this.j.hide();
  };
  m$.prototype.B = function () {
    n8("mdx-privacy-popup-cancel");
    this.Rb();
  };
  m$.prototype.C = function () {
    n8("mdx-privacy-popup-confirm");
    this.Rb();
  };
  g.w(n$, g.T);
  n$.prototype.onStateChange = function (a) {
    this.Ic(a.state);
  };
  n$.prototype.Ic = function (a) {
    if (3 === this.api.getPresentingPlayerType()) {
      var b = {
        RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name,
      };
      a = g.cH(a, 128)
        ? g.xK("Hiba a k\u00f6vetkez\u0151ben: $RECEIVER_NAME", b)
        : a.isPlaying() || a.isPaused()
        ? g.xK("Lej\u00e1tsz\u00e1s a k\u00f6vetkez\u0151n: $RECEIVER_NAME", b)
        : g.xK("Kapcsol\u00f3d\u00e1s ide: $RECEIVER_NAME", b);
      this.updateValue("statustext", a);
      this.j.show();
    } else this.j.hide();
  };
  g.w(o$, g.GX);
  o$.prototype.D = function () {
    var a = this.J.getOption("remote", "receivers");
    a && 1 < a.length && !this.J.getOption("remote", "quickCast")
      ? ((this.Wt = g.ac(a, this.j, this)),
        g.HX(this, g.dq(a, this.j)),
        (a = this.J.getOption("remote", "currentReceiver")),
        (a = this.j(a)),
        this.options[a] && this.Lj(a),
        this.enable(!0))
      : this.enable(!1);
  };
  o$.prototype.j = function (a) {
    return a.key;
  };
  o$.prototype.Ck = function (a) {
    return "cast-selector-receiver" === a
      ? "\u00c1tk\u00fcld\u00e9s..."
      : this.Wt[a].name;
  };
  o$.prototype.uh = function (a) {
    g.GX.prototype.uh.call(this, a);
    this.J.setOption("remote", "currentReceiver", this.Wt[a]);
    this.Ob.Rb();
  };
  g.w(yAb, g.zV);
  g.k = yAb.prototype;
  g.k.create = function () {
    var a = this.player.W(),
      b = g.jS(a);
    a = {
      device: "Desktop",
      app: "youtube-desktop",
      loadCastApiSetupScript: a.N("mdx_load_cast_api_bootstrap_script"),
      enableDialLoungeToken: a.N("enable_dial_short_lived_lounge_token"),
      enableCastLoungeToken: a.N("enable_cast_short_lived_lounge_token"),
    };
    jAb(b, a);
    this.subscriptions.push(g.VE("yt-remote-before-disconnect", this.v7, this));
    this.subscriptions.push(g.VE("yt-remote-connection-change", this.O8, this));
    this.subscriptions.push(
      g.VE("yt-remote-receiver-availability-change", this.BY, this)
    );
    this.subscriptions.push(g.VE("yt-remote-auto-connect", this.M8, this));
    this.subscriptions.push(g.VE("yt-remote-receiver-resumed", this.L8, this));
    this.subscriptions.push(g.VE("mdx-privacy-popup-confirm", this.g$, this));
    this.subscriptions.push(g.VE("mdx-privacy-popup-cancel", this.f$, this));
    this.BY();
  };
  g.k.load = function () {
    this.player.cancelPlayback();
    g.zV.prototype.load.call(this);
    this.Wl = new uAb(this, this.player, this.Jc);
    var a = (a = rAb()) ? a.currentTime : 0;
    var b = oAb() ? new M9(f$(), void 0) : null;
    0 == a && b && (a = J9(N9(b)));
    0 !== a && this.Kc(a);
    zAb(this, this.kf, this.kf);
    this.player.Up(6);
  };
  g.k.unload = function () {
    this.player.ra("mdxautoplaycanceled");
    this.Js = this.Ep;
    g.tb(this.Wl, this.Jc);
    this.Jc = this.Wl = null;
    g.zV.prototype.unload.call(this);
    this.player.Up(5);
    p$(this);
  };
  g.k.Ba = function () {
    g.WE(this.subscriptions);
    g.zV.prototype.Ba.call(this);
  };
  g.k.sE = function (a) {
    var b = g.Ja.apply(1, arguments);
    this.loaded && this.Wl.Tk.apply(this.Wl, [a].concat(g.pa(b)));
  };
  g.k.getAdState = function () {
    return this.Th;
  };
  g.k.qp = function () {
    return this.Jc ? N9(this.Jc).qp : !1;
  };
  g.k.Uk = function () {
    return this.Jc ? N9(this.Jc).Uk : !1;
  };
  g.k.Kc = function (a, b) {
    this.mX = a || 0;
    this.player.ra("progresssync", a, b);
    this.player.Ta("onVideoProgress", a || 0);
  };
  g.k.getCurrentTime = function () {
    return this.mX;
  };
  g.k.getProgressState = function () {
    var a = N9(this.Jc),
      b = this.player.getVideoData();
    return {
      airingStart: 0,
      airingEnd: 0,
      allowSeeking: 1081 != a.playerState && this.player.Sh(),
      clipEnd: b.clipEnd,
      clipStart: b.clipStart,
      current: this.getCurrentTime(),
      displayedStart: -1,
      duration: a.getDuration(),
      ingestionTime: a.B ? a.C + H9(a) : a.C,
      isAtLiveHead: 1 >= (a.B ? a.j + H9(a) : a.j) - this.getCurrentTime(),
      loaded: a.ma,
      seekableEnd: a.B ? a.j + H9(a) : a.j,
      seekableStart: 0 < a.D ? a.D + H9(a) : a.D,
      offset: 0,
      viewerLivestreamJoinMediaTime: 0,
    };
  };
  g.k.nextVideo = function () {
    this.Jc && this.Jc.nextVideo();
  };
  g.k.FJ = function () {
    this.Jc && this.Jc.FJ();
  };
  g.k.v7 = function (a) {
    1 === a && (this.jQ = this.Jc ? N9(this.Jc) : null);
  };
  g.k.O8 = function () {
    var a = oAb() ? new M9(f$(), void 0) : null;
    if (a) {
      var b = this.Js;
      this.loaded && this.unload();
      this.Jc = a;
      this.jQ = null;
      b.key !== this.Ep.key && ((this.Js = b), this.load());
    } else
      g.sb(this.Jc),
        (this.Jc = null),
        this.loaded &&
          (this.unload(),
          (a = this.jQ) &&
            a.videoId === this.player.getVideoData().videoId &&
            this.player.cueVideoById(a.videoId, J9(a)));
    this.player.ra("videodatachange", "newdata", this.player.getVideoData(), 3);
  };
  g.k.BY = function () {
    var a = [this.Ep],
      b = a.concat,
      c = kAb();
    D9() &&
      g.gD("yt-remote-cast-available") &&
      c.push({ key: "cast-selector-receiver", name: "Cast..." });
    this.Wt = b.call(a, c);
    a = mAb() || this.Ep;
    q$(this, a);
    this.player.Ta("onMdxReceiversChange");
  };
  g.k.M8 = function () {
    var a = mAb();
    q$(this, a);
  };
  g.k.L8 = function () {
    this.Js = mAb();
  };
  g.k.g$ = function () {
    this.QE = !0;
    p$(this);
    j$ = !1;
    g$ && i$(g$, 1);
    g$ = null;
  };
  g.k.f$ = function () {
    this.QE = !1;
    p$(this);
    q$(this, this.Ep);
    this.Js = this.Ep;
    j$ = !1;
    g$ = null;
    this.player.playVideo();
  };
  g.k.Mh = function (a, b) {
    switch (a) {
      case "casting":
        return this.loaded;
      case "receivers":
        return this.Wt;
      case "currentReceiver":
        return (
          b && ("cast-selector-receiver" === b.key ? Dzb() : q$(this, b)),
          this.loaded ? this.Js : this.Ep
        );
      case "quickCast":
        return 2 === this.Wt.length &&
          "cast-selector-receiver" === this.Wt[1].key
          ? (b && Dzb(), !0)
          : !1;
    }
  };
  g.k.BR = function () {
    this.Jc.BR();
  };
  g.k.wl = function () {
    return !1;
  };
  g.k.getOptions = function () {
    return ["casting", "receivers", "currentReceiver", "quickCast"];
  };
  g.k.isLoggedIn = function () {
    var a, b;
    return void 0 !==
      (null == (a = g.QB("PLAYER_CONFIG"))
        ? void 0
        : null == (b = a.args)
        ? void 0
        : b.authuser)
      ? !0
      : !(!g.QB("SESSION_INDEX") && !g.QB("LOGGED_IN"));
  };
  g.yV("remote", yAb);
})(_yt_player);
