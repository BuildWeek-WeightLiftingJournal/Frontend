import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


function RegistrationForm(props) {
    const [userCredentials, setCredentials] = useState({
        username: "",
        password: "",
        primaryemail: ""
    });
    const submitHandler = event => {
        event.preventDefault();
        axios.post("https://ar-journal.herokuapp.com/createnewuser", userCredentials,  {headers: {"Content-Type": "application/json" }})
            .then(res => {
                console.log(res);
                props.history.push("/");
            })
            .catch(err => console.log(err.response))
    }
    const changeHandler = event => {
        setCredentials({ ...userCredentials, [event.target.name]: event.target.value })
    }

    return (
        <div className='container'>
            <h2 className='title'>Registration</h2>
            <form className='form' onSubmit={submitHandler}>

                <label className='label'>Username: 
                <input className='input' type='text' name='username' placeholder='Username' onChange={changeHandler} value={userCredentials.username} required />
                </label>

                <label className='label'>Email:
                <input className='input' type='text' name='primaryemail' placeholder='Email' onChange={changeHandler} value={userCredentials.primaryemail} required />
                </label>
                
                <label className='label'>Password:
                <input className='input' type='text' name='password' placeholder='Password' onChange={changeHandler} value={userCredentials.password} required />
                </label>
              
                <div>
                <button className='button' type='submit'>Sign Up!</button>
                </div>
                <Link><p className='loginhere'>Already Registered? Login here</p></Link>
            </form>
        </div>
    );
};


export default RegistrationForm;