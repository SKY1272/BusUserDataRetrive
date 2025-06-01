const db=require('../utils/db-connection');



const createUser=(req,res)=>{
   const {name,email,password}=req.body;
   const query="INSERT INTO User(name,email,password) VALUES(?,?,?)";
   db.query(query,[name,email,password],(err,result)=>{
         if(err){
          console.log("Insert error:",err);
          res.status(500).json({err:"database error"});
         }
          res.status(200).json({ message: "User added", userId: result.insertId });
   })
}
const getAllUsers=(req,res)=>{
  const sql="SELECT * FROM User";
  db.query(sql,(err,results)=>{
    if(err){
      console.log("Error:",err);
      return res.status(500).json({error:"database error"});

    }
    res.status(200).json(results)
  })
    
}
module.exports={createUser,getAllUsers}