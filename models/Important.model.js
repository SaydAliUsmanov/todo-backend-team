const mongoose = require('mongoose');

const importantSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Important = mongoose.model('Important', importantSchema);

module.exports = Important;
