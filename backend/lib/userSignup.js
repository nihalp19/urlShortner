import User from "../models/user.models";
import bcrypt from "bcryptjs"

export async function signup (email,password,userId){
    try {
        
        if(!email || !password || !userId)
        {
            console.log("missing fields")
        }

        const userExists = User.findOne({email : email})

        if(userExists){
            console.log("user already exits")
            return
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const userCount = await User.find({})
        const user = await User.create({
            email,
            password : hashedPassword,
            userId : userCount.length
        })

    

    } catch (error) {
        console.log(error.message)
    }

}
