//npm install mongoose
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/social")
  .then(() => console.log("connected!"))
  .catch((error) => console.log(error.message));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  password: String,
});

const UserModel = mongoose.model("users", userSchema);

app.post("/signup", async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const createdDoc = await UserModel.create({ name, email, phone, password });
    res.status(201).json({status: "OK", message: createdDoc});
  } catch (error) {
    res.status(400).json({error: error.message})
  }

});

app.listen(8080, () => console.log("localhost:8080"));
