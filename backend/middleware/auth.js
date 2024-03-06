const { JWT_SECRET } = require("../config")
const jwt = require("jsonwebtoken")

function userMiddleware(req,res,next) {
    const token = req.headers.authorization
    console.log(token)
    const words = token.split(" ")
    const jwtToken = words[1]
    const decodeValue = jwt.verify(jwtToken,JWT_SECRET)
    console.log(decodeValue)
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