import { create } from "zustand";
import { axiosInstance } from "../axios/axiosInstance";
import toast from "react-hot-toast";

export const userAuthStore = create((set,get) => ({
    user : null,
    loading : false,
    isSideBarOpen : false,


    setisSideBarOpen: () => {
        set((state) => ({ isSideBarOpen: !state.isSideBarOpen }));
    },

    login : async({email,password}) => {
        set({loading : true})
        try {
            const res = await axiosInstance.post('/login',{email,password})
            set({user : res.data.user})
            console.log(res)
            toast.success("Login SuccessFull")
        } catch (error) {
            console.log("error while login",error.message)
        }finally{
            set({loading : false})
        }
    },

    logout : async() => {
        console.log("hi")
        set({loading : true})
        try {
            const res = await axiosInstance.post('/logout')
            set({user : null})
            toast.success("Logout Successfull")
        } catch (error) {
            console.log("error while logout",error.message)
        }finally{
            set({loading : false})
        }
    },

    checkAuth : async() => {
        set({loading : true})
        try {
            const res = await axiosInstance.get("/checkauth")
            set({user : res.data.user})
        } catch (error) {
            toast.error("user is not unauthorized")
            console.log("error while checkauth",error.message)
        }
        finally{
            set({loading : false})
        }
    }
}))