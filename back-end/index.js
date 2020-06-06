const feed = require("./routes/feed");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose
  .connect("mongodb://localhost/websocket", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.use(express.json());
app.use("/api/feed", feed);

const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`Listening on port ${port}`));
