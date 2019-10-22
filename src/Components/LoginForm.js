import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

 

const LoginForm = ({ errors, touched, status }) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        status && setUser([...user, status]);
    }, [status]);

    return (
        <div className="container">
            <h2 className="title">Login</h2>
            <Form className="form">
                <label className="label">Username:
                <Field className="input"
                    type="text" 
                    name="username" 
                    placeholder="Username" />
                </label>
                {touched.username && errors.username && (
                    <p className="error">{errors.username}</p>
                )}
                <label className="label">Password:
                <Field className="input"
                    type="text"
                    name="password"
                    placeholder="Password" />
                </label>
                {touched.password && errors.password && (
                    <p className="error">{errors.password}</p>
                )}

                <button className="button" type="submit">Log In</button>
            </Form>
        </div>
    );
};

const FormikLoginForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || "",
            password: password || ""
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required("Username required"),
        password: Yup.string().required("Password required")
    }),

    handleSubmit(values, {setStatus}) {
        axios
        .post("https://reqres.in/api/users", values)
        .then(res => {
            setStatus(res.data);
        })
        .catch(error => console.log(error));
    }
})(LoginForm);

export default FormikLoginForm