import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import RegistrationForm from './Components/RegistrationForm';
import Nav from './Components/Nav';
import './App.css';
import WorkoutList from './Components/WorkoutList';
import LoginForm from "./Components/LoginForm";
import AddWorkoutForm from './Components/AddWorkoutForm';
import EditWorkoutForm from './Components/EditWorkoutForm'

function App() {

  const [userID, setUserID] = useState(0);

  return (
    <div className="App">
      <Nav />
      <Route exact path='/' render={props => <RegistrationForm {...props} />} />
      <Route path='/login' render={props => <LoginForm setUserID={setUserID} {...props} />} />
      <Route path='/workoutform' render={props => <AddWorkoutForm userID={userID} {...props} />} />
      <Route path='/workoutlist' render={props => <WorkoutList userID={userID} {...props} />} />
      <Route path='/editworkout/:id' render={props => <EditWorkoutForm userID={userID} {...props} />}/>
    </div>
  );
}

export default App;