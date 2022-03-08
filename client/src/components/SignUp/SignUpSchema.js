import * as yup from 'yup';
import yupLocalePL from 'yup-locale-pl';

yup.setLocale(yupLocalePL);

const MIN_PASSWORD_LENGTH = 5;

export const signUpSchema = yup.object({
  username: yup.string().required().label('imię'),
  email: yup.string().email().required(),
  password: yup.string().min(MIN_PASSWORD_LENGTH).required().label('hasło'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Hasła muszą się zgadzać')
});
