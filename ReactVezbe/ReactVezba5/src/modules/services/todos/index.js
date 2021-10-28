const { OnjectID } = require('mongodb');
const { validateKeysExists } = require("../../helpers");
const { DB } = require('../../database');
const { todosCollection } = require('../../../constants');
const { ObjectID } = require('bson');

const todoRequiredKeys = ['owner', 'title', 'items', 'sharedWith', 'lastModified'];
const todoItemRequiredKeys = ['done', 'text']

class TodosService {
    static get collection() {
        return DB.collection(todosCollection);
    }

    validateTodoObject(todo) {
        validateKeysExists(todoRequiredKeys, todo);
        for (const item of todo.items) {
            validateKeysExists(todoItemRequiredKeys, item);
        }
    }

    getDefaultTodoObject() {
        return {
            lastModified: new Date(),
            sharedWith: [],
            items: [],
        }
    }

    async create(ownerId, todoObj) {
        const todoDoc = {
            ...this.getDefaultTodoFields(),
            ...todoObj,
            owner: new ObjectID(ownerId)
        };
        this.validateTodoObject(todoDoc); 
        await TodosService.collection.insertOne(todoDoc);
        
    }

    async update() {}
    async updateField() {}
    async share() {}
    async delete() {}

    async findbyId() {}
    async finfAllByUserId() {}
    async findAllSharedWithUserId() {}
}

module.exports = new TodosService();
