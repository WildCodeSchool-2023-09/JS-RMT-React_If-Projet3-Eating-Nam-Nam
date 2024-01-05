const database = require("../../database/client");

const getRecipe = (req, res) => {
  database
    .query("SELECT * FROM recipe")
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getRecipeByID = (req, res) => {
  const id = parseInt(req.params.id, 10);

  database
    .query("SELECT * FROM recipe WHERE id = ? ", [id])
    .then((result) => {
      // console.log(result[0][0]);
      if (result[0][0]) {
        res.status(200).json(result[0][0]);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getRecipe,
  getRecipeByID,
};
