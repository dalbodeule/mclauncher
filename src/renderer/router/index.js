import Vue from 'vue'
import Router from 'vue-router'

import MainPage from '@/components/MainPage'
import LoggerPage from '@/components/LoggerPage'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/logger',
      name: 'logger',
      component: LoggerPage
    }
  ]
})
