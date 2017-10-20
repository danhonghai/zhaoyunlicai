import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/homepage'			//首页
import invest from '@/components/invest'					//产品列表
import regular from '@/components/regular'				//定期详情
import unregular from '@/components/unregular'		//散标详情
import buy from '@/components/buy'								//购买
import buyResult from '@/components/buyResult'		//购买结果
import recharge from '@/components/recharge'			//充值
import ranklist from '@/components/ranklist'			//购买排行
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
      path: '/regular',
      name: 'regular',
      component: regular
    },
    {
      path: '/unregular',
      name: 'unregular',
      component: unregular
    },
    {
      path: '/buy',
      name: 'buy',
      component: buy
    },
    {
      path: '/buyResult',
      name: 'buyResult',
      component: buyResult
    },
    {
      path: '/recharge',
      name: 'recharge',
      component: recharge
    },
    {
      path: '/ranklist',
      name: 'ranklist',
      component: ranklist
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
