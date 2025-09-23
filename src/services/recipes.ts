// recipes.ts
export interface Recipe {
  id: number;
  category_id: number;
  name: string;
  main_image: string;
  rating: string;
}

export const recipes: Recipe[] = [
  // Appetizer (1)
  { id: 1, category_id: 1, name: 'Bruschetta', main_image: 'https://via.placeholder.com/300x200?text=Bruschetta', rating: '4.5' },
  { id: 2, category_id: 1, name: 'Stuffed Mushrooms', main_image: 'https://via.placeholder.com/300x200?text=Stuffed+Mushrooms', rating: '4.2' },
  { id: 3, category_id: 1, name: 'Caprese Skewers', main_image: 'https://via.placeholder.com/300x200?text=Caprese+Skewers', rating: '4.7' },

  // Beverage (11)
  { id: 4, category_id: 11, name: 'Lemonade', main_image: 'https://via.placeholder.com/300x200?text=Lemonade', rating: '4.3' },
  { id: 5, category_id: 11, name: 'Iced Tea', main_image: 'https://via.placeholder.com/300x200?text=Iced+Tea', rating: '4.0' },
  { id: 6, category_id: 11, name: 'Fruit Smoothie', main_image: 'https://via.placeholder.com/300x200?text=Fruit+Smoothie', rating: '4.6' },

  // Bread (15)
  { id: 7, category_id: 15, name: 'Sourdough', main_image: 'https://via.placeholder.com/300x200?text=Sourdough', rating: '4.8' },
  { id: 8, category_id: 15, name: 'Baguette', main_image: 'https://via.placeholder.com/300x200?text=Baguette', rating: '4.5' },
  { id: 9, category_id: 15, name: 'Focaccia', main_image: 'https://via.placeholder.com/300x200?text=Focaccia', rating: '4.6' },

  // Breakfast (9)
  { id: 10, category_id: 9, name: 'Pancakes', main_image: 'https://via.placeholder.com/300x200?text=Pancakes', rating: '4.7' },
  { id: 11, category_id: 9, name: 'Omelette', main_image: 'https://via.placeholder.com/300x200?text=Omelette', rating: '4.3' },
  { id: 12, category_id: 9, name: 'French Toast', main_image: 'https://via.placeholder.com/300x200?text=French+Toast', rating: '4.5' },

  // Brunch (16)
  { id: 13, category_id: 16, name: 'Avocado Toast', main_image: 'https://via.placeholder.com/300x200?text=Avocado+Toast', rating: '4.4' },
  { id: 14, category_id: 16, name: 'Eggs Benedict', main_image: 'https://via.placeholder.com/300x200?text=Eggs+Benedict', rating: '4.6' },
  { id: 15, category_id: 16, name: 'Breakfast Burrito', main_image: 'https://via.placeholder.com/300x200?text=Breakfast+Burrito', rating: '4.5' },

  // Cake (21)
  { id: 16, category_id: 21, name: 'Chocolate Cake', main_image: 'https://via.placeholder.com/300x200?text=Chocolate+Cake', rating: '4.8' },
  { id: 17, category_id: 21, name: 'Cheesecake', main_image: 'https://via.placeholder.com/300x200?text=Cheesecake', rating: '4.7' },
  { id: 18, category_id: 21, name: 'Carrot Cake', main_image: 'https://via.placeholder.com/300x200?text=Carrot+Cake', rating: '4.6' },

  // Candy (25)
  { id: 19, category_id: 25, name: 'Chocolate Truffles', main_image: 'https://via.placeholder.com/300x200?text=Chocolate+Truffles', rating: '4.9' },
  { id: 20, category_id: 25, name: 'Gummy Bears', main_image: 'https://via.placeholder.com/300x200?text=Gummy+Bears', rating: '4.2' },
  { id: 21, category_id: 25, name: 'Caramel Fudge', main_image: 'https://via.placeholder.com/300x200?text=Caramel+Fudge', rating: '4.5' },

  // Cocktail (10)
  { id: 22, category_id: 10, name: 'Mojito', main_image: 'https://via.placeholder.com/300x200?text=Mojito', rating: '4.6' },
  { id: 23, category_id: 10, name: 'Margarita', main_image: 'https://via.placeholder.com/300x200?text=Margarita', rating: '4.5' },
  { id: 24, category_id: 10, name: 'Old Fashioned', main_image: 'https://via.placeholder.com/300x200?text=Old+Fashioned', rating: '4.7' },

  // Coffee (24)
  { id: 25, category_id: 24, name: 'Espresso', main_image: 'https://via.placeholder.com/300x200?text=Espresso', rating: '4.8' },
  { id: 26, category_id: 24, name: 'Latte', main_image: 'https://via.placeholder.com/300x200?text=Latte', rating: '4.7' },
  { id: 27, category_id: 24, name: 'Cappuccino', main_image: 'https://via.placeholder.com/300x200?text=Cappuccino', rating: '4.6' },

  // Condiment (12)
  { id: 28, category_id: 12, name: 'Ketchup', main_image: 'https://via.placeholder.com/300x200?text=Ketchup', rating: '4.3' },
  { id: 29, category_id: 12, name: 'Mustard', main_image: 'https://via.placeholder.com/300x200?text=Mustard', rating: '4.1' },
  { id: 30, category_id: 12, name: 'Mayonnaise', main_image: 'https://via.placeholder.com/300x200?text=Mayonnaise', rating: '4.4' },

  // Dessert (5)
  { id: 31, category_id: 5, name: 'Ice Cream', main_image: 'https://via.placeholder.com/300x200?text=Ice+Cream', rating: '4.8' },
  { id: 32, category_id: 5, name: 'Brownie', main_image: 'https://via.placeholder.com/300x200?text=Brownie', rating: '4.6' },
  { id: 33, category_id: 5, name: 'Pudding', main_image: 'https://via.placeholder.com/300x200?text=Pudding', rating: '4.5' },

  // Dinner (2)
  { id: 34, category_id: 2, name: 'Roast Chicken', main_image: 'https://via.placeholder.com/300x200?text=Roast+Chicken', rating: '4.7' },
  { id: 35, category_id: 2, name: 'Grilled Salmon', main_image: 'https://via.placeholder.com/300x200?text=Grilled+Salmon', rating: '4.6' },
  { id: 36, category_id: 2, name: 'Beef Stir Fry', main_image: 'https://via.placeholder.com/300x200?text=Beef+Stir+Fry', rating: '4.5' },

  // Drink (6)
  { id: 37, category_id: 6, name: 'Orange Juice', main_image: 'https://via.placeholder.com/300x200?text=Orange+Juice', rating: '4.4' },
  { id: 38, category_id: 6, name: 'Iced Coffee', main_image: 'https://via.placeholder.com/300x200?text=Iced+Coffee', rating: '4.5' },
  { id: 39, category_id: 6, name: 'Herbal Tea', main_image: 'https://via.placeholder.com/300x200?text=Herbal+Tea', rating: '4.3' },

  // Entree (13)
  { id: 40, category_id: 13, name: 'Grilled Steak', main_image: 'https://via.placeholder.com/300x200?text=Grilled+Steak', rating: '4.8' },
  { id: 41, category_id: 13, name: 'Lamb Chops', main_image: 'https://via.placeholder.com/300x200?text=Lamb+Chops', rating: '4.7' },
  { id: 42, category_id: 13, name: 'Roasted Duck', main_image: 'https://via.placeholder.com/300x200?text=Roasted+Duck', rating: '4.6' },

  // Ingredient (23)
  { id: 43, category_id: 23, name: 'Tomatoes', main_image: 'https://via.placeholder.com/300x200?text=Tomatoes', rating: '4.5' },
  { id: 44, category_id: 23, name: 'Garlic', main_image: 'https://via.placeholder.com/300x200?text=Garlic', rating: '4.4' },
  { id: 45, category_id: 23, name: 'Olive Oil', main_image: 'https://via.placeholder.com/300x200?text=Olive+Oil', rating: '4.6' },

  // Jam / Jelly (19)
  { id: 46, category_id: 19, name: 'Strawberry Jam', main_image: 'https://via.placeholder.com/300x200?text=Strawberry+Jam', rating: '4.7' },
  { id: 47, category_id: 19, name: 'Grape Jelly', main_image: 'https://via.placeholder.com/300x200?text=Grape+Jelly', rating: '4.5' },
  { id: 48, category_id: 19, name: 'Apricot Jam', main_image: 'https://via.placeholder.com/300x200?text=Apricot+Jam', rating: '4.6' },

  // Lunch (4)
  { id: 49, category_id: 4, name: 'Club Sandwich', main_image: 'https://via.placeholder.com/300x200?text=Club+Sandwich', rating: '4.4' },
  { id: 50, category_id: 4, name: 'Caesar Salad', main_image: 'https://via.placeholder.com/300x200?text=Caesar+Salad', rating: '4.5' },
  { id: 51, category_id: 4, name: 'Quiche', main_image: 'https://via.placeholder.com/300x200?text=Quiche', rating: '4.3' },

  // Pasta (17)
  { id: 52, category_id: 17, name: 'Spaghetti Carbonara', main_image: 'https://via.placeholder.com/300x200?text=Spaghetti+Carbonara', rating: '4.8' },
  { id: 53, category_id: 17, name: 'Penne Arrabiata', main_image: 'https://via.placeholder.com/300x200?text=Penne+Arrabiata', rating: '4.6' },
  { id: 54, category_id: 17, name: 'Lasagna', main_image: 'https://via.placeholder.com/300x200?text=Lasagna', rating: '4.7' },

  // Pie (22)
  { id: 55, category_id: 22, name: 'Apple Pie', main_image: 'https://via.placeholder.com/300x200?text=Apple+Pie', rating: '4.8' },
  { id: 56, category_id: 22, name: 'Pumpkin Pie', main_image: 'https://via.placeholder.com/300x200?text=Pumpkin+Pie', rating: '4.6' },
  { id: 57, category_id: 22, name: 'Pecan Pie', main_image: 'https://via.placeholder.com/300x200?text=Pecan+Pie', rating: '4.7' },

  // Salad (20)
  { id: 58, category_id: 20, name: 'Greek Salad', main_image: 'https://via.placeholder.com/300x200?text=Greek+Salad', rating: '4.5' },
  { id: 59, category_id: 20, name: 'Cobb Salad', main_image: 'https://via.placeholder.com/300x200?text=Cobb+Salad', rating: '4.4' },
  { id: 60, category_id: 20, name: 'Caprese Salad', main_image: 'https://via.placeholder.com/300x200?text=Caprese+Salad', rating: '4.6' },

  // Sandwich (14)
  { id: 61, category_id: 14, name: 'BLT Sandwich', main_image: 'https://via.placeholder.com/300x200?text=BLT+Sandwich', rating: '4.5' },
  { id: 62, category_id: 14, name: 'Grilled Cheese', main_image: 'https://via.placeholder.com/300x200?text=Grilled+Cheese', rating: '4.6' },
  { id: 63, category_id: 14, name: 'Club Sandwich', main_image: 'https://via.placeholder.com/300x200?text=Club+Sandwich', rating: '4.4' },

  // Sauce (7)
  { id: 64, category_id: 7, name: 'Tomato Sauce', main_image: 'https://via.placeholder.com/300x200?text=Tomato+Sauce', rating: '4.5' },
  { id: 65, category_id: 7, name: 'Alfredo Sauce', main_image: 'https://via.placeholder.com/300x200?text=Alfredo+Sauce', rating: '4.6' },
  { id: 66, category_id: 7, name: 'Pesto', main_image: 'https://via.placeholder.com/300x200?text=Pesto', rating: '4.7' },

  // Side Dish (3)
  { id: 67, category_id: 3, name: 'Mashed Potatoes', main_image: 'https://via.placeholder.com/300x200?text=Mashed+Potatoes', rating: '4.8' },
  { id: 68, category_id: 3, name: 'Roasted Vegetables', main_image: 'https://via.placeholder.com/300x200?text=Roasted+Vegetables', rating: '4.7' },
  { id: 69, category_id: 3, name: 'Coleslaw', main_image: 'https://via.placeholder.com/300x200?text=Coleslaw', rating: '4.5' },

  // Snack (8)
  { id: 70, category_id: 8, name: 'Nachos', main_image: 'https://via.placeholder.com/300x200?text=Nachos', rating: '4.6' },
  { id: 71, category_id: 8, name: 'Popcorn', main_image: 'https://via.placeholder.com/300x200?text=Popcorn', rating: '4.4' },
  { id: 72, category_id: 8, name: 'Trail Mix', main_image: 'https://via.placeholder.com/300x200?text=Trail+Mix', rating: '4.5' },

  // Soup (18)
  { id: 73, category_id: 18, name: 'Tomato Soup', main_image: 'https://via.placeholder.com/300x200?text=Tomato+Soup', rating: '4.7' },
  { id: 74, category_id: 18, name: 'Chicken Noodle Soup', main_image: 'https://via.placeholder.com/300x200?text=Chicken+Noodle+Soup', rating: '4.6' },
  { id: 75, category_id: 18, name: 'Minestrone', main_image: 'https://via.placeholder.com/300x200?text=Minestrone', rating: '4.5' },

  // Spice Mix (26)
  { id: 76, category_id: 26, name: 'Curry Powder', main_image: 'https://via.placeholder.com/300x200?text=Curry+Powder', rating: '4.7' },
  { id: 77, category_id: 26, name: 'Garam Masala', main_image: 'https://via.placeholder.com/300x200?text=Garam+Masala', rating: '4.6' },
  { id: 78, category_id: 26, name: 'Chili Powder', main_image: 'https://via.placeholder.com/300x200?text=Chili+Powder', rating: '4.5' },
];
