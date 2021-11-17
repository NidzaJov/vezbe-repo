import { ADD_TODO, GET_ALL_TODOS } from './types';
import todosService  from '../services/todosService'

export function addTodo(todoText) {

    //const actualTodoText = todoText.toUpperCase();

    return async (dispatch) => {
        try {
            dispatch({
                type: ADD_TODO,
                payload: todoText
            });
            await todosService.addTodo(todoText)
            await getAllTodos() (dispatch);
        } catch(e) {

        }
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