import { StatusCodes } from 'http-status-codes';
import User from '../../models/user';

const getAllKids = async (req, res) => {
  try {
    const users = await User.findOne({ _id: req.params.userId });
    res.send(users.kids);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
};

export default getAllKids;
