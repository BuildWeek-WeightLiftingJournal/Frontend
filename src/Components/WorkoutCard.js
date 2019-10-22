import React from 'react';
const WorkoutCard = ({ workout }) => {
   return (
     <div id={workout.id}>
       <h2>{workout.name}</h2>
       <p>{workout.sets}</p>
       <p>{workout.reps}</p>
       <p>{workout.load}</p>
     </div>
   );
 };
export default WorkoutCard;