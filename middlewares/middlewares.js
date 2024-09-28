export const joiValidateDataMiddleware = JoiSchema => {
  return (req, res, next) => {
    let schema = JoiSchema;

    const { error } = schema.validate(req.body);
    if (error) throw new Error(`Joi validator: ${error.details[0].message}`);
    next();
  };
};
