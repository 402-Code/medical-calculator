import { Router } from 'express';
import authRouter from './auth';
import drugRouter from './drugs';
import userRouter from './users';
import diseaseRouter from './diseases';

const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/drugs', drugRouter);
apiRouter.use('/users', userRouter);
apiRouter.use('/diseases', diseaseRouter);

export default apiRouter;
