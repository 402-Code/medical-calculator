import { StatusCodes } from 'http-status-codes';

const postSymptom = async (req, res) => {
  const symptomsSpotted = { symptoms: req.body.selected };
  let foundedDisease;
  req.user.kids.forEach((kid) => {
    kid.diseases.forEach((disease) => {
      if (disease._id.toString() === req.params.diseaseId) {
        foundedDisease = disease;
      }
    });
  });

  if (!foundedDisease)
    return res.status(StatusCodes.NOT_FOUND).send({ message: 'Nie udało się znaleźć zdarzenia w historii' });
  foundedDisease.symptomsSpotted.push(symptomsSpotted);
  await req.user.save();
  res.status(StatusCodes.CREATED).send(foundedDisease);
};

export default postSymptom;
