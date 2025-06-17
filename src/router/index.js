import AuthView from '@/pages/AuthView.vue'
import RecipeDetailsPage from '@/pages/RecipeDetailsPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/auth', 
    name: 'auth',
    component: AuthView,
  },
  {
    path: '/recipe-details',
    name: 'recipe-details',
    component: RecipeDetailsPage,
  }
  ],
})

export default router
