const mongoose = require('mongoose');

const categoryShema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

const Category = mongoose.model('Category', categoryShema);

module.exports = Category;
