<template>
    <div class="lg:w-screen min-h-screen flex flex-col !mt-15">
        <router-view />
        <InstallBanner></InstallBanner>
        <NavBar></NavBar>
        <Footer></Footer>
    </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import InstallBanner from './components/InstallBanner.vue';
import Footer from './components/Footer.vue';
</script>
