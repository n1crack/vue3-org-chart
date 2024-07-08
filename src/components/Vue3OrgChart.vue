<template>
  <div class="vue3-org-chart">
    <button @click="reset">Reset Zoom</button>
    <div ref="container" class="vue3-org-chart-container">
      <div ref="scene" class="vue3-org-chart-scene">
        <Node v-if="treeData.length" :id="getRootId()" key="root">
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
import {onMounted, provide, ref} from 'vue';
import Node from './Node.vue';
import panzoom from "panzoom";

const scene = ref(null);
const container = ref(null);

const props = defineProps({
  data: {
    type: Array, 
    default: () => []
  },
  json: {
    type: String,
    default: ''
  }
});

const fetchJsonData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data; 
};

const treeData = ref(props.data);
const panzoomInstance = ref();

provide('data', treeData);
provide('panzoomInstance', panzoomInstance);
provide('container', container);

onMounted( async () => {
  if(props.json) {
    treeData.value = await fetchJsonData(props.json);
  }
});

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

const getRoot = () => {
  return treeData.value.find((item) => item.parentId === "" || !item.parentId);
};

const getRootId = () => {
  return getRoot().id;
};

</script>
