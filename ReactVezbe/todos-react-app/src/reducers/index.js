import { combineReducers } from 'redux';
import  todosReducer  from './todosReducer';
import authReducer from './authReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    todos: todosReducer,
    auth: authReducer,
    users: usersReducer
});