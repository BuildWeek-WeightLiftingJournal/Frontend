import React from 'react';
import RegistrationForm from './Components/RegistrationForm';
import Nav from './Components/Nav';
import './App.css';
import LoginForm from "./Components/LoginForm";

function App() {
  return (
    <div className="App">
      <Nav />
      <RegistrationForm />
      <LoginForm />
    </div>
  );
}

export default App;
