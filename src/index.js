// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"

import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()




/*
( async ()=>{
    try{
       mongoose.connect(`${process.env.MONGODB_URI }/${DB_NAME}`)
       app.on("error", (error)=>{
        console.log("Error: ", error)
        throw error
    })
    app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on port ${process.env.port}`)
    })
    }
   
    catch(error){
      console.log("ERROR: ", error)
      throw error
    }
})()
    */