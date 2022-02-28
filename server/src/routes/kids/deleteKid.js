import { StatusCodes } from 'http-status-codes';
import Kid from '../../models/kid';

const deleteKid = async (req, res) => {
  try {
    await Kid.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.OK).send({ id: req.params.id });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).send({ message: 'kid not found' });
  }
};

export default deleteKid;
