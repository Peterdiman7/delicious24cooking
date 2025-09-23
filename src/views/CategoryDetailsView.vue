<template>
  <div class="category-detail-page">
    <div class="category-header">
      <button class="back-btn" @click="goBack">← Back to Categories</button>
      <h1>{{ categoryName }}</h1>
      <p v-if="categoryDescription" class="category-description">
        {{ categoryDescription }}
      </p>
    </div>

    <div class="recipe-grid" v-if="recipes.length">
      <div 
        v-for="recipe in recipes" 
        :key="recipe.id" 
        class="recipe-card" 
        @click="goToRecipe(recipe.id)"
      >
        <div class="image-container">
          <img 
            :src="recipe.main_image" 
            :alt="recipe.name || 'Recipe Image'"
            @error="handleImageError"
          />
        </div>
        <div class="card-content">
          <h3>{{ recipe.name || 'Recipe #' + recipe.id }}</h3>
          <div class="rating">
            <span class="stars">{{ generateStars(Number(recipe.rating)) }}</span>
            <span class="rating-number">{{ recipe.rating }}</span>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="no-recipes">
      <p>No recipes found in this category.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { recipes as allRecipes, type Recipe } from "../services/recipes";
import { categories } from "../services/categories"

const route = useRoute();
const router = useRouter();
const categoryId = Number(route.params.id);

const categoryName = ref("");
const categoryDescription = ref("");
const recipes = ref<Recipe[]>([]);

onMounted(() => {
  // Find category from local data
  const category = categories.find(c => c.id === categoryId);
  if (category) {
    categoryName.value = category.name;
    categoryDescription.value = category.description || "";
  }

  // Filter recipes for this category
  recipes.value = allRecipes.filter(r => r.category_id === categoryId);
});

function goToRecipe(recipeId: number) {
  router.push(`/recipe/${recipeId}`);
}

function goBack() {
  router.push('/categories');
}

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  img.src = 'https://via.placeholder.com/300x200?text=No+Image';
};

const generateStars = (rating: number): string => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  return '★'.repeat(fullStars) + (hasHalfStar ? '☆' : '');
};
</script>

<style scoped>
.category-detail-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.category-header {
  margin-bottom: 3rem;
}

.back-btn {
  background: #f3f4f6;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-bottom: 1rem;
  color: #374151;
  font-weight: 500;
}

.back-btn:hover {
  background: #e5e7eb;
}

.category-header h1 {
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
}

.category-description {
  font-size: 1.2rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

.recipe-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.recipe-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.recipe-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.image-container {
  height: 200px;
  overflow: hidden;
}

.recipe-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.recipe-card:hover img {
  transform: scale(1.05);
}

.card-content {
  padding: 1.25rem;
}

.recipe-card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #1f2937;
  line-height: 1.4;
}

.rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stars {
  color: #fbbf24;
  font-size: 1.1rem;
}

.rating-number {
  color: #6b7280;
  font-weight: 500;
}

.no-recipes {
  text-align: center;
  padding: 3rem;
  color: #6b7280;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .category-detail-page {
    padding: 1rem;
  }
  
  .category-header h1 {
    font-size: 2rem;
  }
  
  .recipe-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
}
</style>