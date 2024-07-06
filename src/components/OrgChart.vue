<template>
  <div class="vue3-org-chart">
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
  return collection.find(data, { parentId: "" });
};

const getRootId = () => {
  return getRoot().id;
};
const panzoomInstance = ref(null);
provide('panzoomInstance', panzoomInstance);
provide('scene', scene);
provide('container', container);

onMounted(() => {
 const abc = panzoomInstance.value = panzoom(scene.value, {
   maxZoom: 5,
    minZoom: 0.1,
    initialX: 0,
      initialZoom: 1,
      bounds: false,
  });


 panzoomInstance.value.moveTo(0, 250);
})
 
</script>
