import { StatusCodes } from 'http-status-codes';
import User from '../../models/user';
import diseaseSchema from '../../models/disease';

const postDisease = (req, res) => {
  const disease = new diseaseSchema({ eventLog: [], initialDrug: req.body.initialDrug });
  try {
    // TODO dodaj disease do kid
    User.findById();
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).send({ message: err.message });
  }
};

export default postDisease;
