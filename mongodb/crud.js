//npm install mongoose
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/anything")
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
    res.status(201).json({ status: "OK", message: createdDoc });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.findOne({ name: "Tashif" });
    res.json({ message: users });
  } catch (error) {
    res.json({ error: "Something went wrong!" });
  }
});

app.get("/update", async (req, res) => {
  try {
    // const user = await UserModel.findOne({ email: "anjalggi@gmail.com" });

    // const user = await UserModel.findById("68b2e3565c2595a5985043b6")

    const user = await UserModel.findById({_id: "68b2e3565c2595a5985043b6"})

    if (user == null) throw new Error("user not found!");

    user.name = "Ankita Singhania";
    user.email = "ankit@yahoo.inininin"
    await user.save();


    res.json({ message: "User document updated successfully!" });
  } catch (error) {
    res.json({ error: error.message });
  }
});
app.listen(8080, () => console.log("localhost:8080"));
