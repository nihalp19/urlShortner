import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import User from "../models/user.models.js"

dotenv.config()

export async function authentication (req,res,next){
    try {
        const token = req.cookies.accessToken

        if(!token){
            res.status(400).json({message : "User is unauthorized"})
        }

        const decoded = jwt.verify(token,process.env.SECRET_KEY)
        const user = await User.findOne({userId : decoded.userId})

        if(!user){
            return res.status(400).json({message : "user is unauthorized"})
        }

        req.user = user

        next()

    } catch (error) {
        console.log("error authetication :",error.message)        
    }
}