const express = require("express");
const User = require("../../models/UserModel"); // Adjust the path as necessary
const router = express.Router();
const bcrypt = require("bcryptjs");

// POST /signup
router.post("/signup", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // Create a new user instance with all the fields
    const user = new User({
      fullName: req.body.fullName,
      email: req.body.email,
      passwordHash: hashedPassword, // Storing password as-is (not recommended for production)
      gender: req.body.gender,
      age: req.body.age,
      occupation: req.body.occupation,
      tidiness: req.body.tidiness,
      pets: req.body.pets,
      searchArea: req.body.searchArea,
      hobbies: req.body.hobbies.split(","), // Assuming hobbies are submitted as a comma-separated string
      socialInterests: req.body.socialInterests.split(","), // Same assumption as above
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

// In userRoutes.js or similar
router.patch("/user/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const updateData = {
      // Only include fields that are allowed to be updated
      occupation: req.body.occupation,
      tidiness: req.body.tidiness,
      pets: req.body.pets,
      searchArea: req.body.searchArea,
      hobbies: req.body.hobbies,
      socialInterests: req.body.socialInterests,
    };

    const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    }).select("-passwordHash");
    if (!updatedUser) {
      return res.status(404).send("User not found");
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Example login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // Authenticate user (you'll need to implement this logic based on your user model)
    const user = await User.findOne({ email });

    if (user && bcrypt.compareSync(password, user.passwordHash)) {
      // Replace with proper password checking
      res.json({
        userId: user._id,
        name: user.fullName,
        email: user.email,
        age: user.age,
        gender: user.gender,
        hobbies: user.hobbies,
        occupation: user.occupation,
        pets: user.pets,
        searchArea: user.searchArea,
        socialInterests: user.socialInterests,
        tidiness: user.tidiness,
      });
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (error) {
    res.status(500).send("Error processing request");
  }
});

router.get("/some-protected-route", (req, res) => {
  if (!req.session.userId) {
    return res.status(401).send("Unauthorized");
  }

  // User is logged in, handle the request
});
router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Could not log out, please try again");
    }
    res.send("Logged out successfully");
  });
});
module.exports = router;
