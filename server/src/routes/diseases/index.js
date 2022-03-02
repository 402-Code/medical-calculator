import { Router } from 'express';
import getDisease from './getDisease';

const diseaseRouter = Router();

diseaseRouter.get('/', getDisease);

export default diseaseRouter;