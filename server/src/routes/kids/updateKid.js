import { StatusCodes } from 'http-status-codes';
import Kid from '../../models/kid';

const updateKid = async (req, res) => {
  try {
    const updatedKid = await Kid.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true });
    res.status(StatusCodes.OK).send({ updatedKid });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).send({ message: 'kid not found' });
  }
};

export default updateKid;
