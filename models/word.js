var mongoose = require('./index');

var WordSchema = mongoose.Schema({
  userId: {
    type: String,
    unique: true,
  },
  word: {
    type: String,
    unique: true,
  },
  explain: {
    type: String,
    unique: true,
  },
  createDt: {
    type: Date,
    default: Date.now,
  },
});

var WordModel = mongoose.model('Word', WordSchema);

module.exports = WordModel;
