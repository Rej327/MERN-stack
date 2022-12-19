const express = require("express");
const Workout = require("../model/workoutModel");

const router = express.Router();

//GET all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "GET all workouts" });
});

//GET a single workouts
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single workouts" });
});

//POST a new workout //Schema and Model
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ mssg: error.message });
  }
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
