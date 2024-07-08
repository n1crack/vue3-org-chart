import {createApp} from 'vue'
import App from './App.vue'
import Vue3OrgChart from '../src'

const app = createApp(App);

app.use(Vue3OrgChart)
app.mount('#app')
