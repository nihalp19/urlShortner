import UrlInfo from "../models/url.models.js";
import User from "../models/user.models.js";
import shortid from "shortid";
import { UAParser } from "ua-parser-js";

export const generateShortUrl = async (req, res) => {
    try {
        const { originalUrl } = req.body
        if (!originalUrl) {
            return res.status(400).json({ message: "url is required" })
        }

        const urlExits = await UrlInfo.findOne({ originalUrl: originalUrl })

        if (urlExits) {
            return res.status(200).json({ message: "url already exits", url: urlExits })
        }

        const shortId = shortid.generate(5)
        const shortUrl = `http://localhost:3000/${shortId}`

        const expiryTimestamp = Date.now() + 7 * 24 * 60 * 60 * 1000;
        const expiryDate = new Date(expiryTimestamp);

        const url = await UrlInfo.create({
            originalUrl,
            shortUrl,
            shortId,
            expirationDate : expiryDate,
            userId: req.user.userId,
            clickInfo: []
        })

        return res.status(200).json({ message: "url is created sucessfully", url: url })

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

export const redirectUrl = async (req, res) => {
    try {
        const shortId  = req.params.id

        if (!shortId) {
            return res.status(400).json({ message: "shortid is required" })
        }

        const url = await UrlInfo.findOne({ shortId: shortId })

        if (!url) {
            return res.status(400).json({ message: "invalid url" })
        }

        if (url.expirationDate < new Date()) {
            return res.status(400).json({ message: "url is expired" })
        }

        setImmediate(async () => {
            const parser = new UAParser(req.headers['user-agent']);
            url.clickInfo.push({
                clickdate: new Date(),
                ip: req.ip,
                browser: parser.getBrowser().name,
                device: parser.getDevice().type || 'desktop'
            });
            await url.save();
        });


        return res.redirect(url.originalUrl)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({message : "Internal Server Error",error : error.message})
    }
}


export const getAllUrls = async(req,res) => {
    console.log("hi")
    try {
        const user = req.user

        const urls = await UrlInfo.find({userId : user.userId})

        return res.status(200).json({message : "all urls are fetched successfully",urls : urls,})
    } catch (error) {
        console.log("error while fetching url",error.message)
        return res.status(500).json({message : "Internal Server Error",error : error.message})
    }
}

export const getUrlInfo = async() => {
    try {
        const id = req.params.id
        if(!id) {
            return res.status(400).json({message : "id is not provided"})
        }

        const url = await UrlInfo.findOne({_id : id})

        if(!url){
            return res.status(200).json({message : "url not found"})
        }

        return res.status(200).json({message : "url is fetched",url : url})
    } catch (error) {
        console.log("error while fetching single url",error.message)
        return res.status(500).json({message : "Internal Server Error",error : error.message})
    }
}