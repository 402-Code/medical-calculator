import Joi from '@hapi/joi';

const schema = Joi.object({
  name: Joi.string().required(),
  dateOfBirth: Joi.string().required(),
  height: Joi.number().required(),
  weight: Joi.number().required(),
  gender: Joi.string().required()
});

export const updateKidValidation = (data) => {
  return schema.validate(data);
};
