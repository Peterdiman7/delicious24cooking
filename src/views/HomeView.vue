<template>
  <div class="home-page">
    <div class="hero-section">
      <h1>Welcome to Delicious24Cooking 🍳</h1>
      <p class="hero-description">Discover amazing recipes from around the world</p>
    </div>

    <section class="section">
      <h2>Top Rated Recipes</h2>
      <div class="recipe-grid">
        <div 
          v-for="recipe in topRated" 
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
    </section>

    <section class="section">
      <h2>Recently Published Recipes</h2>
      <div class="recipe-grid">
        <div 
          v-for="recipe in latest" 
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
            <p class="publish-date">
              Published: {{ formatDate(recipe.date_published) }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

interface Recipe {
  id: number;
  name?: string;
  main_image: string;
  rating: string;
  date_published: string;
}

const router = useRouter();
const topRated = ref<Recipe[]>([]);
const latest = ref<Recipe[]>([]);

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

// Helper functions
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  img.src = 'https://via.placeholder.com/300x200?text=No+Image';
};

const generateStars = (rating: number): string => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  return '★'.repeat(fullStars) + (hasHalfStar ? '☆' : '');
};

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const goToRecipe = (recipeId: number) => {
  router.push(`/recipe/${recipeId}`);
};
</script>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero-section {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
}

.hero-section h1 {
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
}

.hero-description {
  font-size: 1.2rem;
  color: #6b7280;
  margin: 0;
}

.section {
  margin-bottom: 3rem;
}

.section h2 {
  font-size: 2rem;
  color: #1f2937;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-left: 4px solid #ff6347;
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
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
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

.publish-date {
  font-size: 0.9rem;
  color: #6b7280;
  margin: 0;
}

@media (max-width: 768px) {
  .home-page {
    padding: 1rem;
  }
  
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .section h2 {
    font-size: 1.5rem;
  }
  
  .recipe-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
}
</style>