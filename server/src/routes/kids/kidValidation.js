import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().required(),
  dateOfBirth: Joi.date().required(),
  height: Joi.number().positive().required(),
  weight: Joi.number().positive().required(),
  gender: Joi.string().required(),
  avatar: Joi.string(),
  _id: Joi.string()
});

export const updateKidValidation = (data) => {
  return schema.validate(data);
};
