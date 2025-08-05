//middlewares+contact form + status codes + dotenv
//npm install cors
const cors = require("cors");
const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sanjanadagar301@gmail.com",
    pass: "",
  },
});

app.use(cors());


app.post("/contact", express.json(),async (req, res)=>{
    try {
        const contactMail = "imamansari9711@gmail.com";
        const {name, email, message} = req.body;
        const contactMsg = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
      
        await transporter.sendMail({to: contactMail, text: contactMsg});

        res.status(200).json({message: "OK"});

        await transporter.sendMail({to: email, text: "We have received your query!"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "something went wrong!"});
    }
})

app.listen(8080, ()=>console.log("8080"));