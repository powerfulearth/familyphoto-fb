const mysql = require('mysql')

const mysqlPool = mysql.createPool({
  host:'47.102.110.15',
  user:'root',
  password:'666666',
  database:'familyphoto'
})

let query = function(sql,values){
  return new Promise((resolve,reject) => {
    mysqlPool.getConnection(function(err,connection){
      if(err) reject(err)
      else{
        connection.query(sql,values,(err,rows) => {
          if(err) reject(err)
          else resolve(rows)
          connection.release()
        })
      }
    })
  })
}

module.exports = {
  query
}