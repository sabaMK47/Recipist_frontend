<template>
  <div class="flex flex-col lg:flex-row gap-8 justify-between !mt-30 lg:!mx-10 mx-auto p-6">
    <div class="lg:w-[70%] w-full space-y-6">
      <h1 class="text-3xl text-font-title text-main dark:text-main">
        {{ recipeDetails?.name }}
      </h1>
      <div class="!my-5">
        <p class="text-font-medium">{{ recipeDetails?.description }}</p>
      </div>
      <div class="space-y-4">
        <h2 class="text-xl text-font-bold py-5 text-main dark:text-main">Preparation Steps</h2>

        <ol v-if="recipeDetails?.steps && recipeDetails?.steps?.length"
          class="list-decimal pb-10 text-font-medium list-inside space-y-2 text-gray-700 dark:text-gray-200">
          <li v-for="(step, index) in recipeDetails.steps" :key="index">
            {{ step }}
          </li>
        </ol>

        <p v-else class="text-gray-600 dark:text-gray-300 text-font-medium !mb-10">No preparation steps available.</p>
      </div>


      <img src="../assets/images/pasta.jpg" alt="Recipe Image"
        class="rounded-xl shadow-md w-full object-cover max-h-[500px]" />
    </div>

    <div
      class="lg:w-[30%] w-full h-auto bg-main/10 dark:bg-lessdark rounded-xl shadow-lg p-6 pb-10 space-y-4 flex flex-col justify-start gap-5">
      <div class="ingredients">
        <h2 class="text-xl text-font-bold pb-3 text-main dark:text-main">Ingredients</h2>
        <ul class="list-disc list-inside text-font-medium text-gray-800 dark:text-gray-100 space-y-1">
          <li v-for="(ingredient, index) in recipeDetails?.ingredients" :key="index">
            {{ ingredient.name }}
          </li>
        </ul>
      </div>
      <h2 class="text-font-bold">Time to make : {{ recipeDetails?.minutes }} min</h2>
      <div class="nutritions" v-if="recipeDetails?.nutrition">
        <h2 class="text-font-bold">nutritions:</h2>
        <h2 class="text-font-medium">calories: {{ recipeDetails?.nutrition[0] }}</h2>
        <h2 class="text-font-medium">total fat: {{ recipeDetails?.nutrition[1] }}</h2>
        <h2 class="text-font-medium">sugar: {{ recipeDetails?.nutrition[2] }}</h2>
        <h2 class="text-font-medium">sodium: {{ recipeDetails?.nutrition[3] }}</h2>
        <h2 class="text-font-medium">protein: {{ recipeDetails?.nutrition[4] }}</h2>
        <h2 class="text-font-medium">saturated fat: {{ recipeDetails?.nutrition[5] }}</h2>
        <h2 class="text-font-medium">carbohydrates: {{ recipeDetails?.nutrition[6] }}</h2>
      </div>
    </div>
  </div>
  <div v-if="loading">
    <Loading />
  </div>

</template>

<script setup>
import RecipeService from '@/services/RecipeService'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import Loading from '@/components/Loading.vue'

const recipeDetails = ref(null)
const route = useRoute()
const id = route.params.id;
const loading = ref(false);

const fetchRecipeDetails = async (id) => {
  Loading.value = true;
  try {
    const response = await RecipeService.getRecipeDetails(id)
    recipeDetails.value = response;
    console.log('Fetched recipe:', response)
  } catch (err) {
    console.error('Failed to fetch recipe:', err)
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchRecipeDetails(id)
})
</script>
