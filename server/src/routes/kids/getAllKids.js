import { StatusCodes } from 'http-status-codes';
import Kid from '../../models/kid';

const getAllKids = async (req, res) => {
  try {
    const kids = await Kid.find();
    res.status(StatusCodes.OK).send(kids);
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).send({ message: err.message });
  }
};

export default getAllKids;
