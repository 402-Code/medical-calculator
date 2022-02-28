const { Router } = require('express');
import postDisease from './postDisease';

const diseaseRouter = Router();

diseaseRouter.use('/', postDisease);

export default diseaseRouter;
