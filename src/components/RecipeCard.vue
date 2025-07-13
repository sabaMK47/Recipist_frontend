<template>
  <div class="
    card 
    bg-white dark:bg-lessdark 
    rounded-xl 
    overflow-hidden 
    shadow-lg hover:shadow-xl dark:shadow-md 
    transition-all duration-300 
    w-full sm:w-96 md:w-80 lg:w-96 xl:w-80 
    mx-auto my-8 
    flex flex-col
  ">

    <div class="recipe-pic relative overflow-hidden h-48 sm:h-56">
      <img :src="randomImageUrl" :alt="recipeTitle" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
    </div>

    <div class="recipe-desc flex flex-col gap-5 justify-between p-4">
      <div>
        <div class="flex items-center justify-between gap-2">
          <h2 class=" text-font-bold text-gray-800 dark:text-light mb-2 truncate">{{ recipeTitle }}</h2>
          <h4 class="text-font-light text-gray-400">{{ recipeGenre }}</h4>
        </div>
        <div class="text-gray-600 dark:text-white text-sm mb-4 !mt-4 text-font-light line-clamp-2">
         <p>Ingridients: </p>
         {{ ingredients.join(', ') }}
        </div>
      </div>

      <div class="flex items-center justify-between mt-2">
        <button class="
            bg-main  
            rounded-full 
            px-4 py-2 text-sm font-medium 
            text-white
            cursor-pointer
            transition-all duration-300 
            transform hover:-translate-y-0.5 hover:shadow-md
          ">
          See Details
        </button>

        <button @click="liked = !liked" class="cursor-pointer">
          <!-- Empty Heart (default) -->
          <svg v-if="!liked" class="w-6 h-6" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M10.7793 8.47942C7.5995 9.93226 5.27075 13.3899 5.27075 17.5127C5.27075 21.7236 6.99575 24.9704 9.46442 27.7534C11.5018 30.0458 13.9667 31.9471 16.3702 33.7986C16.9426 34.2394 17.508 34.679 18.0664 35.1173C19.0746 35.9127 19.9735 36.6084 20.8418 37.1163C21.71 37.6243 22.4058 37.8543 22.9999 37.8543C23.5941 37.8543 24.2918 37.6243 25.1581 37.1163C26.0263 36.6084 26.9253 35.9127 27.9334 35.1173C28.4918 34.6777 29.0572 34.2388 29.6297 33.8005C32.0332 31.9452 34.498 30.0458 36.5354 27.7534C39.006 24.9704 40.7291 21.7236 40.7291 17.5127C40.7291 13.3918 38.4003 9.93226 35.2206 8.47942C32.1309 7.06684 27.9794 7.44059 24.0349 11.5403C23.9008 11.6795 23.7401 11.7901 23.5622 11.8657C23.3844 11.9413 23.1931 11.9803 22.9999 11.9803C22.8067 11.9803 22.6154 11.9413 22.4376 11.8657C22.2598 11.7901 22.099 11.6795 21.9649 11.5403C18.0204 7.44059 13.8689 7.06684 10.7793 8.47942ZM22.9999 8.54842C18.5686 4.58092 13.6063 4.02509 9.58325 5.86317C5.33975 7.80859 2.39575 12.3166 2.39575 17.5146C2.39575 22.6225 4.52325 26.521 7.31584 29.6643C9.55067 32.1809 12.2858 34.2873 14.7027 36.1465C15.2521 36.5682 15.7798 36.9783 16.2858 37.377C17.2691 38.1513 18.3233 38.9755 19.3908 39.6003C20.4584 40.2252 21.6774 40.7312 22.9999 40.7312C24.3224 40.7312 25.5414 40.2233 26.609 39.6003C27.6785 38.9755 28.7308 38.1513 29.714 37.377C30.22 36.9783 30.7477 36.5682 31.2972 36.1465C33.7122 34.2873 36.4492 32.179 38.684 29.6643C41.4766 26.521 43.6041 22.6225 43.6041 17.5146C43.6041 12.3166 40.662 7.80859 36.4166 5.86701C32.3935 4.02701 27.4313 4.58284 22.9999 8.54842Z"
              fill="#F24822" />
          </svg>

          <!-- Filled Heart -->
          <svg v-else class="w-6 h-6" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.83337 17.5127C3.83337 26.8334 11.5384 31.7995 17.1772 36.2462C19.1667 37.814 21.0834 39.2917 23 39.2917C24.9167 39.2917 26.8334 37.8159 28.8229 36.2442C34.4636 31.8014 42.1667 26.8334 42.1667 17.5146C42.1667 8.19575 31.625 1.58133 23 10.5437C14.375 1.58133 3.83337 8.19191 3.83337 17.5127Z"
              fill="#F24822" />
          </svg>
        </button>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref , defineProps} from 'vue';
const props = defineProps({
  recipeTitle:String,
  ingredients:String,
  recipeGenre:String,
})

const liked = ref(false);

const randomImageUrl = `https://source.unsplash.com/random/800x600/?food`;

</script>
