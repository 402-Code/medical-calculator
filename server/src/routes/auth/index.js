import { Router } from 'express';
import signUp from './signUp';
import signIn from './signIn';
import signOut from './signIn/signOut';

const authRouter = Router();

authRouter.post('/sign-up', signUp);
authRouter.post('/sign-in', signIn);
authRouter.get('/sign-out', signOut);

export default authRouter;
