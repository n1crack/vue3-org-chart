<template>
  <div class="vue3-org-chart">
    <div ref="container" class="vue3-org-chart-container">
      <div ref="scene" class="vue3-org-chart-scene">
        <Node v-if="data.length" :id="api.rootId()" key="root">
          <template #node="{item, nodes, show, toggleChildren}">
            <slot name="node" :item="item" :nodes="nodes" :show="show" :toggleChildren="toggleChildren"/>
          </template>
        </Node>
        <div v-else>
            <span v-if="loading">
              <slot name="loading">Loading...</slot>
            </span>
            <span v-else>
              <slot name="no-data">No data</slot>
            </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {provide, watch} from 'vue';
import Node from './Node.vue';

// props
const props = defineProps({
  data: {
    type: Array,
    default: () => []
  },
  json: {
    type: String,
    default: ''
  }
});

// Panzoom setup
import {usePanzoom} from "../composables/usePanzoom.js";

const {instance, scene, container} = usePanzoom();
// provide useful functions to the child components
provide('panzoom', {instance, scene, container});

// Data setup, provide data and loading state to the child components
import {useData} from "../composables/useData.js";
const {data, loading} = useData({initialData: props.data, json: props.json});
provide('content', {data, loading});

// Api setup, useful functions to interact with the org chart
import {useApi} from "../composables/useApi.js";
const api = useApi(instance, data, container);
provide('api', api);

//  emit event when data is loaded and ready, provide api object
const emit = defineEmits(['onReady']);
watch(() => loading.value, (loadingState) => {
  if (!loadingState) {
    emit('onReady', { api})
  }
});

</script>
