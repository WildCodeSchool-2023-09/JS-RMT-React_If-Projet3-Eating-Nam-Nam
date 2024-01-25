// Import access to database tables
const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const ingredients = await tables.ingredient.readAll();
    res.status(200).json(ingredients);
  } catch (err) {
    next(err);
  }
};


const update = async (req, res, next) => {
  const ingredient = req.body;

  try {
    const result = await tables.ingredient.update(req.params.id, ingredient);

    if (result.affectedRows === 1) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.ingredient.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

// const read = async (req, res, next) => {
//   try {
//     const ingredient = await tables.ingredient.readById(req.params.id);

//     res.status(200).json(ingredient);
//   } catch (err) {
//     next(err);
//   }
// };


// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
// const update = async (req, res, next) => {
//   // Extract the user data from the request body
//   const user = req.body;
//   try {
//     // Fetch a specific city from the database based on the provided ID
//     const result = await tables.user.update(req.params.id, user);
//     // If the user is not found, respond with HTTP 404 (Not Found)
//     if (result.affectedRows === 1) {
//       res.sendStatus(204);
//     } else {
//       res.sendStatus(404);
//     }
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };
// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the user data from the request body
  const ingredient = req.body;
  try {
    // Insert the user into the database
    const insertId = await tables.ingredient.create(ingredient);
    // Respond with HTTP 201 (Created) and the ID of the newly inserted user
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
// const destroy = async (req, res, next) => {
//   try {
//     await tables.user.delete(req.params.id);
//     res.sendStatus(204);
//   } catch (err) {
//     next(err);
//   }
// };
// Ready to export the controller functions
module.exports = {
  browse,
  //   read,
  update,
  add,
  destroy,
};
