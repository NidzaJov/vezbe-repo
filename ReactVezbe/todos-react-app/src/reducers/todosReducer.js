import  { ADD_TODO, GET_ALL_TODOS } from '../actions/types';

const initialState = {
    list: []
};

export default function todosReducer(state=initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            const newList = [...state.list];
            newList.push({text: action.payload, done: false})
            return {
                ...state,
                list: newList
            };
        case GET_ALL_TODOS:
            return {
                ...state,
                list: action.payload
            }
        default:
            return state;
            
    }
}