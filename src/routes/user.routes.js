const express = require("express");
const router = express.Router();

let users = [];

// GET all users
router.get("/", (req, res) => {
  res.json(users);
});

// CREATE user
router.post("/", (req, res) => {
  const user = {
    id: Date.now(),
    name: req.body.name,
  };

  users.push(user);
  res.status(201).json(user);
});

// DELETE user
router.delete("/:id", (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
