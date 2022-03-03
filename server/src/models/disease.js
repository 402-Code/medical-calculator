import mongoose from 'mongoose';
import eventSchema from './event';

const diseaseSchema = new mongoose.Schema({
  eventLog: [eventSchema],
  initialDrug: {
    required: true,
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Drug'
  }
});

export default diseaseSchema;
