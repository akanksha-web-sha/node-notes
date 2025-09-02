// Signup
// Login
// JWT Token


// find all, findOne, find and update and save

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/authentication")
    .then(()=>console.log("Connected to the authentication database!"))
    .catch((err)=>console.log("Something went wrong with db connection!", err));

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, "Name must contain at least 3 characters"],
        required: [true, "Name is required"],
        maxlength: [30, "Name must not contain more than 30 characters!"]
    },

    email: {
        type: String,
        unique: true,
        match: [/^[A-Za-z0-9._]+@[A-Za-z]+\.[A-Za-z]{2,}$/, "Please provide a valid email address"],
        required: [true, "Email is required"]
    },
    phone: {
        type: String,
        unique: true,
        match: [/^[0-9]{10}$/, "Please provide a valid phone number"],
        required: [true, "Phone is required"]
    },
    password: {
        type: String,
        
        required: [true, "Password is required"],
       
    }
});

const User = mongoose.model("users", userSchema);

app.post("/signup",async (req, res)=>{
    try {
        let {name, email, phone, password} = req.body;
        if(!name || !email || !phone || !password) 
            throw new Error("Missing required fields!");

        // if(password.length<8) throw new Error("Password must be at least 8 characters long");

        password = await bcrypt.hash(password, 12);

        const createdUser = await User.create({name, email, phone, password});
        createdUser.password = undefined;
        res.status(201).json({message: createdUser});
    } catch (error) {
        if(error.name == "ValidationError"){
            const allErrors = error.errors;
            const errors = Object.keys(allErrors).map(function(key){
              return allErrors[key].message;
            });
            return res.status(400).json({error: errors});
          } 
          if(error.code==11000){
            const fieldName = Object.keys(error.keyValue)[0];
            return res.status(400).json({error:`The ${fieldName} has already been taken!`});
          }

        res.status(400).json({message: error.message})
    }
})

app.listen(8080, ()=>console.log("localhost:8080"))