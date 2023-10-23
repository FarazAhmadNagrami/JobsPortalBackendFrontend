import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import vueRouter from 'vue-router';
import about from './components/About.vue';
import HomeWorld from './components/HomeWorld.vue';
Vue.use(vueRouter);

const routes = [
  { path: '/about', component: about },
  { path: '/HomeWorld', component: HomeWorld }
]
const router = new vueRouter({
  routes
})
Vue.config.productionTip = false
Vue.prototype.$axios = axios;

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
