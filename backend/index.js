import express from "express"
import { connectDB } from "./lib/connectDB.js"
import cookieParser from "cookie-parser" 
import dotenv from "dotenv"
dotenv.config()


const PORT = 3000

const app = express()

app.use(express.json({limit : "100mb"}))
app.use(cookieParser())

app.all("/",async(req,res) =>  {
    res.send("BACKEND IS RUNNING")
})


app.listen(PORT,() => {
    connectDB()
    console.log(`SERVER STARTED ON PORT ${PORT}`)
})