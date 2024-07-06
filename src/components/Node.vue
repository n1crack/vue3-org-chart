<template>
  <div class="relative block space-2"
  >
    <slot name="top-border"/>
    <div class="w-min inline-block mt-2 mx-2"
         :class="{
          'before:absolute before:border-r before:h-2 before:-mt-2': item.parentId
        }" ref="element">
      <div>
        <slot name="node" :item="item" :nodes="nodes" :show="show" :handleChildren="handleChildren"/>
      </div>
      <div v-if="nodes.length && show" class="mx-auto border-l left-1/2 w-[1px] h-2"></div>
    </div>

    <Transition name="list">
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
import {ref, reactive} from 'vue';
import collection from 'lodash/collection';
import data from '../../sample.json';

import NodeContainer from './NodeContainer.vue';

const props = defineProps({
  id: String,
});
const element = ref(null);

const show = ref(false);
const item = collection.find(data, {id: props.id});

const handleChildren = () => {
  show.value = !show.value;
};

const getByParentId = (parentId) => {
  return collection.filter(data, {parentId});
};

const nodes = reactive(getByParentId(props.id));


</script>

<style>
.list-leave-active {
  transition: all 0.1s ease;
}

.list-leave-to {
  opacity: 0;
}

.list-enter-active {
  transition: all 0.3s ease;
}

.list-enter-from {
  scale: 0.90;
}
</style>
