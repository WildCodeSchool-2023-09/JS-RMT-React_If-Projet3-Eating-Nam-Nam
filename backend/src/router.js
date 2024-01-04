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
const authControllers = require("./controllers/authControllers");

// Route to get a list of users
router.get("/users", userControllers.browse);
// Route to put a user
router.put("/users/:id", userControllers.update);
// Route to delete a user
router.delete("/users/:id", userControllers.destroy);

// Route to post a new auth
router.post("/auth", authControllers.add);

/*
// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);
*/
router.get("/ingredient", ingredientControllers.browse);
router.post("/ingredient", ingredientControllers.add);

/* ************************************************************************* */

module.exports = router;
