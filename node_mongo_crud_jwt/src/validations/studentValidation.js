const Joi = require("joi");

const studentSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  like: Joi.number().required(),
});

const studentIdSchema = Joi.object({
    id: Joi.string().required(),
})

const studentLikeSchema = Joi.object({
    like: Joi.boolean().required(),
})

module.exports = {
  studentSchema,
  studentIdSchema,
  studentLikeSchema
};
