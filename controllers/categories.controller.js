const Category = require('../models/Category.model');

module.exports.categoriesController = {
  create: async (req, res) => {
    try {
      const { text } = req.body;
      await Category.create({
        text: text,
      });
      res.json('Успешно добавлен');
    } catch (e) {
      res.json(e);
    }
  },
  edit: async (req, res) => {
    try {
      const { text } = req.body;
      await Category.findByIdAndUpdate(req.params.id, {
        text: text,
      });
      res.json('успешно изменено');
    } catch (e) {
      res.json(e);
    }
  },
  remove: async (req, res) => {
    try {
      await Category.findByIdAndRemove(req.params.id);
      res.json('успешно удален');
    } catch (e) {
      res.json(e);
    }
  },
  getCategories: async (req, res) => {
    try {
      const getCategories = await Category.find();
      res.json(getCategories);
    } catch (e) {
      res.json(e);
    }
  },
};
