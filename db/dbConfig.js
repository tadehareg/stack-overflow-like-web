const mysql2 =require("mysql2");
const dbconection =mysql2.createPool({
    user:"evangadi-admin",
    database:"evangadi-admin",
    host:"localhost",
    password:"7A8mOVrUNBmz.GUQ",
    connectionLimit:10
})



// dbconection.execute("select 'test'", (err, result)=>{
//     if (err){
//         console.log(err.message)
//     }else {
//         console.log(result)
//     }
// })

module.exports =dbconection.promise