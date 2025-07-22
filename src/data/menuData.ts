export interface MenuItem {
  name: string;
  price: number;
  bestseller?: boolean;
  description?: string;
}

export interface MenuCategory {
  categoryName: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  { 
    "categoryName": "Specials", 
    "items": [
      { "name": "Veg Kofta", "price": 295, "description": "Delicious vegetable kofta in rich gravy" },
      { "name": "Paneer Kofta", "price": 315, "description": "Cottage cheese kofta in creamy gravy" },
      { "name": "Paneer Malai Kofta", "price": 325, "description": "Paneer kofta in rich malai gravy" },
      { "name": "Veg Patiala", "price": 345, "description": "Mix vegetable curry Patiala style" },
      { "name": "Paneer Patiala", "price": 345, "description": "Paneer in rich and creamy Patiala gravy" },
      { "name": "Paneer Angara", "price": 345, "description": "Spicy and tangy paneer preparation" },
      { "name": "Paneer Toofani", "price": 345, "description": "Paneer in spicy and tangy gravy" },
      { "name": "Paneer Pasanda", "price": 345, "description": "Mild and creamy paneer preparation" },
      { "name": "Paneer Dilruba", "price": 345, "description": "Paneer in rich and creamy gravy" },
      { "name": "Veg Egg Masala", "price": 345, "description": "[Veg Preparation] Prepared with mock meat. Made via paneer" },
      { "name": "Veg Egg Curry", "price": 345, "description": "[Veg preparation] Prepared with mock meat. Made via paneer" }
    ]
  },
  { 
    "categoryName": "Platters", 
    "items": [
      { "name": "Chinese Platter", "price": 345, "description": "Noodles+Chilli Paneer Dry/Chilli Paneer Gravy+Veg Manchurian Gravy +Fried Rice" }
    ]
  },
  { 
    "categoryName": "Soups and Salad", 
    "items": [
      { "name": "Veg Hot and Sour Soup", "price": 149 },
      { "name": "Clear Veg Soup", "price": 149 },
      { "name": "Tomato Soup", "price": 149 },
      { "name": "Veg Manchow Soup", "price": 149 },
      { "name": "Lemon Coriander Soup", "price": 149 },
      { "name": "Veg Sweet Corn Soup", "price": 149 },
      { "name": "Green Salad", "price": 60 }
    ]
  },
  { 
    "categoryName": "Starters", 
    "items": [
      { "name": "Chilli Potato", "price": 220 },
      { "name": "Honey Chilli Potato", "price": 235 },
      { "name": "Chilli Paneer", "price": 265, "description": "Dry/gravy" },
      { "name": "Veg Manchurian Dry", "price": 285 },
      { "name": "Paneer Manchurian", "price": 310 },
      { "name": "Chilli Paneer Dry", "price": 265 },
      { "name": "Tandoori Aloo", "price": 230 },
      { "name": "Tandoori Paneer Tikka", "price": 280 },
      { "name": "Paneer Malai Tikka", "price": 295 },
      { "name": "Hara Bhara Kebab", "price": 235 },
      { "name": "Dahi ke Kebab", "price": 275 },
      { "name": "Tandoori Mushroom", "price": 275 },
      { "name": "Churrasco Pineapple", "price": 275 },
      { "name": "Tandoori Soya Chaap", "price": 295 },
      { "name": "Veg Egg Fry", "price": 265, "description": "[Veg Preparation] Prepared with mock meat. Made from fresh paneer" }
    ]
  },
  { 
    "categoryName": "Main Course", 
    "items": [
      { "name": "Paneer Do Pyaaza", "price": 310 },
      { "name": "Handi Paneer", "price": 310 },
      { "name": "Paneer Makhani", "price": 310 },
      { "name": "Paneer Tikka Masala", "price": 310 },
      { "name": "Jeera Aloo", "price": 245 },
      { "name": "Bhindi Masala", "price": 265 },
      { "name": "Aloo Matar Gobhi Masala", "price": 285 },
      { "name": "Rajma Tadka", "price": 285 },
      { "name": "Paneer Lababdar", "price": 310 },
      { "name": "Kadhai Paneer", "price": 310 },
      { "name": "Palak Paneer", "price": 295 },
      { "name": "Matar Paneer", "price": 275 },
      { "name": "Amritsari Chole", "price": 285 },
      { "name": "Dal Fry", "price": 245 },
      { "name": "Dal Tadka", "price": 255 },
      { "name": "Punjabi Dal Tadka", "price": 270 },
      { "name": "Dal Makhani", "price": 290 },
      { "name": "Mix Veg", "price": 310 },
      { "name": "Mushroom Masala", "price": 315 },
      { "name": "Chilli Paneer Gravy", "price": 265 },
      { "name": "Veg Manchurian Gravy", "price": 285 }
    ]
  },
  { 
    "categoryName": "Breads", 
    "items": [
      { "name": "Aloo Paratha", "price": 85 },
      { "name": "Aloo Matar Paratha", "price": 95 },
      { "name": "Aloo Pyaaz Paratha", "price": 95 },
      { "name": "Gobhi Paratha", "price": 95 },
      { "name": "Paneer Paratha", "price": 115 },
      { "name": "Tawa Roti", "price": 45 },
      { "name": "Butter Tawa Roti", "price": 55 },
      { "name": "Tandoori Roti", "price": 35 },
      { "name": "Butter Tandoori Roti", "price": 45 },
      { "name": "Plain Naan", "price": 55 },
      { "name": "Butter Naan", "price": 65 },
      { "name": "Garlic Naan", "price": 65 },
      { "name": "Stuffed Naan", "price": 65 },
      { "name": "Laccha Paratha", "price": 75 },
      { "name": "Missi Roti", "price": 75 }
    ]
  },
  { 
    "categoryName": "Rice and Biryani", 
    "items": [
      { "name": "Plain Rice", "price": 170 },
      { "name": "Jeera Rice", "price": 190 },
      { "name": "Vegetable Pulao", "price": 225 },
      { "name": "Kashmiri Pulao", "price": 245 },
      { "name": "Hyderabadi Veg Biryani", "price": 255, "bestseller": true },
      { "name": "Paneer Biryani", "price": 295 },
      { "name": "Hyderabadi Paneer Biryani", "price": 325 }
    ]
  },
  { 
    "categoryName": "South Indian", 
    "items": [
      { "name": "Upma", "price": 170 },
      { "name": "Plain Uttapam", "price": 215 },
      { "name": "Onion Uttapam", "price": 215 },
      { "name": "Mix Uttapam", "price": 225 },
      { "name": "Paneer Uttapam", "price": 255 },
      { "name": "Onion Tomato Uttapam", "price": 225 }
    ]
  },
  { 
    "categoryName": "Dosa", 
    "items": [
      { "name": "Plain Dosa", "price": 185 },
      { "name": "Butter Plain Dosa", "price": 195 },
      { "name": "Masala Dosa", "price": 215, "bestseller": true },
      { "name": "Butter Masala Dosa", "price": 225 },
      { "name": "Onion Masala Dosa", "price": 230 },
      { "name": "Paneer Dosa", "price": 245 },
      { "name": "Maharaja Masala Dosa", "price": 245 },
      { "name": "Maharaja Paneer Dosa", "price": 265 },
      { "name": "Rava Plain Dosa", "price": 210 },
      { "name": "Rava Masala Dosa", "price": 230 },
      { "name": "Ghee Roast Masala Dosa", "price": 295 },
      { "name": "Ghee Roast Paneer Dosa", "price": 310 }
    ]
  },
  { 
    "categoryName": "Fried Rice and Noodles", 
    "items": [
      { "name": "Veg Fried Rice", "price": 245 },
      { "name": "Veg Chowmein", "price": 245 },
      { "name": "Veg Chilli Garlic Chowmein", "price": 265 },
      { "name": "Veg Hakka Noodles", "price": 285 },
      { "name": "Veg Schezwan Noodles", "price": 285 },
      { "name": "Veg Sanghai Noodles", "price": 295 }
    ]
  },
  { 
    "categoryName": "Pizza and Pasta", 
    "items": [
      { "name": "Alfredo White Pasta", "price": 250 },
      { "name": "Alfredo Baked Pasta", "price": 250 },
      { "name": "Arrabiata Red Pasta", "price": 250 },
      { "name": "Arrabiata Baked Pasta", "price": 250 },
      { "name": "Creamy Twist Pink Pasta", "price": 250 }
    ]
  },
  { 
    "categoryName": "Burgers and Sandwiches", 
    "items": [
      { "name": "Aloo Tikki Burger", "price": 125 },
      { "name": "Veg Cheese Burger", "price": 145 },
      { "name": "Paneer Zinger Burger", "price": 169 },
      { "name": "Double Cheese Paneer Burger", "price": 189 },
      { "name": "Veg Sandwizza", "price": 135 },
      { "name": "Tandoori Paneer Sandwizza", "price": 155 },
      { "name": "Cheese Overload Sandwizza", "price": 165 },
      { "name": "Veg Cheese Sandwich", "price": 85, "bestseller": true },
      { "name": "Veg Cheese Grilled Sandwich", "price": 90, "bestseller": true },
      { "name": "Veggie Corn Sandwich", "price": 110 },
      { "name": "The Club Sandwich", "price": 125 },
      { "name": "Paneer Tikka Grilled Sandwich", "price": 145 },
      { "name": "The Pizza Sandwich", "price": 135 },
      { "name": "Barbeque Sandwich", "price": 125 }
    ]
  },
  { 
    "categoryName": "Snacks", 
    "items": [
      { "name": "Crunchy Paneer Stick", "price": 225 },
      { "name": "Crispy Corn", "price": 225 },
      { "name": "Veg Spring Roll", "price": 220 },
      { "name": "French Fries", "price": 215 },
      { "name": "Salted Fries", "price": 220 },
      { "name": "Peri Peri Fries", "price": 235 },
      { "name": "Barbeque Fries", "price": 235 },
      { "name": "Creamy Temptation Fries", "price": 235 }
    ]
  },
  { 
    "categoryName": "Wraps", 
    "items": [
      { "name": "Veg Wrap", "price": 135 },
      { "name": "Paneer Wrap", "price": 155 },
      { "name": "Special Paneer Cheese Wrap", "price": 165 },
      { "name": "Tandoori Paneer Cheese Wrap", "price": 185 },
      { "name": "Malai Paneer Cheese Wrap", "price": 199 }
    ]
  },
  { 
    "categoryName": "Accompaniments", 
    "items": [
      { "name": "Curd", "price": 50 },
      { "name": "Papad [3 Pieces]", "price": 40 },
      { "name": "Masala Papad [3 Pieces]", "price": 50 },
      { "name": "Raita", "price": 50 }
    ]
  },
  { 
    "categoryName": "Drinks (Beverages)", 
    "items": [
      { "name": "Sweet Lassi", "price": 95 },
      { "name": "Spicy Guava Zing Mocktail", "price": 175, "description": "[Non Alcoholic]" },
      { "name": "Cyndrela Mocktail", "price": 185, "description": "[Non Alcoholic]" },
      { "name": "Vanilla Shake", "price": 145 },
      { "name": "Chocolate Shake", "price": 145 },
      { "name": "Strawberry Shake", "price": 155 },
      { "name": "Butterscotch Shake", "price": 155 },
      { "name": "Blueberry Shake", "price": 155 },
      { "name": "Brownie Shake", "price": 165 },
      { "name": "Oreo Shake", "price": 165 },
      { "name": "KitKat Shake", "price": 165 },
      { "name": "Rainbow Heaven Mocktail", "price": 175, "description": "[Non Alcoholic]" },
      { "name": "Cranberry Mojito", "price": 165, "description": "[Non Alcoholic]" },
      { "name": "Green Apple Mocktail", "price": 165, "description": "[Non Alcoholic]" },
      { "name": "Blue Lagoon Mocktail", "price": 165, "description": "[Non Alcoholic]" },
      { "name": "Buttermilk", "price": 75 },
      { "name": "Banana Shake", "price": 145 },
      { "name": "Pineapple Shake", "price": 145 },
      { "name": "Khajoor Shake", "price": 165 },
      { "name": "Iced Coffee Latte", "price": 90 },
      { "name": "Ice Americano", "price": 90 },
      { "name": "Ice Tea", "price": 65 },
      { "name": "Classic Cold Coffee", "price": 155 },
      { "name": "Strong Cold Coffee", "price": 165 },
      { "name": "Virgin Mojito", "price": 165, "description": "[Non Alcoholic]" },
      { "name": "Mint Mojito", "price": 165, "description": "[Non Alcoholic]" },
      { "name": "Watermelon Mojito", "price": 165, "description": "[Non Alcoholic]" },
      { "name": "Americano", "price": 80 }
    ]
  },
  { 
    "categoryName": "Tandoori Starter", 
    "items": [
      { "name": "Hara Bhara Kabab", "price": 189 },
      { "name": "Mushroom Achari Tikka", "price": 179 },
      { "name": "Mushroom Tikka", "price": 179 },
      { "name": "Paneer Achari Tikka", "price": 219 },
      { "name": "Paneer Hariyali Tikka", "price": 219 },
      { "name": "Paneer Malai Tikka", "price": 189 },
      { "name": "Paneer Tikka", "price": 219 },
      { "name": "Veg Seekh Kabab", "price": 179 }
    ]
  },
  { 
    "categoryName": "Chinese Main Course", 
    "items": [
      { "name": "Chilli Garlic Fried Rice", "price": 179 },
      { "name": "Chilli Paneer Gravy", "price": 239 },
      { "name": "Hakka Noodles", "price": 179 },
      { "name": "Paneer Fried Rice", "price": 199 },
      { "name": "Pav Bhaji", "price": 99 },
      { "name": "Schezwan Fried Rice", "price": 179 },
      { "name": "Triple Rice", "price": 219 },
      { "name": "Veg Fried Rice", "price": 179 },
      { "name": "Veg Manchurian Gravy", "price": 229 },
      { "name": "Veg Noodles", "price": 169 },
      { "name": "Veg Schezwan Noodles", "price": 179 }
    ]
  },
  { 
    "categoryName": "Indian Main Course", 
    "items": [
      { "name": "Aloo Dum Banarsi", "price": 199 },
      { "name": "Aloo Gobhi Matar", "price": 199 },
      { "name": "Aloo Jeera", "price": 199 },
      { "name": "Aloo Parwal", "price": 169 },
      { "name": "Bhindi Bhujia", "price": 130 },
      { "name": "Bhindi Do Pyaza", "price": 150 },
      { "name": "Bhindi Masala", "price": 150 },
      { "name": "Handi Paneer", "price": 259 },
      { "name": "Kadhai Mushroom", "price": 239 },
      { "name": "Kadhai Paneer", "price": 259 },
      { "name": "Kaju Korma", "price": 289 },
      { "name": "Malai Kofta", "price": 239 },
      { "name": "Matar Paneer", "price": 239 },
      { "name": "Mix Veg", "price": 199 },
      { "name": "Mushroom Do Pyaza", "price": 239 },
      { "name": "Mushroom Masala", "price": 239 },
      { "name": "Mushroom Rogan Josh", "price": 239 },
      { "name": "Paneer Angara", "price": 289 },
      { "name": "Paneer Butter Masala", "price": 249 },
      { "name": "Paneer Do Pyaza", "price": 239 },
      { "name": "Paneer Lababdar", "price": 249 },
      { "name": "Paneer Tawa Masala", "price": 289 },
      { "name": "Paneer Tikka Masala", "price": 269 },
      { "name": "Shahi Paneer", "price": 269 },
      { "name": "Veg Jalfrezi", "price": 199 },
      { "name": "Veg Kofta", "price": 229 },
      { "name": "Veg Kolhapuri", "price": 199 }
    ]
  },
  { 
    "categoryName": "Dal", 
    "items": [
      { "name": "Dal Fry", "price": 130 },
      { "name": "Dal Makhani", "price": 180 },
      { "name": "Dal Tadka", "price": 140 },
      { "name": "Punjabi Dal Tadka", "price": 150 },
      { "name": "Plain Dal", "price": 110 }
    ]
  },
  { 
    "categoryName": "Rice", 
    "items": [
      { "name": "Hyderabadi Biryani", "price": 169 },
      { "name": "Jeera Rice", "price": 109 },
      { "name": "Mix Pulao", "price": 129 },
      { "name": "Paneer Biryani", "price": 159 },
      { "name": "Paneer Pulao", "price": 139 },
      { "name": "Peas Pulao", "price": 119 },
      { "name": "Plain Rice", "price": 99 },
      { "name": "Veg Biryani", "price": 149 }
    ]
  },
  { 
    "categoryName": "Bread", 
    "items": [
      { "name": "Aloo Kulcha", "price": 49 },
      { "name": "Butter Naan", "price": 45 },
      { "name": "Garlic Naan", "price": 50 },
      { "name": "Laccha Paratha", "price": 39 },
      { "name": "Missi Roti", "price": 25 },
      { "name": "Mix Kulcha", "price": 45 },
      { "name": "Onion Kulcha", "price": 49 },
      { "name": "Paneer Kulcha", "price": 59 },
      { "name": "Plain Naan", "price": 35 },
      { "name": "Pudina Paratha", "price": 45 },
      { "name": "Stuffed Naan", "price": 49 },
      { "name": "Tandoori Butter Roti", "price": 20 },
      { "name": "Tandoori Roti", "price": 15 }
    ]
  }
];