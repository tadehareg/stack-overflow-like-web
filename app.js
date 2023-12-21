const express = require('express');
const app = express();
const port =5500

// checking our express server wheather it runs right or wrong
// app.get('/', (req,res)=>{
//     res.send("Welcome")
// })




// user routes middleware file
const userRoutes = require('./routes/userRoute')
app.use("/api/users",userRoutes)





app.listen(port, (err)=>{
    if (err){
        console.log(err.message)
        
    }else{console.log(`listening on ${port}`);}
})
