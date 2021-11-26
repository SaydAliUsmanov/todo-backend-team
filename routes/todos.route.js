const { Router } = require('express');

const { todosController } = require('../controllers/todos.controller');

const router = Router();

router.get('/', todosController.getTodos);
router.post('/', todosController.create);
router.delete('/:id', todosController.remove);
router.patch('/:id', todosController.edit);

module.exports = router;
