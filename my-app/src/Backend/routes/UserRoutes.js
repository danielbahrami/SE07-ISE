const express = require("express");
const User = require("../../models/UserModel"); // Adjust the path as necessary
const router = express.Router();

// POST /signup
router.post("/signup", async (req, res) => {
  try {
    // Create a new user instance with all the fields
    const user = new User({
      fullName: req.body.fullName,
      email: req.body.email,
      passwordHash: req.body.password, // Storing password as-is (not recommended for production)
      gender: req.body.gender,
      age: req.body.age,
      occupation: req.body.occupation,
      tidiness: req.body.tidiness,
      pets: req.body.pets,
      searchArea: req.body.searchArea,
      hobbies: req.body.hobbies,
      socialInterests: req.body.socialInterests,
    });

    // Save the user to the database
    const savedUser = await user.save();

    // Respond with the created user data
    res.status(201).json({
      id: savedUser._id,
      fullName: savedUser.fullName,
      email: savedUser.email,
      gender: savedUser.gender,
      age: savedUser.age,
      occupation: savedUser.occupation,
      tidiness: savedUser.tidiness,
      pets: savedUser.pets,
      searchArea: savedUser.searchArea,
      hobbies: savedUser.hobbies,
      socialInterests: savedUser.socialInterests,
      passwordHash: savedUser.passwordHash,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error, "error");
  }
});

module.exports = router;
