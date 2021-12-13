import { GET_NOTIFICATIONS, ADD_NOTIFICATION } from "../actions/types";

const initialState = {
    notificationsList: []
}


export default function notificationReducer(state=initialState, action) {
    switch(action.type) {
        case GET_NOTIFICATIONS:
            return {
                ...state,
                notificationsList: action.payload
            }
        case ADD_NOTIFICATION:
            let newList = state.notificationsList;
            newList.push({...action.payload})
            return {
                ...state,
                notificationsList: action.payload
            }
        default:
            return state;
    }

}