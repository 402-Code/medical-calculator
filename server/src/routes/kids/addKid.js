import { StatusCodes } from 'http-status-codes';

const addKid = async (req, res) => {
  try {
    const kid = { ...req.body };
    const user = req.user;
    const isNameAlreadyExist = user.kids.some(({ name }) => name.toLowerCase() === kid.name.toLowerCase());
    if (isNameAlreadyExist) return res.status(StatusCodes.BAD_REQUEST).send({ message: 'Imię już istnieję' });
    user.kids.push(kid);
    await user.save();
    res.status(StatusCodes.CREATED).send(user);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
};

export default addKid;
