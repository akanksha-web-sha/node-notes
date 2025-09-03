// Signup
// Login
// JWT Token

// find all, findOne, find and update and save

const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());

mongoose
  .connect("mongodb://127.0.0.1:27017/authentication")
  .then(() => console.log("Connected to the authentication database!"))
  .catch((err) => console.log("Something went wrong with db connection!", err));

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [3, "Name must contain at least 3 characters"],
    required: [true, "Name is required"],
    maxlength: [30, "Name must not contain more than 30 characters!"],
  },

  email: {
    type: String,
    unique: true,
    match: [
      /^[A-Za-z0-9._]+@[A-Za-z]+\.[A-Za-z]{2,}$/,
      "Please provide a valid email address",
    ],
    required: [true, "Email is required"],
  },
  phone: {
    type: String,
    unique: true,
    match: [/^[0-9]{10}$/, "Please provide a valid phone number"],
    required: [true, "Phone is required"],
  },
  password: {
    type: String,
    select: false,
    required: [true, "Password is required"],
  },
});

const User = mongoose.model("users", userSchema);

app.post("/signup", async (req, res) => {
  try {
    let { name, email, phone, password } = req.body;
    if (!name || !email || !phone || !password)
      throw new Error("Missing required fields!");

    // if(password.length<8) throw new Error("Password must be at least 8 characters long");

    password = await bcrypt.hash(password, 12);

    const createdUser = await User.create({ name, email, phone, password });
    createdUser.password = undefined;
    res.status(201).json({ message: createdUser });
  } catch (error) {
    if (error.name == "ValidationError") {
      const allErrors = error.errors;
      const errors = Object.keys(allErrors).map(function (key) {
        return allErrors[key].message;
      });
      return res.status(400).json({ error: errors });
    }
    if (error.code == 11000) {
      const fieldName = Object.keys(error.keyValue)[0];
      return res
        .status(400)
        .json({ error: `The ${fieldName} has already been taken!` });
    }

    res.status(400).json({ message: error.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Invalid credentials!");
    const user = await User.findOne({ email });
    if (!user) throw new Error("Invalid credentials!");
    const correctPass = await bcrypt.compare(password, user.password);
    if (!correctPass) throw new Error("Invalid credentials!");


    const token = await jwt.sign({userId: user._id}, "mysecretkey", {expiresIn: "90d"});
    res.cookie("jwt", token, {maxAge: 1000*60*60*24*90});

    res.status(200).json({message: "Logged In!"});

  } catch (error) {
    console.log(error);
    res.status(400).json({message: error.message})
  }
});


app.get("/profile", async(req, res)=>{
    try {
        const token = req.cookies.jwt;
        if(!token) throw new Error("Unauthorized!");

        const payload = await jwt.verify(token, "mysecretkey");
        const userId = payload.userId;
        const user = await User.findOne({_id: userId});

        if(!user) throw new Error("Invalid token!");

        res.status(200).json({message: user});

    } catch (error) {
        res.status(400).json({message: error.message});
    }
})
app.listen(8080, () => console.log("localhost:8080"));
