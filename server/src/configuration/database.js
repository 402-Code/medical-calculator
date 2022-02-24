import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT);
    console.log('Connected to Database');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export { connectToDatabase };
