<template>
  <div class="relative space-2 justify-center transition-all duration-300 ">
    <slot />
    <div class="h-20 w-40 mx-auto p-2"
         :class="{
          'before:absolute before:border-r before:h-2 before:-mt-2': item.parentId
        }" ref="element">
      <div class=" h-full border bg-slate-50 rounded ">
        <div>{{ item.id }} ({{ nodes.length }})</div>
        <div>{{ item.name }} </div>
        <div class="text-center">
          <button class="border w-4 h-4 bg-white text-xs" v-if="nodes.length" @click="handleChildren">{{ show ? '-' : '+' }}</button>
        </div>
      </div>
      <div v-if="nodes.length && show" class="mx-auto border-l left-1/2 w-[1px] h-2"></div>
    </div>

    <Transition name="list">
      <NodeContainer v-if="nodes.length && show">
        <Node v-for="(node, index) in nodes" :key="node.id" :id="node.id" ref="nodeRefs">
          <div class="relative flex w-full before:block after:block before:w-1/2 after:w-1/2" :class="{
            'before:border-t before:absolute before:left-0' : show && index !== 0,
            'after:border-t after:absolute after:right-0' : show && index !== nodes.length - 1,
          }"></div>
        </Node>
      </NodeContainer>
    </Transition>
  </div>
</template>

<script setup>
import { computed, onMounted, defineEmits, ref, reactive, onUpdated, nextTick } from 'vue';
import collection from 'lodash/collection';
import data from '../../sample.json';

import NodeContainer from './NodeContainer.vue';

const props = defineProps({
  id: String,
});
const element = ref(null);
const svgElement = ref(null);

const show = ref(false);
const item = collection.find(data, { id: props.id });

const handleChildren = () => {
  show.value = !show.value;
  nextTick(updateLine);
};

const getByParentId = (parentId) => {
  return collection.filter(data, { parentId });
};

const lineCoordinates = reactive({ x1: 0, y1: 0, x2: 0, y2: 0 });
const nodes = reactive(getByParentId(props.id));
const nodeRefs = ref([]);

const updateLine = () => {
  const firstNode = nodeRefs.value[0]?.$el;
  const lastNode = nodeRefs.value[nodeRefs.value.length - 1]?.$el;

  if (firstNode && lastNode) {
    const firstRect = firstNode.getBoundingClientRect();
    const lastRect = lastNode.getBoundingClientRect();
    const containerRect = element.value.getBoundingClientRect();

    lineCoordinates.x1 = firstRect.left + firstRect.width / 2 - containerRect.left;
    lineCoordinates.y1 = firstRect.top  - containerRect.top - 20;
    lineCoordinates.x2 = lastRect.left + lastRect.width / 2 - containerRect.left;
    lineCoordinates.y2 = lastRect.top   - containerRect.top - 20;
  }
};

onUpdated(() => {
  nextTick(updateLine);
});
</script>

<style>
.list-leave-active {
  transition: all 0.1s ease;
}
.list-leave-to {
  opacity: 0;
}

.list-enter-active {
  transition: all 0.5s ease;
}
.list-enter-from {
  scale: 0.90;
}
</style>
