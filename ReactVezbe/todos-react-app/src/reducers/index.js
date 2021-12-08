import { combineReducers } from 'redux';
import  todosReducer  from './todosReducer';
import authReducer from './authReducer';
import usersReducer from './usersReducer';
import reactionsReducer from './reactionsReducer';

export default combineReducers({
    todos: todosReducer,
    auth: authReducer,
    users: usersReducer,
    reactions: reactionsReducer
});