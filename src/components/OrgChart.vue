<template>
  <div class="vue3-org-chart">
    <div ref="scene" class="p-5 border rounded bg-white">
    
        <Node :id="getRootId()"></Node>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Node from './Node.vue';
import data from '../../sample.json';
import collection from 'lodash/collection';
import arr from 'lodash/array';

const scene = ref(null);

const getRoot = () => {
  return collection.find(data, { parentId: "" });
};

const getRootId = () => {
  return getRoot().id;
};

</script>
