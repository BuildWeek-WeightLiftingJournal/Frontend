import React from 'react';
import styled from 'styled-components';
import Delete from '../assets/delete.svg';
import { axiosWithAuth } from 'axios';


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

     
const WorkoutCard = ({ workout }) => {

  const deleteWorkout = workoutid => {
    axiosWithAuth()
        .delete(`https://ar-journal.herokuapp.com/workout/delete/${workoutid}`)
        .then(res => {
            console.log('workout was deleted', res);

        })
        .catch(err => console.log('delete workout error', err))
  };  
  // const deleteColor = colorToDelete => {
  //   // make a delete request to delete this color
  //   axiosWithAuth()
  //     .delete(`/colors/${colorToDelete.id}`, colorToDelete.id)
  //     .then(res => {
  //       const deletedColors = colors.filter(color => colorToDelete.id !== color.id)
  //       updateColors(deletedColors)
  //     })
  //     .catch(err => console.log('delete error', err))
  // };

   return (
     <div>
       <StyledImg 
        src={Delete} 
        alt='trashcan icon' 
        onClick={()=> {
          deleteWorkout();
        }} 
      />
     <Card id={workout.id}>
       {/* <button><Link to=`/editworkout/${workout.id}`>Edit</button> */}
       <h2>{workout.title}</h2>
       <MG>({workout.muscleGroup})</MG>
       <p>{workout.day}</p>
       <p><strong>{workout.exerciseName}:</strong> {workout.sets} x {workout.reps} ({workout.weight}lbs)</p>
     </Card>
    </div>
   );
 };

export default WorkoutCard;