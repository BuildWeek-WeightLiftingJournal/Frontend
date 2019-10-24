import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import WorkoutCard from './WorkoutCard';
import AddWorkoutForm from './AddWorkoutForm';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {Route} from 'react-router-dom';

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const AddWorkoutButton = styled.button`
  border: 1px solid white;
  border-radius: 10px;
  padding: 2%;
  background: #35373B;
  color: white;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    letter-spacing: 1px;
  }
`;


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
  useEffect(()=> { 
    setWorkouts(workouts)
  },[workouts])
  return (
    <div>


      <div>
        <h2>Weight Lifting Journal</h2>
        <Link to='/workoutform'><AddWorkoutButton>Add Workout</AddWorkoutButton></Link>
      </div>
      <List>
        {workouts.map(workout => (
        <WorkoutCard setWorkouts = {setWorkouts} workout={workout} workouts={workouts} />
        ))}
      </List>
    </div>
  );
}

export default WorkoutList;