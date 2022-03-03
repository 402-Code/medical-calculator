import 'dotenv/config';
import express from 'express';
import apiRouter from './routes';
import { connectToDatabase } from './configuration/index';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser())

await connectToDatabase();

app.use('/api', express.json(), apiRouter);

const port = process.env.PORT ?? 4000;
app.listen(port, () => {
  console.log(`App listens on port: ${port}`);
});
