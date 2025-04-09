import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()


export async function generateToken(userId) {
    try {
        const accessToken = jwt.sign({ userId }, process.env.SECRET_KEY, {
            expiresIn: '3d'
        })

        return {accessToken}
    } catch (error) {
        console.log("error while generating token", error.message)
    }
}