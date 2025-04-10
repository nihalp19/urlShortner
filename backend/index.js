import express from "express"
import { connectDB } from "./lib/connectDB.js"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import userRoutes from "./routes/user.routes.js"
import urlRoutes from "./routes/url.routes.js"
import { signup } from "./lib/userSignup.js"
import cors from "cors"
dotenv.config()


const PORT = 3000

const app = express()

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json({ limit: "100mb" }))
app.use(cookieParser())


app.use("/", userRoutes)
app.use("/", urlRoutes)

app.all("/", async (req, res) => {
    res.send("BACKEND IS RUNNING")
})

// signup("dacoid","test123@gmail.com","test123")

app.listen(PORT, () => {
    connectDB()
    console.log(`SERVER STARTED ON PORT ${PORT}`)
})