import Vue from 'vue'
import './styles/reset.css' // 样式重置
import './styles/index.scss' // 通用样式

import ElementUI from './plugins/elementUI'
import './styles/element-variables.scss'
Vue.use(ElementUI)

import App from './App.vue'
import router from './router'
import store from './store'

import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
