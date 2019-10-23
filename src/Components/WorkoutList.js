import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import WorkoutCard from './WorkoutCard';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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

// import React, { useState } from 'react';
// import axios from 'axios';
// export default function RegisterForm(props) {
//     const [userCredentials, setCredentials] = useState({
//         username: "",
//         password: "",
//         primaryemail: ""
//     });
//     const submitHandler = event => {
//         event.preventDefault();
//         axios.post("https://ar-journal.herokuapp.com/createnewuser", userCredentials,  {headers: {"Content-Type": "application/json" }})
//             .then(res => {
//                 console.log(res);
//                 props.history.push("/");
//             })
//             .catch(err => console.log(err.response))
//     }
//     const changeHandler = event => {
//         setCredentials({ ...userCredentials, [event.target.name]: event.target.value })