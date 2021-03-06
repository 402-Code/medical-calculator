import { Router } from 'express';
import getDiseases from './getDiseases';
import postDisease from './postDisease';
import postDrugApplication from './postDrugApplication';
import postSymptom from './postSymptom';

const diseaseRouter = Router();

diseaseRouter.get('/', getDiseases);
diseaseRouter.post('/', postDisease);
diseaseRouter.post('/:diseaseId/symptom', postSymptom);
diseaseRouter.post('/:diseaseId/drug-application', postDrugApplication);

export default diseaseRouter;
