<script setup lang="ts">
import {computed, inject, onMounted, ref} from "vue";
import type {IPanzoom} from "@/utils/types";

// Inject panzoom instance, scene, and container
const {instance, scene, container} = inject('panzoom') as IPanzoom;

const props = defineProps({
  size: {
    type: Number,
    default: 1 / 6,
  },
});

// Reactive references for container and scene rectangles
const containerRect = ref({width: 0, height: 0, top: 0, left: 0});
const sceneRect = ref({width: 0, height: 0, top: 0, left: 0});

// Computed properties for mini-map dimensions
const miniMapMaxWidth = computed(() => containerRect.value.width * props.size);
const miniMapMaxHeight = computed(() => containerRect.value.height * props.size);

// Debounce function to limit the rate of function execution
const debounce = (func: (...args: any[]) => void, wait: number): (...args: any[]) => void => {
  let timeout: ReturnType<typeof setTimeout> | null;

  return function (this: any, ...args: any[]): void {
    clearTimeout(timeout as ReturnType<typeof setTimeout>);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

// Update the container and scene rectangle dimensions
const updateRectangles = () => {
  if (!container.value || !scene.value || !(scene.value.firstChild instanceof HTMLElement)) return;

  containerRect.value = container.value.getBoundingClientRect();
  sceneRect.value = scene.value.firstChild.getBoundingClientRect();
};

const updateRectanglesDebounced = debounce(updateRectangles, 350);

// Set up event listeners and observers on mount
onMounted(() => {
  updateRectangles();
  instance.value.on('transform', updateRectangles);

  const resizeObserver = new ResizeObserver(updateRectanglesDebounced);
  if (container.value) resizeObserver.observe(container.value);
  if (scene.value) resizeObserver.observe(scene.value);
});

// Compute the maximum boundaries of the scene
const maxBoundaries = computed(() => ({
  left: containerRect.value.left - sceneRect.value.left + containerRect.value.width,
  right: sceneRect.value.left - containerRect.value.left + sceneRect.value.width,
  top: containerRect.value.top - sceneRect.value.top + containerRect.value.height,
  bottom: sceneRect.value.top - containerRect.value.top + sceneRect.value.height,
}));

// Scale a value based on mini-map dimensions
const scale = (value: number) => {
  const maxWidth = Math.max(
      maxBoundaries.value.left,
      maxBoundaries.value.right,
      containerRect.value.width,
      sceneRect.value.width
  );
  const maxHeight = Math.max(
      maxBoundaries.value.top,
      maxBoundaries.value.bottom,
      containerRect.value.height,
      sceneRect.value.height
  );

  return value * Math.min(miniMapMaxWidth.value / maxWidth, miniMapMaxHeight.value / maxHeight);
};

// Compute the style of the mini-map container and scene
const computeStyle = (width: number, height: number, left: number, top: number) => {
  return {width: `${width}px`, height: `${height}px`, left: `${Math.max(left, 0)}px`, top: `${Math.max(top, 0)}px`};
}

const containerStyle = computed(() => {
  const width = scale(containerRect.value.width);
  const height = scale(containerRect.value.height);
  const left = scale(containerRect.value.left - sceneRect.value.left);
  const top = scale(containerRect.value.top - sceneRect.value.top);

  return computeStyle(width, height, left, top);
});

const sceneStyle = computed(() => {
  const width = scale(sceneRect.value.width);
  const height = scale(sceneRect.value.height);
  const left = Math.min(scale(sceneRect.value.left - containerRect.value.left), miniMapMaxWidth.value - scale(sceneRect.value.width));
  const top = Math.min(scale(sceneRect.value.top - containerRect.value.top), miniMapMaxHeight.value - scale(sceneRect.value.height));

  return computeStyle(width, height, left, top);
});

</script>

<template>
  <div class="vue3-org-chart-minimap" :style="{ width: miniMapMaxWidth + 'px', height: miniMapMaxHeight + 'px' }">
    <canvas ref="canvasRef" style="filter: grayscale(100%);"></canvas>
    <div class="vue3-org-chart-minimap-scene" :style="sceneStyle"></div>
    <div class="vue3-org-chart-minimap-container" :style="containerStyle"></div>
  </div>
</template>
