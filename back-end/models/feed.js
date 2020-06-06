const mongoose = require("mongoose");

const feedSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    min: 3,
    maxlength: 255,
  },
});

const Feed = mongoose.model("Feed", feedSchema);

exports.Feed = Feed;
