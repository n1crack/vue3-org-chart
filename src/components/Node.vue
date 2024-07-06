<template> 
    <div class="space-2 justify-center transition-all duration-300 ">
        <div class=" border rounded h-16 w-40 mx-auto bg-slate-50" ref="element">
           <div>{{ item.id }} ({{ nodes.length }})</div>
           <div>{{ item.name }} </div>
            <div class="text-center">
                <button class="border px-1 bg-white" v-if="nodes.length" @click="handleChildren">{{ show ? '-' : '+' }}</button>
            </div>
        </div>

        <Transition name="list">
            <NodeContainer v-if="nodes.length && show" class=" mt-5 space-x-5">

                <Node v-for="(node,index) in nodes" :key="node.id" :id="node.id" />
  
            </NodeContainer>
        </Transition>
    </div>
</template>

<script setup>
import {computed, onMounted, defineEmits, ref, reactive} from 'vue';
import collection from 'lodash/collection';
import data from '../../sample.json';

import NodeContainer from './NodeContainer.vue';

const props = defineProps({
    id: String,
})
const element = ref(null);


const show = ref(false);
const item = collection.find(data, { id: props.id });

const handleChildren = () => {
    show.value = !show.value;
};

const getByParentId = (parentId) => {
  return collection.filter(data, { parentId });
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

.list-enter-active{
  transition: all 0.5s ease;
}
.list-enter-from {
  scale: 0.90;
}
</style>
