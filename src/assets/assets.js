import main1 from "./Main1.png"
import main2 from "./Main2.png"
import main3 from "./Main3.png"
import main4 from "./Main4.png"
import main5 from "./Main5.png"
import salad1 from "./Salad1.png"
import salad2 from "./Salad2.png"
import salad3 from "./Salad3.png"
import salad4 from "./Salad4.png"
import salad5 from "./Salad5.png"
import dessert1 from "./dessert1.png"
import dessert2 from "./dessert2.png"
import dessert3 from "./dessert3.png"
import dessert4 from "./dessert4.png"
import dessert5 from "./dessert5.png"


import logo from "./Good Kitchen.png"
import search_icon from "./search.svg"
import profile_icon from "./person.svg"
import cart_icon from "./bag.svg"
import menu_icon from "./menu.svg"
import dropdown_icon from "./chevron-down.svg"
import intro_img from "./MainImage.png"
import exchange_icon from "./exchange.svg"
import support_icon from "./headset.svg"
import return_icon from "./return.svg"
import dropdown_right from "./dropdown-right.svg"
import cross_icon from "./cross.svg"
import star_icon from "./star.svg"
import half_star from "./star-half.svg"
import empty_star from "./star-empty.svg"
import trash from "./trash.svg"
import stripe_logo from "./stripe.svg"
import paypal_logo from "./PayPal.jpg"

export const assets = {
    logo,
    search_icon,
    profile_icon,
    cart_icon,
    menu_icon,
    dropdown_icon,
    intro_img,
    exchange_icon,
    support_icon,
    return_icon,
    dropdown_right,
    cross_icon,
    star_icon,
    half_star,
    empty_star,
    trash,
    stripe_logo,
    paypal_logo,
}

export const products = [
    {_id: "1",
    name: "Chachokhbili Chicken",
    description: "Main",
    price: 13.99,
    image: [main1],
    category: "Main Dish",
    subcategory: "Meat",
    ingredients:["Chicken","Red pepper","Cherry Tomatoes","Onion","Basil","Red pepper","Garlic","Oregano"],
    sizes:["S","M","L"],
    date: 1234,
    bestseller: true,
    new: false,
},

{   _id: "2",
    name: "Sesame Pork",
    description: "Main",
    price: 12.99,
    image: [main2],
    category: "Main Dish",
    subcategory: "Meat",
    ingredients:["Pork","Sesame","Sunflower Oil","Garlic","Salt","Balsamic Vinegar", "Black pepper", "Spinach", "Carrots","Cabbage"],
    sizes:["S","M","L"],
    date: 1234,
    bestseller: true,
    new: false,
},

{   _id: "3",
    name: "Pork Steak",
    description: "Main",
    price: 12.99,
    image: [main3],
    category: "Main Dish",
    subcategory: "Meat",
    ingredients:["Pork","Tomato Sauce","Patato","Asparagus","Cumin"],
    sizes:["S","M","L"],
    date: 1234,
    bestseller: false,
    new: true,
},

{   _id: "4",
    name: "Vegeterian Rice",
    description: "Main",
    price: 9.99,
    image: [main4],
    category: "Main Dish",
    subcategory: "Vegeterian",
    ingredients:["Rice","Cucumber","Parsley", "Eggs", "Rosemary", "Coriander"],
    sizes:["S","M","L"],
    date: 1234,
    bestseller: false,
    new: true,
},

{   _id: "5",
    name: "Creme Soup",
    description: "Main",
    price: 9.99,
    image: [main5],
    category: "Main Dish",
    subcategory: "Vegan",
    ingredients:["Zucchini","Peas","Patato", "Bread", "Thyme"],
    sizes:["S","M","L"],
    date: 1234,
    bestseller: false,
    new: true,
},

{   _id: "6",
    name: "Beetroot Salad",
    description: "Salad",
    price: 8.99,
    image: [salad1],
    category: "Salads",
    subcategory: "Vegan",
    ingredients:["Spinach","Beetroot","Apples","Salt","Chia"],
    sizes:["S","M","L"],
    date: 1234,
    bestseller: true,
    new: false,
},

{   _id: "7",
    name: "Mozzarella & Tomatoes",
    description: "Salad",
    price: 6.99,
    image: [salad2],
    category: "Salads",
    subcategory: "Vegeterian",
    ingredients:["Mozzarella Cheese","Tomatoes","Oregano"],
    sizes:["S","M","L"],
    date: 1234,
    bestseller: false,
    new: true,
},

{   _id: "8",
    name: "Sea Salad",
    description: "Salad",
    price: 10.99,
    image: [salad3],
    category: "Salads",
    subcategory: "Meat",
    ingredients:["Lettuce","Crab Sticks","Cherry Tomatoes","Squid","Onion", "Chinese long bean" ],
    sizes:["S","M","L"],
    date: 1234,
    bestseller: false,
    new: true,
},

{   _id: "9",
    name: "Green Salad",
    description: "Salad",
    price: 7.99,
    image: [salad4],
    category: "Salads",
    subcategory: "Vegeterian",
    ingredients:["Cherry Tomatoes","Lettuce","Spinach","Parmesan Cheese", "Cuccumber", "Olive oil"],
    sizes:["S","M","L"],
    date: 1234,
    bestseller: false,
    new: true,
},

{   _id: "10",
    name: "Greek Salad",
    description: "Salad",
    price: 8.99,
    image: [salad5],
    category: "Salads",
    subcategory: "Vegeterian",
    ingredients:["Red onion","Red pepper","Cuccumber","Green Olives", "Cheese", "Parsley"],
    sizes:["S","M","L"],
    date: 1234,
    bestseller: true,
    new: false,
},

{   _id: "11",
    name: "Pancakes",
    description: "Dessert",
    price: 7.99,
    image: [dessert1],
    category: "Desserts",
    subcategory: "Vegeterian",
    ingredients:["Flour","Eggs","Milk","Chocolate", "Strawberry","Sugar"],
    sizes:["S","M","L"],
    date: 1234,
    bestseller: false,
    new: true,
},

{   _id: "12",
    name: "Rasberry Cheesecake",
    description: "Dessert",
    price: 7.99,
    image: [dessert2],
    category: "Desserts",
    subcategory: "Vegeterian",
    ingredients:["Rasberries","Cheese","Butter","Sugar","Creme","Lemon","Eggs","Blueberries"],
    sizes:["S","M","L"],
    date: 1234,
    bestseller: false,
    new: true,
},

{   _id: "13",
    name: "Mascarpone Chocolate Cake",
    description: "Dessert",
    price: 9.99,
    image: [dessert3],
    category: "Desserts",
    subcategory: "Vegeterian",
    ingredients:["Chocolate","Mascarpone","Creme","Sugar","flour"],
    sizes:["S","M","L"],
    date: 1234,
    bestseller: false,
    new: true,
},

{   _id: "14",
    name: "Chocolate Cake",
    description: "Dessert",
    price: 8.99,
    image: [dessert4],
    category: "Desserts",
    subcategory: "Vegeterian",
    ingredients:["Cocoa","Sugar","Flour","Eggs",],
    sizes:["S","M","L"],
    date: 1234,
    bestseller: true,
    new: false,
},

{   _id: "15",
    name: "Mini White Chocolate Cake",
    description: "Dessert",
    price: 9.99,
    image: [dessert5],
    category: "Desserts",
    subcategory: "Vegeterian",
    ingredients:["Flour","Sugar","White Chocolate","Straberries","Eggs"],
    sizes:["S","M","L"],
    date: 1234,
    bestseller: false,
    new: true,
},




]