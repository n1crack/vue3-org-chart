<template>
  <div class="wrapper"
       style="--vue3-org-chart-line-color:pink">

    <button @click="vocApi.zoomReset">Reset Zoom</button>
    <button @click="vocApi.zoomIn">Zoom In</button>
    <button @click="vocApi.zoomOut">Zoom Out</button>
    <button @click="vocApi.expandAll">Expand All</button>
    <button @click="vocApi.collapseAll">Collapse All</button>
    <button @click="vocApi.minimap.toggle">Toggle Minimap</button>

    <div style="border: 1px solid #e8e8e8; background: white; border-radius: 8px; min-height: 70vh">
      <vue3-org-chart minimap
                      @on-ready="initVue3OrgChart"
                      json="https://raw.githubusercontent.com/bumbeishvili/sample-data/main/sample.json">
        <template #node="{item, children, open, toggleChildren}">
          <div class="node-item" :class="{'active': open, 'passive' : !open }">
            <div>
              <img v-if="item.imageUrl" class="avatar" :src="item.imageUrl" alt="avatar">
            </div>
            <div>
              <div>{{ item.id }} ({{ children.length }})</div>
              <div>{{ item.name }}</div>
            </div>
          </div>
          <div style="text-align: center;">
            <button class="node-btn-toggle" v-if="children.length" @click="toggleChildren" @touchend="toggleChildren">
              {{ open ? '-' : '+' }}
            </button>
          </div>
        </template>

        <template #no-data>
          <div style="color:blue; text-align: center;">
            No data
          </div>
        </template>
      </vue3-org-chart>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
// alternative way to import, it is already imported in main.ts
// import {Vue3OrgChart} from "../dist/vue3-org-chart.js";
// import "../dist/style.css";

const vocApi = ref(null);

// this function will be called when vue3-org-chart is ready
// it will pass api object as argument
// api object contains reset function and some other functions will be added in future
const initVue3OrgChart = ({api}) => {
  vocApi.value = api;
}

</script>

<style>
body {
  margin: 0;
  background: #eeeeee;
}

.wrapper {
  max-width: 800px;
  margin: 80px auto;
}

.btn {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
  cursor: pointer;
  outline: none;
}

.node-item {
  display: flex;
  width: 12rem;
  border-radius: 0.35rem;
  border: 1px solid #e2e8f0;
  padding: 0.5rem;
}

.node-item > :not([hidden]) ~ :not([hidden]) {
  margin-left: 1rem;
}

.node-item:hover {
  background-color: rgb(226 232 240);
}

.node-item.active {
  border-color: rgb(165 180 252);
  background-color: rgb(224 231 255);
}

.node-item.passive {
  background-color: rgb(248 250 252)
}

.node-item .avatar {
  height: 3rem;
  width: 3rem;
  border-radius: 9999px;
}

.node-btn-toggle {
  padding: 1px;
  cursor: pointer;
  height: 1rem;
  width: 1rem;
  border: 1px solid #e2e8f0;
  background-color: rgb(255 255 255);
  font-size: 0.75rem;
  line-height: 10px;
}

</style>
