const express = require('express');
const { Router } = express;
const authMiddleware = require('../../middleware/auth');
const todos = require('../../modules/services/todos');
const todosService = require('../../modules/services/todos')
const { validateKeysExist } = require('../../modules/helpers');
const { sharingActions } = require('../../constants');
const config = require('../../config');


const todosRouter = Router();

todosRouter.use(authMiddleware);

todosRouter.get('/:todoId?', async function(req, res) {
    const { todoId } = req.params;
    if (todoId) {
        const todo = await todosService.findbyId(req.user._id, todoId);
        res.json(todo);
    }
    else {
        const todos = [
            ...(await todosService.findAllByUserId(req.user._id)),
            ...(await todosService.findAllSharedWithUserId(req.user._id))
        ];
        res.json(todos);
    }
})

todosRouter.post('/', async function(req, res) {
    try{
        const todo = req.body;
        console.info('Create todo got: ', todo);
        await todosService.create(req.user._id, todo);
        res.sendStatus(201);
    } catch (e) {
        console.error('Todo not created', e);
        res.sendStatus(400);
    }
})

todosRouter.put('/', async function(req, res) {
    try {
        const todo = req.body;
        await todosService.update(req.user._id, todo);
        res.sendStatus(200);
    } catch (e) {
        console.error('Todo not updated', e);
        res.sendStatus(400);
    }
})

todosRouter.patch('/', async function(req, res) {
    try {
        const patchReqKeys = ['_id', 'field', 'value'];
        validateKeysExist(patchReqKeys, req.body);

        if (field = 'title') {
            await todosService.updateField(req.user._id, _id, field, value);
            res.sendStatus(200);
        } 
        else if (field === 'sharedWith' && Object.values(sharingActions).includes(action)) {
            await todosService.share(req.user._id, _id, value, action);
            res.sendStatus(200);
        } else {
            res.sendStatus(400);
        }
    } catch (e) {
        console.error('Todo not updated', e)
        res.sendStatus(400);
    }
})

todosRouter.delete('/', async function(req, res) {
    try{
        const { id } = req.body;
        const todo = await todosService.findbyId(req.user._id, id)
        console.info('Delete todo got: ', todo);
        if (todo) {
            await todosService.delete(todo._id);
            res.sendStatus(204);
        } else {
            res.sendStatus(404);
        }
        
    }
    catch (e) {
        console.error('Todo not deleted', e);
        res.sendStatus(400);
    }
})

module.exports = {
    path: '/todos',
    router: todosRouter,
};