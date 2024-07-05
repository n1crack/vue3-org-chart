<template>
<div class="flex py-2">
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