<template>
  <div class="wrapper">
    <vue-org-chart>

      <template #node="{item, nodes, show, handleChildren}">
         <div class="w-48 p-2 border bg-slate-50 rounded hover:bg-slate-200"
             :class="{ 'border-indigo-300 bg-indigo-100': show }">
          <div>{{ item.id }} ({{ nodes.length }})</div>
          <div>{{ item.name }} </div>
          <div>{{ item.name }} </div>
          <div>{{ item.name }} </div>
          <div>{{ item.name }} </div>
        </div>
       <div class="text-center">
          <button class="border w-4 h-4 bg-white text-xs" v-if="nodes.length" @click="handleChildren">{{ show ? '-' : '+' }}</button>
        </div>
      </template>

    </vue-org-chart>
  </div>
</template>
<style>
body {
  margin: 0;
  background: #eeeeee;
}
.wrapper {
  max-width: 800px;
  margin: 80px auto;
}
.btn{
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
  cursor: pointer;
  outline: none;
}
</style>
