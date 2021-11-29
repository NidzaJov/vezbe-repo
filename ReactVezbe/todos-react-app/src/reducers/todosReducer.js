import  { ADD_TODO, GET_ALL_TODOS, SEARCH_TODOS, TOGGLE_TODO, HIDE_COMPLETED, EDIT_MODE_TOGGLE, SHARE_TODO_WITH_USER } from '../actions/types';

const initialState = {
    list: [],
    searchTerm: '',
    showSearch: false,
    hideCompleted: false,
    editMode: false,
    editedTodoId: null,
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
            };
        case TOGGLE_TODO:
            const someList = [...state.list];
            let toggledTodo = someList.find(todo => todo._id === action.payload);
            toggledTodo.done = !toggledTodo.done;
            
            return {
                
                ...state,
                list: someList
            }  
        case  HIDE_COMPLETED:
            const hideField = !state.hideCompleted;
            console.log('1',hideField)
            return {
                ...state,
                hideCompleted: hideField,
            }     
        case EDIT_MODE_TOGGLE:
            const mode = !state.editMode;
            return {
                ...state,
                editMode: mode,
                editedTodo: action.payload
            }  
        case SHARE_TODO_WITH_USER: 
            const todosList = [...state.list];
            let addedTodo = todosList.find(todo => todo._id === action.payload._id);
            addedTodo.sharedWith.push(action.payload.userId);
            return {
                    ...state,
                    todosList
            }
        default:
            return state;
            
    }
}