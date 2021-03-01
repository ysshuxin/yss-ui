import Vue from 'vue'
import App from "./App";
import router from './router/index'
import 'prismjs/themes/prism-solarizedlight.css'
import ui from './index'
Vue.use(ui)
new Vue({router,render: h => h(App)  }).$mount('#app')
