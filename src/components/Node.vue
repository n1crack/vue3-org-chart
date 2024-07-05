<template>
    <div class="border rounded">
        <div class="text-center">
            {{ item.id }} - {{ item.name }} child: {{ nodes.length }} 
            <button class="border px-1" v-if="nodes.length" @click="handleChildren">{{ show ? '-' : '+' }}</button>
        </div>
        
        <Transition name="list">
            <NodeContainer v-if="nodes.length && show">
                <Node v-for="node in nodes" :key="node.id" :id="node.id" />
            </NodeContainer>
        </Transition>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import collection from 'lodash/collection';
import data from '../../sample.json';

import NodeContainer from './NodeContainer.vue';

const props = defineProps({
    id: String,
})

const show = ref(false);

const item = collection.find(data, { id: props.id });

const handleChildren = () => {
    show.value = !show.value;
};

const getByParentId = (parentId) => {
  return collection.filter(data, { parentId });
};

const nodes = computed(() => {
    return getByParentId(props.id);
});

</script>


<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  scale: 0.90;
}
</style>