<template>
  <HeroSection @scroll-to-ingredients="scrollToIngredients"/>

  <div class="search-section flex flex-col items-center justify-center text-center gap-4 bg-light dark:bg-lessdark" ref="ingredientSearchSection">
    <h2 class="text-l md:text-xl text-font-bold text-black dark:text-white p-5 rounded-4xl ">
      Let’s see what you have in your kitchen :)
    </h2>

    <!-- Input + Add Button -->
    <div class="relative w-[90%] max-w-xl">
      <input
        v-model="newIngredient"
        type="text"
        placeholder="e.g eggs ..."
        class="w-full h-12 rounded-full px-5 pr-24 !rounded-4xl input-style"
        @keyup.enter="addIngredient"
      />
      <button
        @click="addIngredient"
        class="absolute right-1 cursor-pointer top-1 bottom-1 my-auto h-10 px-4 rounded-full bg-[#717D11] text-white font-semibold"
      >
        Add
      </button>
    </div>

    <!-- Tags -->
    <div class="flex flex-wrap gap-3 justify-center mt-2 w-[90%] max-w-xl">
      <div
        v-for="(item, index) in ingredients"
        :key="index"
        class="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow text-sm text-black"
      >
        {{ item }}
        <button @click="removeIngredient(index)" class="text-lg cursor-pointer font-bold text-gray-600 hover:text-red-500">×</button>
      </div>
    </div>
    <button class="p-3 bg-main rounded-4xl text-white w-[90%] max-w-xl cursor-pointer" @click="searchByIngredients">Let's go</button>
  </div>

  <RandomRecipe></RandomRecipe> 
</template>

<script setup>
import { ref} from 'vue'
import HeroSection from '@/components/HeroSection.vue'
import RandomRecipe from '@/components/RandomRecipe.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const newIngredient = ref('')
const ingredients = ref([])
const ingredientSearchSection = ref(null);

function scrollToIngredients() {
  ingredientSearchSection.value?.scrollIntoView({ behavior: 'smooth' });
}

function addIngredient() {
  const value = newIngredient.value.trim()
  if (value && !ingredients.value.includes(value)) {
    ingredients.value.push(value)
    newIngredient.value = ''
  }
}

function removeIngredient(index) {
  ingredients.value.splice(index, 1)
}

function searchByIngredients() {
  if (ingredients.value.length) {
    router.push({ 
      name: 'search-results', 
      query: { ingredients: ingredients.value } 
    });
  }
}
</script>

<style scoped>
.search-section {
  width: 100%;
  height: fit-content;
  padding: 40px 20px;
  background-size: cover;
  background-position: center;
}

.input-style {
  background-color: white;
  color: black;
  border: none;
  outline: none;
}
</style>
