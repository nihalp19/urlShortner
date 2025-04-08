import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    userId : {
        type : String,
    },
})

const User = mongoose.model('Users',userSchema)

export default User
