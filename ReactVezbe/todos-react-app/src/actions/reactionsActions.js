import { GET_REACTIONS } from "./types";
import reactionsService from "../services/reactionsService";

export function getReaction(todoId) {
    return async dispatch => {
        try {
            const reaction = await reactionsService.getReaction(todoId);
            dispatch({
                type: GET_REACTIONS,
                payload: reaction
            })
        } catch (e) {
            console.log(e);
        }
    }
}

export function addReaction(payload) {
    return async dispatch => {
        try {
            await reactionsService.patchReaction({ _id: payload.todoId, field: 'reactions', value: payload.reaction});
            getReaction(payload.todoId) (dispatch);
            /*
            dispatch ({
                type: ADD_REACTION,
                payload: payload
            })
            */
        }
        catch (e) {
            console.log('Error during addReaction: ', e)
        }
    }
}