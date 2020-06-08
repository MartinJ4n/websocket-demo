const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const url = "mongodb://localhost/websocket";

const connect = mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

module.exports = connect;
