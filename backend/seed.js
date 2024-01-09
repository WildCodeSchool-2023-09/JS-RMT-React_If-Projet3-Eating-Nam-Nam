/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();
const { faker } = require("@faker-js/faker");

// Import database client
const database = require("./database/client");
// eslint-disable-next-line import/extensions
const ingredients = require("./database/data/eatingNamNam.json");
const regime = require("./database/data/regimes.json");

const seed = async () => {
  try {
    const queriesRegime = [];
    for (let i = 0; i < regime.length; i += 1) {
      queriesRegime.push(
        database.query(
          `INSERT INTO regime(name, description)
           VALUES (?, ?)`,
          [regime[i].name, regime[i].description]
        )
      );
    }
    await Promise.all(queriesRegime);

    const queriesIngredients = [];
    for (let i = 0; i < ingredients.length; i += 1) {
      const {
        name,
        quantity,
        image,
        calorie,
        carbonhydrate,
        protein,
        lipid,
        fiber,
        category,
      } = ingredients[i];
      queriesIngredients.push(
        database.query(
          `INSERT INTO ingredient(name, quantity,image, calorie, carbonhydrate, protein, lipid, fiber, is_validated, category)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            name,
            quantity,
            image,
            calorie,
            carbonhydrate,
            protein,
            lipid,
            fiber,
            ingredients[i].is_validated,
            category,
          ]
        )
      );
    }

    // Wait for all the insertion queries to complete
    await Promise.all(queriesIngredients);

    const queriesRecipes = [];
    const section = ["Starter", "Dish", "Dessert"];
    const difficulty = ["Easy", "Medium", "Difficult"];
    for (let i = 0; i < 20; i += 1) {
      const time = Math.floor(Math.random()) * 60;
      queriesRecipes.push(
        database.query(
          `INSERT INTO recipe(picture, section, title, preparation_time, cooking_time, difficulty, allergen)
           VALUES (?, ?, ?, ?, ?, ?, ?)`,
          [
            faker.image.urlLoremFlickr({ category: "food" }),
            section[Math.floor(Math.random()) * 3],
            faker.lorem.words(),
            Math.floor(Math.random()) * 30 + time,
            time,
            difficulty[Math.floor(Math.random()) * 3],
            Math.floor(Math.random()) * 2,
          ]
        )
      );
    }
    await Promise.all(queriesRecipes);
    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
