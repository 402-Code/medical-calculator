import { Router } from 'express';
import authRouter from './auth';
import drugRouter from './drugs';
import userRouter from './users';
import diseaseRouter from './diseases';
import kidRouter from './kids';
import { authMiddleware } from '../middlewares/auth';

const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/users', authMiddleware, userRouter);
apiRouter.use('/drugs', authMiddleware, drugRouter);
apiRouter.use('/diseases', authMiddleware, diseaseRouter);
apiRouter.use('/kids', authMiddleware, kidRouter);

export default apiRouter;
