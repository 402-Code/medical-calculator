import { Router } from 'express';
import authRouter from './auth';
import kidRouter from './kids'

const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/kids', kidRouter);

export default apiRouter;
