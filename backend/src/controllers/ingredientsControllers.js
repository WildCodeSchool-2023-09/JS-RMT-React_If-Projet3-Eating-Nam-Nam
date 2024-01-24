const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const ingredients = await tables.ingredient.readAll();

    res.status(200).json(ingredients);
  } catch (err) {
    next(err);
  }
};
const read = async (req, res, next) => {
  try {
    const ingredient = await tables.ingredient.readById(req.params.id);

    res.status(200).json(ingredient);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
};
