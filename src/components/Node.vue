<template>
  <div class="vue3-org-chart-node">
    <slot name="top-border"/>
    <div class="vue3-org-chart-node-element" ref="element">
      <div v-if="item.parentId" class="vue3-org-chart-node-element-top-line"></div>
      <div tabindex="0" @keydown.self.space.prevent="api.goToHome(element)">
        <slot name="node" :item="item" :children="children" :show="show" :toggleChildren="toggleChildren"/>
      </div>
      <div v-if="children.length && show" class="vue3-org-chart-node-element-bottom-line"></div>
    </div>

    <Transition name="nodeTransition">
      <div class="vue3-org-chart-node-container" v-if="children.length && show">
        <Node v-for="(node, index) in children" :key="node.id" :id="node.id" ref="nodeRefs">
          <template #top-border>
            <div class="vue3-org-chart-node-element-horizontal-line" :class="{
              'left' : show && index !== 0,
              'right' : show && index !== children.length - 1,
            }"></div>
          </template>
          <template #node="{item, children, show, toggleChildren}">
            <slot name="node" :item="item" :children="children" :show="show" :toggleChildren="toggleChildren"/>
          </template>
        </Node>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import {ref, inject, onMounted} from 'vue';

// props
const props = defineProps({
  id: String,
});

// element reference
const element = ref(null);

// show/hide children children
const show = ref(false);

// api instance
const api = inject('api');

// get item and children children
const item = api.find(props.id);
const children = api.findChildren(props.id);

onMounted(() => {
  if (!item.parentId) {
    api.$root.value = element.value;
    api.zoomReset();
  }
});

// toggle visibility of children children
const toggleChildren = () => {
  if (!children.length) return;
  show.value = !show.value;
  api.goToHome(element.value);
};

</script>
