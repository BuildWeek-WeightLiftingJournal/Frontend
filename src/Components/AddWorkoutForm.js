import React, { useState } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";


const AddWorkoutForm = (props) => {
  
  const [workout, setWorkout] = useState({
    title: '',
    day: '', 
    muscleGroup: '',
    exerciseName: '',
    weight: 0,
    sets: 0,
    reps: 0,
    
  });

  const update = (e) => {
    e.preventDefault();
    console.log(workout)
    axiosWithAuth()
    .post("https://ar-journal.herokuapp.com/workout/new", workout,  {headers: {"Content-Type": "application/json" }})
            .then(res => {
                console.log(res);
                props.history.push('/workoutlist');
            })
            .catch(err => console.log(err.response))
      }

    const handleChange = e => {
      
        if (e.target.name === "weight" || e.target.name === "sets" || e.target.name === "reps" ){
          setWorkout({ 
          ...workout,
            [e.target.name]: Number(e.target.value)
        })}
        else {
          setWorkout({ 
            ...workout,
              [e.target.name]: e.target.value
          })
        }}
    

  return (
    <>
    <div className="container">
    <h1>Add Workout</h1>
      <form className="update-form" onSubmit={update}>
        <label className="label"> Workout Name:
        <input className="input"
        type="text"
        name="title"
        value={workout.title}
        placeholder="Workout Name"
        onChange={handleChange}
        />
        </label>
      
      <label className="label">Workout Day:
      <input className="input"
        type="text"
        name="day"
        value={workout.day}
        placeholder="Workout Day"
        onChange={handleChange}
        />
        </label>

        <label className="label">Exercise Name:
        <input className="input"
        type="text"
        name="exerciseName"
        value={workout.exerciseName}
        placeholder="Exercise Name"
        onChange={handleChange}
        />
        </label>

        <label className="label">Weight (lbs):
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

        <label className="label">Muscle Group:
        <select className="select-input" name="muscleGroup" onChange={handleChange}>
        <option value='Upper Body'>Upper Body</option>
        <option value='Lower Body'>Lower Body</option>
        </select>
        </label>

        <div>
        <button className="button">Add</button>
        </div>
      </form>
      </div>
    </>
    )
};

export default AddWorkoutForm;