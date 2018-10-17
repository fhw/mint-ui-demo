import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import test1 from './../pages/test1'
import test2 from './../pages/test2'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'test1',
      component: test1,
      children: [
        {
          path: '/test2',
          component: test2,
          name: 'test2'
        }
      ]
    }
  ]
})
