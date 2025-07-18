<template>
    <div class="lg:w-screen min-h-screen flex flex-col !mt-15">
        <main class="flex-1">
            <router-view />
        </main>
        <InstallBanner></InstallBanner>
        <NavBar></NavBar>
    </div>
    <Footer/>

</template>

<script setup>
import NavBar from './components/NavBar.vue';
import InstallBanner from './components/InstallBanner.vue';
import Footer from './components/Footer.vue';
</script>
