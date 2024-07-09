import { ref as h, inject as N, reactive as T, resolveComponent as j, openBlock as a, createElementBlock as u, renderSlot as g, createElementVNode as _, unref as V, createCommentVNode as z, withKeys as S, withModifiers as X, createVNode as O, Transition as Y, withCtx as w, Fragment as Z, renderList as D, createBlock as b, normalizeClass as K, provide as R, onMounted as $, createTextVNode as M } from "vue";
import A from "panzoom";
const E = { class: "vue3-org-chart-node" }, F = {
  key: 0,
  class: "vue3-org-chart-node-element-top-line"
}, J = ["onKeydown"], L = {
  key: 1,
  class: "vue3-org-chart-node-element-bottom-line"
}, P = {
  key: 0,
  class: "vue3-org-chart-node-container"
}, q = {
  __name: "Node",
  props: {
    id: String
  },
  setup(m) {
    const v = m, p = h(null), f = N("data"), n = h(!1), y = f.value.find((t) => t.id === v.id), o = T(f.value.filter((t) => t.parentId === v.id)), c = N("panzoomInstance"), k = N("container"), x = () => {
      o.length && (n.value = !n.value, C());
    }, C = () => {
      const t = k.value.getBoundingClientRect(), e = p.value.getBoundingClientRect(), i = t.x + t.width / 2, r = t.y + t.height / 4, s = e.x + e.width / 2, l = e.y + e.height / 2, d = i - s, I = r - l;
      c.value.moveBy(d, I, !0);
    };
    return (t, e) => {
      const i = j("Node", !0);
      return a(), u("div", E, [
        g(t.$slots, "top-border"),
        _("div", {
          class: "vue3-org-chart-node-element",
          ref_key: "element",
          ref: p
        }, [
          V(y).parentId ? (a(), u("div", F)) : z("", !0),
          _("div", {
            tabindex: "0",
            onKeydown: S(X(C, ["self", "prevent"]), ["space"])
          }, [
            g(t.$slots, "node", {
              item: V(y),
              nodes: o,
              show: n.value,
              handleChildren: x
            })
          ], 40, J),
          o.length && n.value ? (a(), u("div", L)) : z("", !0)
        ], 512),
        O(Y, { name: "nodeTransition" }, {
          default: w(() => [
            o.length && n.value ? (a(), u("div", P, [
              (a(!0), u(Z, null, D(o, (r, s) => (a(), b(i, {
                key: r.id,
                id: r.id,
                ref_for: !0,
                ref: "nodeRefs"
              }, {
                "top-border": w(() => [
                  _("div", {
                    class: K(["vue3-org-chart-node-element-horizontal-line", {
                      left: n.value && s !== 0,
                      right: n.value && s !== o.length - 1
                    }])
                  }, null, 2)
                ]),
                node: w(({ item: l, nodes: d, show: I, handleChildren: B }) => [
                  g(t.$slots, "node", {
                    item: l,
                    nodes: d,
                    show: I,
                    handleChildren: B
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
  emits: ["onReady"],
  setup(m, { emit: v }) {
    const p = h(null), f = h(null), n = m, y = v, o = h(n.data), c = h();
    R("data", o), R("panzoomInstance", c), R("container", f);
    const k = async (e) => await (await fetch(e)).json();
    $(async () => {
      n.json && (o.value = await k(n.json)), y("onReady", {
        api: {
          reset: x
        }
      });
    }), $(() => {
      c.value = A(p.value, {
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
    return (e, i) => (a(), u("div", G, [
      _("div", {
        ref_key: "container",
        ref: f,
        class: "vue3-org-chart-container"
      }, [
        _("div", {
          ref_key: "scene",
          ref: p,
          class: "vue3-org-chart-scene"
        }, [
          o.value.length ? (a(), b(q, {
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
          }, 8, ["id"])) : (a(), u("div", H, [
            g(e.$slots, "no-data", {}, () => [
              M(" No data ")
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
  Q as Vue3OrgChart,
  ee as Vue3OrgChartPlugin
};
