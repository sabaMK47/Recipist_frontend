<template>
    <div class="container flex flex-col justify-between items-center">
        <h1 class="text-font-title text-main text-3xl !mt-20 p-10">Welcome {{ authStore.user.name }} ! </h1>
        <p class="text-font-medium text-left">Here's your favorite recipes:</p>
    </div>

</template>

<script setup>
import { useAuthStore } from '@/stores/AuthStore';

const authStore = useAuthStore();
</script>
