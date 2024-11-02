import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

//app.use method is mostly used for middlewares and configurations
app.use(cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
}))

app.use(express.json({limit:"50kb"}))
//if you just write this code like this 
//app.use(express.urlencoded())//its good 
//mostly used
app.use(express.urlencoded({extended:true, limit:"50kb"}))
app.use(express.static("public"))
app.use(cookieParser())


export {app}