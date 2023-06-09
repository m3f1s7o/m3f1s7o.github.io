const getInitStatus = (function () {
    let t = !1;
    return () => {
      var e = t;
      return (t = t || !0), e;
    };
  })(),
  PvOpts = (function () {
    function t(e) {
      return $(e).attr("content");
    }
    function e(e) {
      e = t(e);
      return void 0 !== e && !1 !== e;
    }
    return {
      getProxyMeta() {
        return t("meta[name=pv-proxy-endpoint]");
      },
      getLocalMeta() {
        return t("meta[name=pv-cache-path]");
      },
      hasProxyMeta() {
        return e("meta[name=pv-proxy-endpoint]");
      },
      hasLocalMeta() {
        return e("meta[name=pv-cache-path]");
      },
    };
  })(),
  PvStorage = (function () {
    const a = {
        KEY_PV: "pv",
        KEY_PV_SRC: "pv_src",
        KEY_CREATION: "pv_created_date",
      },
      t = { LOCAL: "same-origin", PROXY: "cors" };
    function r(e) {
      return localStorage.getItem(e);
    }
    function o(e, t) {
      localStorage.setItem(e, t);
    }
    function n(e, t) {
      o(a.KEY_PV, e),
        o(a.KEY_PV_SRC, t),
        o(a.KEY_CREATION, new Date().toJSON());
    }
    return {
      keysCount() {
        return Object.keys(a).length;
      },
      hasCache() {
        return null !== localStorage.getItem(a.KEY_PV);
      },
      getCache() {
        return JSON.parse(localStorage.getItem(a.KEY_PV));
      },
      saveLocalCache(e) {
        n(e, t.LOCAL);
      },
      saveProxyCache(e) {
        n(e, t.PROXY);
      },
      isExpired() {
        let e = new Date(r(a.KEY_CREATION));
        return e.setHours(e.getHours() + 1), Date.now() >= e.getTime();
      },
      isFromLocal() {
        return r(a.KEY_PV_SRC) === t.LOCAL;
      },
      isFromProxy() {
        return r(a.KEY_PV_SRC) === t.PROXY;
      },
      newerThan(e) {
        return (
          PvStorage.getCache().totalsForAllResults["ga:pageviews"] >
          e.totalsForAllResults["ga:pageviews"]
        );
      },
      inspectKeys() {
        if (localStorage.length === PvStorage.keysCount())
          for (let e = 0; e < localStorage.length; e++)
            switch (localStorage.key(e)) {
              case a.KEY_PV:
              case a.KEY_PV_SRC:
              case a.KEY_CREATION:
                break;
              default:
                return void localStorage.clear();
            }
        else localStorage.clear();
      },
    };
  })();
function countUp(t, a, r) {
  if (t < a) {
    let e = new CountUp(r, t, a);
    e.error ? console.error(e.error) : e.start();
  }
}
function countPV(t, a) {
  let r = 0;
  if (void 0 !== a)
    for (let e = 0; e < a.length; ++e)
      if (a[parseInt(e, 10)][0] === t) {
        r += parseInt(a[parseInt(e, 10)][1], 10);
        break;
      }
  return r;
}
function tacklePV(e, t, a, r) {
  let o = countPV(t, e);
  (o = 0 === o ? 1 : o),
    r
      ? ((r = parseInt(a.text().replace(/,/g, ""), 10)),
        o > r && countUp(r, o, a.attr("id")))
      : a.text(new Intl.NumberFormat().format(o));
}
function displayPageviews(e) {
  if (void 0 !== e) {
    let t = getInitStatus();
    const a = e.rows;
    0 < $("#post-list").length
      ? $(".post-preview").each(function () {
          var e = $(this).find("a").attr("href");
          tacklePV(a, e, $(this).find(".pageviews"), t);
        })
      : 0 < $(".post").length &&
        ((e = window.location.pathname), tacklePV(a, e, $("#pv"), t));
  }
}
function fetchProxyPageviews() {
  PvOpts.hasProxyMeta() &&
    $.ajax({
      type: "GET",
      url: PvOpts.getProxyMeta(),
      dataType: "jsonp",
      jsonpCallback: "displayPageviews",
      success: (e) => {
        PvStorage.saveProxyCache(JSON.stringify(e));
      },
      error: (e, t, a) => {
        console.log("Failed to load pageviews from proxy server: " + a);
      },
    });
}
function fetchLocalPageviews(t = !1) {
  return fetch(PvOpts.getLocalMeta())
    .then((e) => e.json())
    .then((e) => {
      (t && PvStorage.isFromProxy() && PvStorage.newerThan(e)) ||
        (displayPageviews(e), PvStorage.saveLocalCache(JSON.stringify(e)));
    });
}
$(function () {
  $(".pageviews").length <= 0 ||
    (PvStorage.inspectKeys(),
    PvStorage.hasCache()
      ? (displayPageviews(PvStorage.getCache()),
        PvStorage.isExpired()
          ? PvOpts.hasLocalMeta()
            ? fetchLocalPageviews(!0).then(fetchProxyPageviews)
            : fetchProxyPageviews()
          : PvStorage.isFromLocal() && fetchProxyPageviews())
      : PvOpts.hasLocalMeta()
      ? fetchLocalPageviews().then(fetchProxyPageviews)
      : fetchProxyPageviews());
});
