<!-- src/components/Header.vue -->
<template>
  <header class="site-header">
    <nav class="nav">
      <router-link to="/" class="logo">Delicious24Cooking</router-link>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/categories">Categories</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.site-header {
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: bold;
  font-size: 1.5rem;
  text-decoration: none;
  color: #333;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.nav-links a:hover {
  color: #ff6347; /* Tomato accent */
}
</style>
