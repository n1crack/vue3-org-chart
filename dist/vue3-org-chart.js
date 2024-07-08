import { ref as m, inject as y, reactive as T, resolveComponent as V, openBlock as a, createElementBlock as u, renderSlot as k, createElementVNode as v, unref as R, createCommentVNode as N, withKeys as X, withModifiers as Z, createVNode as Y, Transition as D, withCtx as w, Fragment as K, renderList as M, createBlock as j, normalizeClass as A, onMounted as $, provide as C } from "vue";
import E from "panzoom";
const O = { class: "vue3-org-chart-node" }, P = {
  key: 0,
  class: "vue3-org-chart-node-element-top-line"
}, F = ["onKeydown"], J = {
  key: 1,
  class: "vue3-org-chart-node-element-bottom-line"
}, L = {
  key: 0,
  class: "vue3-org-chart-node-container"
}, q = {
  __name: "Node",
  props: {
    id: String
  },
  setup(f) {
    const c = f, p = m(null), h = y("data"), s = m(!1), i = h.value.find((e) => e.id === c.id), x = y("panzoomInstance");
    y("scene");
    const I = y("container"), l = () => {
      o.length && (s.value = !s.value, g());
    }, g = () => {
      const e = I.value.getBoundingClientRect(), n = p.value.getBoundingClientRect(), d = e.x + e.width / 2, r = e.y + e.height / 4, _ = n.x + n.width / 2, b = n.y + n.height / 2, z = d - _, B = r - b;
      x.value.moveBy(z, B, !0);
    }, o = T(((e) => h.value.filter((n) => n.parentId === e))(c.id));
    return (e, n) => {
      const d = V("Node", !0);
      return a(), u("div", O, [
        k(e.$slots, "top-border"),
        v("div", {
          class: "vue3-org-chart-node-element",
          ref_key: "element",
          ref: p
        }, [
          R(i).parentId ? (a(), u("div", P)) : N("", !0),
          v("div", {
            tabindex: "0",
            onKeydown: X(Z(g, ["self", "prevent"]), ["space"])
          }, [
            k(e.$slots, "node", {
              item: R(i),
              nodes: o,
              show: s.value,
              handleChildren: l
            })
          ], 40, F),
          o.length && s.value ? (a(), u("div", J)) : N("", !0)
        ], 512),
        Y(D, { name: "nodeTransition" }, {
          default: w(() => [
            o.length && s.value ? (a(), u("div", L, [
              (a(!0), u(K, null, M(o, (r, _) => (a(), j(d, {
                key: r.id,
                id: r.id,
                ref_for: !0,
                ref: "nodeRefs"
              }, {
                "top-border": w(() => [
                  v("div", {
                    class: A(["vue3-org-chart-node-element-horizontal-line", {
                      left: s.value && _ !== 0,
                      right: s.value && _ !== o.length - 1
                    }])
                  }, null, 2)
                ]),
                node: w(({ item: b, nodes: z, show: B, handleChildren: S }) => [
                  k(e.$slots, "node", {
                    item: b,
                    nodes: z,
                    show: B,
                    handleChildren: S
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
}, G = { class: "vue3-org-chart" }, H = { key: 1 }, Q = {
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
  setup(f) {
    const c = m(null), p = m(null), h = f, s = async (t) => await (await fetch(t)).json(), i = m(h.data);
    $(async () => {
      if (h.json) {
        const t = await s(h.json);
        i.value = t;
      }
    }), C("data", i);
    const x = () => i.value.find((t) => t.parentId === "" || !t.parentId), I = () => x().id, l = m(null);
    C("panzoomInstance", l), C("scene", c), C("container", p), $(() => {
      l.value = E(c.value, {
        zoomDoubleClickSpeed: 1.4,
        maxZoom: 5,
        minZoom: 0.1,
        initialX: 0,
        initialZoom: 1,
        bounds: !1
      });
    });
    const g = () => {
      const t = l.value.getTransform(), o = 0, e = 0;
      if (t.scale !== 1) {
        const n = 1 - t.scale, d = t.x / n, r = t.y / n;
        l.value.smoothZoomAbs(d, r, 1);
      } else
        l.value.smoothMoveTo(o, e, 1);
    };
    return (t, o) => (a(), u("div", G, [
      v("button", { onClick: g }, "Reset Zoom"),
      v("div", {
        ref_key: "container",
        ref: p,
        class: "vue3-org-chart-container"
      }, [
        v("div", {
          ref_key: "scene",
          ref: c,
          class: "vue3-org-chart-scene"
        }, [
          i.value.length ? (a(), j(q, {
            id: I(),
            key: "root"
          }, {
            node: w(({ item: e, nodes: n, show: d, handleChildren: r }) => [
              k(t.$slots, "node", {
                item: e,
                nodes: n,
                show: d,
                handleChildren: r
              })
            ]),
            _: 3
          }, 8, ["id"])) : (a(), u("div", H, " No data "))
        ], 512)
      ], 512)
    ]));
  }
}, ee = {
  /**
   * @param {import('vue').App} app
   * @param options
   */
  install(f, c = {}) {
    f.component("Vue3OrgChart", Q);
  }
};
export {
  ee as default
};
