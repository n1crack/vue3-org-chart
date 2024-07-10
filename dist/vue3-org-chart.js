import { ref as h, inject as N, reactive as b, onMounted as B, resolveComponent as D, openBlock as d, createElementBlock as m, renderSlot as y, createElementVNode as k, unref as _, createCommentVNode as T, withKeys as X, withModifiers as Y, createVNode as Z, Transition as A, withCtx as x, Fragment as H, renderList as M, createBlock as O, normalizeClass as P, provide as R, watch as E, createTextVNode as V } from "vue";
import I from "panzoom";
const K = { class: "vue3-org-chart-node" }, L = {
  key: 0,
  class: "vue3-org-chart-node-element-top-line"
}, F = {
  key: 1,
  class: "vue3-org-chart-node-element-bottom-line"
}, J = {
  key: 0,
  class: "vue3-org-chart-node-container"
}, q = {
  __name: "Node",
  props: {
    id: String
  },
  setup(t) {
    const r = t, o = h(null), { data: l } = N("content"), s = h(!1), i = N("api"), c = i.find(r.id), a = b(l.value.filter((v) => v.parentId === r.id));
    B(() => {
      c.parentId || (i.$root.value = o.value, i.reset());
    });
    const p = () => {
      a.length && (s.value = !s.value, i.goToHome(o.value));
    };
    return (v, u) => {
      const $ = D("Node", !0);
      return d(), m("div", K, [
        y(v.$slots, "top-border"),
        k("div", {
          class: "vue3-org-chart-node-element",
          ref_key: "element",
          ref: o
        }, [
          _(c).parentId ? (d(), m("div", L)) : T("", !0),
          k("div", {
            tabindex: "0",
            onKeydown: u[0] || (u[0] = X(Y((e) => _(i).goToHome(o.value), ["self", "prevent"]), ["space"]))
          }, [
            y(v.$slots, "node", {
              item: _(c),
              nodes: a,
              show: s.value,
              toggleChildren: p
            })
          ], 32),
          a.length && s.value ? (d(), m("div", F)) : T("", !0)
        ], 512),
        Z(A, { name: "nodeTransition" }, {
          default: x(() => [
            a.length && s.value ? (d(), m("div", J, [
              (d(!0), m(H, null, M(a, (e, n) => (d(), O($, {
                key: e.id,
                id: e.id,
                ref_for: !0,
                ref: "nodeRefs"
              }, {
                "top-border": x(() => [
                  k("div", {
                    class: P(["vue3-org-chart-node-element-horizontal-line", {
                      left: s.value && n !== 0,
                      right: s.value && n !== a.length - 1
                    }])
                  }, null, 2)
                ]),
                node: x(({ item: f, nodes: g, show: C, toggleChildren: w }) => [
                  y(v.$slots, "node", {
                    item: f,
                    nodes: g,
                    show: C,
                    toggleChildren: w
                  })
                ]),
                _: 2
              }, 1032, ["id"]))), 128))
            ])) : T("", !0)
          ]),
          _: 3
        })
      ]);
    };
  }
};
function G() {
  const t = h(), r = h(null), o = h(null);
  function l() {
    t.value = I(r.value, {
      zoomDoubleClickSpeed: 1.4,
      maxZoom: 5,
      minZoom: 0.1,
      initialZoom: 1,
      bounds: !1
    });
  }
  return B(() => {
    t.value || l();
  }), {
    scene: r,
    container: o,
    instance: t
  };
}
function Q({ initialData: t, json: r }) {
  const o = h(!0), l = h(t), s = async (i) => await (await fetch(i)).json();
  return B(async () => {
    r && (l.value = await s(r)), o.value = !1;
  }), {
    data: l,
    loading: o
  };
}
function U(t, r, o) {
  const l = h(null), s = b({ x: 0, y: 40 });
  function i(e) {
    return r.value.find((n) => n.id === e);
  }
  function c() {
    return r.value.find((e) => e.parentId === "" || !e.parentId);
  }
  function a() {
    return c().id;
  }
  function p() {
    const e = t.value.getTransform(), n = 0, f = 32;
    if (e.scale !== 1) {
      const g = 1 - e.scale, C = e.x / g, w = e.y / g;
      t.value.smoothZoomAbs(C, w, 1);
    } else
      t.value.smoothMoveTo(n, f);
  }
  function v(e) {
    const n = o.value.getBoundingClientRect(), f = e.getBoundingClientRect(), g = n.x + n.width / 2 + s.x, C = n.y + s.y, w = f.x + f.width / 2, S = f.y, j = g - w, z = C - S;
    t.value.moveBy(j, z, !0);
  }
  function u() {
    const e = t.value.getTransform(), n = o.value.getBoundingClientRect();
    t.value.zoomTo(n.width / 2, e.y, 2 / 3);
  }
  function $() {
    const e = t.value.getTransform(), n = o.value.getBoundingClientRect();
    t.value.zoomTo(n.width / 2, e.y, 3 / 2);
  }
  return {
    zoomReset: p,
    zoomIn: u,
    zoomOut: $,
    $root: l,
    root: c,
    rootId: a,
    find: i,
    goToHome: v
  };
}
const W = { class: "vue3-org-chart" }, ee = { key: 1 }, te = { key: 0 }, oe = { key: 1 }, ne = {
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
  setup(t, { emit: r }) {
    const o = t, { instance: l, scene: s, container: i } = G();
    R("panzoom", { instance: l, scene: s, container: i });
    const { data: c, loading: a } = Q({ initialData: o.data, json: o.json });
    R("content", { data: c, loading: a });
    const p = U(l, c, i);
    R("api", p);
    const v = r;
    return E(() => a.value, (u) => {
      u || v("onReady", { api: p });
    }), (u, $) => (d(), m("div", W, [
      k("div", {
        ref_key: "container",
        ref: i,
        class: "vue3-org-chart-container"
      }, [
        k("div", {
          ref_key: "scene",
          ref: s,
          class: "vue3-org-chart-scene"
        }, [
          _(c).length ? (d(), O(q, {
            id: _(p).rootId(),
            key: "root"
          }, {
            node: x(({ item: e, nodes: n, show: f, toggleChildren: g }) => [
              y(u.$slots, "node", {
                item: e,
                nodes: n,
                show: f,
                toggleChildren: g
              })
            ]),
            _: 3
          }, 8, ["id"])) : (d(), m("div", ee, [
            _(a) ? (d(), m("span", te, [
              y(u.$slots, "loading", {}, () => [
                V("Loading...")
              ])
            ])) : (d(), m("span", oe, [
              y(u.$slots, "no-data", {}, () => [
                V("No data")
              ])
            ]))
          ]))
        ], 512)
      ], 512)
    ]));
  }
}, ie = {
  /**
   * @param {import('vue').App} app
   * @param options
   */
  install(t, r = {}) {
    t.component("Vue3OrgChart", ne);
  }
};
export {
  ne as Vue3OrgChart,
  ie as Vue3OrgChartPlugin
};
