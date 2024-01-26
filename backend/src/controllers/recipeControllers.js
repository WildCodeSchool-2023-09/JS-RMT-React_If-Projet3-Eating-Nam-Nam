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

const update = async (req, res, next) => {
  const recipe = req.body;

  try {
    const result = await tables.recipe.update(req.params.id, recipe);

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
    await tables.recipe.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  update,
  destroy,
};
