import {create} from "zustand"
import { axiosInstance } from "../axios/axiosInstance"


export const urlStore = create((set,get) => ({
    shortenedUrl : null,
    allUrls : null,
    urlLoading : false,
    analyticalUrl : null,
    chartData : null,


    
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
    },

    getAllUrls : async() => {
        set({urlLoading : true})
        try {
            const res = await axiosInstance.get("/fetch/links")
            set({allUrls : res.data.urls})
        } catch (error) {
            console.log("error while fetching all urls",error.message)
        }finally{
            set({urlLoading : false})
        }
    },

    getUrl : async(id) => {
        set({urlLoading : true})
        try {
            const res = await axiosInstance.get(`/links/${id}`)
            set({analyticalUrl : res.data.url})
            console.log("hiii",res.data.chartData)
            set({chartData : res.data.chartData})
        } catch (error) {
            console.log("error while fetching error",error.messafe)
        }finally{
            set({urlLoading : false})
        }
    }
 
}))