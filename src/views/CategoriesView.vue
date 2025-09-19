<!-- src/pages/Categories.vue -->
<template>
  <div class="categories-page">
    <h1>Categories</h1>
    <div class="category-grid">
      <div
        v-for="category in categories"
        :key="category.id"
        class="category-card"
        @click="goToCategory(category.id)"
      >
        <img :src="category.image_url" :alt="category.name" />
        <h3>{{ category.name }}</h3>
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
  image_url: string;
}

const categories = ref<Category[]>([]);
const router = useRouter();

onMounted(() => {
  async function fetchCategories() {
    try {
      const response = await fetch("http://localhost:3000/categories");
      const data: Category[] = await response.json();
      categories.value = data;
    } catch (err) {
      console.error("Failed to fetch categories:", err);
    }
  }

  fetchCategories();
});

function goToCategory(categoryId: number) {
  router.push(`/categories/${categoryId}`);
}
</script>

<style scoped>
.categories-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.category-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;
}

.category-card:hover {
  transform: scale(1.05);
}

.category-card img {
  width: 100%;
  height: 140px;
  object-fit: cover;
}

.category-card h3 {
  font-size: 1.1rem;
  margin: 0.5rem 0;
}
</style>
