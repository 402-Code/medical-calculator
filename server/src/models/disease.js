import mongoose from 'mongoose';
import drugApplicationSchema from './drugApplication';
import symptomSchema from './symptom';

const diseaseSchema = new mongoose.Schema({
  drugApplications: [drugApplicationSchema],
  symptomsSpotted: [symptomSchema],
  initialDrug: {
    required: true,
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Drug'
  }
});

export default diseaseSchema;
