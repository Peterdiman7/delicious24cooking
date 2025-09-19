<template>
  <div class="app">
    <!-- Header -->
    <header class="header">
      <nav class="nav-container">
        <router-link to="/" class="logo">Delicious24Cooking</router-link>
        <div class="nav-links">
          <router-link to="/" class="nav-link" 
              :class="{ active: $route.name === 'dashboard' }">
            Dashboard
          </router-link>
          <router-link to="/categories" class="nav-link" 
              :class="{ active: $route.name === 'categories' }">
            Categories
          </router-link>
          <div class="pricing-dropdown">
            <a href="#" class="nav-link" @click.prevent="togglePricingDropdown">
              Payment Plans ▼
            </a>
            <div class="dropdown-content" :class="{ show: showPricingDropdown }">
              <div v-for="plan in pricingPlans" :key="plan.id" class="pricing-option"
                  @click="selectPlan(plan)">
                <div class="plan-info">
                  <span class="plan-icon">{{ plan.icon }}</span>
                  <span class="plan-name">{{ plan.name }}</span>
                </div>
                <div class="plan-pricing">
                  <span class="pricing-badge" :class="plan.isBest ? 'badge-best' : 'badge-price'">
                    {{ plan.isBest ? 'BEST' : plan.price }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <router-link to="/profile" class="nav-link profile-link">
            <span class="profile-icon">👤</span>
            Profile
          </router-link>
        </div>
        <div class="mobile-menu" @click="toggleMobileMenu">☰</div>
      </nav>
    </header>

    <!-- Mobile Navigation -->
    <div class="mobile-nav" :class="{ active: showMobileMenu }">
      <router-link to="/" class="mobile-nav-link" @click="closeMobileMenu">Dashboard</router-link>
      <router-link to="/categories" class="mobile-nav-link" @click="closeMobileMenu">Categories</router-link>
      <router-link to="/profile" class="mobile-nav-link" @click="closeMobileMenu">Profile</router-link>
    </div>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Hero Section -->
      <section class="hero-section">
        <h1 class="hero-title">Welcome to Delicious24Cooking</h1>
        <p class="hero-subtitle">
          Discover amazing recipes from around the world, created by passionate chefs
        </p>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">{{ totalRecipes }}</span>
            <span class="stat-label">Recipes</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">{{ totalChefs }}</span>
            <span class="stat-label">Chefs</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">{{ totalCategories }}</span>
            <span class="stat-label">Categories</span>
          </div>
        </div>
      </section>

      <!-- Search and Filter Section -->
      <div class="search-section">
        <div class="search-container">
          <input v-model="searchQuery" type="text" 
                 placeholder="Search recipes by category or description..."
                 class="search-input" />
          <div class="search-icon">🔍</div>
        </div>
        <div class="filter-controls">
          <select v-model="selectedSort" class="filter-select">
            <option value="name">Sort by Name</option>
            <option value="rating">Sort by Rating</option>
            <option value="likes">Sort by Popularity</option>
            <option value="recipes">Sort by Recipe Count</option>
          </select>
          <select v-model="selectedDifficulty" class="filter-select">
            <option value="">All Difficulties</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </div>

      <!-- Categories Grid -->
      <section class="categories-section">
        <div class="section-header">
          <h2 class="section-title">Recipe Categories ({{ filteredCategories.length }})</h2>
          <div class="view-toggle">
            <button class="view-btn" :class="{ active: viewMode === 'grid' }" 
                    @click="viewMode = 'grid'">
              <span class="btn-icon">⊞</span> Grid
            </button>
            <button class="view-btn" :class="{ active: viewMode === 'list' }" 
                    @click="viewMode = 'list'">
              <span class="btn-icon">☰</span> List
            </button>
          </div>
        </div>

        <div class="categories-grid" :class="{ 'list-view': viewMode === 'list' }">
          <div v-for="category in paginatedCategories" :key="category.id" 
               class="category-card" :class="{ 'list-card': viewMode === 'list' }"
               @click="selectCategory(category)">
            <div class="card-image-container">
              <img :src="category.image" :alt="category.name" class="category-image" loading="lazy" />
              <div class="recipe-count">{{ category.recipeCount }} recipes</div>
              <button class="favorite-btn" :class="{ active: category.isFavorite }" 
                      @click.stop="toggleFavorite(category)">
                {{ category.isFavorite ? '❤️' : '🤍' }}
              </button>
            </div>

            <div class="card-content">
              <h3 class="category-title">{{ category.name }}</h3>
              <p class="category-description">{{ category.description }}</p>

              <div class="recipe-stats">
                <div class="rating">
                  <span class="stars">{{ generateStars(category.rating) }}</span>
                  <span class="rating-number">{{ category.rating }}</span>
                </div>

                <div class="likes">
                  <span class="heart">❤️</span>
                  <span>{{ formatLikes(category.likes) }}</span>
                </div>
              </div>

              <div class="category-tags">
                <span v-for="tag in category.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>

              <div class="author">
                By {{ category.author }}
              </div>

              <div class="card-actions">
                <button class="action-btn explore" @click.stop="exploreCategory(category)">
                  <span class="btn-icon">🔍</span> Explore
                </button>
                <button class="action-btn bookmark" @click.stop="bookmarkCategory(category)">
                  <span class="btn-icon">📑</span> Save
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="pagination" v-if="totalPages > 1">
          <button class="page-btn" :disabled="currentPage === 1" 
                  @click="changePage(currentPage - 1)">
            ← Previous
          </button>
          <span class="page-info">
            Page {{ currentPage }} of {{ totalPages }}
          </span>
          <button class="page-btn" :disabled="currentPage === totalPages" 
                  @click="changePage(currentPage + 1)">
            Next →
          </button>
        </div>
      </section>

      <!-- Featured Recipes Section -->
      <section class="featured-section" v-if="featuredRecipes.length > 0">
        <h2 class="section-title">Featured Recipes</h2>
        <div class="featured-grid">
          <div v-for="recipe in featuredRecipes" :key="recipe.id" class="featured-card"
               @click="viewRecipe(recipe.id)">
            <div class="featured-image">
              <img :src="recipe.image" :alt="recipe.title" />
              <div class="featured-badge">Featured</div>
            </div>
            <div class="featured-content">
              <h4 class="featured-title">{{ recipe.title }}</h4>
              <p class="featured-description">{{ recipe.description }}</p>
              <div class="featured-meta">
                <span class="featured-time">⏱️ {{ recipe.cookTime }}min</span>
                <span class="featured-difficulty" 
                      :class="recipe.difficulty.toLowerCase()">
                  {{ recipe.difficulty }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- No Results -->
      <div v-if="filteredCategories.length === 0" class="no-results">
        <div class="no-results-icon">🔍</div>
        <h3>No categories found</h3>
        <p>Try searching with different keywords or adjust your filters</p>
        <button class="reset-btn" @click="resetFilters">Reset Filters</button>
      </div>
    </main>

    <!-- Loading Overlay -->
    <div class="loading-overlay" v-if="isLoading">
      <div class="loading-spinner"></div>
      <p>Loading delicious content...</p>
    </div>

    <!-- Category Modal -->
    <div class="modal-overlay" v-if="selectedCategory" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">×</button>
        <div class="modal-header">
          <img :src="selectedCategory.image" :alt="selectedCategory.name" class="modal-image" />
          <div class="modal-info">
            <h2>{{ selectedCategory.name }}</h2>
            <p>{{ selectedCategory.description }}</p>
            <div class="modal-stats">
              <span>{{ selectedCategory.recipeCount }} recipes</span>
              <span>{{ selectedCategory.rating }}⭐</span>
              <span>{{ formatLikes(selectedCategory.likes) }} likes</span>
            </div>
          </div>
        </div>
        <div class="modal-actions">
          <button class="modal-btn primary" @click="viewAllRecipes">View All Recipes</button>
          <button class="modal-btn secondary" @click="addToFavorites">Add to Favorites</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import type { Category, PricingPlan, FeaturedRecipe } from '@/types'

const router = useRouter()

// Reactive data
const showPricingDropdown = ref<boolean>(false)
const showMobileMenu = ref<boolean>(false)
const searchQuery = ref<string>('')
const selectedCategory = ref<Category | null>(null)
const selectedSort = ref<string>('name')
const selectedDifficulty = ref<string>('')
const viewMode = ref<'grid' | 'list'>('grid')
const currentPage = ref<number>(1)
const itemsPerPage = ref<number>(12)
const isLoading = ref<boolean>(false)

// Stats
const totalRecipes = ref<number>(4250)
const totalChefs = ref<number>(180)
const totalCategories = computed(() => categories.length)

const pricingPlans: PricingPlan[] = reactive([
  {
    id: 'family',
    name: 'Family Plan',
    icon: '👨‍👩‍👧‍👦',
    price: '$19/mo',
    features: ['Up to 6 users', 'Unlimited recipes', 'Family meal planning', 'Shopping lists', 'Nutritional info']
  },
  {
    id: 'premium',
    name: "User's Choice",
    icon: '⭐',
    price: '$12/mo',
    isBest: true,
    features: ['Premium recipes', 'Video tutorials', 'Chef consultations', 'Ad-free experience', 'Priority support']
  },
  {
    id: 'individual',
    name: 'Individual',
    icon: '👤',
    price: '$8/mo',
    features: ['Personal recipes', 'Basic features', 'Mobile access', 'Recipe bookmarks', 'Basic support']
  },
  {
    id: 'business',
    name: 'Business',
    icon: '🏢',
    price: '$49/mo',
    features: ['Commercial use', 'Team collaboration', 'Advanced analytics', 'White-label option', 'API access']
  }
])

const categories: Category[] = reactive([
  {
    id: 1,
    name: 'Cocktails',
    description: 'Refreshing drinks and mocktails for every occasion',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=300&fit=crop',
    rating: 4.8,
    likes: 2450,
    author: 'Chef Martinez',
    recipeCount: 156,
    tags: ['Drinks', 'Party', 'Refreshing'],
    difficulty: 'Easy',
    isFavorite: false
  },
  {
    id: 2,
    name: 'Desserts',
    description: 'Sweet treats and decadent desserts to satisfy your cravings',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=300&h=300&fit=crop',
    rating: 4.9,
    likes: 3200,
    author: 'Pastry Chef Anna',
    recipeCount: 203,
    tags: ['Sweet', 'Baking', 'Chocolate'],
    difficulty: 'Medium',
    isFavorite: true
  },
  {
    id: 3,
    name: 'Soups',
    description: 'Hearty soups and broths for comfort and warmth',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=300&fit=crop',
    rating: 4.7,
    likes: 1890,
    author: 'Chef Roberto',
    recipeCount: 142,
    tags: ['Comfort', 'Warm', 'Healthy'],
    difficulty: 'Easy',
    isFavorite: false
  },
  // Add more categories as needed...
])

const featuredRecipes = reactive<FeaturedRecipe[]>([
  {
    id: 1,
    title: 'Truffle Risotto',
    description: 'Creamy risotto with black truffle and parmesan',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=300&h=200&fit=crop',
    cookTime: 35,
    difficulty: 'Hard'
  },
  {
    id: 2,
    title: 'Seared Salmon',
    description: 'Pan-seared salmon with lemon butter sauce',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=200&fit=crop',
    cookTime: 20,
    difficulty: 'Medium'
  },
  {
    id: 3,
    title: 'Chocolate Soufflé',
    description: 'Light and airy chocolate dessert',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=300&h=200&fit=crop',
    cookTime: 45,
    difficulty: 'Hard'
  }
])

// Computed properties
const filteredCategories = computed(() => {
  let filtered = categories.filter(category => {
    const matchesSearch = !searchQuery.value || 
        category.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        category.description.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        category.tags.some(tag => tag.toLowerCase().includes(searchQuery.value.toLowerCase()))
    
    const matchesDifficulty = !selectedDifficulty.value || 
        category.difficulty.toLowerCase() === selectedDifficulty.value
    
    return matchesSearch && matchesDifficulty
  })

  // Apply sorting
  switch (selectedSort.value) {
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating)
      break
    case 'likes':
      filtered.sort((a, b) => b.likes - a.likes)
      break
    case 'recipes':
      filtered.sort((a, b) => b.recipeCount - a.recipeCount)
      break
    default:
      filtered.sort((a, b) => a.name.localeCompare(b.name))
  }

  return filtered
})

const totalPages = computed(() => 
  Math.ceil(filteredCategories.value.length / itemsPerPage.value)
)

const paginatedCategories = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredCategories.value.slice(start, end)
})

// Methods
const togglePricingDropdown = (): void => {
  showPricingDropdown.value = !showPricingDropdown.value
}

const toggleMobileMenu = (): void => {
  showMobileMenu.value = !showMobileMenu.value
}

const closeMobileMenu = (): void => {
  showMobileMenu.value = false
}

const selectCategory = (category: Category): void => {
  selectedCategory.value = category
}

const closeModal = (): void => {
  selectedCategory.value = null
}

const selectPlan = (plan: PricingPlan): void => {
  showPricingDropdown.value = false
  console.log('Selected plan:', plan.name)
  // Handle plan selection logic here
}

const toggleFavorite = (category: Category): void => {
  category.isFavorite = !category.isFavorite
}

const exploreCategory = (category: Category): void => {
  router.push(`/category/${category.id}`)
}

const bookmarkCategory = (category: Category): void => {
  console.log('Bookmarked:', category.name)
  // Handle bookmarking logic here
}

const viewRecipe = (recipeId: number): void => {
  router.push(`/recipe/${recipeId}`)
}

const viewAllRecipes = (): void => {
  if (selectedCategory.value) {
    router.push(`/category/${selectedCategory.value.id}`)
    selectedCategory.value = null
  }
}

const addToFavorites = (): void => {
  if (selectedCategory.value) {
    selectedCategory.value.isFavorite = true
    selectedCategory.value = null
  }
}

const changePage = (page: number): void => {
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const resetFilters = (): void => {
  searchQuery.value = ''
  selectedSort.value = 'name'
  selectedDifficulty.value = ''
  currentPage.value = 1
}

const generateStars = (rating: number): string => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  return '★'.repeat(fullStars) + (hasHalfStar ? '☆' : '')
}

const formatLikes = (likes: number): string => {
  if (likes >= 1000000) return `${(likes / 1000000).toFixed(1)}M`
  if (likes >= 1000) return `${(likes / 1000).toFixed(1)}k`
  return likes.toString()
}

// Watch for search changes to reset pagination
watch(searchQuery, () => {
  currentPage.value = 1
})

onMounted(() => {
  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    const dropdown = document.querySelector('.pricing-dropdown')
    if (dropdown && !dropdown.contains(e.target as Node)) {
      showPricingDropdown.value = false
    }
  })

  // Simulate loading
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})
</script>

<style scoped>
/* All the enhanced styles will go here - this is the same styling as before but organized */
@import '@/styles/categories.css';
</style>