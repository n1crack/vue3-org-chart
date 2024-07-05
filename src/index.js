import VueOrgChart from './components/OrgChart.vue';
import './assets/css/style.scss';

export default {
    /**
     * @param {import('vue').App} app
     * @param options
     */
    install(app, options = {}) {
        // define main component
        app.component("VueOrgChart", VueOrgChart);
    }
};


