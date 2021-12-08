import { ADD_REACTION, GET_REACTIONS } from "../actions/types";

const initialState ={
    reactionsList: [],
}

export default function reactionsReducer(state=initialState, action) {
    switch (action.type) {
        case GET_REACTIONS:
            const listOfReactions = [...state.reactionsList];
            const sameReaction = listOfReactions.find(reaction => reaction._id === action.payload._id);
            const existingIndex = listOfReactions.indexOf(sameReaction)
            if (sameReaction) {
                listOfReactions.splice(existingIndex, 1)
                listOfReactions.push(action.payload);
            } else {
                listOfReactions.push(action.payload);
            }
            
            return {
                ...state,
                reactionsList: listOfReactions
            }
        case ADD_REACTION:
            const setOfReactions = [...state.reactionsList];
            let reaction = setOfReactions.find(reaction => reaction.todoId === action.payload.todoId);
            reaction[action.payload.reaction] += 1;
            return {
                ...state,
                reactionsList: setOfReactions
            } 
        default:
            return state;
    }
}