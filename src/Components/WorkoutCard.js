import React, {useEffect} from 'react';
import styled from 'styled-components';
import Delete from '../assets/delete.svg';
import Edit from '../assets/edit.svg';
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

const IconDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;



     
const WorkoutCard = ({ workout, workouts, setWorkouts }) => {
  const deleteWorkout = workoutid => {
    console.log(workoutid)
    axiosWithAuth()
        .delete(`https://ar-journal.herokuapp.com/workout/delete/${workoutid}`)
        .then(res => {
            console.log('workout was deleted', res);
            const newWorkouts =  workouts.filter(workoutObj => {
              return workoutObj.workoutid !== workoutid;
            })
            setWorkouts(newWorkouts) 
        })
        .catch(err => console.log('delete workout error', err))
  };     
  
  return (
     
     <Card id={workout.id}>
       <IconDiv>
        <StyledImg src={Delete} alt='trashcan icon' onClick={() => deleteWorkout(workout.workoutid)} />
        <Link to={`/editworkout/${workout.workoutid}`}><StyledImg src={Edit} alt='edit icon' /></Link>
       </IconDiv>
       <h2>{workout.title}</h2>
       <MG>({workout.muscleGroup})</MG>
       <p>{workout.day}</p>
       <p><strong>{workout.exerciseName}:</strong> {workout.sets} x {workout.reps} ({workout.weight}lbs)</p>
     </Card>
    
   );
 };

export default WorkoutCard;