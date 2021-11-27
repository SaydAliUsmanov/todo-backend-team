const mongoose = require('mongoose');

const todoSchema = mongoose.Schema(
  {
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
      default: '61a0e604b6a8fecf29a10cb3'
    },
    important: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Important',
    },
  },
  { timestamps: true }
);

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
