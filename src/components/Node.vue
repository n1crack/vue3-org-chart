<template>
  <div class="vue3-org-chart-node">
    <slot name="top-border"/>
    <div class="vue3-org-chart-node-element" ref="element">
      <div v-if="item.parentId" class="vue3-org-chart-node-element-top-line"></div>
      <div tabindex="0" @keydown.self.space.prevent="goToNode">
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
import {ref, reactive, inject} from 'vue';

// props
const props = defineProps({
  id: String,
});

// element reference
const element = ref(null);

// panzoom instance
const {instance, container} = inject('panzoom');

// content data
const { data } = inject('content');

// show/hide children nodes
const show = ref(false);

// get item and children nodes
const item = data.value.find((item) => item.id === props.id);
const nodes = reactive(data.value.filter((item) => item.parentId === props.id));

// toggle visibility of children nodes
const toggleChildren = () => {
  if (!nodes.length) return;
  show.value = !show.value;
  goToNode(element.value);
};

// center the node in the container
const goToNode = (element) => {
  // get canvas rectangle with absolute position of element
  const rect = container.value.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();

  const containerCenterX = rect.x + rect.width/2;
  const containerCenterY = rect.y + rect.height/4;

  const elementCenterX = elementRect.x + elementRect.width/2;
  const elementCenterY = elementRect.y + elementRect.height/2;
  const dx = containerCenterX - elementCenterX;
  const dy = containerCenterY - elementCenterY;

  instance.value.moveBy( dx, dy, true)
};


</script>
