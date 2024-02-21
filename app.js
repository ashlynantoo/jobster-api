require("dotenv").config();
require("express-async-errors");

const path = require("path");

//extra security packages
const helmet = require("helmet");
const xss = require("xss-clean");

const express = require("express");
const app = express();

//connectDB
const connectDB = require("./db/connect");

//Routers
const authRouter = require("./routes/auth");
const jobsRouter = require("./routes/jobs");

//Authentication
const authenticateUser = require("./middleware/authentication");

// error handler
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");

app.set("trust proxy", 1);

app.use(express.static(path.resolve(__dirname, "./client/dist")));
app.use(express.json());
app.use(helmet());
app.use(xss());

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connected to DB");
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
