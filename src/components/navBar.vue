<template>
    <nav class="w-screen flex justify-between items-center gap-x-9 absolute top-0 left-0 p-5 text-lg">
      <!-- Left section -->
      <div class="flex gap-x-9 items-center">
        <h1 class="logo-font text-4xl main-color">Recipist</h1>
  
        <ul class="flex gap-8 text-font-medium">
          <li v-for="item in navItems" :key="item" class="relative flex flex-col items-center cursor-pointer">
            <span>{{ item }}</span>
            <Motion
              tag="span"
              class="h-[2px] bg-black w-full mt-1 origin-center"
              :initial="{ scaleX: 0 }"
              :whileHover="{ scaleX: 1 }"
              :transition="{ duration: 0.3, ease: 'ease-in-out' }"
            />
          </li>
        </ul>
      </div>
  
      <!-- Right section -->
      <div class="flex gap-x-6 items-center text-font-medium">
        <p class="cursor-pointer">sign in</p>
  
        <!-- Theme toggle -->
        <div
          class="dark-light-mode ml-2 cursor-pointer border-2 border-black rounded-full w-16 h-8 flex items-center justify-between px-2"
          @click="toggleTheme"
        >
          <!-- Moon on the left -->
          <img
            src="/src/assets/icons/moon.svg"
            alt="moon-icon"
            class="w-5 h-5 transition-opacity duration-300 "
            :class="isDark ? 'opacity-100' : 'opacity-0'"
          />
          <!-- Sun on the right -->
          <img
            src="/src/assets/icons/sun.svg"
            alt="sun-icon"
            class="w-5 h-5 transition-opacity duration-300"
            :class="!isDark ? 'opacity-100' : 'opacity-0'"
          />
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Motion } from '@motionone/vue'
  
  // State
  const isDark = ref(false)
  
  // Toggle dark mode
  function toggleTheme() {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark', isDark.value)
  }
  
  // Navigation items
  const navItems = ['menu', 'about us']
  </script>
  
  