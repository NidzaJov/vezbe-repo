import { GET_ALL_USERS } from "../actions/types"

const initialState = {
    usersList: [],
    currentTodo: null,
}

export default function usersReducer(state=initialState, action) {
    switch (action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                usersList: action.payload,
            };
        default:
            return state
    }
       
}