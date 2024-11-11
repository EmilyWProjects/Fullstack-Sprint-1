//Declare constants
const { Restaurants, Cuisines } = require('./utils/data');
const express = require('express');
const path = require('path');
const {
  generateRandomMenuItem,
  generateMenu,
  selectRandomCuisine,
} = require('./utils/restaurantUtils');

const app = express();
let restaurantData = {}; 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

/**
 * GET /
 * Renders the homepage that lists cities and restaurant names.
 */
app.get('/', (request, response) => {
  const randomCuisine = selectRandomCuisine();
  const randomMenuItem = generateRandomMenuItem(randomCuisine);
  const randomRestaurant = Restaurants[Math.floor(Math.random() * Restaurants.length)];
  const randomMenu = generateMenu();
  response.render('index', {
    restaurants: Restaurants,
    randomRestaurant,
    randomMenu,
    randomMenuItem,
    randomCuisine,
    name: randomMenuItem.name,
    description: randomMenuItem.description,
    price: randomMenuItem.price,
    restaurantName: randomRestaurant.name
  });
});

/**
 * GET /restaurant/:name
 * Displays a specific restaurant's random menu.
 * The cuisine is randomly selected and a menu is generated based on it.
 */
app.get('/restaurant', (request, response) => {
  const restaurantId = request.query.restaurantId;
  const restaurant = Restaurants.find((r) => r.id === restaurantId);
  const menu = generateMenu();
  response.render('restaurant', { 
    restaurant: restaurant, 
    menu: menu
  });
  console.log(`restaurantId: ${restaurantId}`);
});

  //Add any other required routes here

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});