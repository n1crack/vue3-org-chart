import { defineComponent as X, ref as b, inject as L, computed as $, onMounted as V, resolveComponent as K, openBlock as m, createElementBlock as y, renderSlot as M, createElementVNode as C, unref as p, createCommentVNode as O, withKeys as W, withModifiers as q, createVNode as F, Transition as J, withCtx as S, Fragment as G, renderList as Q, createBlock as j, normalizeClass as U, mergeProps as ee, reactive as D, normalizeStyle as H, provide as Z, watch as te, normalizeProps as oe, guardReactiveProps as ne, createTextVNode as I } from "vue";
import ae from "panzoom";
const ie = { class: "vue3-org-chart-node" }, se = {
  key: 0,
  class: "vue3-org-chart-node-element-top-line"
}, re = {
  key: 1,
  class: "vue3-org-chart-node-element-bottom-line"
}, le = {
  key: 0,
  class: "vue3-org-chart-node-container"
}, ue = /* @__PURE__ */ X({
  __name: "Node",
  props: {
    id: { type: String, required: !0 }
  },
  setup(i) {
    const r = i, a = b(null), s = L("api"), l = s.find(r.id), o = $(() => l.__open || !1), t = s.findChildren(r.id);
    V(() => {
      l.parentId || (s.$root.value = a.value, s.zoomReset(), l.__open = !0);
    });
    const h = () => {
      t.length && (l.__open = !o.value, s.goToHome(a.value));
    };
    return (c, x) => {
      const f = K("Node", !0);
      return m(), y("div", ie, [
        M(c.$slots, "top-border"),
        C("div", {
          class: "vue3-org-chart-node-element",
          ref_key: "element",
          ref: a
        }, [
          p(l).parentId ? (m(), y("div", se)) : O("", !0),
          C("div", {
            tabindex: "0",
            onKeydown: x[0] || (x[0] = W(q((w) => p(s).goToHome(a.value), ["self", "prevent"]), ["space"]))
          }, [
            M(c.$slots, "node", {
              item: p(l),
              children: p(t),
              open: o.value,
              toggleChildren: h
            })
          ], 32),
          p(t).length && o.value ? (m(), y("div", re)) : O("", !0)
        ], 512),
        F(J, { name: "nodeTransition" }, {
          default: S(() => [
            p(t).length && o.value ? (m(), y("div", le, [
              (m(!0), y(G, null, Q(p(t), (w, _) => (m(), j(f, {
                key: w.id,
                id: w.id,
                ref_for: !0,
                ref: "nodeRefs"
              }, {
                "top-border": S(() => [
                  C("div", {
                    class: U(["vue3-org-chart-node-element-horizontal-line", {
                      left: o.value && _ !== 0,
                      right: o.value && _ !== p(t).length - 1
                    }])
                  }, null, 2)
                ]),
                node: S((d) => [
                  M(c.$slots, "node", ee({ ref_for: !0 }, d))
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
function ce() {
  let i = b();
  const r = b(null), a = b(null);
  function s() {
    r.value && (i.value = ae(r.value, {
      zoomDoubleClickSpeed: 1.4,
      maxZoom: 5,
      minZoom: 0.1,
      initialZoom: 1,
      bounds: !1
    }));
  }
  return V(() => {
    i.value || s();
  }), {
    instance: i,
    container: a,
    scene: r
  };
}
function de({ initialData: i, json: r }) {
  const a = b(!0), s = D(i), l = async (o) => await (await fetch(o)).json();
  return V(async () => {
    r && Object.assign(s, await l(r)), a.value = !1;
  }), {
    data: s,
    loading: a
  };
}
function ve(i, r, a, s, l) {
  const o = b(null), t = D({ x: 0, y: 40 }), h = D({
    state: l,
    toggle: () => {
      h.state = !h.state;
    }
  });
  function c(e) {
    const n = r.find((u) => u.id === e);
    if (!n)
      throw new Error(`Node with id ${e} not found`);
    return n;
  }
  function x(e) {
    return r.filter((n) => n.parentId === e);
  }
  function f() {
    const e = r.find((n) => n.parentId === "" || !n.parentId);
    if (!e)
      throw new Error("Root node not found");
    return e;
  }
  function w() {
    var e;
    return (e = f()) == null ? void 0 : e.id;
  }
  function _() {
    const e = i.value.getTransform(), n = 0, u = 32;
    if (e.scale !== 1) {
      const R = 1 - e.scale, k = e.x / R, z = e.y / R;
      i.value.smoothZoomAbs(k, z, 1);
    } else
      i.value.smoothMoveTo(n, u);
  }
  function d() {
    var T, N;
    const e = i.value.getTransform(), n = (T = a.value) == null ? void 0 : T.getBoundingClientRect(), u = (N = s.value) == null ? void 0 : N.getBoundingClientRect();
    if (!n || !u)
      return { ...t, scale: 1 };
    const R = u.x - n.x, k = u.y - n.y, z = R + u.width / 2, A = k + u.height / 2;
    return { x: z, y: A, scale: e.scale };
  }
  function B(e) {
    var Y;
    const n = (Y = a.value) == null ? void 0 : Y.getBoundingClientRect();
    if (!n || !e)
      return;
    const u = e.getBoundingClientRect(), R = n.x + n.width / 2 + t.x, k = n.y + t.y, z = u.x + u.width / 2, A = u.y, T = R - z, N = k - A;
    i.value.moveBy(T, N, !0);
  }
  function E() {
    const { x: e, y: n, scale: u } = d();
    i.value.smoothZoomAbs(e, n, u * 3 / 2);
  }
  function P() {
    const { x: e, y: n, scale: u } = d();
    i.value.smoothZoomAbs(e, n, u * 2 / 3);
  }
  function v() {
    r.forEach((e) => {
      e.__open = !1;
    });
  }
  function g() {
    r.forEach((e) => {
      e.__open = !0;
    });
  }
  return {
    zoomReset: _,
    zoomIn: E,
    zoomOut: P,
    expandAll: g,
    collapseAll: v,
    $root: o,
    root: f,
    rootId: w,
    find: c,
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
    const { instance: r, scene: a, container: s } = L("panzoom"), l = i, o = b({ width: 0, height: 0, top: 0, left: 0 }), t = b({ width: 0, height: 0, top: 0, left: 0 }), h = $(() => o.value.width * l.size), c = $(() => o.value.height * l.size), x = (v, g) => {
      let e;
      return function(...n) {
        clearTimeout(e), e = setTimeout(() => v.apply(this, n), g);
      };
    }, f = () => {
      !s.value || !a.value || !(a.value.firstChild instanceof HTMLElement) || (o.value = s.value.getBoundingClientRect(), t.value = a.value.firstChild.getBoundingClientRect());
    }, w = x(f, 500);
    V(() => {
      f(), r.value.on("transform", f);
      const v = new ResizeObserver(w);
      s.value && v.observe(s.value), a.value && v.observe(a.value);
    });
    const _ = $(() => ({
      left: o.value.left - t.value.left + o.value.width,
      right: t.value.left - o.value.left + t.value.width,
      top: o.value.top - t.value.top + o.value.height,
      bottom: t.value.top - o.value.top + t.value.height
    })), d = (v) => {
      const g = Math.max(
        _.value.left,
        _.value.right,
        o.value.width,
        t.value.width
      ), e = Math.max(
        _.value.top,
        _.value.bottom,
        o.value.height,
        t.value.height
      );
      return v * Math.min(h.value / g, c.value / e);
    }, B = (v, g, e, n) => ({ width: `${v}px`, height: `${g}px`, left: `${Math.max(e, 0)}px`, top: `${Math.max(n, 0)}px` }), E = $(() => {
      const v = d(o.value.width), g = d(o.value.height), e = Math.max(d(o.value.left - t.value.left), 0), n = Math.max(d(o.value.top - t.value.top), 0);
      return B(v, g, e, n);
    }), P = $(() => {
      const v = d(t.value.width), g = d(t.value.height), e = Math.min(d(t.value.left - o.value.left), h.value - d(t.value.width)), n = Math.min(d(t.value.top - o.value.top), c.value - d(t.value.height));
      return B(v, g, e, n);
    });
    return (v, g) => (m(), y("div", {
      style: H([{ width: h.value + "px", height: c.value + "px" }, { position: "absolute", padding: "0", bottom: "0", right: "0", border: "1px solid #e1e1e1", "pointer-events": "none" }])
    }, [
      C("div", {
        style: H([{ position: "absolute", "background-color": "rgba(255,255,255,0.30)", border: "1px solid #ff8c8c", "pointer-events": "none" }, P.value])
      }, null, 4),
      C("div", {
        style: H([{ position: "absolute", "background-color": "rgba(255,255,255,0.30)", border: "1px solid #8ee5f8", "pointer-events": "none" }, E.value])
      }, null, 4)
    ], 4));
  }
}), fe = { class: "vue3-org-chart" }, pe = { key: 1 }, me = { key: 0 }, ge = { key: 1 }, _e = /* @__PURE__ */ X({
  __name: "Vue3OrgChart",
  props: {
    data: { default: () => [] },
    json: {},
    minimap: { type: Boolean, default: !1 }
  },
  emits: ["onReady"],
  setup(i, { emit: r }) {
    const a = i, { instance: s, scene: l, container: o } = ce();
    Z("panzoom", { instance: s, scene: l, container: o });
    const { data: t, loading: h } = de({ initialData: a.data, json: a.json });
    Z("content", { data: t, loading: h });
    const c = ve(s, t, o, l, a.minimap);
    Z("api", c);
    const x = r;
    return te(() => h.value, (f) => {
      f || x("onReady", { api: c });
    }), (f, w) => (m(), y("div", fe, [
      C("div", {
        ref_key: "container",
        ref: o,
        class: "vue3-org-chart-container"
      }, [
        C("div", {
          ref_key: "scene",
          ref: l,
          class: "vue3-org-chart-scene"
        }, [
          p(t).length && p(c).rootId() ? (m(), j(ue, {
            id: p(c).rootId(),
            key: "root"
          }, {
            node: S((_) => [
              M(f.$slots, "node", oe(ne(_)))
            ]),
            _: 3
          }, 8, ["id"])) : (m(), y("div", pe, [
            p(h) ? (m(), y("span", me, [
              M(f.$slots, "loading", {}, () => [
                I("Loading...")
              ])
            ])) : (m(), y("span", ge, [
              M(f.$slots, "no-data", {}, () => [
                I("No data")
              ])
            ]))
          ]))
        ], 512)
      ], 512),
      !p(h) && p(c).minimap.state ? (m(), j(he, { key: 0 })) : O("", !0)
    ]));
  }
}), we = {
  /**
   * @param {import('vue').App} app
   * @param options
   */
  install(i, r = {}) {
    i.component("Vue3OrgChart", _e);
  }
};
export {
  _e as Vue3OrgChart,
  we as Vue3OrgChartPlugin
};
