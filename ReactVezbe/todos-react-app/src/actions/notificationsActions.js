import notificationsService from '../services/notificationsService';
import { ADD_NOTIFICATION, GET_NOTIFICATIONS } from './types';


export function getAllNotifications() {
    return async (dispatch) => {
        try {
            const notificationsList = await notificationsService.getAllNotifications();
            dispatch({
                type: GET_NOTIFICATIONS,
                payload: notificationsList
            })
        } catch (e) {

        }
    }
}

export function addNotification(payload) {
    return async (dispatch) => {
        try {
            await notificationsService.addNotification(payload);
            getAllNotifications() (dispatch);
            /*
            dispatch({
                type: ADD_NOTIFICATION,
                payload: notification
            })
            */
        } catch (e) {

        }
    }
}

export function allNotificationRead() {
    return async (dispatch) => {
        try {
            const notificationsList = await notificationsService.getAllNotifications();
            notificationsList.forEach(async (notification) => {
                notification.read = true;
                await notificationsService.editNotification(notification);
            })
            getAllNotifications() (dispatch);
        } catch (e) {

        }
    }
}