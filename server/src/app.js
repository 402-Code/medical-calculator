import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import apiRouter from './routes';

const app = express();

mongoose.connect(process.env.DB_CONNECT, (err) => {
  if (err) console.log(err);
  else console.log('Connected to database');
});

app.use('/api', express.json(), apiRouter);

const port = process.env.PORT ?? 4000;
app.listen(port, () => {
  console.log(`App listens on port: ${port}`);
});
