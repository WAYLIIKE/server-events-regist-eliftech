import { Schema, model } from 'mongoose';

const eventSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
  },
  { versionKey: false, timestamps: true },
);

export const Event = model('Event', eventSchema);
