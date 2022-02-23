import Joi from '@hapi/joi';

const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(5).required()
  });

  return schema.validate(data);
};

const validateReq = (req, res, next) => {
  const { error } = registerValidation(req.body);
  if (error) {
    res.status(400).send({ status: 'fail', message: error.details[0].message });
  } else {
    next();
  }
};

export default validateReq;
