import { GET_ALL_TODOS, SEARCH_TODOS } from './types';
import todosService  from '../services/todosService'

export function addTodo(todoText) {


    return async (dispatch) => {
        try {
            /*
            dispatch({
                type: ADD_TODO,
                payload: todoText
            }); */
            await todosService.addTodo(todoText);
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

export function deleteTodo(id) {
    return async (dispatch) => {
        try {
            await todosService.deleteTodo(id);
            await getAllTodos() (dispatch);
        }
        catch(e) {

        }
    }
} 

export function searchTodos(searchTerm) {
    return async (dispatch) => {
        try {
            const todoList = await todosService.getAllTodos();
            dispatch({
                type: SEARCH_TODOS,
                payload: {todoList, searchTerm}
            })
        } catch(e) {

        }
    }
}