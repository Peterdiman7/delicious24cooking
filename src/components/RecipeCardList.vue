<!-- RecipeCardList.vue -->
<template>
  <div class="recipe-list">
    <div class="recipe-card" v-for="recipe in recipes" :key="recipe.id">
      <h3>{{ recipe.name || 'Recipe #' + recipe.id }}</h3>
      <div class="image-container">
        <img 
          :src="recipe.main_image" 
          :alt="recipe.name || 'Recipe Image'"
          @error="handleImageError"
        />
      </div>
      <p>Rating: {{ recipe.rating }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Recipe {
  id: number;
  name?: string;
  main_image: string;
  rating: string;
}

defineProps<{ recipes: Recipe[] }>();

// Handle image loading errors
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  img.src = 'https://via.placeholder.com/300x200?text=No+Image';
};
</script>

<style scoped>
.recipe-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 1rem 0;
}

.recipe-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.recipe-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.recipe-card h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #1f2937;
}

.image-container {
  margin-bottom: 0.75rem;
}

.recipe-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
}

.recipe-card p {
  font-size: 0.9rem;
  color: #6b7280;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
</style>