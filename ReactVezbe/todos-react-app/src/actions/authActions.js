//import { config } from '../config';
import authService from '../services/authService';
import { LOG_IN, LOG_IN_ERROR } from './types';

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