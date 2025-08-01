<template>
  <div class="p-4 !my-10">
    <h1 class="text-2xl lg:p-10 px-3 pb-10 capitalize category-title">
      Recipes tagged with "{{ tag || 'All' }}"
    </h1>

    <div v-if="loading">
      <Loading />
    </div>

    <div v-if="recipes.length" class="flex items-center justify-center gap-10 flex-wrap">
      <div v-for="recipe in recipes" :key="recipe.id" class="mb-4">
        <RecipeCard
          :recipeTitle="recipe.name"
          :description="recipe.description"
          :minutes="recipe.minutes"
          :id="recipe.id"
        />
      </div>
      <Pagination :totalPages="totalPages" v-model="currentPage" />
    </div>

    <div v-else-if="!loading" class="text-center text-lg text-gray-500 mt-10">
      No recipes found.
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
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

async function fetchRecipes(tagName, page) {
  loading.value = true;
  try {
    const res = await RecipeService.getRecipesByTag(tagName, page);
    recipes.value = res.data;
    currentPage.value = res.current_page;
    totalPages.value = res.last_page;
  } catch (err) {
    console.error('Error fetching recipes:', err);
  } finally {
    loading.value = false;
  }
}

// Watch for query changes (tag or page)
watch(
  () => route.query,
  (query) => {
    tag.value = query.tags || null;
    const page = Number(query.page) || 1;
    currentPage.value = page;
    fetchRecipes(tag.value, page);
  },
  { immediate: true }
);

// Keep page state synced with URL
watch(currentPage, (newPage) => {
  router.replace({
    query: {
      ...route.query,
      page: newPage,
    },
  });
});
</script>

<style scoped>
.category-title {
  margin-left: 5%;
}
</style>
