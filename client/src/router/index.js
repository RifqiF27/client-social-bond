import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue';
import LandingView from '../views/LandingView.vue';
import RegisterView from '../views/RegisterView.vue'
import HomePage from '../views/HomePage.vue'
import DetailThread from '../views/DetailThread.vue'
import FireChat from '../views/FireChat.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'landingPage',
      path: '/',
      component: LandingView
    },
    {
      name: 'login',
      path: '/login',
      component: LoginView
    },
    {
      name: 'register',
      path: '/register',
      component: RegisterView
    },
    {
      name: 'home',
      path: '/threads',
      component: HomePage
    },
    {
      name: 'detail',
      path: '/threads/:id',
      component: DetailThread
    },
    {
      name: 'fireChat',
      path: '/msg',
      component: FireChat
    },
 
  ]
})

export default router
