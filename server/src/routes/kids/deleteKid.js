import { StatusCodes } from 'http-status-codes';
import User from '../../models/user';

const deleteKid = async (req, res) => {
  const { userId, kidId } = req.params;
  try {
    const user = await User.findOne({ _id: userId });
    const kidIndex = user.kids.findIndex((kid) => kid._id.toString() === kidId);
    user.kids.splice(kidIndex, 1);
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
};

export default deleteKid;
