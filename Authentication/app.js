const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/authRouter");

const app = express();
app.use(express.json());
app.use(cookieParser());


app.use("/user", authRouter);

// /user/signup

mongoose
  .connect("mongodb://127.0.0.1:27017/authentication")
  .then(() => console.log("Connected to the authentication database!"))
  .catch((err) => console.log("Something went wrong with db connection!", err));



app.listen(8080, () => console.log("localhost:8080"));
