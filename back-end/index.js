const cors = require("cors");
const { Feed } = require("./models/feed");
const feed = require("./routes/feed");
const connect = require("./dbconnection");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const socketio = require("socket.io");

const io = socketio(server);
const port = process.env.PORT || 3003;

app.use(express.json());
app.use(cors());
app.use("/api/feed", feed);

io.on("connection", (socket) => {
  console.log("Socket is connected...");

  // welcome current user
  socket.emit("message", "Welcome to finaly working socket... :)");

  // feed save
  socket.on("saveFeed", async (saveFeed) => {
    let feed = new Feed({ content: saveFeed.content });
    feed = await feed.save();
  });

  // feed emit
  Feed.find(function (err, feed_data) {
    socket.emit("loadFeed", feed_data);
  });

  // broadcast when a user connects to all except the loggin in user
  socket.broadcast.emit("message", "A user has joined the feed");

  // broadcast to everyone when user leaves
  socket.on("disconnect", () => {
    io.emit("message", "A user has left the feed");
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
