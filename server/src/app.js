import express from 'express';
import apiRouter from './routes';

const app = express();

app.use('/api', apiRouter);

const port = process.env.PORT ?? 4000;
app.listen(port, () => {
  console.log(`App listens on port: ${port}`);
});
