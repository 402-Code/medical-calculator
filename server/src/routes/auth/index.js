import { Router } from 'express';
import signUp from './signUp';
import signIn from './signIn';
import signOut from './signIn/signOut';
import me from './me';

const authRouter = Router();

authRouter.post('/sign-up', signUp);
authRouter.post('/sign-in', signIn);
authRouter.post('/sign-out', signOut);

authRouter.get('/me', me);

export default authRouter;
