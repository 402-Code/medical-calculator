import { Router } from 'express';
import signUp from './signUp';
import validateReq from '../../middlewares/validateSignUpRequest';

const authRouter = Router();

authRouter.post('/sign-up', validateReq, signUp);

export default authRouter;
