import mongoose from 'mongoose';

export const kidSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: '',
    unique: true
  },

  dateOfBirth: {
    type: Date,
    required: true,
    default: 0
  },
  height: {
    type: Number,
    required: true,
    default: 0
  },
  weight: {
    type: Number,
    required: true,
    default: 0
  },
  gender: {
    type: String,
    enum: ['male', 'female'],   
    default: 'male'
  },
  avatar: String,
  // diseases: [diseaseSchema]    
  },
);

kidSchema.index({ user: 1, name: 1 }, {unique: true});

const Kid = mongoose.model('Kid', kidSchema);
export default Kid;
