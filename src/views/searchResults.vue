<template>
  <div class="p-4 !mt-10">
    <div v-if="loading">
      <Loading />
    </div>

    <div v-if="recipes.length" class="flex items-center justify-center gap-10 flex-wrap">
      <div v-for="recipe in recipes" :key="recipe.id" class="mb-4">
        <RecipeCard :recipeTitle="recipe.name" :description="recipe.description" :minutes="recipe.minutes"
          :id="recipe.id" />
      </div>

    </div>

    <div v-else-if="!loading" class="text-center text-lg text-gray-500 mt-10">
      No recipes found.
    </div>

  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import RecipeService from '@/services/RecipeService';
import Loading from '@/components/Loading.vue';
import Pagination from '@/components/Pagination.vue';
import RecipeCard from '@/components/RecipeCard.vue';

const route = useRoute();
const router = useRouter();

const tag = ref(route.query.tags || null);
const recipes = ref([]);
const loading = ref(false);
const currentPage = ref(Number(route.query.page) || 1);
const totalPages = ref(null);
const recipeName = ref('');

async function fetchRecipes() {
  loading.value = true;
  try {
    const ingredientQuery = route.query.ingredients;
    if (ingredientQuery && ingredientQuery.length) {
      const ingredients = typeof ingredientQuery === 'string'
        ? ingredientQuery.split(',')
        : Array.isArray(ingredientQuery)
          ? ingredientQuery.flatMap(str => str.split(','))
          : [];
      const res = await RecipeService.getRecipesByIngredients(ingredients);
      recipes.value = res;
      console.log(recipes.value);

    } else if (recipeName.value) {
      const res = await RecipeService.getSearchResults(recipeName.value);
      recipes.value = res;
    }
  } catch (err) {
    console.error('Error fetching recipes:', err);
  } finally {
    loading.value = false;
  }
}


watch(
  () => route.query,
  () => {
    fetchRecipes();
  },
  { immediate: true }
);

</script>

<style scoped>
.category-title {
  margin-left: 5%;
}
</style>
