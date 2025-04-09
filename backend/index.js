import express from "express"
import { connectDB } from "./lib/connectDB.js"
import cookieParser from "cookie-parser" 
import dotenv from "dotenv"
import userRoutes from "./routes/user.routes.js"
import urlRoutes from "./routes/url.routes.js"
dotenv.config()



const PORT = 3000

const app = express()

app.use(express.json({limit : "100mb"}))
app.use(cookieParser())


app.use("/",userRoutes)
app.use("/",urlRoutes)

app.all("/",async(req,res) =>  {
    res.send("BACKEND IS RUNNING")
})




app.listen(PORT,() => {
    connectDB()
    console.log(`SERVER STARTED ON PORT ${PORT}`)
})