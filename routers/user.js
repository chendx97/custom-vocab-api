const cyrto = require('crypto');
const router = require('./index.js');
const User = require('../models/user');

// 新增用户
router.post('/user/add', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.writeHead(200, {
      'set-cookie': `custom-vocab=${cyrto.randomBytes(16).toString('hex')};path=/`,
    });
    res.end(JSON.stringify({
      code: 200,
      message: 'success',
    }))
  } catch (error) {
    if (error.toString().includes('duplicate key error')) {
      res.jsonSuccess('已有相同用户名');
    } else {
      res.jsonFail(error);
    }
  }
});

// 登录
router.post('/user/login', async (req, res) => {
  try {
    const user = await User.findOne({ name: req.body.name, pwd: req.body.pwd });
    if (user) {
      res.writeHead(200, {
        'set-cookie': `custom-vocab=${cyrto.randomBytes(16).toString('hex')};path=/`,
      });
      res.end(JSON.stringify({
        code: 200,
        message: 'success',
      }))
    } else {
      res.jsonSuccess('用户名或密码错误');
    }
  } catch (error) {
    res.jsonFail(error);
  }
});

module.exports = router;
