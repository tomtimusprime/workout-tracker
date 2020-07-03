const { Schema } = require("mongoose");

const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    // exerciseType: {
    //     type: String
    // },
    // exerciseName: {
    //     type: String
    // },
    // create_date: {
    //     type: Date,
    //     default: Date.now()
    // },
    // duration: {
    //     type: Number,
    //     default: 0
    // },
    // weight: {
    //     type: Number,
    //     default: 0
    // }, 
    // reps: {
    //     type: Number,
    //     default: 0
    // },
    // sets: {
    //     type: Number,
    //     default: 0
    // },
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [{
          type: { 
              type: String
            },
          name: String,
          duration: Number,
          weight: Number,
          reps: Number,
          sets: Number,
          distance: Number
    }]
});

// workoutSchema.totalDuration() {
//     return 
// }


const workoutExercise = mongoose.model("workoutExercise", workoutSchema);

module.exports = {
    Workout: workoutExercise
} 