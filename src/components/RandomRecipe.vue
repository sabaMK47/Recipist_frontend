<template>
    <div class="flex flex-col gap-10 w-full justify-center mx-auto lg:flex-row !mb-10 items-center p-5 lg:p-10">
        <div class="instructions lg:w-[50%] w-full">
            <h1 class="text-font-title text-3xl pb-3">Recipe of the Day</h1>

            <h4 class="text-font-bold text-xl pb-3 text-main dark:text-main">
                {{ recipeDetails?.name }}
            </h4>
            <div class="ingredients">
                <h5 class=" text-font-medium pb-3 text-main dark:text-main">Ingredients</h5>
                <p class="text-font-light pb-3">{{recipeDetails?.ingredients.map(ing => ing.name).join(', ')}}</p>
            </div>
            <div class="space-y-4">
                <h2 class="text-font-medium pb-3 text-main dark:text-main">Preparation Steps</h2>
                <ol class="list-decimal text-font-light list-inside text-gray-700 dark:text-gray-200 pb-3">
                    <li v-for="(step, index) in recipeDetails?.steps" :key="index">
                        {{ step }}
                    </li>
                </ol>
            </div>

            <h5 class="text-font-medium pb-3 text-main dark:text-main">Time to make : {{ recipeDetails?.minutes }} min
            </h5>
        </div>
        <div class="pic">
            <img
                src="../assets/images/pasta.jpg"
                alt="Recipe Image"
                class="rounded-xl shadow-md w-full object-cover max-h-[300px] "
            />
        </div>
    </div>
</template>

<script setup>
import RecipeService from '@/services/RecipeService'
import { onMounted, ref } from 'vue'

const recipeDetails = ref(null)

const fetchRecipeDetails = async () => {
    try {
        recipeDetails.value = await RecipeService.getRandomRecipe()
    } catch (err) {
        console.error('Failed to fetch recipe:', err)
    }
}

onMounted(() => {
    fetchRecipeDetails()
})
</script>