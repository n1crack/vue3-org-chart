<script setup lang="ts">
import {computed, inject, onMounted, ref, watch} from "vue";
import type {IPanzoom} from "@/utils/types";

const {instance, scene, container} = inject('panzoom') as IPanzoom;

const props = defineProps({
  size: {
    type: Number,
    default: 1 / 6
  }
})

const miniMapMaxWidth = computed(() => containerRect.value.width * props.size);
const miniMapMaxHeight = computed(() => containerRect.value.height * props.size);

const containerRect = ref({
  width: 0,
  height: 0,
  top: 0,
  left: 0
});

const sceneRect = ref({
  width: 0,
  height: 0,
  top: 0,
  left: 0
});

function debounce(func: (...args: any[]) => void, wait: number): (...args: any[]) => void {
  let timeout: ReturnType<typeof setTimeout> | null;

  return function (this: any, ...args: any[]): void {
    const context = this;

    clearTimeout(timeout as ReturnType<typeof setTimeout>);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

const updateImmediately = () => {
  if (!container.value || !scene.value || !(scene.value.firstChild instanceof HTMLElement)) {
    return;
  }

  const cRect = container.value.getBoundingClientRect();
  const sRect = scene.value.firstChild.getBoundingClientRect();

  containerRect.value = {
    width: cRect.width,
    height: cRect.height,
    top: cRect.top,
    left: cRect.left
  };

  sceneRect.value = {
    width: sRect.width,
    height: sRect.height,
    top: sRect.top,
    left: sRect.left
  };
};

const update = debounce(updateImmediately, 500);

onMounted(() => {
  updateImmediately();

  instance.value.on('transform', () => updateImmediately());

  if (container.value) {
    new ResizeObserver(update).observe(container.value);
  }

  if (scene.value) {
    new ResizeObserver(update).observe(scene.value);
  }

});

const maxBoundaries = computed(() => {
  return {
    left: containerRect.value.left - sceneRect.value.left + containerRect.value.width,
    right: sceneRect.value.left - containerRect.value.left + sceneRect.value.width,
    top: containerRect.value.top - sceneRect.value.top + containerRect.value.height,
    bottom: sceneRect.value.top - containerRect.value.top + sceneRect.value.height,
  };
});

const scale = (value: number) => {
  const maxWidth = Math.max(maxBoundaries.value.left, maxBoundaries.value.right, containerRect.value.width, sceneRect.value.width);
  const maxHeight = Math.max(maxBoundaries.value.top, maxBoundaries.value.bottom, containerRect.value.height, sceneRect.value.height);

  return value * Math.min(miniMapMaxWidth.value / maxWidth, miniMapMaxHeight.value / maxHeight);
};

const sceneRectPos = () => {
  let scale = Math.min(miniMapMaxWidth.value / sceneRect.value.width, miniMapMaxHeight.value / sceneRect.value.height);

  if (sceneRect.value.width / containerRect.value.width <= 1) {
    scale = scale * sceneRect.value.width / containerRect.value.width;
  }

  return {
    x: (sceneRect.value.left - containerRect.value.left) * scale,
    y: (sceneRect.value.top - containerRect.value.top) * scale
  };
};

const miniMapContainer = computed(() => ({
  width: scale(containerRect.value.width),
  height: scale(containerRect.value.height),
  left: Math.max(scale(containerRect.value.left) - scale(sceneRect.value.left), 0),
  top: Math.max(scale(containerRect.value.top) - scale(sceneRect.value.top), 0),
}));

const minimapScene = computed(() => ({
  width: scale(sceneRect.value.width),
  height: scale(sceneRect.value.height),
  left: Math.max(Math.min(sceneRectPos().x, miniMapMaxWidth.value - scale(sceneRect.value.width)), 0),
  top: Math.max(Math.min(sceneRectPos().y, miniMapMaxHeight.value - scale(sceneRect.value.height)), 0)
}));

</script>

<template>
  <div
      :style="{
        width: miniMapMaxWidth + 'px',
        height: miniMapMaxHeight + 'px',
      }"
      style="position:absolute; padding: 0; bottom: 0; right: 0; border: 1px solid #e1e1e1; pointer-events: none;">


    <div
        style="position:absolute;background-color: rgba(255,255,255,0.30);border: 1px solid #ff8c8c; pointer-events: none;"
        :style="{
            height: minimapScene.height + 'px',
            width: minimapScene.width + 'px',
            top: minimapScene.top + 'px',
            left: minimapScene.left + 'px',
          }"
    ></div>

    <div
        style="position:absolute;background-color: rgba(255,255,255,0.30);border: 1px solid #8ee5f8; pointer-events: none;"
        :style="{
            height: miniMapContainer.height+'px',
            width: miniMapContainer.width+'px',
            top: miniMapContainer.top + 'px',
            left: miniMapContainer.left + 'px',
          }"
    >
    </div>
  </div>
</template>
