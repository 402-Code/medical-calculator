import { Router } from 'express';
import authRouter from './auth';
import drugRouter from './drugs';
import diseaseRouter from './disease';

const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/drugs', drugRouter);
apiRouter.use('/disease', diseaseRouter);

export default apiRouter;
