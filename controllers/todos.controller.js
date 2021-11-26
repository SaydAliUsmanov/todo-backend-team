const Todo = require('../models/Todo.model');

module.exports.todosController = {
  create: async (req, res) => {
    try {
      const { title, text, category, important } = req.body;
      await Todo.create({
        title: title,
        text: text,
        category: category,
        important: important,
      });
      res.json('Todo Успешно добавлен');
    } catch (e) {
      res.json(e);
    }
  },
  edit: async (req, res) => {
    try {
      const { title, text, category, important } = req.body;
      await Todo.findByIdAndUpdate(req.params.id, {
        title: title,
        text: text,
        category: category,
        important: important,
      });
      res.json('Todo лист успешно изменён');
    } catch (e) {
      res.json(e);
    }
  },
  remove: async (req, res) => {
    try {
      await Todo.findByIdAndRemove(req.params.id);
      res.json('Todo лист успешно удален');
    } catch (e) {
      res.json(e);
    }
  },
  getTodos: async (req, res) => {
    try {
      const getTodos = await Todo.find();
      res.json(getTodos);
    } catch (e) {
      res.json(e);
    }
  },
};
