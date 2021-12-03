import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import App from './App.vue'
import Index from './pages/index.vue'
import Contact from './pages/contact.vue'

Vue.use(VueRouter);

Vue.config.productionTip = false

const router: VueRouter = new VueRouter({
  mode:'history',
  routes:[
    { path: '/', component: Index },
    { path: '/contact', component: Contact }
  ]
});


new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')

