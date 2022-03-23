import mongoose from 'mongoose';

const doseSchema = new mongoose.Schema({
  unit: String,
  value: Number
});

export default doseSchema;
