import AuthView from '@/components/AuthView.vue'
import HeroSection from '@/components/HeroSection.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {
    path: '/',
    name: 'home',
    component: HeroSection,
  },
  {
    path: '/auth', 
    name: 'auth',
    component: AuthView,
  },
  ],
})

export default router
