import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import App from './App'

Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  routes:[
    { path: '/', component: ()=> import('./pages/index') },
    { path: '/contact', component: ()=> import('./pages/contact') }
  ]
})


new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')

