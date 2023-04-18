import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/HomePage.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/LoginPage.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register/RegisterPage.vue')
  },
  {
    path: '/guardians',
    name: 'Strazcovia',
    component: () => import('@/views/Guardians/GuardiansPage.vue')
  },
  {
    path: '/first-guardian',
    name: 'FirstVisit strazca',
    component: () => import('@/views/FirstVisitGuard/FirstVisitGuard.vue')
  },
  {
    path: '/first-owner',
    name: 'FirstVisit majitel',
    component: () => import('@/views/FirstVisitOwn/FirstVisitOwn.vue')
  },
  {
    path: '/animals',
    name: 'Zvieratka',
    component: () => import('@/views/Animals/AnimalsPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
