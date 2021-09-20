import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Countrie from '@/views/Countrie.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/countrie/:name',
    name: 'Countrie',
    component: Countrie
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
