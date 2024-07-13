"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),$=require("panzoom"),S={class:"vue3-org-chart-node"},z={key:0,class:"vue3-org-chart-node-element-top-line"},T={key:1,class:"vue3-org-chart-node-element-bottom-line"},O={key:0,class:"vue3-org-chart-node-container"},P=e.defineComponent({__name:"Node",props:{id:{type:String,required:!0}},setup(i){const c=i,a=e.ref(null),r=e.inject("api"),h=r.find(c.id),u=e.computed(()=>h.__open||!1),s=r.findChildren(c.id);e.onMounted(()=>{h.parentId||(r.$root.value=a.value,r.zoomReset(),h.__open=!0)});const n=()=>{s.length&&(h.__open=!u.value,r.goToHome(a.value))};return(t,w)=>{const f=e.resolveComponent("Node",!0);return e.openBlock(),e.createElementBlock("div",S,[e.renderSlot(t.$slots,"top-border"),e.createElementVNode("div",{class:"vue3-org-chart-node-element",ref_key:"element",ref:a},[e.unref(h).parentId?(e.openBlock(),e.createElementBlock("div",z)):e.createCommentVNode("",!0),e.createElementVNode("div",{tabindex:"0",onKeydown:w[0]||(w[0]=e.withKeys(e.withModifiers(x=>e.unref(r).goToHome(a.value),["self","prevent"]),["space"]))},[e.renderSlot(t.$slots,"node",{item:e.unref(h),children:e.unref(s),open:u.value,toggleChildren:n})],32),e.unref(s).length&&u.value?(e.openBlock(),e.createElementBlock("div",T)):e.createCommentVNode("",!0)],512),e.createVNode(e.Transition,{name:"nodeTransition"},{default:e.withCtx(()=>[e.unref(s).length&&u.value?(e.openBlock(),e.createElementBlock("div",O,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(s),(x,m)=>(e.openBlock(),e.createBlock(f,{key:x.id,id:x.id,ref_for:!0,ref:"nodeRefs"},{"top-border":e.withCtx(()=>[e.createElementVNode("div",{class:e.normalizeClass(["vue3-org-chart-node-element-horizontal-line",{left:u.value&&m!==0,right:u.value&&m!==e.unref(s).length-1}])},null,2)]),node:e.withCtx(p=>[e.renderSlot(t.$slots,"node",e.mergeProps({ref_for:!0},p))]),_:2},1032,["id"]))),128))])):e.createCommentVNode("",!0)]),_:3})])}}});function j(){let i=e.ref();const c=e.ref(null),a=e.ref(null);function r(){c.value&&(i.value=$(c.value,{zoomDoubleClickSpeed:1.4,maxZoom:5,minZoom:.1,initialZoom:1,bounds:!1}))}return e.onMounted(()=>{i.value||r()}),{instance:i,container:a,scene:c}}function A({initialData:i,json:c}){const a=e.ref(!0),r=e.reactive(i),h=async u=>await(await fetch(u)).json();return e.onMounted(async()=>{c&&Object.assign(r,await h(c)),a.value=!1}),{data:r,loading:a}}function H(i,c,a,r,h){const u=e.ref(null),s=e.reactive({x:0,y:40}),n=e.reactive({state:h,toggle:()=>{n.state=!n.state}});function t(o){const l=c.find(d=>d.id===o);if(!l)throw new Error(`Node with id ${o} not found`);return l}function w(o){return c.filter(l=>l.parentId===o)}function f(){const o=c.find(l=>l.parentId===""||!l.parentId);if(!o)throw new Error("Root node not found");return o}function x(){var o;return(o=f())==null?void 0:o.id}function m(){const o=i.value.getTransform(),l=0,d=32;if(o.scale!==1){const k=1-o.scale,C=o.x/k,B=o.y/k;i.value.smoothZoomAbs(C,B,1)}else i.value.smoothMoveTo(l,d)}function p(){var M,E;const o=i.value.getTransform(),l=(M=a.value)==null?void 0:M.getBoundingClientRect(),d=(E=r.value)==null?void 0:E.getBoundingClientRect();if(!l||!d)return{...s,scale:1};const k=d.x-l.x,C=d.y-l.y,B=k+d.width/2,R=C+d.height/2;return{x:B,y:R,scale:o.scale}}function b(o){var N;const l=(N=a.value)==null?void 0:N.getBoundingClientRect();if(!l||!o)return;const d=o.getBoundingClientRect(),k=l.x+l.width/2+s.x,C=l.y+s.y,B=d.x+d.width/2,R=d.y,M=k-B,E=C-R;i.value.moveBy(M,E,!0)}function y(){const{x:o,y:l,scale:d}=p();i.value.smoothZoomAbs(o,l,d*3/2)}function _(){const{x:o,y:l,scale:d}=p();i.value.smoothZoomAbs(o,l,d*2/3)}function v(){c.forEach(o=>{o.__open=!1})}function g(){c.forEach(o=>{o.__open=!0})}return{zoomReset:m,zoomIn:y,zoomOut:_,expandAll:g,collapseAll:v,$root:u,root:f,rootId:x,find:t,findChildren:w,goToHome:b,minimap:n}}const Z=e.defineComponent({__name:"MiniMap",props:{size:{type:Number,default:1/6}},setup(i){const{instance:c,scene:a,container:r}=e.inject("panzoom"),h=i,u=e.computed(()=>n.value.width*h.size),s=e.computed(()=>n.value.height*h.size),n=e.ref({width:0,height:0,top:0,left:0}),t=e.ref({width:0,height:0,top:0,left:0});function w(v,g){let o;return function(...l){const d=this;clearTimeout(o),o=setTimeout(()=>{v.apply(d,l)},g)}}const f=()=>{if(!r.value||!a.value||!(a.value.firstChild instanceof HTMLElement))return;const v=r.value.getBoundingClientRect(),g=a.value.firstChild.getBoundingClientRect();n.value={width:v.width,height:v.height,top:v.top,left:v.left},t.value={width:g.width,height:g.height,top:g.top,left:g.left}},x=w(f,500);e.onMounted(()=>{f(),c.value.on("transform",()=>f()),r.value&&new ResizeObserver(x).observe(r.value),a.value&&new ResizeObserver(x).observe(a.value)});const m=e.computed(()=>({left:n.value.left-t.value.left+n.value.width,right:t.value.left-n.value.left+t.value.width,top:n.value.top-t.value.top+n.value.height,bottom:t.value.top-n.value.top+t.value.height})),p=v=>{const g=Math.max(m.value.left,m.value.right,n.value.width,t.value.width),o=Math.max(m.value.top,m.value.bottom,n.value.height,t.value.height);return v*Math.min(u.value/g,s.value/o)},b=()=>{let v=Math.min(u.value/t.value.width,s.value/t.value.height);return t.value.width/n.value.width<=1&&(v=v*t.value.width/n.value.width),{x:(t.value.left-n.value.left)*v,y:(t.value.top-n.value.top)*v}},y=e.computed(()=>({width:p(n.value.width),height:p(n.value.height),left:Math.max(p(n.value.left)-p(t.value.left),0),top:Math.max(p(n.value.top)-p(t.value.top),0)})),_=e.computed(()=>({width:p(t.value.width),height:p(t.value.height),left:Math.max(Math.min(b().x,u.value-p(t.value.width)),0),top:Math.max(Math.min(b().y,s.value-p(t.value.height)),0)}));return(v,g)=>(e.openBlock(),e.createElementBlock("div",{style:e.normalizeStyle([{width:u.value+"px",height:s.value+"px"},{position:"absolute",padding:"0",bottom:"0",right:"0",border:"1px solid #e1e1e1","pointer-events":"none"}])},[e.createElementVNode("div",{style:e.normalizeStyle([{position:"absolute","background-color":"rgba(255,255,255,0.30)",border:"1px solid #ff8c8c","pointer-events":"none"},{height:_.value.height+"px",width:_.value.width+"px",top:_.value.top+"px",left:_.value.left+"px"}])},null,4),e.createElementVNode("div",{style:e.normalizeStyle([{position:"absolute","background-color":"rgba(255,255,255,0.30)",border:"1px solid #8ee5f8","pointer-events":"none"},{height:y.value.height+"px",width:y.value.width+"px",top:y.value.top+"px",left:y.value.left+"px"}])},null,4)],4))}}),I={class:"vue3-org-chart"},X={key:1},Y={key:0},D={key:1},V=e.defineComponent({__name:"Vue3OrgChart",props:{data:{default:()=>[]},json:{},minimap:{type:Boolean,default:!1}},emits:["onReady"],setup(i,{emit:c}){const a=i,{instance:r,scene:h,container:u}=j();e.provide("panzoom",{instance:r,scene:h,container:u});const{data:s,loading:n}=A({initialData:a.data,json:a.json});e.provide("content",{data:s,loading:n});const t=H(r,s,u,h,a.minimap);e.provide("api",t);const w=c;return e.watch(()=>n.value,f=>{f||w("onReady",{api:t})}),(f,x)=>(e.openBlock(),e.createElementBlock("div",I,[e.createElementVNode("div",{ref_key:"container",ref:u,class:"vue3-org-chart-container"},[e.createElementVNode("div",{ref_key:"scene",ref:h,class:"vue3-org-chart-scene"},[e.unref(s).length&&e.unref(t).rootId()?(e.openBlock(),e.createBlock(P,{id:e.unref(t).rootId(),key:"root"},{node:e.withCtx(m=>[e.renderSlot(f.$slots,"node",e.normalizeProps(e.guardReactiveProps(m)))]),_:3},8,["id"])):(e.openBlock(),e.createElementBlock("div",X,[e.unref(n)?(e.openBlock(),e.createElementBlock("span",Y,[e.renderSlot(f.$slots,"loading",{},()=>[e.createTextVNode("Loading...")])])):(e.openBlock(),e.createElementBlock("span",D,[e.renderSlot(f.$slots,"no-data",{},()=>[e.createTextVNode("No data")])]))]))],512)],512),e.unref(t).minimap.state?(e.openBlock(),e.createBlock(Z,{key:0})):e.createCommentVNode("",!0)]))}}),q={install(i,c={}){i.component("Vue3OrgChart",V)}};exports.Vue3OrgChart=V;exports.Vue3OrgChartPlugin=q;
