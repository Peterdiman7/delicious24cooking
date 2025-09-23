<!-- src/views/CategoriesView.vue -->
<template>
  <div class="categories-page">
    <div class="page-header">
      <h1>Recipe Categories</h1>
      <p class="page-description">Explore our diverse collection of recipe categories</p>
    </div>

    <div class="category-grid">
      <div v-for="category in categories" :key="category.id" class="category-card" @click="goToCategory(category.id)">
        <div class="image-container">
          <img :src="category.image_url" :alt="category.name" @error="handleImageError" />
        </div>
        <div class="card-content">
          <h3>{{ category.name }}</h3>
          <p v-if="category.description" class="category-description">
            {{ category.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

interface Category {
  id: number;
  name: string;
  description?: string;
  image_url: string;
}

const categories = ref<Category[]>(
  [{ "id": 1, "image_url": "https://cook-it.club/assets/img/category/Appetizer.png", "name": "Appetizer", "description": "" }, { "id": 11, "image_url": "https://cook-it.club/assets/img/category/Beverage.png", "name": "Beverage", "description": "" }, { "id": 15, "image_url": "https://cook-it.club/assets/img/category/Bread.png", "name": "Bread", "description": "" }, { "id": 9, "image_url": "https://cook-it.club/assets/img/category/Breakfast.png", "name": "Breakfast", "description": "" }, { "id": 16, "image_url": "https://cook-it.club/assets/img/category/Brunch.png", "name": "Brunch", "description": "" }, { "id": 21, "image_url": "https://cook-it.club/assets/img/category/Cake.png", "name": "Cake", "description": "" }, { "id": 25, "image_url": "https://cook-it.club/assets/img/category/Candy.png", "name": "Candy", "description": "" }, { "id": 10, "image_url": "https://cook-it.club/assets/img/category/Cocktail.png", "name": "Cocktail", "description": "" }, { "id": 24, "image_url": "https://cook-it.club/assets/img/category/Coffee.png", "name": "Coffee", "description": "" }, { "id": 12, "image_url": "https://cook-it.club/assets/img/category/Condiment.png", "name": "Condiment", "description": "" }, { "id": 5, "image_url": "https://cook-it.club/assets/img/category/Dessert.png", "name": "Dessert", "description": "" }, { "id": 2, "image_url": "https://cook-it.club/assets/img/category/Dinner.png", "name": "Dinner", "description": "" }, { "id": 6, "image_url": "https://cook-it.club/assets/img/category/Drink.png", "name": "Drink", "description": "" }, { "id": 13, "image_url": "https://cook-it.club/assets/img/category/Entree.png", "name": "Entree", "description": "" }, { "id": 23, "image_url": "https://cook-it.club/assets/img/category/Ingredient.png", "name": "Ingredient", "description": "" }, { "id": 19, "image_url": "https://cook-it.club/assets/img/category/Jam.png", "name": "Jam / Jelly", "description": "" }, { "id": 4, "image_url": "https://cook-it.club/assets/img/category/Lunch.png", "name": "Lunch", "description": "" }, { "id": 17, "image_url": "https://cook-it.club/assets/img/category/Pasta.png", "name": "Pasta", "description": "" }, { "id": 22, "image_url": "https://cook-it.club/assets/img/category/Pie.png", "name": "Pie", "description": "" }, { "id": 20, "image_url": "https://cook-it.club/assets/img/category/Salad.png", "name": "Salad", "description": "" }, { "id": 14, "image_url": "https://cook-it.club/assets/img/category/Sandwich.png", "name": "Sandwich", "description": "" }, { "id": 7, "image_url": "https://cook-it.club/assets/img/category/Sauce.png", "name": "Sauce", "description": "" }, { "id": 3, "image_url": "https://cook-it.club/assets/img/category/SideDish.png", "name": "Side Dish", "description": "" }, { "id": 8, "image_url": "https://cook-it.club/assets/img/category/Snack.png", "name": "Snack", "description": "" }, { "id": 18, "image_url": "https://cook-it.club/assets/img/category/Soup.png", "name": "Soup", "description": "" }, { "id": 26, "image_url": "https://cook-it.club/assets/img/category/SpiceMix.png", "name": "Spice Mix", "description": "" }]
)
const router = useRouter();


function goToCategory(categoryId: number) {
  router.push(`/categories/${categoryId}`);
}

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  img.src = 'https://via.placeholder.com/300x200?text=Category';
};
</script>

<style scoped>
.categories-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
}

.page-description {
  font-size: 1.2rem;
  color: #6b7280;
  margin: 0;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.category-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.image-container {
  height: 200px;
  overflow: hidden;
}

.category-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.category-card:hover img {
  transform: scale(1.05);
}

.card-content {
  padding: 1.25rem;
}

.category-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #1f2937;
}

.category-description {
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.4;
  margin: 0;
}

@media (max-width: 768px) {
  .categories-page {
    padding: 1rem;
  }

  .page-header h1 {
    font-size: 2rem;
  }

  .category-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
}
</style>