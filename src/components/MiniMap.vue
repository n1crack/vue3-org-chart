<script setup lang="ts">

import {computed, inject, onMounted, provide, type Ref, ref, watch} from "vue";
import type {IData} from "@/utils/types";

const {instance, scene, container} = inject<{ instance: any, scene: any, container: any }>('panzoom');

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

watch(() => instance.value, () => {
  if (!instance.value) {
    return;
  }
  instance.value.on('transform', () => updateImmediately());
});

onMounted(() => {
  update();

  new ResizeObserver(update).observe(container.value);
  new ResizeObserver(update).observe(scene.value);
});

const miniMapMaxWidth = ref(200);
const miniMapMaxHeight = ref(200);

const outboundSides = () => {
  const leftSide = containerRect.value.left - sceneRect.value.left + containerRect.value.width;
  const rightSide = sceneRect.value.left - containerRect.value.left + sceneRect.value.width;
  const topSide = sceneRect.value.top - containerRect.value.top;
  const bottomSide = containerRect.value.height - sceneRect.value.top + sceneRect.value.height;

  return {
    left: leftSide,
    right: rightSide,
    top: topSide,
    bottom: bottomSide
  };
};

const scale = (value: number) => {
  const maxWidth = Math.max(outboundSides().left, outboundSides().right, containerRect.value.width, sceneRect.value.width);
  const maxHeight = Math.max(outboundSides().top, outboundSides().bottom, containerRect.value.height, sceneRect.value.height);

  return value * Math.min(miniMapMaxWidth.value / maxWidth, miniMapMaxHeight.value / maxHeight);
};

const diffCenter = () => {
  const centerX = containerRect.value.left;
  const centerY = containerRect.value.top;
  const sceneCenterX = sceneRect.value.left;
  const sceneCenterY = sceneRect.value.top;
  let scale = Math.min(miniMapMaxWidth.value / sceneRect.value.width, miniMapMaxHeight.value / sceneRect.value.height);

  if (sceneRect.value.width / containerRect.value.width <= 1) {
    scale = scale * sceneRect.value.width / containerRect.value.width;
  }

  return {
    x: (sceneCenterX - centerX) * scale,
    y: (sceneCenterY - centerY) * scale
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
  left: Math.max(Math.min(diffCenter().x, miniMapMaxWidth.value - scale(sceneRect.value.width)), 0),
  top: Math.max(Math.min(diffCenter().y, miniMapMaxWidth.value - scale(sceneRect.value.height)), 0)
}));

</script>

<template>
  <div
      :style="{
        width: miniMapMaxWidth + 'px',
        height: miniMapMaxHeight + 'px',
      }"
      style="position:absolute; padding: 5px; bottom: 0; right: 0; border: 1px solid #e1e1e1; pointer-events: none; ">
    <div style="position: relative">
      <div
          style="position:absolute;background-color: rgba(255,255,255,0.40);border: 1px solid #495db9; pointer-events: none;"
          :style="{
        height: miniMapContainer.height+'px',
        width: miniMapContainer.width+'px',
        top: miniMapContainer.top + 'px',
        left: miniMapContainer.left + 'px',
      }"
      >
      </div>

      <div
          style="position:absolute;background-color: rgba(255,255,255,0.75);border: 1px solid #d74848; pointer-events: none;"
          :style="{
      height: minimapScene.height + 'px',
      width: minimapScene.width + 'px',
      top: minimapScene.top + 'px',
      left: minimapScene.left + 'px',
    }"
      ></div>
    </div>
  </div>
</template>
