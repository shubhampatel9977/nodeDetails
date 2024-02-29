const Joi = require("joi");

const studentSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  college: Joi.string().required(),
  designation: Joi.string().required(),
});

const studentIdSchema = Joi.object({
    id: Joi.string().hex().length(24).required(),
})

module.exports = {
  studentSchema,
  studentIdSchema,
};
