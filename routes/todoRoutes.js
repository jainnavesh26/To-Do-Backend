const express = require('express');
const router = express.Router();
const {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    markAsRead
} = require('../controllers/todoController');

router.route('/')
    .get(getTodos)
    .post(createTodo);

router.route('/:id')
    .put(updateTodo)
    .delete(deleteTodo);

router.route('/:id/read')
    .patch(markAsRead);

module.exports = router;
