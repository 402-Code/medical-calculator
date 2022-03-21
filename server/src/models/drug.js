import mongoose from 'mongoose';
import './applicationRequirement';
import './schedulingPolicy';

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
  applicationRequirement: {
    required: true,
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'applicationrequirements'
  },
  schedulingPolicy: {
    required: true,
    type: mongoose.SchemaTypes.Array,
    ref: 'schedulingpolicies'
  },
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
