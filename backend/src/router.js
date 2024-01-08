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
const authControllers = require("./controllers/authControllers");
const regimeControllers = require("./controllers/regimeControllers");

const validateAuth = require("./middlewareValidation/middlewareSignUp");
const validateLogin = require("./middlewareValidation/middlewareLogin");
const hashPassword = require("./middleware/hashPasswordSignUp");

// Route to get a list of users
router.get("/users", userControllers.browse);
// Route to post a user
router.post("/users", userControllers.add);
// Route to put a user
router.put("/users/:id", userControllers.update);
// Route to delete a user
router.delete("/users/:id", userControllers.destroy);

// Route to get an id auth
router.get("/auth", authControllers.read);
// Route to post a new auth
router.post("/signup", validateAuth, hashPassword, authControllers.add);
// Route to post a new auth
router.post("/login", validateLogin, authControllers.log);

// Route to get a list of regimes
router.get("/regime", regimeControllers.browse);

module.exports = router;
