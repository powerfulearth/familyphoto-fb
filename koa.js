const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')

const app = new Koa()

const route = require('./router/index')
const JiaKoaRoute = require('./1_JiaKaoBaoDian/routers/index')


app.use(bodyParser())
app.use(cors({
  origin:function(ctx){
    return '*'
  }
}))
app.use(route.routes())
app.use(JiaKoaRoute.routes())

app.listen('8888',() => {
  console.log("电子相册服务启动，端口8888");
})