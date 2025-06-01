const express=require('express');
const app=express();



const userRoutes=require('./routes/userRouter');
const busRoutes=require('./routes/busRouter')



app.get('/',(req,res)=>{
  res.send("Hello from BusUser");
})


app.use(express.json());


app.use('/user',userRoutes);
app.use('/bus',busRoutes)


app.listen(4000,()=>{
console.log("server is running port on 3000");
})