<template>
  <section class="h-screen flex items-center justify-center transition-colors duration-300">
    <div
      class="w-full flex flex-col md:flex-row rounded-3xl shadow-xl overflow-hidden transition-all duration-700 h-full">

      <div class="hidden md:block md:w-[50%] h-[100vh] relative overflow-hidden ">
        <img src="../assets/images/green-crep.jpg" alt="breakfast">
      </div>

      <div class="md:w-[60%] w-full px-8 h-150 flex flex-col justify-center">
        <Motion :initial="{ scale: 0.8, opacity: 0 }" :animate="{ scale: 1, opacity: 1 }"
          :transition="{ duration: 0.8, ease: 'easeOut' }" key="form-motion">
          <h2 class="text-3xl text-font-bold text-main pb-6 text-center">
            {{ isLogin ? 'Sign in' : 'Register' }}
          </h2>

          <form  @submit.prevent="handleSubmit" class="flex flex-col justify-center items-center gap-2 text-font-light">
            <input v-if="!isLogin" type="text" placeholder="name" class="input-style lg:w-[500px] w-full"
              v-model="name" />
            <p v-if="!isLogin" class="text-font-light text-xs  text-red-700">{{ nameError }}</p>
            <input type="email" placeholder="email" class="input-style lg:w-[500px] w-full" v-model="email" />
            <p class="text-font-light text-xs  text-red-700">{{ emailError }}</p>
            <input type="password" placeholder="password" class="input-style lg:w-[500px] w-full" v-model="password" />
            <p class="text-font-light text-xs  text-red-700">{{ passwordError }}</p>
            <input v-if="!isLogin" type="password" placeholder="password confirmation"
              class="input-style lg:w-[500px] w-full" v-model="passwordConfirmation" />
            <p class="text-font-light text-xs  text-red-700">{{ passwordConfirmationError }}</p>

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
import AuthService from '@/services/AuthService'
import { useAuthStore } from '@/stores/AuthStore'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()
const isLogin = ref(true)
const name = ref("")
const email = ref("")
const password = ref("")
const passwordConfirmation = ref("")
const passwordConfirmationError = ref("")
const passwordError = ref("")
const nameError = ref("")
const emailError = ref("")

const toggleMode = () => {
  isLogin.value = !isLogin.value
}

const handleSubmit = async () => {
  if (!isLogin.value && password.value !== passwordConfirmation.value) {
    passwordConfirmationError.value = 'Passwords do not match!'
    return
  } else if (!password.value) {
    passwordError.value = 'please fill in the password fields.'
  } else if (!email.value) {
    emailError.value = 'please fill in the email field.'
  } else if (!name.value) {
    nameError.value = 'please fill in the name field.'
  }else {
    passwordError.value = ''
    nameError.value = ''
    emailError.value = ''
  }

  try {
    if (isLogin.value) {
      const res = await AuthService.login(email.value, password.value)
      authStore.setToken(res.token)
      authStore.setUser(res.user)
      console.log('Logged in:', res)
      router.push({name:'user-account'});
    } else {
      const res = await AuthService.register(
        name.value || email.value.split('@')[0],
        email.value,
        password.value,
        passwordConfirmation.value
      )
      authStore.setToken(res.token)
      authStore.setUser(res.user)
      console.log('Registered:', res)
      isLogin.value = true;
    }
  } catch (err) {
    console.error('Auth error:', err.response?.data || err)
  }
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
