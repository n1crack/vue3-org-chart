import { ref as m, inject as b, reactive as S, resolveComponent as X, openBlock as i, createElementBlock as d, renderSlot as _, createElementVNode as C, unref as k, createCommentVNode as V, withKeys as j, withModifiers as D, createVNode as O, Transition as Y, withCtx as w, Fragment as Z, renderList as A, createBlock as z, normalizeClass as K, onMounted as I, provide as B, watch as M, createTextVNode as T } from "vue";
import E from "panzoom";
const L = { class: "vue3-org-chart-node" }, P = {
  key: 0,
  class: "vue3-org-chart-node-element-top-line"
}, F = ["onKeydown"], J = {
  key: 1,
  class: "vue3-org-chart-node-element-bottom-line"
}, q = {
  key: 0,
  class: "vue3-org-chart-node-container"
}, G = {
  __name: "Node",
  props: {
    id: String
  },
  setup(e) {
    const o = e, s = m(null), { instance: r, container: u } = b("panzoom"), { data: t } = b("content"), n = m(!1), h = t.value.find((l) => l.id === o.id), a = S(t.value.filter((l) => l.parentId === o.id)), y = () => {
      a.length && (n.value = !n.value, c(s.value));
    }, c = (l) => {
      const v = u.value.getBoundingClientRect(), f = l.getBoundingClientRect(), g = v.x + v.width / 2, p = v.y + v.height / 4, $ = f.x + f.width / 2, x = f.y + f.height / 2, N = g - $, R = p - x;
      r.value.moveBy(N, R, !0);
    };
    return (l, v) => {
      const f = X("Node", !0);
      return i(), d("div", L, [
        _(l.$slots, "top-border"),
        C("div", {
          class: "vue3-org-chart-node-element",
          ref_key: "element",
          ref: s
        }, [
          k(h).parentId ? (i(), d("div", P)) : V("", !0),
          C("div", {
            tabindex: "0",
            onKeydown: j(D(c, ["self", "prevent"]), ["space"])
          }, [
            _(l.$slots, "node", {
              item: k(h),
              nodes: a,
              show: n.value,
              toggleChildren: y
            })
          ], 40, F),
          a.length && n.value ? (i(), d("div", J)) : V("", !0)
        ], 512),
        O(Y, { name: "nodeTransition" }, {
          default: w(() => [
            a.length && n.value ? (i(), d("div", q, [
              (i(!0), d(Z, null, A(a, (g, p) => (i(), z(f, {
                key: g.id,
                id: g.id,
                ref_for: !0,
                ref: "nodeRefs"
              }, {
                "top-border": w(() => [
                  C("div", {
                    class: K(["vue3-org-chart-node-element-horizontal-line", {
                      left: n.value && p !== 0,
                      right: n.value && p !== a.length - 1
                    }])
                  }, null, 2)
                ]),
                node: w(({ item: $, nodes: x, show: N, toggleChildren: R }) => [
                  _(l.$slots, "node", {
                    item: $,
                    nodes: x,
                    show: N,
                    toggleChildren: R
                  })
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
};
function H() {
  const e = m(), o = m(null), s = m(null);
  function r() {
    e.value = E(o.value, {
      zoomDoubleClickSpeed: 1.4,
      maxZoom: 5,
      minZoom: 0.1,
      initialX: 0,
      initialZoom: 1,
      bounds: !1
    });
  }
  return I(() => {
    e.value || r();
  }), {
    scene: o,
    container: s,
    instance: e
  };
}
function Q({ initialData: e, json: o }) {
  const s = m(!0), r = m(e), u = async (t) => await (await fetch(t)).json();
  return I(async () => {
    o && (r.value = await u(o)), s.value = !1;
  }), {
    data: r,
    loading: s
  };
}
function U(e, o) {
  function s() {
    return o.value.find((t) => t.parentId === "" || !t.parentId);
  }
  function r() {
    return s().id;
  }
  function u() {
    const t = e.value.getTransform(), n = 0, h = 0;
    if (t.scale !== 1) {
      const a = 1 - t.scale, y = t.x / a, c = t.y / a;
      e.value.smoothZoomAbs(y, c, 1);
    } else
      e.value.smoothMoveTo(n, h);
  }
  return {
    reset: u,
    getRoot: s,
    getRootId: r
  };
}
const W = { class: "vue3-org-chart" }, ee = { key: 1 }, te = { key: 0 }, ne = { key: 1 }, oe = {
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
  setup(e, { emit: o }) {
    const s = e, { instance: r, scene: u, container: t } = H();
    B("panzoom", { instance: r, scene: u, container: t });
    const { data: n, loading: h } = Q({ initialData: s.data, json: s.json });
    B("content", { data: n, loading: h });
    const a = U(r, n), y = o;
    return M(() => h.value, (c) => {
      c || y("onReady", { api: a });
    }), (c, l) => (i(), d("div", W, [
      C("div", {
        ref_key: "container",
        ref: t,
        class: "vue3-org-chart-container"
      }, [
        C("div", {
          ref_key: "scene",
          ref: u,
          class: "vue3-org-chart-scene"
        }, [
          k(n).length ? (i(), z(G, {
            id: k(a).getRootId(),
            key: "root"
          }, {
            node: w(({ item: v, nodes: f, show: g, toggleChildren: p }) => [
              _(c.$slots, "node", {
                item: v,
                nodes: f,
                show: g,
                toggleChildren: p
              })
            ]),
            _: 3
          }, 8, ["id"])) : (i(), d("div", ee, [
            k(h) ? (i(), d("span", te, [
              _(c.$slots, "loading", {}, () => [
                T("Loading...")
              ])
            ])) : (i(), d("span", ne, [
              _(c.$slots, "no-data", {}, () => [
                T("No data")
              ])
            ]))
          ]))
        ], 512)
      ], 512)
    ]));
  }
}, re = {
  /**
   * @param {import('vue').App} app
   * @param options
   */
  install(e, o = {}) {
    e.component("Vue3OrgChart", oe);
  }
};
export {
  oe as Vue3OrgChart,
  re as Vue3OrgChartPlugin
};
