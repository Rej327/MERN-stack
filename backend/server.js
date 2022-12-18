require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

//express app
const app = express();

//middleware
app.use(express.json());
app.use((res, req, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);

//connec to db
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONG_URI)

  .then(() => {
    //listen for request
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
