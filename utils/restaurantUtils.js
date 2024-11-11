//declare constants
const { Dishes, Cuisines, Restaurants } = require('./data');

/**
 * Generates a random menu item based on a given cuisine.
 * @param {string} cuisine - The desired cuisine for the menu item.
 * @returns {*} A random menu item with a name, description, price, and special status.
 */

function generateRandomMenuItem(cuisine) {
  const dishes = Dishes[cuisine];
  const randomDish = dishes[Math.floor(Math.random() * dishes.length)];
  return { 
    ...randomDish, 
    price: (Math.random() * 5 + 15).toFixed(2),
    dailySpecial: Math.random() > 0.9
  };
}

/**
 * Selects a random cuisine type for a restaurant.
 * @returns {*} A random cuisine type.
 */

function selectRandomCuisine() {
  return Cuisines[Math.floor(Math.random() * Cuisines.length)];
}


/**
 * Generates a menu for a restaurant, including a random cuisine type and a list of menu items.
 * @returns {*} An object representing the restaurant's menu, including the cuisine type and items.
 */

function generateMenu() {
  const cuisine = selectRandomCuisine();
  const itemAmount = Math.floor(Math.random() * 6) + 5;
  const menu = Array.from({ length: itemAmount }, () => generateRandomMenuItem(cuisine));
  return {
    cuisine: cuisine,
    items: menu
  };
}

//Export the data
module.exports = { generateRandomMenuItem, selectRandomCuisine, generateMenu };

