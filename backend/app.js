const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const stuffRouter = require("./routes/stuff");
const userRouter = require("./routes/user");

const app = express();

mongoose
  .connect(
    "mongodb+srv://mahreo:NH893Br6ZUgVymXR@cluster0.icpj0.mongodb.net/<dbname>?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Successfully connected to MongoDB atlas");
  })
  .catch((error) => {
    console.log("Unable to connect to MongoDB atlas");
    console.log(error);
  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/stuff", stuffRouter);
app.use("/api/auth", userRouter);

//password: NH893Br6ZUgVymXR
//mongodb+srv://mahreo:<password>@cluster0.icpj0.mongodb.net/<dbname>?retryWrites=true&w=majority

module.exports = app;
