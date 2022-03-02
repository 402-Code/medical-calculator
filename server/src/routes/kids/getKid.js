import { StatusCodes } from 'http-status-codes';
import User from '../../models/user';

const getKid = async (req, res) => {
  const { userId, kidId } = req.params;
  try {
    const user = await User.findOne({ _id: userId });
    const kid = user.kids.filter((kid) => kid._id.toString() === kidId);
    res.send(kid);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
};

export default getKid;
