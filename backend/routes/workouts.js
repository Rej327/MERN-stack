const express = require("express");

const router = express.Router();

//GET all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "GET all workouts" });
});

//GET a single workouts
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single workouts" });
});

//POST a new workout
router.post("/", (req, res) => {
  res.json({ mssg: "Post a new workout" });
});

//DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "Delete a workout" });
});

//UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a workout" });
});

module.exports = router;
