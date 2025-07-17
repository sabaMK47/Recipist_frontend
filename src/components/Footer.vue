<template>
    <footer class="bg-light dark:bg-darkgreen text-neutral-700 dark:text-neutral-300 px-6 py-10 w-screen">
        <div class="mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center">
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
                    <li class="menu-li"><a href="/contact">Search by Ingredients</a></li>
                    <li class="menu-li"><a href="/signup">Sign Up / Log In</a></li>
                </ul>
            </div>

            <!-- Categories -->
            <div>
                <h3 class="font-semibold mb-2 text-font-medium text-main">Recipe Categories</h3>
                <ul class="space-y-1 text-sm text-font-light">
                    <li class="menu-li"><a href="#">Appetizers</a></li>
                    <li class="menu-li"><a href="#">Main Dishes</a></li>
                    <li class="menu-li"><a href="#">Desserts</a></li>
                    <li class="menu-li"><a href="#">Drinks</a></li>
                </ul>
            </div>

            <!-- Social / Install -->
            <div>
                <h3 class="font-semibold mb-2 text-font-medium text-main">Social Media</h3>
                <div class="flex space-x-4 rtl:space-x-reverse gap-5 pt-5">
                    <a href="#" class="text-blue-600 hover:text-blue-800">
                        <img src="../assets/icons/facebook.svg" alt="facebook" class="w-6 h-6"> </a>
                    <a href="#" class="text-blue-600 hover:text-blue-800">
                        <img src="../assets/icons/instagram.svg" alt="instagram" class="w-6 h-6"> </a>
                    <a href="#" class="text-blue-600 hover:text-blue-800">
                        <img src="../assets/icons/telegram.svg" alt="telegram" class="w-6 h-6"> </a>
                    <a href="#" class="text-blue-600 hover:text-blue-800">
                        <img src="../assets/icons/twitter.svg" alt="twitter" class="w-6 h-6"> </a>
                </div>
            </div>
        </div>

        <!-- Bottom note -->
        <div class="text-start text-sm text-gray-700 text-font-light dark:text-gray-300 pt-6">
            © 2025 Recipist. All rights reserved.
        </div>
    </footer>
</template>
