import { defineComponent as S, ref as w, inject as I, computed as N, onMounted as P, resolveComponent as K, openBlock as g, createElementBlock as x, renderSlot as k, createElementVNode as b, unref as m, createCommentVNode as E, withKeys as W, withModifiers as q, createVNode as X, Transition as F, withCtx as O, Fragment as J, renderList as G, createBlock as Y, normalizeClass as Q, mergeProps as U, reactive as D, watch as L, normalizeStyle as A, provide as H, normalizeProps as ee, guardReactiveProps as te, createTextVNode as j } from "vue";
import oe from "panzoom";
const ne = { class: "vue3-org-chart-node" }, ie = {
  key: 0,
  class: "vue3-org-chart-node-element-top-line"
}, ae = {
  key: 1,
  class: "vue3-org-chart-node-element-bottom-line"
}, le = {
  key: 0,
  class: "vue3-org-chart-node-container"
}, se = /* @__PURE__ */ S({
  __name: "Node",
  props: {
    id: { type: String, required: !0 }
  },
  setup(s) {
    const i = s, a = w(null), l = I("api"), o = l.find(i.id), e = N(() => o.__open || !1), d = l.findChildren(i.id);
    P(() => {
      o.parentId || (l.$root.value = a.value, l.zoomReset());
    });
    const _ = () => {
      d.length && (o.__open = !e.value, l.goToHome(a.value));
    };
    return (h, f) => {
      const v = K("Node", !0);
      return g(), x("div", ne, [
        k(h.$slots, "top-border"),
        b("div", {
          class: "vue3-org-chart-node-element",
          ref_key: "element",
          ref: a
        }, [
          m(o).parentId ? (g(), x("div", ie)) : E("", !0),
          b("div", {
            tabindex: "0",
            onKeydown: f[0] || (f[0] = W(q((p) => m(l).goToHome(a.value), ["self", "prevent"]), ["space"]))
          }, [
            k(h.$slots, "node", {
              item: m(o),
              children: m(d),
              open: e.value,
              toggleChildren: _
            })
          ], 32),
          m(d).length && e.value ? (g(), x("div", ae)) : E("", !0)
        ], 512),
        X(F, { name: "nodeTransition" }, {
          default: O(() => [
            m(d).length && e.value ? (g(), x("div", le, [
              (g(!0), x(J, null, G(m(d), (p, u) => (g(), Y(v, {
                key: p.id,
                id: p.id,
                ref_for: !0,
                ref: "nodeRefs"
              }, {
                "top-border": O(() => [
                  b("div", {
                    class: Q(["vue3-org-chart-node-element-horizontal-line", {
                      left: e.value && u !== 0,
                      right: e.value && u !== m(d).length - 1
                    }])
                  }, null, 2)
                ]),
                node: O((C) => [
                  k(h.$slots, "node", U({ ref_for: !0 }, C))
                ]),
                _: 2
              }, 1032, ["id"]))), 128))
            ])) : E("", !0)
          ]),
          _: 3
        })
      ]);
    };
  }
});
function re() {
  let s = w();
  const i = w(null), a = w(null);
  function l() {
    i.value && (s.value = oe(i.value, {
      zoomDoubleClickSpeed: 1.4,
      maxZoom: 5,
      minZoom: 0.1,
      initialZoom: 1,
      bounds: !1
    }));
  }
  return P(() => {
    s.value || l();
  }), {
    instance: s,
    container: a,
    scene: i
  };
}
function ue({ initialData: s, json: i }) {
  const a = w(!0), l = D(s), o = async (e) => await (await fetch(e)).json();
  return P(async () => {
    i && Object.assign(l, await o(i)), a.value = !1;
  }), {
    data: l,
    loading: a
  };
}
function ce(s, i, a, l) {
  const o = w(null), e = D({ x: 0, y: 40 });
  function d(t) {
    const n = i.find((r) => r.id === t);
    if (!n)
      throw new Error(`Node with id ${t} not found`);
    return n;
  }
  function _(t) {
    return i.filter((n) => n.parentId === t);
  }
  function h() {
    const t = i.find((n) => n.parentId === "" || !n.parentId);
    if (!t)
      throw new Error("Root node not found");
    return t;
  }
  function f() {
    var t;
    return (t = h()) == null ? void 0 : t.id;
  }
  function v() {
    const t = s.value.getTransform(), n = 0, r = 32;
    if (t.scale !== 1) {
      const y = 1 - t.scale, $ = t.x / y, T = t.y / y;
      s.value.smoothZoomAbs($, T, 1);
    } else
      s.value.smoothMoveTo(n, r);
  }
  function p() {
    var B, z;
    const t = s.value.getTransform(), n = (B = a.value) == null ? void 0 : B.getBoundingClientRect(), r = (z = l.value) == null ? void 0 : z.getBoundingClientRect();
    if (!n || !r)
      return { ...e, scale: 1 };
    const y = r.x - n.x, $ = r.y - n.y, T = y + r.width / 2, V = $ + r.height / 2;
    return { x: T, y: V, scale: t.scale };
  }
  function u(t) {
    var Z;
    const n = (Z = a.value) == null ? void 0 : Z.getBoundingClientRect();
    if (!n || !t)
      return;
    const r = t.getBoundingClientRect(), y = n.x + n.width / 2 + e.x, $ = n.y + e.y, T = r.x + r.width / 2, V = r.y, B = y - T, z = $ - V;
    s.value.moveBy(B, z, !0);
  }
  function C() {
    const { x: t, y: n, scale: r } = p();
    s.value.smoothZoomAbs(t, n, r * 3 / 2);
  }
  function R() {
    const { x: t, y: n, scale: r } = p();
    s.value.smoothZoomAbs(t, n, r * 2 / 3);
  }
  function M() {
    i.forEach((t) => {
      t.__open = !1;
    });
  }
  function c() {
    i.forEach((t) => {
      t.__open = !0;
    });
  }
  return {
    zoomReset: v,
    zoomIn: C,
    zoomOut: R,
    expandAll: c,
    collapseAll: M,
    $root: o,
    root: h,
    rootId: f,
    find: d,
    findChildren: _,
    goToHome: u
  };
}
const de = { style: { position: "relative" } }, he = /* @__PURE__ */ S({
  __name: "MiniMap",
  setup(s) {
    const { instance: i, scene: a, container: l } = I("panzoom"), o = w({
      width: 0,
      height: 0,
      top: 0,
      left: 0
    }), e = w({
      width: 0,
      height: 0,
      top: 0,
      left: 0
    });
    function d(c, t) {
      let n;
      return function(...r) {
        const y = this;
        clearTimeout(n), n = setTimeout(() => {
          c.apply(y, r);
        }, t);
      };
    }
    const _ = () => {
      if (!l.value || !a.value || !(a.value.firstChild instanceof HTMLElement))
        return;
      const c = l.value.getBoundingClientRect(), t = a.value.firstChild.getBoundingClientRect();
      o.value = {
        width: c.width,
        height: c.height,
        top: c.top,
        left: c.left
      }, e.value = {
        width: t.width,
        height: t.height,
        top: t.top,
        left: t.left
      };
    }, h = d(_, 500);
    L(() => i.value, () => {
      i.value && i.value.on("transform", () => _());
    }), P(() => {
      h(), l.value && new ResizeObserver(h).observe(l.value), a.value && new ResizeObserver(h).observe(a.value);
    });
    const f = w(200), v = w(200), p = N(() => ({
      left: o.value.left - e.value.left + o.value.width,
      right: e.value.left - o.value.left + e.value.width,
      top: e.value.top - o.value.top,
      bottom: o.value.height - e.value.top + e.value.height
    })), u = (c) => {
      const t = Math.max(p.value.left, p.value.right, o.value.width, e.value.width), n = Math.max(p.value.top, p.value.bottom, o.value.height, e.value.height);
      return c * Math.min(f.value / t, v.value / n);
    }, C = () => {
      let c = Math.min(f.value / e.value.width, v.value / e.value.height);
      return e.value.width / o.value.width <= 1 && (c = c * e.value.width / o.value.width), {
        x: (e.value.left - o.value.left) * c,
        y: (e.value.top - o.value.top) * c
      };
    }, R = N(() => ({
      width: u(o.value.width),
      height: u(o.value.height),
      left: Math.max(u(o.value.left) - u(e.value.left), 0),
      top: Math.max(u(o.value.top) - u(e.value.top), 0)
    })), M = N(() => ({
      width: u(e.value.width),
      height: u(e.value.height),
      left: Math.max(Math.min(C().x, f.value - u(e.value.width)), 0),
      top: Math.max(Math.min(C().y, f.value - u(e.value.height)), 0)
    }));
    return (c, t) => (g(), x("div", {
      style: A([{
        width: f.value + "px",
        height: v.value + "px"
      }, { position: "absolute", padding: "5px", bottom: "0", right: "0", border: "1px solid #e1e1e1", "pointer-events": "none" }])
    }, [
      b("div", de, [
        b("div", {
          style: A([{ position: "absolute", "background-color": "rgba(255,255,255,0.40)", border: "1px solid #495db9", "pointer-events": "none" }, {
            height: R.value.height + "px",
            width: R.value.width + "px",
            top: R.value.top + "px",
            left: R.value.left + "px"
          }])
        }, null, 4),
        b("div", {
          style: A([{ position: "absolute", "background-color": "rgba(255,255,255,0.75)", border: "1px solid #d74848", "pointer-events": "none" }, {
            height: M.value.height + "px",
            width: M.value.width + "px",
            top: M.value.top + "px",
            left: M.value.left + "px"
          }])
        }, null, 4)
      ])
    ], 4));
  }
}), ve = { class: "vue3-org-chart" }, fe = { key: 1 }, pe = { key: 0 }, me = { key: 1 }, ge = /* @__PURE__ */ S({
  __name: "Vue3OrgChart",
  props: {
    data: { default: () => [] },
    json: {}
  },
  emits: ["onReady"],
  setup(s, { emit: i }) {
    const a = s, { instance: l, scene: o, container: e } = re();
    H("panzoom", { instance: l, scene: o, container: e });
    const { data: d, loading: _ } = ue({ initialData: a.data, json: a.json });
    H("content", { data: d, loading: _ });
    const h = ce(l, d, e, o);
    H("api", h);
    const f = i;
    return L(() => _.value, (v) => {
      v || f("onReady", { api: h });
    }), (v, p) => (g(), x("div", ve, [
      b("div", {
        ref_key: "container",
        ref: e,
        class: "vue3-org-chart-container"
      }, [
        b("div", {
          ref_key: "scene",
          ref: o,
          class: "vue3-org-chart-scene"
        }, [
          m(d).length && m(h).rootId() ? (g(), Y(se, {
            id: m(h).rootId(),
            key: "root"
          }, {
            node: O((u) => [
              k(v.$slots, "node", ee(te(u)))
            ]),
            _: 3
          }, 8, ["id"])) : (g(), x("div", fe, [
            m(_) ? (g(), x("span", pe, [
              k(v.$slots, "loading", {}, () => [
                j("Loading...")
              ])
            ])) : (g(), x("span", me, [
              k(v.$slots, "no-data", {}, () => [
                j("No data")
              ])
            ]))
          ]))
        ], 512)
      ], 512),
      X(he)
    ]));
  }
}), we = {
  /**
   * @param {import('vue').App} app
   * @param options
   */
  install(s, i = {}) {
    s.component("Vue3OrgChart", ge);
  }
};
export {
  ge as Vue3OrgChart,
  we as Vue3OrgChartPlugin
};
