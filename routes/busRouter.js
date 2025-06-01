const express=require('express');
const router=express.Router();
const busController=require('../controller/busController')

router.get('/',busController.getAllBusSeat);
router.post('/availabe/:seat',busController.createBus);



module.exports=router;