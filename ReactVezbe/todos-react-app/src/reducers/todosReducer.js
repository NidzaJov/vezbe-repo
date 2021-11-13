import  { ADD_TODO } from '../actions/types';

const initialState = {
    list: [
        {text: 'Buy milk', done: false},
        {text: 'Buy bread', done: false},
        {text: 'Buy socks', done: false},
    ]
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
        default:
            return state;
            
    }
}