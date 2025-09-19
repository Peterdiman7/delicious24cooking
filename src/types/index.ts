// src/types/index.ts

export interface User {
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

export interface Category {
  id: number
  name: string
  description: string
  image: string
  rating: number
  likes: number
  author: string
  recipeCount: number
  tags: string[]
  difficulty: 'Easy' | 'Medium' | 'Hard'
  isFavorite?: boolean
}

export interface Recipe {
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
  description?: string
  ingredients?: string[]
  instructions?: string[]
  servings?: number
  prepTime?: number
  tags?: string[]
}

export interface PricingPlan {
  id: string
  name: string
  icon: string
  price: string
  isBest?: boolean
  features: string[]
}

export interface FeaturedRecipe {
  id: number
  title: string
  description: string
  image: string
  cookTime: number
  difficulty: string
}

export interface Analytics {
  totalRecipes: number
  totalLikes: number
  totalViews: number
  totalFollowers: number
  weeklyGrowth: number
  monthlyGrowth: number
}

export interface Activity {
  id: number
  type: 'like' | 'comment' | 'follow' | 'recipe_created' | 'recipe_shared'
  message: string
  timestamp: string
  user?: string
  recipe?: string
}

export interface Ingredient {
  id: number
  name: string
  amount: string
  unit: string
  category?: string
}

export interface NutritionInfo {
  calories: number
  protein: number
  carbs: number
  fat: number
  fiber: number
  sugar: number
}

export interface Review {
  id: number
  userId: number
  userName: string
  userAvatar: string
  rating: number
  comment: string
  createdAt: string
  likes: number
}

export interface Chef {
  id: number
  name: string
  avatar: string
  bio: string
  specialties: string[]
  recipesCount: number
  followers: number
  rating: number
  isVerified: boolean
}

export interface Collection {
  id: number
  name: string
  description: string
  image: string
  recipes: Recipe[]
  author: string
  isPublic: boolean
  createdAt: string
  updatedAt: string
}

// API Response types
export interface ApiResponse<T> {
  data: T
  success: boolean
  message: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    currentPage: number
    totalPages: number
    totalItems: number
    itemsPerPage: number
  }
}

// Form types
export interface LoginForm {
  email: string
  password: string
  rememberMe: boolean
}

export interface RegisterForm {
  name: string
  email: string
  password: string
  confirmPassword: string
  agreeToTerms: boolean
}

export interface RecipeForm {
  title: string
  description: string
  category: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  cookingTime: number
  prepTime: number
  servings: number
  ingredients: Ingredient[]
  instructions: string[]
  tags: string[]
  image?: File
}

// Filter and Sort types
export interface CategoryFilters {
  search: string
  difficulty: string
  minRating: number
  tags: string[]
  sortBy: 'name' | 'rating' | 'likes' | 'recipes'
  sortOrder: 'asc' | 'desc'
}

export interface RecipeFilters {
  search: string
  category: string
  difficulty: string
  maxCookTime: number
  minRating: number
  tags: string[]
  dietary: string[]
  sortBy: 'name' | 'rating' | 'cookTime' | 'createdAt'
  sortOrder: 'asc' | 'desc'
}