import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/RegisterScreen',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegisterScreen.vue')
    },
    {
      path: '/TesteSIM',
      name: 'teste',
      component: () => import('../views/TesteSIM.vue')
    }

  ]
})

export default router
