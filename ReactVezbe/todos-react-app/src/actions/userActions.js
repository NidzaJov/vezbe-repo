import { GET_ALL_USERS } from "./types";
import usersService from "../services/usersService";

export function getAllUsers() {
    return async (dispatch) => {
        try {
            const usersList = await usersService.getAllUsers();
            console.log(usersList);
            dispatch({
                type: GET_ALL_USERS,
                payload: usersList
            })
        } catch (e) {

        }
    }
}

