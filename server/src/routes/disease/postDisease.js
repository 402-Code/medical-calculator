import { StatusCodes } from 'http-status-codes';

const postDisease = async (req, res) => {
  //stwórz nową chorobę
  const disease = { eventLog: [], initialDrug: req.body.initialDrug };

  try {
    //złap wybrane (aktywne dziecko)
    const kid = await req.user.kids.find({ name: req.body.kidName });
    //zapisz chorobę do dziecka
    await kid.diseases.push(disease);
    //wyślij odpowiedź
    res.status(StatusCodes.CREATED).send(disease);
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).send({ message: err.message });
  }
};

export default postDisease;
