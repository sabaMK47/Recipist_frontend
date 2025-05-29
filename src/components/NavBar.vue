<template>
  <nav
    class="w-screen flex justify-between items-center bg-white text-black dark:bg-dark dark:text-white gap-x-9 absolute top-0 left-0 p-5 text-lg">
    <!-- Left section -->
    <div class="flex gap-x-9 items-center">
      <h1 class="logo-font text-4xl text-main">Recipist</h1>

      <ul class="gap-8 text-font-medium hidden lg:flex">
        <li class="relative flex flex-col items-center cursor-pointer group">
          <span>دسته بندی رسپی ها</span>
          <span
            class="h-[2px] w-full mt-1 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-main"></span>
          <!-- Mega Menu Container -->
          <div
            class="absolute top-full right-0 lg:w-[900px] bg-light dark:bg-darkgreen shadow-lg p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 rounded-tl-2xl rounded-br-2xl rounded-bl-2xl">
            <div class="grid grid-cols-4 gap-4 text-right">
              <div>
                <div class="flex justify-start gap-2 items-center !mb-5">
                  <img src="../assets/icons/salad.svg" alt="pre-course" class="w-6 h-6">
                  <h4 class="font-bold text-main">پیش غذا</h4>
                </div>
                <ul class="space-y-1">
                  <li class="mega-menu-li"><a href="#">سالاد</a></li>
                  <li class="mega-menu-li"><a href="#">سوپ و آش</a></li>
                  <li class="mega-menu-li"><a href="#">نان و دیپ</a></li>
                  <li class="mega-menu-li"><a href="#">کوکو و کتلت</a></li>
                  <li class="mega-menu-li"><a href="#">فینگرفود</a></li>
                </ul>
              </div>
              <div>
                <div class="flex justify-start gap-2 items-center !mb-5">
                  <img src="../assets/icons/food.svg" alt="pre-course" class="w-6 h-6">
                  <h4 class="font-bold mb-2 text-main">غذای اصلی</h4>
                </div>
                <ul class="space-y-1">
                  <li class="mega-menu-li"><a href="#">غذای ایرانی</a></li>
                  <li class="mega-menu-li"><a href="#">غذای بین المللی</a></li>
                  <li class="mega-menu-li"><a href="#">غذای رژیمی</a></li>
                  <li class="mega-menu-li"><a href="#">غذای سریع</a></li>
                  <li class="mega-menu-li"><a href="#">فست فود</a></li>
                  <li class="mega-menu-li"><a href="#">وگان</a></li>
                  <li class="mega-menu-li"><a href="#">گیاه خواری</a></li>
                </ul>
              </div>
              <div>
                <div class="flex justify-start gap-2 items-center !mb-5">
                  <img src="../assets/icons/dessert.svg" alt="pre-course" class="w-6 h-6">
                  <h4 class="font-bold mb-2 text-main">دسر</h4>
                </div>
                <ul class="space-y-1">
                  <li class="mega-menu-li"><a href="#">کوکی و بیسکوییت</a></li>
                  <li class="mega-menu-li"><a href="#">کیک و شیرینی</a></li>
                  <li class="mega-menu-li"><a href="#">بستنی</a></li>
                  <li class="mega-menu-li"><a href="#">ژله و پودینگ</a></li>
                  <li class="mega-menu-li"><a href="#">دسرهای لیوانی</a></li>
                  <li class="mega-menu-li"><a href="#">دسرهای رژیمی و بدون شکر</a></li>
                </ul>
              </div>
              <div>
                <div class="flex justify-start gap-2 items-center !mb-5">
                  <img src="../assets/icons/drink.svg" alt="pre-course" class="w-6 h-6">
                  <h4 class="font-bold mb-2 text-main">نوشیدنی</h4>
                </div>
                <ul class="space-y-1">
                  <li class="mega-menu-li"><a href="#">گرم</a></li>
                  <li class="mega-menu-li"><a href="#">سرد</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li class="relative flex flex-col items-center cursor-pointer group">
          <span>درباره ما</span>
          <span
            class="h-[2px] w-full mt-1 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-main"></span>
        </li>
      </ul>
    </div>

    <!-- Right section -->
    <div class="flex gap-x-6 items-center text-font-medium">
      <div class="group relative flex-col items-center cursor-pointer hidden lg:flex">
        <p class="cursor-pointer">ثبت نام / ورود </p>
        <span
          class="h-[2px] w-full mt-1 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-main"></span>
      </div>

      <!-- Theme toggle -->
      <div class="dark-light-mode ml-2 cursor-pointer bg-light rounded-full w-16 h-8 flex items-center px-1"
        @click="toggleTheme">
        <!-- Moon icon -->
        <img src="/src/assets/icons/moon.svg" alt="moon-icon"
          class="w-7 h-7 transition-opacity duration-300 bg-main rounded-full p-1"
          :class="isDark ? 'opacity-100' : 'opacity-0'" />
        <!-- Sun icon -->
        <img src="/src/assets/icons/sun.svg" alt="sun-icon"
          class="w-7 h-7 transition-opacity duration-300 bg-main rounded-full p-1"
          :class="!isDark ? 'opacity-100' : 'opacity-0'" />
      </div>

      <!-- menu icon for mobile view -->
      <div class="m-2 lg:hidden" @click="openMenu">
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-9 h-9 text-black dark:text-white"
        >
          <path
            d="M7.66667 34.5C7.12362 34.5 6.66873 34.316 6.30201 33.948C5.93528 33.58 5.75128 33.1251 5.75001 32.5833C5.74873 32.0416 5.93273 31.5867 6.30201 31.2187C6.67128 30.8507 7.12617 30.6667 7.66667 30.6667H38.3333C38.8764 30.6667 39.3319 30.8507 39.6999 31.2187C40.0679 31.5867 40.2513 32.0416 40.25 32.5833C40.2487 33.1251 40.0647 33.5806 39.698 33.9499C39.3313 34.3192 38.8764 34.5026 38.3333 34.5H7.66667ZM7.66667 24.9167C7.12362 24.9167 6.66873 24.7327 6.30201 24.3647C5.93528 23.9967 5.75128 23.5418 5.75001 23C5.74873 22.4582 5.93273 22.0033 6.30201 21.6353C6.67128 21.2673 7.12617 21.0833 7.66667 21.0833H38.3333C38.8764 21.0833 39.3319 21.2673 39.6999 21.6353C40.0679 22.0033 40.2513 22.4582 40.25 23C40.2487 23.5418 40.0647 23.9973 39.698 24.3666C39.3313 24.7359 38.8764 24.9192 38.3333 24.9167H7.66667ZM7.66667 15.3333C7.12362 15.3333 6.66873 15.1493 6.30201 14.7813C5.93528 14.4133 5.75128 13.9584 5.75001 13.4167C5.74873 12.8749 5.93273 12.42 6.30201 12.052C6.67128 11.684 7.12617 11.5 7.66667 11.5H38.3333C38.8764 11.5 39.3319 11.684 39.6999 12.052C40.0679 12.42 40.2513 12.8749 40.25 13.4167C40.2487 13.9584 40.0647 14.414 39.698 14.7832C39.3313 15.1525 38.8764 15.3359 38.3333 15.3333H7.66667Z"
            fill="currentColor" />
        </svg>
      </div>

    </div>
  </nav>

  <!------------------------------------------------- Mobile Menu ------------------------------------------------------>

<transition name="fade">
  <div
    v-if="isMenuOpen"
    class="fixed inset-0 z-40 bg-white dark:bg-dark text-black dark:text-white p-6 flex flex-col gap-6 lg:hidden overflow-y-auto"
  >
    <div class="flex justify-between items-center mb-4">
      <h1 class="logo-font text-4xl text-main">Recipist</h1>
      <button @click="openMenu" aria-label="بستن منو" class="text-2xl">
        ✕
      </button>
    </div>

    <div class="!my-5">
      <div @click="toggleMegaMenu" class="flex justify-between items-center cursor-pointer group">
        <span class="text-lg font-medium">دسته بندی رسپی ها</span>
        <svg class="w-8 h-8 transition-transform duration-300" :class="{ 'rotate-180': showMega }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
      <transition name="slide">
        <div v-if="showMega" class="!mt-5 space-y-6 text-right">
          <div v-for="section in megaMenu" :key="section.title" class="!mb-3">
            <h4 class="font-bold text-xl text-main mb-2 flex items-center gap-2 !mb-5">
              <img :src="section.icon" alt="icon" class="w-5 h-5" />
              {{ section.title }}
            </h4>
            <ul class="space-y-1 text-sm">
              <li v-for="item in section.items" :key="item" class="mega-menu-li">
                <a href="#" class="hover:text-main transition">{{ item }}</a>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>

    <div class="text-lg font-medium !mb-5">
      <a href="#" class="block hover:text-main transition">درباره ما</a>
    </div>
    <div class="text-lg font-medium">
      <a href="#" class="block hover:text-main transition">ثبت نام / ورود</a>
    </div>
  </div>
</transition>

</template>

<script setup>
import { useDarkMode } from '@/composables/useDarkMode'
import { ref } from 'vue'

const { isDark, toggleTheme } = useDarkMode()
const isMenuOpen = ref(false)

const openMenu = () =>{
  isMenuOpen.value = !isMenuOpen.value
}

const showMega = ref(false)

const toggleMegaMenu = () => {
  showMega.value = !showMega.value
}

const megaMenu = [
  {
    title: 'پیش غذا',
    icon: new URL('../assets/icons/salad.svg', import.meta.url).href,
    items: ['سالاد', 'سوپ و آش', 'نان و دیپ', 'کوکو و کتلت', 'فینگرفود']
  },
  {
    title: 'غذای اصلی',
    icon: new URL('../assets/icons/food.svg', import.meta.url).href,
    items: ['غذای ایرانی', 'غذای بین المللی', 'غذای رژیمی', 'غذای سریع', 'فست فود', 'وگان', 'گیاه خواری']
  },
  {
    title: 'دسر',
    icon: new URL('../assets/icons/dessert.svg', import.meta.url).href,
    items: ['کوکی و بیسکوییت', 'کیک و شیرینی', 'بستنی', 'ژله و پودینگ', 'دسرهای لیوانی', 'دسرهای رژیمی و بدون شکر']
  },
  {
    title: 'نوشیدنی',
    icon: new URL('../assets/icons/drink.svg', import.meta.url).href,
    items: ['گرم', 'سرد']
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
