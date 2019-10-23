import React from 'react';
import styled from 'styled-components';

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
   return (
     <Card id={workout.id}>
       {/* <button><Link to=`/editworkout/${workout.id}`>Edit</button> */}
       <h2>{workout.title}</h2>
       <MG>({workout.muscleGroup})</MG>
       <p>{workout.day}</p>
       <p><strong>{workout.exerciseName}:</strong> {workout.sets} x {workout.reps} ({workout.weight}lbs)</p>
     </Card>
   );
 };
export default WorkoutCard;

// day	
// exerciseName
// muscleGroup	
// reps	
// sets	
// title	
// weight	
// workoutid	
