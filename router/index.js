const Router = require('koa-router')

const login = require('../controllers/login')

const route = new Router()

route.post('/register',login.login)

module.exports= route