import mongoose from "mongoose";


const UrlInfoSchema = new mongoose.Schema({
    userId : {
        type : String,
        required : true
    },
    originalUrl: {
        type : String,
        required : true,
    },
    shortId : {
        type : String,
    },
    shortUrl : {
        type : String,
        required : true
    },
    expirationDate : {
        type : Date,
        required : true
    },
    clickInfo : [
        {
            clickdate : {
                type : Date
            },
            device : {
                type : String,
            },
            ip : {
                type : String,
            },
            browser : {
                type : String
            }
        }
    ]
},{timestamps : true})

const UrlInfo = mongoose.model("urls",UrlInfoSchema)

export default UrlInfo