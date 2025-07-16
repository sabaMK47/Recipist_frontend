import AuthView from '@/views/AuthView.vue'
import HeroSection from '@/components/HeroSection.vue'
import RecipeDetailsPage from '@/views/RecipeDetailsPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import About from '@/views/About.vue'

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
    path: '/recipes',
    name: 'CategoryPage',
    component: () => import('@/views/CategoryPage.vue')
  },
  {
    path: '/recipes/:id',
    name: 'recipe-details',
    component: RecipeDetailsPage,
  },
  {
    path: '/about',
    name: 'about-page',
    component: About,
  }
  ],
})

export default router
