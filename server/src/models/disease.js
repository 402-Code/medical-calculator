import mongoose from 'mongoose';
import Drug from './drug';

const diseaseSchema = new mongoose.Schema({
  eventLog: {
    type: mongoose.SchemaTypes.Array
  },
  initialDrug: {
    type: Drug,
    required: true
  }
});

export default diseaseSchema;
