import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('@/components/IndexPage.vue').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
