<template>
  <nav
    class="w-screen flex justify-between items-center bg-white text-black dark:bg-dark dark:text-white gap-x-9 absolute top-0 left-0 p-5 text-lg">
    <!-- Left section -->
    <div class="flex gap-x-9 items-center">
      <RouterLink to="/">
        <h1 class="logo-font text-4xl text-main">Recipist</h1>
      </RouterLink>

      <ul class="gap-8 text-font-medium hidden lg:flex">
        <!-- Home link -->
        <li>
          <RouterLink to="/" class="group relative flex-col items-center cursor-pointer hidden lg:flex ">
            <p class="cursor-pointer">Home</p>
            <span
              class="h-[2px] w-full mt-1 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-main"></span>
          </RouterLink>
        </li>

        <!-- Recipe categories -->
        <li class="relative flex flex-col items-center cursor-pointer group">
          <span>Recipe categories</span>
          <span
            class="h-[2px] w-full mt-1 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-main"></span>
          <div
            class="absolute top-full left-0 lg:w-[200px] bg-light dark:bg-darkgreen shadow-lg p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl">
            <div class="flex flex-col gap-2">
              <div class="flex items-center gap-2 menu-li">
                <img src="../assets/icons/food.svg" alt="Meals" class="w-8 h-8">
                <h4 class="text-font-bold text-main"
                  @click="$router.push({ path: '/recipes', query: { tags: 'main-dish' } })">Main-dish</h4>
              </div>
              <div class="flex items-center gap-2 menu-li ">
                <img src="../assets/icons/dietary.svg" alt="Drinks" class="w-8 h-8">
                <h4 class="text-font-bold text-main"
                  @click="$router.push({ path: '/recipes', query: { tags: 'dietary' } })">Dietary</h4>
              </div>
              <div class="flex items-center gap-2 menu-li ">
                <img src="../assets/icons/vegetables.svg" alt="Non-Veg" class="w-8 h-8">
                <h4 class="text-font-bold text-main"
                  @click="$router.push({ path: '/recipes', query: { tags: 'vegetarian' } })">Vegetarian</h4>
              </div>
              <div class="flex items-center gap-2 menu-li">
                <img src="../assets/icons/vegan.svg" alt="Vegetables" class="w-8 h-8">
                <h4 class="text-font-bold text-main"
                  @click="$router.push({ path: '/recipes', query: { tags: 'vegan' } })">Vegan</h4>
              </div>
              <div class="flex items-center gap-2 menu-li">
                <img src="../assets/icons/dessert.svg" alt="Fast Food" class="w-8 h-8">
                <h4 class="text-font-bold text-main"
                  @click="$router.push({ path: '/recipes', query: { tags: 'desserts' } })">Desserts</h4>
              </div>
              <div class="flex items-center gap-2 menu-li">
                <img src="../assets/icons/breakfast.svg" alt="Cereals" class="w-8 h-8">
                <h4 class="text-font-bold text-main"
                  @click="$router.push({ path: '/recipes', query: { tags: 'breakfast' } })">Breakfast</h4>
              </div>
              <div class="flex items-center gap-2 menu-li">
                <img src="../assets/icons/kid.svg" alt="Meals" class="w-8 h-8">
                <h4 class="text-font-bold text-main"
                  @click="$router.push({ path: '/recipes', query: { tags: 'kid-friendly' } })">Kid-friendly</h4>
              </div>
              <div class="flex items-center gap-2 menu-li">
                <img src="../assets/icons/cereals.svg" alt="Sides" class="w-8 h-8">
                <h4 class="text-font-bold text-main"
                  @click="$router.push({ path: '/recipes', query: { tags: 'side-dishes' } })">Side-dishes</h4>
              </div>
              <div class="flex items-center gap-2 menu-li">
                <img src="../assets/icons/salad.svg" alt="Fusion" class="w-8 h-8">
                <h4 class="text-font-bold text-main"
                  @click="$router.push({ path: '/recipes', query: { tags: 'appetizers' } })">Appetizers</h4>
              </div>
            </div>
          </div>
        </li>
        <RouterLink to="/about">
          <li class="relative flex flex-col items-center cursor-pointer group">
            <span>About us</span>
            <span
              class="h-[2px] w-full mt-1 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-main"></span>
          </li>
        </RouterLink>
      </ul>
      <div v-if="isHomePage" class="search-input relative lg:block hidden">
        <input v-model="recipeName" type="text" placeholder="search recipe by name"
          class="w-[300px] h-10 rounded-full px-5 pr-24 !rounded-4xl input-style" @keyup.enter="goToSearchResults" />
        <button @click="goToSearchResults" class="absolute right-1 cursor-pointer top-1 bottom-1 my-auto h-8 pl-4 pr-2">
          <img src="../assets/icons/search.svg" alt="search-icon" class="w-6 h-6">
        </button>
      </div>
    </div>

    <!-- Right section -->
    <div class="flex gap-x-6 items-center text-font-medium">
      <RouterLink to="/auth" class="group relative flex-col items-center cursor-pointer hidden lg:flex">
        <p v-if="authStore.token" @click="handleLogout()" class="cursor-pointer">
          Logout
        </p>
        <RouterLink v-else to="/auth" class="cursor-pointer">
          <p class="cursor-pointer">Sign up / Login</p>
        </RouterLink> 
        <span class="h-[2px] w-full mt-1 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-main"></span>
      </RouterLink>

      <!-- Theme toggle -->
      <div class="dark-light-mode ml-2 cursor-pointer bg-light rounded-full w-16 h-8 flex items-center px-1"
        @click="toggleTheme">
        <img src="/src/assets/icons/moon.svg" alt="moon-icon"
          class="w-7 h-7 transition-opacity duration-300 bg-main rounded-full p-1"
          :class="isDark ? 'opacity-100' : 'opacity-0'" />
        <img src="/src/assets/icons/sun.svg" alt="sun-icon"
          class="w-7 h-7 transition-opacity duration-300 bg-main rounded-full p-1"
          :class="!isDark ? 'opacity-100' : 'opacity-0'" />
      </div>

      <!-- menu icon for mobile view -->
      <div class="m-2 lg:hidden" @click="openMenu">
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"
          class="w-9 h-9 text-black dark:text-white">
          <path
            d="M7.66667 34.5C7.12362 34.5 6.66873 34.316 6.30201 33.948C5.93528 33.58 5.75128 33.1251 5.75001 32.5833C5.74873 32.0416 5.93273 31.5867 6.30201 31.2187C6.67128 30.8507 7.12617 30.6667 7.66667 30.6667H38.3333C38.8764 30.6667 39.3319 30.8507 39.6999 31.2187C40.0679 31.5867 40.2513 32.0416 40.25 32.5833C40.2487 33.1251 40.0647 33.5806 39.698 33.9499C39.3313 34.3192 38.8764 34.5026 38.3333 34.5H7.66667Z"
            fill="currentColor" />
          <path
            d="M7.66667 24.9167C7.12362 24.9167 6.66873 24.7327 6.30201 24.3647C5.93528 23.9967 5.75128 23.5418 5.75001 23C5.74873 22.4582 5.93273 22.0033 6.30201 21.6353C6.67128 21.2673 7.12617 21.0833 7.66667 21.0833H38.3333C38.8764 21.0833 39.3319 21.2673 39.6999 21.6353C40.0679 22.0033 40.2513 22.4582 40.25 23C40.2487 23.5418 40.0647 23.9973 39.698 24.3666C39.3313 24.7359 38.8764 24.9192 38.3333 24.9167H7.66667Z"
            fill="currentColor" />
          <path
            d="M7.66667 15.3333C7.12362 15.3333 6.66873 15.1493 6.30201 14.7813C5.93528 14.4133 5.75128 13.9584 5.75001 13.4167C5.74873 12.8749 5.93273 12.42 6.30201 12.052C6.67128 11.684 7.12617 11.5 7.66667 11.5H38.3333C38.8764 11.5 39.3319 11.684 39.6999 12.052C40.0679 12.42 40.2513 12.8749 40.25 13.4167C40.2487 13.9584 40.0647 14.414 39.698 14.7832C39.3313 15.1525 38.8764 15.3359 38.3333 15.3333H7.66667Z"
            fill="currentColor" />
        </svg>
      </div>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <transition name="fade">
    <div v-if="isMenuOpen"
      class="fixed inset-0 z-40 bg-white dark:bg-dark text-black dark:text-white p-6 flex flex-col gap-6 lg:hidden overflow-y-auto">
      <div class="flex justify-between items-center mb-4">
        <RouterLink to="/" @click="isMenuOpen = false">
          <h1 class="logo-font text-4xl text-main">Recipist</h1>
        </RouterLink>
        <button @click="openMenu" aria-label="close menu" class="text-4xl">✕</button>
      </div>

      <div class="!my-5">
        <div @click="toggleMegaMenu" class="flex justify-between items-center cursor-pointer group">
          <span class="text-2xl text-font-bold !mb-5">Recipe categories</span>
          <svg class="w-8 h-8 transition-transform duration-300" :class="{ 'rotate-180': showMega }"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <transition name="slide">
          <div v-if="showMega" class="!mt-5 space-y-6 text-right">
            <div v-for="section in megaMenu" :key="section.title" class="!mb-3">
              <h4 class="text-font-bold text-2xl text-main flex items-center gap-2 !mb-5 cursor-pointer"
                @click="goToCategory(section.slug)">
                <img :src="section.icon" alt="icon" class="w-8 h-8" />
                {{ section.title }}
              </h4>
              <ul class="space-y-1 text-sm">
                <li v-for="item in section.items" :key="item" class="mega-menu-li !py-5 text-2xl text-font-medium">
                  <a href="#" class="hover:text-main transition">{{ item }}</a>
                </li>
              </ul>
            </div>
          </div>
        </transition>
      </div>

      <div class="text-2xl text-font-bold !mb-5">
        <a href="#" class="block hover:text-main transition">About us</a>
      </div>
      <RouterLink to="/auth" @click="isMenuOpen = false">
        <div class="text-2xl text-font-bold !mb-5">{{ route.name == 'user-account' ? 'Logout' : 'Sign up / Login' }}</div>
      </RouterLink>
      <div v-if="isHomePage" class="search-input relative lg:hidden block w-full">
        <input v-model="recipeName" type="text" placeholder="search recipe by name"
          class="w-full h-12 rounded-full px-5 pr-24 !rounded-4xl input-style" @keyup.enter="goToSearchResults" />
        <button @click="goToSearchResults"
          class="absolute right-1 cursor-pointer top-1 bottom-1 my-auto h-8 pl-4 pr-2 pt-1">
          <img src="../assets/icons/search.svg" alt="search-icon" class="w-8 h-8">
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { computed, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { useDarkMode } from '@/composables/useDarkMode';
import router from '@/router';
import { useAuthStore } from '@/stores/AuthStore';
import AuthService from '@/services/AuthService';

const { isDark, toggleTheme } = useDarkMode()
const isMenuOpen = ref(false)
const showMega = ref(false)
const route = useRoute();
const recipeName = ref('');
const authStore = useAuthStore();

const openMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const toggleMegaMenu = () => {
  showMega.value = !showMega.value
}

const handleLogout= async ()=>{
  authStore.clearAuth();
  await AuthService.logout();
  router.push('/auth');
}

const goToSearchResults = () => {
  if (recipeName.value.trim()) {
    router.push({
      name: 'search-results',
      query: { q: recipeName.value }
    })
    isMenuOpen.value = false;
  }
}

const goToCategory = (slug) => {
  router.push({ path: '/recipes', query: { tags: slug } })
  isMenuOpen.value = false
}

const isHomePage = computed(() => route.name === 'home' || route.path === '/');

const megaMenu = [
  {
    title: 'Main-dish',
    icon: new URL('../assets/icons/food.svg', import.meta.url).href,
    slug: 'main-dish'
  },
  {
    title: 'Dietary',
    icon: new URL('../assets/icons/dietary.svg', import.meta.url).href,
    slug: 'dietary'
  },
  {
    title: 'Vegetarian',
    icon: new URL('../assets/icons/vegetables.svg', import.meta.url).href,
    slug: 'vegetarian'
  },
  {
    title: 'Vegan',
    icon: new URL('../assets/icons/vegan.svg', import.meta.url).href,
    slug: 'vegan'
  },
  {
    title: 'Desserts',
    icon: new URL('../assets/icons/dessert.svg', import.meta.url).href,
    slug: 'desserts'
  },
  {
    title: 'BreakFast',
    icon: new URL('../assets/icons/breakfast.svg', import.meta.url).href,
    slug: 'breakfast'
  },
  {
    title: 'Kid-friendly',
    icon: new URL('../assets/icons/kid.svg', import.meta.url).href,
    slug: 'kid-friendly'
  },
  {
    title: 'Side-dishes',
    icon: new URL('../assets/icons/cereals.svg', import.meta.url).href,
    slug: 'side-dishes'
  },
  {
    title: 'Appetizers',
    icon: new URL('../assets/icons/salad.svg', import.meta.url).href,
    slug: 'appetizers'
  }
]
</script>

<style scoped>
nav {
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}
</style>
