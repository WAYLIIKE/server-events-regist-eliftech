import mongoose from 'mongoose';
import { Event } from '../models/eventModel.js';

export const fetchAllEvents = async () => {
  const events = await Event.find();

  return events;
};

export const fetchIdEvent = async id => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid Event ID');
  }

  const event = await Event.findById(id);

  return event;
};
