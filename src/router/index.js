import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from '@/components/router-base/a'
import B from '@/components/router-base/b'
import NoP from '@/components/router-base/404'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'No',
      component: NoP
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/a',
      name: 'A',
      component: A
    },
    {
      path: '/b',
      name: 'B',
      component: B
    }
  ]
})
