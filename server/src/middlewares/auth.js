import jwt from 'jsonwebtoken';
import User from '../models';

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function authMiddleware(req, res, next) {
  try {
    const accessToken = req.cookies['access-token'];

    const payload = jwt.verify(accessToken, process.env.SECRET_TOKEN);

    const user = await User.findById(payload._id);
    req.user = user;

    return next();
  } catch (err) {
    res.status(401).send({ message: 'Brak autoryzacji' });
  }
}
