<script setup lang="ts">

import {computed, inject, onMounted, provide, ref, watch} from "vue";
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

  return function(this: any, ...args: any[]): void {
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

const outboundSides = computed(() => {
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
});

const maxOutboundSide = computed(() => {
  const maxWidth = Math.max(outboundSides.value.left, outboundSides.value.right, containerRect.value.width, sceneRect.value.width);
  const maxHeight = Math.max(outboundSides.value.top, outboundSides.value.bottom, containerRect.value.height, sceneRect.value.height);

  return { maxWidth, maxHeight };
});

const scaledRect = computed(() => {
  const { maxWidth, maxHeight } = maxOutboundSide.value;

  let scale = Math.min(miniMapMaxWidth.value / maxWidth, miniMapMaxHeight.value / maxHeight);


  return {
    width: containerRect.value.width * scale ,
    height: containerRect.value.height * scale,
    top: containerRect.value.top * scale,
    left: containerRect.value.left * scale,
  };
});

const scaledScene = computed(() => {
  const { maxWidth, maxHeight } = maxOutboundSide.value;

  let scale = Math.min(miniMapMaxWidth.value / maxWidth, miniMapMaxHeight.value / maxHeight);


  return {
    width: sceneRect.value.width * scale,
    height: sceneRect.value.height * scale,
    top: sceneRect.value.top * scale,
    left: sceneRect.value.left * scale,
  };
});

const diffCenter = computed(() => {
  const centerX = containerRect.value.left ;
  const centerY = containerRect.value.top  ;
  const sceneCenterX = sceneRect.value.left  ;
  const sceneCenterY = sceneRect.value.top  ;
  let scale = Math.min(miniMapMaxWidth.value / sceneRect.value.width, miniMapMaxHeight.value / sceneRect.value.height);


  if (sceneRect.value.width / containerRect.value.width <= 1) {
    scale = scale * sceneRect.value.width / containerRect.value.width ;
  }

  return {
    x: (+  sceneCenterX - centerX) * scale,
    y: (+  sceneCenterY - centerY) * scale
  };
});

const resizedRect = computed(() =>({
  width: scaledRect.value.width,
  height: scaledRect.value.height,
  top: Math.max(-scaledScene.value.top+ scaledRect.value.top, 0),
  left: Math.max(-scaledScene.value.left + scaledRect.value.left, 0),
}));

const resizedScene = computed(() =>({
  width: scaledScene.value.width,
  height: scaledScene.value.height,
  top: Math.max(Math.min(diffCenter.value.y, miniMapMaxWidth.value - scaledScene.value.height), 0),
  left: Math.max(Math.min(diffCenter.value.x, miniMapMaxWidth.value - scaledScene.value.width), 0)
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
        height: resizedRect.height+'px',
        width: resizedRect.width+'px',
        top: resizedRect.top + 'px',
        left: resizedRect.left + 'px',
      }"
      >
      </div>

    <div
        style="position:absolute;background-color: rgba(255,255,255,0.75);border: 1px solid #d74848; pointer-events: none;"
        :style="{
      height: resizedScene.height + 'px',
      width: resizedScene.width + 'px',
      top: resizedScene.top + 'px',
      left: resizedScene.left + 'px',
    }"
    ></div>
    </div>
  </div>
</template>
