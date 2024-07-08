<template>
  <div class="vue3-org-chart">
    <button @click="reset" class="border bg-gray-100 hover:bg-gray-50 px-2 py-1">Reset Zoom</button>
    <div ref="container" class="min-h-[70vh] border rounded bg-white overflow-hidden">
      <div ref="scene" class="flex w-full justify-center">
        <Node :id="getRootId()" key="root">
          <template #node="{item, nodes, show, handleChildren}">
            <slot name="node" :item="item" :nodes="nodes" :show="show" :handleChildren="handleChildren"/>
          </template>
        </Node>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, provide, ref} from 'vue';
import Node from './Node.vue';
import data from '../../sample.json';
import collection from 'lodash/collection';
import arr from 'lodash/array';
import panzoom from "panzoom";

const scene = ref(null);
const container = ref(null);
const getRoot = () => {
  return collection.find(data, {parentId: ""});
};

const getRootId = () => {
  return getRoot().id;
};
const panzoomInstance = ref(null);
provide('panzoomInstance', panzoomInstance);
provide('scene', scene);
provide('container', container);

onMounted(() => {
   panzoomInstance.value = panzoom(scene.value, {
    zoomDoubleClickSpeed: 1.4,
    maxZoom: 5,
    minZoom: 0.1,
    initialX: 0,
    initialZoom: 1,
    bounds: false,
  });
})


const reset = () => {
    const xys = panzoomInstance.value.getTransform()
    const fixeX = 0
    const fixeY = 0
    if(xys.scale !== 1) { // calculate the point that should not move
        const fScale = 1 - xys.scale
        const fixeX = xys.x / fScale
        const fixeY = xys.y / fScale
        panzoomInstance.value.smoothZoomAbs(fixeX, fixeY, 1)
    } else { 
        panzoomInstance.value.smoothMoveTo(fixeX, fixeY, 1)
    }
};

</script>
