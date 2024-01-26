/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();
const database = require("./database/client");
const ingredients = require("./database/data/eatingNamNam.json");
const regime = require("./database/data/regimes.json");
const auths = require("./database/data/auths.json");
const users = require("./database/data/users.json");
const recipe = require("./database/data/recipe.json");

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

    const queriesAuth = [];
    for (let i = 0; i < auths.length; i += 1) {
      queriesAuth.push(
        database.query(
          `INSERT INTO auth(mail, password, is_admin)
            VALUES (?, ?, ?)`,
          [auths[i].mail, auths[i].password, auths[i].is_admin]
        )
      );
    }
    await Promise.all(queriesAuth);

    const queriesUser = [];
    for (let i = 0; i < users.length; i += 1) {
      queriesUser.push(
        database.query(
          `INSERT INTO user(username, birthday, picture, regime_id, auth_id)
            VALUES (?, ?, ?, ?, ?)`,
          [
            users[i].username,
            users[i].birthday,
            users[i].picture,
            users[i].regime_id,
            users[i].auth_id,
          ]
        )
      );
    }
    await Promise.all(queriesUser);

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
        isValidated,
      } = ingredients[i];
      queriesIngredients.push(
        database.query(
          `INSERT INTO ingredient(name, quantity, image, calorie, carbonhydrate, protein, lipid, fiber, is_validated, category)
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
            isValidated,
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
    // for (let i = 0; i < 20; i += 1) {
    for (let i = 0; i < recipe.length; i += 1) {
      const { picture, title, preparationTime, cookingTime, diet, allergen } =
        recipe[i];
      queriesRecipes.push(
        database.query(
          `INSERT INTO recipe(picture, section, title, preparation_time, cooking_time, diet, difficulty, allergen)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            picture,
            section[Math.floor(Math.random()) * 3],
            title,
            preparationTime,
            cookingTime,
            diet,
            difficulty[Math.floor(Math.random()) * 3],
            allergen,
          ]
        )
      );
    }

    await Promise.all(queriesRecipes);

    const queriesIngrByRecip = [];

    for (let i = 0; i < recipe.length; i += 1) {
      const nbOfIngr = Math.ceil(Math.random() * 7) + 3;
      for (let j = 0; j < nbOfIngr; j += 1) {
        queriesIngrByRecip.push(
          database.query(
            `INSERT INTO recipe_ingr(recipe_id, ingr_id, quantity)
             VALUES (?, ?, ?)`,
            [
              i + 1,
              Math.ceil(Math.random() * ingredients.length),
              Math.ceil(Math.random() * 10),
            ]
          )
        );
      }
    }

    await Promise.all(queriesIngrByRecip);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
