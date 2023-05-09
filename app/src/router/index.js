import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
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
})

export default router
