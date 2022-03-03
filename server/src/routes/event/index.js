import { Router } from 'express';
import postEvent from './postEvent';

const eventRouter = Router();

eventRouter.use('/', postEvent);

export default eventRouter;