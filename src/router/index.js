import Vue from 'vue'
import Router from 'vue-router' // 注册这个路由模块

// 引入 bed  inpatientarea patient

import Home from '../views/bed'
import Film from '../views/inpatientarea'
import Card from '../views/patient'
import Detail from '../views/sign/detail'

Vue.use(Router)

export default new Router({

  mode: 'history', // 默认 hash  #/home  history模式  /home
  routes: [{
      path: '/home', //床位 ==> 患者信息（展示患者简卡、列表）
      component: Home
    },
    {
      path: '/film', // 病区 ==>体征批量录入、医嘱拆分、医嘱巡视
      component: Film

    },
    {
      path: '/card', // 患者 ==> 记录单、护理问题、体征录入、护理计划
      component: Card
    },
    {
      path: '/detail/:id', //明细 ==> 暂未使用
      component: Detail
    },
    {
      path: '*', // 重定向
      redirect: '/home'
    }
  ]
})
