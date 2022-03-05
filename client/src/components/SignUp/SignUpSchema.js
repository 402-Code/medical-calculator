import * as yup from 'yup';
import yupLocalePL from 'yup-locale-pl';

yup.setLocale(yupLocalePL);

const MIN_PASSWORD_LENGTH = 5;

// eslint-disable-next-line import/prefer-default-export
export const signUpSchema = yup.object({
  imię: yup.string().required(),
  email: yup.string().email().required(),
  hasło: yup.string().min(MIN_PASSWORD_LENGTH).required(),
  confirmPassword: yup.string().oneOf([yup.ref('hasło')], 'Hasła muszą się zgadzać')
});
