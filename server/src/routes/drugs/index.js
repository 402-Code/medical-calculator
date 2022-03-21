import { Router } from 'express';
import getDrugs from './getDrugs';

const drugRouter = Router();

drugRouter.get('/:kidId', getDrugs);

export default drugRouter;
