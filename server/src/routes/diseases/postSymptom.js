import { StatusCodes } from 'http-status-codes';

const postSymptom = async (req, res) => {
  try {
    const symptom = { symptom: req.body.symptomSchema};

    const kid = await req.user.kids.id(req.body.kidId);
    const diseases = await kid.diseases.id(req.body.diseaseId);

     diseases.postSymptom.push(symptom);
     await req.user.save();

     res.status(StatusCodes.CREATED).send(diseases);
   } catch (err) {
     res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Nie udało się zapisać do bazy danych.' });
   }
 };
 export default postSymptom;