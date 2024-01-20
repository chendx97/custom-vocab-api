# node-template
这是一个关于node项目的模板，使用这个模板你可以很方便的用node来写接口。
# 技术
- nodemon
- express
- mongoose
# 使用
```bash
git clone https://github.com/chendx97/node-template.git
cd node-template
npm i
npm run start
```
`utils/constant`中的配置需要修改为你项目的配置。
# 引入dist
```js
var history = require('connect-history-api-fallback');
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(history());
app.use(express.static('dist'));
```
# 引入dist & 添加代理
```js
var history = require('connect-history-api-fallback');
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(history({
  rewrites: [
    {
      from: /^\/(myapi)\/.*$/,
      to: function (context) {
        return context.parsedUrl.path
      }
    }
  ]
}));
app.use(express.static('dist'));
app.use('/myapi', createProxyMiddleware({
  target: 'http://x.x.x.x:x',
  pathRewrite: (path) => path.replace("/myapi/", "/"),
}));
```