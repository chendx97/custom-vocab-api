const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { port } = require('./config');

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());

// 添加路由
app.use('/vapi', require('./routers/user'));

app.listen(port, () => {
  console.log(`the app is running on http://localhost:${port}`);
});
