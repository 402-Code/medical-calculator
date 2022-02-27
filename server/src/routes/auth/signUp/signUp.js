import bcrypt from 'bcryptjs';
import User from '../../../models';
import { signupValidation } from './validateSignUp';
import { StatusCodes } from 'http-status-codes';

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

const signUp = async (req, res) => {
  const { username, email, password } = req.body;

  //validation
  const { error } = signupValidation(req.body);
  if (error) return res.status(StatusCodes.BAD_REQUEST).send({ message: 'Invalid credentials' });

  // checking if this email is already in db
  const isEmailExists = await User.findOne({ email });
  if (isEmailExists) return res.status(StatusCodes.BAD_REQUEST).send({ message: 'Invalid credentials' });

  // hash the password
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  // adding user to db
  const user = new User({ username, email, password: passwordHash });
  try {
    const newUser = await user.save();
    const { username, email, createdAt, id } = newUser;
    return res.status(StatusCodes.BAD_REQUEST).send({
      user: { username, email, createdAt, id }
    });
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Invalid credentials' });
  }
};

export default signUp;
