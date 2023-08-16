/*This code defines several middleware functions for different purposes.
These middleware functions are used in route handlers to perform specific checks or tasks. */

// import necessary modules
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

// Middleware to respond with HTTP 403 for non-gmail users
const gmailUserMiddleware = (req, res, next) => {
  try {
    // gets the username from the request body
    const { username } = req.body;
    // checks if username ends with "@gmail.com"
    if (!username || !username.endsWith("@gmail.com")) {
      return res.sendStatus(403);
    }
    // calls the next function
    next();
  } catch (err) {
    // catches error & sends a message
    res.status(400).json({ message: "Invalid request" });
  }
};

// Middleware to reject the addition of tasks that exceed 140 characters.
const taskLengthMiddleware = (req, res, next) => {
  // gets the task title from the request body
  const { title } = req.body;
  // checks if the title's length is more than 140 charaters
  if (title.length > 140) {
    return (
      res
        // sends a Bad Request status code with corr error message
        .status(400)
        .json({ message: "Task title exceeds 140 characters" })
    );
  }
  // calls the next function
  next();
};

// Middleware to Reject any requests that are not of the JSON content type
const jsonContentTypeMiddleware = (req, res, next) => {
  // gets the header from the request header
  const contentType = req.headers["content-type"];

  // checks if the content-type is not set to "application/json"
  if (contentType !== "application/json") {
    // sends an Unsupported Media Type status code with corr error message
    return res.status(415).json({ message: "Unsupported Media Type" });
  }
  // calls the next function
  next();
};

// Middleware that performs user authentication using a JWT
const authenticateUserMiddleware = async (req, res, next) => {
  try {
    // JWT token is in the Authorization header
    const token = req.headers.authorization.split(" ")[1];

    // Verify the JWT token
    const decoded = jwt.verify(token, "secretKey");

    // extracts userId
    const userId = decoded.userId;

    // Retrieve the user from the database
    const user = await User.findById(userId);

    // if the user is not found
    if (!user) {
      // sends an Unauthorized status code with corr error message
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Attach the authenticated user to the request object
    req.user = user;

    // calls the next function
    next();
  } catch (err) {
    // catches error & sends a message
    res.status(401).json({ message: "Unauthorized" });
  }
};   



 




// export middleware functions
module.exports = {
  //gmailUserMiddleware,
  taskLengthMiddleware,
  jsonContentTypeMiddleware,
  authenticateUserMiddleware,
  //passwordStrengthMiddleware, // Add the new middleware
};
