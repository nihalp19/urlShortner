import {create} from "zustand"
import { axiosInstance } from "../axios/axiosInstance"


export const urlStore = create((set,get) => ({
    shortenedUrl : null,
    allUrls : [],
    urlLoading : false,
    

    generateShortUrl : async({originalUrl}) => {
        set({urlLoading : true})
        try {
            const res = await axiosInstance.post("/generate",{originalUrl})
            set({shortenedUrl : res.data.url})
        } catch (error) {
            console.log('error while generating short url',error.message)
        }finally{
            set({urlLoading : false})
        }
    },

    redirectUrl : async() => {
        set({urlLoading : true})
        try {
            await axiosInstance.get("/:id",)
        } catch (error) {
            console.log('error while redirecting short url',error.message)
        }finally{
            set({urlLoading : false})
        }
    }

}))