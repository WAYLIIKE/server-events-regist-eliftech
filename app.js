import express, { urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { eventsRouter } from './routes/eventsRouter.js';
import { participantsRouter } from './routes/participantsRouter.js';
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Database connection successful');
  })
  .catch(error => {
    console.log(error);
    process.exit(1);
  });

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: false }));

app.use('/api', eventsRouter, participantsRouter);

app.use((_, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message: message });
});

app.listen(3000, () => {
  console.log('Server is running. Use our API on port: 3000');
});
