const Joi = require('joi');
const schema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  phone: Joi.number().required(),
});

module.exports = schema;
