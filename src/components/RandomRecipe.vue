<template>
    <div class="flex flex-col gap-10 w-full justify-center mx-auto lg:flex-row !my-10 items-center p-5 lg:p-10">
        <div class="instructions lg:w-[50%] w-full">
            <h1 class="text-font-title text-3xl pb-20">Recipe of the Day</h1>

            <h4 class="text-font-bold text-xl pb-3 text-main dark:text-main">
                {{ recipeDetails?.name }}
            </h4>
            <div class="ingredients">
                <h5 class=" text-font-medium pb-3 text-main dark:text-main">Ingredients</h5>
                <p class="text-font-light pb-3">{{recipeDetails?.ingredients.map(ing => ing.name).join(', ')}}</p>
            </div>
            <div class="space-y-4">
                <h2 class="text-xl text-font-bold py-5 text-main dark:text-main">Preparation Steps</h2>

                <ol v-if="recipeDetails?.steps && recipeDetails?.steps?.length"
                    class="list-decimal pb-10 text-font-medium list-inside space-y-2 text-gray-700 dark:text-gray-200">
                    <li v-for="(step, index) in recipeDetails.steps" :key="index">
                        {{ step }}
                    </li>
                </ol>

                <p v-else class="text-gray-600 dark:text-gray-300 text-font-light !mb-10">No preparation steps
                    available.</p>
            </div>

            <h5 class="text-font-medium pb-3 text-main dark:text-main">Time to make : {{ recipeDetails?.minutes }} min
            </h5>
        </div>
        <div class="pic">
            <img :src="imageUrl" alt="Recipe Image" class="rounded-xl shadow-md w-full object-cover max-h-[300px] " />
            <div v-if="authorName && authorLink" class="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Photo by
                <a :href="authorLink" target="_blank" class="underline">{{ authorName }}</a>
                on
                <a href="https://unsplash.com" target="_blank" class="underline">Unsplash</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import RecipeService from '@/services/RecipeService'
import { onMounted, ref , computed } from 'vue'
import { useRecipeStore } from '@/stores/UseRecipeStore';

const recipeDetails = ref(null);
const recipeStore = useRecipeStore();
const imageUrl = computed(() => recipeStore.currentRecipeImage);
const authorName = computed(() => recipeStore.currentRecipeAuthorName);
const authorLink = computed(() => recipeStore.currentRecipeAuthorLink);


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