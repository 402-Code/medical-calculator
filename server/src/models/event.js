import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  eventType: {
    type: String,
    enum: ['DrugApplication', 'SymptomSpotted'],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  drugId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Drug'
  },
  symptoms: {
    type: [String]
  }
});

export default eventSchema;
