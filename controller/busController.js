
const db=require('../utils/db-connection')

const createBus=(req,res)=>{
   db.add(req.body,res);
}
const getAllBusSeat=(req,res)=>{
const minSeat=parseInt(req.param.seats);
    db.getAvailable(minSeat,res);
}

module.exports={createBus,getAllBusSeat}