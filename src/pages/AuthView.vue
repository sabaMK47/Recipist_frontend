<template>
  <section class="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-900 transition-colors duration-300">
    <div class="bg-gray-100 dark:bg-zinc-800 rounded-3xl shadow-xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row transition-all duration-700">
      
      <!-- Left panel (form content) -->
      <div class="md:w-1/2 w-full px-8 py-12 flex flex-col justify-center">
         <Motion
          :initial="{ scale: 0.8, opacity: 0 }"
          :animate="{ scale: 1, opacity: 1 }"
          :transition="{ duration: 0.8, ease: 'easeOut' }"
          key="form-motion"
        >
          <h2 class="text-3xl text-font-bold text-main pb-6 text-center">
            {{ isLogin ? 'ورود' : 'ثبت‌نام' }}
          </h2>

          <form class="flex flex-col gap-4 text-font-light">
            <input
              type="email"
              placeholder="ایمیل"
              class="input-style"
            />
            <input
              type="password"
              placeholder="رمز عبور"
              class="input-style"
            />
            <Motion
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5, delay: 0.2 }"
            >
              <button
                class="bg-main text-white rounded-2xl py-2 mt-2 text-lg text-font-medium w-full hover:scale-95 transition"
                type="submit"
              >
                {{ 'برو بریم' }}
              </button>
            </Motion>
          </form>

          <p class="text-center pt-6 text-sm text-gray-500 dark:text-gray-400 text-font-light">
            {{ isLogin ? 'حساب کاربری نداری؟' : 'قبلاً ثبت‌نام کردی؟' }}
            <span
              @click="toggleMode"
              class="text-main text-font-light cursor-pointer hover:underline"
            >
              {{ isLogin ? 'ثبت‌نام' : 'ورود' }}
            </span>
          </p>
        </Motion>
      </div>

      <!-- Right panel (illustration / animation) -->
      <div class="md:w-1/2 w-full hidden md:flex items-center justify-center bg-main text-white transition-all duration-700">
        <Motion
          :initial="{ scale: 0.8, opacity: 0 }"
          :animate="{ scale: 1, opacity: 1 }"
          :transition="{ duration: 0.8, ease: 'easeOut' }"
          key="auth-graphic"
        >
          <div class="text-center h-[250px] text-font-medium px-6 flex flex-1 flex-col justify-between items-center">
            <h2>خوش اومدی :)</h2>
            <p class="mt-2">با ثبت‌نام در Recipist می تونی رسپی های مورد علاقه تو ذخیره کنی تا بعدا دسترسی راحت تری به اون داشته باشی</p>
            <img src="../assets/icons/smile-heart.svg" alt="smile-heart-icon" class="w-20 h-20">
          </div>
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
