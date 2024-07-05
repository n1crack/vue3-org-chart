import {createApp} from 'vue'
import App from './App.vue'
import VueOrgChart from '../src/index.js'

const app = createApp(App);

app.use(VueOrgChart)
app.mount('#app')
