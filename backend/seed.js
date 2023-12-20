/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    // Optional: Truncate tables (remove existing data)

    /*
    await database.query("truncate auth");
    */

    const regimes = [
      "INSERT INTO regime(name, description) VALUES ('Flexitarien', 'Mange de tout, normalement, privilégie la qualité à la quantité')",
      "INSERT INTO regime(name, description) VALUES ('Végétarien', 'Ne mange ni poisson, ni viande')",
      "INSERT INTO regime(name, description) VALUES ('Cétogène', 'Privilégie uniquement les aliments à haute teneur en gras saturé')",
      "INSERT INTO regime(name, description) VALUES ('Végétalien', 'Ne mange ni viande, ni poisson, ni fruits de mer')",
      "INSERT INTO regime(name, description) VALUES ('Végan', 'Ne consomme aucun aliment ou produit en lien avec un animal')",
      "INSERT INTO regime(name, description) VALUES ('Sans gluten', 'Ne peut pas consommer de gluten pour des raisons de santé')",
      "INSERT INTO regime(name, description) VALUES ('Sans lactose', 'Ne peut pas consommer de produits laitiers')",
    ];

    const auth = [
      "INSERT INTO auth(mail,password,is_admin) VALUES ('valeriane.chevalier@gmail.com','valériane',true)",
      "INSERT INTO auth(mail,password,is_admin) VALUES ('g.duffort@gmail.com','grégory',true)",
      "INSERT INTO auth(mail,password,is_admin) VALUES ('thd.dps@gmail.com','thibaud',true)",
      "INSERT INTO auth(mail,password,is_admin) VALUES ('leslie.moraud@gmail.com','leslie',true)",
      "INSERT INTO auth(mail,password,is_admin) VALUES ('tonton.roger@gmail.com','tontonRoger',false)",
    ];

    const user = [
      "INSERT INTO user(username,birthday,picture,regime_id,auth_id,date_created,date_update) VALUES ('Valihna','1993-11-03','https://upload.wikimedia.org/wikipedia/commons/c/c3/Chat_mi-long.jpg',1,1,'2023-12-13',null)",
      "INSERT INTO user(username,birthday,picture,regime_id,auth_id,date_created,date_update) VALUES ('Grèg','1984-12-31','https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Cat_playing_with_a_lizard.jpg/1920px-Cat_playing_with_a_lizard.jpg',1,2,'2023-12-13',null)",
      "INSERT INTO user(username,birthday,picture,regime_id,auth_id,date_created,date_update) VALUES ('Tibo','1991-08-03','https://upload.wikimedia.org/wikipedia/commons/5/55/Chat_tigr%C3%A9_%C3%A0_poils_mi-longs.jpg',1,3,'2023-12-13',null)",
      "INSERT INTO user(username,birthday,picture,regime_id,auth_id,date_created,date_update) VALUES ('Leslie','1986-10-21','https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Photo_Chat_Noir_et_blanc.jpg/1280px-Photo_Chat_Noir_et_blanc.jpg',1,4,'2023-12-13',null)",
    ];

    for (let i = 0; i < regimes.length; i += 1) {
      queries.push(database.query(regimes[i]));
    }

    for (let i = 0; i < auth.length; i += 1) {
      queries.push(database.query(auth[i]));
    }
    for (let i = 0; i < user.length; i += 1) {
      queries.push(database.query(user[i]));
    }

    const seedData = [
      {
        name: "butter nut squash",
        quantity: "piece",
        image: "butternut-squash.jpg",
        calorie: "337.5 kcal",
        carbonhydrate: "87.68 g",
        protein: "7.5 g",
        lipid: "0.75 g",
        fiber: "15 g",
        isValidate: true,
        category: "winter squash",
      },
      {
        name: "milk chocolate",
        quantity: "square",
        image: "milk-chocolate.jpg",
        calorie: "141.96 kcal",
        carbonhydrate: "16.91 g",
        protein: "1.09 g",
        lipid: "9.58 g",
        fiber: "1.54 g",
        isValidate: true,
        category: "chocolate",
      },
      {
        name: "egg white",
        quantity: "large",
        image: "egg-white.jpg",
        calorie: "15.6 kcal",
        carbonhydrate: "0.22 g",
        protein: "3.27 g",
        lipid: "0.05 g",
        fiber: "0 g",
        isValidate: false,
        category: "egg",
      },
      {
        name: "sugar pumpkin",
        quantity: "piece",
        image: "pumpkin.png",
        calorie: "353.6 kcal",
        carbonhydrate: "88.4 g",
        protein: "13.6 g",
        lipid: "1.36 g",
        fiber: "6.8 g",
        isValidate: false,
        category: "pumpkin",
      },
      {
        name: "strawberry",
        quantity: "container",
        image: "strawberries.png",
        calorie: "3.84 kcal",
        carbonhydrate: "0.92 g",
        protein: "0.08 g",
        lipid: "0.04 g",
        fiber: "0.24 g",
        isValidate: false,
        category: "berries",
      },
      {
        name: "apples",
        quantity: "small",
        image: "apple.jpg",
        calorie: "94.64 kcal",
        carbonhydrate: "25.12 g",
        protein: "0.47 g",
        lipid: "0.31 g",
        fiber: "4.37 g",
        isValidate: false,
        category: "fruit",
      },
      {
        name: "cherry",
        quantity: "cherry",
        image: "cherries.jpg",
        calorie: "5.04 kcal",
        carbonhydrate: "1.28 g",
        protein: "0.08 g",
        lipid: "0.02 g",
        fiber: "0.17 g",
        isValidate: true,
        category: "fruit",
      },
      {
        name: "pear liqueur",
        quantity: "g",
        image: "light-green-liqueur.png",
        calorie: "3.68 kcal",
        carbonhydrate: "0.39 g",
        protein: "0 g",
        lipid: "0 g",
        fiber: "0 g",
        isValidate: false,
        category: "liqueur",
      },
      {
        name: "eggplants",
        quantity: "piece",
        image: "eggplant.png",
        calorie: "114.5 kcal",
        carbonhydrate: "26.93 g",
        protein: "4.49 g",
        lipid: "0.82 g",
        fiber: "13.74 g",
        isValidate: true,
        category: "vegetable",
      },
      {
        name: "carrots",
        quantity: "small",
        image: "sliced-carrot.png",
        calorie: "25.01 kcal",
        carbonhydrate: "5.84 g",
        protein: "0.57 g",
        lipid: "0.15 g",
        fiber: "1.71 g",
        isValidate: false,
        category: "root vegetable",
      },
      {
        name: "tomatoes",
        quantity: "small",
        image: "tomato.png",
        calorie: "22.14 kcal",
        carbonhydrate: "4.78 g",
        protein: "1.08 g",
        lipid: "0.25 g",
        fiber: "1.48 g",
        isValidate: false,
        category: "vegetable",
      },
      {
        name: "rice",
        quantity: "g",
        image: "uncooked-white-rice.png",
        calorie: "3.65 kcal",
        carbonhydrate: "0.8 g",
        protein: "0.07 g",
        lipid: "0.01 g",
        fiber: "0.01 g",
        isValidate: false,
        category: "grains",
      },
      {
        name: "olive oil",
        quantity: "spoonful",
        image: "olive-oil.jpg",
        calorie: "8.84 kcal",
        carbonhydrate: "0 g",
        protein: "0 g",
        lipid: "1 g",
        fiber: "0 g",
        isValidate: false,
        category: "cooking oil",
      },
      {
        name: "noodles",
        quantity: "square",
        image: "fusilli.jpg",
        calorie: "59.36 kcal",
        carbonhydrate: "11.95 g",
        protein: "2.09 g",
        lipid: "0.24 g",
        fiber: "0.51 g",
        isValidate: true,
        category: "side dish",
      },
      {
        name: "chicken wing",
        quantity: "piece",
        image: "chicken-wings.png",
        calorie: "106.69 kcal",
        carbonhydrate: "0 g",
        protein: "8.81 g",
        lipid: "7.68 g",
        fiber: "0 g",
        isValidate: false,
        category: "chicken",
      },
      {
        name: "lemons",
        quantity: "wedge or slice",
        image: "lemon.png",
        calorie: "31.32 kcal",
        carbonhydrate: "10.07 g",
        protein: "1.19 g",
        lipid: "0.32 g",
        fiber: "3.02 g",
        isValidate: true,
        category: "citrus fruit",
      },
      {
        name: "leeks",
        quantity: "piece",
        image: "leeks.jpg",
        calorie: "54.29 kcal",
        carbonhydrate: "12.64 g",
        protein: "1.34 g",
        lipid: "0.27 g",
        fiber: "1.6 g",
        isValidate: true,
        category: "vegetable",
      },
    ];
    for (let i = 0; i < 1; i += 1) {
      queries.push(
        database.query(
          `INSERT INTO ingredient(name, quantity,image, calorie, carbonhydrate, protein, lipid, fiber, isValidate, category)
           VALUES (${seedData[i].name},${seedData[i].quantity},${seedData[i].image},${seedData[i].calorie},
           ${seedData[i].carbonhydrate},${seedData[i].protein},${seedData[i].lipid},${seedData[i].fiber},${seedData[i].isValidate},
           ${seedData[i].category})`
        )
      );
    }

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
