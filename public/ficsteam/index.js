const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const app = express();
const profile = require("./routes/api/profile");
const application = require("./routes/api/application.jsx");
const userQuery = require("./routes/api/user.jsx");
const career = require("./routes/api/career.jsx");
//for the news scraper
const news = require("./routes/api/news");

const key = require("./config/key");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const connectDatabase = require("./Connection/db.js");

connectDatabase(); // Connect to MongoDB
const corsOptions = {
  origin: process.env.Frontend_URL || "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["Content-Length", "X-Total-Count"],
  credentials: true,
};

app.use(cors(corsOptions));
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: key.SecretKey,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Configure Passport strategies (JWT and Google)
require("./config/passport")(passport);

//scheduler for news scraper to update the news every 12 hrs
require("./scheduler");

// Routes
app.use("/api/profile", profile);
app.use("/api/application", application);
app.use("/api/career", career);
app.use("/api/query", userQuery);
//for the news page
app.use("/api/news", news);

//testing
app.get("/", (req, res) => {
  res.send("Welcome to the Backend API!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
