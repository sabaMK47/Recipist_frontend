<template>
  <nav class="w-screen flex justify-between items-center bg-white text-black dark:bg-dark dark:text-white gap-x-9 absolute top-0 left-0 p-5 text-lg">
    <!-- Left section -->
    <div class="flex gap-x-9 items-center">
      <h1 class="logo-font text-4xl main-color">Recipist</h1>

      <ul class="flex gap-8 text-font-medium">
        <li
          v-for="item in navItems"
          :key="item"
          class="relative flex flex-col items-center cursor-pointer group"
        >
          <span>{{ item }}</span>
          <span
            class="h-[2px] w-full mt-1 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-main"
          />
        </li>
      </ul>
    </div>

    <!-- Right section -->
    <div class="flex gap-x-6 items-center text-font-medium">
      <div class="group relative flex flex-col items-center cursor-pointer">
        <p class="cursor-pointer">ثبت نام / ورود </p>
        <span
            class="h-[2px] w-full mt-1 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-main"
          />
      </div>

      <!-- Theme toggle -->
      <div
        class="dark-light-mode ml-2 cursor-pointer bg-light rounded-full w-16 h-8 flex items-center px-1"
        @click="toggleTheme"
      >
        <!-- Moon icon -->
        <img
          src="/src/assets/icons/moon.svg"
          alt="moon-icon"
          class="w-7 h-7 transition-opacity duration-300 bg-main rounded-full p-1"
          :class="isDark ? 'opacity-100' : 'opacity-0'"
        />
        <!-- Sun icon -->
        <img
          src="/src/assets/icons/sun.svg"
          alt="sun-icon"
          class="w-7 h-7 transition-opacity duration-300 bg-main rounded-full p-1"
          :class="!isDark ? 'opacity-100' : 'opacity-0'"
        />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark, toggleTheme } = useDarkMode()

const navItems = ['منو', 'درباره ما']
</script>

<style scoped>
  nav{
    transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out;
  }
</style>
