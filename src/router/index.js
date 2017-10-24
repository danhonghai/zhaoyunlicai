import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'											//登录
import register from '@/components/register'								//注册
import homepage from '@/components/homepage'								//首页
import invest from '@/components/invest'										//产品列表
import regular from '@/components/regular'									//定期详情
import unregular from '@/components/unregular'							//散标详情
import buy from '@/components/buy'													//购买
import buyResult from '@/components/buyResult'							//购买结果
import recharge from '@/components/recharge'								//充值
import ranklist from '@/components/ranklist'								//购买排行
import personal from '@/components/personal'                //我的
import setPayPsd from '@/components/setPayPsd'              //设置交易密码
import certification from '@/components/certification'      //认证（实名&绑定银行卡）
import accountSet from '@/components/accountSet'            //账户设置
import modifyLoginPsdB from '@/components/modifyLoginPsdB'  //修改交易密码B页面
import modifyLoginPsdA from '@/components/modifyLoginPsdA'  //修改交易密码A页面
import modifyPayPsdA from '@/components/modifyPayPsdA'      //修改交易密码A页面
import modifyPayPsdB from '@/components/modifyPayPsdB'      //修改交易密码B页面
import cashCommission from '@/components/cashCommission'    //提现
import cashResult from '@/components/cashResult'  					//提现结果
import investRecord from '@/components/investRecord'				//投资记录
import moneyRecord from '@/components/moneyRecord'					//资金流水记录
import myBankcard from '@/components/myBankcard'						//我的银行卡
import suggestion from '@/components/suggestion'						//问题反馈




Vue.use(Router)

export default new Router({
  routes: [
   	{
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
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
    },
    {
      path: '/cashResult',
      name: 'cashResult',
      component: cashResult
    },
    {
      path: '/investRecord',
      name: 'investRecord',
      component: investRecord
    },
    {
      path: '/moneyRecord',
      name: 'moneyRecord',
      component: moneyRecord
    },
    {
      path: '/myBankcard',
      name: 'myBankcard',
      component: myBankcard
    },
    {
      path: '/suggestion',
      name: 'suggestion',
      component: suggestion
    }
  ]
})
