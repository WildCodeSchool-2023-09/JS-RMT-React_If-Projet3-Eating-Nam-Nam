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
const recipeControllers = require("./controllers/recipeControllers");
const authControllers = require("./controllers/authControllers");
const regimeControllers = require("./controllers/regimeControllers");
const favoriteControllers = require("./controllers/favoriteControllers");

const validateAuth = require("./middlewareValidation/middlewareAuth");
const hashPassword = require("./middleware/hashPasswordSignUp");

// Route to get a list of users
router.get("/users", userControllers.browse);
router.get("/recipes", recipeControllers.browse);
router.get("/favorites", favoriteControllers.browse);
router.get("/regime", regimeControllers.browse);

// Route to post a user
router.get("/recipes/:id", recipeControllers.read);
router.get("/favorites/:id", favoriteControllers.read);

// Route to put a user
router.put("/users/:id", userControllers.update);
// Route to delete a user
router.delete("/users/:id", userControllers.destroy);
// Route to post a new auth

router.post("/auth", authControllers.add);
router.post("/users", userControllers.add);
router.post("/favorites", favoriteControllers.add);
router.post("/signup", validateAuth, hashPassword, authControllers.add);
router.post("/login", validateAuth, authControllers.log);

// Route to get a specific item by ID
// router.get("/items/:id", itemControllers.read);
// Route to add a new item
// router.post("/items", itemControllers.add);
/* ************************************************************************* */

// Route to get a list of regimes

module.exports = router;
