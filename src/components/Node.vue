<template>
  <div class="vue3-org-chart-node">
    <slot name="top-border"/>
    <div class="vue3-org-chart-node-element" ref="element">
      <div v-if="item.parentId" class="vue3-org-chart-node-element-top-line"></div>
      <div tabindex="0" @keydown.self.space.prevent="goToNode">
        <slot name="node" :item="item" :nodes="nodes" :show="show" :handleChildren="handleChildren"/>
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
          <template #node="{item, nodes, show, handleChildren}">
            <slot name="node" :item="item" :nodes="nodes" :show="show" :handleChildren="handleChildren"/>
          </template>
        </Node>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import {ref, reactive, inject} from 'vue';

const props = defineProps({
  id: String,
});
const element = ref(null);
const data = inject('data');
const show = ref(false);
const item = data.value.find((item) => item.id === props.id);

const panzoomInstance = inject('panzoomInstance');
const container = inject('container');

const handleChildren = () => {
  if (!nodes.length) return;
  show.value = !show.value;
  goToNode();
};

const goToNode = () => {
  // get canvas rectangle with absolute position of element
  const rect = container.value.getBoundingClientRect();
  const elementRect = element.value.getBoundingClientRect();

  const containerCenterX = rect.x + rect.width/2;
  const containerCenterY = rect.y + rect.height/4;

  const elementCenterX = elementRect.x + elementRect.width/2;
  const elementCenterY = elementRect.y + elementRect.height/2;
  const dx = containerCenterX - elementCenterX;
  const dy = containerCenterY - elementCenterY;

  panzoomInstance.value.moveBy( dx, dy, true)
};

const getByParentId = (parentId) => {
  return data.value.filter((item) => item.parentId === parentId);
};

const nodes = reactive(getByParentId(props.id));

</script>
