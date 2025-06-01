const express=require('express');
const app=express();



const userRoutes=require('./routes/userRouter');
const busRoutes=require('./routes/busRouter')



app.use(express.json());

// Request logger middleware BEFORE routes
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});



app.use('/user',userRoutes);
app.use('/bus',busRoutes)


app.listen(3000,()=>{

console.log("server is running port on 3000");
})