import React from "react";
// import { Form, Field, withFormik } from "formik";
// import * as Yup from "yup";

 

const LoginForm = ({ errors, touched }) => {
    // const [user, setUser] = useState([]);

    return (
        <div className="container">
            <form className="form">
                <label className="label">Username:
                <input className="input"
                    type="text" 
                    name="username" 
                    placeholder="Username" />
                </label>
                {/* {touched.username && errors.username && (
                    <p className="error">{errors.username}</p>
                )} */}
                <label className="label">Password:
                <input className="input"
                    type="text"
                    name="password"
                    placeholder="Password" />
                </label>
                {/* {touched.password && errors.password && (
                    <p className="error">{errors.password}</p>
                )} */}

                <button className="button" type="submit">Log In</button>
            </form>
        </div>
    );
};

// const FormikLoginForm = withFormik({
//     mapPropsToValues({ username, password }) {
//         return {
//             username: username || "",
//             password: password || ""
//         };
//     },

//     validationSchema: Yup.object().shape({
//         username: Yup.string().required("Username required"),
//         password: Yup.string().required("Password required")
//     })
// })(LoginForm);

export default LoginForm