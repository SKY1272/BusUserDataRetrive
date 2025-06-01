const mysql=require('mysql2');
const connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'Shiv@1272',
  database:'dbBus'
})
connection.connect((err)=>{
  if(err){
    console.log("error founded",err);
    return;
  }
  console.log("mysql2 connected");
});
module.exports=connection;