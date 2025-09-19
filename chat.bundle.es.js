var Vu = Object.defineProperty;
var Ku = (e, t, n) => t in e ? Vu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var as = (e, t, n) => Ku(e, typeof t != "symbol" ? t + "" : t, n);
/*! Package version @n8n/chat@0.57.0 */
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Bo(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ce = {}, xn = [], St = () => {
}, Gu = () => !1, Is = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), $o = (e) => e.startsWith("onUpdate:"), ze = Object.assign, zo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Zu = Object.prototype.hasOwnProperty, ve = (e, t) => Zu.call(e, t), ne = Array.isArray, yn = (e) => Ns(e) === "[object Map]", Oa = (e) => Ns(e) === "[object Set]", ae = (e) => typeof e == "function", Me = (e) => typeof e == "string", Lt = (e) => typeof e == "symbol", De = (e) => e !== null && typeof e == "object", La = (e) => (De(e) || ae(e)) && ae(e.then) && ae(e.catch), Fa = Object.prototype.toString, Ns = (e) => Fa.call(e), Wu = (e) => Ns(e).slice(8, -1), qa = (e) => Ns(e) === "[object Object]", Uo = (e) => Me(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Bn = /* @__PURE__ */ Bo(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Os = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ju = /-(\w)/g, pt = Os(
  (e) => e.replace(Ju, (t, n) => n ? n.toUpperCase() : "")
), Yu = /\B([A-Z])/g, Jt = Os(
  (e) => e.replace(Yu, "-$1").toLowerCase()
), Ls = Os((e) => e.charAt(0).toUpperCase() + e.slice(1)), tr = Os(
  (e) => e ? `on${Ls(e)}` : ""
), Gt = (e, t) => !Object.is(e, t), _s = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Pa = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, So = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Xu = (e) => {
  const t = Me(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let wi;
const Fs = () => wi || (wi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function qs(e) {
  if (ne(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = Me(s) ? nf(s) : qs(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else if (Me(e) || De(e))
    return e;
}
const Qu = /;(?![^(]*\))/g, ef = /:([^]+)/, tf = /\/\*[^]*?\*\//g;
function nf(e) {
  const t = {};
  return e.replace(tf, "").split(Qu).forEach((n) => {
    if (n) {
      const s = n.split(ef);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Qn(e) {
  let t = "";
  if (Me(e))
    t = e;
  else if (ne(e))
    for (let n = 0; n < e.length; n++) {
      const s = Qn(e[n]);
      s && (t += s + " ");
    }
  else if (De(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Ci(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !Me(t) && (e.class = Qn(t)), n && (e.style = qs(n)), e;
}
const sf = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", rf = /* @__PURE__ */ Bo(sf);
function Ba(e) {
  return !!e || e === "";
}
const $a = (e) => !!(e && e.__v_isRef === !0), ys = (e) => Me(e) ? e : e == null ? "" : ne(e) || De(e) && (e.toString === Fa || !ae(e.toString)) ? $a(e) ? ys(e.value) : JSON.stringify(e, za, 2) : String(e), za = (e, t) => $a(t) ? za(e, t.value) : yn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], o) => (n[nr(s, o) + " =>"] = r, n),
    {}
  )
} : Oa(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => nr(n))
} : Lt(t) ? nr(t) : De(t) && !ne(t) && !qa(t) ? String(t) : t, nr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Lt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let it;
class of {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = it, !t && it && (this.index = (it.scopes || (it.scopes = [])).push(
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
      const n = it;
      try {
        return it = this, t();
      } finally {
        it = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    it = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    it = this.parent;
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
function cf() {
  return it;
}
let Te;
const sr = /* @__PURE__ */ new WeakSet();
class Ua {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, it && it.active && it.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, sr.has(this) && (sr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ja(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ai(this), Va(this);
    const t = Te, n = mt;
    Te = this, mt = !0;
    try {
      return this.fn();
    } finally {
      Ka(this), Te = t, mt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Vo(t);
      this.deps = this.depsTail = void 0, Ai(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? sr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    To(this) && this.run();
  }
  get dirty() {
    return To(this);
  }
}
let Ha = 0, $n, zn;
function ja(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = zn, zn = e;
    return;
  }
  e.next = $n, $n = e;
}
function Ho() {
  Ha++;
}
function jo() {
  if (--Ha > 0)
    return;
  if (zn) {
    let t = zn;
    for (zn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; $n; ) {
    let t = $n;
    for ($n = void 0; t; ) {
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
function Va(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ka(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), Vo(s), af(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function To(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ga(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ga(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === jn))
    return;
  e.globalVersion = jn;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !To(e)) {
    e.flags &= -3;
    return;
  }
  const n = Te, s = mt;
  Te = e, mt = !0;
  try {
    Va(e);
    const r = e.fn(e._value);
    (t.version === 0 || Gt(r, e._value)) && (e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    Te = n, mt = s, Ka(e), e.flags &= -3;
  }
}
function Vo(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      Vo(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function af(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let mt = !0;
const Za = [];
function Yt() {
  Za.push(mt), mt = !1;
}
function Xt() {
  const e = Za.pop();
  mt = e === void 0 ? !0 : e;
}
function Ai(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Te;
    Te = void 0;
    try {
      t();
    } finally {
      Te = n;
    }
  }
}
let jn = 0;
class lf {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ko {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!Te || !mt || Te === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Te)
      n = this.activeLink = new lf(Te, this), Te.deps ? (n.prevDep = Te.depsTail, Te.depsTail.nextDep = n, Te.depsTail = n) : Te.deps = Te.depsTail = n, Wa(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = Te.depsTail, n.nextDep = void 0, Te.depsTail.nextDep = n, Te.depsTail = n, Te.deps === n && (Te.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, jn++, this.notify(t);
  }
  notify(t) {
    Ho();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      jo();
    }
  }
}
function Wa(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Wa(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ks = /* @__PURE__ */ new WeakMap(), un = Symbol(
  ""
), Ro = Symbol(
  ""
), Vn = Symbol(
  ""
);
function Ge(e, t, n) {
  if (mt && Te) {
    let s = ks.get(e);
    s || ks.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new Ko()), r.map = s, r.key = n), r.track();
  }
}
function Nt(e, t, n, s, r, o) {
  const i = ks.get(e);
  if (!i) {
    jn++;
    return;
  }
  const c = (a) => {
    a && a.trigger();
  };
  if (Ho(), t === "clear")
    i.forEach(c);
  else {
    const a = ne(e), u = a && Uo(n);
    if (a && n === "length") {
      const l = Number(s);
      i.forEach((f, d) => {
        (d === "length" || d === Vn || !Lt(d) && d >= l) && c(f);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && c(i.get(n)), u && c(i.get(Vn)), t) {
        case "add":
          a ? u && c(i.get("length")) : (c(i.get(un)), yn(e) && c(i.get(Ro)));
          break;
        case "delete":
          a || (c(i.get(un)), yn(e) && c(i.get(Ro)));
          break;
        case "set":
          yn(e) && c(i.get(un));
          break;
      }
  }
  jo();
}
function uf(e, t) {
  const n = ks.get(e);
  return n && n.get(t);
}
function mn(e) {
  const t = me(e);
  return t === e ? t : (Ge(t, "iterate", Vn), dt(e) ? t : t.map(Ze));
}
function Ps(e) {
  return Ge(e = me(e), "iterate", Vn), e;
}
const ff = {
  __proto__: null,
  [Symbol.iterator]() {
    return rr(this, Symbol.iterator, Ze);
  },
  concat(...e) {
    return mn(this).concat(
      ...e.map((t) => ne(t) ? mn(t) : t)
    );
  },
  entries() {
    return rr(this, "entries", (e) => (e[1] = Ze(e[1]), e));
  },
  every(e, t) {
    return Rt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Rt(this, "filter", e, t, (n) => n.map(Ze), arguments);
  },
  find(e, t) {
    return Rt(this, "find", e, t, Ze, arguments);
  },
  findIndex(e, t) {
    return Rt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Rt(this, "findLast", e, t, Ze, arguments);
  },
  findLastIndex(e, t) {
    return Rt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Rt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return or(this, "includes", e);
  },
  indexOf(...e) {
    return or(this, "indexOf", e);
  },
  join(e) {
    return mn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return or(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Rt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Nn(this, "pop");
  },
  push(...e) {
    return Nn(this, "push", e);
  },
  reduce(e, ...t) {
    return Si(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Si(this, "reduceRight", e, t);
  },
  shift() {
    return Nn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Rt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Nn(this, "splice", e);
  },
  toReversed() {
    return mn(this).toReversed();
  },
  toSorted(e) {
    return mn(this).toSorted(e);
  },
  toSpliced(...e) {
    return mn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Nn(this, "unshift", e);
  },
  values() {
    return rr(this, "values", Ze);
  }
};
function rr(e, t, n) {
  const s = Ps(e), r = s[t]();
  return s !== e && !dt(e) && (r._next = r.next, r.next = () => {
    const o = r._next();
    return o.value && (o.value = n(o.value)), o;
  }), r;
}
const hf = Array.prototype;
function Rt(e, t, n, s, r, o) {
  const i = Ps(e), c = i !== e && !dt(e), a = i[t];
  if (a !== hf[t]) {
    const f = a.apply(e, o);
    return c ? Ze(f) : f;
  }
  let u = n;
  i !== e && (c ? u = function(f, d) {
    return n.call(this, Ze(f), d, e);
  } : n.length > 2 && (u = function(f, d) {
    return n.call(this, f, d, e);
  }));
  const l = a.call(i, u, s);
  return c && r ? r(l) : l;
}
function Si(e, t, n, s) {
  const r = Ps(e);
  let o = n;
  return r !== e && (dt(e) ? n.length > 3 && (o = function(i, c, a) {
    return n.call(this, i, c, a, e);
  }) : o = function(i, c, a) {
    return n.call(this, i, Ze(c), a, e);
  }), r[t](o, ...s);
}
function or(e, t, n) {
  const s = me(e);
  Ge(s, "iterate", Vn);
  const r = s[t](...n);
  return (r === -1 || r === !1) && Jo(n[0]) ? (n[0] = me(n[0]), s[t](...n)) : r;
}
function Nn(e, t, n = []) {
  Yt(), Ho();
  const s = me(e)[t].apply(e, n);
  return jo(), Xt(), s;
}
const df = /* @__PURE__ */ Bo("__proto__,__v_isRef,__isVue"), Ja = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Lt)
);
function pf(e) {
  Lt(e) || (e = String(e));
  const t = me(this);
  return Ge(t, "has", e), t.hasOwnProperty(e);
}
class Ya {
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
      return s === (r ? o ? wf : tl : o ? el : Qa).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = ne(t);
    if (!r) {
      let a;
      if (i && (a = ff[n]))
        return a;
      if (n === "hasOwnProperty")
        return pf;
    }
    const c = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      $e(t) ? t : s
    );
    return (Lt(n) ? Ja.has(n) : df(n)) || (r || Ge(t, "get", n), o) ? c : $e(c) ? i && Uo(n) ? c : c.value : De(c) ? r ? nl(c) : Zo(c) : c;
  }
}
class Xa extends Ya {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let o = t[n];
    if (!this._isShallow) {
      const a = hn(o);
      if (!dt(s) && !hn(s) && (o = me(o), s = me(s)), !ne(t) && $e(o) && !$e(s))
        return a ? !1 : (o.value = s, !0);
    }
    const i = ne(t) && Uo(n) ? Number(n) < t.length : ve(t, n), c = Reflect.set(
      t,
      n,
      s,
      $e(t) ? t : r
    );
    return t === me(r) && (i ? Gt(s, o) && Nt(t, "set", n, s) : Nt(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = ve(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && Nt(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Lt(n) || !Ja.has(n)) && Ge(t, "has", n), s;
  }
  ownKeys(t) {
    return Ge(
      t,
      "iterate",
      ne(t) ? "length" : un
    ), Reflect.ownKeys(t);
  }
}
class gf extends Ya {
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
const mf = /* @__PURE__ */ new Xa(), _f = /* @__PURE__ */ new gf(), bf = /* @__PURE__ */ new Xa(!0);
const Do = (e) => e, ls = (e) => Reflect.getPrototypeOf(e);
function vf(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = me(r), i = yn(o), c = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, u = r[e](...s), l = n ? Do : t ? Mo : Ze;
    return !t && Ge(
      o,
      "iterate",
      a ? Ro : un
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
function us(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function xf(e, t) {
  const n = {
    get(r) {
      const o = this.__v_raw, i = me(o), c = me(r);
      e || (Gt(r, c) && Ge(i, "get", r), Ge(i, "get", c));
      const { has: a } = ls(i), u = t ? Do : e ? Mo : Ze;
      if (a.call(i, r))
        return u(o.get(r));
      if (a.call(i, c))
        return u(o.get(c));
      o !== i && o.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Ge(me(r), "iterate", un), Reflect.get(r, "size", r);
    },
    has(r) {
      const o = this.__v_raw, i = me(o), c = me(r);
      return e || (Gt(r, c) && Ge(i, "has", r), Ge(i, "has", c)), r === c ? o.has(r) : o.has(r) || o.has(c);
    },
    forEach(r, o) {
      const i = this, c = i.__v_raw, a = me(c), u = t ? Do : e ? Mo : Ze;
      return !e && Ge(a, "iterate", un), c.forEach((l, f) => r.call(o, u(l), u(f), i));
    }
  };
  return ze(
    n,
    e ? {
      add: us("add"),
      set: us("set"),
      delete: us("delete"),
      clear: us("clear")
    } : {
      add(r) {
        !t && !dt(r) && !hn(r) && (r = me(r));
        const o = me(this);
        return ls(o).has.call(o, r) || (o.add(r), Nt(o, "add", r, r)), this;
      },
      set(r, o) {
        !t && !dt(o) && !hn(o) && (o = me(o));
        const i = me(this), { has: c, get: a } = ls(i);
        let u = c.call(i, r);
        u || (r = me(r), u = c.call(i, r));
        const l = a.call(i, r);
        return i.set(r, o), u ? Gt(o, l) && Nt(i, "set", r, o) : Nt(i, "add", r, o), this;
      },
      delete(r) {
        const o = me(this), { has: i, get: c } = ls(o);
        let a = i.call(o, r);
        a || (r = me(r), a = i.call(o, r)), c && c.call(o, r);
        const u = o.delete(r);
        return a && Nt(o, "delete", r, void 0), u;
      },
      clear() {
        const r = me(this), o = r.size !== 0, i = r.clear();
        return o && Nt(
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
    n[r] = vf(r, e, t);
  }), n;
}
function Go(e, t) {
  const n = xf(e, t);
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    ve(n, r) && r in s ? n : s,
    r,
    o
  );
}
const yf = {
  get: /* @__PURE__ */ Go(!1, !1)
}, kf = {
  get: /* @__PURE__ */ Go(!1, !0)
}, Ef = {
  get: /* @__PURE__ */ Go(!0, !1)
};
const Qa = /* @__PURE__ */ new WeakMap(), el = /* @__PURE__ */ new WeakMap(), tl = /* @__PURE__ */ new WeakMap(), wf = /* @__PURE__ */ new WeakMap();
function Cf(e) {
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
function Af(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Cf(Wu(e));
}
function Zo(e) {
  return hn(e) ? e : Wo(
    e,
    !1,
    mf,
    yf,
    Qa
  );
}
function Sf(e) {
  return Wo(
    e,
    !1,
    bf,
    kf,
    el
  );
}
function nl(e) {
  return Wo(
    e,
    !0,
    _f,
    Ef,
    tl
  );
}
function Wo(e, t, n, s, r) {
  if (!De(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const i = Af(e);
  if (i === 0)
    return e;
  const c = new Proxy(
    e,
    i === 2 ? s : n
  );
  return r.set(e, c), c;
}
function kn(e) {
  return hn(e) ? kn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function hn(e) {
  return !!(e && e.__v_isReadonly);
}
function dt(e) {
  return !!(e && e.__v_isShallow);
}
function Jo(e) {
  return e ? !!e.__v_raw : !1;
}
function me(e) {
  const t = e && e.__v_raw;
  return t ? me(t) : e;
}
function Tf(e) {
  return !ve(e, "__v_skip") && Object.isExtensible(e) && Pa(e, "__v_skip", !0), e;
}
const Ze = (e) => De(e) ? Zo(e) : e, Mo = (e) => De(e) ? nl(e) : e;
function $e(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function tt(e) {
  return Rf(e, !1);
}
function Rf(e, t) {
  return $e(e) ? e : new Df(e, t);
}
class Df {
  constructor(t, n) {
    this.dep = new Ko(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : me(t), this._value = n ? t : Ze(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || dt(t) || hn(t);
    t = s ? t : me(t), Gt(t, n) && (this._rawValue = t, this._value = s ? t : Ze(t), this.dep.trigger());
  }
}
function xe(e) {
  return $e(e) ? e.value : e;
}
const Mf = {
  get: (e, t, n) => t === "__v_raw" ? e : xe(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return $e(r) && !$e(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function sl(e) {
  return kn(e) ? e : new Proxy(e, Mf);
}
function If(e) {
  const t = ne(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Of(e, n);
  return t;
}
class Nf {
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
    return uf(me(this._object), this._key);
  }
}
function Of(e, t, n) {
  const s = e[t];
  return $e(s) ? s : new Nf(e, t, n);
}
class Lf {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ko(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = jn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Te !== this)
      return ja(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ga(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Ff(e, t, n = !1) {
  let s, r;
  return ae(e) ? s = e : (s = e.get, r = e.set), new Lf(s, r, n);
}
const fs = {}, Es = /* @__PURE__ */ new WeakMap();
let an;
function qf(e, t = !1, n = an) {
  if (n) {
    let s = Es.get(n);
    s || Es.set(n, s = []), s.push(e);
  }
}
function Pf(e, t, n = Ce) {
  const { immediate: s, deep: r, once: o, scheduler: i, augmentJob: c, call: a } = n, u = (p) => r ? p : dt(p) || r === !1 || r === 0 ? Ot(p, 1) : Ot(p);
  let l, f, d, h, _ = !1, y = !1;
  if ($e(e) ? (f = () => e.value, _ = dt(e)) : kn(e) ? (f = () => u(e), _ = !0) : ne(e) ? (y = !0, _ = e.some((p) => kn(p) || dt(p)), f = () => e.map((p) => {
    if ($e(p))
      return p.value;
    if (kn(p))
      return u(p);
    if (ae(p))
      return a ? a(p, 2) : p();
  })) : ae(e) ? t ? f = a ? () => a(e, 2) : e : f = () => {
    if (d) {
      Yt();
      try {
        d();
      } finally {
        Xt();
      }
    }
    const p = an;
    an = l;
    try {
      return a ? a(e, 3, [h]) : e(h);
    } finally {
      an = p;
    }
  } : f = St, t && r) {
    const p = f, E = r === !0 ? 1 / 0 : r;
    f = () => Ot(p(), E);
  }
  const A = cf(), v = () => {
    l.stop(), A && A.active && zo(A.effects, l);
  };
  if (o && t) {
    const p = t;
    t = (...E) => {
      p(...E), v();
    };
  }
  let k = y ? new Array(e.length).fill(fs) : fs;
  const b = (p) => {
    if (!(!(l.flags & 1) || !l.dirty && !p))
      if (t) {
        const E = l.run();
        if (r || _ || (y ? E.some((w, B) => Gt(w, k[B])) : Gt(E, k))) {
          d && d();
          const w = an;
          an = l;
          try {
            const B = [
              E,
              // pass undefined as the old value when it's changed for the first time
              k === fs ? void 0 : y && k[0] === fs ? [] : k,
              h
            ];
            a ? a(t, 3, B) : (
              // @ts-expect-error
              t(...B)
            ), k = E;
          } finally {
            an = w;
          }
        }
      } else
        l.run();
  };
  return c && c(b), l = new Ua(f), l.scheduler = i ? () => i(b, !1) : b, h = (p) => qf(p, !1, l), d = l.onStop = () => {
    const p = Es.get(l);
    if (p) {
      if (a)
        a(p, 4);
      else
        for (const E of p) E();
      Es.delete(l);
    }
  }, t ? s ? b(!0) : k = l.run() : i ? i(b.bind(null, !0), !0) : l.run(), v.pause = l.pause.bind(l), v.resume = l.resume.bind(l), v.stop = v, v;
}
function Ot(e, t = 1 / 0, n) {
  if (t <= 0 || !De(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, $e(e))
    Ot(e.value, t, n);
  else if (ne(e))
    for (let s = 0; s < e.length; s++)
      Ot(e[s], t, n);
  else if (Oa(e) || yn(e))
    e.forEach((s) => {
      Ot(s, t, n);
    });
  else if (qa(e)) {
    for (const s in e)
      Ot(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Ot(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function es(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Bs(r, t, n);
  }
}
function _t(e, t, n, s) {
  if (ae(e)) {
    const r = es(e, t, n, s);
    return r && La(r) && r.catch((o) => {
      Bs(o, t, n);
    }), r;
  }
  if (ne(e)) {
    const r = [];
    for (let o = 0; o < e.length; o++)
      r.push(_t(e[o], t, n, s));
    return r;
  }
}
function Bs(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Ce;
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
      Yt(), es(o, null, 10, [
        e,
        a,
        u
      ]), Xt();
      return;
    }
  }
  Bf(e, n, r, s, i);
}
function Bf(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const Qe = [];
let kt = -1;
const En = [];
let zt = null, bn = 0;
const rl = /* @__PURE__ */ Promise.resolve();
let ws = null;
function Zt(e) {
  const t = ws || rl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function $f(e) {
  let t = kt + 1, n = Qe.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = Qe[s], o = Kn(r);
    o < e || o === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Yo(e) {
  if (!(e.flags & 1)) {
    const t = Kn(e), n = Qe[Qe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Kn(n) ? Qe.push(e) : Qe.splice($f(t), 0, e), e.flags |= 1, ol();
  }
}
function ol() {
  ws || (ws = rl.then(cl));
}
function zf(e) {
  ne(e) ? En.push(...e) : zt && e.id === -1 ? zt.splice(bn + 1, 0, e) : e.flags & 1 || (En.push(e), e.flags |= 1), ol();
}
function Ti(e, t, n = kt + 1) {
  for (; n < Qe.length; n++) {
    const s = Qe[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Qe.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function il(e) {
  if (En.length) {
    const t = [...new Set(En)].sort(
      (n, s) => Kn(n) - Kn(s)
    );
    if (En.length = 0, zt) {
      zt.push(...t);
      return;
    }
    for (zt = t, bn = 0; bn < zt.length; bn++) {
      const n = zt[bn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    zt = null, bn = 0;
  }
}
const Kn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function cl(e) {
  try {
    for (kt = 0; kt < Qe.length; kt++) {
      const t = Qe[kt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), es(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; kt < Qe.length; kt++) {
      const t = Qe[kt];
      t && (t.flags &= -2);
    }
    kt = -1, Qe.length = 0, il(), ws = null, (Qe.length || En.length) && cl();
  }
}
let Be = null, al = null;
function Cs(e) {
  const t = Be;
  return Be = e, al = e && e.type.__scopeId || null, t;
}
function Vt(e, t = Be, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && zi(-1);
    const o = Cs(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Cs(o), s._d && zi(1);
    }
    return i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function ll(e, t) {
  if (Be === null)
    return e;
  const n = js(Be), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [o, i, c, a = Ce] = t[r];
    o && (ae(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Ot(i), s.push({
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
function nn(e, t, n, s) {
  const r = e.dirs, o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    o && (c.oldValue = o[i].value);
    let a = c.dir[s];
    a && (Yt(), _t(a, n, 8, [
      e.el,
      c,
      e,
      t
    ]), Xt());
  }
}
const Uf = Symbol("_vte"), ul = (e) => e.__isTeleport, Ut = Symbol("_leaveCb"), hs = Symbol("_enterCb");
function Hf() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return dn(() => {
    e.isMounted = !0;
  }), Xo(() => {
    e.isUnmounting = !0;
  }), e;
}
const ht = [Function, Array], fl = {
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
}, hl = (e) => {
  const t = e.subTree;
  return t.component ? hl(t.component) : t;
}, jf = {
  name: "BaseTransition",
  props: fl,
  setup(e, { slots: t }) {
    const n = $h(), s = Hf();
    return () => {
      const r = t.default && gl(t.default(), !0);
      if (!r || !r.length)
        return;
      const o = dl(r), i = me(e), { mode: c } = i;
      if (s.isLeaving)
        return ir(o);
      const a = Ri(o);
      if (!a)
        return ir(o);
      let u = Io(
        a,
        i,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (f) => u = f
      );
      a.type !== nt && Gn(a, u);
      let l = n.subTree && Ri(n.subTree);
      if (l && l.type !== nt && !ln(a, l) && hl(n).type !== nt) {
        let f = Io(
          l,
          i,
          s,
          n
        );
        if (Gn(l, f), c === "out-in" && a.type !== nt)
          return s.isLeaving = !0, f.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, l = void 0;
          }, ir(o);
        c === "in-out" && a.type !== nt ? f.delayLeave = (d, h, _) => {
          const y = pl(
            s,
            l
          );
          y[String(l.key)] = l, d[Ut] = () => {
            h(), d[Ut] = void 0, delete u.delayedLeave, l = void 0;
          }, u.delayedLeave = () => {
            _(), delete u.delayedLeave, l = void 0;
          };
        } : l = void 0;
      } else l && (l = void 0);
      return o;
    };
  }
};
function dl(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== nt) {
        t = n;
        break;
      }
  }
  return t;
}
const Vf = jf;
function pl(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Io(e, t, n, s, r) {
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
    onAfterLeave: _,
    onLeaveCancelled: y,
    onBeforeAppear: A,
    onAppear: v,
    onAfterAppear: k,
    onAppearCancelled: b
  } = t, p = String(e.key), E = pl(n, e), w = (S, R) => {
    S && _t(
      S,
      s,
      9,
      R
    );
  }, B = (S, R) => {
    const P = R[1];
    w(S, R), ne(S) ? S.every((I) => I.length <= 1) && P() : S.length <= 1 && P();
  }, C = {
    mode: i,
    persisted: c,
    beforeEnter(S) {
      let R = a;
      if (!n.isMounted)
        if (o)
          R = A || a;
        else
          return;
      S[Ut] && S[Ut](
        !0
        /* cancelled */
      );
      const P = E[p];
      P && ln(e, P) && P.el[Ut] && P.el[Ut](), w(R, [S]);
    },
    enter(S) {
      let R = u, P = l, I = f;
      if (!n.isMounted)
        if (o)
          R = v || u, P = k || l, I = b || f;
        else
          return;
      let te = !1;
      const D = S[hs] = (oe) => {
        te || (te = !0, oe ? w(I, [S]) : w(P, [S]), C.delayedLeave && C.delayedLeave(), S[hs] = void 0);
      };
      R ? B(R, [S, D]) : D();
    },
    leave(S, R) {
      const P = String(e.key);
      if (S[hs] && S[hs](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return R();
      w(d, [S]);
      let I = !1;
      const te = S[Ut] = (D) => {
        I || (I = !0, R(), D ? w(y, [S]) : w(_, [S]), S[Ut] = void 0, E[P] === e && delete E[P]);
      };
      E[P] = e, h ? B(h, [S, te]) : te();
    },
    clone(S) {
      const R = Io(
        S,
        t,
        n,
        s,
        r
      );
      return r && r(R), R;
    }
  };
  return C;
}
function ir(e) {
  if ($s(e))
    return e = Wt(e), e.children = null, e;
}
function Ri(e) {
  if (!$s(e))
    return ul(e.type) && e.children ? dl(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ae(n.default))
      return n.default();
  }
}
function Gn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Gn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function gl(e, t = !1, n) {
  let s = [], r = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const c = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === We ? (i.patchFlag & 128 && r++, s = s.concat(
      gl(i.children, t, c)
    )) : (t || i.type !== nt) && s.push(c != null ? Wt(i, { key: c }) : i);
  }
  if (r > 1)
    for (let o = 0; o < s.length; o++)
      s[o].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ft(e, t) {
  return ae(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ze({ name: e.name }, t, { setup: e })
  ) : e;
}
function ml(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function As(e, t, n, s, r = !1) {
  if (ne(e)) {
    e.forEach(
      (_, y) => As(
        _,
        t && (ne(t) ? t[y] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (wn(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && As(e, t, n, s.component.subTree);
    return;
  }
  const o = s.shapeFlag & 4 ? js(s.component) : s.el, i = r ? null : o, { i: c, r: a } = e, u = t && t.r, l = c.refs === Ce ? c.refs = {} : c.refs, f = c.setupState, d = me(f), h = f === Ce ? () => !1 : (_) => ve(d, _);
  if (u != null && u !== a && (Me(u) ? (l[u] = null, h(u) && (f[u] = null)) : $e(u) && (u.value = null)), ae(a))
    es(a, c, 12, [i, l]);
  else {
    const _ = Me(a), y = $e(a);
    if (_ || y) {
      const A = () => {
        if (e.f) {
          const v = _ ? h(a) ? f[a] : l[a] : a.value;
          r ? ne(v) && zo(v, o) : ne(v) ? v.includes(o) || v.push(o) : _ ? (l[a] = [o], h(a) && (f[a] = l[a])) : (a.value = [o], e.k && (l[e.k] = a.value));
        } else _ ? (l[a] = i, h(a) && (f[a] = i)) : y && (a.value = i, e.k && (l[e.k] = i));
      };
      i ? (A.id = -1, ot(A, n)) : A();
    }
  }
}
Fs().requestIdleCallback;
Fs().cancelIdleCallback;
const wn = (e) => !!e.type.__asyncLoader, $s = (e) => e.type.__isKeepAlive;
function Kf(e, t) {
  _l(e, "a", t);
}
function Gf(e, t) {
  _l(e, "da", t);
}
function _l(e, t, n = je) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (zs(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      $s(r.parent.vnode) && Zf(s, t, n, r), r = r.parent;
  }
}
function Zf(e, t, n, s) {
  const r = zs(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Qo(() => {
    zo(s[t], r);
  }, n);
}
function zs(e, t, n = je, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      Yt();
      const c = ts(n), a = _t(t, n, e, i);
      return c(), Xt(), a;
    });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const qt = (e) => (t, n = je) => {
  (!Jn || e === "sp") && zs(e, (...s) => t(...s), n);
}, Wf = qt("bm"), dn = qt("m"), Jf = qt(
  "bu"
), Yf = qt("u"), Xo = qt(
  "bum"
), Qo = qt("um"), Xf = qt(
  "sp"
), Qf = qt("rtg"), eh = qt("rtc");
function th(e, t = je) {
  zs("ec", e, t);
}
const nh = "components", bl = Symbol.for("v-ndc");
function Di(e) {
  return Me(e) ? sh(nh, e, !1) || e : e || bl;
}
function sh(e, t, n = !0, s = !1) {
  const r = Be || je;
  if (r) {
    const o = r.type;
    {
      const c = Vh(
        o,
        !1
      );
      if (c && (c === t || c === pt(t) || c === Ls(pt(t))))
        return o;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Mi(r[e] || o[e], t) || // global registration
      Mi(r.appContext[e], t)
    );
    return !i && s ? o : i;
  }
}
function Mi(e, t) {
  return e && (e[t] || e[pt(t)] || e[Ls(pt(t))]);
}
function Ii(e, t, n, s) {
  let r;
  const o = n, i = ne(e);
  if (i || Me(e)) {
    const c = i && kn(e);
    let a = !1;
    c && (a = !dt(e), e = Ps(e)), r = new Array(e.length);
    for (let u = 0, l = e.length; u < l; u++)
      r[u] = t(
        a ? Ze(e[u]) : e[u],
        u,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let c = 0; c < e; c++)
      r[c] = t(c + 1, c, void 0, o);
  } else if (De(e))
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
function Kt(e, t, n = {}, s, r) {
  if (Be.ce || Be.parent && wn(Be.parent) && Be.parent.ce)
    return t !== "default" && (n.name = t), ce(), Pe(
      We,
      null,
      [Le("slot", n, s && s())],
      64
    );
  let o = e[t];
  o && o._c && (o._d = !1), ce();
  const i = o && vl(o(n)), c = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, a = Pe(
    We,
    {
      key: (c && !Lt(c) ? c : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && s ? "_fb" : "")
    },
    i || (s ? s() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !r && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), o && o._c && (o._d = !0), a;
}
function vl(e) {
  return e.some((t) => Wn(t) ? !(t.type === nt || t.type === We && !vl(t.children)) : !0) ? e : null;
}
const No = (e) => e ? $l(e) ? js(e) : No(e.parent) : null, Un = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ze(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => No(e.parent),
    $root: (e) => No(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => yl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Yo(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Zt.bind(e.proxy)),
    $watch: (e) => Ch.bind(e)
  })
), cr = (e, t) => e !== Ce && !e.__isScriptSetup && ve(e, t), rh = {
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
        if (cr(s, t))
          return i[t] = 1, s[t];
        if (r !== Ce && ve(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && ve(u, t)
        )
          return i[t] = 3, o[t];
        if (n !== Ce && ve(n, t))
          return i[t] = 4, n[t];
        Oo && (i[t] = 0);
      }
    }
    const l = Un[t];
    let f, d;
    if (l)
      return t === "$attrs" && Ge(e.attrs, "get", ""), l(e);
    if (
      // css module (injected by vue-loader)
      (f = c.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== Ce && ve(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      d = a.config.globalProperties, ve(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: o } = e;
    return cr(r, t) ? (r[t] = n, !0) : s !== Ce && ve(s, t) ? (s[t] = n, !0) : ve(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o }
  }, i) {
    let c;
    return !!n[i] || e !== Ce && ve(e, i) || cr(t, i) || (c = o[0]) && ve(c, i) || ve(s, i) || ve(Un, i) || ve(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ve(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Ni(e) {
  return ne(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Oo = !0;
function oh(e) {
  const t = yl(e), n = e.proxy, s = e.ctx;
  Oo = !1, t.beforeCreate && Oi(t.beforeCreate, e, "bc");
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
    updated: _,
    activated: y,
    deactivated: A,
    beforeDestroy: v,
    beforeUnmount: k,
    destroyed: b,
    unmounted: p,
    render: E,
    renderTracked: w,
    renderTriggered: B,
    errorCaptured: C,
    serverPrefetch: S,
    // public API
    expose: R,
    inheritAttrs: P,
    // assets
    components: I,
    directives: te,
    filters: D
  } = t;
  if (u && ih(u, s, null), i)
    for (const le in i) {
      const G = i[le];
      ae(G) && (s[le] = G.bind(n));
    }
  if (r) {
    const le = r.call(n, n);
    De(le) && (e.data = Zo(le));
  }
  if (Oo = !0, o)
    for (const le in o) {
      const G = o[le], fe = ae(G) ? G.bind(n, n) : ae(G.get) ? G.get.bind(n, n) : St, Z = !ae(G) && ae(G.set) ? G.set.bind(n) : St, Ee = at({
        get: fe,
        set: Z
      });
      Object.defineProperty(s, le, {
        enumerable: !0,
        configurable: !0,
        get: () => Ee.value,
        set: (we) => Ee.value = we
      });
    }
  if (c)
    for (const le in c)
      xl(c[le], s, n, le);
  if (a) {
    const le = ae(a) ? a.call(n) : a;
    Reflect.ownKeys(le).forEach((G) => {
      hh(G, le[G]);
    });
  }
  l && Oi(l, e, "c");
  function Q(le, G) {
    ne(G) ? G.forEach((fe) => le(fe.bind(n))) : G && le(G.bind(n));
  }
  if (Q(Wf, f), Q(dn, d), Q(Jf, h), Q(Yf, _), Q(Kf, y), Q(Gf, A), Q(th, C), Q(eh, w), Q(Qf, B), Q(Xo, k), Q(Qo, p), Q(Xf, S), ne(R))
    if (R.length) {
      const le = e.exposed || (e.exposed = {});
      R.forEach((G) => {
        Object.defineProperty(le, G, {
          get: () => n[G],
          set: (fe) => n[G] = fe
        });
      });
    } else e.exposed || (e.exposed = {});
  E && e.render === St && (e.render = E), P != null && (e.inheritAttrs = P), I && (e.components = I), te && (e.directives = te), S && ml(e);
}
function ih(e, t, n = St) {
  ne(e) && (e = Lo(e));
  for (const s in e) {
    const r = e[s];
    let o;
    De(r) ? "default" in r ? o = An(
      r.from || s,
      r.default,
      !0
    ) : o = An(r.from || s) : o = An(r), $e(o) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[s] = o;
  }
}
function Oi(e, t, n) {
  _t(
    ne(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function xl(e, t, n, s) {
  let r = s.includes(".") ? Ll(n, s) : () => n[s];
  if (Me(e)) {
    const o = t[e];
    ae(o) && bs(r, o);
  } else if (ae(e))
    bs(r, e.bind(n));
  else if (De(e))
    if (ne(e))
      e.forEach((o) => xl(o, t, n, s));
    else {
      const o = ae(e.handler) ? e.handler.bind(n) : t[e.handler];
      ae(o) && bs(r, o, e);
    }
}
function yl(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = o.get(t);
  let a;
  return c ? a = c : !r.length && !n && !s ? a = t : (a = {}, r.length && r.forEach(
    (u) => Ss(a, u, i, !0)
  ), Ss(a, t, i)), De(t) && o.set(t, a), a;
}
function Ss(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && Ss(e, o, n, !0), r && r.forEach(
    (i) => Ss(e, i, n, !0)
  );
  for (const i in t)
    if (!(s && i === "expose")) {
      const c = ch[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const ch = {
  data: Li,
  props: Fi,
  emits: Fi,
  // objects
  methods: Pn,
  computed: Pn,
  // lifecycle
  beforeCreate: Xe,
  created: Xe,
  beforeMount: Xe,
  mounted: Xe,
  beforeUpdate: Xe,
  updated: Xe,
  beforeDestroy: Xe,
  beforeUnmount: Xe,
  destroyed: Xe,
  unmounted: Xe,
  activated: Xe,
  deactivated: Xe,
  errorCaptured: Xe,
  serverPrefetch: Xe,
  // assets
  components: Pn,
  directives: Pn,
  // watch
  watch: lh,
  // provide / inject
  provide: Li,
  inject: ah
};
function Li(e, t) {
  return t ? e ? function() {
    return ze(
      ae(e) ? e.call(this, this) : e,
      ae(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ah(e, t) {
  return Pn(Lo(e), Lo(t));
}
function Lo(e) {
  if (ne(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Xe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Pn(e, t) {
  return e ? ze(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Fi(e, t) {
  return e ? ne(e) && ne(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ze(
    /* @__PURE__ */ Object.create(null),
    Ni(e),
    Ni(t ?? {})
  ) : t;
}
function lh(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ze(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Xe(e[s], t[s]);
  return n;
}
function kl() {
  return {
    app: null,
    config: {
      isNativeTag: Gu,
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
let uh = 0;
function fh(e, t) {
  return function(s, r = null) {
    ae(s) || (s = ze({}, s)), r != null && !De(r) && (r = null);
    const o = kl(), i = /* @__PURE__ */ new WeakSet(), c = [];
    let a = !1;
    const u = o.app = {
      _uid: uh++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Gh,
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
          const h = u._ceVNode || Le(s, r);
          return h.appContext = o, d === !0 ? d = "svg" : d === !1 && (d = void 0), e(h, l, d), a = !0, u._container = l, l.__vue_app__ = u, js(h.component);
        }
      },
      onUnmount(l) {
        c.push(l);
      },
      unmount() {
        a && (_t(
          c,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(l, f) {
        return o.provides[l] = f, u;
      },
      runWithContext(l) {
        const f = Cn;
        Cn = u;
        try {
          return l();
        } finally {
          Cn = f;
        }
      }
    };
    return u;
  };
}
let Cn = null;
function hh(e, t) {
  if (je) {
    let n = je.provides;
    const s = je.parent && je.parent.provides;
    s === n && (n = je.provides = Object.create(s)), n[e] = t;
  }
}
function An(e, t, n = !1) {
  const s = je || Be;
  if (s || Cn) {
    const r = Cn ? Cn._context.provides : s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && ae(t) ? t.call(s && s.proxy) : t;
  }
}
const El = {}, wl = () => Object.create(El), Cl = (e) => Object.getPrototypeOf(e) === El;
function dh(e, t, n, s = !1) {
  const r = {}, o = wl();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Al(e, t, r, o);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  n ? e.props = s ? r : Sf(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function ph(e, t, n, s) {
  const {
    props: r,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, c = me(r), [a] = e.propsOptions;
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
        if (Us(e.emitsOptions, d))
          continue;
        const h = t[d];
        if (a)
          if (ve(o, d))
            h !== o[d] && (o[d] = h, u = !0);
          else {
            const _ = pt(d);
            r[_] = Fo(
              a,
              c,
              _,
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
    Al(e, t, r, o) && (u = !0);
    let l;
    for (const f in c)
      (!t || // for camelCase
      !ve(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((l = Jt(f)) === f || !ve(t, l))) && (a ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[l] !== void 0) && (r[f] = Fo(
        a,
        c,
        f,
        void 0,
        e,
        !0
      )) : delete r[f]);
    if (o !== c)
      for (const f in o)
        (!t || !ve(t, f)) && (delete o[f], u = !0);
  }
  u && Nt(e.attrs, "set", "");
}
function Al(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let a in t) {
      if (Bn(a))
        continue;
      const u = t[a];
      let l;
      r && ve(r, l = pt(a)) ? !o || !o.includes(l) ? n[l] = u : (c || (c = {}))[l] = u : Us(e.emitsOptions, a) || (!(a in s) || u !== s[a]) && (s[a] = u, i = !0);
    }
  if (o) {
    const a = me(n), u = c || Ce;
    for (let l = 0; l < o.length; l++) {
      const f = o[l];
      n[f] = Fo(
        r,
        a,
        f,
        u[f],
        e,
        !ve(u, f)
      );
    }
  }
  return i;
}
function Fo(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const c = ve(i, "default");
    if (c && s === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && ae(a)) {
        const { propsDefaults: u } = r;
        if (n in u)
          s = u[n];
        else {
          const l = ts(r);
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
    ] && (s === "" || s === Jt(n)) && (s = !0));
  }
  return s;
}
const gh = /* @__PURE__ */ new WeakMap();
function Sl(e, t, n = !1) {
  const s = n ? gh : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const o = e.props, i = {}, c = [];
  let a = !1;
  if (!ae(e)) {
    const l = (f) => {
      a = !0;
      const [d, h] = Sl(f, t, !0);
      ze(i, d), h && c.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  if (!o && !a)
    return De(e) && s.set(e, xn), xn;
  if (ne(o))
    for (let l = 0; l < o.length; l++) {
      const f = pt(o[l]);
      qi(f) && (i[f] = Ce);
    }
  else if (o)
    for (const l in o) {
      const f = pt(l);
      if (qi(f)) {
        const d = o[l], h = i[f] = ne(d) || ae(d) ? { type: d } : ze({}, d), _ = h.type;
        let y = !1, A = !0;
        if (ne(_))
          for (let v = 0; v < _.length; ++v) {
            const k = _[v], b = ae(k) && k.name;
            if (b === "Boolean") {
              y = !0;
              break;
            } else b === "String" && (A = !1);
          }
        else
          y = ae(_) && _.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = y, h[
          1
          /* shouldCastTrue */
        ] = A, (y || ve(h, "default")) && c.push(f);
      }
    }
  const u = [i, c];
  return De(e) && s.set(e, u), u;
}
function qi(e) {
  return e[0] !== "$" && !Bn(e);
}
const Tl = (e) => e[0] === "_" || e === "$stable", ei = (e) => ne(e) ? e.map(Et) : [Et(e)], mh = (e, t, n) => {
  if (t._n)
    return t;
  const s = Vt((...r) => ei(t(...r)), n);
  return s._c = !1, s;
}, Rl = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (Tl(r)) continue;
    const o = e[r];
    if (ae(o))
      t[r] = mh(r, o, s);
    else if (o != null) {
      const i = ei(o);
      t[r] = () => i;
    }
  }
}, Dl = (e, t) => {
  const n = ei(t);
  e.slots.default = () => n;
}, Ml = (e, t, n) => {
  for (const s in t)
    (n || s !== "_") && (e[s] = t[s]);
}, _h = (e, t, n) => {
  const s = e.slots = wl();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Ml(s, t, n), n && Pa(s, "_", r, !0)) : Rl(t, s);
  } else t && Dl(e, t);
}, bh = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let o = !0, i = Ce;
  if (s.shapeFlag & 32) {
    const c = t._;
    c ? n && c === 1 ? o = !1 : Ml(r, t, n) : (o = !t.$stable, Rl(t, r)), i = t;
  } else t && (Dl(e, t), i = { default: 1 });
  if (o)
    for (const c in r)
      !Tl(c) && i[c] == null && delete r[c];
}, ot = Ih;
function vh(e) {
  return xh(e);
}
function xh(e, t) {
  const n = Fs();
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
    setScopeId: h = St,
    insertStaticContent: _
  } = e, y = (g, x, T, L = null, N = null, O = null, H = void 0, z = null, $ = !!x.dynamicChildren) => {
    if (g === x)
      return;
    g && !ln(g, x) && (L = pn(g), we(g, N, O, !0), g = null), x.patchFlag === -2 && ($ = !1, x.dynamicChildren = null);
    const { type: F, ref: ee, shapeFlag: V } = x;
    switch (F) {
      case Hs:
        A(g, x, T, L);
        break;
      case nt:
        v(g, x, T, L);
        break;
      case lr:
        g == null && k(x, T, L, H);
        break;
      case We:
        I(
          g,
          x,
          T,
          L,
          N,
          O,
          H,
          z,
          $
        );
        break;
      default:
        V & 1 ? E(
          g,
          x,
          T,
          L,
          N,
          O,
          H,
          z,
          $
        ) : V & 6 ? te(
          g,
          x,
          T,
          L,
          N,
          O,
          H,
          z,
          $
        ) : (V & 64 || V & 128) && F.process(
          g,
          x,
          T,
          L,
          N,
          O,
          H,
          z,
          $,
          bt
        );
    }
    ee != null && N && As(ee, g && g.ref, O, x || g, !x);
  }, A = (g, x, T, L) => {
    if (g == null)
      s(
        x.el = c(x.children),
        T,
        L
      );
    else {
      const N = x.el = g.el;
      x.children !== g.children && u(N, x.children);
    }
  }, v = (g, x, T, L) => {
    g == null ? s(
      x.el = a(x.children || ""),
      T,
      L
    ) : x.el = g.el;
  }, k = (g, x, T, L) => {
    [g.el, g.anchor] = _(
      g.children,
      x,
      T,
      L,
      g.el,
      g.anchor
    );
  }, b = ({ el: g, anchor: x }, T, L) => {
    let N;
    for (; g && g !== x; )
      N = d(g), s(g, T, L), g = N;
    s(x, T, L);
  }, p = ({ el: g, anchor: x }) => {
    let T;
    for (; g && g !== x; )
      T = d(g), r(g), g = T;
    r(x);
  }, E = (g, x, T, L, N, O, H, z, $) => {
    x.type === "svg" ? H = "svg" : x.type === "math" && (H = "mathml"), g == null ? w(
      x,
      T,
      L,
      N,
      O,
      H,
      z,
      $
    ) : S(
      g,
      x,
      N,
      O,
      H,
      z,
      $
    );
  }, w = (g, x, T, L, N, O, H, z) => {
    let $, F;
    const { props: ee, shapeFlag: V, transition: W, dirs: se } = g;
    if ($ = g.el = i(
      g.type,
      O,
      ee && ee.is,
      ee
    ), V & 8 ? l($, g.children) : V & 16 && C(
      g.children,
      $,
      null,
      L,
      N,
      ar(g, O),
      H,
      z
    ), se && nn(g, null, L, "created"), B($, g, g.scopeId, H, L), ee) {
      for (const _e in ee)
        _e !== "value" && !Bn(_e) && o($, _e, null, ee[_e], O, L);
      "value" in ee && o($, "value", null, ee.value, O), (F = ee.onVnodeBeforeMount) && yt(F, L, g);
    }
    se && nn(g, null, L, "beforeMount");
    const he = yh(N, W);
    he && W.beforeEnter($), s($, x, T), ((F = ee && ee.onVnodeMounted) || he || se) && ot(() => {
      F && yt(F, L, g), he && W.enter($), se && nn(g, null, L, "mounted");
    }, N);
  }, B = (g, x, T, L, N) => {
    if (T && h(g, T), L)
      for (let O = 0; O < L.length; O++)
        h(g, L[O]);
    if (N) {
      let O = N.subTree;
      if (x === O || ql(O.type) && (O.ssContent === x || O.ssFallback === x)) {
        const H = N.vnode;
        B(
          g,
          H,
          H.scopeId,
          H.slotScopeIds,
          N.parent
        );
      }
    }
  }, C = (g, x, T, L, N, O, H, z, $ = 0) => {
    for (let F = $; F < g.length; F++) {
      const ee = g[F] = z ? Ht(g[F]) : Et(g[F]);
      y(
        null,
        ee,
        x,
        T,
        L,
        N,
        O,
        H,
        z
      );
    }
  }, S = (g, x, T, L, N, O, H) => {
    const z = x.el = g.el;
    let { patchFlag: $, dynamicChildren: F, dirs: ee } = x;
    $ |= g.patchFlag & 16;
    const V = g.props || Ce, W = x.props || Ce;
    let se;
    if (T && sn(T, !1), (se = W.onVnodeBeforeUpdate) && yt(se, T, x, g), ee && nn(x, g, T, "beforeUpdate"), T && sn(T, !0), (V.innerHTML && W.innerHTML == null || V.textContent && W.textContent == null) && l(z, ""), F ? R(
      g.dynamicChildren,
      F,
      z,
      T,
      L,
      ar(x, N),
      O
    ) : H || G(
      g,
      x,
      z,
      null,
      T,
      L,
      ar(x, N),
      O,
      !1
    ), $ > 0) {
      if ($ & 16)
        P(z, V, W, T, N);
      else if ($ & 2 && V.class !== W.class && o(z, "class", null, W.class, N), $ & 4 && o(z, "style", V.style, W.style, N), $ & 8) {
        const he = x.dynamicProps;
        for (let _e = 0; _e < he.length; _e++) {
          const ge = he[_e], Je = V[ge], Ve = W[ge];
          (Ve !== Je || ge === "value") && o(z, ge, Je, Ve, N, T);
        }
      }
      $ & 1 && g.children !== x.children && l(z, x.children);
    } else !H && F == null && P(z, V, W, T, N);
    ((se = W.onVnodeUpdated) || ee) && ot(() => {
      se && yt(se, T, x, g), ee && nn(x, g, T, "updated");
    }, L);
  }, R = (g, x, T, L, N, O, H) => {
    for (let z = 0; z < x.length; z++) {
      const $ = g[z], F = x[z], ee = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        $.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        ($.type === We || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ln($, F) || // - In the case of a component, it could contain anything.
        $.shapeFlag & 70) ? f($.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          T
        )
      );
      y(
        $,
        F,
        ee,
        null,
        L,
        N,
        O,
        H,
        !0
      );
    }
  }, P = (g, x, T, L, N) => {
    if (x !== T) {
      if (x !== Ce)
        for (const O in x)
          !Bn(O) && !(O in T) && o(
            g,
            O,
            x[O],
            null,
            N,
            L
          );
      for (const O in T) {
        if (Bn(O)) continue;
        const H = T[O], z = x[O];
        H !== z && O !== "value" && o(g, O, z, H, N, L);
      }
      "value" in T && o(g, "value", x.value, T.value, N);
    }
  }, I = (g, x, T, L, N, O, H, z, $) => {
    const F = x.el = g ? g.el : c(""), ee = x.anchor = g ? g.anchor : c("");
    let { patchFlag: V, dynamicChildren: W, slotScopeIds: se } = x;
    se && (z = z ? z.concat(se) : se), g == null ? (s(F, T, L), s(ee, T, L), C(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      x.children || [],
      T,
      ee,
      N,
      O,
      H,
      z,
      $
    )) : V > 0 && V & 64 && W && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren ? (R(
      g.dynamicChildren,
      W,
      T,
      N,
      O,
      H,
      z
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (x.key != null || N && x === N.subTree) && Il(
      g,
      x,
      !0
      /* shallow */
    )) : G(
      g,
      x,
      T,
      ee,
      N,
      O,
      H,
      z,
      $
    );
  }, te = (g, x, T, L, N, O, H, z, $) => {
    x.slotScopeIds = z, g == null ? x.shapeFlag & 512 ? N.ctx.activate(
      x,
      T,
      L,
      H,
      $
    ) : D(
      x,
      T,
      L,
      N,
      O,
      H,
      $
    ) : oe(g, x, $);
  }, D = (g, x, T, L, N, O, H) => {
    const z = g.component = Bh(
      g,
      L,
      N
    );
    if ($s(g) && (z.ctx.renderer = bt), zh(z, !1, H), z.asyncDep) {
      if (N && N.registerDep(z, Q, H), !g.el) {
        const $ = z.subTree = Le(nt);
        v(null, $, x, T);
      }
    } else
      Q(
        z,
        g,
        x,
        T,
        N,
        O,
        H
      );
  }, oe = (g, x, T) => {
    const L = x.component = g.component;
    if (Dh(g, x, T))
      if (L.asyncDep && !L.asyncResolved) {
        le(L, x, T);
        return;
      } else
        L.next = x, L.update();
    else
      x.el = g.el, L.vnode = x;
  }, Q = (g, x, T, L, N, O, H) => {
    const z = () => {
      if (g.isMounted) {
        let { next: V, bu: W, u: se, parent: he, vnode: _e } = g;
        {
          const ut = Nl(g);
          if (ut) {
            V && (V.el = _e.el, le(g, V, H)), ut.asyncDep.then(() => {
              g.isUnmounted || z();
            });
            return;
          }
        }
        let ge = V, Je;
        sn(g, !1), V ? (V.el = _e.el, le(g, V, H)) : V = _e, W && _s(W), (Je = V.props && V.props.onVnodeBeforeUpdate) && yt(Je, he, V, _e), sn(g, !0);
        const Ve = Bi(g), lt = g.subTree;
        g.subTree = Ve, y(
          lt,
          Ve,
          // parent may have changed if it's in a teleport
          f(lt.el),
          // anchor may have changed if it's in a fragment
          pn(lt),
          g,
          N,
          O
        ), V.el = Ve.el, ge === null && Mh(g, Ve.el), se && ot(se, N), (Je = V.props && V.props.onVnodeUpdated) && ot(
          () => yt(Je, he, V, _e),
          N
        );
      } else {
        let V;
        const { el: W, props: se } = x, { bm: he, m: _e, parent: ge, root: Je, type: Ve } = g, lt = wn(x);
        sn(g, !1), he && _s(he), !lt && (V = se && se.onVnodeBeforeMount) && yt(V, ge, x), sn(g, !0);
        {
          Je.ce && Je.ce._injectChildStyle(Ve);
          const ut = g.subTree = Bi(g);
          y(
            null,
            ut,
            T,
            L,
            g,
            N,
            O
          ), x.el = ut.el;
        }
        if (_e && ot(_e, N), !lt && (V = se && se.onVnodeMounted)) {
          const ut = x;
          ot(
            () => yt(V, ge, ut),
            N
          );
        }
        (x.shapeFlag & 256 || ge && wn(ge.vnode) && ge.vnode.shapeFlag & 256) && g.a && ot(g.a, N), g.isMounted = !0, x = T = L = null;
      }
    };
    g.scope.on();
    const $ = g.effect = new Ua(z);
    g.scope.off();
    const F = g.update = $.run.bind($), ee = g.job = $.runIfDirty.bind($);
    ee.i = g, ee.id = g.uid, $.scheduler = () => Yo(ee), sn(g, !0), F();
  }, le = (g, x, T) => {
    x.component = g;
    const L = g.vnode.props;
    g.vnode = x, g.next = null, ph(g, x.props, L, T), bh(g, x.children, T), Yt(), Ti(g), Xt();
  }, G = (g, x, T, L, N, O, H, z, $ = !1) => {
    const F = g && g.children, ee = g ? g.shapeFlag : 0, V = x.children, { patchFlag: W, shapeFlag: se } = x;
    if (W > 0) {
      if (W & 128) {
        Z(
          F,
          V,
          T,
          L,
          N,
          O,
          H,
          z,
          $
        );
        return;
      } else if (W & 256) {
        fe(
          F,
          V,
          T,
          L,
          N,
          O,
          H,
          z,
          $
        );
        return;
      }
    }
    se & 8 ? (ee & 16 && Qt(F, N, O), V !== F && l(T, V)) : ee & 16 ? se & 16 ? Z(
      F,
      V,
      T,
      L,
      N,
      O,
      H,
      z,
      $
    ) : Qt(F, N, O, !0) : (ee & 8 && l(T, ""), se & 16 && C(
      V,
      T,
      L,
      N,
      O,
      H,
      z,
      $
    ));
  }, fe = (g, x, T, L, N, O, H, z, $) => {
    g = g || xn, x = x || xn;
    const F = g.length, ee = x.length, V = Math.min(F, ee);
    let W;
    for (W = 0; W < V; W++) {
      const se = x[W] = $ ? Ht(x[W]) : Et(x[W]);
      y(
        g[W],
        se,
        T,
        null,
        N,
        O,
        H,
        z,
        $
      );
    }
    F > ee ? Qt(
      g,
      N,
      O,
      !0,
      !1,
      V
    ) : C(
      x,
      T,
      L,
      N,
      O,
      H,
      z,
      $,
      V
    );
  }, Z = (g, x, T, L, N, O, H, z, $) => {
    let F = 0;
    const ee = x.length;
    let V = g.length - 1, W = ee - 1;
    for (; F <= V && F <= W; ) {
      const se = g[F], he = x[F] = $ ? Ht(x[F]) : Et(x[F]);
      if (ln(se, he))
        y(
          se,
          he,
          T,
          null,
          N,
          O,
          H,
          z,
          $
        );
      else
        break;
      F++;
    }
    for (; F <= V && F <= W; ) {
      const se = g[V], he = x[W] = $ ? Ht(x[W]) : Et(x[W]);
      if (ln(se, he))
        y(
          se,
          he,
          T,
          null,
          N,
          O,
          H,
          z,
          $
        );
      else
        break;
      V--, W--;
    }
    if (F > V) {
      if (F <= W) {
        const se = W + 1, he = se < ee ? x[se].el : L;
        for (; F <= W; )
          y(
            null,
            x[F] = $ ? Ht(x[F]) : Et(x[F]),
            T,
            he,
            N,
            O,
            H,
            z,
            $
          ), F++;
      }
    } else if (F > W)
      for (; F <= V; )
        we(g[F], N, O, !0), F++;
    else {
      const se = F, he = F, _e = /* @__PURE__ */ new Map();
      for (F = he; F <= W; F++) {
        const Ye = x[F] = $ ? Ht(x[F]) : Et(x[F]);
        Ye.key != null && _e.set(Ye.key, F);
      }
      let ge, Je = 0;
      const Ve = W - he + 1;
      let lt = !1, ut = 0;
      const en = new Array(Ve);
      for (F = 0; F < Ve; F++) en[F] = 0;
      for (F = se; F <= V; F++) {
        const Ye = g[F];
        if (Je >= Ve) {
          we(Ye, N, O, !0);
          continue;
        }
        let ft;
        if (Ye.key != null)
          ft = _e.get(Ye.key);
        else
          for (ge = he; ge <= W; ge++)
            if (en[ge - he] === 0 && ln(Ye, x[ge])) {
              ft = ge;
              break;
            }
        ft === void 0 ? we(Ye, N, O, !0) : (en[ft - he] = F + 1, ft >= ut ? ut = ft : lt = !0, y(
          Ye,
          x[ft],
          T,
          null,
          N,
          O,
          H,
          z,
          $
        ), Je++);
      }
      const Mn = lt ? kh(en) : xn;
      for (ge = Mn.length - 1, F = Ve - 1; F >= 0; F--) {
        const Ye = he + F, ft = x[Ye], ns = Ye + 1 < ee ? x[Ye + 1].el : L;
        en[F] === 0 ? y(
          null,
          ft,
          T,
          ns,
          N,
          O,
          H,
          z,
          $
        ) : lt && (ge < 0 || F !== Mn[ge] ? Ee(ft, T, ns, 2) : ge--);
      }
    }
  }, Ee = (g, x, T, L, N = null) => {
    const { el: O, type: H, transition: z, children: $, shapeFlag: F } = g;
    if (F & 6) {
      Ee(g.component.subTree, x, T, L);
      return;
    }
    if (F & 128) {
      g.suspense.move(x, T, L);
      return;
    }
    if (F & 64) {
      H.move(g, x, T, bt);
      return;
    }
    if (H === We) {
      s(O, x, T);
      for (let V = 0; V < $.length; V++)
        Ee($[V], x, T, L);
      s(g.anchor, x, T);
      return;
    }
    if (H === lr) {
      b(g, x, T);
      return;
    }
    if (L !== 2 && F & 1 && z)
      if (L === 0)
        z.beforeEnter(O), s(O, x, T), ot(() => z.enter(O), N);
      else {
        const { leave: V, delayLeave: W, afterLeave: se } = z, he = () => s(O, x, T), _e = () => {
          V(O, () => {
            he(), se && se();
          });
        };
        W ? W(O, he, _e) : _e();
      }
    else
      s(O, x, T);
  }, we = (g, x, T, L = !1, N = !1) => {
    const {
      type: O,
      props: H,
      ref: z,
      children: $,
      dynamicChildren: F,
      shapeFlag: ee,
      patchFlag: V,
      dirs: W,
      cacheIndex: se
    } = g;
    if (V === -2 && (N = !1), z != null && As(z, null, T, g, !0), se != null && (x.renderCache[se] = void 0), ee & 256) {
      x.ctx.deactivate(g);
      return;
    }
    const he = ee & 1 && W, _e = !wn(g);
    let ge;
    if (_e && (ge = H && H.onVnodeBeforeUnmount) && yt(ge, x, g), ee & 6)
      Ks(g.component, T, L);
    else {
      if (ee & 128) {
        g.suspense.unmount(T, L);
        return;
      }
      he && nn(g, null, x, "beforeUnmount"), ee & 64 ? g.type.remove(
        g,
        x,
        T,
        bt,
        L
      ) : F && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !F.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (O !== We || V > 0 && V & 64) ? Qt(
        F,
        x,
        T,
        !1,
        !0
      ) : (O === We && V & 384 || !N && ee & 16) && Qt($, x, T), L && st(g);
    }
    (_e && (ge = H && H.onVnodeUnmounted) || he) && ot(() => {
      ge && yt(ge, x, g), he && nn(g, null, x, "unmounted");
    }, T);
  }, st = (g) => {
    const { type: x, el: T, anchor: L, transition: N } = g;
    if (x === We) {
      Vs(T, L);
      return;
    }
    if (x === lr) {
      p(g);
      return;
    }
    const O = () => {
      r(T), N && !N.persisted && N.afterLeave && N.afterLeave();
    };
    if (g.shapeFlag & 1 && N && !N.persisted) {
      const { leave: H, delayLeave: z } = N, $ = () => H(T, O);
      z ? z(g.el, O, $) : $();
    } else
      O();
  }, Vs = (g, x) => {
    let T;
    for (; g !== x; )
      T = d(g), r(g), g = T;
    r(x);
  }, Ks = (g, x, T) => {
    const { bum: L, scope: N, job: O, subTree: H, um: z, m: $, a: F } = g;
    Pi($), Pi(F), L && _s(L), N.stop(), O && (O.flags |= 8, we(H, g, x, T)), z && ot(z, x), ot(() => {
      g.isUnmounted = !0;
    }, x), x && x.pendingBranch && !x.isUnmounted && g.asyncDep && !g.asyncResolved && g.suspenseId === x.pendingId && (x.deps--, x.deps === 0 && x.resolve());
  }, Qt = (g, x, T, L = !1, N = !1, O = 0) => {
    for (let H = O; H < g.length; H++)
      we(g[H], x, T, L, N);
  }, pn = (g) => {
    if (g.shapeFlag & 6)
      return pn(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const x = d(g.anchor || g.el), T = x && x[Uf];
    return T ? d(T) : x;
  };
  let Dn = !1;
  const Gs = (g, x, T) => {
    g == null ? x._vnode && we(x._vnode, null, null, !0) : y(
      x._vnode || null,
      g,
      x,
      null,
      null,
      null,
      T
    ), x._vnode = g, Dn || (Dn = !0, Ti(), il(), Dn = !1);
  }, bt = {
    p: y,
    um: we,
    m: Ee,
    r: st,
    mt: D,
    mc: C,
    pc: G,
    pbc: R,
    n: pn,
    o: e
  };
  return {
    render: Gs,
    hydrate: void 0,
    createApp: fh(Gs)
  };
}
function ar({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function sn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function yh(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Il(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (ne(s) && ne(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let c = r[o];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[o] = Ht(r[o]), c.el = i.el), !n && c.patchFlag !== -2 && Il(i, c)), c.type === Hs && (c.el = i.el);
    }
}
function kh(e) {
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
function Nl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Nl(t);
}
function Pi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Eh = Symbol.for("v-scx"), wh = () => An(Eh);
function bs(e, t, n) {
  return Ol(e, t, n);
}
function Ol(e, t, n = Ce) {
  const { immediate: s, deep: r, flush: o, once: i } = n, c = ze({}, n), a = t && s || !t && o !== "post";
  let u;
  if (Jn) {
    if (o === "sync") {
      const h = wh();
      u = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!a) {
      const h = () => {
      };
      return h.stop = St, h.resume = St, h.pause = St, h;
    }
  }
  const l = je;
  c.call = (h, _, y) => _t(h, l, _, y);
  let f = !1;
  o === "post" ? c.scheduler = (h) => {
    ot(h, l && l.suspense);
  } : o !== "sync" && (f = !0, c.scheduler = (h, _) => {
    _ ? h() : Yo(h);
  }), c.augmentJob = (h) => {
    t && (h.flags |= 4), f && (h.flags |= 2, l && (h.id = l.uid, h.i = l));
  };
  const d = Pf(e, t, c);
  return Jn && (u ? u.push(d) : a && d()), d;
}
function Ch(e, t, n) {
  const s = this.proxy, r = Me(e) ? e.includes(".") ? Ll(s, e) : () => s[e] : e.bind(s, s);
  let o;
  ae(t) ? o = t : (o = t.handler, n = t);
  const i = ts(this), c = Ol(r, o.bind(s), n);
  return i(), c;
}
function Ll(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const Ah = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${pt(t)}Modifiers`] || e[`${Jt(t)}Modifiers`];
function Sh(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Ce;
  let r = n;
  const o = t.startsWith("update:"), i = o && Ah(s, t.slice(7));
  i && (i.trim && (r = n.map((l) => Me(l) ? l.trim() : l)), i.number && (r = n.map(So)));
  let c, a = s[c = tr(t)] || // also try camelCase event handler (#2249)
  s[c = tr(pt(t))];
  !a && o && (a = s[c = tr(Jt(t))]), a && _t(
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
    e.emitted[c] = !0, _t(
      u,
      e,
      6,
      r
    );
  }
}
function Fl(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let i = {}, c = !1;
  if (!ae(e)) {
    const a = (u) => {
      const l = Fl(u, t, !0);
      l && (c = !0, ze(i, l));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !o && !c ? (De(e) && s.set(e, null), null) : (ne(o) ? o.forEach((a) => i[a] = null) : ze(i, o), De(e) && s.set(e, i), i);
}
function Us(e, t) {
  return !e || !Is(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ve(e, t[0].toLowerCase() + t.slice(1)) || ve(e, Jt(t)) || ve(e, t));
}
function Bi(e) {
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
    ctx: _,
    inheritAttrs: y
  } = e, A = Cs(e);
  let v, k;
  try {
    if (n.shapeFlag & 4) {
      const p = r || s, E = p;
      v = Et(
        u.call(
          E,
          p,
          l,
          f,
          h,
          d,
          _
        )
      ), k = c;
    } else {
      const p = t;
      v = Et(
        p.length > 1 ? p(
          f,
          { attrs: c, slots: i, emit: a }
        ) : p(
          f,
          null
        )
      ), k = t.props ? c : Th(c);
    }
  } catch (p) {
    Hn.length = 0, Bs(p, e, 1), v = Le(nt);
  }
  let b = v;
  if (k && y !== !1) {
    const p = Object.keys(k), { shapeFlag: E } = b;
    p.length && E & 7 && (o && p.some($o) && (k = Rh(
      k,
      o
    )), b = Wt(b, k, !1, !0));
  }
  return n.dirs && (b = Wt(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && Gn(b, n.transition), v = b, Cs(A), v;
}
const Th = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Is(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Rh = (e, t) => {
  const n = {};
  for (const s in e)
    (!$o(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Dh(e, t, n) {
  const { props: s, children: r, component: o } = e, { props: i, children: c, patchFlag: a } = t, u = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? $i(s, i, u) : !!i;
    if (a & 8) {
      const l = t.dynamicProps;
      for (let f = 0; f < l.length; f++) {
        const d = l[f];
        if (i[d] !== s[d] && !Us(u, d))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : s === i ? !1 : s ? i ? $i(s, i, u) : !0 : !!i;
  return !1;
}
function $i(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !Us(n, o))
      return !0;
  }
  return !1;
}
function Mh({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const ql = (e) => e.__isSuspense;
function Ih(e, t) {
  t && t.pendingBranch ? ne(e) ? t.effects.push(...e) : t.effects.push(e) : zf(e);
}
const We = Symbol.for("v-fgt"), Hs = Symbol.for("v-txt"), nt = Symbol.for("v-cmt"), lr = Symbol.for("v-stc"), Hn = [];
let ct = null;
function ce(e = !1) {
  Hn.push(ct = e ? null : []);
}
function Nh() {
  Hn.pop(), ct = Hn[Hn.length - 1] || null;
}
let Zn = 1;
function zi(e, t = !1) {
  Zn += e, e < 0 && ct && t && (ct.hasOnce = !0);
}
function Pl(e) {
  return e.dynamicChildren = Zn > 0 ? ct || xn : null, Nh(), Zn > 0 && ct && ct.push(e), e;
}
function Re(e, t, n, s, r, o) {
  return Pl(
    be(
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
function Pe(e, t, n, s, r) {
  return Pl(
    Le(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function Wn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ln(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Bl = ({ key: e }) => e ?? null, vs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Me(e) || $e(e) || ae(e) ? { i: Be, r: e, k: t, f: !!n } : e : null);
function be(e, t = null, n = null, s = 0, r = null, o = e === We ? 0 : 1, i = !1, c = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Bl(t),
    ref: t && vs(t),
    scopeId: al,
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
    ctx: Be
  };
  return c ? (ti(a, n), o & 128 && e.normalize(a)) : n && (a.shapeFlag |= Me(n) ? 8 : 16), Zn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  ct && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && ct.push(a), a;
}
const Le = Oh;
function Oh(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === bl) && (e = nt), Wn(e)) {
    const c = Wt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ti(c, n), Zn > 0 && !o && ct && (c.shapeFlag & 6 ? ct[ct.indexOf(e)] = c : ct.push(c)), c.patchFlag = -2, c;
  }
  if (Kh(e) && (e = e.__vccOpts), t) {
    t = Lh(t);
    let { class: c, style: a } = t;
    c && !Me(c) && (t.class = Qn(c)), De(a) && (Jo(a) && !ne(a) && (a = ze({}, a)), t.style = qs(a));
  }
  const i = Me(e) ? 1 : ql(e) ? 128 : ul(e) ? 64 : De(e) ? 4 : ae(e) ? 2 : 0;
  return be(
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
function Lh(e) {
  return e ? Jo(e) || Cl(e) ? ze({}, e) : e : null;
}
function Wt(e, t, n = !1, s = !1) {
  const { props: r, ref: o, patchFlag: i, children: c, transition: a } = e, u = t ? Ts(r || {}, t) : r, l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && Bl(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? ne(o) ? o.concat(vs(t)) : [o, vs(t)] : vs(t)
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
    patchFlag: t && e.type !== We ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && Wt(e.ssContent),
    ssFallback: e.ssFallback && Wt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && Gn(
    l,
    a.clone(l)
  ), l;
}
function Fh(e = " ", t = 0) {
  return Le(Hs, null, e, t);
}
function wt(e = "", t = !1) {
  return t ? (ce(), Pe(nt, null, e)) : Le(nt, null, e);
}
function Et(e) {
  return e == null || typeof e == "boolean" ? Le(nt) : ne(e) ? Le(
    We,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Wn(e) ? Ht(e) : Le(Hs, null, String(e));
}
function Ht(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Wt(e);
}
function ti(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (ne(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), ti(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Cl(t) ? t._ctx = Be : r === 3 && Be && (Be.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ae(t) ? (t = { default: t, _ctx: Be }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Fh(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ts(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Qn([t.class, s.class]));
      else if (r === "style")
        t.style = qs([t.style, s.style]);
      else if (Is(r)) {
        const o = t[r], i = s[r];
        i && o !== i && !(ne(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function yt(e, t, n, s = null) {
  _t(e, t, 7, [
    n,
    s
  ]);
}
const qh = kl();
let Ph = 0;
function Bh(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || qh, o = {
    uid: Ph++,
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
    scope: new of(
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
    propsOptions: Sl(s, r),
    emitsOptions: Fl(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ce,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: Ce,
    data: Ce,
    props: Ce,
    attrs: Ce,
    slots: Ce,
    refs: Ce,
    setupState: Ce,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Sh.bind(null, o), e.ce && e.ce(o), o;
}
let je = null;
const $h = () => je || Be;
let Rs, qo;
{
  const e = Fs(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (o) => {
      r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
    };
  };
  Rs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => je = n
  ), qo = t(
    "__VUE_SSR_SETTERS__",
    (n) => Jn = n
  );
}
const ts = (e) => {
  const t = je;
  return Rs(e), e.scope.on(), () => {
    e.scope.off(), Rs(t);
  };
}, Ui = () => {
  je && je.scope.off(), Rs(null);
};
function $l(e) {
  return e.vnode.shapeFlag & 4;
}
let Jn = !1;
function zh(e, t = !1, n = !1) {
  t && qo(t);
  const { props: s, children: r } = e.vnode, o = $l(e);
  dh(e, s, o, t), _h(e, r, n);
  const i = o ? Uh(e, t) : void 0;
  return t && qo(!1), i;
}
function Uh(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, rh);
  const { setup: s } = n;
  if (s) {
    Yt();
    const r = e.setupContext = s.length > 1 ? jh(e) : null, o = ts(e), i = es(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), c = La(i);
    if (Xt(), o(), (c || e.sp) && !wn(e) && ml(e), c) {
      if (i.then(Ui, Ui), t)
        return i.then((a) => {
          Hi(e, a);
        }).catch((a) => {
          Bs(a, e, 0);
        });
      e.asyncDep = i;
    } else
      Hi(e, i);
  } else
    zl(e);
}
function Hi(e, t, n) {
  ae(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : De(t) && (e.setupState = sl(t)), zl(e);
}
function zl(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || St);
  {
    const r = ts(e);
    Yt();
    try {
      oh(e);
    } finally {
      Xt(), r();
    }
  }
}
const Hh = {
  get(e, t) {
    return Ge(e, "get", ""), e[t];
  }
};
function jh(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Hh),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function js(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(sl(Tf(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Un)
        return Un[n](e);
    },
    has(t, n) {
      return n in t || n in Un;
    }
  })) : e.proxy;
}
function Vh(e, t = !0) {
  return ae(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Kh(e) {
  return ae(e) && "__vccOpts" in e;
}
const at = (e, t) => Ff(e, t, Jn);
function Ul(e, t, n) {
  const s = arguments.length;
  return s === 2 ? De(t) && !ne(t) ? Wn(t) ? Le(e, null, [t]) : Le(e, t) : Le(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Wn(n) && (n = [n]), Le(e, t, n));
}
const Gh = "3.5.13";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Po;
const ji = typeof window < "u" && window.trustedTypes;
if (ji)
  try {
    Po = /* @__PURE__ */ ji.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Hl = Po ? (e) => Po.createHTML(e) : (e) => e, Zh = "http://www.w3.org/2000/svg", Wh = "http://www.w3.org/1998/Math/MathML", Mt = typeof document < "u" ? document : null, Vi = Mt && /* @__PURE__ */ Mt.createElement("template"), Jh = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? Mt.createElementNS(Zh, e) : t === "mathml" ? Mt.createElementNS(Wh, e) : n ? Mt.createElement(e, { is: n }) : Mt.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => Mt.createTextNode(e),
  createComment: (e) => Mt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Mt.querySelector(e),
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
      Vi.innerHTML = Hl(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const c = Vi.content;
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
}, $t = "transition", On = "animation", Yn = Symbol("_vtc"), jl = {
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
}, Yh = /* @__PURE__ */ ze(
  {},
  fl,
  jl
), Xh = (e) => (e.displayName = "Transition", e.props = Yh, e), Ki = /* @__PURE__ */ Xh(
  (e, { slots: t }) => Ul(Vf, Qh(e), t)
), rn = (e, t = []) => {
  ne(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Gi = (e) => e ? ne(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Qh(e) {
  const t = {};
  for (const I in e)
    I in jl || (t[I] = e[I]);
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
  } = e, _ = ed(r), y = _ && _[0], A = _ && _[1], {
    onBeforeEnter: v,
    onEnter: k,
    onEnterCancelled: b,
    onLeave: p,
    onLeaveCancelled: E,
    onBeforeAppear: w = v,
    onAppear: B = k,
    onAppearCancelled: C = b
  } = t, S = (I, te, D, oe) => {
    I._enterCancelled = oe, on(I, te ? l : c), on(I, te ? u : i), D && D();
  }, R = (I, te) => {
    I._isLeaving = !1, on(I, f), on(I, h), on(I, d), te && te();
  }, P = (I) => (te, D) => {
    const oe = I ? B : k, Q = () => S(te, I, D);
    rn(oe, [te, Q]), Zi(() => {
      on(te, I ? a : o), Dt(te, I ? l : c), Gi(oe) || Wi(te, s, y, Q);
    });
  };
  return ze(t, {
    onBeforeEnter(I) {
      rn(v, [I]), Dt(I, o), Dt(I, i);
    },
    onBeforeAppear(I) {
      rn(w, [I]), Dt(I, a), Dt(I, u);
    },
    onEnter: P(!1),
    onAppear: P(!0),
    onLeave(I, te) {
      I._isLeaving = !0;
      const D = () => R(I, te);
      Dt(I, f), I._enterCancelled ? (Dt(I, d), Xi()) : (Xi(), Dt(I, d)), Zi(() => {
        I._isLeaving && (on(I, f), Dt(I, h), Gi(p) || Wi(I, s, A, D));
      }), rn(p, [I, D]);
    },
    onEnterCancelled(I) {
      S(I, !1, void 0, !0), rn(b, [I]);
    },
    onAppearCancelled(I) {
      S(I, !0, void 0, !0), rn(C, [I]);
    },
    onLeaveCancelled(I) {
      R(I), rn(E, [I]);
    }
  });
}
function ed(e) {
  if (e == null)
    return null;
  if (De(e))
    return [ur(e.enter), ur(e.leave)];
  {
    const t = ur(e);
    return [t, t];
  }
}
function ur(e) {
  return Xu(e);
}
function Dt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Yn] || (e[Yn] = /* @__PURE__ */ new Set())).add(t);
}
function on(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Yn];
  n && (n.delete(t), n.size || (e[Yn] = void 0));
}
function Zi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let td = 0;
function Wi(e, t, n, s) {
  const r = e._endId = ++td, o = () => {
    r === e._endId && s();
  };
  if (n != null)
    return setTimeout(o, n);
  const { type: i, timeout: c, propCount: a } = nd(e, t);
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
function nd(e, t) {
  const n = window.getComputedStyle(e), s = (_) => (n[_] || "").split(", "), r = s(`${$t}Delay`), o = s(`${$t}Duration`), i = Ji(r, o), c = s(`${On}Delay`), a = s(`${On}Duration`), u = Ji(c, a);
  let l = null, f = 0, d = 0;
  t === $t ? i > 0 && (l = $t, f = i, d = o.length) : t === On ? u > 0 && (l = On, f = u, d = a.length) : (f = Math.max(i, u), l = f > 0 ? i > u ? $t : On : null, d = l ? l === $t ? o.length : a.length : 0);
  const h = l === $t && /\b(transform|all)(,|$)/.test(
    s(`${$t}Property`).toString()
  );
  return {
    type: l,
    timeout: f,
    propCount: d,
    hasTransform: h
  };
}
function Ji(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Yi(n) + Yi(e[s])));
}
function Yi(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Xi() {
  return document.body.offsetHeight;
}
function sd(e, t, n) {
  const s = e[Yn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ds = Symbol("_vod"), Vl = Symbol("_vsh"), rd = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ds] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ln(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Ln(e, !0), s.enter(e)) : s.leave(e, () => {
      Ln(e, !1);
    }) : Ln(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ln(e, t);
  }
};
function Ln(e, t) {
  e.style.display = t ? e[Ds] : "none", e[Vl] = !t;
}
const od = Symbol(""), id = /(^|;)\s*display\s*:/;
function cd(e, t, n) {
  const s = e.style, r = Me(n);
  let o = !1;
  if (n && !r) {
    if (t)
      if (Me(t))
        for (const i of t.split(";")) {
          const c = i.slice(0, i.indexOf(":")).trim();
          n[c] == null && xs(s, c, "");
        }
      else
        for (const i in t)
          n[i] == null && xs(s, i, "");
    for (const i in n)
      i === "display" && (o = !0), xs(s, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = s[od];
      i && (n += ";" + i), s.cssText = n, o = id.test(n);
    }
  } else t && e.removeAttribute("style");
  Ds in e && (e[Ds] = o ? s.display : "", e[Vl] && (s.display = "none"));
}
const Qi = /\s*!important$/;
function xs(e, t, n) {
  if (ne(n))
    n.forEach((s) => xs(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = ad(e, t);
    Qi.test(n) ? e.setProperty(
      Jt(s),
      n.replace(Qi, ""),
      "important"
    ) : e[s] = n;
  }
}
const ec = ["Webkit", "Moz", "ms"], fr = {};
function ad(e, t) {
  const n = fr[t];
  if (n)
    return n;
  let s = pt(t);
  if (s !== "filter" && s in e)
    return fr[t] = s;
  s = Ls(s);
  for (let r = 0; r < ec.length; r++) {
    const o = ec[r] + s;
    if (o in e)
      return fr[t] = o;
  }
  return t;
}
const tc = "http://www.w3.org/1999/xlink";
function nc(e, t, n, s, r, o = rf(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(tc, t.slice(6, t.length)) : e.setAttributeNS(tc, t, n) : n == null || o && !Ba(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Lt(n) ? String(n) : n
  );
}
function sc(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Hl(n) : n);
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
    c === "boolean" ? n = Ba(n) : n == null && c === "string" ? (n = "", i = !0) : c === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(r || t);
}
function vn(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function ld(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const rc = Symbol("_vei");
function ud(e, t, n, s, r = null) {
  const o = e[rc] || (e[rc] = {}), i = o[t];
  if (s && i)
    i.value = s;
  else {
    const [c, a] = fd(t);
    if (s) {
      const u = o[t] = pd(
        s,
        r
      );
      vn(e, c, u, a);
    } else i && (ld(e, c, i, a), o[t] = void 0);
  }
}
const oc = /(?:Once|Passive|Capture)$/;
function fd(e) {
  let t;
  if (oc.test(e)) {
    t = {};
    let s;
    for (; s = e.match(oc); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Jt(e.slice(2)), t];
}
let hr = 0;
const hd = /* @__PURE__ */ Promise.resolve(), dd = () => hr || (hd.then(() => hr = 0), hr = Date.now());
function pd(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    _t(
      gd(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = dd(), n;
}
function gd(e, t) {
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
const ic = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, md = (e, t, n, s, r, o) => {
  const i = r === "svg";
  t === "class" ? sd(e, s, i) : t === "style" ? cd(e, n, s) : Is(t) ? $o(t) || ud(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : _d(e, t, s, i)) ? (sc(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && nc(e, t, s, i, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Me(s)) ? sc(e, pt(t), s, o, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), nc(e, t, s, i));
};
function _d(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ic(t) && ae(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return ic(t) && Me(n) ? !1 : t in e;
}
const cc = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ne(t) ? (n) => _s(t, n) : t;
};
function bd(e) {
  e.target.composing = !0;
}
function ac(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const dr = Symbol("_assign"), vd = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e[dr] = cc(r);
    const o = s || r.props && r.props.type === "number";
    vn(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let c = e.value;
      n && (c = c.trim()), o && (c = So(c)), e[dr](c);
    }), n && vn(e, "change", () => {
      e.value = e.value.trim();
    }), t || (vn(e, "compositionstart", bd), vn(e, "compositionend", ac), vn(e, "change", ac));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: o } }, i) {
    if (e[dr] = cc(i), e.composing) return;
    const c = (o || e.type === "number") && !/^0\d/.test(e.value) ? So(e.value) : e.value, a = t ?? "";
    c !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === a) || (e.value = a));
  }
}, xd = ["ctrl", "shift", "alt", "meta"], yd = {
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
}, kd = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (r, ...o) => {
    for (let i = 0; i < t.length; i++) {
      const c = yd[t[i]];
      if (c && c(r, t)) return;
    }
    return e(r, ...o);
  });
}, Ed = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, wd = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (r) => {
    if (!("key" in r))
      return;
    const o = Jt(r.key);
    if (t.some(
      (i) => i === o || Ed[i] === o
    ))
      return e(r);
  });
}, Cd = /* @__PURE__ */ ze({ patchProp: md }, Jh);
let lc;
function Ad() {
  return lc || (lc = vh(Cd));
}
const Sd = (...e) => {
  const t = Ad().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = Rd(s);
    if (!r) return;
    const o = t._component;
    !ae(o) && !o.render && !o.template && (o.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const i = n(r, !1, Td(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
};
function Td(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Rd(e) {
  return Me(e) ? document.querySelector(e) : e;
}
const Fn = {
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
      resetButtonTooltip: "Reset chat"
    }
  },
  theme: {},
  enableStreaming: !1
}, Dd = "#n8n-chat", Md = "n8n-chat", uc = `${Md}/sessionId`, Kl = "Chat", Gl = "ChatOptions";
var He = [];
for (var pr = 0; pr < 256; ++pr)
  He.push((pr + 256).toString(16).slice(1));
function Id(e, t = 0) {
  return (He[e[t + 0]] + He[e[t + 1]] + He[e[t + 2]] + He[e[t + 3]] + "-" + He[e[t + 4]] + He[e[t + 5]] + "-" + He[e[t + 6]] + He[e[t + 7]] + "-" + He[e[t + 8]] + He[e[t + 9]] + "-" + He[e[t + 10]] + He[e[t + 11]] + He[e[t + 12]] + He[e[t + 13]] + He[e[t + 14]] + He[e[t + 15]]).toLowerCase();
}
var ds, Nd = new Uint8Array(16);
function Od() {
  if (!ds && (ds = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !ds))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return ds(Nd);
}
var Ld = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const fc = {
  randomUUID: Ld
};
function fn(e, t, n) {
  if (fc.randomUUID && !e)
    return fc.randomUUID();
  e = e || {};
  var s = e.random || (e.rng || Od)();
  return s[6] = s[6] & 15 | 64, s[8] = s[8] & 63 | 128, Id(s);
}
async function Fd() {
  return "";
}
async function ni(...e) {
  var i, c;
  const t = await Fd(), n = (i = e[1]) == null ? void 0 : i.body, s = {
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
async function Zl(e, t = {}, n = {}) {
  let s = e;
  return Object.keys(t).length > 0 && (s = `${s}?${new URLSearchParams(
    t
  ).toString()}`), await ni(s, { ...n, method: "GET" });
}
async function Wl(e, t = {}, n = {}) {
  return await ni(e, {
    ...n,
    method: "POST",
    body: JSON.stringify(t)
  });
}
async function qd(e, t = {}, n = [], s = {}) {
  const r = new FormData();
  for (const o in t) {
    const i = t[o];
    typeof i == "object" && i !== null ? r.append(o, JSON.stringify(i)) : r.append(o, i);
  }
  for (const o of n)
    r.append("files", o);
  return await ni(e, {
    ...s,
    method: "POST",
    body: r
  });
}
async function Pd(e, t) {
  var s, r;
  return await (((s = t.webhookConfig) == null ? void 0 : s.method) === "POST" ? Wl : Zl)(
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
async function Bd(e, t, n, s) {
  var o, i, c;
  return t.length > 0 ? await qd(
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
  ) : await (((i = s.webhookConfig) == null ? void 0 : i.method) === "POST" ? Wl : Zl)(
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
function $d() {
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
async function zd(e, t, n, s, r) {
  var a, u;
  const o = await (t.length > 0 ? Ud(e, t, n, s) : Hd(e, n, s));
  if (!o.ok) {
    const l = await o.text();
    throw console.error("HTTP error response:", o.status, l), new Error(`Error while sending message. Error: ${l}`);
  }
  if (!o.body)
    throw new Error("Response body is not readable");
  const i = o.body.pipeThrough($d()).getReader();
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
async function Ud(e, t, n, s) {
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
async function Hd(e, t, n) {
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
function jd() {
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
function Vd(e) {
  if (!document.querySelector(e)) {
    const n = document.createElement("div");
    e.startsWith("#") && (n.id = e.replace("#", "")), e.startsWith(".") && n.classList.add(e.replace(".", "")), document.body.appendChild(n);
  }
}
function Kd(e, t, n, s) {
  const r = new URL(e).origin, o = r.startsWith("https") ? "wss" : "ws";
  return `${r.replace(/^https?/, o)}/chat?sessionId=${n}&executionId=${t}&isPublic=true`;
}
const et = jd();
class Gd {
  constructor() {
    as(this, "nodeRuns", /* @__PURE__ */ new Map());
    as(this, "runOrder", []);
    as(this, "activeRuns", /* @__PURE__ */ new Set());
  }
  getRunKey(t, n) {
    return n !== void 0 ? `${t}-${n}` : t;
  }
  initializeRun(t, n) {
    const s = this.getRunKey(t, n);
    if (!this.nodeRuns.has(s)) {
      const r = Tn();
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
function Tn(e) {
  return {
    id: e ?? fn(),
    type: "text",
    text: "",
    sender: "bot"
  };
}
function hc(e, t, n) {
  const s = e.findIndex((r) => r.id === t);
  if (s === -1)
    throw new Error(`Can't update message. No message with id ${t} found`);
  e[s] = n;
}
function Zd(e, t, n, s, r, o, i) {
  try {
    if (e === "")
      return;
    if (o.value = !1, t) {
      let c = n.getRunMessage(t, i);
      c || (c = n.addRunToActive(t, i), r.value.push(c));
      const a = n.addChunkToRun(t, e, i);
      a && hc(r.value, a.id, a);
    } else {
      s.value || (s.value = Tn(), r.value.push(s.value));
      const c = {
        ...s.value,
        text: s.value.text + e
      };
      hc(r.value, s.value.id, c), s.value = c;
    }
    Zt(() => {
      et.emit("scrollToBottom");
    });
  } catch (c) {
    console.error("Error handling stream chunk:", c);
  }
}
function Wd(e, t, n) {
  try {
    t.registerRunStart(e, n);
  } catch (s) {
    console.error("Error handling node start:", s);
  }
}
function Jd(e, t, n) {
  try {
    t.removeRunFromActive(e, n);
  } catch (s) {
    console.error("Error handling node complete:", s);
  }
}
function Yd(e) {
  return {
    id: fn(),
    text: e,
    sender: "user"
  };
}
function Xd(e) {
  let t = e.output ?? e.text ?? e.message ?? "";
  if (t === "" && Object.keys(e).length > 0)
    try {
      t = JSON.stringify(e, null, 2);
    } catch {
    }
  return t;
}
function Qd(e) {
  const { receivedMessage: t, messages: n } = e;
  t.value && n.value.some(
    (r) => r.sender === "bot" && "text" in r && r.text.trim().length > 0
  ) || (t.value = Tn(), n.value.push(t.value)), t.value.text = "[No response received. This could happen if streaming is enabled in the trigger but disabled in agent node(s)]";
}
function ep(e) {
  const { error: t, receivedMessage: n, messages: s } = e;
  n.value ?? (n.value = Tn()), n.value.text = "Error: Failed to receive response", s.value.includes(n.value) || s.value.push(n.value), console.error("Chat API error:", t);
}
async function tp(e) {
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
      Zd(
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
      Wd(l, i, f);
    },
    onEndMessage: (l, f) => {
      Jd(l, i, f);
    }
  }, { hasReceivedChunks: u } = await zd(
    t,
    [],
    n,
    s,
    a
  );
  u || Qd({ receivedMessage: o, messages: r });
}
async function np(e) {
  const { text: t, sessionId: n, options: s } = e, r = await Bd(t, [], n, s);
  if (r != null && r.executionStarted)
    return { response: r };
  const o = Tn();
  return o.text = Xd(r), { botMessage: o };
}
const sp = {
  install(e, t) {
    e.provide(Gl, t);
    const n = tt([]), s = tt(null), r = tt(!1), o = at(
      () => (t.initialMessages ?? []).map((l) => ({
        id: fn(),
        text: l,
        sender: "bot"
      }))
    );
    async function i(l) {
      var _;
      const f = Yd(l);
      n.value.push(f), r.value = !0, Zt(() => {
        et.emit("scrollToBottom");
      });
      const d = tt(null), h = new Gd();
      try {
        if (t != null && t.enableStreaming)
          await tp({
            text: l,
            sessionId: s.value,
            options: t,
            messages: n,
            receivedMessage: d,
            streamingManager: h,
            waitingForResponse: r
          });
        else {
          const y = await np({
            text: l,
            sessionId: s.value,
            options: t
          });
          if ((_ = y.response) != null && _.executionStarted)
            return r.value = !1, y.response;
          y.botMessage && (d.value = y.botMessage, n.value.push(y.botMessage));
        }
      } catch (y) {
        ep({ error: y, receivedMessage: d, messages: n });
      } finally {
        r.value = !1;
      }
      return Zt(() => {
        et.emit("scrollToBottom");
      }), null;
    }
    async function c() {
      if (!t.loadPreviousSession)
        return;
      const l = localStorage.getItem(uc) ?? fn(), f = await Pd(l, t);
      return n.value = ((f == null ? void 0 : f.data) || []).map((d, h) => ({
        id: `${h}`,
        text: d.kwargs.content,
        sender: d.id.includes("HumanMessage") ? "user" : "bot"
      })), n.value.length && (s.value = l), l;
    }
    async function a() {
      n.value = [], r.value = !1, s.value = fn(), localStorage.setItem(uc, s.value);
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
    e.provide(Kl, u), e.config.globalProperties.$chat = u;
  }
};
function si(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function rp(e) {
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
var gr, dc;
function op() {
  if (dc) return gr;
  dc = 1;
  function e(m) {
    return m instanceof Map ? m.clear = m.delete = m.set = function() {
      throw new Error("map is read-only");
    } : m instanceof Set && (m.add = m.clear = m.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(m), Object.getOwnPropertyNames(m).forEach((M) => {
      const U = m[M], ie = typeof U;
      (ie === "object" || ie === "function") && !Object.isFrozen(U) && e(U);
    }), m;
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
  function n(m) {
    return m.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function s(m, ...M) {
    const U = /* @__PURE__ */ Object.create(null);
    for (const ie in m)
      U[ie] = m[ie];
    return M.forEach(function(ie) {
      for (const Ie in ie)
        U[Ie] = ie[Ie];
    }), /** @type {T} */
    U;
  }
  const r = "</span>", o = (m) => !!m.scope, i = (m, { prefix: M }) => {
    if (m.startsWith("language:"))
      return m.replace("language:", "language-");
    if (m.includes(".")) {
      const U = m.split(".");
      return [
        `${M}${U.shift()}`,
        ...U.map((ie, Ie) => `${ie}${"_".repeat(Ie + 1)}`)
      ].join(" ");
    }
    return `${M}${m}`;
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
  const a = (m = {}) => {
    const M = { children: [] };
    return Object.assign(M, m), M;
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
      return typeof U == "string" ? M.addText(U) : U.children && (M.openNode(U), U.children.forEach((ie) => this._walk(M, ie)), M.closeNode(U)), M;
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
      const ie = M.root;
      U && (ie.scope = `language:${U}`), this.add(ie);
    }
    toHTML() {
      return new c(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), !0;
    }
  }
  function f(m) {
    return m ? typeof m == "string" ? m : m.source : null;
  }
  function d(m) {
    return y("(?=", m, ")");
  }
  function h(m) {
    return y("(?:", m, ")*");
  }
  function _(m) {
    return y("(?:", m, ")?");
  }
  function y(...m) {
    return m.map((U) => f(U)).join("");
  }
  function A(m) {
    const M = m[m.length - 1];
    return typeof M == "object" && M.constructor === Object ? (m.splice(m.length - 1, 1), M) : {};
  }
  function v(...m) {
    return "(" + (A(m).capture ? "" : "?:") + m.map((ie) => f(ie)).join("|") + ")";
  }
  function k(m) {
    return new RegExp(m.toString() + "|").exec("").length - 1;
  }
  function b(m, M) {
    const U = m && m.exec(M);
    return U && U.index === 0;
  }
  const p = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function E(m, { joinWith: M }) {
    let U = 0;
    return m.map((ie) => {
      U += 1;
      const Ie = U;
      let Ne = f(ie), J = "";
      for (; Ne.length > 0; ) {
        const K = p.exec(Ne);
        if (!K) {
          J += Ne;
          break;
        }
        J += Ne.substring(0, K.index), Ne = Ne.substring(K.index + K[0].length), K[0][0] === "\\" && K[1] ? J += "\\" + String(Number(K[1]) + Ie) : (J += K[0], K[0] === "(" && U++);
      }
      return J;
    }).map((ie) => `(${ie})`).join(M);
  }
  const w = /\b\B/, B = "[a-zA-Z]\\w*", C = "[a-zA-Z_]\\w*", S = "\\b\\d+(\\.\\d+)?", R = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", P = "\\b(0b[01]+)", I = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", te = (m = {}) => {
    const M = /^#![ ]*\//;
    return m.binary && (m.begin = y(
      M,
      /.*\b/,
      m.binary,
      /\b.*/
    )), s({
      scope: "meta",
      begin: M,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (U, ie) => {
        U.index !== 0 && ie.ignoreMatch();
      }
    }, m);
  }, D = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, oe = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [D]
  }, Q = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [D]
  }, le = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, G = function(m, M, U = {}) {
    const ie = s(
      {
        scope: "comment",
        begin: m,
        end: M,
        contains: []
      },
      U
    );
    ie.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0
    });
    const Ie = v(
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
    return ie.contains.push(
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
        begin: y(
          /[ ]+/,
          // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
          "(",
          Ie,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), ie;
  }, fe = G("//", "$"), Z = G("/\\*", "\\*/"), Ee = G("#", "$"), we = {
    scope: "number",
    begin: S,
    relevance: 0
  }, st = {
    scope: "number",
    begin: R,
    relevance: 0
  }, Vs = {
    scope: "number",
    begin: P,
    relevance: 0
  }, Ks = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      D,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [D]
      }
    ]
  }, Qt = {
    scope: "title",
    begin: B,
    relevance: 0
  }, pn = {
    scope: "title",
    begin: C,
    relevance: 0
  }, Dn = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + C,
    relevance: 0
  };
  var bt = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: oe,
    BACKSLASH_ESCAPE: D,
    BINARY_NUMBER_MODE: Vs,
    BINARY_NUMBER_RE: P,
    COMMENT: G,
    C_BLOCK_COMMENT_MODE: Z,
    C_LINE_COMMENT_MODE: fe,
    C_NUMBER_MODE: st,
    C_NUMBER_RE: R,
    END_SAME_AS_BEGIN: function(m) {
      return Object.assign(
        m,
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
    HASH_COMMENT_MODE: Ee,
    IDENT_RE: B,
    MATCH_NOTHING_RE: w,
    METHOD_GUARD: Dn,
    NUMBER_MODE: we,
    NUMBER_RE: S,
    PHRASAL_WORDS_MODE: le,
    QUOTE_STRING_MODE: Q,
    REGEXP_MODE: Ks,
    RE_STARTERS_RE: I,
    SHEBANG: te,
    TITLE_MODE: Qt,
    UNDERSCORE_IDENT_RE: C,
    UNDERSCORE_TITLE_MODE: pn
  });
  function hi(m, M) {
    m.input[m.index - 1] === "." && M.ignoreMatch();
  }
  function g(m, M) {
    m.className !== void 0 && (m.scope = m.className, delete m.className);
  }
  function x(m, M) {
    M && m.beginKeywords && (m.begin = "\\b(" + m.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", m.__beforeBegin = hi, m.keywords = m.keywords || m.beginKeywords, delete m.beginKeywords, m.relevance === void 0 && (m.relevance = 0));
  }
  function T(m, M) {
    Array.isArray(m.illegal) && (m.illegal = v(...m.illegal));
  }
  function L(m, M) {
    if (m.match) {
      if (m.begin || m.end) throw new Error("begin & end are not supported with match");
      m.begin = m.match, delete m.match;
    }
  }
  function N(m, M) {
    m.relevance === void 0 && (m.relevance = 1);
  }
  const O = (m, M) => {
    if (!m.beforeMatch) return;
    if (m.starts) throw new Error("beforeMatch cannot be used with starts");
    const U = Object.assign({}, m);
    Object.keys(m).forEach((ie) => {
      delete m[ie];
    }), m.keywords = U.keywords, m.begin = y(U.beforeMatch, d(U.begin)), m.starts = {
      relevance: 0,
      contains: [
        Object.assign(U, { endsParent: !0 })
      ]
    }, m.relevance = 0, delete U.beforeMatch;
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
  function $(m, M, U = z) {
    const ie = /* @__PURE__ */ Object.create(null);
    return typeof m == "string" ? Ie(U, m.split(" ")) : Array.isArray(m) ? Ie(U, m) : Object.keys(m).forEach(function(Ne) {
      Object.assign(
        ie,
        $(m[Ne], M, Ne)
      );
    }), ie;
    function Ie(Ne, J) {
      M && (J = J.map((K) => K.toLowerCase())), J.forEach(function(K) {
        const re = K.split("|");
        ie[re[0]] = [Ne, F(re[0], re[1])];
      });
    }
  }
  function F(m, M) {
    return M ? Number(M) : ee(m) ? 0 : 1;
  }
  function ee(m) {
    return H.includes(m.toLowerCase());
  }
  const V = {}, W = (m) => {
    console.error(m);
  }, se = (m, ...M) => {
    console.log(`WARN: ${m}`, ...M);
  }, he = (m, M) => {
    V[`${m}/${M}`] || (console.log(`Deprecated as of ${m}. ${M}`), V[`${m}/${M}`] = !0);
  }, _e = new Error();
  function ge(m, M, { key: U }) {
    let ie = 0;
    const Ie = m[U], Ne = {}, J = {};
    for (let K = 1; K <= M.length; K++)
      J[K + ie] = Ie[K], Ne[K + ie] = !0, ie += k(M[K - 1]);
    m[U] = J, m[U]._emit = Ne, m[U]._multi = !0;
  }
  function Je(m) {
    if (Array.isArray(m.begin)) {
      if (m.skip || m.excludeBegin || m.returnBegin)
        throw W("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), _e;
      if (typeof m.beginScope != "object" || m.beginScope === null)
        throw W("beginScope must be object"), _e;
      ge(m, m.begin, { key: "beginScope" }), m.begin = E(m.begin, { joinWith: "" });
    }
  }
  function Ve(m) {
    if (Array.isArray(m.end)) {
      if (m.skip || m.excludeEnd || m.returnEnd)
        throw W("skip, excludeEnd, returnEnd not compatible with endScope: {}"), _e;
      if (typeof m.endScope != "object" || m.endScope === null)
        throw W("endScope must be object"), _e;
      ge(m, m.end, { key: "endScope" }), m.end = E(m.end, { joinWith: "" });
    }
  }
  function lt(m) {
    m.scope && typeof m.scope == "object" && m.scope !== null && (m.beginScope = m.scope, delete m.scope);
  }
  function ut(m) {
    lt(m), typeof m.beginScope == "string" && (m.beginScope = { _wrap: m.beginScope }), typeof m.endScope == "string" && (m.endScope = { _wrap: m.endScope }), Je(m), Ve(m);
  }
  function en(m) {
    function M(J, K) {
      return new RegExp(
        f(J),
        "m" + (m.case_insensitive ? "i" : "") + (m.unicodeRegex ? "u" : "") + (K ? "g" : "")
      );
    }
    class U {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(K, re) {
        re.position = this.position++, this.matchIndexes[this.matchAt] = re, this.regexes.push([re, K]), this.matchAt += k(K) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const K = this.regexes.map((re) => re[1]);
        this.matcherRe = M(E(K, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(K) {
        this.matcherRe.lastIndex = this.lastIndex;
        const re = this.matcherRe.exec(K);
        if (!re)
          return null;
        const qe = re.findIndex((In, Ws) => Ws > 0 && In !== void 0), Oe = this.matchIndexes[qe];
        return re.splice(0, qe), Object.assign(re, Oe);
      }
    }
    class ie {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(K) {
        if (this.multiRegexes[K]) return this.multiRegexes[K];
        const re = new U();
        return this.rules.slice(K).forEach(([qe, Oe]) => re.addRule(qe, Oe)), re.compile(), this.multiRegexes[K] = re, re;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(K, re) {
        this.rules.push([K, re]), re.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(K) {
        const re = this.getMatcher(this.regexIndex);
        re.lastIndex = this.lastIndex;
        let qe = re.exec(K);
        if (this.resumingScanAtSamePosition() && !(qe && qe.index === this.lastIndex)) {
          const Oe = this.getMatcher(0);
          Oe.lastIndex = this.lastIndex + 1, qe = Oe.exec(K);
        }
        return qe && (this.regexIndex += qe.position + 1, this.regexIndex === this.count && this.considerAll()), qe;
      }
    }
    function Ie(J) {
      const K = new ie();
      return J.contains.forEach((re) => K.addRule(re.begin, { rule: re, type: "begin" })), J.terminatorEnd && K.addRule(J.terminatorEnd, { type: "end" }), J.illegal && K.addRule(J.illegal, { type: "illegal" }), K;
    }
    function Ne(J, K) {
      const re = (
        /** @type CompiledMode */
        J
      );
      if (J.isCompiled) return re;
      [
        g,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        L,
        ut,
        O
      ].forEach((Oe) => Oe(J, K)), m.compilerExtensions.forEach((Oe) => Oe(J, K)), J.__beforeBegin = null, [
        x,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        T,
        // default to 1 relevance if not specified
        N
      ].forEach((Oe) => Oe(J, K)), J.isCompiled = !0;
      let qe = null;
      return typeof J.keywords == "object" && J.keywords.$pattern && (J.keywords = Object.assign({}, J.keywords), qe = J.keywords.$pattern, delete J.keywords.$pattern), qe = qe || /\w+/, J.keywords && (J.keywords = $(J.keywords, m.case_insensitive)), re.keywordPatternRe = M(qe, !0), K && (J.begin || (J.begin = /\B|\b/), re.beginRe = M(re.begin), !J.end && !J.endsWithParent && (J.end = /\B|\b/), J.end && (re.endRe = M(re.end)), re.terminatorEnd = f(re.end) || "", J.endsWithParent && K.terminatorEnd && (re.terminatorEnd += (J.end ? "|" : "") + K.terminatorEnd)), J.illegal && (re.illegalRe = M(
        /** @type {RegExp | string} */
        J.illegal
      )), J.contains || (J.contains = []), J.contains = [].concat(...J.contains.map(function(Oe) {
        return Ye(Oe === "self" ? J : Oe);
      })), J.contains.forEach(function(Oe) {
        Ne(
          /** @type Mode */
          Oe,
          re
        );
      }), J.starts && Ne(J.starts, K), re.matcher = Ie(re), re;
    }
    if (m.compilerExtensions || (m.compilerExtensions = []), m.contains && m.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return m.classNameAliases = s(m.classNameAliases || {}), Ne(
      /** @type Mode */
      m
    );
  }
  function Mn(m) {
    return m ? m.endsWithParent || Mn(m.starts) : !1;
  }
  function Ye(m) {
    return m.variants && !m.cachedVariants && (m.cachedVariants = m.variants.map(function(M) {
      return s(m, { variants: null }, M);
    })), m.cachedVariants ? m.cachedVariants : Mn(m) ? s(m, { starts: m.starts ? s(m.starts) : null }) : Object.isFrozen(m) ? s(m) : m;
  }
  var ft = "11.11.1";
  class ns extends Error {
    constructor(M, U) {
      super(M), this.name = "HTMLInjectionError", this.html = U;
    }
  }
  const Zs = n, di = s, pi = Symbol("nomatch"), Au = 7, gi = function(m) {
    const M = /* @__PURE__ */ Object.create(null), U = /* @__PURE__ */ Object.create(null), ie = [];
    let Ie = !0;
    const Ne = "Could not find the language '{}', did you forget to load/include a language module?", J = { disableAutodetect: !0, name: "Plain text", contains: [] };
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
    function re(q) {
      return K.noHighlightRe.test(q);
    }
    function qe(q) {
      let X = q.className + " ";
      X += q.parentNode ? q.parentNode.className : "";
      const pe = K.languageDetectRe.exec(X);
      if (pe) {
        const Ae = Pt(pe[1]);
        return Ae || (se(Ne.replace("{}", pe[1])), se("Falling back to no-highlight mode for this block.", q)), Ae ? pe[1] : "no-highlight";
      }
      return X.split(/\s+/).find((Ae) => re(Ae) || Pt(Ae));
    }
    function Oe(q, X, pe) {
      let Ae = "", Fe = "";
      typeof X == "object" ? (Ae = q, pe = X.ignoreIllegals, Fe = X.language) : (he("10.7.0", "highlight(lang, code, ...args) has been deprecated."), he("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), Fe = q, Ae = X), pe === void 0 && (pe = !0);
      const gt = {
        code: Ae,
        language: Fe
      };
      rs("before:highlight", gt);
      const Bt = gt.result ? gt.result : In(gt.language, gt.code, pe);
      return Bt.code = gt.code, rs("after:highlight", Bt), Bt;
    }
    function In(q, X, pe, Ae) {
      const Fe = /* @__PURE__ */ Object.create(null);
      function gt(j, Y) {
        return j.keywords[Y];
      }
      function Bt() {
        if (!ue.keywords) {
          Ue.addText(Se);
          return;
        }
        let j = 0;
        ue.keywordPatternRe.lastIndex = 0;
        let Y = ue.keywordPatternRe.exec(Se), de = "";
        for (; Y; ) {
          de += Se.substring(j, Y.index);
          const ke = xt.case_insensitive ? Y[0].toLowerCase() : Y[0], Ke = gt(ue, ke);
          if (Ke) {
            const [Tt, Hu] = Ke;
            if (Ue.addText(de), de = "", Fe[ke] = (Fe[ke] || 0) + 1, Fe[ke] <= Au && (cs += Hu), Tt.startsWith("_"))
              de += Y[0];
            else {
              const ju = xt.classNameAliases[Tt] || Tt;
              vt(Y[0], ju);
            }
          } else
            de += Y[0];
          j = ue.keywordPatternRe.lastIndex, Y = ue.keywordPatternRe.exec(Se);
        }
        de += Se.substring(j), Ue.addText(de);
      }
      function os() {
        if (Se === "") return;
        let j = null;
        if (typeof ue.subLanguage == "string") {
          if (!M[ue.subLanguage]) {
            Ue.addText(Se);
            return;
          }
          j = In(ue.subLanguage, Se, !0, Ei[ue.subLanguage]), Ei[ue.subLanguage] = /** @type {CompiledMode} */
          j._top;
        } else
          j = Js(Se, ue.subLanguage.length ? ue.subLanguage : null);
        ue.relevance > 0 && (cs += j.relevance), Ue.__addSublanguage(j._emitter, j.language);
      }
      function rt() {
        ue.subLanguage != null ? os() : Bt(), Se = "";
      }
      function vt(j, Y) {
        j !== "" && (Ue.startScope(Y), Ue.addText(j), Ue.endScope());
      }
      function vi(j, Y) {
        let de = 1;
        const ke = Y.length - 1;
        for (; de <= ke; ) {
          if (!j._emit[de]) {
            de++;
            continue;
          }
          const Ke = xt.classNameAliases[j[de]] || j[de], Tt = Y[de];
          Ke ? vt(Tt, Ke) : (Se = Tt, Bt(), Se = ""), de++;
        }
      }
      function xi(j, Y) {
        return j.scope && typeof j.scope == "string" && Ue.openNode(xt.classNameAliases[j.scope] || j.scope), j.beginScope && (j.beginScope._wrap ? (vt(Se, xt.classNameAliases[j.beginScope._wrap] || j.beginScope._wrap), Se = "") : j.beginScope._multi && (vi(j.beginScope, Y), Se = "")), ue = Object.create(j, { parent: { value: ue } }), ue;
      }
      function yi(j, Y, de) {
        let ke = b(j.endRe, de);
        if (ke) {
          if (j["on:end"]) {
            const Ke = new t(j);
            j["on:end"](Y, Ke), Ke.isMatchIgnored && (ke = !1);
          }
          if (ke) {
            for (; j.endsParent && j.parent; )
              j = j.parent;
            return j;
          }
        }
        if (j.endsWithParent)
          return yi(j.parent, Y, de);
      }
      function Pu(j) {
        return ue.matcher.regexIndex === 0 ? (Se += j[0], 1) : (er = !0, 0);
      }
      function Bu(j) {
        const Y = j[0], de = j.rule, ke = new t(de), Ke = [de.__beforeBegin, de["on:begin"]];
        for (const Tt of Ke)
          if (Tt && (Tt(j, ke), ke.isMatchIgnored))
            return Pu(Y);
        return de.skip ? Se += Y : (de.excludeBegin && (Se += Y), rt(), !de.returnBegin && !de.excludeBegin && (Se = Y)), xi(de, j), de.returnBegin ? 0 : Y.length;
      }
      function $u(j) {
        const Y = j[0], de = X.substring(j.index), ke = yi(ue, j, de);
        if (!ke)
          return pi;
        const Ke = ue;
        ue.endScope && ue.endScope._wrap ? (rt(), vt(Y, ue.endScope._wrap)) : ue.endScope && ue.endScope._multi ? (rt(), vi(ue.endScope, j)) : Ke.skip ? Se += Y : (Ke.returnEnd || Ke.excludeEnd || (Se += Y), rt(), Ke.excludeEnd && (Se = Y));
        do
          ue.scope && Ue.closeNode(), !ue.skip && !ue.subLanguage && (cs += ue.relevance), ue = ue.parent;
        while (ue !== ke.parent);
        return ke.starts && xi(ke.starts, j), Ke.returnEnd ? 0 : Y.length;
      }
      function zu() {
        const j = [];
        for (let Y = ue; Y !== xt; Y = Y.parent)
          Y.scope && j.unshift(Y.scope);
        j.forEach((Y) => Ue.openNode(Y));
      }
      let is = {};
      function ki(j, Y) {
        const de = Y && Y[0];
        if (Se += j, de == null)
          return rt(), 0;
        if (is.type === "begin" && Y.type === "end" && is.index === Y.index && de === "") {
          if (Se += X.slice(Y.index, Y.index + 1), !Ie) {
            const ke = new Error(`0 width match regex (${q})`);
            throw ke.languageName = q, ke.badRule = is.rule, ke;
          }
          return 1;
        }
        if (is = Y, Y.type === "begin")
          return Bu(Y);
        if (Y.type === "illegal" && !pe) {
          const ke = new Error('Illegal lexeme "' + de + '" for mode "' + (ue.scope || "<unnamed>") + '"');
          throw ke.mode = ue, ke;
        } else if (Y.type === "end") {
          const ke = $u(Y);
          if (ke !== pi)
            return ke;
        }
        if (Y.type === "illegal" && de === "")
          return Se += `
`, 1;
        if (Qs > 1e5 && Qs > Y.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return Se += de, de.length;
      }
      const xt = Pt(q);
      if (!xt)
        throw W(Ne.replace("{}", q)), new Error('Unknown language: "' + q + '"');
      const Uu = en(xt);
      let Xs = "", ue = Ae || Uu;
      const Ei = {}, Ue = new K.__emitter(K);
      zu();
      let Se = "", cs = 0, tn = 0, Qs = 0, er = !1;
      try {
        if (xt.__emitTokens)
          xt.__emitTokens(X, Ue);
        else {
          for (ue.matcher.considerAll(); ; ) {
            Qs++, er ? er = !1 : ue.matcher.considerAll(), ue.matcher.lastIndex = tn;
            const j = ue.matcher.exec(X);
            if (!j) break;
            const Y = X.substring(tn, j.index), de = ki(Y, j);
            tn = j.index + de;
          }
          ki(X.substring(tn));
        }
        return Ue.finalize(), Xs = Ue.toHTML(), {
          language: q,
          value: Xs,
          relevance: cs,
          illegal: !1,
          _emitter: Ue,
          _top: ue
        };
      } catch (j) {
        if (j.message && j.message.includes("Illegal"))
          return {
            language: q,
            value: Zs(X),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: j.message,
              index: tn,
              context: X.slice(tn - 100, tn + 100),
              mode: j.mode,
              resultSoFar: Xs
            },
            _emitter: Ue
          };
        if (Ie)
          return {
            language: q,
            value: Zs(X),
            illegal: !1,
            relevance: 0,
            errorRaised: j,
            _emitter: Ue,
            _top: ue
          };
        throw j;
      }
    }
    function Ws(q) {
      const X = {
        value: Zs(q),
        illegal: !1,
        relevance: 0,
        _top: J,
        _emitter: new K.__emitter(K)
      };
      return X._emitter.addText(q), X;
    }
    function Js(q, X) {
      X = X || K.languages || Object.keys(M);
      const pe = Ws(q), Ae = X.filter(Pt).filter(bi).map(
        (rt) => In(rt, q, !1)
      );
      Ae.unshift(pe);
      const Fe = Ae.sort((rt, vt) => {
        if (rt.relevance !== vt.relevance) return vt.relevance - rt.relevance;
        if (rt.language && vt.language) {
          if (Pt(rt.language).supersetOf === vt.language)
            return 1;
          if (Pt(vt.language).supersetOf === rt.language)
            return -1;
        }
        return 0;
      }), [gt, Bt] = Fe, os = gt;
      return os.secondBest = Bt, os;
    }
    function Su(q, X, pe) {
      const Ae = X && U[X] || pe;
      q.classList.add("hljs"), q.classList.add(`language-${Ae}`);
    }
    function Ys(q) {
      let X = null;
      const pe = qe(q);
      if (re(pe)) return;
      if (rs(
        "before:highlightElement",
        { el: q, language: pe }
      ), q.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", q);
        return;
      }
      if (q.children.length > 0 && (K.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(q)), K.throwUnescapedHTML))
        throw new ns(
          "One of your code blocks includes unescaped HTML.",
          q.innerHTML
        );
      X = q;
      const Ae = X.textContent, Fe = pe ? Oe(Ae, { language: pe, ignoreIllegals: !0 }) : Js(Ae);
      q.innerHTML = Fe.value, q.dataset.highlighted = "yes", Su(q, pe, Fe.language), q.result = {
        language: Fe.language,
        // TODO: remove with version 11.0
        re: Fe.relevance,
        relevance: Fe.relevance
      }, Fe.secondBest && (q.secondBest = {
        language: Fe.secondBest.language,
        relevance: Fe.secondBest.relevance
      }), rs("after:highlightElement", { el: q, result: Fe, text: Ae });
    }
    function Tu(q) {
      K = di(K, q);
    }
    const Ru = () => {
      ss(), he("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function Du() {
      ss(), he("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let mi = !1;
    function ss() {
      function q() {
        ss();
      }
      if (document.readyState === "loading") {
        mi || window.addEventListener("DOMContentLoaded", q, !1), mi = !0;
        return;
      }
      document.querySelectorAll(K.cssSelector).forEach(Ys);
    }
    function Mu(q, X) {
      let pe = null;
      try {
        pe = X(m);
      } catch (Ae) {
        if (W("Language definition for '{}' could not be registered.".replace("{}", q)), Ie)
          W(Ae);
        else
          throw Ae;
        pe = J;
      }
      pe.name || (pe.name = q), M[q] = pe, pe.rawDefinition = X.bind(null, m), pe.aliases && _i(pe.aliases, { languageName: q });
    }
    function Iu(q) {
      delete M[q];
      for (const X of Object.keys(U))
        U[X] === q && delete U[X];
    }
    function Nu() {
      return Object.keys(M);
    }
    function Pt(q) {
      return q = (q || "").toLowerCase(), M[q] || M[U[q]];
    }
    function _i(q, { languageName: X }) {
      typeof q == "string" && (q = [q]), q.forEach((pe) => {
        U[pe.toLowerCase()] = X;
      });
    }
    function bi(q) {
      const X = Pt(q);
      return X && !X.disableAutodetect;
    }
    function Ou(q) {
      q["before:highlightBlock"] && !q["before:highlightElement"] && (q["before:highlightElement"] = (X) => {
        q["before:highlightBlock"](
          Object.assign({ block: X.el }, X)
        );
      }), q["after:highlightBlock"] && !q["after:highlightElement"] && (q["after:highlightElement"] = (X) => {
        q["after:highlightBlock"](
          Object.assign({ block: X.el }, X)
        );
      });
    }
    function Lu(q) {
      Ou(q), ie.push(q);
    }
    function Fu(q) {
      const X = ie.indexOf(q);
      X !== -1 && ie.splice(X, 1);
    }
    function rs(q, X) {
      const pe = q;
      ie.forEach(function(Ae) {
        Ae[pe] && Ae[pe](X);
      });
    }
    function qu(q) {
      return he("10.7.0", "highlightBlock will be removed entirely in v12.0"), he("10.7.0", "Please use highlightElement now."), Ys(q);
    }
    Object.assign(m, {
      highlight: Oe,
      highlightAuto: Js,
      highlightAll: ss,
      highlightElement: Ys,
      // TODO: Remove with v12 API
      highlightBlock: qu,
      configure: Tu,
      initHighlighting: Ru,
      initHighlightingOnLoad: Du,
      registerLanguage: Mu,
      unregisterLanguage: Iu,
      listLanguages: Nu,
      getLanguage: Pt,
      registerAliases: _i,
      autoDetection: bi,
      inherit: di,
      addPlugin: Lu,
      removePlugin: Fu
    }), m.debugMode = function() {
      Ie = !1;
    }, m.safeMode = function() {
      Ie = !0;
    }, m.versionString = ft, m.regex = {
      concat: y,
      lookahead: d,
      either: v,
      optional: _,
      anyNumberOfTimes: h
    };
    for (const q in bt)
      typeof bt[q] == "object" && e(bt[q]);
    return Object.assign(m, bt), m;
  }, gn = gi({});
  return gn.newInstance = () => gi({}), gr = gn, gn.HighlightJS = gn, gn.default = gn, gr;
}
var ip = /* @__PURE__ */ op();
const It = /* @__PURE__ */ si(ip), pc = "[A-Za-z$_][0-9A-Za-z$_]*", cp = [
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
], ap = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], Jl = [
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
], Yl = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], Xl = [
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
], lp = [
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
], up = [].concat(
  Xl,
  Jl,
  Yl
);
function Ql(e) {
  const t = e.regex, n = (G, { after: fe }) => {
    const Z = "</" + G[0].slice(1);
    return G.input.indexOf(Z, fe) !== -1;
  }, s = pc, r = {
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
      const Z = G[0].length + G.index, Ee = G.input[Z];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Ee === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Ee === ","
      ) {
        fe.ignoreMatch();
        return;
      }
      Ee === ">" && (n(G, { after: Z }) || fe.ignoreMatch());
      let we;
      const st = G.input.substring(Z);
      if (we = st.match(/^\s*=/)) {
        fe.ignoreMatch();
        return;
      }
      if ((we = st.match(/^\s+extends\s+/)) && we.index === 0) {
        fe.ignoreMatch();
        return;
      }
    }
  }, c = {
    $pattern: pc,
    keyword: cp,
    literal: ap,
    built_in: up,
    "variable.language": lp
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
  }, _ = {
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
  }, y = {
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
  }, A = {
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
    _,
    y,
    A,
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
  }, B = {
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
  }, C = {
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
        ...Jl,
        ...Yl
      ]
    }
  }, S = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, R = {
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
  }, P = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function I(G) {
    return t.concat("(?!", G.join("|"), ")");
  }
  const te = {
    match: t.concat(
      /\b/,
      I([
        ...Xl,
        "super",
        "import"
      ].map((G) => `${G}\\s*\\(`)),
      s,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, D = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(s, /(?![0-9A-Za-z$_(])/)
    )),
    end: s,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, oe = {
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
    exports: { PARAMS_CONTAINS: E, CLASS_REFERENCE: C },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      S,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      h,
      _,
      y,
      A,
      k,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      f,
      C,
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
      R,
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
      D,
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
      te,
      P,
      B,
      oe,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function eu(e) {
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
const fp = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function hp(e, t) {
  return ce(), Re("svg", fp, t[0] || (t[0] = [
    be("path", {
      fill: "currentColor",
      d: "M22 14h-1c0-3.87-3.13-7-7-7h-1V5.73A2 2 0 1 0 10 4c0 .74.4 1.39 1 1.73V7h-1c-3.87 0-7 3.13-7 7H2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v1a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1M8.68 17.04L7.5 15.86l-1.18 1.18l-1.18-1.18L7.5 13.5l2.36 2.36zm9 0l-1.18-1.18l-1.18 1.18l-1.18-1.18l2.36-2.36l2.36 2.36z"
    }, null, -1)
  ]));
}
const tu = { name: "mdi-robot-excited", render: hp }, dp = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function pp(e, t) {
  return ce(), Re("svg", dp, t[0] || (t[0] = [
    be("path", {
      fill: "currentColor",
      d: "M17.65 6.35A7.958 7.958 0 0 0 12 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18a6 6 0 0 1-6-6a6 6 0 0 1 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
    }, null, -1)
  ]));
}
const gp = { name: "mdi-refresh", render: pp }, mp = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function _p(e, t) {
  return ce(), Re("svg", mp, t[0] || (t[0] = [
    be("path", {
      fill: "currentColor",
      d: "m2 21l21-9L2 3v7l15 2l-15 2z"
    }, null, -1)
  ]));
}
const bp = { name: "mdi-send", render: _p };
function ri() {
  return An(Kl);
}
function Rn() {
  return {
    options: An(Gl)
  };
}
function nu() {
  const { options: e } = Rn(), t = (e == null ? void 0 : e.defaultLanguage) ?? "en";
  function n(r) {
    var i, c;
    const o = (c = (i = e == null ? void 0 : e.i18n) == null ? void 0 : i[t]) == null ? void 0 : c[r];
    return $e(o) ? o.value : o ?? r;
  }
  function s(r) {
    var o, i;
    return !!((i = (o = e == null ? void 0 : e.i18n) == null ? void 0 : o[t]) != null && i[r]);
  }
  return { t: n, te: s };
}
const vp = {
  key: 0,
  class: "w-8 ml-1.5"
}, xp = ["disabled", "placeholder"], yp = { class: "flex flex-row gap-1" }, kp = ["disabled"], Ep = /* @__PURE__ */ Ft({
  __name: "Input",
  props: {
    placeholder: { default: "inputPlaceholder" }
  },
  emits: ["arrowKeyDown"],
  setup(e, { emit: t }) {
    const n = e, { t: s } = nu(), r = t, { options: o } = Rn(), i = ri(), { waitingForResponse: c } = i, a = tt(null), u = tt(""), l = tt(!1), f = tt(null), d = tt(!1), h = at(() => {
      var C;
      return d.value ? !1 : u.value === "" || xe(c) || ((C = o.disabled) == null ? void 0 : C.value) === !0;
    }), _ = at(() => {
      var C;
      return ((C = o.disabled) == null ? void 0 : C.value) === !0;
    });
    dn(() => {
      et.on("focusInput", A), et.on("blurInput", y), et.on("setInputValue", v), a.value && (f.value = new ResizeObserver((C) => {
        for (const S of C)
          S.target === a.value && B();
      }), f.value.observe(a.value));
    }), Qo(() => {
      et.off("focusInput", A), et.off("blurInput", y), et.off("setInputValue", v), f.value && (f.value.disconnect(), f.value = null);
    });
    function y() {
      a.value && a.value.blur();
    }
    function A() {
      a.value && a.value.focus();
    }
    function v(C) {
      u.value = C, A();
    }
    function k(C) {
      if (o.webhookUrl && i.currentSessionId.value)
        try {
          const S = Kd(
            o.webhookUrl,
            C,
            i.currentSessionId.value,
            !0
          );
          i.ws = new WebSocket(S), i.ws.onmessage = (R) => {
            var I;
            if (R.data === "n8n|heartbeat") {
              (I = i.ws) == null || I.send("n8n|heartbeat-ack");
              return;
            }
            if (R.data === "n8n|continue") {
              d.value = !1, i.waitingForResponse.value = !0;
              return;
            }
            const P = {
              id: fn(),
              text: R.data,
              sender: "bot"
            };
            i.messages.value.push(P), d.value = !0, i.waitingForResponse.value = !1;
          }, i.ws.onclose = () => {
            i.ws = null, d.value = !1, i.waitingForResponse.value = !1;
          };
        } catch (S) {
          console.error("Error setting up websocket connection", S);
        }
    }
    async function b(C, S) {
      const R = {
        id: fn(),
        text: S,
        sender: "user"
      };
      i.messages.value.push(R), C.send(
        JSON.stringify({
          sessionId: i.currentSessionId.value,
          action: "sendMessage",
          chatInput: S
        })
      ), i.waitingForResponse.value = !0, d.value = !1;
    }
    async function p(C) {
      if (C.preventDefault(), h.value)
        return;
      const S = u.value;
      if (u.value = "", l.value = !0, i.ws && d.value) {
        await b(i.ws, S);
        return;
      }
      const R = await i.sendMessage(S);
      R != null && R.executionId && k(R.executionId), l.value = !1;
    }
    async function E(C) {
      C.shiftKey || C.isComposing || (await p(C), B());
    }
    function w(C) {
      (C.key === "ArrowUp" || C.key === "ArrowDown") && (C.preventDefault(), r("arrowKeyDown", {
        key: C.key,
        currentInputValue: u.value
      }));
    }
    function B() {
      const C = a.value;
      if (!C) return;
      C.style.height = "20px";
      const S = Math.min(C.scrollHeight, 480);
      C.style.height = `${S}px`;
    }
    return (C, S) => (ce(), Re("div", {
      class: "flex-row items-center px-4 py-2.5 relative z-50 mx-4 mb-4 flex min-h-13 rounded-2xl bg-white border-[1.5px] border-zinc-100 shadow-md focus-within:border-[1.5px] focus-within:border-zinc-950",
      onKeydown: kd(w, ["stop"])
    }, [
      C.$slots.leftPanel ? (ce(), Re("div", vp, [
        Kt(C.$slots, "leftPanel")
      ])) : wt("", !0),
      ll(be("textarea", {
        ref_key: "chatTextArea",
        ref: a,
        "onUpdate:modelValue": S[0] || (S[0] = (R) => u.value = R),
        "data-test-id": "chat-input",
        disabled: _.value,
        placeholder: xe(s)(n.placeholder),
        class: "field-sizing-content flex w-full rounded-md border-input bg-transparent text-base transition-color disabled:pointer-events-none disabled:cursor-not-allowed aria-invalid:border-destructive file:font-medium file:text-foreground file:text-sm md:text-sm disabled:opacity-50 disabled:outline-none focus-visible:outline aria-invalid:outline-destructive/20 max-h-40 min-h-5 resize-none border-0 px-1 py-0 outline-none text-zinc-950 placeholder:text-zinc-400 group-data-[mobile=true]:text-[16px] sm:text-sm pointer-events-auto overflow-y-auto box-border appearance-none leading-tight focus-visible:ring-0 focus-visible:ring-offset-0 selection:bg-zinc-900 selection:text-white flex-1",
        onKeydown: wd(E, ["enter"]),
        onInput: B,
        onMousedown: B,
        onFocus: B
      }, null, 40, xp), [
        [vd, u.value]
      ]),
      be("div", yp, [
        be("button", {
          disabled: h.value,
          class: "flex items-center justify-center gap-2 whitespace-nowrap font-medium text-sm outline-hidden transition-all duration-200 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 shadow-inner-sm rounded-md p-1.5 h-7 w-7 bg-transparent shadow-none hover:bg-zinc-100/90",
          onClick: p
        }, [
          Le(xe(bp), {
            height: "20",
            width: "20"
          })
        ], 8, kp)
      ])
    ], 32));
  }
}), wp = {
  class: "group relative flex h-full flex-col bg-white shadow-lg backdrop-blur-sm",
  "data-chat-widget": ""
}, Cp = {
  key: 0,
  class: "relative flex items-center justify-between px-5 text-black"
}, Ap = {
  key: 2,
  class: "relative z-50 flex shrink-0 flex-col justify-end"
}, Sp = {
  key: 3,
  class: "flex min-h-10 w-full max-w-full shrink-0 items-center justify-center gap-2 overflow-hidden text-nowrap px-4 pb-4 font-medium text-xs text-zinc-500 leading-[1.4]"
}, Tp = /* @__PURE__ */ Ft({
  __name: "Layout",
  setup(e) {
    const t = tt(null);
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
    return dn(() => {
      et.on("scrollToBottom", s), window.addEventListener("resize", s);
    }), Xo(() => {
      et.off("scrollToBottom", s), window.removeEventListener("resize", s), n && (clearTimeout(n), n = null);
    }), (r, o) => (ce(), Re("main", wp, [
      r.$slots.header ? (ce(), Re("header", Cp, [
        Kt(r.$slots, "header")
      ])) : wt("", !0),
      r.$slots.default ? (ce(), Re("div", {
        key: 1,
        ref_key: "chatBodyRef",
        ref: t,
        class: "-mb-2 relative flex-1 basis-full overflow-y-auto scroll-smooth flex flex-col shadow-inner"
      }, [
        Kt(r.$slots, "default")
      ], 512)) : wt("", !0),
      r.$slots.input ? (ce(), Re("div", Ap, [
        Kt(r.$slots, "input")
      ])) : wt("", !0),
      r.$slots.footer ? (ce(), Re("footer", Sp, [
        Kt(r.$slots, "footer")
      ])) : wt("", !0)
    ]));
  }
});
function Rp(e) {
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
  }), _ = {
    className: "function",
    begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
    returnBegin: !0,
    contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
    relevance: 0
  }, y = [
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
  ], A = [
    "true",
    "false"
  ], v = { match: /(\/[a-z._-]+)+/ }, k = [
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
      keyword: y,
      literal: A,
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
      _,
      f,
      o,
      i,
      v,
      c,
      a,
      u,
      l,
      n
    ]
  };
}
function Dp(e) {
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
  }, d = "[0-9](_?[0-9])*", h = `(\\b(${d}))?\\.(${d})|\\b(${d})\\.`, _ = `\\b|${s.join("|")}`, y = {
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
        begin: `(\\b(${d})|(${h}))[eE][+-]?(${d})[jJ]?(?=${_})`
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
        begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${_})`
      },
      {
        begin: `\\b0[bB](_?[01])+[lL]?(?=${_})`
      },
      {
        begin: `\\b0[oO](_?[0-7])+[lL]?(?=${_})`
      },
      {
        begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${_})`
      },
      // imagnumber (digitpart-based)
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b(${d})[jJ](?=${_})`
      }
    ]
  }, A = {
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
  }, v = {
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
          y,
          f,
          e.HASH_COMMENT_MODE
        ]
      }
    ]
  };
  return u.contains = [
    f,
    y,
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
      y,
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
      A,
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
        contains: [v]
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
          y,
          v,
          f
        ]
      }
    ]
  };
}
const Ms = "[A-Za-z$_][0-9A-Za-z$_]*", su = [
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
], ru = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], ou = [
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
], iu = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], cu = [
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
], au = [
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
], lu = [].concat(
  cu,
  ou,
  iu
);
function Mp(e) {
  const t = e.regex, n = (G, { after: fe }) => {
    const Z = "</" + G[0].slice(1);
    return G.input.indexOf(Z, fe) !== -1;
  }, s = Ms, r = {
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
      const Z = G[0].length + G.index, Ee = G.input[Z];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Ee === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Ee === ","
      ) {
        fe.ignoreMatch();
        return;
      }
      Ee === ">" && (n(G, { after: Z }) || fe.ignoreMatch());
      let we;
      const st = G.input.substring(Z);
      if (we = st.match(/^\s*=/)) {
        fe.ignoreMatch();
        return;
      }
      if ((we = st.match(/^\s+extends\s+/)) && we.index === 0) {
        fe.ignoreMatch();
        return;
      }
    }
  }, c = {
    $pattern: Ms,
    keyword: su,
    literal: ru,
    built_in: lu,
    "variable.language": au
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
  }, _ = {
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
  }, y = {
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
  }, A = {
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
    _,
    y,
    A,
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
  }, B = {
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
  }, C = {
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
        ...ou,
        ...iu
      ]
    }
  }, S = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, R = {
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
  }, P = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function I(G) {
    return t.concat("(?!", G.join("|"), ")");
  }
  const te = {
    match: t.concat(
      /\b/,
      I([
        ...cu,
        "super",
        "import"
      ].map((G) => `${G}\\s*\\(`)),
      s,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, D = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(s, /(?![0-9A-Za-z$_(])/)
    )),
    end: s,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, oe = {
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
    exports: { PARAMS_CONTAINS: E, CLASS_REFERENCE: C },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      S,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      h,
      _,
      y,
      A,
      k,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      f,
      C,
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
      R,
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
      D,
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
      te,
      P,
      B,
      oe,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function Ip(e) {
  const t = e.regex, n = Mp(e), s = Ms, r = [
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
    $pattern: Ms,
    keyword: su.concat(a),
    literal: ru,
    built_in: lu.concat(r),
    "variable.language": au
  }, l = {
    className: "meta",
    begin: "@" + s
  }, f = (y, A, v) => {
    const k = y.contains.findIndex((b) => b.label === A);
    if (k === -1)
      throw new Error("can not find mode to replace");
    y.contains.splice(k, 1, v);
  };
  Object.assign(n.keywords, u), n.exports.PARAMS_CONTAINS.push(l);
  const d = n.contains.find((y) => y.scope === "attr"), h = Object.assign(
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
  const _ = n.contains.find((y) => y.label === "func.def");
  return _.relevance = 0, Object.assign(n, {
    name: "TypeScript",
    aliases: [
      "ts",
      "tsx",
      "mts",
      "cts"
    ]
  }), n;
}
var mr, gc;
function Np() {
  if (gc) return mr;
  gc = 1;
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
  }, mr = n, mr;
}
var Op = Np();
const Lp = /* @__PURE__ */ si(Op);
var _r = {};
const Fp = "Á", qp = "á", Pp = "Ă", Bp = "ă", $p = "∾", zp = "∿", Up = "∾̳", Hp = "Â", jp = "â", Vp = "´", Kp = "А", Gp = "а", Zp = "Æ", Wp = "æ", Jp = "⁡", Yp = "𝔄", Xp = "𝔞", Qp = "À", eg = "à", tg = "ℵ", ng = "ℵ", sg = "Α", rg = "α", og = "Ā", ig = "ā", cg = "⨿", ag = "&", lg = "&", ug = "⩕", fg = "⩓", hg = "∧", dg = "⩜", pg = "⩘", gg = "⩚", mg = "∠", _g = "⦤", bg = "∠", vg = "⦨", xg = "⦩", yg = "⦪", kg = "⦫", Eg = "⦬", wg = "⦭", Cg = "⦮", Ag = "⦯", Sg = "∡", Tg = "∟", Rg = "⊾", Dg = "⦝", Mg = "∢", Ig = "Å", Ng = "⍼", Og = "Ą", Lg = "ą", Fg = "𝔸", qg = "𝕒", Pg = "⩯", Bg = "≈", $g = "⩰", zg = "≊", Ug = "≋", Hg = "'", jg = "⁡", Vg = "≈", Kg = "≊", Gg = "Å", Zg = "å", Wg = "𝒜", Jg = "𝒶", Yg = "≔", Xg = "*", Qg = "≈", em = "≍", tm = "Ã", nm = "ã", sm = "Ä", rm = "ä", om = "∳", im = "⨑", cm = "≌", am = "϶", lm = "‵", um = "∽", fm = "⋍", hm = "∖", dm = "⫧", pm = "⊽", gm = "⌅", mm = "⌆", _m = "⌅", bm = "⎵", vm = "⎶", xm = "≌", ym = "Б", km = "б", Em = "„", wm = "∵", Cm = "∵", Am = "∵", Sm = "⦰", Tm = "϶", Rm = "ℬ", Dm = "ℬ", Mm = "Β", Im = "β", Nm = "ℶ", Om = "≬", Lm = "𝔅", Fm = "𝔟", qm = "⋂", Pm = "◯", Bm = "⋃", $m = "⨀", zm = "⨁", Um = "⨂", Hm = "⨆", jm = "★", Vm = "▽", Km = "△", Gm = "⨄", Zm = "⋁", Wm = "⋀", Jm = "⤍", Ym = "⧫", Xm = "▪", Qm = "▴", e_ = "▾", t_ = "◂", n_ = "▸", s_ = "␣", r_ = "▒", o_ = "░", i_ = "▓", c_ = "█", a_ = "=⃥", l_ = "≡⃥", u_ = "⫭", f_ = "⌐", h_ = "𝔹", d_ = "𝕓", p_ = "⊥", g_ = "⊥", m_ = "⋈", __ = "⧉", b_ = "┐", v_ = "╕", x_ = "╖", y_ = "╗", k_ = "┌", E_ = "╒", w_ = "╓", C_ = "╔", A_ = "─", S_ = "═", T_ = "┬", R_ = "╤", D_ = "╥", M_ = "╦", I_ = "┴", N_ = "╧", O_ = "╨", L_ = "╩", F_ = "⊟", q_ = "⊞", P_ = "⊠", B_ = "┘", $_ = "╛", z_ = "╜", U_ = "╝", H_ = "└", j_ = "╘", V_ = "╙", K_ = "╚", G_ = "│", Z_ = "║", W_ = "┼", J_ = "╪", Y_ = "╫", X_ = "╬", Q_ = "┤", e0 = "╡", t0 = "╢", n0 = "╣", s0 = "├", r0 = "╞", o0 = "╟", i0 = "╠", c0 = "‵", a0 = "˘", l0 = "˘", u0 = "¦", f0 = "𝒷", h0 = "ℬ", d0 = "⁏", p0 = "∽", g0 = "⋍", m0 = "⧅", _0 = "\\", b0 = "⟈", v0 = "•", x0 = "•", y0 = "≎", k0 = "⪮", E0 = "≏", w0 = "≎", C0 = "≏", A0 = "Ć", S0 = "ć", T0 = "⩄", R0 = "⩉", D0 = "⩋", M0 = "∩", I0 = "⋒", N0 = "⩇", O0 = "⩀", L0 = "ⅅ", F0 = "∩︀", q0 = "⁁", P0 = "ˇ", B0 = "ℭ", $0 = "⩍", z0 = "Č", U0 = "č", H0 = "Ç", j0 = "ç", V0 = "Ĉ", K0 = "ĉ", G0 = "∰", Z0 = "⩌", W0 = "⩐", J0 = "Ċ", Y0 = "ċ", X0 = "¸", Q0 = "¸", eb = "⦲", tb = "¢", nb = "·", sb = "·", rb = "𝔠", ob = "ℭ", ib = "Ч", cb = "ч", ab = "✓", lb = "✓", ub = "Χ", fb = "χ", hb = "ˆ", db = "≗", pb = "↺", gb = "↻", mb = "⊛", _b = "⊚", bb = "⊝", vb = "⊙", xb = "®", yb = "Ⓢ", kb = "⊖", Eb = "⊕", wb = "⊗", Cb = "○", Ab = "⧃", Sb = "≗", Tb = "⨐", Rb = "⫯", Db = "⧂", Mb = "∲", Ib = "”", Nb = "’", Ob = "♣", Lb = "♣", Fb = ":", qb = "∷", Pb = "⩴", Bb = "≔", $b = "≔", zb = ",", Ub = "@", Hb = "∁", jb = "∘", Vb = "∁", Kb = "ℂ", Gb = "≅", Zb = "⩭", Wb = "≡", Jb = "∮", Yb = "∯", Xb = "∮", Qb = "𝕔", ev = "ℂ", tv = "∐", nv = "∐", sv = "©", rv = "©", ov = "℗", iv = "∳", cv = "↵", av = "✗", lv = "⨯", uv = "𝒞", fv = "𝒸", hv = "⫏", dv = "⫑", pv = "⫐", gv = "⫒", mv = "⋯", _v = "⤸", bv = "⤵", vv = "⋞", xv = "⋟", yv = "↶", kv = "⤽", Ev = "⩈", wv = "⩆", Cv = "≍", Av = "∪", Sv = "⋓", Tv = "⩊", Rv = "⊍", Dv = "⩅", Mv = "∪︀", Iv = "↷", Nv = "⤼", Ov = "⋞", Lv = "⋟", Fv = "⋎", qv = "⋏", Pv = "¤", Bv = "↶", $v = "↷", zv = "⋎", Uv = "⋏", Hv = "∲", jv = "∱", Vv = "⌭", Kv = "†", Gv = "‡", Zv = "ℸ", Wv = "↓", Jv = "↡", Yv = "⇓", Xv = "‐", Qv = "⫤", ex = "⊣", tx = "⤏", nx = "˝", sx = "Ď", rx = "ď", ox = "Д", ix = "д", cx = "‡", ax = "⇊", lx = "ⅅ", ux = "ⅆ", fx = "⤑", hx = "⩷", dx = "°", px = "∇", gx = "Δ", mx = "δ", _x = "⦱", bx = "⥿", vx = "𝔇", xx = "𝔡", yx = "⥥", kx = "⇃", Ex = "⇂", wx = "´", Cx = "˙", Ax = "˝", Sx = "`", Tx = "˜", Rx = "⋄", Dx = "⋄", Mx = "⋄", Ix = "♦", Nx = "♦", Ox = "¨", Lx = "ⅆ", Fx = "ϝ", qx = "⋲", Px = "÷", Bx = "÷", $x = "⋇", zx = "⋇", Ux = "Ђ", Hx = "ђ", jx = "⌞", Vx = "⌍", Kx = "$", Gx = "𝔻", Zx = "𝕕", Wx = "¨", Jx = "˙", Yx = "⃜", Xx = "≐", Qx = "≑", ey = "≐", ty = "∸", ny = "∔", sy = "⊡", ry = "⌆", oy = "∯", iy = "¨", cy = "⇓", ay = "⇐", ly = "⇔", uy = "⫤", fy = "⟸", hy = "⟺", dy = "⟹", py = "⇒", gy = "⊨", my = "⇑", _y = "⇕", by = "∥", vy = "⤓", xy = "↓", yy = "↓", ky = "⇓", Ey = "⇵", wy = "̑", Cy = "⇊", Ay = "⇃", Sy = "⇂", Ty = "⥐", Ry = "⥞", Dy = "⥖", My = "↽", Iy = "⥟", Ny = "⥗", Oy = "⇁", Ly = "↧", Fy = "⊤", qy = "⤐", Py = "⌟", By = "⌌", $y = "𝒟", zy = "𝒹", Uy = "Ѕ", Hy = "ѕ", jy = "⧶", Vy = "Đ", Ky = "đ", Gy = "⋱", Zy = "▿", Wy = "▾", Jy = "⇵", Yy = "⥯", Xy = "⦦", Qy = "Џ", ek = "џ", tk = "⟿", nk = "É", sk = "é", rk = "⩮", ok = "Ě", ik = "ě", ck = "Ê", ak = "ê", lk = "≖", uk = "≕", fk = "Э", hk = "э", dk = "⩷", pk = "Ė", gk = "ė", mk = "≑", _k = "ⅇ", bk = "≒", vk = "𝔈", xk = "𝔢", yk = "⪚", kk = "È", Ek = "è", wk = "⪖", Ck = "⪘", Ak = "⪙", Sk = "∈", Tk = "⏧", Rk = "ℓ", Dk = "⪕", Mk = "⪗", Ik = "Ē", Nk = "ē", Ok = "∅", Lk = "∅", Fk = "◻", qk = "∅", Pk = "▫", Bk = " ", $k = " ", zk = " ", Uk = "Ŋ", Hk = "ŋ", jk = " ", Vk = "Ę", Kk = "ę", Gk = "𝔼", Zk = "𝕖", Wk = "⋕", Jk = "⧣", Yk = "⩱", Xk = "ε", Qk = "Ε", eE = "ε", tE = "ϵ", nE = "≖", sE = "≕", rE = "≂", oE = "⪖", iE = "⪕", cE = "⩵", aE = "=", lE = "≂", uE = "≟", fE = "⇌", hE = "≡", dE = "⩸", pE = "⧥", gE = "⥱", mE = "≓", _E = "ℯ", bE = "ℰ", vE = "≐", xE = "⩳", yE = "≂", kE = "Η", EE = "η", wE = "Ð", CE = "ð", AE = "Ë", SE = "ë", TE = "€", RE = "!", DE = "∃", ME = "∃", IE = "ℰ", NE = "ⅇ", OE = "ⅇ", LE = "≒", FE = "Ф", qE = "ф", PE = "♀", BE = "ﬃ", $E = "ﬀ", zE = "ﬄ", UE = "𝔉", HE = "𝔣", jE = "ﬁ", VE = "◼", KE = "▪", GE = "fj", ZE = "♭", WE = "ﬂ", JE = "▱", YE = "ƒ", XE = "𝔽", QE = "𝕗", e1 = "∀", t1 = "∀", n1 = "⋔", s1 = "⫙", r1 = "ℱ", o1 = "⨍", i1 = "½", c1 = "⅓", a1 = "¼", l1 = "⅕", u1 = "⅙", f1 = "⅛", h1 = "⅔", d1 = "⅖", p1 = "¾", g1 = "⅗", m1 = "⅜", _1 = "⅘", b1 = "⅚", v1 = "⅝", x1 = "⅞", y1 = "⁄", k1 = "⌢", E1 = "𝒻", w1 = "ℱ", C1 = "ǵ", A1 = "Γ", S1 = "γ", T1 = "Ϝ", R1 = "ϝ", D1 = "⪆", M1 = "Ğ", I1 = "ğ", N1 = "Ģ", O1 = "Ĝ", L1 = "ĝ", F1 = "Г", q1 = "г", P1 = "Ġ", B1 = "ġ", $1 = "≥", z1 = "≧", U1 = "⪌", H1 = "⋛", j1 = "≥", V1 = "≧", K1 = "⩾", G1 = "⪩", Z1 = "⩾", W1 = "⪀", J1 = "⪂", Y1 = "⪄", X1 = "⋛︀", Q1 = "⪔", ew = "𝔊", tw = "𝔤", nw = "≫", sw = "⋙", rw = "⋙", ow = "ℷ", iw = "Ѓ", cw = "ѓ", aw = "⪥", lw = "≷", uw = "⪒", fw = "⪤", hw = "⪊", dw = "⪊", pw = "⪈", gw = "≩", mw = "⪈", _w = "≩", bw = "⋧", vw = "𝔾", xw = "𝕘", yw = "`", kw = "≥", Ew = "⋛", ww = "≧", Cw = "⪢", Aw = "≷", Sw = "⩾", Tw = "≳", Rw = "𝒢", Dw = "ℊ", Mw = "≳", Iw = "⪎", Nw = "⪐", Ow = "⪧", Lw = "⩺", Fw = ">", qw = ">", Pw = "≫", Bw = "⋗", $w = "⦕", zw = "⩼", Uw = "⪆", Hw = "⥸", jw = "⋗", Vw = "⋛", Kw = "⪌", Gw = "≷", Zw = "≳", Ww = "≩︀", Jw = "≩︀", Yw = "ˇ", Xw = " ", Qw = "½", eC = "ℋ", tC = "Ъ", nC = "ъ", sC = "⥈", rC = "↔", oC = "⇔", iC = "↭", cC = "^", aC = "ℏ", lC = "Ĥ", uC = "ĥ", fC = "♥", hC = "♥", dC = "…", pC = "⊹", gC = "𝔥", mC = "ℌ", _C = "ℋ", bC = "⤥", vC = "⤦", xC = "⇿", yC = "∻", kC = "↩", EC = "↪", wC = "𝕙", CC = "ℍ", AC = "―", SC = "─", TC = "𝒽", RC = "ℋ", DC = "ℏ", MC = "Ħ", IC = "ħ", NC = "≎", OC = "≏", LC = "⁃", FC = "‐", qC = "Í", PC = "í", BC = "⁣", $C = "Î", zC = "î", UC = "И", HC = "и", jC = "İ", VC = "Е", KC = "е", GC = "¡", ZC = "⇔", WC = "𝔦", JC = "ℑ", YC = "Ì", XC = "ì", QC = "ⅈ", eA = "⨌", tA = "∭", nA = "⧜", sA = "℩", rA = "Ĳ", oA = "ĳ", iA = "Ī", cA = "ī", aA = "ℑ", lA = "ⅈ", uA = "ℐ", fA = "ℑ", hA = "ı", dA = "ℑ", pA = "⊷", gA = "Ƶ", mA = "⇒", _A = "℅", bA = "∞", vA = "⧝", xA = "ı", yA = "⊺", kA = "∫", EA = "∬", wA = "ℤ", CA = "∫", AA = "⊺", SA = "⋂", TA = "⨗", RA = "⨼", DA = "⁣", MA = "⁢", IA = "Ё", NA = "ё", OA = "Į", LA = "į", FA = "𝕀", qA = "𝕚", PA = "Ι", BA = "ι", $A = "⨼", zA = "¿", UA = "𝒾", HA = "ℐ", jA = "∈", VA = "⋵", KA = "⋹", GA = "⋴", ZA = "⋳", WA = "∈", JA = "⁢", YA = "Ĩ", XA = "ĩ", QA = "І", eS = "і", tS = "Ï", nS = "ï", sS = "Ĵ", rS = "ĵ", oS = "Й", iS = "й", cS = "𝔍", aS = "𝔧", lS = "ȷ", uS = "𝕁", fS = "𝕛", hS = "𝒥", dS = "𝒿", pS = "Ј", gS = "ј", mS = "Є", _S = "є", bS = "Κ", vS = "κ", xS = "ϰ", yS = "Ķ", kS = "ķ", ES = "К", wS = "к", CS = "𝔎", AS = "𝔨", SS = "ĸ", TS = "Х", RS = "х", DS = "Ќ", MS = "ќ", IS = "𝕂", NS = "𝕜", OS = "𝒦", LS = "𝓀", FS = "⇚", qS = "Ĺ", PS = "ĺ", BS = "⦴", $S = "ℒ", zS = "Λ", US = "λ", HS = "⟨", jS = "⟪", VS = "⦑", KS = "⟨", GS = "⪅", ZS = "ℒ", WS = "«", JS = "⇤", YS = "⤟", XS = "←", QS = "↞", eT = "⇐", tT = "⤝", nT = "↩", sT = "↫", rT = "⤹", oT = "⥳", iT = "↢", cT = "⤙", aT = "⤛", lT = "⪫", uT = "⪭", fT = "⪭︀", hT = "⤌", dT = "⤎", pT = "❲", gT = "{", mT = "[", _T = "⦋", bT = "⦏", vT = "⦍", xT = "Ľ", yT = "ľ", kT = "Ļ", ET = "ļ", wT = "⌈", CT = "{", AT = "Л", ST = "л", TT = "⤶", RT = "“", DT = "„", MT = "⥧", IT = "⥋", NT = "↲", OT = "≤", LT = "≦", FT = "⟨", qT = "⇤", PT = "←", BT = "←", $T = "⇐", zT = "⇆", UT = "↢", HT = "⌈", jT = "⟦", VT = "⥡", KT = "⥙", GT = "⇃", ZT = "⌊", WT = "↽", JT = "↼", YT = "⇇", XT = "↔", QT = "↔", eR = "⇔", tR = "⇆", nR = "⇋", sR = "↭", rR = "⥎", oR = "↤", iR = "⊣", cR = "⥚", aR = "⋋", lR = "⧏", uR = "⊲", fR = "⊴", hR = "⥑", dR = "⥠", pR = "⥘", gR = "↿", mR = "⥒", _R = "↼", bR = "⪋", vR = "⋚", xR = "≤", yR = "≦", kR = "⩽", ER = "⪨", wR = "⩽", CR = "⩿", AR = "⪁", SR = "⪃", TR = "⋚︀", RR = "⪓", DR = "⪅", MR = "⋖", IR = "⋚", NR = "⪋", OR = "⋚", LR = "≦", FR = "≶", qR = "≶", PR = "⪡", BR = "≲", $R = "⩽", zR = "≲", UR = "⥼", HR = "⌊", jR = "𝔏", VR = "𝔩", KR = "≶", GR = "⪑", ZR = "⥢", WR = "↽", JR = "↼", YR = "⥪", XR = "▄", QR = "Љ", eD = "љ", tD = "⇇", nD = "≪", sD = "⋘", rD = "⌞", oD = "⇚", iD = "⥫", cD = "◺", aD = "Ŀ", lD = "ŀ", uD = "⎰", fD = "⎰", hD = "⪉", dD = "⪉", pD = "⪇", gD = "≨", mD = "⪇", _D = "≨", bD = "⋦", vD = "⟬", xD = "⇽", yD = "⟦", kD = "⟵", ED = "⟵", wD = "⟸", CD = "⟷", AD = "⟷", SD = "⟺", TD = "⟼", RD = "⟶", DD = "⟶", MD = "⟹", ID = "↫", ND = "↬", OD = "⦅", LD = "𝕃", FD = "𝕝", qD = "⨭", PD = "⨴", BD = "∗", $D = "_", zD = "↙", UD = "↘", HD = "◊", jD = "◊", VD = "⧫", KD = "(", GD = "⦓", ZD = "⇆", WD = "⌟", JD = "⇋", YD = "⥭", XD = "‎", QD = "⊿", eM = "‹", tM = "𝓁", nM = "ℒ", sM = "↰", rM = "↰", oM = "≲", iM = "⪍", cM = "⪏", aM = "[", lM = "‘", uM = "‚", fM = "Ł", hM = "ł", dM = "⪦", pM = "⩹", gM = "<", mM = "<", _M = "≪", bM = "⋖", vM = "⋋", xM = "⋉", yM = "⥶", kM = "⩻", EM = "◃", wM = "⊴", CM = "◂", AM = "⦖", SM = "⥊", TM = "⥦", RM = "≨︀", DM = "≨︀", MM = "¯", IM = "♂", NM = "✠", OM = "✠", LM = "↦", FM = "↦", qM = "↧", PM = "↤", BM = "↥", $M = "▮", zM = "⨩", UM = "М", HM = "м", jM = "—", VM = "∺", KM = "∡", GM = " ", ZM = "ℳ", WM = "𝔐", JM = "𝔪", YM = "℧", XM = "µ", QM = "*", eI = "⫰", tI = "∣", nI = "·", sI = "⊟", rI = "−", oI = "∸", iI = "⨪", cI = "∓", aI = "⫛", lI = "…", uI = "∓", fI = "⊧", hI = "𝕄", dI = "𝕞", pI = "∓", gI = "𝓂", mI = "ℳ", _I = "∾", bI = "Μ", vI = "μ", xI = "⊸", yI = "⊸", kI = "∇", EI = "Ń", wI = "ń", CI = "∠⃒", AI = "≉", SI = "⩰̸", TI = "≋̸", RI = "ŉ", DI = "≉", MI = "♮", II = "ℕ", NI = "♮", OI = " ", LI = "≎̸", FI = "≏̸", qI = "⩃", PI = "Ň", BI = "ň", $I = "Ņ", zI = "ņ", UI = "≇", HI = "⩭̸", jI = "⩂", VI = "Н", KI = "н", GI = "–", ZI = "⤤", WI = "↗", JI = "⇗", YI = "↗", XI = "≠", QI = "≐̸", eN = "​", tN = "​", nN = "​", sN = "​", rN = "≢", oN = "⤨", iN = "≂̸", cN = "≫", aN = "≪", lN = `
`, uN = "∄", fN = "∄", hN = "𝔑", dN = "𝔫", pN = "≧̸", gN = "≱", mN = "≱", _N = "≧̸", bN = "⩾̸", vN = "⩾̸", xN = "⋙̸", yN = "≵", kN = "≫⃒", EN = "≯", wN = "≯", CN = "≫̸", AN = "↮", SN = "⇎", TN = "⫲", RN = "∋", DN = "⋼", MN = "⋺", IN = "∋", NN = "Њ", ON = "њ", LN = "↚", FN = "⇍", qN = "‥", PN = "≦̸", BN = "≰", $N = "↚", zN = "⇍", UN = "↮", HN = "⇎", jN = "≰", VN = "≦̸", KN = "⩽̸", GN = "⩽̸", ZN = "≮", WN = "⋘̸", JN = "≴", YN = "≪⃒", XN = "≮", QN = "⋪", eO = "⋬", tO = "≪̸", nO = "∤", sO = "⁠", rO = " ", oO = "𝕟", iO = "ℕ", cO = "⫬", aO = "¬", lO = "≢", uO = "≭", fO = "∦", hO = "∉", dO = "≠", pO = "≂̸", gO = "∄", mO = "≯", _O = "≱", bO = "≧̸", vO = "≫̸", xO = "≹", yO = "⩾̸", kO = "≵", EO = "≎̸", wO = "≏̸", CO = "∉", AO = "⋵̸", SO = "⋹̸", TO = "∉", RO = "⋷", DO = "⋶", MO = "⧏̸", IO = "⋪", NO = "⋬", OO = "≮", LO = "≰", FO = "≸", qO = "≪̸", PO = "⩽̸", BO = "≴", $O = "⪢̸", zO = "⪡̸", UO = "∌", HO = "∌", jO = "⋾", VO = "⋽", KO = "⊀", GO = "⪯̸", ZO = "⋠", WO = "∌", JO = "⧐̸", YO = "⋫", XO = "⋭", QO = "⊏̸", eL = "⋢", tL = "⊐̸", nL = "⋣", sL = "⊂⃒", rL = "⊈", oL = "⊁", iL = "⪰̸", cL = "⋡", aL = "≿̸", lL = "⊃⃒", uL = "⊉", fL = "≁", hL = "≄", dL = "≇", pL = "≉", gL = "∤", mL = "∦", _L = "∦", bL = "⫽⃥", vL = "∂̸", xL = "⨔", yL = "⊀", kL = "⋠", EL = "⊀", wL = "⪯̸", CL = "⪯̸", AL = "⤳̸", SL = "↛", TL = "⇏", RL = "↝̸", DL = "↛", ML = "⇏", IL = "⋫", NL = "⋭", OL = "⊁", LL = "⋡", FL = "⪰̸", qL = "𝒩", PL = "𝓃", BL = "∤", $L = "∦", zL = "≁", UL = "≄", HL = "≄", jL = "∤", VL = "∦", KL = "⋢", GL = "⋣", ZL = "⊄", WL = "⫅̸", JL = "⊈", YL = "⊂⃒", XL = "⊈", QL = "⫅̸", eF = "⊁", tF = "⪰̸", nF = "⊅", sF = "⫆̸", rF = "⊉", oF = "⊃⃒", iF = "⊉", cF = "⫆̸", aF = "≹", lF = "Ñ", uF = "ñ", fF = "≸", hF = "⋪", dF = "⋬", pF = "⋫", gF = "⋭", mF = "Ν", _F = "ν", bF = "#", vF = "№", xF = " ", yF = "≍⃒", kF = "⊬", EF = "⊭", wF = "⊮", CF = "⊯", AF = "≥⃒", SF = ">⃒", TF = "⤄", RF = "⧞", DF = "⤂", MF = "≤⃒", IF = "<⃒", NF = "⊴⃒", OF = "⤃", LF = "⊵⃒", FF = "∼⃒", qF = "⤣", PF = "↖", BF = "⇖", $F = "↖", zF = "⤧", UF = "Ó", HF = "ó", jF = "⊛", VF = "Ô", KF = "ô", GF = "⊚", ZF = "О", WF = "о", JF = "⊝", YF = "Ő", XF = "ő", QF = "⨸", eq = "⊙", tq = "⦼", nq = "Œ", sq = "œ", rq = "⦿", oq = "𝔒", iq = "𝔬", cq = "˛", aq = "Ò", lq = "ò", uq = "⧁", fq = "⦵", hq = "Ω", dq = "∮", pq = "↺", gq = "⦾", mq = "⦻", _q = "‾", bq = "⧀", vq = "Ō", xq = "ō", yq = "Ω", kq = "ω", Eq = "Ο", wq = "ο", Cq = "⦶", Aq = "⊖", Sq = "𝕆", Tq = "𝕠", Rq = "⦷", Dq = "“", Mq = "‘", Iq = "⦹", Nq = "⊕", Oq = "↻", Lq = "⩔", Fq = "∨", qq = "⩝", Pq = "ℴ", Bq = "ℴ", $q = "ª", zq = "º", Uq = "⊶", Hq = "⩖", jq = "⩗", Vq = "⩛", Kq = "Ⓢ", Gq = "𝒪", Zq = "ℴ", Wq = "Ø", Jq = "ø", Yq = "⊘", Xq = "Õ", Qq = "õ", eP = "⨶", tP = "⨷", nP = "⊗", sP = "Ö", rP = "ö", oP = "⌽", iP = "‾", cP = "⏞", aP = "⎴", lP = "⏜", uP = "¶", fP = "∥", hP = "∥", dP = "⫳", pP = "⫽", gP = "∂", mP = "∂", _P = "П", bP = "п", vP = "%", xP = ".", yP = "‰", kP = "⊥", EP = "‱", wP = "𝔓", CP = "𝔭", AP = "Φ", SP = "φ", TP = "ϕ", RP = "ℳ", DP = "☎", MP = "Π", IP = "π", NP = "⋔", OP = "ϖ", LP = "ℏ", FP = "ℎ", qP = "ℏ", PP = "⨣", BP = "⊞", $P = "⨢", zP = "+", UP = "∔", HP = "⨥", jP = "⩲", VP = "±", KP = "±", GP = "⨦", ZP = "⨧", WP = "±", JP = "ℌ", YP = "⨕", XP = "𝕡", QP = "ℙ", e2 = "£", t2 = "⪷", n2 = "⪻", s2 = "≺", r2 = "≼", o2 = "⪷", i2 = "≺", c2 = "≼", a2 = "≺", l2 = "⪯", u2 = "≼", f2 = "≾", h2 = "⪯", d2 = "⪹", p2 = "⪵", g2 = "⋨", m2 = "⪯", _2 = "⪳", b2 = "≾", v2 = "′", x2 = "″", y2 = "ℙ", k2 = "⪹", E2 = "⪵", w2 = "⋨", C2 = "∏", A2 = "∏", S2 = "⌮", T2 = "⌒", R2 = "⌓", D2 = "∝", M2 = "∝", I2 = "∷", N2 = "∝", O2 = "≾", L2 = "⊰", F2 = "𝒫", q2 = "𝓅", P2 = "Ψ", B2 = "ψ", $2 = " ", z2 = "𝔔", U2 = "𝔮", H2 = "⨌", j2 = "𝕢", V2 = "ℚ", K2 = "⁗", G2 = "𝒬", Z2 = "𝓆", W2 = "ℍ", J2 = "⨖", Y2 = "?", X2 = "≟", Q2 = '"', eB = '"', tB = "⇛", nB = "∽̱", sB = "Ŕ", rB = "ŕ", oB = "√", iB = "⦳", cB = "⟩", aB = "⟫", lB = "⦒", uB = "⦥", fB = "⟩", hB = "»", dB = "⥵", pB = "⇥", gB = "⤠", mB = "⤳", _B = "→", bB = "↠", vB = "⇒", xB = "⤞", yB = "↪", kB = "↬", EB = "⥅", wB = "⥴", CB = "⤖", AB = "↣", SB = "↝", TB = "⤚", RB = "⤜", DB = "∶", MB = "ℚ", IB = "⤍", NB = "⤏", OB = "⤐", LB = "❳", FB = "}", qB = "]", PB = "⦌", BB = "⦎", $B = "⦐", zB = "Ř", UB = "ř", HB = "Ŗ", jB = "ŗ", VB = "⌉", KB = "}", GB = "Р", ZB = "р", WB = "⤷", JB = "⥩", YB = "”", XB = "”", QB = "↳", e$ = "ℜ", t$ = "ℛ", n$ = "ℜ", s$ = "ℝ", r$ = "ℜ", o$ = "▭", i$ = "®", c$ = "®", a$ = "∋", l$ = "⇋", u$ = "⥯", f$ = "⥽", h$ = "⌋", d$ = "𝔯", p$ = "ℜ", g$ = "⥤", m$ = "⇁", _$ = "⇀", b$ = "⥬", v$ = "Ρ", x$ = "ρ", y$ = "ϱ", k$ = "⟩", E$ = "⇥", w$ = "→", C$ = "→", A$ = "⇒", S$ = "⇄", T$ = "↣", R$ = "⌉", D$ = "⟧", M$ = "⥝", I$ = "⥕", N$ = "⇂", O$ = "⌋", L$ = "⇁", F$ = "⇀", q$ = "⇄", P$ = "⇌", B$ = "⇉", $$ = "↝", z$ = "↦", U$ = "⊢", H$ = "⥛", j$ = "⋌", V$ = "⧐", K$ = "⊳", G$ = "⊵", Z$ = "⥏", W$ = "⥜", J$ = "⥔", Y$ = "↾", X$ = "⥓", Q$ = "⇀", ez = "˚", tz = "≓", nz = "⇄", sz = "⇌", rz = "‏", oz = "⎱", iz = "⎱", cz = "⫮", az = "⟭", lz = "⇾", uz = "⟧", fz = "⦆", hz = "𝕣", dz = "ℝ", pz = "⨮", gz = "⨵", mz = "⥰", _z = ")", bz = "⦔", vz = "⨒", xz = "⇉", yz = "⇛", kz = "›", Ez = "𝓇", wz = "ℛ", Cz = "↱", Az = "↱", Sz = "]", Tz = "’", Rz = "’", Dz = "⋌", Mz = "⋊", Iz = "▹", Nz = "⊵", Oz = "▸", Lz = "⧎", Fz = "⧴", qz = "⥨", Pz = "℞", Bz = "Ś", $z = "ś", zz = "‚", Uz = "⪸", Hz = "Š", jz = "š", Vz = "⪼", Kz = "≻", Gz = "≽", Zz = "⪰", Wz = "⪴", Jz = "Ş", Yz = "ş", Xz = "Ŝ", Qz = "ŝ", e3 = "⪺", t3 = "⪶", n3 = "⋩", s3 = "⨓", r3 = "≿", o3 = "С", i3 = "с", c3 = "⊡", a3 = "⋅", l3 = "⩦", u3 = "⤥", f3 = "↘", h3 = "⇘", d3 = "↘", p3 = "§", g3 = ";", m3 = "⤩", _3 = "∖", b3 = "∖", v3 = "✶", x3 = "𝔖", y3 = "𝔰", k3 = "⌢", E3 = "♯", w3 = "Щ", C3 = "щ", A3 = "Ш", S3 = "ш", T3 = "↓", R3 = "←", D3 = "∣", M3 = "∥", I3 = "→", N3 = "↑", O3 = "­", L3 = "Σ", F3 = "σ", q3 = "ς", P3 = "ς", B3 = "∼", $3 = "⩪", z3 = "≃", U3 = "≃", H3 = "⪞", j3 = "⪠", V3 = "⪝", K3 = "⪟", G3 = "≆", Z3 = "⨤", W3 = "⥲", J3 = "←", Y3 = "∘", X3 = "∖", Q3 = "⨳", eU = "⧤", tU = "∣", nU = "⌣", sU = "⪪", rU = "⪬", oU = "⪬︀", iU = "Ь", cU = "ь", aU = "⌿", lU = "⧄", uU = "/", fU = "𝕊", hU = "𝕤", dU = "♠", pU = "♠", gU = "∥", mU = "⊓", _U = "⊓︀", bU = "⊔", vU = "⊔︀", xU = "√", yU = "⊏", kU = "⊑", EU = "⊏", wU = "⊑", CU = "⊐", AU = "⊒", SU = "⊐", TU = "⊒", RU = "□", DU = "□", MU = "⊓", IU = "⊏", NU = "⊑", OU = "⊐", LU = "⊒", FU = "⊔", qU = "▪", PU = "□", BU = "▪", $U = "→", zU = "𝒮", UU = "𝓈", HU = "∖", jU = "⌣", VU = "⋆", KU = "⋆", GU = "☆", ZU = "★", WU = "ϵ", JU = "ϕ", YU = "¯", XU = "⊂", QU = "⋐", eH = "⪽", tH = "⫅", nH = "⊆", sH = "⫃", rH = "⫁", oH = "⫋", iH = "⊊", cH = "⪿", aH = "⥹", lH = "⊂", uH = "⋐", fH = "⊆", hH = "⫅", dH = "⊆", pH = "⊊", gH = "⫋", mH = "⫇", _H = "⫕", bH = "⫓", vH = "⪸", xH = "≻", yH = "≽", kH = "≻", EH = "⪰", wH = "≽", CH = "≿", AH = "⪰", SH = "⪺", TH = "⪶", RH = "⋩", DH = "≿", MH = "∋", IH = "∑", NH = "∑", OH = "♪", LH = "¹", FH = "²", qH = "³", PH = "⊃", BH = "⋑", $H = "⪾", zH = "⫘", UH = "⫆", HH = "⊇", jH = "⫄", VH = "⊃", KH = "⊇", GH = "⟉", ZH = "⫗", WH = "⥻", JH = "⫂", YH = "⫌", XH = "⊋", QH = "⫀", e6 = "⊃", t6 = "⋑", n6 = "⊇", s6 = "⫆", r6 = "⊋", o6 = "⫌", i6 = "⫈", c6 = "⫔", a6 = "⫖", l6 = "⤦", u6 = "↙", f6 = "⇙", h6 = "↙", d6 = "⤪", p6 = "ß", g6 = "	", m6 = "⌖", _6 = "Τ", b6 = "τ", v6 = "⎴", x6 = "Ť", y6 = "ť", k6 = "Ţ", E6 = "ţ", w6 = "Т", C6 = "т", A6 = "⃛", S6 = "⌕", T6 = "𝔗", R6 = "𝔱", D6 = "∴", M6 = "∴", I6 = "∴", N6 = "Θ", O6 = "θ", L6 = "ϑ", F6 = "ϑ", q6 = "≈", P6 = "∼", B6 = "  ", $6 = " ", z6 = " ", U6 = "≈", H6 = "∼", j6 = "Þ", V6 = "þ", K6 = "˜", G6 = "∼", Z6 = "≃", W6 = "≅", J6 = "≈", Y6 = "⨱", X6 = "⊠", Q6 = "×", e5 = "⨰", t5 = "∭", n5 = "⤨", s5 = "⌶", r5 = "⫱", o5 = "⊤", i5 = "𝕋", c5 = "𝕥", a5 = "⫚", l5 = "⤩", u5 = "‴", f5 = "™", h5 = "™", d5 = "▵", p5 = "▿", g5 = "◃", m5 = "⊴", _5 = "≜", b5 = "▹", v5 = "⊵", x5 = "◬", y5 = "≜", k5 = "⨺", E5 = "⃛", w5 = "⨹", C5 = "⧍", A5 = "⨻", S5 = "⏢", T5 = "𝒯", R5 = "𝓉", D5 = "Ц", M5 = "ц", I5 = "Ћ", N5 = "ћ", O5 = "Ŧ", L5 = "ŧ", F5 = "≬", q5 = "↞", P5 = "↠", B5 = "Ú", $5 = "ú", z5 = "↑", U5 = "↟", H5 = "⇑", j5 = "⥉", V5 = "Ў", K5 = "ў", G5 = "Ŭ", Z5 = "ŭ", W5 = "Û", J5 = "û", Y5 = "У", X5 = "у", Q5 = "⇅", e8 = "Ű", t8 = "ű", n8 = "⥮", s8 = "⥾", r8 = "𝔘", o8 = "𝔲", i8 = "Ù", c8 = "ù", a8 = "⥣", l8 = "↿", u8 = "↾", f8 = "▀", h8 = "⌜", d8 = "⌜", p8 = "⌏", g8 = "◸", m8 = "Ū", _8 = "ū", b8 = "¨", v8 = "_", x8 = "⏟", y8 = "⎵", k8 = "⏝", E8 = "⋃", w8 = "⊎", C8 = "Ų", A8 = "ų", S8 = "𝕌", T8 = "𝕦", R8 = "⤒", D8 = "↑", M8 = "↑", I8 = "⇑", N8 = "⇅", O8 = "↕", L8 = "↕", F8 = "⇕", q8 = "⥮", P8 = "↿", B8 = "↾", $8 = "⊎", z8 = "↖", U8 = "↗", H8 = "υ", j8 = "ϒ", V8 = "ϒ", K8 = "Υ", G8 = "υ", Z8 = "↥", W8 = "⊥", J8 = "⇈", Y8 = "⌝", X8 = "⌝", Q8 = "⌎", e4 = "Ů", t4 = "ů", n4 = "◹", s4 = "𝒰", r4 = "𝓊", o4 = "⋰", i4 = "Ũ", c4 = "ũ", a4 = "▵", l4 = "▴", u4 = "⇈", f4 = "Ü", h4 = "ü", d4 = "⦧", p4 = "⦜", g4 = "ϵ", m4 = "ϰ", _4 = "∅", b4 = "ϕ", v4 = "ϖ", x4 = "∝", y4 = "↕", k4 = "⇕", E4 = "ϱ", w4 = "ς", C4 = "⊊︀", A4 = "⫋︀", S4 = "⊋︀", T4 = "⫌︀", R4 = "ϑ", D4 = "⊲", M4 = "⊳", I4 = "⫨", N4 = "⫫", O4 = "⫩", L4 = "В", F4 = "в", q4 = "⊢", P4 = "⊨", B4 = "⊩", $4 = "⊫", z4 = "⫦", U4 = "⊻", H4 = "∨", j4 = "⋁", V4 = "≚", K4 = "⋮", G4 = "|", Z4 = "‖", W4 = "|", J4 = "‖", Y4 = "∣", X4 = "|", Q4 = "❘", e9 = "≀", t9 = " ", n9 = "𝔙", s9 = "𝔳", r9 = "⊲", o9 = "⊂⃒", i9 = "⊃⃒", c9 = "𝕍", a9 = "𝕧", l9 = "∝", u9 = "⊳", f9 = "𝒱", h9 = "𝓋", d9 = "⫋︀", p9 = "⊊︀", g9 = "⫌︀", m9 = "⊋︀", _9 = "⊪", b9 = "⦚", v9 = "Ŵ", x9 = "ŵ", y9 = "⩟", k9 = "∧", E9 = "⋀", w9 = "≙", C9 = "℘", A9 = "𝔚", S9 = "𝔴", T9 = "𝕎", R9 = "𝕨", D9 = "℘", M9 = "≀", I9 = "≀", N9 = "𝒲", O9 = "𝓌", L9 = "⋂", F9 = "◯", q9 = "⋃", P9 = "▽", B9 = "𝔛", $9 = "𝔵", z9 = "⟷", U9 = "⟺", H9 = "Ξ", j9 = "ξ", V9 = "⟵", K9 = "⟸", G9 = "⟼", Z9 = "⋻", W9 = "⨀", J9 = "𝕏", Y9 = "𝕩", X9 = "⨁", Q9 = "⨂", ej = "⟶", tj = "⟹", nj = "𝒳", sj = "𝓍", rj = "⨆", oj = "⨄", ij = "△", cj = "⋁", aj = "⋀", lj = "Ý", uj = "ý", fj = "Я", hj = "я", dj = "Ŷ", pj = "ŷ", gj = "Ы", mj = "ы", _j = "¥", bj = "𝔜", vj = "𝔶", xj = "Ї", yj = "ї", kj = "𝕐", Ej = "𝕪", wj = "𝒴", Cj = "𝓎", Aj = "Ю", Sj = "ю", Tj = "ÿ", Rj = "Ÿ", Dj = "Ź", Mj = "ź", Ij = "Ž", Nj = "ž", Oj = "З", Lj = "з", Fj = "Ż", qj = "ż", Pj = "ℨ", Bj = "​", $j = "Ζ", zj = "ζ", Uj = "𝔷", Hj = "ℨ", jj = "Ж", Vj = "ж", Kj = "⇝", Gj = "𝕫", Zj = "ℤ", Wj = "𝒵", Jj = "𝓏", Yj = "‍", Xj = "‌", Qj = {
  Aacute: Fp,
  aacute: qp,
  Abreve: Pp,
  abreve: Bp,
  ac: $p,
  acd: zp,
  acE: Up,
  Acirc: Hp,
  acirc: jp,
  acute: Vp,
  Acy: Kp,
  acy: Gp,
  AElig: Zp,
  aelig: Wp,
  af: Jp,
  Afr: Yp,
  afr: Xp,
  Agrave: Qp,
  agrave: eg,
  alefsym: tg,
  aleph: ng,
  Alpha: sg,
  alpha: rg,
  Amacr: og,
  amacr: ig,
  amalg: cg,
  amp: ag,
  AMP: lg,
  andand: ug,
  And: fg,
  and: hg,
  andd: dg,
  andslope: pg,
  andv: gg,
  ang: mg,
  ange: _g,
  angle: bg,
  angmsdaa: vg,
  angmsdab: xg,
  angmsdac: yg,
  angmsdad: kg,
  angmsdae: Eg,
  angmsdaf: wg,
  angmsdag: Cg,
  angmsdah: Ag,
  angmsd: Sg,
  angrt: Tg,
  angrtvb: Rg,
  angrtvbd: Dg,
  angsph: Mg,
  angst: Ig,
  angzarr: Ng,
  Aogon: Og,
  aogon: Lg,
  Aopf: Fg,
  aopf: qg,
  apacir: Pg,
  ap: Bg,
  apE: $g,
  ape: zg,
  apid: Ug,
  apos: Hg,
  ApplyFunction: jg,
  approx: Vg,
  approxeq: Kg,
  Aring: Gg,
  aring: Zg,
  Ascr: Wg,
  ascr: Jg,
  Assign: Yg,
  ast: Xg,
  asymp: Qg,
  asympeq: em,
  Atilde: tm,
  atilde: nm,
  Auml: sm,
  auml: rm,
  awconint: om,
  awint: im,
  backcong: cm,
  backepsilon: am,
  backprime: lm,
  backsim: um,
  backsimeq: fm,
  Backslash: hm,
  Barv: dm,
  barvee: pm,
  barwed: gm,
  Barwed: mm,
  barwedge: _m,
  bbrk: bm,
  bbrktbrk: vm,
  bcong: xm,
  Bcy: ym,
  bcy: km,
  bdquo: Em,
  becaus: wm,
  because: Cm,
  Because: Am,
  bemptyv: Sm,
  bepsi: Tm,
  bernou: Rm,
  Bernoullis: Dm,
  Beta: Mm,
  beta: Im,
  beth: Nm,
  between: Om,
  Bfr: Lm,
  bfr: Fm,
  bigcap: qm,
  bigcirc: Pm,
  bigcup: Bm,
  bigodot: $m,
  bigoplus: zm,
  bigotimes: Um,
  bigsqcup: Hm,
  bigstar: jm,
  bigtriangledown: Vm,
  bigtriangleup: Km,
  biguplus: Gm,
  bigvee: Zm,
  bigwedge: Wm,
  bkarow: Jm,
  blacklozenge: Ym,
  blacksquare: Xm,
  blacktriangle: Qm,
  blacktriangledown: e_,
  blacktriangleleft: t_,
  blacktriangleright: n_,
  blank: s_,
  blk12: r_,
  blk14: o_,
  blk34: i_,
  block: c_,
  bne: a_,
  bnequiv: l_,
  bNot: u_,
  bnot: f_,
  Bopf: h_,
  bopf: d_,
  bot: p_,
  bottom: g_,
  bowtie: m_,
  boxbox: __,
  boxdl: b_,
  boxdL: v_,
  boxDl: x_,
  boxDL: y_,
  boxdr: k_,
  boxdR: E_,
  boxDr: w_,
  boxDR: C_,
  boxh: A_,
  boxH: S_,
  boxhd: T_,
  boxHd: R_,
  boxhD: D_,
  boxHD: M_,
  boxhu: I_,
  boxHu: N_,
  boxhU: O_,
  boxHU: L_,
  boxminus: F_,
  boxplus: q_,
  boxtimes: P_,
  boxul: B_,
  boxuL: $_,
  boxUl: z_,
  boxUL: U_,
  boxur: H_,
  boxuR: j_,
  boxUr: V_,
  boxUR: K_,
  boxv: G_,
  boxV: Z_,
  boxvh: W_,
  boxvH: J_,
  boxVh: Y_,
  boxVH: X_,
  boxvl: Q_,
  boxvL: e0,
  boxVl: t0,
  boxVL: n0,
  boxvr: s0,
  boxvR: r0,
  boxVr: o0,
  boxVR: i0,
  bprime: c0,
  breve: a0,
  Breve: l0,
  brvbar: u0,
  bscr: f0,
  Bscr: h0,
  bsemi: d0,
  bsim: p0,
  bsime: g0,
  bsolb: m0,
  bsol: _0,
  bsolhsub: b0,
  bull: v0,
  bullet: x0,
  bump: y0,
  bumpE: k0,
  bumpe: E0,
  Bumpeq: w0,
  bumpeq: C0,
  Cacute: A0,
  cacute: S0,
  capand: T0,
  capbrcup: R0,
  capcap: D0,
  cap: M0,
  Cap: I0,
  capcup: N0,
  capdot: O0,
  CapitalDifferentialD: L0,
  caps: F0,
  caret: q0,
  caron: P0,
  Cayleys: B0,
  ccaps: $0,
  Ccaron: z0,
  ccaron: U0,
  Ccedil: H0,
  ccedil: j0,
  Ccirc: V0,
  ccirc: K0,
  Cconint: G0,
  ccups: Z0,
  ccupssm: W0,
  Cdot: J0,
  cdot: Y0,
  cedil: X0,
  Cedilla: Q0,
  cemptyv: eb,
  cent: tb,
  centerdot: nb,
  CenterDot: sb,
  cfr: rb,
  Cfr: ob,
  CHcy: ib,
  chcy: cb,
  check: ab,
  checkmark: lb,
  Chi: ub,
  chi: fb,
  circ: hb,
  circeq: db,
  circlearrowleft: pb,
  circlearrowright: gb,
  circledast: mb,
  circledcirc: _b,
  circleddash: bb,
  CircleDot: vb,
  circledR: xb,
  circledS: yb,
  CircleMinus: kb,
  CirclePlus: Eb,
  CircleTimes: wb,
  cir: Cb,
  cirE: Ab,
  cire: Sb,
  cirfnint: Tb,
  cirmid: Rb,
  cirscir: Db,
  ClockwiseContourIntegral: Mb,
  CloseCurlyDoubleQuote: Ib,
  CloseCurlyQuote: Nb,
  clubs: Ob,
  clubsuit: Lb,
  colon: Fb,
  Colon: qb,
  Colone: Pb,
  colone: Bb,
  coloneq: $b,
  comma: zb,
  commat: Ub,
  comp: Hb,
  compfn: jb,
  complement: Vb,
  complexes: Kb,
  cong: Gb,
  congdot: Zb,
  Congruent: Wb,
  conint: Jb,
  Conint: Yb,
  ContourIntegral: Xb,
  copf: Qb,
  Copf: ev,
  coprod: tv,
  Coproduct: nv,
  copy: sv,
  COPY: rv,
  copysr: ov,
  CounterClockwiseContourIntegral: iv,
  crarr: cv,
  cross: av,
  Cross: lv,
  Cscr: uv,
  cscr: fv,
  csub: hv,
  csube: dv,
  csup: pv,
  csupe: gv,
  ctdot: mv,
  cudarrl: _v,
  cudarrr: bv,
  cuepr: vv,
  cuesc: xv,
  cularr: yv,
  cularrp: kv,
  cupbrcap: Ev,
  cupcap: wv,
  CupCap: Cv,
  cup: Av,
  Cup: Sv,
  cupcup: Tv,
  cupdot: Rv,
  cupor: Dv,
  cups: Mv,
  curarr: Iv,
  curarrm: Nv,
  curlyeqprec: Ov,
  curlyeqsucc: Lv,
  curlyvee: Fv,
  curlywedge: qv,
  curren: Pv,
  curvearrowleft: Bv,
  curvearrowright: $v,
  cuvee: zv,
  cuwed: Uv,
  cwconint: Hv,
  cwint: jv,
  cylcty: Vv,
  dagger: Kv,
  Dagger: Gv,
  daleth: Zv,
  darr: Wv,
  Darr: Jv,
  dArr: Yv,
  dash: Xv,
  Dashv: Qv,
  dashv: ex,
  dbkarow: tx,
  dblac: nx,
  Dcaron: sx,
  dcaron: rx,
  Dcy: ox,
  dcy: ix,
  ddagger: cx,
  ddarr: ax,
  DD: lx,
  dd: ux,
  DDotrahd: fx,
  ddotseq: hx,
  deg: dx,
  Del: px,
  Delta: gx,
  delta: mx,
  demptyv: _x,
  dfisht: bx,
  Dfr: vx,
  dfr: xx,
  dHar: yx,
  dharl: kx,
  dharr: Ex,
  DiacriticalAcute: wx,
  DiacriticalDot: Cx,
  DiacriticalDoubleAcute: Ax,
  DiacriticalGrave: Sx,
  DiacriticalTilde: Tx,
  diam: Rx,
  diamond: Dx,
  Diamond: Mx,
  diamondsuit: Ix,
  diams: Nx,
  die: Ox,
  DifferentialD: Lx,
  digamma: Fx,
  disin: qx,
  div: Px,
  divide: Bx,
  divideontimes: $x,
  divonx: zx,
  DJcy: Ux,
  djcy: Hx,
  dlcorn: jx,
  dlcrop: Vx,
  dollar: Kx,
  Dopf: Gx,
  dopf: Zx,
  Dot: Wx,
  dot: Jx,
  DotDot: Yx,
  doteq: Xx,
  doteqdot: Qx,
  DotEqual: ey,
  dotminus: ty,
  dotplus: ny,
  dotsquare: sy,
  doublebarwedge: ry,
  DoubleContourIntegral: oy,
  DoubleDot: iy,
  DoubleDownArrow: cy,
  DoubleLeftArrow: ay,
  DoubleLeftRightArrow: ly,
  DoubleLeftTee: uy,
  DoubleLongLeftArrow: fy,
  DoubleLongLeftRightArrow: hy,
  DoubleLongRightArrow: dy,
  DoubleRightArrow: py,
  DoubleRightTee: gy,
  DoubleUpArrow: my,
  DoubleUpDownArrow: _y,
  DoubleVerticalBar: by,
  DownArrowBar: vy,
  downarrow: xy,
  DownArrow: yy,
  Downarrow: ky,
  DownArrowUpArrow: Ey,
  DownBreve: wy,
  downdownarrows: Cy,
  downharpoonleft: Ay,
  downharpoonright: Sy,
  DownLeftRightVector: Ty,
  DownLeftTeeVector: Ry,
  DownLeftVectorBar: Dy,
  DownLeftVector: My,
  DownRightTeeVector: Iy,
  DownRightVectorBar: Ny,
  DownRightVector: Oy,
  DownTeeArrow: Ly,
  DownTee: Fy,
  drbkarow: qy,
  drcorn: Py,
  drcrop: By,
  Dscr: $y,
  dscr: zy,
  DScy: Uy,
  dscy: Hy,
  dsol: jy,
  Dstrok: Vy,
  dstrok: Ky,
  dtdot: Gy,
  dtri: Zy,
  dtrif: Wy,
  duarr: Jy,
  duhar: Yy,
  dwangle: Xy,
  DZcy: Qy,
  dzcy: ek,
  dzigrarr: tk,
  Eacute: nk,
  eacute: sk,
  easter: rk,
  Ecaron: ok,
  ecaron: ik,
  Ecirc: ck,
  ecirc: ak,
  ecir: lk,
  ecolon: uk,
  Ecy: fk,
  ecy: hk,
  eDDot: dk,
  Edot: pk,
  edot: gk,
  eDot: mk,
  ee: _k,
  efDot: bk,
  Efr: vk,
  efr: xk,
  eg: yk,
  Egrave: kk,
  egrave: Ek,
  egs: wk,
  egsdot: Ck,
  el: Ak,
  Element: Sk,
  elinters: Tk,
  ell: Rk,
  els: Dk,
  elsdot: Mk,
  Emacr: Ik,
  emacr: Nk,
  empty: Ok,
  emptyset: Lk,
  EmptySmallSquare: Fk,
  emptyv: qk,
  EmptyVerySmallSquare: Pk,
  emsp13: Bk,
  emsp14: $k,
  emsp: zk,
  ENG: Uk,
  eng: Hk,
  ensp: jk,
  Eogon: Vk,
  eogon: Kk,
  Eopf: Gk,
  eopf: Zk,
  epar: Wk,
  eparsl: Jk,
  eplus: Yk,
  epsi: Xk,
  Epsilon: Qk,
  epsilon: eE,
  epsiv: tE,
  eqcirc: nE,
  eqcolon: sE,
  eqsim: rE,
  eqslantgtr: oE,
  eqslantless: iE,
  Equal: cE,
  equals: aE,
  EqualTilde: lE,
  equest: uE,
  Equilibrium: fE,
  equiv: hE,
  equivDD: dE,
  eqvparsl: pE,
  erarr: gE,
  erDot: mE,
  escr: _E,
  Escr: bE,
  esdot: vE,
  Esim: xE,
  esim: yE,
  Eta: kE,
  eta: EE,
  ETH: wE,
  eth: CE,
  Euml: AE,
  euml: SE,
  euro: TE,
  excl: RE,
  exist: DE,
  Exists: ME,
  expectation: IE,
  exponentiale: NE,
  ExponentialE: OE,
  fallingdotseq: LE,
  Fcy: FE,
  fcy: qE,
  female: PE,
  ffilig: BE,
  fflig: $E,
  ffllig: zE,
  Ffr: UE,
  ffr: HE,
  filig: jE,
  FilledSmallSquare: VE,
  FilledVerySmallSquare: KE,
  fjlig: GE,
  flat: ZE,
  fllig: WE,
  fltns: JE,
  fnof: YE,
  Fopf: XE,
  fopf: QE,
  forall: e1,
  ForAll: t1,
  fork: n1,
  forkv: s1,
  Fouriertrf: r1,
  fpartint: o1,
  frac12: i1,
  frac13: c1,
  frac14: a1,
  frac15: l1,
  frac16: u1,
  frac18: f1,
  frac23: h1,
  frac25: d1,
  frac34: p1,
  frac35: g1,
  frac38: m1,
  frac45: _1,
  frac56: b1,
  frac58: v1,
  frac78: x1,
  frasl: y1,
  frown: k1,
  fscr: E1,
  Fscr: w1,
  gacute: C1,
  Gamma: A1,
  gamma: S1,
  Gammad: T1,
  gammad: R1,
  gap: D1,
  Gbreve: M1,
  gbreve: I1,
  Gcedil: N1,
  Gcirc: O1,
  gcirc: L1,
  Gcy: F1,
  gcy: q1,
  Gdot: P1,
  gdot: B1,
  ge: $1,
  gE: z1,
  gEl: U1,
  gel: H1,
  geq: j1,
  geqq: V1,
  geqslant: K1,
  gescc: G1,
  ges: Z1,
  gesdot: W1,
  gesdoto: J1,
  gesdotol: Y1,
  gesl: X1,
  gesles: Q1,
  Gfr: ew,
  gfr: tw,
  gg: nw,
  Gg: sw,
  ggg: rw,
  gimel: ow,
  GJcy: iw,
  gjcy: cw,
  gla: aw,
  gl: lw,
  glE: uw,
  glj: fw,
  gnap: hw,
  gnapprox: dw,
  gne: pw,
  gnE: gw,
  gneq: mw,
  gneqq: _w,
  gnsim: bw,
  Gopf: vw,
  gopf: xw,
  grave: yw,
  GreaterEqual: kw,
  GreaterEqualLess: Ew,
  GreaterFullEqual: ww,
  GreaterGreater: Cw,
  GreaterLess: Aw,
  GreaterSlantEqual: Sw,
  GreaterTilde: Tw,
  Gscr: Rw,
  gscr: Dw,
  gsim: Mw,
  gsime: Iw,
  gsiml: Nw,
  gtcc: Ow,
  gtcir: Lw,
  gt: Fw,
  GT: qw,
  Gt: Pw,
  gtdot: Bw,
  gtlPar: $w,
  gtquest: zw,
  gtrapprox: Uw,
  gtrarr: Hw,
  gtrdot: jw,
  gtreqless: Vw,
  gtreqqless: Kw,
  gtrless: Gw,
  gtrsim: Zw,
  gvertneqq: Ww,
  gvnE: Jw,
  Hacek: Yw,
  hairsp: Xw,
  half: Qw,
  hamilt: eC,
  HARDcy: tC,
  hardcy: nC,
  harrcir: sC,
  harr: rC,
  hArr: oC,
  harrw: iC,
  Hat: cC,
  hbar: aC,
  Hcirc: lC,
  hcirc: uC,
  hearts: fC,
  heartsuit: hC,
  hellip: dC,
  hercon: pC,
  hfr: gC,
  Hfr: mC,
  HilbertSpace: _C,
  hksearow: bC,
  hkswarow: vC,
  hoarr: xC,
  homtht: yC,
  hookleftarrow: kC,
  hookrightarrow: EC,
  hopf: wC,
  Hopf: CC,
  horbar: AC,
  HorizontalLine: SC,
  hscr: TC,
  Hscr: RC,
  hslash: DC,
  Hstrok: MC,
  hstrok: IC,
  HumpDownHump: NC,
  HumpEqual: OC,
  hybull: LC,
  hyphen: FC,
  Iacute: qC,
  iacute: PC,
  ic: BC,
  Icirc: $C,
  icirc: zC,
  Icy: UC,
  icy: HC,
  Idot: jC,
  IEcy: VC,
  iecy: KC,
  iexcl: GC,
  iff: ZC,
  ifr: WC,
  Ifr: JC,
  Igrave: YC,
  igrave: XC,
  ii: QC,
  iiiint: eA,
  iiint: tA,
  iinfin: nA,
  iiota: sA,
  IJlig: rA,
  ijlig: oA,
  Imacr: iA,
  imacr: cA,
  image: aA,
  ImaginaryI: lA,
  imagline: uA,
  imagpart: fA,
  imath: hA,
  Im: dA,
  imof: pA,
  imped: gA,
  Implies: mA,
  incare: _A,
  in: "∈",
  infin: bA,
  infintie: vA,
  inodot: xA,
  intcal: yA,
  int: kA,
  Int: EA,
  integers: wA,
  Integral: CA,
  intercal: AA,
  Intersection: SA,
  intlarhk: TA,
  intprod: RA,
  InvisibleComma: DA,
  InvisibleTimes: MA,
  IOcy: IA,
  iocy: NA,
  Iogon: OA,
  iogon: LA,
  Iopf: FA,
  iopf: qA,
  Iota: PA,
  iota: BA,
  iprod: $A,
  iquest: zA,
  iscr: UA,
  Iscr: HA,
  isin: jA,
  isindot: VA,
  isinE: KA,
  isins: GA,
  isinsv: ZA,
  isinv: WA,
  it: JA,
  Itilde: YA,
  itilde: XA,
  Iukcy: QA,
  iukcy: eS,
  Iuml: tS,
  iuml: nS,
  Jcirc: sS,
  jcirc: rS,
  Jcy: oS,
  jcy: iS,
  Jfr: cS,
  jfr: aS,
  jmath: lS,
  Jopf: uS,
  jopf: fS,
  Jscr: hS,
  jscr: dS,
  Jsercy: pS,
  jsercy: gS,
  Jukcy: mS,
  jukcy: _S,
  Kappa: bS,
  kappa: vS,
  kappav: xS,
  Kcedil: yS,
  kcedil: kS,
  Kcy: ES,
  kcy: wS,
  Kfr: CS,
  kfr: AS,
  kgreen: SS,
  KHcy: TS,
  khcy: RS,
  KJcy: DS,
  kjcy: MS,
  Kopf: IS,
  kopf: NS,
  Kscr: OS,
  kscr: LS,
  lAarr: FS,
  Lacute: qS,
  lacute: PS,
  laemptyv: BS,
  lagran: $S,
  Lambda: zS,
  lambda: US,
  lang: HS,
  Lang: jS,
  langd: VS,
  langle: KS,
  lap: GS,
  Laplacetrf: ZS,
  laquo: WS,
  larrb: JS,
  larrbfs: YS,
  larr: XS,
  Larr: QS,
  lArr: eT,
  larrfs: tT,
  larrhk: nT,
  larrlp: sT,
  larrpl: rT,
  larrsim: oT,
  larrtl: iT,
  latail: cT,
  lAtail: aT,
  lat: lT,
  late: uT,
  lates: fT,
  lbarr: hT,
  lBarr: dT,
  lbbrk: pT,
  lbrace: gT,
  lbrack: mT,
  lbrke: _T,
  lbrksld: bT,
  lbrkslu: vT,
  Lcaron: xT,
  lcaron: yT,
  Lcedil: kT,
  lcedil: ET,
  lceil: wT,
  lcub: CT,
  Lcy: AT,
  lcy: ST,
  ldca: TT,
  ldquo: RT,
  ldquor: DT,
  ldrdhar: MT,
  ldrushar: IT,
  ldsh: NT,
  le: OT,
  lE: LT,
  LeftAngleBracket: FT,
  LeftArrowBar: qT,
  leftarrow: PT,
  LeftArrow: BT,
  Leftarrow: $T,
  LeftArrowRightArrow: zT,
  leftarrowtail: UT,
  LeftCeiling: HT,
  LeftDoubleBracket: jT,
  LeftDownTeeVector: VT,
  LeftDownVectorBar: KT,
  LeftDownVector: GT,
  LeftFloor: ZT,
  leftharpoondown: WT,
  leftharpoonup: JT,
  leftleftarrows: YT,
  leftrightarrow: XT,
  LeftRightArrow: QT,
  Leftrightarrow: eR,
  leftrightarrows: tR,
  leftrightharpoons: nR,
  leftrightsquigarrow: sR,
  LeftRightVector: rR,
  LeftTeeArrow: oR,
  LeftTee: iR,
  LeftTeeVector: cR,
  leftthreetimes: aR,
  LeftTriangleBar: lR,
  LeftTriangle: uR,
  LeftTriangleEqual: fR,
  LeftUpDownVector: hR,
  LeftUpTeeVector: dR,
  LeftUpVectorBar: pR,
  LeftUpVector: gR,
  LeftVectorBar: mR,
  LeftVector: _R,
  lEg: bR,
  leg: vR,
  leq: xR,
  leqq: yR,
  leqslant: kR,
  lescc: ER,
  les: wR,
  lesdot: CR,
  lesdoto: AR,
  lesdotor: SR,
  lesg: TR,
  lesges: RR,
  lessapprox: DR,
  lessdot: MR,
  lesseqgtr: IR,
  lesseqqgtr: NR,
  LessEqualGreater: OR,
  LessFullEqual: LR,
  LessGreater: FR,
  lessgtr: qR,
  LessLess: PR,
  lesssim: BR,
  LessSlantEqual: $R,
  LessTilde: zR,
  lfisht: UR,
  lfloor: HR,
  Lfr: jR,
  lfr: VR,
  lg: KR,
  lgE: GR,
  lHar: ZR,
  lhard: WR,
  lharu: JR,
  lharul: YR,
  lhblk: XR,
  LJcy: QR,
  ljcy: eD,
  llarr: tD,
  ll: nD,
  Ll: sD,
  llcorner: rD,
  Lleftarrow: oD,
  llhard: iD,
  lltri: cD,
  Lmidot: aD,
  lmidot: lD,
  lmoustache: uD,
  lmoust: fD,
  lnap: hD,
  lnapprox: dD,
  lne: pD,
  lnE: gD,
  lneq: mD,
  lneqq: _D,
  lnsim: bD,
  loang: vD,
  loarr: xD,
  lobrk: yD,
  longleftarrow: kD,
  LongLeftArrow: ED,
  Longleftarrow: wD,
  longleftrightarrow: CD,
  LongLeftRightArrow: AD,
  Longleftrightarrow: SD,
  longmapsto: TD,
  longrightarrow: RD,
  LongRightArrow: DD,
  Longrightarrow: MD,
  looparrowleft: ID,
  looparrowright: ND,
  lopar: OD,
  Lopf: LD,
  lopf: FD,
  loplus: qD,
  lotimes: PD,
  lowast: BD,
  lowbar: $D,
  LowerLeftArrow: zD,
  LowerRightArrow: UD,
  loz: HD,
  lozenge: jD,
  lozf: VD,
  lpar: KD,
  lparlt: GD,
  lrarr: ZD,
  lrcorner: WD,
  lrhar: JD,
  lrhard: YD,
  lrm: XD,
  lrtri: QD,
  lsaquo: eM,
  lscr: tM,
  Lscr: nM,
  lsh: sM,
  Lsh: rM,
  lsim: oM,
  lsime: iM,
  lsimg: cM,
  lsqb: aM,
  lsquo: lM,
  lsquor: uM,
  Lstrok: fM,
  lstrok: hM,
  ltcc: dM,
  ltcir: pM,
  lt: gM,
  LT: mM,
  Lt: _M,
  ltdot: bM,
  lthree: vM,
  ltimes: xM,
  ltlarr: yM,
  ltquest: kM,
  ltri: EM,
  ltrie: wM,
  ltrif: CM,
  ltrPar: AM,
  lurdshar: SM,
  luruhar: TM,
  lvertneqq: RM,
  lvnE: DM,
  macr: MM,
  male: IM,
  malt: NM,
  maltese: OM,
  Map: "⤅",
  map: LM,
  mapsto: FM,
  mapstodown: qM,
  mapstoleft: PM,
  mapstoup: BM,
  marker: $M,
  mcomma: zM,
  Mcy: UM,
  mcy: HM,
  mdash: jM,
  mDDot: VM,
  measuredangle: KM,
  MediumSpace: GM,
  Mellintrf: ZM,
  Mfr: WM,
  mfr: JM,
  mho: YM,
  micro: XM,
  midast: QM,
  midcir: eI,
  mid: tI,
  middot: nI,
  minusb: sI,
  minus: rI,
  minusd: oI,
  minusdu: iI,
  MinusPlus: cI,
  mlcp: aI,
  mldr: lI,
  mnplus: uI,
  models: fI,
  Mopf: hI,
  mopf: dI,
  mp: pI,
  mscr: gI,
  Mscr: mI,
  mstpos: _I,
  Mu: bI,
  mu: vI,
  multimap: xI,
  mumap: yI,
  nabla: kI,
  Nacute: EI,
  nacute: wI,
  nang: CI,
  nap: AI,
  napE: SI,
  napid: TI,
  napos: RI,
  napprox: DI,
  natural: MI,
  naturals: II,
  natur: NI,
  nbsp: OI,
  nbump: LI,
  nbumpe: FI,
  ncap: qI,
  Ncaron: PI,
  ncaron: BI,
  Ncedil: $I,
  ncedil: zI,
  ncong: UI,
  ncongdot: HI,
  ncup: jI,
  Ncy: VI,
  ncy: KI,
  ndash: GI,
  nearhk: ZI,
  nearr: WI,
  neArr: JI,
  nearrow: YI,
  ne: XI,
  nedot: QI,
  NegativeMediumSpace: eN,
  NegativeThickSpace: tN,
  NegativeThinSpace: nN,
  NegativeVeryThinSpace: sN,
  nequiv: rN,
  nesear: oN,
  nesim: iN,
  NestedGreaterGreater: cN,
  NestedLessLess: aN,
  NewLine: lN,
  nexist: uN,
  nexists: fN,
  Nfr: hN,
  nfr: dN,
  ngE: pN,
  nge: gN,
  ngeq: mN,
  ngeqq: _N,
  ngeqslant: bN,
  nges: vN,
  nGg: xN,
  ngsim: yN,
  nGt: kN,
  ngt: EN,
  ngtr: wN,
  nGtv: CN,
  nharr: AN,
  nhArr: SN,
  nhpar: TN,
  ni: RN,
  nis: DN,
  nisd: MN,
  niv: IN,
  NJcy: NN,
  njcy: ON,
  nlarr: LN,
  nlArr: FN,
  nldr: qN,
  nlE: PN,
  nle: BN,
  nleftarrow: $N,
  nLeftarrow: zN,
  nleftrightarrow: UN,
  nLeftrightarrow: HN,
  nleq: jN,
  nleqq: VN,
  nleqslant: KN,
  nles: GN,
  nless: ZN,
  nLl: WN,
  nlsim: JN,
  nLt: YN,
  nlt: XN,
  nltri: QN,
  nltrie: eO,
  nLtv: tO,
  nmid: nO,
  NoBreak: sO,
  NonBreakingSpace: rO,
  nopf: oO,
  Nopf: iO,
  Not: cO,
  not: aO,
  NotCongruent: lO,
  NotCupCap: uO,
  NotDoubleVerticalBar: fO,
  NotElement: hO,
  NotEqual: dO,
  NotEqualTilde: pO,
  NotExists: gO,
  NotGreater: mO,
  NotGreaterEqual: _O,
  NotGreaterFullEqual: bO,
  NotGreaterGreater: vO,
  NotGreaterLess: xO,
  NotGreaterSlantEqual: yO,
  NotGreaterTilde: kO,
  NotHumpDownHump: EO,
  NotHumpEqual: wO,
  notin: CO,
  notindot: AO,
  notinE: SO,
  notinva: TO,
  notinvb: RO,
  notinvc: DO,
  NotLeftTriangleBar: MO,
  NotLeftTriangle: IO,
  NotLeftTriangleEqual: NO,
  NotLess: OO,
  NotLessEqual: LO,
  NotLessGreater: FO,
  NotLessLess: qO,
  NotLessSlantEqual: PO,
  NotLessTilde: BO,
  NotNestedGreaterGreater: $O,
  NotNestedLessLess: zO,
  notni: UO,
  notniva: HO,
  notnivb: jO,
  notnivc: VO,
  NotPrecedes: KO,
  NotPrecedesEqual: GO,
  NotPrecedesSlantEqual: ZO,
  NotReverseElement: WO,
  NotRightTriangleBar: JO,
  NotRightTriangle: YO,
  NotRightTriangleEqual: XO,
  NotSquareSubset: QO,
  NotSquareSubsetEqual: eL,
  NotSquareSuperset: tL,
  NotSquareSupersetEqual: nL,
  NotSubset: sL,
  NotSubsetEqual: rL,
  NotSucceeds: oL,
  NotSucceedsEqual: iL,
  NotSucceedsSlantEqual: cL,
  NotSucceedsTilde: aL,
  NotSuperset: lL,
  NotSupersetEqual: uL,
  NotTilde: fL,
  NotTildeEqual: hL,
  NotTildeFullEqual: dL,
  NotTildeTilde: pL,
  NotVerticalBar: gL,
  nparallel: mL,
  npar: _L,
  nparsl: bL,
  npart: vL,
  npolint: xL,
  npr: yL,
  nprcue: kL,
  nprec: EL,
  npreceq: wL,
  npre: CL,
  nrarrc: AL,
  nrarr: SL,
  nrArr: TL,
  nrarrw: RL,
  nrightarrow: DL,
  nRightarrow: ML,
  nrtri: IL,
  nrtrie: NL,
  nsc: OL,
  nsccue: LL,
  nsce: FL,
  Nscr: qL,
  nscr: PL,
  nshortmid: BL,
  nshortparallel: $L,
  nsim: zL,
  nsime: UL,
  nsimeq: HL,
  nsmid: jL,
  nspar: VL,
  nsqsube: KL,
  nsqsupe: GL,
  nsub: ZL,
  nsubE: WL,
  nsube: JL,
  nsubset: YL,
  nsubseteq: XL,
  nsubseteqq: QL,
  nsucc: eF,
  nsucceq: tF,
  nsup: nF,
  nsupE: sF,
  nsupe: rF,
  nsupset: oF,
  nsupseteq: iF,
  nsupseteqq: cF,
  ntgl: aF,
  Ntilde: lF,
  ntilde: uF,
  ntlg: fF,
  ntriangleleft: hF,
  ntrianglelefteq: dF,
  ntriangleright: pF,
  ntrianglerighteq: gF,
  Nu: mF,
  nu: _F,
  num: bF,
  numero: vF,
  numsp: xF,
  nvap: yF,
  nvdash: kF,
  nvDash: EF,
  nVdash: wF,
  nVDash: CF,
  nvge: AF,
  nvgt: SF,
  nvHarr: TF,
  nvinfin: RF,
  nvlArr: DF,
  nvle: MF,
  nvlt: IF,
  nvltrie: NF,
  nvrArr: OF,
  nvrtrie: LF,
  nvsim: FF,
  nwarhk: qF,
  nwarr: PF,
  nwArr: BF,
  nwarrow: $F,
  nwnear: zF,
  Oacute: UF,
  oacute: HF,
  oast: jF,
  Ocirc: VF,
  ocirc: KF,
  ocir: GF,
  Ocy: ZF,
  ocy: WF,
  odash: JF,
  Odblac: YF,
  odblac: XF,
  odiv: QF,
  odot: eq,
  odsold: tq,
  OElig: nq,
  oelig: sq,
  ofcir: rq,
  Ofr: oq,
  ofr: iq,
  ogon: cq,
  Ograve: aq,
  ograve: lq,
  ogt: uq,
  ohbar: fq,
  ohm: hq,
  oint: dq,
  olarr: pq,
  olcir: gq,
  olcross: mq,
  oline: _q,
  olt: bq,
  Omacr: vq,
  omacr: xq,
  Omega: yq,
  omega: kq,
  Omicron: Eq,
  omicron: wq,
  omid: Cq,
  ominus: Aq,
  Oopf: Sq,
  oopf: Tq,
  opar: Rq,
  OpenCurlyDoubleQuote: Dq,
  OpenCurlyQuote: Mq,
  operp: Iq,
  oplus: Nq,
  orarr: Oq,
  Or: Lq,
  or: Fq,
  ord: qq,
  order: Pq,
  orderof: Bq,
  ordf: $q,
  ordm: zq,
  origof: Uq,
  oror: Hq,
  orslope: jq,
  orv: Vq,
  oS: Kq,
  Oscr: Gq,
  oscr: Zq,
  Oslash: Wq,
  oslash: Jq,
  osol: Yq,
  Otilde: Xq,
  otilde: Qq,
  otimesas: eP,
  Otimes: tP,
  otimes: nP,
  Ouml: sP,
  ouml: rP,
  ovbar: oP,
  OverBar: iP,
  OverBrace: cP,
  OverBracket: aP,
  OverParenthesis: lP,
  para: uP,
  parallel: fP,
  par: hP,
  parsim: dP,
  parsl: pP,
  part: gP,
  PartialD: mP,
  Pcy: _P,
  pcy: bP,
  percnt: vP,
  period: xP,
  permil: yP,
  perp: kP,
  pertenk: EP,
  Pfr: wP,
  pfr: CP,
  Phi: AP,
  phi: SP,
  phiv: TP,
  phmmat: RP,
  phone: DP,
  Pi: MP,
  pi: IP,
  pitchfork: NP,
  piv: OP,
  planck: LP,
  planckh: FP,
  plankv: qP,
  plusacir: PP,
  plusb: BP,
  pluscir: $P,
  plus: zP,
  plusdo: UP,
  plusdu: HP,
  pluse: jP,
  PlusMinus: VP,
  plusmn: KP,
  plussim: GP,
  plustwo: ZP,
  pm: WP,
  Poincareplane: JP,
  pointint: YP,
  popf: XP,
  Popf: QP,
  pound: e2,
  prap: t2,
  Pr: n2,
  pr: s2,
  prcue: r2,
  precapprox: o2,
  prec: i2,
  preccurlyeq: c2,
  Precedes: a2,
  PrecedesEqual: l2,
  PrecedesSlantEqual: u2,
  PrecedesTilde: f2,
  preceq: h2,
  precnapprox: d2,
  precneqq: p2,
  precnsim: g2,
  pre: m2,
  prE: _2,
  precsim: b2,
  prime: v2,
  Prime: x2,
  primes: y2,
  prnap: k2,
  prnE: E2,
  prnsim: w2,
  prod: C2,
  Product: A2,
  profalar: S2,
  profline: T2,
  profsurf: R2,
  prop: D2,
  Proportional: M2,
  Proportion: I2,
  propto: N2,
  prsim: O2,
  prurel: L2,
  Pscr: F2,
  pscr: q2,
  Psi: P2,
  psi: B2,
  puncsp: $2,
  Qfr: z2,
  qfr: U2,
  qint: H2,
  qopf: j2,
  Qopf: V2,
  qprime: K2,
  Qscr: G2,
  qscr: Z2,
  quaternions: W2,
  quatint: J2,
  quest: Y2,
  questeq: X2,
  quot: Q2,
  QUOT: eB,
  rAarr: tB,
  race: nB,
  Racute: sB,
  racute: rB,
  radic: oB,
  raemptyv: iB,
  rang: cB,
  Rang: aB,
  rangd: lB,
  range: uB,
  rangle: fB,
  raquo: hB,
  rarrap: dB,
  rarrb: pB,
  rarrbfs: gB,
  rarrc: mB,
  rarr: _B,
  Rarr: bB,
  rArr: vB,
  rarrfs: xB,
  rarrhk: yB,
  rarrlp: kB,
  rarrpl: EB,
  rarrsim: wB,
  Rarrtl: CB,
  rarrtl: AB,
  rarrw: SB,
  ratail: TB,
  rAtail: RB,
  ratio: DB,
  rationals: MB,
  rbarr: IB,
  rBarr: NB,
  RBarr: OB,
  rbbrk: LB,
  rbrace: FB,
  rbrack: qB,
  rbrke: PB,
  rbrksld: BB,
  rbrkslu: $B,
  Rcaron: zB,
  rcaron: UB,
  Rcedil: HB,
  rcedil: jB,
  rceil: VB,
  rcub: KB,
  Rcy: GB,
  rcy: ZB,
  rdca: WB,
  rdldhar: JB,
  rdquo: YB,
  rdquor: XB,
  rdsh: QB,
  real: e$,
  realine: t$,
  realpart: n$,
  reals: s$,
  Re: r$,
  rect: o$,
  reg: i$,
  REG: c$,
  ReverseElement: a$,
  ReverseEquilibrium: l$,
  ReverseUpEquilibrium: u$,
  rfisht: f$,
  rfloor: h$,
  rfr: d$,
  Rfr: p$,
  rHar: g$,
  rhard: m$,
  rharu: _$,
  rharul: b$,
  Rho: v$,
  rho: x$,
  rhov: y$,
  RightAngleBracket: k$,
  RightArrowBar: E$,
  rightarrow: w$,
  RightArrow: C$,
  Rightarrow: A$,
  RightArrowLeftArrow: S$,
  rightarrowtail: T$,
  RightCeiling: R$,
  RightDoubleBracket: D$,
  RightDownTeeVector: M$,
  RightDownVectorBar: I$,
  RightDownVector: N$,
  RightFloor: O$,
  rightharpoondown: L$,
  rightharpoonup: F$,
  rightleftarrows: q$,
  rightleftharpoons: P$,
  rightrightarrows: B$,
  rightsquigarrow: $$,
  RightTeeArrow: z$,
  RightTee: U$,
  RightTeeVector: H$,
  rightthreetimes: j$,
  RightTriangleBar: V$,
  RightTriangle: K$,
  RightTriangleEqual: G$,
  RightUpDownVector: Z$,
  RightUpTeeVector: W$,
  RightUpVectorBar: J$,
  RightUpVector: Y$,
  RightVectorBar: X$,
  RightVector: Q$,
  ring: ez,
  risingdotseq: tz,
  rlarr: nz,
  rlhar: sz,
  rlm: rz,
  rmoustache: oz,
  rmoust: iz,
  rnmid: cz,
  roang: az,
  roarr: lz,
  robrk: uz,
  ropar: fz,
  ropf: hz,
  Ropf: dz,
  roplus: pz,
  rotimes: gz,
  RoundImplies: mz,
  rpar: _z,
  rpargt: bz,
  rppolint: vz,
  rrarr: xz,
  Rrightarrow: yz,
  rsaquo: kz,
  rscr: Ez,
  Rscr: wz,
  rsh: Cz,
  Rsh: Az,
  rsqb: Sz,
  rsquo: Tz,
  rsquor: Rz,
  rthree: Dz,
  rtimes: Mz,
  rtri: Iz,
  rtrie: Nz,
  rtrif: Oz,
  rtriltri: Lz,
  RuleDelayed: Fz,
  ruluhar: qz,
  rx: Pz,
  Sacute: Bz,
  sacute: $z,
  sbquo: zz,
  scap: Uz,
  Scaron: Hz,
  scaron: jz,
  Sc: Vz,
  sc: Kz,
  sccue: Gz,
  sce: Zz,
  scE: Wz,
  Scedil: Jz,
  scedil: Yz,
  Scirc: Xz,
  scirc: Qz,
  scnap: e3,
  scnE: t3,
  scnsim: n3,
  scpolint: s3,
  scsim: r3,
  Scy: o3,
  scy: i3,
  sdotb: c3,
  sdot: a3,
  sdote: l3,
  searhk: u3,
  searr: f3,
  seArr: h3,
  searrow: d3,
  sect: p3,
  semi: g3,
  seswar: m3,
  setminus: _3,
  setmn: b3,
  sext: v3,
  Sfr: x3,
  sfr: y3,
  sfrown: k3,
  sharp: E3,
  SHCHcy: w3,
  shchcy: C3,
  SHcy: A3,
  shcy: S3,
  ShortDownArrow: T3,
  ShortLeftArrow: R3,
  shortmid: D3,
  shortparallel: M3,
  ShortRightArrow: I3,
  ShortUpArrow: N3,
  shy: O3,
  Sigma: L3,
  sigma: F3,
  sigmaf: q3,
  sigmav: P3,
  sim: B3,
  simdot: $3,
  sime: z3,
  simeq: U3,
  simg: H3,
  simgE: j3,
  siml: V3,
  simlE: K3,
  simne: G3,
  simplus: Z3,
  simrarr: W3,
  slarr: J3,
  SmallCircle: Y3,
  smallsetminus: X3,
  smashp: Q3,
  smeparsl: eU,
  smid: tU,
  smile: nU,
  smt: sU,
  smte: rU,
  smtes: oU,
  SOFTcy: iU,
  softcy: cU,
  solbar: aU,
  solb: lU,
  sol: uU,
  Sopf: fU,
  sopf: hU,
  spades: dU,
  spadesuit: pU,
  spar: gU,
  sqcap: mU,
  sqcaps: _U,
  sqcup: bU,
  sqcups: vU,
  Sqrt: xU,
  sqsub: yU,
  sqsube: kU,
  sqsubset: EU,
  sqsubseteq: wU,
  sqsup: CU,
  sqsupe: AU,
  sqsupset: SU,
  sqsupseteq: TU,
  square: RU,
  Square: DU,
  SquareIntersection: MU,
  SquareSubset: IU,
  SquareSubsetEqual: NU,
  SquareSuperset: OU,
  SquareSupersetEqual: LU,
  SquareUnion: FU,
  squarf: qU,
  squ: PU,
  squf: BU,
  srarr: $U,
  Sscr: zU,
  sscr: UU,
  ssetmn: HU,
  ssmile: jU,
  sstarf: VU,
  Star: KU,
  star: GU,
  starf: ZU,
  straightepsilon: WU,
  straightphi: JU,
  strns: YU,
  sub: XU,
  Sub: QU,
  subdot: eH,
  subE: tH,
  sube: nH,
  subedot: sH,
  submult: rH,
  subnE: oH,
  subne: iH,
  subplus: cH,
  subrarr: aH,
  subset: lH,
  Subset: uH,
  subseteq: fH,
  subseteqq: hH,
  SubsetEqual: dH,
  subsetneq: pH,
  subsetneqq: gH,
  subsim: mH,
  subsub: _H,
  subsup: bH,
  succapprox: vH,
  succ: xH,
  succcurlyeq: yH,
  Succeeds: kH,
  SucceedsEqual: EH,
  SucceedsSlantEqual: wH,
  SucceedsTilde: CH,
  succeq: AH,
  succnapprox: SH,
  succneqq: TH,
  succnsim: RH,
  succsim: DH,
  SuchThat: MH,
  sum: IH,
  Sum: NH,
  sung: OH,
  sup1: LH,
  sup2: FH,
  sup3: qH,
  sup: PH,
  Sup: BH,
  supdot: $H,
  supdsub: zH,
  supE: UH,
  supe: HH,
  supedot: jH,
  Superset: VH,
  SupersetEqual: KH,
  suphsol: GH,
  suphsub: ZH,
  suplarr: WH,
  supmult: JH,
  supnE: YH,
  supne: XH,
  supplus: QH,
  supset: e6,
  Supset: t6,
  supseteq: n6,
  supseteqq: s6,
  supsetneq: r6,
  supsetneqq: o6,
  supsim: i6,
  supsub: c6,
  supsup: a6,
  swarhk: l6,
  swarr: u6,
  swArr: f6,
  swarrow: h6,
  swnwar: d6,
  szlig: p6,
  Tab: g6,
  target: m6,
  Tau: _6,
  tau: b6,
  tbrk: v6,
  Tcaron: x6,
  tcaron: y6,
  Tcedil: k6,
  tcedil: E6,
  Tcy: w6,
  tcy: C6,
  tdot: A6,
  telrec: S6,
  Tfr: T6,
  tfr: R6,
  there4: D6,
  therefore: M6,
  Therefore: I6,
  Theta: N6,
  theta: O6,
  thetasym: L6,
  thetav: F6,
  thickapprox: q6,
  thicksim: P6,
  ThickSpace: B6,
  ThinSpace: $6,
  thinsp: z6,
  thkap: U6,
  thksim: H6,
  THORN: j6,
  thorn: V6,
  tilde: K6,
  Tilde: G6,
  TildeEqual: Z6,
  TildeFullEqual: W6,
  TildeTilde: J6,
  timesbar: Y6,
  timesb: X6,
  times: Q6,
  timesd: e5,
  tint: t5,
  toea: n5,
  topbot: s5,
  topcir: r5,
  top: o5,
  Topf: i5,
  topf: c5,
  topfork: a5,
  tosa: l5,
  tprime: u5,
  trade: f5,
  TRADE: h5,
  triangle: d5,
  triangledown: p5,
  triangleleft: g5,
  trianglelefteq: m5,
  triangleq: _5,
  triangleright: b5,
  trianglerighteq: v5,
  tridot: x5,
  trie: y5,
  triminus: k5,
  TripleDot: E5,
  triplus: w5,
  trisb: C5,
  tritime: A5,
  trpezium: S5,
  Tscr: T5,
  tscr: R5,
  TScy: D5,
  tscy: M5,
  TSHcy: I5,
  tshcy: N5,
  Tstrok: O5,
  tstrok: L5,
  twixt: F5,
  twoheadleftarrow: q5,
  twoheadrightarrow: P5,
  Uacute: B5,
  uacute: $5,
  uarr: z5,
  Uarr: U5,
  uArr: H5,
  Uarrocir: j5,
  Ubrcy: V5,
  ubrcy: K5,
  Ubreve: G5,
  ubreve: Z5,
  Ucirc: W5,
  ucirc: J5,
  Ucy: Y5,
  ucy: X5,
  udarr: Q5,
  Udblac: e8,
  udblac: t8,
  udhar: n8,
  ufisht: s8,
  Ufr: r8,
  ufr: o8,
  Ugrave: i8,
  ugrave: c8,
  uHar: a8,
  uharl: l8,
  uharr: u8,
  uhblk: f8,
  ulcorn: h8,
  ulcorner: d8,
  ulcrop: p8,
  ultri: g8,
  Umacr: m8,
  umacr: _8,
  uml: b8,
  UnderBar: v8,
  UnderBrace: x8,
  UnderBracket: y8,
  UnderParenthesis: k8,
  Union: E8,
  UnionPlus: w8,
  Uogon: C8,
  uogon: A8,
  Uopf: S8,
  uopf: T8,
  UpArrowBar: R8,
  uparrow: D8,
  UpArrow: M8,
  Uparrow: I8,
  UpArrowDownArrow: N8,
  updownarrow: O8,
  UpDownArrow: L8,
  Updownarrow: F8,
  UpEquilibrium: q8,
  upharpoonleft: P8,
  upharpoonright: B8,
  uplus: $8,
  UpperLeftArrow: z8,
  UpperRightArrow: U8,
  upsi: H8,
  Upsi: j8,
  upsih: V8,
  Upsilon: K8,
  upsilon: G8,
  UpTeeArrow: Z8,
  UpTee: W8,
  upuparrows: J8,
  urcorn: Y8,
  urcorner: X8,
  urcrop: Q8,
  Uring: e4,
  uring: t4,
  urtri: n4,
  Uscr: s4,
  uscr: r4,
  utdot: o4,
  Utilde: i4,
  utilde: c4,
  utri: a4,
  utrif: l4,
  uuarr: u4,
  Uuml: f4,
  uuml: h4,
  uwangle: d4,
  vangrt: p4,
  varepsilon: g4,
  varkappa: m4,
  varnothing: _4,
  varphi: b4,
  varpi: v4,
  varpropto: x4,
  varr: y4,
  vArr: k4,
  varrho: E4,
  varsigma: w4,
  varsubsetneq: C4,
  varsubsetneqq: A4,
  varsupsetneq: S4,
  varsupsetneqq: T4,
  vartheta: R4,
  vartriangleleft: D4,
  vartriangleright: M4,
  vBar: I4,
  Vbar: N4,
  vBarv: O4,
  Vcy: L4,
  vcy: F4,
  vdash: q4,
  vDash: P4,
  Vdash: B4,
  VDash: $4,
  Vdashl: z4,
  veebar: U4,
  vee: H4,
  Vee: j4,
  veeeq: V4,
  vellip: K4,
  verbar: G4,
  Verbar: Z4,
  vert: W4,
  Vert: J4,
  VerticalBar: Y4,
  VerticalLine: X4,
  VerticalSeparator: Q4,
  VerticalTilde: e9,
  VeryThinSpace: t9,
  Vfr: n9,
  vfr: s9,
  vltri: r9,
  vnsub: o9,
  vnsup: i9,
  Vopf: c9,
  vopf: a9,
  vprop: l9,
  vrtri: u9,
  Vscr: f9,
  vscr: h9,
  vsubnE: d9,
  vsubne: p9,
  vsupnE: g9,
  vsupne: m9,
  Vvdash: _9,
  vzigzag: b9,
  Wcirc: v9,
  wcirc: x9,
  wedbar: y9,
  wedge: k9,
  Wedge: E9,
  wedgeq: w9,
  weierp: C9,
  Wfr: A9,
  wfr: S9,
  Wopf: T9,
  wopf: R9,
  wp: D9,
  wr: M9,
  wreath: I9,
  Wscr: N9,
  wscr: O9,
  xcap: L9,
  xcirc: F9,
  xcup: q9,
  xdtri: P9,
  Xfr: B9,
  xfr: $9,
  xharr: z9,
  xhArr: U9,
  Xi: H9,
  xi: j9,
  xlarr: V9,
  xlArr: K9,
  xmap: G9,
  xnis: Z9,
  xodot: W9,
  Xopf: J9,
  xopf: Y9,
  xoplus: X9,
  xotime: Q9,
  xrarr: ej,
  xrArr: tj,
  Xscr: nj,
  xscr: sj,
  xsqcup: rj,
  xuplus: oj,
  xutri: ij,
  xvee: cj,
  xwedge: aj,
  Yacute: lj,
  yacute: uj,
  YAcy: fj,
  yacy: hj,
  Ycirc: dj,
  ycirc: pj,
  Ycy: gj,
  ycy: mj,
  yen: _j,
  Yfr: bj,
  yfr: vj,
  YIcy: xj,
  yicy: yj,
  Yopf: kj,
  yopf: Ej,
  Yscr: wj,
  yscr: Cj,
  YUcy: Aj,
  yucy: Sj,
  yuml: Tj,
  Yuml: Rj,
  Zacute: Dj,
  zacute: Mj,
  Zcaron: Ij,
  zcaron: Nj,
  Zcy: Oj,
  zcy: Lj,
  Zdot: Fj,
  zdot: qj,
  zeetrf: Pj,
  ZeroWidthSpace: Bj,
  Zeta: $j,
  zeta: zj,
  zfr: Uj,
  Zfr: Hj,
  ZHcy: jj,
  zhcy: Vj,
  zigrarr: Kj,
  zopf: Gj,
  Zopf: Zj,
  Zscr: Wj,
  zscr: Jj,
  zwj: Yj,
  zwnj: Xj
};
var br, mc;
function uu() {
  return mc || (mc = 1, br = Qj), br;
}
var vr, _c;
function oi() {
  return _c || (_c = 1, vr = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/), vr;
}
var _n = {}, xr, bc;
function eV() {
  if (bc) return xr;
  bc = 1;
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
  return n.defaultChars = ";/?:@&=+$,-_.!~*'()#", n.componentChars = "-_.!~*'()", xr = n, xr;
}
var yr, vc;
function tV() {
  if (vc) return yr;
  vc = 1;
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
      var c, a, u, l, f, d, h, _ = "";
      for (c = 0, a = i.length; c < a; c += 3) {
        if (u = parseInt(i.slice(c + 1, c + 3), 16), u < 128) {
          _ += o[u];
          continue;
        }
        if ((u & 224) === 192 && c + 3 < a && (l = parseInt(i.slice(c + 4, c + 6), 16), (l & 192) === 128)) {
          h = u << 6 & 1984 | l & 63, h < 128 ? _ += "��" : _ += String.fromCharCode(h), c += 3;
          continue;
        }
        if ((u & 240) === 224 && c + 6 < a && (l = parseInt(i.slice(c + 4, c + 6), 16), f = parseInt(i.slice(c + 7, c + 9), 16), (l & 192) === 128 && (f & 192) === 128)) {
          h = u << 12 & 61440 | l << 6 & 4032 | f & 63, h < 2048 || h >= 55296 && h <= 57343 ? _ += "���" : _ += String.fromCharCode(h), c += 6;
          continue;
        }
        if ((u & 248) === 240 && c + 9 < a && (l = parseInt(i.slice(c + 4, c + 6), 16), f = parseInt(i.slice(c + 7, c + 9), 16), d = parseInt(i.slice(c + 10, c + 12), 16), (l & 192) === 128 && (f & 192) === 128 && (d & 192) === 128)) {
          h = u << 18 & 1835008 | l << 12 & 258048 | f << 6 & 4032 | d & 63, h < 65536 || h > 1114111 ? _ += "����" : (h -= 65536, _ += String.fromCharCode(55296 + (h >> 10), 56320 + (h & 1023))), c += 9;
          continue;
        }
        _ += "�";
      }
      return _;
    });
  }
  return n.defaultChars = ";/?:@&=+$,#", n.componentChars = "", yr = n, yr;
}
var kr, xc;
function nV() {
  return xc || (xc = 1, kr = function(t) {
    var n = "";
    return n += t.protocol || "", n += t.slashes ? "//" : "", n += t.auth ? t.auth + "@" : "", t.hostname && t.hostname.indexOf(":") !== -1 ? n += "[" + t.hostname + "]" : n += t.hostname || "", n += t.port ? ":" + t.port : "", n += t.pathname || "", n += t.search || "", n += t.hash || "", n;
  }), kr;
}
var Er, yc;
function sV() {
  if (yc) return Er;
  yc = 1;
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
  function _(y, A) {
    if (y && y instanceof e)
      return y;
    var v = new e();
    return v.parse(y, A), v;
  }
  return e.prototype.parse = function(y, A) {
    var v, k, b, p, E, w = y;
    if (w = w.trim(), !A && y.split("#").length === 1) {
      var B = s.exec(w);
      if (B)
        return this.pathname = B[1], B[2] && (this.search = B[2]), this;
    }
    var C = t.exec(w);
    if (C && (C = C[0], b = C.toLowerCase(), this.protocol = C, w = w.substr(C.length)), (A || C || w.match(/^\/\/[^@\/]+@[^@\/]+/)) && (E = w.substr(0, 2) === "//", E && !(C && d[C]) && (w = w.substr(2), this.slashes = !0)), !d[C] && (E || C && !h[C])) {
      var S = -1;
      for (v = 0; v < a.length; v++)
        p = w.indexOf(a[v]), p !== -1 && (S === -1 || p < S) && (S = p);
      var R, P;
      for (S === -1 ? P = w.lastIndexOf("@") : P = w.lastIndexOf("@", S), P !== -1 && (R = w.slice(0, P), w = w.slice(P + 1), this.auth = R), S = -1, v = 0; v < c.length; v++)
        p = w.indexOf(c[v]), p !== -1 && (S === -1 || p < S) && (S = p);
      S === -1 && (S = w.length), w[S - 1] === ":" && S--;
      var I = w.slice(0, S);
      w = w.slice(S), this.parseHost(I), this.hostname = this.hostname || "";
      var te = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
      if (!te) {
        var D = this.hostname.split(/\./);
        for (v = 0, k = D.length; v < k; v++) {
          var oe = D[v];
          if (oe && !oe.match(l)) {
            for (var Q = "", le = 0, G = oe.length; le < G; le++)
              oe.charCodeAt(le) > 127 ? Q += "x" : Q += oe[le];
            if (!Q.match(l)) {
              var fe = D.slice(0, v), Z = D.slice(v + 1), Ee = oe.match(f);
              Ee && (fe.push(Ee[1]), Z.unshift(Ee[2])), Z.length && (w = Z.join(".") + w), this.hostname = fe.join(".");
              break;
            }
          }
        }
      }
      this.hostname.length > u && (this.hostname = ""), te && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
    }
    var we = w.indexOf("#");
    we !== -1 && (this.hash = w.substr(we), w = w.slice(0, we));
    var st = w.indexOf("?");
    return st !== -1 && (this.search = w.substr(st), w = w.slice(0, st)), w && (this.pathname = w), h[b] && this.hostname && !this.pathname && (this.pathname = ""), this;
  }, e.prototype.parseHost = function(y) {
    var A = n.exec(y);
    A && (A = A[0], A !== ":" && (this.port = A.substr(1)), y = y.substr(0, y.length - A.length)), y && (this.hostname = y);
  }, Er = _, Er;
}
var kc;
function fu() {
  return kc || (kc = 1, _n.encode = eV(), _n.decode = tV(), _n.format = nV(), _n.parse = sV()), _n;
}
var cn = {}, wr, Ec;
function hu() {
  return Ec || (Ec = 1, wr = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/), wr;
}
var Cr, wc;
function du() {
  return wc || (wc = 1, Cr = /[\0-\x1F\x7F-\x9F]/), Cr;
}
var Ar, Cc;
function rV() {
  return Cc || (Cc = 1, Ar = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/), Ar;
}
var Sr, Ac;
function pu() {
  return Ac || (Ac = 1, Sr = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/), Sr;
}
var Sc;
function oV() {
  return Sc || (Sc = 1, cn.Any = hu(), cn.Cc = du(), cn.Cf = rV(), cn.P = oi(), cn.Z = pu()), cn;
}
var Tc;
function ye() {
  return Tc || (Tc = 1, (function(e) {
    function t(D) {
      return Object.prototype.toString.call(D);
    }
    function n(D) {
      return t(D) === "[object String]";
    }
    var s = Object.prototype.hasOwnProperty;
    function r(D, oe) {
      return s.call(D, oe);
    }
    function o(D) {
      var oe = Array.prototype.slice.call(arguments, 1);
      return oe.forEach(function(Q) {
        if (Q) {
          if (typeof Q != "object")
            throw new TypeError(Q + "must be object");
          Object.keys(Q).forEach(function(le) {
            D[le] = Q[le];
          });
        }
      }), D;
    }
    function i(D, oe, Q) {
      return [].concat(D.slice(0, oe), Q, D.slice(oe + 1));
    }
    function c(D) {
      return !(D >= 55296 && D <= 57343 || D >= 64976 && D <= 65007 || (D & 65535) === 65535 || (D & 65535) === 65534 || D >= 0 && D <= 8 || D === 11 || D >= 14 && D <= 31 || D >= 127 && D <= 159 || D > 1114111);
    }
    function a(D) {
      if (D > 65535) {
        D -= 65536;
        var oe = 55296 + (D >> 10), Q = 56320 + (D & 1023);
        return String.fromCharCode(oe, Q);
      }
      return String.fromCharCode(D);
    }
    var u = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g, l = /&([a-z#][a-z0-9]{1,31});/gi, f = new RegExp(u.source + "|" + l.source, "gi"), d = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i, h = uu();
    function _(D, oe) {
      var Q;
      return r(h, oe) ? h[oe] : oe.charCodeAt(0) === 35 && d.test(oe) && (Q = oe[1].toLowerCase() === "x" ? parseInt(oe.slice(2), 16) : parseInt(oe.slice(1), 10), c(Q)) ? a(Q) : D;
    }
    function y(D) {
      return D.indexOf("\\") < 0 ? D : D.replace(u, "$1");
    }
    function A(D) {
      return D.indexOf("\\") < 0 && D.indexOf("&") < 0 ? D : D.replace(f, function(oe, Q, le) {
        return Q || _(oe, le);
      });
    }
    var v = /[&<>"]/, k = /[&<>"]/g, b = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    };
    function p(D) {
      return b[D];
    }
    function E(D) {
      return v.test(D) ? D.replace(k, p) : D;
    }
    var w = /[.?*+^$[\]\\(){}|-]/g;
    function B(D) {
      return D.replace(w, "\\$&");
    }
    function C(D) {
      switch (D) {
        case 9:
        case 32:
          return !0;
      }
      return !1;
    }
    function S(D) {
      if (D >= 8192 && D <= 8202)
        return !0;
      switch (D) {
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
    var R = oi();
    function P(D) {
      return R.test(D);
    }
    function I(D) {
      switch (D) {
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
    function te(D) {
      return D = D.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (D = D.replace(/ẞ/g, "ß")), D.toLowerCase().toUpperCase();
    }
    e.lib = {}, e.lib.mdurl = fu(), e.lib.ucmicro = oV(), e.assign = o, e.isString = n, e.has = r, e.unescapeMd = y, e.unescapeAll = A, e.isValidEntityCode = c, e.fromCodePoint = a, e.escapeHtml = E, e.arrayReplaceAt = i, e.isSpace = C, e.isWhiteSpace = S, e.isMdAsciiPunct = I, e.isPunctChar = P, e.escapeRE = B, e.normalizeReference = te;
  })(_r)), _r;
}
var qn = {}, Tr, Rc;
function iV() {
  return Rc || (Rc = 1, Tr = function(t, n, s) {
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
  }), Tr;
}
var Rr, Dc;
function cV() {
  if (Dc) return Rr;
  Dc = 1;
  var e = ye().unescapeAll;
  return Rr = function(n, s, r) {
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
  }, Rr;
}
var Dr, Mc;
function aV() {
  if (Mc) return Dr;
  Mc = 1;
  var e = ye().unescapeAll;
  return Dr = function(n, s, r) {
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
  }, Dr;
}
var Ic;
function lV() {
  return Ic || (Ic = 1, qn.parseLinkLabel = iV(), qn.parseLinkDestination = cV(), qn.parseLinkTitle = aV()), qn;
}
var Mr, Nc;
function uV() {
  if (Nc) return Mr;
  Nc = 1;
  var e = ye().assign, t = ye().unescapeAll, n = ye().escapeHtml, s = {};
  s.code_inline = function(o, i, c, a, u) {
    var l = o[i];
    return "<code" + u.renderAttrs(l) + ">" + n(l.content) + "</code>";
  }, s.code_block = function(o, i, c, a, u) {
    var l = o[i];
    return "<pre" + u.renderAttrs(l) + "><code>" + n(o[i].content) + `</code></pre>
`;
  }, s.fence = function(o, i, c, a, u) {
    var l = o[i], f = l.info ? t(l.info).trim() : "", d = "", h = "", _, y, A, v, k;
    return f && (A = f.split(/(\s+)/g), d = A[0], h = A.slice(2).join("")), c.highlight ? _ = c.highlight(l.content, d, h) || n(l.content) : _ = n(l.content), _.indexOf("<pre") === 0 ? _ + `
` : f ? (y = l.attrIndex("class"), v = l.attrs ? l.attrs.slice() : [], y < 0 ? v.push(["class", c.langPrefix + d]) : (v[y] = v[y].slice(), v[y][1] += " " + c.langPrefix + d), k = {
      attrs: v
    }, "<pre><code" + u.renderAttrs(k) + ">" + _ + `</code></pre>
`) : "<pre><code" + u.renderAttrs(l) + ">" + _ + `</code></pre>
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
  }, Mr = r, Mr;
}
var Ir, Oc;
function ii() {
  if (Oc) return Ir;
  Oc = 1;
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
  }, Ir = e, Ir;
}
var Nr, Lc;
function fV() {
  if (Lc) return Nr;
  Lc = 1;
  var e = /\r\n?|\n/g, t = /\0/g;
  return Nr = function(s) {
    var r;
    r = s.src.replace(e, `
`), r = r.replace(t, "�"), s.src = r;
  }, Nr;
}
var Or, Fc;
function hV() {
  return Fc || (Fc = 1, Or = function(t) {
    var n;
    t.inlineMode ? (n = new t.Token("inline", "", 0), n.content = t.src, n.map = [0, 1], n.children = [], t.tokens.push(n)) : t.md.block.parse(t.src, t.md, t.env, t.tokens);
  }), Or;
}
var Lr, qc;
function dV() {
  return qc || (qc = 1, Lr = function(t) {
    var n = t.tokens, s, r, o;
    for (r = 0, o = n.length; r < o; r++)
      s = n[r], s.type === "inline" && t.md.inline.parse(s.content, t.md, t.env, s.children);
  }), Lr;
}
var Fr, Pc;
function pV() {
  if (Pc) return Fr;
  Pc = 1;
  var e = ye().arrayReplaceAt;
  function t(s) {
    return /^<a[>\s]/i.test(s);
  }
  function n(s) {
    return /^<\/a\s*>/i.test(s);
  }
  return Fr = function(r) {
    var o, i, c, a, u, l, f, d, h, _, y, A, v, k, b, p, E = r.tokens, w;
    if (r.md.options.linkify) {
      for (i = 0, c = E.length; i < c; i++)
        if (!(E[i].type !== "inline" || !r.md.linkify.pretest(E[i].content)))
          for (a = E[i].children, v = 0, o = a.length - 1; o >= 0; o--) {
            if (l = a[o], l.type === "link_close") {
              for (o--; a[o].level !== l.level && a[o].type !== "link_open"; )
                o--;
              continue;
            }
            if (l.type === "html_inline" && (t(l.content) && v > 0 && v--, n(l.content) && v++), !(v > 0) && l.type === "text" && r.md.linkify.test(l.content)) {
              for (h = l.content, w = r.md.linkify.match(h), f = [], A = l.level, y = 0, w.length > 0 && w[0].index === 0 && o > 0 && a[o - 1].type === "text_special" && (w = w.slice(1)), d = 0; d < w.length; d++)
                k = w[d].url, b = r.md.normalizeLink(k), r.md.validateLink(b) && (p = w[d].text, w[d].schema ? w[d].schema === "mailto:" && !/^mailto:/i.test(p) ? p = r.md.normalizeLinkText("mailto:" + p).replace(/^mailto:/, "") : p = r.md.normalizeLinkText(p) : p = r.md.normalizeLinkText("http://" + p).replace(/^http:\/\//, ""), _ = w[d].index, _ > y && (u = new r.Token("text", "", 0), u.content = h.slice(y, _), u.level = A, f.push(u)), u = new r.Token("link_open", "a", 1), u.attrs = [["href", b]], u.level = A++, u.markup = "linkify", u.info = "auto", f.push(u), u = new r.Token("text", "", 0), u.content = p, u.level = A, f.push(u), u = new r.Token("link_close", "a", -1), u.level = --A, u.markup = "linkify", u.info = "auto", f.push(u), y = w[d].lastIndex);
              y < h.length && (u = new r.Token("text", "", 0), u.content = h.slice(y), u.level = A, f.push(u)), E[i].children = a = e(a, o, f);
            }
          }
    }
  }, Fr;
}
var qr, Bc;
function gV() {
  if (Bc) return qr;
  Bc = 1;
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
  return qr = function(a) {
    var u;
    if (a.md.options.typographer)
      for (u = a.tokens.length - 1; u >= 0; u--)
        a.tokens[u].type === "inline" && (t.test(a.tokens[u].content) && o(a.tokens[u].children), e.test(a.tokens[u].content) && i(a.tokens[u].children));
  }, qr;
}
var Pr, $c;
function mV() {
  if ($c) return Pr;
  $c = 1;
  var e = ye().isWhiteSpace, t = ye().isPunctChar, n = ye().isMdAsciiPunct, s = /['"]/, r = /['"]/g, o = "’";
  function i(a, u, l) {
    return a.slice(0, u) + l + a.slice(u + 1);
  }
  function c(a, u) {
    var l, f, d, h, _, y, A, v, k, b, p, E, w, B, C, S, R, P, I, te, D;
    for (I = [], l = 0; l < a.length; l++) {
      for (f = a[l], A = a[l].level, R = I.length - 1; R >= 0 && !(I[R].level <= A); R--)
        ;
      if (I.length = R + 1, f.type === "text") {
        d = f.content, _ = 0, y = d.length;
        e:
          for (; _ < y && (r.lastIndex = _, h = r.exec(d), !!h); ) {
            if (C = S = !0, _ = h.index + 1, P = h[0] === "'", k = 32, h.index - 1 >= 0)
              k = d.charCodeAt(h.index - 1);
            else
              for (R = l - 1; R >= 0 && !(a[R].type === "softbreak" || a[R].type === "hardbreak"); R--)
                if (a[R].content) {
                  k = a[R].content.charCodeAt(a[R].content.length - 1);
                  break;
                }
            if (b = 32, _ < y)
              b = d.charCodeAt(_);
            else
              for (R = l + 1; R < a.length && !(a[R].type === "softbreak" || a[R].type === "hardbreak"); R++)
                if (a[R].content) {
                  b = a[R].content.charCodeAt(0);
                  break;
                }
            if (p = n(k) || t(String.fromCharCode(k)), E = n(b) || t(String.fromCharCode(b)), w = e(k), B = e(b), B ? C = !1 : E && (w || p || (C = !1)), w ? S = !1 : p && (B || E || (S = !1)), b === 34 && h[0] === '"' && k >= 48 && k <= 57 && (S = C = !1), C && S && (C = p, S = E), !C && !S) {
              P && (f.content = i(f.content, h.index, o));
              continue;
            }
            if (S) {
              for (R = I.length - 1; R >= 0 && (v = I[R], !(I[R].level < A)); R--)
                if (v.single === P && I[R].level === A) {
                  v = I[R], P ? (te = u.md.options.quotes[2], D = u.md.options.quotes[3]) : (te = u.md.options.quotes[0], D = u.md.options.quotes[1]), f.content = i(f.content, h.index, D), a[v.token].content = i(
                    a[v.token].content,
                    v.pos,
                    te
                  ), _ += D.length - 1, v.token === l && (_ += te.length - 1), d = f.content, y = d.length, I.length = R;
                  continue e;
                }
            }
            C ? I.push({
              token: l,
              pos: h.index,
              single: P,
              level: A
            }) : S && P && (f.content = i(f.content, h.index, o));
          }
      }
    }
  }
  return Pr = function(u) {
    var l;
    if (u.md.options.typographer)
      for (l = u.tokens.length - 1; l >= 0; l--)
        u.tokens[l].type !== "inline" || !s.test(u.tokens[l].content) || c(u.tokens[l].children, u);
  }, Pr;
}
var Br, zc;
function _V() {
  return zc || (zc = 1, Br = function(t) {
    var n, s, r, o, i, c, a = t.tokens;
    for (n = 0, s = a.length; n < s; n++)
      if (a[n].type === "inline") {
        for (r = a[n].children, i = r.length, o = 0; o < i; o++)
          r[o].type === "text_special" && (r[o].type = "text");
        for (o = c = 0; o < i; o++)
          r[o].type === "text" && o + 1 < i && r[o + 1].type === "text" ? r[o + 1].content = r[o].content + r[o + 1].content : (o !== c && (r[c] = r[o]), c++);
        o !== c && (r.length = c);
      }
  }), Br;
}
var $r, Uc;
function ci() {
  if (Uc) return $r;
  Uc = 1;
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
  }, $r = e, $r;
}
var zr, Hc;
function bV() {
  if (Hc) return zr;
  Hc = 1;
  var e = ci();
  function t(n, s, r) {
    this.src = n, this.env = r, this.tokens = [], this.inlineMode = !1, this.md = s;
  }
  return t.prototype.Token = e, zr = t, zr;
}
var Ur, jc;
function vV() {
  if (jc) return Ur;
  jc = 1;
  var e = ii(), t = [
    ["normalize", fV()],
    ["block", hV()],
    ["inline", dV()],
    ["linkify", pV()],
    ["replacements", gV()],
    ["smartquotes", mV()],
    // `text_join` finds `text_special` tokens (for escape sequences)
    // and joins them with the rest of the text
    ["text_join", _V()]
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
  }, n.prototype.State = bV(), Ur = n, Ur;
}
var Hr, Vc;
function xV() {
  if (Vc) return Hr;
  Vc = 1;
  var e = ye().isSpace;
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
  return Hr = function(r, o, i, c) {
    var a, u, l, f, d, h, _, y, A, v, k, b, p, E, w, B, C, S;
    if (o + 2 > i || (h = o + 1, r.sCount[h] < r.blkIndent) || r.sCount[h] - r.blkIndent >= 4 || (l = r.bMarks[h] + r.tShift[h], l >= r.eMarks[h]) || (C = r.src.charCodeAt(l++), C !== 124 && C !== 45 && C !== 58) || l >= r.eMarks[h] || (S = r.src.charCodeAt(l++), S !== 124 && S !== 45 && S !== 58 && !e(S)) || C === 45 && e(S))
      return !1;
    for (; l < r.eMarks[h]; ) {
      if (a = r.src.charCodeAt(l), a !== 124 && a !== 45 && a !== 58 && !e(a))
        return !1;
      l++;
    }
    for (u = t(r, o + 1), _ = u.split("|"), v = [], f = 0; f < _.length; f++) {
      if (k = _[f].trim(), !k) {
        if (f === 0 || f === _.length - 1)
          continue;
        return !1;
      }
      if (!/^:?-+:?$/.test(k))
        return !1;
      k.charCodeAt(k.length - 1) === 58 ? v.push(k.charCodeAt(0) === 58 ? "center" : "right") : k.charCodeAt(0) === 58 ? v.push("left") : v.push("");
    }
    if (u = t(r, o).trim(), u.indexOf("|") === -1 || r.sCount[o] - r.blkIndent >= 4 || (_ = n(u), _.length && _[0] === "" && _.shift(), _.length && _[_.length - 1] === "" && _.pop(), y = _.length, y === 0 || y !== v.length))
      return !1;
    if (c)
      return !0;
    for (E = r.parentType, r.parentType = "table", B = r.md.block.ruler.getRules("blockquote"), A = r.push("table_open", "table", 1), A.map = b = [o, 0], A = r.push("thead_open", "thead", 1), A.map = [o, o + 1], A = r.push("tr_open", "tr", 1), A.map = [o, o + 1], f = 0; f < _.length; f++)
      A = r.push("th_open", "th", 1), v[f] && (A.attrs = [["style", "text-align:" + v[f]]]), A = r.push("inline", "", 0), A.content = _[f].trim(), A.children = [], A = r.push("th_close", "th", -1);
    for (A = r.push("tr_close", "tr", -1), A = r.push("thead_close", "thead", -1), h = o + 2; h < i && !(r.sCount[h] < r.blkIndent); h++) {
      for (w = !1, f = 0, d = B.length; f < d; f++)
        if (B[f](r, h, i, !0)) {
          w = !0;
          break;
        }
      if (w || (u = t(r, h).trim(), !u) || r.sCount[h] - r.blkIndent >= 4)
        break;
      for (_ = n(u), _.length && _[0] === "" && _.shift(), _.length && _[_.length - 1] === "" && _.pop(), h === o + 2 && (A = r.push("tbody_open", "tbody", 1), A.map = p = [o + 2, 0]), A = r.push("tr_open", "tr", 1), A.map = [h, h + 1], f = 0; f < y; f++)
        A = r.push("td_open", "td", 1), v[f] && (A.attrs = [["style", "text-align:" + v[f]]]), A = r.push("inline", "", 0), A.content = _[f] ? _[f].trim() : "", A.children = [], A = r.push("td_close", "td", -1);
      A = r.push("tr_close", "tr", -1);
    }
    return p && (A = r.push("tbody_close", "tbody", -1), p[1] = h), A = r.push("table_close", "table", -1), b[1] = h, r.parentType = E, r.line = h, !0;
  }, Hr;
}
var jr, Kc;
function yV() {
  return Kc || (Kc = 1, jr = function(t, n, s) {
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
  }), jr;
}
var Vr, Gc;
function kV() {
  return Gc || (Gc = 1, Vr = function(t, n, s, r) {
    var o, i, c, a, u, l, f, d = !1, h = t.bMarks[n] + t.tShift[n], _ = t.eMarks[n];
    if (t.sCount[n] - t.blkIndent >= 4 || h + 3 > _ || (o = t.src.charCodeAt(h), o !== 126 && o !== 96) || (u = h, h = t.skipChars(h, o), i = h - u, i < 3) || (f = t.src.slice(u, h), c = t.src.slice(h, _), o === 96 && c.indexOf(String.fromCharCode(o)) >= 0))
      return !1;
    if (r)
      return !0;
    for (a = n; a++, !(a >= s || (h = u = t.bMarks[a] + t.tShift[a], _ = t.eMarks[a], h < _ && t.sCount[a] < t.blkIndent)); )
      if (t.src.charCodeAt(h) === o && !(t.sCount[a] - t.blkIndent >= 4) && (h = t.skipChars(h, o), !(h - u < i) && (h = t.skipSpaces(h), !(h < _)))) {
        d = !0;
        break;
      }
    return i = t.sCount[n], t.line = a + (d ? 1 : 0), l = t.push("fence", "code", 0), l.info = c, l.content = t.getLines(n + 1, a, i, !0), l.markup = f, l.map = [n, t.line], !0;
  }), Vr;
}
var Kr, Zc;
function EV() {
  if (Zc) return Kr;
  Zc = 1;
  var e = ye().isSpace;
  return Kr = function(n, s, r, o) {
    var i, c, a, u, l, f, d, h, _, y, A, v, k, b, p, E, w, B, C, S, R = n.lineMax, P = n.bMarks[s] + n.tShift[s], I = n.eMarks[s];
    if (n.sCount[s] - n.blkIndent >= 4 || n.src.charCodeAt(P) !== 62)
      return !1;
    if (o)
      return !0;
    for (y = [], A = [], b = [], p = [], B = n.md.block.ruler.getRules("blockquote"), k = n.parentType, n.parentType = "blockquote", h = s; h < r && (S = n.sCount[h] < n.blkIndent, P = n.bMarks[h] + n.tShift[h], I = n.eMarks[h], !(P >= I)); h++) {
      if (n.src.charCodeAt(P++) === 62 && !S) {
        for (u = n.sCount[h] + 1, n.src.charCodeAt(P) === 32 ? (P++, u++, i = !1, E = !0) : n.src.charCodeAt(P) === 9 ? (E = !0, (n.bsCount[h] + u) % 4 === 3 ? (P++, u++, i = !1) : i = !0) : E = !1, _ = u, y.push(n.bMarks[h]), n.bMarks[h] = P; P < I && (c = n.src.charCodeAt(P), e(c)); ) {
          c === 9 ? _ += 4 - (_ + n.bsCount[h] + (i ? 1 : 0)) % 4 : _++;
          P++;
        }
        f = P >= I, A.push(n.bsCount[h]), n.bsCount[h] = n.sCount[h] + 1 + (E ? 1 : 0), b.push(n.sCount[h]), n.sCount[h] = _ - u, p.push(n.tShift[h]), n.tShift[h] = P - n.bMarks[h];
        continue;
      }
      if (f)
        break;
      for (w = !1, a = 0, l = B.length; a < l; a++)
        if (B[a](n, h, r, !0)) {
          w = !0;
          break;
        }
      if (w) {
        n.lineMax = h, n.blkIndent !== 0 && (y.push(n.bMarks[h]), A.push(n.bsCount[h]), p.push(n.tShift[h]), b.push(n.sCount[h]), n.sCount[h] -= n.blkIndent);
        break;
      }
      y.push(n.bMarks[h]), A.push(n.bsCount[h]), p.push(n.tShift[h]), b.push(n.sCount[h]), n.sCount[h] = -1;
    }
    for (v = n.blkIndent, n.blkIndent = 0, C = n.push("blockquote_open", "blockquote", 1), C.markup = ">", C.map = d = [s, 0], n.md.block.tokenize(n, s, h), C = n.push("blockquote_close", "blockquote", -1), C.markup = ">", n.lineMax = R, n.parentType = k, d[1] = n.line, a = 0; a < p.length; a++)
      n.bMarks[a + s] = y[a], n.tShift[a + s] = p[a], n.sCount[a + s] = b[a], n.bsCount[a + s] = A[a];
    return n.blkIndent = v, !0;
  }, Kr;
}
var Gr, Wc;
function wV() {
  if (Wc) return Gr;
  Wc = 1;
  var e = ye().isSpace;
  return Gr = function(n, s, r, o) {
    var i, c, a, u, l = n.bMarks[s] + n.tShift[s], f = n.eMarks[s];
    if (n.sCount[s] - n.blkIndent >= 4 || (i = n.src.charCodeAt(l++), i !== 42 && i !== 45 && i !== 95))
      return !1;
    for (c = 1; l < f; ) {
      if (a = n.src.charCodeAt(l++), a !== i && !e(a))
        return !1;
      a === i && c++;
    }
    return c < 3 ? !1 : (o || (n.line = s + 1, u = n.push("hr", "hr", 0), u.map = [s, n.line], u.markup = Array(c + 1).join(String.fromCharCode(i))), !0);
  }, Gr;
}
var Zr, Jc;
function CV() {
  if (Jc) return Zr;
  Jc = 1;
  var e = ye().isSpace;
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
  return Zr = function(o, i, c, a) {
    var u, l, f, d, h, _, y, A, v, k, b, p, E, w, B, C, S, R, P, I, te, D, oe, Q, le, G, fe, Z = i, Ee = !1, we = !0;
    if (o.sCount[Z] - o.blkIndent >= 4 || o.listIndent >= 0 && o.sCount[Z] - o.listIndent >= 4 && o.sCount[Z] < o.blkIndent)
      return !1;
    if (a && o.parentType === "paragraph" && o.sCount[Z] >= o.blkIndent && (Ee = !0), (D = n(o, Z)) >= 0) {
      if (y = !0, Q = o.bMarks[Z] + o.tShift[Z], E = Number(o.src.slice(Q, D - 1)), Ee && E !== 1) return !1;
    } else if ((D = t(o, Z)) >= 0)
      y = !1;
    else
      return !1;
    if (Ee && o.skipSpaces(D) >= o.eMarks[Z])
      return !1;
    if (a)
      return !0;
    for (p = o.src.charCodeAt(D - 1), b = o.tokens.length, y ? (fe = o.push("ordered_list_open", "ol", 1), E !== 1 && (fe.attrs = [["start", E]])) : fe = o.push("bullet_list_open", "ul", 1), fe.map = k = [Z, 0], fe.markup = String.fromCharCode(p), oe = !1, G = o.md.block.ruler.getRules("list"), S = o.parentType, o.parentType = "list"; Z < c; ) {
      for (te = D, w = o.eMarks[Z], _ = B = o.sCount[Z] + D - (o.bMarks[Z] + o.tShift[Z]); te < w; ) {
        if (u = o.src.charCodeAt(te), u === 9)
          B += 4 - (B + o.bsCount[Z]) % 4;
        else if (u === 32)
          B++;
        else
          break;
        te++;
      }
      if (l = te, l >= w ? h = 1 : h = B - _, h > 4 && (h = 1), d = _ + h, fe = o.push("list_item_open", "li", 1), fe.markup = String.fromCharCode(p), fe.map = A = [Z, 0], y && (fe.info = o.src.slice(Q, D - 1)), I = o.tight, P = o.tShift[Z], R = o.sCount[Z], C = o.listIndent, o.listIndent = o.blkIndent, o.blkIndent = d, o.tight = !0, o.tShift[Z] = l - o.bMarks[Z], o.sCount[Z] = B, l >= w && o.isEmpty(Z + 1) ? o.line = Math.min(o.line + 2, c) : o.md.block.tokenize(o, Z, c, !0), (!o.tight || oe) && (we = !1), oe = o.line - Z > 1 && o.isEmpty(o.line - 1), o.blkIndent = o.listIndent, o.listIndent = C, o.tShift[Z] = P, o.sCount[Z] = R, o.tight = I, fe = o.push("list_item_close", "li", -1), fe.markup = String.fromCharCode(p), Z = o.line, A[1] = Z, Z >= c || o.sCount[Z] < o.blkIndent || o.sCount[Z] - o.blkIndent >= 4)
        break;
      for (le = !1, f = 0, v = G.length; f < v; f++)
        if (G[f](o, Z, c, !0)) {
          le = !0;
          break;
        }
      if (le)
        break;
      if (y) {
        if (D = n(o, Z), D < 0)
          break;
        Q = o.bMarks[Z] + o.tShift[Z];
      } else if (D = t(o, Z), D < 0)
        break;
      if (p !== o.src.charCodeAt(D - 1))
        break;
    }
    return y ? fe = o.push("ordered_list_close", "ol", -1) : fe = o.push("bullet_list_close", "ul", -1), fe.markup = String.fromCharCode(p), k[1] = Z, o.line = Z, o.parentType = S, we && s(o, b), !0;
  }, Zr;
}
var Wr, Yc;
function AV() {
  if (Yc) return Wr;
  Yc = 1;
  var e = ye().normalizeReference, t = ye().isSpace;
  return Wr = function(s, r, o, i) {
    var c, a, u, l, f, d, h, _, y, A, v, k, b, p, E, w, B = 0, C = s.bMarks[r] + s.tShift[r], S = s.eMarks[r], R = r + 1;
    if (s.sCount[r] - s.blkIndent >= 4 || s.src.charCodeAt(C) !== 91)
      return !1;
    for (; ++C < S; )
      if (s.src.charCodeAt(C) === 93 && s.src.charCodeAt(C - 1) !== 92) {
        if (C + 1 === S || s.src.charCodeAt(C + 1) !== 58)
          return !1;
        break;
      }
    for (l = s.lineMax, E = s.md.block.ruler.getRules("reference"), A = s.parentType, s.parentType = "reference"; R < l && !s.isEmpty(R); R++)
      if (!(s.sCount[R] - s.blkIndent > 3) && !(s.sCount[R] < 0)) {
        for (p = !1, d = 0, h = E.length; d < h; d++)
          if (E[d](s, R, l, !0)) {
            p = !0;
            break;
          }
        if (p)
          break;
      }
    for (b = s.getLines(r, R, s.blkIndent, !1).trim(), S = b.length, C = 1; C < S; C++) {
      if (c = b.charCodeAt(C), c === 91)
        return !1;
      if (c === 93) {
        y = C;
        break;
      } else c === 10 ? B++ : c === 92 && (C++, C < S && b.charCodeAt(C) === 10 && B++);
    }
    if (y < 0 || b.charCodeAt(y + 1) !== 58)
      return !1;
    for (C = y + 2; C < S; C++)
      if (c = b.charCodeAt(C), c === 10)
        B++;
      else if (!t(c)) break;
    if (v = s.md.helpers.parseLinkDestination(b, C, S), !v.ok || (f = s.md.normalizeLink(v.str), !s.md.validateLink(f)))
      return !1;
    for (C = v.pos, B += v.lines, a = C, u = B, k = C; C < S; C++)
      if (c = b.charCodeAt(C), c === 10)
        B++;
      else if (!t(c)) break;
    for (v = s.md.helpers.parseLinkTitle(b, C, S), C < S && k !== C && v.ok ? (w = v.str, C = v.pos, B += v.lines) : (w = "", C = a, B = u); C < S && (c = b.charCodeAt(C), !!t(c)); )
      C++;
    if (C < S && b.charCodeAt(C) !== 10 && w)
      for (w = "", C = a, B = u; C < S && (c = b.charCodeAt(C), !!t(c)); )
        C++;
    return C < S && b.charCodeAt(C) !== 10 || (_ = e(b.slice(1, y)), !_) ? !1 : (i || (typeof s.env.references > "u" && (s.env.references = {}), typeof s.env.references[_] > "u" && (s.env.references[_] = { title: w, href: f }), s.parentType = A, s.line = r + B + 1), !0);
  }, Wr;
}
var Jr, Xc;
function SV() {
  return Xc || (Xc = 1, Jr = [
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
  ]), Jr;
}
var ps = {}, Qc;
function gu() {
  if (Qc) return ps;
  Qc = 1;
  var e = "[a-zA-Z_:][a-zA-Z0-9:._-]*", t = "[^\"'=<>`\\x00-\\x20]+", n = "'[^']*'", s = '"[^"]*"', r = "(?:" + t + "|" + n + "|" + s + ")", o = "(?:\\s+" + e + "(?:\\s*=\\s*" + r + ")?)", i = "<[A-Za-z][A-Za-z0-9\\-]*" + o + "*\\s*\\/?>", c = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", a = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->", u = "<[?][\\s\\S]*?[?]>", l = "<![A-Z]+\\s+[^>]*>", f = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", d = new RegExp("^(?:" + i + "|" + c + "|" + a + "|" + u + "|" + l + "|" + f + ")"), h = new RegExp("^(?:" + i + "|" + c + ")");
  return ps.HTML_TAG_RE = d, ps.HTML_OPEN_CLOSE_TAG_RE = h, ps;
}
var Yr, ea;
function TV() {
  if (ea) return Yr;
  ea = 1;
  var e = SV(), t = gu().HTML_OPEN_CLOSE_TAG_RE, n = [
    [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
    [/^<!--/, /-->/, !0],
    [/^<\?/, /\?>/, !0],
    [/^<![A-Z]/, />/, !0],
    [/^<!\[CDATA\[/, /\]\]>/, !0],
    [new RegExp("^</?(" + e.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
    [new RegExp(t.source + "\\s*$"), /^$/, !1]
  ];
  return Yr = function(r, o, i, c) {
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
  }, Yr;
}
var Xr, ta;
function RV() {
  if (ta) return Xr;
  ta = 1;
  var e = ye().isSpace;
  return Xr = function(n, s, r, o) {
    var i, c, a, u, l = n.bMarks[s] + n.tShift[s], f = n.eMarks[s];
    if (n.sCount[s] - n.blkIndent >= 4 || (i = n.src.charCodeAt(l), i !== 35 || l >= f))
      return !1;
    for (c = 1, i = n.src.charCodeAt(++l); i === 35 && l < f && c <= 6; )
      c++, i = n.src.charCodeAt(++l);
    return c > 6 || l < f && !e(i) ? !1 : (o || (f = n.skipSpacesBack(f, l), a = n.skipCharsBack(f, 35, l), a > l && e(n.src.charCodeAt(a - 1)) && (f = a), n.line = s + 1, u = n.push("heading_open", "h" + String(c), 1), u.markup = "########".slice(0, c), u.map = [s, n.line], u = n.push("inline", "", 0), u.content = n.src.slice(l, f).trim(), u.map = [s, n.line], u.children = [], u = n.push("heading_close", "h" + String(c), -1), u.markup = "########".slice(0, c)), !0);
  }, Xr;
}
var Qr, na;
function DV() {
  return na || (na = 1, Qr = function(t, n, s) {
    var r, o, i, c, a, u, l, f, d, h = n + 1, _, y = t.md.block.ruler.getRules("paragraph");
    if (t.sCount[n] - t.blkIndent >= 4)
      return !1;
    for (_ = t.parentType, t.parentType = "paragraph"; h < s && !t.isEmpty(h); h++)
      if (!(t.sCount[h] - t.blkIndent > 3)) {
        if (t.sCount[h] >= t.blkIndent && (u = t.bMarks[h] + t.tShift[h], l = t.eMarks[h], u < l && (d = t.src.charCodeAt(u), (d === 45 || d === 61) && (u = t.skipChars(u, d), u = t.skipSpaces(u), u >= l)))) {
          f = d === 61 ? 1 : 2;
          break;
        }
        if (!(t.sCount[h] < 0)) {
          for (o = !1, i = 0, c = y.length; i < c; i++)
            if (y[i](t, h, s, !0)) {
              o = !0;
              break;
            }
          if (o)
            break;
        }
      }
    return f ? (r = t.getLines(n, h, t.blkIndent, !1).trim(), t.line = h + 1, a = t.push("heading_open", "h" + String(f), 1), a.markup = String.fromCharCode(d), a.map = [n, t.line], a = t.push("inline", "", 0), a.content = r, a.map = [n, t.line - 1], a.children = [], a = t.push("heading_close", "h" + String(f), -1), a.markup = String.fromCharCode(d), t.parentType = _, !0) : !1;
  }), Qr;
}
var eo, sa;
function MV() {
  return sa || (sa = 1, eo = function(t, n, s) {
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
  }), eo;
}
var to, ra;
function IV() {
  if (ra) return to;
  ra = 1;
  var e = ci(), t = ye().isSpace;
  function n(s, r, o, i) {
    var c, a, u, l, f, d, h, _;
    for (this.src = s, this.md = r, this.env = o, this.tokens = i, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0, this.result = "", a = this.src, _ = !1, u = l = d = h = 0, f = a.length; l < f; l++) {
      if (c = a.charCodeAt(l), !_)
        if (t(c)) {
          d++, c === 9 ? h += 4 - h % 4 : h++;
          continue;
        } else
          _ = !0;
      (c === 10 || l === f - 1) && (c !== 10 && l++, this.bMarks.push(u), this.eMarks.push(l), this.tShift.push(d), this.sCount.push(h), this.bsCount.push(0), _ = !1, d = 0, h = 0, u = l + 1);
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
    var a, u, l, f, d, h, _, y = r;
    if (r >= o)
      return "";
    for (h = new Array(o - r), a = 0; y < o; y++, a++) {
      for (u = 0, _ = f = this.bMarks[y], y + 1 < o || c ? d = this.eMarks[y] + 1 : d = this.eMarks[y]; f < d && u < i; ) {
        if (l = this.src.charCodeAt(f), t(l))
          l === 9 ? u += 4 - (u + this.bsCount[y]) % 4 : u++;
        else if (f - _ < this.tShift[y])
          u++;
        else
          break;
        f++;
      }
      u > i ? h[a] = new Array(u - i + 1).join(" ") + this.src.slice(f, d) : h[a] = this.src.slice(f, d);
    }
    return h.join("");
  }, n.prototype.Token = e, to = n, to;
}
var no, oa;
function NV() {
  if (oa) return no;
  oa = 1;
  var e = ii(), t = [
    // First 2 params - rule name & source. Secondary array - list of rules,
    // which can be terminated by this one.
    ["table", xV(), ["paragraph", "reference"]],
    ["code", yV()],
    ["fence", kV(), ["paragraph", "reference", "blockquote", "list"]],
    ["blockquote", EV(), ["paragraph", "reference", "blockquote", "list"]],
    ["hr", wV(), ["paragraph", "reference", "blockquote", "list"]],
    ["list", CV(), ["paragraph", "reference", "blockquote"]],
    ["reference", AV()],
    ["html_block", TV(), ["paragraph", "reference", "blockquote"]],
    ["heading", RV(), ["paragraph", "reference", "blockquote"]],
    ["lheading", DV()],
    ["paragraph", MV()]
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
  }, n.prototype.State = IV(), no = n, no;
}
var so, ia;
function OV() {
  if (ia) return so;
  ia = 1;
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
  return so = function(n, s) {
    for (var r = n.pos; r < n.posMax && !e(n.src.charCodeAt(r)); )
      r++;
    return r === n.pos ? !1 : (s || (n.pending += n.src.slice(n.pos, r)), n.pos = r, !0);
  }, so;
}
var ro, ca;
function LV() {
  if (ca) return ro;
  ca = 1;
  var e = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
  return ro = function(n, s) {
    var r, o, i, c, a, u, l, f;
    return !n.md.options.linkify || n.linkLevel > 0 || (r = n.pos, o = n.posMax, r + 3 > o) || n.src.charCodeAt(r) !== 58 || n.src.charCodeAt(r + 1) !== 47 || n.src.charCodeAt(r + 2) !== 47 || (i = n.pending.match(e), !i) || (c = i[1], a = n.md.linkify.matchAtStart(n.src.slice(r - c.length)), !a) || (u = a.url, u.length <= c.length) || (u = u.replace(/\*+$/, ""), l = n.md.normalizeLink(u), !n.md.validateLink(l)) ? !1 : (s || (n.pending = n.pending.slice(0, -c.length), f = n.push("link_open", "a", 1), f.attrs = [["href", l]], f.markup = "linkify", f.info = "auto", f = n.push("text", "", 0), f.content = n.md.normalizeLinkText(u), f = n.push("link_close", "a", -1), f.markup = "linkify", f.info = "auto"), n.pos += u.length - c.length, !0);
  }, ro;
}
var oo, aa;
function FV() {
  if (aa) return oo;
  aa = 1;
  var e = ye().isSpace;
  return oo = function(n, s) {
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
  }, oo;
}
var io, la;
function qV() {
  if (la) return io;
  la = 1;
  for (var e = ye().isSpace, t = [], n = 0; n < 256; n++)
    t.push(0);
  return "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(s) {
    t[s.charCodeAt(0)] = 1;
  }), io = function(r, o) {
    var i, c, a, u, l, f = r.pos, d = r.posMax;
    if (r.src.charCodeAt(f) !== 92 || (f++, f >= d)) return !1;
    if (i = r.src.charCodeAt(f), i === 10) {
      for (o || r.push("hardbreak", "br", 0), f++; f < d && (i = r.src.charCodeAt(f), !!e(i)); )
        f++;
      return r.pos = f, !0;
    }
    return u = r.src[f], i >= 55296 && i <= 56319 && f + 1 < d && (c = r.src.charCodeAt(f + 1), c >= 56320 && c <= 57343 && (u += r.src[f + 1], f++)), a = "\\" + u, o || (l = r.push("text_special", "", 0), i < 256 && t[i] !== 0 ? l.content = u : l.content = a, l.markup = a, l.info = "escape"), r.pos = f + 1, !0;
  }, io;
}
var co, ua;
function PV() {
  return ua || (ua = 1, co = function(t, n) {
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
  }), co;
}
var gs = {}, fa;
function ha() {
  if (fa) return gs;
  fa = 1, gs.tokenize = function(n, s) {
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
  return gs.postProcess = function(n) {
    var s, r = n.tokens_meta, o = n.tokens_meta.length;
    for (e(n, n.delimiters), s = 0; s < o; s++)
      r[s] && r[s].delimiters && e(n, r[s].delimiters);
  }, gs;
}
var ms = {}, da;
function pa() {
  if (da) return ms;
  da = 1, ms.tokenize = function(n, s) {
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
  return ms.postProcess = function(n) {
    var s, r = n.tokens_meta, o = n.tokens_meta.length;
    for (e(n, n.delimiters), s = 0; s < o; s++)
      r[s] && r[s].delimiters && e(n, r[s].delimiters);
  }, ms;
}
var ao, ga;
function BV() {
  if (ga) return ao;
  ga = 1;
  var e = ye().normalizeReference, t = ye().isSpace;
  return ao = function(s, r) {
    var o, i, c, a, u, l, f, d, h, _ = "", y = "", A = s.pos, v = s.posMax, k = s.pos, b = !0;
    if (s.src.charCodeAt(s.pos) !== 91 || (u = s.pos + 1, a = s.md.helpers.parseLinkLabel(s, s.pos, !0), a < 0))
      return !1;
    if (l = a + 1, l < v && s.src.charCodeAt(l) === 40) {
      for (b = !1, l++; l < v && (i = s.src.charCodeAt(l), !(!t(i) && i !== 10)); l++)
        ;
      if (l >= v)
        return !1;
      if (k = l, f = s.md.helpers.parseLinkDestination(s.src, l, s.posMax), f.ok) {
        for (_ = s.md.normalizeLink(f.str), s.md.validateLink(_) ? l = f.pos : _ = "", k = l; l < v && (i = s.src.charCodeAt(l), !(!t(i) && i !== 10)); l++)
          ;
        if (f = s.md.helpers.parseLinkTitle(s.src, l, s.posMax), l < v && k !== l && f.ok)
          for (y = f.str, l = f.pos; l < v && (i = s.src.charCodeAt(l), !(!t(i) && i !== 10)); l++)
            ;
      }
      (l >= v || s.src.charCodeAt(l) !== 41) && (b = !0), l++;
    }
    if (b) {
      if (typeof s.env.references > "u")
        return !1;
      if (l < v && s.src.charCodeAt(l) === 91 ? (k = l + 1, l = s.md.helpers.parseLinkLabel(s, l), l >= 0 ? c = s.src.slice(k, l++) : l = a + 1) : l = a + 1, c || (c = s.src.slice(u, a)), d = s.env.references[e(c)], !d)
        return s.pos = A, !1;
      _ = d.href, y = d.title;
    }
    return r || (s.pos = u, s.posMax = a, h = s.push("link_open", "a", 1), h.attrs = o = [["href", _]], y && o.push(["title", y]), s.linkLevel++, s.md.inline.tokenize(s), s.linkLevel--, h = s.push("link_close", "a", -1)), s.pos = l, s.posMax = v, !0;
  }, ao;
}
var lo, ma;
function $V() {
  if (ma) return lo;
  ma = 1;
  var e = ye().normalizeReference, t = ye().isSpace;
  return lo = function(s, r) {
    var o, i, c, a, u, l, f, d, h, _, y, A, v, k = "", b = s.pos, p = s.posMax;
    if (s.src.charCodeAt(s.pos) !== 33 || s.src.charCodeAt(s.pos + 1) !== 91 || (l = s.pos + 2, u = s.md.helpers.parseLinkLabel(s, s.pos + 1, !1), u < 0))
      return !1;
    if (f = u + 1, f < p && s.src.charCodeAt(f) === 40) {
      for (f++; f < p && (i = s.src.charCodeAt(f), !(!t(i) && i !== 10)); f++)
        ;
      if (f >= p)
        return !1;
      for (v = f, h = s.md.helpers.parseLinkDestination(s.src, f, s.posMax), h.ok && (k = s.md.normalizeLink(h.str), s.md.validateLink(k) ? f = h.pos : k = ""), v = f; f < p && (i = s.src.charCodeAt(f), !(!t(i) && i !== 10)); f++)
        ;
      if (h = s.md.helpers.parseLinkTitle(s.src, f, s.posMax), f < p && v !== f && h.ok)
        for (_ = h.str, f = h.pos; f < p && (i = s.src.charCodeAt(f), !(!t(i) && i !== 10)); f++)
          ;
      else
        _ = "";
      if (f >= p || s.src.charCodeAt(f) !== 41)
        return s.pos = b, !1;
      f++;
    } else {
      if (typeof s.env.references > "u")
        return !1;
      if (f < p && s.src.charCodeAt(f) === 91 ? (v = f + 1, f = s.md.helpers.parseLinkLabel(s, f), f >= 0 ? a = s.src.slice(v, f++) : f = u + 1) : f = u + 1, a || (a = s.src.slice(l, u)), d = s.env.references[e(a)], !d)
        return s.pos = b, !1;
      k = d.href, _ = d.title;
    }
    return r || (c = s.src.slice(l, u), s.md.inline.parse(
      c,
      s.md,
      s.env,
      A = []
    ), y = s.push("image", "img", 0), y.attrs = o = [["src", k], ["alt", ""]], y.children = A, y.content = c, _ && o.push(["title", _])), s.pos = f, s.posMax = p, !0;
  }, lo;
}
var uo, _a;
function zV() {
  if (_a) return uo;
  _a = 1;
  var e = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, t = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
  return uo = function(s, r) {
    var o, i, c, a, u, l, f = s.pos;
    if (s.src.charCodeAt(f) !== 60)
      return !1;
    for (u = s.pos, l = s.posMax; ; ) {
      if (++f >= l || (a = s.src.charCodeAt(f), a === 60)) return !1;
      if (a === 62) break;
    }
    return o = s.src.slice(u + 1, f), t.test(o) ? (i = s.md.normalizeLink(o), s.md.validateLink(i) ? (r || (c = s.push("link_open", "a", 1), c.attrs = [["href", i]], c.markup = "autolink", c.info = "auto", c = s.push("text", "", 0), c.content = s.md.normalizeLinkText(o), c = s.push("link_close", "a", -1), c.markup = "autolink", c.info = "auto"), s.pos += o.length + 2, !0) : !1) : e.test(o) ? (i = s.md.normalizeLink("mailto:" + o), s.md.validateLink(i) ? (r || (c = s.push("link_open", "a", 1), c.attrs = [["href", i]], c.markup = "autolink", c.info = "auto", c = s.push("text", "", 0), c.content = s.md.normalizeLinkText(o), c = s.push("link_close", "a", -1), c.markup = "autolink", c.info = "auto"), s.pos += o.length + 2, !0) : !1) : !1;
  }, uo;
}
var fo, ba;
function UV() {
  if (ba) return fo;
  ba = 1;
  var e = gu().HTML_TAG_RE;
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
  return fo = function(o, i) {
    var c, a, u, l, f = o.pos;
    return !o.md.options.html || (u = o.posMax, o.src.charCodeAt(f) !== 60 || f + 2 >= u) || (c = o.src.charCodeAt(f + 1), c !== 33 && c !== 63 && c !== 47 && !s(c)) || (a = o.src.slice(f).match(e), !a) ? !1 : (i || (l = o.push("html_inline", "", 0), l.content = a[0], t(l.content) && o.linkLevel++, n(l.content) && o.linkLevel--), o.pos += a[0].length, !0);
  }, fo;
}
var ho, va;
function HV() {
  if (va) return ho;
  va = 1;
  var e = uu(), t = ye().has, n = ye().isValidEntityCode, s = ye().fromCodePoint, r = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, o = /^&([a-z][a-z0-9]{1,31});/i;
  return ho = function(c, a) {
    var u, l, f, d, h = c.pos, _ = c.posMax;
    if (c.src.charCodeAt(h) !== 38 || h + 1 >= _) return !1;
    if (u = c.src.charCodeAt(h + 1), u === 35) {
      if (f = c.src.slice(h).match(r), f)
        return a || (l = f[1][0].toLowerCase() === "x" ? parseInt(f[1].slice(1), 16) : parseInt(f[1], 10), d = c.push("text_special", "", 0), d.content = n(l) ? s(l) : s(65533), d.markup = f[0], d.info = "entity"), c.pos += f[0].length, !0;
    } else if (f = c.src.slice(h).match(o), f && t(e, f[1]))
      return a || (d = c.push("text_special", "", 0), d.content = e[f[1]], d.markup = f[0], d.info = "entity"), c.pos += f[0].length, !0;
    return !1;
  }, ho;
}
var po, xa;
function jV() {
  if (xa) return po;
  xa = 1;
  function e(t) {
    var n, s, r, o, i, c, a, u, l = {}, f = t.length;
    if (f) {
      var d = 0, h = -2, _ = [];
      for (n = 0; n < f; n++)
        if (r = t[n], _.push(0), (t[d].marker !== r.marker || h !== r.token - 1) && (d = n), h = r.token, r.length = r.length || 0, !!r.close) {
          for (l.hasOwnProperty(r.marker) || (l[r.marker] = [-1, -1, -1, -1, -1, -1]), i = l[r.marker][(r.open ? 3 : 0) + r.length % 3], s = d - _[d] - 1, c = s; s > i; s -= _[s] + 1)
            if (o = t[s], o.marker === r.marker && o.open && o.end < 0 && (a = !1, (o.close || r.open) && (o.length + r.length) % 3 === 0 && (o.length % 3 !== 0 || r.length % 3 !== 0) && (a = !0), !a)) {
              u = s > 0 && !t[s - 1].open ? _[s - 1] + 1 : 0, _[n] = n - s + u, _[s] = u, r.open = !1, o.end = n, o.close = !1, c = -1, h = -2;
              break;
            }
          c !== -1 && (l[r.marker][(r.open ? 3 : 0) + (r.length || 0) % 3] = c);
        }
    }
  }
  return po = function(n) {
    var s, r = n.tokens_meta, o = n.tokens_meta.length;
    for (e(n.delimiters), s = 0; s < o; s++)
      r[s] && r[s].delimiters && e(r[s].delimiters);
  }, po;
}
var go, ya;
function VV() {
  return ya || (ya = 1, go = function(t) {
    var n, s, r = 0, o = t.tokens, i = t.tokens.length;
    for (n = s = 0; n < i; n++)
      o[n].nesting < 0 && r--, o[n].level = r, o[n].nesting > 0 && r++, o[n].type === "text" && n + 1 < i && o[n + 1].type === "text" ? o[n + 1].content = o[n].content + o[n + 1].content : (n !== s && (o[s] = o[n]), s++);
    n !== s && (o.length = s);
  }), go;
}
var mo, ka;
function KV() {
  if (ka) return mo;
  ka = 1;
  var e = ci(), t = ye().isWhiteSpace, n = ye().isPunctChar, s = ye().isMdAsciiPunct;
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
    var c = o, a, u, l, f, d, h, _, y, A, v = !0, k = !0, b = this.posMax, p = this.src.charCodeAt(o);
    for (a = o > 0 ? this.src.charCodeAt(o - 1) : 32; c < b && this.src.charCodeAt(c) === p; )
      c++;
    return l = c - o, u = c < b ? this.src.charCodeAt(c) : 32, _ = s(a) || n(String.fromCharCode(a)), A = s(u) || n(String.fromCharCode(u)), h = t(a), y = t(u), y ? v = !1 : A && (h || _ || (v = !1)), h ? k = !1 : _ && (y || A || (k = !1)), i ? (f = v, d = k) : (f = v && (!k || _), d = k && (!v || A)), {
      can_open: f,
      can_close: d,
      length: l
    };
  }, r.prototype.Token = e, mo = r, mo;
}
var _o, Ea;
function GV() {
  if (Ea) return _o;
  Ea = 1;
  var e = ii(), t = [
    ["text", OV()],
    ["linkify", LV()],
    ["newline", FV()],
    ["escape", qV()],
    ["backticks", PV()],
    ["strikethrough", ha().tokenize],
    ["emphasis", pa().tokenize],
    ["link", BV()],
    ["image", $V()],
    ["autolink", zV()],
    ["html_inline", UV()],
    ["entity", HV()]
  ], n = [
    ["balance_pairs", jV()],
    ["strikethrough", ha().postProcess],
    ["emphasis", pa().postProcess],
    // rules for pairs separate '**' into its own text tokens, which may be left unused,
    // rule below merges unused segments back with the rest of the text
    ["fragments_join", VV()]
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
  }, s.prototype.State = KV(), _o = s, _o;
}
var bo, wa;
function ZV() {
  return wa || (wa = 1, bo = function(e) {
    var t = {};
    e = e || {}, t.src_Any = hu().source, t.src_Cc = du().source, t.src_Z = pu().source, t.src_P = oi().source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
    var n = "[><｜]";
    return t.src_pseudo_letter = "(?:(?!" + n + "|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|" + n + "|" + t.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + n + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = // Allow letters & digits (http://test1)
    "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|" + n + '|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t;
  }), bo;
}
var vo, Ca;
function WV() {
  if (Ca) return vo;
  Ca = 1;
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
  function _() {
    return function(b, p) {
      p.normalize(b);
    };
  }
  function y(b) {
    var p = b.re = ZV()(b.__opts__), E = b.__tlds__.slice();
    b.onCompile(), b.__tlds_replaced__ || E.push(l), E.push(p.src_xn), p.src_tlds = E.join("|");
    function w(R) {
      return R.replace("%TLDS%", p.src_tlds);
    }
    p.email_fuzzy = RegExp(w(p.tpl_email_fuzzy), "i"), p.link_fuzzy = RegExp(w(p.tpl_link_fuzzy), "i"), p.link_no_ip_fuzzy = RegExp(w(p.tpl_link_no_ip_fuzzy), "i"), p.host_fuzzy_test = RegExp(w(p.tpl_host_fuzzy_test), "i");
    var B = [];
    b.__compiled__ = {};
    function C(R, P) {
      throw new Error('(LinkifyIt) Invalid schema "' + R + '": ' + P);
    }
    Object.keys(b.__schemas__).forEach(function(R) {
      var P = b.__schemas__[R];
      if (P !== null) {
        var I = { validate: null, link: null };
        if (b.__compiled__[R] = I, s(P)) {
          r(P.validate) ? I.validate = h(P.validate) : o(P.validate) ? I.validate = P.validate : C(R, P), o(P.normalize) ? I.normalize = P.normalize : P.normalize ? C(R, P) : I.normalize = _();
          return;
        }
        if (n(P)) {
          B.push(R);
          return;
        }
        C(R, P);
      }
    }), B.forEach(function(R) {
      b.__compiled__[b.__schemas__[R]] && (b.__compiled__[R].validate = b.__compiled__[b.__schemas__[R]].validate, b.__compiled__[R].normalize = b.__compiled__[b.__schemas__[R]].normalize);
    }), b.__compiled__[""] = { validate: null, normalize: _() };
    var S = Object.keys(b.__compiled__).filter(function(R) {
      return R.length > 0 && b.__compiled__[R];
    }).map(i).join("|");
    b.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + p.src_ZPCc + "))(" + S + ")", "i"), b.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + p.src_ZPCc + "))(" + S + ")", "ig"), b.re.schema_at_start = RegExp("^" + b.re.schema_search.source, "i"), b.re.pretest = RegExp(
      "(" + b.re.schema_test.source + ")|(" + b.re.host_fuzzy_test.source + ")|@",
      "i"
    ), d(b);
  }
  function A(b, p) {
    var E = b.__index__, w = b.__last_index__, B = b.__text_cache__.slice(E, w);
    this.schema = b.__schema__.toLowerCase(), this.index = E + p, this.lastIndex = w + p, this.raw = B, this.text = B, this.url = B;
  }
  function v(b, p) {
    var E = new A(b, p);
    return b.__compiled__[E.schema].normalize(E, b), E;
  }
  function k(b, p) {
    if (!(this instanceof k))
      return new k(b, p);
    p || a(b) && (p = b, b = {}), this.__opts__ = e({}, c, p), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = e({}, u, b), this.__compiled__ = {}, this.__tlds__ = f, this.__tlds_replaced__ = !1, this.re = {}, y(this);
  }
  return k.prototype.add = function(p, E) {
    return this.__schemas__[p] = E, y(this), this;
  }, k.prototype.set = function(p) {
    return this.__opts__ = e(this.__opts__, p), this;
  }, k.prototype.test = function(p) {
    if (this.__text_cache__ = p, this.__index__ = -1, !p.length)
      return !1;
    var E, w, B, C, S, R, P, I, te;
    if (this.re.schema_test.test(p)) {
      for (P = this.re.schema_search, P.lastIndex = 0; (E = P.exec(p)) !== null; )
        if (C = this.testSchemaAt(p, E[2], P.lastIndex), C) {
          this.__schema__ = E[2], this.__index__ = E.index + E[1].length, this.__last_index__ = E.index + E[0].length + C;
          break;
        }
    }
    return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (I = p.search(this.re.host_fuzzy_test), I >= 0 && (this.__index__ < 0 || I < this.__index__) && (w = p.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (S = w.index + w[1].length, (this.__index__ < 0 || S < this.__index__) && (this.__schema__ = "", this.__index__ = S, this.__last_index__ = w.index + w[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (te = p.indexOf("@"), te >= 0 && (B = p.match(this.re.email_fuzzy)) !== null && (S = B.index + B[1].length, R = B.index + B[0].length, (this.__index__ < 0 || S < this.__index__ || S === this.__index__ && R > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = S, this.__last_index__ = R))), this.__index__ >= 0;
  }, k.prototype.pretest = function(p) {
    return this.re.pretest.test(p);
  }, k.prototype.testSchemaAt = function(p, E, w) {
    return this.__compiled__[E.toLowerCase()] ? this.__compiled__[E.toLowerCase()].validate(p, w, this) : 0;
  }, k.prototype.match = function(p) {
    var E = 0, w = [];
    this.__index__ >= 0 && this.__text_cache__ === p && (w.push(v(this, E)), E = this.__last_index__);
    for (var B = E ? p.slice(E) : p; this.test(B); )
      w.push(v(this, E)), B = B.slice(this.__last_index__), E += this.__last_index__;
    return w.length ? w : null;
  }, k.prototype.matchAtStart = function(p) {
    if (this.__text_cache__ = p, this.__index__ = -1, !p.length) return null;
    var E = this.re.schema_at_start.exec(p);
    if (!E) return null;
    var w = this.testSchemaAt(p, E[2], E[0].length);
    return w ? (this.__schema__ = E[2], this.__index__ = E.index + E[1].length, this.__last_index__ = E.index + E[0].length + w, v(this, 0)) : null;
  }, k.prototype.tlds = function(p, E) {
    return p = Array.isArray(p) ? p : [p], E ? (this.__tlds__ = this.__tlds__.concat(p).sort().filter(function(w, B, C) {
      return w !== C[B - 1];
    }).reverse(), y(this), this) : (this.__tlds__ = p.slice(), this.__tlds_replaced__ = !0, y(this), this);
  }, k.prototype.normalize = function(p) {
    p.schema || (p.url = "http://" + p.url), p.schema === "mailto:" && !/^mailto:/i.test(p.url) && (p.url = "mailto:" + p.url);
  }, k.prototype.onCompile = function() {
  }, vo = k, vo;
}
const Sn = 2147483647, Ct = 36, ai = 1, Xn = 26, JV = 38, YV = 700, mu = 72, _u = 128, bu = "-", XV = /^xn--/, QV = /[^\0-\x7F]/, e7 = /[\x2E\u3002\uFF0E\uFF61]/g, t7 = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, xo = Ct - ai, At = Math.floor, yo = String.fromCharCode;
function jt(e) {
  throw new RangeError(t7[e]);
}
function n7(e, t) {
  const n = [];
  let s = e.length;
  for (; s--; )
    n[s] = t(e[s]);
  return n;
}
function vu(e, t) {
  const n = e.split("@");
  let s = "";
  n.length > 1 && (s = n[0] + "@", e = n[1]), e = e.replace(e7, ".");
  const r = e.split("."), o = n7(r, t).join(".");
  return s + o;
}
function li(e) {
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
const xu = (e) => String.fromCodePoint(...e), s7 = function(e) {
  return e >= 48 && e < 58 ? 26 + (e - 48) : e >= 65 && e < 91 ? e - 65 : e >= 97 && e < 123 ? e - 97 : Ct;
}, Aa = function(e, t) {
  return e + 22 + 75 * (e < 26) - ((t != 0) << 5);
}, yu = function(e, t, n) {
  let s = 0;
  for (e = n ? At(e / YV) : e >> 1, e += At(e / t); e > xo * Xn >> 1; s += Ct)
    e = At(e / xo);
  return At(s + (xo + 1) * e / (e + JV));
}, ui = function(e) {
  const t = [], n = e.length;
  let s = 0, r = _u, o = mu, i = e.lastIndexOf(bu);
  i < 0 && (i = 0);
  for (let c = 0; c < i; ++c)
    e.charCodeAt(c) >= 128 && jt("not-basic"), t.push(e.charCodeAt(c));
  for (let c = i > 0 ? i + 1 : 0; c < n; ) {
    const a = s;
    for (let l = 1, f = Ct; ; f += Ct) {
      c >= n && jt("invalid-input");
      const d = s7(e.charCodeAt(c++));
      d >= Ct && jt("invalid-input"), d > At((Sn - s) / l) && jt("overflow"), s += d * l;
      const h = f <= o ? ai : f >= o + Xn ? Xn : f - o;
      if (d < h)
        break;
      const _ = Ct - h;
      l > At(Sn / _) && jt("overflow"), l *= _;
    }
    const u = t.length + 1;
    o = yu(s - a, u, a == 0), At(s / u) > Sn - r && jt("overflow"), r += At(s / u), s %= u, t.splice(s++, 0, r);
  }
  return String.fromCodePoint(...t);
}, fi = function(e) {
  const t = [];
  e = li(e);
  const n = e.length;
  let s = _u, r = 0, o = mu;
  for (const a of e)
    a < 128 && t.push(yo(a));
  const i = t.length;
  let c = i;
  for (i && t.push(bu); c < n; ) {
    let a = Sn;
    for (const l of e)
      l >= s && l < a && (a = l);
    const u = c + 1;
    a - s > At((Sn - r) / u) && jt("overflow"), r += (a - s) * u, s = a;
    for (const l of e)
      if (l < s && ++r > Sn && jt("overflow"), l === s) {
        let f = r;
        for (let d = Ct; ; d += Ct) {
          const h = d <= o ? ai : d >= o + Xn ? Xn : d - o;
          if (f < h)
            break;
          const _ = f - h, y = Ct - h;
          t.push(
            yo(Aa(h + _ % y, 0))
          ), f = At(_ / y);
        }
        t.push(yo(Aa(f, 0))), o = yu(r, u, c === i), r = 0, ++c;
      }
    ++r, ++s;
  }
  return t.join("");
}, ku = function(e) {
  return vu(e, function(t) {
    return XV.test(t) ? ui(t.slice(4).toLowerCase()) : t;
  });
}, Eu = function(e) {
  return vu(e, function(t) {
    return QV.test(t) ? "xn--" + fi(t) : t;
  });
}, r7 = {
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
    decode: li,
    encode: xu
  },
  decode: ui,
  encode: fi,
  toASCII: Eu,
  toUnicode: ku
}, o7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: ui,
  default: r7,
  encode: fi,
  toASCII: Eu,
  toUnicode: ku,
  ucs2decode: li,
  ucs2encode: xu
}, Symbol.toStringTag, { value: "Module" })), i7 = /* @__PURE__ */ rp(o7);
var ko, Sa;
function c7() {
  return Sa || (Sa = 1, ko = {
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
  }), ko;
}
var Eo, Ta;
function a7() {
  return Ta || (Ta = 1, Eo = {
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
  }), Eo;
}
var wo, Ra;
function l7() {
  return Ra || (Ra = 1, wo = {
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
  }), wo;
}
var Co, Da;
function u7() {
  if (Da) return Co;
  Da = 1;
  var e = ye(), t = lV(), n = uV(), s = vV(), r = NV(), o = GV(), i = WV(), c = fu(), a = i7, u = {
    default: c7(),
    zero: a7(),
    commonmark: l7()
  }, l = /^(vbscript|javascript|file|data):/, f = /^data:image\/(gif|png|jpeg|webp);/;
  function d(v) {
    var k = v.trim().toLowerCase();
    return l.test(k) ? !!f.test(k) : !0;
  }
  var h = ["http:", "https:", "mailto:"];
  function _(v) {
    var k = c.parse(v, !0);
    if (k.hostname && (!k.protocol || h.indexOf(k.protocol) >= 0))
      try {
        k.hostname = a.toASCII(k.hostname);
      } catch {
      }
    return c.encode(c.format(k));
  }
  function y(v) {
    var k = c.parse(v, !0);
    if (k.hostname && (!k.protocol || h.indexOf(k.protocol) >= 0))
      try {
        k.hostname = a.toUnicode(k.hostname);
      } catch {
      }
    return c.decode(c.format(k), c.decode.defaultChars + "%");
  }
  function A(v, k) {
    if (!(this instanceof A))
      return new A(v, k);
    k || e.isString(v) || (k = v || {}, v = "default"), this.inline = new o(), this.block = new r(), this.core = new s(), this.renderer = new n(), this.linkify = new i(), this.validateLink = d, this.normalizeLink = _, this.normalizeLinkText = y, this.utils = e, this.helpers = e.assign({}, t), this.options = {}, this.configure(v), k && this.set(k);
  }
  return A.prototype.set = function(v) {
    return e.assign(this.options, v), this;
  }, A.prototype.configure = function(v) {
    var k = this, b;
    if (e.isString(v) && (b = v, v = u[b], !v))
      throw new Error('Wrong `markdown-it` preset "' + b + '", check name');
    if (!v)
      throw new Error("Wrong `markdown-it` preset, can't be empty");
    return v.options && k.set(v.options), v.components && Object.keys(v.components).forEach(function(p) {
      v.components[p].rules && k[p].ruler.enableOnly(v.components[p].rules), v.components[p].rules2 && k[p].ruler2.enableOnly(v.components[p].rules2);
    }), this;
  }, A.prototype.enable = function(v, k) {
    var b = [];
    Array.isArray(v) || (v = [v]), ["core", "block", "inline"].forEach(function(E) {
      b = b.concat(this[E].ruler.enable(v, !0));
    }, this), b = b.concat(this.inline.ruler2.enable(v, !0));
    var p = v.filter(function(E) {
      return b.indexOf(E) < 0;
    });
    if (p.length && !k)
      throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + p);
    return this;
  }, A.prototype.disable = function(v, k) {
    var b = [];
    Array.isArray(v) || (v = [v]), ["core", "block", "inline"].forEach(function(E) {
      b = b.concat(this[E].ruler.disable(v, !0));
    }, this), b = b.concat(this.inline.ruler2.disable(v, !0));
    var p = v.filter(function(E) {
      return b.indexOf(E) < 0;
    });
    if (p.length && !k)
      throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + p);
    return this;
  }, A.prototype.use = function(v) {
    var k = [this].concat(Array.prototype.slice.call(arguments, 1));
    return v.apply(v, k), this;
  }, A.prototype.parse = function(v, k) {
    if (typeof v != "string")
      throw new Error("Input data should be a String");
    var b = new this.core.State(v, this, k);
    return this.core.process(b), b.tokens;
  }, A.prototype.render = function(v, k) {
    return k = k || {}, this.renderer.render(this.parse(v, k), this.options, k);
  }, A.prototype.parseInline = function(v, k) {
    var b = new this.core.State(v, this, k);
    return b.inlineMode = !0, this.core.process(b), b.tokens;
  }, A.prototype.renderInline = function(v, k) {
    return k = k || {}, this.renderer.render(this.parseInline(v, k), this.options, k);
  }, Co = A, Co;
}
var Ao, Ma;
function f7() {
  return Ma || (Ma = 1, Ao = u7()), Ao;
}
var h7 = f7();
const d7 = /* @__PURE__ */ si(h7), Ia = /* @__PURE__ */ Ft({
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
    const t = tt(new d7(e.options ?? {}));
    for (const s of e.plugins ?? [])
      t.value.use(s);
    const n = at(() => t.value.render(e.source));
    return () => Ul("div", { innerHTML: n.value });
  }
}), p7 = { class: "chat-message-user-content" }, g7 = { class: "chat-message-bot-content" }, m7 = {
  key: 0,
  class: "flex items-center gap-2 mb-2"
}, _7 = { class: "w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center bg-zinc-100" }, b7 = ["src", "alt"], v7 = {
  key: 0,
  class: "font-medium text-sm text-zinc-950 leading-normal tracking-tight"
}, x7 = /* @__PURE__ */ Ft({
  __name: "Message",
  props: {
    message: {}
  },
  setup(e, { expose: t }) {
    const n = e;
    It.registerLanguage("javascript", Ql), It.registerLanguage("typescript", Ip), It.registerLanguage("python", Dp), It.registerLanguage("xml", eu), It.registerLanguage("bash", Rp);
    const { message: s } = If(n), { options: r } = Rn(), o = tt(null), i = at(() => r == null ? void 0 : r.showAvatar), c = at(() => {
      var _, y;
      return ((y = (_ = r == null ? void 0 : r.i18n) == null ? void 0 : _.en) == null ? void 0 : y.title) || "";
    }), a = at(() => r == null ? void 0 : r.showBotInfoMessage), u = at(() => s.value.text || "&lt;Empty response&gt;"), l = (_) => {
      _.use(Lp, {
        attrs: {
          target: "_blank",
          rel: "noopener"
        }
      });
    }, f = () => {
      var _;
      (_ = o.value) != null && _.scrollIntoView && o.value.scrollIntoView({
        block: "start"
      });
    }, d = {
      highlight(_, y) {
        if (y && It.getLanguage(y))
          try {
            return It.highlight(_, { language: y }).value;
          } catch {
          }
        return "";
      }
    }, h = { ...(r == null ? void 0 : r.messageComponents) ?? {} };
    return t({ scrollToView: f }), (_, y) => xe(s).sender === "user" ? (ce(), Re("div", {
      key: 0,
      ref_key: "messageContainer",
      ref: o,
      class: "relative flex w-full flex-col items-end gap-1"
    }, [
      be("div", p7, [
        Kt(_.$slots, "default", {}, () => [
          xe(s).type === "component" && h[xe(s).key] ? (ce(), Pe(Di(h[xe(s).key]), Ci(Ts({ key: 0 }, xe(s).arguments)), null, 16)) : (ce(), Pe(xe(Ia), {
            key: 1,
            class: "chat-message-markdown",
            source: u.value,
            options: d,
            plugins: [l]
          }, null, 8, ["source", "plugins"]))
        ], !0)
      ])
    ], 512)) : (ce(), Re("div", {
      key: 1,
      ref_key: "messageContainer",
      ref: o,
      class: "relative flex w-full max-w-full flex-col items-baseline gap-1"
    }, [
      be("div", g7, [
        a.value && (i.value || c.value) ? (ce(), Re("div", m7, [
          be("div", _7, [
            i.value ? (ce(), Re("img", {
              key: 0,
              src: i.value,
              alt: c.value || "Bot",
              class: "w-6 h-6 rounded-full object-cover"
            }, null, 8, b7)) : (ce(), Pe(xe(tu), {
              key: 1,
              height: "16",
              width: "16",
              class: "text-black"
            }))
          ]),
          c.value ? (ce(), Re("span", v7, ys(c.value), 1)) : wt("", !0)
        ])) : wt("", !0),
        Kt(_.$slots, "default", {}, () => [
          xe(s).type === "component" && h[xe(s).key] ? (ce(), Pe(Di(h[xe(s).key]), Ci(Ts({ key: 0 }, xe(s).arguments)), null, 16)) : (ce(), Pe(xe(Ia), {
            key: 1,
            class: "chat-message-markdown",
            source: u.value,
            options: d,
            plugins: [l]
          }, null, 8, ["source", "plugins"]))
        ], !0)
      ])
    ], 512));
  }
}), wu = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, Na = /* @__PURE__ */ wu(x7, [["__scopeId", "data-v-60c3ca3f"]]), y7 = /* @__PURE__ */ Ft({
  __name: "MessageTyping",
  props: {
    animation: { default: "bouncing" }
  },
  setup(e, { expose: t }) {
    const n = e, s = tt(), r = at(() => ({
      [`chat-message-typing-animation-${n.animation}`]: !0
    })), o = () => {
      var i;
      (i = s.value) != null && i.scrollIntoView && s.value.scrollIntoView({
        block: "start"
      });
    };
    return dn(() => {
      o();
    }), t({ scrollToView: o }), (i, c) => (ce(), Re("div", {
      ref_key: "messageContainer",
      ref: s,
      class: "relative flex w-full max-w-full flex-col items-baseline gap-1",
      "data-test-id": "chat-message-typing"
    }, [
      be("div", {
        class: Qn([r.value, "chat-message-bot-typing chat-message-typing"])
      }, c[0] || (c[0] = [
        be("div", { class: "flex justify-center items-center" }, [
          be("span", { class: "typing-dot block h-1.5 w-1.5 rounded-full bg-zinc-600 m-0.5" }),
          be("span", { class: "typing-dot block h-1.5 w-1.5 rounded-full bg-zinc-600 m-0.5" }),
          be("span", { class: "typing-dot block h-1.5 w-1.5 rounded-full bg-zinc-600 m-0.5" })
        ], -1)
      ]), 2)
    ], 512));
  }
}), k7 = /* @__PURE__ */ wu(y7, [["__scopeId", "data-v-a40fdf19"]]), E7 = { class: "scrollbar-minimal flex w-full flex-1 flex-col overflow-y-auto px-5 pt-5 sm:overscroll-contain" }, w7 = { class: "flex flex-1 flex-col gap-1" }, C7 = /* @__PURE__ */ Ft({
  __name: "MessagesList",
  props: {
    messages: {}
  },
  setup(e) {
    const t = ri(), n = tt([]), { initialMessages: s, waitingForResponse: r } = t;
    return bs(
      () => n.value.length,
      () => {
        const o = n.value[n.value.length - 1];
        o && o.scrollToView();
      }
    ), (o, i) => (ce(), Re("div", E7, [
      be("div", w7, [
        (ce(!0), Re(We, null, Ii(xe(s), (c) => (ce(), Pe(Na, {
          key: c.id,
          message: c
        }, null, 8, ["message"]))), 128)),
        (ce(!0), Re(We, null, Ii(o.messages, (c) => (ce(), Pe(Na, {
          key: c.id,
          ref_for: !0,
          ref_key: "messageComponents",
          ref: n,
          message: c
        }, {
          beforeMessage: Vt(({ message: a }) => [
            Kt(o.$slots, "beforeMessage", Ts({ ref_for: !0 }, { message: a }))
          ]),
          _: 2
        }, 1032, ["message"]))), 128)),
        xe(r) ? (ce(), Pe(k7, { key: 0 })) : wt("", !0),
        i[0] || (i[0] = be("div", { class: "relative bottom-0 mt-auto w-full pt-16" }, null, -1))
      ])
    ]));
  }
}), A7 = { class: "my-4 flex h-10 items-center" }, S7 = { class: "relative flex shrink-0 overflow-hidden rounded-full mr-2 size-10 border border-white/[0.10] items-center justify-center" }, T7 = ["src", "alt"], R7 = { class: "flex flex-col" }, D7 = { class: "font-medium text-sm tracking-tight" }, M7 = { class: "flex items-center" }, I7 = ["title"], N7 = { class: "w-full overflow-x-hidden whitespace-pre-wrap break-words text-center" }, O7 = { class: "mb-1" }, Cu = /* @__PURE__ */ Ft({
  __name: "Chat",
  setup(e) {
    const { t } = nu(), n = ri(), { messages: s, currentSessionId: r } = n, { options: o } = Rn(), i = at(() => o.mode === "window" && o.showWindowResetButton);
    async function c() {
      n.loadPreviousSession && (await n.loadPreviousSession(), Zt(() => {
        et.emit("scrollToBottom");
      }));
    }
    async function a() {
      n.startNewSession && (await n.startNewSession(), Zt(() => {
        et.emit("scrollToBottom");
      }));
    }
    return dn(async () => {
      await c(), r.value || n.startNewSession && (await n.startNewSession(), Zt(() => {
        et.emit("scrollToBottom");
      }));
    }), (u, l) => (ce(), Pe(Tp, { class: "chat-wrapper" }, {
      header: Vt(() => [
        be("div", A7, [
          be("span", S7, [
            xe(o).showAvatar ? (ce(), Re("img", {
              key: 0,
              src: xe(o).showAvatar,
              alt: xe(t)("title"),
              class: "w-full h-full object-cover"
            }, null, 8, T7)) : (ce(), Pe(xe(tu), {
              key: 1,
              height: "24",
              width: "24",
              class: "text-black"
            }))
          ]),
          be("div", R7, [
            be("h1", D7, ys(xe(t)("title")), 1)
          ])
        ]),
        be("div", M7, [
          i.value ? (ce(), Re("button", {
            key: 0,
            class: "flex border-none bg-transparent cursor-pointer transition-colors hover:animate-spin",
            title: xe(t)("resetButtonTooltip"),
            onClick: a
          }, [
            Le(xe(gp), {
              height: "20",
              width: "20"
            })
          ], 8, I7)) : wt("", !0)
        ])
      ]),
      input: Vt(() => [
        xe(r) ? (ce(), Pe(Ep, { key: 0 })) : wt("", !0)
      ]),
      footer: Vt(() => [
        be("div", N7, [
          be("div", O7, ys(xe(t)("footer")), 1),
          l[0] || (l[0] = be("div", null, [
            be("a", {
              href: "https://conexia-agency.com/",
              target: "_blank",
              rel: "noopener noreferrer",
              class: "font-bold underline hover:underline"
            }, "Service Conexia")
          ], -1))
        ])
      ]),
      default: Vt(() => [
        Le(C7, { messages: xe(s) }, null, 8, ["messages"])
      ]),
      _: 1
    }));
  }
}), L7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function F7(e, t) {
  return ce(), Re("svg", L7, t[0] || (t[0] = [
    be("path", {
      fill: "currentColor",
      d: "M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8"
    }, null, -1)
  ]));
}
const q7 = { name: "mdi-chat", render: F7 }, P7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function B7(e, t) {
  return ce(), Re("svg", P7, t[0] || (t[0] = [
    be("path", {
      fill: "currentColor",
      d: "M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
    }, null, -1)
  ]));
}
const $7 = { name: "mdi-chevron-down", render: B7 }, z7 = { class: "fixed z-50 bottom-4 right-4 h-full w-full flex flex-col items-end justify-end gap-4 md:mx-auto md:my-auto md:max-h-[52rem] md:max-w-[28rem]" }, U7 = { class: "h-full w-full overflow-hidden border-[1px] border-zinc-100 md:rounded-[20px]" }, H7 = ["src"], j7 = /* @__PURE__ */ Ft({
  __name: "ChatWindow",
  setup(e) {
    const t = tt(!1), { options: n } = Rn(), s = at(() => n != null && n.showAvatar && typeof n.showAvatar == "string" && n.showAvatar.trim() !== "" ? n.showAvatar : null);
    function r() {
      t.value = !t.value, t.value && Zt(() => {
        et.emit("scrollToBottom");
      });
    }
    return (o, i) => (ce(), Re("div", z7, [
      Le(Ki, {
        "enter-active-class": "transition-all duration-150 ease-in-out",
        "leave-active-class": "transition-all duration-150 ease-in-out",
        "enter-from-class": "scale-0 opacity-0",
        "enter-to-class": "scale-100 opacity-100",
        "leave-from-class": "scale-100 opacity-100",
        "leave-to-class": "scale-0 opacity-0"
      }, {
        default: Vt(() => [
          ll(be("div", U7, [
            Le(Cu)
          ], 512), [
            [rd, t.value]
          ])
        ]),
        _: 1
      }),
      be("div", {
        class: "flex-none bg-black text-white cursor-pointer w-14 h-14 rounded-full inline-flex items-center justify-center ml-auto transition-all duration-150 ease-in-out hover:scale-105 active:scale-95 shadow-md",
        onClick: r
      }, [
        Le(Ki, {
          mode: "out-in",
          "enter-active-class": "transition-opacity duration-150 ease-in-out",
          "leave-active-class": "transition-opacity duration-150 ease-in-out",
          "enter-from-class": "opacity-0",
          "enter-to-class": "opacity-100",
          "leave-from-class": "opacity-100",
          "leave-to-class": "opacity-0"
        }, {
          default: Vt(() => [
            s.value ? (ce(), Re("img", {
              key: 0,
              src: s.value,
              alt: "Chat Avatar",
              class: "w-full h-full rounded-full object-cover"
            }, null, 8, H7)) : (ce(), Re(We, { key: 1 }, [
              t.value ? (ce(), Pe(xe($7), {
                key: 1,
                height: "32",
                width: "32"
              })) : (ce(), Pe(xe(q7), {
                key: 0,
                height: "32",
                width: "32"
              }))
            ], 64))
          ]),
          _: 1
        })
      ])
    ]));
  }
}), V7 = /* @__PURE__ */ Ft({
  __name: "App",
  props: {},
  setup(e) {
    const { options: t } = Rn(), n = at(() => t.mode === "fullscreen");
    return dn(() => {
      It.registerLanguage("xml", eu), It.registerLanguage("javascript", Ql);
    }), (s, r) => n.value ? (ce(), Pe(Cu, {
      key: 0,
      class: "n8n-chat"
    })) : (ce(), Pe(j7, {
      key: 1,
      class: "n8n-chat"
    }));
  }
});
function G7(e) {
  var r, o;
  const t = {
    ...Fn,
    ...e,
    webhookConfig: {
      ...Fn.webhookConfig,
      ...e == null ? void 0 : e.webhookConfig
    },
    i18n: {
      ...Fn.i18n,
      ...e == null ? void 0 : e.i18n,
      en: {
        ...(r = Fn.i18n) == null ? void 0 : r.en,
        ...(o = e == null ? void 0 : e.i18n) == null ? void 0 : o.en
      }
    },
    theme: {
      ...Fn.theme,
      ...e == null ? void 0 : e.theme
    }
  }, n = t.target ?? Dd;
  typeof n == "string" && Vd(n);
  const s = Sd(V7);
  return s.use(sp, t), s.mount(n), s;
}
export {
  G7 as createChat
};
