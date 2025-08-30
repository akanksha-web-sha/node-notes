const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/anything")
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err.message));
// min, max, minlength, maxlength, enum, match, required, unique
/*

role: {
  type: String,
  enum: ['user', 'admin', 'moderator']
}

*/
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
    minlength: [3, "Name must contain at least 3 characters!"]
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/, "Please provide a valid email address!"],
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
            name: "aks",
            email: "jishan@gmail.in",
            phone: "+910987654321"
        }

        
        const createdUser =   await userModel.create(userData);
        res.json({user: createdUser});

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
        res.json({message: error.message})
    }
});

app.listen(8080, () => console.log("localhost:8080"));
