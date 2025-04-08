import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGODB CONNECTED")
    } catch (error) {
        console.log(error.message)
    }
}