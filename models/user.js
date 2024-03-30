var mongoose = require('./index');

var UserSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  pwd: {
    type: String,
    unique: true,
  },
});

var UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
