const { JWT_SECRET } = require("../config")
const jwt = require("jsonwebtoken")

function userMiddleware(req,res,next) {
    const token = req.headers.authorization
    const words = token.split(" ")
    const jwtToken = words[1]
    const decodeValue = jwt.verify(jwtToken,JWT_SECRET)
    if(decodeValue.userId) {
        req.userId = decodeValue.userId
        next()
    } else {
        res.status(403).json({
            message:"Unauthorized Access!"
        })
    }
}

module.exports = {
    userMiddleware
}