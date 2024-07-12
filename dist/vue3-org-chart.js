import { defineComponent as S, ref as C, inject as I, computed as P, onMounted as Z, resolveComponent as H, openBlock as f, createElementBlock as v, renderSlot as x, createElementVNode as $, unref as l, createCommentVNode as E, withKeys as M, withModifiers as K, createVNode as L, Transition as q, withCtx as T, Fragment as F, renderList as J, createBlock as X, normalizeClass as G, reactive as Y, provide as O, watch as Q, createTextVNode as D } from "vue";
import U from "panzoom";
const W = { class: "vue3-org-chart-node" }, ee = {
  key: 0,
  class: "vue3-org-chart-node-element-top-line"
}, ne = {
  key: 1,
  class: "vue3-org-chart-node-element-bottom-line"
}, oe = {
  key: 0,
  class: "vue3-org-chart-node-container"
}, te = /* @__PURE__ */ S({
  __name: "Node",
  props: {
    id: { type: String, required: !0 }
  },
  setup(o) {
    const t = o, c = C(null), r = I("api"), a = r.find(t.id), i = P(() => a.__hidden || !0), d = r.findChildren(t.id);
    Z(() => {
      a.parentId || (r.$root.value = c.value, r.zoomReset(), a.__hidden = !1);
    });
    const m = () => {
      d.length && (a.__hidden = !show.value, r.goToHome(c.value));
    };
    return (u, p) => {
      const h = H("Node", !0);
      return f(), v("div", W, [
        x(u.$slots, "top-border"),
        $("div", {
          class: "vue3-org-chart-node-element",
          ref_key: "element",
          ref: c
        }, [
          l(a).parentId ? (f(), v("div", ee)) : E("", !0),
          $("div", {
            tabindex: "0",
            onKeydown: p[0] || (p[0] = M(K((g) => l(r).goToHome(c.value), ["self", "prevent"]), ["space"]))
          }, [
            x(u.$slots, "node", {
              node: l(a),
              children: l(d),
              hidden: i.value,
              toggleChildren: m
            })
          ], 32),
          l(d).length && !i.value ? (f(), v("div", ne)) : E("", !0)
        ], 512),
        L(q, { name: "nodeTransition" }, {
          default: T(() => [
            l(d).length && !i.value ? (f(), v("div", oe, [
              (f(!0), v(F, null, J(l(d), (g, _) => (f(), X(h, {
                key: g.id,
                id: g.id,
                ref_for: !0,
                ref: "nodeRefs"
              }, {
                "top-border": T(() => [
                  $("div", {
                    class: G(["vue3-org-chart-node-element-horizontal-line", {
                      left: !i.value && _ !== 0,
                      right: !i.value && _ !== l(d).length - 1
                    }])
                  }, null, 2)
                ]),
                node: T((R) => [
                  x(u.$slots, "node", {
                    node: g,
                    children: l(d),
                    hidden: i.value,
                    toggleChildren: m
                  })
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
  const o = C(), t = C(null), c = C(null);
  function r() {
    t.value && (o.value = U(t.value, {
      zoomDoubleClickSpeed: 1.4,
      maxZoom: 5,
      minZoom: 0.1,
      initialZoom: 1,
      bounds: !1
    }));
  }
  return Z(() => {
    o.value || r();
  }), {
    scene: t,
    container: c,
    instance: o
  };
}
function re({ initialData: o, json: t }) {
  const c = C(!0), r = Y(o), a = async (i) => await (await fetch(i)).json();
  return Z(async () => {
    t && Object.assign(r, await a(t)), c.value = !1;
  }), {
    data: r,
    loading: c
  };
}
function ie(o, t, c, r) {
  const a = C(null), i = Y({ x: 0, y: 40 });
  function d(e) {
    const n = t.find((s) => s.id === e);
    if (!n)
      throw new Error(`Node with id ${e} not found`);
    return n;
  }
  function m(e) {
    return t.filter((n) => n.parentId === e);
  }
  function u() {
    const e = t.find((n) => n.parentId === "" || !n.parentId);
    if (!e)
      throw new Error("Root node not found");
    return e;
  }
  function p() {
    var e;
    return (e = u()) == null ? void 0 : e.id;
  }
  function h() {
    const e = o.value.getTransform(), n = 0, s = 32;
    if (e.scale !== 1) {
      const y = 1 - e.scale, w = e.x / y, k = e.y / y;
      o.value.smoothZoomAbs(w, k, 1);
    } else
      o.value.smoothMoveTo(n, s);
  }
  function g() {
    var b, N;
    const e = o.value.getTransform(), n = (b = c.value) == null ? void 0 : b.getBoundingClientRect(), s = (N = r.value) == null ? void 0 : N.getBoundingClientRect();
    if (!n || !s)
      return { ...i, scale: 1 };
    const y = s.x - n.x, w = s.y - n.y, k = y + s.width / 2, A = w + s.height / 2;
    return { x: k, y: A, scale: e.scale };
  }
  function _(e) {
    var j;
    const n = (j = c.value) == null ? void 0 : j.getBoundingClientRect();
    if (!n || !e)
      return;
    const s = e.getBoundingClientRect(), y = n.x + n.width / 2 + i.x, w = n.y + i.y, k = s.x + s.width / 2, A = s.y, b = y - k, N = w - A;
    o.value.moveBy(b, N, !0);
  }
  function R() {
    const { x: e, y: n, scale: s } = g();
    o.value.smoothZoomAbs(e, n, s * 3 / 2);
  }
  function B() {
    const { x: e, y: n, scale: s } = g();
    o.value.smoothZoomAbs(e, n, s * 2 / 3);
  }
  function V() {
    t.forEach((e) => {
      e.__hidden = !1;
    });
  }
  function z() {
    t.forEach((e) => {
      e.__hidden = !0;
    });
  }
  return {
    zoomReset: h,
    zoomIn: R,
    zoomOut: B,
    expandAll: z,
    collapseAll: V,
    $root: a,
    root: u,
    rootId: p,
    find: d,
    findChildren: m,
    goToHome: _
  };
}
const ce = { class: "vue3-org-chart" }, ae = { key: 1 }, de = { key: 0 }, le = { key: 1 }, ue = /* @__PURE__ */ S({
  __name: "Vue3OrgChart",
  props: {
    data: { default: () => [] },
    json: {}
  },
  emits: ["onReady"],
  setup(o, { emit: t }) {
    const c = o, { instance: r, scene: a, container: i } = se();
    O("panzoom", { instance: r, scene: a, container: i });
    const { data: d, loading: m } = re({ initialData: c.data, json: c.json });
    O("content", { data: d, loading: m });
    const u = ie(r, d, i, a);
    O("api", u);
    const p = t;
    return Q(() => m.value, (h) => {
      h || p("onReady", { api: u });
    }), (h, g) => (f(), v("div", ce, [
      $("div", {
        ref_key: "container",
        ref: i,
        class: "vue3-org-chart-container"
      }, [
        $("div", {
          ref_key: "scene",
          ref: a,
          class: "vue3-org-chart-scene"
        }, [
          l(d).length && l(u).rootId() ? (f(), X(te, {
            id: l(u).rootId(),
            key: "root"
          }, {
            node: T(({ node: _, children: R, hidden: B, toggleChildren: V }) => [
              x(h.$slots, "node", {
                node: _,
                children: R,
                hidden: B,
                toggleChildren: V
              })
            ]),
            _: 3
          }, 8, ["id"])) : (f(), v("div", ae, [
            l(m) ? (f(), v("span", de, [
              x(h.$slots, "loading", {}, () => [
                D("Loading...")
              ])
            ])) : (f(), v("span", le, [
              x(h.$slots, "no-data", {}, () => [
                D("No data")
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
  install(o, t = {}) {
    o.component("Vue3OrgChart", ue);
  }
};
export {
  ue as Vue3OrgChart,
  ve as Vue3OrgChartPlugin
};
