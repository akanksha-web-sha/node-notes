const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/authRouter");
const productRouter = require("./routes/productRouter");

const app = express();
app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(
    "mongodb://127.0.0.1/nara"
  )
  .then(() => console.log("connected to the authentication database!"))
  .catch((err) => console.log("Something went wrong with db connection!", err));

app.use("/user", authRouter);
app.use("/product", productRouter)

app.listen(8080, () => console.log("localhost:8080"));