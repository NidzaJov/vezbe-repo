import { EDIT_MODE_TOGGLE, GET_ALL_TODOS, HIDE_COMPLETED, SEARCH_TODOS, TOGGLE_TODO, SHARE_TODO_WITH_USER } from './types';
import todosService  from '../services/todosService';

export function addTodo(todoText) {
    return async (dispatch) => {
        try {
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

export function toggleTodo(todo) {
    return async (dispatch) => {
        try {
            await todosService.patchTodo({ _id: todo._id, field: 'done', value: !todo.done});
            dispatch({
                type:TOGGLE_TODO,
                payload: todo._id
            }) 
            
        } catch(e) {

        }
    }
}

export function hideCompleted() {
    return async (dispatch) => {
        try {
            dispatch({
                type: HIDE_COMPLETED,
            })
        } catch(e) {
            
        }
    }
}

export function enterEditMode(todo) {
    return async (dispatch) => {
        try {
            dispatch({
                type: EDIT_MODE_TOGGLE,
                payload: todo
            })
        } catch(e) {

        }
    }
}

export function editTodo(editedTodo) {
    return async (dispatch) => {
        try{
            await todosService.putTodo(editedTodo);
            await getAllTodos() (dispatch);
            dispatch({
                type: EDIT_MODE_TOGGLE,
                payload: editedTodo
            })
        } catch (e) {

        }
    }
}

export function shareTodoWithUser(payload) {
    return async (dispatch) => {
        try {
            console.log(`Started sharing todo with id: ${payload.todoId}, with user id: ${payload.userId}`)
            await todosService.patchTodo({ _id: payload.todoId, field: 'sharedWith', value: payload.userId, action: 'ADD' });
            dispatch({
                type: SHARE_TODO_WITH_USER,
                payload: payload
            })
        } catch (e) {

        }
    }
}