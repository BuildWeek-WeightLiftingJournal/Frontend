import React, { useState, useEffect } from "react";
import axios from "axios";
import {useParams} from "react-router-dom"
import { axiosWithAuth } from "../utils/axiosWithAuth";

const EditWorkoutForm = (props) => {
  
  let {id} = useParams()
  console.log(id)
  const [workout, setworkout] = useState({
    workoutid:id,
    title: '',
    day: '', 
    muscleGroup: '',
    exerciseName: '',
    weight: '',
    sets: '',
    reps: '',
    
  });

  const update = (e) => {
    e.preventDefault();
    console.log('update')
    console.log(workout)
    
    axiosWithAuth().put(`https://ar-journal.herokuapp.com/workout/update/${workout.workoutid}`, workout,  {headers: {"Content-Type": "application/json" }})
            .then(res => {
                console.log(res);
                props.history.push('/workoutlist');
            })
            .catch(err => console.log(err.response))
    
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
    <h1>Edit Workout</h1>
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
        <option value='Muscle Group not selected'>Choose Muscle Group</option>
        <option value='Chest'>Chest</option>
        <option value='Back'>Back</option>
        <option value='Shoulders'>Shoulders</option>
        <option value='Arms'>Arms</option>
        <option value='Legs'>Legs</option>
        </select>
        </label>

        <div>
        <button className="button" type="submit">Submit</button>
        </div>
      </form>
      </div>
    </>
  );
};

export default EditWorkoutForm;
