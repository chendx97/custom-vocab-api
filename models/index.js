const mongoose = require('mongoose');
const { dbTestUrl } = require('../utils/constant');

mongoose.connect(dbTestUrl);

mongoose.connection.once('connected', () => {
  console.log('数据库连接成功！');
});

module.exports = mongoose;
