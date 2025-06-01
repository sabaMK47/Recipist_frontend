<template>
    <div class="lg:w-screen">
        <router-view />
        <InstallBanner></InstallBanner>
        <NavBar></NavBar>
        <Footer></Footer>
    </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';
import InstallBanner from './components/InstallBanner.vue';
import Footer from './components/Footer.vue';
</script>
