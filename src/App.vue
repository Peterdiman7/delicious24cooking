<!-- App.vue -->
<template>
  <div class="app-wrapper">
    <!-- <Header /> -->
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  overflow-x: hidden;
  font-family: 'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

:root {
  /* Color Palette */
  --primary-orange: #ff6b47;
  --primary-orange-dark: #e55a3f;
  --primary-orange-light: #ff8d6b;
  
  --secondary-teal: #4ecdc4;
  --secondary-teal-dark: #40b5ac;
  --secondary-teal-light: #6dd5ce;
  
  --accent-purple: #667eea;
  --accent-purple-dark: #5a6fd8;
  --accent-purple-light: #7c90ee;
  
  --warm-yellow: #feca57;
  --warm-yellow-dark: #feb53a;
  --warm-yellow-light: #fed975;
  
  --soft-pink: #ff9ff3;
  --soft-pink-dark: #f582e6;
  --soft-pink-light: #ffb3f6;
  
  /* Neutral Colors */
  --white: #ffffff;
  --cream: #fefdfb;
  --light-gray: #f8f9fa;
  --medium-gray: #e9ecef;
  --text-gray: #6c757d;
  --dark-gray: #495057;
  --charcoal: #343a40;
  --black: #212529;
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, var(--primary-orange) 0%, var(--secondary-teal) 100%);
  --gradient-secondary: linear-gradient(135deg, var(--accent-purple) 0%, var(--soft-pink) 100%);
  --gradient-warm: linear-gradient(135deg, var(--warm-yellow) 0%, var(--primary-orange) 100%);
  --gradient-cool: linear-gradient(135deg, var(--secondary-teal) 0%, var(--accent-purple) 100%);
  
  /* Shadows */
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.12);
  --shadow-lg: 0 8px 25px rgba(0, 0, 0, 0.15);
  --shadow-xl: 0 15px 35px rgba(0, 0, 0, 0.18);
  
  /* Border Radius */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-xl: 24px;
  --radius-full: 50px;
  
  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
}

body {
  background: linear-gradient(135deg, var(--cream) 0%, var(--light-gray) 100%);
  color: var(--charcoal);
  line-height: 1.6;
}
</style>

<style scoped>

</style>