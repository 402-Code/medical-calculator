import { StatusCodes } from 'http-status-codes';
import User from '../../models/user';;

const updateKid = async (req, res) => {
  const { userId, kidId } = req.params;
  try {
    const user = await User.findOne({ _id: userId });
    const kid = user.kids.find((kid) => kid._id.toString() === kidId);
    propertyUpdate(kid, req.body);
    await user.save();
    res.send(kid);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
};

function propertyUpdate(kid, data) {
  kid.name = data.name;
  kid.dateOfBirth = data.dateOfBirth;
  kid.height = data.height;
  kid.weight = data.weight;
  kid.gender = data.gender;
}

export default updateKid;
