import { StatusCodes } from 'http-status-codes';

const postDrugApplication = async (req, res) => {
  try {
    const drugApplication = { drugId: req.body.appliedDrug._id };

    const kid = await req.user.kids.id(req.body.kidId);
    const diseases = await kid.diseases.id(req.body.diseaseId);
    diseases.drugApplications.push(drugApplication);

    await req.user.save();
    res.status(StatusCodes.CREATED).send(diseases);
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).send({ message: 'Nie udało się zapisać do bazy danych.' });
  }
};
export default postDrugApplication;
