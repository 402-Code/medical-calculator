import { Router } from 'express';
import getDrugs from './getDrugs';

const drugRouter = Router();

drugRouter.get('/', getDrugs);

export default drugRouter;
