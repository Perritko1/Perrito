import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import GuardiansPage from '@/views/GuardiansPage.vue'
import FirstVisitOwn from '@/views/FirstVisitOwn.vue'
import FirstVisitGuard from '@/views/FirstVisitGuard.vue'
import AnimalsPage from '@/views/AnimalsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/guardians',
    name: 'Strazcovia',
    component: GuardiansPage
  },
  {
    path: '/first-guardian',
    name: 'FirstVisit strazca',
    component: FirstVisitGuard
  },
  {
    path: '/first-owner',
    name: 'FirstVisit majitel',
    component: FirstVisitOwn
  },
  {
    path: '/animals',
    name: 'Zvieratka',
    component: AnimalsPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
