import { StatusCodes } from 'http-status-codes';
import User from '../../models/user';
import Drug from '../../models/drug';

const postDisease = async (req, res) => {
  const drug = await Drug.findById('621aa33d871734d3d6f6b960');
  const disease = {
    // eventLog: [{ drugId: req.body.initialDrug }],
    // initialDrug: req.body.initialDrug
    eventLog: [{ eventType: 'SymptomSpotted', drugId: drug._id, symptoms: ['one', 'two'] }],
    initialDrug: drug._id
  };

  try {
    const user = await User.findById('621e8cb924b74f4dd1952d44');
    const kid = await user.kids.id('621e914f1f46dbe4c841b4e2');

    // const kid = await req.user.kids.id(req.body.kidId);
    kid.diseases.push(disease);

    // await req.user.save();
    await user.save();
    res.status(StatusCodes.CREATED).send(kid);
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).send({ message: err.message });
  }
};

export default postDisease;
