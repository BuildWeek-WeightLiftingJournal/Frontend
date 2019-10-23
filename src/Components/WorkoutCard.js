import React from 'react';
import styled from 'styled-components';
import Delete from '../assets/delete.svg';
import { axiosWithAuth } from 'axios';


const StyledImg = styled.img`
  width: 15px;
  height: 15px;
`;

const deleteWorkout = workoutid => {
  axiosWithAuth()
      .delete(`https://ar-journal.herokuapp.com/workout/delete/${workoutid}`)
      .then(res => {
          console.log('workout was deleted', res);
      })
      .catch(err => console.log('delete workout error', err))
};


const WorkoutCard = ({ workout }) => {
   return (
     <div>
      <StyledImg 
        src={Delete} 
        alt='trashcan icon' 
        onClick={()=> {
          deleteWorkout();
        }} 
      />
      <div id={workout.id}>
        <h2>Title: {workout.title}</h2>
        <h3>Exercise: {workout.exerciseName}</h3>
        <p>Date: {workout.day}</p>
        <p>Sets: {workout.sets}</p>
        <p>Reps: {workout.reps}</p>
        <p>Weight: {workout.weight}</p>
        <p>Muscle Group: {workout.muscleGroup}</p>
      </div>
     </div>
   );
 };

export default WorkoutCard;