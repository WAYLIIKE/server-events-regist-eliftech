import Joi from 'joi';

export const addParticipantSchema = Joi.object({
  name: Joi.string().min(2).required().messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must contain at least 2 characters',
    'any.required': 'Name is required',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Invalid email format',
    'any.required': 'Email is required',
  }),
  birthDate: Joi.date().iso().required().messages({
    'date.format': 'Birth date must be in ISO 8601 format',
    'date.base': 'Birth date must be a valid date',
  }),
  referal: Joi.string()
    .valid('social', 'friend', 'another')
    .required()
    .messages({
      'string.base': 'Referal must be a string',
      'any.only':
        'Referal can only be one of the following: social, friend, another',
    }),
  event: Joi.string().hex().length(24).required().messages({
    'string.length': 'Event ID must be a valid ObjectId (24 characters)',
    'any.required': 'Event ID is required',
  }),
});
