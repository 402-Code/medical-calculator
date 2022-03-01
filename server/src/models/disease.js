import mongoose from 'mongoose';

const diseaseSchema = new mongoose.Schema({
  eventLog: {
    type: mongoose.SchemaTypes.Array
  },
  initialDrug: {
    required: true,
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Drug'
  }
});

export default diseaseSchema;
