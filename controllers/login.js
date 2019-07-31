const {query} = require('../models/db')

module.exports = {
  async login(ctx){
    let userInfo = ctx.request.body
    console.log(userInfo.openId);
    let userResult = await query(`select * from userInfo where openId='${userInfo.openId}'`)
    if(userResult!=''){
      ctx.body = JSON.stringify({
        code:'true'
      })
    }else{
      ctx.body = JSON.stringify({
        code:'false'
      })
    }
  }
}