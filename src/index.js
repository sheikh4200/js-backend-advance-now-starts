import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
  path: './.env',
})

connectDB()



















/*
// a approach of many developers is
import {express} from "express"
const app = express()
//ifi function is better choice then a simple function
(async ()=>{
    //always use try catch method to connect database
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

        app.on("error",(error)=>{
          console.log("ERROR", error) 
          throw err      
        })
        app.listen(process.env.PORT,()=>{
            console.log(`your port is ready ${process.env.PORT}`)
        })
}catch(error){
console.log("error to connect db")
throw err
} 
})()
*/