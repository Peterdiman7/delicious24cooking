<!-- src/pages/CategoryDetail.vue -->
<template>
  <div class="category-detail-page">
    <h1>{{ categoryName }}</h1>
    <p v-if="categoryDescription">{{ categoryDescription }}</p>

    <div class="recipe-grid">
      <div v-for="recipe in recipes" :key="recipe.id" class="recipe-card" @click="goToRecipe(recipe.id)">
        <img :src="recipe.main_image" :alt="recipe.name" />
        <h3>{{ recipe.name }}</h3>
        <p>Rating: {{ recipe.rating }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

interface Recipe {
  id: number;
  name: string;
  main_image: string;
  rating: string;
}

const route = useRoute();
const router = useRouter();
const categoryId = Number(route.params.id);

const categoryName = ref("");
const categoryDescription = ref("");
const recipes = ref<Recipe[]>([]);

onMounted(() => {
  async function fetchCategory() {
    try {
      // Fetch category info (name, description)
      const catResp = await fetch(`http://localhost:3000/categories/${categoryId}`);
      const catData = await catResp.json();
      categoryName.value = catData.name;
      categoryDescription.value = catData.description;

      // Fetch recipes for this category
      const resp = await fetch(`http://localhost:3000/categories/${categoryId}/recipes`);
      recipes.value = await resp.json();
    } catch (err) {
      console.error("Failed to fetch category or recipes:", err);
    }
  }

  fetchCategory();
});

function goToRecipe(recipeId: number) {
  router.push(`/recipe/${recipeId}`);
}
</script>

<style scoped>
.category-detail-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
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
  cursor: pointer;
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
