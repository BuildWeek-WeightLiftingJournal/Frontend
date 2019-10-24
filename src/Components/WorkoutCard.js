import React from 'react';
import styled from 'styled-components';
import Delete from '../assets/delete.svg';
import axios  from 'axios';
import {Link} from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const StyledImg = styled.img`
  width: 15px;
  height: 15px;
`;

const Card = styled.div`
  width: 30%;
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 #35373B;
  margin-top: 5%;
`;

const MG = styled.p`
  font-size: .8rem;
`;

const deleteWorkout = workoutid => {
  console.log(workoutid)
  axiosWithAuth()
      .delete(`https://ar-journal.herokuapp.com/workout/delete/${workoutid}`)
      .then(res => {
          console.log('workout was deleted', res);
          window.location.reload()
      })
      .catch(err => console.log('delete workout error', err))
};     
     
const WorkoutCard = ({ workout }) => {
   return (
     
     <Card id={workout.id}>
       <StyledImg 
        src={Delete} 
        alt='trashcan icon' 
        onClick={() => deleteWorkout(workout.workoutid)} 
      />
       <button><Link to={`/editworkout/${workout.workoutid}`}>Edit</Link> </button>
       <h2>{workout.title}</h2>
       <MG>({workout.muscleGroup})</MG>
       <p>{workout.day}</p>
       <p><strong>{workout.exerciseName}:</strong> {workout.sets} x {workout.reps} ({workout.weight}lbs)</p>
     </Card>
    
   );
 };

export default WorkoutCard;