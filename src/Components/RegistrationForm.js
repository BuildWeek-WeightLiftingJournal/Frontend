import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';


const RegistrationForm = ({ values, touched, errors, status }) => {

    const [user, setUser] = useState([]);

    useEffect( () => {
        status && setUser([...user, status]);
    }, [status]);

    return (
        <div className='container'>
            <Form className='form'>

                <label className='label'>Username: 
                <Field className='input' type='text' name='name' placeholder='Username' />
                </label>
                {touched.name && errors.name && (
                    <p className='error'>{errors.name}</p>
                )}
              
                <label className='label'>Email:
                <Field className='input' type='text' name='email' placeholder='Email' />
                </label>
                {touched.email && errors.email && (
                    <p className='error'>{errors.email}</p>
                )}
                
                <label className='label'>Password:
                <Field className='input' type='text' name='password' placeholder='Password' />
                </label>
                {touched.password && errors.password && (
                    <p className='error'>{errors.password}</p>
                )}
              
                <div>
                <button className='button' type='submit'>Register</button>
                </div>
            </Form>
            {/* <div className='displayInfoContainer'>
                {users.map(el => (
                    <div className='displayInfo'>
                        <p><strong>Name:</strong> {el.name}</p>
                        <p><strong>Email:</strong> {el.email}</p>
                        <p><strong>Password:</strong> {el.password}</p> 
                    </div>
                ))}
            </div> */}
        </div>
    );
};

const FormikRegistrationForm = withFormik({
    mapPropsToValues({ name, email, password }) {
        return {
            name: name || '',
            email: email || '',
            password: password || ''
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required('*Username required*'),
        email: Yup.string().required('*Email required*'),
        password: Yup.string().required('*Password required*')
    })

    // handleSubmit(values, {setStatus}) {
    //     axios.post('https://reqres.in/api/users', values)
    //     .then(response => {
    //         setStatus(response.data);
    //         console.log(response.data);
    //     })
    //     .catch(error => {
    //         console.log(error.response)
    //     })
    // }
})(RegistrationForm);



export default FormikRegistrationForm;