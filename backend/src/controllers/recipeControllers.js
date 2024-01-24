const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const recipes = await tables.recipe.readAll();

    res.status(200).json(recipes);
  } catch (err) {
    next(err);
  }
};
const read = async (req, res, next) => {
  try {
    const recipe = await tables.recipe.readById(req.params.id);

    res.status(200).json(recipe);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
};
