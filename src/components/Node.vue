<script setup lang="ts">
import type {IApi, INode, INodeScopeParams} from '@/utils/types';
import {ref, inject, onMounted, computed, nextTick} from 'vue';

// props
const props = defineProps({
  id: {type: String, required: true},
});

// element reference
const element = ref(null);

// api instance
const api = inject('api') as IApi;

// get item and children
const item: INode = api.find(props.id);

// open/close children
const open = computed(() => item.__open || false);

const children = api.findChildren(props.id);

onMounted(() => {
  if (!item.parentId) {
    api.$root.value = element.value;
    api.zoomReset();

    // item.__open = true; // root is opening children
    // children.forEach((item) => {
    //   item.__open = true;
    // });
  }
});

// toggle visibility of children
const toggleChildren = () => {
  if (!children.length) {
    return
  }

  item.__open = !open.value;
  api.goToHome(element.value);
};
</script>

<template>
  <div class="vue3-org-chart-node">
    <slot name="top-border"/>
    <div class="vue3-org-chart-node-element" ref="element">
      <div v-if="item.parentId" class="vue3-org-chart-node-element-top-line"></div>
      <div tabindex="0" @keydown.self.space.prevent="api.goToHome(element)">
        <slot name="node" :item="item" :children="children" :open="open" :toggleChildren="toggleChildren"/>
      </div>
      <div v-if="children.length && open" class="vue3-org-chart-node-element-bottom-line"></div>
    </div>

    <Transition name="nodeTransition">
      <div class="vue3-org-chart-node-container" v-if="children.length && open">
        <Node v-for="(node, index) in children" :key="node.id" :id="node.id" ref="nodeRefs">
          <template #top-border>
            <div class="vue3-org-chart-node-element-horizontal-line" :class="{
              'left' : open && index !== 0,
              'right' : open && index !== children.length - 1,
            }"></div>
          </template>
          <template #node="params:INodeScopeParams">
            <slot name="node" v-bind="params"/>
          </template>
        </Node>
      </div>
    </Transition>
  </div>
</template>
