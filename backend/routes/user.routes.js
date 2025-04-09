import express from "express"
import {authentication} from "../middleware/auth.js"
import {logout,login,checkAuth} from "../controllers/user.controllers.js"
const router = express.Router()

router.post("/login",login)
router.post("/logout",logout)
router.get("/checkauth",authentication,checkAuth)

export default router