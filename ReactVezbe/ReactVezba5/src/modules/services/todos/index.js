const { ObjectID } = require('mongodb');
const { validateKeysExists } = require("../../helpers");
const { DB } = require('../../database');
const { todosCollection } = require('../../../constants');

const todoRequiredKeys = ['owner', 'title', 'items', 'sharedWith', 'lastModified'];
const todoItemRequiredKeys = ['done', 'text']

class TodosService {
    static get collection() {
        return DB.collection(todosCollection);
    }

    validateTodoObject(todo, existing = false) {
        validateKeysExists([
            ...(existing ? ['_id'] : []),
            ...todoRequiredKeys
        ], todo);
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

    async update(ownerId, todo) {
        this.validateTodoObject(todo, true);
        const { _id } = todo;
        delete todo._id;
        delete todo.owner;

        return await TodosService.collection.updateOne({
            _id: new ObjectID(_id),
            owner: new ObjectID(ownerId)
        }, {
            $set: {...todo, lastModified: new Date() }
        });
    }
    async updateField() {}
    async share() {}
    async delete() {}

    async findbyId(ownerId, todoId) {
        return await TodosService.collection.findOne({
            _id: new ObjectID(todoId),
            owner: new ObjectID(ownerId),
        });
    }
    async findAllByUserId(ownerId) {
        return await TodosService.collection
            .find({owner: new ObjectID(ownerId)})
            .toArray()
    }
    async findAllSharedWithUserId(userId) {
        return await TodosService.collection
        .find({ sharedWith: { $in: [new ObjectId(userId)] }})
        .toArray();
    }
}

module.exports = new TodosService();
