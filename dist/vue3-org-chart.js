import { defineComponent as X, ref as C, inject as L, computed as b, onMounted as V, resolveComponent as K, openBlock as p, createElementBlock as y, renderSlot as M, createElementVNode as R, unref as m, createCommentVNode as O, withKeys as W, withModifiers as q, createVNode as F, Transition as J, withCtx as S, Fragment as G, renderList as Q, createBlock as j, normalizeClass as U, mergeProps as ee, reactive as D, normalizeStyle as H, provide as Z, watch as te, normalizeProps as ne, guardReactiveProps as oe, createTextVNode as I } from "vue";
import ae from "panzoom";
const ie = { class: "vue3-org-chart-node" }, se = {
  key: 0,
  class: "vue3-org-chart-node-element-top-line"
}, le = {
  key: 1,
  class: "vue3-org-chart-node-element-bottom-line"
}, re = {
  key: 0,
  class: "vue3-org-chart-node-container"
}, ce = /* @__PURE__ */ X({
  __name: "Node",
  props: {
    id: { type: String, required: !0 }
  },
  setup(i) {
    const l = i, a = C(null), s = L("api"), r = s.find(l.id), n = b(() => r.__open || !1), t = s.findChildren(l.id);
    V(() => {
      r.parentId || (s.$root.value = a.value, s.zoomReset(), r.__open = !0);
    });
    const h = () => {
      t.length && (r.__open = !n.value, s.goToHome(a.value));
    };
    return (u, x) => {
      const f = K("Node", !0);
      return p(), y("div", ie, [
        M(u.$slots, "top-border"),
        R("div", {
          class: "vue3-org-chart-node-element",
          ref_key: "element",
          ref: a
        }, [
          m(r).parentId ? (p(), y("div", se)) : O("", !0),
          R("div", {
            tabindex: "0",
            onKeydown: x[0] || (x[0] = W(q((w) => m(s).goToHome(a.value), ["self", "prevent"]), ["space"]))
          }, [
            M(u.$slots, "node", {
              item: m(r),
              children: m(t),
              open: n.value,
              toggleChildren: h
            })
          ], 32),
          m(t).length && n.value ? (p(), y("div", le)) : O("", !0)
        ], 512),
        F(J, { name: "nodeTransition" }, {
          default: S(() => [
            m(t).length && n.value ? (p(), y("div", re, [
              (p(!0), y(G, null, Q(m(t), (w, _) => (p(), j(f, {
                key: w.id,
                id: w.id,
                ref_for: !0,
                ref: "nodeRefs"
              }, {
                "top-border": S(() => [
                  R("div", {
                    class: U(["vue3-org-chart-node-element-horizontal-line", {
                      left: n.value && _ !== 0,
                      right: n.value && _ !== m(t).length - 1
                    }])
                  }, null, 2)
                ]),
                node: S((d) => [
                  M(u.$slots, "node", ee({ ref_for: !0 }, d))
                ]),
                _: 2
              }, 1032, ["id"]))), 128))
            ])) : O("", !0)
          ]),
          _: 3
        })
      ]);
    };
  }
});
function ue() {
  let i = C();
  const l = C(null), a = C(null);
  function s() {
    l.value && (i.value = ae(l.value, {
      zoomDoubleClickSpeed: 1.4,
      maxZoom: 5,
      minZoom: 0.02,
      initialZoom: 1,
      bounds: !1
    }));
  }
  return V(() => {
    i.value || s();
  }), {
    instance: i,
    container: a,
    scene: l
  };
}
function de({ initialData: i, json: l }) {
  const a = C(!0), s = D(i), r = async (n) => await (await fetch(n)).json();
  return V(async () => {
    l && Object.assign(s, await r(l)), a.value = !1;
  }), {
    data: s,
    loading: a
  };
}
function ve(i, l, a, s, r) {
  const n = C(null), t = D({ x: 0, y: 40 }), h = D({
    state: r,
    toggle: () => {
      h.state = !h.state;
    }
  });
  function u(e) {
    const o = l.find((c) => c.id === e);
    if (!o)
      throw new Error(`Node with id ${e} not found`);
    return o;
  }
  function x(e) {
    return l.filter((o) => o.parentId === e);
  }
  function f() {
    const e = l.find((o) => o.parentId === "" || !o.parentId);
    if (!e)
      throw new Error("Root node not found");
    return e;
  }
  function w() {
    var e;
    return (e = f()) == null ? void 0 : e.id;
  }
  function _() {
    const e = i.value.getTransform(), o = 0, c = 32;
    if (e.scale !== 1) {
      const $ = 1 - e.scale, k = e.x / $, z = e.y / $;
      i.value.smoothZoomAbs(k, z, 1);
    } else
      i.value.smoothMoveTo(o, c);
  }
  function d() {
    var T, N;
    const e = i.value.getTransform(), o = (T = a.value) == null ? void 0 : T.getBoundingClientRect(), c = (N = s.value) == null ? void 0 : N.getBoundingClientRect();
    if (!o || !c)
      return { ...t, scale: 1 };
    const $ = c.x - o.x, k = c.y - o.y, z = $ + c.width / 2, A = k + c.height / 2;
    return { x: z, y: A, scale: e.scale };
  }
  function B(e) {
    var Y;
    const o = (Y = a.value) == null ? void 0 : Y.getBoundingClientRect();
    if (!o || !e)
      return;
    const c = e.getBoundingClientRect(), $ = o.x + o.width / 2 + t.x, k = o.y + t.y, z = c.x + c.width / 2, A = c.y, T = $ - z, N = k - A;
    i.value.moveBy(T, N, !0);
  }
  function E() {
    const { x: e, y: o, scale: c } = d();
    i.value.smoothZoomAbs(e, o, c * 3 / 2);
  }
  function P() {
    const { x: e, y: o, scale: c } = d();
    i.value.smoothZoomAbs(e, o, c * 2 / 3);
  }
  function v() {
    l.forEach((e) => {
      e.__open = !1;
    });
  }
  function g() {
    l.forEach((e) => {
      e.__open = !0;
    });
  }
  return {
    zoomReset: _,
    zoomIn: E,
    zoomOut: P,
    expandAll: g,
    collapseAll: v,
    $root: n,
    root: f,
    rootId: w,
    find: u,
    findChildren: x,
    goToHome: B,
    minimap: h
  };
}
const he = /* @__PURE__ */ X({
  __name: "MiniMap",
  props: {
    size: {
      type: Number,
      default: 1 / 6
    }
  },
  setup(i) {
    const { instance: l, scene: a, container: s } = L("panzoom"), r = i, n = C({ width: 0, height: 0, top: 0, left: 0 }), t = C({ width: 0, height: 0, top: 0, left: 0 }), h = b(() => n.value.width * r.size), u = b(() => n.value.height * r.size), x = (v, g) => {
      let e;
      return function(...o) {
        clearTimeout(e), e = setTimeout(() => v.apply(this, o), g);
      };
    }, f = () => {
      !s.value || !a.value || !(a.value.firstChild instanceof HTMLElement) || (n.value = s.value.getBoundingClientRect(), t.value = a.value.firstChild.getBoundingClientRect());
    }, w = x(f, 350);
    V(() => {
      f(), l.value.on("transform", f);
      const v = new ResizeObserver(w);
      s.value && v.observe(s.value), a.value && v.observe(a.value);
    });
    const _ = b(() => ({
      left: n.value.left - t.value.left + n.value.width,
      right: t.value.left - n.value.left + t.value.width,
      top: n.value.top - t.value.top + n.value.height,
      bottom: t.value.top - n.value.top + t.value.height
    })), d = (v) => {
      const g = Math.max(
        _.value.left,
        _.value.right,
        n.value.width,
        t.value.width
      ), e = Math.max(
        _.value.top,
        _.value.bottom,
        n.value.height,
        t.value.height
      );
      return v * Math.min(h.value / g, u.value / e);
    }, B = (v, g, e, o) => ({ width: `${v}px`, height: `${g}px`, left: `${Math.max(e, 0)}px`, top: `${Math.max(o, 0)}px` }), E = b(() => {
      const v = d(n.value.width), g = d(n.value.height), e = d(n.value.left - t.value.left), o = d(n.value.top - t.value.top);
      return B(v, g, e, o);
    }), P = b(() => {
      const v = d(t.value.width), g = d(t.value.height), e = Math.min(d(t.value.left - n.value.left), h.value - d(t.value.width)), o = Math.min(d(t.value.top - n.value.top), u.value - d(t.value.height));
      return B(v, g, e, o);
    });
    return (v, g) => (p(), y("div", {
      class: "vue3-org-chart-minimap",
      style: H({ width: h.value + "px", height: u.value + "px" })
    }, [
      R("div", {
        class: "vue3-org-chart-minimap-scene",
        style: H(P.value)
      }, null, 4),
      R("div", {
        class: "vue3-org-chart-minimap-container",
        style: H(E.value)
      }, null, 4)
    ], 4));
  }
}), fe = { class: "vue3-org-chart" }, me = { key: 1 }, pe = { key: 0 }, ge = { key: 1 }, _e = /* @__PURE__ */ X({
  __name: "Vue3OrgChart",
  props: {
    data: { default: () => [] },
    json: {},
    minimap: { type: Boolean, default: !1 }
  },
  emits: ["onReady"],
  setup(i, { emit: l }) {
    const a = i, { instance: s, scene: r, container: n } = ue();
    Z("panzoom", { instance: s, scene: r, container: n });
    const { data: t, loading: h } = de({ initialData: a.data, json: a.json });
    Z("content", { data: t, loading: h });
    const u = ve(s, t, n, r, a.minimap);
    Z("api", u);
    const x = l;
    return te(() => h.value, (f) => {
      f || x("onReady", { api: u });
    }), (f, w) => (p(), y("div", fe, [
      R("div", {
        ref_key: "container",
        ref: n,
        class: "vue3-org-chart-container"
      }, [
        R("div", {
          ref_key: "scene",
          ref: r,
          class: "vue3-org-chart-scene"
        }, [
          m(t).length && m(u).rootId() ? (p(), j(ce, {
            id: m(u).rootId(),
            key: "root"
          }, {
            node: S((_) => [
              M(f.$slots, "node", ne(oe(_)))
            ]),
            _: 3
          }, 8, ["id"])) : (p(), y("div", me, [
            m(h) ? (p(), y("span", pe, [
              M(f.$slots, "loading", {}, () => [
                I("Loading...")
              ])
            ])) : (p(), y("span", ge, [
              M(f.$slots, "no-data", {}, () => [
                I("No data")
              ])
            ]))
          ]))
        ], 512)
      ], 512),
      !m(h) && m(u).minimap.state ? (p(), j(he, { key: 0 })) : O("", !0)
    ]));
  }
}), we = {
  /**
   * @param {import('vue').App} app
   * @param options
   */
  install(i, l = {}) {
    i.component("Vue3OrgChart", _e);
  }
};
export {
  _e as Vue3OrgChart,
  we as Vue3OrgChartPlugin
};
