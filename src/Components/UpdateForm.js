import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const WorkoutForm = ({ errors, touched, values, status }) => {
  const [workout, setWorkout] = useState([]);
  
  
  useEffect(() => {
    status && setWorkout(workout => [...workout, status]);
  }, [status]);

  return (
    
    <div className="update-form"> 
          <h1>Update Workout</h1>
      <Form>
        <Field type="text" name="name" placeholder="workout Name" />
        {touched.name && errors.name && (
          <p className="error">{errors.name}</p>
        )}

        <Field type="text" name="date" placeholder="date" />
        {touched.date && errors.date && <p className="error">{errors.date}</p>}

        <Field type="text" name="exercise" placeholder="exercise name" />
        {touched.exercise && errors.exercise && <p className="error">{errors.exercise}</p>}
        
        <Field type="text" name="weight" placeholder="weight" />
        {touched.weight && errors.weight && <p className="error">{errors.weight}</p>}

        <Field type="number" name="sets" placeholder="sets" />
        {touched.sets && errors.sets && <p className="error">{errors.sets}</p>}

        <Field type="number" name="reps" placeholder="reps" />
        {touched.reps && errors.reps && <p className="error">{errors.reps}</p>}

         <h2>Muscle Group</h2>
        <Field component="select" className="group-select" name="group">
          <option>Please Choose an Option</option>
          <option value="UpperBody">Upper Body</option>
          <option value="LowerBody">Lower Body</option>
        </Field>
        {touched.group && errors.group && <p className="error">{errors.group}</p>}
        <button type="submit">Update!</button>
      </Form>
 </div>
  );
};


const FormikUserForm = withFormik({
  mapPropsToValues({ name, date, group, exercise, reps, sets, weight }) {
    return {
      group: group || "",
      name: name || "",
      date: date || "",
      exercise: exercise || "",
      reps: reps || "",
      sets: sets || "",
      weight: weight || "",
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Workout Name required"),
    date: Yup.string().required("date Required"),
    exercise: Yup.string().required("exercise Required"),
    reps: Yup.string().required("reps Required"),
    sets: Yup.string().required("sets Required"),
    weight: Yup.string().required("weight Required"),
    group: Yup.string()
      .oneOf(["LowerBody", "UpperBody"])
      .required("Please choose one!")
  }),

  handleSubmit(values, { setStatus }) {
    axios
      // values is our object with all our data on it.
      .post("", values)
      .then(res => {
        setStatus(res.data);
        console.log(res);
      })
      .catch(err => console.log(err.response));
  }
})(WorkoutForm); 
console.log("This is the HOC", FormikUserForm);

export default FormikUserForm;