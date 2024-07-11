import { ref as C, computed as D, inject as E, onMounted as Z, resolveComponent as P, openBlock as u, createElementBlock as m, renderSlot as w, createElementVNode as T, unref as d, createCommentVNode as A, withKeys as H, withModifiers as I, createVNode as M, Transition as K, withCtx as B, Fragment as L, renderList as F, createBlock as S, normalizeClass as J, reactive as X, provide as O, watch as q, createTextVNode as j } from "vue";
import G from "panzoom";
const Q = { class: "vue3-org-chart-node" }, U = {
  key: 0,
  class: "vue3-org-chart-node-element-top-line"
}, W = {
  key: 1,
  class: "vue3-org-chart-node-element-bottom-line"
}, ee = {
  key: 0,
  class: "vue3-org-chart-node-container"
}, te = {
  __name: "Node",
  props: {
    id: String
  },
  setup(t) {
    const o = t, r = C(null), n = D(() => c.__show || !1), i = E("api"), c = i.find(o.id), a = i.findChildren(o.id);
    Z(() => {
      c.parentId || (i.$root.value = r.value, i.zoomReset());
    });
    const v = () => {
      a.length && (c.__show = !n.value, i.goToHome(r.value));
    };
    return (f, p) => {
      const h = P("Node", !0);
      return u(), m("div", Q, [
        w(f.$slots, "top-border"),
        T("div", {
          class: "vue3-org-chart-node-element",
          ref_key: "element",
          ref: r
        }, [
          d(c).parentId ? (u(), m("div", U)) : A("", !0),
          T("div", {
            tabindex: "0",
            onKeydown: p[0] || (p[0] = H(I((g) => d(i).goToHome(r.value), ["self", "prevent"]), ["space"]))
          }, [
            w(f.$slots, "node", {
              item: d(c),
              children: d(a),
              show: n.value,
              toggleChildren: v
            })
          ], 32),
          d(a).length && n.value ? (u(), m("div", W)) : A("", !0)
        ], 512),
        M(K, { name: "nodeTransition" }, {
          default: B(() => [
            d(a).length && n.value ? (u(), m("div", ee, [
              (u(!0), m(L, null, F(d(a), (g, _) => (u(), S(h, {
                key: g.id,
                id: g.id,
                ref_for: !0,
                ref: "nodeRefs"
              }, {
                "top-border": B(() => [
                  T("div", {
                    class: J(["vue3-org-chart-node-element-horizontal-line", {
                      left: n.value && _ !== 0,
                      right: n.value && _ !== d(a).length - 1
                    }])
                  }, null, 2)
                ]),
                node: B(({ item: x, children: k, show: $, toggleChildren: N }) => [
                  w(f.$slots, "node", {
                    item: x,
                    children: k,
                    show: $,
                    toggleChildren: N
                  })
                ]),
                _: 2
              }, 1032, ["id"]))), 128))
            ])) : A("", !0)
          ]),
          _: 3
        })
      ]);
    };
  }
};
function oe() {
  const t = C(), o = C(null), r = C(null);
  function n() {
    t.value = G(o.value, {
      zoomDoubleClickSpeed: 1.4,
      maxZoom: 5,
      minZoom: 0.1,
      initialZoom: 1,
      bounds: !1
    });
  }
  return Z(() => {
    t.value || n();
  }), {
    scene: o,
    container: r,
    instance: t
  };
}
function ne({ initialData: t, json: o }) {
  const r = C(!0), n = X(t), i = async (c) => await (await fetch(c)).json();
  return Z(async () => {
    o && Object.assign(n, await i(o)), r.value = !1;
  }), {
    data: n,
    loading: r
  };
}
function se(t, o, r, n) {
  const i = C(null), c = X({ x: 0, y: 40 });
  function a(e) {
    return o.find((s) => s.id === e);
  }
  function v(e) {
    return o.filter((s) => s.parentId === e);
  }
  function f() {
    return o.find((e) => e.parentId === "" || !e.parentId);
  }
  function p() {
    return f().id;
  }
  function h() {
    const e = t.value.getTransform(), s = 0, l = 32;
    if (e.scale !== 1) {
      const y = 1 - e.scale, R = e.x / y, b = e.y / y;
      t.value.smoothZoomAbs(R, b, 1);
    } else
      t.value.smoothMoveTo(s, l);
  }
  function g() {
    const e = t.value.getTransform(), s = r.value.getBoundingClientRect(), l = n.value.getBoundingClientRect(), y = l.x - s.x, R = l.y - s.y, b = y + l.width / 2, V = R + l.height / 2;
    return { x: b, y: V, scale: e.scale };
  }
  function _(e) {
    const s = r.value.getBoundingClientRect(), l = e.getBoundingClientRect(), y = s.x + s.width / 2 + c.x, R = s.y + c.y, b = l.x + l.width / 2, V = l.y, Y = y - b, z = R - V;
    t.value.moveBy(Y, z, !0);
  }
  function x() {
    const { x: e, y: s, scale: l } = g();
    t.value.smoothZoomAbs(e, s, l * 3 / 2);
  }
  function k() {
    const { x: e, y: s, scale: l } = g();
    t.value.smoothZoomAbs(e, s, l * 2 / 3);
  }
  function $() {
    o.forEach((e) => {
      e.__show = !1;
    });
  }
  function N() {
    o.forEach((e) => {
      e.__show = !0;
    });
  }
  return {
    zoomReset: h,
    zoomIn: x,
    zoomOut: k,
    expandAll: N,
    collapseAll: $,
    $root: i,
    root: f,
    rootId: p,
    find: a,
    findChildren: v,
    goToHome: _
  };
}
const re = { class: "vue3-org-chart" }, ie = { key: 1 }, ce = { key: 0 }, le = { key: 1 }, ae = {
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
  setup(t, { emit: o }) {
    const r = t, { instance: n, scene: i, container: c } = oe();
    O("panzoom", { instance: n, scene: i, container: c });
    const { data: a, loading: v } = ne({ initialData: r.data, json: r.json });
    O("content", { data: a, loading: v });
    const f = se(n, a, c, i);
    O("api", f);
    const p = o;
    return q(() => v.value, (h) => {
      h || p("onReady", { api: f });
    }), (h, g) => (u(), m("div", re, [
      T("div", {
        ref_key: "container",
        ref: c,
        class: "vue3-org-chart-container"
      }, [
        T("div", {
          ref_key: "scene",
          ref: i,
          class: "vue3-org-chart-scene"
        }, [
          d(a).length ? (u(), S(te, {
            id: d(f).rootId(),
            key: "root"
          }, {
            node: B(({ item: _, children: x, show: k, toggleChildren: $ }) => [
              w(h.$slots, "node", {
                item: _,
                children: x,
                show: k,
                toggleChildren: $
              })
            ]),
            _: 3
          }, 8, ["id"])) : (u(), m("div", ie, [
            d(v) ? (u(), m("span", ce, [
              w(h.$slots, "loading", {}, () => [
                j("Loading...")
              ])
            ])) : (u(), m("span", le, [
              w(h.$slots, "no-data", {}, () => [
                j("No data")
              ])
            ]))
          ]))
        ], 512)
      ], 512)
    ]));
  }
}, fe = {
  /**
   * @param {import('vue').App} app
   * @param options
   */
  install(t, o = {}) {
    t.component("Vue3OrgChart", ae);
  }
};
export {
  ae as Vue3OrgChart,
  fe as Vue3OrgChartPlugin
};
