import mongoose from 'mongoose';
import { Event } from '../models/eventModel.js';

export const fetchAllEvents = async (page, limit) => {
  const events = await Event.find()
    .skip((page - 1) * limit)
    .limit(limit);

  const total = await Event.countDocuments();

  const res = {
    events,
    totalPages: Math.ceil(total / limit),
    currentPage: page,
  };

  return res;
};

export const fetchIdEvent = async id => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid Event ID');
  }

  const event = await Event.findById(id);

  return event;
};
