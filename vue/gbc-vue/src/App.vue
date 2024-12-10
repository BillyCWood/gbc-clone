<script setup lang="ts">
import { RouterView } from 'vue-router'
import HomeNavBar from './components/ui/HomeNavBar.vue';
import NavBar from './components/ui/NavBar.vue';
import Footer from './components/ui/Footer.vue';
</script>

<template>
  <header>
    <HomeNavBar v-if="$route.path == '/'" />
    <NavBar v-else />
  </header>
  
  <main>
    <RouterView />
  </main>

  <footer>
    <Footer />
  </footer>
  
</template>