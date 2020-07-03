const mongoose = require("mongoose");
// const Workout = require("./models");
const path = require("path");
let db = require("./models");

mongoose.connect("mongodb://localhost:27017/workout_db", {useNewUrlParser: true, useUnifiedTopology: true});
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

//middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

// const createWorkout = async () => {
//     try {
//         const workout = {
//             exerciseType: "Cardio",
//             exerciseName: "Stair stepper",
//         }
//         const data = await db.Workout.create(workout);

//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// const findAll = async () => {
//     try {
//         const data = await db.Workout.find({});
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }


// createWorkout();

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + '/public/stats.html'));
})
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + '/public/exercise.html'));
});

app.get("/api/workouts", async (req, res) => {
   try {
       const data = await db.Workout.find({});
       res.send(data);
       
   } catch (error) {
       console.log(error);
   }
   
})
app.post("/api/workouts", async (req, res) => {
    console.log(req.body);
    console.log(req.params);
    const data = await db.Workout.create({exercises: []});
    res.send(data);
})
app.put("/api/workouts/:id", async (req, res) => {
    console.log(req.body);
    console.log(req.params);
    const data = await db.Workout.create({exercises: []});
    res.send(data);
})


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})