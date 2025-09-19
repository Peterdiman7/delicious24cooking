<!-- App.vue -->
<template>
  <div class="app-wrapper">
    <Header />
    <main class="page-layout">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  overflow-x: hidden;
}

.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page-layout {
  flex: 1;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
}
</style>
