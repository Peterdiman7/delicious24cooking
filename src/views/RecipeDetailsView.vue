<!-- src/views/RecipeDetailsView.vue -->
<template>
  <div class="recipe-detail-page">
    <div class="recipe-header">
      <button class="back-btn" @click="goBack">← Back</button>
      <div class="recipe-hero">
        <div class="recipe-image-container">
          <img 
            :src="recipe.main_image" 
            :alt="recipe.name"
            class="main-image" 
          />
        </div>
        <div class="recipe-info">
          <h1>{{ recipe.name || 'Recipe Details' }}</h1>
          <div class="recipe-meta">
            <div class="rating" v-if="recipe.rating">
              <span class="stars">{{ generateStars(Number(recipe.rating)) }}</span>
              <span class="rating-number">{{ recipe.rating }}</span>
            </div>
            <div class="time-info">
              <span v-if="recipe.prep_time" class="time-item">
                🕒 Prep: {{ recipe.prep_time }}min
              </span>
              <span v-if="recipe.cook_time" class="time-item">
                🍳 Cook: {{ recipe.cook_time }}min
              </span>
              <span v-if="recipe.total_time" class="time-item">
                ⏱️ Total: {{ recipe.total_time }}min
              </span>
            </div>
          </div>
          <p v-if="recipe.description" class="recipe-description">
            {{ recipe.description }}
          </p>
        </div>
      </div>
    </div>

    <div class="recipe-content">
      <div class="content-grid">
        <div class="main-content">
          <section v-if="ingredients.length" class="section ingredients-section">
            <h2>Ingredients</h2>
            <ul class="ingredients-list">
              <li v-for="ing in ingredients" :key="ing.id" class="ingredient-item">
                <span class="ingredient-text">{{ ing.ingredient }}</span>
              </li>
            </ul>
          </section>

          <section v-if="directions.length" class="section directions-section">
            <h2>Instructions</h2>
            <ol class="directions-list">
              <li v-for="(step, index) in directions" :key="step.id" class="direction-item">
                <span class="step-number">{{ index + 1 }}</span>
                <span class="instruction-text">{{ step.instruction }}</span>
              </li>
            </ol>
          </section>
        </div>

        <div class="sidebar">
          <section v-if="nutrition && hasNutritionData" class="section nutrition-section">
            <h2>Nutrition Facts</h2>
            <div class="nutrition-grid">
              <div v-if="nutrition.calories" class="nutrition-item">
                <span class="nutrition-label">Calories</span>
                <span class="nutrition-value">{{ nutrition.calories }}</span>
              </div>
              <div v-if="nutrition.fat" class="nutrition-item">
                <span class="nutrition-label">Fat</span>
                <span class="nutrition-value">{{ nutrition.fat }}g</span>
              </div>
              <div v-if="nutrition.saturated_fat" class="nutrition-item">
                <span class="nutrition-label">Saturated Fat</span>
                <span class="nutrition-value">{{ nutrition.saturated_fat }}g</span>
              </div>
              <div v-if="nutrition.carbs" class="nutrition-item">
                <span class="nutrition-label">Carbs</span>
                <span class="nutrition-value">{{ nutrition.carbs }}g</span>
              </div>
              <div v-if="nutrition.fiber" class="nutrition-item">
                <span class="nutrition-label">Fiber</span>
                <span class="nutrition-value">{{ nutrition.fiber }}g</span>
              </div>
              <div v-if="nutrition.sugar" class="nutrition-item">
                <span class="nutrition-label">Sugar</span>
                <span class="nutrition-value">{{ nutrition.sugar }}g</span>
              </div>
              <div v-if="nutrition.protein" class="nutrition-item">
                <span class="nutrition-label">Protein</span>
                <span class="nutrition-value">{{ nutrition.protein }}g</span>
              </div>
              <div v-if="nutrition.sodium" class="nutrition-item">
                <span class="nutrition-label">Sodium</span>
                <span class="nutrition-value">{{ nutrition.sodium }}mg</span>
              </div>
              <div v-if="nutrition.cholesterol" class="nutrition-item">
                <span class="nutrition-label">Cholesterol</span>
                <span class="nutrition-value">{{ nutrition.cholesterol }}mg</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { recipes } from "../services/recipes";
import { ingredientsData, directionsData, nutritionData } from "../services/recipeDetails";

const route = useRoute();
const router = useRouter();
const recipeId = Number(route.params.id);

// Get recipe from local data
const recipe = ref(recipes.find(r => r.id === recipeId) || { id: 0, name: '', main_image: '' });

// Filter ingredients, directions, nutrition for this recipe
const ingredients = ref(
  ingredientsData.filter(i => i.recipe_id === recipeId)
);

const directions = ref(
  directionsData.filter(d => d.recipe_id === recipeId)
);

const nutrition = ref(
  nutritionData.find(n => n.recipe_id === recipeId) || null
);

const hasNutritionData = computed(() => {
  if (!nutrition.value) return false;
  return Object.values(nutrition.value).some(v => v && v !== '0');
});

function goBack() {
  router.go(-1);
}

const generateStars = (rating: number): string => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  return '★'.repeat(fullStars) + (hasHalfStar ? '☆' : '');
};
</script>

<style scoped>
.recipe-detail-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.recipe-header {
  margin-bottom: 2rem;
}

.back-btn {
  background: #f3f4f6;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-bottom: 2rem;
  color: #374151;
  font-weight: 500;
}

.back-btn:hover {
  background: #e5e7eb;
}

.recipe-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
}

.recipe-image-container {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.main-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
}

.recipe-info h1 {
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.recipe-meta {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stars {
  color: #fbbf24;
  font-size: 1.3rem;
}

.rating-number {
  color: #6b7280;
  font-weight: 600;
  font-size: 1.1rem;
}

.time-info {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.time-item {
  background: #f3f4f6;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #374151;
  font-weight: 500;
}

.recipe-description {
  font-size: 1.1rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

.recipe-content {
  margin-top: 3rem;
}

.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
}

.section {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.section h2 {
  font-size: 1.8rem;
  color: #1f2937;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f3f4f6;
}

.ingredients-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ingredient-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f3f4f6;
}

.ingredient-item:last-child {
  border-bottom: none;
}

.ingredient-item::before {
  content: '•';
  color: #ff6347;
  font-size: 1.2rem;
  margin-right: 1rem;
}

.ingredient-text {
  font-size: 1rem;
  color: #374151;
  line-height: 1.5;
}

.directions-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.direction-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  align-items: flex-start;
}

.direction-item:last-child {
  margin-bottom: 0;
}

.step-number {
  background: #ff6347;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.instruction-text {
  font-size: 1rem;
  color: #374151;
  line-height: 1.6;
  flex: 1;
}

.nutrition-section {
  position: sticky;
  top: 2rem;
}

.nutrition-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.nutrition-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f3f4f6;
}

.nutrition-item:last-child {
  border-bottom: none;
}

.nutrition-label {
  font-size: 0.9rem;
  color: #6b7280;
}

.nutrition-value {
  font-weight: 600;
  color: #1f2937;
}

@media (max-width: 968px) {
  .recipe-hero {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .nutrition-section {
    position: static;
  }
}

@media (max-width: 768px) {
  .recipe-detail-page {
    padding: 1rem;
  }
  
  .recipe-info h1 {
    font-size: 2rem;
  }
  
  .main-image {
    height: 300px;
  }
  
  .section {
    padding: 1.5rem;
  }
  
  .time-info {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>