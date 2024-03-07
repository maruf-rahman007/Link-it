const express = require('express')
const router = express.Router()
const zod = require('zod')
const { User, SocialMediaLink } = require('../db/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config')
const { userMiddleware } = require("../middleware/auth")
//  All the routes of user 
const signupBody = zod.object({
  email: zod.string().email().endsWith("@gmail.com"),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string()
})



router.post("/signup", async (req, res) => {
  const body = req.body
  console.log(body)
  const { success } = signupBody.safeParse(body)
  if (!success) {
    return res.status(411).json({
      message: "Invalid Inputs "
    })
  } else {
    const existingUser = await User.findOne({
      email: body.email
    })

    if (existingUser) {
      res.json({
        message: "User with same emailaddress already exist! "
      })
    } else {
      const username = body.email.split('@')[0]
      const saltRounds = 10
      const hashedPassword = await bcrypt.hash(body.password, saltRounds)
      const newUser = await User.create({
        username: username,
        firstName: body.firstName,
        lastName: body.lastName,
        password: hashedPassword,
        email: body.email
      })
      const userId = newUser._id
      const token = jwt.sign({
        userId
      }, JWT_SECRET)
      res.json({
        message: "User Created Successfully!",
        token: token
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


// Form data input 

const formBody = zod.object({
  platformName: zod.string(),
  platformLink: zod.string()
})


router.post("/form", userMiddleware, async (req, res) => {
  const body = req.body
  const { success } = formBody.safeParse(body)
  if (!success) {
    return res.status(411).json({
      message: "Invalid Inputs "
    })
  }

  try {
    const user = req.userId
    const socialMediaLinks = {
      name: body.platformName,
      url: body.platformLink
    }
    const socialMediaLink = await SocialMediaLink.create({
      userId: user,
      links: socialMediaLinks
    })
    res.json({
      message: socialMediaLink
    })
  } catch (error) {
    console.log(error)
    res.json({
      message: "Internal Server Error Try again"
    })
  }
})

router.get("/auth", userMiddleware, async (req, res) => {
  
  try {
    const userId = req.userId;
    const userInfo = await User.findOne({
      _id:userId
    });

    if (!userInfo) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({
      success: true,
      user: {
        userId: userInfo.userId,
        username: userInfo.username,
        email: userInfo.email,
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error. Please try again."
    });
  }
});

module.exports = router