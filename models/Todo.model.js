const mongoose = require('mongoose');

const todoShema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Category',
  },
  important: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Important'
  }
});

const Todo = mongoose.model('Todo', todoShema);

module.exports = Todo;
