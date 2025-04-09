import express from "express"
import { authentication } from "../middleware/auth.js"
import { generateShortUrl,redirectUrl } from "../controllers/url.controllers.js"

const router = express.Router()


router.post("/generate",authentication,generateShortUrl)
router.get("/:id",authentication,redirectUrl)


export default router
