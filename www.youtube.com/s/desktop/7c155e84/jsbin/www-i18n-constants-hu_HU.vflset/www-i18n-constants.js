(function () {
  "use strict"; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var e = this || self;
  function f(b, c) {
    b = b.split(".");
    var a = e;
    b[0] in a ||
      "undefined" == typeof a.execScript ||
      a.execScript("var " + b[0]);
    for (var d; b.length && (d = b.shift()); )
      b.length || void 0 === c
        ? a[d] && a[d] !== Object.prototype[d]
          ? (a = a[d])
          : (a = a[d] = {})
        : (a[d] = c);
  }
  var g = {
    YEAR_FULL: "y",
    YEAR_FULL_WITH_ERA: "y G",
    YEAR_MONTH_ABBR: "MMM y",
    YEAR_MONTH_FULL: "MMMM y",
    YEAR_MONTH_SHORT: "MM/y",
    MONTH_DAY_ABBR: "MMM d",
    MONTH_DAY_FULL: "MMMM dd",
    MONTH_DAY_SHORT: "M/d",
    MONTH_DAY_MEDIUM: "MMMM d",
    MONTH_DAY_YEAR_MEDIUM: "MMM d, y",
    WEEKDAY_MONTH_DAY_MEDIUM: "EEE, MMM d",
    WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, MMM d, y",
    DAY_ABBR: "d",
    MONTH_DAY_TIME_ZONE_SHORT: "MMM d, h:mm\u202fa zzzz",
  };
  g = {
    YEAR_FULL: "y.",
    YEAR_FULL_WITH_ERA: "G y.",
    YEAR_MONTH_ABBR: "y. MMM",
    YEAR_MONTH_FULL: "y. MMMM",
    YEAR_MONTH_SHORT: "y. MM.",
    MONTH_DAY_ABBR: "MMM d.",
    MONTH_DAY_FULL: "MMMM dd.",
    MONTH_DAY_SHORT: "M. d.",
    MONTH_DAY_MEDIUM: "MMMM d.",
    MONTH_DAY_YEAR_MEDIUM: "y. MMM d.",
    WEEKDAY_MONTH_DAY_MEDIUM: "MMM d., EEE",
    WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "y. MMM d., EEE",
    DAY_ABBR: "d",
    MONTH_DAY_TIME_ZONE_SHORT: "MMM d. HH:mm zzzz",
  };
  var h = {
    ERAS: ["BC", "AD"],
    ERANAMES: ["Before Christ", "Anno Domini"],
    NARROWMONTHS: "JFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
    MONTHS:
      "January February March April May June July August September October November December".split(
        " "
      ),
    STANDALONEMONTHS:
      "January February March April May June July August September October November December".split(
        " "
      ),
    SHORTMONTHS: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    STANDALONESHORTMONTHS:
      "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    WEEKDAYS: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
      " "
    ),
    STANDALONEWEEKDAYS:
      "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    SHORTWEEKDAYS: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    STANDALONESHORTWEEKDAYS: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    NARROWWEEKDAYS: "SMTWTFS".split(""),
    STANDALONENARROWWEEKDAYS: "SMTWTFS".split(""),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
    TIMEFORMATS: [
      "h:mm:ss\u202fa zzzz",
      "h:mm:ss\u202fa z",
      "h:mm:ss\u202fa",
      "h:mm\u202fa",
    ],
    DATETIMEFORMATS: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 5,
  };
  h = {
    ERAS: ["i. e.", "i. sz."],
    ERANAMES: [
      "Krisztus el\u0151tt",
      "id\u0151sz\u00e1m\u00edt\u00e1sunk szerint",
    ],
    NARROWMONTHS: "J F M \u00c1 M J J A Sz O N D".split(" "),
    STANDALONENARROWMONTHS: "J F M \u00c1 M J J A Sz O N D".split(" "),
    MONTHS:
      "janu\u00e1r febru\u00e1r m\u00e1rcius \u00e1prilis m\u00e1jus j\u00fanius j\u00falius augusztus szeptember okt\u00f3ber november december".split(
        " "
      ),
    STANDALONEMONTHS:
      "janu\u00e1r febru\u00e1r m\u00e1rcius \u00e1prilis m\u00e1jus j\u00fanius j\u00falius augusztus szeptember okt\u00f3ber november december".split(
        " "
      ),
    SHORTMONTHS:
      "jan. febr. m\u00e1rc. \u00e1pr. m\u00e1j. j\u00fan. j\u00fal. aug. szept. okt. nov. dec.".split(
        " "
      ),
    STANDALONESHORTMONTHS:
      "jan. febr. m\u00e1rc. \u00e1pr. m\u00e1j. j\u00fan. j\u00fal. aug. szept. okt. nov. dec.".split(
        " "
      ),
    WEEKDAYS:
      "vas\u00e1rnap h\u00e9tf\u0151 kedd szerda cs\u00fct\u00f6rt\u00f6k p\u00e9ntek szombat".split(
        " "
      ),
    STANDALONEWEEKDAYS:
      "vas\u00e1rnap h\u00e9tf\u0151 kedd szerda cs\u00fct\u00f6rt\u00f6k p\u00e9ntek szombat".split(
        " "
      ),
    SHORTWEEKDAYS: "V H K Sze Cs P Szo".split(" "),
    STANDALONESHORTWEEKDAYS: "V H K Sze Cs P Szo".split(" "),
    NARROWWEEKDAYS: "V H K Sz Cs P Sz".split(" "),
    STANDALONENARROWWEEKDAYS: "V H K Sz Cs P Sz".split(" "),
    SHORTQUARTERS: [
      "I. n.\u00e9v",
      "II. n.\u00e9v",
      "III. n.\u00e9v",
      "IV. n.\u00e9v",
    ],
    QUARTERS: [
      "I. negyed\u00e9v",
      "II. negyed\u00e9v",
      "III. negyed\u00e9v",
      "IV. negyed\u00e9v",
    ],
    AMPMS: ["de.", "du."],
    DATEFORMATS: ["y. MMMM d., EEEE", "y. MMMM d.", "y. MMM d.", "y. MM. dd."],
    TIMEFORMATS: ["H:mm:ss zzzz", "H:mm:ss z", "H:mm:ss", "H:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 3,
  };
  function k(b, c) {
    if (void 0 === c) {
      c = b + "";
      var a = c.indexOf(".");
      c = Math.min(-1 === a ? 0 : c.length - a - 1, 3);
    }
    a = Math.pow(10, c);
    c = { g: c, f: ((b * a) | 0) % a };
    return 1 == (b | 0) && 0 == c.g ? "one" : "other";
  }
  k = function (b) {
    return 1 == b ? "one" : "other";
  };
  f("YT_I18N_FORMATTING_GOOG_LOCALE", "hu");
  f("YT_I18N_FORMATTING_DATE_TIME_PATTERNS", g);
  f("YT_I18N_FORMATTING_DATE_TIME_SYMBOLS", h);
  f("YT_I18N_FORMATTING_RELATIVE_DATE_TIME_SYMBOLS", {
    DAY: {
      LONG: {
        R: {
          "-1": "tegnap",
          "-2": "tegnapel\u0151tt",
          0: "ma",
          1: "holnap",
          2: "holnaput\u00e1n",
        },
        P: "one{# nappal ezel\u0151tt}other{# nappal ezel\u0151tt}",
        F: "one{# nap m\u00falva}other{# nap m\u00falva}",
      },
      SHORT: {
        R: {
          "-1": "tegnap",
          "-2": "tegnapel\u0151tt",
          0: "ma",
          1: "holnap",
          2: "holnaput\u00e1n",
        },
        P: "one{# napja}other{# napja}",
        F: "one{# nap m\u00falva}other{# nap m\u00falva}",
      },
    },
    HOUR: {
      LONG: {
        R: { 0: "ebben az \u00f3r\u00e1ban" },
        P: "one{# \u00f3r\u00e1val ezel\u0151tt}other{# \u00f3r\u00e1val ezel\u0151tt}",
        F: "one{# \u00f3ra m\u00falva}other{# \u00f3ra m\u00falva}",
      },
      NARROW: {
        R: { 0: "ebben az \u00f3r\u00e1ban" },
        P: "one{# \u00f3r\u00e1ja}other{# \u00f3r\u00e1ja}",
        F: "one{# \u00f3ra m\u00falva}other{# \u00f3ra m\u00falva}",
      },
    },
    MINUTE: {
      LONG: {
        R: { 0: "ebben a percben" },
        P: "one{# perccel ezel\u0151tt}other{# perccel ezel\u0151tt}",
        F: "one{# perc m\u00falva}other{# perc m\u00falva}",
      },
      NARROW: {
        R: { 0: "ebben a percben" },
        P: "one{# perce}other{# perce}",
        F: "one{# perc m\u00falva}other{# perc m\u00falva}",
      },
    },
    MONTH: {
      LONG: {
        R: {
          "-1": "el\u0151z\u0151 h\u00f3nap",
          0: "ez a h\u00f3nap",
          1: "k\u00f6vetkez\u0151 h\u00f3nap",
        },
        P: "one{# h\u00f3nappal ezel\u0151tt}other{# h\u00f3nappal ezel\u0151tt}",
        F: "one{# h\u00f3nap m\u00falva}other{# h\u00f3nap m\u00falva}",
      },
      NARROW: {
        R: {
          "-1": "el\u0151z\u0151 h\u00f3nap",
          0: "ez a h\u00f3nap",
          1: "k\u00f6vetkez\u0151 h\u00f3nap",
        },
        P: "one{# h\u00f3napja}other{# h\u00f3napja}",
        F: "one{# h\u00f3nap m\u00falva}other{# h\u00f3nap m\u00falva}",
      },
    },
    QUARTER: {
      LONG: {
        R: {
          "-1": "el\u0151z\u0151 negyed\u00e9v",
          0: "ez a negyed\u00e9v",
          1: "k\u00f6vetkez\u0151 negyed\u00e9v",
        },
        P: "one{# negyed\u00e9vvel ezel\u0151tt}other{# negyed\u00e9vvel ezel\u0151tt}",
        F: "one{# negyed\u00e9v m\u00falva}other{# negyed\u00e9v m\u00falva}",
      },
      NARROW: {
        R: {
          "-1": "el\u0151z\u0151 negyed\u00e9v",
          0: "ez a negyed\u00e9v",
          1: "k\u00f6vetkez\u0151 negyed\u00e9v",
        },
        P: "one{# negyed\u00e9vvel ezel\u0151tt}other{# negyed\u00e9vvel ezel\u0151tt}",
        F: "one{# n.\u00e9v m\u00falva}other{# n.\u00e9v m\u00falva}",
      },
    },
    SECOND: {
      LONG: {
        R: { 0: "most" },
        P: "one{# m\u00e1sodperccel ezel\u0151tt}other{# m\u00e1sodperccel ezel\u0151tt}",
        F: "one{# m\u00e1sodperc m\u00falva}other{# m\u00e1sodperc m\u00falva}",
      },
      NARROW: {
        R: { 0: "most" },
        P: "one{# m.perce}other{# m.perce}",
        F: "one{# m\u00e1sodperc m\u00falva}other{# m\u00e1sodperc m\u00falva}",
      },
    },
    WEEK: {
      LONG: {
        R: {
          "-1": "el\u0151z\u0151 h\u00e9t",
          0: "ez a h\u00e9t",
          1: "k\u00f6vetkez\u0151 h\u00e9t",
        },
        P: "one{# h\u00e9ttel ezel\u0151tt}other{# h\u00e9ttel ezel\u0151tt}",
        F: "one{# h\u00e9t m\u00falva}other{# h\u00e9t m\u00falva}",
      },
      NARROW: {
        R: {
          "-1": "el\u0151z\u0151 h\u00e9t",
          0: "ez a h\u00e9t",
          1: "k\u00f6vetkez\u0151 h\u00e9t",
        },
        P: "one{# hete}other{# hete}",
        F: "one{# h\u00e9t m\u00falva}other{# h\u00e9t m\u00falva}",
      },
    },
    YEAR: {
      LONG: {
        R: {
          "-1": "el\u0151z\u0151 \u00e9v",
          0: "ez az \u00e9v",
          1: "k\u00f6vetkez\u0151 \u00e9v",
        },
        P: "one{# \u00e9vvel ezel\u0151tt}other{# \u00e9vvel ezel\u0151tt}",
        F: "one{# \u00e9v m\u00falva}other{# \u00e9v m\u00falva}",
      },
      NARROW: {
        R: {
          "-1": "el\u0151z\u0151 \u00e9v",
          0: "ez az \u00e9v",
          1: "k\u00f6vetkez\u0151 \u00e9v",
        },
        P: "one{# \u00e9ve}other{# \u00e9ve}",
        F: "one{# \u00e9v m\u00falva}other{# \u00e9v m\u00falva}",
      },
    },
  });
  f("YT_I18N_FORMATTING_PLURAL_RULES_SELECT", k);
  f("YT_I18N_FORMATTING_DURATION_TIME_SYMBOLS", {
    DAY: {
      LONG: "one{# nap}other{# nap}",
      SHORT: "one{# nap}other{# nap}",
      NARROW: "one{# nap}other{# nap}",
    },
    HOUR: {
      LONG: "one{# \u00f3ra}other{# \u00f3ra}",
      SHORT: "one{# \u00f3}other{# \u00f3}",
      NARROW: "one{# \u00f3}other{# \u00f3}",
    },
    MINUTE: {
      LONG: "one{# perc}other{# perc}",
      SHORT: "one{# p}other{# p}",
      NARROW: "one{# p}other{# p}",
    },
    MONTH: {
      LONG: "one{# h\u00f3nap}other{# h\u00f3nap}",
      SHORT: "one{# h\u00f3nap}other{# h\u00f3nap}",
      NARROW: "one{# h.}other{# h.}",
    },
    SECOND: {
      LONG: "one{# m\u00e1sodperc}other{# m\u00e1sodperc}",
      SHORT: "one{# mp}other{# mp}",
      NARROW: "one{# mp}other{# mp}",
    },
    WEEK: {
      LONG: "one{# h\u00e9t}other{# h\u00e9t}",
      SHORT: "one{# h\u00e9t}other{# h\u00e9t}",
      NARROW: "one{# h\u00e9t}other{# h\u00e9t}",
    },
    YEAR: {
      LONG: "one{# \u00e9v}other{# \u00e9v}",
      SHORT: "one{# \u00e9v}other{# \u00e9v}",
      NARROW: "one{# \u00e9v}other{# \u00e9v}",
    },
  });
}.call(this));
