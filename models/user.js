var mongoose = require('./index');

var UserSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  pwd: {
    type: String,
    required: true,
  },
  createDt: {
    type: Date,
    default: Date.now,
  },
});

var UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
