import { ADD_TODO } from './types';

export function addTodo(todoText) {

    const actualTodoText = todoText.toUpperCase();

    return (dispatch) => {
        dispatch({
            type: ADD_TODO,
            payload: actualTodoText
        });
    };
}