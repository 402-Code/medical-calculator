import { StatusCodes } from 'http-status-codes';

const postDrugApplication = async (req, res) => {
  const drugApplication = { drugId: req.body.appliedDrugId };

  let foundedDisease;
  req.user.kids.forEach((kid) => {
    kid.diseases.forEach((disease) => {
      if (disease._id.toString() === req.params.diseaseId) {
        foundedDisease = disease;
      }
    });
  });

  if (!foundedDisease) return res.status(StatusCodes.NOT_FOUND).send({ message: 'Nie znaleziono.' });
  foundedDisease.drugApplications.push(drugApplication);
  await req.user.save();
  res.status(StatusCodes.CREATED).send(foundedDisease);
};

export default postDrugApplication;
