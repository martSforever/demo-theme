import Vue from 'vue'
import App from './App.vue'
import './index.scss'

import Plain from 'src'

Vue.config.productionTip = false

Vue.use(Plain)

new Vue({
    render: h => h(App),
}).$mount('#app')
