import mongoose from 'mongoose';
import drugApplicationSchema from './drugApplication';
import symptomSchema from './symptom';

const diseaseSchema = new mongoose.Schema({
  eventLog: [drugApplicationSchema],
  initialDrug: {
    required: true,
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Drug'
  }
});

export default diseaseSchema;
