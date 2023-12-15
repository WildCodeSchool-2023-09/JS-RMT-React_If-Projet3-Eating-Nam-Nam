/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
/*
const { faker } = require("@faker-js/faker");
*/

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
    await database.query("truncate item");
    */

    // Insert fake data into the 'item' table
    /*
    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query("insert into item(title) values (?)", [
          faker.lorem.word(),
        ])
      );
    }
    */
    /*
    const regimes = [
      "INSERT INTO regime(name, description) VALUES ('Flexitarien', 'Mange de tout, normalement, privilégie la qualité à la quantité')",
      "INSERT INTO regime(name, description) VALUES ('Végétarien', 'Ne mange ni poisson, ni viande')",
      "INSERT INTO regime(name, description) VALUES ('Cétogène', 'Privilégie uniquement les aliments à haute teneur en gras saturé')",
      "INSERT INTO regime(name, description) VALUES ('Végétalien', 'Ne mange ni viande, ni poisson, ni fruits de mer')",
      "INSERT INTO regime(name, description) VALUES ('Végan', 'Ne consomme aucun aliment ou produit en lien avec un animal')",
      "INSERT INTO regime(name, description) VALUES ('Sans gluten', 'Ne peut pas consommer de gluten pour des raisons de santé')",
      "INSERT INTO regime(name, description) VALUES ('Sans lactose', 'Ne peut pas consommer de produits laitiers')",
    ];
    */
    /*
    const auth = [
      "INSERT INTO auth(mail,password,isadmin) VALUES ('valeriane.chevalier@gmail.com','valériane',true)",
      "INSERT INTO auth(mail,password,isadmin) VALUES ('g.duffort@gmail.com','grégory',true)",
      "INSERT INTO auth(mail,password,isadmin) VALUES ('thd.dps@gmail.com','thibaud',true)",
      "INSERT INTO auth(mail,password,isadmin) VALUES ('leslie.moraud@gmail.com','leslie',true)",
      "INSERT INTO auth(mail,password,isadmin) VALUES ('tonton.roger@gmail.com','tontonRoger',false)",
    ];
    */

    /*
    const user = [
      "INSERT INTO user(username,birthday,picture,regime_id,auth_id,date_created,date_update) VALUES ('Valihna','1993-11-03','https://upload.wikimedia.org/wikipedia/commons/c/c3/Chat_mi-long.jpg',1,1,'2023-12-13',null)",
      "INSERT INTO user(username,birthday,picture,regime_id,auth_id,date_created,date_update) VALUES ('Grèg','1984-12-31','https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Cat_playing_with_a_lizard.jpg/1920px-Cat_playing_with_a_lizard.jpg',1,2,'2023-12-13',null)",
      "INSERT INTO user(username,birthday,picture,regime_id,auth_id,date_created,date_update) VALUES ('Tibo','1991-08-03','https://upload.wikimedia.org/wikipedia/commons/5/55/Chat_tigr%C3%A9_%C3%A0_poils_mi-longs.jpg',1,3,'2023-12-13',null)",
      "INSERT INTO user(username,birthday,picture,regime_id,auth_id,date_created,date_update) VALUES ('Leslie','1986-10-21','https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Photo_Chat_Noir_et_blanc.jpg/1280px-Photo_Chat_Noir_et_blanc.jpg',1,4,'2023-12-13',null)",
    ];
    */

    /*
    for (let i = 0; i < user.length; i += 1) {
      queries.push(database.query(user[i]));
    }
    */
    /* ************************************************************************* */

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
