import Joi from '@hapi/joi';

export const updateKidValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    dateOfBirth: Joi.string().required(),
    height: Joi.number().required(),
    weight: Joi.number().required(),
    gender: Joi.string().required()
  });

  return schema.validate(data);
};
