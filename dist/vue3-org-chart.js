import { defineComponent as X, ref as C, inject as I, computed as S, onMounted as Z, resolveComponent as H, openBlock as f, createElementBlock as h, renderSlot as x, createElementVNode as R, unref as u, createCommentVNode as E, withKeys as M, withModifiers as K, createVNode as L, Transition as q, withCtx as T, Fragment as F, renderList as J, createBlock as Y, normalizeClass as G, mergeProps as Q, reactive as z, provide as O, watch as U, createTextVNode as P } from "vue";
import W from "panzoom";
const ee = { class: "vue3-org-chart-node" }, oe = {
  key: 0,
  class: "vue3-org-chart-node-element-top-line"
}, te = {
  key: 1,
  class: "vue3-org-chart-node-element-bottom-line"
}, ne = {
  key: 0,
  class: "vue3-org-chart-node-container"
}, re = /* @__PURE__ */ X({
  __name: "Node",
  props: {
    id: { type: String, required: !0 }
  },
  setup(t) {
    const n = t, c = C(null), s = I("api"), a = s.find(n.id), i = S(() => a.__open || !1), l = s.findChildren(n.id);
    Z(() => {
      a.parentId || (s.$root.value = c.value, s.zoomReset(), a.__open = !0);
    });
    const v = () => {
      l.length && (a.__open = !i.value, s.goToHome(c.value));
    };
    return (d, g) => {
      const m = H("Node", !0);
      return f(), h("div", ee, [
        x(d.$slots, "top-border"),
        R("div", {
          class: "vue3-org-chart-node-element",
          ref_key: "element",
          ref: c
        }, [
          u(a).parentId ? (f(), h("div", oe)) : E("", !0),
          R("div", {
            tabindex: "0",
            onKeydown: g[0] || (g[0] = M(K((p) => u(s).goToHome(c.value), ["self", "prevent"]), ["space"]))
          }, [
            x(d.$slots, "node", {
              item: u(a),
              children: u(l),
              open: i.value,
              toggleChildren: v
            })
          ], 32),
          u(l).length && i.value ? (f(), h("div", te)) : E("", !0)
        ], 512),
        L(q, { name: "nodeTransition" }, {
          default: T(() => [
            u(l).length && i.value ? (f(), h("div", ne, [
              (f(!0), h(F, null, J(u(l), (p, _) => (f(), Y(m, {
                key: p.id,
                id: p.id,
                ref_for: !0,
                ref: "nodeRefs"
              }, {
                "top-border": T(() => [
                  R("div", {
                    class: G(["vue3-org-chart-node-element-horizontal-line", {
                      left: i.value && _ !== 0,
                      right: i.value && _ !== u(l).length - 1
                    }])
                  }, null, 2)
                ]),
                node: T((w) => [
                  x(d.$slots, "node", Q({ ref_for: !0 }, w))
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
function se() {
  const t = C(), n = C(null), c = C(null);
  function s() {
    n.value && (t.value = W(n.value, {
      zoomDoubleClickSpeed: 1.4,
      maxZoom: 5,
      minZoom: 0.1,
      initialZoom: 1,
      bounds: !1
    }));
  }
  return Z(() => {
    t.value || s();
  }), {
    scene: n,
    container: c,
    instance: t
  };
}
function ie({ initialData: t, json: n }) {
  const c = C(!0), s = z(t), a = async (i) => await (await fetch(i)).json();
  return Z(async () => {
    n && Object.assign(s, await a(n)), c.value = !1;
  }), {
    data: s,
    loading: c
  };
}
function ce(t, n, c, s) {
  const a = C(null), i = z({ x: 0, y: 40 });
  function l(e) {
    const o = n.find((r) => r.id === e);
    if (!o)
      throw new Error(`Node with id ${e} not found`);
    return o;
  }
  function v(e) {
    return n.filter((o) => o.parentId === e);
  }
  function d() {
    const e = n.find((o) => o.parentId === "" || !o.parentId);
    if (!e)
      throw new Error("Root node not found");
    return e;
  }
  function g() {
    var e;
    return (e = d()) == null ? void 0 : e.id;
  }
  function m() {
    const e = t.value.getTransform(), o = 0, r = 32;
    if (e.scale !== 1) {
      const y = 1 - e.scale, k = e.x / y, $ = e.y / y;
      t.value.smoothZoomAbs(k, $, 1);
    } else
      t.value.smoothMoveTo(o, r);
  }
  function p() {
    var b, N;
    const e = t.value.getTransform(), o = (b = c.value) == null ? void 0 : b.getBoundingClientRect(), r = (N = s.value) == null ? void 0 : N.getBoundingClientRect();
    if (!o || !r)
      return { ...i, scale: 1 };
    const y = r.x - o.x, k = r.y - o.y, $ = y + r.width / 2, A = k + r.height / 2;
    return { x: $, y: A, scale: e.scale };
  }
  function _(e) {
    var j;
    const o = (j = c.value) == null ? void 0 : j.getBoundingClientRect();
    if (!o || !e)
      return;
    const r = e.getBoundingClientRect(), y = o.x + o.width / 2 + i.x, k = o.y + i.y, $ = r.x + r.width / 2, A = r.y, b = y - $, N = k - A;
    t.value.moveBy(b, N, !0);
  }
  function w() {
    const { x: e, y: o, scale: r } = p();
    t.value.smoothZoomAbs(e, o, r * 3 / 2);
  }
  function B() {
    const { x: e, y: o, scale: r } = p();
    t.value.smoothZoomAbs(e, o, r * 2 / 3);
  }
  function V() {
    n.forEach((e) => {
      e.__open = !1;
    });
  }
  function D() {
    n.forEach((e) => {
      e.__open = !0;
    });
  }
  return {
    zoomReset: m,
    zoomIn: w,
    zoomOut: B,
    expandAll: D,
    collapseAll: V,
    $root: a,
    root: d,
    rootId: g,
    find: l,
    findChildren: v,
    goToHome: _
  };
}
const ae = { class: "vue3-org-chart" }, le = { key: 1 }, ue = { key: 0 }, de = { key: 1 }, fe = /* @__PURE__ */ X({
  __name: "Vue3OrgChart",
  props: {
    data: { default: () => [] },
    json: {}
  },
  emits: ["onReady"],
  setup(t, { emit: n }) {
    const c = t, { instance: s, scene: a, container: i } = se();
    O("panzoom", { instance: s, scene: a, container: i });
    const { data: l, loading: v } = ie({ initialData: c.data, json: c.json });
    O("content", { data: l, loading: v });
    const d = ce(s, l, i, a);
    O("api", d);
    const g = n;
    return U(() => v.value, (m) => {
      m || g("onReady", { api: d });
    }), (m, p) => (f(), h("div", ae, [
      R("div", {
        ref_key: "container",
        ref: i,
        class: "vue3-org-chart-container"
      }, [
        R("div", {
          ref_key: "scene",
          ref: a,
          class: "vue3-org-chart-scene"
        }, [
          u(l).length && u(d).rootId() ? (f(), Y(re, {
            id: u(d).rootId(),
            key: "root"
          }, {
            node: T(({ item: _, children: w, open: B, toggleChildren: V }) => [
              x(m.$slots, "node", {
                item: _,
                children: w,
                open: B,
                toggleChildren: V
              })
            ]),
            _: 3
          }, 8, ["id"])) : (f(), h("div", le, [
            u(v) ? (f(), h("span", ue, [
              x(m.$slots, "loading", {}, () => [
                P("Loading...")
              ])
            ])) : (f(), h("span", de, [
              x(m.$slots, "no-data", {}, () => [
                P("No data")
              ])
            ]))
          ]))
        ], 512)
      ], 512)
    ]));
  }
}), ve = {
  /**
   * @param {import('vue').App} app
   * @param options
   */
  install(t, n = {}) {
    t.component("Vue3OrgChart", fe);
  }
};
export {
  fe as Vue3OrgChart,
  ve as Vue3OrgChartPlugin
};
