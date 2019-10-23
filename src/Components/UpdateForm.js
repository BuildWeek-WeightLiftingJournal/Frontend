import React, { useState, useEffect } from "react";
import axios from "axios";


const WorkoutForm = (props) => {
  
  const [workout, setworkout] = useState({
    workoutName: '',
    workoutDay: '', 
    muscle: '',
    exercise: '',
    weight: '',
    sets: '',
    reps: '',
    
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
    <div className="container">
    <h1>Update</h1>
      <form className="update-form" onSubmit={update}>
        <label className="label"> Workout Name:
        <input className="input"
        type="text"
        name="workoutName"
        value={workout.workoutName}
        placeholder="Workout Name"
        onChange={handleChange}
        />
        </label>
      
      <label className="label">Workout Day:
      <input className="input"
        type="text"
        name="workoutDay"
        value={workout.workoutDay}
        placeholder="Workout Day"
        onChange={handleChange}
        />
        </label>

        <label className="label">Exercise Name:
        <input className="input"
        type="text"
        name="exercise"
        value={workout.exercise}
        placeholder="Exercise Name"
        onChange={handleChange}
        />
        </label>

        <label className="label">Weight:
        <input className="input"
        type="number"
        name="weight"
        value={workout.weight}
        placeholder="Weight"
        onChange={handleChange}
        />
        </label>

        <label className="label">Sets:
        <input className="input"
        type="number"
        name="sets"
        value={workout.sets}
        placeholder="Sets"
        onChange={handleChange}
        />
        </label>

        <label className="label">Reps:
        <input className="input"
        type="number"
        name="reps"
        value={workout.reps}
        placeholder="Reps"
        onChange={handleChange}
        />
        </label>

        <label className="label">Body Part:
        <select className="select-input" name="muscle">
        <option value="upperBody">Upper Body</option>
        <option value="lowerBody">lower Body</option>
        </select>
        </label>

        <div>
        <button className="button">Update!</button>
        </div>
      </form>
      </div>
    </>
  );
};

export default WorkoutForm;
