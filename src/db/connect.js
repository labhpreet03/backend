import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"



const connectDB = async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`)
            console.log(`mongoose connect successfully !! DB Host: ${connectionInstance.connection.host}`)
             
             

    }
    catch(err){
console.log("MONGODB CONNECTION ERR",err)
process.exit();
    }
}

export default connectDB