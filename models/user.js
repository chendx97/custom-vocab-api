const mongoose = require('./index');

const userSchema = new mongoose.Schema({
  "email": String,
});

module.exports = userSchema;
