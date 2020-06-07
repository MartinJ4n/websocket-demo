const express = require("express");
const connectdb = require("../dbconnection");
const { Feed } = require("../models/feed");

const router = express.Router();

router.route("/").get((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  connectdb.then((db) => {
    Feed.find({}).then((feed) => {
      res.json(feed);
    });
  });
});

// router.get("/", async (req, res) => {
//   const feed = await Feed.find().sort("content");

//   res.send(feed);
// });

module.exports = router;
