import React from 'react';
import {Route} from 'react-router-dom';
import RegistrationForm from './Components/RegistrationForm';
import Nav from './Components/Nav';
import './App.css';
import LoginForm from "./Components/LoginForm";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route path='/' render={props => <RegistrationForm {...props} />} />
      <Route path='/login' render={props => <LoginForm {...props} />} />
    </div>
  );
}

export default App;
