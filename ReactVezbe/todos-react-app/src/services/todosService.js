const { FetchService } = require("./fetchService");

class TodosService {
    async getAllTodos() {
        const result = await FetchService.getRequest('todos');
        if (result.ok) {
            return await result.json();
        } 
        else {
            throw new Error('Fetching todos failed')
        }
    }

    async addTodo(payload) {
        const result = await FetchService.postRequest('todos', { title: payload })
        if (result.status === 201) {
            return true;
        }
        else {
            throw new Error('Creating todo failed');
        }
    }

    async deleteTodo(payload) {
        const result = await FetchService.deleteRequest('todos', { id: payload });

        if (result.status === 204) {
            return true;
        }
        else {
            throw new Error('Deleting todo failed');
        }
    }

    async patchTodo(payload) {
        const result = await FetchService.patchRequest('todos', payload);

        if (result.status === 204) {
            return true;
        }
        else {
            throw new Error('Patching todo failed');
        }
    }

    async putTodo(payload) {
        console.log("Todos service got payload", payload);
        const result = await FetchService.putRequest('todos', payload);

        if (result.ok) {
            return true;
        }
        else {
            throw new Error('Put todo failed');
        }
    }
}

export default new TodosService();