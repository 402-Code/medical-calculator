import mongoose from 'mongoose';

const symptomSchema = new mongoose.Schema({
  eventType: {
    type: String,
    default: 'SymptomSpotted'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  symptoms: {
    type: [String],
    required: true
  },
  drugId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Drug'
  }
});

export default symptomSchema;
