import React from 'react';
import {Route} from 'react-router-dom';
import RegistrationForm from './Components/RegistrationForm';
import Nav from './Components/Nav';
import './App.css';
import WorkoutList from './Components/WorkoutList';
import LoginForm from "./Components/LoginForm";


function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path='/' render={props => <RegistrationForm {...props} />} />
      <Route path='/login' render={props => <LoginForm {...props} />} />
      <Route path='/users' render={props => <WorkoutList {...props} />} />
    </div>
  );
}

export default App;
