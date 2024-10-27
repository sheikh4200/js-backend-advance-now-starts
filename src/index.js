import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
  path: '.env',
})

connectDB()
.then(()=>{
  app.on((err)=>{
console.log("Error to run the code",err)
throw err
  })
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is running on port : ${process.env.PORT}`)
  })
})
.catch((err)=>{
console.log("failed To Connect DB !!!")
throw err
})


















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