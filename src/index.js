import Vue3OrgChart from './components/Vue3OrgChart.vue';
import './assets/css/style.scss';

export default {
    /**
     * @param {import('vue').App} app
     * @param options
     */
    install(app, options = {}) {
        // define main component
        app.component("Vue3OrgChart", Vue3OrgChart);
    }
};


