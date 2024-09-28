import express from 'express';
import {
  addToEventParticipant,
  fetchAllParticipants,
} from '../controllers/participantsController.js';
import { joiValidateDataMiddleware } from '../middlewares/middlewares.js';
import { addParticipantSchema } from '../schemas/participantSchemas.js';

const participantsRouter = express.Router();

participantsRouter.get('/participants/:eventId', fetchAllParticipants);

participantsRouter.post(
  '/participants/add',
  joiValidateDataMiddleware(addParticipantSchema),
  addToEventParticipant,
);

export { participantsRouter };
