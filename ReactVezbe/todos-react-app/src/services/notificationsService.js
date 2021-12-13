const { FetchService } = require('./fetchService');

class NotificationsService {
    async getAllNotifications() {
        const result = await FetchService.getRequest('notifications');
        if (result.ok) {
            return result.json();
        } else {
            throw new Error('Fetching notifications failed')
        }
    }

    async addNotification(payload) {
        const result = await FetchService.postRequest('notifications', payload);
        if (result.status === 201) {
            return true;
        } else {
            throw new Error('Create notification failed')
        }
    }

    async editNotification(payload) {
        const result = await FetchService.putRequest('notifications', payload);
        if (result.status === 204) {
            return true;
        } else {
            throw new Error('Edit notification failed');
        }
    }
}

export default new NotificationsService();