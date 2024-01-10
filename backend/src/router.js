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

const validateAuth = require("./middlewareValidation/middlewareAuth");
const hashPassword = require("./middleware/hashPasswordSignUp");

// Route to get a list of users
router.get("/users", userControllers.browse);

router.get("/recipes", recipeControllers.browse);

// Route to post a user
router.post("/users", userControllers.add);

// Route to put a user
router.put("/users/:id", userControllers.update);
// Route to delete a user
router.delete("/users/:id", userControllers.destroy);
// Route to post a new auth

router.post("/auth", authControllers.add);
// Route to get a specific item by ID
// router.get("/items/:id", itemControllers.read);
router.get("/recipes/:id", recipeControllers.read);
// Route to add a new item

// router.post("/items", itemControllers.add);

router.get("/ingredients", ingredientControllers.browse);
router.post("/ingredients", ingredientControllers.add);


// router.post("/items", itemControllers.add);


router.post("/signup", validateAuth, hashPassword, authControllers.add);
// Route to post a new auth
router.post("/login", validateAuth, authControllers.log);

// Route to get a list of regimes
router.get("/regime", regimeControllers.browse);

module.exports = router;
