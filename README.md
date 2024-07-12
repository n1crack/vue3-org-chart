## Vue3 Org Chart

[![GitHub](https://img.shields.io/github/license/n1crack/vue3-org-chart)](https://github.com/n1crack/vue3-org-chart/blob/master/LICENSE) 
[![npm](https://img.shields.io/npm/v/vue3-org-chart)](https://www.npmjs.com/package/vue3-org-chart)

### About
Vue3 Org Chart is a simple and lightweight organization chart component for Vue3. It is highly customizable.

<img width="500" alt="image" src="https://github.com/n1crack/vue3-org-chart/assets/712404/b168b58c-dc63-4968-93f8-f3e76cc5ccae">

### Demo
Playground : [https://playcode.io/vue3orgchart](https://playcode.io/vue3orgchart)

Demo : [https://vue3orgchart.playcode.io](https://vue3orgchart.playcode.io)

### Installation

```bash
npm i vue3-org-chart
```

### Usage
JS entry point
```js
import { createApp } from 'vue'
import App from './App.vue'

import { Vue3OrgChartPlugin } from 'vue3-org-chart'
import 'vue3-org-chart/dist/style.css'

const app = createApp(App)

app.use(Vue3OrgChartPlugin)

app.mount('#app') 
```

```javascript
// alternatively, you can import the component directly
// to use component, Vue3OrgChart instead of Vue3OrgChartPlugin
<script setup>
   import { Vue3OrgChart } from 'vue3-org-chart' 
   import 'vue3-org-chart/dist/style.css' 
   // ...
</script>
```


#### Vue Template
for more detailed example, please check the [examples](examples) folder
```vue 
<div>
    <vue3-org-chart json="YOUR_DATA_JSON_URL">
        <template #node="{node, children, open, toggleChildren}">
            <!-- Node Element / TEMPLATE START -->
            <div>{{node.name}}</div>
            <button v-if="children.length" @click="toggleChildren"> {{ open ? '-' : '+' }}</button>
            <!-- Node Element / TEMPLATE END -->
        </template>
    </vue3-org-chart>
</div>
```

#### Styling

You have full control over node elements, In addition to that there are some css variables for lines and container height or node spacing..

```css 
:root {
    --vue3-org-chart-container-min-height: 70vh;
    --vue3-org-chart-line-top: .5rem;
    --vue3-org-chart-line-bottom: .5rem;
    --vue3-org-chart-node-space-x:  .5rem;
    --vue3-org-chart-line-color: blue;
}
```

![image](https://github.com/n1crack/vue3-org-chart/assets/712404/9eb4df4b-2156-4797-be2f-c5074ff8c91b)

### Collaboration
If you want to contribute to the project, please feel free to fork the repository and submit your changes as a pull request. Ensure that the changes you submit are applicable for general use rather than specific to your project.

### Dependencies
 - [Vue3](https://vuejs.org/)
 - [panzoom](https://github.com/anvaka/panzoom)  : Zoom/Pan Utility


### License
Copyright (c) 2024 Yusuf ÖZDEMİR, released under [the MIT license](LICENSE)
