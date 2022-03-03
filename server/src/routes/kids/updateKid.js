import { StatusCodes } from 'http-status-codes';
import User from '../../models/user';
import { updateKidValidation } from './kidValidation';

const updateKid = async (req, res) => {
  const { userId, kidId } = req.params;
  try {
    const user = await User.findOne({ _id: userId });
    const kid = user.kids.find((kid) => kid._id.toString() === kidId);
    const error = propertyUpdate(kid, req.body);

    if (error) throw new Error(error);

    await user.save();
    res.send(kid);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: error.message });
  }
};

function propertyUpdate(kid, data) {
  const { error } = updateKidValidation(data);
  if (error) {
    return 'Błędne dane';
  } else {
    kid.name = data.name;
    kid.dateOfBirth = data.dateOfBirth;
    kid.height = data.height;
    kid.weight = data.weight;
    kid.gender = data.gender;
  }
}

export default updateKid;
