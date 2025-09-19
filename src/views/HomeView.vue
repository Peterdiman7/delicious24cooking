<template>
  <div class="home-page">
    <h1>Welcome to Delicious24Cooking 🍳</h1>

    <section class="section">
      <h2>Top Rated Recipes</h2>
      <div class="recipe-grid">
        <div v-for="recipe in topRated" :key="recipe.id" class="recipe-card">
          <img :src="recipe.main_image" :alt="recipe.name || 'Recipe Image'" />
          <h3>{{ recipe.name || 'Recipe #' + recipe.id }}</h3>
          <p>Rating: {{ recipe.rating }}</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Recently Published Recipes</h2>
      <div class="recipe-grid">
        <div v-for="recipe in latest" :key="recipe.id" class="recipe-card">
          <img :src="recipe.main_image" :alt="recipe.name || 'Recipe Image'" />
          <h3>{{ recipe.name || 'Recipe #' + recipe.id }}</h3>
          <p>Published: {{ new Date(recipe.date_published).toLocaleDateString() }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Recipe {
  id: number;
  name?: string;
  main_image: string;
  rating: string;
  date_published: string;
}

const topRated = ref<Recipe[]>([]);
const latest = ref<Recipe[]>([]);

// Base URL where images are served
const baseImageUrl = "http://localhost:3000/images/";

const getImageUrl = (filename: string) => baseImageUrl + filename;

onMounted(() => {
  async function fetchRecipes() {
    try {
      const response = await fetch("http://localhost:3000/recipes");
      const data: Recipe[] = await response.json();

      // Top rated recipes
      topRated.value = data
        .filter(r => Number(r.rating) > 0)
        .sort((a, b) => Number(b.rating) - Number(a.rating))
        .slice(0, 6);

      // Latest published recipes
      latest.value = data
        .sort((a, b) => new Date(b.date_published).getTime() - new Date(a.date_published).getTime())
        .slice(0, 6);
    } catch (err) {
      console.error("Failed to fetch recipes:", err);
    }
  }

  fetchRecipes();
});
</script>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.section {
  margin-bottom: 3rem;
}

.recipe-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.recipe-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.2s;
}

.recipe-card:hover {
  transform: scale(1.05);
}

.recipe-card img {
  width: 100%;
  height: 140px;
  object-fit: cover;
}

.recipe-card h3 {
  font-size: 1.1rem;
  margin: 0.5rem 0;
}

.recipe-card p {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.5rem;
}
</style>
