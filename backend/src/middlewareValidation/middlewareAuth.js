const Joi = require("joi");

const schema = Joi.object({
  mail: Joi.string().email().required(),
  password: Joi.string().required(),
});

const validateAuth = (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(422).json(error);
  } else {
    next();
  }
};

module.exports = validateAuth;
