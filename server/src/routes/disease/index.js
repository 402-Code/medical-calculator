import { Router } from 'express';
import postDisease from './postDisease';

const diseaseRouter = Router();

diseaseRouter.use('/', postDisease);

export default diseaseRouter;
