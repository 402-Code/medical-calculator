import mongoose from 'mongoose';
import doseSchema from './dose';

const schedulingPolicySchema = new mongoose.Schema({
    minWeight: Number,
    maxWeight: Number,
    recommendedDose: doseSchema,
    maximumDose: doseSchema,
});

const schedulingPolicy = mongoose.model('schedulingpolicies', schedulingPolicySchema);

export default schedulingPolicy;