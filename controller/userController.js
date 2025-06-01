const db=require('../utils/db-connection');



const createUser=(req,res)=>{
   db.add(req.body,res);
}
const getAllUsers=(req,res)=>{
    db.getAll(res);
}
module.exports={createUser,getAllUsers}