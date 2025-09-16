<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'

// Types
interface User {
    id: number
    name: string
    email: string
    avatar: string
    plan: string
    recipesCreated: number
    recipesLiked: number
    followers: number
    following: number
    joinedDate: string
}

interface Recipe {
    id: number
    title: string
    category: string
    image: string
    rating: number
    likes: number
    cookingTime: number
    difficulty: 'Easy' | 'Medium' | 'Hard'
    author: string
    createdAt: string
    isBookmarked?: boolean
}

interface Analytics {
    totalRecipes: number
    totalLikes: number
    totalViews: number
    totalFollowers: number
    weeklyGrowth: number
    monthlyGrowth: number
}

interface Activity {
    id: number
    type: 'like' | 'comment' | 'follow' | 'recipe_created' | 'recipe_shared'
    message: string
    timestamp: string
    user?: string
    recipe?: string
}

// Reactive state
const activeTab = ref<string>('overview')
const user = ref<User>({
    id: 1,
    name: 'Chef Alexander',
    email: 'chef.alexander@delicious24.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&face=center',
    plan: 'User\'s Choice',
    recipesCreated: 47,
    recipesLiked: 1248,
    followers: 3420,
    following: 892,
    joinedDate: '2023-03-15'
})

const analytics = reactive<Analytics>({
    totalRecipes: 47,
    totalLikes: 12840,
    totalViews: 45320,
    totalFollowers: 3420,
    weeklyGrowth: 12.5,
    monthlyGrowth: 34.2
})

const recentRecipes = reactive<Recipe[]>([
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

const favoriteRecipes = reactive<Recipe[]>([
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

const recentActivity = reactive<Activity[]>([
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
    }
])

// Computed properties
const totalEngagement = computed(() =>
    analytics.totalLikes + analytics.totalViews + analytics.totalFollowers
)

const averageRating = computed(() => {
    const total = recentRecipes.reduce((sum, recipe) => sum + recipe.rating, 0)
    return (total / recentRecipes.length).toFixed(1)
})

const bookmarkedCount = computed(() =>
    [...recentRecipes, ...favoriteRecipes].filter(recipe => recipe.isBookmarked).length
)

// Methods
const setActiveTab = (tab: string): void => {
    activeTab.value = tab
}

const toggleBookmark = (recipe: Recipe): void => {
    recipe.isBookmarked = !recipe.isBookmarked
}

const generateStars = (rating: number): string => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    return '★'.repeat(fullStars) + (hasHalfStar ? '☆' : '')
}

const formatNumber = (num: number): string => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}k`
    return num.toString()
}

const getDifficultyColor = (difficulty: string): string => {
    switch (difficulty) {
        case 'Easy': return '#4ade80'
        case 'Medium': return '#fbbf24'
        case 'Hard': return '#ef4444'
        default: return '#6b7280'
    }
}

const getActivityIcon = (type: string): string => {
    switch (type) {
        case 'like': return '❤️'
        case 'comment': return '💬'
        case 'follow': return '👤'
        case 'recipe_created': return '🍳'
        case 'recipe_shared': return '🔄'
        default: return '📝'
    }
}

// Lifecycle
onMounted(() => {
    // Simulate real-time updates
    setInterval(() => {
        analytics.totalViews += Math.floor(Math.random() * 10)
    }, 5000)
})
</script>

<template>
    <div class="dashboard">
        <!-- Dashboard Header -->
        <header class="dashboard-header">
            <div class="user-info">
                <img :src="user.avatar" :alt="user.name" class="user-avatar" />
                <div class="user-details">
                    <h1 class="user-name">Welcome back, {{ user.name }}! 👋</h1>
                    <p class="user-subtitle">
                        Ready to create something delicious today?
                    </p>
                    <div class="user-stats">
                        <span class="stat">
                            <strong>{{ user.recipesCreated }}</strong> recipes
                        </span>
                        <span class="stat">
                            <strong>{{ formatNumber(user.followers) }}</strong> followers
                        </span>
                        <span class="stat">
                            <strong>{{ user.plan }}</strong> plan
                        </span>
                    </div>
                </div>
            </div>
            <div class="quick-actions">
                <button class="action-btn primary">
                    <span class="btn-icon">➕</span>
                    New Recipe
                </button>
                <button class="action-btn secondary">
                    <span class="btn-icon">📊</span>
                    Analytics
                </button>
            </div>
        </header>

        <!-- Navigation Tabs -->
        <nav class="dashboard-tabs">
            <button v-for="tab in ['overview', 'recipes', 'favorites', 'activity', 'settings']" :key="tab"
                class="tab-btn" :class="{ active: activeTab === tab }" @click="setActiveTab(tab)">
                {{ tab.charAt(0).toUpperCase() + tab.slice(1) }}
            </button>
        </nav>

        <!-- Dashboard Content -->
        <main class="dashboard-content">
            <!-- Overview Tab -->
            <section v-if="activeTab === 'overview'" class="overview-section">
                <!-- Analytics Cards -->
                <div class="analytics-grid">
                    <div class="analytics-card">
                        <div class="card-header">
                            <h3>Total Recipes</h3>
                            <span class="card-icon">🍳</span>
                        </div>
                        <div class="card-value">{{ analytics.totalRecipes }}</div>
                        <div class="card-growth positive">
                            ↗️ +{{ analytics.weeklyGrowth }}% this week
                        </div>
                    </div>

                    <div class="analytics-card">
                        <div class="card-header">
                            <h3>Total Likes</h3>
                            <span class="card-icon">❤️</span>
                        </div>
                        <div class="card-value">{{ formatNumber(analytics.totalLikes) }}</div>
                        <div class="card-growth positive">
                            ↗️ +{{ analytics.monthlyGrowth }}% this month
                        </div>
                    </div>

                    <div class="analytics-card">
                        <div class="card-header">
                            <h3>Recipe Views</h3>
                            <span class="card-icon">👁️</span>
                        </div>
                        <div class="card-value">{{ formatNumber(analytics.totalViews) }}</div>
                        <div class="card-growth positive">
                            ↗️ +18.7% this month
                        </div>
                    </div>

                    <div class="analytics-card">
                        <div class="card-header">
                            <h3>Followers</h3>
                            <span class="card-icon">👥</span>
                        </div>
                        <div class="card-value">{{ formatNumber(analytics.totalFollowers) }}</div>
                        <div class="card-growth positive">
                            ↗️ +{{ analytics.weeklyGrowth }}% this week
                        </div>
                    </div>
                </div>

                <!-- Recent Activity & Quick Stats -->
                <div class="overview-grid">
                    <div class="activity-preview">
                        <h3 class="section-title">Recent Activity</h3>
                        <div class="activity-list">
                            <div v-for="activity in recentActivity.slice(0, 4)" :key="activity.id"
                                class="activity-item">
                                <span class="activity-icon">{{ getActivityIcon(activity.type) }}</span>
                                <div class="activity-content">
                                    <p class="activity-message">{{ activity.message }}</p>
                                    <span class="activity-time">{{ activity.timestamp }}</span>
                                </div>
                            </div>
                        </div>
                        <button class="view-all-btn">View All Activity</button>
                    </div>

                    <div class="quick-stats">
                        <h3 class="section-title">Quick Stats</h3>
                        <div class="stats-list">
                            <div class="stat-item">
                                <span class="stat-label">Average Rating</span>
                                <span class="stat-value">{{ averageRating }} ⭐</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Bookmarked Recipes</span>
                                <span class="stat-value">{{ bookmarkedCount }} 📑</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Total Engagement</span>
                                <span class="stat-value">{{ formatNumber(totalEngagement) }} 🎯</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Member Since</span>
                                <span class="stat-value">{{ new Date(user.joinedDate).getFullYear() }} 📅</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- My Recipes Tab -->
            <section v-if="activeTab === 'recipes'" class="recipes-section">
                <div class="section-header">
                    <h2 class="section-title">My Recipes ({{ recentRecipes.length }})</h2>
                    <button class="filter-btn">Filter & Sort</button>
                </div>

                <div class="recipes-grid">
                    <div v-for="recipe in recentRecipes" :key="recipe.id" class="recipe-card">
                        <div class="recipe-image-container">
                            <img :src="recipe.image" :alt="recipe.title" class="recipe-image" loading="lazy" />
                            <button class="bookmark-btn" :class="{ bookmarked: recipe.isBookmarked }"
                                @click="toggleBookmark(recipe)">
                                {{ recipe.isBookmarked ? '🔖' : '📑' }}
                            </button>
                            <div class="recipe-difficulty">
                                <span class="difficulty-badge"
                                    :style="{ backgroundColor: getDifficultyColor(recipe.difficulty) }">
                                    {{ recipe.difficulty }}
                                </span>
                            </div>
                        </div>

                        <div class="recipe-content">
                            <h3 class="recipe-title">{{ recipe.title }}</h3>
                            <p class="recipe-category">{{ recipe.category }}</p>

                            <div class="recipe-meta">
                                <div class="recipe-rating">
                                    <span class="stars">{{ generateStars(recipe.rating) }}</span>
                                    <span class="rating-number">{{ recipe.rating }}</span>
                                </div>

                                <div class="recipe-stats">
                                    <span class="stat">❤️ {{ formatNumber(recipe.likes) }}</span>
                                    <span class="stat">⏱️ {{ recipe.cookingTime }}min</span>
                                </div>
                            </div>

                            <div class="recipe-actions">
                                <button class="recipe-action-btn edit">✏️ Edit</button>
                                <button class="recipe-action-btn view">👁️ View</button>
                                <button class="recipe-action-btn share">🔄 Share</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Favorites Tab -->
            <section v-if="activeTab === 'favorites'" class="favorites-section">
                <div class="section-header">
                    <h2 class="section-title">Favorite Recipes ({{ favoriteRecipes.length }})</h2>
                    <button class="filter-btn">Filter by Category</button>
                </div>

                <div class="recipes-grid">
                    <div v-for="recipe in favoriteRecipes" :key="recipe.id" class="recipe-card favorite">
                        <div class="recipe-image-container">
                            <img :src="recipe.image" :alt="recipe.title" class="recipe-image" loading="lazy" />
                            <button class="bookmark-btn bookmarked" @click="toggleBookmark(recipe)">
                                🔖
                            </button>
                            <div class="recipe-difficulty">
                                <span class="difficulty-badge"
                                    :style="{ backgroundColor: getDifficultyColor(recipe.difficulty) }">
                                    {{ recipe.difficulty }}
                                </span>
                            </div>
                        </div>

                        <div class="recipe-content">
                            <h3 class="recipe-title">{{ recipe.title }}</h3>
                            <p class="recipe-author">by {{ recipe.author }}</p>

                            <div class="recipe-meta">
                                <div class="recipe-rating">
                                    <span class="stars">{{ generateStars(recipe.rating) }}</span>
                                    <span class="rating-number">{{ recipe.rating }}</span>
                                </div>

                                <div class="recipe-stats">
                                    <span class="stat">❤️ {{ formatNumber(recipe.likes) }}</span>
                                    <span class="stat">⏱️ {{ recipe.cookingTime }}min</span>
                                </div>
                            </div>

                            <div class="recipe-actions">
                                <button class="recipe-action-btn cook">🍳 Cook Now</button>
                                <button class="recipe-action-btn view">👁️ View</button>
                                <button class="recipe-action-btn remove">❌ Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Activity Tab -->
            <section v-if="activeTab === 'activity'" class="activity-section">
                <div class="section-header">
                    <h2 class="section-title">Activity Feed</h2>
                    <button class="filter-btn">Filter Activity</button>
                </div>

                <div class="activity-feed">
                    <div v-for="activity in recentActivity" :key="activity.id" class="activity-item-detailed">
                        <div class="activity-icon-large">
                            {{ getActivityIcon(activity.type) }}
                        </div>
                        <div class="activity-details">
                            <p class="activity-message-detailed">{{ activity.message }}</p>
                            <span class="activity-timestamp">{{ activity.timestamp }}</span>
                            <div v-if="activity.user" class="activity-user">
                                <span class="user-tag">@{{ activity.user }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Settings Tab -->
            <section v-if="activeTab === 'settings'" class="settings-section">
                <div class="section-header">
                    <h2 class="section-title">Account Settings</h2>
                </div>

                <div class="settings-grid">
                    <div class="settings-card">
                        <h3>Profile Information</h3>
                        <div class="settings-item">
                            <label>Display Name</label>
                            <input type="text" :value="user.name" class="settings-input" />
                        </div>
                        <div class="settings-item">
                            <label>Email Address</label>
                            <input type="email" :value="user.email" class="settings-input" />
                        </div>
                        <button class="settings-btn primary">Update Profile</button>
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
                        <button class="settings-btn secondary">Change Plan</button>
                    </div>

                    <div class="settings-card">
                        <h3>Notifications</h3>
                        <div class="notification-settings">
                            <label class="switch">
                                <input type="checkbox" checked />
                                <span class="slider"></span>
                                Email notifications
                            </label>
                            <label class="switch">
                                <input type="checkbox" checked />
                                <span class="slider"></span>
                                New follower alerts
                            </label>
                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider"></span>
                                Recipe recommendations
                            </label>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<style scoped>
.dashboard {
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Dashboard Header */
.dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 2rem;
    margin-bottom: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.user-info {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.user-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 4px solid rgba(255, 255, 255, 0.3);
    object-fit: cover;
}

.user-details {
    color: white;
}

.user-name {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.user-subtitle {
    font-size: 1.1rem;
    opacity: 0.9;
    margin-bottom: 1rem;
}

.user-stats {
    display: flex;
    gap: 2rem;
}

.stat {
    font-size: 0.9rem;
    opacity: 0.8;
}

.quick-actions {
    display: flex;
    gap: 1rem;
}

.action-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.action-btn.primary {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    color: white;
}

.action-btn.secondary {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.action-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Navigation Tabs */
.dashboard-tabs {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    overflow-x: auto;
    padding-bottom: 0.5rem;
}

.tab-btn {
    padding: 1rem 2rem;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 25px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.tab-btn:hover,
.tab-btn.active {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

/* Dashboard Content */
.dashboard-content {
    animation: fadeIn 0.5s ease;
}

/* Overview Section */
.analytics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.analytics-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 15px;
    padding: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
}

.analytics-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.card-header h3 {
    color: white;
    font-size: 0.9rem;
    opacity: 0.8;
}

.card-icon {
    font-size: 1.5rem;
}

.card-value {
    font-size: 2.5rem;
    font-weight: bold;
    color: white;
    margin-bottom: 0.5rem;
}

.card-growth {
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;
}

.card-growth.positive {
    color: #4ade80;
}

.overview-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    margin-top: 2rem;
}

.activity-preview,
.quick-stats {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 15px;
    padding: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.section-title {
    color: white;
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
}

.activity-list {
    space-y: 1rem;
}

.activity-item {
    display: flex;
    align-items: start;
    gap: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.activity-item:last-child {
    border-bottom: none;
}

.activity-icon {
    font-size: 1.2rem;
    width: 30px;
    text-align: center;
}

.activity-content {
    flex: 1;
}

.activity-message {
    color: white;
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
}

.activity-time {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.8rem;
}

.view-all-btn {
    width: 100%;
    padding: 0.8rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1rem;
}

.view-all-btn:hover {
    background: rgba(255, 255, 255, 0.2);
}

.stats-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.stat-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.stat-label {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
}

.stat-value {
    color: white;
    font-weight: 600;
}

/* Recipes Section */
.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.filter-btn {
    background: rgba(255, 255, 255, 0.1);
}
</style>