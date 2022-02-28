import Joi from '@hapi/joi';

export const signInValidation = (data) => {
    const schema = Joi.object({
      email: Joi.string().required().email(),
      password: Joi.string().min(5).required()
    });
  
    return schema.validate(data);
};
