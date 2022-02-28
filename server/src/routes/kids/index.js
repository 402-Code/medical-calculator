import { Router } from 'express';
import addKid from './addKid';
import deleteKid from './deleteKid';

const kidRouter = Router();

kidRouter.post('/addkid', addKid);
kidRouter.route('/:id').delete(deleteKid);

export default kidRouter;
