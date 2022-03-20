import { StatusCodes } from 'http-status-codes';
// import User from '../../models/user';

const addKid = async (req, res) => {
  // const { userId } = req.params;
  try {
    const kid = { ...req.body };
    const user = req.user;
    // const user = await User.findOne({ _id: userId });
    const isNameAlreadyExist = user.kids.some(({ name }) => name.toLowerCase() === kid.name.toLowerCase())
    if (isNameAlreadyExist) return res.status(StatusCodes.BAD_REQUEST).send({ message: 'Imię już istnieję' });
    user.kids.push(kid);
    await user.save();
    res.status(StatusCodes.CREATED).send(user);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
};

export default addKid
