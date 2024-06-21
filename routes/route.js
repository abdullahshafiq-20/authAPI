import express from 'express'
import {signup, getAll, signin, verifyOTP} from '../controllers/auth.js'
const router = express.Router()


router.post("/signup", signup)
router.get("/getAll", getAll)
router.post("/signin", signin)
router.post("/verifyOTP", verifyOTP)


router.get("/", (req, res) => {
    res.json({
        message: "HELLO WORLD"
    })

})

export default router