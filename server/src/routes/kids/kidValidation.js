import Joi from '@hapi/joi';

const schema = Joi.object({
  name: Joi.string().required(),
  dateOfBirth: Joi.string().required(),
  height: Joi.number().positive().required(),
  weight: Joi.number().positive().required(),
  gender: Joi.string().required()
});

export const updateKidValidation = (data) => {
  return schema.validate(data);
};
