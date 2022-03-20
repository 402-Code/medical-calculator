import mongoose from 'mongoose';

const doseSchema = new mongoose.Schema({
    unit: Number,
    value: Number
});

export default doseSchema;