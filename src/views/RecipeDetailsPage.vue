<template>
  <div class="flex flex-col lg:flex-row gap-8 w-full justify-between !mt-30 lg:!ml-10 max-w-7xl mx-auto p-6">
    <div class="lg:w-[60%] w-full space-y-6">
      <h1 class="text-3xl text-font-title text-main dark:text-main">
        {{ recipe.name }}
      </h1>

      <!-- Recipe Steps -->
      <div class="space-y-4">
        <h2 class="text-xl text-font-bold py-5 text-main dark:text-main">Preparation Steps</h2>
        <ol class="list-decimal pb-10 text-font-medium list-inside space-y-2 text-gray-700 dark:text-gray-200">
          <li v-for="(step, index) in recipe.steps" :key="index">
            {{ step }}
          </li>
        </ol>
      </div>

      <!-- Recipe Image -->
      <img
        src="../assets/images/pasta.jpg"
        alt="Recipe Image"
        class="rounded-xl shadow-md w-full object-cover max-h-[500px]"
      />
    </div>

    <!-- Right Column (30%) - Ingredients -->
    <div
      class="lg:w-[30%] w-full h-auto bg-main/10 dark:bg-lessdark rounded-xl shadow-lg p-6 pb-10 space-y-4"
    >
      <h2 class="text-xl text-font-bold pb-3 text-main dark:text-main">Ingredients</h2>
      <ul class="list-disc list-inside text-font-medium text-gray-800 dark:text-gray-100 space-y-1">
        <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
          {{ ingredient }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const recipe = {
  name: 'Chicken Alfredo Pasta',
  steps: [
    'Cook the chicken with seasoning.',
    'Boil the pasta.',
    'Prepare the Alfredo sauce.',
    'Combine everything and serve.',
  ],
  ingredients: [
    '200g pasta',
    '1 chicken breast',
    '1 cup cream',
    'Parmesan cheese',
    'Garlic, salt, pepper',
  ],
  image: '../assets/images/pasta.jpg', 
}
</script>
