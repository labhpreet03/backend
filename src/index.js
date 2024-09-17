import dotenv from "dotenv";

import connectDB from "./db/connect.js";

dotenv.config();

connectDB();

// // require('dotenv').config({path: './env'})
// import dotenv from 'dotenv'
// dotenv.config(/*{path:'./env'}*/)
// import mongoose from "mongoose"
// import {DB_NAME} from "./constants.js"
// import express from "express"
// const app = express()

// ;(async ()=>{
//     try{
//      await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`)
//     console.log(`mongoose connect successfully`)
//     app.on("error",(err)=>{
//         console.log("ERR",err);
//         throw err
//     })
//     app.listen(process.env.PORT,()=>{
//         console.log(`App is listening on port ${process.env.PORT}`)
//     })
//     }
//     catch(err){
//      console.error("ERROR: ",err)
//      throw err
//     }
// })()
