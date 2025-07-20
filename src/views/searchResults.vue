<template>
  <div class="p-4 !my-10">
    <div v-if="loading">
      <Loading />
    </div>

    <div v-if="recipes?.length" class="flex items-center justify-center gap-10 flex-wrap">
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
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import RecipeService from '@/services/RecipeService';
import Loading from '@/components/Loading.vue';
import RecipeCard from '@/components/RecipeCard.vue';

const route = useRoute();

const recipes = ref([]);
const loading = ref(false);

const fetchRecipesByName = async () => {
  const q = route.query.q;
  if (!q) return;
  loading.value = true;
  try {
    const res = await RecipeService.searchByName(q);
    recipes.value = res;
  } catch (err) {
    console.error(err);
  } finally {
    loading.value = false;
  }
};

const fetchRecipesByIngredients = async () => {
  loading.value = true;
  try {
    const ingredientQuery = route.query.ingredients;
    const ingredients = typeof ingredientQuery === 'string'
      ? ingredientQuery.split(',')
      : Array.isArray(ingredientQuery)
        ? ingredientQuery.flatMap(str => str.split(','))
        : [];

    if (ingredients.length) {
      const res = await RecipeService.getRecipesByIngredients(ingredients);
      recipes.value = res;
    } else {
      recipes.value = [];
    }
  } catch (err) {
    console.error('Error fetching recipes by ingredients:', err);
  } finally {
    loading.value = false;
  }
};

watch(
  () => route.query,
  () => {
    const q = route.query.q;
    const ingredients = route.query.ingredients;

    if (q) {
      fetchRecipesByName();
    } else if (ingredients) {
      fetchRecipesByIngredients();
    } else {
      recipes.value = []; // no valid query
    }
  },
  { immediate: true }
);
</script>


<style scoped>
.category-title {
  margin-left: 5%;
}
</style>
