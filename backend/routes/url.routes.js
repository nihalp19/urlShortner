import express from "express"
import { authentication } from "../middleware/auth.js"
import { generateShortUrl,getUrlInfo,redirectUrl,getAllUrls } from "../controllers/url.controllers.js"

const router = express.Router()


router.post("/generate",authentication,generateShortUrl)
router.get("/:id",redirectUrl)
router.get("/fetch/links",authentication,getAllUrls)
router.get("/links/:id",authentication,getUrlInfo)


export default router
