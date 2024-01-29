const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const favorites = await tables.favorites.readAll();

    res.status(200).json(favorites);
  } catch (err) {
    next(err);
  }
};
const read = async (req, res, next) => {
  try {
    const favorite = await tables.favorites.readByUserId(req.params.id);

    res.status(200).json(favorite);
  } catch (err) {
    next(err);
  }
};
const add = async (req, res, next) => {
  const favorites = req.body;
  try {
    const insertId = await tables.favorites.create(favorites, req.user.id);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};
const update = async (req, res, next) => {
  const favorites = req.body;

  try {
    const result = await tables.favorites.update(req.params.id, favorites);
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
    await tables.favorites.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};
module.exports = {
  browse,
  read,
  add,
  update,
  destroy,
};
