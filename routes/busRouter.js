const express=require('express');
const router=express.Router();
const busController=require('../controller/busController')

router.get('/available/:seat',busController.getAllBusSeat);
router.post('/',busController.createBus);



module.exports=router;