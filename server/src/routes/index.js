import { Router } from 'express';
import authRouter from './auth';
// import kidRouter from './kids';
// import drugRouter from './drugs';
import eventRouter from './event';


const apiRouter = Router();

apiRouter.use('/auth', authRouter);
// apiRouter.use('/kids', kidRouter);
// apiRouter.use('/drugs', drugRouter);
apiRouter.use('/event', eventRouter);

export default apiRouter;