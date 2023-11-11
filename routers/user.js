var router = require('./index.js');
var User = require('../models/user');

// 新增项目
router.post('/user/add', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save(); // save
    res.jsonSuccess();
  } catch (error) {
    res.jsonFail(error);
  }
});

module.exports = router;
