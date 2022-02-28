import { Router } from 'express';
import authRouter from './auth';
import kidRouter from './kids'
import drugRouter from './drugs';


const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/kids', kidRouter);
apiRouter.use('/drugs', drugRouter);

export default apiRouter;
