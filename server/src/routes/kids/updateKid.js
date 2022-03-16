import { StatusCodes } from 'http-status-codes';
import User from '../../models/user';
import { updateKidValidation } from './kidValidation';

const updateKid = async (req, res) => {
  const { userId, kidId } = req.params;
  const user = await User.findOne({ _id: userId });
  const kid = user.kids.find((kid) => kid._id.toString() === kidId);
  const error = propertyUpdate(kid, req.body);

  if (error) return res.status(StatusCodes.BAD_REQUEST).send({ message: error });

  await user.save();
  res.send(kid);
};

function propertyUpdate(kid, data) {
  const { error } = updateKidValidation(data);
  if (error) {
    return error;
  } else {
    kid.name = data.name;
    kid.dateOfBirth = data.dateOfBirth;
    kid.height = data.height;
    kid.weight = data.weight;
    kid.gender = data.gender;
  }
}

export default updateKid;
