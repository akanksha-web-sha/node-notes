const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/anything")
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err.message));

const userSchema = new mongoose.Schema({
  name: {
    type: String
  },

  email: {
    type: String,
    unique: true
  },
  phone: {
    type: String,
    unique: true
  }
});

const userModel = mongoose.model("users", userSchema);

app.get("/register", async (req, res) => {
    try {
        const userData = {
            name: "Tashif",
            email: "tashif3@gmail.com",
            phone: "+911234566890"
        }

        const createdUser =   await userModel.create(userData);
        res.json({user: createdUser});

    } catch (error) {
        if(error.code==11000){
          const fieldName = Object.keys(error.keyValue)[0];
          return res.status(400).json({error:`The ${fieldName} has already been taken!`});
        }
        res.json({message: error.message})
    }
});

app.listen(8080, () => console.log("localhost:8080"));
