const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/user')
const app = express()
app.use(cors())
app.use(express.json())


app.use("/api/v1",userRouter)


app.listen(3000)