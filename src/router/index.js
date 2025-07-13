import AuthView from '@/views/AuthView.vue'
import HeroSection from '@/components/HeroSection.vue'
import RecipeDetailsPage from '@/views/RecipeDetailsPage.vue'
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
  {
    path: '/category/:category',
    name: 'CategoryPage',
    component: () => import('@/views/CategoryPage.vue')
  },
  {
    path: '/recipe-details',
    name: 'recipe-details',
    component: RecipeDetailsPage,
  },
  ],
})

export default router
