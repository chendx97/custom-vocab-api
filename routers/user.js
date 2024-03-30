var router = require('./index.js');
var User = require('../models/user');

// 新增用户
router.post('/user/add', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save(); // save
    res.jsonSuccess();
  } catch (error) {
    res.jsonFail(error);
  }
});

// 查询用户
router.get('/user/list', async (req, res) => {
  try {
    const users = await User.find({});
    res.jsonSuccess(users);
  } catch (error) {
    res.jsonFail(error);
  }
});

module.exports = router;
