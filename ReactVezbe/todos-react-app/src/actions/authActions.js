//import { config } from '../config';
import authService from '../services/authService';
import { LOGOUT, LOG_IN, LOG_IN_ERROR, REGISTRATION_FAILED, REGISTRATION_SUCCESSFULL } from './types';

export function logIn(credentials) {
    return async (dispatch) => {
        try {
            await authService.login(credentials);
            dispatch({
                type: LOG_IN
            });
        } catch(e) {
            dispatch({
                type: LOG_IN_ERROR,
                payload: "Bad Credentials. Please try again."
            })
        }
    }
}

export function logout() {
    return (dispatch) => {
        authService.logout();
        dispatch({
            type: LOGOUT,
        })
    }
}

export function register(payload) {
    return async (dispatch) => {
        try {
            await authService.register(payload);
            dispatch({
                type:REGISTRATION_SUCCESSFULL,
            })
        } catch(e) {
            dispatch({
                type: REGISTRATION_FAILED,
                payload: 'Missing fields or duplicate e-mail address.',
            })
        }
    }
}