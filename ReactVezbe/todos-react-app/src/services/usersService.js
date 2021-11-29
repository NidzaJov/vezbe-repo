const { FetchService } = require('./fetchService');

class UsersService {
    async getAllUsers() {
        const result = await FetchService.getRequest('users');
        if (result.ok) {
            return await result.json();
        }
        else {
            throw new Error('Fetching users failed')
        }
    }

    async addUser(payload) {
        const result = await FetchService.postRequest('users', payload);

        if (result.status === 201) {
            return true
        }
        else {
            throw new Error('Adding user failed')
        }
    }

    async deleteUser(payload) {
        const result = await FetchService.deleteRequest('users', payload);

        if (result.status === 204) {
            return true;
        }
        else {
            throw new Error('Deleting user failed')
        }
    }

    async patchUser(payload) {
        const result = await FetchService.patchRequest('users', payload);

        if (result.status === 204) {
            return true;
        }
        else {
            throw new Error('Patching user failed')
        }
    }

    async putUser(payload) {
        const result = await FetchService.putRequest('users', payload);

        if (result.ok) {
            return true;
        }
        else {
            throw new Error('Put user failed')
        }
    }
} 

export default new UsersService();