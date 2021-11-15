import { LOG_IN, LOG_IN_ERROR, REGISTRATION_FAILED, REGISTRATION_SUCCESSFULL } from "../actions/types"

const initialState = {
    loggedIn: false,
    registrationStatus: false,
    error: null,
};

export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case LOG_IN:
            return {
                ...state,
                loggedIn: true,
                error: null
            }
        case LOG_IN_ERROR:
            return {
                ...state,
                loggedIn: false,
                error: action.payload
            }
        case REGISTRATION_FAILED:
            return {
                ...state,
                error: action.payload
            };
        case REGISTRATION_SUCCESSFULL:
            return {
                ...state,
                registrationStatus: true,
                error: null
            }
        default: 
            return state;
    }
}