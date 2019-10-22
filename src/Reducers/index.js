import { 
    SIGNUP_USER_START,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    FETCHING_WORKOUTS_START,
    FETCHING_WORKOUTS_SUCCESS,
    FETCHING_WORKOUTS_FAILURE,
    POSTING_WORKOUT_START,
    POSTING_WORKOUT_SUCCESS,
    POSTING_WORKOUT_FAILURE,
    UPDATING_WORKOUT_START,
    UPDATING_WORKOUT_SUCCESS,
    UPDATING_WORKOUT_FAILURE,
    DELETING_WORKOUT_START,
    DELETING_WORKOUT_SUCCESS,
    DELETING_WORKOUT_FAILURE
 } from '../Actions';


const initialState = [
    {
        userid: null,
        workouts: [],
        isFetching: false, 
        error: ''
    }
]

export const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case SIGNUP_USER_START:
            return {
                ...state, 
                isFetching: true, 
                error: ''
            }
        case SIGNUP_USER_SUCCESS:
            return {
                ...state, 
                isFetching: false, 
                userId: action.paylod
            }
        case SIGNUP_USER_FAILURE: 
            return {
                ...state,
                isFetching: false, 
                error: `ERROR: Unable to create user: ${action.payload}`
            }
        case LOGIN_USER_START: 
            return {
                ...state,
                isFetching: true, 
                error: ''
            }
        case LOGIN_USER_SUCCESS: 
            return {
                ...state, 
                isFetching: true,
                userId: action.payload
            }
        case LOGIN_USER_FAILURE: 
            return {
                ...state,
                isFetching: true,
                error: `ERROR: Unable to load user: ${action.payload}`
            }
        case FETCHING_WORKOUTS_START: 
            return {
                ...state, 
                isFetching: true, 
                error: ''
            }
        case FETCHING_WORKOUTS_SUCCESS: 
            return {
                ...state,
                isFetching: false,
                receipts: action.payload
            }
        case FETCHING_WORKOUTS_FAILURE: 
            return {
                ...state,
                isFetching: true,
                error: `ERROR: Unable to load workout`
            }
        case POSTING_WORKOUT_START: 
            return {
                ...state, 
                isFetching: true,
                error: ''
            }
        case POSTING_WORKOUT_SUCCESS: 
            return {
                ...state,
                isFetching: false,
                workouts: [...state.workouts, action.payload]
            }
        case POSTING_WORKOUT_FAILURE: 
            return {
                ...state, 
                isFetching: false,
                error: `ERROR: Unable to add workout ${action.payload}`
            }
        case UPDATING_WORKOUT_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case UPDATING_WORKOUT_SUCCESS: 
            return {
                ...state,
                isFetching: false,
                workouts: state.workouts.map(workout => {
                    if (workout.workoutId === action.payload.workoutId) {
                        return action.payload
                    }
                    return workout
                })
            }
        case UPDATING_WORKOUT_FAILURE: 
            return {
                ...state,
                isFetching: false, 
                error: `ERROR: Unable to update ${action.payload} `
            }
        case DELETING_WORKOUT_START: 
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case DELETING_WORKOUT_SUCCESS: 
            return {
                ...state,
                isFetching: false,
                error: ''
            }
        case DELETING_WORKOUT_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: `ERROR: Unable to delete workout ${action.payload}`
            }
    };
};