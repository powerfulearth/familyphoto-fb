const axios = require('axios')

module.exports = {
  async getQuestion4(ctx){
    await axios.post('http://47.101.222.162:8080/lastversion/selectQuestion4ForExam')
    .then((response) => {
      ctx.body = JSON.stringify(response.data)
    })
  }
}