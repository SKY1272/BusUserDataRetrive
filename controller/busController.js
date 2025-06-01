
const db=require('../utils/db-connection')

const createBus=(req,res)=>{
   const  { name, total_seats, available_seats } = req.body;
  const query="INSERT INTO Buses(name,total_seats,available_seats) VALUES(?,?,?)";
  db.query(query,[name,total_seats,available_seats],(err,result)=>{
    if(err){
      console.log("Insert Error:",err);
      return res.status(500).json({error:"database error"});
    }
    res.status(200).json({message:"bus Added",busId:result.insertId});

  })
}
const getAllBusSeat=(req,res)=>{
const minSeat=parseInt(req.param.seats);
 const sql="SELECT * FROM Buses WHERE available_seats > 10";
 db.query(sql,[minSeat],(err,results)=>{
  if(err){
    console.log("Get Error:",err);
    return res.status(500).json({error:"database error"});
  }
   res.status(200).json(results)
 })
}

module.exports={createBus,getAllBusSeat}