const argon = require("argon2");

const hashPassword = async (req, res, next) => {
  try {
    const hash = await argon.hash(req.body.password);

    req.body.hash = hash;

    next();
  } catch (err) {
    console.error("Error hashing password:", err);
    res.sendStatus(500);
  }
};

module.exports = hashPassword;
