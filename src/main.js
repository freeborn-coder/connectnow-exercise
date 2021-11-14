import Vue from 'vue'
import VueRouter from 'vue-router'
// import Index from './pages/index'
// import Contact from './pages/contact'
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
  router
}).$mount('#app')

