import { Router } from 'express';
import getAllUsers from './getAllUsers';
import getUser from './getUser';
import getAllKids from '../kids/getAllKids';
import getKid from '../kids/getKid';
import updateKid from '../kids/updateKid';
import deleteKid from '../kids/deleteKid';
import addKid from '../kids/addKid';

const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:userId', getUser);
userRouter.route('/:userId/kids').get(getAllKids).post(addKid);
userRouter.route('/:userId/kids/:kidId').get(getKid).put(updateKid).delete(deleteKid);

export default userRouter;
