import express from 'express';

import {
  fetchEventById,
  fetchEvents,
} from '../controllers/eventsController.js';

const eventsRouter = express.Router();

eventsRouter.get('/events', fetchEvents);

eventsRouter.get('/events/:eventId', fetchEventById);

export { eventsRouter };
