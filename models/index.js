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

workoutSchema.methods.totalDuration = function() {
    let totalDuration = 0;
    for (const exercise of this.exercises) {
        totalDuration += exercise.duration;
    }
    return totalDuration;
}


const workoutExercise = mongoose.model("workoutExercise", workoutSchema);

module.exports = {
    Workout: workoutExercise
} 


// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// // Exercise sub-document
// const ExerciseSchema = new Schema({
//     type: String,
//     name: String,
//     duration: {
//         type: Number,
//         default: 0
//     },
//     weight: {
//         type: Number,
//         default: 0
//     },
//     reps: {
//         type: Number,
//         default: 0
//     },
//     sets: {
//         type: Number,
//         default: 0
//     },
//     distance: {
//         type: Number,
//         default: 0
//     }
// });
// const WorkoutSchema = new Schema({
//     id: Schema.Types.ObjectId,
//     day: {
//         type: Date,
//         default: Date.now()
//     },
//     totalDistance: Number,
//     totalDuration: Number,
//     exercises: [ExerciseSchema]
// });
// const Workout = mongoose.model("Workout", WorkoutSchema);
// module.exports = Workout;