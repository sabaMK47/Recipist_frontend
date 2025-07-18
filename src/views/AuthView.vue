<template>
  <section class="h-screen flex items-center justify-center transition-colors duration-300">
    <div
      class="w-full flex flex-col md:flex-row rounded-3xl shadow-xl overflow-hidden transition-all duration-700 h-full">

      <div class="hidden md:block md:w-[40%] h-[100vh] relative overflow-hidden">
        <img src="../assets/images/green-crep.jpg" alt="breakfast">
      </div>

      <div class="md:w-[60%] w-full px-8 h-150 flex flex-col justify-center">
        <Motion :initial="{ scale: 0.8, opacity: 0 }" :animate="{ scale: 1, opacity: 1 }"
          :transition="{ duration: 0.8, ease: 'easeOut' }" key="form-motion">
          <h2 class="text-3xl text-font-bold text-main pb-6 text-center">
            {{ isLogin ? 'Sign in' : 'Register' }}
          </h2>

          <form class="flex flex-col justify-center items-center gap-4 text-font-light">
            <input type="email" placeholder="email" class="input-style lg:w-[500px] w-full" />
            <input type="password" placeholder="password" class="input-style lg:w-[500px] w-full" />

            <Motion :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5, delay: 0.2 }">
              <button
                class="bg-main text-white rounded-sm cursor-pointer py-2 mt-2 text-lg text-font-medium lg:w-[500px] w-[350px] hover:scale-95 transition"
                type="submit">
                {{ "Let's Go" }}
              </button>
            </Motion>
          </form>

          <p class="text-center pt-6 text-sm text-gray-500 dark:text-gray-400 text-font-light">
            {{ isLogin ? "Haven't register yet?" : 'Already have an account?' }}
            <span @click="toggleMode" class="text-main text-font-light cursor-pointer hover:underline">
              {{ isLogin ? 'sign up now' : 'sign in' }}
            </span>
          </p>
        </Motion>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref } from 'vue'
import { Motion } from '@oku-ui/motion'

const isLogin = ref(true)

const toggleMode = () => {
  isLogin.value = !isLogin.value
}
</script>

<style scoped>
.fade-border {
  mask-image: radial-gradient(circle,
      rgba(0, 0, 0, 1) 60%,
      rgba(0, 0, 0, 0) 100%);
  -webkit-mask-image: radial-gradient(circle,
      rgba(0, 0, 0, 1) 60%,
      rgba(0, 0, 0, 0) 100%);
}
</style>
