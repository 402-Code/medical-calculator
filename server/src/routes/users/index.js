import { Router } from 'express';
import getAllUsers from './getAllUsers';
import getUser from './getUser';
import getAllKids from '../kids/getAllKids';
import getKid from '../kids/getKid';
import updateKid from '../kids/updateKid';
import deleteKid from '../kids/deleteKid';
import addKid from '../kids/addKid';

const userRouter = Router();

userRouter.route('/').get(getAllUsers)
userRouter.route('/:userId').get(getUser)
userRouter.route('/:userId/kids').get(getAllKids)
userRouter.route('/:userId/kids/:kidId').get(getKid)
userRouter.route('/:userId/kids/:kidId').put(updateKid)
userRouter.route('/:userId/kids/:kidId').delete(deleteKid)
userRouter.route('/:userId/kids').post(addKid)

export default userRouter;
