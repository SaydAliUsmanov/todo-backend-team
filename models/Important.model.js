const mongoose = require('mongoose');

const importantShema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

const Important = mongoose.model('Important', importantShema);

module.exports = Important;
