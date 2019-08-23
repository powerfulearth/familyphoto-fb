const Router = require('koa-router')

const route = new Router()
const jiakaoRoute = new Router()

const getQ4 = require('../controllers/getQuestion4')
const login = require('../controllers/login')
const register = require('../controllers/register')

route.post('/getQ4', getQ4.getQuestion4)
route.post('/login', login.login)
route.post('/register', register.register)


jiakaoRoute.use('/jiakao',route.routes())

module.exports = jiakaoRoute