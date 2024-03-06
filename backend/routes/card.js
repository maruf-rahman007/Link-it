const express = require('express')
const router = express.Router()
const app = express();
const { User, SocialMediaLink } = require('../db/db');

router.get('/:username', async (req, res) => {
  try {
    let { username } = req.params;
    username = username.slice(1)
    const user = await User.findOne({ username });
    console.log(username)
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const socialMediaLinks = await SocialMediaLink.find({ userId: user._id });
    res.json({
      username: user.username,
      socialMediaLinks,
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router