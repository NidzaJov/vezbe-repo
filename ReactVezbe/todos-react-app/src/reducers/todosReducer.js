import  { ADD_TODO, GET_ALL_TODOS, SEARCH_TODOS, TOGGLE_TODO, HIDE_COMPLETED, EDIT_MODE_TOGGLE,
     SHARE_TODO_WITH_USER, UNSHARE_TODO_WITH_USER, ADD_TODO_FAILED, GET_ALL_TODOS_FAILED,
      SEARCH_TODOS_FAILED, DELETE_TODO_FAILED, TOGGLE_TODO_FAILED, HIDE_COMPLETED_FAILED,
       EDIT_MODE_TOGGLE_FAILED, SHARE_TODO_WITH_USER_FAILED, UNSHARE_TODO_WITH_USER_FAILED } from '../actions/types';

const initialState = {
    list: [],
    searchTerm: '',
    showSearch: false,
    hideCompleted: false,
    editMode: false,
    editedTodoId: null,
    error: null
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
        case ADD_TODO_FAILED:
            return {
                ...state,
                error: action.payload
            }
        case GET_ALL_TODOS:
                return {
                    ...state,
                    list: action.payload,
                };
        case GET_ALL_TODOS_FAILED:
            return {
                ...state,
                error: action.payload
            }
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
        case SEARCH_TODOS_FAILED:
            return {
                ...state,
                list: action.payload.todoList,
                searchTerm: '',
                error: action.payload
            }
        case DELETE_TODO_FAILED:
            return {
                ...state,
                error: action.payload
            }
        case TOGGLE_TODO:
            const someList = [...state.list];
            let toggledTodo = someList.find(todo => todo._id === action.payload);
            toggledTodo.done = !toggledTodo.done;
            
            return {
                
                ...state,
                list: someList
            }  
        case TOGGLE_TODO_FAILED:
            return {
                ...state,
                error: action.payload
            }
        case  HIDE_COMPLETED:
            const hideField = !state.hideCompleted;
            console.log('1',hideField)
            return {
                ...state,
                hideCompleted: hideField,
            }  
        case HIDE_COMPLETED_FAILED: 
            return {
                ...state,
                error: action.payload
            }   
        case EDIT_MODE_TOGGLE:
            const mode = !state.editMode;
            return {
                ...state,
                editMode: mode,
                editedTodo: action.payload
            }  
        case EDIT_MODE_TOGGLE_FAILED:
            return {
                ...state,
                error: action.payload
            }  
        case SHARE_TODO_WITH_USER: 
            const todosList = [...state.list];
            let addedTodo = todosList.find(todo => todo._id === action.payload._id);
            addedTodo.sharedWith.push(action.payload.userId);
            return {
                    ...state,
                    list: todosList
            }
        case SHARE_TODO_WITH_USER_FAILED:
            return {
                ...state,
                error: action.payload
            }  
        case UNSHARE_TODO_WITH_USER:
            const listOfTodos = [...state.list];
            let sharedTodo = listOfTodos.find(todo => todo._id === action.payload._id);
            let index = sharedTodo.sharedWith.indexOf(action.payload.userId)
            sharedTodo.sharedWith.splice(index, 1);
            return {
                ...state,
                list: listOfTodos
            }
        case UNSHARE_TODO_WITH_USER_FAILED:
            return {
                ...state,
                error: action.payload
            } 

        default:
            return state;
            
    }
}