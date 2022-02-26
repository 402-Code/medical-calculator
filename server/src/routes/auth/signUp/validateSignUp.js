import Joi from '@hapi/joi';

export const signupValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(5).required()
  });

  return schema.validate(data);
};
