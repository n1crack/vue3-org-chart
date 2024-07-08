<template>
  <div class="vue3-org-chart">
    <button @click="reset">Reset Zoom</button>
    <div ref="container" class="vue3-org-chart-container">
      <div ref="scene" class="vue3-org-chart-scene">
        <Node v-if="data.length" :id="getRootId()" key="root">
          <template #node="{item, nodes, show, handleChildren}">
            <slot name="node" :item="item" :nodes="nodes" :show="show" :handleChildren="handleChildren"/>
          </template>
        </Node>
        <div v-else>
            No data
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps, onMounted, provide, ref} from 'vue';
import Node from './Node.vue';
import collection from 'lodash/collection';
import arr from 'lodash/array';
import panzoom from "panzoom";

const scene = ref(null);
const container = ref(null);

const props = defineProps({
  data: {
    type: Array
  }
});

const getRoot = () => {
  return collection.find(props.data, {parentId: ""});
};

const getRootId = () => {
  return getRoot().id;
};
const panzoomInstance = ref(null);
provide('panzoomInstance', panzoomInstance);
provide('scene', scene);
provide('container', container);
provide('data', props.data);

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
