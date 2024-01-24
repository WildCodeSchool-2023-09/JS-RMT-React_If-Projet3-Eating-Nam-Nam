const { verifyToken } = require("../services/jwt");

const checkCredentials = (req, res, next) => {
  const decode = verifyToken(req.cookies.auth);
  if (decode) {
    req.user = decode;
    next();
  } else {
    res.sendStatus(403);
  }
};
module.exports = checkCredentials;

//  une fois ajouté sur les routes du router il faut être log, cela rends les requetes autonomes! //
