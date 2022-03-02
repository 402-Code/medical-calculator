import mongoose from 'mongoose';
import { eventSchema } from './event';

const eventSchema = new mongoose.Schema({
 
   createdAt: {
    type: Date,
    default: Date.now()
  },
    type: Symptom,
    type: DrugApplication,
  },
  drugId: {
    type: String,
    disease: drugSchema,
  },
});

const User = mongoose.model('User', userSchema);

export default User;