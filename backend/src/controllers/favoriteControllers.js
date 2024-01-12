const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const favorites = await tables.favorite.readAll();

    res.status(200).json(favorites);
  } catch (err) {
    next(err);
  }
};
const read = async (req, res, next) => {
  try {
    const favorite = await tables.favorite.readById(req.params.id);

    res.status(200).json(favorite);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
};
