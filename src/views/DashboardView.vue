<template>
  <div class="barista-dashboard">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <img :src="user.avatar" :alt="user.name" class="user-avatar" />
          <div class="user-info">
            <em class="small-text">welcome back</em>
            <h1>{{ user.name }}</h1>
            <p class="hero-subtitle">
              your <em>favourite</em> recipes daily lives.
            </p>
            <div class="user-stats">
              <span><strong>{{ user.recipesCreated }}</strong> recipes</span>
              <span><strong>{{ formatNumber(user.followers) }}</strong> followers</span>
              <span><strong>{{ user.plan }}</strong> plan</span>
            </div>
          </div>
          <div class="hero-actions">
            <button class="btn custom-btn custom-border-btn">
              New Recipe
            </button>
            <button class="btn custom-btn">
              <strong>Analytics</strong>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigation Tabs -->
    <nav class="dashboard-nav">
      <div class="nav-container">
        <button v-for="tab in tabs" :key="tab" class="nav-tab" :class="{ active: activeTab === tab }"
          @click="activeTab = tab">
          {{ tab.charAt(0).toUpperCase() + tab.slice(1) }}
        </button>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Overview Tab -->
      <section v-if="activeTab === 'overview'" class="section-padding">
        <!-- Analytics Cards -->
        <div class="analytics-grid">
          <div v-for="(stat, idx) in analyticsStats" :key="idx" class="analytics-card">
            <div class="card-header">
              <h3>{{ stat.label }}</h3>
              <span class="card-icon">{{ stat.icon }}</span>
            </div>
            <div class="card-value">{{ stat.value }}</div>
            <div class="card-growth">
              ↗️ +{{ stat.growth }}% growth
            </div>
          </div>
        </div>

        <!-- Recent Activity & Stats -->
        <div class="overview-grid">
          <div class="activity-section">
            <h3 class="section-title">Recent Activity</h3>
            <div class="activity-list">
              <div v-for="activity in recentActivity.slice(0, 4)" :key="activity.id" class="activity-item">
                <span class="activity-icon">{{ getActivityIcon(activity.type) }}</span>
                <div class="activity-content">
                  <p>{{ activity.message }}</p>
                  <span class="activity-time">{{ activity.timestamp }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="stats-section">
            <h3 class="section-title">Quick Stats</h3>
            <div class="stats-list">
              <div v-for="(stat, idx) in quickStats" :key="idx" class="stat-item">
                <span class="stat-label">{{ stat.label }}</span>
                <span class="stat-value">{{ stat.value }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Recipes Preview -->
        <div class="recent-recipes">
          <div class="section-header">
            <h3 class="section-title">Latest Recipes</h3>
            <button class="btn-link" @click="activeTab = 'recipes'">
              View All
            </button>
          </div>
          <div class="recipes-preview-grid">
            <div v-for="recipe in recentRecipes.slice(0, 3)" :key="recipe.id" class="recipe-preview-card">
              <div class="recipe-image-container">
                <img :src="recipe.image" :alt="recipe.title" />
              </div>
              <div class="recipe-content">
                <h4>{{ recipe.title }}</h4>
                <div class="recipe-meta">
                  <span>{{ recipe.rating }}⭐</span>
                  <span>{{ formatNumber(recipe.likes) }}❤️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Recipes Tab -->
      <section v-if="activeTab === 'recipes'" class="section-padding">
        <div class="section-header">
          <h2 class="section-title">My Recipes ({{ recentRecipes.length }})</h2>
          <div class="section-actions">
            <button class="btn custom-border-btn" @click="showRecipeFilters = !showRecipeFilters">
              🔍 Filter
            </button>
            <button class="btn custom-btn">
              ➕ <strong>New Recipe</strong>
            </button>
          </div>
        </div>

        <!-- Recipe Filters -->
        <div v-if="showRecipeFilters" class="filters-section">
          <div class="filters-row">
            <input v-model="recipeSearchQuery" type="text" placeholder="Search recipes..." class="filter-input" />
            <select v-model="recipeCategory" class="filter-select">
              <option value="">All Categories</option>
              <option v-for="cat in recipeCategories" :key="cat" :value="cat">
                {{ cat }}
              </option>
            </select>
            <select v-model="recipeDifficulty" class="filter-select">
              <option value="">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
        </div>

        <!-- Recipes Grid -->
        <div class="recipes-grid">
          <div v-for="recipe in filteredRecipes" :key="recipe.id" class="recipe-card">
            <div class="recipe-image-wrap">
              <img :src="recipe.image" :alt="recipe.title" />
              <span class="difficulty-badge" :style="{ background: getDifficultyColor(recipe.difficulty) }">
                {{ recipe.difficulty }}
              </span>
            </div>
            <div class="recipe-info">
              <h3>{{ recipe.title }}</h3>
              <p class="recipe-category">{{ recipe.category }}</p>
              <div class="recipe-stats">
                <div class="rating">
                  <span>{{ generateStars(recipe.rating) }}</span>
                  <strong>{{ recipe.rating }}</strong>
                </div>
                <div class="stats-row">
                  <span>❤️ {{ formatNumber(recipe.likes) }}</span>
                  <span>⏱️ {{ recipe.cookingTime }}min</span>
                </div>
              </div>
              <div class="recipe-actions">
                <button class="action-btn">✏️ Edit</button>
                <button class="action-btn">👁️ View</button>
                <button class="action-btn">🔄 Share</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Favorites Tab -->
      <section v-if="activeTab === 'favorites'" class="section-padding">
        <div class="section-header">
          <h2 class="section-title">Favorite Recipes ({{ favoriteRecipes.length }})</h2>
          <button class="btn custom-border-btn" @click="showFavoriteFilters = !showFavoriteFilters">
            🔍 Filter
          </button>
        </div>

        <!-- Favorite Filters -->
        <div v-if="showFavoriteFilters" class="filters-section">
          <div class="filters-row">
            <input v-model="favoriteSearchQuery" type="text" placeholder="Search favorites..." class="filter-input" />
            <select v-model="favoriteCategory" class="filter-select">
              <option value="">All Categories</option>
              <option v-for="cat in favoriteCategories" :key="cat" :value="cat">
                {{ cat }}
              </option>
            </select>
          </div>
        </div>

        <!-- Favorites Grid -->
        <div class="recipes-grid">
          <div v-for="recipe in filteredFavorites" :key="recipe.id" class="recipe-card">
            <div class="recipe-image-wrap">
              <img :src="recipe.image" :alt="recipe.title" />
              <span class="difficulty-badge" :style="{ background: getDifficultyColor(recipe.difficulty) }">
                {{ recipe.difficulty }}
              </span>
              <button class="bookmark-btn active">🔖</button>
            </div>
            <div class="recipe-info">
              <h3>{{ recipe.title }}</h3>
              <p class="recipe-author">by {{ recipe.author }}</p>
              <div class="recipe-stats">
                <div class="rating">
                  <span>{{ generateStars(recipe.rating) }}</span>
                  <strong>{{ recipe.rating }}</strong>
                </div>
                <div class="stats-row">
                  <span>❤️ {{ formatNumber(recipe.likes) }}</span>
                  <span>⏱️ {{ recipe.cookingTime }}min</span>
                </div>
              </div>
              <div class="recipe-actions">
                <button class="action-btn">🍳 Cook</button>
                <button class="action-btn">👁️ View</button>
                <button class="action-btn">❌ Remove</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Activity Tab -->
      <section v-if="activeTab === 'activity'" class="section-padding">
        <div class="section-header">
          <h2 class="section-title">Activity Feed</h2>
          <select v-model="activityFilter" class="filter-select">
            <option value="">All Activity</option>
            <option value="like">Likes</option>
            <option value="comment">Comments</option>
            <option value="follow">Follows</option>
            <option value="recipe_created">Recipe Created</option>
            <option value="recipe_shared">Recipe Shared</option>
          </select>
        </div>

        <div class="activity-feed">
          <div v-for="activity in filteredActivity" :key="activity.id" class="activity-item-detailed">
            <div class="activity-icon-large">
              {{ getActivityIcon(activity.type) }}
            </div>
            <div class="activity-details">
              <p>{{ activity.message }}</p>
              <span class="activity-timestamp">{{ activity.timestamp }}</span>
              <div v-if="activity.user" class="activity-user">
                <span class="user-tag">@{{ activity.user }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Settings Tab -->
      <section v-if="activeTab === 'settings'" class="section-padding">
        <div class="section-header">
          <h2 class="section-title">Account Settings</h2>
        </div>

        <div class="settings-grid">
          <div class="settings-card">
            <h3>Profile Information</h3>
            <div class="settings-item">
              <label>Display Name</label>
              <input v-model="userSettings.name" type="text" class="settings-input" />
            </div>
            <div class="settings-item">
              <label>Email Address</label>
              <input v-model="userSettings.email" type="email" class="settings-input" />
            </div>
            <div class="settings-item">
              <label>Bio</label>
              <textarea v-model="userSettings.bio" class="settings-textarea" rows="3"
                placeholder="Tell us about yourself..."></textarea>
            </div>
            <button class="btn custom-btn">Update Profile</button>
          </div>

          <div class="settings-card">
            <h3>Subscription Plan</h3>
            <div class="current-plan">
              <span class="plan-name">{{ user.plan }}</span>
              <span class="plan-badge">ACTIVE</span>
            </div>
            <p class="plan-description">
              Premium access to all recipes and features
            </p>
            <div class="plan-features">
              <div class="feature-item">✅ Unlimited recipe access</div>
              <div class="feature-item">✅ Video tutorials</div>
              <div class="feature-item">✅ Chef consultations</div>
            </div>
            <button class="btn custom-border-btn">Change Plan</button>
          </div>

          <div class="settings-card">
            <h3>Notifications</h3>
            <div class="notification-settings">
              <label class="switch-label">
                <input v-model="userSettings.emailNotifications" type="checkbox" />
                <span class="switch-text">Email notifications</span>
              </label>
              <label class="switch-label">
                <input v-model="userSettings.followerAlerts" type="checkbox" />
                <span class="switch-text">New follower alerts</span>
              </label>
              <label class="switch-label">
                <input v-model="userSettings.recipeRecommendations" type="checkbox" />
                <span class="switch-text">Recipe recommendations</span>
              </label>
              <label class="switch-label">
                <input v-model="userSettings.marketingEmails" type="checkbox" />
                <span class="switch-text">Marketing emails</span>
              </label>
            </div>
            <button class="btn custom-btn">Save Preferences</button>
          </div>

          <div class="settings-card">
            <h3>Privacy & Security</h3>
            <div class="settings-item">
              <label>Profile Visibility</label>
              <select v-model="userSettings.profileVisibility" class="settings-select">
                <option value="public">Public</option>
                <option value="friends">Friends Only</option>
                <option value="private">Private</option>
              </select>
            </div>
            <div class="settings-item">
              <label>Recipe Sharing</label>
              <select v-model="userSettings.recipeSharing" class="settings-select">
                <option value="public">Anyone can share</option>
                <option value="ask">Ask permission first</option>
                <option value="disabled">Disable sharing</option>
              </select>
            </div>
            <button class="btn custom-btn">Update Privacy</button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('overview')
const showRecipeFilters = ref(false)
const showFavoriteFilters = ref(false)
const recipeSearchQuery = ref('')
const favoriteSearchQuery = ref('')
const recipeCategory = ref('')
const favoriteCategory = ref('')
const recipeDifficulty = ref('')
const activityFilter = ref('')

const tabs = ['overview', 'recipes', 'favorites', 'activity', 'settings']

const user = ref({
  id: 1,
  name: 'Chef Alexander',
  email: 'chef.alexander@delicious24.com',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&face=center',
  plan: "User's Choice",
  recipesCreated: 47,
  recipesLiked: 1248,
  followers: 3420,
  following: 892,
  joinedDate: '2023-03-15'
})

const userSettings = ref({
  name: 'Chef Alexander',
  email: 'chef.alexander@delicious24.com',
  bio: 'Passionate chef creating delicious recipes for food lovers worldwide.',
  emailNotifications: true,
  followerAlerts: true,
  recipeRecommendations: false,
  marketingEmails: false,
  profileVisibility: 'public',
  recipeSharing: 'public'
})

const analytics = {
  totalRecipes: 47,
  totalLikes: 12840,
  totalViews: 45320,
  totalFollowers: 3420,
  weeklyGrowth: 12.5,
  monthlyGrowth: 34.2
}

const recentRecipes = ref([
  {
    id: 1,
    title: 'Spicy Thai Green Curry',
    category: 'Asian Cuisine',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=300&h=200&fit=crop',
    rating: 4.8,
    likes: 342,
    cookingTime: 45,
    difficulty: 'Medium',
    author: 'Chef Alexander',
    createdAt: '2024-09-10',
    isBookmarked: true
  },
  {
    id: 2,
    title: 'Classic Italian Carbonara',
    category: 'Pasta',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=200&fit=crop',
    rating: 4.9,
    likes: 567,
    cookingTime: 25,
    difficulty: 'Easy',
    author: 'Chef Alexander',
    createdAt: '2024-09-08',
    isBookmarked: false
  },
  {
    id: 3,
    title: 'Chocolate Lava Cake',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=300&h=200&fit=crop',
    rating: 4.7,
    likes: 892,
    cookingTime: 35,
    difficulty: 'Hard',
    author: 'Chef Alexander',
    createdAt: '2024-09-05',
    isBookmarked: true
  },
  {
    id: 4,
    title: 'Mediterranean Quinoa Bowl',
    category: 'Healthy Options',
    image: 'https://images.unsplash.com/photo-1544510669-7ad5ac882d5d?w=300&h=200&fit=crop',
    rating: 4.6,
    likes: 234,
    cookingTime: 20,
    difficulty: 'Easy',
    author: 'Chef Alexander',
    createdAt: '2024-09-03',
    isBookmarked: false
  }
])

const favoriteRecipes = ref([
  {
    id: 5,
    title: 'Beef Wellington',
    category: 'Comfort Food',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=300&h=200&fit=crop',
    rating: 4.9,
    likes: 1234,
    cookingTime: 180,
    difficulty: 'Hard',
    author: 'Chef Gordon',
    createdAt: '2024-08-28',
    isBookmarked: true
  },
  {
    id: 6,
    title: 'Japanese Ramen Bowl',
    category: 'Asian Cuisine',
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=300&h=200&fit=crop',
    rating: 4.8,
    likes: 987,
    cookingTime: 90,
    difficulty: 'Medium',
    author: 'Chef Takeshi',
    createdAt: '2024-08-25',
    isBookmarked: true
  },
  {
    id: 7,
    title: 'French Macarons',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=300&h=200&fit=crop',
    rating: 4.7,
    likes: 654,
    cookingTime: 120,
    difficulty: 'Hard',
    author: 'Chef Marie',
    createdAt: '2024-08-20',
    isBookmarked: true
  }
])

const recentActivity = [
  {
    id: 1,
    type: 'like',
    message: 'Sarah liked your "Spicy Thai Green Curry" recipe',
    timestamp: '2 hours ago',
    user: 'Sarah'
  },
  {
    id: 2,
    type: 'follow',
    message: 'Mike started following you',
    timestamp: '4 hours ago',
    user: 'Mike'
  },
  {
    id: 3,
    type: 'comment',
    message: 'Emma commented on your "Italian Carbonara"',
    timestamp: '6 hours ago',
    user: 'Emma'
  },
  {
    id: 4,
    type: 'recipe_created',
    message: 'You published "Mediterranean Quinoa Bowl"',
    timestamp: '1 day ago'
  },
  {
    id: 5,
    type: 'recipe_shared',
    message: 'Your "Chocolate Lava Cake" was shared 15 times',
    timestamp: '2 days ago'
  },
  {
    id: 6,
    type: 'like',
    message: 'John liked your "Classic Italian Carbonara" recipe',
    timestamp: '3 days ago',
    user: 'John'
  }
]

const analyticsStats = computed(() => [
  { label: 'Total Recipes', value: analytics.totalRecipes, icon: '🍳', growth: analytics.weeklyGrowth },
  { label: 'Total Likes', value: formatNumber(analytics.totalLikes), icon: '❤️', growth: analytics.monthlyGrowth },
  { label: 'Recipe Views', value: formatNumber(analytics.totalViews), icon: '👁️', growth: 18.7 },
  { label: 'Followers', value: formatNumber(analytics.totalFollowers), icon: '👥', growth: analytics.weeklyGrowth }
])

const quickStats = [
  { label: 'Average Rating', value: '4.7 ⭐' },
  { label: 'Bookmarked Recipes', value: '8 📑' },
  { label: 'Total Engagement', value: formatNumber(61580) + ' 🎯' },
  { label: 'Member Since', value: '2023 📅' }
]

const recipeCategories = computed(() =>
  Array.from(new Set(recentRecipes.value.map(recipe => recipe.category)))
)

const favoriteCategories = computed(() =>
  Array.from(new Set(favoriteRecipes.value.map(recipe => recipe.category)))
)

const filteredRecipes = computed(() => {
  return recentRecipes.value.filter(recipe => {
    const matchesSearch = !recipeSearchQuery.value ||
      recipe.title.toLowerCase().includes(recipeSearchQuery.value.toLowerCase())
    const matchesCategory = !recipeCategory.value || recipe.category === recipeCategory.value
    const matchesDifficulty = !recipeDifficulty.value || recipe.difficulty === recipeDifficulty.value

    return matchesSearch && matchesCategory && matchesDifficulty
  })
})

const filteredFavorites = computed(() => {
  return favoriteRecipes.value.filter(recipe => {
    const matchesSearch = !favoriteSearchQuery.value ||
      recipe.title.toLowerCase().includes(favoriteSearchQuery.value.toLowerCase())
    const matchesCategory = !favoriteCategory.value || recipe.category === favoriteCategory.value

    return matchesSearch && matchesCategory
  })
})

const filteredActivity = computed(() => {
  return recentActivity.filter(activity => {
    return !activityFilter.value || activity.type === activityFilter.value
  })
})

function formatNumber(num) {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
  if (num >= 1000) return `${(num / 1000).toFixed(1)}k`
  return num.toString()
}

function generateStars(rating) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  return '★'.repeat(fullStars) + (hasHalfStar ? '☆' : '')
}

function getDifficultyColor(difficulty) {
  switch (difficulty) {
    case 'Easy': return '#13795b'
    case 'Medium': return '#f59e0b'
    case 'Hard': return '#dc2626'
    default: return '#6b7280'
  }
}

function getActivityIcon(type) {
  switch (type) {
    case 'like': return '❤️'
    case 'comment': return '💬'
    case 'follow': return '👤'
    case 'recipe_created': return '🍳'
    case 'recipe_shared': return '🔄'
    default: return '📝'
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,400;0,600;0,700;1,200;1,700&display=swap');

.barista-dashboard {
  min-height: 100vh;
  background: #13795b;
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #fff;
}

/* Hero Section */
.hero-section {
  position: relative;
  padding: 4rem 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
    url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=400&fit=crop');
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
}

.hero-content {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.user-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.3);
  object-fit: cover;
}

.user-info {
  flex: 1;
  min-width: 250px;
}

.small-text {
  font-size: 0.9rem;
  text-transform: lowercase;
  opacity: 0.9;
  display: block;
  margin-bottom: 0.5rem;
  font-style: italic;
}

.user-info h1 {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 1.5rem;
}

.hero-subtitle em {
  font-style: italic;
}

.user-stats {
  display: flex;
  gap: 2rem;
  font-size: 0.9rem;
  flex-wrap: wrap;
}

.hero-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.btn {
  padding: 0.875rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  border: none;
}

.custom-btn {
  background: #fff;
  color: #13795b;
}

.custom-border-btn {
  background: transparent;
  border: 2px solid #fff;
  color: #fff;
}

.custom-btn:hover,
.custom-border-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Navigation */
.dashboard-nav {
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
}

.nav-tab {
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: none;
  border-radius: 50px;
  color: #fff;
  font-weight: 500;
  cursor: pointer
}
</style>