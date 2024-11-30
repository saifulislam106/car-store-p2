import Joi from 'joi';

const carValidateSchema = Joi.object({
  brand: Joi.string().min(2).max(40).required(),
  model: Joi.string().required(),
  year: Joi.number().integer().required(),
  price: Joi.number().min(0).required(),
  category: Joi.string()
    .valid("Sedan", "SUV", "Truck", "Coupe", "Convertible")
    .required(),
  description: Joi.string().required(),
  quantity: Joi.number().integer().required(),
  inStock: Joi.boolean().required()
});

export default carValidateSchema;
