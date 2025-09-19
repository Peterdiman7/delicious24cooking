<!-- src/pages/RecipeDetail.vue -->
<template>
  <div class="recipe-detail-page">
    <h1>{{ recipe.name }}</h1>
    <img :src="recipe.main_image" :alt="recipe.name" class="main-image" />

    <section v-if="ingredients.length" class="section">
      <h2>Ingredients</h2>
      <ul>
        <li v-for="ing in ingredients" :key="ing.id">{{ ing.ingredient }}</li>
      </ul>
    </section>

    <section v-if="directions.length" class="section">
      <h2>Directions</h2>
      <ol>
        <li v-for="step in directions" :key="step.id">{{ step.instruction }}</li>
      </ol>
    </section>

    <section v-if="nutrition" class="section">
      <h2>Nutrition</h2>
      <ul>
        <li>Calories: {{ nutrition.calories }}</li>
        <li>Fat: {{ nutrition.fat }}</li>
        <li>Saturated Fat: {{ nutrition.saturated_fat }}</li>
        <li>Unsaturated Fat: {{ nutrition.unsaturated_fat }}</li>
        <li>Carbs: {{ nutrition.carbs }}</li>
        <li>Fiber: {{ nutrition.fiber }}</li>
        <li>Sugar: {{ nutrition.sugar }}</li>
        <li>Cholesterol: {{ nutrition.cholesterol }}</li>
        <li>Protein: {{ nutrition.protein }}</li>
        <li>Sodium: {{ nutrition.sodium }}</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

interface Recipe {
  id: number;
  name: string;
  main_image: string;
}

interface Ingredient {
  id: number;
  ingredient: string;
}

interface Direction {
  id: number;
  instruction: string;
}

interface Nutrition {
  calories: string;
  fat: string;
  saturated_fat: string;
  unsaturated_fat: string;
  carbs: string;
  fiber: string;
  sugar: string;
  cholesterol: string;
  protein: string;
  sodium: string;
}

const route = useRoute();
const recipeId = Number(route.params.id);

const recipe = ref<Recipe>({ id: 0, name: "", main_image: "" });
const ingredients = ref<Ingredient[]>([]);
const directions = ref<Direction[]>([]);
const nutrition = ref<Nutrition | null>(null);

onMounted(() => {
  async function fetchRecipe() {
    try {
      // Recipe info
      const resp = await fetch(`http://localhost:3000/recipe/${recipeId}`);
      const data = await resp.json();
      recipe.value = data;

      // Ingredients
      const ingResp = await fetch(`http://localhost:3000/recipe/${recipeId}/ingredients`);
      ingredients.value = await ingResp.json();

      // Directions
      const dirResp = await fetch(`http://localhost:3000/recipe/${recipeId}/directions`);
      directions.value = await dirResp.json();

      // Nutrition
      const nutResp = await fetch(`http://localhost:3000/recipe/${recipeId}/nutrition`);
      nutrition.value = await nutResp.json();
    } catch (err) {
      console.error("Failed to fetch recipe details:", err);
    }
  }

  fetchRecipe();
});
</script>

<style scoped>
.recipe-detail-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

.main-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.section {
  margin-bottom: 2rem;
}

.section h2 {
  margin-bottom: 0.5rem;
}

ul, ol {
  margin-left: 1.5rem;
}
</style>
