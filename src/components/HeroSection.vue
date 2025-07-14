<template>
  <section class="w-full max-w-screen h-auto py-30 lg:py-15 px-8">
    <div class="flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-0">

      <!-- Text Section -->
      <Motion :initial="{ opacity: 0, y: -50 }" :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, delay: 0 }" class="flex flex-col gap-5 w-full lg:w-1/2 h-full">
        <h1 class="text-black dark:text-white text-font-title text-4xl lg:text-6xl leading-normal">
          <div
            class="text-black dark:text-white text-font-title text-4xl lg:text-5xl leading-normal min-h-[4.5rem] lg:min-h-[7.5rem]"
            style="white-space: pre-line">
            {{ typedText }}
          </div>

        </h1>

        <Motion :initial="{ opacity: 0, y: -50 }" :animate="typingDone ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }"
          :transition="{ duration: 1.2, ease: 'easeOut' }" v-if="true">
          <p class="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 text-font-medium px-2">
            With just a few clicks, get your perfect recipe <br> all you need to do is say what you have!
          </p>

          <Motion :initial="{ opacity: 0, y: -50 }"
            :animate="typingDone ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }"
            :transition="{ duration: 1.2, ease: 'easeOut' }" v-if="true">
            <button
              class="bg-main text-white rounded-2xl pb-4 pt-2 px-10 !mt-6 text-2xl text-font-bold w-fit cursor-pointer hover:scale-90 transition">
              Let's Start
            </button>
          </Motion>
        </Motion>


      </Motion>


      <!-- Animated Image Section -->
      <div class="relative w-full h-[400px] lg:h-[500px] lg:w-1/3">
        <div v-for="(item, index) in ingredients" :key="index" class="absolute"
          :style="{ top: item.top, left: item.left }">
          <Motion :initial="{ y: -20 }" :animate="{ y: [0, -10, 0] }"
            :transition="{ duration: item.duration, delay: item.delay, repeat: Infinity, repeatType: 'reverse' }"
            :whileHover="{ scale: 1.1 }">
            <img :src="item.src" :alt="item.alt"
              class="rounded-2xl w-16 h-16 lg:w-24 lg:h-24 object-cover transition-all" />
          </Motion>
        </div>
      </div>




    </div>
  </section>
</template>

<script setup>
import RecipeService from '@/services/RecipeService';
import { Motion } from '@oku-ui/motion'
import { delay } from 'motion';
import { ref, onMounted } from 'vue'

const fullText = 'No clue what to make? \n Let your fridge deside !'
const typedText = ref('')
const typingDone = ref(false);
let allRecipes = ref(null);

onMounted(() => {
  let i = 0
  const typing = setInterval(() => {
    typedText.value += fullText[i]
    i++
    if (i === fullText.length) {
      clearInterval(typing)
      typingDone.value = true
    }
  }, 100)
})

const ingredients = [
  {
    src: new URL('@/assets/images/noto_egg.svg', import.meta.url).href,
    alt: 'egg',
    delay: 0.2,
    top: '10%',
    left: '5%',
    duration: 2,
  },
  {
    src: new URL('@/assets/images/noto_broccoli.svg', import.meta.url).href,
    alt: 'broccoli',
    delay: 0,
    top: '20%',
    left: '75%',
    duration: 3,
  },
  {
    src: new URL('@/assets/images/noto_tomato.svg', import.meta.url).href,
    alt: 'tomato',
    delay: 0.4,
    top: '30%',
    left: '40%',
    duration: 4,
  },
  {
    src: new URL('@/assets/images/noto_potato.svg', import.meta.url).href,
    alt: 'potato',
    delay: 0.6,
    top: '50%',
    left: '60%',
    duration: 3,
  },
  {
    src: new URL('@/assets/images/noto_eggplant.svg', import.meta.url).href,
    alt: 'eggplant',
    delay: 0.8,
    top: '60%',
    left: '10%',
    duration: 4,
  }
]


</script>