import { defineComponent as X, ref as C, inject as L, computed as b, onMounted as V, nextTick as K, resolveComponent as W, openBlock as p, createElementBlock as x, renderSlot as k, createElementVNode as R, unref as m, createCommentVNode as O, withKeys as q, withModifiers as F, createVNode as J, Transition as G, withCtx as S, Fragment as Q, renderList as U, createBlock as j, normalizeClass as ee, mergeProps as te, reactive as D, normalizeStyle as H, provide as Z, watch as ne, normalizeProps as oe, guardReactiveProps as ae, createTextVNode as I } from "vue";
import ie from "panzoom";
const se = { class: "vue3-org-chart-node" }, le = {
  key: 0,
  class: "vue3-org-chart-node-element-top-line"
}, re = {
  key: 1,
  class: "vue3-org-chart-node-element-bottom-line"
}, ue = {
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
      r.parentId || (s.$root.value = a.value, K(() => {
        s.zoomReset();
      }), r.__open = !0);
    });
    const h = () => {
      t.length && (r.__open = !n.value, s.goToHome(a.value));
    };
    return (c, w) => {
      const f = W("Node", !0);
      return p(), x("div", se, [
        k(c.$slots, "top-border"),
        R("div", {
          class: "vue3-org-chart-node-element",
          ref_key: "element",
          ref: a
        }, [
          m(r).parentId ? (p(), x("div", le)) : O("", !0),
          R("div", {
            tabindex: "0",
            onKeydown: w[0] || (w[0] = q(F((g) => m(s).goToHome(a.value), ["self", "prevent"]), ["space"]))
          }, [
            k(c.$slots, "node", {
              item: m(r),
              children: m(t),
              open: n.value,
              toggleChildren: h
            })
          ], 32),
          m(t).length && n.value ? (p(), x("div", re)) : O("", !0)
        ], 512),
        J(G, { name: "nodeTransition" }, {
          default: S(() => [
            m(t).length && n.value ? (p(), x("div", ue, [
              (p(!0), x(Q, null, U(m(t), (g, _) => (p(), j(f, {
                key: g.id,
                id: g.id,
                ref_for: !0,
                ref: "nodeRefs"
              }, {
                "top-border": S(() => [
                  R("div", {
                    class: ee(["vue3-org-chart-node-element-horizontal-line", {
                      left: n.value && _ !== 0,
                      right: n.value && _ !== m(t).length - 1
                    }])
                  }, null, 2)
                ]),
                node: S((d) => [
                  k(c.$slots, "node", te({ ref_for: !0 }, d))
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
function de() {
  let i = C();
  const l = C(null), a = C(null);
  function s() {
    l.value && (i.value = ie(l.value, {
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
function ve({ initialData: i, json: l }) {
  const a = C(!0), s = D(i), r = async (n) => await (await fetch(n)).json();
  return V(async () => {
    l && Object.assign(s, await r(l)), a.value = !1;
  }), {
    data: s,
    loading: a
  };
}
function he(i, l, a, s, r) {
  const n = C(null), t = D({ x: 0, y: 40 }), h = D({
    state: r,
    toggle: () => {
      h.state = !h.state;
    }
  });
  function c(e) {
    const o = l.find((u) => u.id === e);
    if (!o)
      throw new Error(`Node with id ${e} not found`);
    return o;
  }
  function w(e) {
    return l.filter((o) => o.parentId === e);
  }
  function f() {
    const e = l.find((o) => o.parentId === "" || !o.parentId);
    if (!e)
      throw new Error("Root node not found");
    return e;
  }
  function g() {
    var e;
    return (e = f()) == null ? void 0 : e.id;
  }
  function _() {
    const e = i.value.getTransform(), o = 0, u = 32;
    if (e.scale !== 1) {
      const $ = 1 - e.scale, M = e.x / $, T = e.y / $;
      i.value.smoothZoomAbs(M, T, 1);
    } else
      i.value.smoothMoveTo(o, u);
  }
  function d() {
    var B, N;
    const e = i.value.getTransform(), o = (B = a.value) == null ? void 0 : B.getBoundingClientRect(), u = (N = s.value) == null ? void 0 : N.getBoundingClientRect();
    if (!o || !u)
      return { ...t, scale: 1 };
    const $ = u.x - o.x, M = u.y - o.y, T = $ + u.width / 2, A = M + u.height / 2;
    return { x: T, y: A, scale: e.scale };
  }
  function z(e) {
    var Y;
    const o = (Y = a.value) == null ? void 0 : Y.getBoundingClientRect();
    if (!o || !e)
      return;
    const u = e.getBoundingClientRect(), $ = o.x + o.width / 2 + t.x, M = o.y + t.y, T = u.x + u.width / 2, A = u.y, B = $ - T, N = M - A;
    i.value.moveBy(B, N, !0);
  }
  function E() {
    const { x: e, y: o, scale: u } = d();
    i.value.smoothZoomAbs(e, o, u * 3 / 2);
  }
  function P() {
    const { x: e, y: o, scale: u } = d();
    i.value.smoothZoomAbs(e, o, u * 2 / 3);
  }
  function v() {
    l.forEach((e) => {
      e.__open = !1;
    });
  }
  function y() {
    l.forEach((e) => {
      e.__open = !0;
    });
  }
  return {
    zoomReset: _,
    zoomIn: E,
    zoomOut: P,
    expandAll: y,
    collapseAll: v,
    $root: n,
    root: f,
    rootId: g,
    find: c,
    findChildren: w,
    goToHome: z,
    minimap: h
  };
}
const fe = /* @__PURE__ */ X({
  __name: "MiniMap",
  props: {
    size: {
      type: Number,
      default: 1 / 6
    }
  },
  setup(i) {
    const { instance: l, scene: a, container: s } = L("panzoom"), r = i, n = C({ width: 0, height: 0, top: 0, left: 0 }), t = C({ width: 0, height: 0, top: 0, left: 0 }), h = b(() => n.value.width * r.size), c = b(() => n.value.height * r.size), w = (v, y) => {
      let e;
      return function(...o) {
        clearTimeout(e), e = setTimeout(() => v.apply(this, o), y);
      };
    }, f = () => {
      !s.value || !a.value || !(a.value.firstChild instanceof HTMLElement) || (n.value = s.value.getBoundingClientRect(), t.value = a.value.firstChild.getBoundingClientRect());
    }, g = w(f, 350);
    V(() => {
      f(), l.value.on("transform", f);
      const v = new ResizeObserver(g);
      s.value && v.observe(s.value), a.value && v.observe(a.value);
    });
    const _ = b(() => ({
      left: n.value.left - t.value.left + n.value.width,
      right: t.value.left - n.value.left + t.value.width,
      top: n.value.top - t.value.top + n.value.height,
      bottom: t.value.top - n.value.top + t.value.height
    })), d = (v) => {
      const y = Math.max(
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
      return v * Math.min(h.value / y, c.value / e);
    }, z = (v, y, e, o) => ({ width: `${v}px`, height: `${y}px`, left: `${Math.max(e, 0)}px`, top: `${Math.max(o, 0)}px` }), E = b(() => {
      const v = d(n.value.width), y = d(n.value.height), e = d(n.value.left - t.value.left), o = d(n.value.top - t.value.top);
      return z(v, y, e, o);
    }), P = b(() => {
      const v = d(t.value.width), y = d(t.value.height), e = Math.min(d(t.value.left - n.value.left), h.value - d(t.value.width)), o = Math.min(d(t.value.top - n.value.top), c.value - d(t.value.height));
      return z(v, y, e, o);
    });
    return (v, y) => (p(), x("div", {
      class: "vue3-org-chart-minimap",
      style: H({ width: h.value + "px", height: c.value + "px" })
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
}), me = { class: "vue3-org-chart" }, pe = { key: 1 }, ge = { key: 0 }, ye = { key: 1 }, _e = /* @__PURE__ */ X({
  __name: "Vue3OrgChart",
  props: {
    data: { default: () => [] },
    json: {},
    minimap: { type: Boolean, default: !1 }
  },
  emits: ["onReady"],
  setup(i, { emit: l }) {
    const a = i, { instance: s, scene: r, container: n } = de();
    Z("panzoom", { instance: s, scene: r, container: n });
    const { data: t, loading: h } = ve({ initialData: a.data, json: a.json });
    Z("content", { data: t, loading: h });
    const c = he(s, t, n, r, a.minimap);
    Z("api", c);
    const w = l;
    return ne(() => h.value, (f) => {
      f || w("onReady", { api: c });
    }), (f, g) => (p(), x("div", me, [
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
          m(t).length && m(c).rootId() ? (p(), j(ce, {
            id: m(c).rootId(),
            key: "root"
          }, {
            node: S((_) => [
              k(f.$slots, "node", oe(ae(_)))
            ]),
            _: 3
          }, 8, ["id"])) : (p(), x("div", pe, [
            m(h) ? (p(), x("span", ge, [
              k(f.$slots, "loading", {}, () => [
                g[0] || (g[0] = I("Loading..."))
              ])
            ])) : (p(), x("span", ye, [
              k(f.$slots, "no-data", {}, () => [
                g[1] || (g[1] = I("No data"))
              ])
            ]))
          ]))
        ], 512)
      ], 512),
      !m(h) && m(c).minimap.state ? (p(), j(fe, { key: 0 })) : O("", !0)
    ]));
  }
}), Ce = {
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
  Ce as Vue3OrgChartPlugin
};
