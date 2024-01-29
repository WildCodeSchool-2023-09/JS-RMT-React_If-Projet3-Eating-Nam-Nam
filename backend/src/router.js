/* eslint-disable no-undef */
const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
// Import itemControllers module for handling item-related operations
/*
const itemControllers = require("./controllers/itemControllers");
*/
const userControllers = require("./controllers/userControllers");
const ingredientControllers = require("./controllers/ingredientControllers");
const recipeControllers = require("./controllers/recipeControllers");
const authControllers = require("./controllers/authControllers");
const regimeControllers = require("./controllers/regimeControllers");
const favoriteControllers = require("./controllers/favoriteControllers");
const validateAuth = require("./middlewareValidation/middlewareAuth");
const hashPassword = require("./middleware/hashPasswordSignUp");
const checkCredentials = require("./middleware/checkCredentials");
// Route to get a list of users

router.get("/users/regimes", userControllers.usersRegimes);
router.get(
  "/recipes/sections",
  checkCredentials,
  recipeControllers.recipesSections
);
router.get("/users", checkCredentials, userControllers.browse);
router.get("/users/stats/nb", checkCredentials, userControllers.totalNumber);
router.get("/recipes", checkCredentials, recipeControllers.browse);
router.get(
  "/recipes/stats/nb",
  checkCredentials,
  recipeControllers.totalNumber
);
router.get("/ingredients", checkCredentials, ingredientControllers.browse);
router.get(
  "/ingredients/stats/nb",
  checkCredentials,
  ingredientControllers.totalNumber
);
router.get("/favorites", checkCredentials, favoriteControllers.browse);
router.get("/regime", checkCredentials, regimeControllers.browse);
router.get("/recipes/:id", checkCredentials, recipeControllers.read);
router.get("/favorites/:id", checkCredentials, favoriteControllers.read);

// Route to put a user
router.put("/users/:id", checkCredentials, userControllers.update);
router.put("/ingredients/:id", checkCredentials, ingredientControllers.update);
router.put("/recipes/:id", checkCredentials, recipeControllers.update);
router.put("/favorites/:id", checkCredentials, favoriteControllers.update);
router.delete("/users/:id", checkCredentials, userControllers.destroy);
router.delete(
  "/ingredients/:id",
  checkCredentials,
  ingredientControllers.destroy
);
router.delete("/recipes/:id", checkCredentials, recipeControllers.destroy);
router.delete("/favorites/:id", checkCredentials, favoriteControllers.destroy);

router.post("/ingredients", checkCredentials, ingredientControllers.add);
router.post("/auth", checkCredentials, authControllers.add);
router.post("/users", checkCredentials, userControllers.add);
router.post("/favorites", checkCredentials, favoriteControllers.add);
router.post("/signup", validateAuth, hashPassword, authControllers.add);
router.post("/login", validateAuth, authControllers.log);

module.exports = router;
