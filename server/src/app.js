import 'dotenv/config';
import express from 'express';
import apiRouter from './routes';
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
app.use('/api', express.json(), apiRouter);

const port = process.env.PORT ?? 4000;
app.listen(port, () => {
  console.log(`App listens on port: ${port}`);
});
