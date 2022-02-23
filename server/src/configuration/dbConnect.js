import 'dotenv/config';
import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
    mongoose.connect(process.env.DB_CONNECT, () => console.log('Connected to database'));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectToDatabase;
