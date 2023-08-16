/* This code connects to the todoDatabase which has two collections the tasks and the users */

// import mongoose
const mongoose = require("mongoose");

// this variable holds the connection string for the todoDatabase -> runs on port 27017
const uri =
  "mongodb+srv://admin:admin@goldours.pxgfupc.mongodb.net/?retryWrites=true&w=majority";

// This function establishes a connection
const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      // this ensures that the latest connection string parser is used and handles server discovery and monitoring in a unified way
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error.message);
    // terminates the app instead of continuings
    process.exit(1);
  }
};

// exported to be used in app.js
module.exports = connectDB;
