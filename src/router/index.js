import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './components/Login.vue';
import ModerateHypovol from './components/ModerateHypovol.vue';
import Results from './Results.vue';
import PageOne from './components/PageOne.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '*',
      component: Login
    },
    {
      path: '/moderate-hypovolemia',
      name: 'ModerateHypovol',
      component: ModerateHypovol
    },
    {
      path: '/page-one',
      name: 'PageOne',
      component: PageOne
    },
    {
      path: '/results',
      component: Results
    }
  ]
})

new Vue({
    render: h => h(App),
    router
  }).$mount('#app')