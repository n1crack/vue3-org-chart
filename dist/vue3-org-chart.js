import { ref as B, inject as ae, reactive as tn, resolveComponent as nn, openBlock as C, createElementBlock as E, renderSlot as oe, createElementVNode as N, unref as or, createCommentVNode as Ie, withKeys as an, withModifiers as sn, createVNode as un, Transition as on, withCtx as fe, Fragment as fn, renderList as cn, createBlock as at, normalizeClass as vn, onMounted as fr, provide as ie } from "vue";
import ln from "panzoom";
var se = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $n(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hn = typeof se == "object" && se && se.Object === Object && se, it = hn, gn = it, dn = typeof self == "object" && self && self.Object === Object && self, pn = gn || dn || Function("return this")(), I = pn, bn = I, _n = bn.Symbol, Y = _n, cr = Y, st = Object.prototype, yn = st.hasOwnProperty, An = st.toString, X = cr ? cr.toStringTag : void 0;
function mn(e) {
  var r = yn.call(e, X), t = e[X];
  try {
    e[X] = void 0;
    var n = !0;
  } catch {
  }
  var a = An.call(e);
  return n && (r ? e[X] = t : delete e[X]), a;
}
var Sn = mn, On = Object.prototype, Tn = On.toString;
function wn(e) {
  return Tn.call(e);
}
var Cn = wn, vr = Y, In = Sn, Rn = Cn, Pn = "[object Null]", Mn = "[object Undefined]", lr = vr ? vr.toStringTag : void 0;
function En(e) {
  return e == null ? e === void 0 ? Mn : Pn : lr && lr in Object(e) ? In(e) : Rn(e);
}
var z = En;
function xn(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var Z = xn, Fn = z, Ln = Z, jn = "[object AsyncFunction]", Dn = "[object Function]", Bn = "[object GeneratorFunction]", Nn = "[object Proxy]";
function zn(e) {
  if (!Ln(e))
    return !1;
  var r = Fn(e);
  return r == Dn || r == Bn || r == jn || r == Nn;
}
var ut = zn, Gn = I, kn = Gn["__core-js_shared__"], Un = kn, Re = Un, $r = function() {
  var e = /[^.]+$/.exec(Re && Re.keys && Re.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Hn(e) {
  return !!$r && $r in e;
}
var Kn = Hn, qn = Function.prototype, Wn = qn.toString;
function Xn(e) {
  if (e != null) {
    try {
      return Wn.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ot = Xn, Yn = ut, Zn = Kn, Vn = Z, Jn = ot, Qn = /[\\^$.*+?()[\]{}|]/g, ea = /^\[object .+?Constructor\]$/, ra = Function.prototype, ta = Object.prototype, na = ra.toString, aa = ta.hasOwnProperty, ia = RegExp(
  "^" + na.call(aa).replace(Qn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function sa(e) {
  if (!Vn(e) || Zn(e))
    return !1;
  var r = Yn(e) ? ia : ea;
  return r.test(Jn(e));
}
var ua = sa;
function oa(e, r) {
  return e == null ? void 0 : e[r];
}
var fa = oa, ca = ua, va = fa;
function la(e, r) {
  var t = va(e, r);
  return ca(t) ? t : void 0;
}
var x = la, $a = x, ha = function() {
  try {
    var e = $a(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), ft = ha, hr = ft;
function ga(e, r, t) {
  r == "__proto__" && hr ? hr(e, r, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[r] = t;
}
var He = ga;
function da(e, r, t, n) {
  for (var a = -1, i = e == null ? 0 : e.length; ++a < i; ) {
    var s = e[a];
    r(n, s, t(s), e);
  }
  return n;
}
var pa = da;
function ba(e) {
  return function(r, t, n) {
    for (var a = -1, i = Object(r), s = n(r), u = s.length; u--; ) {
      var o = s[e ? u : ++a];
      if (t(i[o], o, i) === !1)
        break;
    }
    return r;
  };
}
var ct = ba, _a = ct, ya = _a(), Aa = ya;
function ma(e, r) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = r(t);
  return n;
}
var vt = ma;
function Sa(e) {
  return e != null && typeof e == "object";
}
var F = Sa, Oa = z, Ta = F, wa = "[object Arguments]";
function Ca(e) {
  return Ta(e) && Oa(e) == wa;
}
var Ia = Ca, gr = Ia, Ra = F, lt = Object.prototype, Pa = lt.hasOwnProperty, Ma = lt.propertyIsEnumerable, Ea = gr(/* @__PURE__ */ function() {
  return arguments;
}()) ? gr : function(e) {
  return Ra(e) && Pa.call(e, "callee") && !Ma.call(e, "callee");
}, Ke = Ea, xa = Array.isArray, d = xa, ce = { exports: {} };
function Fa() {
  return !1;
}
var La = Fa;
ce.exports;
(function(e, r) {
  var t = I, n = La, a = r && !r.nodeType && r, i = a && !0 && e && !e.nodeType && e, s = i && i.exports === a, u = s ? t.Buffer : void 0, o = u ? u.isBuffer : void 0, f = o || n;
  e.exports = f;
})(ce, ce.exports);
var $t = ce.exports, ja = 9007199254740991, Da = /^(?:0|[1-9]\d*)$/;
function Ba(e, r) {
  var t = typeof e;
  return r = r ?? ja, !!r && (t == "number" || t != "symbol" && Da.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var V = Ba, Na = 9007199254740991;
function za(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Na;
}
var qe = za, Ga = z, ka = qe, Ua = F, Ha = "[object Arguments]", Ka = "[object Array]", qa = "[object Boolean]", Wa = "[object Date]", Xa = "[object Error]", Ya = "[object Function]", Za = "[object Map]", Va = "[object Number]", Ja = "[object Object]", Qa = "[object RegExp]", ei = "[object Set]", ri = "[object String]", ti = "[object WeakMap]", ni = "[object ArrayBuffer]", ai = "[object DataView]", ii = "[object Float32Array]", si = "[object Float64Array]", ui = "[object Int8Array]", oi = "[object Int16Array]", fi = "[object Int32Array]", ci = "[object Uint8Array]", vi = "[object Uint8ClampedArray]", li = "[object Uint16Array]", $i = "[object Uint32Array]", g = {};
g[ii] = g[si] = g[ui] = g[oi] = g[fi] = g[ci] = g[vi] = g[li] = g[$i] = !0;
g[Ha] = g[Ka] = g[ni] = g[qa] = g[ai] = g[Wa] = g[Xa] = g[Ya] = g[Za] = g[Va] = g[Ja] = g[Qa] = g[ei] = g[ri] = g[ti] = !1;
function hi(e) {
  return Ua(e) && ka(e.length) && !!g[Ga(e)];
}
var gi = hi;
function di(e) {
  return function(r) {
    return e(r);
  };
}
var J = di, ve = { exports: {} };
ve.exports;
(function(e, r) {
  var t = it, n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, s = i && t.process, u = function() {
    try {
      var o = a && a.require && a.require("util").types;
      return o || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = u;
})(ve, ve.exports);
var pi = ve.exports, bi = gi, _i = J, dr = pi, pr = dr && dr.isTypedArray, yi = pr ? _i(pr) : bi, ht = yi, Ai = vt, mi = Ke, Si = d, Oi = $t, Ti = V, wi = ht, Ci = Object.prototype, Ii = Ci.hasOwnProperty;
function Ri(e, r) {
  var t = Si(e), n = !t && mi(e), a = !t && !n && Oi(e), i = !t && !n && !a && wi(e), s = t || n || a || i, u = s ? Ai(e.length, String) : [], o = u.length;
  for (var f in e)
    (r || Ii.call(e, f)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    Ti(f, o))) && u.push(f);
  return u;
}
var Pi = Ri, Mi = Object.prototype;
function Ei(e) {
  var r = e && e.constructor, t = typeof r == "function" && r.prototype || Mi;
  return e === t;
}
var xi = Ei;
function Fi(e, r) {
  return function(t) {
    return e(r(t));
  };
}
var Li = Fi, ji = Li, Di = ji(Object.keys, Object), Bi = Di, Ni = xi, zi = Bi, Gi = Object.prototype, ki = Gi.hasOwnProperty;
function Ui(e) {
  if (!Ni(e))
    return zi(e);
  var r = [];
  for (var t in Object(e))
    ki.call(e, t) && t != "constructor" && r.push(t);
  return r;
}
var gt = Ui, Hi = ut, Ki = qe;
function qi(e) {
  return e != null && Ki(e.length) && !Hi(e);
}
var R = qi, Wi = Pi, Xi = gt, Yi = R;
function Zi(e) {
  return Yi(e) ? Wi(e) : Xi(e);
}
var G = Zi, Vi = Aa, Ji = G;
function Qi(e, r) {
  return e && Vi(e, r, Ji);
}
var es = Qi, rs = R;
function ts(e, r) {
  return function(t, n) {
    if (t == null)
      return t;
    if (!rs(t))
      return e(t, n);
    for (var a = t.length, i = r ? a : -1, s = Object(t); (r ? i-- : ++i < a) && n(s[i], i, s) !== !1; )
      ;
    return t;
  };
}
var dt = ts, ns = es, as = dt, is = as(ns), P = is, ss = P;
function us(e, r, t, n) {
  return ss(e, function(a, i, s) {
    r(n, a, t(a), s);
  }), n;
}
var os = us;
function fs() {
  this.__data__ = [], this.size = 0;
}
var cs = fs;
function vs(e, r) {
  return e === r || e !== e && r !== r;
}
var We = vs, ls = We;
function $s(e, r) {
  for (var t = e.length; t--; )
    if (ls(e[t][0], r))
      return t;
  return -1;
}
var $e = $s, hs = $e, gs = Array.prototype, ds = gs.splice;
function ps(e) {
  var r = this.__data__, t = hs(r, e);
  if (t < 0)
    return !1;
  var n = r.length - 1;
  return t == n ? r.pop() : ds.call(r, t, 1), --this.size, !0;
}
var bs = ps, _s = $e;
function ys(e) {
  var r = this.__data__, t = _s(r, e);
  return t < 0 ? void 0 : r[t][1];
}
var As = ys, ms = $e;
function Ss(e) {
  return ms(this.__data__, e) > -1;
}
var Os = Ss, Ts = $e;
function ws(e, r) {
  var t = this.__data__, n = Ts(t, e);
  return n < 0 ? (++this.size, t.push([e, r])) : t[n][1] = r, this;
}
var Cs = ws, Is = cs, Rs = bs, Ps = As, Ms = Os, Es = Cs;
function k(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
k.prototype.clear = Is;
k.prototype.delete = Rs;
k.prototype.get = Ps;
k.prototype.has = Ms;
k.prototype.set = Es;
var he = k, xs = he;
function Fs() {
  this.__data__ = new xs(), this.size = 0;
}
var Ls = Fs;
function js(e) {
  var r = this.__data__, t = r.delete(e);
  return this.size = r.size, t;
}
var Ds = js;
function Bs(e) {
  return this.__data__.get(e);
}
var Ns = Bs;
function zs(e) {
  return this.__data__.has(e);
}
var Gs = zs, ks = x, Us = I, Hs = ks(Us, "Map"), Xe = Hs, Ks = x, qs = Ks(Object, "create"), ge = qs, br = ge;
function Ws() {
  this.__data__ = br ? br(null) : {}, this.size = 0;
}
var Xs = Ws;
function Ys(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var Zs = Ys, Vs = ge, Js = "__lodash_hash_undefined__", Qs = Object.prototype, eu = Qs.hasOwnProperty;
function ru(e) {
  var r = this.__data__;
  if (Vs) {
    var t = r[e];
    return t === Js ? void 0 : t;
  }
  return eu.call(r, e) ? r[e] : void 0;
}
var tu = ru, nu = ge, au = Object.prototype, iu = au.hasOwnProperty;
function su(e) {
  var r = this.__data__;
  return nu ? r[e] !== void 0 : iu.call(r, e);
}
var uu = su, ou = ge, fu = "__lodash_hash_undefined__";
function cu(e, r) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = ou && r === void 0 ? fu : r, this;
}
var vu = cu, lu = Xs, $u = Zs, hu = tu, gu = uu, du = vu;
function U(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
U.prototype.clear = lu;
U.prototype.delete = $u;
U.prototype.get = hu;
U.prototype.has = gu;
U.prototype.set = du;
var pu = U, _r = pu, bu = he, _u = Xe;
function yu() {
  this.size = 0, this.__data__ = {
    hash: new _r(),
    map: new (_u || bu)(),
    string: new _r()
  };
}
var Au = yu;
function mu(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
var Su = mu, Ou = Su;
function Tu(e, r) {
  var t = e.__data__;
  return Ou(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map;
}
var de = Tu, wu = de;
function Cu(e) {
  var r = wu(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
var Iu = Cu, Ru = de;
function Pu(e) {
  return Ru(this, e).get(e);
}
var Mu = Pu, Eu = de;
function xu(e) {
  return Eu(this, e).has(e);
}
var Fu = xu, Lu = de;
function ju(e, r) {
  var t = Lu(this, e), n = t.size;
  return t.set(e, r), this.size += t.size == n ? 0 : 1, this;
}
var Du = ju, Bu = Au, Nu = Iu, zu = Mu, Gu = Fu, ku = Du;
function H(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
H.prototype.clear = Bu;
H.prototype.delete = Nu;
H.prototype.get = zu;
H.prototype.has = Gu;
H.prototype.set = ku;
var Ye = H, Uu = he, Hu = Xe, Ku = Ye, qu = 200;
function Wu(e, r) {
  var t = this.__data__;
  if (t instanceof Uu) {
    var n = t.__data__;
    if (!Hu || n.length < qu - 1)
      return n.push([e, r]), this.size = ++t.size, this;
    t = this.__data__ = new Ku(n);
  }
  return t.set(e, r), this.size = t.size, this;
}
var Xu = Wu, Yu = he, Zu = Ls, Vu = Ds, Ju = Ns, Qu = Gs, eo = Xu;
function K(e) {
  var r = this.__data__ = new Yu(e);
  this.size = r.size;
}
K.prototype.clear = Zu;
K.prototype.delete = Vu;
K.prototype.get = Ju;
K.prototype.has = Qu;
K.prototype.set = eo;
var pt = K, ro = "__lodash_hash_undefined__";
function to(e) {
  return this.__data__.set(e, ro), this;
}
var no = to;
function ao(e) {
  return this.__data__.has(e);
}
var io = ao, so = Ye, uo = no, oo = io;
function le(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.__data__ = new so(); ++r < t; )
    this.add(e[r]);
}
le.prototype.add = le.prototype.push = uo;
le.prototype.has = oo;
var pe = le;
function fo(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n; )
    if (r(e[t], t, e))
      return !0;
  return !1;
}
var bt = fo;
function co(e, r) {
  return e.has(r);
}
var be = co, vo = pe, lo = bt, $o = be, ho = 1, go = 2;
function po(e, r, t, n, a, i) {
  var s = t & ho, u = e.length, o = r.length;
  if (u != o && !(s && o > u))
    return !1;
  var f = i.get(e), c = i.get(r);
  if (f && c)
    return f == r && c == e;
  var l = -1, v = !0, $ = t & go ? new vo() : void 0;
  for (i.set(e, r), i.set(r, e); ++l < u; ) {
    var h = e[l], p = r[l];
    if (n)
      var y = s ? n(p, h, l, r, e, i) : n(h, p, l, e, r, i);
    if (y !== void 0) {
      if (y)
        continue;
      v = !1;
      break;
    }
    if ($) {
      if (!lo(r, function(O, T) {
        if (!$o($, T) && (h === O || a(h, O, t, n, i)))
          return $.push(T);
      })) {
        v = !1;
        break;
      }
    } else if (!(h === p || a(h, p, t, n, i))) {
      v = !1;
      break;
    }
  }
  return i.delete(e), i.delete(r), v;
}
var _t = po, bo = I, _o = bo.Uint8Array, yo = _o;
function Ao(e) {
  var r = -1, t = Array(e.size);
  return e.forEach(function(n, a) {
    t[++r] = [a, n];
  }), t;
}
var mo = Ao;
function So(e) {
  var r = -1, t = Array(e.size);
  return e.forEach(function(n) {
    t[++r] = n;
  }), t;
}
var Ze = So, yr = Y, Ar = yo, Oo = We, To = _t, wo = mo, Co = Ze, Io = 1, Ro = 2, Po = "[object Boolean]", Mo = "[object Date]", Eo = "[object Error]", xo = "[object Map]", Fo = "[object Number]", Lo = "[object RegExp]", jo = "[object Set]", Do = "[object String]", Bo = "[object Symbol]", No = "[object ArrayBuffer]", zo = "[object DataView]", mr = yr ? yr.prototype : void 0, Pe = mr ? mr.valueOf : void 0;
function Go(e, r, t, n, a, i, s) {
  switch (t) {
    case zo:
      if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset)
        return !1;
      e = e.buffer, r = r.buffer;
    case No:
      return !(e.byteLength != r.byteLength || !i(new Ar(e), new Ar(r)));
    case Po:
    case Mo:
    case Fo:
      return Oo(+e, +r);
    case Eo:
      return e.name == r.name && e.message == r.message;
    case Lo:
    case Do:
      return e == r + "";
    case xo:
      var u = wo;
    case jo:
      var o = n & Io;
      if (u || (u = Co), e.size != r.size && !o)
        return !1;
      var f = s.get(e);
      if (f)
        return f == r;
      n |= Ro, s.set(e, r);
      var c = To(u(e), u(r), n, a, i, s);
      return s.delete(e), c;
    case Bo:
      if (Pe)
        return Pe.call(e) == Pe.call(r);
  }
  return !1;
}
var ko = Go;
function Uo(e, r) {
  for (var t = -1, n = r.length, a = e.length; ++t < n; )
    e[a + t] = r[t];
  return e;
}
var yt = Uo, Ho = yt, Ko = d;
function qo(e, r, t) {
  var n = r(e);
  return Ko(e) ? n : Ho(n, t(e));
}
var Wo = qo;
function Xo(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++t < n; ) {
    var s = e[t];
    r(s, t, e) && (i[a++] = s);
  }
  return i;
}
var L = Xo;
function Yo() {
  return [];
}
var Zo = Yo, Vo = L, Jo = Zo, Qo = Object.prototype, ef = Qo.propertyIsEnumerable, Sr = Object.getOwnPropertySymbols, rf = Sr ? function(e) {
  return e == null ? [] : (e = Object(e), Vo(Sr(e), function(r) {
    return ef.call(e, r);
  }));
} : Jo, tf = rf, nf = Wo, af = tf, sf = G;
function uf(e) {
  return nf(e, sf, af);
}
var of = uf, Or = of, ff = 1, cf = Object.prototype, vf = cf.hasOwnProperty;
function lf(e, r, t, n, a, i) {
  var s = t & ff, u = Or(e), o = u.length, f = Or(r), c = f.length;
  if (o != c && !s)
    return !1;
  for (var l = o; l--; ) {
    var v = u[l];
    if (!(s ? v in r : vf.call(r, v)))
      return !1;
  }
  var $ = i.get(e), h = i.get(r);
  if ($ && h)
    return $ == r && h == e;
  var p = !0;
  i.set(e, r), i.set(r, e);
  for (var y = s; ++l < o; ) {
    v = u[l];
    var O = e[v], T = r[v];
    if (n)
      var j = s ? n(T, O, v, r, e, i) : n(O, T, v, e, r, i);
    if (!(j === void 0 ? O === T || a(O, T, t, n, i) : j)) {
      p = !1;
      break;
    }
    y || (y = v == "constructor");
  }
  if (p && !y) {
    var D = e.constructor, ne = r.constructor;
    D != ne && "constructor" in e && "constructor" in r && !(typeof D == "function" && D instanceof D && typeof ne == "function" && ne instanceof ne) && (p = !1);
  }
  return i.delete(e), i.delete(r), p;
}
var $f = lf, hf = x, gf = I, df = hf(gf, "DataView"), pf = df, bf = x, _f = I, yf = bf(_f, "Promise"), Af = yf, mf = x, Sf = I, Of = mf(Sf, "Set"), At = Of, Tf = x, wf = I, Cf = Tf(wf, "WeakMap"), If = Cf, je = pf, De = Xe, Be = Af, Ne = At, ze = If, mt = z, q = ot, Tr = "[object Map]", Rf = "[object Object]", wr = "[object Promise]", Cr = "[object Set]", Ir = "[object WeakMap]", Rr = "[object DataView]", Pf = q(je), Mf = q(De), Ef = q(Be), xf = q(Ne), Ff = q(ze), M = mt;
(je && M(new je(new ArrayBuffer(1))) != Rr || De && M(new De()) != Tr || Be && M(Be.resolve()) != wr || Ne && M(new Ne()) != Cr || ze && M(new ze()) != Ir) && (M = function(e) {
  var r = mt(e), t = r == Rf ? e.constructor : void 0, n = t ? q(t) : "";
  if (n)
    switch (n) {
      case Pf:
        return Rr;
      case Mf:
        return Tr;
      case Ef:
        return wr;
      case xf:
        return Cr;
      case Ff:
        return Ir;
    }
  return r;
});
var St = M, Me = pt, Lf = _t, jf = ko, Df = $f, Pr = St, Mr = d, Er = $t, Bf = ht, Nf = 1, xr = "[object Arguments]", Fr = "[object Array]", ue = "[object Object]", zf = Object.prototype, Lr = zf.hasOwnProperty;
function Gf(e, r, t, n, a, i) {
  var s = Mr(e), u = Mr(r), o = s ? Fr : Pr(e), f = u ? Fr : Pr(r);
  o = o == xr ? ue : o, f = f == xr ? ue : f;
  var c = o == ue, l = f == ue, v = o == f;
  if (v && Er(e)) {
    if (!Er(r))
      return !1;
    s = !0, c = !1;
  }
  if (v && !c)
    return i || (i = new Me()), s || Bf(e) ? Lf(e, r, t, n, a, i) : jf(e, r, o, t, n, a, i);
  if (!(t & Nf)) {
    var $ = c && Lr.call(e, "__wrapped__"), h = l && Lr.call(r, "__wrapped__");
    if ($ || h) {
      var p = $ ? e.value() : e, y = h ? r.value() : r;
      return i || (i = new Me()), a(p, y, t, n, i);
    }
  }
  return v ? (i || (i = new Me()), Df(e, r, t, n, a, i)) : !1;
}
var kf = Gf, Uf = kf, jr = F;
function Ot(e, r, t, n, a) {
  return e === r ? !0 : e == null || r == null || !jr(e) && !jr(r) ? e !== e && r !== r : Uf(e, r, t, n, Ot, a);
}
var Tt = Ot, Hf = pt, Kf = Tt, qf = 1, Wf = 2;
function Xf(e, r, t, n) {
  var a = t.length, i = a, s = !n;
  if (e == null)
    return !i;
  for (e = Object(e); a--; ) {
    var u = t[a];
    if (s && u[2] ? u[1] !== e[u[0]] : !(u[0] in e))
      return !1;
  }
  for (; ++a < i; ) {
    u = t[a];
    var o = u[0], f = e[o], c = u[1];
    if (s && u[2]) {
      if (f === void 0 && !(o in e))
        return !1;
    } else {
      var l = new Hf();
      if (n)
        var v = n(f, c, o, e, r, l);
      if (!(v === void 0 ? Kf(c, f, qf | Wf, n, l) : v))
        return !1;
    }
  }
  return !0;
}
var Yf = Xf, Zf = Z;
function Vf(e) {
  return e === e && !Zf(e);
}
var wt = Vf, Jf = wt, Qf = G;
function ec(e) {
  for (var r = Qf(e), t = r.length; t--; ) {
    var n = r[t], a = e[n];
    r[t] = [n, a, Jf(a)];
  }
  return r;
}
var rc = ec;
function tc(e, r) {
  return function(t) {
    return t == null ? !1 : t[e] === r && (r !== void 0 || e in Object(t));
  };
}
var Ct = tc, nc = Yf, ac = rc, ic = Ct;
function sc(e) {
  var r = ac(e);
  return r.length == 1 && r[0][2] ? ic(r[0][0], r[0][1]) : function(t) {
    return t === e || nc(t, e, r);
  };
}
var uc = sc, oc = z, fc = F, cc = "[object Symbol]";
function vc(e) {
  return typeof e == "symbol" || fc(e) && oc(e) == cc;
}
var Q = vc, lc = d, $c = Q, hc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, gc = /^\w*$/;
function dc(e, r) {
  if (lc(e))
    return !1;
  var t = typeof e;
  return t == "number" || t == "symbol" || t == "boolean" || e == null || $c(e) ? !0 : gc.test(e) || !hc.test(e) || r != null && e in Object(r);
}
var Ve = dc, It = Ye, pc = "Expected a function";
function Je(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(pc);
  var t = function() {
    var n = arguments, a = r ? r.apply(this, n) : n[0], i = t.cache;
    if (i.has(a))
      return i.get(a);
    var s = e.apply(this, n);
    return t.cache = i.set(a, s) || i, s;
  };
  return t.cache = new (Je.Cache || It)(), t;
}
Je.Cache = It;
var bc = Je, _c = bc, yc = 500;
function Ac(e) {
  var r = _c(e, function(n) {
    return t.size === yc && t.clear(), n;
  }), t = r.cache;
  return r;
}
var mc = Ac, Sc = mc, Oc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Tc = /\\(\\)?/g, wc = Sc(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(Oc, function(t, n, a, i) {
    r.push(a ? i.replace(Tc, "$1") : n || t);
  }), r;
}), Cc = wc;
function Ic(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, a = Array(n); ++t < n; )
    a[t] = r(e[t], t, e);
  return a;
}
var A = Ic, Dr = Y, Rc = A, Pc = d, Mc = Q, Ec = 1 / 0, Br = Dr ? Dr.prototype : void 0, Nr = Br ? Br.toString : void 0;
function Rt(e) {
  if (typeof e == "string")
    return e;
  if (Pc(e))
    return Rc(e, Rt) + "";
  if (Mc(e))
    return Nr ? Nr.call(e) : "";
  var r = e + "";
  return r == "0" && 1 / e == -Ec ? "-0" : r;
}
var xc = Rt, Fc = xc;
function Lc(e) {
  return e == null ? "" : Fc(e);
}
var jc = Lc, Dc = d, Bc = Ve, Nc = Cc, zc = jc;
function Gc(e, r) {
  return Dc(e) ? e : Bc(e, r) ? [e] : Nc(zc(e));
}
var _e = Gc, kc = Q, Uc = 1 / 0;
function Hc(e) {
  if (typeof e == "string" || kc(e))
    return e;
  var r = e + "";
  return r == "0" && 1 / e == -Uc ? "-0" : r;
}
var W = Hc, Kc = _e, qc = W;
function Wc(e, r) {
  r = Kc(r, e);
  for (var t = 0, n = r.length; e != null && t < n; )
    e = e[qc(r[t++])];
  return t && t == n ? e : void 0;
}
var ye = Wc, Xc = ye;
function Yc(e, r, t) {
  var n = e == null ? void 0 : Xc(e, r);
  return n === void 0 ? t : n;
}
var Pt = Yc;
function Zc(e, r) {
  return e != null && r in Object(e);
}
var Vc = Zc, Jc = _e, Qc = Ke, ev = d, rv = V, tv = qe, nv = W;
function av(e, r, t) {
  r = Jc(r, e);
  for (var n = -1, a = r.length, i = !1; ++n < a; ) {
    var s = nv(r[n]);
    if (!(i = e != null && t(e, s)))
      break;
    e = e[s];
  }
  return i || ++n != a ? i : (a = e == null ? 0 : e.length, !!a && tv(a) && rv(s, a) && (ev(e) || Qc(e)));
}
var iv = av, sv = Vc, uv = iv;
function ov(e, r) {
  return e != null && uv(e, r, sv);
}
var fv = ov, cv = Tt, vv = Pt, lv = fv, $v = Ve, hv = wt, gv = Ct, dv = W, pv = 1, bv = 2;
function _v(e, r) {
  return $v(e) && hv(r) ? gv(dv(e), r) : function(t) {
    var n = vv(t, e);
    return n === void 0 && n === r ? lv(t, e) : cv(r, n, pv | bv);
  };
}
var yv = _v;
function Av(e) {
  return e;
}
var ee = Av;
function mv(e) {
  return function(r) {
    return r == null ? void 0 : r[e];
  };
}
var Qe = mv, Sv = ye;
function Ov(e) {
  return function(r) {
    return Sv(r, e);
  };
}
var Tv = Ov, wv = Qe, Cv = Tv, Iv = Ve, Rv = W;
function Pv(e) {
  return Iv(e) ? wv(Rv(e)) : Cv(e);
}
var Mv = Pv, Ev = uc, xv = yv, Fv = ee, Lv = d, jv = Mv;
function Dv(e) {
  return typeof e == "function" ? e : e == null ? Fv : typeof e == "object" ? Lv(e) ? xv(e[0], e[1]) : Ev(e) : jv(e);
}
var _ = Dv, Bv = pa, Nv = os, zv = _, Gv = d;
function kv(e, r) {
  return function(t, n) {
    var a = Gv(t) ? Bv : Nv, i = r ? r() : {};
    return a(t, e, zv(n), i);
  };
}
var Ae = kv, Uv = He, Hv = Ae, Kv = Object.prototype, qv = Kv.hasOwnProperty, Wv = Hv(function(e, r, t) {
  qv.call(e, t) ? ++e[t] : Uv(e, t, 1);
}), Xv = Wv;
function Yv(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n && r(e[t], t, e) !== !1; )
    ;
  return e;
}
var Zv = Yv, Vv = ee;
function Jv(e) {
  return typeof e == "function" ? e : Vv;
}
var Mt = Jv, Qv = Zv, el = P, rl = Mt, tl = d;
function nl(e, r) {
  var t = tl(e) ? Qv : el;
  return t(e, rl(r));
}
var Et = nl, al = Et;
function il(e, r) {
  for (var t = e == null ? 0 : e.length; t-- && r(e[t], t, e) !== !1; )
    ;
  return e;
}
var sl = il, ul = ct, ol = ul(!0), fl = ol, cl = fl, vl = G;
function ll(e, r) {
  return e && cl(e, r, vl);
}
var $l = ll, hl = $l, gl = dt, dl = gl(hl, !0), xt = dl, pl = sl, bl = xt, _l = Mt, yl = d;
function Al(e, r) {
  var t = yl(e) ? pl : bl;
  return t(e, _l(r));
}
var Ft = Al, ml = Ft;
function Sl(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n; )
    if (!r(e[t], t, e))
      return !1;
  return !0;
}
var Ol = Sl, Tl = P;
function wl(e, r) {
  var t = !0;
  return Tl(e, function(n, a, i) {
    return t = !!r(n, a, i), t;
  }), t;
}
var Cl = wl, Il = We, Rl = R, Pl = V, Ml = Z;
function El(e, r, t) {
  if (!Ml(t))
    return !1;
  var n = typeof r;
  return (n == "number" ? Rl(t) && Pl(r, t.length) : n == "string" && r in t) ? Il(t[r], e) : !1;
}
var me = El, xl = Ol, Fl = Cl, Ll = _, jl = d, Dl = me;
function Bl(e, r, t) {
  var n = jl(e) ? xl : Fl;
  return t && Dl(e, r, t) && (r = void 0), n(e, Ll(r));
}
var Nl = Bl, zl = P;
function Gl(e, r) {
  var t = [];
  return zl(e, function(n, a, i) {
    r(n, a, i) && t.push(n);
  }), t;
}
var Lt = Gl, kl = L, Ul = Lt, Hl = _, Kl = d;
function ql(e, r) {
  var t = Kl(e) ? kl : Ul;
  return t(e, Hl(r));
}
var Wl = ql, Xl = _, Yl = R, Zl = G;
function Vl(e) {
  return function(r, t, n) {
    var a = Object(r);
    if (!Yl(r)) {
      var i = Xl(t);
      r = Zl(r), t = function(u) {
        return i(a[u], u, a);
      };
    }
    var s = e(r, t, n);
    return s > -1 ? a[i ? r[s] : s] : void 0;
  };
}
var jt = Vl;
function Jl(e, r, t, n) {
  for (var a = e.length, i = t + (n ? 1 : -1); n ? i-- : ++i < a; )
    if (r(e[i], i, e))
      return i;
  return -1;
}
var er = Jl, Ql = /\s/;
function e$(e) {
  for (var r = e.length; r-- && Ql.test(e.charAt(r)); )
    ;
  return r;
}
var r$ = e$, t$ = r$, n$ = /^\s+/;
function a$(e) {
  return e && e.slice(0, t$(e) + 1).replace(n$, "");
}
var i$ = a$, s$ = i$, zr = Z, u$ = Q, Gr = NaN, o$ = /^[-+]0x[0-9a-f]+$/i, f$ = /^0b[01]+$/i, c$ = /^0o[0-7]+$/i, v$ = parseInt;
function l$(e) {
  if (typeof e == "number")
    return e;
  if (u$(e))
    return Gr;
  if (zr(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = zr(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = s$(e);
  var t = f$.test(e);
  return t || c$.test(e) ? v$(e.slice(2), t ? 2 : 8) : o$.test(e) ? Gr : +e;
}
var $$ = l$, h$ = $$, kr = 1 / 0, g$ = 17976931348623157e292;
function d$(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = h$(e), e === kr || e === -kr) {
    var r = e < 0 ? -1 : 1;
    return r * g$;
  }
  return e === e ? e : 0;
}
var p$ = d$, b$ = p$;
function _$(e) {
  var r = b$(e), t = r % 1;
  return r === r ? t ? r - t : r : 0;
}
var re = _$, y$ = er, A$ = _, m$ = re, S$ = Math.max;
function O$(e, r, t) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var a = t == null ? 0 : m$(t);
  return a < 0 && (a = S$(n + a, 0)), y$(e, A$(r), a);
}
var T$ = O$, w$ = jt, C$ = T$, I$ = w$(C$), R$ = I$, P$ = er, M$ = _, E$ = re, x$ = Math.max, F$ = Math.min;
function L$(e, r, t) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var a = n - 1;
  return t !== void 0 && (a = E$(t), a = t < 0 ? x$(n + a, 0) : F$(a, n - 1)), P$(e, M$(r), a, !0);
}
var j$ = L$, D$ = jt, B$ = j$, N$ = D$(B$), z$ = N$, Ur = Y, G$ = Ke, k$ = d, Hr = Ur ? Ur.isConcatSpreadable : void 0;
function U$(e) {
  return k$(e) || G$(e) || !!(Hr && e && e[Hr]);
}
var H$ = U$, K$ = yt, q$ = H$;
function Dt(e, r, t, n, a) {
  var i = -1, s = e.length;
  for (t || (t = q$), a || (a = []); ++i < s; ) {
    var u = e[i];
    r > 0 && t(u) ? r > 1 ? Dt(u, r - 1, t, n, a) : K$(a, u) : n || (a[a.length] = u);
  }
  return a;
}
var m = Dt, W$ = P, X$ = R;
function Y$(e, r) {
  var t = -1, n = X$(e) ? Array(e.length) : [];
  return W$(e, function(a, i, s) {
    n[++t] = r(a, i, s);
  }), n;
}
var Bt = Y$, Z$ = A, V$ = _, J$ = Bt, Q$ = d;
function eh(e, r) {
  var t = Q$(e) ? Z$ : J$;
  return t(e, V$(r));
}
var Se = eh, rh = m, th = Se;
function nh(e, r) {
  return rh(th(e, r), 1);
}
var ah = nh, ih = m, sh = Se, uh = 1 / 0;
function oh(e, r) {
  return ih(sh(e, r), uh);
}
var fh = oh, ch = m, vh = Se, lh = re;
function $h(e, r, t) {
  return t = t === void 0 ? 1 : lh(t), ch(vh(e, r), t);
}
var hh = $h, gh = He, dh = Ae, ph = Object.prototype, bh = ph.hasOwnProperty, _h = dh(function(e, r, t) {
  bh.call(e, t) ? e[t].push(r) : gh(e, t, [r]);
}), yh = _h;
function Ah(e) {
  return e !== e;
}
var mh = Ah;
function Sh(e, r, t) {
  for (var n = t - 1, a = e.length; ++n < a; )
    if (e[n] === r)
      return n;
  return -1;
}
var Oh = Sh, Th = er, wh = mh, Ch = Oh;
function Ih(e, r, t) {
  return r === r ? Ch(e, r, t) : Th(e, wh, t);
}
var rr = Ih, Rh = z, Ph = d, Mh = F, Eh = "[object String]";
function xh(e) {
  return typeof e == "string" || !Ph(e) && Mh(e) && Rh(e) == Eh;
}
var Nt = xh, Fh = A;
function Lh(e, r) {
  return Fh(r, function(t) {
    return e[t];
  });
}
var jh = Lh, Dh = jh, Bh = G;
function Nh(e) {
  return e == null ? [] : Dh(e, Bh(e));
}
var Oe = Nh, zh = rr, Gh = R, kh = Nt, Uh = re, Hh = Oe, Kh = Math.max;
function qh(e, r, t, n) {
  e = Gh(e) ? e : Hh(e), t = t && !n ? Uh(t) : 0;
  var a = e.length;
  return t < 0 && (t = Kh(a + t, 0)), kh(e) ? t <= a && e.indexOf(r, t) > -1 : !!a && zh(e, r, t) > -1;
}
var Wh = qh;
function Xh(e, r, t) {
  switch (t.length) {
    case 0:
      return e.call(r);
    case 1:
      return e.call(r, t[0]);
    case 2:
      return e.call(r, t[0], t[1]);
    case 3:
      return e.call(r, t[0], t[1], t[2]);
  }
  return e.apply(r, t);
}
var Te = Xh;
function Yh(e) {
  var r = e == null ? 0 : e.length;
  return r ? e[r - 1] : void 0;
}
var w = Yh;
function Zh(e, r, t) {
  var n = -1, a = e.length;
  r < 0 && (r = -r > a ? 0 : a + r), t = t > a ? a : t, t < 0 && (t += a), a = r > t ? 0 : t - r >>> 0, r >>>= 0;
  for (var i = Array(a); ++n < a; )
    i[n] = e[n + r];
  return i;
}
var Vh = Zh, Jh = ye, Qh = Vh;
function eg(e, r) {
  return r.length < 2 ? e : Jh(e, Qh(r, 0, -1));
}
var zt = eg, rg = Te, tg = _e, ng = w, ag = zt, ig = W;
function sg(e, r, t) {
  r = tg(r, e), e = ag(e, r);
  var n = e == null ? e : e[ig(ng(r))];
  return n == null ? void 0 : rg(n, e, t);
}
var ug = sg, og = Te, Kr = Math.max;
function fg(e, r, t) {
  return r = Kr(r === void 0 ? e.length - 1 : r, 0), function() {
    for (var n = arguments, a = -1, i = Kr(n.length - r, 0), s = Array(i); ++a < i; )
      s[a] = n[r + a];
    a = -1;
    for (var u = Array(r + 1); ++a < r; )
      u[a] = n[a];
    return u[r] = t(s), og(e, this, u);
  };
}
var Gt = fg;
function cg(e) {
  return function() {
    return e;
  };
}
var vg = cg, lg = vg, qr = ft, $g = ee, hg = qr ? function(e, r) {
  return qr(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: lg(r),
    writable: !0
  });
} : $g, gg = hg, dg = 800, pg = 16, bg = Date.now;
function _g(e) {
  var r = 0, t = 0;
  return function() {
    var n = bg(), a = pg - (n - t);
    if (t = n, a > 0) {
      if (++r >= dg)
        return arguments[0];
    } else
      r = 0;
    return e.apply(void 0, arguments);
  };
}
var yg = _g, Ag = gg, mg = yg, Sg = mg(Ag), kt = Sg, Og = ee, Tg = Gt, wg = kt;
function Cg(e, r) {
  return wg(Tg(e, r, Og), e + "");
}
var b = Cg, Ig = Te, Rg = P, Pg = ug, Mg = b, Eg = R, xg = Mg(function(e, r, t) {
  var n = -1, a = typeof r == "function", i = Eg(e) ? Array(e.length) : [];
  return Rg(e, function(s) {
    i[++n] = a ? Ig(r, s, t) : Pg(s, r, t);
  }), i;
}), Fg = xg, Lg = He, jg = Ae, Dg = jg(function(e, r, t) {
  Lg(e, t, r);
}), Bg = Dg;
function Ng(e, r) {
  var t = e.length;
  for (e.sort(r); t--; )
    e[t] = e[t].value;
  return e;
}
var zg = Ng, Wr = Q;
function Gg(e, r) {
  if (e !== r) {
    var t = e !== void 0, n = e === null, a = e === e, i = Wr(e), s = r !== void 0, u = r === null, o = r === r, f = Wr(r);
    if (!u && !f && !i && e > r || i && s && o && !u && !f || n && s && o || !t && o || !a)
      return 1;
    if (!n && !i && !f && e < r || f && t && a && !n && !i || u && t && a || !s && a || !o)
      return -1;
  }
  return 0;
}
var Ut = Gg, kg = Ut;
function Ug(e, r, t) {
  for (var n = -1, a = e.criteria, i = r.criteria, s = a.length, u = t.length; ++n < s; ) {
    var o = kg(a[n], i[n]);
    if (o) {
      if (n >= u)
        return o;
      var f = t[n];
      return o * (f == "desc" ? -1 : 1);
    }
  }
  return e.index - r.index;
}
var Hg = Ug, Ee = A, Kg = ye, qg = _, Wg = Bt, Xg = zg, Yg = J, Zg = Hg, Vg = ee, Jg = d;
function Qg(e, r, t) {
  r.length ? r = Ee(r, function(i) {
    return Jg(i) ? function(s) {
      return Kg(s, i.length === 1 ? i[0] : i);
    } : i;
  }) : r = [Vg];
  var n = -1;
  r = Ee(r, Yg(qg));
  var a = Wg(e, function(i, s, u) {
    var o = Ee(r, function(f) {
      return f(i);
    });
    return { criteria: o, index: ++n, value: i };
  });
  return Xg(a, function(i, s) {
    return Zg(i, s, t);
  });
}
var Ht = Qg, ed = Ht, Xr = d;
function rd(e, r, t, n) {
  return e == null ? [] : (Xr(r) || (r = r == null ? [] : [r]), t = n ? void 0 : t, Xr(t) || (t = t == null ? [] : [t]), ed(e, r, t));
}
var td = rd, nd = Ae, ad = nd(function(e, r, t) {
  e[t ? 0 : 1].push(r);
}, function() {
  return [[], []];
}), id = ad;
function sd(e, r, t, n) {
  var a = -1, i = e == null ? 0 : e.length;
  for (n && i && (t = e[++a]); ++a < i; )
    t = r(t, e[a], a, e);
  return t;
}
var ud = sd;
function od(e, r, t, n, a) {
  return a(e, function(i, s, u) {
    t = n ? (n = !1, i) : r(t, i, s, u);
  }), t;
}
var Kt = od, fd = ud, cd = P, vd = _, ld = Kt, $d = d;
function hd(e, r, t) {
  var n = $d(e) ? fd : ld, a = arguments.length < 3;
  return n(e, vd(r), t, a, cd);
}
var gd = hd;
function dd(e, r, t, n) {
  var a = e == null ? 0 : e.length;
  for (n && a && (t = e[--a]); a--; )
    t = r(t, e[a], a, e);
  return t;
}
var pd = dd, bd = pd, _d = xt, yd = _, Ad = Kt, md = d;
function Sd(e, r, t) {
  var n = md(e) ? bd : Ad, a = arguments.length < 3;
  return n(e, yd(r), t, a, _d);
}
var Od = Sd, Td = "Expected a function";
function wd(e) {
  if (typeof e != "function")
    throw new TypeError(Td);
  return function() {
    var r = arguments;
    switch (r.length) {
      case 0:
        return !e.call(this);
      case 1:
        return !e.call(this, r[0]);
      case 2:
        return !e.call(this, r[0], r[1]);
      case 3:
        return !e.call(this, r[0], r[1], r[2]);
    }
    return !e.apply(this, r);
  };
}
var Cd = wd, Id = L, Rd = Lt, Pd = _, Md = d, Ed = Cd;
function xd(e, r) {
  var t = Md(e) ? Id : Rd;
  return t(e, Ed(Pd(r)));
}
var Fd = xd, Ld = Math.floor, jd = Math.random;
function Dd(e, r) {
  return e + Ld(jd() * (r - e + 1));
}
var qt = Dd, Bd = qt;
function Nd(e) {
  var r = e.length;
  return r ? e[Bd(0, r - 1)] : void 0;
}
var Wt = Nd, zd = Wt, Gd = Oe;
function kd(e) {
  return zd(Gd(e));
}
var Ud = kd, Hd = Wt, Kd = Ud, qd = d;
function Wd(e) {
  var r = qd(e) ? Hd : Kd;
  return r(e);
}
var Xd = Wd;
function Yd(e, r, t) {
  return e === e && (t !== void 0 && (e = e <= t ? e : t), r !== void 0 && (e = e >= r ? e : r)), e;
}
var Xt = Yd;
function Zd(e, r) {
  var t = -1, n = e.length;
  for (r || (r = Array(n)); ++t < n; )
    r[t] = e[t];
  return r;
}
var tr = Zd, Vd = qt;
function Jd(e, r) {
  var t = -1, n = e.length, a = n - 1;
  for (r = r === void 0 ? n : r; ++t < r; ) {
    var i = Vd(t, a), s = e[i];
    e[i] = e[t], e[t] = s;
  }
  return e.length = r, e;
}
var we = Jd, Qd = Xt, e1 = tr, r1 = we;
function t1(e, r) {
  return r1(e1(e), Qd(r, 0, e.length));
}
var n1 = t1, a1 = Xt, i1 = we, s1 = Oe;
function u1(e, r) {
  var t = s1(e);
  return i1(t, a1(r, 0, t.length));
}
var o1 = u1, f1 = n1, c1 = o1, v1 = d, l1 = me, $1 = re;
function h1(e, r, t) {
  (t ? l1(e, r, t) : r === void 0) ? r = 1 : r = $1(r);
  var n = v1(e) ? f1 : c1;
  return n(e, r);
}
var g1 = h1, d1 = tr, p1 = we;
function b1(e) {
  return p1(d1(e));
}
var _1 = b1, y1 = we, A1 = Oe;
function m1(e) {
  return y1(A1(e));
}
var S1 = m1, O1 = _1, T1 = S1, w1 = d;
function C1(e) {
  var r = w1(e) ? O1 : T1;
  return r(e);
}
var I1 = C1, R1 = Qe, P1 = R1("length"), M1 = P1, E1 = "\\ud800-\\udfff", x1 = "\\u0300-\\u036f", F1 = "\\ufe20-\\ufe2f", L1 = "\\u20d0-\\u20ff", j1 = x1 + F1 + L1, D1 = "\\ufe0e\\ufe0f", B1 = "\\u200d", N1 = RegExp("[" + B1 + E1 + j1 + D1 + "]");
function z1(e) {
  return N1.test(e);
}
var G1 = z1, Yt = "\\ud800-\\udfff", k1 = "\\u0300-\\u036f", U1 = "\\ufe20-\\ufe2f", H1 = "\\u20d0-\\u20ff", K1 = k1 + U1 + H1, q1 = "\\ufe0e\\ufe0f", W1 = "[" + Yt + "]", Ge = "[" + K1 + "]", ke = "\\ud83c[\\udffb-\\udfff]", X1 = "(?:" + Ge + "|" + ke + ")", Zt = "[^" + Yt + "]", Vt = "(?:\\ud83c[\\udde6-\\uddff]){2}", Jt = "[\\ud800-\\udbff][\\udc00-\\udfff]", Y1 = "\\u200d", Qt = X1 + "?", en = "[" + q1 + "]?", Z1 = "(?:" + Y1 + "(?:" + [Zt, Vt, Jt].join("|") + ")" + en + Qt + ")*", V1 = en + Qt + Z1, J1 = "(?:" + [Zt + Ge + "?", Ge, Vt, Jt, W1].join("|") + ")", Yr = RegExp(ke + "(?=" + ke + ")|" + J1 + V1, "g");
function Q1(e) {
  for (var r = Yr.lastIndex = 0; Yr.test(e); )
    ++r;
  return r;
}
var ep = Q1, rp = M1, tp = G1, np = ep;
function ap(e) {
  return tp(e) ? np(e) : rp(e);
}
var ip = ap, sp = gt, up = St, op = R, fp = Nt, cp = ip, vp = "[object Map]", lp = "[object Set]";
function $p(e) {
  if (e == null)
    return 0;
  if (op(e))
    return fp(e) ? cp(e) : e.length;
  var r = up(e);
  return r == vp || r == lp ? e.size : sp(e).length;
}
var hp = $p, gp = P;
function dp(e, r) {
  var t;
  return gp(e, function(n, a, i) {
    return t = r(n, a, i), !t;
  }), !!t;
}
var pp = dp, bp = bt, _p = _, yp = pp, Ap = d, mp = me;
function Sp(e, r, t) {
  var n = Ap(e) ? bp : yp;
  return t && mp(e, r, t) && (r = void 0), n(e, _p(r));
}
var Op = Sp, Tp = m, wp = Ht, Cp = b, Zr = me, Ip = Cp(function(e, r) {
  if (e == null)
    return [];
  var t = r.length;
  return t > 1 && Zr(e, r[0], r[1]) ? r = [] : t > 2 && Zr(r[0], r[1], r[2]) && (r = [r[0]]), wp(e, Tp(r, 1), []);
}), Rp = Ip, Pp = {
  countBy: Xv,
  each: al,
  eachRight: ml,
  every: Nl,
  filter: Wl,
  find: R$,
  findLast: z$,
  flatMap: ah,
  flatMapDeep: fh,
  flatMapDepth: hh,
  forEach: Et,
  forEachRight: Ft,
  groupBy: yh,
  includes: Wh,
  invokeMap: Fg,
  keyBy: Bg,
  map: Se,
  orderBy: td,
  partition: id,
  reduce: gd,
  reduceRight: Od,
  reject: Fd,
  sample: Xd,
  sampleSize: g1,
  shuffle: I1,
  size: hp,
  some: Op,
  sortBy: Rp
};
const Ue = /* @__PURE__ */ $n(Pp), Mp = { class: "vue3-org-chart-node" }, Ep = {
  key: 0,
  class: "vue3-org-chart-node-element-top-line"
}, xp = ["onKeydown"], Fp = {
  key: 1,
  class: "vue3-org-chart-node-element-bottom-line"
}, Lp = {
  key: 0,
  class: "vue3-org-chart-node-container"
}, jp = {
  __name: "Node",
  props: {
    id: String
  },
  setup(e) {
    const r = e, t = B(null), n = ae("data"), a = B(!1), i = Ue.find(n.value, { id: r.id }), s = ae("panzoomInstance");
    ae("scene");
    const u = ae("container"), o = () => {
      l.length && (a.value = !a.value, f());
    }, f = () => {
      const v = u.value.getBoundingClientRect(), $ = t.value.getBoundingClientRect(), h = v.x + v.width / 2, p = v.y + v.height / 4, y = $.x + $.width / 2, O = $.y + $.height / 2, T = h - y, j = p - O;
      s.value.moveBy(T, j, !0);
    }, l = tn(((v) => Ue.filter(n.value, { parentId: v }))(r.id));
    return (v, $) => {
      const h = nn("Node", !0);
      return C(), E("div", Mp, [
        oe(v.$slots, "top-border"),
        N("div", {
          class: "vue3-org-chart-node-element",
          ref_key: "element",
          ref: t
        }, [
          or(i).parentId ? (C(), E("div", Ep)) : Ie("", !0),
          N("div", {
            tabindex: "0",
            onKeydown: an(sn(f, ["self", "prevent"]), ["space"])
          }, [
            oe(v.$slots, "node", {
              item: or(i),
              nodes: l,
              show: a.value,
              handleChildren: o
            })
          ], 40, xp),
          l.length && a.value ? (C(), E("div", Fp)) : Ie("", !0)
        ], 512),
        un(on, { name: "nodeTransition" }, {
          default: fe(() => [
            l.length && a.value ? (C(), E("div", Lp, [
              (C(!0), E(fn, null, cn(l, (p, y) => (C(), at(h, {
                key: p.id,
                id: p.id,
                ref_for: !0,
                ref: "nodeRefs"
              }, {
                "top-border": fe(() => [
                  N("div", {
                    class: vn(["vue3-org-chart-node-element-horizontal-line", {
                      left: a.value && y !== 0,
                      right: a.value && y !== l.length - 1
                    }])
                  }, null, 2)
                ]),
                node: fe(({ item: O, nodes: T, show: j, handleChildren: D }) => [
                  oe(v.$slots, "node", {
                    item: O,
                    nodes: T,
                    show: j,
                    handleChildren: D
                  })
                ]),
                _: 2
              }, 1032, ["id"]))), 128))
            ])) : Ie("", !0)
          ]),
          _: 3
        })
      ]);
    };
  }
};
var Dp = rr;
function Bp(e, r) {
  var t = e == null ? 0 : e.length;
  return !!t && Dp(e, r, 0) > -1;
}
var nr = Bp;
function Np(e, r, t) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
    if (t(r, e[n]))
      return !0;
  return !1;
}
var ar = Np, zp = pe, Gp = nr, kp = ar, Up = A, Hp = J, Kp = be, qp = 200;
function Wp(e, r, t, n) {
  var a = -1, i = Gp, s = !0, u = e.length, o = [], f = r.length;
  if (!u)
    return o;
  t && (r = Up(r, Hp(t))), n ? (i = kp, s = !1) : r.length >= qp && (i = Kp, s = !1, r = new zp(r));
  e:
    for (; ++a < u; ) {
      var c = e[a], l = t == null ? c : t(c);
      if (c = n || c !== 0 ? c : 0, s && l === l) {
        for (var v = f; v--; )
          if (r[v] === l)
            continue e;
        o.push(c);
      } else i(r, l, n) || o.push(c);
    }
  return o;
}
var te = Wp, Xp = R, Yp = F;
function Zp(e) {
  return Yp(e) && Xp(e);
}
var S = Zp, Vp = te, Jp = m, Qp = b, Vr = S;
Qp(function(e, r) {
  return Vr(e) ? Vp(e, Jp(r, 1, Vr, !0)) : [];
});
var eb = te, rb = m, tb = _, nb = b, xe = S, ab = w;
nb(function(e, r) {
  var t = ab(r);
  return xe(t) && (t = void 0), xe(e) ? eb(e, rb(r, 1, xe, !0), tb(t)) : [];
});
var ib = te, sb = m, ub = b, Fe = S, ob = w;
ub(function(e, r) {
  var t = ob(r);
  return Fe(t) && (t = void 0), Fe(e) ? ib(e, sb(r, 1, Fe, !0), void 0, t) : [];
});
var fb = m;
function cb(e) {
  var r = e == null ? 0 : e.length;
  return r ? fb(e, 1) : [];
}
var vb = cb, lb = pe, $b = nr, hb = ar, gb = A, db = J, Jr = be, pb = Math.min;
function bb(e, r, t) {
  for (var n = t ? hb : $b, a = e[0].length, i = e.length, s = i, u = Array(i), o = 1 / 0, f = []; s--; ) {
    var c = e[s];
    s && r && (c = gb(c, db(r))), o = pb(c.length, o), u[s] = !t && (r || a >= 120 && c.length >= 120) ? new lb(s && c) : void 0;
  }
  c = e[0];
  var l = -1, v = u[0];
  e:
    for (; ++l < a && f.length < o; ) {
      var $ = c[l], h = r ? r($) : $;
      if ($ = t || $ !== 0 ? $ : 0, !(v ? Jr(v, h) : n(f, h, t))) {
        for (s = i; --s; ) {
          var p = u[s];
          if (!(p ? Jr(p, h) : n(e[s], h, t)))
            continue e;
        }
        v && v.push(h), f.push($);
      }
    }
  return f;
}
var ir = bb, _b = S;
function yb(e) {
  return _b(e) ? e : [];
}
var sr = yb, Ab = A, mb = ir, Sb = b, Ob = sr;
Sb(function(e) {
  var r = Ab(e, Ob);
  return r.length && r[0] === e[0] ? mb(r) : [];
});
var Tb = A, wb = ir, Cb = _, Ib = b, Rb = sr, Qr = w;
Ib(function(e) {
  var r = Qr(e), t = Tb(e, Rb);
  return r === Qr(t) ? r = void 0 : t.pop(), t.length && t[0] === e[0] ? wb(t, Cb(r)) : [];
});
var Pb = A, Mb = ir, Eb = b, xb = sr, Fb = w;
Eb(function(e) {
  var r = Fb(e), t = Pb(e, xb);
  return r = typeof r == "function" ? r : void 0, r && t.pop(), t.length && t[0] === e[0] ? Mb(t, void 0, r) : [];
});
function Lb(e, r, t, n) {
  for (var a = t - 1, i = e.length; ++a < i; )
    if (n(e[a], r))
      return a;
  return -1;
}
var jb = Lb, Db = A, Bb = rr, Nb = jb, zb = J, Gb = tr, kb = Array.prototype, et = kb.splice;
function Ub(e, r, t, n) {
  var a = n ? Nb : Bb, i = -1, s = r.length, u = e;
  for (e === r && (r = Gb(r)), t && (u = Db(e, zb(t))); ++i < s; )
    for (var o = 0, f = r[i], c = t ? t(f) : f; (o = a(u, c, o, n)) > -1; )
      u !== e && et.call(u, o, 1), et.call(e, o, 1);
  return e;
}
var Hb = Ub, Kb = Hb;
function qb(e, r) {
  return e && e.length && r && r.length ? Kb(e, r) : e;
}
var Wb = qb, Xb = b, Yb = Wb;
Xb(Yb);
var Zb = Pt;
function Vb(e, r) {
  for (var t = -1, n = r.length, a = Array(n), i = e == null; ++t < n; )
    a[t] = i ? void 0 : Zb(e, r[t]);
  return a;
}
var Jb = Vb, Qb = _e, e_ = w, r_ = zt, t_ = W;
function n_(e, r) {
  return r = Qb(r, e), e = r_(e, r), e == null || delete e[t_(e_(r))];
}
var a_ = n_, i_ = a_, s_ = V, u_ = Array.prototype, o_ = u_.splice;
function f_(e, r) {
  for (var t = e ? r.length : 0, n = t - 1; t--; ) {
    var a = r[t];
    if (t == n || a !== i) {
      var i = a;
      s_(a) ? o_.call(e, a, 1) : i_(e, a);
    }
  }
  return e;
}
var c_ = f_, v_ = vb, l_ = Gt, $_ = kt;
function h_(e) {
  return $_(l_(e, void 0, v_), e + "");
}
var g_ = h_, d_ = A, p_ = Jb, b_ = c_, __ = Ut, y_ = g_, A_ = V;
y_(function(e, r) {
  var t = e == null ? 0 : e.length, n = p_(e, r);
  return b_(e, d_(r, function(a) {
    return A_(a, t) ? +a : a;
  }).sort(__)), n;
});
function m_() {
}
var S_ = m_, Le = At, O_ = S_, T_ = Ze, w_ = 1 / 0, C_ = Le && 1 / T_(new Le([, -0]))[1] == w_ ? function(e) {
  return new Le(e);
} : O_, I_ = C_, R_ = pe, P_ = nr, M_ = ar, E_ = be, x_ = I_, F_ = Ze, L_ = 200;
function j_(e, r, t) {
  var n = -1, a = P_, i = e.length, s = !0, u = [], o = u;
  if (t)
    s = !1, a = M_;
  else if (i >= L_) {
    var f = r ? null : x_(e);
    if (f)
      return F_(f);
    s = !1, a = E_, o = new R_();
  } else
    o = r ? [] : u;
  e:
    for (; ++n < i; ) {
      var c = e[n], l = r ? r(c) : c;
      if (c = t || c !== 0 ? c : 0, s && l === l) {
        for (var v = o.length; v--; )
          if (o[v] === l)
            continue e;
        r && o.push(l), u.push(c);
      } else a(o, l, t) || (o !== u && o.push(l), u.push(c));
    }
  return u;
}
var Ce = j_, D_ = m, B_ = b, N_ = Ce, z_ = S;
B_(function(e) {
  return N_(D_(e, 1, z_, !0));
});
var G_ = m, k_ = _, U_ = b, H_ = Ce, rt = S, K_ = w;
U_(function(e) {
  var r = K_(e);
  return rt(r) && (r = void 0), H_(G_(e, 1, rt, !0), k_(r));
});
var q_ = m, W_ = b, X_ = Ce, Y_ = S, Z_ = w;
W_(function(e) {
  var r = Z_(e);
  return r = typeof r == "function" ? r : void 0, X_(q_(e, 1, Y_, !0), void 0, r);
});
var V_ = L, J_ = A, Q_ = Qe, ey = vt, ry = S, ty = Math.max;
function ny(e) {
  if (!(e && e.length))
    return [];
  var r = 0;
  return e = V_(e, function(t) {
    if (ry(t))
      return r = ty(t.length, r), !0;
  }), ey(r, function(t) {
    return J_(e, Q_(t));
  });
}
var rn = ny, ay = Te, iy = A, sy = rn;
function uy(e, r) {
  if (!(e && e.length))
    return [];
  var t = sy(e);
  return r == null ? t : iy(t, function(n) {
    return ay(r, void 0, n);
  });
}
var oy = uy, fy = te, cy = b, vy = S;
cy(function(e, r) {
  return vy(e) ? fy(e, r) : [];
});
var ly = te, $y = m, tt = Ce;
function hy(e, r, t) {
  var n = e.length;
  if (n < 2)
    return n ? tt(e[0]) : [];
  for (var a = -1, i = Array(n); ++a < n; )
    for (var s = e[a], u = -1; ++u < n; )
      u != a && (i[a] = ly(i[a] || s, e[u], r, t));
  return tt($y(i, 1), r, t);
}
var ur = hy, gy = L, dy = b, py = ur, by = S;
dy(function(e) {
  return py(gy(e, by));
});
var _y = L, yy = _, Ay = b, my = ur, nt = S, Sy = w;
Ay(function(e) {
  var r = Sy(e);
  return nt(r) && (r = void 0), my(_y(e, nt), yy(r));
});
var Oy = L, Ty = b, wy = ur, Cy = S, Iy = w;
Ty(function(e) {
  var r = Iy(e);
  return r = typeof r == "function" ? r : void 0, wy(Oy(e, Cy), void 0, r);
});
var Ry = b, Py = rn;
Ry(Py);
var My = b, Ey = oy;
My(function(e) {
  var r = e.length, t = r > 1 ? e[r - 1] : void 0;
  return t = typeof t == "function" ? (e.pop(), t) : void 0, Ey(e, t);
});
const xy = { class: "vue3-org-chart" }, Fy = { key: 1 }, Ly = {
  __name: "Vue3OrgChart",
  props: {
    data: {
      type: Array,
      default: () => []
    },
    json: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const r = B(null), t = B(null), n = e, a = async (c) => await (await fetch(c)).json(), i = B(n.data);
    fr(async () => {
      if (n.json) {
        const c = await a(n.json);
        i.value = c;
      }
    }), ie("data", i);
    const s = () => Ue.find(i.value, { parentId: "" }), u = () => s().id, o = B(null);
    ie("panzoomInstance", o), ie("scene", r), ie("container", t), fr(() => {
      o.value = ln(r.value, {
        zoomDoubleClickSpeed: 1.4,
        maxZoom: 5,
        minZoom: 0.1,
        initialX: 0,
        initialZoom: 1,
        bounds: !1
      });
    });
    const f = () => {
      const c = o.value.getTransform(), l = 0, v = 0;
      if (c.scale !== 1) {
        const $ = 1 - c.scale, h = c.x / $, p = c.y / $;
        o.value.smoothZoomAbs(h, p, 1);
      } else
        o.value.smoothMoveTo(l, v, 1);
    };
    return (c, l) => (C(), E("div", xy, [
      N("button", { onClick: f }, "Reset Zoom"),
      N("div", {
        ref_key: "container",
        ref: t,
        class: "vue3-org-chart-container"
      }, [
        N("div", {
          ref_key: "scene",
          ref: r,
          class: "vue3-org-chart-scene"
        }, [
          i.value.length ? (C(), at(jp, {
            id: u(),
            key: "root"
          }, {
            node: fe(({ item: v, nodes: $, show: h, handleChildren: p }) => [
              oe(c.$slots, "node", {
                item: v,
                nodes: $,
                show: h,
                handleChildren: p
              })
            ]),
            _: 3
          }, 8, ["id"])) : (C(), E("div", Fy, " No data "))
        ], 512)
      ], 512)
    ]));
  }
}, By = {
  /**
   * @param {import('vue').App} app
   * @param options
   */
  install(e, r = {}) {
    e.component("Vue3OrgChart", Ly);
  }
};
export {
  By as default
};
