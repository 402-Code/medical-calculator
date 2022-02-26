import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import Drug from '../../models/drug';

const drugRouter = Router();

drugRouter.get('/', async (req, res) => {
  const drugs = await Drug.find({});
  if (!drugs)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Nie udało się pobrać listy leków' });
  res.status(StatusCodes.OK).json(drugs);
});

export default drugRouter;
