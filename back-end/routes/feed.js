const { Feed } = require("../models/feed");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const feed = await Feed.find().sort("content");

  res.send(feed);
});

router.get("/:id", async (req, res) => {
  const feed = await Feed.findById(req.params.id);
  if (!feed)
    return res.status(404).send("The feed with the given ID does not exist.");

  res.send(feed);
});

router.post("/", async (req, res) => {
  let feed = new Feed({
    content: req.body.content,
  });

  feed = await feed.save();
  res.send(feed);
});

module.exports = router;
