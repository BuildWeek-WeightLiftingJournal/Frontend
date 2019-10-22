import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import WorkoutCard from './WorkoutCard';

function WorkoutList() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('https://ar-journal.herokuapp.com/swagger-ui.html#/workout/all')
      .then(res => {
        console.log(res);
        setWorkouts(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Weight Lifting Journal</h2>
      {workouts.map(workout => (
        <WorkoutCard workout={workout} />
      ))}
      {/* <AddWorkOut /> */}
    </div>
  );
}

export default WorkoutList;