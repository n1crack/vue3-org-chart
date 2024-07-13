import {createApp} from 'vue'
import App from './App.vue'
// import { Vue3OrgChartPlugin } from '../dist/vue3-org-chart.js'
import {Vue3OrgChartPlugin} from '../src'
// import '../dist/style.css';
import '../src/assets/css/style.scss';

const app = createApp(App);

app.use(Vue3OrgChartPlugin)
app.mount('#app')
