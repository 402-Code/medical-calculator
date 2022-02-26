import { Router } from 'express';
import signUp from './signUp';
import signIn from './signIn';
import signOut from './signIn/signOut';
import User from './../../models/user';
import { StatusCodes } from 'http-status-codes';

const authRouter = Router();

authRouter.post('/sign-up', signUp);
authRouter.post('/sign-in', signIn);
authRouter.post('/sign-out', signOut);

authRouter.get('/me', async (req, res) => {
    //const user = req.user
    const user = await User.findOne({ username: 'mateusz' }).exec();
    if (!user) { res.status(StatusCodes.UNAUTHORIZED).send('User not logged in') };
    const { username, email, createdAt } = user;
    res.json({ username, email, createdAt });
})

export default authRouter;
