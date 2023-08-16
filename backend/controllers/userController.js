const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");

// Register a user
exports.register = async (req, res) => {
  // get data from request body
  const { username, password, email } = req.body;

  // try-catch block
  try {
    // checks if username exists already
    const existingUser = await User.findOne({ username });

    // send back the res
    if (existingUser) {
      return res.status(409).json({ message: "Usern already exists" });
    }

    // unique username -> user is created & saved
    const newUser = new User({ username, password, email, privilege: "Read" });
    await newUser.save();

    // send success message
    res.json({ message: "User registered successfully" });
  } catch (err) {
    // log the error for debugging
    console.error("Error registering user:", err);
    // send error message
    res.status(500).json({ message: "Failed to register user" });
  }
};

// Login a user
exports.login = async (req, res) => {
  // get data from request body
  const { username, password } = req.body;

  // try-catch block
  try {
    // searches for the user
    const user = await User.findOne({ username, password });

    // if user is not found
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // JWT token is generated using the user's ID and secret key
    const token = jwt.sign({ userId: user._id }, "secretKey");

    // send token
    res.json({ token });
  } catch (err) {
    // log the error for debugging
    console.error("Error logging in:", err);
    // send error message
    res.status(500).json({ message: "Failed to log in" });
  }
};

// Change password for a user
exports.changePassword = async (req, res) => {
  // get data from request body
  const { username, currentPassword, newPassword } = req.body;

  // try-catch block
  try {
    // Find the user by username and current password
    const user = await User.findOne({ username, password: currentPassword });

    // If user is not found or current password is incorrect
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Update the user's password with the new password
    user.password = newPassword;
    await user.save();
    // send success message
    res.json({ message: "Password changed successfully" });
  } catch (err) {
    // log the error for debugging
    console.error("Error changing password:", err);
    // send error message
    res.status(500).json({ message: "Failed to change password" });
  }
};
