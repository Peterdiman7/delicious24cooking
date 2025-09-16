<template>
    <div class="app">
        <!-- Header -->
        <header class="header">
            <nav class="nav-container">
                <div class="logo">Delicious24Cooking</div>
                <div class="nav-links">
                    <a href="#" class="nav-link" :class="{ active: activeSection === 'dashboard' }"
                        @click="setActiveSection('dashboard')">
                        Dashboard
                    </a>
                    <a href="#" class="nav-link" :class="{ active: activeSection === 'categories' }"
                        @click="setActiveSection('categories')">
                        Categories
                    </a>
                    <div class="pricing-dropdown">
                        <a href="#" class="nav-link" @click="togglePricingDropdown">
                            Payment Plans ▼
                        </a>
                        <div class="dropdown-content" :class="{ show: showPricingDropdown }">
                            <div v-for="plan in pricingPlans" :key="plan.id" class="pricing-option"
                                @click="setActiveSection('payment')">
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
                </div>
                <div class="mobile-menu">☰</div>
            </nav>
        </header>

        <!-- Main Content -->
        <main class="main-content">
            <!-- Hero Section -->
            <section class="hero-section">
                <h1 class="hero-title">Welcome to Delicious24Cooking</h1>
                <p class="hero-subtitle">
                    Discover amazing recipes from around the world, created by passionate chefs
                </p>
            </section>

            <!-- Search Bar -->
            <div class="search-section">
                <div class="search-container">
                    <input v-model="searchQuery" type="text" placeholder="Search recipes by category or description..."
                        class="search-input" />
                    <div class="search-icon">🔍</div>
                </div>
            </div>

            <!-- Categories Grid -->
            <section class="categories-section">
                <h2 class="section-title">Recipe Categories</h2>
                <div class="categories-grid">
                    <div v-for="category in filteredCategories" :key="category.id" class="category-card"
                        @click="selectCategory(category)">
                        <div class="card-image-container">
                            <img :src="category.image" :alt="category.name" class="category-image" loading="lazy" />
                            <div class="recipe-count">{{ category.recipeCount }} recipes</div>
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

                            <div class="author">
                                By {{ category.author }}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- No Results -->
            <div v-if="filteredCategories.length === 0" class="no-results">
                <h3>No categories found</h3>
                <p>Try searching with different keywords</p>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'

interface Category {
    id: number
    name: string
    description: string
    image: string
    rating: number
    likes: number
    author: string
    recipeCount: number
}

interface PricingPlan {
    id: string
    name: string
    icon: string
    price: string
    isBest?: boolean
    features: string[]
}

const activeSection = ref<string>('dashboard')
const showPricingDropdown = ref<boolean>(false)
const searchQuery = ref<string>('')
const selectedCategory = ref<Category | null>(null)

const pricingPlans: PricingPlan[] = reactive([
    {
        id: 'family',
        name: 'Family Plan',
        icon: '👨‍👩‍👧‍👦',
        price: '$19/mo',
        features: ['Up to 6 users', 'Unlimited recipes', 'Family meal planning']
    },
    {
        id: 'premium',
        name: "User's Choice",
        icon: '⭐',
        price: '$12/mo',
        isBest: true,
        features: ['Premium recipes', 'Video tutorials', 'Chef consultations']
    },
    {
        id: 'individual',
        name: 'Individual',
        icon: '👤',
        price: '$8/mo',
        features: ['Personal recipes', 'Basic features', 'Mobile access']
    },
    {
        id: 'business',
        name: 'Business',
        icon: '🏢',
        price: '$49/mo',
        features: ['Commercial use', 'Team collaboration', 'Advanced analytics']
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
        recipeCount: 156
    },
    {
        id: 2,
        name: 'Desserts',
        description: 'Sweet treats and decadent desserts to satisfy your cravings',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=300&h=300&fit=crop',
        rating: 4.9,
        likes: 3200,
        author: 'Pastry Chef Anna',
        recipeCount: 203
    },
    {
        id: 3,
        name: 'Soups',
        description: 'Hearty soups and broths for comfort and warmth',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=300&fit=crop',
        rating: 4.7,
        likes: 1890,
        author: 'Chef Roberto',
        recipeCount: 142
    },
    {
        id: 4,
        name: 'Breakfast',
        description: 'Start your day right with nutritious breakfast options',
        image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=300&h=300&fit=crop',
        rating: 4.6,
        likes: 2780,
        author: 'Chef Sarah',
        recipeCount: 189
    },
    {
        id: 5,
        name: 'Pasta',
        description: 'Italian classics and creative pasta dishes',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=300&fit=crop',
        rating: 4.8,
        likes: 3450,
        author: 'Chef Giuseppe',
        recipeCount: 167
    },
    {
        id: 6,
        name: 'Salads',
        description: 'Fresh, healthy salads packed with flavor and nutrition',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop',
        rating: 4.5,
        likes: 2100,
        author: 'Chef Olivia',
        recipeCount: 134
    },
    {
        id: 7,
        name: 'BBQ & Grilling',
        description: 'Smoky barbecue and grilled specialties',
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=300&h=300&fit=crop',
        rating: 4.7,
        likes: 2890,
        author: 'Grill Master Jake',
        recipeCount: 98
    },
    {
        id: 8,
        name: 'Vegetarian',
        description: 'Plant-based meals that are both delicious and satisfying',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&h=300&fit=crop',
        rating: 4.6,
        likes: 3100,
        author: 'Chef Maya',
        recipeCount: 245
    },
    {
        id: 9,
        name: 'Seafood',
        description: 'Fresh fish and seafood prepared to perfection',
        image: 'https://images.unsplash.com/photo-1559847844-d942df1e2d91?w=300&h=300&fit=crop',
        rating: 4.8,
        likes: 2650,
        author: 'Chef Ocean',
        recipeCount: 178
    },
    {
        id: 10,
        name: 'Asian Cuisine',
        description: 'Authentic Asian flavors from across the continent',
        image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=300&h=300&fit=crop',
        rating: 4.9,
        likes: 4200,
        author: 'Chef Lin',
        recipeCount: 312
    },
    {
        id: 11,
        name: 'Mexican',
        description: 'Spicy and flavorful Mexican traditional dishes',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=300&fit=crop',
        rating: 4.7,
        likes: 3890,
        author: 'Chef Carlos',
        recipeCount: 234
    },
    {
        id: 12,
        name: 'Pizza',
        description: 'From classic margherita to gourmet specialty pizzas',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=300&fit=crop',
        rating: 4.8,
        likes: 5600,
        author: 'Pizzaiolo Marco',
        recipeCount: 87
    },
    {
        id: 13,
        name: 'Bread & Baking',
        description: 'Artisan breads and homemade baked goods',
        image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=300&h=300&fit=crop',
        rating: 4.6,
        likes: 2340,
        author: 'Baker Elena',
        recipeCount: 156
    },
    {
        id: 14,
        name: 'Smoothies',
        description: 'Healthy smoothies and fresh juice blends',
        image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=300&h=300&fit=crop',
        rating: 4.5,
        likes: 1890,
        author: 'Nutritionist Alex',
        recipeCount: 89
    },
    {
        id: 15,
        name: 'Indian Curry',
        description: 'Rich and aromatic Indian curry dishes',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=300&fit=crop',
        rating: 4.9,
        likes: 3670,
        author: 'Chef Priya',
        recipeCount: 201
    },
    {
        id: 16,
        name: 'French Cuisine',
        description: 'Classic French cooking techniques and recipes',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=300&fit=crop',
        rating: 4.8,
        likes: 2980,
        author: 'Chef Pierre',
        recipeCount: 145
    },
    {
        id: 17,
        name: 'Snacks & Appetizers',
        description: 'Quick bites and party appetizers for any gathering',
        image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=300&h=300&fit=crop',
        rating: 4.6,
        likes: 2450,
        author: 'Chef Tommy',
        recipeCount: 198
    },
    {
        id: 18,
        name: 'Mediterranean',
        description: 'Healthy Mediterranean diet recipes and flavors',
        image: 'https://images.unsplash.com/photo-1544510669-7ad5ac882d5d?w=300&h=300&fit=crop',
        rating: 4.7,
        likes: 3120,
        author: 'Chef Sofia',
        recipeCount: 167
    },
    {
        id: 19,
        name: 'Keto & Low Carb',
        description: 'Ketogenic and low-carbohydrate diet recipes',
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=300&h=300&fit=crop',
        rating: 4.5,
        likes: 2780,
        author: 'Nutritionist Kate',
        recipeCount: 134
    },
    {
        id: 20,
        name: 'Burgers & Sandwiches',
        description: 'Gourmet burgers and creative sandwich combinations',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop',
        rating: 4.6,
        likes: 4100,
        author: 'Chef Burger King',
        recipeCount: 112
    },
    {
        id: 21,
        name: 'Comfort Food',
        description: 'Soul-warming comfort foods for cozy moments',
        image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=300&h=300&fit=crop',
        rating: 4.8,
        likes: 3560,
        author: 'Chef Comfort',
        recipeCount: 189
    },
    {
        id: 22,
        name: 'Holiday Specials',
        description: 'Festive recipes for holidays and special occasions',
        image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=300&h=300&fit=crop',
        rating: 4.9,
        likes: 4200,
        author: 'Chef Holiday',
        recipeCount: 95
    },
    {
        id: 23,
        name: 'Quick & Easy',
        description: '30-minute meals for busy weekday dinners',
        image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=300&fit=crop',
        rating: 4.7,
        likes: 5200,
        author: 'Chef Quick',
        recipeCount: 298
    },
    {
        id: 24,
        name: 'Healthy Options',
        description: 'Nutritious meals that taste amazing',
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=300&h=300&fit=crop',
        rating: 4.6,
        likes: 3890,
        author: 'Chef Wellness',
        recipeCount: 267
    },
    {
        id: 25,
        name: 'International',
        description: 'Global cuisines from around the world',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=300&fit=crop',
        rating: 4.8,
        likes: 3450,
        author: 'Chef World',
        recipeCount: 345
    }
])

const filteredCategories = computed(() => {
    if (!searchQuery.value) return categories
    return categories.filter(category =>
        category.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        category.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
})

const setActiveSection = (section: string): void => {
    activeSection.value = section
    showPricingDropdown.value = false
}

const togglePricingDropdown = (): void => {
    showPricingDropdown.value = !showPricingDropdown.value
}

const selectCategory = (category: Category): void => {
    selectedCategory.value = category
}

const generateStars = (rating: number): string => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    return '★'.repeat(fullStars) + (hasHalfStar ? '☆' : '')
}

const formatLikes = (likes: number): string => {
    if (likes >= 1000) {
        return `${(likes / 1000).toFixed(1)}k`
    }
    return likes.toString()
}

onMounted(() => {
    document.addEventListener('click', (e) => {
        const dropdown = document.querySelector('.pricing-dropdown')
        if (dropdown && !dropdown.contains(e.target as Node)) {
            showPricingDropdown.value = false
        }
    })
})
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}

/* Header Styles */
.header {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    padding: 1rem 2rem;
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    transition: all 0.3s ease;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    margin: 0 auto;
}

.logo {
    font-size: 1.8rem;
    font-weight: bold;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    cursor: pointer;
}

.nav-links {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.nav-link {
    color: #333;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.nav-link:hover,
.nav-link.active {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.pricing-dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background: white;
    min-width: 280px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    z-index: 1001;
    top: 100%;
    right: 0;
    padding: 1rem 0;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s ease;
}

.dropdown-content.show {
    display: block;
    opacity: 1;
    transform: translateY(0);
}

.pricing-option {
    padding: 1rem 1.5rem;
    color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
    border-left: 4px solid transparent;
    cursor: pointer;
}

.pricing-option:hover {
    background: #f8f9fa;
    border-left-color: #ff6b6b;
    transform: translateX(5px);
}

.plan-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.plan-icon {
    font-size: 1.2rem;
}

.plan-name {
    font-weight: 600;
}

.pricing-badge {
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 600;
}

.badge-best {
    background: linear-gradient(45deg, #ffd700, #ff8c00);
    color: #333;
    animation: pulse 2s infinite;
}

.badge-price {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    color: white;
}

.mobile-menu {
    display: none;
    color: #333;
    font-size: 1.5rem;
    cursor: pointer;
}

/* Main Content */
.main-content {
    margin-top: 100px;
    padding: 2rem;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
}

/* Hero Section */
.hero-section {
    text-align: center;
    margin-bottom: 3rem;
    color: white;
}

.hero-title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    animation: fadeInUp 1s ease;
}

.hero-subtitle {
    font-size: 1.3rem;
    opacity: 0.9;
    animation: fadeInUp 1s ease 0.2s both;
}

/* Search Section */
.search-section {
    margin-bottom: 3rem;
    display: flex;
    justify-content: center;
}

.search-container {
    position: relative;
    width: 100%;
    max-width: 600px;
}

.search-input {
    width: 100%;
    padding: 1rem 1.5rem;
    padding-right: 3rem;
    border: none;
    border-radius: 50px;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    outline: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.search-input:focus {
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
}

.search-icon {
    position: absolute;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.2rem;
    color: #666;
}

/* Categories Section */
.categories-section {
    margin-bottom: 3rem;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    color: white;
    margin-bottom: 3rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    padding: 1rem 0;
}

.category-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.category-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s;
    z-index: 1;
}

.category-card:hover::before {
    left: 100%;
}

.category-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    background: rgba(255, 255, 255, 0.15);
}

.card-image-container {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.category-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease;
}

.category-card:hover .category-image {
    transform: scale(1.1);
}

.recipe-count {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 600;
}

.card-content {
    padding: 1.5rem;
}

.category-title {
    color: white;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.category-description {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
    margin-bottom: 1rem;
    line-height: 1.4;
}

.recipe-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.rating {
    display: flex;
    align-items: center;
    gap: 0.3rem;
}

.stars {
    color: #ffd700;
    font-size: 1.1rem;
}

.rating-number {
    color: white;
    font-weight: 600;
    margin-left: 0.3rem;
}

.likes {
    color: #ff6b6b;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-weight: 600;
}

.heart {
    animation: heartbeat 2s ease-in-out infinite;
}

.author {
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.8rem;
    font-style: italic;
    text-align: center;
}

/* No Results */
.no-results {
    text-align: center;
    color: white;
    padding: 3rem;
}

.no-results h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.no-results p {
    font-size: 1.1rem;
    opacity: 0.8;
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.05);
    }
}

@keyframes heartbeat {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.2);
    }
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-links {
        display: none;
    }

    .mobile-menu {
        display: block;
    }

    .hero-title {
        font-size: 2.5rem;
    }

    .hero-subtitle {
        font-size: 1.1rem;
    }

    .categories-grid {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
    }

    .category-card {
        margin: 0 0.5rem;
    }

    .search-input {
        font-size: 0.9rem;
    }

    .section-title {
        font-size: 2rem;
    }
}

@media (max-width: 480px) {
    .header {
        padding: 1rem;
    }

    .main-content {
        padding: 1rem;
    }

    .hero-title {
        font-size: 2rem;
    }

    .hero-subtitle {
        font-size: 1rem;
    }

    .categories-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .category-card {
        margin: 0;
    }

    .card-content {
        padding: 1rem;
    }

    .section-title {
        font-size: 1.8rem;
        margin-bottom: 2rem;
    }

    .dropdown-content {
        min-width: 250px;
        left: 50%;
        transform: translateX(-50%);
        right: auto;
    }

    .dropdown-content.show {
        transform: translateX(-50%) translateY(0);
    }
}

/* Additional Hover Effects */
.category-card {
    position: relative;
}

.category-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.category-card:hover::after {
    opacity: 1;
}

/* Loading Animation for Images */
.category-image {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
}

.category-image[src] {
    background: none;
    animation: none;
}

@keyframes loading {
    0% {
        background-position: 200% 0;
    }

    100% {
        background-position: -200% 0;
    }
}

/* Focus States for Accessibility */
.nav-link:focus,
.search-input:focus,
.category-card:focus {
    outline: 2px solid #4ecdc4;
    outline-offset: 2px;
}

.category-card {
    cursor: pointer;
    tab-index: 0;
}

.category-card:focus {
    transform: translateY(-5px) scale(1.01);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

/* Smooth Transitions */
* {
    transition: all 0.3s ease;
}

.category-card,
.nav-link,
.search-input {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>