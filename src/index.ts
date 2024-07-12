import Vue3OrgChart from './components/Vue3OrgChart.vue';
import './assets/css/style.scss';
import type { App } from 'vue'


const Vue3OrgChartPlugin = {
    /**
     * @param {import('vue').App} app
     * @param options
     */
    install(app: App, options = {}) {
        // define main component
        app.component("Vue3OrgChart", Vue3OrgChart);
    }
};


export { Vue3OrgChart, Vue3OrgChartPlugin };
