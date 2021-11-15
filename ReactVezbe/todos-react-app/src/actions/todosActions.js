import { ADD_TODO, GET_ALL_TODOS } from './types';
import todosService  from '../services/todosService'

export function addTodo(todoText) {

    const actualTodoText = todoText.toUpperCase();

    return (dispatch) => {
        dispatch({
            type: ADD_TODO,
            payload: actualTodoText
        });
    };
}

export function getAllTodos() {
    return async (dispatch) => {
        try {
            const todosList = await todosService.getAllTodos();
            dispatch({
                type: GET_ALL_TODOS,
                payload: todosList,
            })
        }
        catch(e) {

        }
    } 
}