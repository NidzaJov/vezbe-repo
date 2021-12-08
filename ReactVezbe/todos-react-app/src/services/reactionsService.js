const { FetchService } = require('./fetchService');

class ReactionsService {
    async getReaction(todoId) {
        const result = await FetchService.getRequest(`reactions/${todoId}`);
        if (result.ok) {
            return result.json();
        } else {
            return new Error('Getting reaction failed')
        }
    }

    async patchReaction(payload) {
        const result = await FetchService.patchRequest('reactions', payload);
        if (result.status === 204) {
            return true;
        } else {
            return new Error('Patching reaction failed');
        }
    }
} 

export default new ReactionsService()

