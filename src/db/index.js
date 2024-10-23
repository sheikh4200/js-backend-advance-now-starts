import mongoose from 'mongoose';
import {DB_NAME} from "../constants.js"

const connectDB = async ()=>{
    // we always used try catch method
    try{
const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
console.log(`mongoDB connected !! host_port : ${connectionInstance.connection.host} `)
}
    catch(error){
console.log("MongoDB connecting error", error)
process.exit(1)
    }
}

export default connectDB