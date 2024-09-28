import { Schema, Types, model } from 'mongoose';

const participantSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    birthDate: { type: String, required: true },
    referal: {
      type: String,
      enum: ['social', 'friend', 'another'],
      required: false,
    },
    event: { type: Types.ObjectId, ref: 'Event', required: true },
  },
  { versionKey: false, timestamps: true },
);

export const Participant = model('Participant', participantSchema);
