import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Code from './views/Code.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/the_codes',
      name: 'code',
      component: Code,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('./views/Books.vue'),
    },
  ],
})

export default router
