import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../lib/generateToken.js"

export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email) {
            console.log("email")
            return res.status(400).json({ message: "email is required" })
        }
        if (!password) {
            console.log("password")
            return res.status(400).json({ message: "password is required" })
        }

        const user = await User.findOne({ email: email })

        if (!user) {
            console.log("hi")
            return res.status(400).json({ message: "invalid credentials" })
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password)
        if (!isPasswordMatched) {
            console.log("Hiii")
            return res.status(400).json({ message: "invalid credentials" })
        }

        const { accessToken } = await generateToken(user.userId, res)

        res.cookie("accessToken", accessToken, {
            maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days in milliseconds
        });

        return res.status(200).json({
            message: "user logined successfull", user: {
                email: user.email,
                userId: user.userId,
                name: user.name
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
        return res.status(200).json({ message: "User is Logout" })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "Internal Server Error", error: error.message })
    }
}


export const checkAuth = async (req, res) => {
    try {
        const user = req.user
        if (!user) {
            return res.status(401).json({ message: "unauthorized" })
        }

        return res.status(200).json({
            message: "user is athorized", user: {
                email: user.email,
                userId: user.userId,
                name: user.name
            }
        })

    } catch (error) {
        console.log("error", error.message)
        return res.status(500).json({ message: "Internal Server Error", error: error.message })
    }
}