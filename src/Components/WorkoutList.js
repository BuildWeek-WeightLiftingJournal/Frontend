import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import WorkoutCard from './WorkoutCard';
import AddWorkoutForm from './AddWorkoutForm';

function WorkoutList(props) {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('https://ar-journal.herokuapp.com/users/userworkout', {headers: {"Content-Type": "application/json" }})
      .then(res => {
        console.log(res.data);
        setWorkouts(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Weight Lifting Journal</h2>
      {workouts.map(workout => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
      <AddWorkoutForm />

    </div>
  );
}

export default WorkoutList;