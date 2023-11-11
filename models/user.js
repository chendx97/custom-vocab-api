var mongoose = require('./index');

var UserSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
});

var UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
