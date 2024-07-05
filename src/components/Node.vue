<template> 
    <div class="space-2 justify-center"> 
        <div class=" border rounded h-16 w-40 mx-auto bg-slate-50" ref="element">
           <div>{{ item.id }} ({{ nodes.length }})</div>
           <div>{{ item.name }} </div>
           <div> {{ x }},  {{ Math.ceil(y) }}</div>
            <div class="text-center">
                <button class="border px-1" v-if="nodes.length" @click="handleChildren">{{ show ? '-' : '+' }}</button>
            </div>
        </div>
        
        <Transition name="list">
            <NodeContainer v-if="nodes.length && show" class=" mt-5 space-x-5">
                <Node v-for="node in nodes" :key="node.id" :id="node.id" @opened="handleOpenItem"/>
            </NodeContainer>
        </Transition>
    </div> 
</template>

<script setup>
import { computed, onMounted,defineEmits ,  ref } from 'vue';
import collection from 'lodash/collection';
import data from '../../sample.json';

import NodeContainer from './NodeContainer.vue';
import { useElementBounding } from '@vueuse/core';

const props = defineProps({
    id: String,
})
const element = ref(null);
const {x, y} = useElementBounding(element);

const emit = defineEmits(['opened']);

const show = ref(false);
const item = collection.find(data, { id: props.id });

const handleChildren = () => {
    show.value = !show.value;

    if (show.value) {
        emit('opened',  { x, y} );
    }
};

const getByParentId = (parentId) => {
  return collection.filter(data, { parentId });
};

const nodes = computed(() => {
    return getByParentId(props.id);
});

const handleOpenItem = (positions) => {
    emit('opened', positions);
};

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