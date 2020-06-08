const { Feed, validate } = require("../models/feed");
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
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let feed = new Feed({
    content: req.body.content,
  });

  feed = await feed.save();
  res.send(feed);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const feed = await Feed.findByIdAndUpdate(
    req.params.id,
    { content: req.body.content },
    { new: true }
  );

  if (!feed)
    return res.status(404).send("The feed with the given ID does not exist.");

  res.send(feed);
});

router.delete("/:id", async (req, res) => {
  const feed = await Feed.findByIdAndRemove(req.params.id);

  if (!feed)
    return res.status(400).send("The feed with the given ID does not exist.");

  res.send(feed);
});

module.exports = router;
