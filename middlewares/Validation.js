const Joi = require('joi');
//The bonus challenge 
const userSchema = Joi.object({
  name: Joi.string().min(2).max(70).required(),
  gender: Joi.string().required().valid("male","female"),
  strength:Joi.number().required(),
  level:Joi.number().required()

});

module.exports = {
  validateUser: (req, res, next) => {
    const { error } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    next();
  },
};
