import { Router } from 'express';
import authRouter from './auth';
import drugRouter from './drugs';
import userRouter from './users';
import diseaseRouter from './diseases';
import kidRouter from './kids';
import { authMiddleware } from '../middlewares/auth';

const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/drugs', drugRouter);
apiRouter.use('/users', userRouter);
apiRouter.use('/diseases', authMiddleware, diseaseRouter);
apiRouter.use('/kids', authMiddleware, kidRouter);

export default apiRouter;
