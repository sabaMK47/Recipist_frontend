<template>
    <div class="container mx-auto p-4 flex flex-col items-center">
        <!-- Loading State -->
        <div v-if="loading">
            <Loading />
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center text-red-500 dark:text-red-400 mt-5 p-4 rounded-lg bg-red-100 dark:bg-red-800 shadow-md">
            <p>Error loading favorites: {{ error.message || 'An unknown error occurred.' }}</p>
            <p class="text-sm mt-2">Please try again later.</p>
        </div>

        <!-- No Favorites State -->
        <div v-else-if="favoriteRecipes.length === 0" class="text-center text-gray-500 dark:text-gray-400 mt-5 p-4 rounded-lg bg-white dark:bg-lessdark shadow-md">
            <p>You don't have any favorite recipes yet. Go find some delicious ones!</p>
            <button @click="router.push('/recipes')"
                    class="mt-4 bg-main hover:bg-main-dark text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                Browse Recipes
            </button>
        </div>

        <!-- Display Favorite Recipes -->
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5 w-full max-w-6xl">
            <!-- Assuming RecipeCard is imported and can display individual recipe objects -->
            <RecipeCard
                v-for="recipe in favoriteRecipes"
                :key="recipe.id"
                :id="recipe.id"
                :recipeTitle="recipe.title"
                :description="recipe.description"
                :minutes="recipe.cooking_time_minutes"
                :imageUrl="recipe.image_url"
                :photoAuthorName="recipe.image_author_name"
                :photoAuthorLink="recipe.image_author_link"
            />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/AuthStore';
import RecipeService from '@/services/RecipeService';
import { useRouter } from 'vue-router'; 
import { useToast } from 'vue-toastification'; 
import Loading from '@/components/Loading.vue';
import RecipeCard from '@/components/RecipeCard.vue';


const authStore = useAuthStore();
const router = useRouter();
const toast = useToast();

const favoriteRecipes = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchUserFavorites = async () => {
    loading.value = true;
    error.value = null;

    // Ensure user is authenticated before attempting to fetch favorites
    if (!authStore.token) {
        toast.warning("You must be logged in to view your favorite recipes.");
        router.push('/auth'); // Redirect to login page
        loading.value = false;
        return;
    }

    try {
        // Call the corrected getFavoriteRecipes method (no arguments needed)
        const responseData = await RecipeService.getFavoriteRecipes();

        // Assuming your backend response for getFavorites is { data: [...] }
        favoriteRecipes.value = responseData.data;

        // Display a toast message if the backend explicitly sends one for empty favorites
        if (favoriteRecipes.value.length === 0 && responseData.message) {
            toast.info(responseData.message);
        }

    } catch (err) {
        console.error("Error fetching favorite recipes:", err);
        error.value = err;

        // Handle unauthorized (401) specifically: clear token and redirect
        if (err.response?.status === 401) {
            toast.error("Your session has expired. Please log in again.");
            authStore.clearAuth();
            router.push('/auth');
        } else {
            // Generic error message for other types of errors
            toast.error("Failed to load your favorite recipes.");
        }
    } finally {
        loading.value = false; // Always set loading to false when done
    }
};

// Fetch favorite recipes when the component is mounted to the DOM
onMounted(() => {
    fetchUserFavorites();
});
</script>