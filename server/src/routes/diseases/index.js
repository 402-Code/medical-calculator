import { Router } from 'express';
import getDiseases from './getDiseases';
import postDisease from './postDisease';
import postDrugApplication from './postDrugApplication';
import postSymptoms from './postSymptoms';

const diseaseRouter = Router();

diseaseRouter.get('/', getDiseases);
diseaseRouter.post('/', postDisease);
diseaseRouter.post('/drug-application', postDrugApplication);
diseaseRouter.post('/:diseaseId/:/kidId/SymptomSpotted/', postSymptoms)

export default diseaseRouter;
