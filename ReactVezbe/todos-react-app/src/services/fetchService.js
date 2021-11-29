const { config } = require("../config");

class FetchService {
    static async postRequest(url, payload) {
        return await fetch(`${config.API_URL}/${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
            credentials: 'include'
        });
    }

    static async getRequest(url) {
        return await fetch(`${config.API_URL}/${url}`, {
            method: 'GET',
            credentials: 'include'
        })
    }

    static async putRequest(url, payload) {
        return await fetch(`${config.API_URL}/${url}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
            credentials: 'include'
        })
    }

    static async deleteRequest(url, payload) {
        return await fetch(`${config.API_URL}/${url}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
            credentials: 'include'
        })
    }

    static async patchRequest(url, payload) {
        return await fetch(`${config.API_URL}/${url}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ _id:payload._id, field: payload.field, value: payload.value, action: payload.action}),
            credentials: 'include'
        })
    }
}

export { FetchService };