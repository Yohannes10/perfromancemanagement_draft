/* This code sets up an Express server with middleware, routes, and error handling, and connects to a database.*/

// require necessary modules using require statement
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

// connect to database from config folder
const connectDB = require("./config/connect");

// set up environment varible -> defines PORT on which the server will run
const PORT = 8080 || process.env.PORT;

// routing setup -> requires route modules used to handle different routes
const indexRouter = require("./routes/index");
const authRouter = require("./routes/authRoutes");
const taskRouter = require("./routes/taskRoutes");
const { getAllDepartmentalGoals } = require("./controllers/taskController");



// create express app
const app = express();

// Helmet middleware added for security
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "example.com"],
      },
    },
    xssFilter: true,
    noSniff: true,
    referrerPolicy: true,
    hsts: true,
    hidePoweredBy: true,
    noCache: true,
    XContentOptions: "nosniff",
  })
);

// cors middleware is used to enable Cross-Origin Resource Sharing, allowing the server to handle requests from different domains.
app.use(
  cors({
    origin: "*",
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// logger middleware -> for request logging
app.use(logger("dev"));
// express.json and express.urlencoded for parsing request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// cookie-parser for handling cookies
app.use(cookieParser());
// servers static files
app.use(express.static(path.join(__dirname, "public")));

// Route handling -> sets up defined routes to handle specific rotes
app.use("/", indexRouter);
app.use("/users", authRouter);
app.use("/tasks", taskRouter);
app.get("/departmental-goals", getAllDepartmentalGoals);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// connect to database
connectDB();

// start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// export the app
module.exports = app;
