const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const app = new Koa()

const route = require('./router/index')

app.use(bodyParser())
app.use(route.routes())

app.listen('8888',() => {
  console.log("电子相册服务启动，端口8888");
})