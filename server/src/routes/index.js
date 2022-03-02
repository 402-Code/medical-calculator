import { Router } from 'express';
import authRouter from './auth';
import drugRouter from './drugs';
import userRouter from './users';

const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/drugs', drugRouter);
apiRouter.use('/users', userRouter);

export default apiRouter;
