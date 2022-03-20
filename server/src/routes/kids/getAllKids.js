import { StatusCodes } from 'http-status-codes';

const getAllKids = async (req, res) => {
  try {
    const users = req.user;
    res.send(users.kids);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
};

export default getAllKids;
