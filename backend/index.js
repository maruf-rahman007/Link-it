const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/user')
const cardRouter = require('./routes/card')
const app = express()
app.use(cors())
app.use(express.json())


app.use("/api/v1",userRouter)
app.use("/api/v1/social-link",cardRouter)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(501).send('Something went wrong!');
    next()
  });
app.listen(3000)