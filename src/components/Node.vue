<template>
  <div class="relative flex flex-col items-center space-2">
    <slot name="top-border"/>
    <div class="w-min inline-block mt-2 mx-2" ref="element">
      <div v-if="item.parentId" class="absolute border-r h-2 -mt-2 left-1/2"></div>
      <div tabindex="0" @keydown.self.space.prevent="goToNode">
        <slot name="node" :item="item" :nodes="nodes" :show="show" :handleChildren="handleChildren"/>
      </div>
      <div v-if="nodes.length && show" class="mx-auto border-l left-1/2 w-[1px] h-2"></div>
    </div>

    <Transition name="nodeTransition">
      <NodeContainer v-if="nodes.length && show">
        <Node v-for="(node, index) in nodes" :key="node.id" :id="node.id" ref="nodeRefs">
          <template #top-border>
            <div class="relative flex w-full before:block after:block before:w-1/2 after:w-1/2" :class="{
              'before:border-t before:absolute before:left-0' : show && index !== 0,
              'after:border-t after:absolute after:right-0' : show && index !== nodes.length - 1,
            }"></div>
          </template>
          <template #node="{item, nodes, show, handleChildren}">
            <slot name="node" :item="item" :nodes="nodes" :show="show" :handleChildren="handleChildren"/>
          </template>
        </Node>
      </NodeContainer>
    </Transition>
  </div>
</template>

<script setup>
import {ref, reactive, inject} from 'vue';
import collection from 'lodash/collection';
import data from '../../sample.json';

import NodeContainer from './NodeContainer.vue';
import panzoom from "panzoom";

const props = defineProps({
  id: String,
});
const element = ref(null);

const show = ref(false);
const item = collection.find(data, {id: props.id});

const panzoomInstance = inject('panzoomInstance');
const scene = inject('scene');
const container = inject('container');

// onMounted(
//   () => {
//     scene.value.addEventListener('click', handleChildren);
//   }
// )

const handleChildren = () => {
  if (!nodes.length) return;
  show.value = !show.value;
  goToNode();
};

const goToNode = () => {
  // get canvas rectangle with absolute position of element
  const rect = container.value.getBoundingClientRect();
  const sceneRect = scene.value.getBoundingClientRect();
  const elementRect = element.value.getBoundingClientRect();

  const containerCenterX = rect.x + rect.width/2;
  const containerCenterY = rect.y + rect.height/2;


  const elementCenterX = elementRect.x + elementRect.width/2;
  const elementCenterY = elementRect.y + elementRect.height/2;
  const dx = containerCenterX - elementCenterX;
  const dy = containerCenterY - elementCenterY;

  panzoomInstance.value.moveBy( dx, dy, true)

};

function getCanvasCoords(x,y){
    return panzoomInstance.value.getTransform();
}

const getByParentId = (parentId) => {
  return collection.filter(data, {parentId});
};

const nodes = reactive(getByParentId(props.id));

</script>

<style>
.nodeTransition-leave-active {
  transition: all 0.2s ease;
}

.nodeTransition-leave-to {
  opacity: 0;
  scale: 0.20;
}

.nodeTransition-enter-active {
  transition: all 0.3s ease;
}

.nodeTransition-enter-from {
  scale: 0.70;
}
</style>
