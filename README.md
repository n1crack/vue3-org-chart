## Vue3 Org Chart

[![GitHub](https://img.shields.io/github/license/n1crack/vue3-org-chart)](https://github.com/n1crack/vue3-org-chart/blob/master/LICENSE) 
[![npm](https://img.shields.io/npm/v/vue3-org-chart)](https://www.npmjs.com/package/vue3-org-chart)

### About
Vue3 Org Chart is a simple and lightweight organization chart component for Vue3. It is highly customizable.

<img width="500" alt="image" src="https://github.com/n1crack/vue3-org-chart/assets/712404/b168b58c-dc63-4968-93f8-f3e76cc5ccae">

### Demo
[https://playcode.io/1931623](https://playcode.io/1931623)

### Installation

```bash
npm i vue3-org-chart
```

### Usage
JS entry point
```js
import { createApp } from 'vue'
import App from './App.vue'

import Vue3OrgChart from 'vue3-org-chart'
import 'vue3-org-chart/dist/style.css'

const app = createApp(App)

app.use(Vue3OrgChart)

app.mount('#app') 
```

#### Vue Template
for more detailed example, please check the [examples](examples) folder
```vue 
<div>
    <vue3-org-chart json="YOUR_DATA_JSON_URL">
        <template #node="{item, nodes, show, handleChildren}">
            <div>{{item.name}}</div>
            <button v-if="nodes.length" @click="handleChildren"> {{ show ? '-' : '+' }}</button>
        </template>
    </vue3-org-chart>
</div>
```

### Collaboration
If you want to contribute to the project, please feel free to fork the repository and submit your changes as a pull request. Ensure that the changes you submit are applicable for general use rather than specific to your project.

### Dependencies
 - [Vue3](https://vuejs.org/)
 - [panzoom](...)  : Zoom/Pan Utility


### License
Copyright (c) 2024 Yusuf ÖZDEMİR, released under [the MIT license](LICENSE)
