import { StatusCodes } from 'http-status-codes';
import Kid from '../../models/kid';

const getKid = async (req, res) => {
  try {
    const kid = await Kid.findOne({ _id: req.params.id });
    res.status(StatusCodes.OK).send({ kid });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).send({ message: 'kid not found' });
  }
};

export default getKid;
