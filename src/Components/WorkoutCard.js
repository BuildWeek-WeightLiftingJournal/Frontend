import React from 'react';


const WorkoutCard = ({ workout }) => {
   return (
     <div id={workout.id}>
       <h2>{workout.title}</h2>
       <h3>{workout.exerciseName}</h3>
       <p>{workout.day}</p>
       <p>{workout.sets}</p>
       <p>{workout.reps}</p>
       <p>{workout.weight}</p>
       <p>{workout.muscleGroup}</p>
     </div>
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
