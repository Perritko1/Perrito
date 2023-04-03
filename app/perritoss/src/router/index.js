import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import LoginPage from '../views/LoginPage.vue'
import StrazcoviaPage from '../views/StrazcoviaPage.vue'
import FirstVisitMaj from '../views/FirstVisitMaj.vue'
import FirstVisitStr from '../views/FirstVisitStr.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: LoginPage
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/strazcovia',
    name: 'Strazcovia',
    component: StrazcoviaPage
  },
  {
    path: '/first-strazca',
    name: 'FirstVisit strazca',
    component: FirstVisitStr
  },
  {
    path: '/first-majitel',
    name: 'FirstVisit majitel',
    component: FirstVisitMaj
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
