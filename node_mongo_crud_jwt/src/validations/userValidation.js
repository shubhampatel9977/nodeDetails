const Joi = require('joi');

const signInSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const logInSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });

module.exports = {
  signInSchema,
  logInSchema
};