const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { port } = require('./utils/constant');

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());

// 添加路由
app.use('/api', require('./routers/user'));

app.listen(port, () => {
  console.log(`the app is running on http://localhost:${port}`);
});
