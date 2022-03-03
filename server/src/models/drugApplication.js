import mongoose from 'mongoose';
import Drug from './drug';

const drugApplicationSchema = new mongoose.Schema({
  eventType: {
    type: String,
    default: 'DrugApplication'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  drugId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Drug',
    required: true
  }
});

export default drugApplicationSchema;
