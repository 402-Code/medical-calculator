import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import apiRouter from './routes';
import cookieParser from 'cookie-parser';
import { connectToDatabase } from './configuration/index';
import cors from 'cors';

const app = express();

await connectToDatabase();

const corsOptions ={
    origin:'http://localhost:8080', 
    credentials:true,
    optionSuccessStatus:200
}

app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api', express.json(), apiRouter);

const port = process.env.PORT ?? 4000;
app.listen(port, () => {
  console.log(`App listens on port: ${port}`);
});
