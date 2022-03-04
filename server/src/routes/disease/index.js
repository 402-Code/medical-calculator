import { Router } from 'express';
import postDisease from './postDisease';

const diseaseRouter = Router();

diseaseRouter.post('/', postDisease);

export default diseaseRouter;
