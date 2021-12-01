import { EDIT_MODE_TOGGLE, GET_ALL_TODOS, HIDE_COMPLETED, SEARCH_TODOS, TOGGLE_TODO,
     SHARE_TODO_WITH_USER, UNSHARE_TODO_WITH_USER, GET_ALL_TODOS_FAILED, 
     SEARCH_TODOS_FAILED, ADD_TODO_FAILED, DELETE_TODO_FAILED, TOGGLE_TODO_FAILED,
      HIDE_COMPLETED_FAILED, EDIT_MODE_TOGGLE_FAILED, SHARE_TODO_WITH_USER_FAILED,
    UNSHARE_TODO_WITH_USER_FAILED } from './types';
import todosService  from '../services/todosService';

export function addTodo(todoText) {
    return async (dispatch) => {
        try {
            await todosService.addTodo(todoText);
            await getAllTodos() (dispatch);
        } catch(e) {
            dispatch({
                type: ADD_TODO_FAILED,
                payload: `Adding todo failed due to error ${e}`
            })
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
            dispatch({
                type: GET_ALL_TODOS_FAILED,
                payload: `Could not get todos due to error: ${e}`
            })
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
            dispatch({
                type: DELETE_TODO_FAILED,
                payload: `Delete todo failed due to error: ${e}`
            })
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
            dispatch({
                type: SEARCH_TODOS_FAILED,
                payload: `Search ${searchTerm} among todos failed due to error: ${e}`
            })
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
            dispatch({
                type: TOGGLE_TODO_FAILED,
                payload: `Toggle todo failed due to error: ${e}`,
            })
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
            dispatch({
                    type: HIDE_COMPLETED_FAILED,
                    payload: `Hide completed todos failed due to error: ${e}`,
            })
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
            dispatch({
                type: EDIT_MODE_TOGGLE_FAILED,
                payload: `Toggling edit mode failed due to error: ${e}`
            })
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
            console.log('DB updated')
            await getAllTodos() (dispatch);
            dispatch({
                type: SHARE_TODO_WITH_USER,
                payload: payload
            })
            
        } catch (e) {
            dispatch({
                type: SHARE_TODO_WITH_USER_FAILED,
                payload: `Sharing todo with user failed due to error: ${e}`
            })
        }
    }
}

export function unShareTodoWithUser(payload) {
    return async (dispatch) => {
        try {
            console.log(`Started unsharing todo with id: ${payload.todoId}, with user id: ${payload.userId}`)
            await todosService.patchTodo({ _id: payload.todoId, field: 'sharedWith', value: payload.userId, action: 'REMOVE' });
            console.log('DB updated')
            await getAllTodos() (dispatch);
            dispatch({
                type: UNSHARE_TODO_WITH_USER,
                payload: payload
            })
            
        } catch (e) {
            dispatch({
                type: UNSHARE_TODO_WITH_USER_FAILED,
                payload: `Unaring todo with user failed due to error: ${e}`
            })
        }
    }
}