<!-- src/components/Header.vue -->
<template>
  <header class="site-header">
    <nav class="nav">
      <!-- Logo -->
      <router-link to="/" class="logo">Delicious24Cooking</router-link>

      <!-- Desktop Nav -->
      <ul class="nav-links" :class="{ open: menuOpen }">
        <li><router-link to="/" @click="closeMenu">Home</router-link></li>
        <li><router-link to="/categories" @click="closeMenu">Categories</router-link></li>
        <li><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
      </ul>

      <!-- Hamburger Button -->
      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};
</script>

<style scoped>
/* ===== Header Layout ===== */
.site-header {
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 200;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  overflow-x: hidden;
  /* Prevent unwanted horizontal scroll */
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

/* ===== Logo ===== */
.logo {
  font-weight: 700;
  font-size: 1.6rem;
  text-decoration: none;
  color: #222;
  transition: color 0.3s ease;
}

.logo:hover {
  color: #ff6347;
}

/* ===== Desktop Nav ===== */
.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
  transition: transform 0.3s ease;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  position: relative;
}

.nav-links a::after {
  content: "";
  display: block;
  height: 2px;
  width: 0%;
  background: #ff6347;
  transition: width 0.3s ease;
  position: absolute;
  bottom: -4px;
  left: 0;
}

.nav-links a:hover::after {
  width: 100%;
}

/* ===== Hamburger Button ===== */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 300;
  /* Above menu */
}

.menu-toggle span {
  display: block;
  height: 3px;
  width: 100%;
  background: #333;
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* Hamburger → X animation */
.menu-toggle span.open:nth-child(1) {
  transform: rotate(45deg) translateY(7px);
}

.menu-toggle span.open:nth-child(2) {
  opacity: 0;
}

.menu-toggle span.open:nth-child(3) {
  transform: rotate(-45deg) translateY(-7px);
}

/* ===== Mobile Nav ===== */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 64px;
    /* Below header */
    right: 0;
    flex-direction: column;
    background: #fff;
    width: 240px;
    height: calc(100vh - 64px);
    padding: 2rem 1.5rem;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    transform: translateX(100%);
    transition: transform 0.3s ease;
  }

  .nav-links.open {
    transform: translateX(0);
  }

  .nav-links li {
    margin-bottom: 1rem;
  }
}
</style>
