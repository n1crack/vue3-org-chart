<template>
  <div class="vue3-org-chart">
    <div ref="container" class="min-h-[70vh] border rounded bg-white text-center overflow-hidden">
        <div ref="scene" class="flex w-full justify-center">
            <Node :id="getRootId()" key="root"></Node>
        </div> 
    </div>
  </div>
</template>

<script setup>
import {  onMounted, ref } from 'vue';
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

onMounted(() => {
 let instance = panzoom(scene.value, {
   maxZoom: 5,
    minZoom: 0.1,
    initialX: 0,
      initialZoom: 1,
      bounds: false,
  });

 instance.moveTo(0, 250);

})
 
</script>
