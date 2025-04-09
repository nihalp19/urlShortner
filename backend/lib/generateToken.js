import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()


export async function generateToken (userId,res){
    const accessToken = jwt.sign({userId},process.env.SECRET_KEY,{
        expiresIn : '3d'
    })

    res.cookie("accessToken",accessToken)
}