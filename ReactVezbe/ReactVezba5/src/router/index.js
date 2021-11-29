const express = require('express');
const cors = require('cors');
const { Router } = express;
const auth = require('./auth');
const todos = require('./todos');
const users = require('./users');

const mainRouter = Router();

mainRouter.use(cors({
    credentials: true,
    //preflightContinue: true,
    orgin: 'http://app.test:3000',
}));
mainRouter.use(express.json());
mainRouter.use(auth.path, auth.router);
mainRouter.use(todos.path, todos.router);
mainRouter.use(users.path, users.router);

module.exports = {
    path: '/api',
    router: mainRouter,
};