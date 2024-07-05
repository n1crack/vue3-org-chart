<template>
<div class="flex py-2 transition-all duration-600 ease-in-out">
    <slot/>
</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import data from '../../sample.json';

defineProps({
  loaded: {
    type: Boolean,
    default: false,
  },
  nodes: Array,
})

</script>
