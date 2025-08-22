//npm install -g nodemon

const express = require("express");
const app = express();


function logger(req, res, next){
    console.log("From the logger middleware!");
    next();
}

function register(req, res, next){
    console.log("From the register middleware!");
    next();
}

function third(){
    return (req, res, next)=>{
        console.log("Fromt the middleware returned by the third function!");
        next();
    }
}

app.use(register);
app.use(logger);
app.use(third());


app.get("/", (req, res)=>{

    res.status(200).json({message: "Hello there!"});
});

app.get("/contact", (req, res)=>{
    res.status(200).json({message: "You want to contact us!"});
})

app.get("/about", (req, res)=>{
    res.json({message: "Nothing much to say!"});
})






// express.json()

// app.get("/register", logger, register,third(),(req, res)=>{
//     res.json({message: "You want to signup"});
// })

app.get("/register",(req, res)=>{
    res.json({message: "You want to signup"});
})

app.get("/login", (req, res)=>{
    res.json({message: "You wanna login!"});
})




// app.all(/.*/, (req, res)=>{
//     res.status(404).send({message: "Not Found!"});
// });

// app.use((req, res, next)=>{
//     res.status(404).json({message: "Not Found!"})
// });
app.listen(8080,()=>console.log("Listening on port 8080"));

app.all("/abc", (req, res)=>{res.send("ahsjdhasd")})
/*
Express:

    GET, POST, PUT, PATCH, DELETE

    GET - to request a resource
    POST - Create an entirely new resource
    PUT - Replace an existing resource entirely
    PATCH - update just one part of a resource (password update)
    DELETE - Delete a resource


Basic server setup
Request-response cycle and middleware
all path handler
404 route handler


*/

