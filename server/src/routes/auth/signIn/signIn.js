import bcrypt from 'bcryptjs';
import User from '../../../models';
import { signInValidation } from './validateSignIn';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';


/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

 const signIn = async (req, res) => {
 const { error } = signInValidation(req.body)
 if (error) return res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message);

 const user = await User.findOne({ email: req.body.email });
 if (!user) return res.status(StatusCodes.BAD_REQUEST).send('Email is not found');

 const isPasswordValid = await bcrypt.compare(req.body.password, user.password)
 if (!isPasswordValid) return res.status(StatusCodes.BAD_REQUEST).send('Password incorrect');

const accessToken = jwt.sign({_id: user._id}, process.env.SECRET_TOKEN)
res.cookie('access-token', accessToken, {
    httpOnly: true
})
res.status(StatusCodes.OK).end()
}

export default signIn
