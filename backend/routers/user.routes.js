import express from "express"
import {authentication} from "../middleware/auth.js"
const router = express.Router()

router.post("/login",login)
router.post("/logout",logout)
router.get("/checkauth",authentication,checkAuth)

export default router