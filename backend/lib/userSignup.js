import User from "../models/user.models.js";
import bcrypt from "bcryptjs"

export async function signup (name,email,password){
    try {
        
        if(!name || !email || !password )
        {
            console.log("missing fields")
        }

        const userExists = await User.findOne({email : email})

        if(userExists){
            console.log("user already exits")
            return
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const userCount = await User.find({})
        await User.create({
            name,
            email,
            password : hashedPassword,
            userId : userCount.length + 1
        })

    } catch (error) {
        console.log(error.message)
    }

}
