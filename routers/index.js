const express = require('express');
const router = express.Router();
const { cookieName } = require('../config');

// 登录拦截校验
router.use((req, res, next) => {
  const cookie = req.cookies[cookieName];
  if (!cookie && !['/user/login', '/user/add'].includes(req.path)) {
    res.json({
      code: 403,
      message: '未登录',
    });
  }
  next();
});

// 格式化返回值
router.use((req, res, next) => {
  res.jsonSuccess = (message, data) => {
    res.json({
      code: 200,
      message,
      result: data,
    });
  };
  res.jsonFail = (message) => {
    res.json({
      code: 500,
      message: message.message || message || '服务器出了点问题',
    });
  };
  next();
});

module.exports = router;
