import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.directive('my-text', (el, { value }) => {
  // console.log(rest)
  el.innerHTML = value
  console.log('自定义指令......')
})

Vue.directive('my-show', (el, { value }) => {
  // console.log(rest)
  el.style.display = value ? '' : 'none'
  console.log('显示与隐藏......')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
