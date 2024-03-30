const mongoose = require('mongoose');
const { dbUrl, dbUser, dbPwd } = require('../config');

mongoose.connect(dbUrl, {
  
});

mongoose.connection.once('connected', () => {
  console.log('数据库连接成功！');
});

module.exports = mongoose;
