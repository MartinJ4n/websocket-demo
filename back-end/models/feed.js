const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const feedSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    min: 3,
    maxlength: 255,
  },
});

const Feed = mongoose.model("Feed", feedSchema);

const validateFeed = (feed) => {
  const schema = Joi.object({
    content: Joi.string().min(3).max(255).required(),
  });

  return schema.validate(feed);
};

exports.Feed = Feed;
exports.validate = validateFeed;
