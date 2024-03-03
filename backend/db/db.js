const { MONGODB_URL } = require('../config')
const mongoose = require('mongoose')

mongoose.connect(MONGODB_URL)
    .then((res)=>{
        console.log("MongoDB connected successful! ")
    })
    .catch((err)=>{
        console.log("Error Happend While Connecting to server!")
    })


// Schemas 
const Schema = mongoose.Schema;

// User Schema
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// SocialMediaLink Schema
const socialMediaLinkSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  links: [{
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
      match: [/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/, 'Please fill a valid URL'],
    }
  }],
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create models from schemas
const User = mongoose.model('User', userSchema);
const SocialMediaLink = mongoose.model('SocialMediaLink', socialMediaLinkSchema);

module.exports = { User, SocialMediaLink };

