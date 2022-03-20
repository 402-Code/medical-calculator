import mongoose from 'mongoose';

const applicationRequirementSchema = new mongoose.Schema({
    minAge: Number,
    maxAge: Number
});

const applicationRequirement = mongoose.model('applicationrequirements', applicationRequirementSchema);

export default applicationRequirement;