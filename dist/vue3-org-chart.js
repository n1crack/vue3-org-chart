import { ref as g, inject as Z, reactive as O, onMounted as V, resolveComponent as j, openBlock as u, createElementBlock as m, renderSlot as C, createElementVNode as $, unref as x, createCommentVNode as B, withKeys as z, withModifiers as D, createVNode as P, Transition as H, withCtx as b, Fragment as I, renderList as M, createBlock as S, normalizeClass as E, provide as N, watch as K, createTextVNode as A } from "vue";
import L from "panzoom";
const F = { class: "vue3-org-chart-node" }, J = {
  key: 0,
  class: "vue3-org-chart-node-element-top-line"
}, q = {
  key: 1,
  class: "vue3-org-chart-node-element-bottom-line"
}, G = {
  key: 0,
  class: "vue3-org-chart-node-container"
}, Q = {
  __name: "Node",
  props: {
    id: String
  },
  setup(t) {
    const a = t, s = g(null), { data: l } = Z("content"), r = g(!1), i = Z("api"), f = i.find(a.id), c = O(l.value.filter((v) => v.parentId === a.id));
    V(() => {
      f.parentId || (i.$root.value = s.value, i.zoomReset());
    });
    const p = () => {
      c.length && (r.value = !r.value, i.goToHome(s.value));
    };
    return (v, d) => {
      const R = j("Node", !0);
      return u(), m("div", F, [
        C(v.$slots, "top-border"),
        $("div", {
          class: "vue3-org-chart-node-element",
          ref_key: "element",
          ref: s
        }, [
          x(f).parentId ? (u(), m("div", J)) : B("", !0),
          $("div", {
            tabindex: "0",
            onKeydown: d[0] || (d[0] = z(D((y) => x(i).goToHome(s.value), ["self", "prevent"]), ["space"]))
          }, [
            C(v.$slots, "node", {
              item: x(f),
              nodes: c,
              show: r.value,
              toggleChildren: p
            })
          ], 32),
          c.length && r.value ? (u(), m("div", q)) : B("", !0)
        ], 512),
        P(H, { name: "nodeTransition" }, {
          default: b(() => [
            c.length && r.value ? (u(), m("div", G, [
              (u(!0), m(I, null, M(c, (y, _) => (u(), S(R, {
                key: y.id,
                id: y.id,
                ref_for: !0,
                ref: "nodeRefs"
              }, {
                "top-border": b(() => [
                  $("div", {
                    class: E(["vue3-org-chart-node-element-horizontal-line", {
                      left: r.value && _ !== 0,
                      right: r.value && _ !== c.length - 1
                    }])
                  }, null, 2)
                ]),
                node: b(({ item: e, nodes: o, show: n, toggleChildren: h }) => [
                  C(v.$slots, "node", {
                    item: e,
                    nodes: o,
                    show: n,
                    toggleChildren: h
                  })
                ]),
                _: 2
              }, 1032, ["id"]))), 128))
            ])) : B("", !0)
          ]),
          _: 3
        })
      ]);
    };
  }
};
function U() {
  const t = g(), a = g(null), s = g(null);
  function l() {
    t.value = L(a.value, {
      zoomDoubleClickSpeed: 1.4,
      maxZoom: 5,
      minZoom: 0.1,
      initialZoom: 1,
      bounds: !1
    });
  }
  return V(() => {
    t.value || l();
  }), {
    scene: a,
    container: s,
    instance: t
  };
}
function W({ initialData: t, json: a }) {
  const s = g(!0), l = g(t), r = async (i) => await (await fetch(i)).json();
  return V(async () => {
    a && (l.value = await r(a)), s.value = !1;
  }), {
    data: l,
    loading: s
  };
}
function ee(t, a, s, l) {
  const r = g(null), i = O({ x: 0, y: 40 });
  function f(e) {
    return a.value.find((o) => o.id === e);
  }
  function c() {
    return a.value.find((e) => e.parentId === "" || !e.parentId);
  }
  function p() {
    return c().id;
  }
  function v() {
    const e = t.value.getTransform(), o = 0, n = 32;
    if (e.scale !== 1) {
      const h = 1 - e.scale, k = e.x / h, w = e.y / h;
      t.value.smoothZoomAbs(k, w, 1);
    } else
      t.value.smoothMoveTo(o, n);
  }
  function d() {
    const e = t.value.getTransform(), o = s.value.getBoundingClientRect(), n = l.value.getBoundingClientRect(), h = n.x - o.x, k = n.y - o.y, w = h + n.width / 2, T = k + n.height / 2;
    return { x: w, y: T, scale: e.scale };
  }
  function R(e) {
    const o = s.value.getBoundingClientRect(), n = e.getBoundingClientRect(), h = o.x + o.width / 2 + i.x, k = o.y + i.y, w = n.x + n.width / 2, T = n.y, X = h - w, Y = k - T;
    t.value.moveBy(X, Y, !0);
  }
  function y() {
    const { x: e, y: o, scale: n } = d();
    t.value.smoothZoomAbs(e, o, n * 3 / 2);
  }
  function _() {
    const { x: e, y: o, scale: n } = d();
    t.value.smoothZoomAbs(e, o, n * 2 / 3);
  }
  return {
    zoomReset: v,
    zoomIn: y,
    zoomOut: _,
    $root: r,
    root: c,
    rootId: p,
    find: f,
    goToHome: R
  };
}
const te = { class: "vue3-org-chart" }, oe = { key: 1 }, ne = { key: 0 }, se = { key: 1 }, re = {
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
  emits: ["onReady"],
  setup(t, { emit: a }) {
    const s = t, { instance: l, scene: r, container: i } = U();
    N("panzoom", { instance: l, scene: r, container: i });
    const { data: f, loading: c } = W({ initialData: s.data, json: s.json });
    N("content", { data: f, loading: c });
    const p = ee(l, f, i, r);
    N("api", p);
    const v = a;
    return K(() => c.value, (d) => {
      d || v("onReady", { api: p });
    }), (d, R) => (u(), m("div", te, [
      $("div", {
        ref_key: "container",
        ref: i,
        class: "vue3-org-chart-container"
      }, [
        $("div", {
          ref_key: "scene",
          ref: r,
          class: "vue3-org-chart-scene"
        }, [
          x(f).length ? (u(), S(Q, {
            id: x(p).rootId(),
            key: "root"
          }, {
            node: b(({ item: y, nodes: _, show: e, toggleChildren: o }) => [
              C(d.$slots, "node", {
                item: y,
                nodes: _,
                show: e,
                toggleChildren: o
              })
            ]),
            _: 3
          }, 8, ["id"])) : (u(), m("div", oe, [
            x(c) ? (u(), m("span", ne, [
              C(d.$slots, "loading", {}, () => [
                A("Loading...")
              ])
            ])) : (u(), m("span", se, [
              C(d.$slots, "no-data", {}, () => [
                A("No data")
              ])
            ]))
          ]))
        ], 512)
      ], 512)
    ]));
  }
}, ce = {
  /**
   * @param {import('vue').App} app
   * @param options
   */
  install(t, a = {}) {
    t.component("Vue3OrgChart", re);
  }
};
export {
  re as Vue3OrgChart,
  ce as Vue3OrgChartPlugin
};
