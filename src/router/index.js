import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/homepage'
import invest from '@/components/invest'
import three from '@/components/three'

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
      path: '/three',
      name: 'three',
      component: three
    }
  ]
})
