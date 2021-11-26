const Important = require('../models/Important.model');

module.exports.importantsController = {
  create: async (req, res) => {
    try {
      const { text } = req.body;
      await Important.create({
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
      await Important.findByIdAndUpdate(req.params.id, {
        text: text,
      });
      res.json('успешно изменено');
    } catch (e) {
      res.json(e);
    }
  },
  remove: async (req, res) => {
    try {
      await Important.findByIdAndRemove(req.params.id);
      res.json('успешно удален');
    } catch (e) {
      res.json(e);
    }
  },
  getImportants: async (req, res) => {
    try {
      const getImportants = await Important.find();
      res.json(getImportants);
    } catch (e) {
      res.json(e);
    }
  },
};
