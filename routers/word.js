var router = require('./index.js');
var Word = require('../models/word');

// 添加单词
router.post('/word/add', async (req, res) => {
  try {
    const word = new Word(req.body);
    await word.save(); // save
    res.jsonSuccess();
  } catch (error) {
    res.jsonFail(error);
  }
});

// 获取单词
router.get('/word/list', async (req, res) => {
  try {
    const words = await Word.find({});
    res.jsonSuccess(words);
  } catch (error) {
    res.jsonFail(error);
  }
});

module.exports = router;
