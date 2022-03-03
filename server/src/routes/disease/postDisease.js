import { StatusCodes } from 'http-status-codes';
import User from '../../models/user';
import Drug from '../../models/drug';

const postDisease = async (req, res) => {
  // ----------------- mocks
  req.body.initialDrug = await Drug.findById('621aa33d871734d3d6f6b960');
  req.user = await User.findById('621e8cb924b74f4dd1952d44');
  req.body.kidId = '621e914f1f46dbe4c841b4e2';
  // ----------------- mocks

  try {
    const disease = {
      eventLog: [{ eventType: 'DrugApplication', drugId: req.body.initialDrug._id }],
      initialDrug: req.body.initialDrug._id
    };

    const kid = await req.user.kids.id(req.body.kidId);
    kid.diseases.push(disease);

    await req.user.save();
    res.status(StatusCodes.CREATED).send(kid);
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).send({ message: err.message });
  }
};

export default postDisease;
