import { ref as h, inject as N, reactive as V, resolveComponent as j, openBlock as a, createElementBlock as u, renderSlot as g, createElementVNode as _, unref as $, createCommentVNode as z, withKeys as S, withModifiers as X, createVNode as Y, Transition as Z, withCtx as w, Fragment as D, renderList as K, createBlock as B, normalizeClass as M, provide as R, onMounted as b, createTextVNode as A } from "vue";
import E from "panzoom";
const O = { class: "vue3-org-chart-node" }, F = {
  key: 0,
  class: "vue3-org-chart-node-element-top-line"
}, J = ["onKeydown"], L = {
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
  setup(m) {
    const v = m, f = h(null), p = N("data"), n = h(!1), y = p.value.find((t) => t.id === v.id), o = V(p.value.filter((t) => t.parentId === v.id)), c = N("panzoomInstance"), k = N("container"), x = () => {
      o.length && (n.value = !n.value, C());
    }, C = () => {
      const t = k.value.getBoundingClientRect(), e = f.value.getBoundingClientRect(), i = t.x + t.width / 2, r = t.y + t.height / 4, s = e.x + e.width / 2, l = e.y + e.height / 2, d = i - s, I = r - l;
      c.value.moveBy(d, I, !0);
    };
    return (t, e) => {
      const i = j("Node", !0);
      return a(), u("div", O, [
        g(t.$slots, "top-border"),
        _("div", {
          class: "vue3-org-chart-node-element",
          ref_key: "element",
          ref: f
        }, [
          $(y).parentId ? (a(), u("div", F)) : z("", !0),
          _("div", {
            tabindex: "0",
            onKeydown: S(X(C, ["self", "prevent"]), ["space"])
          }, [
            g(t.$slots, "node", {
              item: $(y),
              nodes: o,
              show: n.value,
              handleChildren: x
            })
          ], 40, J),
          o.length && n.value ? (a(), u("div", L)) : z("", !0)
        ], 512),
        Y(Z, { name: "nodeTransition" }, {
          default: w(() => [
            o.length && n.value ? (a(), u("div", q, [
              (a(!0), u(D, null, K(o, (r, s) => (a(), B(i, {
                key: r.id,
                id: r.id,
                ref_for: !0,
                ref: "nodeRefs"
              }, {
                "top-border": w(() => [
                  _("div", {
                    class: M(["vue3-org-chart-node-element-horizontal-line", {
                      left: n.value && s !== 0,
                      right: n.value && s !== o.length - 1
                    }])
                  }, null, 2)
                ]),
                node: w(({ item: l, nodes: d, show: I, handleChildren: T }) => [
                  g(t.$slots, "node", {
                    item: l,
                    nodes: d,
                    show: I,
                    handleChildren: T
                  })
                ]),
                _: 2
              }, 1032, ["id"]))), 128))
            ])) : z("", !0)
          ]),
          _: 3
        })
      ]);
    };
  }
}, H = { class: "vue3-org-chart" }, P = { key: 1 }, Q = {
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
  setup(m, { emit: v }) {
    const f = h(null), p = h(null), n = m, y = v, o = h(n.data), c = h();
    R("data", o), R("panzoomInstance", c), R("container", p);
    const k = async (e) => await (await fetch(e)).json();
    b(async () => {
      n.json && (o.value = await k(n.json)), y("onReady", {
        api: {
          reset: x
        }
      });
    }), b(() => {
      c.value = E(f.value, {
        zoomDoubleClickSpeed: 1.4,
        maxZoom: 5,
        minZoom: 0.1,
        initialX: 0,
        initialZoom: 1,
        bounds: !1
      });
    });
    const x = () => {
      const e = c.value.getTransform(), i = 0, r = 0;
      if (e.scale !== 1) {
        const s = 1 - e.scale, l = e.x / s, d = e.y / s;
        c.value.smoothZoomAbs(l, d, 1);
      } else
        c.value.smoothMoveTo(i, r, 1);
    }, C = () => o.value.find((e) => e.parentId === "" || !e.parentId), t = () => C().id;
    return (e, i) => (a(), u("div", H, [
      _("div", {
        ref_key: "container",
        ref: p,
        class: "vue3-org-chart-container"
      }, [
        _("div", {
          ref_key: "scene",
          ref: f,
          class: "vue3-org-chart-scene"
        }, [
          o.value.length ? (a(), B(G, {
            id: t(),
            key: "root"
          }, {
            node: w(({ item: r, nodes: s, show: l, handleChildren: d }) => [
              g(e.$slots, "node", {
                item: r,
                nodes: s,
                show: l,
                handleChildren: d
              })
            ]),
            _: 3
          }, 8, ["id"])) : (a(), u("div", P, [
            g(e.$slots, "no-data", {}, () => [
              A(" No data ")
            ])
          ]))
        ], 512)
      ], 512)
    ]));
  }
}, ee = {
  /**
   * @param {import('vue').App} app
   * @param options
   */
  install(m, v = {}) {
    m.component("Vue3OrgChart", Q);
  }
};
export {
  ee as default
};
