// Fixed recipes.ts
export interface Recipe {
  id: number;
  category_id: number;
  name: string;
  main_image: string;
  rating: string;
}

export const recipes: Recipe[] = [
  // Appetizers (1)
  { 
    id: 1, 
    category_id: 1, 
    name: 'Bruschetta', 
    main_image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 
    rating: '4.5' 
  },
  { 
    id: 2, 
    category_id: 1, 
    name: 'Stuffed Mushrooms', 
    main_image: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2024-10-stuffed-mushrooms%2Fstuffed-mushrooms-318', 
    rating: '4.2' 
  },
  { 
    id: 3, 
    category_id: 1, 
    name: 'Caprese Skewers', 
    main_image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.7' 
  },

  // Beverages (11)
  { 
    id: 4, 
    category_id: 11, 
    name: 'Lemonade', 
    main_image: 'https://i2.wp.com/lmld.org/wp-content/uploads/2022/04/Lemonade-4.jpg', 
    rating: '4.3' 
  },
  { 
    id: 7, 
    category_id: 11, 
    name: 'Jalapeño Limeade', 
    main_image: 'https://jerryjamesstone.com/wp-content/uploads/2020/01/Jalapeno-Lemonade-with-Garnish-3.jpg', 
    rating: '4.4' 
  },
  { 
    id: 14, 
    category_id: 11, 
    name: 'Strawberry Lemonade Slush', 
    main_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Ntxp7Xg7wR60ZnbJBXeSCSeW1Xdl6TvKPA&s', 
    rating: '4.4' 
  },
  { 
    id: 34, 
    category_id: 11, 
    name: 'Mango Agua Fresca', 
    main_image: 'https://nutritiontofit.com/wp-content/uploads/2018/05/Mango-Agua-Fresca.jpg', 
    rating: '4.4' 
  },

  // Salads (20)
  { 
    id: 5, 
    category_id: 20, 
    name: 'Red Potato Salad', 
    main_image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.0' 
  },
  { 
    id: 9, 
    category_id: 20, 
    name: 'Summer Squash Salad', 
    main_image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.2' 
  },
  { 
    id: 15, 
    category_id: 20, 
    name: 'Caprese Couscous Salad', 
    main_image: 'https://images.unsplash.com/photo-1505253213348-cd54c92b37ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.5' 
  },
  { 
    id: 25, 
    category_id: 20, 
    name: 'Stone Fruit Salad', 
    main_image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.6' 
  },
  { 
    id: 39, 
    category_id: 20, 
    name: 'Summer Corn Salad', 
    main_image: 'https://images.unsplash.com/photo-1557909114-f13ad7baacfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.4' 
  },
  { 
    id: 47, 
    category_id: 20, 
    name: 'Mexican Corn Salad', 
    main_image: 'https://www.jocooks.com/wp-content/uploads/2019/05/mexican-street-corn-salad-1-12.jpg', 
    rating: '4.5' 
  },
  { 
    id: 58, 
    category_id: 20, 
    name: 'Greek Salad', 
    main_image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.5' 
  },
  { 
    id: 59, 
    category_id: 20, 
    name: 'Cobb Salad', 
    main_image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.4' 
  },
  { 
    id: 60, 
    category_id: 20, 
    name: 'Caprese Salad', 
    main_image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.6' 
  },
  { 
    id: 66, 
    category_id: 20, 
    name: 'Watermelon Grape Salad', 
    main_image: 'https://images.unsplash.com/photo-1571167635635-1c4c5fea8c0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.3' 
  },
  { 
    id: 67, 
    category_id: 20, 
    name: 'Watermelon Avocado Salsa', 
    main_image: 'https://images.unsplash.com/photo-1571167635635-1c4c5fea8c0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.6' 
  },
  { 
    id: 68, 
    category_id: 20, 
    name: 'Watermelon Spinach Salad', 
    main_image: 'https://images.unsplash.com/photo-1571167635635-1c4c5fea8c0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.5' 
  },

  // Desserts (5)
  { 
    id: 6, 
    category_id: 5, 
    name: 'Easy Cherry Cobbler', 
    main_image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.6' 
  },
  { 
    id: 8, 
    category_id: 5, 
    name: 'Passover Brownies', 
    main_image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.3' 
  },
  { 
    id: 10, 
    category_id: 5, 
    name: 'Grilled Peach Dessert', 
    main_image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.7' 
  },
  { 
    id: 28, 
    category_id: 5, 
    name: 'Blackberry Cheesecake Brownies', 
    main_image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.8' 
  },
  { 
    id: 29, 
    category_id: 5, 
    name: 'Summer Berry Trifle', 
    main_image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.7' 
  },
  { 
    id: 30, 
    category_id: 5, 
    name: 'Old-Fashioned Blueberry Cobbler', 
    main_image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.6' 
  },
  { 
    id: 65, 
    category_id: 5, 
    name: 'Tiramisu Parfait', 
    main_image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.8' 
  },
  { 
    id: 72, 
    category_id: 5, 
    name: 'Strawberry Shortcake', 
    main_image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.8' 
  },

  // Breakfast (9)
  { 
    id: 11, 
    category_id: 9, 
    name: 'Pancakes', 
    main_image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.7' 
  },
  { 
    id: 13, 
    category_id: 9, 
    name: 'French Toast', 
    main_image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.5' 
  },
  { 
    id: 73, 
    category_id: 9, 
    name: 'Monte Cristo Casserole', 
    main_image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.6' 
  },
  { 
    id: 35, 
    category_id: 12, 
    name: 'Thousand Island Dressing', 
    main_image: 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FRecipes%2F2025-03-thousand-island-dressing%2Fthousand-island-dressing-092', 
    rating: '4.3' 
  },
  { 
    id: 36, 
    category_id: 12, 
    name: 'Homemade Mayo', 
    main_image: 'https://www.inspiredtaste.net/wp-content/uploads/2015/12/Homemade-Mayonnaise-Recipe-8-1200.jpg', 
    rating: '4.2' 
  },
  { 
    id: 16, 
    category_id: 16, 
    name: 'Avocado Toast', 
    main_image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.4' 
  },
  { 
    id: 17, 
    category_id: 16, 
    name: 'Eggs Benedict', 
    main_image: 'https://www.allrecipes.com/thmb/eJzkN3OxGGhkDHCU0puFRtyBmls=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/17205-eggs-benedict-DDMFS-4x3-a0042d5ae1da485fac3f468654187db0.jpg', 
    rating: '4.6' 
  },
  { 
    id: 18, 
    category_id: 16, 
    name: 'Breakfast Burrito', 
    main_image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.5' 
  },

  // Candy (25)
  { 
    id: 19, 
    category_id: 25, 
    name: 'Butterscotch Pecan Pralines', 
    main_image: 'https://aimeebroussard.com/wp-content/uploads/2014/06/Butterscotch-Pralines.jpg', 
    rating: '4.8' 
  },

  // Baked Goods (15)
  { 
    id: 20, 
    category_id: 15, 
    name: 'Ginger Rhubarb Muffins', 
    main_image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.6' 
  },
  { 
    id: 26, 
    category_id: 15, 
    name: 'Single Serve Zucchini Muffin', 
    main_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2XvTH3S3WklhI3kMWn79pOhTbWoA7phu_mA&s', 
    rating: '4.3' 
  },
  { 
    id: 42, 
    category_id: 15, 
    name: 'Lemon Blueberry French Toast', 
    main_image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.7' 
  },
  { 
    id: 50, 
    category_id: 15, 
    name: 'Mexican Cornbread', 
    main_image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.5' 
  },

  // Cakes (21)
  { 
    id: 21, 
    category_id: 21, 
    name: 'Strawberry Vanilla Cake', 
    main_image: 'https://www.southernliving.com/thmb/mTaXLbKJRVgvsX_0Np1e2STyiLw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/StrawberryVanillaCake_132-c2776ede941c419a8e47d1048ea88a3c.jpg', 
    rating: '4.9' 
  },
  { 
    id: 33, 
    category_id: 21, 
    name: 'Rhubarb Cake', 
    main_image: 'https://ichef.bbc.co.uk/ace/standard/1600/food/recipes/easy_rhubarb_cake_39568_16x9.jpg.webp', 
    rating: '4.7' 
  },
  { 
    id: 77, 
    category_id: 21, 
    name: 'Chocolate Stout Cake', 
    main_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2zug-2Vjw_hrMg5trVamQXWpy7k_HKlRE3w&s', 
    rating: '4.8' 
  },

  // Cocktails (10)
  { 
    id: 22, 
    category_id: 10, 
    name: 'Mojito', 
    main_image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.6' 
  },
  { 
    id: 32, 
    category_id: 10, 
    name: 'Raspberry Vodka Lemonade', 
    main_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdO220ongMh0Jj_GIlCwJUN_Fp-ycVkoudow&s', 
    rating: '4.5' 
  },

  // Main Dishes (2)
  { 
    id: 23, 
    category_id: 2, 
    name: 'Plum Habanero Chicken', 
    main_image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.7' 
  },
  { 
    id: 44, 
    category_id: 2, 
    name: 'Roast Chicken', 
    main_image: 'https://hips.hearstapps.com/hmg-prod/images/roast-chicken-recipe-2-66b231ac9a8fb.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*', 
    rating: '4.7' 
  },
  { 
    id: 45, 
    category_id: 2, 
    name: 'Grilled Salmon', 
    main_image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.6' 
  },

  // Pasta (17)
  { 
    id: 24, 
    category_id: 17, 
    name: 'Greek Penne Pasta Salad', 
    main_image: 'https://www.allrecipes.com/thmb/_b11haUR28NvN5_OK3A1uiFFpEo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/176650-greek-pasta-salad-ddmfs-hero-4x3-ceb96388442c46bc98f439a907439e71.jpg', 
    rating: '4.5' 
  },
  { 
    id: 52, 
    category_id: 17, 
    name: 'Spaghetti Carbonara', 
    main_image: 'https://images.services.kitchenstories.io/z_bWPIhhM6qs38B0E46CRaYs81Q=/3840x0/filters:quality(85)/images.kitchenstories.io/wagtailOriginalImages/R2568-photo-final-_0.jpg', 
    rating: '4.8' 
  },
  { 
    id: 53, 
    category_id: 17, 
    name: 'Penne Arrabiata', 
    main_image: 'https://www.giallozafferano.com/images/260-26061/Penne-all-arrabbiata_1200x800.jpg', 
    rating: '4.6' 
  },
  { 
    id: 54, 
    category_id: 17, 
    name: 'Lasagna', 
    main_image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.7' 
  },
  { 
    id: 27, 
    category_id: 3, 
    name: 'Zucchini Quiche', 
    main_image: 'https://www.simplyrecipes.com/thmb/aSQG5JAA4SZQOTZTQh1l4IMjzh4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__07__zucchini-tomato-quiche-vertical-a2-1600-89bcde8a885940d3af32dedf768d8216.jpg', 
    rating: '4.4' 
  },
  { 
    id: 69, 
    category_id: 3, 
    name: 'Coleslaw', 
    main_image: 'https://www.inspiredtaste.net/wp-content/uploads/2015/01/Coleslaw-Recipe-1-1200.jpg', 
    rating: '4.5' 
  },

  // Condiments & Sauces (7)
  { 
    id: 38, 
    category_id: 7, 
    name: 'Dill and Pine Nut Pesto', 
    main_image: 'https://www.thespruceeats.com/thmb/aLlSPkaLZ9LojNyKbMhlcRMmSOg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-91641686-56a8338a5f9b58b7d0f18033.jpg', 
    rating: '4.5' 
  },

  // Snacks (8)
  { 
    id: 70, 
    category_id: 8, 
    name: 'Nachos', 
    main_image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.6' 
  },

  // Ethnic (13)
  { 
    id: 40, 
    category_id: 13, 
    name: 'Easy Fried Rice', 
    main_image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.3' 
  },
  { 
    id: 43, 
    category_id: 13, 
    name: 'Greek Chicken with Feta Dip', 
    main_image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.8' 
  },
  { 
    id: 48, 
    category_id: 13, 
    name: 'Cheesy Beef Tacos', 
    main_image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.6' 
  },
  { 
    id: 71, 
    category_id: 13, 
    name: 'Chicken Fajita Skillet', 
    main_image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.7' 
  },

  // Fast Food (14)
  { 
    id: 46, 
    category_id: 14, 
    name: 'Cheesy Hot Dogs', 
    main_image: 'https://www.simplyrecipes.com/thmb/PcSmQ7D3w_0acCdEiEIrslvtVak=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__10__EYF-Baked-Cheesy-Hot-METHOD-4-555a8033f8704211ab5307aa930c8807.jpg', 
    rating: '4.4' 
  },
  { 
    id: 62, 
    category_id: 14, 
    name: 'Grilled Cheese', 
    main_image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.6' 
  },
  { 
    id: 75, 
    category_id: 18, 
    name: 'Minestrone', 
    main_image: 'https://sire-media-24k.techops.disn.io/24k_bg/recipe-image/680372.640x640.jpg', 
    rating: '4.5' 
  },
  { 
    id: 78, 
    category_id: 18, 
    name: 'Stuffed Zucchini Boats', 
    main_image: 'https://cdn.loveandlemons.com/wp-content/uploads/2019/07/stuffed-zucchini-recipe-1-2.jpg', 
    rating: '4.6' 
  },

  // Pies (22)
  { 
    id: 51, 
    category_id: 22, 
    name: 'Old-Fashioned Peach Pie', 
    main_image: 'https://www.allrecipes.com/thmb/L4sxt34RrevHEVr6XOi4PM-jrUw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/87979-Peach-Pie-the-Old-Fashioned-Two-Way-Crust-Way-ddmfs-beauty-4x3-0216-8d78378e327148089685bc48edb51947.jpg', 
    rating: '4.7' 
  },
  { 
    id: 55, 
    category_id: 22, 
    name: 'Apple Pie', 
    main_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGvV_1zfnQCiMnjXk7by4zrlZKJQw1yvBIg&s', 
    rating: '4.8'
  },
  { 
    id: 56, 
    category_id: 22, 
    name: 'Pumpkin Pie', 
    main_image: 'https://tastesbetterfromscratch.com/wp-content/uploads/2022/10/PumpkinPie2-2.jpg', 
    rating: '4.6'
  },
  { 
    id: 57, 
    category_id: 22, 
    name: 'Pecan Pie', 
    main_image: 'https://thefirstyearblog.com/wp-content/uploads/2023/10/Pecan-Pie-Square-1-2023.png', 
    rating: '4.7' 
  },
  { 
    id: 61, 
    category_id: 22, 
    name: 'Peach Sour Cream Pie', 
    main_image: 'https://i2.wp.com/lmld.org/wp-content/uploads/2021/10/Peach-Sour-Cream-Pie-4-scaled.jpg', 
    rating: '4.5' 
  },
  { 
    id: 63, 
    category_id: 22, 
    name: 'Frozen Strawberry Pie', 
    main_image: 'https://www.wellplated.com/wp-content/uploads/2017/06/Strawberry-Pretzel-Frozen-Yogurt-Pie.jpg', 
    rating: '4.7' 
  },
  { 
    id: 64, 
    category_id: 22, 
    name: 'Pineapple Cream Pie', 
    main_image: 'https://mojo.generalmills.com/api/public/content/4SDOSrOwaUiEZ4F8e9q43g_gmi_hi_res_jpeg.jpeg?v=61ea87f8&t=466b54bb264e48b199fc8e83ef1136b4', 
    rating: '4.4' 
  },

  // Coffee (24)
  { 
    id: 41, 
    category_id: 24, 
    name: 'Espresso', 
    main_image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.8' 
  },

  // Spices (26)
  { 
    id: 76, 
    category_id: 26, 
    name: 'Curry Powder', 
    main_image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
    rating: '4.7' 
  },
];