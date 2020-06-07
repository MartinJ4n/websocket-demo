const cors = require("cors");
const Feed = require("./models/feed");
const feed = require("./routes/feedWebsocket");
const connect = require("./dbconnection");

const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(express.json());
app.use(cors());
app.use("/api/feed", feed);

const port = process.env.PORT || 3003;

http.listen(port, () => console.log(`Listening on port ${port}`));

io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    //broadcast message to everyone in port:5000 except yourself.
    socket.broadcast.emit("received", { content: msg });

    //save chat to the database
    connect.then((db) => {
      console.log("connected correctly to the server");

      let feed = new Feed({ content: msg });
      feed.save();
    });
  });
});

// app.listen(port, () => console.log(`Listening on port ${port}`));
