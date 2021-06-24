import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import 'bootstrap';
import {library} from '@fortawesome/fontawesome-svg-core';
import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.css';

import {
  faShoppingCart,
  faDollarSign,
  faSyringe
}
  from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart, faDollarSign, faSyringe);   

import Login from './components/Login.vue';
import Guidance from './components/Guidance.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: '*',
      component: Login
    },
    {
      path: '/guidance',
      component: Guidance
    }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
