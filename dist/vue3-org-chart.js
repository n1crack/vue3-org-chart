import { defineComponent as X, ref as b, inject as L, computed as $, onMounted as A, resolveComponent as K, openBlock as m, createElementBlock as _, renderSlot as z, createElementVNode as C, unref as f, createCommentVNode as V, withKeys as W, withModifiers as q, createVNode as F, Transition as J, withCtx as E, Fragment as G, renderList as Q, createBlock as j, normalizeClass as U, mergeProps as ee, reactive as I, normalizeStyle as S, provide as Z, watch as te, normalizeProps as oe, guardReactiveProps as ne, createTextVNode as D } from "vue";
import ie from "panzoom";
const ae = { class: "vue3-org-chart-node" }, le = {
  key: 0,
  class: "vue3-org-chart-node-element-top-line"
}, se = {
  key: 1,
  class: "vue3-org-chart-node-element-bottom-line"
}, re = {
  key: 0,
  class: "vue3-org-chart-node-container"
}, ue = /* @__PURE__ */ X({
  __name: "Node",
  props: {
    id: { type: String, required: !0 }
  },
  setup(a) {
    const s = a, i = b(null), l = L("api"), d = l.find(s.id), u = $(() => d.__open || !1), r = l.findChildren(s.id);
    A(() => {
      d.parentId || (l.$root.value = i.value, l.zoomReset(), d.__open = !0);
    });
    const o = () => {
      r.length && (d.__open = !u.value, l.goToHome(i.value));
    };
    return (e, y) => {
      const p = K("Node", !0);
      return m(), _("div", ae, [
        z(e.$slots, "top-border"),
        C("div", {
          class: "vue3-org-chart-node-element",
          ref_key: "element",
          ref: i
        }, [
          f(d).parentId ? (m(), _("div", le)) : V("", !0),
          C("div", {
            tabindex: "0",
            onKeydown: y[0] || (y[0] = W(q((w) => f(l).goToHome(i.value), ["self", "prevent"]), ["space"]))
          }, [
            z(e.$slots, "node", {
              item: f(d),
              children: f(r),
              open: u.value,
              toggleChildren: o
            })
          ], 32),
          f(r).length && u.value ? (m(), _("div", se)) : V("", !0)
        ], 512),
        F(J, { name: "nodeTransition" }, {
          default: E(() => [
            f(r).length && u.value ? (m(), _("div", re, [
              (m(!0), _(G, null, Q(f(r), (w, g) => (m(), j(p, {
                key: w.id,
                id: w.id,
                ref_for: !0,
                ref: "nodeRefs"
              }, {
                "top-border": E(() => [
                  C("div", {
                    class: U(["vue3-org-chart-node-element-horizontal-line", {
                      left: u.value && g !== 0,
                      right: u.value && g !== f(r).length - 1
                    }])
                  }, null, 2)
                ]),
                node: E((v) => [
                  z(e.$slots, "node", ee({ ref_for: !0 }, v))
                ]),
                _: 2
              }, 1032, ["id"]))), 128))
            ])) : V("", !0)
          ]),
          _: 3
        })
      ]);
    };
  }
});
function ce() {
  let a = b();
  const s = b(null), i = b(null);
  function l() {
    s.value && (a.value = ie(s.value, {
      zoomDoubleClickSpeed: 1.4,
      maxZoom: 5,
      minZoom: 0.1,
      initialZoom: 1,
      bounds: !1
    }));
  }
  return A(() => {
    a.value || l();
  }), {
    instance: a,
    container: i,
    scene: s
  };
}
function de({ initialData: a, json: s }) {
  const i = b(!0), l = I(a), d = async (u) => await (await fetch(u)).json();
  return A(async () => {
    s && Object.assign(l, await d(s)), i.value = !1;
  }), {
    data: l,
    loading: i
  };
}
function he(a, s, i, l, d) {
  const u = b(null), r = I({ x: 0, y: 40 }), o = I({
    state: d,
    toggle: () => {
      o.state = !o.state;
    }
  });
  function e(t) {
    const n = s.find((c) => c.id === t);
    if (!n)
      throw new Error(`Node with id ${t} not found`);
    return n;
  }
  function y(t) {
    return s.filter((n) => n.parentId === t);
  }
  function p() {
    const t = s.find((n) => n.parentId === "" || !n.parentId);
    if (!t)
      throw new Error("Root node not found");
    return t;
  }
  function w() {
    var t;
    return (t = p()) == null ? void 0 : t.id;
  }
  function g() {
    const t = a.value.getTransform(), n = 0, c = 32;
    if (t.scale !== 1) {
      const k = 1 - t.scale, B = t.x / k, T = t.y / k;
      a.value.smoothZoomAbs(B, T, 1);
    } else
      a.value.smoothMoveTo(n, c);
  }
  function v() {
    var O, P;
    const t = a.value.getTransform(), n = (O = i.value) == null ? void 0 : O.getBoundingClientRect(), c = (P = l.value) == null ? void 0 : P.getBoundingClientRect();
    if (!n || !c)
      return { ...r, scale: 1 };
    const k = c.x - n.x, B = c.y - n.y, T = k + c.width / 2, H = B + c.height / 2;
    return { x: T, y: H, scale: t.scale };
  }
  function N(t) {
    var Y;
    const n = (Y = i.value) == null ? void 0 : Y.getBoundingClientRect();
    if (!n || !t)
      return;
    const c = t.getBoundingClientRect(), k = n.x + n.width / 2 + r.x, B = n.y + r.y, T = c.x + c.width / 2, H = c.y, O = k - T, P = B - H;
    a.value.moveBy(O, P, !0);
  }
  function R() {
    const { x: t, y: n, scale: c } = v();
    a.value.smoothZoomAbs(t, n, c * 3 / 2);
  }
  function M() {
    const { x: t, y: n, scale: c } = v();
    a.value.smoothZoomAbs(t, n, c * 2 / 3);
  }
  function h() {
    s.forEach((t) => {
      t.__open = !1;
    });
  }
  function x() {
    s.forEach((t) => {
      t.__open = !0;
    });
  }
  return {
    zoomReset: g,
    zoomIn: R,
    zoomOut: M,
    expandAll: x,
    collapseAll: h,
    $root: u,
    root: p,
    rootId: w,
    find: e,
    findChildren: y,
    goToHome: N,
    minimap: o
  };
}
const ve = /* @__PURE__ */ X({
  __name: "MiniMap",
  props: {
    size: {
      type: Number,
      default: 1 / 6
    }
  },
  setup(a) {
    const { instance: s, scene: i, container: l } = L("panzoom"), d = a, u = $(() => o.value.width * d.size), r = $(() => o.value.height * d.size), o = b({
      width: 0,
      height: 0,
      top: 0,
      left: 0
    }), e = b({
      width: 0,
      height: 0,
      top: 0,
      left: 0
    });
    function y(h, x) {
      let t;
      return function(...n) {
        const c = this;
        clearTimeout(t), t = setTimeout(() => {
          h.apply(c, n);
        }, x);
      };
    }
    const p = () => {
      if (!l.value || !i.value || !(i.value.firstChild instanceof HTMLElement))
        return;
      const h = l.value.getBoundingClientRect(), x = i.value.firstChild.getBoundingClientRect();
      o.value = {
        width: h.width,
        height: h.height,
        top: h.top,
        left: h.left
      }, e.value = {
        width: x.width,
        height: x.height,
        top: x.top,
        left: x.left
      };
    }, w = y(p, 500);
    A(() => {
      p(), s.value.on("transform", () => p()), l.value && new ResizeObserver(w).observe(l.value), i.value && new ResizeObserver(w).observe(i.value);
    });
    const g = $(() => ({
      left: o.value.left - e.value.left + o.value.width,
      right: e.value.left - o.value.left + e.value.width,
      top: o.value.top - e.value.top + o.value.height,
      bottom: e.value.top - o.value.top + e.value.height
    })), v = (h) => {
      const x = Math.max(g.value.left, g.value.right, o.value.width, e.value.width), t = Math.max(g.value.top, g.value.bottom, o.value.height, e.value.height);
      return h * Math.min(u.value / x, r.value / t);
    }, N = () => {
      let h = Math.min(u.value / e.value.width, r.value / e.value.height);
      return e.value.width / o.value.width <= 1 && (h = h * e.value.width / o.value.width), {
        x: (e.value.left - o.value.left) * h,
        y: (e.value.top - o.value.top) * h
      };
    }, R = $(() => ({
      width: v(o.value.width),
      height: v(o.value.height),
      left: Math.max(v(o.value.left) - v(e.value.left), 0),
      top: Math.max(v(o.value.top) - v(e.value.top), 0)
    })), M = $(() => ({
      width: v(e.value.width),
      height: v(e.value.height),
      left: Math.max(Math.min(N().x, u.value - v(e.value.width)), 0),
      top: Math.max(Math.min(N().y, r.value - v(e.value.height)), 0)
    }));
    return (h, x) => (m(), _("div", {
      style: S([{
        width: u.value + "px",
        height: r.value + "px"
      }, { position: "absolute", padding: "0", bottom: "0", right: "0", border: "1px solid #e1e1e1", "pointer-events": "none" }])
    }, [
      C("div", {
        style: S([{ position: "absolute", "background-color": "rgba(255,255,255,0.30)", border: "1px solid #ff8c8c", "pointer-events": "none" }, {
          height: M.value.height + "px",
          width: M.value.width + "px",
          top: M.value.top + "px",
          left: M.value.left + "px"
        }])
      }, null, 4),
      C("div", {
        style: S([{ position: "absolute", "background-color": "rgba(255,255,255,0.30)", border: "1px solid #8ee5f8", "pointer-events": "none" }, {
          height: R.value.height + "px",
          width: R.value.width + "px",
          top: R.value.top + "px",
          left: R.value.left + "px"
        }])
      }, null, 4)
    ], 4));
  }
}), pe = { class: "vue3-org-chart" }, fe = { key: 1 }, me = { key: 0 }, ge = { key: 1 }, xe = /* @__PURE__ */ X({
  __name: "Vue3OrgChart",
  props: {
    data: { default: () => [] },
    json: {},
    minimap: { type: Boolean, default: !1 }
  },
  emits: ["onReady"],
  setup(a, { emit: s }) {
    const i = a, { instance: l, scene: d, container: u } = ce();
    Z("panzoom", { instance: l, scene: d, container: u });
    const { data: r, loading: o } = de({ initialData: i.data, json: i.json });
    Z("content", { data: r, loading: o });
    const e = he(l, r, u, d, i.minimap);
    Z("api", e);
    const y = s;
    return te(() => o.value, (p) => {
      p || y("onReady", { api: e });
    }), (p, w) => (m(), _("div", pe, [
      C("div", {
        ref_key: "container",
        ref: u,
        class: "vue3-org-chart-container"
      }, [
        C("div", {
          ref_key: "scene",
          ref: d,
          class: "vue3-org-chart-scene"
        }, [
          f(r).length && f(e).rootId() ? (m(), j(ue, {
            id: f(e).rootId(),
            key: "root"
          }, {
            node: E((g) => [
              z(p.$slots, "node", oe(ne(g)))
            ]),
            _: 3
          }, 8, ["id"])) : (m(), _("div", fe, [
            f(o) ? (m(), _("span", me, [
              z(p.$slots, "loading", {}, () => [
                D("Loading...")
              ])
            ])) : (m(), _("span", ge, [
              z(p.$slots, "no-data", {}, () => [
                D("No data")
              ])
            ]))
          ]))
        ], 512)
      ], 512),
      f(e).minimap.state ? (m(), j(ve, { key: 0 })) : V("", !0)
    ]));
  }
}), ye = {
  /**
   * @param {import('vue').App} app
   * @param options
   */
  install(a, s = {}) {
    a.component("Vue3OrgChart", xe);
  }
};
export {
  xe as Vue3OrgChart,
  ye as Vue3OrgChartPlugin
};
