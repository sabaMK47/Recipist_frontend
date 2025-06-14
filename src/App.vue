<template>
    <div class="lg:w-screen">
        <InstallBanner></InstallBanner>
        <NavBar></NavBar>
        <HeroSection></HeroSection>
        <div class="cards flex flex-row flex-wrap justify-evenly p-5 gap-5">
        <RecipeCard></RecipeCard>
        <RecipeCard></RecipeCard>
        <RecipeCard></RecipeCard>
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';
import InstallBanner from './components/InstallBanner.vue';
import Footer from './components/Footer.vue';
import RecipeCard from './components/RecipeCard.vue';
</script>
