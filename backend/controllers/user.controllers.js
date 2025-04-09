import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import {generateToken} from "../lib/generateToken.js"

export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email) {
            res.status(400).json({ message: " email is required" })
        }
        if (!password) {
            res.status(400).json({ message: " password is required" })
        }

        const user = await User.findOne({ email: email })

        if (!user) {
            res.status(400).json({ message: "invalid credentials" })
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password)
        if (!isPasswordMatched) {
            console.log("Hi")
            res.status(400).json({ message: "invalid credentials" })
        }

        generateToken(user.userId, res)

        res.status(200).json({
            message: "user logined successfull", user: {
                email: user.email,
                userId: user.userId
            }
        })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "Internal Server Errror", error: error.message })
    }
}


export const logout = async (req, res) => {
    try {
            res.clearCookie("accessToken")
            res.status(200).json({ message: "User is Logout" })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "Internal Server Error", error: error.message })
    }
}


export const checkAuth = async (req, res) => {
    try {
        const { user } = req.body
        if (!user) {
            return res.status(401).json({ message: "unauthorized" })
        }

        return res.status(200).json({
            message: "user is athorized", user: {
                email: user.email,
                userId: user.userId
            }
        })

    } catch (error) {
        console.log("error",error.message)
        return res.status(500).json({message : "Internal Server Error",error: error.message})
    }
}