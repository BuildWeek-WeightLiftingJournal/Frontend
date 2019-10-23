import React from 'react';


const WorkoutCard = ({ workout }) => {
   return (
     <div id={workout.workoutid}>
       <h1>{workout.day}</h1>
       <h2>{workout.exerciseName}</h2>
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
