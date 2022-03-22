import { Router } from 'express';
import getDrugs from './getDrugs';
import getDrugWithApplicableFlag from './getDrugWithApplicableFlag';

const drugRouter = Router();

drugRouter.get('/', getDrugs);
drugRouter.get('/:kidId', getDrugWithApplicableFlag);

export default drugRouter;
