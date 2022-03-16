import { StatusCodes } from 'http-status-codes';

const postDisease = async (req, res) => {
  try {
    const disease = {
      drugApplications: [{ drugId: req.body.initialDrugId }],
      initialDrug: req.body.initialDrugId
    };

    const kid = await req.user.kids.id(req.body.kidId);
    kid.diseases.push(disease);

    await req.user.save();
    res.status(StatusCodes.CREATED).send(kid);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Nie udało się utworzyć choroby.' });
  }
};

export default postDisease;
