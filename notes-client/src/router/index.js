import Vue from 'vue'
import Router from 'vue-router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

const components = {
  layout: () => import('@/views/layout'),
  index: () => import('@/views/index'),
  register: () => import('@/views/register'),
  editNote: () => import('@/views/editNote'),
  noteDetails: () => import('@/views/noteDetails')
}

const router = new Router({
  routes: [ 
    {
      path: '/',
      name: 'layout',
      component: components.layout,
      redirect: '/index',
      children: [
        {
          path: 'index',
          meta: {
            title: '云笔记首页'
          }, 
          component: components.index
        },
        {
          path: 'register',
          meta: {
            title: '注册页'
          },
          component: components.register
        },
        {
          path: 'editNote',
          meta: {
            title: '写笔记页面'
          },
          component: components.editNote
        },
        { 
          name: 'noteDetails',
          path: 'noteDetails/:id',
          meta: {
            title: '笔记详情页'
          },
          component: components.noteDetails
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  Nprogress.start()
  next()
})

router.afterEach((to, from) => {
  Nprogress.done()
})

export default router