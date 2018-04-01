import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import Vip from '@/pages/vip/vip'
import Classify from '@/pages/classify/classify'
import Shopcar from '@/pages/shopcar/shopcar'
import My from '@/pages/my/my'
import Detail from '@/pages/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/vip',
      name: 'vip',
      component: Vip
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: Shopcar
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
