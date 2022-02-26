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
  description: String,
  applicationRequirement: mongoose.SchemaTypes.ObjectId,
  schedulingPolicy: mongoose.SchemaTypes.Array,
  contradictions: String,
  interval: {
    type: Number,
    required: true
  }
});

const Drug = mongoose.model('drug', drugSchema);

export default Drug;
