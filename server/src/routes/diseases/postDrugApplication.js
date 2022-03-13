import { StatusCodes } from 'http-status-codes';

const postDrugApplication = async (req, res) => {
  try {
    const drugApplication = { drugId: req.body.appliedDrugId };

    let foundedDisease;
    req.user.kids.forEach((kid) => {
      kid.diseases.forEach((disease) => {
        if (disease._id.toString() === req.params.diseaseId) {
          foundedDisease = disease;
        }
      });
    });

    if (!foundedDisease) {
      res.status(StatusCodes.NOT_FOUND).send({ message: 'Nie znaleziono.' });
    } else {
      foundedDisease.drugApplications.push(drugApplication);
      await req.user.save();
      res.status(StatusCodes.CREATED).send(foundedDisease);
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Nic.' });
  }
};
export default postDrugApplication;
