const express = require('express')
const router = express.Router()
const app = express();
const { User, SocialMediaLink } = require('../db/db');

router.get('/:username', async (req, res) => {
  try {
    let { username } = req.params;
    username = username.slice(1)
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const socialMediaLinks = await SocialMediaLink.find({ userId: user._id });
    
    const linksArray = socialMediaLinks.flatMap(link => link.links);

    res.json({
      name : user.firstName+" "+user.lastName,
      username: user.username,
      socialMediaLinks: linksArray,
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});



module.exports = router