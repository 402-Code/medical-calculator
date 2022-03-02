import { StatusCodes } from 'http-status-codes';
import User from '../../models/user';

const addKid = async (req, res) => {
    const { userId } = req.params;
    try {
      const kid = { ...req.body };
      const user = await User.findOne({ _id: userId });
      user.kids.push(kid);
      await user.save();
      res.status(StatusCodes.CREATED).send(user);
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  };

export default addKid
