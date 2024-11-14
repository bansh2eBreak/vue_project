import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/hero'
  },
  {
    path: '/hero',
    name: 'hero',
    component: () => import('../views/tlias/HeroView.vue')
  },
  {
    path: '/sect',
    name: 'sect',
    component: () => import('../views/tlias/SectView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
