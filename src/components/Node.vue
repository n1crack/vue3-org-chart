<template> 
    <div class="space-2 justify-center transition-all duration-300 relative">
        <div class="border rounded h-16 w-40 mx-auto bg-slate-50"
             :class="{
              'before:absolute before:border-l before:w-1 before:h-4 before:-mt-4': item.parentId,
              // 'after:absolute after:border-l after:w-1 after:h-4 after:-mb-4': nodes.length && show
        }"
              ref="element">

           <div>
             <div>{{ item.id }} ({{ nodes.length }})</div>
             <div>{{ item.name }} </div>
              <div class="text-center">
                  <button class="border w-4 h-4 bg-white text-xs" v-if="nodes.length" @click="handleChildren">{{ show ? '-' : '+' }}</button>
              </div>
           </div>
        </div>
        <div v-if="nodes.length && show" class="absolute border-l left-1/2 w-1 h-2"></div>

        <Transition name="list">
            <NodeContainer v-if="nodes.length && show" class="mt-4 space-x-5">
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
