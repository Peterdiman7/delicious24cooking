<!-- RecipeCardList.vue -->
<template>
  <div class="recipe-list">
    <div class="recipe-card" v-for="recipe in recipes" :key="recipe.id">
      <h3>{{ recipe.name || 'Recipe #' + recipe.id }}</h3>
      <img :src="recipe.main_image" :alt="recipe.name" />
      <p>Rating: {{ recipe.rating }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

interface Recipe {
  id: number;
  name?: string;
  main_image: string;
  rating: string;
}

const props = defineProps<{ recipes: Recipe[] }>();

const baseImageUrl = "http://localhost:3000/images/";
const getImageUrl = (filename: string) => baseImageUrl + filename;
</script>

<style scoped>
.recipe-card {
  border: 1px solid #ddd;
  padding: 1rem;
  margin-bottom: 1rem;
  max-width: 300px;
}

.recipe-card img {
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 0.5rem;
}
</style>
