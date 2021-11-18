import  { ADD_TODO, GET_ALL_TODOS, SEARCH_TODOS } from '../actions/types';

const initialState = {
    list: [],
    searchTerm: '',
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
                    list: action.payload,
                };
        case SEARCH_TODOS:
            if (action.payload.searchTerm) {
                return {
                    ...state,
                    list: action.payload.todoList.filter(item => item.title.includes(action.payload.searchTerm.toLowerCase())),
                    searchTerm: action.payload.searchTerm
                }
            } else {
                return {
                    ...state,
                    list: action.payload.todoList,
                    searchTerm: ''
                }
            }
            
                
        default:
            return state;
            
    }
}