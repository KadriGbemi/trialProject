import Vue from 'vue'
import Router from 'vue-router'
import MyApp from '@/components/MyApp'
import Miley from '@/components/Miley'
import axios from 'axios'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyApp',
      component: MyApp
    },
    {
      path: '/miley',
      name: 'Miley',
      component: Miley
    }
  ]
})
