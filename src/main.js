import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import './registerServiceWorker'
//import '@mdi/font/css/materialdesignicons.css'
import vuetify from 'vue-cli-plugin-vuetify'

Vue.use(vuetify)
Vue.config.productionTip = false

/* eslint-disable */


new Vue({
    router,
    store,

    render: h => h(App)
}).$mount('#app')