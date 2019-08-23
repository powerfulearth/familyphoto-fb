const {query} = require('../models/db')

module.exports = {
  async register(ctx){
    let userInfo = ctx.request.body
    console.log(userInfo.userId);
    let userResult = await query(`insert into userInfo (userId,userPassword) values ( '${userInfo.userId}','${userInfo.userPassword}' ) ` )
    if(userResult!=''){
      ctx.body = JSON.stringify({
        code:'true',
        msg:"注册成功！"
      })
    }else{
      ctx.body = JSON.stringify({
        code:'false',
        msg:"注册失败！"
      })
    }
  }
}