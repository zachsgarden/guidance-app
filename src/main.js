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
import GuidanceOne from './components/GuidanceOne.vue';
import GuidanceTwo from './components/GuidanceTwo.vue';
import GuidanceThree from './components/GuidanceThree.vue';
import GuidanceFour from './components/GuidanceFour.vue';


Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: '*',
      component: Login
    },
    {
      path: '/guidance-one',
      component: GuidanceOne
    },
    {
      path: '/guidance-two',
      component: GuidanceTwo
    },
    {
      path: '/guidance-three',
      component: GuidanceThree
    },
    {
      path: '/guidance-four',
      component: GuidanceFour
    }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
