const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const recipes = await tables.recipe.readAll();

    const favoritesByUser = await tables.favorites.readAllById(req.user.id);

    res.status(200).json(
      recipes.map((rec) => ({
        ...rec,
        fav: favoritesByUser.some((fav) => fav.recipe_id === rec.id),
      }))
    );
  } catch (err) {
    next(err);
  }
};

const recipesSections = async (req, res, next) => {
  try {
    const sections = await tables.recipe.readAllSections();

    res.status(200).json(sections);
  } catch (err) {
    next(err);
  }
};

const totalNumber = async (req, res, next) => {
  try {
    const numberOfrecipes = await tables.recipe.readNumberOfRecipes();

    res.status(200).json(numberOfrecipes[0]);
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
  recipesSections,
  totalNumber,
  read,
  update,
  destroy,
};
