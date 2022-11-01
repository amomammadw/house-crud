import indexVue from '@/views/index.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: indexVue
    },
    {
      path: '/HouseList',
      name: 'HouseList',
      component: () => import('../views/HouseList.vue')
    }
  ]
})

export default router
