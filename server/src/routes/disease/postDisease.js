import { StatusCodes } from 'http-status-codes';
import User from '../../models/user';

const postDisease = async (req, res) => {
  const disease = { eventLog: [], initialDrug: req.body.initialDrug };

  try {
    // const user = await User.findById('621e8cb924b74f4dd1952d44');
    // const kid = await user.kids.id('621e914f1f46dbe4c841b4e2');
    const kid = await req.user.kids.id(req.body.kidId);
    kid.diseases.push(disease);

    await req.user.save();
    res.status(StatusCodes.CREATED).send(kid);
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).send({ message: err.message });
  }
};

export default postDisease;
