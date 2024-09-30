import { Schema, Types, model } from 'mongoose';

const participantSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
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

participantSchema.index({ email: 1, event: 1 }, { unique: true });

export const Participant = model('Participant', participantSchema);
