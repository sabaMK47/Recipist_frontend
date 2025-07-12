<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold capitalize mb-4">Recipes in "{{ category }}"</h1>

    <div v-if="loading">
      <Loading />
    </div>

    <div v-if="recipes.length">
      <div v-for="recipe in recipes" :key="recipe.id" class="mb-4">
        <h2 class="text-lg font-semibold">{{ recipe.title }}</h2>
        <p class="text-sm">{{ recipe.genre }}</p>
      </div>
      <Pagination :totalPages="totalPages" v-model="currentPage" />
    </div>
  </div>
</template>

<script setup>
import { watch, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import RecipeService from '@/services/RecipeService';
import Loading from '@/components/Loading.vue';
import Pagination from '@/components/Pagination.vue';

const route = useRoute();
const router = useRouter();

const category = ref(route.params.category);
const recipes = ref([]);
const loading = ref(false);
const currentPage = ref(Number(route.query.page) || 1);
const totalPages = ref(null);

async function fetchRecipes(cat, page) {
  loading.value = true;
  recipes.value = [];
  try {
    // Adjust this API call to pass page param if supported
    const res = await RecipeService.getRecipesByGenre(cat, page);
    recipes.value = res.data;
    currentPage.value = res.current_page;
    totalPages.value = res.last_page;
  } catch (err) {
    console.error(err);
  } finally {
    loading.value = false;
  }
}

// On category change, reset page and fetch
watch(
  () => route.params.category,
  (newCategory) => {
    category.value = newCategory;
    currentPage.value = 1;
    updateUrlPage(1);
    fetchRecipes(newCategory, 1);
  },
  { immediate: true }
);

// On page change, update URL and fetch new page data
watch(currentPage, (newPage) => {
  if (newPage < 1 || (totalPages.value && newPage > totalPages.value)) return;
  updateUrlPage(newPage);
  fetchRecipes(category.value, newPage);
});

// Watch the route query page param and sync if user navigates browser buttons or manual URL changes
watch(
  () => route.query.page,
  (page) => {
    const pageNumber = Number(page) || null;
    if (pageNumber !== currentPage.value) {
      currentPage.value = pageNumber;
    }
  }
);

function updateUrlPage(page) {
  router.replace({
    query: {
      ...route.query,
      page,
    },
  });
}
</script>
