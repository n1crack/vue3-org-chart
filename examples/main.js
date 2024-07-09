import {createApp} from 'vue'
import App from './App.vue'
import { Vue3OrgChartPlugin } from '../dist/vue3-org-chart.js'
import '../dist/style.css';

const app = createApp(App);

app.use(Vue3OrgChartPlugin)
app.mount('#app')
