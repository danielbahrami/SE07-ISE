const mongoose = require('mongoose');

// Define the schema for the user profile
const userProfileSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // This will ensure that each email is unique in the database
  },
  occupation: {
    type: String,
    required: false
  },
  tidiness: {
    type: String,
    required: false
  },
  pets: {
    type: String,
    required: false
  },
  searchArea: {
    type: String,
    required: false
  },
  hobbies: {
    type: [String], // An array of strings
    required: false
  },
  socialInterests: {
    type: [String], // An array of strings
    required: false
  }
}, {
  timestamps: true // Automatically manage createdAt and updatedAt properties
});

// Create the model from the schema
const UserProfile = mongoose.model('UserProfile', userProfileSchema);

module.exports = UserProfile;
