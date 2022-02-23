import bcrypt from 'bcryptjs';
import User from '../../../models';

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

const signUp = async (req, res) => {
  const { username, email, password } = req.body;

  // checking if this email is already in db
  const emailExist = await User.findOne({ email });
  if (emailExist)
    return res.status(400).send({ status: 'fail', message: `An account for email ${email} already exist` });

  // hash the password
  const salt = await bcrypt.genSalt(10);
  const pswHash = await bcrypt.hash(password, salt);

  // adding user to db
  const user = new User({ username, email, password: pswHash });
  try {
    const newUser = await user.save();
    const { username, email, date, id } = newUser;
    return res.status(201).send({
      status: 'success',
      user: { username, email, createdAt: date, id }
    });
  } catch (err) {
    return res.status(500).send({ status: 'fail', message: err });
  }
};

export default signUp;
