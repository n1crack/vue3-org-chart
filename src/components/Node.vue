<template>
    <div class="space-2 justify-center">
        <div class=" border rounded h-16 w-60 mx-auto bg-slate-50">
            {{ item.id }} - {{ item.name }} 
            <div>child: {{ nodes.length }} </div>
            <div class="text-center">
                <button class="border px-1" v-if="nodes.length" @click="handleChildren">{{ show ? '-' : '+' }}</button>
            </div>
        </div>
        
        <Transition name="list">
            <NodeContainer v-if="nodes.length && show" class=" mt-5 space-x-5">
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
.list-leave-active {
  transition: all 0.1s ease;
}
.list-leave-to {
  opacity: 0;
}

.list-enter-active{
  transition: all 0.5s ease;
}
.list-enter-from {
  scale: 0.90;
}
</style>