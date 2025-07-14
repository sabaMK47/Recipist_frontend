<template>
  <nav
    class="w-screen flex justify-between items-center bg-white text-black dark:bg-dark dark:text-white gap-x-9 absolute top-0 left-0 p-5 text-lg ">
    <!-- Left section -->
    <div class="flex gap-x-9 items-center">
      <RouterLink to="/">
        <h1 class="logo-font text-4xl text-main">Recipist</h1>
      </RouterLink>

      <ul class="gap-8 text-font-medium hidden lg:flex">
        <!-- Home link -->
        <li>
          <RouterLink to="/" class="group relative flex-col items-center cursor-pointer hidden lg:flex">
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
                <img src="../assets/icons/bakery.svg" alt="Bakery" class="w-8 h-8">
                <h4 class="text-font-bold text-main" @click="$router.push('/category/bakery')">Bakery</h4>
              </div>
              <div class="flex items-center gap-2 menu-li ">
                <img src="../assets/icons/drink.svg" alt="Drinks" class="w-8 h-8">
                <h4 class="text-font-bold text-main" @click="$router.push('/category/drinks')">Drinks</h4>
              </div>
            <RouterLink to="/recipe-details" class="group relative flex-col items-center cursor-pointer hidden lg:flex">
              <div class="flex items-center gap-2 menu-li ">
                <img src="../assets/icons/non-veg.svg" alt="Non-Veg" class="w-8 h-8">
                <h4 class="text-font-bold text-main" @click="$router.push('/category/nonveg')">Non-Veg</h4>
              </div>
            </RouterLink>
              <div class="flex items-center gap-2 menu-li">
                <img src="../assets/icons/vegetables.svg" alt="Vegetables" class="w-8 h-8">
                <h4 class="text-font-bold text-main" @click="$router.push('/category/vegetables')">Vegetables</h4>
              </div>
              <div class="flex items-center gap-2 menu-li">
                <img src="../assets/icons/fastfood.svg" alt="Fast Food" class="w-8 h-8">
                <h4 class="text-font-bold text-main" @click="$router.push('/category/fastfood')">Fast Food</h4>
              </div>
              <div class="flex items-center gap-2 menu-li">
                <img src="../assets/icons/cereals.svg" alt="Cereals" class="w-8 h-8">
                <h4 class="text-font-bold text-main" @click="$router.push('/category/cereal')">Cereals</h4>
              </div>
              <div class="flex items-center gap-2 menu-li">
                <img src="../assets/icons/food.svg" alt="Meals" class="w-8 h-8">
                <h4 class="text-font-bold text-main" @click="$router.push('/category/meal')">Meals</h4>
              </div>
              <div class="flex items-center gap-2 menu-li">
                <img src="../assets/icons/dessert.svg" alt="Sides" class="w-8 h-8">
                <h4 class="text-font-bold text-main" @click="$router.push('/category/sides')">Sides</h4>
              </div>
              <div class="flex items-center gap-2 menu-li">
                <img src="../assets/icons/salad.svg" alt="Fusion" class="w-8 h-8">
                <h4 class="text-font-bold text-main" @click="$router.push('/category/fusion')">Fusion</h4>
              </div>
            </div>
          </div>
        </li>

        <!-- About us -->
        <li class="relative flex flex-col items-center cursor-pointer group">
          <span>About us</span>
          <span
            class="h-[2px] w-full mt-1 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-main"></span>
        </li>
      </ul>
    </div>

    <!-- Right section -->
    <div class="flex gap-x-6 items-center text-font-medium">
      <RouterLink to="/auth" class="group relative flex-col items-center cursor-pointer hidden lg:flex">
        <p class="cursor-pointer">Sign up / Login</p>
        <span
          class="h-[2px] w-full mt-1 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-main"></span>
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
        <div class="text-2xl text-font-bold !mb-5">Sign up / Login</div>
      </RouterLink>
    </div>
  </transition>
</template>

<script setup>
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useDarkMode } from '@/composables/useDarkMode'
import router from '@/router'

const { isDark, toggleTheme } = useDarkMode()
const isMenuOpen = ref(false)
const showMega = ref(false)

const openMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const toggleMegaMenu = () => {
  showMega.value = !showMega.value
}

const goToCategory = (slug) => {
  router.push(`/category/${slug}`)
  isMenuOpen.value = false // Close mobile menu after navigation
}

const megaMenu = [
  {
    title: 'Bakery',
    icon: new URL('../assets/icons/dessert.svg', import.meta.url).href,
    slug:'bakery'
  },
  {
    title: 'Drinks',
    icon: new URL('../assets/icons/drink.svg', import.meta.url).href,
    slug:'drinks'
  },
  {
    title: 'Non-Veg',
    icon: new URL('../assets/icons/food.svg', import.meta.url).href,
    slug:'nonveg'
  },
  {
    title: 'Vegetables',
    icon: new URL('../assets/icons/food.svg', import.meta.url).href,
    slug:'vegetables'
  },
  {
    title: 'Fast Food',
    icon: new URL('../assets/icons/food.svg', import.meta.url).href,
    slug:'fastfood'
  },
  {
    title: 'Cereals',
    icon: new URL('../assets/icons/food.svg', import.meta.url).href,
    slug:'cereal'
  },
  {
    title: 'Meals',
    icon: new URL('../assets/icons/food.svg', import.meta.url).href,
    slug:'meal'
  },
  {
    title: 'Sides',
    icon: new URL('../assets/icons/salad.svg', import.meta.url).href,
    slug:'sides'
  },
  {
    title: 'Fusion',
    icon: new URL('../assets/icons/salad.svg', import.meta.url).href,
    slug:'fusion'
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
