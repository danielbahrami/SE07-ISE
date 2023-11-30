const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");
const cors = require("cors");

const app = express();
app.use(cors()); // This will enable CORS for all routes
app.use(express.json()); // Middleware for parsing JSON bodies

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Use the userRoutes for all user-related endpoints
app.use(userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
