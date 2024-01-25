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
router.get("/users", checkCredentials, userControllers.browse);
router.get("/recipes", checkCredentials, recipeControllers.browse);
router.get("/ingredients", checkCredentials, ingredientControllers.browse);
router.get("/favorites", checkCredentials, favoriteControllers.browse);
router.get("/regime", checkCredentials, regimeControllers.browse);
router.get("/recipes/:id", checkCredentials, recipeControllers.read);
router.get("/favorites/:id", checkCredentials, favoriteControllers.read);

// Route to put a user
router.put("/users/:id", checkCredentials, userControllers.update);
router.put("/ingredients/:id", checkCredentials, ingredientControllers.update);
// Route to delete a user
router.delete("/users/:id", checkCredentials, userControllers.destroy);
router.delete(
  "/ingredients/:id",
  checkCredentials,
  ingredientControllers.destroy
);
// Route to post a new auth

router.post("/ingredients", checkCredentials, ingredientControllers.add);
router.post("/auth", checkCredentials, authControllers.add);
router.post("/users", checkCredentials, userControllers.add);
router.post("/favorites", checkCredentials, favoriteControllers.add);
router.post("/signup", validateAuth, hashPassword, authControllers.add);
router.post("/login", validateAuth, authControllers.log);

// Route to get a specific item by ID
// router.get("/items/:id", itemControllers.read);
// Route to add a new item

// router.post("/items", itemControllers.add);

// router.post("/items", itemControllers.add);

// Route to get a list of regimes

module.exports = router;
