import expressAsyncHandler from 'express-async-handler';
import { fetchAllEvents, fetchIdEvent } from '../services/eventsService.js';

export const fetchEvents = expressAsyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const result = await fetchAllEvents(page, limit);

  res.status(200).json(result);
});

export const fetchEventById = expressAsyncHandler(async (req, res) => {
  const { eventId } = req.params;

  const result = await fetchIdEvent(eventId);

  res.status(200).json(result);
});
