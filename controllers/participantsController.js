import expressAsyncHandler from 'express-async-handler';
import {
  addParticipants,
  fetchParticipants,
} from '../services/participantsService.js';

export const fetchAllParticipants = expressAsyncHandler(async (req, res) => {
  const { eventId } = req.params;

  const result = await fetchParticipants(eventId);

  res.status(200).json(result);
});

export const addToEventParticipant = expressAsyncHandler(async (req, res) => {
  const params = req.body;

  const result = await addParticipants(params);

  res.status(200).json(result);
});
