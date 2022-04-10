;(function (e) {
  function n(n) {
    for (
      var r, u, a = n[0], i = n[1], l = n[2], d = 0, s = [];
      d < a.length;
      d++
    )
      (u = a[d]),
        Object.prototype.hasOwnProperty.call(o, u) && o[u] && s.push(o[u][0]),
        (o[u] = 0)
    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
    f && f(n)
    while (s.length) s.shift()()
    return c.push.apply(c, l || []), t()
  }
  function t() {
    for (var e, n = 0; n < c.length; n++) {
      for (var t = c[n], r = !0, u = 1; u < t.length; u++) {
        var i = t[u]
        0 !== o[i] && (r = !1)
      }
      r && (c.splice(n--, 1), (e = a((a.s = t[0]))))
    }
    return e
  }
  var r = {},
    o = { app: 0 },
    c = []
  function u(e) {
    return (
      a.p +
      'js/' +
      ({}[e] || e) +
      '.' +
      { 'chunk-2d0ae5a2': '33b4c4d9', 'chunk-2d0d2ec7': '6310fa16' }[e] +
      '.js'
    )
  }
  function a(n) {
    if (r[n]) return r[n].exports
    var t = (r[n] = { i: n, l: !1, exports: {} })
    return e[n].call(t.exports, t, t.exports, a), (t.l = !0), t.exports
  }
  ;(a.e = function (e) {
    var n = [],
      t = o[e]
    if (0 !== t)
      if (t) n.push(t[2])
      else {
        var r = new Promise(function (n, r) {
          t = o[e] = [n, r]
        })
        n.push((t[2] = r))
        var c,
          i = document.createElement('script')
        ;(i.charset = 'utf-8'),
          (i.timeout = 120),
          a.nc && i.setAttribute('nonce', a.nc),
          (i.src = u(e))
        var l = new Error()
        c = function (n) {
          ;(i.onerror = i.onload = null), clearTimeout(d)
          var t = o[e]
          if (0 !== t) {
            if (t) {
              var r = n && ('load' === n.type ? 'missing' : n.type),
                c = n && n.target && n.target.src
              ;(l.message =
                'Loading chunk ' + e + ' failed.\n(' + r + ': ' + c + ')'),
                (l.name = 'ChunkLoadError'),
                (l.type = r),
                (l.request = c),
                t[1](l)
            }
            o[e] = void 0
          }
        }
        var d = setTimeout(function () {
          c({ type: 'timeout', target: i })
        }, 12e4)
        ;(i.onerror = i.onload = c), document.head.appendChild(i)
      }
    return Promise.all(n)
  }),
    (a.m = e),
    (a.c = r),
    (a.d = function (e, n, t) {
      a.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t })
    }),
    (a.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (a.t = function (e, n) {
      if ((1 & n && (e = a(e)), 8 & n)) return e
      if (4 & n && 'object' === typeof e && e && e.__esModule) return e
      var t = Object.create(null)
      if (
        (a.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
        2 & n && 'string' != typeof e)
      )
        for (var r in e)
          a.d(
            t,
            r,
            function (n) {
              return e[n]
            }.bind(null, r)
          )
      return t
    }),
    (a.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e['default']
            }
          : function () {
              return e
            }
      return a.d(n, 'a', n), n
    }),
    (a.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n)
    }),
    (a.p = '/'),
    (a.oe = function (e) {
      throw (console.error(e), e)
    })
  var i = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    l = i.push.bind(i)
  ;(i.push = n), (i = i.slice())
  for (var d = 0; d < i.length; d++) n(i[d])
  var f = l
  c.push([0, 'chunk-vendors']), t()
})({
  0: function (e, n, t) {
    e.exports = t('56d7')
  },
  '56d7': function (e, n, t) {
    'use strict'
    t.r(n)
    t('e260'), t('e6cf'), t('cca6'), t('a79d'), t('d3b7'), t('3ca3'), t('ddb0')
    var r = t('7a23'),
      o = Object(r['e'])(' app ')
    function c(e, n, t, c, u, a) {
      var i = Object(r['i'])('home'),
        l = Object(r['i'])('asyunc-category'),
        d = Object(r['i'])('loading')
      return (
        Object(r['h'])(),
        Object(r['d'])('div', null, [
          o,
          Object(r['f'])(i),
          (Object(r['h'])(),
          Object(r['c'])(r['a'], null, {
            default: Object(r['k'])(function () {
              return [Object(r['f'])(l)]
            }),
            fallback: Object(r['k'])(function () {
              return [Object(r['f'])(d)]
            }),
            _: 1
          }))
        ])
      )
    }
    function u(e, n, t, o, c, u) {
      return Object(r['h'])(), Object(r['d'])('div', null, ' home ')
    }
    var a = {},
      i = t('6b0d'),
      l = t.n(i)
    const d = l()(a, [['render', u]])
    var f = d
    function s(e, n, t, o, c, u) {
      return Object(r['h'])(), Object(r['d'])('div', null, ' Loading ')
    }
    var p = {}
    const b = l()(p, [['render', s]])
    var h = b,
      v = Object(r['g'])(function () {
        return t.e('chunk-2d0ae5a2').then(t.bind(null, '0a61'))
      }),
      j = { components: { Home: f, AsyuncCategory: v, Loading: h } }
    const O = l()(j, [['render', c]])
    var y = O
    t
      .e('chunk-2d0d2ec7')
      .then(t.bind(null, '5b26'))
      .then(function (e) {
        console.log(e.sum(20, 30))
      }),
      Object(r['b'])(y).mount('#app')
  }
})
//# sourceMappingURL=app.120c525c.js.map
