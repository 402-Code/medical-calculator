import { Router } from 'express';
import addKid from './addKid';
import deleteKid from './deleteKid';
import getAllKids from './getAllKids';
import updateKid from './updateKid';

const kidRouter = Router();

kidRouter.route('/').post(addKid).get(getAllKids);
kidRouter.route('/:id').delete(deleteKid).put(updateKid);

export default kidRouter;
