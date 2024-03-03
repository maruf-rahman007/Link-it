const express = require('express')
const router = express.Router()
const zod = require('zod')
const { User } = require('../db/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config')
//  All the routes of user 
const signupBody = zod.object({
    email: zod.string().email().endsWith("@gmail.com"),
	firstName: zod.string(),
	lastName: zod.string(),
	password: zod.string()
})



router.post("/signup", async (req,res)=>{
    const body = req.body
    console.log(body)
    const { success } = signupBody.safeParse(body)
    if (!success) {
        return res.status(411).json({
            message:"Invalid Inputs "
        })
    }else {
        const existingUser = await User.findOne({
            email:body.email
        })

        if (existingUser) {
            res.json({
                message:"User with same emailaddress already exist! "
            })
        } else {
            const username = body.email.split('@')[0]
            const saltRounds = 10
            const hashedPassword = await bcrypt.hash(body.password,saltRounds)
            const newUser = await User.create({
                username:username,
                firstName:body.firstName,
                lastName:body.lastName,
                password:hashedPassword,
                email:body.email
            })
            const userId = newUser._id
            const token = jwt.sign({
                userId
            },JWT_SECRET)
            res.json({
                message:"User Created Successfully!",
                token:token
            })
        }
    }

})

// Login / signin 

const loginSchema = zod.object({
    email: zod.string().email().endsWith('@gmail.com'),
    password: zod.string(),
  });
  
  router.post('/login', async (req, res) => {
    const body = req.body;
    const { success } = loginSchema.safeParse(body);
  
    if (!success) {
      return res.status(411).json({
        message: 'Invalid inputs',
      });
    } else {
      const findUser = await User.findOne({
        email: body.email,
      });
  
      if (findUser) {
        const passwordMatch = await bcrypt.compare(body.password, findUser.password);
  
        if (passwordMatch) {
          const token = jwt.sign({
            userId: findUser._id,
          }, JWT_SECRET);
  
          res.json({
            token: token,
          });
        } else {
          res.status(401).json({
            message: 'Email and password do not match!',
          });
        }
      } else {
        res.status(401).json({
          message: 'User not found!',
        });
      }
    }
});
  



module.exports = router