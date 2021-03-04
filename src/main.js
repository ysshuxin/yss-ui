import Vue from 'vue'
import App from "./App";
import router from './router/index'
import ui from './index'
Vue.use(ui)
new Vue({router,render: h => h(App)}).$mount('#app')
