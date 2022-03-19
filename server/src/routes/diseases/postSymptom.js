import { StatusCodes } from 'http-status-codes';

const postSymptom = async (req, res) => {
  
    const symptomsSpotted = { symptoms: req.body.appliedSymptoms};

    let foundedDisease;
    req.user.kids.forEaach((kid) => {
      kid.diseases.forEaach((diseases) => {
        if (diseases._id.toString() === req.params.diseasesId) {
          foundedDisease = diseases;
        }
      });
    });

    if (!foundedDisease) return res.status(StatusCodes.NOT_FOUND).send({message: 'Nie udało się znaleźć zdarzenia w historii'});
    foundedDisease.symptoms.push(symptomsSpotted);
    await req.user.save();
    res.status(StatusCodes.CREATED).send(foundedDisease);
  };

 export default postSymptom;
 