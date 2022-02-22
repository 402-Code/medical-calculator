import { Router } from 'express';
import signUp from './signUp';

const authRouter = Router();

authRouter.post('/sign-up', signUp);

export default authRouter;
