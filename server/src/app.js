import 'dotenv/config';
import express from 'express';
import apiRouter from './routes';
import cookieParser from 'cookie-parser';
import { connectToDatabase } from './configuration/index';
import cors from 'cors';

const app = express();

await connectToDatabase();

app.use(cors());
app.use(cookieParser());
app.use('/api', express.json(), apiRouter);

const port = process.env.PORT ?? 4000;
app.listen(port, () => {
  console.log(`App listens on port: ${port}`);
});
