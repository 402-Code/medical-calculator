import { Router } from 'express';
import addKid from './addKid';

const kidRouter = Router()

kidRouter.post('/addkid', addKid)

export default kidRouter
