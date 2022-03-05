import * as yup from 'yup';

const MIN_PASSWORD_LENGTH = 5;

// eslint-disable-next-line import/prefer-default-export
export const signUpSchema = yup.object({
  userName: yup.string().required(),
  mail: yup.string().email().required(),
  password: yup.string().min(MIN_PASSWORD_LENGTH).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password')], null)
});
