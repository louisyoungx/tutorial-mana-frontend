import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const SignIn = () => import('../views/Sign-in.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
