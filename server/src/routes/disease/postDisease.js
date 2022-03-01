import { StatusCodes } from 'http-status-codes';

const postDisease = async (req, res) => {
  const disease = { eventLog: [], initialDrug: req.body.initialDrug };

  try {
    const kid = await req.user.kids.id(req.body.kidId);
    kid.diseases.push(disease);

    await req.user.save();
    res.status(StatusCodes.CREATED).send(kid);
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).send({ message: err.message });
  }
};

export default postDisease;
