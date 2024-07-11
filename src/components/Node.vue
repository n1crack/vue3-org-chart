<template>
  <div class="vue3-org-chart-node">
    <slot name="top-border"/>
    <div class="vue3-org-chart-node-element" ref="element">
      <div v-if="item.parentId" class="vue3-org-chart-node-element-top-line"></div>
      <div tabindex="0" @keydown.self.space.prevent="api.goToHome(element)">
        <slot name="node" :item="item" :nodes="nodes" :show="show" :toggleChildren="toggleChildren"/>
      </div>
      <div v-if="nodes.length && show" class="vue3-org-chart-node-element-bottom-line"></div>
    </div>

    <Transition name="nodeTransition">
      <div class="vue3-org-chart-node-container" v-if="nodes.length && show">
        <Node v-for="(node, index) in nodes" :key="node.id" :id="node.id" ref="nodeRefs">
          <template #top-border>
            <div class="vue3-org-chart-node-element-horizontal-line" :class="{
              'left' : show && index !== 0,
              'right' : show && index !== nodes.length - 1,
            }"></div>
          </template>
          <template #node="{item, nodes, show, toggleChildren}">
            <slot name="node" :item="item" :nodes="nodes" :show="show" :toggleChildren="toggleChildren"/>
          </template>
        </Node>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import {ref, reactive, inject, onMounted} from 'vue';

// props
const props = defineProps({
  id: String,
});

// element reference
const element = ref(null);

// content data
const { data } = inject('content');

// show/hide children nodes
const show = ref(false);

// panzoom instance
// const {instance, container} = inject('panzoom');
const api = inject('api');

// get item and children nodes
const item = api.find(props.id);
const nodes = api.findChildren(props.id);

onMounted(() => {
  if (!item.parentId) {
    api.$root.value = element.value;
    api.zoomReset();
  }
});

// toggle visibility of children nodes
const toggleChildren = () => {
  if (!nodes.length) return;
  show.value = !show.value;
  api.goToHome(element.value);
};

</script>
