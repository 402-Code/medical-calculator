import { Router } from 'express';
import getDiseases from './getDiseases';

const diseaseRouter = Router();

diseaseRouter.get('/', getDiseases);

export default diseaseRouter;
