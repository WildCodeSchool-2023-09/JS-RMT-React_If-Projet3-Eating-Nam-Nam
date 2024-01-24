// eslint-disable-next-line import/no-extraneous-dependencies
const jwt = require("jsonwebtoken");

const createToken = (payload) => {
  return jwt.sign(payload, process.env.APP_SECRET);
};

const verifyToken = (payload) => {
  return jwt.verify(payload, process.env.APP_SECRET);
};

module.exports = { createToken, verifyToken };
