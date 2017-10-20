import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/homepage'
import invest from '@/components/invest'
import personal from '@/components/personal'
import setPayPsd from '@/components/setPayPsd'
import certification from '@/components/certification'
import accountSet from '@/components/accountSet'
import modifyLoginPsdB from '@/components/modifyLoginPsdB'
import modifyLoginPsdA from '@/components/modifyLoginPsdA'
import modifyPayPsdA from '@/components/modifyPayPsdA'
import modifyPayPsdB from '@/components/modifyPayPsdB'
import cashCommission from '@/components/cashCommission'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/homepage',
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
      path: '/setPayPsd',
      name: 'setPayPsd',
      component: setPayPsd
    },
    {
      path: '/certification',
      name: 'certification',
      component: certification
    },
    {
      path: '/accountSet',
      name: 'accountSet',
      component: accountSet
    },
    {
      path: '/modifyLoginPsdB',
      name: 'modifyLoginPsdB',
      component: modifyLoginPsdB
    },
    {
      path: '/modifyLoginPsdA',
      name: 'modifyLoginPsdA',
      component: modifyLoginPsdA
    },
    {
      path: '/modifyPayPsdA',
      name: 'modifyPayPsdA',
      component: modifyPayPsdA
    },
    {
      path: '/modifyPayPsdB',
      name: 'modifyPayPsdB',
      component: modifyPayPsdB
    },
    {
      path: '/cashCommission',
      name: 'cashCommission',
      component: cashCommission
    }
    
  ]
})
