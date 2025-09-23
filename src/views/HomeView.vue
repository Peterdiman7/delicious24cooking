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
const topRated = ref<Recipe[]>([])
const latest = ref<Recipe[]>([])

const sampleData: Recipe[] = [
  {
    id: 1,
    name: "Classic Spaghetti Carbonara",
    main_image: "https://cdn.sanity.io/images/cq7w2e71/production/08ae0b8293235129bbe7d55a3f89c2fc4f1a36d7-973x1300.jpg",
    rating: "4.8",
    date_published: "2025-09-15",
  },
  {
    id: 2,
    name: "Avocado Toast with Egg",
    main_image: "https://feelgoodfoodie.net/wp-content/uploads/2025/05/Avocado-Toast-10.jpg",
    rating: "4.5",
    date_published: "2025-09-20",
  },
  {
    id: 3,
    name: "Thai Green Curry",
    main_image: "https://munchingwithmariyah.com/wp-content/uploads/2025/03/IMG_4915.jpg",
    rating: "4.9",
    date_published: "2025-09-18",
  },
  {
    id: 4,
    name: "Blueberry Pancakes",
    main_image: "https://www.allrecipes.com/thmb/ecb0XKvcrE7OyxBLX3OVEd30TbE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/686460-todds-famous-blueberry-pancakes-Dianne-1x1-1-9bd040b975634bce884847ce2090de16.jpg",
    rating: "4.7",
    date_published: "2025-09-22",
  },
  {
    id: 5,
    name: "Grilled Salmon with Lemon Butter",
    main_image: "https://www.lecremedelacrumb.com/wp-content/uploads/2022/07/grilled-lemon-butter-salmon-9sm-6.jpg",
    rating: "4.6",
    date_published: "2025-09-10",
  },
  {
    id: 6,
    name: "Vegan Buddha Bowl",
    main_image: "https://simplyceecee.co/wp-content/uploads/2018/07/veganbuddhabowl-2.jpg",
    rating: "4.4",
    date_published: "2025-09-12",
  },
  {
    id: 7,
    name: "Chocolate Lava Cake",
    main_image: "https://www.melskitchencafe.com/wp-content/uploads/2023/01/updated-lava-cakes7.jpg",
    rating: "5.0",
    date_published: "2025-09-21",
  },
];

// Load sample data
onMounted(() => {
  // Top rated recipes
  topRated.value = [...sampleData]
    .sort((a, b) => Number(b.rating) - Number(a.rating))
    .slice(0, 6);

  // Latest published recipes
  latest.value = [...sampleData]
    .sort(
      (a, b) =>
        new Date(b.date_published).getTime() -
        new Date(a.date_published).getTime()
    )
    .slice(0, 6);
});

// Helpers
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  img.src = "https://via.placeholder.com/300x200?text=No+Image";
};

const generateStars = (rating: number): string => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  return "★".repeat(fullStars) + (hasHalfStar ? "☆" : "");
};

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const goToRecipe = (recipeId: number) => {
  router.push(`/recipe/${recipeId}`);
}
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