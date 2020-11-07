import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VCharts from 'v-charts'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import JsonExcel from "vue-json-excel";








Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VCharts);
Vue.use(mavonEditor)
    /*exceal*/
Vue.component("download-excel", JsonExcel)




new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')