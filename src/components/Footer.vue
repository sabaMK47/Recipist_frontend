<template>
    <footer class="bg-light dark:bg-darkgreen text-neutral-700 dark:text-neutral-300 px-6 py-10 w-screen">
        <div class="mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
            <!-- Brand / About -->
            <div>
                <h2 class="text-xl logo-font text-main">Recipist</h2>
                <p class="pt-2 text-sm text-font-light">
                    A world of delicious recipes, just for you! With Recipist, you’ll never have to ask “What should I cook tonight?” again!
                </p>
            </div>

            <!-- Links -->
            <div>
                <h3 class="font-semibold mb-2 text-font-medium text-main">Links</h3>
                <ul class="space-y-1 text-sm text-font-light">
                    <li class="menu-li"><a href="/about">About Us</a></li>
                    <li class="menu-li"><a href="/">Search by Ingredients</a></li>
                    <li class="menu-li"><a href="/auth">Sign Up / Log In</a></li>
                </ul>
            </div>

            <!-- Categories -->
            <div>
                <h3 class="font-semibold mb-2 text-font-medium text-main">Recipe Categories</h3>
                <ul class="space-y-1 text-sm text-font-light">
                    <li class="menu-li" @click="goToLink('appetizers')">Appetizers</li>
                    <li class="menu-li" @click="goToLink('main-dish')">Main Dishes</li>
                    <li class="menu-li" @click="goToLink('desserts')">Desserts</li>
                    <li class="menu-li" @click="goToLink('vegan')">Vegan</li>
                </ul>
            </div>      
        </div>

        <!-- Bottom note -->
        <div class="text-start text-sm text-gray-700 text-font-light dark:text-gray-300 pt-6">
            © 2025 Recipist. All rights reserved.
        </div>
    </footer>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToLink = (tag) =>{
    router.push({ path: '/recipes', query: { tags: tag } })
     window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>
