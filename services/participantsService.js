import mongoose from 'mongoose';
import { Participant } from '../models/participantModel.js';

export const fetchParticipants = async id => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid Event ID');
  }

  const participants = await Participant.find({ event: id });

  return participants;
};

export const addParticipants = async participant => {
  await checkParticipantUniqueService({ email: participant.email });

  const newParticipant = await Participant.create(participant);

  return newParticipant;
};

const checkParticipantUniqueService = async filter => {
  const isParticipantExists = await Participant.exists(filter);
  if (isParticipantExists)
    throw new Error('Participant with provided email already exists');
};
