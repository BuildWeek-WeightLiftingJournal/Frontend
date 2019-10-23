import { axiosWithAuth } from '../utils/axiosWithAuth';


// //signup actions
// export const SIGNUP_USER_START = 'SIGNUP_USER_START';
// export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
// export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';

// export const signUp = (userCredentials, history) => {
//     dispatch({ type: SIGNUP_USER_START });
//     axios
//         .post('https://ar-journal.herokuapp.com/swagger-ui.html#/createnewuser', userCredentials)
//         .then(res => {
//             dispatch({ type: SIGNUP_USER_SUCCESS, payload: res });
//             history.push('/users');
//         })
//         .catch(err => {
//             dispatch({ type: SIGNUP_USER_FAILURE, payload: err });
//         })
// };


// //login actions
// export const LOGIN_USER_START = 'LOGIN_USER_START';
// export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
// export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

// export const userLogin = (userCredentials, history) => {
//     dispatch({ type: LOGIN_USER_START });
//     axios 
//         .post('https://ar-journal.herokuapp.com/swagger-ui.html#/login', userCredentials)
//         .then(res => {
//             dispatch({ type: LOGIN_USER_SUCCESS });
//             history.push('/')
//         })
//         .catch(err => {
//             dispatch({ type: LOGIN_USER_FAILURE, payload: err })
//         })
// };


//fetch workout actions
export const FETCHING_WORKOUTS_START = 'FETCHING_WORKOUTS_START';
export const FETCHING_WORKOUTS_SUCCESS = 'FETCHING_WORKOUTS_SUCCESS';
export const FETCHING_WORKOUTS_FAILURE = 'FETCHING_WORKOUTS_FAILURE';

export const getWorkout = () => dispatch => {
    dispatch({ type: FETCHING_WORKOUTS_START });
    axiosWithAuth()
        .get('https://ar-journal.herokuapp.com/swagger-ui.html#/workout/all')
        .then(res => {
            dispatch({ type: FETCHING_WORKOUTS_SUCCESS });
        })
        .catch(err => {
            dispatch({ type: FETCHING_WORKOUTS_FAILURE, payload: err })
        })
};


//post new workouts actions
export const POSTING_WORKOUT_START = 'POSTING_WORKOUT_START';
export const POSTING_WORKOUT_SUCCESS = 'POSTING_WORKOUT_SUCCESS';
export const POSTING_WORKOUT_FAILURE = 'POSTING_WORKOUT_FAILURE';



//edit workout actions
export const UPDATING_WORKOUT_START = 'UPDATING_WORKOUT_START';
export const UPDATING_WORKOUT_SUCCESS = 'UPDATING_WORKOUT_SUCCESS';
export const UPDATING_WORKOUT_FAILURE = 'UPDATING_WORKOUT_FAILURE';

export const updateWorkout = id => dispatch=> {
    dispatch({ type: UPDATING_WORKOUT_START });
    axiosWithAuth()
        .put(`https://ar-journal.herokuapp.com/swagger-ui.html#/workout/update/${id}`)
}


//delete workout actions
export const DELETING_WORKOUT_START = 'DELETING_WORKOUT_START';
export const DELETING_WORKOUT_SUCCESS = 'DELETING_WORKOUT_SUCCESS';
export const DELETING_WORKOUT_FAILURE = 'DELETING_WORKOUT_FAILURE';

export const deleteWorkout = id => () => {
    axiosWithAuth()
        .delete(`https://ar-journal.herokuapp.com/swagger-ui.html#/workout/delete/${id}`)
        .then(res => {
            localStorage.removeItem('workoutid');
            console.log('workout was deleted', res);
        })
        .catch(err => console.log('delete workout error', err))
};