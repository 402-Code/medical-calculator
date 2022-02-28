import { Router } from 'express';
import authRouter from './auth';
import drugRouter from './drugs';

const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/drugs', drugRouter);

export default apiRouter;
