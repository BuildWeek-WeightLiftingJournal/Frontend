import React, {useState} from 'react';

const axios = require('axios');
// const oauth = require('axios-oauth-client');
const LoginForm = props => {
  
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setUser({...user,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    axios.post('https://ar-journal.herokuapp.com/login', `grant_type=password&username=${user.username}&password=${user.password}`, {
      headers: {
        // btoa is converting our client id/client secret into base64
        Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.access_token);
        //props.setUserID(res.data.<whatever the user id is>)
        props.history.push('/users');
      })
      .catch(err => console.dir(err));
    e.preventDefault();
  }

    return (
      <div className="container">
        <h2 className="title">Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">Username:
        <input className="input"
          type="text" 
          name="username"
          placeholder="Username" 
          value={user.username} 
          onChange={handleChange} required />
          </label>
          <label className="label">Password:
        <input className="input"
          type="password" 
          name="password"
          placeholder="Password" 
          value={user.password} 
          onChange={handleChange} required />
          </label>
        <div>
        <button className="button">Submit</button>
        </div>
      </form>
      </div>
    );
  }

export default LoginForm;

// import React, { useState }from "react";
// import axios from "axios";

// const Login = props => {
//  const [userCredentials, setUserCredentials] = useState({username:'', password:''})
//  const handleChange = event => {
//    setUserCredentials(
//      {
//        ...userCredentials,
//        [event.target.name]: event.target.value
//      }
//    )
//  }
//  const onSubmit = event => {
//     event.preventDefault();
//     axios.post('https://ar-journal.herokuapp.com/login', `grant_type=password&username=${userCredentials.username}&password=${userCredentials.password}`, {headers: { Authorization: 'Basic bGFtYmRhLWNsaWVudDpsYW1iZGEtc2VjcmV0', 'Content-Type': 'application/x-www-form-urlencoded'}})
//         .then(res => {
//             console.log("response", res);
//             localStorage.setItem('token', res.data.access_token)
//             props.history.push('/mainpage')
//             }
//         )
//         .catch(err => console.log(err.response))
// }

//  return (
//    <div className="container">
//      <form onSubmit={onSubmit}>
//        <input className="input"
//         type="text" 
//         name="username" 
//         placeholder="Username" 
//         value={userCredentials.username} 
//         onChange={handleChange} />
//        <input className="input"
//         type="password" 
//         name="password" 
//         placeholder="Password" 
//         value={userCredentials.password} 
//         onChange={handleChange} />
//        <button className="button"> Log In </button>
//      </form>
//    </div>
//  );
// }
// export default Login;