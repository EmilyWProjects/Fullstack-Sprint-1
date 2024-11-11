const { Cuisines, Dishes } = require("../../utils/data");
const { generateRandomMenuItem, generateMenu, selectRandomCuisine } = require("../../utils/restaurantUtils");


//Begin testing functions as stated in utils
describe("Restaurant Functions", () => {
  describe("generateRandomMenuItem", () => {
    test("Must give a reandom dish given a cuisine", () => {
      const cuisine = 'mexican';
      const menuItem = generateRandomMenuItem(cuisine);
      expect(menuItem).toHaveProperty('name');
      expect(menuItem).toHaveProperty('description');
      expect(menuItem).toHaveProperty('price');
      expect(menuItem).toHaveProperty('dailySpecial');
    });
  });

  describe("generateMenu", () => {
    test("Must provide a list of dishes given a cuisine of between 5 and 10 entries", () => {
      const cuisine = 'mexican';
      const menu = generateMenu(cuisine);
      expect(menu.items.length).toBeGreaterThanOrEqual(5);
      expect(menu.items.length).toBeLessThanOrEqual(10);
      expect(Cuisines).toContain(menu.cuisine);
      menu.items.forEach((item) => {
        expect(item).toHaveProperty('name');
        expect(item).toHaveProperty('description');
        expect(item).toHaveProperty('price');
        expect(item).toHaveProperty('dailySpecial');
      });
    });
  });

  describe("selectRandomCuisine", () => {
    test("Must give a random cuisine from the datapack", () => {
      const cuisine = selectRandomCuisine();
      expect(Cuisines).toContain(cuisine);
    });
  });
});

