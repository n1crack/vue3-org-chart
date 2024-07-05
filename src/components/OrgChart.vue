<template>
  <div class="vue3-org-chart">
             <div> {{ containerLeft }} x {{ containerTop }}</div>
           <div> {{ sceneWidth }} x {{ sceneHeight }}</div>
           <div>
            {{ sceneX }} x {{ sceneY }}
           </div>
    <div ref="container" 
    class="relative min-h-[70vh] border rounded bg-white text-center overflow-hidden" 
            @mousedown="handleMouseDown"
            @mousemove="handleMouseMove"
            @mouseup="handleMouseUp">
        <div class="flex py-2 justify-center w-full absolute  p-5 " ref="scene"  
            :style="{ left: elementPositionX, top: elementPositionY}"
        >
            <Node :id="getRootId()" @opened="handleOpenItem" key="root"></Node>
        </div> 
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import Node from './Node.vue';
import data from '../../sample.json';
import collection from 'lodash/collection';
import arr from 'lodash/array';
import { useElementBounding } from '@vueuse/core'

const scene = ref(null);
const container = ref(null);
const elementPositionX = ref(0);
const elementPositionY = ref(0);
const getRoot = () => {
  return collection.find(data, { parentId: "" });
};

const getRootId = () => {
  return getRoot().id;
};


 // move org chart 
let lastOpened = ref(null);

let isDragging = ref(false);
let startX = 0;
let startY = 0;
let translateX = 0;
let translateY = 0;

const {x: sceneX, y: sceneY, width: sceneWidth, height: sceneHeight } = useElementBounding(scene);
const {left: containerLeft, top: containerTop, width: containerWidth, height: containerHeight } = useElementBounding(container);


const handleMouseDown = (e) => {
  isDragging.value = true;
  startX = e.clientX - containerLeft.value;
  startY = e.clientY - containerTop.value;
};

const handleMouseMove = (e) => {
  if (!isDragging.value) return;
  const x = e.clientX - containerLeft.value;
  const y = e.clientY - containerTop.value;
  translateX += x - startX;
  translateY += y - startY;
  elementPositionX.value = `${translateX}px`;
  elementPositionY.value = `${translateY}px`;
  startX = x;
  startY = y;
};
 
const handleMouseUp = () => {
  isDragging.value = false;
};

const handleOpenItem = ({x, y}) => {
 
   // console.log(x, y);
};
 

 
const target = ref(null);
const size = { w: 0, h: 0 };
const pos = { x: 0, y: 0 };
const zoomTarget = { x: 0, y: 0 };
const zoomPoint = { x: 0, y: 0 };
let scale = 1;
const maxScale = 5;
const factor = 1 ;

onMounted(() => {
    target.value = scene.value;
    size.w = target.value.offsetWidth;
    size.h = target.value.offsetHeight;
    target.value.style.transformOrigin = '0 0';
    container.value.addEventListener('wheel', scrolled);
});

function scrolled(e) {
    const offset = container.value.getBoundingClientRect();
    zoomPoint.x = e.pageX - offset.left;
    zoomPoint.y = e.pageY - offset.top;


    e.preventDefault();

    const delta = Math.max(-1, Math.min(1, !e.deltaY || e.wheelDelta || e.detail));

    zoomTarget.x = (zoomPoint.x - pos.x) / scale;
    zoomTarget.y = (zoomPoint.y - pos.y) / scale;
    console.log(pos.x,pos.y )
    scale += delta * factor * scale / 20;
    scale = Math.max(1, Math.min(maxScale, scale));

    pos.x = -zoomTarget.x * scale + zoomPoint.x;
    pos.y = -zoomTarget.y * scale + zoomPoint.y;


    if (pos.x > 0) pos.x = 0;
    if (pos.x + size.w * scale < size.w) pos.x = -size.w * (scale - 1);
    if (pos.y > 0) pos.y = 0;
    if (pos.y + size.h * scale < size.h) pos.y = -size.h * (scale - 1);

    update();
}

function update() {
    target.value.style.transform = `translate(${pos.x}px, ${pos.y}px) scale(${scale}, ${scale})`;
}
 
 
</script>
