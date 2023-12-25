const express = require('express');
const app = express();
const port =5500
// db connection
const dbconection=require("./db/dbConfig")

// checking our express server wheather it runs right or wrong
// app.get('/', (req,res)=>{
//     res.send("Welcome")
// })




// user routes middleware file
const userRoutes = require('./routes/userRoute')


// user route middleware
app.use("/api/users", userRoutes)

// question routes middleware

// answer routes middleware

async function start() {
    try{
       const result = await dbconection.execute("select 'test'")
       app.listen(port)
       console.log("database connection established")
       console.log(`listening on ${port}`)
    }catch(error){
        console.log(error.message)
    }
}
start()

