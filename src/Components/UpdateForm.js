import React, { useState, useEffect } from "react";
import axios from "axios";


const WorkoutForm = (props) => {
  
  const [workout, setworkout] = useState({
    workoutName: '',
    workoutDay: '', 
    muscle: '',
    exercises: [{
    exercise: '',
    weight: '',
    sets: '',
    reps: '',
    }]
  });

  const update = (e) => {
    e.preventDefault();
     
    }

    const handleChange = e => {
        setworkout({
            ...workout,
            [e.target.name]: e.target.value
        })
    }



  return (
    <>
    <div>
    <h1>Update</h1>
      <form onSubmit={update}>
        <input
        type="text"
        name="workout"
        value={workout.workoutName}
        placeholder="workout name"
        onChange={handleChange}
        />
      
      <input
        type="text"
        name="workoutDay"
        value={workout.workoutDay}
        placeholder="workout Day"
        onChange={handleChange}
        />

        <input
        type="text"
        name="exercise"
        value={workout.exercise}
        placeholder="Exercise Name"
        onChange={handleChange}
        />

        <input
        type="text"
        name="weight"
        value={workout.weight}
        placeholder="weight"
        onChange={handleChange}
        />

        <input
        type="text"
        name="sets"
        value={workout.sets}
        placeholder="sets"
        onChange={handleChange}
        />

        <input
        type="text"
        name="reps"
        value={workout.reps}
        placeholder="reps"
        onChange={handleChange}
        />


        <select name="muscle">
        <option value="upperBody">Upper Body</option>
        <option value="lowerBody">lower Body</option>
        </select>

      
        <button>Update!</button>
      </form>
      </div>
    </>
  );
};

export default WorkoutForm;
