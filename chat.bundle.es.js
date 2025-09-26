var Gu = Object.defineProperty;
var Zu = (e, t, n) => t in e ? Gu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var us = (e, t, n) => Zu(e, typeof t != "symbol" ? t + "" : t, n);
/*! Package version @n8n/chat@0.57.0 */
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function jo(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ae = {}, kn = [], Tt = () => {
}, Wu = () => !1, Os = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Vo = (e) => e.startsWith("onUpdate:"), He = Object.assign, Ko = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ju = Object.prototype.hasOwnProperty, ye = (e, t) => Ju.call(e, t), ne = Array.isArray, En = (e) => Ls(e) === "[object Map]", Fa = (e) => Ls(e) === "[object Set]", ae = (e) => typeof e == "function", Ne = (e) => typeof e == "string", Pt = (e) => typeof e == "symbol", Me = (e) => e !== null && typeof e == "object", qa = (e) => (Me(e) || ae(e)) && ae(e.then) && ae(e.catch), Pa = Object.prototype.toString, Ls = (e) => Pa.call(e), Yu = (e) => Ls(e).slice(8, -1), Ba = (e) => Ls(e) === "[object Object]", Go = (e) => Ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, zn = /* @__PURE__ */ jo(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Fs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Xu = /-(\w)/g, pt = Fs(
  (e) => e.replace(Xu, (t, n) => n ? n.toUpperCase() : "")
), Qu = /\B([A-Z])/g, Xt = Fs(
  (e) => e.replace(Qu, "-$1").toLowerCase()
), qs = Fs((e) => e.charAt(0).toUpperCase() + e.slice(1)), sr = Fs(
  (e) => e ? `on${qs(e)}` : ""
), Wt = (e, t) => !Object.is(e, t), vs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, $a = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Mo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ef = (e) => {
  const t = Ne(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ti;
const Ps = () => Ti || (Ti = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Rt(e) {
  if (ne(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = Ne(s) ? rf(s) : Rt(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else if (Ne(e) || Me(e))
    return e;
}
const tf = /;(?![^(]*\))/g, nf = /:([^]+)/, sf = /\/\*[^]*?\*\//g;
function rf(e) {
  const t = {};
  return e.replace(sf, "").split(tf).forEach((n) => {
    if (n) {
      const s = n.split(nf);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function mt(e) {
  let t = "";
  if (Ne(e))
    t = e;
  else if (ne(e))
    for (let n = 0; n < e.length; n++) {
      const s = mt(e[n]);
      s && (t += s + " ");
    }
  else if (Me(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Ri(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !Ne(t) && (e.class = mt(t)), n && (e.style = Rt(n)), e;
}
const of = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", cf = /* @__PURE__ */ jo(of);
function za(e) {
  return !!e || e === "";
}
const Ua = (e) => !!(e && e.__v_isRef === !0), Kn = (e) => Ne(e) ? e : e == null ? "" : ne(e) || Me(e) && (e.toString === Pa || !ae(e.toString)) ? Ua(e) ? Kn(e.value) : JSON.stringify(e, Ha, 2) : String(e), Ha = (e, t) => Ua(t) ? Ha(e, t.value) : En(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], o) => (n[rr(s, o) + " =>"] = r, n),
    {}
  )
} : Fa(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => rr(n))
} : Pt(t) ? rr(t) : Me(t) && !ne(t) && !Ba(t) ? String(t) : t, rr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Pt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ct;
class af {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ct, !t && ct && (this.index = (ct.scopes || (ct.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = ct;
      try {
        return ct = this, t();
      } finally {
        ct = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ct = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    ct = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function lf() {
  return ct;
}
let De;
const or = /* @__PURE__ */ new WeakSet();
class ja {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ct && ct.active && ct.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, or.has(this) && (or.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ka(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Di(this), Ga(this);
    const t = De, n = bt;
    De = this, bt = !0;
    try {
      return this.fn();
    } finally {
      Za(this), De = t, bt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Jo(t);
      this.deps = this.depsTail = void 0, Di(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? or.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Io(this) && this.run();
  }
  get dirty() {
    return Io(this);
  }
}
let Va = 0, Un, Hn;
function Ka(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Hn, Hn = e;
    return;
  }
  e.next = Un, Un = e;
}
function Zo() {
  Va++;
}
function Wo() {
  if (--Va > 0)
    return;
  if (Hn) {
    let t = Hn;
    for (Hn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Un; ) {
    let t = Un;
    for (Un = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Ga(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Za(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), Jo(s), uf(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function Io(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Wa(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Wa(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Gn))
    return;
  e.globalVersion = Gn;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Io(e)) {
    e.flags &= -3;
    return;
  }
  const n = De, s = bt;
  De = e, bt = !0;
  try {
    Ga(e);
    const r = e.fn(e._value);
    (t.version === 0 || Wt(r, e._value)) && (e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    De = n, bt = s, Za(e), e.flags &= -3;
  }
}
function Jo(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      Jo(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function uf(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let bt = !0;
const Ja = [];
function Qt() {
  Ja.push(bt), bt = !1;
}
function en() {
  const e = Ja.pop();
  bt = e === void 0 ? !0 : e;
}
function Di(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = De;
    De = void 0;
    try {
      t();
    } finally {
      De = n;
    }
  }
}
let Gn = 0;
class ff {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Yo {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!De || !bt || De === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== De)
      n = this.activeLink = new ff(De, this), De.deps ? (n.prevDep = De.depsTail, De.depsTail.nextDep = n, De.depsTail = n) : De.deps = De.depsTail = n, Ya(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = De.depsTail, n.nextDep = void 0, De.depsTail.nextDep = n, De.depsTail = n, De.deps === n && (De.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Gn++, this.notify(t);
  }
  notify(t) {
    Zo();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Wo();
    }
  }
}
function Ya(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Ya(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ws = /* @__PURE__ */ new WeakMap(), dn = Symbol(
  ""
), No = Symbol(
  ""
), Zn = Symbol(
  ""
);
function Je(e, t, n) {
  if (bt && De) {
    let s = ws.get(e);
    s || ws.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new Yo()), r.map = s, r.key = n), r.track();
  }
}
function Lt(e, t, n, s, r, o) {
  const i = ws.get(e);
  if (!i) {
    Gn++;
    return;
  }
  const c = (a) => {
    a && a.trigger();
  };
  if (Zo(), t === "clear")
    i.forEach(c);
  else {
    const a = ne(e), u = a && Go(n);
    if (a && n === "length") {
      const l = Number(s);
      i.forEach((f, d) => {
        (d === "length" || d === Zn || !Pt(d) && d >= l) && c(f);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && c(i.get(n)), u && c(i.get(Zn)), t) {
        case "add":
          a ? u && c(i.get("length")) : (c(i.get(dn)), En(e) && c(i.get(No)));
          break;
        case "delete":
          a || (c(i.get(dn)), En(e) && c(i.get(No)));
          break;
        case "set":
          En(e) && c(i.get(dn));
          break;
      }
  }
  Wo();
}
function hf(e, t) {
  const n = ws.get(e);
  return n && n.get(t);
}
function bn(e) {
  const t = be(e);
  return t === e ? t : (Je(t, "iterate", Zn), dt(e) ? t : t.map(Ye));
}
function Bs(e) {
  return Je(e = be(e), "iterate", Zn), e;
}
const df = {
  __proto__: null,
  [Symbol.iterator]() {
    return ir(this, Symbol.iterator, Ye);
  },
  concat(...e) {
    return bn(this).concat(
      ...e.map((t) => ne(t) ? bn(t) : t)
    );
  },
  entries() {
    return ir(this, "entries", (e) => (e[1] = Ye(e[1]), e));
  },
  every(e, t) {
    return Mt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Mt(this, "filter", e, t, (n) => n.map(Ye), arguments);
  },
  find(e, t) {
    return Mt(this, "find", e, t, Ye, arguments);
  },
  findIndex(e, t) {
    return Mt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Mt(this, "findLast", e, t, Ye, arguments);
  },
  findLastIndex(e, t) {
    return Mt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Mt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return cr(this, "includes", e);
  },
  indexOf(...e) {
    return cr(this, "indexOf", e);
  },
  join(e) {
    return bn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return cr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Mt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ln(this, "pop");
  },
  push(...e) {
    return Ln(this, "push", e);
  },
  reduce(e, ...t) {
    return Mi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Mi(this, "reduceRight", e, t);
  },
  shift() {
    return Ln(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Mt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ln(this, "splice", e);
  },
  toReversed() {
    return bn(this).toReversed();
  },
  toSorted(e) {
    return bn(this).toSorted(e);
  },
  toSpliced(...e) {
    return bn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ln(this, "unshift", e);
  },
  values() {
    return ir(this, "values", Ye);
  }
};
function ir(e, t, n) {
  const s = Bs(e), r = s[t]();
  return s !== e && !dt(e) && (r._next = r.next, r.next = () => {
    const o = r._next();
    return o.value && (o.value = n(o.value)), o;
  }), r;
}
const pf = Array.prototype;
function Mt(e, t, n, s, r, o) {
  const i = Bs(e), c = i !== e && !dt(e), a = i[t];
  if (a !== pf[t]) {
    const f = a.apply(e, o);
    return c ? Ye(f) : f;
  }
  let u = n;
  i !== e && (c ? u = function(f, d) {
    return n.call(this, Ye(f), d, e);
  } : n.length > 2 && (u = function(f, d) {
    return n.call(this, f, d, e);
  }));
  const l = a.call(i, u, s);
  return c && r ? r(l) : l;
}
function Mi(e, t, n, s) {
  const r = Bs(e);
  let o = n;
  return r !== e && (dt(e) ? n.length > 3 && (o = function(i, c, a) {
    return n.call(this, i, c, a, e);
  }) : o = function(i, c, a) {
    return n.call(this, i, Ye(c), a, e);
  }), r[t](o, ...s);
}
function cr(e, t, n) {
  const s = be(e);
  Je(s, "iterate", Zn);
  const r = s[t](...n);
  return (r === -1 || r === !1) && ti(n[0]) ? (n[0] = be(n[0]), s[t](...n)) : r;
}
function Ln(e, t, n = []) {
  Qt(), Zo();
  const s = be(e)[t].apply(e, n);
  return Wo(), en(), s;
}
const gf = /* @__PURE__ */ jo("__proto__,__v_isRef,__isVue"), Xa = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Pt)
);
function mf(e) {
  Pt(e) || (e = String(e));
  const t = be(this);
  return Je(t, "has", e), t.hasOwnProperty(e);
}
class Qa {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return s === (r ? o ? Af : sl : o ? nl : tl).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = ne(t);
    if (!r) {
      let a;
      if (i && (a = df[n]))
        return a;
      if (n === "hasOwnProperty")
        return mf;
    }
    const c = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ue(t) ? t : s
    );
    return (Pt(n) ? Xa.has(n) : gf(n)) || (r || Je(t, "get", n), o) ? c : Ue(c) ? i && Go(n) ? c : c.value : Me(c) ? r ? rl(c) : Qo(c) : c;
  }
}
class el extends Qa {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let o = t[n];
    if (!this._isShallow) {
      const a = gn(o);
      if (!dt(s) && !gn(s) && (o = be(o), s = be(s)), !ne(t) && Ue(o) && !Ue(s))
        return a ? !1 : (o.value = s, !0);
    }
    const i = ne(t) && Go(n) ? Number(n) < t.length : ye(t, n), c = Reflect.set(
      t,
      n,
      s,
      Ue(t) ? t : r
    );
    return t === be(r) && (i ? Wt(s, o) && Lt(t, "set", n, s) : Lt(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = ye(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && Lt(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Pt(n) || !Xa.has(n)) && Je(t, "has", n), s;
  }
  ownKeys(t) {
    return Je(
      t,
      "iterate",
      ne(t) ? "length" : dn
    ), Reflect.ownKeys(t);
  }
}
class _f extends Qa {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const bf = /* @__PURE__ */ new el(), vf = /* @__PURE__ */ new _f(), yf = /* @__PURE__ */ new el(!0);
const Oo = (e) => e, fs = (e) => Reflect.getPrototypeOf(e);
function xf(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = be(r), i = En(o), c = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, u = r[e](...s), l = n ? Oo : t ? Lo : Ye;
    return !t && Je(
      o,
      "iterate",
      a ? No : dn
    ), {
      // iterator protocol
      next() {
        const { value: f, done: d } = u.next();
        return d ? { value: f, done: d } : {
          value: c ? [l(f[0]), l(f[1])] : l(f),
          done: d
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function hs(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function kf(e, t) {
  const n = {
    get(r) {
      const o = this.__v_raw, i = be(o), c = be(r);
      e || (Wt(r, c) && Je(i, "get", r), Je(i, "get", c));
      const { has: a } = fs(i), u = t ? Oo : e ? Lo : Ye;
      if (a.call(i, r))
        return u(o.get(r));
      if (a.call(i, c))
        return u(o.get(c));
      o !== i && o.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Je(be(r), "iterate", dn), Reflect.get(r, "size", r);
    },
    has(r) {
      const o = this.__v_raw, i = be(o), c = be(r);
      return e || (Wt(r, c) && Je(i, "has", r), Je(i, "has", c)), r === c ? o.has(r) : o.has(r) || o.has(c);
    },
    forEach(r, o) {
      const i = this, c = i.__v_raw, a = be(c), u = t ? Oo : e ? Lo : Ye;
      return !e && Je(a, "iterate", dn), c.forEach((l, f) => r.call(o, u(l), u(f), i));
    }
  };
  return He(
    n,
    e ? {
      add: hs("add"),
      set: hs("set"),
      delete: hs("delete"),
      clear: hs("clear")
    } : {
      add(r) {
        !t && !dt(r) && !gn(r) && (r = be(r));
        const o = be(this);
        return fs(o).has.call(o, r) || (o.add(r), Lt(o, "add", r, r)), this;
      },
      set(r, o) {
        !t && !dt(o) && !gn(o) && (o = be(o));
        const i = be(this), { has: c, get: a } = fs(i);
        let u = c.call(i, r);
        u || (r = be(r), u = c.call(i, r));
        const l = a.call(i, r);
        return i.set(r, o), u ? Wt(o, l) && Lt(i, "set", r, o) : Lt(i, "add", r, o), this;
      },
      delete(r) {
        const o = be(this), { has: i, get: c } = fs(o);
        let a = i.call(o, r);
        a || (r = be(r), a = i.call(o, r)), c && c.call(o, r);
        const u = o.delete(r);
        return a && Lt(o, "delete", r, void 0), u;
      },
      clear() {
        const r = be(this), o = r.size !== 0, i = r.clear();
        return o && Lt(
          r,
          "clear",
          void 0,
          void 0
        ), i;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = xf(r, e, t);
  }), n;
}
function Xo(e, t) {
  const n = kf(e, t);
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    ye(n, r) && r in s ? n : s,
    r,
    o
  );
}
const Ef = {
  get: /* @__PURE__ */ Xo(!1, !1)
}, wf = {
  get: /* @__PURE__ */ Xo(!1, !0)
}, Cf = {
  get: /* @__PURE__ */ Xo(!0, !1)
};
const tl = /* @__PURE__ */ new WeakMap(), nl = /* @__PURE__ */ new WeakMap(), sl = /* @__PURE__ */ new WeakMap(), Af = /* @__PURE__ */ new WeakMap();
function Sf(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Tf(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Sf(Yu(e));
}
function Qo(e) {
  return gn(e) ? e : ei(
    e,
    !1,
    bf,
    Ef,
    tl
  );
}
function Rf(e) {
  return ei(
    e,
    !1,
    yf,
    wf,
    nl
  );
}
function rl(e) {
  return ei(
    e,
    !0,
    vf,
    Cf,
    sl
  );
}
function ei(e, t, n, s, r) {
  if (!Me(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const i = Tf(e);
  if (i === 0)
    return e;
  const c = new Proxy(
    e,
    i === 2 ? s : n
  );
  return r.set(e, c), c;
}
function wn(e) {
  return gn(e) ? wn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function gn(e) {
  return !!(e && e.__v_isReadonly);
}
function dt(e) {
  return !!(e && e.__v_isShallow);
}
function ti(e) {
  return e ? !!e.__v_raw : !1;
}
function be(e) {
  const t = e && e.__v_raw;
  return t ? be(t) : e;
}
function Df(e) {
  return !ye(e, "__v_skip") && Object.isExtensible(e) && $a(e, "__v_skip", !0), e;
}
const Ye = (e) => Me(e) ? Qo(e) : e, Lo = (e) => Me(e) ? rl(e) : e;
function Ue(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Be(e) {
  return Mf(e, !1);
}
function Mf(e, t) {
  return Ue(e) ? e : new If(e, t);
}
class If {
  constructor(t, n) {
    this.dep = new Yo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : be(t), this._value = n ? t : Ye(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || dt(t) || gn(t);
    t = s ? t : be(t), Wt(t, n) && (this._rawValue = t, this._value = s ? t : Ye(t), this.dep.trigger());
  }
}
function me(e) {
  return Ue(e) ? e.value : e;
}
const Nf = {
  get: (e, t, n) => t === "__v_raw" ? e : me(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return Ue(r) && !Ue(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function ol(e) {
  return wn(e) ? e : new Proxy(e, Nf);
}
function Of(e) {
  const t = ne(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Ff(e, n);
  return t;
}
class Lf {
  constructor(t, n, s) {
    this._object = t, this._key = n, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return hf(be(this._object), this._key);
  }
}
function Ff(e, t, n) {
  const s = e[t];
  return Ue(s) ? s : new Lf(e, t, n);
}
class qf {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Yo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Gn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    De !== this)
      return Ka(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Wa(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Pf(e, t, n = !1) {
  let s, r;
  return ae(e) ? s = e : (s = e.get, r = e.set), new qf(s, r, n);
}
const ds = {}, Cs = /* @__PURE__ */ new WeakMap();
let fn;
function Bf(e, t = !1, n = fn) {
  if (n) {
    let s = Cs.get(n);
    s || Cs.set(n, s = []), s.push(e);
  }
}
function $f(e, t, n = Ae) {
  const { immediate: s, deep: r, once: o, scheduler: i, augmentJob: c, call: a } = n, u = (p) => r ? p : dt(p) || r === !1 || r === 0 ? Ft(p, 1) : Ft(p);
  let l, f, d, h, v = !1, x = !1;
  if (Ue(e) ? (f = () => e.value, v = dt(e)) : wn(e) ? (f = () => u(e), v = !0) : ne(e) ? (x = !0, v = e.some((p) => wn(p) || dt(p)), f = () => e.map((p) => {
    if (Ue(p))
      return p.value;
    if (wn(p))
      return u(p);
    if (ae(p))
      return a ? a(p, 2) : p();
  })) : ae(e) ? t ? f = a ? () => a(e, 2) : e : f = () => {
    if (d) {
      Qt();
      try {
        d();
      } finally {
        en();
      }
    }
    const p = fn;
    fn = l;
    try {
      return a ? a(e, 3, [h]) : e(h);
    } finally {
      fn = p;
    }
  } : f = Tt, t && r) {
    const p = f, E = r === !0 ? 1 / 0 : r;
    f = () => Ft(p(), E);
  }
  const C = lf(), m = () => {
    l.stop(), C && C.active && Ko(C.effects, l);
  };
  if (o && t) {
    const p = t;
    t = (...E) => {
      p(...E), m();
    };
  }
  let k = x ? new Array(e.length).fill(ds) : ds;
  const b = (p) => {
    if (!(!(l.flags & 1) || !l.dirty && !p))
      if (t) {
        const E = l.run();
        if (r || v || (x ? E.some((w, $) => Wt(w, k[$])) : Wt(E, k))) {
          d && d();
          const w = fn;
          fn = l;
          try {
            const $ = [
              E,
              // pass undefined as the old value when it's changed for the first time
              k === ds ? void 0 : x && k[0] === ds ? [] : k,
              h
            ];
            a ? a(t, 3, $) : (
              // @ts-expect-error
              t(...$)
            ), k = E;
          } finally {
            fn = w;
          }
        }
      } else
        l.run();
  };
  return c && c(b), l = new ja(f), l.scheduler = i ? () => i(b, !1) : b, h = (p) => Bf(p, !1, l), d = l.onStop = () => {
    const p = Cs.get(l);
    if (p) {
      if (a)
        a(p, 4);
      else
        for (const E of p) E();
      Cs.delete(l);
    }
  }, t ? s ? b(!0) : k = l.run() : i ? i(b.bind(null, !0), !0) : l.run(), m.pause = l.pause.bind(l), m.resume = l.resume.bind(l), m.stop = m, m;
}
function Ft(e, t = 1 / 0, n) {
  if (t <= 0 || !Me(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Ue(e))
    Ft(e.value, t, n);
  else if (ne(e))
    for (let s = 0; s < e.length; s++)
      Ft(e[s], t, n);
  else if (Fa(e) || En(e))
    e.forEach((s) => {
      Ft(s, t, n);
    });
  else if (Ba(e)) {
    for (const s in e)
      Ft(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Ft(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ns(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    $s(r, t, n);
  }
}
function vt(e, t, n, s) {
  if (ae(e)) {
    const r = ns(e, t, n, s);
    return r && qa(r) && r.catch((o) => {
      $s(o, t, n);
    }), r;
  }
  if (ne(e)) {
    const r = [];
    for (let o = 0; o < e.length; o++)
      r.push(vt(e[o], t, n, s));
    return r;
  }
}
function $s(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Ae;
  if (t) {
    let c = t.parent;
    const a = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; c; ) {
      const l = c.ec;
      if (l) {
        for (let f = 0; f < l.length; f++)
          if (l[f](e, a, u) === !1)
            return;
      }
      c = c.parent;
    }
    if (o) {
      Qt(), ns(o, null, 10, [
        e,
        a,
        u
      ]), en();
      return;
    }
  }
  zf(e, n, r, s, i);
}
function zf(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const tt = [];
let wt = -1;
const Cn = [];
let jt = null, yn = 0;
const il = /* @__PURE__ */ Promise.resolve();
let As = null;
function Jt(e) {
  const t = As || il;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Uf(e) {
  let t = wt + 1, n = tt.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = tt[s], o = Wn(r);
    o < e || o === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function ni(e) {
  if (!(e.flags & 1)) {
    const t = Wn(e), n = tt[tt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Wn(n) ? tt.push(e) : tt.splice(Uf(t), 0, e), e.flags |= 1, cl();
  }
}
function cl() {
  As || (As = il.then(ll));
}
function Hf(e) {
  ne(e) ? Cn.push(...e) : jt && e.id === -1 ? jt.splice(yn + 1, 0, e) : e.flags & 1 || (Cn.push(e), e.flags |= 1), cl();
}
function Ii(e, t, n = wt + 1) {
  for (; n < tt.length; n++) {
    const s = tt[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      tt.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function al(e) {
  if (Cn.length) {
    const t = [...new Set(Cn)].sort(
      (n, s) => Wn(n) - Wn(s)
    );
    if (Cn.length = 0, jt) {
      jt.push(...t);
      return;
    }
    for (jt = t, yn = 0; yn < jt.length; yn++) {
      const n = jt[yn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    jt = null, yn = 0;
  }
}
const Wn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ll(e) {
  try {
    for (wt = 0; wt < tt.length; wt++) {
      const t = tt[wt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ns(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; wt < tt.length; wt++) {
      const t = tt[wt];
      t && (t.flags &= -2);
    }
    wt = -1, tt.length = 0, al(), As = null, (tt.length || Cn.length) && ll();
  }
}
let ze = null, ul = null;
function Ss(e) {
  const t = ze;
  return ze = e, ul = e && e.type.__scopeId || null, t;
}
function qt(e, t = ze, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && ji(-1);
    const o = Ss(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Ss(o), s._d && ji(1);
    }
    return i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function ys(e, t) {
  if (ze === null)
    return e;
  const n = Ks(ze), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [o, i, c, a = Ae] = t[r];
    o && (ae(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Ft(i), s.push({
      dir: o,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: c,
      modifiers: a
    }));
  }
  return e;
}
function on(e, t, n, s) {
  const r = e.dirs, o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    o && (c.oldValue = o[i].value);
    let a = c.dir[s];
    a && (Qt(), vt(a, n, 8, [
      e.el,
      c,
      e,
      t
    ]), en());
  }
}
const jf = Symbol("_vte"), fl = (e) => e.__isTeleport, Vt = Symbol("_leaveCb"), ps = Symbol("_enterCb");
function Vf() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return tn(() => {
    e.isMounted = !0;
  }), si(() => {
    e.isUnmounting = !0;
  }), e;
}
const ht = [Function, Array], hl = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: ht,
  onEnter: ht,
  onAfterEnter: ht,
  onEnterCancelled: ht,
  // leave
  onBeforeLeave: ht,
  onLeave: ht,
  onAfterLeave: ht,
  onLeaveCancelled: ht,
  // appear
  onBeforeAppear: ht,
  onAppear: ht,
  onAfterAppear: ht,
  onAppearCancelled: ht
}, dl = (e) => {
  const t = e.subTree;
  return t.component ? dl(t.component) : t;
}, Kf = {
  name: "BaseTransition",
  props: hl,
  setup(e, { slots: t }) {
    const n = Uh(), s = Vf();
    return () => {
      const r = t.default && ml(t.default(), !0);
      if (!r || !r.length)
        return;
      const o = pl(r), i = be(e), { mode: c } = i;
      if (s.isLeaving)
        return ar(o);
      const a = Ni(o);
      if (!a)
        return ar(o);
      let u = Fo(
        a,
        i,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (f) => u = f
      );
      a.type !== st && Jn(a, u);
      let l = n.subTree && Ni(n.subTree);
      if (l && l.type !== st && !hn(a, l) && dl(n).type !== st) {
        let f = Fo(
          l,
          i,
          s,
          n
        );
        if (Jn(l, f), c === "out-in" && a.type !== st)
          return s.isLeaving = !0, f.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, l = void 0;
          }, ar(o);
        c === "in-out" && a.type !== st ? f.delayLeave = (d, h, v) => {
          const x = gl(
            s,
            l
          );
          x[String(l.key)] = l, d[Vt] = () => {
            h(), d[Vt] = void 0, delete u.delayedLeave, l = void 0;
          }, u.delayedLeave = () => {
            v(), delete u.delayedLeave, l = void 0;
          };
        } : l = void 0;
      } else l && (l = void 0);
      return o;
    };
  }
};
function pl(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== st) {
        t = n;
        break;
      }
  }
  return t;
}
const Gf = Kf;
function gl(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Fo(e, t, n, s, r) {
  const {
    appear: o,
    mode: i,
    persisted: c = !1,
    onBeforeEnter: a,
    onEnter: u,
    onAfterEnter: l,
    onEnterCancelled: f,
    onBeforeLeave: d,
    onLeave: h,
    onAfterLeave: v,
    onLeaveCancelled: x,
    onBeforeAppear: C,
    onAppear: m,
    onAfterAppear: k,
    onAppearCancelled: b
  } = t, p = String(e.key), E = gl(n, e), w = (D, A) => {
    D && vt(
      D,
      s,
      9,
      A
    );
  }, $ = (D, A) => {
    const N = A[1];
    w(D, A), ne(D) ? D.every((I) => I.length <= 1) && N() : D.length <= 1 && N();
  }, R = {
    mode: i,
    persisted: c,
    beforeEnter(D) {
      let A = a;
      if (!n.isMounted)
        if (o)
          A = C || a;
        else
          return;
      D[Vt] && D[Vt](
        !0
        /* cancelled */
      );
      const N = E[p];
      N && hn(e, N) && N.el[Vt] && N.el[Vt](), w(A, [D]);
    },
    enter(D) {
      let A = u, N = l, I = f;
      if (!n.isMounted)
        if (o)
          A = m || u, N = k || l, I = b || f;
        else
          return;
      let ee = !1;
      const T = D[ps] = (ie) => {
        ee || (ee = !0, ie ? w(I, [D]) : w(N, [D]), R.delayedLeave && R.delayedLeave(), D[ps] = void 0);
      };
      A ? $(A, [D, T]) : T();
    },
    leave(D, A) {
      const N = String(e.key);
      if (D[ps] && D[ps](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return A();
      w(d, [D]);
      let I = !1;
      const ee = D[Vt] = (T) => {
        I || (I = !0, A(), T ? w(x, [D]) : w(v, [D]), D[Vt] = void 0, E[N] === e && delete E[N]);
      };
      E[N] = e, h ? $(h, [D, ee]) : ee();
    },
    clone(D) {
      const A = Fo(
        D,
        t,
        n,
        s,
        r
      );
      return r && r(A), A;
    }
  };
  return R;
}
function ar(e) {
  if (zs(e))
    return e = Yt(e), e.children = null, e;
}
function Ni(e) {
  if (!zs(e))
    return fl(e.type) && e.children ? pl(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ae(n.default))
      return n.default();
  }
}
function Jn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Jn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ml(e, t = !1, n) {
  let s = [], r = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const c = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === Ke ? (i.patchFlag & 128 && r++, s = s.concat(
      ml(i.children, t, c)
    )) : (t || i.type !== st) && s.push(c != null ? Yt(i, { key: c }) : i);
  }
  if (r > 1)
    for (let o = 0; o < s.length; o++)
      s[o].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Bt(e, t) {
  return ae(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    He({ name: e.name }, t, { setup: e })
  ) : e;
}
function _l(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ts(e, t, n, s, r = !1) {
  if (ne(e)) {
    e.forEach(
      (v, x) => Ts(
        v,
        t && (ne(t) ? t[x] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (An(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Ts(e, t, n, s.component.subTree);
    return;
  }
  const o = s.shapeFlag & 4 ? Ks(s.component) : s.el, i = r ? null : o, { i: c, r: a } = e, u = t && t.r, l = c.refs === Ae ? c.refs = {} : c.refs, f = c.setupState, d = be(f), h = f === Ae ? () => !1 : (v) => ye(d, v);
  if (u != null && u !== a && (Ne(u) ? (l[u] = null, h(u) && (f[u] = null)) : Ue(u) && (u.value = null)), ae(a))
    ns(a, c, 12, [i, l]);
  else {
    const v = Ne(a), x = Ue(a);
    if (v || x) {
      const C = () => {
        if (e.f) {
          const m = v ? h(a) ? f[a] : l[a] : a.value;
          r ? ne(m) && Ko(m, o) : ne(m) ? m.includes(o) || m.push(o) : v ? (l[a] = [o], h(a) && (f[a] = l[a])) : (a.value = [o], e.k && (l[e.k] = a.value));
        } else v ? (l[a] = i, h(a) && (f[a] = i)) : x && (a.value = i, e.k && (l[e.k] = i));
      };
      i ? (C.id = -1, it(C, n)) : C();
    }
  }
}
Ps().requestIdleCallback;
Ps().cancelIdleCallback;
const An = (e) => !!e.type.__asyncLoader, zs = (e) => e.type.__isKeepAlive;
function Zf(e, t) {
  bl(e, "a", t);
}
function Wf(e, t) {
  bl(e, "da", t);
}
function bl(e, t, n = Ge) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Us(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      zs(r.parent.vnode) && Jf(s, t, n, r), r = r.parent;
  }
}
function Jf(e, t, n, s) {
  const r = Us(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Hs(() => {
    Ko(s[t], r);
  }, n);
}
function Us(e, t, n = Ge, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      Qt();
      const c = ss(n), a = vt(t, n, e, i);
      return c(), en(), a;
    });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const $t = (e) => (t, n = Ge) => {
  (!Qn || e === "sp") && Us(e, (...s) => t(...s), n);
}, Yf = $t("bm"), tn = $t("m"), Xf = $t(
  "bu"
), Qf = $t("u"), si = $t(
  "bum"
), Hs = $t("um"), eh = $t(
  "sp"
), th = $t("rtg"), nh = $t("rtc");
function sh(e, t = Ge) {
  Us("ec", e, t);
}
const rh = "components", vl = Symbol.for("v-ndc");
function Oi(e) {
  return Ne(e) ? oh(rh, e, !1) || e : e || vl;
}
function oh(e, t, n = !0, s = !1) {
  const r = ze || Ge;
  if (r) {
    const o = r.type;
    {
      const c = Gh(
        o,
        !1
      );
      if (c && (c === t || c === pt(t) || c === qs(pt(t))))
        return o;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Li(r[e] || o[e], t) || // global registration
      Li(r.appContext[e], t)
    );
    return !i && s ? o : i;
  }
}
function Li(e, t) {
  return e && (e[t] || e[pt(t)] || e[qs(pt(t))]);
}
function qo(e, t, n, s) {
  let r;
  const o = n, i = ne(e);
  if (i || Ne(e)) {
    const c = i && wn(e);
    let a = !1;
    c && (a = !dt(e), e = Bs(e)), r = new Array(e.length);
    for (let u = 0, l = e.length; u < l; u++)
      r[u] = t(
        a ? Ye(e[u]) : e[u],
        u,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let c = 0; c < e; c++)
      r[c] = t(c + 1, c, void 0, o);
  } else if (Me(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (c, a) => t(c, a, void 0, o)
      );
    else {
      const c = Object.keys(e);
      r = new Array(c.length);
      for (let a = 0, u = c.length; a < u; a++) {
        const l = c[a];
        r[a] = t(e[l], l, a, o);
      }
    }
  else
    r = [];
  return r;
}
function Zt(e, t, n = {}, s, r) {
  if (ze.ce || ze.parent && An(ze.parent) && ze.parent.ce)
    return t !== "default" && (n.name = t), re(), $e(
      Ke,
      null,
      [Ie("slot", n, s && s())],
      64
    );
  let o = e[t];
  o && o._c && (o._d = !1), re();
  const i = o && yl(o(n)), c = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, a = $e(
    Ke,
    {
      key: (c && !Pt(c) ? c : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && s ? "_fb" : "")
    },
    i || (s ? s() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !r && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), o && o._c && (o._d = !0), a;
}
function yl(e) {
  return e.some((t) => Xn(t) ? !(t.type === st || t.type === Ke && !yl(t.children)) : !0) ? e : null;
}
const Po = (e) => e ? zl(e) ? Ks(e) : Po(e.parent) : null, jn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ He(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Po(e.parent),
    $root: (e) => Po(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => kl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ni(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Jt.bind(e.proxy)),
    $watch: (e) => Sh.bind(e)
  })
), lr = (e, t) => e !== Ae && !e.__isScriptSetup && ye(e, t), ih = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: o, accessCache: i, type: c, appContext: a } = e;
    let u;
    if (t[0] !== "$") {
      const h = i[t];
      if (h !== void 0)
        switch (h) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (lr(s, t))
          return i[t] = 1, s[t];
        if (r !== Ae && ye(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && ye(u, t)
        )
          return i[t] = 3, o[t];
        if (n !== Ae && ye(n, t))
          return i[t] = 4, n[t];
        Bo && (i[t] = 0);
      }
    }
    const l = jn[t];
    let f, d;
    if (l)
      return t === "$attrs" && Je(e.attrs, "get", ""), l(e);
    if (
      // css module (injected by vue-loader)
      (f = c.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== Ae && ye(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      d = a.config.globalProperties, ye(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: o } = e;
    return lr(r, t) ? (r[t] = n, !0) : s !== Ae && ye(s, t) ? (s[t] = n, !0) : ye(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o }
  }, i) {
    let c;
    return !!n[i] || e !== Ae && ye(e, i) || lr(t, i) || (c = o[0]) && ye(c, i) || ye(s, i) || ye(jn, i) || ye(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ye(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Fi(e) {
  return ne(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Bo = !0;
function ch(e) {
  const t = kl(e), n = e.proxy, s = e.ctx;
  Bo = !1, t.beforeCreate && qi(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: o,
    methods: i,
    watch: c,
    provide: a,
    inject: u,
    // lifecycle
    created: l,
    beforeMount: f,
    mounted: d,
    beforeUpdate: h,
    updated: v,
    activated: x,
    deactivated: C,
    beforeDestroy: m,
    beforeUnmount: k,
    destroyed: b,
    unmounted: p,
    render: E,
    renderTracked: w,
    renderTriggered: $,
    errorCaptured: R,
    serverPrefetch: D,
    // public API
    expose: A,
    inheritAttrs: N,
    // assets
    components: I,
    directives: ee,
    filters: T
  } = t;
  if (u && ah(u, s, null), i)
    for (const le in i) {
      const G = i[le];
      ae(G) && (s[le] = G.bind(n));
    }
  if (r) {
    const le = r.call(n, n);
    Me(le) && (e.data = Qo(le));
  }
  if (Bo = !0, o)
    for (const le in o) {
      const G = o[le], fe = ae(G) ? G.bind(n, n) : ae(G.get) ? G.get.bind(n, n) : Tt, Z = !ae(G) && ae(G.set) ? G.set.bind(n) : Tt, we = Se({
        get: fe,
        set: Z
      });
      Object.defineProperty(s, le, {
        enumerable: !0,
        configurable: !0,
        get: () => we.value,
        set: (Ce) => we.value = Ce
      });
    }
  if (c)
    for (const le in c)
      xl(c[le], s, n, le);
  if (a) {
    const le = ae(a) ? a.call(n) : a;
    Reflect.ownKeys(le).forEach((G) => {
      ph(G, le[G]);
    });
  }
  l && qi(l, e, "c");
  function Q(le, G) {
    ne(G) ? G.forEach((fe) => le(fe.bind(n))) : G && le(G.bind(n));
  }
  if (Q(Yf, f), Q(tn, d), Q(Xf, h), Q(Qf, v), Q(Zf, x), Q(Wf, C), Q(sh, R), Q(nh, w), Q(th, $), Q(si, k), Q(Hs, p), Q(eh, D), ne(A))
    if (A.length) {
      const le = e.exposed || (e.exposed = {});
      A.forEach((G) => {
        Object.defineProperty(le, G, {
          get: () => n[G],
          set: (fe) => n[G] = fe
        });
      });
    } else e.exposed || (e.exposed = {});
  E && e.render === Tt && (e.render = E), N != null && (e.inheritAttrs = N), I && (e.components = I), ee && (e.directives = ee), D && _l(e);
}
function ah(e, t, n = Tt) {
  ne(e) && (e = $o(e));
  for (const s in e) {
    const r = e[s];
    let o;
    Me(r) ? "default" in r ? o = Tn(
      r.from || s,
      r.default,
      !0
    ) : o = Tn(r.from || s) : o = Tn(r), Ue(o) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[s] = o;
  }
}
function qi(e, t, n) {
  vt(
    ne(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function xl(e, t, n, s) {
  let r = s.includes(".") ? Fl(n, s) : () => n[s];
  if (Ne(e)) {
    const o = t[e];
    ae(o) && xs(r, o);
  } else if (ae(e))
    xs(r, e.bind(n));
  else if (Me(e))
    if (ne(e))
      e.forEach((o) => xl(o, t, n, s));
    else {
      const o = ae(e.handler) ? e.handler.bind(n) : t[e.handler];
      ae(o) && xs(r, o, e);
    }
}
function kl(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = o.get(t);
  let a;
  return c ? a = c : !r.length && !n && !s ? a = t : (a = {}, r.length && r.forEach(
    (u) => Rs(a, u, i, !0)
  ), Rs(a, t, i)), Me(t) && o.set(t, a), a;
}
function Rs(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && Rs(e, o, n, !0), r && r.forEach(
    (i) => Rs(e, i, n, !0)
  );
  for (const i in t)
    if (!(s && i === "expose")) {
      const c = lh[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const lh = {
  data: Pi,
  props: Bi,
  emits: Bi,
  // objects
  methods: $n,
  computed: $n,
  // lifecycle
  beforeCreate: et,
  created: et,
  beforeMount: et,
  mounted: et,
  beforeUpdate: et,
  updated: et,
  beforeDestroy: et,
  beforeUnmount: et,
  destroyed: et,
  unmounted: et,
  activated: et,
  deactivated: et,
  errorCaptured: et,
  serverPrefetch: et,
  // assets
  components: $n,
  directives: $n,
  // watch
  watch: fh,
  // provide / inject
  provide: Pi,
  inject: uh
};
function Pi(e, t) {
  return t ? e ? function() {
    return He(
      ae(e) ? e.call(this, this) : e,
      ae(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function uh(e, t) {
  return $n($o(e), $o(t));
}
function $o(e) {
  if (ne(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function et(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function $n(e, t) {
  return e ? He(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Bi(e, t) {
  return e ? ne(e) && ne(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : He(
    /* @__PURE__ */ Object.create(null),
    Fi(e),
    Fi(t ?? {})
  ) : t;
}
function fh(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = He(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = et(e[s], t[s]);
  return n;
}
function El() {
  return {
    app: null,
    config: {
      isNativeTag: Wu,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let hh = 0;
function dh(e, t) {
  return function(s, r = null) {
    ae(s) || (s = He({}, s)), r != null && !Me(r) && (r = null);
    const o = El(), i = /* @__PURE__ */ new WeakSet(), c = [];
    let a = !1;
    const u = o.app = {
      _uid: hh++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Wh,
      get config() {
        return o.config;
      },
      set config(l) {
      },
      use(l, ...f) {
        return i.has(l) || (l && ae(l.install) ? (i.add(l), l.install(u, ...f)) : ae(l) && (i.add(l), l(u, ...f))), u;
      },
      mixin(l) {
        return o.mixins.includes(l) || o.mixins.push(l), u;
      },
      component(l, f) {
        return f ? (o.components[l] = f, u) : o.components[l];
      },
      directive(l, f) {
        return f ? (o.directives[l] = f, u) : o.directives[l];
      },
      mount(l, f, d) {
        if (!a) {
          const h = u._ceVNode || Ie(s, r);
          return h.appContext = o, d === !0 ? d = "svg" : d === !1 && (d = void 0), e(h, l, d), a = !0, u._container = l, l.__vue_app__ = u, Ks(h.component);
        }
      },
      onUnmount(l) {
        c.push(l);
      },
      unmount() {
        a && (vt(
          c,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(l, f) {
        return o.provides[l] = f, u;
      },
      runWithContext(l) {
        const f = Sn;
        Sn = u;
        try {
          return l();
        } finally {
          Sn = f;
        }
      }
    };
    return u;
  };
}
let Sn = null;
function ph(e, t) {
  if (Ge) {
    let n = Ge.provides;
    const s = Ge.parent && Ge.parent.provides;
    s === n && (n = Ge.provides = Object.create(s)), n[e] = t;
  }
}
function Tn(e, t, n = !1) {
  const s = Ge || ze;
  if (s || Sn) {
    const r = Sn ? Sn._context.provides : s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && ae(t) ? t.call(s && s.proxy) : t;
  }
}
const wl = {}, Cl = () => Object.create(wl), Al = (e) => Object.getPrototypeOf(e) === wl;
function gh(e, t, n, s = !1) {
  const r = {}, o = Cl();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Sl(e, t, r, o);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  n ? e.props = s ? r : Rf(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function mh(e, t, n, s) {
  const {
    props: r,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, c = be(r), [a] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const l = e.vnode.dynamicProps;
      for (let f = 0; f < l.length; f++) {
        let d = l[f];
        if (js(e.emitsOptions, d))
          continue;
        const h = t[d];
        if (a)
          if (ye(o, d))
            h !== o[d] && (o[d] = h, u = !0);
          else {
            const v = pt(d);
            r[v] = zo(
              a,
              c,
              v,
              h,
              e,
              !1
            );
          }
        else
          h !== o[d] && (o[d] = h, u = !0);
      }
    }
  } else {
    Sl(e, t, r, o) && (u = !0);
    let l;
    for (const f in c)
      (!t || // for camelCase
      !ye(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((l = Xt(f)) === f || !ye(t, l))) && (a ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[l] !== void 0) && (r[f] = zo(
        a,
        c,
        f,
        void 0,
        e,
        !0
      )) : delete r[f]);
    if (o !== c)
      for (const f in o)
        (!t || !ye(t, f)) && (delete o[f], u = !0);
  }
  u && Lt(e.attrs, "set", "");
}
function Sl(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let a in t) {
      if (zn(a))
        continue;
      const u = t[a];
      let l;
      r && ye(r, l = pt(a)) ? !o || !o.includes(l) ? n[l] = u : (c || (c = {}))[l] = u : js(e.emitsOptions, a) || (!(a in s) || u !== s[a]) && (s[a] = u, i = !0);
    }
  if (o) {
    const a = be(n), u = c || Ae;
    for (let l = 0; l < o.length; l++) {
      const f = o[l];
      n[f] = zo(
        r,
        a,
        f,
        u[f],
        e,
        !ye(u, f)
      );
    }
  }
  return i;
}
function zo(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const c = ye(i, "default");
    if (c && s === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && ae(a)) {
        const { propsDefaults: u } = r;
        if (n in u)
          s = u[n];
        else {
          const l = ss(r);
          s = u[n] = a.call(
            null,
            t
          ), l();
        }
      } else
        s = a;
      r.ce && r.ce._setProp(n, s);
    }
    i[
      0
      /* shouldCast */
    ] && (o && !c ? s = !1 : i[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Xt(n)) && (s = !0));
  }
  return s;
}
const _h = /* @__PURE__ */ new WeakMap();
function Tl(e, t, n = !1) {
  const s = n ? _h : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const o = e.props, i = {}, c = [];
  let a = !1;
  if (!ae(e)) {
    const l = (f) => {
      a = !0;
      const [d, h] = Tl(f, t, !0);
      He(i, d), h && c.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  if (!o && !a)
    return Me(e) && s.set(e, kn), kn;
  if (ne(o))
    for (let l = 0; l < o.length; l++) {
      const f = pt(o[l]);
      $i(f) && (i[f] = Ae);
    }
  else if (o)
    for (const l in o) {
      const f = pt(l);
      if ($i(f)) {
        const d = o[l], h = i[f] = ne(d) || ae(d) ? { type: d } : He({}, d), v = h.type;
        let x = !1, C = !0;
        if (ne(v))
          for (let m = 0; m < v.length; ++m) {
            const k = v[m], b = ae(k) && k.name;
            if (b === "Boolean") {
              x = !0;
              break;
            } else b === "String" && (C = !1);
          }
        else
          x = ae(v) && v.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = x, h[
          1
          /* shouldCastTrue */
        ] = C, (x || ye(h, "default")) && c.push(f);
      }
    }
  const u = [i, c];
  return Me(e) && s.set(e, u), u;
}
function $i(e) {
  return e[0] !== "$" && !zn(e);
}
const Rl = (e) => e[0] === "_" || e === "$stable", ri = (e) => ne(e) ? e.map(Ct) : [Ct(e)], bh = (e, t, n) => {
  if (t._n)
    return t;
  const s = qt((...r) => ri(t(...r)), n);
  return s._c = !1, s;
}, Dl = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (Rl(r)) continue;
    const o = e[r];
    if (ae(o))
      t[r] = bh(r, o, s);
    else if (o != null) {
      const i = ri(o);
      t[r] = () => i;
    }
  }
}, Ml = (e, t) => {
  const n = ri(t);
  e.slots.default = () => n;
}, Il = (e, t, n) => {
  for (const s in t)
    (n || s !== "_") && (e[s] = t[s]);
}, vh = (e, t, n) => {
  const s = e.slots = Cl();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Il(s, t, n), n && $a(s, "_", r, !0)) : Dl(t, s);
  } else t && Ml(e, t);
}, yh = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let o = !0, i = Ae;
  if (s.shapeFlag & 32) {
    const c = t._;
    c ? n && c === 1 ? o = !1 : Il(r, t, n) : (o = !t.$stable, Dl(t, r)), i = t;
  } else t && (Ml(e, t), i = { default: 1 });
  if (o)
    for (const c in r)
      !Rl(c) && i[c] == null && delete r[c];
}, it = Oh;
function xh(e) {
  return kh(e);
}
function kh(e, t) {
  const n = Ps();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: o,
    createElement: i,
    createText: c,
    createComment: a,
    setText: u,
    setElementText: l,
    parentNode: f,
    nextSibling: d,
    setScopeId: h = Tt,
    insertStaticContent: v
  } = e, x = (g, y, S, F = null, O = null, L = null, H = void 0, z = null, B = !!y.dynamicChildren) => {
    if (g === y)
      return;
    g && !hn(g, y) && (F = mn(g), Ce(g, O, L, !0), g = null), y.patchFlag === -2 && (B = !1, y.dynamicChildren = null);
    const { type: q, ref: te, shapeFlag: V } = y;
    switch (q) {
      case Vs:
        C(g, y, S, F);
        break;
      case st:
        m(g, y, S, F);
        break;
      case fr:
        g == null && k(y, S, F, H);
        break;
      case Ke:
        I(
          g,
          y,
          S,
          F,
          O,
          L,
          H,
          z,
          B
        );
        break;
      default:
        V & 1 ? E(
          g,
          y,
          S,
          F,
          O,
          L,
          H,
          z,
          B
        ) : V & 6 ? ee(
          g,
          y,
          S,
          F,
          O,
          L,
          H,
          z,
          B
        ) : (V & 64 || V & 128) && q.process(
          g,
          y,
          S,
          F,
          O,
          L,
          H,
          z,
          B,
          yt
        );
    }
    te != null && O && Ts(te, g && g.ref, L, y || g, !y);
  }, C = (g, y, S, F) => {
    if (g == null)
      s(
        y.el = c(y.children),
        S,
        F
      );
    else {
      const O = y.el = g.el;
      y.children !== g.children && u(O, y.children);
    }
  }, m = (g, y, S, F) => {
    g == null ? s(
      y.el = a(y.children || ""),
      S,
      F
    ) : y.el = g.el;
  }, k = (g, y, S, F) => {
    [g.el, g.anchor] = v(
      g.children,
      y,
      S,
      F,
      g.el,
      g.anchor
    );
  }, b = ({ el: g, anchor: y }, S, F) => {
    let O;
    for (; g && g !== y; )
      O = d(g), s(g, S, F), g = O;
    s(y, S, F);
  }, p = ({ el: g, anchor: y }) => {
    let S;
    for (; g && g !== y; )
      S = d(g), r(g), g = S;
    r(y);
  }, E = (g, y, S, F, O, L, H, z, B) => {
    y.type === "svg" ? H = "svg" : y.type === "math" && (H = "mathml"), g == null ? w(
      y,
      S,
      F,
      O,
      L,
      H,
      z,
      B
    ) : D(
      g,
      y,
      O,
      L,
      H,
      z,
      B
    );
  }, w = (g, y, S, F, O, L, H, z) => {
    let B, q;
    const { props: te, shapeFlag: V, transition: W, dirs: se } = g;
    if (B = g.el = i(
      g.type,
      L,
      te && te.is,
      te
    ), V & 8 ? l(B, g.children) : V & 16 && R(
      g.children,
      B,
      null,
      F,
      O,
      ur(g, L),
      H,
      z
    ), se && on(g, null, F, "created"), $(B, g, g.scopeId, H, F), te) {
      for (const ve in te)
        ve !== "value" && !zn(ve) && o(B, ve, null, te[ve], L, F);
      "value" in te && o(B, "value", null, te.value, L), (q = te.onVnodeBeforeMount) && Et(q, F, g);
    }
    se && on(g, null, F, "beforeMount");
    const he = Eh(O, W);
    he && W.beforeEnter(B), s(B, y, S), ((q = te && te.onVnodeMounted) || he || se) && it(() => {
      q && Et(q, F, g), he && W.enter(B), se && on(g, null, F, "mounted");
    }, O);
  }, $ = (g, y, S, F, O) => {
    if (S && h(g, S), F)
      for (let L = 0; L < F.length; L++)
        h(g, F[L]);
    if (O) {
      let L = O.subTree;
      if (y === L || Pl(L.type) && (L.ssContent === y || L.ssFallback === y)) {
        const H = O.vnode;
        $(
          g,
          H,
          H.scopeId,
          H.slotScopeIds,
          O.parent
        );
      }
    }
  }, R = (g, y, S, F, O, L, H, z, B = 0) => {
    for (let q = B; q < g.length; q++) {
      const te = g[q] = z ? Kt(g[q]) : Ct(g[q]);
      x(
        null,
        te,
        y,
        S,
        F,
        O,
        L,
        H,
        z
      );
    }
  }, D = (g, y, S, F, O, L, H) => {
    const z = y.el = g.el;
    let { patchFlag: B, dynamicChildren: q, dirs: te } = y;
    B |= g.patchFlag & 16;
    const V = g.props || Ae, W = y.props || Ae;
    let se;
    if (S && cn(S, !1), (se = W.onVnodeBeforeUpdate) && Et(se, S, y, g), te && on(y, g, S, "beforeUpdate"), S && cn(S, !0), (V.innerHTML && W.innerHTML == null || V.textContent && W.textContent == null) && l(z, ""), q ? A(
      g.dynamicChildren,
      q,
      z,
      S,
      F,
      ur(y, O),
      L
    ) : H || G(
      g,
      y,
      z,
      null,
      S,
      F,
      ur(y, O),
      L,
      !1
    ), B > 0) {
      if (B & 16)
        N(z, V, W, S, O);
      else if (B & 2 && V.class !== W.class && o(z, "class", null, W.class, O), B & 4 && o(z, "style", V.style, W.style, O), B & 8) {
        const he = y.dynamicProps;
        for (let ve = 0; ve < he.length; ve++) {
          const _e = he[ve], Xe = V[_e], Ze = W[_e];
          (Ze !== Xe || _e === "value") && o(z, _e, Xe, Ze, O, S);
        }
      }
      B & 1 && g.children !== y.children && l(z, y.children);
    } else !H && q == null && N(z, V, W, S, O);
    ((se = W.onVnodeUpdated) || te) && it(() => {
      se && Et(se, S, y, g), te && on(y, g, S, "updated");
    }, F);
  }, A = (g, y, S, F, O, L, H) => {
    for (let z = 0; z < y.length; z++) {
      const B = g[z], q = y[z], te = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        B.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (B.type === Ke || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !hn(B, q) || // - In the case of a component, it could contain anything.
        B.shapeFlag & 70) ? f(B.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          S
        )
      );
      x(
        B,
        q,
        te,
        null,
        F,
        O,
        L,
        H,
        !0
      );
    }
  }, N = (g, y, S, F, O) => {
    if (y !== S) {
      if (y !== Ae)
        for (const L in y)
          !zn(L) && !(L in S) && o(
            g,
            L,
            y[L],
            null,
            O,
            F
          );
      for (const L in S) {
        if (zn(L)) continue;
        const H = S[L], z = y[L];
        H !== z && L !== "value" && o(g, L, z, H, O, F);
      }
      "value" in S && o(g, "value", y.value, S.value, O);
    }
  }, I = (g, y, S, F, O, L, H, z, B) => {
    const q = y.el = g ? g.el : c(""), te = y.anchor = g ? g.anchor : c("");
    let { patchFlag: V, dynamicChildren: W, slotScopeIds: se } = y;
    se && (z = z ? z.concat(se) : se), g == null ? (s(q, S, F), s(te, S, F), R(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      y.children || [],
      S,
      te,
      O,
      L,
      H,
      z,
      B
    )) : V > 0 && V & 64 && W && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren ? (A(
      g.dynamicChildren,
      W,
      S,
      O,
      L,
      H,
      z
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (y.key != null || O && y === O.subTree) && Nl(
      g,
      y,
      !0
      /* shallow */
    )) : G(
      g,
      y,
      S,
      te,
      O,
      L,
      H,
      z,
      B
    );
  }, ee = (g, y, S, F, O, L, H, z, B) => {
    y.slotScopeIds = z, g == null ? y.shapeFlag & 512 ? O.ctx.activate(
      y,
      S,
      F,
      H,
      B
    ) : T(
      y,
      S,
      F,
      O,
      L,
      H,
      B
    ) : ie(g, y, B);
  }, T = (g, y, S, F, O, L, H) => {
    const z = g.component = zh(
      g,
      F,
      O
    );
    if (zs(g) && (z.ctx.renderer = yt), Hh(z, !1, H), z.asyncDep) {
      if (O && O.registerDep(z, Q, H), !g.el) {
        const B = z.subTree = Ie(st);
        m(null, B, y, S);
      }
    } else
      Q(
        z,
        g,
        y,
        S,
        O,
        L,
        H
      );
  }, ie = (g, y, S) => {
    const F = y.component = g.component;
    if (Ih(g, y, S))
      if (F.asyncDep && !F.asyncResolved) {
        le(F, y, S);
        return;
      } else
        F.next = y, F.update();
    else
      y.el = g.el, F.vnode = y;
  }, Q = (g, y, S, F, O, L, H) => {
    const z = () => {
      if (g.isMounted) {
        let { next: V, bu: W, u: se, parent: he, vnode: ve } = g;
        {
          const ut = Ol(g);
          if (ut) {
            V && (V.el = ve.el, le(g, V, H)), ut.asyncDep.then(() => {
              g.isUnmounted || z();
            });
            return;
          }
        }
        let _e = V, Xe;
        cn(g, !1), V ? (V.el = ve.el, le(g, V, H)) : V = ve, W && vs(W), (Xe = V.props && V.props.onVnodeBeforeUpdate) && Et(Xe, he, V, ve), cn(g, !0);
        const Ze = Ui(g), lt = g.subTree;
        g.subTree = Ze, x(
          lt,
          Ze,
          // parent may have changed if it's in a teleport
          f(lt.el),
          // anchor may have changed if it's in a fragment
          mn(lt),
          g,
          O,
          L
        ), V.el = Ze.el, _e === null && Nh(g, Ze.el), se && it(se, O), (Xe = V.props && V.props.onVnodeUpdated) && it(
          () => Et(Xe, he, V, ve),
          O
        );
      } else {
        let V;
        const { el: W, props: se } = y, { bm: he, m: ve, parent: _e, root: Xe, type: Ze } = g, lt = An(y);
        cn(g, !1), he && vs(he), !lt && (V = se && se.onVnodeBeforeMount) && Et(V, _e, y), cn(g, !0);
        {
          Xe.ce && Xe.ce._injectChildStyle(Ze);
          const ut = g.subTree = Ui(g);
          x(
            null,
            ut,
            S,
            F,
            g,
            O,
            L
          ), y.el = ut.el;
        }
        if (ve && it(ve, O), !lt && (V = se && se.onVnodeMounted)) {
          const ut = y;
          it(
            () => Et(V, _e, ut),
            O
          );
        }
        (y.shapeFlag & 256 || _e && An(_e.vnode) && _e.vnode.shapeFlag & 256) && g.a && it(g.a, O), g.isMounted = !0, y = S = F = null;
      }
    };
    g.scope.on();
    const B = g.effect = new ja(z);
    g.scope.off();
    const q = g.update = B.run.bind(B), te = g.job = B.runIfDirty.bind(B);
    te.i = g, te.id = g.uid, B.scheduler = () => ni(te), cn(g, !0), q();
  }, le = (g, y, S) => {
    y.component = g;
    const F = g.vnode.props;
    g.vnode = y, g.next = null, mh(g, y.props, F, S), yh(g, y.children, S), Qt(), Ii(g), en();
  }, G = (g, y, S, F, O, L, H, z, B = !1) => {
    const q = g && g.children, te = g ? g.shapeFlag : 0, V = y.children, { patchFlag: W, shapeFlag: se } = y;
    if (W > 0) {
      if (W & 128) {
        Z(
          q,
          V,
          S,
          F,
          O,
          L,
          H,
          z,
          B
        );
        return;
      } else if (W & 256) {
        fe(
          q,
          V,
          S,
          F,
          O,
          L,
          H,
          z,
          B
        );
        return;
      }
    }
    se & 8 ? (te & 16 && nn(q, O, L), V !== q && l(S, V)) : te & 16 ? se & 16 ? Z(
      q,
      V,
      S,
      F,
      O,
      L,
      H,
      z,
      B
    ) : nn(q, O, L, !0) : (te & 8 && l(S, ""), se & 16 && R(
      V,
      S,
      F,
      O,
      L,
      H,
      z,
      B
    ));
  }, fe = (g, y, S, F, O, L, H, z, B) => {
    g = g || kn, y = y || kn;
    const q = g.length, te = y.length, V = Math.min(q, te);
    let W;
    for (W = 0; W < V; W++) {
      const se = y[W] = B ? Kt(y[W]) : Ct(y[W]);
      x(
        g[W],
        se,
        S,
        null,
        O,
        L,
        H,
        z,
        B
      );
    }
    q > te ? nn(
      g,
      O,
      L,
      !0,
      !1,
      V
    ) : R(
      y,
      S,
      F,
      O,
      L,
      H,
      z,
      B,
      V
    );
  }, Z = (g, y, S, F, O, L, H, z, B) => {
    let q = 0;
    const te = y.length;
    let V = g.length - 1, W = te - 1;
    for (; q <= V && q <= W; ) {
      const se = g[q], he = y[q] = B ? Kt(y[q]) : Ct(y[q]);
      if (hn(se, he))
        x(
          se,
          he,
          S,
          null,
          O,
          L,
          H,
          z,
          B
        );
      else
        break;
      q++;
    }
    for (; q <= V && q <= W; ) {
      const se = g[V], he = y[W] = B ? Kt(y[W]) : Ct(y[W]);
      if (hn(se, he))
        x(
          se,
          he,
          S,
          null,
          O,
          L,
          H,
          z,
          B
        );
      else
        break;
      V--, W--;
    }
    if (q > V) {
      if (q <= W) {
        const se = W + 1, he = se < te ? y[se].el : F;
        for (; q <= W; )
          x(
            null,
            y[q] = B ? Kt(y[q]) : Ct(y[q]),
            S,
            he,
            O,
            L,
            H,
            z,
            B
          ), q++;
      }
    } else if (q > W)
      for (; q <= V; )
        Ce(g[q], O, L, !0), q++;
    else {
      const se = q, he = q, ve = /* @__PURE__ */ new Map();
      for (q = he; q <= W; q++) {
        const Qe = y[q] = B ? Kt(y[q]) : Ct(y[q]);
        Qe.key != null && ve.set(Qe.key, q);
      }
      let _e, Xe = 0;
      const Ze = W - he + 1;
      let lt = !1, ut = 0;
      const sn = new Array(Ze);
      for (q = 0; q < Ze; q++) sn[q] = 0;
      for (q = se; q <= V; q++) {
        const Qe = g[q];
        if (Xe >= Ze) {
          Ce(Qe, O, L, !0);
          continue;
        }
        let ft;
        if (Qe.key != null)
          ft = ve.get(Qe.key);
        else
          for (_e = he; _e <= W; _e++)
            if (sn[_e - he] === 0 && hn(Qe, y[_e])) {
              ft = _e;
              break;
            }
        ft === void 0 ? Ce(Qe, O, L, !0) : (sn[ft - he] = q + 1, ft >= ut ? ut = ft : lt = !0, x(
          Qe,
          y[ft],
          S,
          null,
          O,
          L,
          H,
          z,
          B
        ), Xe++);
      }
      const Nn = lt ? wh(sn) : kn;
      for (_e = Nn.length - 1, q = Ze - 1; q >= 0; q--) {
        const Qe = he + q, ft = y[Qe], rs = Qe + 1 < te ? y[Qe + 1].el : F;
        sn[q] === 0 ? x(
          null,
          ft,
          S,
          rs,
          O,
          L,
          H,
          z,
          B
        ) : lt && (_e < 0 || q !== Nn[_e] ? we(ft, S, rs, 2) : _e--);
      }
    }
  }, we = (g, y, S, F, O = null) => {
    const { el: L, type: H, transition: z, children: B, shapeFlag: q } = g;
    if (q & 6) {
      we(g.component.subTree, y, S, F);
      return;
    }
    if (q & 128) {
      g.suspense.move(y, S, F);
      return;
    }
    if (q & 64) {
      H.move(g, y, S, yt);
      return;
    }
    if (H === Ke) {
      s(L, y, S);
      for (let V = 0; V < B.length; V++)
        we(B[V], y, S, F);
      s(g.anchor, y, S);
      return;
    }
    if (H === fr) {
      b(g, y, S);
      return;
    }
    if (F !== 2 && q & 1 && z)
      if (F === 0)
        z.beforeEnter(L), s(L, y, S), it(() => z.enter(L), O);
      else {
        const { leave: V, delayLeave: W, afterLeave: se } = z, he = () => s(L, y, S), ve = () => {
          V(L, () => {
            he(), se && se();
          });
        };
        W ? W(L, he, ve) : ve();
      }
    else
      s(L, y, S);
  }, Ce = (g, y, S, F = !1, O = !1) => {
    const {
      type: L,
      props: H,
      ref: z,
      children: B,
      dynamicChildren: q,
      shapeFlag: te,
      patchFlag: V,
      dirs: W,
      cacheIndex: se
    } = g;
    if (V === -2 && (O = !1), z != null && Ts(z, null, S, g, !0), se != null && (y.renderCache[se] = void 0), te & 256) {
      y.ctx.deactivate(g);
      return;
    }
    const he = te & 1 && W, ve = !An(g);
    let _e;
    if (ve && (_e = H && H.onVnodeBeforeUnmount) && Et(_e, y, g), te & 6)
      Zs(g.component, S, F);
    else {
      if (te & 128) {
        g.suspense.unmount(S, F);
        return;
      }
      he && on(g, null, y, "beforeUnmount"), te & 64 ? g.type.remove(
        g,
        y,
        S,
        yt,
        F
      ) : q && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !q.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (L !== Ke || V > 0 && V & 64) ? nn(
        q,
        y,
        S,
        !1,
        !0
      ) : (L === Ke && V & 384 || !O && te & 16) && nn(B, y, S), F && rt(g);
    }
    (ve && (_e = H && H.onVnodeUnmounted) || he) && it(() => {
      _e && Et(_e, y, g), he && on(g, null, y, "unmounted");
    }, S);
  }, rt = (g) => {
    const { type: y, el: S, anchor: F, transition: O } = g;
    if (y === Ke) {
      Gs(S, F);
      return;
    }
    if (y === fr) {
      p(g);
      return;
    }
    const L = () => {
      r(S), O && !O.persisted && O.afterLeave && O.afterLeave();
    };
    if (g.shapeFlag & 1 && O && !O.persisted) {
      const { leave: H, delayLeave: z } = O, B = () => H(S, L);
      z ? z(g.el, L, B) : B();
    } else
      L();
  }, Gs = (g, y) => {
    let S;
    for (; g !== y; )
      S = d(g), r(g), g = S;
    r(y);
  }, Zs = (g, y, S) => {
    const { bum: F, scope: O, job: L, subTree: H, um: z, m: B, a: q } = g;
    zi(B), zi(q), F && vs(F), O.stop(), L && (L.flags |= 8, Ce(H, g, y, S)), z && it(z, y), it(() => {
      g.isUnmounted = !0;
    }, y), y && y.pendingBranch && !y.isUnmounted && g.asyncDep && !g.asyncResolved && g.suspenseId === y.pendingId && (y.deps--, y.deps === 0 && y.resolve());
  }, nn = (g, y, S, F = !1, O = !1, L = 0) => {
    for (let H = L; H < g.length; H++)
      Ce(g[H], y, S, F, O);
  }, mn = (g) => {
    if (g.shapeFlag & 6)
      return mn(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const y = d(g.anchor || g.el), S = y && y[jf];
    return S ? d(S) : y;
  };
  let In = !1;
  const Ws = (g, y, S) => {
    g == null ? y._vnode && Ce(y._vnode, null, null, !0) : x(
      y._vnode || null,
      g,
      y,
      null,
      null,
      null,
      S
    ), y._vnode = g, In || (In = !0, Ii(), al(), In = !1);
  }, yt = {
    p: x,
    um: Ce,
    m: we,
    r: rt,
    mt: T,
    mc: R,
    pc: G,
    pbc: A,
    n: mn,
    o: e
  };
  return {
    render: Ws,
    hydrate: void 0,
    createApp: dh(Ws)
  };
}
function ur({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function cn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Eh(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Nl(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (ne(s) && ne(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let c = r[o];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[o] = Kt(r[o]), c.el = i.el), !n && c.patchFlag !== -2 && Nl(i, c)), c.type === Vs && (c.el = i.el);
    }
}
function wh(e) {
  const t = e.slice(), n = [0];
  let s, r, o, i, c;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const u = e[s];
    if (u !== 0) {
      if (r = n[n.length - 1], e[r] < u) {
        t[s] = r, n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        c = o + i >> 1, e[n[c]] < u ? o = c + 1 : i = c;
      u < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; )
    n[o] = i, i = t[i];
  return n;
}
function Ol(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ol(t);
}
function zi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Ch = Symbol.for("v-scx"), Ah = () => Tn(Ch);
function xs(e, t, n) {
  return Ll(e, t, n);
}
function Ll(e, t, n = Ae) {
  const { immediate: s, deep: r, flush: o, once: i } = n, c = He({}, n), a = t && s || !t && o !== "post";
  let u;
  if (Qn) {
    if (o === "sync") {
      const h = Ah();
      u = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!a) {
      const h = () => {
      };
      return h.stop = Tt, h.resume = Tt, h.pause = Tt, h;
    }
  }
  const l = Ge;
  c.call = (h, v, x) => vt(h, l, v, x);
  let f = !1;
  o === "post" ? c.scheduler = (h) => {
    it(h, l && l.suspense);
  } : o !== "sync" && (f = !0, c.scheduler = (h, v) => {
    v ? h() : ni(h);
  }), c.augmentJob = (h) => {
    t && (h.flags |= 4), f && (h.flags |= 2, l && (h.id = l.uid, h.i = l));
  };
  const d = $f(e, t, c);
  return Qn && (u ? u.push(d) : a && d()), d;
}
function Sh(e, t, n) {
  const s = this.proxy, r = Ne(e) ? e.includes(".") ? Fl(s, e) : () => s[e] : e.bind(s, s);
  let o;
  ae(t) ? o = t : (o = t.handler, n = t);
  const i = ss(this), c = Ll(r, o.bind(s), n);
  return i(), c;
}
function Fl(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const Th = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${pt(t)}Modifiers`] || e[`${Xt(t)}Modifiers`];
function Rh(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Ae;
  let r = n;
  const o = t.startsWith("update:"), i = o && Th(s, t.slice(7));
  i && (i.trim && (r = n.map((l) => Ne(l) ? l.trim() : l)), i.number && (r = n.map(Mo)));
  let c, a = s[c = sr(t)] || // also try camelCase event handler (#2249)
  s[c = sr(pt(t))];
  !a && o && (a = s[c = sr(Xt(t))]), a && vt(
    a,
    e,
    6,
    r
  );
  const u = s[c + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, vt(
      u,
      e,
      6,
      r
    );
  }
}
function ql(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let i = {}, c = !1;
  if (!ae(e)) {
    const a = (u) => {
      const l = ql(u, t, !0);
      l && (c = !0, He(i, l));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !o && !c ? (Me(e) && s.set(e, null), null) : (ne(o) ? o.forEach((a) => i[a] = null) : He(i, o), Me(e) && s.set(e, i), i);
}
function js(e, t) {
  return !e || !Os(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ye(e, t[0].toLowerCase() + t.slice(1)) || ye(e, Xt(t)) || ye(e, t));
}
function Ui(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [o],
    slots: i,
    attrs: c,
    emit: a,
    render: u,
    renderCache: l,
    props: f,
    data: d,
    setupState: h,
    ctx: v,
    inheritAttrs: x
  } = e, C = Ss(e);
  let m, k;
  try {
    if (n.shapeFlag & 4) {
      const p = r || s, E = p;
      m = Ct(
        u.call(
          E,
          p,
          l,
          f,
          h,
          d,
          v
        )
      ), k = c;
    } else {
      const p = t;
      m = Ct(
        p.length > 1 ? p(
          f,
          { attrs: c, slots: i, emit: a }
        ) : p(
          f,
          null
        )
      ), k = t.props ? c : Dh(c);
    }
  } catch (p) {
    Vn.length = 0, $s(p, e, 1), m = Ie(st);
  }
  let b = m;
  if (k && x !== !1) {
    const p = Object.keys(k), { shapeFlag: E } = b;
    p.length && E & 7 && (o && p.some(Vo) && (k = Mh(
      k,
      o
    )), b = Yt(b, k, !1, !0));
  }
  return n.dirs && (b = Yt(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && Jn(b, n.transition), m = b, Ss(C), m;
}
const Dh = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Os(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Mh = (e, t) => {
  const n = {};
  for (const s in e)
    (!Vo(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Ih(e, t, n) {
  const { props: s, children: r, component: o } = e, { props: i, children: c, patchFlag: a } = t, u = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Hi(s, i, u) : !!i;
    if (a & 8) {
      const l = t.dynamicProps;
      for (let f = 0; f < l.length; f++) {
        const d = l[f];
        if (i[d] !== s[d] && !js(u, d))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : s === i ? !1 : s ? i ? Hi(s, i, u) : !0 : !!i;
  return !1;
}
function Hi(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !js(n, o))
      return !0;
  }
  return !1;
}
function Nh({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Pl = (e) => e.__isSuspense;
function Oh(e, t) {
  t && t.pendingBranch ? ne(e) ? t.effects.push(...e) : t.effects.push(e) : Hf(e);
}
const Ke = Symbol.for("v-fgt"), Vs = Symbol.for("v-txt"), st = Symbol.for("v-cmt"), fr = Symbol.for("v-stc"), Vn = [];
let at = null;
function re(e = !1) {
  Vn.push(at = e ? null : []);
}
function Lh() {
  Vn.pop(), at = Vn[Vn.length - 1] || null;
}
let Yn = 1;
function ji(e, t = !1) {
  Yn += e, e < 0 && at && t && (at.hasOnce = !0);
}
function Bl(e) {
  return e.dynamicChildren = Yn > 0 ? at || kn : null, Lh(), Yn > 0 && at && at.push(e), e;
}
function xe(e, t, n, s, r, o) {
  return Bl(
    pe(
      e,
      t,
      n,
      s,
      r,
      o,
      !0
    )
  );
}
function $e(e, t, n, s, r) {
  return Bl(
    Ie(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function Xn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function hn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const $l = ({ key: e }) => e ?? null, ks = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ne(e) || Ue(e) || ae(e) ? { i: ze, r: e, k: t, f: !!n } : e : null);
function pe(e, t = null, n = null, s = 0, r = null, o = e === Ke ? 0 : 1, i = !1, c = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && $l(t),
    ref: t && ks(t),
    scopeId: ul,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ze
  };
  return c ? (oi(a, n), o & 128 && e.normalize(a)) : n && (a.shapeFlag |= Ne(n) ? 8 : 16), Yn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  at && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && at.push(a), a;
}
const Ie = Fh;
function Fh(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === vl) && (e = st), Xn(e)) {
    const c = Yt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && oi(c, n), Yn > 0 && !o && at && (c.shapeFlag & 6 ? at[at.indexOf(e)] = c : at.push(c)), c.patchFlag = -2, c;
  }
  if (Zh(e) && (e = e.__vccOpts), t) {
    t = qh(t);
    let { class: c, style: a } = t;
    c && !Ne(c) && (t.class = mt(c)), Me(a) && (ti(a) && !ne(a) && (a = He({}, a)), t.style = Rt(a));
  }
  const i = Ne(e) ? 1 : Pl(e) ? 128 : fl(e) ? 64 : Me(e) ? 4 : ae(e) ? 2 : 0;
  return pe(
    e,
    t,
    n,
    s,
    r,
    i,
    o,
    !0
  );
}
function qh(e) {
  return e ? ti(e) || Al(e) ? He({}, e) : e : null;
}
function Yt(e, t, n = !1, s = !1) {
  const { props: r, ref: o, patchFlag: i, children: c, transition: a } = e, u = t ? Ds(r || {}, t) : r, l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && $l(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? ne(o) ? o.concat(ks(t)) : [o, ks(t)] : ks(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ke ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Yt(e.ssContent),
    ssFallback: e.ssFallback && Yt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && Jn(
    l,
    a.clone(l)
  ), l;
}
function Ph(e = " ", t = 0) {
  return Ie(Vs, null, e, t);
}
function _t(e = "", t = !1) {
  return t ? (re(), $e(st, null, e)) : Ie(st, null, e);
}
function Ct(e) {
  return e == null || typeof e == "boolean" ? Ie(st) : ne(e) ? Ie(
    Ke,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Xn(e) ? Kt(e) : Ie(Vs, null, String(e));
}
function Kt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Yt(e);
}
function oi(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (ne(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), oi(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Al(t) ? t._ctx = ze : r === 3 && ze && (ze.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ae(t) ? (t = { default: t, _ctx: ze }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Ph(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ds(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = mt([t.class, s.class]));
      else if (r === "style")
        t.style = Rt([t.style, s.style]);
      else if (Os(r)) {
        const o = t[r], i = s[r];
        i && o !== i && !(ne(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Et(e, t, n, s = null) {
  vt(e, t, 7, [
    n,
    s
  ]);
}
const Bh = El();
let $h = 0;
function zh(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Bh, o = {
    uid: $h++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new af(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Tl(s, r),
    emitsOptions: ql(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ae,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: Ae,
    data: Ae,
    props: Ae,
    attrs: Ae,
    slots: Ae,
    refs: Ae,
    setupState: Ae,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Rh.bind(null, o), e.ce && e.ce(o), o;
}
let Ge = null;
const Uh = () => Ge || ze;
let Ms, Uo;
{
  const e = Ps(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (o) => {
      r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
    };
  };
  Ms = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ge = n
  ), Uo = t(
    "__VUE_SSR_SETTERS__",
    (n) => Qn = n
  );
}
const ss = (e) => {
  const t = Ge;
  return Ms(e), e.scope.on(), () => {
    e.scope.off(), Ms(t);
  };
}, Vi = () => {
  Ge && Ge.scope.off(), Ms(null);
};
function zl(e) {
  return e.vnode.shapeFlag & 4;
}
let Qn = !1;
function Hh(e, t = !1, n = !1) {
  t && Uo(t);
  const { props: s, children: r } = e.vnode, o = zl(e);
  gh(e, s, o, t), vh(e, r, n);
  const i = o ? jh(e, t) : void 0;
  return t && Uo(!1), i;
}
function jh(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ih);
  const { setup: s } = n;
  if (s) {
    Qt();
    const r = e.setupContext = s.length > 1 ? Kh(e) : null, o = ss(e), i = ns(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), c = qa(i);
    if (en(), o(), (c || e.sp) && !An(e) && _l(e), c) {
      if (i.then(Vi, Vi), t)
        return i.then((a) => {
          Ki(e, a);
        }).catch((a) => {
          $s(a, e, 0);
        });
      e.asyncDep = i;
    } else
      Ki(e, i);
  } else
    Ul(e);
}
function Ki(e, t, n) {
  ae(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Me(t) && (e.setupState = ol(t)), Ul(e);
}
function Ul(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Tt);
  {
    const r = ss(e);
    Qt();
    try {
      ch(e);
    } finally {
      en(), r();
    }
  }
}
const Vh = {
  get(e, t) {
    return Je(e, "get", ""), e[t];
  }
};
function Kh(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Vh),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ks(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ol(Df(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in jn)
        return jn[n](e);
    },
    has(t, n) {
      return n in t || n in jn;
    }
  })) : e.proxy;
}
function Gh(e, t = !0) {
  return ae(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Zh(e) {
  return ae(e) && "__vccOpts" in e;
}
const Se = (e, t) => Pf(e, t, Qn);
function Hl(e, t, n) {
  const s = arguments.length;
  return s === 2 ? Me(t) && !ne(t) ? Xn(t) ? Ie(e, null, [t]) : Ie(e, t) : Ie(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Xn(n) && (n = [n]), Ie(e, t, n));
}
const Wh = "3.5.13";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ho;
const Gi = typeof window < "u" && window.trustedTypes;
if (Gi)
  try {
    Ho = /* @__PURE__ */ Gi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const jl = Ho ? (e) => Ho.createHTML(e) : (e) => e, Jh = "http://www.w3.org/2000/svg", Yh = "http://www.w3.org/1998/Math/MathML", Nt = typeof document < "u" ? document : null, Zi = Nt && /* @__PURE__ */ Nt.createElement("template"), Xh = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? Nt.createElementNS(Jh, e) : t === "mathml" ? Nt.createElementNS(Yh, e) : n ? Nt.createElement(e, { is: n }) : Nt.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => Nt.createTextNode(e),
  createComment: (e) => Nt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Nt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, o) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === o || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling)); )
        ;
    else {
      Zi.innerHTML = jl(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const c = Zi.content;
      if (s === "svg" || s === "mathml") {
        const a = c.firstChild;
        for (; a.firstChild; )
          c.appendChild(a.firstChild);
        c.removeChild(a);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Ht = "transition", Fn = "animation", es = Symbol("_vtc"), Vl = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, Qh = /* @__PURE__ */ He(
  {},
  hl,
  Vl
), ed = (e) => (e.displayName = "Transition", e.props = Qh, e), hr = /* @__PURE__ */ ed(
  (e, { slots: t }) => Hl(Gf, td(e), t)
), an = (e, t = []) => {
  ne(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Wi = (e) => e ? ne(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function td(e) {
  const t = {};
  for (const I in e)
    I in Vl || (t[I] = e[I]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: r,
    enterFromClass: o = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: c = `${n}-enter-to`,
    appearFromClass: a = o,
    appearActiveClass: u = i,
    appearToClass: l = c,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: d = `${n}-leave-active`,
    leaveToClass: h = `${n}-leave-to`
  } = e, v = nd(r), x = v && v[0], C = v && v[1], {
    onBeforeEnter: m,
    onEnter: k,
    onEnterCancelled: b,
    onLeave: p,
    onLeaveCancelled: E,
    onBeforeAppear: w = m,
    onAppear: $ = k,
    onAppearCancelled: R = b
  } = t, D = (I, ee, T, ie) => {
    I._enterCancelled = ie, ln(I, ee ? l : c), ln(I, ee ? u : i), T && T();
  }, A = (I, ee) => {
    I._isLeaving = !1, ln(I, f), ln(I, h), ln(I, d), ee && ee();
  }, N = (I) => (ee, T) => {
    const ie = I ? $ : k, Q = () => D(ee, I, T);
    an(ie, [ee, Q]), Ji(() => {
      ln(ee, I ? a : o), It(ee, I ? l : c), Wi(ie) || Yi(ee, s, x, Q);
    });
  };
  return He(t, {
    onBeforeEnter(I) {
      an(m, [I]), It(I, o), It(I, i);
    },
    onBeforeAppear(I) {
      an(w, [I]), It(I, a), It(I, u);
    },
    onEnter: N(!1),
    onAppear: N(!0),
    onLeave(I, ee) {
      I._isLeaving = !0;
      const T = () => A(I, ee);
      It(I, f), I._enterCancelled ? (It(I, d), ec()) : (ec(), It(I, d)), Ji(() => {
        I._isLeaving && (ln(I, f), It(I, h), Wi(p) || Yi(I, s, C, T));
      }), an(p, [I, T]);
    },
    onEnterCancelled(I) {
      D(I, !1, void 0, !0), an(b, [I]);
    },
    onAppearCancelled(I) {
      D(I, !0, void 0, !0), an(R, [I]);
    },
    onLeaveCancelled(I) {
      A(I), an(E, [I]);
    }
  });
}
function nd(e) {
  if (e == null)
    return null;
  if (Me(e))
    return [dr(e.enter), dr(e.leave)];
  {
    const t = dr(e);
    return [t, t];
  }
}
function dr(e) {
  return ef(e);
}
function It(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[es] || (e[es] = /* @__PURE__ */ new Set())).add(t);
}
function ln(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[es];
  n && (n.delete(t), n.size || (e[es] = void 0));
}
function Ji(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let sd = 0;
function Yi(e, t, n, s) {
  const r = e._endId = ++sd, o = () => {
    r === e._endId && s();
  };
  if (n != null)
    return setTimeout(o, n);
  const { type: i, timeout: c, propCount: a } = rd(e, t);
  if (!i)
    return s();
  const u = i + "end";
  let l = 0;
  const f = () => {
    e.removeEventListener(u, d), o();
  }, d = (h) => {
    h.target === e && ++l >= a && f();
  };
  setTimeout(() => {
    l < a && f();
  }, c + 1), e.addEventListener(u, d);
}
function rd(e, t) {
  const n = window.getComputedStyle(e), s = (v) => (n[v] || "").split(", "), r = s(`${Ht}Delay`), o = s(`${Ht}Duration`), i = Xi(r, o), c = s(`${Fn}Delay`), a = s(`${Fn}Duration`), u = Xi(c, a);
  let l = null, f = 0, d = 0;
  t === Ht ? i > 0 && (l = Ht, f = i, d = o.length) : t === Fn ? u > 0 && (l = Fn, f = u, d = a.length) : (f = Math.max(i, u), l = f > 0 ? i > u ? Ht : Fn : null, d = l ? l === Ht ? o.length : a.length : 0);
  const h = l === Ht && /\b(transform|all)(,|$)/.test(
    s(`${Ht}Property`).toString()
  );
  return {
    type: l,
    timeout: f,
    propCount: d,
    hasTransform: h
  };
}
function Xi(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Qi(n) + Qi(e[s])));
}
function Qi(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function ec() {
  return document.body.offsetHeight;
}
function od(e, t, n) {
  const s = e[es];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Is = Symbol("_vod"), Kl = Symbol("_vsh"), pr = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Is] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : qn(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), qn(e, !0), s.enter(e)) : s.leave(e, () => {
      qn(e, !1);
    }) : qn(e, t));
  },
  beforeUnmount(e, { value: t }) {
    qn(e, t);
  }
};
function qn(e, t) {
  e.style.display = t ? e[Is] : "none", e[Kl] = !t;
}
const id = Symbol(""), cd = /(^|;)\s*display\s*:/;
function ad(e, t, n) {
  const s = e.style, r = Ne(n);
  let o = !1;
  if (n && !r) {
    if (t)
      if (Ne(t))
        for (const i of t.split(";")) {
          const c = i.slice(0, i.indexOf(":")).trim();
          n[c] == null && Es(s, c, "");
        }
      else
        for (const i in t)
          n[i] == null && Es(s, i, "");
    for (const i in n)
      i === "display" && (o = !0), Es(s, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = s[id];
      i && (n += ";" + i), s.cssText = n, o = cd.test(n);
    }
  } else t && e.removeAttribute("style");
  Is in e && (e[Is] = o ? s.display : "", e[Kl] && (s.display = "none"));
}
const tc = /\s*!important$/;
function Es(e, t, n) {
  if (ne(n))
    n.forEach((s) => Es(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = ld(e, t);
    tc.test(n) ? e.setProperty(
      Xt(s),
      n.replace(tc, ""),
      "important"
    ) : e[s] = n;
  }
}
const nc = ["Webkit", "Moz", "ms"], gr = {};
function ld(e, t) {
  const n = gr[t];
  if (n)
    return n;
  let s = pt(t);
  if (s !== "filter" && s in e)
    return gr[t] = s;
  s = qs(s);
  for (let r = 0; r < nc.length; r++) {
    const o = nc[r] + s;
    if (o in e)
      return gr[t] = o;
  }
  return t;
}
const sc = "http://www.w3.org/1999/xlink";
function rc(e, t, n, s, r, o = cf(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(sc, t.slice(6, t.length)) : e.setAttributeNS(sc, t, n) : n == null || o && !za(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Pt(n) ? String(n) : n
  );
}
function oc(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? jl(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const c = o === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (c !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean" ? n = za(n) : n == null && c === "string" ? (n = "", i = !0) : c === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(r || t);
}
function xn(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function ud(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const ic = Symbol("_vei");
function fd(e, t, n, s, r = null) {
  const o = e[ic] || (e[ic] = {}), i = o[t];
  if (s && i)
    i.value = s;
  else {
    const [c, a] = hd(t);
    if (s) {
      const u = o[t] = gd(
        s,
        r
      );
      xn(e, c, u, a);
    } else i && (ud(e, c, i, a), o[t] = void 0);
  }
}
const cc = /(?:Once|Passive|Capture)$/;
function hd(e) {
  let t;
  if (cc.test(e)) {
    t = {};
    let s;
    for (; s = e.match(cc); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Xt(e.slice(2)), t];
}
let mr = 0;
const dd = /* @__PURE__ */ Promise.resolve(), pd = () => mr || (dd.then(() => mr = 0), mr = Date.now());
function gd(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    vt(
      md(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = pd(), n;
}
function md(e, t) {
  if (ne(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (r) => !r._stopped && s && s(r)
    );
  } else
    return t;
}
const ac = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, _d = (e, t, n, s, r, o) => {
  const i = r === "svg";
  t === "class" ? od(e, s, i) : t === "style" ? ad(e, n, s) : Os(t) ? Vo(t) || fd(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : bd(e, t, s, i)) ? (oc(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && rc(e, t, s, i, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Ne(s)) ? oc(e, pt(t), s, o, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), rc(e, t, s, i));
};
function bd(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ac(t) && ae(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return ac(t) && Ne(n) ? !1 : t in e;
}
const lc = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ne(t) ? (n) => vs(t, n) : t;
};
function vd(e) {
  e.target.composing = !0;
}
function uc(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const _r = Symbol("_assign"), yd = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e[_r] = lc(r);
    const o = s || r.props && r.props.type === "number";
    xn(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let c = e.value;
      n && (c = c.trim()), o && (c = Mo(c)), e[_r](c);
    }), n && xn(e, "change", () => {
      e.value = e.value.trim();
    }), t || (xn(e, "compositionstart", vd), xn(e, "compositionend", uc), xn(e, "change", uc));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: o } }, i) {
    if (e[_r] = lc(i), e.composing) return;
    const c = (o || e.type === "number") && !/^0\d/.test(e.value) ? Mo(e.value) : e.value, a = t ?? "";
    c !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === a) || (e.value = a));
  }
}, xd = ["ctrl", "shift", "alt", "meta"], kd = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => xd.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ed = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (r, ...o) => {
    for (let i = 0; i < t.length; i++) {
      const c = kd[t[i]];
      if (c && c(r, t)) return;
    }
    return e(r, ...o);
  });
}, wd = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Cd = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (r) => {
    if (!("key" in r))
      return;
    const o = Xt(r.key);
    if (t.some(
      (i) => i === o || wd[i] === o
    ))
      return e(r);
  });
}, Ad = /* @__PURE__ */ He({ patchProp: _d }, Xh);
let fc;
function Sd() {
  return fc || (fc = xh(Ad));
}
const Td = (...e) => {
  const t = Sd().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = Dd(s);
    if (!r) return;
    const o = t._component;
    !ae(o) && !o.render && !o.template && (o.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const i = n(r, !1, Rd(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
};
function Rd(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Dd(e) {
  return Ne(e) ? document.querySelector(e) : e;
}
const Pn = {
  webhookUrl: "http://localhost:5678",
  webhookConfig: {
    method: "POST",
    headers: {}
  },
  target: "#n8n-chat",
  mode: "window",
  loadPreviousSession: !0,
  chatInputKey: "chatInput",
  chatSessionKey: "sessionId",
  defaultLanguage: "en",
  initialMessages: ["Hi there! 👋", "My name is Nathan. How can I assist you today?"],
  i18n: {
    en: {
      title: "Hi there! 👋",
      footer: "",
      inputPlaceholder: "Type your question..",
      resetButtonTooltip: "Reset chat",
      closeButtonTooltip: "Close chat"
    }
  },
  theme: {},
  enableStreaming: !1
}, Md = "#n8n-chat", Id = "n8n-chat", hc = `${Id}/sessionId`, Gl = "Chat", Zl = "ChatOptions";
var Ve = [];
for (var br = 0; br < 256; ++br)
  Ve.push((br + 256).toString(16).slice(1));
function Nd(e, t = 0) {
  return (Ve[e[t + 0]] + Ve[e[t + 1]] + Ve[e[t + 2]] + Ve[e[t + 3]] + "-" + Ve[e[t + 4]] + Ve[e[t + 5]] + "-" + Ve[e[t + 6]] + Ve[e[t + 7]] + "-" + Ve[e[t + 8]] + Ve[e[t + 9]] + "-" + Ve[e[t + 10]] + Ve[e[t + 11]] + Ve[e[t + 12]] + Ve[e[t + 13]] + Ve[e[t + 14]] + Ve[e[t + 15]]).toLowerCase();
}
var gs, Od = new Uint8Array(16);
function Ld() {
  if (!gs && (gs = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !gs))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return gs(Od);
}
var Fd = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const dc = {
  randomUUID: Fd
};
function pn(e, t, n) {
  if (dc.randomUUID && !e)
    return dc.randomUUID();
  e = e || {};
  var s = e.random || (e.rng || Ld)();
  return s[6] = s[6] & 15 | 64, s[8] = s[8] & 63 | 128, Nd(s);
}
async function qd() {
  return "";
}
async function ii(...e) {
  var i, c;
  const t = await qd(), n = (i = e[1]) == null ? void 0 : i.body, s = {
    ...t ? { authorization: `Bearer ${t}` } : {},
    ...(c = e[1]) == null ? void 0 : c.headers
  };
  n instanceof FormData ? delete s["Content-Type"] : s["Content-Type"] = "application/json";
  const r = await fetch(e[0], {
    ...e[1],
    mode: "cors",
    cache: "no-cache",
    headers: s
  });
  let o;
  try {
    o = await r.clone().json();
  } catch {
    o = await r.text();
  }
  return o;
}
async function Wl(e, t = {}, n = {}) {
  let s = e;
  return Object.keys(t).length > 0 && (s = `${s}?${new URLSearchParams(
    t
  ).toString()}`), await ii(s, { ...n, method: "GET" });
}
async function Jl(e, t = {}, n = {}) {
  return await ii(e, {
    ...n,
    method: "POST",
    body: JSON.stringify(t)
  });
}
async function Pd(e, t = {}, n = [], s = {}) {
  const r = new FormData();
  for (const o in t) {
    const i = t[o];
    typeof i == "object" && i !== null ? r.append(o, JSON.stringify(i)) : r.append(o, i);
  }
  for (const o of n)
    r.append("files", o);
  return await ii(e, {
    ...s,
    method: "POST",
    body: r
  });
}
async function Bd(e, t) {
  var s, r;
  return await (((s = t.webhookConfig) == null ? void 0 : s.method) === "POST" ? Jl : Wl)(
    `${t.webhookUrl}`,
    {
      action: "loadPreviousSession",
      [t.chatSessionKey]: e,
      ...t.metadata ? { metadata: t.metadata } : {}
    },
    {
      headers: (r = t.webhookConfig) == null ? void 0 : r.headers
    }
  );
}
async function $d(e, t, n, s) {
  var o, i, c;
  return t.length > 0 ? await Pd(
    `${s.webhookUrl}`,
    {
      action: "sendMessage",
      [s.chatSessionKey]: n,
      [s.chatInputKey]: e,
      ...s.metadata ? { metadata: s.metadata } : {}
    },
    t,
    {
      headers: (o = s.webhookConfig) == null ? void 0 : o.headers
    }
  ) : await (((i = s.webhookConfig) == null ? void 0 : i.method) === "POST" ? Jl : Wl)(
    `${s.webhookUrl}`,
    {
      action: "sendMessage",
      [s.chatSessionKey]: n,
      [s.chatInputKey]: e,
      ...s.metadata ? { metadata: s.metadata } : {}
    },
    {
      headers: (c = s.webhookConfig) == null ? void 0 : c.headers
    }
  );
}
function zd() {
  let e = "";
  const t = new TextDecoder();
  return new TransformStream({
    transform(n, s) {
      e += t.decode(n, { stream: !0 });
      const r = e.split(`
`);
      e = r.pop() ?? "";
      for (const o of r)
        if (o.trim())
          try {
            const i = JSON.parse(o);
            s.enqueue(i);
          } catch {
            s.enqueue({
              type: "item",
              content: o
            });
          }
    },
    flush(n) {
      if (e.trim())
        try {
          const s = JSON.parse(e);
          n.enqueue(s);
        } catch {
          n.enqueue({
            type: "item",
            content: e
          });
        }
    }
  });
}
async function Ud(e, t, n, s, r) {
  var a, u;
  const o = await (t.length > 0 ? Hd(e, t, n, s) : jd(e, n, s));
  if (!o.ok) {
    const l = await o.text();
    throw console.error("HTTP error response:", o.status, l), new Error(`Error while sending message. Error: ${l}`);
  }
  if (!o.body)
    throw new Error("Response body is not readable");
  const i = o.body.pipeThrough(zd()).getReader();
  let c = !1;
  try {
    for (; ; ) {
      const { done: l, value: f } = await i.read();
      if (l) break;
      const d = ((a = f.metadata) == null ? void 0 : a.nodeId) || "unknown", h = (u = f.metadata) == null ? void 0 : u.runIndex;
      switch (f.type) {
        case "begin":
          r.onBeginMessage(d, h);
          break;
        case "item":
          c = !0, r.onChunk(f.content ?? "", d, h);
          break;
        case "end":
          r.onEndMessage(d, h);
          break;
        case "error":
          c = !0, r.onChunk(`Error: ${f.content ?? "Unknown error"}`, d, h), r.onEndMessage(d, h);
          break;
      }
    }
  } finally {
    i.releaseLock();
  }
  return { hasReceivedChunks: c };
}
async function Hd(e, t, n, s) {
  var o;
  const r = new FormData();
  r.append("action", "sendMessage"), r.append(s.chatSessionKey, n), r.append(s.chatInputKey, e), s.metadata && r.append("metadata", JSON.stringify(s.metadata));
  for (const i of t)
    r.append("files", i);
  return await fetch(s.webhookUrl, {
    method: "POST",
    headers: {
      Accept: "text/plain",
      ...(o = s.webhookConfig) == null ? void 0 : o.headers
    },
    body: r
  });
}
async function jd(e, t, n) {
  var r;
  const s = {
    action: "sendMessage",
    [n.chatSessionKey]: t,
    [n.chatInputKey]: e,
    ...n.metadata ? { metadata: n.metadata } : {}
  };
  return await fetch(n.webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "text/plain",
      ...(r = n.webhookConfig) == null ? void 0 : r.headers
    },
    body: JSON.stringify(s)
  });
}
function Vd() {
  const e = /* @__PURE__ */ new Map();
  function t(r, o) {
    const i = e.get(r);
    i && i.splice(i.indexOf(o) >>> 0, 1);
  }
  function n(r, o) {
    let i = e.get(r);
    return i ? i.push(o) : i = [o], e.set(r, i), () => t(r, o);
  }
  function s(r, o) {
    const i = e.get(r);
    i && i.slice().forEach(async (c) => {
      await c(o);
    });
  }
  return {
    on: n,
    off: t,
    emit: s
  };
}
function Kd(e) {
  if (!document.querySelector(e)) {
    const n = document.createElement("div");
    e.startsWith("#") && (n.id = e.replace("#", "")), e.startsWith(".") && n.classList.add(e.replace(".", "")), document.body.appendChild(n);
  }
}
function Gd(e, t, n, s) {
  const r = new URL(e).origin, o = r.startsWith("https") ? "wss" : "ws";
  return `${r.replace(/^https?/, o)}/chat?sessionId=${n}&executionId=${t}&isPublic=true`;
}
const nt = Vd();
class Zd {
  constructor() {
    us(this, "nodeRuns", /* @__PURE__ */ new Map());
    us(this, "runOrder", []);
    us(this, "activeRuns", /* @__PURE__ */ new Set());
  }
  getRunKey(t, n) {
    return n !== void 0 ? `${t}-${n}` : t;
  }
  initializeRun(t, n) {
    const s = this.getRunKey(t, n);
    if (!this.nodeRuns.has(s)) {
      const r = Dn();
      return this.nodeRuns.set(s, {
        content: "",
        isComplete: !1,
        message: r
      }), this.runOrder.push(s), r;
    }
    return this.nodeRuns.get(s).message;
  }
  registerRunStart(t, n) {
    const s = this.getRunKey(t, n);
    this.activeRuns.add(s);
  }
  addRunToActive(t, n) {
    const s = this.getRunKey(t, n);
    return this.activeRuns.add(s), this.initializeRun(t, n);
  }
  removeRunFromActive(t, n) {
    const s = this.getRunKey(t, n);
    this.activeRuns.delete(s);
    const r = this.nodeRuns.get(s);
    r && (r.isComplete = !0);
  }
  addChunkToRun(t, n, s) {
    const r = this.getRunKey(t, s), o = this.nodeRuns.get(r);
    if (o) {
      o.content += n;
      const i = {
        ...o.message,
        text: o.content
      };
      return o.message = i, i;
    }
    return null;
  }
  getRunMessage(t, n) {
    const s = this.getRunKey(t, n), r = this.nodeRuns.get(s);
    return (r == null ? void 0 : r.message) ?? null;
  }
  areAllRunsComplete() {
    return Array.from(this.nodeRuns.values()).every((t) => t.isComplete);
  }
  getRunCount() {
    return this.runOrder.length;
  }
  getActiveRunCount() {
    return this.activeRuns.size;
  }
  getAllMessages() {
    return this.runOrder.map((t) => {
      var n;
      return (n = this.nodeRuns.get(t)) == null ? void 0 : n.message;
    }).filter((t) => t !== void 0);
  }
  reset() {
    this.nodeRuns.clear(), this.runOrder = [], this.activeRuns.clear();
  }
}
function Dn(e) {
  return {
    id: e ?? pn(),
    type: "text",
    text: "",
    sender: "bot"
  };
}
function pc(e, t, n) {
  const s = e.findIndex((r) => r.id === t);
  if (s === -1)
    throw new Error(`Can't update message. No message with id ${t} found`);
  e[s] = n;
}
function Wd(e, t, n, s, r, o, i) {
  try {
    if (e === "")
      return;
    if (o.value = !1, t) {
      let c = n.getRunMessage(t, i);
      c || (c = n.addRunToActive(t, i), r.value.push(c));
      const a = n.addChunkToRun(t, e, i);
      a && pc(r.value, a.id, a);
    } else {
      s.value || (s.value = Dn(), r.value.push(s.value));
      const c = {
        ...s.value,
        text: s.value.text + e
      };
      pc(r.value, s.value.id, c), s.value = c;
    }
    Jt(() => {
      nt.emit("scrollToBottom");
    });
  } catch (c) {
    console.error("Error handling stream chunk:", c);
  }
}
function Jd(e, t, n) {
  try {
    t.registerRunStart(e, n);
  } catch (s) {
    console.error("Error handling node start:", s);
  }
}
function Yd(e, t, n) {
  try {
    t.removeRunFromActive(e, n);
  } catch (s) {
    console.error("Error handling node complete:", s);
  }
}
function Xd(e) {
  return {
    id: pn(),
    text: e,
    sender: "user"
  };
}
function Qd(e) {
  let t = e.output ?? e.text ?? e.message ?? "";
  if (t === "" && Object.keys(e).length > 0)
    try {
      t = JSON.stringify(e, null, 2);
    } catch {
    }
  return t;
}
function ep(e) {
  const { receivedMessage: t, messages: n } = e;
  t.value && n.value.some(
    (r) => r.sender === "bot" && "text" in r && r.text.trim().length > 0
  ) || (t.value = Dn(), n.value.push(t.value)), t.value.text = "[No response received. This could happen if streaming is enabled in the trigger but disabled in agent node(s)]";
}
function tp(e) {
  const { error: t, receivedMessage: n, messages: s } = e;
  n.value ?? (n.value = Dn()), n.value.text = "Error: Failed to receive response", s.value.includes(n.value) || s.value.push(n.value), console.error("Chat API error:", t);
}
async function np(e) {
  const {
    text: t,
    sessionId: n,
    options: s,
    messages: r,
    receivedMessage: o,
    streamingManager: i,
    waitingForResponse: c
  } = e, a = {
    onChunk: (l, f, d) => {
      Wd(
        l,
        f,
        i,
        o,
        r,
        c,
        d
      );
    },
    onBeginMessage: (l, f) => {
      Jd(l, i, f);
    },
    onEndMessage: (l, f) => {
      Yd(l, i, f);
    }
  }, { hasReceivedChunks: u } = await Ud(
    t,
    [],
    n,
    s,
    a
  );
  u || ep({ receivedMessage: o, messages: r });
}
async function sp(e) {
  const { text: t, sessionId: n, options: s } = e, r = await $d(t, [], n, s);
  if (r != null && r.executionStarted)
    return { response: r };
  const o = Dn();
  return o.text = Qd(r), { botMessage: o };
}
const rp = {
  install(e, t) {
    e.provide(Zl, t);
    const n = Be([]), s = Be(null), r = Be(!1), o = Se(
      () => (t.initialMessages ?? []).map((l) => ({
        id: pn(),
        text: l,
        sender: "bot"
      }))
    );
    async function i(l) {
      var v;
      const f = Xd(l);
      n.value.push(f), r.value = !0, Jt(() => {
        nt.emit("scrollToBottom");
      });
      const d = Be(null), h = new Zd();
      try {
        if (t != null && t.enableStreaming)
          await np({
            text: l,
            sessionId: s.value,
            options: t,
            messages: n,
            receivedMessage: d,
            streamingManager: h,
            waitingForResponse: r
          });
        else {
          const x = await sp({
            text: l,
            sessionId: s.value,
            options: t
          });
          if ((v = x.response) != null && v.executionStarted)
            return r.value = !1, x.response;
          x.botMessage && (d.value = x.botMessage, n.value.push(x.botMessage));
        }
      } catch (x) {
        tp({ error: x, receivedMessage: d, messages: n });
      } finally {
        r.value = !1;
      }
      return Jt(() => {
        nt.emit("scrollToBottom");
      }), null;
    }
    async function c() {
      if (!t.loadPreviousSession)
        return;
      const l = localStorage.getItem(hc) ?? pn(), f = await Bd(l, t);
      return n.value = ((f == null ? void 0 : f.data) || []).map((d, h) => ({
        id: `${h}`,
        text: d.kwargs.content,
        sender: d.id.includes("HumanMessage") ? "user" : "bot"
      })), n.value.length && (s.value = l), l;
    }
    async function a() {
      n.value = [], r.value = !1, s.value = pn(), localStorage.setItem(hc, s.value);
    }
    const u = {
      initialMessages: o,
      messages: n,
      currentSessionId: s,
      waitingForResponse: r,
      loadPreviousSession: c,
      startNewSession: a,
      sendMessage: i
    };
    e.provide(Gl, u), e.config.globalProperties.$chat = u;
  }
};
function ci(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function op(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function s() {
      return this instanceof s ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(s) {
    var r = Object.getOwnPropertyDescriptor(e, s);
    Object.defineProperty(n, s, r.get ? r : {
      enumerable: !0,
      get: function() {
        return e[s];
      }
    });
  }), n;
}
var vr, gc;
function ip() {
  if (gc) return vr;
  gc = 1;
  function e(_) {
    return _ instanceof Map ? _.clear = _.delete = _.set = function() {
      throw new Error("map is read-only");
    } : _ instanceof Set && (_.add = _.clear = _.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(_), Object.getOwnPropertyNames(_).forEach((M) => {
      const U = _[M], ce = typeof U;
      (ce === "object" || ce === "function") && !Object.isFrozen(U) && e(U);
    }), _;
  }
  class t {
    /**
     * @param {CompiledMode} mode
     */
    constructor(M) {
      M.data === void 0 && (M.data = {}), this.data = M.data, this.isMatchIgnored = !1;
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function n(_) {
    return _.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function s(_, ...M) {
    const U = /* @__PURE__ */ Object.create(null);
    for (const ce in _)
      U[ce] = _[ce];
    return M.forEach(function(ce) {
      for (const Oe in ce)
        U[Oe] = ce[Oe];
    }), /** @type {T} */
    U;
  }
  const r = "</span>", o = (_) => !!_.scope, i = (_, { prefix: M }) => {
    if (_.startsWith("language:"))
      return _.replace("language:", "language-");
    if (_.includes(".")) {
      const U = _.split(".");
      return [
        `${M}${U.shift()}`,
        ...U.map((ce, Oe) => `${ce}${"_".repeat(Oe + 1)}`)
      ].join(" ");
    }
    return `${M}${_}`;
  };
  class c {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(M, U) {
      this.buffer = "", this.classPrefix = U.classPrefix, M.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(M) {
      this.buffer += n(M);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(M) {
      if (!o(M)) return;
      const U = i(
        M.scope,
        { prefix: this.classPrefix }
      );
      this.span(U);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(M) {
      o(M) && (this.buffer += r);
    }
    /**
     * returns the accumulated buffer
    */
    value() {
      return this.buffer;
    }
    // helpers
    /**
     * Builds a span element
     *
     * @param {string} className */
    span(M) {
      this.buffer += `<span class="${M}">`;
    }
  }
  const a = (_ = {}) => {
    const M = { children: [] };
    return Object.assign(M, _), M;
  };
  class u {
    constructor() {
      this.rootNode = a(), this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    /** @param {Node} node */
    add(M) {
      this.top.children.push(M);
    }
    /** @param {string} scope */
    openNode(M) {
      const U = a({ scope: M });
      this.add(U), this.stack.push(U);
    }
    closeNode() {
      if (this.stack.length > 1)
        return this.stack.pop();
    }
    closeAllNodes() {
      for (; this.closeNode(); ) ;
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    /**
     * @typedef { import("./html_renderer").Renderer } Renderer
     * @param {Renderer} builder
     */
    walk(M) {
      return this.constructor._walk(M, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(M, U) {
      return typeof U == "string" ? M.addText(U) : U.children && (M.openNode(U), U.children.forEach((ce) => this._walk(M, ce)), M.closeNode(U)), M;
    }
    /**
     * @param {Node} node
     */
    static _collapse(M) {
      typeof M != "string" && M.children && (M.children.every((U) => typeof U == "string") ? M.children = [M.children.join("")] : M.children.forEach((U) => {
        u._collapse(U);
      }));
    }
  }
  class l extends u {
    /**
     * @param {*} options
     */
    constructor(M) {
      super(), this.options = M;
    }
    /**
     * @param {string} text
     */
    addText(M) {
      M !== "" && this.add(M);
    }
    /** @param {string} scope */
    startScope(M) {
      this.openNode(M);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(M, U) {
      const ce = M.root;
      U && (ce.scope = `language:${U}`), this.add(ce);
    }
    toHTML() {
      return new c(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), !0;
    }
  }
  function f(_) {
    return _ ? typeof _ == "string" ? _ : _.source : null;
  }
  function d(_) {
    return x("(?=", _, ")");
  }
  function h(_) {
    return x("(?:", _, ")*");
  }
  function v(_) {
    return x("(?:", _, ")?");
  }
  function x(..._) {
    return _.map((U) => f(U)).join("");
  }
  function C(_) {
    const M = _[_.length - 1];
    return typeof M == "object" && M.constructor === Object ? (_.splice(_.length - 1, 1), M) : {};
  }
  function m(..._) {
    return "(" + (C(_).capture ? "" : "?:") + _.map((ce) => f(ce)).join("|") + ")";
  }
  function k(_) {
    return new RegExp(_.toString() + "|").exec("").length - 1;
  }
  function b(_, M) {
    const U = _ && _.exec(M);
    return U && U.index === 0;
  }
  const p = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function E(_, { joinWith: M }) {
    let U = 0;
    return _.map((ce) => {
      U += 1;
      const Oe = U;
      let Le = f(ce), J = "";
      for (; Le.length > 0; ) {
        const K = p.exec(Le);
        if (!K) {
          J += Le;
          break;
        }
        J += Le.substring(0, K.index), Le = Le.substring(K.index + K[0].length), K[0][0] === "\\" && K[1] ? J += "\\" + String(Number(K[1]) + Oe) : (J += K[0], K[0] === "(" && U++);
      }
      return J;
    }).map((ce) => `(${ce})`).join(M);
  }
  const w = /\b\B/, $ = "[a-zA-Z]\\w*", R = "[a-zA-Z_]\\w*", D = "\\b\\d+(\\.\\d+)?", A = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", N = "\\b(0b[01]+)", I = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", ee = (_ = {}) => {
    const M = /^#![ ]*\//;
    return _.binary && (_.begin = x(
      M,
      /.*\b/,
      _.binary,
      /\b.*/
    )), s({
      scope: "meta",
      begin: M,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (U, ce) => {
        U.index !== 0 && ce.ignoreMatch();
      }
    }, _);
  }, T = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, ie = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [T]
  }, Q = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [T]
  }, le = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, G = function(_, M, U = {}) {
    const ce = s(
      {
        scope: "comment",
        begin: _,
        end: M,
        contains: []
      },
      U
    );
    ce.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0
    });
    const Oe = m(
      // list of common 1 and 2 letter words in English
      "I",
      "a",
      "is",
      "so",
      "us",
      "to",
      "at",
      "if",
      "in",
      "it",
      "on",
      // note: this is not an exhaustive list of contractions, just popular ones
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      // contractions - can't we'd they're let's, etc
      /[A-Za-z]+[-][a-z]+/,
      // `no-way`, etc.
      /[A-Za-z][a-z]{2,}/
      // allow capitalized words at beginning of sentences
    );
    return ce.contains.push(
      {
        // TODO: how to include ", (, ) without breaking grammars that use these for
        // comment delimiters?
        // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
        // ---
        // this tries to find sequences of 3 english words in a row (without any
        // "programming" type syntax) this gives us a strong signal that we've
        // TRULY found a comment - vs perhaps scanning with the wrong language.
        // It's possible to find something that LOOKS like the start of the
        // comment - but then if there is no readable text - good chance it is a
        // false match and not a comment.
        //
        // for a visual example please see:
        // https://github.com/highlightjs/highlight.js/issues/2827
        begin: x(
          /[ ]+/,
          // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
          "(",
          Oe,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), ce;
  }, fe = G("//", "$"), Z = G("/\\*", "\\*/"), we = G("#", "$"), Ce = {
    scope: "number",
    begin: D,
    relevance: 0
  }, rt = {
    scope: "number",
    begin: A,
    relevance: 0
  }, Gs = {
    scope: "number",
    begin: N,
    relevance: 0
  }, Zs = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      T,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [T]
      }
    ]
  }, nn = {
    scope: "title",
    begin: $,
    relevance: 0
  }, mn = {
    scope: "title",
    begin: R,
    relevance: 0
  }, In = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + R,
    relevance: 0
  };
  var yt = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: ie,
    BACKSLASH_ESCAPE: T,
    BINARY_NUMBER_MODE: Gs,
    BINARY_NUMBER_RE: N,
    COMMENT: G,
    C_BLOCK_COMMENT_MODE: Z,
    C_LINE_COMMENT_MODE: fe,
    C_NUMBER_MODE: rt,
    C_NUMBER_RE: A,
    END_SAME_AS_BEGIN: function(_) {
      return Object.assign(
        _,
        {
          /** @type {ModeCallback} */
          "on:begin": (M, U) => {
            U.data._beginMatch = M[1];
          },
          /** @type {ModeCallback} */
          "on:end": (M, U) => {
            U.data._beginMatch !== M[1] && U.ignoreMatch();
          }
        }
      );
    },
    HASH_COMMENT_MODE: we,
    IDENT_RE: $,
    MATCH_NOTHING_RE: w,
    METHOD_GUARD: In,
    NUMBER_MODE: Ce,
    NUMBER_RE: D,
    PHRASAL_WORDS_MODE: le,
    QUOTE_STRING_MODE: Q,
    REGEXP_MODE: Zs,
    RE_STARTERS_RE: I,
    SHEBANG: ee,
    TITLE_MODE: nn,
    UNDERSCORE_IDENT_RE: R,
    UNDERSCORE_TITLE_MODE: mn
  });
  function mi(_, M) {
    _.input[_.index - 1] === "." && M.ignoreMatch();
  }
  function g(_, M) {
    _.className !== void 0 && (_.scope = _.className, delete _.className);
  }
  function y(_, M) {
    M && _.beginKeywords && (_.begin = "\\b(" + _.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", _.__beforeBegin = mi, _.keywords = _.keywords || _.beginKeywords, delete _.beginKeywords, _.relevance === void 0 && (_.relevance = 0));
  }
  function S(_, M) {
    Array.isArray(_.illegal) && (_.illegal = m(..._.illegal));
  }
  function F(_, M) {
    if (_.match) {
      if (_.begin || _.end) throw new Error("begin & end are not supported with match");
      _.begin = _.match, delete _.match;
    }
  }
  function O(_, M) {
    _.relevance === void 0 && (_.relevance = 1);
  }
  const L = (_, M) => {
    if (!_.beforeMatch) return;
    if (_.starts) throw new Error("beforeMatch cannot be used with starts");
    const U = Object.assign({}, _);
    Object.keys(_).forEach((ce) => {
      delete _[ce];
    }), _.keywords = U.keywords, _.begin = x(U.beforeMatch, d(U.begin)), _.starts = {
      relevance: 0,
      contains: [
        Object.assign(U, { endsParent: !0 })
      ]
    }, _.relevance = 0, delete U.beforeMatch;
  }, H = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    // common variable name
    "list",
    // common variable name
    "value"
    // common variable name
  ], z = "keyword";
  function B(_, M, U = z) {
    const ce = /* @__PURE__ */ Object.create(null);
    return typeof _ == "string" ? Oe(U, _.split(" ")) : Array.isArray(_) ? Oe(U, _) : Object.keys(_).forEach(function(Le) {
      Object.assign(
        ce,
        B(_[Le], M, Le)
      );
    }), ce;
    function Oe(Le, J) {
      M && (J = J.map((K) => K.toLowerCase())), J.forEach(function(K) {
        const oe = K.split("|");
        ce[oe[0]] = [Le, q(oe[0], oe[1])];
      });
    }
  }
  function q(_, M) {
    return M ? Number(M) : te(_) ? 0 : 1;
  }
  function te(_) {
    return H.includes(_.toLowerCase());
  }
  const V = {}, W = (_) => {
    console.error(_);
  }, se = (_, ...M) => {
    console.log(`WARN: ${_}`, ...M);
  }, he = (_, M) => {
    V[`${_}/${M}`] || (console.log(`Deprecated as of ${_}. ${M}`), V[`${_}/${M}`] = !0);
  }, ve = new Error();
  function _e(_, M, { key: U }) {
    let ce = 0;
    const Oe = _[U], Le = {}, J = {};
    for (let K = 1; K <= M.length; K++)
      J[K + ce] = Oe[K], Le[K + ce] = !0, ce += k(M[K - 1]);
    _[U] = J, _[U]._emit = Le, _[U]._multi = !0;
  }
  function Xe(_) {
    if (Array.isArray(_.begin)) {
      if (_.skip || _.excludeBegin || _.returnBegin)
        throw W("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), ve;
      if (typeof _.beginScope != "object" || _.beginScope === null)
        throw W("beginScope must be object"), ve;
      _e(_, _.begin, { key: "beginScope" }), _.begin = E(_.begin, { joinWith: "" });
    }
  }
  function Ze(_) {
    if (Array.isArray(_.end)) {
      if (_.skip || _.excludeEnd || _.returnEnd)
        throw W("skip, excludeEnd, returnEnd not compatible with endScope: {}"), ve;
      if (typeof _.endScope != "object" || _.endScope === null)
        throw W("endScope must be object"), ve;
      _e(_, _.end, { key: "endScope" }), _.end = E(_.end, { joinWith: "" });
    }
  }
  function lt(_) {
    _.scope && typeof _.scope == "object" && _.scope !== null && (_.beginScope = _.scope, delete _.scope);
  }
  function ut(_) {
    lt(_), typeof _.beginScope == "string" && (_.beginScope = { _wrap: _.beginScope }), typeof _.endScope == "string" && (_.endScope = { _wrap: _.endScope }), Xe(_), Ze(_);
  }
  function sn(_) {
    function M(J, K) {
      return new RegExp(
        f(J),
        "m" + (_.case_insensitive ? "i" : "") + (_.unicodeRegex ? "u" : "") + (K ? "g" : "")
      );
    }
    class U {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(K, oe) {
        oe.position = this.position++, this.matchIndexes[this.matchAt] = oe, this.regexes.push([oe, K]), this.matchAt += k(K) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const K = this.regexes.map((oe) => oe[1]);
        this.matcherRe = M(E(K, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(K) {
        this.matcherRe.lastIndex = this.lastIndex;
        const oe = this.matcherRe.exec(K);
        if (!oe)
          return null;
        const Pe = oe.findIndex((On, Ys) => Ys > 0 && On !== void 0), Fe = this.matchIndexes[Pe];
        return oe.splice(0, Pe), Object.assign(oe, Fe);
      }
    }
    class ce {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(K) {
        if (this.multiRegexes[K]) return this.multiRegexes[K];
        const oe = new U();
        return this.rules.slice(K).forEach(([Pe, Fe]) => oe.addRule(Pe, Fe)), oe.compile(), this.multiRegexes[K] = oe, oe;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(K, oe) {
        this.rules.push([K, oe]), oe.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(K) {
        const oe = this.getMatcher(this.regexIndex);
        oe.lastIndex = this.lastIndex;
        let Pe = oe.exec(K);
        if (this.resumingScanAtSamePosition() && !(Pe && Pe.index === this.lastIndex)) {
          const Fe = this.getMatcher(0);
          Fe.lastIndex = this.lastIndex + 1, Pe = Fe.exec(K);
        }
        return Pe && (this.regexIndex += Pe.position + 1, this.regexIndex === this.count && this.considerAll()), Pe;
      }
    }
    function Oe(J) {
      const K = new ce();
      return J.contains.forEach((oe) => K.addRule(oe.begin, { rule: oe, type: "begin" })), J.terminatorEnd && K.addRule(J.terminatorEnd, { type: "end" }), J.illegal && K.addRule(J.illegal, { type: "illegal" }), K;
    }
    function Le(J, K) {
      const oe = (
        /** @type CompiledMode */
        J
      );
      if (J.isCompiled) return oe;
      [
        g,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        F,
        ut,
        L
      ].forEach((Fe) => Fe(J, K)), _.compilerExtensions.forEach((Fe) => Fe(J, K)), J.__beforeBegin = null, [
        y,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        S,
        // default to 1 relevance if not specified
        O
      ].forEach((Fe) => Fe(J, K)), J.isCompiled = !0;
      let Pe = null;
      return typeof J.keywords == "object" && J.keywords.$pattern && (J.keywords = Object.assign({}, J.keywords), Pe = J.keywords.$pattern, delete J.keywords.$pattern), Pe = Pe || /\w+/, J.keywords && (J.keywords = B(J.keywords, _.case_insensitive)), oe.keywordPatternRe = M(Pe, !0), K && (J.begin || (J.begin = /\B|\b/), oe.beginRe = M(oe.begin), !J.end && !J.endsWithParent && (J.end = /\B|\b/), J.end && (oe.endRe = M(oe.end)), oe.terminatorEnd = f(oe.end) || "", J.endsWithParent && K.terminatorEnd && (oe.terminatorEnd += (J.end ? "|" : "") + K.terminatorEnd)), J.illegal && (oe.illegalRe = M(
        /** @type {RegExp | string} */
        J.illegal
      )), J.contains || (J.contains = []), J.contains = [].concat(...J.contains.map(function(Fe) {
        return Qe(Fe === "self" ? J : Fe);
      })), J.contains.forEach(function(Fe) {
        Le(
          /** @type Mode */
          Fe,
          oe
        );
      }), J.starts && Le(J.starts, K), oe.matcher = Oe(oe), oe;
    }
    if (_.compilerExtensions || (_.compilerExtensions = []), _.contains && _.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return _.classNameAliases = s(_.classNameAliases || {}), Le(
      /** @type Mode */
      _
    );
  }
  function Nn(_) {
    return _ ? _.endsWithParent || Nn(_.starts) : !1;
  }
  function Qe(_) {
    return _.variants && !_.cachedVariants && (_.cachedVariants = _.variants.map(function(M) {
      return s(_, { variants: null }, M);
    })), _.cachedVariants ? _.cachedVariants : Nn(_) ? s(_, { starts: _.starts ? s(_.starts) : null }) : Object.isFrozen(_) ? s(_) : _;
  }
  var ft = "11.11.1";
  class rs extends Error {
    constructor(M, U) {
      super(M), this.name = "HTMLInjectionError", this.html = U;
    }
  }
  const Js = n, _i = s, bi = Symbol("nomatch"), Tu = 7, vi = function(_) {
    const M = /* @__PURE__ */ Object.create(null), U = /* @__PURE__ */ Object.create(null), ce = [];
    let Oe = !0;
    const Le = "Could not find the language '{}', did you forget to load/include a language module?", J = { disableAutodetect: !0, name: "Plain text", contains: [] };
    let K = {
      ignoreUnescapedHTML: !1,
      throwUnescapedHTML: !1,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      // beta configuration options, subject to change, welcome to discuss
      // https://github.com/highlightjs/highlight.js/issues/1086
      __emitter: l
    };
    function oe(P) {
      return K.noHighlightRe.test(P);
    }
    function Pe(P) {
      let X = P.className + " ";
      X += P.parentNode ? P.parentNode.className : "";
      const ge = K.languageDetectRe.exec(X);
      if (ge) {
        const Te = zt(ge[1]);
        return Te || (se(Le.replace("{}", ge[1])), se("Falling back to no-highlight mode for this block.", P)), Te ? ge[1] : "no-highlight";
      }
      return X.split(/\s+/).find((Te) => oe(Te) || zt(Te));
    }
    function Fe(P, X, ge) {
      let Te = "", qe = "";
      typeof X == "object" ? (Te = P, ge = X.ignoreIllegals, qe = X.language) : (he("10.7.0", "highlight(lang, code, ...args) has been deprecated."), he("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), qe = P, Te = X), ge === void 0 && (ge = !0);
      const gt = {
        code: Te,
        language: qe
      };
      is("before:highlight", gt);
      const Ut = gt.result ? gt.result : On(gt.language, gt.code, ge);
      return Ut.code = gt.code, is("after:highlight", Ut), Ut;
    }
    function On(P, X, ge, Te) {
      const qe = /* @__PURE__ */ Object.create(null);
      function gt(j, Y) {
        return j.keywords[Y];
      }
      function Ut() {
        if (!ue.keywords) {
          je.addText(Re);
          return;
        }
        let j = 0;
        ue.keywordPatternRe.lastIndex = 0;
        let Y = ue.keywordPatternRe.exec(Re), de = "";
        for (; Y; ) {
          de += Re.substring(j, Y.index);
          const Ee = kt.case_insensitive ? Y[0].toLowerCase() : Y[0], We = gt(ue, Ee);
          if (We) {
            const [Dt, Vu] = We;
            if (je.addText(de), de = "", qe[Ee] = (qe[Ee] || 0) + 1, qe[Ee] <= Tu && (ls += Vu), Dt.startsWith("_"))
              de += Y[0];
            else {
              const Ku = kt.classNameAliases[Dt] || Dt;
              xt(Y[0], Ku);
            }
          } else
            de += Y[0];
          j = ue.keywordPatternRe.lastIndex, Y = ue.keywordPatternRe.exec(Re);
        }
        de += Re.substring(j), je.addText(de);
      }
      function cs() {
        if (Re === "") return;
        let j = null;
        if (typeof ue.subLanguage == "string") {
          if (!M[ue.subLanguage]) {
            je.addText(Re);
            return;
          }
          j = On(ue.subLanguage, Re, !0, Si[ue.subLanguage]), Si[ue.subLanguage] = /** @type {CompiledMode} */
          j._top;
        } else
          j = Xs(Re, ue.subLanguage.length ? ue.subLanguage : null);
        ue.relevance > 0 && (ls += j.relevance), je.__addSublanguage(j._emitter, j.language);
      }
      function ot() {
        ue.subLanguage != null ? cs() : Ut(), Re = "";
      }
      function xt(j, Y) {
        j !== "" && (je.startScope(Y), je.addText(j), je.endScope());
      }
      function Ei(j, Y) {
        let de = 1;
        const Ee = Y.length - 1;
        for (; de <= Ee; ) {
          if (!j._emit[de]) {
            de++;
            continue;
          }
          const We = kt.classNameAliases[j[de]] || j[de], Dt = Y[de];
          We ? xt(Dt, We) : (Re = Dt, Ut(), Re = ""), de++;
        }
      }
      function wi(j, Y) {
        return j.scope && typeof j.scope == "string" && je.openNode(kt.classNameAliases[j.scope] || j.scope), j.beginScope && (j.beginScope._wrap ? (xt(Re, kt.classNameAliases[j.beginScope._wrap] || j.beginScope._wrap), Re = "") : j.beginScope._multi && (Ei(j.beginScope, Y), Re = "")), ue = Object.create(j, { parent: { value: ue } }), ue;
      }
      function Ci(j, Y, de) {
        let Ee = b(j.endRe, de);
        if (Ee) {
          if (j["on:end"]) {
            const We = new t(j);
            j["on:end"](Y, We), We.isMatchIgnored && (Ee = !1);
          }
          if (Ee) {
            for (; j.endsParent && j.parent; )
              j = j.parent;
            return j;
          }
        }
        if (j.endsWithParent)
          return Ci(j.parent, Y, de);
      }
      function $u(j) {
        return ue.matcher.regexIndex === 0 ? (Re += j[0], 1) : (nr = !0, 0);
      }
      function zu(j) {
        const Y = j[0], de = j.rule, Ee = new t(de), We = [de.__beforeBegin, de["on:begin"]];
        for (const Dt of We)
          if (Dt && (Dt(j, Ee), Ee.isMatchIgnored))
            return $u(Y);
        return de.skip ? Re += Y : (de.excludeBegin && (Re += Y), ot(), !de.returnBegin && !de.excludeBegin && (Re = Y)), wi(de, j), de.returnBegin ? 0 : Y.length;
      }
      function Uu(j) {
        const Y = j[0], de = X.substring(j.index), Ee = Ci(ue, j, de);
        if (!Ee)
          return bi;
        const We = ue;
        ue.endScope && ue.endScope._wrap ? (ot(), xt(Y, ue.endScope._wrap)) : ue.endScope && ue.endScope._multi ? (ot(), Ei(ue.endScope, j)) : We.skip ? Re += Y : (We.returnEnd || We.excludeEnd || (Re += Y), ot(), We.excludeEnd && (Re = Y));
        do
          ue.scope && je.closeNode(), !ue.skip && !ue.subLanguage && (ls += ue.relevance), ue = ue.parent;
        while (ue !== Ee.parent);
        return Ee.starts && wi(Ee.starts, j), We.returnEnd ? 0 : Y.length;
      }
      function Hu() {
        const j = [];
        for (let Y = ue; Y !== kt; Y = Y.parent)
          Y.scope && j.unshift(Y.scope);
        j.forEach((Y) => je.openNode(Y));
      }
      let as = {};
      function Ai(j, Y) {
        const de = Y && Y[0];
        if (Re += j, de == null)
          return ot(), 0;
        if (as.type === "begin" && Y.type === "end" && as.index === Y.index && de === "") {
          if (Re += X.slice(Y.index, Y.index + 1), !Oe) {
            const Ee = new Error(`0 width match regex (${P})`);
            throw Ee.languageName = P, Ee.badRule = as.rule, Ee;
          }
          return 1;
        }
        if (as = Y, Y.type === "begin")
          return zu(Y);
        if (Y.type === "illegal" && !ge) {
          const Ee = new Error('Illegal lexeme "' + de + '" for mode "' + (ue.scope || "<unnamed>") + '"');
          throw Ee.mode = ue, Ee;
        } else if (Y.type === "end") {
          const Ee = Uu(Y);
          if (Ee !== bi)
            return Ee;
        }
        if (Y.type === "illegal" && de === "")
          return Re += `
`, 1;
        if (tr > 1e5 && tr > Y.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return Re += de, de.length;
      }
      const kt = zt(P);
      if (!kt)
        throw W(Le.replace("{}", P)), new Error('Unknown language: "' + P + '"');
      const ju = sn(kt);
      let er = "", ue = Te || ju;
      const Si = {}, je = new K.__emitter(K);
      Hu();
      let Re = "", ls = 0, rn = 0, tr = 0, nr = !1;
      try {
        if (kt.__emitTokens)
          kt.__emitTokens(X, je);
        else {
          for (ue.matcher.considerAll(); ; ) {
            tr++, nr ? nr = !1 : ue.matcher.considerAll(), ue.matcher.lastIndex = rn;
            const j = ue.matcher.exec(X);
            if (!j) break;
            const Y = X.substring(rn, j.index), de = Ai(Y, j);
            rn = j.index + de;
          }
          Ai(X.substring(rn));
        }
        return je.finalize(), er = je.toHTML(), {
          language: P,
          value: er,
          relevance: ls,
          illegal: !1,
          _emitter: je,
          _top: ue
        };
      } catch (j) {
        if (j.message && j.message.includes("Illegal"))
          return {
            language: P,
            value: Js(X),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: j.message,
              index: rn,
              context: X.slice(rn - 100, rn + 100),
              mode: j.mode,
              resultSoFar: er
            },
            _emitter: je
          };
        if (Oe)
          return {
            language: P,
            value: Js(X),
            illegal: !1,
            relevance: 0,
            errorRaised: j,
            _emitter: je,
            _top: ue
          };
        throw j;
      }
    }
    function Ys(P) {
      const X = {
        value: Js(P),
        illegal: !1,
        relevance: 0,
        _top: J,
        _emitter: new K.__emitter(K)
      };
      return X._emitter.addText(P), X;
    }
    function Xs(P, X) {
      X = X || K.languages || Object.keys(M);
      const ge = Ys(P), Te = X.filter(zt).filter(ki).map(
        (ot) => On(ot, P, !1)
      );
      Te.unshift(ge);
      const qe = Te.sort((ot, xt) => {
        if (ot.relevance !== xt.relevance) return xt.relevance - ot.relevance;
        if (ot.language && xt.language) {
          if (zt(ot.language).supersetOf === xt.language)
            return 1;
          if (zt(xt.language).supersetOf === ot.language)
            return -1;
        }
        return 0;
      }), [gt, Ut] = qe, cs = gt;
      return cs.secondBest = Ut, cs;
    }
    function Ru(P, X, ge) {
      const Te = X && U[X] || ge;
      P.classList.add("hljs"), P.classList.add(`language-${Te}`);
    }
    function Qs(P) {
      let X = null;
      const ge = Pe(P);
      if (oe(ge)) return;
      if (is(
        "before:highlightElement",
        { el: P, language: ge }
      ), P.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", P);
        return;
      }
      if (P.children.length > 0 && (K.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(P)), K.throwUnescapedHTML))
        throw new rs(
          "One of your code blocks includes unescaped HTML.",
          P.innerHTML
        );
      X = P;
      const Te = X.textContent, qe = ge ? Fe(Te, { language: ge, ignoreIllegals: !0 }) : Xs(Te);
      P.innerHTML = qe.value, P.dataset.highlighted = "yes", Ru(P, ge, qe.language), P.result = {
        language: qe.language,
        // TODO: remove with version 11.0
        re: qe.relevance,
        relevance: qe.relevance
      }, qe.secondBest && (P.secondBest = {
        language: qe.secondBest.language,
        relevance: qe.secondBest.relevance
      }), is("after:highlightElement", { el: P, result: qe, text: Te });
    }
    function Du(P) {
      K = _i(K, P);
    }
    const Mu = () => {
      os(), he("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function Iu() {
      os(), he("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let yi = !1;
    function os() {
      function P() {
        os();
      }
      if (document.readyState === "loading") {
        yi || window.addEventListener("DOMContentLoaded", P, !1), yi = !0;
        return;
      }
      document.querySelectorAll(K.cssSelector).forEach(Qs);
    }
    function Nu(P, X) {
      let ge = null;
      try {
        ge = X(_);
      } catch (Te) {
        if (W("Language definition for '{}' could not be registered.".replace("{}", P)), Oe)
          W(Te);
        else
          throw Te;
        ge = J;
      }
      ge.name || (ge.name = P), M[P] = ge, ge.rawDefinition = X.bind(null, _), ge.aliases && xi(ge.aliases, { languageName: P });
    }
    function Ou(P) {
      delete M[P];
      for (const X of Object.keys(U))
        U[X] === P && delete U[X];
    }
    function Lu() {
      return Object.keys(M);
    }
    function zt(P) {
      return P = (P || "").toLowerCase(), M[P] || M[U[P]];
    }
    function xi(P, { languageName: X }) {
      typeof P == "string" && (P = [P]), P.forEach((ge) => {
        U[ge.toLowerCase()] = X;
      });
    }
    function ki(P) {
      const X = zt(P);
      return X && !X.disableAutodetect;
    }
    function Fu(P) {
      P["before:highlightBlock"] && !P["before:highlightElement"] && (P["before:highlightElement"] = (X) => {
        P["before:highlightBlock"](
          Object.assign({ block: X.el }, X)
        );
      }), P["after:highlightBlock"] && !P["after:highlightElement"] && (P["after:highlightElement"] = (X) => {
        P["after:highlightBlock"](
          Object.assign({ block: X.el }, X)
        );
      });
    }
    function qu(P) {
      Fu(P), ce.push(P);
    }
    function Pu(P) {
      const X = ce.indexOf(P);
      X !== -1 && ce.splice(X, 1);
    }
    function is(P, X) {
      const ge = P;
      ce.forEach(function(Te) {
        Te[ge] && Te[ge](X);
      });
    }
    function Bu(P) {
      return he("10.7.0", "highlightBlock will be removed entirely in v12.0"), he("10.7.0", "Please use highlightElement now."), Qs(P);
    }
    Object.assign(_, {
      highlight: Fe,
      highlightAuto: Xs,
      highlightAll: os,
      highlightElement: Qs,
      // TODO: Remove with v12 API
      highlightBlock: Bu,
      configure: Du,
      initHighlighting: Mu,
      initHighlightingOnLoad: Iu,
      registerLanguage: Nu,
      unregisterLanguage: Ou,
      listLanguages: Lu,
      getLanguage: zt,
      registerAliases: xi,
      autoDetection: ki,
      inherit: _i,
      addPlugin: qu,
      removePlugin: Pu
    }), _.debugMode = function() {
      Oe = !1;
    }, _.safeMode = function() {
      Oe = !0;
    }, _.versionString = ft, _.regex = {
      concat: x,
      lookahead: d,
      either: m,
      optional: v,
      anyNumberOfTimes: h
    };
    for (const P in yt)
      typeof yt[P] == "object" && e(yt[P]);
    return Object.assign(_, yt), _;
  }, _n = vi({});
  return _n.newInstance = () => vi({}), vr = _n, _n.HighlightJS = _n, _n.default = _n, vr;
}
var cp = /* @__PURE__ */ ip();
const Ot = /* @__PURE__ */ ci(cp), mc = "[A-Za-z$_][0-9A-Za-z$_]*", ap = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends",
  // It's reached stage 3, which is "recommended for implementation":
  "using"
], lp = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], Yl = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], Xl = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], Ql = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], up = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
], fp = [].concat(
  Ql,
  Yl,
  Xl
);
function eu(e) {
  const t = e.regex, n = (G, { after: fe }) => {
    const Z = "</" + G[0].slice(1);
    return G.input.indexOf(Z, fe) !== -1;
  }, s = mc, r = {
    begin: "<>",
    end: "</>"
  }, o = /<[A-Za-z0-9\\._:-]+\s*\/>/, i = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (G, fe) => {
      const Z = G[0].length + G.index, we = G.input[Z];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        we === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        we === ","
      ) {
        fe.ignoreMatch();
        return;
      }
      we === ">" && (n(G, { after: Z }) || fe.ignoreMatch());
      let Ce;
      const rt = G.input.substring(Z);
      if (Ce = rt.match(/^\s*=/)) {
        fe.ignoreMatch();
        return;
      }
      if ((Ce = rt.match(/^\s+extends\s+/)) && Ce.index === 0) {
        fe.ignoreMatch();
        return;
      }
    }
  }, c = {
    $pattern: mc,
    keyword: ap,
    literal: lp,
    built_in: fp,
    "variable.language": up
  }, a = "[0-9](_?[0-9])*", u = `\\.(${a})`, l = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", f = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${l})((${u})|\\.)?|(${u}))[eE][+-]?(${a})\\b` },
      { begin: `\\b(${l})\\b((${u})\\b|\\.)?|(${u})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, d = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: c,
    contains: []
    // defined later
  }, h = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        d
      ],
      subLanguage: "xml"
    }
  }, v = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        d
      ],
      subLanguage: "css"
    }
  }, x = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        d
      ],
      subLanguage: "graphql"
    }
  }, C = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      d
    ]
  }, k = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: s + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, b = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    h,
    v,
    x,
    C,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    f
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  d.contains = b.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: c,
    contains: [
      "self"
    ].concat(b)
  });
  const p = [].concat(k, d.contains), E = p.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: c,
      contains: ["self"].concat(p)
    }
  ]), w = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: c,
    contains: E
  }, $ = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          s,
          /\s+/,
          /extends/,
          /\s+/,
          t.concat(s, "(", t.concat(/\./, s), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          s
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, R = {
    relevance: 0,
    match: t.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...Yl,
        ...Xl
      ]
    }
  }, D = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, A = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          s,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [w],
    illegal: /%/
  }, N = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function I(G) {
    return t.concat("(?!", G.join("|"), ")");
  }
  const ee = {
    match: t.concat(
      /\b/,
      I([
        ...Ql,
        "super",
        "import"
      ].map((G) => `${G}\\s*\\(`)),
      s,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, T = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(s, /(?![0-9A-Za-z$_(])/)
    )),
    end: s,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, ie = {
    match: [
      /get|set/,
      /\s+/,
      s,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      w
    ]
  }, Q = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", le = {
    match: [
      /const|var|let/,
      /\s+/,
      s,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(Q)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      w
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: c,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: E, CLASS_REFERENCE: R },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      D,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      h,
      v,
      x,
      C,
      k,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      f,
      R,
      {
        scope: "attr",
        match: s + t.lookahead(":"),
        relevance: 0
      },
      le,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          k,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: Q,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: c,
                    contains: E
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: r.begin, end: r.end },
              { match: o },
              {
                begin: i.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": i.isTrulyOpeningTag,
                end: i.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: i.begin,
                end: i.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      A,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          w,
          e.inherit(e.TITLE_MODE, { begin: s, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      T,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + s,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [w]
      },
      ee,
      N,
      $,
      ie,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function tu(e) {
  const t = e.regex, n = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), s = /[\p{L}0-9._:-]+/u, r = {
    className: "symbol",
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  }, o = {
    begin: /\s/,
    contains: [
      {
        className: "keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  }, i = e.inherit(o, {
    begin: /\(/,
    end: /\)/
  }), c = e.inherit(e.APOS_STRING_MODE, { className: "string" }), a = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }), u = {
    endsWithParent: !0,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: "attr",
        begin: s,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: "string",
            endsParent: !0,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [r]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [r]
              },
              { begin: /[^\s"'=<>`]+/ }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: "HTML, XML",
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg"
    ],
    case_insensitive: !0,
    unicodeRegex: !0,
    contains: [
      {
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          o,
          a,
          c,
          i,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  o,
                  i,
                  a,
                  c
                ]
              }
            ]
          }
        ]
      },
      e.COMMENT(
        /<!--/,
        /-->/,
        { relevance: 10 }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      r,
      // xml processing instructions
      {
        className: "meta",
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [
              a
            ]
          },
          {
            begin: /<\?[a-z][a-z0-9]+/
          }
        ]
      },
      {
        className: "tag",
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending bracket.
        */
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: "style" },
        contains: [u],
        starts: {
          end: /<\/style>/,
          returnEnd: !0,
          subLanguage: [
            "css",
            "xml"
          ]
        }
      },
      {
        className: "tag",
        // See the comment in the <style tag about the lookahead pattern
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: "script" },
        contains: [u],
        starts: {
          end: /<\/script>/,
          returnEnd: !0,
          subLanguage: [
            "javascript",
            "handlebars",
            "xml"
          ]
        }
      },
      // we need this for now for jSX
      {
        className: "tag",
        begin: /<>|<\/>/
      },
      // open tag
      {
        className: "tag",
        begin: t.concat(
          /</,
          t.lookahead(t.concat(
            n,
            // <tag/>
            // <tag>
            // <tag ...
            t.either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: "name",
            begin: n,
            relevance: 0,
            starts: u
          }
        ]
      },
      // close tag
      {
        className: "tag",
        begin: t.concat(
          /<\//,
          t.lookahead(t.concat(
            n,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: n,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: !0
          }
        ]
      }
    ]
  };
}
const hp = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function dp(e, t) {
  return re(), xe("svg", hp, t[0] || (t[0] = [
    pe("path", {
      fill: "currentColor",
      d: "M22 14h-1c0-3.87-3.13-7-7-7h-1V5.73A2 2 0 1 0 10 4c0 .74.4 1.39 1 1.73V7h-1c-3.87 0-7 3.13-7 7H2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v1a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1M8.68 17.04L7.5 15.86l-1.18 1.18l-1.18-1.18L7.5 13.5l2.36 2.36zm9 0l-1.18-1.18l-1.18 1.18l-1.18-1.18l2.36-2.36l2.36 2.36z"
    }, null, -1)
  ]));
}
const nu = { name: "mdi-robot-excited", render: dp }, pp = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function gp(e, t) {
  return re(), xe("svg", pp, t[0] || (t[0] = [
    pe("path", {
      fill: "currentColor",
      d: "M17.65 6.35A7.958 7.958 0 0 0 12 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18a6 6 0 0 1-6-6a6 6 0 0 1 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
    }, null, -1)
  ]));
}
const mp = { name: "mdi-refresh", render: gp }, _p = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function bp(e, t) {
  return re(), xe("svg", _p, t[0] || (t[0] = [
    pe("path", {
      fill: "currentColor",
      d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
    }, null, -1)
  ]));
}
const su = { name: "mdi-close", render: bp }, vp = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function yp(e, t) {
  return re(), xe("svg", vp, t[0] || (t[0] = [
    pe("path", {
      fill: "currentColor",
      d: "m2 21l21-9L2 3v7l15 2l-15 2z"
    }, null, -1)
  ]));
}
const xp = { name: "mdi-send", render: yp };
function ai() {
  return Tn(Gl);
}
function Mn() {
  return {
    options: Tn(Zl)
  };
}
function ru() {
  const { options: e } = Mn(), t = (e == null ? void 0 : e.defaultLanguage) ?? "en";
  function n(r) {
    var i, c;
    const o = (c = (i = e == null ? void 0 : e.i18n) == null ? void 0 : i[t]) == null ? void 0 : c[r];
    return Ue(o) ? o.value : o ?? r;
  }
  function s(r) {
    var o, i;
    return !!((i = (o = e == null ? void 0 : e.i18n) == null ? void 0 : o[t]) != null && i[r]);
  }
  return { t: n, te: s };
}
const kp = {
  key: 0,
  class: "w-8 ml-1.5"
}, Ep = ["disabled", "placeholder"], wp = { class: "flex flex-row gap-1" }, Cp = ["disabled"], Ap = /* @__PURE__ */ Bt({
  __name: "Input",
  props: {
    placeholder: { default: "inputPlaceholder" }
  },
  emits: ["arrowKeyDown"],
  setup(e, { emit: t }) {
    const n = e, { t: s } = ru(), r = t, { options: o } = Mn(), i = ai(), c = Se(() => o == null ? void 0 : o.primaryColor), a = Se(() => {
      const A = {};
      return c.value && (A.color = c.value), A;
    }), { waitingForResponse: u } = i, l = Be(null), f = Be(""), d = Be(!1), h = Be(null), v = Be(!1), x = Se(() => {
      var A;
      return v.value ? !1 : f.value === "" || me(u) || ((A = o.disabled) == null ? void 0 : A.value) === !0;
    }), C = Se(() => {
      var A;
      return ((A = o.disabled) == null ? void 0 : A.value) === !0;
    });
    tn(() => {
      nt.on("focusInput", k), nt.on("blurInput", m), nt.on("setInputValue", b), l.value && (h.value = new ResizeObserver((A) => {
        for (const N of A)
          N.target === l.value && D();
      }), h.value.observe(l.value));
    }), Hs(() => {
      nt.off("focusInput", k), nt.off("blurInput", m), nt.off("setInputValue", b), h.value && (h.value.disconnect(), h.value = null);
    });
    function m() {
      l.value && l.value.blur();
    }
    function k() {
      l.value && l.value.focus();
    }
    function b(A) {
      f.value = A, k();
    }
    function p(A) {
      if (o.webhookUrl && i.currentSessionId.value)
        try {
          const N = Gd(
            o.webhookUrl,
            A,
            i.currentSessionId.value,
            !0
          );
          i.ws = new WebSocket(N), i.ws.onmessage = (I) => {
            var T;
            if (I.data === "n8n|heartbeat") {
              (T = i.ws) == null || T.send("n8n|heartbeat-ack");
              return;
            }
            if (I.data === "n8n|continue") {
              v.value = !1, i.waitingForResponse.value = !0;
              return;
            }
            const ee = {
              id: pn(),
              text: I.data,
              sender: "bot"
            };
            i.messages.value.push(ee), v.value = !0, i.waitingForResponse.value = !1;
          }, i.ws.onclose = () => {
            i.ws = null, v.value = !1, i.waitingForResponse.value = !1;
          };
        } catch (N) {
          console.error("Error setting up websocket connection", N);
        }
    }
    async function E(A, N) {
      const I = {
        id: pn(),
        text: N,
        sender: "user"
      };
      i.messages.value.push(I), A.send(
        JSON.stringify({
          sessionId: i.currentSessionId.value,
          action: "sendMessage",
          chatInput: N
        })
      ), i.waitingForResponse.value = !0, v.value = !1;
    }
    async function w(A) {
      if (A.preventDefault(), x.value)
        return;
      const N = f.value;
      if (f.value = "", d.value = !0, i.ws && v.value) {
        await E(i.ws, N);
        return;
      }
      const I = await i.sendMessage(N);
      I != null && I.executionId && p(I.executionId), d.value = !1;
    }
    async function $(A) {
      A.shiftKey || A.isComposing || (await w(A), D());
    }
    function R(A) {
      (A.key === "ArrowUp" || A.key === "ArrowDown") && (A.preventDefault(), r("arrowKeyDown", {
        key: A.key,
        currentInputValue: f.value
      }));
    }
    function D() {
      const A = l.value;
      if (!A) return;
      A.style.height = "20px";
      const N = Math.min(A.scrollHeight, 480);
      A.style.height = `${N}px`;
    }
    return (A, N) => (re(), xe("div", {
      class: mt(["flex-row items-center px-4 py-2.5 relative z-50 mx-4 mb-4 flex min-h-13 rounded-2xl bg-white border-[1.5px] border-zinc-100 shadow-md focus-within:border-[1.5px]", c.value ? "focus-within:border-[var(--focus-border-color)]" : "focus-within:border-zinc-950"]),
      style: Rt(c.value ? { "--focus-border-color": c.value } : {}),
      onKeydown: Ed(R, ["stop"])
    }, [
      A.$slots.leftPanel ? (re(), xe("div", kp, [
        Zt(A.$slots, "leftPanel")
      ])) : _t("", !0),
      ys(pe("textarea", {
        ref_key: "chatTextArea",
        ref: l,
        "onUpdate:modelValue": N[0] || (N[0] = (I) => f.value = I),
        "data-test-id": "chat-input",
        disabled: C.value,
        placeholder: me(s)(n.placeholder),
        class: "field-sizing-content flex w-full rounded-md border-input bg-transparent text-base transition-color disabled:pointer-events-none disabled:cursor-not-allowed aria-invalid:border-destructive file:font-medium file:text-foreground file:text-sm md:text-sm disabled:opacity-50 disabled:outline-none focus-visible:outline aria-invalid:outline-destructive/20 max-h-40 min-h-5 resize-none border-0 px-1 py-0 outline-none text-zinc-950 placeholder:text-zinc-400 group-data-[mobile=true]:text-[16px] sm:text-sm pointer-events-auto overflow-y-auto box-border appearance-none leading-tight focus-visible:ring-0 focus-visible:ring-offset-0 selection:bg-zinc-900 selection:text-white flex-1",
        onKeydown: Cd($, ["enter"]),
        onInput: D,
        onMousedown: D,
        onFocus: D
      }, null, 40, Ep), [
        [yd, f.value]
      ]),
      pe("div", wp, [
        pe("button", {
          disabled: x.value,
          class: "flex items-center justify-center gap-2 whitespace-nowrap font-medium text-sm outline-hidden transition-all duration-200 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 shadow-inner-sm rounded-md p-1.5 h-7 w-7 shadow-none bg-transparent hover:bg-zinc-100/90",
          style: Rt(a.value),
          onClick: w
        }, [
          Ie(me(xp), {
            height: "20",
            width: "20"
          })
        ], 12, Cp)
      ])
    ], 38));
  }
}), Sp = {
  class: "group relative flex h-full flex-col bg-white shadow-lg backdrop-blur-sm",
  "data-chat-widget": ""
}, Tp = {
  key: 0,
  class: "relative flex items-center justify-between px-5 text-black",
  style: { backgroundColor: "var(--header-bg-color, transparent)" }
}, Rp = {
  key: 2,
  class: "relative z-50 flex shrink-0 flex-col justify-end"
}, Dp = {
  key: 3,
  class: "flex min-h-10 w-full max-w-full shrink-0 items-center justify-center gap-2 overflow-hidden text-nowrap px-4 pb-4 font-medium text-xs text-zinc-500 leading-[1.4]"
}, Mp = /* @__PURE__ */ Bt({
  __name: "Layout",
  setup(e) {
    const t = Be(null);
    let n = null;
    function s() {
      n && clearTimeout(n), n = window.setTimeout(() => {
        const r = t.value;
        if (r && r.scrollHeight > r.clientHeight) {
          if (r === document.body || r === document.documentElement) {
            n = null;
            return;
          }
          if (r.closest("[data-chat-widget]") || r.closest(".chat-container")) {
            const o = window.getComputedStyle(r);
            (o.overflowY === "auto" || o.overflowY === "scroll") && (r.scrollTop = r.scrollHeight);
          }
        }
        n = null;
      }, 50);
    }
    return tn(() => {
      nt.on("scrollToBottom", s), window.addEventListener("resize", s);
    }), si(() => {
      nt.off("scrollToBottom", s), window.removeEventListener("resize", s), n && (clearTimeout(n), n = null);
    }), (r, o) => (re(), xe("main", Sp, [
      r.$slots.header ? (re(), xe("header", Tp, [
        Zt(r.$slots, "header")
      ])) : _t("", !0),
      r.$slots.default ? (re(), xe("div", {
        key: 1,
        ref_key: "chatBodyRef",
        ref: t,
        class: "-mb-2 relative flex-1 basis-full overflow-y-auto scroll-smooth flex flex-col shadow-inner"
      }, [
        Zt(r.$slots, "default")
      ], 512)) : _t("", !0),
      r.$slots.input ? (re(), xe("div", Rp, [
        Zt(r.$slots, "input")
      ])) : _t("", !0),
      r.$slots.footer ? (re(), xe("footer", Dp, [
        Zt(r.$slots, "footer")
      ])) : _t("", !0)
    ]));
  }
});
function Ip(e) {
  const t = e.regex, n = {}, s = {
    begin: /\$\{/,
    end: /\}/,
    contains: [
      "self",
      {
        begin: /:-/,
        contains: [n]
      }
      // default values
    ]
  };
  Object.assign(n, {
    className: "variable",
    variants: [
      { begin: t.concat(
        /\$[\w\d#@][\w\d_]*/,
        // negative look-ahead tries to avoid matching patterns that are not
        // Perl at all like $ident$, @ident@, etc.
        "(?![\\w\\d])(?![$])"
      ) },
      s
    ]
  });
  const r = {
    className: "subst",
    begin: /\$\(/,
    end: /\)/,
    contains: [e.BACKSLASH_ESCAPE]
  }, o = e.inherit(
    e.COMMENT(),
    {
      match: [
        /(^|\s)/,
        /#.*$/
      ],
      scope: {
        2: "comment"
      }
    }
  ), i = {
    begin: /<<-?\s*(?=\w+)/,
    starts: { contains: [
      e.END_SAME_AS_BEGIN({
        begin: /(\w+)/,
        end: /(\w+)/,
        className: "string"
      })
    ] }
  }, c = {
    className: "string",
    begin: /"/,
    end: /"/,
    contains: [
      e.BACKSLASH_ESCAPE,
      n,
      r
    ]
  };
  r.contains.push(c);
  const a = {
    match: /\\"/
  }, u = {
    className: "string",
    begin: /'/,
    end: /'/
  }, l = {
    match: /\\'/
  }, f = {
    begin: /\$?\(\(/,
    end: /\)\)/,
    contains: [
      {
        begin: /\d+#[0-9a-f]+/,
        className: "number"
      },
      e.NUMBER_MODE,
      n
    ]
  }, d = [
    "fish",
    "bash",
    "zsh",
    "sh",
    "csh",
    "ksh",
    "tcsh",
    "dash",
    "scsh"
  ], h = e.SHEBANG({
    binary: `(${d.join("|")})`,
    relevance: 10
  }), v = {
    className: "function",
    begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
    returnBegin: !0,
    contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
    relevance: 0
  }, x = [
    "if",
    "then",
    "else",
    "elif",
    "fi",
    "time",
    "for",
    "while",
    "until",
    "in",
    "do",
    "done",
    "case",
    "esac",
    "coproc",
    "function",
    "select"
  ], C = [
    "true",
    "false"
  ], m = { match: /(\/[a-z._-]+)+/ }, k = [
    "break",
    "cd",
    "continue",
    "eval",
    "exec",
    "exit",
    "export",
    "getopts",
    "hash",
    "pwd",
    "readonly",
    "return",
    "shift",
    "test",
    "times",
    "trap",
    "umask",
    "unset"
  ], b = [
    "alias",
    "bind",
    "builtin",
    "caller",
    "command",
    "declare",
    "echo",
    "enable",
    "help",
    "let",
    "local",
    "logout",
    "mapfile",
    "printf",
    "read",
    "readarray",
    "source",
    "sudo",
    "type",
    "typeset",
    "ulimit",
    "unalias"
  ], p = [
    "autoload",
    "bg",
    "bindkey",
    "bye",
    "cap",
    "chdir",
    "clone",
    "comparguments",
    "compcall",
    "compctl",
    "compdescribe",
    "compfiles",
    "compgroups",
    "compquote",
    "comptags",
    "comptry",
    "compvalues",
    "dirs",
    "disable",
    "disown",
    "echotc",
    "echoti",
    "emulate",
    "fc",
    "fg",
    "float",
    "functions",
    "getcap",
    "getln",
    "history",
    "integer",
    "jobs",
    "kill",
    "limit",
    "log",
    "noglob",
    "popd",
    "print",
    "pushd",
    "pushln",
    "rehash",
    "sched",
    "setcap",
    "setopt",
    "stat",
    "suspend",
    "ttyctl",
    "unfunction",
    "unhash",
    "unlimit",
    "unsetopt",
    "vared",
    "wait",
    "whence",
    "where",
    "which",
    "zcompile",
    "zformat",
    "zftp",
    "zle",
    "zmodload",
    "zparseopts",
    "zprof",
    "zpty",
    "zregexparse",
    "zsocket",
    "zstyle",
    "ztcp"
  ], E = [
    "chcon",
    "chgrp",
    "chown",
    "chmod",
    "cp",
    "dd",
    "df",
    "dir",
    "dircolors",
    "ln",
    "ls",
    "mkdir",
    "mkfifo",
    "mknod",
    "mktemp",
    "mv",
    "realpath",
    "rm",
    "rmdir",
    "shred",
    "sync",
    "touch",
    "truncate",
    "vdir",
    "b2sum",
    "base32",
    "base64",
    "cat",
    "cksum",
    "comm",
    "csplit",
    "cut",
    "expand",
    "fmt",
    "fold",
    "head",
    "join",
    "md5sum",
    "nl",
    "numfmt",
    "od",
    "paste",
    "ptx",
    "pr",
    "sha1sum",
    "sha224sum",
    "sha256sum",
    "sha384sum",
    "sha512sum",
    "shuf",
    "sort",
    "split",
    "sum",
    "tac",
    "tail",
    "tr",
    "tsort",
    "unexpand",
    "uniq",
    "wc",
    "arch",
    "basename",
    "chroot",
    "date",
    "dirname",
    "du",
    "echo",
    "env",
    "expr",
    "factor",
    // "false", // keyword literal already
    "groups",
    "hostid",
    "id",
    "link",
    "logname",
    "nice",
    "nohup",
    "nproc",
    "pathchk",
    "pinky",
    "printenv",
    "printf",
    "pwd",
    "readlink",
    "runcon",
    "seq",
    "sleep",
    "stat",
    "stdbuf",
    "stty",
    "tee",
    "test",
    "timeout",
    // "true", // keyword literal already
    "tty",
    "uname",
    "unlink",
    "uptime",
    "users",
    "who",
    "whoami",
    "yes"
  ];
  return {
    name: "Bash",
    aliases: [
      "sh",
      "zsh"
    ],
    keywords: {
      $pattern: /\b[a-z][a-z0-9._-]+\b/,
      keyword: x,
      literal: C,
      built_in: [
        ...k,
        ...b,
        // Shell modifiers
        "set",
        "shopt",
        ...p,
        ...E
      ]
    },
    contains: [
      h,
      // to catch known shells and boost relevancy
      e.SHEBANG(),
      // to catch unknown shells but still highlight the shebang
      v,
      f,
      o,
      i,
      m,
      c,
      a,
      u,
      l,
      n
    ]
  };
}
function Np(e) {
  const t = e.regex, n = new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*", "u"), s = [
    "and",
    "as",
    "assert",
    "async",
    "await",
    "break",
    "case",
    "class",
    "continue",
    "def",
    "del",
    "elif",
    "else",
    "except",
    "finally",
    "for",
    "from",
    "global",
    "if",
    "import",
    "in",
    "is",
    "lambda",
    "match",
    "nonlocal|10",
    "not",
    "or",
    "pass",
    "raise",
    "return",
    "try",
    "while",
    "with",
    "yield"
  ], c = {
    $pattern: /[A-Za-z]\w+|__\w+__/,
    keyword: s,
    built_in: [
      "__import__",
      "abs",
      "all",
      "any",
      "ascii",
      "bin",
      "bool",
      "breakpoint",
      "bytearray",
      "bytes",
      "callable",
      "chr",
      "classmethod",
      "compile",
      "complex",
      "delattr",
      "dict",
      "dir",
      "divmod",
      "enumerate",
      "eval",
      "exec",
      "filter",
      "float",
      "format",
      "frozenset",
      "getattr",
      "globals",
      "hasattr",
      "hash",
      "help",
      "hex",
      "id",
      "input",
      "int",
      "isinstance",
      "issubclass",
      "iter",
      "len",
      "list",
      "locals",
      "map",
      "max",
      "memoryview",
      "min",
      "next",
      "object",
      "oct",
      "open",
      "ord",
      "pow",
      "print",
      "property",
      "range",
      "repr",
      "reversed",
      "round",
      "set",
      "setattr",
      "slice",
      "sorted",
      "staticmethod",
      "str",
      "sum",
      "super",
      "tuple",
      "type",
      "vars",
      "zip"
    ],
    literal: [
      "__debug__",
      "Ellipsis",
      "False",
      "None",
      "NotImplemented",
      "True"
    ],
    type: [
      "Any",
      "Callable",
      "Coroutine",
      "Dict",
      "List",
      "Literal",
      "Generic",
      "Optional",
      "Sequence",
      "Set",
      "Tuple",
      "Type",
      "Union"
    ]
  }, a = {
    className: "meta",
    begin: /^(>>>|\.\.\.) /
  }, u = {
    className: "subst",
    begin: /\{/,
    end: /\}/,
    keywords: c,
    illegal: /#/
  }, l = {
    begin: /\{\{/,
    relevance: 0
  }, f = {
    className: "string",
    contains: [e.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
        end: /'''/,
        contains: [
          e.BACKSLASH_ESCAPE,
          a
        ],
        relevance: 10
      },
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          a
        ],
        relevance: 10
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'''/,
        end: /'''/,
        contains: [
          e.BACKSLASH_ESCAPE,
          a,
          l,
          u
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          a,
          l,
          u
        ]
      },
      {
        begin: /([uU]|[rR])'/,
        end: /'/,
        relevance: 10
      },
      {
        begin: /([uU]|[rR])"/,
        end: /"/,
        relevance: 10
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])'/,
        end: /'/
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])"/,
        end: /"/
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'/,
        end: /'/,
        contains: [
          e.BACKSLASH_ESCAPE,
          l,
          u
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"/,
        end: /"/,
        contains: [
          e.BACKSLASH_ESCAPE,
          l,
          u
        ]
      },
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  }, d = "[0-9](_?[0-9])*", h = `(\\b(${d}))?\\.(${d})|\\b(${d})\\.`, v = `\\b|${s.join("|")}`, x = {
    className: "number",
    relevance: 0,
    variants: [
      // exponentfloat, pointfloat
      // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
      // optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      // Note: no leading \b because floats can start with a decimal point
      // and we don't want to mishandle e.g. `fn(.5)`,
      // no trailing \b for pointfloat because it can end with a decimal point
      // and we don't want to mishandle e.g. `0..hex()`; this should be safe
      // because both MUST contain a decimal point and so cannot be confused with
      // the interior part of an identifier
      {
        begin: `(\\b(${d})|(${h}))[eE][+-]?(${d})[jJ]?(?=${v})`
      },
      {
        begin: `(${h})[jJ]?`
      },
      // decinteger, bininteger, octinteger, hexinteger
      // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
      // optionally "long" in Python 2
      // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
      // decinteger is optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${v})`
      },
      {
        begin: `\\b0[bB](_?[01])+[lL]?(?=${v})`
      },
      {
        begin: `\\b0[oO](_?[0-7])+[lL]?(?=${v})`
      },
      {
        begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${v})`
      },
      // imagnumber (digitpart-based)
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b(${d})[jJ](?=${v})`
      }
    ]
  }, C = {
    className: "comment",
    begin: t.lookahead(/# type:/),
    end: /$/,
    keywords: c,
    contains: [
      {
        // prevent keywords from coloring `type`
        begin: /# type:/
      },
      // comment within a datatype comment includes no keywords
      {
        begin: /#/,
        end: /\b\B/,
        endsWithParent: !0
      }
    ]
  }, m = {
    className: "params",
    variants: [
      // Exclude params in functions without params
      {
        className: "",
        begin: /\(\s*\)/,
        skip: !0
      },
      {
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        keywords: c,
        contains: [
          "self",
          a,
          x,
          f,
          e.HASH_COMMENT_MODE
        ]
      }
    ]
  };
  return u.contains = [
    f,
    x,
    a
  ], {
    name: "Python",
    aliases: [
      "py",
      "gyp",
      "ipython"
    ],
    unicodeRegex: !0,
    keywords: c,
    illegal: /(<\/|\?)|=>/,
    contains: [
      a,
      x,
      {
        // very common convention
        scope: "variable.language",
        match: /\bself\b/
      },
      {
        // eat "if" prior to string so that it won't accidentally be
        // labeled as an f-string
        beginKeywords: "if",
        relevance: 0
      },
      { match: /\bor\b/, scope: "keyword" },
      f,
      C,
      e.HASH_COMMENT_MODE,
      {
        match: [
          /\bdef/,
          /\s+/,
          n
        ],
        scope: {
          1: "keyword",
          3: "title.function"
        },
        contains: [m]
      },
      {
        variants: [
          {
            match: [
              /\bclass/,
              /\s+/,
              n,
              /\s*/,
              /\(\s*/,
              n,
              /\s*\)/
            ]
          },
          {
            match: [
              /\bclass/,
              /\s+/,
              n
            ]
          }
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          6: "title.class.inherited"
        }
      },
      {
        className: "meta",
        begin: /^[\t ]*@/,
        end: /(?=#)|$/,
        contains: [
          x,
          m,
          f
        ]
      }
    ]
  };
}
const Ns = "[A-Za-z$_][0-9A-Za-z$_]*", ou = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends",
  // It's reached stage 3, which is "recommended for implementation":
  "using"
], iu = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], cu = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], au = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], lu = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], uu = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
], fu = [].concat(
  lu,
  cu,
  au
);
function Op(e) {
  const t = e.regex, n = (G, { after: fe }) => {
    const Z = "</" + G[0].slice(1);
    return G.input.indexOf(Z, fe) !== -1;
  }, s = Ns, r = {
    begin: "<>",
    end: "</>"
  }, o = /<[A-Za-z0-9\\._:-]+\s*\/>/, i = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (G, fe) => {
      const Z = G[0].length + G.index, we = G.input[Z];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        we === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        we === ","
      ) {
        fe.ignoreMatch();
        return;
      }
      we === ">" && (n(G, { after: Z }) || fe.ignoreMatch());
      let Ce;
      const rt = G.input.substring(Z);
      if (Ce = rt.match(/^\s*=/)) {
        fe.ignoreMatch();
        return;
      }
      if ((Ce = rt.match(/^\s+extends\s+/)) && Ce.index === 0) {
        fe.ignoreMatch();
        return;
      }
    }
  }, c = {
    $pattern: Ns,
    keyword: ou,
    literal: iu,
    built_in: fu,
    "variable.language": uu
  }, a = "[0-9](_?[0-9])*", u = `\\.(${a})`, l = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", f = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${l})((${u})|\\.)?|(${u}))[eE][+-]?(${a})\\b` },
      { begin: `\\b(${l})\\b((${u})\\b|\\.)?|(${u})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, d = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: c,
    contains: []
    // defined later
  }, h = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        d
      ],
      subLanguage: "xml"
    }
  }, v = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        d
      ],
      subLanguage: "css"
    }
  }, x = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        d
      ],
      subLanguage: "graphql"
    }
  }, C = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      d
    ]
  }, k = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: s + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, b = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    h,
    v,
    x,
    C,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    f
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  d.contains = b.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: c,
    contains: [
      "self"
    ].concat(b)
  });
  const p = [].concat(k, d.contains), E = p.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: c,
      contains: ["self"].concat(p)
    }
  ]), w = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: c,
    contains: E
  }, $ = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          s,
          /\s+/,
          /extends/,
          /\s+/,
          t.concat(s, "(", t.concat(/\./, s), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          s
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, R = {
    relevance: 0,
    match: t.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...cu,
        ...au
      ]
    }
  }, D = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, A = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          s,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [w],
    illegal: /%/
  }, N = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function I(G) {
    return t.concat("(?!", G.join("|"), ")");
  }
  const ee = {
    match: t.concat(
      /\b/,
      I([
        ...lu,
        "super",
        "import"
      ].map((G) => `${G}\\s*\\(`)),
      s,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, T = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(s, /(?![0-9A-Za-z$_(])/)
    )),
    end: s,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, ie = {
    match: [
      /get|set/,
      /\s+/,
      s,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      w
    ]
  }, Q = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", le = {
    match: [
      /const|var|let/,
      /\s+/,
      s,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(Q)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      w
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: c,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: E, CLASS_REFERENCE: R },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      D,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      h,
      v,
      x,
      C,
      k,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      f,
      R,
      {
        scope: "attr",
        match: s + t.lookahead(":"),
        relevance: 0
      },
      le,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          k,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: Q,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: c,
                    contains: E
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: r.begin, end: r.end },
              { match: o },
              {
                begin: i.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": i.isTrulyOpeningTag,
                end: i.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: i.begin,
                end: i.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      A,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          w,
          e.inherit(e.TITLE_MODE, { begin: s, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      T,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + s,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [w]
      },
      ee,
      N,
      $,
      ie,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function Lp(e) {
  const t = e.regex, n = Op(e), s = Ns, r = [
    "any",
    "void",
    "number",
    "boolean",
    "string",
    "object",
    "never",
    "symbol",
    "bigint",
    "unknown"
  ], o = {
    begin: [
      /namespace/,
      /\s+/,
      e.IDENT_RE
    ],
    beginScope: {
      1: "keyword",
      3: "title.class"
    }
  }, i = {
    beginKeywords: "interface",
    end: /\{/,
    excludeEnd: !0,
    keywords: {
      keyword: "interface extends",
      built_in: r
    },
    contains: [n.exports.CLASS_REFERENCE]
  }, c = {
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use strict['"]/
  }, a = [
    "type",
    // "namespace",
    "interface",
    "public",
    "private",
    "protected",
    "implements",
    "declare",
    "abstract",
    "readonly",
    "enum",
    "override",
    "satisfies"
  ], u = {
    $pattern: Ns,
    keyword: ou.concat(a),
    literal: iu,
    built_in: fu.concat(r),
    "variable.language": uu
  }, l = {
    className: "meta",
    begin: "@" + s
  }, f = (x, C, m) => {
    const k = x.contains.findIndex((b) => b.label === C);
    if (k === -1)
      throw new Error("can not find mode to replace");
    x.contains.splice(k, 1, m);
  };
  Object.assign(n.keywords, u), n.exports.PARAMS_CONTAINS.push(l);
  const d = n.contains.find((x) => x.scope === "attr"), h = Object.assign(
    {},
    d,
    { match: t.concat(s, t.lookahead(/\s*\?:/)) }
  );
  n.exports.PARAMS_CONTAINS.push([
    n.exports.CLASS_REFERENCE,
    // class reference for highlighting the params types
    d,
    // highlight the params key
    h
    // Added for optional property assignment highlighting
  ]), n.contains = n.contains.concat([
    l,
    o,
    i,
    h
    // Added for optional property assignment highlighting
  ]), f(n, "shebang", e.SHEBANG()), f(n, "use_strict", c);
  const v = n.contains.find((x) => x.label === "func.def");
  return v.relevance = 0, Object.assign(n, {
    name: "TypeScript",
    aliases: [
      "ts",
      "tsx",
      "mts",
      "cts"
    ]
  }), n;
}
var yr, _c;
function Fp() {
  if (_c) return yr;
  _c = 1;
  function e(s, r) {
    var o, i, c = s.attrs[s.attrIndex("href")][1];
    for (o = 0; o < r.length; ++o) {
      if (i = r[o], typeof i.matcher == "function") {
        if (i.matcher(c, i))
          return i;
        continue;
      }
      return i;
    }
  }
  function t(s, r, o) {
    Object.keys(o).forEach(function(i) {
      var c, a = o[i];
      i === "className" && (i = "class"), c = r[s].attrIndex(i), c < 0 ? r[s].attrPush([i, a]) : r[s].attrs[c][1] = a;
    });
  }
  function n(s, r) {
    r ? r = Array.isArray(r) ? r : [r] : r = [], Object.freeze(r);
    var o = s.renderer.rules.link_open || this.defaultRender;
    s.renderer.rules.link_open = function(i, c, a, u, l) {
      var f = e(i[c], r), d = f && f.attrs;
      return d && t(c, i, d), o(i, c, a, u, l);
    };
  }
  return n.defaultRender = function(s, r, o, i, c) {
    return c.renderToken(s, r, o);
  }, yr = n, yr;
}
var qp = Fp();
const Pp = /* @__PURE__ */ ci(qp);
var xr = {};
const Bp = "Á", $p = "á", zp = "Ă", Up = "ă", Hp = "∾", jp = "∿", Vp = "∾̳", Kp = "Â", Gp = "â", Zp = "´", Wp = "А", Jp = "а", Yp = "Æ", Xp = "æ", Qp = "⁡", eg = "𝔄", tg = "𝔞", ng = "À", sg = "à", rg = "ℵ", og = "ℵ", ig = "Α", cg = "α", ag = "Ā", lg = "ā", ug = "⨿", fg = "&", hg = "&", dg = "⩕", pg = "⩓", gg = "∧", mg = "⩜", _g = "⩘", bg = "⩚", vg = "∠", yg = "⦤", xg = "∠", kg = "⦨", Eg = "⦩", wg = "⦪", Cg = "⦫", Ag = "⦬", Sg = "⦭", Tg = "⦮", Rg = "⦯", Dg = "∡", Mg = "∟", Ig = "⊾", Ng = "⦝", Og = "∢", Lg = "Å", Fg = "⍼", qg = "Ą", Pg = "ą", Bg = "𝔸", $g = "𝕒", zg = "⩯", Ug = "≈", Hg = "⩰", jg = "≊", Vg = "≋", Kg = "'", Gg = "⁡", Zg = "≈", Wg = "≊", Jg = "Å", Yg = "å", Xg = "𝒜", Qg = "𝒶", em = "≔", tm = "*", nm = "≈", sm = "≍", rm = "Ã", om = "ã", im = "Ä", cm = "ä", am = "∳", lm = "⨑", um = "≌", fm = "϶", hm = "‵", dm = "∽", pm = "⋍", gm = "∖", mm = "⫧", _m = "⊽", bm = "⌅", vm = "⌆", ym = "⌅", xm = "⎵", km = "⎶", Em = "≌", wm = "Б", Cm = "б", Am = "„", Sm = "∵", Tm = "∵", Rm = "∵", Dm = "⦰", Mm = "϶", Im = "ℬ", Nm = "ℬ", Om = "Β", Lm = "β", Fm = "ℶ", qm = "≬", Pm = "𝔅", Bm = "𝔟", $m = "⋂", zm = "◯", Um = "⋃", Hm = "⨀", jm = "⨁", Vm = "⨂", Km = "⨆", Gm = "★", Zm = "▽", Wm = "△", Jm = "⨄", Ym = "⋁", Xm = "⋀", Qm = "⤍", e_ = "⧫", t_ = "▪", n_ = "▴", s_ = "▾", r_ = "◂", o_ = "▸", i_ = "␣", c_ = "▒", a_ = "░", l_ = "▓", u_ = "█", f_ = "=⃥", h_ = "≡⃥", d_ = "⫭", p_ = "⌐", g_ = "𝔹", m_ = "𝕓", __ = "⊥", b_ = "⊥", v_ = "⋈", y_ = "⧉", x_ = "┐", k_ = "╕", E_ = "╖", w_ = "╗", C_ = "┌", A_ = "╒", S_ = "╓", T_ = "╔", R_ = "─", D_ = "═", M_ = "┬", I_ = "╤", N_ = "╥", O_ = "╦", L_ = "┴", F_ = "╧", q_ = "╨", P_ = "╩", B_ = "⊟", $_ = "⊞", z_ = "⊠", U_ = "┘", H_ = "╛", j_ = "╜", V_ = "╝", K_ = "└", G_ = "╘", Z_ = "╙", W_ = "╚", J_ = "│", Y_ = "║", X_ = "┼", Q_ = "╪", e0 = "╫", t0 = "╬", n0 = "┤", s0 = "╡", r0 = "╢", o0 = "╣", i0 = "├", c0 = "╞", a0 = "╟", l0 = "╠", u0 = "‵", f0 = "˘", h0 = "˘", d0 = "¦", p0 = "𝒷", g0 = "ℬ", m0 = "⁏", _0 = "∽", b0 = "⋍", v0 = "⧅", y0 = "\\", x0 = "⟈", k0 = "•", E0 = "•", w0 = "≎", C0 = "⪮", A0 = "≏", S0 = "≎", T0 = "≏", R0 = "Ć", D0 = "ć", M0 = "⩄", I0 = "⩉", N0 = "⩋", O0 = "∩", L0 = "⋒", F0 = "⩇", q0 = "⩀", P0 = "ⅅ", B0 = "∩︀", $0 = "⁁", z0 = "ˇ", U0 = "ℭ", H0 = "⩍", j0 = "Č", V0 = "č", K0 = "Ç", G0 = "ç", Z0 = "Ĉ", W0 = "ĉ", J0 = "∰", Y0 = "⩌", X0 = "⩐", Q0 = "Ċ", eb = "ċ", tb = "¸", nb = "¸", sb = "⦲", rb = "¢", ob = "·", ib = "·", cb = "𝔠", ab = "ℭ", lb = "Ч", ub = "ч", fb = "✓", hb = "✓", db = "Χ", pb = "χ", gb = "ˆ", mb = "≗", _b = "↺", bb = "↻", vb = "⊛", yb = "⊚", xb = "⊝", kb = "⊙", Eb = "®", wb = "Ⓢ", Cb = "⊖", Ab = "⊕", Sb = "⊗", Tb = "○", Rb = "⧃", Db = "≗", Mb = "⨐", Ib = "⫯", Nb = "⧂", Ob = "∲", Lb = "”", Fb = "’", qb = "♣", Pb = "♣", Bb = ":", $b = "∷", zb = "⩴", Ub = "≔", Hb = "≔", jb = ",", Vb = "@", Kb = "∁", Gb = "∘", Zb = "∁", Wb = "ℂ", Jb = "≅", Yb = "⩭", Xb = "≡", Qb = "∮", ev = "∯", tv = "∮", nv = "𝕔", sv = "ℂ", rv = "∐", ov = "∐", iv = "©", cv = "©", av = "℗", lv = "∳", uv = "↵", fv = "✗", hv = "⨯", dv = "𝒞", pv = "𝒸", gv = "⫏", mv = "⫑", _v = "⫐", bv = "⫒", vv = "⋯", yv = "⤸", xv = "⤵", kv = "⋞", Ev = "⋟", wv = "↶", Cv = "⤽", Av = "⩈", Sv = "⩆", Tv = "≍", Rv = "∪", Dv = "⋓", Mv = "⩊", Iv = "⊍", Nv = "⩅", Ov = "∪︀", Lv = "↷", Fv = "⤼", qv = "⋞", Pv = "⋟", Bv = "⋎", $v = "⋏", zv = "¤", Uv = "↶", Hv = "↷", jv = "⋎", Vv = "⋏", Kv = "∲", Gv = "∱", Zv = "⌭", Wv = "†", Jv = "‡", Yv = "ℸ", Xv = "↓", Qv = "↡", ey = "⇓", ty = "‐", ny = "⫤", sy = "⊣", ry = "⤏", oy = "˝", iy = "Ď", cy = "ď", ay = "Д", ly = "д", uy = "‡", fy = "⇊", hy = "ⅅ", dy = "ⅆ", py = "⤑", gy = "⩷", my = "°", _y = "∇", by = "Δ", vy = "δ", yy = "⦱", xy = "⥿", ky = "𝔇", Ey = "𝔡", wy = "⥥", Cy = "⇃", Ay = "⇂", Sy = "´", Ty = "˙", Ry = "˝", Dy = "`", My = "˜", Iy = "⋄", Ny = "⋄", Oy = "⋄", Ly = "♦", Fy = "♦", qy = "¨", Py = "ⅆ", By = "ϝ", $y = "⋲", zy = "÷", Uy = "÷", Hy = "⋇", jy = "⋇", Vy = "Ђ", Ky = "ђ", Gy = "⌞", Zy = "⌍", Wy = "$", Jy = "𝔻", Yy = "𝕕", Xy = "¨", Qy = "˙", ex = "⃜", tx = "≐", nx = "≑", sx = "≐", rx = "∸", ox = "∔", ix = "⊡", cx = "⌆", ax = "∯", lx = "¨", ux = "⇓", fx = "⇐", hx = "⇔", dx = "⫤", px = "⟸", gx = "⟺", mx = "⟹", _x = "⇒", bx = "⊨", vx = "⇑", yx = "⇕", xx = "∥", kx = "⤓", Ex = "↓", wx = "↓", Cx = "⇓", Ax = "⇵", Sx = "̑", Tx = "⇊", Rx = "⇃", Dx = "⇂", Mx = "⥐", Ix = "⥞", Nx = "⥖", Ox = "↽", Lx = "⥟", Fx = "⥗", qx = "⇁", Px = "↧", Bx = "⊤", $x = "⤐", zx = "⌟", Ux = "⌌", Hx = "𝒟", jx = "𝒹", Vx = "Ѕ", Kx = "ѕ", Gx = "⧶", Zx = "Đ", Wx = "đ", Jx = "⋱", Yx = "▿", Xx = "▾", Qx = "⇵", ek = "⥯", tk = "⦦", nk = "Џ", sk = "џ", rk = "⟿", ok = "É", ik = "é", ck = "⩮", ak = "Ě", lk = "ě", uk = "Ê", fk = "ê", hk = "≖", dk = "≕", pk = "Э", gk = "э", mk = "⩷", _k = "Ė", bk = "ė", vk = "≑", yk = "ⅇ", xk = "≒", kk = "𝔈", Ek = "𝔢", wk = "⪚", Ck = "È", Ak = "è", Sk = "⪖", Tk = "⪘", Rk = "⪙", Dk = "∈", Mk = "⏧", Ik = "ℓ", Nk = "⪕", Ok = "⪗", Lk = "Ē", Fk = "ē", qk = "∅", Pk = "∅", Bk = "◻", $k = "∅", zk = "▫", Uk = " ", Hk = " ", jk = " ", Vk = "Ŋ", Kk = "ŋ", Gk = " ", Zk = "Ę", Wk = "ę", Jk = "𝔼", Yk = "𝕖", Xk = "⋕", Qk = "⧣", e1 = "⩱", t1 = "ε", n1 = "Ε", s1 = "ε", r1 = "ϵ", o1 = "≖", i1 = "≕", c1 = "≂", a1 = "⪖", l1 = "⪕", u1 = "⩵", f1 = "=", h1 = "≂", d1 = "≟", p1 = "⇌", g1 = "≡", m1 = "⩸", _1 = "⧥", b1 = "⥱", v1 = "≓", y1 = "ℯ", x1 = "ℰ", k1 = "≐", E1 = "⩳", w1 = "≂", C1 = "Η", A1 = "η", S1 = "Ð", T1 = "ð", R1 = "Ë", D1 = "ë", M1 = "€", I1 = "!", N1 = "∃", O1 = "∃", L1 = "ℰ", F1 = "ⅇ", q1 = "ⅇ", P1 = "≒", B1 = "Ф", $1 = "ф", z1 = "♀", U1 = "ﬃ", H1 = "ﬀ", j1 = "ﬄ", V1 = "𝔉", K1 = "𝔣", G1 = "ﬁ", Z1 = "◼", W1 = "▪", J1 = "fj", Y1 = "♭", X1 = "ﬂ", Q1 = "▱", eE = "ƒ", tE = "𝔽", nE = "𝕗", sE = "∀", rE = "∀", oE = "⋔", iE = "⫙", cE = "ℱ", aE = "⨍", lE = "½", uE = "⅓", fE = "¼", hE = "⅕", dE = "⅙", pE = "⅛", gE = "⅔", mE = "⅖", _E = "¾", bE = "⅗", vE = "⅜", yE = "⅘", xE = "⅚", kE = "⅝", EE = "⅞", wE = "⁄", CE = "⌢", AE = "𝒻", SE = "ℱ", TE = "ǵ", RE = "Γ", DE = "γ", ME = "Ϝ", IE = "ϝ", NE = "⪆", OE = "Ğ", LE = "ğ", FE = "Ģ", qE = "Ĝ", PE = "ĝ", BE = "Г", $E = "г", zE = "Ġ", UE = "ġ", HE = "≥", jE = "≧", VE = "⪌", KE = "⋛", GE = "≥", ZE = "≧", WE = "⩾", JE = "⪩", YE = "⩾", XE = "⪀", QE = "⪂", ew = "⪄", tw = "⋛︀", nw = "⪔", sw = "𝔊", rw = "𝔤", ow = "≫", iw = "⋙", cw = "⋙", aw = "ℷ", lw = "Ѓ", uw = "ѓ", fw = "⪥", hw = "≷", dw = "⪒", pw = "⪤", gw = "⪊", mw = "⪊", _w = "⪈", bw = "≩", vw = "⪈", yw = "≩", xw = "⋧", kw = "𝔾", Ew = "𝕘", ww = "`", Cw = "≥", Aw = "⋛", Sw = "≧", Tw = "⪢", Rw = "≷", Dw = "⩾", Mw = "≳", Iw = "𝒢", Nw = "ℊ", Ow = "≳", Lw = "⪎", Fw = "⪐", qw = "⪧", Pw = "⩺", Bw = ">", $w = ">", zw = "≫", Uw = "⋗", Hw = "⦕", jw = "⩼", Vw = "⪆", Kw = "⥸", Gw = "⋗", Zw = "⋛", Ww = "⪌", Jw = "≷", Yw = "≳", Xw = "≩︀", Qw = "≩︀", eC = "ˇ", tC = " ", nC = "½", sC = "ℋ", rC = "Ъ", oC = "ъ", iC = "⥈", cC = "↔", aC = "⇔", lC = "↭", uC = "^", fC = "ℏ", hC = "Ĥ", dC = "ĥ", pC = "♥", gC = "♥", mC = "…", _C = "⊹", bC = "𝔥", vC = "ℌ", yC = "ℋ", xC = "⤥", kC = "⤦", EC = "⇿", wC = "∻", CC = "↩", AC = "↪", SC = "𝕙", TC = "ℍ", RC = "―", DC = "─", MC = "𝒽", IC = "ℋ", NC = "ℏ", OC = "Ħ", LC = "ħ", FC = "≎", qC = "≏", PC = "⁃", BC = "‐", $C = "Í", zC = "í", UC = "⁣", HC = "Î", jC = "î", VC = "И", KC = "и", GC = "İ", ZC = "Е", WC = "е", JC = "¡", YC = "⇔", XC = "𝔦", QC = "ℑ", eA = "Ì", tA = "ì", nA = "ⅈ", sA = "⨌", rA = "∭", oA = "⧜", iA = "℩", cA = "Ĳ", aA = "ĳ", lA = "Ī", uA = "ī", fA = "ℑ", hA = "ⅈ", dA = "ℐ", pA = "ℑ", gA = "ı", mA = "ℑ", _A = "⊷", bA = "Ƶ", vA = "⇒", yA = "℅", xA = "∞", kA = "⧝", EA = "ı", wA = "⊺", CA = "∫", AA = "∬", SA = "ℤ", TA = "∫", RA = "⊺", DA = "⋂", MA = "⨗", IA = "⨼", NA = "⁣", OA = "⁢", LA = "Ё", FA = "ё", qA = "Į", PA = "į", BA = "𝕀", $A = "𝕚", zA = "Ι", UA = "ι", HA = "⨼", jA = "¿", VA = "𝒾", KA = "ℐ", GA = "∈", ZA = "⋵", WA = "⋹", JA = "⋴", YA = "⋳", XA = "∈", QA = "⁢", eS = "Ĩ", tS = "ĩ", nS = "І", sS = "і", rS = "Ï", oS = "ï", iS = "Ĵ", cS = "ĵ", aS = "Й", lS = "й", uS = "𝔍", fS = "𝔧", hS = "ȷ", dS = "𝕁", pS = "𝕛", gS = "𝒥", mS = "𝒿", _S = "Ј", bS = "ј", vS = "Є", yS = "є", xS = "Κ", kS = "κ", ES = "ϰ", wS = "Ķ", CS = "ķ", AS = "К", SS = "к", TS = "𝔎", RS = "𝔨", DS = "ĸ", MS = "Х", IS = "х", NS = "Ќ", OS = "ќ", LS = "𝕂", FS = "𝕜", qS = "𝒦", PS = "𝓀", BS = "⇚", $S = "Ĺ", zS = "ĺ", US = "⦴", HS = "ℒ", jS = "Λ", VS = "λ", KS = "⟨", GS = "⟪", ZS = "⦑", WS = "⟨", JS = "⪅", YS = "ℒ", XS = "«", QS = "⇤", eT = "⤟", tT = "←", nT = "↞", sT = "⇐", rT = "⤝", oT = "↩", iT = "↫", cT = "⤹", aT = "⥳", lT = "↢", uT = "⤙", fT = "⤛", hT = "⪫", dT = "⪭", pT = "⪭︀", gT = "⤌", mT = "⤎", _T = "❲", bT = "{", vT = "[", yT = "⦋", xT = "⦏", kT = "⦍", ET = "Ľ", wT = "ľ", CT = "Ļ", AT = "ļ", ST = "⌈", TT = "{", RT = "Л", DT = "л", MT = "⤶", IT = "“", NT = "„", OT = "⥧", LT = "⥋", FT = "↲", qT = "≤", PT = "≦", BT = "⟨", $T = "⇤", zT = "←", UT = "←", HT = "⇐", jT = "⇆", VT = "↢", KT = "⌈", GT = "⟦", ZT = "⥡", WT = "⥙", JT = "⇃", YT = "⌊", XT = "↽", QT = "↼", eR = "⇇", tR = "↔", nR = "↔", sR = "⇔", rR = "⇆", oR = "⇋", iR = "↭", cR = "⥎", aR = "↤", lR = "⊣", uR = "⥚", fR = "⋋", hR = "⧏", dR = "⊲", pR = "⊴", gR = "⥑", mR = "⥠", _R = "⥘", bR = "↿", vR = "⥒", yR = "↼", xR = "⪋", kR = "⋚", ER = "≤", wR = "≦", CR = "⩽", AR = "⪨", SR = "⩽", TR = "⩿", RR = "⪁", DR = "⪃", MR = "⋚︀", IR = "⪓", NR = "⪅", OR = "⋖", LR = "⋚", FR = "⪋", qR = "⋚", PR = "≦", BR = "≶", $R = "≶", zR = "⪡", UR = "≲", HR = "⩽", jR = "≲", VR = "⥼", KR = "⌊", GR = "𝔏", ZR = "𝔩", WR = "≶", JR = "⪑", YR = "⥢", XR = "↽", QR = "↼", eD = "⥪", tD = "▄", nD = "Љ", sD = "љ", rD = "⇇", oD = "≪", iD = "⋘", cD = "⌞", aD = "⇚", lD = "⥫", uD = "◺", fD = "Ŀ", hD = "ŀ", dD = "⎰", pD = "⎰", gD = "⪉", mD = "⪉", _D = "⪇", bD = "≨", vD = "⪇", yD = "≨", xD = "⋦", kD = "⟬", ED = "⇽", wD = "⟦", CD = "⟵", AD = "⟵", SD = "⟸", TD = "⟷", RD = "⟷", DD = "⟺", MD = "⟼", ID = "⟶", ND = "⟶", OD = "⟹", LD = "↫", FD = "↬", qD = "⦅", PD = "𝕃", BD = "𝕝", $D = "⨭", zD = "⨴", UD = "∗", HD = "_", jD = "↙", VD = "↘", KD = "◊", GD = "◊", ZD = "⧫", WD = "(", JD = "⦓", YD = "⇆", XD = "⌟", QD = "⇋", eM = "⥭", tM = "‎", nM = "⊿", sM = "‹", rM = "𝓁", oM = "ℒ", iM = "↰", cM = "↰", aM = "≲", lM = "⪍", uM = "⪏", fM = "[", hM = "‘", dM = "‚", pM = "Ł", gM = "ł", mM = "⪦", _M = "⩹", bM = "<", vM = "<", yM = "≪", xM = "⋖", kM = "⋋", EM = "⋉", wM = "⥶", CM = "⩻", AM = "◃", SM = "⊴", TM = "◂", RM = "⦖", DM = "⥊", MM = "⥦", IM = "≨︀", NM = "≨︀", OM = "¯", LM = "♂", FM = "✠", qM = "✠", PM = "↦", BM = "↦", $M = "↧", zM = "↤", UM = "↥", HM = "▮", jM = "⨩", VM = "М", KM = "м", GM = "—", ZM = "∺", WM = "∡", JM = " ", YM = "ℳ", XM = "𝔐", QM = "𝔪", eI = "℧", tI = "µ", nI = "*", sI = "⫰", rI = "∣", oI = "·", iI = "⊟", cI = "−", aI = "∸", lI = "⨪", uI = "∓", fI = "⫛", hI = "…", dI = "∓", pI = "⊧", gI = "𝕄", mI = "𝕞", _I = "∓", bI = "𝓂", vI = "ℳ", yI = "∾", xI = "Μ", kI = "μ", EI = "⊸", wI = "⊸", CI = "∇", AI = "Ń", SI = "ń", TI = "∠⃒", RI = "≉", DI = "⩰̸", MI = "≋̸", II = "ŉ", NI = "≉", OI = "♮", LI = "ℕ", FI = "♮", qI = " ", PI = "≎̸", BI = "≏̸", $I = "⩃", zI = "Ň", UI = "ň", HI = "Ņ", jI = "ņ", VI = "≇", KI = "⩭̸", GI = "⩂", ZI = "Н", WI = "н", JI = "–", YI = "⤤", XI = "↗", QI = "⇗", eN = "↗", tN = "≠", nN = "≐̸", sN = "​", rN = "​", oN = "​", iN = "​", cN = "≢", aN = "⤨", lN = "≂̸", uN = "≫", fN = "≪", hN = `
`, dN = "∄", pN = "∄", gN = "𝔑", mN = "𝔫", _N = "≧̸", bN = "≱", vN = "≱", yN = "≧̸", xN = "⩾̸", kN = "⩾̸", EN = "⋙̸", wN = "≵", CN = "≫⃒", AN = "≯", SN = "≯", TN = "≫̸", RN = "↮", DN = "⇎", MN = "⫲", IN = "∋", NN = "⋼", ON = "⋺", LN = "∋", FN = "Њ", qN = "њ", PN = "↚", BN = "⇍", $N = "‥", zN = "≦̸", UN = "≰", HN = "↚", jN = "⇍", VN = "↮", KN = "⇎", GN = "≰", ZN = "≦̸", WN = "⩽̸", JN = "⩽̸", YN = "≮", XN = "⋘̸", QN = "≴", eO = "≪⃒", tO = "≮", nO = "⋪", sO = "⋬", rO = "≪̸", oO = "∤", iO = "⁠", cO = " ", aO = "𝕟", lO = "ℕ", uO = "⫬", fO = "¬", hO = "≢", dO = "≭", pO = "∦", gO = "∉", mO = "≠", _O = "≂̸", bO = "∄", vO = "≯", yO = "≱", xO = "≧̸", kO = "≫̸", EO = "≹", wO = "⩾̸", CO = "≵", AO = "≎̸", SO = "≏̸", TO = "∉", RO = "⋵̸", DO = "⋹̸", MO = "∉", IO = "⋷", NO = "⋶", OO = "⧏̸", LO = "⋪", FO = "⋬", qO = "≮", PO = "≰", BO = "≸", $O = "≪̸", zO = "⩽̸", UO = "≴", HO = "⪢̸", jO = "⪡̸", VO = "∌", KO = "∌", GO = "⋾", ZO = "⋽", WO = "⊀", JO = "⪯̸", YO = "⋠", XO = "∌", QO = "⧐̸", eL = "⋫", tL = "⋭", nL = "⊏̸", sL = "⋢", rL = "⊐̸", oL = "⋣", iL = "⊂⃒", cL = "⊈", aL = "⊁", lL = "⪰̸", uL = "⋡", fL = "≿̸", hL = "⊃⃒", dL = "⊉", pL = "≁", gL = "≄", mL = "≇", _L = "≉", bL = "∤", vL = "∦", yL = "∦", xL = "⫽⃥", kL = "∂̸", EL = "⨔", wL = "⊀", CL = "⋠", AL = "⊀", SL = "⪯̸", TL = "⪯̸", RL = "⤳̸", DL = "↛", ML = "⇏", IL = "↝̸", NL = "↛", OL = "⇏", LL = "⋫", FL = "⋭", qL = "⊁", PL = "⋡", BL = "⪰̸", $L = "𝒩", zL = "𝓃", UL = "∤", HL = "∦", jL = "≁", VL = "≄", KL = "≄", GL = "∤", ZL = "∦", WL = "⋢", JL = "⋣", YL = "⊄", XL = "⫅̸", QL = "⊈", eF = "⊂⃒", tF = "⊈", nF = "⫅̸", sF = "⊁", rF = "⪰̸", oF = "⊅", iF = "⫆̸", cF = "⊉", aF = "⊃⃒", lF = "⊉", uF = "⫆̸", fF = "≹", hF = "Ñ", dF = "ñ", pF = "≸", gF = "⋪", mF = "⋬", _F = "⋫", bF = "⋭", vF = "Ν", yF = "ν", xF = "#", kF = "№", EF = " ", wF = "≍⃒", CF = "⊬", AF = "⊭", SF = "⊮", TF = "⊯", RF = "≥⃒", DF = ">⃒", MF = "⤄", IF = "⧞", NF = "⤂", OF = "≤⃒", LF = "<⃒", FF = "⊴⃒", qF = "⤃", PF = "⊵⃒", BF = "∼⃒", $F = "⤣", zF = "↖", UF = "⇖", HF = "↖", jF = "⤧", VF = "Ó", KF = "ó", GF = "⊛", ZF = "Ô", WF = "ô", JF = "⊚", YF = "О", XF = "о", QF = "⊝", e2 = "Ő", t2 = "ő", n2 = "⨸", s2 = "⊙", r2 = "⦼", o2 = "Œ", i2 = "œ", c2 = "⦿", a2 = "𝔒", l2 = "𝔬", u2 = "˛", f2 = "Ò", h2 = "ò", d2 = "⧁", p2 = "⦵", g2 = "Ω", m2 = "∮", _2 = "↺", b2 = "⦾", v2 = "⦻", y2 = "‾", x2 = "⧀", k2 = "Ō", E2 = "ō", w2 = "Ω", C2 = "ω", A2 = "Ο", S2 = "ο", T2 = "⦶", R2 = "⊖", D2 = "𝕆", M2 = "𝕠", I2 = "⦷", N2 = "“", O2 = "‘", L2 = "⦹", F2 = "⊕", q2 = "↻", P2 = "⩔", B2 = "∨", $2 = "⩝", z2 = "ℴ", U2 = "ℴ", H2 = "ª", j2 = "º", V2 = "⊶", K2 = "⩖", G2 = "⩗", Z2 = "⩛", W2 = "Ⓢ", J2 = "𝒪", Y2 = "ℴ", X2 = "Ø", Q2 = "ø", eq = "⊘", tq = "Õ", nq = "õ", sq = "⨶", rq = "⨷", oq = "⊗", iq = "Ö", cq = "ö", aq = "⌽", lq = "‾", uq = "⏞", fq = "⎴", hq = "⏜", dq = "¶", pq = "∥", gq = "∥", mq = "⫳", _q = "⫽", bq = "∂", vq = "∂", yq = "П", xq = "п", kq = "%", Eq = ".", wq = "‰", Cq = "⊥", Aq = "‱", Sq = "𝔓", Tq = "𝔭", Rq = "Φ", Dq = "φ", Mq = "ϕ", Iq = "ℳ", Nq = "☎", Oq = "Π", Lq = "π", Fq = "⋔", qq = "ϖ", Pq = "ℏ", Bq = "ℎ", $q = "ℏ", zq = "⨣", Uq = "⊞", Hq = "⨢", jq = "+", Vq = "∔", Kq = "⨥", Gq = "⩲", Zq = "±", Wq = "±", Jq = "⨦", Yq = "⨧", Xq = "±", Qq = "ℌ", eP = "⨕", tP = "𝕡", nP = "ℙ", sP = "£", rP = "⪷", oP = "⪻", iP = "≺", cP = "≼", aP = "⪷", lP = "≺", uP = "≼", fP = "≺", hP = "⪯", dP = "≼", pP = "≾", gP = "⪯", mP = "⪹", _P = "⪵", bP = "⋨", vP = "⪯", yP = "⪳", xP = "≾", kP = "′", EP = "″", wP = "ℙ", CP = "⪹", AP = "⪵", SP = "⋨", TP = "∏", RP = "∏", DP = "⌮", MP = "⌒", IP = "⌓", NP = "∝", OP = "∝", LP = "∷", FP = "∝", qP = "≾", PP = "⊰", BP = "𝒫", $P = "𝓅", zP = "Ψ", UP = "ψ", HP = " ", jP = "𝔔", VP = "𝔮", KP = "⨌", GP = "𝕢", ZP = "ℚ", WP = "⁗", JP = "𝒬", YP = "𝓆", XP = "ℍ", QP = "⨖", eB = "?", tB = "≟", nB = '"', sB = '"', rB = "⇛", oB = "∽̱", iB = "Ŕ", cB = "ŕ", aB = "√", lB = "⦳", uB = "⟩", fB = "⟫", hB = "⦒", dB = "⦥", pB = "⟩", gB = "»", mB = "⥵", _B = "⇥", bB = "⤠", vB = "⤳", yB = "→", xB = "↠", kB = "⇒", EB = "⤞", wB = "↪", CB = "↬", AB = "⥅", SB = "⥴", TB = "⤖", RB = "↣", DB = "↝", MB = "⤚", IB = "⤜", NB = "∶", OB = "ℚ", LB = "⤍", FB = "⤏", qB = "⤐", PB = "❳", BB = "}", $B = "]", zB = "⦌", UB = "⦎", HB = "⦐", jB = "Ř", VB = "ř", KB = "Ŗ", GB = "ŗ", ZB = "⌉", WB = "}", JB = "Р", YB = "р", XB = "⤷", QB = "⥩", e$ = "”", t$ = "”", n$ = "↳", s$ = "ℜ", r$ = "ℛ", o$ = "ℜ", i$ = "ℝ", c$ = "ℜ", a$ = "▭", l$ = "®", u$ = "®", f$ = "∋", h$ = "⇋", d$ = "⥯", p$ = "⥽", g$ = "⌋", m$ = "𝔯", _$ = "ℜ", b$ = "⥤", v$ = "⇁", y$ = "⇀", x$ = "⥬", k$ = "Ρ", E$ = "ρ", w$ = "ϱ", C$ = "⟩", A$ = "⇥", S$ = "→", T$ = "→", R$ = "⇒", D$ = "⇄", M$ = "↣", I$ = "⌉", N$ = "⟧", O$ = "⥝", L$ = "⥕", F$ = "⇂", q$ = "⌋", P$ = "⇁", B$ = "⇀", $$ = "⇄", z$ = "⇌", U$ = "⇉", H$ = "↝", j$ = "↦", V$ = "⊢", K$ = "⥛", G$ = "⋌", Z$ = "⧐", W$ = "⊳", J$ = "⊵", Y$ = "⥏", X$ = "⥜", Q$ = "⥔", ez = "↾", tz = "⥓", nz = "⇀", sz = "˚", rz = "≓", oz = "⇄", iz = "⇌", cz = "‏", az = "⎱", lz = "⎱", uz = "⫮", fz = "⟭", hz = "⇾", dz = "⟧", pz = "⦆", gz = "𝕣", mz = "ℝ", _z = "⨮", bz = "⨵", vz = "⥰", yz = ")", xz = "⦔", kz = "⨒", Ez = "⇉", wz = "⇛", Cz = "›", Az = "𝓇", Sz = "ℛ", Tz = "↱", Rz = "↱", Dz = "]", Mz = "’", Iz = "’", Nz = "⋌", Oz = "⋊", Lz = "▹", Fz = "⊵", qz = "▸", Pz = "⧎", Bz = "⧴", $z = "⥨", zz = "℞", Uz = "Ś", Hz = "ś", jz = "‚", Vz = "⪸", Kz = "Š", Gz = "š", Zz = "⪼", Wz = "≻", Jz = "≽", Yz = "⪰", Xz = "⪴", Qz = "Ş", e3 = "ş", t3 = "Ŝ", n3 = "ŝ", s3 = "⪺", r3 = "⪶", o3 = "⋩", i3 = "⨓", c3 = "≿", a3 = "С", l3 = "с", u3 = "⊡", f3 = "⋅", h3 = "⩦", d3 = "⤥", p3 = "↘", g3 = "⇘", m3 = "↘", _3 = "§", b3 = ";", v3 = "⤩", y3 = "∖", x3 = "∖", k3 = "✶", E3 = "𝔖", w3 = "𝔰", C3 = "⌢", A3 = "♯", S3 = "Щ", T3 = "щ", R3 = "Ш", D3 = "ш", M3 = "↓", I3 = "←", N3 = "∣", O3 = "∥", L3 = "→", F3 = "↑", q3 = "­", P3 = "Σ", B3 = "σ", $3 = "ς", z3 = "ς", U3 = "∼", H3 = "⩪", j3 = "≃", V3 = "≃", K3 = "⪞", G3 = "⪠", Z3 = "⪝", W3 = "⪟", J3 = "≆", Y3 = "⨤", X3 = "⥲", Q3 = "←", eU = "∘", tU = "∖", nU = "⨳", sU = "⧤", rU = "∣", oU = "⌣", iU = "⪪", cU = "⪬", aU = "⪬︀", lU = "Ь", uU = "ь", fU = "⌿", hU = "⧄", dU = "/", pU = "𝕊", gU = "𝕤", mU = "♠", _U = "♠", bU = "∥", vU = "⊓", yU = "⊓︀", xU = "⊔", kU = "⊔︀", EU = "√", wU = "⊏", CU = "⊑", AU = "⊏", SU = "⊑", TU = "⊐", RU = "⊒", DU = "⊐", MU = "⊒", IU = "□", NU = "□", OU = "⊓", LU = "⊏", FU = "⊑", qU = "⊐", PU = "⊒", BU = "⊔", $U = "▪", zU = "□", UU = "▪", HU = "→", jU = "𝒮", VU = "𝓈", KU = "∖", GU = "⌣", ZU = "⋆", WU = "⋆", JU = "☆", YU = "★", XU = "ϵ", QU = "ϕ", e6 = "¯", t6 = "⊂", n6 = "⋐", s6 = "⪽", r6 = "⫅", o6 = "⊆", i6 = "⫃", c6 = "⫁", a6 = "⫋", l6 = "⊊", u6 = "⪿", f6 = "⥹", h6 = "⊂", d6 = "⋐", p6 = "⊆", g6 = "⫅", m6 = "⊆", _6 = "⊊", b6 = "⫋", v6 = "⫇", y6 = "⫕", x6 = "⫓", k6 = "⪸", E6 = "≻", w6 = "≽", C6 = "≻", A6 = "⪰", S6 = "≽", T6 = "≿", R6 = "⪰", D6 = "⪺", M6 = "⪶", I6 = "⋩", N6 = "≿", O6 = "∋", L6 = "∑", F6 = "∑", q6 = "♪", P6 = "¹", B6 = "²", $6 = "³", z6 = "⊃", U6 = "⋑", H6 = "⪾", j6 = "⫘", V6 = "⫆", K6 = "⊇", G6 = "⫄", Z6 = "⊃", W6 = "⊇", J6 = "⟉", Y6 = "⫗", X6 = "⥻", Q6 = "⫂", e5 = "⫌", t5 = "⊋", n5 = "⫀", s5 = "⊃", r5 = "⋑", o5 = "⊇", i5 = "⫆", c5 = "⊋", a5 = "⫌", l5 = "⫈", u5 = "⫔", f5 = "⫖", h5 = "⤦", d5 = "↙", p5 = "⇙", g5 = "↙", m5 = "⤪", _5 = "ß", b5 = "	", v5 = "⌖", y5 = "Τ", x5 = "τ", k5 = "⎴", E5 = "Ť", w5 = "ť", C5 = "Ţ", A5 = "ţ", S5 = "Т", T5 = "т", R5 = "⃛", D5 = "⌕", M5 = "𝔗", I5 = "𝔱", N5 = "∴", O5 = "∴", L5 = "∴", F5 = "Θ", q5 = "θ", P5 = "ϑ", B5 = "ϑ", $5 = "≈", z5 = "∼", U5 = "  ", H5 = " ", j5 = " ", V5 = "≈", K5 = "∼", G5 = "Þ", Z5 = "þ", W5 = "˜", J5 = "∼", Y5 = "≃", X5 = "≅", Q5 = "≈", eH = "⨱", tH = "⊠", nH = "×", sH = "⨰", rH = "∭", oH = "⤨", iH = "⌶", cH = "⫱", aH = "⊤", lH = "𝕋", uH = "𝕥", fH = "⫚", hH = "⤩", dH = "‴", pH = "™", gH = "™", mH = "▵", _H = "▿", bH = "◃", vH = "⊴", yH = "≜", xH = "▹", kH = "⊵", EH = "◬", wH = "≜", CH = "⨺", AH = "⃛", SH = "⨹", TH = "⧍", RH = "⨻", DH = "⏢", MH = "𝒯", IH = "𝓉", NH = "Ц", OH = "ц", LH = "Ћ", FH = "ћ", qH = "Ŧ", PH = "ŧ", BH = "≬", $H = "↞", zH = "↠", UH = "Ú", HH = "ú", jH = "↑", VH = "↟", KH = "⇑", GH = "⥉", ZH = "Ў", WH = "ў", JH = "Ŭ", YH = "ŭ", XH = "Û", QH = "û", e4 = "У", t4 = "у", n4 = "⇅", s4 = "Ű", r4 = "ű", o4 = "⥮", i4 = "⥾", c4 = "𝔘", a4 = "𝔲", l4 = "Ù", u4 = "ù", f4 = "⥣", h4 = "↿", d4 = "↾", p4 = "▀", g4 = "⌜", m4 = "⌜", _4 = "⌏", b4 = "◸", v4 = "Ū", y4 = "ū", x4 = "¨", k4 = "_", E4 = "⏟", w4 = "⎵", C4 = "⏝", A4 = "⋃", S4 = "⊎", T4 = "Ų", R4 = "ų", D4 = "𝕌", M4 = "𝕦", I4 = "⤒", N4 = "↑", O4 = "↑", L4 = "⇑", F4 = "⇅", q4 = "↕", P4 = "↕", B4 = "⇕", $4 = "⥮", z4 = "↿", U4 = "↾", H4 = "⊎", j4 = "↖", V4 = "↗", K4 = "υ", G4 = "ϒ", Z4 = "ϒ", W4 = "Υ", J4 = "υ", Y4 = "↥", X4 = "⊥", Q4 = "⇈", e8 = "⌝", t8 = "⌝", n8 = "⌎", s8 = "Ů", r8 = "ů", o8 = "◹", i8 = "𝒰", c8 = "𝓊", a8 = "⋰", l8 = "Ũ", u8 = "ũ", f8 = "▵", h8 = "▴", d8 = "⇈", p8 = "Ü", g8 = "ü", m8 = "⦧", _8 = "⦜", b8 = "ϵ", v8 = "ϰ", y8 = "∅", x8 = "ϕ", k8 = "ϖ", E8 = "∝", w8 = "↕", C8 = "⇕", A8 = "ϱ", S8 = "ς", T8 = "⊊︀", R8 = "⫋︀", D8 = "⊋︀", M8 = "⫌︀", I8 = "ϑ", N8 = "⊲", O8 = "⊳", L8 = "⫨", F8 = "⫫", q8 = "⫩", P8 = "В", B8 = "в", $8 = "⊢", z8 = "⊨", U8 = "⊩", H8 = "⊫", j8 = "⫦", V8 = "⊻", K8 = "∨", G8 = "⋁", Z8 = "≚", W8 = "⋮", J8 = "|", Y8 = "‖", X8 = "|", Q8 = "‖", e9 = "∣", t9 = "|", n9 = "❘", s9 = "≀", r9 = " ", o9 = "𝔙", i9 = "𝔳", c9 = "⊲", a9 = "⊂⃒", l9 = "⊃⃒", u9 = "𝕍", f9 = "𝕧", h9 = "∝", d9 = "⊳", p9 = "𝒱", g9 = "𝓋", m9 = "⫋︀", _9 = "⊊︀", b9 = "⫌︀", v9 = "⊋︀", y9 = "⊪", x9 = "⦚", k9 = "Ŵ", E9 = "ŵ", w9 = "⩟", C9 = "∧", A9 = "⋀", S9 = "≙", T9 = "℘", R9 = "𝔚", D9 = "𝔴", M9 = "𝕎", I9 = "𝕨", N9 = "℘", O9 = "≀", L9 = "≀", F9 = "𝒲", q9 = "𝓌", P9 = "⋂", B9 = "◯", $9 = "⋃", z9 = "▽", U9 = "𝔛", H9 = "𝔵", j9 = "⟷", V9 = "⟺", K9 = "Ξ", G9 = "ξ", Z9 = "⟵", W9 = "⟸", J9 = "⟼", Y9 = "⋻", X9 = "⨀", Q9 = "𝕏", ej = "𝕩", tj = "⨁", nj = "⨂", sj = "⟶", rj = "⟹", oj = "𝒳", ij = "𝓍", cj = "⨆", aj = "⨄", lj = "△", uj = "⋁", fj = "⋀", hj = "Ý", dj = "ý", pj = "Я", gj = "я", mj = "Ŷ", _j = "ŷ", bj = "Ы", vj = "ы", yj = "¥", xj = "𝔜", kj = "𝔶", Ej = "Ї", wj = "ї", Cj = "𝕐", Aj = "𝕪", Sj = "𝒴", Tj = "𝓎", Rj = "Ю", Dj = "ю", Mj = "ÿ", Ij = "Ÿ", Nj = "Ź", Oj = "ź", Lj = "Ž", Fj = "ž", qj = "З", Pj = "з", Bj = "Ż", $j = "ż", zj = "ℨ", Uj = "​", Hj = "Ζ", jj = "ζ", Vj = "𝔷", Kj = "ℨ", Gj = "Ж", Zj = "ж", Wj = "⇝", Jj = "𝕫", Yj = "ℤ", Xj = "𝒵", Qj = "𝓏", eV = "‍", tV = "‌", nV = {
  Aacute: Bp,
  aacute: $p,
  Abreve: zp,
  abreve: Up,
  ac: Hp,
  acd: jp,
  acE: Vp,
  Acirc: Kp,
  acirc: Gp,
  acute: Zp,
  Acy: Wp,
  acy: Jp,
  AElig: Yp,
  aelig: Xp,
  af: Qp,
  Afr: eg,
  afr: tg,
  Agrave: ng,
  agrave: sg,
  alefsym: rg,
  aleph: og,
  Alpha: ig,
  alpha: cg,
  Amacr: ag,
  amacr: lg,
  amalg: ug,
  amp: fg,
  AMP: hg,
  andand: dg,
  And: pg,
  and: gg,
  andd: mg,
  andslope: _g,
  andv: bg,
  ang: vg,
  ange: yg,
  angle: xg,
  angmsdaa: kg,
  angmsdab: Eg,
  angmsdac: wg,
  angmsdad: Cg,
  angmsdae: Ag,
  angmsdaf: Sg,
  angmsdag: Tg,
  angmsdah: Rg,
  angmsd: Dg,
  angrt: Mg,
  angrtvb: Ig,
  angrtvbd: Ng,
  angsph: Og,
  angst: Lg,
  angzarr: Fg,
  Aogon: qg,
  aogon: Pg,
  Aopf: Bg,
  aopf: $g,
  apacir: zg,
  ap: Ug,
  apE: Hg,
  ape: jg,
  apid: Vg,
  apos: Kg,
  ApplyFunction: Gg,
  approx: Zg,
  approxeq: Wg,
  Aring: Jg,
  aring: Yg,
  Ascr: Xg,
  ascr: Qg,
  Assign: em,
  ast: tm,
  asymp: nm,
  asympeq: sm,
  Atilde: rm,
  atilde: om,
  Auml: im,
  auml: cm,
  awconint: am,
  awint: lm,
  backcong: um,
  backepsilon: fm,
  backprime: hm,
  backsim: dm,
  backsimeq: pm,
  Backslash: gm,
  Barv: mm,
  barvee: _m,
  barwed: bm,
  Barwed: vm,
  barwedge: ym,
  bbrk: xm,
  bbrktbrk: km,
  bcong: Em,
  Bcy: wm,
  bcy: Cm,
  bdquo: Am,
  becaus: Sm,
  because: Tm,
  Because: Rm,
  bemptyv: Dm,
  bepsi: Mm,
  bernou: Im,
  Bernoullis: Nm,
  Beta: Om,
  beta: Lm,
  beth: Fm,
  between: qm,
  Bfr: Pm,
  bfr: Bm,
  bigcap: $m,
  bigcirc: zm,
  bigcup: Um,
  bigodot: Hm,
  bigoplus: jm,
  bigotimes: Vm,
  bigsqcup: Km,
  bigstar: Gm,
  bigtriangledown: Zm,
  bigtriangleup: Wm,
  biguplus: Jm,
  bigvee: Ym,
  bigwedge: Xm,
  bkarow: Qm,
  blacklozenge: e_,
  blacksquare: t_,
  blacktriangle: n_,
  blacktriangledown: s_,
  blacktriangleleft: r_,
  blacktriangleright: o_,
  blank: i_,
  blk12: c_,
  blk14: a_,
  blk34: l_,
  block: u_,
  bne: f_,
  bnequiv: h_,
  bNot: d_,
  bnot: p_,
  Bopf: g_,
  bopf: m_,
  bot: __,
  bottom: b_,
  bowtie: v_,
  boxbox: y_,
  boxdl: x_,
  boxdL: k_,
  boxDl: E_,
  boxDL: w_,
  boxdr: C_,
  boxdR: A_,
  boxDr: S_,
  boxDR: T_,
  boxh: R_,
  boxH: D_,
  boxhd: M_,
  boxHd: I_,
  boxhD: N_,
  boxHD: O_,
  boxhu: L_,
  boxHu: F_,
  boxhU: q_,
  boxHU: P_,
  boxminus: B_,
  boxplus: $_,
  boxtimes: z_,
  boxul: U_,
  boxuL: H_,
  boxUl: j_,
  boxUL: V_,
  boxur: K_,
  boxuR: G_,
  boxUr: Z_,
  boxUR: W_,
  boxv: J_,
  boxV: Y_,
  boxvh: X_,
  boxvH: Q_,
  boxVh: e0,
  boxVH: t0,
  boxvl: n0,
  boxvL: s0,
  boxVl: r0,
  boxVL: o0,
  boxvr: i0,
  boxvR: c0,
  boxVr: a0,
  boxVR: l0,
  bprime: u0,
  breve: f0,
  Breve: h0,
  brvbar: d0,
  bscr: p0,
  Bscr: g0,
  bsemi: m0,
  bsim: _0,
  bsime: b0,
  bsolb: v0,
  bsol: y0,
  bsolhsub: x0,
  bull: k0,
  bullet: E0,
  bump: w0,
  bumpE: C0,
  bumpe: A0,
  Bumpeq: S0,
  bumpeq: T0,
  Cacute: R0,
  cacute: D0,
  capand: M0,
  capbrcup: I0,
  capcap: N0,
  cap: O0,
  Cap: L0,
  capcup: F0,
  capdot: q0,
  CapitalDifferentialD: P0,
  caps: B0,
  caret: $0,
  caron: z0,
  Cayleys: U0,
  ccaps: H0,
  Ccaron: j0,
  ccaron: V0,
  Ccedil: K0,
  ccedil: G0,
  Ccirc: Z0,
  ccirc: W0,
  Cconint: J0,
  ccups: Y0,
  ccupssm: X0,
  Cdot: Q0,
  cdot: eb,
  cedil: tb,
  Cedilla: nb,
  cemptyv: sb,
  cent: rb,
  centerdot: ob,
  CenterDot: ib,
  cfr: cb,
  Cfr: ab,
  CHcy: lb,
  chcy: ub,
  check: fb,
  checkmark: hb,
  Chi: db,
  chi: pb,
  circ: gb,
  circeq: mb,
  circlearrowleft: _b,
  circlearrowright: bb,
  circledast: vb,
  circledcirc: yb,
  circleddash: xb,
  CircleDot: kb,
  circledR: Eb,
  circledS: wb,
  CircleMinus: Cb,
  CirclePlus: Ab,
  CircleTimes: Sb,
  cir: Tb,
  cirE: Rb,
  cire: Db,
  cirfnint: Mb,
  cirmid: Ib,
  cirscir: Nb,
  ClockwiseContourIntegral: Ob,
  CloseCurlyDoubleQuote: Lb,
  CloseCurlyQuote: Fb,
  clubs: qb,
  clubsuit: Pb,
  colon: Bb,
  Colon: $b,
  Colone: zb,
  colone: Ub,
  coloneq: Hb,
  comma: jb,
  commat: Vb,
  comp: Kb,
  compfn: Gb,
  complement: Zb,
  complexes: Wb,
  cong: Jb,
  congdot: Yb,
  Congruent: Xb,
  conint: Qb,
  Conint: ev,
  ContourIntegral: tv,
  copf: nv,
  Copf: sv,
  coprod: rv,
  Coproduct: ov,
  copy: iv,
  COPY: cv,
  copysr: av,
  CounterClockwiseContourIntegral: lv,
  crarr: uv,
  cross: fv,
  Cross: hv,
  Cscr: dv,
  cscr: pv,
  csub: gv,
  csube: mv,
  csup: _v,
  csupe: bv,
  ctdot: vv,
  cudarrl: yv,
  cudarrr: xv,
  cuepr: kv,
  cuesc: Ev,
  cularr: wv,
  cularrp: Cv,
  cupbrcap: Av,
  cupcap: Sv,
  CupCap: Tv,
  cup: Rv,
  Cup: Dv,
  cupcup: Mv,
  cupdot: Iv,
  cupor: Nv,
  cups: Ov,
  curarr: Lv,
  curarrm: Fv,
  curlyeqprec: qv,
  curlyeqsucc: Pv,
  curlyvee: Bv,
  curlywedge: $v,
  curren: zv,
  curvearrowleft: Uv,
  curvearrowright: Hv,
  cuvee: jv,
  cuwed: Vv,
  cwconint: Kv,
  cwint: Gv,
  cylcty: Zv,
  dagger: Wv,
  Dagger: Jv,
  daleth: Yv,
  darr: Xv,
  Darr: Qv,
  dArr: ey,
  dash: ty,
  Dashv: ny,
  dashv: sy,
  dbkarow: ry,
  dblac: oy,
  Dcaron: iy,
  dcaron: cy,
  Dcy: ay,
  dcy: ly,
  ddagger: uy,
  ddarr: fy,
  DD: hy,
  dd: dy,
  DDotrahd: py,
  ddotseq: gy,
  deg: my,
  Del: _y,
  Delta: by,
  delta: vy,
  demptyv: yy,
  dfisht: xy,
  Dfr: ky,
  dfr: Ey,
  dHar: wy,
  dharl: Cy,
  dharr: Ay,
  DiacriticalAcute: Sy,
  DiacriticalDot: Ty,
  DiacriticalDoubleAcute: Ry,
  DiacriticalGrave: Dy,
  DiacriticalTilde: My,
  diam: Iy,
  diamond: Ny,
  Diamond: Oy,
  diamondsuit: Ly,
  diams: Fy,
  die: qy,
  DifferentialD: Py,
  digamma: By,
  disin: $y,
  div: zy,
  divide: Uy,
  divideontimes: Hy,
  divonx: jy,
  DJcy: Vy,
  djcy: Ky,
  dlcorn: Gy,
  dlcrop: Zy,
  dollar: Wy,
  Dopf: Jy,
  dopf: Yy,
  Dot: Xy,
  dot: Qy,
  DotDot: ex,
  doteq: tx,
  doteqdot: nx,
  DotEqual: sx,
  dotminus: rx,
  dotplus: ox,
  dotsquare: ix,
  doublebarwedge: cx,
  DoubleContourIntegral: ax,
  DoubleDot: lx,
  DoubleDownArrow: ux,
  DoubleLeftArrow: fx,
  DoubleLeftRightArrow: hx,
  DoubleLeftTee: dx,
  DoubleLongLeftArrow: px,
  DoubleLongLeftRightArrow: gx,
  DoubleLongRightArrow: mx,
  DoubleRightArrow: _x,
  DoubleRightTee: bx,
  DoubleUpArrow: vx,
  DoubleUpDownArrow: yx,
  DoubleVerticalBar: xx,
  DownArrowBar: kx,
  downarrow: Ex,
  DownArrow: wx,
  Downarrow: Cx,
  DownArrowUpArrow: Ax,
  DownBreve: Sx,
  downdownarrows: Tx,
  downharpoonleft: Rx,
  downharpoonright: Dx,
  DownLeftRightVector: Mx,
  DownLeftTeeVector: Ix,
  DownLeftVectorBar: Nx,
  DownLeftVector: Ox,
  DownRightTeeVector: Lx,
  DownRightVectorBar: Fx,
  DownRightVector: qx,
  DownTeeArrow: Px,
  DownTee: Bx,
  drbkarow: $x,
  drcorn: zx,
  drcrop: Ux,
  Dscr: Hx,
  dscr: jx,
  DScy: Vx,
  dscy: Kx,
  dsol: Gx,
  Dstrok: Zx,
  dstrok: Wx,
  dtdot: Jx,
  dtri: Yx,
  dtrif: Xx,
  duarr: Qx,
  duhar: ek,
  dwangle: tk,
  DZcy: nk,
  dzcy: sk,
  dzigrarr: rk,
  Eacute: ok,
  eacute: ik,
  easter: ck,
  Ecaron: ak,
  ecaron: lk,
  Ecirc: uk,
  ecirc: fk,
  ecir: hk,
  ecolon: dk,
  Ecy: pk,
  ecy: gk,
  eDDot: mk,
  Edot: _k,
  edot: bk,
  eDot: vk,
  ee: yk,
  efDot: xk,
  Efr: kk,
  efr: Ek,
  eg: wk,
  Egrave: Ck,
  egrave: Ak,
  egs: Sk,
  egsdot: Tk,
  el: Rk,
  Element: Dk,
  elinters: Mk,
  ell: Ik,
  els: Nk,
  elsdot: Ok,
  Emacr: Lk,
  emacr: Fk,
  empty: qk,
  emptyset: Pk,
  EmptySmallSquare: Bk,
  emptyv: $k,
  EmptyVerySmallSquare: zk,
  emsp13: Uk,
  emsp14: Hk,
  emsp: jk,
  ENG: Vk,
  eng: Kk,
  ensp: Gk,
  Eogon: Zk,
  eogon: Wk,
  Eopf: Jk,
  eopf: Yk,
  epar: Xk,
  eparsl: Qk,
  eplus: e1,
  epsi: t1,
  Epsilon: n1,
  epsilon: s1,
  epsiv: r1,
  eqcirc: o1,
  eqcolon: i1,
  eqsim: c1,
  eqslantgtr: a1,
  eqslantless: l1,
  Equal: u1,
  equals: f1,
  EqualTilde: h1,
  equest: d1,
  Equilibrium: p1,
  equiv: g1,
  equivDD: m1,
  eqvparsl: _1,
  erarr: b1,
  erDot: v1,
  escr: y1,
  Escr: x1,
  esdot: k1,
  Esim: E1,
  esim: w1,
  Eta: C1,
  eta: A1,
  ETH: S1,
  eth: T1,
  Euml: R1,
  euml: D1,
  euro: M1,
  excl: I1,
  exist: N1,
  Exists: O1,
  expectation: L1,
  exponentiale: F1,
  ExponentialE: q1,
  fallingdotseq: P1,
  Fcy: B1,
  fcy: $1,
  female: z1,
  ffilig: U1,
  fflig: H1,
  ffllig: j1,
  Ffr: V1,
  ffr: K1,
  filig: G1,
  FilledSmallSquare: Z1,
  FilledVerySmallSquare: W1,
  fjlig: J1,
  flat: Y1,
  fllig: X1,
  fltns: Q1,
  fnof: eE,
  Fopf: tE,
  fopf: nE,
  forall: sE,
  ForAll: rE,
  fork: oE,
  forkv: iE,
  Fouriertrf: cE,
  fpartint: aE,
  frac12: lE,
  frac13: uE,
  frac14: fE,
  frac15: hE,
  frac16: dE,
  frac18: pE,
  frac23: gE,
  frac25: mE,
  frac34: _E,
  frac35: bE,
  frac38: vE,
  frac45: yE,
  frac56: xE,
  frac58: kE,
  frac78: EE,
  frasl: wE,
  frown: CE,
  fscr: AE,
  Fscr: SE,
  gacute: TE,
  Gamma: RE,
  gamma: DE,
  Gammad: ME,
  gammad: IE,
  gap: NE,
  Gbreve: OE,
  gbreve: LE,
  Gcedil: FE,
  Gcirc: qE,
  gcirc: PE,
  Gcy: BE,
  gcy: $E,
  Gdot: zE,
  gdot: UE,
  ge: HE,
  gE: jE,
  gEl: VE,
  gel: KE,
  geq: GE,
  geqq: ZE,
  geqslant: WE,
  gescc: JE,
  ges: YE,
  gesdot: XE,
  gesdoto: QE,
  gesdotol: ew,
  gesl: tw,
  gesles: nw,
  Gfr: sw,
  gfr: rw,
  gg: ow,
  Gg: iw,
  ggg: cw,
  gimel: aw,
  GJcy: lw,
  gjcy: uw,
  gla: fw,
  gl: hw,
  glE: dw,
  glj: pw,
  gnap: gw,
  gnapprox: mw,
  gne: _w,
  gnE: bw,
  gneq: vw,
  gneqq: yw,
  gnsim: xw,
  Gopf: kw,
  gopf: Ew,
  grave: ww,
  GreaterEqual: Cw,
  GreaterEqualLess: Aw,
  GreaterFullEqual: Sw,
  GreaterGreater: Tw,
  GreaterLess: Rw,
  GreaterSlantEqual: Dw,
  GreaterTilde: Mw,
  Gscr: Iw,
  gscr: Nw,
  gsim: Ow,
  gsime: Lw,
  gsiml: Fw,
  gtcc: qw,
  gtcir: Pw,
  gt: Bw,
  GT: $w,
  Gt: zw,
  gtdot: Uw,
  gtlPar: Hw,
  gtquest: jw,
  gtrapprox: Vw,
  gtrarr: Kw,
  gtrdot: Gw,
  gtreqless: Zw,
  gtreqqless: Ww,
  gtrless: Jw,
  gtrsim: Yw,
  gvertneqq: Xw,
  gvnE: Qw,
  Hacek: eC,
  hairsp: tC,
  half: nC,
  hamilt: sC,
  HARDcy: rC,
  hardcy: oC,
  harrcir: iC,
  harr: cC,
  hArr: aC,
  harrw: lC,
  Hat: uC,
  hbar: fC,
  Hcirc: hC,
  hcirc: dC,
  hearts: pC,
  heartsuit: gC,
  hellip: mC,
  hercon: _C,
  hfr: bC,
  Hfr: vC,
  HilbertSpace: yC,
  hksearow: xC,
  hkswarow: kC,
  hoarr: EC,
  homtht: wC,
  hookleftarrow: CC,
  hookrightarrow: AC,
  hopf: SC,
  Hopf: TC,
  horbar: RC,
  HorizontalLine: DC,
  hscr: MC,
  Hscr: IC,
  hslash: NC,
  Hstrok: OC,
  hstrok: LC,
  HumpDownHump: FC,
  HumpEqual: qC,
  hybull: PC,
  hyphen: BC,
  Iacute: $C,
  iacute: zC,
  ic: UC,
  Icirc: HC,
  icirc: jC,
  Icy: VC,
  icy: KC,
  Idot: GC,
  IEcy: ZC,
  iecy: WC,
  iexcl: JC,
  iff: YC,
  ifr: XC,
  Ifr: QC,
  Igrave: eA,
  igrave: tA,
  ii: nA,
  iiiint: sA,
  iiint: rA,
  iinfin: oA,
  iiota: iA,
  IJlig: cA,
  ijlig: aA,
  Imacr: lA,
  imacr: uA,
  image: fA,
  ImaginaryI: hA,
  imagline: dA,
  imagpart: pA,
  imath: gA,
  Im: mA,
  imof: _A,
  imped: bA,
  Implies: vA,
  incare: yA,
  in: "∈",
  infin: xA,
  infintie: kA,
  inodot: EA,
  intcal: wA,
  int: CA,
  Int: AA,
  integers: SA,
  Integral: TA,
  intercal: RA,
  Intersection: DA,
  intlarhk: MA,
  intprod: IA,
  InvisibleComma: NA,
  InvisibleTimes: OA,
  IOcy: LA,
  iocy: FA,
  Iogon: qA,
  iogon: PA,
  Iopf: BA,
  iopf: $A,
  Iota: zA,
  iota: UA,
  iprod: HA,
  iquest: jA,
  iscr: VA,
  Iscr: KA,
  isin: GA,
  isindot: ZA,
  isinE: WA,
  isins: JA,
  isinsv: YA,
  isinv: XA,
  it: QA,
  Itilde: eS,
  itilde: tS,
  Iukcy: nS,
  iukcy: sS,
  Iuml: rS,
  iuml: oS,
  Jcirc: iS,
  jcirc: cS,
  Jcy: aS,
  jcy: lS,
  Jfr: uS,
  jfr: fS,
  jmath: hS,
  Jopf: dS,
  jopf: pS,
  Jscr: gS,
  jscr: mS,
  Jsercy: _S,
  jsercy: bS,
  Jukcy: vS,
  jukcy: yS,
  Kappa: xS,
  kappa: kS,
  kappav: ES,
  Kcedil: wS,
  kcedil: CS,
  Kcy: AS,
  kcy: SS,
  Kfr: TS,
  kfr: RS,
  kgreen: DS,
  KHcy: MS,
  khcy: IS,
  KJcy: NS,
  kjcy: OS,
  Kopf: LS,
  kopf: FS,
  Kscr: qS,
  kscr: PS,
  lAarr: BS,
  Lacute: $S,
  lacute: zS,
  laemptyv: US,
  lagran: HS,
  Lambda: jS,
  lambda: VS,
  lang: KS,
  Lang: GS,
  langd: ZS,
  langle: WS,
  lap: JS,
  Laplacetrf: YS,
  laquo: XS,
  larrb: QS,
  larrbfs: eT,
  larr: tT,
  Larr: nT,
  lArr: sT,
  larrfs: rT,
  larrhk: oT,
  larrlp: iT,
  larrpl: cT,
  larrsim: aT,
  larrtl: lT,
  latail: uT,
  lAtail: fT,
  lat: hT,
  late: dT,
  lates: pT,
  lbarr: gT,
  lBarr: mT,
  lbbrk: _T,
  lbrace: bT,
  lbrack: vT,
  lbrke: yT,
  lbrksld: xT,
  lbrkslu: kT,
  Lcaron: ET,
  lcaron: wT,
  Lcedil: CT,
  lcedil: AT,
  lceil: ST,
  lcub: TT,
  Lcy: RT,
  lcy: DT,
  ldca: MT,
  ldquo: IT,
  ldquor: NT,
  ldrdhar: OT,
  ldrushar: LT,
  ldsh: FT,
  le: qT,
  lE: PT,
  LeftAngleBracket: BT,
  LeftArrowBar: $T,
  leftarrow: zT,
  LeftArrow: UT,
  Leftarrow: HT,
  LeftArrowRightArrow: jT,
  leftarrowtail: VT,
  LeftCeiling: KT,
  LeftDoubleBracket: GT,
  LeftDownTeeVector: ZT,
  LeftDownVectorBar: WT,
  LeftDownVector: JT,
  LeftFloor: YT,
  leftharpoondown: XT,
  leftharpoonup: QT,
  leftleftarrows: eR,
  leftrightarrow: tR,
  LeftRightArrow: nR,
  Leftrightarrow: sR,
  leftrightarrows: rR,
  leftrightharpoons: oR,
  leftrightsquigarrow: iR,
  LeftRightVector: cR,
  LeftTeeArrow: aR,
  LeftTee: lR,
  LeftTeeVector: uR,
  leftthreetimes: fR,
  LeftTriangleBar: hR,
  LeftTriangle: dR,
  LeftTriangleEqual: pR,
  LeftUpDownVector: gR,
  LeftUpTeeVector: mR,
  LeftUpVectorBar: _R,
  LeftUpVector: bR,
  LeftVectorBar: vR,
  LeftVector: yR,
  lEg: xR,
  leg: kR,
  leq: ER,
  leqq: wR,
  leqslant: CR,
  lescc: AR,
  les: SR,
  lesdot: TR,
  lesdoto: RR,
  lesdotor: DR,
  lesg: MR,
  lesges: IR,
  lessapprox: NR,
  lessdot: OR,
  lesseqgtr: LR,
  lesseqqgtr: FR,
  LessEqualGreater: qR,
  LessFullEqual: PR,
  LessGreater: BR,
  lessgtr: $R,
  LessLess: zR,
  lesssim: UR,
  LessSlantEqual: HR,
  LessTilde: jR,
  lfisht: VR,
  lfloor: KR,
  Lfr: GR,
  lfr: ZR,
  lg: WR,
  lgE: JR,
  lHar: YR,
  lhard: XR,
  lharu: QR,
  lharul: eD,
  lhblk: tD,
  LJcy: nD,
  ljcy: sD,
  llarr: rD,
  ll: oD,
  Ll: iD,
  llcorner: cD,
  Lleftarrow: aD,
  llhard: lD,
  lltri: uD,
  Lmidot: fD,
  lmidot: hD,
  lmoustache: dD,
  lmoust: pD,
  lnap: gD,
  lnapprox: mD,
  lne: _D,
  lnE: bD,
  lneq: vD,
  lneqq: yD,
  lnsim: xD,
  loang: kD,
  loarr: ED,
  lobrk: wD,
  longleftarrow: CD,
  LongLeftArrow: AD,
  Longleftarrow: SD,
  longleftrightarrow: TD,
  LongLeftRightArrow: RD,
  Longleftrightarrow: DD,
  longmapsto: MD,
  longrightarrow: ID,
  LongRightArrow: ND,
  Longrightarrow: OD,
  looparrowleft: LD,
  looparrowright: FD,
  lopar: qD,
  Lopf: PD,
  lopf: BD,
  loplus: $D,
  lotimes: zD,
  lowast: UD,
  lowbar: HD,
  LowerLeftArrow: jD,
  LowerRightArrow: VD,
  loz: KD,
  lozenge: GD,
  lozf: ZD,
  lpar: WD,
  lparlt: JD,
  lrarr: YD,
  lrcorner: XD,
  lrhar: QD,
  lrhard: eM,
  lrm: tM,
  lrtri: nM,
  lsaquo: sM,
  lscr: rM,
  Lscr: oM,
  lsh: iM,
  Lsh: cM,
  lsim: aM,
  lsime: lM,
  lsimg: uM,
  lsqb: fM,
  lsquo: hM,
  lsquor: dM,
  Lstrok: pM,
  lstrok: gM,
  ltcc: mM,
  ltcir: _M,
  lt: bM,
  LT: vM,
  Lt: yM,
  ltdot: xM,
  lthree: kM,
  ltimes: EM,
  ltlarr: wM,
  ltquest: CM,
  ltri: AM,
  ltrie: SM,
  ltrif: TM,
  ltrPar: RM,
  lurdshar: DM,
  luruhar: MM,
  lvertneqq: IM,
  lvnE: NM,
  macr: OM,
  male: LM,
  malt: FM,
  maltese: qM,
  Map: "⤅",
  map: PM,
  mapsto: BM,
  mapstodown: $M,
  mapstoleft: zM,
  mapstoup: UM,
  marker: HM,
  mcomma: jM,
  Mcy: VM,
  mcy: KM,
  mdash: GM,
  mDDot: ZM,
  measuredangle: WM,
  MediumSpace: JM,
  Mellintrf: YM,
  Mfr: XM,
  mfr: QM,
  mho: eI,
  micro: tI,
  midast: nI,
  midcir: sI,
  mid: rI,
  middot: oI,
  minusb: iI,
  minus: cI,
  minusd: aI,
  minusdu: lI,
  MinusPlus: uI,
  mlcp: fI,
  mldr: hI,
  mnplus: dI,
  models: pI,
  Mopf: gI,
  mopf: mI,
  mp: _I,
  mscr: bI,
  Mscr: vI,
  mstpos: yI,
  Mu: xI,
  mu: kI,
  multimap: EI,
  mumap: wI,
  nabla: CI,
  Nacute: AI,
  nacute: SI,
  nang: TI,
  nap: RI,
  napE: DI,
  napid: MI,
  napos: II,
  napprox: NI,
  natural: OI,
  naturals: LI,
  natur: FI,
  nbsp: qI,
  nbump: PI,
  nbumpe: BI,
  ncap: $I,
  Ncaron: zI,
  ncaron: UI,
  Ncedil: HI,
  ncedil: jI,
  ncong: VI,
  ncongdot: KI,
  ncup: GI,
  Ncy: ZI,
  ncy: WI,
  ndash: JI,
  nearhk: YI,
  nearr: XI,
  neArr: QI,
  nearrow: eN,
  ne: tN,
  nedot: nN,
  NegativeMediumSpace: sN,
  NegativeThickSpace: rN,
  NegativeThinSpace: oN,
  NegativeVeryThinSpace: iN,
  nequiv: cN,
  nesear: aN,
  nesim: lN,
  NestedGreaterGreater: uN,
  NestedLessLess: fN,
  NewLine: hN,
  nexist: dN,
  nexists: pN,
  Nfr: gN,
  nfr: mN,
  ngE: _N,
  nge: bN,
  ngeq: vN,
  ngeqq: yN,
  ngeqslant: xN,
  nges: kN,
  nGg: EN,
  ngsim: wN,
  nGt: CN,
  ngt: AN,
  ngtr: SN,
  nGtv: TN,
  nharr: RN,
  nhArr: DN,
  nhpar: MN,
  ni: IN,
  nis: NN,
  nisd: ON,
  niv: LN,
  NJcy: FN,
  njcy: qN,
  nlarr: PN,
  nlArr: BN,
  nldr: $N,
  nlE: zN,
  nle: UN,
  nleftarrow: HN,
  nLeftarrow: jN,
  nleftrightarrow: VN,
  nLeftrightarrow: KN,
  nleq: GN,
  nleqq: ZN,
  nleqslant: WN,
  nles: JN,
  nless: YN,
  nLl: XN,
  nlsim: QN,
  nLt: eO,
  nlt: tO,
  nltri: nO,
  nltrie: sO,
  nLtv: rO,
  nmid: oO,
  NoBreak: iO,
  NonBreakingSpace: cO,
  nopf: aO,
  Nopf: lO,
  Not: uO,
  not: fO,
  NotCongruent: hO,
  NotCupCap: dO,
  NotDoubleVerticalBar: pO,
  NotElement: gO,
  NotEqual: mO,
  NotEqualTilde: _O,
  NotExists: bO,
  NotGreater: vO,
  NotGreaterEqual: yO,
  NotGreaterFullEqual: xO,
  NotGreaterGreater: kO,
  NotGreaterLess: EO,
  NotGreaterSlantEqual: wO,
  NotGreaterTilde: CO,
  NotHumpDownHump: AO,
  NotHumpEqual: SO,
  notin: TO,
  notindot: RO,
  notinE: DO,
  notinva: MO,
  notinvb: IO,
  notinvc: NO,
  NotLeftTriangleBar: OO,
  NotLeftTriangle: LO,
  NotLeftTriangleEqual: FO,
  NotLess: qO,
  NotLessEqual: PO,
  NotLessGreater: BO,
  NotLessLess: $O,
  NotLessSlantEqual: zO,
  NotLessTilde: UO,
  NotNestedGreaterGreater: HO,
  NotNestedLessLess: jO,
  notni: VO,
  notniva: KO,
  notnivb: GO,
  notnivc: ZO,
  NotPrecedes: WO,
  NotPrecedesEqual: JO,
  NotPrecedesSlantEqual: YO,
  NotReverseElement: XO,
  NotRightTriangleBar: QO,
  NotRightTriangle: eL,
  NotRightTriangleEqual: tL,
  NotSquareSubset: nL,
  NotSquareSubsetEqual: sL,
  NotSquareSuperset: rL,
  NotSquareSupersetEqual: oL,
  NotSubset: iL,
  NotSubsetEqual: cL,
  NotSucceeds: aL,
  NotSucceedsEqual: lL,
  NotSucceedsSlantEqual: uL,
  NotSucceedsTilde: fL,
  NotSuperset: hL,
  NotSupersetEqual: dL,
  NotTilde: pL,
  NotTildeEqual: gL,
  NotTildeFullEqual: mL,
  NotTildeTilde: _L,
  NotVerticalBar: bL,
  nparallel: vL,
  npar: yL,
  nparsl: xL,
  npart: kL,
  npolint: EL,
  npr: wL,
  nprcue: CL,
  nprec: AL,
  npreceq: SL,
  npre: TL,
  nrarrc: RL,
  nrarr: DL,
  nrArr: ML,
  nrarrw: IL,
  nrightarrow: NL,
  nRightarrow: OL,
  nrtri: LL,
  nrtrie: FL,
  nsc: qL,
  nsccue: PL,
  nsce: BL,
  Nscr: $L,
  nscr: zL,
  nshortmid: UL,
  nshortparallel: HL,
  nsim: jL,
  nsime: VL,
  nsimeq: KL,
  nsmid: GL,
  nspar: ZL,
  nsqsube: WL,
  nsqsupe: JL,
  nsub: YL,
  nsubE: XL,
  nsube: QL,
  nsubset: eF,
  nsubseteq: tF,
  nsubseteqq: nF,
  nsucc: sF,
  nsucceq: rF,
  nsup: oF,
  nsupE: iF,
  nsupe: cF,
  nsupset: aF,
  nsupseteq: lF,
  nsupseteqq: uF,
  ntgl: fF,
  Ntilde: hF,
  ntilde: dF,
  ntlg: pF,
  ntriangleleft: gF,
  ntrianglelefteq: mF,
  ntriangleright: _F,
  ntrianglerighteq: bF,
  Nu: vF,
  nu: yF,
  num: xF,
  numero: kF,
  numsp: EF,
  nvap: wF,
  nvdash: CF,
  nvDash: AF,
  nVdash: SF,
  nVDash: TF,
  nvge: RF,
  nvgt: DF,
  nvHarr: MF,
  nvinfin: IF,
  nvlArr: NF,
  nvle: OF,
  nvlt: LF,
  nvltrie: FF,
  nvrArr: qF,
  nvrtrie: PF,
  nvsim: BF,
  nwarhk: $F,
  nwarr: zF,
  nwArr: UF,
  nwarrow: HF,
  nwnear: jF,
  Oacute: VF,
  oacute: KF,
  oast: GF,
  Ocirc: ZF,
  ocirc: WF,
  ocir: JF,
  Ocy: YF,
  ocy: XF,
  odash: QF,
  Odblac: e2,
  odblac: t2,
  odiv: n2,
  odot: s2,
  odsold: r2,
  OElig: o2,
  oelig: i2,
  ofcir: c2,
  Ofr: a2,
  ofr: l2,
  ogon: u2,
  Ograve: f2,
  ograve: h2,
  ogt: d2,
  ohbar: p2,
  ohm: g2,
  oint: m2,
  olarr: _2,
  olcir: b2,
  olcross: v2,
  oline: y2,
  olt: x2,
  Omacr: k2,
  omacr: E2,
  Omega: w2,
  omega: C2,
  Omicron: A2,
  omicron: S2,
  omid: T2,
  ominus: R2,
  Oopf: D2,
  oopf: M2,
  opar: I2,
  OpenCurlyDoubleQuote: N2,
  OpenCurlyQuote: O2,
  operp: L2,
  oplus: F2,
  orarr: q2,
  Or: P2,
  or: B2,
  ord: $2,
  order: z2,
  orderof: U2,
  ordf: H2,
  ordm: j2,
  origof: V2,
  oror: K2,
  orslope: G2,
  orv: Z2,
  oS: W2,
  Oscr: J2,
  oscr: Y2,
  Oslash: X2,
  oslash: Q2,
  osol: eq,
  Otilde: tq,
  otilde: nq,
  otimesas: sq,
  Otimes: rq,
  otimes: oq,
  Ouml: iq,
  ouml: cq,
  ovbar: aq,
  OverBar: lq,
  OverBrace: uq,
  OverBracket: fq,
  OverParenthesis: hq,
  para: dq,
  parallel: pq,
  par: gq,
  parsim: mq,
  parsl: _q,
  part: bq,
  PartialD: vq,
  Pcy: yq,
  pcy: xq,
  percnt: kq,
  period: Eq,
  permil: wq,
  perp: Cq,
  pertenk: Aq,
  Pfr: Sq,
  pfr: Tq,
  Phi: Rq,
  phi: Dq,
  phiv: Mq,
  phmmat: Iq,
  phone: Nq,
  Pi: Oq,
  pi: Lq,
  pitchfork: Fq,
  piv: qq,
  planck: Pq,
  planckh: Bq,
  plankv: $q,
  plusacir: zq,
  plusb: Uq,
  pluscir: Hq,
  plus: jq,
  plusdo: Vq,
  plusdu: Kq,
  pluse: Gq,
  PlusMinus: Zq,
  plusmn: Wq,
  plussim: Jq,
  plustwo: Yq,
  pm: Xq,
  Poincareplane: Qq,
  pointint: eP,
  popf: tP,
  Popf: nP,
  pound: sP,
  prap: rP,
  Pr: oP,
  pr: iP,
  prcue: cP,
  precapprox: aP,
  prec: lP,
  preccurlyeq: uP,
  Precedes: fP,
  PrecedesEqual: hP,
  PrecedesSlantEqual: dP,
  PrecedesTilde: pP,
  preceq: gP,
  precnapprox: mP,
  precneqq: _P,
  precnsim: bP,
  pre: vP,
  prE: yP,
  precsim: xP,
  prime: kP,
  Prime: EP,
  primes: wP,
  prnap: CP,
  prnE: AP,
  prnsim: SP,
  prod: TP,
  Product: RP,
  profalar: DP,
  profline: MP,
  profsurf: IP,
  prop: NP,
  Proportional: OP,
  Proportion: LP,
  propto: FP,
  prsim: qP,
  prurel: PP,
  Pscr: BP,
  pscr: $P,
  Psi: zP,
  psi: UP,
  puncsp: HP,
  Qfr: jP,
  qfr: VP,
  qint: KP,
  qopf: GP,
  Qopf: ZP,
  qprime: WP,
  Qscr: JP,
  qscr: YP,
  quaternions: XP,
  quatint: QP,
  quest: eB,
  questeq: tB,
  quot: nB,
  QUOT: sB,
  rAarr: rB,
  race: oB,
  Racute: iB,
  racute: cB,
  radic: aB,
  raemptyv: lB,
  rang: uB,
  Rang: fB,
  rangd: hB,
  range: dB,
  rangle: pB,
  raquo: gB,
  rarrap: mB,
  rarrb: _B,
  rarrbfs: bB,
  rarrc: vB,
  rarr: yB,
  Rarr: xB,
  rArr: kB,
  rarrfs: EB,
  rarrhk: wB,
  rarrlp: CB,
  rarrpl: AB,
  rarrsim: SB,
  Rarrtl: TB,
  rarrtl: RB,
  rarrw: DB,
  ratail: MB,
  rAtail: IB,
  ratio: NB,
  rationals: OB,
  rbarr: LB,
  rBarr: FB,
  RBarr: qB,
  rbbrk: PB,
  rbrace: BB,
  rbrack: $B,
  rbrke: zB,
  rbrksld: UB,
  rbrkslu: HB,
  Rcaron: jB,
  rcaron: VB,
  Rcedil: KB,
  rcedil: GB,
  rceil: ZB,
  rcub: WB,
  Rcy: JB,
  rcy: YB,
  rdca: XB,
  rdldhar: QB,
  rdquo: e$,
  rdquor: t$,
  rdsh: n$,
  real: s$,
  realine: r$,
  realpart: o$,
  reals: i$,
  Re: c$,
  rect: a$,
  reg: l$,
  REG: u$,
  ReverseElement: f$,
  ReverseEquilibrium: h$,
  ReverseUpEquilibrium: d$,
  rfisht: p$,
  rfloor: g$,
  rfr: m$,
  Rfr: _$,
  rHar: b$,
  rhard: v$,
  rharu: y$,
  rharul: x$,
  Rho: k$,
  rho: E$,
  rhov: w$,
  RightAngleBracket: C$,
  RightArrowBar: A$,
  rightarrow: S$,
  RightArrow: T$,
  Rightarrow: R$,
  RightArrowLeftArrow: D$,
  rightarrowtail: M$,
  RightCeiling: I$,
  RightDoubleBracket: N$,
  RightDownTeeVector: O$,
  RightDownVectorBar: L$,
  RightDownVector: F$,
  RightFloor: q$,
  rightharpoondown: P$,
  rightharpoonup: B$,
  rightleftarrows: $$,
  rightleftharpoons: z$,
  rightrightarrows: U$,
  rightsquigarrow: H$,
  RightTeeArrow: j$,
  RightTee: V$,
  RightTeeVector: K$,
  rightthreetimes: G$,
  RightTriangleBar: Z$,
  RightTriangle: W$,
  RightTriangleEqual: J$,
  RightUpDownVector: Y$,
  RightUpTeeVector: X$,
  RightUpVectorBar: Q$,
  RightUpVector: ez,
  RightVectorBar: tz,
  RightVector: nz,
  ring: sz,
  risingdotseq: rz,
  rlarr: oz,
  rlhar: iz,
  rlm: cz,
  rmoustache: az,
  rmoust: lz,
  rnmid: uz,
  roang: fz,
  roarr: hz,
  robrk: dz,
  ropar: pz,
  ropf: gz,
  Ropf: mz,
  roplus: _z,
  rotimes: bz,
  RoundImplies: vz,
  rpar: yz,
  rpargt: xz,
  rppolint: kz,
  rrarr: Ez,
  Rrightarrow: wz,
  rsaquo: Cz,
  rscr: Az,
  Rscr: Sz,
  rsh: Tz,
  Rsh: Rz,
  rsqb: Dz,
  rsquo: Mz,
  rsquor: Iz,
  rthree: Nz,
  rtimes: Oz,
  rtri: Lz,
  rtrie: Fz,
  rtrif: qz,
  rtriltri: Pz,
  RuleDelayed: Bz,
  ruluhar: $z,
  rx: zz,
  Sacute: Uz,
  sacute: Hz,
  sbquo: jz,
  scap: Vz,
  Scaron: Kz,
  scaron: Gz,
  Sc: Zz,
  sc: Wz,
  sccue: Jz,
  sce: Yz,
  scE: Xz,
  Scedil: Qz,
  scedil: e3,
  Scirc: t3,
  scirc: n3,
  scnap: s3,
  scnE: r3,
  scnsim: o3,
  scpolint: i3,
  scsim: c3,
  Scy: a3,
  scy: l3,
  sdotb: u3,
  sdot: f3,
  sdote: h3,
  searhk: d3,
  searr: p3,
  seArr: g3,
  searrow: m3,
  sect: _3,
  semi: b3,
  seswar: v3,
  setminus: y3,
  setmn: x3,
  sext: k3,
  Sfr: E3,
  sfr: w3,
  sfrown: C3,
  sharp: A3,
  SHCHcy: S3,
  shchcy: T3,
  SHcy: R3,
  shcy: D3,
  ShortDownArrow: M3,
  ShortLeftArrow: I3,
  shortmid: N3,
  shortparallel: O3,
  ShortRightArrow: L3,
  ShortUpArrow: F3,
  shy: q3,
  Sigma: P3,
  sigma: B3,
  sigmaf: $3,
  sigmav: z3,
  sim: U3,
  simdot: H3,
  sime: j3,
  simeq: V3,
  simg: K3,
  simgE: G3,
  siml: Z3,
  simlE: W3,
  simne: J3,
  simplus: Y3,
  simrarr: X3,
  slarr: Q3,
  SmallCircle: eU,
  smallsetminus: tU,
  smashp: nU,
  smeparsl: sU,
  smid: rU,
  smile: oU,
  smt: iU,
  smte: cU,
  smtes: aU,
  SOFTcy: lU,
  softcy: uU,
  solbar: fU,
  solb: hU,
  sol: dU,
  Sopf: pU,
  sopf: gU,
  spades: mU,
  spadesuit: _U,
  spar: bU,
  sqcap: vU,
  sqcaps: yU,
  sqcup: xU,
  sqcups: kU,
  Sqrt: EU,
  sqsub: wU,
  sqsube: CU,
  sqsubset: AU,
  sqsubseteq: SU,
  sqsup: TU,
  sqsupe: RU,
  sqsupset: DU,
  sqsupseteq: MU,
  square: IU,
  Square: NU,
  SquareIntersection: OU,
  SquareSubset: LU,
  SquareSubsetEqual: FU,
  SquareSuperset: qU,
  SquareSupersetEqual: PU,
  SquareUnion: BU,
  squarf: $U,
  squ: zU,
  squf: UU,
  srarr: HU,
  Sscr: jU,
  sscr: VU,
  ssetmn: KU,
  ssmile: GU,
  sstarf: ZU,
  Star: WU,
  star: JU,
  starf: YU,
  straightepsilon: XU,
  straightphi: QU,
  strns: e6,
  sub: t6,
  Sub: n6,
  subdot: s6,
  subE: r6,
  sube: o6,
  subedot: i6,
  submult: c6,
  subnE: a6,
  subne: l6,
  subplus: u6,
  subrarr: f6,
  subset: h6,
  Subset: d6,
  subseteq: p6,
  subseteqq: g6,
  SubsetEqual: m6,
  subsetneq: _6,
  subsetneqq: b6,
  subsim: v6,
  subsub: y6,
  subsup: x6,
  succapprox: k6,
  succ: E6,
  succcurlyeq: w6,
  Succeeds: C6,
  SucceedsEqual: A6,
  SucceedsSlantEqual: S6,
  SucceedsTilde: T6,
  succeq: R6,
  succnapprox: D6,
  succneqq: M6,
  succnsim: I6,
  succsim: N6,
  SuchThat: O6,
  sum: L6,
  Sum: F6,
  sung: q6,
  sup1: P6,
  sup2: B6,
  sup3: $6,
  sup: z6,
  Sup: U6,
  supdot: H6,
  supdsub: j6,
  supE: V6,
  supe: K6,
  supedot: G6,
  Superset: Z6,
  SupersetEqual: W6,
  suphsol: J6,
  suphsub: Y6,
  suplarr: X6,
  supmult: Q6,
  supnE: e5,
  supne: t5,
  supplus: n5,
  supset: s5,
  Supset: r5,
  supseteq: o5,
  supseteqq: i5,
  supsetneq: c5,
  supsetneqq: a5,
  supsim: l5,
  supsub: u5,
  supsup: f5,
  swarhk: h5,
  swarr: d5,
  swArr: p5,
  swarrow: g5,
  swnwar: m5,
  szlig: _5,
  Tab: b5,
  target: v5,
  Tau: y5,
  tau: x5,
  tbrk: k5,
  Tcaron: E5,
  tcaron: w5,
  Tcedil: C5,
  tcedil: A5,
  Tcy: S5,
  tcy: T5,
  tdot: R5,
  telrec: D5,
  Tfr: M5,
  tfr: I5,
  there4: N5,
  therefore: O5,
  Therefore: L5,
  Theta: F5,
  theta: q5,
  thetasym: P5,
  thetav: B5,
  thickapprox: $5,
  thicksim: z5,
  ThickSpace: U5,
  ThinSpace: H5,
  thinsp: j5,
  thkap: V5,
  thksim: K5,
  THORN: G5,
  thorn: Z5,
  tilde: W5,
  Tilde: J5,
  TildeEqual: Y5,
  TildeFullEqual: X5,
  TildeTilde: Q5,
  timesbar: eH,
  timesb: tH,
  times: nH,
  timesd: sH,
  tint: rH,
  toea: oH,
  topbot: iH,
  topcir: cH,
  top: aH,
  Topf: lH,
  topf: uH,
  topfork: fH,
  tosa: hH,
  tprime: dH,
  trade: pH,
  TRADE: gH,
  triangle: mH,
  triangledown: _H,
  triangleleft: bH,
  trianglelefteq: vH,
  triangleq: yH,
  triangleright: xH,
  trianglerighteq: kH,
  tridot: EH,
  trie: wH,
  triminus: CH,
  TripleDot: AH,
  triplus: SH,
  trisb: TH,
  tritime: RH,
  trpezium: DH,
  Tscr: MH,
  tscr: IH,
  TScy: NH,
  tscy: OH,
  TSHcy: LH,
  tshcy: FH,
  Tstrok: qH,
  tstrok: PH,
  twixt: BH,
  twoheadleftarrow: $H,
  twoheadrightarrow: zH,
  Uacute: UH,
  uacute: HH,
  uarr: jH,
  Uarr: VH,
  uArr: KH,
  Uarrocir: GH,
  Ubrcy: ZH,
  ubrcy: WH,
  Ubreve: JH,
  ubreve: YH,
  Ucirc: XH,
  ucirc: QH,
  Ucy: e4,
  ucy: t4,
  udarr: n4,
  Udblac: s4,
  udblac: r4,
  udhar: o4,
  ufisht: i4,
  Ufr: c4,
  ufr: a4,
  Ugrave: l4,
  ugrave: u4,
  uHar: f4,
  uharl: h4,
  uharr: d4,
  uhblk: p4,
  ulcorn: g4,
  ulcorner: m4,
  ulcrop: _4,
  ultri: b4,
  Umacr: v4,
  umacr: y4,
  uml: x4,
  UnderBar: k4,
  UnderBrace: E4,
  UnderBracket: w4,
  UnderParenthesis: C4,
  Union: A4,
  UnionPlus: S4,
  Uogon: T4,
  uogon: R4,
  Uopf: D4,
  uopf: M4,
  UpArrowBar: I4,
  uparrow: N4,
  UpArrow: O4,
  Uparrow: L4,
  UpArrowDownArrow: F4,
  updownarrow: q4,
  UpDownArrow: P4,
  Updownarrow: B4,
  UpEquilibrium: $4,
  upharpoonleft: z4,
  upharpoonright: U4,
  uplus: H4,
  UpperLeftArrow: j4,
  UpperRightArrow: V4,
  upsi: K4,
  Upsi: G4,
  upsih: Z4,
  Upsilon: W4,
  upsilon: J4,
  UpTeeArrow: Y4,
  UpTee: X4,
  upuparrows: Q4,
  urcorn: e8,
  urcorner: t8,
  urcrop: n8,
  Uring: s8,
  uring: r8,
  urtri: o8,
  Uscr: i8,
  uscr: c8,
  utdot: a8,
  Utilde: l8,
  utilde: u8,
  utri: f8,
  utrif: h8,
  uuarr: d8,
  Uuml: p8,
  uuml: g8,
  uwangle: m8,
  vangrt: _8,
  varepsilon: b8,
  varkappa: v8,
  varnothing: y8,
  varphi: x8,
  varpi: k8,
  varpropto: E8,
  varr: w8,
  vArr: C8,
  varrho: A8,
  varsigma: S8,
  varsubsetneq: T8,
  varsubsetneqq: R8,
  varsupsetneq: D8,
  varsupsetneqq: M8,
  vartheta: I8,
  vartriangleleft: N8,
  vartriangleright: O8,
  vBar: L8,
  Vbar: F8,
  vBarv: q8,
  Vcy: P8,
  vcy: B8,
  vdash: $8,
  vDash: z8,
  Vdash: U8,
  VDash: H8,
  Vdashl: j8,
  veebar: V8,
  vee: K8,
  Vee: G8,
  veeeq: Z8,
  vellip: W8,
  verbar: J8,
  Verbar: Y8,
  vert: X8,
  Vert: Q8,
  VerticalBar: e9,
  VerticalLine: t9,
  VerticalSeparator: n9,
  VerticalTilde: s9,
  VeryThinSpace: r9,
  Vfr: o9,
  vfr: i9,
  vltri: c9,
  vnsub: a9,
  vnsup: l9,
  Vopf: u9,
  vopf: f9,
  vprop: h9,
  vrtri: d9,
  Vscr: p9,
  vscr: g9,
  vsubnE: m9,
  vsubne: _9,
  vsupnE: b9,
  vsupne: v9,
  Vvdash: y9,
  vzigzag: x9,
  Wcirc: k9,
  wcirc: E9,
  wedbar: w9,
  wedge: C9,
  Wedge: A9,
  wedgeq: S9,
  weierp: T9,
  Wfr: R9,
  wfr: D9,
  Wopf: M9,
  wopf: I9,
  wp: N9,
  wr: O9,
  wreath: L9,
  Wscr: F9,
  wscr: q9,
  xcap: P9,
  xcirc: B9,
  xcup: $9,
  xdtri: z9,
  Xfr: U9,
  xfr: H9,
  xharr: j9,
  xhArr: V9,
  Xi: K9,
  xi: G9,
  xlarr: Z9,
  xlArr: W9,
  xmap: J9,
  xnis: Y9,
  xodot: X9,
  Xopf: Q9,
  xopf: ej,
  xoplus: tj,
  xotime: nj,
  xrarr: sj,
  xrArr: rj,
  Xscr: oj,
  xscr: ij,
  xsqcup: cj,
  xuplus: aj,
  xutri: lj,
  xvee: uj,
  xwedge: fj,
  Yacute: hj,
  yacute: dj,
  YAcy: pj,
  yacy: gj,
  Ycirc: mj,
  ycirc: _j,
  Ycy: bj,
  ycy: vj,
  yen: yj,
  Yfr: xj,
  yfr: kj,
  YIcy: Ej,
  yicy: wj,
  Yopf: Cj,
  yopf: Aj,
  Yscr: Sj,
  yscr: Tj,
  YUcy: Rj,
  yucy: Dj,
  yuml: Mj,
  Yuml: Ij,
  Zacute: Nj,
  zacute: Oj,
  Zcaron: Lj,
  zcaron: Fj,
  Zcy: qj,
  zcy: Pj,
  Zdot: Bj,
  zdot: $j,
  zeetrf: zj,
  ZeroWidthSpace: Uj,
  Zeta: Hj,
  zeta: jj,
  zfr: Vj,
  Zfr: Kj,
  ZHcy: Gj,
  zhcy: Zj,
  zigrarr: Wj,
  zopf: Jj,
  Zopf: Yj,
  Zscr: Xj,
  zscr: Qj,
  zwj: eV,
  zwnj: tV
};
var kr, bc;
function hu() {
  return bc || (bc = 1, kr = nV), kr;
}
var Er, vc;
function li() {
  return vc || (vc = 1, Er = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/), Er;
}
var vn = {}, wr, yc;
function sV() {
  if (yc) return wr;
  yc = 1;
  var e = {};
  function t(s) {
    var r, o, i = e[s];
    if (i)
      return i;
    for (i = e[s] = [], r = 0; r < 128; r++)
      o = String.fromCharCode(r), /^[0-9a-z]$/i.test(o) ? i.push(o) : i.push("%" + ("0" + r.toString(16).toUpperCase()).slice(-2));
    for (r = 0; r < s.length; r++)
      i[s.charCodeAt(r)] = s[r];
    return i;
  }
  function n(s, r, o) {
    var i, c, a, u, l, f = "";
    for (typeof r != "string" && (o = r, r = n.defaultChars), typeof o > "u" && (o = !0), l = t(r), i = 0, c = s.length; i < c; i++) {
      if (a = s.charCodeAt(i), o && a === 37 && i + 2 < c && /^[0-9a-f]{2}$/i.test(s.slice(i + 1, i + 3))) {
        f += s.slice(i, i + 3), i += 2;
        continue;
      }
      if (a < 128) {
        f += l[a];
        continue;
      }
      if (a >= 55296 && a <= 57343) {
        if (a >= 55296 && a <= 56319 && i + 1 < c && (u = s.charCodeAt(i + 1), u >= 56320 && u <= 57343)) {
          f += encodeURIComponent(s[i] + s[i + 1]), i++;
          continue;
        }
        f += "%EF%BF%BD";
        continue;
      }
      f += encodeURIComponent(s[i]);
    }
    return f;
  }
  return n.defaultChars = ";/?:@&=+$,-_.!~*'()#", n.componentChars = "-_.!~*'()", wr = n, wr;
}
var Cr, xc;
function rV() {
  if (xc) return Cr;
  xc = 1;
  var e = {};
  function t(s) {
    var r, o, i = e[s];
    if (i)
      return i;
    for (i = e[s] = [], r = 0; r < 128; r++)
      o = String.fromCharCode(r), i.push(o);
    for (r = 0; r < s.length; r++)
      o = s.charCodeAt(r), i[o] = "%" + ("0" + o.toString(16).toUpperCase()).slice(-2);
    return i;
  }
  function n(s, r) {
    var o;
    return typeof r != "string" && (r = n.defaultChars), o = t(r), s.replace(/(%[a-f0-9]{2})+/gi, function(i) {
      var c, a, u, l, f, d, h, v = "";
      for (c = 0, a = i.length; c < a; c += 3) {
        if (u = parseInt(i.slice(c + 1, c + 3), 16), u < 128) {
          v += o[u];
          continue;
        }
        if ((u & 224) === 192 && c + 3 < a && (l = parseInt(i.slice(c + 4, c + 6), 16), (l & 192) === 128)) {
          h = u << 6 & 1984 | l & 63, h < 128 ? v += "��" : v += String.fromCharCode(h), c += 3;
          continue;
        }
        if ((u & 240) === 224 && c + 6 < a && (l = parseInt(i.slice(c + 4, c + 6), 16), f = parseInt(i.slice(c + 7, c + 9), 16), (l & 192) === 128 && (f & 192) === 128)) {
          h = u << 12 & 61440 | l << 6 & 4032 | f & 63, h < 2048 || h >= 55296 && h <= 57343 ? v += "���" : v += String.fromCharCode(h), c += 6;
          continue;
        }
        if ((u & 248) === 240 && c + 9 < a && (l = parseInt(i.slice(c + 4, c + 6), 16), f = parseInt(i.slice(c + 7, c + 9), 16), d = parseInt(i.slice(c + 10, c + 12), 16), (l & 192) === 128 && (f & 192) === 128 && (d & 192) === 128)) {
          h = u << 18 & 1835008 | l << 12 & 258048 | f << 6 & 4032 | d & 63, h < 65536 || h > 1114111 ? v += "����" : (h -= 65536, v += String.fromCharCode(55296 + (h >> 10), 56320 + (h & 1023))), c += 9;
          continue;
        }
        v += "�";
      }
      return v;
    });
  }
  return n.defaultChars = ";/?:@&=+$,#", n.componentChars = "", Cr = n, Cr;
}
var Ar, kc;
function oV() {
  return kc || (kc = 1, Ar = function(t) {
    var n = "";
    return n += t.protocol || "", n += t.slashes ? "//" : "", n += t.auth ? t.auth + "@" : "", t.hostname && t.hostname.indexOf(":") !== -1 ? n += "[" + t.hostname + "]" : n += t.hostname || "", n += t.port ? ":" + t.port : "", n += t.pathname || "", n += t.search || "", n += t.hash || "", n;
  }), Ar;
}
var Sr, Ec;
function iV() {
  if (Ec) return Sr;
  Ec = 1;
  function e() {
    this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
  }
  var t = /^([a-z0-9.+-]+:)/i, n = /:[0-9]*$/, s = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, r = ["<", ">", '"', "`", " ", "\r", `
`, "	"], o = ["{", "}", "|", "\\", "^", "`"].concat(r), i = ["'"].concat(o), c = ["%", "/", "?", ";", "#"].concat(i), a = ["/", "?", "#"], u = 255, l = /^[+a-z0-9A-Z_-]{0,63}$/, f = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, d = {
    javascript: !0,
    "javascript:": !0
  }, h = {
    http: !0,
    https: !0,
    ftp: !0,
    gopher: !0,
    file: !0,
    "http:": !0,
    "https:": !0,
    "ftp:": !0,
    "gopher:": !0,
    "file:": !0
  };
  function v(x, C) {
    if (x && x instanceof e)
      return x;
    var m = new e();
    return m.parse(x, C), m;
  }
  return e.prototype.parse = function(x, C) {
    var m, k, b, p, E, w = x;
    if (w = w.trim(), !C && x.split("#").length === 1) {
      var $ = s.exec(w);
      if ($)
        return this.pathname = $[1], $[2] && (this.search = $[2]), this;
    }
    var R = t.exec(w);
    if (R && (R = R[0], b = R.toLowerCase(), this.protocol = R, w = w.substr(R.length)), (C || R || w.match(/^\/\/[^@\/]+@[^@\/]+/)) && (E = w.substr(0, 2) === "//", E && !(R && d[R]) && (w = w.substr(2), this.slashes = !0)), !d[R] && (E || R && !h[R])) {
      var D = -1;
      for (m = 0; m < a.length; m++)
        p = w.indexOf(a[m]), p !== -1 && (D === -1 || p < D) && (D = p);
      var A, N;
      for (D === -1 ? N = w.lastIndexOf("@") : N = w.lastIndexOf("@", D), N !== -1 && (A = w.slice(0, N), w = w.slice(N + 1), this.auth = A), D = -1, m = 0; m < c.length; m++)
        p = w.indexOf(c[m]), p !== -1 && (D === -1 || p < D) && (D = p);
      D === -1 && (D = w.length), w[D - 1] === ":" && D--;
      var I = w.slice(0, D);
      w = w.slice(D), this.parseHost(I), this.hostname = this.hostname || "";
      var ee = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
      if (!ee) {
        var T = this.hostname.split(/\./);
        for (m = 0, k = T.length; m < k; m++) {
          var ie = T[m];
          if (ie && !ie.match(l)) {
            for (var Q = "", le = 0, G = ie.length; le < G; le++)
              ie.charCodeAt(le) > 127 ? Q += "x" : Q += ie[le];
            if (!Q.match(l)) {
              var fe = T.slice(0, m), Z = T.slice(m + 1), we = ie.match(f);
              we && (fe.push(we[1]), Z.unshift(we[2])), Z.length && (w = Z.join(".") + w), this.hostname = fe.join(".");
              break;
            }
          }
        }
      }
      this.hostname.length > u && (this.hostname = ""), ee && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
    }
    var Ce = w.indexOf("#");
    Ce !== -1 && (this.hash = w.substr(Ce), w = w.slice(0, Ce));
    var rt = w.indexOf("?");
    return rt !== -1 && (this.search = w.substr(rt), w = w.slice(0, rt)), w && (this.pathname = w), h[b] && this.hostname && !this.pathname && (this.pathname = ""), this;
  }, e.prototype.parseHost = function(x) {
    var C = n.exec(x);
    C && (C = C[0], C !== ":" && (this.port = C.substr(1)), x = x.substr(0, x.length - C.length)), x && (this.hostname = x);
  }, Sr = v, Sr;
}
var wc;
function du() {
  return wc || (wc = 1, vn.encode = sV(), vn.decode = rV(), vn.format = oV(), vn.parse = iV()), vn;
}
var un = {}, Tr, Cc;
function pu() {
  return Cc || (Cc = 1, Tr = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/), Tr;
}
var Rr, Ac;
function gu() {
  return Ac || (Ac = 1, Rr = /[\0-\x1F\x7F-\x9F]/), Rr;
}
var Dr, Sc;
function cV() {
  return Sc || (Sc = 1, Dr = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/), Dr;
}
var Mr, Tc;
function mu() {
  return Tc || (Tc = 1, Mr = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/), Mr;
}
var Rc;
function aV() {
  return Rc || (Rc = 1, un.Any = pu(), un.Cc = gu(), un.Cf = cV(), un.P = li(), un.Z = mu()), un;
}
var Dc;
function ke() {
  return Dc || (Dc = 1, (function(e) {
    function t(T) {
      return Object.prototype.toString.call(T);
    }
    function n(T) {
      return t(T) === "[object String]";
    }
    var s = Object.prototype.hasOwnProperty;
    function r(T, ie) {
      return s.call(T, ie);
    }
    function o(T) {
      var ie = Array.prototype.slice.call(arguments, 1);
      return ie.forEach(function(Q) {
        if (Q) {
          if (typeof Q != "object")
            throw new TypeError(Q + "must be object");
          Object.keys(Q).forEach(function(le) {
            T[le] = Q[le];
          });
        }
      }), T;
    }
    function i(T, ie, Q) {
      return [].concat(T.slice(0, ie), Q, T.slice(ie + 1));
    }
    function c(T) {
      return !(T >= 55296 && T <= 57343 || T >= 64976 && T <= 65007 || (T & 65535) === 65535 || (T & 65535) === 65534 || T >= 0 && T <= 8 || T === 11 || T >= 14 && T <= 31 || T >= 127 && T <= 159 || T > 1114111);
    }
    function a(T) {
      if (T > 65535) {
        T -= 65536;
        var ie = 55296 + (T >> 10), Q = 56320 + (T & 1023);
        return String.fromCharCode(ie, Q);
      }
      return String.fromCharCode(T);
    }
    var u = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g, l = /&([a-z#][a-z0-9]{1,31});/gi, f = new RegExp(u.source + "|" + l.source, "gi"), d = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i, h = hu();
    function v(T, ie) {
      var Q;
      return r(h, ie) ? h[ie] : ie.charCodeAt(0) === 35 && d.test(ie) && (Q = ie[1].toLowerCase() === "x" ? parseInt(ie.slice(2), 16) : parseInt(ie.slice(1), 10), c(Q)) ? a(Q) : T;
    }
    function x(T) {
      return T.indexOf("\\") < 0 ? T : T.replace(u, "$1");
    }
    function C(T) {
      return T.indexOf("\\") < 0 && T.indexOf("&") < 0 ? T : T.replace(f, function(ie, Q, le) {
        return Q || v(ie, le);
      });
    }
    var m = /[&<>"]/, k = /[&<>"]/g, b = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    };
    function p(T) {
      return b[T];
    }
    function E(T) {
      return m.test(T) ? T.replace(k, p) : T;
    }
    var w = /[.?*+^$[\]\\(){}|-]/g;
    function $(T) {
      return T.replace(w, "\\$&");
    }
    function R(T) {
      switch (T) {
        case 9:
        case 32:
          return !0;
      }
      return !1;
    }
    function D(T) {
      if (T >= 8192 && T <= 8202)
        return !0;
      switch (T) {
        case 9:
        // \t
        case 10:
        // \n
        case 11:
        // \v
        case 12:
        // \f
        case 13:
        // \r
        case 32:
        case 160:
        case 5760:
        case 8239:
        case 8287:
        case 12288:
          return !0;
      }
      return !1;
    }
    var A = li();
    function N(T) {
      return A.test(T);
    }
    function I(T) {
      switch (T) {
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 58:
        case 59:
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 123:
        case 124:
        case 125:
        case 126:
          return !0;
        default:
          return !1;
      }
    }
    function ee(T) {
      return T = T.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (T = T.replace(/ẞ/g, "ß")), T.toLowerCase().toUpperCase();
    }
    e.lib = {}, e.lib.mdurl = du(), e.lib.ucmicro = aV(), e.assign = o, e.isString = n, e.has = r, e.unescapeMd = x, e.unescapeAll = C, e.isValidEntityCode = c, e.fromCodePoint = a, e.escapeHtml = E, e.arrayReplaceAt = i, e.isSpace = R, e.isWhiteSpace = D, e.isMdAsciiPunct = I, e.isPunctChar = N, e.escapeRE = $, e.normalizeReference = ee;
  })(xr)), xr;
}
var Bn = {}, Ir, Mc;
function lV() {
  return Mc || (Mc = 1, Ir = function(t, n, s) {
    var r, o, i, c, a = -1, u = t.posMax, l = t.pos;
    for (t.pos = n + 1, r = 1; t.pos < u; ) {
      if (i = t.src.charCodeAt(t.pos), i === 93 && (r--, r === 0)) {
        o = !0;
        break;
      }
      if (c = t.pos, t.md.inline.skipToken(t), i === 91) {
        if (c === t.pos - 1)
          r++;
        else if (s)
          return t.pos = l, -1;
      }
    }
    return o && (a = t.pos), t.pos = l, a;
  }), Ir;
}
var Nr, Ic;
function uV() {
  if (Ic) return Nr;
  Ic = 1;
  var e = ke().unescapeAll;
  return Nr = function(n, s, r) {
    var o, i, c = s, a = {
      ok: !1,
      pos: 0,
      lines: 0,
      str: ""
    };
    if (n.charCodeAt(c) === 60) {
      for (c++; c < r; ) {
        if (o = n.charCodeAt(c), o === 10 || o === 60)
          return a;
        if (o === 62)
          return a.pos = c + 1, a.str = e(n.slice(s + 1, c)), a.ok = !0, a;
        if (o === 92 && c + 1 < r) {
          c += 2;
          continue;
        }
        c++;
      }
      return a;
    }
    for (i = 0; c < r && (o = n.charCodeAt(c), !(o === 32 || o < 32 || o === 127)); ) {
      if (o === 92 && c + 1 < r) {
        if (n.charCodeAt(c + 1) === 32)
          break;
        c += 2;
        continue;
      }
      if (o === 40 && (i++, i > 32))
        return a;
      if (o === 41) {
        if (i === 0)
          break;
        i--;
      }
      c++;
    }
    return s === c || i !== 0 || (a.str = e(n.slice(s, c)), a.pos = c, a.ok = !0), a;
  }, Nr;
}
var Or, Nc;
function fV() {
  if (Nc) return Or;
  Nc = 1;
  var e = ke().unescapeAll;
  return Or = function(n, s, r) {
    var o, i, c = 0, a = s, u = {
      ok: !1,
      pos: 0,
      lines: 0,
      str: ""
    };
    if (a >= r || (i = n.charCodeAt(a), i !== 34 && i !== 39 && i !== 40))
      return u;
    for (a++, i === 40 && (i = 41); a < r; ) {
      if (o = n.charCodeAt(a), o === i)
        return u.pos = a + 1, u.lines = c, u.str = e(n.slice(s + 1, a)), u.ok = !0, u;
      if (o === 40 && i === 41)
        return u;
      o === 10 ? c++ : o === 92 && a + 1 < r && (a++, n.charCodeAt(a) === 10 && c++), a++;
    }
    return u;
  }, Or;
}
var Oc;
function hV() {
  return Oc || (Oc = 1, Bn.parseLinkLabel = lV(), Bn.parseLinkDestination = uV(), Bn.parseLinkTitle = fV()), Bn;
}
var Lr, Lc;
function dV() {
  if (Lc) return Lr;
  Lc = 1;
  var e = ke().assign, t = ke().unescapeAll, n = ke().escapeHtml, s = {};
  s.code_inline = function(o, i, c, a, u) {
    var l = o[i];
    return "<code" + u.renderAttrs(l) + ">" + n(l.content) + "</code>";
  }, s.code_block = function(o, i, c, a, u) {
    var l = o[i];
    return "<pre" + u.renderAttrs(l) + "><code>" + n(o[i].content) + `</code></pre>
`;
  }, s.fence = function(o, i, c, a, u) {
    var l = o[i], f = l.info ? t(l.info).trim() : "", d = "", h = "", v, x, C, m, k;
    return f && (C = f.split(/(\s+)/g), d = C[0], h = C.slice(2).join("")), c.highlight ? v = c.highlight(l.content, d, h) || n(l.content) : v = n(l.content), v.indexOf("<pre") === 0 ? v + `
` : f ? (x = l.attrIndex("class"), m = l.attrs ? l.attrs.slice() : [], x < 0 ? m.push(["class", c.langPrefix + d]) : (m[x] = m[x].slice(), m[x][1] += " " + c.langPrefix + d), k = {
      attrs: m
    }, "<pre><code" + u.renderAttrs(k) + ">" + v + `</code></pre>
`) : "<pre><code" + u.renderAttrs(l) + ">" + v + `</code></pre>
`;
  }, s.image = function(o, i, c, a, u) {
    var l = o[i];
    return l.attrs[l.attrIndex("alt")][1] = u.renderInlineAsText(l.children, c, a), u.renderToken(o, i, c);
  }, s.hardbreak = function(o, i, c) {
    return c.xhtmlOut ? `<br />
` : `<br>
`;
  }, s.softbreak = function(o, i, c) {
    return c.breaks ? c.xhtmlOut ? `<br />
` : `<br>
` : `
`;
  }, s.text = function(o, i) {
    return n(o[i].content);
  }, s.html_block = function(o, i) {
    return o[i].content;
  }, s.html_inline = function(o, i) {
    return o[i].content;
  };
  function r() {
    this.rules = e({}, s);
  }
  return r.prototype.renderAttrs = function(i) {
    var c, a, u;
    if (!i.attrs)
      return "";
    for (u = "", c = 0, a = i.attrs.length; c < a; c++)
      u += " " + n(i.attrs[c][0]) + '="' + n(i.attrs[c][1]) + '"';
    return u;
  }, r.prototype.renderToken = function(i, c, a) {
    var u, l = "", f = !1, d = i[c];
    return d.hidden ? "" : (d.block && d.nesting !== -1 && c && i[c - 1].hidden && (l += `
`), l += (d.nesting === -1 ? "</" : "<") + d.tag, l += this.renderAttrs(d), d.nesting === 0 && a.xhtmlOut && (l += " /"), d.block && (f = !0, d.nesting === 1 && c + 1 < i.length && (u = i[c + 1], (u.type === "inline" || u.hidden || u.nesting === -1 && u.tag === d.tag) && (f = !1))), l += f ? `>
` : ">", l);
  }, r.prototype.renderInline = function(o, i, c) {
    for (var a, u = "", l = this.rules, f = 0, d = o.length; f < d; f++)
      a = o[f].type, typeof l[a] < "u" ? u += l[a](o, f, i, c, this) : u += this.renderToken(o, f, i);
    return u;
  }, r.prototype.renderInlineAsText = function(o, i, c) {
    for (var a = "", u = 0, l = o.length; u < l; u++)
      o[u].type === "text" ? a += o[u].content : o[u].type === "image" ? a += this.renderInlineAsText(o[u].children, i, c) : o[u].type === "softbreak" && (a += `
`);
    return a;
  }, r.prototype.render = function(o, i, c) {
    var a, u, l, f = "", d = this.rules;
    for (a = 0, u = o.length; a < u; a++)
      l = o[a].type, l === "inline" ? f += this.renderInline(o[a].children, i, c) : typeof d[l] < "u" ? f += d[l](o, a, i, c, this) : f += this.renderToken(o, a, i, c);
    return f;
  }, Lr = r, Lr;
}
var Fr, Fc;
function ui() {
  if (Fc) return Fr;
  Fc = 1;
  function e() {
    this.__rules__ = [], this.__cache__ = null;
  }
  return e.prototype.__find__ = function(t) {
    for (var n = 0; n < this.__rules__.length; n++)
      if (this.__rules__[n].name === t)
        return n;
    return -1;
  }, e.prototype.__compile__ = function() {
    var t = this, n = [""];
    t.__rules__.forEach(function(s) {
      s.enabled && s.alt.forEach(function(r) {
        n.indexOf(r) < 0 && n.push(r);
      });
    }), t.__cache__ = {}, n.forEach(function(s) {
      t.__cache__[s] = [], t.__rules__.forEach(function(r) {
        r.enabled && (s && r.alt.indexOf(s) < 0 || t.__cache__[s].push(r.fn));
      });
    });
  }, e.prototype.at = function(t, n, s) {
    var r = this.__find__(t), o = s || {};
    if (r === -1)
      throw new Error("Parser rule not found: " + t);
    this.__rules__[r].fn = n, this.__rules__[r].alt = o.alt || [], this.__cache__ = null;
  }, e.prototype.before = function(t, n, s, r) {
    var o = this.__find__(t), i = r || {};
    if (o === -1)
      throw new Error("Parser rule not found: " + t);
    this.__rules__.splice(o, 0, {
      name: n,
      enabled: !0,
      fn: s,
      alt: i.alt || []
    }), this.__cache__ = null;
  }, e.prototype.after = function(t, n, s, r) {
    var o = this.__find__(t), i = r || {};
    if (o === -1)
      throw new Error("Parser rule not found: " + t);
    this.__rules__.splice(o + 1, 0, {
      name: n,
      enabled: !0,
      fn: s,
      alt: i.alt || []
    }), this.__cache__ = null;
  }, e.prototype.push = function(t, n, s) {
    var r = s || {};
    this.__rules__.push({
      name: t,
      enabled: !0,
      fn: n,
      alt: r.alt || []
    }), this.__cache__ = null;
  }, e.prototype.enable = function(t, n) {
    Array.isArray(t) || (t = [t]);
    var s = [];
    return t.forEach(function(r) {
      var o = this.__find__(r);
      if (o < 0) {
        if (n)
          return;
        throw new Error("Rules manager: invalid rule name " + r);
      }
      this.__rules__[o].enabled = !0, s.push(r);
    }, this), this.__cache__ = null, s;
  }, e.prototype.enableOnly = function(t, n) {
    Array.isArray(t) || (t = [t]), this.__rules__.forEach(function(s) {
      s.enabled = !1;
    }), this.enable(t, n);
  }, e.prototype.disable = function(t, n) {
    Array.isArray(t) || (t = [t]);
    var s = [];
    return t.forEach(function(r) {
      var o = this.__find__(r);
      if (o < 0) {
        if (n)
          return;
        throw new Error("Rules manager: invalid rule name " + r);
      }
      this.__rules__[o].enabled = !1, s.push(r);
    }, this), this.__cache__ = null, s;
  }, e.prototype.getRules = function(t) {
    return this.__cache__ === null && this.__compile__(), this.__cache__[t] || [];
  }, Fr = e, Fr;
}
var qr, qc;
function pV() {
  if (qc) return qr;
  qc = 1;
  var e = /\r\n?|\n/g, t = /\0/g;
  return qr = function(s) {
    var r;
    r = s.src.replace(e, `
`), r = r.replace(t, "�"), s.src = r;
  }, qr;
}
var Pr, Pc;
function gV() {
  return Pc || (Pc = 1, Pr = function(t) {
    var n;
    t.inlineMode ? (n = new t.Token("inline", "", 0), n.content = t.src, n.map = [0, 1], n.children = [], t.tokens.push(n)) : t.md.block.parse(t.src, t.md, t.env, t.tokens);
  }), Pr;
}
var Br, Bc;
function mV() {
  return Bc || (Bc = 1, Br = function(t) {
    var n = t.tokens, s, r, o;
    for (r = 0, o = n.length; r < o; r++)
      s = n[r], s.type === "inline" && t.md.inline.parse(s.content, t.md, t.env, s.children);
  }), Br;
}
var $r, $c;
function _V() {
  if ($c) return $r;
  $c = 1;
  var e = ke().arrayReplaceAt;
  function t(s) {
    return /^<a[>\s]/i.test(s);
  }
  function n(s) {
    return /^<\/a\s*>/i.test(s);
  }
  return $r = function(r) {
    var o, i, c, a, u, l, f, d, h, v, x, C, m, k, b, p, E = r.tokens, w;
    if (r.md.options.linkify) {
      for (i = 0, c = E.length; i < c; i++)
        if (!(E[i].type !== "inline" || !r.md.linkify.pretest(E[i].content)))
          for (a = E[i].children, m = 0, o = a.length - 1; o >= 0; o--) {
            if (l = a[o], l.type === "link_close") {
              for (o--; a[o].level !== l.level && a[o].type !== "link_open"; )
                o--;
              continue;
            }
            if (l.type === "html_inline" && (t(l.content) && m > 0 && m--, n(l.content) && m++), !(m > 0) && l.type === "text" && r.md.linkify.test(l.content)) {
              for (h = l.content, w = r.md.linkify.match(h), f = [], C = l.level, x = 0, w.length > 0 && w[0].index === 0 && o > 0 && a[o - 1].type === "text_special" && (w = w.slice(1)), d = 0; d < w.length; d++)
                k = w[d].url, b = r.md.normalizeLink(k), r.md.validateLink(b) && (p = w[d].text, w[d].schema ? w[d].schema === "mailto:" && !/^mailto:/i.test(p) ? p = r.md.normalizeLinkText("mailto:" + p).replace(/^mailto:/, "") : p = r.md.normalizeLinkText(p) : p = r.md.normalizeLinkText("http://" + p).replace(/^http:\/\//, ""), v = w[d].index, v > x && (u = new r.Token("text", "", 0), u.content = h.slice(x, v), u.level = C, f.push(u)), u = new r.Token("link_open", "a", 1), u.attrs = [["href", b]], u.level = C++, u.markup = "linkify", u.info = "auto", f.push(u), u = new r.Token("text", "", 0), u.content = p, u.level = C, f.push(u), u = new r.Token("link_close", "a", -1), u.level = --C, u.markup = "linkify", u.info = "auto", f.push(u), x = w[d].lastIndex);
              x < h.length && (u = new r.Token("text", "", 0), u.content = h.slice(x), u.level = C, f.push(u)), E[i].children = a = e(a, o, f);
            }
          }
    }
  }, $r;
}
var zr, zc;
function bV() {
  if (zc) return zr;
  zc = 1;
  var e = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, t = /\((c|tm|r)\)/i, n = /\((c|tm|r)\)/ig, s = {
    c: "©",
    r: "®",
    tm: "™"
  };
  function r(c, a) {
    return s[a.toLowerCase()];
  }
  function o(c) {
    var a, u, l = 0;
    for (a = c.length - 1; a >= 0; a--)
      u = c[a], u.type === "text" && !l && (u.content = u.content.replace(n, r)), u.type === "link_open" && u.info === "auto" && l--, u.type === "link_close" && u.info === "auto" && l++;
  }
  function i(c) {
    var a, u, l = 0;
    for (a = c.length - 1; a >= 0; a--)
      u = c[a], u.type === "text" && !l && e.test(u.content) && (u.content = u.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), u.type === "link_open" && u.info === "auto" && l--, u.type === "link_close" && u.info === "auto" && l++;
  }
  return zr = function(a) {
    var u;
    if (a.md.options.typographer)
      for (u = a.tokens.length - 1; u >= 0; u--)
        a.tokens[u].type === "inline" && (t.test(a.tokens[u].content) && o(a.tokens[u].children), e.test(a.tokens[u].content) && i(a.tokens[u].children));
  }, zr;
}
var Ur, Uc;
function vV() {
  if (Uc) return Ur;
  Uc = 1;
  var e = ke().isWhiteSpace, t = ke().isPunctChar, n = ke().isMdAsciiPunct, s = /['"]/, r = /['"]/g, o = "’";
  function i(a, u, l) {
    return a.slice(0, u) + l + a.slice(u + 1);
  }
  function c(a, u) {
    var l, f, d, h, v, x, C, m, k, b, p, E, w, $, R, D, A, N, I, ee, T;
    for (I = [], l = 0; l < a.length; l++) {
      for (f = a[l], C = a[l].level, A = I.length - 1; A >= 0 && !(I[A].level <= C); A--)
        ;
      if (I.length = A + 1, f.type === "text") {
        d = f.content, v = 0, x = d.length;
        e:
          for (; v < x && (r.lastIndex = v, h = r.exec(d), !!h); ) {
            if (R = D = !0, v = h.index + 1, N = h[0] === "'", k = 32, h.index - 1 >= 0)
              k = d.charCodeAt(h.index - 1);
            else
              for (A = l - 1; A >= 0 && !(a[A].type === "softbreak" || a[A].type === "hardbreak"); A--)
                if (a[A].content) {
                  k = a[A].content.charCodeAt(a[A].content.length - 1);
                  break;
                }
            if (b = 32, v < x)
              b = d.charCodeAt(v);
            else
              for (A = l + 1; A < a.length && !(a[A].type === "softbreak" || a[A].type === "hardbreak"); A++)
                if (a[A].content) {
                  b = a[A].content.charCodeAt(0);
                  break;
                }
            if (p = n(k) || t(String.fromCharCode(k)), E = n(b) || t(String.fromCharCode(b)), w = e(k), $ = e(b), $ ? R = !1 : E && (w || p || (R = !1)), w ? D = !1 : p && ($ || E || (D = !1)), b === 34 && h[0] === '"' && k >= 48 && k <= 57 && (D = R = !1), R && D && (R = p, D = E), !R && !D) {
              N && (f.content = i(f.content, h.index, o));
              continue;
            }
            if (D) {
              for (A = I.length - 1; A >= 0 && (m = I[A], !(I[A].level < C)); A--)
                if (m.single === N && I[A].level === C) {
                  m = I[A], N ? (ee = u.md.options.quotes[2], T = u.md.options.quotes[3]) : (ee = u.md.options.quotes[0], T = u.md.options.quotes[1]), f.content = i(f.content, h.index, T), a[m.token].content = i(
                    a[m.token].content,
                    m.pos,
                    ee
                  ), v += T.length - 1, m.token === l && (v += ee.length - 1), d = f.content, x = d.length, I.length = A;
                  continue e;
                }
            }
            R ? I.push({
              token: l,
              pos: h.index,
              single: N,
              level: C
            }) : D && N && (f.content = i(f.content, h.index, o));
          }
      }
    }
  }
  return Ur = function(u) {
    var l;
    if (u.md.options.typographer)
      for (l = u.tokens.length - 1; l >= 0; l--)
        u.tokens[l].type !== "inline" || !s.test(u.tokens[l].content) || c(u.tokens[l].children, u);
  }, Ur;
}
var Hr, Hc;
function yV() {
  return Hc || (Hc = 1, Hr = function(t) {
    var n, s, r, o, i, c, a = t.tokens;
    for (n = 0, s = a.length; n < s; n++)
      if (a[n].type === "inline") {
        for (r = a[n].children, i = r.length, o = 0; o < i; o++)
          r[o].type === "text_special" && (r[o].type = "text");
        for (o = c = 0; o < i; o++)
          r[o].type === "text" && o + 1 < i && r[o + 1].type === "text" ? r[o + 1].content = r[o].content + r[o + 1].content : (o !== c && (r[c] = r[o]), c++);
        o !== c && (r.length = c);
      }
  }), Hr;
}
var jr, jc;
function fi() {
  if (jc) return jr;
  jc = 1;
  function e(t, n, s) {
    this.type = t, this.tag = n, this.attrs = null, this.map = null, this.nesting = s, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
  }
  return e.prototype.attrIndex = function(n) {
    var s, r, o;
    if (!this.attrs)
      return -1;
    for (s = this.attrs, r = 0, o = s.length; r < o; r++)
      if (s[r][0] === n)
        return r;
    return -1;
  }, e.prototype.attrPush = function(n) {
    this.attrs ? this.attrs.push(n) : this.attrs = [n];
  }, e.prototype.attrSet = function(n, s) {
    var r = this.attrIndex(n), o = [n, s];
    r < 0 ? this.attrPush(o) : this.attrs[r] = o;
  }, e.prototype.attrGet = function(n) {
    var s = this.attrIndex(n), r = null;
    return s >= 0 && (r = this.attrs[s][1]), r;
  }, e.prototype.attrJoin = function(n, s) {
    var r = this.attrIndex(n);
    r < 0 ? this.attrPush([n, s]) : this.attrs[r][1] = this.attrs[r][1] + " " + s;
  }, jr = e, jr;
}
var Vr, Vc;
function xV() {
  if (Vc) return Vr;
  Vc = 1;
  var e = fi();
  function t(n, s, r) {
    this.src = n, this.env = r, this.tokens = [], this.inlineMode = !1, this.md = s;
  }
  return t.prototype.Token = e, Vr = t, Vr;
}
var Kr, Kc;
function kV() {
  if (Kc) return Kr;
  Kc = 1;
  var e = ui(), t = [
    ["normalize", pV()],
    ["block", gV()],
    ["inline", mV()],
    ["linkify", _V()],
    ["replacements", bV()],
    ["smartquotes", vV()],
    // `text_join` finds `text_special` tokens (for escape sequences)
    // and joins them with the rest of the text
    ["text_join", yV()]
  ];
  function n() {
    this.ruler = new e();
    for (var s = 0; s < t.length; s++)
      this.ruler.push(t[s][0], t[s][1]);
  }
  return n.prototype.process = function(s) {
    var r, o, i;
    for (i = this.ruler.getRules(""), r = 0, o = i.length; r < o; r++)
      i[r](s);
  }, n.prototype.State = xV(), Kr = n, Kr;
}
var Gr, Gc;
function EV() {
  if (Gc) return Gr;
  Gc = 1;
  var e = ke().isSpace;
  function t(s, r) {
    var o = s.bMarks[r] + s.tShift[r], i = s.eMarks[r];
    return s.src.slice(o, i);
  }
  function n(s) {
    var r = [], o = 0, i = s.length, c, a = !1, u = 0, l = "";
    for (c = s.charCodeAt(o); o < i; )
      c === 124 && (a ? (l += s.substring(u, o - 1), u = o) : (r.push(l + s.substring(u, o)), l = "", u = o + 1)), a = c === 92, o++, c = s.charCodeAt(o);
    return r.push(l + s.substring(u)), r;
  }
  return Gr = function(r, o, i, c) {
    var a, u, l, f, d, h, v, x, C, m, k, b, p, E, w, $, R, D;
    if (o + 2 > i || (h = o + 1, r.sCount[h] < r.blkIndent) || r.sCount[h] - r.blkIndent >= 4 || (l = r.bMarks[h] + r.tShift[h], l >= r.eMarks[h]) || (R = r.src.charCodeAt(l++), R !== 124 && R !== 45 && R !== 58) || l >= r.eMarks[h] || (D = r.src.charCodeAt(l++), D !== 124 && D !== 45 && D !== 58 && !e(D)) || R === 45 && e(D))
      return !1;
    for (; l < r.eMarks[h]; ) {
      if (a = r.src.charCodeAt(l), a !== 124 && a !== 45 && a !== 58 && !e(a))
        return !1;
      l++;
    }
    for (u = t(r, o + 1), v = u.split("|"), m = [], f = 0; f < v.length; f++) {
      if (k = v[f].trim(), !k) {
        if (f === 0 || f === v.length - 1)
          continue;
        return !1;
      }
      if (!/^:?-+:?$/.test(k))
        return !1;
      k.charCodeAt(k.length - 1) === 58 ? m.push(k.charCodeAt(0) === 58 ? "center" : "right") : k.charCodeAt(0) === 58 ? m.push("left") : m.push("");
    }
    if (u = t(r, o).trim(), u.indexOf("|") === -1 || r.sCount[o] - r.blkIndent >= 4 || (v = n(u), v.length && v[0] === "" && v.shift(), v.length && v[v.length - 1] === "" && v.pop(), x = v.length, x === 0 || x !== m.length))
      return !1;
    if (c)
      return !0;
    for (E = r.parentType, r.parentType = "table", $ = r.md.block.ruler.getRules("blockquote"), C = r.push("table_open", "table", 1), C.map = b = [o, 0], C = r.push("thead_open", "thead", 1), C.map = [o, o + 1], C = r.push("tr_open", "tr", 1), C.map = [o, o + 1], f = 0; f < v.length; f++)
      C = r.push("th_open", "th", 1), m[f] && (C.attrs = [["style", "text-align:" + m[f]]]), C = r.push("inline", "", 0), C.content = v[f].trim(), C.children = [], C = r.push("th_close", "th", -1);
    for (C = r.push("tr_close", "tr", -1), C = r.push("thead_close", "thead", -1), h = o + 2; h < i && !(r.sCount[h] < r.blkIndent); h++) {
      for (w = !1, f = 0, d = $.length; f < d; f++)
        if ($[f](r, h, i, !0)) {
          w = !0;
          break;
        }
      if (w || (u = t(r, h).trim(), !u) || r.sCount[h] - r.blkIndent >= 4)
        break;
      for (v = n(u), v.length && v[0] === "" && v.shift(), v.length && v[v.length - 1] === "" && v.pop(), h === o + 2 && (C = r.push("tbody_open", "tbody", 1), C.map = p = [o + 2, 0]), C = r.push("tr_open", "tr", 1), C.map = [h, h + 1], f = 0; f < x; f++)
        C = r.push("td_open", "td", 1), m[f] && (C.attrs = [["style", "text-align:" + m[f]]]), C = r.push("inline", "", 0), C.content = v[f] ? v[f].trim() : "", C.children = [], C = r.push("td_close", "td", -1);
      C = r.push("tr_close", "tr", -1);
    }
    return p && (C = r.push("tbody_close", "tbody", -1), p[1] = h), C = r.push("table_close", "table", -1), b[1] = h, r.parentType = E, r.line = h, !0;
  }, Gr;
}
var Zr, Zc;
function wV() {
  return Zc || (Zc = 1, Zr = function(t, n, s) {
    var r, o, i;
    if (t.sCount[n] - t.blkIndent < 4)
      return !1;
    for (o = r = n + 1; r < s; ) {
      if (t.isEmpty(r)) {
        r++;
        continue;
      }
      if (t.sCount[r] - t.blkIndent >= 4) {
        r++, o = r;
        continue;
      }
      break;
    }
    return t.line = o, i = t.push("code_block", "code", 0), i.content = t.getLines(n, o, 4 + t.blkIndent, !1) + `
`, i.map = [n, t.line], !0;
  }), Zr;
}
var Wr, Wc;
function CV() {
  return Wc || (Wc = 1, Wr = function(t, n, s, r) {
    var o, i, c, a, u, l, f, d = !1, h = t.bMarks[n] + t.tShift[n], v = t.eMarks[n];
    if (t.sCount[n] - t.blkIndent >= 4 || h + 3 > v || (o = t.src.charCodeAt(h), o !== 126 && o !== 96) || (u = h, h = t.skipChars(h, o), i = h - u, i < 3) || (f = t.src.slice(u, h), c = t.src.slice(h, v), o === 96 && c.indexOf(String.fromCharCode(o)) >= 0))
      return !1;
    if (r)
      return !0;
    for (a = n; a++, !(a >= s || (h = u = t.bMarks[a] + t.tShift[a], v = t.eMarks[a], h < v && t.sCount[a] < t.blkIndent)); )
      if (t.src.charCodeAt(h) === o && !(t.sCount[a] - t.blkIndent >= 4) && (h = t.skipChars(h, o), !(h - u < i) && (h = t.skipSpaces(h), !(h < v)))) {
        d = !0;
        break;
      }
    return i = t.sCount[n], t.line = a + (d ? 1 : 0), l = t.push("fence", "code", 0), l.info = c, l.content = t.getLines(n + 1, a, i, !0), l.markup = f, l.map = [n, t.line], !0;
  }), Wr;
}
var Jr, Jc;
function AV() {
  if (Jc) return Jr;
  Jc = 1;
  var e = ke().isSpace;
  return Jr = function(n, s, r, o) {
    var i, c, a, u, l, f, d, h, v, x, C, m, k, b, p, E, w, $, R, D, A = n.lineMax, N = n.bMarks[s] + n.tShift[s], I = n.eMarks[s];
    if (n.sCount[s] - n.blkIndent >= 4 || n.src.charCodeAt(N) !== 62)
      return !1;
    if (o)
      return !0;
    for (x = [], C = [], b = [], p = [], $ = n.md.block.ruler.getRules("blockquote"), k = n.parentType, n.parentType = "blockquote", h = s; h < r && (D = n.sCount[h] < n.blkIndent, N = n.bMarks[h] + n.tShift[h], I = n.eMarks[h], !(N >= I)); h++) {
      if (n.src.charCodeAt(N++) === 62 && !D) {
        for (u = n.sCount[h] + 1, n.src.charCodeAt(N) === 32 ? (N++, u++, i = !1, E = !0) : n.src.charCodeAt(N) === 9 ? (E = !0, (n.bsCount[h] + u) % 4 === 3 ? (N++, u++, i = !1) : i = !0) : E = !1, v = u, x.push(n.bMarks[h]), n.bMarks[h] = N; N < I && (c = n.src.charCodeAt(N), e(c)); ) {
          c === 9 ? v += 4 - (v + n.bsCount[h] + (i ? 1 : 0)) % 4 : v++;
          N++;
        }
        f = N >= I, C.push(n.bsCount[h]), n.bsCount[h] = n.sCount[h] + 1 + (E ? 1 : 0), b.push(n.sCount[h]), n.sCount[h] = v - u, p.push(n.tShift[h]), n.tShift[h] = N - n.bMarks[h];
        continue;
      }
      if (f)
        break;
      for (w = !1, a = 0, l = $.length; a < l; a++)
        if ($[a](n, h, r, !0)) {
          w = !0;
          break;
        }
      if (w) {
        n.lineMax = h, n.blkIndent !== 0 && (x.push(n.bMarks[h]), C.push(n.bsCount[h]), p.push(n.tShift[h]), b.push(n.sCount[h]), n.sCount[h] -= n.blkIndent);
        break;
      }
      x.push(n.bMarks[h]), C.push(n.bsCount[h]), p.push(n.tShift[h]), b.push(n.sCount[h]), n.sCount[h] = -1;
    }
    for (m = n.blkIndent, n.blkIndent = 0, R = n.push("blockquote_open", "blockquote", 1), R.markup = ">", R.map = d = [s, 0], n.md.block.tokenize(n, s, h), R = n.push("blockquote_close", "blockquote", -1), R.markup = ">", n.lineMax = A, n.parentType = k, d[1] = n.line, a = 0; a < p.length; a++)
      n.bMarks[a + s] = x[a], n.tShift[a + s] = p[a], n.sCount[a + s] = b[a], n.bsCount[a + s] = C[a];
    return n.blkIndent = m, !0;
  }, Jr;
}
var Yr, Yc;
function SV() {
  if (Yc) return Yr;
  Yc = 1;
  var e = ke().isSpace;
  return Yr = function(n, s, r, o) {
    var i, c, a, u, l = n.bMarks[s] + n.tShift[s], f = n.eMarks[s];
    if (n.sCount[s] - n.blkIndent >= 4 || (i = n.src.charCodeAt(l++), i !== 42 && i !== 45 && i !== 95))
      return !1;
    for (c = 1; l < f; ) {
      if (a = n.src.charCodeAt(l++), a !== i && !e(a))
        return !1;
      a === i && c++;
    }
    return c < 3 ? !1 : (o || (n.line = s + 1, u = n.push("hr", "hr", 0), u.map = [s, n.line], u.markup = Array(c + 1).join(String.fromCharCode(i))), !0);
  }, Yr;
}
var Xr, Xc;
function TV() {
  if (Xc) return Xr;
  Xc = 1;
  var e = ke().isSpace;
  function t(r, o) {
    var i, c, a, u;
    return c = r.bMarks[o] + r.tShift[o], a = r.eMarks[o], i = r.src.charCodeAt(c++), i !== 42 && i !== 45 && i !== 43 || c < a && (u = r.src.charCodeAt(c), !e(u)) ? -1 : c;
  }
  function n(r, o) {
    var i, c = r.bMarks[o] + r.tShift[o], a = c, u = r.eMarks[o];
    if (a + 1 >= u || (i = r.src.charCodeAt(a++), i < 48 || i > 57))
      return -1;
    for (; ; ) {
      if (a >= u)
        return -1;
      if (i = r.src.charCodeAt(a++), i >= 48 && i <= 57) {
        if (a - c >= 10)
          return -1;
        continue;
      }
      if (i === 41 || i === 46)
        break;
      return -1;
    }
    return a < u && (i = r.src.charCodeAt(a), !e(i)) ? -1 : a;
  }
  function s(r, o) {
    var i, c, a = r.level + 2;
    for (i = o + 2, c = r.tokens.length - 2; i < c; i++)
      r.tokens[i].level === a && r.tokens[i].type === "paragraph_open" && (r.tokens[i + 2].hidden = !0, r.tokens[i].hidden = !0, i += 2);
  }
  return Xr = function(o, i, c, a) {
    var u, l, f, d, h, v, x, C, m, k, b, p, E, w, $, R, D, A, N, I, ee, T, ie, Q, le, G, fe, Z = i, we = !1, Ce = !0;
    if (o.sCount[Z] - o.blkIndent >= 4 || o.listIndent >= 0 && o.sCount[Z] - o.listIndent >= 4 && o.sCount[Z] < o.blkIndent)
      return !1;
    if (a && o.parentType === "paragraph" && o.sCount[Z] >= o.blkIndent && (we = !0), (T = n(o, Z)) >= 0) {
      if (x = !0, Q = o.bMarks[Z] + o.tShift[Z], E = Number(o.src.slice(Q, T - 1)), we && E !== 1) return !1;
    } else if ((T = t(o, Z)) >= 0)
      x = !1;
    else
      return !1;
    if (we && o.skipSpaces(T) >= o.eMarks[Z])
      return !1;
    if (a)
      return !0;
    for (p = o.src.charCodeAt(T - 1), b = o.tokens.length, x ? (fe = o.push("ordered_list_open", "ol", 1), E !== 1 && (fe.attrs = [["start", E]])) : fe = o.push("bullet_list_open", "ul", 1), fe.map = k = [Z, 0], fe.markup = String.fromCharCode(p), ie = !1, G = o.md.block.ruler.getRules("list"), D = o.parentType, o.parentType = "list"; Z < c; ) {
      for (ee = T, w = o.eMarks[Z], v = $ = o.sCount[Z] + T - (o.bMarks[Z] + o.tShift[Z]); ee < w; ) {
        if (u = o.src.charCodeAt(ee), u === 9)
          $ += 4 - ($ + o.bsCount[Z]) % 4;
        else if (u === 32)
          $++;
        else
          break;
        ee++;
      }
      if (l = ee, l >= w ? h = 1 : h = $ - v, h > 4 && (h = 1), d = v + h, fe = o.push("list_item_open", "li", 1), fe.markup = String.fromCharCode(p), fe.map = C = [Z, 0], x && (fe.info = o.src.slice(Q, T - 1)), I = o.tight, N = o.tShift[Z], A = o.sCount[Z], R = o.listIndent, o.listIndent = o.blkIndent, o.blkIndent = d, o.tight = !0, o.tShift[Z] = l - o.bMarks[Z], o.sCount[Z] = $, l >= w && o.isEmpty(Z + 1) ? o.line = Math.min(o.line + 2, c) : o.md.block.tokenize(o, Z, c, !0), (!o.tight || ie) && (Ce = !1), ie = o.line - Z > 1 && o.isEmpty(o.line - 1), o.blkIndent = o.listIndent, o.listIndent = R, o.tShift[Z] = N, o.sCount[Z] = A, o.tight = I, fe = o.push("list_item_close", "li", -1), fe.markup = String.fromCharCode(p), Z = o.line, C[1] = Z, Z >= c || o.sCount[Z] < o.blkIndent || o.sCount[Z] - o.blkIndent >= 4)
        break;
      for (le = !1, f = 0, m = G.length; f < m; f++)
        if (G[f](o, Z, c, !0)) {
          le = !0;
          break;
        }
      if (le)
        break;
      if (x) {
        if (T = n(o, Z), T < 0)
          break;
        Q = o.bMarks[Z] + o.tShift[Z];
      } else if (T = t(o, Z), T < 0)
        break;
      if (p !== o.src.charCodeAt(T - 1))
        break;
    }
    return x ? fe = o.push("ordered_list_close", "ol", -1) : fe = o.push("bullet_list_close", "ul", -1), fe.markup = String.fromCharCode(p), k[1] = Z, o.line = Z, o.parentType = D, Ce && s(o, b), !0;
  }, Xr;
}
var Qr, Qc;
function RV() {
  if (Qc) return Qr;
  Qc = 1;
  var e = ke().normalizeReference, t = ke().isSpace;
  return Qr = function(s, r, o, i) {
    var c, a, u, l, f, d, h, v, x, C, m, k, b, p, E, w, $ = 0, R = s.bMarks[r] + s.tShift[r], D = s.eMarks[r], A = r + 1;
    if (s.sCount[r] - s.blkIndent >= 4 || s.src.charCodeAt(R) !== 91)
      return !1;
    for (; ++R < D; )
      if (s.src.charCodeAt(R) === 93 && s.src.charCodeAt(R - 1) !== 92) {
        if (R + 1 === D || s.src.charCodeAt(R + 1) !== 58)
          return !1;
        break;
      }
    for (l = s.lineMax, E = s.md.block.ruler.getRules("reference"), C = s.parentType, s.parentType = "reference"; A < l && !s.isEmpty(A); A++)
      if (!(s.sCount[A] - s.blkIndent > 3) && !(s.sCount[A] < 0)) {
        for (p = !1, d = 0, h = E.length; d < h; d++)
          if (E[d](s, A, l, !0)) {
            p = !0;
            break;
          }
        if (p)
          break;
      }
    for (b = s.getLines(r, A, s.blkIndent, !1).trim(), D = b.length, R = 1; R < D; R++) {
      if (c = b.charCodeAt(R), c === 91)
        return !1;
      if (c === 93) {
        x = R;
        break;
      } else c === 10 ? $++ : c === 92 && (R++, R < D && b.charCodeAt(R) === 10 && $++);
    }
    if (x < 0 || b.charCodeAt(x + 1) !== 58)
      return !1;
    for (R = x + 2; R < D; R++)
      if (c = b.charCodeAt(R), c === 10)
        $++;
      else if (!t(c)) break;
    if (m = s.md.helpers.parseLinkDestination(b, R, D), !m.ok || (f = s.md.normalizeLink(m.str), !s.md.validateLink(f)))
      return !1;
    for (R = m.pos, $ += m.lines, a = R, u = $, k = R; R < D; R++)
      if (c = b.charCodeAt(R), c === 10)
        $++;
      else if (!t(c)) break;
    for (m = s.md.helpers.parseLinkTitle(b, R, D), R < D && k !== R && m.ok ? (w = m.str, R = m.pos, $ += m.lines) : (w = "", R = a, $ = u); R < D && (c = b.charCodeAt(R), !!t(c)); )
      R++;
    if (R < D && b.charCodeAt(R) !== 10 && w)
      for (w = "", R = a, $ = u; R < D && (c = b.charCodeAt(R), !!t(c)); )
        R++;
    return R < D && b.charCodeAt(R) !== 10 || (v = e(b.slice(1, x)), !v) ? !1 : (i || (typeof s.env.references > "u" && (s.env.references = {}), typeof s.env.references[v] > "u" && (s.env.references[v] = { title: w, href: f }), s.parentType = C, s.line = r + $ + 1), !0);
  }, Qr;
}
var eo, ea;
function DV() {
  return ea || (ea = 1, eo = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "section",
    "source",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul"
  ]), eo;
}
var ms = {}, ta;
function _u() {
  if (ta) return ms;
  ta = 1;
  var e = "[a-zA-Z_:][a-zA-Z0-9:._-]*", t = "[^\"'=<>`\\x00-\\x20]+", n = "'[^']*'", s = '"[^"]*"', r = "(?:" + t + "|" + n + "|" + s + ")", o = "(?:\\s+" + e + "(?:\\s*=\\s*" + r + ")?)", i = "<[A-Za-z][A-Za-z0-9\\-]*" + o + "*\\s*\\/?>", c = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", a = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->", u = "<[?][\\s\\S]*?[?]>", l = "<![A-Z]+\\s+[^>]*>", f = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", d = new RegExp("^(?:" + i + "|" + c + "|" + a + "|" + u + "|" + l + "|" + f + ")"), h = new RegExp("^(?:" + i + "|" + c + ")");
  return ms.HTML_TAG_RE = d, ms.HTML_OPEN_CLOSE_TAG_RE = h, ms;
}
var to, na;
function MV() {
  if (na) return to;
  na = 1;
  var e = DV(), t = _u().HTML_OPEN_CLOSE_TAG_RE, n = [
    [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
    [/^<!--/, /-->/, !0],
    [/^<\?/, /\?>/, !0],
    [/^<![A-Z]/, />/, !0],
    [/^<!\[CDATA\[/, /\]\]>/, !0],
    [new RegExp("^</?(" + e.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
    [new RegExp(t.source + "\\s*$"), /^$/, !1]
  ];
  return to = function(r, o, i, c) {
    var a, u, l, f, d = r.bMarks[o] + r.tShift[o], h = r.eMarks[o];
    if (r.sCount[o] - r.blkIndent >= 4 || !r.md.options.html || r.src.charCodeAt(d) !== 60)
      return !1;
    for (f = r.src.slice(d, h), a = 0; a < n.length && !n[a][0].test(f); a++)
      ;
    if (a === n.length)
      return !1;
    if (c)
      return n[a][2];
    if (u = o + 1, !n[a][1].test(f)) {
      for (; u < i && !(r.sCount[u] < r.blkIndent); u++)
        if (d = r.bMarks[u] + r.tShift[u], h = r.eMarks[u], f = r.src.slice(d, h), n[a][1].test(f)) {
          f.length !== 0 && u++;
          break;
        }
    }
    return r.line = u, l = r.push("html_block", "", 0), l.map = [o, u], l.content = r.getLines(o, u, r.blkIndent, !0), !0;
  }, to;
}
var no, sa;
function IV() {
  if (sa) return no;
  sa = 1;
  var e = ke().isSpace;
  return no = function(n, s, r, o) {
    var i, c, a, u, l = n.bMarks[s] + n.tShift[s], f = n.eMarks[s];
    if (n.sCount[s] - n.blkIndent >= 4 || (i = n.src.charCodeAt(l), i !== 35 || l >= f))
      return !1;
    for (c = 1, i = n.src.charCodeAt(++l); i === 35 && l < f && c <= 6; )
      c++, i = n.src.charCodeAt(++l);
    return c > 6 || l < f && !e(i) ? !1 : (o || (f = n.skipSpacesBack(f, l), a = n.skipCharsBack(f, 35, l), a > l && e(n.src.charCodeAt(a - 1)) && (f = a), n.line = s + 1, u = n.push("heading_open", "h" + String(c), 1), u.markup = "########".slice(0, c), u.map = [s, n.line], u = n.push("inline", "", 0), u.content = n.src.slice(l, f).trim(), u.map = [s, n.line], u.children = [], u = n.push("heading_close", "h" + String(c), -1), u.markup = "########".slice(0, c)), !0);
  }, no;
}
var so, ra;
function NV() {
  return ra || (ra = 1, so = function(t, n, s) {
    var r, o, i, c, a, u, l, f, d, h = n + 1, v, x = t.md.block.ruler.getRules("paragraph");
    if (t.sCount[n] - t.blkIndent >= 4)
      return !1;
    for (v = t.parentType, t.parentType = "paragraph"; h < s && !t.isEmpty(h); h++)
      if (!(t.sCount[h] - t.blkIndent > 3)) {
        if (t.sCount[h] >= t.blkIndent && (u = t.bMarks[h] + t.tShift[h], l = t.eMarks[h], u < l && (d = t.src.charCodeAt(u), (d === 45 || d === 61) && (u = t.skipChars(u, d), u = t.skipSpaces(u), u >= l)))) {
          f = d === 61 ? 1 : 2;
          break;
        }
        if (!(t.sCount[h] < 0)) {
          for (o = !1, i = 0, c = x.length; i < c; i++)
            if (x[i](t, h, s, !0)) {
              o = !0;
              break;
            }
          if (o)
            break;
        }
      }
    return f ? (r = t.getLines(n, h, t.blkIndent, !1).trim(), t.line = h + 1, a = t.push("heading_open", "h" + String(f), 1), a.markup = String.fromCharCode(d), a.map = [n, t.line], a = t.push("inline", "", 0), a.content = r, a.map = [n, t.line - 1], a.children = [], a = t.push("heading_close", "h" + String(f), -1), a.markup = String.fromCharCode(d), t.parentType = v, !0) : !1;
  }), so;
}
var ro, oa;
function OV() {
  return oa || (oa = 1, ro = function(t, n, s) {
    var r, o, i, c, a, u, l = n + 1, f = t.md.block.ruler.getRules("paragraph");
    for (u = t.parentType, t.parentType = "paragraph"; l < s && !t.isEmpty(l); l++)
      if (!(t.sCount[l] - t.blkIndent > 3) && !(t.sCount[l] < 0)) {
        for (o = !1, i = 0, c = f.length; i < c; i++)
          if (f[i](t, l, s, !0)) {
            o = !0;
            break;
          }
        if (o)
          break;
      }
    return r = t.getLines(n, l, t.blkIndent, !1).trim(), t.line = l, a = t.push("paragraph_open", "p", 1), a.map = [n, t.line], a = t.push("inline", "", 0), a.content = r, a.map = [n, t.line], a.children = [], a = t.push("paragraph_close", "p", -1), t.parentType = u, !0;
  }), ro;
}
var oo, ia;
function LV() {
  if (ia) return oo;
  ia = 1;
  var e = fi(), t = ke().isSpace;
  function n(s, r, o, i) {
    var c, a, u, l, f, d, h, v;
    for (this.src = s, this.md = r, this.env = o, this.tokens = i, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0, this.result = "", a = this.src, v = !1, u = l = d = h = 0, f = a.length; l < f; l++) {
      if (c = a.charCodeAt(l), !v)
        if (t(c)) {
          d++, c === 9 ? h += 4 - h % 4 : h++;
          continue;
        } else
          v = !0;
      (c === 10 || l === f - 1) && (c !== 10 && l++, this.bMarks.push(u), this.eMarks.push(l), this.tShift.push(d), this.sCount.push(h), this.bsCount.push(0), v = !1, d = 0, h = 0, u = l + 1);
    }
    this.bMarks.push(a.length), this.eMarks.push(a.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
  }
  return n.prototype.push = function(s, r, o) {
    var i = new e(s, r, o);
    return i.block = !0, o < 0 && this.level--, i.level = this.level, o > 0 && this.level++, this.tokens.push(i), i;
  }, n.prototype.isEmpty = function(r) {
    return this.bMarks[r] + this.tShift[r] >= this.eMarks[r];
  }, n.prototype.skipEmptyLines = function(r) {
    for (var o = this.lineMax; r < o && !(this.bMarks[r] + this.tShift[r] < this.eMarks[r]); r++)
      ;
    return r;
  }, n.prototype.skipSpaces = function(r) {
    for (var o, i = this.src.length; r < i && (o = this.src.charCodeAt(r), !!t(o)); r++)
      ;
    return r;
  }, n.prototype.skipSpacesBack = function(r, o) {
    if (r <= o)
      return r;
    for (; r > o; )
      if (!t(this.src.charCodeAt(--r)))
        return r + 1;
    return r;
  }, n.prototype.skipChars = function(r, o) {
    for (var i = this.src.length; r < i && this.src.charCodeAt(r) === o; r++)
      ;
    return r;
  }, n.prototype.skipCharsBack = function(r, o, i) {
    if (r <= i)
      return r;
    for (; r > i; )
      if (o !== this.src.charCodeAt(--r))
        return r + 1;
    return r;
  }, n.prototype.getLines = function(r, o, i, c) {
    var a, u, l, f, d, h, v, x = r;
    if (r >= o)
      return "";
    for (h = new Array(o - r), a = 0; x < o; x++, a++) {
      for (u = 0, v = f = this.bMarks[x], x + 1 < o || c ? d = this.eMarks[x] + 1 : d = this.eMarks[x]; f < d && u < i; ) {
        if (l = this.src.charCodeAt(f), t(l))
          l === 9 ? u += 4 - (u + this.bsCount[x]) % 4 : u++;
        else if (f - v < this.tShift[x])
          u++;
        else
          break;
        f++;
      }
      u > i ? h[a] = new Array(u - i + 1).join(" ") + this.src.slice(f, d) : h[a] = this.src.slice(f, d);
    }
    return h.join("");
  }, n.prototype.Token = e, oo = n, oo;
}
var io, ca;
function FV() {
  if (ca) return io;
  ca = 1;
  var e = ui(), t = [
    // First 2 params - rule name & source. Secondary array - list of rules,
    // which can be terminated by this one.
    ["table", EV(), ["paragraph", "reference"]],
    ["code", wV()],
    ["fence", CV(), ["paragraph", "reference", "blockquote", "list"]],
    ["blockquote", AV(), ["paragraph", "reference", "blockquote", "list"]],
    ["hr", SV(), ["paragraph", "reference", "blockquote", "list"]],
    ["list", TV(), ["paragraph", "reference", "blockquote"]],
    ["reference", RV()],
    ["html_block", MV(), ["paragraph", "reference", "blockquote"]],
    ["heading", IV(), ["paragraph", "reference", "blockquote"]],
    ["lheading", NV()],
    ["paragraph", OV()]
  ];
  function n() {
    this.ruler = new e();
    for (var s = 0; s < t.length; s++)
      this.ruler.push(t[s][0], t[s][1], { alt: (t[s][2] || []).slice() });
  }
  return n.prototype.tokenize = function(s, r, o) {
    for (var i, c, a, u = this.ruler.getRules(""), l = u.length, f = r, d = !1, h = s.md.options.maxNesting; f < o && (s.line = f = s.skipEmptyLines(f), !(f >= o || s.sCount[f] < s.blkIndent)); ) {
      if (s.level >= h) {
        s.line = o;
        break;
      }
      for (a = s.line, c = 0; c < l; c++)
        if (i = u[c](s, f, o, !1), i) {
          if (a >= s.line)
            throw new Error("block rule didn't increment state.line");
          break;
        }
      if (!i) throw new Error("none of the block rules matched");
      s.tight = !d, s.isEmpty(s.line - 1) && (d = !0), f = s.line, f < o && s.isEmpty(f) && (d = !0, f++, s.line = f);
    }
  }, n.prototype.parse = function(s, r, o, i) {
    var c;
    s && (c = new this.State(s, r, o, i), this.tokenize(c, c.line, c.lineMax));
  }, n.prototype.State = LV(), io = n, io;
}
var co, aa;
function qV() {
  if (aa) return co;
  aa = 1;
  function e(t) {
    switch (t) {
      case 10:
      case 33:
      case 35:
      case 36:
      case 37:
      case 38:
      case 42:
      case 43:
      case 45:
      case 58:
      case 60:
      case 61:
      case 62:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 125:
      case 126:
        return !0;
      default:
        return !1;
    }
  }
  return co = function(n, s) {
    for (var r = n.pos; r < n.posMax && !e(n.src.charCodeAt(r)); )
      r++;
    return r === n.pos ? !1 : (s || (n.pending += n.src.slice(n.pos, r)), n.pos = r, !0);
  }, co;
}
var ao, la;
function PV() {
  if (la) return ao;
  la = 1;
  var e = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
  return ao = function(n, s) {
    var r, o, i, c, a, u, l, f;
    return !n.md.options.linkify || n.linkLevel > 0 || (r = n.pos, o = n.posMax, r + 3 > o) || n.src.charCodeAt(r) !== 58 || n.src.charCodeAt(r + 1) !== 47 || n.src.charCodeAt(r + 2) !== 47 || (i = n.pending.match(e), !i) || (c = i[1], a = n.md.linkify.matchAtStart(n.src.slice(r - c.length)), !a) || (u = a.url, u.length <= c.length) || (u = u.replace(/\*+$/, ""), l = n.md.normalizeLink(u), !n.md.validateLink(l)) ? !1 : (s || (n.pending = n.pending.slice(0, -c.length), f = n.push("link_open", "a", 1), f.attrs = [["href", l]], f.markup = "linkify", f.info = "auto", f = n.push("text", "", 0), f.content = n.md.normalizeLinkText(u), f = n.push("link_close", "a", -1), f.markup = "linkify", f.info = "auto"), n.pos += u.length - c.length, !0);
  }, ao;
}
var lo, ua;
function BV() {
  if (ua) return lo;
  ua = 1;
  var e = ke().isSpace;
  return lo = function(n, s) {
    var r, o, i, c = n.pos;
    if (n.src.charCodeAt(c) !== 10)
      return !1;
    if (r = n.pending.length - 1, o = n.posMax, !s)
      if (r >= 0 && n.pending.charCodeAt(r) === 32)
        if (r >= 1 && n.pending.charCodeAt(r - 1) === 32) {
          for (i = r - 1; i >= 1 && n.pending.charCodeAt(i - 1) === 32; ) i--;
          n.pending = n.pending.slice(0, i), n.push("hardbreak", "br", 0);
        } else
          n.pending = n.pending.slice(0, -1), n.push("softbreak", "br", 0);
      else
        n.push("softbreak", "br", 0);
    for (c++; c < o && e(n.src.charCodeAt(c)); )
      c++;
    return n.pos = c, !0;
  }, lo;
}
var uo, fa;
function $V() {
  if (fa) return uo;
  fa = 1;
  for (var e = ke().isSpace, t = [], n = 0; n < 256; n++)
    t.push(0);
  return "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(s) {
    t[s.charCodeAt(0)] = 1;
  }), uo = function(r, o) {
    var i, c, a, u, l, f = r.pos, d = r.posMax;
    if (r.src.charCodeAt(f) !== 92 || (f++, f >= d)) return !1;
    if (i = r.src.charCodeAt(f), i === 10) {
      for (o || r.push("hardbreak", "br", 0), f++; f < d && (i = r.src.charCodeAt(f), !!e(i)); )
        f++;
      return r.pos = f, !0;
    }
    return u = r.src[f], i >= 55296 && i <= 56319 && f + 1 < d && (c = r.src.charCodeAt(f + 1), c >= 56320 && c <= 57343 && (u += r.src[f + 1], f++)), a = "\\" + u, o || (l = r.push("text_special", "", 0), i < 256 && t[i] !== 0 ? l.content = u : l.content = a, l.markup = a, l.info = "escape"), r.pos = f + 1, !0;
  }, uo;
}
var fo, ha;
function zV() {
  return ha || (ha = 1, fo = function(t, n) {
    var s, r, o, i, c, a, u, l, f = t.pos, d = t.src.charCodeAt(f);
    if (d !== 96)
      return !1;
    for (s = f, f++, r = t.posMax; f < r && t.src.charCodeAt(f) === 96; )
      f++;
    if (o = t.src.slice(s, f), u = o.length, t.backticksScanned && (t.backticks[u] || 0) <= s)
      return n || (t.pending += o), t.pos += u, !0;
    for (a = f; (c = t.src.indexOf("`", a)) !== -1; ) {
      for (a = c + 1; a < r && t.src.charCodeAt(a) === 96; )
        a++;
      if (l = a - c, l === u)
        return n || (i = t.push("code_inline", "code", 0), i.markup = o, i.content = t.src.slice(f, c).replace(/\n/g, " ").replace(/^ (.+) $/, "$1")), t.pos = a, !0;
      t.backticks[l] = c;
    }
    return t.backticksScanned = !0, n || (t.pending += o), t.pos += u, !0;
  }), fo;
}
var _s = {}, da;
function pa() {
  if (da) return _s;
  da = 1, _s.tokenize = function(n, s) {
    var r, o, i, c, a, u = n.pos, l = n.src.charCodeAt(u);
    if (s || l !== 126 || (o = n.scanDelims(n.pos, !0), c = o.length, a = String.fromCharCode(l), c < 2))
      return !1;
    for (c % 2 && (i = n.push("text", "", 0), i.content = a, c--), r = 0; r < c; r += 2)
      i = n.push("text", "", 0), i.content = a + a, n.delimiters.push({
        marker: l,
        length: 0,
        // disable "rule of 3" length checks meant for emphasis
        token: n.tokens.length - 1,
        end: -1,
        open: o.can_open,
        close: o.can_close
      });
    return n.pos += o.length, !0;
  };
  function e(t, n) {
    var s, r, o, i, c, a = [], u = n.length;
    for (s = 0; s < u; s++)
      o = n[s], o.marker === 126 && o.end !== -1 && (i = n[o.end], c = t.tokens[o.token], c.type = "s_open", c.tag = "s", c.nesting = 1, c.markup = "~~", c.content = "", c = t.tokens[i.token], c.type = "s_close", c.tag = "s", c.nesting = -1, c.markup = "~~", c.content = "", t.tokens[i.token - 1].type === "text" && t.tokens[i.token - 1].content === "~" && a.push(i.token - 1));
    for (; a.length; ) {
      for (s = a.pop(), r = s + 1; r < t.tokens.length && t.tokens[r].type === "s_close"; )
        r++;
      r--, s !== r && (c = t.tokens[r], t.tokens[r] = t.tokens[s], t.tokens[s] = c);
    }
  }
  return _s.postProcess = function(n) {
    var s, r = n.tokens_meta, o = n.tokens_meta.length;
    for (e(n, n.delimiters), s = 0; s < o; s++)
      r[s] && r[s].delimiters && e(n, r[s].delimiters);
  }, _s;
}
var bs = {}, ga;
function ma() {
  if (ga) return bs;
  ga = 1, bs.tokenize = function(n, s) {
    var r, o, i, c = n.pos, a = n.src.charCodeAt(c);
    if (s || a !== 95 && a !== 42)
      return !1;
    for (o = n.scanDelims(n.pos, a === 42), r = 0; r < o.length; r++)
      i = n.push("text", "", 0), i.content = String.fromCharCode(a), n.delimiters.push({
        // Char code of the starting marker (number).
        //
        marker: a,
        // Total length of these series of delimiters.
        //
        length: o.length,
        // A position of the token this delimiter corresponds to.
        //
        token: n.tokens.length - 1,
        // If this delimiter is matched as a valid opener, `end` will be
        // equal to its position, otherwise it's `-1`.
        //
        end: -1,
        // Boolean flags that determine if this delimiter could open or close
        // an emphasis.
        //
        open: o.can_open,
        close: o.can_close
      });
    return n.pos += o.length, !0;
  };
  function e(t, n) {
    var s, r, o, i, c, a, u = n.length;
    for (s = u - 1; s >= 0; s--)
      r = n[s], !(r.marker !== 95 && r.marker !== 42) && r.end !== -1 && (o = n[r.end], a = s > 0 && n[s - 1].end === r.end + 1 && // check that first two markers match and adjacent
      n[s - 1].marker === r.marker && n[s - 1].token === r.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
      n[r.end + 1].token === o.token + 1, c = String.fromCharCode(r.marker), i = t.tokens[r.token], i.type = a ? "strong_open" : "em_open", i.tag = a ? "strong" : "em", i.nesting = 1, i.markup = a ? c + c : c, i.content = "", i = t.tokens[o.token], i.type = a ? "strong_close" : "em_close", i.tag = a ? "strong" : "em", i.nesting = -1, i.markup = a ? c + c : c, i.content = "", a && (t.tokens[n[s - 1].token].content = "", t.tokens[n[r.end + 1].token].content = "", s--));
  }
  return bs.postProcess = function(n) {
    var s, r = n.tokens_meta, o = n.tokens_meta.length;
    for (e(n, n.delimiters), s = 0; s < o; s++)
      r[s] && r[s].delimiters && e(n, r[s].delimiters);
  }, bs;
}
var ho, _a;
function UV() {
  if (_a) return ho;
  _a = 1;
  var e = ke().normalizeReference, t = ke().isSpace;
  return ho = function(s, r) {
    var o, i, c, a, u, l, f, d, h, v = "", x = "", C = s.pos, m = s.posMax, k = s.pos, b = !0;
    if (s.src.charCodeAt(s.pos) !== 91 || (u = s.pos + 1, a = s.md.helpers.parseLinkLabel(s, s.pos, !0), a < 0))
      return !1;
    if (l = a + 1, l < m && s.src.charCodeAt(l) === 40) {
      for (b = !1, l++; l < m && (i = s.src.charCodeAt(l), !(!t(i) && i !== 10)); l++)
        ;
      if (l >= m)
        return !1;
      if (k = l, f = s.md.helpers.parseLinkDestination(s.src, l, s.posMax), f.ok) {
        for (v = s.md.normalizeLink(f.str), s.md.validateLink(v) ? l = f.pos : v = "", k = l; l < m && (i = s.src.charCodeAt(l), !(!t(i) && i !== 10)); l++)
          ;
        if (f = s.md.helpers.parseLinkTitle(s.src, l, s.posMax), l < m && k !== l && f.ok)
          for (x = f.str, l = f.pos; l < m && (i = s.src.charCodeAt(l), !(!t(i) && i !== 10)); l++)
            ;
      }
      (l >= m || s.src.charCodeAt(l) !== 41) && (b = !0), l++;
    }
    if (b) {
      if (typeof s.env.references > "u")
        return !1;
      if (l < m && s.src.charCodeAt(l) === 91 ? (k = l + 1, l = s.md.helpers.parseLinkLabel(s, l), l >= 0 ? c = s.src.slice(k, l++) : l = a + 1) : l = a + 1, c || (c = s.src.slice(u, a)), d = s.env.references[e(c)], !d)
        return s.pos = C, !1;
      v = d.href, x = d.title;
    }
    return r || (s.pos = u, s.posMax = a, h = s.push("link_open", "a", 1), h.attrs = o = [["href", v]], x && o.push(["title", x]), s.linkLevel++, s.md.inline.tokenize(s), s.linkLevel--, h = s.push("link_close", "a", -1)), s.pos = l, s.posMax = m, !0;
  }, ho;
}
var po, ba;
function HV() {
  if (ba) return po;
  ba = 1;
  var e = ke().normalizeReference, t = ke().isSpace;
  return po = function(s, r) {
    var o, i, c, a, u, l, f, d, h, v, x, C, m, k = "", b = s.pos, p = s.posMax;
    if (s.src.charCodeAt(s.pos) !== 33 || s.src.charCodeAt(s.pos + 1) !== 91 || (l = s.pos + 2, u = s.md.helpers.parseLinkLabel(s, s.pos + 1, !1), u < 0))
      return !1;
    if (f = u + 1, f < p && s.src.charCodeAt(f) === 40) {
      for (f++; f < p && (i = s.src.charCodeAt(f), !(!t(i) && i !== 10)); f++)
        ;
      if (f >= p)
        return !1;
      for (m = f, h = s.md.helpers.parseLinkDestination(s.src, f, s.posMax), h.ok && (k = s.md.normalizeLink(h.str), s.md.validateLink(k) ? f = h.pos : k = ""), m = f; f < p && (i = s.src.charCodeAt(f), !(!t(i) && i !== 10)); f++)
        ;
      if (h = s.md.helpers.parseLinkTitle(s.src, f, s.posMax), f < p && m !== f && h.ok)
        for (v = h.str, f = h.pos; f < p && (i = s.src.charCodeAt(f), !(!t(i) && i !== 10)); f++)
          ;
      else
        v = "";
      if (f >= p || s.src.charCodeAt(f) !== 41)
        return s.pos = b, !1;
      f++;
    } else {
      if (typeof s.env.references > "u")
        return !1;
      if (f < p && s.src.charCodeAt(f) === 91 ? (m = f + 1, f = s.md.helpers.parseLinkLabel(s, f), f >= 0 ? a = s.src.slice(m, f++) : f = u + 1) : f = u + 1, a || (a = s.src.slice(l, u)), d = s.env.references[e(a)], !d)
        return s.pos = b, !1;
      k = d.href, v = d.title;
    }
    return r || (c = s.src.slice(l, u), s.md.inline.parse(
      c,
      s.md,
      s.env,
      C = []
    ), x = s.push("image", "img", 0), x.attrs = o = [["src", k], ["alt", ""]], x.children = C, x.content = c, v && o.push(["title", v])), s.pos = f, s.posMax = p, !0;
  }, po;
}
var go, va;
function jV() {
  if (va) return go;
  va = 1;
  var e = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, t = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
  return go = function(s, r) {
    var o, i, c, a, u, l, f = s.pos;
    if (s.src.charCodeAt(f) !== 60)
      return !1;
    for (u = s.pos, l = s.posMax; ; ) {
      if (++f >= l || (a = s.src.charCodeAt(f), a === 60)) return !1;
      if (a === 62) break;
    }
    return o = s.src.slice(u + 1, f), t.test(o) ? (i = s.md.normalizeLink(o), s.md.validateLink(i) ? (r || (c = s.push("link_open", "a", 1), c.attrs = [["href", i]], c.markup = "autolink", c.info = "auto", c = s.push("text", "", 0), c.content = s.md.normalizeLinkText(o), c = s.push("link_close", "a", -1), c.markup = "autolink", c.info = "auto"), s.pos += o.length + 2, !0) : !1) : e.test(o) ? (i = s.md.normalizeLink("mailto:" + o), s.md.validateLink(i) ? (r || (c = s.push("link_open", "a", 1), c.attrs = [["href", i]], c.markup = "autolink", c.info = "auto", c = s.push("text", "", 0), c.content = s.md.normalizeLinkText(o), c = s.push("link_close", "a", -1), c.markup = "autolink", c.info = "auto"), s.pos += o.length + 2, !0) : !1) : !1;
  }, go;
}
var mo, ya;
function VV() {
  if (ya) return mo;
  ya = 1;
  var e = _u().HTML_TAG_RE;
  function t(r) {
    return /^<a[>\s]/i.test(r);
  }
  function n(r) {
    return /^<\/a\s*>/i.test(r);
  }
  function s(r) {
    var o = r | 32;
    return o >= 97 && o <= 122;
  }
  return mo = function(o, i) {
    var c, a, u, l, f = o.pos;
    return !o.md.options.html || (u = o.posMax, o.src.charCodeAt(f) !== 60 || f + 2 >= u) || (c = o.src.charCodeAt(f + 1), c !== 33 && c !== 63 && c !== 47 && !s(c)) || (a = o.src.slice(f).match(e), !a) ? !1 : (i || (l = o.push("html_inline", "", 0), l.content = a[0], t(l.content) && o.linkLevel++, n(l.content) && o.linkLevel--), o.pos += a[0].length, !0);
  }, mo;
}
var _o, xa;
function KV() {
  if (xa) return _o;
  xa = 1;
  var e = hu(), t = ke().has, n = ke().isValidEntityCode, s = ke().fromCodePoint, r = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, o = /^&([a-z][a-z0-9]{1,31});/i;
  return _o = function(c, a) {
    var u, l, f, d, h = c.pos, v = c.posMax;
    if (c.src.charCodeAt(h) !== 38 || h + 1 >= v) return !1;
    if (u = c.src.charCodeAt(h + 1), u === 35) {
      if (f = c.src.slice(h).match(r), f)
        return a || (l = f[1][0].toLowerCase() === "x" ? parseInt(f[1].slice(1), 16) : parseInt(f[1], 10), d = c.push("text_special", "", 0), d.content = n(l) ? s(l) : s(65533), d.markup = f[0], d.info = "entity"), c.pos += f[0].length, !0;
    } else if (f = c.src.slice(h).match(o), f && t(e, f[1]))
      return a || (d = c.push("text_special", "", 0), d.content = e[f[1]], d.markup = f[0], d.info = "entity"), c.pos += f[0].length, !0;
    return !1;
  }, _o;
}
var bo, ka;
function GV() {
  if (ka) return bo;
  ka = 1;
  function e(t) {
    var n, s, r, o, i, c, a, u, l = {}, f = t.length;
    if (f) {
      var d = 0, h = -2, v = [];
      for (n = 0; n < f; n++)
        if (r = t[n], v.push(0), (t[d].marker !== r.marker || h !== r.token - 1) && (d = n), h = r.token, r.length = r.length || 0, !!r.close) {
          for (l.hasOwnProperty(r.marker) || (l[r.marker] = [-1, -1, -1, -1, -1, -1]), i = l[r.marker][(r.open ? 3 : 0) + r.length % 3], s = d - v[d] - 1, c = s; s > i; s -= v[s] + 1)
            if (o = t[s], o.marker === r.marker && o.open && o.end < 0 && (a = !1, (o.close || r.open) && (o.length + r.length) % 3 === 0 && (o.length % 3 !== 0 || r.length % 3 !== 0) && (a = !0), !a)) {
              u = s > 0 && !t[s - 1].open ? v[s - 1] + 1 : 0, v[n] = n - s + u, v[s] = u, r.open = !1, o.end = n, o.close = !1, c = -1, h = -2;
              break;
            }
          c !== -1 && (l[r.marker][(r.open ? 3 : 0) + (r.length || 0) % 3] = c);
        }
    }
  }
  return bo = function(n) {
    var s, r = n.tokens_meta, o = n.tokens_meta.length;
    for (e(n.delimiters), s = 0; s < o; s++)
      r[s] && r[s].delimiters && e(r[s].delimiters);
  }, bo;
}
var vo, Ea;
function ZV() {
  return Ea || (Ea = 1, vo = function(t) {
    var n, s, r = 0, o = t.tokens, i = t.tokens.length;
    for (n = s = 0; n < i; n++)
      o[n].nesting < 0 && r--, o[n].level = r, o[n].nesting > 0 && r++, o[n].type === "text" && n + 1 < i && o[n + 1].type === "text" ? o[n + 1].content = o[n].content + o[n + 1].content : (n !== s && (o[s] = o[n]), s++);
    n !== s && (o.length = s);
  }), vo;
}
var yo, wa;
function WV() {
  if (wa) return yo;
  wa = 1;
  var e = fi(), t = ke().isWhiteSpace, n = ke().isPunctChar, s = ke().isMdAsciiPunct;
  function r(o, i, c, a) {
    this.src = o, this.env = c, this.md = i, this.tokens = a, this.tokens_meta = Array(a.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
  }
  return r.prototype.pushPending = function() {
    var o = new e("text", "", 0);
    return o.content = this.pending, o.level = this.pendingLevel, this.tokens.push(o), this.pending = "", o;
  }, r.prototype.push = function(o, i, c) {
    this.pending && this.pushPending();
    var a = new e(o, i, c), u = null;
    return c < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), a.level = this.level, c > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], u = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(a), this.tokens_meta.push(u), a;
  }, r.prototype.scanDelims = function(o, i) {
    var c = o, a, u, l, f, d, h, v, x, C, m = !0, k = !0, b = this.posMax, p = this.src.charCodeAt(o);
    for (a = o > 0 ? this.src.charCodeAt(o - 1) : 32; c < b && this.src.charCodeAt(c) === p; )
      c++;
    return l = c - o, u = c < b ? this.src.charCodeAt(c) : 32, v = s(a) || n(String.fromCharCode(a)), C = s(u) || n(String.fromCharCode(u)), h = t(a), x = t(u), x ? m = !1 : C && (h || v || (m = !1)), h ? k = !1 : v && (x || C || (k = !1)), i ? (f = m, d = k) : (f = m && (!k || v), d = k && (!m || C)), {
      can_open: f,
      can_close: d,
      length: l
    };
  }, r.prototype.Token = e, yo = r, yo;
}
var xo, Ca;
function JV() {
  if (Ca) return xo;
  Ca = 1;
  var e = ui(), t = [
    ["text", qV()],
    ["linkify", PV()],
    ["newline", BV()],
    ["escape", $V()],
    ["backticks", zV()],
    ["strikethrough", pa().tokenize],
    ["emphasis", ma().tokenize],
    ["link", UV()],
    ["image", HV()],
    ["autolink", jV()],
    ["html_inline", VV()],
    ["entity", KV()]
  ], n = [
    ["balance_pairs", GV()],
    ["strikethrough", pa().postProcess],
    ["emphasis", ma().postProcess],
    // rules for pairs separate '**' into its own text tokens, which may be left unused,
    // rule below merges unused segments back with the rest of the text
    ["fragments_join", ZV()]
  ];
  function s() {
    var r;
    for (this.ruler = new e(), r = 0; r < t.length; r++)
      this.ruler.push(t[r][0], t[r][1]);
    for (this.ruler2 = new e(), r = 0; r < n.length; r++)
      this.ruler2.push(n[r][0], n[r][1]);
  }
  return s.prototype.skipToken = function(r) {
    var o, i, c = r.pos, a = this.ruler.getRules(""), u = a.length, l = r.md.options.maxNesting, f = r.cache;
    if (typeof f[c] < "u") {
      r.pos = f[c];
      return;
    }
    if (r.level < l) {
      for (i = 0; i < u; i++)
        if (r.level++, o = a[i](r, !0), r.level--, o) {
          if (c >= r.pos)
            throw new Error("inline rule didn't increment state.pos");
          break;
        }
    } else
      r.pos = r.posMax;
    o || r.pos++, f[c] = r.pos;
  }, s.prototype.tokenize = function(r) {
    for (var o, i, c, a = this.ruler.getRules(""), u = a.length, l = r.posMax, f = r.md.options.maxNesting; r.pos < l; ) {
      if (c = r.pos, r.level < f) {
        for (i = 0; i < u; i++)
          if (o = a[i](r, !1), o) {
            if (c >= r.pos)
              throw new Error("inline rule didn't increment state.pos");
            break;
          }
      }
      if (o) {
        if (r.pos >= l)
          break;
        continue;
      }
      r.pending += r.src[r.pos++];
    }
    r.pending && r.pushPending();
  }, s.prototype.parse = function(r, o, i, c) {
    var a, u, l, f = new this.State(r, o, i, c);
    for (this.tokenize(f), u = this.ruler2.getRules(""), l = u.length, a = 0; a < l; a++)
      u[a](f);
  }, s.prototype.State = WV(), xo = s, xo;
}
var ko, Aa;
function YV() {
  return Aa || (Aa = 1, ko = function(e) {
    var t = {};
    e = e || {}, t.src_Any = pu().source, t.src_Cc = gu().source, t.src_Z = mu().source, t.src_P = li().source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
    var n = "[><｜]";
    return t.src_pseudo_letter = "(?:(?!" + n + "|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|" + n + "|" + t.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + n + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = // Allow letters & digits (http://test1)
    "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|" + n + '|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t;
  }), ko;
}
var Eo, Sa;
function XV() {
  if (Sa) return Eo;
  Sa = 1;
  function e(b) {
    var p = Array.prototype.slice.call(arguments, 1);
    return p.forEach(function(E) {
      E && Object.keys(E).forEach(function(w) {
        b[w] = E[w];
      });
    }), b;
  }
  function t(b) {
    return Object.prototype.toString.call(b);
  }
  function n(b) {
    return t(b) === "[object String]";
  }
  function s(b) {
    return t(b) === "[object Object]";
  }
  function r(b) {
    return t(b) === "[object RegExp]";
  }
  function o(b) {
    return t(b) === "[object Function]";
  }
  function i(b) {
    return b.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
  }
  var c = {
    fuzzyLink: !0,
    fuzzyEmail: !0,
    fuzzyIP: !1
  };
  function a(b) {
    return Object.keys(b || {}).reduce(function(p, E) {
      return p || c.hasOwnProperty(E);
    }, !1);
  }
  var u = {
    "http:": {
      validate: function(b, p, E) {
        var w = b.slice(p);
        return E.re.http || (E.re.http = new RegExp(
          "^\\/\\/" + E.re.src_auth + E.re.src_host_port_strict + E.re.src_path,
          "i"
        )), E.re.http.test(w) ? w.match(E.re.http)[0].length : 0;
      }
    },
    "https:": "http:",
    "ftp:": "http:",
    "//": {
      validate: function(b, p, E) {
        var w = b.slice(p);
        return E.re.no_http || (E.re.no_http = new RegExp(
          "^" + E.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
          // with code comments
          "(?:localhost|(?:(?:" + E.re.src_domain + ")\\.)+" + E.re.src_domain_root + ")" + E.re.src_port + E.re.src_host_terminator + E.re.src_path,
          "i"
        )), E.re.no_http.test(w) ? p >= 3 && b[p - 3] === ":" || p >= 3 && b[p - 3] === "/" ? 0 : w.match(E.re.no_http)[0].length : 0;
      }
    },
    "mailto:": {
      validate: function(b, p, E) {
        var w = b.slice(p);
        return E.re.mailto || (E.re.mailto = new RegExp(
          "^" + E.re.src_email_name + "@" + E.re.src_host_strict,
          "i"
        )), E.re.mailto.test(w) ? w.match(E.re.mailto)[0].length : 0;
      }
    }
  }, l = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", f = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
  function d(b) {
    b.__index__ = -1, b.__text_cache__ = "";
  }
  function h(b) {
    return function(p, E) {
      var w = p.slice(E);
      return b.test(w) ? w.match(b)[0].length : 0;
    };
  }
  function v() {
    return function(b, p) {
      p.normalize(b);
    };
  }
  function x(b) {
    var p = b.re = YV()(b.__opts__), E = b.__tlds__.slice();
    b.onCompile(), b.__tlds_replaced__ || E.push(l), E.push(p.src_xn), p.src_tlds = E.join("|");
    function w(A) {
      return A.replace("%TLDS%", p.src_tlds);
    }
    p.email_fuzzy = RegExp(w(p.tpl_email_fuzzy), "i"), p.link_fuzzy = RegExp(w(p.tpl_link_fuzzy), "i"), p.link_no_ip_fuzzy = RegExp(w(p.tpl_link_no_ip_fuzzy), "i"), p.host_fuzzy_test = RegExp(w(p.tpl_host_fuzzy_test), "i");
    var $ = [];
    b.__compiled__ = {};
    function R(A, N) {
      throw new Error('(LinkifyIt) Invalid schema "' + A + '": ' + N);
    }
    Object.keys(b.__schemas__).forEach(function(A) {
      var N = b.__schemas__[A];
      if (N !== null) {
        var I = { validate: null, link: null };
        if (b.__compiled__[A] = I, s(N)) {
          r(N.validate) ? I.validate = h(N.validate) : o(N.validate) ? I.validate = N.validate : R(A, N), o(N.normalize) ? I.normalize = N.normalize : N.normalize ? R(A, N) : I.normalize = v();
          return;
        }
        if (n(N)) {
          $.push(A);
          return;
        }
        R(A, N);
      }
    }), $.forEach(function(A) {
      b.__compiled__[b.__schemas__[A]] && (b.__compiled__[A].validate = b.__compiled__[b.__schemas__[A]].validate, b.__compiled__[A].normalize = b.__compiled__[b.__schemas__[A]].normalize);
    }), b.__compiled__[""] = { validate: null, normalize: v() };
    var D = Object.keys(b.__compiled__).filter(function(A) {
      return A.length > 0 && b.__compiled__[A];
    }).map(i).join("|");
    b.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + p.src_ZPCc + "))(" + D + ")", "i"), b.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + p.src_ZPCc + "))(" + D + ")", "ig"), b.re.schema_at_start = RegExp("^" + b.re.schema_search.source, "i"), b.re.pretest = RegExp(
      "(" + b.re.schema_test.source + ")|(" + b.re.host_fuzzy_test.source + ")|@",
      "i"
    ), d(b);
  }
  function C(b, p) {
    var E = b.__index__, w = b.__last_index__, $ = b.__text_cache__.slice(E, w);
    this.schema = b.__schema__.toLowerCase(), this.index = E + p, this.lastIndex = w + p, this.raw = $, this.text = $, this.url = $;
  }
  function m(b, p) {
    var E = new C(b, p);
    return b.__compiled__[E.schema].normalize(E, b), E;
  }
  function k(b, p) {
    if (!(this instanceof k))
      return new k(b, p);
    p || a(b) && (p = b, b = {}), this.__opts__ = e({}, c, p), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = e({}, u, b), this.__compiled__ = {}, this.__tlds__ = f, this.__tlds_replaced__ = !1, this.re = {}, x(this);
  }
  return k.prototype.add = function(p, E) {
    return this.__schemas__[p] = E, x(this), this;
  }, k.prototype.set = function(p) {
    return this.__opts__ = e(this.__opts__, p), this;
  }, k.prototype.test = function(p) {
    if (this.__text_cache__ = p, this.__index__ = -1, !p.length)
      return !1;
    var E, w, $, R, D, A, N, I, ee;
    if (this.re.schema_test.test(p)) {
      for (N = this.re.schema_search, N.lastIndex = 0; (E = N.exec(p)) !== null; )
        if (R = this.testSchemaAt(p, E[2], N.lastIndex), R) {
          this.__schema__ = E[2], this.__index__ = E.index + E[1].length, this.__last_index__ = E.index + E[0].length + R;
          break;
        }
    }
    return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (I = p.search(this.re.host_fuzzy_test), I >= 0 && (this.__index__ < 0 || I < this.__index__) && (w = p.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (D = w.index + w[1].length, (this.__index__ < 0 || D < this.__index__) && (this.__schema__ = "", this.__index__ = D, this.__last_index__ = w.index + w[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (ee = p.indexOf("@"), ee >= 0 && ($ = p.match(this.re.email_fuzzy)) !== null && (D = $.index + $[1].length, A = $.index + $[0].length, (this.__index__ < 0 || D < this.__index__ || D === this.__index__ && A > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = D, this.__last_index__ = A))), this.__index__ >= 0;
  }, k.prototype.pretest = function(p) {
    return this.re.pretest.test(p);
  }, k.prototype.testSchemaAt = function(p, E, w) {
    return this.__compiled__[E.toLowerCase()] ? this.__compiled__[E.toLowerCase()].validate(p, w, this) : 0;
  }, k.prototype.match = function(p) {
    var E = 0, w = [];
    this.__index__ >= 0 && this.__text_cache__ === p && (w.push(m(this, E)), E = this.__last_index__);
    for (var $ = E ? p.slice(E) : p; this.test($); )
      w.push(m(this, E)), $ = $.slice(this.__last_index__), E += this.__last_index__;
    return w.length ? w : null;
  }, k.prototype.matchAtStart = function(p) {
    if (this.__text_cache__ = p, this.__index__ = -1, !p.length) return null;
    var E = this.re.schema_at_start.exec(p);
    if (!E) return null;
    var w = this.testSchemaAt(p, E[2], E[0].length);
    return w ? (this.__schema__ = E[2], this.__index__ = E.index + E[1].length, this.__last_index__ = E.index + E[0].length + w, m(this, 0)) : null;
  }, k.prototype.tlds = function(p, E) {
    return p = Array.isArray(p) ? p : [p], E ? (this.__tlds__ = this.__tlds__.concat(p).sort().filter(function(w, $, R) {
      return w !== R[$ - 1];
    }).reverse(), x(this), this) : (this.__tlds__ = p.slice(), this.__tlds_replaced__ = !0, x(this), this);
  }, k.prototype.normalize = function(p) {
    p.schema || (p.url = "http://" + p.url), p.schema === "mailto:" && !/^mailto:/i.test(p.url) && (p.url = "mailto:" + p.url);
  }, k.prototype.onCompile = function() {
  }, Eo = k, Eo;
}
const Rn = 2147483647, At = 36, hi = 1, ts = 26, QV = 38, e7 = 700, bu = 72, vu = 128, yu = "-", t7 = /^xn--/, n7 = /[^\0-\x7F]/, s7 = /[\x2E\u3002\uFF0E\uFF61]/g, r7 = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, wo = At - hi, St = Math.floor, Co = String.fromCharCode;
function Gt(e) {
  throw new RangeError(r7[e]);
}
function o7(e, t) {
  const n = [];
  let s = e.length;
  for (; s--; )
    n[s] = t(e[s]);
  return n;
}
function xu(e, t) {
  const n = e.split("@");
  let s = "";
  n.length > 1 && (s = n[0] + "@", e = n[1]), e = e.replace(s7, ".");
  const r = e.split("."), o = o7(r, t).join(".");
  return s + o;
}
function di(e) {
  const t = [];
  let n = 0;
  const s = e.length;
  for (; n < s; ) {
    const r = e.charCodeAt(n++);
    if (r >= 55296 && r <= 56319 && n < s) {
      const o = e.charCodeAt(n++);
      (o & 64512) == 56320 ? t.push(((r & 1023) << 10) + (o & 1023) + 65536) : (t.push(r), n--);
    } else
      t.push(r);
  }
  return t;
}
const ku = (e) => String.fromCodePoint(...e), i7 = function(e) {
  return e >= 48 && e < 58 ? 26 + (e - 48) : e >= 65 && e < 91 ? e - 65 : e >= 97 && e < 123 ? e - 97 : At;
}, Ta = function(e, t) {
  return e + 22 + 75 * (e < 26) - ((t != 0) << 5);
}, Eu = function(e, t, n) {
  let s = 0;
  for (e = n ? St(e / e7) : e >> 1, e += St(e / t); e > wo * ts >> 1; s += At)
    e = St(e / wo);
  return St(s + (wo + 1) * e / (e + QV));
}, pi = function(e) {
  const t = [], n = e.length;
  let s = 0, r = vu, o = bu, i = e.lastIndexOf(yu);
  i < 0 && (i = 0);
  for (let c = 0; c < i; ++c)
    e.charCodeAt(c) >= 128 && Gt("not-basic"), t.push(e.charCodeAt(c));
  for (let c = i > 0 ? i + 1 : 0; c < n; ) {
    const a = s;
    for (let l = 1, f = At; ; f += At) {
      c >= n && Gt("invalid-input");
      const d = i7(e.charCodeAt(c++));
      d >= At && Gt("invalid-input"), d > St((Rn - s) / l) && Gt("overflow"), s += d * l;
      const h = f <= o ? hi : f >= o + ts ? ts : f - o;
      if (d < h)
        break;
      const v = At - h;
      l > St(Rn / v) && Gt("overflow"), l *= v;
    }
    const u = t.length + 1;
    o = Eu(s - a, u, a == 0), St(s / u) > Rn - r && Gt("overflow"), r += St(s / u), s %= u, t.splice(s++, 0, r);
  }
  return String.fromCodePoint(...t);
}, gi = function(e) {
  const t = [];
  e = di(e);
  const n = e.length;
  let s = vu, r = 0, o = bu;
  for (const a of e)
    a < 128 && t.push(Co(a));
  const i = t.length;
  let c = i;
  for (i && t.push(yu); c < n; ) {
    let a = Rn;
    for (const l of e)
      l >= s && l < a && (a = l);
    const u = c + 1;
    a - s > St((Rn - r) / u) && Gt("overflow"), r += (a - s) * u, s = a;
    for (const l of e)
      if (l < s && ++r > Rn && Gt("overflow"), l === s) {
        let f = r;
        for (let d = At; ; d += At) {
          const h = d <= o ? hi : d >= o + ts ? ts : d - o;
          if (f < h)
            break;
          const v = f - h, x = At - h;
          t.push(
            Co(Ta(h + v % x, 0))
          ), f = St(v / x);
        }
        t.push(Co(Ta(f, 0))), o = Eu(r, u, c === i), r = 0, ++c;
      }
    ++r, ++s;
  }
  return t.join("");
}, wu = function(e) {
  return xu(e, function(t) {
    return t7.test(t) ? pi(t.slice(4).toLowerCase()) : t;
  });
}, Cu = function(e) {
  return xu(e, function(t) {
    return n7.test(t) ? "xn--" + gi(t) : t;
  });
}, c7 = {
  /**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
  version: "2.3.1",
  /**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
  ucs2: {
    decode: di,
    encode: ku
  },
  decode: pi,
  encode: gi,
  toASCII: Cu,
  toUnicode: wu
}, a7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: pi,
  default: c7,
  encode: gi,
  toASCII: Cu,
  toUnicode: wu,
  ucs2decode: di,
  ucs2encode: ku
}, Symbol.toStringTag, { value: "Module" })), l7 = /* @__PURE__ */ op(a7);
var Ao, Ra;
function u7() {
  return Ra || (Ra = 1, Ao = {
    options: {
      html: !1,
      // Enable HTML tags in source
      xhtmlOut: !1,
      // Use '/' to close single tags (<br />)
      breaks: !1,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkify: !1,
      // autoconvert URL-like texts to links
      // Enable some language-neutral replacements + quotes beautification
      typographer: !1,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      //
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: "“”‘’",
      /* “”‘’ */
      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,
      maxNesting: 100
      // Internal protection, recursion limit
    },
    components: {
      core: {},
      block: {},
      inline: {}
    }
  }), Ao;
}
var So, Da;
function f7() {
  return Da || (Da = 1, So = {
    options: {
      html: !1,
      // Enable HTML tags in source
      xhtmlOut: !1,
      // Use '/' to close single tags (<br />)
      breaks: !1,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkify: !1,
      // autoconvert URL-like texts to links
      // Enable some language-neutral replacements + quotes beautification
      typographer: !1,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      //
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: "“”‘’",
      /* “”‘’ */
      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,
      maxNesting: 20
      // Internal protection, recursion limit
    },
    components: {
      core: {
        rules: [
          "normalize",
          "block",
          "inline",
          "text_join"
        ]
      },
      block: {
        rules: [
          "paragraph"
        ]
      },
      inline: {
        rules: [
          "text"
        ],
        rules2: [
          "balance_pairs",
          "fragments_join"
        ]
      }
    }
  }), So;
}
var To, Ma;
function h7() {
  return Ma || (Ma = 1, To = {
    options: {
      html: !0,
      // Enable HTML tags in source
      xhtmlOut: !0,
      // Use '/' to close single tags (<br />)
      breaks: !1,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkify: !1,
      // autoconvert URL-like texts to links
      // Enable some language-neutral replacements + quotes beautification
      typographer: !1,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      //
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: "“”‘’",
      /* “”‘’ */
      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,
      maxNesting: 20
      // Internal protection, recursion limit
    },
    components: {
      core: {
        rules: [
          "normalize",
          "block",
          "inline",
          "text_join"
        ]
      },
      block: {
        rules: [
          "blockquote",
          "code",
          "fence",
          "heading",
          "hr",
          "html_block",
          "lheading",
          "list",
          "reference",
          "paragraph"
        ]
      },
      inline: {
        rules: [
          "autolink",
          "backticks",
          "emphasis",
          "entity",
          "escape",
          "html_inline",
          "image",
          "link",
          "newline",
          "text"
        ],
        rules2: [
          "balance_pairs",
          "emphasis",
          "fragments_join"
        ]
      }
    }
  }), To;
}
var Ro, Ia;
function d7() {
  if (Ia) return Ro;
  Ia = 1;
  var e = ke(), t = hV(), n = dV(), s = kV(), r = FV(), o = JV(), i = XV(), c = du(), a = l7, u = {
    default: u7(),
    zero: f7(),
    commonmark: h7()
  }, l = /^(vbscript|javascript|file|data):/, f = /^data:image\/(gif|png|jpeg|webp);/;
  function d(m) {
    var k = m.trim().toLowerCase();
    return l.test(k) ? !!f.test(k) : !0;
  }
  var h = ["http:", "https:", "mailto:"];
  function v(m) {
    var k = c.parse(m, !0);
    if (k.hostname && (!k.protocol || h.indexOf(k.protocol) >= 0))
      try {
        k.hostname = a.toASCII(k.hostname);
      } catch {
      }
    return c.encode(c.format(k));
  }
  function x(m) {
    var k = c.parse(m, !0);
    if (k.hostname && (!k.protocol || h.indexOf(k.protocol) >= 0))
      try {
        k.hostname = a.toUnicode(k.hostname);
      } catch {
      }
    return c.decode(c.format(k), c.decode.defaultChars + "%");
  }
  function C(m, k) {
    if (!(this instanceof C))
      return new C(m, k);
    k || e.isString(m) || (k = m || {}, m = "default"), this.inline = new o(), this.block = new r(), this.core = new s(), this.renderer = new n(), this.linkify = new i(), this.validateLink = d, this.normalizeLink = v, this.normalizeLinkText = x, this.utils = e, this.helpers = e.assign({}, t), this.options = {}, this.configure(m), k && this.set(k);
  }
  return C.prototype.set = function(m) {
    return e.assign(this.options, m), this;
  }, C.prototype.configure = function(m) {
    var k = this, b;
    if (e.isString(m) && (b = m, m = u[b], !m))
      throw new Error('Wrong `markdown-it` preset "' + b + '", check name');
    if (!m)
      throw new Error("Wrong `markdown-it` preset, can't be empty");
    return m.options && k.set(m.options), m.components && Object.keys(m.components).forEach(function(p) {
      m.components[p].rules && k[p].ruler.enableOnly(m.components[p].rules), m.components[p].rules2 && k[p].ruler2.enableOnly(m.components[p].rules2);
    }), this;
  }, C.prototype.enable = function(m, k) {
    var b = [];
    Array.isArray(m) || (m = [m]), ["core", "block", "inline"].forEach(function(E) {
      b = b.concat(this[E].ruler.enable(m, !0));
    }, this), b = b.concat(this.inline.ruler2.enable(m, !0));
    var p = m.filter(function(E) {
      return b.indexOf(E) < 0;
    });
    if (p.length && !k)
      throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + p);
    return this;
  }, C.prototype.disable = function(m, k) {
    var b = [];
    Array.isArray(m) || (m = [m]), ["core", "block", "inline"].forEach(function(E) {
      b = b.concat(this[E].ruler.disable(m, !0));
    }, this), b = b.concat(this.inline.ruler2.disable(m, !0));
    var p = m.filter(function(E) {
      return b.indexOf(E) < 0;
    });
    if (p.length && !k)
      throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + p);
    return this;
  }, C.prototype.use = function(m) {
    var k = [this].concat(Array.prototype.slice.call(arguments, 1));
    return m.apply(m, k), this;
  }, C.prototype.parse = function(m, k) {
    if (typeof m != "string")
      throw new Error("Input data should be a String");
    var b = new this.core.State(m, this, k);
    return this.core.process(b), b.tokens;
  }, C.prototype.render = function(m, k) {
    return k = k || {}, this.renderer.render(this.parse(m, k), this.options, k);
  }, C.prototype.parseInline = function(m, k) {
    var b = new this.core.State(m, this, k);
    return b.inlineMode = !0, this.core.process(b), b.tokens;
  }, C.prototype.renderInline = function(m, k) {
    return k = k || {}, this.renderer.render(this.parseInline(m, k), this.options, k);
  }, Ro = C, Ro;
}
var Do, Na;
function p7() {
  return Na || (Na = 1, Do = d7()), Do;
}
var g7 = p7();
const m7 = /* @__PURE__ */ ci(g7), Oa = /* @__PURE__ */ Bt({
  name: "VueMarkdown",
  props: {
    source: {
      type: String,
      required: !0
    },
    options: {
      type: Object,
      required: !1
    },
    plugins: {
      type: Array,
      required: !1
    }
  },
  setup(e) {
    const t = Be(new m7(e.options ?? {}));
    for (const s of e.plugins ?? [])
      t.value.use(s);
    const n = Se(() => t.value.render(e.source));
    return () => Hl("div", { innerHTML: n.value });
  }
}), _7 = { class: "chat-message-bot-content" }, b7 = {
  key: 0,
  class: "flex items-center gap-2 mb-2"
}, v7 = { class: "w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center bg-zinc-100" }, y7 = ["src", "alt"], x7 = {
  key: 0,
  class: "font-medium text-sm text-zinc-950 leading-normal tracking-tight"
}, k7 = /* @__PURE__ */ Bt({
  __name: "Message",
  props: {
    message: {}
  },
  setup(e, { expose: t }) {
    const n = e;
    Ot.registerLanguage("javascript", eu), Ot.registerLanguage("typescript", Lp), Ot.registerLanguage("python", Np), Ot.registerLanguage("xml", tu), Ot.registerLanguage("bash", Ip);
    const { message: s } = Of(n), { options: r } = Mn(), o = Be(null), i = Se(() => r == null ? void 0 : r.primaryColor), c = Se(() => r == null ? void 0 : r.secondaryColor), a = Se(() => {
      const m = {};
      return i.value && (m.backgroundColor = i.value), c.value && (m.color = c.value), m;
    }), u = Se(() => r == null ? void 0 : r.showAvatar), l = Se(() => {
      var m, k;
      return ((k = (m = r == null ? void 0 : r.i18n) == null ? void 0 : m.en) == null ? void 0 : k.title) || "";
    }), f = Se(() => r == null ? void 0 : r.showBotInfoMessage), d = Se(() => s.value.text || "&lt;Empty response&gt;"), h = (m) => {
      m.use(Pp, {
        attrs: {
          target: "_blank",
          rel: "noopener"
        }
      });
    }, v = () => {
      var m;
      (m = o.value) != null && m.scrollIntoView && o.value.scrollIntoView({
        block: "start"
      });
    }, x = {
      highlight(m, k) {
        if (k && Ot.getLanguage(k))
          try {
            return Ot.highlight(m, { language: k }).value;
          } catch {
          }
        return "";
      }
    }, C = { ...(r == null ? void 0 : r.messageComponents) ?? {} };
    return t({ scrollToView: v }), (m, k) => me(s).sender === "user" ? (re(), xe("div", {
      key: 0,
      ref_key: "messageContainer",
      ref: o,
      class: "relative flex w-full flex-col items-end gap-1"
    }, [
      pe("div", {
        class: "chat-message-user-content",
        style: Rt(a.value)
      }, [
        Zt(m.$slots, "default", {}, () => [
          me(s).type === "component" && C[me(s).key] ? (re(), $e(Oi(C[me(s).key]), Ri(Ds({ key: 0 }, me(s).arguments)), null, 16)) : (re(), $e(me(Oa), {
            key: 1,
            class: "chat-message-markdown",
            source: d.value,
            options: x,
            plugins: [h]
          }, null, 8, ["source", "plugins"]))
        ], !0)
      ], 4)
    ], 512)) : (re(), xe("div", {
      key: 1,
      ref_key: "messageContainer",
      ref: o,
      class: "relative flex w-full max-w-full flex-col items-baseline gap-1"
    }, [
      pe("div", _7, [
        f.value && (u.value || l.value) ? (re(), xe("div", b7, [
          pe("div", v7, [
            u.value ? (re(), xe("img", {
              key: 0,
              src: u.value,
              alt: l.value || "Bot",
              class: "w-6 h-6 rounded-full object-cover"
            }, null, 8, y7)) : (re(), $e(me(nu), {
              key: 1,
              height: "16",
              width: "16",
              class: "text-black"
            }))
          ]),
          l.value ? (re(), xe("span", x7, Kn(l.value), 1)) : _t("", !0)
        ])) : _t("", !0),
        Zt(m.$slots, "default", {}, () => [
          me(s).type === "component" && C[me(s).key] ? (re(), $e(Oi(C[me(s).key]), Ri(Ds({ key: 0 }, me(s).arguments)), null, 16)) : (re(), $e(me(Oa), {
            key: 1,
            class: "chat-message-markdown",
            source: d.value,
            options: x,
            plugins: [h]
          }, null, 8, ["source", "plugins"]))
        ], !0)
      ])
    ], 512));
  }
}), Au = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, La = /* @__PURE__ */ Au(k7, [["__scopeId", "data-v-7a73563f"]]), E7 = /* @__PURE__ */ Bt({
  __name: "MessageTyping",
  props: {
    animation: { default: "bouncing" }
  },
  setup(e, { expose: t }) {
    const n = e, s = Be(), r = Se(() => ({
      [`chat-message-typing-animation-${n.animation}`]: !0
    })), o = () => {
      var i;
      (i = s.value) != null && i.scrollIntoView && s.value.scrollIntoView({
        block: "start"
      });
    };
    return tn(() => {
      o();
    }), t({ scrollToView: o }), (i, c) => (re(), xe("div", {
      ref_key: "messageContainer",
      ref: s,
      class: "relative flex w-full max-w-full flex-col items-baseline gap-1",
      "data-test-id": "chat-message-typing"
    }, [
      pe("div", {
        class: mt([r.value, "chat-message-bot-typing chat-message-typing"])
      }, c[0] || (c[0] = [
        pe("div", { class: "flex justify-center items-center" }, [
          pe("span", { class: "typing-dot block h-1.5 w-1.5 rounded-full bg-zinc-600 m-0.5" }),
          pe("span", { class: "typing-dot block h-1.5 w-1.5 rounded-full bg-zinc-600 m-0.5" }),
          pe("span", { class: "typing-dot block h-1.5 w-1.5 rounded-full bg-zinc-600 m-0.5" })
        ], -1)
      ]), 2)
    ], 512));
  }
}), w7 = /* @__PURE__ */ Au(E7, [["__scopeId", "data-v-a40fdf19"]]), C7 = { class: "scrollbar-minimal flex w-full flex-1 flex-col overflow-y-auto px-5 pt-5 sm:overscroll-contain" }, A7 = { class: "flex flex-1 flex-col gap-1" }, S7 = /* @__PURE__ */ Bt({
  __name: "MessagesList",
  props: {
    messages: {}
  },
  setup(e) {
    const t = ai(), n = Be([]), { initialMessages: s, waitingForResponse: r } = t;
    return xs(
      () => n.value.length,
      () => {
        const o = n.value[n.value.length - 1];
        o && o.scrollToView();
      }
    ), (o, i) => (re(), xe("div", C7, [
      pe("div", A7, [
        (re(!0), xe(Ke, null, qo(me(s), (c) => (re(), $e(La, {
          key: c.id,
          message: c
        }, null, 8, ["message"]))), 128)),
        (re(!0), xe(Ke, null, qo(o.messages, (c) => (re(), $e(La, {
          key: c.id,
          ref_for: !0,
          ref_key: "messageComponents",
          ref: n,
          message: c
        }, {
          beforeMessage: qt(({ message: a }) => [
            Zt(o.$slots, "beforeMessage", Ds({ ref_for: !0 }, { message: a }))
          ]),
          _: 2
        }, 1032, ["message"]))), 128)),
        me(r) ? (re(), $e(w7, { key: 0 })) : _t("", !0),
        i[0] || (i[0] = pe("div", { class: "relative bottom-0 mt-auto w-full pt-16" }, null, -1))
      ])
    ]));
  }
}), T7 = { class: "relative flex shrink-0 overflow-hidden rounded-full mr-2 size-10 border border-white/[0.10] items-center justify-center" }, R7 = ["src", "alt"], D7 = { class: "flex flex-col" }, M7 = { class: "font-medium text-sm tracking-tight" }, I7 = { class: "flex items-center gap-2" }, N7 = ["title"], O7 = ["title"], L7 = { class: "w-full overflow-x-hidden whitespace-pre-wrap break-words text-center" }, F7 = { class: "mb-1" }, Su = /* @__PURE__ */ Bt({
  __name: "Chat",
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = t, { t: s } = ru(), r = ai(), { messages: o, currentSessionId: i } = r, { options: c } = Mn(), a = Se(() => c.mode === "window" && c.showWindowResetButton), u = Se(() => c.mode === "window"), l = Se(() => c == null ? void 0 : c.primaryColor), f = Se(() => c == null ? void 0 : c.secondaryColor);
    async function d() {
      r.loadPreviousSession && (await r.loadPreviousSession(), Jt(() => {
        nt.emit("scrollToBottom");
      }));
    }
    async function h() {
      r.startNewSession && (await r.startNewSession(), Jt(() => {
        nt.emit("scrollToBottom");
      }));
    }
    function v() {
      n("close");
    }
    return tn(async () => {
      await d(), i.value || r.startNewSession && (await r.startNewSession(), Jt(() => {
        nt.emit("scrollToBottom");
      }));
    }), (x, C) => (re(), $e(Mp, {
      class: "chat-wrapper",
      style: Rt(l.value ? { "--header-bg-color": l.value, "--header-text-color": f.value || "white" } : {})
    }, {
      header: qt(() => [
        pe("div", {
          class: mt(["my-4 flex h-10 items-center", l.value ? "text-[var(--header-text-color)]" : ""])
        }, [
          pe("span", T7, [
            me(c).showAvatar ? (re(), xe("img", {
              key: 0,
              src: me(c).showAvatar,
              alt: me(s)("title"),
              class: "w-full h-full object-cover"
            }, null, 8, R7)) : (re(), $e(me(nu), {
              key: 1,
              height: "24",
              width: "24",
              class: mt(l.value ? "text-[var(--header-text-color)]" : "text-black")
            }, null, 8, ["class"]))
          ]),
          pe("div", D7, [
            pe("h1", M7, Kn(me(s)("title")), 1)
          ])
        ], 2),
        pe("div", I7, [
          a.value ? (re(), xe("button", {
            key: 0,
            class: mt(["flex border-none bg-transparent cursor-pointer transition-all duration-200 hover:rotate-180", l.value ? "text-[var(--header-text-color)]" : ""]),
            title: me(s)("resetButtonTooltip"),
            onClick: h
          }, [
            Ie(me(mp), {
              height: "20",
              width: "20"
            })
          ], 10, N7)) : _t("", !0),
          u.value ? (re(), xe("button", {
            key: 1,
            class: mt(["flex border-none bg-transparent cursor-pointer transition-colors hover:rotate-90", l.value ? "text-[var(--header-text-color)]" : ""]),
            title: me(s)("closeButtonTooltip"),
            onClick: v
          }, [
            Ie(me(su), {
              height: "24",
              width: "24"
            })
          ], 10, O7)) : _t("", !0)
        ])
      ]),
      input: qt(() => [
        me(i) ? (re(), $e(Ap, { key: 0 })) : _t("", !0)
      ]),
      footer: qt(() => [
        pe("div", L7, [
          pe("div", F7, Kn(me(s)("footer")), 1),
          C[0] || (C[0] = pe("div", null, [
            pe("a", {
              href: "https://conexia-agency.com/",
              target: "_blank",
              rel: "noopener noreferrer",
              class: "font-bold underline hover:underline"
            }, "Service Conexia")
          ], -1))
        ])
      ]),
      default: qt(() => [
        Ie(S7, { messages: me(o) }, null, 8, ["messages"])
      ]),
      _: 1
    }, 8, ["style"]));
  }
}), q7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function P7(e, t) {
  return re(), xe("svg", q7, t[0] || (t[0] = [
    pe("path", {
      fill: "currentColor",
      d: "M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8"
    }, null, -1)
  ]));
}
const B7 = { name: "mdi-chat", render: P7 }, $7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function z7(e, t) {
  return re(), xe("svg", $7, t[0] || (t[0] = [
    pe("path", {
      fill: "currentColor",
      d: "M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
    }, null, -1)
  ]));
}
const U7 = { name: "mdi-chevron-down", render: z7 }, H7 = { class: "relative bg-white border border-zinc-200 rounded-2xl shadow-lg p-4 max-w-80 mb-2 mr-2 md:mr-0" }, j7 = { class: "pr-6 space-y-2" }, V7 = { class: "fixed inset-0 md:relative md:inset-auto h-full w-full overflow-hidden border-0 md:border-[1px] md:border-zinc-100 md:rounded-[20px] bg-white" }, K7 = ["src"], G7 = /* @__PURE__ */ Bt({
  __name: "ChatWindow",
  setup(e) {
    const t = Be(!1), n = Be(!1), s = Be(0), r = Be(!0), { options: o } = Mn(), i = Se(() => o == null ? void 0 : o.primaryColor), c = Se(() => o == null ? void 0 : o.secondaryColor), a = Se(() => {
      const C = {};
      return i.value && (C.backgroundColor = i.value), c.value && (C.color = c.value), C;
    }), u = Se(() => o != null && o.showAvatar && typeof o.showAvatar == "string" && o.showAvatar.trim() !== "" ? o.showAvatar : null), l = Se(() => !t.value || !n.value), f = Se(() => {
      var C;
      return r.value && !t.value && (((C = o == null ? void 0 : o.initialMessages) == null ? void 0 : C.length) ?? 0) > 0;
    }), d = Se(() => n.value ? "100vh" : s.value === 0 ? "52rem" : s.value < 600 || s.value < 900 ? "85vh" : "52rem");
    function h() {
      n.value = window.innerWidth < 768, s.value = window.innerHeight;
    }
    function v() {
      t.value ? t.value = !1 : (r.value = !1, setTimeout(() => {
        t.value = !0, Jt(() => {
          nt.emit("scrollToBottom");
        });
      }, 100));
    }
    function x() {
      r.value = !1;
    }
    return tn(() => {
      h(), window.addEventListener("resize", h);
    }), Hs(() => {
      window.removeEventListener("resize", h);
    }), (C, m) => (re(), xe("div", {
      class: "fixed z-50 bottom-0 right-0 md:bottom-4 md:right-4 h-full w-full flex flex-col items-end justify-end gap-4 md:mx-auto md:my-auto md:max-w-[36rem]",
      style: Rt({ "max-height": d.value })
    }, [
      Ie(hr, {
        "enter-active-class": "transition-all duration-200 ease-out",
        "leave-active-class": "transition-all duration-75 ease-in",
        "enter-from-class": "scale-95 opacity-0 translate-y-2",
        "enter-to-class": "scale-100 opacity-100 translate-y-0",
        "leave-from-class": "scale-100 opacity-100 translate-y-0",
        "leave-to-class": "scale-95 opacity-0 translate-y-2"
      }, {
        default: qt(() => {
          var k;
          return [
            ys(pe("div", H7, [
              pe("button", {
                onClick: x,
                class: "absolute top-2 right-2 w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              }, [
                Ie(me(su), {
                  height: "14",
                  width: "14",
                  class: "text-gray-600"
                })
              ]),
              pe("div", j7, [
                (re(!0), xe(Ke, null, qo((k = me(o)) == null ? void 0 : k.initialMessages, (b, p) => (re(), xe("div", {
                  key: p,
                  class: "text-sm text-gray-800 leading-relaxed"
                }, Kn(b), 1))), 128))
              ]),
              m[0] || (m[0] = pe("div", { class: "absolute -bottom-2 right-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white drop-shadow-sm" }, null, -1))
            ], 512), [
              [pr, f.value]
            ])
          ];
        }),
        _: 1
      }),
      Ie(hr, {
        "enter-active-class": "transition-all duration-150 ease-in-out",
        "leave-active-class": "transition-all duration-150 ease-in-out",
        "enter-from-class": "scale-0 opacity-0",
        "enter-to-class": "scale-100 opacity-100",
        "leave-from-class": "scale-100 opacity-100",
        "leave-to-class": "scale-0 opacity-0"
      }, {
        default: qt(() => [
          ys(pe("div", V7, [
            Ie(Su, { onClose: v })
          ], 512), [
            [pr, t.value]
          ])
        ]),
        _: 1
      }),
      ys(pe("div", {
        class: mt(["flex-none cursor-pointer w-14 h-14 rounded-full inline-flex items-center justify-center ml-auto mb-2 mr-2 md:mb-0 md:mr-0 transition-all duration-150 ease-in-out hover:scale-105 active:scale-95 shadow-md", u.value ? "" : "bg-black text-white"]),
        style: Rt(u.value ? {} : a.value),
        onClick: v
      }, [
        Ie(hr, {
          mode: "out-in",
          "enter-active-class": "transition-opacity duration-150 ease-in-out",
          "leave-active-class": "transition-opacity duration-150 ease-in-out",
          "enter-from-class": "opacity-0",
          "enter-to-class": "opacity-100",
          "leave-from-class": "opacity-100",
          "leave-to-class": "opacity-0"
        }, {
          default: qt(() => [
            u.value ? (re(), xe("img", {
              key: 0,
              src: u.value,
              alt: "Chat Avatar",
              class: "w-full h-full rounded-full object-cover"
            }, null, 8, K7)) : (re(), xe(Ke, { key: 1 }, [
              t.value ? (re(), $e(me(U7), {
                key: 1,
                height: "32",
                width: "32"
              })) : (re(), $e(me(B7), {
                key: 0,
                height: "32",
                width: "32"
              }))
            ], 64))
          ]),
          _: 1
        })
      ], 6), [
        [pr, l.value]
      ])
    ], 4));
  }
}), Z7 = /* @__PURE__ */ Bt({
  __name: "App",
  props: {},
  setup(e) {
    const { options: t } = Mn(), n = Se(() => t.mode === "fullscreen");
    return tn(() => {
      Ot.registerLanguage("xml", tu), Ot.registerLanguage("javascript", eu);
    }), (s, r) => n.value ? (re(), $e(Su, {
      key: 0,
      class: "n8n-chat"
    })) : (re(), $e(G7, {
      key: 1,
      class: "n8n-chat"
    }));
  }
});
function J7(e) {
  var r, o;
  const t = {
    ...Pn,
    ...e,
    webhookConfig: {
      ...Pn.webhookConfig,
      ...e == null ? void 0 : e.webhookConfig
    },
    i18n: {
      ...Pn.i18n,
      ...e == null ? void 0 : e.i18n,
      en: {
        ...(r = Pn.i18n) == null ? void 0 : r.en,
        ...(o = e == null ? void 0 : e.i18n) == null ? void 0 : o.en
      }
    },
    theme: {
      ...Pn.theme,
      ...e == null ? void 0 : e.theme
    }
  }, n = t.target ?? Md;
  typeof n == "string" && Kd(n);
  const s = Td(Z7);
  return s.use(rp, t), s.mount(n), s;
}
export {
  J7 as createChat
};
