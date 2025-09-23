// src/data/sampleData.ts
// Sample data for recipes and categories
export interface Recipe {
  id: number;
  name: string;
  main_image: string;
  rating: string;
  date_published: string;
  category_id: number;
  description?: string;
  prep_time?: number;
  cook_time?: number;
  total_time?: number;
  ingredients?: string[];
  directions?: string[];
  nutrition?: {
    calories?: string;
    fat?: string;
    saturated_fat?: string;
    carbs?: string;
    fiber?: string;
    sugar?: string;
    protein?: string;
    sodium?: string;
    cholesterol?: string;
  };
}

export interface Category {
  id: number;
  name: string;
  description?: string;
  image_url: string;
}

export const categories: Category[] = [
  { "id": 1, "image_url": "https://cook-it.club/assets/img/category/Appetizer.png", "name": "Appetizer", "description": "Start your meal with these delicious appetizers" },
  { "id": 11, "image_url": "https://cook-it.club/assets/img/category/Beverage.png", "name": "Beverage", "description": "Refreshing drinks for any occasion" },
  { "id": 15, "image_url": "https://cook-it.club/assets/img/category/Bread.png", "name": "Bread", "description": "Fresh baked breads and pastries" },
  { "id": 9, "image_url": "https://cook-it.club/assets/img/category/Breakfast.png", "name": "Breakfast", "description": "Start your day right with these breakfast recipes" },
  { "id": 16, "image_url": "https://cook-it.club/assets/img/category/Brunch.png", "name": "Brunch", "description": "Perfect recipes for lazy weekend mornings" },
  { "id": 21, "image_url": "https://cook-it.club/assets/img/category/Cake.png", "name": "Cake", "description": "Sweet cakes for celebrations and treats" },
  { "id": 25, "image_url": "https://cook-it.club/assets/img/category/Candy.png", "name": "Candy", "description": "Homemade candies and sweet treats" },
  { "id": 10, "image_url": "https://cook-it.club/assets/img/category/Cocktail.png", "name": "Cocktail", "description": "Craft cocktails and mixed drinks" },
  { "id": 24, "image_url": "https://cook-it.club/assets/img/category/Coffee.png", "name": "Coffee", "description": "Coffee drinks and coffee-flavored treats" },
  { "id": 12, "image_url": "https://cook-it.club/assets/img/category/Condiment.png", "name": "Condiment", "description": "Sauces, dressings, and flavor enhancers" },
  { "id": 5, "image_url": "https://cook-it.club/assets/img/category/Dessert.png", "name": "Dessert", "description": "Sweet endings to perfect meals" },
  { "id": 2, "image_url": "https://cook-it.club/assets/img/category/Dinner.png", "name": "Dinner", "description": "Hearty dinners for the whole family" },
  { "id": 6, "image_url": "https://cook-it.club/assets/img/category/Drink.png", "name": "Drink", "description": "All kinds of beverages and drinks" },
  { "id": 13, "image_url": "https://cook-it.club/assets/img/category/Entree.png", "name": "Entree", "description": "Main course dishes and entrees" },
  { "id": 23, "image_url": "https://cook-it.club/assets/img/category/Ingredient.png", "name": "Ingredient", "description": "Basic ingredients and preparations" },
  { "id": 19, "image_url": "https://cook-it.club/assets/img/category/Jam.png", "name": "Jam / Jelly", "description": "Homemade jams, jellies, and preserves" },
  { "id": 4, "image_url": "https://cook-it.club/assets/img/category/Lunch.png", "name": "Lunch", "description": "Quick and satisfying lunch ideas" },
  { "id": 17, "image_url": "https://cook-it.club/assets/img/category/Pasta.png", "name": "Pasta", "description": "Pasta dishes from around the world" },
  { "id": 22, "image_url": "https://cook-it.club/assets/img/category/Pie.png", "name": "Pie", "description": "Sweet and savory pies and tarts" },
  { "id": 20, "image_url": "https://cook-it.club/assets/img/category/Salad.png", "name": "Salad", "description": "Fresh salads and healthy bowls" },
  { "id": 14, "image_url": "https://cook-it.club/assets/img/category/Sandwich.png", "name": "Sandwich", "description": "Sandwiches, wraps, and handheld meals" },
  { "id": 7, "image_url": "https://cook-it.club/assets/img/category/Sauce.png", "name": "Sauce", "description": "Sauces to enhance any dish" },
  { "id": 3, "image_url": "https://cook-it.club/assets/img/category/SideDish.png", "name": "Side Dish", "description": "Perfect sides to complement your main course" },
  { "id": 8, "image_url": "https://cook-it.club/assets/img/category/Snack.png", "name": "Snack", "description": "Quick snacks and light bites" },
  { "id": 18, "image_url": "https://cook-it.club/assets/img/category/Soup.png", "name": "Soup", "description": "Comforting soups and stews" },
  { "id": 26, "image_url": "https://cook-it.club/assets/img/category/SpiceMix.png", "name": "Spice Mix", "description": "Custom spice blends and seasonings" }
];

export const recipes: Recipe[] = [
  // Appetizers (category_id: 1)
  {
    id: 1,
    name: "Gochujang Chicken Wings",
    main_image: "https://cook-it.club/DATA/Recipe/gochujang-chicken-wings-8544435-0.jpg",
    rating: "5.0",
    date_published: "2025-09-15",
    category_id: 1,
    description: "Spicy Korean-style chicken wings with a sweet and savory gochujang glaze",
    prep_time: 15,
    cook_time: 25,
    total_time: 40,
    ingredients: [
      "2 lbs chicken wings",
      "3 tbsp gochujang paste",
      "2 tbsp soy sauce",
      "2 tbsp honey",
      "1 tbsp rice vinegar",
      "2 cloves garlic, minced",
      "1 tsp sesame oil",
      "Green onions for garnish"
    ],
    directions: [
      "Preheat oven to 425°F and line a baking sheet with parchment paper",
      "Pat chicken wings dry and season with salt and pepper",
      "In a bowl, whisk together gochujang, soy sauce, honey, rice vinegar, garlic, and sesame oil",
      "Toss wings with half the sauce and arrange on baking sheet",
      "Bake for 20-25 minutes until crispy and cooked through",
      "Toss with remaining sauce and garnish with green onions"
    ],
    nutrition: {
      calories: "285",
      protein: "24g",
      fat: "18g",
      carbs: "8g",
      sodium: "520mg"
    }
  },
  {
    id: 2,
    name: "Mexican Street Corn Dip",
    main_image: "https://cook-it.club/DATA/Recipe/mexican-street-corn-dip-283874-0.jpg",
    rating: "4.7",
    date_published: "2025-09-12",
    category_id: 1,
    description: "Creamy, cheesy dip inspired by traditional Mexican street corn",
    prep_time: 10,
    cook_time: 15,
    total_time: 25,
    ingredients: [
      "4 cups corn kernels",
      "1/2 cup mayonnaise",
      "1/2 cup sour cream",
      "1 cup cotija cheese, crumbled",
      "2 jalapeños, minced",
      "3 cloves garlic, minced",
      "2 tbsp lime juice",
      "1 tsp chili powder",
      "Cilantro for garnish"
    ],
    directions: [
      "Preheat oven to 375°F",
      "In a large skillet, char corn kernels until slightly blackened",
      "Mix mayonnaise, sour cream, half the cheese, jalapeños, garlic, lime juice, and chili powder",
      "Fold in the charred corn",
      "Transfer to a baking dish and top with remaining cheese",
      "Bake for 15 minutes until bubbly and golden",
      "Garnish with cilantro and serve with tortilla chips"
    ]
  },
  {
    id: 3,
    name: "Watermelon Avocado Salsa",
    main_image: "https://cook-it.club/DATA/Recipe/watermelon-avocado-salsa-242174-0.jpg",
    rating: "4.8",
    date_published: "2025-09-10",
    category_id: 1,
    description: "Fresh and vibrant salsa perfect for summer gatherings",
    prep_time: 15,
    total_time: 15,
    ingredients: [
      "2 cups watermelon, diced",
      "1 avocado, diced",
      "1/4 cup red onion, finely diced",
      "2 tbsp fresh mint, chopped",
      "2 tbsp lime juice",
      "1 jalapeño, minced",
      "Salt to taste"
    ],
    directions: [
      "Combine watermelon, avocado, and red onion in a bowl",
      "Add mint, lime juice, and jalapeño",
      "Season with salt and gently toss",
      "Let sit for 10 minutes before serving",
      "Serve with tortilla chips or grilled fish"
    ]
  },

  // Beverages (category_id: 11)
  {
    id: 11,
    name: "Tropical Mango Smoothie",
    main_image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400",
    rating: "4.6",
    date_published: "2025-09-20",
    category_id: 11,
    description: "Refreshing tropical smoothie with mango and coconut",
    prep_time: 5,
    total_time: 5,
    ingredients: [
      "2 cups frozen mango chunks",
      "1 banana",
      "1/2 cup coconut milk",
      "1/2 cup pineapple juice",
      "1 tbsp honey",
      "Ice cubes as needed"
    ],
    directions: [
      "Add all ingredients to a blender",
      "Blend until smooth and creamy",
      "Add ice if you prefer it thicker",
      "Pour into glasses and serve immediately"
    ]
  },
  {
    id: 12,
    name: "Iced Green Tea Latte",
    main_image: "https://images.unsplash.com/photo-1556909045-f208c1f5cb15?w=400",
    rating: "4.5",
    date_published: "2025-09-18",
    category_id: 11,
    description: "Refreshing iced matcha latte with a creamy finish",
    prep_time: 8,
    total_time: 8,
    ingredients: [
      "2 tsp matcha powder",
      "2 tbsp hot water",
      "1 cup cold milk",
      "2 tbsp simple syrup",
      "Ice cubes",
      "Whipped cream (optional)"
    ]
  },

  // Breakfast (category_id: 9)
  {
    id: 13,
    name: "Fluffy Blueberry Pancakes",
    main_image: "https://www.allrecipes.com/thmb/ecb0XKvcrE7OyxBLX3OVEd30TbE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/686460-todds-famous-blueberry-pancakes-Dianne-1x1-1-9bd040b975634bce884847ce2090de16.jpg",
    rating: "4.9",
    date_published: "2025-09-22",
    category_id: 9,
    description: "Light and fluffy pancakes bursting with fresh blueberries",
    prep_time: 10,
    cook_time: 15,
    total_time: 25,
    ingredients: [
      "2 cups all-purpose flour",
      "2 tbsp sugar",
      "2 tsp baking powder",
      "1/2 tsp salt",
      "2 eggs",
      "1 3/4 cups milk",
      "4 tbsp melted butter",
      "1 cup fresh blueberries",
      "Maple syrup for serving"
    ],
    directions: [
      "In a large bowl, whisk together flour, sugar, baking powder, and salt",
      "In another bowl, beat eggs, then add milk and melted butter",
      "Pour wet ingredients into dry ingredients and stir until just combined",
      "Gently fold in blueberries",
      "Heat griddle over medium heat and lightly grease",
      "Pour 1/4 cup batter per pancake",
      "Cook until bubbles form and edges look dry, then flip",
      "Cook until golden brown and serve with maple syrup"
    ]
  },
  {
    id: 14,
    name: "Avocado Toast with Poached Egg",
    main_image: "https://feelgoodfoodie.net/wp-content/uploads/2025/05/Avocado-Toast-10.jpg",
    rating: "4.7",
    date_published: "2025-09-20",
    category_id: 9,
    description: "Classic avocado toast topped with a perfectly poached egg",
    prep_time: 10,
    cook_time: 8,
    total_time: 18,
    ingredients: [
      "2 slices sourdough bread",
      "1 ripe avocado",
      "2 eggs",
      "1 tbsp white vinegar",
      "Salt and pepper to taste",
      "Red pepper flakes",
      "Lemon juice"
    ]
  },

  // Dinner (category_id: 2)
  {
    id: 15,
    name: "Classic Spaghetti Carbonara",
    main_image: "https://cdn.sanity.io/images/cq7w2e71/production/08ae0b8293235129bbe7d55a3f89c2fc4f1a36d7-973x1300.jpg",
    rating: "4.8",
    date_published: "2025-09-15",
    category_id: 2,
    description: "Authentic Italian carbonara with eggs, cheese, and pancetta",
    prep_time: 10,
    cook_time: 15,
    total_time: 25,
    ingredients: [
      "400g spaghetti",
      "200g pancetta or guanciale, diced",
      "4 large eggs",
      "100g Pecorino Romano cheese, grated",
      "2 cloves garlic",
      "Black pepper",
      "Salt for pasta water"
    ],
    directions: [
      "Bring a large pot of salted water to boil and cook spaghetti until al dente",
      "In a large pan, cook pancetta until crispy",
      "In a bowl, whisk eggs with grated cheese and black pepper",
      "Reserve 1 cup pasta water before draining",
      "Add hot pasta to the pan with pancetta",
      "Remove from heat and quickly stir in egg mixture",
      "Add pasta water gradually until creamy",
      "Serve immediately with extra cheese and pepper"
    ]
  },
  {
    id: 16,
    name: "Grilled Salmon with Lemon Butter",
    main_image: "https://www.lecremedelacrumb.com/wp-content/uploads/2022/07/grilled-lemon-butter-salmon-9sm-6.jpg",
    rating: "4.6",
    date_published: "2025-09-10",
    category_id: 2,
    description: "Perfectly grilled salmon with a rich lemon butter sauce",
    prep_time: 15,
    cook_time: 12,
    total_time: 27
  },

  // Desserts (category_id: 5)
  {
    id: 17,
    name: "Chocolate Lava Cake",
    main_image: "https://www.melskitchencafe.com/wp-content/uploads/2023/01/updated-lava-cakes7.jpg",
    rating: "5.0",
    date_published: "2025-09-21",
    category_id: 5,
    description: "Decadent chocolate cake with a molten center",
    prep_time: 15,
    cook_time: 12,
    total_time: 27,
    ingredients: [
      "4 oz dark chocolate, chopped",
      "4 tbsp butter",
      "2 large eggs",
      "2 tbsp granulated sugar",
      "2 tbsp all-purpose flour",
      "Pinch of salt",
      "Butter for ramekins",
      "Cocoa powder for dusting"
    ]
  },
  {
    id: 18,
    name: "Classic Tiramisu",
    main_image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400",
    rating: "4.8",
    date_published: "2025-09-18",
    category_id: 5,
    description: "Traditional Italian tiramisu with coffee-soaked ladyfingers"
  },

  // Lunch (category_id: 4)
  {
    id: 19,
    name: "Buddha Bowl",
    main_image: "https://simplyceecee.co/wp-content/uploads/2018/07/veganbuddhabowl-2.jpg",
    rating: "4.5",
    date_published: "2025-09-16",
    category_id: 4,
    description: "Nutritious bowl with quinoa, roasted vegetables, and tahini dressing"
  },
  {
    id: 20,
    name: "Caesar Salad Wrap",
    main_image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400",
    rating: "4.4",
    date_published: "2025-09-14",
    category_id: 4,
    description: "Classic Caesar salad wrapped in a tortilla for easy eating"
  },

  // Soup (category_id: 18)
  {
    id: 21,
    name: "Chicken Matzo Ball Soup",
    main_image: "https://cook-it.club/DATA/Recipe/chicken-matzo-ball-soup-133856-0.jpg",
    rating: "4.6",
    date_published: "2025-09-19",
    category_id: 18,
    description: "Comforting Jewish-style chicken soup with fluffy matzo balls"
  },
  {
    id: 22,
    name: "Summer Watermelon Gazpacho",
    main_image: "https://cook-it.club/DATA/Recipe/summer-watermelon-gazpacho-8403764-0.jpg",
    rating: "4.7",
    date_published: "2025-09-17",
    category_id: 18,
    description: "Refreshing cold soup perfect for hot summer days"
  },

  // Side Dish (category_id: 3)
  {
    id: 23,
    name: "Garlic Roasted Brussels Sprouts",
    main_image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400",
    rating: "4.3",
    date_published: "2025-09-13",
    category_id: 3,
    description: "Crispy roasted Brussels sprouts with garlic and parmesan"
  },
  {
    id: 24,
    name: "Herb Rice Pilaf",
    main_image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
    rating: "4.2",
    date_published: "2025-09-11",
    category_id: 3,
    description: "Fragrant rice pilaf with fresh herbs and toasted almonds"
  },

  // Snack (category_id: 8)
  {
    id: 25,
    name: "Candied Bacon",
    main_image: "https://cook-it.club/DATA/Recipe/candied-bacon-221007-0.jpg",
    rating: "4.8",
    date_published: "2025-09-09",
    category_id: 8,
    description: "Sweet and savory bacon with a caramelized brown sugar coating"
  },
  {
    id: 26,
    name: "Spicy Roasted Chickpeas",
    main_image: "https://images.unsplash.com/photo-1599909533044-4ede8e4f1b74?w=400",
    rating: "4.1",
    date_published: "2025-09-08",
    category_id: 8,
    description: "Crunchy roasted chickpeas with warming spices"
  },

  // Pasta (category_id: 17)
  {
    id: 27,
    name: "Thai Green Curry Pasta",
    main_image: "https://munchingwithmariyah.com/wp-content/uploads/2025/03/IMG_4915.jpg",
    rating: "4.9",
    date_published: "2025-09-18",
    category_id: 17,
    description: "Fusion pasta with Thai green curry flavors and coconut milk"
  },
  {
    id: 28,
    name: "Lemon Garlic Linguine",
    main_image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400",
    rating: "4.5",
    date_published: "2025-09-12",
    category_id: 17,
    description: "Simple yet elegant pasta with lemon, garlic, and fresh herbs"
  },

  // Pie (category_id: 22)
  {
    id: 29,
    name: "Cherry Tomato Tart",
    main_image: "https://cook-it.club/DATA/Recipe/cherry-tomato-tart-281438-0.jpg",
    rating: "4.4",
    date_published: "2025-09-15",
    category_id: 22,
    description: "Savory tart with cherry tomatoes, herbs, and goat cheese"
  },
  {
    id: 30,
    name: "Classic Apple Pie",
    main_image: "https://images.unsplash.com/photo-1535920527002-b35e96722bd9?w=400",
    rating: "4.7",
    date_published: "2025-09-20",
    category_id: 22,
    description: "Traditional apple pie with cinnamon and flaky crust"
  }
];

// Helper functions
export const getRecipesByCategory = (categoryId: number): Recipe[] => {
  return recipes.filter(recipe => recipe.category_id === categoryId);
};

export const getRecipeById = (id: number): Recipe | undefined => {
  return recipes.find(recipe => recipe.id === id);
};

export const getCategoryById = (id: number): Category | undefined => {
  return categories.find(category => category.id === id);
};

export const getTopRatedRecipes = (limit: number = 6): Recipe[] => {
  return [...recipes]
    .sort((a, b) => Number(b.rating) - Number(a.rating))
    .slice(0, limit);
};

export const getLatestRecipes = (limit: number = 6): Recipe[] => {
  return [...recipes]
    .sort((a, b) => new Date(b.date_published).getTime() - new Date(a.date_published).getTime())
    .slice(0, limit);
};