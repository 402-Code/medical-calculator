import mongoose from 'mongoose';

const drugSchema = new mongoose.Schema({
  activeIngredient: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  applicationRequirement: mongoose.SchemaTypes.ObjectId,
  schedulingPolicy: mongoose.SchemaTypes.Array,
  contradictions: {
    type: String,
    default: ''
  },
  interval: {
    type: Number,
    required: true
  }
});

const Drug = mongoose.model('drug', drugSchema);

export default Drug;
