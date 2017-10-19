import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/homepage'
import invest from '@/components/invest'
import personal from '@/components/personal'
import setTransactionPassword from '@/components/setTransactionPassword'
import certification from '@/components/certification'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/invest',
      name: 'invest',
      component: invest
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
    {
      path: '/setTransactionPassword',
      name: 'setTransactionPassword',
      component: setTransactionPassword
    },
    {
      path: '/certification',
      name: 'certification',
      component: certification
    }
  ]
})
