import { StatusCodes } from 'http-status-codes';

const postDisease = async (req, res) => {
  //stwórz nową chorobę
  const disease = { eventLog: [], initialDrug: req.body.initialDrug };
  //złap wybrane (aktywne dziecko)
  const kid;

  try {
    //zapisz chorobę do dziecka
    await kid.diseases.push(disease);
    //zapisz zaktualizowanego usera do db

    //wyślij odpowiedź
    res.status(StatusCodes.CREATED).send(disease);
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).send({ message: err.message });
  }
};

export default postDisease;
