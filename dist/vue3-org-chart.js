import { ref as f, inject as z, reactive as R, onMounted as b, resolveComponent as j, openBlock as l, createElementBlock as v, renderSlot as g, createElementVNode as k, unref as _, createCommentVNode as N, withKeys as D, withModifiers as O, createVNode as S, Transition as H, withCtx as w, Fragment as P, renderList as Z, createBlock as T, normalizeClass as A, provide as V, watch as E, createTextVNode as B } from "vue";
import K from "panzoom";
const L = { class: "vue3-org-chart-node" }, M = {
  key: 0,
  class: "vue3-org-chart-node-element-top-line"
}, X = {
  key: 1,
  class: "vue3-org-chart-node-element-bottom-line"
}, Y = {
  key: 0,
  class: "vue3-org-chart-node-container"
}, F = {
  __name: "Node",
  props: {
    id: String
  },
  setup(r) {
    const n = r, o = f(null), { data: a } = z("content"), e = f(!1), s = z("api"), c = s.find(n.id), i = R(a.value.filter((d) => d.parentId === n.id));
    b(() => {
      c.parentId || (s.$root.value = o.value, s.reset());
    });
    const h = () => {
      i.length && (e.value = !e.value, s.goToHome(o.value));
    };
    return (d, t) => {
      const m = j("Node", !0);
      return l(), v("div", L, [
        g(d.$slots, "top-border"),
        k("div", {
          class: "vue3-org-chart-node-element",
          ref_key: "element",
          ref: o
        }, [
          _(c).parentId ? (l(), v("div", M)) : N("", !0),
          k("div", {
            tabindex: "0",
            onKeydown: t[0] || (t[0] = D(O((u) => _(s).goToHome(o.value), ["self", "prevent"]), ["space"]))
          }, [
            g(d.$slots, "node", {
              item: _(c),
              nodes: i,
              show: e.value,
              toggleChildren: h
            })
          ], 32),
          i.length && e.value ? (l(), v("div", X)) : N("", !0)
        ], 512),
        S(H, { name: "nodeTransition" }, {
          default: w(() => [
            i.length && e.value ? (l(), v("div", Y, [
              (l(!0), v(P, null, Z(i, (u, p) => (l(), T(m, {
                key: u.id,
                id: u.id,
                ref_for: !0,
                ref: "nodeRefs"
              }, {
                "top-border": w(() => [
                  k("div", {
                    class: A(["vue3-org-chart-node-element-horizontal-line", {
                      left: e.value && p !== 0,
                      right: e.value && p !== i.length - 1
                    }])
                  }, null, 2)
                ]),
                node: w(({ item: y, nodes: C, show: $, toggleChildren: I }) => [
                  g(d.$slots, "node", {
                    item: y,
                    nodes: C,
                    show: $,
                    toggleChildren: I
                  })
                ]),
                _: 2
              }, 1032, ["id"]))), 128))
            ])) : N("", !0)
          ]),
          _: 3
        })
      ]);
    };
  }
};
function J() {
  const r = f(), n = f(null), o = f(null);
  function a() {
    r.value = K(n.value, {
      zoomDoubleClickSpeed: 1.4,
      maxZoom: 5,
      minZoom: 0.1,
      initialZoom: 1,
      bounds: !1
    });
  }
  return b(() => {
    r.value || a();
  }), {
    scene: n,
    container: o,
    instance: r
  };
}
function q({ initialData: r, json: n }) {
  const o = f(!0), a = f(r), e = async (s) => await (await fetch(s)).json();
  return b(async () => {
    n && (a.value = await e(n)), o.value = !1;
  }), {
    data: a,
    loading: o
  };
}
function G(r, n, o) {
  const a = f(null), e = R({ x: 0, y: 40 });
  function s(t) {
    return n.value.find((m) => m.id === t);
  }
  function c() {
    return n.value.find((t) => t.parentId === "" || !t.parentId);
  }
  function i() {
    return c().id;
  }
  function h() {
    d(a.value);
  }
  function d(t) {
    const m = o.value.getBoundingClientRect(), u = t.getBoundingClientRect(), p = m.x + m.width / 2 + e.x, y = m.y + e.y, C = u.x + u.width / 2, $ = u.y, I = p - C, x = y - $;
    r.value.moveBy(I, x, !0);
  }
  return {
    reset: h,
    $root: a,
    root: c,
    rootId: i,
    find: s,
    goToHome: d
  };
}
const Q = { class: "vue3-org-chart" }, U = { key: 1 }, W = { key: 0 }, ee = { key: 1 }, te = {
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
  setup(r, { emit: n }) {
    const o = r, { instance: a, scene: e, container: s } = J();
    V("panzoom", { instance: a, scene: e, container: s });
    const { data: c, loading: i } = q({ initialData: o.data, json: o.json });
    V("content", { data: c, loading: i });
    const h = G(a, c, s);
    V("api", h);
    const d = n;
    return E(() => i.value, (t) => {
      t || d("onReady", { api: h });
    }), (t, m) => (l(), v("div", Q, [
      k("div", {
        ref_key: "container",
        ref: s,
        class: "vue3-org-chart-container"
      }, [
        k("div", {
          ref_key: "scene",
          ref: e,
          class: "vue3-org-chart-scene"
        }, [
          _(c).length ? (l(), T(F, {
            id: _(h).rootId(),
            key: "root"
          }, {
            node: w(({ item: u, nodes: p, show: y, toggleChildren: C }) => [
              g(t.$slots, "node", {
                item: u,
                nodes: p,
                show: y,
                toggleChildren: C
              })
            ]),
            _: 3
          }, 8, ["id"])) : (l(), v("div", U, [
            _(i) ? (l(), v("span", W, [
              g(t.$slots, "loading", {}, () => [
                B("Loading...")
              ])
            ])) : (l(), v("span", ee, [
              g(t.$slots, "no-data", {}, () => [
                B("No data")
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
  install(r, n = {}) {
    r.component("Vue3OrgChart", te);
  }
};
export {
  te as Vue3OrgChart,
  re as Vue3OrgChartPlugin
};
