//npm install -g nodemon
const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.status(200).json({message: "Hello there!"});
});

app.get("/contact", (req, res)=>{
    res.status(200).json({message: "You want to contact us!"});
})

app.get("/about", (req, res)=>{
    res.json({message: "Nothing much to say!"});
})

function logger(req, res, next){
    console.log("From the logger middleware!");
    next();
}

function register(req, res, next){
    console.log("From the register middleware!");
    next();
}
// express.json()

app.get("/register", logger, (req, res)=>{
    res.json({message: "You want to signup"});
})

app.listen(8080,()=>console.log("Listening on port 8080"));

